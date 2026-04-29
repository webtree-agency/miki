import type { GlobalConfig } from 'payload'

export const AngebotPage: GlobalConfig = {
  slug: 'angebot-page',
  label: 'Seite: Angebot / Preise',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        { name: 'subtitle', type: 'text' },
        { name: 'title', type: 'text', defaultValue: 'Angebot' },
      ],
    },
    {
      name: 'angebote',
      type: 'array',
      label: 'Angebot-Karten',
      fields: [
        { name: 'titel', type: 'text', required: true },
        { name: 'beschreibung', type: 'textarea' },
        { name: 'preis', type: 'text' },
        { name: 'preisHinweis', type: 'text' },
        { name: 'ausgebuchtLabel', type: 'text' },
        {
          name: 'features',
          type: 'array',
          fields: [{ name: 'text', type: 'text' }],
        },
        { name: 'ctaLabel', type: 'text', defaultValue: 'Jetzt buchen' },
        { name: 'ctaUrl', type: 'text', defaultValue: '/buchen' },
        { name: 'ctaDeaktiviert', type: 'checkbox', defaultValue: false },
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
