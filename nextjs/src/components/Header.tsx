import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

type NavItem = { label: string; url: string; badge?: string | null }

export async function Header() {
  const payload = await getPayload({ config })
  const headerData = await payload.findGlobal({ slug: 'header' })
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  const navItems = (headerData?.navItems as NavItem[] | undefined) ?? []
  const ig = settings?.social?.instagram
  const tt = settings?.social?.tiktok
  const wa = settings?.kontakt?.whatsappNumber

  return (
    <header className="s-header">
      <div className="header-logo">
        <Link className="site-logo" href="/">
          <img src="/svg/logo-text.svg" alt="Amzi Legacy Football Training logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <a href="#0" className="header-nav__close" title="close">
          <span>Close</span>
        </a>
        <div className="header-nav__content">
          <h3>Navigation</h3>
          <ul className="header-nav__list">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  {item.label}
                  {item.badge ? (
                    <span className="new-tag-navbar"> {item.badge}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="header-nav__social">
            {ig && (
              <li>
                <a href={ig} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
            )}
            {tt && (
              <li>
                <a href={tt} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-tiktok" />
                </a>
              </li>
            )}
            {wa && (
              <li>
                <a href={`https://wa.me/${wa.replace(/[^+\d]/g, '')}`} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <a className="header-menu-toggle" href="#0">
        <span className="header-menu-text">Menu</span>
        <span className="header-menu-icon" />
      </a>
    </header>
  )
}
