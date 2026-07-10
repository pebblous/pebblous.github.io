---
title: We Measure. We Just Don
subtitle: Comparing Karpathy
date: 2026-06-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# We Measure. We Just Don

_Comparing Karpathy_

## Executive Summary

> [!callout]
> The frontier of AI writing is shifting. It is moving away from the skill of crafting good prompts and toward the ability to measure output quality and then use that measurement to fix the prompt automatically. Autoresearch, the pattern Andrej Karpathy proposed for optimizing machine-learning code, is disarmingly simple: inside a loop, keep only the changes that beat the current best. Ole Lehmann took that same pattern and applied it not to code but to Claude's content skills, reporting that he raised a copy-quality pass rate from 56% to 92%. One line he left behind is where this report starts: "Good Autoresearch depends not on a good prompt, but on a good eval."

> Look at Pebblous's multi-agent pipeline through that lens and you find that we already run half of the evaluation function. ko-prose-humanizer, which scores Korean prose against eleven stylistic markers, and seo-check, which audits four layers of SEO, are in effect the Judge that Autoresearch describes. That evaluation function is not theoretical: across five articles in our AI-governance series, it cut em-dash overuse by 46.6% — a concrete case of measurement catching a defect. What is missing is the other half. We have no golden test set, no mutation engine to vary a skill's prompt, no score-based automatic rollback, and no meta-loop that improves the skill itself. Our pipeline enriches a single article beautifully, but the skill that produced it never gets better on its own.

> The conclusion of this report is that the two systems are not competitors but complements. Autoresearch is narrow, deep automated optimization; Pebblous is broad, rich, one-pass generation with human judgment and multilingual rewriting layered on top. The path forward is not to remove the human checkpoints but to add quantitative scores at the points where humans already look. This report proposes that port, step by step, from an operator's seat.

<!-- stat-card -->
**56% → 92%** — Autoresearch copy pass rate — 4 rounds, ~$15; Ole Lehmann self-report (2026)

<!-- stat-card -->
**~+20pp** — Higher binary-judgment agreement — LLM–human agreement when scales become pass/fail

<!-- stat-card -->
**-46.6%** — em-dash reduction (5 articles) — Measured by Pebblous via ko-prose-humanizer

<!-- stat-card -->
**40–60%** — Cost saved by model routing — Top tier only for heavy reasoning; lower tier for the rest

## What Autoresearch Is: Treating the Prompt as a Production Loop

Autoresearch is not a heavy framework. The code Karpathy released on March 7, 2026 is 630 lines of Python, and the core idea fits in a sentence: an agent makes one change to the code, runs a time-boxed experiment, measures a validation metric, keeps the change if things improved and reverts it if they got worse — then repeats. Karpathy ran this loop 700 times over two days on a single GPU, found 20 genuine improvements, and, applied to a larger model, lifted training speed by 11%. The loop caught defects a human had missed by hand for two decades, such as a missing normalization step.

What made the loop catch on so quickly is that it worked beyond Karpathy's own experiments — in someone else's production code. Shopify's Tobi Lütke reported running the same pattern on his company's template engine, Liquid, nearly halving a rendering speed that humans had already tuned and cutting memory use substantially. The result kept only the changes that passed every unit test across hundreds of automated experiments. That is a second piece of evidence that, in real product code rather than a toy model, the loop found improvements seasoned developers had missed. So the next question follows naturally: what if the artifact were not code, but prose?

The direct source for this report is not the code. It is Ole Lehmann moving the same pattern to a content skill. He started from the fact that his landing-page copy skill failed 44% of its quality checks, then had an agent revise the skill's prompt, compare scores, and repeat keep-or-rollback unattended. After four rounds and roughly $15 in cost, the pass rate reached 92%. Three changes survived: a rule to put a concrete number or outcome in the headline, a banned-buzzword list, and — more powerful than any rule — a worked example dropped directly into the prompt. One change was rolled back: a rule that capped character count too tightly, because the copy thinned out and the call to action weakened.

> [!callout]
> One caveat to state plainly: the 56%-to-92% figure is Ole Lehmann's own self-report, with no independent reproduction and no disclosed test-set size. The pass rate measures how much copy clears a pre-filter that screens out low quality — not an actual lift in conversion. Cite it as a striking case, but do not treat it as a verified, general effect.

### The Five Pieces That Make Up the Loop

Break the pattern into parts and five remain: **Mutation**, which proposes one candidate change at a time; **Execution**, which produces the artifact under that change; the **Judge**, which scores the artifact; the **Orchestrator**, which keeps the change if the score rises and reverts it if the score falls; and the **Changelog**, which records what was changed and why. The real product here is not the prompt — it is the Judge. If the Judge wobbles, the whole loop optimizes in the wrong direction.

That is why Ole's checklist design rules matter. Keep items as three to six binary questions: Does the headline contain a concrete number? Is it free of buzzwords? Is the call to action specific? Consistent judgment, not precise scoring, is the design principle. Too few items and you miss quality; more than six and the model games the item scores while real reader quality drops — overfitting. An evaluation function should be a floor that blocks low quality, not a ceiling that suppresses creativity.
