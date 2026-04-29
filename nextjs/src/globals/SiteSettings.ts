import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Globale Einstellungen',
  access: { read: () => true },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'Amzi Legacy Football Training' },
    { name: 'tagline', type: 'text', defaultValue: '#ShowThemYourQuality' },
    {
      type: 'group',
      name: 'kontakt',
      fields: [
        { name: 'email', type: 'email', defaultValue: 'info@amzilegacyfootballtraining.ch' },
        { name: 'telefon', type: 'text', defaultValue: '+41 78 917 64 36' },
        { name: 'whatsappNumber', type: 'text', defaultValue: '+41789176436' },
        { name: 'adresse', type: 'textarea', defaultValue: 'Sportanlage Frohberg, Stäfa' },
      ],
    },
    {
      type: 'group',
      name: 'social',
      fields: [
        { name: 'instagram', type: 'text', defaultValue: 'https://www.instagram.com/amzifootballtraining/' },
        { name: 'tiktok', type: 'text', defaultValue: 'https://www.tiktok.com/@amzifootballtraining' },
      ],
    },
  ],
}
