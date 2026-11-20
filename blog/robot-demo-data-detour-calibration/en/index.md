---
title: Robot Demonstration Data Keeps the Detours Operators Make
subtitle: An arXiv study of more than 200,000 hours of real-robot data — policies keep about 90% of the extra path length that operator detours add
date: 2026-11-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Robot Demonstration Data Keeps the Detours Operators Make

_An arXiv study of more than 200,000 hours of real-robot data — policies keep about 90% of the extra path length that operator detours add_

## Executive Summary

> [!callout]
> A demonstration recorded as a success can still carry the traces of an operator who wandered, and the robot learns those too. The finding comes from an [arXiv paper](https://arxiv.org/abs/2611.22388) posted on November 17, 2026, in which a team that has collected more than 200,000 hours of real-robot data turned the analysis on its own collection process. One paper holds a kinematic study of 25 dual-arm robots, teleoperation experiments run across different control schemes, and a real-robot evaluation of policies fine-tuned on the resulting data.

> The number that stands out is 90%. In a dual-arm block transfer task, raising the share of demonstrations containing an operator detour from 0% to 80% stretched the mean wrist path of the demonstrations by 0.215 m, and the path of the policy trained on them by 0.194 m. About 90% of the added distance moved into the robot's own motion. Every one of those demonstrations completed the task, and the label attached to each of them reads success.

> Sections 1 through 4 follow the experiments and the numbers the paper reports. Section 5, which reads those results as an AI-Ready Data problem, is this article's own interpretation.

### Key Numbers

Source: [Hidden Variables Behind Real-Robot Data Quality](https://arxiv.org/abs/2611.22388) (arXiv:2611.22388, 2026-11-17)

The first three cards measure the same channel — collected data turning into robot behavior — from three different angles. The first asks how much of an operator's inefficiency transfers. The second asks how success rates split depending on whether well-calibrated demonstrations survive in the mix. The third asks what happens when the zero offset drifts at inference time. The fourth card belongs to the other side of the channel, the control scheme that produces the data.

<!-- stat-card -->
**about 90%** — Detour distance kept by the policy — Demo path grew 0.215 m; the learned path grew 0.194 m

<!-- stat-card -->
**66.7% → 26.7%** — With and without the aligned 25% — Test-tube handover and insertion, 30 trials per group

<!-- stat-card -->
**0 of 30 trials** — Miscalibration at inference time — Same outcome even when the training data is fully clean

<!-- stat-card -->
**43–53%** — Cut in task completion time — When body parts are controlled in parallel

## Training Does Not Filter Out the Wasted Path

Operators collecting robot data by teleoperation do not move cleanly. The workspace is tight and the arm catches on something, the control device is stiff, the view on the screen arrives a beat late. So the motion stops mid-way, backs up to a point it has already passed, and resets its posture. The object still ends up where it belongs. The task is a success and the record says so.

The researchers tested directly whether this successful inefficiency survives training. In a dual-arm block transfer task they raised the share of demonstrations containing a detour segment through 0%, 20%, 50%, and 80%, training a policy on each mixture under identical conditions. Going from 0% to 80%, the mean wrist path of the demonstrations grew by 0.215 m. The path of the policy trained on them grew by 0.194 m. The robot took on about 90% of the extra distance the human had walked.

What those injected demonstrations look like is on the record too. Part of a 100-demonstration set was swapped for trajectories containing pauses and backtracks. Against the clean demonstrations, those trajectories run wrist paths that are 33% longer on average, carry about 1.8 times the joint jerk, and raise single-arm pauses longer than 0.3 s from 1.1 to 1.6 per episode. On video they look like slightly sluggish demonstrations and nothing more.

Not every defect transferred at the same rate, though. Only about 45% of the increase in joint jerk stayed in the policy. Wasted path carries over almost intact while roughness of motion gets filtered out by half. Which means a trained robot that moves smoothly is no evidence that the data behind it was clean.
