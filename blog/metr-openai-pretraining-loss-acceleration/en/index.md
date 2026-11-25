---
title: No One Outside OpenAI Can Verify Its Pretraining Loss — METR
subtitle: OpenAI published loss for 13 models and METR found it falling 7.1 times faster since February, measured on the company
date: 2026-11-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# No One Outside OpenAI Can Verify Its Pretraining Loss — METR

_OpenAI published loss for 13 models and METR found it falling 7.1 times faster since February, measured on the company_

## Executive Summary

> [!callout]
> For the first time, OpenAI has made public the pretraining loss of thirteen models since GPT-3.5. It came in a post that chief scientist Jakub Pachocki [published on the company blog on November 22](https://openai.com/index/perplexity-and-intelligence/). Two days later the evaluation organization METR took the same data, refit it segment by segment, and wrote in its [analysis](https://metr.org/blog/2026-11-24-interpreting-a-recent-acceleration-in-pretraining-loss/) that the speed at which loss is falling went from 0.022 a year to 0.156 a year starting in February 2026, a factor of 7.1.

> The question is the exam paper those values were measured on. The main held-out set OpenAI has used since GPT-3.5 is drawn from the company's internal codebase, as Pachocki wrote himself. Researchers on the outside cannot see that code, so they can neither reproduce the value nor measure another company's model against the same yardstick. METR writes that if part of the evaluation set found its way into the training data, or if the models overfit the internal distribution, real progress may be overstated, and adds that no outside data exists yet to tell those possibilities apart.

> Sections 1 through 4 set out what is written in the OpenAI post, the METR analysis, and Epoch AI's public material. Section 5, which moves to the question of who builds evaluation data and who verifies it, is this article's own reading.

### Key figures

Sources: [METR (2026-11-24)](https://metr.org/blog/2026-11-24-interpreting-a-recent-acceleration-in-pretraining-loss/), [OpenAI (2026-11-22)](https://openai.com/index/perplexity-and-intelligence/), [Epoch AI](https://epoch.ai/data-insights/eci-frontier-trend)

The first three values all come from a single evaluation set inside OpenAI. The last is the pace of a different yardstick, measured outside on public benchmarks, and no comparable kink has been reported there over the same period. That gap is what METR points at.

<!-- stat-card -->
**7.1x** — Change in how fast loss falls — From 0.022 a year in 2022 to early 2026, to 0.156 a year after February 2026

<!-- stat-card -->
**0.99 → 0.76** — Published log-perplexity range — GPT-3.5 at about 0.99, GPT-4 at about 0.91, one recent unnamed model at about 0.76

<!-- stat-card -->
**6.5 months** — Time to repeat three years of decline — The drop that took three years from GPT-3.5 to GPT-4.1, converted to the current pace

<!-- stat-card -->
**16.6 pts a year** — Rise of the Epoch ECI frontier — 90% interval 14.6 to 18.7. A public index synthesizing more than 50 benchmarks

## OpenAI Puts Its Internal Loss Numbers Outside

Pachocki's post is titled "Perplexity and Intelligence." Its argument is that the capability of modern AI comes out of training a compressor and predictor on a very large corpus, and a proposal follows from that: make perplexity the shared metric the industry compares models with. Perplexity captures how little a model is surprised by the next token, and the smaller the number, the better the prediction. Pachocki calls the value perplexity, or cross-entropy loss, in the same breath. The numbers below are log-perplexity, the logarithm of that value, and what this article calls loss points at the same thing.

Four values appear in the post. GPT-3.5 sat at a log-perplexity of about 0.99 on the current main evaluation dataset and GPT-4 at about 0.91, losses later went below 0.8, and the company recently upgraded to a model at about 0.76. That last model is not named. The chart plots the trajectory of thirteen models since GPT-3.5, but the text carries no list of the intermediate values.

Ajeya Cotra, Jean-Stanislas Denain and Tom Cunningham of METR refit the base-model trajectory on that chart segment by segment two days later. From 2022 to early 2026, loss fell by 0.022 a year. Since February 2026 it has been falling by 0.156 a year. If that pace holds, the decline that took three years from GPT-3.5 to GPT-4.1 repeats in about 6.5 months.
