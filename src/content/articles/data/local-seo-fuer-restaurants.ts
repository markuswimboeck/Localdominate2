import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-fuer-restaurants",
  lang: "de",
  seoTitle: "Local SEO für Restaurants: mehr Gäste über Google",
  seoDescription:
    "Local SEO für Restaurants, Cafés und Bars: Speisekarte, Öffnungszeiten, Reservierungslinks, Fotos und Bewertungen im Google-Profil richtig pflegen.",
  h1: "Local SEO für Restaurants: So finden Gäste Ihren Tisch",
  kicker: "Gastronomie",
  lead:
    "Für Inhaber von Restaurants, Cafés, Bars und Imbissen in Deutschland, Österreich und der Schweiz, die bei Suchen wie „Italiener in der Nähe“ oder „Frühstück [Ort]“ gefunden werden wollen. Sie erfahren, was im Google-Unternehmensprofil für Gastronomie zählt, wie Speisekarte und Website zusammenspielen und was Sie bei Bewertungen und Allergenen beachten müssen.",
  answer:
    "Local SEO für Restaurants heißt: Ihr Betrieb erscheint, wenn jemand in der Nähe nach einem Lokal sucht. Die Grundlage ist ein vollständiges Google-Unternehmensprofil mit genauer Kategorie, richtigen Öffnungszeiten samt Ruhetagen, einer **Speisekarte als Text**, Reservierungs- oder Bestelllink und echten Fotos. Dazu kommen laufend echte Bewertungen und eine Website, die dieselben Angaben enthält.",
  takeaways: [
    "Google sortiert lokale Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Eine bessere Position lässt sich laut Google nicht kaufen.",
    "Für Gastronomie bietet das Unternehmensprofil eine eigene Speisekarte, Links für Reservierung und Bestellung sowie Attribute wie Sitzplätze im Freien.",
    "Ruhetage, Feiertage und Saisonpausen gehören ins Profil. Saisonbetriebe dürfen sich laut Google in der Nebensaison als vorübergehend geschlossen kennzeichnen.",
    "Eine Speisekarte als Text auf der Website ist auf dem Handy besser lesbar, schneller aktualisiert und für Google und KI-Assistenten leichter auszuwerten als ein PDF.",
    "Rabatte, Gratisgetränke oder Desserts für Bewertungen verbieten Googles Richtlinien. Fragen Sie alle Gäste, nicht nur die zufriedenen.",
    "Allergenangaben sind in der EU Pflicht. Sie gehören auf die Karte, in eine separate Liste oder in eine dokumentierte mündliche Auskunft.",
  ],
  publishedAt: "2026-01-07",
  updatedAt: "2026-10-10",
  readingTime: 12,
  sections: [
    {
      id: "so-finden-gaeste",
      title: "Wie Gäste ein Restaurant auf Google finden",
      answer:
        "Wer „Restaurant in der Nähe“ oder „Pizza [Ort]“ sucht, sieht meist zuerst einen Kartenblock mit wenigen Betrieben. Google wählt sie nach Relevanz, Entfernung und Bekanntheit aus, und die Daten dafür stammen vor allem aus dem Unternehmensprofil.",
      blocks: [
        {
          t: "p",
          text: "Google nennt in seiner Hilfe zum lokalen Ranking drei Faktoren. **Relevanz** beschreibt, wie gut ein Profil zur Suche passt. **Entfernung** misst den Abstand zum Suchenden oder zum gesuchten Ort. **Bekanntheit** steht dafür, wie bekannt ein Betrieb ist, unter anderem über Rezensionen. Google schreibt außerdem, dass Unternehmen mit vollständigen und korrekten Informationen eher in lokalen Ergebnissen erscheinen.",
        },
        {
          t: "p",
          text: "Für Gastronomie heißt das: Die Entfernung können Sie nicht ändern. Die Relevanz bestimmen Sie über Kategorie, Speisekarte, Attribute und Website. Die Bekanntheit wächst mit echten Bewertungen und Erwähnungen in Ihrem Ort. Wie Sie Ihre Position über das ganze Einzugsgebiet messen statt nur am eigenen Handy, zeigt der Leitfaden [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern).",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Ein besseres lokales Ranking kann laut Google nicht eingefordert werden, auch nicht gegen Bezahlung. Anzeigen erscheinen getrennt und gekennzeichnet. Angebote mit „garantiertem Platz 1 in Maps“ versprechen etwas, das Google ausschließt.",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Das Unternehmensprofil für Gastronomie einrichten",
      answer:
        "Name wie auf dem Schild, eine genaue Hauptkategorie und vollständige Kontaktdaten sind die Basis. Zusätze wie Küche, Ort oder Slogan im Namen verbieten Googles Richtlinien.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Name ohne Zusätze",
              text: "„Trattoria Rossi“ statt „Trattoria Rossi Pizza Pasta Altstadt“. Google nennt Slogans, Angaben zu Leistungen oder Produkten und Standortinformationen im Namen ausdrücklich als unzulässig. Bei Verstößen kann das Profil gesperrt werden.",
            },
            {
              title: "Hauptkategorie so genau wie möglich",
              text: "„Italienisches Restaurant“ statt nur „Restaurant“, „Café“ oder „Cocktailbar“ statt „Bar“. Google empfiehlt, so wenige Kategorien wie möglich zu wählen, nach dem Satz „Dieses Unternehmen IST…“ und nicht „Dieses Unternehmen HAT…“. Eine Weinbar mit kleinen Speisen ist eine Weinbar, kein Restaurant.",
            },
            {
              title: "Restaurant im Hotel oder in einem anderen Betrieb",
              text: "Ein Restaurant, Café oder eine Bar in einem Hotel verwendet laut Google nur Kategorien, die den eigenen Betrieb beschreiben. Braucht ein Standort beide Kategorien, sieht Google zwei getrennte Profile vor.",
            },
            {
              title: "Kontakt, Website und Beschreibung",
              text: "Telefonnummer, die tatsächlich abgenommen wird, Website-Link und eine sachliche Beschreibung: Küche, Lage, Besonderheiten wie Mittagstisch oder Terrasse.",
            },
          ],
        },
        {
          t: "p",
          text: "Die Felder im Detail erklärt die Anleitung [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren). Welche Kategorie zu Ihrem Konzept passt, hilft der [Kategorien-Leitfaden](/blog/google-business-kategorien-guide) zu entscheiden.",
        },
      ],
    },
    {
      id: "oeffnungszeiten",
      title: "Öffnungszeiten, Ruhetage und Saison",
      answer:
        "Pflegen Sie reguläre Zeiten mit Ruhetagen, tragen Sie Feiertage und Betriebsurlaub als spezielle Öffnungszeiten ein und kennzeichnen Sie längere Schließungen als vorübergehend geschlossen. Wer vor verschlossener Tür steht, schreibt selten eine gute Bewertung.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Ruhetage** als geschlossene Tage in den regulären Zeiten eintragen, nicht nur auf der Website erwähnen.",
            "**Mittagspause** abbilden, indem Sie für einen Tag zwei Zeitfenster angeben, etwa 11:30 bis 14:30 und 17:30 bis 22:00 Uhr.",
            "**Feiertage, Betriebsurlaub und Sonderveranstaltungen** als spezielle Öffnungszeiten anlegen. Google schreibt, dass die regulären Zeiten davon unberührt bleiben.",
            "**Saisonbetriebe** wie Biergärten, Berghütten oder Strandbars geben laut Google die regulären Zeiten der Saison an und können sich in der Nebensaison als vorübergehend geschlossen kennzeichnen.",
            "**Längere Schließung**, etwa für einen Umbau, ebenfalls als vorübergehend geschlossen markieren statt das Profil zu löschen.",
          ],
        },
        {
          t: "note",
          label: "Küchenschluss",
          text: "Wenn die Küche früher schließt als die Bar, schreiben Sie den Küchenschluss auf die Website und in die Profilbeschreibung. Für Lieferung oder Abholung mit eigenen Zeiten bietet das Profil eine Funktion für weitere Öffnungszeiten an. Mehr dazu im Artikel [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage).",
        },
      ],
    },
    {
      id: "speisekarte",
      title: "Die Speisekarte im Profil und auf der Website",
      answer:
        "Hinterlegen Sie die Speisekarte im Profil über den Menüeditor oder einen Link und stellen Sie sie auf Ihrer Website als Text bereit, nicht nur als PDF oder Foto. So können Gäste, Google und KI-Assistenten Gerichte, Preise und Besonderheiten lesen.",
      blocks: [
        { t: "h3", text: "Im Unternehmensprofil" },
        {
          t: "p",
          text: "Laut Google steht der Menüeditor Betrieben der Lebensmittel- und Gastronomiebranche zur Verfügung. Sie haben drei Wege:",
        },
        {
          t: "table",
          caption: "Speisekarte im Google-Unternehmensprofil",
          head: ["Weg", "So funktioniert es", "Worauf Sie achten"],
          rows: [
            ["Menüeditor", "Abschnitte wie Vorspeisen und Hauptgerichte anlegen, je Gericht Name, Beschreibung und Preis", "Am genauesten, aber jede Änderung auch hier nachtragen"],
            ["Foto oder PDF hochladen", "Eine KI-Funktion von Google erstellt daraus eine Speisekarte, Google kennzeichnet sie als experimentell", "Die Karte muss auf eine Seite passen, Ergebnis immer prüfen"],
            ["Link zur Speisekarte", "Unter den Kontaktangaben eine URL hinterlegen", "Der Link sollte auf eine Seite mit Text führen"],
          ],
        },
        {
          t: "p",
          text: "Google weist darauf hin, dass Änderungen 24 bis 48 Stunden brauchen können, bis sie in Maps und in der Suche erscheinen. Gibt es mehrere Quellen, wählen Sie auf dem Tab „Gesamte Speisekarte“ die bevorzugte. Von der Website falsch übernommene Gerichte können Sie bearbeiten oder entfernen.",
        },
        { t: "h3", text: "Auf der Website" },
        {
          t: "ul",
          items: [
            "**Text statt PDF.** Eine HTML-Seite lädt auf dem Handy schneller, ist ohne Zoomen lesbar und in Minuten geändert. Ein PDF mit Stand vom letzten Jahr kostet Vertrauen.",
            "**Gerichte so benennen, wie Gäste suchen.** „Hausgemachte Lasagne“ sagt mehr als „Klassiker Nr. 12“. Welche Begriffe Ihre Gäste tatsächlich verwenden, finden Sie mit der Methode aus [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
            "**Merkmale nennen**: vegetarisch, vegan, glutenfrei auf Nachfrage, regionale Herkunft. Nur was stimmt und was die Küche verlässlich liefern kann.",
            "**Preise angeben.** Gäste vergleichen vor dem Besuch, und ein Preis schützt vor Enttäuschung an der Kasse.",
            "**Strukturierte Daten.** Google führt für Restaurants im LocalBusiness-Markup die Eigenschaften servesCuisine (Art der Küche), menu (URL der Speisekarte) und priceRange als empfohlen auf. Wie das aussieht, zeigt der Artikel [Schema Markup für Local SEO](/blog/schema-markup-local-seo).",
          ],
        },
      ],
    },
    {
      id: "reservierung-bestellung",
      title: "Reservierung, Bestellung und Lieferplattformen",
      answer:
        "Im Profil können Sie Links für Tischreservierung und Essensbestellung hinterlegen und einen davon als bevorzugt markieren. Ob eigenes System oder Plattform: Wichtig ist, dass jeder Link funktioniert und zum richtigen Standort führt.",
      blocks: [
        {
          t: "p",
          text: "Google unterscheidet Informationslinks, etwa zur Speisekarte, und Aktionslinks wie Tischreservierung oder Essensbestellung. Pro Kategorie sind bis zu zehn Links möglich. Bei mehreren Links legen Sie einen bevorzugten fest, der oben erscheint. Daneben zeigt Google Links ausgewählter Drittanbieter, die der Anbieter selbst pflegt oder die aus Googles Daten stammen.",
        },
        {
          t: "steps",
          items: [
            { title: "Links prüfen", text: "Suchen Sie Ihr Restaurant in Google und Maps und tippen Sie jeden Reservierungs- und Bestellbutton an. Führt er zu Ihrem Betrieb, zum richtigen Standort, zu aktuellen Zeiten?" },
            { title: "Bevorzugten Link wählen", text: "Im Profil unter „Profil bearbeiten“ den Transaktionstyp wählen und den Link markieren, über den Sie Reservierungen oder Bestellungen am liebsten erhalten, etwa Ihr eigenes System." },
            { title: "Veraltete Anbieter entfernen", text: "Arbeiten Sie mit einem Anbieter nicht mehr zusammen, entfernen Sie ihn über „Anbieter entfernen“. Laut Google müssen Dienstleister solche Links innerhalb von fünf Tagen nach dem Antrag löschen, sonst können Sie das melden." },
            { title: "Bestellungen bewusst steuern", text: "Wenn Sie „Bestellungen über mein Profil annehmen“ deaktivieren, blendet Google alle Lieferoptionen und Links aus, auch die von Drittanbietern. Tun Sie das nur, wenn Sie über Google tatsächlich keine Bestellungen wollen." },
          ],
        },
        {
          t: "p",
          text: "Lieferplattformen bringen Reichweite in ihrer eigenen App und kosten Gebühren nach den jeweiligen Vertragsbedingungen. Rechnen Sie mit Ihren eigenen Zahlen, ob sich eine Plattform, ein eigener Bestellweg oder beides lohnt. Für Local SEO zählt vor allem, dass Name, Adresse, Telefonnummer und Zeiten auf jeder Plattform mit dem Profil übereinstimmen.",
        },
        {
          t: "note",
          label: "Lieferküchen ohne Gastraum",
          text: "Reine Lieferrestaurants sind laut Google zulässig, wenn sie eigene Verpackungen und eine eigene Website haben. Sie geben ein Einzugsgebiet an und blenden die Adresse aus. Mehrere virtuelle Restaurants an einem Standort sind erlaubt.",
        },
      ],
    },
    {
      id: "fotos-attribute",
      title: "Fotos und Attribute",
      answer:
        "Zeigen Sie mit echten Fotos, was Gäste erwartet: Gerichte, Getränke, Gastraum, Terrasse, Eingang. Attribute wie Sitzplätze im Freien oder ein rollstuhlgerechter Eingang beantworten Fragen, bevor jemand anruft.",
      blocks: [
        { t: "h3", text: "Fotos" },
        {
          t: "ul",
          items: [
            "**Technik nach Google:** JPG oder PNG, 10 KB bis 5 MB, empfohlen 720 × 720 Pixel, mindestens 250 × 250 Pixel.",
            "**Speisen und Getränke:** Google empfiehlt mindestens drei Fotos, mit den beliebtesten Gerichten und gleichmäßiger Ausleuchtung.",
            "**Realistisch bleiben:** Google rät von starker Bearbeitung, vielen Filtern und KI-Werkzeugen ab. Es kommt auf eine realistische Darstellung an.",
            "**Außenansicht und Eingang:** Damit Gäste Sie von der Straße aus wiedererkennen, auch abends.",
            "**Gastraum, Terrasse, Bar, Team:** Was die Stimmung zeigt und was ein Gast vor einer Reservierung für eine Gruppe wissen möchte.",
            "**Saisonal ergänzen:** Neue Karte, Spargelzeit, Wintergarten. Ein Foto vom letzten Sommer im Dezember irritiert.",
          ],
        },
        {
          t: "p",
          text: "Mehr zu Motiven und Ablauf steht im Artikel [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
        { t: "h3", text: "Attribute" },
        {
          t: "p",
          text: "Attribute zeigen Details wie Sitzplätze im Freien oder WLAN in Suche und Maps. Laut Google helfen sie auch, bei passenden Suchen zu erscheinen. Einige setzen Sie selbst per Ja oder Nein unter „Profil bearbeiten“ und „Mehr“, andere füllt Google aus Angaben von Besuchern. Welche Attribute verfügbar sind, hängt von Land und Kategorie ab.",
        },
        {
          t: "note",
          label: "Barrierefreiheit ehrlich angeben",
          text: "Google gibt konkrete Maßstäbe vor: Ein Eingang gilt als rollstuhlgerecht, wenn er einen Meter breit ist und keine Stufen hat. Bei Sitzplätzen spricht ein Gastraum mit Stufen oder nur hohen Stehtischen für Nein. Eine falsche Angabe trifft genau die Gäste, die sich darauf verlassen. Weitere Optionen erklärt der Artikel [Attribute richtig nutzen](/blog/gbp-attribute-richtig-nutzen).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bewertungen auf Google und anderen Portalen",
      answer:
        "Bitten Sie alle Gäste an einer festen Stelle um eine Rezension, etwa mit einem QR-Code auf der Rechnung, und antworten Sie sachlich. Gratisgetränke, Rabatte oder Desserts als Gegenleistung verbieten Googles Richtlinien.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt, dass mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern können. Für Gäste zählt, was drinsteht: ob das Essen warm kam, ob der Service freundlich war, ob auf Kritik geantwortet wird.",
        },
        {
          t: "table",
          caption: "Bewertungen in der Gastronomie nach Googles Richtlinien",
          head: ["Erlaubt", "Nicht erlaubt"],
          rows: [
            ["QR-Code oder Link auf Rechnung, Tischaufsteller oder Bestellbestätigung", "Ein Getränk, Dessert oder Rabatt für eine Rezension anbieten"],
            ["Alle Gäste beim Bezahlen auf den Link hinweisen", "Nur Stammgäste oder zufriedene Gäste gezielt fragen"],
            ["Auf positive und kritische Rezensionen antworten", "Rezensionen von Mitarbeitenden, Inhabern oder Familie"],
            ["Das Team bitten, den Link zu nennen", "Dem Team eine Zahl an Rezensionen pro Schicht vorgeben"],
          ],
        },
        {
          t: "p",
          text: "Antworten Sie kurz und konkret, ohne Namen von Begleitpersonen oder Details zur Rechnung. Bei Kritik am Essen oder an der Wartezeit danken Sie, ordnen sachlich ein und bieten einen direkten Kontakt an. Den vollständigen Ablauf mit Bewertungslink und Formulierungen beschreibt [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen), Vorlagen finden Sie unter [Bewertungs-Antworten](/blog/bewertungs-antworten-vorlagen).",
        },
        { t: "h3", text: "Tripadvisor und andere Portale" },
        {
          t: "p",
          text: "Viele Gäste, gerade Reisende, lesen auch auf Tripadvisor, in Reservierungs- und Lieferplattformen oder in regionalen Restaurantführern. Prüfen Sie dort, ob Ihr Betrieb eingetragen ist und ob Name, Adresse, Telefonnummer und Öffnungszeiten stimmen. Ob und wie Sie als Inhaber antworten oder Angaben ändern können, regelt jede Plattform selbst. Für die Bitte um Rezensionen gilt überall derselbe Grundsatz: alle fragen, nichts dafür geben.",
        },
      ],
    },
    {
      id: "website-allergene",
      title: "Website, Firmendaten und Allergenangaben",
      answer:
        "Die Website ergänzt das Profil um alles, was dort keinen Platz hat: vollständige Karte, Mittagstisch, Anfahrt, Gruppenangebote und Reservierung. Name, Adresse, Telefonnummer und Zeiten müssen mit dem Profil übereinstimmen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Auf der Startseite sichtbar:** Küche, Ort, Öffnungszeiten, Telefonnummer und ein Reservierungsbutton, ohne Scrollen auf dem Handy.",
            "**Eigene Seiten für eigene Anlässe:** Mittagstisch, Brunch, Feiern und Gruppen, Catering. Jede beantwortet eine andere Suche.",
            "**Reservierung ohne Umweg:** Ein Formular oder ein eingebundenes Reservierungssystem, das auf dem Handy funktioniert. Zusätzlich die Telefonnummer als anklickbaren Link.",
            "**Einheitliche Firmendaten:** Dieselbe Schreibweise von Name, Adresse und Telefonnummer auf Website, Impressum, Profil, Plattformen und Verzeichnissen. Wie Sie Abweichungen finden, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
            "**Grundlagen ohne Budget:** Seitentitel, Ladezeit und Search Console richten Sie mit der Anleitung [Kostenloses SEO](/blog/kostenloses-seo-guide) selbst ein.",
          ],
        },
        {
          t: "note",
          label: "Allergene sind Pflicht",
          text: "Die EU-Lebensmittelinformationsverordnung (LMIV) verlangt, dass 14 Hauptallergene ausgewiesen werden, wenn sie in Speisen enthalten sind, auch in der Gastronomie. Möglich sind Angaben auf der Karte, etwa mit Fußnoten, eine separate Allergenkarte mit Hinweis im Lokal oder eine mündliche Auskunft, für die eine schriftliche Dokumentation vorliegen muss. Wenn Sie Ihre Karte online zeigen oder Bestellungen annehmen, klären Sie mit Ihrer IHK, der WKO oder der zuständigen Lebensmittelkontrolle, wie die Angaben dort bereitzustellen sind. Das ist kein Rechtsrat.",
        },
      ],
    },
    {
      id: "veranstaltungen",
      title: "Veranstaltungen und lokale Erwähnungen",
      answer:
        "Weinabende, Live-Musik, Spargelsaison oder ein Stand auf dem Stadtfest sind echte Anlässe, über die andere berichten. Solche Erwähnungen und Links aus dem Ort stärken die Bekanntheit, die Google als Rankingfaktor nennt.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Beiträge im Profil:** Für Veranstaltungen gibt es einen eigenen Beitragstyp mit Titel, Start- und Enddatum. Ein Wochenmenü oder eine neue Saisonkarte passt als Neuigkeit.",
            "**Veranstaltungsseite auf der Website:** Termine mit Datum, Uhrzeit und Reservierungshinweis als Text, nicht nur als Instagram-Bild.",
            "**Lokale Partner:** Tourismusverband, Stadtmarketing, Weingut, Brauerei oder Hofladen, mit dem Sie zusammenarbeiten. Ein Eintrag mit Link auf deren Website zeigt, dass Sie vor Ort eine Rolle spielen.",
            "**Lokale Presse und Veranstaltungskalender:** Eröffnung, Jubiläum, neuer Küchenchef oder ein Benefizabend sind Anlässe für eine kurze Meldung.",
          ],
        },
        {
          t: "p",
          text: "Ideen für Sponsoring und eigene Veranstaltungen sammelt der Artikel [Lokale Events für SEO nutzen](/blog/lokale-events-marketing). Den Zusammenhang mit den übrigen Bausteinen erklärt der [Local-SEO-Leitfaden](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
    {
      id: "ki-assistenten",
      title: "Wenn KI-Assistenten Restaurants empfehlen",
      answer:
        "Viele Menschen fragen ChatGPT, Gemini oder die KI-Übersichten in der Google-Suche nach einem Restaurant, und diese Systeme stützen sich auf dieselben Quellen wie Gäste: Profil, Speisekarte, Rezensionen, Website und Plattformen. Eindeutige und überall gleiche Angaben erhöhen die Chance, richtig genannt zu werden.",
      blocks: [
        {
          t: "p",
          text: "Ein Assistent, der gefragt wird „Wo gibt es in [Ort] vegane Gerichte mit Terrasse?“, kann nur Betriebe nennen, bei denen diese Angaben irgendwo lesbar stehen. Ein Speisekarten-PDF ohne Text oder Öffnungszeiten, die zwischen Website und Profil abweichen, machen eine richtige Antwort unwahrscheinlicher.",
        },
        {
          t: "ol",
          items: [
            "Speisekarte, Merkmale wie vegan oder glutenfrei und Preise als Text auf der Website.",
            "Häufige Gästefragen auf der Website beantworten: Hunde erlaubt, Kinderstühle, Parken, Gruppen ab wie vielen Personen.",
            "Profil, Website und Plattformen auf denselben Stand bringen, vor allem Zeiten und Ruhetage.",
            "Rezensionen beantworten. Sie sind für Menschen und für KI-Systeme eine Quelle dafür, wie Ihr Betrieb erlebt wird.",
          ],
        },
        {
          t: "p",
          text: "Wo Ihr Restaurant heute steht, sehen wir uns gern im [kostenlosen Check](/de#check) an. Welche Leistungen wir darüber hinaus anbieten, finden Sie unter [Leistungen](/services).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Welche Kategorie soll mein Restaurant bei Google haben?",
      a: "Die genaueste, die Ihren Betrieb beschreibt, etwa „Italienisches Restaurant“, „Café“ oder „Weinbar“. Google empfiehlt so wenige Kategorien wie möglich und den Test „Dieses Unternehmen IST…“. Zusatzkategorien nur, wenn sie wirklich zutreffen, nicht als Keywords.",
    },
    {
      q: "Reicht ein Foto der Speisekarte im Google-Profil?",
      a: "Es ist ein Anfang. Google kann aus einem Foto oder PDF per KI eine Speisekarte erstellen, kennzeichnet die Funktion aber als experimentell. Genauer sind der Menüeditor im Profil und eine Textversion auf Ihrer Website, die Sie bei Änderungen sofort anpassen.",
    },
    {
      q: "Darf ich Gästen ein Getränk für eine Google-Bewertung anbieten?",
      a: "Nein. Googles Richtlinien verbieten Anreize wie Zahlungen, Rabatte und kostenlose Produkte für Rezensionen. Solche Rezensionen können entfernt werden. Erlaubt ist die einfache Bitte an alle Gäste, ohne Gegenleistung und ohne Vorgabe zum Inhalt.",
    },
    {
      q: "Was mache ich mit dem Profil in der Winterpause?",
      a: "Google erlaubt Saisonbetrieben, in der Nebensaison das Profil als vorübergehend geschlossen zu kennzeichnen. Während der Saison geben Sie die regulären Saisonzeiten an. Löschen Sie das Profil nicht, damit Rezensionen und Angaben erhalten bleiben.",
    },
    {
      q: "Lohnen sich Lieferplattformen für die Sichtbarkeit?",
      a: "Plattformen bringen Reichweite innerhalb ihrer App, kosten aber Gebühren nach Vertrag. Ob es sich rechnet, hängt von Ihren Zahlen ab. Für Google zählt vor allem, dass Ihr eigenes Profil vollständig ist, Ihre Daten überall gleich sind und der bevorzugte Bestelllink Ihrer Wahl gesetzt ist.",
    },
    {
      q: "Muss ich Allergene auf der Website angeben?",
      a: "Die LMIV verlangt Allergenangaben für Speisen, auch in der Gastronomie. Wie Sie sie bei Online-Karten oder Bestellungen bereitstellen, klären Sie am besten mit Ihrer IHK, der WKO oder der Lebensmittelkontrolle. Eine Allergenübersicht auf der Website ist für Gäste in jedem Fall hilfreich.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Speisekarte im Unternehmensprofil hinzufügen und bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9455840?hl=de" },
    { title: "Links in lokalen Brancheneinträgen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6218037?hl=de" },
    { title: "Fotos und Videos zum Unternehmensprofil hinzufügen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6123536?hl=de" },
    { title: "Unternehmensattribute verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9049526?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Kennzeichnung von allergenen Stoffen in der Gastronomie", publisher: "IHK zu Schwerin", url: "https://www.ihk.de/schwerin/standort-westmecklenburg/tourismus-und-gastgewerbe/rechtsfragen/kennzeichnung-von-allergenen-stoffen-in-der-gastronomie-6200314" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "local-seo-cafe-coffeeshop", title: "Local SEO für Cafés und Coffee Shops" },
  ],
  cta: {
    title: "Wie steht Ihr Restaurant auf Google da?",
    text: "Wir sehen uns Ihr Google-Profil, Speisekarte, Öffnungszeiten, Reservierungslinks und Bewertungen an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, mit denen Sie anfangen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
