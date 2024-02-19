import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const siteURL = process.env.URL && process.env.URL;

// https://astro.build/config
export default defineConfig({
  site: siteURL || 'https://shaifarfan.com',
  integrations: [react(), tailwind()],
});
