import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
        defineField({
            name: 'games',
            title: 'Games Image',
            type: 'image',
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        }),
    ],
})
