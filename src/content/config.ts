import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().max(200),
      live: z.string().url().optional(),
      github: z.string().url().optional(),
      isFeatured: z.boolean().optional(),
      images: z.array(z.string()).optional()
    })
  })
}
