---
title: AI Knows the Answer, Just Not When to Trust It
subtitle: The judgment gap GeneBench Pro revealed, and the human face of AI-Ready Data
date: 2026-07-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Knows the Answer, Just Not When to Trust It

_The judgment gap GeneBench Pro revealed, and the human face of AI-Ready Data_

## Executive Summary

> [!callout]
> GeneBench Pro, the computational-biology benchmark OpenAI released, asked something different from the usual test. Not the ability to recall what you know, but **the judgment to work through messy data — missing values, noise, ambiguous protocols — and decide when to trust a conclusion.** And even the strongest model today (GPT-5.6 Sol Pro) solved only **31.5%** of its 129 problems. Two out of three still go unsolved. This report dissects what sits behind that number. (The topic was first introduced in our [July 7, 2026 blog post](/blog/genebench-pro-ai-biology-judgment/en/); here we look more closely at the numbers behind it.)

> The heart of it is that these are two different abilities. Accuracy on well-curated data (clean-data accuracy) and judgment on real-world messy data (messy-data judgment) are separate axes, and what the benchmark actually measures is the latter. The evidence: the harder the benchmark gets, the wider the gap grows. Move the same model to the messier Pro edition and its score drops rather than rises, and burning more compute does not buy more judgment either.

> This failure is not an abstract academic puzzle. More than a third of the 129 problems — 47 of them — cluster in clinical, pharmacogenomic, and diagnostic work, so a lapse in judgment sits right next to treatment-decision risk. This is the "human face" of AI-Ready Data. When training and evaluation data are scrubbed clean, a model learns only accuracy and never learns when to withhold. The same shadow appears at organizational scale. The ceiling on judgment is set by data readiness.

<!-- stat-card -->
**8.5% → 31.5%** — Pro-mode trajectory, 6 generations — A 3.7× climb over six generations, yet the peak still leaves two of three unsolved

<!-- stat-card -->
**36.4%** — Share of clinical-adjacent domains — 47 of 129 problems cluster in clinical, pharmacogenomic, diagnostic, and population genetics

<!-- stat-card -->
**~1,000×** — Human-vs-AI cost asymmetry — $4,000–8,000 per problem for an expert vs. a few dollars for AI — yet only a third correct

<!-- stat-card -->
**60%** — AI projects projected to be abandoned — Gartner projects abandonment by end of 2026 for lack of AI-ready data

## It Asked for Judgment, Not Knowledge

Most AI benchmarks pose tidy questions. A well-groomed problem has a single answer, and you count whether the model gets it. GeneBench Pro broke that habit. Designed by OpenAI together with computational-biology experts, the benchmark pulls the data researchers actually meet in the field straight into its problems. Values are missing; the signal drifts from one experimental batch to the next (batch effects); labels carry noise; even the protocol for which analysis to run is ambiguous. Under these conditions it asks one thing: **can you work through the mess and decide when to trust a conclusion and when to withhold?**

This is the line between a knowledge test and a judgment test. A knowledge test asks "what do you know" — gene names, statistical formulas, how to run an analysis tool. A judgment test asks "when do you apply that knowledge, and when should you not trust the data." The latter is exactly what a working researcher does every day: open the data, ask whether this sample is biased, whether this result is a residue of a batch effect, whether the signal is strong enough to draw a conclusion. GeneBench Pro compresses that moment of judgment into 129 problems.

The scope is not small either. The 129 problems span **ten major domains** — from clinical, pharmacogenomic, and diagnostic work to population genetics, statistical genetics, quantitative genetics, regulatory omics, cancer genomics, functional genomics, proteomics, microbial genomics, and forensic genetics — and split further into 21 subdomains beneath them. It is built not to probe one narrow skill, but to sweep broadly across the judgment computational biology demands when the data is messy.

The vetting behind these problems ran deep. Of the 129, **82 (about 63.6%)** passed expert review — by graduate students, professors, industry scientists, and postdoctoral researchers — and some were published on Hugging Face or handed to third-party evaluation bodies, clearing external validation paths. That preempts the objection that "the model fails only because the answers are ambiguous." The weight falls instead on the reading that models fail not because the problems are flimsy, but because their judgment does not reach that far.

> [!callout]
> What GeneBench Pro measures is not the volume of computational-biology knowledge, but the judgment to decide whether to draw a conclusion in the face of incomplete data. And that judgment is a different ability from accuracy on well-curated data. Behind that score — the one even the best model solved only a third of — lie the numbers that show those two abilities pulling apart.

※ This report does not present the benchmark's scoring rubric or a per-error-type breakdown of accuracy. Direct verification against the primary sources (the OpenAI post and the bioRxiv appendix) could not be completed, so this piece describes "what is measured, and how" at a conceptual level.

## The Numbers Behind 31.5%

31.5% is a single figure, but several layers of story are folded inside it: where the failures cluster, how long it took to reach that score, and what it would cost to have a person make the judgment instead. Within the range we could verify, we take the total apart honestly.

### 2.1. The Failures Cluster Close to the Clinic

Look at how the 129 problems distribute across the ten domains and the benchmark's center of gravity becomes clear. The largest block is clinical, pharmacogenomic, and diagnostic work (26 problems), followed by population genetics (21). Those two alone add up to **47 problems, 36.4% of the whole**. This is not an abstract academic puzzle — the areas that touch treatment decisions make up more than a third of the benchmark. This report's thesis, that a judgment gap can transfer straight into operational risk, is already foreshadowed at the problem-design stage.

*▲ Domain distribution of the 129 problems. Clinical/PGx/diagnostic (26) plus population genetics (21) sum to 47 (36.4%), weighting the benchmark toward clinical-adjacent areas | Source: OpenAI announcement (2026), explainX.ai secondary aggregation. Sum of 129 cross-checked; primary-source verification incomplete.*

### 2.2. 3.7× Over Six Generations, Still a Third

31.5% did not appear out of nowhere. Line up only the same "Pro" reasoning setting by generation, and you see a **growth curve across six generations** — from GPT-5.2 Pro's 8.5% to GPT-5.6 Sol Pro's 31.5%, a 3.7× rise. The growth itself is unmistakable. Yet the fact that even the peak leaves two of three unsolved does not change. The direction in which capability climbs, and whether that capability has crossed the threshold of operational trust, are two separate questions.

*▲ Accuracy trajectory across six Pro-mode generations within GeneBench Pro (129 problems). 8.5%→31.5%, a 3.7× rise | Source: multiple secondary reports citing OpenAI technical materials (AI Weekly and others) that agree. Primary-source verification incomplete.*

### 2.3. Having a Human Do It Costs Thousands of Times More

The difficulty of these problems lands harder when you translate it into cost. OpenAI stated that a human expert needs **20–40 hours** to solve a single problem. At an expert rate of $200 per hour, that comes to **$4,000–8,000** per problem (a figure converted from secondary aggregation). The AI inference cost for the same problem, by contrast, is reported at "just a few dollars." Roughly a several-hundred- to several-thousand-fold cost asymmetry.

That asymmetry compresses the core of the problem. The economic incentive is overwhelming: let AI make the judgment instead of a person and the cost falls a thousandfold. But the accuracy of that judgment is still one in three. The tension between "why you want to use it" and "the missing gate for whether you can trust it" grows sharper the higher the cost of error — as in bio and health. (The exact dollar figure for AI inference was not disclosed in the primary source, so we cite the human cost quantitatively and keep the AI side qualitative.)

## The Gap Widens as It Gets Harder

If the point so far was "how low 31.5% is," this section addresses "why it is not an accident." This is the ground the earlier introductory piece did not cover. The judgment gap widens the messier the benchmark gets, and burning more compute does not close it. Two observations support this.

### 3.1. Same Model, Messier Test, Lower Score

Place the same model's scores side by side on the earlier GeneBench (103 problems) and this GeneBench Pro (129 problems) and the direction is clear. GPT-5.5 (xhigh) scored 25.0% on the earlier benchmark but dropped to **12.0% — less than half** — on Pro. Gemini 3.1 Pro sank from 11.2% to **3.1%**. As the benchmark grew harder and messier, judgment collapsed first. The pattern — "gets by on clean data, falls apart sharply on messy data" — showed up together in two models from different families.

*▲ The same model scores lower on the messier Pro | Source: OpenAI announcement (2026), secondary aggregation. ⚠️ The two benchmarks differ in item composition (103 vs 129) and domain distribution, so this is not a strict "same-conditions retest" — read it only as a directional signal.*

One caveat is needed. Because the two benchmarks differ in both item count and domain composition, reading this decline as "took the same test again and scored lower" would be an overinterpretation. Still, the two benchmarks target the same ability (multistage statistical reasoning amid messy data), and Pro deliberately dialed up that messiness — so the direction of the decline looks less like chance than like a designed result.

### 3.2. Spending More Doesn't Buy More Judgment

So would burning more compute — using a bigger model that thinks longer — close the gap? An observation from the earlier GeneBench puts the brakes on that hope. GPT-Rosalind reached **21.6%**, higher than its peer comparison, while **using 31% fewer tokens**. More computation does not translate directly into better judgment. Judgment lives on the axis of "what you judge and how," not "how much you compute."

Put the two observations together and the picture sharpens. The judgment gap widens the messier the data (3.1) and does not narrow with more compute (3.2). If so, the key to closing the gap must lie somewhere other than model size or compute. That somewhere is the subject of the next section.

※ The three number sets in this section — (3.1) Pro scores vs. the earlier GeneBench, (2.2) the Pro generation trajectory, (3.2) GPT-Rosalind token efficiency — are measured against different benchmarks and reasoning settings. For example, the 25.0% for GPT-5.5 in 3.1 is on the earlier GeneBench (103 problems), while the generation trajectory in 2.2 is internal to GeneBench Pro (129 problems). Do not mix them in the same table.

## The Human Face of AI-Ready Data

The lever that closes the judgment gap sits on the data side. This is where the report's point of view comes into sharpest focus. For a model to learn "when to withhold a conclusion," it first had to encounter situations demanding that judgment in its training and evaluation data. But most training and evaluation data is tidy. We fill in the missing values, strip out the outliers, clean up the labels, and only then feed it to the model. The result: the model learns **only accuracy on clean data, and never learns when to stop on messy data.**

This is the "human face" of AI-Ready Data. Data readiness is usually understood through mechanical conditions — is the format right, are labels attached, does it flow through the pipeline. But what GeneBench Pro exposed is the opposite face. The data has to carry the missing values, the noise, and the ambiguity of the real world for a model to learn how to judge in front of them. Remove the mess at the training stage and the model's internal representation simply has no option called "withhold." That is what it means to say data readiness sets the ceiling on judgment. The same model scoring lower on the messier Pro (Section 3) is precisely the evidence of that direction.

### 4.1. The Same Shadow at Organizational Scale

This gap is not one model's problem; it recurs in the same shape across whole organizations. An individual model's judgment gap shows up, at the organizational level, as a "data-readiness gap." Industry statistics back this up. Gartner projected that **60% of AI projects will be abandoned by the end of 2026** for lack of AI-ready data, and **63%** of data-management leaders said they either lack an AI-ready data-management practice or aren't sure they have one. These two figures — verified against Gartner's official press release — are the most reliable basis in this report.

Other surveys point the same way. A high share blame data quality as the cause of failed AI projects, and only a minority of organizations say they hold "data of sufficient quality to apply to AI." The figures below all point to data readiness as the bottleneck for AI success.

<!-- stat-card -->
**60%** — AI projects projected to be abandoned — By end of 2026, for lack of AI-ready data (Gartner, primary-source verified)

<!-- stat-card -->
**63%** — Unsure of their data practice — Lack an AI-ready data-management practice or aren't sure they have one (Gartner, primary-source verified)

<!-- stat-card -->
**85%** — Failure cause = data quality — Root cause cited by failed AI projects (Gartner, secondary aggregation)

<!-- stat-card -->
**12%** — Hold sufficient-quality data — Organizations that say they hold data of sufficient quality for AI (Gartner, secondary aggregation)

The source reliability of these statistics is not uniform. Gartner's 60%/63% are confirmed against the official press release, but the 85%/12% are only confirmed via secondary aggregation. Other frequently co-cited figures also need careful handling. For instance, "31% of revenue affected by data-quality problems" is a value from a 2023 survey that keeps getting re-cited on later pages — not a current result. The MIT report that 95% of generative-AI projects produced no revenue impact is often summoned too, but the cause that report pointed to was not data quality but organizational integration and operating practice — treating it as a consequence of poor data readiness is the industry's later interpretation. The moment you pin a number directly to a cause, the argument weakens.

> [!callout]
> A single model stopping short of judgment in front of messy data, and an organization's AI project foundering for lack of data preparation, are the same phenomenon at two scales. Both are the price of chasing only "accuracy on clean data." The path to raising judgment begins with putting the real world's mess back into the data.

## When to Trust the AI's Conclusion

So what should practitioners do? The lesson of GeneBench Pro is not "don't use AI." The cost asymmetry is so large that not using it is not a realistic option. The lesson lies elsewhere: **don't decide trust from accuracy alone — design when to trust the AI's conclusion.** Three things become the starting point.

### 5.1. Design a Judgment Gate

If the model is not always right or always wrong, but the problem is "under what conditions it breaks down," then you need a gate that detects those conditions and hands off to a person. When the data shows missingness or inconsistency past a certain threshold, when the model's confidence is low, when the problem sits in a high-cost-of-error area like a clinical decision — the rule stops the automatic conclusion at these signals and routes it to expert review. The number 31.5% is not grounds for despair but should be read as a design task: "how do we filter out the other two-thirds?"

*▲ Judgment gate design concept — original Pebblous diagram. If any of three signals (missing/inconsistent data, low model confidence, high-error-cost domain) is detected, the flow routes to expert review instead of an automatic conclusion.*

### 5.2. Make Data Readiness the Gate for Trust

Diagnosing a dataset's readiness before deployment goes beyond a format check. It looks at where and how much missingness, batch effects, and label noise the data holds, whether certain subgroups are under-sampled, and whether the points where a model should withhold judgment are represented in the data at all. The fact that failures cluster in the clinic (Section 2), in particular, means that in high-cost-of-error areas like bio and health, a pre-deployment data-readiness diagnosis has to become the gate for trust. This is exactly what data-quality diagnosis like Pebblous's [DataClinic](https://dataclinic.pebblous.ai/) aims at — surfacing, before deployment, the data-quality causes behind the "works in the demo, breaks in the field" phenomenon.

### 5.3. Put the Mess Back into the Data

The most fundamental lever is to reflect the real world's mess in the training and evaluation data itself. Feed a model only clean data and it never gets the chance to learn "withhold" (Section 4). Train and evaluate instead on data that carries real missingness, noise, and ambiguous protocols — or on simulations that reproduce such situations — and the model learns from the data when to draw a conclusion and when to stop. Judgment comes from the breadth of that experience, not from compute (Section 3.2 is the counter-evidence).

In short, the operational question is not "what is this model's accuracy" but these three:

- Have we defined the conditions under which this conclusion can be trusted and those under which it must be handed off (the judgment gate)?
- Did we diagnose the readiness of the data this AI feeds on before deployment — especially in high-cost-of-error areas?
- Does our training and evaluation data carry the real world's mess, or is it only measuring clean-data accuracy?

All three questions live outside the accuracy number. And all three converge on data readiness. If data sets the ceiling on judgment, the gate for trust has to be built on the data too.

## Why Pebblous Is Watching

We have studied this benchmark closely because it proves, through someone else's experiment, a case we have been making all along. The center of gravity in AI discourse sat on "accuracy" for a long time — the model that scores higher on the harder test is the better model. GeneBench Pro cracks that frame. It is not clean-data accuracy but messy-data judgment that is the real operational bottleneck, and data readiness sets the ceiling on that judgment. This is why we have argued for moving "from an accuracy discourse to a judgment-and-data-readiness discourse."

The list of places where the benchmark fails happens to overlap with the list of problems data-quality work addresses: missing values, batch effects, label noise, ambiguous protocols. That a model doesn't know when to withhold in front of these also means that mess was never handled at the training- and evaluation-data preparation stage. Data-quality diagnosis, data preparation that reflects real-world noise, simulations that reproduce missingness and noise — what these efforts target is exactly the point where the benchmark fails.

Put into the language of customers and partners, it's clearer still. A large part of the common complaint — "it works in the demo but breaks in the field" — comes from not diagnosing the mess in field data before deployment. This result, with failures clustered in clinical and diagnostic work in particular, shows that the higher the cost of error, the more a pre-deployment data-readiness check is not an option but a precondition for trust. This is exactly the question the tools we build set out to answer.

> [!callout]
> A single benchmark's 31.5% is not grounds for the pessimism that "AI still has a long way to go." It is a map — one that points to where AI breaks down and where to start fixing that breakdown. And its arrow points not at model size but at data readiness.

## Frequently Asked Questions (FAQ)

Here are the questions readers most often raise about this benchmark and the judgment gap: what it measures, why 31.5% is a low score, how a benchmark that tests knowledge differs from one that tests judgment, whether making the model bigger solves it, and what this result has to do with AI adoption in your own organization. Before the numbers overwhelm you, it helps to hold a single question in hand first.

## References

Many of the figures below rest on secondary aggregation of OpenAI's announcement (explainX.ai, technical media, and others); direct verification against the primary-source PDF could not be completed. The text cites each figure with its source character noted. Among the data-readiness statistics, only Gartner's 60%/63% are verified against the official press release.

### Benchmark primary sources & announcements

- 1.OpenAI. (2026). "Introducing GeneBench-Pro." _OpenAI_. [openai.com/index/introducing-genebench-pro](https://openai.com/index/introducing-genebench-pro/)
- 2.GeneBench-Pro. (2026). "Evaluating Multistage Statistical Reasoning in Computational Biology." _bioRxiv_. DOI: 10.64898/2026.06.29.735386. [biorxiv.org](https://www.biorxiv.org/content/10.64898/2026.06.29.735386v1.full)
- 3.OpenAI. (2026). "GeneBench: Assessing AI Agents for Multi-Stage Inference Problems in Genomics and Quantitative Biology." _bioRxiv_ (earlier edition, 2026-04-23). [biorxiv.org](https://www.biorxiv.org/content/10.64898/2026.04.22.720113v1.full)

### Data readiness & industry statistics

- 4.Gartner. (2025-02-26). "Lack of AI-Ready Data Puts AI Projects at Risk." _Gartner Newsroom_ (60%/63% verified against primary source). [gartner.com](https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk)
- 5.Informatica. (2025). "CDO Insights 2025." _Informatica_. [informatica.com](https://www.informatica.com/blogs/the-surprising-reason-most-ai-projects-fail-and-how-to-avoid-it-at-your-enterprise.html)
- 6.Monte Carlo Data. (2023, re-cited since). "The Annual State of Data Quality Survey" (31% revenue impact, originating from a 2023 survey). [montecarlodata.com](https://www.montecarlodata.com/blog-data-quality-survey)

### Secondary reporting & aggregation

- 7.TechTimes. (2026-07-02). "OpenAI Genomics Benchmark: AI Judgment Gap Exposed on Research-Grade Tasks." [techtimes.com](https://www.techtimes.com/articles/319495/20260702/openai-genomics-benchmark-ai-judgment-gap-exposed-research-grade-tasks.htm)
- 8.explainX.ai. (2026). "GeneBench-Pro: OpenAI Computational Biology" (domain distribution and cost conversion, secondary aggregation). [explainx.ai](https://www.explainx.ai/blog/openai-genebench-pro-gpt-5-6-sol-computational-biology-2026)
