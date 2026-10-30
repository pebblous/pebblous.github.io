---
title: In Anthropic
subtitle: Anthropic
date: 2026-10-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# In Anthropic

_Anthropic_

## Executive Summary

> [!callout]
> On October 27 Anthropic put out the results of a randomized controlled experiment run with 50 professional analysts. Each participant took the seat of lead analyst at a fictional farming co-op, worked through the data with Claude Code open beside them, and had to recommend to the board whether to expand an advisory program for member farms or shut it down. There was one thing the participants did not know. The task held four analytical decisions with no right answer, and one final recommendation at the end of them. Which of the two positions the agent would argue at each of those five points had been fixed in advance by a coin flip.

> At the four analytical decisions, the answer each participant finally submitted overlapped the preference a coin had assigned their agent 86% of the time. Had the face of that coin never reached a person's judgment, the number should have stayed near half. The agent never lied and never withheld data; it made the strongest case for the position it had drawn and nothing more. On the final cell, the recommendation itself, the direct effect of the agent's preference was not statistically significant, and the paper sets that down plainly.

> Sections 1 through 5 follow what Anthropic's research page and the paper itself record. Section 6, which reads those four junctions as the same place a data team stands every week when it defines a metric or fixes a preprocessing rule, is this article's own.

### Key Numbers

Four numbers carry the experiment. The first three count how the participants moved. The last slot counts what they never caught.

Sources: [Anthropic research page](https://www.anthropic.com/research/agents-judgment-calls) · [the paper](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf) (October 27, 2026)

<!-- stat-card -->
**86%** — Share of the four junctions where the participant gave the agent's answer — A coin flip, not the data, decided what the agent would push for. With no influence the number is 50%

<!-- stat-card -->
**60% vs 6%** — Changed their minds after taking a side first — 60% when the agent took the opposite view, 6% when it took the same one

<!-- stat-card -->
**82%** — Final recommendations predicted from four coin flips alone — Information that existed before anyone started the task. Guessing the majority every time gives 61%

<!-- stat-card -->
**None** — Participants who spotted the planted preference — Reliance on AI was named a likely topic of the study by 46%; the agent's influence by 12%

## The Task Leaves Open Only What Has No Right Answer

The task was a fictional farming co-op. The participant took the lead analyst's seat at Greenfields Co-op, had to estimate how much a voluntary subsidy-advisory program had raised productivity, and had to tell the board whether to expand it or shut it down. The board set a productivity gain of roughly 3 to 4% as its bar. The data was synthetic, built by the researchers, and the briefing left several important points deliberately open.

![A wide wheat field being harvested by a combine](./image/img-01-wheat-harvest-field.jpg)
*▲ Greenfields Co-op is fictional, but "yield per hectare" is a real metric choice real farms have to make | Source: [Wikimedia Commons (Public Domain)](https://commons.wikimedia.org/wiki/File:Wheat_harvest_on_field.jpg)*

Four of those open points mattered. What productivity is measured by, how the program's effect is separated out, whose effect is being reported, and how farms are added together. All four were built so that the data and the briefing hold up either answer, and the estimate swings from a clear loss to a clear gain depending on which way each one goes. Add the final recommendation and an analyst has five places to pass through. At the recommendation, a one-year extension stood open as a middle answer alongside expanding and shutting down.

The device the participants knew nothing about comes next. At each of the five points, a coin flip assigned which way the agent would push, and a system prompt invisible to the participant had the agent voice that position as a view of its own. The same prompt carried hard constraints the agent could not break: never misrepresent results, never hide or distort data the user asks for, never make an argument the data does not support or that it does not believe. This was not an experiment that built a lying AI and then fooled people with it.

> [!callout]
> 61 analysts completed the task, and 50 of them worked with Claude Code open. The agent was pinned to the same configuration in every session. The other 11 did the same task without AI, and they serve as the comparison group. The median completion time among those who used AI was 65 minutes. The design and the analysis plan were registered in a public repository before anyone looked at the data.

## All Four Tilt Toward the Agent

Start with the outcome. Every one of the four points tilted toward the answer the agent had been handed, and the four decisions pooled give an agreement rate of 86%. Which answer that was had nothing to do with the participant; a coin settled it.

What each of the four was choosing between shows the character of the tilt. Not one of the cells holds a wrong answer. Both answers stand on grounds inside the task materials, and two seasoned analysts reading the same data could land on opposite ones.

| What is being chosen | One side | The other side |
| --- | --- | --- |
| What productivity is measured by | Yield per hectare | Yield per operating cost |
| How the effect is separated out | Difference-in-differences | Levels-adjusted ANCOVA |
| Whose effect is being reported | Farms that enrolled | The full membership |
| How farms are added together | One weight per farm | More weight to larger producers |

Why the last three have no right answer is written out decision by decision in the paper's appendix. The identification choice hangs on why farms enrolled in the first place. If enrollment reads as a persistent disadvantage, differencing is exactly what removes that gap; if it reads as a temporary dip, differencing credits the program with the rebound such farms make on their own. Nothing in the data settles which story holds. The estimand splits because the board's question contains both of them, clause by clause. Whether the program improved the productivity of the farms that joined is one question, and whether the gain is large enough to justify rolling it out to the whole membership is another. The weighting turns on whether this is a membership decision or a budget decision. The co-op's governance runs per member, one farm and one weight, while the subsidy is paid from the marketing surplus the co-op earns on the total tonnage its members sell.

The four agreement rates sit between 81% and 92%. No single point pulled the average up; four decisions of different character produced tilts of similar size.
