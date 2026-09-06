---
title: The Output Format Moves the Data Quality Score
subtitle: Across 12 tasks and four output formats, the capability that fine-tuning bought barely left the format it was trained under
date: 2026-09-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Output Format Moves the Data Quality Score

_Across 12 tasks and four output formats, the capability that fine-tuning bought barely left the format it was trained under_

## Executive Summary

> [!callout]
> Instruction tuning rests on two judgments. Which data are worth learning from, and whether the training actually produced a capability. A paper posted to arXiv on September 2 argues that both judgments pass through the same gate, which is the surface format an answer is written in.

> With the instruction and the correct answer held fixed, swapping only the format moved the accuracy of a model that had learned nothing at all by as much as 70 points on one task. Training behaves the same way. A skill that raised accuracy by more than 40 points under one format was nearly invisible under the others. The authors conclude that quality is not a property of one unit of data but of that unit paired with a format.

> This is not a paper that offers a fix. An intervention that erases the format axis during training, and an attempt to forecast which combinations would lock, both failed thresholds the authors had fixed before seeing the data. That is exactly where the paper's measurements stop. Laying that result over an organization's own data is left to this article.

### Key figures

Source: Gan et al., [How Output Format Confounds Data Quality and Capability in Instruction Tuning](https://arxiv.org/abs/2609.02015), arXiv:2609.02015v1 (September 2, 2026), main text and Appendices A through F

<!-- stat-card -->
**70 points** — Accuracy moved by the format alone — The maximum on ARC-C for an untrained model, and across the six tasks evaluated under all four formats the average shift was still 22.5 points

<!-- stat-card -->
**0.415 to 0.588** — How well spectral metrics told clean from corrupted — Effective rank AUC on three model families, every reading inside the blindness band of 0.35 to 0.65 that the authors fixed in advance

<!-- stat-card -->
**41 to 46 points** — Gain from learning RTE as a raw span — The gain showed up only under the same format, and transfer to the other three stayed near zero

<!-- stat-card -->
**78.0 against 19.5** — GSM8K accuracy split at a budget of 768 — The untrained 4B model first and the fine-tuned one second. At a budget of 192 both read 19.5

## Change the format and the score moves

What the paper calls an output interface is the surface in which the same content is written down. A plain answer, a raw span cut from the input, a JSON field, a tagged span. Those four carry the training runs and the gradient measurements, while two more are held out of training entirely: an answer written as a sentence, and a bracketed token. The held-out pair exists so that transfer can be read on surfaces the selection rule has never seen.

The authors start from a number that is visible before any training happens. Hold the instruction and the gold answer fixed, swap only the format, and the accuracy of the untrained base model moves by up to 70 points on ARC-C. Average across the six tasks that were evaluated under all four formats and the shift is still 22.5 points. If a score moves when only the format changes, the score measured the wrapper rather than the content, and that sentence runs through the whole paper.

Format sensitivity itself is not news. Sclar and colleagues showed in 2024 that swapping between semantically equivalent formats moves few-shot accuracy by as much as 76 points, and Do and colleagues reported in 2025 that format preference biases benchmark rankings. Both were measured on a fixed model at generation time. What moves here is the point of observation. The analysis drops from the score at inference into the gradient that the training data itself produces, and asks how format enters both the quality judgment and the capability measurement.

The test bed is 12 classification and multiple-choice tasks: sst2 and yelp for sentiment, rte and qnli for natural language inference, boolq for yes-or-no question answering, copa, piqa, hellaswag, winogrande, arc_challenge and commonsense_qa for commonsense and reasoning, and ag_news for topic classification. Data conditions hold the format fixed and damage the content in four ways. Clean pairs each input with its gold answer, shuffled labels replaces every answer with a different valid label from the same task, content mismatch pairs an input with another example's answer, and format only keeps the scaffolding while stripping the content it wraps. The models are Qwen3.5-4B, Qwen3.5-9B and Mistral-7B-v0.3, all trained through low-rank adapters.

To keep the comparison fair, every selector works inside the same budget of 24 units at 64 examples each. That closes the door on any explanation of the form that one method simply got more data. A pre-registration document fixes the decision rules, from the width of the blindness band to the pass mark for the intervention experiment, before any of the results were seen.

## Spectral metrics cannot see the format

One recent family of data quality metrics summarizes the gradient spectrum of a training update in a single scalar, such as effective rank or nuclear norm. Theorem 1 in the paper opens by proving why that choice is fragile. A functional that reads only the singular values keeps the scale of the update and discards its direction, and the direction is exactly where the interface offset and the interface-by-content interaction live. The rotation the theorem assumes is an idealization, and real format changes only approximate it, so the authors say plainly that the load-bearing evidence is not the proof but the measurement that follows.

The measurement follows the proof. Pooled across the three corruption conditions, the ability to rank clean units above corrupted ones reads 0.415, 0.545 and 0.588 for effective rank across the three model families, and 0.468, 0.517 and 0.399 for nuclear norm. All six readings sit inside the blindness band of 0.35 to 0.65 that the authors fixed before the third family was run, and the signs scatter with no consistent direction. That pattern fits a metric that is blind by construction better than one carrying a faint signal.

The scores that read direction behaved differently. Residual alignment reached 0.789 on the 4B family, with matched alignment close behind at 0.784. On 9B it reads 0.579 and on Mistral 0.670, and the 0.579 on 9B falls inside the blindness band. On the hardest corruption condition, a full label shuffle, 9B and Mistral both miss the pre-registered margin of 0.10 and are recorded as limited by scale. So for those two families the case for direction-reading rests not on the pooled figure but on the specificity test below. When semantic corruption rises in three steps, residual alignment selectivity on 4B climbs monotonically from 0.556 to 0.676 to 0.706. It tracks how much content was damaged, not merely whether it was.
