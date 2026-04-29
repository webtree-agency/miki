import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import {
  GallerySection,
  PlayerDevSection,
  SponsorSection,
  QuotesSection,
} from '@/components/HomeStaticSections'

type Stat = { value: string; label: string }
type ServiceItem = { title: string; description: string; badge?: string | null }
type Testimonial = { quote: string; author: string }

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'home-page' })
  return {
    title:
      home?.seo?.title ||
      'Professionelles Fussballtraining für Deinen Erfolg! | Amzilegacyfootballtraining.ch',
    description:
      home?.seo?.description ||
      'Erstklassige Fussballtrainings in Stäfa auf dem Frohberg, in Uerikon in der Halle sowie in Bubikon in der Fussball-Indoor-Halle. Werde Teil von Amzi Legacy und erlebe professionelles Fussballtraining mit Leidenschaft, Qualität und Herz.',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/' },
  }
}

export default async function HomePage() {
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'home-page' })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const hero = home?.hero
  const mission = home?.mission
  const services = home?.services
  const reviews = home?.testimonials
  const stats = (mission?.stats as Stat[]) ?? []
  const serviceItems = (services?.items as ServiceItem[]) ?? []
  const testimonialItems = (reviews?.items as Testimonial[]) ?? []

  const ig = settings?.social?.instagram
  const tt = settings?.social?.tiktok
  const wa = settings?.kontakt?.whatsappNumber
    ? `https://wa.me/${settings.kontakt.whatsappNumber.replace(/[^+\d]/g, '')}`
    : ''

  const sportsActivityLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Amzi Legacy Football Training',
    alternateName: 'MIKI Fussballschule',
    url: 'https://www.amzilegacyfootballtraining.ch/',
    logo: 'https://www.amzilegacyfootballtraining.ch/images/miki/google-logo.png',
    image: 'https://www.amzilegacyfootballtraining.ch/images/miki/google-logo.png',
    description:
      'Professionelles Fussballtraining auf Rasen und in der Halle. Individuelle Einzel- und Gruppentrainings für Anfänger und Fortgeschrittene.',
    telephone: '+41789176436',
    email: 'info@amzilegacyfootballtraining.ch',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stäfa',
      addressRegion: 'ZH',
      postalCode: '8712',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.2442,
      longitude: 8.7261,
    },
    sameAs: [
      'https://www.instagram.com/amzifootballtraining/',
      'https://www.tiktok.com/@amzifootballtraining',
    ],
  }

  return (
    <>
      <Script
        id="ld-sports-activity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsActivityLd) }}
      />
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
            <h3>{hero?.subtitle ?? '#ShowThemYourQuality'}</h3>
            <h1>{hero?.title ?? 'BE THE GAME!'}</h1>
            <div className="home-content__buttons">
              <Link href={hero?.ctaPrimaryUrl ?? '/fussballcamp'} className="btn btn--gold-full">
                {hero?.ctaPrimaryLabel ?? 'Fussballcamp'}
              </Link>
              <Link href={hero?.ctaSecondaryUrl ?? '/about'} className="btn btn--white">
                {hero?.ctaSecondaryLabel ?? 'Meine Geschichte'}
              </Link>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
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

      <section id="about" className="s-about">
        <div className="row section-header has-bottom-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <h3 className="subhead subhead--dark">{mission?.subhead ?? 'Mission'}</h3>
            <h1 className="display-1 display-1--light">{mission?.title ?? 'Champions formen'}</h1>
          </div>
        </div>
        <div className="row about-desc wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <p>{mission?.description}</p>
          </div>
        </div>
        <div
          className="row about-stats stats block-1-3 block-m-1-2 block-mob-full wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          {stats.map((stat, i) => (
            <div key={i} className="col-block stats__col">
              {stat.value === '✓' ? (
                <i className="fa fa-check stats__count__last" />
              ) : (
                <div className="stats__count">{stat.value}</div>
              )}
              <h5>{stat.label}</h5>
            </div>
          ))}
        </div>
        <div className="about__line" />
      </section>

      <section id="training-video" className="s-training-video">
        <div className="row section-header has-bottom-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <h3 className="subhead">Trainingseinblicke</h3>
            <h1 className="display-2 display-2--light">So sieht das Training aus</h1>
          </div>
        </div>
        <div className="row video-container-row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <div className="training-video-wrapper">
              <video controls poster="/images/video-cover.webp" className="training-video" preload="none" muted>
                <source src="/videos/instagram-reel.mp4" type="video/mp4" />
                Dein Browser unterstützt keine Videos.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="s-services">
        <div className="row section-header has-bottom-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <h3 className="subhead">{services?.subhead ?? 'Dienstleistungen'}</h3>
            <h1 className="display-2">{services?.title}</h1>
          </div>
        </div>
        <div className="row services-list block-1-2 block-tab-full">
          {serviceItems.map((item, i) => (
            <div key={i} className="col-block service-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="service-icon">
                <img className="fussball-icon" src="/svg/fussball-gold.svg" alt="Fussball Icon" />
              </div>
              <div className="service-text">
                <h3 className="h2">
                  {item.title}
                  {item.badge ? <span className="new-tag"> {item.badge}</span> : null}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="align-center">
          <Link href="/angebot" className="btn btn--black">
            Mehr erfahren
          </Link>
        </div>
      </section>

      <GallerySection />
      <PlayerDevSection />

      <section id="clients" className="s-clients">
        <div className="row section-header has-bottom-sep dark-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <h3 className="subhead subhead--gold">{reviews?.subhead ?? 'Rezensionen'}</h3>
            <h1 className="display-2 display-2--dark">{reviews?.title}</h1>
          </div>
        </div>
        <div className="clients-testimonials wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="custom-splide-container">
            <div id="testimonials-splide" className="splide custom-splide">
              <div className="splide__track custom-splide-track">
                <ul className="splide__list">
                  {testimonialItems.map((t, i) => (
                    <li key={i} className="splide__slide">
                      <div className="clean-testimonial">
                        <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
                        <div className="testimonial-author">
                          <span className="author-name">{t.author}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rating-summary wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="rating-container">
            <span className="rating-value">5.0</span>
            <div className="rating-stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="rating-count">61 Bewertungen</span>
          </div>
        </div>
      </section>

      <SponsorSection />
      <QuotesSection />

      <Script id="splide-init" strategy="afterInteractive">
        {`
          (function init() {
            if (typeof window === 'undefined') return;
            if (!window.Splide) { setTimeout(init, 100); return; }
            var el = document.getElementById('testimonials-splide');
            if (!el || el.classList.contains('is-initialized')) return;
            new Splide('#testimonials-splide', {
              type: 'slide',
              pagination: true,
              arrows: true,
              autoplay: false,
              rewind: true,
              preloadPages: 1,
            }).mount();
          })();
        `}
      </Script>
    </>
  )
}
