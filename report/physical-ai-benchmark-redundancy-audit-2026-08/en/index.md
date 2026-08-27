---
title: Collapsing Two Benchmark Pairs Moved 22 of 51 Physical AI Models
subtitle: A Metric AI Lab preprint audits the 51-model, 12-benchmark matrix behind physical AI leaderboards
date: 2026-08-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Collapsing Two Benchmark Pairs Moved 22 of 51 Physical AI Models

_A Metric AI Lab preprint audits the 51-model, 12-benchmark matrix behind physical AI leaderboards_

## Executive Summary

> [!callout]
> Physical AI models are graded on a different exam at every company. The benchmark sets that vendors pick barely overlap, so the matrix of models against benchmarks is mostly empty. Where the sets do overlap, the trouble is worse. When one report measures the same ability several times and then averages those scores, the headline number tilts according to how often that ability was measured rather than how good the model is.

> Metric AI Lab filled in that sparse matrix for 51 models and 12 benchmarks and measured the overlap statistically. Every one of the twelve benchmarks correlated positively with every other, and two of the pairs were effectively measuring the same thing. Collapsing each pair into a single column and recomputing the ranking moved 22 models by more than three places. The authors do not claim the new ordering is the correct leaderboard. What they show is only that part of where a model stands is an artifact of how the exam was assembled, not of what the model can do.

> We opened the actual model reports from Google, BAAI and Alibaba and checked them against the paper, and the paper turns out to have understated the case. Google's report assigns half of its embodied reasoning score to four pointing benchmarks, and BAAI's report contains both of the substitute pairs the paper identifies. An evaluation suite is a dataset too. If it carries duplicates, skewed weights and inconsistent provenance, whatever we do to training data has to be done to evaluation data as well.

<!-- stat-card -->
**22 / 51** — Models that moved three or more places — After each substitute pair was collapsed into one column

<!-- stat-card -->
**0.487** — Mean pairwise rank correlation across benchmarks — All 66 pairs positive, not a single negative correlation

<!-- stat-card -->
**50%** — Share of the score the four pointing benchmarks take — Verified by us in Google's Gemini Robotics 1.5 report

<!-- stat-card -->
**76%** — Items still left after cutting 12 benchmarks to 4 — 39,867 items down to 30,291, our own calculation

## Every Model Card Sits a Different Exam

If you want to know how good a robot model is, you open its model card. The exam laid out there differs from company to company. The benchmarks Google grades on and the benchmarks Alibaba grades on barely overlap, and where they do not overlap the cell is simply empty. Put models on the rows, benchmarks on the columns, fill in the published scores, and the table is mostly holes. A preprint posted to arXiv on 26 August takes that hole-ridden table itself as its data.

The authors set out two consequences of those holes. First, there is no shared axis on which models can be compared. Physical AI, the paper notes at this point, has no MTEB-style leaderboard of the kind text embedding has. Second, the numbers that do get reported can mislead. A headline score is usually an average over the chosen benchmarks, and when those benchmarks measure overlapping abilities the average quietly counts the shared signal twice.

The paper's example is pointing. That single capability, outputting the coordinates of a place to grasp or an empty patch of table, gets graded several times inside one report. Gemini Robotics-ER 1.5 reports Point-Bench, RefSpatial, RoboSpatial-Pointing and Where2Place; RoboBrain 2.0 reports RoboSpatial, RefSpatial-Bench and Where2Place; Qwen3-VL reports RefSpatial and RoboSpatial-Home. The same repetition shows up in 3D configuration reasoning and relational question answering, the paper adds.

### 1.1. We Opened the Three Reports Ourselves

This is one of the few claims in the paper that can be checked from outside it, so we pulled the three model reports and read them against it. All three said what the paper says they say. And the real situation is worse than the paper's description of it.

Google DeepMind's Gemini Robotics 1.5 report states how it computes its embodied reasoning score: "The embodied reasoning score is a weighted average of 50% spatial reasoning benchmarks and 50% question answering benchmarks (both image and video)." The report puts four benchmarks in that spatial reasoning bucket, and all four are pointing benchmarks.

| Bucket | Benchmarks and scores (thinking mode) | Bucket mean | Share of score |
| --- | --- | --- | --- |
| Spatial reasoning (pointing), 4 | Point-Bench 71.6 · RefSpatial 48.5 · RoboSpatial-Pointing 31.1 · Where2Place 59.0 | 52.6 | 50% |
| Question answering, 11 | BLINK 57.8 · CV-Bench 84.3 · ERQA 54.8 · EmbSpatial 78.4 · MindCube 54.7 · RoboSpatial-VQA 79.3 · SAT 76.7 · Cosmos-Reason1 72.2 · Min Video Pairs 72.5 · OpenEQA 55.0 · VSI-Bench 45.8 | 66.5 | 50% |
| Embodied reasoning score | 0.5 × 52.6 + 0.5 × 66.5 = 59.55 (our arithmetic check) | 59.6 | As printed in the report |

Source: the Gemini Robotics-ER 1.5 score table in the Gemini Robotics 1.5 technical report (arXiv:2510.03342), regrouped by bucket by us. Bucket means and score shares are our conversion of the weighting rule the report states. That report calls its own set 15 benchmarks, a different set from the 12 the audit paper works with.

The table also shows that the weighting rule is not just prose but the arithmetic that produced the total. Mix the spatial bucket mean of 52.6 and the question answering mean of 66.5 in equal parts and you get 59.55; the embodied reasoning score printed in the same table is 59.6. They agree to one decimal place.

Convert that into per-benchmark weights and a single pointing benchmark carries about 12.5% of the score while a single question answering benchmark carries about 4.5%. One pointing benchmark weighs more than two and a half question answering benchmarks. And two of those four, RefSpatial and Where2Place, are exactly the pair the audit paper flags as substitutes for each other.

> [!callout]
> The weighting distortion the paper illustrates is two of twelve columns under its own equal weighting, 16.7%. In a real vendor report the same ability takes half. The paper was putting it gently.

BAAI's RoboBrain 2.0 report says it evaluated on nine spatial reasoning benchmarks and lists BLINK, CV-Bench, EmbSpatial, RoboSpatial, RefSpatial-Bench, SAT, VSI-Bench, Where2Place and ShareRobot-Bench. Eight of the nine are among the audit paper's 12, and those eight contain both substitute pairs the paper identifies: EmbSpatial with CV-Bench, and Where2Place with RefSpatial-Bench. The paper used only the pointing pair as its example and never notes that both pairs sit inside a single vendor's suite. Alibaba's Qwen3-VL report uses five benchmarks in its embodied bucket, ERQA, VSI-Bench, EmbSpatial, RefSpatial and RoboSpatial-Home, with RealWorldQA from its general question answering bucket and BLINK from its multi-image bucket on top.

### 1.2. How the Holes in the Table Were Filled

The authors began by indexing 51 physical AI benchmarks from model cards, papers and official blogs. This is where the number 51 first appears, and here it counts **benchmarks**. Indexed the same way, the models numbered 152. Three criteria narrowed the 51 benchmarks to 12: at least five models must have reported a score on it (density), it must recur in recent model reports (recency), and together the set must cover the main tasks physical AI is asked to do (diversity). The last criterion is defensive. It keeps the authors from picking twelve variants of one task and then announcing that they found redundancy.

Those 12 benchmarks were then used to filter the models. Keeping only models with scores on at least two thirds of them, 8 of 12, left 51 of the 152. That is the second appearance of 51. This one counts **models** and has nothing to do with the first. The surviving models were released between 2024 and 2026, come from 15 providers, mix open-weight and closed, and range from 1B to 241B parameters.

Fifty-one models by twelve benchmarks makes 612 cells. Published scores alone did not fill enough of them to compute covariances, so the authors ran the empty cells themselves. They used each benchmark's official evaluation code and prompts as published, with greedy decoding and that benchmark's own answer-parsing rules. That produced 159 cells from their own runs. In the end 564 of the 612 cells were filled and 48 remained empty.

The appendix breaks down where the 564 filled cells came from. 405 came from published values, and those split three ways again. 379 were copied straight from a model card or paper, 25 were **medians taken where published values conflicted with each other**, and one was borrowed from a twin model. The remaining 159 are the authors' own runs. That figure of 25 comes back later.

How the third criterion, diversity, was actually met shows up in the grouping the authors attach to the set. The twelve fall into five groups. The two **pointing** benchmarks (RefSpatial-Bench, Where2Place) answer with coordinates and come closest to the format a robot policy actually consumes. Four **single-image relational** benchmarks (EmbSpatial, CV-Bench, OmniSpatial, RealWorldQA) show one scene and ask about relative position, depth, count or appearance from another viewpoint. Three **multi-view and video** benchmarks (MindCube, SAT, VSI-Bench) cannot be answered from a single frame: MindCube supplies two to four views of one scene, VSI-Bench a walkthrough video. Two **embodied** benchmarks (ERQA, RoboSpatial) frame the question from a robot's point of view, asking what can be grasped, where an object may be placed and whether a configuration is feasible. **BLINK** stands apart on its own as a general visual perception benchmark.

The grouping comes with a caveat. The authors are explicit that they use it only as the taxonomy a reader would expect and not in the analysis. They did not pre-group the benchmarks and then measure correlations within the groups. The redundancy diagnosis that follows is computed from the scores alone, blind to these five groups. That is why the results land in places the group boundaries do not predict. In section 5, both the bond that survives to the end and the one unexpected negative correlation cut across groups.

Below is the profile of the final twelve. The spread in item counts stands out: a 100-item benchmark and a 21,000-item benchmark sit in the same table. The Gini coefficient g measures how widely a benchmark spreads the models apart, and it returns in the selection procedure of section 4.

| Benchmark | Ability it claims to measure | Items | n | Mean | Min–max | g |
| --- | --- | --- | --- | --- | --- | --- |
| VSI-Bench | Visual-spatial intelligence (video) | 5,130 | 51 | 46.9 | 12.6–69.5 | 0.153 |
| EmbSpatial | Egocentric spatial relations | 3,640 | 51 | 73.2 | 43.2–84.1 | 0.057 |
| RefSpatial-Bench | Spatial referring (pointing) | 200 | 51 | 29.9 | 0.3–72.2 | 0.343 |
| Where2Place | Affordance pointing, free space | 100 | 50 | 42.3 | 7.6–76.0 | 0.265 |
| ERQA | Embodied reasoning and planning | 400 | 49 | 44.5 | 25.7–65.0 | 0.104 |
| CV-Bench | Classic computer vision as VQA | 2,638 | 49 | 81.7 | 61.0–89.2 | 0.039 |
| SAT | Dynamic spatial aptitude | 150 | 49 | 68.6 | 45.3–88.0 | 0.097 |
| RoboSpatial | Robot-centric spatial reasoning | 350 | 47 | 50.5 | 29.4–72.6 | 0.103 |
| RealWorldQA | Real-world spatial QA | 765 | 42 | 68.0 | 40.6–80.4 | 0.069 |
| OmniSpatial | Comprehensive spatial cognition | 1,533 | 42 | 46.4 | 26.5–59.6 | 0.071 |
| MindCube | Spatial mental modeling (multi-view) | 21,154 | 42 | 42.2 | 18.7–69.2 | 0.153 |
| BLINK | Multi-image visual perception | 3,807 | 41 | 65.4 | 43.8–86.3 | 0.106 |
| Total |  | 39,867 |  |  |  |  |

Source: Table 1 of the paper. n is the number of the 51 models with a score on that benchmark; g is the Gini coefficient of the raw score spread across models. The item total of 39,867 is our own sum. Ten of the twelve are multiple choice; only RefSpatial-Bench and Where2Place are scored by whether a predicted image coordinate falls inside the target mask.

### 1.3. One Name Points to Several Exams

What those 25 cells look like, the ones where published values conflicted and a median was taken, is visible on a single page of Google's report. In one table for one model, RoboSpatial-Pointing is listed at 31.1 and RoboSpatial-VQA at 79.3. That is a 48-point gap. Qwen3-VL uses yet another variant, RoboSpatial-Home. But in the audit paper's matrix RoboSpatial is one column, and that column's scores run from 29.4 to 72.6. The 79.3 falls outside that range.

Whichever value went in, the other one cannot also be in that column. This is not to say the authors got it wrong. Taking only a particular split may well be what the official protocol requires. The accurate statement is this: one benchmark name refers to different splits in different reports, a single matrix column has to pick one of them, and that pick is not recorded in the matrix. It is a different kind of problem from the missing values and outliers you meet when treating benchmark scores as data. What wobbles here is not the value but what the value refers to.

Nor is it only names that wobble. Setting two of Google's tables side by side, we found a place where the same benchmark score for the same model is printed twice in the same report with different values. The table that gathers all 15 benchmarks onto one page puts Gemini 2.5 Pro's Where2Place at 37.0; the later table that breaks pointing down by sub-task puts the same cell at 22.0. A 15-point gap. The other six cells in that row are identical to the decimal across both tables, and the RefSpatial row just above differs only as 49.3 against 49.2, which is rounding. Only that one row disagrees.

So the 25 cells where the audit paper found published values in conflict are not only something that happens between reports. It happens inside one report as well. From the point of view of whoever is building the matrix, cells like this are hard to even notice. Both tables live in the same document, so there appears to be only one source to check against in the first place.

The skeleton of the matrix, though, does reproduce from outside. We counted, in each of the three model reports, only the benchmarks that belong to the audit paper's twelve, and matched our counts against the published-cell counts in the paper's appendix.

| Model | Count we made in the report | Published cells in the paper's appendix | Match |
| --- | --- | --- | --- |
| Gemini Robotics-ER 1.5 | 10 (RealWorldQA and OmniSpatial excluded) | 10 | ○ |
| RoboBrain-32B-2.0 | 8 (ShareRobot-Bench excluded) | 8 | ○ |
| Qwen3-VL-235B-A22B-Instruct | 7 | 7 | ○ |

Cross-check: we counted directly in each model report (arXiv:2510.03342, 2507.02029, 2511.21631) and matched against the Pub. column of Table 4 in Appendix A of the audit paper.

All three match. The authors make no claim to have verified the published scores themselves, but the skeleton of which benchmark came from which report does yield the same counts when recounted from outside. Other defects that make benchmark scores hard to trust, such as [test items leaking into pretraining data](/blog/llm-benchmark-contamination/en/), are out of this audit's range. What this paper asks is not whether the scores are right, but whether, granting that they are, the twelve are measuring twelve different things.

## How Much Do the Twelve Overlap?

This kind of audit is not new. Text LLMs have precedents. Metabench applied item response theory to the 28,632 items of six LLM benchmarks and showed that the scores of more than 5,000 models could be reconstructed from under 3% of the items. Burnell and colleagues factor-analysed 29 LLMs across 27 tasks and extracted three capability factors, which the Metric paper cites as explaining 82% of the variance.

Both precedents need item-level response data: which model got which item right. Physical AI has no such data. Aggregate scores are all that gets published. That is where this paper makes its trade. It gives up resolution, meaning it cannot say which items are redundant, and in exchange answers the same question at the benchmark level. What it buys is reach. With aggregate scores and enough overlap, the procedure works in any field. The authors state in their conclusion that the audit uses nothing specific to physical AI.

### 2.1. All 66 Pairs Came Out Positive

The first computation is pairwise rank correlation. Benchmarks differ in difficulty, so comparing raw scores mixes difficulty in with information. In the paper's table, mean scores range from the low thirties to 82. If two benchmarks measure the same ability and differ only in difficulty, the level and spread of the scores will differ but the order they put models in will be the same. So the authors take Spearman correlation, computed on ranks, as their primary measure, and z-standardise each column before entering any multivariate analysis.

Twelve benchmarks yield 66 pairs. The mean correlation was 0.487, and **all 66 were positive**. Not one negative correlation means that a model doing well on any one benchmark generally does well on any other. Two pairs came in above 0.8.

- EmbSpatial and CV-Bench, ρ = 0.876 (95% CI 0.78–0.93, n = 49)
- Where2Place and RefSpatial-Bench, ρ = 0.860 (0.73–0.93, n = 50)

Next highest are ERQA with RealWorldQA at 0.758 and RealWorldQA with OmniSpatial at 0.748. At the other end sits BLINK. It is the most distinctive benchmark by correlation, and it forms its own branch in the hierarchical clustering dendrogram.

### 2.2. Can the Other Eleven Rebuild the Twelfth?

Comparing two at a time is not enough. A benchmark may have no single twin and still be reproducible from a combination of the other eleven. The authors ran a ridge regression predicting each benchmark from the remaining eleven and computed a leave-one-model-out cross-validated coefficient of determination. A high value means the benchmark can be rebuilt from the rest; a low one means it gives something the others do not. The table below shows the three at each end.

| Benchmark | Reconstructability R² | Distinctiveness 1−R² | Three strongest predictors |
| --- | --- | --- | --- |
| Where2Place | 0.727 | 0.273 | RefSpatial-Bench, MindCube, BLINK |
| RefSpatial-Bench | 0.721 | 0.279 | Where2Place, ERQA, MindCube |
| ERQA | 0.706 | 0.294 | MindCube, RefSpatial-Bench, RealWorldQA |
| (Middle six omitted: CV-Bench 0.614, MindCube 0.599, SAT 0.468, EmbSpatial 0.463, OmniSpatial 0.453, VSI-Bench 0.421) |  |  |  |
| BLINK | 0.378 | 0.622 | RefSpatial-Bench, MindCube, VSI-Bench |
| RoboSpatial | 0.351 | 0.649 | VSI-Bench, MindCube, RealWorldQA |
| RealWorldQA | 0.319 | 0.681 | ERQA, OmniSpatial, RoboSpatial |

Source: Table 2 of the paper. Leave-one-model-out cross-validated coefficient of determination. We omitted the middle six for space.

The median benchmark has about half of its variance recoverable from the other eleven. The three worst offenders are Where2Place, RefSpatial-Bench and ERQA, and those three keep turning up as each other's predictors. Read the right-hand column downwards and MindCube appears often: it is the top predictor in seven of the eleven regressions, acting as the hub of shared behaviour in this suite. ERQA and RefSpatial-Bench follow at five each.

The authors attach a caveat here. A low R² may mean the benchmark carries distinctive information, or it may mean the benchmark is noisy and therefore unpredictable from anything. Separating the two requires repeated evaluation under resampled prompts, decoding seeds and parsing rules, and current reporting practice does not supply that data. They also note that redundancy is not a one-directional axis. A heavily overlapping benchmark is useful as a representative of the shared structure, and a distinctive one is useful as complementary evidence. That distinction is what the selection procedure in section 4 rests on.

### 2.3. Where Did These Exams Come From?

The redundant three appear to have something in common. Working from the introducing citations in section 2 of the paper, we classified each benchmark by whether it came from an independent paper written to evaluate something or was released alongside a model. This classification is ours, not the paper's, so we give the evidence with it.

| Benchmark | Introducing source | Character | R² |
| --- | --- | --- | --- |
| Where2Place | RoboPoint (2406.10721) | Model-release by-product | 0.727 |
| RefSpatial-Bench | RoboRefer (2506.04308) | Model-release by-product | 0.721 |
| ERQA | Gemini Robotics (2503.20020) | Model-release by-product | 0.706 |
| CV-Bench | Cambrian-1 (2406.16860) | Model-release by-product | 0.614 |
| MindCube | Wang et al. (2506.21458) | Benchmark-and-method paper | 0.599 |
| SAT | Ray et al. (2412.07755) | Training-data-and-benchmark paper | 0.468 |
| EmbSpatial | Du et al. (2406.05756) | Dedicated benchmark paper | 0.463 |
| OmniSpatial | Jia et al. (2506.03135) | Dedicated benchmark paper | 0.453 |
| VSI-Bench | Yang et al. (2412.14171) | Dedicated benchmark paper | 0.421 |
| BLINK | Fu et al. (2404.12390) | Dedicated benchmark paper | 0.378 |
| RoboSpatial | Song et al. (2411.16537) | Dataset paper | 0.351 |
| RealWorldQA | xAI Grok-1.5V blog post | Model-release by-product | 0.319 |

Our own classification. We opened the introducing sources cited in section 2 of the paper and separated benchmarks that came from evaluation-only papers from those released alongside a model. The R² values are from Table 2 of the paper.

Held up against this classification, the two substitute pairs behave differently. Where2Place and RefSpatial-Bench were both released alongside a robot pointing model. That two exams from the same lineage, RoboPoint and RoboRefer, should substitute for each other makes sense. EmbSpatial and CV-Bench, by contrast, have different lineages. One is an evaluation-only paper, the other a by-product of the Cambrian-1 model paper, and they still sit together at 0.876.

That the three most redundant benchmarks are all model-release by-products is worth noticing. Exams released to show off a model's strengths do appear to resemble one another. But there is a counterexample. RealWorldQA, the most distinctive benchmark of the twelve, is also a model-release by-product. With only twelve observations no statistical test is available, so we cannot go so far as to say provenance determines redundancy.

## Collapse Two Pairs and the Ranking Moves

Redundancy on its own is not yet a practical problem. The problem arrives when a total is laid on top of it. The authors took the arithmetic mean of each model's 12 scores and lined the models up from high to low, which is the same computation a model card performs. But give all twelve equal weight and the weight on any given ability becomes proportional to how many times the suite measures it. In this matrix, pointing takes two of the twelve columns and spatial reasoning over video takes one.

So the authors replaced each pair the previous section flagged as substitutes with the mean of its two columns. RefSpatial-Bench and Where2Place become one column, EmbSpatial and CV-Bench become another, and with the eight untouched benchmarks that leaves ten columns. The arithmetic mean and the ranking were recomputed over those ten. Nothing was removed; what had been counted twice is now counted once.
