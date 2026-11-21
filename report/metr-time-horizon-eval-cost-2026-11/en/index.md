---
title: METR Prices Its Own Exams, and the Expensive Ones Take AI Months Longer
subtitle: METR
date: 2026-11-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# METR Prices Its Own Exams, and the Expensive Ones Take AI Months Longer

_METR_

## Executive Summary

> [!callout]
> In this quarter's update, the AI evaluation organization METR put a price on its own exams alongside the models it was grading. The price covers turning one task into a containerized environment and then running and scoring it 100 times, and the report calls it Lifecycle Cost. The headline capability figure barely moved: the 50% time horizon of public frontier models doubles roughly every 3.61 months, close to the trend METR published last time. On speed, nothing new.

> What changed is the ruler. Hold task length fixed, METR writes, and a task that costs twice as much to build is one that models reach a 50% success rate on about 4.6 months later. Dollars convert into months. An expensive test, on that reading, is not a hard test but a late one.

> And the fastest number in the report comes from the cheapest exams. Across the combined suite the doubling time is 3.61 months; restrict it to the automatically verifiable subset and it is 1.65 months. METR says it worries that evals easy to containerize look like the environments used to train models, and could therefore overestimate real capability. It also ran experiments to see whether models could unblock that corner, and those results are in this update too. Everything above is the report's own record. Sections 1 through 6 follow that record and the outside sources around it; the judgments that carry these figures across to an in-house evaluation set are gathered in section 7.

<!-- stat-card -->
**4.6 months** — The delay when a task costs twice as much to build — What remains after task length is controlled for. On the pricier side, the point where models reach half success moves out by that much

<!-- stat-card -->
**3.61 vs 1.65 months** — Doubling time, combined suite against verifiable subset — Not two numbers in conflict but two different pools. The faster one is the pool that gets graded without a person

<!-- stat-card -->
**40 hours (13–2645)** — Highest value in the combined suite, with its 95% CI — The ceiling is 200 times the floor. METR printed that width straight into its own table

<!-- stat-card -->
**$90k / 7 attempts** — Spent on human baselines, and attempts made — From the TH2 write-up. At $200–350 an hour, seven attempts yielded baselines on three tasks

## The Speed Is the Same as Last Time; What Changed Is the Task Suite

The doubling time in this update is close to what METR published last time; what moved is the set of tasks that produced it. On the combined suite the 50% time horizon doubles every 3.61 months. In days that is about 110, against the 105 days METR had recorded for the TH1.1 trend. The sentence in the body reads **"This is similar to the previous TH1.1 doubling trend of 105 days."** One of the summary bullets says that on a composite metric **"we do not see strong acceleration or deceleration."** Read this report as news that AI got faster and you are reading against its own sentences.

The document is METR's Q4 2026 capability update, published on 20 November 2026, with eleven authors. The title already writes half the conclusion: **"AI R&D-relevant model capabilities are improving rapidly and are getting harder to measure."** Improving fast, and getting harder to measure. The second half is the thread this piece follows. METR is a US non-profit that evaluates AI systems, and last month we [recounted its 246 developer trials](/report/metr-246-ai-time-saved-recount/en/) from the outside. That was an outside recount. This time METR has written down the conditions on its own numbers.

### 1.1. Time Horizon Is a Number Written on a Human Clock

The central metric here is the time horizon, and it is reported in hours rather than in percent correct, which takes some getting used to. Take the jobs a model finishes about half the time, then convert them into how long a skilled person would need for the same work. Fix the bar at 50% success and you have the 50% time horizon. So "the model's time horizon is 27 hours" does not mean the model works for 27 hours. It means the model finishes, about half the time, work that would take a skilled human roughly 27 hours. How the human side of that conversion gets set is the floor the whole metric stands on, and the state of that floor is section 5.

### 1.2. The Task Suites Now Number Three

The report ran 15 models across three suites, from GPT-4o up to GPT-6 Astra and Opus 5.5, because a trend line needs models from different generations on one axis. The suites break down as follows.

| Suite | Tasks | What it covers |
| --- | --- | --- |
| TH1.1 | 222 | Verifiable software engineering, coding, optimization. Drawn from SWAA, HCAST and RE-Bench |
| TH2 (verifiable) | 24 | 8 task families. Optimization (AZsPCs, NanoGPT), games, puzzles, machine learning training |
| TH2 (hard to verify) | 12 | 4 task families. Research problems and conceptual reasoning, plus writing evaluation tasks |
| MirrorCode | 75 | Reimplementing CLI software. Scored against the full test suite |

The 36 TH2 tasks sit in 12 families, of which the automatically verifiable side is 8 families and 24 tasks. That split carries the argument in sections 2 and 4. On MirrorCode, the report has Opus 5.5 handling 77% of medium and large programs that a human expert would need weeks to months for.

One outside number backs METR's doubling time up. Of recently released OpenAI data the report writes that it **"seems to imply a doubling time of 3.8 months when using their models on their own internal research tasks, which is similar to the 3.6 month doubling time we find over TH1.1 and TH2."** Different tasks, different organization, different method, and the result lands in the same neighbourhood. There is not much left to argue about on the speed question.

## The Faster Number Comes From the Tasks That Score Themselves

There are two doubling times inside this report. Neither one is a misprint, and what separates them is which pool of tasks produced it. The combined figure reads **"Across our TH1.1 and TH2 tasks, we find that time horizons are doubling roughly every 3.61 months (95% CI 2.08-4.94)"**; the subset figure reads **"for TH2 (verifiable) we see a doubling time of 1.65 months (95% CI 0.79 to 3.99)."** Two slopes more than a factor of two apart, printed side by side in one document.

The figure below puts both on the same axis. The vertical axis is the time horizon, and every gridline up is a doubling. Over one year the slower slope clears a little more than three steps and the faster one clears over seven.

The two doubling times from the report, drawn against one vertical axis. Only the slopes are carried over; the starting point is aligned to a single origin so the figure can be read. The confidence intervals around the two slopes, 2.08–4.94 months and 0.79–3.99 months, overlap widely.

### 2.1. 27 Hours and 40 Hours Belong to Different Pools

Two numbers circulate on the time-horizon side as well. One is from the body of the report: **"Current public frontier models have an estimated time horizon of up to 27 hours on the verifiable subset of our TH2 tasks."** The 27 hours comes from the **automatically verifiable** subset of TH2, and dropping that tail changes the sentence. The other is in the combined-suite table in section 3.C.1. The highest cell there is GPT-6 Astra at 40 hours, with a 95% confidence interval running from 13 hours to 2645 hours. The cell below it is Opus 5.5 at 39 hours, interval 12 hours to 1253 hours.

The two figures do not contradict each other. One is the subset value and the other is the combined-suite value, so they were never pointing at the same thing. Nor can anything be made of the one-hour gap between 40 and 39, because those two intervals almost entirely overlap. Reading that table as a model ranking is a reading the table does not license.

What deserves attention is the width of the interval itself. The ceiling is 200 times the floor. METR's own error bar states the condition the instrument is in. That width returns in section 6, when a date in 2027 comes up for reading.

> [!callout]
> So the question is not which number is correct. It is **why the faster one happens to be the automatically graded pool**. Automatically verifiable means scored inside a container without a human hand, and tasks like that are also cheap to build. How those two properties connect is the next two sections.

## Double What a Test Costs to Build and the Pass Comes Four and a Half Months Later

The new ruler in this report is attached to the tasks, not to the models. For each one METR measured **"the cost for us to develop a containerized environment for the task, and then to run and score the task 100 times"** and named it Lifecycle Cost. In plainer words: what it takes to build one exam, run it a hundred times and mark it. Then the report states in a single sentence what happens each time that cost doubles. **"a doubling in lifecycle cost for a given length of tasks results in model performance reaching 50% success rate approximately 4.6 months later."**

The phrase **"for a given length of tasks"** in the middle is what gives the finding its weight. This is not a gap that can be charged to length. Hold length constant and the side that costs twice as much to build is still the side where the 50% pass arrives about 4.6 months later. A difference denominated in dollars converts into one denominated in months, and that conversion is the strangest result METR has put out this year. Difficulty and build cost are separate axes, yet both leave a mark on the model's calendar.

The regression result from the report, moved into one figure. The horizontal axis is the calendar, and the two points are where tasks of equal length reach 50% success. The gap drawn here represents the roughly 4.6 months the report states; it does not mark actual dates for any particular pair of tasks.

### 3.1. Expensive Usually Means Long, and Something Is Still Left Over

The two overlap heavily to begin with. Human completion time and Lifecycle Cost correlate at R²=0.82. Work that takes longer also costs more to package into a container and run a hundred times, which is no surprise. But something survives the controlling for length, and that remainder correlates at R²=0.14. Both numbers have to be read together for this section to stand. The overlap is large, and even with the overlap removed, the price of building holds a seat of its own.

The report also split tasks into a higher-cost and a lower-cost group and compared the averages. Verbatim: **"On average, the higher Lifecycle Cost subset is 2.9x as expensive as the lower Lifecycle Cost subset, and models perform 2.9x worse in terms of time horizon."** The expensive group averages 2.9 times the cost, and in that group model time horizons come out 2.9 times lower. On what basis the two groups were divided, how many tasks sat in each, and what the dollar ranges were — none of that is confirmed in the body, so none of it is stated here.

**Do not multiply these two numbers.** The 2.9x and the 4.6 months sit in the same paragraph but neither derives the other. The first compares averages across two subsets; the second is a coefficient from a regression that controls for task length. They are different statistics, and converting the 2.9x into doublings and multiplying by the doubling time does not produce 4.6 months. We ran that calculation, and it came out about a month off.

### 3.2. A Model Priced the Tests Too

Leaving out how Lifecycle Cost was assigned would make this section unfair. METR showed task code to an LLM judge (Opus 5.5) and had it estimate, in dollars, the cost of development, quality assurance and scoring, then calibrated those estimates against its own figures for about ten tasks it had built itself. Which is to say that the number exposing the limits of the evaluation is itself a model's estimate.

METR does not hide this, and lists several caveats. Since the judge was calibrated to METR's own circumstances, it writes that **"Labs are likely to have different constraints to us"**, and it adds that demand differs by domain and that generalization benefits across tasks are not reflected. There is also a line about the cost itself moving over time: **"What is costly today may not be costly in a year, or a few months."** So the 4.6 months is not a fixed constant but a slope obtained under one organization's present circumstances.

## Evals and Training Environments Are Converging on the Same Shape

Why is it the cheap exams that produce the fast number? METR's answer is that its evaluations and the environments used to train models are growing alike. Verbatim: **"We are increasingly concerned that our easy-to-run, containerized evals could overestimate real-world capabilities, due to similar RL environments becoming common in training."** Containerized evals that are easy to run could overestimate real-world capability, and the reason is that similar reinforcement learning environments have become common in training.

The sentences that follow set out the mechanism. **"we think evaluations often share much in common with the RL environments used to train models. This is a problem for evaluators because we often want to use our evaluations as a proxy for some other, harder-to-measure, capability of interest. When these proxies (or nearby tasks) are trained on, they are liable to overestimate capabilities in these areas of interest."** An evaluation is meant to stand in for a capability that is hard to measure directly; once that stand-in, or anything near it, has been trained on, it inflates the very capability it was meant to point at. A third sentence goes further, warning that as cheap quantitative signal gets consumed by training, less of it is left for the people doing the measuring.

> [!callout]
> **This is not a story about test items leaking into training data.** METR reports no leaked items. What it is worried about is the **shape** of the evaluation. The format itself — packaged in a container, scored automatically — is converging with the format of the environments models are trained in, and when that happens an entire task suite sits inside a familiar distribution without a single item overlapping. The [base-model benchleaking report](/report/ernie-5-5-benchleaking-base-model-2026-11/en/) we read yesterday was the other case, where the items themselves had entered the training data. That is contamination at the level of the item; this is convergence at the level of the format. The defences differ too. Items can be filtered out. A format has nothing to filter.

### 4.1. The Training Side Already Has a Price Tag on the Same Goods

What METR calls Lifecycle Cost — the price of turning one task into a runnable environment — is already bought and sold on the training side. Epoch AI interviewed 18 people in the industry and wrote up the going rates in January. Every figure below comes from that write-up, and is **a different cost from a different source than METR's Lifecycle Cost estimate**. One is what an evaluator pays to build its own tasks; the other is what a lab pays to acquire training environments.

| What is being bought | Price |
| --- | --- |
| A single task | $200–2,000 |
| An environment cloning a website | around $20,000 |
| An environment cloning a complex product | around $300,000 |
| Supply contracts | 6 to 7 figures per quarter |

The source is Epoch AI's FAQ on reinforcement learning environments (12 January 2026, 18 industry interviews). It notes that complex software engineering work occasionally reaches $20,000 for a single task, and carries testimony that exclusive supply commands 4 to 5 times the non-exclusive rate. These figures should not be read together with METR's estimates.

There are already several suppliers. The roster TechCrunch set out in September last year has Mechanize and Prime Intellect building environments as their main business, plus Scale AI, Surge and Mercor crossing over from data work. Labs also build in-house. The same article mentions Anthropic discussing spending of over a billion dollars a year, which is the piece relaying a report by The Information rather than its own reporting.

There is a line to stop at here. **No source was found stating that the environments being sold are the same as, or overlap with, public benchmarks.** The material above speaks only to the existence of a market and to its prices. So this is as far as the section can go. Goods of a similar shape are being built on both sides, one of them under a budget constraint that keeps the count low, and METR is worried about the convergence. The evidence for the convergence claim is still a single sentence of METR's own.

### 4.2. Other Research Records the Same Worry

METR is not alone in this. One study ([arXiv:2510.10541](https://arxiv.org/abs/2510.10541)) reports that reasoning models trained with reinforcement learning on the training split alone can match models trained directly on the test split, and a NeurIPS 2025 paper that systematically reviewed 445 benchmarks concludes that flaws damaging construct validity are widespread. The first points toward the unseenness of a test split no longer functioning as a barrier, which runs in the same direction as METR's concern.

The robustness checks in the same report also record observations of reward hacking. It says only that most such behaviour came from agents close to the frontier, with no ranking of which was worst. A model going after the grader instead of the task grows from the same root as the worry about resembling a training environment. Automatically scored also means there is a grader there to go after.

## Handing the Writing and the Grading to Models Is Blocked at Both Ends

If building evaluations is expensive, the first thought is to have models do it. METR had the same thought, ran experiments on both the writing and the grading side, and published the results in the same report. Both routes are blocked for now.

### 5.1. Nothing the Models Wrote Was Worth Putting in the Report

The result is one sentence long. **"None of the tasks agents produced were sufficiently useful to us to warrant inclusion in this post."** The shape of the failure is recorded as well. **"The models we tested generally favoured making automatically scored optimization tasks, even when (in follow-up experiments) instructed to make tasks where 'success is sensitive to decisions which have poor short term feedback.'"** The models leaned toward automatically scored optimization tasks, and went on doing so after being told to build ones without short-term feedback. With internet access available they did not go looking for what METR would consider useful, and no task arrived built on a new threat model or a sharp hypothesis.

The direction of that lean is the same as in section 4. Tasks the models invented for themselves also went toward containerized automatic scoring. The result will not widen into "AI cannot write evaluations," though. It describes what was left after one organization filtered by its own bar for publication, and the body does not say how many tasks were commissioned or which models wrote them. In the [AI peer review experiment](/report/ai-peer-reviewer-error-injection-benchmark/en/) we read six days ago, model-written items were actually used. Here not one was.

### 5.2. Hand Over the Grading and the Score Tilts Toward the Stronger Model

The grading side comes with a figure attached. Opus 5.5, set up as judge, **"scores Astra's tasks on average about 0.2 (out of 1) more highly than our human"** — two tenths of a point more than the human scorer on a one-point scale. Alongside it is the finding that models **"systematically overestimate the quality of their own solutions, and those of stronger models."**

This cuts against something we read in October. The [MLE-bench experiment](/blog/mle-bench-llm-experiment-prediction/en/) we covered then closed on the finding that models do not mark their own ideas generously. This report says the generosity shows up both toward their own answers and toward those of stronger models. The two studies measure different things under different designs, so this is not the place to call either wrong, but the disagreement itself is worth writing down. For anyone deciding whether to hand grading to a model, that disagreement amounts to: measure it on your own setup.

### 5.3. That Leaves People, and Seven Attempts Cost $90,000

The baseline is to have people solve the tasks directly and time them. That price is recorded too. **"We paid $200-350/hr and spent a total of roughly $90k for 7 attempted baselines."** At $200 to $350 an hour, seven attempts came to about $90,000. Baselines were obtained on three tasks: two people on Reverse Conway, one on Minecraft Bot, four on Train a Program. This passage sits in the write-up of the TH2 work.

So most of the completion-time estimates are not values a person actually measured. The report's sentence is **"Human baselines are directly used for only 9% of our estimates for how long it takes a human to complete the task."** The other 91% are estimates filled in some other way. The body does not confirm what population that 9% is a share of, so it is safer not to bundle it together with the seven attempts and the $90,000 in the previous paragraph as figures over the same scope.

METR also withholds judgment on who the baseliners are comparable to. **"Overall, we are uncertain about the comparability of our baseliners to AI R&D lab employees."** It says only that they sit above technical staff at frontier labs and below researchers at the leading edge of their own fields. On tasks calling for judgment the comparison gets subtler still. On rating critiques of philosophical arguments, frontier models clear the agreement level of experts who spent 5 minutes but fall short of experts who spent 15.

> [!callout]
> The time horizon metric rests on **human completion time** as its floor, only 9% of that floor was laid by people directly, and laying that 9% took $90,000 across three tasks. The two routes to filling in the rest with models were both blocked in these experiments. If the metric wobbles, it is not because the models wobble. It is because the floor is expensive to lay.

## The Word in Front of July 2027 Is 'Naive'

The sentence in this report that will travel furthest is the one carrying a date in July 2027. Verbatim: **"naive extrapolation would imply that models reach a 50% time horizon equal to the longest score threshold on our task set (200 hours) in July 2027."** And that sentence opens with **naive**. The qualifier sits at the very front, and METR put it there.

It is there because the calculation rests on a single premise: that the 3.61-month doubling time holds from here on. That doubling time carries a 95% confidence interval of 2.08 to 4.94 months, and running the same extrapolation from either end of the interval spreads the arrival date by more than half a year. The same circumstance produced the 40-hour interval in section 2 running from 13 hours to 2645. The spread is too wide to carry over as a single date.

### 6.1. What Did Two Korean Reports Carry, and What Did They Drop?

The report was covered in Korea as well. We took two articles dated 21 November and checked, one at a time, how far the report's figures and how far its warnings about itself had travelled. Two is the sample, so the table below is a record of these two pieces and not of Korean coverage generally.

| What the report states | TokenPost | AI Times |
| --- | --- | --- |
| Doubling time of 3.61 months | carried | carried |
| Previous trend of 105 days | carried | carried |
| Falls short of experts on tasks calling for judgment | in the headline | in the headline |
| Nothing usable among the AI-written evaluation tasks | carried | carried |
| Only 9% measured directly by people | carried | absent |
| July 2027, 200 hours | absent | carried |
| Lifecycle Cost, the price of building and running one exam | absent | absent |
| Evals may overestimate because they resemble training environments | absent | absent |

The cells were filled by reading two Korean-language articles from 21 November 2026, one in TokenPost and one in AI Times, directly. With a sample of two this cannot be read as a statement about Korean coverage in general.

The line the cells fall along is clear. **Warnings about the models made it into the headlines.** Both pieces put the shortfall against experts on judgment tasks in their headlines, and both carried the experiment in which AI failed to write usable tests and the figure that only 9% was measured by people. So neither can be described as coverage that dropped the warnings. What is missing from both is of a different kind: Lifecycle Cost, and the concern that evaluations are growing to resemble training environments. Both are **warnings about the instrument itself**, and both happen to be what this report newly contributed.

The reason is not hard to guess. A limit of the models fits a story readers already hold the shape of, so it carries in one line. A limit of the thing doing the measuring is a new story in itself, and carrying it means first explaining how the metric is built. Written in the same document, the two cost different amounts to pass along.

### 6.2. The Fix Is Not in This Report

METR offers Lifecycle Cost only as a rough proxy, and as a direction all it commits to is **"more manually scored tasks and qualitative evidence"** — more tasks scored by hand and more qualitative evidence. How expensive that route is, section 5 has already shown. The report's closing sentence is not an answer either but a list of what is unresolved. **"We remain significantly uncertain about central questions, including (1) what capabilities are in practice necessary for drastic acceleration, and (2) how quickly relevant model capabilities are improving."**

What is worth taking from this report, then, is a way of reading rather than a date. It is a case in which METR used its own document to show how differently a number reads once its conditions are set down beside it. Strip the conditions and one number becomes July 2027. Attach them and the same number becomes this much, on tasks that were cheap enough to build.

## Why Pebblous Is Watching

When Pebblous takes delivery of data, the first question is not what the value is but where the value was measured. This report is a case of that question being turned back on the measuring side. METR measured its own ruler while it measured the models, and wrote down in numbers that the ruler bends toward the cheap. Putting out, in a public document, the fact that measuring has a price is the valuable part of this report, and it is also the point of the [AI Test & Evaluation Center Pebblous opened](/blog/pebblous-ai-test-center-kolas/en/) four days ago.

### 7.1. An Eval Set Tilts by Build Cost, Not by Difficulty

Ask why an in-house evaluation set looks the way it does and the answer is usually that the data were there. METR's numbers convert how much of that answer ends up inside the score into months. Same task length, twice the cost to build, and models reach half success four and a half months later. Turn it around: an evaluation set assembled only from tasks that were cheap to build returns a score running about four months ahead of the real one.

For an organization evaluating its own models on its own logs there is one more layer. The logs used for evaluation and the logs used for training and tuning come out of the same pipeline in the same shape. Items need not overlap for distributions to overlap, and that overlap is invisible if you count by sample. It shows up only when you look by generation path. The market prices from section 4 are useful once more here. On the training side, tasks of that shape are bought. Fill an in-house evaluation set and a tuning set through the same vendor and the same collection script and the same thing happens.

### 7.2. Four Questions for Anyone Who Makes or Reads a Score Sheet

The four places the preceding sections marked out are METR's circumstances, but they transfer onto an in-house evaluation set as they are: why a task is in there, the route the data took, the share of baselines laid by people, and which way the judge leans. All four were legible from outside only because METR wrote them into its own document, and in an organization that does not write them down the same questions have nowhere to be answered from.

- **Are the tasks in our evaluation set there because they need measuring, or because they were easy to build?** Is the build effort per task written down anywhere?
- **Did the evaluation data and the training and tuning data come through the same collection route?** Same route means same distribution, whatever the items say.
- **What percentage of baselines did people measure directly?** Does the score sheet say that the rest are estimates?
- **If grading was handed to a model, has anyone measured which way that judge is generous?** METR put it at 0.2 points out of 1.

All four are information that cannot be reconstructed later unless it is written down while the evaluation set is being built. What was chosen and why is something nobody remembers half a year on.

### 7.3. This Cost Is Not the Cost We Read Thirteen Days Ago

The [Anthropic survey](/report/anthropic-research-task-gap-2026-11/en/) we read on 9 November also had a price in it. That price weighed researcher salaries against model usage fees, and it was the arithmetic of the side **assigning** the work. The price here is what one exam costs to build, and it is the arithmetic of the side **measuring** the work. Two appearances of the same word in the same month, pointing at different objects.

The place for Pebblous is not to say which model is better but to make sure the conditions a score came out of stay printed next to the score. What makes this report valuable is not the size of its numbers but that METR wrote its own limits into the same document. And as section 6 shows, being in the same document does not mean that part travels. That is where the case for designing provenance in as a separate step sits.

**Fact and interpretation, separated.** The figures and quotations in sections 1 through 3, the experimental results and dollar amounts in section 5, and the extrapolation sentence in section 6 all come from the original text of METR's Q4 2026 capability update. The environment prices in section 4 come from Epoch AI's January FAQ and a TechCrunch article, and are from a different source than METR's estimates. The table in 6.1 was filled by reading two Korean news articles directly. What could not be confirmed is recorded as well. The criterion dividing the higher and lower Lifecycle Cost subsets, the task counts in each, and the dollar ranges are not confirmed in the body, and neither is the scope the 9% is a share of, nor the design of the AI task-writing experiment. So this piece adds no figures in those places. The four questions in section 7 and the judgments about evaluation sets are Pebblous interpretation.

## References

Sources for the figures in the body, grouped by kind. Entry 1 is the primary document this piece stands on, and the doubling times, time horizons, Lifecycle Cost and human baseline figures and quotations all come from it. Entries 3 and 4 are the environment prices in section 4, kept separate so they do not blend into METR's estimates. Entries 7 and 8 are the basis for the table in 6.1.

### Primary — METR

- 1.METR, "AI R&D-relevant model capabilities are improving rapidly and are getting harder to measure" (20 November 2026, 11 authors). [metr.org](https://metr.org/blog/2026-11-20-q4-2026-capability-update/) — the composition of the task suites, the doubling times of 3.61 and 1.65 months, the 27 hours, the combined time horizon table and confidence intervals in section 3.C.1, the definition of Lifecycle Cost and the 4.6 months, the human baselines and the AI task-writing and grading experiments, and the July 2027 extrapolation all come from here.
- 2.The Substack mirror of the same post. [metr.substack.com](https://metr.substack.com/p/2026-11-20-q4-2026-capability-update) — used alongside entry 1 for checking quotations. The 40 and 39 hours from the section 3.C.1 table could not be confirmed in this mirror, so entry 1 is the citation basis for them.

### Industry — RL environment prices (section 4)

- 3.Epoch AI, "An FAQ on reinforcement learning environments" (12 January 2026, 18 industry interviews). [epoch.ai](https://epoch.ai/gradient-updates/state-of-rl-envs) — the four rows in the table in 4.1 and the exclusivity premium come from here.
- 4.TechCrunch, "Silicon Valley bets big on 'environments' to train AI agents" (21 September 2025) — the basis for the roster of suppliers. The discussion of over a billion dollars a year at Anthropic is this piece relaying a report by The Information.

### Academic — research recording the same worry (section 4.2)

- 5."Rethinking RL Evaluation: Can Benchmarks Truly Reveal Failures of RL Methods?" [arXiv:2510.10541](https://arxiv.org/abs/2510.10541)
- 6."Measuring what Matters: Construct Validity in Large Language Model Benchmarks" (NeurIPS 2025 Datasets & Benchmarks Track) — a systematic review of 445 benchmarks.

### Korean news coverage (table in 6.1)

- 7.TokenPost, "AI 시간 지평 3.61개월마다 2배…판단 과제 약점도 드러나" (21 November 2026). In Korean.
- 8.AI Times, "AI 작업 능력, 6개월 만에 16시간→40시간…'판단력 여전히 한계'" (21 November 2026). In Korean. The figures in this headline are the outlet's framing; this piece does not use them.

### Earlier Pebblous pieces

- 9.[A Recount of METR's Experiment Finds No Ledger for Saved Time](/report/metr-246-ai-time-saved-recount/en/) (30 October 2026) — the contrast drawn in section 1.
- 10.[ERNIE 5.5 Goes From First to Last When Memorized Questions Count as Wrong](/report/ernie-5-5-benchleaking-base-model-2026-11/en/) (21 November 2026) — where section 4 separates item-level contamination from format-level convergence.
- 11.[Anthropic Finds Scientists Give Claude the Work They Can Check on the Spot](/report/anthropic-research-task-gap-2026-11/en/) (9 November 2026) — where 7.3 separates a different kind of cost.
- 12.[Does AI Peer Review Need a Better Model or a Better Prompt?](/report/ai-peer-reviewer-error-injection-benchmark/en/) (16 November 2026) — the contrasting case in 5.1.
- 13.[MLE-bench: Can AI Tell Whether Its Own Idea Will Work?](/blog/mle-bench-llm-experiment-prediction/en/) (22 October 2026) — the piece 5.2 records a disagreement with.
- 14.[METR Sees Inside Anthropic, and Anthropic Decides What Gets Hidden](/blog/anthropic-metr-embedded-evaluator-redaction/en/) (17 October 2026) — on a different kind of constraint this organization works under.
- 15.[Pebblous Opens AI Test & Evaluation Center to Issue KOLAS-Accredited Data Quality Test Reports](/blog/pebblous-ai-test-center-kolas/en/) (18 November 2026) · [Pebblous AI Test & Evaluation Center](/project/AITestCenter/en/) — the links in section 7.
