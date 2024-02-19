import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
const siteURL =
  import.meta.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

// https://astro.build/config
export default defineConfig({
  site: siteURL || 'https://shaifarfan.com',
  integrations: [react(), tailwind(), sitemap()],
});
