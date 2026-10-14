/**
 * Canonical-host rules for hcentlab.com, kept separate from the Worker entry
 * point so they can be unit tested (see redirect.test.mjs).
 */

export const CANONICAL_HOST = 'hcentlab.com';
export const WWW_HOST = `www.${CANONICAL_HOST}`;

/** Hosts this Worker answers for in production. */
const OWNED_HOSTS = new Set([CANONICAL_HOST, WWW_HOST]);

/**
 * Decides whether a request must be redirected, and where to.
 *
 * Two rules:
 *   1. `www.hcentlab.com` always becomes `hcentlab.com` (301, path and query kept).
 *   2. A request the edge reports as plain HTTP is upgraded to HTTPS.
 *
 * Rule 2 deliberately reads `x-forwarded-proto` rather than `url.protocol`.
 * Under `wrangler dev` the local server binds to the configured route host and
 * every request arrives as `http://hcentlab.com/...`, so trusting `url.protocol`
 * produced an endless redirect in development. The edge header reflects the
 * real client-facing scheme, and when it is absent (local development) we leave
 * the request alone. The zone-level "Always Use HTTPS" setting is the primary
 * enforcement; this is the in-Worker backstop.
 */
export function canonicalRedirect(requestUrl: string, clientProtocol: string | null): string | null {
  const url = new URL(requestUrl);

  if (!OWNED_HOSTS.has(url.hostname)) return null;

  const isWww = url.hostname === WWW_HOST;
  const isPlainHttp = clientProtocol === 'http';

  if (!isWww && !isPlainHttp) return null;

  url.protocol = 'https:';
  url.hostname = CANONICAL_HOST;
  return url.toString();
}

/** Normalises the X-Forwarded-Proto header (which may be a comma-separated list). */
export function readClientProtocol(header: string | null): string | null {
  if (!header) return null;
  const [first] = header.split(',');
  const value = first?.trim().toLowerCase();
  return value ? value : null;
}
