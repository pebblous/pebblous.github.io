---
title: Teleoperation Demonstration Data Records the Task. What Else Does the Robot Learn?
subtitle: AgiBot teleoperation team technical report — a policy trained on demonstrations with pauses and detours retraces about 90% of the added distance
date: 2026-11-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Teleoperation Demonstration Data Records the Task. What Else Does the Robot Learn?

_AgiBot teleoperation team technical report — a policy trained on demonstrations with pauses and detours retraces about 90% of the added distance_

## Executive Summary

> [!callout]
> A batch of successful demonstrations records two things besides the job itself. One is the detour that exists only because of that equipment. The other is what the operator looked at before deciding. A team holding hundreds of thousands of hours of teleoperation logs turned around and examined its own collection setup — not through those logs, but through controlled experiments of 30 trials per condition. The AgiBot teleoperation team posted the work to arXiv on 17 November as a technical report, not a peer-reviewed paper.

> The first of those two crosses into the policy almost intact. A policy trained on demonstrations laced with detours retraces about 90% of the extra distance the human covered. The shakiness of doubling back, though, is more than half gone: only 45% of the added jerk carries over. The defect comes out looking like smooth, confident motion, which is why watching rollout video does not catch it. The second thing never gets recorded at all. When the operator saw the block with their own eyes and picked the right arm, the policy trained on those demonstrations chose arms at chance.

> And the defect may not be inside the data at all. Training data with mixed calibration batches held up in the configuration the report tested. What collapsed was the condition where the collecting robot and the executing robot disagreed on joint zero, and there all 30 trials failed. Nowhere in the dataset files is that mismatch written down. One question is left for the reader: which part of our data is the phenomenon, and which part is the way we collected it?

<!-- stat-card -->
**0.194 m / 0.215 m** — Distance the policy retraced, against the extra distance the human covered — Measured between a 0% detour batch and an 80% batch. About 90% of the added distance stays in the policy

<!-- stat-card -->
**45%** — Share of the added jerk that survives into the policy — In the same comparison the path keeps 90% while the shakiness keeps 45%. That is why the defect looks like smooth motion

<!-- stat-card -->
**30 of 30** — Trials that failed when collection and inference robots disagreed on joint zero — The same task reaches 66.7% in its best configuration. Not a sure thing turned impossible, but a two-thirds thing turned zero

<!-- stat-card -->
**50% → 100%** — Arm-selection accuracy once demonstrations show the robot looking first — Even after it picks every arm correctly, the pick-and-place success rate stops at 60%

Every figure here, and every sentence quoted from the report, comes from the body, tables, and figures of arXiv:2611.22388 v1 (submitted 17 November 2026), rechecked against the full text on 20 November 2026. Where a sentence is attributed to the report, the quoted wording is the report's own; other quoted fragments are turns of phrase, not citations.

## A ledger of 207,030 hours, and experiments of 30 trials per condition

The number this report leads with is a ledger. In its own words: "Our records contain about 20,253 task entries totaling 207,030 collection hours." (§3.3) Yet the conclusions in the report did not come out of analyzing that ledger. The physical experiments run almost entirely in units of 30 trials per condition, and the policy-training experiments build one model from 100 demonstrations. Tie the two numbers into one sentence and you get "we combed through hundreds of thousands of hours and found these defects" — which is not what the report says.

The ledger enters the analysis in exactly one place: counting how common each kind of task is. Measured by collection hours, 18.5% of the work involved mechanisms, sustained contact, or two arms holding one object, and therefore needed force control; another 38.7% would benefit from force control — wiping, pressing, folding, pulling, tight insertion. When a team is deciding whether to change its rigs, "do those tasks make up more than half of what we do?" is a question only the ledger can answer, and "so what happens then?" is the question the 30-trial experiments answered. Keeping those two roles apart is the honest move in this report.

Who wrote it is worth a moment too. The author line opens without a person's name. The organizational name Maniformer Real-World Manipulation Team comes first, followed by 41 individuals. The only affiliation printed at the top is the address `teleop.agibot.com`, and no formal company name appears in the body or in the acknowledgements. That address is published under the AgiBot teleoperation team's name, so this article calls the authors by that name — but it does not write "AgiBot announced." AgiBot has come up twice in this house: once for [annotating failed demonstrations with the cause and whether recovery was possible](/blog/agibot-world-failure-annotation/en/), and once for [a dataset that records the texture of contact](/blog/agibot-world-2026-tactile-contact-dataset/en/). This time it is not a dataset release but a technical report, and it has not been peer reviewed.

The method puts three things in one place. Inverse kinematics computes the workspace on top of 25 published dual-arm robot URDF models; teleoperation experiments run with the control scheme varied; and a fine-tuned π₀.₅ policy goes onto a real robot to be scored. What the abstract ends with is a list of five things to measure before scaling collection: "They motivate evaluating effective workspace, control efficiency, observation completeness, calibration alignment, and motion quality before scaling collection, and addressing system-induced compensations at their source." What is new here is that each of those five now carries a number, and Sections 2 through 6 of this article follow them one at a time.

| Axis to measure before collecting | What showed up when it was left empty | Here |
| --- | --- | --- |
| Effective workspace | 55% reachability inflates the 41% that can also hold the tool at a usable angle | Section 2 |
| Control efficiency | Median completion time on the same task falls from 35.7 s to 16.7 s | Section 3 |
| Motion quality | About 90% of the path added by detours stays in the policy | Section 4 |
| Observation completeness | Arm-selection accuracy sits at about 50%, the same as guessing | Section 5 |
| Calibration alignment | Collection and inference robots disagree on zero, and all 30 trials fail | Section 6 |

********The five axes named in the abstract, and the value this report attached to each. Every figure in the middle column comes from a controlled experiment of 30 trials per condition or from a calculation on URDF models — none of them from the 207,030-hour ledger.

Having people drive robots by remote to manufacture training data is already a business in Korea. This house covered that scene while asking [whether the cumulative data CrowdWorks advertises really belongs to robots](/blog/crowdworks-physical-ai-teleoperation-data/en/). This article skips the part that explains the work and looks instead at what the equipment doing the work leaves behind in the product.

## Reaching a point is not the same as being able to work there

The material behind the workspace numbers is not robots standing in a lab but 25 published URDF models. Verbatim: "Using URDF models of 25 mainstream humanoid and non-humanoid dual-arm robots, we test multiple tool-axis directions at each of 10,075 positions in a sampled volume and use inverse kinematics (IK) to compute the fraction of feasible directions at each position." At each of 10,075 positions inside a sampled volume, the tool axis is swung through several directions and IK decides what fraction of them are feasible. No 25 physical machines were run. The list of 25 models is said to be in an appendix that the body text does not include, so this article refers to them only by the three categories the report compares: humanoid, lift-wheeled, and tabletop.

What the calculation separates is two different "workspaces." One is reachability — the fraction of positions the fingertip can simply get to. The other is orientation-aware coverage — the fraction where it can also hold the tool at an angle that lets it work. Arm length and reach radius, the numbers that land on a spec sheet, describe the first one. Lay the two side by side on a vertical slice through the shoulder and each body loses a different amount.
