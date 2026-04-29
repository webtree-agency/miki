import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'Seite: Meine Geschichte',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        { name: 'subtitle', type: 'text' },
        { name: 'title', type: 'text', defaultValue: 'Meine Geschichte' },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Inhaltsabschnitte',
      fields: [
        { name: 'subhead', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'body', type: 'textarea' },
      ],
    },
    {
      type: 'group',
      name: 'seo',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
