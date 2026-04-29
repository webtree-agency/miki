import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Amzi Legacy Football Training',
  description:
    'Allgemeine Geschäftsbedingungen (AGB) von Amzi Legacy Football Training – rechtliche Bedingungen für Trainings, Buchungen und Camp-Teilnahme.',
  alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/agb' },
  openGraph: {
    title: 'AGB | Amzi Legacy Football Training',
    description: 'Allgemeine Geschäftsbedingungen von Amzi Legacy Football Training.',
    url: 'https://www.amzilegacyfootballtraining.ch/agb',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Amzi Legacy Football Training',
    images: [
      {
        url: 'https://www.amzilegacyfootballtraining.ch/images/miki/google-logo-og.png',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
}

export default function AgbPage() {
  return (
    <section id="services" className="s-services">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Rechtliches</h3>
          <h1 className="display-2">Allgemeine Geschäftsbedingungen</h1>
          <div className="agb-content text-left">
            <h3>1. Geltungsbereich</h3>
            <p>
              Die vorliegenden Allgemeinen Geschäftsbedingungen (AGB) bilden die rechtliche
              Grundlage für sämtliche Leistungen von Amzi Legacy Football Training und regeln
              exklusiv sämtliche Geschäftsverhältnisse zwischen Amzi Legacy Football Training und
              seinen Kunden.
            </p>

            <h3>2. Preise</h3>
            <p>
              Die Preisangaben erfolgen in Schweizer Franken (CHF) und entsprechen den zum Zeitpunkt
              der Reservierung auf der schweizerischen Internetseite von Amzi Legacy Football
              Training veröffentlichten Tarifen. Sämtliche Preise verstehen sich inklusive der
              gesetzlichen Mehrwertsteuer, soweit nicht anders angegeben.
            </p>

            <h3>3. Zahlungsarten</h3>
            <p>
              Für die Begleichung der Honorare stehen verschiedene Zahlungsoptionen zur Verfügung,
              einschliesslich Vorauskasse, TWINT und Rechnung. Amzi Legacy Football Training behält
              sich das Recht vor, im Einzelfall bestimmte Zahlungsmethoden auszuschliessen. Bei
              Zahlungen per Rechnung ist der Betrag innerhalb von 30 Tagen ab Rechnungsdatum fällig.
              Einmalige Trainings sind innerhalb von 10 Tagen ab Rechnungsdatum zahlbar.
            </p>
            <p>
              Im Voraus bezahlte Leistungen sind in der Regel 24 Monate ab dem Zeitpunkt der Zahlung
              gültig. Für 6er- und 10er-Abonnements beträgt die Gültigkeitsdauer jedoch 12 Monate ab
              dem Zeitpunkt der Zahlung. Nach Ablauf dieser Fristen verfallen nicht genutzte
              Leistungen ohne Anspruch auf Rückerstattung. Es obliegt dem Kunden, die Leistungen
              innerhalb des jeweiligen Gültigkeitszeitraums in Anspruch zu nehmen.
            </p>

            <h3>4. Haftung</h3>
            <p>
              Die Nutzung der Dienstleistungen, Anlagen und Einrichtungen von Amzi Legacy Football
              Training erfolgt auf eigenes Risiko der Kunden. Jegliche Haftung für Schäden infolge
              von Unfällen, Verletzungen oder Krankheiten seitens Amzi Legacy Football Training oder
              seines Personals wird hiermit, soweit gesetzlich zulässig, ausdrücklich ausgeschlossen.
              Die Teilnahme obliegt der Eigenverantwortung der Kunden. Es wird empfohlen, eine
              angemessene Versicherung abzuschliessen. Weder Amzi Legacy Football Training noch sein
              Personal übernehmen Haftung für den Verlust von Wertgegenständen, Geld, Kleidung oder
              ähnlichen Gegenständen. Diese Haftungsbeschränkung gilt nicht für Schäden, die durch
              grobe Fahrlässigkeit oder Vorsatz von Amzi Legacy Football Training oder seinem
              Personal verursacht wurden.
            </p>

            <h3>5. Gültigkeit von Abonnements</h3>
            <p>
              Abonnements mit sechs Einheiten haben eine Gültigkeit von jeweils 12 Monaten, während
              Abonnements mit zehn und fünfzehn Einheiten 24 Monate gültig sind. Nicht genutzte
              Einheiten verfallen innerhalb dieser Fristen und sind nicht übertragbar. Eine
              Rückerstattung oder Verlängerung der Gültigkeitsdauer ist ausgeschlossen. Eine
              Übertragung der Abonnements auf andere Personen ist ebenfalls nicht möglich.
            </p>

            <h3>6. Datenschutz</h3>
            <p>
              Der Schutz der Privatsphäre der Kunden ist für Amzi Legacy Football Training von
              höchster Bedeutung. Amzi Legacy Football Training hält sich strikt an die gesetzlichen
              Bestimmungen zum Datenschutz gemäss dem schweizerischen Datenschutzgesetz (DSG).
              Weitere Informationen sind in der Datenschutzerklärung auf der Website von Amzi Legacy
              Football Training zu finden. Kunden haben das Recht, Auskunft über ihre gespeicherten
              personenbezogenen Daten zu erhalten, unrichtige Daten korrigieren zu lassen oder die
              Löschung ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
