---
title: Random Sampling Beats Smart Sampling in a Data Quality Benchmark
subtitle: Measuring missing, duplicate, and outlier rates across millions of rows, schema-based proxy sampling was up to 40x more wrong
date: 2026-08-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Random Sampling Beats Smart Sampling in a Data Quality Benchmark

_Measuring missing, duplicate, and outlier rates across millions of rows, schema-based proxy sampling was up to 40x more wrong_

## Executive Summary

> [!callout]
> Scanning a dataset of millions of rows end to end just to check its quality in real time is too slow. So teams sample a fraction and estimate the whole from it, and the engineer's instinct usually runs like this: if you know the schema and the statistical structure, surely a cleverly chosen sample beats grabbing rows at random. A benchmark released in 2026 put that instinct to the test across nine sampling strategies, and the result came out the other way.

> On 500,000 rows of NYC 311 service requests audited at a 5% budget, plain random sampling landed a mean relative error of 0.49%. Smart sampling that steered the draw with an attribute-dependency graph came in at 19.5% under the same conditions, roughly 40 times more wrong. Across real administrative data the gap ran from 11x to 49x, and cluster sampling, which uses no proxy at all and merely splits by position, tied random for practical purposes. What separated winners from losers was not cleverness but representativeness.

> That 40x traces back to two failures. One is a structural blind spot: smart sampling chases numeric outliers and misses the categorical columns where quality defects actually pile up. The other is worse: on IoT sensor data its outlier estimate collapses to essentially zero. For any team designing a real-time data quality gauge, the finding compresses into a single question. Which comes first, choosing where to look, or looking evenly?

<!-- stat-card -->
**~40x** — random sampling's accuracy edge — NYC 311, 500K rows, 5% budget — RU 0.49% vs DAG 19.5% error

<!-- stat-card -->
**5% · <1%** — budget and error — seeing just 25K of 500K rows keeps all 4 metrics under 1% error

<!-- stat-card -->
**29.6% → 0%** — IoT outlier estimate collapse — smart sampling barely sees the real defects even at 100% budget

<!-- stat-card -->
**12–47x** — smart sampling's speed penalty — the gap widens vs random as data grows to 5M–7.41M rows

## Measuring Millions of Rows in Real Time

In a data-centric AI pipeline, data quality profiling acts as a gate. Before data goes into training or serving, you measure things like missing rate, duplicate rate, outlier rate, and functional-dependency violation rate, then block what fails and let the rest through. The catch is speed. Scanning all 5 million rows to compute those metrics takes tens of seconds to a few minutes on a single machine. When data refreshes daily and pipelines run constantly, that cost becomes the wall that blocks real-time monitoring.

The standard alternative is progressive sampling. You draw only a fraction of the whole, a budget, and estimate overall quality from it. A 5% budget means you look at 250,000 of 5 million rows and defer the rest. The question that matters is which sampling strategy strikes the best balance between accuracy and cost.

Here an old assumption enters. The expectation is that smart sampling, which exploits correlations between columns or schema structure to draw from "where problems are likely," should beat random sampling that pulls any row uniformly. Prior work, which found that quality errors cluster along data dependencies, has propped up that expectation. Laure Berti-Équille's benchmark tests the assumption with the first systematic measurement across nine sampling strategies.

> [!callout]
> **The setup**: representativeness-based strategies such as random, geometric, Yamane, and cluster sampling were pitted against DAG-MCMC, Metropolis, stratified, and importance sampling, which steer the draw with an IQR error proxy, all on the same data and the same budget. One question sat on the scale: is choosing the sample cleverly really an advantage?

## Nine Sampling Strategies, Head to Head

The benchmark used eight datasets, from controlled synthetic data to real administrative records to IoT sensor streams. The sharpest scene comes from 500,000 rows of New York City 311 complaints. With a 5% budget, that is 25,000 sampled rows, used to estimate four quality metrics, random sampling posted a mean relative error of 0.49%. Seeing just 5% of the data instead of scanning all of it, it pinned overall quality to under 1% error.

On the same data and the same 5% budget, DAG-guided sampling had an error of 19.5%. The two differ by roughly 40 times. That is, the cleverly chosen sample was 40 times less accurate than the random one. What matters is that this was not a fluke of one dataset. Across real administrative data, smart sampling ran 11x to 49x worse than random, and the gap was statistically significant under a signed-rank test.
