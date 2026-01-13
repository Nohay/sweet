import { defineCollection, z } from 'astro:content';

// Collection pour les articles du journal d'aventure
const journalCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()).optional(), // Ajout des balises (optionnel)
	}),
});

// Collection pour les logs de construction
const logsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	journal: journalCollection,
	logs: logsCollection,
};