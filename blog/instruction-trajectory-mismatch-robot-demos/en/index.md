---
title: Robot Demos That Run Clean With the Wrong Instruction
subtitle: MMPF flags mislabeled demonstrations without training a single parameter, and relabeling them lifted real-robot policy success from 73.8% to 90.0%
date: 2026-08-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Robot Demos That Run Clean With the Wrong Instruction

_MMPF flags mislabeled demonstrations without training a single parameter, and relabeling them lifted real-robot policy success from 73.8% to 90.0%_

## Executive Summary

> [!callout]
> Robot demonstration data holds more than records of the arm dropping an object or bumping into something. It also holds episodes whose trajectory ran to a clean finish while the natural-language instruction attached to it points at a different action. A picking motion carries an instruction to place. A trajectory that closes an oven carries an instruction to open it. A paper from the Matsuo-Iwasawa Lab at the University of Tokyo and the AI Robot Association (AIRoA), accepted for publication in IEEE RA-L, gives this defect a name, Instruction-Trajectory Mismatch, and proposes a way to audit for it after the fact.

> The proposed method, MMPF, located and repaired the misattached instructions without training a single parameter. What comes after that is the interesting part. Should the suspect demonstrations be pulled out of the dataset, or left in place with only their labels fixed? In real-robot experiments the two choices left policy success 11.2 points apart, and filtering came out below doing nothing at all at the stage where the robot sets an object down.

> This article weighs the decision that follows detection more heavily than the detection method itself. The criterion that separates what to discard from what to repair still sits at the level of a qualitative recommendation.

### Key Numbers

The first three numbers are what the audit gained. The last one records that the gain did not arrive evenly across every stage.

Source: [arXiv:2608.07895](https://arxiv.org/abs/2608.07895), Table VII and the LIBERO results

<!-- stat-card -->
**73.8% → 90.0%** — Policy success after relabeling — Real-robot Table dataset, 1,260 demos, 30% of instructions corrupted

<!-- stat-card -->
**78.8%** — Policy success after filtering — 11.2 points below relabeling on the same data

<!-- stat-card -->
**100%** — Label correction accuracy across 8 LIBERO settings — Share of detected true mismatches restored to the right label

<!-- stat-card -->
**50% → 40%** — Place success rate that filtering pushed down — The one stage that lost out when demonstrations were removed

## Corruption That Looks Normal

A human teleoperates the robot to produce a demonstration, and a sentence describing the motion gets attached to that episode. Vision-language-action (VLA) policies learn from instructions and trajectories paired this way. The pairing comes apart during bulk collection. Several tasks are recorded back to back and the ordering slips, an annotator picks the wrong entry from a list of similar tasks, or a hand slides after hours of labeling.

The trouble is that the result looks fine. A demonstration where the robot drops an object announces itself the moment you play the video, and pipelines that flag failures automatically already exist. A demonstration with only the instruction wrong executes cleanly from start to finish. It passes the same eyeball quality check a human performs while scrolling through a dataset.

The damage to the policy is a different kind of damage as well. A failed rollout adds bad motion to the mix, but a misattached instruction inverts the correspondence between language and action itself. Show a policy enough cases where the word for picking is paired with the motion of placing, and it loses any basis for telling the two words apart. The harm is largest in settings where the instruction is what distinguishes one task from another.

To reproduce the defect experimentally, the authors injected corruption two ways. One raises the probability of a flipped label for borderline episodes whose nearest neighbor belongs to a different task. The other splits each task's demonstrations into five chunks and moves an entire chunk under a different task label. The corruption rate was set to 30% in both cases. The first mimics an annotator who is genuinely confused; the second mimics one collection session mislabeled as a block. Set next to [AgiBotWorld labeling the robot's fumbles](/blog/agibot-world-failure-annotation/en/), where failed demonstrations were annotated rather than discarded and turned into an asset, this defect sits on the opposite side. Here the demonstration succeeded and the sentence attached to it is wrong.

## Three Modalities Vote, No Training

MMPF (Multimodal Probabilistic Fusion) looks at a single episode through three channels: the head-mounted camera, the wrist camera, and the proprioceptive record of joint positions and actions. Each channel is treated as an independent expert and asked, on its own, which task label this episode should be carrying.

A single expert's judgment blends two signals. The first is local neighborhood agreement. It finds the 30 nearest episodes in embedding space and reads the distribution of their labels, giving closer neighbors a larger vote. The second is global prototype similarity. The mean embedding of every episode carrying a given task label becomes that task's prototype, and the expert measures which prototype the current episode sits closest to. Neighbors alone get swept along by corruption that clusters locally; prototypes alone miss the variation inside a task. The two signals were mixed evenly at λ=0.5.

In the final step the three experts' judgments are multiplied together. How sharply peaked each expert's distribution is decides how much it gets to say, so the confident ones speak louder. When something occludes the wrist camera and it can no longer distinguish anything, the wrist camera's vote shrinks on its own. There was a real stretch of data that needed this. The authors seeded one real-robot dataset with cases where the operator neglected the head-camera view, at a rate of 10%, and in those episodes the head camera's judgment goes blurry while the remaining two experts carry more of the decision.
