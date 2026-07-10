---
title: The AI Weather Model That Wins the Daily Forecast but Trails the Long Range
subtitle: What AI weather models fail to learn is not accuracy but how they sample time — the time axis of data quality
date: 2026-07-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Weather Model That Wins the Daily Forecast but Trails the Long Range

_What AI weather models fail to learn is not accuracy but how they sample time — the time axis of data quality_

## Executive Summary

> [!callout]
> AI weather models have already overtaken physics models — refined over decades — at forecasts a few days out. Yet the same models keep collapsing when faced with the slow rhythms of climate that repeat over months to years. The usual reading of this failure is "the accuracy just isn't there yet." This report reads it differently. The problem is not accuracy but how training samples time. What a model can learn, and what it can never learn, is decided not by parameter count or data volume but by the way the training signal slices time.

> Data-driven weather models learn by stitching together states a few hours apart and predicting the next one. That interval is often quoted as six hours, but it varies by model. More decisive is that the span the loss function actually unrolls during training reaches, at most, a few days. Open up six representative models and even the most generous case is five days. As a result, low-frequency signals that breathe on cycles of months to years — the quasi-biennial oscillation, or El Niño — never once enter the training signal in full.

> This principle is not confined to weather. Anywhere a predictive model is built from time series, sensors, or operational logs, how densely and how long the data was sampled sets, in advance, the ceiling on the cycles the model can learn. In Pebblous's view, data quality has to reach beyond static dimensions like missingness and noise to a dynamic one: the structure of how time is sampled. This piece traces, through the training procedures of six models, how the line between what AI forecasting won and what it cannot learn ultimately lies in the structure of the data.

<!-- stat-card -->
**~90%** — Share of short-range cases where AI beats the physics model — GraphCast variable–lead-time combinations vs. ECMWF HRES

<!-- stat-card -->
**5 days** — Longest span the training loss actually unrolls — Longest case among six models (NeuralGCM)

<!-- stat-card -->
**~170×** — How far the nearest low-frequency rhythm sits beyond that window — QBO's 28 months vs. 5 days (~3,400× against a 6-hour step)

<!-- stat-card -->
**~1/3** — Share of 30-year simulations that destabilized mid-run — Stability is not the same as learning rhythm (NeuralGCM family)

## Yesterday's Question, Today's

Just a day ago, we published a piece on this blog arguing that [AI weather models forecast the future using a climate that is twenty years old](/blog/ai-climate-model-cold-bias/en/). The question there was "what did the model learn?" If the distribution of the training data leans toward the past, then even the most sophisticated model overlays that stale climate onto the future. Today's piece drops that question one level down. Not what was learned, but how training sampled time.

The two questions rhyme, but they sit on different layers. If the earlier piece was about the data's **content** being stale, this one is about how the very act of **slicing data along the time axis** decides what can be learned at all. Different causal layers producing the same failure. The overlapping symptoms — the failure to reproduce low-frequency variability like the quasi-biennial oscillation or the Southern Annular Mode — were already covered in detail in that earlier piece, so we hand them off by link rather than restate them here. Instead, we go looking in the temporal structure of the training procedure for why that failure is a structural limit that accuracy tuning cannot narrow.

![Full-disk view of Earth captured by the GOES-16 satellite — the kind of observational data that feeds AI weather models](./image/img-01-goes16-earth.jpg)
*▲ A full-disk image of Earth from GOES-16 (2022-07-26). AI weather models are trained by stitching together observations like this at few-hour intervals. | Source: [NOAA / Wikimedia Commons (Public Domain)](https://commons.wikimedia.org/wiki/File:True_Color_Earth_viewed_from_GOES_16.jpg)*

> [!callout]
> The one sentence this piece adds is this. **A time scale the training signal never samples cannot, in principle, be learned — no matter how many parameters you add.** Data quality has more than static dimensions like missingness and noise; it has a time axis of interval, window length, and coverage.

## Winning Days, Losing Years

AI weather models' short-range edge is a quantitatively confirmed reality. Google DeepMind's GraphCast was more accurate than ECMWF's high-resolution physics model HRES on roughly 90% of variable–lead-time combinations, and it lifted forecast skill on core variables such as 500 hPa geopotential height by 7–14%. GenCast, a diffusion-based ensemble model, held the advantage on more than 97% of the targets it was scored against, compared with ECMWF's ensemble forecast. To say AI has won at the scale of a few days is no exaggeration.

Push the same models past two weeks, though, and the story flips. Forecast skill drops below climatology — below "just guess the seasonal average." Even ECMWF officially acknowledges that accuracy falls off sharply in the 15-day-to-two-month range. And when you reach low-frequency variability like the quasi-biennial oscillation (QBO) or the Southern Annular Mode (SAM), even scoring a success rate becomes meaningless — because reproduction itself is judged a failure. The schematic below summarizes how AI's edge reverses as lead time grows.
