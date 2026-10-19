import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-maps-spam-erkennen",
  lang: "de",
  seoTitle: "Google-Maps-Spam erkennen und melden: Anleitung",
  seoDescription:
    "So erkennen Sie gefälschte Einträge, Keyword-Namen und gekaufte Bewertungen in Google Maps, melden sie auf dem richtigen Weg und schützen Ihr eigenes Profil.",
  h1: "Google-Maps-Spam erkennen und melden: so schützen Sie Ihren Markt und Ihr eigenes Profil",
  kicker: "Google Maps",
  lead:
    "Für Inhaber lokaler Betriebe, die in Google Maps hinter Einträgen stehen, die es so gar nicht geben dürfte, oder deren eigenes Profil mit falschen Bewertungen oder Änderungen angegriffen wird. Sie erfahren, woran Sie Verstöße erkennen, welcher Meldeweg zu welchem Fall passt und was Sie realistisch erwarten können.",
  answer:
    "Spam in Google Maps sind Einträge und Beiträge, die gegen Googles Richtlinien verstoßen: Zusätze im Firmennamen, Scheinadressen, doppelte Profile, gekaufte oder erzwungene Bewertungen. Melden Sie einzelne Fälle in Maps über „Änderung vorschlagen“, Betrug bei Name, Telefonnummer oder Website über Googles Beschwerdeformular und unzulässige Rezensionen über die Meldefunktion. Belege sammeln Sie vorher.",
  takeaways: [
    "Google hat 2025 nach eigenen Angaben mehr als 292 Millionen unzulässige Rezensionen blockiert oder entfernt und mehr als 13 Millionen gefälschte Unternehmensprofile gelöscht.",
    "Die häufigsten Verstöße lassen sich mit Googles eigenen Richtlinien prüfen: Name wie auf dem Schild, echte Adresse mit Beschilderung, ein Profil je Standort, keine Gegenleistung für Bewertungen.",
    "Es gibt drei Meldewege: „Änderung vorschlagen“ in Maps, das Beschwerdeformular für Betrug und die Meldung einzelner Rezensionen.",
    "Google sagt keine Bearbeitung zu und meldet beim Beschwerdeformular keinen Status zurück. Gute Belege erhöhen die Chance.",
    "Prüfen Sie vor jeder Meldung Ihr eigenes Profil. Wer selbst gegen Regeln verstößt, wird oft als Nächster gemeldet.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 10,
  sections: [
    {
      id: "was-ist-spam",
      title: "Was als Spam gilt und wie groß das Problem ist",
      answer:
        "Als Spam gilt alles, was gegen Googles Richtlinien für Unternehmensprofile oder Nutzerbeiträge verstößt und Suchende täuscht. Google entfernt jedes Jahr Millionen solcher Profile und Beiträge, aber nicht alle.",
      blocks: [
        {
          t: "p",
          text: "Google verlangt, dass ein Unternehmen sich so darstellt wie außerhalb des Internets, mit korrekter Adresse oder korrektem Einzugsgebiet, wenigen passenden Kategorien und einem Profil je Standort. Für Rezensionen gilt: Sie müssen auf echten Erfahrungen beruhen und dürfen nicht durch Gegenleistungen oder Interessenkonflikte beeinflusst sein. Was dagegen verstößt, verschafft dem Anbieter einen unfairen Vorteil und führt Kunden in die Irre.",
        },
        {
          t: "table",
          caption: "Was Google nach eigenen Angaben 2025 gegen Missbrauch in Maps unternommen hat",
          head: ["Maßnahme", "Umfang 2025"],
          rows: [
            ["Unzulässige Rezensionen blockiert oder entfernt", "mehr als 292 Millionen"],
            ["Ungenaue oder nicht bestätigte Änderungen blockiert", "79 Millionen"],
            ["Gefälschte Unternehmensprofile entfernt", "mehr als 13 Millionen"],
            ["Konten mit Veröffentlichungsbeschränkungen", "mehr als 782.000"],
          ],
        },
        {
          t: "p",
          text: "Ein Beispiel aus dem Vorjahr nennt Google selbst: 2024 entfernte Google mehr als 10.000 Einträge einer Gruppe, die sich als Schlüsseldienste ausgab, nicht beanspruchte Profile übernahm und Kunden überhöhte Preise berechnete. Gerade bei Notdiensten lohnt sich deshalb ein genauer Blick auf die Konkurrenz im Kartenblock.",
        },
      ],
    },
    {
      id: "spam-arten",
      title: "Die häufigsten Verstöße und woran Sie sie erkennen",
      answer:
        "Die meisten Fälle betreffen den Namen, die Adresse, doppelte Profile und Bewertungen. Für jeden gibt es eine klare Regel in Googles Richtlinien, an der Sie den Verdacht prüfen können.",
      blocks: [
        {
          t: "table",
          caption: "Verstoß, Googles Regel und Prüfung",
          head: ["Verstoß", "Was Googles Richtlinien sagen", "So prüfen Sie es"],
          rows: [
            ["Zusätze im Firmennamen, etwa „Pizza Roma Lieferdienst Hamburg günstig“", "Nur der echte Name. Leistungen, Orte, Öffnungszeiten und Slogans sind im Namen nicht erlaubt", "Name auf Website, im Impressum und auf dem Schild in Street View vergleichen"],
            ["Scheinadresse oder virtuelles Büro", "Gemietete Postanschriften ohne echten Standort sind nicht zulässig. Co-Working nur mit Beschilderung, Personal und Kundenempfang", "Street View, Klingelschilder, Hausnummer prüfen; viele Betriebe derselben Branche an einer Adresse sind ein Warnzeichen"],
            ["Mehrere Profile für denselben Betrieb", "Nicht mehr als ein Profil je Standort, auch nicht über mehrere Konten", "Gleiche Telefonnummer oder Website bei verschiedenen Namen und Adressen"],
            ["Gekaufte oder belohnte Bewertungen", "Rezensionen gegen Geld, Rabatte oder Gratisleistungen sind verboten, ebenso Rezensionen aus Interessenkonflikten", "Viele Bewertungen in kurzer Zeit, auffällig ähnliche Texte, Hinweise auf Aktionen „für Ihre Bewertung“"],
            ["Unpassende Kategorien", "So wenige wie möglich, nur was das Unternehmen ist, keine Kategorien als Keywords", "Kategorie in der Profilansicht mit dem tatsächlichen Angebot vergleichen"],
            ["Zu großes Einzugsgebiet", "In der Regel nicht weiter als etwa zwei Autostunden vom Standort", "Einzugsgebiet im Profil mit dem Firmensitz vergleichen"],
            ["Weiterleitende Telefonnummern", "Keine Nummern, die Anrufer nicht direkt mit dem Unternehmen verbinden; keine Sonderrufnummern", "Mehrere Einträge mit unterschiedlichen Namen, die alle bei derselben Vermittlung landen"],
          ],
        },
        {
          t: "p",
          text: "Mehr zu doppelten Einträgen, auch im eigenen Profil, im Artikel [Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen).",
        },
      ],
    },
    {
      id: "belege",
      title: "Belege sammeln, bevor Sie melden",
      answer:
        "Eine Meldung mit Screenshots, Links und einer sachlichen Begründung hat bessere Chancen als ein bloßer Verdacht. Halten Sie fest, was Sie sehen, und vermeiden Sie Vorwürfe, die Sie nicht belegen können.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Profil-URL kopieren", text: "Den Eintrag in Google Maps öffnen und die vollständige Adresse aus der Browserzeile kopieren. Google verlangt sie im Beschwerdeformular, beginnend mit https://www.google.com/maps." },
            { title: "Screenshots mit Datum", text: "Name, Adresse, Kategorie und auffällige Bewertungen festhalten. Profile ändern sich, ein Screenshot bleibt." },
            { title: "Gegenbeleg sichern", text: "Impressum der Website, Handelsregister oder Firmenbuch, Street-View-Ansicht der Adresse. Daran zeigt sich, wie der Betrieb wirklich heißt und wo er sitzt." },
            { title: "Sachlich beschreiben", text: "Welche Regel ist verletzt und woran ist das zu sehen? Zitieren Sie den beanstandeten Inhalt genau, so wie es Google im Beschwerdeformular verlangt." },
          ],
        },
        {
          t: "note",
          label: "Fair bleiben",
          text: "Nicht jede Auffälligkeit ist ein Verstoß. Ein Betrieb kann zwei Standorte haben, eine Marke kann Teil des echten Namens sein, und viele Bewertungen nach einer Eröffnung sind normal. Melden Sie nur, was Sie mit Googles Richtlinien begründen können. Eigene gefälschte Bewertungen über Wettbewerber verbietet Google ausdrücklich.",
        },
      ],
    },
    {
      id: "melden",
      title: "Der richtige Meldeweg für jeden Fall",
      answer:
        "Falsche Angaben korrigieren Sie über „Änderung vorschlagen“, Betrug bei Name, Telefonnummer oder Website melden Sie über das Beschwerdeformular, und unzulässige Rezensionen melden Sie einzeln.",
      blocks: [
        {
          t: "table",
          caption: "Welcher Weg zu welchem Fall passt",
          head: ["Fall", "Meldeweg", "Was Sie erwarten können"],
          rows: [
            ["Falscher Name, falsche Kategorie oder Adresse ohne Betrugsverdacht", "In Maps „Änderung vorschlagen“ und die Angabe korrigieren", "Google prüft den Vorschlag"],
            ["Eintrag ist irreführend oder existiert nicht", "„Änderung vorschlagen“, dann „Ort ist geschlossen oder nicht hier“ und „Anstößig, schädlich oder irreführend“", "Prüfung durch Google"],
            ["Betrug bei Name, Telefonnummer oder Website, auch viele Einträge auf einmal", "Beschwerdeformular für Verstöße im geschäftlichen Verkehr", "Keine Zusage einer Maßnahme, keine Statusmeldung. Pro Meldung 10 bis 100 URLs, auch als Tabelle"],
            ["Unternehmen bietet Gegenleistung für Rezensionen", "In der Maps-App „Änderung vorschlagen“, dann „Geschäftsgebaren melden“", "Prüfung durch Google"],
            ["Unzulässige Rezension im eigenen Profil", "„Melden“ an der Rezension oder im Tool zum Verwalten von Bewertungen", "Prüfung in der Regel in mehreren Tagen, Status im Tool, einmaliger Einspruch möglich"],
          ],
        },
        {
          t: "h3",
          text: "Rezensionen im eigenen Profil melden",
        },
        {
          t: "steps",
          items: [
            { title: "Rezension melden", text: "Im Unternehmensprofil „Rezensionen lesen“ wählen, bei der Rezension „Melden“ antippen und einen Grund wie „Spam“ auswählen." },
            { title: "Status verfolgen", text: "Im Tool zum Verwalten von Bewertungen sehen Sie, ob die Entscheidung aussteht oder ob kein Verstoß festgestellt wurde." },
            { title: "Einmal Einspruch einlegen", text: "Wird eine Rezension nicht entfernt, können Sie im selben Tool einmalig Einspruch einlegen, für bis zu zehn Rezensionen auf einmal. Das Ergebnis kommt per E-Mail." },
          ],
        },
        {
          t: "p",
          text: "Google entfernt nur Rezensionen, die gegen Richtlinien verstoßen. Eine berechtigte, aber unangenehme Kritik bleibt stehen, und Google schlichtet keine Streitigkeiten zwischen Unternehmen und Kunden. Wie Sie mit solchen Bewertungen umgehen, steht im Artikel [Negative Google-Bewertungen](/blog/negative-google-bewertungen).",
        },
      ],
    },
    {
      id: "eigenes-profil",
      title: "Das eigene Profil schützen",
      answer:
        "Halten Sie Ihr Profil bestätigt und aktiv, prüfen Sie Änderungsvorschläge und reagieren Sie auf ungewöhnliche Bewertungswellen sofort. Google warnt bestätigte Inhaber inzwischen per E-Mail vor wichtigen Änderungen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Bestätigt und aktiv bleiben.** Seit April 2026 führt Google E-Mail-Hinweise für bestätigte und aktive Inhaber ein. Damit können sie wichtige Änderungen an ihrem Profil prüfen, bevor diese erscheinen.",
            "**Regelmäßig ansehen.** Prüfen Sie einmal pro Woche Name, Adresse, Telefonnummer, Öffnungszeiten und Kategorie. Vorschläge von Nutzern können Angaben verändern.",
            "**Mehrere Inhaber oder Verwalter.** Hinterlegen Sie mindestens eine zweite Person, damit der Zugang nicht an einem Konto hängt.",
            "**Laufend echte Bewertungen sammeln.** Ein breiter Bestand ehrlicher Rezensionen macht einzelne falsche weniger gewichtig.",
          ],
        },
        {
          t: "note",
          label: "Erpressung mit Bewertungen",
          text: "Manche Betrüger veröffentlichen gefälschte Ein-Stern-Bewertungen und verlangen Geld für deren Entfernung. Zahlen Sie nicht. Google hat dafür einen eigenen Hilfeartikel und nach eigenen Angaben seine Systeme 2026 so erweitert, dass es bei einem plötzlichen Anstieg falscher Bewertungen die Inhalte entfernt, neue Rezensionen vorübergehend pausiert, den Inhaber informiert und einen Hinweis im Profil anzeigt. Bei Erpressung können Sie zusätzlich Anzeige erstatten.",
        },
        {
          t: "p",
          text: "Ist Ihr Profil bereits gesperrt oder eingeschränkt, helfen die Artikel [Profil gesperrt](/blog/gbp-suspendiert-reaktivieren) und [Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden).",
        },
      ],
    },
    {
      id: "selbst-pruefen",
      title: "Erst sich selbst prüfen",
      answer:
        "Bevor Sie Wettbewerber melden, sollte Ihr eigenes Profil allen Regeln entsprechen. Wer meldet, zieht Aufmerksamkeit auf den Markt, auch auf sich selbst.",
      blocks: [
        {
          t: "table",
          caption: "Kurzprüfung des eigenen Profils",
          head: ["Frage", "Wenn nein"],
          rows: [
            ["Steht im Namen nur der echte Name?", "Zusätze entfernen, bevor es ein anderer meldet"],
            ["Gibt es an der Adresse ein dauerhaftes Schild und Personal zu den Öffnungszeiten?", "Bei Betrieben ohne Kundenverkehr Adresse ausblenden und Einzugsgebiet angeben"],
            ["Gibt es nur ein Profil je Standort?", "Duplikate zusammenführen oder entfernen lassen"],
            ["Bitten Sie alle Kunden ohne Gegenleistung um Bewertungen?", "Aktionen mit Rabatt oder Verlosung sofort beenden"],
            ["Beschreiben Ihre Kategorien, was Ihr Betrieb ist?", "Überflüssige Kategorien streichen"],
          ],
        },
        {
          t: "p",
          text: "Wenn Sie unsicher sind, ob Ihr Profil sauber ist oder ob ein Wettbewerber tatsächlich gegen Regeln verstößt, sehen wir uns beides im [kostenlosen Check](/de#check) an.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert es, bis Google gemeldeten Spam entfernt?",
      a: "Dafür gibt es keine feste Frist. Die Prüfung gemeldeter Rezensionen dauert laut Google in der Regel mehrere Tage. Beim Beschwerdeformular sagt Google keine Maßnahme zu und meldet keinen Status zurück. Prüfen Sie den Eintrag nach einigen Wochen erneut.",
    },
    {
      q: "Darf ich einen Wettbewerber mit Keywords im Namen melden?",
      a: "Ja. Steht im Profil ein anderer Name als auf Schild, Website und Briefpapier, verstößt das gegen Googles Richtlinien. Schlagen Sie in Maps den echten Namen als Änderung vor. Bei Betrugsverdacht nutzen Sie das Beschwerdeformular.",
    },
    {
      q: "Was tun bei gefälschten negativen Bewertungen?",
      a: "Melden Sie jede einzelne Rezension, dokumentieren Sie den Zeitpunkt und den Zusammenhang und antworten Sie öffentlich kurz und sachlich. Wird eine Rezension nicht entfernt, legen Sie einmalig Einspruch ein. Bei Erpressung zahlen Sie nicht.",
    },
    {
      q: "Steige ich im Ranking, wenn Spam-Einträge entfernt werden?",
      a: "Möglich, aber nicht sicher. Verschwindet ein Eintrag vor Ihnen, rücken die folgenden nach. Wie sich das bei Ihnen auswirkt, hängt von Entfernung, Relevanz und Bekanntheit der übrigen Betriebe ab.",
    },
    {
      q: "Kann ich viele Spam-Einträge auf einmal melden?",
      a: "Ja, über das Beschwerdeformular. Google empfiehlt, pro Meldung 10 bis 100 URLs einzureichen, einzeln oder als Tabelle. Das Formular gilt für betrügerische Angaben bei Name, Telefonnummer oder Website.",
    },
    {
      q: "Was kostet es, das eigene Profil absichern zu lassen?",
      a: "Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Dazu gehört die Prüfung, ob Ihr Profil den Richtlinien entspricht. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Richtlinien für die Präsentation Ihres Unternehmens auf Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Unternehmen auf Google Maps melden", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/16109801?hl=de" },
    { title: "Beschwerdeformular für Verstöße im geschäftlichen Verkehr", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/contact/business_redressal_form?hl=de" },
    { title: "Unangemessene Rezensionen in Ihrem Unternehmensprofil melden", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4596773?hl=de" },
    { title: "Einschränkungen von Unternehmensprofilen bei Richtlinienverstößen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14114287?hl=de" },
    { title: "New ways we’re protecting businesses on Maps (Trust & Safety 2025)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/maps/new-ways-were-protecting-businesses-on-maps/" },
    { title: "New ways AI helps keep business information trustworthy (Bilanz 2024)", publisher: "Google Blog", url: "https://blog.google/products/maps/google-business-profiles-ai-fake-reviews/" },
  ],
  related: [
    { slug: "duplicate-listing-entfernen", title: "Doppelte Einträge entfernen" },
    { slug: "negative-google-bewertungen", title: "Mit negativen Google-Bewertungen umgehen" },
    { slug: "gbp-suspendiert-reaktivieren", title: "Gesperrtes Profil reaktivieren" },
    { slug: "google-maps-seo-ranking-faktoren", title: "Google-Maps-Ranking-Faktoren" },
  ],
  cta: {
    title: "Ist Ihr Profil sauber und Ihr Markt fair?",
    text: "Wir prüfen Ihr Google-Profil auf Richtlinienverstöße und sehen uns die Einträge an, die bei Ihren wichtigsten Suchen vor Ihnen stehen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei konkrete Schritte. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
