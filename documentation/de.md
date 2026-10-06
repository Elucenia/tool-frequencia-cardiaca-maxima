<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · de · no clinical/professional/rights approval -->

# Vorhergesagte maximale Herzfrequenz und chronotroper Index

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/frequencia-cardiaca-maxima)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

Jahre · Bereich: 10–100

### Ruheherzfrequenz

`fcrep`

bpm · Bereich: 30–150

### Herzfrequenz bei maximaler Belastung

`fcpico`

bpm · Bereich: 50–230

## Fassung der Methode

Tanaka 2001: 208−0,7 Alter; klassisch 220−Alter; chronotroper Reserveindex Brubaker 2011

## Dokumentierte Formel

Maximale HF (klassisch): 220 − Alter

Maximale HF (Tanaka): 208 − 0,7 × Alter

% erreicht: Spitzen-HF ÷ maximale HF × 100

Chronotroper Index: (Spitzen-HF − Ruhe-HF) ÷ (maximale HF − Ruhe-HF)

## Grenzen und Population

Die Tanaka-Gleichung 2001 schätzt die maximale Herzfrequenz bei gesunden Erwachsenen. Ihre Ausführung mit einem Kindesalter zeigt nur die mathematische Operation, ohne Evidenz klinischer Anwendbarkeit in dieser Population. Die vorhergesagte Frequenz ist nicht die individuell gemessene Maximalfrequenz; Diagnose chronotroper Inkompetenz, Medikamentenanwendung und Belastungsprotokolle benötigen eigene Beurteilung und Quellen.

## Referenzen

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Erreichte submaximale HF (≥ 85%)

| Ergebnisdetails | |
| --- | --- |
| Maximale HF (220 − Alter) | 170 bpm |
| Maximale HF (Tanaka) | 173 bpm |
| 85 % der maximalen HF | 145 bpm |
| Chronotropischer Index | 0,90 |


### 2

Chronotropischer Index < 0,80: chronotrope Inkompetenz (ohne Betablocker)

| Ergebnisdetails | |
| --- | --- |
| Maximale HF (220 − Alter) | 170 bpm |
| Maximale HF (Tanaka) | 173 bpm |
| 85 % der maximalen HF | 145 bpm |
| Chronotropischer Index | 0,70 |

