/**
 * Deutsche Branchenseiten /de/friseur und /de/fitnessstudio (Sie-Form, Ich-Form des Inhabers wie /de).
 * Jede Seite hat ein englisches Gegenstück unter /industries/<slug> (v4Audiences.ts); die beiden
 * verweisen per hreflang aufeinander.
 *
 * Regeln wie dort (Hard Rule 06 "Truth first"): keine Kundenergebnisse, Rankings, Bewertungen oder
 * Marktzahlen. Preise und Lieferzeiten nur, wie sie in v4Offers.ts und v4De.ts stehen.
 * Die Demos unter /demo/ sind erfundene Konzepte und so beschriftet.
 */
import { CHECK_REPLY_TIME_DE, PRICE } from "@/data/v4De";
import type { Faq } from "@/data/v4Faq";

import type { DeIndustryId } from "@/data/v4DeIndustrySlugs";

export type { DeIndustryId };
export { DE_INDUSTRY_SLUGS, DE_INDUSTRY_BASE, deIndustryPath } from "@/data/v4DeIndustrySlugs";

export type DeIndustry = {
  slug: DeIndustryId;
  name: string;
  descriptor: string;
  /** SEOHead hängt " | LocalDominate" an, wenn die Gesamtlänge höchstens 60 Zeichen bleibt. */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  /** Antwort zuerst, für Suche und KI-Assistenten. */
  inShort: string;
  signs: readonly string[];
  claim: string;
  situation: string;
  checks: readonly { where: string; text: string }[];
  builds: readonly string[];
  buildNote: string;
  offers: readonly { name: string; price: string; delivery?: string; why: string }[];
  demo: { name: string; href: string; extraHref?: string; extraLabel?: string; note: string };
  /** Englisches Gegenstück (Pfad) für hreflang und den Sprachlink. */
  enPath: string;
  articles: readonly { slug: string; title: string }[];
  faq: readonly Faq[];
};

const NO_PROMISE: Faq = {
  q: "Versprechen Sie Rankings oder Buchungen?",
  a: "Nein. Ich verspreche weder Positionen noch Umsatz. Sie bekommen schriftlich, was ich ändere und warum.",
};
const OWNERSHIP: Faq = {
  q: "Wem gehören Website und Google-Profil?",
  a: "Ihnen. Website und Google-Profil gehören Ihnen. Laufende Betreuung ist monatlich kündbar.",
};
const FREE_CHECK: Faq = {
  q: "Was enthält der kostenlose Check?",
  a: `Ich sehe mir Ihr Google-Profil oder Ihre Website an, wie es ein neuer Kunde tut. Sie bekommen ${CHECK_REPLY_TIME_DE} per E-Mail bis zu drei konkrete Punkte, die Sie zuerst ändern sollten. Ohne Verpflichtung.`,
};

const PROFILE = {
  name: "Google-Profil Quick-Fix / Optimierung",
  price: `${PRICE.quickFix} / ${PRICE.profil}`,
};

export const DE_INDUSTRIES: readonly DeIndustry[] = [
  {
    slug: "friseur",
    name: "Friseure und Beautystudios",
    descriptor: "Friseursalons · Barbershops · Kosmetik- und Nagelstudios",
    seoTitle: "Website & Google-Profil für Friseure",
    seoDescription:
      "Für Friseursalons, Barbershops und Beautystudios: Google-Profil mit Leistungen und Preisen, Website mit Buchung in unter einer Minute am Handy, ohne erfundene Bewertungen.",
    h1: "Website und Google-Profil für Friseure und Beautystudios.",
    lead: "Für Friseursalons, Barbershops und Beautystudios. Kunden suchen am Handy, vergleichen Fotos, Preise und freie Termine und buchen dort, wo es am einfachsten geht. Ich sorge dafür, dass Ihr Profil und Ihre Website diese Fragen zuerst beantworten.",
    inShort:
      "Ich baue Websites und Google-Unternehmensprofile für Friseure, Barbershops und Beautystudios in Deutschland, Österreich und der Schweiz: Leistungen mit Dauer und Preis, ein Buchungsweg, der am Handy funktioniert, ein Profil mit richtigen Kategorien, Öffnungszeiten und Fotos, und eine ruhige Art, um Bewertungen zu bitten. Ich verspreche keine Platzierungen und erfinde keine Bewertungen.",
    signs: [
      "Ihre Preise stehen nur auf Instagram, bei Google fehlen sie.",
      "Während der Termine klingelt das Telefon, und niemand nimmt ab.",
      "Ihr Google-Profil nennt eine falsche Kategorie, alte Zeiten oder keine Leistungen.",
      "Die Buchung läuft über ein Tool, das auf Ihrer Website schwer zu finden ist.",
    ],
    claim: "Ob gebucht wird, entscheidet sich in unter einer Minute, am Handy.",
    situation:
      "Wer in der Nähe einen Friseur oder ein Kosmetikstudio sucht, öffnet zwei oder drei Profile und vergleicht Fotos, Preise und den nächsten freien Termin. Ein Salon ohne Preise, mit alten Öffnungszeiten oder einem versteckten Buchungslink verliert diesen Vergleich, egal wie gut die Arbeit ist. Ihre eigene Website kann das alles an einem Ort beantworten.",
    checks: [
      { where: "In Ihrem Google-Profil", text: "Ob Hauptkategorie, Leistungen, Preise, Zeiten und Fotos vollständig sind und zu Ihrer Website passen." },
      { where: "Auf Ihrer Website", text: "Ob Leistungen Dauer und Preis zeigen und ob der Buchungsknopf am Handy ohne Scrollen sichtbar ist." },
      { where: "In Ihren Bewertungen", text: "Wie viele aktuelle Bewertungen Sie haben, ob sie beantwortet sind und wie Sie heute darum bitten." },
      { where: "In Ihren Anfragen", text: "Was mit einem Anruf oder einer Nachricht passiert, die ankommt, während Sie bei einer Kundin oder einem Kunden sind." },
    ],
    builds: [
      "Eine Salon- oder Studio-Website mit Leistungen, Dauer, Preisen und Buchungsweg",
      "Ein Google-Unternehmensprofil mit richtigen Kategorien, Leistungen, Zeiten und Fotos",
      "Eine Bewertungsbitte für nach dem Termin und Vorlagen für Antworten",
      "Eine erste Automatisierung, zum Beispiel eine Bestätigung nach einer Anfrage",
    ],
    buildNote: "Vorher-nachher-Fotos und Kundennamen erscheinen nur mit schriftlicher Einwilligung der Person.",
    offers: [
      { ...PROFILE, why: "Für ein sauberes Profil ohne langes Projekt: Kategorien, Leistungen, Zeiten und Fotos werden geprüft und korrigiert." },
      { name: "72h Conversion- / Buchungs-Sprint", price: PRICE.sprint, delivery: "72 Stunden", why: "Für eine Website oder Buchungsseite, die Besuche bekommt, aber zu wenige Buchungen. Eine Seite wird geprüft, fünf Korrekturen gehen live, sobald Sie zustimmen." },
      { name: "KI-Automatisierung Starter", price: "250 €", delivery: "3 Tage", why: "Ein Ablauf für die Anrufe, die Sie während der Termine verpassen. Vorher schriftlich beschrieben und von Ihnen freigegeben." },
    ],
    demo: {
      name: "Atelier Aurin",
      href: "/demo/salon/",
      extraHref: "/demo/beauty/",
      extraLabel: "Zweites Konzept: Beautystudio „Velin“",
      note: "Atelier Aurin ist ein erfundener Salon in Leipzig, den ich als Konzept-Website gebaut habe: Farbwahl, die zur Leistung führt, Leistungen mit Preis, Buchung in fünf Schritten. Ein Konzept, kein Kunde, ohne Bewertungen und Ergebnisse.",
    },
    enPath: "/industries/hair-salons",
    articles: [
      { slug: "local-seo-friseursalon-beauty", title: "Local SEO für Friseursalons und Beautystudios" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: so fragen Sie richtig" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
      { slug: "google-business-kategorien-guide", title: "Google-Business-Kategorien: die richtige wählen" },
    ],
    faq: [
      { q: "Bauen Sie Websites für Salons oder verbessern Sie nur Google-Profile?", a: "Beides. Bei einem Website-Projekt stehen Umfang und Preis schriftlich fest, bevor die Arbeit beginnt. Für einen schnellen Start decken der Profil-Quick-Fix oder der 72h-Sprint ein Profil oder eine Seite ab.", link: { to: "/services", text: "Umfang und Preise (englisch)" } },
      { q: "Zeigen Sie Vorher-nachher-Fotos oder Bewertungen auf der Seite?", a: "Nur echte, und nur mit Einwilligung. Ich schreibe keine Bewertungen und gebe keine Stockfotos als Ihre Arbeit aus." },
      { q: "Arbeiten Sie mit meinem Buchungstool?", a: "Meistens ja. Die meisten Buchungstools lassen sich verlinken oder einbetten. Ob es bei Ihrem geht, kläre ich vor dem Start." },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "fitnessstudio",
    name: "Fitnessstudios",
    descriptor: "Fitnessstudios · Yoga- und Pilates-Studios · Personal Training",
    seoTitle: "Website & Google-Profil für Fitnessstudios",
    seoDescription:
      "Für Fitnessstudios: Probetraining im ersten Bildschirm buchbar, Kursplan und Preise als lesbarer Text, richtiges Google-Profil und der gesetzliche Kündigungsbutton.",
    h1: "Website und Google-Profil für Fitnessstudios.",
    lead: "Für Fitnessstudios, Yoga- und Pilates-Studios. Interessenten suchen ein Probetraining, einen Kursplan und einen Preis, den sie verstehen. Ich sorge dafür, dass sie alle drei in Ihrem Profil und auf Ihrer Website finden, am Handy, ohne Anruf.",
    inShort:
      "Ich baue Websites und Google-Unternehmensprofile für Fitnessstudios in Deutschland, Österreich und der Schweiz: Probetraining im ersten Bildschirm buchbar, Kursplan und Tarife als lesbarer Text, richtige Zeiten und Servicezeiten sowie den Kündigungsbutton, den das deutsche Recht für online geschlossene Verträge verlangt. Ich verspreche keine Platzierungen und erfinde keine Bewertungen oder Mitgliederzahlen.",
    signs: [
      "Der Kursplan ist ein Bild oder PDF, das am Handy niemand lesen kann.",
      "Preise gibt es erst nach einem Anruf oder einem Formular.",
      "Ihr Google-Profil zeigt Öffnungszeiten, aber nicht, wann jemand am Empfang ist.",
      "Mitglieder können online abschließen, aber nicht online kündigen.",
    ],
    claim: "Entscheidend ist das Probetraining, nicht der Slogan.",
    situation:
      "Wer ein Studio in der Nähe sucht, will drei Dinge wissen: was es kostet, wann Kurse laufen und wie man es ausprobiert. Ein Studio, dessen Kursplan ein Bild ist, dessen Preise versteckt sind und dessen Probetraining einen Anruf braucht, verliert diesen Vergleich gegen das Studio nebenan. Seit 2022 braucht ein online geschlossener Vertrag in Deutschland außerdem einen Kündigungsbutton.",
    checks: [
      { where: "In Ihrem Google-Profil", text: "Ob Kategorie, Zeiten, Servicezeiten, Fotos und der Link zum Probetraining stimmen und zu Ihrer Website passen." },
      { where: "Auf Ihrer Website", text: "Ob Kursplan und Preise lesbarer Text sind und ob ein Probetraining am Handy im ersten Bildschirm buchbar ist." },
      { where: "In Anmeldung und Kündigung", text: "Ob Laufzeit, Kündigungsfrist und der Kündigungsbutton klar zu sehen sind, wie es für online geschlossene Verträge vorgeschrieben ist." },
      { where: "In Ihren Bewertungen", text: "Ob aktuelle Bewertungen beantwortet sind und wie neue Mitglieder darum gebeten werden." },
    ],
    builds: [
      "Eine Studio-Website mit Probetraining, Kursplan und Tarifen als Text",
      "Ein Google-Unternehmensprofil mit richtigen Zeiten, Servicezeiten und Fotos",
      "Eine Kündigungsseite nach § 312k BGB; den endgültigen Wortlaut klären Sie mit Ihrer Beratung",
      "Eine erste Automatisierung, zum Beispiel eine Erinnerung nach einer Probetraining-Buchung",
    ],
    buildNote: "Ich baue den Kündigungsbutton als Funktion. Ob Ihre Vertragsbedingungen rechtlich ausreichen, bestätigt Ihre Rechtsberatung.",
    offers: [
      { ...PROFILE, why: "Für ein sauberes Profil: Kategorie, Zeiten, Leistungen und Fotos werden geprüft und korrigiert." },
      { name: "72h Conversion- / Buchungs-Sprint", price: PRICE.sprint, delivery: "72 Stunden", why: "Für eine Website oder Anmeldeseite, die Besuche bekommt, aber zu wenige Probetrainings. Eine Seite wird geprüft, fünf Korrekturen gehen live, sobald Sie zustimmen." },
      { name: "KI-Automatisierung Starter", price: "250 €", delivery: "3 Tage", why: "Ein Ablauf, zum Beispiel Bestätigung und Erinnerung für jede Probetraining-Buchung. Vorher schriftlich beschrieben und von Ihnen freigegeben." },
    ],
    demo: {
      name: "Ostwerk Athletik",
      href: "/demo/fitness/",
      note: "Ostwerk Athletik ist ein erfundenes Studio in Dresden, das ich als Konzept-Website gebaut habe: Probetraining im ersten Bildschirm, Kursplan als Text, Tarife mit Laufzeit und Frist, Kündigungsbutton. Ein Konzept, kein Kunde; Auslastung und freie Plätze sind als Beispielwerte gekennzeichnet.",
    },
    enPath: "/industries/fitness-studios",
    articles: [
      { slug: "local-seo-fitness", title: "Local SEO für Fitnessstudios" },
      { slug: "local-seo-yoga-studios", title: "Local SEO für Yoga-Studios" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: so fragen Sie richtig" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    ],
    faq: [
      { q: "Bauen Sie den gesetzlichen Kündigungsbutton?", a: "Ich baue Button und Kündigungsseite als Teil eines Website-Projekts. Ob Ihre Vertragsbedingungen ausreichen, ist eine Rechtsfrage, die Ihre Anwältin oder Ihr Berater bestätigt." },
      { q: "Womit starte ich sinnvoll?", a: "Mit dem Google-Profil Quick-Fix für einen Standort oder dem 72h-Sprint für die Anmelde- oder Probetraining-Seite. Ein vollständiges Website-Projekt hat Umfang und Preis schriftlich, bevor die Arbeit beginnt.", link: { to: "/services", text: "Umfang und Preise (englisch)" } },
      { q: "Arbeiten Sie mit meiner Verwaltungssoftware?", a: "Oft. Viele Systeme bieten einen Link oder eine Einbettung für Probetraining und Anmeldung. Ob Ihres das tut, kläre ich vor dem Start." },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
] as const;

export const deIndustryBySlug = (slug: string): DeIndustry | undefined => DE_INDUSTRIES.find((i) => i.slug === slug);
