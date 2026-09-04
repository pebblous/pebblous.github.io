---
title: Models Built to Catch Robot Failures Lost to Off-the-Shelf VLMs
subtitle: A cross-source evaluation that put 13 judges on 2,197 attempts drawn from 14 independently collected sources
date: 2026-09-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Models Built to Catch Robot Failures Lost to Off-the-Shelf VLMs

_A cross-source evaluation that put 13 judges on 2,197 attempts drawn from 14 independently collected sources_

## Executive Summary

> [!callout]
> To train a robot you need one cell per attempt: did this one succeed? That cell goes to four places. It becomes the reward that trains a policy, the filter that decides which episodes stay in the training set, the score that ranks one policy against another, and the signal that decides whether to try again. Nobody can watch thousands of rollouts by hand, so recent systems hand the judgment to a vision-language model and use the answer as ground truth. How often that judge is right is something almost nobody measures before wiring it in.

> A preprint posted on 3 September puts those judges on a single scale for the first time. It pulls 2,197 attempts from 14 sources that different teams collected independently, normalizes them into one schema, and scores 13 judge models under the same question and the same input conditions. The best model reaches 0.77 balanced accuracy, which the authors read as roughly one wrong call in four. All five detectors that were fine-tuned specifically to catch failures land below their own base models. What separates the easy sources from the hard ones is not the robot and not the task family but what you have to see in order to decide. Where the outcome shows up as an object that moved, the judges do well. Where it depends on whether two parts actually mated, no model clears 0.60.

> One appendix section transfers straight into practice. One purpose-built detector reports 80.6% in its own paper. On that validation split, 79.7% of the samples are failures, so a rule that answers "failure" without looking at anything scores 79.7%. Move the same model onto a class-balanced subset and it drops to 0.533. An auto-labeler's score cannot be read without the board it was scored on. Read the boundaries too. This is a v1 preprint two days old, the data and code are promised but not yet downloadable, and the most quotable finding, the lean toward success when the evidence is ambiguous, comes from the authors reading wrong answers by hand in a subsection that states it is not a statistically supported claim.

<!-- stat-card -->
**0.77** — Best balanced accuracy of 13 judges — On a scale where chance is 0.50, the authors read this as one wrong call in four

<!-- stat-card -->
**0.52** — 13-model mean on contact-rich assembly — Not one model cleared 0.60 on this slice

<!-- stat-card -->
**5 of 5** — Specialists that scored below their base — Largest drop 0.088 points, though two of the five pairs are effectively tied

<!-- stat-card -->
**80.6 ↔ 79.7** — Published score vs the always-failure rule (%) — A validation split where answering "failure" every time already scores 79.7%

## Who Writes Down Success in Robot Learning

Validating a single robot policy means moving the arm hundreds or thousands of times. Every one of those recordings gets one cell filled in by a person. Did this attempt succeed? The cell is not large the way a video or a trajectory is large, and it holds one of two values. It is also the value that travels to more places than anything else in a robot learning pipeline.

The FailBench paper lists four of those places and cites each one. The label becomes the reward that pushes a policy forward in reinforcement learning, the filter that decides whether an episode stays in the training data, the score that says which of two policies is better, and the monitor that decides whether to retry. Get the cell wrong and you get four things wrong at once.

Opening every rollout by hand is expensive, so recent systems hand the judgment to a vision-language model. Feed it the footage and the task instruction, ask whether the attempt succeeded. What the paper points at is what happens next. The answer is used inside the pipeline as if it were ground truth. In the authors' words, in every one of those jobs the answer is used as ground truth, and the quality of the judge itself is rarely evaluated extensively before it is integrated into the pipeline.

Two named cases follow. AutoEval correlates its whole pipeline against human evaluation without isolating the classifier inside it. WorldGym reports 0.89 balanced accuracy for GPT-4o on RT-1 labels and then applies that same judge to scoring generated rollouts. Measuring a judge on one source and using it on another is already standard practice.

Scoring a finished recording after the fact is not the only option. The paper splits failure detectors into two families. One reads the policy itself, looking for anomalies in hidden states, action statistics, or predicted trajectories. SAFE reads a VLA's hidden states and predicts a single failure score; Sentinel pairs a statistical consistency check over the policy's actions with a VLM reading the observations. Most of this family calibrates on successful rollouts alone and sets the threshold by conformal prediction, so it needs no failure data at all. The trade is accuracy against detection time, because the point is to stop or retry a rollout while it is still running. The cost is that the detector is bound to one policy and its architecture.

This article is about the other family. Those judges take a finished recording and an instruction and nothing else, which means the same judge can be attached to any policy on any robot. That generality is the point of them, and it also relocates the hard question. Whether the judge still works once it is moved outside the place it was built is not a side question here. It is the question.

The paper also makes room for the obvious objection, which is that a person could just watch. It describes how human judging actually runs in real-robot evaluation today. RoboArena runs double-blind pairwise comparisons across seven institutions, ManipulationNet has a central committee verify every submitted performance, and ArmnetBench has an on-site operator score each rollout as successful, suboptimal, or failure. The cost is not only labor. On the result the paper cites, real-robot policy comparisons typically run 20 to 30 trials, too few to separate two policies with statistical confidence. That is where the pressure to hand judging to a model comes from.

We have written before about what human labeling of this kind costs. [AgiBot World had annotators label even the stretches where the robot fumbled](/blog/agibot-world-failure-annotation/en/). Knowing that price, arguing that the field should turn back from automated judges is not this article's interest. The question is the other one. What do you validate and approve an automated judge against?

## Failures From One Place Cannot Measure Skill

Benchmarks for scoring failure detectors already existed. The trouble is that most of them came out of a single collection campaign. One robot, one gripper, fixed camera placement, the same scenes, the same task family, labels applied by the same people to the same standard. A score measured there mixes the detector's skill with the character of that campaign, and there is no way to pull the two apart.

The practice of manufacturing failures makes it worse. Teams perturb a demonstration until it fails, generate errors automatically, stage mistakes, or pair a perfectly good success video with a different instruction so it counts as a failure. The paper's objection sharpens here. Failures built that way carry traces of how they were built, and a detector can score well by recognizing the traces. Reading the physical state and memorizing the manufacturing artifact look identical from the outside if all you have is the score.

Categories get mixed too. Many existing benchmarks put execution-time errors and plans that were wrong to begin with into one number. The paper's point is that such an average smears a nearly solved problem together with an unsolved one. That is why FailBench narrows its scope. It covers execution failures, meaning the attempted motion did not produce the intended result and the outcome can be judged from the recording alone. Planning failures, where the intended action was inappropriate before execution began, are out of scope. Asking one question across fourteen sources is possible only because the question was shaved this thin.

Instead of collecting new data, FailBench cuts across recordings that already exist. The authors screened roughly 30 candidate corpora, kept 14 sources, normalized their differing camera setups and labeling conventions into one schema, and froze 2,197 samples: 1,176 failures and 1,021 successes. Six of them were never built for failure detection at all. RH20T rates the quality of teleoperated trajectories; REASSEMBLE labels every segment of a contact-rich assembly. In the paper's framing, neither was made to test failure detection, which is why they were pulled in, and both ended up among the hardest slices.

Three rules governed selection. A source had to record a robot carrying a manipulation task to completion, it had to supply its own outcome label, and it had to add a task family, a robot, or a failure mode the collection did not already have. The authors attach a condition to the middle rule: no label in FailBench is their own judgment of a video. So what happens when an inherited label is wrong? They randomly select around 25% of the benchmark for manual inspection, and whenever a sample turns out to have a wrong or ambiguous label they swap in a different sample from the same source and the same distribution. Sampled inspection, not full inspection.

Behind "normalized into one schema" sits a run of decisions. Every source labels differently, so each one needed a call on how to collapse to binary. RH20T has the recording operator assign a quality rating from 0 to 9; the authors mapped 0 (robot fault) and 1 (task goal missed) to failure and the rest to success. More telling is what happened to the ambiguous middle grades. armnetbench's suboptimal tier, robometer's partial-progress tier, and score 4 out of RoboRewardBench's five-point quality scale all dropped out of the benchmark. The stated reason for excluding score 4 is that it represents ambiguous near-completion. At least across those three sources, the samples the judges get scored on are the ones their own sources did not consider ambiguous.

In the table below, the column worth staring at is the last one. How much of the available pool each source contributed varies by more than a hundredfold.

| Source | How the failures arose | Available | Drawn | Share |
| --- | --- | --- | --- | --- |
| reflect | Planned | 30 | 30 | 100% |
| botfails | Planned | 145 | 144 | 99.3% |
| ur5fail | Organic | 140 | 139 | 99.3% |
| armnetbench | Organic | 345 | 300 | 87.0% |
| robometer | Not stated | 257 | 120 | 46.7% |
| phail | Organic | 524 | 80 | 15.3% |
| simplerenv | Organic (sim) | 2,710 | 300 | 11.1% |
| bdv2fail | Synthetic | 1,000 | 100 | 10.0% |
| robofac | Planned | 1,204 | 60 | 5.0% |
| roboreward | Synthetic | 2,831 | 100 | 3.5% |
| reassemble | Organic | 4,551 | 124 | 2.7% |
| rh20t | Organic | 12,625 | 300 | 2.4% |
| roboarena | Organic | 10,783 | 100 | 0.9% |
| robometersim | Organic (sim) | Not stated | 300 | n/a |
| Total | 14 sources (12 real, 2 sim) | 37,145 | 2,197 | — |

▲ Tables 5 and 6 of the paper, re-sorted by share drawn. The share column is our calculation. robometersim's eligible pool is not stated by its source, so the paper leaves it blank as well. The available pools are not counted in the same unit from row to row: rh20t counts scenes, reassemble counts action segments cut from 153 long recordings, botfails counts episodes. The paper flags two further caveats itself. 154 rh20t scenes and one botfails episode carry no usable binary label, and roboarena's pool is counted before the scene matching its own rule requires. Read roboarena's 0.9% as a sign of how wide the choice was rather than as a like-for-like sampling rate.

This spread matters beyond circumstance because of how the scores are aggregated. The paper's headline metric is the macro average, which weights every slice equally. roboarena, drawn from 0.9% of its pool, carries the same weight as reflect, which was taken whole. One slice holds only 30 samples, so noise in a small slice lands directly in the total. That combining benchmarks shuffles rankings is something [an earlier audit from the same lab already showed](/report/physical-ai-benchmark-redundancy-audit-2026-08/en/).

RoboArena was never a success-and-failure benchmark. It ranks two policies against each other through double-blind pairwise comparison, and its evaluators happened to record outcomes as well, which is what FailBench reworked into binary labels. And roboreward's available pool of 2,831 is exactly the size of that benchmark's test split. The reserved exam paper was reused in full.

The paper's priority claim has a boundary. Its introduction states that no published evaluation scores a detector across independently collected sources under one protocol. The authors themselves note a counterexample in the next section: PRIMO R1 transferred zero-shot to RoboFail at 67% after training for process reasoning, and they call it the one cross-source result they are aware of. So what is first is scoring many detectors on many sources under one protocol, not the cross-source experiment itself.

## Thirteen Judges on One Scale, and the Best Scored 0.77

The table only reads properly once the metric is clear. Balanced accuracy averages the recall on successes and the recall on failures. However lopsided the two classes are, the expected score from guessing is pinned at 0.50. On data that is nine parts failure, plain accuracy hands 0.90 to a rule that answers "failure" without thinking. Balanced accuracy gives that same rule exactly 0.50. Why the difference is decisive in practice shows up with real numbers in the next section.

There are two ways to aggregate as well. The macro average scores each slice and then weights those scores equally. The micro average pools every answered sample into one calculation. The paper compares models on the macro average. The reflect slice, which contains only failures and therefore has no balanced accuracy of its own, drops out of the macro and enters the micro.

The scoring conditions are held together. Each model runs with the prompt, decoding settings, and thinking budget its own authors recommend, while the question asked and the way it is scored stay the same. What the judge actually sees, though, follows the source. Models that accept video get the clip; the rest get 32 still frames spaced evenly across it. The sources are uneven in their own right. Most provide a single fixed external camera, two supply three synchronized views including a wrist camera, and two release only the first and last frames. What is visible turns out to be the axis that separates the scores later, and that axis already differs source by source.

Here is the scorecard for all 13. Note that first and second place trade positions depending on which aggregate you read.

| Judge model | Group | Macro | Micro | Real | Sim |
| --- | --- | --- | --- | --- | --- |
| Gemini 3 Flash | General | 0.77 | 0.74 | 0.76 | 0.77 |
| Gemma-4-31B-it | General | 0.75 | 0.76 | 0.75 | 0.76 |
| Qwen3-VL-8B-Thinking | General | 0.69 | 0.69 | 0.68 | 0.75 |
| GPT-4o | General | 0.69 | 0.67 | 0.69 | 0.68 |
| Qwen3-VL-4B-Thinking | General | 0.65 | 0.65 | 0.64 | 0.71 |
| Guardian (thinking) | Specialist | 0.63 | 0.61 | 0.62 | 0.64 |
| RoboReward-8B | Specialist | 0.62 | 0.59 | 0.62 | 0.61 |
| Hy-Embodied-VLM-1.0 | Embodied | 0.61 | 0.62 | 0.61 | 0.64 |
| ViFailback-8B | Specialist | 0.59 | 0.56 | 0.60 | 0.54 |
| HY-Embodied-0.5 | Embodied | 0.54 | 0.53 | 0.54 | 0.54 |
| Qwen3-VL-2B-Thinking | General | 0.53 | 0.53 | 0.52 | 0.55 |
| RoboFAC-7B | Specialist | 0.51 | 0.52 | 0.51 | 0.51 |
| FailSense-Calvin-3B | Specialist | 0.50 | 0.50 | 0.50 | 0.53 |

▲ Table 1 of the paper. All figures are balanced accuracy, where chance sits at 0.50. Sorted descending by the macro average.

The top row is 0.77. The paper renders that as roughly one incorrect judgment in four. Attach the judge and auto-fill 1,000 labels, and more than 200 of them move to the next stage flipped. Second-place Gemma-4-31B-it trails by a point on the macro at 0.75 but leads on the micro at 0.76. This is exactly why a "number one" claim with no stated aggregate is worth nothing.

### 3.1. The Five Purpose-Built Models Cluster at the Bottom

Read down the group column and an arrangement stands out. All five detectors fine-tuned specifically for failure detection sit below the general-purpose VLMs. The paper's sentence carries one exception: every purpose-built detector scores below every general-purpose model except the smallest. Qwen3-VL-2B-Thinking, at the 2-billion-parameter scale, scores 0.53, above two specialists and below three. The authors' conclusion is that robotics-specific training does not account for the gap, not that fine-tuning is inherently harmful.

The two models built for embodied robot work sit in the same band. One observation here is ours rather than the paper's. This panel mixes models spanning two years, from GPT-4o released in May 2024 to Hy-Embodied-VLM-1.0 released in July 2026. The paper does not treat model generation as a controlled variable, so reading the table as a generational comparison means saying something the paper does not.

### 3.2. Pick a Judge in Simulation and the Gaps Disappear

The last two columns split the scores between real-robot recordings and simulated ones. The orderings are nearly identical, with a rank correlation of 0.95. The absolute levels differ, though. The simulated side is about 1.3 points easier on average, and the spread between models is smaller there. The authors' implication lands directly on how a judge gets chosen: simulated environments mask the performance gaps, and a judge selected on them may not perform equally when deployed in a real environment. Testing a judge in simulation and then attaching it to a real line is a common order of operations.

## Where 80.6% Came From

Appendix D traces, in three lines of arithmetic, where one specialist's self-reported performance came from. The model is RoboFAC-7B and the figure its paper reports is 80.6% plain accuracy on its own validation split.

Start with what that split contains. Of 1,204 samples, 960 are failures. That is 79.7%. So a rule that never looks at the footage and answers "failure" every time scores 79.7% on that board. The reported 80.6% sits 0.9 percentage points above it.

FailBench drew 30 failures and 30 successes from the same data, balanced the classes, and ran the same model again. It caught all 30 failures. It cleared 2 of the 30 successes. Averaging those two recalls gives a balanced accuracy of 0.533. The last line ties the two ends together. Hold those measured recalls fixed and change only the class prior back to the original unbalanced split, and you get 0.811, which is 0.5 percentage points from the 0.806 that paper reported. Same model, same behavior, different board.
