---
title: Rewriting Only the Prose Moved AI Reviewer Scores Across 4,080 Papers
subtitle: A controlled study that froze the methods and numbers of 120 ICLR 2026 papers, rewrote only the prose, and collected 42,396 scores
date: 2026-08-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Rewriting Only the Prose Moved AI Reviewer Scores Across 4,080 Papers

_A controlled study that froze the methods and numbers of 120 ICLR 2026 papers, rewrote only the prose, and collected 42,396 scores_

## Executive Summary

> [!callout]
> A research team anonymized 120 papers submitted to ICLR 2026, held the methods, the experimental settings and the reported numbers fixed, and rewrote only the prose to produce 4,080 manuscripts. Several LLM judges then read those manuscripts under two scoring protocols. The scores moved. But the finding is not that AI judges fall for flashy writing. The sensitivity turned out to be structured.

> How the evidence was framed and how novelty was claimed shifted the scores most, while making the vocabulary and syntax harder drew almost no reaction at all. Change the judge and the same edit could push a score down instead of up. Tightening the rubric pulled the whole scale down by 1.36 points, yet sensitivity to the prose did not shrink with it, and in some combinations it grew. The most uncomfortable part is where the change was recorded. Only the sentences had changed, and the model wrote it up not as better presentation but as **a difference in contribution and soundness**.

> Detection cannot close this gap. Hidden prompts and artificial perturbations can be caught, but a rewrite that states the evidence more clearly and puts the contribution up front is indistinguishable from what an advisor asks a student to do. And every norm that conferences and publishers have put in place over the past year, within what we were able to verify, concerns confidentiality, human accountability and disclosure of use, in other words who wrote it. We found no clause asking what the judgment responded to. For any organization handing evaluation to a model, one question remains. When the same content arrives in different words, does your pipeline return the same verdict, and is there a record of anyone checking?

### Key numbers

Source: measured values from Li et al. (2026), main text and appendices. All four are taken up again in the body.

.592 vs .011

Score contrast of the axis that moved most  
(evidence framing) and least (lexical complexity)

13.0pp

Swing in weak-accept probability  
from evidence framing alone

-1.36 pts

Drop in mean overall score under the strict rubric.  
Sensitivity did not drop with it

26 cells

Evaluation cells left entirely unscored  
on one paper (of 84 missing records)

## One paper, 4,200 manuscripts

["How Can Rhetoric Reward-Hack AI Reviewers?"](https://arxiv.org/abs/2608.08975), posted to arXiv on 10 August 2026 by researchers at the University of Maryland, Virginia Tech, MBZUAI and the University of Waterloo, does not observe AI reviewers in the wild. It intervenes on the manuscript side under control. The design is simple: hold the scientific content of a paper fixed, change only the way it is written, and measure across a grid how far that variation moves the score. In a study like this, what determines how much you can trust the result is not the conclusion but the scope of the control. What was locked and what was left open is very nearly the whole study.

This is not the first time the Pebblous blog has covered AI peer review, but the axis is different. When [21% of ICLR 2026 reviews were flagged as AI-written](/report/iclr-2026-ai-peer-review-crisis/en/), the question was who wrote the review, and the remedy was detection. What this report covers is what that judge responds to. It also differs from [bias differences between judge models](/blog/citation-verifier-judge-bias/en/). What wobbles here is the verdict of a single judge when the same content arrives written a different way.

### 1.1. What was locked, what was left open

The team pulled ICLR 2026 submissions through the OpenReview API, dropped withdrawn and desk-rejected entries, and sampled 20 papers from each of six bands of mean human rating to reach 120. Each paper was matched by metadata to its public arXiv LaTeX source, and where several versions existed, the best one was chosen by similarity against the normalized text. An agentic anonymization harness then stripped author names, affiliations, acknowledgements, submission-status phrasing and identity-revealing links. Source diffs and human inspection confirmed that the edits stayed inside the identity region.

Control during the rewrite came in two layers. One layer was enforced programmatically: citation and cross-reference keys, labels, URLs, figure paths, math and code environments, and bibliography files were all locked. Violations were returned to the agent for repair, and manuscripts that could not be fixed or failed to compile were discarded. The other layer was deliberately open: wording, organization, emphasis, captions, tables, and the narration and interpretation of reported results. The requirement to preserve methods, experimental settings, reported values, comparisons and core findings lived at the prompt level only. Sentence-level semantic identity was never demanded.

> [!callout]
> So it is wrong to describe this experiment as "manuscripts with the numbers untouched and barely a word changed." The accurate description is that **the scientific content was preserved while the prose was rewritten wholesale**. That boundary matters because it changes how the results read. If captions and result interpretations could also be rewritten, then the score changes that follow are not "nothing but a formula stayed untouched and it still moved," but "the same finding told in different sentences moved the score."

The scale sits on top of that. Six dimensions applied in both a positive and a negative direction gave twelve conditions, and two rewriter models each produced their own version of every manuscript. Single-dimension rewrites alone account for 2,880 manuscripts; adding the simultaneous rewrite that applies all six axes at once, three-round iterative rewrites, and a condition that revises once more after reading a judge's review brings the total to 4,080.

| Component | Specification | Scale |
| --- | --- | --- |
| Corpus | ICLR 2026 submissions, stratified across six rating bands | 120 papers |
| Intervention space | 6 rhetorical dimensions × 2 directions | 12 conditions |
| Rewriters | GPT-5.5 (Codex CLI), Opus 4.8 (Claude Code) | 2 models |
| Single-dimension rewrites | One dimension at a time | 2,880 manuscripts |
| Simultaneous, iterative, feedback rewrites | All six axes 240 / three rounds 480 / review feedback 480 | 1,200 manuscripts |
| Judges | Gemini 3.5 Flash-Lite, Qwen 3.5 Flash, GPT-5 mini, GPT-5.5, Claude Sonnet 5 | 5 models |
| Review protocols | Standard (conference rubric), strict (demand evidence, forbid rewarding presentation) | 2 protocols |
| Total manuscripts / valid reviews | 120 originals + 4,080 rewrites | 4,200 / 42,396 |
| Direct API cost | Rewriting $20,583.34 + reviewing $8,582.55 | $29,165.89 |

From Table 1 and Appendix B.3 of the paper. Judges were told neither which condition a manuscript had been rewritten under nor which model had rewritten it.

The diagram below traces how a single manuscript multiplies into a stack of scorecards. Counts grow from left to right, and the two rows underneath separate what was locked from what the agent was free to touch.
