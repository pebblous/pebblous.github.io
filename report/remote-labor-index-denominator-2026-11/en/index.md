---
title: Remote Labor Index
subtitle: Anthropic
date: 2026-11-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Remote Labor Index

_Anthropic_

## Executive Summary

> [!callout]
> The Remote Labor Index has a new leader. Claude Fable 5.2, released by Anthropic on November 9, scored 41.25%, close to double the model behind it. On this test, built out of real paid projects bought mostly off Upwork, the best score a year ago was 2.5%. This article does not ask whether that number is high or low. It asks what the number counted.

> Three things hold the number up, and each of them moves. One is the denominator. The paper writes that quantitative evaluation runs on a private set of 230 projects, while every one of the twenty-three rows on the public leaderboard divides by 240. Another is the scaffold the model stands on. What gets scored is not the model alone but the model on a Linux box with GIMP and FreeCAD installed and Veo 3 handling the video tasks, and that scaffold was rebuilt partway through the time series. The last is the shape of the jobs. The 240 are what survived after 310 candidates were dropped out of 550, each one arriving with a brief, a full set of input files and an acceptance bar already attached.

> Back in July this publication covered the same test and put 16.1% in its headline. The organization that published that figure had 15.8% on its own blog the same day. Both are correct; only the denominator differs, and the one that spread was the one with the smaller denominator. So the question a reader should leave with is not whether 41.25% is a big number, but whether the work your own company does would have passed through the sieve that produced those 240 jobs in the first place.

<!-- stat-card -->
**99 / 240** — The numerator and denominator behind 41.25% — As written in Anthropic's system card. On the same scale, second and third place work back to 51 and 50 projects, a gap of one

<!-- stat-card -->
**11.5 hours · $200** — Median size of a single job — Hours a human expert actually spent and money they were actually paid. The means are 28.9 hours and $632.6, which is 2.5x and 3.2x the medians

<!-- stat-card -->
**550 → 240** — The 310 candidates that did not get through — 56% of the pool was dropped. The nine sourcing criteria in the paper's appendix are the working definition of a job cut small enough to finish alone

<!-- stat-card -->
**~3.3 months** — Time for the score to double — Our own regression on the five public data points. Broken into legs, the same series gives doubling times from 1.1 months to 7.6

## One Score Spelled Three Ways

On November 9, 2026, Anthropic released Claude Fable 5.2 and the top of the Remote Labor Index changed hands. The same score, though, looks like a different number depending on where you read it. The public leaderboard run by Scale AI and the official benchmark site remotelabor.ai both print 41.25%. The dashboard at the Center for AI Safety (CAIS) and Anthropic's own system card both print 41.3%. The system card adds the numerator and the denominator underneath: 99 of 240.

All three are the same value written out differently. Ninety-nine divided by 240 is 41.25%, and 41.3% is that figure rounded to one decimal place. This report uses 41.25% as the base figure. The part worth holding on to is not that the notation splits, but that only one of those four places prints a denominator at all. And the denominator it prints is not the one the paper prints.

The top of the table looks like this. Claude Fable 5.2 at 41.25%, Opus 5.5 second at 21.25%, GPT 6 Astra third at 20.83%. When the test first went public on October 30, 2025, a year ago, the highest score belonged to Manus at 2.5%. Divide 41.25 by 2.5 and the multiple is 16.5. That multiple cannot be read at face value, because the two scores did not come off the same scaffold, and section 3 covers why.

A short description of what the Remote Labor Index is, for anyone meeting it here. Scale AI and the Center for AI Safety bought 240 projects that real clients had actually paid for, mostly on Upwork, and standardized them. An AI is handed the same brief and the same input files and returns a deliverable. That deliverable is set beside what the human expert actually delivered, and three graders decide whether a client would accept it as the work they commissioned. A majority of the three settles success or failure. For the design and the grading in more detail, this publication has [an article from July](/blog/remote-labor-index-automation/en/).

One thing in that July article needs correcting. We put Fable 5's automation rate at 16.1%, and both the Korean and the English edition carried that figure into the search-result title. The leaderboard today has the same model at 15.83%. The score did not go down. On July 1, 2026, the organization that published it put out two numbers on the same day, the one with the smaller denominator spread, and we copied that one down.

## All Twenty-Three Leaderboard Rows Divide by 240

The paper states its denominator plainly: **"To protect PII and prevent benchmark contamination, we maintain a private test set of 230 projects used for quantitative evaluation. We release a public set of 10 projects along with the open-sourced code for the evaluation platform."** Two hundred and thirty projects stay behind a wall so that personal data is protected and the test questions do not leak into training data, ten are released, and the quantitative score comes off the 230.

The numbers on the public leaderboard do not fit that description. On November 13, 2026 we pulled down all twenty-three rows and multiplied each score back out by 240 and by 230. Against 240, every one of the twenty-three lands on a whole number. Against 230, not one of them does. Five of the rows are below.

| Model | Automation rate | ×240 | ×230 |
| --- | --- | --- | --- |
| Claude Fable 5.2 | 41.25% | 99.0 | 94.88 |
| Opus 5.5 | 21.25% | 51.0 | 48.88 |
| GPT 6 Astra | 20.83% | 50.0 | 47.91 |
| Fable 5 | 15.83% | 38.0 | 36.41 |
| Manus 1.0 | 2.50% | 6.0 | 5.75 |

The other eighteen rows behave identically. All twenty-three are whole numbers over 240 and none is a whole number over 230. Even the first top score the paper recorded back in 2025, 2.5%, is 6 of 240 and does not resolve against 230. We opened the leaderboard twice on the same day and ran the arithmetic separately each time, and the two passes agreed completely.

We went looking for an explanation and did not find one. We searched the body of the paper and its appendices, the footnotes on the leaderboard page, remotelabor.ai, press coverage and aggregator sites. One aggregator writes that leaderboard scores come from the private set of 230, and in the same paragraph writes that 41.3% is 99 of 240. That tells us the secondary layer is mixing the two denominators as well, which is not an explanation. So we are not going to write here that the 230 is wrong. What is established is this. **The denominator the paper states and the denominator the leaderboard actually divides by do not match.**

### 2.1. Two Denominators from One Organization on One Day

What happens when there are two denominators already showed itself once, back in July. On July 1, 2026 the Center for AI Safety posted Fable 5's automation rate to two channels and the figures differed. The organization's blog said 15.8%. A post on X the same day said 16.1%. The X post attached a caveat to its number: 22 of the 240 projects could not be evaluated, because the US government materials they required were out of reach.

Work both numbers back into project counts and the situation becomes visible. 15.8% against 240 works back to 38 projects. 16.1% against 218 works back to 35. The denominator is not the only thing that split. The numerator works back to 38 in one case and 35 in the other. The X post counted only the 218 projects that had been evaluated and the blog used all 240 as its denominator, but why the success count differs by three as well is written down in neither channel. The 15.83% on the leaderboard today is 38 divided by 240, which puts it in the same family as the blog figure.

Neither figure is wrong. Each is correct against its own denominator. The denominator simply did not travel with the number. Sources: the Center for AI Safety blog and a post on X from the same day, plus the public leaderboard as read on November 13, 2026.

We also considered that the blog figure might have been corrected after the fact, and we could not confirm it. We tried two web archives for a snapshot from early July and both were blocked in this working environment. So the established statement stops here. Open the two channels today and they hold different values, and the one carried further is the 16.1% computed over 218.

Without the denominator, a contest decided in the second decimal place cannot be read either. Second place at 21.25% and third at 20.83% work back to 51 and 50 projects. The distance between those two models is one project out of 240. Copy across "21.25 versus 20.83" with no denominator attached and a reader has no way of telling whether that gap is one project or ten.

## The Scaffold Inside the Score

41.25% is not a score the model earned on its own. The model is what solves the task, but it works on a bench that someone else built, and in this field that bench has a name: the scaffold. An Ubuntu Linux environment is provided, software is installed on it in advance, and each task carries a time limit. Part of how well the scaffold performs goes straight into the score.

Epoch AI examined the environment and wrote down two things about it. The first is the absence of professional tools. The design and engineering software the industry actually uses does not run on Linux, so **"models must fall back to less capable alternatives like GIMP or FreeCAD"**. The second is a call out to another model: **"Veo 3 Preview is used to generate videos, and thus the model being assessed inherits Veo's weaknesses."** On the video tasks, Google's video generation model is what actually produces the footage, and whatever it does badly lands on the score of the model under test.

That changes how a score reads. Points dropped on video tasks carry a share that belongs to Veo 3, and points dropped on design and CAD tasks carry a share that belongs to GIMP and FreeCAD. The reverse direction holds as well. Put better tools on the bench and the score rises with the model left exactly as it was.

### 3.1. A Scaffold Upgrade in the Middle of the Time Series

The same Epoch AI piece records that the bench itself was replaced. Here it is verbatim: **"Models were given a one-hour total time limit, and the environments did not come with much relevant software preinstalled. However, the CAIS and Scale AI team conveyed to us that they made significant upgrades to the in-house scaffolds, including an increased suite of pre-installed software and a considerably extended per-task time limit."** At the start there was a one-hour total limit and very little useful software installed; after that the preinstalled suite grew and the per-task limit went up substantially. And then: **"These improvements were in place for the Opus 4.5 evaluation, where it scored only 4%."** The upgrades, in other words, were already in place by the time Opus 4.5 was evaluated.

That last sentence narrows down when the swap happened. The example Epoch AI gives of a score from the upgraded bench is 4%, and on today's leaderboard Opus 4.5 sits at 3.75%. The bench was therefore reworked while the leaderboard as a whole was still in single digits, and 15.83%, 21.25% and 41.25% were all recorded after it. Setting 2.5% and 41.25% on the same line calls for a caveat, which also means that comparisons within the later stretch are on firmer ground than that. Whether the bench was reworked again since then is not published in the same kind of record, so we cannot say.

**Separating the facts from the reading.** That the bench changed is a fact Epoch AI recorded, conveyed to them by the people who run the benchmark. Epoch AI did not write that this makes the time series incomparable. The judgment that setting 2.5% beside 41.25% requires a caveat is this report's reading. Narrowing down which stretch the swap falls in is also this report's arithmetic, done by reading Epoch AI's sentence against today's leaderboard.

### 3.2. Does "Doubling Every Three Months" Hold in Every Leg?

Both remotelabor.ai and the Center for AI Safety state on public channels that the automation rate doubles roughly every three months. Rather than take that second-hand, we checked it. We normalized the five public data points to a denominator of 240 and ran a least-squares regression through the origin. The slope comes out at 0.00996 doublings per day, which inverts to a doubling period of about 100 days, or 3.3 months. That is effectively the same as the published figure.

A different number comes out of the same points. Join only the first and the last and you get 16.5x over 375 days, a doubling period of about 93 days, or 3.0 months. That sits more than a week away from the roughly 100 days the five-point regression gives. If those five points lay tidily along one line, there would be no reason for the two figures to diverge.

Breaking the average into legs shows that the growth is not uniform. Here are the three legs.

| Leg | Days elapsed | Automation rate | Doubling period |
| --- | --- | --- | --- |
| Opus 4.6 → Fable 5 | 118 days | 4.17% → 15.83% | ~61 days |
| Fable 5 → Opus 5.5 | 98 days | 15.83% → 21.25% | ~231 days |
| Opus 5.5 → Fable 5.2 | a month and change | 21.25% → 41.25% | ~35 days |

One leg last summer was slow enough that doubling would have taken seven and a half months. A single surge over the final month and change canceled that slowness out, and averaging the two gives three months. "Doubling every three months" is therefore not a description of a speed but the mean of two speeds that have little to do with each other. Sources disagree on the date Opus 5.5 reached the leaderboard, putting it at October 7, October 18 or October 29. The table takes the earliest of the three, which stretches the final leg as long as it will go, so calling that leg a surge survives even on the conservative reading.

## The 240 Jobs Arrived Already Cut

The 240 are not jobs scooped straight off Upwork. Three things come attached to every one of them: a standardized brief setting out the task, the materials provided and the required output format; the complete set of input files the work needs; and the deliverable the human expert actually handed over, along with the hours that person spent and the money they were paid. The model skips the stage of working out what is being asked and starts on the job itself.

For a feel for how big one job is, the median serves better than the mean. Median time to completion is 11.5 hours and median cost is $200. The means are 28.9 hours and $632.6, which is 2.5x and 3.2x the respective medians. The distribution runs long to the right, and half of these jobs are a day and a half of work for a couple of hundred dollars. How far the tail reaches is noted in the caption to Figure 4: at least one job took a human expert more than 100 hours, and at least one cost more than $10,000. Percentiles and standard deviations are absent from the write-up, so these ratios and the existence of those extremes are as much as anyone can say about the distribution.

Original Pebblous diagram (reinterpretation of Fig. 4) — point positions are illustrative, not the actual coordinates of the 240 projects. The paper publishes neither percentiles nor a standard deviation, so the exact shape of the distribution is unknown; what is established is the gap between median and mean and the existence of tail extremes. Source: paper, arXiv:2510.26787, Figure 4.

The widely repeated "6,000 hours and $140,000" has a hole in it too. Completion-time data exists for 84% of the 240 and cost data for 95%. The mean of 28.9 hours therefore comes from roughly 202 projects and the mean of $632.6 from roughly 228. Read either as a count across all 240 and you have it wrong. Which way the missing 16% and 5% lean is not addressed anywhere. One more caveat rides on the price. Costs are recorded as of the date each project finished with no adjustment for inflation, and the authors note that the projects were carried out within the last five years. The $140,000 is a price tag up to five years old.

### 4.1. The Sieve That Dropped 310 of 550

The team gathered 550 candidate projects from freelancers and kept 240 of them. 310, or 56%, were dropped. What got filtered out is written down in Appendix C.2 as sourcing criteria. Five of the nine land directly on the kind of work a reader does.

- **"The work can be completed independently by one freelancer and does not inherently require working on a team"**
- **"The work does not inherently require interacting with clients"**
- **"The work does not require testing or interacting with live services set up by the client"**
- **"all projects can be evaluated on the spot"**
- **"Deliverables must be possible to view in a web-based evaluation platform"**

A separate set of seven criteria governs the cleaning stage that follows collection, and one of them reads **"The brief and input files are complete and sufficient"**. The body of the paper describes the whole process this way: **"To ensure each project is a self-contained, reproducible benchmark instance, we conducted multiple rounds of review, cleaning and standardization."**

> [!callout]
> That list of criteria is the operational definition of a job cut small enough for one person to finish alone. It is not a construction this report put on the evidence; the authors wrote it into their own appendix. Which means 41.25% should be read as 41.25% of the jobs that made it through those nine sieves, rather than 41.25% of remote labor. How many projects fell at each individual criterion is not published.

Where the surviving 240 cluster by field is only partly knowable. Twenty-three subcategories are covered, but no table of per-category counts appears anywhere in the document. The caption to Figure 3 reads **"Here, we show the top seven categories."**, and only those seven appear as bars. Within the seven, categories whose output lands as a single file, such as video, 3D and graphics, are conspicuously well represented. Without the full distribution there is no basis for writing "N% of the 23".

### 4.2. The Cutting Work That the Scorecard Never Counts

In real outsourcing the biggest consumer of time often sits outside the work itself. Deciding what is to be made, agreeing on what state counts as finished, putting a price on it, gathering the materials and handing them across. In the 240, all of that is already done by the time the test begins. The range the automation rate measures does not contain that labor.

There are designs that try to pull the gap back inside the evaluation. UpBench (arXiv:2511.12306), released in November 2025 by researchers on the Upwork side, is one. Its abstract states that **"expert freelancers decompose each job into detailed, verifiable acceptance criteria and assess AI submissions with per-criterion feedback"**. Whether the cutting-up belongs outside the evaluation or inside it is the point on which the two designs part company. The UpBench abstract does not name the Remote Labor Index or criticize it.

The objection that these jobs are cut too neatly was raised before this report. In the same piece, Epoch AI writes that **"tasks in all the benchmarks are performed in isolation from any broader business context"** and that **"there is far more 'remote labor' than represented in RLI"**. The limitations section of the paper says much the same thing from the inside: work needing client interaction, work needing a team and work that failed to meet requirements were all left out, so even an AI at 100% automation could still come in behind a human on the kinds of work nobody evaluated.

## Where the Measurers Stand

This section is not where suspicions get raised. It records as fact only which parties hold interests on more than one side, and leaves the judgment to the reader.

Start by correcting a misconception that has spread widely. There is talk that the company holding the top score helped build the test, and that is not the case. The Remote Labor Index was built by Scale AI and the Center for AI Safety, the paper carries 47 authors, and the corresponding author is Dan Hendrycks. Nobody affiliated with Anthropic appears on the author list. Anthropic, which built the first-placed Claude Fable 5.2, had no hand in making the test.

The fact that is visible from where these parties stand is a different one. Scale AI runs **Outlier**. That is a remote work platform on which more than 900,000 freelancers produce AI training material, and the output goes to Meta, OpenAI, Google and xAI, and to Anthropic as well. The worker-tracking complaints against that platform were covered separately in [our November 6 article](/blog/scale-ai-outlier-worker-tracking-gdpr/en/). Put plainly: the organization measuring how far AI can get through the work of remote freelancers is itself a party to a remote freelancing platform.

The same company also ran this particular score. Anthropic's system card states that the Remote Labor Index measurement was carried out by an external organization, and it lists the settings alongside: the default high effort level, a 200K token context window and a 32K token response cap. That external organization is Scale AI, and on release day the same figure went up on the vendor's own results table and on the public leaderboard together. Whether the evaluation was paid work or an unpaid collaboration appears **nowhere in the system card**.

Scale AI attaches a caveat of its own, which is that the metric does not stand in for the digital economy as a whole. A sentence like "41% of jobs are going away" did not come from the people who built this thing.

> [!callout]
> Neither Anthropic's announcement nor its system card mentions jobs or the labor market. They record a number and a configuration and draw no forecast from either. The Center for AI Safety, by contrast, says on public channels that the automation rate doubles every three months, and widens the claim to remote work in general. The parties who translated 41.25% into the word "jobs" are the ones doing the measuring and the ones copying the measurement down, not Anthropic, which received the score.

## Does Your Own Work Pass That Sieve?

Turned around, the sourcing criteria from section 4 become a set of questions you can put to your own work. This is not a list invented for the occasion; it is the appendix conditions rendered into workplace language. Hold one specific piece of work in your head and walk through the six in order.

- Can this job be written down on **a single brief**? Does one page hold both what is to be made and what counts as finished?
- At the moment work starts, are **all the materials already in hand**? Is there a file still to be collected from somebody partway through?
- Can whoever takes it finish **without coming back to ask**? Is there a point in the middle where direction has to be confirmed again?
- Can **one person do it alone**? Does another team's hand have to enter even once?
- Does it require touching **a system that is running** on your side? Does it need internal accounts, production servers or live customer data?
- Does the output **land as a file** that can be passed or failed on the spot? Or is it something you only learn about from results weeks later?

For work that clears all six, 41.25% roughly applies. For work that catches on even one of them, that job was **never inside the 240 to begin with**. Which is a different statement from saying it scored badly. It means the work sits outside the measured range, and moving the number across without that distinction is how a failed rollout gets misdiagnosed as a problem with model performance.

Read all six and one real question is left over. **Who in your organization is doing the cutting?** Somebody fixes the requirements into sentences, gathers the materials and attaches them, and settles the acceptance bar in advance. Take that person away and no automation rate will get the work finished. The other direction holds as well: in an organization where that pipeline is solid, the same model closes more work in the same day.

## Why Pebblous Is Watching

What Pebblous spent the longest looking at in this report was not the top score at all. It was the nine criteria in section 4, because that list read as something we already knew.

### 7.1. The Process That Built the 240 Is an AI-Ready Data Process

Lay out what the team did to build those 240 projects. They standardized the briefs, collected the input files, attached a reference deliverable to each one, fixed the acceptance criteria into written sentences, and filtered 310 candidates out of 550. That is the same process Pebblous calls AI-Ready Data. Section 4 of this report is really the construction of one dataset seen from the labor side, and our interest sits less on the automation rate as an outcome than on how much of the preparation that made the outcome possible was human work.

### 7.2. Three Axes of Variation on the Instrument Side

The three things this report picked out have something in common. One model's public score moves between 16.1% and 15.8% on the strength of a denominator. A scaffold swap cuts the time series in two. The population of 240 is itself the product of nine sieves. None of these is variation on the model side; all three come from the measurement design. That is why DataClinic asks about label definitions, collection conditions and denominators first when a customer dataset arrives. Without the denominator there is no telling whether a number that went up means capability went up or the counting method changed.

### 7.3. When a Client Asks Whether 41% Means Less Outsourcing

In practice this figure almost always arrives in exactly that shape. An outside benchmark returned 41%, so can we cut 40% of what we outsource? The answer is the six questions in section 6 rather than a number. Where the work falls out as a single brief, the materials are all present at the start, and it can be finished without anyone coming back to ask, the figure roughly applies. Where it does not, the work was outside the measured range before the question was asked. Passing the number along without that distinction is a common first step toward a rollout that fails.

### 7.4. The Bottleneck on the Cutting Side Rather Than the Model

What the Remote Labor Index has shown over the past year is that **once a job can be cut, the score climbs fast**. Which puts the remaining bottleneck on the side that cuts work into measurable units and fixes the acceptance criteria as data, rather than on the model. Pebblous belongs on that side too, not in the business of ruling what AI can and cannot replace. Turning a customer's work into something that can be cut the way those 240 were cut is the job we do, and when that job is done the automation rate follows.

The figures and quotations in sections 1 through 6 come directly from arXiv:2510.26787, the public leaderboard as read on November 13, 2026, Anthropic's system card, the Center for AI Safety's blog and posts on X, and Epoch AI's analysis. The leaderboard arithmetic and the doubling-period regression are calculations this report ran itself. Reading the three strands as one question, along with everything in section 7, is interpretation Pebblous has added. Please read the two apart. The things we could not establish are recorded too. No explanation from the benchmark's authors for whether the denominator is 230 or 240 turned up anywhere, and an early-July snapshot of the Center for AI Safety blog could not be opened because archive access was blocked.

## References

Sources for the figures in the body, grouped by what kind of source they are. Items 1 to 3 are primary material on the test itself, and the denominator arithmetic, the sourcing criteria and the medians all came from there. Items 4 to 6 are the public record left by the parties that published the scores. Items 7 and 8 are outside analysis and a contrasting design, and the last group is earlier work from this publication.

### Primary: the test itself

- 1.Mazeika et al., "Remote Labor Index: Measuring AI Automation of Remote Work" (Scale AI and the Center for AI Safety, 47 authors, arXiv:2510.26787, v1 of October 30, 2025, single version). [arxiv.org](https://arxiv.org/abs/2510.26787) — source of the verbatim 230 private / 10 public split, the nine sourcing criteria and seven cleaning criteria in Appendix C.2, the medians of 11.5 hours and $200 and the means of 28.9 hours and $632.6, the 84% and 95% coverage rates, the no-inflation-adjustment caveat, and the Figure 3 caption.
- 2.Scale AI public leaderboard (read November 13, 2026, checked twice separately that day). [labs.scale.com/leaderboard/rli](https://labs.scale.com/leaderboard/rli) — the ×240 arithmetic in section 2 comes from these twenty-three rows, as do 41.25%, 21.25%, 20.83% and 15.83% and the listing dates used in the section 3 leg calculations.
- 3.Remote Labor Index official site (read November 13, 2026). [remotelabor.ai](https://www.remotelabor.ai/) — source of the 41.25% notation, the "over 6,000 hours and over $140,000" figures, and the statement that the automation rate doubles roughly every three months. The results block did not load at the time of access, so the figures were cross-checked against the leaderboard.

### The parties that published the scores

- 4.Anthropic, Claude Fable 5.2 / Mythos 5.2 system card, §8.14.7 (November 9, 2026) — 41.3% and "99 of 240", the statement that an external organization carried out the evaluation, and the default settings with the context window and response cap. No compensation arrangement is recorded.
- 5.Center for AI Safety, "A Significant Increase in Digital Labor Automation" (July 1, 2026). [safe.ai](https://safe.ai/blog/significant-increase-in-digital-labor-automation) — the channel that put Fable 5 at 15.8%. The same post puts Opus 4.6 at 4.17%.
- 6.Center for AI Safety posts on X (July 1, 2026, and November 2026) — the earlier one puts Fable 5 at 16.1% and attaches the caveat about 22 unevaluated projects; the later one widens "roughly doubling every three months" to remote work in general.

### Outside analysis and a contrasting design

- 7.Florian Brand and Greg Burnham, "What do 'economic value' benchmarks tell us?" (Epoch AI, February 13, 2026). [epoch.ai](https://epoch.ai/) — all four scaffold quotations in section 3 (the one-hour total limit, the upgraded preinstalled software, the GIMP and FreeCAD fallback, Veo 3 Preview) and the business-context objection in section 4 come from this piece.
- 8.Darvin Yi et al., "UpBench" ([arXiv:2511.12306](https://arxiv.org/abs/2511.12306)) — the contrasting design used in section 4.2. Quoted from the abstract on freelancers decomposing jobs into verifiable acceptance criteria. No sentence in it names or criticizes the Remote Labor Index.

### Earlier Pebblous articles

- 9.[AI Agents Now Finish One in Six Real Freelance Jobs](/blog/remote-labor-index-automation/en/) (July 14, 2026) — covers the design and the grading of this test. The 16.1% it put in its headline is corrected in sections 1 and 2 above.
- 10.[Does Scale AI's Outlier Record the Keyboard and the Mouse?](/blog/scale-ai-outlier-worker-tracking-gdpr/en/) (November 6, 2026) — section 5 borrows a single fact from it, on what kind of platform Outlier is.
