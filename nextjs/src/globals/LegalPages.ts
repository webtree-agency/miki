import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const LegalPages: GlobalConfig = {
  slug: 'legal-pages',
  label: 'Rechtliche Seiten (AGB, Datenschutz, Impressum)',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'agb',
      label: 'AGB',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Allgemeine Geschäftsbedingungen' },
        { name: 'content', type: 'richText', editor: lexicalEditor() },
      ],
    },
    {
      type: 'group',
      name: 'datenschutz',
      label: 'Datenschutz',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Datenschutzerklärung' },
        { name: 'content', type: 'richText', editor: lexicalEditor() },
      ],
    },
    {
      type: 'group',
      name: 'impressum',
      label: 'Impressum',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Impressum' },
        { name: 'content', type: 'richText', editor: lexicalEditor() },
      ],
    },
  ],
}
