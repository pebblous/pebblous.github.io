---
title: Can an AI That Only Picks Answers Really Work This Cheap?
subtitle: TypeSafe
date: 2026-09-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can an AI That Only Picks Answers Really Work This Cheap?

_TypeSafe_

## Executive Summary

> [!callout]
> This report is not a retelling of one September 2026 product launch. A company called TypeSafe shipped a model that writes no prose at all. Jev returns a multiple-choice answer, a grade on a rubric, or a yes/no claim, and it attaches a probability to each. The vendor put the per-call price at a few hundredths of a percent of its comparison models, and within about ten days the company's valuation was being discussed in the tens of billions of dollars. Two things are worth doing with that news. One is to locate precisely where the price fell. The other is to work out what the fall was traded against.

> Reconstructing the two numbers the company hangs side by side on its own home page, using the company's own evaluation table, turns up something odd. The cost multiple and the latency multiple are measured against different models. The cost figure fits the most expensive model in the table; the latency figure fits not the slowest model but the second slowest. What either number is divided by, the company has never put in a sentence. The accuracy headline sits in the same position. The 67.8% is not agreement with answers a person wrote down. It is agreement with the averaged verdict of two larger models, and those two graders occupy the top row of the price list.

> So what this report is really after is not a product verdict but a question a reader can put to their own pipeline. How much of the work handed to large models was, in fact, picking from a fixed set of options? Of that share, where is the line between what can move and what must not? Once a judgment costs a hundredth of what it used to, the number of judgments does not fall — it climbs. Who checks the quality of that much larger pile of judgment records, and with what?

<!-- stat-card -->
**67.8% vs 74.1%** — Four-task average accuracy: Jev against the best comparison model — A 6.3-point gap in the same evaluation, and that evaluation's answer key was written by two larger models rather than by people

<!-- stat-card -->
**17.3 points** — Widest per-task gap — On invoice processing. On customer support the direction flips and Jev sits 3.6 points above Opus 5

<!-- stat-card -->
**about 440x** — Per-call cost ratio against Opus 5 — Our own division of two aggregate figures in the vendor's table. Against the nearest model on accuracy in the same table, the ratio shrinks to 8x

<!-- stat-card -->
**$0.042 per 1M** — Input price, with no billable output — The two models that wrote the answer key cost $10 on input. A factor of 238 separates teacher from student

## What a Model That Never Writes a Sentence Gives Back

Everything we hand a generative model looks, from the outside, like talking. Look at what actually happens inside a pipeline and a good deal of it is not talking at all. Is this email spam? Which team should this ticket go to? Should this agent action be escalated to a person? Each one picks a single item out of a small set fixed in advance, and we have been asking a sentence generator to do the picking. Jev, released on 15 September 2026, does the picking and nothing else. By the vendor's own description it cannot write prose, cannot write code, and cannot hold a conversation.

What it gives back instead comes in three shapes: Choice, a selection from the options you supply; Score, one level on a rubric you define; and Noul, a yes or no. All three arrive with a probability attached to the answer. The differentiator the company leads with is not speed or price but that probability. TypeSafe says the model was trained to get the probability of a judgment right rather than to match human preference, and the name it gives the technique is reinforcement learning for calibrated decisions, or RLCD. Producing an answer a person will read and producing an answer a program will branch on are different jobs — that is the design premise the company argues from.

### 1.1. Three Answer Shapes, Each With a Number Attached

The three output primitives are built so that calling code can branch on them directly. The table below sets out what each one takes in and what it returns. The last column is the one section 4 spends the most time on: a probability comes back with every answer.

| Primitive | What it returns | Where it fits | What comes with it |
| --- | --- | --- | --- |
| Choice | One of the options you supplied | Ticket classification, routing, intent detection | A probability per option |
| Score | One level on a predefined rubric | Quality scores, risk grades, prioritisation | A probability per level |
| Noul | Yes or no | Rule violations, condition checks | The probability that it is true |

************

The three output primitives TypeSafe published. In all three the set of possible answers is fixed by the caller before the request. Input is priced at $0.042 per million tokens, and output has no billing line at all: the company's pricing page reads "FREE (too cheap to meter)."

Free output reads like marketing copy, but structurally it is closer to a statement that there is nothing left to bill for. A generative model builds its answer one token at a time, and each token has to wait for the one before it, so a longer answer costs more and takes longer. A model that only picks has no sequential generation step. The candidate answers already exist, so the work is distributing probability across them, which means latency tracks the length of the input rather than the length of the output. The numbers the company puts in its own write-up point at that structure: end-to-end response time of 70 to 500 milliseconds for Jev, against a range of 3 to 329 seconds for the frontier models it compares with. TypeSafe has not published the model's architecture or training method, so everything in this paragraph describes what a picking-only design implies in general, not something verified inside this particular product.

### 1.2. Never Leaving the Option List

One benefit of the design is beyond dispute: the output format cannot break. Any team that has pushed classification through a generative model knows the failure modes — an apology where the label should be, a paragraph of explanation wrapped around the JSON you asked for, a category name that exists nowhere in your taxonomy. With a picking-only model none of that can happen, because the only things available to pick are inside the list.

> [!callout]
> Two sentences have to be kept apart here. Never picking outside the option list is a guarantee about form. Picking the right option is a guarantee about content. The first can hold while the second fails, and nothing in the first implies the second. Sections 3 and 4 measure the second one.

On content the picture is not uniformly bad. One independent evaluation, built by someone with no vendor involvement, put Jev's zero-shot accuracy at 95.9% on a 400-item benchmark of its own construction. On the same task a hand-written keyword rule scored 77.2%, and a TF-IDF logistic regression trained on every label scored 66.0%. On a narrowly defined task, in other words, a model given not one line of training data beat a supervised classifier. The same evaluation also produced a result pointing the opposite way, which section 4 takes up.

### 1.3. A New Category, or an Old Job in New Packaging

The sharpest reaction to the launch was not about performance but about category. Anastasios Angelopoulos, chief executive of the model evaluation platform Arena, gave the Financial Times the version most widely quoted.

"It's unclear to me what makes these models different from standard 'zero-shot classifiers', which are relatively well-known technology."

Anastasios Angelopoulos, chief executive of Arena, in the Financial Times, 25 September 2026. The original sits behind a paywall and this report verified the wording through a mirror. In Korea, AI Times carried an objection to the same effect on 26 September.

On the facts the objection holds up. Tools that attach labels without writing prose are already in wide use. The table below lists what a team could reach for today.

| What already exists | Provider | Price and terms |
| --- | --- | --- |
| Zero-shot classification pipelines (the bart-large-mnli family) | Hugging Face | Open source. Self-hosted, you pay compute only |
| Rerank 4 Pro / Fast / v3.5 | Cohere | $0.001–$0.0025 per search, independent of document count |
| Moderation API and Shieldstral | Mistral | Moderation at $0.10 per million tokens. Shieldstral lets a policy be written as a natural-language yes/no question |
| Raya / Bespoke Nimble / Kev | Various startups and open models | Entrants that arrived in the same slot after Jev shipped. Kev is an attempt to reverse-engineer Jev's structure |

The competitive field for picking-only tools. Mistral's Shieldstral is the closest in spirit to Jev's Noul: instead of retraining a fixed harm taxonomy, it lets the rule itself be expressed as a question.

The counter-argument rests on the same set of facts. Nobody, it runs, had packaged three things together as one product before: several shapes of structured answer, many questions fired in parallel against the same state, and training aimed at calibration rather than at accuracy. On the Hacker News launch thread the most upvoted criticism was that calling this a frontier model borrows credibility the product has not earned; a reply in the same thread argued that the framing is marketing but accurate marketing, since Jev is the reflex and the deliberation is meant to stay in your code or in a real LLM.

The category question does not get settled here on the industry's behalf. What stands on the record is that the industry split on a shared set of facts, and the decision moves in section 5 to the reader's own pipeline. Because that decision cannot even be posed until the price and the accuracy are measured properly, sections 2 and 3 come first.

## One Headline, Two Different Denominators

Collect the figures the documents covering this launch actually used and you get: 86x per call, 171x, a four-hundredth of the price, 444.6x, a range of 4.8x to 238x, and 580x. Every one of them describes the same model in the same week. They do not contradict each other. What changes each time is what got divided by what. The size of the multiple is set by the comparison model, not by Jev.

This report therefore writes the numerator and the denominator next to every price claim it makes. The table below does that for the multiples now in circulation. Read the comparison column and the reason the figures spread across more than a factor of twenty stops being a property of the model and becomes a property of the comparison.

| Multiple | Numerator | Divided by | Whose figure it is |
| --- | --- | --- | --- |
| 4.8x | $0.20 per million input tokens | Jev at $0.042 per million input tokens | Comparison with the cheapest small model. Leaves out the difference in output billing |
| 8.3x | Luna at $0.0033 per call | Jev at $0.0004 per call | Against the model closest to Jev on accuracy in the vendor's own table. Our division |
| 85.7x | Terra at $0.06 per call | Jev at $0.0007 per call | The figure cited by The Batch, issue 372 |
| 171.4x | Sonnet 5 at $0.12 per call | Jev at $0.0007 per call | Same article, comparison model swapped |
| 238x | $10 per million input tokens for a model that wrote the answer key | Jev at $0.042 per million input tokens | The company's own figure, on its home page |
| about 440x | Opus 5 at $0.1761 per call | Jev at $0.0004 per call | Our division of two four-task aggregates in the vendor's evaluation table |
| about 580x | Cost of checking one paragraph with Fable 5.1 | Cost of checking the same paragraph with Jev | Measured by an independent evaluator over 12 paragraphs |

****************************

Seven multiples describing one event. The largest is roughly 120 times the smallest. None of the arithmetic is wrong. The denominators differ.

### 2.1. Dividing the Vendor's Own Table

The firmest ground here is the workflow evaluation dashboard TypeSafe published itself. Nine models were run across four business tasks, with cost per call, latency and accuracy laid out on one screen, and the per-task figures reconcile arithmetically with the aggregates. Jev's four task costs of $0.0001, $0.0003, $0.0011 and $0.0001 average to the published $0.0004, and Opus 5 reconciles too.

| Model | Cost per call | Latency | Four-task average accuracy |
| --- | --- | --- | --- |
| Jev | $0.0004 | 0.4s | 67.8% |
| GPT-5.6 Luna | $0.0033 | 12.9s | 66.9% |
| DeepSeek v4 Flash | $0.0059 | 52.0s | 64.4% |
| Claude Haiku 4.5 | $0.0195 | 12.5s | 53.6% |
| GPT-5.6 Terra | $0.0304 | 10.1s | 67.9% |
| DeepSeek v4 Pro | $0.0413 | 86.5s | 65.5% |
| GPT-5.6 Sol | $0.0836 | 23.3s | 74.1% |
| Claude Sonnet 5 | $0.1174 | 78.1s | 67.8% |
| Claude Opus 5 | $0.1761 | 37.8s | 73.1% |

****

All nine models from the vendor's workflow evaluation, re-sorted by cost per call. Every value is the arithmetic mean of the four tasks. Orange marks the extreme in each column, grey marks the bottom. That the highest cost and the highest latency belong to two different models is where the diagram below starts.

Sorted by price, the multiples from the previous table look different. The model one row above Jev is not Opus 5 but GPT-5.6 Luna. Luna runs $0.0033 per call, a little over eight times Jev; it takes 12.9 seconds, some thirty times longer; and it scores 66.9%, 0.9 points below Jev. Inside the vendor's own table, that is to say, the model nearest to Jev on accuracy delivers roughly the same score for a single-digit multiple of the price, not a three-figure one. The 440x holds only if the comparison model is Opus 5, and choosing Opus 5 is done by whoever writes the sentence, not by the data.

The same table shows one more thing. Both models that serve as denominators for the headline multiples are themselves beaten inside it. Opus 5 ($0.1761, 37.8s, 73.1%) loses to Sol ($0.0836, 23.3s, 74.1%) from the same vendor on cost, latency and accuracy alike. Sonnet 5 ($0.1174, 78.1s, 67.8%) loses to Terra ($0.0304, 10.1s, 67.9%) on all three as well. The two cells no practitioner reading this table would actually pick are the two that generate the largest multiples.

### 2.2. The Comparison Splits Inside a Single Line

The company's home page hangs two numbers side by side: 193.6x faster and 444.6x cheaper. Nowhere in the company's documents is it written what either number is measured against. The Batch carried the gap forward as it stood, describing Jev as 193.6 times faster than unnamed large language models. Run both figures back through the aggregate table and the cost multiple fits Opus 5, the most expensive model in the set, while the latency multiple fits Sonnet 5 at 78.1 seconds. Both residuals come in under one percent and point the same way, which is what rounding in the displayed values would produce.

The latency side needs one more qualifier. What matches 193.6x is Sonnet 5's 78.1 seconds, but the slowest of the nine models is not Sonnet 5; it is DeepSeek v4 Pro at 86.5 seconds, which divides out to 216x and misses the headline. So the denominator of the speed claim is not the slowest model in the table but the second slowest, and it is the slowest only if you restrict the field to the OpenAI and Anthropic families. The cost claim needs no such qualifier. Opus 5 really is the most expensive of the nine.
