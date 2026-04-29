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
        { name: 'subtitle', type: 'text', defaultValue: '#hardworkbeatstalent' },
        { name: 'title', type: 'text', defaultValue: 'ANGEBOT' },
      ],
    },
    {
      type: 'group',
      name: 'sectionHeader',
      label: 'Sektions-Header',
      fields: [
        { name: 'subhead', type: 'text', defaultValue: 'Angebote' },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Meine Premium-Trainingsangebote',
        },
      ],
    },
    {
      name: 'angebote',
      type: 'array',
      label: 'Angebot-Karten',
      defaultValue: [
        {
          titel: 'Fussballcamp 27. April - 1. Mai 2026',
          beschreibung:
            'Frohberg in Stäfa. Montag bis Freitag 09:00 bis 12:00 Uhr. Limitierte Anzahl - 16 Spieler pro Gruppe.',
          preis: '180 CHF',
          preisHinweis: 'pro Kind / 5 Tage',
          ausgebuchtLabel: 'Ausgebucht',
          features: [
            { text: 'Kids 1: 6-9 Jahre, 09:00 - 10:00' },
            { text: 'Kids 2: 10-13 Jahre, 10:00 - 11:00' },
            { text: 'Kids 3 / Mädchen: 10-13 Jahre, 11:00 - 12:00 (ausgebucht)' },
            { text: 'Trikotfarbe Rot & Gold' },
          ],
          ctaLabel: 'Jetzt buchen',
          ctaUrl: '/buchen?product=fussballcamp',
          ctaDeaktiviert: true,
        },
        {
          titel: 'Hallen-Training',
          beschreibung:
            'Sporthalle Uerikon / Moritzberg. Dauer 60 Minuten. Limitierte Anzahl und nur samstags von 8:00 bis 12:00 Uhr.',
          preis: 'ab 40 CHF',
          preisHinweis: 'pro Person / Session',
          ausgebuchtLabel: 'Ausgebucht bis 31.05.2026',
          features: [
            { text: 'Einzeltraining: einmalig 120.- / 6er 690.- / 10er 1100.- / 15er 1590.-' },
            { text: 'Training zu zweit: einmalig 60.- / 6er 345.- / 10er 550.- / 15er 795.-' },
            { text: 'Training zu dritt: einmalig 40.- / 6er 230.- / 10er 365.- / 15er 530.-' },
            { text: '1x kostenloses Trikot für jedes Abo (Rot & Gold)' },
          ],
          ctaLabel: 'Jetzt buchen',
          ctaUrl: '/buchen?product=hallentraining',
          ctaDeaktiviert: true,
        },
        {
          titel: 'Rasen-Training',
          beschreibung:
            'Stäfa, Frohberg. Dauer 60 Minuten. Limitierte Anzahl und nur mittwochs von 14:00 bis 17:30 Uhr.',
          preis: 'ab 40 CHF',
          preisHinweis: 'pro Person / Session',
          ausgebuchtLabel: 'Ausgebucht bis 31.05.2026',
          features: [
            { text: 'Einzeltraining: einmalig 120.- / 6er 690.- / 10er 1100.- / 15er 1590.-' },
            { text: 'Training zu zweit: einmalig 60.- / 6er 345.- / 10er 550.- / 15er 795.-' },
            { text: 'Training zu dritt: einmalig 40.- / 6er 230.- / 10er 365.- / 15er 530.-' },
            { text: '1x kostenloses Trikot für jedes Abo (Rot & Gold)' },
          ],
          ctaLabel: 'Jetzt buchen',
          ctaUrl: '/buchen?product=rasen',
          ctaDeaktiviert: true,
        },
        {
          titel: 'Indoor-Fussball',
          beschreibung:
            'Padelwerk Bubikon. Dauer 60 Minuten. Jeden Sonntag von 11:00 bis 20:00 Uhr.',
          preis: 'ab 53 CHF',
          preisHinweis: 'pro Person / Session',
          ausgebuchtLabel: 'Ausgebucht bis 31.05.2026',
          features: [
            { text: 'Einzeltraining: 120 CHF / 6er Abo 690 CHF / 10er Abo 1100 CHF / 15er Abo 1590 CHF' },
            { text: 'Training zu zweit (pro Person): 60 / 345 / 550 / 795 CHF' },
            { text: '1x kostenloses Trikot (Rot & Gold) für jeden Aboabschluss' },
            { text: 'Getränke vor Ort (selbst zu bezahlen)' },
          ],
          ctaLabel: 'Jetzt buchen',
          ctaUrl: '/buchen?product=indoor',
          ctaDeaktiviert: true,
        },
        {
          titel: 'Geburtstag-Special',
          beschreibung:
            'Halle Uerikon, Kunstrasen Stäfa, Indoor Kunstrasen Bubikon. Terminvereinbarung auf Anfrage.',
          preis: 'CHF 25.-',
          preisHinweis: 'pro Kind (mind. 5 Kinder, 60 Minuten)',
          ausgebuchtLabel: '',
          features: [
            { text: 'Das Geburtstagskind nimmt kostenlos teil!' },
            { text: '1x kostenloses Trikot für das Geburtstagskind' },
            { text: 'Mindestens 5 Kinder, Dauer 60 Minuten' },
          ],
          ctaLabel: 'Jetzt buchen',
          ctaUrl: '/buchen?product=geburtstag',
          ctaDeaktiviert: false,
        },
      ],
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
        {
          name: 'title',
          type: 'text',
          defaultValue:
            'Angebot & Preise – Fussballtraining Stäfa, Uerikon, Bubikon | Amzi Legacy',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Hallen-, Rasen-, Kombi- und Camp-Training in Stäfa, Uerikon und Bubikon. Einzel- und Gruppentrainings für Kinder, Jugendliche und Erwachsene. Inkl. Geburtstags-Special.',
        },
      ],
    },
  ],
}
