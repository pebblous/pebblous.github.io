---
title: Z-sight Lets a Robot Imagine the Next Scene Without Drawing It
subtitle: On six real tasks with a Unitree G1 it finished 44 of 60 runs, a 73.3% success rate and 20 points above the model that renders the future as video
date: 2026-11-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Z-sight Lets a Robot Imagine the Next Scene Without Drawing It

_On six real tasks with a Unitree G1 it finished 44 of 60 runs, a 73.3% success rate and 20 points above the model that renders the future as video_

## Executive Summary

> [!callout]
> A robot model has arrived that anticipates the scene it will be looking at a few seconds from now, and decides its motion from that anticipation, without ever rendering the scene as video. It is [Z-sight](https://arxiv.org/abs/2611.24940), posted to arXiv by researchers at Maven Robotics and the University of Southern California. Bolting future prediction onto a robot model has until now meant generating those frames for real. Z-sight leaves the future in the visual tokens the model already uses to recognize the present. To a human eye there is nothing to see.

> Two places carry the numbers. On the teleoperated tasks of SIMPLE, a simulation benchmark for humanoid whole-body manipulation, it averaged 81.9%, the highest of the models compared. On six real tasks with a Unitree G1 it carried 44 of 60 runs through to the end. The gap over the model that renders the future as video is 20 points on hardware, and the time it takes to decide one bundle of motion is shorter rather than longer.

> Sections 1 through 5 follow the design and the figures the paper gives. Section 6, which asks what a prediction is worth when no one can inspect it by eye, is this article's reading.

### Key figures

Source: [Z-sight: Unifying Vision-Language-Action and Latent World Modeling](https://arxiv.org/abs/2611.24940) (arXiv:2611.24940, 18 November 2026)

The first two cells are scores and the last two are the conditions that produced them. The first comes from running six tasks ten times each on a real humanoid. The second averages twelve tasks across three difficulty settings in simulation. The third is the time taken to decide one bundle of thirty motion steps, and the fourth sets the training hours against the demonstration hours collected on the target robot itself.

<!-- stat-card -->
**73.3%** — Six real tasks on a Unitree G1 — 44 of 60 runs completed. The best baseline reached 53.3%

<!-- stat-card -->
**81.9%** — SIMPLE simulation average — Twelve teleoperated tasks. Next in line scored 72.3%

<!-- stat-card -->
**109.5ms** — Time to decide one bundle of motion — The video-generating model takes 155.9ms on the same GPU

<!-- stat-card -->
**4,731h → 6.8h** — First two stages, then the last — Only 6.8 hours were collected on the target robot itself

## The Future Sits in Tokens, Not in Pictures

Models that hand a robot its next move have split into two camps. One looks at the camera feed and the spoken instruction and returns a motion directly. Because seeing, understanding and moving are bundled into a single model, this camp is usually called VLA, and the paper's baselines π0.5, GR00T N1.7 and Ψ0 belong to it. The other camp inserts a step in between: it first renders what the scene will look like a few seconds from now, then decides the motion from that rendering. Fast-WAM stands in the table for this camp, known as world action models.

Rendering has an obvious virtue. A person can look straight at what the model expects to happen. It is also expensive. A video generator has to run once more, and the picture it produces is thrown away as soon as the motion has been decided. Part of that cost goes into drawing wallpaper patterns and shadows that have nothing to do with the motion at all.

Z-sight skips the picture. Its vision encoder has already turned the current frame into tokens, and the model predicts the tokens three seconds ahead inside that same coordinate system, the one it uses to recognize the present. The predicted tokens pass straight to the action side without ever being decoded into pixels. The paper calls this latent world modeling, and its title claims to unify VLA and this idea in one model.
