/**
 * End-to-end smoke test against a running deployment.
 *
 *    node scripts/smoke.mjs                       # local wrangler dev
 *    node scripts/smoke.mjs https://hcentlab.com  # production
 *
 * Checks status codes, bilingual routing, 404 handling, security headers, the
 * CSP hash coverage and immutable asset caching.
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const base = (process.argv[2] ?? 'http://127.0.0.1:8787').replace(/\/+$/, '');

const failures = [];
let passed = 0;

function check(condition, message) {
  if (condition) passed += 1;
  else failures.push(message);
}

async function get(path) {
  const response = await fetch(`${base}${path}`, { redirect: 'manual' });
  const body = await response.text();
  return { response, body };
}

async function expectOk(path, marker) {
  try {
    const { response, body } = await get(path);
    check(response.status === 200, `${path}: expected 200, got ${response.status}`);
    if (marker) check(body.includes(marker), `${path}: body is missing expected marker "${marker}"`);
    return { response, body };
  } catch (error) {
    failures.push(`${path}: request failed (${error.message})`);
    return { response: new Response(null, { status: 0 }), body: '' };
  }
}

/* -- pages ----------------------------------------------------------------- */

const home = await expectOk('/', 'Software products, built and supported end to end.');
await expectOk('/zh/', '软件产品，从研发到长期支持。');
await expectOk('/about/', 'A Shenzhen software team');
await expectOk('/zh/about/', '一支扎根深圳');
await expectOk('/services/', 'Software development and technical support');
await expectOk('/zh/services/', '软件开发与技术支持');
await expectOk('/contact/', 'ribin.ding@hcentlab.com');
await expectOk('/zh/contact/', 'ribin.ding@hcentlab.com');
await expectOk('/contact/', 'Ribin Ding');
await expectOk('/zh/contact/', 'Ribin Ding');
await expectOk('/about/', 'Ribin Ding');
await expectOk('/zh/about/', 'Ribin Ding');

check(home.response.headers.get('content-type')?.includes('text/html'), 'homepage must be served as text/html');
check(home.body.includes('<html lang="en"'), 'English homepage must declare lang="en"');

/* -- static assets --------------------------------------------------------- */

await expectOk('/robots.txt', 'Sitemap:');
await expectOk('/sitemap-index.xml', '<sitemapindex');
await expectOk('/favicon.svg', '<svg');
await expectOk('/site.webmanifest', 'Homecent');
await expectOk('/og/en.png');
await expectOk('/og/zh.png');
await expectOk('/apple-touch-icon.png');

/* -- 404 handling ---------------------------------------------------------- */

try {
  const { response, body } = await get('/definitely-not-a-page/');
  check(response.status === 404, `English 404: expected 404, got ${response.status}`);
  check(body.includes('This page does not exist.'), 'English 404: missing English 404 copy');
} catch (error) {
  failures.push(`English 404 request failed (${error.message})`);
}

try {
  const { response, body } = await get('/zh/definitely-not-a-page/');
  check(response.status === 404, `Chinese 404: expected 404, got ${response.status}`);
  check(body.includes('这个页面不存在。'), 'Chinese 404: expected the Chinese 404 page');
} catch (error) {
  failures.push(`Chinese 404 request failed (${error.message})`);
}

/* -- security headers ------------------------------------------------------ */

const csp = home.response.headers.get('content-security-policy') ?? '';
check(csp.includes("default-src 'self'"), 'CSP must set default-src');
check(csp.includes("frame-ancestors 'none'"), 'CSP must set frame-ancestors');
check(!csp.includes('unsafe-inline'), 'CSP must not allow unsafe-inline');

const { scriptHashes } = JSON.parse(await readFile(join(root, 'worker', 'csp-hashes.json'), 'utf8'));
for (const hash of scriptHashes) {
  check(csp.includes(hash), `CSP is missing the inline script hash ${hash}`);
}

check(home.response.headers.get('x-content-type-options') === 'nosniff', 'missing X-Content-Type-Options');
check(home.response.headers.get('x-frame-options') === 'DENY', 'missing X-Frame-Options');
check(Boolean(home.response.headers.get('strict-transport-security')), 'missing HSTS');
check(Boolean(home.response.headers.get('referrer-policy')), 'missing Referrer-Policy');

/* -- caching --------------------------------------------------------------- */

const cssPath = home.body.match(/href="(\/_astro\/[^"]+\.css)"/)?.[1];
if (!cssPath) {
  failures.push('homepage does not reference a built stylesheet under /_astro/');
} else {
  const asset = await fetch(`${base}${cssPath}`, { redirect: 'manual' });
  check(asset.status === 200, `${cssPath}: expected 200, got ${asset.status}`);
  check(
    (asset.headers.get('cache-control') ?? '').includes('immutable'),
    `${cssPath}: expected an immutable Cache-Control header`,
  );
}

/* -- trailing slash -------------------------------------------------------- */

// Every internal link already uses the trailing-slash form, so this redirect
// only affects hand-typed or externally linked URLs. Cloudflare answers with a
// 307; any redirect status is acceptable here.
try {
  const response = await fetch(`${base}/about`, { redirect: 'manual' });
  check(
    [301, 302, 307, 308].includes(response.status),
    `/about should redirect to the trailing-slash form, got ${response.status}`,
  );
  check(
    (response.headers.get('location') ?? '').endsWith('/about/'),
    `/about should redirect to /about/, got ${response.headers.get('location')}`,
  );
} catch (error) {
  failures.push(`/about redirect check failed (${error.message})`);
}

/* -- report ---------------------------------------------------------------- */

console.log(`\nsmoke: ${passed} checks passed, ${failures.length} failed against ${base}`);

if (failures.length > 0) {
  console.error('\nFailures:');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log('✓ deployment behaves correctly\n');
