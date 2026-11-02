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

  if (tokens.has('architecture')) {
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

export function getTagLabel(tag: string) {
  const topic = topicDefinitions.find((definition) => definition.slug === normalizeTag(tag));

  if (topic) {
    return topic.label;
  }

  const words = normalizeTag(tag).split('-');
  return [words[0].charAt(0).toUpperCase() + words[0].slice(1), ...words.slice(1)].join(' ');
}

function normalizeTag(value: string) {
  return value.trim().toLowerCase();
}
