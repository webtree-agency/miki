import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz | Amzi Legacy Football Training',
  description: 'Datenschutzrichtlinien von Amzi Legacy Football Training.',
  alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/datenschutz' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Datenschutz | Amzi Legacy Football Training',
    description: 'Erfahren Sie mehr über die Datenschutzrichtlinien von Amzi Legacy Football Training.',
    url: 'https://www.amzilegacyfootballtraining.ch/datenschutz',
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

export default function DatenschutzPage() {
  return (
    <section id="services" className="s-services">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Rechtliches</h3>
          <h1 className="display-2">Datenschutz</h1>
          <div className="agb-content text-left">
            <i>
              Die folgende Datenschutzerklärung erläutert, wie Amzi Legacy Football Training als
              Verantwortlicher für die Verarbeitung personenbezogener Daten Informationen über Sie
              als meinen Kunden erhebt, verwendet und schützt. Ich verpflichte mich dazu, Ihre
              Privatsphäre zu schützen und Ihre personenbezogenen Daten gemäss den geltenden
              Datenschutzgesetzen zu behandeln.
            </i>

            <h3>Erhebung und Verarbeitung von personenbezogenen Daten</h3>
            <p>
              Ich erhebe und verarbeite personenbezogene Daten, die Sie mir zur Verfügung stellen,
              wenn Sie meine Dienstleistungen nutzen, Produkte kaufen oder mit mir interagieren.
              Diese Daten können Ihren Namen, Ihre Kontaktdaten wie Adresse, Telefonnummer und
              E-Mail-Adresse sowie Zahlungsinformationen umfassen.
            </p>

            <h3>Zweck der Datenverarbeitung</h3>
            <p>Ich verwende Ihre personenbezogenen Daten für folgende Zwecke:</p>
            <ul>
              <li>Zur Erfüllung und Abwicklung von Verträgen, die Sie mit mir abschliessen.</li>
              <li>Zur Kommunikation mit Ihnen bezüglich Ihrer Anfragen.</li>
              <li>
                Zur Einhaltung gesetzlicher Verpflichtungen, wie z.B. Steuer- und
                Buchführungsvorschriften.
              </li>
            </ul>

            <h3>Rechtsgrundlage der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf der Grundlage einer oder
              mehrerer der folgenden Rechtsgrundlagen:
            </p>
            <ul>
              <li>Erfüllung eines Vertrags oder Durchführung vorvertraglicher Massnahmen.</li>
              <li>Erfüllung rechtlicher Verpflichtungen.</li>
              <li>Ihre Einwilligung, sofern erforderlich.</li>
            </ul>

            <h3>Weitergabe von Daten an Dritte</h3>
            <p>
              Ich gebe Ihre personenbezogenen Daten nur an Dritte weiter, wenn dies zur Erfüllung
              der oben genannten Zwecke erforderlich ist oder wenn ich gesetzlich dazu verpflichtet
              bin.
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Ich speichere Ihre personenbezogenen Daten nur solange, wie es für die oben genannten
              Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist. Nach Ablauf der
              jeweiligen Aufbewahrungsfristen werden Ihre Daten gelöscht oder anonymisiert.
            </p>

            <h3>Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft über die Verarbeitung Ihrer personenbezogenen Daten,
              auf Berichtigung unrichtiger Daten, auf Löschung Ihrer Daten, auf Einschränkung der
              Verarbeitung sowie auf Datenübertragbarkeit. Darüber hinaus können Sie der
              Verarbeitung Ihrer Daten widersprechen, sofern die Verarbeitung auf Ihrer Einwilligung
              beruht.
            </p>

            <h3>Änderungen dieser Datenschutzerklärung</h3>
            <p>
              Ich behalte mir das Recht vor, diese Datenschutzerklärung jederzeit zu ändern.
              Änderungen werden auf meiner Website veröffentlicht. Bitte überprüfen Sie regelmässig
              meine Datenschutzerklärung, um über etwaige Änderungen informiert zu bleiben.
            </p>

            <h3>Datennutzung für Marketingzwecke</h3>
            <p>
              Ich erfasse personenbezogene Daten, um Ihnen Informationen über meine Produkte,
              Dienstleistungen, Angebote und Veranstaltungen zukommen zu lassen. Diese Daten
              ermöglichen es mir, Ihnen massgeschneiderte Werbematerialien zuzusenden,
              personalisierte Werbung zu schalten und Kundendaten zu analysieren sowie
              Marktforschung durchzuführen.
            </p>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt gemäss dem Schweizer Datenschutzgesetz auf der
              Grundlage Ihrer Einwilligung oder meines berechtigten Interesses. Ich gebe Ihre Daten
              nur mit Ihrer Zustimmung oder zur Erreichung meiner Marketingziele an Dritte wie
              Werbepartner oder Marketingagenturen weiter.
            </p>
            <p>
              Ihre Daten werden nur so lange gespeichert, wie es für die genannten Zwecke
              erforderlich ist oder bis Sie Ihre Einwilligung widerrufen. Gemäss dem Schweizer
              Datenschutzgesetz haben Sie das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung und Widerspruch.
            </p>

            <h3>Datensicherheit</h3>
            <p>
              Ich ergreife angemessene technische und organisatorische Massnahmen, um Ihre Daten vor
              unbefugtem Zugriff, Verlust oder Zerstörung zu schützen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Ich verwende nur eigene oder lizenzierte Inhalte (Texte, Bilder, Videos). Bei fremden
              Inhalten gebe ich stets die Quelle und den Urheber an.
            </p>

            <h3>Haftungsausschluss</h3>
            <p>
              Ich schliesse die Haftung für externe Links und für die Aktualität, Korrektheit und
              Vollständigkeit der bereitgestellten Informationen aus.
            </p>

            <h3>Barrierefreiheit</h3>
            <p>
              Ich bemühe mich, die Webseite gemäss den gesetzlichen Vorgaben möglichst barrierefrei
              zu gestalten, um den Zugang für alle Nutzer, einschliesslich Menschen mit
              Behinderungen, zu gewährleisten.
            </p>

            <h3>Kontinuierliche Aktualisierung</h3>
            <p>
              Ich überprüfe regelmässig, ob die Webseite noch den aktuellen rechtlichen Anforderungen
              entspricht und passe sie bei rechtlichen Änderungen entsprechend an.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
