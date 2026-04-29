import Script from 'next/script'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import BuchenForm from './BuchenForm'

type AngebotOption = { wert: string; label: string; deaktiviert?: boolean }
type GruppenOption = { slotId: string; name: string; zeit?: string | null }

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const buchen = await payload.findGlobal({ slug: 'buchen-page' })
  return {
    title:
      buchen?.seo?.title ||
      'Training buchen – Hallen, Rasen, Camp | Amzi Legacy Football Training',
    description:
      buchen?.seo?.description ||
      'Buche jetzt dein Fussballtraining bei Amzi Legacy: Hallen-, Rasen-, Kombi-, Camp-Training oder Geburtstags-Special in Stäfa, Uerikon und Bubikon.',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/buchen' },
  }
}

export default async function BuchenPage() {
  const payload = await getPayload({ config })
  const buchen = await payload.findGlobal({ slug: 'buchen-page' })
  const fussballcamp = await payload.findGlobal({ slug: 'fussballcamp-page' })

  const heroSubtitle = buchen?.hero?.subtitle ?? '#startyourprocess'
  const heroTitle = buchen?.hero?.title ?? 'BUCHEN'
  const intro = buchen?.hero?.intro ?? 'Entscheide dich für ein Angebot!'

  const angeboteOptions: AngebotOption[] =
    (buchen?.angeboteOptions as AngebotOption[] | undefined)?.filter(
      (o) => o && o.wert && o.label,
    ) ?? []

  const gruppen: GruppenOption[] =
    (fussballcamp?.gruppen as GruppenOption[] | undefined)?.filter((g) => g && g.slotId && g.name) ??
    []

  const campAusgebucht = Boolean(fussballcamp?.ausgebucht?.campAusgebucht)

  return (
    <>
      <section
        id="home"
        className="s-home target-section"
        data-parallax="scroll"
        data-image-src="/images/footballpitch-cover-laptop.webp"
        data-position-y="center"
      >
        <div className="overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>{heroSubtitle}</h3>
            <h1>{heroTitle}</h1>
          </div>
          <div className="home-content__scroll">
            <a href="#contact" className="scroll-link smoothscroll">
              <span>Weiter</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>
        <ul className="home-social">
          <li>
            <a
              href="https://www.instagram.com/amzifootballtraining/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@amzifootballtraining"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-tiktok" aria-hidden="true" />
              <span>TikTok</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+41789176436" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              <span>Whatsapp</span>
            </a>
          </li>
        </ul>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="s-contact">
        <div className="buchen__line" />
        <div
          className="row section-header wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-aos="fade-up"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Buchen</h3>
            <h1 className="display-2 display-2--light">{intro}</h1>
          </div>
        </div>
        <div
          className="row contact-content wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-aos="fade-up"
        >
          <div className="contact-primary">
            <BuchenForm
              angeboteOptions={angeboteOptions}
              gruppen={gruppen.map((g) => ({
                slotId: g.slotId,
                name: g.name,
                zeit: g.zeit ?? undefined,
              }))}
              campAusgebucht={campAusgebucht}
            />
          </div>
          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Kontakt Info</h3>
              <div className="cinfo">
                <h5>
                  <i className="fas fa-map-marker-alt" /> Trainingsmöglichkeiten
                </h5>
                <p>
                  Stäfa (Rasen-Training, Fussballcamp)
                  <br />
                  Moritzberg, Uerikon (Hallen-Training)
                  <br />
                  Padelwerk Bubikon (Indoor-Fussball)
                </p>
              </div>
              <div className="cinfo">
                <h5>
                  <i className="fas fa-envelope" /> E-Mail
                </h5>
                <p>
                  info@amzilegacyfootballtraining.ch
                  <br />
                </p>
              </div>
              <div className="cinfo">
                <h5>
                  <i className="fas fa-phone" /> Telefon
                </h5>
                <p>+41 78 917 64 36</p>
              </div>
              <ul className="contact-social">
                <li>
                  <a
                    href="https://www.instagram.com/amzifootballtraining/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@amzifootballtraining"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-tiktok" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+41789176436" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Breadcrumb */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.amzilegacyfootballtraining.ch/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Buchen',
                item: 'https://www.amzilegacyfootballtraining.ch/buchen',
              },
            ],
          }),
        }}
      />

      {/* Buchungs-Scripts */}
      <Script src="/js/slot-availability.js" strategy="afterInteractive" />
      <Script src="/js/fussballcamp-booking.js" strategy="afterInteractive" />
    </>
  )
}
