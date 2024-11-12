import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().max(200),
      live: z.string().url().optional(),
      github: z.string().url().optional(),
      isFeatured: z.boolean().default(false),
      images: z.array(z.string()).optional(),
      thumbnailImage: z.string(),
      techstack: z.array(z.string()),
      hidden: z.boolean().default(false),
      priority: z.number().int().default(0),
    })
  })
}
