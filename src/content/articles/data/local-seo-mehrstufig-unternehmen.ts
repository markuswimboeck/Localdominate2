import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-mehrstufig-unternehmen",
  lang: "de",
  seoTitle: "Franchise und Marken bei Google: Profile richtig regeln",
  seoDescription:
    "Franchise-Systeme bei Google: wem das Unternehmensprofil gehört, welche Rollen Zentrale und Partner brauchen, Namensregeln, Standortseiten und Bewertungen.",
  h1: "Local SEO für Franchise-Systeme und Marken mit mehreren Betreibern",
  kicker: "Mehrere Standorte",
  lead:
    "Für Franchisegeber, Franchisenehmer und Marken, deren Standorte von verschiedenen Unternehmern betrieben werden. Sie erfahren, wer welches Google-Unternehmensprofil besitzen sollte, welche Angaben die Zentrale vorgibt und welche der Standort pflegt, wie Standortseiten und Bewertungen funktionieren und was ins Handbuch gehört.",
  answer:
    "In einem Franchise-System sollte vorab geregelt sein, wer jedes Google-Unternehmensprofil besitzt, wer es verwaltet und was beim Betreiberwechsel geschieht. Wir empfehlen in der Regel: Die Zentrale hält die Inhaberschaft über eine Unternehmensgruppe, der Franchisenehmer pflegt sein Profil als Manager. Name und Hauptkategorie sind überall gleich, Öffnungszeiten, Telefonnummer, Fotos und Standortseite sind lokal.",
  takeaways: [
    "Autorisierte Franchisenehmer, die ausschließlich die Marke führen, dürfen laut Google den Markennamen im Profil verwenden. Alle Standorte eines Landes tragen denselben Namen. Ein Ortszusatz gehört nur hinein, wenn der Standort in der realen Welt durchgehend so heißt.",
    "Ein Profil hat genau einen primären Inhaber. Legen Sie im Vertrag oder Handbuch fest, wer das ist und wie der Zugriff beim Betreiberwechsel übergeben wird.",
    "Unternehmensgruppen bündeln die Profile der Marke. Organisationskonten sind laut Google für Dritte gedacht, die Standorte im Auftrag der Inhaber verwalten, etwa Agenturen.",
    "Die Sammelbestätigung funktioniert nur für Profile, die nicht schon jemand anderem gehören. Bereits bestätigte Profile von Partnern müssen zuerst übertragen werden.",
    "Bewertungen gehören zum jeweiligen Standort. Vorgaben der Zentrale zu Bewertungsquoten, Belohnungen oder gezieltem Fragen nur zufriedener Kunden verstoßen gegen Googles Richtlinien.",
  ],
  publishedAt: "2026-01-14",
  updatedAt: "2026-10-13",
  readingTime: 11,
  sections: [
    {
      id: "franchise-besonderheit",
      title: "Was bei Franchise anders ist als bei Filialen",
      answer:
        "Bei Filialen gehört alles einem Unternehmen. Bei Franchise und Lizenzsystemen gehört die Marke der Zentrale, der Standort aber einem eigenständigen Unternehmer. Deshalb muss geklärt sein, wem das Profil gehört und wer was ändern darf.",
      blocks: [
        {
          t: "p",
          text: "Die technischen Grundlagen für mehrere Standorte, also ein Profil je besetztem Standort, Upload per Tabelle, Geschäftscodes und Sammelbestätigung, beschreibt der Leitfaden [Mehrere Standorte bei Google verwalten](/blog/gbp-mehrere-standorte). Dieser Artikel behandelt die Frage dahinter: Wie verteilen Zentrale und Partner Verantwortung, Zugriff und Pflichten, damit die Marke einheitlich auftritt und jeder Standort trotzdem lokal gefunden wird?",
        },
        {
          t: "table",
          caption: "Typische Konstellationen",
          head: ["Modell", "Wem gehört der Standort", "Typische Frage bei Google"],
          rows: [
            ["Filialsystem", "Einem Unternehmen", "Wer in der Zentrale verwaltet welche Profile?"],
            ["Franchise", "Dem Franchisenehmer, die Marke dem Franchisegeber", "Wer ist primärer Inhaber, wer Manager?"],
            ["Gemischtes System", "Teils eigene Filialen, teils Partner", "Wie bleiben Name, Kategorie und Standortseiten einheitlich?"],
            ["Autorisierter Händler einer Marke", "Dem Händler", "Darf er den Markennamen verwenden?"],
          ],
        },
        {
          t: "note",
          label: "Kein Ranking-Vorteil durch Größe",
          text: "Google sortiert lokale Ergebnisse nach Relevanz, Entfernung und Bekanntheit und schreibt, dass ein besseres Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung. Eine bekannte Marke hilft beim dritten Faktor, ersetzt aber kein gepflegtes Profil am einzelnen Standort.",
        },
      ],
    },
    {
      id: "inhaberschaft",
      title: "Wem gehört das Unternehmensprofil?",
      answer:
        "Eine Vorgabe von Google, ob Zentrale oder Franchisenehmer das Profil besitzt, haben wir nicht gefunden. Jedes Profil hat aber genau einen primären Inhaber, und nur dieser kann die primäre Inhaberschaft übertragen. Das System sollte diese Rolle deshalb bewusst vergeben.",
      blocks: [
        {
          t: "p",
          text: "Inhaber dürfen Nutzer hinzufügen und entfernen und das Profil löschen. Manager dürfen fast alles bearbeiten, aber keine Nutzer verwalten und das Profil nicht entfernen. Neue Inhaber und Manager müssen sieben Tage warten, bevor sie Nutzer entfernen, das Profil löschen oder die primäre Inhaberschaft übertragen können.",
        },
        {
          t: "table",
          caption: "Drei Modelle für die Inhaberschaft",
          head: ["Modell", "Vorteil", "Risiko"],
          rows: [
            ["Zentrale ist primärer Inhaber, Partner ist Manager", "Einheitliche Daten, Zugriff bleibt beim Betreiberwechsel erhalten", "Partner fühlt sich bevormundet, wenn Freigaben langsam sind"],
            ["Partner ist primärer Inhaber, Zentrale ist Inhaber oder Manager", "Partner hat volle Kontrolle über seinen Standort", "Partner kann die Zentrale entfernen, Übergabe beim Ausstieg hängt an seiner Mitwirkung"],
            ["Jeder Partner allein, Zentrale ohne Zugriff", "Kein Abstimmungsaufwand", "Abweichende Namen, Kategorien und Links, keine Sammelauswertung"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für die meisten Systeme halten wir das erste Modell für das robusteste: Die Zentrale hält die Inhaberschaft mit einem Firmenkonto und mindestens einer zweiten Person als Inhaber, der Franchisenehmer arbeitet als Manager im Alltag. Öffnungszeiten, Fotos und Antworten auf Rezensionen pflegt er als Manager trotzdem selbst.",
        },
        {
          t: "p",
          text: "Gibt es für einen Standort schon ein Profil, das jemand anderes besitzt, stellt der Berechtigte eine Zugriffsanfrage. Laut Google hat der bisherige Inhaber dann drei Tage Zeit zu antworten. Antwortet er nicht, kann der Anfragende das Profil unter Umständen selbst beanspruchen, diese Möglichkeit gibt es aber nicht immer.",
        },
      ],
    },
    {
      id: "gruppen-organisation",
      title: "Unternehmensgruppen, Organisationskonten und Sammelbestätigung",
      answer:
        "Für eine Marke ist die Unternehmensgruppe das passende Werkzeug: Google empfiehlt eine Gruppe je Unternehmen oder Marke. Organisationskonten sind laut Google für Dritte gedacht, die Standorte im Auftrag der Inhaber verwalten, etwa Agenturen.",
      blocks: [
        {
          t: "p",
          text: "Wer Inhaber oder Manager einer Unternehmensgruppe ist, hat laut Google Zugriff auf alle aktuellen und künftigen Profile darin. Für ein Franchise-System heißt das: In die Gruppe der Marke gehören nur Personen der Zentrale und beauftragte Dienstleister. Franchisenehmer fügen Sie direkt am eigenen Profil hinzu, sonst sieht jeder Partner alle anderen Standorte.",
        },
        {
          t: "table",
          caption: "Wer wo Zugriff bekommt",
          head: ["Person", "Wo", "Rolle"],
          rows: [
            ["Marketing der Zentrale (mindestens zwei Personen)", "Unternehmensgruppe der Marke", "Inhaber"],
            ["Beauftragte Agentur der Zentrale", "Unternehmensgruppe oder über deren Organisationskonto", "Manager"],
            ["Franchisenehmer", "Nur das Profil des eigenen Standorts", "Manager"],
          ],
        },
        {
          t: "p",
          text: "Ein Organisationskonto für Agenturen kann einen Standort laut Google erst verwalten, nachdem der Standort der Organisation die Erlaubnis erteilt hat. Jedes Unternehmen darf nur eine Organisation haben.",
        },
        {
          t: "p",
          text: "Die Sammelbestätigung ab zehn Standorten setzt laut Google voraus, dass die Profile nicht bereits jemand anderem gehören. Profile, die ein Partner schon selbst bestätigt hat, holen Sie also zuerst per Zugriffsanfrage oder Rollenvergabe in die Gruppe. Die Einzelheiten stehen im Abschnitt [Sammelbestätigung](/blog/gbp-mehrere-standorte#sammelbestaetigung) des Standort-Leitfadens.",
        },
      ],
    },
    {
      id: "namensregeln",
      title: "Namensregeln für alle Standorte",
      answer:
        "Ein Franchisenehmer darf laut Google den Markennamen verwenden. Alle Standorte in einem Land tragen denselben Namen, so wie er am Standort steht. Ortsangaben gehören nur dann in den Namen, wenn sie in der realen Welt durchgehend Teil des Namens sind.",
      blocks: [
        {
          t: "p",
          text: "Googles Richtlinien unterscheiden: Ein autorisierter, ausschließlich auf die Marke ausgerichteter Betrieb darf den Markennamen nutzen. Ein Händler, der nur auch Produkte einer Marke verkauft, verwendet seinen eigenen Namen. Ausnahmen vom einheitlichen Namen sind einheitlich verwendete Untermarken und Standorte, die in der realen Welt durchgehend anders heißen.",
        },
        {
          t: "table",
          caption: "Namen in einem Franchise-System",
          head: ["Schreibweise im Profil", "Zulässig", "Warum"],
          rows: [
            ["Markenname, wie auf allen Schildern", "Ja", "Einheitlicher, echter Name"],
            ["Markenname plus Stadtteil, nur im Profil", "Nein", "Ortsangabe, die nicht zum realen Namen gehört"],
            ["Markenname plus Name der Betreiber-GmbH", "In der Regel nein", "Unnötige rechtliche Zusätze wie GmbH sind laut Google nicht erlaubt, es sei denn, Schild oder Rechnung belegen, dass sie zum Namen gehören"],
            ["Untermarke wie „Marke Express“ an allen Express-Standorten", "Ja", "Einheitlich angewendete Untermarke"],
            ["Markenname plus Leistung oder Slogan", "Nein", "Zusätzliche Angaben im Namen sind nicht erlaubt"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die rechtliche Firmierung des Franchisenehmers gehört ins Impressum seiner Standortseite, nicht in den Profilnamen. Ob und wie die Firmierung im Impressum stehen muss, klären Sie mit Ihrer Rechtsberatung.",
        },
        {
          t: "p",
          text: "Auch die Kategorien sind laut Google an allen Standorten einer Marke dieselben, wenn sie dieselben Leistungen anbieten. Welche Kategorie passt, zeigt der [Kategorien-Leitfaden](/blog/google-business-kategorien-guide).",
        },
      ],
    },
    {
      id: "zentral-lokal",
      title: "Was die Zentrale vorgibt und was der Standort pflegt",
      answer:
        "Die Zentrale gibt vor, was überall gleich sein muss: Name, Hauptkategorie, Struktur der Website und Logo. Der Standort pflegt, was nur er weiß: Öffnungszeiten, Sonderzeiten, lokale Telefonnummer, echte Fotos und Leistungen vor Ort.",
      blocks: [
        {
          t: "table",
          caption: "Aufteilung der Profilangaben",
          head: ["Angabe", "Zuständig", "Hinweis"],
          rows: [
            ["Name", "Zentrale", "Identisch an allen Standorten im Land"],
            ["Hauptkategorie", "Zentrale", "Gleich bei gleicher Leistung, weitere Kategorien nach Angebot vor Ort"],
            ["Website-Link", "Zentrale", "Zeigt auf die Standortseite, nicht auf die Startseite"],
            ["Logo und Titelbild", "Zentrale", "Einheitlicher Markenauftritt"],
            ["Telefonnummer", "Standort", "Lokale Nummer statt zentraler Hotline, wo möglich"],
            ["Öffnungszeiten und Sonderzeiten", "Standort", "Feiertage unterscheiden sich je Bundesland und Kanton"],
            ["Fotos von Räumen und Team", "Standort", "Echte Bilder dieses Standorts, Freigabe der Zentrale nach festen Regeln"],
            ["Leistungen und Produkte", "Beide", "Zentrale liefert Texte, Standort streicht, was er nicht anbietet"],
          ],
        },
        {
          t: "p",
          text: "Google verlangt, wo möglich, eine lokale Nummer statt einer zentralen Hotline, und die Nummer muss unter direkter Kontrolle des Unternehmens stehen. Nummern und Links, die Nutzer auf andere Seiten oder Nummern umleiten, sind nicht zulässig. Wie Sie Name, Adresse und Telefon über alle Plattformen gleich halten, beschreibt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
        {
          t: "note",
          label: "Praxistipp",
          text: "Führen Sie eine zentrale Stammdatentabelle mit einer Zeile je Standort: Geschäftscode, Adresse, Telefonnummer, Öffnungszeiten, URL der Standortseite, primärer Inhaber, Manager. Sie ist die Quelle für Profil, Website und Verzeichnisse.",
        },
      ],
    },
    {
      id: "standortseiten",
      title: "Standortseiten und Store Locator auf der Website",
      answer:
        "Jeder Standort bekommt eine eigene Seite auf der Markenwebsite, die über normale Links erreichbar ist. Ein Store Locator, der Standorte nur über ein Suchfeld zeigt, reicht dafür nicht. Seiten für einzelne Städte, die Besucher auf eine Seite leiten, und sehr ähnliche Seiten ohne klare Struktur nennt Google als Beispiele für Brückenseiten.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Crawlbare Links:** Google kann laut eigener Dokumentation Links in der Regel nur verfolgen, wenn sie als HTML-Element „a“ mit „href“-Attribut angelegt sind. Ergänzen Sie das Suchfeld des Store Locators deshalb um eine Übersicht aller Standorte mit normalen Links, etwa nach Land und Stadt geordnet.",
            "**Eigene Inhalte je Standort:** Adresse, Telefon und Zeiten wie im Profil, dazu Team, Anfahrt und Parken, Barrierefreiheit, Leistungen nur dieses Standorts und eigene Fotos. Der Partner liefert die Inhalte, die Zentrale das Format.",
            "**Ein Markenauftritt statt vieler Domains:** Google nennt mehrere Domains oder Seiten für einzelne Städte, die Besucher auf eine Seite leiten, ausdrücklich als Brückenseiten. Eigene Partner-Websites mit fast gleichem Inhalt können aus unserer Sicht deshalb ein Risiko sein.",
            "**Strukturierte Daten:** Google empfiehlt, jeden Standort als eigenes LocalBusiness zu definieren. Eine Anzeige in der Suche ist damit laut Google nicht garantiert.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Wenn Franchisenehmer eine eigene Website betreiben wollen, sollte das Handbuch regeln, dass das Profil trotzdem auf die Standortseite der Marke verlinkt und die Partnerseite keine kopierten Markentexte enthält.",
        },
        {
          t: "p",
          text: "Wie das Markup je Standort aussieht, steht in [LocalBusiness-Schema implementieren](/blog/localbusiness-schema-implementierung). Was eine gute Standortseite enthält, zeigt der Abschnitt [Eine Seite je Standort](/blog/gbp-mehrere-standorte#standortseiten).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bewertungen über alle Standorte steuern",
      answer:
        "Bewertungen gehören immer zum Profil des jeweiligen Standorts. Die Zentrale kann Ton, Ablauf und Eskalation vorgeben, aber keine Regeln, die Googles Richtlinien verletzen: keine Belohnungen, keine Quoten, kein gezieltes Fragen nur zufriedener Kunden.",
      blocks: [
        {
          t: "p",
          text: "Googles Richtlinien verbieten Inhalte, die gegen Bezahlung oder andere Vorteile entstanden sind, Inhalte aus Interessenkonflikten, wozu laut Google auch ein aktuelles oder früheres Arbeitsverhältnis zählt, sowie das Abhalten von negativen Bewertungen und das gezielte Einholen positiver. Weder Zentrale noch Partner sollten also Mitarbeitende, Familie oder andere Franchisenehmer um Bewertungen bitten, denn Google nennt Arbeits-, Vertrags- und familiäre Beziehungen als Interessenkonflikt.",
        },
        {
          t: "table",
          caption: "Bewertungsregeln im System",
          head: ["Vorgabe der Zentrale", "Zulässig", "Warum"],
          rows: [
            ["Jeder Standort fragt alle Kunden mit eigenem Link oder QR-Code", "Ja", "Bewertung landet beim richtigen Standort"],
            ["Antwortbausteine mit Pflicht zur Anpassung an den Fall", "Ja", "Einheitlicher Ton, trotzdem konkret"],
            ["Eskalation kritischer Bewertungen an die Zentrale binnen fester Frist", "Ja", "Klare Zuständigkeit"],
            ["Wettbewerb zwischen Standorten um die meisten Sterne mit Prämie", "Besser nicht", "Kann Druck auf Kunden und Mitarbeitende erzeugen. Google verbietet Quoten für Mitarbeitende"],
            ["Nur zufriedene Kunden nach einer Vorabfrage zu Google schicken", "Nein", "Gezieltes Einholen positiver Bewertungen"],
            ["Rabatt für eine Bewertung", "Nein", "Anreize sind ausdrücklich verboten"],
          ],
        },
        {
          t: "p",
          text: "Auf Bewertungen antworten können nur bestätigte Profile. Legen Sie fest, wer je Standort antwortet, meist der Franchisenehmer als Manager, und wann die Zentrale übernimmt, etwa bei rechtlichen Vorwürfen oder Presseanfragen. Vorlagen für typische Fälle finden Sie in [Antworten auf Bewertungen: Vorlagen](/blog/bewertungs-antworten-vorlagen), den Umgang mit Kritik in [Negative Google-Bewertungen](/blog/negative-google-bewertungen).",
        },
      ],
    },
    {
      id: "vertrag-handbuch",
      title: "Was in Franchisevertrag und Handbuch gehört",
      answer:
        "Regeln Sie schriftlich, wer die Profile besitzt, wer welche Rolle bekommt, welche Angaben zentral festgelegt sind, wie Bewertungen behandelt werden und was beim Ausstieg eines Partners mit Zugriff, Fotos und Daten geschieht.",
      blocks: [
        {
          t: "note",
          label: "Einschätzung, keine Rechtsberatung",
          text: "Die Liste zeigt, was wir aus Sicht der lokalen Sichtbarkeit für regelungsbedürftig halten. Wo und wie eine Regel wirksam formuliert wird, prüfen Sie mit einer auf Franchiserecht spezialisierten Rechtsberatung.",
        },
        {
          t: "ul",
          items: [
            "**Inhaberschaft:** Wer primärer Inhaber jedes Profils ist und dass bestehende Profile vor Vertragsbeginn übertragen oder geteilt werden.",
            "**Rollen und Konten:** Zugriff nur über persönliche Google-Konten oder Firmenkonten, keine geteilten Passwörter. Mindestens eine Person der Zentrale bleibt immer Inhaber.",
            "**Feste Angaben:** Name, Hauptkategorie, Website-Link und Logo ändert nur die Zentrale.",
            "**Lokale Pflichten:** Öffnungszeiten und Sonderzeiten aktuell halten, Fotos nach Bildregeln hochladen, auf Bewertungen innerhalb einer festgelegten Frist antworten.",
            "**Bildrechte:** Wer die Rechte an Fotos und Texten des Standorts hält und ob die Zentrale sie nach einem Ausstieg weiter nutzen darf.",
            "**Ausstieg und Übergabe:** Was mit dem Profil geschieht, wenn der Standort an einen neuen Partner geht oder schließt.",
            "**Berichte:** Welche Kennzahlen monatlich geteilt werden, etwa Anrufe, Routen und Website-Klicks aus den Profil-Statistiken.",
          ],
        },
        {
          t: "p",
          text: "Für die Berichte eignet sich ein einheitliches Format für alle Standorte, wie im [Local-SEO-Reporting-Template](/blog/local-seo-reporting-template) beschrieben.",
        },
      ],
    },
    {
      id: "betreiberwechsel",
      title: "Betreiberwechsel und Schließung",
      answer:
        "Wechselt nur der Betreiber, bleibt das Profil beim Standort. Der Zugriff wird über die Rollen übertragen, ein neues Profil anzulegen erzeugt ein Duplikat. Schließt der Standort, markieren Sie das Profil als geschlossen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Neuen Partner hinzufügen", text: "Der neue Franchisenehmer bekommt mit seinem eigenen Google-Konto eine Rolle am bestehenden Profil. Beachten Sie die siebentägige Wartezeit für neue Nutzer." },
            { title: "Primäre Inhaberschaft prüfen", text: "War der bisherige Partner primärer Inhaber, kann nur er sie an einen bestehenden Inhaber oder Manager übertragen." },
            { title: "Alten Zugang entfernen", text: "Erst danach entfernt ein Inhaber den bisherigen Partner. So hat das Profil zu keinem Zeitpunkt niemanden mit vollem Zugriff." },
            { title: "Angaben aktualisieren", text: "Telefonnummer, Öffnungszeiten, Fotos und Standortseite an den neuen Betrieb anpassen. Der Name bleibt der Markenname." },
          ],
        },
        {
          t: "p",
          text: "Legen Sie für einen bestehenden Standort kein zweites Profil an. Wie Sie Duplikate bereinigen, steht in [Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen). Kommt ein bisheriger Partner nicht mehr zur Übergabe, bleibt die Zugriffsanfrage mit ihrer Antwortfrist von drei Tagen.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Darf ein Franchisenehmer den Markennamen im Google-Unternehmensprofil verwenden?",
      a: "Ja. Laut Google darf ein autorisierter Betrieb, der ausschließlich die Marke vertreibt, oft Franchisenehmer genannt, den Markennamen nutzen. Alle Standorte im selben Land tragen dann denselben Namen.",
    },
    {
      q: "Sollte die Zentrale oder der Franchisenehmer primärer Inhaber sein?",
      a: "Eine Vorgabe von Google dazu haben wir nicht gefunden. Wir halten es für robuster, wenn die Zentrale primärer Inhaber ist und der Partner als Manager arbeitet, weil der Zugriff dann beim Betreiberwechsel erhalten bleibt. Entscheidend ist, dass es schriftlich geregelt ist.",
    },
    {
      q: "Brauchen wir als Marke ein Organisationskonto?",
      a: "In der Regel nicht. Organisationskonten sind laut Google für Dritte gedacht, die Standorte im Auftrag der Inhaber verwalten, etwa Agenturen. Für die eigenen Standorte einer Marke empfiehlt Google eine Unternehmensgruppe je Marke.",
    },
    {
      q: "Können wir alle Partnerstandorte per Sammelbestätigung bestätigen?",
      a: "Nur die Profile, die nicht bereits jemand anderem gehören, und erst ab zehn Standorten desselben Unternehmens. Unternehmen mit Einzugsgebiet und Agenturen mit mehreren Kunden in einem Konto sind ausgeschlossen. Profile, die Partner schon selbst bestätigt haben, müssen zuerst übertragen oder geteilt werden.",
    },
    {
      q: "Darf die Zentrale den Standorten Bewertungsziele vorgeben?",
      a: "Ziele für die Antwortzeit sind unproblematisch. Quoten, Prämien oder Wettbewerbe um Bewertungen und das gezielte Fragen nur zufriedener Kunden verstoßen gegen Googles Richtlinien. Google kann so entstandene Rezensionen entfernen.",
    },
  ],
  sources: [
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google (Name, Ketten und Marken, Franchisenehmer, Telefonnummer)", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Create & manage business groups", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6085339?hl=en" },
    { title: "Manage agency organizations", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7663063?hl=en" },
    { title: "Manage your Business Profile owners & managers", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3403100?hl=en" },
    { title: "Transfer primary ownership of your Business Profile", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3415281?hl=en" },
    { title: "Inhaberschaft für ein Unternehmensprofil beantragen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4566671?hl=de" },
    { title: "Bulk verification for Business Profiles (chains)", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4490296?hl=en" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    { title: "Spam policies for Google web search (doorway abuse)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=en" },
    { title: "Make your links crawlable", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=en" },
    { title: "Local business (LocalBusiness) structured data", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=en" },
  ],
  related: [
    { slug: "gbp-mehrere-standorte", title: "Mehrere Standorte im Google-Unternehmensprofil verwalten" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "bewertungs-antworten-vorlagen", title: "Antworten auf Bewertungen: Vorlagen" },
    { slug: "duplicate-listing-entfernen", title: "Doppelte Einträge bei Google entfernen" },
  ],
  cta: {
    title: "Passt die Profilstruktur Ihres Systems?",
    text: "Wir sehen uns Namen, Zugriffe und Standortseiten Ihrer Marke an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
