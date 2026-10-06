<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · ja · no clinical/professional/rights approval -->

# 予測最大心拍数・クロノトロピック指数

[条件・出典・許諾](https://elucenia.org/ja/tools/frequencia-cardiaca-maxima)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢

`idade`

年 · 範囲: 10–100

### 安静時心拍数

`fcrep`

拍/分 · 範囲: 30–150

### 最大運動時心拍数

`fcpico`

拍/分 · 範囲: 50–230

## 方法の版

Tanaka 2001：208−0.7年齢；従来220−年齢；心拍予備能変時性指数Brubaker 2011

## 記載された計算式

最大心拍数（従来）: 220 − 年齢

最大心拍数（Tanaka）: 208 − 0.7 × 年齢

達成%: ピーク心拍数 ÷ 最大心拍数 × 100

変時性指数: (ピーク心拍数 − 安静心拍数) ÷ (最大心拍数 − 安静心拍数)

## 限界・対象集団

Tanaka 2001の式は、健康な成人の最大心拍数を推定します。小児の年齢で実行しても数学的な操作を示すだけで、その集団での臨床的な適用可能性の証拠はありません。予測心拍数は、個人で測定した最大心拍数ではありません。変時性不全の診断、薬剤使用、運動負荷プロトコルには、専用の評価と出典が必要です。

## 参考文献

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

亜最大心拍数に到達（≥ 85%）

| 結果の詳細 | |
| --- | --- |
| 最大心拍数（220 − 年齢） | 170 bpm |
| 最大心拍数（Tanaka） | 173 bpm |
| 最大心拍数の 85% | 145 bpm |
| 変時性指数 | 0.90 |


### 2

変時性指数 < 0.80：変時性不全（β遮断薬なし）

| 結果の詳細 | |
| --- | --- |
| 最大心拍数（220 − 年齢） | 170 bpm |
| 最大心拍数（Tanaka） | 173 bpm |
| 最大心拍数の 85% | 145 bpm |
| 変時性指数 | 0.70 |

