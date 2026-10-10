import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-case-study-baecker",
  lang: "de",
  seoTitle: "Bäckerei-Profil bei Google prüfen: Schritt für Schritt",
  seoDescription:
    "Profil-Check für Bäckereien in sechs Schritten: Name, Kategorien, Fotos, Öffnungszeiten, Leistungen und Bewertungen prüfen, mit den Regeln aus Googles Hilfe.",
  h1: "Bäckerei-Profil prüfen: der Check in sechs Schritten",
  kicker: "Methode",
  lead:
    "Für Inhaber und Betriebsleitende von Bäckereien mit Laden, die bei Suchen wie „Bäckerei in der Nähe“ im Kartenblock von Google erscheinen wollen. Sie erhalten einen Prüfplan für Ihr Unternehmensprofil, Schritt für Schritt, mit den Regeln, die Google dafür nennt.",
  answer:
    "Ein Bäckerei-Profil bei Google prüfen Sie in sechs Schritten: Bestand und Name, Kategorien, Fotos, Öffnungszeiten mit Sondertagen, Leistungen mit Beschreibung und Bewertungen. Google sortiert nach **Relevanz, Entfernung und Bekanntheit**. Ihr Profil wirkt vor allem auf die Relevanz, Bewertungen auf die Bekanntheit. Ein besseres Ranking lässt sich laut Google nicht kaufen.",
  takeaways: [
    "Google sagt, Betriebe mit vollständigen und genauen Angaben erscheinen eher in lokalen Ergebnissen. Daran misst sich jeder Prüfpunkt.",
    "Name, Kategorien und Leistungen beschreiben nur, was Ihr Betrieb tatsächlich ist. Angebote, Ortsangaben und Slogans gehören nicht in den Namen.",
    "Feiertage und Betriebsurlaub tragen Sie als Sondertage ein, rechtzeitig vor dem Termin.",
    "Fotos zeigen Fassade, Auslage und Sortiment so, wie Kunden sie erleben. Bearbeiten Sie wenig und verwenden Sie keine Bilder aus Bilddatenbanken.",
    "Bewertungen entstehen aus echten Erfahrungen. Bitten Sie alle Kunden gleich, ohne Anreiz, und antworten Sie sachlich.",
  ],
  publishedAt: "2026-02-02",
  updatedAt: "2026-10-10",
  readingTime: 10,
  sections: [
    {
      id: "ueberblick",
      title: "Der Profil-Check im Überblick",
      answer:
        "Der Check hat sechs Prüfpunkte. Die Tabelle zeigt, was Sie prüfen und woran Sie einen guten Stand erkennen.",
      blocks: [
        {
          t: "p",
          text: "Google sortiert lokale Ergebnisse nach **Relevanz** (passt der Eintrag zur Suche), **Entfernung** (wie weit ist der Betrieb vom Suchenden entfernt) und **Bekanntheit** (wie bekannt ist der Betrieb, unter anderem über Bewertungen und Links von anderen Websites). Die Entfernung können Sie nicht verschieben. Sie können nur korrekt angeben, wo Ihr Betrieb liegt. Den größeren Rahmen zeigt [Local SEO für Bäckereien](/blog/local-seo-baeckerei). Hier geht es nur um den Profil-Check.",
        },
        {
          t: "table",
          caption: "Die sechs Prüfpunkte",
          head: ["Prüfpunkt", "Was Sie prüfen", "Guter Stand"],
          rows: [
            ["1. Bestand und Name", "Gibt es mehrere Einträge für denselben Laden? Stimmt der Name?", "Ein Eintrag je Standort, Name wie am Schild"],
            ["2. Kategorien", "Beschreibt die Hauptkategorie Ihr Hauptgeschäft?", "Passende Hauptkategorie, wenige Zusatzkategorien"],
            ["3. Fotos", "Zeigen die Bilder Fassade, Auslage und Sortiment?", "Scharfe, echte und aktuelle Fotos"],
            ["4. Öffnungszeiten", "Stimmen die regulären Zeiten und die Sondertage?", "Feiertage und Betriebsurlaub eingetragen"],
            ["5. Leistungen und Beschreibung", "Sind Ihre Sortimentsbereiche einzeln eingetragen?", "Leistungen einzeln, Beschreibung sachlich"],
            ["6. Bewertungen", "Kommen laufend Bewertungen dazu, und antworten Sie darauf?", "Echte Bewertungen ohne Anreiz, sachliche Antworten"],
          ],
        },
      ],
    },
    {
      id: "schritt-1-bestand-name",
      title: "Schritt 1: Bestand, Name und Adresse prüfen",
      answer:
        "Prüfen Sie zuerst, welche Einträge es schon gibt. Der Name muss dem Namen am Geschäft entsprechen, ohne Zusätze.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Vorhandene Einträge suchen",
              text: "Suchen Sie Ihren Betrieb bei Google Maps, auch unter Ihrer Adresse, und notieren Sie jeden Eintrag. Google sieht pro Standort nur eine Seite vor. Entscheiden Sie, welcher Eintrag bleibt, und sorgen Sie dafür, dass der andere verschwindet.",
            },
            {
              title: "Bestätigung prüfen",
              text: "Die Bestätigung zeigt Google, dass Sie den Betrieb vertreten dürfen. Prüfen Sie, ob Sie das Profil bestätigt verwalten.",
            },
            {
              title: "Name exakt übernehmen",
              text: "Der Name entspricht dem Schild, dem Briefpapier und der Website. Google verbietet Marketing-Slogans, Ladenkennungen, Öffnungszeiten, Telefonnummern, URLs sowie Produkt- oder Standortangaben im Namen. Ganz großgeschriebene Wörter sind ebenfalls unzulässig.",
            },
            {
              title: "Adresse angeben",
              text: "Hat Ihr Laden Kundenverkehr, tragen Sie die echte Adresse ein. Ein Betrieb ohne Ladengeschäft, der Kunden vor Ort aufsucht, darf dagegen ein Profil mit Einzugsgebiet anlegen und blendet die Adresse aus. Wie Sie Ihre Firmendaten angleichen, zeigt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
            },
          ],
        },
        {
          t: "p",
          text: "Haben Sie mehrere Filialen mit eigener Adresse, bekommt jede ein eigenes Profil. Der Name muss im selben Land an allen Standorten gleich sein.",
        },
        {
          t: "note",
          label: "Achtung",
          text: "Ein Zusatz wie „Bäckerei Muster, Filiale Bahnhof“ ist nach Googles Richtlinien nicht zulässig. Den Standort geben Sie über die Adresse an, nicht im Namen.",
        },
      ],
    },
    {
      id: "schritt-2-kategorien",
      title: "Schritt 2: Kategorien festlegen",
      answer:
        "Die Hauptkategorie soll so genau wie möglich beschreiben, was Ihr Betrieb ist. Zusätzliche Kategorien wählen Sie zurückhaltend, nur für Bereiche, die Sie tatsächlich führen.",
      blocks: [
        {
          t: "p",
          text: "Google nennt die Kategorien ausdrücklich als Faktor für das Ranking: „Die von Ihnen ausgewählten Kategorien wirken sich auf Ihr Ranking […] aus.“ Eigene Kategorien können Sie nicht anlegen. Sie wählen aus Googles Liste, und die Wahl sollte Ihr Hauptgeschäft treffen.",
        },
        {
          t: "ul",
          items: [
            "**Hauptkategorie:** die Kategorie, die Ihr Hauptgeschäft am genauesten beschreibt. Google nennt „Nagelstudio“ statt „Studio“ als Beispiel für Genauigkeit.",
            "**Zusatzkategorien:** einige wenige, für Bereiche mit echtem Angebot. Google empfiehlt keine Kategorie für jedes einzelne Produkt.",
            "**Keine Produkte als Kategorie:** Kategorien beschreiben den Betrieb insgesamt. Sortimente wie Brot oder Torten tragen Sie als Leistungen ein.",
          ],
        },
        {
          t: "table",
          caption: "Kategorien prüfen",
          head: ["Frage", "Empfehlung"],
          rows: [
            ["Ist Bäckerei das, was Ihr Hauptgeschäft am besten beschreibt?", "Als Hauptkategorie wählen, sofern sie in der Liste steht"],
            ["Haben Sie einen Bereich mit eigenem Angebot, etwa eine Konditorei?", "Als Zusatzkategorie nur, wenn er zum Betrieb gehört und Sie ihn führen"],
            ["Bieten Sie einzelne Produkte wie Torten oder Brot an?", "Nicht als Kategorie, sondern als Leistung eintragen"],
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Google zeigt als Beispiel ein Lebensmittelgeschäft mit der Hauptkategorie Lebensmittelgeschäft und den Zusatzkategorien Bäckerei und Feinkost. Die Kategorien sollten standortübergreifend gleich sein, wenn dort dieselbe Leistung angeboten wird.",
        },
      ],
    },
    {
      id: "schritt-3-fotos",
      title: "Schritt 3: Fotos auswählen",
      answer:
        "Fotos zeigen Kunden, wie Ihr Laden aussieht. Google erwartet scharfe, gut ausgeleuchtete Bilder, die realistisch wirken und nur wenig bearbeitet sind.",
      blocks: [
        {
          t: "p",
          text: "Google nennt ein Logo, ein Titelbild und unternehmensspezifische Fotos. Die Einleitung der Hilfe erwähnt Außenansicht, Produkte und Dienstleistungen. Für eine Bäckerei heißt das: Fassade mit Schild, die Auslage mit Ihren Backwaren und das Sortiment im Verkauf. Wie Sie die Bilder für das Profil aufbereiten, zeigt der Artikel [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
        {
          t: "steps",
          items: [
            { title: "Logo und Titelbild", text: "Ein Logo, das Kunden auf Google wiedererkennen, und ein Titelbild, das zu Ihrem Betrieb passt." },
            { title: "Außenansicht", text: "Die Fassade mit Schild, bei Tageslicht, damit Kunden den Laden finden." },
            { title: "Auslage und Sortiment", text: "Brot, Brötchen und Gebäck so, wie Kunden sie im Laden sehen." },
            { title: "Innen und Team", text: "Der Verkaufsraum und Ihr Team, wenn die Personen vorher zugestimmt haben. Fragen Sie Mitarbeitende, ob sie auf Fotos zu sehen sein möchten." },
            { title: "Veraltetes ersetzen", text: "Fotos von einem früheren Umbau oder aus einem alten Sortiment tauschen Sie aus." },
          ],
        },
        {
          t: "ul",
          items: [
            "Format JPG oder PNG, Dateigröße zwischen 10 KB und 5 MB.",
            "Empfohlen sind 720 × 720 Pixel, das Minimum liegt bei 250 × 250 Pixel.",
            "Bearbeitung und Filter sparsam einsetzen. Google erwartet eine realistische Darstellung.",
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Google nennt unternehmensspezifische Fotos ausdrücklich. Bilder aus einer Bilddatenbank passen nicht zu diesem Zweck. Gemeldete Fotos, die gegen die Richtlinien verstoßen, erhalten den Status „Nicht genehmigt“.",
        },
      ],
    },
    {
      id: "schritt-4-oeffnungszeiten",
      title: "Schritt 4: Öffnungszeiten und Sondertage pflegen",
      answer:
        "Die regulären Öffnungszeiten reichen nicht. Feiertage, Betriebsurlaub und Ausnahmetage tragen Sie als Sonderöffnungszeiten für das jeweilige Datum ein.",
      blocks: [
        {
          t: "p",
          text: "Google sagt, Betriebe mit vollständigen und genauen Angaben erscheinen eher in lokalen Ergebnissen. Öffnungszeiten gehören zu diesen Angaben. Halten Sie die Sondertage deshalb ebenso aktuell wie die regulären Zeiten.",
        },
        {
          t: "steps",
          items: [
            { title: "Reguläre Zeiten prüfen", text: "Tragen Sie jeden Wochentag ein, an dem Sie öffnen." },
            { title: "Feiertage bestätigen", text: "Google empfiehlt, auch bei offiziellen Feiertagen die Zeiten zu bestätigen, selbst wenn sie den regulären entsprechen." },
            { title: "Betriebsurlaub eintragen", text: "Bei Schließung an einzelnen Tagen setzen Sie den Sondertag auf geschlossen. Bei sieben Tagen oder mehr, oder wenn die Dauer unbekannt ist, empfiehlt Google, das Unternehmen als vorübergehend geschlossen zu markieren." },
            { title: "Im Profil kontrollieren", text: "Google zeigt Sondertage nur an den festgelegten Tagen. Prüfen Sie nach dem Speichern, dass der Sondertag im Profil erscheint." },
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Ein Sondertag gilt nur für das Datum, das Sie festlegen. Tragen Sie Feiertage und Betriebsurlaub deshalb rechtzeitig vor dem Termin ein, nicht erst am Tag selbst.",
        },
      ],
    },
    {
      id: "schritt-5-leistungen-beschreibung",
      title: "Schritt 5: Leistungen und Beschreibung",
      answer:
        "Leistungen tragen Sie einzeln ein. Die Beschreibung bleibt sachlich, ohne Preise, Aktionen und Links.",
      blocks: [
        {
          t: "p",
          text: "Kategorien beschreiben den Betrieb insgesamt, einzelne Produkte und Dienstleistungen gehören nicht hinein. Google bietet dafür eigene Funktionen im Profil, etwa das Leistungsverzeichnis.",
        },
        {
          t: "ul",
          items: [
            "Eine Leistung je Sortimentsbereich, etwa Brot, Brötchen, Feingebäck oder Torten auf Vorbestellung, soweit Sie diese führen.",
            "Kurze, konkrete Namen. Keine Werbesprache.",
            "Keine Leistung, die Sie nicht anbieten. Die Angaben müssen zu Ihrem Betrieb passen.",
          ],
        },
        {
          t: "p",
          text: "Die Beschreibung darf Leistungen, Produkte, Mission und Geschichte des Betriebs nennen. Nicht erlaubt sind Links jeder Art, Werbung und Angebote mit Preisen oder Rabatten. Minderwertige, irrelevante oder ablenkende Inhalte, etwa Tippfehler oder Zeichenspielereien, sind ebenfalls nicht zulässig.",
        },
        {
          t: "table",
          caption: "Beschreibung: was hinein gehört",
          head: ["Gehört hinein", "Gehört nicht hinein"],
          rows: [
            ["Ihr Sortiment und Ihre Herstellung", "Links zu Website, Bestellseite oder Social Media"],
            ["Die Geschichte Ihres Betriebs und Ihre Handwerkstradition", "Preise, Rabatte und Wochenangebote"],
          ],
        },
        {
          t: "note",
          label: "Achtung",
          text: "Ihre Website und Ihr Profil sollten dieselben Leistungen nennen. Widersprüche machen es schwerer, die Angaben eindeutig zuzuordnen.",
        },
      ],
    },
    {
      id: "schritt-6-bewertungen",
      title: "Schritt 6: Bewertungen ohne Druck",
      answer:
        "Bewertungen entstehen aus echten Erfahrungen. Bitten Sie alle Kunden gleich, ohne Anreiz und ohne Auswahl, und antworten Sie sachlich auf jede Bewertung.",
      blocks: [
        {
          t: "p",
          text: "Google nennt mehr Bewertungen und positive Bewertungen als Faktor für die Bekanntheit im lokalen Ranking. Hilfreiche Antworten des Betriebs hebt Google ebenfalls hervor. Die Regeln sind streng: Bewertungen, die für Geld oder andere Gegenleistungen abgegeben wurden, werden entfernt. Unternehmen dürfen negative Bewertungen weder unterdrücken noch gezielt positive Kunden zur Bewertung auffordern. Auch Vorgaben an Mitarbeitende, eine feste Zahl an Bewertungen zu sammeln, sind nicht erlaubt.",
        },
        {
          t: "table",
          caption: "Bitten um Bewertungen: erlaubt und nicht erlaubt",
          head: ["Erlaubt", "Nicht erlaubt"],
          rows: [
            ["Alle Kunden auf die Möglichkeit hinweisen, etwa mit einem Link auf Kassenbon oder Schild", "Rabatt, Gebäck oder eine andere Gegenleistung für eine Bewertung"],
            ["Ein QR-Code zum Bewerten, als freies Angebot ohne Gegenleistung", "Nur zufriedene Kunden gezielt ansprechen und die übrigen auslassen"],
            ["Sachliche Antworten auf alle Bewertungen, auch auf kritische", "Negative Bewertungen unterdrücken oder löschen lassen"],
            ["Bitten, die für echte Erfahrungen stehen", "Bewertungen von Mitarbeitenden, Familie oder aus mehreren Konten"],
          ],
        },
        {
          t: "steps",
          items: [
            { title: "Hinweis festlegen", text: "Ein Schild am Tresen oder ein Hinweis auf dem Kassenbon mit dem Bewertungslink, ohne Druck und ohne Gegenleistung. Den Ablauf im Kundenkontakt beschreibt auch der Artikel [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)." },
            { title: "Antworten im Rhythmus", text: "Antworten Sie innerhalb weniger Tage, sachlich und ohne persönliche Angaben des Kunden." },
            { title: "Auffälligkeiten erkennen", text: "Bewertungen, die gegen die Richtlinien verstoßen, entfernt Google. Prüfen Sie Ihre Bewertungen regelmäßig, damit Sie solche Fälle bemerken." },
          ],
        },
        {
          t: "note",
          label: "Achtung",
          text: "Drängen Sie niemanden zu einer Bewertung. Ein freundlicher Hinweis reicht, und wer nicht bewerten möchte, wird nicht weiter gefragt.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie oft sollte ich den Profil-Check wiederholen?",
      a: "Öffnungszeiten und Sondertage prüfen Sie vor jedem Feiertag und jeder Schließung. Den gesamten Check wiederholen Sie etwa zweimal im Jahr, weil sich Sortiment und Angebote ändern.",
    },
    {
      q: "Darf ich Kunden bitten, eine Bewertung abzugeben?",
      a: "Ja, wenn Sie echte Erfahrungen anregen, ohne Anreiz und ohne Auswahl. Google verbietet Gegenleistungen für Bewertungen und das gezielte Ansprechen nur zufriedener Kunden.",
    },
    {
      q: "Muss ich auf jede Bewertung antworten?",
      a: "Google hebt hilfreiche Antworten als Stärke hervor. Antworten Sie deshalb sachlich auf alle Bewertungen, auch auf kritische, und ohne persönliche Angaben des Kunden.",
    },
    {
      q: "Wir haben mehrere Filialen. Was gilt?",
      a: "Jeder Standort mit eigener Adresse bekommt ein eigenes Profil, und Google sieht pro Standort nur eine Seite vor. Der Name muss im selben Land an allen Standorten gleich sein. Die Kategorien sollten gleich bleiben, wenn dort dieselben Leistungen angeboten werden.",
    },
    {
      q: "Kann ich mir ein besseres lokales Ranking kaufen?",
      a: "Nein. Google schreibt, dass ein besseres lokales Ranking nicht angefragt oder bezahlt werden kann. Ihr Einfluss liegt bei den Angaben im Profil, bei Kategorien, Fotos und Bewertungen.",
    },
  ],
  sources: [
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Fotos zu Ihrem Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6103862?hl=de" },
    { title: "Kategorien für Ihr Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7249669?hl=de" },
    { title: "How to set Special hours", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6303076?hl=de" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren: die praktische Anleitung" },
    { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: So fragen Sie richtig" },
    { slug: "local-seo-baeckerei", title: "Local SEO für Bäckereien: Mehr Kunden durch Google (2026)" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern: messen, verstehen, gezielt handeln" },
  ],
  cta: {
    title: "Wollen Sie den Check abgeben?",
    text: "Wir gehen Ihr Profil nach diesen sechs Punkten durch und nennen Ihnen, was Sie zuerst ändern sollten. Der Check ist kostenlos und unverbindlich. Die Korrekturen können Sie selbst machen oder für 79 € als Google Profile Quick-Fix beauftragen.",
  },
};

export default article;
