// Demo: Ostwerk Athletik, a fictional gym in Dresden. Built to show what the LocalDominate guide for
// gyms recommends: a trial session you can book in under a minute, the class timetable as text, clear
// prices with term and notice period, staffed hours next to opening hours, and the cancellation
// button German law asks for when contracts are sold online.
import { esc, page, HOURS_JS } from './shell.mjs';

export const slug = 'fitness';

// Studio open daily 6–23. Staffed hours: Mon–Fri 9–21, Sat/Sun 10–18.
const OPEN = { 0: [360, 1380], 1: [360, 1380], 2: [360, 1380], 3: [360, 1380], 4: [360, 1380], 5: [360, 1380], 6: [360, 1380] };
const STAFFED = { 0: [600, 1080], 1: [540, 1260], 2: [540, 1260], 3: [540, 1260], 4: [540, 1260], 5: [540, 1260], 6: [600, 1080] };

// Course ids → type
const COURSES = {
  barbell: 'strength',
  circuit: 'strength',
  row: 'cardio',
  cycle: 'cardio',
  mobility: 'mobility',
  yoga: 'mobility',
  back: 'rehab',
  rehab: 'rehab',
};
// weekday → [time, course, trainer, room, places left (0 = full)]
const PLAN = {
  1: [['07:00', 'cycle', 'Lena', 'cycle', 4], ['12:15', 'mobility', 'Deniz', 'studio', 9], ['17:30', 'barbell', 'Kai', 'hall', 2], ['18:30', 'rehab', 'Sophie', 'studio', 0], ['19:30', 'circuit', 'Kai', 'hall', 6]],
  2: [['07:00', 'row', 'Lena', 'hall', 5], ['10:00', 'back', 'Sophie', 'studio', 7], ['17:30', 'yoga', 'Deniz', 'studio', 3], ['18:30', 'cycle', 'Lena', 'cycle', 0], ['19:30', 'barbell', 'Kai', 'hall', 4]],
  3: [['07:00', 'cycle', 'Lena', 'cycle', 6], ['12:15', 'circuit', 'Kai', 'hall', 8], ['17:30', 'rehab', 'Sophie', 'studio', 1], ['18:30', 'mobility', 'Deniz', 'studio', 10], ['19:30', 'row', 'Lena', 'hall', 3]],
  4: [['07:00', 'row', 'Lena', 'hall', 4], ['10:00', 'back', 'Sophie', 'studio', 5], ['17:30', 'barbell', 'Kai', 'hall', 0], ['18:30', 'yoga', 'Deniz', 'studio', 6], ['19:30', 'cycle', 'Lena', 'cycle', 2]],
  5: [['07:00', 'cycle', 'Lena', 'cycle', 7], ['12:15', 'mobility', 'Deniz', 'studio', 11], ['17:00', 'circuit', 'Kai', 'hall', 5], ['18:00', 'rehab', 'Sophie', 'studio', 3]],
  6: [['10:00', 'barbell', 'Kai', 'hall', 3], ['11:15', 'yoga', 'Deniz', 'studio', 8], ['12:30', 'row', 'Lena', 'hall', 6]],
  0: [['10:30', 'mobility', 'Deniz', 'studio', 12], ['11:30', 'cycle', 'Lena', 'cycle', 5]],
};
// Typical load per hour (0–100), demo values for a weekday and for the weekend.
const LOAD_WEEK = [5, 18, 30, 26, 20, 18, 22, 25, 22, 20, 24, 40, 68, 92, 96, 78, 52, 24];
const LOAD_WEEKEND = [4, 8, 20, 38, 52, 55, 48, 40, 35, 30, 26, 22, 20, 18, 14, 10, 6, 3];

const T = {
  de: {
    title: 'Ostwerk Athletik: Kraft & Kurse in Dresden (Konzept-Demo)',
    description:
      'Konzept-Demo von LocalDominate: die Website eines erfundenen Fitnessstudios mit Probetraining, Kursplan als Text, Preisen und Kündigungsbutton.',
    bar: ' Ostwerk Athletik ist ein erfundenes Studio. Namen, Preise, Zeiten, Auslastung und Adresse sind Beispiele. Anfragen werden nicht gesendet.',
    barLink: { href: '/de/fitnessstudio', text: 'So eine Seite für Ihr Studio' },
    menu: 'Menü',
    nav: { plan: 'Kursplan', prices: 'Preise', hours: 'Zeiten', trial: 'Probetraining' },
    h1a: 'Ostwerk',
    h1b: 'Athletik',
    tagline: 'Krafttraining, Kurse und Personal Training in Dresden-Neustadt',
    lead: 'Eine Halle mit zwölf Racks, ein Kursraum, betreute Zeiten bis 21 Uhr. Kommen Sie zum Probetraining: 60 Minuten mit einer Trainerin oder einem Trainer, kostenlos.',
    ctaPlan: 'Kursplan ansehen',
    address: 'Beispielweg 4, 01099 Dresden',
    openUntil: 'Jetzt geöffnet bis {t} Uhr',
    opensToday: 'Öffnet heute um {t} Uhr',
    opensOn: 'Geschlossen. Öffnet {d} um {t} Uhr',
    staffedNow: 'Betreut bis {t} Uhr',
    staffedNot: 'Gerade keine Betreuung',
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    daysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    trialTitle: 'Probetraining buchen',
    trialSteps: ['Ziel', 'Tag', 'Uhrzeit', 'Kontakt'],
    goalQ: 'Was möchten Sie erreichen?',
    goals: ['Stärker werden', 'Fit bleiben', 'Rücken entlasten', 'Wieder einsteigen'],
    dayQ: 'An welchem Tag?',
    timeQ: 'Wann passt es? Probetrainings gibt es in den betreuten Zeiten.',
    contactQ: 'Wie erreichen wir Sie?',
    name: 'Ihr Name',
    contact: 'Telefon oder E-Mail',
    back: 'Zurück',
    send: 'Probetraining anfragen',
    errName: 'Bitte geben Sie Ihren Namen an.',
    errContact: 'Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an.',
    doneTitle: 'So sähe Ihre Bestätigung aus',
    doneText:
      'Demo: Es wurde nichts gesendet. Im echten Projekt landet die Anfrage in Ihrer Mitgliederverwaltung oder per E-Mail beim Team, mit Erinnerung am Vortag.',
    again: 'Neu beginnen',
    summary: 'Probetraining „{g}“, {d} um {t} Uhr',
    planTitle: 'Kursplan',
    planLead: 'Alle Kurse als Text, nicht als Foto vom Aushang. Für Mitglieder inklusive, Plätze buchen Sie in der App.',
    all: 'Alle',
    types: { strength: 'Kraft', cardio: 'Ausdauer', mobility: 'Beweglichkeit', rehab: 'Rücken & Reha' },
    course: {
      barbell: 'Langhantel-Grundlagen',
      circuit: 'Kraftzirkel',
      row: 'Rudern im Intervall',
      cycle: 'Indoor Cycling',
      mobility: 'Mobility und Dehnen',
      yoga: 'Yoga für Kraftsportler',
      back: 'Rückenfit',
      rehab: 'Reha-Sport mit Verordnung',
    },
    rooms: { hall: 'Halle', studio: 'Kursraum', cycle: 'Cycling-Raum' },
    left: '{n} Plätze frei',
    leftOne: '1 Platz frei',
    full: 'Warteliste',
    noCourses: 'Keine Kurse an diesem Tag.',
    loadTitle: 'Wann ist es ruhig?',
    loadLead: 'Typische Auslastung über den Tag. Beispielwerte für diese Demo; im echten Projekt kommen sie aus Ihrem Check-in-System.',
    loadNow: 'jetzt',
    pricesTitle: 'Mitgliedschaft',
    pricesLead: 'Preise, Laufzeit und Kündigung auf einen Blick. Keine Aufnahmegebühr, wenn Sie nach dem Probetraining abschließen.',
    month: 'im Monat',
    plans: [
      ['Flex', '49 €', ['Laufzeit: 1 Monat', 'Kündigung: jederzeit zum Monatsende', 'Halle, Kurse, Sauna']],
      ['Jahr', '39 €', ['Laufzeit: 12 Monate', 'Danach monatlich kündbar', 'Halle, Kurse, Sauna, 1 Trainingsplan pro Quartal'], true],
      ['Ausbildung & Studium', '32 €', ['Laufzeit: 12 Monate, mit Nachweis', 'Danach monatlich kündbar', 'Halle, Kurse, Sauna']],
    ],
    fee: 'Aufnahmegebühr 29 €, entfällt beim Abschluss nach dem Probetraining.',
    recommended: 'Am häufigsten gewählt',
    moreTitle: 'Mehr als Geräte',
    pt: ['Personal Training', 'Einzeln oder zu zweit, mit Ziel und Plan. 60 Minuten ab 69 €, Zehnerkarte ab 620 €. Trainerinnen und Trainer mit B-Lizenz.'],
    rh: ['Reha-Sport', 'In kleinen Gruppen mit ärztlicher Verordnung. Was Ihre Krankenkasse übernimmt, klären wir vor dem ersten Termin mit Ihnen.'],
    hoursTitle: 'Öffnungszeiten',
    hoursOpen: 'Studio',
    hoursStaffed: 'Betreut',
    hoursSauna: 'Sauna',
    daily: 'täglich',
    weekdays: 'Montag bis Freitag',
    weekend: 'Samstag, Sonntag',
    special: 'Feiertage: wie Sonntag. 24. und 31. Dezember bis 14 Uhr.',
    way: 'Straßenbahn bis Haltestelle Beispielstraße, zwei Minuten zu Fuß. 40 Fahrradplätze im Hof.',
    faqTitle: 'Häufige Fragen',
    faq: [
      ['Was bringe ich zum Probetraining mit?', 'Sportkleidung, saubere Hallenschuhe, ein Handtuch und etwas zu trinken. Schloss für den Spind haben wir da.'],
      ['Wie kündige ich?', 'Über den Button „Verträge hier kündigen“ unten auf jeder Seite, per E-Mail oder am Empfang. Sie bekommen sofort eine Bestätigung.'],
      ['Kann ich pausieren?', 'Bei Krankheit, Schwangerschaft oder Auslandsaufenthalt ruht der Vertrag ohne Kosten, mit Nachweis.'],
      ['Ist es abends sehr voll?', 'Zwischen 17 und 19 Uhr am meisten. Ruhiger ist es vormittags und ab 20 Uhr. Die Grafik oben zeigt den typischen Tag.'],
    ],
    showTitle: 'Was diese Demo zeigt',
    show: [
      ['Probetraining in vier Schritten', 'Ziel, Tag, Uhrzeit, Kontakt. Nur in betreuten Zeiten, damit jemand Zeit hat. Gleich oben auf der Seite.'],
      ['Kursplan als Text', 'Lesbar auf dem Handy, filterbar und für Suchmaschinen erfassbar. Kein Foto vom Aushang, kein PDF.'],
      ['Preise mit Laufzeit und Kündigung', 'Was es kostet, wie lange es läuft und wie man kündigt, steht vor dem Abschluss da. Dazu der Kündigungsbutton nach § 312k BGB.'],
      ['Zeiten, die zusammenpassen', 'Öffnungszeiten, betreute Zeiten und Sauna getrennt, so wie Google sie im Profil als weitere Öffnungszeiten erlaubt.'],
    ],
    showCta: 'So eine Seite für Ihr Studio',
    showOffer: 'Website in 5 Tagen, ab 1.490 €. Umfang und Preis schriftlich vor dem Start.',
    cancelBtn: 'Verträge hier kündigen',
    cancelTitle: 'Vertrag kündigen',
    cancelText:
      'Demo: Hier stünde das Kündigungsformular nach § 312k BGB mit Bestätigungsseite. In dieser Demo wird nichts gesendet.',
    close: 'Schließen',
    footer: 'Ostwerk Athletik ist ein erfundenes Studio, gebaut von LocalDominate als Konzept-Demo. Kein Kunde, kein echter Betrieb.',
    impressum: 'Impressum von LocalDominate',
  },
  en: {
    title: 'Ostwerk Athletik: strength and classes in Dresden (concept demo)',
    description:
      'Concept demo by LocalDominate: the website of a fictional gym with a bookable trial session, the timetable as text, prices and a cancellation button.',
    bar: ' Ostwerk Athletik is a fictional gym. Names, prices, hours, busy times and address are examples. Requests are not sent.',
    barLink: { href: '/industries/fitness-studios', text: 'A site like this for your gym' },
    menu: 'Menu',
    nav: { plan: 'Timetable', prices: 'Prices', hours: 'Hours', trial: 'Free trial' },
    h1a: 'Ostwerk',
    h1b: 'Athletik',
    tagline: 'Strength training, classes and personal training in Dresden, Germany',
    lead: 'One hall with twelve racks, one studio, staffed hours until 9 pm. Come for a trial session: 60 minutes with a coach, free of charge.',
    ctaPlan: 'See the timetable',
    address: 'Beispielweg 4, 01099 Dresden',
    openUntil: 'Open now until {t}',
    opensToday: 'Opens today at {t}',
    opensOn: 'Closed. Opens {d} at {t}',
    staffedNow: 'Staffed until {t}',
    staffedNot: 'No staff on the floor right now',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    trialTitle: 'Book a free trial',
    trialSteps: ['Goal', 'Day', 'Time', 'Contact'],
    goalQ: 'What would you like to achieve?',
    goals: ['Get stronger', 'Stay fit', 'Ease my back', 'Get back into it'],
    dayQ: 'Which day?',
    timeQ: 'What time suits you? Trials run during staffed hours.',
    contactQ: 'How can we reach you?',
    name: 'Your name',
    contact: 'Phone or email',
    back: 'Back',
    send: 'Request trial',
    errName: 'Please enter your name.',
    errContact: 'Please enter a phone number or an email address.',
    doneTitle: 'This is what your confirmation would look like',
    doneText:
      'Demo: nothing was sent. In a real project the request lands in your membership software or in the team inbox, with a reminder the day before.',
    again: 'Start again',
    summary: 'Trial “{g}”, {d} at {t}',
    planTitle: 'Timetable',
    planLead: 'Every class as text, not as a photo of the noticeboard. Included for members; places are booked in the app.',
    all: 'All',
    types: { strength: 'Strength', cardio: 'Cardio', mobility: 'Mobility', rehab: 'Back & rehab' },
    course: {
      barbell: 'Barbell basics',
      circuit: 'Strength circuit',
      row: 'Rowing intervals',
      cycle: 'Indoor cycling',
      mobility: 'Mobility and stretching',
      yoga: 'Yoga for lifters',
      back: 'Healthy back',
      rehab: 'Rehab class (prescription)',
    },
    rooms: { hall: 'Hall', studio: 'Studio', cycle: 'Cycling room' },
    left: '{n} places left',
    leftOne: '1 place left',
    full: 'Waiting list',
    noCourses: 'No classes on this day.',
    loadTitle: 'When is it quiet?',
    loadLead: 'Typical busy times through the day. Demo values; in a real project they come from your check-in system.',
    loadNow: 'now',
    pricesTitle: 'Membership',
    pricesLead: 'Price, term and notice at a glance. No joining fee if you sign up after your trial.',
    month: 'per month',
    plans: [
      ['Flex', '€49', ['Term: 1 month', 'Cancel any time to the end of the month', 'Hall, classes, sauna']],
      ['Annual', '€39', ['Term: 12 months', 'Then cancel monthly', 'Hall, classes, sauna, a training plan every quarter'], true],
      ['Students & apprentices', '€32', ['Term: 12 months, with proof', 'Then cancel monthly', 'Hall, classes, sauna']],
    ],
    fee: 'Joining fee €29, waived if you sign up after your trial.',
    recommended: 'Chosen most often',
    moreTitle: 'More than machines',
    pt: ['Personal training', 'One-to-one or in pairs, with a goal and a plan. 60 minutes from €69, ten sessions from €620. Licensed coaches.'],
    rh: ['Rehab classes', 'Small groups with a doctor’s prescription. We check with you what your health insurer covers before the first session.'],
    hoursTitle: 'Opening hours',
    hoursOpen: 'Gym',
    hoursStaffed: 'Staffed',
    hoursSauna: 'Sauna',
    daily: 'daily',
    weekdays: 'Monday to Friday',
    weekend: 'Saturday, Sunday',
    special: 'Public holidays: as Sunday. 24 and 31 December until 2 pm.',
    way: 'Tram to Beispielstraße, two minutes on foot. 40 bike spaces in the courtyard.',
    faqTitle: 'Questions',
    faq: [
      ['What do I bring to the trial?', 'Sportswear, clean indoor shoes, a towel and something to drink. We have locks for the lockers.'],
      ['How do I cancel?', 'With the “Cancel contracts here” button at the bottom of every page, by email or at the desk. You get a confirmation straight away.'],
      ['Can I pause my membership?', 'For illness, pregnancy or time abroad the contract is paused at no cost, with proof.'],
      ['Is it very busy in the evening?', 'Busiest between 5 and 7 pm. Quieter in the morning and after 8 pm. The chart above shows a typical day.'],
    ],
    showTitle: 'What this demo shows',
    show: [
      ['A trial in four steps', 'Goal, day, time, contact. Only during staffed hours, so someone has time. Right at the top of the page.'],
      ['The timetable as text', 'Readable on a phone, filterable and readable for search engines. No photo of the noticeboard, no PDF.'],
      ['Prices with term and notice', 'What it costs, how long it runs and how to cancel, before anyone signs. Plus the cancellation button German law (§ 312k BGB) requires.'],
      ['Hours that fit together', 'Opening hours, staffed hours and sauna kept apart, the way a Google profile allows as additional hours.'],
    ],
    showCta: 'A site like this for your gym',
    showOffer: 'Website in 5 days, from €1,490. Scope and price in writing before work starts.',
    cancelBtn: 'Cancel contracts here',
    cancelTitle: 'Cancel your contract',
    cancelText: 'Demo: this would be the cancellation form required by § 312k BGB, with a confirmation page. Nothing is sent in this demo.',
    close: 'Close',
    footer: 'Ostwerk Athletik is a fictional gym, built by LocalDominate as a concept demo. Not a client, not a real business.',
    impressum: 'LocalDominate legal notice',
  },
};

const CSS = `
:root{
  --chalk:#ecebe5; --graphite:#23282c; --forest:#2e5a45; --plate:#f1bf2e; --red:#b9432f; --line:rgba(35,40,44,.16); --soft:#545c61; --white:#fbfbf8;
  --f:"Archivo",system-ui,-apple-system,"Segoe UI",sans-serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}}
body{margin:0;background:var(--chalk);color:var(--graphite);font:400 17px/1.55 var(--f);font-stretch:100%}
a{color:inherit}
:focus-visible{outline:2px solid var(--forest);outline-offset:3px}
.wrap{max-width:1240px;margin:0 auto;padding:0 1.25rem}
@media(min-width:760px){.wrap{padding:0 2.5rem}}
h1,h2,h3{margin:0;font-stretch:62%;font-weight:800;letter-spacing:-.005em;line-height:.95}
h2{font-size:clamp(2.4rem,1.4rem + 3.6vw,4.4rem)}
h3{font-size:1.6rem}
p{margin:0}
.lead{color:var(--soft);max-width:40rem}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 1.5rem;border:2px solid var(--graphite);border-radius:6px;background:var(--graphite);color:var(--chalk);font:700 16px var(--f);font-stretch:100%;text-decoration:none;cursor:pointer}
.btn:hover{background:var(--forest);border-color:var(--forest)}
.btn.ghost{background:transparent;color:var(--graphite)}
.btn.ghost:hover{background:var(--graphite);color:var(--chalk)}
.btn.y{background:var(--plate);border-color:var(--plate);color:var(--graphite)}
.btn.y:hover{background:#ffd451;border-color:#ffd451}
.top{position:sticky;top:0;z-index:20;background:var(--graphite);color:var(--chalk)}
.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;min-height:60px}
.brand{font-weight:800;font-stretch:62%;font-size:1.7rem;text-decoration:none;letter-spacing:.01em}
.brand span{color:var(--plate)}
.top nav{display:none;gap:1.8rem}
.top nav a{text-decoration:none;font-weight:600;font-size:15px;color:rgba(236,235,229,.85)}
.top nav a:hover{color:#fff}
@media(min-width:860px){.top nav{display:flex}}
.top .btn{min-height:40px;padding:0 1rem;font-size:14px}
/* hero */
.hero{background:var(--graphite);color:var(--chalk);padding:2.5rem 0 3rem;position:relative;overflow:hidden}
.hero .wrap{display:grid;gap:2.5rem;position:relative}
@media(min-width:980px){.hero .wrap{grid-template-columns:1.15fr .85fr;align-items:start}.hero{padding:4.5rem 0 5rem}}
.hero h1{font-size:clamp(4.4rem,2rem + 11vw,11.5rem);line-height:.82;letter-spacing:-.01em;font-stretch:62%}
.hero h1 .b{display:block;color:var(--plate)}
.hero .tag{margin-top:1.4rem;font-size:1.25rem;font-weight:700;font-stretch:85%}
.hero .lead{color:rgba(236,235,229,.75);margin-top:.75rem}
.hero .btn.ghost{color:var(--chalk);border-color:rgba(236,235,229,.45)}
.hero .btn.ghost:hover{background:var(--chalk);color:var(--graphite)}
.now{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem;margin-top:2rem;padding-top:1.2rem;border-top:1px solid rgba(236,235,229,.18);font-size:15px}
.now span{display:flex;align-items:center;gap:.5rem}
.dot{width:9px;height:9px;border-radius:50%;background:#7c8388}
.dot.on{background:#5fcf8a;box-shadow:0 0 0 4px rgba(95,207,138,.2)}
.plates{position:absolute;right:-90px;top:-60px;width:360px;opacity:.09;pointer-events:none}
@media(max-width:979px){.plates{display:none}}
/* trial card */
.trial{background:var(--chalk);color:var(--graphite);border-radius:14px;padding:1.4rem;box-shadow:0 0 0 6px rgba(241,191,46,.9)}
@media(min-width:760px){.trial{padding:1.75rem}}
.trial h2{font-size:2.3rem}
.tsteps{display:flex;gap:.35rem;margin:1rem 0 1.25rem;list-style:none;padding:0}
.tsteps li{flex:1;height:5px;border-radius:3px;background:rgba(35,40,44,.15);font-size:0}
.tsteps li.on,.tsteps li.done{background:var(--forest)}
.tq{font-weight:700;margin-bottom:.8rem}
.chips{display:grid;grid-template-columns:repeat(2,1fr);gap:.5rem}
.chip{min-height:52px;padding:.5rem .75rem;border:2px solid rgba(35,40,44,.18);border-radius:8px;background:var(--white);font:600 15px var(--f);color:var(--graphite);cursor:pointer;text-align:left}
.chip:hover{border-color:var(--graphite)}
.chip[aria-pressed=true]{border-color:var(--forest);background:#dfe9e3}
.chip:disabled{opacity:.35;cursor:not-allowed}
.chip small{display:block;font-weight:500;font-size:13px;color:var(--soft)}
.chips.days{grid-template-columns:repeat(4,1fr)}
.chips.times{grid-template-columns:repeat(3,1fr)}
.chips.days .chip,.chips.times .chip{text-align:center}
.field{display:grid;gap:.3rem;margin-bottom:.9rem}
.field label{font-weight:700;font-size:14px}
.field input{min-height:50px;padding:0 .85rem;border:2px solid rgba(35,40,44,.2);border-radius:8px;background:var(--white);font:16px var(--f);color:var(--graphite)}
.field input:focus-visible{outline:2px solid var(--forest);outline-offset:1px}
.err{color:var(--red);font-size:14px;min-height:1.2em;font-weight:600}
.row{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1rem}
.sum{font-size:15px;color:var(--soft);margin-bottom:1rem}
.done strong{display:block;font-size:2rem;font-weight:800;font-stretch:62%;line-height:1;margin:.4rem 0 .7rem}
.done p{color:var(--soft)}
/* sections */
section{padding:4.5rem 0}
.head{display:grid;gap:1rem;margin-bottom:2rem}
@media(min-width:900px){.head{grid-template-columns:1fr 1fr;align-items:end}}
/* timetable */
.filters{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem}
.tabs{display:flex;gap:.35rem;overflow-x:auto;padding-bottom:.25rem;margin-bottom:1.5rem;scrollbar-width:thin}
.tab,.fil{position:relative;flex:0 0 auto;min-height:44px;padding:0 .85rem;border:2px solid var(--graphite);border-radius:6px;background:transparent;font:700 15px var(--f);color:var(--graphite);cursor:pointer}
.fil{border-width:1px;border-color:var(--line);font-weight:600}
.tab[aria-selected=true]{background:var(--graphite);color:var(--chalk)}
.fil[aria-pressed=true]{background:var(--forest);border-color:var(--forest);color:#fff}
.tt{list-style:none;margin:0;padding:0;border-top:2px solid var(--graphite)}
.tt li{display:grid;grid-template-columns:4.2rem 1fr auto;gap:.2rem 1rem;align-items:baseline;padding:1rem 0;border-bottom:1px solid var(--line)}
@media(min-width:760px){.tt li{grid-template-columns:5.5rem 1.6fr 1fr 1fr 9rem}}
.tt .time{font-weight:800;font-stretch:75%;font-size:1.4rem;font-variant-numeric:tabular-nums}
.tt .name{font-weight:700;font-size:1.1rem}
.tt .type{display:inline-block;margin-left:.5rem;padding:.05rem .45rem;border-radius:4px;font-size:12px;font-weight:700;background:rgba(46,90,69,.12);color:var(--forest);vertical-align:2px}
.tt .meta{color:var(--soft);font-size:15px;grid-column:2}
@media(min-width:760px){.tt .meta{grid-column:auto}}
.tt .spots{font-weight:700;font-size:14px;text-align:right;grid-column:3;grid-row:1}
@media(min-width:760px){.tt .spots{grid-column:auto;grid-row:auto}}
.tt .spots.full{color:var(--red)}
.tt .spots.few{color:#8a6a00}
.empty{padding:1.5rem 0;color:var(--soft)}
/* load */
.load{background:var(--white)}
.bars{display:grid;grid-template-columns:repeat(18,1fr);gap:4px;align-items:end;height:200px;margin-top:2rem;border-bottom:2px solid var(--graphite)}
.bar{position:relative;background:#c9ccc6;border-radius:3px 3px 0 0}
.bar.now{background:var(--plate)}
.bar.now::after{content:attr(data-label);position:absolute;top:-1.6rem;left:50%;transform:translateX(-50%);font-size:12px;font-weight:800;white-space:nowrap}
.axis{display:grid;grid-template-columns:repeat(18,1fr);gap:4px;margin-top:.4rem;font-size:12px;color:var(--soft);font-variant-numeric:tabular-nums}
.axis span:nth-child(odd){visibility:hidden}
@media(min-width:760px){.axis span:nth-child(odd){visibility:visible}}
/* prices */
.plans{display:grid;gap:1rem}
@media(min-width:900px){.plans{grid-template-columns:repeat(3,1fr);align-items:stretch}}
.plan{position:relative;padding:1.6rem;border:2px solid var(--graphite);border-radius:12px;background:var(--white);display:flex;flex-direction:column}
.plan.rec{background:var(--graphite);color:var(--chalk)}
.plan .badge{position:absolute;top:-.9rem;left:1.25rem;padding:.2rem .6rem;border-radius:4px;background:var(--plate);color:var(--graphite);font-size:13px;font-weight:800}
.plan h3{font-size:2rem}
.plan .p{margin-top:.75rem;font-weight:800;font-stretch:62%;font-size:3.8rem;line-height:1}
.plan .p small{font-size:15px;font-weight:600;font-stretch:100%;margin-left:.4rem;opacity:.7}
.plan ul{list-style:none;padding:0;margin:1.25rem 0 0;display:grid;gap:.5rem;font-size:15px}
.plan li{padding-left:1.4rem;position:relative}
.plan li::before{content:"";position:absolute;left:0;top:.55em;width:.7rem;height:3px;background:var(--forest)}
.plan.rec li::before{background:var(--plate)}
.fee{margin-top:1.25rem;font-size:14px;color:var(--soft)}
/* more */
.more{background:var(--forest);color:#f0f3ef}
.more .grid{display:grid;gap:2rem;margin-top:2rem}
@media(min-width:800px){.more .grid{grid-template-columns:1fr 1fr}}
.more .grid div{border-top:3px solid var(--plate);padding-top:1rem}
.more p{color:rgba(240,243,239,.82);margin-top:.5rem}
/* hours */
.hgrid{display:grid;gap:2rem}
@media(min-width:900px){.hgrid{grid-template-columns:1.2fr .8fr}}
.ht{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.ht th,.ht td{text-align:left;padding:.8rem .5rem .8rem 0;border-bottom:1px solid var(--line);vertical-align:top}
.ht thead th{font-size:14px;color:var(--soft);font-weight:600;border-bottom:2px solid var(--graphite)}
.ht tbody th{font-weight:800;font-stretch:75%;font-size:1.2rem}
.small{font-size:14px;color:var(--soft);margin-top:1rem}
/* faq */
.faq details{border-bottom:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;padding:1.1rem 2rem 1.1rem 0;position:relative;font-weight:700;font-size:1.05rem}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";position:absolute;right:.25rem;top:.85rem;font-size:1.5rem;font-weight:400}
.faq details[open] summary::after{content:"–"}
.faq details p{padding-bottom:1.2rem;color:var(--soft);max-width:44rem}
.faq .list{border-top:2px solid var(--graphite);margin-top:2rem}
/* show */
.show{background:var(--white)}
.show ul{list-style:none;padding:0;margin:2rem 0 0;display:grid;gap:1.5rem}
@media(min-width:800px){.show ul{grid-template-columns:1fr 1fr}}
.show li{border-left:4px solid var(--plate);padding-left:1rem}
.show li h3{font-size:1.5rem}
.show li p{color:var(--soft);margin-top:.35rem}
.show .cta{margin-top:2.5rem;display:flex;flex-wrap:wrap;gap:1rem 1.5rem;align-items:center}
.show .cta p{color:var(--soft);max-width:28rem}
footer{background:var(--graphite);color:rgba(236,235,229,.75);padding:2rem 0 2.5rem;font-size:14px}
footer .wrap{display:flex;flex-wrap:wrap;gap:1rem 2rem;align-items:center;justify-content:space-between}
footer .btn{min-height:44px;font-size:14px;color:var(--chalk);border-color:rgba(236,235,229,.5);background:transparent}
dialog{border:0;border-radius:12px;padding:1.5rem;max-width:26rem;width:calc(100% - 2rem);background:var(--chalk);color:var(--graphite)}
dialog::backdrop{background:rgba(20,22,24,.6)}
dialog h2{font-size:2.2rem}
dialog p{margin:.75rem 0 1.25rem;color:var(--soft)}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
`;

const PLATES_SVG = `<svg class="plates" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#f1bf2e" stroke-width="10"><circle cx="100" cy="100" r="92"/><circle cx="100" cy="100" r="62"/><circle cx="100" cy="100" r="22"/></g></svg>`;

export function render(lang) {
  const t = T[lang];
  const plans = t.plans
    .map(
      ([name, p, items, rec]) => `<li class="plan${rec ? ' rec' : ''}">${rec ? `<span class="badge">${t.recommended}</span>` : ''}
      <h3>${esc(name)}</h3><p class="p">${p}<small>${t.month}</small></p><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></li>`
    )
    .join('');
  const faq = t.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  const show = t.show.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('');
  const hoursRows = `
    <tr><th scope="row">${t.hoursOpen}</th><td>${t.daily}</td><td>6:00 – 23:00</td></tr>
    <tr><th scope="row" rowspan="2">${t.hoursStaffed}</th><td>${t.weekdays}</td><td>9:00 – 21:00</td></tr>
    <tr><td>${t.weekend}</td><td>10:00 – 18:00</td></tr>
    <tr><th scope="row">${t.hoursSauna}</th><td>${t.daily}</td><td>15:00 – 22:00</td></tr>`;

  const body = `
<header class="top"><div class="wrap">
  <a class="brand" href="#top">Ostwerk <span>Athletik</span></a>
  <nav aria-label="${t.menu}"><a href="#kursplan">${t.nav.plan}</a><a href="#preise">${t.nav.prices}</a><a href="#zeiten">${t.nav.hours}</a></nav>
  <a class="btn y" href="#probetraining">${t.nav.trial}</a>
</div></header>
<main id="top">
<section class="hero" aria-labelledby="h1">${PLATES_SVG}<div class="wrap">
  <div>
    <h1 id="h1">${t.h1a}<span class="b">${t.h1b}</span></h1>
    <p class="tag">${t.tagline}</p>
    <p class="lead">${t.lead}</p>
    <div class="row" style="margin-top:1.75rem"><a class="btn ghost" href="#kursplan">${t.ctaPlan}</a></div>
    <div class="now" aria-live="polite"><span><i class="dot" id="d-open"></i><b id="s-open">&nbsp;</b></span><span><i class="dot" id="d-staff"></i><span id="s-staff"></span></span><span>${t.address}</span></div>
  </div>
  <div class="trial" id="probetraining">
    <h2>${t.trialTitle}</h2>
    <ol class="tsteps" id="tsteps">${t.trialSteps.map((s, i) => `<li data-i="${i}">${s}</li>`).join('')}</ol>
    <div id="tpanel" aria-live="polite"></div>
  </div>
</div></section>

<section id="kursplan" aria-labelledby="kp-t"><div class="wrap">
  <div class="head"><h2 id="kp-t">${t.planTitle}</h2><p class="lead">${t.planLead}</p></div>
  <div class="tabs" role="tablist" aria-label="${t.planTitle}" id="tabs">${[1, 2, 3, 4, 5, 6, 0]
    .map((d) => `<button class="tab" role="tab" type="button" id="tab-${d}" data-d="${d}" aria-selected="false" aria-controls="tt">${t.daysShort[d]}<span class="sr"> ${t.days[d]}</span></button>`)
    .join('')}</div>
  <div class="filters" id="filters"><button type="button" class="fil" data-f="all" aria-pressed="true">${t.all}</button>${Object.entries(t.types)
    .map(([k, v]) => `<button type="button" class="fil" data-f="${k}" aria-pressed="false">${v}</button>`)
    .join('')}</div>
  <ul class="tt" id="tt" role="tabpanel"></ul>
</div></section>

<section class="load" aria-labelledby="ld-t"><div class="wrap">
  <div class="head"><h2 id="ld-t">${t.loadTitle}</h2><p class="lead">${t.loadLead}</p></div>
  <div class="bars" id="bars" role="img" aria-label="${esc(t.loadTitle)}"></div>
  <div class="axis" id="axis" aria-hidden="true"></div>
</div></section>

<section id="preise" aria-labelledby="pr-t"><div class="wrap">
  <div class="head"><h2 id="pr-t">${t.pricesTitle}</h2><p class="lead">${t.pricesLead}</p></div>
  <ul class="plans" style="list-style:none;padding:0;margin:1rem 0 0">${plans}</ul>
  <p class="fee">${t.fee}</p>
</div></section>

<section class="more" aria-labelledby="mo-t"><div class="wrap">
  <h2 id="mo-t">${t.moreTitle}</h2>
  <div class="grid"><div><h3>${t.pt[0]}</h3><p>${t.pt[1]}</p></div><div><h3>${t.rh[0]}</h3><p>${t.rh[1]}</p></div></div>
</div></section>

<section id="zeiten" aria-labelledby="hr-t"><div class="wrap">
  <h2 id="hr-t">${t.hoursTitle}</h2>
  <div class="hgrid" style="margin-top:2rem">
    <table class="ht"><tbody>${hoursRows}</tbody></table>
    <div><p>${t.address}</p><p class="small">${t.way}</p><p class="small">${t.special}</p></div>
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
<footer><div class="wrap"><p>${t.footer} <a href="/impressum">${t.impressum}</a></p><button type="button" class="btn" id="cancel-open">${t.cancelBtn}</button></div></footer>
<dialog id="cancel" aria-labelledby="cn-t"><h2 id="cn-t">${t.cancelTitle}</h2><p>${t.cancelText}</p><form method="dialog"><button class="btn">${t.close}</button></form></dialog>`;

  const data = {
    lang,
    open: OPEN,
    staffed: STAFFED,
    plan: PLAN,
    courses: COURSES,
    loadWeek: LOAD_WEEK,
    loadWeekend: LOAD_WEEKEND,
    t: {
      openUntil: t.openUntil, opensToday: t.opensToday, opensOn: t.opensOn, days: t.days, daysShort: t.daysShort,
      staffedNow: t.staffedNow, staffedNot: t.staffedNot, goalQ: t.goalQ, goals: t.goals, dayQ: t.dayQ, timeQ: t.timeQ,
      contactQ: t.contactQ, name: t.name, contact: t.contact, back: t.back, send: t.send, errName: t.errName,
      errContact: t.errContact, doneTitle: t.doneTitle, doneText: t.doneText, again: t.again, summary: t.summary,
      types: t.types, course: t.course, rooms: t.rooms, left: t.left, leftOne: t.leftOne, full: t.full,
      noCourses: t.noCourses, loadNow: t.loadNow,
    },
  };

  const js = `${HOURS_JS}
var D=${JSON.stringify(data)};
function fmtT(m){var h=Math.floor(m/60), mm=m%60; return h+':'+(mm<10?'0':'')+mm;}
(function(){
  var st=ldStatus(D.open,D.t); document.getElementById('s-open').textContent=st.text; if(st.open) document.getElementById('d-open').classList.add('on');
  var n=new Date(), d=n.getDay(), m=n.getHours()*60+n.getMinutes(), s=D.staffed[d];
  var on=s&&m>=s[0]&&m<s[1]; document.getElementById('s-staff').textContent=on?D.t.staffedNow.replace('{t}',fmtT(s[1])):D.t.staffedNot; if(on) document.getElementById('d-staff').classList.add('on');
})();
function h(tag,attrs,txt){var e=document.createElement(tag); for(var k in attrs){ if(k==='on') e.addEventListener('click',attrs[k]); else e.setAttribute(k,attrs[k]); } if(txt!=null) e.textContent=txt; return e;}
/* timetable */
(function(){
  var day=new Date().getDay(), filter='all', list=document.getElementById('tt');
  var tabs=[].slice.call(document.querySelectorAll('.tab')), fils=[].slice.call(document.querySelectorAll('.fil'));
  function draw(){
    tabs.forEach(function(b){var on=Number(b.dataset.d)===day; b.setAttribute('aria-selected',String(on)); b.tabIndex=on?0:-1; if(on) list.setAttribute('aria-labelledby',b.id);});
    fils.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.f===filter));});
    list.innerHTML=''; var rows=(D.plan[day]||[]).filter(function(r){return filter==='all'||D.courses[r[1]]===filter;});
    if(!rows.length){ list.appendChild(h('li',{class:'empty'},D.t.noCourses)); return; }
    rows.forEach(function(r){ var li=h('li'); li.appendChild(h('span',{class:'time'},r[0]));
      var nm=h('span',{class:'name'},D.t.course[r[1]]); nm.appendChild(h('span',{class:'type'},D.t.types[D.courses[r[1]]])); li.appendChild(nm);
      li.appendChild(h('span',{class:'meta'},r[2])); li.appendChild(h('span',{class:'meta'},D.t.rooms[r[3]]));
      var sp=r[4]===0?D.t.full:(r[4]===1?D.t.leftOne:D.t.left.replace('{n}',r[4]));
      li.appendChild(h('span',{class:'spots'+(r[4]===0?' full':(r[4]<=3?' few':''))},sp)); list.appendChild(li); });
  }
  tabs.forEach(function(b,i){ b.addEventListener('click',function(){day=Number(b.dataset.d);draw();});
    b.addEventListener('keydown',function(e){ var k=e.key, j=k==='ArrowRight'?i+1:k==='ArrowLeft'?i-1:null; if(j===null) return; e.preventDefault(); j=(j+tabs.length)%tabs.length; day=Number(tabs[j].dataset.d); draw(); tabs[j].focus(); }); });
  fils.forEach(function(b){b.addEventListener('click',function(){filter=b.dataset.f;draw();});});
  draw();
})();
/* load chart */
(function(){
  var n=new Date(), d=n.getDay(), hr=n.getHours(), vals=(d===0||d===6)?D.loadWeekend:D.loadWeek, bars=document.getElementById('bars'), axis=document.getElementById('axis');
  vals.forEach(function(v,i){ var hour=6+i; var b=h('div',{class:'bar'+(hour===hr?' now':''),'data-label':D.t.loadNow}); b.style.height=Math.max(4,v)+'%'; bars.appendChild(b); axis.appendChild(h('span',{},hour+'')); });
})();
/* trial booking */
var B={step:0,goal:null,day:null,time:null}, panel=document.getElementById('tpanel'), steps=[].slice.call(document.querySelectorAll('#tsteps li'));
function fmtDay(d,o){return d.toLocaleDateString(D.lang==='de'?'de-DE':'en-GB',o);}
function seed(s){var x=0; for(var i=0;i<s.length;i++){x=(x*31+s.charCodeAt(i))>>>0;} return x;}
function drawTrial(){
  steps.forEach(function(li,i){li.className=i===B.step?'on':(i<B.step?'done':'');});
  panel.innerHTML=''; var t=D.t;
  function back(){ var r=h('div',{class:'row'}); r.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){B.step-=1;drawTrial();}},t.back)); panel.appendChild(r); }
  if(B.step===0){ panel.appendChild(h('p',{class:'tq'},t.goalQ)); var c=h('div',{class:'chips'});
    t.goals.forEach(function(g,i){ c.appendChild(h('button',{type:'button',class:'chip','aria-pressed':String(B.goal===i),on:function(){B.goal=i;B.step=1;drawTrial();}},g)); }); panel.appendChild(c); }
  if(B.step===1){ panel.appendChild(h('p',{class:'tq'},t.dayQ)); var c1=h('div',{class:'chips days'}), base=new Date(); base.setHours(0,0,0,0);
    for(var i=1;i<=8;i++){ (function(x){ var b=h('button',{type:'button',class:'chip','aria-pressed':String(B.day&&B.day.toDateString()===x.toDateString()),on:function(){B.day=x;B.step=2;drawTrial();}}); b.appendChild(document.createTextNode(fmtDay(x,{weekday:'short'}))); b.appendChild(h('small',{},fmtDay(x,{day:'numeric',month:'numeric'}))); c1.appendChild(b); })(new Date(base.getTime()+i*864e5)); }
    panel.appendChild(c1); back(); }
  if(B.step===2){ panel.appendChild(h('p',{class:'tq'},t.timeQ)); var c2=h('div',{class:'chips times'}), s=D.staffed[B.day.getDay()], k=seed(B.day.toDateString());
    for(var m=s[0]; m<=s[1]-90; m+=90){ k=(k*1103515245+12345)>>>0; (function(mm,free){ var b=h('button',{type:'button',class:'chip','aria-pressed':String(B.time===mm),on:function(){B.time=mm;B.step=3;drawTrial();}},fmtT(mm)); if(!free) b.disabled=true; c2.appendChild(b); })(m,(k%5)>0); }
    panel.appendChild(c2); back(); }
  if(B.step===3){ panel.appendChild(h('p',{class:'tq'},t.contactQ)); panel.appendChild(h('p',{class:'sum'},sum()));
    var f=h('form',{novalidate:''}); [['t-name',t.name,'name'],['t-contact',t.contact,'email']].forEach(function(r){ var w=h('div',{class:'field'}); w.appendChild(h('label',{for:r[0]},r[1])); w.appendChild(h('input',{id:r[0],type:'text',autocomplete:r[2]})); f.appendChild(w); });
    var err=h('p',{class:'err',role:'alert'}); f.appendChild(err);
    var row=h('div',{class:'row'}); row.appendChild(h('button',{type:'button',class:'btn ghost',on:function(){B.step=2;drawTrial();}},t.back)); row.appendChild(h('button',{type:'submit',class:'btn'},t.send)); f.appendChild(row);
    f.addEventListener('submit',function(e){e.preventDefault(); var n=document.getElementById('t-name'), c=document.getElementById('t-contact');
      if(!n.value.trim()){err.textContent=t.errName;n.focus();return;} if(!c.value.trim()){err.textContent=t.errContact;c.focus();return;} B.step=4; drawTrial();});
    panel.appendChild(f); }
  if(B.step===4){ steps.forEach(function(li){li.className='done';}); var d=h('div',{class:'done'}); d.appendChild(h('p',{},t.doneTitle)); d.appendChild(h('strong',{},sum())); d.appendChild(h('p',{},t.doneText));
    var a=h('button',{type:'button',class:'btn ghost',on:function(){B={step:0,goal:null,day:null,time:null};drawTrial();}},t.again); a.style.marginTop='1rem'; d.appendChild(a); panel.appendChild(d); }
}
function sum(){return D.t.summary.replace('{g}',D.t.goals[B.goal]).replace('{d}',fmtDay(B.day,{weekday:'long',day:'numeric',month:'long'})).replace('{t}',fmtT(B.time));}
drawTrial();
/* cancellation dialog */
(function(){ var dlg=document.getElementById('cancel'); document.getElementById('cancel-open').addEventListener('click',function(){ if(dlg.showModal) dlg.showModal(); else alert(dlg.textContent); }); })();
`;

  const icon =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%2323282c'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23f1bf2e' stroke-width='4'/%3E%3C/svg%3E";

  return page({
    lang,
    slug,
    title: t.title,
    description: t.description,
    theme: '#23282c',
    icon,
    fonts: ['archivo'],
    barText: t.bar,
    barLink: t.barLink,
    css: CSS,
    body,
    js,
  });
}
