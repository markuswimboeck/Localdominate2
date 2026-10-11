import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-zitat-monitoring-local-seo-2026",
  lang: "de",
  seoTitle: "KI-Zitat-Monitoring: die Monatsroutine für Betriebe",
  seoDescription:
    "So prüfen lokale Betriebe jeden Monat, ob KI-Dienste sie nennen und richtig zitieren: Fragenset, Protokoll, Search Console, Bing und Analytics richtig lesen.",
  h1: "KI-Zitat-Monitoring: So prüfen Sie jeden Monat, ob KI-Dienste Ihren Betrieb nennen und richtig zitieren",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe und alle, die deren Marketing betreuen. Sie bekommen eine Routine für einen festen Tag im Monat: ein Fragenset, faire Testbedingungen, ein Protokoll und die Berichte, die Google, Microsoft und OpenAI selbst anbieten. Ob man die Ergebnisse zu einer einzigen Kennzahl verdichten sollte, behandelt der Artikel [AI Visibility Index](/blog/ai-visibility-index-local-seo-metrik).",
  answer:
    "Legen Sie zehn bis zwanzig typische Kundenfragen fest und stellen Sie sie einmal im Monat unter gleichen Bedingungen an dieselben KI-Dienste, jede Frage mehr als einmal. Halten Sie fest, ob Ihr Betrieb genannt wird, ob die Angaben stimmen und welche Seiten verlinkt sind. Ergänzen Sie das um die Search Console, den Bericht AI Performance in den Bing Webmaster Tools und den Kanal „KI-Assistent“ in Google Analytics.",
  takeaways: [
    "Keiner der kostenlosen Berichte von Google und Microsoft zeigt Ihnen, was eine KI-Antwort über Ihren Betrieb schreibt. Das sehen Sie nur in eigenen Stichproben mit festem Fragenset.",
    "Antworten schwanken auch bei gleicher Frage. Stellen Sie jede Frage mehrmals und zählen Sie, wie oft Ihr Betrieb vorkommt, statt auf einen Platz in einer Liste zu schauen.",
    "Die Search Console zeigt laut Google seit dem 31. August 2026 allen Websites, wie oft Links zu ihnen in Übersichten mit KI und im KI-Modus angezeigt wurden. Klicks enthält dieser Bericht nicht.",
    "Die Bing Webmaster Tools zählen Zitierungen in Copilot und in KI-Zusammenfassungen von Bing. Google Analytics ordnet Besuche aus ChatGPT, Gemini und anderen Assistenten seit Mai 2026 dem Kanal „KI-Assistent“ zu, Übersichten mit KI und KI-Modus aber der organischen Suche.",
    "Eine Nennung mit falscher Telefonnummer schadet mehr als keine. Prüfen Sie bei jeder Nennung die Angaben und korrigieren Sie Fehler an der Quelle.",
  ],
  publishedAt: "2026-08-08",
  updatedAt: "2026-10-11",
  readingTime: 15,
  sections: [
    {
      id: "was-messbar-ist",
      title: "Was sich messen lässt und was nicht",
      answer:
        "Messbar sind zwei Dinge: was KI-Dienste auf Ihre Testfragen antworten und was die Berichte von Google, Microsoft und Ihrer Web-Analyse zählen. Was eine Antwort einem fremden Nutzer an einem anderen Ort über Ihren Betrieb sagt, zeigt kein Bericht.",
      blocks: [
        {
          t: "p",
          text: "Die Berichte der Anbieter zählen Ereignisse: angezeigte Links, zitierte Seiten, Besuche. Den Wortlaut der Antworten, die Richtigkeit Ihrer Angaben und die genannten Wettbewerber liefert keiner von ihnen. Dafür brauchen Sie eine eigene Stichprobe.",
        },
        {
          t: "table",
          caption: "Messquellen im Überblick",
          head: ["Messquelle", "Was sie zeigt", "Was sie nicht zeigt"],
          rows: [
            ["Eigenes Fragenset", "Nennung, Angaben, verlinkte Quellen, Wettbewerber", "Was andere Nutzer an anderen Orten sehen"],
            ["Search Console, Leistungsbericht zu generativen KI-Funktionen", "Impressionen von Links zu Ihrer Website in Übersichten mit KI und im KI-Modus", "Klicks, Wortlaut der Antwort"],
            ["Bing Webmaster Tools, AI Performance", "Zitierungen Ihrer Seiten in Copilot, in KI-Zusammenfassungen von Bing und bei ausgewählten Partnern", "Rang oder Platzierung in der Antwort"],
            ["Web-Analyse (Google Analytics, Matomo)", "Besuche über einen Link in einem KI-Dienst und was die Besucher danach tun", "Nennungen ohne Klick"],
            ["Server-Protokolle", "Abrufe durch ChatGPT-User und andere Abrufe auf Nutzeranfrage", "Ob die Seite in der Antwort zitiert wurde"],
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Google schreibt in seinem Leitfaden zu generativen KI-Funktionen, dass kein Werkzeug eines Drittanbieters Zugang zu Googles internen Ranking- oder KI-Systemen hat. Nach unserer Einschätzung sind auch die Ergebnisse kostenpflichtiger Werkzeuge deshalb Stichproben, nur größere. Was solche Werkzeuge messen, beschreibt [AI Visibility Index](/blog/ai-visibility-index-local-seo-metrik#was-werkzeuge-messen).",
        },
      ],
    },
    {
      id: "fragenset",
      title: "Schritt 1: das Fragenset festlegen",
      answer:
        "Ein brauchbares Fragenset besteht aus zehn bis zwanzig Fragen, so formuliert, wie Kunden fragen, immer mit Ort im Text. Mischen Sie Fragen ohne Ihren Namen, bei denen Sie empfohlen werden wollen, mit Fragen nach Ihrem Namen, bei denen die Angaben stimmen müssen.",
      blocks: [
        {
          t: "table",
          caption: "Vier Gruppen von Fragen",
          head: ["Gruppe", "Was sie prüft", "Beispiel"],
          rows: [
            ["Empfehlung", "Werden Sie genannt, wenn Kunden einen Betrieb suchen?", "„Welche Zahnarztpraxis in Linz behandelt Angstpatienten?“"],
            ["Bedingung", "Werden Sie für ein bestimmtes Merkmal genannt?", "„Hotel mit Hund und Parkplatz am Tegernsee“"],
            ["Ratgeber", "Wird Ihre Website als Quelle für Fachfragen verlinkt?", "„Wie läuft eine Badsanierung im Altbau in Graz ab?“"],
            ["Name", "Stimmen Öffnungszeiten, Adresse und Leistungen?", "„Hat [Ihr Betrieb] in Winterthur am Samstag geöffnet?“"],
          ],
        },
        {
          t: "ul",
          items: [
            "**Wortlaut einfrieren.** Speichern Sie die Fragen in einer Datei und kopieren Sie sie jedes Mal von dort. Ein anderes Wort kann eine andere Antwort auslösen, dann vergleichen Sie nicht mehr dasselbe.",
            "**Ort in die Frage.** Schreiben Sie Stadt oder Stadtteil in den Text. ChatGPT kann laut OpenAI sonst einen ungefähren Standort aus Ihrer IP-Adresse verwenden, und Google nutzt Ihren Standort auch dann, wenn die Personalisierung ausgeschaltet ist.",
            "**Nicht nur nach dem eigenen Namen fragen.** Namensfragen prüfen Ihre Angaben. Ob Neukunden Sie finden, zeigen nur Fragen ohne Ihren Namen.",
            "**Varianten bewusst führen.** Wollen Sie wissen, ob eine Formulierung den Unterschied macht, legen Sie zu einer Frage eine zweite Fassung an und führen beide dauerhaft.",
          ],
        },
        {
          t: "p",
          text: "Gute Fragen finden Sie in Anrufen, E-Mails und Gesprächen am Empfang. Im Unternehmensprofil zeigt Google außerdem die Suchbegriffe, mit denen Kunden Ihr Profil gefunden haben. Wie Sie die Begriffe Ihrer Kunden systematisch sammeln, beschreibt [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
        },
      ],
    },
    {
      id: "testbedingungen",
      title: "Schritt 2: faire Testbedingungen",
      answer:
        "Fragen Sie immer in einer neuen Unterhaltung ohne Personalisierung, wählen Sie die Websuche ausdrücklich aus und notieren Sie Datum, Dienst, Modus und Standort. Weil Antworten auch bei gleicher Frage schwanken, stellen Sie jede Frage mehr als einmal.",
      blocks: [
        {
          t: "table",
          caption: "Gleiche Bedingungen je Dienst (laut Hilfeseiten der Anbieter)",
          head: ["Dienst", "Einstellung", "Was der Anbieter dazu schreibt"],
          rows: [
            ["ChatGPT", "Temporärer Chat in der Variante ohne Personalisierung; Suche über das Tool-Menü oder den Schrägstrich auswählen", "Ohne Personalisierung nutzt ein temporärer Chat keine Erinnerungen und keine eigenen Anweisungen. Die Variante wählen Sie vor der ersten Nachricht. Ist die Erinnerung aktiv, kann ChatGPT gespeicherte Erinnerungen in die Suchanfrage einfließen lassen. Ob die Suche im temporären Chat verfügbar ist, schreibt OpenAI nicht; prüfen Sie, ob die Antwort Quellen verlinkt."],
            ["ChatGPT, Standort", "Ort in die Frage schreiben, Gerätestandort nicht freigeben", "ChatGPT kann einen ungefähren Standort aus der IP-Adresse nutzen. Die Freigabe des genauen Gerätestandorts ist optional und standardmäßig aus."],
            ["Google Suche mit Übersicht mit KI und KI-Modus", "Abgemeldet mit ausgeschalteter Einstellung „Suchanpassung“ oder angemeldet mit ausgeschalteter Einstellung „Personalisierte Empfehlungen“", "Auch ohne Personalisierung verwendet Google Informationen wie Ihren Standort."],
            ["Copilot, Perplexity, Claude", "Neue Unterhaltung, Websuche prüfen", "Einzelheiten in [Bing und Copilot](/blog/bing-copilot-local-seo-2026#testroutine) und [Perplexity und Claude](/blog/perplexity-claude-lokale-sichtbarkeit#testroutine)"],
          ],
        },
        {
          t: "h3",
          text: "Warum jede Frage mehr als einen Durchlauf braucht",
        },
        {
          t: "p",
          text: "Sprachmodelle liefern auch bei gleicher Eingabe nicht immer dasselbe. Eine Studie, vorgestellt auf dem Workshop Eval4NLP 2025, fand bei fünf Modellen, die über ihre Programmierschnittstellen auf gleichbleibende Ausgaben eingestellt waren, trotzdem Unterschiede zwischen den Durchläufen. Für Empfehlungen ließ SparkToro zusammen mit Gumshoe rund 600 Freiwillige zwölf Fragen knapp 3.000 Mal in ChatGPT, Claude und Googles Übersichten mit KI stellen. Die Listen genannter Marken wiederholten sich dabei fast nie, dieselbe Reihenfolge noch seltener. In einem Test mit sehr unterschiedlich formulierten Fragen zum selben Anliegen tauchten aber immer wieder dieselben Marken auf. SparkToro-Gründer Rand Fishkin hält größere Stichproben und weitere Tests für nötig.",
        },
        {
          t: "p",
          text: "Unser Vorschlag für die Routine von Hand: Stellen Sie jede Frage in mindestens zwei getrennten neuen Unterhaltungen und zählen Sie, in wie vielen Antworten Ihr Betrieb vorkommt. Das ist ein Kompromiss mit dem Aufwand, keine belegte Schwelle. Fishkin empfiehlt, jede Frage in der Regel mindestens 60 bis 100 Mal zu stellen und die Ergebnisse zu mitteln, und hält Rangplätze in KI-Antworten für nicht aussagekräftig. Zwei Durchläufe zeigen deshalb nach unserer Einschätzung nur grobe Tendenzen, die Sie über mehrere Monate verfolgen.",
        },
        {
          t: "note",
          label: "Festhalten",
          text: "Notieren Sie zu jedem Durchlauf Datum und Uhrzeit, Dienst, Modus oder Modell, soweit angezeigt, Gerät, ob Sie angemeldet waren und den Ort Ihres Internetanschlusses. Google schreibt, dass schon Suchen im Abstand von wenigen Minuten wegen neu hinzugekommener Inhalte voneinander abweichen können.",
        },
      ],
    },
    {
      id: "protokoll",
      title: "Schritt 3: das Protokoll führen",
      answer:
        "Eine Zeile pro Antwort genügt: Datum, Dienst, Frage und Durchlauf, genannt oder nicht, Art der Nennung, Angaben richtig, eigene Seite verlinkt, fremde Quellen und Wettbewerber. Aus diesen Zeilen rechnen Sie am Monatsende wenige, gut erklärbare Zahlen.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage für das Protokoll (Beispielzeile mit Platzhaltern)",
          head: ["Datum", "Dienst", "Frage / Durchlauf", "Genannt und wie", "Angaben", "Eigene Seite", "Fremde Quellen", "Wettbewerber"],
          rows: [
            ["TT.MM.JJJJ", "ChatGPT, Suche", "F03 / 2", "ja, in Liste mit anderen", "Öffnungszeiten falsch", "nicht verlinkt", "Verzeichnis X, Portal Y", "Betrieb A, Betrieb B"],
          ],
        },
        {
          t: "ul",
          items: [
            "**Empfohlen:** Ihr Betrieb wird als Antwort auf die Frage hervorgehoben.",
            "**Aufgezählt:** Ihr Betrieb steht in einer Liste neben anderen.",
            "**Erwähnt:** Ihr Name fällt ohne Empfehlung, etwa als Beispiel.",
            "**Negativ oder falsch:** Die Antwort rät ab oder enthält falsche Angaben.",
          ],
        },
        {
          t: "p",
          text: "Speichern Sie zu jeder Zeile ein Bildschirmfoto mit Frage-Nummer und Durchlauf im Dateinamen. Prüfen Sie jede Nennung gegen Ihre Stammdaten: Name, Adresse, Telefon, Öffnungszeiten, Leistungen, Preise.",
        },
        {
          t: "p",
          text: "Öffnen Sie auch die verlinkten Quellen. Eine Studie von 2023 zu vier generativen Suchmaschinen, darunter Bing Chat und Perplexity, fand, dass im Schnitt nur etwa die Hälfte der erzeugten Sätze vollständig durch die angegebenen Quellen gestützt war und rund drei Viertel der Quellenangaben ihren Satz stützten. Die untersuchten Systeme sind älter als die heutigen. Nach unserer Einschätzung gilt die Lehre weiter: Ein Link neben einer Aussage beweist nicht, dass die Aussage in der Quelle steht.",
        },
        {
          t: "p",
          text: "Die fremden Quellen tragen Sie zusätzlich in Ihre Quellenkarte ein, wie in [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen#quellenkarte) beschrieben. So sehen Sie über die Monate, welche Verzeichnisse und Portale für Ihre Fragen immer wieder auftauchen.",
        },
      ],
    },
    {
      id: "anbieterberichte",
      title: "Schritt 4: die Berichte der Anbieter auswerten",
      answer:
        "Drei kostenlose Berichte ergänzen die Stichprobe: die Search Console für Übersichten mit KI und KI-Modus, AI Performance in den Bing Webmaster Tools für Copilot und Ihre Web-Analyse für Besuche aus KI-Diensten. Jeder zählt etwas anderes, keiner zeigt den Inhalt der Antworten.",
      blocks: [
        {
          t: "h3",
          text: "Google Search Console",
        },
        {
          t: "p",
          text: "Der „Leistungsbericht zu generativen KI-Funktionen (Google Suche)“ zeigt, wie oft Links zu Ihrer Website in Übersichten mit KI und im KI-Modus angezeigt wurden. Laut Google steht er seit dem 31. August 2026 allen Websites weltweit zur Verfügung. Er enthält Impressionen, aufgeteilt nach Seite, Land, Gerät und Datum. Ob sich Übersichten mit KI und KI-Modus darin getrennt auswerten lassen, beschreibt Google nicht. Daten aus Tests in Search Labs fehlen. Erscheint der Bericht nicht, hat Ihre Website laut Google meist zu wenige Impressionen in diesen Funktionen, etwa weil sie von ihnen ausgeschlossen ist.",
        },
        {
          t: "p",
          text: "Klicks finden Sie im normalen Leistungsbericht unter dem Suchtyp „Web“, zusammen mit allen anderen Klicks aus der Suche. Laut Google zählt ein Klick auf einen externen Link in einer Übersicht mit KI oder im KI-Modus als Klick. Eine Übersicht mit KI belegt eine einzige Position, alle Links darin erhalten dieselbe Position. Stellt jemand im KI-Modus eine Rückfrage, zählt sie als neue Suchanfrage. Filtern Sie beide Berichte auf die Länder, in denen Ihre Kunden wohnen.",
        },
        {
          t: "h3",
          text: "Bing Webmaster Tools",
        },
        {
          t: "p",
          text: "Den Bericht AI Performance (so heißt er in Microsofts englischer Ankündigung) hat Microsoft im Februar 2026 als öffentliche Vorschau eingeführt. Er zeigt, wie oft Inhalte Ihrer Website in Microsoft Copilot, in KI-Zusammenfassungen von Bing und bei ausgewählten Partnern als Quelle angezeigt wurden, wie viele verschiedene Seiten im Schnitt pro Tag zitiert wurden, Zitierungen je URL und als Stichprobe die Suchbegriffe, mit denen die KI Ihre Inhalte abgerufen hat (Grounding Queries). Laut Microsoft sagen die Zahlen nichts über Bedeutung, Rang oder Platzierung einer Seite in der Antwort aus. Seit März 2026 verknüpft der Bericht laut Search Engine Land Suchbegriffe und zitierte Seiten. Für welche Länder der Bericht gilt, nennt Microsoft in der Ankündigung nicht. Eine spätere Mitteilung, dass die Vorschau beendet ist, haben wir nicht gefunden.",
        },
        {
          t: "h3",
          text: "Web-Analyse",
        },
        {
          t: "p",
          text: "Google Analytics führt seit dem 13. Mai 2026 einen eigenen Kanal „KI-Assistent“ (englisch „AI Assistant“) in der Standard-Channelgruppe. Besuche, deren Verweisadresse zu einem erkannten KI-Assistenten passt, erhalten das Medium „ai-assistant“. Als Beispiele nennt Google auf seinen Hilfeseiten ChatGPT, Gemini, Claude, Copilot, Deepseek und Grok. Besuche aus Übersichten mit KI und KI-Modus gehören laut Google nicht zu diesem Kanal, sondern zur organischen Suche.",
        },
        {
          t: "p",
          text: "OpenAI hängt laut eigener Hilfe an Links in ChatGPT automatisch den Parameter utm_source=chatgpt.com an, damit Websites Besuche aus der ChatGPT-Suche in Werkzeugen wie Google Analytics auswerten können. Wer Matomo nutzt, hat seit Version 5.5.0 vom Oktober 2025 einen eigenen Kanaltyp für KI-Assistenten, der Bericht steht laut Matomos englischer Hilfe unter „Acquisition > AI Assistants“. Matomo weist darauf hin, dass die Zuordnung nur gelingt, wenn Verweisdaten übermittelt werden.",
        },
        {
          t: "h3",
          text: "Server-Protokolle",
        },
        {
          t: "p",
          text: "In den Zugriffsprotokollen Ihres Servers erkennen Sie Abrufe durch ChatGPT-User. Laut OpenAI ruft ChatGPT damit Seiten auf, wenn Nutzer eine Frage stellen, und crawlt nicht automatisch. Ein Abruf zeigt, dass Ihre Seite gelesen wurde, nicht, dass sie zitiert wurde. Welche Crawler es sonst gibt, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026#crawler-tabelle).",
        },
        {
          t: "table",
          caption: "Was Sie jeden Monat aus den Berichten notieren",
          head: ["Bericht", "Notieren", "Achten Sie auf"],
          rows: [
            ["Search Console, Leistungsbericht zu generativen KI-Funktionen", "Impressionen gesamt und je wichtiger Seite, gefiltert nach Land", "Welche Seiten erscheinen, ob Leistungsseiten dabei sind"],
            ["Search Console, Leistungsbericht", "Klicks im Suchtyp „Web“ für dieselben Seiten", "Steigen Impressionen ohne Klicks?"],
            ["Bing Webmaster Tools, AI Performance", "Zitierungen, zitierte Seiten, Grounding Queries mit Ortsbezug", "Für welche Suchbegriffe welche Seite zitiert wird"],
            ["Google Analytics oder Matomo", "Besuche im Kanal für KI-Assistenten, Quelle chatgpt.com, Anfragen aus diesen Besuchen", "Auf welchen Seiten die Besucher landen"],
          ],
        },
      ],
    },
    {
      id: "auswerten",
      title: "Schritt 5: die Ergebnisse lesen",
      answer:
        "Rechnen Sie am Monatsende wenige Zahlen mit klarer Basis, etwa „in x von 30 Antworten genannt“, und vergleichen Sie sie mit den Vormonaten. Kleine Ausschläge deuten Sie nicht, falsche Angaben dagegen gehen Sie sofort an.",
      blocks: [
        {
          t: "table",
          caption: "Monatszahlen aus dem Protokoll",
          head: ["Zahl", "So rechnen Sie", "Was sie beantwortet"],
          rows: [
            ["Nennungsquote", "Antworten mit Nennung geteilt durch alle Antworten auf Fragen ohne Ihren Namen", "Werden Sie genannt, wenn Neukunden suchen?"],
            ["Richtigkeit", "Nennungen mit vollständig richtigen Angaben geteilt durch alle Nennungen", "Nutzen Ihnen die Nennungen, oder schaden sie?"],
            ["Eigene Quelle", "Antworten mit Link auf Ihre Website geteilt durch alle Antworten mit Nennung", "Dient Ihre Website als Beleg?"],
            ["Häufige Fremdquellen", "Domains, die bei mehreren Fragen vorkommen", "Wo müssen Ihre Angaben stimmen?"],
            ["Wettbewerber", "Wer wird statt Ihnen genannt und wie oft", "Wie stehen Sie im Vergleich da?"],
          ],
        },
        {
          t: "table",
          caption: "Befund und nächster Schritt (unsere Einschätzung)",
          head: ["Befund", "Mögliche Ursache", "Nächster Schritt"],
          rows: [
            ["Genannt, aber mit falschen Angaben", "Eine Quelle führt alte Daten", "Quelle finden und dort korrigieren, siehe [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)"],
            ["Nie genannt, Wettbewerber regelmäßig", "Ihr Betrieb fehlt in den verlinkten Quellen, oder Ihre Seiten beantworten die Frage nicht", "Quellen der Wettbewerber prüfen, Leistungsseite um die Antwort ergänzen"],
            ["Genannt, aber nie mit eigener Website verlinkt", "Die Angaben stammen aus Verzeichnissen oder Portalen", "Fakten als Text auf die eigene Seite, siehe [klare, überprüfbare Fakten](/blog/ai-visibility-checklist#klare-fakten)"],
            ["Impressionen oder Besuche aus KI-Diensten steigen, Anfragen nicht", "Die Seiten liefern nicht, was Kunden zur Entscheidung brauchen", "Zielseiten öffnen, Ablauf, Preisrahmen und Kontaktweg ergänzen"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Kleine Betriebe haben kleine Zahlen. Ein Unterschied von ein oder zwei Nennungen zwischen zwei Monaten ist bei dieser Methode kein Trend. Achten Sie auf Richtungen über drei oder mehr Monate und auf Veränderungen nach einer konkreten Maßnahme.",
        },
      ],
    },
    {
      id: "monatsablauf",
      title: "Der Ablauf am Monatstermin",
      answer:
        "Legen Sie einen festen Tag im Monat fest und arbeiten Sie dieselben fünf Schritte in derselben Reihenfolge ab. Der Aufwand hängt vor allem von der Zahl der Fragen, Dienste und Durchläufe ab.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Vorbereiten", text: "Fragenliste öffnen, Protokoll für den Monat anlegen, Stammdaten zum Abgleich bereitlegen." },
            { title: "Fragen stellen", text: "Jede Frage je Dienst in getrennten neuen Unterhaltungen, Websuche ausgewählt, Bildschirmfoto speichern." },
            { title: "Protokoll ausfüllen", text: "Nennung, Art der Nennung, Angaben, eigene Seite, fremde Quellen, Wettbewerber." },
            { title: "Berichte ansehen", text: "Search Console, Bing Webmaster Tools und Web-Analyse für denselben Kalendermonat." },
            { title: "Eine Maßnahme festlegen", text: "Zuerst falsche Angaben, dann fehlende Einträge in wichtigen Quellen, dann fehlende Inhalte auf der Website. Notieren Sie Datum und Maßnahme, damit Sie die Wirkung später zuordnen können." },
          ],
        },
        {
          t: "p",
          text: "Ein Rechenbeispiel für den Aufwand: 15 Fragen, drei Dienste und zwei Durchläufe ergeben 90 Antworten. Wem das zu viel ist, der verringert die Zahl der Dienste und behält die Durchläufe, oder er wechselt die Dienste nach festem Plan von Monat zu Monat.",
        },
        {
          t: "p",
          text: "Ändern Sie das Fragenset höchstens einmal im Quartal und vermerken Sie jede Änderung. Vermerken Sie auch Änderungen bei den Anbietern: Den Kanal „KI-Assistent“ in Google Analytics gibt es erst seit Mai 2026, ältere Monate sind damit nicht direkt vergleichbar.",
        },
      ],
    },
    {
      id: "fehler",
      title: "Was die Messung verfälscht und welchen Versprechen Sie nicht glauben sollten",
      answer:
        "Verfälscht wird die Messung vor allem durch Personalisierung, wechselnde Fragen, einzelne Durchläufe und reine Namensfragen. Misstrauen Sie Angeboten, die Rangplätze in KI-Antworten oder garantierte Nennungen verkaufen.",
      blocks: [
        {
          t: "table",
          caption: "Typische Fehler beim Monitoring",
          head: ["Fehler", "Folge", "Besser"],
          rows: [
            ["Mit eigenem Konto und aktivierten Erinnerungen fragen", "Gespeicherte Erinnerungen können die Suche beeinflussen", "Temporärer Chat ohne Personalisierung"],
            ["Ort weglassen", "Der Standort Ihres Internetanschlusses kann das Ergebnis prägen", "Ort in jede Frage"],
            ["Jedes Mal anders formulieren", "Kein Vergleich über Monate möglich", "Wortlaut aus der Datei kopieren"],
            ["Nur ein Durchlauf je Frage", "Zufall wird als Trend gelesen", "Mehrere Durchläufe, Häufigkeit zählen"],
            ["Platz in der Liste messen", "Reihenfolgen wiederholen sich kaum", "Zählen, ob genannt, nicht an welcher Stelle"],
            ["Abruf in den Server-Protokollen als Zitat werten", "Sichtbarkeit wird überschätzt", "Mit Stichprobe und Berichten abgleichen"],
            ["Kanal „KI-Assistent“ als Maß für Übersichten mit KI lesen", "Diese Besuche fehlen dort", "Organische Suche und Search Console ansehen"],
          ],
        },
        {
          t: "note",
          label: "Was Sie nicht glauben sollten",
          text: "Google schreibt, dass kein Werkzeug eines Drittanbieters Zugang zu seinen internen Ranking- oder KI-Systemen hat. Microsoft schreibt, dass seine Zitierzahlen nichts über Rang oder Platzierung aussagen. Und nach der SparkToro-Untersuchung wiederholt sich schon die Liste genannter Marken kaum. Wer Ihnen einen festen Platz in ChatGPT oder einen „Rang“ in KI-Antworten verspricht, verspricht nach unserer Einschätzung etwas, das sich weder zusagen noch sauber messen lässt.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie oft sollte ich KI-Antworten zu meinem Betrieb prüfen?",
      a: "Einmal im Monat an einem festen Tag reicht für einen Betrieb. Häufiger bringt wenig, weil Antworten ohnehin schwanken und sich erst über mehrere Monate eine Richtung zeigt. Die Berichte von Search Console, Bing Webmaster Tools und Web-Analyse sammeln laufend Daten, Sie lesen sie zum selben Termin.",
    },
    {
      q: "Brauche ich ein kostenpflichtiges Werkzeug für das Monitoring?",
      a: "Für den Anfang nicht. Solche Werkzeuge stellen Testfragen in größerer Zahl, haben aber laut Google keinen Zugang zu Googles internen Systemen. Sinnvoll werden sie bei vielen Standorten oder vielen Fragen. Lassen Sie sich zeigen, welche Fragen wie oft gestellt werden, und verlangen Sie die Rohdaten.",
    },
    {
      q: "Warum sehe ich in Google Analytics keine Besuche aus ChatGPT?",
      a: "Entweder klickt niemand auf einen Link zu Ihnen, oder die Herkunft wird nicht übermittelt. OpenAI hängt an Links in ChatGPT den Parameter utm_source=chatgpt.com an, und Google Analytics ordnet erkannte KI-Assistenten seit Mai 2026 dem Kanal „KI-Assistent“ zu. Prüfen Sie Kanal und Quelle. Nennungen ohne Klick sehen Sie nur in Ihrer Stichprobe.",
    },
    {
      q: "Zählen Besuche aus Übersichten mit KI zum Kanal „KI-Assistent“?",
      a: "Nein. Laut Google gehören Besuche aus Übersichten mit KI und aus dem KI-Modus zur organischen Suche. Wie oft Links zu Ihrer Website dort angezeigt wurden, zeigt der Leistungsbericht zu generativen KI-Funktionen in der Search Console.",
    },
    {
      q: "Was tue ich, wenn eine KI falsche Öffnungszeiten nennt?",
      a: "Öffnen Sie die verlinkten Quellen und korrigieren Sie die Angabe dort, wo sie falsch steht: auf Ihrer Website, im Unternehmensprofil oder in einem Verzeichnis. Danach melden Sie den Fehler beim Anbieter und prüfen dieselbe Frage im nächsten Monat erneut. Den Ablauf beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026).",
    },
  ],
  sources: [
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "What are impressions, position, and clicks?", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7042828?hl=en" },
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Optimizing your website for generative AI features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "Why your Google Search results differ from others", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/12412910?hl=en" },
    { title: "Personalisierung und Google-Suchergebnisse", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/12410098?hl=de" },
    { title: "Understand your Business Profile performance and insights", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=en" },
    { title: "Standard-Channelgruppe", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/9756891?hl=de" },
    { title: "What's new in Google Analytics (Eintrag vom 13. Mai 2026)", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/9164320" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Temporary Chat FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/8914046-temporary-chat-faq" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Bing Webmaster Tools adds query-to-page mapping to AI Performance (24. März 2026)", publisher: "Search Engine Land", url: "https://searchengineland.com/bing-webmaster-tools-query-page-mapping-472320" },
    { title: "What are AI assistants in Matomo? (Stand 10. Juni 2026)", publisher: "Matomo", url: "https://matomo.org/faq/reports/what-are-ai-assistants-in-matomo/" },
    { title: "What's new in Matomo 5.5.0 (8. Oktober 2025)", publisher: "Matomo", url: "https://matomo.org/changelog/matomo-5-5-0/" },
    { title: "Evaluating Verifiability in Generative Search Engines (Findings of EMNLP 2023, DOI 10.18653/v1/2023.findings-emnlp.467)", publisher: "Liu, Zhang, Liang, arXiv", url: "https://arxiv.org/abs/2304.09848v2" },
    { title: "Non-Determinism of “Deterministic” LLM System Settings in Hosted Environments (Eval4NLP 2025)", publisher: "Atıl u. a., ACL Anthology", url: "https://aclanthology.org/2025.eval4nlp-1.12" },
    { title: "NEW Research: AIs are highly inconsistent when recommending brands or products (27. Januar 2026, mit Gumshoe)", publisher: "Rand Fishkin, SparkToro", url: "https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/" },
  ],
  related: [
    { slug: "ai-visibility-index-local-seo-metrik", title: "AI Visibility Index: Warum eine Zahl in die Irre führt" },
    { slug: "chatgpt-zitiert-lokale-unternehmen", title: "Wie ChatGPT lokale Unternehmen zitiert" },
    { slug: "bing-copilot-local-seo-2026", title: "Bing, Copilot und Local SEO" },
    { slug: "ai-falschangaben-korrigieren-2026", title: "KI-Falschangaben korrigieren" },
  ],
  cta: {
    title: "Wird Ihr Betrieb in KI-Antworten genannt und richtig dargestellt?",
    text: "Wir stellen typische Fragen Ihrer Kunden an ChatGPT, Google und Copilot, prüfen Nennungen, Angaben und verlinkte Quellen und sehen uns Ihre Search Console an. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
