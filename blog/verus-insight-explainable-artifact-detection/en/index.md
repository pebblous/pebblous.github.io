---
title: Verus-Insight Scores Whether a Video Detector Saw the Flaw
subtitle: A Peking University and Kuaishou team split the detector scorecard in two, and VideoVeritas scored 91.12 on real-versus-fake with 8.47 on the flaws people marked
date: 2026-10-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Verus-Insight Scores Whether a Video Detector Saw the Flaw

_A Peking University and Kuaishou team split the detector scorecard in two, and VideoVeritas scored 91.12 on real-versus-fake with 8.47 on the flaws people marked_

## Executive Summary

> [!callout]
> This article reads a paper posted to arXiv on October 22, 2026, titled "Verus-Insight: Towards Explainable Artifact Detection in AI-Generated Videos." Fourteen authors put their names to it, among them Peking University and the Kling video generation team at Kuaishou, and the subject is a detector that separates AI-generated video from the real thing. This article is less interested in the detection technique than in the way the paper handed out its grades.

> Each detector's result was written into two columns. Did it call real or fake correctly, and did it also point at the flaws a person had already marked in the video? VideoVeritas, an existing detector, took the first column at 91.12, the highest of any specialized detector in the comparison. Its second column reads 8.47. Under a score that counts verdicts alone, a model that looks at almost nothing and still answers correctly rises to the top.

> Sections 1 through 3 follow what is written in the paper. Section 4, which lays this result over the place where data quality gets checked, is this article's own.

### Key numbers

The first three are measured on one scale for how far a model retraced the flaws people had marked. The last one is the material that scale was built from.

Source: [arXiv:2610.30866](https://arxiv.org/abs/2610.30866) (October 22, 2026)

<!-- stat-card -->
**8.47** — VideoVeritas on Finding F1 — The same model's real-versus-fake verdict score, 91.12, is the highest among specialized detectors

<!-- stat-card -->
**35.42** — Verus-Insight on Finding F1 — The highest in the comparison. A full overlap with the human marks reads 100, so this one stops a little past a third of the way

<!-- stat-card -->
**18.08** — GPT-5.5 on Finding F1 — The best figure on the proprietary side. An 8-billion-parameter model came in at close to double it

<!-- stat-card -->
**326** — Flaws marked by people — Spread across 192 videos in 18 categories. This is the answer key behind the evidence score

## Does a Right Answer Mean the Model Found the Flaw?

Detectors for AI-generated video have long been judged by a single number, balanced accuracy. It takes the share of real videos called real and the share of fake videos called fake, works the two out separately and averages them, so that a lopsided mix of clips cannot inflate the result. Models are easy to line up against each other that way, and most detection papers rank their field by it.

The Verus-Insight paper set a second column beside it. That column is called Finding F1, and it measures whether a model also pointed at the places a person watching the video had marked as wrong. Put the two side by side and the ranking moves.

| Model | Type | Verdict scoreBalanced accuracy · RewardData | Evidence scoreFinding F1 |
| --- | --- | --- | --- |
| GPT-5.5 | Proprietary | 93.81 | 18.08 |
| Gemini-3.6-Flash | Proprietary | 90.52 | 25.54 |
| Qwen3-VL-8B | General-purpose video model | 48.81 | 3.38 |
| VideoVeritas | Specialized detector | 91.12 | 8.47 |
| Skyra | Specialized detector | 84.14 | 7.26 |
| Verus-Insight | This paper | 94.79 | 35.42 |

************

The two columns do not come from the same evaluation set. The verdict score is balanced accuracy on a set called RewardData, and the evidence score can only come out of material where a person marked each flaw by hand. Carrying the name of the column along with the number is the safer habit. Even so, read one model's row across and a fact stays put. VideoVeritas, the specialized detector with the highest verdict score, sits only just above the general-purpose models on evidence.
