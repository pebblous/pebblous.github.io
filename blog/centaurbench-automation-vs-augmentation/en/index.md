---
title: On Three of Seven Tasks, AI Guidance Made the Work Worse
subtitle: A Berkeley benchmark ranked ten models twice across seven professional tasks, once as the solver and once as the coach of a fixed worker
date: 2026-08-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# On Three of Seven Tasks, AI Guidance Made the Work Worse

_A Berkeley benchmark ranked ten models twice across seven professional tasks, once as the solver and once as the coach of a fixed worker_

## Executive Summary

> [!callout]
> When a team decides which model to bring in, the table it consults is almost always the same kind of table: a ranking of how well each model finished a task on its own. The job a model actually holds inside an organization, though, tends to look more like helping someone else's work along. CentaurBench, posted to arXiv on August 19, measures those two things side by side on the same tasks with the same set of models. It comes from the Data Innovation and AI Lab at the Haas School of Business, UC Berkeley.

> The two rankings turn out not to line up. On five of the seven tasks, the best direct solver and the best coach were different models. The next part is the more awkward one. On operations research, tax preparation, and travel planning, a worker model that received no guidance at all finished ahead of all nine assisted conditions. Averaged over the full task set, only one assistant model out of nine did better than attaching nothing.

> The authors read their own numbers carefully. Assistance here is narrowed to process guidance and the worker is held fixed at a single model, which makes the result a conservative lower bound on augmentation rather than the most it could deliver. And averaged across all seven tasks, the top model is the same in both modes. What flipped is the per-task ordering rather than the average, and the per-task ordering is where deployment decisions actually sit.

### Key numbers

Source: Wongchamcharoen et al., [arXiv:2608.18554](https://arxiv.org/abs/2608.18554) (2026-08-19)

<!-- stat-card -->
**5 of 7** — Tasks where the two modes crowned different winners — The top model changed between solving the task directly and coaching a worker through it; only menu planning and tutoring agreed

<!-- stat-card -->
**2.05 → 8.15** — Claude-Opus-4.8 on the market trends task — Mean rank 2.05 when it wrote the analysis itself, 8.15 when it coached the worker on the same task

<!-- stat-card -->
**ρ = 0.48** — Correlation between automation and assistance ranks — Spearman coefficient across the nine assistant models, with a two-sided p of 0.187, which leaves it indistinguishable from zero

<!-- stat-card -->
**3.79 vs 3.66** — The unaided worker and the only model that beat it — Mean rank across seven tasks; the other eight assistant models sat below the condition with nothing attached

## One model, two seats: player and coach

The benchmark takes its name from the centaur, the old shorthand for a human and a machine bound into one team. Last year Andreas Haupt and Erik Brynjolfsson argued that model evaluation was stuck in an imitation game of autonomous task completion, and that it should move toward centaur evaluations measuring how models augment the performance of others. This study is that call turned into a measurement procedure.

The intuition that the best player is not the best coach came out of research on people first. Experts, having lost the memory of not knowing, misjudge where a novice will get stuck (Hinds 1999), and the curse of knowledge leads them to overestimate what the other party already holds (Camerer et al. 1989). The reproducibility repository the authors released carries the same thought in its name: best-player-not-best-coach.

What a benchmark usually measures is a model's solo ability: reading the prompt, holding the constraints, producing the final deliverable by itself. The paper calls this the automation mode. The design adds a second mode on top of it. In augmentation mode the model under evaluation never touches the deliverable. It writes only a text telling another model how to approach the task.

The format of that text is forced to be identical for every model. It runs 200 to 250 words and has to cover three stages: a requirements check, a plan for structure, and a self-review checklist to run before submitting. Supplying solution content, or any sentence the worker could paste straight into the final answer, is prohibited. The deliverable itself is written by GPT-3.5-Turbo. Because the worker is pinned to a single model, the only thing that changes from condition to condition is the quality of the guidance, not the strength of the team as a whole.

The diagram below sets the two modes against each other. On the top row the model under evaluation produces the answer; on the bottom row the same model writes guidance only, and the fixed worker produces the answer.
