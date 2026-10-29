---
title: Genie 4 Invents a World. Should a Robot Learn in It?
subtitle: DeepMind released Genie 4 as a research preview on October 27, and the same post lists complex physics and long-term scene consistency as unsolved.
date: 2026-10-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Genie 4 Invents a World. Should a Robot Learn in It?

_DeepMind released Genie 4 as a research preview on October 27, and the same post lists complex physics and long-term scene consistency as unsolved._

## Executive Summary

> [!callout]
> Google DeepMind has shipped a world-generating model that invents the sound along with the scene. Genie 4, released as a research preview on October 27, takes a description in plain language and produces not only the place but the ambient noise and music that belong to it, plus characters who talk back to what the user types. DeepMind calls it its first real-time world model to generate audio natively.

> The same announcement carries a robotics demonstration. Gemini 4 Argon breaks down the task of Apptronik's Apollo humanoid playing a game of checkers, and Genie 4 simulates those steps in real time. Yet in that same post DeepMind also writes that complex physical interactions and long-term consistency are still active areas of ongoing research. The use case of teaching robots and the admission that the physics is not settled sit on one page together.

> Sections 1 through 4 follow what DeepMind's own post, TechCrunch's reporting, and a prior study that evaluated synthetic-trajectory-trained robot policies on real hardware actually record. Section 5, which argues that verification does not get easier as generation scales up, is this article's reading.

### Key Numbers

The first card is a number for what Genie 4 can do. The other three belong not to Genie 4 but to other world models doing the same job, measured on real hardware, and Section 4 explains why.

Sources: [TechCrunch](https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/) (2026-10-27) · [arXiv 2607.29302](https://arxiv.org/abs/2607.29302) WorldArena evaluation · [Google DeepMind](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)

<!-- stat-card -->
**2 min** — How long a scene holds together — TechCrunch reports this as double the predecessor's limit. DeepMind's own post gives no such figure

<!-- stat-card -->
**25** — Synthetic trajectories a world model supplies per task — A policy trained on that data is then run 100 times per task on a real robot to measure success

<!-- stat-card -->
**14–58%** — Success rates earned by five public world models — Same two tasks, same conditions. Lowest and highest are more than four times apart

<!-- stat-card -->
**71.5%** — Success rate of a policy trained on real data — The bar synthetic trajectories have to clear. With no added trajectories at all the score is 3.50%

## What Genie 4 Gained Is Sound

Genie 4 arrived on October 27 as a research preview. Access is limited to trusted testers for now, and DeepMind says it will soon open to Google AI Ultra subscribers in Project Genie and to early access partners of the Gemini API and Google AI Studio. This is not yet something anyone can switch on.

What separates it most sharply from the previous model is sound. DeepMind introduced Genie 4 as its first real-time world model to generate audio natively. A generated scene arrives with the ambient noise of that place, and the characters in it hold conversations that respond to what the user does. Sound is not laid over a finished video; it comes into being while the world is running.

The world can also be revised out loud while it runs. The examples DeepMind gives in its post are changing the weather, moving the camera, and introducing a new person or object, with Gemini adapting the instruction to fit the surrounding scene. The feature assumes a way of working where you open one scene and keep adjusting it, and that assumption comes back in Section 3, because repeated editing is one of the conditions DeepMind names for drift. TechCrunch calls the feature real-time steering and reports better physics and more humanlike characters than before. Diego Rivas, an engineer at Google DeepMind, told TechCrunch where that real-time quality earns its keep.

"The real time aspect becomes most valuable in the areas where keeping a state of flow in the creativity space becomes incredibly useful."

### 1.1. Where the Two-Minute Figure Comes From

Most of the coverage led with two minutes of scene consistency, double the predecessor's limit. That sentence belongs to TechCrunch. DeepMind's own post carries no such figure. What the post says is that Genie 4 can maintain coherent environments over short sessions, and it never pins the duration to a number of minutes.

The subtler part is the predecessor. The Genie 3 post from August 2025 describes worlds you navigate in real time at 24 frames per second, retaining consistency for a few minutes at a resolution of 720p, with visual memory extending as far back as one minute ago. So the one-minute figure does exist. It is just not the length of time a scene holds together; it is how far back the model can reach into what it has already seen. For consistency, the word DeepMind used was minutes, plural and unnumbered.

![Comparison table Google DeepMind published with the Genie 3 announcement in August 2025, listing Genie 3's Interaction Horizon as Multiple minutes](./image/img-01-genie3-spec-comparison.jpg)
*▲ The comparison table from DeepMind's Genie 3 announcement, August 2025. The "minutes, plural" phrase this article discusses comes from this table's Interaction Horizon row | Source: [Google DeepMind, Genie 3 blog](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)*

The arithmetic of doubling only works if those two quantities trade places. Put the predecessor's one minute of visual memory into the consistency slot, set it beside the successor's two minutes of consistency, and you get a clean factor of two. But what that same post recorded for consistency was a few minutes, and between a few minutes and two minutes you cannot even establish an increase. Reading this as capability standing still would be wrong. It means the two numbers were taken with different instruments, and how much actually improved cannot be settled from the published documents.

One thing is stated plainly. All video and audio generated by Genie 4 carries SynthID, DeepMind's imperceptible digital watermarking technology, which marks both the picture and the sound as machine-made without anything a person would notice. The means of telling the output apart later shipped alongside the model itself.

## The Supervisor Only Ever Sees the Generated World

Genie 4 does not run alone. DeepMind writes that Gemini 3.8 Flash serves as a guiding agent in the loop: while Genie 4 generates a world in real time, Gemini continuously observes the scene, breaks goals down into a sequence of steps, and reviews incoming frames to track progress. Splitting the goal into steps and deciding whether the current frame has cleared one of them is the supervising side's job.

The robotics demonstration shows what the arrangement is for. In the case DeepMind published, Gemini 4 Argon and Genie 4 work together to simulate Apptronik's Apollo humanoid playing a game of checkers, breaking the task down into real-time steps. Speaking to TechCrunch, Google research director Tejas Kulkarni described the pairing this way.

"What we'll increasingly see in the future are these hybrid world models, where you have a combination of Gemini writing code and text, and Genie ingesting that in real time and simulating reality at different levels of abstraction."
