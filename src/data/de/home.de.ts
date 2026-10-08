/**
 * Deutsche Texte der Startseite (/de). Sinngleich zu src/data/v4HomeData.ts, v4Faq.ts und
 * v4Cases.ts (Teaser). Zahlen, Preise, Dauern und Bedingungen sind identisch mit der englischen
 * Quelle. Nichts ist hinzugefügt. Angebote, Zusagen, Schritte und Bedingungen unter den Knöpfen
 * kommen aus shared.de.ts.
 */
import type { Faq } from "@/data/v4Faq";
import { CHECK_REPLY_TIME_DE } from "@/data/de/shared.de";

export const HOME_DE_SEO = {
  title: "LocalDominate – Growth Studio für Marke, Website & Google",
  description:
    "LocalDominate plant, baut und vermarktet Marke, Website und Google-Auftritt als ein Projekt. Sieben Schritte, Umfang und Preis schriftlich, kostenloser Check.",
  breadcrumbHome: "Startseite",
} as const;

export const HOME_DE = {
  hero: {
    label: "Growth Studio · Strategie, Marke, Website, Marketing",
    h1: ["Ein Unternehmen.", "Ein verbundenes Wachstumssystem."],
    body: "LocalDominate plant, baut und vermarktet Ihre Marke, Ihre Website und Ihren Google-Auftritt als ein Projekt statt als vier getrennte Aufträge. Sieben Schritte, ein Team, Umfang und Preis schriftlich, bevor die Arbeit beginnt.",
  },
  orbit: {
    title:
      "Ihr Unternehmen in der Mitte, verbunden mit den sieben Schritten Diagnose, Positionierung, Gestaltung, Umsetzung, Launch, Wachstum und Skalierung als ein System.",
    centerStart: ["IHR", "UNTERNEHMEN"],
    centerDone: ["EIN", "SYSTEM"],
  },
  offerBand: {
    label: "Was Sie bestellen können",
    fullTitle: "Das vollständige Wachstumsprojekt",
    fullBody: "Strategie, Marke, Website und Marketing aus einem Team. Schriftlich angeboten.",
    delivery: "Lieferzeit:",
    fixedPrice: "Festpreis",
  },
  trusted: "Ausgewählte Kunden",
  problem: {
    label: "Das Problem",
    h2: "Wachstum stockt, wenn fünf Aufgaben bei fünf Parteien liegen.",
    body: "Jede Aufgabe kann gut erledigt sein und trotzdem nicht aufgehen, weil niemand die Übergaben dazwischen verantwortet. Prüfen Sie, ob jemand diese fünf Fragen verantwortet.",
    to: "zu",
  },
  system: {
    label: "Das System in sieben Schritten",
    h2: "Vom ersten Blick auf die Zahlen bis zum nächsten Markt.",
    body: "Eine Partei verantwortet alle sieben Schritte, deshalb baut jeder Schritt auf dem auf, was der vorherige gefunden hat. Sie können bei jedem Schritt einsteigen und nach jedem Schritt aufhören.",
    link: "Wie die sieben Schritte zusammenhängen",
    youGet: "Das erhalten Sie: ",
    enMarker: " (EN)",
    showreelLabel: "Showreel",
    showreelH3: "Das System in 20 Sekunden.",
    showreelBody:
      "Eine stille Fahrt durch die sieben Schritte, von der Diagnose bis zur Skalierung. Sie zeigt die Methode, nicht Ergebnisse. Projekte, die wir dokumentieren können, finden Sie auf der Projektseite.",
    showreelTitle: "LocalDominate Showreel: die sieben Schritte von der Diagnose bis zur Skalierung",
  },
  work: {
    label: "Ausgewählte Projekte",
    h2: "Jedes Projekt ist so gekennzeichnet, wie es ist. Ergebnisse veröffentlichen wir nur, wenn wir sie belegen können.",
    dadication: "Dadication",
    dadicationText: ": Markenstart eines US-Onlinehändlers, vom Briefing bis zum Shopify-Shop. Vor dem Launch.",
    dadicationFilmTitle: "Dadication Shop, Hero-Film",
    all: "Alle Projekte ansehen",
  },
  /** Teaser-Projekte der Startseite (veröffentlicht, ohne Video), nach id aus src/data/v4Cases.ts. */
  cases: {
    "explore-saudi": { label: "Plattformbau · Live", title: "KI-native Reiseplattform" },
    "do-good": { label: "Rolle · Live", title: "Digitale Plattform und Wachstumsinfrastruktur" },
    "aurelian-grand": { label: "Konzept", title: "Digitales Schaufenster für ein Luxushotel" },
  } as Record<string, { label: string; title: string }>,
  who: {
    label: "Für wen das System ist",
    h2: "Ein System, für jede Art von Unternehmen anders angewendet.",
    imgAlt: "Illustration: eine Holzterrasse an einem ruhigen Bergsee bei Sonnenuntergang",
    landing: "Für Hotels, Ferienvermieter und Handwerk: Direktbuchung und Google-Profil",
  },
  how: {
    label: "So arbeiten wir",
    h2: "Vier Zusagen, schriftlich.",
    body: "Eine Person verantwortet Ihr Projekt vom ersten Check bis zur Übergabe. KI nutzen wir für Recherche und Routinearbeit. Was live geht, entscheidet und bearbeitet ein Mensch.",
    services: "Leistungen und Preise ansehen",
    insights: "Insights ansehen",
  },
  faq: { label: "Fragen", h2: "Kurze Antworten, bevor Sie starten." },
  invite: {
    h2: "Sagen Sie uns, wo Ihr Unternehmen feststeckt.",
    body: `Senden Sie den Link zu Ihrem Google-Profil oder Ihrer Website. Sie erhalten per E-Mail ${CHECK_REPLY_TIME_DE} bis zu drei konkrete Punkte, die Sie zuerst beheben sollten. Ohne Verpflichtung.`,
  },
} as const;

/** Die Übergaben zwischen den fünf Aufgaben: Fragen, keine Behauptungen. */
export const HANDOVERS_DE = [
  { from: "Strategie", to: "Marke", question: "Sagt die Marke, was die Strategie entschieden hat?" },
  { from: "Marke", to: "Website", question: "Gibt die Website dasselbe Versprechen wie die Marke?" },
  {
    from: "Website",
    to: "Marketing",
    question: "Führen die Kampagnen auf eine Seite, die aus einem Besuch eine Buchung machen kann?",
  },
  { from: "Marketing", to: "Daten", question: "Wird gemessen, welcher Kanal Buchungen oder Bestellungen bringt?" },
  { from: "Daten", to: "Strategie", question: "Verändern die Zahlen die nächste Entscheidung?" },
] as const;

/** Die vier Arten von Unternehmen. Die Anker sind auf allen Sprachfassungen gleich. */
export const WORLDS_DE = [
  {
    anchor: "hospitality",
    title: "Hotels und Gästehäuser",
    body: "Ein Hotel braucht Direktbuchungen, nicht nur Besuche. Wir beurteilen die Website danach, wie viele Buchungen sie bringt.",
  },
  {
    anchor: "holiday-rentals",
    title: "Ferienwohnungen",
    body: "Gastgeber mit mehreren Objekten zahlen bei jeder Plattformbuchung eine Gebühr. Eine eigene Buchungsseite gibt Gästen einen direkten Weg zur Buchung.",
  },
  {
    anchor: "trades",
    title: "Handwerk",
    body: "Eine Empfehlung endet bei Ihrem Google-Profil und Ihrer Website. Wir sorgen dafür, dass das, was der Kunde dort findet, zur Empfehlung passt.",
  },
  {
    anchor: "premium-services",
    title: "Hochwertige lokale Dienstleistungen",
    body: "Wenn Kunden sorgfältig auswählen, erklären Profil und Website, wer Sie sind und was Sie tun, noch vor dem ersten Anruf.",
  },
] as const;

const AFTER_CHECK_DE: Faq = {
  q: "Was passiert nach dem kostenlosen Check?",
  a: `Sie erhalten per E-Mail ${CHECK_REPLY_TIME_DE} bis zu drei konkrete Punkte, die Sie zuerst beheben sollten. Passt eines der vier Angebote, sagen wir Ihnen, welches und warum. Danach entscheiden Sie, ob Sie die Punkte selbst beheben oder uns zum Festpreis damit beauftragen.`,
};

/** Sinngleich zu HOME_FAQ in v4Faq.ts. Dieselbe Liste füllt die sichtbaren Fragen und das FAQPage-JSON-LD. */
export const HOME_FAQ_DE: readonly Faq[] = [
  {
    q: "Was macht LocalDominate?",
    a: "LocalDominate plant, baut und vermarktet Ihre Marke, Ihre Website und Ihren Google-Auftritt als ein Projekt statt als vier getrennte Aufträge. Sie können das vollständige Projekt bestellen oder mit einem Festpreis-Angebot beginnen.",
  },
  AFTER_CHECK_DE,
  {
    q: "Wer verantwortet mein Projekt?",
    a: "Eine Person verantwortet Ihr Projekt vom ersten Check bis zur Übergabe. KI nutzen wir für Recherche und Routinearbeit. Was live geht, entscheidet und bearbeitet ein Mensch.",
  },
  {
    q: "Wem gehören die Website und das Google-Profil?",
    a: "Ihnen. Website und Google-Profil gehören Ihnen. Laufende Betreuung ist monatlich kündbar.",
  },
];
