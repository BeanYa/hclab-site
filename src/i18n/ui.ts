/**
 * Every user-visible string on this site lives in this file, in both locales.
 *
 * Rules (see AGENTS.md §3):
 *  - `en` is the reference dictionary. Its keys define the `UIKey` union.
 *  - `zh` is typed as `Record<UIKey, string>`, so a missing or stray Chinese
 *    string is a TypeScript error and fails the build. Never loosen this type.
 *  - Components and pages must never contain hard-coded user-visible copy.
 *
 * Placeholder values that still need client confirmation are marked with TODO.
 */

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** BCP-47 tags for <html lang> and hreflang. */
export const localeTags: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
};

/** Each locale named in its own language, for the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
};

const en = {
  // ---------------------------------------------------------------- identity
  'site.name': 'Homecent',
  'site.legalName': 'Shenzhen Homecent Trading Co., Ltd.',
  'site.tagline': 'Software products, engineered and supported.',
  'site.location': 'Shenzhen, China',
  'brand.descriptor': 'Software · Shenzhen',
  'meta.ogAlt': 'Homecent — software product development and technical support',

  // -------------------------------------------------------------------- nav
  'nav.primary': 'Primary',
  'nav.home': 'Home',
  'nav.about': 'Company',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.skip': 'Skip to content',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',

  // --------------------------------------------------------------- language
  'lang.label': 'Language',
  'lang.switchTo': 'Switch language',
  'lang.current': 'Current language',
  'lang.short.en': 'EN',
  'lang.short.zh': '中文',

  // ------------------------------------------------------------------- home
  'home.meta.title': 'Homecent — Software product development and technical support',
  'home.meta.description':
    'Homecent is a Shenzhen software company. We develop software products and provide ongoing technical support for clients in China and abroad.',
  'home.eyebrow': 'Shenzhen · Software product development & technical support',
  'home.title': 'Software products, built and supported end to end.',
  'home.lede':
    'Homecent is a Shenzhen-based software company. We design, build and maintain software products for our clients — and we stay on after launch to keep them running.',
  'home.point1': 'Product engineering from first requirements to production release',
  'home.point2': 'Technical support with named ownership and agreed response terms',
  'home.point3': 'English and Chinese working languages, Shenzhen time zone coverage',
  'home.action.primary': 'Start a project',
  'home.action.secondary': 'See what we do',

  'home.facts.title': 'At a glance',
  'home.facts.based.label': 'Based in',
  'home.facts.based.value': 'Shenzhen, China',
  'home.facts.focus.label': 'Core business',
  'home.facts.focus.value': 'Software product development',
  'home.facts.support.label': 'Also provided',
  'home.facts.support.value': 'Technical support and maintenance',
  'home.facts.languages.label': 'Working languages',
  'home.facts.languages.value': 'English · 简体中文',

  // --------------------------------------------------------- services (home)
  'services.eyebrow': 'Services',
  'services.title': 'What we do',
  'services.lede':
    'Six ways we work with clients — most engagements combine several of them, and all of them can continue after launch.',

  // ----------------------------------------------------------- home process
  'process.eyebrow': 'How we work',
  'process.title': 'A delivery sequence you can hold us to',
  'process.lede': 'Every engagement follows the same four stages, so you always know where the work stands.',
  'process.step1.title': 'Scope',
  'process.step1.body':
    'We agree what the product must do, what it must not do, and how success will be measured.',
  'process.step2.title': 'Plan',
  'process.step2.body': 'Architecture, milestones and a delivery schedule written down before development starts.',
  'process.step3.title': 'Build',
  'process.step3.body': 'Short iterations, each one ending in software you can actually run and review.',
  'process.step4.title': 'Operate',
  'process.step4.body': 'We stay on for support, maintenance and the changes that follow launch.',

  // ------------------------------------------------------------ home reason
  'reasons.eyebrow': 'Why Homecent',
  'reasons.title': 'Terms we are willing to be measured on',
  'reasons.item1.title': 'Direct access to the engineers',
  'reasons.item1.body': 'The people you speak to are the people writing the code.',
  'reasons.item2.title': 'Scope in writing',
  'reasons.item2.body':
    'Deliverables, assumptions and change handling are documented before work starts.',
  'reasons.item3.title': 'Support that continues',
  'reasons.item3.body': 'The team that builds your product is the team that maintains it.',
  'reasons.item4.title': 'Bilingual delivery',
  'reasons.item4.body': 'Requirements, updates and documentation in English and Chinese.',

  // ----------------------------------------------------------- shared action
  'cta.title': 'Tell us what you need built, or what needs fixing.',
  'cta.body':
    'Send a short description of the product, the problem or the support you need. We will come back with questions and a clear next step.',
  'cta.button': 'Contact us',

  // ------------------------------------------------------------------ about
  'about.meta.title': 'Company — Homecent, Shenzhen',
  'about.meta.description':
    'Shenzhen Homecent Trading Co., Ltd. (深圳市宅迅贸易有限公司) develops software products and provides technical support.',
  'about.eyebrow': 'Company',
  'about.title': 'A Shenzhen software team, built for long-term support.',
  'about.lede':
    'Shenzhen Homecent Trading Co., Ltd. develops software products and provides technical support to clients in China and abroad.',
  'about.profile.title': 'What the company does',
  'about.profile.body1':
    'The company trades as Homecent. Our work is software: we take a product idea or an existing system and carry it through development, release and the maintenance that follows.',
  'about.profile.body2':
    'We work in small teams, so clients deal directly with the engineers responsible for delivery, and we put our commitments in writing.',
  'about.facts.title': 'Company record',
  'about.facts.legal.label': 'Legal name',
  'about.facts.legal.value': 'Shenzhen Homecent Trading Co., Ltd. (深圳市宅迅贸易有限公司)',
  'about.facts.business.label': 'Core business',
  'about.facts.business.value': 'Software product development and technical support',
  'about.facts.base.label': 'Base of operations',
  'about.facts.base.value': 'Shenzhen, Guangdong, China',
  'about.facts.languages.label': 'Working languages',
  'about.facts.languages.value': 'English, Simplified Chinese',
  'about.principles.eyebrow': 'Principles',
  'about.principles.title': 'Four commitments',
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
  'servicesPage.meta.title': 'Services — Software development and technical support',
  'servicesPage.meta.description':
    'Custom software development, web platforms, system integration, technical support, cloud delivery engineering and technical consulting.',
  'servicesPage.eyebrow': 'Services',
  'servicesPage.title': 'Software development and technical support',
  'servicesPage.lede':
    'We build software products and keep them running. Engage us for a defined project, or for ongoing support of a system you already depend on.',
  'servicesPage.deliverables': 'Typical work',
  'servicesPage.engagement.title': 'How engagements usually start',
  'servicesPage.engagement.body':
    'Most clients begin with a short paid discovery: we review the requirement, the existing system and the constraints, then give you a written scope, a delivery plan and a fixed price or rate. If we are not the right fit, we say so at that point.',
  'servicesPage.cta.title': 'Not sure which of these you need?',
  'servicesPage.cta.body': 'Describe the problem instead of the solution. Working out the right scope is part of the job.',

  // ------------------------------------------------------- service entries
  'services.custom.title': 'Custom software development',
  'services.custom.summary': 'A complete, maintainable system, from requirements through to production release.',
  'services.custom.p1': 'Business systems and internal tools',
  'services.custom.p2': 'Server-side services and background processing',
  'services.custom.p3': 'Technical documentation and handover',
  'services.web.title': 'Web platforms and portals',
  'services.web.summary': 'Public sites, customer portals and admin consoles that remain maintainable after launch.',
  'services.web.p1': 'Server-rendered and static front ends',
  'services.web.p2': 'Admin consoles and reporting views',
  'services.web.p3': 'Accessibility and performance budgets',
  'services.integration.title': 'System integration and APIs',
  'services.integration.summary': 'Make the systems you already run work with the software you are adding.',
  'services.integration.p1': 'Third-party and partner API integration',
  'services.integration.p2': 'Data migration and synchronisation',
  'services.integration.p3': 'Authentication and access control',
  'services.support.title': 'Technical support and maintenance',
  'services.support.summary': 'Ongoing support with a named owner, rather than an anonymous ticket queue.',
  'services.support.p1': 'Monitoring, triage and incident response',
  'services.support.p2': 'Bug fixes, patches and dependency upkeep',
  'services.support.p3': 'Change requests and small enhancements',
  'services.cloud.title': 'Cloud and delivery engineering',
  'services.cloud.summary': 'Build, deploy and operate on infrastructure you can audit and take over.',
  'services.cloud.p1': 'CI/CD pipelines and release automation',
  'services.cloud.p2': 'Cloudflare and mainstream cloud platforms',
  'services.cloud.p3': 'Observability, logging and cost awareness',
  'services.consulting.title': 'Technical consulting and review',
  'services.consulting.summary': 'An independent read on architecture, risk and delivery before you commit.',
  'services.consulting.p1': 'Architecture and code review',
  'services.consulting.p2': 'Delivery plans and effort assessment',
  'services.consulting.p3': 'Build-versus-buy and vendor evaluation',

  // ---------------------------------------------------------------- contact
  'contact.meta.title': 'Contact — Homecent',
  'contact.meta.description':
    'Contact Shenzhen Homecent Trading Co., Ltd. about software development or technical support.',
  'contact.eyebrow': 'Contact',
  'contact.title': 'Tell us what you need built, or what needs fixing.',
  'contact.lede':
    'Send a short description of the product, the problem or the support you need. We will reply with questions and a next step.',
  'contact.email.label': 'Email',
  'contact.email.value': 'contact@hcentlab.com',
  'contact.email.action': 'Send an email',
  'contact.enquiry.title': 'What to include',
  'contact.enquiry.item1': 'What the product should do, and who will use it.',
  'contact.enquiry.item2': 'The current stage: an idea, an existing system, or something that has stopped working.',
  'contact.enquiry.item3': 'Constraints that matter: deadline, budget range, platforms, compliance.',
  'contact.enquiry.item4': 'How you would like to work with us: a project, a long-term partnership, or a support contract.',
  'contact.promise.title': 'What happens next',
  'contact.promise.body':
    'We read every enquiry ourselves and answer honestly, including when we are not the right fit for the work. For anything we can help with, the next step is a short conversation and then a written scope.',
  'contact.details.title': 'Company details',
  'contact.details.legal.label': 'Legal name',
  'contact.details.legal.value': 'Shenzhen Homecent Trading Co., Ltd. (深圳市宅迅贸易有限公司)',
  'contact.details.location.label': 'Location',
  'contact.details.location.value': 'Shenzhen, Guangdong, China',
  'contact.details.languages.label': 'Languages',
  'contact.details.languages.value': 'English, Simplified Chinese',

  // ------------------------------------------------------------------- 404
  'notFound.meta.title': 'Page not found — Homecent',
  'notFound.meta.description': 'The page you requested does not exist.',
  'notFound.title': 'This page does not exist.',
  'notFound.body': 'The link may be out of date, or the page may have been moved or removed.',
  'notFound.action': 'Back to the homepage',

  // ---------------------------------------------------------------- footer
  'footer.company': 'Company',
  'footer.explore': 'Explore',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.note': 'Software product development and technical support.',
  // TODO(client): add the ICP filing number here if the site is ever served from mainland China.
  'footer.icp': '',
};

/** The key union every locale must cover. */
export type UIKey = keyof typeof en;

const zh: Record<UIKey, string> = {
  'site.name': '宅迅',
  'site.legalName': '深圳市宅迅贸易有限公司',
  'site.tagline': '软件产品，从研发到长期支持。',
  'site.location': '中国 · 深圳',
  'brand.descriptor': '软件 · 深圳',
  'meta.ogAlt': '宅迅 — 软件产品开发与技术支持',

  'nav.primary': '主导航',
  'nav.home': '首页',
  'nav.about': '关于我们',
  'nav.services': '服务',
  'nav.contact': '联系我们',
  'nav.skip': '跳到主要内容',
  'nav.openMenu': '打开菜单',
  'nav.closeMenu': '关闭菜单',

  'lang.label': '语言',
  'lang.switchTo': '切换语言',
  'lang.current': '当前语言',
  'lang.short.en': 'EN',
  'lang.short.zh': '中文',

  'home.meta.title': '宅迅 Homecent — 软件产品开发与技术支持',
  'home.meta.description':
    '宅迅是一家位于深圳的软件公司，为客户开发软件产品并提供长期技术支持，服务范围覆盖国内与海外。',
  'home.eyebrow': '深圳 · 软件产品开发与技术支持',
  'home.title': '软件产品，从研发到长期支持。',
  'home.lede':
    '宅迅是一家位于深圳的软件公司。我们为客户设计、开发并长期维护软件产品——上线之后，我们仍在。',
  'home.point1': '从需求梳理到正式上线的完整产品研发',
  'home.point2': '有明确责任人与响应约定的技术支持',
  'home.point3': '中英双语协作，覆盖深圳时区',
  'home.action.primary': '聊聊你的项目',
  'home.action.secondary': '看看我们做什么',

  'home.facts.title': '基本信息',
  'home.facts.based.label': '所在地',
  'home.facts.based.value': '中国 · 深圳',
  'home.facts.focus.label': '主营业务',
  'home.facts.focus.value': '软件产品开发',
  'home.facts.support.label': '同时提供',
  'home.facts.support.value': '技术支持与维护',
  'home.facts.languages.label': '工作语言',
  'home.facts.languages.value': '中文 · English',

  'services.eyebrow': '服务',
  'services.title': '我们能做什么',
  'services.lede': '六种合作方式。多数项目会同时涉及其中几项，而且都可以在上线后继续。',

  'process.eyebrow': '工作方式',
  'process.title': '一套可以据此验收的交付流程',
  'process.lede': '每个项目都按这四个阶段推进，你随时都能知道进度在哪里。',
  'process.step1.title': '范围界定',
  'process.step1.body': '明确产品要做什么、不做什么，以及如何衡量成效。',
  'process.step2.title': '方案规划',
  'process.step2.body': '在开发开始前，把架构、里程碑与交付排期落在书面上。',
  'process.step3.title': '研发实现',
  'process.step3.body': '短周期迭代，每个迭代结束都有可以实际运行和评审的软件。',
  'process.step4.title': '持续支持',
  'process.step4.body': '上线后我们继续提供支持、维护与后续变更。',

  'reasons.eyebrow': '为什么选择宅迅',
  'reasons.title': '我们愿意被这些标准衡量',
  'reasons.item1.title': '直接对接工程师',
  'reasons.item1.body': '与你沟通的人，就是写代码的人。',
  'reasons.item2.title': '范围落在纸面',
  'reasons.item2.body': '开工前先明确交付物、前提假设与变更处理方式。',
  'reasons.item3.title': '支持不断档',
  'reasons.item3.body': '开发你产品的人，就是之后维护它的人。',
  'reasons.item4.title': '双语交付',
  'reasons.item4.body': '需求说明、进度同步与技术文档均提供中英文。',

  'cta.title': '告诉我们你要做什么，或者哪里出了问题。',
  'cta.body': '简单描述你的产品、问题或所需的技术支持。我们会先回几个问题，并给出明确的下一步。',
  'cta.button': '联系我们',

  'about.meta.title': '关于我们 — 宅迅 Homecent',
  'about.meta.description': '深圳市宅迅贸易有限公司（Shenzhen Homecent Trading Co., Ltd.）从事软件产品开发并提供技术支持。',
  'about.eyebrow': '关于我们',
  'about.title': '一支扎根深圳、以长期支持为目标的软件团队。',
  'about.lede': '深圳市宅迅贸易有限公司为客户开发软件产品并提供技术支持，服务范围覆盖国内与海外。',
  'about.profile.title': '我们做什么',
  'about.profile.body1':
    '公司对外品牌为 Homecent。我们做的是软件：把一个产品想法或一套既有系统，从研发、上线一路负责到之后的长期维护。',
  'about.profile.body2':
    '我们以小团队方式协作，让客户直接对接负责交付的工程师；所有承诺都以书面形式确认。',
  'about.facts.title': '公司信息',
  'about.facts.legal.label': '公司全称',
  'about.facts.legal.value': '深圳市宅迅贸易有限公司（Shenzhen Homecent Trading Co., Ltd.）',
  'about.facts.business.label': '主营业务',
  'about.facts.business.value': '软件产品开发与技术支持',
  'about.facts.base.label': '所在地',
  'about.facts.base.value': '中国广东省深圳市',
  'about.facts.languages.label': '工作语言',
  'about.facts.languages.value': '中文、英文',
  'about.principles.eyebrow': '原则',
  'about.principles.title': '四项承诺',
  'about.principles.item1.title': '范围书面化',
  'about.principles.item1.body': '在写代码之前，先约定前提假设、交付物与验收标准。',
  'about.principles.item2.title': '以可运行的软件为准',
  'about.principles.item2.body': '进度由能跑起来的东西衡量，而不是投入的工时。',
  'about.principles.item3.title': '不制造绑定',
  'about.principles.item3.body': '代码、文档与基础设施访问权限都归你所有。',
  'about.principles.item4.title': '上线之后仍负责',
  'about.principles.item4.body': '维护是合作的一部分，而不是事后追加。',

  'servicesPage.meta.title': '服务 — 软件开发与技术支持',
  'servicesPage.meta.description':
    '定制软件开发、Web 平台与门户、系统集成与接口、技术支持与维护、云与交付工程、技术咨询与评审。',
  'servicesPage.eyebrow': '服务',
  'servicesPage.title': '软件开发与技术支持',
  'servicesPage.lede':
    '我们开发软件产品，也负责让它们持续运行。可以按明确的项目合作，也可以为你正在依赖的系统提供长期支持。',
  'servicesPage.deliverables': '常见工作内容',
  'servicesPage.engagement.title': '合作通常如何开始',
  'servicesPage.engagement.body':
    '多数客户会先进行一次短期的付费调研：我们梳理需求、现有系统与各项约束，然后给出一份书面范围、交付计划，以及固定报价或费率。如果我们并不合适，也会在这一步直接说明。',
  'servicesPage.cta.title': '不确定需要哪一项？',
  'servicesPage.cta.body': '直接描述问题，而不是解决方案。判断合适的范围本身就是我们的工作。',

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

  'contact.meta.title': '联系我们 — 宅迅 Homecent',
  'contact.meta.description': '就软件开发或技术支持事宜联系深圳市宅迅贸易有限公司。',
  'contact.eyebrow': '联系我们',
  'contact.title': '告诉我们你要做什么，或者哪里出了问题。',
  'contact.lede': '简单描述你的产品、问题或所需的技术支持。我们会先回几个问题，并给出下一步。',
  'contact.email.label': '邮箱',
  'contact.email.value': 'contact@hcentlab.com',
  'contact.email.action': '写邮件给我们',
  'contact.enquiry.title': '来信建议包含',
  'contact.enquiry.item1': '产品要解决什么问题，使用者是谁。',
  'contact.enquiry.item2': '当前阶段：一个想法、一套已有系统，还是已经无法运行。',
  'contact.enquiry.item3': '关键约束：时间、预算区间、平台与合规要求。',
  'contact.enquiry.item4': '期望的合作方式：项目制、长期合作，或技术支持合同。',
  'contact.promise.title': '接下来会发生什么',
  'contact.promise.body':
    '每一封来信都由我们自己阅读并如实回复——包括我们并不合适的情况。对于可以承接的工作，下一步是先做一次简短沟通，然后给出书面范围。',
  'contact.details.title': '公司信息',
  'contact.details.legal.label': '公司全称',
  'contact.details.legal.value': '深圳市宅迅贸易有限公司（Shenzhen Homecent Trading Co., Ltd.）',
  'contact.details.location.label': '所在地',
  'contact.details.location.value': '中国广东省深圳市',
  'contact.details.languages.label': '语言',
  'contact.details.languages.value': '中文、英文',

  'notFound.meta.title': '页面不存在 — 宅迅 Homecent',
  'notFound.meta.description': '你访问的页面不存在。',
  'notFound.title': '这个页面不存在。',
  'notFound.body': '链接可能已过期，或者页面已被移动或删除。',
  'notFound.action': '返回首页',

  'footer.company': '公司',
  'footer.explore': '浏览',
  'footer.contact': '联系',
  'footer.rights': '版权所有。',
  'footer.note': '软件产品开发与技术支持。',
  'footer.icp': '',
};

export const ui: Record<Locale, Record<UIKey, string>> = { en, zh };
