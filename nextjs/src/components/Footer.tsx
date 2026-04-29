import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function Footer() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const email = settings?.kontakt?.email ?? 'info@amzilegacyfootballtraining.ch'
  const phone = settings?.kontakt?.telefon ?? '+41 78 917 64 36'
  const phoneRaw = (settings?.kontakt?.whatsappNumber ?? '+41789176436').replace(/\s/g, '')

  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="row footer-main">
        <div className="col-1-2 tab-full left footer-desc">
          <h3 className="footer-title">Amzi Legacy Football Training</h3>
          <ul className="footer-nav__list">
            <li>
              <a href={`mailto:${email}`}>
                <i className="fas fa-envelope" /> {email}
              </a>
            </li>
            <li>
              <a href={`tel:${phoneRaw}`}>
                <i className="fas fa-phone" /> {phone}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/search/Umkreis+Z%C3%BCrichsee/@47.3130891,8.3683277,10z/data=!3m1!4b1?entry=ttu"
              >
                <i className="fas fa-map-marker-alt" /> Stäfa - Frohberg / Uerikon - Moritzberg
              </a>
            </li>
          </ul>
        </div>
        <div className="col-1-4 tab-full left footer-desc">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-nav__list">
            <li><Link href="/angebot">Angebot / Preise</Link></li>
            <li><Link href="/about">Meine Geschichte</Link></li>
            <li><Link href="/buchen">Buchen</Link></li>
          </ul>
        </div>
        <div className="col-1-4 tab-full left footer-desc">
          <h3 className="footer-title">Rechtliches</h3>
          <ul className="footer-nav__list">
            <li><Link href="/agb">AGB</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/impressum">Impressum</Link></li>
          </ul>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-twelve">
          <div className="copyright">
            <span>{year}</span>
            <span> &copy; Amzi Legacy Football Training</span>
            <span>
              Made with ❤️ by{' '}
              <a href="https://webtree.ch" target="_blank" rel="noreferrer">
                Webtree
              </a>
            </span>
          </div>
          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="fa-solid fa-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
