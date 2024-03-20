import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: z.string().optional(),
      // For local images
      // cover: image()
      //   .refine((img) => img.width >= 1024, {
      //     message: 'Cover image must be at least 1024 pixels wide!',
      //   })
      //   .optional(),
      coverAlt: z.string().optional(),
      coverCredit: z.string().optional(),
      tags: z.array(z.string()),
      tutorial: z.string().optional(),
    }),
});

export const collections = {
  blog: postsCollection,
};
