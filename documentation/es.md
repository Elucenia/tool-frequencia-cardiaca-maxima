<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · es · no clinical/professional/rights approval -->

# Frecuencia cardíaca máxima prevista e índice cronotrópico

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/frequencia-cardiaca-maxima)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

años · intervalo: 10–100

### Frecuencia cardíaca en reposo

`fcrep`

bpm · intervalo: 30–150

### Frecuencia cardíaca máxima durante el esfuerzo

`fcpico`

bpm · intervalo: 50–230

## Edición del método

Tanaka 2001: 208−0,7 edad; clásica 220−edad; índice cronotrópico de reserva Brubaker 2011

## Fórmula documentada

FC máxima (clásica): 220 − edad

FC máxima (Tanaka): 208 − 0,7 × edad

% alcanzado: FC pico ÷ FC máxima × 100

Índice cronotrópico: (FC pico − FC reposo) ÷ (FC máxima − FC reposo)

## Límites y población

La ecuación Tanaka 2001 estima la frecuencia cardíaca máxima en adultos sanos. Su ejecución con una edad pediátrica demuestra únicamente la operación matemática, sin evidencia de aplicabilidad clínica en esa población. La frecuencia prevista no es la máxima individual medida; el diagnóstico de incompetencia cronotrópica, el uso de medicamentos y los protocolos de esfuerzo dependen de su propia evaluación y fuentes.

## Referencias

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
