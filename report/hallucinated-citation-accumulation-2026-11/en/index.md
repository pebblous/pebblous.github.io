---
title: Hallucinated Citations: The Model Gets Fixed, the Papers Stay As They Are
subtitle: The citation-fabrication habit was ruled expired after 31.7 months, but 98.4% of the 2,810 papers with confirmed fabrications have had no correction at all
date: 2026-11-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Hallucinated Citations: The Model Gets Fixed, the Papers Stay As They Are

_The citation-fabrication habit was ruled expired after 31.7 months, but 98.4% of the 2,810 papers with confirmed fabrications have had no correction at all_

## Executive Summary

> [!callout]
> The finding that chatbots invent most of the scholarly citations they produce has been ruled expired. A Stanford team re-measured fifty widely cited results about large language models and classified twenty-two of them as expired. Citation fabrication, though, was not one of the quick deaths. It took thirty-one months to go out, and the estimated expiry date falls at the end of April this year.

> While that was happening, fake references accumulated in the published record. Three audits published this year counted that stock, reported three different numbers, and all three are correct. One counts references confirmed as fabricated, one estimates the number of papers affected, and one estimates how far the rate rose above a pre-LLM baseline. Collapse them into a range — "anywhere from a few thousand to well over a hundred thousand" — and the story becomes false at that moment.

> That stock barely shrinks. Most non-existent citations clear repository moderation and go up as written, most of the ones present in a preprint survive into the published version, and almost none of the papers with confirmed fabrications have been touched by a publisher. Rather than being erased, a fake reference settles into scholarly search as a record of its own and gets cited again. Fixing a model and fixing a record do not happen at the same speed.

<!-- stat-card -->
**98.4%** — Papers with no publisher action — Of the 2,810 papers found to contain fabricated references, the share that had received neither a correction nor a retraction as of the audit

<!-- stat-card -->
**85.3%** — Hallucinated citations that reach the published version — The share that survived unchanged when 2,241 bioRxiv preprints carrying such references were tracked through to publication

<!-- stat-card -->
**31.7 months** — How long citation fabrication lasted — The median across the twenty-two expired findings is 14.7 months. This habit lived more than twice that long

<!-- stat-card -->
**10.2 → 21.3%** — Two fabrication rates for one model — The first uses every response as the denominator; the second drops the refusals, which were more than half, and counts only the answers given

## Of all the habits, citation fabrication was among the last to go out

Citation fabrication has an expiry date stamped on it too. The document behind that date is an analysis titled **"The shelf life of LLM findings,"** posted on 2 November by Owen Queen and James Zou of Stanford, and it is a lab blog post rather than a journal paper. It has not been peer reviewed. Nature **covered** it seventeen days later, on 19 November, and the news article says so in its own text: "the analysis was described in a blogpost and has not been peer reviewed." These figures are therefore not Nature's research findings. That distinction matters again in Section 5.

The design is simple. The team picked fifty widely cited findings about language models and re-ran each original experiment on twenty models released between July 2024 and September 2026. For each finding, the effect reported in the original paper is set to 1, and the value measured on current models is expressed as a fraction of it. A finding counts as **expired** when that fraction stays below 0.2 through September this year. In other words, a result is treated as over once it has fallen under a fifth of its original size and stayed there.

The tally across the fifty: **twenty-two expired, seventeen weakened, eight unchanged, and three stronger than before**. The three that grew were a model acting as a judge rating its own output more highly, a model praising whatever preference the user had stated, and a model favouring particular numbers when asked to "pick one at random." Habits that got fixed and habits that hardened sit in the same table.

### 1.1. "About 16 months" is not the lifespan of all fifty

The number travelling furthest from this analysis is the time to expiry: a mean of 15.7 months and a median of 14.7. That value, though, is **computed only over the twenty-two confirmed expiries**; the twenty-eight findings still alive are not in the denominator. The authors say so themselves. Their words: **"it is not an expected lifespan for all findings."**

Change the denominator and the number changes with it. Recomputed as a survival analysis that includes the findings not yet expired, the median lifespan rises to **36.6 months**. The estimated share expired one year after publication is 16%, and two years out it is 39%. Within one dataset, the single word "lifespan" splits into two values more than twice apart. Neither is wrong; they count different things. The argument this report makes throughout turns up in its own source material in the opening section.

The bars below lay out the twenty-two expired findings in order of lifespan. The 36.6 in the bottom row is the longest-lived individual item, and it is a different statistic from the 36.6-month median survival just described. Because the digits match, this is the pair most likely to fuse when the numbers get copied along. Where citation fabrication stands among the rest shows up here first.

The bars are per-finding values from the released lifespan.csv. The 36.6 in the bottom row is the longest lifespan among the expired items; the 36.6-month median from the survival analysis is a different value computed over all fifty. Matching digits do not mean matching denominators.

### 1.2. The 2023 "55%" stayed alive for 31.7 months

Open the per-finding table and the twenty-two lifespans spread from 1.4 months to 36.6. The quickest to go was the report that reasoning models overthink easy maths problems. It expired in 1.4 months, and the sign of the effect flipped negative — current models began moving in the opposite direction from the one the original paper described.

Near the other end sits citation fabrication, at **31.7 months**, second longest of the twenty-two and more than twice the median. The original finding is the Walters and Wilder paper published in **Scientific Reports** on 7 September 2023, which reported that **55% of the bibliographic citations** produced by GPT-3.5 were fabricated, against 18% for GPT-4. The widely quoted "55%" comes from that table.

It also went out slowly. At the replication, same-generation models produced 58.6%, reproducing the original finding closely, and six months after publication the effect still stood at 1.02 times its original size. It fell to 0.827 at twelve months and 0.441 at twenty-four, and the September measurement this year put it at 0.031. The estimated expiry date is **29 April 2026**. That date is the reference point for the rest of this report.

> [!callout]
> The authors state the limits of the analysis up front. The fifty findings are not a random sample of the literature, and the twenty models on the panel were selected with cost and size in mind. Nothing here supports a claim as broad as "44% of findings about language models expire." This report uses only one finding's trajectory and its single expiry date.

Our piece nine days ago on [AI text detectors](/blog/ai-text-detector-llm-turnover/en/) read the other side of this: **the instrument goes stale**. When a new model generation arrives, the verbal habits a detector learned no longer hold, which is a problem of measurement. This report stands on the far side of that. Measurement is done, and the question is what happens to **the output already in print**. Here, the fact that models got better is where the story starts.

## Measure it another way and one in three answers from 2026 models is still fabricated

Read only the expiry verdict from Section 1 and the story ends there. But a separate study measured the same habit a different way in the same year, and it came out quite differently. Stranger still, the researcher who led it is the first author of the large-scale audit that Section 3 covers.

The study is a preprint posted to arXiv on 14 September, **"Biomedical Reference Generation Remains Unreliable across 26 Large Language Models,"** first-authored by Maxim Topaz. Twenty-six models from eight developers were given sixty-nine biomedical passages and asked to **supply the one reference missing** from each. The passages span ten clinical domains, and inference ran in April and July this year, yielding 24,518 responses. This document has not been peer reviewed either.

Responses were graded four ways: a real paper retrieved, partially correct bibliographic fields, a non-existent paper invented, and a refusal to answer. Across the whole set, **55.4% were fabricated** (13,580), 30.9% verifiable (7,581), 12.0% partially matching (2,948), and 1.7% refusals (409). Narrow it to the five models first released in 2026 and **fabrication is still 35.3%** (95% CI 29.2–41.8). Responses with every bibliographic field correct came to only 31.8% among those five.

### 2.1. The two figures look contradictory because the studies set different tasks

Set the two numbers side by side and one of them looks wrong. The task each study set the model, though, is not the same. The analysis in Section 1 reproduced the prompt from the 2023 paper: write a literature review of roughly 2,000 characters and attach at least five references. That asks whether the habit of inventing citations while writing is still present. The measurement in Section 2 asks the opposite: retrieve one real paper that fits a specific claim — a position where the model has to produce a bibliographic record with neither search nor lookup.

|  | Queen and Zou analysis (2 Nov) | Topaz team, 26-model measurement (14 Sep) |
| --- | --- | --- |
| Task set | Write a literature review and attach references | Supply the one reference missing from a passage |
| What it measures | Whether the 2023 effect still holds today | The fabrication rate of current models itself |
| Denominator | The size of the effect in the original paper | 24,518 model responses |
| Verdict | Expired (0.031 of the original effect) | 35.3% fabricated, even in 2026 models |
| Type of document | Lab blog post, not peer reviewed | arXiv preprint, not peer reviewed |

Two instruments using the same words to measure different things. Neither supports "models have stopped doing this" or "nothing has improved."

On the easier task the habit has gone out; on the harder one it is still there. That is why "the latest models do not invent references" and "nothing has improved" are equally unsupported. Move the percentage without the task it came from and both studies end up misquoted.

### 2.2. One model's fabrication rate is both 10.2% and 21.3%

Per-model values in this measurement ranged from 10.2% to 98.4%. The model that scored the lowest 10.2%, however, **refused 52.1%** of the prompts it received. Counting every "I don't know" in the denominator gives 10.2%; counting only the responses that actually produced a reference gives **21.3%**. Whether a refusal counts as a success makes a twofold difference. Among models that refused less than 3% of the time, the lowest rate was 13.0%.

One number collides here. The 98.4% in this paragraph is the fabrication rate of a single model. The 98.4% in the stat card at the top of this report, and again in Section 4, is the share of the 2,810 papers with confirmed fabrications that received no publisher action. The two have nothing to do with each other. That the same figure appears twice is coincidence, but it is also a live demonstration of what happens when a percentage travels on its own.

The authors put this in their conclusion in as many words: **"no single rate characterizes language models as a class; any aggregate reflects the models it pools."** That sentence doubles as a request not to build league tables out of these numbers.

> [!callout]
> The limits the authors list point the same way. The study describes the set it tested rather than the models actually in use; sample depth varies by model, so cross-model comparison stays descriptive; decoding settings were not standardised; and training-data recency is entangled with model capability. So 35.3% is not "what 2026 models can do" but "what these five models produced under this design."

Neither source has been peer reviewed. One is a blog post and one is a preprint. Folding both into "unreliable," though, hides the other half of the picture. The Section 1 analysis released its code, its raw data and its per-finding values, and the Section 1 numbers in this report were taken from that raw data directly. Had it waited for review, the models would have turned over again and the result itself would have aged out. The tension between fast informal evidence and the slow formal record follows this subject everywhere.

There is more than one way for a citation to break. In the [citation-rewriting experiment](/report/llm-citation-rewrite-dissent-loss/en/) we covered in September, the stance of a real paper changed: half the places where a citation had been written as disagreement no longer read as disagreement. Here, papers that never existed appear.

## Three audits counted the fake references and reported three different numbers

Guillaume Cabanac, a computer scientist at the University of Toulouse, once came across a citation to a dentistry paper listing him as an author. He had written no such paper, and the DOI attached to it led nowhere. A paper that did not exist was sitting in someone else's reference list under the name of a person who does. How many entries like that are in the scholarly record right now is a question three teams each tried to answer this year. All three arrived at entirely different numbers.

The figures in circulation are **4,046**, **more than 110,000**, and **146,932**. Bundling them into "somewhere between four thousand and a hundred and forty thousand" gets all three wrong. The first is a count of **references confirmed as fabricated** against four databases; the second is an **estimated number of papers**, obtained by applying a sample rate to a year of global output; the third is an **estimated excess count** above a pre-LLM baseline. The units split between references and papers, one value is confirmed and two are estimates.

|  | Lancet audit | Nature × Grounded AI | Zhao team |
| --- | --- | --- | --- |
| Population | PMC Open Access subset | Journal articles, book chapters and conference papers from five publishers | arXiv · bioRxiv · SSRN · 10% sample of PMC |
| Period | 1 Jan 2023 – 18 Feb 2026 | 2025 output | 2025 (extrapolated from a monthly estimate) |
| Scale | 2,471,758 papers · 125,615,773 structured references | More than 4,000 papers | 2.5 million papers · 111 million references |
| Unit counted | References confirmed as fabricated | Papers estimated to carry at least one invalid reference | Excess lookup failures above the baseline |
| Method of judgement | Fabricated only if absent from all four of PubMed, Crossref, OpenAlex and Google Scholar | Human review of the 100 highest-risk-scoring papers | No per-reference verdict; the excess over a pre-LLM baseline is read as a population-level signal |
| Result | 4,046 references (2,810 papers) | More than 110,000 papers (estimated) | 146,932 (estimated) |
| Limit stated by the authors | Precision was measured; recall was not | An extrapolation from a sample rate to a full year | A conservative estimate, likely a lower bound |

************

These are answers to three different questions, and reading them as competing estimates makes them contradict each other. The "2.5 million" in the Lancet audit and the "2.5 million" in the Zhao study are entirely different populations, and placing them in one paragraph will almost always fuse them.

### 3.1. The strictest count searched all four indexes

The most conservative of the three is the audit published in The Lancet. It is a report by the Topaz team, in **Lancet volume 407, issue 10541, pages 1779–1781**, dated 9 May, and it swept 2,471,758 papers from the PMC Open Access subset covering January 2023 to mid-February this year. Of the 125.6 million references, the ones carrying a PMID and therefore actually checked numbered **97.1 million**, or 77% of the total. The remaining 23% are web documents, books and grey literature, which index lookup cannot reach.

The lookup ran against four sources: PubMed, Crossref, OpenAlex and Google Scholar. A reference was confirmed as fabricated only when all four came back empty. That left **4,046 references**, carried by **2,810 papers**. A validation in which three independent assessors re-examined 500 of the flagged items put precision at 91% (Fleiss κ = 0.71). The authors also state one side of the design outright: **"this design estimates precision but not recall."** They measured how likely a flagged item is to be genuinely fabricated, and did not measure how many were missed.

Of the 2,810 papers, **2,564 — 91% — carried only one or two** fabricated references, while 246 carried three or more. Most of these look less like papers with invented bibliographies than papers where a line or two went unchecked. By article type, **reviews had a fabrication rate 57% higher** than other types (16.7 per 10,000 papers against 10.6, p<0.0001). That the rate is highest in the genre other papers mine for material connects directly to Section 4.

### 3.2. "65" is not 65% of the sample

In the audit Nature ran with Grounded AI, the order in which the numbers are read is what matters. More than 4,000 items of 2025 output from five publishers were scored for risk, and the **top 100** went to human review. Of those, **65** were confirmed to contain at least one invalid reference. Translating that into "65% of the sample had fake citations" is simply wrong. The 100 are the highest-risk end only; against the 4,000 the rate is 1.625%. Applying that rate to the roughly 7 million scholarly items published in 2025 produces the extrapolation of **more than 110,000 papers**.

Joe Shockman, co-founder of Grounded AI, calls entries like these **"Frankenstein citations"** — a real author and a real journal stitched together with a paper that was never written. The reference carrying Cabanac's name was exactly that shape.

### 3.3. One team declined to judge individual references at all

The Zhao team's design is of a different kind. It is a collaboration between Cornell, UCLA, Tsinghua and UC Berkeley, and Paul Ginsparg, who founded arXiv, is among the co-authors. They **do not rule any individual reference fabricated.** Instead they take the lookup-failure rate from the pre-LLM period as a baseline and read only the excess above it, as a population-level signal. The target is narrowed too: they look only at entries whose title does not exist. No paper and no author is named.

So **146,932** is not "fake citations found" but "the estimated excess above the baseline." It comes from per-repository estimates for a single month, August 2025, extrapolated to the end of the year, and the authors describe it in the text as conservative and likely a lower bound. The inflection point is mid-2024, roughly eighteen months after ChatGPT's release, and, as it happens, the same point the Lancet audit found in a different corpus.

The distribution did not match a few-bad-apples picture. Extreme papers, where more than half the references fail lookup, barely increased (0.102 percentage points on arXiv), while papers in the 0–10% band rose sharply (3.615 points on arXiv). The spread is wide and shallow. Journal tier does not sort it cleanly either: the bottom and top deciles are distinctly high and low, but with no consistent gradient between them, which leaves most mid-tier journals about equally exposed.

> [!callout]
> All three audits used language models somewhere in their own verification. The Lancet team used them for reference parsing and normalisation; the Zhao team used them to clean up entries left unmatched after index lookup. No human checks 100 million references by hand, so this is the obvious choice, and both audits verified precision separately on a human-reviewed sample. None of this discounts the results, but it is worth recording that the instruments measuring this problem rest on the same technology as the thing being measured.

Our May piece on [AI-written peer reviews](/report/iclr-2026-ai-peer-review-crisis/en/) was about who reviewed the manuscripts coming in. Our subject starts after review is over, with the text already published.

## The inflow is narrowing while the stock stays where it is

Every figure so far counts how much is there. The three numbers in this section ask something else: once an entry is in, **how far does it travel**? They come from three different points on the road from generation to permanent record. Taken one at a time each looks unremarkable; lined up, they form the spine of this report.

①, ② and ④ come from the Zhao team; ③ comes from the appendix of the Lancet audit. They sit on one road, but they do not follow one cohort.

### 4.1. The first gate stops very little

The Zhao team separately analysed 30,981 manuscripts rejected by arXiv. The rate of hallucinated citations in rejected submissions was 2.2%, about 4.5 times the rate in accepted ones, so moderation is not doing nothing. In the same analysis, though, **78.8% of non-existent citations passed that gate** and went up on the platform. Some are caught, and most go through. This figure is **specific to arXiv moderation**, not a score for repositories in general.

Per-repository rates show where screening exists and where it does not. As of August 2025: SSRN 1.91%, arXiv 0.39%, PMC 0.27%, bioRxiv 0.21%. SSRN runs about 4.9 times arXiv, and SSRN is a social science repository that does not screen submissions. Where the gate is weakest, the numbers rise first.

### 4.2. The second gate mostly lets them through as well

The same team tracked the next stretch of road. They took **2,241 bioRxiv preprints** containing references that failed lookup and followed them through to their published versions in PMC. Of the hallucinated citations present at the preprint stage, **85.3% remained in the published record**. More than five out of six survive peer review and copy-editing intact. The figure comes from the 2,241 papers tracked, not from preprints as a whole.

Why they slip through is not hard to work out. Reviewers read the argument and the methods. Checking whether the volume and page numbers on the twenty-seventh line of a reference list correspond to anything real has never been treated as a reviewer's job, and doing it means keeping four indexes open for several hours. This is the place where a machine started getting wrong a task no human was doing.

### 4.3. Once found, one or two papers in a hundred get acted on

The third number carries the most weight. Of the 2,810 papers in which the Lancet audit confirmed fabrications, **98.4% had received no publisher action** as of the audit: no correction, no retraction, no editorial notice. The first two gates at least caught something. At this stage, even what has already been confirmed mostly stays put.

The unit of measurement changes here. Errors on the model side are reported as a **rate**: a fabrication percentage, a drop of so many points year on year. Errors in the record accumulate as a **count**: 4,046 references, 2,810 papers. A count can rise while a rate falls, which is what happens when more people are using the tool. And a rate gets measured again next quarter, while a count stays exactly where it is until someone removes it.

### 4.4. Fake references end up indexed in scholarly search engines

What the Zhao team found while checking against Google Scholar is the most uncomfortable part of this section. Entries that correspond to no real paper and are **already cited by other papers** are increasing. A fake reference, once seated in a bibliography, is registered as a record in scholarly search engines, and the next person who sees that record cites it again. In the paper's phrase, these entries become **"part of the permanent record."**

The authors describe two amplification paths. One is the citation spread just described. The other is more direct: language models are frequently trained on the very open-access corpora they examined, so tomorrow's model learns today's hallucination. Hence the paper's warning that the phenomenon **"may begin to erode the mechanisms we have to detect them."**

> [!callout]
> The way in is narrowing, and there is effectively no way out for what is already inside. Seven months have passed between the estimated expiry date in Section 1 and this report's publication, and the share of the 2,810 papers that has been acted on is still 1.6%. Fixing models and fixing records were never the same person's job, and nobody has been assigned the second one.

## The most widely repeated figure travels without its denominator

The sentence that has travelled furthest in this story is "one in every 277 papers contains a fabricated reference." A correction is already attached to it. Nature's article of 8 May carries a correction added five days later, which reads: **"The study screened papers in the PubMed Central (PMC) Open Access database, not the whole PubMed database."**

The difference is not small. PubMed is an index of some 37 million records; the PMC Open Access subset is a much narrower collection of papers whose full text is openly available. The mix of fields differs, and so do submission practices. "One in 277" is a value from the latter, not from the biomedical literature as a whole. Strip out which set was counted and the rate starts asserting a different fact.

The pre-correction form did circulate. On 7 May the US library-sector outlet infoDOCKET ran the headline "One in 277 **PubMed-Indexed** Papers In 2026 Shows Fabricated References." How far that form spread is something this report did not count. We did not tally outlets, so we will not say "most coverage." What we verified is that a correction exists and that there is at least one instance of the erroneous form.

### 5.1. "12 times" — which series is that multiple from?

Figures from this one audit circulate in two separate series, and mixing them makes the multiple stop adding up. The first is the **paper series**: the share of papers containing at least one fabricated reference, which rose from one in 2,828 in 2023 to one in 458 in 2025 and one in 277 over the first seven weeks of 2026. That is 36.1 per 10,000 papers, 10.2 times the 2023 level. The second is the **reference series**: fabricated references per 10,000 papers, which sat near 4 throughout 2023, reached 51.3 in the fourth quarter of 2025 and 56.9 in early 2026.

The widely quoted "more than 12 times" belongs to the second series. The original wording is **"increased more than 12 times,"** and the subject is references per 10,000 papers. The two series carry different units. Since an affected paper holds 1.44 fabricated references on average (4,046 ÷ 2,810), 36.1 × 1.44 lands around 52, which sits comfortably beside 56.9. Write instead that "one in 277 papers rose 12-fold" and you have merged the two series in one sentence, and that sentence is true of neither.

| Series | Unit counted | 2023 | Early 2026 | Multiple |
| --- | --- | --- | --- | --- |
| Paper series | Share of papers with at least one fabrication | 1 in 2,828 | 1 in 277 | 10.2× |
| Reference series | Fabricated references per 10,000 papers | about 4 | 56.9 | "more than 12 times" in the original |

The two rows have different denominators. Both draw on the PMC Open Access subset, and the 2026 values cover the seven weeks from 1 January to 18 February.

### 5.2. The objections belong here at the same weight

A published objection is attached to that multiple. A letter from Mousa and Mahmoud-Katheer in the same journal disputes the growth figure on the grounds that recall was never validated. It is a letter rather than a correction, and that distinction should hold, but the substance of the objection is the limit the audit's own authors stated first. If precision was measured and recall was not, the possibility that the audit caught a different share each year is folded into the multiple. The material for the objection was already inside the original text.

There is also criticism quoted in the coverage. Mohammad Hosseini of Northwestern called the audit **"simplistic."** He has argued previously that hallucinated citations affecting a paper's scientific conclusions should be separated from those that do not. A wrong line in a reference list and a core claim with no evidence behind it are not the same event. How the 4,046 confirmed cases split between the two is something nobody has counted yet.

> [!callout]
> What got corrected and what did not are two different things. The only correction this report verified is the one Nature attached to its own article. We found no record of a corrected version from the journal side; what exists is a set of post-publication letters in the same journal and the authors' reply. A letter is not a correction. And Nature's correction is itself a counterexample to the picture in Section 4: records can be fixed. What gets fixed, though, is usually the news article, not the paper.

We have our own entries to settle here. Our September pieces on [AI research ethics](/report/ai-research-ethics-guide-society-led-training/en/) and on [the science workbench](/report/claude-science-workbench/en/) both cited this Lancet audit by way of a summary, and the first of them noted that it had not checked the original letter directly. The second gave the first author's name as Marc. The correct name is **Maxim Topaz**. For this report we obtained the originals and checked the figures and quotations against them, and those two lines are the result.

## More checks are being installed, and all of them stand at the entrance

What did the auditors themselves ask for? The closing paragraph of the Lancet audit lists four recommendations. First, verify references automatically at submission. Second, attach integrity metadata to indexes. Third, **screen already-published papers retrospectively and correct or retract where necessary**. Fourth, establish "fabricated references" as its own category in research-integrity databases.

The third overlaps exactly with Section 4 of this report. The demand to reopen papers already in print is written into the recommendations by the team that performed the audit. The other three point at institutions too. Not one of the four asks for a better algorithm.

The checks that have actually multiplied, though, belong to the first item. Coverage has reported tools for screening references in submitted manuscripts going into use in several places. Since we could not verify individual publishers' announcements as primary documents in this round of research, this report repeats no figures on how widely they are deployed or how many submissions they stop. One direction is what we can state: **the machinery for inspecting incoming manuscripts has grown, and the procedures for reopening what is already on the shelf have not grown with it.**

### 6.1. The question is coverage, not verifier accuracy

In the [citation-verifier comparison](/blog/citation-verifier-judge-bias/en/) we covered in July, cheap judge models matched frontier models on accuracy. Verification performance is already good enough. What is missing now is not a more accurate verifier but a decision about where the same verifier is mounted. Put it in front of the submission queue and it filters this year's incoming manuscripts; put it on the shelf and it counts what has accumulated since 2023. Right now almost all of it stands at the front.

The cost structure is asymmetric too. Pre-submission verification looks at a few dozen references per manuscript and ends by handing the result back to the author. Retrospective screening covers millions of papers, and finding something is followed by contacting authors, an editorial-board decision, issuing a correction, and updating indexes. The 98.4% in Section 4 is less a figure produced by a shortfall in technology than one produced by nobody having been assigned that chain of work.

### 6.2. And this is supposed to be the easy problem

The Zhao team placed their own work at the end of their discussion in these terms: **"citation verification is among the easiest hallucination detection problems."** They give the reasons as well. References are discrete objects, an external ground-truth list exists to check them against, and right and wrong can be decided by machine.

Which leaves everything else. Citing a real paper for a claim it never made. Transposing a digit in a figure. Dropping a conditional clause and keeping the conclusion. None of these is caught by an index lookup. That is why 4,046 is close to a floor. It is what the easiest problem yields, and for the harder ones there is not yet an agreed way to count at all.

## Why this matters to Pebblous

What Pebblous sells is not a model but the work of establishing whether data is fit to use. What this report shows is that the object of that check has to widen from input data towards output. Scholarly literature is simply the setting where the shift surfaced first and most clearly.

That reading is not ours to invent; the primary paper states it. In their closing discussion the Zhao team describe science as the field best equipped to catch hallucinations. It has indexing systems, large bibliographic databases, citation norms, editorial review and automated verification tools. Hallucinations enter the record and stay anyway. So the authors list the places to compare it with: government reports, legal documents, clinical notes, **corporate knowledge bases** and journalism. In those domains, they write, the same errors are **"higher in prevalence, harder to detect, and less likely to be corrected."**

Internal wikis, quarterly reports, meeting summaries, labelling outputs and synthetic datasets all sit inside that list. None of them is indexed in Crossref or OpenAlex, and when a wrong line is found there is nowhere to issue a correction.

### 7.1. Hold quality as a rate only, and the accumulating side stays invisible

The mismatch of units from Section 4 repeats inside an organisation. Model evaluation speaks in rates; output accumulates in counts. The fabrication rate can fall from half to a third while the number of fake footnotes in the company document store rises. More people using the tool is all it takes.

Section 2 adds one more thing: even the rate moves with its denominator. One model's fabrication rate was 10.2% against all responses and 21.3% against responses that were not refusals. Neither is manipulation; both were calculated in good faith. An organisation that holds its quality metric as a single line — "how well the model we use is performing" — usually does not record what the denominator of that line is. And that line says nothing whatsoever about a document produced last year.

### 7.2. Questions you can ask on Monday

On how companies are re-auditing their own AI output, this round of research turned up no case worth citing. The four below are not cases but questions, and all four can be asked before buying any tool, from documentation alone.

- The documents, summaries and datasets we produced with an LLM — **where are they and how many are there**? Is there an inventory at all?
- Does each item record **which model produced it and on what date**?
- When we switch models, is there **a procedure for reopening past output**, or does only the next batch get better?
- For past AI output that has gone into internal search or retrieval-augmented generation, is **the path back into the input** closed?

The last line is not speculation. It is precisely the second amplification path the Zhao team described. The loop in which today's output becomes tomorrow's training material does not exist only in scholarly repositories. In a corporate knowledge base that loop is far shorter, and nobody is standing in the middle of it.

### 7.3. What kind of work is this

Counting the inventory of output, attaching provenance and a creation date to each item, and reopening the back catalogue when the model changes. This is not the kind of work a better model resolves. Swap the model and what you make tomorrow improves; what you made yesterday stays exactly as it was. It is standing work on the data side, and recognising that it is standing work is the first step.

There are precedents for going back into what was left alone. Our July piece on [the bug an AI found in 29-year-old code](/blog/squidbleed-ai-legacy-code-audit/en/) had that shape. Following provenance was the subject of [the provenance-audit report](/report/provenance-audit-science-fraud/en/) in August. Neither conclusion transfers here unchanged. What this report points at is not the auditing technique but the object of the audit, and once that object moves from flow to stock, the cadence and the ownership of the work move with it.

**Separating fact from interpretation.** The lifespan values and trajectories in Section 1 come from the released raw data of the Queen and Zou analysis; the fabrication rates in Section 2 from the full text of arXiv 2609.14988; the 4,046, 78.8%, 85.3% and 98.4% in Sections 3 and 4, along with the quotations, from the full text of the Lancet volume 407 audit and of arXiv 2605.07723. The correction wording in Section 5 is quoted from the notice attached to Nature's article. The arithmetic reconciling the two series through the 1.44 average, the layout of the four-gate diagram, and the whole of Section 7 are Pebblous interpretation. What we could not verify is also on the record: we did not count outlets to establish how widely the pre-correction phrasing spread, we could not confirm publishers' verification-tool deployments against primary announcements, and we found no citable case of a company re-auditing its own AI output. Korean coverage and domestic policy were outside the scope of this round.

## References

Sources for the figures in the text, grouped by type. Items 1 through 5 are the primary documents this report stands on, and every figure in Sections 3 and 4 comes from items 1 and 2. Items 6 through 13 are news coverage, corrections and post-publication letters. The final group is the earlier Pebblous pieces distinguished in the text.

### Primary — audits and measurements

- 1.Maxim Topaz, Nir Roguin, Pooja Gupta, Zhihong Zhang, Laura-Maria Peltonen, "Fabricated citations: an audit across 2·5 million biomedical papers," **The Lancet** 407(10541):1779–1781 (online 7 May 2026, print 9 May). [doi:10.1016/S0140-6736(26)00603-3](https://doi.org/10.1016/S0140-6736(26)00603-3) — source of the 4,046 references and 2,810 papers, the 91% precision, the 98.4% with no action, the annual values in both series, and the four recommendations. The population is the PMC Open Access subset.
- 2.Zhenyue Zhao, Yihe Wang, Toby Stuart, Mathijs De Vaan, Paul Ginsparg, Yian Yin, "LLM hallucinations in the wild: Large-scale evidence from non-existent citations" (8 May 2026, v1). [arXiv:2605.07723](https://arxiv.org/abs/2605.07723) — source of the 78.8%, the 85.3%, the 146,932, the per-repository rates, the Google Scholar observation and the quotations.
- 3.Maxim Topaz, Zhihong Zhang, Nir Roguin, Pooja Gupta, Zhiyuan Li, Laura-Maria Peltonen, "Biomedical Reference Generation Remains Unreliable across 26 Large Language Models" (14 September 2026, v1). [arXiv:2609.14988](https://arxiv.org/abs/2609.14988) — source of the 55.4%, the 35.3%, the 10.2 against 21.3% and the concluding quotation in Section 2. A preprint, not peer reviewed.
- 4.Owen Queen, James Zou, "The shelf life of LLM findings" (2 November 2026). [zou-group.github.io/llm-claims-shelf-life](https://zou-group.github.io/llm-claims-shelf-life/), raw data at [github.com/zou-group/llm-claims-shelf-life](https://github.com/zou-group/llm-claims-shelf-life) — the 22/17/8/3 split, the 31.7 months, the 29 April 2026 estimated expiry and the trajectory values in Section 1 were taken directly from lifespan.csv and claims.csv in that repository. A lab blog post, not peer reviewed.
- 5.William H. Walters, Esther I. Wilder, "Fabrication and errors in the bibliographic citations generated by ChatGPT," **Scientific Reports** 13:14045 (7 September 2023). [doi:10.1038/s41598-023-41032-5](https://doi.org/10.1038/s41598-023-41032-5) — the original paper behind the widely quoted "55%" and the starting point of the finding tracked in Section 1. The Lancet audit also cites it in its introduction.

### Coverage, corrections and post-publication letters

- 6.Miryam Naddaf, "Surge in fake citations uncovered by audit of 2.5 million biomedical-science papers," **Nature** 653(8115):658–659 (8 May 2026), [doi:10.1038/d41586-026-00748-w](https://doi.org/10.1038/d41586-026-00748-w) — carries a **correction dated 13 May 2026**, which is the wording quoted in Section 5.
- 7.Miryam Naddaf, Elizabeth Quill, "Hallucinated citations are polluting the scientific literature. What can be done?" **Nature** 652(8108):26–29 (online 1 April 2026). [doi:10.1038/d41586-026-00969-z](https://doi.org/10.1038/d41586-026-00969-z) — source of the 4,000-paper sample and the 65 of the top 100, the 110,000 extrapolation, the Cabanac case, and the phrase "Frankenstein citations," which belongs to Grounded AI co-founder Joe Shockman.
- 8.Kaia Glickman, "AI is ditching hallucinated references — and other bad habits," **Nature** news (19 November 2026). [doi:10.1038/d41586-026-03753-1](https://doi.org/10.1038/d41586-026-03753-1) — the news article covering reference 4, whose text states that the analysis was a blog post and has not been peer reviewed.
- 9.Chris Stokel-Walker, "Hallucinated citations highest in social sciences preprints site," **Nature** news (14 May 2026). [doi:10.1038/d41586-026-01545-1](https://doi.org/10.1038/d41586-026-01545-1) — the article reporting the per-repository rates used in Section 4.
- 10.Ahmed M. Mousa, Mohammed Mahmoud-Katheer, "Fabricated citations at scale: from detection to prevention," **The Lancet** 408(10561):1169–1170 (26 September 2026). [doi:10.1016/S0140-6736(26)01435-2](https://doi.org/10.1016/S0140-6736(26)01435-2) — the dissenting letter discussed in Section 5, disputing the growth multiple on the grounds that recall was not validated. A correspondence letter, not a correction.
- 11.David B. Resnik, Mohammad Hosseini, "Hallucinated citations … may constitute research misconduct," **Accountability in Research** (online 15 March 2026) — background to the criticism quoted in Section 5. Whether hallucinated citations should be treated as research misconduct is a debate our September research-ethics piece covered separately.
- 12.Jake Linardon, Hannah K. Jarman, Zoe McClure, Cleo Anderson, Claudia Liu, Mariel Messer, "Influence of Topic Familiarity and Prompt Specificity on Citation Fabrication in Mental Health Research Using Large Language Models," **JMIR Mental Health** 12:e80371 (2025). [doi:10.2196/80371](https://doi.org/10.2196/80371) — an earlier measurement supporting the argument in Section 2 that the fabrication rate depends on how the task is set.
- 13.Sai Anirudh Athaluri et al., "Exploring the boundaries of reality: investigating the phenomenon of AI hallucination in scientific writing through ChatGPT references," **Cureus** 15:e37432 (2023) — one of the papers the Lancet audit cites in its introduction as a basis for earlier estimates.

### Earlier Pebblous reports

- 14.[AI Text Detectors Collapse When Model Generations Change](/blog/ai-text-detector-llm-turnover/en/) (14 November 2026) — the piece distinguished in Section 1. That one is about the instrument going stale.
- 15.[Half the disagreement vanished when LLMs rewrote the citations](/report/llm-citation-rewrite-dissent-loss/en/) (3 September 2026) — the piece distinguished in Section 2. That one is about the stance of a real paper changing.
- 16.[When AI Reviews AI — 21% of ICLR 2026's 76,139 Peer Reviews Were AI-Generated](/report/iclr-2026-ai-peer-review-crisis/en/) (24 May 2026) · [A Cheap LLM Judge Matched Frontier Models at Citation Verification](/blog/citation-verifier-judge-bias/en/) (13 July 2026) — the pieces set apart in Sections 3 and 6 respectively.
- 17.[More AI Research Rules, or Societies That Teach Them?](/report/ai-research-ethics-guide-society-led-training/en/) (23 September 2026) · [Claude Science Makes Reproducibility a First-Class Feature of Scientific AI](/report/claude-science-workbench/en/) — the two pieces whose second-hand citations Section 5 settles.
- 18.[A Bug Humans Missed for 29 Years, an AI Read in the Spec](/blog/squidbleed-ai-legacy-code-audit/en/) (7 July 2026) · [The One Line of Metadata That Turns an AI Research Agent Into a Science-Fraud Vector](/report/provenance-audit-science-fraud/en/) (6 August 2026) · [Your Data Has an Expiration Date](/blog/data-freshness-checklist/en/) (4 June 2026) — the precedents and the differences in direction noted in Section 7.
