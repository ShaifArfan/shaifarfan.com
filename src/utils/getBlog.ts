import type { CollectionEntry } from 'astro:content';
import { isNetlifyContextProd } from './isNetlifyContextProd';

export const getBlogPosts = (
  posts: CollectionEntry<'blog'>[],
  { tagFilter }: { tagFilter?: string[] }
) => {
  const validPost = posts.filter((post) => {
    if (isNetlifyContextProd && post.id.startsWith('draft-')) {
      return false;
    }
    return true;
  });
  const filteredPosts = validPost
    .filter((post) => {
      if (
        tagFilter &&
        tagFilter.length > 0 &&
        !post.data.tags.some((tag) =>
          tagFilter.includes(tag.toLocaleLowerCase())
        )
      ) {
        return false;
      }
      return true;
    })
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );

  const tags = validPost
    .reduce((acc, post) => {
      post.data.tags.forEach((tag) => {
        if (acc.includes(tag.toLowerCase())) return;
        acc.push(tag.toLowerCase());
      });
      return acc;
    }, [] as string[])
    .sort();

  return {
    posts: filteredPosts,
    tags,
  };
};
