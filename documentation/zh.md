<!-- ELUCENIA technical documentation · frequencia-cardiaca-maxima · zh · no clinical/professional/rights approval -->

# 预计最大心率与变时指数

[条件、来源与许可](https://elucenia.org/zh/tools/frequencia-cardiaca-maxima)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`idade`

年 · 范围: 10–100

### 静息心率

`fcrep`

次心搏/分钟 · 范围: 30–150

### 峰值运动心率

`fcpico`

次心搏/分钟 · 范围: 50–230

## 方法版本

Tanaka 2001：208−0.7年龄；经典220−年龄；心率储备变时性指数Brubaker 2011

## 已记录的公式

最大心率（经典）: 220 − 年龄

最大心率（Tanaka）: 208 − 0.7 × 年龄

达到%: 峰值心率 ÷ 最大心率 × 100

变时性指数: (峰值心率 − 静息心率) ÷ (最大心率 − 静息心率)

## 限制与适用人群

Tanaka 2001方程估计健康成人的最大心率。输入儿童年龄执行计算，仅展示数学运算，并无证据支持该人群中的临床适用性。预测心率并非个体实际测得的最大心率；变时性功能不全诊断、药物使用及运动试验方案须依据专门评估与来源。

## 参考文献

- [Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001.](https://doi.org/10.1016/S0735-1097(00)01054-8)

- [Brubaker PH, Kitzman DW. Chronotropic incompetence: causes, consequences, and management. Circulation, 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.940577)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

达到次最大心率（≥ 85%）

| 结果详情 | |
| --- | --- |
| 最大心率（220 − 年龄） | 170 bpm |
| 最大心率（Tanaka） | 173 bpm |
| 最大心率的 85% | 145 bpm |
| 变时性指数 | 0.90 |


### 2

变时性指数 < 0.80：变时性不全（未使用β受体阻滞剂）

| 结果详情 | |
| --- | --- |
| 最大心率（220 − 年龄） | 170 bpm |
| 最大心率（Tanaka） | 173 bpm |
| 最大心率的 85% | 145 bpm |
| 变时性指数 | 0.70 |

