export const getEditLink = (slug: string) => {
  const repoUrl = 'https://github.com/ShaifArfan/shaifarfan.com';
  const staticPath = `/blob/${import.meta.env.BRANCH || 'dev'}/`;
  const pathToBlog = 'src/content/blog/';
  // const indexFile = 'index.mdx';

  return `${repoUrl}${staticPath}${pathToBlog}${slug}`;
};
