---
title: OpenAI
subtitle: Of the 722 mathematical manuscripts OpenAI put on GitHub, the share that has cleared formal verification is 24% or 42% depending on what you count
date: 2026-10-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenAI

_Of the 722 mathematical manuscripts OpenAI put on GitHub, the share that has cleared formal verification is 24% or 42% depending on what you count_

## Executive Summary

> [!callout]
> This article is a reread of the 722 mathematical manuscripts OpenAI put on GitHub all at once on October 6, 2026, not through the numbers the press picked up but by downloading the repository's own files at both the release-day commit and the current one and counting them. Two figures traveled widely. At release, 162 manuscripts had been formally verified in Lean; the rate now stands at about 42%. The two were bundled into a single story: verification could not keep up with generation.

> Three things turned out to be the case. First, the two figures are not before and after. They are different ledgers. The repository's own history file says the next day's work added six formalizations to reach the current rate, so the value immediately before it cannot be 162. The 162 is the number of entries in the formalization catalogue, and the numerator behind 42% appears nowhere in that file. Second, there is a separate field that sat empty before any rate was counted. At the end of that same catalogue is a field for review status, and the value written in it is the bottom of the six-step vocabulary the public specification the file follows recommends. The fields for who reviewed it and how are empty. Third, a document named that empty field a week earlier. Of the five items an advisory group on mathematics and AI told labs in late September to disclose with every result, four already have dedicated fields in the file format this repository adopted for itself. All four are empty.

> That is what the repository's files say. What follows is this article's reading of it. This is not a piece attacking OpenAI. The withdrawal notices pin a commit hash into the archive link, so the pre-withdrawal manuscripts stay reachable at an address that cannot rot; they state that it is the proof that failed, not that the mathematical statement is false; and the README says up front that unformalized results could have issues. Fields that were filled well and fields left empty sit inside the same repository. So the question here is a single one. Counting how much you produced is easy. Are we writing down which of it was confirmed, and to what grade?

<!-- stat-card -->
**unchecked** — the value written in the review status field — The bottom of the six-step vocabulary the specification recommends. Not one character of it has changed since release (§4)

<!-- stat-card -->
**4 of 5** — disclosure items the recommendation asked for that sit in empty fields — Four of the five the advisory group asked labs to publish per result have dedicated fields in the format this repository uses (§6)

<!-- stat-card -->
**173 vs 300** — entries in the formalization catalogue vs the numerator in the README — Two ledgers in one repository. 300 is not the length of any list in it (§3)

<!-- stat-card -->
**26 of 27** — manuscripts given a new edition that sat outside the formalization catalogue — A different denominator from the three above. The repairs tracked the boundary of the list (§5)

## Three days inside the repository

On the night of October 6, 2026, OpenAI opened a GitHub repository called [openai/math](https://github.com/openai/math). Inside were 722 mathematical manuscripts written by an unreleased internal model. One manuscript is not one result; several can make up a single result, so the repository counts those groupings separately and puts the number at 372 families. The README says the model was posed approximately 4,000 problems and that, on average, each result used three hours of ChatGPT Pro thinking compute. What dropped out between 4,000 and 722, and by what criteria, is not written down. What the repository does state is that the output was aggregated into result families and manuscripts and filtered by requiring an appropriate level of significance.

The same passage records exceptions. The README says the vast majority of results came out of the same procedure, then names two pieces of work that did not follow it: work on a zero-free region for the Riemann zeta function, and the proof of the Hodge conjecture for CM abelian varieties. It adds that within the former, the writeup covering the region with real part above 11/12 was human edited for readability. These three sentences are identical in the release-day edition and the current one. What does not exist is any per-manuscript record of which manuscript came out of which procedure. The README inside each manuscript directory (every one this article opened had the same shape) holds a title, an author, a date and a BibTeX block for citation. Revised manuscripts get a version note in that spot; withdrawn ones get a withdrawal notice. And the proof named as the second exception heads family 032, which closes this section.

This article was written by downloading the repository at the release-day commit and at the current commit and counting the lists inside the files directly. So it starts with what happened over those three days, in order. Every rate that follows was made inside them.

### 1.1. One event, three dates

Coverage mostly framed this as a withdrawal within a day. Open the primary documents and that one day splits into three. The withdrawal notices say in their own text that the papers were withdrawn on October 6; the repository's history file files the work under an October 7 heading; and the commit that actually put the change into git is dated early on October 8. Rather than any one of them being false, each document is recording a different moment. So instead of reducing them to one date, this article lays all three side by side.

| What | Moment recorded | Which document records it |
| --- | --- | --- |
| Repository published | 2026-10-06 21:58:50Z | Metadata of the initial commit adc7f124 |
| Withdrawal | 2026-10-06 | All three withdrawal notices: "Withdrawn on October 6, 2026." |
| Revision work | 2026-10-07 | The section heading in history.md: "## October 7, 2026" |
| Landed in git | 2026-10-08 05:03:50Z | Metadata of the fix commit 30148886 |

****``********``****``

Both commit timestamps were queried directly through the GitHub API. The withdrawal date the notices give is the same day as the release, and the change reached git two days later.
