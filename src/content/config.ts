// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: image()
        .refine((img) => img.width >= 1080, {
          message: 'Cover image must be at least 1080 pixels wide!',
        })
        .optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()),
      tutorial: z.string().optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: postsCollection,
};
