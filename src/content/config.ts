import { z, defineCollection } from "astro:content";

export const collections = {
  blogs: defineCollection({
    schema: z.object({
      date: z.date(),
      title: z.string(),
      subtitle: z.string().max(50),
      tags: z.array(z.string()),
      isFeatured: z.boolean().optional()
    })
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().max(200),
      live: z.string().url().optional(),
      github: z.string().url().optional(),
      isFeatured: z.boolean().optional()
    })
  })
}
