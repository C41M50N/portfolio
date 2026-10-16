import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().max(200),
    thumbnailImage: z.string(),
    techstack: z.array(z.string()),
    live: z.url().optional(),
    github: z.url().optional(),
    featured: z.boolean().default(false),
    hidden: z.boolean().default(false),
    priority: z.number().int().default(0),
    documents: z.array(z.object({
      title: z.string(),
      entry: reference("projectDocuments"),
      hidden: z.boolean().default(false),
    })),
  })
})

const projectDocuments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/project-documents" }),
});

export const collections = { projects, projectDocuments };
