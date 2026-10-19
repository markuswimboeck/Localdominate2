import type { V4Article } from "../types";

const article: V4Article = {
  slug: "gbp-attribute-richtig-nutzen",
  lang: "de",
  seoTitle: "Google-Attribute im Unternehmensprofil richtig nutzen",
  seoDescription:
    "Welche Attribute Sie im Google-Unternehmensprofil selbst setzen, was von Kunden kommt, wann ein Eingang als rollstuhlgerecht gilt und welche Angaben schaden.",
  h1: "Attribute im Google-Unternehmensprofil richtig nutzen",
  kicker: "Google Unternehmensprofil",
  lead:
    "Für Inhaber von Restaurants, Hotels, Praxen, Geschäften und Handwerksbetrieben, die ihr Profil sauber ausfüllen wollen. Sie erfahren, welche Attribute Sie selbst setzen, welche aus Angaben von Kunden stammen, welche Maßstäbe Google für Barrierefreiheit vorgibt und wo die Grenzen liegen.",
  answer:
    "Attribute sind Ja-oder-Nein-Angaben im Unternehmensprofil, etwa WLAN, Sitzplätze im Freien, Zahlungsarten oder ein rollstuhlgerechter Eingang. Sie erscheinen laut Google im Profil in der Suche und in Maps und können helfen, bei Suchen nach solchen Merkmalen zu erscheinen. Einige setzen Sie selbst, andere stammen aus Angaben von Kunden. Welche verfügbar sind, hängt von Land und Kategorie ab.",
  takeaways: [
    "Attribute setzen Sie unter „Profil bearbeiten“ und „Mehr“ per Ja oder Nein. Die Prüfung dauert laut Google meist etwa zehn Minuten, manchmal bis zu 30 Tage.",
    "Manche Attribute füllt Google aus Angaben von Besuchern. Prüfen Sie Ihr Profil regelmäßig auf falsche Merkmale.",
    "Für Barrierefreiheit gibt Google feste Maßstäbe vor, zum Beispiel einen etwa 1 Meter breiten, stufenlosen Eingang.",
    "Identitätsmerkmale wie „von Frauen geführt“ sind freiwillig. Sie können sie jederzeit setzen oder entfernen.",
    "Setzen Sie nur, was stimmt. Google verlangt ehrliche Angaben, und ein falsches Merkmal enttäuscht genau die Kunden, die darauf achten.",
  ],
  publishedAt: "2025-01-10",
  updatedAt: "2026-10-10",
  readingTime: 9,
  sections: [
    {
      id: "was-sind-attribute",
      title: "Was Attribute sind und wo sie erscheinen",
      answer:
        "Attribute beschreiben Merkmale Ihres Betriebs in kurzer, einheitlicher Form. Google zeigt sie im Unternehmensprofil in der Suche, in Maps und auf anderen Google-Plattformen. Laut Google können sie helfen, bei Suchen nach Orten mit diesen Merkmalen zu erscheinen. Ein Ranking-Bonus pro Attribut ist nicht belegt.",
      blocks: [
        {
          t: "p",
          text: "Ein Attribut ist eine einzelne Aussage über Ihren Betrieb: „WLAN: Ja“, „Nur Barzahlung: Nein“, „Rollstuhlgerechter Eingang: Ja“. Anders als die Beschreibung ist es kein freier Text. Google kann die Angabe deshalb direkt mit einer Suche abgleichen, in der jemand genau dieses Merkmal sucht.",
        },
        {
          t: "p",
          text: "Mehr sagt Google zur Wirkung nicht. Es gibt keine offizielle Aussage, dass mehr Attribute zu einer besseren Position führen. Attribute gehören zur **Relevanz**, also zur Frage, ob Ihr Profil zur Suche passt. Wie Relevanz, Entfernung und Bekanntheit zusammenwirken, erklärt der [Leitfaden Local SEO](/blog/ultimate-guide-local-seo). Wie Sie das gesamte Profil aufbauen, steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
        {
          t: "table",
          caption: "Attribute im Vergleich zu anderen Profilfeldern",
          head: ["Feld", "Form", "Wofür es da ist"],
          rows: [
            ["Kategorie", "Auswahl aus einer festen Liste", "Was Ihr Betrieb ist"],
            ["Attribute", "Ja oder Nein je Merkmal", "Was Ihr Betrieb hat oder bietet"],
            ["Leistungen", "Einträge aus einer Liste oder eigene", "Was Sie verkaufen oder ausführen"],
            ["Beschreibung", "Freier Text bis 750 Zeichen", "Was Sie besonders macht"],
          ],
        },
        {
          t: "note",
          label: "Kategorie bestimmt die Auswahl",
          text: "Google schreibt, dass manche Attribute nur in bestimmten Ländern, an bestimmten Standorten oder für bestimmte Kategorien angeboten werden. Fehlt ein Merkmal, das Sie erwarten, prüfen Sie zuerst Ihre Hauptkategorie. Hilfe dazu gibt der [Kategorien-Guide](/blog/google-business-kategorien-guide). Google verbietet aber, eine Kategorie nur zu wählen, um ein Merkmal zu beschreiben.",
        },
      ],
    },
    {
      id: "selbst-gesetzt-oder-von-kunden",
      title: "Selbst gesetzte Attribute und Angaben von Kunden",
      answer:
        "Google unterscheidet zwei Wege: Einige Attribute bearbeiten Sie direkt im Profil, andere werden aus Angaben von Kunden gefüllt. In der Branche heißen sie oft objektive und subjektive Attribute. Diese Begriffe verwendet Google selbst in der aktuellen Hilfe nicht. Für Sie zählt: Beide Arten erscheinen im Profil.",
      blocks: [
        {
          t: "p",
          text: "In der Hilfe zum Unternehmensprofil steht: Einige Attribute können Sie direkt bearbeiten, andere können anhand von Kundenangaben ausgefüllt werden. Besucher werden in Google Maps zum Beispiel gefragt, ob ein Ort bestimmte Merkmale hat. Google hat schon 2017 beschrieben, dass Nutzer so Angaben zu rollstuhlgerechten Eingängen, Aufzügen, Sitzplätzen und Parkplätzen beitragen.",
        },
        {
          t: "table",
          caption: "Zwei Arten von Attributen",
          head: ["", "Selbst gesetzt (oft „objektiv“ genannt)", "Aus Kundenangaben (oft „subjektiv“ genannt)"],
          rows: [
            ["Beispiele", "WLAN, Zahlungsarten, Sitzplätze im Freien, Barrierefreiheit", "Merkmale, die Besucher in Maps bestätigen oder vorschlagen"],
            ["Wer entscheidet", "Sie, per Ja oder Nein", "Google auf Basis von Nutzerbeiträgen"],
            ["Was Sie tun", "Vollständig und korrekt ausfüllen", "Regelmäßig prüfen und Falsches korrigieren"],
          ],
        },
        {
          t: "p",
          text: "Die Grenze ist nicht scharf. Die Analyse von BrightLocal nennt etwa „LGBTQ+-freundlich“ als Beispiel für ein Merkmal, das Inhaber bearbeiten können, für das Google aber keine festen Kriterien veröffentlicht. Solche Angaben beschreiben eher eine Haltung als eine Ausstattung. Setzen Sie sie nur, wenn Ihr Team das im Alltag tatsächlich so lebt.",
        },
        {
          t: "note",
          label: "Falsches Merkmal im Profil",
          text: "Sehen Sie ein Attribut, das nicht stimmt, prüfen Sie zuerst unter „Profil bearbeiten“ und „Mehr“, ob Sie es dort ändern können. Lässt es sich nicht ändern, wenden Sie sich an den Support des Unternehmensprofils.",
        },
      ],
    },
    {
      id: "attribute-einstellen",
      title: "So setzen Sie Attribute im Profil",
      answer:
        "Öffnen Sie Ihr Unternehmensprofil, wählen Sie „Profil bearbeiten“ und dann „Mehr“. Neben jeder Kategorie von Attributen steht „Bearbeiten“. Dort wählen Sie je Merkmal Ja oder Nein und speichern. Google prüft die Änderung meist in etwa zehn Minuten, in Einzelfällen dauert es bis zu 30 Tage.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Profil öffnen", text: "Melden Sie sich mit dem Konto an, das das Profil verwaltet, und öffnen Sie es in der Google-Suche, in Maps oder über business.google.com." },
            { title: "„Profil bearbeiten“ und „Mehr“", text: "Unter „Mehr“ sehen Sie die Gruppen von Attributen, die für Ihre Kategorie angeboten werden, etwa „Ausstattung“, „Zahlungen“ oder „Barrierefreiheit“." },
            { title: "Gruppe bearbeiten", text: "Wählen Sie neben der Gruppe „Bearbeiten“. Gehen Sie jedes Merkmal einzeln durch." },
            { title: "Ja oder Nein wählen", text: "Ein bewusstes Nein ist auch eine Information. Bei Merkmalen, bei denen Sie unsicher sind, messen oder fragen Sie lieber nach, bevor Sie etwas eintragen." },
            { title: "Speichern und prüfen", text: "Nach dem Speichern prüft Google die Änderung. Kontrollieren Sie einige Tage später in Maps, ob die Angabe sichtbar ist." },
          ],
        },
        {
          t: "p",
          text: "Betriebe mit zehn oder mehr Standorten können Attribute laut Google auch per Massenupload pflegen, Agenturen über die Schnittstelle des Unternehmensprofils. Wie Sie mehrere Standorte einheitlich führen, steht in [Mehrere Standorte im Unternehmensprofil](/blog/gbp-mehrere-standorte). Hotels pflegen ihre Ausstattung in einem eigenen Bereich, beschrieben in [Local SEO für Hotels](/blog/local-seo-hotels).",
        },
      ],
    },
    {
      id: "barrierefreiheit",
      title: "Barrierefreiheit: Googles Maßstäbe",
      answer:
        "Für Barrierefreiheit gibt Google konkrete Kriterien vor. Ein Eingang ist rollstuhlgerecht, wenn er etwa 1 Meter breit und stufenlos ist oder eine feste oder mobile Rampe hat. Ein Eingang nur mit Drehtür gilt nicht als rollstuhlgerecht. Ähnliche Regeln gelten für WC, Sitzplätze, Parkplatz und Aufzug.",
      blocks: [
        {
          t: "table",
          caption: "Attribute zur Barrierefreiheit nach der Google-Hilfe",
          head: ["Attribut", "Ja, wenn …"],
          rows: [
            ["Rollstuhlgerechter Eingang", "der Eingang etwa 1 m breit ist und keine Stufen hat, oder bei Stufen eine feste oder mobile Rampe vorhanden ist. Nur eine Drehtür bedeutet Nein."],
            ["Rollstuhlgerechtes WC", "der Zugang zum WC etwa 1 m breit und stufenlos ist. Wird eine Kabine genutzt, sollte auch deren Eingang etwa 1 m breit sein."],
            ["Rollstuhlgerechte Sitzgelegenheiten", "der Hauptbereich stufenlos ist und genug Platz bietet, um an einen Tisch zu fahren. Nur hohe Tische wie Stehtische bedeuten Nein."],
            ["Rollstuhlgerechter Parkplatz", "es reservierte Plätze für Menschen mit eingeschränkter Mobilität gibt, meist durch Bodenmarkierung oder Schild gekennzeichnet."],
            ["Rollstuhlgerechter Aufzug", "der Betrieb mehrere Etagen hat und der Aufzug groß genug für einen Rollstuhl ist."],
            ["Induktive Höranlage", "eine Höranlage fest installiert ist."],
            ["Hörhilfen werden angeboten", "Sie Kunden Geräte vor Ort leihen."],
          ],
        },
        {
          t: "p",
          text: "Für Auracast Broadcast Audio gilt: Ja, wenn ein Auracast-Sender fest installiert ist. Wählen Sie hier Nein, blendet Google das Merkmal aus.",
        },
        {
          t: "p",
          text: "In Google Maps gibt es in den Einstellungen der App eine Option für rollstuhlgerechte Orte (im Englischen „Accessible Places“). Ist diese Option eingeschaltet, markiert ein Rollstuhlsymbol einen zugänglichen Eingang, und Nutzer sehen, ob Sitzplätze, WC und Parkplatz zugänglich sind. Google hat die Funktion im Mai 2020 zunächst in Australien, Japan, Großbritannien und den USA eingeführt und weitere Länder angekündigt. Für Deutschland, Österreich und die Schweiz gibt es keine eigene Ankündigung.",
        },
        {
          t: "note",
          label: "Vor dem Eintragen messen",
          text: "Nehmen Sie ein Maßband und gehen Sie den Weg selbst ab: Eingang, Gang zum Tisch, WC-Tür, Kabine. Eine Schwelle von wenigen Zentimetern oder eine Stufe zum Gastraum reicht für ein Nein. Sind Sie unsicher, lassen Sie das Merkmal offen und beschreiben die Situation auf Ihrer Website.",
        },
      ],
    },
    {
      id: "zahlung-ausstattung-angebot",
      title: "Zahlungsarten, Ausstattung und Angebot",
      answer:
        "Die meisten Attribute betreffen Alltagsfragen: Kann ich mit Karte zahlen, gibt es WLAN, Sitzplätze im Freien oder eine Toilette. Welche Gruppen angeboten werden, hängt von Ihrer Kategorie ab. Füllen Sie alle Merkmale aus, die Ihnen angezeigt werden, und prüfen Sie sie bei jeder Änderung im Betrieb.",
      blocks: [
        {
          t: "p",
          text: "Google nennt in der Hilfe Beispiele wie „WLAN“ in der Gruppe „Ausstattung“ und „Nur Barzahlung“ in der Gruppe „Zahlungen“. Welche weiteren Gruppen Sie sehen, legt Google je Kategorie fest. Typisch sind Fragen, die Kunden sonst am Telefon stellen.",
        },
        {
          t: "table",
          caption: "Worauf Sie je Branche achten sollten",
          head: ["Branche", "Merkmale, die Sie prüfen sollten, sofern angeboten", "Weiterlesen"],
          rows: [
            ["Restaurant, Café", "Sitzplätze im Freien, Zahlungsarten, Barrierefreiheit, WLAN", "[Local SEO für Restaurants](/blog/local-seo-fuer-restaurants)"],
            ["Hotel", "Ausstattung im Bereich Hoteldetails, etwa WLAN, Parken, Haustiere, Frühstück", "[Local SEO für Hotels](/blog/local-seo-hotels)"],
            ["Arztpraxis, Therapie", "Barrierefreiheit, Parkplatz, Aufzug", "[Local SEO für Arztpraxen](/blog/local-seo-aerzte-praxen)"],
            ["Handwerk, Dienstleister", "Zahlungsarten und Merkmale zum Angebot", "[Local SEO für Handwerker](/blog/local-seo-handwerker)"],
            ["Einzelhandel", "Zahlungsarten, Barrierefreiheit, Recycling-Annahme", "[Unternehmensprofil optimieren](/blog/google-my-business-optimieren)"],
          ],
        },
        {
          t: "p",
          text: "Ein Sonderfall sind **Recycling-Attribute**. Je nach Kategorie können Sie angeben, welche Dinge Sie annehmen, etwa Batterien, Elektrogeräte, Glühbirnen, Druckerpatronen oder Plastiktüten. Laut Google können Betriebe mit diesen Angaben in der Suche ein Recycling-Symbol erhalten.",
        },
        {
          t: "p",
          text: "Gastgeber im englischsprachigen Raum finden Hinweise zur Ausstattung auch auf unserer [Seite für Hotels (englische Seite)](/industries/hotels).",
        },
      ],
    },
    {
      id: "identitaetsmerkmale",
      title: "Identitätsmerkmale: freiwillig und selbst gewählt",
      answer:
        "Google bietet Merkmale zur Unternehmensidentität an, etwa „von Frauen geführt“ oder „von LGBTQ+ geführt“. Sie sagen, dass der Betrieb von Menschen mit dieser Identität geführt wird. Die Angabe ist freiwillig, Sie können mehrere wählen und sie jederzeit entfernen. In welchen Ländern sie angeboten werden, nennt Google nicht.",
      blocks: [
        {
          t: "p",
          text: "Die Google-Hilfe nennt Merkmale für Betriebe, die von Frauen, von Menschen mit Behinderung, von Veteranen oder von Menschen mit asiatischer, Schwarzer, lateinamerikanischer, indigener oder LGBTQ+-Identität geführt werden. Dazu kommt das Merkmal „Kleinunternehmen“.",
        },
        {
          t: "ul",
          items: [
            "**Freiwillig:** Sie entscheiden, ob Sie ein Merkmal setzen. Sie können es jederzeit wieder entfernen.",
            "**Selbst gewählt:** Google beschreibt keine Prüfung. Das Merkmal sagt aus, dass der Betrieb von einer Person mit dieser Identität geführt wird. Es muss also stimmen.",
            "**Kleinunternehmen:** Franchisebetriebe zählen laut Google nicht dazu. Die Grenze liegt bei weniger als 10 Millionen US-Dollar Jahresumsatz. Google kann das Merkmal auch selbst setzen, wenn passende Informationen vorliegen.",
            "**Verfügbarkeit:** Google nennt keine Länderliste. Ob Ihnen diese Merkmale in Deutschland, Österreich oder der Schweiz angezeigt werden, sehen Sie nur in Ihrem eigenen Profil unter „Mehr“.",
          ],
        },
        {
          t: "note",
          label: "Persönliche Entscheidung",
          text: "Ein Identitätsmerkmal ist öffentlich und betrifft Menschen, nicht Ausstattung. Sprechen Sie mit den Personen, um die es geht, bevor Sie es setzen. Es ist kein Werkzeug, um mehr Klicks zu bekommen.",
        },
      ],
    },
    {
      id: "was-sie-nicht-tun-sollten",
      title: "Was Sie nicht tun sollten",
      answer:
        "Setzen Sie kein Merkmal, das Ihr Betrieb nicht erfüllt. Google verlangt, dass Ihr Profil den Betrieb wahrheitsgemäß darstellt, und kann Angaben ändern, Profile entfernen oder sperren. Auch Kategorien dürfen nicht genutzt werden, um Merkmale zu beschreiben. Ein falsches Merkmal kostet zudem Vertrauen bei Kunden.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Merkmale „auf Vorrat“ setzen:** Sitzplätze im Freien im Winter ohne Terrasse, WLAN, das nur für das Personal da ist, Kartenzahlung erst ab einem Mindestbetrag ohne Hinweis.",
            "**Barrierefreiheit schönrechnen:** Eine Stufe am Eingang ohne Rampe bedeutet nach Googles Kriterien Nein, auch wenn das Team gern hilft.",
            "**Identitätsmerkmale ohne Grundlage:** Sie sagen etwas über die Menschen hinter dem Betrieb aus. Eine falsche Angabe täuscht Kunden.",
            "**Kategorien als Ersatz:** Google schreibt ausdrücklich, Kategorien nicht als Keywords oder zur Beschreibung von Merkmalen zu verwenden.",
            "**Keywords statt Pflege:** Attribute ersetzen keinen sauberen Firmennamen. Begriffe wie „barrierefrei“ gehören nicht in den Namen des Profils.",
          ],
        },
        {
          t: "p",
          text: "Wer gegen die Richtlinien verstößt, riskiert laut Google geänderte Angaben, die Entfernung von Informationen oder eine Sperrung des Profils. Wie Sie bei einer Sperrung vorgehen, steht in [Profil gesperrt: so reaktivieren Sie es](/blog/gbp-suspendiert-reaktivieren). Ein falsches Merkmal kostet außerdem Vertrauen: Wer im Rollstuhl vor einer Stufe steht, schreibt eher eine kritische Rezension. Wie Sie darauf antworten, zeigt [Umgang mit negativen Bewertungen](/blog/negative-google-bewertungen).",
        },
      ],
    },
    {
      id: "aktuell-halten",
      title: "Attribute aktuell halten",
      answer:
        "Prüfen Sie Ihre Attribute immer dann, wenn sich im Betrieb etwas ändert, und zusätzlich in einem festen Rhythmus, etwa zusammen mit den Öffnungszeiten. Google schreibt, dass sich Namen von Attributen ändern können. Neue Merkmale tauchen ohne Ankündigung im Profil auf.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Bei jeder Änderung im Betrieb", text: "Neue Terrasse, Umbau am Eingang, neues Kassensystem, Ende des Gästenetzes: Passen Sie das Attribut am selben Tag an." },
            { title: "Zur Saison", text: "Sitzplätze im Freien und saisonale Angebote prüfen Sie zusammen mit Sonderöffnungszeiten. Die Anleitung dazu steht in [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage)." },
            { title: "Im festen Rhythmus", text: "Öffnen Sie „Profil bearbeiten“ und „Mehr“ und sehen Sie nach, ob neue Merkmale angeboten werden oder Angaben aus Kundenbeiträgen nicht stimmen." },
            { title: "Aus Kundensicht kontrollieren", text: "Rufen Sie Ihr Profil in Google Maps auf dem Handy auf und lesen Sie den Bereich mit den Merkmalen wie ein neuer Kunde." },
          ],
        },
        {
          t: "p",
          text: "Attribute sind ein Baustein unter mehreren. Eine vollständige Prüfliste für das ganze Profil und die Website finden Sie in der [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste). Passende Fotos zu Eingang, Terrasse oder Gastraum belegen Ihre Angaben zusätzlich, mehr dazu in [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Verbessern Attribute mein Ranking bei Google?",
      a: "Google schreibt nur, dass Attribute helfen können, bei Suchen nach Orten mit diesen Merkmalen zu erscheinen. Eine Aussage, dass mehr Attribute zu einer besseren Position führen, gibt es nicht. Füllen Sie aus, was zutrifft, weil es Kunden die Entscheidung erleichtert.",
    },
    {
      q: "Warum sehe ich ein bestimmtes Attribut nicht?",
      a: "Laut Google werden manche Attribute nur in bestimmten Ländern, an bestimmten Standorten oder für bestimmte Kategorien angeboten. Prüfen Sie, ob Ihre Hauptkategorie genau passt. Eine Kategorie nur wegen eines Merkmals zu wählen, verbietet Google.",
    },
    {
      q: "Warum zeigt mein Profil ein Merkmal, das ich nicht gesetzt habe?",
      a: "Einige Attribute füllt Google aus Angaben von Kunden. Stimmt ein Merkmal nicht, prüfen Sie unter „Profil bearbeiten“ und „Mehr“, ob Sie es ändern können. Ist das nicht möglich, wenden Sie sich an den Support des Unternehmensprofils.",
    },
    {
      q: "Wie lange dauert es, bis eine Änderung sichtbar ist?",
      a: "Google prüft Änderungen an Attributen meist in etwa zehn Minuten. In manchen Fällen dauert die Prüfung bis zu 30 Tage.",
    },
    {
      q: "Wann darf ich „Rollstuhlgerechter Eingang“ angeben?",
      a: "Wenn der Eingang etwa 1 Meter breit ist und keine Stufen hat, oder wenn es bei Stufen eine feste oder mobile Rampe gibt. Ein Eingang nur mit Drehtür gilt nach Google nicht als rollstuhlgerecht.",
    },
    {
      q: "Muss ich Identitätsmerkmale wie „von Frauen geführt“ angeben?",
      a: "Nein. Diese Merkmale sind freiwillig, Sie können mehrere wählen und sie jederzeit wieder entfernen. Ob sie Ihnen in Deutschland, Österreich oder der Schweiz angeboten werden, sehen Sie in Ihrem Profil, Google nennt dazu keine Länderliste.",
    },
  ],
  sources: [
    { title: "Unternehmensattribute hinzufügen oder bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9049526?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Find wheelchair accessible places with Google Maps (Mai 2020)", publisher: "Google Blog", url: "https://blog.google/products/maps/wheelchair-accessible-places-google-maps/" },
    { title: "Building a map for everyone (Juli 2017)", publisher: "Google Blog", url: "https://blog.google/products/maps/building-map-everyone" },
    { title: "What are Google Business Profile Attributes?", publisher: "BrightLocal", url: "https://www.brightlocal.com/?p=40433" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "google-business-kategorien-guide", title: "Kategorien im Unternehmensprofil richtig wählen" },
    { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants" },
    { slug: "local-seo-hotels", title: "Local SEO für Hotels" },
  ],
  cta: {
    title: "Stimmen die Merkmale in Ihrem Profil?",
    text: "Wir prüfen kostenlos, welche Attribute Ihr Profil für Ihre Kategorie anbietet, welche fehlen und welche nicht stimmen. Innerhalb von zwei Werktagen erhalten Sie bis zu drei Punkte, die Sie zuerst angehen sollten.",
  },
};

export default article;
