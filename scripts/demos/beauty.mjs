// Demo: Velin, a fictional beauty studio (facials, nails, lashes) in Hamburg. Built to show what the
// LocalDominate guide for beauty studios recommends: treatments with duration and price, a short
// finder that leads to the right treatment, online booking, live opening hours, and honest slots for
// reviews and before-and-after photos.
import { esc, page, HOURS_JS } from './shell.mjs';

export const slug = 'beauty';

// id, group, minutes, price from (EUR)
const TREATMENTS = [
  ['classic', 'face', 75, 89],
  ['calm', 'face', 60, 79],
  ['pure', 'face', 60, 75],
  ['glow', 'face', 45, 65],
  ['mani', 'hands', 45, 38],
  ['gel', 'hands', 90, 69],
  ['lash', 'eyes', 60, 59],
  ['brows', 'eyes', 30, 25],
];
const HOURS = { 0: null, 1: null, 2: [600, 1140], 3: [600, 1140], 4: [600, 1200], 5: [600, 1140], 6: [600, 960] };

const T = {
  de: {
    title: 'Velin: Kosmetik und Nägel in Hamburg (Konzept-Demo)',
    description:
      'Konzept-Demo von LocalDominate: die Website eines erfundenen Kosmetikstudios mit Behandlungs-Finder, Preisen, Online-Termin und Öffnungszeiten.',
    bar: ' Velin ist ein erfundenes Studio. Namen, Preise, Zeiten und Adresse sind Beispiele. Buchungen werden nicht gesendet.',
    barLink: { href: '/de/friseur', text: 'So eine Seite für Ihr Studio' },
    menu: 'Menü',
    nav: { treat: 'Behandlungen', visit: 'Besuch', book: 'Termin buchen' },
    kicker: 'Kosmetik, Nägel, Wimpern in Hamburg-Eimsbüttel',
    lead: 'Ein ruhiges Studio mit zwei Kabinen und einem Nageltisch. Wir nehmen uns Zeit für Ihre Haut und sagen Ihnen vorher, was es kostet.',
    ctaBook: 'Termin buchen',
    ctaList: 'Alle Behandlungen',
    address: 'Beispielallee 7, 20257 Hamburg',
    openUntil: 'Jetzt geöffnet bis {t} Uhr',
    opensToday: 'Heute ab {t} Uhr geöffnet',
    opensOn: 'Geschlossen. Wieder geöffnet am {d} ab {t} Uhr',
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    finderTitle: 'Was braucht Ihre Haut gerade?',
    finderNote: 'Drei kurze Fragen. Die Empfehlung ersetzt nicht die Hautanalyse vor Ort.',
    q: [
      ['Wie fühlt sich Ihre Haut meistens an?', ['Trocken', 'Fettig', 'Empfindlich', 'Gemischt']],
      ['Was wünschen Sie sich?', ['Ruhe und Pflege', 'Reine Poren', 'Frische vor einem Anlass', 'Gepflegte Hände']],
      ['Wie viel Zeit haben Sie?', ['Etwa 45 Minuten', 'Etwa eine Stunde', 'Gern länger']],
    ],
    result: 'Unsere Empfehlung',
    resultBook: 'Diese Behandlung buchen',
    restart: 'Noch einmal',
    groups: { face: 'Gesicht', hands: 'Hände und Nägel', eyes: 'Wimpern und Brauen' },
    treatTitle: 'Behandlungen und Preise',
    treatLead: 'Jede Behandlung mit Dauer und Startpreis. Vor dem Start sehen wir uns Ihre Haut an und nennen den genauen Preis.',
    from: 'ab',
    min: 'Min.',
    t: {
      classic: ['Klassische Gesichtsbehandlung', 'Reinigung, Peeling, Ausreinigung, Maske, Massage. Für fast jeden Hauttyp.'],
      calm: ['Sanfte Behandlung für empfindliche Haut', 'Wenige, milde Produkte ohne Duftstoffe. Ohne Ausreinigung, mit kühlender Maske.'],
      pure: ['Tiefenreinigung', 'Gründliche Ausreinigung und beruhigende Maske für Haut mit Unreinheiten.'],
      glow: ['Glow vor dem Anlass', 'Feuchtigkeit und Frische, ideal einen bis zwei Tage vor einem Fest.'],
      mani: ['Maniküre mit Lack', 'Form, Nagelhaut, Handmassage und Lack Ihrer Wahl.'],
      gel: ['Gelnägel, Neumodellage', 'Modellage auf Naturnagel oder Verlängerung, in Natur oder Farbe.'],
      lash: ['Wimpernlifting und Färben', 'Schwung für die eigenen Wimpern, hält etwa sechs Wochen.'],
      brows: ['Augenbrauen zupfen und färben', 'Form nach Ihrem Gesicht, mit Pflanzenfarbe.'],
    },
    book: 'Buchen',
    bookingTitle: 'Termin buchen',
    steps: ['Behandlung', 'Tag', 'Uhrzeit', 'Ihre Daten'],
    pickT: 'Welche Behandlung möchten Sie buchen?',
    pickDay: 'An welchem Tag?',
    pickTime: 'Zu welcher Uhrzeit?',
    yourData: 'Wie erreichen wir Sie?',
    name: 'Ihr Name',
    contact: 'Telefon oder E-Mail',
    note: 'Allergien oder Wünsche (optional)',
    back: 'Zurück',
    confirm: 'Termin anfragen',
    errName: 'Bitte geben Sie Ihren Namen an.',
    errContact: 'Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an.',
    doneTitle: 'So sähe Ihre Bestätigung aus',
    doneText:
      'Demo: Es wurde nichts gesendet. Im echten Projekt landet der Termin im Kalender des Studios, und die Kundin bekommt eine Erinnerung mit Absage-Link.',
    again: 'Neu beginnen',
    summary: '{s}, {d} um {t} Uhr',
    photosTitle: 'Vorher und nachher',
    photosText:
      'Im echten Projekt zeigen wir hier Ergebnisse aus Ihrem Studio, nur mit schriftlicher Einwilligung der Kundin und ohne Versprechen, die niemand halten kann. In dieser Demo bleibt der Platz leer.',
    reviewsTitle: 'Bewertungen auf Google',
    reviewsText: 'Hier stehen im echten Projekt Ihre Google-Bewertungen, verlinkt zu Ihrem Profil. Erfundene Stimmen zeigen wir nicht.',
    visitTitle: 'Öffnungszeiten',
    closed: 'geschlossen',
    special: 'Sonderzeiten: 24. Dezember bis 1. Januar geschlossen.',
    way: 'U-Bahn bis Haltestelle Beispielplatz, vier Minuten zu Fuß. Ebenerdiger Eingang.',
    giftTitle: 'Gutschein',
    giftText: 'Für eine Behandlung oder einen Betrag, im Studio oder als PDF per E-Mail.',
    faqTitle: 'Häufige Fragen',
    faq: [
      ['Ich habe sehr empfindliche Haut. Was buche ich?', 'Die sanfte Behandlung. Schreiben Sie bekannte Allergien beim Buchen dazu; wir passen die Produkte an.'],
      ['Wie lange halten Gelnägel?', 'In der Regel drei bis vier Wochen. Danach füllen wir auf oder nehmen sie schonend ab.'],
      ['Kann ich absagen?', 'Bis 24 Stunden vorher kostenlos, über den Link in Ihrer Bestätigung.'],
      ['Kann ich vor Ort bezahlen?', 'Ja, mit Karte oder bar.'],
    ],
    showTitle: 'Was diese Demo zeigt',
    show: [
      ['Vom Bedürfnis zur Behandlung', 'Drei Fragen führen zur passenden Behandlung mit Dauer und Preis. Die Entscheidung bleibt bei der Kundin.'],
      ['Termin in vier Schritten', 'Behandlung, Tag, Uhrzeit, Kontakt. Angebunden an das Buchungssystem, das Sie schon nutzen.'],
      ['Vorher-Nachher nur mit Einwilligung', 'Ergebnisbilder zeigen wir nur mit schriftlicher Zustimmung und ohne Erfolgsversprechen.'],
      ['Echte Bewertungen statt erfundener', 'Bewertungen kommen aus Ihrem Google-Profil. Erfundene Stimmen setzen wir nicht auf Ihre Seite.'],
    ],
    showCta: 'So eine Seite für Ihr Studio',
    showOffer: 'Website in 5 Tagen, ab 1.490 €. Umfang und Preis schriftlich vor dem Start.',
    footer: 'Velin ist ein erfundenes Studio, gebaut von LocalDominate als Konzept-Demo. Kein Kunde, kein echter Betrieb.',
    impressum: 'Impressum von LocalDominate',
  },
  en: {
    title: 'Velin: skin, nails and lashes in Hamburg (concept demo)',
    description:
      'Concept demo by LocalDominate: the website of a fictional beauty studio with a treatment finder, prices, online booking and opening hours.',
    bar: ' Velin is a fictional studio. Names, prices, hours and address are examples. Bookings are not sent.',
    barLink: { href: '/industries/hair-salons', text: 'A site like this for your studio' },
    menu: 'Menu',
    nav: { treat: 'Treatments', visit: 'Visit', book: 'Book now' },
    kicker: 'Skin, nails and lashes in Hamburg, Germany',
    lead: 'A quiet studio with two treatment rooms and one nail table. We take time for your skin and tell you the price before we start.',
    ctaBook: 'Book an appointment',
    ctaList: 'All treatments',
    address: 'Beispielallee 7, 20257 Hamburg',
    openUntil: 'Open now until {t}',
    opensToday: 'Opens today at {t}',
    opensOn: 'Closed. Opens {d} at {t}',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    finderTitle: 'What does your skin need right now?',
    finderNote: 'Three short questions. The suggestion does not replace a skin consultation in the studio.',
    q: [
      ['How does your skin usually feel?', ['Dry', 'Oily', 'Sensitive', 'Combination']],
      ['What would you like?', ['Calm and care', 'Clear pores', 'A fresh look before an event', 'Well-kept hands']],
      ['How much time do you have?', ['About 45 minutes', 'About an hour', 'Longer is fine']],
    ],
    result: 'Our suggestion',
    resultBook: 'Book this treatment',
    restart: 'Start over',
    groups: { face: 'Face', hands: 'Hands and nails', eyes: 'Lashes and brows' },
    treatTitle: 'Treatments and prices',
    treatLead: 'Every treatment with its duration and starting price. We look at your skin before we start and confirm the exact price.',
    from: 'from',
    min: 'min',
    t: {
      classic: ['Classic facial', 'Cleanse, peel, extraction, mask, massage. For almost every skin type.'],
      calm: ['Gentle facial for sensitive skin', 'Few, mild products without fragrance. No extraction, with a cooling mask.'],
      pure: ['Deep cleanse', 'Thorough extraction and a calming mask for blemish-prone skin.'],
      glow: ['Glow before the event', 'Hydration and freshness, ideal one or two days before a celebration.'],
      mani: ['Manicure with polish', 'Shape, cuticles, hand massage and the polish of your choice.'],
      gel: ['Gel nails, full set', 'On natural nails or with extensions, natural or in colour.'],
      lash: ['Lash lift and tint', 'Lift for your own lashes, lasts about six weeks.'],
      brows: ['Brow shaping and tint', 'Shape to suit your face, with plant-based tint.'],
    },
    book: 'Book',
    bookingTitle: 'Book an appointment',
    steps: ['Treatment', 'Day', 'Time', 'Your details'],
    pickT: 'Which treatment would you like?',
    pickDay: 'Which day?',
    pickTime: 'What time?',
    yourData: 'How can we reach you?',
    name: 'Your name',
    contact: 'Phone or email',
    note: 'Allergies or wishes (optional)',
    back: 'Back',
    confirm: 'Request appointment',
    errName: 'Please enter your name.',
    errContact: 'Please enter a phone number or an email address.',
    doneTitle: 'This is what your confirmation would look like',
    doneText:
      'Demo: nothing was sent. In a real project the appointment lands in the studio’s calendar, and the client gets a reminder with a cancellation link.',
    again: 'Start again',
    summary: '{s}, {d} at {t}',
    photosTitle: 'Before and after',
    photosText:
      'In a real project this shows results from your studio, only with the client’s written consent and without promises nobody can keep. In this demo the space stays empty.',
    reviewsTitle: 'Reviews on Google',
    reviewsText: 'In a real project this shows your Google reviews, linked to your profile. We do not show invented quotes.',
    visitTitle: 'Opening hours',
    closed: 'closed',
    special: 'Holiday hours: closed from 24 December to 1 January.',
    way: 'Underground to Beispielplatz, four minutes on foot. Step-free entrance.',
    giftTitle: 'Gift vouchers',
    giftText: 'For a treatment or an amount, in the studio or as a PDF by email.',
    faqTitle: 'Questions',
    faq: [
      ['My skin is very sensitive. What should I book?', 'The gentle facial. Add known allergies when you book; we adapt the products.'],
      ['How long do gel nails last?', 'Usually three to four weeks. Then we refill them or take them off gently.'],
      ['Can I cancel?', 'Free of charge up to 24 hours before, through the link in your confirmation.'],
      ['Can I pay in the studio?', 'Yes, by card or cash.'],
    ],
    showTitle: 'What this demo shows',
    show: [
      ['From need to treatment', 'Three questions lead to a suitable treatment with duration and price. The client still decides.'],
      ['Booking in four steps', 'Treatment, day, time, contact. Connected to the booking system you already use.'],
      ['Before-and-after only with consent', 'Result photos appear only with written consent and without promises of results.'],
      ['Real reviews, not invented ones', 'Reviews come from your Google profile. We do not put invented quotes on your site.'],
    ],
    showCta: 'A site like this for your studio',
    showOffer: 'Website in 5 days, from €1,490. Scope and price in writing before work starts.',
    footer: 'Velin is a fictional studio, built by LocalDominate as a concept demo. Not a client, not a real business.',
    impressum: 'LocalDominate legal notice',
  },
};

const CSS = `
:root{
  --mint:#e8f0ec; --teal:#173c3b; --blush:#e6b5a8; --pearl:#fafbf9; --sage:#9fb8ad; --line:rgba(23,60,59,.15); --soft:#4f6665;
  --d:"Marcellus",Optima,"Candara",serif; --f:"Karla",system-ui,-apple-system,"Segoe UI",sans-serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}}
body{margin:0;background:var(--mint);color:var(--teal);font:400 17px/1.65 var(--f)}
a{color:inherit}
:focus-visible{outline:2px solid var(--teal);outline-offset:3px}
.wrap{max-width:1180px;margin:0 auto;padding:0 1.25rem}
@media(min-width:760px){.wrap{padding:0 2.5rem}}
h1,h2,h3{font-family:var(--d);font-weight:400;margin:0;line-height:1.1}
h2{font-size:clamp(2rem,1.4rem + 2.3vw,3.2rem)}
h3{font-size:1.3rem}
p{margin:0}
.lead{color:var(--soft);max-width:38rem}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 1.5rem;border-radius:999px;border:1.5px solid var(--teal);background:var(--teal);color:var(--pearl);font:600 15px var(--f);text-decoration:none;cursor:pointer}
.btn:hover{background:#245756;border-color:#245756}
.btn.ghost{background:transparent;color:var(--teal)}
.btn.ghost:hover{background:var(--teal);color:var(--pearl)}
.top{position:sticky;top:0;z-index:20;background:rgba(232,240,236,.9);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;min-height:64px}
.brand{font-family:var(--d);font-size:1.7rem;text-decoration:none;letter-spacing:.12em}
.top nav{display:none;gap:1.8rem}
.top nav a{text-decoration:none;font-weight:600;font-size:15px}
.top nav a:hover{text-decoration:underline;text-underline-offset:4px}
@media(min-width:860px){.top nav{display:flex}}
.top .btn{min-height:40px;padding:0 1.1rem;font-size:14px}
/* hero */
.hero{position:relative;overflow:hidden;padding:3rem 0 3.5rem}
.hero .wrap{position:relative;display:grid;gap:2.5rem}
@media(min-width:960px){.hero .wrap{grid-template-columns:1fr 1fr;align-items:center}.hero{padding:5rem 0}}
.orb{position:absolute;border-radius:50%;pointer-events:none}
.orb.a{width:620px;height:620px;right:-160px;top:-180px;background:radial-gradient(circle at 35% 35%,#fbe7e0 0%,#efc9be 38%,rgba(230,181,168,0) 70%)}
.orb.b{width:340px;height:340px;left:-120px;bottom:-140px;background:radial-gradient(circle at 50% 50%,rgba(159,184,173,.55),rgba(159,184,173,0) 70%)}
.hero h1{font-size:clamp(4.5rem,2.5rem + 9vw,10rem);letter-spacing:.14em;line-height:.9}
.kicker{margin-top:1.25rem;font-weight:700;font-size:1.05rem}
.hero .lead{margin-top:.6rem}
.actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.75rem}
.status{display:flex;align-items:center;gap:.55rem;margin-top:1.75rem;font-weight:600;font-size:15px}
.status::before{content:"";width:9px;height:9px;border-radius:50%;background:#8aa09a}
.status.open::before{background:#2f8a5f;box-shadow:0 0 0 4px rgba(47,138,95,.18)}
.addr{font-size:15px;color:var(--soft);margin-top:.25rem}
/* finder */
.finder{position:relative;background:var(--pearl);border-radius:28px;padding:1.5rem;border:1px solid var(--line)}
@media(min-width:760px){.finder{padding:2rem}}
.finder h2{font-size:1.9rem}
.finder .note{font-size:14px;color:var(--soft);margin-top:.4rem}
.prog{display:flex;gap:.4rem;margin:1.2rem 0 1rem}
.prog i{flex:1;height:4px;border-radius:2px;background:var(--line)}
.prog i.on{background:var(--teal)}
.fq{font-weight:700;margin-bottom:.75rem}
.answers{display:grid;gap:.5rem}
@media(min-width:520px){.answers{grid-template-columns:1fr 1fr}}
.ans{min-height:52px;padding:.6rem 1rem;border-radius:16px;border:1.5px solid var(--line);background:var(--mint);font:600 15px var(--f);color:var(--teal);cursor:pointer;text-align:left}
.ans:hover{border-color:var(--teal)}
.res .label{font-size:14px;color:var(--soft)}
.res strong{display:block;font-family:var(--d);font-weight:400;font-size:2rem;line-height:1.1;margin:.2rem 0 .5rem}
.res p.meta{font-weight:700}
.res p.why{color:var(--soft);margin:.4rem 0 1.2rem}
.res .row{display:flex;flex-wrap:wrap;gap:.6rem}
/* treatments */
section{padding:4.5rem 0}
.head{display:grid;gap:1rem;margin-bottom:2.5rem}
@media(min-width:900px){.head{grid-template-columns:1fr 1fr;align-items:end}}
.groups{display:grid;gap:2.5rem}
@media(min-width:1000px){.groups{grid-template-columns:repeat(3,1fr);gap:2rem}}
.group h3{font-size:1.5rem;padding-bottom:.75rem;border-bottom:1.5px solid var(--teal)}
.group ul{list-style:none;margin:0;padding:0}
.group li{padding:1rem 0;border-bottom:1px solid var(--line)}
.group li h4{margin:0;font-size:1.05rem;font-weight:700}
.group li p{font-size:15px;color:var(--soft);margin-top:.2rem}
.group .meta{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-top:.6rem;font-size:15px}
.group .meta b{font-family:var(--d);font-weight:400;font-size:1.25rem}
.group .meta button{min-height:40px;padding:0 1rem;border-radius:999px;border:1px solid var(--line);background:var(--pearl);font:600 14px var(--f);color:var(--teal);cursor:pointer}
.group .meta button:hover{border-color:var(--teal)}
/* booking */
.booking{background:var(--teal);color:var(--pearl)}
.booking h2{color:var(--pearl)}
.bk{display:grid;gap:2rem;margin-top:2rem}
@media(min-width:900px){.bk{grid-template-columns:14rem 1fr}}
.bk ol{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.5rem}
@media(min-width:900px){.bk ol{flex-direction:column}}
.bk ol li{font-size:14px;padding:.35rem .8rem;border-radius:999px;border:1px solid rgba(250,251,249,.25);color:rgba(250,251,249,.6)}
.bk ol li.on{border-color:var(--blush);color:var(--pearl);font-weight:700}
.bk ol li.done{color:rgba(250,251,249,.85)}
.panel h3{font-family:var(--f);font-weight:700;font-size:1.2rem;margin-bottom:1rem}
.opts{display:grid;gap:.6rem}
@media(min-width:600px){.opts{grid-template-columns:repeat(2,1fr)}}
.opt{display:flex;justify-content:space-between;align-items:center;gap:1rem;min-height:56px;padding:.6rem 1rem;border-radius:16px;border:1px solid rgba(250,251,249,.25);background:transparent;color:var(--pearl);font:500 15px var(--f);text-align:left;cursor:pointer}
.opt:hover{border-color:rgba(250,251,249,.6)}
.opt[aria-pressed=true]{border-color:var(--blush);background:rgba(230,181,168,.15)}
.opt:disabled{opacity:.35;cursor:not-allowed;text-decoration:line-through}
.opt small{color:rgba(250,251,249,.65);font-size:13px;white-space:nowrap}
.days,.times{display:grid;grid-template-columns:repeat(auto-fill,minmax(5.2rem,1fr));gap:.5rem}
.days .opt,.times .opt{flex-direction:column;justify-content:center;gap:0;text-align:center}
.field{display:grid;gap:.3rem;margin-bottom:1rem;max-width:28rem}
.field label{font-size:14px;font-weight:700}
.field input,.field textarea{min-height:48px;padding:.6rem .9rem;border-radius:12px;border:1px solid rgba(250,251,249,.3);background:rgba(250,251,249,.07);color:var(--pearl);font:16px var(--f)}
.field input:focus-visible,.field textarea:focus-visible{outline:2px solid var(--blush);outline-offset:1px}
.err{color:#ffc2b4;font-size:14px;min-height:1.2em}
.navrow{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.25rem}
.booking .btn{background:var(--pearl);color:var(--teal);border-color:var(--pearl)}
.booking .btn:hover{background:var(--blush);border-color:var(--blush)}
.booking .btn.ghost{background:transparent;color:var(--pearl);border-color:rgba(250,251,249,.4)}
.sum{color:rgba(250,251,249,.75);font-size:15px}
.done{padding:1.5rem;border-radius:20px;border:1px solid var(--blush)}
.done strong{display:block;font-family:var(--d);font-weight:400;font-size:1.7rem;margin:.3rem 0 .6rem}
.done p{color:rgba(250,251,249,.8)}
/* slots */
.slots{display:grid;gap:2.5rem}
@media(min-width:900px){.slots{grid-template-columns:1fr 1fr}}
.ph{margin-top:1.25rem;display:grid;grid-template-columns:1fr 1fr;gap:.6rem}
.ph div{aspect-ratio:4/5;border-radius:18px;border:1.5px dashed var(--line);background:linear-gradient(160deg,rgba(255,255,255,.6),rgba(255,255,255,0))}
.rv{margin-top:1.25rem;display:grid;gap:.6rem}
.rv div{height:88px;border-radius:18px;border:1.5px dashed var(--line)}
.slots p.lead{margin-top:.75rem}
/* visit */
.visit{background:var(--pearl)}
.vgrid{display:grid;gap:2.5rem;margin-top:2rem}
@media(min-width:900px){.vgrid{grid-template-columns:1fr 1fr}}
.hours{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.hours th,.hours td{padding:.65rem 0;border-bottom:1px solid var(--line);text-align:left;font-weight:400}
.hours td{text-align:right}
.hours tr.today th,.hours tr.today td{font-weight:700}
.small{font-size:14px;color:var(--soft);margin-top:1rem}
.gift{padding:1.5rem;border-radius:22px;background:var(--blush);color:var(--teal)}
.gift h3{font-size:1.6rem}
.gift p{margin-top:.4rem}
/* faq */
.faq details{border-bottom:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;padding:1.1rem 2rem 1.1rem 0;position:relative;font-weight:700;font-size:1.05rem}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";position:absolute;right:.25rem;top:.9rem;font-size:1.4rem;font-weight:400}
.faq details[open] summary::after{content:"–"}
.faq details p{padding-bottom:1.2rem;color:var(--soft);max-width:42rem}
.faq .list{border-top:1.5px solid var(--teal);margin-top:2rem}
.show ul{list-style:none;padding:0;margin:2rem 0 0;display:grid;gap:1.5rem}
@media(min-width:800px){.show ul{grid-template-columns:1fr 1fr}}
.show li{padding:1.25rem 1.4rem;border-radius:22px;background:var(--pearl)}
.show li h3{font-family:var(--f);font-weight:700;font-size:1.05rem}
.show li p{color:var(--soft);margin-top:.35rem}
.show .cta{margin-top:2.5rem;display:flex;flex-wrap:wrap;gap:1rem 1.5rem;align-items:center}
.show .cta p{color:var(--soft);max-width:28rem}
footer{padding:2.5rem 0 3rem;font-size:14px;color:var(--soft);border-top:1px solid var(--line)}
footer .wrap{display:flex;flex-wrap:wrap;gap:.5rem 2rem;justify-content:space-between}
`;

export function render(lang) {
  const t = T[lang];
  const price = (n) => (lang === 'de' ? `${n} €` : `€${n}`);
  const groups = Object.keys(t.groups)
    .map(
      (g) => `<div class="group"><h3>${t.groups[g]}</h3><ul>${TREATMENTS.filter((x) => x[1] === g)
        .map(
          ([id, , m, p]) => `<li><h4>${esc(t.t[id][0])}</h4><p>${esc(t.t[id][1])}</p>
          <div class="meta"><span>${m} ${t.min} · ${t.from} <b>${price(p)}</b></span><button type="button" data-book="${id}" aria-label="${esc(t.book + ': ' + t.t[id][0])}">${t.book}</button></div></li>`
        )
        .join('')}</ul></div>`
    )
    .join('');
  const order = [2, 3, 4, 5, 6, 0, 1];
  const hoursRows = order
    .map((d) => {
      const h = HOURS[d];
      const v = h ? `${Math.floor(h[0] / 60)}:00 – ${Math.floor(h[1] / 60)}:00` : t.closed;
      return `<tr data-day="${d}"><th scope="row">${t.days[d]}</th><td>${v}</td></tr>`;
    })
    .join('');
  const faq = t.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  const show = t.show.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('');

  const body = `
<header class="top"><div class="wrap">
  <a class="brand" href="#top">VELIN</a>
  <nav aria-label="${t.menu}"><a href="#behandlungen">${t.nav.treat}</a><a href="#besuch">${t.nav.visit}</a></nav>
  <a class="btn" href="#termin">${t.nav.book}</a>
</div></header>
<main id="top">
<section class="hero" aria-labelledby="h1"><span class="orb a" aria-hidden="true"></span><span class="orb b" aria-hidden="true"></span><div class="wrap">
  <div>
    <h1 id="h1">Velin</h1>
    <p class="kicker">${t.kicker}</p>
    <p class="lead">${t.lead}</p>
    <div class="actions"><a class="btn" href="#termin">${t.ctaBook}</a><a class="btn ghost" href="#behandlungen">${t.ctaList}</a></div>
    <p class="status" id="status" aria-live="polite">&nbsp;</p>
    <p class="addr">${t.address}</p>
  </div>
  <div class="finder" aria-labelledby="fd-t">
    <h2 id="fd-t">${t.finderTitle}</h2>
    <p class="note">${t.finderNote}</p>
    <div id="finder" aria-live="polite"></div>
  </div>
</div></section>

<section id="behandlungen" aria-labelledby="tr-t"><div class="wrap">
  <div class="head"><h2 id="tr-t">${t.treatTitle}</h2><p class="lead">${t.treatLead}</p></div>
  <div class="groups">${groups}</div>
</div></section>

<section id="termin" class="booking" aria-labelledby="bk-t"><div class="wrap">
  <h2 id="bk-t">${t.bookingTitle}</h2>
  <div class="bk"><ol id="bk-steps">${t.steps.map((s, i) => `<li>${i + 1}. ${s}</li>`).join('')}</ol><div class="panel" id="bk-panel" aria-live="polite"></div></div>
</div></section>

<section aria-label="${t.photosTitle}, ${t.reviewsTitle}"><div class="wrap slots">
  <div><h2>${t.photosTitle}</h2><p class="lead">${t.photosText}</p><div class="ph" aria-hidden="true"><div></div><div></div></div></div>
  <div><h2>${t.reviewsTitle}</h2><p class="lead">${t.reviewsText}</p><div class="rv" aria-hidden="true"><div></div><div></div><div></div></div></div>
</div></section>

<section id="besuch" class="visit" aria-labelledby="vs-t"><div class="wrap">
  <h2 id="vs-t">${t.visitTitle}</h2>
  <div class="vgrid">
    <div><table class="hours"><tbody>${hoursRows}</tbody></table><p class="small">${t.special}</p></div>
    <div><p>${t.address}</p><p class="small">${t.way}</p><div class="gift" style="margin-top:1.5rem"><h3>${t.giftTitle}</h3><p>${t.giftText}</p></div></div>
  </div>
</div></section>

<section class="faq" aria-labelledby="fq-t"><div class="wrap"><h2 id="fq-t">${t.faqTitle}</h2><div class="list">${faq}</div></div></section>

<section class="show" aria-labelledby="sh-t"><div class="wrap">
  <h2 id="sh-t">${t.showTitle}</h2>
  <ul>${show}</ul>
  <div class="cta"><a class="btn" href="${t.barLink.href}">${t.showCta}</a><p>${t.showOffer}</p></div>
</div></section>
</main>
<footer><div class="wrap"><p>${t.footer}</p><a href="/impressum">${t.impressum}</a></div></footer>`;

  const data = {
    lang,
    hours: HOURS,
    tr: TREATMENTS.map(([id, g, m, p]) => ({ id, g, name: t.t[id][0], why: t.t[id][1], meta: `${m} ${t.min} · ${t.from} ${price(p)}` })),
    t: {
      openUntil: t.openUntil, opensToday: t.opensToday, opensOn: t.opensOn, days: t.days, q: t.q, result: t.result,
      resultBook: t.resultBook, restart: t.restart, pickT: t.pickT, pickDay: t.pickDay, pickTime: t.pickTime,
      yourData: t.yourData, name: t.name, contact: t.contact, note: t.note, back: t.back, confirm: t.confirm,
      errName: t.errName, errContact: t.errContact, doneTitle: t.doneTitle, doneText: t.doneText, again: t.again,
      summary: t.summary,
    },
  };

  const js = `${HOURS_JS}
var D=${JSON.stringify(data)};
(function(){ var st=ldStatus(D.hours,D.t), el=document.getElementById('status'); el.textContent=st.text; if(st.open) el.classList.add('open');
  var r=document.querySelector('.hours tr[data-day="'+new Date().getDay()+'"]'); if(r) r.classList.add('today'); })();
function h(tag,attrs,txt){var e=document.createElement(tag); for(var k in attrs){ if(k==='on') e.addEventListener('click',attrs[k]); else e.setAttribute(k,attrs[k]); } if(txt!=null) e.textContent=txt; return e;}
function tr(id){return D.tr.filter(function(x){return x.id===id})[0];}
/* finder: answers -> treatment */
(function(){
  var box=document.getElementById('finder'), a=[];
  function pick(){ var skin=a[0], want=a[1], time=a[2];
    if(want===3) return time===2?'gel':'mani';
    if(want===2) return time===0?'glow':(skin===2?'calm':'glow');
    if(want===1) return skin===2?'calm':'pure';
    if(skin===2) return 'calm'; return time===0?'glow':'classic'; }
  function draw(){ box.innerHTML=''; var p=h('div',{class:'prog'}); for(var i=0;i<3;i++) p.appendChild(h('i',{class:i<=Math.min(a.length,2)?'on':''})); box.appendChild(p);
    if(a.length<3){ var q=D.t.q[a.length]; box.appendChild(h('p',{class:'fq'},q[0])); var w=h('div',{class:'answers'});
      q[1].forEach(function(x,i){ w.appendChild(h('button',{type:'button',class:'ans',on:function(){a.push(i);draw(); var f=box.querySelector('button'); if(f) f.focus();}},x)); }); box.appendChild(w); return; }
    var r=tr(pick()), res=h('div',{class:'res'}); res.appendChild(h('span',{class:'label'},D.t.result)); res.appendChild(h('strong',{},r.name)); res.appendChild(h('p',{class:'meta'},r.meta)); res.appendChild(h('p',{class:'why'},r.why));
    var row=h('div',{class:'row'}); row.appendChild(h('button',{type:'button',class:'btn',on:function(){startBooking(r.id);}},D.t.resultBook)); row.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){a=[];draw();}},D.t.restart)); res.appendChild(row); box.appendChild(res); }
  draw();
})();
/* booking */
var B={step:0,id:null,day:null,time:null}, panel=document.getElementById('bk-panel'), steps=[].slice.call(document.querySelectorAll('#bk-steps li'));
function fmtDay(d,o){return d.toLocaleDateString(D.lang==='de'?'de-DE':'en-GB',o);}
function fmtT(m){var hh=Math.floor(m/60), mm=m%60; return hh+':'+(mm<10?'0':'')+mm;}
function seed(s){var x=0; for(var i=0;i<s.length;i++){x=(x*31+s.charCodeAt(i))>>>0;} return x;}
function sum(){return D.t.summary.replace('{s}',tr(B.id).name).replace('{d}',fmtDay(B.day,{weekday:'long',day:'numeric',month:'long'})).replace('{t}',fmtT(B.time));}
function draw(){
  steps.forEach(function(li,i){li.className=i===B.step?'on':(i<B.step?'done':''); if(i===B.step) li.setAttribute('aria-current','step'); else li.removeAttribute('aria-current');});
  panel.innerHTML=''; var t=D.t;
  function back(){ var r=h('div',{class:'navrow'}); r.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){B.step-=1;draw();}},t.back)); panel.appendChild(r); }
  if(B.step===0){ panel.appendChild(h('h3',{},t.pickT)); var o=h('div',{class:'opts'});
    D.tr.forEach(function(x){ var b=h('button',{type:'button',class:'opt','aria-pressed':String(B.id===x.id),on:function(){B.id=x.id;B.step=1;draw();}}); b.appendChild(h('span',{},x.name)); b.appendChild(h('small',{},x.meta)); o.appendChild(b); }); panel.appendChild(o); }
  if(B.step===1){ panel.appendChild(h('h3',{},t.pickDay)); var o1=h('div',{class:'days'}), base=new Date(); base.setHours(0,0,0,0);
    for(var i=1;i<=14;i++){ (function(d){ var b=h('button',{type:'button',class:'opt','aria-pressed':String(B.day&&B.day.toDateString()===d.toDateString()),on:function(){B.day=d;B.step=2;draw();}}); b.appendChild(h('span',{},fmtDay(d,{weekday:'short'}))); b.appendChild(h('small',{},fmtDay(d,{day:'numeric',month:'short'}))); if(!D.hours[d.getDay()]) b.disabled=true; o1.appendChild(b); })(new Date(base.getTime()+i*864e5)); }
    panel.appendChild(o1); back(); }
  if(B.step===2){ panel.appendChild(h('h3',{},t.pickTime)); var hrs=D.hours[B.day.getDay()], k=seed(B.day.toDateString()+B.id), o2=h('div',{class:'times'});
    for(var m=hrs[0]; m<=hrs[1]-60; m+=45){ k=(k*1103515245+12345)>>>0; (function(mm,free){ var b=h('button',{type:'button',class:'opt','aria-pressed':String(B.time===mm),on:function(){B.time=mm;B.step=3;draw();}},fmtT(mm)); if(!free) b.disabled=true; o2.appendChild(b); })(m,(k%3)>0); }
    panel.appendChild(o2); back(); }
  if(B.step===3){ panel.appendChild(h('h3',{},t.yourData)); panel.appendChild(h('p',{class:'sum'},sum()));
    var f=h('form',{novalidate:''}); f.style.marginTop='1rem';
    [['b-name',t.name,'input','name'],['b-contact',t.contact,'input','email'],['b-note',t.note,'textarea','off']].forEach(function(r){ var w=h('div',{class:'field'}); w.appendChild(h('label',{for:r[0]},r[1])); var inp=h(r[2],{id:r[0],autocomplete:r[3]}); if(r[2]==='input') inp.type='text'; else inp.rows=2; w.appendChild(inp); f.appendChild(w); });
    var err=h('p',{class:'err',role:'alert'}); f.appendChild(err);
    var row=h('div',{class:'navrow'}); row.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){B.step=2;draw();}},t.back)); row.appendChild(h('button',{type:'submit',class:'btn'},t.confirm)); f.appendChild(row);
    f.addEventListener('submit',function(e){e.preventDefault(); var n=document.getElementById('b-name'), c=document.getElementById('b-contact');
      if(!n.value.trim()){err.textContent=t.errName;n.focus();return;} if(!c.value.trim()){err.textContent=t.errContact;c.focus();return;} B.step=4; draw();});
    panel.appendChild(f); }
  if(B.step===4){ steps.forEach(function(li){li.className='done';}); var d=h('div',{class:'done'}); d.appendChild(h('p',{},t.doneTitle)); d.appendChild(h('strong',{},sum())); d.appendChild(h('p',{},t.doneText));
    var a=h('button',{type:'button',class:'btn ghost',on:function(){B={step:0,id:null,day:null,time:null};draw();}},t.again); a.style.marginTop='1.25rem'; d.appendChild(a); panel.appendChild(d); }
}
function startBooking(id){B={step:1,id:id,day:null,time:null}; draw(); document.getElementById('termin').scrollIntoView({block:'start'}); var f=panel.querySelector('button:not([disabled])'); if(f) f.focus({preventScroll:true});}
[].slice.call(document.querySelectorAll('[data-book]')).forEach(function(b){b.addEventListener('click',function(){startBooking(b.dataset.book);});});
draw();
`;

  const icon =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='16' fill='%23173c3b'/%3E%3Ccircle cx='16' cy='16' r='7' fill='%23e6b5a8'/%3E%3C/svg%3E";

  return page({
    lang,
    slug,
    title: t.title,
    description: t.description,
    theme: '#173c3b',
    icon,
    fonts: ['marcellus', 'karla'],
    barText: t.bar,
    barLink: t.barLink,
    css: CSS,
    body,
    js,
  });
}
