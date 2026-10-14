/**
 * Edge entry point for hcentlab.com.
 *
 * Routing model: assets.run_worker_first = true, so every request reaches this
 * Worker. The Worker normalises the host, delegates to the static asset binding,
 * and stamps security + cache headers onto the response.
 *
 * Locale routing is handled by the file layout itself ( / = English, /zh/ = Chinese ),
 * which keeps this script free of content logic.
 */

import cspHashes from './csp-hashes.json';
import { canonicalRedirect, readClientProtocol } from './redirect';

/** Hashed build output never changes, so it is safe to cache immutably. */
const IMMUTABLE_PREFIX = '/_astro/';

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Content-Security-Policy': [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data:",
    "font-src 'self'",
    "style-src 'self'",
    // Hashes are generated from the built HTML by scripts/csp-hashes.mjs so the
    // inline JSON-LD block is allowed without opening up 'unsafe-inline'.
    `script-src 'self'${cspHashes.scriptHashes.map((hash) => ` '${hash}'`).join('')}`,
    "connect-src 'self'",
    "manifest-src 'self'",
    'upgrade-insecure-requests',
  ].join('; '),
};

function withHeaders(response: Response, pathname: string): Response {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  if (pathname.startsWith(IMMUTABLE_PREFIX) && response.ok) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const redirectTo = canonicalRedirect(request.url, readClientProtocol(request.headers.get('x-forwarded-proto')));

    if (redirectTo) {
      return Response.redirect(redirectTo, 301);
    }

    const response = await env.ASSETS.fetch(request);
    return withHeaders(response, new URL(request.url).pathname);
  },
} satisfies ExportedHandler<Env>;
