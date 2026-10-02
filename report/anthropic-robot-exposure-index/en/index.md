---
title: Anthropic Grades Robots Without Watching a Single One
subtitle: Claude read US job descriptions and scored them. Robots can do 74% of physical tasks; only 0.3% are worth the price
date: 2026-10-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Anthropic Grades Robots Without Watching a Single One

_Claude read US job descriptions and scored them. Robots can do 74% of physical tasks; only 0.3% are worth the price_

## Executive Summary

> [!callout]
> Anthropic released a robot exposure index at the end of September 2026, and the figure that travelled was 74%: the share of US physical tasks that today's robots could perform. Coverage attached a second sentence to it. Even in the fastest scenario, the study said, half of all physical work does not become cheaper than human labour until 2050. That became a story about reassurance, about blue-collar workers having decades of room. The same study also wrote down a date for its baseline scenario. That date is 2085, and it appears nowhere in the coverage.

> Traced backwards, the chain takes in only four kinds of data from outside: job descriptions, employment and compensation statistics, population survey data, and a robot price series. Every one of the ten steps between them is an estimate produced by Claude Opus 5. The evidence on the robot side is not field logs either; it is product pages and trade press. In the public dataset, close to one citation in three points at the website of the company that built the robot. The work entered through text written by whoever drafted the job description. The robots entered through text written by the firms that sell them. Both sides are documents. And a paper that ran the same kind of rubric with the grader model swapped out had already appeared five months earlier. When the grader changed, close to half of the task-level ratings changed with it.

> Everything above is fact. Here is the interpretation. The authors wrote down their own limits. Without the ratings that lean on a robot doing some _similar_ task, the appendix says, the exposed share falls from about three quarters to about one half. The sentence saying that much physical work is doable but not automatable at scale with today's capabilities is theirs as well. So is the caveat that the fifty-year backtest validated factory interiors, while the warehouses and roads this study is actually new about are the part history says little about. This is a study that drew its own sensitivity bands and its own range. What this report questions is not the authors' diligence but the distribution path that dropped the appendix and carried the headline. And underneath that, a more basic condition: at the place where the future of physical AI is being measured, there is no number that was counted in the field.

<!-- stat-card -->
**3/4 → 1/2** — When transfer-based ratings are removed — A sensitivity the authors computed themselves. 24 percentage points hang on one judgment call

<!-- stat-card -->
**56.9%** — Agreement when the grader model changes — From a study that ran the same rubric on other models. Three runs of one model agreed 99.0% of the time

<!-- stat-card -->
**80 / 105** — Unstructured-environment tasks that are not driving — 105 tasks were rated as doable in settings like public roads, and 80 of them have nothing to do with driving

<!-- stat-card -->
**30.8%** — Evidence from robot makers' own websites — A lower bound, from sorting all 56,933 published citations by domain

## Four Numbers, and the One That Went Missing

Anthropic published "What work can robots do?" on 30 September 2026. Russell Legate-Yang and Maxim Massenkoff wrote it: 45 pages of main text, 57 pages of appendices. This is a company research report, not a journal article. There is no arXiv number and no DOI, and the citation format the authors supply is the one used for online documents. What they did publish is the full set of prompts and the task-level dataset, and every recomputation in this report comes out of that release.

Yahoo Finance ran a story the following day, and that story carried three headline numbers. Robots can do 74% of physical tasks, those tasks account for 34% of working hours, and robots are cheaper than people on 0.3% of them. There are four headline numbers rather than three, though, and they do not share a denominator. Without that separation, the very next sentence goes wrong.

### 1.1. Different Denominators Behind Each Number

The table below sets out the four denominators. 74% is a share of US physical tasks. 34% and 0.3% are shares of all working hours, physical or not. Because those last two do share a denominator, they can be read side by side, and the report's own sentence makes exactly that contrast. Work that robots could in principle do amounts to 34% of all working hours, while the work on which a robot is cheaper than a person today comes to 0.3% of the same total.

| Headline | What it counts | Denominator |
| --- | --- | --- |
| 74% | Tasks rated as performable by today's robots | US physical tasks |
| 34% | Working hours those tasks absorb | All working hours |
| 0.3% | Tasks where a robot costs less than a person | All working hours |
| 81% | Tasks exposed to robots or to large language models | All task hours |

****************

Taken from the report's main text and its key findings list. The key findings give the fourth number as "about 80%" while page 14 gives 81%. Same value, rounded and unrounded; this report uses 81% throughout.

Pebblous has looked at an index built on the same occupational database before. [The occupational map of agentic delegation](/report/agentic-delegation-occupation-map-2026-08/en/) covers text work. This report pulls the physical tasks out of the same database and attaches robots to them instead. Anyone reading the two indices together should start by noting that they are scored over different objects.

### 1.2. The Axis Is How Much the Workplace Must Be Changed

The most important device in the study's design is a four-tier scale. The press summarised it as "four levels of environmental control," which is accurate as far as it goes but easy to read with the axis inverted. The question the scale asks is not how controlled an environment already is. It asks **how much a person has to modify the environment** before a robot can do the work there. The tier that needs the most modification is E1; the tier that needs none is E3. Exposure is therefore highest at E3.

| Tier | Meaning | Of physical tasks | Of all tasks |
| --- | --- | --- | --- |
| E0 | No robot can do it | ~25% | 12% |
| E1 | Only in a purpose-built robot setting (factory assembly line) | 50% | 23% |
| E2 | In a structured human facility (logistics warehouse) | 22% | 10% |
| E3 | In an unstructured environment (city streets) | 2% | 1% |

E1 through E3 sum to 74% of physical tasks and 34% of all tasks. The E0 share lands anywhere from 24% to 30% depending on the weighting and base year, so only the employment-weighted figure is used here.

This is where the internal composition of the 74% becomes visible. Fifty of those percentage points are E1. The tier that requires building a new workplace around the robot takes up more than two thirds of the headline. The tier that matches what people picture when they hear "robots can do our jobs" — work done in an environment nobody rearranged, on a city street — is 2% of physical tasks.
