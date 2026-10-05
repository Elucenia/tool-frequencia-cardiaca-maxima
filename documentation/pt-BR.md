<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · pt-BR · no clinical/professional/rights approval -->

# FC máxima prevista e índice cronotrópico

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/frequencia-cardiaca-maxima)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

anos · intervalo: 10–100

### FC de repouso

`fcrep`

bpm · intervalo: 30–150

### FC no pico do esforço

`fcpico`

bpm · intervalo: 50–230

## Edição do método

Tanaka 2001:208−0,7 idade; clássica 220−idade; índicecronotrópico reserva Brubaker 2011

## Fórmula documentada

FC máxima (clássica): 220 − idade

FC máxima (Tanaka): 208 − 0,7 × idade

% atingido: FC pico ÷ FC máxima × 100

Índice cronotrópico: (FC pico − FC repouso) ÷ (FC máxima − FC repouso)

## Limites e população

A equação Tanaka 2001 estima a frequência cardíaca máxima em adultos saudáveis. Sua execução com idade pediátrica demonstra apenas a operação matemática, sem evidência de aplicabilidade clínica nessa população. A frequência prevista não é a frequência máxima individual medida; diagnóstico de incompetência cronotrópica, uso de medicamentos e protocolos de esforço dependem de avaliação e fontes próprias.

## Referências

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
