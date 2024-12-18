import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md, mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCredit: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: postsCollection,
};
