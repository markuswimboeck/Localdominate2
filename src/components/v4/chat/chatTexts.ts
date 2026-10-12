/** Interface texts of the sales assistant widget (the assistant's own replies come from the model). */
export type ChatCta = { kind: "free_check" | "call" };

export type ChatLead = {
  name: string;
  email: string;
  link: string;
  business_type: string;
  interest: string;
  summary: string;
};

type ChatTexts = {
  launcher: string;
  title: string;
  disclosure: string;
  greeting: string;
  starters: readonly string[];
  placeholder: string;
  inputLabel: string;
  send: string;
  close: string;
  reset: string;
  typing: string;
  error: string;
  ctaCheck: string;
  ctaCall: string;
  privacyBefore: string;
  privacyLink: string;
  leadSubject: string;
  leadSent: string;
  leadFailed: string;
  leadMail: string;
};

export const CHAT_TEXTS: { en: ChatTexts; de: ChatTexts } = {
  en: {
    launcher: "Ask us",
    title: "LocalDominate assistant",
    disclosure: "AI assistant. Requests go to the team.",
    greeting:
      "Hi, I'm the LocalDominate AI assistant. Tell me what your business does and where it is stuck, and I will tell you what we would do first.",
    starters: ["What does it cost?", "I get few direct bookings", "Is my Google profile OK?"],
    placeholder: "Write a message",
    inputLabel: "Your message",
    send: "Send",
    close: "Close chat",
    reset: "New chat",
    typing: "Writing…",
    error: "Something went wrong on our side. Please email info@localdominate.org or use the free check.",
    ctaCheck: "Get a free check",
    ctaCall: "Book a 15-min call",
    privacyBefore: "Please do not share sensitive data. Messages are processed by an AI service. See our",
    privacyLink: "privacy policy",
    leadSubject: "Chat request",
    leadSent: "Sent to the team.",
    leadFailed: "Sending failed. Please email info@localdominate.org with the same details.",
    leadMail: "Your email app opens with your request. Please send it from there.",
  },
  de: {
    launcher: "Frage stellen",
    title: "LocalDominate Assistent",
    disclosure: "KI-Assistent. Anfragen gehen an das Team.",
    greeting:
      "Guten Tag, ich bin der KI-Assistent von LocalDominate. Erzählen Sie mir, was Ihr Betrieb macht und wo es hakt, dann sage ich Ihnen, was wir zuerst tun würden.",
    starters: ["Was kostet das?", "Zu wenig Direktbuchungen", "Ist mein Google-Profil in Ordnung?"],
    placeholder: "Nachricht schreiben",
    inputLabel: "Ihre Nachricht",
    send: "Senden",
    close: "Chat schließen",
    reset: "Neuer Chat",
    typing: "Schreibt…",
    error: "Bei uns ist etwas schiefgegangen. Bitte schreiben Sie an info@localdominate.org oder nutzen Sie den kostenlosen Check.",
    ctaCheck: "Kostenlosen Check anfordern",
    ctaCall: "15-Min-Call buchen",
    privacyBefore: "Bitte keine sensiblen Daten eingeben. Nachrichten verarbeitet ein KI-Dienst. Siehe",
    privacyLink: "Datenschutzerklärung",
    leadSubject: "Chat-Anfrage",
    leadSent: "An das Team gesendet.",
    leadFailed: "Senden fehlgeschlagen. Bitte schreiben Sie mit denselben Angaben an info@localdominate.org.",
    leadMail: "Ihr E-Mail-Programm öffnet sich mit Ihrer Anfrage. Bitte senden Sie sie von dort ab.",
  },
};
