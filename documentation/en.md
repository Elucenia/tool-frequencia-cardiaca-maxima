<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · en · no clinical/professional/rights approval -->

# Predicted maximum heart rate and chronotropic index

[conditions, sources and permissions](https://elucenia.org/en/tools/frequencia-cardiaca-maxima)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

years · range: 10–100

### Resting heart rate

`fcrep`

bpm · range: 30–150

### Peak exercise heart rate

`fcpico`

bpm · range: 50–230

## Method edition

Tanaka 2001: 208−0.7 age; classic 220−age; heart-rate-reserve chronotropic index Brubaker 2011

## Documented formula

Maximum HR (classic): 220 − age

Maximum HR (Tanaka): 208 − 0.7 × age

% achieved: peak HR ÷ maximum HR × 100

Chronotropic index: (peak HR − resting HR) ÷ (maximum HR − resting HR)

## Limits and population

The Tanaka 2001 equation estimates maximum heart rate in healthy adults. Executing it with a pediatric age demonstrates only the mathematical operation, without evidence of clinical applicability in that population. Predicted heart rate is not the individually measured maximum; diagnosis of chronotropic incompetence, medication use and exercise protocols depend on their own assessment and sources.

## References

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
