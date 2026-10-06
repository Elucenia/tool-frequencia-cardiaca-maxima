<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · it · no clinical/professional/rights approval -->

# Frequenza cardiaca massima prevista e indice cronotropo

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/frequencia-cardiaca-maxima)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

anni · intervallo: 10–100

### Frequenza cardiaca a riposo

`fcrep`

bpm · intervallo: 30–150

### Frequenza cardiaca al picco dello sforzo

`fcpico`

bpm · intervallo: 50–230

## Edizione del metodo

Tanaka 2001: 208−0,7 età; classica 220−età; indice cronotropo di riserva Brubaker 2011

## Formula documentata

FC massima (classica): 220 − età

FC massima (Tanaka): 208 − 0,7 × età

% raggiunto: FC picco ÷ FC massima × 100

Indice cronotropo: (FC picco − FC riposo) ÷ (FC massima − FC riposo)

## Limiti e popolazione

L’equazione Tanaka 2001 stima la frequenza cardiaca massima negli adulti sani. La sua esecuzione con un’età pediatrica dimostra soltanto l’operazione matematica, senza evidenza di applicabilità clinica in tale popolazione. La frequenza prevista non è la massima individuale misurata; diagnosi di incompetenza cronotropa, uso di farmaci e protocolli da sforzo dipendono da una valutazione e da fonti proprie.

## Riferimenti

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

FC submassima raggiunta (≥ 85%)

| Dettagli del risultato | |
| --- | --- |
| FC massima (220 − età) | 170 bpm |
| FC massima (Tanaka) | 173 bpm |
| 85% della FC massima | 145 bpm |
| Indice cronotropico | 0,90 |


### 2

Indice cronotropico < 0,80: incompetenza cronotropa (senza beta-bloccante)

| Dettagli del risultato | |
| --- | --- |
| FC massima (220 − età) | 170 bpm |
| FC massima (Tanaka) | 173 bpm |
| 85% della FC massima | 145 bpm |
| Indice cronotropico | 0,70 |

