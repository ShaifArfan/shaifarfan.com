import type { CollectionEntry } from 'astro:content';

export const getBlogPosts = (posts: CollectionEntry<'blog'>[]) => {
  return posts.filter((post) => {
    if (import.meta.env.PROD && post.slug.startsWith('draft-')) {
      return false;
    }
    return true;
  });
};
