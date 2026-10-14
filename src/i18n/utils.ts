import {
  defaultLocale,
  localeTags,
  locales,
  ui,
  type Locale,
  type UIKey,
} from './ui';

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
  { key: 'nav.home', path: routes.home },
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

/** The four delivery stages, shared by the home page. */
export const processSteps = [1, 2, 3, 4] as const;

/** The four commitments on the company page. */
export const principleIndexes = [1, 2, 3, 4] as const;

/** The four differentiators on the home page. */
export const reasonIndexes = [1, 2, 3, 4] as const;
