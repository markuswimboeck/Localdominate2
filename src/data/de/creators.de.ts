import {
  CARE_FIRST_YEAR,
  CREATOR_ANCHORS,
  CREATOR_FORM_OPTIONS,
  CREATOR_PRICES,
  type CreatorOptionId,
} from "@/data/v4Creators";
import { DE_CHECK } from "@/data/de/chrome.de";
import { CHECK_REPLY_TIME_DE } from "@/data/de/shared.de";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";

/**
 * Deutsche Texte der Seite /de/creators. Übersetzt aus der englischen Seite (v4Creators.ts und
 * components/v4/creators/*). Alle Zahlen kommen aus CREATOR_PRICES in v4Creators.ts, damit Preise,
 * Bedingungen und Umfang mit der englischen Seite identisch bleiben. Nichts ist hinzugefügt.
 * Die Demo unter /creator-demo ist englisch und wird an den Stellen, an denen sie erscheint, so benannt.
 */

const SITE = "https://localdominate.org";
export const CREATORS_DE_URL = `${SITE}/de/creators`;
export const CREATORS_OG_IMAGE = `${SITE}/images/v4/social/ld-social-creators-1200x630.jpg`;

const P = CREATOR_PRICES;
/** 2000 -> "2.000", von Hand geschrieben, damit das Ergebnis nie von den Locale-Daten des Browsers abhängt. */
const amount = (value: number): string => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/** Auf dem Bildschirm bleiben Zahl und Eurozeichen in einer Zeile (geschütztes Leerzeichen). */
const eur = (value: number): string => `${amount(value)} €`;
/** Normale Leerzeichen für Meta-Beschreibung und Formularoptionen. */
const eurPlain = (value: number): string => `${amount(value)} €`;

/* ------------------------------------------------------------------ SEO */

export const CREATORS_DE_SEO = {
  title: "Creator-Portfolio und Media-Kit-Seiten – LocalDominate",
  pageName: "Creator-Portfolio und Media-Kit-Seiten – LocalDominate",
  description: `Wir bauen Ihr Creator-Portfolio als Live-Seite: Zahlen mit Datum und Quelle, Zielgruppe, bisherige Projekte, Kollab-Planer. ${eurPlain(P.onePage)} einmalig oder ${eurPlain(P.careMonthly)} im Monat.`,
  breadcrumbHome: "Startseite",
  breadcrumbPage: "Creator",
  serviceType: "Creator-Portfolio-Website",
} as const;

/* ------------------------------------------------------------------ Demo (die Demo selbst ist englisch) */

export const DEMO_DE = {
  iframeTitle: "Demo-Portfolio der fiktiven Creatorin Noa Valmère (auf Englisch)",
  phoneAlt: "Erster Bildschirm des Demo-Portfolios der fiktiven Creatorin Noa Valmère, Smartphone-Ansicht (Text auf Englisch)",
  desktopAlt: "Erster Bildschirm des Demo-Portfolios der fiktiven Creatorin Noa Valmère, Desktop-Ansicht (Text auf Englisch)",
  phonePortraitAlt: "Porträtbereich des Demo-Portfolios der fiktiven Creatorin Noa Valmère, Smartphone-Ansicht",
} as const;

/* ------------------------------------------------------------------ 1 Hero */

export const HERO_DE = {
  label: "Für Creator · Portfolio- und Media-Kit-Seiten",
  titleLines: ["Ihr Media-Kit als Live-Seite.", "Wir bauen sie für Sie."],
  text: "Ein Link, der einer Marke zeigt, wer Ihnen folgt, was Sie erreichen, was Sie schon gemacht haben und wie man Sie bucht. Nichts geht online, bevor Sie es freigeben.",
  primary: DE_CHECK.creatorsLabel,
  secondary: "Live-Demo ausprobieren",
  caption: "Demoprofil: Noa Valmère, eine fiktive Creatorin. Fotos KI-generiert. Die Demo ist auf Englisch.",
  terms: ["Vorschau, bevor etwas öffentlich wird", "Kein Passwort nötig, Screenshots genügen", "Ihre Domain, auf Ihren Namen"],
  pricesLabel: "Preise",
} as const;

/** "0 € Einrichtung" steht nie ohne die monatliche Gebühr und die Mindestlaufzeit. */
export const HERO_PRICES_DE: readonly { figure: string; note: string }[] = [
  {
    figure: `${eur(P.careSetup)} Einrichtung`,
    note: `Betreuungspaket: danach ${eur(P.careMonthly)} im Monat, mindestens ${P.careMinimumMonths} Monate`,
  },
  { figure: `${eur(P.onePage)} einmalig`, note: "One-Pager" },
  { figure: `ab ${eur(P.studioFrom)}`, note: "Studio-System" },
];

/* ------------------------------------------------------------------ 2 Was Marken prüfen */

export const WHY_DE = {
  label: "Was Marken prüfen",
  title: "Eine Marke will fünf Antworten. Eine einfache Linkliste gibt keine davon.",
  text: "Ratgeber für Creator von Hootsuite, Later und Shopify nennen dieselben Punkte, die ein Media-Kit zeigen sollte. Ihre Seite zeigt sie auf einem Bildschirm, jeweils mit Datum und Quelle.",
  answers: [
    {
      title: "Reichweite und Interaktion",
      body: "Follower, durchschnittliche Reichweite und Engagement-Rate pro Plattform, jeweils mit dem Datum der Prüfung.",
    },
    { title: "Zielgruppe", body: "Länder, Altersgruppen und Geschlecht aus Ihren Insights, als Diagramm." },
    { title: "Bisherige Projekte", body: "Kooperationen, die Sie zeigen dürfen, und was dabei geliefert wurde." },
    {
      title: "Formate und Preise",
      body: "Was sich buchen lässt: Story-Set, Reel, Post, Aufenthaltspaket. Preise sichtbar oder auf Anfrage, Sie entscheiden.",
    },
    {
      title: "Ein Weg zur Buchung",
      body: "Ein Kollab-Planer, der aus der Idee einer Marke ein Briefing macht, und ein klarer Kontakt.",
    },
  ],
  quote: {
    text: "„Marken achten vor allem auf Ihre Reichweite, Ihr Engagement und die Demografie Ihrer Zielgruppe.“",
    source: "Hootsuite, September 2025",
    note: "Übersetzung aus dem Englischen",
    url: "https://blog.hootsuite.com/influencer-media-kit/",
  },
  contrasts: [
    "Ein PDF beantwortet das einmal. Dann ändern sich Ihre Zahlen.",
    "Eine einfache Linkliste leitet Fans zu Ihren Links. Eine Marke bekommt dort keine Antwort.",
  ],
  sourcesLabel: "Quellen (auf Englisch)",
  sources: [
    { name: "Hootsuite", date: "September 2025", url: "https://blog.hootsuite.com/influencer-media-kit/" },
    { name: "Later", date: "Juni 2025", url: "https://later.com/blog/influencer-media-kit/" },
    { name: "Shopify", date: "2023", url: "https://www.shopify.com/blog/influencer-media-kit" },
  ],
  newTab: "Die Links öffnen in einem neuen Tab.",
} as const;

/* ------------------------------------------------------------------ 3 Live-Demo */

export const DEMO_SECTION_DE = {
  label: "Live-Demo",
  title: "Probieren Sie die Seite aus, bevor Sie Ihre anfragen.",
  text: "Das ist eine vollständige Seite für Noa Valmère, eine Creatorin, die wir für diese Demo erfunden haben. Ihre Zahlen, Marken und Zitate sind Beispiele, ihre Fotos sind KI-generiert. Ihre Seite entsteht aus denselben Bausteinen, mit Ihren eigenen Inhalten. Welche Bausteine Sie brauchen, legen wir im schriftlichen Angebot fest.",
  languageNote: "Die Demo selbst ist auf Englisch.",
  scale:
    "Noa ist als großer Reiseaccount angelegt. Ihre Seite zeigt Ihre eigenen Zahlen und Preise, bei 20K Followern oder bei 2M. Preise können auch „auf Anfrage“ lauten.",
  tryLabel: "Zum Ausprobieren",
  tries: [
    "Ziehen Sie auf dem ersten Bildschirm am Band.",
    "Ändern Sie die Farbe des Schals. Die ganze Seite folgt.",
    "Planen Sie eine Kollaboration: Markentyp, Ziel und Formate wählen, dann das Briefing kopieren.",
    "Öffnen Sie die Reisekarte und blättern Sie durch einen Hotelaufenthalt.",
  ],
  open: "Demo in neuem Tab öffnen (EN)",
  openShort: "Live-Demo öffnen (EN)",
  caption: "Fiktive Creatorin. Beispieldaten. Fotos KI-generiert. Die Demo ist auf Englisch.",
  action: "Eine Seite wie diese anfragen",
  devices: { phone: "Smartphone", desktop: "Desktop" },
  switchLabel: "Demo-Größe",
} as const;

/* ------------------------------------------------------------------ 4 Was auf der Seite steht */

export type PageSectionIconDe = "numbers" | "signature" | "pillars" | "audience" | "map" | "brands" | "planner" | "contact";

export const INCLUDED_DE: {
  readonly label: string;
  readonly title: string;
  readonly cards: readonly { icon: PageSectionIconDe; title: string; body: string }[];
  readonly line: string;
} = {
  label: "Das bekommen Sie",
  title: "Das steckt auf Ihrer Seite.",
  cards: [
    { icon: "numbers", title: "Zahlen mit Quellen", body: "Jede Zahl zeigt, woher sie stammt und wann sie geprüft wurde." },
    {
      icon: "signature",
      title: "Ihre Handschrift",
      body: "Was Ihre Inhalte unverwechselbar macht, wird zum Look der Seite: Farben, Schrift und ein verspieltes Detail.",
    },
    { icon: "pillars", title: "Content-Säulen", body: "Drei bis vier Themen mit Ihren besten Bildern." },
    { icon: "audience", title: "Zielgruppen-Diagramme", body: "Länder, Alter und Geschlecht aus Ihren Insights." },
    {
      icon: "map",
      title: "Reisekarte und Aufenthalte",
      body: "Wo Sie waren und was ein Hotel von einem Aufenthalt hat.",
    },
    { icon: "brands", title: "Für Marken", body: "Ein Tab pro Markentyp mit einem typischen Projekt." },
    {
      icon: "planner",
      title: "Kollab-Planer",
      body: "Markentyp, Ziel und Formate ergeben eine Live-Schätzung und ein Briefing zum Kopieren.",
    },
    {
      icon: "contact",
      title: "Ablauf, FAQ und Kontakt",
      body: "Prozess, Nutzungsrechte, Zeitplan und ein klarer Weg, Sie zu erreichen.",
    },
  ],
  line: "Mobile first, schnell, auf Ihrer eigenen Domain. Keine App und kein Login für Ihre Besucher.",
};

/* ------------------------------------------------------------------ 5 Vergleich */

type CompareColumn = { id: string; name: string; ours: boolean; values: readonly string[] };

export const COMPARE_DE = {
  label: "Was Sie heute nutzen",
  title: "Behalten Sie Ihre Linkliste. Ergänzen Sie die Seite, die Marken brauchen.",
  rows: [
    "Gemacht für",
    "Wer sie baut",
    "Zielgruppe, bisherige Projekte und Buchung auf einem Bildschirm",
    "Bleibt aktuell",
    "Eigene Domain",
  ] as readonly string[],
  columns: [
    {
      id: "link-in-bio",
      name: "Link-in-Bio-Tool",
      ours: false,
      values: [
        "Fans, die Ihre Links wollen",
        "Sie",
        "Nicht in einer einfachen Linkliste. Einige Tools bieten in bezahlten Tarifen ein Media-Kit.",
        "Sie aktualisieren",
        "In bezahlten Tarifen",
      ],
    },
    {
      id: "pdf",
      name: "Media-Kit als PDF",
      ours: false,
      values: ["Eine Pitch-Mail", "Sie", "Ja, als feste Datei", "Sie exportieren neu", "Nein"],
    },
    {
      id: "builder",
      name: "Website-Baukasten",
      ours: false,
      values: ["Alle, die Zeit zum Bauen haben", "Sie", "Wenn Sie sie bauen", "Sie aktualisieren", "Ja"],
    },
    {
      id: "localdominate",
      name: "Ihre Seite von LocalDominate",
      ours: true,
      values: [
        "Marken und Hotels, die über eine Kooperation entscheiden",
        "Wir",
        "Ja",
        "Wir aktualisieren sie jeden Monat mit dem Betreuungspaket",
        "Ja, auf Ihren Namen registriert",
      ],
    },
  ] as readonly CompareColumn[],
  /** Am 2. Oktober 2026 auf den Seiten der Anbieter geprüft (wie auf der englischen Seite). */
  note: {
    intro: "Listenpreise am 2. Oktober 2026:",
    beacons: {
      name: "Beacons",
      rest: " hat einen kostenlosen Tarif und bezahlte Tarife für 10 $, 30 $ und 100 $ pro Monat, das Media-Kit gibt es in den bezahlten Tarifen.",
      url: "https://beacons.ai/i/pricing",
    },
    squarespace: {
      name: "Squarespace",
      rest: " beginnt bei 19 $ pro Monat, jährlich abgerechnet.",
      url: "https://www.squarespace.com/pricing",
    },
    canva: {
      name: "Canva",
      rest: " bietet kostenlose Media-Kit-Vorlagen an.",
      url: "https://www.canva.com/media-kits/templates/",
    },
    languageNote: "Die Seiten dieser Anbieter sind auf Englisch.",
  },
} as const;

/* ------------------------------------------------------------------ 6 Preise */

export type CreatorTierDe = {
  id: "care" | "one-page" | "studio";
  name: string;
  badge?: string;
  price: { overline: string; figure: string };
  then?: { prefix: string; figure: string; unit: string };
  terms: string;
  total?: string;
  includes: readonly string[];
  ownership?: string;
  cta: string;
  callLink?: string;
};

export const PRICES_SECTION_DE = {
  label: "Preise",
  title: "Drei Wege zu Ihrer Seite.",
  text: "Festpreise, vor dem Start schriftlich bestätigt.",
  includesLabel: "Enthalten",
  notes: [
    "Nicht enthalten: die Domain selbst, etwa 10 bis 15 € pro Jahr, auf Ihren Namen registriert.",
    "Angebot für Creator, die mit Marken geschäftlich zusammenarbeiten.",
  ],
  fitLabel: "Was passt zu Ihnen?",
  fits: [
    { when: "Sie posten ab und zu für Marken:", pick: "One-Pager." },
    { when: "Sie pitchen jeden Monat und möchten Ihre Zahlen nicht selbst pflegen:", pick: "Betreuungspaket." },
    { when: "Sie führen das als Unternehmen, mit Manager oder Team:", pick: "Studio-System." },
  ],
} as const;

export const CREATOR_TIERS_DE: readonly CreatorTierDe[] = [
  {
    id: "care",
    name: "Betreuungspaket",
    badge: "Günstigster Einstieg",
    price: { overline: "Einrichtung", figure: eur(P.careSetup) },
    then: { prefix: "danach", figure: eur(P.careMonthly), unit: "im Monat" },
    terms: `${P.careMinimumMonths} Monate Mindestlaufzeit ab dem Tag, an dem Ihre Seite live geht, danach monatlich kündbar.`,
    total: `Erstes Jahr: ${eur(CARE_FIRST_YEAR)}.`,
    includes: [
      "Ihr One-Pager-Portfolio, für Sie gebaut",
      "Live auf Ihrer eigenen Domain",
      "Zahlen jeden Monat aktualisiert, aus den Insights, die Sie uns schicken",
      "Zwei inhaltliche Änderungen pro Monat: eine neue Kooperation, neue Fotos, neuer Text",
      "Hosting und technische Pflege inklusive",
    ],
    ownership: "Wenn Sie nach dem ersten Jahr kündigen, erhalten Sie die Seite kostenlos als Dateien.",
    cta: "Mit dem Betreuungspaket starten",
  },
  {
    id: "one-page",
    name: "One-Pager",
    price: { overline: "einmalig", figure: eur(P.onePage) },
    terms: "50 % bei Beauftragung, 50 % bei Abnahme. Eine Korrekturrunde inklusive.",
    includes: [
      "Dasselbe One-Pager-Portfolio, für Sie gebaut",
      "Live auf Ihrer eigenen Domain",
      "Übergabe bei Abnahme: Die Seite gehört Ihnen",
      "Hosting in Ihrem eigenen Konto eingerichtet, keine monatliche Gebühr an uns",
      "Aktualisierungen später: das Betreuungspaket dazubuchen oder einzelne Änderungen beauftragen",
    ],
    ownership: "Kein Abo. Die Seite gehört Ihnen ab dem Tag der Abnahme.",
    cta: "One-Pager bestellen",
  },
  {
    id: "studio",
    name: "Studio-System",
    price: { overline: "ab", figure: eur(P.studioFrom) },
    terms: `Üblicher Rahmen: ${amount(P.studioFrom)} bis ${eur(P.studioTo)}. Umfang und Festpreis nach einem kurzen Gespräch.`,
    includes: [
      "Mehrseitige Website mit einer Seite pro Kooperation",
      "Posteingang für Markenanfragen: jede Anfrage in einer Liste mit ihrem Status",
      "Outreach-System: Markenliste, Pitch-Vorlagen und Erinnerungen zum Nachfassen",
      "Media-Kit-PDF, erzeugt aus denselben Daten wie die Seite",
      "Monatliche Zahlen und ein kurzer Bericht",
    ],
    ownership: "Domain, Hosting-Konto und Code laufen bei der Übergabe auf Ihren Namen.",
    cta: "System planen",
    callLink: "Oder 15-Minuten-Gespräch buchen",
  },
];

/* ------------------------------------------------------------------ 7 So läuft es */

export const STEPS_DE_CREATORS = {
  label: "So läuft es",
  title: "Vier Schritte. Sie senden, wir bauen.",
  steps: [
    {
      title: "Handle senden",
      body: `Nennen Sie uns Ihr Profil und die gewünschte Option. Wir antworten per E-Mail ${CHECK_REPLY_TIME_DE} mit einem schriftlichen Angebot und der Liste dessen, was wir brauchen.`,
    },
    {
      title: "Material senden",
      body: "Insights-Screenshots der letzten 30 Tage, 8 bis 12 Fotos, eine kurze Bio und die Kooperationen, die Sie zeigen dürfen. Kein Passwort, kein Zugang zu Ihren Konten.",
    },
    {
      title: "Wir bauen, Sie geben frei",
      body: "Sie erhalten einen Vorschaulink. Eine Korrekturrunde ist inklusive. Ohne Ihre Freigabe wird nichts öffentlich.",
    },
    {
      title: "Live auf Ihrer Domain",
      body: "Wir verbinden Ihre Domain und übergeben. Mit dem Betreuungspaket aktualisieren wir Ihre Zahlen jeden Monat.",
    },
  ],
  timingLabel: "Zeitplan",
  timing: "Live innerhalb von fünf Werktagen, nachdem Ihr Material vollständig ist.",
} as const;

/* ------------------------------------------------------------------ 8 Unsere Regeln */

export const RULES_DE = {
  label: "Unsere Regeln",
  title: "Nur Zahlen, die Sie belegen können.",
  rules: [
    "Jede Zahl trägt Quelle und Datum.",
    "Keine erfundenen Testimonials und keine Markenlogos ohne Erlaubnis.",
    "Wir fragen nie nach Ihrem Passwort. Screenshots Ihrer Insights genügen.",
    "Ihre Domain wird auf Ihren Namen registriert. Ihre Seite bleibt Ihre.",
  ],
  closing: {
    linkText: "Laters Media-Kit-Ratgeber (EN)",
    url: "https://later.com/blog/influencer-media-kit/",
    rest: " rät, Marken ein ehrliches Bild der eigenen Statistiken zu geben. So bauen wir die Seite.",
  },
} as const;

/* ------------------------------------------------------------------ 9 FAQ */

/** Reine Strings: Dieselbe Liste füllt die sichtbare FAQ und das FAQPage-JSON-LD. */
export const CREATOR_FAQ_DE: readonly { q: string; a: string }[] = [
  {
    q: "Ich habe schon einen Link in der Bio. Wozu noch eine Seite?",
    a: "Behalten Sie ihn. Eine Linkliste leitet Fans zu Ihren Links. Diese Seite ist für die Markenverantwortlichen, die über eine Kooperation entscheiden und Zielgruppe, Reichweite und bisherige Projekte auf einem Bildschirm sehen wollen. Sie können die Seite in Ihrer Linkliste verlinken.",
  },
  {
    q: "Eine Media-Kit-Vorlage ist kostenlos. Wozu bezahlen?",
    a: "Eine Vorlage ist gut, wenn Sie sie selbst bauen und pflegen. Ein PDF ist veraltet, sobald sich Ihre Zahlen ändern, und es kann keine Anfrage entgegennehmen. Wir bauen die Seite für Sie und halten sie mit dem Betreuungspaket aktuell.",
  },
  {
    q: "Warum ein Monatspaket?",
    a: `Weil sich Ihre Zahlen jeden Monat ändern. Das Betreuungspaket kostet im ersten Jahr ${eur(CARE_FIRST_YEAR)}, der One-Pager einmalig ${eur(P.onePage)}. Nehmen Sie das Paket, wenn wir die Aktualisierungen übernehmen sollen. Wenn Sie selten aktualisieren, nehmen Sie den One-Pager.`,
  },
  {
    q: "Wem gehören die Seite und die Domain?",
    a: "Ihnen. Die Domain wird auf Ihren Namen registriert. Der One-Pager wird bei Abnahme übergeben. Beim Betreuungspaket erhalten Sie die Seite als Dateien, wenn Sie nach dem ersten Jahr kündigen.",
  },
  {
    q: "Was passiert, wenn ich das Betreuungspaket beende?",
    a: `Nach den ${P.careMinimumMonths} Monaten Mindestlaufzeit können Sie monatlich kündigen. Sie erhalten die Seite als Dateien und können sie überall hosten. Unsere Aktualisierungen enden dann.`,
  },
  {
    q: "Brauchen Sie Zugang zu meinen Konten?",
    a: "Nein. Wir arbeiten mit Ihrem öffentlichen Profil und den Screenshots, die Sie uns schicken.",
  },
  {
    q: "Welche Plattformen kann die Seite zeigen?",
    a: "Instagram, TikTok und YouTube nebeneinander, jeweils mit eigener Quelle. Weitere Plattformen auf Anfrage.",
  },
  { q: "Wie lange dauert es?", a: "Fünf Werktage ab dem Tag, an dem Ihr Material vollständig ist." },
  {
    q: "Ist die Demo-Creatorin echt?",
    a: "Nein. Noa Valmère ist für diese Demo erfunden, mit Beispielzahlen und KI-generierten Fotos. Ihre Seite zeigt nur Ihre eigenen Inhalte und Zahlen, die Sie belegen können.",
  },
];

export const FAQ_SECTION_DE = { label: "Fragen", title: "Kurze Antworten vor dem Start." } as const;

/* ------------------------------------------------------------------ Mehr für Creator */

export const MORE_DE = {
  label: "Mehr als die Seite",
  title: "Mehr für Creator, Preis auf Anfrage.",
  text: "Die Seite ist der Anfang. Wenn Sie auch die Arbeit dahinter abgeben möchten, bieten wir drei weitere Leistungen an. Umfang und Preis legen wir nach einem kurzen Gespräch schriftlich fest.",
  priceLabel: "Preis auf Anfrage",
  services: [
    {
      id: "management",
      name: "Social-Media-Management",
      body: "Wir planen und veröffentlichen mit Ihnen: Redaktionskalender, Captions, Planung und Antworten, in Ihrer Tonalität. Ohne Ihre Freigabe geht nichts raus.",
      points: ["Monatlicher Redaktionskalender", "Planung und Veröffentlichung", "Antworten an die Community nach vereinbarten Regeln"],
    },
    {
      id: "analytics",
      name: "Social-Media-Analyse",
      body: "Ein monatlicher Bericht, der zeigt, was funktioniert hat: Reichweite, Interaktion und Zielgruppe je Plattform, mit Quelle und Datum, bereit zur Weitergabe an eine Marke.",
      points: ["Zahlen je Plattform und Format", "Was Sie wiederholen und was Sie lassen sollten", "Dieselben Zahlen speisen Ihre Seite"],
    },
    {
      id: "software",
      name: "Social-Media-Software, für Sie gebaut",
      body: "Software, die zu Ihrer Arbeitsweise passt: zum Beispiel ein Content-Planer, ein Posteingang für Markenanfragen oder ein Reporting-Dashboard für Sie und Ihr Team.",
      points: [
        "Zugeschnitten auf Ihre Kanäle und Abläufe",
        "Mit Ihren echten Daten gebaut und getestet",
        "Schriftliche Übergabe, bleibt bei Ihnen",
      ],
    },
  ],
  action: "Angebot anfragen",
} as const;

/* ------------------------------------------------------------------ 10 Formular */

export const FORM_SECTION_DE = {
  label: "Ihre Seite anfragen",
  title: `Senden Sie uns Ihren Handle. Wir antworten ${CHECK_REPLY_TIME_DE}.`,
  text: "Sie erhalten ein schriftliches Angebot und die kurze Liste dessen, was wir von Ihnen brauchen. Das Absenden kostet nichts und verpflichtet Sie zu nichts.",
  callTitle: "Lieber erst sprechen?",
  who: { lead: "Hinter LocalDominate steht Markus Wimböck.", link: "Über Markus (EN)" },
  /** Sinngleich zu PRINCIPLES in v4About.ts ("One person on the project"). */
  onePerson: "Vom ersten Check bis zur Übergabe ist eine Person für Ihr Projekt verantwortlich.",
} as const;

/**
 * Beschriftungen der Optionen im Auswahlfeld. Der gesendete WERT ist der englische Text der
 * englischen Seite (CREATOR_FORM_OPTIONS), damit Benachrichtigung und E-Mail beim Inhaber
 * genauso lauten wie bei /creators.
 */
export const CREATOR_FORM_OPTION_LABELS_DE: Record<CreatorOptionId, string> = {
  care: `Betreuungspaket: ${eurPlain(P.careSetup)} Einrichtung, ${eurPlain(P.careMonthly)} im Monat, mindestens ${P.careMinimumMonths} Monate`,
  "one-page": `One-Pager: ${eurPlain(P.onePage)} einmalig`,
  studio: `Studio-System: ab ${eurPlain(P.studioFrom)}`,
  more: "Social-Media-Management, Analyse oder Software: Preis auf Anfrage",
  unsure: "Noch unsicher",
};

export const CREATOR_FORM_SELECT_DE: readonly { value: string; label: string }[] = (
  Object.keys(CREATOR_FORM_OPTIONS) as CreatorOptionId[]
).map((id) => ({ value: CREATOR_FORM_OPTIONS[id], label: CREATOR_FORM_OPTION_LABELS_DE[id] }));

export type CreatorFormTextsDe = {
  formLabel: string;
  name: string;
  email: string;
  link: string;
  linkHint: string;
  businessType: string;
  businessTypePlaceholder: string;
  goal: string;
  goalHint: string;
  consentBefore: string;
  consentBeforeWithService: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
  sending: string;
  mailNote: string;
  errors: {
    summary: string;
    name: string;
    email: string;
    link: string;
    businessType: string;
    consent: string;
    failed: string;
  };
  success: { title: string; body: string };
  mailOpened: { title: string; body: string };
};

export const CREATOR_FORM_DE: CreatorFormTextsDe = {
  formLabel: "Ihre Creator-Seite anfragen",
  name: "Ihr Name",
  email: "E-Mail",
  link: "Link zu Ihrem Hauptprofil",
  linkHint: "Instagram, TikTok oder YouTube.",
  businessType: "Welche Option interessiert Sie?",
  businessTypePlaceholder: "Bitte wählen",
  goal: "Gibt es etwas, das wir wissen sollten?",
  goalHint: "Optional. Zum Beispiel Ihre Nische, Ihre Follower-Größe oder ein Termin.",
  consentBefore: "Ich bin einverstanden, dass meine Angaben zur Beantwortung dieser Anfrage verwendet werden. Siehe ",
  consentBeforeWithService:
    "Ich bin einverstanden, dass meine Angaben zur Beantwortung dieser Anfrage verwendet und über den Formulardienst Web3Forms an LocalDominate übermittelt werden. Ich kann meine Einwilligung jederzeit widerrufen. Siehe ",
  consentLink: "Datenschutzerklärung",
  consentAfter: ".",
  submit: "Anfrage senden",
  sending: "Wird gesendet…",
  mailNote: "Es öffnet sich Ihr E-Mail-Programm mit Ihrer ausgefüllten Anfrage. Drücken Sie nur noch auf Senden.",
  errors: {
    summary: "Bitte prüfen Sie die markierten Felder.",
    name: "Bitte geben Sie Ihren Namen ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    link: "Bitte geben Sie den Link zu Ihrem Profil ein.",
    businessType: "Bitte wählen Sie eine Option.",
    consent: "Bitte bestätigen Sie den Datenschutzhinweis.",
    failed: "Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns an info@localdominate.org.",
  },
  success: {
    title: "Danke. Ihre Anfrage ist angekommen.",
    body: `Wir antworten per E-Mail ${CHECK_REPLY_TIME_DE} mit einem schriftlichen Angebot und der Liste des Materials, das wir brauchen.`,
  },
  mailOpened: {
    title: "Ihr E-Mail-Programm sollte sich geöffnet haben.",
    body: "Senden Sie die vorbereitete E-Mail, dann ist Ihre Anfrage unterwegs. Falls sich nichts geöffnet hat, schreiben Sie an info@localdominate.org.",
  },
};

/** Benachrichtigung und vorbereitete E-Mail gehen an den Inhaber: gleiche Wortwahl wie bei /creators (englisch). */
export const CREATOR_FORM_MAIL = {
  subject: "Creator page request",
  name: "Your name",
  email: "Email",
  link: "Link to your main profile",
  businessType: "Which option interests you?",
  goal: "Anything we should know?",
} as const;

/* ------------------------------------------------------------------ JSON-LD */

const ORGANIZATION = { "@id": `${SITE}/#organization` };

const offer = (name: string, description: string, priceSpecification: Record<string, unknown>) => ({
  "@type": "Offer",
  name,
  description,
  priceCurrency: "EUR",
  url: `${CREATORS_DE_URL}#${CREATOR_ANCHORS.prices}`,
  priceSpecification: { priceCurrency: "EUR", ...priceSpecification },
});

export const CREATORS_DE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CREATORS_DE_URL}#webpage`,
      url: CREATORS_DE_URL,
      name: CREATORS_DE_SEO.pageName,
      description: CREATORS_DE_SEO.description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${CREATORS_DE_URL}#service` },
      breadcrumb: { "@id": `${CREATORS_DE_URL}#breadcrumb` },
      dateModified: SEO_DATE_MODIFIED,
      inLanguage: "de",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CREATORS_DE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: CREATORS_DE_SEO.breadcrumbHome, item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: CREATORS_DE_SEO.breadcrumbPage, item: CREATORS_DE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CREATORS_DE_URL}#service`,
      name: CREATORS_DE_SEO.pageName,
      serviceType: CREATORS_DE_SEO.serviceType,
      description: CREATORS_DE_SEO.description,
      url: CREATORS_DE_URL,
      inLanguage: "de",
      provider: ORGANIZATION,
      offers: [
        offer("One-Pager", "Creator-Portfolio als One-Pager, für Sie gebaut und bei Abnahme übergeben. Einmaliger Preis.", {
          "@type": "PriceSpecification",
          price: P.onePage,
        }),
        offer(
          "Betreuungspaket",
          `Creator-Portfolio als One-Pager mit monatlichen Aktualisierungen. Keine Einrichtungsgebühr, ${P.careMinimumMonths} Monate Mindestlaufzeit, danach monatlich kündbar. Erstes Jahr: ${CARE_FIRST_YEAR} EUR.`,
          {
            "@type": "UnitPriceSpecification",
            price: P.careMonthly,
            unitCode: "MON",
            unitText: "MONTH",
            billingIncrement: 1,
          }
        ),
        offer(
          "Studio-System",
          "Mehrseitige Creator-Website mit Posteingang für Anfragen und Outreach-System. Umfang und Festpreis nach einem kurzen Gespräch.",
          {
            "@type": "PriceSpecification",
            minPrice: P.studioFrom,
          }
        ),
      ],
    },
    { ...faqPageJsonLd(CREATORS_DE_URL, CREATOR_FAQ_DE), inLanguage: "de" },
  ],
};
