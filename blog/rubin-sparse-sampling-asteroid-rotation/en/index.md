---
title: Can Scattered Snapshots Tell You How Fast an Asteroid Spins?
subtitle: Brazilian researchers thinned Vera C. Rubin Observatory data on purpose, and only 36 of 140 candidate asteroids kept a rotation period worth trusting
date: 2026-09-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Scattered Snapshots Tell You How Fast an Asteroid Spins?

_Brazilian researchers thinned Vera C. Rubin Observatory data on purpose, and only 36 of 140 candidate asteroids kept a rotation period worth trusting_

## Executive Summary

> [!callout]
> Asteroids spin at their own speeds, each one like a top. Working out how long a single turn takes is simple in principle. Photograph the same asteroid enough times and read the rhythm in its brightness. The catch is that the rhythm only becomes visible once enough photographs have piled up, and the observations the Vera C. Rubin Observatory in Chile left behind during its 2025 to 2026 test operations fall well short of that. Most objects were caught a few dozen times over a day or two and then left alone for weeks. A paper posted to arXiv on September 24 by Valerio Carruba of São Paulo State University in Brazil and nine co-authors turns the question around. Rather than gather more photographs, the team first calculated how photographs have to be arranged before an answer can appear at all. This article looks at what that calculation settled.

> The team took one well-observed asteroid and threw most of its record away on purpose. They divided the observations into a handful of time clusters, varied how wide each cluster opened, kept only 30 points, and checked ten times over whether the original rotation period still came back. Under the tightest setting, two clusters and the narrowest window, one method failed all ten times; with four clusters it succeeded all ten. The photograph count never moved. Applying that same standard to the real observations left 36 of 140 initial candidates standing, and those 36 had been observed 286 times on average. None of this says that sparse sampling is good enough. It says where sparse begins, in numbers.

> Sections 1 through 4 report what the paper says. Section 5 is the reading this article draws from it.

### Key Figures

Source: Carruba et al., [arXiv:2609.29841](https://arxiv.org/abs/2609.29841) (accepted at Planetary and Space Science), Sections 5 and 6 and Appendix Table C.7.

<!-- stat-card -->
**0 → 10 of 10** — Going from two clusters to four — At the narrowest window the Fourier method recovered the rotation period zero times out of ten tries. The retained sample stayed at 30 points

<!-- stat-card -->
**36 / 140** — Objects that cleared the reliability bar — About 26% of the 140 initial candidates drawn from the February and April datasets. No period was reported for the rest

<!-- stat-card -->
**286** — Mean observations among the 36 that passed — Close to the 290 recorded for the 76 objects with reliable periods in the earlier First Look sample

<!-- stat-card -->
**2 of 2** — Taxonomy checks against the literature that disagreed — Only two objects carried a published classification that could be compared directly, and both conflicted with this analysis

## Cutting Down the One Asteroid With a Known Answer

Rubin has not started its main survey. The data piling up now comes out of the work of tuning instruments and procedures, and it differs in character from the First Look release that came earlier. First Look covered nine nights, from April 21 to May 5, 2025, with roughly 340,000 observations across 2,103 objects. On every night but the last, more than 60 exposures were packed into a few hours. Even at that density, reliable rotation periods emerged for 76 objects. The median object was observed 132 times, while the 76 that yielded periods averaged 290. The science validation data used here is thinner. Most objects were caught 165 times or fewer, and even those observations bunch into two or three short stretches. In the February data, only 30 main-belt objects and two near-Earth objects were observed more than 150 times. Same telescope, different density.

![The Simonyi Survey Telescope dome at the Vera C. Rubin Observatory atop Cerro Pachón, Chile](./image/img-01-rubin-observatory-dome.jpg)
*▲ The Vera C. Rubin Observatory atop Cerro Pachón, Chile — source of the sparse observations this paper analyzes | Source: [J. Fuentes / Vera C. Rubin Observatory, NOIRLab/AURA/NSF (CC BY 4.0)](https://commons.wikimedia.org/wiki/File:A_Cloudy_Day_for_Rubin_(Rubin_dome_jfuentes-CC).jpg)*

Pulling a period out of data like that and calling it a good fit is easy. It is harder to know when that claim stops being true. Checking it requires a case where the answer is already known, and sparse data has no such case. Rather than go looking for a new answer, the team broke an answer it already had.

The test bed was an asteroid called 2026 DO14. It was observed 259 times and completed a full rotation within a single night. Its period runs about 1.9 hours and its brightness swing is large. It is the best-observed object in the paper, and one the authors pin down as "a particularly favorable validation case." It is also a super-fast rotator, a body less than 0.1 km across turning in under two hours. The batch submitted to the Minor Planet Center on February 27 consisted of one object photographed 259 times, a high-cadence sweep of the COSMOS and M49 fields, and that object is 2026 DO14. The sample that served as ground truth was not picked out of the rest of the data. It exists because it was photographed differently.

Three handles cut that record down. How many temporal clusters to place across the observing span (two, three, or four), how wide to open the window around each cluster (half-widths of 0.008 to 0.014 days, roughly 12 to 20 minutes), and how many points to keep inside them. The last handle was fixed at 30, the same per-band minimum the First Look paper had used.

> [!callout]
> That fixed count carries the whole experiment. With 30 points retained every time, any change in the result comes from how many separate sittings those 30 points were spread across, not from how many photographs were taken. Gathering more data cannot answer that question. Only cutting down the data already in hand can.

Each thinned dataset was redrawn at random ten times and refitted, and a result within ±10% of the original period counted as a recovery. Ten is not many, and the paper says as much in advance. The recovery rates that follow should be read as rough gradations rather than precise probabilities.

## How Two Methods Hold Up as Data Thins

There is more than one way to find a period, and this paper ran two very different ones side by side. The first is a high-order Fourier model (HOF), which lets the shape of the light curve run free and settles the number of terms with statistical tests. Flexible, but prone to mistaking twice or half the true period for the answer once data runs short. The second is a multi-band Lomb–Scargle model (LSM), which fixes the curve shape at second order and instead ties the brightness in four color filters (g, r, i, z) to one shared period and fits them together. That one trims the degrees of freedom so the search has less room to wander.

The table below holds what each method returned on the thinned data. Every cell is the number of times out of ten that the fit came back near the true value.
