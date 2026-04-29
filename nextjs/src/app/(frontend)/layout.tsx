import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner, Preloader, Pswp } from '@/components/CookieBanner'
import { Popup } from '@/components/Popup'
import { Scripts } from '@/components/Scripts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amzi Legacy Football Training',
  description:
    'Erstklassige Fussballtrainings in Stäfa, Uerikon und Bubikon. Werde Teil von Amzi Legacy.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amzilegacyfootballtraining.ch'),
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="no-js">
      <head>
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/animated.css" />
        <link rel="stylesheet" href="/css/fonts.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/svg/favicon.svg" type="image/x-icon" />
        <link rel="icon" href="/svg/favicon.svg" type="image/x-icon" />
      </head>
      <body id="top">
<Header />
        {children}
<Footer />
        <Pswp />
        <Preloader />
        <CookieBanner />
<Popup />
        <Scripts />
      </body>
    </html>
  )
}
