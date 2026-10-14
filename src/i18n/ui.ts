/**
 * Every user-visible string on this site lives in this file, in both locales.
 *
 * Rules (see AGENTS.md §3):
 *  - `en` is the reference dictionary. Its keys define the `UIKey` union.
 *  - `zh` is typed as `Record<UIKey, string>`, so a missing or stray Chinese
 *    string is a TypeScript error and fails the build. Never loosen this type.
 *  - Components and pages must never contain hard-coded user-visible copy.
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
  // ---------------------------------------------------------------- identity
  'site.name': 'Homecent',
  'site.legalName': 'Shenzhen Homecent Trading Co., Ltd.',
  'site.tagline': 'Software products, engineered and supported.',
  'site.location': 'Shenzhen, Guangdong, China',
  'meta.ogAlt': 'Homecent — software product development and technical support',

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
  'lang.short.zh': '中文',

  // ------------------------------------------------------------------- hero
  'home.meta.title': 'Homecent — software product development and technical support, Shenzhen',
  'home.meta.description':
    'Homecent is a software company in Shenzhen. We build software products for clients and keep them running after launch, in English and Chinese.',
  'hero.nameA': 'Homecent',
  'hero.nameB': '宅迅',
  'hero.support':
    'A software company in Shenzhen. We build software products, and we run them after launch.',
  'hero.action': 'Start a project',
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
  'services.heading.a': 'Six kinds of work,',
  'services.heading.b': 'one team that stays',
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
  'proof.heading.a': 'This page',
  'proof.heading.b': 'is the sample',
  'proof.lede':
    'No logos, no case studies, no numbers we cannot show you. Two tables you can check from where you are sitting: what we commit to, and how this site itself is built.',
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
  'proof.site.2.what': 'Eight, in two languages',
  'proof.site.2.check': 'Four routes, each built in English and in Simplified Chinese.',
  'proof.site.3.title': 'Photographs and footage',
  'proof.site.3.what': 'Five, openly licensed',
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
  'contact.details.legal.valueZh': '深圳市宅迅贸易有限公司',
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
  'about.record.legal.valueZh': '深圳市宅迅贸易有限公司',
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
  'credit.panorama': '“The west panorama of Shenzhen2021” by Charlie fong, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.futian': '“Commercial area of Futian to east2020” by Charlie fong, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.market': '“华强电子世界 1” by Mx. Granger, CC0, via Wikimedia Commons (cropped)',
  'credit.bridge': '“Shenzhen Bay Bridge aerial view” by Windmemories, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.civic': '“CIVIC CENTER, SHENZHEN (3)” by Dinkun Chen, CC BY-SA 4.0, via Wikimedia Commons (cropped)',
  'credit.clip': '“Nanshantechdistrictshenzhen2018” by Charlie fong, CC BY-SA 4.0, via Wikimedia Commons (re-encoded)',
  // TODO(client): add the ICP filing number here if the site is ever served from mainland China.
  'footer.icp': '',
};

/** The key union every locale must cover. */
export type UIKey = keyof typeof en;

const zh: Record<UIKey, string> = {
  // ---------------------------------------------------------------- identity
  'site.name': '宅迅',
  'site.legalName': '深圳市宅迅贸易有限公司',
  'site.tagline': '软件产品，从研发到长期支持。',
  'site.location': '中国广东省深圳市',
  'meta.ogAlt': '宅迅 — 软件产品开发与技术支持',

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
  'lang.short.zh': '中文',

  // ------------------------------------------------------------------- hero
  'home.meta.title': '宅迅 Homecent — 深圳的软件产品开发与技术支持',
  'home.meta.description':
    '宅迅是一家位于深圳的软件公司。我们为客户开发软件产品，并在上线后持续运行与维护，工作语言为中文与英文。',
  'hero.nameA': '宅迅',
  'hero.nameB': 'Homecent',
  'hero.support': '深圳的一家软件公司。我们开发软件产品，并在上线之后继续运行它们。',
  'hero.action': '聊聊你的项目',
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
  'services.heading.a': '六种工作，',
  'services.heading.b': '同一支留下的团队',
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
  'proof.heading.a': '这一页',
  'proof.heading.b': '就是作品样本',
  'proof.lede':
    '我们没有 logo 墙、没有案例包装，也没有无法让你核对的数字。这里是两张你可以当场验证的表：我们承诺什么，以及这个站点本身是怎么做出来的。',
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
  'proof.site.2.what': '八页，两种语言',
  'proof.site.2.check': '四条路由，每条都构建了中文与英文两个版本。',
  'proof.site.3.title': '图片与视频',
  'proof.site.3.what': '五份，均为开放许可',
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
  'contact.meta.title': '联系我们 — 宅迅 Homecent',
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
  'contact.details.legal.valueZh': 'Shenzhen Homecent Trading Co., Ltd.',
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
    '公司对外品牌为 Homecent。我们做的是软件：把一个产品想法或一套既有系统，从研发、上线一路负责到之后的长期维护。',
  'about.profile.body2':
    '我们以小团队方式协作，让客户直接对接负责交付的工程师；所有承诺都以书面形式确认。',
  'about.record.title': '公司信息',
  'about.record.col1': '项目',
  'about.record.col2': '内容',
  'about.record.legal.label': '公司全称',
  'about.record.legal.value': '深圳市宅迅贸易有限公司',
  'about.record.legal.valueZh': 'Shenzhen Homecent Trading Co., Ltd.',
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
  'notFound.meta.title': '页面不存在 — 宅迅 Homecent',
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
  'credit.panorama': '“The west panorama of Shenzhen2021”，摄影 Charlie fong，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.futian': '“Commercial area of Futian to east2020”，摄影 Charlie fong，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.market': '“华强电子世界 1”，摄影 Mx. Granger，CC0，来自 Wikimedia Commons（已裁剪）',
  'credit.bridge': '“Shenzhen Bay Bridge aerial view”，摄影 Windmemories，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.civic': '“CIVIC CENTER, SHENZHEN (3)”，摄影 Dinkun Chen，CC BY-SA 4.0，来自 Wikimedia Commons（已裁剪）',
  'credit.clip': '“Nanshantechdistrictshenzhen2018”，摄影 Charlie fong，CC BY-SA 4.0，来自 Wikimedia Commons（已重新编码）',
  'footer.icp': '',
};

export const ui: Record<Locale, Record<UIKey, string>> = { en, zh };
