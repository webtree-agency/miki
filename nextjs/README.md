# Amzi Legacy Football Training — Next.js + Payload CMS

Migration der statischen HTML-Site auf Next.js 16 mit Payload CMS v3, damit Miki seine Texte selbst editieren kann.

## Status

- **Live-Site**: weiterhin die HTML-Dateien im Repo-Root (`/Users/noah/Documents/Webtree/Kunden/miki/*.html`). Nichts daran wurde geändert.
- **Neue Site**: dieser `nextjs/`-Ordner. Läuft lokal, ist noch nicht deployt.

## Lokal starten

```bash
cd nextjs
npm install
npm run dev
```

- Frontend: http://localhost:3000
- Admin: http://localhost:3000/admin (beim ersten Aufruf legst du den Admin-User an)

Beim ersten Start wird automatisch eine SQLite-Datei `payload.db` angelegt. Defaults aller Globals (Texte, Trainingsprogramm, Angebot-Karten etc.) werden eingespielt.

## Was ist editierbar?

Im Admin unter **Globals**:

| Global | Was du dort änderst |
|---|---|
| `Globale Einstellungen` | Site-Name, Kontakt (Email, Telefon, WhatsApp), Social-Links |
| `Header / Navigation` | Nav-Items, Badges (`NEU`-Tag) |
| `Footer` | Copyright, Legal-Links |
| `Seite: Home` | Hero-Texte, Mission, Stats, Services, Testimonials, SEO |
| `Seite: Meine Geschichte` | Hero, SEO |
| `Seite: Angebot / Preise` | Alle Angebot-Karten (Titel, Beschreibung, Preis, Features, CTA, Ausgebucht-Status) |
| `Seite: Fussballcamp` | Datumsbereich, Ort, **Trainingsprogramm pro Tag**, Ausgebucht-Status (Datum + Label), **Gruppen/Slots** |
| `Seite: Indoor-Fussball` | Hero, SEO |
| `Seite: Buchen` | Hero, Intro, Angebots-Dropdown-Optionen |
| `Seite: Erfolg` | Bestätigungs-Text, CTA |
| `Rechtliche Seiten` | AGB / Datenschutz / Impressum (RichText) — aktuell aber inline im Code, RichText-Felder sind als Reserve da |

## Was bleibt manuell wie bisher?

- **Buchungs-Slots Live-Verfügbarkeit**: kommt weiterhin aus dem Google Sheet "Fussballcamp Buchungen" (`1Ch7r3k58W1nfMfClixTc6z0Vyfzu7JcwF7Hb-n5Txuo`), Tab `slots`. Die `slot_id` im Sheet muss exakt der `slotId` im Payload-Global `Seite: Fussballcamp → Gruppen` entsprechen.
- **Buchungs-Submission**: geht weiterhin an dein bestehendes Google Apps Script. URL ist in `public/js/fussballcamp-booking.js` hardcoded.
- **Hallen-/Rasen-/Indoor-Buchungen**: gehen weiterhin an deinen UseBasin-Endpoint (`https://usebasin.com/f/10df9acad9fc`).

## Deployment auf Vercel (empfohlen)

1. **Repo pushen** (ist schon im Git-Repo).

2. **Vercel-Account verbinden**, neues Projekt aus dem GitHub-Repo, Root-Directory auf `nextjs` setzen.

3. **Datenbank**: in Vercel → Storage → Postgres-Datenbank anlegen (Vercel Postgres oder Neon). `POSTGRES_URL` wird automatisch gesetzt. Sobald das gesetzt ist, schaltet `payload.config.ts` von SQLite auf Postgres um.

4. **Environment Variables**:
   - `PAYLOAD_SECRET` — langer Zufallsstring (z.B. `openssl rand -base64 32`)
   - `POSTGRES_URL` — von Vercel automatisch gesetzt
   - `NEXT_PUBLIC_SITE_URL` — `https://www.amzilegacyfootballtraining.ch`

5. **Deploy** — beim ersten Deploy migriert Payload das Schema automatisch und du kannst unter `/admin` einen Admin-User anlegen.

6. **DNS umstellen** wenn alles geprüft ist:
   - In Vercel → Domains → `www.amzilegacyfootballtraining.ch` hinzufügen
   - Im Hosting-Panel A/CNAME auf Vercel umlegen
   - HTTPS und www-Redirect übernimmt Vercel

7. **Alte HTML-Dateien**: nach erfolgreichem DNS-Switch im Original-Webroot löschen oder behalten (.html-URLs werden in Next.js → clean URLs 301-redirected).

## Files Map

```
nextjs/
├── src/
│   ├── app/
│   │   ├── (frontend)/         ← öffentliche Seiten
│   │   │   ├── page.tsx                  ← Homepage
│   │   │   ├── fussballcamp/page.tsx
│   │   │   ├── buchen/{page,BuchenForm}.tsx
│   │   │   ├── angebot/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── indoor-fussball/page.tsx
│   │   │   ├── erfolg/page.tsx
│   │   │   ├── agb/page.tsx
│   │   │   ├── datenschutz/page.tsx
│   │   │   ├── impressum/page.tsx
│   │   │   └── layout.tsx                ← Header/Footer/Scripts
│   │   ├── (payload)/          ← Admin-UI + REST/GraphQL API
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── collections/            ← Users, Media
│   ├── globals/                ← Alle Page-Globals
│   ├── components/             ← Header, Footer, Popup, etc.
│   └── payload.config.ts
├── public/                     ← CSS, JS, Bilder, Fonts (1:1 aus dem Original)
├── .env                        ← Lokale Secrets (nicht im Repo)
├── .env.example
├── next.config.ts              ← Redirects, Headers, Payload-Wrapper
└── package.json
```

## Bekannte Punkte

- **Angebot-Tabelle**: das Original hatte detaillierte Pricing-Tabellen pro Karte. Der Migrations-Sub-Agent hat sie zu einer einfachen Feature-Liste vereinfacht. Falls die Tabellenoptik wichtig ist, kann das Schema in `src/globals/AngebotPage.ts` um ein `pricingTable`-Feld erweitert werden.
- **Inline-Submit-Logik buchen**: das Original-`buchen.html` hatte einen zusätzlichen Inline-`<script>` Submit-Listener (10s-Honeypot-Time-Check), der nicht in die React-Form übernommen wurde. Die Talent-Camp-Buchung läuft aber nach wie vor durch `fussballcamp-booking.js`, das diesen Check ohnehin erneut macht.
- **Legal-Seiten als Inline-JSX**: AGB/Datenschutz/Impressum sind im Code statt im CMS. Falls Miki sie selbst editieren soll, müsste das RichText-Feld im Global `LegalPages` ausgelesen und gerendert werden (Lexical → React). Bewusst aufgeschoben, weil die Inhalte sehr selten ändern.
- **Image-Optimization**: alle Bilder werden weiterhin als statische `<img>` Tags ausgeliefert (1:1 aus dem Original). Wenn man `next/image` nutzen will, müsste man die Bilder in die Media-Collection migrieren.

## Tests

- ✓ Alle 10 Frontend-Routen liefern 200 OK
- ✓ Alle 10 `.html` → `/clean-url` Redirects (308 Permanent)
- ✓ Admin-Panel unter `/admin` erreichbar
- ✓ Sitemap und robots.txt werden generiert
- ✓ `npm run build` (Production) kompiliert sauber
- ✗ **Visueller Pixel-Diff** vs. Original: nicht durchgeführt — mit Browser durchklicken bevor live geht.
- ✗ **Booking-End-to-End Test**: nicht durchgeführt — vor Live-Schaltung mit Test-Slot ein echtes Buchungsformular abschicken und Sheet-Eintrag prüfen.
