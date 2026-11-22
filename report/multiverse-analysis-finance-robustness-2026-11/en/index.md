---
title: Multiverse Analysis: Does a Finance Paper
subtitle: AI agents reran 324 finance papers across every defensible setup: seven estimates in ten keep the published sign, but only one in four keeps significance
date: 2026-11-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Multiverse Analysis: Does a Finance Paper

_AI agents reran 324 finance papers across every defensible setup: seven estimates in ten keep the published sign, but only one in four keeps significance_

## Executive Summary

> [!callout]
> A study has rerun an entire corner of a research field. Two researchers at UT Dallas collected 324 finance papers that share a handful of events among them, then had AI agents gather the raw data again, rebuild the tables, and run the analyses again. Rather than judging each conclusion at the single setup its authors happened to report, they built every setup that could be defended in that paper's own context and ran them all at once. Applying multiverse analysis to a whole literature is what the authors present as the new part. Until now the method has mostly been run on one study at a time.

> The result in one line: of the 305 claims that assert a direction and report a test of it, 128 landed on the same conclusion under the setup the authors themselves reported, and once the full range of defensible setups is included, the share of specifications that keep the claim falls to about one in four on average. Direction, though, is seldom what gives way. On average seven estimates in ten still carry the published sign. The conclusions are not flipping; most of the time they point the same way while the phrase "statistically significant" no longer attaches to them.

> Follow the wobble and it leads to the data side. The choice that most often held the conclusion was not the estimator or the model but how the outcome variable was defined, and those are exactly the choices papers tended to say nothing about. It also breaks earlier than that. Among estimates that failed to reproduce, the observation count could be set side by side for 163 claims, and in 141 of those the row count alone was more than one percent away from the published figure. The table itself does not come back before any setup is compared. The question for a reader's own reports starts in the same place: which choices is this number standing on, and where are those choices written down?

<!-- stat-card -->
**81 → 64%** — When one choice changes — Among the 114 claims that reproduced at the authors' own setup. Change just one option for another the auditor allows and the claim-keeping share drops this far

<!-- stat-card -->
**68 vs 25%** — Sign survives, significance does not — Averages across 304 directional claims. Keeping the published sign: 68%. Keeping sign and significance together: 25%

<!-- stat-card -->
**87%** — Off from the table up — Of the 163 non-reproducing estimates whose observation counts could be lined up against the published ones, 141 differed in row count by more than one percent

<!-- stat-card -->
**42%** — Choices the authors never mentioned — 776 of the 1,855 choices the agent flagged as riskiest for the claim. A second coder running a different language model put the same figure at 34%

## A whole corner of a field was rerun, not one paper

The scope this time is a whole section of empirical finance. The study is **"An AI-Powered Multiverse Analysis of Empirical Finance Research: Evidence from Reused Natural Experiments"**, posted to arXiv on 18 November by Ruijiang Gao and Steven Chong Xiao of the Naveen Jindal School of Management at UT Dallas, and it runs to 66 pages with the appendix. It is a preprint that has not been peer reviewed, and the pipeline code is released under an MIT licence.

The method itself is not new. **Multiverse analysis** means that instead of reporting one analytical setup, you build every combination that could be defended for the same data and the same question, then look at how the results scatter. It was proposed in psychology in 2016. We covered the approach three weeks ago in a piece on [a tool that reruns a hurricane-fatality study 1,728 ways to find which choice split the conclusion](/blog/decide-multiverse-decision-importance/en/), so there is no need to write the primer twice.

What is new is the scale and the depth. This study gathered **324 finance papers** that reuse the same natural experiments and put all of them through one procedure, and rather than recomputing from the result tables the authors published, it **went back to the raw data and rebuilt the tables** before running anything. That trades depth on one study for a whole literature placed on a single ruler, and it changes the question you can ask. Not "does this conclusion hold" but "**at which choice does it give way**".

### 1.1. A median paper took about 22 hours to rerun

The scale came from agents rather than people. The pipeline the authors built splits into 18 role-specific prompts, so reading the paper, collecting data, rebuilding tables, auditing the available options and checking results each go to a different agent. Two Claude models did the running. In the paper's own words, **"The agents use Claude Sonnet 5.5 (Sonnet) and Claude Opus 5.5 (Opus)."** A design rule sits next to it: **"No agent checks its own work, and a script checks the files from each step before the next begins."** Nothing grades its own homework, and a script inspects the files before the next step starts.

The design does not stop at adding inspectors; it also narrows what each agent is allowed to see, so that nobody can look at a result first and then pick the analysis that suits it. Agents that rebuild and review the data cannot regress any outcome variable on the treatment variable, and no agent may read what third parties wrote about the paper it is handling. In the paper's words, **"No agent may read a third-party critique, comment, replication or reanalysis of the paper it analyzes."**

The cost appears as one line in the authors' repository documentation. For the median paper, roughly **22 hours from the first agent session to the last, and about 126 million model tokens**, most of them cache reads. Both figures are medians, and the hours are elapsed time rather than compute time. No dollar amount appears in either the paper or the repository.

One thing is worth nailing down before the numbers start. The denominators running through this article count **claims**, not papers. The researchers pulled one estimate from each paper, the one that paper puts forward as its main result, which gives 324 of them, and from there they use paper and claim as the same word. Of those 324, the direction is clear in 306, 16 assert no effect, and two fall into neither bin. That is why the denominator in this article keeps shifting between 324, 306 and 304.

## Which 324 papers made the sample

What ties the 324 together is that **they share an event**. Empirical finance has a habit of treating an outside event the researcher did not choose as if it were an experiment. A law changes; a regulator applies a trial rule to a subset of listed firms; an index swaps constituents every year. Events like these are called **natural experiments**, and the same event gets reused by paper after paper. The record of which paper used which event is the **RNE database** attached to the 2023 _Journal of Finance_ article by Heath, Ringgenberg, Samadi and Werner. Each experiment has its own tab, with the papers that used it and their outcome variables as rows.

From the version they downloaded, the researchers took the 19 experiment tabs that carry more than one paper out of 51, then dropped five that sit outside finance and accounting. Of the 14 that remained, the Morningstar sustainability rating tab ended with no paper surviving the pipeline. That leaves a final sample of **13 experiments and 324 papers**, which is why the number 14 still shows up in some tables and appendix material.

The 324 come from two sources. **201 are papers listed in the RNE database**, and **123 are papers the agents found in the citation networks around those** and added. The added set started from 4,863 candidates, of which 296 passed the inclusion screen, 283 entered the pipeline and 123 finished. On the RNE side, 201 of 337 listed entries made it to the end; the largest reason for dropping out was restricted, proprietary or hand-collected data, which accounted for 64. The authors flag this as a limitation of their own: papers built on hard-to-reach data are underrepresented in this sample.

The table below shows how many papers each of the 13 experiments brought in. Some, like the Russell index reconstitution and Regulation FD, brought more papers from the citation network than from the RNE listing; others, like the Reg SHO pilot and the mutual fund scandal, added none at all.

| Natural experiment | Period | RNE listed | Citation network | Directional claims |
| --- | --- | --- | --- | --- |
| Reg SHO pilot | 2005–2007 | 45 | 0 | 39 |
| Business combination laws | 1985–1991 | 22 | 9 | 30 |
| Mutual fund scandal | 2003 | 20 | 0 | 19 |
| Brokerage closures and mergers | 1984–2008 | 18 | 18 | 36 |
| Universal demand laws | 1989–2005 | 17 | 8 | 25 |
| Russell index reconstitution | Annual | 16 | 22 | 37 |
| Decimalization | 2000–2001 | 15 | 12 | 26 |
| Tick Size Pilot | 2016–2018 | 13 | 7 | 20 |
| Regulation FD | 2000 | 12 | 36 | 44 |
| EDGAR phase-in | 1993–1996 | 10 | 2 | 11 |
| BlackRock–BGI acquisition | 2009 | 6 | 1 | 6 |
| Dodd-Frank Act | 2010 | 6 | 8 | 12 |
| EBA capital exercise | 2011–2012 | 1 | 0 | 1 |
| Total |  | 201 | 123 | 306 |

****************

Three columns lifted from Table 1 of the paper. The directional-claims column sums the listed and added papers, and the total of 306 is 324 minus the 16 no-effect claims and the two that fit neither bin.

Results vary quite a bit by experiment. Pulling forward a measure used later in this article, the share of defensible combinations that keep a paper's claim ranges, averaged by experiment, from **14% for universal demand laws to 43% for the Dodd-Frank Act**. The **Reg SHO pilot**, which the RNE database carries more of than any other event, averages **21%** across its 39 directional claims, below the 25% of the sample as a whole. Which event a paper studies already makes a sizeable difference, and that is the first reason not to flatten any of these figures into "finance papers are like this".

## Each changed choice shaves off another slice

Conclusions do not collapse in one go. Step one choice away from where the authors stood, then two, and the share that keeps the claim walks down like a staircase. Two things have to be settled before that staircase makes sense: how the combinations being compared were built, and what counts as holding up.

### 3.1. How the grid of options is built

An agent extracts the decisions the analyst had to make in a given paper, along with the options available for each. The median paper yields 26 choices and 215 options. A choice-audit agent then rates every single option as **valid, questionable or invalid**. Across 69,189 ratings the split is 52%, 27% and 21%. From there, the four to eight most consequential choices are selected and fully crossed, and that cross-product is the paper's **grid**. What goes into it is not only the options rated valid: the questionable ones are included too, while the choices left out of the grid are generally fixed at the paper's own option, with a written note on why. The median grid has 6 choices and 192 specifications, a count kept between 100 and 250. The method of statistical inference is pinned down by the auditor before any combination is estimated.

Two totals appear in the paper for how many combinations this produces. Across the **323 papers with a numeric estimate, 62,409**, of which **59,106 belong to directional claims**. Most of the shares that follow are computed on the second number, so attaching them to the first gets them wrong.

The measuring sticks are also kept apart. **Reproduction** asks whether the specification the paper itself reported, run on data the agents rebuilt, satisfies three conditions at once: the sign matches what was published, the two-sided p-value under that paper's own inference method is at or below 0.10, and the magnitude is within 25% of the published value. The paper names that third condition **closeness**, and for linear models it also accepts a gap below 0.10 outcome standard deviations. It is this closeness that reappears in Section 6, where reproduction failures are split by condition. The **share of specifications that keep the claim**, on the other hand, counts each specification in the grid for whether it carries the published sign with p below 0.10, judged under the inference method the auditor pinned to the grid. The two measures can disagree about the same place.

### 3.2. At the paper's own setup, 128 of 305 came back

Start with the starting point. Of the **305 directional claims with a published test, the main estimate came back at the paper's own specification in 128**, or 42%. The raw data were gathered again, the tables rebuilt, the analysis run exactly as the authors described it, and six times in ten it did not land on the same result. Where it went wrong is Section 6's business.

This starting point separates everything that follows. Split the 304-claim regression sample in two and the 128 that reproduced average a **41%** claim-keeping share, while the other 176 average **14%**. A paper whose table could be rebuilt and one whose table could not live in different worlds.

### 3.3. How much falls away with each step of distance

Here is the core of it. The researchers scored every combination in the grid by **how many choices separate it** from the paper's own specification. Across the **267 directional claims** whose own specification could be located, the average at zero distance is 43% and the average three or more choices away is 28%. But those 267 include claims that never reproduced in the first place, and for them the share barely moves from 14–15% at any distance. The staircase is visible in the **114 claims that did reproduce**.

Within those 114, the authors' own specification keeps the claim **81%** of the time. Swap one choice for another defensible option and it is **64%**; two, **57%**; three or more, **47%**. Nothing falls over at once; it gets shaved a step at a time, and those four numbers are the paper's answer to the question in this article's title.

The upper four bars cover the 114 reproduced claims, the lower two all 267. The denominators differ, so the two series should not be read along one ruler. For the 267, the values at one and two changed choices were not published.

Why 81% rather than 100% is also on the record. Reproduction is judged under the inference method that paper used, while keeping the claim is judged under the inference method the auditor pinned to the grid. The same estimate can cross 0.10 depending on how the standard errors are clustered. In five papers there is the added wrinkle that the option pinned in the grid differed from the authors' own.

### 3.4. The robustness table at the back of a paper is systematically generous

One finding here transfers straight to practice. Within those same 267, combinations that **change one choice at a time average 36%**, while **the grid as a whole averages 30%**. One-at-a-time is exactly what the "robustness check" table at the back of a paper does. An author can fill that table in good faith and the format itself will still paint a kinder picture than the full grid. In the paper's words, **"specifications that change one choice at a time, as conventional robustness tables do, keep the directional claim more often than the full set of specifications."**

### 3.5. What disappears is the confidence, not the direction

Read only the figures so far and it is an easy jump to "finance conclusions have been overturned". The paper publishes the numbers that block that reading. Across the **304-claim regression sample**, the share that **keeps the published sign averages 68% with a median of 77%**, while the share that **keeps sign and significance together averages 25% with a median of 15%**. The authors put it as **"The estimates keep the published sign more often than they keep significance."** Direction mostly survives; the verdict of statistical significance dies first.

Counting by specification gives the same picture. Sorting the 59,106 combinations that belong to directional claims by sign and p-value gives **32% with the opposite sign**, **43% with the published sign but p at or above 0.10**, and **25% keeping both**. Among those carrying the published sign, 63% miss the 0.10 threshold. Weighting every paper equally instead of every specification barely moves the shares.

Averages do erase both tails, though. Of the 304, **71 claims (23%) have no specification at all that keeps the claim**, and **27% have a median specification whose sign is opposite to the published one**. The median z-statistic across specifications averages 0.77 with a median of 0.70, both below the 1.645 significance threshold. Underneath that average of 25% sit papers that hold up well and papers that do not stand anywhere.

## Data definitions hold the conclusion more often than estimators

Open the grid and count which choice was holding the conclusion, and the winner is not on the estimation side at all. It is **what the outcome variable is defined to be**. The counting works like this: take one choice, compute the claim-keeping share separately for each of its options, and treat the gap between the highest and the lowest as that choice's **range**. The choice with the widest range is the most influential one in that paper. For the median paper that range is **23 percentage points**, spread across papers from 0 to 50 points.

When one option holds the claim more than half the time while another drops below 10%, the researchers call that choice **decisive** for the result. Such a choice exists in **50 of 306 claims (16%)**. In roughly one paper in six, which option the analyst picked settled the conclusion outright.

The possibility that these ranges are just small-sample noise was ruled out first. Shuffle the option labels at random within each paper and repeat the same calculation 1,000 times, and the most influential choice's range drops to a median of **7 percentage points**, with decisive choices almost never appearing. The observed maximum range exceeded the 95th percentile of a paper's own permutation distribution in **68% of the 306 claims**. How much a choice moves the result is not explained by chance.

The table below groups choices into families by what kind of decision they are. The middle column is the average range that family moved; the right column is how often that family ranked first **within its own paper**, out of the 223 papers with a non-zero range. The point of the table is that the two columns have different winners.

| Family of choices | Papers | Mean range | Ranked first |
| --- | --- | --- | --- |
| RD and IV design | 46 | 0.21 | 7% |
| Estimator | 104 | 0.18 | 12% |
| Outcome definition | 213 | 0.17 | 21% |
| Sample period and windows | 191 | 0.13 | 13% |
| Treatment definition and timing | 163 | 0.12 | 8% |
| Control variables | 199 | 0.11 | 10% |
| Fixed effects and trends | 176 | 0.11 | 8% |
| Sample construction | 157 | 0.10 | 6% |
| Comparison group | 81 | 0.08 | 4% |
| Outliers | 100 | 0.07 | 3% |

****

Ten of the 13 families in Table 8 of the paper, leaving out the residual "Other", "Weighting" and "Functional form" rows. The papers column counts those where a choice in that family actually moved inside the grid, and the denominator for ranking first is the 223 papers with a non-zero range. The three columns rest on different weights and samples, so they should not be read across as one line.

The family with the widest average range is the fine print of regression discontinuity and instrumental variable designs: how wide to set the bandwidth, what polynomial order to use. Move one and the result swings hard. But that family only appears in the 46 papers that use such designs. The **outcome definition**, by contrast, moved in 213 papers and ranked first in **21% of the 223 papers with a non-zero range** — more often than any other family. The choice that shakes hardest and the choice that most often holds the conclusion sit in different places, and the latter is not a statistical question but a question of **what to count**.

### 4.1. One paper swung between 2% and 100% on the estimator alone

The paper walks through one anonymised example. It studies the effect of a law adopted by different states at different times, and the original authors estimated it with ordinary least squares plus fixed effects. When adoption is staggered, that estimator can use already-treated units as controls and can place negative weights on some group-period effects. The choice auditor rated the option **invalid**, and the grid instead carried three alternatives: a stacked difference-in-differences estimator built cohort by cohort, an imputation estimator, and a group-time estimator.

Here is how it came out. The paper's overall claim-keeping share is 61%, but **the estimator choice alone has a range of 98 percentage points**. The imputation estimator keeps the claim in 100% of specifications, stacked difference-in-differences in 81%, and the group-time estimator in **2%**. The second most influential choice has a range of just 17 points. Same data, same question, same event, and one line of estimator code decides nearly all of it.

Pebblous original diagram (reinterpretation of Fig. 6) — the dot layout is an illustrative reconstruction, not the paper's original scatter. The per-estimator shares (2%, 81%, 100%) and the 98-point range are the paper's own numbers from Figure 6.

## Most of those choices were never written down

What the papers actually wrote about those conclusion-holding choices was counted too. The procedure: an agent that has seen the grid results picks the four to six choices that most threaten the claim in each paper, then searches the text for whatever the authors said about them. Where an author left a verifiable assertion, the agents run that assertion on the rebuilt data as well. That produced **1,855 riskiest choices across 320 papers**, sorted into five classes.

Counted by choices, following Table 11 of the paper. The paper-count column of the same table cannot be added across bins, since one paper can fall into several, so it is not used here. The second coder's verdict appears in the text below.

The biggest bin is **silence**. For **42%** of the choices that most threaten the claim, the authors never mentioned the choice anywhere in the paper. Only 7% came with a justification or a check. The next largest bin, 27%, covers cases where the issue was discussed but the option that actually splits the result was not, and 18% covers cases where the authors left a verifiable assertion that the rerun did not bear out. Mentioned-and-dismissed accounts for 5%.

That 42% needs a caveat, because the coding was done by an agent as well. The researchers had a **second coder running a different language model** write its own definitions, then recode 116 choices drawn from 20 randomly selected RNE papers. The second coder saw silence in **34%** of them. The first coder had 42% on the same choices, and agreement between the two on whether a choice was unmentioned is a Cohen's kappa of 0.69. Rather than pinning it to one number, the honest reading is **somewhere between 34% and 42%**. Either way it is more than one in three.

One could object that estimators published after 2018 are being held against older papers. The researchers recounted with every choice related to staggered-adoption estimators removed. The silence share comes to **41%**, one point lower.

### 5.1. The objection that the auditor stacked the grid is already answered

A stronger objection aims at the grid itself. If the choice auditor rated an author's own option indefensible and dropped it, then the grid was built against that author from the start. This did happen: in **259 of the 324 papers** the auditor excluded at least one of the authors' options. So the researchers built a **companion grid** that restores every excluded option and ran it again under the same inference method.

The average across 251 directional claims rose from **23% to 26%, three percentage points**. The share went up in 115 papers and down in 77. Of the 633 restored options, 507 were ones the auditor had rated invalid, and keeping only the combinations in which every option is rated valid still leaves an average of 23%, against 24% overall. The correlation between the two versions is 0.97. Rebuild the grid in the authors' favour and the picture does not change.

Three weeks ago we noted [one limit of this method](/blog/decide-multiverse-decision-importance/en/): a decision that never makes it onto the list has no place to receive an importance score. This study moves one step along by having agents assemble that list, and by checking it against what the authors said about each choice. What falls outside the list still goes uncounted. The difference here is that a good deal was already empty **inside** it.

## Reproduction breaks earlier than the specification

So far this has been about what happens when choices change. But most of the time it has already gone wrong earlier than that, at the point where **the table is rebuilt**. As Section 3 showed, the main estimate failed to come back at the paper's own specification in 177 claims. Splitting those 177 by which condition they failed gives this.

| Condition that failed | Claims |
| --- | --- |
| p-value only | 49 |
| Closeness only | 35 |
| Sign only | 0 |
| Closeness and p-value | 33 |
| Sign and p-value | 13 |
| Closeness and sign | 5 |
| All three | 42 |
| Claims that did not reproduce | 177 |

********

Table 4 Panel B of the paper, split into non-overlapping bins, so the seven rows sum to 177. Grouped by condition rather than by combination, the counts are 137 failing on p-value (77%), 115 on closeness (65%) and 60 on sign (34%), and those three overlap.

The most common failure is the p-value, but something happens further upstream. In the paper's words, **"our number of observations differs from the published number by more than 1% in 141 of 163 claims (87%)"**. Among claims that did not reproduce, **141 of the 163 where the observation count could be checked on both sides were off from the published row count by more than one percent**. Before anyone argues about estimation method, **the same table is not coming back**. The median absolute gap between the published estimate and the re-run one is 46% of the published value, and papers with larger sample-size gaps also show larger estimate gaps (Spearman correlation 0.28 across 278 papers).

### 6.1. Posting for a person and posting for a machine are two different jobs

The sharpest number on what separated reproduction from failure comes from the **authors' own materials**. Of the 305 directional claims with a published test, agents located the authors' data or code for only **18**, and 15 of those 18 reproduced, or **83%**. The 287 where nothing was found reproduced at **39%**. Across the whole sample, materials were found for 20 papers, eight of which included the data itself.

The wording here has to be exact. This is not a measure of **whether the authors shared anything**. What the study measured is whether the agents could reach the materials, and a footnote spells out why that differs: **"for some papers, the authors share their code on the journal's website, but the website blocks the agents' access. We count the authors' materials as missing for these papers."** Where a journal site blocked the agents, the materials were **counted as absent**. Posting something a human can open in a browser and leaving something a machine can fetch were treated as separate acts in this study.

The gap survives a regression that compares only within the same natural experiment. With experiment fixed effects, a claim with the authors' materials has a **46 percentage point higher** probability of reproducing (p<0.001). That 46 points is a regression coefficient and is not the same number as the 43.9-point raw difference between 83% and 39%. The two do not belong in the same sentence.

### 6.2. The lines the paper drew around itself

The instrument in this study is also an agent, and the researchers wrote its limits into the text. First, **"the models' training data likely include most sample papers, and we cannot determine whether an agent recalls a paper or analyzes it independently."** Most sample papers are probably in the training data, and there is no way to tell recall from independent analysis. Second, each paper was run **once**, with a single choice auditor. How much the choices and ratings would shift if another agent repeated the work is unknown.

The checks and their limits are quantified too. A first audit found errors requiring correction in 49 papers, and no grid passes final review until every error is resolved. Even so, after the last audit **108 serious issues remained open across 69 papers, 14 of which could change an estimate**. The data are themselves pulled fresh from WRDS and public sources as of 2026, which differs from the vintages the original authors used years earlier, and **77 papers used substitute data for at least one input**. The researchers write that **"alternative data may explain part of the low robustness we observe"**.

A measurement running the other way is on the record as well. For each paper they picked one choice that moved inside the grid at random, split its options in half, and measured how closely the values computed separately on each half track each other across papers, averaged over 200 redraws. Both the claim-keeping share and the median z-statistic come out at **0.93**. A value of 1 would mean the two halves move together exactly, so cutting the grid in half leaves the ordering of papers more or less intact. The 108 open issues and this 0.93 are numbers to read together.

> [!callout]
> And a line is drawn in the conclusion: **"a low share does not establish that the claim is false."** A low claim-keeping share means the claim **depends on analytical choices**, not that it is wrong. The authors note up front that no study would survive every defensible specification, and add that a true effect can lose significance under options that add noise or shift what is being measured. Turning any figure in this article into "three quarters of empirical finance has collapsed" is a reading the paper explicitly rules out.

## Why this matters to Pebblous

What Pebblous sells is not a model but the work of measuring whether data is fit to use. What this paper shows is that the fitness checklist has been missing a line. Data can have no gaps, no duplicates and clean labels, and the same number still will not come back if the choices made while pulling that number out were never written down. The Section 4 finding that the conclusion was most often held by **how the outcome variable is defined**, rather than by the estimation technique, is the evidence for that. A new item belongs on the data quality checklist: **the record of analytical choices**.

### 7.1. The most underrated number in the paper is 87%

The figure that will travel is the 25% average, but for anyone working on the data side the one that stings is **87%**. Among estimates that did not reproduce, 141 of the 163 claims where observation counts could be compared were off from the published row count by more than one percent. Before any combinations get compared, the same table does not come back, because the filter conditions, the join order, the missing-value handling and the period boundaries are written down nowhere. That is a **data pipeline** problem rather than a statistics problem.

The materials figures in Section 6 point the same way. The 18 claims whose materials the agents could reach reproduced at 83%; the 287 they could not reach, at 39%. And what the study counted as "no materials" includes **cases where a journal site blocked access**. Uploading something a person can log in and open is a different act from leaving something a machine can fetch and run. That gap is exactly what the phrase AI-Ready Data points at, and in this study it shows up as the difference between an 83% and a 39% reproduction rate.

The closest precedent to "record the choices" is the piece we ran in July on [a science data pipeline that logs its own preprocessing history](/blog/redi-data-provenance-pipeline/en/). What it takes for stored research data to become usable for training was covered separately in our [July report](/report/research-data-ai-ready-pipeline-2026/en/), and the shape of pipelines that measure quality but cannot repair it was the subject of a [June article](/report/autoresearch-blog-pipeline-comparison/en/).

### 7.2. Five questions to put to your own report

We could not find citable evidence on how companies record their analytical choices, so the five lines below are questions rather than cases. All of them can be asked of the documentation alone, before any tool gets chosen.

- How many choices deep does this number in the report **stay standing**? Swap one of them for another defensible option and what happens?
- Do our checks **only ever change one thing at a time**? That format paints a systematically kinder picture
- Where is the **definition of the outcome variable** written? In a metric dictionary, or only inside a query?
- If this table were **rebuilt six months from now, would the row count match**? If not, which piece went unrecorded?
- Is the data and code we send outside sitting **somewhere a machine can reach**?

### 7.3. What kind of work this is

Recording analytical choices, keeping metric definitions in one place, checking periodically that the same table still rebuilds. This is not the kind of work a better model solves. Better agents lower the cost of rerunning, but if nothing records what was chosen, there is nothing to rerun in the first place. It is standing work on the data side, and recognising what kind of work it is comes first.

It sits on a different axis from the [hallucinated-citation report](/report/hallucinated-citation-accumulation-2026-11/en/) we published this morning. That one is about **something that does not exist entering the record**; this one is about **the way real things were chosen going unrecorded**. The first can be caught by comparison. The second has no original to compare against.

**Separating fact from interpretation.** Every figure and direct quotation in Sections 2 through 6 comes from the body of arXiv:2611.25184 and its Tables 1, 4, 5, 6, 8, 9 and 11; the 22 hours and 126 million tokens per paper come from the README of the authors' public repository. How the denominators are separated, the arrangement of tables and figures, and all of Section 7 are Pebblous interpretation. What we did not check is also on the record: we did not read past page 35 of the appendix, we did not count how the academic world has reacted to this study, and submission rules at Korean journals and conferences, along with corporate practice on recording analytical choices, were outside this round's scope. The same reason applies to the absence of a comparison with what it costs a human to reproduce one paper: we could not verify a comparable figure in a primary source.

## References

Nearly every figure in the body comes from item 1 alone; only the hours and token count per paper come from item 2. Items 3 and 4 are works the body refers to by name. Their bibliographic details were taken from the reference list of item 1 and were not checked against the originals.

### Primary — the documents this article stands on

- 1.Ruijiang Gao, Steven Chong Xiao, "An AI-Powered Multiverse Analysis of Empirical Finance Research: Evidence from Reused Natural Experiments" (18 November 2026, v1, 66 pages with appendix). [arXiv:2611.25184](https://arxiv.org/abs/2611.25184), [doi:10.48550/arXiv.2611.25184](https://doi.org/10.48550/arXiv.2611.25184) — the 324 papers and 13 experiments, 128/305, 68 versus 25%, 81→64→57→47, 36 versus 30%, silence at 42%, the 87%, 83 versus 39% and every direct quotation come from here. It is a preprint that has not been peer reviewed.
- 2.Ruijiang Gao, Steven Chong Xiao, [agentic_multiverse_analysis](https://github.com/ruijiang81/agentic_multiverse_analysis) repository README (MIT licence) — the median 22 hours, 126 million tokens and 18 role prompts in Section 1 come from here. Both figures are medians, and no dollar amount is given.
- 3.Davidson Heath, Matthew C. Ringgenberg, Mehrdad Samadi, Ingrid M. Werner, "Reusing natural experiments," **Journal of Finance** 78(4), 2329–2364 (2023) — the source article behind the RNE database referred to in Section 2. Bibliographic details taken from the reference list of item 1.
- 4.Sara Steegen, Francis Tuerlinckx, Andrew Gelman, Wolf Vanpaemel, "Increasing transparency through a multiverse analysis," **Perspectives on Psychological Science** 11(5), 702–712 (2016) — the work behind "proposed in psychology in 2016" in Section 1. Bibliographic details taken from the reference list of item 1.

### Earlier Pebblous articles

- 5.[DECIDE Finds Which Choice Changed the Conclusion](/blog/decide-multiverse-decision-importance/en/) (31 October 2026) — the article Sections 1 and 5 separate this one from. That piece reruns a single study 1,728 ways to name the culprit; this one reruns a field to ask which claims hold.
- 6.[REDI Pipeline Auto-Records Data Preparation](/blog/redi-data-provenance-pipeline/en/) (29 July 2026) · [From Stored Research Data to AI Training Data](/report/research-data-ai-ready-pipeline-2026/en/) (23 July 2026) · [We Measure. We Just Don't Self-Correct Yet.](/report/autoresearch-blog-pipeline-comparison/en/) (25 June 2026) — the precedents cited in Section 7.
- 7.[Hallucinated Citations: The Model Gets Fixed, the Papers Stay As They Are](/report/hallucinated-citation-accumulation-2026-11/en/) (23 November 2026) — the article Section 7 separates by axis of defect. That one is about something that does not exist entering the record.
