/**
 * Deutsche Texte der Seite /de/work. Übersetzt aus der englischen Seite (WorkV4.tsx,
 * components/v4/work/*, v4Cases.ts, v4Faq.ts WORK_FAQ). Fakten (IDs, URLs, welches Projekt den
 * Film hat, welche Projekte veröffentlicht sind) kommen aus src/data/v4Cases.ts; hier steht nur
 * der Wortlaut. Nichts ist hinzugefügt. Es werden keine Zahlen gezeigt, weil keine belegt ist.
 */
import { CHECK_REPLY_TIME_DE } from "@/data/de/shared.de";
import { publishedCases } from "@/data/v4Cases";
import type { Faq } from "@/data/v4Faq";

export type DeCase = {
  id: string;
  name: string;
  title: string;
  kind: string;
  status: string;
  period: string;
  summary: string;
  scope: readonly string[];
  url?: string;
  hasVideo?: boolean;
};

type DeCaseText = Omit<DeCase, "id" | "url" | "hasVideo">;

const CASE_TEXT: Record<string, DeCaseText> = {
  dadication: {
    name: "Dadication",
    title: "Launch einer US-E-Commerce-Marke",
    kind: "Kundenprojekt",
    status: "Vor dem Launch",
    period: "2026",
    summary:
      "Umsetzung einer neuen US-E-Commerce-Marke von Anfang bis Ende: Positionierung, Markenrichtung, Botschaften, Shopify-Shop, UX, Inhaltsstruktur und Launch-System, vom ersten Briefing bis zum marktreifen Shop.",
    scope: ["Markenstrategie", "Shopify", "UX / UI", "Texte", "Produktpositionierung", "Inhalte", "Launch"],
  },
  "explore-saudi": {
    name: "Explore Saudi",
    title: "KI-native Reiseplattform",
    kind: "Plattform-Aufbau",
    status: "Live",
    period: "Seit 2025",
    summary:
      "Eine skalierbare Reiseplattform mit KI-gestützter Inhaltsproduktion und eigener Publishing-Architektur: Modell-Routing, automatisierte Qualitätsschranken, SEO-Intent-Prüfungen, i18n- und RTL-Kontrollen sowie deterministische Release-Prozesse.",
    scope: ["KI-Architektur", "Content-Engine", "SEO", "QA-Automatisierung", "RTL / i18n", "Publishing-System"],
  },
  "do-good": {
    name: "DO GOOD International",
    title: "Digitale Plattform und Wachstumsinfrastruktur",
    kind: "Rolle",
    status: "Live",
    period: "Seit 12/2025",
    summary:
      "Website und digitale Infrastruktur für eine internationale gemeinnützige Initiative: Storytelling-Struktur, Engagement-Wege für Spender, Freiwillige und Partner sowie die Grundlage für neue Formate bei Partnerschaften, Veranstaltungen und Spendenaktionen. Rolle: Director Web & IT.",
    scope: [
      "Web-Strategie",
      "UX",
      "Storytelling",
      "Digitale Infrastruktur",
      "Partnerschaften",
      "Conversion-Wege",
    ],
  },
  "aurelian-grand": {
    name: "Aurelian Grand",
    title: "Digitales Schaufenster für Luxushotellerie",
    kind: "Konzept",
    status: "Konzept",
    period: "2025",
    summary:
      "Eine fiktive Luxushotelmarke, gebaut als digitaler Machbarkeitsnachweis: Positionierung, Informationsarchitektur, hochwertige UX, Direktbuchungslogik und Umsatzpfad. Sie zeigt, wie eine Hotelwebsite aussieht, die auf Direktbuchung ausgelegt ist. Kein Kunde.",
    scope: ["Markenkonzept", "Hotellerie-UX", "Buchungsweg", "CRO", "SEO-Architektur"],
  },
};

/** Die veröffentlichten Projekte in der Reihenfolge von v4Cases.ts, mit deutschem Wortlaut. */
export const deCases = (): readonly DeCase[] =>
  publishedCases().flatMap((c) => {
    const t = CASE_TEXT[c.id];
    return t ? [{ id: c.id, url: c.url, hasVideo: c.hasVideo, ...t }] : [];
  });

export const DE_WORK = {
  hero: {
    label: "Projekte",
    h1a: "Projekte, die wir zeigen können.",
    h1b: "Aussagen, die wir belegen können.",
    body: "Jedes Projekt ist so gekennzeichnet, wie es ist: Kundenprojekt, Plattform-Aufbau, Rolle oder Konzept. Sie sehen die Aufgabe, den Umfang und den Stand. Zahlen erscheinen erst, wenn wir sie belegen können.",
  },
  featuredCaption:
    "Hero-Film des Shops, gezeigt mit Zustimmung des Kunden. Der Shop ist noch nicht öffentlich. Ohne Ton, zum Abspielen klicken.",
  more: {
    label: "Weitere Projekte",
    h2: "Nicht jedes Projekt hier ist Kundenarbeit. Die Kennzeichnung zeigt, was was ist.",
    body: "Ergebnisse veröffentlichen wir nur, wenn wir sie belegen können. Bis dahin zeigt jedes Projekt seine Aufgabe, seinen Umfang, was gebaut wurde und wo es heute steht, dazu die Schritte unseres Systems, die es abgedeckt hat.",
  },
  facts: {
    task: "Aufgabe",
    built: "Was gebaut wurde",
    status: "Stand",
    scope: "Umfang",
    steps: "Abgedeckte Schritte",
    stepsOf: (n: number, total: number) => `${n} von ${total} Schritten`,
    step: "Schritt ",
  },
  visit: " besuchen",
  opensNewTab: " (öffnet in neuem Tab)",
  enMarker: " (EN)",
  faq: {
    label: "Fragen",
    title: "Kurze Antworten zu den Projekten.",
  },
  cta: {
    h2: "Haben Sie ein Projekt wie eines dieser?",
    body: `Senden Sie uns den Link zu Ihrer Website oder Ihrem Google-Profil. Sie erhalten per E-Mail ${CHECK_REPLY_TIME_DE} bis zu drei konkrete Punkte, die Sie zuerst beheben sollten. Unverbindlich.`,
    services: "Leistungen und Preise ansehen",
    steps: "Wie die sieben Schritte zusammenpassen",
  },
  breadcrumbHome: "Startseite",
  breadcrumbWork: "Projekte",
  film: {
    title: "Dadication-Shop, Hero-Film",
    play: "Video abspielen: ",
  },
  seo: {
    title: "Ausgewählte Projekte – LocalDominate",
    pageName: "Ausgewählte Projekte und Fallstudien – LocalDominate",
    description:
      "Ausgewählte Projekte von LocalDominate: US-E-Commerce-Marke, KI-native Reiseplattform, gemeinnützige Webplattform und ein Hotelkonzept für Direktbuchung.",
  },
} as const;

/** Sinngleich zu WORK_FAQ in v4Faq.ts. Dieselbe Liste füllt die sichtbaren Fragen und das FAQPage-JSON-LD. */
export const WORK_FAQ_DE: readonly Faq[] = [
  {
    q: "Wie sind die Projekte gekennzeichnet?",
    a: "Jedes Projekt ist so gekennzeichnet, wie es ist: Kundenprojekt, Plattform-Aufbau, Rolle oder Konzept. Sie sehen die Aufgabe, den Umfang und den Stand.",
  },
  {
    q: "Warum zeigt die Seite keine Ergebnisse oder Zahlen?",
    a: "Ergebnisse veröffentlichen wir nur, wenn wir sie belegen können. Bis dahin zeigt jedes Projekt seine Aufgabe, seinen Umfang, was gebaut wurde und wo es heute steht, dazu die Schritte unseres Systems, die es abgedeckt hat.",
  },
  {
    q: "Ist jedes Projekt Kundenarbeit?",
    a: "Nein. Nicht jedes Projekt hier ist Kundenarbeit, die Kennzeichnung zeigt, was was ist. Aurelian Grand zum Beispiel ist eine fiktive Luxushotelmarke, gebaut als digitaler Machbarkeitsnachweis. Kein Kunde.",
  },
  {
    q: "Wie starte ich ein Projekt wie diese?",
    a: `Senden Sie uns den Link zu Ihrer Website oder Ihrem Google-Profil. Sie erhalten per E-Mail ${CHECK_REPLY_TIME_DE} bis zu drei konkrete Punkte, die Sie zuerst beheben sollten. Unverbindlich.`,
  },
];
