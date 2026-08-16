---
title: Rationing Algorithms Widened Group Gaps as They Grew More Accurate
subtitle: Canadian child welfare and U.S. breast cancer data show scarcity and accuracy multiplying
date: 2026-08-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Rationing Algorithms Widened Group Gaps as They Grew More Accurate

_Canadian child welfare and U.S. breast cancer data show scarcity and accuracy multiplying_

## Executive Summary

> [!callout]
> Put a risk prediction model where demand runs ten times supply, and the more accurate the model becomes, the further the two groups' selection probabilities diverge, exponentially. A paper posted to arXiv on August 11, The Accuracy Trap, sets that relationship down as a formula and confirms the same trajectory at a Canadian child welfare agency and in a U.S. cancer registry.

> The mechanism is simple. Inaccurate scores scramble selection near the cutoff, and that randomness leaves the lower group with a selection probability above zero. As the model sharpens, the scrambling disappears and selection concentrates, in expectation, on the group sitting closer to the cutoff. In the Toronto child welfare data the ratio of selection probabilities between two regional teams was 1.03 when 95 percent of the caseload could be served, and 2.9 in the band where only 5 percent could.

> The point the paper nails down is that bias correction is no answer here. The structural gap Δ that enters the formula is what remains after debiasing has done everything it can, and accuracy amplifies that remainder instead of erasing it. Follow the law and the two empirical tests in turn, and the question at the end is not how accurate a score is but what that score is being used to divide.

### Key figures

Source: Moon, Tamura & Guha, [arXiv:2608.11491](https://arxiv.org/abs/2608.11491) §2, §3 and supplementary Table 3

<!-- stat-card -->
**exp(t·ρ·Δ)** — The law by which the relative gap grows — Scarcity t and accuracy ρ do not add. They multiply and sit in the exponent

<!-- stat-card -->
**2.9×** — Ratio of selection probabilities between two child welfare regions — Measured where only the top 5 percent are taken, against 1.03× when 95 percent could be served

<!-- stat-card -->
**0.058** — Gap in mean risk score between two Toronto regions — Inner 0.443 against outer 0.385, and that small interval becomes a near threefold gap in the tail

<!-- stat-card -->
**135,482** — Patients in the SEER breast cancer validation cohort — 118,662 white and 16,820 Black patients, with a predicted risk gap of 0.093

## Classification and allocation are different problems

Algorithmic fairness has long treated group gaps as a defect in the data and the model. Correct the training data, match calibration across groups, impose constraints that equalize error rates, and the gap shrinks. What the authors point out is that this conversation rests on an unstated assumption that resources are sufficient. It asked whether the algorithm lines people up correctly, but not what happens when there is almost nowhere to put the people it lined up.

The ground this argument stands on was cleared by sociology long ago. Charles Tilly described how organizational procedure turns small differences between groups into durable advantage, and Robert Merton called the process by which early advantage accumulates the Matthew effect. Algorithmic research has likewise noted that accurate prediction is no guarantee of better outcomes, and that the context a tool lands in decides the result alongside the tool. Even where bias was confirmed, as in the 2019 Science study that exposed racial disparity in a health risk prediction algorithm, correction stayed focused on adjustments inside the algorithm and never moved to the point where accuracy meets a shortage of resources.

In homelessness services, child welfare, and cancer treatment referral, demand exceeds supply by orders of magnitude. Under that condition allocation becomes rationing rather than matching. The system has to rank and then draw a cutoff that removes most of the queue, and selection happens in the extreme tail of the score distribution rather than around its middle. The statistics of the tail behave differently from the average statistics of classification.

The intuition the authors offer runs like this. Inaccurate ranking scrambles selection near the cutoff because of noise. That scrambling leaves a nonzero selection probability even for the group the allocation structure places lower. When the system sharpens, the randomness vanishes and selection in the tail converges, in expectation, on the group sitting closer to the cutoff. Inaccuracy has been working all along as an unintended equity buffer, in the paper's phrasing.

The diagram below shows how the composition above the cutoff changes when the same amount of resource is allocated and only ranking precision differs. Four people are selected on either side.
