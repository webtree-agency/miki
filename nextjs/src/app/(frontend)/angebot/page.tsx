import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

type Feature = { text?: string | null }
type AngebotItem = {
  titel?: string | null
  beschreibung?: string | null
  preis?: string | null
  preisHinweis?: string | null
  ausgebuchtLabel?: string | null
  features?: Feature[] | null
  ctaLabel?: string | null
  ctaUrl?: string | null
  ctaDeaktiviert?: boolean | null
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const angebot = await payload.findGlobal({ slug: 'angebot-page' })
  return {
    title:
      angebot?.seo?.title ||
      'Angebot & Preise – Fussballtraining Stäfa, Uerikon, Bubikon | Amzi Legacy',
    description:
      angebot?.seo?.description ||
      'Hallen-, Rasen-, Kombi- und Camp-Training in Stäfa, Uerikon und Bubikon. Einzel- und Gruppentrainings für Kinder, Jugendliche und Erwachsene. Inkl. Geburtstags-Special.',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/angebot' },
  }
}

export default async function AngebotPage() {
  const payload = await getPayload({ config })
  const angebot = await payload.findGlobal({ slug: 'angebot-page' })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const hero = angebot?.hero
  const sectionHeader = angebot?.sectionHeader
  const angebote = (angebot?.angebote as AngebotItem[]) ?? []

  const ig = settings?.social?.instagram
  const tt = settings?.social?.tiktok
  const wa = settings?.kontakt?.whatsappNumber
    ? `https://wa.me/${settings.kontakt.whatsappNumber.replace(/[^+\d]/g, '')}`
    : ''

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
            <h3>{hero?.subtitle ?? '#hardworkbeatstalent'}</h3>
            <h1>{hero?.title ?? 'ANGEBOT'}</h1>
          </div>
          <div className="home-content__scroll">
            <a href="#services" className="scroll-link smoothscroll">
              <span>Weiter</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>
        <ul className="home-social">
          {ig && (
            <li>
              <a href={ig} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
                <span>Instagram</span>
              </a>
            </li>
          )}
          {tt && (
            <li>
              <a href={tt} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-tiktok" aria-hidden="true" />
                <span>TikTok</span>
              </a>
            </li>
          )}
          {wa && (
            <li>
              <a href={wa} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                <span>Whatsapp</span>
              </a>
            </li>
          )}
        </ul>
      </section>

      <section id="services" className="s-services angebot background-section">
        <div className="overlay" />
        <div className="works__line" />
        <div className="intro-wrap">
          <div className="background-service-div">
            <div
              className="row section-header has-bottom-sep wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="col-full service-header">
                <h3 className="subhead">{sectionHeader?.subhead ?? 'Angebote'}</h3>
                <h1 className="display-2">
                  {sectionHeader?.title ?? 'Meine Premium-Trainingsangebote'}
                </h1>
              </div>
            </div>

            <div className="pricing-container pricing-container-background">
              <div
                className="pricing-row wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                {angebote.map((item, i) => {
                  const features = (item?.features ?? []).filter(
                    (f): f is Feature => !!f && !!f.text,
                  )
                  const isDisabled = !!item?.ctaDeaktiviert
                  return (
                    <div key={i} className="pricing-col">
                      <div className="wrap-price">
                        <div>
                          <h3 className="service-title">{item?.titel}</h3>
                          {isDisabled && item?.ausgebuchtLabel ? (
                            <div className="sold-out-badge">
                              <span>{item.ausgebuchtLabel}</span>
                            </div>
                          ) : null}
                          {item?.beschreibung ? (
                            <h5 className="location-service">
                              <i className="fas fa-map-marker-alt" /> {item.beschreibung}
                            </h5>
                          ) : null}
                          {item?.preis ? (
                            <h5 className="service-pricing">
                              <i className="fa-solid fa-tag" /> {item.preis}
                              {item.preisHinweis ? ` — ${item.preisHinweis}` : ''}
                            </h5>
                          ) : null}
                          {features.length > 0 ? (
                            <ul className="pricing-features">
                              {features.map((f, j) => (
                                <li key={j}>
                                  <i className="fa-solid fa-futbol" /> {f.text}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {isDisabled ? (
                            <button
                              className="btn btn--gold-full schedule-button disabled"
                              disabled
                            >
                              {item?.ausgebuchtLabel || 'Ausgebucht'}
                            </button>
                          ) : (
                            <Link
                              href={item?.ctaUrl || '/buchen'}
                              className="btn btn--gold-full schedule-button"
                            >
                              {item?.ctaLabel || 'Jetzt buchen'}
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="angebot-jsonld" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Fussballtraining",
            "provider": {
              "@type": "SportsActivityLocation",
              "name": "Amzi Legacy Football Training",
              "url": "https://www.amzilegacyfootballtraining.ch/",
              "telephone": "+41789176436",
              "email": "info@amzilegacyfootballtraining.ch",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stäfa",
                "addressRegion": "ZH",
                "postalCode": "8712",
                "addressCountry": "CH"
              }
            },
            "areaServed": [
              {"@type": "City", "name": "Stäfa"},
              {"@type": "City", "name": "Uerikon"},
              {"@type": "City", "name": "Bubikon"},
              {"@type": "City", "name": "Hombrechtikon"}
            ],
            "url": "https://www.amzilegacyfootballtraining.ch/angebot",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Trainingsangebote",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hallen-Training"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rasen-Training"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kombi-Training"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Indoor-Fussball Bubikon"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fussballcamp"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Geburtstags-Special"}}
              ]
            }
          }
        `}
      </Script>
      <Script id="angebot-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amzilegacyfootballtraining.ch/"},
              {"@type": "ListItem", "position": 2, "name": "Angebot & Preise", "item": "https://www.amzilegacyfootballtraining.ch/angebot"}
            ]
          }
        `}
      </Script>
    </>
  )
}
