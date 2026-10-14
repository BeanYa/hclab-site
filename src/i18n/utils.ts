import { defaultLocale, localeTags, locales, ui, type Locale, type UIKey } from './ui';

/* ------------------------------------------------------------------ locales */

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Reads the locale from a pathname: '/zh/about/' -> 'zh', '/about/' -> 'en'. */
export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/')[1] ?? '';
  return isLocale(first) ? first : defaultLocale;
}

/** Removes the locale prefix, keeping the trailing slash: '/zh/about/' -> '/about/'. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/');
  if (segments.length > 1 && isLocale(segments[1] ?? '')) {
    segments.splice(1, 1);
  }
  const rest = segments.join('/');
  return rest.startsWith('/') ? rest : `/${rest}`;
}

/** Rewrites a path into the target locale: ('/about/', 'zh') -> '/zh/about/'. */
export function localizePath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  if (locale === defaultLocale) return base;
  return base === '/' ? `/${locale}/` : `/${locale}${base}`;
}

/** Joins a site origin and a path without doubling or dropping slashes. */
export function absoluteUrl(site: URL | string, pathname: string): string {
  const origin = (typeof site === 'string' ? site : site.href).replace(/\/+$/, '');
  return `${origin}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

export interface Alternate {
  locale: Locale;
  /** hreflang value. */
  tag: string;
  href: string;
}

/** hreflang alternates for one page, including x-default pointing at English. */
export function alternatesFor(site: URL | string, pathname: string): Alternate[] {
  const entries: Alternate[] = locales.map((locale) => ({
    locale,
    tag: localeTags[locale],
    href: absoluteUrl(site, localizePath(pathname, locale)),
  }));

  return [
    ...entries,
    { locale: defaultLocale, tag: 'x-default', href: absoluteUrl(site, localizePath(pathname, defaultLocale)) },
  ];
}

/* ---------------------------------------------------------------- translate */

export type Translator = (key: UIKey) => string;

/** Returns a translate function bound to one locale. */
export function useTranslations(locale: Locale): Translator {
  return (key: UIKey) => ui[locale][key];
}

/* ----------------------------------------------------------- site structure */

/** Canonical path of every page, used by the nav, the footer and the sitemap. */
export const routes = {
  home: '/',
  about: '/about/',
  services: '/services/',
  contact: '/contact/',
} as const;

export interface NavItem {
  key: UIKey;
  path: string;
}

export const navItems: readonly NavItem[] = [
  { key: 'nav.about', path: routes.about },
  { key: 'nav.services', path: routes.services },
  { key: 'nav.contact', path: routes.contact },
];

/* ---------------------------------------------------------------- services */

export const serviceSlugs = [
  'custom',
  'web',
  'integration',
  'support',
  'cloud',
  'consulting',
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export interface Service {
  slug: ServiceSlug;
  title: string;
  summary: string;
  points: string[];
}

/** Fully translated service entries, derived from the copy dictionary. */
export function getServices(locale: Locale): Service[] {
  const t = useTranslations(locale);

  return serviceSlugs.map((slug) => ({
    slug,
    title: t(`services.${slug}.title`),
    summary: t(`services.${slug}.summary`),
    points: [t(`services.${slug}.p1`), t(`services.${slug}.p2`), t(`services.${slug}.p3`)],
  }));
}

/* -------------------------------------------------------- page content sets */

/** The four delivery stages of the process section, in order. */
export const processLines = [1, 2, 3, 4] as const;

/** The three situations of the enquiry chooser, in order. */
export const liveOptions = [1, 2, 3] as const;

/** The four commitments, shared by the home page and the company page. */
export const commitmentIndexes = [1, 2, 3, 4] as const;

/** The five verifiable facts about this website, shown in the proof table. */
export const siteFactIndexes = [1, 2, 3, 4, 5] as const;

export interface RowKeys {
  title: UIKey;
  what: UIKey;
  check: UIKey;
}

/** A label/value row of a record table. */
export interface DetailRow {
  label: UIKey;
  value: UIKey;
}

/** Builds `prefix.<n>.{title,what,check}` rows for a proof table group. */
export function numberedRows(prefix: string, indexes: readonly number[]): RowKeys[] {
  return indexes.map((index) => ({
    title: `${prefix}.${index}.title` as UIKey,
    what: `${prefix}.${index}.what` as UIKey,
    check: `${prefix}.${index}.check` as UIKey,
  }));
}

/* ---------------------------------------------------------------- pictures */

export interface PhotoCredit {
  key: UIKey;
  href: string;
}

/**
 * Every found picture used on the site: the credit text lives in `ui.ts` (it is
 * user-visible copy), the source page it came from lives here.
 */
export const creditHrefs = {
  panorama: 'https://commons.wikimedia.org/wiki/File:The_west_panorama_of_Shenzhen2021.jpg',
  futian: 'https://commons.wikimedia.org/wiki/File:Commercial_area_of_futian_to_east2020.jpg',
  market: 'https://commons.wikimedia.org/wiki/File:%E5%8D%8E%E5%BC%BA%E7%94%B5%E5%AD%90%E4%B8%96%E7%95%8C_1.jpg',
  bridge: 'https://commons.wikimedia.org/wiki/File:Shenzhen_Bay_Bridge_aerial_view.jpg',
  civic: 'https://commons.wikimedia.org/wiki/File:CIVIC_CENTER,_SHENZHEN_(3).jpg',
  clip: 'https://commons.wikimedia.org/wiki/File:Nanshantechdistrictshenzhen2018.webm',
} as const;

export type CreditId = keyof typeof creditHrefs;

export const photoCredits: readonly PhotoCredit[] = (Object.keys(creditHrefs) as CreditId[]).map(
  (id) => ({ key: `credit.${id}` as UIKey, href: creditHrefs[id] }),
);

/* ------------------------------------------------------------------ mailto */

/**
 * Builds a mailto: URL with a written subject and body, so the enquiry arrives
 * with the visitor's situation already stated. Used by the chooser and by every
 * "send an email" action on the site.
 */
export function mailto(email: string, subject: string, body?: string): string {
  const query = body
    ? `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : `subject=${encodeURIComponent(subject)}`;
  return `mailto:${email}?${query}`;
}
