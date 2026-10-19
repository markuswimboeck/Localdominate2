import type { V4Article } from "../types";

const article: V4Article = {
  slug: "gbp-fotos-optimieren",
  lang: "de",
  seoTitle: "Google Business Fotos: Vorgaben, Motive und Routine",
  seoDescription:
    "Fotos und Videos im Google-Unternehmensprofil: Googles Vorgaben zu Format und Größe, passende Motive je Branche, Kundenfotos melden, Datenschutz und Routine.",
  h1: "Fotos und Videos im Google-Unternehmensprofil richtig einsetzen",
  kicker: "Google Unternehmensprofil",
  lead:
    "Für Inhaber von Hotels, Restaurants, Handwerksbetrieben und Praxen, die ihr Profil mit eigenen Bildern pflegen. Sie erfahren, welche technischen Vorgaben Google macht, welche Motive Kunden wirklich helfen, was bei Personen im Bild gilt und welche Foto-Tipps aus dem Netz Sie sich sparen können.",
  answer:
    "Laden Sie eigene, scharfe und kaum bearbeitete Fotos als JPG oder PNG hoch, zwischen 10 KB und 5 MB, empfohlen 720 × 720 Pixel. Videos dürfen höchstens 30 Sekunden lang und 75 MB groß sein. Zeigen Sie Außenansicht, Räume, Arbeit, Produkte und Team. Dass Fotos das Ranking verbessern, sagt Google nicht. Sie helfen Kunden bei der Entscheidung.",
  takeaways: [
    "Google verlangt für Fotos JPG oder PNG, 10 KB bis 5 MB, mindestens 250 × 250 Pixel. Videos: bis 30 Sekunden, bis 75 MB, mindestens 720p.",
    "Erlaubt sind echte Aufnahmen vom Ort. Bilddatenbank-Fotos, Screenshots, Collagen, Rahmen, Text im Bild und starke Filter rät Google ab.",
    "Kundenfotos können Sie nicht selbst löschen, nur bei Google melden. Die Prüfung dauert laut Google mehrere Werktage.",
    "Personen im Bild brauchen ihr Einverständnis, auch Mitarbeiter. Bei Arbeiten in Kundenwohnungen fragen Sie vorher.",
    "Geotags in den Bilddaten und Dateinamen mit Keywords bringen nach allen veröffentlichten Tests nichts. Google bestätigt keinen Ranking-Effekt von Fotos.",
  ],
  publishedAt: "2026-01-12",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "technische-vorgaben",
      title: "Googles technische Vorgaben für Fotos und Videos",
      answer:
        "Google nennt für Fotos JPG oder PNG, 10 KB bis 5 MB und empfiehlt 720 × 720 Pixel, mindestens 250 × 250 Pixel. Videos dürfen bis zu 30 Sekunden lang und 75 MB groß sein, mit 720p oder mehr.",
      blocks: [
        {
          t: "table",
          caption: "Vorgaben laut Google Unternehmensprofil-Hilfe",
          head: ["", "Fotos", "Videos"],
          rows: [
            ["Format", "JPG oder PNG", "keine Angabe in der Hilfe"],
            ["Dateigröße", "10 KB bis 5 MB", "bis 75 MB"],
            ["Auflösung", "empfohlen 720 × 720 Pixel, mindestens 250 × 250 Pixel", "720p oder höher"],
            ["Länge", "entfällt", "bis 30 Sekunden"],
            ["Qualität", "scharf, gut ausgeleuchtet, kaum bearbeitet, wenige Filter", "ruhig, scharf, nicht verzerrt"],
          ],
        },
        {
          t: "p",
          text: "Feste Seitenverhältnisse für Logo, Titelbild oder Produktfotos schreibt Google in der Hilfe nicht vor. Tabellen mit „optimalen“ Maßen wie 1200 × 900 oder 1920 × 1080 Pixel stammen aus Agenturblogs, nicht von Google. Praktisch bewährt sich: Fotos in guter Auflösung querformatig aufnehmen und das wichtige Motiv in die Bildmitte setzen, weil Google Bilder je nach Ansicht unterschiedlich zuschneidet.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Google formuliert den Maßstab so: Es kommt auf eine **realistische Darstellung** an. Ein Foto, das Ihren Gastraum größer, heller oder leerer zeigt, als er ist, verstößt nicht nur gegen den Geist der Vorgaben, es enttäuscht auch Gäste vor Ort.",
        },
      ],
    },
    {
      id: "logo-titelbild",
      title: "Logo und Titelbild",
      answer:
        "Das Logo hilft Kunden, Sie wiederzuerkennen. Das Titelbild steht oben im Profil, Google garantiert aber nicht, dass es als erstes Bild erscheint. Bei schlechter Qualität kann Google ein Nutzerfoto an seine Stelle setzen.",
      blocks: [
        {
          t: "p",
          text: "Beide fügen Sie unter **Fotos** im Profil hinzu, über „Logo hinzufügen“ und „Titelbild hinzufügen“, später über „Logo ändern“ und „Titelbild ändern“. Das Logo hebt Google laut Hilfe hervor, wenn Basisangaben wie Telefonnummer und Öffnungszeiten vorhanden sind.",
        },
        {
          t: "ul",
          items: [
            "**Logo fehlt in der Anzeige:** Laut Google fehlen dann oft Pflichtangaben, also Name, gültige Adresse, Kategorien, Telefonnummer oder Öffnungszeiten. Prüfen Sie zuerst diese Felder, siehe [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
            "**Titelbild wird ersetzt:** Google kann statt Ihres Titelbilds ein von Nutzern hochgeladenes Bild zeigen, wenn Ihres unscharf ist oder erkennbar nicht das beste Motiv. Ein gut belichtetes, typisches Bild Ihres Betriebs ist die beste Vorbeugung.",
            "**Motiv für das Titelbild:** etwas, das Ihren Betrieb sofort erkennbar macht, etwa die Fassade mit Eingang, der Gastraum oder das Team bei einer typischen Arbeit. Kein Werbebanner mit Text und Telefonnummer.",
          ],
        },
      ],
    },
    {
      id: "motive-nach-branche",
      title: "Welche Motive je Branche helfen",
      answer:
        "Google empfiehlt Außen- und Innenaufnahmen, Fotos bei der Arbeit, Produkte und Team, für Hotels zusätzlich Zimmer und Gemeinschaftsbereiche, für Gastronomie Speisen und Getränke. Die Tabelle ist eine praktische Empfehlung, keine Rangfolge für das Ranking.",
      blocks: [
        {
          t: "p",
          text: "In der Hilfe zu unternehmensspezifischen Fotos gibt Google je Fototyp Hinweise: Außenaufnahmen aus jeder Richtung, aus der Kunden kommen, und zu verschiedenen Tageszeiten. Innenaufnahmen, die zeigen, wie man sich als Kunde fühlt. Mindestens ein Foto je Gemeinschaftsbereich wie Sauna, Fitnessraum oder Frühstücksraum. Beliebte Produkte und Speisen gleichmäßig ausgeleuchtet. Mitarbeiter bei der Arbeit und auch informellere Teamfotos.",
        },
        {
          t: "table",
          caption: "Motive nach Betriebsart (praktische Empfehlung, ohne Ranking-Aussage)",
          head: ["Betrieb", "Zuerst", "Danach", "Lieber weglassen"],
          rows: [
            ["Hotel und Pension", "Fassade mit Eingang, jede Zimmerkategorie, Frühstücksraum", "Wellness, Fitness, Parkplatz, Umgebung, Team an der Rezeption", "Weitwinkel, der Zimmer größer wirken lässt"],
            ["Restaurant und Café", "Außenansicht, Gastraum, beliebteste Gerichte und Getränke", "Terrasse, Bar, Küche, Team", "Fotos von Gerichten, die nicht mehr auf der Karte stehen"],
            ["Handwerk", "Arbeiten vorher und nachher, Firmenfahrzeug, Werkstatt", "Team mit Werkzeug, Material, Ausstellungsraum", "Kundenwohnungen mit privaten Details, Fotos ohne Einverständnis"],
            ["Praxis", "Eingang, Empfang, Wartebereich, barrierefreier Zugang", "Behandlungsraum ohne Patienten, Team", "Patienten, Bildschirme oder Unterlagen mit Daten"],
          ],
        },
        {
          t: "p",
          text: "Mehr zur jeweiligen Branche lesen Sie in [Local SEO für Hotels](/blog/local-seo-hotels), [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants), [Local SEO für Handwerker](/blog/local-seo-handwerker) und [Local SEO für Ärzte und Praxen](/blog/local-seo-aerzte-praxen). Für Ferienwohnungen gilt das Hotel-Schema sinngemäß, siehe [SEO für Ferienwohnungen](/blog/seo-ferienwohnungen). Betriebe mit internationalen Gästen finden einen Überblick auf unserer [englischen Seite für Hotels](/industries/hotels).",
        },
        {
          t: "note",
          label: "Barrierefreiheit zeigen",
          text: "Wenn Sie im Profil das Attribut für einen rollstuhlgerechten Eingang setzen, zeigen Sie ihn auch auf einem Foto. Welche Attribute es gibt und wie Sie sie pflegen, steht in [Attribute im Unternehmensprofil richtig nutzen](/blog/gbp-attribute-richtig-nutzen).",
        },
      ],
    },
    {
      id: "echt-statt-stock",
      title: "Echte Bilder statt Bilddatenbank",
      answer:
        "Google rät, nur selbst aufgenommene Bilder vom Ort zu verwenden. Bilddatenbank-Fotos, Screenshots, GIFs, Collagen, stark bearbeitete Bilder, Rahmen und Text im Bild sollen Sie vermeiden. Bilder geringer Qualität kann Google ohne Einspruchsmöglichkeit entfernen.",
      blocks: [
        {
          t: "p",
          text: "Die Tipps für Medien in Google Maps sind eindeutig: Medien sollen selbst aufgenommen sein, am Ort entstehen und den Ort in den Mittelpunkt stellen. Drehung und Helligkeit korrigieren ist in Ordnung, Filter auch, solange sie den Ort nicht stark verfälschen. Die Richtlinien für Beiträge in Maps nennen außerdem kopierte oder gestohlene Fotos als Verstoß.",
        },
        {
          t: "table",
          caption: "Was Google bei Fotos empfiehlt und was nicht",
          head: ["Empfohlen", "Vermeiden"],
          rows: [
            ["Selbst aufgenommen, am Ort", "Bilddatenbank, Bilder anderer, Screenshots"],
            ["Scharf, hohe Auflösung", "Unscharf, verwackelt, sehr dunkel"],
            ["Drehung und Licht korrigiert", "Starke Filter, die den Ort verfälschen"],
            ["Ein Motiv pro Bild", "Collagen, Rahmen, eingeblendeter Text"],
            ["Ort und Angebot im Mittelpunkt", "Selfies, bei denen die Person im Vordergrund steht"],
          ],
        },
        {
          t: "p",
          text: "Ein Wasserzeichen oder Ihr Logo groß über jedem Bild fällt unter eingeblendeten Inhalt, der ablenkt. Telefonnummer und Aktionstext gehören in die Profilfelder oder in einen Beitrag, nicht ins Foto.",
        },
      ],
    },
    {
      id: "videos",
      title: "Videos im Profil",
      answer:
        "Videos dürfen laut Google höchstens 30 Sekunden lang und 75 MB groß sein, mit mindestens 720p. Kurze, ruhige Aufnahmen vom Ort helfen am meisten: ein Rundgang durch Gastraum oder Zimmer, ein Blick in die Werkstatt.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Stativ oder ruhige Hand:** Google nennt verwackelte, unscharfe oder verzerrte Videos ausdrücklich als wenig hilfreich.",
            "**Ein Thema je Video:** der Weg vom Parkplatz zum Eingang, das Frühstücksbuffet, eine typische Reparatur.",
            "**Ohne Werbeeinblendungen:** keine Texttafeln mit Preisen oder Rabatten, keine Musik, die Sie nicht nutzen dürfen.",
            "**Personen nur mit Einverständnis:** Das gilt für Gäste im Hintergrund genauso wie für Mitarbeiter.",
          ],
        },
        {
          t: "note",
          label: "Nicht verwechseln",
          text: "Das Video zur Bestätigung des Profils ist etwas anderes als ein Video im Profil. Es wird nicht veröffentlicht und folgt eigenen Regeln. Was dort zu zeigen ist, steht in [Bestätigung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
      ],
    },
    {
      id: "hochladen-pruefung",
      title: "Hochladen, Prüfung und Löschen",
      answer:
        "Sie laden Fotos in der Google-Suche oder in Maps über Ihr Profil unter Fotos hoch. Google prüft sie, bevor sie erscheinen. Das kann laut Hilfe 24 bis 48 Stunden dauern. Neue Medien zeigt Google zuerst.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Profil öffnen", text: "In der Google-Suche oder in Maps nach Ihrem Firmennamen und Ort suchen, mit dem Konto angemeldet, das das Profil verwaltet." },
            { title: "Fotos hinzufügen", text: "Auf „Fotos“ und dann „Fotos hinzufügen“ klicken, eine oder mehrere Dateien auswählen." },
            { title: "Status prüfen", text: "„Ausstehend“ heißt: wird verarbeitet oder das Profil ist noch nicht bestätigt. „Nicht genehmigt“ heißt: Verstoß gegen die Richtlinien. „Live“ heißt: in Suche und Maps sichtbar." },
            { title: "Bei Bedarf löschen", text: "Unter „Fotos“ das Bild auswählen, „Löschen“ anklicken und bestätigen. Eigene Uploads können Sie jederzeit entfernen." },
          ],
        },
        {
          t: "p",
          text: "Erscheint ein Upload nicht, prüfen Sie laut Google, ob es ein Duplikat ist, und laden Sie erneut hoch. Bleiben alle Medien dauerhaft auf „Ausstehend“, liegt es oft an einer fehlenden Bestätigung oder einem eingeschränkten Profil, siehe [Profil nicht in der Suche sichtbar](/blog/gbp-nicht-in-suche-sichtbar) und [Profil gesperrt: reaktivieren](/blog/gbp-suspendiert-reaktivieren). Betriebe mit zehn oder mehr Standorten können Fotos laut Google per Tabelle gesammelt hochladen, mehr dazu in [Mehrere Standorte verwalten](/blog/gbp-mehrere-standorte).",
        },
      ],
    },
    {
      id: "kundenfotos",
      title: "Kundenfotos und unpassende Bilder melden",
      answer:
        "Fotos von Kunden können Sie nicht selbst löschen. Sie können sie bei Google melden, wenn sie gegen die Richtlinien verstoßen, etwa weil sie nicht Ihren Ort zeigen oder die Privatsphäre verletzen. Google prüft und entfernt nur bei Verstoß.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "In der Google-Suche", text: "Im Profil „Fotos“ und „Alle Fotos ansehen“ öffnen, das Bild auswählen, „Problem melden“ wählen, einen Grund angeben und absenden." },
            { title: "In der Google-Maps-App", text: "Unter „Unternehmen“ das Profil öffnen, „Fotos“ wählen, das Bild öffnen, über „Mehr“ auf „Melden“ tippen und einen Grund wählen, etwa Spam oder persönliche Daten." },
            { title: "Einmal melden, dann warten", text: "Laut Google dauert die Prüfung mehrere Werktage. Mehrfache Meldungen zum selben Bild können sie verzögern." },
          ],
        },
        {
          t: "p",
          text: "Ein Kundenfoto, das Ihnen nur nicht gefällt, entfernt Google nicht. Hier hilft ein besseres eigenes Foto desselben Motivs. Für möglicherweise rechtswidrige Inhalte bietet Google ein eigenes rechtliches Meldeformular. Wie der Ablauf bei Bewertungen aussieht, beschreibt [Google-Bewertung löschen lassen](/blog/gbp-bewertung-loeschen-anleitung), Fälschungen bei Wettbewerbern behandelt [Google-Maps-Spam erkennen](/blog/google-maps-spam-erkennen).",
        },
      ],
    },
    {
      id: "datenschutz",
      title: "Datenschutz: Personen, Mitarbeiter, Kundenwohnungen",
      answer:
        "Wer auf einem Foto erkennbar ist, muss der Veröffentlichung zustimmen. Google selbst wertet ein Gesicht in einem Foto ohne Einwilligung als persönliche Daten, die nicht erlaubt sind. Dokumentieren Sie Einwilligungen und entfernen Sie Bilder, wenn jemand sie widerruft.",
      blocks: [
        {
          t: "p",
          text: "Die Richtlinien für Beiträge in Google Maps verbieten persönliche Daten anderer ohne deren Einwilligung und nennen ausdrücklich das Gesicht auf einem Foto oder in einem Video. Für Betriebe in Deutschland und Österreich kommt die DSGVO hinzu. Der Landesdatenschutzbeauftragte Baden-Württemberg weist in seiner Handreichung zum Fotografieren darauf hin, dass der Verantwortliche eine Einwilligung nachweisen können muss, über das jederzeitige Widerrufsrecht informieren muss und Fotos nach einem Widerruf zu entfernen hat.",
        },
        {
          t: "ul",
          items: [
            "**Mitarbeiter:** Holen Sie vor dem Teamfoto eine Einwilligung ein und bewahren Sie sie auf. Wer nicht aufs Bild will, wird nicht gezeigt, ohne Nachteile.",
            "**Gäste und Patienten:** Fotografieren Sie Räume, wenn niemand da ist. Erkennbare Gäste im Hintergrund brauchen ebenfalls ihr Einverständnis.",
            "**Kundenwohnungen im Handwerk:** Fragen Sie vor dem Vorher-nachher-Foto. Achten Sie auf Familienfotos, Post, Namensschilder, Hausnummern und Bildschirme im Bild.",
            "**Praxen:** keine Patienten, keine Terminbildschirme, keine Unterlagen. Hier gelten zusätzlich berufsrechtliche Schweigepflichten.",
            "**Schweiz:** Es gilt das Schweizer Datenschutzrecht. Der sichere Weg ist auch dort: vorher fragen und die Zustimmung festhalten.",
          ],
        },
        {
          t: "note",
          label: "Keine Rechtsberatung",
          text: "Dieser Abschnitt beschreibt den sicheren Weg aus Sicht der Profilpflege. Für Einwilligungsvorlagen und Sonderfälle wenden Sie sich an Ihren Datenschutzbeauftragten oder Ihre Kammer.",
        },
      ],
    },
    {
      id: "mythen",
      title: "Geotags, Dateinamen, Ranking: was nicht stimmt",
      answer:
        "Für einen Ranking-Vorteil durch Geotags in den Bilddaten oder Keywords im Dateinamen gibt es keine Google-Quelle. Veröffentlichte Tests fanden keinen Effekt. Google nennt Fotos in seinen Ranking-Tipps als Mittel, Kunden das Angebot zu zeigen, nicht als Ranking-Faktor.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Foto-Tipps im Faktencheck",
          head: ["Behauptung", "Was belegt ist"],
          rows: [
            ["Geotags (GPS in den EXIF-Daten) verbessern das Maps-Ranking", "Keine Aussage von Google. Tests von Sterling Sky und Hypetrix fanden keinen Effekt. Whitespark führt Geotagging als verbreiteten Mythos."],
            ["Dateinamen mit Keyword und Ort helfen", "Keine Google-Quelle für das Unternehmensprofil. Der Dateiname ist für Kunden nicht sichtbar."],
            ["Fotos sind ein Ranking-Faktor", "Google nennt Relevanz, Entfernung und Bekanntheit. Fotos stehen in den Tipps unter „Kunden zeigen, was Sie anbieten“, ohne Ranking-Zusage."],
            ["Profile mit mehr Fotos bekommen ein Vielfaches an Anrufen", "Solche Prozentzahlen kursieren ohne nachvollziehbare Quelle. Wir verwenden sie nicht."],
            ["Jede Woche neue Fotos sind Pflicht", "Google nennt keinen Rhythmus. Wichtig ist, dass die Bilder den aktuellen Stand zeigen."],
          ],
        },
        {
          t: "p",
          text: "Was das lokale Ranking nach Googles eigener Aussage beeinflusst, steht in [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern) und [Google-Maps-Ranking-Faktoren](/blog/google-maps-seo-ranking-faktoren). Fotos wirken vor allem auf die Entscheidung der Menschen, die Ihr Profil bereits sehen.",
        },
      ],
    },
    {
      id: "routine",
      title: "Eine Foto-Routine, die zum Betrieb passt",
      answer:
        "Prüfen Sie Ihre Fotos einmal im Monat und ersetzen Sie, was nicht mehr stimmt. Neue Bilder machen Sie immer dann, wenn sich etwas ändert: Umbau, neue Karte, neues Team, Saison. Einen festen Upload-Takt schreibt Google nicht vor.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Grundausstattung anlegen", text: "Logo, Titelbild, Außenansicht aus jeder Anfahrtsrichtung, Innenräume, Arbeit oder Produkte, Team. Je Typ einige gute Bilder statt vieler ähnlicher." },
            { title: "Monatlich durchsehen", text: "Sind Fassade, Einrichtung, Speisen und Team noch so wie auf den Bildern? Sind neue Kundenfotos dabei, die gemeldet werden müssen?" },
            { title: "Anlassbezogen ergänzen", text: "Nach Umbau, Saisonwechsel, neuer Leistung oder neuem Produkt. Passend dazu die Leistungen im Profil pflegen, siehe [Produkte und Leistungen im Profil](/blog/google-business-produkte-services)." },
            { title: "Einwilligungen nachhalten", text: "Scheidet ein Mitarbeiter aus oder widerruft jemand, Bilder entfernen." },
            { title: "Wirkung beobachten", text: "In den Leistungsdaten des Profils Anrufe, Routen und Website-Klicks über Monate vergleichen, ohne einzelne Uploads als Ursache zu überschätzen." },
          ],
        },
        {
          t: "p",
          text: "Die Fotoprüfung passt gut in die [monatliche Local-SEO-Routine](/blog/local-seo-monthly-checklist). Wie Kunden das Profil vor allem unterwegs auf dem Handy sehen, beschreibt [Mobile Local SEO](/blog/mobile-local-seo).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Fotos sollte mein Profil haben?",
      a: "Google nennt keine Gesamtzahl. Die Hilfe empfiehlt Fotos je Typ, etwa Außenaufnahmen aus jeder Richtung, aus der Kunden kommen, und mindestens ein Foto je Gemeinschaftsbereich. Wichtiger als die Menge ist, dass jedes wichtige Motiv aktuell und gut erkennbar vorhanden ist.",
    },
    {
      q: "Welche Bildgröße verlangt Google?",
      a: "JPG oder PNG, 10 KB bis 5 MB, empfohlen 720 × 720 Pixel, mindestens 250 × 250 Pixel. Videos bis 30 Sekunden, bis 75 MB, mit 720p oder mehr. Feste Seitenverhältnisse für Logo oder Titelbild nennt Google nicht.",
    },
    {
      q: "Kann ich Fotos von Kunden löschen?",
      a: "Nein. Sie können Kundenfotos nur bei Google melden, wenn sie gegen die Richtlinien verstoßen, etwa weil sie nicht Ihren Ort zeigen oder persönliche Daten enthalten. Die Prüfung dauert laut Google mehrere Werktage, eine Entfernung ist nicht garantiert.",
    },
    {
      q: "Warum zeigt Google ein anderes Titelbild als meines?",
      a: "Google garantiert nicht, dass das Titelbild als erstes erscheint. Wirkt es unscharf oder nicht wie das beste Motiv, kann Google ein Nutzerfoto zeigen. Ersetzen Sie es durch ein scharfes, typisches Bild Ihres Betriebs.",
    },
    {
      q: "Helfen Geotags in den Fotos beim Ranking?",
      a: "Dafür gibt es keine Aussage von Google. Veröffentlichte Tests von Sterling Sky und Hypetrix fanden keinen Effekt. Sie können sich diesen Schritt sparen.",
    },
    {
      q: "Darf ich Bilder aus einer Bilddatenbank nutzen?",
      a: "Google rät davon ab und empfiehlt selbst aufgenommene Bilder vom Ort. Kopierte oder fremde Fotos verstoßen gegen die Richtlinien. Kunden wollen sehen, wie es bei Ihnen tatsächlich aussieht.",
    },
  ],
  sources: [
    { title: "Fotos und Videos für Ihr Unternehmensprofil verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6103862?hl=de" },
    { title: "Tipps für unternehmensspezifische Fotos in Ihrem Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6123536?hl=de" },
    { title: "Unangemessene Fotos oder Videos in Ihrem Unternehmensprofil melden", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6130451?hl=de" },
    { title: "Tipps zum Posten von Medien in Google Maps", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7411351?hl=de" },
    { title: "Verbotene und eingeschränkte Inhalte (Richtlinien für Beiträge)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Fotografieren und Datenschutz (Handreichung, Stand September 2019)", publisher: "Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg", url: "https://www.baden-wuerttemberg.datenschutz.de/wp-content/uploads/2019/09/Fotografieren-und-Datenschutz-September-2019.pdf" },
    { title: "Geotagging Photos is a Local SEO Myth", publisher: "Whitespark", url: "https://whitespark.ca/blog/geotagging-photos-is-a-local-seo-myth/" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "gbp-attribute-richtig-nutzen", title: "Attribute im Unternehmensprofil richtig nutzen" },
    { slug: "gbp-bewertung-loeschen-anleitung", title: "Google-Bewertung löschen lassen" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
  ],
  cta: {
    title: "Zeigen Ihre Fotos, was Kunden erwartet?",
    text: "Wir sehen uns Ihr Google-Profil mit Fotos, Titelbild und Kundenbildern an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
