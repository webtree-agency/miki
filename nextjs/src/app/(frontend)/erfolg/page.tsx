import Link from 'next/link'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Erfolgsnachricht | Amzi Legacy Football Training',
    description: 'Angebot erfolgreich gebucht! Ich melde mich baldmöglichst bei dir.',
    alternates: { canonical: 'https://www.amzilegacyfootballtraining.ch/erfolg' },
    robots: { index: false, follow: false },
    openGraph: {
      title: 'Erfolgsnachricht | Amzi Legacy Football Training',
      description: 'Angebot erfolgreich gebucht! Ich melde mich baldmöglichst bei dir.',
      url: 'https://www.amzilegacyfootballtraining.ch/erfolg',
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
}

export default async function ErfolgPage() {
  const payload = await getPayload({ config })
  const erfolg = await payload.findGlobal({ slug: 'erfolg-page' })

  const title = erfolg?.title || 'ANGEBOT ERFOLGREICH GEBUCHT!'
  const message = erfolg?.message || 'Sie erhalten in Kürze eine Mailbestätigung'
  const ctaLabel = erfolg?.ctaLabel || 'Zurück zur Startseite'
  const ctaUrl = erfolg?.ctaUrl || '/'

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
            <h3>#startyourprocess</h3>
            <h1>{title}</h1>
            <h3>{message}</h3>
            <p
              style={{
                fontSize: '1.6rem',
                marginTop: '2rem',
                color: '#d4af37',
                fontWeight: 600,
              }}
            >
              ⚠️ Bitte prüfen Sie auch Ihren Junk/Spam-Ordner
            </p>
            {ctaUrl && ctaLabel ? (
              <div className="home-content__buttons" style={{ marginTop: '2rem' }}>
                <Link href={ctaUrl} className="btn btn--gold-full">
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
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
    </>
  )
}
