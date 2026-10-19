import type { V4Article } from "../types";

const article: V4Article = {
  slug: "schema-strategie-ai-retrieval",
  lang: "de",
  seoTitle: "Strukturierte Daten und KI-Suche: was belegt ist",
  seoDescription:
    "Brauchen KI-Antworten eigenes Schema Markup? Was Google und Microsoft dokumentieren, welche Daten lokalen Betrieben helfen und welche Versprechen Mythen sind.",
  h1: "Schema-Strategie für die KI-Suche: Was strukturierte Daten leisten und was ein Mythos ist",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber und Webverantwortliche lokaler Betriebe, denen jemand „KI-Schema“ verkaufen will oder die wissen möchten, ob ihr Markup für ChatGPT, Copilot oder die Übersicht mit KI reicht. Sie erfahren, was die Anbieter selbst schreiben, welche Daten sinnvoll bleiben und welche Aussagen keine Grundlage haben.",
  answer:
    "Für die KI-Funktionen der Google-Suche brauchen Sie laut Google kein besonderes Schema Markup. Strukturierte Daten bleiben trotzdem sinnvoll: LocalBusiness und Organization beschreiben Ihren Betrieb eindeutig, sameAs verbindet Ihre Profile. Microsoft schreibt, Schema helfe auch KI-Systemen beim Verstehen. Entscheidend ist, dass Markup, sichtbarer Text und Unternehmensprofil übereinstimmen. Eine Nennung in KI-Antworten garantiert kein Markup.",
  takeaways: [
    "Google schreibt ausdrücklich, dass es für die generative KI-Suche kein spezielles schema.org-Markup gibt und strukturierte Daten dafür nicht erforderlich sind.",
    "Google empfiehlt strukturierte Daten trotzdem weiter, vor allem wegen der Rich-Suchergebnisse. In seiner Liste bewährter Verfahren für KI-Funktionen steht: Markup muss zum sichtbaren Text passen.",
    "Microsoft schreibt, Schema helfe Suchmaschinen und KI-Systemen, Inhalte zu verstehen. OpenAI, Perplexity und Anthropic erwähnen strukturierte Daten in den hier geprüften Seiten nicht.",
    "Für lokale Betriebe reichen LocalBusiness mit genauem Untertyp und Organization mit Logo und sameAs. Für Google Maps ist das Unternehmensprofil maßgeblich, strukturierte Daten nennt Google dort nicht als Faktor.",
    "FAQ-Markup und Bewertungsmarkup für den eigenen Betrieb bringen in der Google-Suche keine Sonderdarstellung mehr, ein eigenes „KI-Schema“ gibt es nicht. FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr an.",
  ],
  publishedAt: "2026-05-20",
  updatedAt: "2026-10-12",
  readingTime: 11,
  sections: [
    {
      id: "was-anbieter-sagen",
      title: "Was die Anbieter zu strukturierten Daten und KI dokumentieren",
      answer:
        "Google sagt klar, dass KI-Funktionen kein besonderes Markup brauchen. Microsoft beschreibt Schema als Hilfe für Suchmaschinen und KI-Systeme. OpenAI, Perplexity und Anthropic nennen strukturierte Daten in ihren Seiten zu Suche und Crawlern nicht.",
      blocks: [
        {
          t: "p",
          text: "Viele Anleitungen behaupten, KI-Systeme würden JSON-LD „bevorzugt lesen“. Prüft man die Dokumentation der Anbieter, sieht das Bild nüchterner aus. Die folgende Tabelle fasst zusammen, was wir im Oktober 2026 in den offiziellen Quellen gefunden haben.",
        },
        {
          t: "table",
          caption: "Strukturierte Daten in der Dokumentation der KI-Anbieter (Stand 11. Oktober 2026)",
          head: ["Anbieter", "Was dokumentiert ist", "Was daraus folgt"],
          rows: [
            ["Google (Übersicht mit KI, KI-Modus)", "Kein spezielles schema.org-Markup nötig, keine zusätzlichen technischen Voraussetzungen. Strukturierte Daten sollen zum sichtbaren Text passen", "Normales, korrektes Markup genügt. Ein „KI-Schema“ gibt es nicht"],
            ["Microsoft (Bing, Copilot)", "Schema helfe Suchmaschinen und KI-Systemen, Inhalte zu verstehen (Blogbeitrag von Microsoft Bing, Oktober 2025)", "Markup ist bei Microsoft ein ausdrücklich genanntes Hilfsmittel, keine Voraussetzung"],
            ["OpenAI (ChatGPT-Suche)", "Strukturierte Daten werden nicht erwähnt. Genannt wird, dass OAI-SearchBot nicht gesperrt sein darf", "Für ChatGPT ist der Crawler-Zugriff die dokumentierte Bedingung"],
            ["Perplexity", "Seite zu den Crawlern ohne Hinweis auf strukturierte Daten", "Nicht belegt, ob und wie Markup genutzt wird"],
            ["Anthropic (Claude)", "Hilfeseite zu den Crawlern ohne Hinweis auf strukturierte Daten", "Nicht belegt, ob und wie Markup genutzt wird"],
          ],
        },
        {
          t: "p",
          text: "Wie die einzelnen Dienste lokale Betriebe auswählen, steht in eigenen Artikeln: [ChatGPT-Suche](/blog/chatgpt-search-lokale-unternehmen-2026), [Bing und Copilot](/blog/bing-copilot-local-seo-2026) sowie [Perplexity und Claude](/blog/perplexity-claude-lokale-sichtbarkeit). Hier geht es nur um die Frage, welche Rolle strukturierte Daten dabei spielen.",
        },
      ],
    },
    {
      id: "google",
      title: "Google: kein besonderes Markup, aber weiterhin sinnvoll",
      answer:
        "Laut Google sind strukturierte Daten für die generative KI-Suche nicht erforderlich. Google rät trotzdem, sie weiter zu nutzen, weil sie für Rich-Suchergebnisse in Frage kommen, und verlangt, dass sie zum sichtbaren Text passen.",
      blocks: [
        {
          t: "p",
          text: "Im Mai 2026 hat Google einen eigenen Leitfaden zur Optimierung für generative KI-Funktionen veröffentlicht, auch auf Deutsch unter dem Titel „Website für generative KI-Funktionen in der Google Suche optimieren“. Dort heißt es sinngemäß: Strukturierte Daten sind für die generative KI-Suche nicht erforderlich, und es gibt kein besonderes schema.org-Markup, das Sie hinzufügen müssen. Es sei aber sinnvoll, sie als Teil der gesamten Suchmaschinenoptimierung weiter zu verwenden, weil sie für Rich-Suchergebnisse in Frage kommen.",
        },
        {
          t: "p",
          text: "Auf der Seite „KI-Funktionen und deine Website“ nennt Google eine Liste bewährter Verfahren, die auch für die [Übersicht mit KI](/blog/google-ai-overviews-local-seo) und den [KI-Modus](/blog/google-ai-mode-local-seo-2026) gelten. Darin stehen unter anderem: Crawling erlauben, wichtige Inhalte als Text anbieten, strukturierte Daten an den sichtbaren Text anpassen und die Angaben im Unternehmensprofil aktuell halten.",
        },
        {
          t: "note",
          label: "Für lokale Betriebe wichtig",
          text: "Im Leitfaden zur Optimierung für generative KI-Funktionen schreibt Google, dass Merchant Center und Unternehmensprofile Produkten und Leistungen helfen können, in KI-Antworten und anderen Suchergebnissen sichtbar zu werden. Für einen Handwerksbetrieb oder eine Praxis ist das gepflegte [Google-Unternehmensprofil](/blog/google-my-business-optimieren) deshalb wichtiger als jede Zeile Markup.",
        },
        {
          t: "p",
          text: "Google schreibt außerdem, dass weder spezielle Textdateien für KI noch eine Aufteilung von Inhalten in kleine Stücke nötig sind. Was das für llms.txt bedeutet, erklärt [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "was-schema-leistet",
      title: "Was strukturierte Daten bei der KI-Suche realistisch leisten",
      answer:
        "Strukturierte Daten machen Fakten über Ihren Betrieb eindeutig: Name, Adresse, Telefon, Öffnungszeiten und Verbindungen zu Ihren Profilen. Wie stark einzelne KI-Systeme diese Daten beim Abruf nutzen, legt keiner der hier geprüften Anbieter im Detail offen.",
      blocks: [
        {
          t: "p",
          text: "Google beschreibt den Zweck strukturierter Daten allgemein: Sie helfen, den Inhalt einer Seite zu verstehen und Informationen über das Web und die Welt zu erfassen. Für Organization schreibt Google, das Markup helfe, die Verwaltungsangaben eines Unternehmens zu verstehen und es in den Suchergebnissen von anderen zu unterscheiden. Das ist für lokale Betriebe mit häufigen Namen wie „Malerbetrieb Huber“ oder „Physiotherapie am Markt“ besonders nützlich.",
        },
        {
          t: "ul",
          items: [
            "**Eindeutigkeit.** Markup sagt maschinenlesbar, welcher Betrieb gemeint ist, wo er sitzt und welche Profile zu ihm gehören.",
            "**Rich-Suchergebnisse.** Für bestimmte Typen kann Google besondere Darstellungen zeigen. Eine Garantie dafür gibt es laut Google nicht.",
            "**Abgleich.** Wenn Markup, Seitentext und Profil dieselben Angaben enthalten, entstehen keine widersprüchlichen Daten über Ihren Betrieb.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "KI-Antworten geben vor allem wieder, was als Text auf Seiten und in Profilen steht. Ob ein Sprachmodell beim Abruf den JSON-LD-Block selbst sieht oder nur den sichtbaren Text, beschreibt keiner der hier geprüften Anbieter im Detail. Unsere Folgerung: Jede wichtige Angabe muss als lesbarer Text auf der Seite stehen. Markup bestätigt diese Angaben, ersetzt sie aber nicht. Wie Sie Seiten so schreiben, dass sie richtig zitiert werden, zeigt [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen).",
        },
      ],
    },
    {
      id: "grundausstattung",
      title: "Die Grundausstattung für lokale Betriebe",
      answer:
        "Für die meisten lokalen Betriebe genügen zwei Typen: LocalBusiness mit dem genauesten Untertyp auf der Seite mit Ihren Unternehmensangaben und Organization mit Logo und sameAs. Pflicht sind bei LocalBusiness laut Google nur Name und Adresse.",
      blocks: [
        {
          t: "table",
          caption: "Strukturierte Daten, die lokalen Betrieben laut Google-Dokumentation nützen",
          head: ["Typ", "Wichtige Felder", "Wo es hingehört"],
          rows: [
            ["LocalBusiness mit Untertyp (etwa Dentist, Restaurant, Plumber)", "Pflicht: name, address. Empfohlen unter anderem: geo, openingHoursSpecification, telephone, url, priceRange", "Startseite oder Kontaktseite, bei mehreren Standorten jede Standortseite"],
            ["Organization", "Keine Pflichtfelder. Sinnvoll: logo, url, sameAs, Kontaktangaben, bei Bedarf vatID", "Meist die Startseite"],
            ["Event", "Name, Datum, Ort", "Nur wenn Sie öffentliche Veranstaltungen anbieten"],
          ],
        },
        {
          t: "p",
          text: "Google empfiehlt, für ein lokales Geschäft den genauesten LocalBusiness-Untertyp zu wählen und die Felder von Organization zu ergänzen. Wie die einzelnen Felder richtig gefüllt werden, steht ausführlich in [Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo#localbusiness). Dieser Artikel wiederholt das nicht.",
        },
        {
          t: "note",
          label: "Fiktives Beispiel",
          text: "Ein Malerbetrieb in Linz zeichnet auf seiner Kontaktseite LocalBusiness mit dem Untertyp HousePainter aus: Name wie auf dem Firmenschild, Adresse, Telefon mit +43, Öffnungszeiten Mo bis Fr 7 bis 16 Uhr und Koordinaten. Auf der Startseite steht Organization mit Logo und sameAs auf das Unternehmensprofil, die Facebook-Seite und den Eintrag bei der Wirtschaftskammer. Dieselben Angaben stehen als Text im Seitenfuß. Das Beispiel ist erfunden und zeigt nur den Aufbau.",
        },
      ],
    },
    {
      id: "sameas",
      title: "sameAs: Ihre Profile eindeutig verbinden",
      answer:
        "Mit sameAs nennen Sie Seiten auf anderen Websites, die denselben Betrieb beschreiben, etwa Ihr Unternehmensprofil, Branchenportale oder soziale Netzwerke. Das hilft bei der eindeutigen Zuordnung, wenn alle verlinkten Profile gepflegt sind und übereinstimmen.",
      blocks: [
        {
          t: "p",
          text: "Schema.org beschreibt sameAs als Adresse einer Referenzseite, die die Identität eines Dings eindeutig angibt. Google beschreibt das Feld bei Organization als Adresse einer Seite auf einer anderen Website mit zusätzlichen Informationen über Ihr Unternehmen. Gemeint sind Profile, die Sie selbst verwalten oder die Ihren Betrieb offiziell führen.",
        },
        {
          t: "steps",
          items: [
            { title: "Profile sammeln", text: "Notieren Sie alle Profile, die Ihnen gehören und aktuell sind: Unternehmensprofil, Bing Places, Apple Business, soziale Netzwerke, Kammer- oder Verbandseintrag, wichtige Branchenportale." },
            { title: "Angaben abgleichen", text: "Name, Adresse, Telefon und Öffnungszeiten müssen auf jedem Profil gleich sein. Abweichungen zuerst beheben, siehe [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Nur Gepflegtes verlinken", text: "Verwaiste Konten, fremde Seiten oder Verzeichnisse mit falschen Daten gehören nicht in sameAs." },
            { title: "Regelmäßig prüfen", text: "Wenn ein Profil gelöscht oder umbenannt wird, passen Sie die Liste an. Ein toter Link verbindet nichts." },
          ],
        },
        {
          t: "p",
          text: "Wie sameAs mit dem Unternehmensprofil und den Angaben in Verzeichnissen zusammenwirkt, damit Suchmaschinen Ihren Betrieb als eine eindeutige Einheit erkennen, beschreibt [Entity SEO für lokale Unternehmen](/blog/entity-seo-guide#strukturierte-daten).",
        },
      ],
    },
    {
      id: "uebereinstimmung",
      title: "Markup, Seite und Profil müssen übereinstimmen",
      answer:
        "Google verlangt, dass strukturierte Daten den sichtbaren Inhalt realitätsgetreu wiedergeben und nicht in die Irre führen. Für KI-Antworten ist das doppelt wichtig, weil widersprüchliche Angaben direkt in einer Antwort landen können.",
      blocks: [
        {
          t: "p",
          text: "In Googles allgemeinen Richtlinien für strukturierte Daten steht: Markieren Sie keine Inhalte, die für Leser der Seite nicht sichtbar sind. Die Daten müssen eine realitätsgetreue Darstellung der Seiteninhalte sein und dürfen Nutzer nicht täuschen. Verstöße können zu einer manuellen Maßnahme führen.",
        },
        {
          t: "table",
          caption: "Typische Widersprüche und ihre Folgen",
          head: ["Widerspruch", "Beispiel", "Lösung"],
          rows: [
            ["Alte Öffnungszeiten im Markup", "Seite sagt Sa geschlossen, JSON-LD sagt Sa 9 bis 13 Uhr", "Markup aus derselben Quelle wie den Seitentext erzeugen oder bei jeder Änderung mitpflegen"],
            ["Unsichtbare Angaben", "Leistungen oder Orte nur im Markup, nicht im Text", "Alles, was im Markup steht, auch sichtbar auf die Seite schreiben"],
            ["Abweichung zum Profil", "Andere Telefonnummer im Unternehmensprofil als auf der Website", "Alle drei Stellen am selben Tag ändern"],
            ["Werbender Name", "Ortsnamen oder Leistungen im Feld name, die nicht zum echten Firmennamen gehören", "Den echten Namen verwenden, wie auf Schild und Profil"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Regel „Markup passt zum sichtbaren Text“ ist von Google dokumentiert. Dass Widersprüche zwischen Website und Profilen in KI-Antworten falsch wiedergegeben werden, ist unsere Beobachtung aus Prüfungen. Wie Sie eine falsche Angabe an der Quelle berichtigen, steht in [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026).",
        },
      ],
    },
    {
      id: "mythen",
      title: "Was ein Mythos ist",
      answer:
        "Weder Google noch Microsoft, OpenAI, Perplexity oder Anthropic dokumentieren ein eigenes KI-Markup, eine Bevorzugung bestimmter Schema-Typen oder einen Zusammenhang zwischen Menge an Markup und Zitaten. Solche Aussagen sind Vermutungen oder Verkaufsargumente.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und der Stand der offiziellen Dokumentation",
          head: ["Aussage", "Stand der Dokumentation"],
          rows: [
            ["„Für KI-Antworten braucht man ein spezielles KI-Schema“", "Google schreibt ausdrücklich, dass es kein besonderes schema.org-Markup für KI-Funktionen gibt. Andere Anbieter nennen keines."],
            ["„ChatGPT liest JSON-LD bevorzugt“", "OpenAI erwähnt strukturierte Daten in den geprüften Seiten nicht. Nicht belegt."],
            ["„FAQPage-Markup bringt Sie in KI-Antworten“", "Nicht belegt. Google zeigt FAQ-Snippets seit dem 7. Mai 2026 gar nicht mehr an. Fragen und Antworten als normaler Text auf der Seite bleiben nützlich."],
            ["„Je mehr Schema-Typen, desto mehr Zitate“", "Kein Anbieter nennt einen solchen Zusammenhang. Markup für Inhalte, die nicht auf der Seite stehen, verstößt sogar gegen Googles Richtlinien."],
            ["„Bewertungssterne im eigenen Markup stärken das Vertrauen der KI“", "Nicht belegt. Für Bewertungen über das eigene Unternehmen zeigt Google keine Sterne an, siehe [Review Schema](/blog/review-schema-implementierung#self-serving)."],
            ["„Mit dem richtigen Markup ist die Nennung sicher“", "Google schreibt, dass Indexierung und Ausspielung nicht garantiert sind, auch wenn alle Anforderungen erfüllt sind."],
          ],
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels empfahl fünf „Pflicht-Typen“ einschließlich FAQPage und ein Beispiel mit AggregateRating für den eigenen Betrieb. Beides ist überholt: FAQ-Snippets gibt es nicht mehr, und eigene Bewertungen führen nicht zu Sternen. Was mit vorhandenem FAQ- und HowTo-Markup geschieht, steht in [Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo#eingestellt).",
        },
        {
          t: "p",
          text: "Einordnung des Begriffs GEO und dazu, welche Versprechen zur KI-Optimierung belegt sind und welche nicht, finden Sie in [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
      ],
    },
    {
      id: "vorgehen",
      title: "So gehen Sie vor",
      answer:
        "Prüfen Sie zuerst den Bestand, bereinigen Sie überholtes Markup, vervollständigen Sie LocalBusiness und Organization mit sameAs und gleichen Sie alles mit Seitentext und Profil ab. Danach testen Sie technisch und beobachten die KI-Antworten in Stichproben.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Bestand prüfen", text: "Startseite und Kontaktseite im Test für Rich-Suchergebnisse aufrufen. Notieren Sie, welche Typen vorhanden sind und welche Fehler gemeldet werden." },
            { title: "Bereinigen", text: "AggregateRating und Review für den eigenen Betrieb entfernen. Neues FAQ- oder HowTo-Markup nicht mehr einbauen." },
            { title: "LocalBusiness vervollständigen", text: "Genauester Untertyp, Name, Adresse, Telefon, Öffnungszeiten, Koordinaten und URL, exakt wie im Unternehmensprofil." },
            { title: "Organization mit sameAs ergänzen", text: "Logo und die Liste Ihrer gepflegten Profile auf der Startseite." },
            { title: "Mit dem Seitentext abgleichen", text: "Jede Angabe im Markup muss auch als Text auf der Seite stehen. Fehlendes ergänzen, nicht das Markup aufblähen." },
            { title: "Technisch testen", text: "Test für Rich-Suchergebnisse für Googles Anforderungen, Schema Markup Validator für das gesamte schema.org-Vokabular, URL-Prüftool in der Search Console für die veröffentlichte Seite." },
            { title: "KI-Antworten beobachten", text: "Einmal im Monat dieselben Fragen mit Ortsangabe in den wichtigsten KI-Diensten stellen und festhalten, welche Angaben über Ihren Betrieb genannt werden." },
          ],
        },
        {
          t: "p",
          text: "Wie Sie diese Stichproben sauber dokumentieren, beschreibt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026). Wo lokale Betriebe in KI-Diensten überhaupt erscheinen und was jeder Dienst braucht, fasst [KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen) zusammen.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Brauche ich besonderes Schema Markup, um in der Übersicht mit KI zu erscheinen?",
      a: "Nein. Google schreibt, dass es für die KI-Funktionen der Suche kein besonderes schema.org-Markup gibt und keine zusätzlichen technischen Voraussetzungen. Normales, korrektes Markup, das zum sichtbaren Text passt, genügt.",
    },
    {
      q: "Liest ChatGPT meine strukturierten Daten?",
      a: "OpenAI dokumentiert das nicht. In den Hilfeseiten zur Suche wird als Bedingung genannt, dass OAI-SearchBot nicht gesperrt sein darf, auch nicht durch Hoster oder CDN. Sorgen Sie deshalb dafür, dass alle wichtigen Angaben auch als Text auf der Seite stehen.",
    },
    {
      q: "Lohnt sich strukturiertes Markup dann überhaupt noch?",
      a: "Ja, in überschaubarem Umfang. Google empfiehlt strukturierte Daten weiterhin, unter anderem wegen der Rich-Suchergebnisse, und Microsoft beschreibt Schema als Hilfe für Suchmaschinen und KI-Systeme. Für lokale Betriebe genügen meist LocalBusiness und Organization mit sameAs.",
    },
    {
      q: "Soll ich vorhandenes FAQPage-Markup entfernen?",
      a: "Unsere Einschätzung: Entfernen ist nicht dringend, solange das Markup zum sichtbaren Text passt. Google zeigt FAQ-Snippets seit dem 7. Mai 2026 aber nicht mehr an, neu einbauen lohnt sich daher nicht. Die Fragen und Antworten als Text auf der Seite bleiben für Besucher und KI-Systeme lesbar.",
    },
    {
      q: "Welche Seiten gehören in sameAs?",
      a: "Seiten auf anderen Websites, die Ihren Betrieb beschreiben und die Sie pflegen: Unternehmensprofile, soziale Netzwerke, Kammer- oder Verbandseinträge und wichtige Branchenportale. Verlinken Sie nur Profile mit korrekten, aktuellen Angaben.",
    },
    {
      q: "Kann eine Agentur mir mit Schema eine Nennung in KI-Antworten garantieren?",
      a: "Nein. Google schreibt, dass Indexierung und Ausspielung nicht garantiert sind, selbst wenn eine Seite alle Anforderungen erfüllt. Kein KI-Anbieter dokumentiert, dass bestimmtes Markup zu Nennungen führt.",
    },
  ],
  sources: [
    { title: "Optimizing your website for generative AI features on Google Search (zuletzt aktualisiert 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "AI features and your website (zuletzt aktualisiert 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Einführung in strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de" },
    { title: "Allgemeine Richtlinien für strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de" },
    { title: "Local business (LocalBusiness) structured data", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=en" },
    { title: "Organization structured data", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/organization?hl=en" },
    { title: "Latest documentation updates (FAQ-Snippets ab 7. Mai 2026 eingestellt)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)", publisher: "Microsoft Advertising Blog (Microsoft Bing)", url: "https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers" },
    { title: "Microsoft Bing/Copilot use schema for its LLMs (Bericht, 20. März 2025)", publisher: "Search Engine Land", url: "https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Perplexity Crawlers", publisher: "Perplexity Docs", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/8896518" },
    { title: "sameAs", publisher: "Schema.org", url: "https://schema.org/sameAs" },
    { title: "ChatGPT search", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
  ],
  related: [
    { slug: "schema-markup-local-seo", title: "Schema Markup für lokale Unternehmen" },
    { slug: "entity-seo-guide", title: "Entity SEO für lokale Unternehmen" },
    { slug: "website-content-ai-suchmaschinen", title: "Website-Inhalte für KI-Suchmaschinen" },
    { slug: "google-ai-overviews-local-seo", title: "Übersicht mit KI und Local SEO" },
  ],
  cta: {
    title: "Passen Ihr Markup, Ihre Website und Ihr Profil zusammen?",
    text: "Wir prüfen Ihre strukturierten Daten, vergleichen sie mit dem sichtbaren Text und Ihrem Google-Unternehmensprofil und sehen nach, was KI-Dienste über Ihren Betrieb antworten. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
