/**
 * Computes a CSP sha256 hash for every inline <script> in the built site and
 * writes them to worker/csp-hashes.json, which worker/index.ts imports.
 *
 * Why this exists: Cloudflare's CSP applies to <script type="application/ld+json">
 * even though that block never executes, so a strict "script-src 'self'" would
 * silently block the site's structured data. Hashing the exact inline payload
 * keeps the policy strict without 'unsafe-inline'.
 *
 * Runs as part of `npm run build`; also safe to run at any time (it writes an
 * empty list when dist/ does not exist yet, which keeps `astro check` happy).
 */
import { createHash } from 'node:crypto';
import { access, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(root, 'dist');
const outFile = join(root, 'worker', 'csp-hashes.json');

/** <script> tags without a src attribute: the ones a CSP hash must cover. */
const INLINE_SCRIPT = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const hashes = new Set();
let htmlFiles = 0;

if (await exists(distDir)) {
  for await (const file of walk(distDir)) {
    if (!file.endsWith('.html')) continue;
    htmlFiles += 1;
    const html = await readFile(file, 'utf8');
    for (const match of html.matchAll(INLINE_SCRIPT)) {
      const body = match[1];
      if (!body) continue;
      hashes.add(`sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}`);
    }
  }
} else {
  console.warn('[csp] dist/ not found — writing an empty hash list.');
}

const scriptHashes = [...hashes].sort();

await mkdir(join(root, 'worker'), { recursive: true });
await writeFile(outFile, `${JSON.stringify({ scriptHashes }, null, 2)}\n`, 'utf8');

console.log(
  `[csp] scanned ${htmlFiles} HTML file(s); wrote ${scriptHashes.length} inline script hash(es) to ${relative(root, outFile)}`,
);
