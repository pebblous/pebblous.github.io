---
title: Anthropic Finds Scientists Give Claude the Work They Can Check on the Spot
subtitle: Anthropic
date: 2026-11-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Anthropic Finds Scientists Give Claude the Work They Can Check on the Spot

_Anthropic_

## Executive Summary

> [!callout]
> The study Anthropic published on November 5, 2026 took just over 200,000 research conversations that scientists had held with Claude and sorted them into eight categories. What this piece does is hold three different yardsticks against that one table: the share of use a classifier counted, the share of researcher time a task taxonomy called SciNet estimated, and the importance score a survey of scientists assigned. Summaries of the findings are already in circulation, so repeating the results is not the point here.

> Lay the three yardsticks on top of one another and the question changes. What separated the work that moved across from the work that did not is not difficulty but checkability. Cleaning data, running analysis code and plotting results all tell you on the spot whether you got them right. Whether a hypothesis was any good takes years to find out. The same property then shows up in three layers at once. AI is weakest there, people delegate least there, and the instrument that counts the delegation misses most of it there too. Even the acceleration ceiling the report draws turns out to come from price rather than from capability.

> We separate up front what is written in the report and its appendix from what is our own reading. Every figure and quotation in sections 1 through 7 comes directly from the report body, the 45-page appendix, and the published taxonomy files. The reading that ties those figures to a single property, along with section 8, is interpretation Pebblous has added. Nothing here says the Anthropic report is shoddy work. A reading like this one was possible at all only because the report left its formula, its data and its prompts open; section 8 records what it opened and how far.

<!-- stat-card -->
**0.40** — Use ratio for data gathering — It takes 28.6% of researcher time but only 11.5% of Claude conversations. The widest gap of the eight categories

<!-- stat-card -->
**35.6 points** — Importance given to ideation — First place when 528 scientists split 100 points across four activities. The same category draws 4.2% of use

<!-- stat-card -->
**49% vs 28%** — Shifting toward safer topics — From Google's independent study. 49% say they move toward work with benchmarks, 28% toward riskier questions

<!-- stat-card -->
**15.8x** — The acceleration ceiling in the report — A researcher-hour at $95 divided by 0.2 AI-hours at $30. Capability does not enter; the ratio of two prices sets it

## Where the 207,049 Figure Comes From

The report comes from The Anthropic Institute and its full title is "AI for scientific discovery: How researchers use Claude." Nine authors are credited, three of them as leads. It went up on November 5, 2026, and the page carries a modification timestamp from the following afternoon. The one number that traveled everywhere is 207,049, but unless you look at how that number survived, every share that follows reads differently.

Treating it as a census would be a mistake. The sample is drawn only from consumer-plan sessions — Free, Pro and Max — and because a fixed number of sessions is pulled per hour, every analysis carries an inverse-probability weight. On the Claude Code side only sessions where a person works interactively were counted, with programmatic calls excluded. Enterprise and team plans and API traffic were never in the sample to begin with. Two classifiers then run in sequence. The first decides whether the session is scientific or academic research work; the second walks down field and subfield and attaches a single task. What is left at the end, after keeping only core research tasks, is 207,049.

Each stage drops something different. The first drops plans and call types, the second drops sessions the classifier was not confident about, and the last drops the tasks the authors decided not to count as research. Source: the report body and the sample-construction section of the appendix.

The eight categories were not invented for this report. They come from an outside taxonomy. SciNet divides science into fields and subfields and hangs 7,262 tasks and some ninety thousand steps underneath them, and it is published under an open license. Both the eight task categories and the researcher-time shares that appear later come from there. That openness is also why we were able to recompute parts of the report's own table.

This sample is not a researcher's day. Non-research tasks account for just 7.7% of Claude sessions and 4.2% of Claude Code sessions, while the same SciNet taxonomy estimates that 63.4% of researcher time goes to work that is not research. The authors flag the gap themselves in the appendix, calling their own non-research share "substantially lower" than academic scientists' time allocation. What we are looking at is not the day a scientist spent; it is the moments a scientist opened Claude.

It is also worth recording that another company asked the question first. "AI in Science: Early Insights," with Google researchers among its authors, appeared two months earlier in September 2026 and cut roughly 15 million Gemini interactions and a survey of some 600 scientists the same way. So this study cannot be called a first or a one-of-a-kind. If anything, as section 4 shows, the fact that two separate systems produced the same shape is what holds up the argument here.

## The Two Research Categories That Fall Furthest Behind

The report's central chart is a set of eight bars. One side gives the share of use for each task category, meaning the fraction of sessions the classifier routed there. The other gives the share of researcher time, meaning the fraction of a researcher's hours SciNet estimates the category consumes. Divide one by the other and a single number tells you whether a category is pulling more or less than its weight. The report calls that number the use ratio. Above 1 and the category takes more than its share of hours; below 1 and it takes less.

The difficulty is that the report publishes the researcher-time share for only four of the eight. The other four therefore have no denominator, and the table stays half-finished. The appendix, though, writes out how that time share was built: count the researchers in each subfield, multiply each task's annual hours by that headcount, add it all up, and divide by the total across core research tasks. The appendix even states that core research tasks amount to 23,543 combinations — and the number of paper-flagged rows in the published SciNet file is exactly that. With the formula and the data both in the open, the thing to do is run it.

Running it returns the four published figures. Data gathering comes out at 28.60% against the report's 28.6%, matching to the decimal, and writing and communication lands on 16.00% likewise. Data analysis comes out at 27.33%, which is 0.27 percentage points off, and ideation at 6.93%, 0.17 points off. A gap that size is what one refresh of the public files after the report's analysis window would produce. If four columns agree that closely, the four the same calculation yields are worth putting on the page. In the table below, the cells marked ✦ are denominators filled in that way. They are not figures the report published but figures recomputed here from open data, and they should be read carrying that difference.

| Task category | Claude | Claude Code | Researcher time | Ratio (Claude) | Ratio (Code) |
| --- | --- | --- | --- | --- | --- |
| Data analysis | 33.7% | 48.1% | 27.6% | 1.22 | 1.74 |
| Writing and communication | 32.0% | 17.6% | 16.0% | 2.00 | 1.10 |
| Data gathering | 11.5% | 11.9% | 28.6% | 0.40 | 0.42 |
| Reading and knowledge acquisition | 7.6% | 3.7% | 7.27% ✦ | 1.05 | 0.51 |
| Theoretical analysis | 5.0% | 4.7% | 4.41% ✦ | 1.13 | 1.07 |
| Design and development | 4.7% | 7.7% | 3.63% ✦ | 1.29 | 2.12 |
| Ideation and hypothesis generation | 4.2% | 2.1% | 7.1% | 0.59 | 0.30 |
| Other (administration, mentoring, refereeing) | 1.3% | 4.2% | 5.82% ✦ | 0.22 | 0.72 |

The four cells marked ✦ are denominators the report did not publish, recomputed here from the appendix formula and the open SciNet files. The other four are the report's own published values. Use shares come from the figure in the report body; ratios are use share divided by researcher-time share, carried to two decimals.

Running down the table, the lowest cell catches the eye first. "Other" at 0.22. But that row bundles administration, mentoring and refereeing, and it is the bundle the first classifier was built to screen out of the research side in the first place. A low number there is what the design asked for. Among the seven research categories the lowest is data gathering at 0.40, with ideation next at 0.59. The report body names those two together from the opening summary onward, in a sentence saying scientists use Claude less for them even though, in the accompanying survey, they rank those tasks as the most important for scientific discovery.

Both are low, but for unlike reasons, and the report splits them in one line: "Much of data gathering is physical, while ideation is not." Taking samples, assembling clinical records, running instruments in the field — none of that can be handed to a counterpart who only works in text. Ideation and hypothesis work, by contrast, travels in text from beginning to end. A category that cannot be delegated and a category that is not being delegated stand side by side at the bottom, and that asymmetry is what this piece treats as the finding.

The data gathering row is not even uniform on the inside. The report notes that within the same category, the underrepresentation runs deepest for tasks with physical barriers, such as collecting clinical or biochemical data. Tasks that amount to retrieving archival documents or text are less underrepresented, and purely digital ones such as collecting online data can actually be overrepresented. The direction splits inside a single row of the table. Which means the order is set not by the name of the category but by the nature of the work inside it.

On why ideation lands so low, the report declines to settle on one answer and lists four side by side. Scientists may prefer generating ideas themselves; they may perceive AI's capabilities as limited; the data may undercount ideation; and AI may be genuinely weaker at high-level ideation. The examples the authors attach to that last item are concrete: choosing which research question to pursue, and designing a study to answer it. Section 5 picks up the third explanation and the next section picks up the fourth.

At the level of individual tasks rather than categories, the picture sharpens. The single most frequent task is drafting manuscripts, at 18.6% on Claude and 11.1% on Claude Code. Next on Claude come reviewing and synthesizing literature at 6.8% and responding to peer reviewer comments at 6.7%; on Code they are designing, building and refining artifacts at 4.8% and visualizing data and results at 4.6%. The top of the list has a common trait. Every one of them puts an output in front of you immediately, and lets you judge on the spot whether it is any good.

The split between the two products shows up in the table as well. Reading and knowledge acquisition sits at 1.05 on Claude, almost exactly its share of hours, and drops to 0.51 on Claude Code. Design and development runs the other way, climbing to 2.12 on Code. Change the tool and the same researcher hands over a different kind of work — which is why averaging the two columns into one would be the wrong move.

## How 528 Scientists Split 100 Points

Usage logs report what was done. They say nothing about what matters. So the researchers brought in a second yardstick. In September 2026 they emailed 1,813 researchers and got 528 completed responses, a rate of 29.1%. Those 528 should not be read as a miniature of scientists at large. The population is people who applied to Anthropic's token grant programs between May 2025 and August 2026; they cluster in the United States and Canada, lean heavily toward the biological and medical sciences, and tilt computational. The report states outright that they are expected to be stronger users of AI models than scientists generally, given their selection into the grant program.

The survey's central question is a simple one: allocate 100 points across four activities according to how important each is for producing an important research result. The four are ideation and hypothesis generation, data gathering, data analysis, and writing and communication. Only four of the eight categories from the previous section were asked about, so reading and theoretical analysis never enter this score at all. The result: ideation 35.6, data gathering 23.6, data analysis 23.3, writing and communication 17.5, summing to exactly 100.0. The smallest category in the usage logs takes first place here, and the largest drops to third.

| Activity | Importance score | Possible today | Possible by 2030 |
| --- | --- | --- | --- |
| Ideation and hypothesis generation | 35.6 | 13% | 72% |
| Data gathering | 23.6 | 23% | 72% |
| Data analysis | 23.3 | 38% | 94% |
| Writing and communication | 17.5 | 30% | 89% |

The importance score is the allocation of 100 points across the four activities. The two right-hand columns answer a question about when AI will perform the activity as well as a top researcher: the share who say it is already possible, and the share who say it will be possible by 2030. Respondents are the 528 Anthropic grant applicants.

With the expected timing beside the score, the reason for the inversion comes out. For data analysis, close to four in ten say it is already possible, and stretching to 2030 brings agreement to 94%. For ideation, only 13% say today. The work respondents call important and the work they consider ready to hand over are two different things, and the usage logs followed the second one. Their own reported behavior says the same. The survey asked about level of AI use on a five-point scale from none to autonomous: for ideation, none at 17% and assisted at 53% together make seven in ten, while data analysis carries its weight at the other end, with shared at 44% and delegated at 28%. The two activities whose figure caption lists no "none" bar at all are data analysis and writing and communication.

One caveat belongs here. Add up the bars in that survey figure and all four rows come in slightly under 100%: ideation 94%, data gathering 95%, data analysis 92%, writing and communication 94%. It looks as though the smallest bar in each row dropped out of the caption, but the report does not say what the missing share is, so we do not fill it in by estimate. What is established is only this: the published values do not reach 100.

The questions about the far horizon point the same way. Around 40% expect AI to run an entire research process without a human by 2030, and widening to 2035 brings that to roughly 64%. Even so, 16% answer that it will never happen. For making breakthrough discoveries without a human, the never share is a little higher at 18%. A line is drawn even inside a group that uses AI heavily, and it falls not at the volume of work but at the place where judgment happens.

## What the Tasks That Went First Have in Common

What we have looked at so far is an ordering. For what produced that ordering, the report answers with a separate body of measurement. It paired up the 7,262 research steps two at a time, asked which of the pair an experienced researcher in that field would accept with little revision if AI had produced the output unaided, and fitted 317,560 of those pairwise choices with a Bradley–Terry model to give every step an AI capability score. One fact should be stated before going further. The scoring was done by a language model rather than by people, and the definition of AI used in the judging already specifies a system with no physical or laboratory integration.

The variable that moves most tightly with that score is RL suitability, at 0.78, followed by cognitive work at 0.69. Running the other way are physical work at −0.57, regulatory restrictions at −0.38, and interpersonal work at −0.31. If RL suitability sounds like an unfamiliar name, the quickest route is to open it up. The index combines three scores — verifiability, simulatability and feedback density — and all three ask the same thing: when and how do you learn that the answer was right? The published component loadings put the largest weight of the three on feedback density, and the single component built from them accounts for 79.5% of their variance.

A step with a high capability score, then, is not a hard step. It is a step whose result is adjudicated where it is produced. And usage lines up along that axis almost monotonically. In the bottom 20% of RL suitability the use ratio runs around 0.2. At the middle it is roughly 1. In the top 20% Claude reaches 2.2 and Claude Code 4.2. The diagram below joins those three points.

Only three points are readable from the report body, so only three are plotted and joined. What happens at the quintiles in between is not something this diagram shows. The dotted line marks a use ratio of 1, the point at which a category draws exactly its share of researcher hours.

The same line reappears one level up. With subfields rather than tasks as the unit, the higher the average capability score of a subfield's tasks, the more Claude use there is per researcher: 0.45 on Claude and 0.57 on Claude Code. Volume is not the only thing that climbs. In subfields with higher capability scores, the share of sessions run autonomously rises too. One level higher, at fields, a more independent comparison becomes available. The report separately estimates the share of research time that AI at today's capability could take on — an estimate computed without a single line of Claude usage data. Fields where that share is larger also show higher use ratios. Tasks, subfields, fields: the same line in three layers.

This curve pairs with an experiment Pebblous covered earlier. In [a piece that measured across 288 cases whether AI can predict which of its own ideas will work](/blog/mle-bench-llm-experiment-prediction/en/), the model could barely tell its own promising proposals from its weak ones. That was a measured confirmation of weakness where no checking signal exists, and these usage logs show, at a scale of 200,000 sessions, that people route around that weakness on their own. The measure of RL suitability itself, incidentally, comes from earlier work that scored 17,951 occupational tasks the same way — and that study's conclusion was likewise that exposure to AI and learnability by reinforcement learning are two different axes.

### 4.1. The same conclusion arrives from another company's data

A result a company produces from logs of its own product may be measuring that product. Which is why it matters whether the same shape exists outside. The Google-affiliated study noted earlier occupies that position. Its taxonomy is not SciNet but an MIT-side classification of scientific tasks, and it uses twelve categories rather than eight — yet first place is again quantitative data analysis, at roughly 42%. Conceiving research, meanwhile, is handled as a tail too small to be worth a share. Different company, different model, different taxonomy, a sample nearly ten times larger, and the same category in the same place.

The survey of some 600 scientists that study ran alongside goes a step further. Its authors gave the phenomenon a name: the verification tax. As the marginal cost of ideation, of writing code and of analysis falls, the cost of confirming the results goes up by the same measure. Where respondents locate the bottleneck moves accordingly. More than four in ten say the main bottleneck in their research shifted downstream over the past two years, toward things like running experiments and clinical validation, while around 14% say it shifted upstream — under a third as many. The four figures below show what that shift looks like for an individual researcher.

<!-- stat-card -->
**41%** — Unverified hypotheses pile up

<!-- stat-card -->
**89%** — Spend over 10% of time saved on checking

<!-- stat-card -->
**46%** — Spend more than a quarter of it

<!-- stat-card -->
**49% vs 28%** — Toward safer topics vs toward riskier ones

All four come from the scientist survey in the Google-affiliated study. Respondents number a little over 600, and the net time saved was reported at close to seven hours a week. Nearly three-quarters say they saved time; 6% say they came out behind.

> [!callout]
> There is one place where the two studies look as though they contradict each other. On the Anthropic side, almost no AI goes into ideation and hypothesis work; on the Google side, respondents say AI piles up hypotheses faster than they can test them. But the two are measuring different things. The first counts the share of conversations — what people switch AI on for. The second is self-reported effect — what AI increased. And the second explains the first. Put even a little AI into ideation and hypotheses multiply quickly while testing capacity stays where it was, so a rational researcher has no reason to hand over more of it. The shortage was never a shortage of hypotheses.

## Ideation Is Also the Hardest Category to Count

Get this far and an uncomfortable question is still waiting. Is the ideation category small because the work is not being delegated, or because the apparatus counting it cannot catch that kind of work? The report does not dodge the question. If anything it leaves almost everything needed to answer it in the appendix. To give the conclusion first: the number here is better read as a floor than as the amount of ideation that happened.

### 5.1. One conversation gets one label

The biggest reason lies in the classifier's architecture. The prompt printed in the appendix instructs the model to treat the conversation as a single unit and to classify its single most prominent research activity: "Pick exactly one path — if several activities appear, choose the one most central to what the user is trying to accomplish." At the task stage it is "Pick exactly one task." The appendix records this as a limitation in its own words, noting that future versions of the classifier could assign multiple tasks to a session and that the extension is left for future research.

But ideas do not arrive on their own. One surfaces while you are staring at data, shifts while you are fixing code, gets settled again while you are drafting the manuscript. With one label per conversation, exchanges like that will almost always land in data analysis or writing and communication. The report body says as much: ideation "tends to be woven into many other research tasks and is difficult to classify," which is why the authors write that their own data may undercount it. Of the eight, it is also the one that mixes most readily into everything else.

### 5.2. The evidence test for "is this research" has nothing for the idea stage

Second comes the screener that runs before all of that. The prompt spells out what counts as grounds for calling a session research work, and there are three: a research output the user is producing or evaluating, a study they are running, or a research role. The trouble is that at the idea stage the first two do not exist yet. There is no manuscript and no study under way. On top of that, the prompt states explicitly that the AI proposing a hypothesis, a design or citations does not make the conversation research, and the default is set to not_research_work. The instruction to answer "not research" when in doubt is written out in full.

There is no reason to read this as a deliberate exclusion. It is a conservative default meant to hold down false positives, and the choice itself is sound. Conservative defaults do come with a price, though: borderline cases all move to one side together. And which conversations in a study like this one land on the border most often is not hard to guess.

The taxonomy carries a comparable asymmetry. The 7,262 tasks are not spread evenly across the eight categories. Data gathering holds 40.8% of them and data analysis 42.9%, while writing and communication holds just 0.3% and ideation 7.4%. The classifier choosing inside the writing category has roughly twenty options to pick from; inside data gathering it has close to three thousand. Any comparison of two categories at task level has to carry that difference alongside it. Transcript handling leaves one more clue of the same kind. Long conversations are cut at 10,000 characters per turn and 100,000 overall, and when they are cut the model keeps whole turns from both ends, alternating between the first and the last remaining one. The longer the conversation, in other words, the more of its middle disappears.

### 5.3. Classification accuracy appears only in the appendix

Third is accuracy. The researchers built 5,000 synthetic transcripts and graded the classifier against them, then put the results in the appendix. Nowhere in the 35-page report body does the number appear.

| What is being predicted | Accuracy | With label wording stripped | Random guess |
| --- | --- | --- | --- |
| Domain | 92% | essentially unchanged | 20% |
| Field | 83% | essentially unchanged | 3% |
| Subfield | 74% | essentially unchanged | 0.3% |
| Task | 69% | 64% | 0.5% |
| Task × subfield | 58% | 54% | — |

Based on 5,000 synthetic transcripts. The middle column removes the half of those transcripts that carried label wording verbatim, and only the task row drops noticeably. Every value is in the validation section of the appendix.

Inflating this into "it gets fewer than half of them right" would be wrong. The random baseline on tasks is 0.5%, so 69% is more than a hundred times that, and the researchers attached two layers of robustness checks. If only the sessions where the classifier was confident in both field and task are kept, about 60% of usage remains; inside that subset the log correlation of field-level usage is 0.97 and 0.98, and task category shares move by at most 1.5 percentage points. Restricting to sessions where Claude contributed substantially to the output gives a correlation of 0.99, with shares moving within 2.1 points. Read fairly, it comes out like this: the rankings and the slope are solid, and what wobbles is the absolute value of individual cells. Ideation is the smallest of the eight, which makes it the one most exposed to that wobble.

### 5.4. Tables that recompute, and one that does not

As section 2 showed, the researcher-time table comes back out of the public data intact. Do the same work on the correlation table and the picture differs. Computing the correlation between capability scores and RL suitability from the published files gives something between 0.63 and 0.71, short of the report's 0.78. Cognitive work is further off still: the similarly named public column produces the opposite sign. The report body does explain why, though, in a sentence saying the RL index was classified separately rather than taken from the public data. The capability score is their own fit as well. So rather than saying the numbers are wrong, the accurate thing to write is that this is the one table a third party cannot check against the same material.

What follows matters more. In every variant run on public data, RL suitability and the capability score keep a consistently strong positive relationship, and each of the three axes making up the index is positive on its own as well. The axis section 4 rests on survives recomputation from outside material. What does not survive is the second decimal place. Pursuing the measurement design further is not our job here; [an earlier piece](/report/ai-use-measurement-independent-corpus-2026-08/en/) that ran Anthropic's occupational filter against an independent corpus already took that up.

> [!callout]
> All three limitations push in the same direction, which is to make ideation look smaller. Yet the conclusion that it is small also arrives from outside the usage logs. In the same study's survey, ideation is the only one of the four activities whose chart shows no delegated bar at all, with seven in ten respondents reporting assisted use or less; and in Google's work, on a different model with a different taxonomy, conceiving research remains a tail. Side effects of measurement design alone cannot explain why three sources point the same way. So that number is not a wrong number. It is a floor. More of this is happening than the figure shows, and none of the excess leaves a record anywhere.

## Price Sets the Ceiling on Acceleration

The figure lifted most often from this report is 15x. It reads easily as "adopt AI broadly and research goes that much faster," but the appendix writes out, as a formula, exactly how the number was obtained. Read it and the number turns out to have nothing to do with capability. Four values are all it takes, and you can do the arithmetic by hand.

First, an hour of a researcher's time is priced at $95. That comes from the median salary in the US Survey of Doctorate Recipients, carried forward to $155,000 in 2026 dollars, plus 28% benefits, divided over 2,080 hours a year. The median actually surveyed in 2023 was $137,000; the $155,000 is the report's own uprating. Second, an hour of AI agent time is priced at $30. Third, AI is assumed to run for 0.2 hours for each researcher-hour it saves. Fourth, the quality coefficient on AI's work is pinned at 1. Together those make a fully automated step still cost 0.063 of what it originally cost, with the acceleration ceiling as the reciprocal.

95 ÷ (0.2 × 30) = 15.83

The body says the same thing in words. Because a fully automated task still costs about one-sixteenth of what a researcher would, "accelerations approach about 16x and stop there," and the next sentence adds that "halving the cost of AI, for example, would double the rate of progress." The report has effectively said on its own behalf that the ceiling is set by the ratio of two prices rather than by how well the work is done.

Three of the four values carry caveats the report attached itself. The $30 AI-hour is "an illustrative value based on public API list prices for Claude Opus 5.5," and the appendix states flatly that it is not a measured average cost. The 0.2-hour run time is an assumption placed immediately after the sentence "No data source measures AI running time by step." On pinning the quality coefficient at 1, the authors write that they do not consider the quality of ideas. That last sentence carries particular weight in this context. Whatever AI contributes by identifying better hypotheses enters this model as zero. What got a price is finishing work faster; what did not get a price is choosing what to work on.

### 6.1. Change the prices and the ceiling moves with them

If one ratio fixes the ceiling, the fastest check is to vary the numbers that make up the ratio. Price an AI-hour at $10 and the ceiling jumps to 47.5x; at $50 it is 9.5x; at $90 it falls to 5.3x. Change the human side and the same thing happens. In Korea's 2026 notice of standard personnel rates for academic research services, converting the principal researcher rate to a full-time figure with bonuses included comes to roughly ₩121 million a year, and dividing by the same 2,080 hours used on the American side gives about ₩58,000 an hour. That is roughly $42.80, and the same formula returns a ceiling of about 7.1x.

Two caveats have to travel with that comparison. The Korean rate is not pay anyone receives; it is an administrative cap used when budgeting national R&D, while the American $95 starts from a measured salary survey. The two are different kinds of number. The exchange rate used is the early-November 2026 level of about ₩1,360 to the dollar. The point stands regardless. The same formula, answered in a different country, comes out at less than half. The ceiling is fixed not by how well AI performs but by the gap in price between a human hour and an AI hour.

The field-level accelerations the model produces inherit that property. The report splits the calculation into three scenarios: current AI capabilities adopted widely, 75% of non-physical steps automated, and all non-physical steps automated. The diagram below puts each scenario's range by field on a log axis, with the two ceilings derived above laid over it as vertical dotted lines.

The two vertical dotted lines are the model's ceilings — the right one solving the formula with US prices, the left one with the Korean principal researcher rate. In the third scenario, statistics, computer science, economics, mathematics and psychology press up against the ceiling, while biology, chemistry, materials science, agriculture and biomedicine stop at 3–4x. Physical steps take roughly 40% of researcher time in fields that need benches and fieldwork. Source: the acceleration-model section of the report and the formula in the appendix.

Even the most-quoted line, "double with current capabilities," changes character once the range is visible. The doubling is 2.02x, the maximum, and it belongs to statistics; the arts come in at 1.35x, anthropology at 1.36x and chemistry at 1.41x. The share of researcher time AI could take on likewise spreads from 27% in the arts to 52% in statistics, with a median of 38%. The limitations the authors list for the model point the same way: field-level facility constraints, the cost of equipment and samples, cases where simulation substitutes for experiment, and the quality of ideas are all missing from it.

## In the Dedicated Tool, Ideation Doubles

One fact inside the report unsettles everything said so far. Separately from the main sample, the researchers also counted usage on Claude Science, a tool built for research work — and there ideation and hypothesis generation is at 8%. That is roughly double Claude's 4.2%, and close to level with the 7.1% share of researcher time. The gap is gone.

The shape of that sample comes first. Its fields run 31.1% biomedical sciences, 24.1% biology and 8.7% medicine, a heavy concentration in the life sciences, with everything else under 5%. The tasks most overrepresented there relative to Claude make the character unmistakable: hypotheses about protein structure and function at 6.0x, modeling interactions between proteins or with ligands at 5.6x, and drug–target interaction hypotheses at 5.6x. At the other end, the least used are coordinating collaborators at 0.15x and conference presentations at 0.2x. The hypothesis tasks that rose share a trait. Every one of them is a hypothesis you can put straight up against a structural database and a computational tool.

The sessions themselves differ too. How long the work would have taken a person alone, the share of sessions handling doctoral-level content, and the share run autonomously all come in higher than on the other two products. Part of that difference could come from the field composition of the sample, so the report also plots the other two products reweighted to Claude Science's mix of subfields and tasks. The figures in parentheses below are those reweighted values.

| Session characteristic | Claude | Claude Code | Claude Science |
| --- | --- | --- | --- |
| Hours it would have taken alone | 4.9 h (5.1) | 5.9 h (5.5) | 10.3 h |
| Share handling doctoral-level content | 48.0% (55.1) | 67.7% (71.8) | 82.7% |
| Share of sessions run with high autonomy | 23.7% (25.2) | 64.1% (61.4) | 73.3% |

Figures in parentheses are reweighted to Claude Science's subfield and task composition. All three measures keep a gap after reweighting. Source: the supplementary-sample section of the report and the accompanying figure.

Reading this as "use the dedicated tool and you will start delegating hypotheses" goes too far. A footnote in the report raises selection first. Any paying user can reach the tool, but the people who actually reach for it may differ, which is why the authors describe differences between products only as patterns of use and never as cause. This piece holds the same line. Weighing the reproducibility and the evidence grade of Claude Science belongs to [earlier pieces](/report/claude-science-early-evidence/en/).

What this section does not do is overturn sections 4 and 5. It goes one step further in the same direction. The hypothesis tasks that grew on Claude Science are hypotheses with a database attached and evidence trailing behind them — ones whose correctness can be established reasonably fast. The available reading is that ideation moved where a checking apparatus was bolted on. [An attempt to make a hypothesis-generating AI leave its reasoning path behind as a graph](/blog/graph-reflexor-traceable-hypothesis/en/) is a design in the same direction. The claim in this piece was never that ideas will not move across. It is that the work made checkable moves first.

## Why This Matters to Pebblous

Start by putting the curve from section 4 back on the table — the line that ran at 0.2 where the checking signal was weak and climbed to 2.2 and 4.2 where it was strong. What Pebblous spent longest looking at in this report is not the ranking of the eight categories but that curve. The order DataClinic meets in customer pipelines every single time is drawn right there.

### 8.1. Automation enters at the checked step, not the hard one

Think about what gets automated first in a data pipeline and the answer comes out the same. Schema validation, missing-value handling, deduplication, format conversion. None of the four went first because it was hard; they went first because you learn on the spot whether you got them right. "Can this data answer that question," by contrast, comes back months later as model performance or as feedback from the people doing the work. Which is why that judgment so rarely moves across. The report's use-ratio curve redraws the same ordering from 200,000 usage records, and the verification tax in the Google survey shows where the cost piles up once you follow that ordering.

### 8.2. With no apparatus to check the work, no label survives either

On the data quality side this study leaves four lessons. First, attach one label to a unit and whatever was mixed in disappears. One task per session is the design that turned the ideation figure into a floor. The same thing happens when labeling customer data: a single-label schema erases compound events. Second, defaults produce results. The single fact that the screener defaulted to "not research work" decided where every borderline case ended up.

Third, numbers printed on one chart can come from different instruments. The use share was counted by a classifier, the researcher-time share was estimated by a language model, and the importance score was answered by people. Lay them side by side and a reader reads all three on one scale. Fourth, and this one we ran into directly in this work: open is not the same as read, and without reading, reproduction fails. Preparing this piece, we tried to rebuild the same table from the same public files and got three different answers. The difference was not in the data but in three aggregation choices — which rows count as core research, what belongs in the denominator, and what to weight by. All three were written down in the appendix. Publishing data is a necessary condition for reproduction, not a sufficient one.

### 8.3. Running the same study on your own organization

For anyone minded to run an in-house version of this study, what we would leave behind is not a conclusion but a set of questions. Five will do.

- When do we find out whether the work we handed to AI came back right? On the spot, at the end of the quarter, or never?
- Does the work we call important have anything attached that checks it? If not, that work will not move across — and we will not know whether it moved.
- What are our own usage logs counting? How many labels per session, are tools counted separately, and do enterprise plans and API calls enter the tally at all?
- Who produced the baseline we use for working hours? Was it measured or estimated?
- What unit price are we assigning to AI — list price, or an average of actual use? The report's ceiling was fixed by that one number, and so is our return calculation.

The fourth question is worth pinning to a Korean source. In the National Research Foundation of Korea's 2024 survey of research ethics awareness among university faculty, 3,256 respondents, 17.4% said they had used generative AI in their research. A year earlier the same survey put it at 10.9%, so the figure rose 1.6-fold in twelve months. The leading area of use is checking grammar and wording at 92.3%, followed by literature review at 50.7% and constructing theoretical frameworks at 43.5%. The questions differ from Anthropic's, so we do not line the numbers up against each other. One thing does catch the eye, though. The answer options in that survey contain no category corresponding to ideation and hypothesis generation. What the questionnaire does not ask about never gets measured. It is the same shape section 5 described.

### 8.4. A published yardstick can be held up again

Section 2 could fill in four denominators the report withheld only because the authors left the formula and the data open together. They printed the classifier prompts in full, put task classification accuracy in the appendix down to its least flattering number, published the acceleration model's assumptions as an equation, and released the taxonomy under an open license. That is what let an outside party run the same arithmetic, and what let us tell apart the parts that hold from the parts nobody can check. Publishing a measurement is what exposes the measurement to being measured, and it is the sturdiest thing about this report.

The remaining work is on our side: fitting something that checks the processes we call important. As the 8% in section 7 shows, the moment that gets fitted, those processes start moving across too. So the next question is not where to put AI. It is whether we can fit a check to the very work we keep calling important.

Sections 1 through 7 carry what we confirmed in the Anthropic report body, its 45-page appendix, the open SciNet files and the original Google-affiliated study. The move that gathers those figures under one property — checkability — together with section 8 is interpretation Pebblous has added, and the two are meant to be read apart. It is also why every figure, the first time it appears, is labeled on the same line as a use share, a researcher-time share, an importance score, or a value recomputed here. Thank you for reading this far.

## References

Sources for the figures in the text, grouped by kind. Items 1 to 4 are the report examined here and its taxonomy, and every use share, quotation and recomputation comes from them. Items 5 and 6 are independent measurements from outside. Items 7 to 9 underpin the prices in section 6, and items 10 and 11 are the Korean sources in section 8. The last two groups are Korean press coverage and adjacent Pebblous pieces.

### Primary — the report under examination

- 1.Johannes Hermle, Benjamin Jones, Lukas Althoff and six others, "AI for scientific discovery: How researchers use Claude" (The Anthropic Institute, published November 5, 2026, revised November 6). [anthropic.com](https://www.anthropic.com/research/how-researchers-use-claude) — the primary oracle for this piece. The sample lineage, the eight use shares, the 100-point importance allocation and expected timings from 528 survey respondents, the correlation between capability scores and RL suitability, the use ratio curve and the Claude Science supplementary sample all come from here. The page's short title reads "How scientists use Claude," but the citation follows the heading used in the document itself.
- 2.The same report, body PDF (35 pages). [PDF](https://www-cdn.anthropic.com/6e7c6446c0d8405dba73b91dabd36aac069dea2e/AI-for-Scientific-Discovery.pdf) — the sentence in section 2 that "much of data gathering is physical, while ideation is not," the admission in section 5 that the data may undercount ideation, and the two sentences about 16x in section 6 are all in this document.
- 3.The same report, appendix PDF (45 pages). [PDF](https://www-cdn.anthropic.com/files/4zrzovbb/website/fafb3d4237f9b53fe114fef4fb5109b9cf5b5e60.pdf) — the classifier prompts in full, the screener's evidence requirements and default, the accuracy figures from 5,000 synthetic transcripts, the aggregation formula for researcher-time shares, and the four values and caveats in the acceleration model exist only in the appendix. The recomputation in section 2 follows that formula exactly.
- 4.Camila Alamos and Lukas Althoff, SciNet task taxonomy (CC BY 4.0). [github.com/lukasalthoff/scinet](https://github.com/lukasalthoff/scinet) · [anatomyofscience.com](https://www.anatomyofscience.com/) — 7,262 tasks with annual hours per task, researcher headcounts by subfield, and scores on the three RL axes are all published here. The four ✦ cells in section 2 were computed from these files.

### Independent measurement and method

- 5.Mihai Codreanu, Alex Imas, Juan Mateos-Garcia, Neil Thompson, James Manyika and others, "AI in Science: Early Insights" (arXiv:2609.28504, published September 15, 2026; revised version of September 25 used here) — the Google-affiliated measurement cited in sections 1 and 4. Quantitative data analysis in first place, ideation in the tail, and the four verification-tax figures come from roughly 15 million Gemini interactions and a survey of some 600 scientists.
- 6.Philip Moreira Tomei and Bouke Klein Teeselink, "What Jobs Can AI Learn? Measuring Exposure by Reinforcement Learning" (arXiv:2605.02598, published May 4, 2026; revised September 27) — the prior work referenced in one line of section 4. It scored 17,951 occupational tasks on whether they can be trained by reinforcement learning, showing that AI exposure and RL suitability are separate axes.

### Prices and labor costs

- 7.US National Science Foundation, National Center for Science and Engineering Statistics, _Survey of Doctorate Recipients: 2023_ (NSF 25-321) — the source of the $137,000 all-field median salary that section 6 starts from. The $155,000 the report uses is that value carried forward to 2026.
- 8.Anthropic published price list (checked November 9, 2026). [claude.com/pricing](https://claude.com/pricing) — the basis for which list prices the $30 AI-hour in section 6 is an illustrative value from.
- 9.Korean Ministry of the Interior and Safety, notice of standard personnel rates for academic research services, 2026 (issued January 2, 2026) — the source of the Korean principal researcher rate in section 6.1. The monthly full-time rate including bonuses was annualized over twelve months, divided by the same 2,080 hours used on the American side, and converted at ₩1,360 to the dollar, the average band in November 2026. It is an administrative budgeting cap rather than actual pay.

### Korean surveys

- 10.National Research Foundation of Korea, Center for Research Ethics Information, "2024 Survey of Research Ethics Awareness among University Faculty" (3,256 respondents) — the source of the 17.4% generative AI use figure and the ranking of use areas in section 8.3.
- 11.The 2023 round of the same survey (2,822 respondents) — the 10.9% on the same question. The two rounds are read together as one year of change.

### Korean press coverage (not used as a source for any figure)

- 12.Lim Dae-jun, AI Times (November 8, 2026). [aitimes.com](https://www.aitimes.com/news/articleView.html?idxno=217147) — consulted to see how the report reached Korean readers.
- 13.AI Times Korea [aitimes.kr](https://www.aitimes.kr/news/articleView.html?idxno=42618) · TokenPost [tokenpost.kr](https://www.tokenpost.kr/news/ai/433510) · Seoul Economic Daily [sedaily.com](https://m.sedaily.com/article/20095668) — other Korean coverage of the same report. Articles that also surface in search under "Korea has the world's highest Claude adoption" refer to the Anthropic Economic Index, a different study, and have no bearing here.

### Adjacent Pebblous pieces

- 14.[AI cannot tell whether its own idea will work](/blog/mle-bench-llm-experiment-prediction/en/) — cited in section 4. It measured across 288 cases how weak models are where no checking signal exists.
- 15.[Running Anthropic's occupational filter against an independent corpus](/report/ai-use-measurement-independent-corpus-2026-08/en/) — referenced in section 5.4. That piece took on the measurement design itself.
- 16.[Grading the evidence behind Claude Science](/report/claude-science-early-evidence/en/) — where section 7 hands off the product assessment.
- 17.[Making a hypothesis leave its reasoning path behind](/blog/graph-reflexor-traceable-hypothesis/en/) — referenced at the close of section 7.
- 18.[The study finding that AI tools expand individual impact while contracting science as a whole](/report/ai-tools-expand-impact-contract-science/en/) — on a paper this report cites. The relationship between individual productivity and collective diversity is covered there.

<!-- stat-card -->
**📚 Claude Watch Hub** — Collects our pieces following Anthropic and Claude: filings, lawsuits, safety evaluations and product changes. [More from the Claude Watch hub](/project/AnthropicClaude/en/)
