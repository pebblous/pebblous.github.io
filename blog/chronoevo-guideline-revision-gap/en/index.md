---
title: ChronoEvo: AI Spots the Medical Guideline Change but Doesn
subtitle: Across 1,709 clinical guideline revisions, 90.8% of answers recognized the revision and only 58.5% fully followed the new recommendation
date: 2026-10-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# ChronoEvo: AI Spots the Medical Guideline Change but Doesn

_Across 1,709 clinical guideline revisions, 90.8% of answers recognized the revision and only 58.5% fully followed the new recommendation_

## Executive Summary

> [!callout]
> This article reads ChronoEvo, posted to arXiv on October 22, as a piece of measurement design rather than a report card for medical AI. Researchers at the University of Minnesota gathered 1,709 recommendations whose clinical guidelines had been revised, and scored two things separately: whether a model notices that a revision happened, and whether it answers according to the revised recommendation.

> 90.8% of answers recognized that a revision had occurred, and 58.5% fully incorporated the revised recommendation. That leaves 32.3 percentage points sitting between them. One condition comes attached. The models had received the evidence from the revised guideline directly in the prompt. This is not a failure at the stage of finding the document; it is what remains after the document has been placed in their hands.

> Sections 1 through 3 follow the numbers and the judgments written in the paper. Section 4, which carries the result over into a data checklist, is this article's reading and is not in the paper.

### Key numbers

The first two mark the places where the gap opens widest. The last two show what is left after applying the two remedies people usually reach for.

Source: [Zeng et al., arXiv:2610.30631 (2026-10-22)](https://arxiv.org/abs/2610.30631)

<!-- stat-card -->
**32.3pp** — Gap between noticing and following — The distance between 90.8% of answers recognizing the revision and 58.5% fully incorporating it

<!-- stat-card -->
**41.1%** — Incorporation rate when a recommendation is swapped — Lowest of the twelve change types. Recognition there ran to 94.5%

<!-- stat-card -->
**20.1pp** — Gap left by the strongest model — GPT-5.6 Sol led all fourteen with 77.9% full incorporation, and the gap still did not close

<!-- stat-card -->
**+0.1pp** — Change in the gap when the revision is emphasized — Outdated content fell from 5.9% to 4.3%, but the gap went from 32.3pp to 32.4pp

## Noticing a Revision and Following It

Clinical guidelines get rewritten every few years. A recommended dose changes, the age at which screening starts moves down, one procedure is swapped for another. ChronoEvo is an exam assembled only out of those rewritten places. The researchers began with 3,411 guideline trajectories, kept the points where the full text on both sides of a revision survived, and settled on the 1,709 items that passed an automated verification step. They come from 308 revision points across 275 longitudinal guideline lineages.

The part of the design worth pausing on is that scoring was split into three columns. Did the answer recognize that a revision had happened. Is the answer clinically correct. Did it fully incorporate the revised recommendation. Most evaluations fold the three into a single score. Pulling them apart made it visible that the middle is empty.
