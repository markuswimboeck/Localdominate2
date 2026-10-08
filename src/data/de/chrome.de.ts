/**
 * Deutsche Texte des gemeinsamen V4-Rahmens (Navigation, Fußzeile, Knöpfe). Eine Stelle, damit
 * Seiten und Rahmen dieselben Begriffe verwenden. Sie-Form, Marke spricht als "wir".
 */
import type { PillarId } from "@/data/v4PillarIndex";

export const DE_CHROME = {
  skipLink: "Zum Inhalt springen",
  navLabel: "Hauptnavigation",
  menuOpen: "Menü",
  menuClose: "Schließen",
  languages: "Sprache",
} as const;

export const DE_CHECK = {
  label: "Kostenlosen Check anfordern",
  short: "Check",
  creatorsLabel: "Meine Seite anfragen",
  creatorsShort: "Meine Seite",
} as const;

export const DE_BOOKING_LABEL = "15-Minuten-Gespräch buchen";
export const DE_OPENS_NEW_TAB = " (öffnet in neuem Tab)";

/** Zusage des Inhabers vom 02.10.2026, sinngleich zu CHECK_REPLY_TIME in src/lib/check.ts. */
export const DE_REPLY_TIME = "zwei Werktagen";

/** Die frühere Seite /de (Hotel, Ferienvermieter, Handwerk) mit eigenem Formular. */
export const DE_LANDING = { path: "/de/direktbuchung", anchor: "check" } as const;

export const DE_NAV: readonly { to: string; label: string }[] = [
  { to: "/de/approach", label: "Ansatz" },
  { to: "/de/services", label: "Leistungen" },
  { to: "/de/work", label: "Projekte" },
  { to: "/de/industries", label: "Branchen" },
  { to: "/de/creators", label: "Creator" },
];

/** Die sieben Schritte. Überall dieselben Namen. */
export const DE_STEP_NAMES: Record<PillarId, string> = {
  diagnose: "Diagnose",
  position: "Positionierung",
  create: "Gestaltung",
  build: "Umsetzung",
  launch: "Launch",
  grow: "Wachstum",
  scale: "Skalierung",
};

/** Die vier Angebote. Überall dieselben Namen, Preise wie in src/data/v4Offers.ts. */
export const DE_OFFER_NAMES: Record<string, string> = {
  "conversion-sprint": "72-Stunden-Sprint für Buchungen und Conversion",
  "ai-automation-starter": "KI-Automatisierung Starter",
  "google-profile": "Google-Profil Quick-Fix",
  "website-5-days": "Website in 5 Tagen",
};

export const DE_FOOTER = {
  tagline: "Strategie, Marke, Website und Wachstum, verbunden zu einem System.",
  address:
    "LocalDominate wird betrieben von der Explore Saudi Arabia Ltd, 128 City Road, London EC1V 2NX, Vereinigtes Königreich (Companies House Nr. 16902019).",
  exploreSaudiAfter: "ist die eigene Reiseplattform des Gründers für Saudi-Arabien, aufgeführt unter",
  exploreSaudiLink: "Projekte",
  groups: {
    explore: "Entdecken",
    steps: "Die sieben Schritte",
    industries: "Branchen",
    legal: "Rechtliches",
  },
  /** Seiten, die es nur auf Englisch gibt, sind markiert, damit die Sprache niemanden überrascht. */
  englishMarker: " (EN)",
  explore: [
    { to: "/de", label: "Startseite" },
    { to: "/de/approach", label: "Ansatz" },
    { to: "/de/services", label: "Leistungen" },
    { to: "/de/work", label: "Projekte" },
    { to: "/de/industries", label: "Branchen" },
    { to: "/de/creators", label: "Creator" },
    { to: "/de/direktbuchung", label: "Direktbuchung und Google-Profil" },
    { to: "/blog", label: "Blog" },
    { to: "/seo-lexikon", label: "SEO-Lexikon A–Z" },
    { to: "/ai-visibility-audit", label: "AI Visibility Audit" },
  ] as readonly { to: string; label: string }[],
  exploreEnglish: [
    { to: "/insights", label: "Insights" },
    { to: "/about", label: "Über uns" },
  ] as readonly { to: string; label: string }[],
  industries: [
    { to: "/restaurant-marketing", label: "Restaurant-Marketing" },
    { to: "/handwerker-marketing", label: "Handwerker-Marketing" },
    { to: "/arztpraxis-marketing", label: "Arztpraxis-Marketing" },
    { to: "/anwalt-marketing", label: "Anwalt-Marketing" },
  ] as readonly { to: string; label: string }[],
  legal: [
    { to: "/impressum", label: "Impressum" },
    { to: "/datenschutz", label: "Datenschutz" },
    { to: "/agb", label: "AGB" },
  ] as readonly { to: string; label: string }[],
  cookieSettings: "Cookie-Einstellungen",
} as const;
