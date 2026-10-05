<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · fr · no clinical/professional/rights approval -->

# Fréquence cardiaque maximale prédite et indice chronotrope

[conditions, sources et autorisations](https://elucenia.org/fr/outils/frequencia-cardiaca-maxima)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

ans · intervalle: 10–100

### Fréquence cardiaque au repos

`fcrep`

bpm · intervalle: 30–150

### Fréquence cardiaque au pic de l’effort

`fcpico`

bpm · intervalle: 50–230

## Édition de la méthode

Tanaka 2001 : 208−0,7 âge ; classique 220−âge ; index chronotrope de réserve Brubaker 2011

## Formule documentée

FC maximale (classique): 220 − âge

FC maximale (Tanaka): 208 − 0,7 × âge

% atteint: FC pic ÷ FC maximale × 100

Index chronotrope: (FC pic − FC repos) ÷ (FC maximale − FC repos)

## Limites et population

L’équation Tanaka 2001 estime la fréquence cardiaque maximale chez l’adulte sain. Son exécution avec un âge pédiatrique démontre uniquement l’opération mathématique, sans preuve d’applicabilité clinique à cette population. La fréquence prédite n’est pas la fréquence maximale individuelle mesurée ; le diagnostic d’incompétence chronotrope, les médicaments et les protocoles d’effort nécessitent leurs propres évaluations et sources.

## Références

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
