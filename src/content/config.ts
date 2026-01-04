import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		date: z.coerce.date(),
		author: z.string().optional(),
	}),
});

export const collections = { blog };
