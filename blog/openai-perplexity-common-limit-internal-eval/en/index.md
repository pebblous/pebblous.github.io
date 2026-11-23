---
title: OpenAI
subtitle: Pachocki published the curve on November 22, from 0.99 for GPT-3.5 to under 0.8 today, all measured on one fixed snapshot of OpenAI
date: 2026-11-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenAI

_Pachocki published the curve on November 22, from 0.99 for GPT-3.5 to under 0.8 today, all measured on one fixed snapshot of OpenAI_

## Executive Summary

> [!callout]
> OpenAI has proposed that AI developers draw a shared safety line and write it as a single number called perplexity. In a [post published on November 22](https://openai.com/index/perplexity-and-intelligence/), chief scientist Jakub Pachocki argued that the log-perplexity a model reaches in pretraining should become an industry-wide metric, and that until people can tell what an AI is doing and keep watch on it well enough to clear a milestone set in advance, no company should drop below a line the industry draws together. The internal numbers he published alongside it: GPT-3.5 at roughly 0.99, GPT-4 at roughly 0.91, recent models below 0.8.

> The part worth looking at is not the numbers but the footnote attached to them. The evaluation data that produced these values has been, ever since GPT-3.5, a fixed snapshot taken from OpenAI's own codebase. And the admission that developers use different evaluation data and different training mixtures, so the numbers do not compare cleanly between companies, is not a critic's objection. Pachocki wrote it into the same post. It is a line everyone is asked to hold, and right now one company can compute where it sits.

> That structure showed itself the next day. Microsoft placed its own foundation model, MAI-2 Base, on the same scale at 0.819, which it could do only because OpenAI opened its own test set to that one partner. That second number showed, before anything else, which door a shared standard still has to pass through.

> Sections 1 through 3 set out what the post says and how the industry answered. Section 4, which holds that an open test set is a precondition for any shared norm, is this article's own reading.

### Key Numbers

Source: [OpenAI, "Perplexity and Intelligence"](https://openai.com/index/perplexity-and-intelligence/) (2026-11-22)

The first three cards are log-perplexity figures the post published; the fourth is where the data that produced them sits.

<!-- stat-card -->
**0.99 → 0.76** — GPT-3.5 to the math-breakthrough model — Log-perplexity; lower means the next token is predicted better

<!-- stat-card -->
**Below 0.8** — Where recent models now sit — The point Pachocki marks as a shift in cybersecurity and math

<!-- stat-card -->
**0.68–0.7** — The next window Pachocki named — The band where he expects another leap in capability

<!-- stat-card -->
**One** — Companies holding this test set — Measuring under the same conditions from outside requires OpenAI to open access

## Pachocki Reports the Numbers and Proposes Where to Stop

Perplexity measures how confused a model is about the character coming next. You show the model a body of data it did not train on, and you average how well it predicts each following token. A smaller value means less confusion, so lower is better. Pachocki reported the logarithm of that value, log-perplexity, which is equivalent to cross-entropy loss. That is why the numbers in the post move in the second decimal place. Undo the logarithm and the span each of those steps covers is far wider.

What he released is the record OpenAI has kept of this value across model generations. GPT-3.5, the model behind the first ChatGPT, sat at roughly 0.99. At that level models became able to hold a fluent conversation. GPT-4 was roughly 0.91, and around then models began to get real work out of chain-of-thought, the intermediate reasoning steps they write before answering. Recent models have come down below 0.8 and started turning out results in cybersecurity and mathematics unlike anything before. Pachocki wrote that after switching to a model with log-perplexity around 0.76, it began producing results on math problems that had stayed open for a long time.
