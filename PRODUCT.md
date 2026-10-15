# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users (confirmed 2026-10-15): international enterprise software buyers — companies
overseas evaluating a China-based partner to build or support a software product. They arrive
skeptical, vet quickly, and need to judge credibility and reach a real human without friction.
Secondary audience: Simplified Chinese readers; the Chinese site is an equal-quality mirror, not
an afterthought. English-first is a deliberate, confirmed choice.

## Product Purpose

The corporate website for Shenzhen Homecent Trading Co., Ltd. (brand: Homecent / 宅迅) at
hcentlab.com. It presents the company — software product development and technical support — and
converts visitors into email enquiries. Success means qualified enquiries arriving at
ribin.ding@hcentlab.com.

## Positioning

Two-market fluency (confirmed 2026-10-15): bilingual EN/ZH delivery that bridges international
clients with software built or supported in and around China. This is the claim a single-market
neighbour cannot truthfully copy. Until the client supplies stronger verifiable differentiators,
copy stays qualitative — no invented numbers, logos, or certifications.

## Operating Context

- B2B trust evaluation: buyers compare small development partners; every claim on the site is
  paired with something a visitor can check. Trust is the currency.
- Deployed on Cloudflare Workers + Static Assets at the apex `hcentlab.com`; `www` 301s to apex;
  DNS managed in Cloudflare; edge outside mainland China (no ICP filing required for this
  deployment).
- The site is static HTML with zero client-side JavaScript; interactions are CSS-only.

## Capabilities and Constraints

- Four pages per locale (home, services, about, contact) plus 404s. English default at `/`,
  Simplified Chinese under `/zh/`; route parity is mandatory — a page in one tree must exist in
  the other.
- All user-visible copy lives in `src/i18n/ui.ts` in both locales; a missing translation must
  fail the build. One language per page; no mixed-script running copy.
- Conversion channel (confirmed 2026-10-15): **email only, durably**. Every CTA is a `mailto:` to
  ribin.ding@hcentlab.com. No contact form or backend is planned for the foreseeable future.
- Company contact: Ribin Ding — ribin.ding@hcentlab.com (single source: `contact.*` keys in
  `ui.ts`).
- Explicitly undecided company facts (do not fabricate; leave slots empty with TODOs): registered
  street address, phone/WeChat, ICP filing number, legal-name punctuation ("Co,.Ltd." vs
  "Co., Ltd."), founded year, headcount, client logos, case studies, certifications.
- Non-goals: user accounts, CMS/admin UI, e-commerce, blog engine, analytics vendor.
- Edge Worker (`worker/index.ts`) handles canonical-host redirect and security headers; CSP has
  no `unsafe-inline` — inline JSON-LD is hash-allowlisted from the built HTML.

## Brand Commitments

- Name and wordmark: **Homecent** / **宅迅** (深圳市宅迅贸易有限公司). The two-script name as the
  hero — `Homecent` and `宅迅` each given first-class treatment — is the company's own idea and
  binding.
- Voice: trust-first, restrained, technical, editorial. Qualitative claims welcome; verifiable
  claims (numbers, logos, certifications, addresses) only when true and supplied.
- Language commitment: English default, Simplified Chinese secondary — binding.
- Found photography must never be presented as the client's own product, room, person, or team;
  every picture is credited in place and listed in the footer (`src/assets/credits.json`).

## Evidence on Hand

- Confirmed company facts in `AGENTS.md` §1 (legal names, domain, business scope, base of
  operations, contact person and mailbox).
- Five credited photographs in `src/assets/` and one clip in `public/media/`, with licences and
  sources recorded in `src/assets/credits.json`.
- Absences future work must not fabricate: no case studies, client logos, testimonials,
  certifications, headcount, or founding year have been supplied.

## Product Principles

1. **Checkable over impressive.** Every claim is paired with something a visitor can verify;
   when it can't be verified, write qualitatively or leave a TODO — never invent.
2. **International buyer first.** Design and copy decisions are judged by whether a skeptical
   overseas buyer trusts the company faster; the Chinese mirror holds the same bar.
3. **Every page ends in a conversation.** A working path to email exists on every page; there
   are no dead ends and no forms — the channel is email, durably.
4. **Honest scale.** A small company presents itself as what it is; credibility comes from
   restraint and verifiability, not inflation.
5. **Fast and unbreakable by default.** Static HTML, zero client JavaScript, accessible — the
   site must degrade to fully readable content with every enhancement off.

## Accessibility & Inclusion

Project floor (from `AGENTS.md` §6, binding): semantic landmarks; visible focus rings; ≥ 4.5:1
body contrast; keyboard-operable nav, chooser and language switcher; correct `lang` per locale
(`en` / `zh-CN`); nothing meant to be read below 13px; `prefers-reduced-motion` honoured with all
content visible when animations are off. Bilingual inclusion: Chinese typography gets its own
rules (no negative tracking on Han, adjusted leading) rather than inheriting Latin idioms.
