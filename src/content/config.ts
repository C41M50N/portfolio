import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "data",
    schema: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string().max(200),
      thumbnailImage: z.string(),
      techstack: z.array(z.string()),
      live: z.string().url().optional(),
      github: z.string().url().optional(),
      featured: z.boolean().default(false),
      hidden: z.boolean().default(false),
      priority: z.number().int().default(0),
      documents: z.array(z.object({
        title: z.string(),
        path: z.string(),
        hidden: z.boolean().default(false),
      })),
    })
  })
}
