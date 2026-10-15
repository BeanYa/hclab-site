# Homecent design system — Connected engineering

Updated 2026-10-15. The client explicitly replaced the previous risograph art direction.
Company facts, bilingual requirements, email conversion and the existing deployment architecture remain authoritative.

## Direction

A contemporary engineering company website: clear editorial typography, spacious light surfaces,
forest-green accents, varied service modules and an illustrative system diagram.
The site demonstrates craft through its actual implementation rather than invented customers or metrics.
Reference sites reviewed: https://linear.app/ and https://vercel.com/.

## Tokens

- Background: #fbfcfb; cards: #ffffff; quiet fields: #f2f6f3.
- Primary text: #18251e; secondary text: #627067; borders: #dee6df.
- Primary accent: #256b48; hover: #195434.
- Engineering field: #14251c; secondary text: #b8c9bc; accent: #cef286.
- Self-hosted Inter Variable for Latin. System Chinese fonts, with Chinese-specific spacing and leading.
- Content width: 1280px maximum; fluid outer margins and section spacing.
- Main surface radii: 12–18px; controls: 7px. Subtle shadows establish hierarchy.

## Composition

The first viewport pairs a direct software-services proposition with a custom layered architecture
illustration. Product experience, services, cloud and support are conceptual labels, not a client product.
The four company facts immediately below retain their repository source.

The home page progresses through expertise, inspectable engineering evidence, delivery process,
a native enquiry chooser, a credited Shenzhen image, and an email invitation.
Service cards link to matching service-page anchors. Large implementation details use a native
details element, allowing visitors to choose their reading depth.

All eight content pages and the localized 404s share navigation, typography, image treatment,
tables, contact invitation and footer. Found imagery remains naturally colored and credited.

## Interaction and accessibility

No production client JavaScript. Navigation uses native details, the chooser uses radios and CSS :has(),
and the engineering details and photo credits use native details. Keyboard focus remains visible.
Motion is limited to a short diagram entrance and restrained hover feedback; reduced motion disables it.
All running and UI copy lives in src/i18n/ui.ts, with type-checked EN/ZH parity.
Responsive layouts cover narrow phones, tablets and desktop. Text remains at least 13px.

## Superseded direction

The prior spot inks, misregistration, Archivo Black display face, duotone images, paper texture and
seed 894b03be are historical design choices. They are not constraints on this version.
The current HTML design marker is connected-engineering.
