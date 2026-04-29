/**
 * Fussballcamp Buchungslogik
 * Sendet Buchungen direkt an Google Apps Script
 */

(function() {
    'use strict';

    // ⚠️ KONFIGURATION - BEREITS EINGETRAGEN!
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwo_tDLsJBgkNRWk0klIRiVAt4xQlGx2pdXnKkX0ihTj9yR-Empb5N9bgBeUXvk8hNAcg/exec';

    // Buchung aktiviert ab 06.01.2026 00:00 Uhr
    const GO_LIVE_DATE = new Date('2026-01-06T00:00:00');

    /**
     * Zeigt eine Fehlermeldung im Buchungsformular an
     */
    function showBookingError(form, message) {
        // Bestehende Fehlermeldung entfernen
        const existingError = form.querySelector('.booking-error-message');
        if (existingError) {
            existingError.remove();
        }

        // Neue Fehlermeldung erstellen
        const errorDiv = document.createElement('div');
        errorDiv.className = 'booking-error-message';
        errorDiv.style.cssText = 'background: #fee; border: 1px solid #c00; color: #c00; padding: 15px; margin: 15px 0; border-radius: 5px; text-align: center; font-weight: bold;';
        errorDiv.textContent = message;

        // Vor dem Submit-Button einfügen
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.parentNode.insertBefore(errorDiv, submitBtn);
        } else {
            form.appendChild(errorDiv);
        }

        // Zum Fehler scrollen
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

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
                    // An Apps Script senden
                    const response = await fetch(SCRIPT_URL, {
                        method: 'POST',
                        body: JSON.stringify(formData),
                        headers: {
                            'Content-Type': 'text/plain'
                        },
                        redirect: 'follow'
                    });

                    // Response auswerten
                    const result = await response.json();

                    if (result.success) {
                        // Erfolg - zur Erfolgsseite weiterleiten
                        window.location.href = 'erfolg.html';
                    } else {
                        // Fehler vom Server - Meldung anzeigen
                        showBookingError(form, result.message || 'Buchung fehlgeschlagen. Bitte versuchen Sie es erneut.');
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    }

                } catch (error) {
                    console.error('Buchungsfehler:', error);
                    showBookingError(form, 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
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
