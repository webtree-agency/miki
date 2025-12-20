# Fussballcamp Buchungssystem

## Übersicht
Automatisches Buchungssystem mit Google Sheets Backend für overbooking-sichere Slot-Verwaltung.

## System-Komponenten

### Frontend
- **buchen.html**: Buchungsformular mit Adressfeldern für Eltern
- **fussballcamp.html**: Übersichtsseite mit Live-Verfügbarkeitsanzeige
- **js/fussballcamp-booking.js**: Formular-Logik, sendet zu Apps Script
- **js/slot-availability.js**: Aktualisiert Dropdown-Verfügbarkeit
- **js/fussballcamp-slots.js**: Aktualisiert Tabellen/Karten-Anzeige
- **js/main.js**: Zeigt/versteckt Adressfelder bei Fussballcamp

### Backend
- **Google Apps Script**: Race-condition-sichere Buchungsverarbeitung mit Lock Service
- **Google Sheets**: Single source of truth für Slots & Buchungen
  - Tab "slots": 4 Gruppen, Kapazität 16 pro Gruppe
  - Tab "bookings": 12 Spalten inkl. Adresse
  - Tab "dashboard": Übersicht aller Buchungen

## Features
- ✅ Overbooking-Prevention durch Lock Service
- ✅ Live-Verfügbarkeitsanzeige (Update alle 30s)
- ✅ E-Mail mit PDF-Rechnung als Anhang
- ✅ Admin-Benachrichtigung bei jeder Buchung
- ✅ Adressdaten von Eltern erfassen
- ✅ Go-Live-Datum: 01.01.2026

## Konfiguration

### Apps Script URL
```
https://script.google.com/macros/s/AKfycbx7pRBCStxEH6SaHbiv1kmbhwgJOD7pN5n3Myt-5ixWSt7Cd8Yma4NrKk8miuDuye9xug/exec
```

### Google Sheet
```
Sheet ID: 1Ch7r3k58W1nfMfClixTc6z0Vyfzu7JcwF7Hb-n5Txuo
```

### Go-Live Datum ändern
In `js/fussballcamp-booking.js` Zeile 13:
```javascript
const GO_LIVE_DATE = new Date('2026-01-01T00:00:00');
```

## Buchungsdaten (12 Spalten)
```
A: booking_id       - UUID
B: slot_id          - z.B. kids3_11_12
C: name             - Name Elternteil
D: email            - E-Mail Elternteil
E: phone            - Telefon Elternteil
F: strasse          - Strasse & Hausnummer
G: plz              - Postleitzahl
H: ort              - Ort
I: player_name      - Name Kind
J: trikot_groesse   - Trikotgrösse
K: timestamp        - Buchungszeitpunkt
L: status           - confirmed
```

## Slots
```
maedchen_08_09  - Mädchen (08:00-09:00)
kids1_09_10     - Kids 1, 6-9 Jahre (09:00-10:00)
kids2_10_11     - Kids 2, 10-13 Jahre (10:00-11:00)
kids3_11_12     - Kids 3, 10-13 Jahre (11:00-12:00)
```

## Wartung

### Buchungen zurücksetzen
1. Google Sheets → Tab "bookings": Alle Zeilen außer Header löschen
2. Google Sheets → Tab "slots": Alle "booked" Werte auf 0 setzen

### Apps Script neu deployen
1. Änderungen im Code machen
2. Deploy → Manage Deployments → Edit → New Version → Deploy
3. URL bleibt gleich!

## Support
Bei technischen Fragen: info@webtree.ch
