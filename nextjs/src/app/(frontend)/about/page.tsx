import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const about = await payload.findGlobal({ slug: 'about-page' })
  return {
    title:
      about?.seo?.title ||
      'Meine Geschichte – Miralem Amzi | Amzi Legacy Football Training',
    description:
      about?.seo?.description ||
      'Die Geschichte von Miralem Amzi: Vom FC Stäfa über GC Zürich bis zur Trainerkarriere mit UEFA C Lizenz. Erfahre mehr über seinen Weg im Schweizer Fussball.',
    keywords:
      'Miralem Amzi, Fussball, Trainer, Karriere, GC Zürich, Nationalmannschaft, Liverpool, BA Junioren, UEFA C Lizenz',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/about' },
    openGraph: {
      title: 'Meine Geschichte – Miralem Amzi | Amzi Legacy Football Training',
      description:
        'Erfahren Sie mehr über den Weg von Miralem Amzi, von seinen Anfängen als Spieler beim FC Stäfa über seine Zeit bei GC Zürich bis hin zu seiner Trainerkarriere.',
      url: 'https://www.amzilegacyfootballtraining.ch/about',
      type: 'profile',
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
      title: 'Meine Geschichte – Miralem Amzi',
      description:
        'Vom FC Stäfa über GC Zürich bis zur Trainerkarriere – die Geschichte von Miralem Amzi.',
      images: [
        'https://www.amzilegacyfootballtraining.ch/images/miki/google-logo-og.png',
      ],
    },
  }
}

export default async function AboutPage() {
  const payload = await getPayload({ config })
  const about = await payload.findGlobal({ slug: 'about-page' })
  const hero = about?.hero

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
            <h3>{hero?.subtitle ?? '#ChasingGoalsAndDreams'}</h3>
            <h1>{hero?.title ?? 'Meine Geschichte'}</h1>
          </div>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
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

      <section id="about" className="about-start">
        <div className="works__line" />
        <div className="intro-wrap">
          <div
            className="row section-header has-bottom-sep light-sep wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="col-full">
              <h3 className="subhead">Vom Spieler zum Trainer</h3>
              <h1 className="display-2 display-2--light">Meine Geschichte</h1>
            </div>
          </div>
          <div className="row">
            <div
              className="col-seven tab-full left footer-desc wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <p>
                Meine Fussballreise begann mit fünf Jahren beim FC Stäfa. Mit 10 wechselte ich zum
                Grasshoppers Club Zürich, durchlief alle Altersklassen bis zur U21 und spielte für
                die Schweizer Nationalmannschaft bis zur U18.
              </p>
              <p>
                Mein Traum, für Liverpool zu spielen, war beinahe Realität geworden. Beim
                Sprinttest für die Aufnahme in die Jugendakademie des Vereins habe ich mich jedoch
                muskulär verletzt und musste zwei Monate warten, bevor ich es erneut versuchen
                konnte. Doch kurz bevor ich wieder nach Liverpool gehen sollte, habe ich mir beim
                letzten Spiel mit den Grasshoppers Club Zürich einen Muskelfaserriss am Ansatz vom
                Knochen zugezogen und musste 5 Monate pausieren. Der Traum schien zum Greifen nah,
                doch wurde mir letztendlich wieder entrissen. Trotzdem bin ich stolz auf meine
                Erfahrungen und meinen Kampfgeist.{' '}
              </p>
              <p>
                Nachdem ich meine Fussballschuhe an den Nagel hängen musste, entschied ich mich
                als Fussballtrainer weiterzuentwickeln. Ich absolvierte 3 Trainerdiplome in 2
                Jahren und besitze die UEFA C Lizenz, während ich weiterhin nach einem höheren
                Diplom strebe. Mit meiner Mannschaft, den BA Junioren in Stäfa, durfte ich bereits
                Erfolge feiern, als wir in die höchste Liga, die Youth League, aufgestiegen sind.
                2026 wagte ich den nächsten Schritt meiner Trainerlaufbahn: Vom FC Stäfa wechselte
                ich zu Footrebel und übernahm als Haupttrainer die U14/15.
              </p>
              <p>
                Mein Ziel ist es, Spieler mit meinem Wissen auf ihre Höchstleistungen zu bringen,
                da ich selbst früher an Privattrainings teilgenommen habe und weiss, wie wichtig
                es ist, grosse Fortschritte zu erzielen.{' '}
              </p>
              <p>
                Die Erinnerungen an meine verlorenen Träume auf dem Spielfeld treiben mich jeden
                Tag an, um nun als Trainer anderen dabei zu helfen, ihre eigenen Träume zu
                verwirklichen.{' '}
              </p>
            </div>
            <div
              className="col-five tab-full content-center flex-column footer-desc wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <img
                className="square-image image-border-gold"
                src="/images/miki/miki-be-the-game.webp"
                alt="Miralem Amzi Staefa"
              />
              <h3 style={{ color: 'var(--white)' }}>Miralem Amzi</h3>
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
            <h3 className="subhead">Meine Karriere</h3>
            <h1 className="display-2">Meilensteine und Erfolge</h1>
          </div>
        </div>
        <div className="ag-timeline-block">
          <section className="ag-section">
            <div className="ag-format-container">
              <div className="js-timeline ag-timeline">
                <div className="js-timeline_line ag-timeline_line">
                  <div className="js-timeline_line-progress ag-timeline_line-progress" />
                </div>
                <div className="ag-timeline_list">
                  {[
                    {
                      img: 'miki-staefa-gruppenbild.webp',
                      alt: 'Miralem Amzi bei Staefa',
                      year: '2005 - 2010',
                      title: 'FC Stäfa',
                      desc: 'Start mit 5 Jahren bei FC Stäfa',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'u11-gc-portrait.webp',
                      alt: 'Miralem Amzi bei GC',
                      year: '2010',
                      title: 'GC Zürich U11',
                      desc: 'Aufnahme Nachwuchs GC Zürich',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'miki-kind-gc.webp',
                      alt: 'Miralem Amzi bei GC',
                      year: '2011',
                      title: 'GC Zürich U12',
                      desc: null,
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'cupfinal-u12.webp',
                      alt: 'Miralem Amzi bei GC',
                      year: '2012',
                      title: 'GC Zürich U13',
                      desc: 'Cupsieg',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'u13-gc-campus.webp',
                      alt: 'Miralem Amzi bei GC Campus',
                      year: '2013',
                      title: 'GC Zürich U14',
                      desc: null,
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'u15-sieg-vs-yb.webp',
                      alt: 'Miralem Amzi in U15',
                      year: '2014',
                      title: 'GC Zürich U15',
                      desc: 'Sieg gegen YB',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'nati-portrait.webp',
                      alt: 'Miralem Amzi bei der Nati',
                      year: '2015',
                      title: 'Schweizer Nationalmannschaft U16',
                      desc: 'Aufnahme Schweizer Nationalmannschaft',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'u16-cuphalbfinal-vs-fcz-penaltyschiessen-gewonnen.webp',
                      alt: 'Miralem Amzi im Cupfinal',
                      year: '2016',
                      title: 'GC Zürich U16',
                      desc: 'Sieg Viertelfinal gegen FCZ',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'miki-handshake.webp',
                      alt: 'Miralem Amzi GC Vertrag',
                      year: '2016',
                      title: 'GC Zürich Vertrag',
                      desc: 'Erster Spielervertrag mit 15 Jahren bei GC Zürich',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'miki-berater.webp',
                      alt: 'Miralem Amzi mit Berater',
                      year: '2016',
                      title: 'GC Zürich Vertrag',
                      desc: 'Ein Foto von meinem Berater Michael Aeschbacher und meinen Eltern bei der Vertragsunterzeichnung.',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'nike-vertrag-mit-15.webp',
                      alt: 'Miralem Amzi Nike Vertrag',
                      year: '2016',
                      title: 'Nikevertrag',
                      desc: 'Nikesponsoring mit 15 Jahren',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'cupfinal-gegen-basel.webp',
                      alt: 'Miralem Amzi im Cupfinal',
                      year: '2016',
                      title: 'GC Zürich U18',
                      desc: 'Cupsieg gegen FC Basel mit Trainer Johann Vogel',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: '1-spiel-vs-belgien-u17-erstes-tor.webp',
                      alt: 'Miralem Amzi in Nati',
                      year: '2016',
                      title: 'Schweizer Nationalmannschaft U17',
                      desc: 'Erstes Spiel und erstes Tor gegen Belgien. Ich spielte die EM-Qualifikation gegen Färöer, Tschechien, Serbien, Montenegro und Schottland.',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'nati-u17-mannschaft.webp',
                      alt: 'Miralem Amzi in Nati',
                      year: '2016',
                      title: 'Mannschaftsfoto U16',
                      desc: 'Mannschaftsfoto mit der U17 – EM gegen Färöer, Tschechien, Serbien, Montenegro und Schottland.',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'liverpool-probetraining.webp',
                      alt: 'Miralem Amzi bei Liverpool',
                      year: '2016',
                      title: 'Einladung Liverpool U18',
                      desc: '2016 erhielt ich ein Angebot von Liverpool FC für ein Probetraining. Leider scheiterte mein Traum, da ich mich beim Sprinttest verletzt habe.',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'anfield-stadion.webp',
                      alt: 'Miralem Amzi bei Liverpool',
                      year: '2016',
                      title: 'Foto vom Anfield Stadion',
                      desc: 'Im Rahmen meiner Einladung nach Liverpool durfte ich im legendären Anfield Stadion mich umschauen – dieses Foto entstand direkt vor Ort.',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'u18-nati-vs-gc.webp',
                      alt: 'Miralem Amzi bei Nati',
                      year: '2017',
                      title: 'Schweizer Nationalmannschaft U18',
                      desc: 'Testspiel gegen GC Zürich U21',
                      yearAlign: 'right',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'gc-spiel.webp',
                      alt: 'Miralem Amzi bei GC',
                      year: '2018 - 2022',
                      title: 'GC Zürich U21',
                      desc: 'Mein Traum, Profifussballer zu werden, platzte durch eine Hüft- und Schulteroperation während meiner Zeit bei der U21 des GC Zürich.',
                      yearAlign: 'right',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'staefa-aufstieg.webp',
                      alt: 'Miralem Amzi bei Staefa',
                      year: '2022',
                      title: 'Trainer FC Stäfa BA-Junioren',
                      desc: 'Seit 2022 bin ich Trainer der BA-Junioren des FC Stäfa. 2023 stiegen wir als Trio mit dem Trainerteam Gökhan Bayman und Arda Yilmaz in die Youth League auf.',
                      yearAlign: '',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'staefa-portrait.webp',
                      alt: 'Miralem Amzi bei Staefa',
                      year: '2024 - Dezember 2025',
                      title: 'Haupttrainer BA-Youth League',
                      desc: 'Haupttrainer der BA-Junioren des FC Stäfa.',
                      yearAlign: '',
                      animate: 'fadeInRight',
                    },
                    {
                      img: 'footrebel-trainerfoto.webp',
                      alt: 'Miralem Amzi bei Footrebel',
                      year: 'Januar 2026 - Heute',
                      title: 'Haupttrainer Footrebel U14/15',
                      desc: 'Haupttrainer Footrebel U14/15 in Uster.',
                      yearAlign: '',
                      animate: 'fadeInLeft',
                    },
                    {
                      img: 'footrebel-team.webp',
                      alt: 'Erstes Turnier mit Footrebel',
                      year: 'Januar 2026',
                      title: 'Erstes Turnier mit Footrebel',
                      desc: '1. Platz beim ersten Turnier mit Footrebel U14/15 – ein erfolgreicher Start mit dem neuen Team.',
                      yearAlign: '',
                      animate: 'fadeInRight',
                    },
                  ].map((item, i) => (
                    <div key={i} className="js-timeline_item ag-timeline_item">
                      <div className="ag-timeline-card_box">
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div className="ag-timeline-card_point" />
                        </div>
                        <div className="ag-timeline-card_meta-box" />
                      </div>
                      <div
                        className={`ag-timeline-card_item wow ${item.animate}`}
                        data-wow-duration="1s"
                        data-wow-delay="0.3s"
                      >
                        <div className="ag-timeline-card_inner">
                          <div className="ag-timeline-card_img-box">
                            <img
                              src={`/images/miki/${item.img}`}
                              className="ag-timeline-card_img"
                              width={640}
                              height={360}
                              alt={item.alt}
                            />
                          </div>
                          <div className="ag-timeline-card_info">
                            <h4 className={`year-title ${item.yearAlign}`}>{item.year}</h4>
                            <h3 className="year-subtitle">{item.title}</h3>
                            {item.desc ? (
                              <div className="ag-timeline-card_desc">
                                <p>{item.desc}</p>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="ag-timeline-card_arrow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Script id="about-jsonld-person" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Miralem Amzi",
            "alternateName": "Miki",
            "jobTitle": "Fussballtrainer",
            "worksFor": {
              "@type": "Organization",
              "name": "Amzi Legacy Football Training",
              "url": "https://www.amzilegacyfootballtraining.ch/"
            },
            "url": "https://www.amzilegacyfootballtraining.ch/about",
            "sameAs": [
              "https://www.instagram.com/amzifootballtraining/",
              "https://www.tiktok.com/@amzifootballtraining"
            ]
          }
        `}
      </Script>
      <Script id="about-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amzilegacyfootballtraining.ch/"},
              {"@type": "ListItem", "position": 2, "name": "Meine Geschichte", "item": "https://www.amzilegacyfootballtraining.ch/about"}
            ]
          }
        `}
      </Script>
      <Script id="about-timeline" strategy="afterInteractive">
        {`
          (function ($) {
            if (!window.jQuery) return;
            $(function () {
              var agTimeline = $('.js-timeline'),
                  agTimelineLine = $('.js-timeline_line'),
                  agTimelineLineProgress = $('.js-timeline_line-progress'),
                  agTimelinePoint = $('.js-timeline-card_point-box'),
                  agTimelineItem = $('.js-timeline_item'),
                  agOuterHeight = $(window).outerHeight(),
                  agHeight = $(window).height(),
                  agPosY = 0,
                  f = -1,
                  agFlag = false;

              function fnUpdateProgress() {
                var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
                var i = agTop + agPosY - $(window).scrollTop();
                var a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
                var n = agPosY - a + agOuterHeight / 2;
                if (i <= agPosY + agOuterHeight / 2) n = i - a;
                agTimelineLineProgress.css({ height: n + 'px' });
                agTimelineItem.each(function () {
                  var agTop = $(this).find(agTimelinePoint).offset().top;
                  (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight
                    ? $(this).addClass('js-ag-active')
                    : $(this).removeClass('js-ag-active');
                });
              }

              function fnUpdateWindow() {
                agFlag = false;
                if (!agTimelineItem.first().find(agTimelinePoint).offset()) return;
                agTimelineLine.css({
                  top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
                  bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
                });
                if (f !== agPosY) { f = agPosY; fnUpdateProgress(); }
              }

              function fnUpdateFrame() {
                if (!agFlag) requestAnimationFrame(fnUpdateWindow);
                agFlag = true;
              }

              $(window).on('scroll', function () {
                agPosY = $(window).scrollTop();
                fnUpdateFrame();
              });
              $(window).on('resize', function () {
                agPosY = $(window).scrollTop();
                agHeight = $(window).height();
                fnUpdateFrame();
              });
            });
          })(window.jQuery);
        `}
      </Script>
    </>
  )
}
