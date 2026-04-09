import { defineCollection, z } from 'astro:content';

const agency = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  agency
};
