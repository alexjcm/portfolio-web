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
    imageProjectLink: z.string().min(1),
    projectLink: z.url(),
  }),
});

export const collections = { projects };
