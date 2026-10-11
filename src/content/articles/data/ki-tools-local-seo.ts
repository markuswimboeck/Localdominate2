import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ki-tools-local-seo",
  lang: "de",
  seoTitle: "KI-Tools für Local SEO: Aufgaben, Grenzen, sicherer Ablauf",
  seoDescription:
    "Wobei KI-Werkzeuge lokalen Betrieben bei Texten, Rezensionen und Bildern helfen, wo Googles Regeln Grenzen setzen und wie ein Ablauf mit Prüfung aussieht.",
  h1: "KI-Tools für Local SEO: Wofür sie taugen, wo Googles Regeln Grenzen setzen und wie ein sicherer Ablauf aussieht",
  kicker: "Werkzeuge",
  lead:
    "Für Inhaber lokaler Betriebe und ihre Mitarbeiter, die KI für Website, Unternehmensprofil und Rezensionen nutzen wollen. Sie erfahren, welche Aufgaben KI-Werkzeuge gut erledigen, welche Regeln von Google dabei gelten, was Sie den Werkzeugen nicht anvertrauen sollten und wie ein Ablauf mit menschlicher Prüfung aussieht.",
  answer:
    "KI-Werkzeuge helfen lokalen Betrieben vor allem bei Entwürfen: Texte für Leistungsseiten, Antworten auf Rezensionen, Alt-Texte, Gliederungen und Recherche. Google lässt KI beim Schreiben zu, verlangt aber eine manuelle Faktenprüfung, und viele Seiten ohne Mehrwert können gegen die Spam-Richtlinien verstoßen. Rezensionen ohne echtes Erlebnis sind verboten, Fotos im Profil sollen den Betrieb realistisch zeigen. Ein Mensch prüft und gibt frei.",
  takeaways: [
    "KI eignet sich für Entwürfe, Gliederungen und Recherche. Fakten, eigene Erfahrung und die Freigabe bleiben beim Betrieb.",
    "Google lässt KI beim Schreiben zu, verlangt aber eine manuelle Faktenprüfung. Automatisierung mit dem Hauptzweck, Rankings zu manipulieren, und viele Seiten ohne Mehrwert verstoßen gegen die Spam-Richtlinien.",
    "Rezensionen, die nicht auf einem echten Erlebnis beruhen, sind verboten, ob von Hand oder mit KI geschrieben. Bei gefälschten Rezensionen kann Google eine Warnung im Profil zeigen und neue Bewertungen eine Zeit lang sperren.",
    "Fotos im Unternehmensprofil sollen realistisch und nicht stark bearbeitet sein. KI-Bilder sind dafür kein Ersatz.",
    "Prüfen Sie vor der Nutzung, ob der Anbieter Ihre Eingaben zum Training nutzt und ob Menschen Chats lesen. Personenbezogene Daten von Kunden gehören nicht in den Auftrag.",
  ],
  publishedAt: "2026-01-10",
  updatedAt: "2026-10-11",
  readingTime: 14,
  sections: [
    {
      id: "aufgaben",
      title: "Wobei KI im Local SEO hilft und wo die Grenze liegt",
      answer:
        "KI-Werkzeuge sind stark bei Entwürfen, Gliederungen und Formulierungen, schwach bei Fakten über Ihren Betrieb. Google beschreibt generative KI als besonders nützlich für die Recherche und um eigenen Inhalten Struktur zu geben, nicht als Quelle für Tatsachen.",
      blocks: [
        {
          t: "table",
          caption: "Aufgaben im Local SEO und was KI dabei leisten kann",
          head: ["Aufgabe", "Was KI gut kann", "Was ein Mensch tun muss", "Regel, die gilt"],
          rows: [
            ["Leistungsseiten und Ratgeber", "Gliederung und Entwurf aus Ihren Stichpunkten", "Fakten, Preise und eigene Erfahrung liefern und prüfen", "KI-Inhalte vor der Veröffentlichung manuell prüfen (Google)"],
            ["Beschreibung im Unternehmensprofil", "Vorschlag, in ausgewählten Regionen auch direkt im Profil", "Auf Richtigkeit prüfen, ehrliche Angaben, keine Links", "Richtlinien für Unternehmensprofile"],
            ["Antworten auf Rezensionen", "Entwurf, Ton, Kürzen", "Inhalt prüfen, keine personenbezogenen Daten, freigeben", "Antworten sind öffentlich und werden auf die Richtlinien geprüft"],
            ["Alt-Texte für Bilder", "Beschreibung vorschlagen", "Prüfen, ob sie das Bild richtig beschreibt", "Hilfreich, im Kontext, keine gehäuften Schlüsselwörter (Google)"],
            ["Titel, Meta-Beschreibung, strukturierte Daten", "Entwürfe", "Prüfen wie jeden anderen Inhalt", "Die Prüfpflicht gilt laut Google ausdrücklich auch für Metadaten"],
            ["Recherche zu Kundenfragen", "Fragen sammeln, Themen ordnen, Quellen finden", "Quellen öffnen und prüfen", "Suchergebnisse und Quellenangaben können laut OpenAI unvollständig, veraltet oder falsch sein"],
            ["Fotos fürs Profil", "Nicht geeignet", "Echte Fotos machen", "Realistische Darstellung, nicht stark bearbeitet (Google)"],
            ["Rezensionen schreiben", "Nicht erlaubt", "Echte Kunden um eine Bewertung bitten", "Inhalte ohne echtes Erlebnis verstoßen gegen die Richtlinien"],
          ],
        },
        {
          t: "p",
          text: "Die Grenze ist immer dieselbe: KI kann formulieren, was Sie wissen, aber sie weiß nicht, was nur Sie wissen. Google begründet das so: Generative Modelle rufen keine Fakten ab, sondern sagen eine wahrscheinliche Folge von Wörtern voraus. Ihre Ergebnisse können deshalb Fehler enthalten, sogenannte Halluzinationen.",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels nannte Zahlen wie „73 % der Marketer nutzen KI“ oder „80 % Zeitersparnis bei Antworten“, vergab Sterne an einzelne Werkzeuge und listete Preise. Für die Zahlen gab es keine Quelle, Preise ändern sich laufend. Wir haben beides entfernt, ebenso den Rat, FAQ-Schema für Rich Snippets zu nutzen, die Google nicht mehr zeigt.",
        },
      ],
    },
    {
      id: "werkzeugarten",
      title: "Welche Arten von Werkzeugen es gibt",
      answer:
        "Für lokale Betriebe kommen drei Gruppen in Frage: Chat-Assistenten wie ChatGPT oder die Gemini-App, KI-Funktionen in Diensten, die Sie schon nutzen, etwa im Unternehmensprofil, und Prüfwerkzeuge von Google. Wir nennen Werkzeuge als Beispiele mit dem, was die Anbieter selbst dokumentieren, nicht als Rangliste.",
      blocks: [
        {
          t: "table",
          caption: "Werkzeuge als Beispiele, laut Dokumentation der Anbieter (Stand 11. Oktober 2026)",
          head: ["Gruppe", "Beispiel", "Was der Anbieter dokumentiert", "Was Sie beachten"],
          rows: [
            [
              "Chat-Assistent mit Websuche",
              "ChatGPT (OpenAI)",
              "Kann im Web suchen und mit Links zu Quellen antworten. Für lokale Ergebnisse kann ChatGPT den ungefähren Standort aus der IP-Adresse nutzen",
              "Ergebnisse und Quellenangaben können laut OpenAI unvollständig, veraltet oder falsch sein",
            ],
            [
              "Chat-Assistent",
              "Gemini-App (Google)",
              "Ein Teil der Chats wird von menschlichen Prüfern gelesen. Google bittet, keine vertraulichen Informationen einzugeben",
              "Mit Konten von Google Workspace können andere Bedingungen für die Datenverarbeitung gelten",
            ],
            [
              "KI im Unternehmensprofil",
              "Beschreibung vorschlagen lassen",
              "Google schlägt eine Beschreibung aus den Profilangaben und anderen Quellen wie Ihrer Website vor. Die KI schreibe kreativen Text, den Sie auf Richtigkeit prüfen sollen",
              "Nur in ausgewählten Regionen und Sprachen",
            ],
            [
              "KI im Unternehmensprofil",
              "Profil mit der Gemini-Web-App verwalten",
              "Antworten auf Rezensionen entwerfen, Öffnungszeiten ändern, Beiträge erstellen, Leistungsdaten abrufen",
              "Laut Google nicht im Europäischen Wirtschaftsraum und im Vereinigten Königreich verfügbar, also nicht in Deutschland und Österreich",
            ],
            [
              "Prüfwerkzeuge von Google (keine KI)",
              "Search Console, Test für Rich-Suchergebnisse, Google Trends",
              "Leistungsdaten der Suche, Prüfung strukturierter Daten, relatives Suchinteresse",
              "Zum Prüfen dessen, was KI vorgeschlagen hat",
            ],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Assistenten anderer Anbieter erledigen dieselben Aufgaben. Wichtiger als der Name ist, was der Anbieter zu Datenverwendung und Verfügbarkeit dokumentiert. Preise und Tarife ändern sich häufig, prüfen Sie sie auf der Preisseite des Anbieters.",
        },
        {
          t: "p",
          text: "Welche KI-Funktionen Google im Unternehmensprofil sonst einsetzt, etwa Zusammenfassungen von Rezensionen, beschreibt [Unternehmensprofil und KI-Funktionen](/blog/unternehmensprofil-ki-funktionen-2026#ki-fuer-inhaber).",
        },
      ],
    },
    {
      id: "googles-regeln",
      title: "Wo Googles Regeln Grenzen setzen",
      answer:
        "Google lässt KI beim Erstellen von Inhalten zu, verlangt aber eine manuelle Prüfung und verbietet Automatisierung mit dem Hauptzweck, Rankings zu manipulieren. Für Rezensionen und Fotos im Unternehmensprofil gelten eigene Richtlinien, die viele KI-Ergebnisse ausschließen.",
      blocks: [
        {
          t: "table",
          caption: "Regeln von Google, die beim Einsatz von KI greifen",
          head: ["Bereich", "Regel", "Quelle"],
          rows: [
            ["Inhalte der Website", "Automatisierung einschließlich KI mit dem Hauptzweck, Suchrankings zu manipulieren, verstößt gegen die Spam-Richtlinien. KI-Inhalte sind vor der Veröffentlichung manuell auf Richtigkeit zu prüfen", "Google Search Central"],
            ["Viele ähnliche Seiten", "Viele Seiten mit generativer KI ohne Mehrwert zu erzeugen, kann Missbrauch skalierter Inhalte sein. Seiten, die für ähnliche Suchanfragen angelegt werden, sind Brückenseiten", "Spam-Richtlinien"],
            ["Metadaten", "Die Prüfung gilt auch für Title-Elemente, Meta-Beschreibungen, strukturierte Daten und Alt-Texte", "Google Search Central"],
            ["Rezensionen", "Verboten sind Inhalte, die nicht auf einem echten Erlebnis beruhen, bezahlte Bewertungen, Bewertungen bei Interessenkonflikt, etwa durch Mitarbeiter, und das gezielte Einholen nur positiver Bewertungen", "Richtlinien für Nutzerbeiträge auf Google Maps"],
            ["Folgen gefälschter Rezensionen", "Google kann im Profil eine Warnung anzeigen, für eine bestimmte Zeit keine neuen Rezensionen zulassen und bestehende ausblenden", "Unternehmensprofil-Hilfe"],
            ["Fotos im Profil", "Scharf, gut ausgeleuchtet, realistisch, nicht stark bearbeitet. Für Medien auf Maps rät Google zu eigenen Aufnahmen am Ort, ohne Stockfotos und stark bearbeitete Bilder", "Unternehmensprofil-Hilfe, Google Maps"],
            ["Beschreibung im Profil", "Ehrliche Angaben zu Leistungen und Produkten, keine Links, keine Aktionen oder Preise im Mittelpunkt", "Richtlinien für Unternehmensprofile"],
            ["Rezensions-Markup", "Keine gefälschten oder nicht offengelegten belohnten Rezensionen auf der Seite oder im Markup", "Google Search Central"],
          ],
        },
        {
          t: "p",
          text: "Auch Bing hat seine Richtlinien angepasst. Laut Search Engine Journal (Februar 2026) richtet sich die Regel nicht mehr gegen maschinell erzeugte Inhalte allgemein, sondern gegen große Mengen von Inhalten, die ohne Aufsicht, Qualitätskontrolle oder redaktionelle Prüfung entstanden sind.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Regeln zielen auf Zweck und Prüfung, nicht auf das Werkzeug. Ein KI-Entwurf, den Ihr Meister fachlich prüft und um eigene Erfahrung ergänzt, ist etwas anderes als Dutzende Ortsseiten, die ein Programm über Nacht erzeugt. Was in Deutschland, Österreich und der Schweiz rechtlich für Bewertungen gilt, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen#recht-dach).",
        },
      ],
    },
    {
      id: "texte",
      title: "Texte für Website und Profil mit KI-Entwurf",
      answer:
        "Lassen Sie KI aus Ihren eigenen Stichpunkten gliedern und formulieren, nicht Fakten erfinden. Google hebt Inhalte mit eigener Erfahrung hervor, und die liefert nur Ihr Betrieb.",
      blocks: [
        {
          t: "table",
          caption: "Bausteine eines Auftrags an einen Chat-Assistenten (Beispiel für eine Leistungsseite)",
          head: ["Baustein", "Beispiel"],
          rows: [
            ["Leser", "„Schreibe für Hausbesitzer in Linz und Umgebung, die eine neue Heizung planen.“"],
            ["Leitfrage", "„Die Seite beantwortet: Wann lohnt sich eine Wärmepumpe im Altbau, und wie läuft der Tausch bei uns ab?“"],
            ["Nur diese Fakten", "Ihre Stichpunkte: Ablauf in Schritten, übliche Dauer, Einzugsgebiet, Preisrahmen mit Stand"],
            ["Verbote", "„Erfinde keine Zahlen, Förderbeträge, Normen oder Kundenstimmen. Fehlt eine Angabe, schreibe [FEHLT].“"],
            ["Form", "„Beginne mit zwei Sätzen, die die Frage beantworten. Zwischenüberschriften als Fragen. Sprich die Leser mit Sie an.“"],
          ],
        },
        {
          t: "steps",
          items: [
            { title: "Stichpunkte schreiben", text: "Fakten, Abläufe und Erfahrungen kommen von Ihnen. Stichpunkte genügen." },
            { title: "Entwurf erzeugen", text: "Mit einem Auftrag wie oben. Daten von Kunden gehören nicht hinein." },
            { title: "Fakten prüfen", text: "Jede Zahl, jeden Namen und jede Regel mit Ihren Stichpunkten vergleichen. Was dort nicht steht, streichen oder belegen." },
            { title: "Erfahrung ergänzen", text: "Ein Beispiel aus Ihrer Arbeit, eine typische Rückfrage, eine Besonderheit vor Ort." },
            { title: "Metadaten prüfen", text: "Titel, Beschreibung und Alt-Texte so prüfen wie den Text selbst." },
            { title: "Offenlegen, wo erwartet", text: "Google empfiehlt, die Nutzung von Automatisierung und KI offenzulegen, wenn Leser das vernünftigerweise erwarten würden." },
          ],
        },
        {
          t: "p",
          text: "Den vollständigen Rahmen für eine Seite, von der Leitfrage bis zur Freigabe, bietet unsere [Briefing-Vorlage](/blog/geo-content-briefing-vorlage-2026#vorlage). Wie Sie die Beschreibung im Unternehmensprofil aufbauen, steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren#leistungen-beschreibung).",
        },
      ],
    },
    {
      id: "rezensionen",
      title: "Antworten auf Rezensionen mit KI-Entwurf",
      answer:
        "KI kann Antworten auf Rezensionen entwerfen, aber jede Antwort erscheint öffentlich unter der Rezension und wird vorher von Google auf die Inhaltsrichtlinien geprüft. Ein Mensch liest die Rezension, prüft den Entwurf und gibt ihn frei.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Rezension lesen", text: "Worum geht es wirklich: Wartezeit, Preis, Ergebnis, Umgang? Halten Sie den Kern in einem Satz fest." },
            { title: "Ohne Personendaten fragen", text: "Geben Sie dem Assistenten den Kern und den gewünschten Ton, aber keine Namen, Telefonnummern oder Angaben zu Behandlungen." },
            { title: "Entwurf prüfen", text: "Geht die Antwort auf den konkreten Punkt ein? Klingt sie nach Ihnen? Steht etwas über die Person darin, das nicht öffentlich gehört?" },
            { title: "Freigeben", text: "Antwort im Profil veröffentlichen. Die Prüfung durch Google dauert laut Hilfe meist bis zu zehn Minuten, manchmal bis zu 30 Tage." },
          ],
        },
        {
          t: "p",
          text: "Zu personenbezogenen Daten zählen die Richtlinien für Nutzerbeiträge unter anderem vollständige Namen und Nachnamen sowie Finanz- und Gesundheitsangaben. Bei Praxen, Kanzleien und Beratern kommt die Schweigepflicht hinzu, siehe [Negative Google-Bewertungen](/blog/negative-google-bewertungen#berufsgeheimnis). Formulierungshilfen bieten die [Vorlagen für Bewertungsantworten](/blog/bewertungs-antworten-vorlagen).",
        },
        {
          t: "note",
          label: "Was KI hier nicht darf",
          text: "Rezensionen über den eigenen Betrieb schreiben. Google verbietet Inhalte, die nicht auf einem echten Erlebnis beruhen, ebenso bezahlte Bewertungen und Bewertungen durch Mitarbeiter. Wie Sie fair um Bewertungen bitten, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen#regeln).",
        },
      ],
    },
    {
      id: "bilder-und-alt-texte",
      title: "Fotos, Grafiken und Alt-Texte",
      answer:
        "Für das Unternehmensprofil zählen echte Fotos, die Ihren Betrieb realistisch zeigen. KI eignet sich für Grafiken auf der Website und für Entwürfe von Alt-Texten, wenn ein Mensch prüft, ob sie das Bild richtig beschreiben.",
      blocks: [
        {
          t: "table",
          caption: "Bildarten und der Einsatz von KI",
          head: ["Bildart", "KI einsetzen?", "Was Google schreibt"],
          rows: [
            ["Fotos im Unternehmensprofil", "Nein, nur echte Aufnahmen, höchstens leicht korrigiert", "Scharf, gut ausgeleuchtet, realistisch, nicht stark bearbeitet und nicht zu viele Filter"],
            ["Grafiken und Illustrationen auf der Website", "Möglich, wenn sie nicht als Foto des Betriebs auftreten", "Bei automatisch erstellten Inhalten rät Google, zu erklären, wie sie entstanden sind"],
            ["Produktbilder im Merchant Center", "Nur mit Kennzeichnung", "KI-erzeugte Bilder brauchen dort die IPTC-Metadaten DigitalSourceType TrainedAlgorithmicMedia"],
            ["Alt-Texte", "Als Entwurf", "Hilfreich, informativ, passend zum Kontext. Keine Alt-Attribute voller Schlüsselwörter"],
          ],
        },
        {
          t: "p",
          text: "Ein Beispiel nach Googles Muster: Schlecht ist ein Alt-Text wie „Friseur Salzburg Friseur günstig Haarschnitt Salzburg“. Besser ist „Friseurin schneidet einer Kundin im Salon die Haare, im Hintergrund die Waschplätze“. Lassen Sie KI solche Beschreibungen vorschlagen und prüfen Sie jede gegen das Bild.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ein Hotel, das KI-Bilder von Zimmern zeigt, weckt Erwartungen, die das echte Zimmer nicht erfüllt. Das rächt sich spätestens in der ersten Rezension. Zeigen Sie Räume, Team und Arbeiten so, wie Gäste und Kunden sie erleben. Motive und Vorgaben beschreibt [Google Business Fotos](/blog/gbp-fotos-optimieren#echt-statt-stock).",
        },
      ],
    },
    {
      id: "daten",
      title: "Was Sie in KI-Werkzeuge eingeben",
      answer:
        "Bevor Sie Kundendaten, Rezensionen mit Namen oder interne Zahlen eingeben, prüfen Sie, ob der Anbieter Eingaben zum Training nutzt und ob Menschen Chats lesen können. Die Anbieter dokumentieren das je nach Konto unterschiedlich.",
      blocks: [
        {
          t: "table",
          caption: "Datenverwendung laut Anbieter (Stand 11. Oktober 2026)",
          head: ["Werkzeug und Konto", "Training mit Ihren Eingaben", "Weitere Hinweise"],
          rows: [
            ["ChatGPT, persönliches Konto", "OpenAI kann Inhalte zum Training nutzen. Abschalten können Sie das in den Datenkontrollen mit der Einstellung, die in der englischen Hilfe „Improve the model for everyone“ heißt", "Temporäre Chats werden nicht zum Training genutzt, solange sie temporär sind, OpenAI kann sie aber bis zu 30 Tage zur Sicherheit aufbewahren"],
            ["ChatGPT Business, Enterprise, Edu und Programmierschnittstelle", "Laut OpenAI standardmäßig nicht", "Bei der Programmierschnittstelle können Organisationen das Teilen von Daten selbst einschalten"],
            ["Gemini-App, privates Google-Konto", "Ist die Einstellung „Aktivitäten speichern“ aktiv, nutzt Google die Aktivitäten auch zum Training generativer KI-Modelle. Ist sie aus, nicht, außer Sie senden Feedback", "Ein Teil der Chats wird von menschlichen Prüfern gelesen und bis zu drei Jahre getrennt vom Konto aufbewahrt. Google bittet, keine vertraulichen Informationen einzugeben"],
            ["Gemini mit Konto von Google Workspace", "Es können andere Bedingungen gelten", "Google verweist auf eigene Datenschutzhinweise für Workspace"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für Texte, Gliederungen und Antworten auf Rezensionen brauchen Sie keine personenbezogenen Daten. Lassen Sie sie weg. Ob und wie Sie KI im Betrieb datenschutzrechtlich einsetzen dürfen, ist eine Rechtsfrage, die dieser Artikel nicht beantwortet. Praktische Regeln für ein Team stehen in [Claude im Team einführen](/blog/claude-im-team-einfuehren#datenregeln). Was die KI-Verordnung zur KI-Kompetenz verlangt, erklärt [KI-Kompetenz nach Art. 4 KI-Verordnung](/blog/ki-kompetenzpflicht-art-4-ki-verordnung).",
        },
      ],
    },
    {
      id: "ablauf",
      title: "Ein sicherer Ablauf mit menschlicher Prüfung",
      answer:
        "Ein sicherer Ablauf hat vier Stationen: Sie liefern die Fakten, die KI liefert den Entwurf, eine fachkundige Person prüft, und erst dann wird veröffentlicht. Für Rezensionsantworten und Profilangaben gilt dasselbe, nur kürzer.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Eingabe vorbereiten", text: "Eigene Stichpunkte, eine klare Leitfrage, keine personenbezogenen Daten." },
            { title: "Entwurf erstellen", text: "Mit einem Auftrag, der das Erfinden von Fakten verbietet und fehlende Angaben markieren lässt." },
            { title: "Fachlich prüfen", text: "Jede Tatsachenbehauptung gegen Ihre Unterlagen. Google nennt die manuelle Prüfung von KI-Inhalten vor der Veröffentlichung ausdrücklich entscheidend." },
            { title: "Richtlinien prüfen", text: "Keine Rezensionen ohne echtes Erlebnis, keine stark bearbeiteten Fotos im Profil, keine Massenseiten, Metadaten passend zum Inhalt." },
            { title: "Freigeben und festhalten", text: "Wer hat geprüft, wann, mit welcher Quelle? Eine einfache Tabelle genügt." },
            { title: "Wirkung prüfen", text: "Nach einigen Wochen in der Search Console und in Stichproben nachsehen, ob die Seite gefunden und richtig wiedergegeben wird." },
          ],
        },
        {
          t: "table",
          caption: "Wer was prüft (Vorschlag)",
          head: ["Aufgabe", "Wer prüft", "Woran"],
          rows: [
            ["Leistungsseite", "Fachkraft und Inhaber", "Fakten, Preise mit Stand, Übereinstimmung mit dem Unternehmensprofil"],
            ["Antwort auf Rezension", "Wer den Kunden betreut hat", "Bezug zur Rezension, keine personenbezogenen Daten, Ton"],
            ["Beschreibung im Profil", "Inhaber", "Richtigkeit, keine Links, keine Aktionen oder Preise im Mittelpunkt"],
            ["Alt-Texte", "Wer die Website pflegt", "Beschreibt der Text das Bild?"],
          ],
        },
      ],
    },
    {
      id: "messen",
      title: "Prüfen und messen ohne Wunderwerkzeug",
      answer:
        "Ob KI-gestützte Inhalte wirken, zeigen die Search Console und eigene Stichproben, nicht die Versprechen von Werkzeugen. Laut Google hat kein Werkzeug eines Drittanbieters Zugang zu Googles internen Ranking- oder KI-Systemen.",
      blocks: [
        {
          t: "table",
          caption: "Prüfwerkzeuge von Google und was sie zeigen",
          head: ["Werkzeug", "Was es zeigt", "Grenze"],
          rows: [
            ["Search Console, Leistungsbericht", "Klicks, Impressionen, Klickrate und Position nach Suchanfragen, Seiten, Ländern und Geräten", "Zugriffe aus KI-Funktionen stecken im Suchtyp „Web“, nicht getrennt"],
            ["Search Console, Bericht für generative KI-Funktionen", "Impressionen in Übersicht mit KI und KI-Modus, seit dem 31. August 2026 für alle Websites", "Klicks beschreibt die Hilfeseite für diesen Bericht nicht"],
            ["Test für Rich-Suchergebnisse", "Ob strukturierte Daten gültig sind, auch solche, die KI vorgeschlagen hat", "Keine Aussage über KI-Antworten"],
            ["Google Trends", "Relatives Suchinteresse auf einer Skala von 0 bis 100", "Stichprobe mit statistischem Rauschen, Begriffe mit wenig Suchvolumen erscheinen als 0"],
          ],
        },
        {
          t: "p",
          text: "Für Antworten von ChatGPT und anderen Assistenten bleibt die Stichprobe: feste Fragen mit Ortsangabe, einmal im Monat, Ergebnis mit Datum festhalten. OpenAI weist selbst darauf hin, dass Quellenangaben falsch oder veraltet sein können. Wie Sie das aufbauen, zeigt [KI-Sichtbarkeit prüfen](/blog/ai-visibility-checklist#messen).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Erkennt und bestraft Google KI-Texte?",
      a: "Googles Richtlinien richten sich gegen Zweck und Ergebnis, nicht gegen das Werkzeug. Gegen die Spam-Richtlinien verstößt, wer Automatisierung einschließlich KI mit dem Hauptzweck nutzt, Suchrankings zu manipulieren, oder viele Seiten ohne Mehrwert erzeugt. Außerdem verlangt Google, KI-Inhalte vor der Veröffentlichung manuell zu prüfen.",
    },
    {
      q: "Darf ich Antworten auf Rezensionen mit KI schreiben?",
      a: "Als Entwurf ja. Verantwortlich bleiben Sie: Die Antwort erscheint öffentlich im Namen Ihres Betriebs und wird von Google auf die Inhaltsrichtlinien geprüft. Die Profilverwaltung mit der Gemini-Web-App, die Antworten entwerfen kann, gibt es laut Google nicht im Europäischen Wirtschaftsraum.",
    },
    {
      q: "Darf ich KI-Bilder im Unternehmensprofil hochladen?",
      a: "Google verlangt für Fotos im Profil eine realistische Darstellung ohne starke Bearbeitung und rät für Medien auf Maps zu eigenen Aufnahmen am Ort, ohne Stockfotos oder manipulierte Bilder. Ein KI-Bild zeigt Ihren Betrieb nicht, wie er ist. Nach unserer Einschätzung gehört es deshalb nicht ins Profil.",
    },
    {
      q: "Kann ich mit KI Seiten für alle Orte in meinem Einzugsgebiet erstellen?",
      a: "Nicht als Massenware. Viele Seiten mit generativer KI ohne Mehrwert zu erzeugen, kann laut Google Missbrauch skalierter Inhalte sein, und Seiten, die nur für ähnliche Suchanfragen angelegt werden, gelten als Brückenseiten. Eine Seite je Ort lohnt sich nur, wenn Sie dort tätig sind und etwas Eigenes zu sagen haben.",
    },
    {
      q: "Welches KI-Werkzeug ist das beste für meinen Betrieb?",
      a: "Eine Rangliste geben wir nicht. Entscheidend sind Aufgabe, Datenverwendung und Verfügbarkeit: Wird mit Ihren Eingaben trainiert, lesen Menschen mit, gibt es die Funktion in Ihrem Land? Testen Sie zwei Werkzeuge mit derselben echten Aufgabe und vergleichen Sie, wie viel Sie danach korrigieren müssen.",
    },
    {
      q: "Muss ich KI-Texte kennzeichnen?",
      a: "Für die Google-Suche empfiehlt Google, die Nutzung von Automatisierung offenzulegen, wenn Leser das vernünftigerweise erwarten würden. Ob für Ihren Fall rechtliche Kennzeichnungspflichten gelten, beantwortet dieser Artikel nicht. Lassen Sie das im Zweifel rechtlich prüfen.",
    },
  ],
  sources: [
    { title: "Google Search’s guidance on using generative AI content on your website (Stand 1. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" },
    { title: "Creating helpful, reliable, people-first content (Stand 5. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { title: "Spam policies for Google web search (Stand 28. August 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Review snippet (Review, AggregateRating) structured data (Stand 8. September 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet" },
    { title: "Google Images SEO best practices (Stand 2. März 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/google-images" },
    { title: "Latest documentation updates (FAQ-Snippets ab 7. Mai 2026 eingestellt)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Prohibited & restricted content (Richtlinien für Nutzerbeiträge)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    { title: "Tipps zum Veröffentlichen von Medien auf Google Maps", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7411351?hl=de" },
    { title: "Fotos und Videos in Ihrem Unternehmensprofil verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6103862?hl=de" },
    { title: "Einschränkungen von Unternehmensprofilen bei Richtlinienverstößen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14114287?hl=de" },
    { title: "Guidelines for representing your business on Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=en" },
    { title: "Manage customer reviews", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3474050?hl=en" },
    { title: "Manage your Business Profile description (KI-Vorschlag)", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/13682007?hl=en" },
    { title: "Unternehmensprofil bei Google mit der Gemini Web-App verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/17142585?hl=de" },
    { title: "Leistungsbericht (Google-Suchergebnisse): Übersicht und grundlegende Einrichtung", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=en" },
    { title: "Test für Rich-Suchergebnisse", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7445569?hl=de" },
    { title: "Häufig gestellte Fragen zu Google Trends-Daten", publisher: "Google Trends-Hilfe", url: "https://support.google.com/trends/answer/4365533?hl=de" },
    { title: "Privacy Hub für Gemini-Apps", publisher: "Gemini-Apps-Hilfe (Google)", url: "https://support.google.com/gemini/answer/13594961?hl=de" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
    { title: "How your data is used to improve model performance", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance" },
    { title: "Temporary Chat FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/8914046-temporary-chat-faq" },
    { title: "Bing Adds GEO to Official Guidelines, Expands AI Abuse Definitions (27. Februar 2026)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442" },
  ],
  related: [
    { slug: "unternehmensprofil-ki-funktionen-2026", title: "Unternehmensprofil und KI-Funktionen" },
    { slug: "geo-content-briefing-vorlage-2026", title: "GEO-Content-Briefing: Vorlage" },
    { slug: "negative-google-bewertungen", title: "Negative Google-Bewertungen" },
    { slug: "ki-kompetenzpflicht-art-4-ki-verordnung", title: "KI-Kompetenz nach Art. 4 KI-Verordnung" },
  ],
  cta: {
    title: "Arbeiten Ihre KI-Texte für Sie?",
    text: "Wir prüfen Stichproben Ihrer Website-Texte, Ihrer Profilbeschreibung und Ihrer Antworten auf Rezensionen auf Fakten, Übereinstimmung mit dem Unternehmensprofil und Googles Richtlinien. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
