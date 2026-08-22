---
title: LLMs Followed the Newer Timestamp Over the Reliability Flag
subtitle: An Oxford and GSK benchmark deliberately set text summaries against numeric time series to measure seven open-weight models
date: 2026-08-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LLMs Followed the Newer Timestamp Over the Reliability Flag

_An Oxford and GSK benchmark deliberately set text summaries against numeric time series to measure seven open-weight models_

## Executive Summary

> [!callout]
> When we talk about data quality, the job we usually picture is finding the wrong value. The situation a growing pipeline runs into more often looks different. Every value is valid, and they still point to different conclusions. A paper posted to arXiv on August 20 by researchers at Oxford and GSK measures what a language model believes first at that moment, under controlled conditions.

> The finding is not that models get confused and pick at random. They behaved far more consistently when one source carried a more recent timestamp than when one source carried a note saying it was corrupted. Reliability that somebody wrote down explicitly turned out to be a weaker cue than recency, which nobody wrote down at all. Adding an external forecasting tool made things worse still, producing conditions where accuracy fell to near zero even though context that predicts the answer perfectly sat right there in the prompt.

> The authors draw a clear boundary around these numbers. Everything is synthetic, and the forecast is narrowed to a binary choice between high and low. This is a stress test built to isolate arbitration behaviour, not a reproduction of a deployment environment. What the stress test exposed, though, sits very close to the way we currently push evidence into RAG systems and agents.

### Key Numbers

Source: Carletti et al., [arXiv:2608.20116](https://arxiv.org/abs/2608.20116) (2026-08-20)

The four numbers below are different in kind. The 50% is a design constant the authors fixed before running anything, and the other three are measurements taken on top of that design. Each came out of a different condition, so they should not be read as one continuous line. The small print on each card is where that condition is recorded.

<!-- stat-card -->
**Near 0%** — Accuracy when a tool forecast fought the context — Reached often by Qwen3 and Gemma when the context evidence sat earlier in the prompt, though that same context on its own yields very high accuracy

<!-- stat-card -->
**50%** — Share of values blanked out as a do-not-trust signal — Half the time series was left missing and the text carried a corruption note, and it still worked as a weaker cue than recency

<!-- stat-card -->
**0.20 vs 0.01** — Swing from changing only the answer labels — For Qwen3-4B, accuracy under conflict moved by 0.20 on average while the same model's text-only accuracy moved by 0.01

<!-- stat-card -->
**Below 0.5** — Accuracy that dropped under a coin flip — Recorded by larger Qwen3 variants when the text held the answer and the numbers pointed the other way, meaning they were not confused but systematically picking the wrong side

## When Both Values Are Valid and Still Disagree

The examples the paper opens with are a hospital and a factory. A clinician's assessment says the patient is stable while the vital signs keep deteriorating. On the plant floor, sensor values sit inside the normal range while the maintenance report says failure is imminent. Neither side has been tampered with or polluted. The two records diverge because they cover different moments, or one was observed more sparsely, or one of them is a prediction rather than an observation.

The researchers call the model's choice in that situation arbitration. The problem is that arbitration is nearly impossible to measure on real data, where which side is correct and which side is more trustworthy are usually both unclear. So this study manufactures the conflict while holding the ground truth in hand from the start.

Conflict itself is not a new subject. Documents that contradict each other, and knowledge learned in the weights contradicting knowledge arriving in the prompt, have both been studied several times. In that work, models proved easy to sway by where evidence sat and how it was written, and rarely expressed uncertainty when the evidence conflicted. The gap this paper identifies sits between text and numbers.

Here is how the instances are built. A latent risk trajectory moving between 0 and 1 is generated, and both a numeric time series and a natural-language summary are drawn from that same trajectory. The observation window is 16 steps at one-minute spacing, and what the model has to answer is whether the value at the next step will be above or below 0.5. The target value is placed far enough from the threshold by design. The task has to be easy, because only then can a wrong answer be attributed to arbitration rather than capability.

The conflict is created by drawing a second trajectory conditioned on the opposite label. The original numbers stay where they are, and the newly drawn trajectory is turned into sentences by the same generator. The result is a summary that is coherent on its own terms and says the exact opposite of the numbers beside it. The summary never contains a specific value. It is restricted to describing qualities such as the overall trend and whether a threshold was crossed, so the two sources never become the same statement in two formats.

The diagram below is that structure. Two formats branch off a single latent trajectory, and building a conflict means swapping only one branch for an opposite-label version.
