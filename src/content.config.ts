import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()),
    type: z.enum(['article', 'guide']).default('article'),
    valueType: z.enum([
      'Conceptual guide',
      'Architectural guide',
      'Production checklist',
      'Postmortem',
      'Tutorial',
      'Reference implementation'
    ]).default('Conceptual guide'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    repoUrl: z.string().url().optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string()
        })
      )
      .optional()
  })
});

export const collections = { blog };
