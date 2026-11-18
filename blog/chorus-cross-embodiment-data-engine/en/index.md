---
title: Chorus Turns Human Video Into Robot Data, but Can a Robot Learn From It?
subtitle: Action Intelligence says one screened hour of human demonstration becomes about 13.6 hours of trajectories across 16 robot bodies, with no training results reported
date: 2026-11-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Chorus Turns Human Video Into Robot Data, but Can a Robot Learn From It?

_Action Intelligence says one screened hour of human demonstration becomes about 13.6 hours of trajectories across 16 robot bodies, with no training results reported_

## Executive Summary

> [!callout]
> A data engine that rewrites work footage a person shot on smart glasses or a wrist camera into trajectories 16 kinds of robot can follow is now public. It is Chorus, posted to a research page on October 26 by Action Intelligence (行元智能), a Chinese robot foundation model company. Video that arrives in a different shape from every device is first converged into a single intermediate representation — task semantics and spatial motion — and that representation is then fitted to the body of each robot and handed over as training data.

> At the center of the numbers the company puts forward is the conversion rate. One screened hour of human footage converts across 16 robot types at an average rate of 85%, which comes to roughly 13.6 hours of trajectory. A single clip gets used sixteen times, so the processing cost per trajectory hour falls by the same factor. Not one line of the research page, though, shows whether a robot trained on the data this produces actually got better.

> Sections 1 through 7 report what the research page and the primary sources set down. Section 8 is this article's reading.

### Key Numbers

The numbers Chorus has published fall into three groups: the breadth of the conversion, its cost, and the box still left empty.

Source: [the Action Intelligence Chorus research page](https://www.action-intelligence.ai/research/chorus/), published October 26, 2026.

<!-- stat-card -->
**16** — Robot embodiments supported — One motion of a human hand is solved separately into the joint angles of 16 robots

<!-- stat-card -->
**85%** — Average usable conversion rate — The share that clears joint limits and collisions and remains as usable trajectory

<!-- stat-card -->
**1 → 13.6 hours** — What a screened hour becomes — Processing runs about RMB 200 per input hour and about RMB 14.7 per trajectory hour

<!-- stat-card -->
**0** — Published learning results — No success rate or generalization figure for a robot trained on this data appears

## Six Kinds of Rig, One Shared Representation

Footage of people picking things up, carrying them and wiping surfaces is already piling up across a range of devices. Smart glasses, chest-mounted cameras, wrist cameras, neckbands, head-worn rigs and the UMI-style handheld devices used in labs each record the same motion at a different angle and in a different coordinate frame. What Chorus takes as its input is footage stacked up this unevenly. The capture setups it accepts run from a single monocular camera through stereo, four-camera and six-camera arrangements.

Different devices produce differently shaped video. Chorus first converges all of it into a common intermediate representation, built on two axes: the task semantics of what the person is doing, and the spatial motion of how the hands and objects traveled through space. A robot downstream reads this intermediate form rather than the original footage. Add one more capture device and only the path from that device into the representation has to be built; everything behind it stays as it was.

The research page lays the processing out in six stages: convergence into the common form, semantic annotation, spatial reconstruction, adaptation to a particular robot, synthesis of observation video with that robot in frame, and a final scoring pass over the data.
