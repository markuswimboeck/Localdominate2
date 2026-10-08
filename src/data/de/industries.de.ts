/**
 * Deutsche Texte für /de/industries. Spiegelt src/data/v4Industries.ts, INDUSTRIES_FAQ in v4Faq.ts
 * und die Angebote aus v4Offers.ts: gleiche Struktur, gleiche ids, gleiche Zahlen, Preise und
 * Bedingungen. Angebotsnamen, Preise und Lieferzeiten kommen aus shared.de.ts. Nichts hier
 * fügt eine Aussage, Zahl oder ein Ergebnis hinzu, das die englische Seite nicht trägt.
 */
import type { Faq } from "@/data/v4Faq";
import type { PillarId } from "@/data/v4PillarIndex";
import type { WorldId, WorldVisualKind } from "@/data/v4Industries";
import { CHECK_REPLY_TIME_DE } from "@/data/de/shared.de";

export type DeWorld = {
  id: WorldId;
  navLabel: string;
  navNote: string;
  name: string;
  descriptor: string;
  claim: string;
  situation: string;
  checks: readonly { where: string; text: string }[];
  builds: readonly string[];
  buildNote?: string;
  offers: readonly { offerId: string; why: string }[];
  step: { id: PillarId; why: string };
  checkLine: string;
  visual: WorldVisualKind;
};

export const INDUSTRY_WORLDS_DE: readonly DeWorld[] = [
  {
    id: "hospitality",
    navLabel: "Hotels und Pensionen",
    navNote: "10 bis 60 Zimmer",
    name: "Hotels und Pensionen",
    descriptor: "Inhabergeführt · 10 bis 60 Zimmer",
    claim: "Ein volles Haus ist noch keine Direktbuchung.",
    situation:
      "Ein inhabergeführtes Hotel füllt viele Zimmer über Buchungsplattformen und zahlt für jede dieser Nächte Provision. Gäste, die das Hotel beim Namen suchen, landen auf einer Website mit genau einer Aufgabe: Sie sollen buchen können, ohne die Seite zu verlassen. Ist sie auf dem Handy langsam oder wirkt die Buchungsmaschine wie ein anderes Unternehmen, geht der Gast zurück zur Plattform.",
    checks: [
      {
        where: "Bei Google",
        text: "Was ein Gast sieht, wenn er Ihr Hotel beim Namen sucht: das Profil, die Fotos, die angezeigten Preise und wem der erste Buchungslink gehört.",
      },
      {
        where: "Auf Ihrer Website",
        text: "Der Weg vom ersten Bildschirm zu einem Zimmer und einem Preis auf dem Handy, in Fingertipps gezählt.",
      },
      {
        where: "In der Buchungsmaschine",
        text: "Ob Daten, Preise und Endpreis mit dem übereinstimmen, was die Plattformen zeigen, und bei welchem Schritt Gäste abspringen.",
      },
      {
        where: "In Ihren Zahlen",
        text: "Ob Ihr Tracking eine Direktbuchung von einer Plattformbuchung unterscheiden kann.",
      },
    ],
    builds: [
      "Eine Direktbuchungsseite, zuerst für das Handy gebaut und mit Ihrer Buchungsmaschine verbunden",
      "Zimmer- und Angebotsseiten, die beantworten, was Gäste vor der Buchung fragen",
      "Ein vollständiges Google-Unternehmensprofil, das auf Ihre eigene Website führt",
      "Tracking, das Direktbuchungen und Plattformbuchungen trennt",
    ],
    offers: [
      {
        offerId: "website-5-days",
        why: "Für ein Hotel ohne Website, auf der man buchen kann. Umfang und Inhalte legen wir in einem Gespräch fest, bevor die Woche beginnt.",
      },
      {
        offerId: "conversion-sprint",
        why: "Für eine Buchungsseite, die Besuche bekommt, aber zu wenige Buchungen. Eine Seite wird geprüft, fünf Verbesserungen gehen live, sobald Sie zustimmen.",
      },
    ],
    step: {
      id: "grow",
      why: "Ein Hotel dieser Größe hat meist schon Gäste und eine Website. Zuerst gilt es zu klären, was zwischen dem Besuch und der Buchung passiert.",
    },
    checkLine: "Senden Sie uns den Link zu Ihrer Hotel-Website oder zu Ihrem Google-Profil.",
    visual: "hotel-photo",
  },
  {
    id: "holiday-rentals",
    navLabel: "Ferienwohnungen",
    navNote: "Gastgeber mit mehreren Objekten",
    name: "Ferienwohnungen",
    descriptor: "Gastgeber mit mehreren Objekten · kleine Verwalter",
    claim: "Mehrere Objekte, aber keine eigene Buchungsseite.",
    situation:
      "Ein Gastgeber mit mehreren Objekten betreibt sie über Plattform-Inserate, mit einem Kalender pro Plattform. Gäste, die wiederkommen wollen, und Menschen, die von Freunden von der Unterkunft gehört haben, können nur über die Plattform buchen. So fällt Provision auch für Gäste an, die Sie längst gewonnen hatten. Eine Buchungsseite für alle Objekte gibt ihnen einen direkten Weg zu Ihnen.",
    checks: [
      {
        where: "Auf den Plattformen",
        text: "Wie jedes Objekt heute gelistet ist: Fotos, Beschreibungen und Hausregeln, und was sich von Plattform zu Plattform unterscheidet.",
      },
      {
        where: "Bei Google",
        text: "Was erscheint, wenn jemand den Namen eines Objekts oder Ihres Vermietungsbetriebs sucht.",
      },
      {
        where: "In Ihrem Kalender",
        text: "Wie die Verfügbarkeit abgeglichen wird und ob eine Direktbuchung ohne Doppelbuchung hineinpasst.",
      },
      {
        where: "In früheren Buchungen",
        text: "Welche Gäste wiedergekommen sind oder auf Empfehlung kamen. Sie könnten als Erste direkt buchen.",
      },
    ],
    builds: [
      "Eine Buchungswebsite für alle Objekte, jedes mit eigener Seite",
      "Verfügbarkeit und Buchungsanfragen, verbunden mit dem Kalender, den Sie schon nutzen, soweit Ihr System es erlaubt",
      "Ein kurzes Set für Stammgäste: der Direktlink, ein QR-Code je Objekt und ein E-Mail-Text",
      "Ein Google-Unternehmensprofil für den Vermietungsbetrieb, wenn er nach den Regeln von Google infrage kommt",
    ],
    buildNote:
      "Nach den Richtlinien von Google sind einzelne Ferienhäuser von Unternehmensprofilen ausgeschlossen. Ein Vermietungsbetrieb mit Büro kann infrage kommen. Das prüfen wir vor jeder Arbeit am Profil.",
    offers: [
      {
        offerId: "website-5-days",
        why: "Die Direktbuchungsseite für Ihre Objekte, in einer konzentrierten Woche gebaut. Umfang und Inhalte legen wir in einem Gespräch fest, bevor wir starten.",
      },
      {
        offerId: "conversion-sprint",
        why: "Für Gastgeber, die schon eine Buchungsseite haben, die zwar besucht, aber selten genutzt wird. Eine Seite, fünf Verbesserungen, ein kurzer schriftlicher Bericht.",
      },
    ],
    step: {
      id: "build",
      why: "Die Inserate gibt es auf den Plattformen bereits. Es fehlt das, womit ein Gast bei Ihnen buchen kann: die Seite selbst.",
    },
    checkLine: "Senden Sie uns den Link zu einem Ihrer Inserate oder zu Ihrer aktuellen Website.",
    visual: "lake-photo",
  },
  {
    id: "trades",
    navLabel: "Handwerk",
    navNote: "Heizung, Elektro, Dach, Solar",
    name: "Handwerk",
    descriptor: "Sanitär und Heizung · Elektro · Dach · Solar",
    claim: "Auch ein empfohlener Betrieb wird nachgeschlagen.",
    situation:
      "Die meisten Aufträge kommen durch Empfehlung. Vor dem Anruf schlagen die Leute den Betrieb nach: das Google-Profil, die Bewertungen, eine Website, die die Arbeit zeigt. Veraltete Öffnungszeiten, keine Fotos echter Aufträge und kein Einsatzgebiet lassen einen empfohlenen Betrieb geschlossen oder nachlässig wirken. Genau dann entscheidet der Kunde, ob er anruft.",
    checks: [
      {
        where: "In Google Maps",
        text: "Name, Kategorie, Einsatzgebiet, Zeiten und Telefonnummer, verglichen mit Ihrem Firmenwagen, Ihrer Rechnung und Ihrer Website.",
      },
      {
        where: "In den Bewertungen",
        text: "Wie aktuell sie sind, welche Aufträge sie nennen und ob jemand darauf antwortet.",
      },
      {
        where: "Auf Ihrer Website",
        text: "Ob jeder wertvolle Auftrag eine eigene Seite hat, zum Beispiel Wärmepumpe, Bad, Neuverkabelung, Dach oder Solar, und ob die Seite die Orte nennt, die Sie bedienen.",
      },
      {
        where: "Beim ersten Kontakt",
        text: "Was nach Feierabend passiert: wer den Anruf oder das Formular bekommt und wie schnell der Kunde Antwort erhält.",
      },
    ],
    builds: [
      "Ein korrigiertes, vollständiges Google-Unternehmensprofil mit Leistungen und Einsatzgebiet",
      "Eine Seite je wertvollem Auftrag, mit Fotos Ihrer eigenen Arbeit",
      "Ein Anfrageformular, das fragt, was Sie für ein Angebot brauchen: Auftrag, Ort, Zeitraum, Fotos",
      "Ein einfacher Ablauf, um fertige Kunden um eine Bewertung zu bitten",
    ],
    offers: [
      {
        offerId: "google-profile",
        why: "Am Profil wird ein empfohlener Betrieb zuerst geprüft. Der Quick-Fix korrigiert die Felder, die für die lokale Suche zählen.",
      },
      {
        offerId: "conversion-sprint",
        why: "Für die Seite, die aus einem Besuch eine Anfrage machen soll. Eine Seite wird auf Handyansicht, Geschwindigkeit und Tracking geprüft, fünf Verbesserungen gehen live.",
      },
    ],
    step: {
      id: "launch",
      why: "Der Betrieb und die Arbeit sind da. Es fehlt, gefunden zu werden, und zwar richtig, von den Menschen, denen Ihr Name genannt wurde.",
    },
    checkLine: "Senden Sie uns den Link zu Ihrem Google-Profil oder zu Ihrer Website.",
    visual: "profile-fields",
  },
  {
    id: "premium-services",
    navLabel: "Hochwertige lokale Dienstleistungen",
    navNote: "Praxen, Kanzleien, mehrere Standorte",
    name: "Hochwertige lokale Dienstleistungen",
    descriptor: "Praxen · Anwalts- und Steuerkanzleien · mehrere Standorte",
    claim: "Eine überlegte Entscheidung fällt vor dem ersten Anruf.",
    situation:
      "Wer einen Zahnarzt, einen Anwalt oder einen Steuerberater auswählt, vergleicht eine Weile und entscheidet, bevor er Kontakt aufnimmt. Verglichen wird, was er sehen kann: wer dort arbeitet, wofür die Kanzlei bekannt ist, wie andere sie beschreiben, wie leicht man einen Termin bekommt. Bei mehreren Standorten muss jeder dieselben richtigen Angaben zeigen.",
    checks: [
      {
        where: "In der Suche",
        text: "Was für Ihren Namen erscheint und für Ihr Fachgebiet plus Ihre Stadt, für jeden Standort einzeln geprüft.",
      },
      {
        where: "In jedem Profil",
        text: "Ob Name, Adresse, Telefon, Zeiten und Kategorien an jedem Standort und in jedem Verzeichnis, das in Ihrem Fach zählt, übereinstimmen.",
      },
      {
        where: "Auf Ihrer Website",
        text: "Ob Personen, Qualifikationen und Tätigkeitsfelder mit genug Substanz gezeigt werden, um glaubwürdig zu sein, und ob jeder Standort eine eigene Seite hat.",
      },
      {
        where: "Beim ersten Kontakt",
        text: "Wie eine Anfrage behandelt wird: wer antwortet, wie schnell und was der Person danach gesagt wird.",
      },
    ],
    builds: [
      "Ein richtiges Profil je Standort, mit einem gemeinsamen Standard für Namen, Kategorien und Zeiten",
      "Seiten für Personen und Tätigkeitsfelder, geschrieben, um überprüft zu werden, nicht um zu beeindrucken",
      "Eine Seite je Standort mit eigenen Angaben und Anfahrt",
      "Ein Ablauf für Anfragen: Das Formular legt den Kontakt an, benachrichtigt die richtige Person und bestätigt dem Absender",
    ],
    buildNote:
      "Heil-, Rechts- und Steuerberufe haben eigene Werberegeln. Wir lassen jede Aussage über Ergebnisse weg und bitten Sie, die Formulierung bei Bedarf mit Ihrer Kammer oder Ihrem Berater abzustimmen.",
    offers: [
      {
        offerId: "google-profile",
        why: "Ein Profil wird geprüft und korrigiert, damit es vollständig und einheitlich ist. Bei mehreren Standorten bestätigen wir den Umfang im Gespräch.",
      },
      {
        offerId: "ai-automation-starter",
        why: "Ein Ablauf für eingehende Anfragen, zuerst aufgeschrieben und von Ihnen freigegeben, dann mit Ihren echten Daten gebaut und getestet.",
      },
    ],
    step: {
      id: "position",
      why: "Wenn mehrere Kanzleien ähnlich aussehen, lautet die erste Frage, warum man sich für diese entscheiden sollte. Die Antwort bestimmt, was Profil und Website belegen müssen.",
    },
    checkLine: "Senden Sie uns den Link zu Ihrer Website oder zum Google-Profil eines Standorts.",
    visual: "locations",
  },
] as const;

export const INDUSTRIES_FAQ_DE: readonly Faq[] = [
  {
    q: "Für welche Arten von Unternehmen arbeitet LocalDominate?",
    a: "Für Hotels und Pensionen (inhabergeführt, 10 bis 60 Zimmer), Ferienwohnungen (Gastgeber mit mehreren Objekten und kleine Verwalter), Handwerk (Sanitär und Heizung, Elektro, Dach, Solar) und hochwertige lokale Dienstleistungen (Praxen, Anwalts- und Steuerkanzleien, mehrere Standorte).",
  },
  {
    q: "Welches Angebot ist für ein Hotel ein sinnvoller Start?",
    a: "Für ein Hotel ohne Website, auf der man buchen kann: Website in 5 Tagen, mit Umfang und Inhalten, die wir vor Beginn der Woche in einem Gespräch festlegen. Für eine Buchungsseite, die Besuche bekommt, aber zu wenige Buchungen: der 72-Stunden-Sprint für Buchungen und Conversion, bei dem eine Seite geprüft wird und fünf Verbesserungen live gehen, sobald Sie zustimmen.",
  },
  {
    q: "Kann ein einzelnes Ferienhaus ein Google-Unternehmensprofil haben?",
    a: "Nach den Richtlinien von Google sind einzelne Ferienhäuser von Unternehmensprofilen ausgeschlossen. Ein Vermietungsbetrieb mit Büro kann infrage kommen. Das prüfen wir vor jeder Arbeit am Profil.",
  },
  {
    q: "Machen Sie Aussagen über Ergebnisse für Arzt-, Rechts- und Steuerpraxen?",
    a: "Nein. Heil-, Rechts- und Steuerberufe haben eigene Werberegeln. Wir lassen jede Aussage über Ergebnisse weg und bitten Sie, die Formulierung bei Bedarf mit Ihrer Kammer oder Ihrem Berater abzustimmen.",
  },
];

/** Texte der Seite selbst (Hero, FAQ-Überschrift, Schlussaufruf) und der SEO-Kopf. */
export const IND_DE = {
  seoTitle: "Websites & Local SEO für Hotels, Vermieter und Handwerk",
  seoDescription:
    "Für Hotels, Ferienwohnungen, Handwerk und lokale Dienstleister: was LocalDominate zuerst prüft, was wir bauen und welches Festpreis-Angebot der Einstieg ist.",
  heroLabel: "Branchen",
  h1: "Websites und Google-Sichtbarkeit für Hotels, Ferienwohnungen, Handwerk und hochwertige lokale Dienstleistungen.",
  heroText:
    "LocalDominate ist ein Growth Studio: Strategie, Marke, Website und Marketing als ein Projekt. Die Methode ist für jedes Unternehmen dieselbe. Was wir zuerst prüfen und was wir bauen, hängt davon ab, wie Ihre Kunden Sie finden und sich entscheiden. Wählen Sie Ihre Art von Unternehmen.",
  navLabel: "Arten von Unternehmen",
  faqLabel: "Fragen",
  faqTitle: "Kurze Antworten für Ihre Art von Unternehmen.",
  startTitle: "Senden Sie den Link. Wir sagen Ihnen, wo wir anfangen würden.",
  startText: `Ein Mensch sieht sich Ihr Google-Profil oder Ihre Website an und schickt Ihnen per E-Mail bis zu drei konkrete Punkte, die Sie zuerst beheben sollten, ${CHECK_REPLY_TIME_DE}. Gehört Ihr Unternehmen nicht zu den vier oben, läuft der Check genauso.`,
  startNote: "Umfang und Festpreis schriftlich, bevor eine Arbeit beginnt. Keine Ranking-Versprechen.",
  breadcrumbHome: "Startseite",
  breadcrumbHere: "Branchen",
  worldsListName: "Arten von Unternehmen",
} as const;

/** Rahmentexte eines Abschnitts. */
export const WORLD_DE = {
  offerLabel: "Festpreis-Angebot",
  delivery: "Lieferung:",
  fullScope: "Vollständiger Umfang auf der Leistungsseite",
  checks: "Was wir zuerst ansehen",
  builds: "Was wir bauen",
  start: "Wo der Einstieg liegt",
  stepLabel: "Üblicher erster Schritt von sieben",
  readStep: "Schritt",
  readStepSuffix: "lesen",
  englishMarker: " (EN)",
  checkSuffix: `Sie erhalten per E-Mail bis zu drei konkrete Punkte, die Sie zuerst beheben sollten, ${CHECK_REPLY_TIME_DE}. Der Check ist kostenlos und verpflichtet Sie zu nichts.`,
  illustrationCaption: "Illustration, keine Räumlichkeiten eines Kunden.",
} as const;

/** Grafiken in WorldVisual: Profilfelder (Handwerk) und Standorte (Dienstleistungen). */
export const VISUAL_DE = {
  profileFields: [
    { field: "Name", against: "wie auf Ihrer Rechnung und an Ihrem Firmenwagen" },
    { field: "Kategorie", against: "das Gewerk, für das Sie gefunden werden wollen" },
    { field: "Einsatzgebiet", against: "die Orte, zu denen Sie wirklich fahren" },
    { field: "Zeiten", against: "auch Notdienstzeiten, wenn Sie welche anbieten" },
    { field: "Telefon", against: "die Nummer, bei der jemand abhebt" },
    { field: "Leistungen", against: "ein Eintrag je Art von Auftrag" },
    { field: "Fotos", against: "Ihre eigene fertige Arbeit" },
  ],
  profileCaption:
    "Schema eines Google-Unternehmensprofils: die sieben Felder, die wir durchgehen, und womit jedes verglichen wird.",
  standardFields: ["Name", "Adresse", "Telefon", "Zeiten", "Kategorien"],
  location: "Standort",
  oneStandard: "Ein Standard",
  locationsAria:
    "Schema: drei Standorte, jeder verbunden mit einem gemeinsamen Standard für Name, Adresse, Telefon, Zeiten und Kategorien.",
  locationsCaption:
    "Jeder Standort behält seine eigene Seite und sein eigenes Profil. Die Angaben, die übereinstimmen müssen, kommen aus einer Quelle.",
  alt: {
    "hotel-photo": "Illustration: ein Holzhotel mit Balkonen und Terrasse über einem Bergsee bei Sonnenuntergang",
    "lake-photo": "Illustration: das Wohnzimmer einer Ferienwohnung mit großem Fenster zu einem Bergsee bei Sonnenuntergang",
    trades: "Illustration: eine Schreinerwerkstatt mit Handwerkzeug auf der Werkbank und einem Fenster auf grüne Hügel",
    premium: "Illustration: ein ruhiges Büro mit Schreibtisch vor einem bodentiefen Fenster auf grüne Hügel bei Sonnenuntergang",
  },
} as const;

/** Rechner. Rechenlogik und Zahlen sind identisch mit der englischen Seite, nur Texte und Format sind deutsch. */
export const CALC_DE = {
  label: "Provisionsrechner · für Hotels und Gastgeber",
  title: "Was kosten Sie Plattformbuchungen im Jahr?",
  intro:
    "Rechnen Sie mit Ihren eigenen Zahlen. Nichts ist vorausgefüllt, und nichts, was Sie eingeben, verlässt diese Seite.",
  howLabel: "So wird gerechnet",
  disclaimer:
    "Das ist reine Rechnung mit Ihren Zahlen, keine Prognose. Sie nimmt an, dass jede Nacht zum durchschnittlichen Preis verkauft wird, und lässt aus, was Sie eine Direktbuchung kostet, etwa Zahlungsgebühren oder Werbung.",
  fields: {
    units: { label: "Zimmer oder Objekte", placeholder: "z. B. 24" },
    rate: { label: "Durchschnittlicher Preis pro Nacht", placeholder: "z. B. 140" },
    occupancy: {
      label: "Auslastung",
      placeholder: "z. B. 65",
      hint: "Verkaufte Nächte über das ganze Jahr. Wenn Sie eine Saison schließen, zählen diese Nächte als leer.",
    },
    platformShare: {
      label: "Buchungen über Plattformen",
      placeholder: "z. B. 50",
      hint: "Der Teil Ihrer Buchungen, der über Buchungsplattformen eingeht.",
    },
    commission: {
      label: "Provisionssatz",
      placeholder: "z. B. 15",
      hint: "Aus Ihrer Plattformabrechnung, einschließlich zusätzlicher Programme, die Sie bezahlen.",
    },
  },
  unitWord: "in",
  clear: "Alle Felder leeren",
  resultLabel: "Ihr Ergebnis",
  notYet: "noch nicht berechnet",
  rows: {
    nights: "Zimmernächte pro Jahr",
    revenue: "Umsatz über Plattformen",
    commission: "Gezahlte Provision pro Jahr",
    point: "Gespart je Prozentpunkt Ihrer Buchungen, der von der Plattform zur Direktbuchung wechselt",
  },
  noPoint: "Ihr Plattformanteil liegt unter einem Prozentpunkt, es gibt also keinen Punkt mehr zu verschieben.",
  formulaNightsName: "Zimmernächte pro Jahr",
  formulaNights: (nightsPerYear: number) => `Zimmer oder Objekte × ${nightsPerYear} × Auslastung`,
  formulaRest: [
    { name: "Umsatz über Plattformen", sum: "Zimmernächte × Preis pro Nacht × Plattformanteil" },
    { name: "Gezahlte Provision pro Jahr", sum: "Umsatz über Plattformen × Provisionssatz" },
    {
      name: "Ein Prozentpunkt, der zur Direktbuchung wechselt",
      sum: "Zimmernächte × Preis pro Nacht × 1 % × Provisionssatz",
    },
  ],
  status: {
    done: "Berechnet aus Ihren fünf Zahlen.",
    invalid: "Eines der Felder enthält etwas, das keine gültige Zahl ist. Korrigieren Sie es, um das Ergebnis zu sehen.",
    empty: "Füllen Sie alle fünf Felder aus. Das Ergebnis erscheint hier.",
    partial: (filled: number, total: number) =>
      `${filled} von ${total} Feldern ausgefüllt. Das Ergebnis erscheint, wenn alle fünf gültig sind.`,
  },
  announce: (nights: string, revenue: string, commission: string) =>
    `Ergebnis: ${nights} Zimmernächte pro Jahr, ${revenue} Umsatz über Plattformen, ${commission} gezahlte Provision pro Jahr.`,
  errors: {
    units: "Geben Sie eine ganze Zahl ab 1 ein, nur Ziffern.",
    rate: "Geben Sie einen Betrag über 0 ein, nur Ziffern, zum Beispiel 140 oder 139,50.",
    occupancy: "Geben Sie einen Prozentwert über 0 und bis 100 ein.",
    platformShare: "Geben Sie einen Prozentwert von 0 bis 100 ein.",
    commission: "Geben Sie einen Prozentwert über 0 und bis 100 ein.",
  },
} as const;
