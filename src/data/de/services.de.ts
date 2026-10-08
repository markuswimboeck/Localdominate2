import type { Faq } from "@/data/v4Faq";
import { CHECK_REPLY_TIME_DE } from "@/data/de/shared.de";
import { dePath } from "@/lib/v4Locale";

/**
 * Deutsche Texte der Seite /de/services. Übersetzt aus der englischen Seite (ServicesV4.tsx,
 * components/v4/services/*, v4Faq.ts SERVICES_FAQ). Die vier Angebote, die vier Zusagen, die
 * Bedingungen unter den Knöpfen, die Ausnahme für 79 € und die Antwortzeit stehen in
 * shared.de.ts und werden hier nicht wiederholt. Zahlen, Preise und Bedingungen sind identisch
 * mit der englischen Quelle. Nichts ist hinzugefügt.
 */

/**
 * Sinngleich zu SERVICES_FAQ in v4Faq.ts. Jede Antwort wiederholt eine bestätigte Bedingung.
 * Dieselbe Liste füllt die sichtbaren Fragen und das FAQPage-JSON-LD.
 */
export const SERVICES_FAQ_DE: readonly Faq[] = [
  {
    q: "Was passiert nach dem kostenlosen Check?",
    a: `Sie erhalten per E-Mail ${CHECK_REPLY_TIME_DE} bis zu drei konkrete Punkte, die Sie zuerst beheben sollten. Passt eines der vier Angebote, sagen wir Ihnen, welches und warum. Danach entscheiden Sie, ob Sie die Punkte selbst beheben oder uns zum Festpreis damit beauftragen.`,
  },
  {
    q: "Sind die Preise endgültig?",
    a: "Preise mit „ab“ sind Einstiegspreise. In jedem Fall erhalten Sie den genauen Umfang und einen festen Preis schriftlich, bevor die Arbeit beginnt. Berechnet wird nur, was vereinbart wurde.",
  },
  {
    q: "Wem gehören die Website und das Google-Profil?",
    a: "Ihnen. Website und Google-Profil gehören Ihnen.",
  },
  {
    q: "Kann ich kündigen?",
    a: "Laufende Betreuung ist monatlich kündbar. Die vier Angebote auf dieser Seite sind einzelne Aufträge mit festem Umfang und Festpreis, keine Abonnements.",
  },
  {
    q: "Versprechen Sie Rankings oder Buchungen?",
    a: "Nein. Wir versprechen weder Positionen noch Umsatz. Sie erhalten eine schriftliche Liste dessen, was wir geändert haben und warum.",
  },
  {
    q: "Was ist, wenn ich mehr als ein Angebot brauche?",
    a: "Dann wird daraus ein vollständiges Wachstumsprojekt: Strategie, Marke, Website und Marketing aus einem Team, in den Schritten, die Ihr Unternehmen braucht. Umfang und Preis legen wir schriftlich fest, bevor die Arbeit beginnt.",
    link: { to: dePath("/approach"), text: "Die sieben Schritte ansehen" },
  },
];

export const SERVICES_DE = {
  seo: {
    title: "Leistungen und Festpreis-Angebote – LocalDominate",
    description:
      "Vier Angebote mit festem Umfang und klaren Einstiegspreisen: 72-Stunden-Sprint, KI-Automatisierung Starter, Google-Profil Quick-Fix und Website in 5 Tagen.",
    pageName: "Leistungen und Festpreis-Angebote – LocalDominate",
    catalogName: "Angebote von LocalDominate",
    breadcrumbHome: "Startseite",
    breadcrumbPage: "Leistungen",
  },
  hero: {
    label: "Leistungen",
    h1: ["Fester Umfang.", "Fester Preis.", "Vier Wege zum Start."],
    /** Dazwischen steht CHECK_REPLY_TIME_DE ("innerhalb von zwei Werktagen"). */
    pBefore:
      "Jedes Angebot hat einen festgelegten Umfang und einen Einstiegspreis. Beginnen Sie mit dem kostenlosen Check: Senden Sie uns den Link zu Ihrem Google-Profil oder Ihrer Website. Wir antworten per E-Mail ",
    pAfter:
      " und schreiben Ihnen, was wir zuerst beheben würden und ob eines der Angebote passt. Den genauen Umfang und den Preis erhalten Sie schriftlich, bevor die Arbeit beginnt.",
    indexLabel: "Preise auf einen Blick",
    /** Vor der Lieferzeit in der Preisliste des Heros: "Lieferzeit: 72 Stunden". */
    delivery: "Lieferzeit: ",
  },
  offers: {
    label: "Die vier Angebote",
    h2: "Was jedes Angebot enthält, was es kostet und für wen es gedacht ist.",
    p: "Einstiegspreise. Den endgültigen Umfang und den Preis bestätigen wir schriftlich, bevor wir beginnen. Sie sind nicht sicher, welches Angebot passt? Das klärt der kostenlose Check: Passt eines der vier, sagen wir Ihnen, welches und warum. Passt keines, sagen wir Ihnen auch das.",
    bestFor: "Geeignet für: ",
    included: "Enthalten",
    delivery: "Lieferzeit",
  },
  full: {
    label: "Wenn Sie mehr als ein Angebot brauchen",
    h2: "Das vollständige Wachstumsprojekt",
    p: "Strategie, Marke, Website und Marketing aus einem Team, in den Schritten, die Ihr Unternehmen braucht. Umfang und Preis schriftlich, bevor die Arbeit beginnt.",
    link: "So greifen die sieben Schritte ineinander",
    /** Die sieben Schrittseiten gibt es nur auf Englisch. Die Marke steht sichtbar hinter dem Namen. */
    englishMarker: "(EN)",
  },
  how: {
    label: "So arbeiten wir",
    h2: "Vier Zusagen, schriftlich.",
    p: "Sie gelten für jedes Angebot auf dieser Seite und für das vollständige Wachstumsprojekt. Die einzige Ausnahme steht unter der Liste.",
    link: "Ausgewählte Projekte ansehen",
  },
  faq: {
    label: "Fragen",
    h2: "Kurze Antworten, bevor Sie starten.",
  },
  start: {
    h2: "Nicht sicher, welches Angebot passt? Beginnen Sie mit dem kostenlosen Check.",
    /** Dazwischen steht CHECK_REPLY_TIME_DE. */
    pBefore: "Senden Sie uns den Link zu Ihrem Google-Profil oder Ihrer Website. Sie erhalten per E-Mail ",
    pAfter:
      " bis zu drei konkrete Punkte, die Sie zuerst beheben sollten, und wir sagen Ihnen, ob eines der vier Angebote passt. Unverbindlich.",
  },
} as const;
