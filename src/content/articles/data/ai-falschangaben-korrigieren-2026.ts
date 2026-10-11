import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-falschangaben-korrigieren-2026",
  lang: "de",
  seoTitle: "Falsche Angaben in KI-Antworten korrigieren: der Ablauf",
  seoDescription:
    "ChatGPT, Google oder Perplexity nennen falsche Zeiten oder Nummern? So finden Sie die Quelle, berichtigen sie und nutzen die Meldewege der Anbieter richtig.",
  h1: "Falsche Angaben in KI-Antworten korrigieren: Quelle finden, berichtigen, melden",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, über die ChatGPT, Googles Übersicht mit KI, Perplexity, Copilot oder Claude etwas Falsches sagen: falsche Öffnungszeiten, eine alte Nummer, „dauerhaft geschlossen“ oder die Leistungen eines anderen Betriebs. Sie bekommen einen Ablauf in fünf Schritten, die Meldewege der Anbieter und einen Überblick, wann die DSGVO weiterhilft.",
  answer:
    "Eine falsche Angabe in einer KI-Antwort korrigieren Sie fast nie direkt im KI-Dienst, sondern an der Quelle, aus der er sie hat: Ihre Website, Ihr Google-Unternehmensprofil, Bing Places, Apple Business oder ein Verzeichnis. Halten Sie den Fehler zuerst mit Bildschirmfoto fest, prüfen Sie die verlinkten Quellen und melden Sie die Antwort zusätzlich beim Anbieter. Eine Korrektur sagt kein Anbieter zu.",
  takeaways: [
    "Google, OpenAI, Microsoft und Anthropic schreiben selbst, dass ihre KI-Antworten Fehler enthalten können. Ein Formular, um Angaben direkt im KI-Dienst zu bearbeiten, nennt keine der geprüften Hilfeseiten.",
    "Die Quellenangaben zu einer Antwort zeigen, worauf sie sich stützt. Dort setzen Sie an.",
    "Im Google-Unternehmensprofil zählt die Website doppelt: Reagieren Sie nicht binnen vier Tagen auf eine vorgeschlagene Änderung, kann Google sie übernehmen, wenn etwa Ihre Website sie stützt.",
    "Meldungen an die Anbieter ergänzen die Korrektur an der Quelle. Keiner sagt zu, eine gemeldete Antwort zu ändern.",
    "Die DSGVO schützt nur Daten natürlicher Personen. Daten über eine GmbH fallen in der Regel nicht darunter, Angaben über Ein-Personen-Unternehmen dagegen schon, wenn sie den Inhaber erkennbar machen.",
  ],
  publishedAt: "2026-08-08",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "woher-fehler-kommen",
      title: "Woher falsche Angaben in KI-Antworten kommen",
      answer:
        "KI-Dienste mit Websuche fassen zusammen, was sie in öffentlichen Quellen finden, und Google, OpenAI, Microsoft und Anthropic warnen selbst vor Fehlern. Eine falsche Angabe über Ihren Betrieb hat deshalb häufig eine Quelle im Netz, die veraltet ist oder anderen Quellen widerspricht.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt in seiner Hilfe zur Übersicht mit KI (AI Overviews), dass KI-Antworten Fehler enthalten können. OpenAI warnt, dass Suchergebnisse und Quellenangaben in ChatGPT „unvollständig, veraltet oder falsch“ sein können. Anthropic schreibt, Claude könne gelegentlich falsche oder irreführende Antworten geben, und Microsoft hält fest, dass Copilot Fehler machen kann.",
        },
        {
          t: "p",
          text: "Für Unternehmensprofile nennt Google seine Quellen: öffentliche Informationen wie die Website eines Betriebs, lizenzierte Daten Dritter, Angaben von Nutzern und Inhabern und eigene Interaktionen mit dem Betrieb. Wie ChatGPT Quellen für lokale Fragen zeigt, beschreibt [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Dass sich die meisten Fehler auf eine auffindbare Quelle zurückführen lassen, ist unsere Beobachtung aus Prüfungen, keine Aussage der Anbieter. Antworten ohne Websuche beruhen auf älteren Trainingsdaten. Dort wirkt eine Korrektur erst, wenn der Dienst wieder sucht oder sein Wissen aktualisiert wird.",
        },
      ],
    },
    {
      id: "dokumentieren",
      title: "Schritt 1: Den Fehler festhalten",
      answer:
        "Halten Sie die falsche Antwort fest, bevor Sie etwas ändern: Dienst, Datum, genaue Frage, Antwort, verlinkte Quellen und ein Bildschirmfoto. Ohne diesen Beleg können Sie weder prüfen, ob die Korrektur gewirkt hat, noch eine Meldung begründen.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage für das Fehlerprotokoll",
          head: ["Spalte", "Was Sie eintragen"],
          rows: [
            ["Datum und Dienst", "Zum Beispiel 14.10.2026, ChatGPT mit Suche"],
            ["Frage im Wortlaut", "Mit Ort: „Hat die Bäckerei Huber in Rosenheim sonntags geöffnet?“"],
            ["Bedingungen", "Angemeldet oder nicht, Gerät, Standortfreigabe"],
            ["Falsche Aussage", "Wörtlich, daneben die richtige Angabe"],
            ["Quellen und Beleg", "Alle verlinkten Quellen, Bildschirmfoto, bei ChatGPT ein geteilter Link zum Gespräch"],
            ["Status", "Quelle korrigiert, gemeldet, erneut geprüft, jeweils mit Datum"],
          ],
        },
        {
          t: "p",
          text: "Stellen Sie dieselbe Frage zwei oder drei Mal in einem neuen Gespräch. Ein Fehler, der jedes Mal auftaucht, hat nach unserer Erfahrung meist eine feste Quelle. OpenAI bittet bei Anträgen zu personenbezogenen Daten ausdrücklich um konkrete Beispiele, Links zu den Gesprächen und Belege.",
        },
      ],
    },
    {
      id: "quelle-finden",
      title: "Schritt 2: Die Quelle finden",
      answer:
        "Öffnen Sie die Quellen, die der Dienst zur Antwort verlinkt, und suchen Sie dort nach der falschen Angabe. Alle hier behandelten Dienste zeigen bei Antworten aus der Websuche Links zu ihren Quellen.",
      blocks: [
        {
          t: "table",
          caption: "Wo die Anbieter ihre Quellen zeigen (laut eigener Hilfe)",
          head: ["Dienst", "Was der Anbieter beschreibt"],
          rows: [
            ["Übersicht mit KI und KI-Modus (Google)", "Links zu ergänzenden Informationen beziehungsweise unterstützenden Websites"],
            ["ChatGPT", "Quellenangaben in der Antwort, wo verfügbar zusätzlich die Schaltfläche „Quellen“"],
            ["Perplexity", "Nummerierte Fußnoten mit Links zu den Originalquellen"],
            ["Microsoft Copilot", "Bei Antworten aus Webdaten verlinkte Quellenangaben unter dem Text"],
            ["Claude", "Mit Websuche enthält jede Antwort Quellenangaben"],
          ],
        },
        {
          t: "steps",
          items: [
            { title: "Verlinkte Quellen öffnen", text: "Suchen Sie auf jeder Seite nach der falschen Angabe und notieren Sie, wer die Seite betreibt." },
            { title: "Eigene Seiten mitprüfen", text: "Auch Ihre Website kann die Quelle sein: eine vergessene Unterseite, ein altes PDF, eine Fußzeile mit der früheren Nummer." },
            { title: "Ohne Quellenangabe selbst suchen", text: "Suchen Sie nach der falschen Angabe, etwa der alten Nummer in mehreren Schreibweisen. Die Methode steht in [NAP-Konsistenz](/blog/nap-konsistenz-local-seo#audit)." },
            { title: "Zitate bei Bing auswerten", text: "Der Bericht „AI Performance“ in den Bing Webmaster Tools (Vorschau seit Februar 2026) zeigt, welche Ihrer Seiten in Copilot als Quelle erscheinen. Mehr in [Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026#ai-performance)." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Fragen Sie den Dienst nicht nachträglich, woher er die Angabe hat. Die Antwort ist selbst eine KI-Antwort und kann Quellen nennen, die die Angabe gar nicht enthalten. OpenAI und Anthropic raten ebenfalls, die angezeigten Quellen selbst zu öffnen und zu prüfen.",
        },
      ],
    },
    {
      id: "fehler-quelle-korrekturweg",
      title: "Fehler, wahrscheinliche Quelle, Korrekturweg",
      answer:
        "Die häufigsten Fehlerarten lassen sich nach unserer Erfahrung wenigen Quellen zuordnen: Website, Google-Unternehmensprofil, weitere Kartendienste und Verzeichnisse. Die Tabelle zeigt, wo Sie zuerst suchen und wie Sie korrigieren.",
      blocks: [
        {
          t: "table",
          caption: "Fehler → wahrscheinliche Quelle → Korrekturweg",
          head: ["Fehler in der KI-Antwort", "Wahrscheinliche Quelle", "Korrekturweg"],
          rows: [
            ["Falsche Öffnungszeiten", "Profil ohne spezielle Öffnungszeiten, alte Zeiten auf der Website, Verzeichnis mit altem Stand", "Website und Profil angleichen, Feiertage als spezielle Öffnungszeiten, Verzeichnisse nachziehen"],
            ["„Dauerhaft geschlossen“, obwohl geöffnet", "Status im Google-Profil, übernommener Nutzervorschlag, früherer Standort", "Status prüfen, von Google geänderte Angaben korrigieren, aktuelle Zeiten auf der Website"],
            ["Alte Telefonnummer", "Telefon- und Branchenbücher, alte Social-Media-Profile, Impressum", "Eine gültige Nummer festlegen, jeden Fund einzeln korrigieren"],
            ["Alte Adresse nach Umzug", "Zweites Profil, Verzeichnisse, alte Standortseite", "Adresse im bestehenden Profil ändern, Duplikate bereinigen, alte Seite weiterleiten"],
            ["Leistungen, die Sie nicht anbieten", "Alte Leistungsseite, Branchenportal, Kategorien im Profil", "Seite aktualisieren oder entfernen, Profil und Portale anpassen"],
            ["Verwechslung mit einem anderen Betrieb", "Ähnlicher Name im Ort, doppelte oder vermischte Einträge", "Eigene Angaben eindeutig machen, beim fremden Eintrag eine Änderung vorschlagen"],
            ["Falsche Aussagen über Sie als Person", "Presseartikel, Portale, Namensgleiche", "Quelle um Berichtigung bitten, bei personenbezogenen Daten Antrag beim KI-Anbieter"],
            ["Angabe ohne erkennbare Quelle", "Trainingsdaten oder nicht verlinkte Quellen", "Quellen trotzdem bereinigen, Antwort melden, später erneut prüfen"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die mittlere Spalte beruht auf unseren Prüfungen, nicht auf Aussagen der Anbieter. Sie zeigt, wo Sie zuerst nachsehen, nicht, wo der Fehler sicher herkommt.",
        },
        {
          t: "p",
          text: "Wie Sie Feiertage, Saison und Schließungen pflegen, steht in [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage). Wie Sie Verwechslungen vorbeugen, erklärt [Entity SEO für lokale Unternehmen](/blog/entity-seo-guide).",
        },
      ],
    },
    {
      id: "website-und-profil",
      title: "Schritt 3: Website und Google-Unternehmensprofil berichtigen",
      answer:
        "Korrigieren Sie zuerst, was Sie selbst in der Hand haben: Website und Google-Unternehmensprofil. Die Website ist doppelt wichtig, weil Google vorgeschlagene Änderungen am Profil veröffentlichen kann, wenn andere öffentliche Informationen wie Ihre Website sie stützen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Website: eine Fassung der Stammdaten.** Name, Adresse, Telefon und Öffnungszeiten auf Kontaktseite, Impressum und Fußzeile gleich, als Text statt Bild. Betriebsurlaub und Feiertage mit Datum.",
            "**Website: alte Seiten aufräumen.** Frühere Standorte, eingestellte Leistungen und alte PDFs aktualisieren, entfernen oder weiterleiten. Strukturierte Daten an den sichtbaren Text angleichen.",
          ],
        },
        {
          t: "steps",
          items: [
            { title: "Im Profil direkt ändern", text: "Als Inhaber bearbeiten Sie Name, Adresse, Zeiten, Telefon und Website selbst. Google prüft Änderungen, bevor sie live gehen, und zeigt den Bearbeitungsstatus." },
            { title: "Änderungen durch Google prüfen", text: "Von Google geänderte Angaben sind im Profil-Editor blau markiert. Google kann das Profil anpassen, wenn Nutzermeldungen oder lizenzierte Quellen Angaben als falsch oder veraltet melden." },
            { title: "Vorschläge annehmen oder ablehnen", text: "Für eine vorgeschlagene Änderung haben Sie nach der Benachrichtigung vier Tage Zeit. Ohne Reaktion kann Google sie veröffentlichen, wenn andere öffentliche Informationen sie stützen." },
            { title: "Erfasste Informationen kontrollieren", text: "Google kann Sie in ausgewählten Regionen, Sprachen und Branchen per automatisiertem Anruf, SMS oder WhatsApp kontaktieren und Antworten für das Profil nutzen. Im Bearbeitungsbereich sehen Sie diese Angaben mit Quelle und Datum." },
            { title: "Geschlossen richtig kennzeichnen", text: "„Vorübergehend geschlossen“ empfiehlt Google ab mehr als sieben Tagen, kürzere Schließungen sind spezielle Öffnungszeiten. Ein dauerhaft geschlossenes Profil kann weiter in Suche und Maps erscheinen, ist dann aber klar als geschlossen markiert." },
          ],
        },
        {
          t: "p",
          text: "Einen falschen Eintrag in Google Maps, den Sie nicht verwalten, berichtigen Sie über eine vorgeschlagene Änderung, laut Google etwa für Name, Adresse und Öffnungszeiten. Falsche Profile können Sie auch zur Entfernung melden. Bei Duplikaten hilft [Doppelte Google-Einträge entfernen](/blog/duplicate-listing-entfernen).",
        },
      ],
    },
    {
      id: "weitere-profile",
      title: "Bing Places, Apple Business und Verzeichnisse nachziehen",
      answer:
        "Danach folgen die Einträge außerhalb von Google: Bing Places, Apple Business, Telefon- und Branchenbücher und die Portale Ihrer Branche. Welche davon ein bestimmter KI-Dienst nutzt, legen die Anbieter nicht vollständig offen, deshalb sollten alle stimmen.",
      blocks: [
        {
          t: "table",
          caption: "Wo Sie außerhalb von Google korrigieren",
          head: ["Eintrag", "Was dokumentiert ist", "Weiterlesen"],
          rows: [
            ["Bing Places for Business", "Kostenlose Plattform für Einträge in Bing und Bing Maps, im Oktober 2025 nach bing.com/forbusiness umgezogen", "[Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026)"],
            ["Apple Business", "Ihr Eintrag für Apple Karten", "[Apple Business und Local SEO](/blog/apple-business-connect-local-seo-2026)"],
            ["Telefon- und Branchenbücher", "Änderungsweg je Verzeichnis verschieden", "[Einträge in DACH-Verzeichnissen korrigieren](/blog/nap-konsistenz-local-seo#verzeichnisse-korrigieren)"],
            ["Branchen- und Bewertungsportale", "Als Inhaber übernehmen, wo möglich, sonst Kontaktformular", "Eigene Liste mit Status führen"],
          ],
        },
        {
          t: "p",
          text: "Microsoft schreibt im Transparenzhinweis zu Copilot, dass Copilot sich bei Informationsfragen auf Ergebnisse der Websuche stützt. Bing Places kündigte beim Neustart eine engere Verbindung mit Copilot an, ohne Einzelheiten. Wie ein Bing-Places-Eintrag in eine bestimmte Copilot-Antwort einfließt, ist damit nicht belegt.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Taucht ein Fehler in mehreren Diensten gleich auf, sitzt er meist in einer zentralen Quelle wie Website, Google-Profil oder einem großen Verzeichnis. Beginnen Sie dort.",
        },
      ],
    },
    {
      id: "anbieter-melden",
      title: "Schritt 4: Die falsche Antwort beim Anbieter melden",
      answer:
        "Alle fünf Anbieter bieten eine Rückmeldung direkt an der Antwort, meist über ein Daumen-runter-Symbol oder ein Menü, OpenAI und Anthropic für Rechtsverstöße zusätzlich eigene Formulare. Eine Korrektur sagt keiner zu, deshalb ergänzt die Meldung die Korrektur an der Quelle und ersetzt sie nicht.",
      blocks: [
        {
          t: "table",
          caption: "Meldewege laut Hilfeseiten der Anbieter (Stand Oktober 2026)",
          head: ["Dienst", "Rückmeldung an der Antwort", "Weitere Wege"],
          rows: [
            ["Übersicht mit KI (Google)", "„Mag ich nicht“, dann „Problem melden“, Kategorie und Details, „Senden“; alternativ Dreipunktmenü und „Feedback geben“", "Eintrag selbst über Profil oder Maps korrigieren"],
            ["ChatGPT", "Daumen runter; bei rechtlichen Anliegen die Kategorie für Sicherheits- oder Rechtsbedenken", "Webformular für Inhaltsmeldungen, für Daten über Personen das Privacy Portal"],
            ["Perplexity", "Dreipunktmenü unter der Antwort, dann „Report“", "E-Mail an support@perplexity.ai mit Link zum Thread"],
            ["Microsoft Copilot", "Feedback-Funktion im Copilot; in Microsoft-365-Apps Daumen hoch oder runter", "In Firmen kann die IT das Feedback abschalten"],
            ["Claude", "Daumen runter unter der Antwort", "Meldeformular bei Verstößen gegen Richtlinien oder Gesetze; Website-Betreiber können mit Eigentumsnachweis beantragen, dass eine eigene URL in Claude-Antworten gesperrt wird"],
          ],
        },
        {
          t: "p",
          text: "Schreiben Sie sachlich, was falsch ist, was richtig ist und wo die richtige Angabe steht, etwa auf Ihrer Kontaktseite. Eine Rückmeldung über das Ergebnis beschreiben die Hilfeseiten nicht. OpenAI empfiehlt, bei einer falsch wirkenden Suchantwort neu suchen zu lassen und Quelle, Datum oder Ort anzugeben. Das zeigt Ihnen, ob die richtige Angabe inzwischen auffindbar ist.",
        },
        {
          t: "p",
          text: "Wie die Übersicht mit KI Quellen auswählt, steht in [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo), wie Perplexity und Claude zitieren in [Perplexity und Claude für lokale Sichtbarkeit](/blog/perplexity-claude-lokale-sichtbarkeit), die Grundlagen zu ChatGPT in [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "rechtliche-wege",
      title: "Rechtliche Wege in der EU: wann die DSGVO hilft",
      answer:
        "Die DSGVO schützt nur Daten natürlicher Personen, also in der Regel nicht Angaben über eine GmbH, wohl aber unter Umständen Angaben über ein Ein-Personen-Unternehmen, die den Inhaber erkennbar machen. Dann besteht ein Recht auf Berichtigung, und OpenAI bietet einen eigenen Antrag, um Daten aus ChatGPT-Antworten entfernen zu lassen.",
      blocks: [
        {
          t: "note",
          label: "Keine Rechtsberatung",
          text: "Dieser Abschnitt gibt wieder, was Europäische Kommission und Anbieter veröffentlichen. Bei Rufschädigung oder Streit über Tatsachen wenden Sie sich an eine Anwältin, einen Anwalt oder die Datenschutzbehörde.",
        },
        {
          t: "p",
          text: "Laut Europäischer Kommission gelten die Datenschutzregeln nicht für Daten über Unternehmen oder andere juristische Personen. Informationen über Ein-Personen-Unternehmen können aber personenbezogen sein, wenn sie eine natürliche Person erkennbar machen. Für unrichtige personenbezogene Daten gibt Art. 16 DSGVO das Recht auf unverzügliche Berichtigung, laut Kommission grundsätzlich binnen eines Monats oder mit schriftlicher Begründung der Ablehnung.",
        },
        {
          t: "table",
          caption: "Datenschutzwege der Anbieter (laut Datenschutzerklärungen und Hilfeseiten)",
          head: ["Anbieter", "Was dokumentiert ist"],
          rows: [
            ["OpenAI", "Verantwortlich für EWR und Schweiz ist OpenAI Ireland Limited. Falsche Angaben über Sie melden Sie über privacy.openai.com oder an dsar@openai.com; geprüft wird nach geltendem Recht und technischen Möglichkeiten. Im Portal gibt es den Antrag „Remove personal data from ChatGPT responses“, mit Identitätsnachweis; OpenAI kann ablehnen, fremde Websites bleiben unberührt"],
            ["Perplexity", "Recht auf Berichtigung unrichtiger Daten, die Perplexity über Sie speichert; Anfragen an support@perplexity.ai oder in der EU über das Portal des Vertreters Prighter"],
            ["Anthropic", "Verweist für Datenschutzfragen auf sein Privacy Center; für EU-Nutzer ist der Support-Chat die Kontaktstelle nach dem Digital Services Act"],
            ["Google, Microsoft", "Eigene Formulare; die Wege für KI-Antworten haben wir hier nicht geprüft"],
          ],
        },
        {
          t: "p",
          text: "Hilft der Anbieter nicht, bleibt die Beschwerde bei einer Datenschutzbehörde. OpenAI nennt die irische Datenschutzkommission oder Ihre örtliche Behörde, für die Schweiz den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten. Wie offen die Frage ist, zeigt eine Beschwerde von noyb bei der österreichischen Datenschutzbehörde vom April 2024. noyb warf OpenAI vor, falsche Angaben nicht berichtigen, sondern nur filtern oder sperren zu können.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Der Datenschutzweg ist meist der zweite Schritt, sinnvoll bei falschen Aussagen über Sie als Person, die trotz bereinigter Quellen bleiben.",
        },
      ],
    },
    {
      id: "nachpruefen",
      title: "Schritt 5: Nachprüfen und Fehlern vorbeugen",
      answer:
        "Wiederholen Sie nach der Korrektur dieselben Fragen in festen Abständen und tragen Sie das Ergebnis ins Protokoll ein. Feste Zeiten nennt kein Anbieter, Google schreibt nur, dass das erneute Crawlen einer Seite mehrere Tage bis mehrere Monate dauern kann.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Nach etwa einer Woche", text: "Prüfen, ob Website, Profil und Verzeichnisse die Korrektur zeigen, bei Google den Bearbeitungsstatus ansehen." },
            { title: "Nach zwei bis vier Wochen", text: "Dieselbe Frage unter denselben Bedingungen stellen und mit dem Bildschirmfoto vergleichen. Mit dem URL-Prüftool der Search Console sehen Sie, welche Fassung einer Seite Google kennt." },
            { title: "Danach monatlich", text: "Die Fragen in Ihre Monatsroutine aufnehmen. Bleibt der Fehler, die Quellen erneut prüfen und die Antwort noch einmal melden." },
            { title: "Bei jeder Änderung", text: "Neue Nummer, neue Zeiten, Umzug: am selben Tag Website, Google-Profil, Bing Places, Apple Business und die wichtigsten Verzeichnisse ändern." },
          ],
        },
        {
          t: "p",
          text: "Die Abstände sind unser Vorschlag, keine Vorgabe der Anbieter. Garantieren kann niemand, dass eine falsche Angabe bis zu einem bestimmten Tag aus allen KI-Antworten verschwindet. Was KI-Dienste heute über Ihren Betrieb sagen, prüfen wir im [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Kann ich ChatGPT direkt mitteilen, dass eine Angabe über meinen Betrieb falsch ist?",
      a: "Sie können die Antwort mit dem Daumen-runter-Symbol bewerten, für rechtliche Anliegen nennt OpenAI ein eigenes Meldeformular. Ein Formular, mit dem Betriebe ihre Angaben in ChatGPT selbst bearbeiten, beschreibt OpenAI nicht. Dauerhaft wirkt nach unserer Erfahrung die Korrektur an der zitierten Quelle.",
    },
    {
      q: "Wie lange dauert es, bis eine KI-Antwort die richtige Angabe zeigt?",
      a: "Feste Zeiten nennt keiner der Anbieter. Google schreibt, dass das erneute Crawlen einer Seite mehrere Tage bis mehrere Monate dauern kann. Prüfen Sie nach einigen Wochen erneut und danach monatlich.",
    },
    {
      q: "Ein KI-Dienst nennt meinen Betrieb dauerhaft geschlossen. Was tun?",
      a: "Prüfen Sie den Status in Ihrem Google-Unternehmensprofil und ob Google dort blau markierte Änderungen vorgenommen hat. Korrigieren Sie den Status, halten Sie die Zeiten auf der Website aktuell und melden Sie die Antwort. Danach Bing Places, Apple Business und große Verzeichnisse prüfen.",
    },
    {
      q: "Gilt die DSGVO auch für falsche Angaben über meine Firma?",
      a: "Nur bei Daten einer natürlichen Person. Daten über eine GmbH oder andere juristische Personen regelt die DSGVO laut Europäischer Kommission nicht. Bei Ein-Personen-Unternehmen können Firmendaten personenbezogen sein, wenn sie den Inhaber erkennbar machen. Den Einzelfall klärt eine Rechtsberatung.",
    },
    {
      q: "Kann eine Agentur garantieren, dass falsche Angaben aus KI-Antworten verschwinden?",
      a: "Nein. Kein Anbieter sagt zu, eine gemeldete Antwort zu ändern, und OpenAI behält sich vor, Anträge abzulehnen. Seriös ist, Quellen zu bereinigen, Meldewege zu nutzen und das Ergebnis zu dokumentieren.",
    },
  ],
  sources: [
    { title: "Übersicht mit KI: Informationen in der Google Suche schneller und einfacher finden", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=de" },
    { title: "KI-Funktionen und deine Website (Stand 31. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Understand how Google sources & uses info in Business Profiles & local search results", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/2721884?hl=de" },
    { title: "Understand Google updates on your Business Profile", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3480441?hl=de" },
    { title: "Edit your Business Profile", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3039617?hl=de" },
    { title: "Mark your business as closed", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/15300196?hl=de" },
    { title: "Report data or content errors on Google Maps", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/3094088?hl=de" },
    { title: "Mit ChatGPT das Web durchsuchen", publisher: "OpenAI Help Center", url: "https://help.openai.com/de-de/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Reporting Content in ChatGPT and OpenAI Platforms", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/10245791-reporting-content-in-chatgpt-and-openai-platforms" },
    { title: "Right to be forgotten and personal data removal from ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/20001057" },
    { title: "EU Privacy Policy (Stand 24. August 2026)", publisher: "OpenAI", url: "https://openai.com/policies/eu-privacy-policy" },
    { title: "Need support? (Stand 3. März 2026)", publisher: "Perplexity Help Center", url: "https://intercom.help/perplexity-ai/en/articles/10354888-need-support" },
    { title: "How does Perplexity work?", publisher: "Perplexity", url: "https://hub-prod.perplexity.ai/hub/faq/how-does-perplexity-work" },
    { title: "Privacy Policy (Stand 31. Oktober 2025)", publisher: "Perplexity", url: "https://hub-prod.perplexity.ai/hub/legal/privacy-policy" },
    { title: "Transparency Note for Microsoft Copilot (Stand 18. August 2026)", publisher: "Microsoft Support", url: "https://support.microsoft.com/en-US/Privacy/microsoft-copilot/transparency-note" },
    { title: "Providing feedback about Microsoft Copilot with Microsoft 365 apps", publisher: "Microsoft Support", url: "https://support.microsoft.com/privacy/microsoft-copilot/providing-feedback" },
    { title: "Introducing the New Bing Places for Business (3. Oktober 2025)", publisher: "Microsoft Bing Blogs", url: "https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Claude is providing incorrect or misleading responses. What's going on? (Stand 16. März 2026)", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on" },
    { title: "Report, block, and remove content from Claude (Stand 3. September 2026)", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/10684638-report-block-and-remove-content-from-claude" },
    { title: "Enabling and Using Web Search", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/10684626-enabling-and-using-web-search" },
    { title: "Where can I learn more about Anthropic's Privacy practices? (Stand 16. März 2026)", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/10035659-where-can-i-learn-more-about-anthropic-s-privacy-practices" },
    { title: "Designated point of contact for users in the EU (Stand 26. Mai 2026)", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/11595103-designated-point-of-contact-for-users-in-the-eu" },
    { title: "Do data protection rules apply to data about a company?", publisher: "Europäische Kommission", url: "https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/application-regulation/do-data-protection-rules-apply-data-about-company_en" },
    { title: "My data is incorrect: can I correct it?", publisher: "Europäische Kommission", url: "https://commission.europa.eu/law/law-topic/data-protection/reform/rights-citizens/my-rights/my-data-incorrect-can-i-correct-it_en" },
    { title: "Art. 16 DSGVO, Recht auf Berichtigung (Wortlaut nach EUR-Lex)", publisher: "LexMea", url: "https://lexmea.de/de/gesetz/dsgvo/art-16" },
    { title: "ChatGPT provides false information about people, and OpenAI can't correct it (29. April 2024)", publisher: "noyb", url: "https://noyb.eu/en/chatgpt-provides-false-information-about-people-and-openai-cant-correct-it" },
  ],
  related: [
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "google-ai-overviews-local-seo", title: "Google AI Overviews und Local SEO" },
    { slug: "perplexity-claude-lokale-sichtbarkeit", title: "Perplexity und Claude für lokale Sichtbarkeit" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
  ],
  cta: {
    title: "Was sagen KI-Dienste über Ihren Betrieb?",
    text: "Wir stellen typische Kundenfragen zu Ihrem Betrieb in ChatGPT, der Google Suche und Perplexity und gleichen die Antworten mit Website und Profilen ab. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
