---
title: The Cheaper Tokens Get, the Bigger the Bill
subtitle: How the agent retry loop multiplies your AI bill up to 50×
date: 2026-06-13
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Cheaper Tokens Get, the Bigger the Bill

_How the agent retry loop multiplies your AI bill up to 50×_

## Executive Summary

> [!callout]
> The price of a single token keeps falling. In the year from Q1 2025, the cost per million tokens dropped from $18.40 to $6.07 — a 67% decline. Yet over the same period, 73% of companies blew past their AI budget. The unit price fell to a third, and the bill went up anyway. This piece tracks down the culprit behind that paradox.

> The culprit is volume. Where a single chatbot turn spends a few hundred tokens, a single agent session spends hundreds of thousands. And at the heart of that gluttony sits the retry. When a model fails to produce output of the quality it needs, it throws the entire context back in and tries again — and once the correction cycle repeats ten times, token consumption balloons up to 50×. A large share of the bill, in other words, is money spent on the model patching bad inputs by itself.

> Here the question flips. If the root cause of those retries is ambiguous, gap-riddled input data, then data quality is no longer an accuracy metric — it is a cost printed directly on the token bill. That is the moment cleaning your data stops being an ethic or a best practice and becomes a matter of accounting.

Four numbers carry the skeleton of this paradox: the token price that fell to a third in a year, the share of companies that overshot their budget anyway, the 30× jump in cost-per-interaction from a single chatbot turn to one agent orchestration, and the 50× multiplier with which retries inflate tokens.

<!-- stat-card -->
**−67%** — Token price drop — $18.40 → $6.07 / million tokens (Q1 2025→2026)

<!-- stat-card -->
**73%** — Companies over budget — Share that overshot their AI budget despite cheaper tokens

<!-- stat-card -->
**30×** — Cost-per-interaction rise — Chatbot $0.04 → agent orchestration $1.20

<!-- stat-card -->
**50×** — Retry token multiplier — Token consumption after 10 stacked correction cycles

## Prices Fell, the Bill Rose

Over the past year, nearly every model provider cut its token prices. By Optimum Partners' tally, the average cost per million tokens fell from $18.40 to $6.07 — a 67% cut. By common sense, the cost of doing the same work should have dropped to a third as well. Yet actual bills moved the other way. Over the same window, 73% of the companies surveyed overshot their AI budget.

The reason unit price and bill move in opposite directions is simple. The bill is unit price times usage — and while the unit price fell to a third, usage grew far faster than that. The epicenter of that usage explosion is the "AI agent." Unlike a chatbot that answers a question once and stops, an agent runs a long loop: it reads files, makes a plan, calls tools, verifies results, and fixes them again. Even for the same single request, the order of magnitude of tokens consumed is different.

The difference in scale comes not from estimates but from measurements. Agent workflows spend 5 to 30 times more tokens than a simple chatbot. It is not unusual for a single session to burn hundreds of thousands of tokens. Even if the unit price drops by more than half, when usage jumps fivefold, tenfold, thirtyfold, the bill grows as a matter of course. This is the point where a budget that only watched the price tag falls apart.

![Jevons Paradox: when the price falls by half with elastic demand, quantity demanded more than doubles — total spending rises](./image/img-05-jevons-paradox.png)
*▲ Jevons Paradox: when efficiency halves the cost, elastic demand more than doubles the quantity consumed — total spending rises. The same dynamic governs the AI token market. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:JevonsParadoxA.png)*

> [!callout]
> **What the paradox really is**: Cost is decided not by the price tag but by consumption. The token unit price is the number we look at most often, but the variable that actually governs the bill is how many times a single task pushes tokens through. And in the agent era, the biggest force driving up that pass count is the retry.

## Why Agents Devour Tokens

The first reason agents spend so many tokens is that the model has no memory. A model remembers nothing between one call and the next. So every time an agent moves to the next step, it reloads the entire conversation so far, the files it has read, and intermediate results back into the input. The longer the loop runs, the more each step's input snowballs. The input to the fifth step contains all four preceding steps over again.

![GenAI Agent architecture: a prompt flows through Preprocessing → LLM → Postprocessing, cross-connected to Data, Tools, and Other models at each step](./image/img-01-genai-agent.png)
*▲ GenAI Agent architecture: a single prompt passes through a Preprocessing → LLM → Postprocessing loop, cross-connected to data, tools, and other models at every step. The longer the loop, the more the entire context is re-sent on each pass. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:GenAI_Agent.png)*

EY's analysis shows how this structure lands on cost with a single pair of numbers. One interaction with a simple 2023-era chatbot ran about $0.04. One interaction with a 2026-era agent orchestration runs about $1.20 — the same "one" interaction, 30 times over. The user feels they asked a single question, but behind that, the model is running dozens of internal calls, re-sending the full context every time.

Add retrieval augmentation (RAG) and the input swells once more. Pulling in external documents to fill the context so the model can answer raises input costs by 4 to 6 times the baseline. Layer on round-the-clock background inference, monitoring, and compliance surveillance, and tokens keep getting spent in places the user never sees. An agent's token gluttony is not one cause but several layers of structure stacked on top of one another.

## The Real Culprit — the Retry Loop

Everything so far is "baseline cost" — the share you have to accept once you commit to using agents at all. But the variable that swells the bill most fiercely is something else: the retry. By Optimum Partners' measurement, as an agent runs ten correction cycles to refine its output, token consumption balloons up to 50×. On top of the 30× baseline cost, another 50× multiplier is stacked.

Why do retries happen? When the model fails to produce output of the quality it needs on the first pass. If the output doesn't fit the required format, doesn't pass validation, or is too ambiguous for the next step to consume, the agent tries the same task again. The trouble is that this retry is not a lightweight move. Because the model has no memory, every retry means feeding the entire context in again from scratch. The cost of one more pass rivals the cost of the first. Stack that once, twice, ten times, and you reach 50×.

![Feedback loop diagram: Inputs pass through a processor (P) to Outputs, with a Feedback path that cycles back to the input](./image/img-03-feedback-loop.svg)
*▲ The feedback (retry) loop: when output fails to meet the standard, the feedback path sends everything back to the start. An agent's retry re-sends the entire context each time, stacking tokens up to 50×. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:General_Feedback_Loop.svg)*

The key question here is "why can't the model get it right the first time?" In many cases it is not because the model itself falls short. It is because the input it received is ambiguous, has missing values, and mixes in conflicting information, so the model is not sure what it is supposed to do. The model tries to fill that uncertainty on its own, and tries again. Every token it burns in that process gets printed on the bill.

> [!callout]
> **The one line worth re-reading**: A large part of the bill is not the price of the model doing work — it is the price of the model trying to patch bad inputs on its own. The 50× retry multiplier is not the model's inefficiency; it is the defect of the input, converted into tokens.

## How Data Quality Lands on the Bill

A straight line runs between input data quality and the token bill. The more ambiguous or gap-riddled the input, the greater the model's uncertainty; the greater the uncertainty, the more retries and re-planning; the more retries, the more tokens pile up in multiples. Conversely, when the input is clean, the model passes on the first try. Same task, same model, same unit price — and yet the bill spreads out by tens of times depending on input quality.

![Structured data pipeline: data flows from entry through parsing, processing, quality validation, and publish stages — each stage enforces quality standards](./image/img-04-data-pipeline.jpg)
*▲ Structured data pipeline with staged quality control: the earlier quality standards are enforced in the pipeline, the fewer retry tokens the model needs to patch bad inputs. Data quality is a pipeline design problem — and a billing problem. | Source: [NEON / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:NEON_Observational_Sampling_Data_Pipeline.jpg)*

Why this relationship matters is that it lets us put a clear number on the return of data-quality investment for the first time. The value of cleaning data has long been explained in fuzzy, hard-to-measure terms — "accuracy goes up," "trust accrues." Run it through the retry loop, though, and that value converts straight into token savings. Refine one batch of input so retries drop from ten to two, and that much comes off next month's bill.

The invisibility of the cost deserves a look too. EY points out that total AI cost does not end with the token price. Infrastructure, governance overhead, organizational-change costs, and failure-and-recovery costs are scattered across many budget lines and arise irregularly, so they are structurally hard to see. The tokens that retries burn are one branch of this invisibility. The total on the bill is visible, but how much of it was spent patching bad inputs does not surface unless you look at it separately.

> [!callout]
> **Becoming measurable**: Seen through the lens of token cost, data quality turns a once-vague investment call into a profit-and-loss calculation. "Refine this data and retries fall; retries fall and tokens fall; tokens fall and the bill falls." This chain translates data governance, for the first time, into a language the finance department understands.

## AI-Ready Data Is an Accounting Problem

Data quality has long been discussed only in the language of data teams — accuracy, consistency, completeness. The words are right, but they don't quite land for the person holding the budget. The retry loop changes the language of this conversation, because it moves data quality into token consumption and the bill — that is, into the language CFOs and FinOps use every day.

This shift is not a small one. When AI-Ready Data was a "desirable thing," it was always pushed aside by something more urgent. But when AI-Ready Data becomes a "way to cut the bill," priorities change. Data refinement turns from a cost center into a means of cost reduction, and data governance turns from a compliance obligation into an investment that buys budget predictability. The moment what was an ethical question becomes an accounting one, the approval chain changes.

The reality of agent adoption presses this shift forward. By one industry tally, only 11–14% of agent pilots survive all the way to production. Most vanish at the pilot stage for being an "unsustainably cash-intensive business model." Citing Gartner, EY projects that more than 40% of agent projects will be canceled by 2027. If a sizable part of that cash is tokens burned by retries, then the path to survival lies not in finding a cheaper model — it lies in giving the model inputs it can clear on the first pass.

Signs that the industry is already responding to cost are everywhere. The number of models a company uses grew from an average of 2.1 in 2024 to 4.7 in Q1 2026, and tiered architectures — swapping cheap and expensive models by task difficulty — have been adopted by 64% of production workloads. Handling even heavy work with a single expensive model carries an average 87% cost premium. These are all clever moves to shave the token unit price, but in the chain we have traced, unit price is the smallest variable. Fail to cut the true multiplier — retries — and no amount of model-swapping keeps the large share of the bill from staying put.

> [!callout]
> **A shift in perspective**: The token price was the wrong metric for seeing cost. The true cost of the same task is decided not by unit price but by how many retries it goes through, and the retry count is decided by the quality of the input data. The surest lever for cutting AI cost is not model shopping but data quality. Cleaning your data is something you do not because it is right, but because it is the biggest cost saving you can make.

<!-- stat-card -->
**Editor's Note** — Diagnosing and improving data through the lens of token cost. When Pebblous says it "diagnoses data" with DataClinic, this is exactly what it means. Giving the model inputs it can clear on the first pass — handling AI-Ready Data in the language of accounting — is the problem we set out to solve.

## References

- 1.EY. (2026). "[Agentic AI: Making Sense of Token Costs](https://www.ey.com/en_us/insights/ai/agentic-ai-token-costs)." _EY Insights_. — Cost-per-interaction $0.04→$1.20 (30×); a seven-factor framework for total AI cost including tokens.
- 2.Optimum Partners. (2026). "[AI Token Costs and How They Might Wreck Your Budget](https://optimumpartners.com/insight/ai-token-costs-and-how-they-might-wreck-your-budget/)." _Optimum Partners Insight_. — Token price −67%, 73% over budget, agents consume 5–30×, 10 retries = 50× tokens.
- 3.Product Leaders Day India. (2026). "[AI Agent Startup Funding News](https://productleadersdayindia.org/blogs/multi-agent-orchestration-news/ai-agent-startup-funding-news.html)." — Agent pilots' production-conversion rate of 11–14%; "cash-intensive business model."
