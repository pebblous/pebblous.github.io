---
title: The LLM Judge Bias a Rating Scale Floor Can Manufacture
subtitle: A construction with zero differential preference reproduced 79 to 85% of the only significant +0.378 in a pre-registered LLM judge audit
date: 2026-08-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The LLM Judge Bias a Rating Scale Floor Can Manufacture

_A construction with zero differential preference reproduced 79 to 85% of the only significant +0.378 in a pre-registered LLM judge audit_

## Executive Summary

> [!callout]
> As LLMs increasingly grade the answers of other LLMs, audits that check whether the judge is biased have settled on a standard design. The one that has passed as the strictest holds the item fixed, changes a single condition, and differences twice. Compare two candidate responses inside the same item, then compare that comparison across conditions, and whatever loads equally onto both responses cancels. A paper posted to arXiv on August 27 shows that the cancellation argument does not hold on a scale that stops at 1 and 5, and it shows it inside the authors' own audit data.

> The audited system was a judge that scores the next tutor turn in a tutoring dialogue. The pre-registered primary endpoint barely moved at +0.085 points, and only one of four rubric sub-scores reached significance: +0.378 on productive struggle. The authors then built a construction that forces both responses to lose exactly the same amount, so differential preference is zero by hand, and that construction reproduced 79 to 85% of the observed value.

> The reconstruction does not prove that no bias exists. The authors are explicit that it is a counterexample, not a decomposition. Still, anyone receiving an audit report now has a question worth asking. Can the reported interaction be traced to responses parked at the end of the scale, using nothing but the ratings the audit already holds?

### Key figures

Source: Fan et al., [arXiv:2608.27309](https://arxiv.org/abs/2608.27309) (2026-08-27)

<!-- stat-card -->
**79–85%** — Reproduced with zero differential preference — The share of the one significant +0.378 that clipping alone rebuilds. Rounding to the integers the judge actually emits brings it to 79%

<!-- stat-card -->
**+0.085** — Pre-registered primary endpoint — 95% BCa interval from −0.167 to +0.353, p=0.684. Any mark the profile left on the judge's scaffolding preference went undetected at this resolution

<!-- stat-card -->
**17 / 30** — Stimuli pinned at the floor — On productive struggle the low-scaffolding response sat at exactly 1.000 in all three arms. On those items the double difference equals one response's shift

<!-- stat-card -->
**6.62 vs 1.38** — Headroom the scale left behind — Averaged over the 30 weak-stratum stimuli the two responses sit at 4.58 and 1.96. Room to move positive runs close to five times the room to move negative

## Differencing twice was trusted as the strictest design

Scores from LLM judges already move leaderboards and benchmark rankings, and in education they have reached the point of grading the instructional quality of tutoring systems against a rubric. Whether a judge should hold that role is itself a measurement question, and the audits that answer it mostly share one design. Fix the item, vary a single attribute of how it is presented or of the identity attached to it, and read the bias off the contrast between the two matched conditions.

The stronger design subtracts once more. Take the comparison between two candidate responses inside the same item, and subtract that comparison across the manipulated attribute. Anything that pushes one response's score up or down by the same amount in every condition disappears along the way. What survives is a difference in differences, and in judge audits it is read off a rating scale that runs from 1 to 5.
