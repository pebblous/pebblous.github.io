---
title: LLMs Ranked Patients Using Proxies That Carried No Predictive Value
subtitle: University of Osaka researchers measured four models
date: 2026-08-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LLMs Ranked Patients Using Proxies That Carried No Predictive Value

_University of Osaka researchers measured four models_

## Executive Summary

> [!callout]
> A fairness audit usually runs like this. You swap in a demographic attribute or something correlated with it, then watch whether the model's decision changes. If it changes, that counts as evidence of bias. But a neighbourhood indicator correlates with race and at the same time carries real information about environmental exposure. A rational decider should change its decision when such a value changes. The fact that a decision changed therefore cannot, on its own, separate discrimination from sound inference.

> A paper posted to arXiv on August 24 puts a number into that gap. It computes exactly how far a prediction-optimal decision rule holding the same information would lean on the variable, and takes that value as the reference. The authors asked four LLMs to pick which of two patients to see first. In the condition where the proxies carry no information about the outcome, so the reference is exactly zero, all four models reading neutrally named fields still leaned on them. The experiment that follows is the more uncomfortable one. Raising the strength of the evidence across four levels barely moved the models' reliance at all.

> On the regulatory side that gap turns into a practical problem. Demands to show that bias has been identified and evaluated are growing, and an audit with no quantitative reference will penalise reliance the evidence supports while taking comfort in suppression that a field name alone holds down. False alarms and misses come out of the same run. Computing that reference, though, requires knowing the outcome rule, and observational data alone cannot identify it without strong assumptions. That is why the study runs on a fully specified synthetic generating process. The authors placed seven real clinical datasets on the same structural axes to show that the manipulated range straddles reality, but that comparison covers covariance structure only.

### Key figures

Source: Wu & Xiao, [arXiv:2608.22887](https://arxiv.org/abs/2608.22887) (2026-08-24)

<!-- stat-card -->
**+19.7pp** — Reliance on a proxy with zero information — Claude Sonnet 4.5 at 12 attributes under neutral labels. The evidence-warranted level in this condition is exactly zero

<!-- stat-card -->
**0.05** — Slope at which reliance follows the evidence — A slope of 1 would be calibrated tracking. Pooled over the three identically configured models, with all eight fits between −0.08 and +0.15

<!-- stat-card -->
**+15.7pp** — Reliance revived by provably clean examples — Measured with examples orthogonalised so the proxy-outcome correlation is exactly zero. A rational learner given the same examples showed −1.0

<!-- stat-card -->
**24pt** — Reliance gap at indistinguishable accuracy — Across conditions and models whose accuracy cannot be told apart statistically, proxy reliance differed by as much as this

## Audits only ask whether the decision changed

Emergency-department triage is a leading route by which LLMs enter decisions about people. Large-scale evaluations on simulated clinical decision tasks have already been run under physician review. In settings like these, the law draws a line that behavioural evaluation has so far struggled to redraw. Using a variable because it predicts the outcome is ordinarily treated as legitimate inference. Using that same variable because it stands in for a protected attribute such as race or gender is, on the dominant legal account, proxy discrimination.

The difficulty is that a single variable can be both things at once. A neighbourhood indicator correlates with a patient's race and also carries real information about environmental exposure. How much reliance on it is justified is a quantitative question rather than a yes-or-no question, and scrutinising which inputs a system receives cannot settle it.

The audits in use today do not answer that question. The dominant paradigm changes a demographic attribute or its correlates, observes whether the model's decision changes, and treats a changed decision as evidence of bias. Yet a rational decider changes its decision whenever the manipulated attributes carry genuine signal. An unchanged decision, conversely, can mean fairness or ignored evidence. Benchmarks of social bias carry the same limitation in a different form. They are largely built so that group membership should not be used as evidence, which leaves them silent about situations where group-correlated information legitimately should matter.

Others have pushed at this limitation. Difference-aware evaluations ask in which situations group information should legitimately matter, and causal audits have been proposed to separate job-relevant pathways from impermissible ones. This paper takes a slightly different route. A recent line of work held LLM confidence against Bayesian updating as an explicit normative standard, and what turned up there was structured bias rather than noise. The authors carry that move over to discrimination. Where the confidence studies used a posterior probability, this study puts a different value in its place.

One thing was missing. A quantitative reference for how much reliance the available evidence supports. Without one, an audit can report a difference but cannot render a verdict. Zengqing Wu and Chuan Xiao at the University of Osaka set such a reference: the degree of reliance on group-correlated attributes that a prediction-optimal decision rule with the same information would show, which the paper calls the evidence-warranted level.

The reference is statistical and task-conditional. It measures the reliance warranted by the specified outcome rule and ranking loss, and it does not by itself establish that such reliance is legally permissible or morally justified. Computing it requires knowing the true relationship between attributes and outcomes, which observational data alone cannot identify without strong assumptions, so the study runs on a fully specified synthetic generating process. That is a precondition for defining the quantity, not a convenience.

## Every model leaned on proxies with no information

Every experiment runs on one task. Prompted as a triage specialist, the model sees two patients described by named numeric indicators and picks one to prioritise. The clinical vignette is only the surface, and the statistical structure underneath is fully known because the authors generate the patients themselves. Each patient carries 6, 12 or 18 attributes at a fixed two-to-one ratio of legitimate to proxy attributes. Legitimate attributes determine the true risk and proxy attributes correlate with the protected attribute, which never appears in any prompt. The setup mirrors deployments where the protected attribute is withheld but its correlates are not.

The measurement is a causal intervention. For each pair the authors run one factual arm and two counterfactual arms, setting the target patient's protected attribute to each value and regenerating only that patient's proxy attributes through the structural equations with all exogenous noise held fixed. The comparator patient is never intervened on. The difference between the probabilities that the model picks the target under the two settings is the directed proxy-specific effect. Within each structural condition, 99 fixed evaluation pairs are shared across every rule, label, model and evidence condition, so the comparisons are paired.

Four models were tested. Claude Sonnet 4.5, DeepSeek-V4-Flash-0731 and Qwen3.7-max ran on an identical configuration, at temperature zero with forced tool choice producing single-token answers. GPT-5.6 Terra does not accept a temperature setting and runs with reasoning disabled at the provider default, so it is reported as a separate channel throughout the paper. Pooling it with the other three changes no verdict.

The key experimental lever is the proxies' true predictive value. In the zero-information condition the proxies carry no outcome information beyond what the legitimate attributes already hold. The evidence-warranted level is therefore exactly zero, and any proxy effect measured there is unwarranted by construction. With neutrally named fields, Sonnet showed proxy effects of 11.1 points at 6 attributes, 19.7 at 12 and 14.6 at 18. All 95% confidence intervals excluded zero.

At field level, the two proxy fields sit among the strongest correlates of the model's choices, and the ratio of proxy to legitimate correlation rises from 1.3 to 4.2 as the attributes become more entangled. The models are not merely brushing against the proxies. They are putting weight on fields that carry no diagnostic content. Excess reliance at 12 attributes was near identical across the three identically configured models, at 19.7, 22.2 and 20.2 points. The paper reads that as a shared baseline rather than a quirk of one system.

### 2.1. One signal yields three verdicts

Switch to the condition where the proxies genuinely predict the outcome, and the verdict flips with everything the model sees held fixed. Under neutral labels, reliance was not distinguishable from the reference at 6 and 18 attributes and exceeded it by 7.1 points at 12, with an interval from 1.0 to 13.6. An attribute-substitution audit would report a changed decision in both conditions alike, which means flagging one correctly and the other wrongly. In the same condition DeepSeek-V4-Flash-0731 exceeded the reference by 12.1 points and Qwen3.7-max by 10.1.

The third verdict appears when the field names change. Renaming the proxy fields with neighbourhood and occupation terms instead of biomarker terms pushed Sonnet's reliance below the reference by 9.6 to 12.1 points, with every interval across dimensions excluding zero. The suppression carries no measurable accuracy cost where the design can detect one, so the paper does not call it overcorrection. It does deviate from the warranted level in the opposite direction, and an audit that looks only for excess sensitivity never sees this deviation at all.
