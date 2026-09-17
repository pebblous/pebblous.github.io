---
title: Can Your Laptop Check What an AI Was Trained On?
subtitle: Gensyn
date: 2026-09-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Your Laptop Check What an AI Was Trained On?

_Gensyn_

## Executive Summary

> [!callout]
> An open source model ships its weights, its training data and its recipe together. Follow that recipe and the weights you get back are not the weights that were published. Floating-point addition depends on the order of the additions, so the last bit differs, and within a handful of steps the difference has compounded into a different model. A report posted to arXiv on September 15 closes that gap for one training run, down to the bit. This article looks at how the authors did it, and at what they paid.

> The model is Open-1B and the team is Gensyn, a company that has been working on the verification of machine learning computation. The number to watch here is not the parameter count but the step count. All 80,957 optimizer steps carry a published state hash, so anyone can pick one of them, recompute it on a laptop, and compare the result with what was published. The bill came due in speed. Against the same recipe in optimized PyTorch, the reproducible run is roughly five times slower on six nodes, which is also why it saw one tenth of the training tokens that OLMo 2 1B saw. Still, there is a long way between publishing a run and finishing the checks. Pull the audit record on September 17 and 19 steps out of the 80,957 carry an accepted check, while not one of the 810 segments of a hundred steps has reached confirmation.

> Sections 1 through 6 follow what the report, the audit tooling documentation and the public audit record say. Section 7 carries the material over to data practice, which is this article's own reading, and where the company had already written the same thing in its launch post, this article says so on the spot.

### Key Figures

Sources: [Donaghy et al., arXiv:2609.17380 (2026-09-15)](https://arxiv.org/abs/2609.17380) · [audit harness repository](https://github.com/gensyn-ai/open-transformers)

<!-- stat-card -->
**80,957** — training steps with a published hash — Not one step skipped. Each hash carries the one before it inside, so the run reads as a single chain

<!-- stat-card -->
**half a day** — time to check a single step — On an M4-class Mac. The same machine needs only 29.7 seconds when the unit stops at the initial state

<!-- stat-card -->
**about 5x** — the speed bill for reproducibility — Against optimized PyTorch on six nodes. On a single node the gap widens to 6.8x

<!-- stat-card -->
**50.1** — OLMES macro score — OLMo 2 1B scores 61.5, and it saw 4 trillion training tokens against 400 billion here

## Released Is Not the Same as Verified

The report sorts today's model releases into three tiers. Closed models reachable only through an API, open weight models that publish the final weights alone, and open source models that hand over the data and the recipe as well. Then it proposes a fourth tier, in which every operation on every data sample during training can be checked again by anyone on their own machine with bitwise certainty. The authors call that tier fully auditable.

A new tier needs two words separated first. Determinism means a computation returns the same result every time it runs on the same machine in the same environment. That is the property most deep learning frameworks offer under the name of a deterministic mode. Reproducibility asks for more. The result has to come back identical to the last bit across different hardware, a processor and a GPU included. The first can hold while the second fails, and that is exactly where open source models have been sitting.

The abstract says why the distinction bites in practice. Without the ability to produce the same result on another machine, a user cannot verify that the checkpoint they downloaded was actually produced by the declared recipe. That empty space leaves room for undisclosed data, injected biases, or backdoors. Existing techniques such as proof-of-learning or proof-of-training-data give probabilistic guarantees only, and a backdoor can be planted with a handful of poisoned examples, which slips straight through the net of sampled inspection.

> [!callout]
> The authors also draw a line around what the method delivers. An audit does not eliminate biases from the model. It does allow an auditor to be absolutely certain which biases may be present. For the first time, the authors write, there is the ability to detect backdoor injection attacks that use undisclosed data to compromise a model.

## Why One Recipe Answers Differently on Different Machines

The starting point is that the associative law you learned at school does not hold inside a computer. Floating point stores only a subset of the real numbers exactly and rounds the rest to the nearest value it can hold. Add three numbers and the rounding lands in a different place depending on whether you add the first two or the last two first, so the final bit changes. A GPU that splits a long sum across thousands of lanes and a processor that accumulates end to end are adding in different orders to begin with.
