---
title: The Two Superconductors Machine Learning Predicted Before Synthesis
subtitle: Of 7,000 materials found in 115 years, fewer than 20 were predicted in advance — a turning point toward search
date: 2026-07-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Two Superconductors Machine Learning Predicted Before Synthesis

_Of 7,000 materials found in 115 years, fewer than 20 were predicted in advance — a turning point toward search_

## Executive Summary

> [!callout]
> Since superconductivity was discovered in 1911, more than 7,000 superconductors have been confirmed by experiment. Yet fewer than 20 of them were predicted theoretically before the material was ever made. The rest were mostly products of trial and error and luck. That is why, more than a century after superconductivity appeared, discovery remained a matter of searching blindly.

> The SuperC consortium, which includes Aalto University and Rice University, reversed that order. Machine learning first narrows the promising combinations of elements, calculations then filter them, and only afterward are the materials actually synthesized and confirmed in the lab. The materials predicted and verified this way are the kagome-structured YRu₃B₂ and LuRu₃B₂. Their measured critical temperatures, however, came in at 0.81 K and 0.95 K — far below the theoretical predictions of 3.37 K and 1.88 K.

> This article looks less at the two materials than at how they were found. The result is not two superconductors but a pipeline that turned discovery from serendipity into search.

<!-- stat-card -->
**Under 20** — Superconductors predicted before synthesis — The other ~7,000 came from trial and error and chance

<!-- stat-card -->
**0.81·0.95 K** — Measured critical temperatures — Cryogenic, far from practical — the result is the method, not the temperature

<!-- stat-card -->
**Billions** — Candidates that can be pre-screened — The scale of chemical space machine learning makes tractable

<!-- stat-card -->
**2033** — SuperC's room-temperature target — This result validates the method on that roadmap

## 115 Years, 7,000 Materials, Fewer Than 20

Superconductivity is the phenomenon in which a material's electrical resistance vanishes completely below a certain temperature. Since it was first observed in 1911, more than 7,000 superconductors have been confirmed experimentally. But the way that list was built was mostly a slow, luck-dependent process: pick a candidate by hand, synthesize it one at a time, and measure it at low temperature.

Of those 7,000, fewer than 20 were predicted theoretically before the material was made. The reason is that the mechanism of superconductivity is itself hard to predict. In systems where electrons interact strongly with one another, calculating from first principles when and under what conditions superconductivity will appear has never been easy, and the experimental variables are complex too. So discovery has looked less like prediction and more like excavation.

The trouble is that the combinations of materials are effectively infinite. Depending on which elements you place in what proportions and in what structure, the number of candidates grows astronomically. Trying the most promising-looking ones one by one, guided by intuition and experience, only ever covers a tiny fraction of that vast space.

## Predict First, Synthesize Second

The SuperC consortium, led by Professor Päivi Törmä of Aalto University, is an international collaboration launched in 2023 that includes Rice, Princeton, Ruhr University Bochum, and the Donostia International Physics Center. This result was published in the journal _Physical Review Research_ in June 2026. The heart of their method is the ordering: where the field had long built a material first and then measured whether it superconducted, they let computation nominate the candidates first and synthesized only those.

The pipeline runs in four stages.

- **Machine-learning pre-screening** — a machine-learning model sweeps a vast set of element combinations and narrows them to candidates with a high likelihood of superconductivity. Instead of running expensive precise calculations on every candidate, the key is to place a cheap predictor upstream to compress the space.
- **First-principles calculation** — the narrowed candidates undergo precise quantum-mechanical calculations to confirm theoretically whether superconductivity will actually appear and what the critical temperature will be.
- **Synthesis** — materials that pass the calculations are actually made by the group of Professor Emilia Morosan at Rice University.
- **Experimental verification** — the magnetic susceptibility, specific heat, and electrical resistance of the samples are measured to confirm that superconductivity really occurs.
