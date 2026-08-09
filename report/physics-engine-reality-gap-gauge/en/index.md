---
title: Graded Against Motion Capture, No Physics Engine Was Accurate Everywhere
subtitle: GAUGE tested Isaac Sim, Genesis and Newton on 14 of its 22 task families, and errors peaked at impact contact and fast cloth motion.
date: 2026-08-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Graded Against Motion Capture, No Physics Engine Was Accurate Everywhere

_GAUGE tested Isaac Sim, Genesis and Newton on 14 of its 22 task families, and errors peaked at impact contact and fast cloth motion._

## Executive Summary

> [!callout]
> Simulated trajectories have served as the answer key for robot learning and synthetic data pipelines for years. This report grades that answer key. **The subject is not generated video but the physics engine that generated video was being graded against.** Auditing an output and validating the standard used to audit it are questions at different levels, and until now the second one has been mostly empty.

> The GAUGE benchmark, released in August 2026, captured real trajectories with infrared motion capture, measured friction, restitution, fabric stiffness and Young's modulus separately, mapped those values into each engine's parameters, and then placed Isaac Sim, Genesis and Newton in identical situations. The grading yardstick is the repeatability of the measurement itself. On smooth sliding and spinning rigid motion the engines mostly landed near that yardstick, but at the instant a ball bounces, even the best score drifted to **15.6 times the measurement's own repeat error**. No engine was uniformly good, and each was strong in a different place.

> This is not mislabeled data. The labels are perfect and the distribution is balanced; what wobbles is the frame of reference. Conventional data quality checks are structurally unable to catch this failure mode. So the second half of this report asks where a new check belongs, and what a team without a capture rig can do today.

<!-- stat-card -->
**0** — engines good across the board — Across 14 compared tasks, none handled rigid bodies, cloth and foam together

<!-- stat-card -->
**15.6×** — best score at impact contact — On the bouncing ball, even the leading engine drifted to 15.6× the measurement's repeat error

<!-- stat-card -->
**128×** — worst score when cloth is flung — The same satin scores 0.73× when stretched slowly and 128× when flung fast

<!-- stat-card -->
**0.20** — momentum transfer, Newton's cradle — 1.0 is the measured level. Neither engine produced any rest interval at all

## Nobody was grading the answer key

The first number anyone shopping for a robot simulator runs into is not accuracy but speed. Genesis leads with 43 million frames per second, 430,000 times real time. Isaac Sim talks about parallel environment counts and GPU throughput. Newton shows a robot walking over snow and gravel. All three describe how fast their engine runs with great precision, and none of them appears to publish a number for how far its output drifts from a measured trajectory.

Genesis states the conditions behind that 43 million figure in its own materials. It is aggregate throughput across thousands of parallel environments on a single GPU, in a minimal scene holding one ground plane and one robot arm. Which also means a scene with almost no contact. NVIDIA manages contact accuracy a different way. It publishes tuning guides for knobs such as contact offset, which sets how far from a collision shape a contact constraint starts forming, and maintains a table of PhysX's known limitations and workarounds. Instead of publishing a validated error envelope, the structure hands the accuracy judgment to the user. From the user's seat there is no way to know how far a given configuration sits from reality.

### 1.1. Earlier work wrote its answers with the exam in hand

It is not that nobody had compared a simulator against measurement. Some work matched rigid-body manipulation trajectories or high-speed impacts against physical instrumentation, and other experiments bent and twisted rods and plates to confirm scaling laws. Reviewing that lineage, the GAUGE authors point to two flaws. One is that each study stayed inside a single object class. The other matters more. In the paper's own words, several studies "fit simulator parameters using the very observations used for evaluation." That is answering the exam with the exam in hand, so a good score measures the degrees of freedom in the fit rather than the ability of the simulator.

GAUGE closed both gaps at once. Material properties were measured independently of the evaluation before being fed to the engines, and one measurement scheme was carried across rigid bodies, cloth and foam alike. The chain runs in this order. A physical experiment is captured by motion capture to produce the reference trajectory; the same object's material properties are measured on separate instruments; those values are translated into each engine's parameter representation; the engine is rolled out and the resulting trajectory is set against the original reference.
