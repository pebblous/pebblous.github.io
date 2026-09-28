---
title: The Gains Land Only Where the Synthetic Data Was Aimed
subtitle: One robot study climbed from 40.8% to 69.0%, but the jump sat in the condition with repositioned objects while lighting stayed near half
date: 2026-09-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Gains Land Only Where the Synthetic Data Was Aimed

_One robot study climbed from 40.8% to 69.0%, but the jump sat in the condition with repositioned objects while lighting stayed near half_

## Executive Summary

> [!callout]
> This report maps the world-model landscape for Physical AI as of September 2026 and asks what synthetic data actually buys. The short answer: synthetic data does not lift a robot's ability evenly. It fills the specific weakness the data was aimed at. Feed in trajectories built by randomizing object placement, and the success rate jumps in the condition where placement changed, while the condition with distractor objects nearby and the condition with altered lighting barely move. Add a second batch that varies the environment instead, and now the distractor cells climb steeply while the placement cell inches forward. Meanwhile the score measured inside the training distribution hardly moves across both rounds of augmentation. What synthetic data bought was not skill. It was tolerance for changed conditions.

> The basis for that reading is not a paper's headline number but the condition-by-condition table in its appendix. The authors ran four tasks under five conditions, hundreds of trials per data regime, and recorded twenty cells. The body of the paper reports three averages. An average alone cannot answer why the number rose. The same shape repeats on the metrics side. A world model built for robot policy evaluation reports a large jump in its average score, but split into its six metrics, only two rose, image quality actually fell, and trajectory accuracy, the metric closest to action, sits lowest of the six. A position paper on world-model evaluation gave this pattern a name, a mismatch between claims and evidence, then laid out eight levels of evidence and reported that the middle levels are empty. The most striking gap: almost nobody measures whether a policy's improved score came from exploiting holes in the generative model.

> So this report does not rank models. It hands over the questions worth asking instead. In which condition did the number rise, and by how much. Was it compared against real data collection at a matched cost. Which cell moved, rather than what the average did. The stakes are concrete: a government-funded Korean world-model program, running on a two-year budget, has set its core goal as raising a real robot's task success rate by at least 20 percentage points over a no-world-model baseline. A gain reported without fixing the condition cannot be graded. What remains is the ordinary work of diagnosing data at the level of the task episode, naming the conditions to be filled, and measuring again under the same conditions.

<!-- stat-card -->
**+7.5%p** — Gain inside the training distribution — Across both rounds, after 130 synthetic trajectories were added. Over the same span, the unseen-object condition rose 40.0 points

<!-- stat-card -->
**+33.7%p** — Distractor condition, second round of augmentation — The same condition gained only 5.0 points in the first round. Change what the data aims at and the cell that moves changes too

<!-- stat-card -->
**52.5%** — Final success rate under changed lighting — Still the lowest cell in all three data regimes after two rounds. Two-thirds of the same regime's 80.0% in-distribution score

<!-- stat-card -->
**0.3561** — Trajectory accuracy behind an average of 0.6834 — Three other metrics in the section 5 breakdown sit at 0.88–0.93. The cell closest to action is under half the average

## One name, six different things

Start with an expiry date. Every release status and spec below is a snapshot taken in September 2026. In this field model cards are revised monthly, and a model listed as "coming soon" in May shows up in July with weights attached. The tables here are material for a judgment, not the judgment itself. When the purchase decision actually arrives, open the same pages again.

Before any of that, the vocabulary needs sorting out. In conference slides and vendor one-pagers, the phrase "world model" currently points at several different objects, and those objects promise different things. When one name covers all of them, a buyer cannot tell what is being bought.

### 1.1. Start with a robot moving a cup

Picture the simplest possible scene. A robot arm slides a cup across a table. Now feed three different actions into a model that predicts what happens next: nudge the cup gently, shove it hard, do nothing at all. A good model should produce three different futures. The gentle nudge moves the cup a little, the hard shove tips it over or sends it off the table, and doing nothing leaves the cup where it was.

That property, where changing the action changes the predicted future accordingly, is called action-conditioned prediction, and it is the minimum requirement for a world model used in robotics. A model that returns a plausible-looking video no matter which action you feed it is a video generator, not an environment model for a robot. One metric later in this report makes the distinction painfully clear: a completely static video, with nothing moving at all, scores at the top on certain video-quality measures.
