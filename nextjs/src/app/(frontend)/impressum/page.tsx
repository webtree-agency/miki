import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Amzi Legacy Football Training',
  description: 'Impressum und rechtliche Hinweise für Amzi Legacy Football Training.',
  alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/impressum' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Impressum | Amzi Legacy Football Training',
    description: 'Impressum und rechtliche Hinweise für Amzi Legacy Football Training.',
    url: 'https://www.amzilegacyfootballtraining.ch/impressum',
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

export default function ImpressumPage() {
  return (
    <section id="services" className="s-services">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Rechtliches</h3>
          <h1 className="display-2">Impressum</h1>
          <div className="agb-content text-left">
            <h3>Persönliches</h3>
            <p>
              Geschäftsinhaber/Trainer: Miralem Amzi
              <br />
              Amzi Legacy Football Training
              <br />
              Einzelunternehmen
              <br />
              Obere Mattstrasse 8, 8713 Uerikon
            </p>

            <h4>Kontakt</h4>
            <p>
              E-Mail:{' '}
              <a className="agb-link" href="mailto:info@amzilegacyfootballtraining.ch">
                info@amzilegacyfootballtraining.ch
              </a>
              <br />
              Telefon:{' '}
              <a className="agb-link" href="tel:+41789176436">
                +41 78 917 64 36
              </a>
            </p>

            <h3>Haftungsausschluss</h3>
            <p>
              Die vorliegende Mitteilung dient ausschliesslich Informationszwecken und stellt keine
              rechtliche Verpflichtung oder Zusicherung dar. Der Autor übernimmt keine Gewähr für
              die Richtigkeit, Aktualität, Vollständigkeit oder Zuverlässigkeit der bereitgestellten
              Informationen.
            </p>

            <h3>Haftungsbeschränkung</h3>
            <p>
              Der Autor haftet nicht für direkte oder indirekte Schäden materieller oder
              immaterieller Art, die durch die Nutzung oder Nichtnutzung der bereitgestellten
              Informationen oder durch die Nutzung fehlerhafter oder unvollständiger Informationen
              verursacht werden. Die Haftung für Vorsatz und grobe Fahrlässigkeit bleibt vorbehalten.
            </p>

            <h3>Angebote und Änderungen</h3>
            <p>
              Alle Angebote auf dieser Website sind unverbindlich und können jederzeit ohne
              Vorankündigung geändert, ergänzt oder gelöscht werden. Der Autor behält sich das Recht
              vor, Teile der Website oder das gesamte Angebot ohne gesonderte Ankündigung zu
              verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig
              einzustellen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Verweise und Links auf Websites Dritter liegen ausserhalb des Verantwortungsbereichs
              des Autors. Jegliche Haftung für solche Websites wird ausdrücklich abgelehnt. Der
              Zugriff und die Nutzung solcher Websites erfolgen auf eigene Gefahr des Nutzers oder
              der Nutzerin.
            </p>

            <h3>Urheberrechte</h3>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
              auf dieser Website gehören ausschliesslich Amzi Legacy Football Training oder den
              speziell genannten Rechtsinhabern. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Rechtsinhabers.
            </p>

            <h3>Standort</h3>
            <p>Uerikon, 20. Januar 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
