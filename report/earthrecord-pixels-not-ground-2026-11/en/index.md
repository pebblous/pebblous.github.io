---
title: EarthRecord Satellite Test: AI Agents Follow the Sensor Over the Ground
subtitle: Nothing on the ground changes, one satellite
date: 2026-11-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# EarthRecord Satellite Test: AI Agents Follow the Sensor Over the Ground

_Nothing on the ground changes, one satellite_

## Executive Summary

> [!callout]
> A new benchmark hands AI agents a satellite archive with none of the usual cleanup done for them. EarthRecord covers 56 sites around the world with four decades of observations each, delivers the pixel values unscaled and with the quality flags left unapplied, puts the conversion table in a README, and then asks how the land has changed. Screening out cloud, drawing the boundary of a change, putting readings from four different satellites onto one scale — all of it belongs to the agent.

> The pipelines run end to end. The top four models are right in all three passes on more than eight in ten of the 226 scored questions, and among the failures of the six leading models, only seven out of seventy-two come from using the wrong data or never finishing the analysis. A baseline that simply guesses the most common answer scores 23.9% on the same test. The breakage sits one step further along.

> Leave the ground untouched, shift one satellite's readings, and half of the answers that had been right go with the shifted numbers. Nine in ten of the answers that changed moved in the direction of the tampering, while a pair where nothing was tampered with moved only one time in ten. Every alteration was built so that a glance at another satellite from the same period would expose it, and 3.5% of the wrong runs named the instrument as the cause. The bill for skipping the preprocessing does not arrive as "the agent cannot do this." It arrives as **the agent cannot doubt the intermediate numbers it just produced itself**.

<!-- stat-card -->
**7 / 72** — Failures at the first step — Of the 72 failed runs of the six leading models, the number that used the wrong data or never finished. The other 65 all turn on a judgment

<!-- stat-card -->
**92.0% → 61.1%** — Computed questions vs. mapping ones — Scores on questions computed straight from variables against those that need a map drawn from the imagery, for the six leading models

<!-- stat-card -->
**53.5%** — Right answers that followed the tampering — The share that turned wrong once one satellite's values were shifted with the ground untouched. The denominator is the 200 cases right on the original

<!-- stat-card -->
**3.5%** — Reports that blamed the instrument — Eight of the 228 wrong runs traced the break to the equipment. Even reporting the break at all happened in only 49 of them

## The Archive Arrives With Nothing Tidied Up

Satellite data normally reaches a user already groomed. The integers a sensor writes out have been multiplied by a scale factor and shifted by an offset into physical units, and pixels under cloud carry a quality flag. EarthRecord withholds all of that grooming, and §2.1 of the paper states the design in a single sentence: **"Apart from the regional boundary mask and the instrument pairs, pixel values are unmodified: scale factors, offsets, and quality layers are not applied, and a README gives the conversions."** Everything a data provider would normally finish before shipping is left for whoever opens the files.

That makes for a long list of chores. The introduction names three: cloud masking, mapping, and cross-sensor harmonization. Throwing out the clouded scenes, drawing the boundary of a change out of the imagery, and putting a satellite launched in 1984 and one launched in 2019 onto a single scale all fall to the agent. Even looking at a picture has to be earned. According to §2.4, the agent **"must select bands, apply a stretch, and render an image before it can inspect it"** — three steps before there is anything to look at.

### 1.1. The Flaws Already in the Archive Stay In

What goes untouched does not stop at the unit conversions. Only duplicate scenes and scenes at least 90% obscured were pulled out; defects that ship with the public distribution were left where they were. Of the 57,157 Landsat scenes over the core areas, 4,485 are Tier 2, and some of those sit up to 15.7 km away from where they belong. In a test built on areas 10 to 30 km on a side, 15.7 km moves a whole area somewhere else. The quality layer gets things wrong too: of 200 sampled scenes it had rated clear, five turned out to have cloud in them.

**Separating the facts from the reading.** The numbers above are what the paper records. They do not mean this archive is unusually dirty. A Tier 2 share of 7.8% falls inside the per-sensor range the US Geological Survey publishes (4.9% to 15% for the newer sensors), and a 2.5% cloud miss compares favorably with the 7% to 14% omission rate reported for Landsat CFMask and the 16.5% to 37.4% for the Sentinel-2 scene classification layer. The accurate reading is that even quality flags that are good by industry standards are not complete, and that reading is ours.

### 1.2. What Was Asked: 238 Questions Across Ten Analysis Tasks

Here is the scale of the thing. There are 56 sites of two kinds: 48 core areas 10 to 30 km on a side and 8 administrative regions. The 48 split again into 8 famous areas, 7 stable areas picked precisely because little has happened in them, and 33 obscure ones. The span runs from 1984 to the snapshot date of September 30, 2026, and four sensors cover that span in staggered shifts.

Orange marks the years a sensor delivers data; pale gray is before it reached orbit. This is why the instrument pairs in Section 5 touch values from 2018 onward — in that stretch there are several satellites to check one against another. Start years come from §2.1 of the paper.

There are 238 questions. Of these, 153 are computable — the answer follows from variables already in the record — 73 are recognition questions that require reading the imagery, and 12 are insufficient-evidence questions where the data cannot settle the matter and abstaining is the right answer. The headline scores are computed over the first two groups, **226 questions** in all. The marking is unforgiving: each question is run three times, and a point is awarded only when the conclusion is right in all three passes.

Where this design departs from earlier tests is something the authors set out themselves in Section 5. Remote sensing question-answering benchmarks work from a single curated scene, whereas this one evaluates **"decades of raw record at one site instead of a scene"**. Earth observation agent benchmarks have agents call tools to gather observations but control for neither prior knowledge nor sensor shifts, whereas this one hands over the multi-sensor archive as distributed, withholds the reference answers, and runs three passes per question. The line against counterfactual and sensor-shift tests is drawn too: EarthRecord's instrument pairs follow that line but **"alter the data the agent itself processes while the ground stays as it is"**. All three distinctions are the authors' own account of their work.

Three weeks ago we covered the opposite end of this ecosystem. [OlmoEarth](/blog/olmoearth-global-satellite-embeddings/en/) processes the planet's satellite imagery in advance and leaves behind vectors of numbers that a user simply picks up and applies. EarthRecord draws the line in the other direction. One shows what fully prepared data is worth; the other puts a number on the bill that arrives when none of the preparation has been done.

## Handling the Data Is Not Where the Leading Models Fall Over

A design like this suggests an obvious ending: withhold the preprocessing and the agents will sit down in front of the raw files. That is not what happened. Taking in an integer raster with no scale factor applied, reading the README to find the conversion, filtering out clouded scenes, stitching together series from different sensors — the stronger models mostly got through it.

Across the twelve models the scores fan out widely. The top four, the bottom two, and the two baselines look like this. The unit is the share of questions right in all three passes, out of 226.

| Model | Pass 3 score | 95% interval |
| --- | --- | --- |
| Claude Opus 5.5 | 85.4 | 80.5 – 89.8 |
| GPT-6 Sol | 84.1 | 79.2 – 88.9 |
| GPT-6.1 Sol | 81.4 | 76.1 – 86.3 |
| Claude Sonnet 5.5 | 81.0 | 75.7 – 86.3 |
| Majority-class baseline | 23.9 | — |
| Qwen 3.7 Flash | 19.5 | 14.6 – 24.8 |
| GPT-6 Luna | 18.6 | 13.7 – 23.9 |
| Always-no-change baseline | 13.7 | — |

The bottom of the table is the part worth staring at. The two weakest models score **below the majority-class baseline**, which is to say that mechanically guessing the most common answer beats them. Without the capacity to handle a raw archive, receiving one is not merely unhelpful but actively harmful. The paper's phrasing for the range is **"The spread across models—even within the same family—is wide."** The qualifier is the sharp part: GPT-6 Luna at 18.6 and GPT-6 Sol at 84.1 carry the same maker's name.

### 2.1. Only Seven of Seventy-Two Failures Trip Early

The authors opened up the failed runs and hand-coded the first step that went wrong in each. They applied the same coding to 72 failures from the six leading models and 72 from the other six.

| First wrong step | Leading 6 | Other 6 |
| --- | --- | --- |
| Data — wrong product, missing data, sensors joined inconsistently | 5 | 18 |
| Time sampling — gaps filled by assumption, polar night | 16 | 7 |
| Question — computes a different quantity than the one asked | 15 | 6 |
| Analysis — mapping and judgment | 27 | 15 |
| Close call | 7 | 4 |
| Unfinished — the analysis never reaches an answer | 2 | 19 |
| Other | 0 | 3 |

The first row and the sixth carry the finding. Among the six leading models, five failures came from using the wrong data and two from never finishing — **seven out of seventy-two** between them. The paper puts it this way: **"Such failures are rare for the leading six (7 of 72); instead, their errors arise later, in an analytic judgment: how to map a change, how to sample time, or how to define the quantity the question asks for."**

For the weaker six the picture inverts. Eighteen data failures plus nineteen unfinished runs make 37, so half their failures land at the front of the pipeline. What separates the two groups is whether a model can handle raw data at all; past that threshold, handling it stops being the question. Which is why the interesting ground for this report begins after the preprocessing is done.

The paper also counted where that ground is. Pooling both groups, 144 failures, the single most common judgment to go wrong is mapping, in 31 of them: **"Among these judgments, mapping fails most often, in 31 of the 144 failures"**. That 31 is a finer cut of the 42 analysis failures in the table above (27 from the leading six, 15 from the rest), and it is what the next section opens up.

## What Splits the Scores Is Drawing a Boundary

The axis along which scores separate is not the name of the analysis task. It is the kind of question. Some questions are answered by pulling variables out of the record and computing; others require rendering the imagery and tracing the edge of a change by eye. The six leading models get 92.0% of the first kind right and 61.1% of the second.

Source: §3.2 of the paper. The bars are pass 3 scores for the six leading models; the odds ratio in the box below is computed after grouping by model and by task.

A gap that size invites an objection: perhaps the mapping questions simply cluster inside the harder tasks. The paper closes that door in advance. **"The gap holds within tasks: for the same model and task, the odds of a right answer on a mapping question are 0.31 times those on a computed one (95% interval 0.14–0.66)."** Hold the model and the task fixed and the penalty survives. A second figure points the same way: of the 18 questions no model gets right, 15 require a map.

The answers also wobble differently. The six leading models are right in only one or two of three passes on 13.7% of mapping questions, against 4.6% of computed ones. Less difficult than unstable.

### 3.1. Backing Away Into "Insufficient Evidence" Before Trying

On the 41 recognition questions that need a map, three models frequently decline to answer at all. GPT-6.1 Sol answers "insufficient evidence" in 46.3% of its runs, GPT-6 Astra in 58.5%, GPT-6.1 Terra in 66.7%. On the same questions GPT-6 Sol abstains in 8.1% of runs and Sonnet 5.5 in 8.9%. Abstention also barely happens on the computable side: 0.9% to 2.7% on the 37 computable questions that need a map, and at most 2% across computable questions as a whole.

The manner of the retreat is the telling part. **"Their abstaining runs make a median of two or three tool calls and mostly view no image."** When those same models do answer these questions, the median run takes five to ten calls. They quit early, and they quit without ever rendering the picture that the question turns on.

**Reading abstention as failure gets it backwards.** The paper attaches the caveat immediately. When these three models do answer these questions, they are right in 92.4%, 98.0% and 85.4% of runs — above GPT-6 Sol at 77.9% and Sonnet 5.5 at 75.9%, the two that rarely abstain. Of the 25 recognition questions GPT-6 Astra declines in every pass, Opus 5.5 gets 12 right in all three. Hence the paper's conclusion: **"Their lower recognition scores therefore reflect early abstention rather than wrong answers."** These models are not missing the answer; they are choosing not to give one. A single accuracy column flattens an abstention and a wrong answer into the same zero, and for anyone running the system they are nothing alike.

### 3.2. Take the Image Tool Away and the Scores Hold

The paper adds an experiment that pushes one step further. The 73 recognition questions were run again, everything unchanged except that the image tool was removed. Alongside it sits the closed-book score, where the record is withheld entirely and only the coordinates are given. Three models were put through it.

| Model | With image tool | Without it | Closed book |
| --- | --- | --- | --- |
| Claude Opus 5.5 | 59 | 55 | 48 |
| GPT-6 Sol | 57 | 55 | 42 |
| GPT-6.1 Sol | 47 | 46 | 44 |

Every model moves by between one and four questions, and the sign-test p values come out at 0.29, 0.69 and 1.00. **"Their scores change by one to four questions, and no difference is significant by a sign test."** Read the GPT-6.1 Sol row across and the point lands harder: 47 with the imagery, 46 with the image tool switched off, 44 with the record taken away altogether. On recognition questions, the tool for looking at the pictures bought that model one question. The comparison covers three models and 73 questions, and no more than that.

## How Long 'Winter' Lasts Decides the Answer

In the failure table of Section 2, the two rows that caught the six leading models most often were analysis, with 27, and time sampling, with 16. Section 3.3 of the paper supplies a case that shows what those two rows contain. The question asks whether a site has fewer snow-covered days than it used to.

The word "winter" appears in the question. How many months that word covers was never specified, so each agent settled it. And the answer went with the settling. **"The answer depends on the definition of winter: none of the 10 runs that define it as December to February finds a decrease, whereas all 13 that use October to April or a longer period find one, as the reference does."** No hedging in either direction — a clean zero on one reading of the word and a clean sweep on the other.

Same data, same question, same class of model, and one undefined term swings the result from 0% to 100%. It swings inside a single model as well. GPT-6.1 Sol took December to February in one pass and got it wrong, then took a longer window in the other two and got it right — one model walking into the same question with two different definitions in hand.

That wobble is not confined to one question. Of the 347 wrong runs produced by the six leading models, 121 — 35% — are on **questions the same model answers correctly in another pass**. The paper's line is **"These agents are thus able to answer such questions but do not apply the right judgment consistently."** The failure is in the consistency, not the capability, and a scorecard built on a single run per question cannot see any of that 35%.

### 4.1. Wherever a Definition Is Missing, the Same Thing Happens

Winter is not the only word left open. At high latitudes the sun does not rise for part of the year, and through the polar night an optical sensor sees nothing. Some runs fill that blank by assuming snow lay on the ground; others count the same days as snow-free. Neither assumption came from the question. The appendix collects more of them: harvested fields with bare soil classified as burned, a flood lake read as a reservoir. None of these are failures to read the data. They happen one step later, where someone decides what to count.

**Separating the facts from the reading.** That the definition of winter split the answers, that the polar night was papered over with assumptions, that 35% of wrong runs flip across passes — all of that is in the paper. Back in July we wrote about [how AI weather models sample time](/report/ai-weather-temporal-resolution/en/), and argued there that the sampling interval is fixed outside the model and the model merely inherits the choice. What EarthRecord shows is that the choice has now moved inside the model, and that the same model makes it differently from one pass to the next. Joining the two pieces that way is our reading.

## Accuracy Cannot Tell the Instrument From the Ground

A high score and an answer that came out of the data are two different claims. To pull them apart the authors built two controls: one takes the record away entirely, the other leaves the record in place and alters it. Their section titles follow that order — "From prior knowledge to the pixels", then "To the pixels, but not yet to the ground".

### 5.1. Hand Over the Coordinates and Nothing Else

The first control is simple. Give the model the same question and the site's bounding box, and withhold the four decades of observations. That score is what prior knowledge alone can produce, and the difference from the score with the record is what the record contributed. On computable questions, the six leading models land here.

| Model | Closed book | With the record | Gain |
| --- | --- | --- | --- |
| Claude Opus 5.5 | 62.1 | 87.6 | +25.5 |
| GPT-6 Sol | 49.0 | 86.9 | +37.9 |
| GPT-6.1 Sol | 37.9 | 89.5 | +51.6 |
| Claude Sonnet 5.5 | 54.2 | 85.0 | +30.7 |
| GPT-6 Astra | 34.0 | 87.6 | +53.6 |
| GPT-6.1 Terra | 25.5 | 86.3 | +60.8 |

Widen the frame to all twelve models and the gains run from 4.6 to 60.8 points. The direction of the flips is just as clear: 40.9% of model-question pairs go from wrong to right, against 5.8% the other way. On computable questions, the record genuinely moves the answer from prior knowledge to the pixels.

Recognition questions tell a different story. Four models score **lower** once they are given the record. And at the famous areas — the Amazon, the Aral Sea — the closed book scores 55.9 against the record's 50.0. Where a place is already known, not looking beat looking. That is the first sign that four decades of raw observations are not always a help.

### 5.2. A Change That Happened Only in the Record

The second control is the heart of the benchmark. In 22 instrument pairs, one satellite's values are altered from 2018 onward: twenty pairs are scaled by up to 20%, one by 5%, and the last swaps Landsat 8 scenes from 2013 to 2017 for Landsat 7 scenes. The question and the reference answer stay exactly as they were. Nothing happened on the ground, so the right answer has not moved either. All 22 pairs use computable questions.

A control group runs alongside. Eight placebo pairs touch no values at all and merely drop 5% of the clear scenes at random, which gives a floor for how much an answer drifts on its own. One more condition is written into the design: **"Every retained pair is detectable by comparison with concurrent satellites."** The road to noticing was never blocked, and that single line is what makes the 3.5% further down hurt.

Sources: §2.5 and §4.2 of the paper. The 200 cases in the left-hand box are the model-pair combinations right in all three passes on the original version, and have nothing to do with the total question count.

What breaks most often when results like these are retold is the denominator. The five figures in this section each have their own, so here they are in one place.

| Figure | Denominator | What the denominator is |
| --- | --- | --- |
| 53.5% (107) | 200 cases | Model-pair combinations right on the original in all three passes |
| 91% (186) | 204 runs | Runs whose stated direction differs between the two versions |
| 12% (8) | 66 cases | Cases on placebo pairs that were right on the original |
| 21% (49) | 228 runs | Wrong runs in the cases that moved |
| 3.5% (8) | 228 runs | Same denominator as the row above — and a subset of that 21% |

Of the 200 cases right on the original in all three passes, 107 turned wrong after the alteration — 74 of 102 on Terra NDVI, 20 of 50 on Landsat 8, 13 of 48 on Terra snow. Among the 204 runs whose answer changed, 186 moved in the direction of the tampering: scale the values down and the agent reports a decrease, scale them up and it reports an increase. On the placebo pairs, where nothing was altered, only 8 of 66 cases moved, and **not one of those came from the six leading models**.

Scoring well buys no protection either. **"Nor does a higher score protect an answer: the eight models above 75 on computable questions still lose 33% to 59% of their right answers."** And the answers that did hold mostly held for reasons other than spotting the alteration. Set aside the ones already right in the closed book and the ones whose reference answer was "no change", and what remains — cases that hold beyond both — is 15 of 200, or 7.5%.

### 5.3. One Comparison Would Have Shown It, and It Was Not Made

The painful number here is not the accuracy. It is what the agents wrote in their own reports. The authors read every one of the 228 wrong runs in the cases that moved and sorted what those reports said about the sensors into five categories.

| What the report says | Runs | Share |
| --- | --- | --- |
| Says nothing about the sensors at all | 117 | 51.3% |
| Offers only a generic caveat about sensors | 52 | 22.8% |
| Reports the altered and a concurrent satellite separately without flagging the difference | 10 | 4.4% |
| Reports the break but reads it as land change or leaves the cause open | 41 | 18.0% |
| Attributes the break to the instrument | 8 | 3.5% |

Reporting the break in any form at all means the bottom two rows together: 49 runs, or 21%. The eight that name the instrument sit **inside** that 49 rather than beside it, so the two figures nest rather than add. And more than half of the runs, 117 of them, never put the word sensor on the page, in a design where one comparison with another satellite would have exposed every pair.

The fourth row is the one that catches the eye. One run recorded that Aqua **"diverges from Terra in recent years and does not show a significant decline on its own"**, and then wrote Decrease in the conclusion field. It made the comparison, it put the discrepancy into a sentence, and it went with the altered sensor anyway.

### 5.4. Confidence Drops, on a Dial Far Too Small

Each model reports a confidence alongside its answer. Could that have been used as a filter? Across the 226 wrong runs that report a confidence on both versions, the mean fell from 0.86 to 0.79, and it was lower in 126 of them. So the signal is not absent. The problem is the size of the dial. From the appendix: **"Every model reports lower confidence on mapping questions than on computed ones, by 0.02 to 0.23, while its accuracy falls by 6.0 to 27.8 points."** Accuracy drops by tens of points while confidence shifts in the second decimal place.

The dangerous combination is a model that neither abstains nor marks itself down. Gemini 3 Flash lowered its confidence by 0.03 while its accuracy fell 25.7 points, and it never once declined an answerable question. On the measure of how well reported confidence separates right conclusions from wrong ones, it sits at 0.63 to 0.67 against Sonnet 5.5's 0.84. The paper's sentence: **"When an agent neither declines nor lowers its confidence, as with Gemini 3 Flash, its errors are the hardest for a user to notice."**

### 5.5. Two Runs, One Altered Pair, and a Difference of Procedure

The last table in the appendix puts this section's conclusion into one scene. The question asks whether greenness in New Cairo, Egypt, changed between 2001 and 2025. The reference answer is an increase, and the alteration scales Terra NDVI down from 2018. Two runs received the same pair; here is what each did.

|  | GPT-6 Astra | DeepSeek Flash |
| --- | --- | --- |
| Data used | MODIS NDVI, Terra only | MODIS Terra and Aqua, VIIRS, Landsat, Sentinel-2 |
| Work | 8 tool calls, 1.5 min, no image viewed | 66 tool calls, 20.1 min, 3 images viewed |
| Original version | increase, +0.014 per decade (right) | increase, +0.014 per decade (right) |
| Altered version | decrease, −0.091 per decade (wrong) | increase, +0.013 per decade (right) |
| Overall score | 77.0 | 68.1 |

GPT-6 Astra did not miss the break. Its report lists the annual means, and the line for 2017 reads 0.131 while the next one, 2018, reads −0.067 — a jump nothing in nature produces. It even wrote the caveat itself: **"The cause of the break has not been independently verified."** Having put that sentence on the page, it filled in the conclusion field with Decrease.

DeepSeek Flash went another way. It wrote that **"MODIS Terra (MOD13Q1) is unusable after 2017 in this dataset: the AOI-mean NDVI steps down by ∼0.20 between 2017 and 2018"**, added **"while Aqua shows no change"**, then cut the series into per-sensor windows and fitted each one separately. Aqua from 2003, Terra up to 2017 and VIIRS from 2013 all converged between +0.011 and +0.014 per decade. On that basis it answered increase on the altered version too.

Overall, GPT-6 Astra scores 77.0 and DeepSeek Flash 68.1. **The weaker model won this one.** What won it was not capability but procedure: it checked against another satellite and cut out the stretch that disagreed. This single scene stands in for everything Section 6 recommends.

## Transplanting the Controls Into Your Own Data

The argument this report has been building was stated first in the paper's own conclusion: **"the bottleneck lies not in executing code over the archive but in two scientific steps: mapping change from the imagery and verifying whether a change in the pixels reflects change on the ground."** Two things are left for us to add. One is carrying the numbers across with their denominators attached. The other is writing down how to transplant the design somewhere other than satellites.

The transplant works because the structure of the controls has nothing to do with satellites. Withhold the data; alter the data and nothing else; alter nothing at all. Any labeled dataset can be given the same three treatments. Those three, plus one rule for how to score them, make four steps, and a fifth follows at the end.

### 6.1. Withhold the Input and Ask the Same Question

If a question can be answered without the input, that part of the score does not belong to the input. What the model saw in training, a hint leaking from the wording of the question, a skew in the label distribution — any of these may be doing the work. In EarthRecord this control reversed the ranking at well-known sites such as the Amazon and the Aral Sea. Emptying the input field in an evaluation set and re-running the same questions costs nothing but the inference. Our piece last week on [re-evaluating an astronomical image classifier](/blog/astro-image-classifier-shortcuts/en/) used a control from the same family. That one was an ablation, erasing the input; Section 5.2 here is a substitution, altering it. An answer that stays right after an erasure never looked at the input at all; an answer that follows along after a substitution looked at the instrument instead of the subject.

### 6.2. Hold the Right Answer Fixed and Move the Measurement

If the subject holds still, the measuring apparatus alone moves, and the answer moves with it, then that answer was reading the instrument rather than the subject. Instead of satellites, picture a sensor log where the hardware was swapped, a revenue table where the aggregation rule changed, a stretch of labels where the annotator was replaced. The condition is what matters. The alteration has to be rigged so that **a comparison with an independent source will always expose it**. An alteration nobody could have caught measures the designer's carelessness, not the model's.

### 6.3. Run a Pair Where Nothing Was Changed

Without the 12% floor, the 53.5% means nothing, because model answers drift somewhat even when left alone. Placebo pairs are the ruler for that natural drift, and they are cheap to build — dropping 5% of the clear scenes at random was enough here. A counterfactual test with no control group manufactures a number without saying whether the number is large or small.

### 6.4. Ask Each Question Repeatedly and Score Only a Clean Sweep

Of the 347 wrong runs from the six leading models, 121 were on questions the same model got right in another pass. A scorecard with one run per question is blind to that 35%: on a lucky draw it banks the point, on an unlucky one it does not. Running three times and awarding the point only for three correct answers is not a device for depressing scores. It is a device for measuring consistency separately.

### 6.5. The Fifth Control Is a Procedure

Look again at the two runs in Section 5.5 and the direction of the prescription becomes visible. The winner was not the stronger model but the one that followed a procedure of checking against an independent source. So what belongs in an evaluation design is not "use a better model" but **putting the cross-check on the scoresheet**. Do not look only at whether the conclusion was right; score separately whether the report contains a record of comparing against something else. By EarthRecord's count, that box was empty in more than half the runs.

To hold your own team's evaluation design against this, five questions suffice. Have you ever erased the input and re-run the same questions? Have you ever held the right answer fixed and perturbed only the input? Does the evaluation set contain control pairs where nothing was changed? Do you run each question more than once and let the agreement enter the score? Do you separately inspect the model's working notes for a cross-check? Five empty boxes and the scorecard is measuring exactly one thing, which is accuracy.

Anyone who wants to take the design apart can open the originals. The paper's conclusion uses the future tense — **"EarthRecord and its evaluation sandbox will be released."** — but as of November 14, 2026 the release has already happened. The Hugging Face dataset and the GitHub repository are both open, the license is CC BY-SA 4.0, and the raw data runs to 686 GB. The evaluation sandbox is an offline CPU container and asks for no special hardware.

## Why Pebblous Is Watching

What held our attention longest in this paper was not the leaderboard but one line in Section 1, the one saying that scale factors, offsets and quality layers were not applied. That list looked familiar.

### 7.1. Remote Sensing Already Has a Term for This

The satellite industry has a grade called Analysis Ready Data, or ARD. The official definition from the Committee on Earth Observation Satellites is **"satellite data that have been processed to a minimum set of requirements and organized into a form that allows immediate analysis with a minimum of additional user effort"**, and the requirements cover radiometric and atmospheric correction, geometric correction, general metadata and per-pixel metadata. It is the list a provider finishes in advance so that a user can start analyzing on arrival.

EarthRecord inverts that definition precisely. The very list the field agreed was the minimum to do beforehand is the list it deliberately stripped out. And that industry term is a neighbor of what Pebblous calls AI-Ready Data, down to the acronym. If OlmoEarth, which we covered three weeks ago, is the end of the spectrum where the preparation is complete, this paper puts a number on where the bill lands when none of it has been done.

### 7.2. All Three Places Trace Back to Lineage

The three places this report stopped at have something in common. Read a trend without knowing the sensor changed and a change in the equipment is reported as a change in the land. Leave a variable's definition unrecorded and the same data yields opposite conclusions. Trust the quality flag as given and a clouded scene enters as a clear one. All three are what happens when data lineage is not tracked, and all three are why DataClinic asks about label definitions, collection conditions and instrument history before anything else when a dataset arrives. This paper adds one line to that list: the quality metadata the provider attached is itself something to verify.

### 7.3. Answering "Can't We Just Hand Over the Whole Dataset?"

When a client asks that, the answer no longer has to be an estimate. What works and what does not has been measured. Running code over an archive to produce numbers works — seven failures out of seventy-two is the evidence. What does not work is telling whether the intermediate numbers an agent just produced reflect the instrument or the subject, and that distinction only surfaces in a control experiment a human designed. Leave the controls of Section 6 out of a deployment plan and the failures get reported quietly as "high accuracy".

Section 5.5 supplies a sentence that transfers straight into operations. A cross-check is not a nice-to-have; put it on the scoresheet. One procedural step is what let the weaker model beat the stronger one.

### 7.4. Our Place Is in the Design, Not the Verdict

Pebblous does not belong on the side that rules on whether AI can or cannot take over an analysis. It belongs on the side that designs the data and the evaluation so that what a model actually looked at can be told apart. What EarthRecord demonstrates is that a single accuracy column will not make that distinction, and what makes it is the design work of withholding the data, altering it, and leaving it alone. That work is our job.

Every figure and every quotation in Sections 1 through 6 comes directly from the full text of arXiv:2611.12934, and the release status, license and data volume were checked on November 14, 2026 by visiting the Hugging Face, GitHub and project pages. The CEOS-ARD definition and the Landsat tier distinction follow each organization's official documentation. Reading the three failure points as one problem — the auditing of preprocessing — and the whole of Section 7 are our interpretation, and we would ask readers to keep the two apart. What we could not confirm is on the record too: we found no primary source describing what kind of company AIEyes Technologies, one of the author affiliations, is, so we left it out, and within the limits of our search we found no Korean-language press coverage of the paper since it appeared on November 6, 2026.

## References

Sources for the figures in the text, grouped by kind. Items 1 through 4 are the primary materials for the benchmark itself, and every score, denominator and quotation comes from them. Items 5 through 8 are the institutional documents and validation studies used to put the data-quality numbers in context. The last group is our earlier coverage.

### Primary — the benchmark itself

- 1.Haoran Zhang, Huizhen Sun, Hanbin Wen, Jie Leng, Jiaxin Zhu, Zhaohua Sun, "EarthRecord: From Pixels to Land Change with Multimodal Agents over Four Decades of Satellite Imagery" (arXiv:2611.12934, v1 of November 6, 2026; there is only one version). [arxiv.org](https://arxiv.org/abs/2611.12934) — source of the design quotations, the twelve-model scores, the failure-step table, the image-tool removal experiment, the five denominators of the instrument-pair results, the five-way coding of run reports, and the two New Cairo runs.
- 2.EarthRecord project page (accessed November 14, 2026). [ranranrannervous.github.io/EarthRecord](https://ranranrannervous.github.io/EarthRecord/) — source of the author affiliations, the leaderboard, and the 686 GB figure.
- 3.EarthRecord dataset, Hugging Face (access confirmed November 14, 2026; CC BY-SA 4.0). [huggingface.co](https://huggingface.co/datasets/haoranranranran/EarthRecord) — where we confirmed that the data is already open, unlike the paper's "will be released".
- 4.EarthRecord code repository, GitHub (access confirmed November 14, 2026). [github.com](https://github.com/ranranrannervous/EarthRecord) — where we checked whether the evaluation sandbox had been published.

### Standards, institutional documents and validation studies

- 5.CEOS, "CEOS Analysis Ready Data (CEOS-ARD)" official definition (accessed November 14, 2026). [ceos.org/ard](https://ceos.org/ard/) — source of the definition quoted in Section 7.1 and of the four requirement categories.
- 6.USGS, "Landsat Collection 2 Level-1 Data" — states the Tier 1 / Tier 2 distinction, with its 12 m positional threshold. [usgs.gov](https://www.usgs.gov/landsat-missions/landsat-collection-2-level-1-data)
- 7.USGS EROS, LSDS-1656 Product Definition — Tier 2 shares by sensor (MSS 37%, TM 27%, ETM+ 17%, OLI/TIRS 15%). This is the basis for the statement in Section 1.1 that 7.8% falls inside the published range.
- 8.Foga et al., "Cloud detection algorithm comparison and validation for operational Landsat data products" (Remote Sensing of Environment, 2017), together with DLR's validation reports on the Sentinel-2 cloud mask — source of the 7–14% and 16.5–37.4% omission rates used in Section 1.1 to put the 2.5% in context.

### Earlier Pebblous coverage

- 9.[OlmoEarth Boils the Whole Planet Down to Numbers](/blog/olmoearth-global-satellite-embeddings/en/) (October 23, 2026) — cited in Sections 1 and 7.1 as the counterpart where preprocessing is carried all the way through.
- 10.[The AI Weather Model That Wins the Daily Forecast but Trails the Long Range](/report/ai-weather-temporal-resolution/en/) (July 9, 2026) — the earlier piece the discussion of time sampling in Section 4 builds on.
- 11.[An Astronomical Image Classifier Still Gets Three in Four with the Galaxy Erased](/blog/astro-image-classifier-shortcuts/en/) (November 6, 2026) — used in Section 6.1 to separate an ablation from a substitution.
