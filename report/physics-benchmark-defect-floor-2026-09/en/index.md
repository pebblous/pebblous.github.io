---
title: Is the AI failing physics, or is the question wrong?
subtitle: A team based mainly at Yale audited six physics benchmarks; of the 250 responses recorded as wrong, 12 were the model
date: 2026-09-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Is the AI failing physics, or is the question wrong?

_A team based mainly at Yale audited six physics benchmarks; of the 250 responses recorded as wrong, 12 were the model_

## Executive Summary

> [!callout]
> This article goes back over where a received view came from, the view that frontier models cannot do physics. A team based mainly at Yale opened up six widely used physics benchmarks and had physicists re-grade, one at a time, the responses those benchmarks had recorded as wrong. Of the 250 responses filtered out as wrong, twelve were cases where the model had actually got the physics wrong. In the rest, either the item itself was defective or the grader failed to recognize a correct answer.

> The team fixed the answer keys, removed the items it could not fix, and measured again. The scores rose sharply. Not all of the rise is owed to the re-grading, however. One benchmark lost nearly half its items, and to that extent the gain includes the effect of clearing away hard problems. The firmest piece of evidence in the study sits elsewhere: a benchmark that kept its items almost intact and had only its answer key repaired also gained a great deal. And the design of the audit itself was not flawless either, which the paper writes down in its own appendix.

> No model's measured error rate can fall below the defect rate of the test paper. The better a model gets, the more the errors left on the scoreboard belong to the paper rather than to the model. The same question carries over to the score tables an organization studies when it weighs whether to adopt AI. Who reviewed those answers, what is the defect rate, and has anyone written that number next to the score?

<!-- stat-card -->
**12** — model errors among the audited wrong answers — Out of 250 responses recorded as wrong. The other 238 came from the test paper

<!-- stat-card -->
**143** — cases where the item itself was defective — Out of the same 250. The problem statement or the answer key was wrong

<!-- stat-card -->
**61.0 → 87.2%** — score on the benchmark where only the answer key was fixed — CMT-Benchmark. Its item count fell only from 50 to 49

<!-- stat-card -->
**0** — open theoretical physics problems solved by an agent setup alone — Saturation is a claim confined to closed-form, problem-set items

## Recounting the 250 wrong answers

The question put by a paper posted to arXiv on 11 September 2026 is a short one. Are frontier models really unable to do physics? The place the question comes from is just as plain. Recent models scored low on widely cited physics benchmarks, and those scores circulated as an impression that physics is still hard. The paper, which carries 51 authors, does not set out to overturn that impression. It opens up the place where the scores were made. Responses the benchmarks had recorded as wrong were pulled out one at a time and graded again by people.

The team had its reasons for doubting those scores. The paper's introduction first sets down what had been happening in mathematics over the same stretch of time. Report after report described frontier models, and the agents built on top of them, contributing new proofs and solutions to open mathematical problems, and the introduction lists those cases. Even so, the paper draws a line: none of it accounts for the physics scores. Physics adds the work of building a model, abstracting, and settling on which assumptions to hold. The mismatch the introduction treats as decisive lies elsewhere. Physicists who have used these models in their own research report capabilities that do not square with the benchmark scores. That is the spot the paper's central question came from.

The data auditors who did the reviewing number 39, and most of them are physics doctoral students. Twelve more people are listed separately as physics advisors, whose role Appendix G describes as discussing the physics of their own subfields and vouching for the graduate students as auditors. The two lists are not exclusive, however. Cross-check the 39 auditors against the 12 advisors and five people turn up on both. The body of the paper describes the group only as "a team of physicists, primarily based at Yale University." Some of the authors are not physicists, so rendering the study as "51 physicists reviewed it" gets the head count and the roles both wrong.

### 1.1. The denominator comes first

The figure from this paper most likely to be misquoted is 250. It is not the total item count. The audit run across four benchmarks covered 502 responses in all, and 252 of those were scored correct and never reached an auditor. What people looked at again were the remaining 250 recorded as wrong. Every proportion that follows should therefore be read with "of the 250 wrong answers" attached to it. A sentence saying that 95% of physics problems are defective is one this study never wrote.

How the sample was chosen carries a caveat as well. Across the four benchmarks, the audit was narrowed to items on which every attempt by one model had been scored wrong. That choice cut the burden of hands-on review, and the paper records it in §2.3. So these 250 are not a random sample but a sample tilted toward what looks hard. The defect rates below, then, are not the defect rates of the benchmarks as a whole.

The number of attempts allowed varied by benchmark too. Appendix B.3 shows that HLE-Physics items were attempted up to five times each, with tools permitted only on the fifth attempt. PHYBench allowed up to five attempts and no tools. PRISM-Physics and UGPhysics gave each item a single attempt. Items missed five times running and items missed once thus sit together inside the same 250. What an auditor saw on screen was also not every response to an item, but one stored response and the final binary verdict the original grader had issued. On top of that, this audit run is a separate run from the one that produced the pre-audit scores in Table 1. The selection rule and the response budget both differ, and the paper insists that the attribution counts in Appendix C not be read as a reconstruction of the Table 1 scores.

### 1.2. Three kinds of wrong

The part of this method that actually earns its keep is not the arrows but this classification. For each wrong answer, the auditors sorted the responsibility for the error into one of three kinds. The paper writes the definitions out itself, and letting the names drift would collapse the argument, so this article holds to the paper's own three labels.

- **Model error**: the problem is well posed and the reference solution is correct, but the model under test gives an incorrect answer. In the paper's words, "only these count as genuine model errors."
- **Grader error**: the problem and the answer key are both sound and the model gives a correct answer, but the evaluator marks it incorrect.
- **Benchmark error**: the problem statement or the reference solution is itself defective. A wrong answer key, inconsistent conditions, ambiguous wording and a missing assumption all land here.

Sorted and counted, the 250 came out as 143 benchmark errors and 95 grader errors. Twelve were cases where the model had actually got the physics wrong. Add the first two together and 238, which is 95.20% of the re-graded wrong answers, sat on the test paper's side rather than the model's. Broken out by benchmark, the shape of the breakage also turns out to differ from one to the next.
