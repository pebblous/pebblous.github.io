---
title: When the Data Picks Where You Look, the Signal Comes Out a Little Too Big
subtitle: An INFN physicist derives the greedy bump bias and the look-elsewhere effect from one and the same local template geometry
date: 2026-09-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When the Data Picks Where You Look, the Signal Comes Out a Little Too Big

_An INFN physicist derives the greedy bump bias and the look-elsewhere effect from one and the same local template geometry_

## Executive Summary

> [!callout]
> When you go looking for a bump in data without knowing in advance where it sits, you end up choosing its position from the data as well. Two things happen the moment you choose. If a genuine signal is there, its strength is measured larger than it really is. If no signal is there, one background fluctuation starts to look like a signal. A paper Tommaso Dorigo of Italy's National Institute for Nuclear Physics (INFN) posted to arXiv on September 3 places the two side by side in a Gaussian matched-filter model and shows that the same local geometry produces both.

> The bookkeeping turns on a single number, the dimension of the freedom you took. When D coordinates such as position or width are chosen from the data, the fitted signal strength is pushed upward by D/(2Q) on average. Q is the signal-to-noise ratio you would have with the position held fixed, so the weaker the signal, the bigger the bias. The same D turns up when no signal is present at all. The trials factor you pay when converting a local significance into a global one grows as the D-th power of the threshold u. The paper's result is that the two quantities are joined exactly by a single logarithmic derivative, and the author himself writes in his conclusions that the two problems are not identical phenomena but complementary limits of the same profiling and random-field geometry.

> Sections 1 through 3 follow what the paper actually measured and what it held back. Section 4, which carries the result over to dashboards and threshold tuning, is this article's reading rather than the paper's.

### Key Numbers

Sources: Dorigo, [The Greedy Bump Bias: Local Profiling Geometry and the Look-Elsewhere Effect](https://arxiv.org/abs/2609.03581), arXiv:2609.03581 (2026), Secs. 3, 8 and 9; [ATLAS (2016)](https://arxiv.org/abs/1606.03833) abstract

<!-- stat-card -->
**D/(2Q)** — How much a genuine signal inflates — 1/(2Q) for each coordinate chosen from the data, and larger the weaker the signal

<!-- stat-card -->
**3.9σ → 2.1σ** — ATLAS's 750 GeV excess of 2015 — Counting the chance of seeing it at other masses too pulled the significance down this far

<!-- stat-card -->
**0.53 → 1.05** — From local bias to global bias — At a weak signal of Q = 1, once the search half-range is widened to 14σ

<!-- stat-card -->
**Q ≈ 5 to 6** — Where the search range stops mattering — Above this the bias is the same no matter how wide a range you scanned

## Choose where to fit and the bump rises

Finding a new particle means finding a bump somewhere in a mass distribution. The trouble is that nobody knows which mass it sits at. So the standard move is to let the signal amplitude and the position float together and take whichever combination maximizes the likelihood. Shape parameters such as the width usually go into the fit as well. This operation is what the paper calls profiling.

The intuition is simple. Even when the signal model is correct, its position and its amplitude are estimated from the same noisy data. Letting the position float lets the fitted template adapt to that day's noise realization. It may move toward a positive fluctuation or away from a negative one. The displacement itself has no preferred direction, but which way it goes is settled by whatever improves the fit. So the change in the optimized peak height is positive on average.

The paper splits the fitted amplitude into two pieces. One is the ordinary fluctuation you would get with the template pinned to the true position, and that piece has mean zero. The other is the gain obtained by moving the template across the manifold. The entire bias comes from the second piece. Measure with the position held fixed and the bias never arises at all.
