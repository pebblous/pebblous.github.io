---
title: A Buggy Answer Key Made AI Agents Look Worse Than They Are
subtitle: An ELT-Bench audit found grading and answer-key flaws in 82.7% of the failures
date: 2026-07-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Buggy Answer Key Made AI Agents Look Worse Than They Are

_An ELT-Bench audit found grading and answer-key flaws in 82.7% of the failures_

## Executive Summary

> [!callout]
> On ELT-Bench, the first benchmark that measures how well AI agents build a data pipeline end to end, a modern coding agent cleared only 22.66% of the transformation tasks. Read at face value, the number says "not ready to deploy." Researchers from IBM Research, ETH Zurich, and UIUC asked whether that low score was really measuring the agent's incompetence.

> When they re-judged the tasks recorded as failures, one column at a time, 82.7% of the failing tasks carried the benchmark's own errors. The grading script couldn't tell a decimal from a percentage and marked values that were 100× apart as "completely wrong"; the answer key itself miscalculated; specs were ambiguous. Correcting the benchmark alone pushed the success rate to 32.51%.

> This piece follows that audit and asks a plain question: does a leaderboard number measure the agent's skill, or the error rate of whoever wrote the answer key? And it argues that the labels we trust as ground truth are themselves data that belongs on a regular audit schedule.

<!-- stat-card -->
**82.7%** — Benchmark-attributable errors — Share of failed transformation tasks that held at least one benchmark error

<!-- stat-card -->
**22.66% → 32.51%** — After fixing the benchmark only — Transformation success rate once grading and the answer key were corrected, agent untouched

<!-- stat-card -->
**178** — Wrongly failed values — Values in the GNP-growth column that were exactly 100× off yet scored 0% match

<!-- stat-card -->
**57.3%** — The wall that remains — Share of genuine failures traced to SQL-construction errors after measurement noise is removed

## What 22% Was Really Measuring

ELT-Bench is the first benchmark that measures an AI agent's ability to build a real data pipeline from start to finish (arXiv:2504.04808). It comprises 100 pipelines, 835 source tables, and 203 data models. From extraction and loading through the transformation step that turns raw source data into an analyzable shape, it lifts a data engineer's daily work directly onto the task sheet.

The original paper reported a 1% success rate on the transformation stage. Rerunning it with a modern agent lifted that to 22.66% (SWE-Agent), but that still means eight of every ten tasks fail. When a number like that lands on an internal meeting table, the conclusion is usually one line: "We can't hand data transformation to this agent yet."

The trouble is what that 22.66% actually measured. A benchmark score is a product of two things: the quality of the answers the agent really produced, and the accuracy of the grading apparatus that sorts those answers into right and wrong. When the second factor wobbles, the score can print arbitrarily low even while the underlying skill is unchanged. That is exactly the question the IBM, ETH Zurich, and UIUC team posed.

## Re-Judging the Failures

The team built a method they call the Auditor-Corrector. For each task recorded as a failure, an LLM first analyzes the root cause at scale, and human reviewers then verify that verdict. Their Fleiss' κ, which measures how far the human reviewers agreed, came in at 0.85, evidence that the judgments were not arbitrary.

The core question is simple: did this task fail because the agent fell short, or because the benchmark was wrong? Classifying the 660 columns across the 81 failed tasks on that basis produced the following.

| Cause of failure | Share (of 660 columns) |
| --- | --- |
| False-positive grading by the eval script | 23.6% (156 columns) |
| Ambiguous data-model descriptions | 4.8% (32 columns) |
| Miscalculations in the answer key itself | 4.5% (30 columns) |
| Genuine agent errors | 67.0% |

At the column level, a third of the failures were the benchmark's fault. Zoom out to the task level and the picture sharpens: 82.7% of the transformation tasks scored as failures held at least one of a broken grading script, an ambiguous spec, or a wrong answer key. In other words, most failures were not the agent's fault alone.

## 100× Off, Scored 0% Match

A concrete case shows the reality of grading rigidity better than any abstract ratio. In the _world_ database, the **GNP_GROWTH_RATE** column holds a country's GNP growth rate. The agent emitted 4.41% as the decimal 0.0441, while the answer key wrote it in percentage form as 4.41. The values mean the same thing. Only the notation differed, by a factor of 100.

The grading script had no flexibility to treat the two notations as the same value. All 178 non-null values were exactly 100× apart, yet the match rate registered as 0%. In effect, correct answers were graded as complete failures. Whether you write a decimal or a percentage is a notational convention a data engineer meets several times a day; it has nothing to do with pipeline-building skill.

The **NUM_WON_2010** column in the European-soccer database exposes a different kind of flaw. The spec never settled whether "the 2010 season" meant 2009/2010 or 2010/2011. The agent reasonably read it as 2009/2010, but that diverged from the answer key and was docked to roughly a 40% match. It was a problem where even a person, reading the spec alone, could not tell which reading was intended.
