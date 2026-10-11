---
title: Did DeepSeek Skip Its Safety Tests, or Just Not Report Them?
subtitle: SemiAnalysis counted all 857 model releases from nine Chinese AI companies, and thirty-one of them carried a safety test result
date: 2026-10-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Did DeepSeek Skip Its Safety Tests, or Just Not Report Them?

_SemiAnalysis counted all 857 model releases from nine Chinese AI companies, and thirty-one of them carried a safety test result_

## Executive Summary

> [!callout]
> This article reads the China AI safety report SemiAnalysis published on October 8, 2026, together with the charts the report shipped alongside its prose. One figure travelled further than the rest. Of the 857 model releases that nine Chinese AI companies put out between 2021 and September 15, 2026, thirty-one came with a safety test result published by the developer.

> Three things hold up on inspection. First, the figure cannot name a culprit. Open the chart that lists all nine firms and DeepSeek's disclosure rate is nearly double the overall average, while Alibaba's release count is a denominator the report itself describes as counting "every Qwen size and snapshot." The report itself calls those per-company rates no more than a guide. Second, what this census tallied is documents, and some of the document fields are empty. Thirteen releases sit apart: ten where the developer said it had evaluated the model but published no number, and three known only from press or investor records. And for eighty-two releases the date that decides whether something was "disclosed at launch" is not established, so they drop out of the quarterly chart. Third, the disclosure rate is not this report's conclusion but its evidence. The conclusion is about institutions. Of the nine instruments the report lists as binding, not one is triggered by a model's capability or by the compute used to train it.

> Everything above is what the report records. What follows is this article's reading. Outside China, this article could confirm only three regimes that switch on at capability or compute, and of those three only California writes publication of evaluation results into statute. Korea requires submission to the ministry, and the EU requires submission in law while a voluntary code of practice adds a summary made public "to the extent necessary." So almost no jurisdiction yet turns the thing this census counted — a result written next to a model's name in a document anyone can open — into a rule. This article does not rule on whether Chinese models are safe or dangerous. That is the judgment the report declined to make.

<!-- stat-card -->
**9** — releases where the result was there at launch — 1.1% of 857 model releases. Thirty-one (3.6%) carry a result at any point

<!-- stat-card -->
**813** — releases with no disclosure of any kind — 94.9% of 857 model releases. This answers a different question than 96.4% does (section 2)

<!-- stat-card -->
**82** — releases dropped from the quarterly count for want of a confirmed date — Out of 857 model releases. It appears only in a chart footnote (section 4)

<!-- stat-card -->
**0** — obligations triggered by model capability or compute — Out of the 9 binding rules the report tabulates. The denominator here differs from the three cards above (section 5)

## The census opened all 857 releases one row at a time

The report went out on October 8, 2026. The byline carries three names, Mark Chen, Doug and Dylan Patel, while the page's author meta tag lists only Mark Chen. It lands twenty-six days after Dario Amodei argued in an essay for deliberately slowing the pace at the frontier, and immediately after the American and Chinese heads of state put superintelligence on a formal agenda. We covered the Washington side of that in [a piece on who audits the superintelligence accord](/blog/white-house-superintelligence-accord-audits/en/). The report asks one question. What is China actually doing?

To answer it the authors built two original datasets. One counts, exhaustively, every model release from nine Chinese AI companies between 2021 and September 15, 2026. The other codes 102 expert and official texts and 65 executive statements from the same period. The widely quoted figure comes from the first. Before repeating that figure, this article looks at the rule that produced it, because every rate further down rests on the definitions fixed in this section.

### 1.1. Nine companies and 857 releases were fixed first

Nine companies are in scope: four hyperscalers (ByteDance, Alibaba, Tencent, Baidu) and five startups (DeepSeek, Moonshot, Zhipu/Z.ai, MiniMax, StepFun). The denominator is 857, split into 741 product models and 116 research models. Each row carries a first public date, a weights status, a license and a source. So before it commented on Chinese AI, this census built a registry where there had been none.

Three kinds of material were searched: developer model cards, release notes and technical reports. Nothing outside those three. That choice sets the size of the number, a point that returns in sections 4 and 6.

### 1.2. What gets to count as a "result" is the whole census

The bar for counting one is narrow. There has to be a quantitative or substantive finding about harmful output, jailbreaks, toxicity, privacy, refusal or dangerous capability, and that finding has to be tied to the model's name. The report puts it this way.

"Our standard is strict: a result means a quantitative or substantive finding on harmful output, jailbreaks, toxicity, privacy, refusal, or dangerous capability, tied to the named model. Statements that a model was 'safety-trained' or 'evaluated' do not count. A flagship model's result is not extrapolated to other sizes or snapshots."

Split that into what counts and what does not and it comes out as follows. The right-hand column of this table is what returns in section 2 as thirteen releases.

| Field | Counts | Does not count |
| --- | --- | --- |
| Content | A number or substantive finding on harmful output, jailbreaks, toxicity, privacy, refusal or dangerous capability | A statement that the model was "safety-trained" or "evaluated" |
| Attachment | A result tied to the name of the model in that release | A flagship result carried over to other sizes or snapshots |
| Material | Developer model cards, release notes and technical reports | Anything outside those, and any third-party evaluation |

************

The counting rule from the report's prose, split into three fields. Because of the third row, third-party evaluations never enter this statistic. What measuring from the outside actually looks like is set out in [our piece on testing Chinese models' refusal behavior externally](/report/guardrail-threat-model-referent-2026-09/en/).

### 1.3. The report put two caveats on its own figures

Two caveats sit in the same paragraph. The first is about scope: the report writes that "not found" is bounded by the material checked and does not mean "not tested." The second is about comparison. Companies name model variants at different granularity, and the report says plainly that Alibaba's 238 releases count every Qwen size and snapshot one by one. That makes the per-company rates indicative only.

Neither caveat is this article's discovery. The report wrote them first, and the coverage already picked them up. One English outlet wrote that the census measured transparency rather than proving the absence of safety work; another wrote that the report published no comparable figure for US developers. So this article does not stop at rediscovering those two sentences. Two more fields are worth opening: what the opposite of 3.6% actually is (section 2), and how far the date column that holds the figure up is filled in (section 4).

## Thirteen releases sit between 3.6% and 94.9%

This is the sentence that travelled furthest. Of 857 releases, developers published safety test results for 31, or 3.6%. The sentence that usually follows it is the one that goes wrong: that the remaining 96.4% disclosed nothing. What the report puts under "no disclosure of any kind" is 813 releases, 94.9%. Thirteen releases sit between the two numbers, and those thirteen are what this section is about.

The report splits 857 into six buckets, and each bucket asks something different. Is there a result? When was it there? Can the result be pinned to this model? Is there only a claim? Is there no developer document at all?

| Bucket | Releases | How the report labels it |
| --- | --- | --- |
| Disclosed at or before launch | 9 | The result could be read at launch |
| Documented only afterwards | 16 | Median lag 42 days, longest 349 |
| Timing or model match unresolved | 6 | A result exists, but not when, or not which model it belongs to |
| Subtotal — a result at any point | 31 | 3.6% of 857 |
| Claim of evaluation, no numbers | 10 | The developer says it evaluated; no figure is given |
| Known only from press or investor records | 3 | No obtainable developer document |
| No disclosure of any kind | 813 | 94.9% of 857 |

************************

The six buckets from the report's prose. 9 + 16 + 6 = 31, and 31 + 10 + 3 + 813 = 857. The 3.6% and the 94.9% are not each other's complement: the first answers "is there a result?", the second answers "is there nothing at all?"
