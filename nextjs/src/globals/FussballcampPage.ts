import type { GlobalConfig } from 'payload'

export const FussballcampPage: GlobalConfig = {
  slug: 'fussballcamp-page',
  label: 'Seite: Fussballcamp',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        { name: 'subtitle', type: 'text' },
        { name: 'title', type: 'text', defaultValue: 'Fussballcamp' },
        { name: 'datumsBereich', type: 'text', defaultValue: 'Montag, 27. April - Freitag, 1. Mai 2026' },
        { name: 'ort', type: 'text', defaultValue: 'Sportanlage Frohberg, Stäfa' },
      ],
    },
    {
      type: 'group',
      name: 'ausgebucht',
      label: 'Ausgebucht-Status',
      fields: [
        { name: 'campAusgebucht', type: 'checkbox', defaultValue: true, label: 'Gesamtes Camp als ausgebucht markieren' },
        { name: 'ausgebuchtBis', type: 'text', defaultValue: '31.05.2026', label: 'Ausgebucht bis (Anzeigetext)' },
        { name: 'ausgebuchtLabel', type: 'text', defaultValue: 'Ausgebucht' },
      ],
    },
    {
      name: 'trainingsprogramm',
      type: 'array',
      label: 'Trainingsprogramm pro Tag',
      defaultValue: [
        { tag: 'Montag', inhalt: 'Technik, Torabschluss, Spielform' },
        { tag: 'Dienstag', inhalt: 'Technik, Passform, Abschlussspiel' },
        { tag: 'Mittwoch', inhalt: 'Technik, Zweikampfverhalten DEF/OFF, Abschlussspiel' },
        { tag: 'Donnerstag', inhalt: 'Technik, Zweikampfverhalten DEF/OFF, Abschlussspiel' },
        { tag: 'Freitag', inhalt: 'Athletik, Abschlussspiel, Preisverleihung' },
      ],
      fields: [
        { name: 'tag', type: 'text', required: true },
        { name: 'inhalt', type: 'text', required: true },
      ],
    },
    {
      name: 'gruppen',
      type: 'array',
      label: 'Gruppen / Slots (Anzeige)',
      admin: { description: 'Slots werden zur Live-Verfügbarkeit aus dem Google Sheet ergänzt.' },
      fields: [
        { name: 'slotId', type: 'text', required: true, admin: { description: 'Muss exakt mit slot_id im Google Sheet übereinstimmen.' } },
        { name: 'name', type: 'text', required: true },
        { name: 'altersgruppe', type: 'text' },
        { name: 'zeit', type: 'text' },
        { name: 'kapazitaet', type: 'number', defaultValue: 16 },
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
