import type { Faq } from "@/data/v4Faq";
import { CHECK_REPLY_TIME_DE } from "@/data/de/shared.de";

/**
 * Deutsche Texte der Seite "Kostenloser Check" (/de/start-a-project) und ihres Formulars.
 * Spiegelt src/data/v4Check.ts, src/pages/v4/StartProjectV4.tsx und START_FAQ. Antwortzeit und
 * Bedingungen sind identisch zur englischen Quelle.
 */

export type CheckFormTextsDe = {
  formLabel: string;
  name: string;
  email: string;
  link: string;
  linkHint: string;
  businessType: string;
  businessTypePlaceholder: string;
  /** `value` ist die englische Bezeichnung, die in der Anfrage landet (Backend unverändert); `label` wird angezeigt. */
  businessTypes: readonly { value: string; label: string }[];
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

export const CHECK_FORM_DE: CheckFormTextsDe = {
  formLabel: "Kostenlosen Check anfordern",
  name: "Ihr Name",
  email: "E-Mail",
  link: "Link zu Ihrem Google-Profil oder Ihrer Website",
  linkHint: "Zum Beispiel die Adresse Ihrer Website oder Ihres Eintrags auf Google Maps.",
  businessType: "Art des Unternehmens",
  businessTypePlaceholder: "Bitte wählen",
  businessTypes: [
    { value: "Hotel or guesthouse", label: "Hotel oder Pension" },
    { value: "Holiday rentals", label: "Ferienwohnungen" },
    { value: "Trade or craft business", label: "Handwerksbetrieb" },
    { value: "Practice, law firm or tax adviser", label: "Praxis, Kanzlei oder Steuerberatung" },
    { value: "Other business", label: "Anderes Unternehmen" },
  ],
  goal: "Was soll besser werden?",
  goalHint: "Optional. Ein oder zwei Sätze genügen. Zum Beispiel: mehr Direktbuchungen, ein vollständiges Google-Profil, eine schnellere Website.",
  consentBefore: "Ich bin einverstanden, dass meine Angaben zur Beantwortung dieser Anfrage verwendet werden. Siehe ",
  consentBeforeWithService:
    "Ich bin einverstanden, dass meine Angaben zur Beantwortung dieser Anfrage verwendet und über den Formulardienst Web3Forms an LocalDominate übermittelt werden. Ich kann meine Einwilligung jederzeit widerrufen. Siehe ",
  consentLink: "Datenschutzerklärung",
  consentAfter: ".",
  submit: "Anfrage senden",
  sending: "Wird gesendet…",
  mailNote: "Dabei öffnet sich Ihr E-Mail-Programm mit ausgefüllter Anfrage. Sie müssen nur noch auf Senden klicken.",
  errors: {
    summary: "Bitte prüfen Sie die markierten Felder.",
    name: "Bitte geben Sie Ihren Namen ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    link: "Bitte geben Sie den Link zu Ihrem Profil oder Ihrer Website ein.",
    businessType: "Bitte wählen Sie die Art des Unternehmens.",
    consent: "Bitte bestätigen Sie den Datenschutzhinweis.",
    failed: "Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns an info@localdominate.org.",
  },
  success: {
    title: "Vielen Dank. Ihre Anfrage ist angekommen.",
    body: `Wir sehen uns Ihr Profil oder Ihre Website an und antworten ${CHECK_REPLY_TIME_DE} per E-Mail mit bis zu drei konkreten Punkten.`,
  },
  mailOpened: {
    title: "Ihr E-Mail-Programm sollte sich geöffnet haben.",
    body: "Senden Sie die vorbereitete E-Mail, dann ist Ihre Anfrage unterwegs. Falls sich nichts geöffnet hat, schreiben Sie an info@localdominate.org.",
  },
};

export const START_DE = {
  title: "Kostenloser Check: Google-Profil und Website | LocalDominate",
  description:
    "Senden Sie uns den Link zu Ihrem Google-Profil oder Ihrer Website. Wir prüfen von Hand und nennen per E-Mail bis zu drei Punkte mit Begründung. Unverbindlich.",
  breadcrumbHome: "Startseite",
  breadcrumbCheck: "Kostenloser Check",
  label: "Kostenloser Check · Unverbindlich",
  h1: "Kostenloser Check für Ihr Google-Profil oder Ihre Website.",
  lead: `Senden Sie uns den Link. Wir sagen Ihnen ${CHECK_REPLY_TIME_DE} per E-Mail, was wir zuerst beheben würden und warum. Es entstehen Ihnen keine Kosten.`,
  whatYouGet: [
    "Wir sehen uns Ihr Google-Unternehmensprofil oder Ihre Website an, wie es ein neuer Kunde tut.",
    "Sie erhalten bis zu drei konkrete Punkte, die Sie zuerst beheben sollten, jeweils mit kurzer Erklärung.",
    "Wenn eines unserer Festpreis-Angebote passt, sagen wir Ihnen welches und warum. Wenn keines passt, sagen wir auch das.",
  ],
  nextLabel: "Wie es weitergeht",
  nextTitle: "Drei Schritte. Zwei davon machen wir.",
  nextSteps: [
    { title: "Sie senden den Link", body: "Name, E-Mail, der Link und die Art des Unternehmens. Mehr brauchen wir nicht." },
    { title: "Wir prüfen von Hand", body: "Ein Mensch sieht sich das Profil oder die Seite an. Kein automatischer Score, kein Standardbericht." },
    {
      title: "Sie erhalten die Punkte per E-Mail",
      body: "Innerhalb von zwei Werktagen. Sie entscheiden, ob Sie die Punkte selbst beheben oder uns zum Festpreis beauftragen.",
    },
  ],
  howLabel: "Wenn wir zusammenarbeiten",
  howTitle: "Vier Zusagen, schriftlich.",
  faqLabel: "Fragen",
  faqTitle: "Kurze Antworten, bevor Sie den Link senden.",
  callTitle: "Lieber erst sprechen?",
  callBody: "Fünfzehn Minuten per Video. Sie schildern, wo Ihr Unternehmen nicht weiterkommt, wir sagen, ob wir helfen können.",
} as const;

export const START_FAQ_DE: readonly Faq[] = [
  {
    q: "Was bekomme ich beim kostenlosen Check?",
    a: "Wir sehen uns Ihr Google-Unternehmensprofil oder Ihre Website an, wie es ein neuer Kunde tut. Sie erhalten bis zu drei konkrete Punkte, die Sie zuerst beheben sollten, jeweils mit kurzer Erklärung.",
  },
  {
    q: "Was muss ich senden?",
    a: "Name, E-Mail, den Link und die Art des Unternehmens. Mehr brauchen wir nicht.",
  },
  {
    q: "Wer sieht es sich an, und wie schnell bekomme ich Antwort?",
    a: `Ein Mensch sieht sich das Profil oder die Seite an. Kein automatischer Score, kein Standardbericht. Sie erhalten die Punkte per E-Mail ${CHECK_REPLY_TIME_DE}.`,
  },
  {
    q: "Kostet der kostenlose Check etwas?",
    a: "Es entstehen Ihnen keine Kosten. Keine Verpflichtung. Wenn eines unserer Festpreis-Angebote passt, sagen wir Ihnen welches und warum. Wenn keines passt, sagen wir auch das.",
  },
];
