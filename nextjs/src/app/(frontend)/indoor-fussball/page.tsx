import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const indoor = await payload.findGlobal({ slug: 'indoor-page' })
  return {
    title:
      indoor?.seo?.title ||
      'Indoor-Fussball Bubikon – Padelwerk, jeden Sonntag | Amzi Legacy',
    description:
      indoor?.seo?.description ||
      'Indoor-Fussball im Padelwerk Bubikon: Jeden Sonntag von 11:00 bis 20:00 Uhr. Einzel- und Gruppentraining auf modernem Kunstrasen. Jetzt buchen.',
    keywords:
      'Indoor-Fussball, Hallenfussball, Fussballtraining Indoor, Padelwerk Bubikon, Fussball Einzeltraining, Fussball Gruppentraining, Indoorfussball Bubikon, Fussballabo, Training jeden Sonntag',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/indoor-fussball' },
    openGraph: {
      title: 'Indoor-Fussball Bubikon – Padelwerk | Amzi Legacy Football Training',
      description:
        'Neues Indoor-Fussball Angebot im Padelwerk Bubikon! Jeden Sonntag von 11:00-20:00 Uhr. Einzeltraining und Gruppentraining. Jetzt buchen!',
      url: 'https://www.amzilegacyfootballtraining.ch/indoor-fussball',
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
    twitter: {
      card: 'summary_large_image',
      title: 'Indoor-Fussball Bubikon – Padelwerk',
      description: 'Jeden Sonntag 11:00 – 20:00 Uhr. Einzel- und Gruppentraining.',
      images: [
        'https://www.amzilegacyfootballtraining.ch/images/miki/google-logo-og.png',
      ],
    },
  }
}

export default async function IndoorFussballPage() {
  const payload = await getPayload({ config })
  const indoor = await payload.findGlobal({ slug: 'indoor-page' })
  const hero = indoor?.hero

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
            <h3>{hero?.subtitle ?? '#DOMINATETHEGAME'}</h3>
            <h1>{hero?.title ?? 'INDOOR-FUSSBALL'}</h1>
            <div className="home-content__buttons">
              <a href="#what" className="btn btn--white smoothscroll">
                Mehr erfahren
              </a>
              <Link
                href="/buchen?product=indoor-fussball"
                className="btn btn--gold-full schedule-button"
              >
                Jetzt buchen
              </Link>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#what" className="scroll-link smoothscroll">
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

      <section id="what" className="s-about talent-top-section talent-section">
        <div
          className="row section-header has-bottom-sep light-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Jeden Sonntag</h3>
            <h1 className="display-2 display-2--light">
              Wo Spiel zur Kunst wird – Indoor Fussball Halle in Bubikon
            </h1>
          </div>
        </div>

        <div
          className="talent-split-hero wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div
            className="split-image"
            style={{
              backgroundImage: "url('/images/indoor/indoor-training-1.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="split-content">
            <h2>Indoor-Fussball für alle Levels</h2>
            <ul className="talent-benefits">
              <li>
                <i className="fa fa-check-circle" /> Modernes Indoor-Zentrum im Padelwerk Bubikon
              </li>
              <li>
                <i className="fa fa-check-circle" /> Jeden Sonntag von 11:00 bis 20:00 Uhr
              </li>
              <li>
                <i className="fa fa-check-circle" /> Training bei jedem Wetter möglich
              </li>
              <li>
                <i className="fa fa-check-circle" /> Premium Trikot (Rot &amp; Gold) inklusive
              </li>
              <li>
                <i className="fa fa-check-circle" /> Getränke vor Ort verfügbar
              </li>
            </ul>
            <div className="talent-actions">
              <a href="#services" className="btn btn--stroke-inverted smoothscroll">
                Preise &amp; Zeiten
              </a>
            </div>
          </div>
        </div>

        <div
          className="talent-features-row wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-home" />
            </div>
            <h3>Wetterunabhängig</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-calendar-check" />
            </div>
            <h3>Jeden Sonntag</h3>
          </div>
        </div>

        <div
          className="talent-info-box wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.9s"
        >
          <div className="info-box-header">
            <i className="fa fa-info-circle" />
            <h3>Das Wichtigste auf einen Blick</h3>
          </div>
          <div className="info-box-content">
            <div className="info-item">
              <i className="fa fa-calendar-check" />
              <div>
                <h4>Wann &amp; Wo</h4>
                <p>Jeden Sonntag 11:00 - 20:00 Uhr · Padelwerk Bubikon</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-clock" />
              <div>
                <h4>Trainingsdauer</h4>
                <p>60 Minuten pro Einheit · Flexible Zeitslots</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-shirt" />
              <div>
                <h4>Inklusive</h4>
                <p>Premium Trikot (Rot &amp; Gold) für jeden Aboabschluss</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-map-marker-alt" />
              <div>
                <h4>Standort</h4>
                <p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Padelwerk+Bubikon,+Höslistrasse+14,+6808+Bubikon"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--primary-gold)', textDecoration: 'underline' }}
                  >
                    Padelwerk Bubikon - Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="impressions"
        className="s-about talent-section"
        style={{ background: 'var(--black)' }}
      >
        <div
          className="row section-header has-bottom-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--gold">Einblicke</h3>
            <h1 className="display-2" style={{ color: 'var(--white)' }}>
              Impressionen aus dem Padelwerk Bubikon
            </h1>
          </div>
        </div>

        <div
          className="row wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="col-full">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div id="indoor-splide" className="splide indoor-slider">
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <img
                        src="/images/indoor/indoor-training-2.webp"
                        alt="Indoor Training Padelwerk"
                      />
                    </li>
                    <li className="splide__slide">
                      <img
                        src="/images/indoor/indoor-training-3.webp"
                        alt="Fussball Training Indoor"
                      />
                    </li>
                    <li className="splide__slide">
                      <img
                        src="/images/indoor/indoor-training-4.webp"
                        alt="Indoor Fussballhalle"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-about talent-section">
        <div
          className="row section-header has-bottom-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Mehr infos</h3>
            <h1 className="display-2" style={{ color: 'var(--white)' }}>
              Kunstrasen&shy;informationen
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-full">
            <div
              className="platz-grid wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="platz-card">
                <div className="platz-card-icon">
                  <i className="fa fa-futbol" />
                </div>
                <h3>Indoor Kunstrasen</h3>
                <p>
                  Bandensystem. Intensität. Dominanz. Auf diesem Kunstrasen zählt jede Aktion.
                </p>
              </div>

              <div className="platz-card">
                <div className="platz-card-icon">
                  <i className="fa fa-futbol" />
                </div>
                <h3>Feldgrösse</h3>
                <p>Auf 18 × 14 Metern zählt nur eins: Technik, Tempo, Präzision!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="s-services">
        <div
          className="row section-header has-bottom-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead">TRAININGSOPTIONEN</h3>
            <h1 className="display-2">Preise &amp; Pakete</h1>
            <p style={{ fontSize: '1.8rem', color: 'var(--primary-gold)', marginTop: '2rem' }}>
              Bis 31. Mai 2026 ausgebucht, danach nach Absprache möglich
            </p>
          </div>
        </div>

        <div className="row clients-outer">
          <div className="col-full">
            <div
              style={{ textAlign: 'center', marginBottom: '2rem' }}
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <p
                style={{
                  fontSize: '1.8rem',
                  color: 'var(--dark-grey)',
                  marginBottom: '1rem',
                }}
              >
                <i className="fa fa-shirt" style={{ color: 'var(--primary-gold)' }} />{' '}
                <strong>Trikot:</strong> Rot &amp; Gold
              </p>
              <p style={{ fontSize: '1.6rem', color: 'var(--dark-grey)' }}>
                Inbegriffen bei jedem Aboabschluss
              </p>
            </div>

            <h3
              style={{
                color: 'var(--dark-grey)',
                marginBottom: '2rem',
                textAlign: 'center',
                fontSize: '2.4rem',
              }}
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              Kinder &amp; Jugendliche
            </h3>

            <div
              className="group-table-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <table className="group-table">
                <thead>
                  <tr>
                    <th className="table-header">Training</th>
                    <th className="table-header">Einmalig</th>
                    <th className="table-header">6er Abo</th>
                    <th className="table-header">10er Abo</th>
                    <th className="table-header">15er Abo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="group-name">Einzeltraining</td>
                    <td>120 CHF</td>
                    <td>
                      690 CHF
                      <br />
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        (115 CHF/Session)
                      </span>
                    </td>
                    <td>
                      1&apos;100 CHF
                      <br />
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        (110 CHF/Session)
                      </span>
                    </td>
                    <td>
                      1&apos;590 CHF
                      <br />
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        (106 CHF/Session)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="group-name">
                      Training zu zweit
                      <br />
                      <span style={{ fontSize: '1.3rem' }}>(pro Person)</span>
                    </td>
                    <td>60 CHF</td>
                    <td>
                      345 CHF
                      <br />
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        (57.50 CHF/Session)
                      </span>
                    </td>
                    <td>
                      550 CHF
                      <br />
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        (55 CHF/Session)
                      </span>
                    </td>
                    <td>
                      795 CHF
                      <br />
                      <span style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        (53 CHF/Session)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="group-cards-container">
              <div className="group-card">
                <div className="card-header">
                  <h3>Einzeltraining</h3>
                </div>
                <div className="card-body">
                  <div className="card-info">
                    <i className="fa fa-user" />
                    <p>1 Person</p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>Einmalig: 120 CHF</p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>
                      6er Abo: 690 CHF
                      <br />
                      <span style={{ color: 'var(--primary-gold)' }}>(115 CHF/Session)</span>
                    </p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>
                      10er Abo: 1&apos;100 CHF
                      <br />
                      <span style={{ color: 'var(--primary-gold)' }}>(110 CHF/Session)</span>
                    </p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>
                      15er Abo: 1&apos;590 CHF
                      <br />
                      <span style={{ color: 'var(--primary-gold)' }}>(106 CHF/Session)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="group-card">
                <div className="card-header">
                  <h3>Training zu zweit</h3>
                  <span className="age-badge">pro Person</span>
                </div>
                <div className="card-body">
                  <div className="card-info">
                    <i className="fa fa-user-friends" />
                    <p>2 Personen</p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>Einmalig: 60 CHF</p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>
                      6er Abo: 345 CHF
                      <br />
                      <span style={{ color: 'var(--primary-gold)' }}>(57.50 CHF/Session)</span>
                    </p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>
                      10er Abo: 550 CHF
                      <br />
                      <span style={{ color: 'var(--primary-gold)' }}>(55 CHF/Session)</span>
                    </p>
                  </div>
                  <div className="card-info">
                    <i className="fa fa-tag" />
                    <p>
                      15er Abo: 795 CHF
                      <br />
                      <span style={{ color: 'var(--primary-gold)' }}>(53 CHF/Session)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="register-button-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.9s"
            >
              <Link
                href="/buchen?product=indoor-fussball"
                className="btn btn--gold-full schedule-button"
              >
                Jetzt buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s-about talent-section">
        <div
          className="row section-header has-bottom-sep light-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Standort</h3>
            <h1 className="display-2 display-2--light">Padelwerk Bubikon</h1>
          </div>
        </div>

        <div
          className="row wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="col-full" style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: '1.8rem',
                color: 'var(--white)',
                marginBottom: '3rem',
              }}
            >
              Das Padelwerk Bubikon bietet eine moderne Indoor-Sportanlage mit optimalen
              Trainingsbedingungen.
            </p>
            <p style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '3rem' }}>
              <strong>Jeden Sonntag · 11:00 - 20:00 Uhr</strong>
            </p>

            <div style={{ margin: '3rem auto', maxWidth: '1000px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6247288!2d8.8193!3d47.2699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab0c5e5e5e5e5%3A0x0!2sPadelwerk%20Bubikon!5e0!3m2!1sde!2sch!4v1234567890"
                width="100%"
                height={450}
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="talent-info-box" style={{ marginTop: '4rem' }}>
              <div className="info-box-header">
                <i className="fa fa-glass-water" />
                <h3>Getränke vor Ort</h3>
              </div>
              <div className="info-box-content">
                <p
                  style={{
                    fontSize: '1.6rem',
                    textAlign: 'center',
                    color: 'var(--white)',
                    margin: 0,
                  }}
                >
                  Erfrischungsgetränke und Snacks sind im Padelwerk erhältlich und müssen selbst
                  bezahlt werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="indoor-jsonld" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "Amzi Legacy Indoor-Fussball – Padelwerk Bubikon",
            "url": "https://www.amzilegacyfootballtraining.ch/indoor-fussball",
            "image": "https://www.amzilegacyfootballtraining.ch/images/miki/google-logo-og.png",
            "telephone": "+41789176436",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Höslistrasse 14",
              "addressLocality": "Bubikon",
              "addressRegion": "ZH",
              "postalCode": "8608",
              "addressCountry": "CH"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "11:00",
              "closes": "20:00"
            }
          }
        `}
      </Script>
      <Script id="indoor-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amzilegacyfootballtraining.ch/"},
              {"@type": "ListItem", "position": 2, "name": "Indoor-Fussball", "item": "https://www.amzilegacyfootballtraining.ch/indoor-fussball"}
            ]
          }
        `}
      </Script>
      <Script id="indoor-splide-init" strategy="afterInteractive">
        {`
          (function(){
            function init(){
              if (typeof Splide === 'undefined') { setTimeout(init, 100); return; }
              if (document.getElementById('indoor-splide')) {
                var indoorSplide = new Splide('#indoor-splide', {
                  type: 'fade',
                  rewind: true,
                  autoplay: true,
                  interval: 3000,
                  pagination: true,
                  arrows: true,
                });
                indoorSplide.mount();
              }
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', init);
            } else {
              init();
            }
          })();
        `}
      </Script>
    </>
  )
}
