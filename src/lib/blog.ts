import type { CollectionEntry } from 'astro:content';

import { topicDefinitions } from './site';

export type BlogPost = CollectionEntry<'blog'>;

export function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function getPostFilterTokens(post: BlogPost) {
  const tokens = new Set(post.data.tags.map(normalizeTag));

  if (post.data.type === 'guide') {
    tokens.add('tutorials');
  }

  if (tokens.has('llm-engineering')) {
    tokens.add('llm');
  }

  if (tokens.has('architecture') || tokens.has('production-ml')) {
    tokens.add('ai-architecture');
  }

  return [...tokens];
}

export function countPostsForTopic(posts: BlogPost[], topicSlug: string) {
  return posts.filter((post) => getPostFilterTokens(post).includes(topicSlug)).length;
}

export function getTopicCards(posts: BlogPost[], options?: { includeEmpty?: boolean }) {
  const cards = topicDefinitions.map((topic) => ({
    ...topic,
    count: countPostsForTopic(posts, topic.slug)
  }));

  if (options?.includeEmpty) {
    return cards;
  }

  return cards.filter((topic) => topic.count > 0);
}

function normalizeTag(value: string) {
  return value.trim().toLowerCase();
}
