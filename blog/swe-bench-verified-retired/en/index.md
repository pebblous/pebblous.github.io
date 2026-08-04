---
title: OpenAI Retired Its Own Coding Benchmark, SWE-bench Verified
subtitle: An audit of 138 hard tasks found 59% were flawed, and the answers had already leaked into training data
date: 2026-08-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenAI Retired Its Own Coding Benchmark, SWE-bench Verified

_An audit of 138 hard tasks found 59% were flawed, and the answers had already leaked into training data_

## Executive Summary

> [!callout]
> In February 2026, OpenAI announced it would no longer treat SWE-bench Verified — the coding benchmark it had released two years earlier and that became an industry standard — as a measure of frontier capability. What makes the announcement unusual is who raised the contamination flag: not a third-party researcher, but the company that created the benchmark. So why, and on what evidence, did OpenAI throw out its own exam?

> Two direct causes overlapped. One was saturation. Over the past six months the top score moved only from 74.9% to 80.9%, leaving no way to tell whether the remaining failures were limits of the models or defects in the dataset. The other was contamination. When OpenAI audited 138 hard tasks, 59.4% turned out to have flaws in the test design itself, and in cases where GPT-5.2 solved tasks classified as "nearly impossible," it showed signs of having already seen answers that never appear in the problem statement.

> For anyone working on data quality, this episode reduces to a single question: how do you prove your evaluation data has not been contaminated? And why are coding benchmarks so uniquely exposed to leakage in the first place — and what does it take to keep drawing eval sets that stay clean?

The case for retirement compresses into four numbers. Scores saturated within a narrow band; more than half of the hard tasks turned out to have flawed grading criteria; a large share of those flaws were tests that forced a single narrow answer; and on some tasks the model showed signs of having seen the answer in advance.

<!-- stat-card -->
**74.9→80.9%** — Six-month saturation — SOTA scores stalled within a narrow band

<!-- stat-card -->
**59.4%** — Flawed audited tasks — Test or statement defects across 138 tasks

<!-- stat-card -->
**35.5%** — Overly narrow tests — Correct fixes rejected by rigid grading

<!-- stat-card -->
**31 tasks** — Contamination signals — GPT-5.2 solved "nearly impossible" tasks

## The company that built the benchmark walked away

SWE-bench Verified was the de facto standard exam for measuring a coding agent's skill. It takes issues drawn from real open-source repositories, has a model fix them in code, and grades the result by whether the repository's own tests pass. After OpenAI released it in 2024, it became a shared coordinate for comparing frontier models, and OpenAI itself used the benchmark in the internal metrics it relies on to track dangerous capabilities.

In February 2026, the company that built that benchmark declared this exam could no longer measure frontier capability. The surface signal was saturation. Over the past six months the top score rose only from 74.9% to 80.9%. Once the top of the leaderboard starts crowding into a narrow band, there is no way to tell whether the still-unsolved 20% reflects a real limit of the models or problems that were built wrong in the first place. It is the point where the scores keep rising but what those scores mean grows blurry.
