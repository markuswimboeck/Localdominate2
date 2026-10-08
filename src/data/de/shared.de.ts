/**
 * Deutsche Texte, die mehrere Seiten teilen: die vier Angebote, die vier Zusagen, die Bedingungen
 * unter den Knöpfen und die sieben Schritte. Zahlen, Preise, Lieferzeiten und Bedingungen sind
 * identisch mit den englischen Quellen (v4Offers.ts, v4HowWeWork.ts, v4HomeData.ts,
 * v4PillarIndex.ts). Nichts ist hinzugefügt. Die Angebots-ids stimmen mit v4Offers.ts überein,
 * die Anker `offer-<id>` sind also auf allen Sprachfassungen gleich.
 */
import type { Commitment } from "@/data/v4HowWeWork";
import type { PillarId } from "@/data/v4PillarIndex";
import { DE_OFFER_NAMES, DE_STEP_NAMES } from "@/data/de/chrome.de";

export type OfferDe = {
  id: string;
  name: string;
  summary: string;
  /** "ab " oder leer, wenn der englische Preis kein "from" hat. */
  pricePrefix: string;
  /** Die Zahl in deutscher Schreibweise, z. B. "1.490 €". */
  priceFigure: string;
  priceNote?: string;
  delivery?: string;
  includes: readonly string[];
  bestFor: string;
};

export const OFFERS_DE: readonly OfferDe[] = [
  {
    id: "conversion-sprint",
    name: DE_OFFER_NAMES["conversion-sprint"],
    summary:
      "Für den Funnel eines Hotels vor der Eröffnung, eine Buchungsseite oder einen Shopify-Shop, der Besuche bekommt, aber zu wenige Buchungen oder Bestellungen.",
    pricePrefix: "ab ",
    priceFigure: "390 €",
    delivery: "72 Stunden",
    includes: [
      "Prüfung einer Seite: Handyansicht, Geschwindigkeit und Tracking",
      "Fünf Verbesserungen, zuerst auf einer Kopie umgesetzt, danach live, sobald Sie zustimmen",
      "Ein kurzer schriftlicher Bericht darüber, was wir geändert haben und warum",
    ],
    bestFor: "Hotels, Ferienvermieter und Online-Shops mit Besuchern, aber zu wenigen Buchungen oder Bestellungen.",
  },
  {
    id: "ai-automation-starter",
    name: DE_OFFER_NAMES["ai-automation-starter"],
    summary:
      "Ein erster Automatisierungsschritt, zum Beispiel ein Webformular, das einen Kontakt im CRM anlegt, Sie benachrichtigt und auf die Anfrage antwortet.",
    pricePrefix: "",
    priceFigure: "250 €",
    delivery: "3 Tage",
    includes: [
      "Ein Ablauf (ein Auslöser, bis zu drei Schritte), zuerst aufgeschrieben und von Ihnen freigegeben",
      "Mit Ihren echten Daten gebaut und getestet",
      "Kurze schriftliche Übergabe",
    ],
    bestFor: "Kleine Teams, die Zeit mit denselben manuellen Schritten bei Anfragen oder in der Verwaltung verlieren.",
  },
  {
    id: "google-profile",
    name: DE_OFFER_NAMES["google-profile"],
    summary:
      "Ihr Google-Unternehmensprofil wird geprüft und korrigiert, damit es für die lokale Suche vollständig und einheitlich ist.",
    pricePrefix: "",
    priceFigure: "79 €",
    priceNote: "Vollständige Optimierung: 390 €",
    includes: [
      "Prüfung Ihres aktuellen Google-Unternehmensprofils",
      "Korrektur der Felder, die für die lokale Suche zählen",
      "Den Umfang des Quick-Fix und der Optimierung bestätigen wir im Gespräch",
    ],
    bestFor: "Lokale Betriebe, besonders in DACH, die ein sauberes Profil möchten, ohne ein langes Projekt.",
  },
  {
    id: "website-5-days",
    name: DE_OFFER_NAMES["website-5-days"],
    summary: "Eine Direktbuchungsseite für Ferienwohnungen und Hotels, in einer konzentrierten Woche gebaut.",
    pricePrefix: "ab ",
    priceFigure: "1.490 €",
    delivery: "5 Tage",
    includes: [
      "Direktbuchungsseite, zuerst für das Handy gebaut",
      "Umfang und Inhalte legen wir vor dem Start in einem Gespräch fest",
      "Livegang und kurze Übergabe",
    ],
    bestFor: "Gastgeber und Hotels, deren Gäste direkt buchen sollen, statt Plattformgebühren zu zahlen.",
  },
];

/** "ab 1.490 €" bzw. "250 €". */
export const offerPriceDe = (o: OfferDe): string => `${o.pricePrefix}${o.priceFigure}`;

export const offerDeById = (id: string): OfferDe | undefined => OFFERS_DE.find((o) => o.id === id);

/** Bedingungen unter den Hero-Knöpfen. Jede steht ausführlich in "So arbeiten wir". */
export const HERO_TERMS_DE = [
  "Preis schriftlich vor dem Start",
  "Alles gehört Ihnen",
  "Laufende Betreuung monatlich kündbar",
] as const;

/** Die vier Zusagen, sinngleich zu HOW_WE_WORK in v4HowWeWork.ts. */
export const HOW_WE_WORK_DE: readonly Commitment[] = [
  {
    title: "Umfang und Preis zuerst schriftlich",
    body: "Sie erhalten den genauen Umfang und einen festen Preis schriftlich, bevor die Arbeit beginnt. Berechnet wird nur, was vereinbart wurde.",
  },
  {
    title: "Zahlung in zwei Schritten",
    body: "Die Hälfte bei Beauftragung, die Hälfte bei Abnahme des vereinbarten Umfangs. Eine Korrekturrunde ist inklusive.",
  },
  {
    title: "Alles gehört Ihnen",
    body: "Website und Google-Profil gehören Ihnen. Laufende Betreuung ist monatlich kündbar.",
  },
  {
    title: "Keine Ranking-Versprechen",
    body: "Wir versprechen weder Positionen noch Umsatz. Sie erhalten eine schriftliche Liste dessen, was wir geändert haben und warum.",
  },
];

/** Entscheidung des Inhabers vom 02.10.2026: Die Ausnahme gilt nur für das 79-€-Angebot. */
export const HOW_WE_WORK_NOTE_DE =
  "Ausnahme ist der Google-Profil Quick-Fix für 79 €: Er wird bei Beauftragung vollständig bezahlt und enthält keine Korrekturrunde.";

/** Antwortzeit des kostenlosen Checks, als Satzteil: "innerhalb von zwei Werktagen". */
export const CHECK_REPLY_TIME_DE = "innerhalb von zwei Werktagen";

export type StepDe = { name: string; question: string; parts: readonly string[]; output: string };

/** Die sieben Schritte: Name, Frage, Teilthemen und ein Ergebnis je Schritt. */
export const STEPS_DE: Record<PillarId, StepDe> = {
  diagnose: {
    name: DE_STEP_NAMES.diagnose,
    question: "Wo steht das Unternehmen wirklich?",
    parts: ["Markt", "Zielgruppe", "Wettbewerb", "Daten"],
    output: "Eine schriftliche Zusammenfassung der Befunde, geordnet nach Wirkung und Aufwand",
  },
  position: {
    name: DE_STEP_NAMES.position,
    question: "Warum sollte man sich für dieses Unternehmen entscheiden?",
    parts: ["Marke", "Angebot", "Differenzierung"],
    output: "Eine Positionierung auf einer Seite: Zielgruppe, Versprechen, Beleg und Ton",
  },
  create: {
    name: DE_STEP_NAMES.create,
    question: "Wie sieht das Unternehmen aus und wie klingt es?",
    parts: ["Design", "Inhalte", "Erlebnis"],
    output: "Entwürfe für Seiten und Abläufe, bereit zur Umsetzung",
  },
  build: {
    name: DE_STEP_NAMES.build,
    question: "Was nutzen Ihre Kunden tatsächlich?",
    parts: ["Website", "Tools", "Automatisierung"],
    output: "Eine funktionierende Website oder ein Shop auf Ihrer Domain und in Ihren Konten",
  },
  launch: {
    name: DE_STEP_NAMES.launch,
    question: "Wie finden die richtigen Menschen dorthin?",
    parts: ["Kampagnen", "SEO", "Social Media", "PR"],
    output: "Ein Launch-Plan mit Kanälen, Budget und Terminen",
  },
  grow: {
    name: DE_STEP_NAMES.grow,
    question: "Was macht aus Besuchen Kunden und aus Kunden Stammkunden?",
    parts: ["CRO", "Kundenbindung", "Daten", "KI"],
    output: "Eine priorisierte Liste von Änderungen, live und dokumentiert",
  },
  scale: {
    name: DE_STEP_NAMES.scale,
    question: "Was lässt sich in einem neuen Markt oder mit einer neuen Erlösquelle wiederholen?",
    parts: ["Neue Märkte", "Neue Erlöse"],
    output: "Ein Pilotplan für den nächsten Markt, mit klarer Abbruchregel",
  },
};
