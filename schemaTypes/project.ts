import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend Development', value: 'Frontend Development' },
          { title: 'Visual Graphics', value: 'Visual Graphics' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainCover',
      title: 'Main Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'visualAssets',
      title: 'Visual Assets (Images, GIFs, & Videos)',
      type: 'array',
      of: [
        { 
          type: 'image',
          title: 'Image or GIF',
          options: { hotspot: true } 
        },
        {
          type: 'file',
          title: 'Short Video (MP4/WebM)',
          options: {
            accept: 'video/*'
          }
        }
      ],
      hidden: ({ document }) => document?.category !== 'Visual Graphics',
    }),

    defineField({
      name: 'link',
      title: 'Live Website URL',
      type: 'url',
      hidden: ({ document }) => document?.category !== 'Frontend Development',
    }),
    defineField({
      name: 'behanceLink',
      title: 'Behance Case Study URL',
      type: 'url',
      hidden: ({ document }) => document?.category !== 'Frontend Development',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})