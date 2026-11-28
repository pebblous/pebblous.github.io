---
title: Runway
subtitle: Runway says web video trains robots as well as teleoperated footage, yet 58% of the model
date: 2026-11-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Runway

_Runway says web video trains robots as well as teleoperated footage, yet 58% of the model_

## Executive Summary

> [!callout]
> Video-generation company Runway has released the weights and fine-tuning code of its robot control model [Praxis-1](https://runway.com/news/company-news/praxis-1-is-now-available) under the Apache 2.0 license. The 27B-parameter model takes a camera view and an instruction, and outputs both the video it expects to unfold next and the robot's motion. In its announcement, Runway states that web video is as good a pretraining source as teleoperated robot video.

> Runway's research page shows no comparison experiment that tests that claim directly. In the mid-training data mix it does publish, the largest share is first-person video shot at human eye level, at 58%. General video makes up 20% and real robot video 18%. The page gives no total hours or token count for the training data.

> On RoboLab-120, NVIDIA's simulation benchmark, Praxis-1 scores 46.2%, the highest among open-weight models and fifth on the full leaderboard. The only published real-robot result is 88 successes in 100 trials on a Franka arm. For companies hoping to use their own site video for robot learning, the release leaves open how anyone would judge which footage is useful.

### Key Figures

Source: [Runway Research, Praxis-1](https://runway.com/research/praxis-1-video-pretraining-to-robot-control) (2026-11-11)

The first two cards are the simulation and real-robot results. The third is the share of the largest ingredient in the mid-training data. The fourth shows how much motion error fell when the model was given the real future video instead of the one it imagined.

<!-- stat-card -->
**46.2%** — RoboLab-120 success rate — 555 of 1,200 runs. First open model, fifth overall

<!-- stat-card -->
**88/100** — Real Franka arm test — 10 tasks. FLUX 3 Action: 80

<!-- stat-card -->
**58%** — First-person human video — Share of mid-training tokens. General video: 20%

<!-- stat-card -->
**5.71→1.14cm** — Motion error with real future video — Most remaining error comes from video prediction

## Runway Releases Praxis-1 Weights and Fine-Tuning Code

On November 11, 2026, Runway announced on its company news page that Praxis-1 is openly available under the Apache 2.0 license. The release covers the weights, inference code and fine-tuning code. Both full fine-tuning and LoRA, which trains only a small add-on to the model, are supported, so teams can adapt the model to their own robots.

The model is on GitHub and Hugging Face, and it loads directly in LeRobot, Hugging Face's robot learning library. It is also integrated into the vLLM-Omni inference engine and can be run on Reactor, Runway's hosted service. Runway lists NVIDIA hardware it runs on: H100, B200, RTX 5090, RTX PRO 6000 and the Jetson Thor robot computer.

Running on a device is not the same as running on any device. According to the German AI outlet The Decoder, the standard version needs 80GB of GPU memory. Runway estimates that a compressed version fits on an RTX 5090 with 32GB, and the GitHub documentation says peak memory use has not yet been measured.

Runway calls Praxis-1 a world action model. The name signals that a world model, which renders upcoming scenes as video, and a policy, which outputs robot motion, live in one model. The architecture is a 27B-parameter mixture-of-experts (MoE) diffusion transformer.

## Praxis-1 Inputs and Outputs: Future Video and 1.6 Seconds of Motion

According to Runway's research page, each call to Praxis-1 takes three inputs: a natural-language instruction, the most recent camera frame and the robot's current pose. It returns two things: a short clip of the video it expects next, and 1.6 seconds of motion. The motion comes as 24 rows at 15Hz, except for the first call in a context window, which produces 21.

The size of one motion row depends on the robot. A single-arm Franka robot (DROID data) uses 10 dimensions, a two-arm YAM robot uses 20, and a human hand is written as the 3D positions of 21 joints. Only thin conversion layers on the input and output side differ by robot. The backbone and the action expert module are shared by every robot. Because the model is called again each time the robot receives a new camera frame, it plans 1.6 seconds ahead, executes, and keeps revising.

*▲ Praxis-1's 1.6-second receding-horizon call structure. Original Pebblous diagram | Source: [Runway Research](https://runway.com/research/praxis-1-video-pretraining-to-robot-control)*

| Item | Details |
| --- | --- |
| Input | Instruction, latest camera frame, robot's current pose (absolute pose at the start of the action chunk) |
| Output | A predicted clip of future video + 1.6 seconds of motion (15Hz, 24 rows) |
| One motion row | Franka single arm: 10 dimensions · YAM dual arm: 20 dimensions · human hand: 3D positions of 21 joints |
| Robot-specific parts | Only the input and output conversion layers differ by robot. Backbone and action expert are shared |

▲ Praxis-1 inputs and outputs. | Source: [Runway Research](https://runway.com/research/praxis-1-video-pretraining-to-robot-control)

VLAs (vision-language-action models), the mainstream design for robot models, take an image and an instruction and output motion directly. Praxis-1 also generates future video along the way. A video-generation company entering robotics has made its own strength, video prediction, part of how the robot decides what to do.

## Praxis-1 Training Data: 58% First-Person Human Video, Total Volume Undisclosed

Runway's research page splits training into four stages. The model is pretrained on general video, mid-trained on video of embodied agents moving, mid-trained again on video and motion together after an action expert is attached, and finally fine-tuned for each robot. Each stage starts from the previous stage's weights.

The category names in the chart below need to be matched against the announcement's claim. First-person human video shows hands handling objects from a worker's eye level, and real robot video records robots doing tasks. The closest match to what the announcement calls web video is the general video category.

The mid-training checkpoint from which the released model was fine-tuned used the following data mix, by tokens.

<!-- stat-card -->
**Praxis-1 mid-training data mix (share of tokens)** — First-person human video58% — General video20% — Real robot video18% — Gameplay videounder 1% — Bar length = share of mid-training tokens. Original Pebblous diagram | Source: [Runway Research](https://runway.com/research/praxis-1-video-pretraining-to-robot-control)

The largest ingredient is not general web video. First-person footage of people working with their hands, shot at eye level, makes up more than half. General video accounts for about one token in five, and real robot video adds a similar 18%.

The shares are published, the totals are not. The research page does not say how many hours of video or how many tokens went into pretraining and mid-training. Hours are given only for the final fine-tuning data: about 277 hours of DROID for the Franka arm, 95 hours for Google's RT-1 robot and about 1,070 hours for the low-cost SO-101 arm. The Decoder reports that 1,400 to 2,600 hours of training material went into the two-arm robots.

### 3.1. Runway's Announcement and Research Page Differ in Tone

Runway's announcement contains the sentence "web video matches teleoperated robot video as pretraining data for policy performance," and links to the research page as support. The closest sentence on the research page is "the most scalable source is general video." Scalable means it can be gathered in large amounts. It does not mean it works as well as teleoperation data.

We found no result on that page that tests a model pretrained only on web video against one pretrained on teleoperated video. The authors add caveats instead. On the effect of scaling mid-training compute, they write that "the exact relationship needs further study," and they describe a chart's trend line as "a guide rather than a law."

Robot data has not become unnecessary either. The Decoder notes that Praxis-1 still needs robot-specific data, and that whether it uses less robot data than similar models remains an open question.

## RoboLab-120 at 46.2%: First Among Open Models, Fifth Overall

RoboLab-120 is a simulation benchmark built by NVIDIA. It runs 120 tabletop manipulation tasks for 1,200 attempts in total and measures the success rate. According to Runway's research page, Praxis-1 fine-tuned on DROID succeeded in 555 of 1,200 runs, for 46.2%. Runway announced this as first among world action models on the leaderboard and ahead of every open-weight VLA.

Four entries on the same leaderboard score higher than Praxis-1. The table below follows the one on the research page. Runway itself notes that the top two entries (AMP1, SenseNova-RoboRSI) are agents that call frontier language models, not trained policies.

| Rank | Entry | Type | Success rate |
| --- | --- | --- | --- |
| 1 | AMP1 | Language-model agent | 86.0% |
| 2 | SenseNova-RoboRSI | Language-model agent | 57.1% |
| 3 | Lakeside | Robot model | 51.0% |
| 4 | BiMind v0.5 | Robot model | 49.2% |
| 5 | Praxis-1 | World action model (open weights) | 46.2% |
| — | FLUX 3 Action | World action model | 42.9% |
| — | Cosmos 3 Nano | — | 36.8% |
| — | π0.5 | VLA | 28.0% |
| — | GR00T N1.6 | VLA | 7.3% |

▲ RoboLab-120 success rates (1,200 runs, as of November 2026). The ranks of the top five rows match The Decoder's "fifth overall" report. | Source: [Runway Research](https://runway.com/research/praxis-1-video-pretraining-to-robot-control) · [Runway](https://runway.com/news/company-news/praxis-1-is-now-available)

Runway's "first place" holds within the scope of open-weight models and world action models. The Decoder reports that Praxis-1 ranks fifth overall, behind two agents and two robot models with different architectures, and that Runway ran the tests itself with no independent verification.

## The Praxis-1 Real-Robot Test Is 100 Trials on a Franka Arm

RoboLab-120 is a simulation, so whether 46.2% carries over to real robots is a separate question. The robot tests in the published material are of different kinds. One measures success on a physical arm, one measures success in simulation after transfer to an unseen robot, and one covers partner hardware where only the fact that the model ran is disclosed. Only the first speaks directly to real-world performance.

### 5.1. Physical Franka FR3: 88 of 100

The real-robot test on Runway's research page uses one robot, the Franka FR3 arm. It covers 10 tasks that each involve a single object. Across them, Praxis-1 succeeded 88 times in 100 and FLUX 3 Action, under the same conditions, 80 times. The eight-trial gap comes from a test of 10 tasks and 100 attempts.

### 5.2. Transfer to Google RT-1: 80.0% in Simulation

The second result is a transfer to a robot the model never saw in training. Runway says Google's RT-1 robot data was not part of Praxis-1's training. Fine-tuned on 95 hours of RT-1 data, Praxis-1 averaged 80.0% on four tasks in the SimplerEnv simulation environment. The original RT-1 policy scored 52.4%, and FLUX 3 Action fine-tuned on the same data scored 39.7%. These results come from a simulation that mimics real scenes, not from a physical robot.

### 5.3. Noble Machines, Standard Bots and Ultra: No Success Rates Released

Runway's announcement says three launch partners ran Praxis-1 on their own hardware: Noble Machines, Standard Bots and Ultra. Their hardware is a legged humanoid, a six-axis industrial arm and a two-arm logistics robot. The announcement gives no success rates for any of the three.

### 5.4. Failure Modes Runway Reports, and How Much Video Prediction Matters

The research page also lists failure modes. The most common failure on real robots is reaching for a different object that resembles the target. The model does well when the instruction includes color or size, and struggles noticeably when the instruction is ambiguous. Chaining several steps from a single instruction is also still hard, the page says.

Another experiment traces where the error comes from. When the model was given the future video that actually happened instead of the one it imagined, motion error fell from 5.71cm to 1.14cm. The research page concludes that error drops to about one fifth given the real future, and that most of the remaining error comes from what future the video model imagines, not from the action expert.

> [!callout]
> The accuracy of video prediction sets the accuracy of motion. From this follows the reading that the quality of training video ends up shaping the quality of robot control. That link is Pebblous's interpretation; the research page does not compare training-data quality against prediction error.

## Using Site Video as Training Material for Praxis-1

If the claim that web video matches teleoperated video holds up, the cost of collecting robot data changes. Instead of putting a person on a robot arm to record demonstrations, companies could use video they already have. What the published material confirms is narrower. The most-used ingredient is first-person video of people working with their hands, and the final stage still used hundreds to thousands of hours of robot-specific data.

A company with factory CCTV or recorded work footage can start with three questions.

- How close is our video to first-person work video? A ceiling CCTV view looking down from a distance and a view at the worker's eye level fall into different categories in Praxis-1's data mix.
- How do we measure the quality of video prediction? Runway's experiment found that motion goes wrong as far as the predicted video goes wrong. The yardstick becomes how accurate the motion chosen from that video is, not how plausible the video looks.
- How much data do we have to fit our own robot? DROID's 277 hours and RT-1's 95 hours went into fine-tuning. Site video is material for the stages before that one and cannot replace it.

The sources behind this article fall into three groups.

| Group | Content |
| --- | --- |
| What we confirmed | Release date and license, release scope, input and output format, four-stage training, mid-training data shares, fine-tuning data hours, RoboLab-120 score and rank, the Franka real-robot result, the RT-1 simulation result, failure modes, the real-future-video experiment. Checked directly against Runway's announcement and research page; rank and hardware requirements cross-checked with The Decoder. |
| Runway's claims | The announcement's sentence that web video matches teleoperated robot video as pretraining data. We found no experiment on the research page comparing the two directly. Runway ran both the benchmark and the real-robot tests itself, with no independent replication. |
| Our interpretation | Reading "first place" as limited to open models, and connecting the 58% first-person share with the video-prediction error experiment to frame a quality-standard question for site video, are Pebblous's interpretations. |

Earlier in the Physical AI series, [HubEgo-100K Releases 10,000 Hours of On-the-Job Video for Robot Learning](/blog/hubego-100k-egocentric-work-video/en/) covered first-person work video, the largest share of Praxis-1's training data, from the dataset side. [Z-sight Lets a Robot Imagine the Next Scene Without Drawing It](/blog/z-sight-latent-world-model/en/) describes a model that, unlike Praxis-1, does not render the future as video. In the same model slot, [ScaleVLA: Does a Bigger Robot Brain Need Fewer Demo Videos?](/blog/scalevla-backbone-scaling/en/) looked at cutting demonstration data by scaling up the model.

<!-- stat-card -->
**Editor's Note** — Figures were checked against Runway's announcement (2026-11-11) and research page, and rank and memory requirements were cross-checked with The Decoder (2026-11-14). We could not open NVIDIA's RoboLab leaderboard page directly, so leaderboard figures are the values reproduced on Runway's research page. The real-robot evidence published so far is one Franka arm, 10 tasks and 100 trials, and success rates for the three launch partners were not released. Total hours and token counts for pretraining and mid-training data were not disclosed either.

This article is part of the [Physical AI series](/series/physical-ai/en/). The other articles in the series are collected on the series hub.

## References

### Primary: Runway Official Material

- 1.Runway. (2026). "[Praxis-1: From Video Pretraining to Robot Control](https://runway.com/research/praxis-1-video-pretraining-to-robot-control)." Runway Research. Source for the input and output format, training stages, data mix, benchmark ranking, real-robot test and failure modes.
- 2.Runway. (2026-11-11). "[Praxis-1 is now available](https://runway.com/news/company-news/praxis-1-is-now-available)." Runway News. Source for the release scope, license, distribution channels, partners and the web-video claim.

### Industry and Press

- 3.Bezmalinović, T. (2026-11-14). "[Runway's open-source Praxis-1 turns video AI into a robot controller](https://the-decoder.com/runways-open-source-praxis-1-turns-video-ai-into-a-robot-controller/)." The Decoder.
- 4.Robotics & Automation News. (2026-11-22). "[Runway releases Praxis-1 open-weight world action model for robotics](https://roboticsandautomationnews.com/2026/11/22/runway-releases-praxis-1-open-weight-world-action-model-for-robotics/107430/)."
- 5.NVIDIA Research. "[RoboLab Leaderboard](https://research.nvidia.com/labs/srl/projects/robolab/leaderboard.html)." Not opened directly; figures are the values reproduced on Runway's research page.
