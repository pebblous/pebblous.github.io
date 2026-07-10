---
title: Robots Are Multiplying. Why Isn
subtitle: What the first international draft standard for humanoid-robot datasets (ISO/WD 26264-1) is really asking
date: 2026-06-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Robots Are Multiplying. Why Isn

_What the first international draft standard for humanoid-robot datasets (ISO/WD 26264-1) is really asking_

## Executive Summary

> [!callout]
> Humanoid robots are growing faster right now than at any point in history. Roughly 13,000 units shipped in 2025 alone, and one forecast puts the figure above 250,000 by 2030. Yet there is a paradox. The number of robots is exploding, but the experience those robots hold is not accumulating at the same rate. The manipulation data one team spends months collecting rarely transfers cleanly to another robot, another organization, or even to itself six months later. The real bottleneck this report examines is neither a bigger model nor a better actuator. It is data that fails to accumulate because no standard exists to hold it together.

> The reason is that robot data demands something fundamentally different from text or images. It is not a simple sensor log but a web of relationships among a robot's body, its actions, the scene it acts in, the execution trace it leaves behind, and the outcome. The fragility is stark: a measured 40-millisecond mismatch between a camera and an IMU can throw position estimates off by as much as 10 meters. If the coordinate frame or the calibration goes unrecorded, the same motion becomes an entirely different signal on a different robot. And because this kind of real-world robot data must be produced by hand, it costs tens of times more than data churned out in simulation — so every time collected data can't be reused, that cost is paid all over again. Only when these relationships and their physical context are preserved and remain inspectable does data become experience that can be reused across time and across machines.

> The ISO/WD 26264-1 draft, published in June 2026, is the first attempt to write that condition into an international standard. It did not appear out of nowhere. It sits on the natural continuation of the ISO 5259 series, which made the quality of text and image data measurable in the first place. The draft splits robot data into a horizontal infrastructure — covering lifecycle, provenance, quality, versioning, and traceability — and capability-specific modules such as manipulation, locomotion, and interaction. Making data quality something you can measure and diagnose is becoming a precondition for Physical AI.

<!-- stat-card -->
**~100,000×** — data accumulation gap — language models ≈100,000 years vs. largest robot dataset ≈1 year

<!-- stat-card -->
**40ms → 10m** — timing-induced position error — the failure mode when camera–IMU sync breaks

<!-- stat-card -->
**82×** — real-world data collection cost — real world $180/hr vs. simulation $2.20/hr

<!-- stat-card -->
**~15×** — shipment growth (2025→2030) — from ~13,000 units to over 250,000

## Five times as many robots, experience stuck in place

The count of humanoid robots now gains a digit almost every year. By Omdia's tally, 2024 shipments were around 2,600 units; in 2025 they jumped past 13,000, more than a fivefold rise. TrendForce expects the figure to clear 50,000 in 2026, and Goldman Sachs offers a baseline scenario of more than 250,000 units shipped by 2030. Some 85–90% of that surge comes from China. While companies like AgiBot, Unitree, and Leju stamp out robots by the thousands each year, Tesla and Figure AI are expanding pilot deployments on factory floors.

Plotted out, the steepness of that curve is hard to miss. The 2026 and 2030 figures are forecasts.

Annual humanoid robot shipments (units). 2026 and 2030 are forecasts. Sources: Omdia (2024–2025 actuals), TrendForce (2026 forecast), Goldman Sachs Research (2030 forecast).

Look only at the unit curve and you would expect data to swell at the same pace. More robots, more robot-generated data. But more robots do not translate into more experience. Data being recorded and data accumulating into something reusable are two entirely different things. Ken Goldberg of UC Berkeley frames the gap in orders of magnitude. The internet-scale text today's large language models train on amounts, in human terms, to roughly 100,000 years of experience — yet even the largest robot teleoperation dataset ever assembled comes to about one year. Robot learning is more complex than language, and still the data in hand is about 100,000 times smaller.

> [!callout]
> "We don't have anywhere near enough data to train robots. A hundred thousand years is just the amount of text to train a language model, and training robots is far more complex, so we'll need even more." — Ken Goldberg, UC Berkeley (Science Robotics, 2025)

### Three reasons data doesn't accumulate

Why doesn't the gap close? A 2025 survey of embodied-AI data engineering from AIRS at the Chinese University of Hong Kong sorts the causes into three bottlenecks. The first is high collection cost. Robot data has to be produced one motion at a time by a person teleoperating a robot; you cannot scrape it off the web the way you scrape text. The second is data silos. Every organization and every robot piles up data in its own format, so none of it crosses over. The third is the evaluation void: there is no common yardstick for telling good data from bad.

The three bottlenecks are not separate items on a list; they branch from a single root. Expensively collected data gets trapped in a silo because there is no standard, and with no yardstick for its quality, no other team can trust it enough to pick it up. So the next team collects everything from scratch. That is why a 15-fold increase in robots does not yield a 15-fold accumulation of experience. More units is not the same as more data assets. Without standards and authenticity, scale is merely the scale of the silo.

## When data loses its relationships

Robot data is not a sequence of sensor values. The central point of the arXiv paper ["Data Standards for Humanoid Robotics"](https://arxiv.org/abs/2606.19769) is that robot data is, at its core, embodied structure. A single manipulation episode binds together the robot's body, the action it performed, the scene it faced, the execution trace that action left behind, and the outcome — all as one relationship. The half-second of data in which an arm grasps a cup means something only when the robot's joint configuration, the cup's position as the camera saw it, the forces and torques in that instant, and the success-or-failure verdict are all coherent within a single coordinate frame.
