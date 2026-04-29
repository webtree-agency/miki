import type { GlobalConfig } from 'payload'

export const BuchenPage: GlobalConfig = {
  slug: 'buchen-page',
  label: 'Seite: Buchen',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        { name: 'subtitle', type: 'text' },
        { name: 'title', type: 'text', defaultValue: 'Buchen' },
        { name: 'intro', type: 'textarea' },
      ],
    },
    {
      name: 'angeboteOptions',
      type: 'array',
      label: 'Angebot-Dropdown-Optionen',
      defaultValue: [
        { wert: 'Hallen-Training', label: 'Hallen-Training' },
        { wert: 'Rasen-Training', label: 'Rasen-Training' },
        { wert: 'Talent-Camp', label: 'Fussballcamp / Talent-Camp' },
        { wert: 'Indoor-Fussball', label: 'Indoor-Fussball' },
        { wert: 'Geburtstag-Special', label: 'Geburtstag-Special' },
      ],
      fields: [
        { name: 'wert', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
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
