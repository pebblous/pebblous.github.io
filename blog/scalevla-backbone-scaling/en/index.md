---
title: ScaleVLA: Does a Bigger Robot Brain Need Fewer Demo Videos?
subtitle: A 552-billion-parameter backbone reached 87.8% on ten demonstrations per task, while a 2-billion backbone needed fifty to reach 85.6%
date: 2026-11-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# ScaleVLA: Does a Bigger Robot Brain Need Fewer Demo Videos?

_A 552-billion-parameter backbone reached 87.8% on ten demonstrations per task, while a 2-billion backbone needed fifty to reach 85.6%_

## Executive Summary

> [!callout]
> What happens if you collect fewer demonstration videos for a robot and put the saving into a larger model instead? A result that takes the question head-on is now in. It is a technical report named [ScaleVLA](https://arxiv.org/abs/2611.21607), posted to arXiv on 16 November 2026. The authors swapped only the backbone that handles the robot's seeing and reading, from 2 billion parameters up to 552 billion, and left the action-generating module and the training conditions identical.

> The number that stands out is 87.8%. That is the success rate the 552-billion backbone reached when each task was given only ten demonstrations, and it sits above the 85.6% the 2-billion backbone reached with fifty. The comparison came out of a setting where every model received the same number of training steps, and the authors note in the same report that the smaller backbone keeps improving when trained longer.

> Sections 1 through 5 follow the design and the numbers the report discloses. Section 6, which reads the result as a budget question for teams collecting robot data, is this article's own interpretation.

### Key Figures

Source: [ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters](https://arxiv.org/abs/2611.21607) (arXiv:2611.21607, 2026-11-16)

The first three cards show what scaling the backbone bought; the last one shows what it cost. Card one is the success rate when demonstrations were scarce, card two the success rate under conditions never seen in training. Card three is the score on the only task run on a physical robot, and card four is the time to produce one action chunk in the kitchen-task setup, together with the number of GPUs that took.

<!-- stat-card -->
**87.8%** — Success rate from ten demos — The 2B backbone got 85.6% from fifty demos

<!-- stat-card -->
**45.1%** — Average under shifted conditions — Best small-backbone average was 31.3%; every model fell hard

<!-- stat-card -->
**9 / 10** — Real charger insertions — A 2B backbone on the same action head managed 4

<!-- stat-card -->
**216ms · 4 GPUs** — Measured in the kitchen-task setup — The 2B backbone needed 115ms and one GPU there

## What Goes In, What Comes Out

The ScaleVLA backbone is DeepSeek-V4.1-Flash-1017, a 552-billion-parameter vision-language model that ScaleVLA freezes rather than trains. The more telling detail is that only half the model ever runs. The backbone has 20 encoder layers and 20 decoder layers, and the decoder that produces text is never called at all. ScaleVLA does not think in words. It takes only the intermediate representation the encoder leaves behind after reading the scene and the instruction.

There are three inputs. Camera images and the human-written instruction go into the backbone. The robot's own joint-state readings bypass the backbone and feed straight into the action module. Each token pulled from the backbone carries 5,120 dimensions, and image tokens are handled separately from the rest.

The action module is trained from scratch. Representations from the backbone pass through an adapter that compresses them to 2,048 dimensions, enter a 32-layer diffusion transformer, and come out as several upcoming motion steps bundled together. The bundle holds continuous values such as joint angles, not symbols or tokens. On LIBERO tasks the policy generates 16 steps at a time, executes 8 of them, and then replans. How many steps go into one chunk varies by task: 8 for the kitchen-environment tasks, 30 for the bimanual dexterous tasks, 16 on the real robot. State and action values are normalised against the 1st and 99th percentiles of the training data before they go in.

The generation method is flow matching, which starts from noise and converges on a motion over four passes. One device keeps that affordable. Across those four passes the giant backbone runs only once, at the start, and the representation it produced is reused through all four. Running a 552-billion-parameter model four times would not leave a speed usable for robot control.
