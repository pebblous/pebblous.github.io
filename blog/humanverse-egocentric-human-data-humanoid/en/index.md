---
title: HumanVerse Teaches a Humanoid to Do Chores, but You Cannot Download It
subtitle: Alibaba
date: 2026-10-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# HumanVerse Teaches a Humanoid to Do Chores, but You Cannot Download It

_Alibaba_

## Executive Summary

> [!callout]
> This article reads the λ₀ research that Alibaba's Lambda-humanoid team released on 13 October 2026. In place of demonstrations piled up by driving a robot by hand, 500 hours of first-person video, filmed by people going about their day with a camera on their head, went into training a humanoid. The name of those 500 hours is HumanVerse.

> One number shows what the data is worth. Hold everything else in training fixed and take only HumanVerse out, and the Unitree G1's success rate on real-world tasks falls from 62.5% to 22.5%. The human video carries most of the score. Yet nobody can download those 500 hours today, and neither the paper nor the code repository holds a sentence about filming consent or the handling of people's likenesses.

> Sections 1 through 4 are what the paper and the code repository set down. Section 5, which pulls the result over to organizations that want to use human video as training data, is this article's own reading.

### Key numbers

Four cells. The first two cover the size of this data and the precision of the rework; the second two, its contribution to the score and how far it can be checked from outside.

Source: Lambda-humanoid Team, ["λ₀: Scaling Open-World Egocentric Human Data for Humanoid Loco-Manipulation"](https://arxiv.org/abs/2610.18950) (arXiv:2610.18950, 13 October 2026) and the [OpenLambda repository](https://github.com/LambdaHumanoid/openlambda).

<!-- stat-card -->
**500 hours** — Size of HumanVerse — 32,993 episodes and 87 million pose frames, filmed in homes, shops, factories, offices and outdoors

<!-- stat-card -->
**17.03→3.83cm** — Fingertip position error — The mismatch left when a human motion is carried over to the G1 body. Orientation error fell from 36.06 to 10.85 degrees

<!-- stat-card -->
**62.5→22.5%** — With the human data taken out — Four real-world tasks, 40 trials. Successes fall from 25 to 9

<!-- stat-card -->
**4 examples** — Data available today — Of the 500 hours, what is public is four motion-alignment examples. The training data is not part of the code release

## A Person With a Camera Collects What Used to Need a Robot

To put a humanoid to work around a house, walking and grasping have to run as one motion. The standard way of gathering that kind of data has been whole-body teleoperation. A person straps on a rig and moves the robot's arms and legs in place of their own, producing one demonstration at a time. The paper writes down the limit of that approach. Because an operator has to walk a physical humanoid through every episode, the volume collected is tied to robot availability, and widening the range of tasks and environments grows expensive.

First-person video carries no such constraint. People pick things up, carry them and put them away all day long with no robot in the room. The trouble is that most existing egocentric data kept only the wrist and hand trajectory. Where the person walked, how far the knees bent, which way the torso leaned: that part is missing from the record. For a task where walking and grasping are a single motion, the missing half is the more important one.

HumanVerse is a 500-hour record built to fill that gap. It holds 32,993 episodes and 87 million pose frames. The people filming wore a GoPro HERO13 camera, a Pico 4 Ultra headset and whole-body trackers at once. Video and body motion are logged against the same clock, and finger motion is recovered from the video afterwards. A camera of the same model sits on the head of the Unitree G1, so the field of view a person saw lines up with the one the robot will see.
