/**
 * Fussballcamp Buchungslogik
 * Sendet Buchungen direkt an Google Apps Script
 */

(function() {
    'use strict';

    // ⚠️ KONFIGURATION - BEREITS EINGETRAGEN!
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8cNTkXf-lB-v1Qbnlg0eQ9qmNhuT7fURhRZQgOegDnNsCttpeJToUmpnjceAd9ZcrjQ/exec';

    // Buchung erst ab 01.01.2026 erlaubt
    const GO_LIVE_DATE = new Date('2026-01-01T00:00:00');

    function initBookingForm() {
        const form = document.getElementById('contactFormBuchen');
        const angebotSelect = document.getElementById('gewähltes Angebot');
        const slotSelect = document.getElementById('talentcamp-gruppe');
        const slotHidden = document.getElementById('slot-id-hidden');

        if (!form || !angebotSelect) return;

        // Wenn Fussballcamp-Gruppe ausgewählt: slot_id setzen
        if (slotSelect) {
            slotSelect.addEventListener('change', function() {
                if (slotHidden) {
                    slotHidden.value = this.value;
                }
            });
        }

        // Form-Submit abfangen
        form.addEventListener('submit', async function(e) {
            const selectedAngebot = angebotSelect.value;

            // Nur bei Fussballcamp: Eigene Logik
            if (selectedAngebot === 'Talent-Camp') {
                e.preventDefault();

                // Go-Live-Check: Buchung erst ab 01.01.2026
                const now = new Date();
                if (now < GO_LIVE_DATE) {
                    alert('Buchungen sind ab dem 01. Januar 2026 möglich.\n\nVielen Dank für Ihr Interesse!');
                    return;
                }

                // Honeypot- und Time-Check (bestehendes Spam-Schutz)
                const loadTimeField = document.getElementById('formLoadTime');
                const goldfield = document.getElementById('goldfield');

                if (loadTimeField) {
                    const loadTime = parseInt(loadTimeField.value, 10);
                    const now = Date.now();
                    if (now - loadTime < 10000) {
                        alert('Bitte füllen Sie das Formular korrekt aus.');
                        return;
                    }
                }

                if (goldfield && goldfield.value) {
                    alert('Spam erkannt – Formular nicht gesendet.');
                    return;
                }

                // Validierung: Slot muss ausgewählt sein
                if (!slotHidden || !slotHidden.value) {
                    alert('Bitte wählen Sie eine Gruppe aus.');
                    return;
                }

                // Daten sammeln
                const formData = {
                    slot_id: slotHidden.value,
                    name: document.getElementById('Name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('Telefonnummer').value,
                    strasse: document.getElementById('Strasse').value,
                    plz: document.getElementById('PLZ').value,
                    ort: document.getElementById('Ort').value,
                    player_name: document.getElementById('Spieler Name').value,
                    trikot_groesse: document.getElementById('trikot-groesse').value,
                    nachricht: document.getElementById('Nachricht') ? document.getElementById('Nachricht').value : ''
                };

                // Loading-State
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = 'Wird verarbeitet...';

                try {
                    // An Apps Script senden (mit redirect=false um CORS zu umgehen)
                    const scriptUrlWithParams = SCRIPT_URL + '?t=' + Date.now();

                    fetch(scriptUrlWithParams, {
                        method: 'POST',
                        body: JSON.stringify(formData),
                        mode: 'no-cors'
                    });

                    // Bei no-cors: Wir können die Response nicht lesen,
                    // aber das Script läuft im Hintergrund
                    // Warten kurz, dann Erfolgsseite anzeigen
                    setTimeout(function() {
                        window.location.href = 'erfolg.html';
                    }, 2000);

                } catch (error) {
                    console.error('Buchungsfehler:', error);
                    alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
            }
            // Andere Angebote (Hallen-Training, etc.): Normal über UseBasin
        });
    }

    // Initialisierung
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBookingForm);
    } else {
        initBookingForm();
    }

})();
