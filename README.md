# hcentlab.com — corporate website

Corporate website for **Shenzhen Homecent Trading Co., Ltd.** (深圳市宅迅贸易有限公司),
a Shenzhen software company providing **software product development and technical support**.

Bilingual: **English is the default locale** at `/`; Simplified Chinese is served under `/zh/`.
Static site built with Astro, served from Cloudflare Workers static assets, with a thin edge
Worker for the canonical host and security headers.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Astro dev server with hot reload (http://localhost:4321) |
| `npm run build` | Builds `dist/`, then runs the post-build fixups and CSP hashing |
| `npm run preview` | Serves the built `dist/` locally |
| `npm run cf:dev` | Builds, then runs the **real Worker + assets** (http://127.0.0.1:8787) |
| `npm run check` | `wrangler types` + `astro check` — types and template diagnostics |
| `npm test` | Unit tests for the edge redirect rules |
| `npm run verify` | Asserts `dist/` is complete: routes, SEO tags, hreflang, links, CSP hashes |
| `npm run smoke` | HTTP smoke test against the local Worker |
| `npm run smoke https://hcentlab.com` | The same smoke test against production |
| `npm run deploy` | Builds and deploys to Cloudflare (**needs auth**, see below) |

Generated files that are intentionally **not** committed — both are recreated by
`npm run build` and `npm run check`:

- `worker-configuration.d.ts` — Cloudflare binding types (`wrangler types`)
- `worker/csp-hashes.json` — CSP hashes for inline scripts (`scripts/csp-hashes.mjs`)

---

## Editing the content

**All user-visible text lives in one file: `src/i18n/ui.ts`.**

It holds two dictionaries, `en` and `zh`. The English dictionary defines the key set;
the Chinese one is typed as `Record<UIKey, string>`, so **a missing or extra Chinese string
is a build error**. Add a key to both, then use it through `t('your.key')`.

Company facts that must stay accurate are marked in that file and in `AGENTS.md §1.1`.
Do not invent addresses, phone numbers, registration numbers, client names or metrics.

### Adding a page

Routes mirror the locale tree, and both must be added together:

```
src/pages/about.astro       →  /about/       (English)
src/pages/zh/about.astro    →  /zh/about/    (Chinese)
```

Keep shared markup in `src/components/pages/<Name>Body.astro` and let the route files stay thin.

### Images

`public/og/en.png`, `public/og/zh.png` and `public/apple-touch-icon.png` are generated from
`scripts/generate-images.py` (needs Pillow + a CJK font) and committed. Regenerate them only when
the wordmark, tagline or palette changes:

```bash
python scripts/generate-images.py
```

---

## Deployment

Target: Cloudflare **Workers & Pages** — Worker `hcentlab-homecent`, assets from `./dist`.

```bash
npx wrangler login     # one-time, opens a browser
npm run deploy
```

In CI or on a headless machine, set `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit + Zone: Read)
and `CLOUDFLARE_ACCOUNT_ID` instead of logging in.

### What must already be true in the Cloudflare account

1. **The zone `hcentlab.com` exists in the account** and its nameservers are active.
   `wrangler.jsonc` attaches `hcentlab.com` and `www.hcentlab.com` as custom domains; a custom
   domain cannot be attached to a zone in a different account, and attaching fails if a
   conflicting A/AAAA/CNAME record already exists at that name.
2. **SSL/TLS mode is Full (strict)**, and **"Always Use HTTPS" is ON**.
   The Worker also upgrades plain-HTTP requests itself, using the edge's `x-forwarded-proto`
   header, but the zone setting is the primary control.
3. Optionally enable **HSTS** at the zone as well — the Worker already sends
   `Strict-Transport-Security`.

If the zone is not ready yet, comment out the `routes` block in `wrangler.jsonc` and deploy to the
`workers.dev` subdomain first; the site works identically there.

### After deploying

```bash
npm run smoke https://hcentlab.com
```

### Architecture notes

- `assets.run_worker_first = true`: the Worker runs first for every request, applies security
  headers and the canonical-host redirect, then serves the asset through the `ASSETS` binding.
- `assets.not_found_handling = "404-page"`: Cloudflare serves the nearest `404.html`, so
  `/zh/<missing>` gets the Chinese 404 page.
- **Content-Security-Policy without `unsafe-inline`:** the only inline script is the JSON-LD
  block, which CSP would otherwise block. `scripts/csp-hashes.mjs` hashes every inline script in
  the built HTML into `worker/csp-hashes.json`, and the Worker adds those hashes to `script-src`.
  `npm run verify` fails if a hash is missing, so the policy cannot silently break the site.
- **No client-side JavaScript ships at all** — the mobile menu is a `<details>` element and the
  scroll reveal is a CSS view-timeline animation that degrades to static content.

---

## Troubleshooting

- **`wrangler dev` binds to the route host.** Locally, every request arrives as
  `http://hcentlab.com/...` regardless of the URL you typed. Never branch on `url.protocol` in the
  Worker — use `x-forwarded-proto`, which is absent in local development (see `worker/redirect.ts`).
- **`astro check` fails with "cannot find module './csp-hashes.json'"** — run `npm run csp` or
  `npm run build` to regenerate it.
- **Stale types after editing `wrangler.jsonc`** — run `npm run cf:types`.
