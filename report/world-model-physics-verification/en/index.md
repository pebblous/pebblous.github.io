---
title: Is Generated Video Physically Correct?
subtitle: NVIDIA Cosmos-generated video checked against inverse-extraction pipelines and the Physics-IQ benchmark
date: 2026-07-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Is Generated Video Physically Correct?

_NVIDIA Cosmos-generated video checked against inverse-extraction pipelines and the Physics-IQ benchmark_

## Executive Summary

> [!callout]
> World models in the age of Physical AI pour out near-photorealistic video. Scenes made by NVIDIA Cosmos and OpenAI Sora look flawless to the eye. But between "looking plausible" and "actually obeying physics" lies a wide gap. This report dissects the technologies that **audit after the fact** whether generated video truly follows the laws of physics — the verification pipelines that read trajectory, velocity, pose, and depth back out of pixels and compare them against ground truth.

> The size of that gap shows up in the numbers. On the Physics-IQ benchmark from DeepMind and INSAIT, even the strongest generative model reached only **24.1 points** against the natural variability (100) of real-to-real video pairs, and Sora — rated the most visually plausible — actually fell to the bottom on physical understanding. Visual realism and physical accuracy do not rise together. So the industry has begun building verification tools that ask "does this video really obey physics?" — only to discover that the verifier itself is not perfect.

> This is where the Pebblous view diverges. Inverse-extraction verification is an approximation that **guesses** physics from video that has no answer key. A simulator, by contrast, owns a **ground-truth event ledger** (trajectory, force, mass, collision events) the very moment it creates the video. The harder a problem is to verify, the more the ability to mass-produce ground truth that needs no verification at all becomes a data moat.

<!-- stat-card -->
**24.1 / 100** — Best generative model's physics score — Physics-IQ — against the natural variability of real video. "Plausible ≠ physically correct"

<!-- stat-card -->
**57.6%** — Contaminated benchmark samples — Contamination rate revealed by Physics-IQ Verified — "the verifier isn't perfect either"

<!-- stat-card -->
**2M+** — Inverse-extracted trajectories — ObjectForesight — what remains after discarding half the raw trajectories. The scale and loss of inverse extraction

<!-- stat-card -->
**91% vs 22%** — Physics-embedded training vs unverified output — RoboScape synthetic-training success (near real's 92%) vs the physics-compliance rate of ordinary generated video

## The Plausibility Trap — Why Generated Video Breaks Physics

Start with the conclusion: pixel-based world models break physics not by accident but by structural necessity. These models watch enormous amounts of video and learn "what the next frame should look like to be statistically plausible." Nowhere in that training objective are the physical states of mass, force, velocity, or contact made explicit. The model does not know how the world moves; it knows how pixels should be arranged to look natural. So it calmly generates scenes where objects pass through walls, cups vanish and reappear, and a falling ball forgets about gravity.

These failures recur in a few familiar types: **interpenetration**, where one object passes through another; **object-permanence violations**, where something that left the frame returns looking different; **mass-conservation violations**, where liquids fail to preserve their volume; and **momentum-conservation violations**, where objects rebound with the wrong momentum after a collision. Frame by frame it looks plausible to the human eye, but held to the ruler of physics it goes wrong everywhere.

### 1.1. How common are the flaws?

These flaws are not the exception but the majority. The Physion-Eval benchmark had humans directly inspect generated video and count physics flaws: **83.3%** of third-person (external-view) videos and **93.5%** of first-person (egocentric) videos contained at least one identifiable physics flaw. Eight or nine out of every ten videos broke physics somewhere. That the flaw rate is even higher for egocentric video, where the camera moves along with the scene, suggests the problem grows worse in real applications like robotics and autonomous driving, where the observer is in motion.

The stricter the evaluation, the more steeply the pass rate falls. Below are three measurements of the same "physics compliance" at different levels of strictness. A pass rate already around 40% on a benchmark demanding both semantic and physical correctness (VideoPhy) drops to 22% on VideoPhy-2, which narrows to harder physics scenarios, and the flaw rate climbs into the 90s when humans are asked to find any flaw at all (Physion-Eval).
