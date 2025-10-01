import { defineCollection, z } from "astro:content";

const library = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(["Article", "Press", "Talk", "Report", "Podcast"]),
    source: z.string().optional(),
    link: z.string().url().optional(),
    highlight: z.boolean().default(false),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  library,
};
