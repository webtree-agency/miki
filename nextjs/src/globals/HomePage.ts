import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Seite: Home',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      label: 'Hero',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: '#ShowThemYourQuality' },
        { name: 'title', type: 'text', defaultValue: 'BE THE GAME!' },
        { name: 'ctaPrimaryLabel', type: 'text', defaultValue: 'Fussballcamp' },
        { name: 'ctaPrimaryUrl', type: 'text', defaultValue: '/fussballcamp' },
        { name: 'ctaSecondaryLabel', type: 'text', defaultValue: 'Meine Geschichte' },
        { name: 'ctaSecondaryUrl', type: 'text', defaultValue: '/about' },
      ],
    },
    {
      type: 'group',
      name: 'mission',
      label: 'Mission-Sektion',
      fields: [
        { name: 'subhead', type: 'text', defaultValue: 'Mission' },
        { name: 'title', type: 'text', defaultValue: 'Champions formen' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Als erfahrener Fussballtrainer biete ich individuelle Trainings, welche dich auf dem Rasen und in der Halle zu Höchstleistungen bringen. Ich forme dich nicht nur sportlich, sondern auch mental zum Champion.',
        },
        {
          name: 'stats',
          type: 'array',
          defaultValue: [
            { value: '12', label: 'Jahre Spitzensport' },
            { value: '5', label: 'Jahre Trainer' },
            { value: '✓', label: 'UEFA C Diplom' },
          ],
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'services',
      label: 'Dienstleistungen',
      fields: [
        { name: 'subhead', type: 'text', defaultValue: 'Dienstleistungen' },
        { name: 'title', type: 'text', defaultValue: 'Trainingsangebote für deinen Erfolg im Fussball' },
        {
          name: 'items',
          type: 'array',
          defaultValue: [
            { title: 'Hallen-Training', description: 'Intensives Techniktraining auf engem Raum. Verbessert Ballkontrolle, Reaktionsschnelligkeit und Spielübersicht.' },
            { title: 'Rasen-Training', description: 'Spielnahes Training unter realen Bedingungen. Fördert Passgenauigkeit, Ausdauer und taktisches Verständnis.' },
            { title: 'Fussballcamp', description: 'Rasentraining in kleinen Gruppen – stärkt den Teamgeist, fördert die Technik und bringt Tempo ins Spiel.' },
            { title: 'Indoor-Fussball', description: 'Wetterunabhängiges Training im Padelwerk Bubikon. Jeden Sonntag Einzel- und Gruppentraining für alle Levels.', badge: 'NEU' },
            { title: 'Geburtstag-Special', description: 'Ein unvergessliches Fussballerlebnis mit Training, Spielen und Wettkämpfen. Perfekt für ein Geburtstagsfest.' },
          ],
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'badge', type: 'text' },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'testimonials',
      label: 'Rezensionen',
      fields: [
        { name: 'subhead', type: 'text', defaultValue: 'Rezensionen' },
        { name: 'title', type: 'text', defaultValue: 'Vertrauen durch Ergebnisse & Qualität' },
        {
          name: 'items',
          type: 'array',
          defaultValue: [
            { quote: 'Meine Kinder haben mit Amzi Legacy Football Training trainiert und ich könnte mit den Ergebnissen nicht zufriedener sein. Die persönliche Betreuung stellt sicher, dass jeder Spieler die Anleitung erhält, die er zum Wachsen benötigt.', author: 'Ralf B.' },
            { quote: 'Unser Sohn ist mega begeistert von den intensiven, individuellen und abwechslungsreichen Trainings bei Miralem. Er nimmt jedes Mal neue Inputs mit, um sich stetig zu verbessern.', author: 'Matthias R.' },
            { quote: 'Miki legt grossen Wert auf Technik und Geschwindigkeit. Meine Kinder haben sich im Nu stark verbessert. Torschuss besser geworden, Dribbling besser geworden, und dabei ist die Mentalität gewachsen.', author: 'Janne A.' },
            { quote: 'Seine Fähigkeit, meine Kinder zu motivieren, ist beeindruckend und trägt massgeblich zur positiven Atmosphäre während des Trainings bei. Dank seiner engagierten Herangehensweise habe ich deutliche Verbesserungen beobachtet.', author: 'Oliver K.' },
            { quote: 'Ein grosses Lob an Miki für seine hervorragende Arbeit mit den Jungs! Durch seine Fachkompetenz und Leidenschaft schafft er es, die Kinder nicht nur fussballerisch weiterzubringen, sondern auch ihr Selbstvertrauen zu stärken.', author: 'Baton S.' },
            { quote: 'Seit mein Sohn bei dir trainiert hat er viel Fortschritt gemacht - in Technik, Kondition, Selbstvertrauen und Spielintelligenz. Dein Training ist für jeden empfehlenswert, der im Fussball etwas erreichen möchte.', author: 'Miri R.' },
            { quote: 'Sehr gute Trainings - Würde ich nur empfehlen. Super Trainer.', author: 'Husein M.' },
            { quote: 'Top Training bei Miki! Kann ich wirklich sehr empfehlen! War stets sehr gut vorbereitet, motiviert und zuvorkommend - sehr professionell!', author: 'Sandro E.' },
          ],
          fields: [
            { name: 'quote', type: 'textarea', required: true },
            { name: 'author', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'seo',
      label: 'SEO',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Professionelles Fussballtraining für Deinen Erfolg! | Amzilegacyfootballtraining.ch' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
