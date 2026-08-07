---
title: ISO
subtitle: ISO/IEC TR 5259-6, published May 2026, defines how 5259-2
date: 2026-08-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# ISO

_ISO/IEC TR 5259-6, published May 2026, defines how 5259-2_

## Executive Summary

> [!callout]
> In May 2026, ISO/IEC JTC 1/SC 42 published **ISO/IEC TR 5259-6:2026, a visualization framework for data quality**. With that, the 5259 series covering AI and machine learning data quality — terminology (1), measures (2), management (3), process (4), governance (5) — now also has a way to **show measurement results to people (6)**. This article looks specifically at where 5259-2, which defines measurement, connects to 5259-6, which defines visualization.

> If 5259-2 answered "how do you **put a number** on qualities like completeness, accuracy, and representativeness," then 5259-6 answers "how do you **show that number so AI developers, data suppliers, and regulators can each read it differently on the same screen**." One caveat: 5259-6 is not a mandatory International Standard (IS) but a Technical Report (TR) that carries recommendations, and it is a slim 19 pages. This article keeps confirmed facts separate from common industry practice.

> The Pebblous blog has already covered 5259-2 measurement criteria in more than a dozen articles, but "how do you show those results" was the empty seat at the table. This article fills it.

## The Series Comes Full Circle — the Last Piece, May 2026

ISO/IEC 5259 is a family of international standards for the quality of data used in AI and machine learning. Terminology and measurement criteria came first in 2024, and management, process, and governance were layered on afterward. Published in May 2026, 5259-6 is the visualization part that sits on top of them. With the final piece — the one that makes data quality something you can **see and talk about** — snapping into place, the series completes a loop that runs from definition all the way to presentation.

Here it matters to be precise about the document's status. Where 5259-2 is an International Standard (IS) developed over several years, 5259-6 is a **Technical Report (TR)**. A TR is not a set of "must-comply requirements" you are audited against in certification; it is a **recommendatory, advisory** document offered as a reference for practice. It is also short, at 19 pages. So claiming that "5259-6 mandates a particular chart" would likely misstate the facts. This article distinguishes between the **direction the standard points to** and the **common industry practice** that aligns with that direction.

> [!callout]
> The right expectation for reading 5259-6: it is not a manual you copy chart specs from, but a **framework** that helps an organization design for itself how to convey measurement results to stakeholders. Less a mandate, more a compass.

## A Map of the Six ISO/IEC 5259 Parts

Put the whole series on one screen and it becomes clear where 5259-6 stands. The table below lays out each part's title, role, and document status. The exact publication years of parts 3 and 4 could not be fully cross-verified from public sources alone, so they are marked simply as **Published**.

| Part | Title | Role (one line) | Published | Status |
| --- | --- | --- | --- | --- |
| 5259-1 | Overview, terminology, and examples | Defines terms and concepts | 2024 | IS |
| 5259-2 | Data quality measures | What to measure | 2024 | IS |
| 5259-3 | Data quality management requirements and guidance | How to manage quality | Published | IS |
| 5259-4 | Data quality process framework | The frame for quality processes | Published | IS |
| 5259-5 | Data quality governance framework | Organization-level governance | 2025 | IS |
| 5259-6 | Visualization framework for data quality | How to show measurement results | 2026-05 | TR |

************************

The Pebblous blog has long worked the left side of this map, especially 5259-2: the [5259-2 cheat sheet](/project/ISO5259/5259-2-cheetsheet-01/en/) that gathers 15 quality measures onto one page, the [image quality guide](/project/ISO5259/5259-image-guide-01/en/) tuned for image datasets, the [text data quality assessment](/project/ISO5259/5259-text-qa/en/) for LLM training, and the [standardization roadmap](/project/ISO5259/iso5259-standardization-roadmap/en/) toward domestic certification. The full list lives on the [ISO 5259 hub](/project/ISO5259/en/). This article fills the far right of that map: the visualization part.

## The Question 5259-2 Answers — What to Measure

5259-2 pins data quality down to **measurable criteria** rather than gut feel. Some characteristics are decided by the data itself: completeness, accuracy, consistency, credibility. Some are decided by the data and the system together, such as accessibility or compliance. Others depend on the system environment, like availability or portability. On top of these, characteristics such as diversity, similarity, representativeness, and balance are added for AI and ML. Each characteristic is defined so that "how much is filled in" and "how much is correct" can be **expressed as a number**.

This is where 5259-2's strength lies — and, at the same time, where 5259-6 becomes necessary. Finish measuring, and what you are left holding is a single table dense with numbers. Completeness 0.98, representativeness 0.71, balance 0.63… These numbers are accurate, but **on their own they hand you no judgment**. Whether 0.71 is a pass or a fail, which axis is at risk, whether this month improved on the last: none of that reads well from a list of figures. The specific definitions of each measure are laid out in the [5259-2 cheat sheet](/project/ISO5259/5259-2-cheetsheet-01/en/).
