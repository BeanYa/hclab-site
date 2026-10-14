// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Imported from a plain .mjs module: a TypeScript import here would make Vite
// bundle Astro's own tooling into the config graph, which fails to load on
// Node 26 + Vite 8 ("require is not defined"). src/i18n/ui.ts re-exports the
// same values, so this stays a single source of truth.
import { defaultLocale, locales } from './src/i18n/locales.mjs';

/**
 * https://astro.build/config
 *
 * English is the default locale and is served from the site root (no /en/ prefix).
 * Simplified Chinese is served under /zh/.
 */
export default defineConfig({
  site: 'https://hcentlab.com',
  output: 'static',

  // Always author internal links with a trailing slash so Cloudflare's
  // "auto-trailing-slash" asset handling never has to redirect.
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
    // Keep CSS in external files so the edge can serve a CSP without
    // 'unsafe-inline' in style-src. See worker/index.ts.
    inlineStylesheets: 'never',
  },

  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: { en: 'en-US', zh: 'zh-CN' },
      },
    }),
  ],

  devToolbar: { enabled: false },
});
