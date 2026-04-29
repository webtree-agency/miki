import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

type ProgrammTag = { tag: string; inhalt: string }
type Gruppe = {
  slotId: string
  name: string
  altersgruppe?: string | null
  zeit?: string | null
  kapazitaet?: number | null
}

const TAG_ICONS = ['fa-dumbbell', 'fa-person-running', 'fa-futbol', 'fa-person-running', 'fa-trophy']

const FALLBACK_PROGRAMM: ProgrammTag[] = [
  { tag: 'Montag', inhalt: 'Technik, Torabschluss, Spielform' },
  { tag: 'Dienstag', inhalt: 'Technik, Passform, Abschlussspiel' },
  { tag: 'Mittwoch', inhalt: 'Technik, Zweikampfverhalten DEF/OFF, Abschlussspiel' },
  { tag: 'Donnerstag', inhalt: 'Technik, Zweikampfverhalten DEF/OFF, Abschlussspiel' },
  { tag: 'Freitag', inhalt: 'Athletik, Abschlussspiel, Preisverleihung' },
]

const FALLBACK_GRUPPEN: Gruppe[] = [
  { slotId: 'kids1_09_10', name: 'Kids 1', altersgruppe: '6-9 Jahre', zeit: '09:00 - 10:00 Uhr', kapazitaet: 16 },
  { slotId: 'kids2_10_11', name: 'Kids 2', altersgruppe: '10-13 Jahre', zeit: '10:00 - 11:00 Uhr', kapazitaet: 16 },
  { slotId: 'kids3_11_12', name: 'Kids 3 / Mädchen', altersgruppe: '10-13 Jahre', zeit: '11:00 - 12:00 Uhr', kapazitaet: 16 },
]

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const camp = await payload.findGlobal({ slug: 'fussballcamp-page' })
  return {
    title: camp?.seo?.title || 'Fussballcamp 2026 – Stäfa Frohberg | Amzi Legacy Football Training',
    description:
      camp?.seo?.description ||
      'Fussballcamp Mo 27. April – Fr 1. Mai 2026 in der Sportanlage Frohberg, Stäfa. Premium-Trikot inklusive. Verschiedene Altersgruppen, professionelles Training.',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/fussballcamp' },
  }
}

export default async function FussballcampPage() {
  const payload = await getPayload({ config })
  const camp = await payload.findGlobal({ slug: 'fussballcamp-page' })

  const datumsBereich = camp?.hero?.datumsBereich ?? 'Montag, 27. April - Freitag, 1. Mai 2026'
  const ort = camp?.hero?.ort ?? 'Sportanlage Frohberg, Stäfa'
  const ausgebucht = camp?.ausgebucht?.campAusgebucht ?? true
  const ausgebuchtBis = camp?.ausgebucht?.ausgebuchtBis ?? '31.05.2026'
  const ausgebuchtLabel = camp?.ausgebucht?.ausgebuchtLabel ?? 'Ausgebucht'
  const programm = ((camp?.trainingsprogramm as ProgrammTag[]) ?? []).length
    ? (camp!.trainingsprogramm as ProgrammTag[])
    : FALLBACK_PROGRAMM
  const gruppen = ((camp?.gruppen as Gruppe[]) ?? []).length
    ? (camp!.gruppen as Gruppe[])
    : FALLBACK_GRUPPEN

  return (
    <>
      <section
        id="talentcover"
        className="s-home target-section"
        data-parallax="scroll"
        data-image-src="/images/trikot-cover-laptop.webp"
        data-position-y="center"
      >
        <div className="overlay"></div>
        <div className="home-content">
          <div className="row home-content__main">
            <h3>#DevelopYourTalent</h3>
            <h1>FUSSBALLCAMP</h1>
            <div className="home-content__buttons">
              <a href="#what" className="btn btn--white smoothscroll">
                Was ist das Fussballcamp?
              </a>
              {ausgebucht ? (
                <button className="btn btn--gold-full schedule-button disabled" disabled>
                  {ausgebuchtLabel}
                </button>
              ) : (
                <Link href="/buchen" className="btn btn--gold-full schedule-button">
                  Jetzt buchen
                </Link>
              )}
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#trainers" className="scroll-link smoothscroll">
              <span>Weiter</span>
            </a>
          </div>
          <div className="home-content__line"></div>
        </div>
        <ul className="home-social">
          <li>
            <a href="https://www.instagram.com/amzifootballtraining/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@amzifootballtraining" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
              <span>TikTok</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+41789176436" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>Whatsapp</span>
            </a>
          </li>
        </ul>
      </section>

      <div className="training-toggle-section">
        <div className="training-toggle-container">
          <div className="training-toggle-wrapper">
            <button id="miki-toggle" className="btn btn--gold-camp talentcamp-selector">
              Fussballcamp
            </button>
            <button id="fongue-toggle" className="btn btn--gold-camp talentcamp-selector">
              Elite Sprintangebot
            </button>
          </div>
        </div>
      </div>

      {/* NEU: Profi-Trainer Ankündigung */}
      <section
        id="trainers"
        className="s-about miki-section"
        style={{ padding: '3rem 0', background: 'var(--black)' }}
      >
        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <div
              style={{
                border: '4px solid var(--primary-gold)',
                padding: '4rem 3rem',
                textAlign: 'center',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
              }}
            >
              <p
                style={{
                  color: 'var(--primary-gold)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '1rem',
                }}
              >
                Im Fussballcamp dabei
              </p>

              <h1
                style={{
                  fontSize: '5rem',
                  color: 'var(--white)',
                  margin: '2rem 0',
                  fontWeight: 900,
                  lineHeight: 1.2,
                }}
              >
                ADNAN JASHARI
              </h1>

              <div style={{ margin: '1.5rem auto', maxWidth: '400px' }}>
                <div id="adnan-splide" className="splide adnan-slider">
                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <img
                          src="/images/talentcamp/adnan4.webp"
                          alt="Adnan Jashari"
                          style={{
                            width: '100%',
                            height: 'auto',
                            border: '3px solid var(--primary-gold)',
                            borderRadius: '8px',
                          }}
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src="/images/talentcamp/adnan.webp"
                          alt="Adnan Jashari"
                          style={{
                            width: '100%',
                            height: 'auto',
                            border: '3px solid var(--primary-gold)',
                            borderRadius: '8px',
                          }}
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src="/images/talentcamp/adnan2.webp"
                          alt="Adnan Jashari Training"
                          style={{
                            width: '100%',
                            height: 'auto',
                            border: '3px solid var(--primary-gold)',
                            borderRadius: '8px',
                          }}
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src="/images/talentcamp/adnan3.webp"
                          alt="Adnan Jashari FCZ"
                          style={{
                            width: '100%',
                            height: 'auto',
                            border: '3px solid var(--primary-gold)',
                            borderRadius: '8px',
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ margin: '2rem 0 1.5rem 0' }}>
                <h3
                  style={{
                    color: 'var(--white)',
                    fontSize: '2rem',
                    marginBottom: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  Als Spieler
                </h3>
                <div
                  className="adnan-credentials"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem',
                  }}
                >
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    FCZ
                  </span>
                  <span className="mobile-hide" style={{ color: 'var(--white)', fontSize: '1.6rem' }}>
                    |
                  </span>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    FC Winterthur
                  </span>
                  <span className="mobile-hide" style={{ color: 'var(--white)', fontSize: '1.6rem' }}>
                    |
                  </span>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    Ferencváros Budapest
                  </span>
                  <span className="mobile-hide" style={{ color: 'var(--white)', fontSize: '1.6rem' }}>
                    |
                  </span>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    Schweizer Nati U15-U20
                  </span>
                </div>

                <h3
                  style={{
                    color: 'var(--white)',
                    fontSize: '2rem',
                    marginBottom: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  Als Trainer
                </h3>
                <div
                  className="adnan-credentials"
                  style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}
                >
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    GCZ U13
                  </span>
                  <span className="mobile-hide" style={{ color: 'var(--white)', fontSize: '1.6rem' }}>
                    |
                  </span>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    GCZ U15
                  </span>
                  <span className="mobile-hide" style={{ color: 'var(--white)', fontSize: '1.6rem' }}>
                    |
                  </span>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', fontWeight: 600 }}>
                    FC Kosova Zürich 1. Liga Assistent
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: '2.2rem',
                  color: 'var(--white)',
                  margin: '2rem 0',
                  lineHeight: 1.5,
                }}
              >
                Lerne von einem Profi, der gegen England vor 35&apos;000 Zuschauern gewonnen hat.
              </p>

              <p
                style={{
                  fontSize: '1.6rem',
                  color: 'var(--primary-gold)',
                  margin: '1.5rem 0',
                  lineHeight: 1.4,
                }}
              >
                <strong>Trainingsablauf:</strong> Die Gruppe wird geteilt – eine Hälfte trainiert mit Miralem
                Amzi, während die andere mit Adnan Jashari trainiert. Danach wird gewechselt.
              </p>

              <a href="#services" className="btn btn--stroke-inverted smoothscroll">
                Jetzt nichts verpassen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Miki */}
      <section id="what" className="s-about talent-top-section talent-section miki-section">
        <div
          className="row section-header has-bottom-sep light-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">{datumsBereich}</h3>
            <h1 className="display-2 display-2--light">Entdecke dein volles Potenzial</h1>
          </div>
        </div>
        <div className="talent-split-hero wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="split-image"></div>
          <div className="split-content">
            <h2>Werde zum kompletten Spieler</h2>
            <ul className="talent-benefits">
              <li>
                <i className="fa fa-check-circle"></i> Professionelles Training in kleinen Gruppen
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Individuelle Technik- und Taktikentwicklung
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Persönliches Feedback bei jedem Training
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Premium Fussballkleidung
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Training mit zwei ehemaligen Spitzensportler und Trainer
              </li>
            </ul>
            <div className="talent-actions">
              <a href="#services" className="btn btn--stroke-inverted smoothscroll">
                Preise &amp; Zeiten
              </a>
            </div>
          </div>
        </div>
        <div className="talent-features-row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-user-group"></i>
            </div>
            <h3>Limitierte Plätze</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-brain"></i>
            </div>
            <h3>Maximale Förderung</h3>
          </div>
        </div>
        <div className="talent-info-box wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
          <div className="info-box-header">
            <i className="fa fa-info-circle"></i>
            <h3>Das Wichtigste auf einen Blick</h3>
          </div>
          <div className="info-box-content">
            <div className="info-item">
              <i className="fa fa-calendar-check"></i>
              <div>
                <h4>Start, Ende &amp; Ort</h4>
                <p>
                  {datumsBereich} | {ort}
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-clock"></i>
              <div>
                <h4>Trainingsinformationen</h4>
                <p>
                  Montag bis Freitag | Verschiedene Zeitfenster je nach Gruppe <br />{' '}
                  <strong>16 Spieler pro Gruppe</strong>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-shirt"></i>
              <div>
                <h4>Inklusive</h4>
                <p>
                  Premium Fussballkleidung für jeden (Trikot, Shorts &amp; Stulpen) <br />{' '}
                  <strong>Trikots erhalten die Kids direkt vor Ort</strong>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-trophy"></i>
              <div>
                <h4>Preisverleihung</h4>
                <p>
                  Bester Spieler/in pro Gruppe erhält einen Ballon d&apos;Or | Alle Spieler erhalten eine
                  Goldmedaille
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="talent-info-box wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
          <div className="info-box-header">
            <i className="fa fa-calendar-days"></i>
            <h3>Trainingsprogramm</h3>
          </div>
          <div className="info-box-content">
            {programm.map((p, i) => (
              <div key={i} className="info-item">
                <i className={`fa ${TAG_ICONS[i % TAG_ICONS.length]}`}></i>
                <div>
                  <h4>{p.tag}</h4>
                  <p>{p.inhalt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fongué */}
      <section id="fongue-hero" className="s-about talent-section fongue-section">
        <div className="about__line"></div>
        <div
          className="row section-header has-bottom-sep light-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Exklusives Angebot</h3>
            <h1 className="display-2 display-2--light">
              Technik trifft Tempo <br />
              Athletik, die Spiele entscheidet
            </h1>
          </div>
        </div>
        <div className="talent-split-hero wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="split-image fongue-hero-image"></div>
          <div className="split-content">
            <div className="talent-badge">
              <a
                href="https://www.instagram.com/r.m.fongue/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit' }}
              >
                <i className="fa-brands fa-instagram"></i> @r.m.fongue
              </a>
            </div>
            <div className="talent-badge">3-Monats Elite Programm</div>
            <div className="talent-badge">Sprintlegende</div>
            <div className="talent-badge">Training mit Usain Bolt</div>

            <h2>Entwickle explosive Schnelligkeit &amp; Beschleunigung</h2>
            <ul className="talent-benefits">
              <li>
                <i className="fa fa-bolt"></i> 3-facher Schweizermeister (100 m Sprint)
              </li>
              <li>
                <i className="fa fa-bolt"></i> 2 Jahre Training mit Usain Bolt (Jamaika)
              </li>
              <li>
                <i className="fa fa-bolt"></i> Individuelles Feedback vom Top-Athleten
              </li>
              <li>
                <i className="fa fa-bolt"></i> Körpertraining speziell für Fussballer
              </li>
            </ul>
            <div className="promo-code-banner">
              <div className="promo-code">
                <span className="promo-label">Exklusiver Code:</span>
                <span className="promo-value">AmziFootball10</span>
              </div>
              <span className="promo-discount">10% RABATT</span>
            </div>
            <div className="talent-actions">
              <a
                href="https://rolffongue.com/kontakt/"
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary fongue-btn"
              >
                Jetzt buchen
              </a>
              <a href="#fongue-video" className="btn btn--stroke-inverted smoothscroll">
                Video ansehen
              </a>
            </div>
          </div>
        </div>
        <div className="talent-features-row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-stopwatch"></i>
            </div>
            <h3>Reaktion</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-running"></i>
            </div>
            <h3>Kraft</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-bolt"></i>
            </div>
            <h3>Fokus</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-tachometer-alt"></i>
            </div>
            <h3>Körper</h3>
          </div>
        </div>
        <div
          className="talent-info-box fongue-info-box wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.9s"
        >
          <div className="info-box-header">
            <i className="fa fa-bolt"></i>
            <h3>Das Wichtigste auf einen Blick</h3>
          </div>
          <div className="info-box-content">
            <div className="info-item">
              <i className="fa fa-calendar-check"></i>
              <div>
                <h4>Dauer &amp; Format</h4>
                <p>3-monatiges Intensivprogramm | Zürich</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-clock"></i>
              <div>
                <h4>Trainingseinheiten</h4>
                <p>Wird im Erstgespräch definiert</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-trophy"></i>
              <div>
                <h4>Coaching-Qualität</h4>
                <p>Training mit echtem Profi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miki - Services / Gruppen */}
      <section id="services" className="s-services miki-section">
        <div
          className="row section-header has-bottom-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead">Das Angebot</h3>
            <h1 className="display-2">Wie funktioniert es?</h1>
          </div>
        </div>
        <div className="row services-list block-1-3 block-tab-full">
          <div
            className="col-block service-item wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="service-icon">
              <i className="fa fa-users" style={{ fontSize: '3rem', color: 'var(--primary-gold)' }}></i>
            </div>
            <div className="service-text">
              <h3 className="h2">1. Wähle deine Gruppe</h3>
              <p>
                Abhängig von Alter gibt es vier verschiedene Gruppen mit unterschiedlichen
                Trainingszeiten.
              </p>
            </div>
          </div>
          <div
            className="col-block service-item wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <div className="service-icon">
              <i className="fa fa-futbol" style={{ fontSize: '3rem', color: 'var(--primary-gold)' }}></i>
            </div>
            <div className="service-text">
              <h3 className="h2">2. Buche dein Paket</h3>
              <p>
                Das Fussballcamp kostet 180 CHF für die ganze Woche (Mo–Fr) und beinhaltet hochwertige
                Fussballkleidung von Amzi Legacy Football Training.
              </p>
            </div>
          </div>
          <div
            className="col-block service-item wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.7s"
          >
            <div className="service-icon">
              <i className="fa fa-trophy" style={{ fontSize: '3rem', color: 'var(--primary-gold)' }}></i>
            </div>
            <div className="service-text">
              <h3 className="h2">3. Starte dein Training</h3>
              <p>
                Montag bis Freitag im Frohberg in Stäfa –{' '}
                <strong>27. April bis 1. Mai 2026</strong> – erhältst du professionelles Training, das
                dich in deiner Entwicklung voranbringt.
              </p>
            </div>
          </div>
        </div>
        <div className="row clients-outer">
          <div className="col-full">
            {/* Verbesserte Tabellendarstellung */}
            <div className="group-table-container">
              <table className="group-table">
                <thead>
                  <tr>
                    <th className="table-header">Gruppe</th>
                    <th className="table-header">Alter</th>
                    <th className="table-header">Uhrzeit</th>
                    <th className="table-header">Kosten</th>
                    <th className="table-header">Verfügbar</th>
                  </tr>
                </thead>
                <tbody id="slots-table-body">
                  {gruppen.map((g) => (
                    <tr key={g.slotId} data-slot-id={g.slotId}>
                      <td className="group-name">
                        {g.name}
                        <span className="ausgebucht-badge" style={{ display: 'none' }}>
                          {ausgebuchtLabel}
                        </span>
                      </td>
                      <td>{g.altersgruppe}</td>
                      <td>{g.zeit}</td>
                      <td>180 CHF</td>
                      <td className="availability-cell">
                        <strong style={{ color: 'var(--primary-gold)' }}>
                          <span className="available-count">{g.kapazitaet ?? 16}</span> Plätze
                        </strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile-optimierte Karten-Ansicht */}
            <div className="group-cards-container" id="slots-cards-container">
              {gruppen.map((g) => (
                <div key={g.slotId} className="group-card limited-card" data-slot-id={g.slotId}>
                  <div className="diagonal-ribbon" style={{ display: 'none' }}>
                    {ausgebuchtLabel}
                  </div>
                  <div className="card-header">
                    <h3>{g.name}</h3>
                    <span className="age-badge">{g.altersgruppe}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-info">
                      <i className="fa fa-clock"></i>
                      <p>{g.zeit}</p>
                    </div>
                    <div className="card-info">
                      <i className="fa fa-tag"></i>
                      <p>180 CHF</p>
                    </div>
                    <div
                      className="card-info availability-card-info"
                      style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                      }}
                    >
                      <i className="fa fa-users" style={{ color: 'var(--primary-gold)' }}></i>
                      <p
                        className="available-text"
                        style={{ color: 'var(--primary-gold)', fontWeight: 700 }}
                      >
                        <span className="available-count">{g.kapazitaet ?? 16}</span> Plätze verfügbar
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {ausgebucht && (
              <div
                style={{
                  textAlign: 'center',
                  margin: '2rem auto',
                  padding: '1.5rem 2rem',
                  border: '2px solid var(--primary-gold)',
                  borderRadius: '8px',
                  maxWidth: '600px',
                  background: 'rgba(212, 175, 55, 0.08)',
                }}
              >
                <p style={{ fontSize: '1.6rem', color: 'var(--white)', margin: 0 }}>
                  <strong style={{ color: 'var(--primary-gold)' }}>Hinweis:</strong> Das Camp ist
                  aktuell ausgebucht bis <strong>{ausgebuchtBis}</strong>.
                </p>
              </div>
            )}

            <div className="register-button-container">
              {ausgebucht ? (
                <button className="btn btn--gold-full schedule-button disabled" disabled>
                  {ausgebuchtLabel}
                </button>
              ) : (
                <Link href="/buchen" className="btn btn--gold-full schedule-button">
                  Jetzt buchen
                </Link>
              )}
            </div>
          </div>
        </div>
        <Script id="fc-table-responsive" strategy="afterInteractive">{`
          function checkTableResponsive() {
            const tableContainer = document.querySelector('.pricing-table-container');
            const mobileCards = document.querySelector('.mobile-pricing-cards');
            if (!tableContainer || !mobileCards) return;
            if (window.innerWidth < 768) {
              tableContainer.style.display = 'none';
              mobileCards.style.display = 'block';
            } else {
              tableContainer.style.display = 'block';
              mobileCards.style.display = 'none';
            }
          }
          window.addEventListener('DOMContentLoaded', checkTableResponsive);
          window.addEventListener('resize', checkTableResponsive);
        `}</Script>
      </section>

      <section id="fongue-about" className="s-services fongue-section">
        <div
          className="row section-header has-bottom-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead">Über Rolf Fongué</h3>
            <h1 className="display-2">Schweizer Elite-Sprinter &amp; Coach</h1>
          </div>
        </div>
        <div className="fongue-profile-container wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="fongue-main-profile">
            <div className="profile-image-container">
              <img src="/images/fongue.webp" alt="Rolf Fongué Elite Speed Trainer" className="profile-image" />
            </div>
            <div className="profile-intro">
              <p className="profile-tagline">Dreifacher Schweizermeister im 100m Sprint &amp; Elite-Coach</p>
              <p className="profile-summary">
                Geboren 1987, trainierte Rolf zwei Jahre mit Usain Bolt in Jamaika und entwickelte
                einzigartige Trainingsmethoden zur Optimierung von Schnelligkeit, Kraft und
                Körperbeherrschung.
              </p>
              <div className="philosophy-quote">
                <i className="fa fa-quote-left"></i>
                <p>Der mentale Teil einer Trainingseinheit ist der Wichtigste.</p>
                <i className="fa fa-quote-right"></i>
              </div>
            </div>
          </div>
          <div className="fongue-stats-container">
            <div className="statistics-row">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fa fa-trophy"></i>
                </div>
                <div className="stat-value">3x</div>
                <div className="stat-label">Schweizermeister</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fa fa-running"></i>
                </div>
                <div className="stat-value">100m</div>
                <div className="stat-label">Sprint-Spezialist</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fa fa-plane"></i>
                </div>
                <div className="stat-value">2</div>
                <div className="stat-label">Jahre in Jamaika</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="stat-value">10+</div>
                <div className="stat-label">Profis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miki - Trikot */}
      <section id="works" className="s-works jersey-showcase miki-section">
        <div className="intro-wrap">
          <div
            className="row section-header has-bottom-sep light-sep wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="col-full">
              <h3 className="subhead">Premium Ausrüstung</h3>
              <h1 className="display-2 display-2--light">Dein exklusives Trainingskit</h1>
            </div>
          </div>
          <div className="row jersey-content">
            <div
              className="col-six tab-full training-video-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="training-video-wrapper">
                <video
                  controls
                  poster="/images/promotion-reel-cover.webp"
                  className="training-video"
                  preload="none"
                  muted
                >
                  <source src="/videos/promotion-reel.mp4" type="video/mp4" />
                  Dein Browser unterstützt keine Videos.
                </video>
              </div>
            </div>
            <div
              className="col-six tab-full jersey-details wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h2 className="jersey-title">Personalisiertes Premium-Trikot</h2>
              <p className="jersey-intro">
                Im Fussballcamp erhältst du exklusive, hochwertige Premium Amzi Legacy Fussballkleidung.
              </p>
              <div className="jersey-features">
                <div className="feature-box">
                  <div className="feature-icon">
                    <i className="fa fa-palette"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Farbgebung</h3>
                    <p>Rot &amp; Gold</p>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="feature-icon">
                    <i className="fa fa-tshirt"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Premium Material</h3>
                    <p>
                      Atmungsaktives, leichtes Hightech-Material für optimalen Komfort während des
                      Trainings
                    </p>
                  </div>
                </div>
              </div>
              <div className="jersey-included-box">
                <h3>
                  <i className="fa fa-check-circle"></i> Im Fussballcamp inklusive:
                </h3>
                <ul className="included-list">
                  <li>
                    <i className="fa fa-check"></i> Premium Amzi Legacy Fussballkleidung
                  </li>
                  <li>
                    <i className="fa fa-check"></i> 5 professionelle Trainingseinheiten (Mo-Fr)
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Individuelles Technik-Coaching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressionen */}
      <section id="impressions" className="s-about talent-section miki-section">
        <div
          className="row section-header has-bottom-sep light-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Rückblick</h3>
            <h1 className="display-2 display-2--light">Impressionen aus dem letzten Fussballcamp</h1>
          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <div className="col-full">
            <div className="impressions-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="highlight-content">
                  <h3>Intensive Gruppenarbeit</h3>
                  <p>Fokus auf kleine Gruppen und individuelle Betreuung</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fa fa-trophy"></i>
                </div>
                <div className="highlight-content">
                  <h3>Messbare Fortschritte</h3>
                  <p>Professionelles Feedback nach jeder Trainingseinheit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
          <div
            className="col-full"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}
          >
            <video
              controls
              muted
              poster="/images/talentcamp/sohm-cover.webp"
              className="image-border-black"
              preload="none"
              style={{ borderRadius: '8px', maxWidth: '400px', width: '100%', height: 'auto' }}
            >
              <source src="/videos/sohm.mp4" type="video/mp4" />
              <source src="/videos/sohm.mp4" type="video/quicktime" />
              Dein Browser unterstützt keine Videos.
            </video>
          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
          <div className="col-full">
            <div className="custom-splide-container">
              <div id="splide" className="splide custom-splide custom-splide-black">
                <div className="splide__track custom-splide-track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <img
                        className="image-border-black"
                        src="/images/talentcamp/miki-sohm-trikot.webp"
                        alt="Miki Trikot halten mit Sohm"
                        loading="lazy"
                      />
                    </li>
                    <li className="splide__slide">
                      <img
                        className="image-border-black"
                        src="/images/talentcamp/miki-sohm-quer.webp"
                        alt="Miki mit Sohm"
                        loading="lazy"
                      />
                    </li>
                    <li className="splide__slide">
                      <img
                        className="image-border-black"
                        src="/images/talentcamp/miki-lachen.webp"
                        alt="Miki lacht"
                        loading="lazy"
                      />
                    </li>
                    <li className="splide__slide">
                      <img
                        className="image-border-black"
                        src="/images/talentcamp/miki-sohm-lachen.webp"
                        alt="Miki mit Sohm"
                        loading="lazy"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
          <div className="col-full" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, var(--black) 0%, #333 100%)',
                padding: '4rem 3rem',
                borderRadius: '15px',
                color: 'white',
              }}
            >
              <h3
                style={{ color: 'var(--primary-gold)', marginBottom: '1.5rem', fontSize: '2.8rem' }}
              >
                Werde Teil der nächsten Erfolgsgeschichte!
              </h3>
              <p
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '2.5rem',
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                Das nächste Fussballcamp kommt bald - verpasse nicht deine Chance!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fongué - Video */}
      <section id="fongue-video" className="s-works jersey-showcase fongue-section">
        <div className="intro-wrap">
          <div
            className="row section-header has-bottom-sep light-sep wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="col-full">
              <h3 className="subhead">Ergebnisse, die sprechen</h3>
              <h1 className="display-2 display-2--light">So sieht das Training aus</h1>
            </div>
          </div>
          <div className="row jersey-content">
            <div
              className="col-six tab-full training-video-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="training-video-wrapper">
                <video
                  controls
                  poster="/images/fongue-video-cover.webp"
                  className="training-video"
                  preload="none"
                  muted
                >
                  <source src="/videos/fongue-reel.mov" type="video/mp4" />
                  Dein Browser unterstützt keine Videos.
                </video>
              </div>
            </div>
            <div
              className="col-six tab-full program-details wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h2 className="program-title">
                Das 3-Monats <br />
                Elite-Programm
              </h2>
              <div className="program-phases">
                <div className="phase">
                  <div className="phase-header">
                    <span className="phase-number">1</span>
                    <h3>Kennenlerngespräch</h3>
                  </div>
                  <p>Ziele, Motivation und Ist-Zustand werden gemeinsam besprochen.</p>
                </div>
                <div className="phase">
                  <div className="phase-header">
                    <span className="phase-number">2</span>
                    <h3>Analyse</h3>
                  </div>
                  <p>
                    Präzise Messung von Reaktion, Kraft und Bewegung – die Grundlage für dein
                    persönliches Trainingsprogramm.
                  </p>
                </div>
                <div className="phase">
                  <div className="phase-header">
                    <span className="phase-number">3</span>
                    <h3>Trainingsstart mit App</h3>
                  </div>
                  <p>In drei Phasen zur Höchstleistung: Technik, Fundament und maximale Explosivität.</p>
                </div>
              </div>
              <div className="program-cta">
                <div className="program-price">
                  <span className="regular-price">CHF 1&apos;500</span>
                  <span className="discount-price">CHF 1&apos;350 mit Code: AmziFootball10</span>
                </div>
                <a
                  href="https://rolffongue.com/kontakt/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Jetzt anmelden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Miki */}
      <section id="faq" className="s-clients miki-section">
        <div
          className="row section-header has-bottom-sep dark-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--gold">Fragen &amp; Antworten</h3>
            <h1 className="display-2 display-2--dark">Alles zum Fussballcamp</h1>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Wann und wo findet das Fussballcamp statt?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: 'var(--primary-gold)', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>
                      Das Fussballcamp startet ab 2026. Es findet von Montag, 27. April bis Freitag, 1.
                      Mai in der Sportanlage Frohberg in Stäfa statt. Die genauen Trainingszeiten sind
                      gruppenabhängig.
                    </p>
                    <ul>
                      <li>Kids 1 (6-9 Jahre): 09:00 - 10:00 Uhr</li>
                      <li>Kids 2 (10-13 Jahre): 10:00 - 11:00 Uhr</li>
                      <li>Kids 3 / Mädchen (10-13 Jahre): 11:00 - 12:00 Uhr</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Was kostet das Fussballcamp?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: 'var(--primary-gold)', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>Das Fussballcamp kostet 180 CHF für die ganze Woche (Mo-Fr) und beinhaltet:</p>
                    <ul>
                      <li>5 professionelle Trainingseinheiten à 60 Minuten (Montag bis Freitag)</li>
                      <li>
                        Premium Amzi Legacy Fussballkleidung in der Farbe deiner Gruppe. Trikot, Shorts
                        und Stulpen
                      </li>
                      <li>Individuelles Feedback und persönliche Entwicklungstipps</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Für wen ist das Fussballcamp geeignet?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: 'var(--primary-gold)', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>
                      Das Fussballcamp ist für ambitionierte Fussballspieler/innen aller Altersgruppen
                      geeignet. Ich biete spezifische Gruppen für:
                    </p>
                    <ul>
                      <li>
                        <strong>Kids 1 (6-9 Jahre)</strong>
                      </li>
                      <li>
                        <strong>Kids 2 (10-13 Jahre)</strong>
                      </li>
                      <li>
                        <strong>Kids 3 / Mädchen (10-13 Jahre)</strong>
                      </li>
                    </ul>
                    <p>
                      Sowohl Anfänger als auch fortgeschrittene Spieler profitieren vom Training, da die
                      Übungen individuell an das Niveau angepasst werden.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Was sollte zum Training mitgebracht werden?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: 'var(--primary-gold)', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>Zum Training sollten folgende Dinge mitgebracht werden:</p>
                    <ul>
                      <li>Geeignete Fussballschuhe (je nach Untergrund)</li>
                      <li>Schienbeinschoner (Pflicht)</li>
                      <li>Sportkleidung (bei wechselhaftem Wetter mehrere Schichten)</li>
                      <li>Trinkflasche (am besten Wasser)</li>
                      <li>Handtuch und eventuell Wechselkleidung</li>
                      <li>Dein Amzi Legacy Trainingstrikot, falls du bereits eines hast</li>
                    </ul>
                    <p>Stulpen, Trikot und Shorts erhältst du vor Ort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Script id="fc-faq-accordion" strategy="afterInteractive">{`
          document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
              question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                const isOpen = answer.style.maxHeight !== "0px" && answer.style.maxHeight !== "";
                document.querySelectorAll('.faq-answer').forEach(item => {
                  item.style.maxHeight = "0px";
                });
                document.querySelectorAll('.faq-question i').forEach(i2 => {
                  i2.style.transform = "rotate(0deg)";
                });
                if (!isOpen) {
                  answer.style.maxHeight = answer.scrollHeight + 40 + "px";
                  icon.style.transform = "rotate(180deg)";
                }
              });
            });
          });
        `}</Script>
      </section>

      {/* Fongué FAQ */}
      <section id="fongue-faq" className="s-clients fongue-section">
        <div
          className="row section-header has-bottom-sep dark-sep wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-full">
            <h3 className="subhead subhead--gold">Häufige Fragen</h3>
            <h1 className="display-2 display-2--dark">Speed Training mit Rolf Fongué</h1>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Welche Voraussetzungen brauche ich, um ein Programm bei dir zu starten?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: '#d4af37', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>
                      Alles, was du brauchst, ist die Entschlossenheit, deine Grenzen zu überwinden!
                      Unser Speed-Coaching-Programm ist für alle Levels des Fussballs geeignet. Egal, ob
                      du ein erfahrener Athlet oder Einsteiger bist – wir passen das Programm an deine
                      Bedürfnisse an. Alles, was du tun musst, ist den ersten Schritt zu machen und dich
                      für eine transformative Reise anzumelden. Deine Entschlossenheit ist der
                      Schlüssel, und wir sind hier, um dich auf jedem Schritt des Weges zu unterstützen!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Wie lange dauert das Programm mit wie viel Zeitaufwand?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: '#d4af37', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>
                      Das Programm läuft über einen Zeitraum von 3 Monaten und wird vollständig über
                      eine App durchgeführt. Dabei analysieren wir kontinuierlich deine Fortschritte und
                      passen das Training individuell an. So stellen wir sicher, dass du effektiv
                      trainierst und optimale Ergebnisse erzielst.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="faq-item"
                style={{
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  className="faq-question"
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '18px 25px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--black)', fontSize: '1.8rem' }}>
                    Ist das Programm für Anfänger geeignet oder nur für erfahrene Läufer?
                  </h4>
                  <i
                    className="fa fa-chevron-down"
                    style={{ color: '#d4af37', transition: 'transform 0.3s' }}
                  ></i>
                </div>
                <div
                  className="faq-answer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '0 25px',
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  <div style={{ padding: '20px 0' }}>
                    <p>
                      Unser Speed Coaching Program ist für alle Levels geeignet. Wir wählen für dich ein
                      passendes Programm aus, um deine Höchstleistung zu steigern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <div className="final-cta-box">
                <h3>Bereit, deine Schnelligkeit aufs nächste Level zu bringen?</h3>
                <p>
                  Buche jetzt mit der Nachricht <strong>AMZIFOOTBALL10</strong> erhältst du{' '}
                  <strong>10% Rabatt</strong>!
                </p>
                <a
                  href="https://rolffongue.com/kontakt/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Buchen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Splide-Init für Galerie + Adnan-Slider */}
      <Script id="fc-splide-init" strategy="afterInteractive">{`
        document.addEventListener('DOMContentLoaded', function () {
          if (window.Splide && document.getElementById('splide')) {
            new Splide('#splide', { type: 'fade', rewind: true }).mount();
          }
          if (window.Splide && document.getElementById('adnan-splide')) {
            new Splide('#adnan-splide', {
              type: 'fade',
              rewind: true,
              autoplay: true,
              interval: 3000,
              pagination: true,
              arrows: true,
            }).mount();
          }
        });
      `}</Script>

      {/* Toggle Miki / Fongué */}
      <Script id="fc-view-toggle" strategy="afterInteractive">{`
        document.addEventListener('DOMContentLoaded', function() {
          const mikiToggle = document.getElementById('miki-toggle');
          const fongueToggle = document.getElementById('fongue-toggle');
          if (!mikiToggle || !fongueToggle) return;

          const urlParams = new URLSearchParams(window.location.search);
          const view = urlParams.get('view');

          if (view === 'fongue') {
            document.body.classList.add('show-fongue');
            fongueToggle.classList.add('active');
            mikiToggle.classList.remove('active');
          } else {
            document.body.classList.remove('show-fongue');
            mikiToggle.classList.add('active');
            fongueToggle.classList.remove('active');
          }

          mikiToggle.addEventListener('click', function() {
            document.body.classList.remove('show-fongue');
            mikiToggle.classList.add('active');
            fongueToggle.classList.remove('active');
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('view', 'miki');
            window.history.pushState({}, '', newUrl);
          });

          fongueToggle.addEventListener('click', function() {
            document.body.classList.add('show-fongue');
            fongueToggle.classList.add('active');
            mikiToggle.classList.remove('active');
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('view', 'fongue');
            window.history.pushState({}, '', newUrl);
          });
        });
      `}</Script>

      {/* Live-Slot-Verfügbarkeit aus Google Sheet */}
      <Script src="/js/fussballcamp-slots.js" strategy="afterInteractive" />
    </>
  )
}
