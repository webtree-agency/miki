import type { GlobalConfig } from 'payload'

export const ErfolgPage: GlobalConfig = {
  slug: 'erfolg-page',
  label: 'Seite: Erfolg (Buchungsbestätigung)',
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', defaultValue: 'Vielen Dank für deine Buchung!' },
    { name: 'message', type: 'textarea' },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Zurück zur Startseite' },
    { name: 'ctaUrl', type: 'text', defaultValue: '/' },
  ],
}
