import { BOOKING_IS_EXTERNAL, BOOKING_LABEL, BOOKING_URL } from "@/lib/booking";
import { CHECK_DE, CHECK_LABEL, CHECK_PATH } from "@/lib/check";

export type ChatLang = "de" | "en";
export type NextStep = "free_check" | "book_call" | "ai_check" | "services" | "creators";

/** German content lives under these paths (the /de page, the German blog and the legal pages). */
const GERMAN_PATHS = /^\/(de|blog|seo-lexikon|impressum|datenschutz|agb|redaktionsrichtlinien|forschungsmethodik|citation-verzeichnisse|partner)(\/|$|#)/;
export const langForPath = (path: string): ChatLang => (GERMAN_PATHS.test(path) ? "de" : "en");

export const TEXTS = {
  de: {
    launcher: "Fragen? Jetzt chatten",
    launcherShort: "Chat",
    title: "LocalDominate Assistent",
    subtitle: "KI-Assistent · antwortet sofort",
    close: "Chat schließen",
    greeting:
      "Hallo, ich bin der digitale Assistent von LocalDominate. Erzählen Sie mir kurz, was für einen Betrieb Sie haben und was besser laufen soll. Ich sage Ihnen, welches Angebot passt und was es kostet.",
    starters: [
      "Mehr Direktbuchungen für mein Hotel",
      "Besser bei Google Maps gefunden werden",
      "Was kostet eine neue Website?",
      "Zeit sparen mit KI",
    ],
    placeholder: "Ihre Nachricht …",
    send: "Senden",
    typing: "schreibt …",
    privacy:
      "KI-Assistent (Claude von Anthropic). Ihre Nachrichten werden zur Beantwortung an Anthropic übermittelt. Bitte keine sensiblen Daten eingeben.",
    privacyLink: "Datenschutz",
    error: "Das hat gerade nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie an info@localdominate.org.",
    limit: "Sie haben gerade sehr viele Nachrichten geschickt. Bitte versuchen Sie es in ein paar Minuten noch einmal.",
    leadSent: "Ihre Angaben sind bei Markus angekommen. Er antwortet per E-Mail innerhalb von zwei Werktagen.",
    leadFailed: "Ihre Angaben konnten nicht übertragen werden. Bitte schreiben Sie kurz an",
    restart: "Neues Gespräch",
    teaser: "Fragen zu Preisen oder was zu Ihrem Betrieb passt? Ich antworte sofort.",
    teaserClose: "Hinweis schließen",
    leadSubject: "Chat-Anfrage",
  },
  en: {
    launcher: "Questions? Chat now",
    launcherShort: "Chat",
    title: "LocalDominate Assistant",
    subtitle: "AI assistant · replies instantly",
    close: "Close chat",
    greeting:
      "Hello, I am LocalDominate's digital assistant. Tell me briefly what kind of business you run and what should work better. I will tell you which offer fits and what it costs.",
    starters: [
      "More direct bookings for my hotel",
      "Get found on Google Maps",
      "What does a new website cost?",
      "Save time with AI",
    ],
    placeholder: "Your message …",
    send: "Send",
    typing: "typing …",
    privacy:
      "AI assistant (Claude by Anthropic). Your messages are sent to Anthropic to generate replies. Please do not enter sensitive data.",
    privacyLink: "Privacy",
    error: "That did not work just now. Please try again or write to info@localdominate.org.",
    limit: "You have sent a lot of messages just now. Please try again in a few minutes.",
    leadSent: "Your details have reached Markus. He replies by email within two working days.",
    leadFailed: "Your details could not be sent. Please write a short email to",
    restart: "New conversation",
    teaser: "Questions about prices or what fits your business? I reply instantly.",
    teaserClose: "Dismiss",
    leadSubject: "Chat enquiry",
  },
} as const;

export type ChatTexts = (typeof TEXTS)[ChatLang];

export function nextStepLink(step: NextStep, lang: ChatLang): { href: string; label: string; external: boolean } {
  switch (step) {
    case "free_check":
      return lang === "de"
        ? { href: CHECK_DE.path, label: CHECK_DE.label, external: false }
        : { href: CHECK_PATH, label: CHECK_LABEL, external: false };
    case "book_call":
      return { href: BOOKING_URL, label: lang === "de" ? "15-Minuten-Gespräch buchen" : BOOKING_LABEL, external: BOOKING_IS_EXTERNAL };
    case "ai_check":
      return lang === "de"
        ? { href: "/de/ki#ai-check", label: "KI-Check anfordern", external: false }
        : { href: "/ai#ai-check", label: "Free AI check", external: false };
    case "services":
      return { href: "/services", label: lang === "de" ? "Alle Angebote ansehen" : "See all offers", external: false };
    case "creators":
      return { href: "/creators#get-yours", label: lang === "de" ? "Portfolio-Seite anfragen" : "Get my page", external: false };
  }
}
