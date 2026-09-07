---
title: The False-Alarm Rate of a PLATO Planet Search, Measured Before Launch
subtitle: An independent researcher ran 1,720 simulated light curves, and moving the floor from 6 to 8 took false alarms from 79% to 0.6%
date: 2026-09-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The False-Alarm Rate of a PLATO Planet Search, Measured Before Launch

_An independent researcher ran 1,720 simulated light curves, and moving the floor from 6 to 8 took false alarms from 79% to 0.6%_

## Executive Summary

> [!callout]
> Observation alone does not decide what a telescope discovers. The weakest signal you agree to accept as a candidate decides it too. PLATO, the European Space Agency's next transit survey, has not launched yet, and a paper posted to arXiv on September 4 has already priced what moving that line costs. Its author is a single independent researcher working outside the PLATO consortium.

> Moving the line from 6 to 8 takes the share of planet-free light curves that still return a candidate from 79% down to 0.6%. Over the same range, the share of injected planets the pipeline hands back falls from 61% to 51%. Fewer phantoms means more missed planets, and this paper's contribution is the exchange rate for that trade, written out in numbers while there is still time to choose.

> Sections 1 through 4 follow what the paper measured and the reservations its author states himself. Section 5, which carries the result over to data pipelines, is this article's interpretation.

### Key Numbers

Source: Yohann Tschudi, [Habitable-zone Earths at the detection frontier](https://arxiv.org/abs/2609.04887), arXiv:2609.04887 (2026), Sects. 3 and 4 and Fig. 2

<!-- stat-card -->
**79% → 0.6%** — False-alarm rate as the floor moves from 6 to 8 — Share of the 465 planet-free light curves that returned a candidate

<!-- stat-card -->
**61% → 51%** — Completeness over the same range — The share of injected planets recovered comes down with it

<!-- stat-card -->
**6.0% / 54%** — The two values at the adopted floor of 7.5 — False-alarm rate and completeness at the point chosen for discovery

<!-- stat-card -->
**4.0** — Habitable-zone Earths expected as candidates — Out of about 19 statistically present inside the footprint (+4.2/−1.8)

## What Happened When the Floor Went Up by Two

A transit search looks through a record of a star's brightness for the moments when it dims very slightly, over and over on a fixed period. A planet crossing in front of its star blocks a little light and leaves a shallow notch in the light curve. The trouble is that starspots, stellar oscillations and leftover instrument error carve notches of their own. So search software scores every signal it finds and promotes it to the candidate list only when that score clears a line set in advance. The paper calls that line the acceptance floor, and the statistic it applies to accounts not only for white noise but for the red noise that stays correlated across time.

With the floor at 6, 79±2% of the 465 light curves that had no planet injected return at least one candidate. That 79% is not the share of the candidate list that is fake. It is the share of stars with nothing there at all that produced a phantom anyway. At a floor of 8 the count drops to 3 of 465, or 0.6%. Noise-made signals are largely confined below a score of about 7.5 to 8, while real planets extend above it. Over the same range, though, completeness, the share of injected planets the pipeline actually recovers, falls from 61±2% to 51±2%.

The operating floor the author adopts for discovery is 7.5. At that point the false-alarm rate is 6.0±1.1% and completeness is 54±2%. For work that needs statistical purity he recommends 8 instead. The three operating points sit side by side below.
