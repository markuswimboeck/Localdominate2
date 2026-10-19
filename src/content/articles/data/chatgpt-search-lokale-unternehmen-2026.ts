import type { V4Article } from "../types";

const article: V4Article = {
  slug: "chatgpt-search-lokale-unternehmen-2026",
  lang: "de",
  seoTitle: "ChatGPT Search für lokale Unternehmen: Was belegt ist",
  seoDescription:
    "Wie lokale Betriebe in der ChatGPT-Suche erscheinen: was OpenAI dokumentiert, welche Crawler zählen, was offen ist und wie Sie Ihre Sichtbarkeit selbst prüfen.",
  h1: "ChatGPT Search für lokale Unternehmen: Was OpenAI dokumentiert und was Sie tun können",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, wie sie in den Antworten der ChatGPT-Suche auftauchen. Sie erfahren, was OpenAI selbst dazu schreibt, was nicht belegt ist, welche Schritte sich lohnen und wie Sie Ihre Sichtbarkeit ohne Spezialwerkzeuge prüfen.",
  answer:
    "ChatGPT sucht bei vielen Fragen live im Web und kann laut OpenAI Standortdaten nutzen, um lokale Ergebnisse zu liefern. Voraussetzung für die Aufnahme ist, dass der Crawler **OAI-SearchBot** Ihre Website lesen darf. Eine Platzierung garantiert OpenAI nicht. Welche Datenquellen lokale Einträge speisen, legt OpenAI nicht offen. Klare Fakten auf der Website und einheitliche Profile sind deshalb der sicherste Weg.",
  takeaways: [
    "OpenAI nennt eine technische Voraussetzung: OAI-SearchBot darf nicht per robots.txt gesperrt sein. Änderungen greifen laut OpenAI nach etwa 24 Stunden.",
    "GPTBot (Training) und OAI-SearchBot (Suche) werden getrennt gesteuert. Sie können das Training sperren und trotzdem in der Suche erscheinen.",
    "ChatGPT kann einen ungefähren Standort aus der IP-Adresse ableiten. Der genaue Gerätestandort ist optional und standardmäßig aus.",
    "Welche Anbieter die lokalen Einträge und Karten liefern, dokumentiert OpenAI nicht. Aussagen dazu sind Vermutungen.",
    "Besuche aus ChatGPT erkennen Sie in der Web-Analyse am Parameter utm_source=chatgpt.com.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-10",
  readingTime: 10,
  sections: [
    {
      id: "was-openai-dokumentiert",
      title: "Was OpenAI zu lokalen Ergebnissen dokumentiert",
      answer:
        "Laut OpenAI kann ChatGPT Standortinformationen nutzen, um lokale Ergebnisse wie Restaurants zu finden. Dafür reicht ein ungefährer Standort aus der IP-Adresse. In den Apps für iOS und Android können Antworten eine Karte enthalten. Quellen werden als Zitate verlinkt, und OpenAI weist selbst darauf hin, dass diese Ergebnisse auch falsch sein können.",
      blocks: [
        {
          t: "p",
          text: "Die Suche in ChatGPT gibt es seit dem 31. Oktober 2024. Seit Februar 2025 ist sie laut OpenAI überall dort ohne Anmeldung nutzbar, wo ChatGPT angeboten wird. Heute steht sie in allen Tarifen zur Verfügung, auch in der kostenlosen Version. Einen Überblick über die Änderungen in der lokalen Suche insgesamt gibt [Lokale Suchmaschinenoptimierung 2026](/blog/lokale-suchmaschinenoptimierung-2026). Hier geht es nur um ChatGPT.",
        },
        {
          t: "table",
          caption: "Was OpenAI in seiner Hilfe zur Suche schreibt",
          head: ["Thema", "Aussage von OpenAI", "Bedeutung für Ihren Betrieb"],
          rows: [
            ["Standort", "Ungefährer Standort aus der IP-Adresse; genauer Gerätestandort optional und standardmäßig aus", "Die meisten Nutzer bekommen Ergebnisse für ihre Stadt oder Region, nicht für ihre Straße"],
            ["Karte", "Auf iOS und Android können relevante Ergebnisse eine Karte enthalten", "Ihr Betrieb kann als Punkt auf einer Karte erscheinen, nicht nur als Textnennung"],
            ["Suchpartner", "Die Suche arbeitet teils mit anderen Suchanbietern zusammen und kann den ungefähren Standort an sie weitergeben", "Die Anbieter werden nicht namentlich genannt"],
            ["Reservierungen", "Je nach Restaurant Verfügbarkeiten von OpenTable, Resy oder Yelp; OpenTable weltweit, Resy nur in den USA", "Von den genannten Partnern ist laut OpenAI nur OpenTable ausdrücklich weltweit verfügbar"],
            ["Rangfolge", "Mehrere Faktoren, Platzierung nicht garantiert", "Niemand kann Ihnen einen festen Platz in ChatGPT verkaufen"],
            ["Genauigkeit", "Ergebnisse und Zitate können unvollständig, veraltet oder falsch sein", "Falsche Angaben über Ihren Betrieb sind möglich und müssen an der Quelle korrigiert werden"],
          ],
        },
        {
          t: "p",
          text: "Für Restaurants ist der Reservierungsweg der konkreteste Punkt. Branchenbezogene Hinweise stehen in [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants), für Betreiber im englischsprachigen Raum gibt es unsere [englische Seite für Restaurants](/industries/restaurants).",
        },
      ],
    },
    {
      id: "crawler",
      title: "Drei Crawler, drei Aufgaben",
      answer:
        "OpenAI unterscheidet drei Zugriffe: OAI-SearchBot für die Suche, GPTBot für mögliches Modelltraining und ChatGPT-User für Aktionen, die ein Nutzer auslöst. Jede Einstellung ist laut OpenAI unabhängig von den anderen. Für die Sichtbarkeit Ihres Betriebs in den Antworten der Suche zählt allein OAI-SearchBot.",
      blocks: [
        {
          t: "table",
          caption: "OpenAI-Crawler laut offizieller Dokumentation",
          head: ["User-Agent", "Zweck", "robots.txt", "Was ein Sperren bewirkt"],
          rows: [
            ["OAI-SearchBot", "Websites in der ChatGPT-Suche anzeigen", "Wird beachtet", "Keine Zusammenfassungen und Ausschnitte Ihrer Seiten in Antworten; ein reiner Link mit Titel bleibt möglich"],
            ["GPTBot", "Inhalte, die für das Training von Modellen genutzt werden können", "Wird beachtet", "Signal, dass Ihre Inhalte nicht für Training genutzt werden sollen; ohne Einfluss auf die Suche"],
            ["ChatGPT-User", "Abrufe, die ein Nutzer in ChatGPT oder einem GPT auslöst", "Gilt laut OpenAI möglicherweise nicht", "Entscheidet nicht über die Aufnahme in die Suche"],
          ],
        },
        {
          t: "p",
          text: "Daraus folgt die wichtigste Entscheidung: Wer in der ChatGPT-Suche erscheinen will, lässt **OAI-SearchBot** zu. Ob Sie GPTBot sperren, ist eine getrennte Frage zum Umgang mit Trainingsdaten. Laut OpenAI dauert es etwa 24 Stunden, bis eine Änderung der robots.txt für die Suche wirksam wird. Die IP-Adressen jedes Crawlers veröffentlicht OpenAI als JSON-Datei, damit Sie echte Zugriffe von gefälschten unterscheiden können.",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "In älteren Anleitungen, auch in einer früheren Version dieses Artikels, hieß es, alle drei Crawler müssten freigegeben werden. Das stimmt nicht. Für die Suche ist nur OAI-SearchBot maßgeblich. Die Steuerung aller KI-Crawler beschreibt [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
        },
      ],
    },
    {
      id: "robots-txt",
      title: "Zugriff in der robots.txt prüfen",
      answer:
        "Öffnen Sie ihredomain.de/robots.txt im Browser und suchen Sie nach OAI-SearchBot und nach Regeln für alle Crawler. Steht dort ein Disallow für Ihre Seiten, ist Ihre Website von Zusammenfassungen in der ChatGPT-Suche ausgeschlossen. Prüfen Sie zusätzlich Bot-Schutz und Firewall Ihres Hosters, denn sie können Crawler unabhängig davon abweisen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "robots.txt öffnen", text: "Rufen Sie die Datei im Browser auf. Achten Sie auf Blöcke mit „User-agent: OAI-SearchBot“ und „User-agent: *“." },
            { title: "Sperren erkennen", text: "„Disallow: /“ unter OAI-SearchBot oder unter „*“ ohne eigene Freigabe für OAI-SearchBot schließt die Suche aus." },
            { title: "Gewollte Einstellung setzen", text: "Für die Suche: OAI-SearchBot erlauben. Für Training: GPTBot nach eigener Entscheidung erlauben oder sperren." },
            { title: "Bot-Schutz prüfen", text: "Manche Hoster und CDN-Dienste blockieren KI-Crawler auf Netzwerkebene, unabhängig von der robots.txt. Prüfen Sie die Einstellungen oder fragen Sie Ihren Dienstleister." },
            { title: "Einen Tag warten und testen", text: "Nach etwa 24 Stunden eine Suche in ChatGPT stellen, bei der Ihre Website eine passende Quelle wäre." },
          ],
        },
        {
          t: "p",
          text: "Eine Konfiguration, die die Suche erlaubt und das Training ausschließt, besteht aus zwei Blöcken: „User-agent: OAI-SearchBot“ mit „Allow: /“ und darunter „User-agent: GPTBot“ mit „Disallow: /“. Wenn Sie eine einzelne Seite gar nicht in ChatGPT sehen wollen, auch nicht als Link, nennt OpenAI das noindex-Meta-Tag. Der Crawler muss die Seite dafür lesen dürfen, sonst sieht er das Tag nicht.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Der Hinweis zum Bot-Schutz ist unsere Erfahrung aus Prüfungen, keine Aussage von OpenAI. Eine korrekte robots.txt nützt nichts, wenn eine Firewall den Crawler vorher abweist. Ob Zugriffe ankommen, sehen Sie in den Server-Logs am User-Agent OAI-SearchBot.",
        },
      ],
    },
    {
      id: "nicht-dokumentiert",
      title: "Was OpenAI nicht dokumentiert",
      answer:
        "OpenAI nennt weder die Anbieter hinter lokalen Einträgen und Karten noch eine Liste von Rangfaktoren. Behauptungen wie „ChatGPT nutzt für lokale Daten vor allem Bing“ oder feste Mindestzahlen an Bewertungen sind nicht belegt. Behandeln Sie solche Aussagen als Vermutung, nicht als Regel.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und was OpenAI dazu sagt",
          head: ["Aussage", "Stand der offiziellen Dokumentation"],
          rows: [
            ["„Lokale Daten kommen aus Bing Places“", "OpenAI spricht von „anderen Suchanbietern“ und Partnern, ohne Namen für lokale Ergebnisse. Nicht belegt."],
            ["„Die Karten kommen von Mapbox“", "Wird in Fachmedien berichtet, gestützt auf Beiträge in sozialen Netzwerken. Keine Bestätigung von OpenAI."],
            ["„Ab 30 Bewertungen wird man empfohlen“", "Keine Quelle. OpenAI nennt keine Schwellenwerte."],
            ["„Eine llms.txt-Datei bringt Sie in ChatGPT“", "In den hier geprüften OpenAI-Dokumenten zur Suche kommt llms.txt nicht vor. Als Voraussetzung genannt wird nur der Zugriff für OAI-SearchBot."],
            ["„Bezahlte Platzierung ist möglich“", "Laut OpenAI ist die Platzierung nicht garantiert. Für Produktergebnisse schreibt OpenAI ausdrücklich, dass sie keine Anzeigen sind."],
          ],
        },
        {
          t: "p",
          text: "Diese Lücke ist der Grund, warum wir in diesem Artikel keine „Rankingfaktoren“ auflisten. Was bleibt, sind Maßnahmen, die unabhängig von der Datenquelle wirken: eine lesbare Website, gleiche Angaben überall und echte Bewertungen. Was llms.txt leisten kann und was nicht, steht in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026). Wie sich KI-Suche grundsätzlich von klassischer Suche unterscheidet, erklärt [KI-Suche und klassische Suche im Vergleich](/blog/ai-search-vs-traditional-search).",
        },
      ],
    },
    {
      id: "fakten-auf-der-website",
      title: "Klare Fakten auf der Website",
      answer:
        "ChatGPT fasst zusammen, was es auf Ihren Seiten findet. Je eindeutiger dort Leistung, Ort, Öffnungszeiten, Preisrahmen und Bedingungen als Text stehen, desto weniger muss das System raten. Beginnen Sie jede wichtige Seite mit einem Satz, der die Hauptfrage direkt beantwortet.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Eine Seite je Leistung** mit Ort im Text, nicht nur im Kartenbild. „Heizungsnotdienst in Augsburg und Umgebung, Mo bis So 7 bis 22 Uhr“ ist zitierfähig, „Ihr zuverlässiger Partner“ nicht.",
            "**Antwort zuerst.** Der erste Satz unter einer Überschrift beantwortet die Frage. Erklärungen folgen danach.",
            "**Bedingungen ausschreiben**: Hunde erlaubt, barrierefrei, Parkplätze, Kassenpatienten, Zahlungsarten, Einzugsgebiet.",
            "**Text statt PDF und Bild.** Speisekarten, Preislisten und Öffnungszeiten als HTML-Text, damit ein Crawler sie lesen kann.",
            "**Strukturierte Daten**, die exakt zum sichtbaren Text passen. Wie das geht, steht in [Schema Markup für Local SEO](/blog/schema-markup-local-seo).",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "OpenAI beschreibt nicht, wie Seiteninhalte gewichtet werden. Dass klare, textliche Antworten häufiger korrekt wiedergegeben werden, ist unsere Beobachtung aus Tests, kein dokumentierter Faktor. Welche Formulierungen Ihre Kunden verwenden, finden Sie mit [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
        },
      ],
    },
    {
      id: "einheitliche-daten",
      title: "Einheitliche Daten über alle Profile",
      answer:
        "Weil OpenAI die Quellen für lokale Einträge nicht nennt, sollten Ihre Angaben auf allen verbreiteten Plattformen stimmen: Google-Unternehmensprofil, Bing Places, Apple Business, wichtige Verzeichnisse und Branchenportale. Ein Widerspruch an einer einzigen Stelle, etwa eine alte Telefonnummer, kann direkt in einer Antwort landen.",
      blocks: [
        {
          t: "p",
          text: "Das ist eine Einschätzung, keine dokumentierte Regel. Sie folgt aber direkt aus der unklaren Datenlage: Wenn Sie nicht wissen, woher ein System Ihre Telefonnummer nimmt, muss sie überall richtig sein. Prüfen Sie Name, Adresse, Telefon, Öffnungszeiten und Website-Adresse auf jeder Plattform.",
        },
        {
          t: "table",
          caption: "Wo Sie Ihre Daten zuerst abgleichen",
          head: ["Plattform", "Warum", "Weiterlesen"],
          rows: [
            ["Google-Unternehmensprofil", "Ihr wichtigster eigener Eintrag mit Zeiten, Leistungen und Bewertungen", "[Unternehmensprofil optimieren](/blog/google-my-business-optimieren)"],
            ["Bing Places", "Eintrag für Bing und Bing Maps; Nutzung durch ChatGPT nicht dokumentiert", "[Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026)"],
            ["Apple Business", "Eintrag für Apple Karten, Safari und Spotlight", "[Apple Business und Local SEO](/blog/apple-business-connect-local-seo-2026)"],
            ["Verzeichnisse und Branchenportale", "Drittquellen, die Ihre Daten anzeigen und weitergeben können", "[NAP-Konsistenz](/blog/nap-konsistenz-local-seo)"],
          ],
        },
        {
          t: "p",
          text: "Für Hotels und Ferienwohnungen gehören die Buchungsportale dazu, deren Angaben oft von der eigenen Website abweichen. Mehr dazu in [Local SEO für Hotels](/blog/local-seo-hotels) und [SEO für Ferienwohnungen](/blog/seo-ferienwohnungen).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bewertungen auf den großen Plattformen",
      answer:
        "Für lokale Betriebe sagt OpenAI nicht, wie Bewertungen einfließen. Für Produkte schreibt OpenAI, dass Zusammenfassungen von Bewertungen auf öffentlichen Websites beruhen und nicht geprüft werden. Unsere Einschätzung: Für Betriebe gilt Ähnliches. Echte, laufende Bewertungen auf den Plattformen Ihrer Branche sind daher sinnvoll.",
      blocks: [
        {
          t: "p",
          text: "Wenn ChatGPT einen Betrieb beschreibt, fasst es oft zusammen, was Gäste oder Kunden loben und kritisieren. Diese Zusammenfassung kann nur so gut sein wie die öffentlichen Bewertungen. Ein Profil mit drei Bewertungen aus dem Jahr 2021 gibt wenig her, eines mit regelmäßigen, ausführlichen Bewertungen mehr.",
        },
        {
          t: "ul",
          items: [
            "Bitten Sie alle Kunden um eine Bewertung, nicht nur zufriedene. Ein fester Ablauf steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
            "Bieten Sie nichts dafür an. Belohnte oder gefilterte Bewertungen verstoßen gegen Googles Richtlinien und meist auch gegen das Wettbewerbsrecht.",
            "Beantworten Sie kritische Bewertungen sachlich. Eine gute Antwort ergänzt fehlende Fakten, die ein KI-System mitlesen kann. Hinweise dazu in [Negative Google-Bewertungen](/blog/negative-google-bewertungen).",
            "Achten Sie auf die Plattformen Ihrer Branche: Tripadvisor und Buchungsportale für Hotels, Arztportale für Praxen, Handwerkerportale für Betriebe.",
          ],
        },
      ],
    },
    {
      id: "sichtbarkeit-pruefen",
      title: "Sichtbarkeit manuell prüfen",
      answer:
        "Stellen Sie einmal im Monat dieselben fünf bis zehn Fragen mit Ortsangabe in ChatGPT, am besten in einem nicht angemeldeten Fenster. Notieren Sie, ob Ihr Betrieb genannt wird, mit welchen Angaben und welche Quellen verlinkt sind. Ergänzend zeigt Ihre Web-Analyse Besuche mit utm_source=chatgpt.com.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Fragen festlegen", text: "Formulieren Sie Fragen so, wie Kunden sie stellen: „Welcher Zahnarzt in Graz behandelt Angstpatienten?“, „Elektriker Notdienst Augsburg am Wochenende“. Immer mit Ort im Text, weil der IP-Standort Ihres Büros sonst das Ergebnis verzerrt." },
            { title: "Gleiche Bedingungen schaffen", text: "Neues Gespräch, ohne Gedächtnisfunktion oder in einem privaten Fenster ohne Anmeldung. So wirken frühere Gespräche nicht auf die Antwort." },
            { title: "Ergebnis festhalten", text: "Datum, Frage, genannt ja oder nein, genannte Angaben (Adresse, Zeiten, Preise), verlinkte Quellen. Ein Bildschirmfoto als Beleg." },
            { title: "Quellen auswerten", text: "Klicken Sie die Zitate an. Sie zeigen, welche Seiten ChatGPT für diese Frage nutzt, und damit, wo Ihre Angaben stimmen müssen." },
            { title: "Verlauf vergleichen", text: "Erst über mehrere Monate ergibt sich ein Bild. Einzelne Antworten schwanken, auch bei gleicher Frage." },
          ],
        },
        {
          t: "p",
          text: "Laut OpenAI hängt ChatGPT an Links in Suchantworten automatisch den Parameter „utm_source=chatgpt.com“ an. In Google Analytics oder einem anderen Werkzeug sehen Sie so, wie viele Besucher über ChatGPT kommen und was sie tun. Wie Sie solche Stichproben systematisch auswerten, beschreiben [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026) und [AI Visibility Index](/blog/ai-visibility-index-local-seo-metrik).",
        },
      ],
    },
    {
      id: "falschangaben-korrigieren",
      title: "Falsche Angaben korrigieren",
      answer:
        "Es gibt bei OpenAI kein Formular, mit dem Betriebe ihren Eintrag direkt bearbeiten. Korrigieren Sie falsche Angaben an der Quelle, die ChatGPT zitiert: Ihre Website, Ihr Profil oder das betreffende Verzeichnis. Zusätzlich können Sie eine falsche Antwort in ChatGPT mit dem Daumen-runter-Symbol melden.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Quelle finden", text: "Prüfen Sie die Zitate unter der falschen Antwort. Meist stammt die Angabe von einer bestimmten Seite." },
            { title: "Quelle berichtigen", text: "Eigene Website und Profile sofort anpassen, bei fremden Verzeichnissen eine Korrektur beantragen." },
            { title: "Antwort melden", text: "Unter einer Antwort lässt sich über das Daumen-runter-Symbol Feedback geben. Für rechtliche Probleme nennt OpenAI ein eigenes Meldeformular." },
            { title: "Erneut prüfen", text: "Nach einigen Tagen dieselbe Frage stellen und das Ergebnis mit dem Bildschirmfoto vergleichen." },
          ],
        },
        {
          t: "p",
          text: "Den vollständigen Ablauf beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026).",
        },
      ],
    },
    {
      id: "reihenfolge",
      title: "Die Schritte in sinnvoller Reihenfolge",
      answer:
        "Zuerst die Technik, weil ohne Zugriff für OAI-SearchBot nichts anderes wirkt. Danach die Fakten auf der Website, dann die Daten in den Profilen und die Bewertungen. Zuletzt richten Sie eine monatliche Prüfung ein, damit Sie Veränderungen und falsche Angaben früh sehen und an der Quelle beheben können.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Crawler-Zugriff sichern", text: "OAI-SearchBot in robots.txt und Bot-Schutz freigeben, GPTBot nach eigener Entscheidung." },
            { title: "Kernseiten schärfen", text: "Startseite, Leistungsseiten und Kontaktseite mit Antwort im ersten Satz, Ort und Bedingungen als Text." },
            { title: "Profile abgleichen", text: "Google, Bing Places, Apple Business und die wichtigsten Verzeichnisse auf denselben Stand bringen." },
            { title: "Bewertungen als Ablauf", text: "Alle Kunden fragen, nichts dafür anbieten, jede Bewertung beantworten." },
            { title: "Monatlich prüfen", text: "Feste Fragenliste, Ergebnisse dokumentieren, utm_source=chatgpt.com in der Web-Analyse beobachten." },
          ],
        },
        {
          t: "p",
          text: "Die Grundlagen der lokalen Suche, auf denen das alles aufbaut, stehen im [Local SEO Leitfaden](/blog/ultimate-guide-local-seo). Wer ohne Budget anfangen will, findet in [Kostenloses SEO](/blog/kostenloses-seo-guide) die Schritte, die nur Zeit kosten.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie komme ich mit meinem Betrieb in die ChatGPT-Suche?",
      a: "Laut OpenAI kann jede öffentliche Website in der Suche erscheinen, wenn OAI-SearchBot sie lesen darf. Eine Platzierung ist nicht garantiert. Danach helfen klare Fakten auf der Website, einheitliche Angaben in Ihren Profilen und echte Bewertungen.",
    },
    {
      q: "Muss ich GPTBot erlauben, um in ChatGPT zu erscheinen?",
      a: "Nein. GPTBot betrifft laut OpenAI Inhalte für mögliches Modelltraining. Für die Suche zählt OAI-SearchBot. Beide Einstellungen sind unabhängig voneinander, Sie können das Training sperren und die Suche erlauben.",
    },
    {
      q: "Nutzt ChatGPT für lokale Ergebnisse Bing oder Google Maps?",
      a: "OpenAI schreibt nur, dass die Suche teils mit anderen Suchanbietern zusammenarbeitet, und nennt für lokale Ergebnisse keine Namen. Alle Aussagen über bestimmte Anbieter sind Vermutungen. Pflegen Sie deshalb alle verbreiteten Profile.",
    },
    {
      q: "Wie lange dauert es, bis eine Änderung der robots.txt wirkt?",
      a: "Für die Suche nennt OpenAI etwa 24 Stunden, bis seine Systeme eine geänderte robots.txt berücksichtigen. Wann neue Inhalte danach in Antworten auftauchen, gibt OpenAI nicht an.",
    },
    {
      q: "Kann ich messen, wie viele Kunden über ChatGPT kommen?",
      a: "Teilweise. ChatGPT hängt laut OpenAI an Links den Parameter utm_source=chatgpt.com an, den Sie in der Web-Analyse auswerten können. Nennungen ohne Klick sehen Sie dort nicht, dafür brauchen Sie regelmäßige Stichproben mit festen Fragen.",
    },
    {
      q: "Kann ich mir eine bessere Position in ChatGPT kaufen?",
      a: "Nein. OpenAI schreibt, dass die Platzierung nicht garantiert ist, und für Produktergebnisse ausdrücklich, dass sie keine Anzeigen sind. Wer Ihnen einen festen Platz in ChatGPT verspricht, verspricht etwas, das OpenAI nicht anbietet.",
    },
  ],
  sources: [
    { title: "Search in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-search-in-chatgpt" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Introducing ChatGPT search (31. Oktober 2024, mit Updates)", publisher: "OpenAI", url: "https://openai.com/index/introducing-chatgpt-search/" },
    { title: "Shopping with ChatGPT Search", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/11128490" },
    { title: "Reporting content in ChatGPT and OpenAI platforms", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/10245791-reporting-content-in-chatgpt-and-openai-platforms" },
  ],
  related: [
    { slug: "ai-falschangaben-korrigieren-2026", title: "KI-Falschangaben korrigieren" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern: GPTBot, ClaudeBot und Co." },
    { slug: "ai-search-vs-traditional-search", title: "KI-Suche und klassische Suche im Vergleich" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
  ],
  cta: {
    title: "Wie erscheint Ihr Betrieb in ChatGPT?",
    text: "Wir prüfen, ob OAI-SearchBot Ihre Website lesen darf, was ChatGPT zu Ihrem Betrieb antwortet und ob Website und Profile übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
