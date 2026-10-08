/**
 * Deutsche Texte der Seite /de/approach. Übersetzt aus ApproachV4.tsx und den Daten, die sie liest
 * (v4PillarIndex, v4Pillars, v4Cases). Fakten, Namen und Grenzen sind identisch zur englischen Quelle,
 * nur die Sprache ändert sich. Schrittnamen, Fragen und Teilthemen kommen aus chrome.de.ts und shared.de.ts.
 * Die sieben Schrittseiten gibt es nur auf Englisch, deshalb steht hinter jedem Link ein "(EN)".
 */
import type { PillarId } from "@/data/v4PillarIndex";

export const DE_APPROACH = {
  seoTitle: "Ansatz: Wachstumssystem in sieben Schritten | LocalDominate",
  seoDescription:
    "Sieben Schritte von der Diagnose bis zur Skalierung. Jeder Schritt mit seinen Ergebnissen, passenden Angeboten und den Projekten, die ihn zeigen.",
  breadcrumbHome: "Startseite",
  breadcrumbHere: "Ansatz",
  stepsListName: "Die sieben Schritte",
  eyebrow: "Ansatz",
  h1a: "Sieben Schritte.",
  h1b: "Von der Diagnose zur Skalierung.",
  intro:
    "Strategie, Marke, Website und Marketing laufen hier als eine Abfolge, nicht als vier getrennte Aufträge. Jeder Schritt hat eine eigene Seite, eigene Ergebnisse und die Projekte, an denen er sichtbar wird.",
  railLabel: "Die sieben Schritte",
  railStep: "Schritt",
  railHint: "Tippen Sie auf eine Zahl, um einen Schritt zu öffnen.",
  showreelLabel: "Showreel",
  showreelCaption: "Die sieben Schritte in 20 Sekunden. Ohne Ton, zum Abspielen klicken.",
  showreelTitle: "LocalDominate Showreel: die sieben Schritte von der Diagnose bis zur Skalierung",
  playVideo: "Video abspielen",
  stepsHeading: "Die sieben Schritte",
  youGet: "Sie erhalten: ",
  enMarker: " (EN)",
  enMarkerLabel: "Seite auf Englisch",
  casesHeading: "Welches Projekt welchen Schritt abgedeckt hat",
  casesIntroBefore:
    "Ein markierter Schritt bedeutet, dass das Projekt ihn enthielt. Öffnen Sie einen Schritt, um zu lesen, was genau gemacht wurde. Aufgeführt sind nur veröffentlichte Projekte, und ",
  casesIntroAfter: "ist unser eigenes Konzept, kein Kunde.",
  casesCaption: "Veröffentlichte Projekte und die Schritte, die sie abgedeckt haben",
  casesProject: "Projekt",
  casesNotPart: "nicht Teil dieses Projekts",
  casesAll: "Alle Projekte ansehen",
  startLead: "Sie brauchen nicht alle sieben.",
  startBody:
    "Ein Hotel mit schwacher Buchungsseite beginnt vielleicht bei Wachstum, eine neue Marke bei der Diagnose. Eine kurze Diagnose zeigt uns, welcher Schritt sich zuerst lohnt. Umfang und Preis bestätigen wir schriftlich, bevor jede Arbeit beginnt.",
  startServices: "Leistungen und Preise ansehen",
} as const;

export const DE_PILLAR: Record<PillarId, { lead: string; deliverables: readonly string[] }> = {
  diagnose: {
    lead: "Dieser Schritt beginnt mit den Fakten: Wer kauft, wer konkurriert um dieselben Kunden und was zeigen Ihre eigenen Zahlen schon heute. Keine Lösung wird gewählt, bevor sie auf dem Tisch liegen.",
    deliverables: ["Zusammenfassung der Befunde", "Messliste", "Empfehlung für den nächsten Schritt"],
  },
  position: {
    lead: "Positionierung entscheidet, wozu Sie Nein sagen. Sie legt fest, für wen das Angebot ist, was es verspricht und warum ein Kunde es der nächsten Option vorzieht.",
    deliverables: ["Positionierung", "Angebotsstruktur", "Aussagenliste"],
  },
  create: {
    lead: "Ist die Position klar, muss sie sichtbar und lesbar werden. Dieser Schritt liefert das Aussehen, die Worte und den Weg, den ein Kunde vom ersten Kontakt bis zur Entscheidung geht.",
    deliverables: ["Gestaltungsgrundlagen", "Seiteninhalte", "Seiten- und Ablaufentwürfe"],
  },
  build: {
    lead: "Hier werden Gestaltung und Text zu etwas, das funktioniert: eine Website oder ein Shop in Ihren eigenen Konten, verbunden mit den Tools dahinter und mit Tracking, das aufzeichnet, was zählt.",
    deliverables: ["Funktionierende Website oder Shop", "Tracking", "Übergabenotiz"],
  },
  launch: {
    lead: "Eine fertige Website bringt nicht von selbst Besucher. Dieser Schritt bringt das Unternehmen vor die Menschen, die danach suchen, über wenige Kanäle, die sich messen lassen.",
    deliverables: ["Launch-Plan", "SEO- und Profil-Korrekturen", "Launch-Tracking"],
  },
  grow: {
    lead: "Besucher helfen nur, wenn sie buchen, kaufen oder sich melden. Dieser Schritt arbeitet an den Stellen, an denen Besucher entscheiden, und an dem, was danach passiert.",
    deliverables: ["Priorisierte Änderungsliste", "Umgesetzte Änderungen", "Zahlenübersicht"],
  },
  scale: {
    lead: "Wenn ein Markt funktioniert, sollte der nächste von dem ausgehen, was Sie schon haben. Dieser Schritt entscheidet, wohin es als Nächstes geht und was sich wiederverwenden lässt.",
    deliverables: ["Marktauswahl", "Marktvorlage", "Pilotplan"],
  },
};

export const DE_CASE_KIND: Record<string, string> = {
  Client: "Kundenprojekt",
  Consulting: "Beratung",
  "Platform build": "Plattform-Aufbau",
  Role: "Rolle",
  Concept: "Konzept",
};

export const DE_CASE_STATUS: Record<string, string> = {
  "Pre-launch": "Vor dem Launch",
  Live: "Live",
  Completed: "Abgeschlossen",
  Concept: "Konzept",
};

/** Notizen dazu, was ein Projekt in einem Schritt gemacht hat (Matrix, wird von Screenreadern gelesen). */
export const DE_CASE_NOTES: Record<PillarId, Record<string, string>> = {
  diagnose: {},
  position: {
    dadication: "Markenstrategie und Produktpositionierung für eine neue US-E-Commerce-Marke.",
    "do-good": "Storytelling-Struktur für eine internationale gemeinnützige Initiative.",
    "aurelian-grand": "Markenkonzept und Positionierung für ein fiktives Luxushotel.",
  },
  create: {
    dadication: "Markenrichtung, Botschaften, Texte und Inhaltsstruktur für den Shop.",
    "do-good": "Storytelling und UX für Spender, Freiwillige und Partner.",
    "aurelian-grand": "Hochwertige Hospitality-UX für eine fiktive Hotelmarke.",
  },
  build: {
    dadication: "Shopify-Shop und UX / UI für eine neue US-E-Commerce-Marke.",
    "explore-saudi":
      "Eigene Publishing-Architektur mit Modell-Routing, automatisierten Qualitätsschranken und deterministischen Release-Prozessen.",
    "do-good": "Website und digitale Infrastruktur für eine internationale gemeinnützige Initiative.",
    "aurelian-grand": "Direktbuchungslogik und SEO-Architektur für ein fiktives Hotel.",
  },
  launch: {
    dadication: "Launch-System für eine neue E-Commerce-Marke, vom Briefing bis zum marktreifen Shop.",
    "explore-saudi": "SEO-Intent-Prüfungen im Publishing-Ablauf einer Reiseplattform.",
  },
  grow: {
    "aurelian-grand": "Umsatzpfad und CRO-Überlegungen für ein fiktives Hotelkonzept.",
    "do-good": "Interaktionspfade für Spender, Freiwillige und Partner.",
    "explore-saudi": "KI-gestützte Inhaltsproduktion mit automatisierten Qualitätsschranken.",
  },
  scale: {
    "explore-saudi": "Mehrsprachiges Publishing mit i18n- und RTL-Kontrollen.",
    "do-good": "Digitale Grundlage für neue Partnerschafts-, Event- und Spendenformate.",
  },
};
