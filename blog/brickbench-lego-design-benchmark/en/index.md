---
title: BrickBench: AI Designs LEGO That Stands, Until You Take the Checking Tools Away
subtitle: The top agent made every one of the 300 LEGO tasks buildable. Hand it only a parts library and the rate falls to 40 percent — Stanford, Max Planck and Inria
date: 2026-10-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# BrickBench: AI Designs LEGO That Stands, Until You Take the Checking Tools Away

_The top agent made every one of the 300 LEGO tasks buildable. Hand it only a parts library and the rate falls to 40 percent — Stanford, Max Planck and Inria_

## Executive Summary

> [!callout]
> This article reads BrickBench, which researchers at Stanford University, the Max Planck Institute for Intelligent Systems and Inria posted to arXiv on October 8, 2026. It hands a coding agent a single line of text and asks for a model that can actually be built out of real LEGO parts. Alongside the 300 tasks, the authors released a working environment called BrickAgent.

> The clearest result arrived when that environment was taken away. Holding BrickAgent, GPT-6 Astra returned a buildable design on all 300 tasks. Given nothing but a parts library and a primer on the file format, the same model fell to 40 percent valid, and GPT-5.6 Luna was left with one valid build in 300. The tasks were identical across the two runs and so was the model. The only thing missing the second time was a tool that checked each build the moment it was made.

> The figures and quotations in sections 1 through 4 come from the paper's body, its appendix tables and the leaderboard on the project site. Section 5 carries the finding over to data pipelines, and that move is this article's own reading rather than the paper's.

### Key Figures

Four numbers. The first two show how far the valid-design rate fell once the checking environment was gone. The last two show how the structure came apart in that condition, and how much distance still separates these designs from human ones.

Source: Kulits et al. (2026), [BrickBench: Evaluating Agentic Brick Design](https://arxiv.org/abs/2610.12452), arXiv:2610.12452.

<!-- stat-card -->
**1.00 → 0.40** — GPT-6 Astra's valid-design rate — Once BrickAgent was gone, 40 percent of the 300 tasks came back buildable

<!-- stat-card -->
**1 in 300** — GPT-5.6 Luna's valid builds without the environment — With the environment, the same model passed on every one of the 300

<!-- stat-card -->
**4.6 → 83.0** — Pieces a single design broke into — Luna's average. Scenes that had come in four or five pieces scattered into eighty-odd

<!-- stat-card -->
**323 / 360** — Times the human design was picked out — Five evaluators compared agent designs against human ones, paired side by side

## What BrickBench Scores

The order an agent receives is one line long. Read the prompt, pick parts from the real LDraw parts library, and return a LEGO model that matches the description and can physically be built. LEGO makes the task sound light, but every part placed has to satisfy a local constraint, which is how it interlocks with its neighbors, and a global one, which is the shape of the whole thing.

![A LEGO model designed by GPT-6 Astra in the BrickBench Model setting — a pelican riding a bicycle, buildable from real LDraw parts](./image/img-01-pelican-bike.avif)
*▲ A model GPT-6 Astra designed for the prompt "a pelican riding a bicycle." It can be built from real LEGO parts | Source: [brickben.ch](https://brickben.ch/)*

Tests for this kind of work already existed. They put a single object of under 100 parts in front of a model and asked how closely it resembled the description. Two things were missing from that, the authors write. One is scale: a retail set runs from hundreds to thousands of parts, and the available inventory is fixed. The other is design. Making something that works and making something worth making are different problems, and there is no pass-or-fail test for whether a design is any good. Two models can satisfy exactly the same description and be nowhere near each other in quality.

There are 300 tasks, split across three settings. Model covers single constructions of up to 400 parts. Set covers retail-scale builds of 400 to 4,000 parts. Alt-Build asks for a rebuild using only the 783 parts that come in retail set 10698. Each setting holds 100 tasks, spread across ten themes at ten apiece: medieval and castle, vehicles, trains, space, art objects, architecture, plants, animals, pirates and period pieces. Prompts average 45, 57 and 31 words respectively.

Scoring runs on four axes. Valid asks whether the design meets the parts requirement, is free of collisions, and stands up under gravity; stability is confirmed in a PyBullet physics simulation, where components must displace less than 3 LDraw units once gravity is applied. VQA breaks the prompt's requirements into yes-or-no questions, which Gemma 4 31B then scores to produce a satisfaction rate. ELO places two designs side by side, has a vision-language model choose between them, and converts the outcome through a Bradley-Terry model, with separate scores for how well a design matches its prompt (Align ELO) and for design quality independent of the prompt (Design ELO). Cost is the list price of the tokens spent on one design.

The protagonist of this article is BrickAgent, released with the benchmark. The agent can search for parts, place them against connectors, rotate and move and flip them, check dimensions, define subassemblies and merge them, and render the build at any point. And a checker comes attached. It reports where connections have broken, which parts collide with which, and where the structure gives way, pointing at the parts responsible. That is possible because every LDraw part arrives with typed connectors already annotated on it. They come in five kinds (stud, hinge, axle, ball and fixed), which lets the build be handled as a set of connections rather than a set of coordinates.

Each agent gets 300 turns per prompt. Runs went through Codex CLI, with the Claude models driven by Claude Code. The environment's instructions explain the tools with examples, state the parts requirement for the setting, and then add that a skilled LEGO designer will judge this design against others by the standard of published sets.

## With the Tools in Hand, Almost Everything Gets Built

Start with the result: an agent holding BrickAgent almost never produces a physically wrong design. Five of the eleven agents tested were judged valid on all 300 tasks.

| Agent | Valid | VQA | ELO | Cost per design |
| --- | --- | --- | --- | --- |
| GPT-6 Astra | 1.00 | 0.954 | 1297±22 | $4.06 |
| GPT-6.1 Sol | 1.00 | 0.945 | 1293±23 | $0.87 |
| Claude Opus 5.5 | 0.99 | 0.923 | 1249±23 | $6.33 |
| Claude Opus 5 | 1.00 | 0.908 | 1101±17 | $16.47 |
| Qwen 3.8 Flash | 0.90 | 0.852 | 1048±17 | $1.75 |
| GPT-5.6 Sol | 1.00 | 0.859 | 1015±16 | $1.02 |
| Gemini 3.8 Flash | 0.98 | 0.856 | 1014±17 | $3.70 |
| DeepSeek V4.1 Flash | 0.94 | 0.813 | 1006±17 | $0.71 |
| GPT-5.6 Luna | 1.00 | 0.792 | 898±16 | $0.75 |
| Muse Spark 1.3 | 0.80 | 0.718 | 868±20 | $6.68 |
| GLM 5.3 Flash | 0.92 | 0.590 | 752±23 | $0.54 |

Aggregated over all 300 tasks across the three settings. ELO is the overall score combining Align ELO and Design ELO. Source: arXiv:2610.12452, Table 1.

Two places in the table hold the eye. One is the top two rows. GPT-6 Astra's 1297 and GPT-6.1 Sol's 1293 have overlapping error intervals, so the two cannot be told apart, while one design costs $4.06 from the first and $0.87 from the second, a gap of more than four times. Claude Opus 5 is the most expensive at $16.47 and places fourth overall. Score and price do not travel together.

The paper also records where the remaining failures came from. Across the nine agents in the reference set, 137 designs failed to earn a valid verdict, and 44 of those never produced any output at all. The rest fell over under gravity (41), had parts overlapping (31), or missed the parts count the setting required (21). The setting that broke most often is Set, the one asking for 400 to 4,000 parts; the valid rate there drops to 0.68 for Muse Spark 1.3 and 0.79 for Qwen 3.8 Flash. The distribution of part counts shows most agents crowding just above the 400-part floor, which is to say that an instruction to build big returns the smallest scene the setting permits. Astra is the exception, using far more parts than the other agents in both settings.

![A scene GPT-6 Astra designed in the Set setting (400 to 4,000 parts) — three figures at a stone table with two silver goblets](./image/img-02-goblets-hillside.avif)
*▲ A design GPT-6 Astra built in the Set setting — the result of "a stone table on a rocky hillside, two silver goblets between them" | Source: [brickben.ch](https://brickben.ch/)*

The other place is the gap between the Valid column and the VQA column. GPT-5.6 Luna made all 300 designs buildable and still sits ninth on VQA at 0.792, while Claude Opus 5.5 did not get all of them standing at 0.99 Valid and comes third on VQA at 0.923. Buildability is a constraint the checker answers immediately, so the leaders bunch together. How much of what was asked for actually got built, on the other hand, runs from 0.590 to 0.954, and design quality runs from 753 to 1299 on Design ELO. The models separate on the axis the checker does not report back.

## Take the Tools Away and the Same Model Collapses

The authors ran the same 300 tasks past GPT-6 Astra and GPT-5.6 Luna a second time. This round they withheld BrickAgent and handed over only the LDraw parts library and a primer on the file format. Neither the weights nor the tasks changed; the one thing removed was the means of checking a build on the spot.

GPT-6 Astra's valid-design rate went from 1.00 to 0.40. GPT-5.6 Luna was left with one build in 300. Both had scored 1.00 with the environment in place, so this gap opened up inside a single model rather than between two of them.

The shape of the collapse is on record too. Colliding part pairs rose from an average of 0.00 to 7.19 for Astra, and reached 155.51 for Luna. The count of connected components, which measures how many separate pieces a single design breaks into, rose from 2.21 to 6.12 for Astra and from 4.60 to 83.00 for Luna. A scene with several objects standing in it is supposed to come in several pieces, which is why those averages sat between two and five while the environment was in place. Eighty-three is outside that range. Parts that belonged to each other had come away from each other.
