---
title: A LoRA Model
subtitle: A November 5 arXiv paper — reading only the text 36 LoRA models produced, a classifier named the right subject area 64% of the time, where guessing gets 20%
date: 2026-11-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A LoRA Model

_A November 5 arXiv paper — reading only the text 36 LoRA models produced, a classifier named the right subject area 64% of the time, where guessing gets 20%_

## Executive Summary

> [!callout]
> Collect nothing but the answers a LoRA-tuned language model gives, and you can still tell what kind of data it was trained on far better than by guessing. That is the result of a single-author paper Shivesh Rane posted to arXiv on November 5, which recovers the domain from the model's output without ever looking at a line of the original training data.

> The accuracy is 64%. The task is to pick one of five domains — medical, code, mathematics, multilingual and creative writing — so guessing lands at 20%. The surprise is the ordering. Opening the adapter file and measuring how far the weights had moved reached only 42%, and that figure sits inside an interval that overlaps chance. A pre-registered hypothesis said the deeper the look into the model, the more it would give up. The data turned that around.

> Sections 1 through 5 follow the facts and figures the paper states. Section 6, on what an organization that ships adapters trained on internal data should look at again, is our reading.

### Key Numbers

The first two cards are the accuracies that split along access level. The third is the score when the task is naming the dataset itself rather than the domain, and the fourth is what the whole study cost.

Source: [arXiv 2611.07610](https://arxiv.org/abs/2611.07610) (November 5, 2026) · one base model throughout, Qwen3.5-0.8B

<!-- stat-card -->
**64%** — training domain named from generated text alone — one correct answer out of five, so chance is 20%

<!-- stat-card -->
**42%** — training domain named from weight statistics — the lower end of the interval drops to 19.4%, under the 20% a guess would score

<!-- stat-card -->
**100%** — accuracy at naming which dataset it was — one correct answer out of 18, where chance is 5.6%. Generated text alone reaches 94.4%

<!-- stat-card -->
**US$30** — cloud GPU spend for the entire study — that ceiling cost the study two of the 20 datasets it had meant to use

## The Assumption Behind Shipping an Adapter Without Its Data

LoRA is the most widely used way to bend a large language model toward a particular job. The original weights stay frozen, and a pair of small, flat matrices is trained alongside them. What comes out is one file far lighter than the model itself, and that file is called an adapter. Because it is small and can be snapped on and off, teams handing an in-house model to a client or uploading it to a public hub usually pass around the adapter rather than the base.

Underneath that practice sits an assumption nobody had properly tested. An adapter is the result of training, not the training data, so handing over the file is not supposed to hand over what the model learned from. Whether a model was tuned on clinical consultation records or on an internal codebase, the receiving side is thought to get the capability and nothing about the ingredients.

"Embedding-Space Fingerprinting of LoRA Fine-Tunes," which went up on arXiv on November 5, puts that assumption on the stand. The question is a plain one. Given only what the model produces, and no sight of the training data at all, can a single simple classifier recover the domain the model was tuned on?

Other work has aimed at nearby targets. Membership inference, which asks whether a particular example was used in training, is often barely above chance on large language models. Dataset inference asks whether a whole dataset went in. Both require a candidate in hand before the question can even be posed. This paper's question is coarser and needs no candidate. It can be asked by anyone holding nothing but the model, which widens the set of people in a position to ask.

> [!callout]
> The question is not which data leaks but which kind of data leaks. Reconstructing one patient's record and revealing that an adapter was built on medical data are different events. The paper is about the second, and trade secrets usually ride on the second as well.

## Thirty-Six Fine-Tunes at Three Levels of Access

The raw material is 18 public datasets grouped into five domains. Medical holds four — PubMedQA, MedMCQA, ChatDoctor-HealthCareMagic and MedQA-USMLE. Code holds four: Python-code-instructions-18k, Evol-Instruct-Code-80k, SQL-create-context and Code-instructions-122k. Mathematics holds three: MetaMathQA, MathInstruct and Orca-Math-200k. The multilingual group, meaning non-English text, holds IITB English–Hindi, OPUS-100 German–English and the non-English slice of Aya. Creative holds WritingPrompts, TinyStories, Opus-WritingPrompts and Instruction-Poems.

One base model, Qwen3.5-0.8B, was used for everything, loaded in 4-bit quantization. Each dataset was run twice under different random seeds, producing 36 fine-tunes. Every other setting was held fixed: rank 16 with alpha 32, a budget of 1.5 million training tokens, a learning rate of 2×10⁻⁴ with linear decay, an effective batch size of 16, one epoch. With only the dataset free to vary, whatever separates one adapter from another has to come from what it learned on.

There are three ways of looking, and each one has less access to the model than the last.

The three interrogate different things. White-box access takes the adapter file itself and reduces each module to a handful of numbers describing how far its values moved. Gray-box access cannot open the file but can run the model, so it feeds in 200 domain-neutral prompts and records the mean and spread of what rises through each layer. Black-box access sees nothing inside the model and keeps only the answers that come back to those same prompts. Even so, it ends up with the largest feature count of the three.

| Level of access | What goes in | Features |
| --- | --- | --- |
| White-box (the weights) | How much the adapter shifted things — Frobenius norm per module, top-8 singular values, the layer-by-layer norm profile, the mean spectrum and four global scalars | 48 |
| Gray-box (internal activations) | Mean and spread of the activations at every layer under 200 neutral prompts — three curves resampled to 24 points each, plus six global scalars | 78 |
| Black-box (the generated text) | The answers written to those same prompts — three predictive-entropy values, four response-length statistics, a 64-bucket histogram of token ids and a 384-dimensional sentence-embedding centroid | 455 |

The probe prompts were chosen to lean toward no domain at all, along the lines of "Describe your morning routine." Source: [arXiv 2611.07610](https://arxiv.org/abs/2611.07610)

The classifier is one standardized logistic regression. No deep network, no separately trained model. Evaluation pulls an entire dataset out, trains on the rest and asks the classifier to label the one held back, and the author states that this protocol was frozen before any result was seen. The design stops a second seed of the same dataset from leaking the answer.

## The Deepest Look Into the Model Scored the Worst

The hypothesis registered before the experiment was that more access means more recovery. White-box would hold a commanding lead, gray-box would follow, and black-box would trail. The numbers came back in the opposite order.

| Level of access | Accuracy | Macro-F1 | 95% CI |
| --- | --- | --- | --- |
| White-box (weights) | 41.7% | 0.404 | 19.4–63.9% |
| Gray-box (activations) | 61.1% | 0.643 | 41.7–80.6% |
| Black-box (outputs) | 63.9% | 0.640 | 41.7–86.1% |

The task picks one of five domains, so chance is 20%. The intervals shown are the dataset-clustered bootstrap. Because the two seeds of a dataset share their training data their predictions are not independent, so resampling whole datasets gives the more conservative interval. Resampling individual predictions instead puts white-box at 25.0–58.3%, above 20%, but the author works from the conservative figure. Source: [arXiv 2611.07610](https://arxiv.org/abs/2611.07610)

Set the three values beside the chance line and the gap is easy to see. The white-box interval runs down to 19.4% and crosses to the wrong side of that line, while the other two stop at 41.7%, more than double the 20%.
