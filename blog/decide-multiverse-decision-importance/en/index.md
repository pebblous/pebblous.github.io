---
title: DECIDE Finds Which Choice Changed the Conclusion
subtitle: In a hurricane death-toll study rerun across 1,728 analysis combinations, the choice of regression model moved the result most and the femininity of the name came last.
date: 2026-10-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# DECIDE Finds Which Choice Changed the Conclusion

_In a hurricane death-toll study rerun across 1,728 analysis combinations, the choice of regression model moved the result most and the femininity of the name came last._

## Executive Summary

> [!callout]
> Analysts handed the same data keep arriving at different conclusions. A new method runs every plausible combination of analysis choices and then computes which of those choices drove the difference. A paper posted to arXiv on October 28, [Pinpointing Pivot Points](https://arxiv.org/abs/2610.38797), calls the method DECIDE. Researchers at UC Berkeley, LMU Munich, the Munich Center for Machine Learning, and the University of Mannheim wrote it together, and the code is public.

> The sharpest case in the paper is a study of hurricane deaths. Seven points where the analysis could branch were combined into 1,728 reruns, and what moved the result most was which regression model the analyst used. The variable that study was built to test, how femininely a hurricane's name reads, sat at the bottom of the seven. One caveat rides along with every score: a DECIDE number depends on the list of options the analyst wrote down, so a decision missing from that list never gets a place in the ranking.

> Sections 1 through 5 follow the definitions and tables printed in the paper, along with what can be checked in the prior work it cites. Section 6, which proposes adding analysis decisions as one more entry on a data quality list that so far counts missing values, duplicates, and label errors, is this article's reading.

### Key Numbers

Four numbers out of the paper. The first is a value carried over from prior work, and the other three are values the authors computed and printed in their own tables.

Source: [arXiv:2610.38797](https://arxiv.org/abs/2610.38797) (2026-10-28)

<!-- stat-card -->
**34%** — Reanalyses that matched the original result — 100 published social science findings, each reanalyzed at least five times on the original data. A further 26% found no effect or reached the opposite conclusion

<!-- stat-card -->
**0.490** — Adjusted R² of the surrogate regression on the hurricane multiverse — The same surrogate reaches 0.816 on the fertility multiverse. Depending on the data it fits well, or half as well

<!-- stat-card -->
**0.1%** — Main-effect share of the damage transformation decision — Third of seven in total importance (1.035), yet its effect alone is 0.001. Alone it cannot change the conclusion

<!-- stat-card -->
**7th** — Where the femininity of the name landed — The study's own hypothesis variable, with a DECIDE total importance of 0.261, the lowest of the seven decisions

## The Analyst Is Part of the Result

The first evidence the introduction reaches for is a reanalysis experiment by Aczel and colleagues. They took 100 published social science findings, handed independent analysts the same data the original papers had used, and had each finding reanalyzed at least five times. Only 34% of those reanalyses closely matched the original result, and 26% either found no effect or reached the opposite conclusion. The data was the same and the question was the same. What differed was the judgment calls analysts made along the way.
