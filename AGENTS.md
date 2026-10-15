# AGENTS.md — hcentlab.com corporate website

Base project information for AI coding agents and human contributors.
**This file is the single source of truth for company facts, domain, stack, and deploy commands.**
If reality and this file disagree, fix this file in the same change.

---

## 1. Company — authoritative facts

| Field | Value |
| --- | --- |
| Legal name (EN) | Shenzhen Homecent Trading Co., Ltd. |
| Legal name (ZH) | 深圳市宅迅贸易有限公司 |
| Brand / wordmark | Homecent |
| Primary domain | **hcentlab.com** (DNS managed by Cloudflare) |
| Canonical origin | `https://hcentlab.com` (apex; `www` 301-redirects to apex) |
| Core business (EN) | Software product development and technical support |
| 主营业务 (ZH) | 软件产品开发与技术支持 |
| Base of operations | Shenzhen, Guangdong, China |
| Company contact (负责人) | **Ribin Ding** — ribin.ding@hcentlab.com |
| Site languages | English (default) + Simplified Chinese |

### 1.1 Facts that are NOT yet confirmed — do not invent them

These are outstanding questions for the client. Until answered, the site must not state them:

- **Registered address** — not supplied. Do not fabricate a street address.
- **Phone / WeChat** — not supplied. Do not fabricate a phone number.
- **ICP filing (备案号)** — not supplied. Cloudflare's edge is outside mainland China, so no ICP filing is
  strictly required for this deployment; one *is* required if the site is ever served from a mainland CDN.
  Leave the footer ICP slot empty, do not invent a number.
- **Legal name punctuation** — supplied as "Shenzhen Homecent Trading Co,.Ltd."; the site uses the standard
  form `Shenzhen Homecent Trading Co., Ltd.`. Confirm against the business licence.
- **Founded year, headcount, client logos, case studies, certifications** — none supplied. Never invent
  numbers, logos, awards, or testimonials.

> Rule: **marketing copy may be written, but no verifiable claim (number, logo, certification, address,
> phone, registration) may be invented.** When in doubt, write qualitatively and leave a TODO comment.

Confirmed since first draft: the company contact is **Ribin Ding** and the public mailbox is
**ribin.ding@hcentlab.com**. Both live in `src/i18n/ui.ts` (`contact.person.value`,
`contact.email.value`) and must be edited there only — the footer, the contact card, the company
record on `/about/` and the JSON-LD `ContactPoint` all read from those two keys.

---

## 2. Project goal

Build and ship the public corporate website for Homecent / 深圳市宅迅贸易有限公司:

1. Present the company — who it is, what it does (software product development + technical support).
2. Convert visitors into enquiries (contact CTA on every page).
3. Be fully bilingual: **English is the default locale**, Simplified Chinese is the secondary locale.
4. Run on Cloudflare: **Workers with Static Assets** (the "Workers & Pages" product family), with the
   apex domain `hcentlab.com` attached as a custom domain.
5. Be fast, accessible, and SEO-clean: static HTML, **zero client JavaScript**, valid structured data.

Non-goals for the current scope: user accounts, CMS/admin UI, e-commerce checkout, blog engine.

---

## 3. Language & internationalisation rules

| Rule | Detail |
| --- | --- |
| Default locale | English — served at `/` (no `/en/` prefix) |
| Secondary locale | Simplified Chinese — served under `/zh/` |
| Locale codes | `en`, `zh` (see `src/i18n/ui.ts`) |
| Source of truth for copy | `src/i18n/ui.ts` — **all** user-visible strings live here, in both locales |
| Hard rule | Never hard-code user-visible copy inside a component or page; always add a key to `ui.ts` |
| Missing translation | A missing key must fail the build, not silently fall back to English |
| Language purity | One language per page: running copy, labels, tables, captions and each locale's `<title>` never mix scripts. Deliberate exceptions: the other language's own name in the switcher , and proper nouns (people, email addresses, licences, shell commands). Work titles in credit lines follow the reading language; the exact originals stay in `src/assets/credits.json` behind each Source link |
| Inline join | Label-to-text and caption-to-credit joins go through `sep.inline` (en `' '`, zh `''`), never a hard-coded `{' '}` — a half-width space between two Han runs is the one format a Chinese page must not show |
| Alternates | Every page emits `<link rel="alternate" hreflang="en|zh|x-default">` |
| Language switcher | Present in the header on every page, links to the *same* page in the other locale |

Route parity is mandatory: **every** page under `src/pages/` must exist under `src/pages/zh/` with the
same path shape (`/about` ↔ `/zh/about`). Adding one without the other is an incomplete change.

---

## 4. Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Site framework | **Astro 7** (static output, zero client framework) | Ships HTML by default, ideal for a marketing site |
| Styling | Hand-written CSS with design tokens in `src/styles/global.css` | No CSS framework weight; full control of the visual language |
| Display type | Self-hosted `@fontsource-variable/inter` | Readable variable Latin typography; Chinese uses the system sans stack |
| Language | TypeScript (strict) | Type-safe content and i18n dictionaries |
| SEO | `@astrojs/sitemap` + hand-written `robots.txt` + JSON-LD | Correct hreflang and crawl signals |
| Hosting | **Cloudflare Workers Static Assets** | One deploy target for HTML/CSS/JS + edge logic |
| Edge logic | `worker/index.ts` (runs first, `assets.run_worker_first: true`) | Canonical-host redirect, security headers, asset serving |
| Package manager | npm | Present on every machine; lockfile committed |
| VCS | **git** (repo root = project root, default branch `main`; GitHub remote
      `BeanYa/hclab-site`, **public**, verified 2026-10-15) | Project management is git-based |

Deliberate non-choices: no Tailwind, no React/Vue islands, no external font CDN, no analytics vendor.
Revisit only with a written reason.

---

## 5. Repository layout

```
.
├── AGENTS.md              # this file — project + company source of truth
├── README.md              # human quick start + deploy runbook
├── astro.config.mjs       # site URL, i18n routing, sitemap
├── wrangler.jsonc         # Cloudflare Worker + static assets config
├── public/                # copied verbatim to the site root (robots, icons, OG cards)
│   └── media/             # the one clip used on the site (webm + poster frame)
├── scripts/
│   ├── postbuild.mjs      # materialises dist/zh/404.html for Cloudflare's nearest-404 rule
│   ├── csp-hashes.mjs     # hashes inline scripts -> worker/csp-hashes.json
│   ├── verify-build.mjs   # asserts dist/ is complete and self-consistent
│   ├── smoke.mjs          # HTTP smoke test (local or production)
│   └── generate-images.py # regenerates the raster brand assets (needs Pillow)
├── worker/
│   ├── index.ts           # edge entry: canonical host, security headers, asset serving
│   ├── redirect.ts        # pure redirect rules
│   └── redirect.test.mjs  # unit tests for those rules (npm test)
└── src/
    ├── i18n/locales.mjs   # locale registry — plain JS so astro.config.mjs can read it (see §7)
    ├── i18n/ui.ts         # EN + ZH copy dictionaries (source of truth for text)
    ├── i18n/utils.ts      # locale helpers: t(), alternates, paths, mailto, picture credits
    ├── assets/            # the found photographs (+ credits.json recording licence and source)
    ├── layouts/BaseLayout.astro   # <head>, SEO, hreflang, JSON-LD
    ├── components/Header.astro, Footer.astro, ReachField.astro
    ├── components/sections/       # Hero, Intro, ServicesSplit, Chooser, Process, Proof,
    │                              # PhotoBand, ClipBand — composed by the page bodies
    ├── components/pages/  # one <Name>Body.astro per page, shared by both locales
    ├── styles/global.css  # design tokens, layouts, sections, motion (see §6)
    └── pages/             # routes; zh/ mirrors the English tree
```

Generated and git-ignored (recreated by `npm run build` and `npm run check`):
`worker-configuration.d.ts` and `worker/csp-hashes.json`.

---

## 6. Design language — Connected engineering

The client explicitly superseded the original art direction on 2026-10-15:
retain repository information, replace the visual style with a contemporary,
readable technology-company website. The earlier risograph style is historical.
The current design system is documented in DESIGN.md.

- Light editorial surfaces, forest-green accents, self-hosted Inter Variable,
  generous spacing, precise borders, restrained shadows and 7–18px radii.
- The hero combines a service proposition and a custom layered system diagram.
  It is explicitly an architecture illustration, not a client product screenshot.
- The service grid uses varied modules; each links to a service-page anchor.
- A dark engineering section presents verifiable implementation facts. Detailed
  evidence tables expand through a native details element.
- Photographs remain naturally colored, with their existing source credits.
- English and Chinese share the system, with Chinese-specific typography.
- All visible copy remains in ui.ts. Do not invent company facts or metrics.
- Zero production client JavaScript. Menus and disclosure panels use details;
  the enquiry chooser uses radios and CSS :has(), with all panels readable in
  browsers without :has().
- Semantic landmarks, visible focus, body contrast at least 4.5:1, readable text
  at least 13px, responsive layouts and reduced-motion support are mandatory.
- The current HTML design marker is connected-engineering. The former seed
  894b03be, misprint effects, inks and poster typography are not current gates.
- Gates: npm run check, npm test, npm run build, npm run verify, local Worker
  smoke checks, desktop/mobile browser inspection, EN/ZH route parity.

---
## 7. Commands

```bash
npm install              # install dependencies
npm run dev              # Astro dev server        → http://localhost:4321
npm run build            # static build            → dist/
npm run preview          # serve the built output  → http://localhost:4321
npm run check            # astro check (types + template diagnostics)
npm run deploy           # build, then wrangler deploy (needs Cloudflare auth)
npm run deploy:dry       # build + wrangler deploy --dry-run (no auth needed)
npm run cf:dev           # build, then run the real Worker + assets locally
npm run cf:types         # regenerate worker-configuration.d.ts from wrangler.jsonc
npm test                 # unit tests for the edge redirect rules
npm run verify           # assert dist/ is complete and self-consistent
npm run smoke            # HTTP smoke test against the local Worker
```

### Definition of done for any change

Run, in this order, and report the results:

1. `npm run check` — types and templates (`0 errors` expected)
2. `npm test` — edge redirect rules
3. `npm run build && npm run verify` — output completeness (`0 failed` expected)
4. `npm run cf:dev` in one shell, `npm run smoke` in another — real Worker behaviour

### Edge cases worth knowing

- **`wrangler dev` binds the local server to the route host.** Every local request arrives as
  `http://hcentlab.com/...` no matter which URL you open. Never branch on `url.protocol` in the
  Worker: use the edge's `x-forwarded-proto` header, which is absent in local development.
  This exact mistake caused an infinite redirect loop during initial development.
- **`wrangler dev` must be restarted after a `dist/` rebuild.** Its asset manifest desyncs when the
  build output is regenerated underneath the running server and `GET /` starts returning 404.
  Stop the background `npm run cf:dev` and start it again.
- **Run only ONE `wrangler dev` per checkout.** All instances share the local state database in
  `.wrangler/state/v3`, and the second one dies at startup with
  `kj::Exception: sqlite.c++: database is locked: SQLITE_BUSY`. Two instances started during the
  first review session killed each other three times, which looked superficially like a broken 404
  page and a broken stylesheet. Give a second instance its own store instead:
  `wrangler dev --port 8788 --persist-to .wrangler/state-8788`.
- **A rebuild invalidates a running `wrangler dev`.** The asset manifest is captured at startup, so
  `npm run build` mid-session makes the new hashed `/_astro/*` files 404 until the server restarts.
  Stop the server before rebuilding, or reload after it.
- **CSP has no `unsafe-inline`.** The inline JSON-LD block is allowed by hash only, and the hashes
  are generated from the built HTML. Adding any inline script or style would be blocked — `npm run
  verify` catches the script case.
- **No client-side JavaScript ships.** The mobile menu is a `<details>` element; the chooser is radios
  plus `:has()`; the section entrances are CSS view-timeline animations. Everything degrades to static,
  readable content.
- **`astro.config.mjs` must not import a `.ts` file.** Vite bundles the config, and a TypeScript import
  there pulls Astro's own tooling (magicast, postcss, css-tree) into the config graph as inlined
  CommonJS, which fails on Node 26 with `require is not defined` before the build starts. The locale
  registry therefore lives in plain-JS `src/i18n/locales.mjs`, which `ui.ts` re-exports.
- **Direct git access to `github.com` can be connection-reset from the dev machine** (`api.github.com`
  and the Cloudflare API work directly; the git endpoint may not). When a push fails to connect, route
  it through the local proxy: `git -c http.proxy=http://127.0.0.1:7890 push`. Pass it per-command —
  the proxy is not always running, so don't write it into git config.

## 8. Deployment

Target: Cloudflare **Workers & Pages** → Worker `hcentlab-homecent`, static assets from `./dist`.

```bash
npx wrangler login          # one-time, interactive browser auth
npm run deploy              # build + deploy
```

- `wrangler.jsonc` declares `routes` for `hcentlab.com` and `www.hcentlab.com`.
  The custom domain only attaches once the zone `hcentlab.com` exists in the same Cloudflare account,
  and attaching fails if a conflicting A/AAAA/CNAME record already exists at that name.
  Comment the `routes` block out to deploy to `workers.dev` only.
- **Zone settings required:** SSL/TLS `Full (strict)` and **Always Use HTTPS = ON**. The Worker also
  upgrades plain-HTTP requests using `x-forwarded-proto`; the zone setting is the primary control.
- `www` is 301-redirected to the apex by `worker/index.ts`; do not add a second redirect rule at the zone.
- Secrets, if ever needed, go through `wrangler secret put` — never into `wrangler.jsonc` or source.
- **Never run a production deploy without an explicit instruction from the user.**

---

## 9. Working agreement for agents

1. **Read this file before changing anything.**
2. Keep the two locale trees in sync; a change to one page is a change to both.
3. All copy goes through `src/i18n/ui.ts` — no inline user-visible strings.
4. Run `npm run build` before claiming a change works; run `npm run check` for type safety.
5. Commit in small, coherent commits with `type(scope): summary` messages (e.g. `feat(i18n): add zh about page`).
   Never commit `dist/`, `node_modules/`, or secrets.
6. Do not invent company facts (see §1.1). Add a `TODO:` comment instead.
7. Update this file when you change the stack, the layout, or the deploy procedure.

---

## 10. Status

- [x] Project initialised, git repository created, base information recorded
- [x] Bilingual site (EN default / ZH) implemented — 4 pages per locale + 404s
- [x] Cloudflare Worker + static assets configuration authored and validated
      (`build`, `verify`, `test`, `smoke` and `deploy:dry` all pass)
- [x] Front-end design rebuilt (2026-10, first pass): the tasteskill "type and nothing else" direction.
      Superseded the same month by the risograph rebuild below.
- [x] Front-end re-rebuilt (2026-10): the risograph-overprint world (impeccable seed 894b03be; the client
      picked the risograph-web-system card over the assigned direction). Self-hosted Archivo Black display,
      two-ink duotone photography, offset print passes, CSS-only motion. Gate: check/test/verify/smoke green
      (smoke 56/56), design detector clean, finish review disposition "ship"; DESIGN.md records the system.
- [x] Language-and-format purity pass (2026-10): each locale renders in exactly one language —
      per-locale credit titles, single-script record tables, pure `<title>`s, `sep.inline` joins, a Han
      typography block for the Chinese page. Gate: mixed-script audit clean on all eight content pages,
      `check`/`test`/`verify`/`smoke` all green (smoke 56/56).
- [x] Cloudflare authentication and first production deploy — shipped 2026-10-15
      (version c70c4b9d; apex + www custom domains attached, http→https and www→apex redirects
      verified live, smoke 56/56 against https://hcentlab.com)
- [x] Contemporary visual redesign (2026-10-15): light editorial surfaces, forest-green accents, self-hosted Inter, custom architecture diagram and responsive service modules. Supersedes the prior risograph direction. EN/ZH parity retained; check/test/build/verify/smoke passed; mobile routes and native interactions inspected.
- [ ] Confirm remaining §1.1 open facts (street address, phone, ICP, legal-name punctuation)
- [x] Company contact recorded: Ribin Ding — ribin.ding@hcentlab.com
- [ ] Optional follow-ups: full favicon set refresh at production deploy, analytics decision,
      the §6 "deliberately unused" print artefacts (crop/registration marks, ink-field texture tiers)

> Update the checkboxes above in the same commit that changes the underlying state.
