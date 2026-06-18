import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    summary: z.string(),
    status: z.enum(['production', 'poc', 'research', 'archived']),
    role: z.string(),
    dateStarted: z.coerce.date(),
    dateUpdated: z.coerce.date(),
    technologies: z.array(z.string()),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    relatedArticles: z.array(z.string()).default([]),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    executiveSummary: z.string(),
    keyTakeaways: z.array(z.string()),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
    relatedSlugs: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  projects,
  writing,
};
