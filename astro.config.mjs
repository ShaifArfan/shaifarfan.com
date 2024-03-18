import { defineConfig, squooshImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerMetaHighlight,
  transformerCompactLineOptions,
} from 'shikiji-transformers';
import mdx from '@astrojs/mdx';
const siteURL =
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL;

// https://astro.build/config
export default defineConfig({
  site: siteURL || 'https://shaifarfan.com',
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.cjs',
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
  ],
  image: {
    domains: ['images.unsplash.com'],
    service: squooshImageService(),
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      transformers: [
        transformerMetaHighlight(),
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerCompactLineOptions(),
      ],
    },
  },
  mdx: {
    shikiConfig: {
      theme: 'github-dark',
      transformers: [
        transformerMetaHighlight(),
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerCompactLineOptions(),
      ],
    },
  },
});
