import type { APIRoute } from 'astro';
import { isNetlifyContextProd } from '~/utils/isNetlifyContextProd';

const robotsTxt = isNetlifyContextProd
  ? `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim()
  : 'User-agent: *\nDisallow: /\n';

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
