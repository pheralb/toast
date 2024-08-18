import { z, defineCollection } from 'astro:content';

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
});

export type Docs = z.infer<typeof docsSchema>;

const docsCollection = defineCollection({
  type: 'content',
  schema: docsSchema,
});

export const collections = {
  docs: docsCollection,
};
