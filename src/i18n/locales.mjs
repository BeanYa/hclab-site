/**
 * Locale registry — the single source of truth for which locales this site has.
 *
 * This file is plain JavaScript on purpose. `astro.config.mjs` is loaded by
 * Vite before TypeScript is available, and pulling a `.ts` module into the
 * config graph makes Vite bundle Astro's own tooling (magicast, postcss,
 * css-tree) as inlined CommonJS, which fails at load time with
 * "require is not defined" on Node 26 / Vite 8. A plain `.mjs` module keeps the
 * config graph trivial, and `src/i18n/ui.ts` re-exports these values so the rest
 * of the codebase still has exactly one place to look.
 *
 * @typedef {'en' | 'zh'} Locale
 */

/** Every locale the site is built in. English first: it is the default. */
export const locales = /** @type {const} */ (['en', 'zh']);

/** The locale served from the site root. */
export const defaultLocale = /** @type {Locale} */ ('en');

/** BCP-47 tags for <html lang> and hreflang. */
export const localeTags = { en: 'en', zh: 'zh-CN' };

/** Each locale named in its own language, for the language switcher. */
export const localeNames = { en: 'English', zh: '简体中文' };
