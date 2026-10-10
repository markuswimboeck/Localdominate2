import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-link-building",
  lang: "de",
  seoTitle: "Lokale Backlinks aufbauen: Wege, die Google erlaubt",
  seoDescription:
    "Lokale Backlinks für Betriebe in DACH: Kammer, Verband, Partner, Vereine und Presse richtig nutzen, Sponsoring korrekt kennzeichnen, Linkspam vermeiden.",
  h1: "Local Link Building: Lokale Links ohne Regelverstoß aufbauen",
  kicker: "Strategie",
  lead:
    "Für Inhaber und Marketingverantwortliche lokaler Betriebe in Deutschland, Österreich und der Schweiz, die mehr Verweise von Websites aus ihrer Region wollen. Sie erfahren, welche Quellen sich lohnen, wie Sie freundlich um einen Link bitten und wo Googles Regeln eine klare Grenze ziehen.",
  answer:
    "Lokale Links entstehen, wenn Websites aus Ihrer Region einen echten Grund haben, auf Sie zu verweisen: Mitgliedschaften bei Kammer und Verband, Partner und Lieferanten, Vereine, lokale Presse und nützliche Inhalte. Google nennt die **Zahl der Websites, die auf ein Unternehmen verweisen**, als Teil der Bekanntheit. Gekaufte oder getauschte Links verstoßen gegen Googles Spamrichtlinien.",
  takeaways: [
    "Google zählt die Websites, die auf Ihr Unternehmen verweisen, zur Bekanntheit, einem der drei Faktoren für lokale Ergebnisse.",
    "Die besten Quellen sind Verbindungen, die Sie schon haben: Kammer, Innung, Verband, Lieferanten, Partner, Vereine.",
    "Geld, Waren oder Leistungen gegen Links, übermäßiger Linktausch und automatisierte Links gelten bei Google als Linkspam.",
    "Bezahlte Links, etwa bei Sponsoring, sind erlaubt, wenn sie mit „sponsored“ oder „nofollow“ gekennzeichnet sind. Ihr Wert liegt dann in Sichtbarkeit und Besuchern.",
    "Keyword-Ankertexte in Pressemitteilungen und Gastbeiträgen nennt Google ausdrücklich als Beispiel für Linkspam.",
  ],
  publishedAt: "2026-01-22",
  updatedAt: "2026-10-10",
  readingTime: 10,
  sections: [
    {
      id: "warum-lokale-links",
      title: "Warum lokale Links zählen",
      answer:
        "Zur Bekanntheit, einem der drei Faktoren für lokale Ergebnisse, zählt Google auch die Zahl der Websites, die auf Ihr Unternehmen verweisen. Links helfen außerdem Menschen und Google, Ihre Website überhaupt zu finden.",
      blocks: [
        {
          t: "p",
          text: "In seiner Hilfe zum lokalen Ranking schreibt Google, dass Bekanntheit auch auf Informationen wie der Anzahl der Websites beruht, die auf Ihr Unternehmen verweisen. Wie stark dieser Faktor im Vergleich zu Profil, Bewertungen und Entfernung wirkt, legt Google nicht offen.",
        },
        {
          t: "p",
          text: "Ein Link von der Website Ihrer Handwerkskammer, Ihres Gewerbevereins oder der Lokalzeitung hat zwei Wirkungen. Er zeigt, dass Ihr Betrieb in der Region bekannt ist, und er bringt Besucher, die bereits Interesse haben. Der zweite Punkt wird oft unterschätzt: Ein Link, über den echte Kunden kommen, ist auch dann nützlich, wenn er für das Ranking nichts weitergibt.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Google schreibt in seinem SEO-Startleitfaden, dass Verlinkungen anderer Websites im Laufe der Zeit von selbst entstehen. Sie können das beschleunigen, indem Sie Ihre Website bekannt machen. Abkürzungen über gekaufte Links sind nicht vorgesehen.",
        },
      ],
    },
    {
      id: "was-verboten-ist",
      title: "Was Google als Linkspam wertet",
      answer:
        "Linkspam sind Links, die hauptsächlich das Ranking manipulieren sollen. Dazu zählen gekaufte Links, Links gegen Waren oder Leistungen, übermäßiger Linktausch, automatisierte Links und Keyword-Ankertexte in verbreiteten Pressemitteilungen oder Gastbeiträgen.",
      blocks: [
        {
          t: "table",
          caption: "Linkspam nach Googles Spamrichtlinien (Auszug)",
          head: ["Praxis", "Warum problematisch"],
          rows: [
            ["Geld gegen Links oder gegen Beiträge mit Links", "Gekaufte Links, die das Ranking verbessern sollen"],
            ["Waren oder Leistungen gegen Links", "Auch Tausch in Naturalien gilt als Kauf"],
            ["„Verlink auf mich, ich verlink auf dich“ in großem Stil", "Exzessiver Linktausch und reine Partnerseiten zum gegenseitigen Verlinken"],
            ["Links über Programme oder Dienste automatisch erzeugen", "Automatisierte Links sind ausdrücklich genannt"],
            ["Optimierte Ankertexte in Gastbeiträgen und Pressemitteilungen auf fremden Websites", "Google nennt sie als Beispiel für Linkspam"],
            ["Links in Footern oder Widgets vieler fremder Websites", "Massenhaft verteilte Links ohne redaktionellen Grund"],
          ],
        },
        {
          t: "p",
          text: "Dazu kommen Angebote, die Ihnen „hunderte Backlinks“ oder „Linkpakete“ verkaufen. Google rät in seiner Hilfe zur Wahl eines SEO-Dienstleisters ausdrücklich, Anbieter zu meiden, die Programme zur Erhöhung der Linkpopularität anpreisen. Verstöße gegen die Spamrichtlinien können dazu führen, dass Seiten schlechter oder gar nicht mehr in der Suche erscheinen.",
        },
      ],
    },
    {
      id: "sponsoring",
      title: "Sponsoring und bezahlte Einträge richtig handhaben",
      answer:
        "Google akzeptiert bezahlte Links für Werbung und Sponsoring, wenn sie mit „sponsored“ oder „nofollow“ gekennzeichnet sind. Sponsern Sie deshalb, weil Ihnen der Verein und die Sichtbarkeit wichtig sind, nicht wegen eines Links fürs Ranking.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt, dass der An- und Verkauf von Links für Werbe- und Sponsoringzwecke ein regulärer Teil der Internetökonomie ist. Solche Links verstoßen nicht gegen die Richtlinien, wenn das Link-Element das Attribut „rel=sponsored“ oder „rel=nofollow“ trägt. Google empfiehlt für bezahlte Platzierungen vorzugsweise „sponsored“.",
        },
        {
          t: "ul",
          items: [
            "**Was Sie bekommen:** Ihr Name und Logo vor Mitgliedern, Eltern, Fans und Besuchern, eine Erwähnung auf der Website und oft in der Lokalzeitung. Das sind echte Werbewirkungen.",
            "**Was Sie nicht verlangen sollten:** einen ungekennzeichneten Link oder einen Ankertext mit Keywords. Beides macht aus Sponsoring einen gekauften Link.",
            "**Was Sie liefern:** Logo, korrekter Firmenname wie im Unternehmensprofil, Adresse, Website-Adresse. So stimmen auch Ihre Firmendaten.",
          ],
        },
        {
          t: "note",
          label: "Ehrlich bleiben",
          text: "Viele Vereinswebsites setzen Sponsorenlinks ohne Kennzeichnung. Das ist ein Risiko für die Website des Vereins und für Sie. Bitten Sie freundlich darum, Sponsorenlinks mit „sponsored“ zu versehen. Eine Mitgliedschaft, die Sie ohnehin haben, ist dagegen keine bezahlte Platzierung.",
        },
      ],
    },
    {
      id: "quellen",
      title: "Lokale Quellen, die sich lohnen",
      answer:
        "Die besten lokalen Links kommen von Organisationen, mit denen Sie ohnehin verbunden sind. Beginnen Sie mit einer Liste dieser Verbindungen, bevor Sie fremde Websites anschreiben.",
      blocks: [
        {
          t: "table",
          caption: "Lokale Linkquellen und typische Anlässe",
          head: ["Quelle", "Typischer Anlass", "Was Sie tun"],
          rows: [
            ["Kammern (IHK, HWK, WKO, kantonale Verbände)", "Mitgliedschaft, Ausbildungsbetrieb, Fachvorträge", "Eintrag in Firmen- oder Ausbildungsverzeichnis prüfen, Website-Link ergänzen lassen"],
            ["Innungen und Berufsverbände", "Mitgliedschaft, Gütesiegel, Zertifizierung", "Mitgliederverzeichnis prüfen, Siegelseite mit Link zu Ihrer Website"],
            ["Hersteller und Lieferanten", "Fachhändler, zertifizierter Partner", "Händler- oder Partnersuche des Herstellers prüfen"],
            ["Geschäftspartner", "Echte Zusammenarbeit, gemeinsames Angebot", "Gemeinsame Seite oder Referenz, wenn die Zusammenarbeit für Kunden relevant ist"],
            ["Vereine und Initiativen", "Mitgliedschaft, Sponsoring, Ehrenamt", "Bei Sponsoring Kennzeichnung mit „sponsored“"],
            ["Stadt, Gemeinde, Tourismusverband, Stadtmarketing", "Betriebsverzeichnis, Gastgeberverzeichnis, Veranstaltungen", "Eintrag prüfen, bei Veranstaltungen Teilnahme melden"],
            ["Schulen und Hochschulen", "Praktika, Betriebsbesichtigungen, Berufsorientierung", "Nach Kooperationsseiten fragen"],
            ["Lokale Presse und Stadtblogs", "Echte Neuigkeiten", "Siehe Abschnitt zur Pressearbeit"],
          ],
        },
        {
          t: "p",
          text: "Verzeichnisse und Branchenbücher sind vor allem für einheitliche Firmendaten wichtig. Wie Sie dort vorgehen, beschreibt die [Citation-Strategie](/blog/citation-strategie-verzeichnisse).",
        },
      ],
    },
    {
      id: "partner",
      title: "Partner, Lieferanten und Kooperationen",
      answer:
        "Ein Link zwischen Betrieben, die wirklich zusammenarbeiten, ist für Kunden nützlich und unproblematisch. Kritisch wird es erst, wenn Partnerseiten nur zum gegenseitigen Verlinken entstehen.",
      blocks: [
        {
          t: "p",
          text: "Ein Hotel, das mit einer Skischule und einem Fahrradverleih zusammenarbeitet, darf seinen Gästen diese Partner empfehlen und verlinken. Ein Malerbetrieb, der für einen Hersteller zertifiziert ist, gehört in dessen Fachbetriebssuche. Das sind Verweise mit Nutzen für Kunden.",
        },
        {
          t: "p",
          text: "Googles Spamrichtlinien nennen dagegen exzessiven Linktausch und Partnerseiten, die ausschließlich dem gegenseitigen Verlinken dienen. Fragen Sie sich bei jeder Partnerseite: Würde ich diesen Link auch setzen, wenn es keine Suchmaschinen gäbe?",
        },
      ],
    },
    {
      id: "presse",
      title: "Lokale Presse und Pressemitteilungen",
      answer:
        "Lokale Medien berichten über Neuigkeiten mit Bezug zum Ort: Eröffnungen, Jubiläen, Ausbildung, Engagement, neue Arbeitsplätze. Ob und wie die Redaktion verlinkt, entscheidet sie selbst.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Gute Anlässe:** Eröffnung, Umzug, Jubiläum, neue Leistung mit Nutzen für den Ort, Auszeichnung, Ausbildungsplätze, gemeinnützige Aktion, Expertenmeinung zu einem lokalen Thema.",
            "**Schwache Anlässe:** reine Werbung, allgemeine Branchennachrichten ohne Ortsbezug, Themen, die schon Wochen alt sind.",
            "**Form:** Ort und Datum, eine klare Überschrift, das Wichtigste in zwei Sätzen, ein Zitat, ein Absatz über Ihren Betrieb, ein Ansprechpartner.",
          ],
        },
        {
          t: "note",
          label: "Keine Keyword-Links in Pressemitteilungen",
          text: "Google nennt optimierte Ankertexte in Pressemitteilungen, die auf anderen Websites verbreitet werden, als Beispiel für Linkspam. Nennen Sie Ihren Firmennamen und Ihre Website-Adresse. Links über bezahlte Verteilerdienste sind keine redaktionellen Links. Mehr zur Pressearbeit im Artikel [Lokale PR und Pressearbeit](/blog/lokale-pr-pressearbeit).",
        },
      ],
    },
    {
      id: "erwaehnungen",
      title: "Erwähnungen ohne Link finden",
      answer:
        "Oft wird Ihr Betrieb schon erwähnt, nur ohne Link: in einem Vereinsbericht, einem Stadtblog oder einem Veranstaltungskalender. Eine freundliche Nachricht genügt häufig, um einen Link zu ergänzen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Suchen", text: "Suchen Sie bei Google nach Ihrem Firmennamen in Anführungszeichen und schließen Sie Ihre eigene Website aus, etwa mit „-site:ihre-domain.de“." },
            { title: "Benachrichtigung einrichten", text: "Eine Benachrichtigung für Ihren Firmennamen, zum Beispiel über Google Alerts, meldet neue Erwähnungen." },
            { title: "Prüfen", text: "Steht ein Link? Stimmen Name, Adresse und Telefonnummer? Notieren Sie Seite, Ansprechpartner und Datum." },
            { title: "Freundlich fragen", text: "Bedanken Sie sich für die Erwähnung und bitten Sie um einen Link oder eine Korrektur. Bieten Sie nichts dafür an." },
          ],
        },
        { t: "h3", text: "Vorlage für die Nachricht" },
        {
          t: "p",
          text: "„Guten Tag Frau Muster, vielen Dank, dass Sie in Ihrem Bericht über das Sommerfest unseren Betrieb erwähnt haben. Damit Leserinnen und Leser uns leichter finden, würden wir uns über einen Link auf unsere Website freuen: [Adresse]. Mit freundlichen Grüßen, [Name], [Betrieb], [Telefon]“",
        },
        {
          t: "p",
          text: "Nicht jede Anfrage wird beantwortet. Bleiben Sie höflich und fragen Sie höchstens einmal nach.",
        },
      ],
    },
    {
      id: "inhalte",
      title: "Inhalte, auf die andere gern verweisen",
      answer:
        "Websites verlinken Inhalte, die ihren eigenen Lesern helfen. Für lokale Betriebe sind das vor allem praktische Informationen mit Ortsbezug, die Sie aus Ihrer täglichen Arbeit kennen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Praktische Ortsinformation:** Anfahrt und Parken bei Großveranstaltungen, barrierefreie Zugänge, saisonale Hinweise.",
            "**Fachwissen mit Ortsbezug:** Was beim Hausbau in Ihrer Gemeinde zu beachten ist, welche Fördermittel Ihre Region anbietet, mit Verweis auf die offizielle Stelle.",
            "**Veranstaltungen:** Tag der offenen Tür, Workshops, Vorträge. Melden Sie sie in den Veranstaltungskalendern von Stadt und Lokalmedien.",
            "**Eigene Erhebungen:** Wenn Sie Daten aus Ihrem Betrieb sauber auswerten, etwa saisonale Nachfrage, kann das für lokale Medien interessant sein. Nennen Sie Methode und Zeitraum.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie solche Inhalte planen, zeigt der Artikel [Local Content Marketing](/blog/local-content-marketing). Veranstaltungen behandelt der Artikel [Lokales Event-Marketing](/blog/lokale-events-marketing).",
        },
      ],
    },
    {
      id: "ablauf",
      title: "Ein fester Ablauf für lokale Links",
      answer:
        "Lokaler Linkaufbau ist Beziehungsarbeit. Ein kleiner, regelmäßiger Ablauf mit einer Liste der Kontakte bringt mehr als eine einmalige Aktion.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Liste anlegen", text: "Alle Organisationen, mit denen Sie verbunden sind, mit Website, Ansprechpartner und Status des Eintrags." },
            { title: "Bestehende Einträge zuerst", text: "Kammer, Verband, Hersteller, Partner: Einträge prüfen, Link ergänzen, Daten korrigieren." },
            { title: "Monatlich ein Anlass", text: "Eine Neuigkeit, eine Veranstaltung oder ein hilfreicher Inhalt pro Monat, den Sie Presse und Partnern mitteilen können." },
            { title: "Erwähnungen prüfen", text: "Neue Erwähnungen aus den Benachrichtigungen durchgehen und bei Bedarf nachfragen." },
            { title: "Festhalten", text: "Neue Links, Erwähnungen und daraus entstandene Anfragen in der Liste notieren." },
          ],
        },
        {
          t: "p",
          text: "Eine Schritt-für-Schritt-Vorlage mit Zeitplan bietet der Artikel [Local Link Building Blueprint](/blog/local-link-building-blueprint).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele lokale Backlinks brauche ich?",
      a: "Eine Zahl nennt Google nicht. Google schreibt nur, dass die Zahl der Websites, die auf Ihr Unternehmen verweisen, zur Bekanntheit beiträgt. Wichtiger als eine Zielzahl sind echte Verbindungen aus Ihrer Region und Branche.",
    },
    {
      q: "Darf ich Links kaufen?",
      a: "Nicht, um das Ranking zu verbessern. Google wertet Geld, Waren oder Leistungen gegen Links als Linkspam. Bezahlte Werbe- oder Sponsoringlinks sind erlaubt, wenn sie mit „sponsored“ oder „nofollow“ gekennzeichnet sind.",
    },
    {
      q: "Lohnt sich Vereinssponsoring für Local SEO?",
      a: "Als Werbung und für Ihr Ansehen im Ort oft ja. Als Rankinghilfe nicht, denn ein bezahlter Sponsorenlink sollte laut Google gekennzeichnet sein. Entscheiden Sie nach der Sichtbarkeit bei Mitgliedern und Besuchern.",
    },
    {
      q: "Sind nofollow-Links wertlos?",
      a: "Nein. Google schreibt, dass es so gekennzeichneten Links in der Regel nicht folgt. Menschen klicken sie trotzdem. Ein Eintrag bei Kammer oder Tourismusverband bringt Besucher und bestätigt Ihre Firmendaten, unabhängig vom Attribut.",
    },
    {
      q: "Sind Gastbeiträge erlaubt?",
      a: "Ja, wenn sie für die Leser der fremden Website geschrieben sind. Google nennt Gastbeiträge mit optimierten Ankertexten als Beispiel für Linkspam. Nennen Sie Ihren Betrieb in der Autorenzeile, ohne Keyword-Links im Text.",
    },
    {
      q: "Wie lange dauert es, bis Links wirken?",
      a: "Google nennt keine Frist. Ein neuer Link muss zuerst gefunden werden, und Bekanntheit entsteht über längere Zeit. Messen Sie zusätzlich, ob über den Link Besucher und Anfragen kommen.",
    },
  ],
  sources: [
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche (Link-Spam)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Ausgehende Links für Google eingrenzen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=de" },
    { title: "Startleitfaden zur Suchmaschinenoptimierung (SEO)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    { title: "Benötigst du einen Suchmaschinenoptimierer (SEO)?", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=de" },
  ],
  related: [
    { slug: "local-link-building-blueprint", title: "Local Link Building Blueprint" },
    { slug: "lokale-pr-pressearbeit", title: "Lokale PR und Pressearbeit" },
    { slug: "citation-strategie-verzeichnisse", title: "Citation-Strategie für Verzeichnisse" },
    { slug: "local-content-marketing", title: "Local Content Marketing" },
  ],
  cta: {
    title: "Wo steht Ihr Betrieb bei Verweisen aus der Region?",
    text: "Wir sehen uns Ihr Google-Profil, Ihre Website und Ihre wichtigsten Einträge an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, mit denen Sie anfangen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
