import { getCollection } from 'astro:content';

import { getTopicCards, sortPosts } from '../lib/blog';
import { siteConfig } from '../lib/site';

export const prerender = true;

interface SitemapEntry {
  loc: string;
  lastmod?: string;
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const posts = sortPosts(await getCollection('blog', ({ data }) => !data.draft));
  const topics = getTopicCards(posts);
  const staticRoutes = ['/', '/blog/', '/topics/', '/speaking/', '/about/', '/projects/'];

  const entries: SitemapEntry[] = [
    ...staticRoutes.map((path) => ({
      loc: new URL(path, siteConfig.url).href
    })),
    ...topics.map((topic) => ({
      loc: new URL(`/blog/topic/${topic.slug}/`, siteConfig.url).href
    })),
    ...posts.map((post) => ({
      loc: new URL(`/blog/${post.id}/`, siteConfig.url).href,
      lastmod: (post.data.updated ?? post.data.date).toISOString()
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `
    <lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
