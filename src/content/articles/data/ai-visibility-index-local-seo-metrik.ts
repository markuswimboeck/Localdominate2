import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-visibility-index-local-seo-metrik",
  lang: "de",
  seoTitle: "KI-Sichtbarkeit messen: eine ehrliche eigene Kennzahl",
  seoDescription:
    "So bauen Sie eine einfache Kennzahl für Ihre Sichtbarkeit in KI-Antworten: Fragenset, Bewertung, Stichprobe, Schwankung und Grenzen, mit Rechenbeispiel.",
  h1: "Sichtbarkeit in KI-Antworten messen: So bauen Sie Ihre eigene, ehrliche Kennzahl",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, ob ChatGPT, Google und andere KI-Dienste sie nennen, und dafür eine Zahl brauchen, die mehr ist als ein Bauchgefühl. Sie bekommen eine Vorlage mit Fragenset, Bewertungsschema und Rechenweg und erfahren, was so eine Zahl zeigen kann und was nicht.",
  answer:
    "Einen offiziellen Index für die Sichtbarkeit in KI-Antworten gibt es nicht. Sinnvoll ist eine eigene Nennungsquote: Sie stellen jeden Monat dieselben Fragen mit Ortsangabe mehrfach an feste Dienste und zählen, in wie vielen Antworten Ihr Betrieb vorkommt, ob die Angaben stimmen und ob Ihre Website verlinkt ist. Weil Antworten stark schwanken, zählt der Verlauf über Monate, nicht ein einzelner Wert.",
  takeaways: [
    "In den von uns geprüften Unterlagen weist kein KI-Anbieter eine Rangposition innerhalb der Antworten aus. Messbar ist, wie oft Sie in einer festen Stichprobe genannt werden.",
    "In einer Studie von SparkToro und Gumshoe lag die Chance, bei ChatGPT oder Googles KI zweimal dieselbe Empfehlungsliste zu bekommen, unter eins zu hundert. Positionen in KI-Antworten taugen deshalb nicht als Kennzahl.",
    "Drei Werte reichen: Nennungsquote, Anteil richtiger Angaben und Anteil der Antworten, die Ihre eigene Website verlinken.",
    "Jede Frage mehrfach stellen, Ort immer in die Frage schreiben, ohne Anmeldung oder Personalisierung fragen.",
    "Bei rund hundert Antworten im Monat liegt die Unsicherheit einer Quote von 25 Prozent bei etwa plus minus acht Prozentpunkten. Kleine Veränderungen sind meist Zufall.",
    "Ergänzen Sie die Stichprobe um die kostenlosen Berichte von Google und Microsoft und um Ihren Anfrageeingang.",
  ],
  publishedAt: "2026-05-20",
  updatedAt: "2026-10-12",
  readingTime: 13,
  sections: [
    {
      id: "warum-eigene-kennzahl",
      title: "Warum es keinen offiziellen KI-Index gibt",
      answer:
        "In den von uns geprüften Unterlagen weisen weder Google noch OpenAI, Microsoft oder Anthropic aus, an welcher Stelle Ihr Betrieb innerhalb einer KI-Antwort steht. Google und Microsoft zählen in ihren KI-Berichten, wie oft Ihre Seiten als Link oder Quelle erschienen. Wer wissen will, was in den Antworten über ihn steht, muss selbst fragen und zählen.",
      blocks: [
        {
          t: "p",
          text: "Bei der klassischen Suche gibt es eine Rangposition: Platz 3 für „Elektriker Regensburg“. Bei KI-Antworten fehlt diese Größe. Die Antwort ist ein Text, der sich bei jeder Anfrage neu zusammensetzt. Google schreibt zu Übersichten mit KI und KI-Modus, dass Indexierung und Ausspielung nicht garantiert sind. Auch OpenAI sagt nur, dass jede öffentliche Website in der ChatGPT-Suche erscheinen kann.",
        },
        {
          t: "p",
          text: "Wie stark Antworten schwanken, hat eine Untersuchung von SparkToro und dem Anbieter Gumshoe im Januar 2026 gezeigt. Rund 600 Freiwillige stellten 12 Empfehlungsfragen an ChatGPT, Claude und Googles KI, insgesamt 2.961 Mal. Die Chance, bei ChatGPT oder Google zweimal dieselbe Liste zu bekommen, lag unter eins zu hundert, dieselbe Reihenfolge noch deutlich seltener. Stabiler war dagegen, **wie oft** eine Marke über viele Durchläufe vorkam. Rand Fishkin von SparkToro hält diesen Anteil, gemessen über Dutzende bis Hunderte mehrfach gestellte Fragen, für eine vertretbare Kennzahl, eine „Position in der KI“ dagegen nicht.",
        },
        {
          t: "note",
          label: "Zur Einordnung der Studie",
          text: "Die Autoren nennen selbst Grenzen: keine begutachtete Forschung, nicht kontrollierte Einstellungen, kleine Stichproben, Ende 2025 erhoben. Ein Mitautor arbeitet für einen Anbieter von KI-Messwerkzeugen. Lokale Betriebe wurden nicht gesondert untersucht. Die Studie belegt die Schwankung, liefert aber keinen Richtwert für Ihren Betrieb.",
        },
        {
          t: "p",
          text: "Deshalb beschreibt dieser Artikel eine eigene Kennzahl, kein Produkt. Sie ist einfach, Sie können sie mit einer Tabelle führen, und sie verspricht nicht mehr, als sie zeigen kann. Welche KI-Dienste für lokale Betriebe überhaupt zählen, steht im Überblick [KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen).",
        },
      ],
    },
    {
      id: "drei-werte",
      title: "Drei Werte statt einer Gesamtnote",
      answer:
        "Messen Sie drei getrennte Quoten: wie oft Ihr Betrieb genannt wird, wie oft die Angaben dabei stimmen und wie oft Ihre eigene Website als Quelle verlinkt ist. Jede Quote führt zu einer anderen Maßnahme, deshalb sollten Sie sie nicht zu einer Punktzahl verrechnen.",
      blocks: [
        {
          t: "table",
          caption: "Die drei Kennzahlen und was sie auslösen",
          head: ["Kennzahl", "Rechnung", "Was ein niedriger Wert bedeutet"],
          rows: [
            ["Nennungsquote", "Antworten mit Ihrem Betrieb geteilt durch alle Antworten", "Sie fehlen in den Quellen, die die Dienste für diese Fragen nutzen"],
            ["Richtigkeitsquote", "Nennungen mit richtigen Angaben geteilt durch alle Nennungen", "Irgendwo stehen falsche oder veraltete Daten über Ihren Betrieb"],
            ["Eigenquellen-Quote", "Nennungen mit Link auf Ihre Website geteilt durch alle Nennungen", "Die Dienste stützen sich auf fremde Seiten wie Verzeichnisse oder Portale"],
          ],
        },
        {
          t: "p",
          text: "Eine gewichtete Gesamtnote von 0 bis 100 sieht übersichtlich aus, verdeckt aber genau das, was Sie wissen müssen. Ein Betrieb, der oft genannt wird, aber mit falscher Telefonnummer, braucht eine Korrektur der Quellen. Ein Betrieb, der selten genannt wird, braucht bessere Inhalte und Einträge. Wie Sie falsche Angaben an der Quelle berichtigen, beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026).",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels stellte einen „AI Visibility Index“ mit fünf gewichteten Säulen und Schwellenwerten wie „über 70 ist stark“ vor. Für diese Gewichte und Schwellen gab es keine Quelle. Wir haben sie gestrichen und ersetzen sie durch die hier beschriebene offene Methode.",
        },
      ],
    },
    {
      id: "fragenset",
      title: "Das Fragenset festlegen",
      answer:
        "Legen Sie zehn bis fünfzehn Fragen fest, so formuliert, wie Kunden fragen, jede mit Ort im Text. Mischen Sie Fragen nach Leistung, nach einem Problem, nach Bedingungen wie Wochenende oder Barrierefreiheit und eine Frage nach Ihrem Namen. Die Formulierung bleibt danach Monat für Monat gleich.",
      blocks: [
        {
          t: "table",
          caption: "Beispiel: Fragenset für einen fiktiven Elektrobetrieb in Regensburg",
          head: ["Typ", "Beispielfrage", "Wozu"],
          rows: [
            ["Leistung und Ort", "„Welcher Elektriker in Regensburg installiert Wallboxen?“", "Kernleistung, für die Sie gefunden werden wollen"],
            ["Problem und Ort", "„In meiner Wohnung in Regensburg fliegt ständig die Sicherung raus, wen kann ich anrufen?“", "Fragen ohne Fachbegriff, wie Laien sie stellen"],
            ["Bedingung", "„Elektriker-Notdienst in Regensburg am Sonntag“", "Öffnungszeiten, Notdienst, Einzugsgebiet"],
            ["Vergleich", "„Welche Elektrobetriebe in Regensburg haben gute Bewertungen?“", "Empfehlungsfragen, bei denen Listen entstehen"],
            ["Nachbarort", "„Elektriker für Photovoltaik in Neutraubling“", "Orte im Einzugsgebiet, nicht nur die Stadt"],
            ["Name", "„Was weißt du über Elektro Muster in Regensburg?“", "Misst nur die Richtigkeit, nicht die Nennung"],
          ],
        },
        {
          t: "ul",
          items: [
            "**Ort immer in die Frage.** ChatGPT und Claude können laut Anbieter einen ungefähren Standort aus der IP-Adresse ableiten. Ohne Ort im Text messen Sie den Standort Ihres Büros mit.",
            "**Namensfragen getrennt auswerten.** Wer nach Ihrem Namen fragt, bekommt fast immer eine Antwort zu Ihnen. Diese Fragen zählen nur für die Richtigkeitsquote.",
            "**Fragen aus echten Anfragen ableiten.** Notieren Sie, wie Kunden am Telefon fragen. Hilfe bei der Wortwahl gibt [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
            "**Fragenset festschreiben.** Wer die Fragen jeden Monat ändert, kann die Quoten nicht vergleichen. Neue Fragen kommen als eigene Gruppe dazu.",
          ],
        },
      ],
    },
    {
      id: "dienste-und-bedingungen",
      title: "Dienste wählen und Bedingungen gleich halten",
      answer:
        "Wählen Sie drei bis fünf Dienste, die Ihre Kunden nutzen, und fragen Sie immer unter denselben Bedingungen: neues Gespräch, ohne Anmeldung oder ohne Personalisierung, Websuche eingeschaltet, Ort in der Frage. Halten Sie Gerät und Uhrzeit möglichst gleich.",
      blocks: [
        {
          t: "table",
          caption: "Was die Anbieter zu Standort und Personalisierung dokumentieren",
          head: ["Dienst", "Dokumentierter Einfluss", "So neutralisieren Sie ihn"],
          rows: [
            ["ChatGPT", "Ungefährer Standort aus der IP-Adresse; bei aktiviertem Gedächtnis können gespeicherte Erinnerungen und Ortsangaben die Suche beeinflussen", "Temporären Chat in der Variante ohne Personalisierung nutzen oder abgemeldet fragen. Ob dort die Websuche verfügbar ist, schreibt OpenAI nicht: Prüfen Sie, ob die Antwort Quellen verlinkt"],
            ["Google KI-Modus", "Personalisierung ab 18 Jahren mit aktiviertem Suchverlauf und personalisierten Empfehlungen", "Privates Browserfenster ohne Anmeldung"],
            ["Google Suche mit Übersicht mit KI", "Erscheint nicht bei jeder Frage", "Notieren, ob überhaupt eine Übersicht erschien"],
            ["Claude", "Ungefährer Standort aus der IP-Adresse bei lokalen Anfragen; Quellenangaben beschreibt Anthropic im Zusammenhang mit der Websuche", "Websuche einschalten, Ort in die Frage schreiben"],
            ["Perplexity, Copilot", "Eigene Regeln, siehe die Artikel zu den Diensten", "Neues Gespräch, Ort in der Frage"],
          ],
        },
        {
          t: "p",
          text: "Details zu den einzelnen Diensten stehen in [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026#sichtbarkeit-pruefen), [Perplexity und Claude](/blog/perplexity-claude-lokale-sichtbarkeit#testroutine) und [Bing und Copilot](/blog/bing-copilot-local-seo-2026#testroutine).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ganz neutral wird keine Messung. Ihre Kunden fragen angemeldet, mit Verlauf und von ihrem eigenen Standort. Ihre Stichprobe zeigt deshalb nicht, was ein bestimmter Kunde sieht, sondern eine gleichbleibende Ausgangslage, an der Sie Veränderungen erkennen.",
        },
      ],
    },
    {
      id: "stichprobe",
      title: "Wie viele Durchläufe Sie brauchen",
      answer:
        "Stellen Sie jede Frage pro Dienst mindestens dreimal im Monat, jedes Mal in einem neuen Gespräch. Bei zwölf Fragen und drei Diensten ergibt das 108 Antworten, genug für eine grobe Monatsquote, aber nicht für feine Unterschiede.",
      blocks: [
        {
          t: "p",
          text: "Eine einzelne Antwort ist ein Zufallstreffer. Erst die Wiederholung macht aus Antworten eine Quote. Eine genaue Zahl nennt auch die SparkToro-Studie nicht. Als grobe Orientierung nennt Rand Fishkin meist mindestens 60 bis 100 Durchläufe je Frage, von Hand ist das für einen kleinen Betrieb kaum machbar. Unsere Einschätzung: Drei Durchläufe je Frage und Dienst sind ein vertretbarer Kompromiss, der nur große Veränderungen sichtbar macht.",
        },
        {
          t: "steps",
          items: [
            { title: "Messwoche festlegen", text: "Alle Durchläufe eines Monats in derselben Woche, etwa in der ersten Woche jedes Monats. So vergleichen Sie Monate, nicht Wochentage." },
            { title: "Durchläufe verteilen", text: "Den ersten Durchlauf am Montag, den zweiten am Mittwoch, den dritten am Freitag. Jede Frage jedes Mal in einem neuen Gespräch." },
            { title: "Antworten sichern", text: "Jede Antwort als Bildschirmfoto oder kopierten Text mit Datum ablegen. Ohne Beleg lässt sich später nicht nachprüfen, warum Sie eine Antwort so bewertet haben." },
            { title: "Gleich bewerten", text: "Am besten bewertet immer dieselbe Person nach demselben Schema. Unklare Fälle notieren Sie, statt sie mal so und mal anders zu zählen." },
          ],
        },
        {
          t: "p",
          text: "Es geht auch kleiner: fünf Fragen, zwei Dienste, zwei Durchläufe. Dann sind es 20 Antworten. Das reicht, um falsche Angaben zu finden, aber nicht für eine belastbare Quote. Diese Grundform beschreibt die Checkliste [KI-Sichtbarkeit prüfen](/blog/ai-visibility-checklist#messen).",
        },
      ],
    },
    {
      id: "bewertungsschema",
      title: "Jede Antwort nach einem festen Schema bewerten",
      answer:
        "Halten Sie für jede Antwort fünf Felder fest: genannt, Angaben richtig, eigene Website verlinkt, welche Quellen verlinkt sind und eine kurze Bemerkung. Eine Rangposition innerhalb der Antwort notieren Sie nicht, weil sie von Durchlauf zu Durchlauf wechselt.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage: eine Zeile pro Antwort",
          head: ["Feld", "Werte", "Hinweis"],
          rows: [
            ["Datum, Dienst, Frage-Nr., Durchlauf", "z. B. 06.10.2026, ChatGPT, F3, 2", "Frage-Nr. aus dem festen Fragenset"],
            ["Genannt", "ja / nein", "Ja nur, wenn Ihr Betrieb eindeutig erkennbar ist, nicht bei einem ähnlichen Namen"],
            ["Angaben", "richtig / teilweise falsch / falsch / keine", "Prüfen Sie Adresse, Telefon, Zeiten, Leistungen und Preise gegen Ihre Stammdaten"],
            ["Eigene Website verlinkt", "ja / nein", "Nur ein Link auf Ihre eigene Domain zählt"],
            ["Verlinkte Quellen", "Domains", "Zeigt, welche Seiten der Dienst für diese Frage nutzt"],
            ["Bemerkung", "Freitext", "Etwa „Mitbewerber mit falscher Adresse genannt“ oder „keine Übersicht mit KI erschienen“"],
          ],
        },
        {
          t: "p",
          text: "Die Spalte „Verlinkte Quellen“ ist oft wertvoller als die Quote selbst. Taucht monatelang dasselbe Branchenportal auf, muss Ihr Eintrag dort stimmen. Eine Tabelle für alle Firmeneinträge bietet die [Citation-Tracking-Vorlage](/blog/citation-tracking-template), Hinweise zu einheitlichen Daten [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
      ],
    },
    {
      id: "rechenbeispiel",
      title: "Rechenbeispiel mit Schwankungsbreite",
      answer:
        "Wird Ihr Betrieb in 27 von 108 Antworten genannt, liegt die Nennungsquote bei 25 Prozent. Die statistische Unsicherheit reicht bei dieser Stichprobe von etwa 18 bis 34 Prozent. Steigt die Quote im nächsten Monat auf 33 Prozent, ist das noch kein sicherer Fortschritt.",
      blocks: [
        {
          t: "note",
          label: "Fiktives Beispiel",
          text: "Die folgenden Zahlen sind erfunden und dienen nur der Rechnung. Sie sind kein Richtwert und kein Ergebnis eines Kunden.",
        },
        {
          t: "table",
          caption: "Fiktiver Monat 1: 12 Fragen, 3 Dienste, 3 Durchläufe = 108 Antworten",
          head: ["Dienst", "Antworten", "Genannt", "Nennungsquote", "Ungefähre Spanne (95 %)"],
          rows: [
            ["Dienst A", "36", "12", "33 %", "20 bis 50 %"],
            ["Dienst B", "36", "9", "25 %", "14 bis 41 %"],
            ["Dienst C", "36", "6", "17 %", "8 bis 32 %"],
            ["Gesamt", "108", "27", "25 %", "18 bis 34 %"],
          ],
        },
        {
          t: "p",
          text: "Von den 27 Nennungen enthielten in diesem Beispiel 21 richtige Angaben (Richtigkeitsquote 78 Prozent), 11 verlinkten die eigene Website (Eigenquellen-Quote 41 Prozent). Die Spannen berechnen Sie mit dem Wilson-Intervall für Anteile, das das Statistik-Handbuch des US-amerikanischen NIST beschreibt. Online-Rechner für „Wilson score interval“ erledigen das mit zwei Zahlen: Treffer und Anzahl der Antworten.",
        },
        {
          t: "p",
          text: "Die Tabelle zeigt das Hauptproblem kleiner Stichproben. Bei 36 Antworten je Dienst überlappen sich die Spannen von Dienst A und Dienst C. Ob Sie in einem Dienst wirklich besser dastehen als im anderen, lässt sich daraus nicht sicher sagen. Steigt die Gesamtquote im zweiten Monat auf 36 von 108, also 33 Prozent, liegt die neue Spanne bei etwa 25 bis 43 Prozent und überlappt deutlich mit der alten.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Als Faustregel werten wir eine Veränderung erst dann als echt, wenn sie drei Monate in dieselbe Richtung zeigt oder sich die Spannen nicht mehr überlappen. Alles andere ist im Rauschen. Die Spannen sind eher zu schmal gerechnet, weil wiederholte Antworten auf dieselbe Frage nicht unabhängig voneinander sind. Mehr Durchläufe machen die Spanne schmaler: Bei 216 Antworten und 25 Prozent liegt sie etwa bei 20 bis 31 Prozent.",
        },
      ],
    },
    {
      id: "offizielle-daten",
      title: "Kostenlose Daten von Google und Microsoft ergänzen",
      answer:
        "Die Search Console zeigt seit dem 31. August 2026 allen Websites, wie oft Links zu ihnen in Übersichten mit KI und im KI-Modus angezeigt wurden. Die Bing Webmaster Tools zählen im Bericht AI Performance, der im Februar 2026 als öffentliche Vorschau eingeführt wurde, Zitierungen in Copilot und in KI-Zusammenfassungen von Bing. Besuche aus ChatGPT erkennen Sie am Parameter utm_source=chatgpt.com.",
      blocks: [
        {
          t: "table",
          caption: "Was die Berichte zeigen und was nicht",
          head: ["Quelle", "Was sie zeigt", "Was sie nicht zeigt"],
          rows: [
            ["Search Console, Leistungsbericht zu generativen KI-Funktionen (Google Suche)", "Impressionen nach Seite, Land, Gerät und Datum", "Was in der Antwort über Sie steht; Klicks und Suchanfragen beschreibt die Hilfeseite nicht, ebenso keine getrennte Auswertung nach Übersichten mit KI und KI-Modus"],
            ["Bing Webmaster Tools, AI Performance", "Zitierungen, zitierte Seiten, eine Auswahl der Grounding Queries", "Die Stelle in der Antwort; laut Microsoft keine Aussage über Rang oder Bedeutung"],
            ["Web-Analyse mit utm_source=chatgpt.com", "Besuche über Links in ChatGPT", "Nennungen ohne Klick"],
            ["Ihr Anfrageeingang", "Ob Kunden über KI-Antworten zu Ihnen finden", "Hängt davon ab, dass Sie nachfragen und es notieren"],
          ],
        },
        {
          t: "p",
          text: "Diese Zahlen sind keine Stichprobe, sondern Zählungen der Anbieter. Sie decken aber nur einzelne Dienste ab und sagen nichts über den Inhalt der Antworten. Ihre Stichprobe beantwortet die Frage „Was steht drin?“, die Berichte die Frage „Wie oft kam meine Seite vor?“. Wie die Search Console zählt, erklärt [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo#search-console), den Bing-Bericht [Bing und Copilot](/blog/bing-copilot-local-seo-2026#ai-performance). Eine vollständige Überwachungsroutine mit Server-Logs und Werkzeugen beschreibt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026).",
        },
      ],
    },
    {
      id: "grenzen",
      title: "Was die Kennzahl nicht zeigen kann",
      answer:
        "Ihre Quote zeigt, wie oft Sie bei Ihren eigenen Fragen unter Ihren Bedingungen genannt werden. Sie zeigt nicht, wie viele Menschen diese Fragen stellen, was ein angemeldeter Kunde sieht oder warum ein Dienst Sie nennt. Eine Platzierung in KI-Antworten kann niemand garantieren.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Keine Nachfrage.** Wie oft eine Frage gestellt wird, haben wir bei keinem KI-Anbieter gefunden. Eine hohe Quote bei einer Frage, die niemand stellt, ist wertlos.",
            "**Keine Ursache.** Steigt die Quote nach einer neuen Leistungsseite, kann auch ein Modellwechsel des Anbieters dahinterstehen. Die Kennzahl misst Ergebnisse, nicht Gründe.",
            "**Kein Abbild echter Kunden.** Personalisierung, Standort und Verlauf fehlen in Ihrer neutralen Messung absichtlich.",
            "**Kein Vergleich mit anderen Betrieben.** Ihre Quote gilt nur für Ihr Fragenset. Belegte Branchenwerte oder „gute“ Quoten kennen wir nicht.",
            "**Kein Ersatz für Umsatzzahlen.** Am Ende zählen Anrufe, Anfragen und Buchungen.",
          ],
        },
        {
          t: "note",
          label: "Vorsicht bei Werkzeugen",
          text: "Es gibt Dienste, die solche Stichproben automatisch fahren. Fragen Sie vor dem Kauf, welche Fragen gestellt werden, wie oft, mit welchem Standort und ob über die Programmierschnittstelle oder wie ein Nutzer gefragt wird. Rand Fishkin von SparkToro schreibt, jedes Werkzeug mit einer „Position in der KI“ sei „full of baloney“, also Unsinn.",
        },
      ],
    },
    {
      id: "monatsablauf",
      title: "Der Ablauf für jeden Monat",
      answer:
        "Einmal im Monat: Stichprobe in der Messwoche, Antworten bewerten, drei Quoten mit Spanne berechnen, Berichte von Google und Microsoft ablesen und die häufigsten Quellen prüfen. Danach beheben Sie zuerst falsche Angaben, dann Lücken in Inhalten und Einträgen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Stichprobe fahren", text: "Festes Fragenset, feste Dienste, drei Durchläufe je Frage und Dienst in der Messwoche." },
            { title: "Bewerten und rechnen", text: "Jede Antwort nach Schema eintragen, Nennungsquote, Richtigkeitsquote und Eigenquellen-Quote mit Spanne berechnen." },
            { title: "Berichte ablesen", text: "Impressionen im Leistungsbericht zu generativen KI-Funktionen der Search Console, Zitierungen in AI Performance, Besuche mit utm_source=chatgpt.com." },
            { title: "Falsche Angaben zuerst", text: "Jede falsche Angabe an ihrer Quelle korrigieren. Das wirkt direkt auf die Richtigkeitsquote." },
            { title: "Lücken schließen", text: "Fehlen Sie bei bestimmten Fragen, prüfen Sie, ob Ihre Website die Frage überhaupt als Text beantwortet. Hinweise dazu in [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen)." },
            { title: "Verlauf festhalten", text: "Die Monatswerte in eine Übersicht übertragen. Ein Muster wie in der [Google-Maps-Ranking-Tracker-Vorlage](/blog/google-maps-ranking-tracker) hilft, Verläufe über Monate zu lesen." },
          ],
        },
        {
          t: "p",
          text: "Wer die Messung mit klassischer lokaler Suchmaschinenoptimierung verbindet, findet die Grundlagen im [Local SEO Leitfaden](/blog/ultimate-guide-local-seo). Was hinter dem Begriff GEO steckt und welche Versprechen Sie skeptisch machen sollten, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Gibt es einen offiziellen AI Visibility Index?",
      a: "Nein. In den von uns geprüften Unterlagen veröffentlichen weder Google noch OpenAI, Microsoft oder Anthropic so einen Index. Wer einen anbietet, hat eine eigene Formel gebaut. Fragen Sie dann, wie die Zahl entsteht und wie groß ihre Schwankung ist.",
    },
    {
      q: "Warum messe ich keine Position in der KI-Antwort?",
      a: "Weil sie bei gleicher Frage fast jedes Mal wechselt. In der Studie von SparkToro und Gumshoe kam dieselbe Reihenfolge in weniger als einem von tausend Durchläufen vor. Stabiler ist der Anteil der Antworten, in denen Sie überhaupt vorkommen.",
    },
    {
      q: "Wie viele Fragen und Durchläufe brauche ich?",
      a: "Eine belegte feste Zahl kennen wir nicht. Rand Fishkin von SparkToro nennt als grobe Orientierung meist mindestens 60 bis 100 Durchläufe je Frage, von Hand ist das kaum machbar. Unsere Einschätzung: zehn bis fünfzehn Fragen, drei bis fünf Dienste, drei Durchläufe je Frage und Dienst. Das ergibt rund hundert Antworten und reicht, um große Veränderungen zu erkennen.",
    },
    {
      q: "Welche Nennungsquote ist gut?",
      a: "Einen belegten Richtwert kennen wir nicht. Ihre Quote hängt vom Fragenset, von der Zahl der Mitbewerber und von den Diensten ab. Vergleichen Sie sich nur mit Ihren eigenen Vormonaten.",
    },
    {
      q: "Kann ich die Messung automatisieren?",
      a: "Teilweise, mit Werkzeugen oder Programmierschnittstellen der Anbieter. Ob Antworten über eine Schnittstelle denen in der normalen Oberfläche entsprechen, ist laut Rand Fishkin von SparkToro noch nicht geklärt. Prüfen Sie stichprobenartig von Hand nach.",
    },
  ],
  sources: [
    { title: "New Research: AIs are highly inconsistent when recommending brands or products (27. Januar 2026)", publisher: "SparkToro", url: "https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/" },
    { title: "AI recommendation lists repeat less than 1% of the time: Study (28. Januar 2026)", publisher: "Search Engine Land", url: "https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "AI features and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Get AI-powered responses with AI Mode in Google Search", publisher: "Google Search-Hilfe", url: "https://support.google.com/websearch/answer/16011537?hl=en" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Search in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-search-in-chatgpt" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Temporary Chat FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/8914046-temporary-chat-faq" },
    { title: "Enabling and using web search", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/10684626-enabling-and-using-web-search" },
    { title: "e-Handbook of Statistical Methods, 7.2.4.1 Confidence intervals", publisher: "NIST/SEMATECH", url: "https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm" },
  ],
  related: [
    { slug: "ai-zitat-monitoring-local-seo-2026", title: "KI-Zitate überwachen" },
    { slug: "ai-visibility-checklist", title: "KI-Sichtbarkeit prüfen: die Checkliste" },
    { slug: "ai-falschangaben-korrigieren-2026", title: "KI-Falschangaben korrigieren" },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
  ],
  cta: {
    title: "Was sagen KI-Dienste über Ihren Betrieb?",
    text: "Wir stellen typische Kundenfragen mit Ihrem Ort an mehrere KI-Dienste und prüfen, ob Ihr Betrieb genannt wird, ob die Angaben stimmen und welche Quellen verlinkt sind. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
