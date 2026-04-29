'use client'

import { useEffect, useRef } from 'react'

type AngebotOption = { wert: string; label: string; deaktiviert?: boolean }
type GruppenOption = { slotId: string; name: string; zeit?: string }

type Props = {
  angeboteOptions: AngebotOption[]
  gruppen: GruppenOption[]
  campAusgebucht: boolean
}

export default function BuchenForm({ angeboteOptions, gruppen, campAusgebucht }: Props) {
  const formLoadTimeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (formLoadTimeRef.current) {
      formLoadTimeRef.current.value = String(Date.now())
    }

    // URL-Parameter Vorauswahl
    const urlParams = new URLSearchParams(window.location.search)
    const product = urlParams.get('product')
    const productMap: Record<string, string> = {
      'indoor-fussball': 'Indoor-Fussball',
      fussballcamp: 'Talent-Camp',
      'hallen-training': 'Hallen-Training',
      'rasen-training': 'Rasen-Training',
      geburtstag: 'Geburtstag-Special',
    }
    if (product && productMap[product]) {
      const angebotSelect = document.getElementById('gewähltes Angebot') as HTMLSelectElement | null
      if (angebotSelect) {
        angebotSelect.value = productMap[product]
        angebotSelect.dispatchEvent(new Event('change'))
      }
    }
  }, [])

  return (
    <form
      action="https://usebasin.com/f/10df9acad9fc"
      method="POST"
      name="contactForm"
      id="contactFormBuchen"
    >
      {/* Honeypot */}
      <div style={{ display: 'none' }}>
        <label htmlFor="goldfield">Lass dieses Feld leer</label>
        <input type="text" name="_goldfield123" id="goldfield" autoComplete="off" />
      </div>

      <input type="hidden" id="formLoadTime" name="formLoadTime" ref={formLoadTimeRef} />
      {/* Hidden field for slot_id (wird nur bei Fussballcamp verwendet) */}
      <input type="hidden" id="slot-id-hidden" name="slot_id" defaultValue="" />

      <div className="form-group">
        <h4>Persönliche Angaben (Elternteil)</h4>
        <div className="form-field">
          <input
            name="Name"
            type="text"
            id="Name"
            placeholder="Name Elternteil"
            minLength={2}
            className="full-width"
            required
          />
        </div>
        <div className="form-field">
          <input
            name="email"
            type="email"
            id="email"
            placeholder="E-Mail"
            className="full-width"
            required
          />
        </div>
        <div className="form-field">
          <input
            name="Telefonnummer"
            type="tel"
            id="Telefonnummer"
            placeholder="Telefonnummer"
            className="full-width"
            required
          />
        </div>
        {/* Adresse (nur für Fussballcamp) */}
        <div className="form-field" id="adresse-strasse" style={{ display: 'none' }}>
          <input
            name="Strasse"
            type="text"
            id="Strasse"
            placeholder="Strasse und Hausnummer"
            className="full-width"
          />
        </div>
        <div className="form-field" id="adresse-plz-ort" style={{ display: 'none' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input name="PLZ" type="text" id="PLZ" placeholder="PLZ" style={{ width: '30%' }} />
            <input name="Ort" type="text" id="Ort" placeholder="Ort" style={{ width: '70%' }} />
          </div>
        </div>
      </div>

      {/* Training Selection */}
      <div className="form-group">
        <h4>Training Auswahl</h4>
        <div className="form-field">
          <label htmlFor="gewähltes Angebot">Trainingsart</label>
          <select
            name="gewähltes Angebot"
            id="gewähltes Angebot"
            className="full-width select-text"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            {angeboteOptions.map((opt) => {
              const isCamp = opt.wert === 'Talent-Camp'
              const disabled = !!opt.deaktiviert || (isCamp && campAusgebucht)
              return (
                <option
                  key={opt.wert}
                  value={opt.wert}
                  className={isCamp ? 'fussballcamp-option' : undefined}
                  disabled={disabled}
                >
                  {opt.label}
                </option>
              )
            })}
          </select>
          <p
            id="indoor-hinweis"
            style={{
              display: 'none',
              marginTop: '1rem',
              padding: '1.2rem',
              background: 'rgba(193, 167, 81, 0.15)',
              borderLeft: '3px solid var(--primary-gold)',
              fontSize: '1.5rem',
              color: 'var(--primary-gold)',
            }}
          >
            <i className="fa fa-info-circle" /> Bis 30. April 2026 ausgebucht, danach nach Absprache
            möglich. Bitte gewünschtes Datum in der Nachricht vermerken.
          </p>
        </div>
        <div className="form-field">
          <label htmlFor="Standort">Standort</label>
          <select
            name="Standort"
            id="Standort"
            className="full-width select-text"
            required
            disabled
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            <option value="Stäfa">Stäfa</option>
            <option value="Hombrechtikon">Moritzberg</option>
          </select>
        </div>
      </div>

      {/* Regular Training Options */}
      <div className="form-group" id="regular-training-options">
        <h4>Trainingsoptionen</h4>
        <div className="form-field" id="personen-div">
          <label htmlFor="Anzahl Personen">Anzahl Personen</label>
          <select
            name="Anzahl Personen"
            id="Anzahl Personen"
            className="full-width select-text"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            <option value="Einzeltraining">Einzeltraining</option>
            <option value="Training zu zweit">Training zu zweit</option>
            <option value="Training zu dritt">Training zu dritt</option>
          </select>
        </div>
        <div className="form-field" id="abo-div">
          <label htmlFor="gewähltes Abo">Abo</label>
          <select
            name="gewähltes Abo"
            id="gewähltes Abo"
            className="full-width select-text"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            <option value="Einmaliges-Training">Einmaliges-Training</option>
            <option value="6er Abo">6er Abo</option>
            <option value="10er Abo">10er Abo</option>
            <option value="15er Abo">15er Abo</option>
          </select>
        </div>
      </div>

      {/* Birthday Special Options */}
      <div className="form-group" id="birthday-special-options" style={{ display: 'none' }}>
        <h4>Geburtstag Special</h4>
        <div className="form-field" id="terminwunsch-geburtstag">
          <label htmlFor="Terminwunsch">Wunschtermin</label>
          <input
            name="Terminwunsch"
            type="datetime-local"
            id="Terminwunsch"
            className="termin-input w-100"
            required
          />
        </div>
        <div className="form-field" id="teilnehmer-geburtstag">
          <label htmlFor="geburtstag-personen">Anzahl Teilnehmer</label>
          <input
            type="number"
            name="Anzahl Teilnehmer"
            id="geburtstag-personen"
            placeholder="Min. 5 Teilnehmer"
            className="full-width"
            min={5}
          />
        </div>
      </div>

      {/* Fussballcamp Options */}
      <div className="form-group" id="talentcamp-options" style={{ display: 'none' }}>
        <h4>Fussballcamp Info</h4>
        <div className="form-field">
          <p className="talentcamp-info">
            Das Fussballcamp findet vom 27. April bis 1. Mai 2026, Montag bis Freitag in Stäfa
            statt.
          </p>
          <p className="talentcamp-info" style={{ marginTop: '10px' }}>
            <strong>Wichtig:</strong> Die Trainingskleidung erhalten die Kinder direkt beim ersten
            Training.
          </p>
        </div>
        <div className="form-field">
          <label htmlFor="talentcamp-gruppe">Gruppe &amp; Uhrzeit</label>
          <select
            name="Fussballcamp Gruppe"
            id="talentcamp-gruppe"
            className="full-width select-text"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            {gruppen.length > 0 ? (
              gruppen.map((g) => (
                <option key={g.slotId} value={g.slotId} disabled={campAusgebucht}>
                  {g.zeit ? `${g.name} (${g.zeit})` : g.name}
                  {campAusgebucht ? ' - Ausgebucht' : ''}
                </option>
              ))
            ) : (
              <>
                <option value="kids1_09_10" disabled={campAusgebucht}>
                  Kids 1 (6-9 Jahre, 09:00-10:00 Uhr) - Lädt...
                </option>
                <option value="kids2_10_11" disabled={campAusgebucht}>
                  Kids 2 (10-13 Jahre, 10:00-11:00 Uhr) - Lädt...
                </option>
                <option value="kids3_11_12" disabled={campAusgebucht}>
                  Kids 3 / Mädchen (10-13 Jahre, 11:00-12:00 Uhr) - Lädt...
                </option>
              </>
            )}
          </select>
        </div>
      </div>

      {/* Player Information */}
      <div className="form-group" id="player-info">
        <h4>Spielerinformationen</h4>
        <div className="form-field">
          <input
            name="Spieler Name"
            type="text"
            id="Spieler Name"
            placeholder="Name des Spielers"
            minLength={2}
            className="full-width"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="trikot-groesse">Trikot - Kindergrösse</label>
          <select
            name="Trikot Grösse"
            id="trikot-groesse"
            className="full-width select-text"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen...
            </option>
            <option value="6-9-Jahre-Grösse-140">6-9 Jahre - Grösse 140</option>
            <option value="10-13-Jahre-Grösse-160">10-13 Jahre - Grösse 160</option>
          </select>
        </div>
      </div>

      {/* Additional Message */}
      <div className="form-group">
        <h4>Zusätzliche Informationen</h4>
        <div className="form-field">
          <textarea
            name="Nachricht"
            id="Nachricht"
            placeholder="Hast du noch Fragen oder Anmerkungen?"
            rows={5}
            className="full-width"
          />
        </div>
      </div>

      <button type="submit" className="full-width btn--primary" disabled={campAusgebucht}>
        Jetzt Buchen
      </button>
    </form>
  )
}
