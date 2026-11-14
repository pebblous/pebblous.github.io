---
title: OpenProblemBench Has No Answer Key, and the Graders Are AI Too
subtitle: Four evaluator models graded AI on 82 unsolved mathematics and physics problems. Even the leader was judged to have solved only 14.0%, and second place changes with the grader.
date: 2026-10-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenProblemBench Has No Answer Key, and the Graders Are AI Too

_Four evaluator models graded AI on 82 unsolved mathematics and physics problems. Even the leader was judged to have solved only 14.0%, and second place changes with the grader._

## Executive Summary

> [!callout]
> This article looks at a benchmark that hands AI the mathematics and physics problems nobody has cracked yet, then grades the attempts with no answer key in the room. OpenProblemBench, posted to arXiv on 8 October, draws 82 problems from the literature, 46 in mathematics and 36 in theoretical physics. Since no solution exists in the world to check the work against, four evaluator models each read every submission and assess its correctness, its completeness, and how far it got.

> The highest result is GPT-6-Astra at a mean of 14.0%. Full-size open models got no further than 5.5–6.7%, and the lightweight Flash models stopped at 2.4–3.7%. Unfold that average by grader, though, and the very same Astra submissions swing between 9 and 15 problems counted as solved, while the four agreed on a solved verdict for only 10 of the 82 problems. First place is the same whoever reads; below it the order comes apart.

> Through Section 3 this follows what the paper measured and the cautions its authors attached. Section 4, where the argument moves to judging the quality of data that carries no labels, is this article's own reading rather than the paper's.

### Key numbers

Source: Li et al., [OpenProblemBench: Benchmarking AI on Open Problems in the Foundational Theoretical Sciences](https://arxiv.org/abs/2610.11118), arXiv:2610.11118 (8 October 2026), main text and Table 3

<!-- stat-card -->
**14.0%** — GPT-6-Astra's mean solve rate — The average of what the four graders counted as solved. Full-size open models sit at 5.5–6.7%, Flash models at 2.4–3.7%

<!-- stat-card -->
**10** — Problems all four graders called solved — Ten out of the 82, and eight of those came from GPT-6-Astra

<!-- stat-card -->
**9–15** — Solved verdicts on the same Astra work — That is how far the four graders spread. Measured against the 82 problems, 10.98% to 18.29%

<!-- stat-card -->
**75** — Verdicts rated a breakthrough — Out of 2,095 partial verdicts. The rest are 1,252 nontrivial and 768 trivial

## Not Every Unsolved Problem Made the Cut

A benchmark normally starts out holding the answer. Whether the task is an olympiad question or a theorem already in print, grading means laying the model's output next to a solution kept on file. OpenProblemBench went the other way and picked the problems where no such file exists. The paper notes that an unresolved problem offers no final answer to retrieve, so a system has to decide for itself which direction is productive, judge what evidence would close an argument, and notice when a derivation that looks convincing still leaves quantifiers, parameter ranges, or exceptional cases open.

Gathering the problems took two stages. A Large Knowledge Model first pulled candidate questions that looked open out of the literature, and researchers then went back to the source papers and everything published since to confirm that each one really is unresolved. What survived was 46 mathematics problems and 36 in theoretical physics, scattered across subfields such as combinatorics, geometry, statistical mechanics and quantum information. The oldest item traces back to Goldbach in 1742; the newest comes from work first posted in 2025 and published in 2026.
