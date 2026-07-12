import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once purchased (e.g. https://shefatal.co.il)
export default defineConfig({
  site: 'https://shefatal.co.il',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
