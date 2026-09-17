---
title: The AI companies that would inspect each other have no ledger to inspect
subtitle: OpenAI, Anthropic and Google have been discussing a FINRA-style pre-release review body since July, and the record-keeping duty Europe already wrote into law is missing from the design
date: 2026-09-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI companies that would inspect each other have no ledger to inspect

_OpenAI, Anthropic and Google have been discussing a FINRA-style pre-release review body since July, and the record-keeping duty Europe already wrote into law is missing from the design_

## Executive Summary

> [!callout]
> This article reads the AI standards body that OpenAI, Anthropic and Google are trying to build against the thing that actually lets the original, the Financial Industry Regulatory Authority, examine a broker-dealer. The three companies have been meeting as a working group since at least July; that was reported in September, and OpenAI confirmed it two days later. Most commentary treats the story as either a backroom cartel or a step forward for self-regulation. We skip that frame and ask one question instead. In finance the ledger the referee reads came before the referee. Does the blueprint now being drawn have anything in that place?

> We obtained all five public design documents in full and put the same question to each. None of them answers it. The most statute-like of the five says that examiners will audit developer practice from data selection through post-deployment monitoring, and then never says what evidence of that practice the developer has to create, in what form, or for how long. Another limits in advance the documents an auditor may see, naming model cards as the example. In a third, the only sentence that commands anyone to retain anything is a prohibition aimed at evaluators. The finding has to be stated narrowly to stay true. The idea is not missing from the field: **in Europe these same companies comply with a technical documentation list set by law, and the item drops out only in the blueprint they are drawing in the United States.**

> The original side of the analogy is more complicated than that. Building that layer cost finance about ten years and an annual outlay approaching four and a half times its own estimate, and in March 2026, four years into full industry operation, the SEC approved deleting records more than three years old. So the argument here is not that AI should build the same thing. It is that the most expensive and most contested layer is being left unresolved while the body gets built first. For developers in Korea the last two sections are where this lands. The AI Framework Act already uses the same 1026 threshold the American design papers use, and the clause that tells anyone to keep records is not on that track.

<!-- stat-card -->
**~10 years** — Time finance took to assemble the records its referee reads — Consolidated Audit Trail rule adopted July 2012, industry-wide compliance completed December 2022

<!-- stat-card -->
**~4.5x** — How far that record layer's annual budget ran past the original estimate — $55 million estimated in 2016 against an actual approaching $250 million; cumulative cost near $1 billion

<!-- stat-card -->
**0** — Record-keeping clauses found across the five design documents — All five checked against the full original text. Annex XI of the EU AI Act, held as a control, has them

<!-- stat-card -->
**67%** — Material safety framework changes the same companies' own accounts left unverifiable — Oxford study: 257 of 383 material changes across eight version pairs. 95% CI 0.62 to 0.72

## A July proposal, a September confirmation

On 14 July 2026 Demis Hassabis of Google DeepMind posted a personal essay titled A Framework for Frontier AI and the Dawning of a New Age on X and on a personal newsletter. In an Axios interview the same day, Hassabis said the hope was to have the body running within the year. The skeleton of the proposal is FINRA: an industry-funded private body that examines broker-dealers under the supervision of the Securities and Exchange Commission, with that structure carried over to frontier AI as it stands.

The essay sets out five design elements. An industry-funded self-regulatory organisation is established under the oversight of a federal agency. Its board includes “independent leading technical experts and open-source representatives”. Developers voluntarily submit models for safety testing before release, and once the regime proves effective and robust the submission becomes mandatory. Testing covers high-risk areas including cyber-offensive capability and biological risk, and agentic tests look for attempts to circumvent safeguards or signs of deception. Coverage extends to every model designated frontier-class, “no matter their country of origin or whether they are open or closed”. On money, the essay puts the burden on industry: the work needs top technical talent and compute, so funding “would need to be substantial and likely mostly come from industry”.

That one clause is everything the essay says about the board. The provision that independent directors must outnumber industry directors belongs to another design paper, discussed below, and not to this essay. The 1026 FLOP compute threshold so often quoted alongside it is not here either. The essay leaves frontier-class designation to **thresholds on a benchmark suite that the standards body sets and refreshes periodically** rather than to a compute figure. It also says who writes those benchmarks. The first round is “developed in consultation with Frontier Labs”, and only once the body has its own technical capacity does it build private test items of its own to guard against overfitting. The refresh cycle starts at roughly quarterly, and benchmarks that go stale or saturate are retired and replaced.

The wording of the pre-submission clause matters. The essay says developers would “voluntarily share models with the Standards Body for review up to 30 days before release”. That reads as a ceiling of thirty days rather than a floor of thirty days. Section 4 sets the thirty days beside the review windows evaluators have actually received.

Two months later the proposal turned out to be moving inside meeting rooms. On 13 September, Leo Schwartz of The Information reported that a working group from OpenAI, Anthropic and Google had been meeting regularly since at least July. Attendance is at the executive level below chief executive, and the subject is a body that would set safety benchmarks and rules. OpenAI confirmed the meetings publicly two days later, on 15 September. Chris Lehane, the company's global policy chief, said at a Washington briefing that the three had been in discussion for weeks, and the same briefing confirmed that the starting point was the July proposal from Hassabis.

This is a story with no charter and no press release yet. Separating what is a published document from what rests on anonymous sourcing keeps the rest of the article steady. The table below is that separation.

| Grade of evidence | Content | Source |
| --- | --- | --- |
| Officially confirmed | OpenAI acknowledges discussing safety matters with Anthropic and Google. The idea started with the July proposal from Hassabis | Lehane briefing, 2026-09-15 |
| Published proposal | Submission up to 30 days before release, a board including independent technical experts and open-source representatives, industry funding, cyber, bio and deception testing, frontier-class designation by benchmark threshold | Hassabis essay, 2026-07-14 |
| Published proposal | Google's FARO concept, Anthropic's framework, OpenAI's Frontier Governance Framework | Public documents from each company, 2026-05 to 06 |
| Anonymous sourcing | Working group meetings since July, an account of Amodei leading them, a report that Altman told an internal all-hands the industry should build this without government help | The Information, 2026-09-13 |
| Anonymous sourcing | Reports that Treasury Secretary Bessent developed a FINRA-style independent regulator concept and that Chief of Staff Wiles is reviewing it, and that a draft White House executive order stalled on internal disagreement | Secondhand from Bloomberg and The Information reporting |

Table 1. What is confirmed in this story and what is merely reported. The body below states the first three rows flatly and cites the last two only as things that have been reported.

As of the publication date, 17 September 2026, this body has no name and no charter. Membership, funding, the supervising agency and the composition of a first governing council: not one of them is fixed in a public document. So this is not an article about what has been decided. It is an article about what the blueprint contains and what it leaves empty, before anything is decided.

## What FINRA leans on when it examines

Borrowing an analogy means looking at how the original runs. At the end of 2025 FINRA oversaw 3,184 member broker-dealers and 639,723 registered representatives. Staff numbered about 4,200 as of 31 December 2024, and net revenue in 2024 was $1.6849 billion, 60% of it regulatory revenue. Fines are accounted for separately under a policy of keeping them out of capital planning. The examination count appears only as a formula, more than 2,000 a year, and no official yearly table could be confirmed.

On size alone this is a large institution. Size is not why it can put a finger on a member firm's violation. It can do that because **what has to be sitting there when an examiner walks in was settled before the body existed**. SEC Rules 17a-3 and 17a-4 are that settlement. Rule 17a-4 requires blotters, general ledgers and the rest of the basic books to be preserved for at least six years, with the first two years in an easily accessible place; order tickets and many trade-related records for at least three years; and customer account records for a further six years after the account closes. Retention period, retention format and retrieval speed are all written into the text of the rule.

What we are looking for here is the part on format. Before the 2022 amendment the default was preservation on non-rewriteable media with an index; the amendment added an audit-trail alternative. A firm choosing the alternative needs an electronic recordkeeping system that provides four things. Every modification and deletion made to a record. The date and time of the creation, modification or deletion. The identity of the individual who did it. And the fourth is better quoted than summarised: “will permit re-creation of the original record if it is modified or deleted”. The information needed to bring back the original record after it has been changed or removed. The records and their audit trails must also be downloadable and transferable immediately in both a human-readable form and a machine-processable form.

[Interpretation] The requirement is not that a change history exist. It is that the change history alone be enough to restore the prior state. Which is another way of saying that what changed has to be knowable without relying on the account given by whoever changed it. The measurement in Section 4 captured precisely that absence of recoverability.

Firm-level books are one thing; seeing across a whole market is another. After the flash crash of 2010 the SEC decided to pull order flow from the entire market into one place, the Consolidated Audit Trail. Rule 613 was adopted on 11 July 2012. Approving the plan of operation took another four years and four months, Phase 1 reporting began in June 2020, and industry-wide compliance including customer and account information was completed in December 2022. **Roughly a decade passed between adopting the rule and getting the whole industry reporting.** At full operation the system takes in an estimated 58 billion data points a day.

Cost grew along with the calendar. The cleanest statement of it is a sentence SEC Commissioner Hester Peirce wrote on 17 April 2026: “the estimated annual budget of $55 million in 2016 expanded to, until very recently, an actual annual budget of almost $250 million”. On cumulative cost, then-Commissioner Mark Uyeda wrote in September 2023 that “The cumulative costs for CAT may soon be approaching a billion dollars”. The same statement quotes a comment letter putting 2023 operating cost at about 5.2 times the original plan estimate, and that quotation carries an ellipsis inside it. That is why the multiple itself stays out of this article and only the year-on-year figures from Peirce are used.

### 2.1. Four years after it was built, finance is winding it back

Read only this far and the story sounds like a case for copying finance. The institution this article holds up as a control has been moving in the opposite direction for four years. In September 2025 SEC Chairman Paul Atkins called the operating cost of CAT implausibly inflated and cut the annual run rate through a conditional exemptive order. On 27 March 2026 an amendment to the plan of operation was approved. The SEC press release describes saving $50 million to $70 million a year against the 2025 budget, and permitting the plan processor to “delete certain CAT data, including all CAT data older than three years”, which means **deleting every CAT record more than three years old**. Intermediate lifecycle linkages no longer have to be generated unless regulators specifically ask.

Three weeks later, on 17 April, the SEC issued a concept release and opened comment on rethinking the structure of market surveillance itself. The question Commissioner Peirce asked that day cuts against this article's own control: “Could the Commission or the self-regulatory organizations continue to conduct effective market surveillance if the CAT were eliminated?” The statement goes on to say that “the very concept of a massive surveillance database may simply be incompatible with the principles of civil liberty”.
