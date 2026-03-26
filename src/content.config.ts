import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '*.json',
  }),
  schema: z.object({
    name: z.object({
      en: z.string(),
      es: z.string(),
    }),
    description: z.object({
      en: z.string(),
      es: z.string(),
    }),
    tech: z.array(z.string()),
    imageProjectLink: z.string().min(1),
    projectLink: z.string().min(1),
    demoLink: z.string(),
    featured: z.boolean(),
  }),
});

export const collections = { projects };
