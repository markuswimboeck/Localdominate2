import type { V4Article } from "../types";

const article: V4Article = {
  slug: "troubleshooting-hub",
  lang: "de",
  hub: true,
  seoTitle: "Probleme mit dem Google-Profil: alle Lösungen",
  seoDescription:
    "Google-Profil gesperrt, nicht bestätigt, doppelt oder plötzlich unsichtbar? Hier finden Sie für jedes Problem die passende Anleitung mit den offiziellen Wegen.",
  h1: "Probleme mit dem Google-Unternehmensprofil: alle Lösungen im Überblick",
  kicker: "Themenübersicht",
  lead:
    "Für Betriebe, deren Google-Profil gesperrt ist, sich nicht bestätigen lässt, doppelt existiert oder in Maps nicht mehr erscheint. Suchen Sie Ihr Problem in der Tabelle und springen Sie direkt zur passenden Anleitung.",
  answer:
    "Bei Problemen mit dem Google-Unternehmensprofil lohnt der Blick auf drei Stellen: den Status des Profils, Angaben, die nicht zur Wirklichkeit passen, und Verstöße gegen Googles Richtlinien. Prüfen Sie deshalb zuerst den Status im Profil, beheben Sie dann falsche Angaben und legen Sie erst danach Einspruch ein. Zahlen Sie niemandem Geld für eine versprochene Reaktivierung.",
  takeaways: [
    "Erscheint das Profil nicht einmal bei der Suche nach Name und Ort, liegt häufig ein Statusproblem vor. Erscheint es dort, aber nicht bei allgemeinen Suchen, geht es um das Ranking.",
    "Bei einer Sperrung beheben Sie zuerst den Verstoß und legen dann im Einspruchstool von Google Einspruch mit Nachweisen ein.",
    "Legen Sie während eines laufenden Einspruchs kein neues Profil an.",
    "Bei der Videobestätigung müssen Standort, Ausstattung und Ihre Berechtigung erkennbar sein. Passen die Profilangaben nicht dazu, kann sie scheitern.",
    "Falsche Angaben in KI-Antworten korrigieren Sie zuerst dort, wo der KI-Dienst sie herhat: im Profil, auf der Website oder in Verzeichnissen.",
  ],
  publishedAt: "2026-03-09",
  updatedAt: "2026-10-12",
  readingTime: 5,
  sections: [
    {
      id: "problem-finden",
      title: "Ihr Problem und die passende Anleitung",
      answer:
        "Die Tabelle ordnet die häufigsten Fälle den Anleitungen zu. Jede Anleitung beschreibt die offiziellen Wege, die Google dafür vorsieht.",
      blocks: [
        {
          t: "table",
          caption: "Probleme mit dem Google-Unternehmensprofil",
          head: ["Was Sie sehen", "Wahrscheinliche Ursache", "Anleitung"],
          rows: [
            ["Hinweis auf Sperrung oder Einschränkung im Profil", "Verstoß gegen die Richtlinien oder fehlende Nachweise", "[Profil gesperrt: Einspruch einlegen](/blog/gbp-suspendiert-reaktivieren)"],
            ["Bestätigung scheitert oder bricht ab", "Angaben passen nicht zu Schild, Standort oder Video", "[Profil lässt sich nicht bestätigen](/blog/gbp-verifizierung-fehlgeschlagen)"],
            ["Profil erscheint nicht einmal bei der Suche nach dem Namen", "Status: nicht bestätigt, in Prüfung oder gesperrt, oder ein doppelter Eintrag", "[Profil nicht in der Suche sichtbar](/blog/gbp-nicht-in-suche-sichtbar)"],
            ["Zwei Einträge für denselben Standort", "Altes Profil nach Umzug, Profil in fremdem oder altem Agenturkonto, getrennte Profile je Leistung", "[Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen)"],
            ["Positionen in Maps sind plötzlich eingebrochen", "Statusänderung, eigene Änderungen, Wettbewerber oder Updates", "[Plötzlich nicht mehr in Google Maps](/blog/ranking-ploetzlich-verschwunden)"],
            ["Eine Rezension verstößt gegen die Richtlinien", "Spam, Beleidigung, Interessenkonflikt", "[Google-Bewertung löschen lassen](/blog/gbp-bewertung-loeschen-anleitung)"],
            ["Wettbewerber mit Fantasienamen oder Scheinadresse", "Spam in Google Maps", "[Google-Maps-Spam melden](/blog/google-maps-spam-erkennen)"],
            ["Chat-Schaltfläche ist verschwunden", "Google hat den Chat am 31. Juli 2024 eingestellt", "[Google Business Messaging eingestellt](/blog/google-business-messaging)"],
            ["KI-Antwort nennt falsche Öffnungszeiten oder Preise", "Veraltete Angabe in einer Quelle", "[Falsche Angaben in KI-Antworten korrigieren](/blog/ai-falschangaben-korrigieren-2026)"],
          ],
        },
      ],
    },
    {
      id: "reihenfolge",
      title: "In welcher Reihenfolge Sie prüfen",
      answer:
        "Prüfen Sie von außen nach innen: zuerst, ob das Problem wirklich besteht, dann den Status, dann Ihre eigenen Änderungen. Erst danach lohnt der Blick auf andere.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Problem bestätigen", text: "Suchen Sie nach Ihrem Namen und Ort und messen Sie die allgemeinen Suchen an mehreren Punkten im Einzugsgebiet. Wie das geht, beschreibt der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker)." },
            { title: "Status im Profil prüfen", text: "Bestätigt, in Prüfung, eingeschränkt oder gesperrt. Doppelte Einträge lösen Sie über den separaten Duplikat-Ablauf. Der Status entscheidet, welche Anleitung passt." },
            { title: "Eigene Änderungen prüfen", text: "Wurden kurz vorher Name, Adresse oder Kategorie geändert? Google prüft Änderungen vor der Veröffentlichung. Nach einer Namensänderung kann, nach einem Umzug muss das Unternehmen erneut bestätigt werden." },
            { title: "Erst dann auf andere schauen", text: "Erst wenn Status und eigene Angaben stimmen, prüfen Sie Wettbewerber, Spam und bestätigte Google-Updates." },
          ],
        },
        {
          t: "note",
          label: "Vorsicht",
          text: "Zahlen Sie niemandem Geld für eine angebliche Schnell-Reaktivierung. Google nimmt für eine Reaktivierung kein Geld und fragt nie nach Einmalpasswörtern oder PINs.",
        },
      ],
    },
    {
      id: "vorbeugen",
      title: "Vorbeugen: die häufigsten Fehler vermeiden",
      answer:
        "Viele Probleme entstehen durch dieselben Fehler: Zusätze im Firmennamen, Adressen ohne besetzte Betriebsstätte, Bewertungen mit Anreiz und fast gleiche Stadtseiten.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Local SEO Fehler](/blog/local-seo-fehler): warum ein Betrieb lokal nicht gefunden wird und was Sie stattdessen tun.",
            "[Google-Maps-Audit](/blog/google-maps-audit-template): Wir empfehlen, zweimal im Jahr das ganze Profil mit einer Vorlage durchzugehen.",
            "Alle Anleitungen zum Profil: [Google-Unternehmensprofil im Überblick](/blog/google-business-profil-hub).",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Soll ich ein neues Profil anlegen, wenn mein altes gesperrt ist?",
      a: "Nein. Legen Sie, solange Ihr Einspruch geprüft wird, kein neues Profil an. Beheben Sie den Verstoß und legen Sie im Einspruchstool von Google Einspruch ein.",
    },
    {
      q: "Welche Nachweise verlangt Google bei einem Einspruch?",
      a: "Google nimmt als Nachweis unter anderem Gewerbeanmeldung, Gewerbeerlaubnis, Steuerbescheinigungen sowie Strom-, Telefon- oder Wasserrechnungen. Welche Nachweise im Einzelfall passen, steht in der Anleitung zur Sperrung.",
    },
    {
      q: "Warum ist mein Profil verschwunden, obwohl ich nichts geändert habe?",
      a: "Prüfen Sie den Status im Profil und ob Google selbst Angaben geändert hat, denn Google ändert Profile auch selbst. Erst wenn Status und Daten stimmen, lohnt der Blick auf Wettbewerber, Spam und bestätigte Google-Updates.",
    },
  ],
  sources: [
    { title: "Einspruch gegen eingeschränkte oder gesperrte Profile", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4569145?hl=de" },
    { title: "Unternehmen bei Google bestätigen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7107242?hl=de" },
    { title: "Probleme mit doppelten Profilen und Eigentumsrechten beheben", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/12756178?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Unternehmensprofil bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3039617?hl=de" },
    { title: "Help protect your Google Business Profile", publisher: "Google Business Profile Help (EN)", url: "https://support.google.com/business/answer/14509283" },
    { title: "Änderungen an Chat und Anrufverlauf im Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14919056?hl=de" },
  ],
  related: [
    { slug: "google-business-profil-hub", title: "Google-Unternehmensprofil: alle Anleitungen" },
    { slug: "gbp-suspendiert-reaktivieren", title: "Profil gesperrt: Einspruch einlegen" },
    { slug: "gbp-nicht-in-suche-sichtbar", title: "Profil nicht in der Suche sichtbar" },
    { slug: "ranking-ploetzlich-verschwunden", title: "Plötzlich nicht mehr in Google Maps" },
  ],
  cta: {
    title: "Sie kommen allein nicht weiter?",
    text: "Schicken Sie uns den Link zu Ihrem Google-Profil. Sie bekommen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst prüfen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
