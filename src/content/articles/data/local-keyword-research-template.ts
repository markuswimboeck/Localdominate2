import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-keyword-research-template",
  lang: "de",
  seoTitle: "Vorlage: lokale Keyword-Recherche als Tabelle",
  seoDescription:
    "Tabellenvorlage für lokale Suchbegriffe: Spalten, Quellen, Bewertung und Seitenzuordnung. So halten Sie Ihre Keyword-Liste mit wenig Aufwand aktuell.",
  h1: "Vorlage für die lokale Keyword-Recherche: Liste, Bewertung und Seitenzuordnung",
  kicker: "Vorlage",
  lead:
    "Für Inhaber lokaler Betriebe und ihre Website-Betreuer, die ihre Suchbegriffe nicht im Kopf, sondern in einer Tabelle führen wollen. Sie bekommen den Aufbau der Tabelle, die Bedeutung jeder Spalte, ein einfaches Punkteschema zur Bewertung und eine Vorlage für die Zuordnung zu Ihren Seiten.",
  answer:
    "Die Vorlage besteht aus vier Blättern: **Grunddaten**, **Keyword-Liste**, **Seitenzuordnung** und **Verlauf**. In der Liste steht je Zeile ein Suchbegriff mit Typ, Quelle, Absicht, Bewertung und Zielseite. Jede wichtige Leistung bekommt einen Hauptbegriff und eine eigene Seite. Einmal im Quartal ergänzen Sie neue Begriffe aus Ihren Profil- und Search-Console-Daten.",
  takeaways: [
    "Die Tabelle ersetzt keine Recherche, sie hält das Ergebnis fest. Wie Sie Begriffe finden, zeigt der Artikel zur Keyword-Suche.",
    "Die besten Quellen sind Ihre eigenen Daten: Suchanfragen im Unternehmensprofil und in der Search Console.",
    "Ein einfaches Punkteschema aus Umsatznähe, Passung und Aufwand reicht, um Prioritäten zu setzen.",
    "Jeder Hauptbegriff gehört zu genau einer Seite. Fast gleiche Ortsseiten mit getauschtem Ortsnamen gelten bei Google als Spam.",
    "Lokale Begriffe haben oft wenig Suchvolumen. Kleine Werte sind normal und kein Grund, einen Begriff zu streichen.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 9,
  sections: [
    {
      id: "wozu",
      title: "Wozu eine Vorlage für Suchbegriffe",
      answer:
        "Ohne Tabelle landen gute Suchbegriffe in Notizen, E-Mails und Köpfen. Eine Liste mit festen Spalten zeigt, welche Begriffe zu welcher Seite gehören und wo noch eine Seite fehlt.",
      blocks: [
        {
          t: "p",
          text: "Dieser Artikel ist die Arbeitsvorlage. Die Methode, wie Sie Begriffe aus Ihrem Alltag, aus Google und von Wettbewerbern sammeln, beschreibt der Leitfaden [Local SEO Keywords finden](/blog/local-seo-keywords-finden). Beide passen zusammen: Dort sammeln Sie, hier ordnen und pflegen Sie.",
        },
        {
          t: "table",
          caption: "Die vier Blätter der Vorlage",
          head: ["Blatt", "Inhalt", "Pflege"],
          rows: [
            ["1 Grunddaten", "Betrieb, Leistungen, Orte, Einzugsgebiet", "Bei neuen Leistungen oder Standorten"],
            ["2 Keyword-Liste", "Ein Suchbegriff je Zeile mit Bewertung", "Einmal im Quartal ergänzen"],
            ["3 Seitenzuordnung", "Eine Website-Seite je Zeile mit Haupt- und Nebenbegriffen", "Bei jeder neuen oder geänderten Seite"],
            ["4 Verlauf", "Klicks, Impressionen und Position je Begriff über die Monate", "Einmal im Monat"],
          ],
        },
      ],
    },
    {
      id: "grunddaten",
      title: "Blatt 1: Grunddaten",
      answer:
        "Auf dem ersten Blatt halten Sie fest, was Sie anbieten und wo. Daraus entstehen später die Kombinationen aus Leistung und Ort.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 1: Grunddaten",
          head: ["Feld", "Ihr Eintrag"],
          rows: [
            ["Betrieb", "[Name]"],
            ["Hauptkategorie im Google-Profil", "[z. B. Physiotherapeut]"],
            ["Leistungen", "[Leistung 1], [Leistung 2], [Leistung 3]"],
            ["Wörter, die Kunden verwenden", "[z. B. „Krankengymnastik“ statt „Physiotherapie“]"],
            ["Ort und Stadtteile", "[Ort], [Stadtteil 1], [Stadtteil 2]"],
            ["Nachbarorte im Einzugsgebiet", "[Ort A], [Ort B]"],
            ["Besondere Merkmale", "[z. B. barrierefrei, Hausbesuche, Abendtermine]"],
            ["Saison oder Anlässe", "[z. B. Winterdienst, Weihnachtsfeiern]"],
          ],
        },
      ],
    },
    {
      id: "keyword-liste",
      title: "Blatt 2: die Keyword-Liste und ihre Spalten",
      answer:
        "Jede Zeile ist ein Suchbegriff. Die Spalten sagen, woher er kommt, was der Suchende will, wie wichtig er für Sie ist und welche Seite ihn bedient.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 2: Spalten der Keyword-Liste",
          head: ["Spalte", "Was Sie eintragen", "Beispiel"],
          rows: [
            ["Suchbegriff", "So, wie Kunden ihn eintippen oder sagen", "zahnreinigung schwabing"],
            ["Typ", "Einer der Typen aus der nächsten Tabelle", "Leistung + Ort"],
            ["Quelle", "Woher der Begriff stammt", "Profil-Suchanfragen"],
            ["Suchinteresse", "Wert aus dem Keyword-Planer oder „gering / mittel / hoch“", "gering"],
            ["Absicht", "Will der Suchende kaufen, buchen, anrufen oder sich informieren?", "buchen"],
            ["Punkte", "Summe aus dem Punkteschema", "8"],
            ["Zielseite", "Die eine Seite, die den Begriff bedienen soll", "/zahnreinigung"],
            ["Status", "neu, geplant, umgesetzt, beobachten", "geplant"],
          ],
        },
        {
          t: "table",
          caption: "Typen lokaler Suchbegriffe für die Spalte „Typ“",
          head: ["Typ", "Muster", "Beispiel"],
          rows: [
            ["Leistung + Ort", "[Leistung] [Ort oder Stadtteil]", "elektriker pasing"],
            ["Leistung ohne Ort", "[Leistung], oft mit „in der Nähe“", "schlüsseldienst in der nähe"],
            ["Leistung + Merkmal", "[Leistung] [Merkmal] [Ort]", "hausarzt englischsprachig graz"],
            ["Dringlichkeit", "[Leistung] notdienst, heute, sofort", "zahnarzt notdienst wochenende"],
            ["Frage", "wie, was kostet, wann, darf", "was kostet eine zahnreinigung"],
            ["Saison und Anlass", "[Anlass] [Leistung] [Ort]", "weihnachtsfeier restaurant linz"],
            ["Eigener Name", "[Firmenname] und Schreibvarianten", "praxis muster öffnungszeiten"],
          ],
        },
        {
          t: "p",
          text: "Begriffe mit Dringlichkeit verdienen bei Handwerk, Schlüsseldiensten und Praxen eine eigene Prüfung. Mehr dazu im Artikel [Notdienst-Keywords](/blog/local-seo-notdienst-keywords). Saisonbegriffe planen Sie früh genug vor dem Anlass, wie im Artikel [Saisonales Local SEO](/blog/saisonales-local-seo) beschrieben.",
        },
      ],
    },
    {
      id: "quellen",
      title: "Woher die Begriffe kommen: Quellen für die Spalte „Quelle“",
      answer:
        "Am verlässlichsten sind Ihre eigenen Daten. Google-Werkzeuge ergänzen sie. Notieren Sie zu jedem Begriff die Quelle, damit Sie später wissen, wie belastbar er ist.",
      blocks: [
        {
          t: "table",
          caption: "Quellen und was sie zeigen",
          head: ["Quelle", "Was sie zeigt", "Worauf Sie achten"],
          rows: [
            ["Suchanfragen im Unternehmensprofil", "Begriffe, bei denen Ihr Profil in Suche und Maps angezeigt wurde", "Laut Google zu Monatsbeginn aktualisiert, die Anzeige kann bis zu fünf Tage dauern"],
            ["Google Search Console, Bericht „Leistung“", "Suchanfragen, über die Ihre Website in der Google Suche erschien und angeklickt wurde", "Die Standardansicht zeigt drei Monate, der Zeitraum lässt sich ändern"],
            ["Google Keyword-Planer", "Geschätzte monatliche Suchanfragen für Begriffe", "Begriffe mit sehr geringem Suchvolumen zeigt der Planer laut Google nicht an"],
            ["Automatische Vervollständigung", "Häufige Suchanfragen, die zu Ihrer Eingabe passen", "Laut Google spiegeln die Vorschläge tatsächliche Suchanfragen wider"],
            ["Google Trends", "Relatives Interesse auf einer Skala von 0 bis 100", "Keine absoluten Zahlen, gut für Saison und Vergleich zweier Begriffe"],
            ["Telefon, E-Mail, Bewertungen", "Die Wörter, mit denen Kunden ihr Anliegen beschreiben", "Oft andere Wörter als Ihre Fachsprache"],
          ],
        },
        {
          t: "note",
          label: "Kleine Zahlen sind normal",
          text: "Lokale Begriffe wie „Fußpflege Eppendorf“ haben oft so wenig Suchvolumen, dass Werkzeuge keinen Wert oder nur eine grobe Spanne zeigen. Das heißt nicht, dass niemand so sucht. Bewerten Sie solche Begriffe nach Umsatznähe und Passung, nicht nach der Zahl.",
        },
      ],
    },
    {
      id: "bewertung",
      title: "Bewerten mit einem einfachen Punkteschema",
      answer:
        "Vergeben Sie für jeden Begriff in drei Kriterien je 1 bis 3 Punkte und addieren Sie. Begriffe mit 7 bis 9 Punkten bearbeiten Sie zuerst.",
      blocks: [
        {
          t: "table",
          caption: "Punkteschema für die Spalte „Punkte“",
          head: ["Kriterium", "1 Punkt", "2 Punkte", "3 Punkte"],
          rows: [
            ["Umsatznähe", "Suchender informiert sich", "Suchender vergleicht Anbieter", "Suchender will buchen, anrufen oder kommen"],
            ["Passung", "Leistung nur am Rande", "Leistung im Angebot", "Kernleistung mit gutem Ertrag"],
            ["Aufwand", "Neue Seite und neue Inhalte nötig", "Bestehende Seite muss deutlich ergänzt werden", "Bestehende Seite passt, kleine Anpassung genügt"],
          ],
        },
        {
          t: "p",
          text: "Das Schema ist bewusst grob. Es soll eine Entscheidung erleichtern, keine Genauigkeit vortäuschen. Wenn zwei Begriffe gleich viele Punkte haben, nehmen Sie den, bei dem Ihr Betrieb heute schon in Maps oder in der Suche auftaucht.",
        },
      ],
    },
    {
      id: "seitenzuordnung",
      title: "Blatt 3: Begriffe den Seiten zuordnen",
      answer:
        "Jede Seite bekommt einen Hauptbegriff und einige verwandte Begriffe. Kein Hauptbegriff steht bei zwei Seiten, sonst konkurrieren Ihre Seiten miteinander.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 3: Seitenzuordnung",
          head: ["Seite", "Hauptbegriff", "Verwandte Begriffe", "Status"],
          rows: [
            ["Startseite", "[Hauptleistung] [Ort]", "[Hauptleistung] in der nähe, [Betriebsart] [Ort]", "umgesetzt"],
            ["/[leistung-1]", "[Leistung 1] [Ort]", "[Leistung 1] kosten, [Leistung 1] termin", "geplant"],
            ["/[leistung-2]", "[Leistung 2] [Ort]", "[Leistung 2] ablauf", "geplant"],
            ["/[standort-2]", "[Hauptleistung] [zweiter Ort]", "nur bei echtem zweitem Standort", "offen"],
            ["/kontakt", "[Betriebsname] kontakt", "öffnungszeiten, anfahrt, parken", "umgesetzt"],
            ["/ratgeber/[frage]", "[Frage aus der Liste]", "verwandte Fragen", "offen"],
          ],
        },
        {
          t: "p",
          text: "Seiten für weitere Orte lohnen sich nur, wenn Sie dort tatsächlich arbeiten und für den Ort etwas Eigenes zu sagen haben: Anfahrt, Einsätze, Ansprechpartner, Besonderheiten. Google zählt fast gleiche Seiten, die nur für ähnliche Suchanfragen angelegt werden, zum Missbrauch von Brückenseiten. Wie gute Ortsseiten aussehen, zeigt der Artikel [Lokale Landingpages](/blog/lokale-landing-pages). Wenn zwei Seiten um denselben Begriff konkurrieren, hilft [Keyword-Kannibalisierung lösen](/blog/lokale-keyword-kannibalisierung).",
        },
        {
          t: "ul",
          items: [
            "**Seitentitel und Hauptüberschrift** nennen Leistung und Ort in natürlicher Sprache.",
            "**Im Text** beantworten Sie die Fragen, die Kunden zu dieser Leistung stellen.",
            "**Im Google-Profil** tragen Sie die Leistung als eigenen Eintrag ein. Keywords im Firmennamen sind laut Googles Richtlinien nicht erlaubt.",
          ],
        },
      ],
    },
    {
      id: "verlauf",
      title: "Blatt 4: den Verlauf festhalten",
      answer:
        "Einmal im Monat übertragen Sie für Ihre wichtigsten Begriffe Klicks, Impressionen und durchschnittliche Position aus der Search Console. So sehen Sie, ob eine Seitenänderung gewirkt hat.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 4: Verlauf je Begriff",
          head: ["Begriff", "Monat", "Impressionen", "Klicks", "Ø Position", "Änderung an der Seite"],
          rows: [
            ["[Begriff 1]", "[Monat]", "", "", "", "[z. B. Preise ergänzt]"],
            ["[Begriff 2]", "[Monat]", "", "", "", ""],
          ],
        },
        {
          t: "p",
          text: "Die durchschnittliche Position in der Search Console bezieht sich laut Google auf die Google-Suchergebnisse, nicht auf die Reihenfolge in Google Maps. Für Maps brauchen Sie eine eigene Messung, wie im Artikel [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker) beschrieben.",
        },
      ],
    },
    {
      id: "pflege",
      title: "Die Liste pflegen: einmal im Quartal",
      answer:
        "Die Pflege dauert wenig, wenn Sie sie regelmäßig machen. Neue Begriffe aus Ihren Daten aufnehmen, Status aktualisieren, die nächste Seite planen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Neue Suchanfragen sichten", text: "Profil-Suchanfragen der letzten Monate und Search-Console-Suchanfragen mit Impressionen, aber wenig Klicks durchgehen. Neue Begriffe als Zeile eintragen." },
            { title: "Bewerten", text: "Für neue Zeilen das Punkteschema ausfüllen." },
            { title: "Zuordnen", text: "Passt der Begriff zu einer bestehenden Seite? Dann als verwandten Begriff eintragen. Wenn nicht, eine neue Seite planen." },
            { title: "Eine Seite umsetzen", text: "Pro Quartal mindestens eine Seite neu anlegen oder deutlich verbessern, beginnend mit der höchsten Punktzahl." },
            { title: "Saison vorausplanen", text: "Begriffe für Anlässe im nächsten Quartal prüfen und die Seiten rechtzeitig vorbereiten." },
          ],
        },
      ],
    },
    {
      id: "dach",
      title: "Besonderheiten im DACH-Raum",
      answer:
        "Dieselbe Leistung heißt je nach Region anders. Nehmen Sie regionale Wörter und Schreibweisen als eigene Zeilen in die Liste auf.",
      blocks: [
        {
          t: "table",
          caption: "Regionale Varianten für Ihre Liste",
          head: ["Thema", "Beispiele", "Was Sie tun"],
          rows: [
            ["Wortwahl", "Metzger und Fleischer, Tischler und Schreiner, Praxis und Ordination", "Das Wort verwenden, das Ihre Kunden vor Ort sagen"],
            ["Schreibweise", "Friseur und Frisör, „ß“ in Deutschland und Österreich, „ss“ in der Schweiz", "Auf der Seite die örtliche Schreibweise nutzen"],
            ["Ortsangaben", "Stadtteile in Deutschland, Bezirke in Wien, Quartiere und Kreise in Zürich", "Die Einheit verwenden, mit der man vor Ort sucht"],
            ["Mehrsprachige Regionen", "Deutsch und Französisch in Biel, Deutsch und Italienisch in Graubünden", "Begriffe je Sprache als eigene Zeilen führen"],
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Suchbegriffe gehören in die Liste?",
      a: "So viele, wie Sie pflegen können. Für einen Betrieb mit wenigen Leistungen reichen oft einige Dutzend Zeilen. Wichtiger als die Menge ist, dass jeder wichtige Begriff eine Zielseite hat.",
    },
    {
      q: "Brauche ich für jeden Stadtteil eine eigene Seite?",
      a: "Nein. Eine eigene Seite lohnt sich nur, wenn Sie dort einen Standort haben oder regelmäßig arbeiten und etwas Eigenes zum Ort sagen können. Fast gleiche Seiten mit getauschtem Ortsnamen zählt Google zum Missbrauch von Brückenseiten.",
    },
    {
      q: "Woher bekomme ich Suchvolumen, wenn der Keyword-Planer nichts anzeigt?",
      a: "Begriffe mit sehr geringem Volumen zeigt der Planer laut Google nicht an. Nutzen Sie dann Ihre Profil-Suchanfragen und die Search Console, oder vergleichen Sie zwei Begriffe in Google Trends. Für die Bewertung reicht oft „gering“, „mittel“ oder „hoch“.",
    },
    {
      q: "Sollen Suchbegriffe in den Firmennamen im Google-Profil?",
      a: "Nein. Googles Richtlinien verlangen den echten Namen, wie er auf Schild und Website steht. Leistungen gehören in die Leistungsliste, die Beschreibung und auf die Website.",
    },
    {
      q: "Wie oft sollte ich die Liste überarbeiten?",
      a: "Einmal im Quartal neue Begriffe aufnehmen und bewerten, einmal im Monat den Verlauf eintragen. Nach einer neuen Leistung oder einem neuen Standort sofort.",
    },
  ],
  sources: [
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Google-Suchergebnisse): Übersicht und Einrichtung", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Was sind Impressionen, Position und Klicks?", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7042828?hl=de" },
    { title: "Keyword-Planer", publisher: "Google Ads-Hilfe", url: "https://support.google.com/google-ads/answer/7337243?hl=de" },
    { title: "So funktioniert die automatische Vervollständigung von Google", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/7368877?hl=de" },
    { title: "Häufig gestellte Fragen zu Google Trends-Daten", publisher: "Google Trends-Hilfe", url: "https://support.google.com/trends/answer/4365533?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
  ],
  related: [
    { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
    { slug: "lokale-landing-pages", title: "Lokale Landingpages, die funktionieren" },
    { slug: "lokale-keyword-kannibalisierung", title: "Keyword-Kannibalisierung lösen" },
    { slug: "google-maps-ranking-tracker", title: "Google-Maps-Ranking-Tracker" },
  ],
  cta: {
    title: "Passen Ihre Seiten zu dem, was Kunden suchen?",
    text: "Wir sehen uns Ihr Google-Profil und Ihre Website an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Ihre Sichtbarkeit am ehesten verbessern. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
