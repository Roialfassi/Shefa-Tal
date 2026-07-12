import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Currently deployed to GitHub Pages, which serves the site under /Shefa-Tal.
// When the real domain (e.g. https://shefatal.co.il) is attached:
//   1. set `site` to the domain
//   2. delete the `base` line entirely
// All internal links go through url() in src/data/site.ts, so nothing else changes.
export default defineConfig({
  site: 'https://roialfassi.github.io',
  base: '/Shefa-Tal',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
