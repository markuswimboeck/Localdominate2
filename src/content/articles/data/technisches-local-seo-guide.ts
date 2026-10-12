import type { V4Article } from "../types";

const article: V4Article = {
  slug: "technisches-local-seo-guide",
  lang: "de",
  seoTitle: "Technisches Local SEO: die Prüfliste für Ihre Website",
  seoDescription:
    "Technisches Local SEO Schritt für Schritt: Search Console, Indexierung, Sitemap, Canonicals, HTTPS, Core Web Vitals, Standortseiten und KI-Crawler nach Google.",
  h1: "Technisches Local SEO: die Prüfliste für die Website eines lokalen Betriebs",
  kicker: "Technik",
  lead:
    "Für Inhaber lokaler Betriebe und ihre Webverantwortlichen, die wissen wollen, ob die Website technisch sauber steht. Sie bekommen eine Prüfliste in sinnvoller Reihenfolge, die sich an Googles eigener Dokumentation orientiert, und erfahren, welche Punkte Sie selbst prüfen können.",
  answer:
    "Technisches Local SEO sorgt dafür, dass Google die Website eines lokalen Betriebs crawlen, indexieren und richtig zuordnen kann. Google nennt dafür drei Mindestanforderungen: Der Googlebot wird nicht blockiert, die Seite liefert den Statuscode 200 und enthält indexierbare Inhalte. Darauf bauen Search Console, Sitemap, eine eindeutige Hauptadresse mit HTTPS, eine schnelle mobile Version, passende strukturierte Daten und echte Standortseiten auf.",
  takeaways: [
    "Google nennt drei technische Mindestanforderungen: kein blockierter Googlebot, Statuscode 200 und indexierbare Inhalte.",
    "Eine Domain-Property in der Search Console erfasst alle Varianten Ihrer Adresse, also mit und ohne www sowie http und https.",
    "Die robots.txt steuert das Crawling, nicht die Indexierung. Seiten, die nicht in Google erscheinen sollen, bekommen ein noindex und dürfen dann nicht gesperrt sein.",
    "Für die Core Web Vitals nennt Google als gute Werte: LCP bis 2,5 Sekunden, INP unter 200 Millisekunden, CLS unter 0,1. Eine Top-Position garantieren sie nicht.",
    "Standortseiten brauchen echten Inhalt je Ort. Viele fast gleiche Stadtseiten, die alle zum selben Ziel führen, beschreibt Google als Missbrauch von Brückenseiten.",
    "Für Übersichten mit KI und den KI-Modus nennt Google keine zusätzlichen technischen Anforderungen. Die Seite muss indexiert und für ein Snippet geeignet sein.",
  ],
  publishedAt: "2026-03-05",
  updatedAt: "2026-10-12",
  readingTime: 13,
  sections: [
    {
      id: "was-dazugehoert",
      title: "Technisches Local SEO: was dazugehört",
      answer:
        "Technisches Local SEO umfasst alles, was Google braucht, um Ihre Seiten zu finden, zu lesen und dem richtigen Ort zuzuordnen. Die Grundlage sind Googles drei Mindestanforderungen: Der Googlebot wird nicht blockiert, die Seite liefert den Statuscode 200 und enthält indexierbare Inhalte.",
      blocks: [
        {
          t: "p",
          text: "Inhalte, Bewertungen und das Unternehmensprofil entscheiden mit darüber, ob Kunden Sie wählen. Die Technik entscheidet, ob Google Ihre Website überhaupt richtig erfasst. Eine Schreinerei in Rosenheim kann die beste Leistungsseite haben: Ist sie versehentlich auf noindex gesetzt, erscheint sie nicht. Die Abschnitte unten gehen die Prüfpunkte einzeln durch, am Ende steht die Reihenfolge als kurze Liste.",
        },
        {
          t: "p",
          text: "Wer seine Website umfassender prüfen will, auch Profil und Bewertungen, findet die vollständige Liste in [Local SEO Audit: die Checkliste](/blog/local-seo-audit-checkliste).",
        },
      ],
    },
    {
      id: "search-console",
      title: "Search Console einrichten",
      answer:
        "Die Google Search Console ist das kostenlose Werkzeug, mit dem Sie sehen, wie Google Ihre Website erfasst. Richten Sie eine Domain-Property ein: Sie umfasst alle Subdomains und Protokolle und wird über einen DNS-Eintrag bestätigt.",
      blocks: [
        {
          t: "p",
          text: "Google unterscheidet zwei Arten von Properties. Eine **URL-Präfix-Property** enthält nur Adressen, die genau mit dem angegebenen Präfix beginnen, einschließlich http oder https. Eine **Domain-Property** fasst die Daten aller Subdomains, Protokolle und Pfade zusammen. Für einen lokalen Betrieb ist die Domain-Property die bessere Wahl, weil Sie damit auch Probleme auf einer alten http-Adresse oder einer vergessenen Subdomain sehen.",
        },
        {
          t: "steps",
          items: [
            { title: "Property anlegen", text: "In der Search Console eine Domain-Property mit Ihrer Domain ohne www und ohne https anlegen, also etwa „ihredomain.de“." },
            { title: "DNS-Eintrag setzen", text: "Den angezeigten TXT-Eintrag im Kundenbereich Ihres Domainanbieters eintragen oder von Ihrem Dienstleister eintragen lassen. Danach in der Search Console bestätigen." },
            { title: "Zugriff vergeben", text: "Ihrer Agentur oder Ihrem Webdesigner eigenen Zugang geben, statt Passwörter zu teilen. So behalten Sie die Inhaberschaft." },
            { title: "Berichte merken", text: "Für dieses Thema zählen vor allem: Seitenindexierung, Sitemaps, HTTPS, Core Web Vitals und das URL-Prüftool." },
          ],
        },
      ],
    },
    {
      id: "indexierung",
      title: "Indexierung prüfen und steuern",
      answer:
        "Der Bericht zur Seitenindexierung zeigt, welche Ihrer Seiten Google kennt und warum manche nicht im Index sind. Nicht jede nicht indexierte Seite ist ein Fehler. Entscheidend ist, dass Startseite, Leistungsseiten, Standortseiten und Kontaktseite indexiert sind.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt selbst, dass Sie nicht davon ausgehen sollten, dass jede Adresse Ihrer Website indexiert ist. Prüfen Sie deshalb gezielt die Seiten, mit denen Sie Kunden gewinnen. Das **URL-Prüftool** zeigt für eine einzelne Adresse, ob sie im Index ist. Mit „Live-URL testen“ sehen Sie die aktuelle Fassung samt Screenshot, mit „Indexierung beantragen“ bitten Sie um einen neuen Besuch. Google weist darauf hin, dass ein solcher Antrag keine Aufnahme garantiert und die Zahl der Anträge pro Tag begrenzt ist.",
        },
        {
          t: "table",
          caption: "Häufige Gründe im Bericht zur Seitenindexierung",
          head: ["Grund laut Search Console", "Was er meist bedeutet", "Was Sie tun"],
          rows: [
            ["URL wird von der robots.txt-Datei blockiert", "Eine Regel in der robots.txt sperrt die Seite", "Prüfen, ob die Sperre gewollt ist; wichtige Seiten freigeben"],
            ["Alternative Seite mit richtigem kanonischen Tag", "Die Seite verweist korrekt auf eine Hauptversion", "In der Regel nichts"],
            ["Duplikat, vom Nutzer nicht als kanonisch festgelegt", "Google hält die Seite für eine Kopie, ohne Canonical von Ihnen", "Hauptversion festlegen, siehe Abschnitt zu Canonicals"],
            ["Soft 404", "Die Seite liefert Statuscode 200, wirkt aber leer oder wie eine Fehlerseite", "Echte Fehlerseiten mit 404 ausliefern, dünne Seiten füllen"],
            ["Status „Gecrawlt“ oder „Gefunden“ mit dem Zusatz „zurzeit nicht indexiert“", "Google kennt die Seite, hat sie aber nicht aufgenommen oder bei „Gefunden“ noch nicht gecrawlt", "Inhalt und interne Verlinkung der Seite prüfen"],
          ],
        },
        {
          t: "h3",
          text: "noindex oder robots.txt",
        },
        {
          t: "p",
          text: "Die robots.txt dient laut Google vor allem dazu, den Crawler-Verkehr zu steuern. Sie ist kein Mittel, um Seiten aus der Suche herauszuhalten: Eine gesperrte Adresse kann trotzdem erscheinen, dann ohne Beschreibung. Wer eine Seite wie die Danke-Seite nach dem Formular aus dem Index halten will, setzt ein **noindex** im Meta-Tag oder im HTTP-Header. Damit Google das sieht, darf die Seite nicht zugleich in der robots.txt gesperrt sein.",
        },
        {
          t: "h3",
          text: "Websites mit viel JavaScript",
        },
        {
          t: "p",
          text: "Viele Baukästen und moderne Websites erzeugen den Inhalt erst im Browser. Google kann JavaScript verarbeiten, nennt serverseitiges Rendern oder Pre-Rendering aber eine sehr gute Option, weil nicht alle Bots JavaScript ausführen können. Bei solchen Websites liefern unbekannte Adressen oft eine Fehlermeldung mit Statuscode 200. Google empfiehlt dann eine Weiterleitung auf eine Adresse mit echtem 404 oder ein noindex auf der Fehlerseite. Links sollten echte Links mit href-Attribut sein, sonst findet Google die Unterseiten nicht.",
        },
      ],
    },
    {
      id: "sitemap-robots",
      title: "XML-Sitemap und robots.txt",
      answer:
        "Eine XML-Sitemap listet die Seiten, die Google kennen soll, mit vollständigen Adressen. Reichen Sie sie im Sitemaps-Bericht der Search Console ein und tragen Sie sie zusätzlich in die robots.txt ein.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Nur indexierbare Hauptversionen:** keine weitergeleiteten Adressen, keine Seiten mit noindex, keine http-Adressen, wenn Ihre Website auf https läuft.",
            "**Absolute Adressen:** Google verlangt vollständige Adressen mit https und Domain, keine relativen Pfade.",
            "**Grenzen:** Eine einzelne Sitemap darf höchstens 50 MB unkomprimiert oder 50.000 Adressen enthalten. Für eine lokale Website reicht fast immer eine Datei.",
            "**lastmod ehrlich pflegen:** Google nutzt das Änderungsdatum, wenn es nachweisbar stimmt. Die Angaben priority und changefreq ignoriert Google.",
            "**Eintrag in der robots.txt:** Eine Zeile wie „Sitemap: https://ihredomain.de/sitemap.xml“ an beliebiger Stelle der Datei.",
          ],
        },
        {
          t: "p",
          text: "Google betont, dass eine eingereichte Sitemap nur ein Hinweis ist. Sie garantiert nicht, dass alle Adressen gecrawlt oder indexiert werden. Wichtiger ist, dass jede wichtige Seite über normale Links von anderen Seiten Ihrer Website erreichbar ist.",
        },
        {
          t: "note",
          label: "Häufiger Fehler",
          text: "Nach einem Relaunch bleibt oft die Sperre „Disallow: /“ aus der Testphase in der robots.txt stehen. Öffnen Sie nach jeder größeren Änderung ihredomain.de/robots.txt im Browser und prüfen Sie, ob dort etwas gesperrt ist, das Kunden finden sollen.",
        },
      ],
    },
    {
      id: "hauptadresse-https",
      title: "Eine Hauptadresse mit HTTPS und sauberen Canonicals",
      answer:
        "Ihre Website sollte unter genau einer Adressvariante erreichbar sein, zum Beispiel https://www.ihredomain.de. Alle anderen Varianten leiten dauerhaft dorthin weiter, und doppelte Seiten verweisen per Canonical auf ihre Hauptversion.",
      blocks: [
        {
          t: "p",
          text: "Für Google sind http://ihredomain.de, https://ihredomain.de und https://www.ihredomain.de unterschiedliche Adressen. Laut Google sind Weiterleitungen und das Element rel=\"canonical\" starke Signale für die bevorzugte Adresse, eine Sitemap ist ein schwaches Signal. Google kann trotzdem eine andere Version als Hauptversion wählen, wenn die Signale sich widersprechen.",
        },
        {
          t: "table",
          caption: "Weiterleitung und Canonical richtig einsetzen",
          head: ["Situation", "Mittel", "Hinweis aus Googles Dokumentation"],
          rows: [
            ["Alte Adresse oder http-Variante", "Dauerhafte Weiterleitung (301)", "Starkes Signal; eine vorübergehende Weiterleitung (302) nutzt Google nicht als Signal für die Hauptversion"],
            ["Gleiche Seite mit Filter- oder Kampagnenparametern", "rel=\"canonical\" auf die Hauptversion", "Starkes Signal"],
            ["Sie wollen Duplikate ausblenden", "Nicht robots.txt und nicht noindex", "Google rät von beiden für die Kanonisierung ab"],
            ["http und https parallel", "Weiterleitung auf https", "Google bevorzugt gleichwertige HTTPS-Seiten als kanonische Adressen"],
          ],
        },
        {
          t: "h3",
          text: "HTTPS ohne Lücken",
        },
        {
          t: "p",
          text: "Der **HTTPS-Bericht** der Search Console zeigt, wie viele indexierte Adressen über http oder https laufen. Als typische Ursachen nennt Google ein ungültiges Zertifikat, ein Canonical, das auf die http-Version zeigt, eine Sitemap mit http-Adressen und Weiterleitungen von https zurück auf http. Prüfen Sie außerdem, ob das Zertifikat automatisch verlängert wird. Ein abgelaufenes Zertifikat zeigt Besuchern eine Warnung, bevor sie Ihre Seite sehen.",
        },
      ],
    },
    {
      id: "mobil-core-web-vitals",
      title: "Mobile Version und Core Web Vitals mit INP",
      answer:
        "Google indexiert und bewertet die mobile Version Ihrer Seiten. Für die Core Web Vitals nennt Google als gute Werte einen LCP bis 2,5 Sekunden, einen INP unter 200 Millisekunden und einen CLS unter 0,1.",
      blocks: [
        {
          t: "p",
          text: "Google crawlt mit einem Smartphone-Agenten und empfiehlt responsives Webdesign. Mobile und Desktop-Fassung sollten dieselben Inhalte, Metadaten und strukturierten Daten haben. Inhalte, die erst nach Tippen oder Wischen geladen werden, lädt Google nicht. Die Prüfung am eigenen Gerät beschreibt [Mobile Local SEO](/blog/mobile-local-seo) Schritt für Schritt.",
        },
        {
          t: "table",
          caption: "Core Web Vitals laut Google",
          head: ["Messwert", "Was er misst", "Guter Wert"],
          rows: [
            ["LCP (Largest Contentful Paint)", "Ladezeit des größten sichtbaren Inhalts", "bis 2,5 Sekunden"],
            ["INP (Interaction to Next Paint)", "Reaktion auf Tippen und Klicken", "unter 200 Millisekunden"],
            ["CLS (Cumulative Layout Shift)", "Springende Inhalte beim Laden", "unter 0,1"],
          ],
        },
        {
          t: "p",
          text: "Google schreibt, dass es kein einzelnes Signal für die Nutzerfreundlichkeit gibt und dass gute Werte keine Position ganz oben garantieren. Die Suche zeigt die relevantesten Inhalte, auch wenn die Nutzerfreundlichkeit nicht in jeder Hinsicht gut ist. Gute Werte helfen dort, wo viele ähnlich hilfreiche Seiten konkurrieren. Ihre Werte sehen Sie im Bericht Core Web Vitals der Search Console, einzelne Seiten prüfen Sie mit PageSpeed Insights. Praktische Maßnahmen stehen in [Core Web Vitals für lokale Websites](/blog/core-web-vitals-local-seo).",
        },
        {
          t: "note",
          label: "Veraltet",
          text: "Ältere Anleitungen nennen noch First Input Delay (FID) oder den Test auf Optimierung für Mobilgeräte. FID wurde durch INP ersetzt, den Test hat Google eingestellt.",
        },
      ],
    },
    {
      id: "strukturierte-daten",
      title: "Strukturierte Daten kurz geprüft",
      answer:
        "Mit LocalBusiness-Markup können Sie Google Angaben wie Öffnungszeiten und Abteilungen mitteilen. Pflicht sind laut Google nur Name und Adresse, und alle Angaben müssen zum sichtbaren Text der Seite passen.",
      blocks: [
        {
          t: "p",
          text: "Technisch genügt für den Anfang eine Prüfung: Steht auf Startseite oder Kontaktseite ein LocalBusiness-Markup, und zeigt der Test für Rich-Suchergebnisse keine kritischen Fehler? Google empfiehlt unter anderem Telefon, Website-Adresse, Koordinaten und Öffnungszeiten als zusätzliche Felder. Die Angaben sollten exakt mit Ihrem Google-Unternehmensprofil und der Seite übereinstimmen.",
        },
        {
          t: "ul",
          items: [
            "Welche Typen sich lohnen und welche nicht, erklärt [Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo).",
            "Ein vollständiges Beispiel zum Einbauen und Testen steht in [LocalBusiness Schema implementieren](/blog/localbusiness-schema-implementierung).",
          ],
        },
        {
          t: "note",
          label: "Stand Oktober 2026",
          text: "FAQ-Snippets erscheinen seit dem 7. Mai 2026 nicht mehr in der Google-Suche. Vorhandenes FAQPage-Markup bringt keine Darstellung mehr. Eine Garantie für irgendeine Darstellung gibt es bei strukturierten Daten ohnehin nicht.",
        },
      ],
    },
    {
      id: "standortseiten",
      title: "Standortseiten ohne Brückenseiten",
      answer:
        "Jeder echte Standort verdient eine eigene Seite mit Adresse, Zeiten und Leistungen vor Ort. Viele fast gleiche Seiten für Orte, an denen Sie keinen Sitz haben, beschreibt Google als Missbrauch von Brückenseiten.",
      blocks: [
        {
          t: "p",
          text: "Google nennt als Beispiel für Brückenseiten ausdrücklich mehrere Seiten, die auf bestimmte Regionen oder Städte ausgerichtet sind, Nutzer aber alle zur selben Seite führen. Eine Physiotherapie mit Praxen in Linz und Wels braucht zwei Standortseiten mit eigenem Inhalt. Fünfzig Seiten „Physiotherapie in [Ort]“ mit ausgetauschtem Ortsnamen sind dagegen ein Risiko.",
        },
        {
          t: "table",
          caption: "Echte Standortseite oder Brückenseite",
          head: ["Echte Standortseite", "Brückenseite"],
          rows: [
            ["Eigene Adresse, Telefonnummer und Öffnungszeiten des Standorts", "Nur der Ortsname wechselt"],
            ["Team, Anfahrt, Parkmöglichkeiten, Leistungen vor Ort", "Allgemeiner Text, auf vielen Seiten gleich"],
            ["Im Unternehmensprofil des Standorts als Website hinterlegt", "Nur für die Suche angelegt, nirgends verlinkt"],
          ],
        },
        {
          t: "p",
          text: "Im Unternehmensprofil erlaubt Google ausdrücklich eine Website, auf der Ihr konkreter Standort vorgestellt wird. Bei mehreren Filialen verweist jedes Profil deshalb am besten auf die passende Standortseite. Weiterleitungs-Adressen, etwa auf soziale Netzwerke, sind im Website-Feld nicht erlaubt. Mehr zu Filialen steht in [Mehrere Standorte bei Google verwalten](/blog/gbp-mehrere-standorte). Wie Betriebe ohne Ladenlokal ihr Einzugsgebiet zeigen, ohne Stadtseiten zu kopieren, beschreibt [Heizung Sanitär Notdienst SEO](/blog/local-seo-heizung-sanitaer).",
        },
        {
          t: "h3",
          text: "Mehrsprachige Seiten in der Schweiz",
        },
        {
          t: "p",
          text: "Wer Seiten auf Deutsch und Französisch anbietet, kann Google die Sprachversionen mit **hreflang** zeigen, etwa mit dem Code de-CH. Jede Version muss sich selbst und alle anderen Versionen aufführen. Mehr zu den Besonderheiten im Land steht in [Local SEO in der Schweiz](/blog/local-seo-schweiz).",
        },
      ],
    },
    {
      id: "ki-crawler",
      title: "robots.txt und KI-Crawler",
      answer:
        "Für Übersichten mit KI und den KI-Modus nennt Google keine zusätzlichen technischen Anforderungen: Die Seite muss indexiert und für ein Snippet geeignet sein. Andere KI-Dienste nutzen eigene Crawler, die Sie in der robots.txt und beim Hoster zulassen oder sperren.",
      blocks: [
        {
          t: "p",
          text: "Google rät, das Crawling in der robots.txt und bei CDN oder Hoster zuzulassen, wichtige Inhalte als Text anzubieten und strukturierte Daten passend zum sichtbaren Text zu halten. Das sind dieselben Grundlagen wie in diesem Artikel. Eine Aufnahme in KI-Antworten kann niemand garantieren, auch kein Dienstleister.",
        },
        {
          t: "p",
          text: "Anbieter wie OpenAI, Anthropic und Perplexity unterscheiden Crawler für Suche, Training und Abrufe durch Nutzer. Welche Sie zulassen, ist eine eigene Entscheidung. Die Namen, fertige Beispiele für die robots.txt und den Bot-Schutz bei Hostern beschreibt [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026), besonders der Abschnitt [Bot-Schutz bei Hoster und CDN](/blog/ai-crawler-steuern-gptbot-claudebot-2026#cdn-firewall). Was Google für seine KI-Funktionen dokumentiert, steht in [Übersichten mit KI und Local SEO](/blog/google-ai-overviews-local-seo).",
        },
        {
          t: "note",
          label: "llms.txt",
          text: "Google hat im Juni 2026 klargestellt, dass die Google-Suche keine llms.txt-Datei braucht. Andere Dienste können sie nutzen. Einordnung in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "pruefliste",
      title: "Die Prüfliste in sinnvoller Reihenfolge",
      answer:
        "Beginnen Sie mit Zugang und Indexierung, weil alle anderen Maßnahmen nur wirken, wenn Google die Seiten aufnimmt. Danach folgen Hauptadresse und HTTPS, mobile Version und Ladezeit, strukturierte Daten und zuletzt Standortseiten und KI-Crawler.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Search Console einrichten", text: "Domain-Property per DNS bestätigen und Sitemap einreichen." },
            { title: "Wichtige Seiten prüfen", text: "Startseite, Leistungs-, Standort- und Kontaktseite im URL-Prüftool aufrufen. Alle müssen indexiert sein." },
            { title: "robots.txt lesen", text: "Keine Sperre für Bereiche, die Kunden finden sollen. Sitemap-Zeile vorhanden." },
            { title: "Adressvarianten testen", text: "http, https, mit und ohne www im Browser eingeben. Alle landen auf derselben https-Adresse." },
            { title: "Mobile Version und Werte ansehen", text: "Seite am Smartphone durchgehen, Bericht Core Web Vitals öffnen, Ausreißer mit PageSpeed Insights prüfen." },
            { title: "Markup testen", text: "Test für Rich-Suchergebnisse auf Startseite und Standortseiten, Angaben mit dem Unternehmensprofil abgleichen." },
            { title: "Standortseiten durchsehen", text: "Eine Seite je echtem Standort, Profil verlinkt auf die passende Seite, keine kopierten Stadtseiten." },
            { title: "Nach jeder Änderung wiederholen", text: "Nach Relaunch, Hosterwechsel oder neuem Baukasten die Schritte 2 bis 4 sofort erneut prüfen." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Reihenfolge ist unsere Empfehlung aus Prüfungen, keine Vorgabe von Google. Sie folgt der Logik, dass eine nicht indexierte Seite von keiner anderen Maßnahme profitiert. Für die laufende Pflege eignet sich die [monatliche Routine-Checkliste](/blog/local-seo-monthly-checklist).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Was ist technisches Local SEO?",
      a: "Technisches Local SEO umfasst die Maßnahmen, mit denen Google die Website eines lokalen Betriebs crawlen, indexieren und dem richtigen Ort zuordnen kann. Dazu gehören Search Console, Sitemap, robots.txt, eine Hauptadresse mit HTTPS, eine schnelle mobile Version, strukturierte Daten und echte Standortseiten.",
    },
    {
      q: "Muss jede Seite meiner Website indexiert sein?",
      a: "Nein. Google schreibt selbst, dass Sie nicht davon ausgehen sollten, dass jede Adresse Ihrer Website indexiert ist. Wichtig ist, dass die Seiten indexiert sind, mit denen Sie Kunden gewinnen: Startseite, Leistungsseiten, Standortseiten und Kontaktseite.",
    },
    {
      q: "Reicht eine robots.txt, um eine Seite aus Google herauszuhalten?",
      a: "Nein. Die robots.txt steuert das Crawling. Eine gesperrte Seite kann trotzdem ohne Beschreibung in den Ergebnissen erscheinen. Dafür ist ein noindex gedacht, und die Seite darf dann nicht in der robots.txt gesperrt sein.",
    },
    {
      q: "Sind die Core Web Vitals ein Rankingfaktor?",
      a: "Google zählt sie zur Nutzerfreundlichkeit von Seiten, die seine Ranking-Systeme berücksichtigen. Es gibt aber kein einzelnes Signal, und gute Werte garantieren keine Position ganz oben. Relevanz geht vor.",
    },
    {
      q: "Darf ich für jede Stadt in meinem Einzugsgebiet eine eigene Seite anlegen?",
      a: "Nur wenn jede Seite echten, eigenen Inhalt für diesen Ort hat. Viele fast gleiche Stadtseiten, die Nutzer alle zum selben Ziel führen, nennt Google als Beispiel für Missbrauch von Brückenseiten. Für Betriebe mit Einzugsgebiet ist eine gute Leistungsseite mit klarer Gebietsangabe meist die bessere Lösung.",
    },
    {
      q: "Brauche ich für KI-Suchen besondere Technik?",
      a: "Für Übersichten mit KI und den KI-Modus nennt Google keine zusätzlichen technischen Anforderungen. Die Seite muss indexiert und für ein Snippet geeignet sein. Für andere KI-Dienste sollten deren Such-Crawler in robots.txt und Bot-Schutz nicht gesperrt sein.",
    },
  ],
  sources: [
    { title: "Technische Anforderungen der Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/technical?hl=de" },
    { title: "Property in der Search Console hinzufügen", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/34592?hl=de" },
    { title: "Bericht zur Seitenindexierung", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7440203?hl=de" },
    { title: "URL-Prüftool", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/9012289?hl=de" },
    { title: "Einführung in robots.txt", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=de" },
    { title: "Indexierung mit noindex blockieren", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=de" },
    { title: "Grundlagen zu JavaScript-SEO", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=de" },
    { title: "Sitemap erstellen und einreichen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=de" },
    { title: "Doppelte URLs zusammenführen (Kanonisierung)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=de" },
    { title: "HTTP-Statuscodes, Netzwerk- und DNS-Fehler", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=de" },
    { title: "HTTPS-Bericht", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/11396518?hl=de" },
    { title: "Best Practices für die Mobile-First-Indexierung", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=de" },
    { title: "Core Web Vitals und Google-Suchergebnisse", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Nutzerfreundlichkeit von Seiten in den Google-Suchergebnissen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/page-experience?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Spamrichtlinien für die Google-Websuche (Brückenseiten)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Lokalisierte Versionen deiner Seiten (hreflang)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/specialty/international/localized-versions?hl=de" },
    { title: "KI-Funktionen und deine Website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "A new mobile friendly testing tool (mit Hinweis: seit Dezember 2023 eingestellt)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool" },
    { title: "Latest documentation updates (FAQ-Snippets eingestellt, llms.txt, INP ersetzt FID)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Weiterleitungen und Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=de" },
  ],
  related: [
    { slug: "mobile-local-seo", title: "Mobile Local SEO" },
    { slug: "localbusiness-schema-implementierung", title: "LocalBusiness Schema implementieren" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern" },
    { slug: "local-seo-audit-checkliste", title: "Local SEO Audit: die Checkliste" },
  ],
  cta: {
    title: "Steht Ihre Website technisch sauber?",
    text: "Wir prüfen, ob Google Ihre wichtigsten Seiten indexiert, ob Adressvarianten, HTTPS und Sitemap stimmen und ob Website und Unternehmensprofil zusammenpassen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
