---
title: Is Google
subtitle: Leipzig and Exeter researchers rescored 2022
date: 2026-10-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Is Google

_Leipzig and Exeter researchers rescored 2022_

## Executive Summary

> [!callout]
> On October 14, researchers at Leipzig University in Germany and the University of Exeter in the UK posted a paper to arXiv. Taking the record heat that occurred across global land through 2022, they rescored how well Google's probabilistic weather AI WeatherNext2 and the ECMWF IFS ensemble had each called it. The field's verdict had been running the other way. Several studies had reported that AI forecast models post good aggregate scores yet fall behind physics-based models on extreme events. This article follows how that verdict came apart.

> At 72 hours of lead time, WeatherNext2's Brier skill score sat 24% above the IFS ensemble. What changed was neither the models nor the data but the scoring. Earlier work had matched deterministic forecasts against each other, each issuing a single value, and the authors read that comparison as lining up forecasts that were never aiming at the same thing. The advantage did wobble depending on what was used as the answer key, and the authors wrote that wobble into the paper itself.

> Sections 1 through 4 follow what the paper states. Section 5, which carries the result over into the wider argument about model performance, is this article's reading.

### Key Figures

Source: [Wessel et al., arXiv:2610.20519 (October 14, 2026)](https://arxiv.org/abs/2610.20519).

<!-- stat-card -->
**24%** — Skill gain on record heat forecasts — Brier skill score at 72 hours against the IFS ensemble. The 90% interval runs 23-26%

<!-- stat-card -->
**39-45% → 9-17%** — Records above every ensemble member — Observed records that rose above every forecast member. IFS first, WeatherNext2 second

<!-- stat-card -->
**5,778** — Stations used for a direct recheck — HadISD surface observations. On record forecasts WeatherNext2 gained 10% at 72 hours and 19% at 84 hours

<!-- stat-card -->
**One year, one variable** — The scope the authors state — Operational forecasts for 2022, 2 m temperature alone. Whether it carries to other combinations is unknown

## ECMWF's Ensemble Misses Four in Ten Record Heat Events

Start with what was measured and how. The material is one year of operational forecasts from 2022, and the space is global land cut into a 0.25-degree grid. The forecast variable is 2 m temperature, nothing else. Lead times run from 12 hours to 120 hours in 12-hour steps, ten of them. Forecasts issued three days out and five days out were scored separately.

What counts as an extreme was nailed down in advance as well. The reference is a quantile drawn from ERA5 climatology for 1979 through 2017, and it differs by grid cell, by month and by forecast hour. A July afternoon in Seoul and a January night in the Sahara cannot be held to the same temperature. A record means a value above the highest in that reference period. Picking thresholds after the events are known would let a study steer its conclusion, so the authors fixed the thresholds first and only then began scoring.

The result tilted one way. At 72 hours of lead time, WeatherNext2 scored a Brier skill score of 24% over the IFS ensemble on record-breaking events. The 90% confidence interval of 23-26% is narrow. Lowering the bar to heat around the 90th percentile gives 23%. Switching to CRPS, which scores probabilistic forecasts as a whole, points the same way, with a 25% gain at the same 72 hours and a 90% interval of 24-25%. The gap widens as lead times shorten. Skill scores for the probabilistic AI models run around 30% at 12 hours and settle to 14-18% by 120 hours.

One further number reads more directly than the scores. It is the share of observed records that came in above every member of the forecast ensemble. However many ensemble members were run, even the hottest scenario among them fell short of what happened, which amounts to a missed alarm. For the IFS that share was 39-45%. Four in ten record hot events happened outside the range the forecast allowed for. The same figure was 9-17% for WeatherNext2 and 11-21% for WeatherGen, and 9-16% for EMOS, which statistically recalibrates the IFS ensemble.
