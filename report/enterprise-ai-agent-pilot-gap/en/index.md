---
title: The Six Data Defects That Stall AI Agents
subtitle: Where pilots really break in production — a working taxonomy of field mismatches, duplicates, and misread nulls, and the exceptions no one owns
date: 2026-07-03
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Six Data Defects That Stall AI Agents

_Where pilots really break in production — a working taxonomy of field mismatches, duplicates, and misread nulls, and the exceptions no one owns_

## Executive Summary

> [!callout]
> "Most enterprise AI pilots never reach production, and the culprit is the data, not the model." By now that sentence is conventional wisdom. What still has no answer is the sentence after it. **Which** data defects actually stall an agent, **how** do they do it, and **who** owns the exceptions when they surface? Instead of restating the top-line diagnosis one more time, this report answers those three questions one defect at a time.

> The answer runs along two axes. The first is a **defect taxonomy**. The data flaws that genuinely stop agents fall into six kinds — semantic drift, duplicate and ghost records, misread nulls, silent type coercion, silent schema change, and staleness. They share one property: every one of them passes schema validation. Formally the data is valid; to an agent it is not usable. The second axis is the **ownerless exception**. The edge cases a human analyst used to catch by hand in the rules-based era are now swallowed in silence by autonomous agents. The exceptions didn't disappear. They lost their owner.

> The real lever that moves a pilot into production isn't model tuning. It is naming the defects and assigning ownership of the exceptions. Not "clean data" but "agent-ready data" — measuring that gap in concrete numbers is where this report is trying to land.

The gap already shows up in the numbers. Only a sliver of enterprises say their data is fully ready for AI; unready data comes back as tens of millions of dollars per company every year; and when scaling fails, the blame usually can't find an owner. Flip that around, and the companies that did name an owner were markedly more likely to carry a pilot into production.

<!-- stat-card -->
**7%** — of enterprises say their data is completely AI-ready — Cloudera/HBR 2026, n=230+

<!-- stat-card -->
**$12.9M** — annual cost of poor data quality per company — Gartner

<!-- stat-card -->
**89%** — of scaling failures traced to unclear ownership — AgentMarketCap 2026

<!-- stat-card -->
**2.7×** — higher pilot-to-production rate with a named agent owner — Forrester

## Pilots Aren't Dead — They Just Stall at the Exception

Enterprise AI discourse already has its settled truth: the pilot works, it can't cross into production, and the reason is tangled data rather than the model's intelligence. That diagnosis is correct. So this report starts there but refuses to stay there. It folds "the data is the problem" into the premise. The question practitioners actually want answered comes next: exactly which defect, along exactly which path, brings an agent to a halt.

Peel back the "can't reach production" cliché and the picture is more complicated than it looks. RAND found that 80.3% of enterprise AI projects failed to deliver the business value they promised — but it didn't lump those failures together. It split them into four: 33.8% scrapped before ever reaching production, 28.4% that reached production yet fell short of expected value, 18.1% that run but never recoup the investment, and 19.7% that met the business case. The second bucket is the one to watch. **Failing after reaching production is nearly as common as being scrapped before it.** A pilot's death doesn't end at the moment of deployment.

The point where projects fall out is specific, too. AgentMarketCap's 2026 maturity model maps the enterprise agent journey in four stages. 78% reach the prototype stage (Stage 1, fewer than five agents), but the moment they try to scale to 5–20 agents, 60% get trapped in what the report calls the "Stall Zone." Only 31% of companies reach stable production (Stage 3) — 21% in finance, just 8% in healthcare. The dropout isn't caused by insufficient model performance; it happens at the scaling threshold, where defects multiply.
