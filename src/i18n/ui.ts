/**
 * Every user-visible string on this site lives in this file, in both locales.
 *
 * Rules (see AGENTS.md §3):
 *  - `en` is the reference dictionary. Its keys define the `UIKey` union.
 *  - `zh` is typed as `Record<UIKey, string>`, so a missing or stray Chinese
 *    string is a TypeScript error and fails the build. Never loosen this type.
 *  - Components and pages must never contain hard-coded user-visible copy.
 *  - One language per locale: a page reads entirely in its own language. The
 *    only deliberate exceptions are the other language's own name in the
 *    switcher and proper nouns
 *    (people, works, licences, commands). Everything else — including how a
 *    work title is rendered in a credit line — follows the reading language.
 *
 * The strings here are also the page's argument (see the design direction in
 * AGENTS.md §6): every claim on the page is paired with something a visitor can
 * check. No customer, logo, certification, address, phone number, headcount or
 * statistic is invented anywhere in this file — the company has not supplied
 * them, and the page says what it can prove instead.
 */

import { defaultLocale, localeNames, localeTags, locales } from './locales.mjs';

export { defaultLocale, localeNames, localeTags, locales };

export type Locale = (typeof locales)[number];

const en = {
  // --------------------------------------------------------------- ListenLoop
  "nav.products": "Products",
  "product.name": "ListenLoop",
  "product.category": "A Homecent product",
  "product.tagline": "Make every sentence worth listening to again.",
  "product.summary": "A desktop workspace for focused English listening. Turn audio and video into sentence-by-sentence practice, with local transcription, Chinese translation and a listening rhythm you control.",
  "product.link": "Explore ListenLoop",
  "product.preview": "Development preview",
  "product.local": "Local model processing",
  "product.platforms": "Windows · Apple Silicon Mac",
  "product.logo.alt": "ListenLoop cassette player mascot",
  "product.home.label": "Our products",
  "product.home.title.a": "Built by Homecent.",
  "product.home.title.b": "Made for everyday practice.",
  "product.home.lede": "Alongside client development and technical support, we build products of our own. Meet ListenLoop, our English listening practice app.",
  "product.meta.title": "ListenLoop — local English listening practice | Homecent",
  "product.meta.description": "Meet ListenLoop, a Homecent desktop app for English listening practice: local transcription, Chinese translation, sentence looping and vocabulary review.",
  "product.hero.title.a": "Listen closely.",
  "product.hero.title.b": "Learn at your own pace.",
  "product.contact": "Ask about ListenLoop",
  "product.email.subject": "ListenLoop product enquiry",
  "product.email.body": "Hello Homecent,\n\nI would like to learn more about ListenLoop.\nMy operating system:\nMy listening practice needs:\n",
  "product.visual.label": "From material to practice",
  "product.visual.note": "Workflow illustration",
  "product.step.1.title": "Bring your material",
  "product.step.1.body": "Import audio or video, or capture a display or window with playback audio.",
  "product.step.2.title": "Prepare each sentence",
  "product.step.2.body": "Local models transcribe English, combine speech pauses with sentence meaning, and add Chinese translations.",
  "product.step.3.title": "Listen, repeat, revisit",
  "product.step.3.body": "Pick sentences, set your pace and pauses, then save difficult sentences and words for another session.",
  "product.features.label": "Inside the workspace",
  "product.features.title": "A closer listen, from start to finish.",
  "product.feature.1.title": "Your own listening material",
  "product.feature.1.body": "Import common audio and video formats or existing subtitles. Display and window recording can turn playback audio into practice material.",
  "product.feature.2.title": "Local transcription and translation",
  "product.feature.2.body": "Prepare English transcripts, sentence boundaries and Chinese translations on your computer. Models and engines must be installed before offline processing.",
  "product.feature.3.title": "Repetition with room to think",
  "product.feature.3.body": "Loop one sentence or a selection. Adjust playback speed, repeat counts, and the pauses between sentences and groups. Hide English and Chinese independently.",
  "product.feature.4.title": "Words in their original context",
  "product.feature.4.body": "Play individual words, look up offline dictionary entries and request a local model explanation in context. Keep a vocabulary book and return to the source sentence.",
  "product.feature.5.title": "A library you can revisit",
  "product.feature.5.body": "Organize materials, save difficult sentences, mark what you have mastered and track active listening time with the practice timer.",
  "product.feature.6.title": "Review and take it with you",
  "product.feature.6.body": "Correct text and sentence boundaries, review flagged translations, and export subtitles, text or audio for all or selected sentences.",
  "product.availability.label": "Availability",
  "product.availability.title": "A desktop product, still taking shape.",
  "product.availability.body": "ListenLoop is currently a development preview. Contact Homecent for the current build, platform availability and setup requirements.",
  "product.windows.title": "Windows",
  "product.windows.body": "Built for Windows 10/11 x64, with CPU processing and NVIDIA CUDA acceleration where supported. Complete offline packages include local models and runtime components.",
  "product.mac.title": "Apple Silicon Mac",
  "product.mac.body": "A development preview for M-series Macs running macOS 14 or later, using Metal or CPU. Signing, notarization and broader device validation remain in progress.",
  "product.faq.title": "Before your first session",
  "product.faq.1.q": "Can I use it offline?",
  "product.faq.1.a": "Transcription, sentence preparation, translation and dictionary lookup run locally once the required models, engines and dictionary are installed. Initial setup or optional model downloads can require an internet connection.",
  "product.faq.2.q": "Can I edit the generated results?",
  "product.faq.2.a": "Yes. You can edit English text and sentence timing, split or merge sentences, and undo changes. Automatic recognition and translation can make mistakes; the original audio remains your reference.",
  "product.faq.3.q": "How do I get a build?",
  "product.faq.3.a": "Email Homecent with your operating system and what you want to practice. We can discuss the current preview and its setup requirements. Screen and audio capture also depend on system permissions and the source material.",
  "product.reach.title": "Bring your listening routine into focus.",
  "product.reach.body": "Tell us about your computer and the material you want to practice. We will help you understand the current preview.",

  // ---------------------------------------------------------------- identity
  'site.name': 'Homecent',
  'site.legalName': 'Shenzhen Homecent Trading Co., Ltd.',
  'site.tagline': 'Software products, engineered and supported.',
  'site.location': 'Shenzhen, Guangdong, China',
  'meta.ogAlt': 'Homecent — software product development and technical support',

  // Join between a label and the sentence after it, and between a caption and
  // its credit link. English sets a space; Chinese full-width punctuation
  // already carries its own trailing space, so none is inserted between two
  // Han runs (a half-width space there is the one format a Chinese page must
  // never show).
  'sep.inline': ' ',

  // -------------------------------------------------------------------- nav
  'nav.primary': 'Primary',
  'nav.home': 'Home',
  'nav.about': 'Company',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.skip': 'Skip to content',
  'nav.openMenu': 'Menu',
  'nav.closeMenu': 'Close menu',

  // --------------------------------------------------------------- language
  'lang.label': 'Language',
  'lang.switchTo': 'Switch language',
  'lang.current': 'Current language',
  'lang.short.en': 'English',
  'lang.short.zh': '简体中文',

  // ------------------------------------------------------------------- hero
  'home.meta.title': 'Homecent — software product development and technical support, Shenzhen',
  'home.meta.description':
    'Homecent is a software company in Shenzhen. We build software products for clients and keep them running after launch, in English and Chinese.',
  'hero.nameA': 'Homecent',
  'hero.nameB': '宅迅',
  'hero.support':
    'A software company in Shenzhen. We build software products, and we run them after launch.',
  'hero.action': 'Start a project',
  'hero.kicker': 'Software development & technical support',
  'hero.title.a': 'Software that',
  'hero.title.b': 'moves you forward.',
  'hero.secondary': 'Explore our expertise',
  'hero.note': 'From the first idea to the next release.',
  'hero.visual.label': 'A connected approach',
  'hero.visual.alt': 'An illustrative software architecture connecting product interfaces, services, cloud infrastructure and ongoing support.',
  'hero.visual.product': 'Product experience',
  'hero.visual.services': 'Services & APIs',
  'hero.visual.cloud': 'Cloud & delivery',
  'hero.visual.support': 'Ongoing support',
  'hero.visual.badge': 'Built to work together',
  'hero.visual.foot': 'Architecture illustration',
  'section.services.label': 'Our expertise',
  'section.proof.label': 'Engineering, made visible',
  'section.process.label': 'How we work',
  'section.process.title.a': 'A clear path.',
  'section.process.title.b': 'A shared direction.',
  'section.process.lede': 'A considered process, from understanding the problem to supporting what comes next.',
  'section.intro.title.a': 'Shenzhen roots.',
  'section.intro.title.b': 'A wider perspective.',
  'section.intro.action': 'More about Homecent',
  'section.proof.more': 'Explore the engineering details',
  'proof.metric1.value': '0 KB',
  'proof.metric1.label': 'Client-side JavaScript',
  'proof.metric1.body': 'Static HTML. Native interactions. Less to download, less to go wrong.',
  'proof.metric2.value': '2',
  'proof.metric2.label': 'Languages, one standard',
  'proof.metric2.body': 'English and Chinese, with type-checked translations and matching routes.',
  'proof.metric3.value': 'HTTPS',
  'proof.metric3.label': 'Security built in',
  'proof.metric3.body': 'A strict content security policy, protected response headers and encrypted delivery.',
  'reach.title.a': 'Good software starts',
  'reach.title.b': 'with a conversation.',
  'hero.facts.work.label': 'Core business',
  'hero.facts.work.value': 'Software product development',
  'hero.facts.support.label': 'Also provided',
  'hero.facts.support.value': 'Technical support and maintenance',
  'hero.facts.based.label': 'Based in',
  'hero.facts.based.value': 'Shenzhen, Guangdong, China',
  'hero.facts.languages.label': 'Working languages',
  'hero.facts.languages.value': 'English, Simplified Chinese',

  // ------------------------------------------------------------------ intro
  'intro.lead':
    'Shenzhen Homecent Trading Co., Ltd. develops software products and provides technical support. The work is software: we take a product idea or an existing system, carry it through development and release, and stay on for the maintenance that follows.',
  'intro.work.title': 'The work.',
  'intro.work.body':
    'We build business systems, customer portals and the services behind them. An engagement starts with a written scope: what the product must do, what it must not do, and how we will both know it is finished. Then it is built in short iterations, each one ending in software you can run.',
  'intro.support.title': 'The support.',
  'intro.support.body':
    'Support is not a separate contract we would rather not sell. Monitoring, triage, patches and dependency upkeep continue on the same system, with an engineer who already knows the code and response terms agreed before anything goes live.',
  'intro.languages.title': 'The languages.',
  'intro.languages.body':
    'Requirements, progress notes, documentation and the code itself are delivered in English and Simplified Chinese. Our clients work in both, often in the same week, so nothing important is written in only one of them.',
  'intro.contact.title': 'The contact.',
  'intro.contact.body':
    'Enquiries go to one person, Ribin Ding, who reads them and answers them. Nobody is routed through a sales desk. Tell us what the product has to do, or what has stopped working, and the first reply is a set of questions.',

  // ------------------------------------------------------------ photograph 1
  'band.panorama.alt':
    'A wide view over Shenzhen: dense towers along Shennan Road, low hills behind them under a clear sky',
  'band.panorama.caption': 'Shenzhen, looking west along Shennan Road.',

  // ---------------------------------------------------------------- services
  'services.heading.a': 'From the first build',
  'services.heading.b': 'to what comes next.',
  'services.lede':
    'Most engagements combine several of these. All of them can continue after launch.',
  'services.link': 'All services',
  'services.terms.separator': ', ',
  'services.custom.title': 'Custom software development',
  'services.custom.summary':
    'A complete, maintainable system, from requirements through to production release.',
  'services.custom.p1': 'Business systems and internal tools',
  'services.custom.p2': 'Server-side services and background processing',
  'services.custom.p3': 'Technical documentation and handover',
  'services.web.title': 'Web platforms and portals',
  'services.web.summary':
    'Public sites, customer portals and admin consoles that remain maintainable after launch.',
  'services.web.p1': 'Server-rendered and static front ends',
  'services.web.p2': 'Admin consoles and reporting views',
  'services.web.p3': 'Accessibility and performance budgets',
  'services.integration.title': 'System integration and APIs',
  'services.integration.summary':
    'Make the systems you already run work with the software you are adding.',
  'services.integration.p1': 'Third-party and partner API integration',
  'services.integration.p2': 'Data migration and synchronisation',
  'services.integration.p3': 'Authentication and access control',
  'services.support.title': 'Technical support and maintenance',
  'services.support.summary':
    'Ongoing support with a named owner, rather than an anonymous ticket queue.',
  'services.support.p1': 'Monitoring, triage and incident response',
  'services.support.p2': 'Bug fixes, patches and dependency upkeep',
  'services.support.p3': 'Change requests and small enhancements',
  'services.cloud.title': 'Cloud and delivery engineering',
  'services.cloud.summary':
    'Build, deploy and operate on infrastructure you can audit and take over.',
  'services.cloud.p1': 'CI/CD pipelines and release automation',
  'services.cloud.p2': 'Cloudflare and mainstream cloud platforms',
  'services.cloud.p3': 'Observability, logging and cost awareness',
  'services.consulting.title': 'Technical consulting and review',
  'services.consulting.summary':
    'An independent read on architecture, risk and delivery before you commit.',
  'services.consulting.p1': 'Architecture and code review',
  'services.consulting.p2': 'Delivery plans and effort assessment',
  'services.consulting.p3': 'Build-versus-buy and vendor evaluation',

  // -------------------------------------------------------- the live thing
  'live.heading': 'Where are you now?',
  'live.lede':
    'Three situations, three different first steps. Choose the one that fits and the page answers for it.',
  'live.hint': 'What happens first, and what we would need from you.',
  'live.first.label': 'First step.',
  'live.need.label': 'From you.',
  'live.picture.alt':
    'Trading floors inside the Huaqiangbei electronics market in Shenzhen, hung with shop signs',
  'live.picture.caption': 'Huaqiangbei, Shenzhen. Where the components come from.',
  'live.option1.title': 'We have an idea',
  'live.option1.first':
    'We write down what the product has to do and who will use it, then give you a scope, a delivery plan and a price or a rate.',
  'live.option1.need':
    'A description of the problem, who it is for, and any deadline you are already working to.',
  'live.option1.action': 'Send this as an email',
  'live.option1.subject': 'New product: an idea to scope',
  'live.option1.body':
    'Hello Ribin,\n\nWe have an idea for a product and would like a scope and a delivery plan.\n\nWhat it should do:\nWho will use it:\nDeadline, if any:\n\nThank you,',
  'live.option2.title': 'We run an existing system',
  'live.option2.first':
    'We read the code and the infrastructure before proposing anything, and tell you which parts we would keep, change or leave alone.',
  'live.option2.need':
    'Repository or system access, the constraints you work under, and what is already planned.',
  'live.option2.action': 'Send this as an email',
  'live.option2.subject': 'Existing system: development and support',
  'live.option2.body':
    'Hello Ribin,\n\nWe run an existing system and would like help developing or supporting it.\n\nWhat the system does:\nWhat we need next:\nConstraints that matter:\n\nThank you,',
  'live.option3.title': 'Something has stopped working',
  'live.option3.first':
    'We start with the failure: what changed, what the logs say, and what is still running. Then we tell you what we would do first.',
  'live.option3.need':
    'The symptom and when it started, plus access to the environment if the system is yours to open.',
  'live.option3.action': 'Send this as an email',
  'live.option3.subject': 'Production problem: support needed',
  'live.option3.body':
    'Hello Ribin,\n\nSomething in our system has stopped working and we need support.\n\nWhat happens:\nWhen it started:\nWhat we have already tried:\n\nThank you,',

  // --------------------------------------------------------------- process
  'process.line1': 'First we agree what it must do.',
  'process.line1.body': 'Requirements, acceptance criteria, and what we are not building.',
  'process.line2': 'Then the plan goes in writing.',
  'process.line2.body': 'Architecture, milestones, and a delivery schedule you can hold us to.',
  'process.line3': 'Then it is built in short iterations.',
  'process.line3.body': 'Each one ends in software you can run, not a status report.',
  'process.line4': 'Then we stay on after launch.',
  'process.line4.body': 'Monitoring, patches, and the changes that follow a release.',

  // ----------------------------------------------------------------- proof
  'proof.heading.a': 'Thoughtful on the surface.',
  'proof.heading.b': 'Solid underneath.',
  'proof.lede':
    'The details matter. This website is a small, working example of how we approach performance, accessibility and maintainable engineering. You can inspect the implementation yourself.',
  'proof.commit.group': 'What we commit to',
  'proof.commit.col1': 'Commitment',
  'proof.commit.col2': 'What it means',
  'proof.commit.col3': 'How you can hold us to it',
  'proof.commit.1.title': 'Scope in writing',
  'proof.commit.1.what':
    'Assumptions, deliverables and acceptance criteria are agreed before code is written.',
  'proof.commit.1.check': 'Ask for the scope document before any work starts.',
  'proof.commit.2.title': 'Working software',
  'proof.commit.2.what': 'Progress is measured by what runs, not by hours recorded.',
  'proof.commit.2.check': 'Every iteration ends in a build you can open yourself.',
  'proof.commit.3.title': 'No lock-in',
  'proof.commit.3.what': 'Code, documentation and infrastructure access belong to you.',
  'proof.commit.3.check': 'The repository and the accounts are held in your name.',
  'proof.commit.4.title': 'Support after launch',
  'proof.commit.4.what': 'Maintenance is part of the engagement, not an afterthought.',
  'proof.commit.4.check': 'The engineer who built the system stays on it.',
  'proof.site.group': 'This site, as built',
  'proof.site.col1': 'Item',
  'proof.site.col2': 'Measurement',
  'proof.site.col3': 'How to check it',
  'proof.site.1.title': 'JavaScript sent to the browser',
  'proof.site.1.what': '0 KB',
  'proof.site.1.check':
    'View source: no module scripts. The only script is the structured data for search engines.',
  'proof.site.2.title': 'Pages',
  'proof.site.2.what': 'Ten, in two languages',
  'proof.site.2.check': 'Five routes, each built in English and in Simplified Chinese.',
  'proof.site.3.title': 'Photographs and footage',
  'proof.site.3.what': 'Six, openly licensed',
  'proof.site.3.check': 'Credited in the footer, each with a link to its source.',
  'proof.site.4.title': 'Checks before deploy',
  'proof.site.4.what': 'Types, unit tests, output verification',
  'proof.site.4.check': 'npm run check, npm test and npm run verify all have to pass.',
  'proof.site.5.title': 'Response headers',
  'proof.site.5.what': 'No inline script, no framing, HSTS',
  'proof.site.5.check': 'curl -I https://hcentlab.com',
  'proof.picture.alt':
    'The Futian skyline in Shenzhen, seen over a park of trees and water on a clear day',
  'proof.picture.caption': 'Futian, Shenzhen. The work is written here.',
  'bridge.alt':
    'The Shenzhen Bay Bridge running across green water toward the hills of Hong Kong, seen from the air',
  'bridge.caption': 'The Shenzhen Bay Bridge, looking toward Hong Kong.',
  'civic.alt':
    'A long colonnade arch over a paved plaza in Shenzhen, with red and gold buildings behind trees',
  'civic.caption': 'Shenzhen Civic Center, on the axis through Lianhuashan Park.',

  // ------------------------------------------------------------- clip band
  'clip.alt':
    'A slow view across the Nanshan technology district in Shenzhen: towers, trees and cumulus clouds',
  'clip.caption': 'Nanshan, Shenzhen. A silent loop; the poster stays under reduced motion.',

  // --------------------------------------------------------------- contact
  'contact.meta.title': 'Contact — Homecent, Shenzhen',
  'contact.meta.description':
    'Contact Shenzhen Homecent Trading Co., Ltd. about software development or technical support. One person reads every message.',
  'contact.heading': 'Tell us what to build, or what to fix.',
  'contact.lede':
    'Write to Ribin Ding with a product to build, a system to keep running, or something that has stopped working.',
  'contact.email.action': 'Send an email',
  'contact.email.subject': 'Enquiry from the website',
  'contact.enquiry.title': 'What to include',
  'contact.enquiry.item1': 'What the product should do, and who will use it.',
  'contact.enquiry.item2': 'The current stage: an idea, a system in production, or a failure.',
  'contact.enquiry.item3': 'Constraints that matter: deadline, budget range, platforms, compliance.',
  'contact.enquiry.item4': 'How you would like to work with us: a project, a long-term partnership, or a support contract.',
  'contact.promise.title': 'What happens next',
  'contact.promise.body':
    'We read every enquiry ourselves and answer honestly, including when we are not the right fit. For work we can help with, the next step is a short conversation and then a written scope.',
  'contact.details.title': 'Company details',
  'contact.details.legal.label': 'Legal name',
  'contact.details.legal.value': 'Shenzhen Homecent Trading Co., Ltd.',
  'contact.details.location.label': 'Location',
  'contact.details.location.value': 'Shenzhen, Guangdong, China',
  'contact.details.languages.label': 'Languages',
  'contact.details.languages.value': 'English, Simplified Chinese',
  'contact.details.person.label': 'Contact person',
  'contact.person.value': 'Ribin Ding',
  'contact.email.label': 'Email',
  'contact.email.value': 'ribin.ding@hcentlab.com',

  // ---------------------------------------------------------------- company
  'about.meta.title': 'Company — Homecent, a Shenzhen software company',
  'about.meta.description':
    'Shenzhen Homecent Trading Co., Ltd. develops software products and provides technical support from Shenzhen, in English and Simplified Chinese.',
  'about.title': 'A Shenzhen software team, built to stay',
  'about.lede':
    'Shenzhen Homecent Trading Co., Ltd. develops software products and provides technical support to clients in China and abroad.',
  'about.profile.title': 'What the company does',
  'about.profile.body1':
    'The company trades as Homecent. Our work is software: we take a product idea or an existing system and carry it through development, release and the maintenance that follows.',
  'about.profile.body2':
    'We work in small teams, so clients deal directly with the engineers responsible for delivery, and we put our commitments in writing.',
  'about.record.title': 'Company record',
  'about.record.col1': 'Item',
  'about.record.col2': 'Detail',
  'about.record.legal.label': 'Legal name',
  'about.record.legal.value': 'Shenzhen Homecent Trading Co., Ltd.',
  'about.record.business.label': 'Core business',
  'about.record.business.value': 'Software product development and technical support',
  'about.record.base.label': 'Base of operations',
  'about.record.base.value': 'Shenzhen, Guangdong, China',
  'about.record.languages.label': 'Working languages',
  'about.record.languages.value': 'English, Simplified Chinese',
  'about.record.contact.label': 'Contact',
  'about.principles.title': 'Four commitments',
  'about.principles.lede':
    'The same four commitments that appear on the home page, because they are the terms we want to be judged on.',
  'about.principles.item1.title': 'Written scope',
  'about.principles.item1.body':
    'Assumptions, deliverables and acceptance criteria are agreed before code is written.',
  'about.principles.item2.title': 'Working software',
  'about.principles.item2.body': 'Progress is measured by what runs, not by hours recorded.',
  'about.principles.item3.title': 'No lock-in',
  'about.principles.item3.body': 'Code, documentation and infrastructure access belong to you.',
  'about.principles.item4.title': 'Support after launch',
  'about.principles.item4.body': 'Maintenance is part of the engagement, not an afterthought.',

  // --------------------------------------------------------------- services
  'servicesPage.meta.title': 'Services — software development and technical support',
  'servicesPage.meta.description':
    'Custom software development, web platforms, system integration, technical support, cloud delivery engineering and technical consulting from Shenzhen.',
  'servicesPage.title': 'Software development and technical support',
  'servicesPage.lede':
    'Engage us for a defined project, or for ongoing support of a system you already depend on. Every service below can continue after launch.',
  'servicesPage.deliverables': 'Typical work',
  'servicesPage.engagement.title': 'How engagements start',
  'servicesPage.engagement.body':
    'Most clients begin with a short paid discovery: we review the requirement, the existing system and the constraints, then give you a written scope, a delivery plan and a fixed price or rate. If we are not the right fit, we say so at that point.',
  'servicesPage.cta.title': 'Not sure which of these you need?',
  'servicesPage.cta.body':
    'Describe the problem instead of the solution. Working out the right scope is part of the job.',

  // ------------------------------------------------------------------- 404
  'notFound.meta.title': 'Page not found — Homecent',
  'notFound.meta.description': 'The page you requested does not exist.',
  'notFound.title': 'This page does not exist',
  'notFound.body': 'The link may be out of date, or the page may have been moved or removed.',
  'notFound.action': 'Back to the home page',

  // ---------------------------------------------------------------- footer
  'footer.name': 'Homecent',
  'footer.reach': 'Write to us',
  'footer.pages': 'Pages',
  'footer.languages': 'Languages',
  'footer.rights': 'All rights reserved.',
  'footer.note': 'Software product development and technical support.',
  'footer.credits.label': 'Photographs and footage',
  'footer.credits.source': 'Source',
  // Work titles are rendered in the reading language so a page never mixes
  // scripts in its running text; the exact original titles, creators, licences
  // and source pages stay in src/assets/credits.json and behind each Source
  // link.
  'credit.panorama': '“The west panorama of Shenzhen2021” by Charlie fong, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.futian': '“Commercial area of Futian to east2020” by Charlie fong, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.market': '“Huaqiang Electronics World 1” by Mx. Granger, CC0, via Wikimedia Commons (cropped)',
  'credit.bridge': '“Shenzhen Bay Bridge aerial view” by Windmemories, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.civic': '“CIVIC CENTER, SHENZHEN (3)” by Dinkun Chen, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.clip': '“Nanshantechdistrictshenzhen2018” by Charlie fong, CC BY-SA 4.0, via Wikimedia Commons (re-encoded)',
  // TODO(client): add the ICP filing number here if the site is ever served from mainland China.
  'footer.icp': '',
};

/** The key union every locale must cover. */
export type UIKey = keyof typeof en;

const zh: Record<UIKey, string> = {
  // --------------------------------------------------------------- ListenLoop
  "nav.products": "产品",
  "product.name": "听刻",
  "product.category": "宅迅旗下产品",
  "product.tagline": "每一句，都值得再听一次。",
  "product.summary": "专注英语精听的桌面工作台。将音视频整理为逐句练习素材，通过本地转写、中文翻译和自由复听，找到自己的学习节奏。",
  "product.link": "了解听刻",
  "product.preview": "开发预览版",
  "product.local": "本地模型处理",
  "product.platforms": "Windows · Apple Silicon Mac",
  "product.logo.alt": "听刻磁带复读机吉祥物",
  "product.home.label": "我们的产品",
  "product.home.title.a": "由宅迅开发。",
  "product.home.title.b": "为日常练习而做。",
  "product.home.lede": "在为客户开发软件、提供技术支持的同时，我们也打造自己的产品。听刻，是我们面向英语精听的桌面应用。",
  "product.meta.title": "听刻 — 本地英语精听与逐句复读｜宅迅",
  "product.meta.description": "听刻是宅迅开发的英语精听桌面应用，支持音视频导入、本地转写与中文翻译、逐句循环复听、生词整理和练习计时。了解产品功能与开发预览状态。",
  "product.hero.title.a": "听清每一句。",
  "product.hero.title.b": "按自己的节奏学。",
  "product.contact": "咨询听刻",
  "product.email.subject": "听刻产品咨询",
  "product.email.body": "你好，宅迅：\n\n我想了解听刻。\n我的操作系统：\n我的精听练习需求：\n",
  "product.visual.label": "从素材到练习",
  "product.visual.note": "使用流程示意",
  "product.step.1.title": "带入你的素材",
  "product.step.1.body": "导入音频、视频，或录制显示器、窗口及其播放声音。",
  "product.step.2.title": "整理每一句",
  "product.step.2.body": "本地模型完成英文转写，结合声音停顿与语义分句，再生成中文译文。",
  "product.step.3.title": "复听，再回顾",
  "product.step.3.body": "选取句子，设置速度与停顿，将难句和生词留给下一次练习。",
  "product.features.label": "走进精听工作台",
  "product.features.title": "从准备素材，到听懂每一句。",
  "product.feature.1.title": "从自己的素材开始",
  "product.feature.1.body": "导入常见音视频格式或已有字幕，也可通过显示器、窗口录制，将播放声音整理成练习素材。",
  "product.feature.2.title": "本地转写与中文翻译",
  "product.feature.2.body": "在电脑上生成英文字幕、整理句界并翻译为中文。离线处理前，需要先安装所需模型与推理引擎。",
  "product.feature.3.title": "留出思考的复听节奏",
  "product.feature.3.body": "单句或多选循环，自由设置播放速度、重复次数，以及句间和组间停顿。英文与中文可以分别隐藏，便于盲听和对照。",
  "product.feature.4.title": "在原句里理解生词",
  "product.feature.4.body": "点击单词播放对应声音，查看离线词典释义，或由本地模型解释语境含义。加入生词本后，随时回到原句复听。",
  "product.feature.5.title": "让积累有处可寻",
  "product.feature.5.body": "整理素材、收藏难句、标记已掌握内容。练习计时器记录实际播放中的有效听音时间，方便持续回顾。",
  "product.feature.6.title": "校正、复核与导出",
  "product.feature.6.body": "修改英文和句界，查看待核对译文，并将全部或选中句子导出为字幕、文字或音频。",
  "product.availability.label": "版本与平台",
  "product.availability.title": "一款持续打磨的桌面产品。",
  "product.availability.body": "听刻目前处于开发预览阶段。可通过宅迅了解当前构建、平台可用情况与安装要求。",
  "product.windows.title": "Windows",
  "product.windows.body": "面向 Windows 10/11 x64，可使用 CPU，在条件满足时使用 NVIDIA CUDA 加速。完整离线包包含本地模型与运行组件。",
  "product.mac.title": "Apple Silicon Mac",
  "product.mac.body": "面向搭载 M 系列芯片、运行 macOS 14 及以上系统的 Mac，提供开发预览，使用 Metal 或 CPU。签名、公证与更多设备验证仍在推进。",
  "product.faq.title": "开始练习之前",
  "product.faq.1.q": "可以离线使用吗？",
  "product.faq.1.a": "安装所需模型、引擎和词典后，转写、分句、翻译与查词都在本地完成。首次准备及可选模型下载可能需要联网。",
  "product.faq.2.q": "自动生成的内容可以修改吗？",
  "product.faq.2.a": "可以编辑英文和句子起止时间，拆分、合并句子，也可以撤销修改。自动识别与翻译可能出错，请以原音频为最终依据。",
  "product.faq.3.q": "如何了解或获取当前版本？",
  "product.faq.3.a": "请通过邮件联系宅迅，说明操作系统和练习需求，我们会介绍当前预览版与准备要求。屏幕及声音采集还取决于系统权限和素材本身。",
  "product.reach.title": "让精听，成为自己的日常。",
  "product.reach.body": "告诉我们你的电脑配置，以及想练习的素材，一起了解当前预览版是否适合你。",

  // ---------------------------------------------------------------- identity
  'site.name': '宅迅',
  'site.legalName': '深圳市宅迅贸易有限公司',
  'site.tagline': '软件产品，从研发到长期支持。',
  'site.location': '中国广东省深圳市',
  'meta.ogAlt': '宅迅 — 软件产品开发与技术支持',
  'sep.inline': '',

  // -------------------------------------------------------------------- nav
  'nav.primary': '主导航',
  'nav.home': '首页',
  'nav.about': '关于我们',
  'nav.services': '服务',
  'nav.contact': '联系我们',
  'nav.skip': '跳到主要内容',
  'nav.openMenu': '菜单',
  'nav.closeMenu': '关闭菜单',

  // --------------------------------------------------------------- language
  'lang.label': '语言',
  'lang.switchTo': '切换语言',
  'lang.current': '当前语言',
  'lang.short.en': 'English',
  'lang.short.zh': '简体中文',

  // ------------------------------------------------------------------- hero
  'home.meta.title': '宅迅 — 深圳的软件产品开发与技术支持',
  'home.meta.description':
    '宅迅是一家位于深圳的软件公司。我们为客户开发软件产品，并在上线后持续运行与维护，工作语言为中文与英文。',
  'hero.nameA': '宅迅',
  'hero.nameB': 'Homecent',
  'hero.support': '深圳的一家软件公司。我们开发软件产品，并在上线之后继续运行它们。',
  'hero.action': '聊聊你的项目',
  'hero.kicker': '软件产品开发与技术支持',
  'hero.title.a': '用好软件，',
  'hero.title.b': '推动业务向前。',
  'hero.secondary': '了解我们的服务',
  'hero.note': '从最初的想法，到下一次发布。',
  'hero.visual.label': '让每一层协同工作',
  'hero.visual.alt': '软件架构示意图：连接产品界面、系统服务、云端基础设施和持续技术支持。',
  'hero.visual.product': '产品与体验',
  'hero.visual.services': '服务与接口',
  'hero.visual.cloud': '云端与交付',
  'hero.visual.support': '持续技术支持',
  'hero.visual.badge': '从设计到运行，环环相扣',
  'hero.visual.foot': '系统架构示意',
  'section.services.label': '我们的专长',
  'section.proof.label': '看得见的工程细节',
  'section.process.label': '协作方式',
  'section.process.title.a': '清晰的路径，',
  'section.process.title.b': '共同的方向。',
  'section.process.lede': '从理解问题开始，到支持下一步发展，让每一阶段都有明确的目标。',
  'section.intro.title.a': '扎根深圳，',
  'section.intro.title.b': '连接更广阔的世界。',
  'section.intro.action': '进一步了解宅迅',
  'section.proof.more': '展开查看工程细节',
  'proof.metric1.value': '0 KB',
  'proof.metric1.label': '客户端脚本',
  'proof.metric1.body': '静态页面，原生交互。更少的加载，也更少的运行负担。',
  'proof.metric2.value': '2',
  'proof.metric2.label': '两种语言，同一标准',
  'proof.metric2.body': '中英双语，类型检查确保译文完整，页面路由一一对应。',
  'proof.metric3.value': 'HTTPS',
  'proof.metric3.label': '安全融入每一层',
  'proof.metric3.body': '严格的内容安全策略、防护响应头与加密传输，从基础处落实。',
  'reach.title.a': '好软件，',
  'reach.title.b': '从一次沟通开始。',
  'hero.facts.work.label': '主营业务',
  'hero.facts.work.value': '软件产品开发',
  'hero.facts.support.label': '同时提供',
  'hero.facts.support.value': '技术支持与维护',
  'hero.facts.based.label': '所在地',
  'hero.facts.based.value': '中国广东省深圳市',
  'hero.facts.languages.label': '工作语言',
  'hero.facts.languages.value': '中文、英文',

  // ------------------------------------------------------------------ intro
  'intro.lead':
    '深圳市宅迅贸易有限公司从事软件产品开发并提供技术支持。我们做的就是软件：把一个产品想法或一套既有系统，从研发、上线一路负责到之后的长期维护。',
  'intro.work.title': '做什么。',
  'intro.work.body':
    '我们开发业务系统、客户门户以及支撑它们的服务。合作从一份书面范围开始：产品要做什么、不做什么，以及我们如何共同判断它已经完成。之后以短周期迭代推进，每个迭代结束都有可以运行的东西。',
  'intro.support.title': '怎么支持。',
  'intro.support.body':
    '技术支持不是我们不愿卖的附加合同。监控、问题分级、补丁与依赖升级都发生在同一套系统上，由已经熟悉这份代码的工程师负责，响应约定在上线之前就谈好。',
  'intro.languages.title': '用什么语言。',
  'intro.languages.body':
    '需求说明、进度同步、技术文档与代码本身都以中文和英文交付。我们的客户常常在同一周里使用两种语言，所以重要的内容不会只写在其中一种里。',
  'intro.contact.title': '找谁。',
  'intro.contact.body':
    '来信由 Ribin Ding 一个人阅读并回复，不经过任何销售流程。告诉我们产品要做什么，或者哪里已经停止工作，第一封回信会是一组问题。',

  // ------------------------------------------------------------ photograph 1
  'band.panorama.alt': '深圳的宽阔全景：深南大道两侧密集的高楼，远处是低矮的山脊与晴朗的天空',
  'band.panorama.caption': '深圳，沿深南大道向西看。',

  // ---------------------------------------------------------------- services
  'services.heading.a': '从产品初建，',
  'services.heading.b': '到每一步向前。',
  'services.lede': '多数项目会同时涉及其中几项；每一项都可以在上线之后继续。',
  'services.link': '全部服务',
  'services.terms.separator': '、',
  'services.custom.title': '定制软件开发',
  'services.custom.summary': '从需求到正式上线，交付一套完整且可维护的系统。',
  'services.custom.p1': '业务系统与内部工具',
  'services.custom.p2': '服务端服务与后台任务处理',
  'services.custom.p3': '技术文档与交付移交',
  'services.web.title': 'Web 平台与门户',
  'services.web.summary': '官网、客户门户与管理后台，上线之后依然好维护。',
  'services.web.p1': '服务端渲染与静态前端',
  'services.web.p2': '管理后台与报表视图',
  'services.web.p3': '无障碍与性能指标约束',
  'services.integration.title': '系统集成与接口',
  'services.integration.summary': '让正在使用的系统与即将新增的软件互通。',
  'services.integration.p1': '第三方与合作伙伴 API 对接',
  'services.integration.p2': '数据迁移与同步',
  'services.integration.p3': '身份认证与权限控制',
  'services.support.title': '技术支持与维护',
  'services.support.summary': '有固定负责人，而不是一个匿名工单队列。',
  'services.support.p1': '监控、问题分级与故障响应',
  'services.support.p2': '缺陷修复、补丁与依赖升级',
  'services.support.p3': '变更需求与小功能迭代',
  'services.cloud.title': '云与交付工程',
  'services.cloud.summary': '在你可审计、可接管的基础设施上构建、部署与运维。',
  'services.cloud.p1': 'CI/CD 流水线与发布自动化',
  'services.cloud.p2': 'Cloudflare 及主流云平台',
  'services.cloud.p3': '可观测性、日志与成本意识',
  'services.consulting.title': '技术咨询与评审',
  'services.consulting.summary': '在你投入之前，从独立视角审视架构、风险与交付。',
  'services.consulting.p1': '架构与代码评审',
  'services.consulting.p2': '交付计划与工作量评估',
  'services.consulting.p3': '自研与采购、供应商选型评估',

  // -------------------------------------------------------- the live thing
  'live.heading': '你现在处在哪一步？',
  'live.lede': '三种情况，三种不同的第一步。选中最接近的一种，页面就会给出对应的答案。',
  'live.hint': '第一步做什么，以及我们需要你提供什么。',
  'live.first.label': '第一步。',
  'live.need.label': '需要你提供。',
  'live.picture.alt': '深圳华强北电子市场里挂满招牌的柜台楼层',
  'live.picture.caption': '深圳华强北。元器件来自这里。',
  'live.option1.title': '我们有个想法',
  'live.option1.first':
    '我们先把产品要做什么、给谁用写下来，然后给你一份范围、交付计划，以及固定报价或费率。',
  'live.option1.need': '问题的描述、使用者的画像，以及你已经在面对的时间要求。',
  'live.option1.action': '按这个情况写邮件',
  'live.option1.subject': '新产品：需要梳理范围的想法',
  'live.option1.body':
    'Ribin 你好，\n\n我们有一个产品想法，希望得到范围说明与交付计划。\n\n它要做什么：\n谁会使用：\n时间要求：\n\n谢谢，',
  'live.option2.title': '我们在运行一套既有系统',
  'live.option2.first':
    '在提出任何改动之前，我们先读代码和基础设施，并告诉你哪些部分我们会保留、改动或不动。',
  'live.option2.need': '代码库或系统的访问权限、你面对的约束，以及已经排上日程的事情。',
  'live.option2.action': '按这个情况写邮件',
  'live.option2.subject': '既有系统：开发与支持',
  'live.option2.body':
    'Ribin 你好，\n\n我们正在运行一套既有系统，希望得到开发或支持方面的帮助。\n\n这套系统做什么：\n接下来需要什么：\n关键约束：\n\n谢谢，',
  'live.option3.title': '有东西已经不能用了',
  'live.option3.first':
    '我们从故障本身开始：改动了什么、日志里写了什么、还有哪些部分在运行。然后告诉你我们会先做什么。',
  'live.option3.need': '故障现象与开始时间；如果环境归你管理，也请提供访问方式。',
  'live.option3.action': '按这个情况写邮件',
  'live.option3.subject': '线上故障：需要技术支持',
  'live.option3.body':
    'Ribin 你好，\n\n我们的系统出现了故障，需要技术支持。\n\n现象是：\n开始时间：\n已经尝试过：\n\n谢谢，',

  // --------------------------------------------------------------- process
  'process.line1': '先说清它要做什么。',
  'process.line1.body': '需求、验收标准，以及我们不做哪些部分。',
  'process.line2': '然后把计划写下来。',
  'process.line2.body': '架构、里程碑，以及可以据此验收的交付排期。',
  'process.line3': '接着用短周期实现。',
  'process.line3.body': '每个迭代结束都有可以运行的东西，而不是一份进度汇报。',
  'process.line4': '上线之后我们还在。',
  'process.line4.body': '监控、补丁，以及发布之后随之而来的变更。',

  // ----------------------------------------------------------------- proof
  'proof.heading.a': '表面用心，',
  'proof.heading.b': '底层扎实。',
  'proof.lede':
    '细节值得认真对待。这个网站本身，就是我们对性能、无障碍与可维护工程的一个小型实践。你可以直接查看它的实现。',
  'proof.commit.group': '我们的承诺',
  'proof.commit.col1': '承诺',
  'proof.commit.col2': '含义',
  'proof.commit.col3': '你可以怎么核对',
  'proof.commit.1.title': '范围书面化',
  'proof.commit.1.what': '在写代码之前，先约定前提假设、交付物与验收标准。',
  'proof.commit.1.check': '开工之前先要那份范围文档。',
  'proof.commit.2.title': '以可运行的软件为准',
  'proof.commit.2.what': '进度由能跑起来的东西衡量，而不是投入的工时。',
  'proof.commit.2.check': '每个迭代都会交给你一个可以自己打开的构建。',
  'proof.commit.3.title': '不制造绑定',
  'proof.commit.3.what': '代码、文档与基础设施访问权限都归你所有。',
  'proof.commit.3.check': '代码库与各类账号都以你的名义持有。',
  'proof.commit.4.title': '上线之后仍负责',
  'proof.commit.4.what': '维护是合作的一部分，而不是事后追加。',
  'proof.commit.4.check': '开发这套系统的工程师继续负责它。',
  'proof.site.group': '这个站点本身',
  'proof.site.col1': '项目',
  'proof.site.col2': '实测结果',
  'proof.site.col3': '怎么核对',
  'proof.site.1.title': '发送到浏览器的 JavaScript',
  'proof.site.1.what': '0 KB',
  'proof.site.1.check': '查看源代码：没有任何模块脚本，唯一的脚本是给搜索引擎用的结构化数据。',
  'proof.site.2.title': '页面数量',
  'proof.site.2.what': '十页，两种语言',
  'proof.site.2.check': '五条路由，每条都构建了中文与英文两个版本。',
  'proof.site.3.title': '图片与视频',
  'proof.site.3.what': '六份，均为开放许可',
  'proof.site.3.check': '在页脚署名，每一份都附上来源链接。',
  'proof.site.4.title': '部署前的检查',
  'proof.site.4.what': '类型、单元测试、产物校验',
  'proof.site.4.check': 'npm run check、npm test 与 npm run verify 必须全部通过。',
  'proof.site.5.title': '响应头',
  'proof.site.5.what': '无内联脚本、禁止被嵌入、启用 HSTS',
  'proof.site.5.check': 'curl -I https://hcentlab.com',
  'proof.picture.alt': '晴天下从公园的树木与水面之上望向深圳福田的天际线',
  'proof.picture.caption': '深圳福田。代码就是在这里写的。',
  'bridge.alt': '从空中俯瞰深圳湾大桥，跨过绿色的海面通往香港方向的山峦',
  'bridge.caption': '深圳湾大桥，望向香港方向。',
  'civic.alt': '深圳一处铺装广场上方的长拱廊，身后是树丛中的红色与金色建筑',
  'civic.caption': '深圳市民中心，位于莲花山公园中轴线上。',

  // ------------------------------------------------------------- clip band
  'clip.alt': '缓慢掠过深圳南山科技园的景象：高楼、树木与积云',
  'clip.caption': '深圳南山。无声循环；在减弱动态效果下显示静态封面。',

  // --------------------------------------------------------------- contact
  'contact.meta.title': '联系我们 — 宅迅',
  'contact.meta.description':
    '就软件开发或技术支持事宜联系深圳市宅迅贸易有限公司。每一封来信都由我们自己阅读并回复。',
  'contact.heading': '告诉我们你要做什么，或者哪里出了问题。',
  'contact.lede': '写给 Ribin Ding：一个待开发的产品、一套要持续运行的系统，或者已经停止工作的部分。',
  'contact.email.action': '写邮件给我们',
  'contact.email.subject': '来自网站的咨询',
  'contact.enquiry.title': '来信建议包含',
  'contact.enquiry.item1': '产品要解决什么问题，使用者是谁。',
  'contact.enquiry.item2': '当前阶段：一个想法、一套线上系统，还是一次故障。',
  'contact.enquiry.item3': '关键约束：时间、预算区间、平台与合规要求。',
  'contact.enquiry.item4': '期望的合作方式：项目制、长期合作，或技术支持合同。',
  'contact.promise.title': '接下来会发生什么',
  'contact.promise.body':
    '每一封来信都由我们自己阅读并如实回复，包括我们并不合适的情况。对于可以承接的工作，下一步是先做一次简短沟通，然后给出书面范围。',
  'contact.details.title': '公司信息',
  'contact.details.legal.label': '公司全称',
  'contact.details.legal.value': '深圳市宅迅贸易有限公司',
  'contact.details.location.label': '所在地',
  'contact.details.location.value': '中国广东省深圳市',
  'contact.details.languages.label': '语言',
  'contact.details.languages.value': '中文、英文',
  'contact.details.person.label': '联系人',
  'contact.person.value': 'Ribin Ding',
  'contact.email.label': '邮箱',
  'contact.email.value': 'ribin.ding@hcentlab.com',

  // ---------------------------------------------------------------- company
  'about.meta.title': '关于我们 — 深圳软件公司宅迅',
  'about.meta.description':
    '深圳市宅迅贸易有限公司在深圳从事软件产品开发并提供技术支持，工作语言为中文与英文。',
  'about.title': '一支扎根深圳、以长期支持为目标的软件团队',
  'about.lede': '深圳市宅迅贸易有限公司为客户开发软件产品并提供技术支持，服务范围覆盖国内与海外。',
  'about.profile.title': '我们做什么',
  'about.profile.body1':
    '公司对外以「宅迅」为品牌。我们做的是软件：把一个产品想法或一套既有系统，从研发、上线一路负责到之后的长期维护。',
  'about.profile.body2':
    '我们以小团队方式协作，让客户直接对接负责交付的工程师；所有承诺都以书面形式确认。',
  'about.record.title': '公司信息',
  'about.record.col1': '项目',
  'about.record.col2': '内容',
  'about.record.legal.label': '公司全称',
  'about.record.legal.value': '深圳市宅迅贸易有限公司',
  'about.record.business.label': '主营业务',
  'about.record.business.value': '软件产品开发与技术支持',
  'about.record.base.label': '所在地',
  'about.record.base.value': '中国广东省深圳市',
  'about.record.languages.label': '工作语言',
  'about.record.languages.value': '中文、英文',
  'about.record.contact.label': '联系人',
  'about.principles.title': '四项承诺',
  'about.principles.lede': '与首页上的四项一致，因为我们愿意被这些标准衡量。',
  'about.principles.item1.title': '范围书面化',
  'about.principles.item1.body': '在写代码之前，先约定前提假设、交付物与验收标准。',
  'about.principles.item2.title': '以可运行的软件为准',
  'about.principles.item2.body': '进度由能跑起来的东西衡量，而不是投入的工时。',
  'about.principles.item3.title': '不制造绑定',
  'about.principles.item3.body': '代码、文档与基础设施访问权限都归你所有。',
  'about.principles.item4.title': '上线之后仍负责',
  'about.principles.item4.body': '维护是合作的一部分，而不是事后追加。',

  // --------------------------------------------------------------- services
  'servicesPage.meta.title': '服务 — 软件开发与技术支持',
  'servicesPage.meta.description':
    '深圳的定制软件开发、Web 平台与门户、系统集成与接口、技术支持与维护、云与交付工程、技术咨询与评审。',
  'servicesPage.title': '软件开发与技术支持',
  'servicesPage.lede':
    '可以按明确的项目合作，也可以为你正在依赖的系统提供长期支持。下面每一项都可以在上线之后继续。',
  'servicesPage.deliverables': '常见工作内容',
  'servicesPage.engagement.title': '合作通常如何开始',
  'servicesPage.engagement.body':
    '多数客户会先进行一次短期的付费调研：我们梳理需求、现有系统与各项约束，然后给出一份书面范围、交付计划，以及固定报价或费率。如果我们并不合适，也会在这一步直接说明。',
  'servicesPage.cta.title': '不确定需要哪一项？',
  'servicesPage.cta.body': '直接描述问题，而不是解决方案。判断合适的范围本身就是我们的工作。',

  // ------------------------------------------------------------------- 404
  'notFound.meta.title': '页面不存在 — 宅迅',
  'notFound.meta.description': '你访问的页面不存在。',
  'notFound.title': '这个页面不存在',
  'notFound.body': '链接可能已过期，或者页面已被移动或删除。',
  'notFound.action': '返回首页',

  // ---------------------------------------------------------------- footer
  'footer.name': '宅迅',
  'footer.reach': '写邮件给我们',
  'footer.pages': '页面',
  'footer.languages': '语言',
  'footer.rights': '版权所有。',
  'footer.note': '软件产品开发与技术支持。',
  'footer.credits.label': '图片与视频来源',
  'footer.credits.source': '来源',
  'credit.panorama': '《深圳西望全景2021》，摄影 Charlie fong，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.futian': '《福田商业区东望2020》，摄影 Charlie fong，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.market': '《华强电子世界 1》，摄影 Mx. Granger，CC0，来自 Wikimedia Commons（已裁剪）',
  'credit.bridge': '《深圳湾大桥航拍》，摄影 Windmemories，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.civic': '《深圳市民中心（3）》，摄影 Dinkun Chen，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.clip': '《深圳南山科技园2018》，摄影 Charlie fong，CC BY-SA 4.0，来自 Wikimedia Commons（已重新编码）',
  'footer.icp': '',
};

export const ui: Record<Locale, Record<UIKey, string>> = { en, zh };
