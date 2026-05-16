import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { siteConfig } from '../lib/site';
import { sortPosts } from '../lib/blog';

export async function GET(context) {
  const posts = sortPosts(await getCollection('blog', ({ data }) => !data.draft));

  return rss({
    title: `${siteConfig.owner} | ${siteConfig.name}`,
    description: siteConfig.tagline,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
      content: post.body
    }))
  });
}
