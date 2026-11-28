---
title: NVIDIA Cosmos Data Factory
subtitle: NVIDIA says synthetic driving clips cost 45x less than road footage, but its own server math gives about 17x
date: 2026-11-29
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# NVIDIA Cosmos Data Factory

_NVIDIA says synthetic driving clips cost 45x less than road footage, but its own server math gives about 17x_

## Executive Summary

> [!callout]
> NVIDIA has released Cosmos Data Factory, a toolkit for generating synthetic training data for robots and self-driving cars, and says it produces autonomous-driving scenes about 45 times more cheaply than collecting them on the road. According to the announcement on NVIDIA's developer blog on November 18, the toolkit consists of five blueprints, which are finished end-to-end workflows, and six skills, which are the shared building blocks. NVIDIA says it cuts the time needed to assemble a dataset by up to 60 times.

> The 45x figure compares a GPU compute cost of $2.66 per synthetic clip with $125 for road collection. But the method NVIDIA itself describes is to divide a daily server cost of $960 by daily output. The autonomous-driving blueprint produces 130 clips a day, which works out to $7.38 per clip. Compared on that basis, the saving is a little over 17x. Three other blueprints in the same announcement come back to $960 a day under this method; only autonomous driving does not. NVIDIA notes that the figures cover compute alone and leave out data preparation and human review.

> The only performance evidence in the announcement is a case from ANYbotics, which makes industrial inspection robots. In the original source, a post by Encord, NVIDIA's figure of recall improved by up to 24% comes from scenes where a new object appears. The 1,400x return that NVIDIA pairs with it comes from liquid-spill scenes, where recall rose 8%. The case used synthetic clips to calibrate the decision threshold of an existing anomaly detector, and false alarms on normal scenes rose as well. Nowhere does the announcement compare a model trained on synthetic data with one trained on real data. Sections 1 to 5 set out verified facts and the companies' claims; section 6 is Pebblous's interpretation.

### Key Figures

Of the four figures below, the first two concern the price list and the last two concern the performance evidence. On the price side, NVIDIA's stated value sits next to the value its own method produces. On the performance side, the cards show Encord's figures for each anomaly type and the comparison the announcement does not make.

Sources: [NVIDIA Technical Blog](https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/) (November 18, 2026), [Encord Data Labs](https://encord.com/data-labs/nvidia-anybotics-synthetic-data/) (October 21, 2026). $7.38 and 17x are Pebblous calculations.

<!-- stat-card -->
**$2.66 / $7.38** — Compute cost per synthetic driving clip — Stated / NVIDIA's own method ($960 a day ÷ 130 clips)

<!-- stat-card -->
**45x → 17x** — Saving versus $125 road collection — Shrinks when NVIDIA's method is applied as written

<!-- stat-card -->
**+24% / +8%** — ANYbotics relative recall gain — Object appearance / liquid spill. The 1,400x ROI is on the +8% side

<!-- stat-card -->
**0** — Synthetic vs real training comparisons — Every comparison in the announcement is about cost or speed

## NVIDIA Releases Cosmos Data Factory With Five Blueprints and Six Skills

On November 18, 2026, NVIDIA published a post on its developer blog titled "Build Training-Ready Physical AI Datasets with Two Prompts in NVIDIA Cosmos." The author is Nakul Arora, a director of product management for NVIDIA Metropolis. As the title says, the announcement's central claim is that two prompts are enough to produce a training dataset for physical AI. Physical AI refers to AI that moves and makes decisions in real space, such as robots, self-driving cars and factory inspection cameras.

Cosmos Data Factory has two layers. The lower layer holds six skills: Auto Labeling, AnomalyGen (anomaly scene generation), Augmentation, Curation and Retrieval, Simulation, and Orchestration. The upper layer holds five blueprints, each of which strings skills together to carry one job from start to finish: autonomous-driving dataset generation, image attribute augmentation, video data augmentation, event video generation, and defect image generation. All five blueprints run on top of the Orchestration skill.

The code is public in the GitHub repository NVIDIA/cosmos-data-factory. The code is licensed under Apache-2.0 and the documentation and skill content under CC-BY-4.0, and the repository states that it is not accepting outside contributions for now. It lists the number of GPUs each blueprint needs: the autonomous-driving blueprint needs four with local models and does not support connecting to an external model server. The defect image blueprint was built around images of PCBs, metal and glass parts. Cosmos Evaluator, which checks generated video for physical accuracy, object consistency and hallucination, runs alongside by default.

The announcement gives a daily output and a unit price for each blueprint. NVIDIA's figures are as follows.

Each row of the table is compared against something different. Autonomous driving is set against the cost of a road collection team, the two augmentation blueprints against the average price of purchased data, and defect images against time rather than money. Event video generation has a unit price and nothing to compare it with. The numbers in the multiplier column come from different baselines, so they cannot be lined up and ranked against one another.

| Blueprint | Daily output | Unit price | Compared against | Multiplier |
| --- | --- | --- | --- | --- |
| Autonomous-driving dataset generation | ~130 clips | $2.66 per clip (GPU compute) | Road collection team, $125 per scenario | ~45x |
| Image attribute augmentation | ~42,649 pairs | $0.023 per pair | Purchased data, $0.25 average | ~10x |
| Video data augmentation | ~305 clips | $3.15 per ~5-minute clip | Purchased data, $22 average | ~7x |
| Event video generation | ~384 clips | $2.50 per clip | Not given | Not given |
| Defect image generation | Not given | Not given | Dataset assembly, 2 months → 1 day | 60x (time) |

▲ Per-blueprint figures from NVIDIA's announcement. Measured on one cloud server with eight RTX PRO 6000 Blackwell GPUs at about $40 per server-hour ($960 a day). Source: [NVIDIA Technical Blog](https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/)

The announcement also includes four customer stories. Siemens aims to cut the manual work of building automated optical inspection programs by up to 85% and to reduce misjudgments by 40%. Volkswagen expects to cut repeated physical test drives by up to 90% and its AI regression-testing cycle by up to 85%. Centific says it shipped in under two weeks with Cosmos Curator what would have taken six months to build in-house. NVIDIA labels the Siemens figures with "Targeting" and the Volkswagen figures with "(expected)," so they cannot be read as measured results. The only measured result is the fourth, from ANYbotics, which section 4 covers separately.

## Cosmos Data Factory's 60x Comes From Defect Images, Its 45x From Driving

The two headline numbers of NVIDIA's announcement are up to 60x faster and 45x cheaper. They come from different blueprints. The 60x is a case in which the defect image blueprint cut dataset assembly from two months to one day. The 45x comes from the clip price of the autonomous-driving blueprint.

The other blueprints report far smaller multipliers. Image attribute augmentation comes in at about 10x and video data augmentation at about 7x, and event video generation offers no comparison at all. The defect image blueprint that produced the 60x, for its part, discloses neither daily output nor unit price. The headline pairs the single largest number from each of two of the five blueprints.

The announcement also leaves open whether the two terms of the 45x share a unit. The synthetic side is the compute cost of one clip; the road side is what a collection team spends to gather one scenario. The announcement does not say how many training clips one road scenario yields, or whether one synthetic clip does the work of one road scenario. Nor does it say under what conditions the $125 collection-team cost was estimated.

## NVIDIA's $2.66 per Clip Becomes $7.38 Under Its Own Method

NVIDIA explains its pricing in a single sentence. It measured daily output on a cloud server with eight RTX PRO 6000 Blackwell GPUs, priced the server at about $40 an hour or $960 a day, and estimated cost per asset by dividing the daily cost by daily output.

Running that method backwards for each blueprint gives split results. Daily output multiplied by unit price should equal the daily cost. For image attribute augmentation, 42,649 pairs at $0.023 comes to about $981. For video data augmentation, 305 clips at $3.15 comes to about $961. For event video generation, 384 clips at $2.50 is $960. All three match the server's daily cost. For image attribute augmentation, the announcement even states "$960/day" in the same line.

Only the autonomous-driving blueprint fails to match. 130 clips at $2.66 comes to about $346, a little over a third of the $960 daily server cost. The chart below recomputes the daily cost of four blueprints from the announced figures.
