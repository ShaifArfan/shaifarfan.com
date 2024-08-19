import type { CollectionEntry } from 'astro:content';
import { isNetlifyContextProd } from './isNetlifyContextProd';

export const getBlogPosts = (posts: CollectionEntry<'blog'>[]) => {
  return posts.filter((post) => {
    if (isNetlifyContextProd && post.slug.startsWith('draft-')) {
      return false;
    }
    return true;
  });
};
