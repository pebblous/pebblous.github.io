---
title: Rosetta Recovers What Columns Mean from Values Alone
subtitle: An arXiv paper scores 680 columns from eleven BIRD databases, identifiers destroyed, against documentation written by other people
date: 2026-08-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Rosetta Recovers What Columns Mean from Values Alone

_An arXiv paper scores 680 columns from eleven BIRD databases, identifiers destroyed, against documentation written by other people_

## Executive Summary

> [!callout]
> Warehouses that get handed down are full of columns whose names do not say what they hold. An experiment posted to arXiv on August 8, 2026 took on columns like those, with no name and no documentation to work from, reading them out of their values alone. Rosetta, built by Mike Helwig, an independent researcher in the United States, keeps the language model inside a verification harness so it speaks only where evidence exists.

> Scored against documentation written by other people, across 680 columns in eleven BIRD databases with identifiers destroyed, Rosetta committed to 42% of the columns and scored 0.475 on the ones it claimed. The same model used directly answered 94% of them and scored 0.223. Restricted to the 283 columns where both arms speak, however, Rosetta wrote no better metadata than the model alone, and on two of the three facets it wrote slightly worse. What improved was not the writing but the judgment of where to answer.

> The author states that conclusion himself in a single line. The deterministic layer is a competence detector, not a competence amplifier. The question the paper leaves with practitioners is which contract to run a catalog on: automated documentation that fills 100% of the entries, or a catalog that fills 42% and leaves the rest deliberately empty.

### Key Figures

The first two numbers come from the 680-column BIRD study, the last two from a clinical warehouse and a count of contradicting statements. Accuracy here means the share of content words that overlap with documentation written by other people, and the paper scores three facets separately: name expansion, description, and value domain. The 0.223 and 0.475 below are the name-expansion facet.

Source: [arXiv:2608.07946](https://arxiv.org/abs/2608.07946), Sections 5.1 to 5.4

<!-- stat-card -->
**0.223 → 0.475** — Name recovery on columns it claimed — The share of columns it answered at all fell from 94% to 42%

<!-- stat-card -->
**0.550 / 0.293** — Coverage with and without structural evidence — Both figures come from the same system, and the prose quality gap was not detectable

<!-- stat-card -->
**95.5%** — ICD-9 codes decoded from values alone — Measured on 134 real codes, while all 44 NDC drug codes were declined

<!-- stat-card -->
**8.3 / 15.0** — Contradicting statements per 100 columns — Rosetta against the model alone, a total it lowers by declining 55% of them

## Real Warehouses Have No Names and No Docs

The paper takes aim first at an academic premise. Text-to-SQL benchmarks such as Spider and BIRD ship databases whose tables and columns already carry human-meaningful names and whose foreign keys are declared. Under that premise the remaining problem is translation, and contemporary models translate rather well. Real warehouses sit on the other side of that premise. Decades of accretion leave cryptic identifiers sitting beside clean marts, and the documentation is partial, stale, or absent. One column name from the paper is enough to make the point: pms_legacy.t_resv.amt_minor.

So the author makes the prior problem his experiment. The task is to recover what columns and their values mean from the data itself. The measurement is simple and unforgiving. Table and column identifiers across eleven BIRD databases are destroyed at maximum strength, leaving the system to look at names like t3.c0, and the recovery is then scored against the documentation the people who built those databases wrote. The answer key was written by someone else and the author did not touch it.
