import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: { read: () => true },
  fields: [
    { name: 'copyright', type: 'text', defaultValue: '© Amzi Legacy Football Training' },
    {
      name: 'legalLinks',
      type: 'array',
      defaultValue: [
        { label: 'Impressum', url: '/impressum' },
        { label: 'AGB', url: '/agb' },
        { label: 'Datenschutz', url: '/datenschutz' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
