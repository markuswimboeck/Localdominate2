import type { V4Article } from "../types";

const article: V4Article = {
  slug: "reddit-local-seo-ai-zitate-2026",
  lang: "de",
  seoTitle: "Reddit und KI-Antworten: Was lokale Betriebe wissen sollten",
  seoDescription:
    "Reddit als Quelle für ChatGPT und Google: was die Verträge regeln, was Reddit bei Eigenwerbung erlaubt, wo das UWG Grenzen zieht und wie Sie Erwähnungen finden.",
  h1: "Reddit und Foren in KI-Antworten: Was belegt ist, was erlaubt ist und wie lokale Betriebe ehrlich mitreden",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die in KI-Antworten immer wieder Reddit-Threads als Quelle sehen und wissen wollen, ob sie dort aktiv werden sollten. Sie erfahren, was Google und OpenAI mit Reddit vereinbart haben, welche Regeln Reddit und das Wettbewerbsrecht setzen und wie Sie Erwähnungen Ihres Betriebs beobachten.",
  answer:
    "Google und OpenAI haben 2024 Verträge mit Reddit geschlossen und erhalten Reddit-Inhalte über eine Datenschnittstelle. Reddit-Diskussionen können in ihren Antworten auftauchen, auch über die normale Websuche. Wie oft und nach welchen Regeln, dokumentiert keiner der Anbieter. Lokale Betriebe dürfen auf Reddit mitreden, aber offen als Betrieb. Spam und Stimmenmanipulation verstoßen gegen Reddits Regeln, verdeckte Eigenwerbung und gefälschte Empfehlungen gegen das Wettbewerbsrecht.",
  takeaways: [
    "Google (22. Februar 2024) und OpenAI (16. Mai 2024) haben Zugang zu Reddits Datenschnittstelle vereinbart. Google darf die Inhalte laut eigener Aussage anzeigen und für Training nutzen.",
    "Wie stark Reddit-Inhalte in KI-Antworten gewichtet werden, legt kein Anbieter offen. Zahlen wie „ab 50 Upvotes wird man zitiert“ sind nicht belegt.",
    "Reddit verbietet Spam und Stimmenmanipulation, auch über mehrere Konten. Jede Community kann eigene, strengere Regeln zur Eigenwerbung haben.",
    "Wer sich als Betrieb als unabhängiger Kunde ausgibt oder gefälschte Empfehlungen veranlasst, handelt nach dem UWG und der EU-Richtlinie über unlautere Geschäftspraktiken unlauter.",
    "Beobachten Sie Erwähnungen mit der Reddit-Suche, Google Alerts und regelmäßigen Stichproben in KI-Antworten, und reagieren Sie offen auf Kritik.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "warum-reddit",
      title: "Warum Reddit in KI-Antworten auftaucht",
      answer:
        "Reddit ist ein großes öffentliches Forum, in dem Menschen Empfehlungen und Erfahrungen austauschen, auch zu Betrieben vor Ort. Google und OpenAI haben dafür eigene Verträge mit Reddit geschlossen. Wie oft Reddit in Antworten zitiert wird, dokumentieren sie nicht.",
      blocks: [
        {
          t: "p",
          text: "Wer ChatGPT oder Google nach einem guten Handwerker, einem Restaurant oder einer Praxis fragt, sieht unter den Quellen manchmal Reddit-Threads. Das ist kein Zufall: Fragen wie „Kennt jemand einen ehrlichen Autoschrauber in Linz?“ werden in Foren gestellt und beantwortet. KI-Systeme, die das Web durchsuchen, finden solche Diskussionen und fassen sie zusammen. Wie das Zitieren grundsätzlich funktioniert, beschreibt [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen).",
        },
        {
          t: "p",
          text: "Für Reddit kommt etwas hinzu, das für die meisten anderen Foren nicht gilt: vertraglich geregelter Zugang. Google und OpenAI erhalten Reddit-Inhalte laut eigener Ankündigung über Reddits Datenschnittstelle, die Inhalte in Echtzeit und strukturiert liefert. Was diese Verträge im Einzelnen regeln, steht im nächsten Abschnitt.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Dass Reddit für lokale Fragen im deutschsprachigen Raum ähnlich häufig zitiert wird wie für englischsprachige, ist nicht belegt. Für viele Städte und Branchen in Deutschland, Österreich und der Schweiz gibt es nur wenige aktive Diskussionen. Prüfen Sie für Ihre eigenen Fragen, ob Reddit dort überhaupt als Quelle erscheint, bevor Sie Zeit investieren.",
        },
      ],
    },
    {
      id: "vertraege",
      title: "Was die Verträge mit Google und OpenAI regeln",
      answer:
        "Google gab am 22. Februar 2024 bekannt, Reddit-Inhalte über die Datenschnittstelle anzuzeigen, für Training zu nutzen und anderweitig zu verwenden. OpenAI kündigte am 16. Mai 2024 an, Reddit-Inhalte über dieselbe Schnittstelle in ChatGPT und neue Produkte zu bringen.",
      blocks: [
        {
          t: "table",
          caption: "Die beiden öffentlich angekündigten Vereinbarungen",
          head: ["Partner", "Datum", "Was angekündigt wurde", "Was offen bleibt"],
          rows: [
            ["Google", "22. Februar 2024", "Zugang zur Datenschnittstelle; Inhalte besser verstehen, anzeigen, für Training und anderweitig nutzen; Reddit nutzt Vertex AI von Google Cloud", "Wie Reddit-Inhalte in Übersichten mit KI oder im KI-Modus gewichtet werden"],
            ["OpenAI", "16. Mai 2024", "Zugang zur Datenschnittstelle; Reddit-Inhalte in ChatGPT und neuen Produkten; OpenAI wird Werbepartner von Reddit", "Wie oft ChatGPT Reddit-Threads als Quelle anzeigt"],
          ],
        },
        {
          t: "p",
          text: "Google schreibt ausdrücklich, dass die Vereinbarung nichts an der Nutzung öffentlich zugänglicher, crawlbarer Inhalte für Indexierung, Training oder Anzeige ändert. Reddit-Threads gelangen also auch auf dem normalen Weg in die Google-Suche. OpenAI weist in seiner Ankündigung darauf hin, dass Sam Altman Anteilseigner von Reddit ist.",
        },
        {
          t: "note",
          label: "Stand Oktober 2026",
          text: "Im Juli 2026 berichteten Fachmedien unter Berufung auf das Wall Street Journal, dass Reddit über die Verlängerung der Vereinbarung mit Google verhandelt und einen eingeschränkten Zugang erwägt. Ein Ergebnis dieser Verhandlungen haben wir bis zum 11. Oktober 2026 nicht gefunden. Die Rolle von Reddit in KI-Antworten kann sich also ändern.",
        },
        {
          t: "p",
          text: "Wie sich die Übersicht mit KI und der KI-Modus insgesamt auf lokale Betriebe auswirken, beschreiben [Übersichten mit KI und Local SEO](/blog/google-ai-overviews-local-seo) und [KI-Modus und Local SEO](/blog/google-ai-mode-local-seo-2026).",
        },
      ],
    },
    {
      id: "nicht-belegt",
      title: "Was über Reddit und KI nicht belegt ist",
      answer:
        "Weder Google noch OpenAI nennen Schwellen für Upvotes, Kommentare oder Kontoalter, ab denen ein Thread zitiert wird. Auch Zeiträume wie „nach zwei bis acht Wochen in ChatGPT“ und feste Steigerungsraten sind nicht belegt. Behandeln Sie solche Aussagen als Vermutung.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und was sich belegen lässt",
          head: ["Aussage", "Stand der Belege"],
          rows: [
            ["„Ab 50 Upvotes wird ein Thread von KI zitiert“", "Keine Quelle. Kein Anbieter nennt eine Schwelle."],
            ["„KI nutzt Upvotes direkt als Vertrauenswert“", "Nicht dokumentiert. Google spricht nur allgemein von Signalen, die helfen, Reddit-Inhalte besser zu verstehen."],
            ["„Zitate erscheinen nach zwei bis acht Wochen“", "Keine Quelle. Zeitpunkt und Häufigkeit sind nicht vorhersagbar."],
            ["„Reddit ist überall die zweithäufigste Quelle nach Wikipedia“", "Solche Rangfolgen stammen aus Auswertungen von Dienstleistern mit eigenen Fragenlisten. Für lokale Fragen in Ihrer Stadt sagen sie wenig."],
            ["„Mit Reddit steigt Ihre Zitierquote um 15 bis 25 Prozent“", "Keine Quelle. Niemand kann eine Platzierung in KI-Antworten garantieren."],
          ],
        },
        {
          t: "p",
          text: "Das heißt nicht, dass Reddit unwichtig ist. Es heißt nur, dass Sie den Nutzen für Ihren Betrieb selbst prüfen müssen, statt sich auf allgemeine Zahlen zu verlassen. Wie Sie eine eigene, ehrliche Messgröße aufbauen, beschreibt [AI Visibility Index](/blog/ai-visibility-index-local-seo-metrik). Was hinter dem Begriff GEO steckt und was Studien tatsächlich zeigen, steht in [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
      ],
    },
    {
      id: "reddit-regeln",
      title: "Reddits Regeln zu Eigenwerbung und Manipulation",
      answer:
        "Reddit verbietet Spam, also wiederholte oder unerwünschte Beiträge zur eigenen Bekanntheit oder zum Gewinn, sowie jede Manipulation von Stimmen, auch über mehrere Konten. Wer vor allem Links zum eigenen Betrieb postet, soll laut Reddit sparsam damit sein oder Werbung buchen. Jede Community kann strengere Regeln haben.",
      blocks: [
        {
          t: "table",
          caption: "Was die Reddit-Hilfe sagt (Stand Oktober 2026)",
          head: ["Thema", "Aussage von Reddit", "Was das für Sie heißt"],
          rows: [
            ["Spam", "Keine wiederholten oder unerwünschten Massenaktionen, automatisch oder von Hand", "Nicht dieselbe Empfehlung in viele Threads kopieren"],
            ["Eigener Betrieb", "Wer vor allem Links zum eigenen Betrieb teilt, soll auf die Häufigkeit achten oder Werbung über Reddits Werbeplattform buchen", "Beiträge sollen in erster Linie helfen, nicht verlinken"],
            ["Stimmen", "Keine Stimmenmanipulation, weder über mehrere Konten noch über Abstimmdienste, Automatisierung oder organisierte Gruppen", "Mitarbeiter, Familie oder Agenturen nicht zum Hochvoten auffordern"],
            ["Community-Regeln", "Moderatoren entscheiden, was in ihrer Community als Spam gilt", "Vor dem ersten Beitrag die Regeln der jeweiligen Community lesen"],
            ["Reddiquette", "Informelle Richtschnur; als Faustregel gilt 9 zu 1, also höchstens jeder zehnte Beitrag eigener Inhalt", "Eine Orientierung, keine feste Pflicht"],
          ],
        },
        {
          t: "p",
          text: "Die Reddiquette rät außerdem davon ab, um Stimmen zu bitten, auch nicht indirekt oder gegen Geschenke. Eine ausdrückliche Pflicht zur Offenlegung, dass Sie Inhaber sind, steht in den hier geprüften Hilfeseiten nicht. Sie ergibt sich in Deutschland und Österreich aber aus dem Wettbewerbsrecht, wie der nächste Abschnitt zeigt.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Viele Communities entfernen Eigenwerbung schneller als Reddits allgemeine Regeln es verlangen. Ein gelöschter Beitrag kostet Sie wenig, eine Sperre in der Community Ihrer Stadt dagegen den Zugang zu genau dem Ort, an dem Ihre Kunden fragen.",
        },
      ],
    },
    {
      id: "recht",
      title: "Verdeckte Werbung und gefälschte Empfehlungen: die Rechtslage",
      answer:
        "Wer als Betrieb den Eindruck erweckt, ein unabhängiger Kunde zu sein, handelt gegenüber Verbrauchern nach dem deutschen UWG und der EU-Richtlinie über unlautere Geschäftspraktiken stets unlauter. Ebenso verboten ist es, gefälschte Bewertungen oder Empfehlungen von Verbrauchern zu übermitteln oder in Auftrag zu geben oder solche Empfehlungen in sozialen Medien falsch darzustellen.",
      blocks: [
        {
          t: "table",
          caption: "Die einschlägigen Vorschriften",
          head: ["Vorschrift", "Inhalt in Kurzform", "Typischer Fall auf Reddit"],
          rows: [
            ["UWG Anhang Nr. 22 / Richtlinie 2005/29/EG Anhang I Nr. 22", "Unwahre Angabe oder unzutreffender Eindruck, der Unternehmer sei Verbraucher", "Der Inhaber empfiehlt sein eigenes Café als „zufriedener Gast“"],
            ["UWG Anhang Nr. 23c / Richtlinie Anhang I Nr. 23c", "Gefälschte Bewertungen oder Empfehlungen von Verbrauchern übermitteln oder beauftragen sowie Bewertungen oder Empfehlungen von Verbrauchern in sozialen Medien falsch darstellen, jeweils zur Verkaufsförderung", "Eine Agentur postet erfundene Erfahrungsberichte mit mehreren Konten"],
            ["§ 5a Abs. 4 UWG / Art. 7 Abs. 2 Richtlinie", "Den kommerziellen Zweck einer Handlung nicht kenntlich machen, wenn er sich nicht aus den Umständen ergibt", "Ein Mitarbeiter lobt den Betrieb, ohne zu sagen, dass er dort arbeitet"],
          ],
        },
        {
          t: "p",
          text: "Die Praktiken aus dem Anhang gelten in Deutschland nach § 3 Abs. 3 UWG gegenüber Verbrauchern stets als unzulässig. Nach § 5a Abs. 4 UWG liegt bei Handlungen zugunsten eines fremden Unternehmens kein kommerzieller Zweck vor, wenn der Handelnde von diesem Unternehmen kein Entgelt oder keine ähnliche Gegenleistung erhält oder sich versprechen lässt. Das Gesetz vermutet eine Gegenleistung, solange der Handelnde nicht glaubhaft macht, dass er keine erhalten hat. Erhalten Kunden dagegen etwas für einen Beitrag, etwa einen Rabatt, liegt ein kommerzieller Zweck nahe, und der Beitrag muss als solcher erkennbar sein.",
        },
        {
          t: "p",
          text: "In Österreich verweist § 2 Abs. 2 UWG auf einen Anhang mit Geschäftspraktiken, die jedenfalls als irreführend gelten. Die Schweiz ist kein EU-Mitglied, die Richtlinie gilt dort nicht unmittelbar, das Schweizer Lauterkeitsrecht kennt eigene Regeln.",
        },
        {
          t: "note",
          label: "Keine Rechtsberatung",
          text: "Diese Übersicht ersetzt keine Beratung. Wenn Sie unsicher sind, ob ein Beitrag oder eine Kooperation zulässig ist, fragen Sie eine Anwältin oder einen Anwalt für Wettbewerbsrecht. Für die Schweiz und für Berufe mit eigenem Berufsrecht, etwa Ärzte, Anwälte und Steuerberater, gelten zusätzliche Regeln.",
        },
      ],
    },
    {
      id: "ehrlich-mitreden",
      title: "Ehrlich mitreden: so sieht es in der Praxis aus",
      answer:
        "Treten Sie unter einem Konto auf, das klar zu Ihnen gehört, nennen Sie Ihre Verbindung zum Betrieb in jedem Beitrag, in dem er vorkommt, und beantworten Sie Fragen zuerst fachlich. Ihren Betrieb erwähnen Sie nur, wenn er wirklich zur Frage passt.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Passende Communities finden", text: "Suchen Sie in Reddit nach Ihrer Stadt, Ihrer Region und Ihrem Fachgebiet. Prüfen Sie, ob dort überhaupt lokale Fragen gestellt werden und wie aktiv die Community ist." },
            { title: "Regeln lesen", text: "Jede Community hat eigene Regeln, oft mit Vorgaben zu Werbung und Empfehlungen. Manche verbieten Eigenwerbung ganz. Halten Sie sich daran, auch wenn andere es nicht tun." },
            { title: "Offen auftreten", text: "Ein Konto pro Person, kein zweites Konto für Lob. Schreiben Sie in Beiträgen, die Ihren Betrieb betreffen, gleich zu Beginn: „Offenlegung: Ich bin Inhaber der Tischlerei X in Y.“" },
            { title: "Zuerst helfen", text: "Beantworten Sie Fachfragen, auch wenn Sie dabei keinen Auftrag bekommen. Eine gute Antwort zur Frage „Lohnt sich eine Wärmepumpe im Altbau?“ ist nützlicher als ein Link zu Ihrer Website." },
            { title: "Eigenen Betrieb nur passend nennen", text: "Fragt jemand ausdrücklich nach einem Anbieter in Ihrer Stadt, dürfen Sie sich mit Offenlegung melden. Ein Hinweis genügt, kein Werbetext." },
            { title: "Niemanden zum Hochvoten auffordern", text: "Weder Mitarbeiter noch Familie noch Kunden. Das verbietet Reddit, und es ist mit wenigen echten Stimmen leicht zu erkennen." },
          ],
        },
        {
          t: "p",
          text: "Kunden dürfen von sich aus über Sie schreiben. Bitten Sie aber nicht gezielt um Reddit-Beiträge und bieten Sie nichts dafür an. Für Bewertungen gibt es mit dem Google-Unternehmensprofil den passenderen Weg, beschrieben in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine Agentur, die anbietet, Ihren Betrieb „in Reddit-Threads zu platzieren“, arbeitet meist mit Konten, die nicht als Ihre erkennbar sind. Das ist genau die Konstellation, die das Wettbewerbsrecht verbietet. Die Verantwortung tragen Sie als Auftraggeber mit.",
        },
      ],
    },
    {
      id: "eigene-inhalte",
      title: "Die bessere Grundlage: zitierfähige Inhalte auf Ihrer Website",
      answer:
        "Reddit kann Ihre Website nicht ersetzen. KI-Systeme zitieren auch Websites von Betrieben, wenn dort Leistungen, Ort, Preise und Bedingungen klar als Text stehen. Ein offener Forenbeitrag kann darauf verweisen, wenn er die Frage wirklich beantwortet.",
      blocks: [
        {
          t: "p",
          text: "Wenn in Ihrer Stadt immer wieder dieselbe Frage auftaucht, etwa „Was kostet ein neues Bad ungefähr?“, ist das ein Hinweis für Ihre eigene Website: Beantworten Sie die Frage dort ausführlich, mit Preisrahmen und Bedingungen. Wie Sie solche Seiten aufbauen, zeigen [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen) und [Local Content Marketing](/blog/local-content-marketing).",
        },
        {
          t: "ul",
          items: [
            "**Fragen sammeln:** Notieren Sie, was in Foren, am Telefon und in Bewertungen gefragt wird.",
            "**Auf der Website beantworten:** Eine Antwort im ersten Satz, Details danach, Ort und Bedingungen als Text.",
            "**Technik prüfen:** Die Crawler der KI-Suchdienste müssen Ihre Seiten lesen dürfen. Wie das geht, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
            "**Im Forum nur verlinken, wenn es hilft:** Ein Link zur Seite mit der Antwort, offen gekennzeichnet, ist in Ordnung, wenn die Community-Regeln es erlauben.",
          ],
        },
      ],
    },
    {
      id: "erwaehnungen-beobachten",
      title: "Erwähnungen Ihres Betriebs beobachten",
      answer:
        "Suchen Sie regelmäßig in Reddit nach Ihrem Betriebsnamen und Ihrer Stadt, richten Sie Google Alerts ein und stellen Sie einmal im Monat dieselben Fragen in ChatGPT und Google. So sehen Sie, ob und wie Forenbeiträge in Antworten über Ihren Betrieb einfließen.",
      blocks: [
        {
          t: "table",
          caption: "Einfache Werkzeuge ohne Zusatzkosten",
          head: ["Werkzeug", "Was es zeigt", "Grenzen"],
          rows: [
            ["Reddit-Suche", "Beiträge und Kommentare mit Ihrem Namen, Ihrer Branche und Ihrer Stadt", "Nur Reddit; Schreibweisen und Abkürzungen einzeln suchen"],
            ["Google Alerts", "E-Mail bei neuen Treffern zu einem Suchbegriff; Häufigkeit, Quellen, Sprache und Region einstellbar", "Erfasst nicht jeden Beitrag, Foren oft verzögert"],
            ["Google-Suche mit site:reddit.com", "Reddit-Seiten in Google, etwa „site:reddit.com Bäckerei Bregenz“", "Laut Google nicht vollständig, nur ein Ausschnitt"],
            ["Stichproben in KI-Antworten", "Ob Ihr Betrieb genannt wird und welche Quellen verlinkt sind", "Antworten schwanken, erst über Monate aussagekräftig"],
          ],
        },
        {
          t: "p",
          text: "Halten Sie Datum, Fundstelle und Inhalt in einer Tabelle fest. Eine fertige Routine mit Werkzeugen, Analyse und Grenzen beschreibt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026).",
        },
      ],
    },
    {
      id: "kritik-und-fehler",
      title: "Auf Kritik und falsche Angaben in Threads reagieren",
      answer:
        "Antworten Sie auf Kritik sachlich, offen als Betrieb und ohne Streit. Falsche Fakten, etwa alte Öffnungszeiten, korrigieren Sie mit einer kurzen Antwort im Thread und an der Stelle, von der sie stammen. Beiträge, die gegen Regeln verstoßen, melden Sie den Moderatoren.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Ruhig lesen", text: "Klären Sie, ob die Kritik berechtigt ist. Ein Thread wird weiter gelesen, auch Jahre später, und kann in KI-Zusammenfassungen einfließen." },
            { title: "Offen antworten", text: "Mit Offenlegung, ohne Gegenangriff. Bedanken Sie sich für den Hinweis und sagen Sie, was Sie geändert haben oder wie man Sie direkt erreicht." },
            { title: "Fakten richtigstellen", text: "Neue Öffnungszeiten, neue Adresse, geänderte Leistungen: kurz und belegbar, mit Link zur eigenen Seite, wenn erlaubt." },
            { title: "Quelle prüfen", text: "Stammt eine falsche Angabe von Ihrer Website oder einem Verzeichnis, korrigieren Sie sie dort zuerst." },
            { title: "Regelverstöße melden", text: "Beleidigungen oder gezielte Falschbehauptungen melden Sie über die Meldefunktion an die Moderatoren. Bei rechtlich relevanten Fällen holen Sie rechtlichen Rat ein." },
          ],
        },
        {
          t: "p",
          text: "Wenn eine KI-Antwort eine falsche Angabe aus einem Forum übernimmt, hilft der Ablauf aus [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026). Für Kritik auf Bewertungsplattformen gelten eigene Wege, beschrieben in [Negative Google-Bewertungen](/blog/negative-google-bewertungen).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Muss mein Betrieb auf Reddit aktiv sein, um in KI-Antworten zu erscheinen?",
      a: "Nein. Kein Anbieter nennt Reddit als Voraussetzung. KI-Suchdienste zitieren auch Websites, Profile und Verzeichnisse. Ob sich Reddit für Sie lohnt, hängt davon ab, ob in Ihrer Stadt und Branche dort überhaupt diskutiert wird.",
    },
    {
      q: "Darf ich meinen eigenen Betrieb auf Reddit empfehlen?",
      a: "Ja, wenn Sie offenlegen, dass es Ihr Betrieb ist, und die Regeln der jeweiligen Community es erlauben. Verboten ist, sich als unabhängiger Kunde auszugeben. Das verstößt gegen das UWG und kann abgemahnt werden.",
    },
    {
      q: "Darf ich Kunden bitten, auf Reddit über uns zu schreiben?",
      a: "Davon raten wir ab. Bieten Sie dafür eine Gegenleistung an, wird der Beitrag kommerziell und müsste gekennzeichnet sein. Auch ohne Gegenleistung wirkt eine gezielte Bitte in Foren schnell wie gesteuerte Werbung. Bitten Sie Kunden lieber um eine Bewertung im Google-Unternehmensprofil, ohne etwas dafür anzubieten.",
    },
    {
      q: "Werden Reddit-Inhalte für das Training von KI genutzt?",
      a: "Google schreibt, dass es Reddit-Inhalte über die Datenschnittstelle anzeigen, für Training und anderweitig nutzen kann. OpenAI spricht davon, Reddit-Inhalte in ChatGPT und neue Produkte zu bringen. Einzelheiten der Verträge sind nicht öffentlich.",
    },
    {
      q: "Wie erfahre ich, ob über meinen Betrieb auf Reddit geschrieben wird?",
      a: "Suchen Sie regelmäßig in Reddit nach Ihrem Namen und Ihrer Stadt und richten Sie Google Alerts für Ihren Betriebsnamen ein. Ergänzend zeigt eine Google-Suche mit site:reddit.com Treffer, die laut Google aber nicht vollständig sind.",
    },
  ],
  sources: [
    { title: "OpenAI and Reddit Partnership (16. Mai 2024)", publisher: "OpenAI", url: "https://openai.com/index/openai-and-reddit-partnership/" },
    { title: "An expanded partnership with Reddit (22. Februar 2024)", publisher: "Google", url: "https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/" },
    { title: "Spam (aktualisiert 6. Oktober 2026)", publisher: "Reddit Help", url: "https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam" },
    { title: "Disrupting Communities (aktualisiert 19. Mai 2026)", publisher: "Reddit Help", url: "https://support.reddithelp.com/hc/en-us/articles/360043066412" },
    { title: "Reddiquette (aktualisiert 5. Oktober 2026)", publisher: "Reddit Help", url: "https://support.reddithelp.com/hc/en-us/articles/205926439-Reddiquette" },
    { title: "Anhang zu § 3 Abs. 3 UWG", publisher: "dejure.org", url: "https://dejure.org/gesetze/UWG/Anhang.html" },
    { title: "§ 5a UWG Irreführung durch Unterlassen", publisher: "dejure.org", url: "https://dejure.org/gesetze/UWG/5a.html" },
    { title: "Richtlinie 2005/29/EG über unlautere Geschäftspraktiken, konsolidierte Fassung vom 28. Mai 2022", publisher: "EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02005L0029-20220528" },
    { title: "Bundesgesetz gegen den unlauteren Wettbewerb (UWG), Österreich", publisher: "RIS Bundeskanzleramt", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10002665" },
    { title: "Alert erstellen", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/4815696?hl=de" },
    { title: "Google Search operator: site:", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site" },
    { title: "Reddit Weighs Tighter Google AI Data Access in Deal Renewal Talks (Bericht, 23. Juli 2026)", publisher: "WinBuzzer", url: "https://winbuzzer.com/2026/07/23/reddit-weighs-tighter-google-ai-access-in-renewal-talks-xcxwbn/" },
  ],
  related: [
    { slug: "ai-zitat-monitoring-local-seo-2026", title: "KI-Zitate überwachen" },
    { slug: "chatgpt-zitiert-lokale-unternehmen", title: "Wie ChatGPT lokale Unternehmen zitiert" },
    { slug: "ai-falschangaben-korrigieren-2026", title: "KI-Falschangaben korrigieren" },
    { slug: "ai-suche-lokale-unternehmen", title: "KI-Suche für lokale Unternehmen" },
  ],
  cta: {
    title: "Was sagen KI-Antworten über Ihren Betrieb?",
    text: "Wir prüfen, welche Quellen ChatGPT und Google zu Ihrem Betrieb heranziehen, ob Foren dabei eine Rolle spielen und ob Website und Profile übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
