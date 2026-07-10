---
title: AgiBotWorld Labels the Robot
subtitle: A dataset that annotates failed demonstrations instead of discarding them overturns the assumption that clean data equals good data
date: 2026-06-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AgiBotWorld Labels the Robot

_A dataset that annotates failed demonstrations instead of discarding them overturns the assumption that clean data equals good data_

## Executive Summary

> [!callout]
> AgiBotWorld 2026 is an open-source robot manipulation dataset with over one million trajectories, released by Chinese robotics startup AGIBOT in April 2026. It makes one choice that sets it apart from competing datasets: it does not discard failed demonstrations. When a robot drops an object or slips mid-grasp, that trajectory is kept and labeled with `error_cause` and `restorable` fields rather than filtered out. This choice — pricing failure data — is fast becoming a precondition for the next generation of robot foundation models.

> The performance case holds. Evaluated with the Genie Operator-1 (GO-1) policy model, models trained on AgiBotWorld achieved a 30% improvement over Open X-Embodiment and a 32% gain over RDT on complex tasks. The dataset spans 9.36 TB, 217 tasks, and 5 deployment scenarios. The differentiator is not scale — it is annotation philosophy.

> The question this raises for data practitioners is straightforward. The "failed demonstrations" being discarded today may carry exactly the capability that is hardest to teach: how to recover after a mistake. What you keep and what you throw away is, in the end, your definition of data quality.

### Key Numbers

The four figures below compress what AgiBotWorld 2026 is and what it achieves. The first two define the dataset's context; the last two measure the impact of its failure-annotation strategy.

Source: [AgiBot World Colosseo (arXiv:2503.06669)](https://arxiv.org/abs/2503.06669)

<!-- stat-card -->
**1M+** — Trajectories — 217 tasks, 9.36 TB

<!-- stat-card -->
**95%** — SayCan discard rate — 276k → 12k kept

<!-- stat-card -->
**+30%** — Performance gain — vs Open X-Embodiment

<!-- stat-card -->
**+32%** — Complex tasks — vs RDT

## The 95% Discard Habit

Google DeepMind's SayCan is the textbook case of robot dataset policy. It collected 276,000 episodes and kept only 12,000 — discarding more than 95% because they contained failures. This is not an outlier. It has been the industry standard: filter for successful demonstrations, treat everything else as noise.

The intuition behind it is clear enough. If you only train on perfect examples, the model should learn to perform perfectly. The problem is that this strips out the situations robots encounter most often in the real world: the fumble and the recovery after it.

> [!callout]
> Real deployment is not a clean-room setting. Lighting varies, objects sit at unexpected angles, grippers meet friction the simulation never modeled. A model trained only on "how to succeed" has no learned pattern for "what to do when something goes wrong." The trajectories being discarded are not random noise — most of them contain high-quality motion right up to the moment of failure, and that motion carries genuine signal about task structure.
