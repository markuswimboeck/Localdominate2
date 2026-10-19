import type { V4Article } from "../types";

const article: V4Article = {
  slug: "claude-im-team-einfuehren",
  lang: "de",
  seoTitle: "Claude im Team einführen: Schritt für Schritt",
  seoDescription:
    "So führen Sie Claude in Firmen mit 5 bis 200 Mitarbeitenden ein: Plan wählen, Projekte je Abteilung, Datenregeln, Schulung nach Art. 4 KI-VO und Zeit messen.",
  h1: "Claude im Team einführen: Schritt für Schritt",
  kicker: "KI im Unternehmen",
  lead:
    "Für Inhaber und Geschäftsführer von Unternehmen mit 5 bis 200 Mitarbeitenden, die Claude von Anthropic nicht nur lizenzieren, sondern wirklich in die tägliche Arbeit bringen wollen. Sie erfahren, welcher Plan passt, wie Sie Arbeitsbereich, Projekte und Vorlagen aufsetzen, welche Daten hinein dürfen und wie Sie den Nutzen messen.",
  answer:
    "Eine gute Einführung beginnt bei den Aufgaben, nicht bei den Lizenzen. Wählen Sie den passenden Plan, richten Sie Rollen und Freigaben ein, legen Sie **ein Projekt je Abteilung** mit Anweisungen und Wissen an und bauen Sie Vorlagen für wiederkehrende Arbeit. Dazu kommen schriftliche Datenregeln, eine Schulung nach Art. 4 KI-Verordnung und eine Zeitmessung vorher und nachher.",
  takeaways: [
    "Starten Sie mit einer Liste der Aufgaben, die Claude übernehmen oder vorbereiten soll. Die Lizenz ist der kleinste Teil der Einführung.",
    "Der Team-Plan ist laut Anthropic für mindestens fünf Mitglieder gedacht. Enterprise ergänzt vor allem Sicherheits-, Compliance- und Verwaltungsfunktionen.",
    "Projekte je Abteilung mit festen Anweisungen und geprüftem Wissen sorgen dafür, dass nicht jeder für sich allein promptet.",
    "Schreiben Sie vor dem Start auf, welche Daten in Claude dürfen und welche nicht. Ohne Regeln hören die Vorsichtigen auf und die Sorglosen machen weiter.",
    "Art. 4 der KI-Verordnung verpflichtet Unternehmen, die KI einsetzen, seit dem 2. Februar 2025 zu Maßnahmen für die KI-Kompetenz ihres Personals.",
    "Messen Sie die Zeit für zwei oder drei Aufgaben vor und nach der Einführung. Nur so wissen Sie, ob sich der Aufwand lohnt.",
  ],
  publishedAt: "2026-10-10",
  updatedAt: "2026-10-10",
  readingTime: 13,
  sections: [
    {
      id: "vor-dem-start",
      title: "Vor dem Start: Aufgaben statt Lizenzen",
      answer:
        "Klären Sie zuerst, welche Aufgaben Claude übernehmen oder vorbereiten soll und wer davon betroffen ist. Erst danach lohnt sich die Frage nach Plan und Anzahl der Plätze.",
      blocks: [
        {
          t: "p",
          text: "Viele Einführungen beginnen mit einem Lizenzkauf und einer kurzen Vorführung. Danach nutzt jeder Claude so, wie er es gerade versteht. Ein paar Wochen später ist unklar, ob sich etwas verbessert hat. Der bessere Weg beginnt eine Ebene tiefer: bei den einzelnen Aufgaben einer Rolle.",
        },
        {
          t: "p",
          text: "Nehmen Sie sich zwei oder drei Rollen vor, zum Beispiel Vertriebsinnendienst, Marketing und Buchhaltung. Schreiben Sie für jede Rolle die wiederkehrenden Aufgaben einer typischen Woche auf und schätzen Sie die Stunden. Markieren Sie dann jede Aufgabe mit einer von drei Kategorien.",
        },
        {
          t: "table",
          caption: "Drei Kategorien für jede Aufgabe",
          head: ["Kategorie", "Bedeutung", "Beispiele"],
          rows: [
            ["KI erledigt es", "Claude liefert ein Ergebnis, ein Mensch prüft stichprobenartig", "Protokolle zusammenfassen, Daten aus Dokumenten in eine Tabelle übertragen"],
            ["KI bereitet vor", "Claude schreibt einen Entwurf, ein Mensch entscheidet und gibt frei", "Angebotstexte, Antworten auf Anfragen, Berichte"],
            ["Bleibt menschlich", "Die Aufgabe hängt an Beziehung, Verantwortung oder Urteil", "Verhandlungen, Personalgespräche, Freigaben"],
          ],
        },
        {
          t: "p",
          text: "Diese Liste ist die Grundlage für alles Weitere: Sie zeigt, welche Abteilungen ein Projekt brauchen, welche Vorlagen sich lohnen und was Sie später messen. Eine erste Version für eine Rolle können Sie mit der [Aufgaben-Landkarte](/de/ki#task-map) auf unserer KI-Seite erstellen.",
        },
      ],
    },
    {
      id: "plan-waehlen",
      title: "Den passenden Plan wählen: Team oder Enterprise",
      answer:
        "Für die meisten Unternehmen mit 5 bis 150 Personen ist der Team-Plan der Ausgangspunkt. Enterprise lohnt sich, wenn Sie erweiterte Sicherheits- und Compliance-Funktionen brauchen oder mehr Plätze benötigen.",
      blocks: [
        {
          t: "p",
          text: "Anthropic beschreibt auf seiner Hilfeseite den **Team-Plan** als bezahlten Plan für Teams mit mindestens fünf Mitgliedern und höchstens 150 Plätzen. Es gibt Standard- und Premium-Plätze, die sich kombinieren lassen. Premium-Plätze bieten deutlich mehr Nutzung für Personen, die sehr viel mit Claude arbeiten. Der **Enterprise-Plan** enthält alles aus dem Team-Plan und ergänzt vor allem Funktionen für Sicherheit, Compliance und Verwaltung.",
        },
        {
          t: "table",
          caption: "Team und Enterprise im Vergleich (Stand Oktober 2026, laut Hilfeseiten von Anthropic)",
          head: ["Merkmal", "Team", "Enterprise"],
          rows: [
            ["Größe", "Mindestens 5 Mitglieder, höchstens 150 Plätze", "Mindestens 20 Plätze im Selbstkauf, 50 Plätze über den Vertrieb"],
            ["Anmeldung und Rollen", "Single Sign-On, Domain Capture, rollenbasierte Berechtigungen", "Zusätzlich SCIM für die automatische Benutzerverwaltung"],
            ["Kosten steuern", "Ausgabengrenzen für Organisation und einzelne Nutzer", "Ausgabengrenzen, Nutzung wird zusätzlich zum Platzpreis nach API-Tarifen abgerechnet"],
            ["Nachvollziehbarkeit", "Nutzungsauswertungen für Inhaber", "Zusätzlich Audit-Logs, Compliance-API und Analytics-API"],
            ["Daten", "Gemeinsame Projekte, Konnektoren zu gängigen Diensten", "Zusätzlich eigene Aufbewahrungsfristen und kundenverwaltete Schlüssel"],
          ],
        },
        {
          t: "p",
          text: "Preise, Platzgrößen und Funktionsumfang ändert Anthropic von Zeit zu Zeit. Prüfen Sie den aktuellen Stand vor dem Kauf auf der Hilfeseite von Anthropic und rechnen Sie mit der Zahl der Personen, die Claude tatsächlich regelmäßig nutzen werden, nicht mit der Zahl aller Mitarbeitenden.",
        },
        {
          t: "note",
          label: "Faustregel für die Auswahl",
          text: "Brauchen Sie keine Audit-Logs, keine eigenen Aufbewahrungsfristen und keine automatische Benutzerverwaltung aus Ihrem Verzeichnisdienst, reicht in der Regel der Team-Plan. Ein Wechsel ist später möglich. Entscheidend ist, dass Sie die Fragen aus dem Abschnitt zu Datenregeln vorher geklärt haben.",
        },
      ],
    },
    {
      id: "arbeitsbereich-einrichten",
      title: "Arbeitsbereich und Verwaltung einrichten",
      answer:
        "Bevor die ersten Mitarbeitenden eingeladen werden, sollten Rollen, Anmeldung, Freigaben und Kostengrenzen stehen. Das dauert wenige Stunden und erspart später viele Korrekturen.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Verantwortliche festlegen",
              text: "Bestimmen Sie eine Person als Inhaber der Organisation und eine Vertretung. Sie verwalten Plätze, Abrechnung und Einstellungen und sehen die Nutzungsauswertungen.",
            },
            {
              title: "Anmeldung regeln",
              text: "Nutzen Sie, wenn vorhanden, Single Sign-On über Ihr bestehendes Firmenkonto und Domain Capture, damit Konten mit Ihrer Firmen-Domain in der Organisation landen und nicht als private Konten nebenher entstehen.",
            },
            {
              title: "Rollen und Rechte vergeben",
              text: "Geben Sie Verwaltungsrechte nur wenigen Personen. Alle anderen arbeiten als normale Mitglieder in den Projekten, die für sie freigegeben sind.",
            },
            {
              title: "Freigaben für Projekte festlegen",
              text: "Entscheiden Sie, ob Projekte für die ganze Organisation sichtbar sein dürfen oder nur für einzelne Personen. Inhaber können das Teilen von Projekten auch ganz abschalten.",
            },
            {
              title: "Kostengrenzen setzen",
              text: "Legen Sie Ausgabengrenzen für die Organisation und bei Bedarf für einzelne Nutzer fest, besonders wenn zusätzliche Nutzungsguthaben aktiviert sind.",
            },
            {
              title: "Konnektoren bewusst freischalten",
              text: "Verbindungen zu E-Mail, Kalender oder Dateiablage sind praktisch, erweitern aber, worauf Claude zugreifen kann. Schalten Sie nur frei, was die Datenregeln erlauben.",
            },
          ],
        },
        {
          t: "p",
          text: "Halten Sie diese Entscheidungen auf einer Seite schriftlich fest. Das hilft bei neuen Mitarbeitenden, bei Rückfragen Ihres Datenschutzbeauftragten und als Teil der Dokumentation zur KI-Kompetenz.",
        },
      ],
    },
    {
      id: "projekte-je-abteilung",
      title: "Ein Projekt je Abteilung mit Anweisungen und Wissen",
      answer:
        "Projekte sind eigene Arbeitsbereiche in Claude mit festen Anweisungen und einer Wissensbasis. Ein Projekt je Abteilung sorgt dafür, dass alle mit demselben Stand und denselben Vorgaben arbeiten.",
      blocks: [
        {
          t: "p",
          text: "Laut Anthropic hat jedes Projekt einen eigenen Chatverlauf, eigene **Anweisungen** und eine eigene **Wissensbasis** aus hochgeladenen Dokumenten. In Team und Enterprise lassen sich Projekte mit Kolleginnen und Kollegen teilen, entweder mit Leserechten (ansehen und darin chatten) oder mit Bearbeitungsrechten (Anweisungen und Wissen ändern, Mitglieder verwalten).",
        },
        {
          t: "h3",
          text: "Was in die Anweisungen gehört",
        },
        {
          t: "ul",
          items: [
            "**Rolle und Zweck:** für wen das Projekt ist und welche Aufgaben darin erledigt werden.",
            "**Ton und Form:** Anrede (Sie oder du), Sprache, typische Länge, Aufbau von E-Mails oder Berichten.",
            "**Grenzen:** was Claude nicht tun soll, etwa Preise erfinden, rechtliche Zusagen machen oder Zahlen ohne Quelle nennen.",
            "**Prüfschritt:** dass jeder Entwurf vor dem Versand von einem Menschen gelesen wird.",
          ],
        },
        {
          t: "h3",
          text: "Was in die Wissensbasis gehört",
        },
        {
          t: "ul",
          items: [
            "Aktuelle Produkt- und Leistungsbeschreibungen, Preislisten, Geschäftsbedingungen.",
            "Gute Beispiele: zwei oder drei Angebote, Antworten oder Berichte, die so aussehen sollen wie das Ziel.",
            "Interne Richtlinien, die für die Abteilung gelten, zum Beispiel Schreibregeln oder Freigabewege.",
          ],
        },
        {
          t: "note",
          label: "Eine Person pflegt das Projekt",
          text: "Geben Sie jedem Projekt eine verantwortliche Person mit Bearbeitungsrechten. Alle anderen bekommen Leserechte. So bleibt die Wissensbasis aktuell, und veraltete Preislisten oder Entwürfe landen nicht unbemerkt darin.",
        },
      ],
    },
    {
      id: "vorlagen-und-skills",
      title: "Vorlagen und Skills für wiederkehrende Arbeit",
      answer:
        "Vorlagen halten fest, wie eine wiederkehrende Aufgabe gut gelöst wird. Skills gehen einen Schritt weiter: Sie bündeln Anweisungen, Beispiele und bei Bedarf Skripte, die Claude bei passenden Aufgaben selbst lädt.",
      blocks: [
        {
          t: "p",
          text: "Die einfachste Form ist eine Sammlung geprüfter Vorlagen im Projekt: „Antwort auf Preisanfrage“, „Wochenbericht aus diesen Zahlen“, „Protokoll aus Stichpunkten“. Jede Vorlage nennt, welche Angaben der Nutzer liefern muss und wie das Ergebnis aussehen soll.",
        },
        {
          t: "p",
          text: "Anthropic beschreibt **Skills** als Ordner mit Anweisungen, Skripten und Ressourcen, die Claude bei Bedarf lädt, um bestimmte Aufgaben einheitlicher zu erledigen. Eigene Skills lassen sich in Markdown schreiben. In Team und Enterprise können Inhaber Skills für alle Mitglieder der Organisation bereitstellen, sodass niemand sie einzeln hochladen muss. Dafür muss die Code-Ausführung aktiviert sein.",
        },
        {
          t: "ol",
          items: [
            "Wählen Sie je Abteilung die drei bis fünf Aufgaben mit den meisten Stunden aus Ihrer Aufgabenliste.",
            "Schreiben Sie für jede Aufgabe eine Vorlage und testen Sie sie mit echten, unkritischen Beispielen.",
            "Lassen Sie die Personen, die die Aufgabe täglich machen, das Ergebnis bewerten und verbessern.",
            "Machen Sie aus bewährten Vorlagen einen Skill und stellen Sie ihn der Abteilung bereit.",
          ],
        },
        {
          t: "note",
          label: "Nur geprüfte Skills verteilen",
          text: "Skills können ausführbare Skripte enthalten. Stellen Sie deshalb nur Skills bereit, deren Inhalt jemand in Ihrem Unternehmen gelesen und freigegeben hat, und keine ungeprüften Dateien aus dem Netz.",
        },
      ],
    },
    {
      id: "datenregeln",
      title: "Datenregeln: Was in Claude darf und was nicht",
      answer:
        "Legen Sie vor dem Start schriftlich fest, welche Daten in Claude verarbeitet werden dürfen. Eine einfache Einteilung in drei Stufen reicht für den Anfang und ist für alle verständlich.",
      blocks: [
        {
          t: "p",
          text: "Für Team und Enterprise gilt laut Anthropic: Ihr Unternehmen ist **Verantwortlicher** für die Daten, die Ihre Nutzer eingeben, Anthropic verarbeitet sie als **Auftragsverarbeiter** nach Ihren Weisungen. Daten aus den kommerziellen Produkten werden nicht zum Training der Modelle verwendet, es sei denn, Sie nehmen ausdrücklich am Development Partner Program teil. Das ersetzt aber keine eigenen Regeln, denn die Verantwortung für die Eingaben liegt bei Ihnen.",
        },
        {
          t: "table",
          caption: "Beispiel für eine Datenampel (an Ihr Unternehmen anpassen)",
          head: ["Stufe", "Beispiele", "Regel"],
          rows: [
            ["Frei", "Öffentliche Website-Texte, allgemeine Fachfragen, eigene Entwürfe ohne Personenbezug", "Darf in jedes freigegebene Projekt"],
            ["Mit Vorsicht", "Interne Preislisten, Angebote, anonymisierte Kundenanfragen", "Nur in Projekten der jeweiligen Abteilung, Namen und Kontaktdaten vorher entfernen"],
            ["Nicht erlaubt", "Gesundheitsdaten, Personalakten, Bankdaten, Passwörter, Daten unter Geheimhaltungsvereinbarung", "Gehört nicht in Claude, auch nicht zum Testen"],
          ],
        },
        {
          t: "p",
          text: "Stimmen Sie die Ampel mit Ihrem Datenschutzbeauftragten ab, bevor Sie sie verteilen. Klären Sie dabei auch, welche Konnektoren erlaubt sind und ob personenbezogene Kundendaten überhaupt in einen Ablauf gehören. Die Ampel gehört auf eine Seite und in jede Schulung.",
        },
      ],
    },
    {
      id: "schulung-ki-kompetenz",
      title: "Schulung und KI-Kompetenz nach Art. 4 KI-Verordnung",
      answer:
        "Unternehmen, die KI-Systeme einsetzen, müssen nach Art. 4 der EU-KI-Verordnung seit dem 2. Februar 2025 Maßnahmen zur KI-Kompetenz ihres Personals ergreifen. Eine praxisnahe Schulung mit internem Nachweis ist der einfachste Weg dorthin.",
      blocks: [
        {
          t: "p",
          text: "Art. 4 gilt für Anbieter und Betreiber von KI-Systemen, also auch für Unternehmen, die Claude oder ähnliche Werkzeuge im Arbeitsalltag nutzen. Die Europäische Kommission nennt in ihren Fragen und Antworten ausdrücklich Mitarbeitende, die solche Werkzeuge etwa für Werbetexte oder Übersetzungen verwenden: Sie sollen über die konkreten Risiken informiert werden, zum Beispiel über **Halluzinationen**, also überzeugend formulierte, aber falsche Angaben.",
        },
        {
          t: "p",
          text: "Mit der Verordnung (EU) 2026/1744 (Digital Omnibus zur KI-Verordnung, in Kraft seit 27. Juli 2026) wurde Art. 4 neu gefasst. Unternehmen müssen weiterhin Maßnahmen ergreifen, die die KI-Kompetenz ihres Personals fördern. Ein bestimmtes Kompetenzniveau jeder einzelnen Person müssen sie nach der neuen Fassung nicht garantieren. Laut Kommission beaufsichtigen die nationalen Marktüberwachungsbehörden die Regel seit August 2026.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Grundverständnis schaffen",
              text: "Was ist Claude, was kann es gut, wo liegen die Grenzen. Die Kommission nennt das allgemeine Verständnis von KI, ihren Chancen und Gefahren als ersten Punkt.",
            },
            {
              title: "Die eigene Rolle klären",
              text: "Ihr Unternehmen ist in der Regel Betreiber, nicht Anbieter. Halten Sie fest, welche KI-Systeme wofür eingesetzt werden.",
            },
            {
              title: "Risiken der eigenen Nutzung besprechen",
              text: "Falsche Angaben, vertrauliche Daten, fehlende Prüfung vor dem Versand. Die Datenampel und der Prüfschritt gehören hier hinein.",
            },
            {
              title: "Auf Vorwissen und Abteilung zuschneiden",
              text: "Der Vertrieb braucht andere Beispiele als die Buchhaltung. Arbeiten Sie in der Schulung mit den Vorlagen der jeweiligen Abteilung.",
            },
            {
              title: "Intern festhalten",
              text: "Notieren Sie, wer wann an welcher Schulung teilgenommen hat und welche Unterlagen es gab. Ein Zertifikat ist laut Kommission nicht nötig.",
            },
          ],
        },
        {
          t: "note",
          label: "Hinweis",
          text: "Dieser Abschnitt ist eine Zusammenfassung, keine Rechtsberatung. Für den Einsatz in Hochrisikobereichen gelten weitere Pflichten, unter anderem zur menschlichen Aufsicht. Mehr zur Pflicht selbst lesen Sie im Artikel zur KI-Kompetenzpflicht nach Art. 4.",
        },
      ],
    },
    {
      id: "zeit-messen",
      title: "Zeit messen: vorher und nachher",
      answer:
        "Messen Sie für zwei oder drei Aufgaben je Abteilung die Zeit vor der Einführung und einige Wochen danach. Nur der Vergleich mit Ihren eigenen Zahlen zeigt, ob und wo Claude Zeit spart.",
      blocks: [
        {
          t: "p",
          text: "Allgemeine Versprechen wie „doppelt so schnell“ helfen Ihnen nicht weiter. Entscheidend ist, wie lange eine konkrete Aufgabe in Ihrem Betrieb dauert. Die Methode ist einfach und braucht keine Software.",
        },
        {
          t: "ol",
          items: [
            "Wählen Sie Aufgaben, die häufig vorkommen und klar abgegrenzt sind, etwa „Antwort auf eine Standardanfrage“ oder „Monatsbericht erstellen“.",
            "Lassen Sie die zuständigen Personen eine bis zwei Wochen lang notieren, wie lange jede Ausführung dauert und wie oft sie vorkommt.",
            "Führen Sie Projekt und Vorlage für diese Aufgaben ein und warten Sie zwei bis drei Wochen, bis sich die Arbeitsweise eingespielt hat.",
            "Messen Sie erneut auf dieselbe Weise und vergleichen Sie Dauer, Häufigkeit und Nacharbeit.",
          ],
        },
        {
          t: "p",
          text: "Ergänzend zeigen die Nutzungsauswertungen in Team und Enterprise den Inhabern unter anderem aktive Mitglieder, angelegte Projekte und genutzte Skills. Anthropic weist dort auch eine geschätzte Zeitersparnis aus. Das ist eine Schätzung des Werkzeugs, keine Messung Ihrer Abläufe. Nutzen Sie die Auswertung, um zu sehen, wer Claude kaum verwendet, und fragen Sie dort nach dem Grund.",
        },
        {
          t: "p",
          text: "Mit welchen Annahmen wir Zeitpotenziale schätzen und wie Sie sie mit Ihren Stunden selbst durchrechnen, zeigt die [Aufgaben-Landkarte](/de/ki#task-map).",
        },
      ],
    },
    {
      id: "haeufige-fehler",
      title: "Häufige Fehler bei der Einführung",
      answer:
        "Die meisten Einführungen scheitern nicht an der Technik, sondern an fehlender Struktur. Die häufigsten Fehler lassen sich mit wenig Aufwand vermeiden.",
      blocks: [
        {
          t: "table",
          caption: "Typische Fehler und was dagegen hilft",
          head: ["Fehler", "Was passiert", "Was hilft"],
          rows: [
            ["Jeder promptet allein", "Gute Prompts liegen im Verlauf einzelner Personen, die Qualität hängt davon ab, wer gerade am Platz sitzt", "Gemeinsame Projekte, geprüfte Vorlagen und Skills je Abteilung"],
            ["Keine Regeln", "Niemand weiß, welche Daten hinein dürfen. Vorsichtige hören auf, Sorglose machen weiter", "Schriftliche Datenampel, in der Schulung erklärt"],
            ["KI steht neben dem Prozess", "Texte werden zwischen Programmen hin und her kopiert, der Ablauf bleibt derselbe", "Die Schritte davor und danach mitdenken, Konnektoren gezielt nutzen"],
            ["Keine Messung", "Nach einigen Monaten ist unklar, ob sich die Lizenzen lohnen", "Zeit vorher und nachher für ausgewählte Aufgaben erfassen"],
            ["Einmal-Schulung ohne Folge", "Nach der Einführung bleibt alles beim Alten", "Feste Ansprechperson je Abteilung und regelmäßige Pflege der Projekte"],
          ],
        },
        {
          t: "p",
          text: "Wenn Sie die Einführung nicht allein planen wollen: Wir richten Claude für Teams ein, mit Projekten je Abteilung, Vorlagen, Datenregeln und Live-Schulung. Umfang und Festpreise finden Sie unter [Preise](/de/ki#prices). Einen Überblick über unseren Ansatz gibt die Seite [KI-Beratung](/de/ki).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Ab wie vielen Mitarbeitenden lohnt sich der Team-Plan?",
      a: "Der Team-Plan ist laut Anthropic für mindestens fünf Mitglieder ausgelegt und reicht bis 150 Plätze. Ob er sich lohnt, hängt weniger von der Größe ab als davon, wie viele wiederkehrende Schreibtischaufgaben Ihr Team hat. Prüfen Sie Preise und Bedingungen vor dem Kauf auf der Hilfeseite von Anthropic.",
    },
    {
      q: "Werden unsere Eingaben zum Training von Claude verwendet?",
      a: "Laut Anthropic werden Daten aus kommerziellen Produkten wie Team und Enterprise nicht zum Training der Modelle verwendet, außer Sie nehmen am Development Partner Program teil. Ihr Unternehmen bleibt Verantwortlicher für die Daten, Anthropic ist Auftragsverarbeiter.",
    },
    {
      q: "Brauchen unsere Mitarbeitenden ein KI-Zertifikat?",
      a: "Nein. Die Europäische Kommission schreibt in ihren Fragen und Antworten zur KI-Kompetenz, dass kein Zertifikat nötig ist. Sinnvoll ist ein interner Nachweis, wer wann geschult wurde und welche Inhalte behandelt wurden.",
    },
    {
      q: "Gilt Art. 4 der KI-Verordnung auch für kleine Unternehmen?",
      a: "Ja. Art. 4 gilt für alle Anbieter und Betreiber von KI-Systemen, unabhängig von der Unternehmensgröße. Seit der Neufassung durch die Verordnung (EU) 2026/1744 müssen Unternehmen Maßnahmen zur Förderung der KI-Kompetenz ergreifen, aber kein bestimmtes Niveau jeder einzelnen Person garantieren.",
    },
    {
      q: "Wie lange dauert eine Einführung?",
      a: "Die technische Einrichtung des Arbeitsbereichs dauert wenige Stunden. Projekte, Vorlagen, Datenregeln und Schulung brauchen je nach Zahl der Abteilungen einige Wochen. Unser Claude-Team-Onboarding ist auf zwei Wochen angelegt.",
    },
    {
      q: "Was kostet eine begleitete Einführung bei LocalDominate?",
      a: "Das Claude-Team-Onboarding kostet 2.900 € netto für bis zu 10 Personen, jede weitere Person 190 €. Die Lizenzen zahlen Sie direkt an Anthropic. Wir sind kein Anthropic-Partner, sondern ein unabhängiges Studio. Vorher können Sie kostenlos eine Rolle prüfen lassen.",
    },
  ],
  sources: [
    { title: "What is the Team plan?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/9266767-what-is-the-team-plan" },
    { title: "What is the Enterprise plan?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan" },
    { title: "What are projects?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
    { title: "What are skills?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/12512176-what-are-skills" },
    { title: "Does Anthropic act as a data processor or controller?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller" },
    { title: "View usage analytics for Team and Enterprise plans", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans" },
    { title: "AI Literacy: Questions & Answers", publisher: "Europäische Kommission", url: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers" },
    { title: "Verordnung (EU) 2024/1689 (KI-Verordnung), konsolidierte Fassung vom 27. Juli 2026", publisher: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng" },
    { title: "Verordnung (EU) 2026/1744 (Digital Omnibus zur KI-Verordnung)", publisher: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng" },
  ],
  related: [
    { slug: "ki-kompetenzpflicht-art-4-ki-verordnung", title: "KI-Kompetenzpflicht nach Art. 4 KI-Verordnung: Was KMU jetzt tun müssen" },
    { slug: "ki-aufgaben-hotel-rezeption", title: "Welche Aufgaben KI an der Hotel-Rezeption übernehmen kann" },
  ],
  cta: {
    kicker: "Kostenloser KI-Check",
    title: "Welche Aufgaben kann Claude Ihrem Team abnehmen?",
    text: "Nennen Sie uns eine Rolle. Sie erhalten innerhalb von zwei Werktagen eine schriftliche Aufgaben-Landkarte mit dem ersten Schritt, kostenlos und ohne Verpflichtung.",
    label: "Kostenlosen KI-Check anfordern",
    to: "/de/ki#ai-check",
  },
};

export default article;
