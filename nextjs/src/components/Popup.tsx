import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function Popup() {
  const payload = await getPayload({ config })
  const camp = await payload.findGlobal({ slug: 'fussballcamp-page' })
  const ausgebucht = camp?.ausgebucht?.campAusgebucht ?? true
  const zeitraum = camp?.hero?.datumsBereich ?? 'Montag, 27. April - Freitag 1. Mai 2026'

  return (
    <div id="popup" className="popup">
      <span id="close-popup" className="close">
        <i className="fas fa-xmark" />
      </span>
      <div className="popup-content">
        <h3>Fussballcamp {zeitraum}</h3>
        <p>{ausgebucht ? 'Ausgebucht' : 'Online Buchung möglich'}</p>
        <div className="popup-buttons">
          {ausgebucht ? (
            <button className="btn btn--gold-full disabled" disabled>
              Ausgebucht
            </button>
          ) : (
            <Link href="/buchen" className="btn btn--gold-full">
              Jetzt buchen
            </Link>
          )}
          <Link href="/fussballcamp" className="btn btn--grey">
            Mehr Infos
          </Link>
        </div>
      </div>
    </div>
  )
}
