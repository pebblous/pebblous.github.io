---
title: AI Climate Models Nailed the Average but Missed the Warming Trend
subtitle: What AIMIP Phase 1 revealed by putting eight AI climate models on a single physics baseline for the first time
date: 2026-07-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Climate Models Nailed the Average but Missed the Warming Trend

_What AIMIP Phase 1 revealed by putting eight AI climate models on a single physics baseline for the first time_

## Executive Summary

> [!callout]
> For the first time, eight AI climate models from six research groups stood side by side on a single physics baseline. This is AIMIP Phase 1, led by the Allen Institute for AI. The result comes down to one sentence: they got the past average right, but half of them missed the trend heading into the future. This report does not ask whether AI is good at climate. It takes up the prior question — that before you can answer that, you first have to line up scattered models against the same yardstick.

> In reproducing the training period, the best AI models cut the time-mean error of surface temperature to roughly half that of the physics model — and did so almost regardless of architecture. Yet when they were tested on a period they had never seen, which happened to be the hottest decade in the observational record, they split: some tracked the warming trend accurately while others significantly underestimated it. It is a fracture the average, taken alone, would never have shown.

> For Pebblous readers, this is data quality one level up. Beyond the freshness of the input data, it is a story about the quality of the evaluation data and the evaluation protocol. Without a standard, there is no comparison; without comparison, there is no trust.

<!-- stat-card -->
**~½** — Mean-climate error — How much the best AI models cut time-mean error against the physics baseline (GFDL-CM4)

<!-- stat-card -->
**8** — Models on one yardstick — AI climate models from six groups, compared side by side for the first time

<!-- stat-card -->
**2015–2024** — Held-out test period — A decade the models never trained on — and the hottest decade on record

<!-- stat-card -->
**~0.21°C** — Real warming per decade — ERA5 observed rate (1979–2025) — the "true number" half the models undershot

## Eight Models, One Yardstick

Over the past few years, AI weather and climate models have poured out at a remarkable pace. Google DeepMind's GraphCast, NVIDIA's FourCastNet, Google Research's NeuralGCM, ECMWF's AIFS — each arrived with a report card claiming it had "beaten the physics model." But those report cards were scored on different data, over different evaluation windows, against different metrics. We had a set of champions who had each won their own league, and no one had ever put them on a single track to run side by side.

In May 2026, the Allen Institute for AI (Ai2) laid down that track for the first time. [AIMIP (the AI Weather and Climate Model Intercomparison Project) Phase 1](https://arxiv.org/abs/2605.06944) placed eight AI simulations from six research groups onto a single baseline — NOAA's physics-based coupled model GFDL-CM4 — and compared them against the same data, the same protocol, the same yardstick. It is the **first multi-party intercomparison** to line up AI climate models against one another.

The word "intercomparison" matters here. This is not the work of digging into why any single model is wrong; it is the work of asking whether these models can be **fairly placed side by side** in the first place. That is where it parts ways cleanly with earlier benchmarks. The table below lays out how AIMIP differs from the infrastructure that came before it.

| Infrastructure | What it compares | Character |
| --- | --- | --- |
| AIMIP | Multiple AI climate models against each other, on one physics baseline | Multi-party intercomparison — this study |
| WeatherBench2 | Mainly short-range weather forecast accuracy | Established forecast benchmark (3+ years running) |
| ClimateBench | Emulation of a single physics model (NorESM2) | Single-model imitation — not an intercomparison |

The very youth of this benchmark is the hook of the story. AIMIP's code repository is new infrastructure, released alongside the paper, with GitHub stars in the dozens. WeatherBench2, running for more than three years, is in the six hundreds; GraphCast, a single-model repository, reaches into the thousands. That gap is not a mark of inferiority — it is because the problem of "lining up multiple AI climate models" started far later than short-range forecasting, and is only beginning now. In other words, until this moment we had no common yardstick to compare AI climate models fairly at all.

## Designing the Yardstick

A benchmark earns trust from its design, not from a flashy headline result. The yardstick AIMIP built rests on three questions: what it compared (the participating models), how it split the data (training vs. validation periods), and what it measured (five evaluation axes).

### 2.1 What it compared — eight models and one baseline

The entrants were eight simulations from six research groups, differing in architecture and resolution alike. Alongside them stood NOAA GFDL's physics-based coupled model, GFDL-CM4, as the baseline — because to claim AI has "beaten" physics, you have to run it against that physics model under the same conditions.

| Model | Submitting group | Grid resolution |
| --- | --- | --- |
| ACE2.1-ERA5 | Allen Institute for AI | 1°×1° |
| ArchesWeather | Google DeepMind / INRIA | 1°×1° |
| ArchesWeatherGen | Google DeepMind / INRIA | 1°×1° |
| cBottle-1.3 | NVIDIA | HEALPix ~0.9° |
| DLESyM | U. Washington / NVIDIA | HEALPix ~0.9° |
| MD-1.5 v0.9 | U. Maryland | Submitted at 1°×1° |
| NeuralGCM | Google Research | Submitted on 7 pressure levels |
| NeuralGCM-HRD | Google Research | 1°×1° |
| GFDL-CM4 (physics baseline) | NOAA GFDL | Physics-based coupled model |

The paper does not disclose parameter counts per model. "Six research groups" counts the groups that submitted models; the paper's full list of co-authoring institutions is larger.

### 2.2 How it split the data — time it learned, and time it didn't

The heart of the design is how it cut time. Every model trained on 1979–2014 reanalysis data — the satellite era — and was then validated on 2015–2024. That validation window is a **held-out** period the models never saw during training. It is a real future, not a simulated one. The data follows the NetCDF and CF standards and is released under CC-BY 4.0, so anyone can re-grade the models under the same conditions. Reproducibility is what qualifies something as a benchmark.

One asymmetry is worth a footnote. Unlike the others, DLESyM trained on 1983–2016 and on only a subset of variables. For a fair comparison, differences like this should themselves be recorded and surfaced. That is precisely this report's meta-point.

### 2.3 What it measured — five evaluation axes

Rather than collapse performance into a single score, AIMIP broke it into five axes — to catch the tail that disappears when you look only at the average. These five axes are both a map of the story to come and a checklist a company can use, as is, when vetting any AI model.

<!-- stat-card -->
**E1 · Bias** — How accurately it reproduces the mean climate of the training period.

<!-- stat-card -->
**E2 · Trend** — Whether it tracks the long-term warming trend or underestimates it.

<!-- stat-card -->
**E3 · ENSO response** — Whether it responds correctly to large-scale variability like El Niño and La Niña.

<!-- stat-card -->
**E4 · Temporal variability** — Whether it preserves the true range of day-to-day temperature swings.

<!-- stat-card -->
**E5 · Out-of-distribution generalization** — Whether it responds in line with physical law even outside the training distribution (+2°C / +4°C forcing).

## They Nailed the Average

Once the yardstick was in place, the first result came through sharply. On the bias axis (E1) — the ability to reproduce the mean climate of the training period — the best AI models beat the physics model. And not by a hair.

> [!callout]
> The best AI models cut the time-mean error of fields like surface temperature to **about half** that of the physics baseline, GFDL-CM4. And this edge was not a fluke of one architecture. Diffusion model, graph neural network, or hybrid with differentiable physics: almost regardless of architecture, the AI side drew the mean climate better.
