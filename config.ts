import { defineCollection, z } from "astro:content";

// Collection pour le Journal de bord de la campagne JDR
const journalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
});

// Collection pour les logs de développement et de réflexion
const logsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
});

// Collection pour le "Codex de la Substance" (apprentissage)
const codexCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    concept2D: z.string(),
    mecanique: z.string(),
    vision3D: z.string(),
    status: z.enum(["Acquis", "En cours", "À explorer"]),
  }),
});

const bujoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    period: z.string().optional(),
  }),
});

export const collections = {
  journal: journalCollection,
  logs: logsCollection,
  codex: codexCollection,
  bujo: bujoCollection,
};