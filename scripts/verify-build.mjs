/**
 * Post-build verification. Asserts the properties that would otherwise only be
 * discovered in production:
 *
 *   1. every expected route was generated
 *   2. each page has lang, title, description and the right canonical URL
 *   3. hreflang alternates are complete and consistent with the locale
 *   4. no inline <style> blocks (the edge CSP forbids them)
 *   5. every inline <script> is covered by worker/csp-hashes.json
 *   6. every internal link and referenced asset resolves to a real file in dist
 *   7. the 404 pages are noindex and carry no canonical
 *
 * Run with: npm run verify
 */
import { access, readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const failures = [];
const checks = { passed: 0 };

function check(condition, message) {
  if (condition) {
    checks.passed += 1;
  } else {
    failures.push(message);
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

/** Maps a site path to the file Cloudflare would serve for it. */
function fileForPath(pathname) {
  const clean = pathname.split(/[?#]/)[0];
  if (clean.endsWith('/')) return join(dist, clean, 'index.html');
  if (/\.[a-z0-9]+$/i.test(clean)) return join(dist, clean);
  return join(dist, clean, 'index.html');
}

const pages = [
  { file: 'index.html', lang: 'en', canonical: 'https://hcentlab.com/' },
  { file: 'about/index.html', lang: 'en', canonical: 'https://hcentlab.com/about/' },
  { file: 'services/index.html', lang: 'en', canonical: 'https://hcentlab.com/services/' },
  { file: 'contact/index.html', lang: 'en', canonical: 'https://hcentlab.com/contact/' },
  { file: 'zh/index.html', lang: 'zh-CN', canonical: 'https://hcentlab.com/zh/' },
  { file: 'zh/about/index.html', lang: 'zh-CN', canonical: 'https://hcentlab.com/zh/about/' },
  { file: 'zh/services/index.html', lang: 'zh-CN', canonical: 'https://hcentlab.com/zh/services/' },
  { file: 'zh/contact/index.html', lang: 'zh-CN', canonical: 'https://hcentlab.com/zh/contact/' },
];

const list = (html, pattern) => [...html.matchAll(pattern)].map((match) => match[1]);

/* -- 1..3, 6: content pages ------------------------------------------------ */

for (const page of pages) {
  const path = join(dist, page.file);
  if (!(await exists(path))) {
    failures.push(`missing page: ${page.file}`);
    continue;
  }

  const html = await readFile(path, 'utf8');

  check(html.includes(`<html lang="${page.lang}"`), `${page.file}: wrong or missing <html lang>`);
  check(/<title>[^<]+<\/title>/.test(html), `${page.file}: missing <title>`);

  // CJK packs far more meaning per character, so the sensible length band differs.
  const [minLength, maxLength] = page.lang === 'en' ? [60, 200] : [24, 120];
  const description = list(html, /<meta name="description" content="([^"]*)"/g)[0] ?? '';
  check(
    description.length >= minLength && description.length <= maxLength,
    `${page.file}: meta description length ${description.length} outside ${minLength}-${maxLength}`,
  );

  check(
    html.includes(`<link rel="canonical" href="${page.canonical}"`),
    `${page.file}: canonical should be ${page.canonical}`,
  );

  const english = page.lang === 'en' ? page.canonical : page.canonical.replace('/zh/', '/');
  const chinese = page.lang === 'en' ? page.canonical.replace('hcentlab.com/', 'hcentlab.com/zh/') : page.canonical;

  for (const [tag, href] of [
    ['en', english],
    ['zh-CN', chinese],
    ['x-default', english],
  ]) {
    check(
      html.includes(`hreflang="${tag}" href="${href}"`),
      `${page.file}: missing hreflang ${tag} -> ${href}`,
    );
  }

  check(html.includes('application/ld+json'), `${page.file}: missing JSON-LD structured data`);
  check(!/<style[\s>]/.test(html), `${page.file}: inline <style> would be blocked by the CSP`);
  check(html.includes('connected-engineering'), `${page.file}: current design contract is missing`);
  check(!/<script(?![^>]*type="application\/ld\+json")/.test(html), `${page.file}: executable client JavaScript is not allowed`);

  // Internal links must resolve to something in dist.
  for (const href of new Set(list(html, /href="(\/[^"#?]*)"/g))) {
    if (href.startsWith('//')) continue;
    if (!(await exists(fileForPath(href)))) {
      failures.push(`${page.file}: broken internal link ${href}`);
    }
  }

  // Social images are absolute; map them back onto dist.
  for (const url of new Set(list(html, /content="(https:\/\/hcentlab\.com\/[^"]*)"/g))) {
    const pathname = url.replace('https://hcentlab.com', '');
    if (!(await exists(fileForPath(pathname)))) {
      failures.push(`${page.file}: referenced asset missing on disk: ${pathname}`);
    }
  }
}

/* -- 7: 404 pages ---------------------------------------------------------- */

for (const file of ['404.html', 'zh/404.html']) {
  const path = join(dist, file);
  if (!(await exists(path))) {
    failures.push(`missing 404 page: ${file}`);
    continue;
  }
  const html = await readFile(path, 'utf8');
  check(html.includes('name="robots" content="noindex'), `${file}: 404 page must be noindex`);
  check(!html.includes('rel="canonical"'), `${file}: 404 page must not declare a canonical URL`);
}

/* -- 5: inline scripts are covered by the CSP hash list -------------------- */

const cspPath = join(root, 'worker', 'csp-hashes.json');
if (!(await exists(cspPath))) {
  failures.push('worker/csp-hashes.json missing — run scripts/csp-hashes.mjs');
} else {
  const { scriptHashes } = JSON.parse(await readFile(cspPath, 'utf8'));
  const { createHash } = await import('node:crypto');

  async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) yield* walk(full);
      else yield full;
    }
  }

  let inlineScripts = 0;
  for await (const file of walk(dist)) {
    if (!file.endsWith('.html')) continue;
    const html = await readFile(file, 'utf8');
    for (const match of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
      if (!match[1]) continue;
      inlineScripts += 1;
      const hash = `sha256-${createHash('sha256').update(match[1], 'utf8').digest('base64')}`;
      check(
        scriptHashes.includes(hash),
        `${relative(dist, file)}: inline script hash ${hash} is not in worker/csp-hashes.json`,
      );
    }
  }
  check(inlineScripts > 0, 'expected at least one inline script (JSON-LD) to be present');
}

/* -- static assets --------------------------------------------------------- */

for (const asset of ['robots.txt', 'sitemap-index.xml', 'favicon.svg', 'site.webmanifest', 'og/en.png', 'og/zh.png', 'apple-touch-icon.png']) {
  check(await exists(join(dist, asset)), `missing static asset: ${asset}`);
}

const robots = await readFile(join(dist, 'robots.txt'), 'utf8');
check(robots.includes('Sitemap: https://hcentlab.com/sitemap-index.xml'), 'robots.txt must point at the sitemap');

/* -- report ---------------------------------------------------------------- */

console.log(`\nverify-build: ${checks.passed} checks passed, ${failures.length} failed`);

if (failures.length > 0) {
  console.error('\nFailures:');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log('✓ dist/ is consistent: routes, SEO metadata, hreflang, CSP hashes, links, assets\n');
