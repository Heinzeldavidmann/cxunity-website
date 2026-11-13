---
name: CXUnity
description: Digitale Erlebnisse aus Kunden- und Nutzersicht, von der Strategie bis zur Umsetzung.
colors:
  cx-lavender: "#b79ad6"
  cx-lavender-deep: "#7f5fa6"
  cx-lavender-ink: "#72588f"
  cx-lavender-soft: "#f4eef9"
  cx-lavender-on-dark: "#cdb8e6"
  ux-mint: "#a9c8af"
  ux-mint-ink: "#5b8563"
  ux-mint-soft: "#eef6f1"
  ux-green-deep: "#4a7052"
  cx-lavender-tint: "#ece3f5"
  ux-mint-tint: "#e1eee4"
  graphite: "#3a3d43"
  graphite-pressed: "#24262a"
  slate-muted: "#676a70"
  slate-light: "#6e7177"
  hairline: "rgba(47, 50, 55, 0.12)"
  paper: "#ffffff"
  atelier-surface: "#fbfafc"
  mockup-dark: "#2c2c2c"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "0.003em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 2.9vw, 2.65rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.003em"
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.005em"
  stat:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "2.8rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  eyebrow:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  body:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.14rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.96rem"
    fontWeight: 800
rounded:
  control: "6px"
  small: "8px"
  medium: "12px"
  large: "16px"
  pill: "999px"
spacing:
  gutter: "20px"
  card-gap: "24px"
  card-padding: "30px"
  block: "44px"
  section-mobile: "76px"
  section: "112px"
  container: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover-left:
    backgroundColor: "{colors.cx-lavender-ink}"
    textColor: "{colors.paper}"
  button-primary-hover-right:
    backgroundColor: "{colors.ux-green-deep}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-secondary-hover-left:
    backgroundColor: "{colors.cx-lavender-tint}"
    textColor: "{colors.graphite}"
  button-secondary-hover-right:
    backgroundColor: "{colors.ux-mint-tint}"
    textColor: "{colors.graphite}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.medium}"
    padding: "{spacing.card-padding}"
  client-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.medium}"
    padding: "24px"
  client-card-hover:
    backgroundColor: "{colors.atelier-surface}"
  faq-item:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.medium}"
    padding: "0 24px 0 28px"
    height: "76px"
  contact-card:
    rounded: "{rounded.large}"
    padding: "clamp(34px, 6vw, 72px)"
  eyebrow:
    textColor: "{colors.cx-lavender-deep}"
    typography: "{typography.eyebrow}"
  nav-menu-item-hover:
    backgroundColor: "{colors.cx-lavender-soft}"
    rounded: "{rounded.small}"
  nav-menu-item-current:
    backgroundColor: "{colors.ux-mint-soft}"
    rounded: "{rounded.small}"
---

# Design System: CXUnity

## Overview

**Creative North Star: "Das helle Atelier"**

CXUnity sieht aus wie ein aufgeräumter, heller Arbeitsraum, in dem die echten Arbeitsergebnisse an der Wand hängen: Ablaufskizzen, ein angeschnittener Audit-Bericht, ein PR/FAQ-Dokument, Persona- und Eisberg-Grafiken. Die Oberfläche selbst bleibt Papier, Graphit und feine Linien. Farbe kommt nur dort ins Spiel, wo sie eine Bedeutung trägt. In der Mitte des Ateliers steht das X aus dem Logo. Es ist die Schnittstelle, an der die Kundensicht (CX-Lavendel) und die Nutzersicht (UX-Mint) aufeinandertreffen, und es kehrt als Chevron-Form auf der ganzen Seite wieder.

Der Grundton ist klar und selbstbewusst. Die Sicherheit entsteht nicht durch laute Farbe, sondern durch Kontrast und Präzision: Graphit-Überschriften in einer schmalen, aufrechten Grotesk, großzügiger Weißraum, knappe Texte und echte Artefakte statt Stockfotos oder Illustrationsfiguren. Die Dichte ist niedrig, die Abschnitte atmen (112 px Abstand), und jedes Element hat eine Aufgabe.

Bedienelemente sind leise und exakt. Sie sind flach, haben haarfeine Rahmen und reagieren mit Farbe oder Rahmen statt mit Sprüngen, Schatten oder Leuchten. Die eine Ausnahme mit Charakter sind die Buttons: Beim Hover setzen sich in ihnen die beiden Hälften des Logo-X zusammen. Bewegung gibt es dort, wo sie etwas erklärt: wenn sich das Logo aus zwei Hälften zusammensetzt, wenn das Untermenü aufklappt oder wenn Inhalte beim Scrollen ruhig einblenden. Wer reduzierte Bewegung eingestellt hat, sieht sofort den Endzustand.

**Key Characteristics:**
- Papierweiße Flächen, Graphit-Text, haarfeine Rahmen (12 % Deckkraft)
- Lavendel und Mint immer als Paar und immer mit Bedeutung, nie als Dekoration
- Chevron und X als einziges grafisches Motiv
- Echte Artefakte (Berichte, Abläufe, Dokumente) als Bildsprache
- Flach im Ruhezustand, Hover verändert Farbe oder Rahmen, nicht die Position
- Schmale Display-Schrift für Haltung, offene Grotesk für Lesbarkeit

## Colors

Eine fast neutrale Atelierpalette aus Papier und Graphit, in die zwei gedämpfte Bedeutungsfarben eingesetzt sind.

### Primary
- **CX-Lavendel** (`cx-lavender`): Die Farbe der Customer Experience, also der Tiefe und der Kundensicht. Sie erscheint in Linien, Markierungen, Wasserzeichen und der Navigations-Unterstreichung. Text setzt sie nie in der Grundstufe, sondern immer in einer der dunkleren Stufen.
- **Tiefer CX-Lavendel** (`cx-lavender-deep`): Eyebrows und Textlinks in Karten („Zum Projekt“).
- **CX-Lavendel für Text** (`cx-lavender-ink`): Fokusring, Pfeil-Icons und kleiner Lavendel-Text. Er erreicht mindestens 5:1 auf Weiß und auf Lavendel-Tönungen.
- **Lavendel-Hauch** (`cx-lavender-soft`): Hover-Fläche im Untermenü und erstes Ende des Atelier-Verlaufs.
- **Lavendel auf Dunkel** (`cx-lavender-on-dark`): Nur für Text auf den dunklen Mockup-Flächen.

### Secondary
- **UX-Mint** (`ux-mint`): Die Farbe der User Experience, also grünes Licht: Der Weg ist frei. Sie ist immer das Gegenstück zum Lavendel, zum Beispiel im Verlauf, im mittleren Strich des Menü-Icons oder bei der rechten Logo-Hälfte.
- **UX-Mint für Text** (`ux-mint-ink`): Nur für große Schrift und Zustände in den Ablaufgrafiken (mindestens 3:1 auf Weiß).
- **Mint-Hauch** (`ux-mint-soft`): Markiert die aktuelle Seite im Untermenü und ist das zweite Ende des Atelier-Verlaufs.
- **Tiefes UX-Grün** (`ux-green-deep`): Nur als rechte Hover-Fläche des Haupt-Buttons, das Gegenstück zum CX-Lavendel für Text. Es trägt weiße Schrift (5,6:1).
- **Lavendel- und Mint-Tönung** (`cx-lavender-tint`, `ux-mint-tint`): Nur als Hover-Flächen der Nebenbuttons, mit Graphit-Schrift.

### Neutral
- **Graphit** (`graphite`): Überschriften, Fließtext in Karten und der Haupt-Button. Es ist ein warmes Dunkelgrau, kein Schwarz.
- **Gedrücktes Graphit** (`graphite-pressed`): Dunkle Flächen wie die Mockup-Seitenleisten, kein Button-Zustand mehr.
- **Schiefergrau** (`slate-muted`): Absatztext, Navigationslinks im Ruhezustand und Unterzeilen.
- **Helles Schiefergrau** (`slate-light`): Footer und Hinweise.
- **Haarlinie** (`hairline`): Alle Rahmen und Trennlinien. Etwas leichtere Varianten mit 8 bis 10 % Deckkraft trennen Tabellenzeilen und Kopfbereiche.
- **Papier** (`paper`): Seitenhintergrund und Kartenfläche.
- **Atelierfläche** (`atelier-surface`): Ein kaum sichtbar violett getöntes Weiß für ruhige Flächen und Hover-Zustände von Karten.
- **Mockup-Dunkel** (`mockup-dark`): Nur innerhalb der Artefakt-Vorschauen, etwa als Seitenleiste des Audit-Berichts. Es ist nie eine Seitenfläche.

### Named Rules
**The Pair Rule.** Lavendel und Mint treten gemeinsam auf oder in klar zugeordneten Rollen (CX gegen UX). Ein Verlauf zwischen beiden läuft immer diagonal (135°) von Lavendel zu Mint, mit 13 bis 32 % Deckkraft auf Weiß. Er ist die einzige erlaubte Verlaufsform.

**The Meaning Rule.** Jede Lavendel- oder Mint-Fläche muss sich auf CX, UX oder deren Verbindung beziehen lassen. Wer die Bedeutung nicht benennen kann, nimmt Graphit oder Haarlinie.

**The Ink Rule.** Die hellen Grundstufen (`cx-lavender`, `ux-mint`) tragen nie kleinen Text. Für Text gibt es die Ink-Stufen.

## Typography

**Display Font:** Barlow Semi Condensed 500/600/700 (mit Arial Narrow, system-ui)
**Body Font:** Source Sans 3 Variable 200–900 (mit system-ui, Segoe UI)

**Character:** Die halbschmale Barlow gibt den Überschriften eine aufrechte, technische Haltung, wie Beschriftungen auf einem Plan. Source Sans 3 ist offen, ruhig und gut lesbar und trägt alles, was gelesen werden muss. Beide Schriften liegen selbst gehostet als woff2 im Projekt.

### Hierarchy
- **Display** (600, clamp 2,5–3,4 rem, 1,06): Nur die H1 pro Seite, höchstens etwa 1000 px breit.
- **Headline** (600, clamp 1,95–2,65 rem, 1,1): Abschnittsüberschriften (H2).
- **Title** (600, 1,4 rem, 1,2): Karten- und Unterüberschriften (H3). In dichteren Listen wie den Ablaufschritten auf 1,05 rem verkleinert.
- **Stat** (600, 2,8 rem, 1, −0,01 em): Kennzahlen wie Anfragen und Klicks. Die Zahl steht in Display-Schrift, das Label in kleiner Body-Schrift (0,82 rem, 600) darunter.
- **Eyebrow** (600, 1,05 rem, 0,01 em): Abschnitts-Kennung in Barlow mit vorangestelltem Lavendel-Chevron. Nicht in Versalien.
- **Body** (400, 1,0625 rem, 1,6): Grundtext. Absätze stehen in Schiefergrau mit 1 rem, Leads mit 1,08 bis 1,14 rem.
- **Label** (800, 0,96 rem): Buttons. Tabellenköpfe in Versalien mit 0,82 rem, 900 und 0,04 em Laufweite sind die einzige Versalien-Ausnahme.

### Named Rules
**The Two Voices Rule.** Barlow für Haltung (Überschriften, Eyebrows, Kennzahlen, Menütitel), Source Sans für alles Gelesene und Bediente. Eine dritte Schrift gibt es nicht.

**The Upright Rule.** Überschriften stehen in Satzschreibweise, nicht in Versalien, und sind nie kursiv. Kursiv ist den Kundenzitaten vorbehalten.

## Layout

Ein einspaltiger Fluss mit einem zentrierten Container von 1180 px und mindestens 20 px Rand. Abschnitte haben 112 px Abstand oben und unten, auf Mobilgeräten (unter 700 px) 76 px. Kompakte Bänder wie die Kundenkarten und die FAQ nutzen 56 bis 72 px.

Raster: Karten stehen in 2er- oder 3er-Grids mit 24 px Abstand. Der Hero teilt sich (1,1 : 0,9) in Text und Logo-Bühne, mit 56 px Abstand. Die Logo-Bühne hat keine Box und keinen Hintergrund. Das Leistungsband (`#focus`) ist die einzige randlose Fläche. Es nutzt die volle Breite mit dem Lavendel-Mint-Verlauf, sein Inhalt bleibt im Container.

Lesebreiten: Lead-Texte bis etwa 670 px, Abschnittsüberschriften bis 1100 px. FAQ und Rechtstexte sind auf 860 px zentriert, Kontaktkarte und Zitate auf 760 bis 920 px.

Umbrüche: Ab 1000 px treten nachrangige Navigationslinks zurück. Bei 920 px wird der Hero einspaltig und die Navigation zum mobilen Menü. Bei 860 px brechen die Karten-Grids auf eine Spalte um, bei 700 px wird alles einspaltig mit kleinerem Abschnittsabstand.

## Elevation & Depth

Das System ist flach. Tiefe entsteht durch Haarlinien, Papier auf Atelierfläche und zarte Farbverläufe, nicht durch Schatten. Der einzige Ruheschatten ist eine 1 px hohe Kante, die eine Karte vom Weiß löst, ohne sie anzuheben.

### Shadow Vocabulary
- **Kante** (`box-shadow: 0 1px 2px rgba(47, 50, 55, 0.05)`): Karten, Buttons, FAQ, Tabellen. Sie bleibt im Hover gleich.
- **Schwebend** (`box-shadow: 0 18px 40px -18px rgba(47, 50, 55, 0.28)`): Nur für Ebenen, die wirklich über dem Inhalt liegen, wie das Untermenü der Navigation.
- **Tooltip** (`box-shadow: 0 12px 40px rgba(47, 50, 55, 0.10)`): Erklärungen in den Ablaufgrafiken.

### Named Rules
**The No-Lift Rule.** Karten und Buttons springen beim Hover nicht nach oben, und ihr Schatten wächst nicht. Der Hover ändert Rahmenfarbe (zu Lavendel), Fläche (zu Atelierfläche) oder Textfarbe. Das ist im Code bewusst mit `transform: none` festgeschrieben.

**The Real Layer Rule.** Ein großer Schatten bedeutet, dass etwas über dem Inhalt schwebt (Menü, Tooltip, Cookie-Hinweis). Fest stehende Inhalte bekommen nie einen großen Schatten.

## Shapes

Weich, aber nicht rund. Es gibt eine Radius-Treppe: 6 px für Bedienelemente (Buttons, Sprachumschalter, Nummern-Kacheln), 8 px für kleine Flächen (Menüeinträge, Logo-Felder, Tooltips), 12 px für Karten und FAQ, 16 px für große Bühnen (Kontaktkarte, Zitat). Vollrund (999 px) ist nur für Punkte, Linien-Enden und das runde FAQ-Plus erlaubt.

Rahmen sind immer 1 px Haarlinie. Die Ausnahme sind die Vorgehen-Karten: Sie haben gar keinen Rahmen, nur eine 2 px Graphit-Linie oben, wie ein Registerreiter.

**The Chevron Rule.** Das einzige Ornament ist der Chevron aus dem Logo (`clip-path: polygon(0 0, 48% 0, 100% 50%, 48% 100%, 0 100%, 52% 50%)`). Er erscheint als kleines Zeichen vor jeder Eyebrow und als Wasserzeichen mit 10 % Deckkraft in der rechten unteren Ecke der Leistungskarten. Das Wasserzeichen ist eine feste Markenregel. Andere dekorative Formen wie Blobs, Kreise oder Sterne gibt es nicht.

## Components

### Buttons
Klar und satt, ohne Effekte.
- **Shape:** Leicht gerundet (6 px), 52 px hoch, 24 px seitlicher Innenabstand.
- **X-Hover (Signature):** Beim Hover oder Tastatur-Fokus kommen die beiden Hälften des Logo-X herein: der CX-Lavendel-Chevron von links, der UX-Mint-Chevron von rechts, beide in den Proportionen des Logos (32 px tief, abgeflachte Spitze). Jede Hälfte zieht eine Fläche in ihrer Farbe hinter sich her. In der Mitte treffen sie sich mit dem 2 px Spalt aus dem Logo, das X bleibt kurz stehen und löst sich dann in die Flächen auf. Zurück bleibt ein feiner Abdruck des X in der Ruhefarbe. Die Bewegung dauert 900 ms mit `cubic-bezier(0.65, 0, 0.35, 1)`. Die Ebenen fügt `index.js` in jeden `.button` ein, ohne JavaScript bleibt der Button schlicht. Auf Touch-Geräten zeigt Drücken sofort den Endzustand, bei reduzierter Bewegung wechseln die Flächen ohne Animation.
- **Primary:** Im Ruhezustand Graphit mit weißer Schrift in Source Sans 800. Beim Hover links tiefes Lavendel, rechts tiefes Grün, die Schrift bleibt weiß.
- **Secondary:** Im Ruhezustand weiß mit 1,5 px Graphit-Rahmen und Graphit-Schrift. Beim Hover links helle Lavendel-, rechts helle Mint-Tönung, die Schrift bleibt Graphit.
- **Focus:** 2 px Ring in CX-Lavendel für Text mit 3 px Abstand. Das gilt einheitlich für alle bedienbaren Elemente.
- **Textlinks:** CX-Lavendel für Text, 750. Statt eines Pfeils steht die linke Hälfte des Logo-X als kleiner gefüllter Chevron (0,68 × 1,1 em). Beim Hover wird die Schrift Graphit und der Chevron rückt 3 px nach rechts. Mehr nicht.

### Cards / Containers
- **Corner Style:** 12 px, große Bühnen 16 px.
- **Background:** Papier. Im Hover wird es Atelierfläche (Kundenkarten) oder der Rahmen bekommt einen Lavendel-Ton.
- **Shadow Strategy:** Nur die Kante (siehe Elevation & Depth).
- **Border:** 1 px Haarlinie.
- **Internal Padding:** 30 px (Leistungskarten), 24 px (Kundenkarten), clamp 32–72 px (Zitat, Kontaktkarte).

### Hero-Logo

Die beiden Logo-Hälften erscheinen auseinander, unter der linken steht „Kundenerlebnis“ (Lavendel-Tinte), unter der rechten „Nutzererlebnis“ (Tiefgrün). Dann schieben sie sich zusammen, die Begriffe verschwinden. Danach öffnet sich das X für jedes Schlagwort einmal, immer gleich weit (64 % der Logobreite), langsam (1,7 s) und mit 4,5 s Ruhe dazwischen. Nach einem Durchlauf bleibt das Logo geschlossen; mit der Maus darüber öffnet es sich erneut. Solange die Schlagworte laufen, ist ein leiser Knopf „Bewegung anhalten“ sichtbar. Bei reduzierter Bewegung steht das Logo still und geschlossen.

### Leistungskarten
- **Ganze Karte als Link:** Der Titel ist der Link und spannt sich über die ganze Karte. Einen separaten „Mehr zu …“-Link gibt es nicht. Mit der Tastatur bekommt die ganze Karte den Fokusring.
- **Chevron nach Spalte:** Das Chevron-Wasserzeichen unten rechts ist in der linken Spalte CX-Lavendel, in der rechten UX-Mint, im Ruhezustand mit 10 % Deckkraft.
- **Hover:** Der Chevron wird mit 70 % Deckkraft sichtbar und rückt 14 px herein, wie ein Pfeil in Klickrichtung (600 ms, `cubic-bezier(0.22, 1, 0.36, 1)`). Die Karte bekommt einen Hauch ihrer Farbe (`#faf7fd` bzw. `#f6faf7`), der Rahmen nimmt die Chevron-Farbe leicht auf.

### Navigation
- **Desktop:** Sticky Kopfzeile, 84 px hoch, 92 % deckendes Weiß mit Weichzeichner und Haarlinie unten. Links in Schiefergrau mit 0,95 rem und 500. Beim Hover oder auf der aktiven Seite werden sie Graphit, und eine 2 px Lavendel-Linie wächst von links unter dem Link.
- **Untermenü Leistungen:** Ein weißes Panel (12 px Radius, schwebender Schatten). Beim Öffnen läuft oben eine 2 px Lavendel-Linie ein, und die Einträge erscheinen leicht gestaffelt. Hover hat einen Lavendel-Hauch, die aktuelle Seite einen Mint-Hauch.
- **Sprachumschalter:** Eine kleine Pille mit 6 px Radius, die aktive Sprache auf Lavendel-Mint-Verlauf.
- **Mobil:** Drei Striche als Menü-Icon, oben und unten Lavendel, in der Mitte Mint. Das ist das Logo-Prinzip im Kleinen. Leistungen erscheinen als eingerückte Unterpunkte.

### FAQ
- Weiße Karte mit 12 px Radius, mindestens 76 px hoch, Frage in Graphit mit 850.
- Rechts sitzt ein rundes Plus (38 px) auf Lavendel-Tönung. Geöffnet dreht es sich, wird zum Minus und bekommt den Lavendel-Mint-Verlauf.

### Comparison Table
- Haarfeiner Container mit 12 px Radius. Der Kopf hat einen Lavendel-Hauch und Versalien-Labels.
- Die CXUnity-Spalte ist nur durch den Lavendel-Mint-Verlauf markiert, ohne zusätzliche Box oder Badge. Werte darin stehen in Graphit 800.

### Atelier-Artefakte (Signature)
Stilisierte Nachbauten echter Arbeitsergebnisse, die zeigen statt behaupten: die Audit-Report-Vorschau mit dunkler Seitenleiste (Mockup-Dunkel), farbigen Befundspalten und einem Weichzeichner über dem Rest, das PR/FAQ-Dokument mit Platzhalterzeilen sowie Eisberg- und Persona-Grafik. Platzhaltertext steht als graue Balken in drei Längen (45/68/90 %), nie als Lorem ipsum.

### Ablaufgrafiken (Signature)
Geschwungene SVG-Pfade mit nummerierten Kreisstationen auf `/review`, `/website` und `/research`. Sie sind eine feste Markenregel. Die Nummern stehen in Source Sans mit 750 und 0,07 em Laufweite. Beim Hover oder Fokus werden sie UX-Mint für Text, und ein weißer Tooltip mit Erklärung erscheint. Auf Mobilgeräten ersetzt eine einfache Liste die Grafik.

### Kontaktkarte
Die große Bühne am Seitenende: 16 px Radius, Lavendel-Mint-Verlauf auf Weiß (26/32 %), Text in Graphit. Darin steht die Person mit Foto, die einzige Stelle, an der David als „ich“ auftritt.

## Do's and Don'ts

### Do:
- **Do** Lavendel und Mint für Bedeutung reservieren und neutrale Aufgaben mit Graphit, Schiefergrau und Haarlinie lösen.
- **Do** den Lavendel-Mint-Verlauf nur diagonal (135°), mit niedriger Deckkraft (13–32 %) und auf großen ruhigen Flächen einsetzen.
- **Do** für Lavendel-Text immer `cx-lavender-ink` oder `cx-lavender-deep` verwenden und für Mint-Text `ux-mint-ink` (nur große Schrift).
- **Do** neue Bildinhalte als echte Artefakte bauen (Dokument, Bericht, Ablauf) und nicht als Illustration oder Stockfoto.
- **Do** jede Bewegung mit `prefers-reduced-motion` absichern und die Kurve `cubic-bezier(0.22, 1, 0.36, 1)` verwenden.
- **Do** die Radius-Treppe einhalten: 6 px Bedienelement, 8 px kleine Fläche, 12 px Karte, 16 px Bühne.

### Don't:
- **Don't** Karten oder Buttons beim Hover anheben oder ihren Schatten vergrößern.
- **Don't** Verläufe auf Text, Buttons oder Icons legen und keine Glow- oder Neon-Effekte einsetzen.
- **Don't** den X-Hover auf Karten, Links oder andere Elemente übertragen. Er gehört nur den Buttons. Textlinks bleiben ruhig.
- **Don't** weitere Akzentfarben einführen. Ausnahme sind die Status-Töne in den Audit-Befunden (Grün #2a7a40, Orange #B05A00), und die gelten nur innerhalb dieser Artefakte.
- **Don't** dekorative Formen außer dem Chevron verwenden, etwa Blobs, Wellen, Sterne oder Emoji-Icons.
- **Don't** Überschriften in Versalien oder kursiv setzen und keine dritte Schrift einführen.
- **Don't** Mockup-Dunkel (#2c2c2c) als Seiten- oder Abschnittshintergrund verwenden.
- **Don't** im Hero ein Portrait statt des Logos zeigen.
- **Don't** die Schlagworte im Hero endlos kreisen lassen. Sie laufen einmal langsam durch, danach bleibt das Logo ruhig (Rücksicht auf Bewegungsempfindliche).
