/**
 * Small corrections to Astro's static output that Cloudflare's static asset
 * router needs.
 *
 * Astro writes the root 404 to dist/404.html, but a nested 404 page lands at
 * dist/<locale>/404/index.html. Cloudflare serves "the nearest 404.html" for an
 * unmatched path, so /zh/<missing> would otherwise fall back to the English
 * 404 page. Copying the built page to dist/zh/404.html fixes that.
 */
import { access, copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

/** [source, destination] pairs, relative to dist/. */
const copies = [['zh/404/index.html', 'zh/404.html']];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

for (const [from, to] of copies) {
  const source = join(root, 'dist', from);
  const target = join(root, 'dist', to);

  if (!(await exists(source))) {
    console.warn(`[postbuild] skipped ${from} — not in the build output`);
    continue;
  }

  await mkdir(dirname(target), { recursive: true });
  await copyFile(source, target);
  console.log(`[postbuild] ${from} -> ${to}`);
}
