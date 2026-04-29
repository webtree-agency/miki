import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Angebot & Preise – Fussballtraining Stäfa, Uerikon, Bubikon | Amzi Legacy',
    description:
      'Hallen-, Rasen-, Kombi- und Camp-Training in Stäfa, Uerikon und Bubikon. Einzel- und Gruppentrainings für Kinder, Jugendliche und Erwachsene. Inkl. Geburtstags-Special.',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/angebot' },
  }
}

export default function AngebotPage() {
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
            <h3>#hardworkbeatstalent</h3>
            <h1>ANGEBOT</h1>
          </div>
          <div className="home-content__scroll">
            <a href="#services" className="scroll-link smoothscroll">
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
                <h3 className="subhead">Angebote</h3>
                <h1 className="display-2">
                  Meine Premium-<span className="nowrap">Trainingsangebote</span>
                </h1>
              </div>
            </div>

            <div
              className="btn-container align-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <button
                type="button"
                className="btn btn--gold-camp max"
                data-pricing="talentcamp"
              >
                Fussballcamp
              </button>
              <button
                type="button"
                className="btn btn--white max badge-small"
                data-pricing="hallentraining"
              >
                Hallen-Training
              </button>
              <button
                type="button"
                className="btn btn--white max"
                data-pricing="rasen"
              >
                Rasen-Training
              </button>
              <button
                type="button"
                className="btn btn--white max"
                data-pricing="indoor"
              >
                Indoor-Fussball
              </button>
              <button
                type="button"
                className="btn btn--white max"
                data-pricing="camp"
              >
                Geburtstag-Special
              </button>
            </div>

            <div className="pricing-container pricing-container-background">
              <div
                className="pricing-row wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                {/* Fussballcamp / Talentcamp */}
                <div className="pricing-col" id="talentcamp-card">
                  <div className="wrap-price">
                    <div>
                      <h3 className="service-title">
                        Fussballcamp
                        <br />
                        27. April - 1. Mai 2026
                      </h3>
                      <h5 className="location-service">
                        <i className="fas fa-map-marker-alt" /> Frohberg in Stäfa
                      </h5>
                      <h5 className="price-reduction">
                        <i className="fa-solid fa-clock" /> Montag bis Freitag 09:00 bis 12:00
                        Uhr
                      </h5>
                      <h5 className="service-pricing">
                        <i className="fa-solid fa-futbol" /> Limitierte Anzahl - 16 Spieler pro
                        Gruppe
                      </h5>
                      <div className="pricing-table-container">
                        <table className="pricing-table gold-table">
                          <tbody>
                            <tr>
                              <th>Gruppe</th>
                              <th>Alter</th>
                              <th>Uhrzeit</th>
                              <th>Kosten</th>
                              <th>Trikotfarbe</th>
                            </tr>
                            <tr>
                              <td>Kids 1</td>
                              <td>6-9 Jahre</td>
                              <td>09:00 - 10:00</td>
                              <td>180 CHF</td>
                              <td>Rot &amp; Gold</td>
                            </tr>
                            <tr>
                              <td>Kids 2</td>
                              <td>10-13 Jahre</td>
                              <td>10:00 - 11:00</td>
                              <td>180 CHF</td>
                              <td>Rot &amp; Gold</td>
                            </tr>
                            <tr style={{ color: '#999' }}>
                              <td>
                                Kids 3 / Mädchen{' '}
                                <span
                                  style={{
                                    fontSize: '0.75em',
                                    color: '#e74c3c',
                                    fontWeight: 600,
                                  }}
                                >
                                  (ausgebucht)
                                </span>
                              </td>
                              <td>10-13 Jahre</td>
                              <td>11:00 - 12:00</td>
                              <td>180 CHF</td>
                              <td>Rot &amp; Gold</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <i className="info-pricing">
                        Scroll nach links, um weitere Details zu sehen!
                      </i>
                      <button
                        type="button"
                        className="btn btn--gold-full schedule-button disabled"
                        disabled
                      >
                        Ausgebucht
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hallen-Training */}
                <div className="pricing-col" id="hallentraining-card">
                  <div className="wrap-price">
                    <div>
                      <h3 className="service-title">Hallen-Training</h3>
                      <div className="sold-out-badge">
                        <span>Ausgebucht bis 31.05.2026</span>
                      </div>
                      <h5 className="location-service">
                        <i className="fas fa-map-marker-alt" /> Sporthalle Uerikon / Moritzberg
                      </h5>
                      <h5 className="price-reduction font-italic">Dauer 60 Minuten</h5>
                      <h5 className="price-reduction">
                        <i className="fa-solid fa-futbol" /> Limitierte Anzahl und nur samstags
                        von 8:00 bis 12:00 Uhr.
                      </h5>
                      <h5 className="service-pricing">
                        <i className="fa-solid fa-shirt" /> 1x kostenloses Trikot für jedes Abo
                        (Rot &amp; Gold)
                      </h5>
                      <div className="pricing-table-container">
                        <table className="pricing-table gold-table">
                          <tbody>
                            <tr>
                              <th>Einzeltraining</th>
                              <th>Training zu zweit</th>
                              <th>Training zu dritt</th>
                            </tr>
                            <tr>
                              <td>Einmalig 120.-</td>
                              <td>Einmalig 60.- pro Person</td>
                              <td>Einmalig 40.- pro Person</td>
                            </tr>
                            <tr>
                              <td>6er Abo 690.-</td>
                              <td>6er Abo 345.- pro Person</td>
                              <td>6er Abo 230.- pro Person</td>
                            </tr>
                            <tr>
                              <td>10er Abo 1100.-</td>
                              <td>10er Abo 550.- pro Person</td>
                              <td>10er Abo 365.- pro Person</td>
                            </tr>
                            <tr>
                              <td>15er Abo 1590.-</td>
                              <td>15er Abo 795.- pro Person</td>
                              <td>15er Abo 530.- pro Person</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <i className="info-pricing">
                        Scroll nach links, um weitere Details zu sehen!
                      </i>
                      <button
                        type="button"
                        className="btn btn--gold-full schedule-button disabled"
                        disabled
                      >
                        Ausgebucht
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rasen-Training */}
                <div className="pricing-col" id="rasen-card">
                  <div className="wrap-price">
                    <div>
                      <h3 className="service-title">Rasen-Training</h3>
                      <div className="sold-out-badge">
                        <span>Ausgebucht bis 31.05.2026</span>
                      </div>
                      <h5 className="location-service">
                        <i className="fas fa-map-marker-alt" /> Stäfa, Frohberg
                      </h5>
                      <h5 className="price-reduction font-italic">Dauer 60 Minuten</h5>
                      <h5 className="price-reduction">
                        <i className="fa-solid fa-futbol" /> Limitierte Anzahl und nur mittwochs
                        von 14:00 bis 17:30 Uhr.
                      </h5>
                      <h5 className="service-pricing">
                        <i className="fa-solid fa-shirt" /> 1x kostenloses Trikot für jedes Abo
                        (Rot &amp; Gold)
                      </h5>
                      <div className="pricing-table-container">
                        <table className="pricing-table gold-table">
                          <tbody>
                            <tr>
                              <th>Einzeltraining</th>
                              <th>Training zu zweit</th>
                              <th>Training zu dritt</th>
                            </tr>
                            <tr>
                              <td>Einmalig 120.-</td>
                              <td>Einmalig 60.- pro Person</td>
                              <td>Einmalig 40.- pro Person</td>
                            </tr>
                            <tr>
                              <td>6er Abo 690.-</td>
                              <td>6er Abo 345.- pro Person</td>
                              <td>6er Abo 230.- pro Person</td>
                            </tr>
                            <tr>
                              <td>10er Abo 1100.-</td>
                              <td>10er Abo 550.- pro Person</td>
                              <td>10er Abo 365.- pro Person</td>
                            </tr>
                            <tr>
                              <td>15er Abo 1590.-</td>
                              <td>15er Abo 795.- pro Person</td>
                              <td>15er Abo 530.- pro Person</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <i className="info-pricing">
                        Scroll nach links, um weitere Details zu sehen!
                      </i>
                      <button
                        type="button"
                        className="btn btn--gold-full schedule-button disabled"
                        disabled
                      >
                        Ausgebucht
                      </button>
                    </div>
                  </div>
                </div>

                {/* Indoor-Fussball */}
                <div className="pricing-col" id="indoor-card">
                  <div className="wrap-price">
                    <div>
                      <h3 className="service-title">Indoor-Fussball</h3>
                      <div className="sold-out-badge">
                        <span>Ausgebucht bis 31.05.2026</span>
                      </div>
                      <h5 className="location-service">
                        <i className="fas fa-map-marker-alt" /> Padelwerk Bubikon
                      </h5>
                      <h5 className="price-reduction font-italic">Dauer 60 Minuten</h5>
                      <h5 className="price-reduction">
                        <i className="fa-solid fa-futbol" /> Jeden Sonntag von 11:00 bis 20:00
                        Uhr
                      </h5>
                      <h5 className="price-reduction">
                        <i className="fa-solid fa-shirt" /> 1x kostenloses Trikot (Rot &amp;
                        Gold) für jeden Aboabschluss
                      </h5>
                      <h5 className="service-pricing">
                        <i className="fa-solid fa-glass-water" /> Getränke vor Ort (selbst zu
                        bezahlen)
                      </h5>
                      <div className="pricing-table-container">
                        <table className="pricing-table gold-table">
                          <tbody>
                            <tr>
                              <th>Training</th>
                              <th>Einmalig</th>
                              <th>6er Abo</th>
                              <th>10er Abo</th>
                              <th>15er Abo</th>
                            </tr>
                            <tr>
                              <td>Einzeltraining</td>
                              <td>120 CHF</td>
                              <td>
                                690 CHF
                                <br />
                                (115 CHF/Session)
                              </td>
                              <td>
                                1&apos;100 CHF
                                <br />
                                (110 CHF/Session)
                              </td>
                              <td>
                                1&apos;590 CHF
                                <br />
                                (106 CHF/Session)
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Training zu zweit
                                <br />
                                (pro Person)
                              </td>
                              <td>60 CHF</td>
                              <td>
                                345 CHF
                                <br />
                                (57.50 CHF/Session)
                              </td>
                              <td>
                                550 CHF
                                <br />
                                (55 CHF/Session)
                              </td>
                              <td>
                                795 CHF
                                <br />
                                (53 CHF/Session)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <i className="info-pricing">
                        Scroll nach links, um weitere Details zu sehen!
                      </i>
                      <button
                        type="button"
                        className="btn btn--gold-full schedule-button disabled"
                        disabled
                      >
                        Ausgebucht
                      </button>
                    </div>
                  </div>
                </div>

                {/* Geburtstag-Special */}
                <div className="pricing-col" id="camp-card">
                  <div className="wrap-price">
                    <div>
                      <h3 className="service-title">Geburtstag-Special</h3>
                      <h5 className="location-service">
                        <i className="fas fa-map-marker-alt" /> Halle, Uerikon Kunstrasen, Stäfa
                        Indoor Kunstrasen, Bubikon
                      </h5>
                      <h5 className="price-reduction font-italic">
                        <i className="fa-solid fa-gift" /> Das Geburtstagskind nimmt kostenlos
                        teil!
                      </h5>
                      <h5 className="price-reduction">
                        <i className="fa-solid fa-clock" /> Terminvereinbarung auf Anfrage.
                      </h5>
                      <h5 className="service-pricing">
                        <i className="fa-solid fa-shirt" /> 1x kostenloses Trikot für das
                        Geburtstagskind
                      </h5>
                      <div className="pricing-table-container">
                        <table className="pricing-table gold-table">
                          <tbody>
                            <tr>
                              <th>Teilnehmerzahl</th>
                              <th>Dauer</th>
                              <th>Preis pro Person</th>
                            </tr>
                            <tr>
                              <td>Mind. 5 Kinder</td>
                              <td>60 Minuten</td>
                              <td>
                                CHF 25.- pro Kind <br /> Geburtstagskind kostenlos!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <i className="info-pricing">
                        Scroll nach links, um weitere Details zu sehen!
                      </i>
                      <Link
                        href="/buchen?product=geburtstag"
                        className="btn btn--gold-full schedule-button"
                      >
                        jetzt buchen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="angebot-toggle" strategy="afterInteractive">
        {`
(function () {
  var validTypes = ['hallentraining', 'rasen', 'indoor', 'talentcamp', 'camp'];

  var backgroundImages = {
    hallentraining: '/images/angebote/halle-bg.webp',
    rasen: '/images/angebote/rasen-bg.webp',
    indoor: '/images/angebote/trikot-cover-laptop-bw.webp',
    talentcamp: '/images/angebote/trikot-cover-laptop-bw.webp',
    camp: '/images/angebote/sprints-black-white.webp'
  };
  var backgroundImagesMobile = {
    hallentraining: '/images/angebote/halle-bg-handy.webp',
    rasen: '/images/angebote/rasen-bg-handy.webp',
    indoor: '/images/angebote/trikot-cover-phone-bw.webp',
    talentcamp: '/images/angebote/trikot-cover-phone-bw.webp',
    camp: '/images/angebote/sprints-black-white.webp'
  };

  function showPricing(pricingType) {
    if (validTypes.indexOf(pricingType) === -1) pricingType = 'talentcamp';

    try {
      var urlParams = new URLSearchParams(window.location.search);
      urlParams.set('filter', pricingType);
      history.pushState(null, '', '?' + urlParams.toString());
    } catch (e) {}

    var cards = document.querySelectorAll('.pricing-col');
    cards.forEach(function (card) { card.style.display = 'none'; });
    var selectedCard = document.getElementById(pricingType + '-card');
    if (selectedCard) selectedCard.style.display = 'block';

    var buttons = document.querySelectorAll('.btn-container button[data-pricing]');
    buttons.forEach(function (button) {
      var t = button.getAttribute('data-pricing');
      button.classList.remove('btn--gold-camp', 'btn--white', 'active');
      if (t === pricingType) {
        button.classList.add('btn--gold-camp', 'max', 'active');
      } else {
        button.classList.add('btn--white', 'max');
      }
    });

    var backgroundSection = document.querySelector('.background-section');
    function updateBackgroundImage() {
      var windowWidth = window.innerWidth;
      var images = windowWidth >= 768 ? backgroundImages : backgroundImagesMobile;
      if (backgroundSection && images[pricingType]) {
        backgroundSection.style.backgroundImage = 'url(' + images[pricingType] + ')';
      }
    }
    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
  }

  window.showPricing = showPricing;

  function init() {
    var buttons = document.querySelectorAll('.btn-container button[data-pricing]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        showPricing(button.getAttribute('data-pricing'));
      });
    });

    var urlParams;
    try { urlParams = new URLSearchParams(window.location.search); } catch (e) {}
    var filterParam = urlParams ? urlParams.get('filter') : null;
    var initialPricingType = validTypes.indexOf(filterParam) !== -1 ? filterParam : 'talentcamp';
    showPricing(initialPricingType);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
        `}
      </Script>

      <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
        {`{"@context":"https://schema.org","@type":"Service","serviceType":"Fussballtraining","provider":{"@type":"SportsActivityLocation","name":"Amzi Legacy Football Training","url":"https://www.amzilegacyfootballtraining.ch/","telephone":"+41789176436","email":"info@amzilegacyfootballtraining.ch","address":{"@type":"PostalAddress","addressLocality":"Stäfa","addressRegion":"ZH","postalCode":"8712","addressCountry":"CH"}},"areaServed":[{"@type":"City","name":"Stäfa"},{"@type":"City","name":"Uerikon"},{"@type":"City","name":"Bubikon"},{"@type":"City","name":"Hombrechtikon"}],"url":"https://www.amzilegacyfootballtraining.ch/angebot","hasOfferCatalog":{"@type":"OfferCatalog","name":"Trainingsangebote","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hallen-Training"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Rasen-Training"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Kombi-Training"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Indoor-Fussball Bubikon"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Fussballcamp"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Geburtstags-Special"}}]}}`}
      </Script>
      <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.amzilegacyfootballtraining.ch/"},{"@type":"ListItem","position":2,"name":"Angebot & Preise","item":"https://www.amzilegacyfootballtraining.ch/angebot"}]}`}
      </Script>
    </>
  )
}
