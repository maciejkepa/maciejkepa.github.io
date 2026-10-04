import rss from '@astrojs/rss';
import mdxRenderer from '@astrojs/mdx/server.js';
import type { APIContext } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection, render } from 'astro:content';
import { parseFragment, serialize, type DefaultTreeAdapterMap } from 'parse5';

import { siteConfig } from '../lib/site';
import { sortPosts } from '../lib/blog';

function resolveContentUrls(html: string, articleUrl: URL) {
  const fragment = parseFragment(html);

  function visit(node: DefaultTreeAdapterMap['node']) {
    if ('attrs' in node) {
      for (const attribute of node.attrs) {
        if (['href', 'src', 'poster'].includes(attribute.name)) {
          attribute.value = new URL(attribute.value, articleUrl).href;
        }
      }
    }
    if ('childNodes' in node) node.childNodes.forEach(visit);
  }

  visit(fragment);
  return serialize(fragment);
}

export async function GET(context: APIContext) {
  const posts = sortPosts(await getCollection('blog', ({ data }) => !data.draft));
  const site = context.site ?? new URL(siteConfig.url);
  const container = await AstroContainer.create();
  container.addServerRenderer({ renderer: mdxRenderer });
  const items = [];

  for (const post of posts) {
    const articleUrl = new URL(`/blog/${post.id}/`, site);
    const { Content } = await render(post);
    const html = await container.renderToString(Content, {
      request: new Request(articleUrl)
    });

    items.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: articleUrl.href,
      categories: post.data.tags,
      content: resolveContentUrls(html, articleUrl)
    });
  }

  return rss({
    title: `${siteConfig.owner} | ${siteConfig.name}`,
    description: siteConfig.tagline,
    site,
    items
  });
}
