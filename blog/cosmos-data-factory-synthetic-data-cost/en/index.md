---
title: "NVIDIA Launches Cosmos Data Factory to Speed Up Physical AI Training Dataset Creation"
subtitle: NVIDIA open-sources five blueprints and six skills, and says dataset assembly runs up to 60x faster and synthetic driving clips cost about 45x less
date: 2026-11-29
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# NVIDIA Launches Cosmos Data Factory to Speed Up Physical AI Training Dataset Creation

_NVIDIA open-sources five blueprints and six skills, and says dataset assembly runs up to 60x faster and synthetic driving clips cost about 45x less_

## Executive Summary

> [!callout]
> NVIDIA released Cosmos Data Factory, a toolkit for generating physical AI training data, on its developer blog on November 18, 2026. The announcement's central claim is that two prompts are enough to produce a training dataset for robots and self-driving cars. The toolkit consists of five blueprints, which are finished end-to-end workflows, and six skills, which are the shared building blocks. The code is public in the GitHub repository NVIDIA/cosmos-data-factory under the Apache-2.0 license.

> NVIDIA gives a daily output and unit price for each blueprint. On one cloud server with eight GPUs, image attribute augmentation produces about 42,649 pairs a day at $0.023 a pair, video data augmentation about 305 clips at $3.15 a clip, and event video generation about 384 clips at $2.50 a clip. Autonomous-driving dataset generation produces about 130 clips a day, and NVIDIA says its compute cost of $2.66 per clip is about 45 times cheaper than $125 for road collection. Defect image generation cut dataset assembly from two months to one day, up to 60 times faster.

> The announcement includes four customer stories. Siemens aims to cut the manual work of building automated optical inspection programs by up to 85%, and Volkswagen expects to cut repeated physical test drives by up to 90%. Centific says it shipped in under two weeks with Cosmos Curator what would have taken six months to build in-house. In the ANYbotics case published by Encord, synthetic anomaly scenes were used to calibrate an inspection robot's change detection model, and recall on real anomalies rose by up to 24%.

> NVIDIA notes that the prices cover compute only. Dividing the published $960 daily server cost by about 130 clips a day gives a compute cost of $7.38 per driving clip, and the gap from the announced $2.66 cannot be explained from the announcement alone (section 3). The announcement contains no comparison between a model trained on synthetic data and one trained on real data. Sections 1 to 5 set out verified facts and the companies' claims; section 6 is Pebblous's interpretation.

### Key Figures

Sources: [NVIDIA Technical Blog](https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/) (November 18, 2026), [GitHub NVIDIA/cosmos-data-factory](https://github.com/NVIDIA/cosmos-data-factory).

<!-- stat-card -->
**5 · 6** — Blueprints · skills — A dataset from two prompts

<!-- stat-card -->
**Up to 60x** — Faster dataset assembly — Defect image generation, two months to one day

<!-- stat-card -->
**$2.66** — Compute cost per synthetic driving clip — As announced. About 45x below $125 road collection

<!-- stat-card -->
**Apache-2.0** — Code license — Documentation and skill content under CC-BY-4.0

## NVIDIA Releases Cosmos Data Factory With Five Blueprints and Six Skills

On November 18, 2026, NVIDIA published a post on its developer blog titled "Build Training-Ready Physical AI Datasets with Two Prompts in NVIDIA Cosmos." The author is Nakul Arora, a director of product management for NVIDIA Metropolis. As the title says, the announcement's central claim is that two prompts are enough to produce a training dataset for physical AI. Physical AI refers to AI that moves and makes decisions in real space, such as robots, self-driving cars and factory inspection cameras.

Cosmos Data Factory has two layers. The lower layer holds six skills: Auto Labeling, AnomalyGen (anomaly scene generation), Augmentation, Curation and Retrieval, Simulation, and Orchestration. The upper layer holds five blueprints, each of which strings skills together to carry one job from start to finish: autonomous-driving dataset generation, image attribute augmentation, video data augmentation, event video generation, and defect image generation. All five blueprints run on top of the Orchestration skill.

The code is public in the GitHub repository NVIDIA/cosmos-data-factory. The code is licensed under Apache-2.0 and the documentation and skill content under CC-BY-4.0, and the repository states that it is not accepting outside contributions for now. It lists the number of GPUs each blueprint needs: the autonomous-driving blueprint needs four with local models and does not support connecting to an external model server. The defect image blueprint was built around images of PCBs, metal and glass parts. Cosmos Evaluator, which checks generated video for physical accuracy, object consistency and hallucination, runs alongside by default.

The announcement gives a daily output and a unit price for each blueprint. NVIDIA's figures are as follows.

Each row of the table is compared against something different. Autonomous driving is set against the cost of a road collection team, the two augmentation blueprints against the average price of purchased data, and defect images against time. Event video generation has a unit price and nothing to compare it with. The numbers in the multiplier column come from different baselines, so they cannot be lined up and ranked against one another.

| Blueprint | Daily output | Unit price | Compared against | Multiplier |
| --- | --- | --- | --- | --- |
| Autonomous-driving dataset generation | ~130 clips | $2.66 per clip (GPU compute) | Road collection team, $125 per scenario | ~45x |
| Image attribute augmentation | ~42,649 pairs | $0.023 per pair | Purchased data, $0.25 average | ~10x |
| Video data augmentation | ~305 clips | $3.15 per ~5-minute clip | Purchased data, $22 average | ~7x |
| Event video generation | ~384 clips | $2.50 per clip | Not given | Not given |
| Defect image generation | Not given | Not given | Dataset assembly, 2 months to 1 day | 60x (time) |

▲ Per-blueprint figures from NVIDIA's announcement. Measured on one cloud server with eight RTX PRO 6000 Blackwell GPUs at about $40 per server-hour ($960 a day). Source: [NVIDIA Technical Blog](https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/)

The announcement also includes four customer stories. Siemens aims to cut the manual work of building automated optical inspection programs by up to 85% and to reduce misjudgments by 40%. Volkswagen expects to cut repeated physical test drives by up to 90% and its AI regression-testing cycle by up to 85%. Centific says it shipped in under two weeks with Cosmos Curator what would have taken six months to build in-house. NVIDIA presents the Siemens figures as targets and the Volkswagen figures as expectations. The fourth, from ANYbotics, is presented as a measured result, and section 4 covers it separately.

## Cosmos Data Factory's 60x Comes From Defect Images, Its 45x From the Driving Blueprint

The two headline numbers of NVIDIA's announcement are up to 60x faster dataset assembly and 45x cheaper autonomous-vehicle scenario generation. They come from different blueprints. The 60x is a case in which the defect image blueprint cut dataset assembly from two months to one day. The 45x comes from the clip price of the autonomous-driving blueprint.

The announcement compares the two augmentation blueprints with the average price of purchased data. Image attribute augmentation is about 10x cheaper and video data augmentation about 7x cheaper. Event video generation gives a unit price only, and defect image generation discloses neither daily output nor unit price.

The two terms of the 45x use different units. The synthetic side is the compute cost of one clip; the road side is what a collection team spends to gather one scenario. The announcement does not say how many training clips one road scenario yields, or under what conditions the $125 collection-team cost was estimated.

## The Driving Blueprint's Clip Price, Re-divided With the Published Method

NVIDIA explains its pricing in a single sentence. It measured daily output on a cloud server with eight RTX PRO 6000 Blackwell GPUs, priced the server at about $40 an hour or $960 a day, and estimated cost per asset by dividing the daily cost by daily output.

Under that method, daily output multiplied by unit price equals the daily server cost. For image attribute augmentation, 42,649 pairs at $0.023 comes to about $981. For video data augmentation, 305 clips at $3.15 comes to about $961. For event video generation, 384 clips at $2.50 is $960. All three match the $960 daily server cost. For image attribute augmentation, the announcement states "$960/day" in the same line.

For the autonomous-driving blueprint, 130 clips at $2.66 comes to about $346, a little over a third of the $960 daily server cost. The chart below recomputes the daily cost of four blueprints from the announced figures.

$2.66 is the GPU compute cost per synthetic driving clip that NVIDIA announced. Dividing the published $960 daily server cost by about 130 clips a day gives $7.38. That figure is a compute cost checked against public numbers; it is neither a measured unit price nor a total cost. The gap between the two amounts cannot be explained from the announcement alone. The GitHub repository says the blueprint needs four GPUs, and dividing half the server, $480 a day, gives about $3.69 per clip. The $346 corresponds to running the server for about 8.6 hours a day.

$125 is the cost of collecting one scenario on the road, while $2.66 and $7.38 are compute costs per clip. Dividing $125 by $7.38 gives about 17 times. That ratio is a simple division of public figures and does not represent an actual saving.

NVIDIA itself states what the price leaves out. The announcement contains this sentence.

> Note that these figures cover compute only; source data preparation, setup, agent use, storage, and human review may add costs.
>
> NVIDIA Technical Blog, November 18, 2026

The cost of one usable clip is the batch's GPU compute cost plus the separately incurred costs of source data preparation, setup, agent use, review and storage, divided by the number of clips finally accepted. Checking and regeneration costs already inside the GPU compute cost are not counted twice.

The public description does not make clear whether the 130 clips a day are generated before review or the number that finally passes. Without the separate costs and the number of accepted clips, no total cost or yield is estimated here.
