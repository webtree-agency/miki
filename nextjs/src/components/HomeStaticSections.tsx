import Script from 'next/script'

const galleryImages = [
  { src: '/images/new-gallery/trikots-sitzend.webp', alt: 'Trikots sitzend' },
  { src: '/images/new-gallery/eleni-mit-ball.webp', alt: 'Eleni Rittmann hält Ball' },
  { src: '/images/new-gallery/eleni-zur-seite.webp', alt: 'Eleni zur Seite' },
  { src: '/images/new-gallery/frau-model.webp', alt: 'Frau modelt' },
  { src: '/images/new-gallery/junge-model.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/nach-schwarzpink1-min.webp', alt: 'Frau modelt' },
  { src: '/images/new-gallery/pink2-min.webp', alt: 'Mädchen modelt' },
  { src: '/images/new-gallery/pink3-min.webp', alt: 'Mädchen modelt' },
  { src: '/images/new-gallery/mädchen-models.webp', alt: 'Mädchen modeln' },
  { src: '/images/new-gallery/nach-pink-blau1-min.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/blau2-min.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/nach-blau-zusammen-min.webp', alt: 'Team modelt' },
  { src: '/images/new-gallery/nach-blau-pink-miki-diesen-grun1-min.webp', alt: 'Junge spielt fussball' },
  { src: '/images/new-gallery/grun2-min.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/grun3-min.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/grun4-min.webp', alt: 'Jungs modeln' },
  { src: '/images/new-gallery/nach-grun-weiss1-min.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/weiss2-min.webp', alt: 'Junge modelt' },
  { src: '/images/new-gallery/miki-mit-2-anderen.webp', alt: 'Miralem Amzi mit zwei anderen' },
  { src: '/images/new-gallery/miki-mit-eleni.webp', alt: 'Miralem Amzi und Eleni Rittmann' },
]

const playerDevSlides = [
  { src: '/images/player-dev/kind-zuerich-rasen.webp', alt: 'Spielerentwicklung von Stäfa zu FC Zürich', label: 'Von FC Stäfa zu FC Zürich' },
  { src: '/images/player-dev/zwei-frauen-fcz.webp', alt: 'Spielerentwicklung von Stäfa zu FC Zürich', label: 'Von FC Stäfa zu FC Zürich' },
  { src: '/images/player-dev/francesco-footrebel.webp', alt: 'Spielerentwicklung von SV Höngg zu Footrebel', label: 'Von SV Höngg zu Footrebel' },
  { src: '/images/player-dev/gelbes-trikot-kind-footrebel.webp', alt: 'Spielerentwicklung von Stäfa zu Footrebel', label: 'Von FC Stäfa zu Footrebel' },
  { src: '/images/player-dev/kind-rappi-kunstrasen.webp', alt: 'Spielerentwicklung Wetzikon zu Rapperswil-Jona', label: 'Von FC Wetzikon zu FC Rapperswil-Jona' },
  { src: '/images/player-dev/francy-miki.webp', alt: 'Spielerentwicklung Footrebel zu FCZ', label: 'Von Footrebel zu FCZ' },
]

const sponsors = [
  { url: 'https://colacino.ch/', src: '/images/sponsors/COLACINO-logo-sponsor.svg', alt: 'Sponsor Logo Colacino Automobile' },
  { url: 'https://malervidas.ch/', src: '/images/sponsors/spescha-vidas-no-bg.png', alt: 'Spescha & Vidas AG' },
  { url: 'https://chezgaspi23.ch/index.html', src: '/images/sponsors/chez.webp', alt: 'Sponsor Logo Chez Gaspi' },
  { url: 'https://webtree.ch/', src: '/images/sponsors/webtree-logo.svg', alt: 'Sponsor Logo Webtree' },
]

const quotes = [
  { text: 'Wenn du nicht glaubst, dass du der Beste bist, wirst du niemals alles erreichen, wozu du fähig bist.', author: 'Cristiano Ronaldo' },
  { text: 'Wenn Menschen Erfolg haben, liegt das an harter Arbeit. Glück hat nichts mit Erfolg zu tun.', author: 'Diego Maradona' },
  { text: 'Ich beginne früh und bleibe spät, Tag für Tag, Jahr für Jahr. Es hat 17 Jahre und 114 Tage gedauert, bis ich über Nacht erfolgreich wurde.', author: 'Lionel Messi' },
  { text: 'Es gibt immer jemanden da draussen, der besser wird als du, indem er härter trainiert als du.', author: 'Pelé' },
  { text: 'Manchmal musst du Dinge tun, die andere für unmöglich halten, um das Unmögliche möglich zu machen.', author: 'Zinedine Zidane' },
]

export function GallerySection() {
  return (
    <section id="works" className="s-works pb-0">
      <div className="intro-wrap">
        <div className="row section-header has-bottom-sep light-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <h3 className="subhead">Einblick</h3>
            <h1 className="display-2 display-2--light">Amzi Legacy Gallerie</h1>
          </div>
        </div>
        <div className="custom-splide-container">
          <div id="splide" className="splide custom-splide">
            <div className="splide__track custom-splide-track">
              <ul className="splide__list">
                {galleryImages.map((img, i) => (
                  <li key={i} className="splide__slide">
                    {i === 0 ? (
                      <img className="image-border-gold" src={img.src} alt={img.alt} />
                    ) : (
                      <img className="image-border-gold" data-splide-lazy={img.src} alt={img.alt} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Script id="gallery-splide" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function () {
            if (window.Splide && document.querySelector('#splide')) {
              new Splide('#splide', {
                type: 'fade',
                rewind: true,
                lazyLoad: 'nearby',
                preloadPages: 1,
              }).mount();
            }
          });
        `}
      </Script>
    </section>
  )
}

export function PlayerDevSection() {
  return (
    <section id="player-development" className="s-works">
      <div className="intro-wrap">
        <div className="row section-header has-bottom-sep light-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="col-full">
            <h3 className="subhead">Spielerentwicklung</h3>
            <h1 className="display-2 display-2--light">Erfolgreiche Entwicklung meiner Spieler/innen</h1>
          </div>
        </div>
        <div className="custom-splide-container">
          <div id="player-development-splide" className="splide custom-splide">
            <div className="splide__track custom-splide-track">
              <ul className="splide__list">
                {playerDevSlides.map((s, i) => (
                  <li key={i} className="splide__slide">
                    <div className="player-dev-slide">
                      {i === 0 ? (
                        <img className="image-border-gold" src={s.src} alt={s.alt} />
                      ) : (
                        <img className="image-border-gold" data-splide-lazy={s.src} alt={s.alt} />
                      )}
                      <p className="player-dev-label">{s.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Script id="player-dev-splide" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function () {
            if (window.Splide && document.getElementById('player-development-splide')) {
              new Splide('#player-development-splide', {
                type: 'fade',
                rewind: true,
                lazyLoad: 'nearby',
                preloadPages: 1,
              }).mount();
            }
          });
        `}
      </Script>
    </section>
  )
}

export function SponsorSection() {
  return (
    <section id="sponsor" className="s-sponsor">
      <div className="row section-header fadeInUp has-bottom-sep light-sep" data-wow-duration="1s" data-wow-delay="0.3s">
        <div className="col-full wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <h3 className="subhead subhead--dark">Sponsoren</h3>
          <h1 className="display-2 display-2--light">Danke für die Unterstützung</h1>
        </div>
      </div>
      <div className="sponsor-container">
        <div className="sponsor-grid wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          {sponsors.map((s, i) => (
            <div key={i} className="sponsor-item">
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <img src={s.src} alt={s.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QuotesSection() {
  return (
    <section id="quotes" className="s-clients">
      <div className="row section-header has-bottom-sep dark-sep wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
        <div className="col-full">
          <h3 className="subhead subhead--gold">Zitate</h3>
          <h1 className="display-2 display-2--dark">Verfolge deinen Traum</h1>
        </div>
      </div>
      <div className="row clients-testimonials wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
        <div className="col-full">
          <div className="testimonials">
            {quotes.map((q, i) => (
              <div key={i} className="testimonials__slide">
                <p>&ldquo;{q.text}&rdquo;</p>
                <div className="testimonials__info">
                  <span className="testimonials__name">{q.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
