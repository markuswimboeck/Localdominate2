import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ki-tools-local-seo",
  lang: "de",
  seoTitle: "KI-Tools für Local SEO: sicher nutzen im kleinen Betrieb",
  seoDescription:
    "Wie Sie ChatGPT, Claude, Gemini und Copilot für Bewertungsantworten, Profiltexte und Inhalte nutzen: Googles Regeln, Datenschutz und KI-Kompetenzpflicht.",
  h1: "KI-Tools für Local SEO: Wofür sie taugen, was Google erlaubt und was Datenschutz verlangt",
  kicker: "KI im Betrieb",
  lead:
    "Für Inhaber kleiner Betriebe, die KI-Assistenten für Bewertungsantworten, Profiltexte, Beiträge und Website-Inhalte einsetzen wollen. Sie erfahren, welche Aufgaben sich eignen, was Google zu KI-Texten und Bewertungsantworten schreibt, welche Daten nicht in ein KI-Werkzeug gehören und wie Sie die Arbeit im Team regeln.",
  answer:
    "KI-Assistenten wie ChatGPT, Claude, Gemini oder Copilot eignen sich für Entwürfe: Antworten auf Bewertungen, Profilbeschreibung, Beiträge, Gliederungen und die Auswertung vieler Bewertungen. Google verbietet KI-Texte nicht, nennt die Prüfung auf Richtigkeit aber entscheidend und zählt Massenseiten ohne Mehrwert zum Spam. Kundendaten gehören nicht in private Konten. Wer KI beruflich nutzt, muss außerdem für KI-Kompetenz im Team sorgen.",
  takeaways: [
    "Google bewertet Inhalte nach Nutzen, nicht nach Herstellungsweise. Viele Seiten mit KI ohne Mehrwert zu erzeugen, nennt Google ausdrücklich als Beispiel für Spam.",
    "Google empfiehlt selbst, alle KI-Inhalte von Hand auf Richtigkeit zu prüfen, auch Seitentitel, Beschreibungen und Alternativtexte.",
    "Bewertungsantworten sind öffentlich. Private Angaben über Kunden gehören weder in die Antwort noch in das KI-Werkzeug, mit dem Sie sie entwerfen.",
    "Ob Eingaben für das Training genutzt werden, hängt vom Tarif und von Einstellungen ab. OpenAI, Anthropic und Microsoft schreiben, dass ihre Geschäftstarife Eingaben standardmäßig nicht dafür nutzen.",
    "Seit dem 2. Februar 2025 gilt Artikel 4 der KI-Verordnung: Betriebe, die KI beruflich nutzen, müssen Maßnahmen für die KI-Kompetenz ihres Personals ergreifen.",
  ],
  publishedAt: "2026-01-10",
  updatedAt: "2026-10-12",
  readingTime: 13,
  sections: [
    {
      id: "wofuer-ki-taugt",
      title: "Wofür KI-Werkzeuge in der Local-SEO-Arbeit taugen",
      answer:
        "KI-Assistenten sparen Zeit bei Entwürfen und beim Sortieren von Text. Die Fakten über Ihren Betrieb, also Zeiten, Preise, Leistungen und Einzugsgebiet, müssen von Ihnen kommen und von Ihnen geprüft werden.",
      blocks: [
        {
          t: "p",
          text: "Ein Sprachmodell kennt Ihren Betrieb nicht. Google beschreibt das nüchtern: Generative Modelle rufen keine Fakten ab, sie sagen eine wahrscheinliche Wortfolge voraus. Für die tägliche Arbeit heißt das: Sie liefern die Fakten, das Werkzeug liefert einen Vorschlag für Aufbau und Formulierung.",
        },
        {
          t: "table",
          caption: "Typische Aufgaben, was KI beiträgt und was Sie selbst prüfen",
          head: ["Aufgabe", "Wobei KI hilft", "Was Sie prüfen"],
          rows: [
            ["Antworten auf Bewertungen", "Entwurf mit passendem Ton, auch bei Kritik", "Sachliche Richtigkeit, keine privaten Angaben, keine Werbung"],
            ["Beschreibung im Unternehmensprofil", "Verdichtung Ihrer Stichpunkte auf 750 Zeichen", "Jede Aussage stimmt, keine Links, kein Preisangebot"],
            ["Beiträge im Unternehmensprofil", "Kurztexte zu Neuigkeiten, Saison, Veranstaltungen", "Datum, Uhrzeit, Ort und Bedingungen"],
            ["Auswertung vieler Bewertungen", "Wiederkehrende Themen sortieren und zählen", "Stichprobe gegen die Originaltexte"],
            ["Website-Inhalte", "Gliederung, Fragenliste, erster Entwurf", "Fakten, eigene Erfahrung, Ortsbezug, Rechtliches"],
            ["Ideen für Suchbegriffe", "Formulierungen, wie Kunden fragen könnten", "Abgleich mit echten Daten aus der Search Console"],
          ],
        },
        {
          t: "note",
          label: "Keine Werkzeugrangliste",
          text: "Wir vergleichen keine Anbieter und nennen keine Preise. Entscheidend sind Tarif, Datenschutzeinstellungen und Ihre Prüfroutine, nicht der Name des Werkzeugs.",
        },
      ],
    },
    {
      id: "google-regeln",
      title: "Was Google zu KI-generierten Inhalten sagt",
      answer:
        "Google verbietet KI-Inhalte nicht. Sie müssen dieselben Anforderungen erfüllen wie jeder andere Inhalt, und Google empfiehlt ausdrücklich, alle KI-Inhalte von Hand auf Richtigkeit zu prüfen. Viele Seiten ohne Mehrwert mit KI zu erzeugen, gilt als Spam.",
      blocks: [
        {
          t: "p",
          text: "In seiner Anleitung zu generativer KI auf Websites (Stand 1. Oktober 2026) schreibt Google, dass KI-Inhalte die Anforderungen der Google-Suche erfüllen müssen. Es sei entscheidend, alle KI-generierten Inhalte von Hand auf Richtigkeit zu prüfen. Das gilt laut Google auch für Metadaten wie Seitentitel, Meta-Beschreibungen, strukturierte Daten und Alternativtexte, weil sie in den Suchergebnissen erscheinen können.",
        },
        {
          t: "p",
          text: "Die Grenze zieht Google in den Spam-Richtlinien unter dem Punkt **Missbrauch skalierter Inhalte**. Als Beispiel nennt Google ausdrücklich, mit generativer KI viele Seiten zu erzeugen, ohne Nutzern einen Mehrwert zu bieten. Für lokale Betriebe ist das typische Risiko die Serie fast gleicher Ortsseiten, bei der nur der Stadtname wechselt.",
        },
        {
          t: "ul",
          items: [
            "**Erlaubt und sinnvoll**: eine Leistungsseite, die Sie mit KI gliedern, mit eigenen Fakten füllen und gegenlesen.",
            "**Riskant**: dreißig Seiten „Elektriker in [Ort]“ mit demselben Text, die ein Werkzeug in einer Stunde erzeugt hat.",
            "**Empfohlen von Google**: Lesern erklären, wie ein Inhalt entstanden ist, wenn Automatisierung eine wesentliche Rolle spielt.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie Seiten so aufbauen, dass Suchsysteme und KI-Antworten sie richtig wiedergeben, beschreibt [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen). Eine Vorlage für den Auftrag an Texter oder Werkzeug finden Sie im [GEO-Content-Briefing](/blog/geo-content-briefing-vorlage-2026).",
        },
      ],
    },
    {
      id: "bewertungsantworten",
      title: "Antworten auf Bewertungen mit KI entwerfen",
      answer:
        "Lassen Sie die KI einen Entwurf schreiben und geben Sie dafür nur den Bewertungstext und Ihre Fakten ein, keine Kundendaten aus Ihren Unterlagen. Google empfiehlt kurze, höfliche, nicht werbliche Antworten und verbietet, private Angaben der Bewertenden zu veröffentlichen.",
      blocks: [
        {
          t: "p",
          text: "Ihre Antwort wird laut Google nach Prüfung öffentlich unter der Bewertung angezeigt. Googles Tipps: höflich bleiben, kurz schreiben, nicht jedem dasselbe Danke schicken, keine Angebote in die Antwort setzen. Bei Kritik: niemals private Informationen der bewertenden Person teilen, keine persönlichen Angriffe, Fehler eingestehen und um Kontakt per Telefon oder E-Mail bitten.",
        },
        {
          t: "steps",
          items: [
            { title: "Bewertung kopieren", text: "Nur den öffentlichen Text der Bewertung in das Werkzeug geben. Keine Rechnungsnummern, Termine, Diagnosen oder Telefonnummern aus Ihrem System." },
            { title: "Fakten liefern", text: "Schreiben Sie in zwei Zeilen, was tatsächlich passiert ist und was Sie geändert haben, zum Beispiel „Wartezeit am Samstag, seit September zweite Kraft an der Kasse“." },
            { title: "Rahmen vorgeben", text: "Zum Beispiel: „Antworte in höchstens vier Sätzen, sachlich, ohne Werbung, ohne Rabattangebot, bitte bei Kritik um Kontakt über unsere Telefonnummer im Profil.“" },
            { title: "Entwurf prüfen", text: "Stimmt jede Aussage? Klingt es nach Ihrem Betrieb? Steht nichts darin, was Sie über die Person wissen, das sie nicht selbst geschrieben hat?" },
            { title: "Selbst veröffentlichen", text: "Die Antwort geben Sie im Unternehmensprofil selbst frei. So bleibt eine Person verantwortlich für jeden Text." },
          ],
        },
        {
          t: "note",
          label: "Praxen, Kanzleien, Beratungsberufe",
          text: "Wer einer Schweigepflicht unterliegt, darf schon die Tatsache, dass jemand Patient oder Mandant ist, nicht bestätigen. Das gilt für die Antwort und ebenso für das, was Sie in ein KI-Werkzeug eingeben. Hinweise dazu stehen in [Negative Google-Bewertungen](/blog/negative-google-bewertungen#berufsgeheimnis).",
        },
        {
          t: "p",
          text: "Laut Search Engine Land (20. März 2026) testet Google KI-Vorschläge für Antworten direkt im Unternehmensprofil, gesehen in den USA, Brasilien und Indien, in Europa kaum. Eine Hilfeseite von Google dazu haben wir nicht gefunden. Die Verwaltung des Profils über die Gemini-Web-App, die ebenfalls Antwortentwürfe schreibt, ist laut Google im EWR und im Vereinigten Königreich nicht verfügbar. Mehr dazu in [Google-Unternehmensprofil und KI](/blog/unternehmensprofil-ki-funktionen-2026#ki-fuer-inhaber).",
        },
      ],
    },
    {
      id: "profil-und-beitraege",
      title: "Beschreibung und Beiträge im Unternehmensprofil",
      answer:
        "Für die Profilbeschreibung gibt Google klare Grenzen vor: höchstens 750 Zeichen, keine Links, kein HTML, Schwerpunkt auf dem Betrieb statt auf Aktionen und Preisen. Ein KI-Entwurf muss diese Regeln einhalten und darf nur Fakten enthalten, die stimmen.",
      blocks: [
        {
          t: "p",
          text: "Google bietet in ausgewählten Regionen und Sprachen selbst einen KI-Vorschlag für die Beschreibung an, der Profilangaben und andere Quellen wie Ihre Website nutzt. Google schreibt dazu, dass die Funktion kreativen Text erzeugt und Sie ihn auf Richtigkeit prüfen sollten. Dasselbe gilt für jeden Entwurf aus einem anderen Werkzeug.",
        },
        {
          t: "table",
          caption: "Googles Vorgaben für die Profilbeschreibung und was Sie dem Werkzeug mitgeben",
          head: ["Vorgabe von Google", "Anweisung an das KI-Werkzeug"],
          rows: [
            ["Höchstens 750 Zeichen", "„Höchstens 700 Zeichen“, damit Raum für Ihre Korrekturen bleibt"],
            ["Keine URLs, kein HTML", "„Keine Links, keine Formatierung“"],
            ["Betrieb statt Aktionen, Preise, Rabatte", "„Keine Angebote, keine Preise, keine Superlative“"],
            ["Was Sie anbieten, was Sie besonders macht, seit wann es Sie gibt", "Diese drei Punkte als Stichworte vorgeben"],
          ],
        },
        {
          t: "p",
          text: "Bitten Sie das Werkzeug nicht, „Keywords einzubauen“. Ein Text, der wie eine Suchbegriffsliste klingt, widerspricht Googles Vorgabe, den Betrieb zu beschreiben. Leistungen, Werbesprüche oder Ortsangaben im Unternehmensnamen sind nach Googles Richtlinien ohnehin nicht erlaubt. Die Grundlagen der Profilpflege stehen in [Google-Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
        {
          t: "p",
          text: "Für **Beiträge** im Profil ist KI ein guter Helfer bei kurzen Texten zu Saisonstart, Betriebsferien oder Veranstaltungen. Laut Googles Richtlinie für Beiträge können Beiträge mit nicht bestätigten Kontaktdaten entfernt werden. Lassen Sie Telefonnummern deshalb aus dem Text und nutzen Sie die Schaltfläche „Anrufen“. Hotels dürfen laut Google keine Beiträge mit Angeboten oder Rabatten erstellen.",
        },
      ],
    },
    {
      id: "bewertungen-auswerten",
      title: "Bewertungen auswerten",
      answer:
        "KI kann aus vielen Bewertungen wiederkehrende Themen herausarbeiten, etwa Wartezeit, Parken oder Freundlichkeit. Entfernen Sie vorher Namen, prüfen Sie das Ergebnis an einer Stichprobe der Originaltexte und nutzen Sie es für Verbesserungen im Betrieb, nicht als Zahlenbeleg.",
      blocks: [
        {
          t: "p",
          text: "Ein Hotel mit Hunderten Bewertungen hat mehr Text, als jemand regelmäßig liest. Ein KI-Assistent kann ihn nach Themen sortieren. Wenn viele Gäste nach Parkplätzen fragen, gehört die Antwort auf die Anfahrtsseite.",
        },
        {
          t: "ol",
          items: [
            "Bewertungstexte sammeln und **Namen der Bewertenden entfernen**. Laut der deutschen Datenschutzkonferenz reicht es aber regelmäßig nicht, nur Namen zu löschen, weil sich der Personenbezug auch aus dem Zusammenhang ergeben kann.",
            "Feste Frage stellen: „Welche fünf Themen werden am häufigsten gelobt, welche fünf kritisiert? Nenne zu jedem Thema zwei wörtliche Beispiele.“",
            "Die Beispiele im Original nachschlagen. Fehlt ein Zitat oder ist es verändert, ist die ganze Auswertung zu prüfen.",
            "Ergebnis in Maßnahmen übersetzen: Abläufe im Betrieb, fehlende Angaben auf der Website oder im Profil.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Häufigkeiten, die ein Sprachmodell nennt, sind Schätzungen und können falsch sein. Nutzen Sie die Auswertung als Hinweis, wo Sie genauer hinsehen, nicht als Statistik für Werbung oder Berichte.",
        },
      ],
    },
    {
      id: "inhalte-planen",
      title: "Website-Inhalte planen und entwerfen",
      answer:
        "Für Website-Inhalte ist KI nützlich bei Fragenlisten, Gliederungen und ersten Entwürfen. Suchvolumen, lokale Besonderheiten und Ihre Erfahrung kann sie nicht liefern. Die Daten kommen aus der Search Console und aus Kundengesprächen, die Fakten von Ihnen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Fragen sammeln", text: "Notieren Sie zwei Wochen lang, was Kunden am Telefon und an der Theke fragen. Lassen Sie die KI daraus weitere Formulierungen ableiten, wie Menschen dieselbe Frage stellen." },
            { title: "Mit echten Daten abgleichen", text: "Prüfen Sie in der Search Console, mit welchen Suchanfragen Ihre Seiten schon erscheinen. Ein Sprachmodell kennt keine Suchvolumen für Ihren Ort. Siehe [Local SEO Keywords finden](/blog/local-seo-keywords-finden)." },
            { title: "Gliederung erstellen lassen", text: "Thema, Zielgruppe und Fakten vorgeben; die Hauptfrage soll im ersten Satz beantwortet werden." },
            { title: "Selbst füllen", text: "Preise, Abläufe, Beispiele aus Ihrem Alltag, Ortsangaben und Bedingungen schreiben Sie selbst oder geben sie als Stichpunkte vor." },
            { title: "Gegenlesen", text: "Jede Zahl, jeden Namen, jede Rechtsaussage prüfen. Auch Seitentitel und Meta-Beschreibung, denn Google nennt diese ausdrücklich." },
          ],
        },
        {
          t: "note",
          label: "Veralteter Ratschlag",
          text: "Ältere Anleitungen empfehlen, mit KI lange FAQ-Listen zu erzeugen und als FAQ-Markup für Sternchen oder Aufklappfelder in der Suche auszuzeichnen. Diese Darstellung zeigt Google laut eigener Ankündigung seit dem 7. Mai 2026 nicht mehr. Häufige Fragen auf der Website sind trotzdem sinnvoll, als normaler Text mit echten Fragen Ihrer Kunden.",
        },
      ],
    },
    {
      id: "bilder",
      title: "Bilder: echte Fotos statt generierter",
      answer:
        "Für das Unternehmensprofil und die Website zählen echte Fotos von Räumen, Team und Arbeit. Generierte Bilder, die wie Ihr Betrieb aussehen, aber nicht Ihr Betrieb sind, führen Kunden in die Irre. Für Grafiken und Illustrationen in Beiträgen können sie passen, wenn sie erkennbar keine Fotos sind.",
      blocks: [
        {
          t: "p",
          text: "Googles Richtlinien für Beiträge in Maps behandeln Inhalte als problematisch, die den Ort oder das Produkt nicht zutreffend darstellen. Eine eigene Regel zu KI-Bildern im Unternehmensprofil haben wir in Googles Hilfe nicht gefunden. In der Schweiz müssen laut dem Eidgenössischen Datenschutzbeauftragten manipulierte Bilder identifizierbarer Personen stets deutlich als solche erkennbar sein.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ein generiertes „Teamfoto“ weckt Erwartungen, die der Besuch nicht erfüllt. Nutzen Sie KI eher für Zuschnitt, Helligkeit und Textgrafiken. Was Google zu Fotos im Profil empfiehlt, steht in [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
      ],
    },
    {
      id: "datenschutz",
      title: "Datenschutz: was in welches Werkzeug darf",
      answer:
        "Personenbezogene Daten von Kunden, Patienten oder Mitarbeitenden gehören nicht in private KI-Konten. Wer solche Daten verarbeiten will, braucht einen Vertrag nach Art. 28 DSGVO mit dem Anbieter; die Datenschutzkonferenz empfiehlt Anwendungen ohne Training mit Ihren Eingaben. Für Texte ohne Personenbezug sollten Sie die Trainingseinstellung zumindest bewusst wählen.",
      blocks: [
        {
          t: "p",
          text: "In Deutschland und Österreich gilt die DSGVO, in der Schweiz das Datenschutzgesetz, das laut dem Eidgenössischen Datenschutzbeauftragten direkt auf KI anwendbar ist. Die deutsche Datenschutzkonferenz hat in ihrer Orientierungshilfe zu KI (Mai 2024) Punkte zusammengestellt, die für jeden kleinen Betrieb passen:",
        },
        {
          t: "ul",
          items: [
            "**Dienstliche Konten statt privater**: Beschäftigte sollen nicht eigenständig mit privaten Konten und Geräten arbeiten.",
            "**Kein Training mit Ihren Eingaben**: Vorzuziehen sind Anwendungen, die Ein- und Ausgaben nicht zum Training verwenden.",
            "**Vertrag mit dem Anbieter**: Bei einem externen Cloud-Anbieter ist eine Vereinbarung nach Art. 28 Abs. 3 DSGVO abzuschließen, wenn personenbezogene Daten verarbeitet werden.",
            "**Klare Weisungen**: erlaubte und verbotene Einsatzzwecke schriftlich festlegen und dokumentieren.",
            "**Ergebnisse prüfen**: Ausgaben mit Personenbezug kritisch hinterfragen, bevor sie weiterverwendet werden.",
          ],
        },
        {
          t: "table",
          caption: "Was die Anbieter zur Nutzung Ihrer Eingaben schreiben (Stand 11. Oktober 2026)",
          head: ["Werkzeug", "Private Konten", "Geschäftstarife"],
          rows: [
            ["ChatGPT (OpenAI)", "Training über „Das Modell für alle verbessern“ in den Datenkontrollen abschaltbar; temporäre Chats bis zu 30 Tage gespeichert", "Business, Enterprise, Edu und API laut OpenAI standardmäßig ohne Training; Auftragsverarbeitungsvertrag wird unterstützt"],
            ["Claude (Anthropic)", "Free, Pro und Max: Nutzer entscheiden seit den Verbraucherbedingungen vom August 2025 selbst; bei Zustimmung bis zu fünf Jahre Speicherung", "Kommerzielle Produkte wie Claude for Work und API laut Anthropic ohne Training"],
            ["Gemini (Google)", "Bei aktivierter Einstellung „Aktivitäten speichern“ Nutzung auch zum Training; ein Teil der Chats wird von Menschen gelesen; Google rät, keine vertraulichen Daten einzugeben", "Nicht in diesem Artikel geprüft"],
            ["Copilot (Microsoft)", "Training außer bei bestimmten Nutzern oder nach Widerspruch, Wirkung bis zu 30 Tage", "Mit Organisationskonto (Entra ID) laut Microsoft vom Training ausgenommen"],
          ],
        },
        {
          t: "p",
          text: "Die Anbieter ändern ihre Bedingungen regelmäßig. Prüfen Sie die Einstellungen beim Einrichten und danach mindestens einmal im Jahr.",
        },
        {
          t: "note",
          label: "Kein Rechtsrat",
          text: "Dieser Abschnitt fasst Behördenhinweise und Anbieterseiten zusammen, Stand 11. Oktober 2026. Ob Ihr konkreter Einsatz zulässig ist, klären Sie mit Ihrer Datenschutzberatung. Für Gesundheitsdaten und Daten, die einer Schweigepflicht unterliegen, gelten strengere Regeln.",
        },
      ],
    },
    {
      id: "regeln-im-team",
      title: "KI-Kompetenz und Regeln im Team",
      answer:
        "Seit dem 2. Februar 2025 müssen Betriebe, die KI beruflich nutzen, Maßnahmen für die KI-Kompetenz ihres Personals ergreifen. Laut EU-Kommission gilt das auch, wenn Beschäftigte ChatGPT für Werbetexte oder Übersetzungen verwenden. Ein Zertifikat ist laut EU-Kommission nicht nötig, Schulungen können intern dokumentiert werden.",
      blocks: [
        {
          t: "p",
          text: "Die EU-Kommission nennt als Beispiel für Risiken, über die Beschäftigte Bescheid wissen sollen, ausdrücklich Halluzinationen, also erfundene Angaben, die überzeugend klingen. Seit der Änderung durch den digitalen Omnibus am 27. Juli 2026 verlangt Artikel 4 kein bestimmtes Kompetenzniveau mehr, die Pflicht zu Maßnahmen bleibt. Die Einzelheiten und einen Plan in fünf Schritten finden Sie in [KI-Kompetenzpflicht nach Art. 4 KI-Verordnung](/blog/ki-kompetenzpflicht-art-4-ki-verordnung#plan-fuer-kmu).",
        },
        {
          t: "steps",
          items: [
            { title: "Werkzeuge festlegen", text: "Welche KI-Werkzeuge im Betrieb genutzt werden, mit welchem Konto und welchem Tarif." },
            { title: "Datenregel aufschreiben", text: "Was nie eingegeben wird: Namen und Kontaktdaten von Kunden, Gesundheitsdaten, Verträge, Passwörter." },
            { title: "Freigabe regeln", text: "Wer KI-Texte prüft, bevor sie öffentlich werden: Bewertungsantworten, Beiträge, Website-Texte." },
            { title: "Kurz schulen", text: "Eine halbe Stunde mit Beispielen aus Ihrem Betrieb: was gut funktioniert, wo die KI falsch lag, welche Regeln gelten." },
            { title: "Dokumentieren", text: "Datum, Teilnehmende, Inhalt. Eine solche interne Aufzeichnung nennt die EU-Kommission als möglichen Nachweis." },
          ],
        },
        {
          t: "p",
          text: "Eine Einführung im Team Schritt für Schritt zeigt am Beispiel eines Anbieters [Claude im Team einführen](/blog/claude-im-team-einfuehren). Die Schritte gelten auch für andere Werkzeuge.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Darf ich Antworten auf Google-Bewertungen mit KI schreiben?",
      a: "Ja, Google verbietet das nicht. Es gelten dieselben Regeln wie für jede Antwort: höflich, kurz, nicht werblich und ohne private Angaben über die bewertende Person. Prüfen und veröffentlichen Sie jede Antwort selbst.",
    },
    {
      q: "Erkennt und bestraft Google KI-Texte?",
      a: "Google bewertet nach Nutzen und Qualität, nicht nach der Herstellungsweise. Als Spam gilt, mit KI viele Seiten ohne Mehrwert zu erzeugen. Google empfiehlt außerdem, alle KI-Inhalte von Hand auf Richtigkeit zu prüfen.",
    },
    {
      q: "Darf ich Kundendaten in ChatGPT, Claude oder Gemini eingeben?",
      a: "In ein privates Konto nicht. Für personenbezogene Daten brauchen Sie einen Geschäftstarif mit Auftragsverarbeitungsvertrag und eine Prüfung durch Ihre Datenschutzberatung. Für Bewertungsantworten und Profiltexte sind Kundendaten aus Ihren Unterlagen ohnehin nicht nötig.",
    },
    {
      q: "Darf KI Bewertungen für meinen Betrieb schreiben?",
      a: "Nein. Bewertungen müssen von echten Kunden über echte Erlebnisse stammen. Google verbietet gefälschte und gekaufte Bewertungen, Bewertungen aus einem Interessenkonflikt und Belohnungen für Bewertungen. Wie Sie richtig um Bewertungen bitten, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen#regeln).",
    },
    {
      q: "Welches KI-Tool ist das beste für Local SEO?",
      a: "Eine belastbare Rangliste gibt es nicht, und für Entwürfe eignen sich die großen Assistenten ähnlich. Wichtiger sind ein Tarif, der Ihre Eingaben nicht zum Training nutzt, ein dienstliches Konto und eine feste Prüfroutine im Team.",
    },
  ],
  sources: [
    { title: "Leitfaden zur Verwendung generativer KI-Inhalte auf Ihrer Website (Stand 1. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" },
    { title: "Spam-Richtlinien für die Google-Websuche: Missbrauch skalierter Inhalte (Stand 28. August 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { title: "FAQ-Rich-Results: Einstellung zum 7. Mai 2026 (Änderungsprotokoll)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/faqpage" },
    { title: "Guidelines for representing your business on Google", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/3038177?hl=en" },
    { title: "Manage customer reviews", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/3474050?hl=en" },
    { title: "Tips to get more reviews (Antworten auf Bewertungen)", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/3474122?hl=en" },
    { title: "Edit your Business Profile (Beschreibung)", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/3039617?hl=en" },
    { title: "Manage your Business Profile description", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/13682007?hl=en" },
    { title: "Business Profile photos, videos & posts content policy", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/7213077?hl=en" },
    { title: "Manage your Business Profile on Google with the Gemini web app", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/17142585?hl=en" },
    { title: "Prohibited & restricted content", publisher: "Google Maps User Contributed Content Policy", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    { title: "Google Business Profile tests AI-generated replies to reviews (20. März 2026)", publisher: "Search Engine Land", url: "https://searchengineland.com/google-business-profile-test-reply-to-reviews-with-ai-472167" },
    { title: "Orientierungshilfe Künstliche Intelligenz und Datenschutz, Version 1.0 (6. Mai 2024)", publisher: "Datenschutzkonferenz (DSK)", url: "https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf" },
    { title: "Update: Geltendes Datenschutzgesetz ist auf KI direkt anwendbar (8. Mai 2025)", publisher: "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)", url: "https://www.edoeb.admin.ch/de/update-geltendes-datenschutzgesetz-ist-auf-ki-direkt-anwendbar" },
    { title: "AI literacy: questions and answers (Stand 27. Juli 2026)", publisher: "Europäische Kommission", url: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers" },
    { title: "Data Controls FAQ (deutsche Fassung)", publisher: "OpenAI Help Center", url: "https://help.openai.com/de-de/articles/7730893-data-controls-faq" },
    { title: "Business data privacy, security, and compliance", publisher: "OpenAI", url: "https://openai.com/business-data/" },
    { title: "Updates to Consumer Terms and Privacy Policy (28. August 2025)", publisher: "Anthropic", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
    { title: "Is my data used for model training? (Stand 18. August 2026)", publisher: "Anthropic Privacy Center", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
    { title: "Privacy Hub für Gemini-Apps", publisher: "Gemini-Apps-Hilfe (Google)", url: "https://support.google.com/gemini/answer/13594961?hl=de" },
    { title: "Privacy FAQ for Microsoft Copilot", publisher: "Microsoft Support", url: "https://support.microsoft.com/en-us/topic/privacy-faq-for-microsoft-copilot-27b3a435-8dc9-4b55-9a4b-58eeb9647a7f" },
  ],
  related: [
    { slug: "ki-kompetenzpflicht-art-4-ki-verordnung", title: "KI-Kompetenzpflicht nach Art. 4 KI-Verordnung" },
    { slug: "unternehmensprofil-ki-funktionen-2026", title: "Google-Unternehmensprofil und KI 2026" },
    { slug: "website-content-ai-suchmaschinen", title: "Website-Inhalte für KI-Suchmaschinen" },
    { slug: "geo-content-briefing-vorlage-2026", title: "GEO-Content-Briefing: die Vorlage" },
  ],
  cta: {
    title: "Passen Ihre Texte und Profile zusammen?",
    text: "Wir prüfen Ihr Google-Unternehmensprofil, Ihre Antworten auf Bewertungen und die wichtigsten Seiten Ihrer Website auf Richtigkeit und Übereinstimmung. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
