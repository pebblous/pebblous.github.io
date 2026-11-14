---
title: Does SelectStar
subtitle: On 870 hard Korean questions, DAVI got seven more answers right than Opus alone and cut cost by 28%. Seven is too few to call a difference.
date: 2026-10-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does SelectStar

_On 870 hard Korean questions, DAVI got seven more answers right than Opus alone and cut cost by 28%. Seven is too few to call a difference._

## Executive Summary

> [!callout]
> SelectStar, a Korean company that evaluates whether AI systems can be trusted, has unveiled a judgment-specialized AI called DAVI. DAVI is not a model that writes answers. It reads the question first and judges: it gauges how hard the question is and sends it to a model sized to match, it grades whether another AI's answer is adequate, and it predicts whether an agent will finish the task it has been handed. The evidence the company put behind the launch is an experiment on hard Korean question-answering. This article asks how thick that evidence is. The materials read here are three news reports dated October 26 and the GitHub repository where SelectStar posted its measurement harness together with the full results table.

> Two numbers were announced. When DAVI was allowed to pick one of Anthropic's Haiku, Sonnet, or Opus for each question, the routed run got 71.1% of 870 trials right, ahead of the 70.3% from using the most expensive model, Opus, on everything. Execution cost fell by about 28%. Both numbers come from the same 870 trials, but they are not backed equally. Turn the accuracy gap from a percentage back into a count and it is seven answers; four of them falling the other way would reverse the order. The company's own experiment document supports that reading. Across five repeated rounds, DAVI matched or beat Opus in three; it was cheaper in all five.

> Sections 1 through 4 follow what the release and the reporting state, plus the values that follow directly from those numbers. Section 5, which carries the experiment over to Korean data practice, is this article's interpretation.

### Key Numbers

Sources: [ZDNet Korea](https://zdnet.co.kr/view/?no=20261026165942), [AI Times](https://www.aitimes.com/news/articleView.html?idxno=216645), and [eDaily](https://edaily.co.kr/News/Read?mediaCodeNo=257&newsId=02007366645616856) (October 26, 2026), plus SelectStar's published experiment repository [selectstar-ai/EVAL.Davi](https://github.com/selectstar-ai/EVAL.Davi). The z-values and the JevBench item conversions were computed by Pebblous from the published figures.

<!-- stat-card -->
**7 answers** — The gap between DAVI and Opus alone — 619 against 612 out of 870. Two of the five rounds trailed Opus

<!-- stat-card -->
**0.37** — z-value for the difference between the two scores — Nowhere near 1.96, the threshold at the 5% significance level

<!-- stat-card -->
**6 items** — The gap between DAVI and Jev on JevBench — The gap reported as 2.6pp, converted back into items out of 231

<!-- stat-card -->
**28%** — Execution cost saved against Opus alone — $14.99 down to $10.78. The cost of calling the judge is not counted

## It Reads the Question First, Then Picks a Model

SelectStar was founded in 2018 as an AI trustworthiness evaluation company. It started by collecting and labeling AI training data, and has since widened into verifying whether finished models can be relied on. DAVI, unveiled on October 26, sits on that trajectory. Outlets introduce it slightly differently, mixing judgment-specialized AI, decision AI, and decision-making AI, but they are all describing one job. Instead of writing answers, it judges.

The company lists three uses. The first is gauging a question's difficulty before deciding which model to send it to. The idea is to stop wasting the most expensive model on easy questions, and the industry calls it model routing. The second is scoring whether another AI's answer is adequate; the third is predicting in advance whether an AI agent can finish the task assigned to it. SelectStar released a plugin implementing the first use on GitHub under Apache License 2.0, and said it will add DAVI to its own evaluation platform, Datumo Eval, during November.

What sits in the published repository [selectstar-ai/EVAL.Davi](https://github.com/selectstar-ai/EVAL.Davi) is not only plugin code. A measurement harness that reproduces the experiment, the complete results table, and the limitations the company wrote down itself are all up there. The two lines the reporting carried were pulled from that table, and most of the numbers counted later in this article come from the lines that were not pulled.

What this release quantifies is the first use. The design is simple. The company prepared K-HLE, an in-house set of 174 hard Korean question-answering items, and repeated each item five times to make 870 trials. On one side DAVI chose one of Anthropic's Haiku, Sonnet, or Opus for each item; on the other, every item went to Opus, the largest and most expensive of the three. Same items, same number of repeats, different allocation. DAVI never sees the answer. It reads only the question, assigns a probability across five difficulty levels, and sends the item to Haiku if the expected value falls below 0.48, to Opus at 0.78 and above, and to Sonnet in between.
