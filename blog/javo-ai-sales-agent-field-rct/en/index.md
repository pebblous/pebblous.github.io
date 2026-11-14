---
title: Javo Sells as Well as a Human Rep, and Its Maker Writes the Report Card
subtitle: In a five-month trial on 100 websites, Javo converted 11.26% of engaged visitors against 11.20% for the human reps on the 20 sites that kept them, and the one person who ran and reported it founded the company
date: 2026-10-21
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Javo Sells as Well as a Human Rep, and Its Maker Writes the Report Card

_In a five-month trial on 100 websites, Javo converted 11.26% of engaged visitors against 11.20% for the human reps on the 20 sites that kept them, and the one person who ran and reported it founded the company_

## Executive Summary

> [!callout]
> This article looks at how to read a field trial in which Javo, an AI sales agent that works inside the chat window on a website, was put up against human chat reps. The trial ran for five months, from May 1 to September 30, 2026, on 100 live websites across 14 industries, and 14.8 million visitors were randomly assigned to an arm with no agent, an arm with Javo, and an arm running a frontier-model agent. The weight of the paper comes from where the measuring happened: not a lab benchmark, but screens where money actually changes hands.

> The number that draws the eye came from the 20 sites that kept staffed chat reps. Among engaged visitors, conversion was 11.26% for Javo and 11.20% for the human reps, and handling one conversation cost 1.8% of what a human cost. The person who designed, ran and reported this trial, though, is one person: the founder and CEO of AISO Boost, the company that built Javo. The paper states that itself, and adds that it claims no independent statistical review, no study registration and no external ethics approval.

> Sections 1 through 4 follow what the paper and its companion white paper put on the record. Section 5, which asks what this structure should make a company ask before it hands its own data over, is this article's reading.

### Key Figures

The first three are records from five months on live websites. The last one is the size of the material that produced them.

Source: Benjamin Tannenbaum, ["Selling in the Wild"](https://arxiv.org/abs/2610.25461), arXiv:2610.25461 (submitted October 18, 2026)

<!-- stat-card -->
**+10.0%** — Revenue per visitor — Measured against sites running no chat agent at all. The 95% confidence interval runs from +5.1 to +14.9

<!-- stat-card -->
**11.26% : 11.20%** — Conversion for Javo and human reps — A verdict of not worse, not a verdict of better. The gap is 0.06 percentage points

<!-- stat-card -->
**1.8%** — Cost of one conversation — With the cost of a human rep on the same sites handling one conversation set at 100

<!-- stat-card -->
**4.6 million** — Commercial conversations used in fine-tuning — The mix is given as 46% retail, 28% travel and 26% services, but which sites those visitors came to does not appear

## Five Months on Live Websites, Visitors Split Three Ways

Javo is a sales agent that sits in the chat window on a website, answers visitor questions, takes down the details it needs, and carries the exchange through to an order or a booking. It is built by AISO Boost, an Israeli company, and sold at getjavo.com. The model underneath it was not scaled up to compete on size; it was fine-tuned on 4.6 million commercial conversations. What this paper measures is how much an agent built that way actually sells on the screens where selling happens.

The evaluation comes in four parts. First, Javo was scored on two public benchmarks against frontier models and ten open-weight models. The heart of it is what comes next. The field trial ran from May 1 to September 30, 2026, with 100 live websites across 14 industries taking part, among them e-commerce, travel and lodging, and high-consideration services. The 14.8 million visitors who came to those sites were randomly assigned across the arms: one with no chat agent at all, one with Javo, and one that kept the same interface, the same product-lookup tools and the same guardrails while swapping the model for a frontier model. Because everything but the model was held the same, the difference between the two agent arms reads as a difference the model made.

Results were reported in two directions. Against the arm with no agent, revenue per visitor was 10.0% higher, with a 95% confidence interval from +5.1 to +14.9. Against the frontier-model agent on the same interface, conversion among engaged visitors was 21.6% higher, with an interval from +16.9 to +26.3. An engaged visitor is someone who sent at least one message into the chat window, and the denominator of that conversion rate is those people, not every visitor. The frontier-model comparison was pinned to April 24, 2026. Under a rule set in advance, the model picked was the one available through an API that day with the highest sales-benchmark score, GPT-5.2.
