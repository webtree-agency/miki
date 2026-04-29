import type { GlobalConfig } from 'payload'

export const IndoorPage: GlobalConfig = {
  slug: 'indoor-page',
  label: 'Seite: Indoor-Fussball',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        { name: 'subtitle', type: 'text' },
        { name: 'title', type: 'text', defaultValue: 'Indoor-Fussball' },
      ],
    },
    {
      name: 'sections',
      type: 'array',
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
