---
title: The Benchmark Leader Came Last. We Rebuilt Korea
subtitle: Through 75 of the 100 points the four teams were 1.7 points apart, and the order was made in the last block, the 25 points of user evaluation
date: 2026-08-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Benchmark Leader Came Last. We Rebuilt Korea

_Through 75 of the 100 points the four teams were 1.7 points apart, and the order was made in the last block, the 25 points of user evaluation_

## Executive Summary

> [!callout]
> On 18 August the Korean government announced the second-stage results of its Sovereign AI Foundation Model project, and said two things in the same breath. Motif Technologies would not advance. And Korea now stands third in the world, behind the United States and China. But the 100 points that decided the elimination and the evidence offered for third place are not measured with the same ruler. The first is a selection score for picking domestic contractors. The second is a snapshot of a global leaderboard at one moment in time. This report takes the published numbers and rebuilds that 100-point score.

> Rebuilding it only became possible on 27 August, when the per-team block scores were finally released in full. Through the benchmark and expert blocks, 75 of the 100 points, the four teams sat inside 1.7 points of each other. At that stage the team that was eliminated was in second place. The order changed in the final user-evaluation stretch. Dropping one block at a time makes it sharper. Remove any single block and the last-placed team stays last; only when the whole 25-point user evaluation is lifted out does the order rearrange. This is not a scoring error. It is a property of weighted-sum scorecards: which item makes the ranking is decided not by its weight but by how far apart the candidates fall on it. The composite-indicator literature formalised this gap years ago and measured it in university league tables and the Human Development Index.

> We checked the world-ranking side too. Rewinding the full leaderboard to the announcement date, the government's two verifiable claims reproduce exactly. Eight days later, a new Singaporean model had entered the same band. Ranking claims come with an expiry date. In the end a scorecard is a dataset like any other. Are the indicators measuring the same thing twice? Has one of them saturated against its ceiling and stopped carrying information? Are the scales so different that the stated weights no longer mean what they say? These are the questions we ask of training data. They belong on the tables we use to score models too.

<!-- stat-card -->
**1.7 pts** — 1st to 4th, at the 75-point mark — How close the four teams still were after benchmarks and expert scoring

<!-- stat-card -->
**5.0 pts** — 1st to 4th in the final 25 — Opened up inside the user-evaluation block alone, a fifth of its allocation

<!-- stat-card -->
**15.8 pts** — Real ceiling of a 25-point block — What the world's top-scoring model would earn under the same conversion

<!-- stat-card -->
**0.7 pts** — Total spread on the NIA 15 — All four teams landed between 84.7% and 89.3% of full marks

## What the 100 points are made of

Some context for readers outside Korea. The Sovereign AI Foundation Model project, known domestically as _dokpamo_, is a state programme that funds a shrinking set of national teams to build frontier-class Korean models, with GPU allocation and public money attached to each stage gate. Four teams entered the second stage: SK Telecom with A.X K2, Upstage with Solar Open 2, LG AI Research with K-EXAONE 2.0, and Motif Technologies with Motif 3.

The outcome arrived on 18 August. The scorecard arrived later. On announcement day the Ministry of Science and ICT gave only block averages and the first-to-fourth gap in each block. Two days later the detailed scoring rules and the top score in each block were published, and the criticism continued because totals and rankings still were not. All sixteen per-team block scores became public on 27 August, after the eliminated team, Motif Technologies, filed an objection and the remaining three consented to disclosure. Every calculation in this report starts from that last release.

### 1.1. Forty points scored by machines, sixty by people

The 100 points split into five blocks. The first two are benchmarks. The government does not mark the 25-point AAII block itself: it takes the result Artificial Analysis, an independent model evaluation firm, produces from its own suite of nine hard evaluations, and converts it. The 15-point NIA block is run by Korea's National Information Society Agency across seven areas, which are mathematics, knowledge, long-context comprehension, safety, reliability, Korean language and instruction following, then scaled to 15. Together that is 40 points.

People score the other sixty. The 35-point expert block was marked over five days by ten external reviewers with no conflict of interest, in writing and through a Q&A session; the briefing described them as specialists in AI algorithms, services and data. That 35 splits three ways again: 10 points for development strategy and technology, 10 for results and forward plans, and 15 for ripple effects on the domestic AI ecosystem and contribution plans. The highest and lowest reviewer scores are dropped before the arithmetic mean is taken. The 15-point professional-user block was scored by forty-nine people including AI startup founders, and the 10-point public block by one hundred and eighty-five members of the general public, each rating on an absolute one-to-five scale before the totals were scaled. Fourteen hundred people applied for the two hundred public seats, and the panel was drawn at random.

> [!callout]
> Several news reports put the public-evaluation block at 15 points. There is a reason: in the body of the 18 August briefing the vice minister said "professional users 15 points, general public 15 points." But that adds to 30, and in the same briefing he also puts the whole user evaluation at 25. He corrects himself during the Q&A: "the general public evaluation has finally been allocated 10 points." The published block averages only reconcile at 10 as well. Korean-language quotations throughout this report are our translations of the official transcript.

### 1.2. The second round was already a redesign

The common exam paper used in the second stage is itself an answer to the criticism the first stage drew. In its 22 January issue of NABO Focus, Korea's National Assembly Budget Office wrote that the first-stage evaluation had drawn a fairness controversy over its originality judgements and its evaluation metrics. The axis of that controversy was that each company had picked its own benchmarks and those went into the score.

The government does not dispute the point. At the 18 August briefing the vice minister described the first-stage method this way: "the participating teams each proposed the individual benchmarks they wanted to be compared on, and we aggregated those results, that was the method; and because that method has both strengths and weaknesses, for the second stage we discussed unifying on AAII, a globally credible benchmark, and that is what we did." Handing the marking to an outside body and consolidating on one exam paper is what changed.

The design also made allowance for the newcomer. Motif Technologies skipped the first stage and joined through an additional call in February, so a separate rule applied to it in the ripple-effect block. In the government's words: "to support fair competition between the newly participating Motif Technologies and the existing teams, Motif's domestic AI ecosystem ripple-effect evaluation was assessed broadly, including deployment results and plans for its existing AI models rather than only those based on the new sovereign model." The team was not asked to prove field traction with the new model alone.

One check remains. What was released on 18 August were block averages and gaps; what was released on 27 August were per-team scores. The two releases are nine days apart and are different shapes of number. We recomputed the earlier aggregates from the later per-team figures.

- In the 40-point benchmark block the briefing gave an average of 22.5; our recomputation gives 22.525. The gap is 4.0 points on both sides.
- In the 35-point expert block the announced average was 28.8, ours is 28.75. The gap is 2.4 on both sides.
- In the 25-point user block the announced average was 17.6, ours is 17.55. The gap is 5.0 on both sides.
- The Q&A answer that "no company exceeded 30 points on the benchmark total" also matches a top score of 24.6.

Two disclosures made separately, nine days apart, do not contradict each other. Everything below is built on that.

## The order was made in the last 25 points

Below is the raw material for this report, the per-team block scores released on 27 August. What made the ranking is not the total column but how far apart the four teams fall inside each block, and the bottom row carries that spread. On the NIA 15 the four sit within 0.7 points of each other; on the user evaluation they stretch to 5.0.

| Team / model | AAII25 | NIA15 | Experts35 | Pro users15 | Public10 | Total100 |
| --- | --- | --- | --- | --- | --- | --- |
| SK Telecom · A.X K2 | 8.8 | 13.4 | 29.3 | 11.6 | 7.5 | 70.6 |
| Upstage · Solar Open 2 | 9.4 | 13.3 | 29.1 | 10.8 | 7.3 | 69.9 |
| LG AI Research · K-EXAONE 2.0 | 7.8 | 12.8 | 29.5 | 11.3 | 7.6 | 69.0 |
| Motif Technologies · Motif 3 | 11.9 | 12.7 | 27.1 | 8.4 | 5.7 | 65.8 |
| Four-team average | 9.48 | 13.05 | 28.75 | 10.53 | 7.03 | 68.83 |
| Spread, 1st to 4th | 4.1 | 0.7 | 2.4 | 3.2 | 1.9 | 4.8 |

Source: per-team block scores published in Yonhap News reporting of 27 August 2026. The eight cells for professional-user and public evaluation were absent from the government's original 18 August release and surfaced in follow-up reporting after 27 August; they match, to the decimal, the values this report obtained by subtracting the other three blocks from the total. Averages and spreads are our calculation.

### 2.1. Through 75 points the four were still together

Stack the scores in marking order and the table reads differently. On the AAII 25 alone, Motif 3 is first. Add the NIA 15 to make the 40-point benchmark subtotal and the order holds. The first movement comes at the 75-point mark, once the 35-point expert block is added, and it is a small one. The four teams sat between 50.1 and 51.8, inside 1.7 points, and Motif Technologies was still second. Four teams inside a band worth 2.3% of the total.

Then the remaining 25 points rearranged all four positions. The diagram below joins each team's rank at the end of each stretch. The lines run almost parallel through the first three and cross in the last.

### 2.2. Take one block out and score it again

To see where the force that made the ranking was carried, lift out one block at a time. Subtract a whole block from the total, re-rank on what is left, and the only input needed is the published numbers. The results fall entirely on one side.

| Block removed | Order of what remains | Motif 3 |
| --- | --- | --- |
| None (final 100) | SK Telecom · Upstage · LG · Motif | 4th |
| AAII 25 | SK Telecom · LG · Upstage · Motif | 4th |
| NIA 15 | SK Telecom · Upstage · LG · Motif | 4th |
| Experts 35 | SK Telecom · Upstage · LG · Motif | 4th |
| Public 10 | SK Telecom · Upstage · LG · Motif | 4th |
| Professional users 15 | Upstage · SK Telecom · LG · Motif | 4th |
| Whole user evaluation, 25 | Upstage · Motif · SK Telecom · LG | 2nd |

****Source: calculated by this report from the per-team block scores published on 27 August 2026. Each row subtracts that block's score from the total and ranks the remainder in descending order.

There are three things to read here. First, no single block can be removed to lift Motif Technologies off the bottom. Not AAII, not the expert evaluation, not the professional-user block on its own. Second, only lifting out the full 25-point user evaluation changes the order, and when it goes Motif Technologies comes back to second. Third, the one single block that changes who is first is the 15-point professional-user evaluation. Take those 15 points away and Upstage stands ahead of SK Telecom.

The table first confirms what the government said. The vice minister told the briefing that "the general public evaluation did not affect who passed and who did not." Remove the public 10 and the order is unchanged, so that is right. But the same table shows something else. Among the four blocks, the force that moves the order sits on the user-evaluation side.

The government addressed this twice in the same session. Asked which metric decided the outcome, the vice minister said the gaps in each category combined into the result to a degree that made it "hard to say any particular item was decisive." Of the eliminated team, though, he said this: "their technical capability was outstanding, but in the usability and applicability part, where a good deal of the weight in the 75 points built into this evaluation sits, they were rated somewhat lower than the other companies." The 75 points he means is everything except the AAII 25. That is a different bundle from the 75 this report uses, which is the 40-point benchmark subtotal plus the 35-point expert block. The same number carries two meanings and has to be read apart. The two answers have a different temper, but the second one points where the rebuilt scores point.

> [!callout]
> None of this should be read as "the user evaluation is why Motif Technologies was eliminated." What we hold is arithmetic, not causation. The precise statement is this. Rebuilt block by block from the published scores, one of the four blocks changes the order, and it is the user evaluation. In that block the four teams spread 5.0 points apart, and in the other three they never spread that far. This is an after-the-fact observation about these four teams in this round.

## A 25-point block with a 16-point ceiling

In this report "AAII" points at two different numbers. One is the raw intelligence-index score Artificial Analysis publishes on its own site: 47.36 for Motif 3, and 63.05 for the world's highest-scoring model at the time we queried it. The other is that raw score converted onto the 25-point scale of the Korean scorecard, which is where Motif 3's 11.9 comes from. Mixing the two collapses this section, so the table keeps them in separate columns.

| Model | Raw AAII | Converted (of 25) | Ratio | vs world no. 1 |
| --- | --- | --- | --- | --- |
| Motif 3 | 47.36 | 11.9 | 0.2513 | 75.1% |
| Solar Open 2 (250B) | 37.43 | 9.4 | 0.2511 | 59.4% |
| A.X K2 | 35.01 | 8.8 | 0.2514 | 55.5% |
| K-EXAONE 2.0 | 30.98 | 7.8 | 0.2518 | 49.1% |
| (reference) world's top model | 63.05 | 15.8 | 0.25 | 100% |

Source: raw AAII scores read from artificialanalysis.ai model pages on 28 August 2026. Converted scores are the dokpamo block scores published on 27 August. The ratio column, the comparison against the world's top model and the 15.8 in the last row are this report's calculation. The leaderboard updates, so the raw scores depend on when you look.

All four ratios land around 0.251. The conversion is the raw score multiplied by 0.25. Which is to say that scoring the full 25 points in this block would require a raw AAII of 100. And AAII is an exam on which full marks essentially do not happen. Put the 63.05 held by the top model at the time of our query through the same formula and it comes out at 15.8. The block is allocated 25 points, and the best model in the world could take home about 16 of them.

So the four teams sat between 31.2% and 47.6% of the block's face value. The whole block is pressed into its lower half. And yet the spread between teams is 4.1 points, the widest of the five blocks. Compressed and spread out at the same time.

That the exam is hard was known and chosen. The briefing introduced AAII as "a highly credible evaluation on which even the global big tech firms find high scores difficult." A deliberately hard ruler was brought in to fix what went wrong in the first stage. But choosing a hard exam and hanging 25 points on it are two different decisions. The first has been explained. The reasoning behind the second has not.

One spot snags when you check the conversion. Multiply 47.36 by 0.25 and you get 11.84, while the published figure is 11.9. That is 0.1 out. A raw score around 47.6 at evaluation time would fit exactly, so this looks like a snapshot difference, but there is no basis to settle it. The government's statement that it "adopted the standard Artificial Analysis published at the end of June" refers to when the index composition and weights were fixed, not to when the scores were sampled. All four evaluated models carry a leaderboard release date of 12 August, so none of them existed at the end of June.

The company reached the same arithmetic. In its 27 August statement Motif Technologies pointed out that the converted gap between first and fourth on AAII amounts to only 4 points. Our figure is the difference between 11.9 and 7.8, which is 4.1. A conclusion the company reached internally and a calculation done from outside with nothing but public material land in the same place.

The company went one step further. Against the argument that large firms should take the frontier models while startups take specialised ones, it replied that in this evaluation the two startups outscored the two large firms on the benchmarks. The published scores bear that out: on raw AAII, Motif 3 and Solar Open 2 both sit above A.X K2 and K-EXAONE 2.0. On the total, though, the four teams alternate. First and third are large firms, second and fourth are startups.

### 3.1. The other 15 points held four teams inside 0.7

The 15-point NIA benchmark behaves in exactly the opposite way. The four teams score between 12.7 and 13.4, which is 84.7% to 89.3% of full marks. The spread between them is 0.7 points, or 4.7% of the block. Where AAII scattered the four wide across its lower range, NIA gathered them tight against its top.

> [!callout]
> Inside one 100-point scorecard, two benchmarks are using two different rulers. One is a 25-point scale whose real ceiling is about 16. The other is a 15-point scale that puts every candidate somewhere around 85%. What was fixed when the allocations were set was the numbers 25 and 15. How much separation those numbers would actually produce was not.

Do not look for the reason the NIA scores clustered in the exam itself. As of 28 August 2026 what has been published is the names of the seven areas and the per-team scores after scaling to 15. Raw scores, the conversion formula, the number of questions and the allocation across the seven areas have not been. So there is no way from outside to tell whether the clustering came from easy items or from compression at the conversion step. "We cannot check this" and "this has not been published" are different statements. Here the second one is the true one.

The phenomenon itself does have a name and a diagnostic in the benchmarking literature. A test where candidates pile up near the ceiling and stop producing ranking information is called saturated, and there is a line of work that uses item response theory to measure which items actually contribute discrimination. The metabench study took six benchmarks totalling 28,632 items, distilled them to under 3% of the original size, and still reconstructed the original total score with 0.58% root mean square error and each individual benchmark score with 1.24% on average. That the first filtering step is a plain statistic like variance is not far from the procedure in this report either. We were reading with the same grammar when we covered [a preprint auditing redundancy across twelve physical-AI benchmarks](/report/physical-ai-benchmark-redundancy-audit-2026-08/en/).

## The 35-point block produced only 20% of the ranking gap

Whoever sets the allocations thinks of them as importance. An item given 35 points reads as more than twice as important as one given 15. But in a weighted-sum scorecard the force that actually makes the ranking comes from somewhere else: how far apart the candidates fall on that item. An item where everyone scores the same contributes nothing to the ranking, however many points it carries. An item with a small allocation where candidates spread widely can decide the final order.

Measure that spread block by block and set it beside the allocations, and you get effective weights. The third column below is the standard deviation of the four teams' scores; the fourth is that standard deviation as a share of the four-block total.

| Block | Nominal weight | Std dev across teams | Effective share | Ratio |
| --- | --- | --- | --- | --- |
| User evaluation | 25% | 2.027 | 42.2% | 1.69× |
| AAII benchmark | 25% | 1.512 | 31.5% | 1.26× |
| Expert evaluation | 35% | 0.963 | 20.0% | 0.57× |
| NIA benchmark | 15% | 0.304 | 6.3% | 0.42× |

Source: calculated by this report from the per-team block scores published on 27 August 2026. User evaluation is taken as the combined 25 points of the professional-user 15 and the public 10. Substituting score range or variance contribution for standard deviation leaves the ordering of the four blocks unchanged: by range the shares are 41.0, 33.6, 19.7 and 5.7%, and by variance contribution 55.4, 30.8, 12.5 and 1.2%.

The expert evaluation, which carries the largest allocation at 35 points, settles at an effective share of 20%, because the four teams score between 27.1 and 29.5. Going the other way, NIA falls from a nominal 15% to an effective 6%, and the user evaluation rises from a nominal 25% to 42%. Even AAII and the user evaluation, which carry the same 25 points, turn out to weigh differently in effect.

### 4.1. This gap has a name

It would be wrong to take this calculation and say the government put 42% on the user evaluation. What the government set is 25%. The 42% is a quantity that only exists once the marking is over, and it moves if the candidates change. The 42% is the share of the ranking differences that ended up between these four teams which came from the user evaluation.

And the mismatch is not a diagnosis we invented. The composite-indicator literature formalised the same problem long ago. The standard reference is "Ratings and rankings: voodoo or science?", published by Paruolo, Saisana and Saltelli in the Journal of the Royal Statistical Society in 2013. The authors take issue with the practice of reading nominal weights as importance in any index built by weighted aggregation, and argue that real importance should be measured with a correlation ratio, which they call the main effect. Then they went and measured it: "(relative) nominal weights are hardly ever found to match (relative) main effects." That came from applying the diagnostic to five composite indicators, among them the Human Development Index and two popular university league tables. In one British university ranking, the staff-to-student ratio carried a nominal weight of 0.20 against a normalised main effect of 0.09.

Our calculation should not be called the same method as theirs. What the authors measured is a main effect based on variance decomposition; what we measured is each block's share of the standard deviation across four teams. The samples differ too: they worked with dozens to hundreds of units, and there are four teams here. Ours is not an estimate but an after-the-fact observation about this round. The direction, though, is the same. The number written on the allocation table and the discrimination that allocation actually produced go their separate ways, and there is already a procedure for measuring it.

### 4.2. Four steps for auditing your own scorecard

Whether it is internal model selection or vendor evaluation, organisations end up building weighted-sum scorecards. And almost all of them stop at deciding the weights. Carried across directly, everything above becomes four steps. The only input required is one matrix of final scores by metric, and that table already exists inside the organisation.

<!-- stat-card -->
**Step 1 · Measure the spread first** — For each metric, compute how far apart the candidates fall, by standard deviation or by score range. Do this before looking at any totals.

<!-- stat-card -->
**Step 2 · Set it beside the weights** — The relative share of that spread is the effective weight. This is the step where you find out which metrics diverge from their nominal allocation.

<!-- stat-card -->
**Step 3 · Find the metrics pinned at the ceiling** — A metric where everyone scores near full marks makes points but not rankings. Rescale it or take it out of the allocation.

<!-- stat-card -->
**Step 4 · Attach error to human scoring** — Record inter-rater agreement and confidence intervals alongside the scores. Without them nobody can judge whether a narrow gap means anything.

## What AAII measures, and what it does not

Bringing AAII into this scorecard was meant to fix what went wrong in the first stage. That makes it worth looking at what the exam paper measures. The current version is v4.1.1 and it is built from nine evaluations: GDPval-AA v2, 𝜏³-Banking, Terminal-Bench v2.1, SciCode, AA-LCR, AA-Omniscience, Humanity's Last Exam, GPQA Diamond and CritPt. Those nine are grouped into four categories with weights attached: Agents at 34%, Coding at 24%, Scientific Reasoning at 24% and General at 18%. As Artificial Analysis puts it in its own documentation, "the weighting emphasizes agentic tasks."

The index is also explicit about what it does not measure. Straight from the methodology page: "Artificial Analysis Intelligence Index is a primarily text-based, English-language evaluation suite. We benchmark models for image inputs, speech inputs and multilingual performance separately to the Intelligence Index evaluation suite." Multilingual ability is reported separately through Global-MMLU-Lite and does not enter the index.

So why a NIA benchmark is needed is clear enough. One English exam cannot take the full measure of a Korean model. The problem is that the exam paper built to fill that gap cannot itself be read from outside. Raw scores, the conversion formula, the number of questions, how the 15 points are spread across the seven areas: none of it is public. Above all there is no control group of foreign models sat under the same conditions. From this material alone there is no way to know where 13.4 points of Korean-language ability stands relative to the world's best models.

### 5.1. Putting foreign models on a Korean exam is not a new idea

Korean-language benchmark research has included control groups from the start. KMMLU is not a translation of an English exam but 35,030 questions gathered in the original Korean across 45 subjects. At publication it reported GPT-4 and HyperCLOVA X alongside a human average as baselines: 59.95% and 53.40% against 62.6% for humans, with the best open model at 50.54%. The observation that GPT-4 shows gaps in local knowledge on Korea-specific items came out of that same comparison. The follow-up work, KMMLU-Pro, brought in recent reasoning models including o1, o3 and Claude 3.7 Sonnet as its control group.

> [!callout]
> Seating the world's top models at a Korean exam is not a new idea. Korean academic groups have been doing it for years, and they do it because without that control group a Korean-language performance number does not mean anything. What is missing is not the idea. It is a published control group in the government's evaluation.

### 5.2. Is 1.6 points a meaningful gap?

The gap between first and third on the total is 1.6 points. Asking whether that difference is statistically meaningful is not a hard question. No block carries a confidence interval, so it simply cannot be answered. There is no basis for writing that it falls within the margin of error, and none for writing that it falls outside.

The contrast is AAII, which sits inside the same scorecard. Artificial Analysis publishes this about its own index: "We estimate a 95% confidence interval for Artificial Analysis Intelligence Index of less than ±1% - based on experiments with >10 repeats on certain models for all evaluation datasets included in Artificial Analysis Intelligence Index v4.1.1." This is not exceptional generosity. Evan Miller of Anthropic opened a 2024 paper from the premise that evaluations are fundamentally experiments, noting that "the literature on evaluations has largely ignored the literature from other sciences on experiment analysis and planning," and proposed bootstrap confidence intervals, paired tests and consistent reporting of standard errors. That is close to the minimum the field has been asking for.

There are reference designs on the human-scoring side too. Chatbot Arena shows users two anonymous answers, asks which they prefer, and reveals the models only after the vote is cast. Scores come out as Bradley-Terry coefficients with bootstrapped 95% confidence intervals attached. The dokpamo user evaluation made different choices. Raters scored on an absolute one-to-five scale, the totals were summed and then scaled, and the blind evaluation Motif Technologies requested was not adopted, according to the company. Brand recognition may have carried into the result, the company argues. None of this makes the design wrong. Different choices were made, and the reasoning behind them has not been published. That is all that can be established right now.

The government knew about this problem too. The vice minister explained the decision not to name the top company in each block this way: "the gaps between each of the four companies on each evaluation item are narrow, and rather than any real benefit in announcing a first place, in a situation where the gaps in this evaluation are not large, we took into overall account the effects on the other companies." Saying the gaps were too narrow to disclose is, turned around, an acknowledgement that the discrimination in those gaps is weak. If so, publishing the confidence intervals alongside conveys the same fact more precisely than withholding does. We have touched on how an exam paper needs handling once before, covering [research showing eight benchmarks with no defence against gaming](/report/ai-agent-benchmark-trust/en/).

## Which ruler says 'top three'?

At the 18 August briefing the phrase "global AI top three" moved across four different grounds. Each measures something different. The first is AAII's comparison of national frontier models. The second is which countries have models in the band above 40 points on AAII. The third is how many countries appear in Epoch AI's list of notable AI models. The fourth, the Stanford HAI AI Index, gets mixed into the citations as well.

The first ground, in its actual wording: "all four teams' models recorded 31 points or above, and were confirmed to have overtaken all the major AI models of Europe, Canada and elsewhere." This too can be checked against the leaderboard. At the time of the announcement the highest-scoring European model was France's Mistral Medium 3.5 at 30.39, and Canada's Cohere Command A+ was at 22.77. The four teams' raw scores run from 30.98 to 47.36, so the claim reproduces. The margin on the bottom row is 0.59 points, though. And the "31 points" in "31 points or above" is 30.98 rounded up.

The third ground we could not verify. The briefing said all four models were listed among Epoch AI's notable AI models and that "the notable AI models selected in 2026 so far are only those from China, the United States and our own teams," but we could not obtain source material that would let us rewind that list to a given date.

Taking the fourth one first: in the 2026 AI Index, Korea places third on notable model count with five, behind the United States on 50 and China on 30, up from fourth the year before. That is a number we already worked through in [our block-by-block reading of that report](/report/hai-ai-index-2026-part2/en/). But the five Korean models HAI counted are EXAONE, HyperCLOVA X, Solar Pro, A.X and VARCO. That is a different list from the four models in the second dokpamo stage. The same phrase, third place, is counting two different sets of models.

### 6.1. Both claims held on the day and expired eight days later

The second ground is a verifiable factual claim, so it can be checked directly. The vice minister said that "in the AAII evaluation only models from the United States, China and Korea scored above 40 points," and that Motif 3 had reached "the global top 10 among the highest-performing AI models by company worldwide." This report downloaded the full Artificial Analysis leaderboard, reconstructed 610 models with their developer, country and release date, and cut the data by date.

Keeping only models released on or before 18 August leaves 86 entries above 40 points. The country distribution is 57 from the United States, 26 from China and 3 from Korea, with no fourth country. Motif 3's rank by company is exactly 10th. Both sentences from the government reproduce as stated.

Those three Korean entries were Motif 3, its beta version, and Upstage's Solar Pro 4. The last of those was not a model submitted to the dokpamo evaluation. So of the three Korean models above the 40-point line, only one was on this scorecard at all, and the team that produced it was eliminated.

Run the same calculation as of 28 August, though, and the count above 40 becomes 90 entries, with Singapore added to the country distribution. Sapience AI of Singapore entered with Agnes 2.5 Pro Beta at 49.10. Its release date is 26 August, eight days after the government's announcement, and it sits above Motif 3's 47.36. The version before it stood at 39.71 when it was released on 24 July, just under the 40-point line. Motif 3's rank by company slips one place, to 11th.

The briefing contains one more sentence of the same kind. The vice minister said Motif Technologies had "recorded the world's best performance among AI models developed outside the United States and China." This is also true as of the announcement date. The highest scorer outside the US and China after Motif 3 at that point was the 39.71 just mentioned. The next version from the same company took that position eight days later.

> [!callout]
> This is not a claim that the government exaggerated. Both statements were true on the day they were made, and we confirmed that by reconstructing the whole leaderboard. What it exposes is something else. A national ranking claim is attached to a leaderboard snapshot, and leaderboards update. In this case the shelf life of that snapshot was eight days. If you are going to cite a ranking as an achievement, cite the date you looked.

This reconstruction has one limitation. What we cut on is the model's release date, not the date Artificial Analysis added it to the index. Those two can differ, and we could not verify the latter. So the reconstruction is an approximation of the state of things on announcement day.

One more sentence has to go beside the 40-point line to avoid a misreading. Of the four models submitted to the dokpamo evaluation only Motif 3 cleared 40, and that team was eliminated. And Upstage had already cleared the line with Solar Pro 4, a separate model it did not enter, at 41.64. Write only the first sentence and you have a story about a startup facing structural disadvantage. Write only the second and the elimination reads as if it hardly mattered. Both together is what is true.

We checked the ecosystem numbers the vice minister cited at the briefing against the same leaderboard. Fifty-eight registered companies is exactly right as a count of distinct developers. Seven Korean companies is right too, being SK Telecom, LG AI Research, Upstage, Naver, KT, Motif Technologies and Trillion Labs, and two from the UAE is right as well. Only the country count diverges. He said twelve countries; our query gives eleven. The countries he named one by one on the day were France, the United Kingdom, Israel and Singapore. Our list has no United Kingdom, and has Switzerland and Spain instead. This looks like a difference in snapshot timing or in how a company is assigned to a country, so we will not prejudge which is right. That three of the four match to the digit is itself a sign that the numbers in this announcement are mostly solid.

Singapore was already inside those twelve countries on the day of the announcement. It was simply below the 40-point line. It is not a country that appeared eight days later, but one that was already standing there and crossed a line.

### 6.2. What decides whether the 95% target is met

The final goal of the dokpamo programme is to reach 95% or more of global AI model performance. Back in January, the National Assembly Budget Office had already pointed out that an objective comparative evaluation would be needed to judge that target, because what counts as 100 has not been fixed. Take raw AAII as the ruler, as an experiment, and with the world's top model at 63.05 when we queried it, the 95% line falls at 59.9. The four teams sit between 30.98 and 47.36. But that calculation is itself an arbitrary choice. Use an index that measures only coding and a different number comes out; use Korean-language ability and it changes again. If the side that set the target does not name the ruler, whether it has been met varies with whoever is citing it.

Motif Technologies picked up the same ruler in its statement. The frontier model is at 63, its own model is at about 75% of that, and the lowest-scoring domestic model is at about 49%, so the 95% target is still a long way off. That is the same place, to the decimal, as the values calculated in the table above. The 31 points the company identified as the lowest, though, is not its own score but the raw score of K-EXAONE 2.0. That sentence is easy to misread, so it needs its subject attached every time it is quoted.

Which is why the proposal arises to split the evaluation into two report cards rather than one. One is a global model capability report card. Run AAII, the seven NIA areas and Korean-language field testing against the world's top models under identical conditions, and publish a maximum-performance evaluation separately from one held to equal cost and token budgets. The other is a sovereignty and public value report card. Originality of the model, the data and the training techniques; open-weight status and licensing; whether it can run on domestic AI chips; industrial diffusion at home and [data sovereignty](/report/ai-distillation-sovereign-data/en/); cost, speed and power efficiency. Scoring foreign models on their contribution plans for the Korean ecosystem is meaningless, so the full 100 points do not transfer wholesale. Split in two, the question of where a model ranks globally stops getting tangled with the question of whether Korea has strategic reason to own it.

### 6.3. What needs publishing is the conditions, not the exam

A demand to publish the evaluation criteria should not be read as a demand to publish the questions. Release the whole exam and models get trained on it to lift scores. That suspicion was actually raised in this round. AfterQuery, a US AI data company, said on social media that it had been the sole data partner in the development of Motif 3, and a benchmark-optimisation controversy attached itself to the claim. The company's chief executive countered that they had bought general data needed for performing agentic tasks and improved performance that way, and that it was not a collaboration aimed at scores. The government commissioned a formal analysis from Artificial Analysis, received an answer that no evidence of systematic memorisation or overfitting had been found, and did not factor the matter into the evaluation. That the suspicion was raised and that it was cleared always have to be written down together.

What should be published is the conditions of the exam, not the paper. Evaluation areas and weights, the principles behind item construction, prompts and system instructions, model versions and reasoning effort and token limits and tool-use conditions, the judging criteria for both automatic graders and human raters, repeat counts and confidence intervals, how the review panel was selected and their conflict-of-interest disclosures, anonymised model outputs and scoring records, contamination checks on training data, and retired items with reproduction code. Keep the items themselves private and on rotation, and release only the retired ones on a schedule, and transparency and exam security can both hold.

This design is not hypothetical. Japan's METI ran the GENIAC programme's first-round performance evaluation on the view that using entirely unseen test data was essential to fairness, and worked with Weights & Biases to build a holdout dataset for the marking. It used two Japanese sets and two English sets for reference, and disclosed the evaluation conditions down to footnotes such as reporting the mean of 0-shot and 4-shot. The call for applications required that evaluation benchmarks not be used in training and that results be published on completion. Private exam paper, public conditions and results: the combination already exists in a national programme next door. We could not confirm whether foreign frontier models were included as a control group in the published charts, because the results are inside images.

The reason conflict-of-interest disclosure belongs on the list is also inside this evaluation. In January, Artificial Analysis publicly described this programme as a key driver for lifting Korean AI models to frontier level; in August it became the programme's marker; it built a dedicated platform for this round; and it is set to take part in the third-stage evaluation as an adviser. The point is not that any of this is improper. The aim of securing external credibility is legitimate, and it is a measure that genuinely fixed what went wrong in the first stage. The point is that when a relationship like this exists between marker and programme, disclosing it is how the evaluation keeps its trust, and that conflict-of-interest disclosure therefore belongs among the transparency items.

What Motif Technologies asked for is largely inside this list too: detailed scores by item and by company along with the criteria, the basis on which benchmark allocations were set, the detailed criteria and results of the expert evaluation, and the methodology and detailed criteria of the user evaluation. The company said it will not take part in the third-stage programme regardless of the outcome of the review. The Ministry of Science and ICT said on 27 August that it would decide within a fortnight. As of 28 August 2026 that outcome has not been announced, and this report does not prejudge it.

The company also argued that the government's presentation to the president at the 25 August cabinet meeting, citing the dokpamo score of 47 and global top-three status as achievements while eliminating the very team that produced that score, was a policy contradiction. We were not able to obtain the original cabinet meeting material, so we record this only as the company's claim.

The government's account has to be set in the same place. The briefing stated that "the detailed content regarding the evaluation method, including criteria and procedures, was agreed in advance by all participating teams." On the criticism that the quantitative evaluation had lost discriminating power, a ministry official told the press that the technology had shifted quickly toward agentic reasoning and coding while the second stage was running, and that because the programme had assumed from the outset that the target would move, adjusting the evaluation criteria accordingly fits its purpose. The two statements say different things. The first is that the procedure was agreed; the second is why the criteria were adjusted. What the company asked for is closer to showing the basis for that adjustment in numbers.

One more thing. On the shape of the programme from 2027, the government said it is considering "moving away from the competitive format we have now" and "a direction of wholesale restructuring." That comes with the caveat that the budget is not settled and nothing is decided, so it should not be read as an announced cancellation. What is on record is a declared re-examination. The original plan, as the National Assembly Budget Office recorded it, was to narrow to a final two teams in 2027. B200 support is rising from 768 units to around 1,000 per team, and at the same time as [the National AI Computing Centre broke ground](/report/korea-ai-compute-center-npu-2026-07/en/), the procedure for deciding who gets those resources is being redesigned. The scale is not small either: at the briefing, the ministry's infrastructure policy director put the cost at roughly 40 billion won per team assuming a six-month lease, or about 120 billion won for three teams. It would be good if what this report has traced were of use in the room where that procedure gets rebuilt.

## Why Pebblous is watching

What Pebblous does to training data is strip out duplication, diagnose representativeness, and leave the basis for each judgement in a ledger. This episode is a domestic policy case where that same grammar transfers directly onto an evaluation scorecard. A 100-point marking table is a derived dataset built by weighted aggregation of five indicators, and if it is a dataset it can be diagnosed. Are the indicators measuring the same thing twice? Has one of them run up against its ceiling and lost information? Are the scales different enough that the nominal weights have been twisted out of shape?

Seen that way, this round's results translate into a familiar list of defects. There is saturation: the NIA 15 gathered four teams around 85% of full marks and left a spread of 0.7. There is scale mismatch: AAII moves in the lower half of its range while NIA sits pinned at the top, and the two are inside the same 100 points. There is weight distortion: a nominal 15% split away to an effective 6%, and a nominal 25% to an effective 42%. There is missingness: the eight user-evaluation cells were filled in by follow-up reporting, but NIA's raw scores, conversion formula and item counts, and any foreign control group, are still blank. And uncertainty is unrecorded: no block carries a confidence interval. When that list comes out of training data, we write a report. There is no reason a dataset used to score models should be treated differently.

Carried into practice, the procedure is the four steps of the previous section, unchanged. The point of them is to measure the spread once the marking is over, and that one step is what makes it visible which metric was building the total.

In the public sector this kind of audit has already earned its keep. [Our piece tracing how local governments rebuilt AI training data the central government had already built](/report/korea-public-ai-data-duplication-audit-2026-08/en/) did exactly this. What we were looking at then was a data catalogue; this time it is a scorecard. The object changed, the procedure did not. Producing a report card and checking whether that report card measures what it claims turn out to be the same line of work.

> [!callout]
> The question this report asks is not who should have won. It is what those 100 points were measuring. Evaluation design is a policy choice, and there is no correct answer to what a country should pick as its national representative. But how the score produced by that choice opened up, and on which items, ought to be checkable from public numbers alone, and this time that only became possible on 27 August. Next round, it would be good if the checking were possible on the day of the announcement.

## References

### Policy and primary sources

- 1.Ministry of Science and ICT (2026). [Full transcript of the briefing on the second-stage evaluation results of the Sovereign AI Foundation Model project](https://www.korea.kr/briefing/policyBriefingView.do?newsId=156774781) (in Korean). Korea Policy Briefing, 18 August 2026. (Block allocations, aggregates and Q&A. Every vice-ministerial quotation in this report comes from this transcript, in our translation)
- 2.Yonhap News (2026). [MSIT publishes second-stage dokpamo evaluation scores, SK Telecom first](https://www.yna.co.kr/view/AKR20260827190600017) (in Korean). 27 August 2026. (Full disclosure of per-team block scores. The raw material for this report)
- 3.Yonhap News (2026). [LG, SKT and Upstage advance in dokpamo, Korea third globally in AI](https://www.yna.co.kr/view/AKR20260818049551017) (in Korean). 18 August 2026. (Second-stage results announcement, block averages and gaps)
- 4.Dailian (2026). [Top scores by item in the second dokpamo evaluation: Motif, SKT, LG](https://m.dailian.co.kr/news/view/1680372/) (in Korean). 20 August 2026. (Detailed marking rules, scaling and absolute rating, the Motif exception)
- 5.National Assembly Budget Office (2026). [Budget status and future tasks for becoming a top-three AI nation](https://www.nabo.go.kr/board/file/down.do?fid=33319071) (in Korean). NABO Focus no. 132, 22 January 2026. (First-stage fairness controversy and the absence of a metric for judging the 95% target)
- 6.IT Daily (2026). [Coverage of the Motif Technologies objection statement](https://www.itdaily.kr/news/articleView.html?idxno=241232) (in Korean). 27 August 2026. (The four items of the objection)
- 7.Bloter (2026). [Coverage of the Motif statement: the 4-point converted gap, the blind evaluation request, the data partner controversy](https://www.bloter.net/news/articleView.html?idxno=671971) (in Korean). 27 August 2026.
- 8.Herald Business (2026). [Coverage of the dispute over the dokpamo evaluation](https://biz.heraldcorp.com/article/10853666) (in Korean). 27 August 2026. (Including the [follow-up report](https://biz.heraldcorp.com/article/10854090))
- 9.Ministry of Economy, Trade and Industry, Japan (2024). Publication of first-round GENIAC performance evaluation results (in Japanese). Last updated 26 December 2024. (Precedent for a national programme evaluated by a third party on holdout data, and for how evaluation conditions and results were published)

### Methodology and data

- 10.Artificial Analysis. [Intelligence Benchmarking Methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking) (AAII v4.1.1). Accessed 28 August 2026. (The nine constituent evaluations, category weights, the declared English-only scope, and the sub-±1% 95% confidence interval)
- 11.Artificial Analysis. [Models Leaderboard](https://artificialanalysis.ai/leaderboards/models). Queried 28 August 2026. (Developer, country, release date and raw index score for 610 models. Used to reconstruct the band above 40 points and to check the ecosystem figures)

### Academic

- 12.Paruolo, P., Saisana, M., & Saltelli, A. (2013). [Ratings and rankings: voodoo or science?](https://arxiv.org/abs/1104.3009) Journal of the Royal Statistical Society: Series A, 176(3), 609–634. (The gap between nominal weights and main effects. University ranking, 0.20 against 0.09)
- 13.Miller, E. (2024). [Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations](https://arxiv.org/abs/2411.00640). arXiv:2411.00640. (Evaluations as experiments, bootstrap confidence intervals and paired tests)
- 14.Chiang, W.-L., et al. (2024). [Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference](https://arxiv.org/abs/2403.04132). arXiv:2403.04132. (Anonymous blind pairwise comparison, Bradley-Terry coefficients, bootstrapped confidence intervals)
- 15.Kipnis, A., Voudouris, K., Schulze Buschoff, L. M., & Schulz, E. (2024). [metabench — A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://arxiv.org/abs/2407.12844). arXiv:2407.12844. (28,632 items compressed below 3%; total score reconstructed at 0.58% RMSE, individual benchmarks at 1.24%)
- 16.Maia Polo, F., et al. (2024). [tinyBenchmarks: evaluating LLMs with fewer examples](https://arxiv.org/abs/2402.14992). ICML 2024, arXiv:2402.14992. (Estimating MMLU's 14,000 items from 100)
- 17.Son, G., et al. (2024). [KMMLU: Measuring Massive Multitask Language Understanding in Korean](https://arxiv.org/abs/2402.11548). arXiv:2402.11548. (35,030 questions across 45 subjects. GPT-4 and HyperCLOVA X reported alongside a human average)
- 18.[From KMMLU-Redux to KMMLU-Pro: A Professional Korean Benchmark Suite for LLM Evaluation](https://arxiv.org/abs/2507.08924). arXiv:2507.08924. (Korean professional-domain evaluation with recent reasoning models as a control group)
- 19.Stanford HAI (2026). [The 2026 AI Index Report](https://aiindex.stanford.edu/report/). (Korea third on notable model count, with five)

### Earlier Pebblous reports

- 20.Pebblous (2026). [Merge two pairs of physical-AI benchmarks and 22 models move](/report/physical-ai-benchmark-redundancy-audit-2026-08/en/). 28 August 2026.
- 21.Pebblous (2026). [Full marks without solving anything: eight AI benchmarks with no defence against gaming](/report/ai-agent-benchmark-trust/en/). 12 April 2026.
- 22.Pebblous (2026). [First in patents, thirty-fifth in talent](/report/hai-ai-index-2026-part2/en/).
- 23.Pebblous (2026). [The government built the AI training data, then local authorities built it again](/report/korea-public-ai-data-duplication-audit-2026-08/en/).
- 24.Pebblous (2026). [Korea's National AI Computing Centre breaks ground](/report/korea-ai-compute-center-npu-2026-07/en/).
- 25.Pebblous (2026). [You cannot buy sovereignty by distillation](/report/ai-distillation-sovereign-data/en/).
