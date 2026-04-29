import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header / Navigation',
  access: { read: () => true },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation',
      defaultValue: [
        { label: 'Home', url: '/' },
        { label: 'Fussballcamp', url: '/fussballcamp' },
        { label: 'Indoor-Fussball', url: '/indoor-fussball', badge: 'NEU' },
        { label: 'Angebot / Preise', url: '/angebot' },
        { label: 'Buchen', url: '/buchen' },
        { label: 'Meine Geschichte', url: '/about' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'badge', type: 'text' },
      ],
    },
  ],
}
