# Skien Sjakklubb - Nettside

Offisiell nettside for Skien Sjakklubb. Nettsiden inneholder informasjon om klubben, terminliste, turneringer og tilbud for barn og voksne.

🔗 **Live:** [skiensjakk.no](https://skiensjakk.no)

## Filstruktur

```
nettside_skiensjakk/
├── index.html              # Hovedside/forside
├── CNAME                   # Domenenavnkonfigurasjon for GitHub Pages
├── README.md               # Denne filen
│
├── assets/                 # Statiske ressurser
│   └── pictures/           # Bilder brukt på nettsiden
│
├── css/
│   └── styles.css          # Stilark for hele nettsiden
│
├── js/
│   └── main.js             # JavaScript-funksjonalitet
│
└── pages/                  # Undersider organisert etter tema
    │
    ├── kontaktinfo/        # Kontaktinformasjon
    │   ├── index.html          # Kontaktinfo-oversikt
    │   ├── facebook.html       # Facebook-side
    │   ├── innspill-websiden.html  # Tilbakemeldingsskjema
    │   ├── spond.html          # Spond-info
    │   └── vil-du-stotte-oss.html  # Støttemuligheter
    │
    ├── nyttige-lenker/     # Eksterne ressurser og lenker
    │   ├── index.html          # Lenker-oversikt
    │   ├── klubber.html        # Andre sjakkklubber
    │   ├── kommende-turneringer.html  # Turneringsoversikt
    │   ├── sjakknyheter.html   # Nyhetskilder
    │   └── spill-lar.html      # Læringsressurser
    │
    ├── om-klubben/         # Informasjon om klubben
    │   ├── index.html          # Om klubben-oversikt
    │   ├── historie.html       # Klubbens historie
    │   ├── hvem-er-vi.html     # Presentasjon av klubben
    │   ├── styret.html         # Styremedlemmer
    │   ├── trivselsregler.html # Trivselsregler
    │   └── vedtekter.html      # Klubbens vedtekter
    │
    ├── sjakkleir/          # Sjakkleir-arrangement
    │   ├── index.html          # Sjakkleir-oversikt
    │   ├── ofte-stilte-sporsmal.html  # FAQ
    │   ├── priser-paamelding.html     # Priser og påmelding
    │   ├── program.html        # Leirprogram
    │   └── skien-sjakkleir.html # Om sjakkleiren
    │
    ├── terminliste/        # Aktivitetskalender
    │   ├── index.html          # Terminliste-oversikt
    │   ├── dag-for-dag.html    # Detaljert kalender
    │   ├── flyer.html          # Reklamemateriell
    │   ├── highlights.html     # Høydepunkter
    │   └── ukeoppgaver.html    # Ukentlige sjakkoppgaver
    │
    ├── turneringer/        # Turneringsinformasjon
    │   ├── index.html          # Turneringer-oversikt
    │   ├── bgp-serien.html     # BGP-serien
    │   ├── nm.html             # Norgesmesterskap
    │   ├── ostlandsserien.html # Østlandsserien
    │   ├── skien-bgp.html      # Skien BGP
    │   └── skien-lyn.html      # Skien Lyn-turnering
    │
    └── vart-tilbud/        # Klubbens tilbud
        ├── index.html          # Tilbud-oversikt
        ├── bli-medlem.html     # Innmeldingsinformasjon
        ├── for-voksne.html     # Tilbud for voksne
        ├── kontingent.html     # Kontingentinformasjon
        ├── sjakkpass.html      # Sjakkpass-ordningen
        └── undervisning.html   # Undervisningstilbud
```

## Teknologi

- **HTML5** - Semantisk markup
- **CSS3** - Styling (én felles stilfil)
- **JavaScript** - Interaktivitet (navigasjon, etc.)
- **GitHub Pages** - Hosting

## Lokal utvikling

1. Klon repository:
   ```bash
   git clone https://github.com/[brukernavn]/nettside_skiensjakk.git
   ```

2. Åpne `index.html` i en nettleser, eller bruk en lokal server:
   ```bash
   # Med Python
   python -m http.server 8000
   
   # Med Node.js (npx)
   npx serve
   ```

3. Besøk `http://localhost:8000` i nettleseren.

## Bidra

Har du innspill eller forslag til forbedringer? 
- Bruk [innspill-websiden](pages/kontaktinfo/innspill-websiden.html) på nettsiden
- Opprett et issue på GitHub
- Send en pull request

## Lisens

© Skien Sjakklubb
