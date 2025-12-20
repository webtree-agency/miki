/**
 * Fussballcamp Slot-Anzeige (fussballcamp.html)
 * Lädt verfügbare Plätze dynamisch aus Google Sheets
 */

(function() {
    'use strict';

    // ⚠️ KONFIGURATION
    const SHEET_ID = '1Ch7r3k58W1nfMfClixTc6z0Vyfzu7JcwF7Hb-n5Txuo';
    const SHEETS_API_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=slots`;

    /**
     * Lädt Slot-Daten aus Google Sheets
     */
    async function loadSlotData() {
        try {
            const response = await fetch(SHEETS_API_URL);

            if (!response.ok) {
                console.error('Fehler beim Laden der Slot-Daten:', response.status);
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
            console.error('Fehler beim Laden der Slots:', error);
            return null;
        }
    }

    /**
     * Aktualisiert die Tabellen- und Karten-Anzeige
     */
    async function updateSlotDisplay() {
        const slotData = await loadSlotData();

        if (!slotData || slotData.length === 0) {
            console.warn('Keine Slot-Daten verfügbar');
            return;
        }

        // Iteriere durch alle Slots (skip header row)
        for (let i = 1; i < slotData.length; i++) {
            const row = slotData[i];
            const slotId = row[0];           // A: slot_id
            const slotName = row[1];         // B: slot_name
            const capacity = parseInt(row[2]) || 16;  // C: capacity
            const booked = parseInt(row[3]) || 0;     // D: booked
            const available = capacity - booked;

            // Update Tabelle (Desktop)
            updateTableRow(slotId, available);

            // Update Karte (Mobile)
            updateCard(slotId, available);
        }

        console.log('✅ Slot-Anzeige aktualisiert:', new Date().toLocaleTimeString());
    }

    /**
     * Aktualisiert eine Tabellenzeile
     */
    function updateTableRow(slotId, available) {
        const row = document.querySelector(`#slots-table-body tr[data-slot-id="${slotId}"]`);
        if (!row) return;

        const availableSpan = row.querySelector('.available-count');
        const badge = row.querySelector('.ausgebucht-badge');

        if (availableSpan) {
            availableSpan.textContent = available;
        }

        // Styling je nach Verfügbarkeit
        if (available === 0) {
            // Ausgebucht
            row.classList.add('ausgebucht-row');
            if (badge) {
                badge.style.display = 'inline-block';
                badge.textContent = 'Ausgebucht';
            }
            const cell = row.querySelector('.availability-cell strong');
            if (cell) {
                cell.style.color = '#999';
                cell.innerHTML = '<span class="available-count">0</span> Plätze (Ausgebucht)';
            }
        } else if (available <= 3) {
            // Wenige Plätze
            const cell = row.querySelector('.availability-cell strong');
            if (cell) {
                cell.style.color = '#ff6b6b';
                cell.innerHTML = `<span class="available-count">${available}</span> Plätze (nur noch wenige!)`;
            }
        } else {
            // Normale Verfügbarkeit
            row.classList.remove('ausgebucht-row');
            if (badge) badge.style.display = 'none';
        }
    }

    /**
     * Aktualisiert eine Karte (Mobile)
     */
    function updateCard(slotId, available) {
        const card = document.querySelector(`#slots-cards-container .group-card[data-slot-id="${slotId}"]`);
        if (!card) return;

        const availableSpan = card.querySelector('.available-count');
        const ribbon = card.querySelector('.diagonal-ribbon');
        const availableText = card.querySelector('.available-text');

        if (availableSpan) {
            availableSpan.textContent = available;
        }

        // Styling je nach Verfügbarkeit
        if (available === 0) {
            // Ausgebucht
            card.classList.add('ausgebucht-card');
            card.classList.remove('limited-card');
            if (ribbon) {
                ribbon.style.display = 'block';
                ribbon.textContent = 'Ausgebucht';
            }
            if (availableText) {
                availableText.style.color = '#999';
                availableText.innerHTML = '<span class="available-count">0</span> Plätze (Ausgebucht)';
            }
        } else if (available <= 3) {
            // Wenige Plätze
            card.classList.add('limited-card');
            card.classList.remove('ausgebucht-card');
            if (ribbon) ribbon.style.display = 'none';
            if (availableText) {
                availableText.style.color = '#ff6b6b';
                availableText.innerHTML = `<span class="available-count">${available}</span> Plätze (nur noch wenige!)`;
            }
        } else {
            // Normale Verfügbarkeit
            card.classList.remove('ausgebucht-card');
            if (ribbon) ribbon.style.display = 'none';
            if (availableText) {
                availableText.style.color = 'var(--primary-gold)';
            }
        }
    }

    /**
     * Initialisierung
     */
    function init() {
        // Prüfe ob wir auf fussballcamp.html sind
        const slotsTable = document.getElementById('slots-table-body');
        if (!slotsTable) return; // Nicht auf der richtigen Seite

        // Sofortiges Update beim Laden
        updateSlotDisplay();

        // Automatisches Update alle 30 Sekunden
        setInterval(updateSlotDisplay, 30000);

        // Update wenn Seite wieder in Focus kommt
        window.addEventListener('focus', updateSlotDisplay);

        console.log('🎯 Fussballcamp Slot-Tracker initialisiert');
    }

    // Starte wenn DOM bereit ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
