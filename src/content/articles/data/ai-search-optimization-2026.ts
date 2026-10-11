import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-search-optimization-2026",
  lang: "de",
  seoTitle: "AI Search Optimization 2026: Was belegt ist, was nicht",
  seoDescription:
    "AI Search Optimization ehrlich erklärt: was Google, OpenAI und Microsoft dokumentieren, was Agenturen versprechen und ein Arbeitsplan für kleine Betriebe.",
  h1: "AI Search Optimization 2026: Was Anbieter dokumentieren, was Agenturen versprechen und was kleine Betriebe wirklich tun sollten",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber kleiner Betriebe, denen KI-Suchoptimierung, GEO oder AEO als neues Paket angeboten wird. Sie bekommen eine Gegenüberstellung von Anbieter-Dokumentation und Agenturversprechen, einen Arbeitsplan für zwölf Monate und eine Liste, womit Sie aufhören können. Welche KI-Suchen es überhaupt gibt, zeigt der [Überblick zur KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen), wie Sie einzelne Seiten schreiben, [Website-Content für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen).",
  answer:
    "AI Search Optimization heißt 2026: Website und Profile so pflegen, dass Suchsysteme mit KI sie lesen, verstehen und als Quelle nutzen können. Google schreibt, Optimierung für generative KI-Suche sei **weiterhin SEO**. Microsoft spricht von GEO und betont, dass nichts eine Auswahl garantiert. Für einen kleinen Betrieb bedeutet das: Zugang sichern, Fakten klar schreiben, Profile pflegen, messen. Neue Dateien, Tricks oder garantierte Nennungen gehören nicht dazu.",
  takeaways: [
    "Google schreibt, Optimierung für generative KI-Suche sei Optimierung für das Sucherlebnis und damit weiterhin SEO. Zusätzliche Anforderungen für Übersicht mit KI und KI-Modus nennt Google nicht.",
    "OpenAI, Perplexity und Anthropic dokumentieren vor allem den Zugang für ihre Crawler, Microsoft zusätzlich Hinweise zur Gliederung und einen Bericht über Zitierungen. Keiner nennt Rangfaktoren, keiner garantiert eine Nennung.",
    "Versuche, KI-Antworten zu manipulieren, zählen bei Google seit Mai 2026 ausdrücklich als Spam. Bing hat laut einem Bericht von Search Engine Journal einen eigenen Abschnitt zu Prompt Injection. Unechte Erwähnungen helfen laut Google weniger, als es scheint.",
    "Ein realistischer Plan für einen kleinen Betrieb: ein Monat Bestandsaufnahme, zwei Monate Website und Profile, danach monatliche Pflege und Messung, Bilanz nach einem Jahr.",
    "Aufhören können Sie mit FAQ-Markup für Rich Results, Ortslisten im Text, Seiten je Nachbarort ohne Standort, Massentexten aus der KI und neuen Datumsangaben ohne echte Änderung.",
  ],
  publishedAt: "2026-02-16",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "begriff",
      title: "Was AI Search Optimization 2026 bedeutet",
      answer:
        "AI Search Optimization meint alle Maßnahmen, damit Suchsysteme mit KI Ihre Inhalte finden, richtig wiedergeben und als Quelle verlinken. Andere Namen dafür sind GEO, AEO oder AIO, und Google ordnet das ausdrücklich als weiterhin SEO ein.",
      blocks: [
        {
          t: "p",
          text: "Die Namen wechseln, die Sache bleibt. Google erwähnt in seinem Leitfaden zu generativen KI-Funktionen die Begriffe AEO (Answer Engine Optimization) und GEO (Generative Engine Optimization) und schreibt: Optimierung für generative KI-Suche ist Optimierung für das Sucherlebnis und damit weiterhin SEO. Die bewährten Grundsätze blieben relevant.",
        },
        {
          t: "p",
          text: "Microsoft hat GEO im Februar 2026 laut einem Bericht von Search Engine Journal in die Bing Webmaster Guidelines aufgenommen. Gemeint ist dort die Eignung von Inhalten, in KI-Antworten als Grundlage und Verweis zu dienen. Zitate garantiere GEO so wenig, wie SEO Rankings garantiere. Ein Produktmanager von Microsoft Bing hatte schon im Oktober 2025 geschrieben: Ob man es GEO, AIO oder SEO nenne, Sichtbarkeit sei alles.",
        },
        {
          t: "p",
          text: "Übrig bleiben drei Ebenen, an denen ein Betrieb arbeiten kann: **Zugang** (dürfen die Systeme Ihre Seiten lesen?), **Inhalt** (stehen die Antworten auf Kundenfragen verständlich da?) und **Belege außerhalb der Website** (Profile, Bewertungen, Erwähnungen). Woher der Begriff GEO stammt und was die Studie von 2023 gemessen hat, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization#herkunft).",
        },
        {
          t: "note",
          label: "Abgrenzung",
          text: "Dieser Artikel prüft Versprechen und plant die Arbeit. Welche Systeme es in Deutschland, Österreich und der Schweiz gibt und woher sie ihre Angaben nehmen, steht im [Überblick zur KI-Suche](/blog/ai-suche-lokale-unternehmen). Wie Sie Leistungsseiten, Kontakt und Preise schreiben, steht in [Website-Content für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen).",
        },
      ],
    },
    {
      id: "was-dokumentiert-ist",
      title: "Was die Anbieter selbst dokumentieren",
      answer:
        "Google beschreibt am ausführlichsten, was zählt: indexierbare Seiten mit Snippet, Inhalte über Allgemeinwissen hinaus, aktuelle Unternehmensprofile und keine Sonderdateien. OpenAI, Perplexity und Anthropic dokumentieren vor allem ihre Crawler, Microsoft zusätzlich Hinweise zur Gliederung und einen Bericht über Zitierungen.",
      blocks: [
        {
          t: "table",
          caption: "Was die Anbieter für Website-Betreiber dokumentieren (Stand 11. Oktober 2026)",
          head: ["Anbieter", "Empfohlen oder verlangt", "Nicht nötig oder nicht zugesagt"],
          rows: [
            ["Google", "Seite indexiert und mit Snippet anzeigbar; Crawling auch bei CDN und Hosting erlauben; wichtige Inhalte als Text; strukturierte Daten passend zum sichtbaren Text; Unternehmensprofil aktuell; Inhalte mit eigener Erfahrung, die über Allgemeinwissen hinausgehen", "Keine zusätzlichen Anforderungen, keine KI-Textdateien, kein spezielles Schema, kein Zerstückeln, keine ideale Seitenlänge; kein Drittanbieter hat Zugang zu Googles internen Ranking- oder KI-Systemen"],
            ["OpenAI", "OAI-SearchBot nicht sperren; Barrierefreiheit hilft laut OpenAI dem ChatGPT-Agenten in Atlas, Websites besser zu verstehen", "Rangfolge nach mehreren Faktoren, keine Liste; Platzierung nicht garantiert"],
            ["Microsoft", "Klare Überschriften, Listen und Tabellen, Sätze, die auch allein verständlich sind; wichtige Antworten nicht in Tabs oder Aufklappmenüs verstecken, Kerninformationen nicht nur in Bilder oder PDFs legen", "Nichts garantiert eine Auswahl; der Bericht AI Performance zeigt keine Position in der Antwort"],
            ["Perplexity", "PerplexityBot zulassen; er soll Websites in den Suchergebnissen anzeigen und verlinken", "Keine Rangfaktoren in den geprüften Seiten"],
            ["Anthropic", "Claude-SearchBot und Claude-User zulassen; eine Sperre kann laut Anthropic die Sichtbarkeit in Suchergebnissen verringern", "Keine Rangfaktoren in den geprüften Seiten"],
          ],
        },
        {
          t: "p",
          text: "Zwei Regeln von 2026 betreffen alle, die „optimieren“ wollen. Google hat im Mai 2026 klargestellt, dass seine Spam-Richtlinien auch für generative KI-Antworten in der Suche gelten; der Versuch, solche Antworten zu manipulieren, zählt ausdrücklich als Spam. Bing hat laut Search Engine Journal einen eigenen Abschnitt zu Prompt Injection und KI-Manipulation in seine Richtlinien aufgenommen, also zu Versuchen, die Sprachmodelle von Bing und Copilot zu beeinflussen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Dokumentation ist knapp, aber die Richtung ist eindeutig: Lesbarkeit, Echtheit, Aktualität. Wer darüber hinaus „Geheimwissen“ über KI-Rankings verkauft, kann es nicht aus den Quellen der Anbieter haben.",
        },
      ],
    },
    {
      id: "versprechen",
      title: "Typische Versprechen im Abgleich mit der Dokumentation",
      answer:
        "Viele Angebote rund um KI-Suche versprechen Dinge, die die Anbieter ausschließen oder nirgends dokumentieren. Prüfen Sie jede Maßnahme mit einer Frage: Welche Quelle eines Anbieters stützt sie?",
      blocks: [
        {
          t: "table",
          caption: "Versprechen und was die Quellen dazu sagen",
          head: ["Versprechen", "Was die Quellen sagen", "Einordnung"],
          rows: [
            ["„Wir bringen Ihren Betrieb in ChatGPT.“", "OpenAI: Eine Platzierung ist nicht garantiert. Microsoft: Nichts garantiert eine Auswahl", "Zusagen kann das niemand außerhalb der Anbieter"],
            ["„Unser Werkzeug misst Ihre KI-Sichtbarkeit mit Googles Daten.“", "Google: Kein Drittanbieter hat Zugang zu internen Ranking- oder KI-Systemen; zum Messen nennt Google den Bericht in der Search Console", "Werkzeuge liefern Stichproben, keine Innensicht"],
            ["„Wir kennen die Rangfaktoren von ChatGPT.“", "OpenAI nennt nur „mehrere Faktoren“ für relevante, verlässliche Informationen", "Listen mit Gewichtungen sind Vermutungen"],
            ["„Wir verbreiten Erwähnungen Ihres Betriebs in Foren und Portalen.“", "Google: Unechte Erwähnungen im Netz helfen weniger, als es scheinen mag", "Echte Berichte von Presse, Verbänden oder Partnern sind etwas anderes"],
            ["„Versteckte Hinweise im Code sagen der KI, Sie zu empfehlen.“", "Google: Manipulation generativer Antworten ist Spam, versteckter Text verstößt gegen die Richtlinien. Bing hat laut Bericht von Search Engine Journal einen eigenen Abschnitt zu Prompt Injection", "Ein Risiko für die ganze Website, keine Abkürzung"],
            ["„Wir schreiben mit KI hundert Ratgeberseiten im Monat.“", "Google: Viele Seiten mit generativer KI ohne Mehrwert sind Missbrauch skalierter Inhalte; KI-Texte vor der Veröffentlichung auf Fehler prüfen", "Wenige Seiten aus eigener Erfahrung sind mehr wert"],
            ["„Längere Texte werden öfter zitiert.“", "Google: keine ideale Seitenlänge, keine magische Wortzahl", "Länge ist kein Ziel"],
            ["„Wir aktualisieren regelmäßig das Datum Ihrer Seiten.“", "Google fragt in seinen Leitlinien kritisch, ob Daten geändert werden, damit Seiten frisch wirken, obwohl sich der Inhalt kaum geändert hat", "Ein neues Datum nur bei echter Änderung"],
          ],
        },
        {
          t: "p",
          text: "Weitere verbreitete Aussagen wie „plus 40 Prozent Sichtbarkeit durch GEO“ oder llms.txt als Pflicht ordnet [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization#belege-und-versprechen) ein. Die Datei selbst behandelt [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "klicks",
      title: "Was KI-Antworten mit Ihren Klicks machen: zwei Lesarten",
      answer:
        "Belastbare Zahlen für lokale Betriebe in Deutschland, Österreich und der Schweiz haben wir nicht gefunden. Eine US-Studie von Pew Research fand weniger Klicks auf Treffer, wenn eine KI-Zusammenfassung erschien, Google spricht dagegen von relativ stabilen Klickmengen und hochwertigeren Klicks.",
      blocks: [
        {
          t: "table",
          caption: "Zwei Quellen, zwei Blickwinkel",
          head: ["Quelle", "Was gemessen oder gesagt wurde", "Grenzen"],
          rows: [
            ["Pew Research Center, 22. Juli 2025", "Auf Seiten mit KI-Zusammenfassung klickten Nutzer in 8 Prozent der Besuche auf einen normalen Treffer, ohne Zusammenfassung in 15 Prozent. Auf einen Link in der Zusammenfassung selbst klickten sie in 1 Prozent der Besuche", "900 Erwachsene in den USA, Browserdaten aus März 2025; keine eigene Auswertung lokaler Suchen"],
            ["Google, 6. August 2025 (Liz Reid, Leiterin der Google-Suche)", "Die gesamte organische Klickmenge von der Google-Suche zu Websites sei im Jahresvergleich relativ stabil, die durchschnittliche Qualität der Klicks gestiegen", "Keine Zahlen je Branche oder Land; Google hält Studien Dritter mit starken Rückgängen für methodisch schwach"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Beide Aussagen können zugleich stimmen, weil sie Verschiedenes messen. Für einen Betrieb zählen ohnehin nicht Klicks, sondern Anrufe, Anfragen und Buchungen. Halten Sie diese Zahlen jeden Monat fest, dann sehen Sie, ob KI-Antworten bei Ihnen etwas verändern.",
        },
      ],
    },
    {
      id: "arbeitsplan",
      title: "Ein realistischer Arbeitsplan für zwölf Monate",
      answer:
        "Für einen kleinen Betrieb genügt ein Plan in drei Phasen: im ersten Monat Bestandsaufnahme, im zweiten und dritten Monat Website und Profile, danach feste monatliche Pflege und Messung. Die meiste Arbeit fällt einmal an, der laufende Teil passt nach unserer Einschätzung in einen festen Termin pro Monat.",
      blocks: [
        {
          t: "table",
          caption: "Arbeitsplan für einen lokalen Betrieb (Einschätzung)",
          head: ["Zeitraum", "Aufgaben", "Ergebnis"],
          rows: [
            ["Monat 1: Bestandsaufnahme", "robots.txt und Bot-Schutz prüfen; Indexierung der wichtigsten Seiten; Einstellung für generative KI-Funktionen in der Search Console; Bing Webmaster Tools einrichten; zehn typische Kundenfragen in Google, ChatGPT, Copilot und Perplexity stellen und mit Datum festhalten", "Ausgangslage, an der Sie später messen"],
            ["Monat 2: Website", "Eine Seite je Hauptleistung mit Ort, Ablauf, Preisrahmen und Bedingungen; Kontaktseite mit allen Zeiten; häufige Kundenfragen als Text auf den passenden Seiten", "Seiten, die Kundenfragen direkt beantworten"],
            ["Monat 3: Profile und Einträge", "Unternehmensprofil vervollständigen; Apple Business und Bing Places abgleichen; die wichtigsten Verzeichnisse Ihrer Branche korrigieren", "Überall dieselben Stammdaten"],
            ["Ab Monat 4: laufend", "Alle Kunden um Rezensionen bitten und jede beantworten; pro Monat ein Inhalt aus eigener Erfahrung, etwa die Antwort auf eine häufige Kundenfrage; Profile bei Änderungen sofort anpassen", "Wachsende, echte Belege"],
            ["Jeden Monat", "Bericht für generative KI-Funktionen in der Search Console, AI Performance in den Bing Webmaster Tools, Besuche mit utm_source=chatgpt.com, Stichprobe wiederholen, Anfragen zählen", "Ein Verlauf statt einer Momentaufnahme"],
            ["Monat 12", "Vergleich mit der Ausgangslage, Entscheidung über das nächste Jahr", "Klarheit, was sich lohnt"],
          ],
        },
        {
          t: "p",
          text: "Die technischen Schritte beschreiben [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026) und die [Checkliste zur KI-Sichtbarkeit](/blog/ai-visibility-checklist). Für die Stichprobe gibt es eine Vorlage in [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026). Für die Messung nennt Google den Bericht für generative KI-Funktionen in der Search Console, der seit dem 31. August 2026 allen Websites zur Verfügung steht und Impressionen zeigt. Klicks aus den KI-Funktionen zählt die Search Console im Leistungsbericht unter dem Suchtyp „Web“ mit, zusammen mit den normalen Treffern. Seit demselben Tag gibt es in den Einstellungen der Search Console für alle Websites die Wahl, ob die Website in den generativen KI-Funktionen der Suche erscheint.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Einen Zeitpunkt, ab dem sich Nennungen einstellen, nennt kein Anbieter. Planen Sie deshalb nicht mit Ergebnissen nach wenigen Wochen, sondern bewerten Sie nach einem Jahr, was sich bei Anfragen und Nennungen verändert hat.",
        },
      ],
    },
    {
      id: "dienstleister-pruefen",
      title: "Selbst machen oder beauftragen: sieben Fragen an einen Dienstleister",
      answer:
        "Vieles aus dem Arbeitsplan kann ein Betrieb selbst erledigen, Technik und Messung gibt man oft ab. Wer beauftragt, sollte vorher klären, worauf sich jede Maßnahme stützt und wie Sie das Ergebnis selbst prüfen können.",
      blocks: [
        {
          t: "ol",
          items: [
            "**Welche Quelle stützt diese Maßnahme?** Ein Link auf die Dokumentation von Google, OpenAI oder Microsoft ist eine Antwort, „Erfahrungswerte“ allein sind keine.",
            "**Was genau wird zugesagt?** Seriös sind Leistungen wie geprüfte Seiten oder korrigierte Einträge, nicht Nennungen oder Plätze in KI-Antworten.",
            "**Wo sehe ich das Ergebnis selbst?** Search Console, Bing Webmaster Tools und Ihre Web-Analyse sollten Sie mit eigenem Zugang öffnen können.",
            "**Woher kommen die Messwerte?** Stichproben sind in Ordnung, wenn Fragen, Datum, Ort und Gerät offenliegen.",
            "**Wer schreibt die Texte, und wer prüft sie?** Google nennt es entscheidend, Inhalte aus der KI vor der Veröffentlichung von Hand auf Richtigkeit zu prüfen. Fachliche Aussagen sollte jemand aus Ihrem Betrieb freigeben.",
            "**Entstehen Seiten für Orte ohne Standort?** Dann fragen Sie, wie sich diese Seiten von Brückenseiten unterscheiden, die Google als Spam einordnet.",
            "**Wem gehören die Zugänge?** Unternehmensprofil, Apple Business, Search Console und Bing Webmaster Tools sollten auf Ihren Betrieb laufen, damit Sie nach Vertragsende weiterarbeiten können.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Gute Dienstleister beantworten diese Fragen gern, weil ihre Arbeit dadurch prüfbar wird. Ausweichende Antworten bei Frage 1 oder 2 sind ein Warnzeichen.",
        },
      ],
    },
    {
      id: "aufhoeren",
      title: "Womit Sie aufhören können",
      answer:
        "Einige verbreitete Maßnahmen bringen laut Dokumentation nichts mehr oder verstoßen gegen Richtlinien. Gleichen Sie die folgende Liste mit Ihrer Website, Ihrem Profil und dem Angebot Ihres Dienstleisters ab.",
      blocks: [
        {
          t: "table",
          caption: "Stoppliste mit Begründung",
          head: ["Maßnahme", "Warum Sie aufhören können", "Quelle"],
          rows: [
            ["FAQ-Markup, damit Fragen als Rich Result erscheinen", "Google zeigt FAQ-Rich-Results seit dem 7. Mai 2026 nicht mehr. Fragen und Antworten als Text auf der Seite bleiben für Leser nützlich", "Google Search Central, Dokumentationsänderungen"],
            ["Listen von Städten und Stadtteilen im Text oder im Fußbereich", "Google nennt Textblöcke mit Städten und Regionen, für die eine Seite ranken soll, als Beispiel für Keyword-Stuffing", "Spam-Richtlinien"],
            ["Eine Seite je Nachbarort ohne Standort dort", "Seiten für Städte oder Regionen, die Nutzer zu einer Seite leiten, nennt Google als Beispiel für Brückenseiten", "Spam-Richtlinien"],
            ["Massenhaft erzeugte Texte aus der KI", "Viele Seiten mit generativer KI ohne Mehrwert für Nutzer gelten als Missbrauch skalierter Inhalte", "Spam-Richtlinien, Leitfaden zu KI-Inhalten"],
            ["Datum ändern, ohne den Inhalt zu ändern", "Google nennt das in seinen Leitlinien für hilfreiche Inhalte als Warnzeichen", "Leitfaden für hilfreiche Inhalte"],
            ["Keywords-Meta-Tag pflegen", "Die Google-Suche nutzt das Keywords-Meta-Tag nicht", "SEO-Leitfaden für Einsteiger"],
            ["Mindestwortzahlen je Seite", "Laut Google gibt es keine magische Wortzahl und keine ideale Seitenlänge", "SEO-Leitfaden, Leitfaden zu generativen KI-Funktionen"],
            ["Ortsnamen oder Werbebegriffe im Namen des Unternehmensprofils", "Dem Namen dürfen laut Google keine unnötigen Informationen hinzugefügt werden", "Richtlinien für das Unternehmensprofil"],
            ["Rezensionen gegen Anreize oder nur von zufriedenen Kunden", "Google verbietet Inhalte, die aufgrund eines Anreizes veröffentlicht wurden, und das gezielte Bitten um positive Rezensionen", "Richtlinien für Nutzerbeiträge in Google Maps"],
            ["KI-Textdateien für Google", "Laut Google für die Google-Suche nicht nötig, ohne positive oder negative Wirkung auf Sichtbarkeit oder Rankings", "Dokumentationsänderung vom 15. Juni 2026"],
          ],
        },
        {
          t: "p",
          text: "Mit der frei gewordenen Zeit lohnt sich, was in der Dokumentation tatsächlich steht: Seiten, die Kundenfragen beantworten, ein gepflegtes Profil und echte Bewertungen. Wie Sie Bewertungen regelkonform einholen, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Ist AI Search Optimization etwas anderes als SEO?",
      a: "Google sagt im Kern nein: Optimierung für generative KI-Suche sei Optimierung für das Sucherlebnis und damit weiterhin SEO. Bei anderen Anbietern kommen einzelne Punkte hinzu, etwa der Zugang für deren Crawler oder die Bing Webmaster Tools. Unsere Einschätzung: eine Erweiterung der lokalen Suchmaschinenoptimierung, keine eigene Disziplin.",
    },
    {
      q: "Lohnt sich AI Search Optimization für einen kleinen Betrieb?",
      a: "Die Grundlagen ja, weil sie zugleich der normalen Suche und Ihren Kunden helfen: lesbare Seiten, klare Fakten, gepflegte Profile. Zusatzpakete mit garantierten Nennungen, Sonderdateien für Google oder massenhaft erzeugten Texten nicht, weil die Anbieter solche Garantien ausschließen oder die Maßnahmen als nicht nötig oder als Spam einordnen.",
    },
    {
      q: "Wie schnell wirkt AI Search Optimization?",
      a: "Dafür nennt kein Anbieter eine Zeit. Technische Fehler wie ein gesperrter Crawler lassen sich schnell beheben; OpenAI nennt etwa 24 Stunden, bis eine geänderte robots.txt berücksichtigt wird. Ob und wann Ihr Betrieb genannt wird, zeigt nur eine Messung über Monate.",
    },
    {
      q: "Woran erkenne ich ein unseriöses Angebot?",
      a: "An Garantien für Nennungen oder Plätze, an angeblich bekannten Rangfaktoren für ChatGPT, an versteckten Anweisungen für KI-Systeme, an Seiten für jeden Nachbarort und an Werkzeugen, die mit Googles internen Daten werben. Google schreibt ausdrücklich, kein Drittanbieter habe Zugang zu seinen internen Ranking- oder KI-Systemen.",
    },
    {
      q: "Muss ich meine Website für KI-Suchen neu bauen lassen?",
      a: "In der Regel nicht. Google schreibt, Sie müssten nicht eigens für KI schreiben und Inhalte nicht zerstückeln. Prüfen Sie zuerst, ob Ihre wichtigsten Seiten indexiert sind, ob die Fakten als Text dastehen und ob die Crawler Zugang haben. Ein Neubau lohnt sich erst, wenn Inhalte nur in Bildern, PDFs oder hinter Anmeldungen stecken.",
    },
  ],
  sources: [
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Spam policies for Google web search (Stand 28. August 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { title: "Google Search Central: Documentation updates (Einträge vom 8. und 15. Mai sowie 15. Juni 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Creating helpful, reliable, people-first content (Stand 5. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { title: "Google Search’s guidance on using generative AI content on your website (Stand 1. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" },
    { title: "SEO Starter Guide (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139" },
    { title: "Search generative AI control", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16908024" },
    { title: "Richtlinien für die Präsentation Ihres Unternehmens auf Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Richtlinien für Nutzerbeiträge in Maps)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)", publisher: "Microsoft Advertising Blog", url: "https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Bing Adds GEO to Official Guidelines, Expands AI Abuse Definitions (27. Februar 2026)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442" },
    { title: "Perplexity Crawlers", publisher: "Perplexity Docs", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/8896518" },
    { title: "Google users are less likely to click on links when an AI summary appears in the results (22. Juli 2025)", publisher: "Pew Research Center", url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/" },
    { title: "AI in Search is driving more queries and higher quality clicks (6. August 2025)", publisher: "Google, The Keyword", url: "https://blog.google/products/search/ai-search-driving-more-queries-higher-quality-clicks/" },
  ],
  related: [
    { slug: "ai-suche-lokale-unternehmen", title: "KI-Suche für lokale Unternehmen" },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "website-content-ai-suchmaschinen", title: "Website-Content für KI-Suchmaschinen" },
    { slug: "ai-search-vs-traditional-search", title: "KI-Suche und klassische Suche im Vergleich" },
  ],
  cta: {
    title: "Was davon braucht Ihr Betrieb wirklich?",
    text: "Wir prüfen Ihre Ausgangslage: ob die Such-Crawler Ihre Website lesen dürfen, ob die wichtigsten Seiten indexiert sind, ob Website und Unternehmensprofil übereinstimmen und was KI-Suchen bei typischen Fragen über Ihren Betrieb sagen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
