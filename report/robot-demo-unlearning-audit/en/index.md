---
title: The policy passed the skill test. The audit still found every deleted demonstration.
subtitle: A retrain-calibrated audit of robot demonstration unlearning, where the behavior axis and the evidence axis split apart on the same checkpoint
date: 2026-08-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The policy passed the skill test. The audit still found every deleted demonstration.

_A retrain-calibrated audit of robot demonstration unlearning, where the behavior axis and the evidence axis split apart on the same checkpoint_

## Executive Summary

> [!callout]
> A robot policy learns by copying demonstrations that people recorded by hand. When one of those people withdraws consent, the honest answer is to train the policy again from scratch without their data, and the bill for that scales with the size of the policy and the size of the dataset. So a family of cheap weight-editing operators grew up around the problem, and until now the question of whether an edit worked has usually been settled by one number: a forgetting loss, or a single membership attack. A preprint posted in August 2026 reopens that verdict and treats it as an auditing problem instead.

> The design has two moves. First, split the claim into a behavior axis and an evidence axis. Second, build the ruler for both axes out of independently retrained policies. Retrains do not agree perfectly with each other either, so anything that lands inside that spread has no measurable distance from a retrain. Measured that way, the edit that recovered eighteen of twenty real-robot trials and came closest to the retrain ceiling was caught by the membership audit exactly as easily as the untouched original. The failure runs in the other direction too. Edits that blurred the evidence pushed behavior further away from the retrain than where they started. A test that folds both axes into one hypothesis rejected every checkpoint the authors audited.

> The authors are explicit that their audit cannot certify deletion. It can only refute it. The practical residue is sharper than that caveat suggests. Running this audit at all requires knowing what the training data was and being able to afford running the training procedure again. An organization missing either condition cannot refute a deletion claim, and cannot support one either. When the right to erasure crosses into Physical AI, the first thing to build is not an audit tool. It is the data infrastructure that makes a control group possible.

<!-- stat-card -->
**18/20** — Real-robot trials the edit recovered — ACT arm; the retrain ceiling was 20/20

<!-- stat-card -->
**1.000** — Attack AUC on that same edit — Retrain null 0.639; identical to the original

<!-- stat-card -->
**All nine** — Checkpoints rejected by the joint test — Seven edits plus two controls, all at p=0.050

<!-- stat-card -->
**13 of 14** — Prior unlearning methods that broke the policy — Closed-loop success fell 68% to 101%

## When a deletion request reaches a robot policy

A policy built by imitation learning grows by copying what a human operator left behind. The angle it grips a cup at, the point where it lets go, all of it comes from somebody's hands on a teleoperation rig. If that person withdraws consent, their demonstrations have to come out of what the policy learned. The clean answer is simple enough: train again from scratch on the data without them. The problem is the price. As policies grow and datasets grow, full retraining turns into an invoice that arrives with every single request.

That is why cheap editing operators appeared, all of them working on already-trained weights. Push the loss up on the data you want gone. Rewrite just the offending action into a different one. Or simply keep training a little longer on what remains. Any of these costs a small fraction of a retrain. Whether the resulting policy has earned the right to be called clean, though, has usually been decided by a single indicator: did the forgetting loss rise enough, or can a membership inference attack no longer pick the data out?

A preprint posted to arXiv on 21 August 2026 takes direct aim at that habit. Written by Jiazhuo Li of the University of Michigan with collaborators at Tsinghua Shenzhen International Graduate School, Zhejiang University, and Wuhan University of Technology, it frames the problem in its opening paragraph.

> [!callout]
> “We ask the mechanism question: when a demonstration is ‘unlearned’ from a robot policy, what exactly is gone?”

What separates this from unlearning in a text model is the closed loop. A language model can be interrogated one output at a time. Ask it to produce the sentence you claim to have removed and see whether it does. A policy does not work that way. It acts inside a feedback loop where its own actions change the next observation, so two runs of the same weights can differ on whether the bad behavior shows up at all, depending on where the episode started. You cannot read what remains off the output. If the token-level version of this problem is the one Pebblous covered in [token-level provenance and unlearning](/blog/token-level-provenance-unlearning/en/), this paper carries it over to policies with bodies.

### 1.1. The 30 demonstrations that taught the policy to knock the cup over

The experiment starts with a cup. Of the 130 demonstrations the authors teleoperated themselves, 30 release the cup at the wrong point and knock it over, and the policy absorbs that mode faithfully. Then a deletion request arrives for those 30. The request is not phrased as “stop knocking the cup over.” It is phrased as “remove these episode indices.” In the paper's own framing, a deletion request names its target by identity rather than by any oracle behavior label. Which means the data already has to carry labels fine enough to point at. That is the same precondition Pebblous reached in [provenance and deletion in agent memory](/report/agent-memory-provenance-deletion/en/).

One caveat has to be read alongside this setup. The 30 episodes marked for deletion are also the ones teaching the wrong behavior, so in this experiment removal makes the policy better. The authors guard against the obvious misreading themselves: success here means proximity to the retrain rather than maximization of task success, and deleting a harmful mode may well reduce task success. The ethics statement also states plainly that the revocation scenario is constructed. Real withdrawals usually pull out perfectly good data, and performance goes down when they do.

### 1.2. Withdrawal is already hard one layer down

Step outside the paper for a moment and the picture gets worse before it gets better. Long before you reach a trained policy, withdrawal is structurally blocked at the dataset layer. Open X-Embodiment, the flagship public asset in robot learning, is a federation stitched together from 60 datasets contributed by around thirty labs. The data ships under CC BY 4.0, a license written so that copies already distributed cannot be recalled. There is a form for registering a dataset; there is no public form for withdrawing one, and the contact paths are a repository issue tracker and a mailing address. Because the structure is federated, a withdrawal request has to travel back to the lab that contributed the data, and unofficial mirrors mean that pressing a central button would not propagate anyway. Assets unified under a single protocol are not obviously better off. DROID, where thirteen institutions spent twelve months collecting 76,000 trajectories on one robot platform, has no public withdrawal procedure we could find either. To state it precisely: in both cases we failed to find documented public withdrawal procedures, which is not the same as establishing that no internal procedure exists.

This report's question sits one step further up. Even after the data is gone, the policy trained on it keeps running. A file disappearing from a mirror and an influence disappearing from a set of weights are two different events. The first one you can confirm. Confirming the second requires a ruler, and building that ruler is what this paper did.

## “We deleted it” bundles two different claims

The paper's opening move is a diagnosis: the phrase “we deleted it” is bundling together two different claims. One is that the edited policy acts like a policy retrained without those demonstrations. The other is that an auditor with query access can no longer detect that it was trained on them. The paper names the first the behavior axis and the second the evidence axis, and pins each one down as a definition.

### 2.1. Behavior axis: same state, same action as the retrain?

The behavior axis measures the gap between what the edited policy does and what the retrain does when both are placed in the same state. The gap is reported region by region along the contaminated trajectories: before the problem starts (PRE), the stretch where the bad action is recorded (BRANCH), immediately after (POST), and the tail end of the trajectory (TAIL). Units are raw action units, unnormalized. The reading rule is where the paper's central idea lives. The reference point is not zero but the distance between independent retrains, which the paper calls the floor. In its own words, a model at the floor is as close to a retrain as retrains are to each other.

The definition carries an exclusion clause: closed-loop success is a separate manifestation channel, never equated with it. That single line produces the sharpest result later in the paper. Performing well on the physical robot and behaving like the retrain are different events, and one checkpoint actually splits the two apart.

### 2.2. Evidence axis: one ranking number is not enough

The evidence axis measures whether an auditor can separate the demonstrations marked for deletion from matched non-member demonstrations. Here too the baseline is the retrain: running the same attack against a retrain produces the null. But the paper insists on reporting two numbers rather than one. The first is the rank statistic, attack AUC. The second is the absolute member-loss level relative to the null, written as mem/null. The reason is stated flatly: rank statistics are scale-free but blind to overshoot, and the pair is the audit. Pebblous covered what a membership inference attack is in the first place in [membership inference in medical AI](/blog/medical-ai-membership-inference-privacy/en/).

> [!callout]
> **Lower mem/null is worse.** The metric divides the edited policy's member loss by the retrain's member loss, so 1.0 is the target. Below 1.0 means the policy still fits the data marked for deletion better than a retrain would, which is memory left behind. Above 1.0 means it fits that data worse than a retrain does, so the fact that an edit happened becomes an anomaly signal in its own right. The 0.22 and 1.83 that appear later are not “small, then grew.” They are “missed the target on one side, sailed past it on the other.”

The paper turns this blind spot into a proposition. A rank statistic is invariant to any monotone transformation that inflates member and non-member losses in the same direction, so it structurally passes edits that inflate both together. Checkpoints of exactly that kind get measured later. The scope of the evidence claim is narrowed honestly as well: the definition states that evidence claims are scoped to the tested loss-based auditor family.

The complaint that one metric is not enough had already been raised outside robotics. A 2022 paper that rebuilt membership inference from first principles argued that what matters is detection power in the low false-positive regime, and later work reported that standard membership evaluations lose power there and miss unlearning violations as a result. The rank-and-absolute pair in this paper is close to a robotics edition of that warning.

### 2.3. Only one of four quadrants earns the claim

Because the two axes are independent, an edited policy lands in one of four quadrants: behavior repaired only, rank passed only, absolute level overshot, or both axes satisfied. Only the last one earns the right to a deletion claim. The diagram below places the representative checkpoints the paper actually measured into those four boxes. The box worth looking at is not one of the full ones. It is the empty one.
