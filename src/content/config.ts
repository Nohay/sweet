// 1. Importer les utilitaires de `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Définir une collection pour le journal d'aventure
const journalCollection = defineCollection({
 type: 'content', // 'content' pour les fichiers .md ou .mdx
 schema: z.object({
   title: z.string(),
   author: z.string(),
   publishDate: z.date(),
   image: z.object({
     src: z.string(),
     alt: z.string(),
   }).optional(),
 }),
});

// 3. Définir une collection pour les logs de construction
const logsCollection = defineCollection({
 type: 'content',
 schema: z.object({
   title: z.string(),
   publishDate: z.date(),
 }),
});

// 4. Exporter les collections pour les enregistrer
export const collections = {
 'journal': journalCollection,
 'logs': logsCollection,
};
