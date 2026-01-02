/**
 * Fussballcamp Slot Availability Checker
 * Aktualisiert verfügbare Plätze in Echtzeit
 */

(function() {
    'use strict';

    // ⚠️ KONFIGURATION - BEREITS EINGETRAGEN!
    const CONFIG = {
        SHEET_ID: '1Ch7r3k58W1nfMfClixTc6z0Vyfzu7JcwF7Hb-n5Txuo',
        SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbx7pRBCStxEH6SaHbiv1kmbhwgJOD7pN5n3Myt-5ixWSt7Cd8Yma4NrKk8miuDuye9xug/exec'
    };

    // Google Sheets Public JSON URL (kein API-Key nötig!)
    const SHEETS_API_URL = `https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq?tqx=out:json&sheet=slots`;

    /**
     * Holt aktuelle Slot-Daten von Google Sheets
     */
    async function fetchSlotAvailability() {
        try {
            const response = await fetch(SHEETS_API_URL);

            if (!response.ok) {
                console.error('Fehler beim Abrufen der Slot-Daten:', response.status);
                return null;
            }

            const text = await response.text();
            // Google Visualization API gibt JSON mit Prefix zurück
            const jsonText = text.substring(47, text.length - 2);
            const data = JSON.parse(jsonText);

            // Konvertiere zu Array-Format
            const rows = data.table.rows.map(row => {
                return row.c.map(cell => cell ? cell.v : '');
            });

            return rows;

        } catch (error) {
            console.error('Netzwerkfehler beim Abrufen der Slots:', error);
            return null;
        }
    }

    /**
     * Aktualisiert die Dropdown-Optionen mit aktuellen Verfügbarkeiten
     */
    async function updateSlotOptions() {
        const slotData = await fetchSlotAvailability();

        if (!slotData || slotData.length === 0) {
            console.warn('Keine Slot-Daten verfügbar');
            return;
        }

        const selectElement = document.getElementById('talentcamp-gruppe');
        if (!selectElement) {
            console.warn('Slot-Select-Element nicht gefunden');
            return;
        }

        // Header überspringen (erste Zeile)
        for (let i = 1; i < slotData.length; i++) {
            const row = slotData[i];
            const slotId = row[0];        // A: slot_id
            const slotName = row[1];      // B: slot_name
            const capacity = parseInt(row[2]) || 0;   // C: capacity
            const booked = parseInt(row[3]) || 0;     // D: booked
            const available = capacity - booked;

            // Finde entsprechende Option im Select
            const option = selectElement.querySelector(`option[value="${slotId}"]`);

            if (option) {
                // Hole ursprünglichen Text ohne " - Lädt..."
                const originalText = option.textContent.replace(' - Lädt...', '');

                // Aktualisiere Text
                if (available > 0) {
                    option.textContent = `${originalText} - ${available} Plätze frei`;
                    option.disabled = false;
                    option.style.color = '';

                    // Warnung bei wenigen Plätzen
                    if (available <= 3) {
                        option.textContent = `${originalText} - NUR NOCH ${available} Plätze!`;
                        option.style.color = '#ff6b6b';
                        option.style.fontWeight = 'bold';
                    }
                } else {
                    // Slot ist ausgebucht
                    option.textContent = `${originalText} (AUSGEBUCHT)`;
                    option.disabled = true;
                    option.style.color = '#999';
                }
            }
        }

        // Update-Zeitstempel in Konsole
        console.log('Slot-Verfügbarkeiten aktualisiert:', new Date().toLocaleTimeString());
    }

    /**
     * Initialisierung beim Laden der Seite
     */
    function init() {
        // Prüfe ob wir auf der richtigen Seite sind
        const slotSelect = document.getElementById('talentcamp-gruppe');
        if (!slotSelect) {
            return; // Nicht auf Buchungsseite
        }

        // Sofortiges Update beim Laden
        updateSlotOptions();

        // Automatisches Update alle 30 Sekunden
        setInterval(updateSlotOptions, 30000);

        // Update wenn Formular wieder in Focus kommt
        window.addEventListener('focus', updateSlotOptions);

        console.log('Slot-Availability-Checker initialisiert');
    }

    // Starte wenn DOM bereit ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
