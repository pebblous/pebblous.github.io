---
title: What Does LingBot-Touch Give Up to Read Three Kinds of Touch Sensor?
subtitle: 4,983 hours from three kinds of touch sensor, rewritten as coordinates on a fingertip. At a fixed budget, a model trained on one sensor is still the more precise one
date: 2026-11-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# What Does LingBot-Touch Give Up to Read Three Kinds of Touch Sensor?

_4,983 hours from three kinds of touch sensor, rewritten as coordinates on a fingertip. At a fixed budget, a model trained on one sensor is still the more precise one_

## Executive Summary

> [!callout]
> Recordings from three kinds of touch sensor, each built on a different physical principle, now read as the same language inside one model. The model is LingBot-Touch, a tactile foundation model released on November 10, 2026 by Robbyant, the company inside Ant Group that builds the AI which moves robots. Its raw material is 4,983 hours gathered from piezoresistive sensors, whose resistance changes under pressure, from magnetic sensors, which read how far a magnet has been displaced, and from vision-based sensors, which film a gel from behind with a camera. The method was not to grow the model. It threw away the taxel index each sensor assigns on its own, wrote down instead where that taxel sits on the fingertip as a coordinate, and put all of them in one space. This article follows what that method achieves and what it gives up, through the full paper and the public repository.

> The results split in two. Attached with no parameter changed to a fourth sensor that had never entered pretraining, the model located the point of contact within 0.16 mm on average. That is a figure an order of magnitude tighter than a comparison model trained with an adapter built for that very sensor. Laid on top of four existing policies, its tokens raised the average score across twenty-six real-robot tasks for all four, while the setting that fed the same signal in unprocessed delivered a third to a half of that, depending on the policy.

> The paper also wrote out the bill. When the hours you can spend are capped, a model trained on a single sensor's data wins seven of eight pairs on its own sensor. Force and dynamics carry across devices, but spatial precision comes only from seeing your own layout at your own resolution. Pooling is therefore not a capability but an exchange. The attempt to hit the same wall from the opposite side is also still in progress. A proposal to add a tactile sensor module to LeRobot, the de facto container for robot learning data, opened in August and has stayed open for three months, and what it snagged on is the same thing: a 9-taxel pad and a 239-taxel array cannot be expressed in one feature. The question left at an operating site is not whether tactile data was collected. It is whether your records are in a format that travels when the device changes, and whether pooling gains more than it gives up.

<!-- stat-card -->
**0.16 mm** — Contact-center error on a sensor absent from pretraining — FTP-1, trained with an adapter built for that same sensor, was at 5.89 mm. Not one parameter was changed

<!-- stat-card -->
**+23.2pp** — Change in the policy T-Rex, averaged over 26 tasks — From 45.4 to 68.6. Feeding the same signal in unprocessed stops at +11.2pp

<!-- stat-card -->
**7 / 8** — Sensor-task pairs won by the single-sensor model at the same 1,000-hour budget — The place where the paper measures directly how much spatial precision pooling gives up

<!-- stat-card -->
**22 / 104** — Task-policy pairs that got worse once the raw signal was added — With the same signal converted into tokens, 99 of the 104 pairs were at or above the original

The figures in this article come from the body, tables and appendix of arXiv:2611.12806 v1, registered on November 9, 2026, and are current as of November 17, 2026. We reopened the abs page that day and confirmed that v1 is the only version.

## One Contact, a Different Set of Numbers on Every Sensor

Press a fingertip once against the edge of a desk. Depending on which device that single contact lands on, it survives as an entirely different bundle of numbers. On a piezoresistive grid the resistance drops in each pressed cell. On a magnetic sensor the displacement of a magnet is written along three axes. On a vision-based sensor with a camera behind a gel, the distorted gel is simply a photograph. The channel count differs, the layout differs, the resolution differs, and so does how many times per second it is read. The paper lists this as the first of three gaps.

"There is no common input format: each sensor type defines its own channels, layout, resolution, and sampling rate, so a reading from one sensor means nothing to a model trained on another."

§1, the first gap. Everything downstream follows from this one sentence.

Once the format splits, the corpus cannot pile up either. One sensor's recording will not add to the next one's, so hours scatter by device, and buying one more hour means a hand wearing that sensor has to go out and touch the world. The paper names the root of all three gaps in a single sentence, then immediately writes the way out alongside it.

"The three gaps share a root: tactile data are tied to the physics of the sensor that produced them. Contact itself is not. A fingertip pressing on an edge is the same event whether a magnetometer, a resistive grid, or a camera behind a gel records it."

§1, where three separate problems are folded into one and the exit appears in the same breath.

How far apart "different formats" actually pulls is visible in a single composition table for the pretraining corpus. Inside one corpus, a piezoresistive glove puts nine taxels on one finger and reads them 100 times a second. A robot fingertip carrying a vision-based sensor photographs that same single finger as a 240×240 image 30 times a second. The two recordings share neither order of magnitude, nor unit, nor physical quantity.

| Principle | Collected on | Hours | Episodes | Taxels per finger | Rate |
| --- | --- | --- | --- | --- | --- |
| Piezoresistive | Human-worn tactile glove | 2,197 | 86,906 | 9 / 16 / 124 thumb, 61 others | 100 / 60 / 60 Hz |
| Magnetic | Human-worn tactile glove | 1,136 | 294,871 | 116 thumb / 96 others | 41.7–83.3 Hz |
| Vision-based | Bimanual robot fingertips, teleoperated | 1,650 | 82,654 | 240×240 image resolution | 30 Hz |
| Total |  | 4,983 | 464,431 |  | about 1.33 billion frames |

************Composition of the pretraining corpus by sensor (Tab. 4). The three numbers in the piezoresistive row mean that three glove types each use a different taxel count and rate. The 240×240 under the vision-based sensor is an image resolution, not a taxel count. That the two columns cannot be compared in one unit is the point of this section.

### 1.1. The Same Wall Stands Outside the Paper

The problem written down as "there is no common input format" is one LeRobot has still not closed. A proposal to add a tactile sensor module shaped like the existing camera module (PR #4469) opened on August 18, 2026, and as of November 17 it remains open. The proposal defines four data types: displacement and force as a 3D point set, optical sensors as 6D, and force-torque as a wrench. What the discussion snagged on was not an algorithm.

"a dataset that records a 9-taxel pad and a 239-taxel array cannot express both in one feature."

From the review thread on LeRobot PR #4469. That thread also notes that the two tactile sensors documented so far already span 9 to 239 taxels.

The overlap in those numbers is not a coincidence. The piezoresistive glove with nine taxels per finger in the table above is the same class of pad the LeRobot thread brings up. One side has been stuck for three months trying to make the bytes agree; the other left the bytes untouched and had them meet inside the model instead. Two parties, hitting one wall from opposite directions.

### 1.2. Where Our Earlier Articles Stopped

Pebblous has covered tactile data four times. [The Tactile Data Humanoid Capital Left Behind](/blog/humanoid-capital-tactile-data/en/) asked why it fails to accumulate, looking at the hole left when money flowed only toward video. This article's question sits one step further on. It accumulated, so why will it not pool?

In [Why Is Robot Learning Data Still Scarce When Video Is Everywhere?](/report/robot-data-interfaces-beyond-vla/en/) we wrote that the bottleneck sits not in the policy but in the translation machinery, and the four pieces named there were auto-labeling, retargeting, physics-grounded 3D inference and success judgement. All four stand on the video and action axes. Touch was not on that list. LingBot-Touch amounts to a fifth translation machine bolted onto it.

## The 4,983 Hours Came from Gloves, Not Robot Hands

Two thirds of the 4,983 hours came from tactile gloves worn on human hands, and only the remaining third is teleoperated recording on the robot hands that actually get deployed. From the point of view of collecting tactile data, that is the wrong way round. Instead of collecting on the best-performing sensor, the project bought hours on gear a person can wear all day while washing dishes and opening drawers. The paper defends the choice in one sentence.

"the sensor to scale with is not the most capable one but the one at the sweet spot between capability and ease of capture, which is why two thirds of our corpus come from gloves a person can wear all day rather than from the fingertips we later deploy on."

§3.1, the design argument for collecting on gloves rather than on the hand the model is later deployed on.

What a glove buys also includes breadth. No robot has to be set up, so one person can record for several hours a day in ordinary homes and offices, and the first-person recordings that pile up carry objects and motions that would take a long time to script and reproduce on a robot. Breadth is what was bought by taking the capability down one notch.

A glove and a robot hand differ in shape and in degrees of freedom. What was aligned in order to put both into one corpus was behavior, not hardware. Every episode is classified into one of 24 task categories such as opening and closing, assembly, wiping, pouring and tool use, and most categories are covered by more than one source. The paper puts it this way: "The two sources are matched on behavior, not on hardware." Instead of matching the gear, they matched what the gear was doing.

Labels are almost absent. Each episode carries only which task category it belongs to. Nothing records how many newtons of force there were, where the contact happened, or when an object slipped. This is where the requirement in §3 of this article, that pretraining has to run without labels, comes from.

It is also worth knowing in advance that the word "episode" points at a different length for each sensor inside this one corpus. Hours divided by episode count put the piezoresistive glove at an average of 91 seconds per episode and the vision-based fingertip at 72, while the magnetic glove sits at 14. Hence the magnetic glove's odd position: the fewest hours, yet the most episodes at 294,871. Any average that mixes the three sources carries this difference in length along with it.

The sampling ratio does not follow the collection ratio either. When clips are drawn during pretraining, the piezoresistive, magnetic and vision-based sources are given equal probability. The hours inside the corpus tilt 2,197 to 1,136 to 1,650, while the amount training sees is flat. In a pooled corpus, how much was collected and how much reaches the model are settled separately.

### 2.1. What Is Released and What Is Not

As of November 17, 2026 the repository is open and the license is Apache 2.0. What you can take is the inference code, the tooling that extracts tokens from a frozen encoder, checkpoints in the two sizes Tiny and Small, the per-sensor data interface code, and 120 sample recording files. The samples are 30 bimanual pairs each from two platforms.

> [!callout]
> The 4,983 hours used for pretraining cannot themselves be downloaded. What has been released is not the corpus but the encoder trained on it, together with the method for attaching that encoder to your own sensor. This is a release for application, not for reproduction. If you come across a summary saying a 5,000-hour dataset has been released, that summary is wrong.

## A Coordinate on the Fingertip Instead of a Taxel Index

To unify its input, LingBot-Touch threw away the taxel index. Taxel 3 on one glove has nothing to do with taxel 3 on another. The index is a name tag the manufacturer assigned in wiring order. In its place the model writes where that taxel sits on the fingertip surface as a continuous 3D coordinate, together with which finger it belongs to. Start from the geometry asset each sensor ships with, map it onto a unit-radius sphere, and the taxels of all three device families become points in one space.

"we describe where a measurement was taken by a continuous 3D coordinate and a finger identity, and place the coordinates of every sensor in one canonical fingertip space."

§3.2, the sentence that swaps a manufacturer's index for geometry.

Matching the places alone does not make the input one thing. Under identical force, the number a resistive grid reports and the distance a magnet is displaced still start from different units. So magnitude gets a second treatment. Each sensor's value is divided by its own response range, which moves the normal-direction value into zero to one and the signed tangential value into minus one to one. That unitless value and the coordinate before it together form the common input specification.

After that it is the model's job. One small two-layer network per sensor type turns its own signal into tokens, and from there all three run through a single shared encoder. Sensor-specific parameters survive only in the shallow layers at the edge of the network.
