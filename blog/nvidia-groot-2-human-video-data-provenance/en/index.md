---
title: Whose Video Is NVIDIA
subtitle: Teleoperation accounts for 5.4% of GR00T 2
date: 2026-11-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Whose Video Is NVIDIA

_Teleoperation accounts for 5.4% of GR00T 2_

## Executive Summary

> [!callout]
> NVIDIA has unveiled GR00T 2, a foundation model for robots. It was shown on November 9, 2026 at CoRL 2026, the robot learning conference held in Austin, Texas. Pretraining ran on 436,414 hours of recordings, and the portion of that produced by actually moving a robot, teleoperation, comes to 23,500 hours. The rest is first-person video of people working with a camera on their head, together with demonstrations people made using a gripper held in their own hands.

> How much of the score the human video carries sits in NVIDIA's own ablation. Holding the architecture and the training recipe fixed and varying only the share of human video from none to 100%, progress across 72 real-robot tasks rose from 50% to 70%. The human recordings are what holds the performance up. The published 100,000-hour data card, meanwhile, gives the number of people who shot that video, 41,288, and never once uses the words consent, privacy, or personal.

> Sections 1 through 4 report what NVIDIA's research page, data card, and model cards say. Section 5, which reads that composition from the position of a company putting a robot on its floor, is this article's own interpretation.

### Key Numbers

Four figures below. The first two cover what this model learns from and what it manages to do; the last two point at the scale of the people who made that material and at what is not written down about them.

Source: NVIDIA GEAR, ["GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation"](https://research.nvidia.com/labs/gear/gr00t-2/) (November 2026) and the [Human-1M-100K data card](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K).

<!-- stat-card -->
**5.4%** — Recorded by a robot — Teleoperation is 23,500 of the 436,414 pretraining hours. The remainder came off human bodies

<!-- stat-card -->
**95%** — Success after five demonstrations — Average over 50 tasks picked from those five demonstrations can teach. 37 of them succeeded in every trial

<!-- stat-card -->
**41,288** — People who shot the public slice — Collectors in the 100,000-hour release, which also holds 81,557 scenes and 3.4 million episodes

<!-- stat-card -->
**0** — Mentions of consent in the data card — Consent, privacy, and personal appear nowhere in the body. Supplier identifiers remain as folder names

## A Little Over One Hour in Twenty Comes From a Robot

GR00T 2 uses what NVIDIA calls a world-action model. A single diffusion transformer reads recent video, the instruction and the robot state, then denoises future video and a chunk of robot actions together, executes the chunk, and repeats. Training the half that predicts how a scene will change needs video and nothing else, and no robot has to appear in that video. This design is what rearranged the composition of the training material.

NVIDIA lists three kinds of pretraining data. 402,730 hours of egocentric video of people at work; 10,184 hours of demonstrations with a handheld UMI gripper across 2,897 tasks; and 23,500 hours of robot teleoperation. The teleoperation side spans parallel-gripper arms (YAM and Franka), dexterous hands (Sharpa and Wuji), and the Unitree G1 humanoid. The three add to 436,414 hours, and the share a person produced by driving a robot is 5.4%.
