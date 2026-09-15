---
title: When an AI Agent Stops Halfway, Does the Work Start Over?
subtitle: Temporal raises a $550M Series E led by Lightspeed at a $12.55B valuation, 2.5 times its February mark in seven months
date: 2026-09-15
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When an AI Agent Stops Halfway, Does the Work Start Over?

_Temporal raises a $550M Series E led by Lightspeed at a $12.55B valuation, 2.5 times its February mark in seven months_

## Executive Summary

> [!callout]
> A company that makes open-source software for carrying applications and AI agents through a failure announced a Series E on September 14. The company is Temporal Technologies, based in Bellevue, Washington, and the round is $550M at a $12.55B valuation. This article looks at what that price was put on.

> Set beside the previous round, the size of the move shows. At February's Series D the company was worth $5B. Seven months later the figure is 2.5 times that, and what grew in between was not model quality but the number of times agents actually ran in production. The figure is still a price investors agreed on in a private round, not a quote set by a market.

> Sections 1 through 4 follow what the company put in its announcement and its press release, plus how the technology it sells works. Section 5 carries the question over to data practice, and that reading is this article's own, not something in those documents.

### Key Figures

Source: [Temporal announcement (2026-09-14)](https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai)

<!-- stat-card -->
**$12.55B** — Series E valuation — 2.5 times the $5B of February's Series D, seven months on. At the Series C in March last year the figure was $1.72B

<!-- stat-card -->
**1.9 trillion** — Billable actions in August — Up more than 350% year over year. An action is the unit of execution this company counts and bills for

<!-- stat-card -->
**60-fold** — Growth in OpenAI's usage — In under a year. Paying customers passed 4,300, up 139% year over year

<!-- stat-card -->
**$250M** — Annualized revenue run rate — Up more than 200% year over year. Net dollar retention has stayed above 200% since February

## What Happened?

Lightspeed led the round. Wellington Management, Growth Equity at Goldman Sachs Alternatives, and Tiger Global came in as co-leads, with T. Rowe Price and SV Angel participating. a16z, Sequoia, Index, GIC, Sapphire Ventures, and Amplify, who led or joined earlier rounds, all returned. Lightspeed, out in front this time, is not a new face either. It was already in February's Series D as a participating investor, and in seven months it moved from the back row to the head of the table. The company says the money goes to expanding global operations, investing in the core primitives beneath the platform, and the reliability and security work its enterprise customers keep asking for. Headcount doubled over the past year to 570.

The speed of the repricing is the heart of this announcement. Three reference points, side by side:

| Date | Round | Valuation |
| --- | --- | --- |
| March 2025 | Series C · $146M | $1.72B |
| February 2026 | Series D · $300M · led by a16z | $5B |
| September 14, 2026 | Series E · $550M · led by Lightspeed | $12.55B |

The Series D and Series E figures come from announcements the company published on February 17 and September 14. The Series C figure is a tally from the investment database Dealroom. Series C and D valuations are post-money.

Move the ruler one notch further back and the span widens. At the Series C in March 2025 the company was worth $1.72B. Eighteen months later it is more than seven times that. Adding up the rounds that have been disclosed puts the money raised so far at around $1.2B.

Over the same stretch, revenue has been adding on more slowly. February's announcement put revenue up more than 380% year over year, and this one puts it up more than 200%. A bigger base naturally pulls the rate down, but the growth rate went the other way while the valuation went up 2.5 times, and the two are worth reading together.

Growth figures came out alongside the round. The annualized revenue run rate passed $250M, growing at that same rate of more than 200%. Open-source installs passed 43 million, up 134% since December 2025. The customer list names OpenAI, Snap, NVIDIA, Netflix, and JPMorgan Chase. Snap carries 414 million Stories a day on it, and JPMorgan Chase runs it in regulated production.

The press release carries a longer list: Anysphere, the maker of Cursor, along with Lovable, Scale AI, Salesforce, Shopify, Booking.com, Block, and DoorDash. Among the uses, next to long-running agents, payments, and customer operations, it names autonomous-vehicle simulations. Teams working on the physical world are running into the same class of problem.

The most striking figure concerns OpenAI. The company wrote that OpenAI's use of Temporal has grown 60-fold in under a year. Venkat Venkataramani, OpenAI's VP of Infrastructure, added this to the announcement.

“As infrastructure teams increasingly handle really complex, long-running workflows, they have even less control over external dependencies. Durable Execution is more than ever a core requirement for modern AI systems, and Temporal offers a compelling platform to help build it in from the start. This is one of the main reasons why we invested in building a durable orchestration framework powered by Temporal at OpenAI.”

The weight sits in the last sentence. OpenAI did not stop at picking the tool. It went on to build a durable orchestration framework of its own on top of it. Choosing a tool and putting your own layer over it carry different costs on the day you want to swap the thing underneath.

## What Does This Company Sell?

Temporal does not build models. It sells an execution engine that pushes a long job to the finish after the job gets cut off partway. The company calls that Durable Execution. Developers write ordinary code, the engine keeps a record of every step of the execution, and when a server dies or a network drops, the engine uses that record to carry on from where the work stopped. A job that waits days for a human approval survives on the same machinery, since nothing has to stay alive in memory during the wait.

![Temporal's Web UI Event History view — events during a workflow run recorded in numbered order](./image/img-01-event-history.png)
*▲ Temporal's Web UI Event History view — what happened during a run is recorded in numbered, ordered steps | Source: [Temporal Blog](https://temporal.io/blog/the-dark-magic-of-workflow-exploration)*

This company did not appear on the back of the agent boom. The two founders, Maxim Fateev and Samar Abbas, met at Amazon while building services that coordinate long-running work. Fateev led Simple Workflow Service (SWF), and Abbas joined the team that brought SWF to the public in 2012. Abbas went on to co-create the open-source Durable Task Framework at Microsoft, and Microsoft later built Azure Durable Functions on top of it. The word durable attached to what this company sells today comes from those years.

The two met again at Uber and built the open-source workflow engine Cadence. Cadence passed 100 internal use cases in three years and went public as open source in 2017. Temporal started in 2019 as a fork of Cadence. The problem now called agent infrastructure is one these people were already working on under the same name, back when there were no agents.

Abbas, the co-founder and chief executive, summed up where the company stands in the announcement.

“Reliability has never been optional, but AI has quickly raised the cost of skipping it, and developers need a foundation for that built in from day one, not bolted on afterward.”

Anoushka Vaswani, a partner at Lightspeed, gave a more practical reason. Every team building on AI hits the same wall, Vaswani said: “the demo is easy, production is hard, because the systems around the models can't handle real-world execution.”

The investment arithmetic shows up right after that. Most of the market, in Vaswani's account, “solves that by locking teams into a proprietary stack,” while Temporal is “the open, pluggable foundation that runs their agents and the systems they already depend on.” The round's bet shows here too: not how well the platform runs models, but whether a team can slot it in beside what it already runs, without tearing any of that out. Real adoption paths are filling in as well. The OpenAI Agents SDK integration went generally available in March, and a Vercel AI SDK integration followed to put the same guarantees under TypeScript.

## What Comes Back When an Agent Stops?

Say a worker dies thirty or so steps into an agent's job. The common answer is a retry, and a retry usually starts the whole thing from the top. If a payment API was already called at step 20, that call goes out a second time. Mail that already went out goes out again, and records that were already moved get moved again. On top of that, a model call does not return the same answer for the same input, so there is no guarantee the second path matches the first.

Durable Execution takes a different road. Every non-deterministic operation that reaches outside during a run has its result written to an event log. What the model answered, what a tool returned, what an external read produced, all of it in order. In exchange, the control flow that strings those calls together has to be deterministic, which is to say the same input order has to take the same branch. On recovery the engine does not execute again up to the point where the record ends. It substitutes the stored results instead, so no side effect repeats. Real execution resumes where the record stops, which is the spot where the worker died.

Two words split apart here, and keeping them apart saves money later. Replay answers “what happened that time.” Re-run answers “what happens if I run this now.” A recovery design that treats the two as one thing sends the mail twice and charges the card twice.
