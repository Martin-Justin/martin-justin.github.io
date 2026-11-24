// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Public URL of the site: used for canonical links, Open Graph tags and the sitemap.
  site: 'https://martin-justin.github.io',
  // Astro 7 defaults to 'jsx', which strips spaces between inline elements
  // (e.g. `</strong> <em>` in the CV). `true` keeps the Astro 6 behaviour.
  compressHTML: true,
  integrations: [sitemap()]
});