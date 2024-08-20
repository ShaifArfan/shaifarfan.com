import { defineConfig, squooshImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
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
    domains: ['res.cloudinary.com'],
    service: squooshImageService(),
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' },
          rel: ['nofollow'],
          target: '_blank',
        },
      ],
      remarkReadingTime,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            class: 'autolink-header',
            title: 'Copy link to clipboard',
            ariaHidden: true,
            tabIndex: -1,
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
    ],
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
  redirects: {
    '/resume': '/resume.pdf',
  },
});
