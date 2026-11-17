---
title: Does AI Peer Review Need a Better Model or a Better Prompt?
subtitle: A benchmark planted 357 errors in thirty papers and ran twelve AI reviewer systems over them; on the same prompt, the three frontier models varied more than fivefold in detection
date: 2026-11-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does AI Peer Review Need a Better Model or a Better Prompt?

_A benchmark planted 357 errors in thirty papers and ran twelve AI reviewer systems over them; on the same prompt, the three frontier models varied more than fivefold in detection_

## Executive Summary

> [!callout]
> Handing a paper to an AI reviewer is no longer an experiment. AAAI 2026 attached a machine-written review to every one of the 22,977 papers in its main track. So what does that review actually catch? A team at the University of Cambridge, the Flatiron Institute and elsewhere has proposed one way to measure it. They planted errors whose answers they knew into thirty real papers, then asked twelve AI peer-review systems to go find them. What this article carries over is not the ranking on that scorecard but what pulled the scores apart.

> Handed the identical 27-word prompt, the three frontier models came out roughly 50 points apart in total detection. Among those three, the lowest detection rate and the highest stood fivefold apart. Then the prompt was replaced with a long itemized checklist, and the spread narrowed by roughly half. The models that climbed most, though, were the ones that had been weak to begin with, and the fix carried a price. In one configuration that kept the model and the tools in place and swapped nothing but the prompt, the cost per paper jumped fivefold. And the error type caught most often turned out to be the type flagged wrongly most often.

> Everything so far is a number from the paper's tables and appendices. "Rewriting the prompt is a way of lifting weak models" and "judges agree only where the question has an answer key" are our readings of those numbers, and the body marks each one where it appears. The argument here is not that AI review cannot be trusted. The authors put results that cut against their own tool in the same tables, ran a self-preference test, and published their costs. The argument is this: even measurement this honest leaves this much unmeasured. The figures below come from arXiv 2611.17052 v1, posted 12 November 2026 and read on 16 November 2026.

<!-- stat-card -->
**48.6 points** — Detection spread across three models on the free-form prompt — Astrophysics corpus: 60.5% against 11.9%. On the ML corpus the spread is 52.8 points

<!-- stat-card -->
**24.0 points** — The same spread once the structured prompt replaced it — Same corpus, same three models. What narrowed it was the prompt, not a change of model

<!-- stat-card -->
**5× cost · 6× time** — What the prompt change alone added per paper — Measured in the Claude Code configuration with model, sandbox and tools held fixed. Detection rose 32.2 points

<!-- stat-card -->
**0.90 → 0.32** — Judge agreement with an answer key, and without one — Two panels sharing two of their three seats sit at 0.90–0.93 on matching and 0.32–0.58 on false positives

## Plant errors whose answers you already know

The thing to watch in this benchmark is the question it asks. The researchers took thirty papers that had actually entered the publication pipeline and planted 357 errors in them, each one with a known answer. Then they had twelve AI peer-review systems review those papers and counted how many of the planted errors showed up in the reviews. With the key in hand, "how many did it find" stops being an estimate and becomes a count.

Why that differs becomes clear by comparison. The common way to evaluate an AI reviewer is to measure how closely it resembles a human-written review. Use that ruler, though, and the errors humans missed stay invisible forever. The paper's introduction names the gap directly: evaluation has mostly been framed as "alignment with human-written reviews" or run as error injection on ML papers alone, leaving out questions such as "false-positive rates or error detection as a function of the error severity". False-positive rates and detection by severity are the two cells this benchmark sets out to fill.

### 1.1. Thirty papers drawn from a single day of submissions

There are two corpora. The astrophysics corpus is the 15 papers no longer than 20 pages among the 24 submitted to arXiv astro-ph on 22 April 2026, with a median length of 13 pages. The ML corpus is 15 papers drawn by stratified random sampling across eight subfields from the 74 eligible cs.LG submissions of 15 July 2026, median 9 pages. Both carry the same condition: **one day's submissions, 20 pages or fewer**. Longer manuscripts and other days are not represented by these results.

Splitting the corpus across two fields is the heart of the design. AI review benchmarks so far have covered ML papers almost exclusively, which means they measured only on territory the evaluated models already know well. The authors describe their astrophysics run as "the first controlled comparison of AI peer-reviewer systems on a real, non-ML scientific paper corpus". As the rest of this article shows, the difference between the two corpora explains more here than anything else.

### 1.2. Four error types, 357 injections, three severity levels

The planted errors come in four types — citations, numerics, mathematics and general issues — for 357 across both corpora. The uneven split is deliberate. Numerics and mathematics carry 119 each, the most of any type, and general issues the fewest at 29.

| Error type | Astrophysics | ML | Total | What it touches |
| --- | --- | --- | --- | --- |
| Citations | 45 | 45 | 90 | Makes a cited paper say something it never said |
| Numerics | 59 | 60 | 119 | Alters numbers in the tables and the body text |
| Mathematics | 59 | 60 | 119 | Drops a term from an equation or swaps an operator |
| General issues | 14 | 15 | 29 | Puts the abstract at odds with the body, or the method with the results |
| Total | 177 | 180 | 357 |  |

****************

Injection counts by error type (paper §2.2). Each paper got three injected copies, and each copy carries about four errors.

A severity ladder sits on top of that. Every error comes at one of three levels: subtle (S1), clear (S2), blatant (S3). For a citation error, subtle shifts a quoted value by one or two error bars, clear deletes a qualifying clause, and blatant reverses the direction of the conclusion outright. For a numerics error, the three rungs are a second-decimal drift, a swapped digit, and percentages that add to more than 100. The ladder is what lets you ask back what "catches 80%" actually means. The strongest systems caught 57–73% even at the subtlest level, while the weakest configurations failed to clear 5% even at the most blatant.

> [!callout]
> One caveat rides along. Severity labels were calibrated **within** each error type, not across types. A blatant mathematics error and a blatant citation error are not claimed to be equally hard. No sentence comparing severity across types can be written from this data.

### 1.3. Fifteen clean copies ride along

The most valuable part of this design is not the planted errors but the papers left alone. The researchers ran 15 clean copies, with nothing injected, through the same systems. Every flag raised there is a candidate for a wrong call. The share of flags on clean copies judged to be clearly wrong is what this article calls the **false-positive rate**.

A ruler that measures detection alone and one that measures detection alongside false positives see different things. With the first you cannot tell a checker that catches a lot from a checker that flags a lot wrongly. Surveying what prior benchmarks do and do not cover, the authors write: "No prior work grades severity levels or uses a cross-family adjudication panel; only one covers papers beyond ML/NLP; only one provides false-positive control; and only one integrates mechanical verifiers. This work is the first to combine all five." Read the other way round, that also says only one prior study had false-positive control at all.

### 1.4. Why the measurement is needed now

If AI review were still confined to the lab, this measurement could wait. It is already out. The AAAI 2026 pilot covered the whole main track, **22,977** papers, and finished in under a day. The team reporting that pilot writes that in surveys of authors and program committee members, participants not only found the AI reviews useful but preferred them to human reviews on axes such as "technical accuracy and research suggestions". That is a survey result, not a measurement of accuracy. But the very axis on which people felt the reviews were technically accurate is the one this benchmark puts a number on, and the number says 50 points of spread.

The background pressure points the same way. arXiv took in 40,363 submissions in September 2026 alone, a monthly record, and from 1 October capped each author at two submissions per month. The reviewing side is no different: as this blog reported earlier, [21% of the 76,139 reviews submitted to ICLR 2026](/report/iclr-2026-ai-peer-review-crisis/en/) were classified as entirely AI-written. That story is about AI occupying a seat meant for a human; this one is about what the AI in that seat actually catches. Two problems with the subject and object swapped, standing side by side in the same year.

### 1.5. The method has an ancestry

**Fact.** The paper names its own lineage. "Our 'dose-response' design extends perturbation-based behavioural evaluation with graded severity levels", it says, citing the CheckList family of behavioral tests for NLP models as an ancestor — perturb the input a little at a time and watch how the model's behavior shifts.

**Our reading.** There is an older method with exactly this shape, from software engineering: mutation testing, proposed in 1978. Plant small faults in a working program on purpose, count how many of them the existing test suite catches, and score the suite by that number. The share of faults killed is the grade the tests receive. For nearly half a century it has been used to test not the program but **the apparatus that tests the program**, and it has now come back in the same shape to test AI reviewers. The data world uses the same idea: this blog covered [validation rules exercised against deliberately corrupted batches](/blog/prismadv-task-aware-data-unit-tests/en/). The name mutation testing, though, is our analogy rather than the paper's word.

## One prompt, one in ten against six in ten

Same single sentence, same papers — and one system flagged one error in ten while another flagged six. The prompt handed to the three frontier models was a 27-word sentence, written the way you would ask a colleague: read this paper and note any errors you find. Under that condition, total detection on the astrophysics corpus was 60.5% for GPT-5.5, 36.7% for Claude Opus 4.7 and 11.9% for Gemini 3.1 Pro.

The ML corpus reproduces almost the same ordering and the same gaps: 63.9%, 43.9%, 11.1%. The paper puts the gap in a sentence of its own — "three frontier LLMs differ by up to 48.6 pp in total detection on astrophysics … and by 52.8 pp on ML" — and the abstract compresses that to "about 50 percentage points". What looked like a choice of review tool was in fact a choice between catching one error in ten and catching six.

| Model (free-form prompt) | Astrophysics total detection | ML total detection |
| --- | --- | --- |
| GPT-5.5 | 60.5% | 63.9% |
| Claude Opus 4.7 | 36.7% | 43.9% |
| Gemini 3.1 Pro | 11.9% | 11.1% |
| Highest − lowest | 48.6 points | 52.8 points |

************

Only the three single-LLM rows with the free-form prompt, taken from Table 2 of the paper. The denominator is every error injected into that corpus (177 for astrophysics, 180 for ML). The two figures on the bottom row are stated in the paper's own text.

Where the gap opened is also a single line in the paper: "Mathematics and numerics drive this discrepancy." What pulled the models apart was mostly mathematics and numerics errors. Those two types return in section 4. They are the types with the highest detection rates, and also the types where wrong flags pile up.

This table says how many each system caught; it says nothing about which ones. Appendix L measures that separately. Line up the per-injection hit-or-miss records of six reviewer systems on the astrophysics corpus and the pairwise correlations scatter between 0.2 and 0.54. The authors' summary: reviewers with similar overall detection rates catch visibly different sets of errors.

The strangest pair is the one where both members have topped a column. The authors' multi-agent system and the CLI agent with the structured prompt sit at 0.27 overall, and at about 0.04 on citations and numerics. On precisely the two types where each is the best of all systems, the errors they catch barely overlap. Two systems built nothing alike, meanwhile, rise to 0.48 once they share a prompt — that is a single call and a tool-using agent loop running the same instructions.

A caveat is attached: 0.04 does not mean the two run in opposite directions. Two systems detecting 80% and 91% of the numerics errors already coincide on about 75% of them for that reason alone. A correlation near zero means they overlap no more often than those rates imply, not that they disagree. Zoom the grain out to whole papers and the picture changes again. Across the ten systems whose detection rates are not near the floor, the mean correlation on which papers are difficult is 0.39. Reviewers broadly agree on which manuscripts are hard, and go their own way on what to flag inside them.

### 2.1. Strip the condition and the sentence turns false

The 50 points carries a condition, and that condition drives the rest of this article: **when all three models were given the same one-sentence prompt**. As section 3 shows, change the prompt and the gap between those same three models halves. Lift out "models differ by 50 points" on its own and you have built a false sentence from a true number.

The systems themselves are also built very differently. Twelve reviewer systems ran across the two corpora: six single-LLM configurations differing in prompt, two CLI agent configurations, the authors' own multi-agent system, and three external reviewers taken off the shelf. One of those ran on astrophysics only, which is why the ML corpus has eleven rows. "All twelve systems were run on both corpora" is a false sentence.

### 2.2. What happened when humans sat the same exam

Planting errors and counting how many get found predates AI. Two classic experiments on human reviewers have exactly this shape. A 1998 study in JAMA planted eight errors in one manuscript and sent it to 420 reviewers; among the 221 who responded, the median number found was **two out of eight**. Not one reviewer found more than five, 16% found none at all, and 33% recommended acceptance with the errors still in place. A randomized controlled trial of 607 reviewers published in the Journal of the Royal Society of Medicine in 2008 found an average of 2.58 of nine major errors, and training did not raise it.

As rates, those come to 25% and 28.7%. The weakest configurations in this benchmark (11.1–11.9%) fall below that and the strongest (70.6–81.1%) above it. It is **not a direct comparison**, though. The error types differ, the fields differ, the denominators differ, and above all this benchmark did not measure a human baseline of its own. What these two numbers support is only that the same design, run on a different population, produced those figures.

The human numbers carry one more layer. In a randomized controlled trial of 238 reviewers at two orthopedic journals, reviewers who recommended acceptance found 17.3% of the planted errors while those who recommended rejection found 39.1%. Reviewers look less hard when they like the conclusion. Whether a machine reviewer carries a conclusion preference is a question this benchmark did not ask, but on the human side it is already measured that how you read matters as much as who reads.

### 2.3. What we measured before, and what gets measured here

This blog has covered AI peer review four times, and all four measured an indirect signal. The closest of them is worth separating from this one. [Asking whether an AI gives the same paper the same score twice](/blog/iclr-ai-review-score-reproducibility/en/) measured **reproducibility**: does it return the same answer? Even the most consistent model stopped at 56.5%. What gets measured here is **accuracy**: is the answer right? The two axes are independent. A system can be perfectly consistent and consistently wrong, or unsteady and still land on the right spot.

A third axis has been measured too — [AI reviewer scores moved across 4,080 papers when only the prose was rewritten](/report/ai-reviewer-rhetorical-sensitivity-2026-08/en/). Reproducibility, rhetorical sensitivity, accuracy. Of the three, accuracy is the one practitioners ask about first, and it was also the one with the fewest published numbers.

## A new prompt cut the spread between models in half

Hold the models fixed, change only what you tell them, and the 48.6 points from section 2 drops to 24.0. On the ML corpus 52.8 points becomes 30.0. Both numbers come straight from the paper's body. Roughly half. Choosing a model and writing the instructions sit on opposite pans of the same scale, and the second pan is heavier than it looks.

The replacement here is the structured prompt: a 5,946-word document setting out, item by item, what to check in what order and what rises to the level of a flag. Against the 27 words of the free-form prompt, that is roughly 220 times longer.

### 3.1. The models that climb most are the weak ones

A narrower gap does not mean both ends moved toward the middle. The bottom came up far more. Gemini 3.1 Pro gained 25.4 points on astrophysics and 40.0 on ML. GPT-5.5, given the identical prompt, gained **0.8 points** on astrophysics — effectively nothing. The authors give the reason in a phrase: the structured prompt narrows the cross-provider spread "by boosting the performance of the weakest models".

Putting the two corpora side by side is what makes that precise. On ML, Gemini 3.1 Pro gained 40.0 points, Claude Opus 4.7 gained 28.3 and GPT-5.5 gained 17.2. On astrophysics, in the same order: 25.4, 16.6 and 0.8. Both corpora agree that the gain runs in order of prior weakness, but only one cell deserves to be called flat, and it is GPT-5.5 on astrophysics. On ML even the strongest model picked up 17.2 points. The sentence that holds across both corpora is "the weaker the model, the more it gains" — not "a good model gains nothing from a better prompt".

**Our reading.** Rewriting a prompt is not a uniform push applied to every model. It is closer to making a model that already knows how do something it was not doing. Adding a good prompt to a good model does not double anything, because the model was already there. On a weak model the same prompt triples the number.

### 3.2. Model and tools fixed, prompt swapped

The cleanest isolation of the prompt effect is the CLI agent configuration. The model (Claude Opus 4.7), the sandbox, the list of available tools and the arXiv access were all held fixed, and only the prompt document was swapped. Detection rose 32.2 points on astrophysics and 38.9 on ML. The authors note that the same swap "triggers extensive tool use": once the instructions changed, the same model started using its tools in an entirely different way.

What changed is in the execution logs. With the structured prompt the agent ran a median of 9 turns and as many as 26, and wrote and executed 21 multi-line Python scripts over the astrophysics corpus. With the free-form prompt it read the PDF and answered, writing no scripts at all — though the authors add that it knew it could. One tool neither configuration ever reached for was the computer algebra system, even though the structured prompt encourages its use. Same model, same permissions, and changing only the instructions changes tool use qualitatively; but instructions that recommend a tool do not guarantee it gets used.

Four conditions are worth restating. Inside the CLI agent, with model, sandbox, tools and arXiv access held fixed, changing only the prompt. Carry "changing the prompt adds 32 points" out of that box as a general statement about all systems and it becomes false.

### 3.3. There are three prompts, not two

Read only this far and the lesson looks like "write longer prompts". An appendix experiment breaks that reading. To separate the two jobs a long prompt does — telling the model what to check, and telling it how to report — the researchers wrote a **471-word concise structured prompt** that does only the first. That makes three prompts, not two: 27 words, 471 words, 5,946 words.

The middle prompt looks like a bargain. In the CLI agent configuration it captures 24.3 of the 32.2 points the long prompt delivers. But false positives climb with it. On astrophysics the three single LLMs land at **17–27%** false positives with the concise prompt, against 1–9% with the free-form prompt and 3–6% with the structured one. The CLI agent sits at 16.7%, spiking alone between the free-form run (7.4%) and the structured run (3.5%). Most of the extra wrong flags are mathematics, the authors write.

What the middle prompt does also depends on the corpus. On ML the concise prompt alone pulled the spread between models from 52.8 points to 27.2 — narrower than the 30.0 the long prompt produced. On astrophysics 48.6 points became 48.0, which is to say nothing happened, and the only prompt that narrowed the spread there was the structured one. The same prompt erases most of the model difference on one corpus and leaves it untouched on the other. "Fix the prompt and the models converge" is half true at best without naming which corpus and which prompt.

Follow a single model through all three and the shape is sharp. Gemini 3.1 Pro on the astrophysics corpus: detection climbs steadily across the three prompts, while the false-positive rate spikes fourfold in the middle and settles back down.
