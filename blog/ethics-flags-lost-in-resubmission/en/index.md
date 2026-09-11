---
title: 83% of Resubmitted AI Papers Kept the Ethics-Flagged Methods Unchanged
subtitle: An MIT and Harvard team followed 446 rejected ICLR papers into their next venue, and only 17% changed a flagged method or procedure
date: 2026-09-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 83% of Resubmitted AI Papers Kept the Ethics-Flagged Methods Unchanged

_An MIT and Harvard team followed 446 rejected ICLR papers into their next venue, and only 17% changed a flagged method or procedure_

## Executive Summary

> [!callout]
> Ethics review at AI conferences exists to turn research toward safer practice before it reaches publication. Researchers at MIT and Harvard asked whether it actually turns anything. They gathered 47,893 ICLR submissions and 185,194 public reviews, then followed papers that picked up an ethics flag and were rejected or withdrawn into the versions their authors later submitted elsewhere. The paper went up on arXiv on September 9, 2026.

> Of the 446 resubmissions the team confirmed, 370 left the flagged methods or procedures in place. In 217 cases nothing observable changed in relation to the concern, and in another 153 the authors changed only how they described limitations and possible harms. Methods or procedures actually changed in 76 papers, or 17.0%. That 83% is not a share of every flagged paper. Its denominator is the 446 resubmissions the team could locate in public records out of 1,857 rejected or withdrawn submissions, and an author who abandoned a project after a flag never enters that denominator at all.

> Sections 1, 2, 3 and 5 stay with what the paper reports. Section 4 reads the finding as a data governance problem. That reading is ours, not the paper's.

### Key Numbers

Source: Nishi, Laprevotte, Bullock, and Andrew, [Governing AI Research Through Peer Review](https://arxiv.org/abs/2609.10740), arXiv:2609.10740 (September 9, 2026)

<!-- stat-card -->
**83.0%** — Resubmissions that kept the methods and procedures — 370 of 446. In 217 nothing observable changed; in 153 only the framing did

<!-- stat-card -->
**76 papers** — Resubmissions that changed a flagged method or procedure — 17.0%. Leakage checks and safety evaluations added, consent or IRB review introduced, identifiers removed, data access or release changed

<!-- stat-card -->
**107 → 1,100** — Ethics flags recorded at ICLR — From 107 in 2022 to 1,100 in 2026, summed across six ethics categories

<!-- stat-card -->
**3 / 25** — Authors who answered the interview request — The qualitative sample ends here, and the paper lists the response rate as a limitation

## Where the Flags Are Raised, and How 446 Papers Were Found

An ethics flag is a reviewer ticking the "Flag for ethics review" checkbox on the review form. NeurIPS, ICML and ICLR have spent several years formalizing research ethics through broader impact statements, submission checklists and flags of this kind. Under those requirements a reviewer can object not only to a technical claim but to how the authors collected their data, how they evaluated possible harms, how they released their artifacts, and how they anticipated misuse.

The paper lays the ground for that authority before it reports anything. Choices about data, system design and deployment distribute risk, encode values and reshape social relations. No researcher can foresee every downstream effect, yet Stilgoe et al. (2013), whom the paper cites, argue for anticipating plausible effects and responding to them, and Do et al. (2023) separate unintended consequences from unanticipated ones and place responsibility for the foreseeable kind with the researcher. Since major conferences decide which work receives attention and legitimacy, Hecht et al. (2021) hold that they share responsibility for what they accept and promote. That is where the study starts.

Some of this machinery already has a track record. NeurIPS established ethics guidelines in 2021, issued several conditional acceptances that cycle and rejected one paper on ethical grounds. The ICLR 2023 program chairs reported screening 190 papers that carried ethics flags. Earlier work, though, either examined a single review cycle or discussed ethical practice in general, and never asked whether ethics review shapes the research itself or in what way. That question is what this paper adds.

The team chose ICLR for its disclosure policy. Among the major AI conferences only ICLR releases every submission and review after decisions, while NeurIPS and ICML publish rejected papers only when authors opt in. From OpenReview the team collected 47,893 submissions and 185,194 public reviews covering 2021 through 2026. Their 2021 snapshot carries no public flags, so the counts begin in 2022, and they rise from 107 that year to 1,100 in 2026. That total sums six ethics categories.

Flags appeared on 2,498 submissions, and 1,857 of those were rejected or withdrawn. Authors routinely change a title, an abstract, a coauthor list or a scope, so matching titles alone cannot find the resubmissions. The team queried OpenAlex with title variants, author surnames and salient abstract terms, retrieved 6,618 candidates, and ranked them by title similarity, author and abstract overlap, and publication year to keep the top 601. A retrieval score cannot establish that two papers are the same project, so they read every pair by hand and retained 446. Code for building the corpus and running the retrieval sits in an anonymous repository.
