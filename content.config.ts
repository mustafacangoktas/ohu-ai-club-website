// content/config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'duyurular/*.md',
            schema: z.object({
                title: z.string(),
                date: z.string(),
                description: z.string(),
                image: z.string().optional(),
                link: z.string(),
                category: z.enum(['blog', 'announcement', 'event', 'opportunity']),
            })
        })
    }
})
