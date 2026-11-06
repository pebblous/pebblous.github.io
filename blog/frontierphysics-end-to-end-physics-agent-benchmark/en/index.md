---
title: Physicists Write the FrontierPhysics Exam, and AI Fails Seven in Ten
subtitle: Forty-two physicists turned their own research into 56 tasks, from literature review to a finished manuscript, and the best model, Claude Opus 5.5, cleared 27.4% of its 168 runs
date: 2026-11-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Physicists Write the FrontierPhysics Exam, and AI Fails Seven in Ten

_Forty-two physicists turned their own research into 56 tasks, from literature review to a finished manuscript, and the best model, Claude Opus 5.5, cleared 27.4% of its 168 runs_

## Executive Summary

> [!callout]
> Forty-two physicists turned research they had actually done into tasks and used them to test AI agents. The benchmark is called FrontierPhysics, it went up on arXiv on November 4, and it carries 72 authors. The researchers who contributed tasks sit at 26 institutions, and the 56 tasks that were accepted cover nine domains across theoretical, computational, and experimental physics.

> Every task starts at literature review and ends with a submitted manuscript. Twenty-two models were each put through 168 runs. Claude Opus 5.5 came out on top with a pass rate of 27.4%, and across the 26 configurations not one got past 46 passes out of 168. Then the researchers read the failed records by hand and sorted them, and the place agents got caught most often was neither a gap in physics knowledge nor an execution error. It was reasoning that did not stay rigorous to the end.

> Sections 1 through 5 stay with what the paper measured and the limits its authors set. Section 6 moves to the question of who makes the evaluation data, and that move is this article's reading rather than the paper's.

### Key Numbers

Source: You et al., [FrontierPhysics: Evaluating Agents for End-to-End Physics Research](https://arxiv.org/abs/2611.06910), arXiv:2611.06910 (2026)

The four numbers below carry different denominators. 27.4% is the score of Claude Opus 5.5, while 48% comes from a hand reading of the failure records of a different model, GPT-6 Astra. 56 is the number of tasks, and 96.2% is the score the authors got when they ran this benchmark's grading standard over research they had already published.

<!-- stat-card -->
**27.4%** — Pass rate of the best model — Claude Opus 5.5 passed 46 of 168 runs. No configuration went above that line

<!-- stat-card -->
**56** — Tasks accepted — Selected out of 182 submissions. All 42 contributors did the research themselves

<!-- stat-card -->
**48%** — Share tagged for reasoning short on rigor — From a hand reading of GPT-6 Astra's 168 records. The denominator is the 143 logged as failures

<!-- stat-card -->
**96.2%** — What the authors scored on their own rubric — A self-check run first, to settle whether the bar sits where no human could clear it

## Tasks Written by the People Who Did the Work

The usual way to build a benchmark is to gather problems that already exist. Scrape textbook exercises, carve a sub-task with a settled answer out of a published paper, translate an old exam. This paper took none of those routes. It asked working physicists to turn one piece of research they had actually done over the past few years into a task.

Submissions came to 182, and 56 of them were accepted. They arrived from 42 researchers at 26 institutions. Each submission had to come with material showing that the research belonged to the person sending it: a paper, a patent, some evidence that their name is attached to the project. For 18 of the 56 tasks, the research underneath has already been published, and four of those papers ran in Nature.

A task that cleared the provenance check then went through review by another researcher in the same field. Reviewers were drawn from contributors whose own task had passed the first gate, and most were doctoral students (47%) or PhD holders (37%). The review form named three things to look at. Whether the task description spoon-feeds the route to the answer. Whether the rubric carries the physical insight only someone who has done that research would have. Whether the at-least-three trial runs submitted alongside the task contain a false pass or a false failure. The second item comes with a comparison attached: tell it apart from the low-signal items common in AI-generated rubrics.

There are nine domains: high-energy physics, condensed matter physics, astrophysics, quantum information, atomic/molecular/optical physics, fluid dynamics, statistical physics, optics and imaging, and chemical physics. Theory, computation, and experiment are all in there. The task counts are uneven. Condensed matter physics has the most at 12 and chemical physics the fewest at 4, with the other seven domains falling between 5 and 7.

The paper also records the time stacked up behind the tasks. By the contributors' own reports, each original project took roughly 270 days on average, and together they add up to more than 8,000 hours of research. The contributors average 420 citations. One sheet of exam paper has a whole research career sitting under it.

> [!callout]
> This arrangement changes more than difficulty. Because the person who set the task did the research, they know not only which answer is right but also where a human is likely to go wrong. That is where the rubric coming up next gets its license to ask not just whether the result is correct but whether it is worth publishing.

## One Task Runs From Literature Review to a Manuscript

The paper opens by setting out what existing physics benchmarks look at. They have agents answer fixed questions, or solve one sub-task cut out of a research process, or reproduce a paper whose solution is already supplied. In all three the answer sits somewhere already. And all three check only whether the result came out right; the quality of the research barely enters.

A FrontierPhysics task asks for four stages at once. The agent has to find and read the relevant literature, draw up a research plan, carry out the research and the experiments, and write up what came out. Two things have to be handed in at the end. One is machine-checkable output: a computed physical quantity, a simulation result, a processed dataset. The other is a manuscript named paper.pdf. The time limit is ten hours per run.
