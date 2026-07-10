---
title: A Neural Network Trained on Noise Corrected Its Own Overconfidence
subtitle: KAIST
date: 2026-07-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Neural Network Trained on Noise Corrected Its Own Overconfidence

_KAIST_

## Executive Summary

> [!callout]
> When an AI is confidently wrong, we usually blame the data — too little of it, or too messy. A team at KAIST offers a different answer. The root of overconfidence, they argue, lies not in the data but in how a network is set up before training even begins: the random initialization that has hardened into standard practice. A network that has seen no data at all already holds strong confidence in particular answers, and that bias survives all the way through training into the final model.

> The remedy is surprisingly simple. Before showing the model any real data, you let it warm up on meaningless random noise for a while. It learns nothing in this phase — its accuracy stays at chance level. Yet a model that has gone through this apparently pointless warm-up shows a statistically significant drop in calibration error during real training (P<10⁻³), and gains the ability to lower its confidence on unfamiliar inputs: the metacognition to say "I don't know what I don't know."

> What Pebblous finds compelling here is the shift in framing. Is trustworthy AI purely a matter of cleaner data, or is it a matter of the training recipe? Seeing calibration as a question of training order rather than data reminds us that data quality and training design are, in the end, two halves of the same body.

### Key Figures

Four numbers compress the finding: the statistical evidence that overconfidence exists before any data is seen, how far that bias fades after the noise warm-up, the accuracy that reveals the warm-up's paradox, and the calibration gain confirmed in real training.

Sources: [Nature Machine Intelligence (2026)](https://www.nature.com/articles/s42256-026-01215-x), [arXiv:2412.17411](https://arxiv.org/abs/2412.17411)

<!-- stat-card -->
**P<10⁻³** — Overconfidence before training — Class bias in a network that has seen no data (one-way ANOVA)

<!-- stat-card -->
**P=0.429** — Bias dissolved — Class bias disappears statistically after the noise warm-up

<!-- stat-card -->
**Chance level** — The warm-up's paradox — Loss falls during noise training, yet accuracy stays at chance

<!-- stat-card -->
**P<10⁻³** — ECE & OOD gains — Lower calibration error and better detection of unfamiliar inputs, both significant

## Confidently Wrong

Anyone who has worked with AI knows the scene. The model returns an answer that is plainly wrong, and the confidence score attached to it reads 99%. It misreads a medical image with conviction, mistakes an unseen road situation for a familiar one, treats an unfamiliar pattern as if it knows it. The problem is not being wrong; it is being wrong without lowering its confidence. What we really want is not an AI that never errs, but one that tells us when it doesn't know.

The measure of this mismatch is calibration. A well-calibrated model should be right about 80% of the time among all the predictions it labels "80% confident." How badly that promise is broken, summed into a single number, is the Expected Calibration Error (ECE). A large ECE means the gap between stated confidence and actual accuracy is wide — and that gap usually leans toward overconfidence.

> [!callout]
> Accuracy and calibration are different abilities. Accuracy measures how often a model is right; calibration measures how honest its confidence is. However accurate a model is, if its confidence is dishonest, the decisions we make trusting that confidence become dangerous. A trustworthy AI is, in the end, one that knows its own ignorance.

## The Culprit Was Initialization, Not Data

So where does overconfidence come from? The usual answer is the data: biased data, insufficient data, dirty data taught the model wrong. But before suspecting the data, the authors looked one step earlier — at random initialization, the stage where a network's weights are filled with random numbers before any learning starts. Nearly every deep learning model today begins here, and we take the practice so much for granted that we never think to question it.

What they found was unexpected. When they examined the output of a freshly initialized network that had seen no data at all, confidence was already skewed toward particular classes. With nothing learned, the network still favored some answers over others. When the authors tested this output distribution with a one-way ANOVA, the bias between classes was statistically clear (P<10⁻³). Confidence that already exists at zero bits of knowledge — this was the seed of overconfidence.
