// Demo: Atelier Aurin, a fictional hair salon in Leipzig. Built to show what the LocalDominate guide
// for hair salons recommends: one block per service with duration and price, online booking in a few
// steps, live opening hours, the team with their specialities, and an honest slot for real reviews.
import { esc, page, HOURS_JS } from './shell.mjs';

export const slug = 'salon';

// Services: id, duration (min), price from (EUR). Names come from T.
const SERVICES = [
  ['cut-women', 60, 58],
  ['cut-men', 30, 32],
  ['balayage', 180, 165],
  ['highlights', 120, 98],
  ['colour', 90, 72],
  ['gloss', 30, 38],
  ['kids', 30, 22],
  ['updo', 75, 85],
];

// Colour swatches of the hero fan: id, root colour, tip colour, matching service.
const SWATCHES = [
  ['honey', '#4a2f1d', '#d9a660', 'balayage'],
  ['ash', '#776b5d', '#e4dccb', 'highlights'],
  ['copper', '#5e2412', '#c95f2c', 'colour'],
  ['rose', '#8f6763', '#ecc9c1', 'gloss'],
  ['grey', '#5c5957', '#dcd9d4', 'colour'],
  ['espresso', '#1c1210', '#5b3b2c', 'gloss'],
];

const TEAM = [
  ['mara', '#d9a660'],
  ['jonas', '#776b5d'],
  ['elif', '#c95f2c'],
];

// Tue–Fri 9–19, Sat 9–15. Sun (0) and Mon (1) closed.
const HOURS = { 0: null, 1: null, 2: [540, 1140], 3: [540, 1140], 4: [540, 1140], 5: [540, 1140], 6: [540, 900] };

const T = {
  de: {
    title: 'Atelier Aurin: Friseur & Farbe in Leipzig (Konzept-Demo)',
    description:
      'Konzept-Demo von LocalDominate: die Website eines erfundenen Friseursalons mit Leistungen, Preisen, Online-Termin und Öffnungszeiten.',
    bar: ' Atelier Aurin ist ein erfundener Salon. Namen, Preise, Zeiten und Adresse sind Beispiele. Buchungen werden nicht gesendet.',
    barLink: { href: '/de/friseur', text: 'So eine Seite für Ihren Salon' },
    nav: { services: 'Leistungen', team: 'Team', visit: 'Anfahrt', book: 'Termin buchen' },
    tagline: 'Friseur & Farbe in Leipzig-Südvorstadt',
    lead: 'Schnitt, Farbe und Balayage in einem hellen Salon mit fünf Plätzen. Termine buchen Sie online in einer Minute, auch für morgen.',
    ctaBook: 'Termin buchen',
    ctaPrices: 'Leistungen und Preise',
    address: 'Beispielstraße 12, 04275 Leipzig',
    phone: '0341 000 00 00',
    phoneNote: 'Demo-Nummer',
    fanTitle: 'Welche Farbe schwebt Ihnen vor?',
    fanHint: 'Tippen Sie auf eine Strähne.',
    swatch: {
      honey: 'Honig-Balayage',
      ash: 'Kühles Aschblond',
      copper: 'Kupfer',
      rose: 'Rosé-Glossing',
      grey: 'Natürliches Grau',
      espresso: 'Espresso mit Glanz',
    },
    fanMatch: 'Dazu passt',
    fanBook: 'Mit dieser Leistung buchen',
    servicesTitle: 'Leistungen und Preise',
    servicesLead:
      'Jede Leistung mit Dauer und Startpreis. Der Preis hängt von Länge und Dichte Ihres Haares ab; den genauen Betrag nennen wir Ihnen vor dem Start.',
    from: 'ab',
    min: 'Min.',
    hrs: 'Std.',
    service: {
      'cut-women': ['Waschen, Schneiden, Föhnen', 'Beratung am Platz, Schnitt nach Ihrer Haarstruktur, Styling zum Mitnehmen.'],
      'cut-men': ['Herrenschnitt', 'Schere oder Maschine, Konturen und Nacken, kurz gewaschen.'],
      balayage: ['Balayage', 'Freihand gemalte Aufhellung mit weichem Ansatz. Inklusive Toner, Pflege und Föhnen.'],
      highlights: ['Strähnen mit Folie', 'Gleichmäßige Aufhellung von Ansatz bis Spitze, mit Toner und Pflege.'],
      colour: ['Coloration', 'Ansatz oder ganzes Haar, auch Grauabdeckung. Farbberatung vorab am Platz.'],
      gloss: ['Glossing', 'Glanz und Farbauffrischung ohne Ansatz. Gut zwischen zwei Farbterminen.'],
      kids: ['Kinder bis 12', 'Ruhiger Platz am Fenster, ohne Wartezeit für die Kleinen.'],
      updo: ['Hochsteckfrisur und Brautprobe', 'Probetermin vor dem großen Tag, mit Foto für Ihre Unterlagen.'],
    },
    bookThis: 'Buchen',
    teamTitle: 'Wer Ihnen die Haare macht',
    teamLead: 'Drei Menschen, drei Schwerpunkte. Beim Buchen können Sie wählen, mit wem Sie arbeiten möchten.',
    team: {
      mara: ['Mara', 'Inhaberin', 'Balayage, Blond, Farbkorrektur'],
      jonas: ['Jonas', 'Friseur', 'Herrenschnitte, Fades, Bart'],
      elif: ['Elif', 'Friseurin', 'Coloration, Locken schneiden'],
    },
    reviewsTitle: 'Was Kundinnen und Kunden auf Google schreiben',
    reviewsText:
      'Im echten Projekt stehen hier Ihre Google-Bewertungen, verlinkt zu Ihrem Profil. In dieser Demo zeigen wir bewusst keine erfundenen Stimmen.',
    reviewsLink: 'Alle Bewertungen auf Google',
    visitTitle: 'Öffnungszeiten und Anfahrt',
    hoursTitle: 'Öffnungszeiten',
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    closed: 'geschlossen',
    special: 'Sonderzeiten: 24. Dezember bis 1. Januar geschlossen.',
    openUntil: 'Jetzt geöffnet, bis {t} Uhr',
    opensToday: 'Heute ab {t} Uhr geöffnet',
    opensOn: 'Geschlossen. Wieder geöffnet am {d} ab {t} Uhr',
    wayTitle: 'So finden Sie uns',
    way: 'Straßenbahn bis Haltestelle Beispielplatz, dann drei Minuten zu Fuß. Fahrradbügel direkt vor der Tür, Parkhaus in der Querstraße.',
    route: 'Route planen',
    giftTitle: 'Gutschein verschenken',
    giftText: 'Für eine Leistung oder einen Betrag Ihrer Wahl. Erhältlich im Salon.',
    faqTitle: 'Häufige Fragen',
    faq: [
      ['Wie kurzfristig kann ich buchen?', 'Freie Zeiten sehen Sie online bis zum Vortag. Für denselben Tag rufen Sie bitte an.'],
      ['Was kostet eine Balayage genau?', 'Ab 165 € für schulterlanges Haar. Bei langem oder sehr dichtem Haar nennen wir den Preis vor dem Start am Platz.'],
      ['Kann ich einen Termin absagen?', 'Ja, bis 24 Stunden vorher kostenlos, über den Link in Ihrer Bestätigung oder telefonisch.'],
      ['Brauche ich vor einer Farbe einen Test?', 'Bei neuer Farbe oder bekannter Allergie machen wir 48 Stunden vorher einen kurzen Hauttest im Salon.'],
    ],
    bookingTitle: 'Termin buchen',
    steps: ['Leistung', 'Bei wem', 'Tag', 'Uhrzeit', 'Ihre Daten'],
    anyone: 'Egal, wer frei ist',
    pickService: 'Welche Leistung möchten Sie buchen?',
    pickPerson: 'Mit wem möchten Sie arbeiten?',
    pickDay: 'An welchem Tag?',
    pickTime: 'Zu welcher Uhrzeit?',
    yourData: 'Wie erreichen wir Sie?',
    name: 'Ihr Name',
    contact: 'Telefon oder E-Mail',
    back: 'Zurück',
    next: 'Weiter',
    confirm: 'Termin anfragen',
    errName: 'Bitte geben Sie Ihren Namen an.',
    errContact: 'Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an.',
    noSlots: 'An diesem Tag ist nichts mehr frei. Bitte wählen Sie einen anderen Tag.',
    doneTitle: 'So sähe Ihre Bestätigung aus',
    doneText:
      'Demo: Es wurde nichts gesendet. Im echten Projekt landet der Termin im Kalender des Salons, zum Beispiel über Ihr Buchungssystem, und die Kundin bekommt eine Bestätigung mit Absage-Link.',
    again: 'Neu beginnen',
    summary: '{s} bei {p}, {d} um {t} Uhr',
    showTitle: 'Was diese Demo zeigt',
    show: [
      ['Eine Leistung, eine Antwort', 'Dauer und Startpreis stehen bei jeder Leistung. Im echten Projekt bekommt jede wichtige Leistung ihre eigene Seite, etwa „Balayage in Leipzig“.'],
      ['Termin in fünf Schritten', 'Leistung, Person, Tag, Uhrzeit, Kontakt. Angebunden an das Buchungssystem, das Sie schon nutzen.'],
      ['Öffnungszeiten, die stimmen', 'Die Seite sagt, ob gerade offen ist. Dieselben Zeiten stehen im Google-Profil, damit niemand vor verschlossener Tür steht.'],
      ['Echte Bewertungen statt erfundener', 'Bewertungen kommen aus Ihrem Google-Profil. Erfundene Stimmen setzen wir nicht auf Ihre Seite.'],
    ],
    showCta: 'So eine Seite für Ihren Salon',
    showOffer: 'Website in 5 Tagen, ab 1.490 €. Umfang und Preis schriftlich vor dem Start.',
    footer: 'Atelier Aurin ist ein erfundener Salon, gebaut von LocalDominate als Konzept-Demo. Kein Kunde, kein echter Betrieb.',
    impressum: 'Impressum von LocalDominate',
    impressumHref: '/impressum',
    menu: 'Menü',
  },
  en: {
    title: 'Atelier Aurin: hair and colour in Leipzig (concept demo)',
    description:
      'Concept demo by LocalDominate: the website of a fictional hair salon with services, prices, online booking and opening hours.',
    bar: ' Atelier Aurin is a fictional salon. Names, prices, hours and address are examples. Bookings are not sent.',
    barLink: { href: '/industries/hair-salons', text: 'A site like this for your salon' },
    nav: { services: 'Services', team: 'Team', visit: 'Visit', book: 'Book now' },
    tagline: 'Hair and colour in Leipzig, Germany',
    lead: 'Cuts, colour and balayage in a bright salon with five chairs. Book online in a minute, tomorrow included.',
    ctaBook: 'Book an appointment',
    ctaPrices: 'Services and prices',
    address: 'Beispielstraße 12, 04275 Leipzig',
    phone: '+49 341 000 00 00',
    phoneNote: 'demo number',
    fanTitle: 'What colour do you have in mind?',
    fanHint: 'Tap a strand.',
    swatch: {
      honey: 'Honey balayage',
      ash: 'Cool ash blonde',
      copper: 'Copper',
      rose: 'Rosé gloss',
      grey: 'Natural grey',
      espresso: 'Glossy espresso',
    },
    fanMatch: 'Matching service',
    fanBook: 'Book this service',
    servicesTitle: 'Services and prices',
    servicesLead:
      'Every service with its duration and starting price. The final price depends on the length and thickness of your hair; we tell you the exact amount before we start.',
    from: 'from',
    min: 'min',
    hrs: 'hrs',
    service: {
      'cut-women': ['Wash, cut and blow-dry', 'Consultation at the chair, a cut that suits your hair, styling to go.'],
      'cut-men': ['Men’s cut', 'Scissors or clippers, outline and neck, quick wash.'],
      balayage: ['Balayage', 'Hand-painted lightening with a soft root. Toner, treatment and blow-dry included.'],
      highlights: ['Foil highlights', 'Even lightening from root to tip, with toner and treatment.'],
      colour: ['Colour', 'Roots or full head, grey coverage included. Colour consultation at the chair first.'],
      gloss: ['Gloss', 'Shine and a colour refresh without touching the roots. Good between two colour visits.'],
      kids: ['Children up to 12', 'A quiet chair by the window, no waiting for little ones.'],
      updo: ['Updo and bridal trial', 'A trial before the big day, with a photo for your notes.'],
    },
    bookThis: 'Book',
    teamTitle: 'Who does your hair',
    teamLead: 'Three people, three specialities. You choose who you want to see when you book.',
    team: {
      mara: ['Mara', 'Owner', 'Balayage, blonde, colour correction'],
      jonas: ['Jonas', 'Stylist', 'Men’s cuts, fades, beards'],
      elif: ['Elif', 'Stylist', 'Colour, curly cuts'],
    },
    reviewsTitle: 'What clients write on Google',
    reviewsText:
      'In a real project this shows your Google reviews, linked to your profile. This demo deliberately shows no invented quotes.',
    reviewsLink: 'All reviews on Google',
    visitTitle: 'Opening hours and directions',
    hoursTitle: 'Opening hours',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    closed: 'closed',
    special: 'Holiday hours: closed from 24 December to 1 January.',
    openUntil: 'Open now, until {t}',
    opensToday: 'Opens today at {t}',
    opensOn: 'Closed. Opens {d} at {t}',
    wayTitle: 'How to find us',
    way: 'Tram to Beispielplatz, then a three-minute walk. Bike racks at the door, a car park in the side street.',
    route: 'Get directions',
    giftTitle: 'Gift vouchers',
    giftText: 'For a service or an amount of your choice. Available in the salon.',
    faqTitle: 'Questions',
    faq: [
      ['How short-notice can I book?', 'Free slots show online up to the day before. For the same day, please call.'],
      ['How much is a balayage exactly?', 'From €165 for shoulder-length hair. For long or very thick hair we confirm the price at the chair before we start.'],
      ['Can I cancel?', 'Yes, free of charge up to 24 hours before, through the link in your confirmation or by phone.'],
      ['Do I need a test before colour?', 'For a new colour or a known allergy we do a short skin test in the salon 48 hours before.'],
    ],
    bookingTitle: 'Book an appointment',
    steps: ['Service', 'With whom', 'Day', 'Time', 'Your details'],
    anyone: 'Whoever is free',
    pickService: 'Which service would you like?',
    pickPerson: 'Who would you like to see?',
    pickDay: 'Which day?',
    pickTime: 'What time?',
    yourData: 'How can we reach you?',
    name: 'Your name',
    contact: 'Phone or email',
    back: 'Back',
    next: 'Next',
    confirm: 'Request appointment',
    errName: 'Please enter your name.',
    errContact: 'Please enter a phone number or an email address.',
    noSlots: 'Nothing is free on this day. Please pick another day.',
    doneTitle: 'This is what your confirmation would look like',
    doneText:
      'Demo: nothing was sent. In a real project the appointment lands in the salon’s calendar, for example through your booking system, and the client gets a confirmation with a cancellation link.',
    again: 'Start again',
    summary: '{s} with {p}, {d} at {t}',
    showTitle: 'What this demo shows',
    show: [
      ['One service, one answer', 'Duration and starting price next to every service. In a real project each important service gets its own page, such as “Balayage in Leipzig”.'],
      ['Booking in five steps', 'Service, person, day, time, contact. Connected to the booking system you already use.'],
      ['Opening hours that are right', 'The page says whether you are open right now. The same hours sit in the Google profile, so nobody stands at a closed door.'],
      ['Real reviews, not invented ones', 'Reviews come from your Google profile. We do not put invented quotes on your site.'],
    ],
    showCta: 'A site like this for your salon',
    showOffer: 'Website in 5 days, from €1,490. Scope and price in writing before work starts.',
    footer: 'Atelier Aurin is a fictional salon, built by LocalDominate as a concept demo. Not a client, not a real business.',
    impressum: 'LocalDominate legal notice',
    impressumHref: '/impressum',
    menu: 'Menu',
  },
};

const CSS = `
:root{
  --paper:#f4f0f5; --ink:#241827; --plum:#5a2c54; --brass:#a9843a; --mist:#e6dfe8; --line:rgba(36,24,39,.16);
  --soft:#5f5162; --white:#fffdfd;
  --display:"Bodoni Moda",Didot,"Bodoni 72",Georgia,serif;
  --text:"Hanken Grotesk",system-ui,-apple-system,"Segoe UI",sans-serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}}
body{margin:0;background:var(--paper);color:var(--ink);font:400 17px/1.6 var(--text)}
a{color:inherit}
:focus-visible{outline:2px solid var(--plum);outline-offset:3px}
.wrap{max-width:1200px;margin:0 auto;padding:0 1.25rem}
@media(min-width:760px){.wrap{padding:0 2.5rem}}
h1,h2,h3{font-family:var(--display);font-weight:500;letter-spacing:-.01em;margin:0}
h2{font-size:clamp(2rem,1.3rem + 2.6vw,3.4rem);line-height:1.05}
h3{font-size:1.35rem;line-height:1.2}
p{margin:0}
.lead{color:var(--soft);max-width:38rem}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 1.4rem;border-radius:999px;border:1.5px solid var(--ink);background:var(--ink);color:var(--paper);font:600 15px/1 var(--text);text-decoration:none;cursor:pointer}
.btn:hover{background:var(--plum);border-color:var(--plum)}
.btn.ghost{background:transparent;color:var(--ink)}
.btn.ghost:hover{background:var(--ink);color:var(--paper)}
/* header */
.top{position:sticky;top:0;z-index:20;background:rgba(244,240,245,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;min-height:64px}
.brand{font-family:var(--display);font-size:1.45rem;font-weight:600;text-decoration:none;letter-spacing:.01em}
.brand i{font-style:italic;font-weight:400;color:var(--plum)}
.top nav{display:none;gap:1.75rem;align-items:center}
.top nav a{text-decoration:none;font-weight:500;font-size:15px}
.top nav a:hover{text-decoration:underline;text-underline-offset:4px}
.top .btn{min-height:40px;padding:0 1.1rem;font-size:14px}
@media(min-width:860px){.top nav{display:flex}}
/* hero */
.hero{padding:3rem 0 2rem;overflow:hidden}
.hero .wrap{display:grid;gap:2.5rem}
@media(min-width:960px){.hero .wrap{grid-template-columns:1.1fr .9fr;align-items:center;gap:3rem}.hero{padding:5rem 0 4rem}}
.hero h1{font-size:clamp(3.4rem,1.6rem + 8vw,8.6rem);line-height:.88;font-weight:500;letter-spacing:-.03em}
.hero h1 span{display:block;font-style:italic;font-weight:400;color:var(--plum)}
.tag{margin-top:1.5rem;font-size:1.15rem;font-weight:600}
.hero .lead{margin-top:.75rem;font-size:1.05rem}
.actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2rem}
.facts{display:grid;gap:.35rem;margin-top:2rem;padding-top:1.25rem;border-top:1px solid var(--line);font-size:15px}
.status{display:flex;align-items:center;gap:.55rem;font-weight:600}
.status::before{content:"";width:9px;height:9px;border-radius:50%;background:#9a8f9c}
.status.open::before{background:#3f8f5b;box-shadow:0 0 0 4px rgba(63,143,91,.18)}
.facts small{color:var(--soft);font-size:13px}
/* fan */
.fan{position:relative}
.fan-stage{position:relative;height:340px;max-width:480px;margin:0 auto}
@media(min-width:960px){.fan-stage{height:420px}}
.strand{position:absolute;left:50%;top:6px;width:54px;height:300px;margin-left:-27px;transform-origin:50% 0;border:0;padding:0;cursor:pointer;background:none;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
@media(min-width:960px){.strand{height:370px;width:60px;margin-left:-30px}}
.strand span{position:absolute;inset:0;border-radius:6px 6px 30px 30px / 6px 6px 70px 70px;background:linear-gradient(180deg,var(--r) 0%,var(--r) 12%,var(--t) 92%);box-shadow:inset -6px 0 10px rgba(0,0,0,.12),inset 5px 0 8px rgba(255,255,255,.12)}
.strand span::after{content:"";position:absolute;inset:0;border-radius:inherit;background:repeating-linear-gradient(90deg,rgba(255,255,255,.07) 0 2px,transparent 2px 6px)}
.strand[aria-pressed=true]{z-index:5}
.strand[aria-pressed=true] span{outline:3px solid var(--ink);outline-offset:3px}
.clip{position:absolute;left:50%;top:0;width:96px;height:22px;margin-left:-48px;border-radius:6px;background:var(--ink);z-index:9}
.clip::after{content:"";position:absolute;left:50%;top:7px;width:8px;height:8px;margin-left:-4px;border-radius:50%;background:var(--brass)}
.fan-card{margin:1rem auto 0;max-width:420px;padding:1.1rem 1.25rem;border:1px solid var(--line);border-radius:14px;background:var(--white)}
.fan-card h2{font-size:1.15rem;font-family:var(--text);font-weight:600;letter-spacing:0}
.fan-card .hint{color:var(--soft);font-size:14px}
.fan-card .pick{display:none;margin-top:.6rem}
.fan-card.has .hint{display:none}
.fan-card.has .pick{display:block}
.pick strong{font-family:var(--display);font-size:1.5rem;font-weight:500;display:block;line-height:1.15}
.pick p{font-size:14px;color:var(--soft);margin:.35rem 0 .8rem}
/* services */
section{padding:4.5rem 0}
.svc-head{display:grid;gap:1rem;margin-bottom:2.5rem}
@media(min-width:900px){.svc-head{grid-template-columns:1fr 1fr;align-items:end}}
.svc{list-style:none;margin:0;padding:0;border-top:1px solid var(--ink)}
.svc li{display:grid;grid-template-columns:1fr auto;gap:.35rem 1.5rem;padding:1.4rem 0;border-bottom:1px solid var(--line)}
@media(min-width:760px){.svc li{grid-template-columns:1.1fr 1.6fr 7rem 6.5rem 5.5rem;align-items:baseline}}
.svc h3{font-size:1.4rem}
.svc .d{color:var(--soft);font-size:15px;grid-column:1/-1}
@media(min-width:760px){.svc .d{grid-column:auto}}
.svc .dur{font-size:14px;color:var(--soft);font-variant-numeric:tabular-nums}
.svc .price{font-family:var(--display);font-size:1.35rem;text-align:right;font-variant-numeric:lining-nums}
.svc .price small{font-family:var(--text);font-size:13px;color:var(--soft);margin-right:.25rem}
.svc .b{justify-self:end}
.svc .b button{min-height:40px;padding:0 1rem;border-radius:999px;border:1px solid var(--line);background:transparent;font:600 14px var(--text);cursor:pointer;color:var(--ink)}
.svc .b button:hover{border-color:var(--ink)}
.svc li.flash{background:linear-gradient(90deg,rgba(169,132,58,.14),transparent)}
/* team */
.team{background:var(--mist)}
.people{display:grid;gap:1.5rem;margin-top:2.5rem}
@media(min-width:760px){.people{grid-template-columns:repeat(3,1fr)}}
.person{padding:1.5rem;border-radius:18px;background:var(--paper)}
.mono{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;font-family:var(--display);font-size:2.2rem;font-style:italic;color:var(--ink);background:var(--c)}
.person h3{margin-top:1.1rem;font-size:1.6rem}
.person .role{font-size:14px;color:var(--soft)}
.person .spec{margin-top:.6rem;font-weight:500}
/* reviews slot */
.reviews .slot{margin-top:2rem;display:grid;gap:1rem}
@media(min-width:760px){.reviews .slot{grid-template-columns:repeat(3,1fr)}}
.ghostcard{height:150px;border-radius:16px;border:1.5px dashed var(--line);background:repeating-linear-gradient(135deg,transparent 0 12px,rgba(36,24,39,.03) 12px 24px)}
.reviews p.lead{margin-top:1rem}
.reviews .link{display:inline-block;margin-top:1.25rem;color:var(--soft)}
/* visit */
.visit .grid{display:grid;gap:2.5rem;margin-top:2.5rem}
@media(min-width:900px){.visit .grid{grid-template-columns:1fr 1.15fr}}
.hours{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.hours th,.hours td{padding:.65rem 0;border-bottom:1px solid var(--line);text-align:left;font-weight:400}
.hours td{text-align:right}
.hours tr.today th,.hours tr.today td{font-weight:700}
.special{margin-top:1rem;font-size:14px;color:var(--soft)}
.map{position:relative;border-radius:20px;overflow:hidden;background:#e9e3eb;min-height:300px}
.map svg{display:block;width:100%;height:100%}
.way{margin-top:1rem}
.gift{margin-top:2rem;padding:1.25rem 1.4rem;border-left:3px solid var(--brass);background:var(--white);border-radius:0 12px 12px 0}
.gift h3{font-size:1.2rem}
/* faq */
.faq details{border-bottom:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;padding:1.15rem 2rem 1.15rem 0;position:relative;font-weight:600;font-size:1.05rem}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";position:absolute;right:.25rem;top:1rem;font-size:1.4rem;font-weight:400}
.faq details[open] summary::after{content:"–"}
.faq details p{padding:0 0 1.2rem;color:var(--soft);max-width:42rem}
.faq .list{margin-top:2rem;border-top:1px solid var(--ink)}
/* booking */
.booking{background:var(--ink);color:var(--paper)}
.booking h2{color:var(--paper)}
.bk{margin-top:2rem;display:grid;gap:2rem}
@media(min-width:900px){.bk{grid-template-columns:15rem 1fr}}
.bk ol{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.5rem}
@media(min-width:900px){.bk ol{flex-direction:column;gap:0}}
.bk ol li{font-size:14px;color:rgba(244,240,245,.55);padding:.35rem .7rem;border-radius:999px;border:1px solid rgba(244,240,245,.2)}
@media(min-width:900px){.bk ol li{border:0;border-left:2px solid rgba(244,240,245,.15);border-radius:0;padding:.7rem 1rem}}
.bk ol li.on{color:var(--paper);border-color:var(--brass);font-weight:600}
.bk ol li.done{color:rgba(244,240,245,.8)}
.panel{min-height:300px}
.panel h3{font-family:var(--text);font-weight:600;font-size:1.25rem;margin-bottom:1rem}
.opts{display:grid;gap:.6rem}
@media(min-width:600px){.opts{grid-template-columns:repeat(2,1fr)}}
.opt{display:flex;justify-content:space-between;gap:1rem;align-items:center;min-height:56px;padding:.7rem 1rem;border-radius:12px;border:1px solid rgba(244,240,245,.22);background:transparent;color:var(--paper);font:500 15px var(--text);text-align:left;cursor:pointer}
.opt:hover{border-color:rgba(244,240,245,.6)}
.opt[aria-pressed=true]{border-color:var(--brass);background:rgba(169,132,58,.18)}
.opt small{color:rgba(244,240,245,.6);font-size:13px;white-space:nowrap}
.opt:disabled{opacity:.35;cursor:not-allowed;text-decoration:line-through}
.days{display:grid;grid-template-columns:repeat(auto-fill,minmax(5.2rem,1fr));gap:.5rem}
.days .opt,.times .opt{flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0;padding:.5rem}
.times{display:grid;grid-template-columns:repeat(auto-fill,minmax(5rem,1fr));gap:.5rem}
.field{display:grid;gap:.35rem;margin-bottom:1rem;max-width:26rem}
.field label{font-size:14px;font-weight:600}
.field input{min-height:48px;padding:0 .9rem;border-radius:10px;border:1px solid rgba(244,240,245,.3);background:rgba(244,240,245,.06);color:var(--paper);font:16px var(--text)}
.field input:focus-visible{outline:2px solid var(--brass);outline-offset:1px}
.err{color:#ffb4a8;font-size:14px;min-height:1.2em}
.navrow{display:flex;gap:.75rem;margin-top:1.5rem;flex-wrap:wrap}
.booking .btn{background:var(--paper);color:var(--ink);border-color:var(--paper)}
.booking .btn:hover{background:var(--brass);border-color:var(--brass)}
.booking .btn.ghost{background:transparent;color:var(--paper);border-color:rgba(244,240,245,.4)}
.booking .btn:disabled{opacity:.4;cursor:not-allowed}
.sum{margin-top:.5rem;color:rgba(244,240,245,.7);font-size:15px}
.done{padding:1.5rem;border-radius:16px;border:1px solid var(--brass)}
.done strong{display:block;font-family:var(--display);font-size:1.6rem;font-weight:500;margin:.3rem 0 .6rem}
.done p{color:rgba(244,240,245,.75)}
/* show */
.show{background:var(--mist)}
.show ul{list-style:none;padding:0;margin:2.5rem 0 0;display:grid;gap:1.5rem}
@media(min-width:760px){.show ul{grid-template-columns:repeat(2,1fr)}}
.show li{padding-top:1rem;border-top:2px solid var(--plum)}
.show li h3{font-family:var(--text);font-weight:700;font-size:1.05rem}
.show li p{margin-top:.4rem;color:var(--soft)}
.show .cta{margin-top:3rem;display:flex;flex-wrap:wrap;gap:1rem 1.5rem;align-items:center}
.show .cta p{color:var(--soft);max-width:28rem}
footer{padding:2.5rem 0 3rem;font-size:14px;color:var(--soft);border-top:1px solid var(--line)}
footer .wrap{display:flex;flex-wrap:wrap;gap:.5rem 2rem;justify-content:space-between}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
`;

function dur(t, m) {
  return m >= 120 ? `${(m / 60).toLocaleString(t === T.de ? 'de-DE' : 'en-GB')} ${t.hrs}` : `${m} ${t.min}`;
}
function price(lang, n) {
  return lang === 'de' ? `${n} €` : `€${n}`;
}

const MAP_SVG = `<svg viewBox="0 0 600 380" role="img" aria-labelledby="mapt" preserveAspectRatio="xMidYMid slice">
<title id="mapt">%%MAPTITLE%%</title>
<rect width="600" height="380" fill="#ebe5ed"/>
<g fill="#ddd4df">
<rect x="20" y="20" width="160" height="110" rx="6"/><rect x="200" y="20" width="150" height="110" rx="6"/><rect x="370" y="20" width="210" height="110" rx="6"/>
<rect x="20" y="160" width="160" height="90" rx="6"/><rect x="370" y="160" width="210" height="90" rx="6"/>
<rect x="20" y="280" width="250" height="80" rx="6"/><rect x="290" y="280" width="290" height="80" rx="6"/>
</g>
<rect x="200" y="160" width="150" height="90" rx="6" fill="#cfe0cf"/>
<path d="M0 145 H600 M0 265 H600 M190 0 V380 M360 0 V380" stroke="#fff" stroke-width="14"/>
<path d="M0 145 H600" stroke="#a9843a" stroke-width="3" stroke-dasharray="10 8"/>
<circle cx="275" cy="145" r="9" fill="#fff" stroke="#241827" stroke-width="3"/>
<g transform="translate(330 205)"><circle r="24" fill="#5a2c54"/><circle r="8" fill="#f4f0f5"/></g>
<text x="275" y="125" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-size="14" font-weight="600" fill="#241827">%%STOP%%</text>
<text x="330" y="250" text-anchor="middle" font-family="Bodoni Moda,serif" font-size="18" font-style="italic" fill="#241827">Atelier Aurin</text>
</svg>`;

export function render(lang) {
  const t = T[lang];
  const svcRows = SERVICES.map(
    ([id, m, p]) => `<li id="svc-${id}">
      <h3>${esc(t.service[id][0])}</h3>
      <p class="d">${esc(t.service[id][1])}</p>
      <p class="dur">${dur(t, m)}</p>
      <p class="price"><small>${t.from}</small>${price(lang, p)}</p>
      <p class="b"><button type="button" data-book="${id}" aria-label="${esc(t.bookThis + ': ' + t.service[id][0])}">${t.bookThis}</button></p>
    </li>`
  ).join('');

  const angles = [-33, -20, -7, 6, 19, 32];
  const strands = SWATCHES.map(
    ([id, r, tip], i) =>
      `<button type="button" class="strand" data-sw="${id}" aria-pressed="false" style="--r:${r};--t:${tip};transform:rotate(${angles[i]}deg)"><span></span><span class="sr">${esc(t.swatch[id])}</span></button>`
  ).join('');

  const people = TEAM.map(
    ([id, c]) => `<li class="person"><div class="mono" style="--c:${c}" aria-hidden="true">${t.team[id][0][0]}</div>
      <h3>${t.team[id][0]}</h3><p class="role">${t.team[id][1]}</p><p class="spec">${t.team[id][2]}</p></li>`
  ).join('');

  const order = [2, 3, 4, 5, 6, 0, 1];
  const hoursRows = order
    .map((d) => {
      const h = HOURS[d];
      const v = h ? `${h[0] / 60}:00 – ${h[1] / 60}:00` : t.closed;
      return `<tr data-day="${d}"><th scope="row">${t.days[d]}</th><td>${v}</td></tr>`;
    })
    .join('');

  const faq = t.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  const show = t.show.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('');

  const body = `
<header class="top"><div class="wrap">
  <a class="brand" href="#top">Atelier <i>Aurin</i></a>
  <nav aria-label="${t.menu}"><a href="#leistungen">${t.nav.services}</a><a href="#team">${t.nav.team}</a><a href="#anfahrt">${t.nav.visit}</a></nav>
  <a class="btn" href="#termin">${t.nav.book}</a>
</div></header>
<main id="top">
<section class="hero" aria-labelledby="h1"><div class="wrap">
  <div>
    <h1 id="h1">Atelier <span>Aurin</span></h1>
    <p class="tag">${t.tagline}</p>
    <p class="lead">${t.lead}</p>
    <div class="actions"><a class="btn" href="#termin">${t.ctaBook}</a><a class="btn ghost" href="#leistungen">${t.ctaPrices}</a></div>
    <div class="facts">
      <p class="status" id="status" aria-live="polite">&nbsp;</p>
      <p>${t.address}</p>
      <p>${t.phone} <small>(${t.phoneNote})</small></p>
    </div>
  </div>
  <div class="fan">
    <div class="fan-stage"><div class="clip" aria-hidden="true"></div>${strands}</div>
    <div class="fan-card" id="fancard" aria-live="polite">
      <h2>${t.fanTitle}</h2>
      <p class="hint">${t.fanHint}</p>
      <div class="pick"><span class="hint2">${t.fanMatch}</span><strong id="fan-name"></strong><p id="fan-svc"></p>
        <button type="button" class="btn" id="fan-book">${t.fanBook}</button></div>
    </div>
  </div>
</div></section>

<section id="leistungen" aria-labelledby="svc-t"><div class="wrap">
  <div class="svc-head"><h2 id="svc-t">${t.servicesTitle}</h2><p class="lead">${t.servicesLead}</p></div>
  <ul class="svc">${svcRows}</ul>
</div></section>

<section id="team" class="team" aria-labelledby="team-t"><div class="wrap">
  <h2 id="team-t">${t.teamTitle}</h2>
  <p class="lead" style="margin-top:1rem">${t.teamLead}</p>
  <ul class="people" style="list-style:none;padding:0">${people}</ul>
</div></section>

<section id="termin" class="booking" aria-labelledby="bk-t"><div class="wrap">
  <h2 id="bk-t">${t.bookingTitle}</h2>
  <div class="bk">
    <ol id="bk-steps">${t.steps.map((s, i) => `<li data-i="${i}">${i + 1}. ${s}</li>`).join('')}</ol>
    <div class="panel" id="bk-panel" aria-live="polite"></div>
  </div>
</div></section>

<section class="reviews" aria-labelledby="rv-t"><div class="wrap">
  <h2 id="rv-t">${t.reviewsTitle}</h2>
  <p class="lead">${t.reviewsText}</p>
  <div class="slot" aria-hidden="true"><div class="ghostcard"></div><div class="ghostcard"></div><div class="ghostcard"></div></div>
  <span class="link">${t.reviewsLink}</span>
</div></section>

<section id="anfahrt" class="visit" aria-labelledby="vs-t"><div class="wrap">
  <h2 id="vs-t">${t.visitTitle}</h2>
  <div class="grid">
    <div>
      <h3>${t.hoursTitle}</h3>
      <table class="hours" style="margin-top:1rem"><tbody>${hoursRows}</tbody></table>
      <p class="special">${t.special}</p>
      <div class="gift"><h3>${t.giftTitle}</h3><p>${t.giftText}</p></div>
    </div>
    <div>
      <div class="map">${MAP_SVG.replace('%%MAPTITLE%%', esc(t.wayTitle)).replace('%%STOP%%', 'Beispielplatz')}</div>
      <h3 style="margin-top:1.5rem">${t.wayTitle}</h3>
      <p class="way">${t.way}</p>
      <p style="margin-top:1rem"><a class="btn ghost" href="#anfahrt">${t.route}</a></p>
    </div>
  </div>
</div></section>

<section class="faq" aria-labelledby="fq-t"><div class="wrap">
  <h2 id="fq-t">${t.faqTitle}</h2>
  <div class="list">${faq}</div>
</div></section>

<section class="show" aria-labelledby="sh-t"><div class="wrap">
  <h2 id="sh-t">${t.showTitle}</h2>
  <ul>${show}</ul>
  <div class="cta"><a class="btn" href="${t.barLink.href}">${t.showCta}</a><p>${t.showOffer}</p></div>
</div></section>
</main>
<footer><div class="wrap"><p>${t.footer}</p><a href="${t.impressumHref}">${t.impressum}</a></div></footer>`;

  const data = {
    lang,
    hours: HOURS,
    services: SERVICES.map(([id, m, p]) => ({ id, name: t.service[id][0], dur: dur(t, m), price: `${t.from} ${price(lang, p)}` })),
    swatches: Object.fromEntries(SWATCHES.map(([id, , , svc]) => [id, { name: t.swatch[id], svc }])),
    team: TEAM.map(([id]) => ({ id, name: t.team[id][0] })),
    t: {
      openUntil: t.openUntil, opensToday: t.opensToday, opensOn: t.opensOn, days: t.days,
      anyone: t.anyone, pickService: t.pickService, pickPerson: t.pickPerson, pickDay: t.pickDay, pickTime: t.pickTime,
      yourData: t.yourData, name: t.name, contact: t.contact, back: t.back, next: t.next, confirm: t.confirm,
      errName: t.errName, errContact: t.errContact, noSlots: t.noSlots, doneTitle: t.doneTitle, doneText: t.doneText,
      again: t.again, summary: t.summary,
    },
  };

  const js = `${HOURS_JS}
var D=${JSON.stringify(data)};
(function(){
  var st=ldStatus(D.hours,D.t), el=document.getElementById('status');
  el.textContent=st.text; if(st.open) el.classList.add('open');
  var today=new Date().getDay(), row=document.querySelector('.hours tr[data-day="'+today+'"]'); if(row) row.classList.add('today');
})();
/* fan */
(function(){
  var card=document.getElementById('fancard'), nm=document.getElementById('fan-name'), sv=document.getElementById('fan-svc'), cur=null;
  var strands=[].slice.call(document.querySelectorAll('.strand'));
  strands.forEach(function(b){ b.addEventListener('click',function(){
    strands.forEach(function(x){x.setAttribute('aria-pressed','false')}); b.setAttribute('aria-pressed','true');
    var s=D.swatches[b.dataset.sw]; cur=s.svc; var svc=D.services.filter(function(x){return x.id===cur})[0];
    nm.textContent=s.name; sv.textContent=svc.name+', '+svc.dur+', '+svc.price; card.classList.add('has');
  });});
  document.getElementById('fan-book').addEventListener('click',function(){ if(cur) startBooking(cur); });
})();
/* booking */
var B={step:0,svc:null,who:null,day:null,time:null};
var panel=document.getElementById('bk-panel'), stepsEl=[].slice.call(document.querySelectorAll('#bk-steps li'));
function h(tag,attrs,txt){var e=document.createElement(tag); for(var k in attrs){ if(k==='on') e.addEventListener('click',attrs[k]); else e.setAttribute(k,attrs[k]); } if(txt!=null) e.textContent=txt; return e;}
function fmtDay(d,opt){return d.toLocaleDateString(D.lang==='de'?'de-DE':'en-GB',opt);}
function nextDays(){var out=[], d=new Date(); d.setHours(0,0,0,0); for(var i=1;out.length<12&&i<30;i++){var x=new Date(d); x.setDate(d.getDate()+i); out.push(x);} return out;}
function seed(s){var x=0; for(var i=0;i<s.length;i++){x=(x*31+s.charCodeAt(i))>>>0;} return x;}
function slots(day){var hrs=D.hours[day.getDay()]; if(!hrs) return []; var out=[], k=seed(day.toDateString()+(B.who||'')); for(var m=hrs[0]; m<=hrs[1]-60; m+=30){ k=(k*1103515245+12345)>>>0; out.push({m:m,free:(k%7)>2}); } return out;}
function fmtT(m){var h=Math.floor(m/60), mm=m%60; return h+':'+(mm<10?'0':'')+mm;}
function draw(){
  stepsEl.forEach(function(li,i){li.className=i===B.step?'on':(i<B.step?'done':''); if(i===B.step) li.setAttribute('aria-current','step'); else li.removeAttribute('aria-current');});
  panel.innerHTML=''; var tt=D.t;
  if(B.step===0){ panel.appendChild(h('h3',{},tt.pickService)); var o=h('div',{class:'opts'});
    D.services.forEach(function(s){ var b=h('button',{type:'button',class:'opt','aria-pressed':String(B.svc===s.id),on:function(){B.svc=s.id;B.step=1;draw();}}); b.appendChild(h('span',{},s.name)); b.appendChild(h('small',{},s.dur+' · '+s.price)); o.appendChild(b); });
    panel.appendChild(o); }
  if(B.step===1){ panel.appendChild(h('h3',{},tt.pickPerson)); var o1=h('div',{class:'opts'});
    [{id:'any',name:tt.anyone}].concat(D.team).forEach(function(p){ o1.appendChild(h('button',{type:'button',class:'opt','aria-pressed':String(B.who===p.id),on:function(){B.who=p.id;B.step=2;draw();}},p.name)); });
    panel.appendChild(o1); nav(true,false); }
  if(B.step===2){ panel.appendChild(h('h3',{},tt.pickDay)); var o2=h('div',{class:'days'});
    nextDays().forEach(function(d){ var closed=!D.hours[d.getDay()]; var b=h('button',{type:'button',class:'opt','aria-pressed':String(B.day&&B.day.toDateString()===d.toDateString()),on:function(){B.day=d;B.time=null;B.step=3;draw();}});
      b.appendChild(h('span',{},fmtDay(d,{weekday:'short'}))); b.appendChild(h('small',{},fmtDay(d,{day:'numeric',month:'short'}))); if(closed) b.disabled=true; o2.appendChild(b); });
    panel.appendChild(o2); nav(true,false); }
  if(B.step===3){ panel.appendChild(h('h3',{},tt.pickTime)); var s=slots(B.day), o3=h('div',{class:'times'});
    if(!s.some(function(x){return x.free})) panel.appendChild(h('p',{},tt.noSlots));
    s.forEach(function(x){ var b=h('button',{type:'button',class:'opt','aria-pressed':String(B.time===x.m),on:function(){B.time=x.m;B.step=4;draw();}},fmtT(x.m)); if(!x.free) b.disabled=true; o3.appendChild(b); });
    panel.appendChild(o3); nav(true,false); }
  if(B.step===4){ panel.appendChild(h('h3',{},tt.yourData)); panel.appendChild(h('p',{class:'sum'},summary()));
    var f=h('form',{novalidate:'',id:'bk-form'}); f.style.marginTop='1.25rem';
    [['bk-name',tt.name,'text','name'],['bk-contact',tt.contact,'text','email']].forEach(function(r){ var w=h('div',{class:'field'}); w.appendChild(h('label',{for:r[0]},r[1])); w.appendChild(h('input',{id:r[0],type:r[2],autocomplete:r[3]})); f.appendChild(w); });
    var err=h('p',{class:'err',role:'alert'}); f.appendChild(err);
    var row=h('div',{class:'navrow'}); row.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){B.step=3;draw();}},tt.back)); row.appendChild(h('button',{type:'submit',class:'btn'},tt.confirm)); f.appendChild(row);
    f.addEventListener('submit',function(e){e.preventDefault(); var n=document.getElementById('bk-name'), c=document.getElementById('bk-contact');
      if(!n.value.trim()){err.textContent=tt.errName;n.focus();return;} if(!c.value.trim()){err.textContent=tt.errContact;c.focus();return;} B.step=5; draw();});
    panel.appendChild(f); }
  if(B.step===5){ stepsEl.forEach(function(li){li.className='done';}); var d=h('div',{class:'done'}); d.appendChild(h('p',{},tt.doneTitle)); d.appendChild(h('strong',{},summary())); d.appendChild(h('p',{},tt.doneText));
    var a=h('button',{type:'button',class:'btn ghost',on:function(){B={step:0,svc:null,who:null,day:null,time:null};draw();}},tt.again); a.style.marginTop='1.25rem'; d.appendChild(a); panel.appendChild(d); }
  function nav(back){ var r=h('div',{class:'navrow'}); if(back) r.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){B.step-=1;draw();}},tt.back)); panel.appendChild(r); }
}
function summary(){var s=D.services.filter(function(x){return x.id===B.svc})[0], p=B.who==='any'?D.t.anyone:D.team.filter(function(x){return x.id===B.who})[0].name;
  return D.t.summary.replace('{s}',s.name).replace('{p}',p).replace('{d}',fmtDay(B.day,{weekday:'long',day:'numeric',month:'long'})).replace('{t}',fmtT(B.time));}
function startBooking(id){B={step:1,svc:id,who:null,day:null,time:null}; draw(); var sec=document.getElementById('termin'); sec.scrollIntoView({block:'start'}); var f=panel.querySelector('button'); if(f) f.focus({preventScroll:true});}
[].slice.call(document.querySelectorAll('[data-book]')).forEach(function(b){b.addEventListener('click',function(){startBooking(b.dataset.book);});});
draw();
`;

  const icon =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23241827'/%3E%3Ctext x='16' y='23' text-anchor='middle' font-family='Georgia' font-style='italic' font-size='20' fill='%23f4f0f5'%3EA%3C/text%3E%3C/svg%3E";

  return page({
    lang,
    slug,
    title: t.title,
    description: t.description,
    theme: '#241827',
    icon,
    fonts: ['bodoni', 'hanken'],
    barText: t.bar,
    barLink: t.barLink,
    css: CSS,
    body,
    js,
  });
}
