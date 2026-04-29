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
        { name: 'subtitle', type: 'text', defaultValue: '#startyourprocess' },
        { name: 'title', type: 'text', defaultValue: 'BUCHEN' },
        { name: 'intro', type: 'textarea', defaultValue: 'Entscheide dich für ein Angebot!' },
      ],
    },
    {
      name: 'angeboteOptions',
      type: 'array',
      label: 'Angebot-Dropdown-Optionen',
      admin: {
        description:
          '"deaktiviert" = Option wird im Dropdown grau und nicht wählbar angezeigt (z.B. wenn ausgebucht).',
      },
      defaultValue: [
        { wert: 'Hallen-Training', label: 'Hallen-Training (ausgebucht bis 31.05.2026)', deaktiviert: true },
        { wert: 'Rasen-Training', label: 'Rasen-Training (ausgebucht bis 31.05.2026)', deaktiviert: true },
        { wert: 'Indoor-Fussball', label: 'Indoor-Fussball', deaktiviert: false },
        { wert: 'Talent-Camp', label: 'Fussballcamp (ausgebucht)', deaktiviert: true },
        { wert: 'Geburtstag-Special', label: 'Geburtstag-Special', deaktiviert: false },
      ],
      fields: [
        { name: 'wert', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'deaktiviert', type: 'checkbox', defaultValue: false },
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
