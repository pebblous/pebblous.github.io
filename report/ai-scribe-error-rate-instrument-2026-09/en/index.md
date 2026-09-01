---
title: One in three AI-drafted clinical notes carried a verified error
subtitle: Three commercial scribes ran the same 142 consultations, and on the same sample the error rate ran anywhere from 28% to 97% depending on the review standard applied
date: 2026-09-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# One in three AI-drafted clinical notes carried a verified error

_Three commercial scribes ran the same 142 consultations, and on the same sample the error rate ran anywhere from 28% to 97% depending on the review standard applied_

## Executive Summary

> [!callout]
> A UK team put the same 142 consultations through three commercial ambient AI scribes, collected the 565 notes that came out, and audited all of them. One note in three carried at least one verified failure. That headline is not the most interesting thing in the study. The interesting part comes next: the same team then turned the same adversarial scrutiny on its own instrument.

> On a stratified sample of the notes, holding the model, the evidence and every setting fixed, changing one line of the review instruction raised the share of candidates verified more than eightfold. Swapping the reviewing model to a different family was worth roughly an eighth of that. Stacking a second reviewer and a tiebreak on top was statistically indistinguishable from changing nothing at all. Which means that much of the disagreement among published scribe audits can be produced by instrument differences rather than by product differences.

> A companion paper from the same team adds the layer that makes this portable. LLM judges asked to review a document separate added content from clean content well and separate missing content at close to chance. An omission leaves no text for an evidence-seeking judge to point at, and the usual remedies, rewording and repeated voting among them, do not get past that. The one thing that partially recovered detection was changing the task: list the facts the source establishes, then check the document for each one. Defining the schema first is what sets the ceiling on what a reviewer can find.

<!-- stat-card -->
**31.3%** — Notes carrying at least one verified failure — 177 of the 565 audited. 95% interval 27.0 to 35.6

<!-- stat-card -->
**9.3 → 79.0%** — Candidates verified when only the review instruction changes — Same 1,295 candidates, same evidence, same model settings

<!-- stat-card -->
**0.50 to 0.63** — Paired discrimination of LLM judges on omissions — 0.5 is a coin flip. The same judges read 0.79 to 0.94 on commissions

<!-- stat-card -->
**36.9%** — Best omission detection recovered by enumerating facts — In the authors' words, an improvement rather than a solution

## Three products, one set of consultations

The consultation happened over the telephone. The clinician could not see the patient and could not touch them. The note the AI wrote nonetheless contained physical examination findings, written in the grammar of observed fact rather than of inference, sitting alongside the findings that were real. The paper opens with that scene, and it is the whole report in miniature. The problem is not that the note reads as sloppy. The problem is that the note asserted something it had not checked, and a sentence written that way cannot be told apart by reading it.

The design was blunt on purpose. One hundred and forty-two consultations went through three commercial products identically: recorded UK primary-care encounters, recorded US ambulatory encounters, and scenarios the team authored to carry specific traps. Five hundred and sixty-five notes came out. Twelve discovery passes over each note proposed 13,678 candidate errors; the 5,898 that cleared an importance filter went to an adversarial panel of two models from different families, each told to refute every candidate it defensibly could and to default to refuting when unsure. Six hundred and eighteen findings survived, 10.48% of what went in. The whole thing cost about $530 in model calls.

One hundred and seventy-seven of the 565 notes carried at least one finding that cleared that panel: 31.3%, with a 95% interval of 27.0 to 35.6. One note in three. A caveat belongs immediately next to it. Strip out the stratum of invented patient identities and the rate falls to 27.3%; strip out invented dates as well and it falls to 24.8%. Both classes exist because no product here was given a patient record. In an integrated deployment where the EHR prefills the name and the encounter date, much of that would not arise.

The 618 verified findings organise into 17 clusters, five of which account for a large share of the total. Reading the list is what makes clear that these are not random noise. Each cluster is a particular leap a model makes when it turns a conversation into a document.

| Failure cluster | Findings | A verified example |
| --- | --- | --- |
| Allergy status and medication list | 111 | Allergies were asked about and answered; the note carries the prescription and not the answer |
| Invented patient identity | 93 | With the name inaudible, the note called the patient "Gemzar", a chemotherapy brand name |
| Stated diagnosis dropped | 53 | Gastroenteritis was said aloud; the note carries the advice that follows and no impression |
| Relative timing turned into a date | 44 | "Started yesterday" in the transcript became a specific calendar date in the note |
| History written as examination | 42 | A telephone consultation that could contain no examination carries examination findings |

The five largest of the 17 clusters, which together cover 563 of the 618 verified findings. The cluster count itself moves between 17 and 21 with the random seed, at a mean adjusted Rand index of 0.727.

One failure had no place in any published scribe-error taxonomy: a treatment the clinician explicitly retracts, recorded as care delivered. The clinician proposes a thumb spica, takes it back in the next breath and braces the arm instead, and the note records the thumb spica as applied. It is neither invention, since the device was spoken, nor a negation error. It is the conversation's sequence being flattened into the document's state. This is not a rate, and the paper is careful to say so: all 11 findings come from a single consultation across two products, about two distinct errors once the passes are deduplicated, which is why the authors name it as a failure mode rather than a rate. That no taxonomy had a slot for it means nobody had counted it before.

Four boundaries govern how these numbers can be read, and the paper states all four itself.

- The three products are not named. The authors say they will not identify them, and guessing is not appropriate either.
- They cannot be ranked. One was fed text through an API and the other two replayed audio, and only that one produced two notes per consultation. Under the lenient standard the spread narrows from 4.5-fold to 1.2-fold and two products change places; set aside the identity and date strata and the worst product drops 12.0 points and the ordering inverts.
- There is no human-written control arm. The study therefore says nothing about whether scribes err more often than clinicians do.
- Every figure is a floor. Of the 13,678 candidates, 7,780 were dropped by the discovery model's own importance filter, and nobody opened that bin. What discovery missed was never measured.

The timing is its own footnote. On 1 September 2026, within days of these preprints appearing, OpenAI announced that ChatGPT Health now integrates with the Epic EHR, letting clinicians pull in visit notes, results and medication history to query and summarise. The product categories are different and worth keeping apart: the audit targets ambient scribes that generate documents, while this is retrieval and summarisation over records that already exist. OpenAI stated that access is read-only and that the AI does not write back to the record. The two events belong in the same week and no closer than that.

## The instrument made the number

This is where the study parts company with every other scribe audit. The usual audit publishes an error rate and stops. This one audited the error rate it had just published. The authors drew a stratified fifth of the census, 115 notes across 87 consultations carrying 1,295 candidates that had already been discovered, and re-ran only the review step. Same notes, same candidates, same transcript evidence assembled by the same code, same model settings, with a runtime check that fails the run if the two prompts differ anywhere beyond the review instruction. What changed was what the reviewer was told to count, and who was doing the reviewing.

Four review standards passed over the same pile of candidates. Put side by side they look like this. The upper bar in each pair is the share of the 1,295 candidates verified; the lower bar is the share of the 115 notes carrying at least one finding under that standard. The two bars have different denominators and are better not read across.

Changing one instruction (79.0%) moves the count far more than changing the model family (17.8%). Source: census paper, Table 3.

Three decompositions fall out of that picture. The review instruction is worth 69.7 percentage points, with an interval of 65.5 to 73.6. As a ratio that is a factor of eight and a half, and the authors attach their own warning to the ratio. It is large because the base is low at 9.3%, the 69.7 points is the more stable statement, and from a 9.3% base no lenient standard could exceed roughly elevenfold anyway. Quoting the multiple on its own misrepresents what the study found.

The reviewing model family is worth 8.4 points, interval 5.0 to 12.1. Moving the judge from one frontier family to another buys about an eighth of what one line of instruction buys. The third number is the surprising one. Adding the second family as a second opinion, plus a tiebreak model on top, contributed one percentage point: 9.3% to 10.3%, interval −1.2 to +3.7, p=0.13. Statistically indistinguishable from doing nothing. The received wisdom that stacking judges buys reliability did not hold here.

> [!callout]
> The direction of the movement settles what kind of difference this is. Under the lenient re-review, not one of the 134 candidates the panel had verified was taken back. Eight hundred and eighty-nine were added on top, making 1,023. Zero candidates moved from verified to refuted. The two standards are strictly nested. Had the movement gone both ways, the honest reading would be that the two standards catch different errors and complement each other. Because it is one-directional containment, the axis collapses to a single dimension of leniency: the same ruler, read at a different gradation.

Restated per note, the same fact reads like this. Under the panel, a note carries an average of 1.2 verified failures. Under the lenient standard, 8.9. Same 565 notes, same conversations, same model.

There is evidence that this is not a quirk of one paper. According to the comparison table the census assembles, two vendor-side studies from the same period point the same way. Reclassifying clinically reasonable inference as grounded description dropped the flag rate on the same SOAP notes from 35.2% to 9.1% (Vachhani 2026). And on the same notes a calibrated automated reviewer found errors in 24.4% where unaided clinician adjudication found them in 6.2% (Bergman 2026b). Both figures are quoted via the census's comparison table rather than checked against the original papers.

This blog has met the same structure twice before. One of them was [the study where rewriting only the prose of 4,080 papers moved their AI reviewer scores](/report/ai-reviewer-rhetorical-sensitivity-2026-08/en/). The shape is identical, the object held constant while the instrument moves the score. The difference is that this audit broke the instrument's contribution down knob by knob.

One limit belongs beside all of this. The decomposition happened inside the verification layer only. How much the discovery layer missed, and what it missed, is untouched by the experiment. Apportioning the instrument's contribution item by item is a first for this field, and the range it was apportioned over is still only part of the instrument.

## What survives verification is what can be checked

If the instrument makes the number, the next question is which errors the instrument lets through. Because the audit ran a separate discovery pass per error category, it can report how many candidates each category proposed and how many of them cleared the panel. Overall, 618 of 5,898 candidates were verified, 10.48%. Line the categories up against that average and a rule appears above and below it.

Across all categories, 618 of 5,898 candidates were verified, a mean of 10.48%. The top three can be settled by looking at the text. The bottom three all require a judgement about what the note should have contained. Source: census paper, Table 4.

The top three need nothing but a comparison of two documents. Whether the prescribed dose matches the dose in the conversation, whether a claim in the note appears anywhere in the transcript, whether an attribution names someone the transcript names: put the two side by side and the question closes. The bottom three ask for a different kind of judgement altogether. Each of them can only be answered once you have decided what belonged in the note. Omission sits at 6.1%, which is the highest of those bottom three rather than the lowest; below it are text filed under the wrong heading (5.2%) and plans written up as completed (4.5%).

Re-read the same candidates under the lenient standard and the ordering broadly holds, at a rank correlation of 0.72. What collapses is the spread. Under the panel the per-category rates ran elevenfold apart, from 2.8% to 30.8%; under the lenient standard they compress into a range of one and a half, 63.0% to 94.3%. A lenient reviewer verifies most of nearly everything, so the ordering persists while ceasing to discriminate. One category changes places outright: text filed under the wrong heading, which the panel verified at 4.3% on this sample and the lenient reviewer verified at 88.5%. The 5.2% in the chart above counts the same category across all 887 such candidates in the full census, so the two figures are better not read on top of each other. Where a fact should be filed is the norm that moves most with the standard applied.

### 3.1. What the reviewers said when asked why they refused

To find out why so many omission candidates were being refused, the authors sampled 40 refused omission candidates and asked why each was cut. The answers split five ways. Not material, 42.5%. Not required in a note of this kind, 22.5%. The panel wrongly cutting a real, reportable omission, 7.5%. The candidate itself spurious because the transcript never contained the fact, 2.5%. The remaining 25.0% is the one that runs into the rest of this report: the fact is stated somewhere else in the note. The interval on that last figure is 14.2 to 40.2.

That 25.0% is unstable. A 15-item pilot of the same audit had put it at 0%. The sample is small, and any claim later in this report that leans on it has to be calibrated to that. The direction, though, is not at odds with the literature. Clinical notes repeat themselves as a matter of course, and by the census's citation, duplication across hospital records runs at 54% to 78% (Wrenn 2010).

More than that, the 25.0% is a question of definition. If a fact is restated elsewhere, is it still an omission, or is it an omission the moment it is missing from where a reader would look? Published practice splits on exactly this. One widely used annotation scheme marks an omission against a required location in the note, so a fact filed in the wrong section counts as missing from the right one. A vendor-co-authored checklist narrows itself to one section at a time and drops the cross-section completeness question for that very reason. This census sits at the opposite pole and counts a restatement anywhere as capture. No published audit has measured what that choice adds to or subtracts from a final rate.

### 3.2. The gap with previous audits is mostly a denominator

Every previous audit of AI scribe errors has reported omission as the most common failure. This census disagrees. Omission is 23.1% of its 618 verified findings, and the largest tier is wrong output at 33.5%. That disagreement is not something to move past; it is the substance of this section, and it is why the figure below splits into two panels.

The spread in Panel A is mostly denominator. Match the denominator, as Panel B does, and the two values converge. Source: census paper, Table 5.

The values in Panel A were never built to be compared with one another. Each study verified a different total number of errors and counted different things as errors in the first place. The only comparison with a shared denominator is Panel B: the share of all notes carrying at least one omission, where this census reads 15.4% (interval 12.0 to 19.0) against Taylor 2026's 18%. Keeping the census's own two omission figures apart matters as much. The 23.1% is omission's share of the 618 verified findings; the 6.1% in the earlier chart is the survival rate of the omission hunt's own 1,284 candidates. They answer different questions.

Saying the published spread is all instrument would overstate it, and the paper supplies the counterexample itself. Biro's two products, read by the same reviewers under one standard, sit 29 points apart on their own, and that single pair accounts for most of the 32-point gap between the highest and lowest published omission share. Real differences between products exist. The claim here is not that products are alike; it is that without a published instrument there is no way to separate the product difference from the instrument difference.

Two categories this audit did not measure at all: the accuracy of drug names and coded terminology, and biased or stigmatising language. Not measured does not mean zero.

## Presence is detected, absence is not

Everything up to here is an audit reviewed by machines standing in for people, with clinicians adjudicating blinded samples of the result. The companion paper takes on the narrower question of what happens when the review itself is handed to a model. It built 500 pairs of clinical notes, each pair being an original and a version with exactly one fact removed or one fact added or altered: 298 omission pairs against 202 added-or-altered controls, with 495 pairs used for evaluation. Eight LLM judge designs were run over them, crossing what the judge is told to check (faithfulness only, or faithfulness and completeness), how it answers (a yes/no verdict or a 0-to-10 score), and how many times it is asked (once, or eight times combined by a winsorised mean).

All eight came out the same shape. In the figure below, the left dot on each row is paired discrimination on omissions and the right dot is paired discrimination on commissions. One thing has to be said about that measure before the picture means anything: it is not a detection rate. It is the tie-adjusted probability that the flawed note scores below its own verified-clean twin, where 0.5 is a coin flip. It needs the twin, and no production system has one. Read it as a ceiling measured with the answer key sitting open next to the note.

k is how many times the judge is asked, once or eight times combined by a winsorised mean. These are ceilings measured with the clean twin available, which deployment does not have. The left dots sit between 0.500 and 0.634; the right dots spread between 0.792 and 0.944. All eight designs ran three replicates for 14,568 judgements over 65,556 model calls. Source: companion paper, Table 4.

Nothing in the design space moves the left column. Widening what the judge checks does not, changing the answer format does not, and asking eight times and averaging does not. The best combination reaches 0.634 and that is the end of it, against a right column that responds to design between 0.79 and 0.94. The same shape reproduced on a second model family. A faithfulness judge that ships in production reads 0.518 on omissions against 0.886 on commissions; G-Eval, which decomposes a judgement into dimensions, reads 0.568 against 0.890. Among the reference judges only one inverts the shape, and it is the RAGAS-style recipe, which enumerates facts and checks them off. Why that one is the exception is what Section 5 is about. In the sense that one design decision manufactures a measurement, this belongs beside [the rating-scale floor that manufactured an interaction that was not in the data](/blog/llm-judge-scale-floor-manufactured-interaction/en/). What is different here is that a wall appeared which redesign does not move.

Deployment conditions are worse. Take the twin away and put a single note in front of the judge, and none of the eight produces usable detection at any threshold, with AUC between 0.503 and 0.575. The best scored design's actual operating point is 8.3% detection at 6.5% false alarms, barely clear of its own noise. The best yes/no design flags 40% to 42% of the notes that do contain an omission, and pays for it by flagging 32% of the clean ones too.

Where the remaining signal sits is the bridge into the next section. When the fact was removed completely, paired discrimination is 0.690, the highest of the three. When a fragment of it survives, 0.607. When the same fact is restated somewhere else in the note, gone from its own place but still present in the document, 0.526. A coin flip.

The reason is structural. Added content occupies a position in the document and can be pointed at. Missing content leaves nothing to cite. AbsenceBench (Fu 2025), which both papers cite as background, aims directly at this: given the original and the target side by side, models find inserted spans at F1 between 86.2% and 99.5% while dropping an average of 56.9 points on deleted ones. The identified cause is that transformer attention cannot easily attend to a gap, because an absence supplies no keys to attend to. This is not a property of clinical documents.

So is it a prompting problem? The companion paper worked through five families of remedy in turn: rewording the instruction, adjusting what the judge is scored on, changing the answer format, taking a majority over repeated samples, and letting an automatic prompt optimiser rewrite the prompt itself. All five moved the operating point. Every one of them could be made to flag more or flag less. None of them produced separation between the notes that carried an omission and the notes that did not.

> [!callout]
> One thing has to be kept straight here. The asymmetry is a property of the machine-judge setting, not of review in general. By the companion paper's citation, in a planted-error study of AI-drafted patient portal messages, reviewing physicians caught omissions at roughly the same rate as objective errors, about a quarter to a third of each (Biro 2025b). Not a high rate, but not a rate that collapses on one side. The authors are careful with it: they ran no human baseline of their own, and that study is a different task on a different corpus, so they mark the comparison as indicative only. What people miss and what machines miss are different shapes, and that difference becomes a hole the moment automated review is treated as a substitute for human review.

How far the field has come on each side is captured by one contrast. The commission arm has been checked against an external answer key: run the same judges over MEDEC, a public dataset labelled by clinicians, and paired discrimination is 0.827 with an AUC of 0.811, detecting 51.3% of errors at 10% false alarms. There is no comparable external key for omissions. For the error class the reviewer structurally cannot see, no standard yet exists against which to grade the reviewer.

## What a list of facts brings back

If prompting is not the lever, what is? The answer the companion paper arrived at was to rewrite the task. Every judgement so far had been an open question: is anything missing from this note? To answer it, the model has to decide for itself what should have been there and then compare that private list against the note. Turn it into a closed check instead. Enumerate from the transcript the facts that ought to be recorded, then ask separately, for each item, whether that fact is present. Decomposing the gain shows that supplying the list of facts to check accounts for about a third of the recovery, and forcing a closed per-item verdict accounts for the rest.

### 5.1. More than a fourfold improvement, and six in ten notes still pass

The restructuring was implemented two ways, arrived at independently. One is a multi-stage pipeline that enumerates the facts and applies a per-fact rule; the other is a single prompt evolved by an automatic optimiser. Put the best conventional judge design from the previous section beside them as a reference line and the picture is this.

| Method | Detection | False alarms | Cost per note | What a flag carries |
| --- | --- | --- | --- | --- |
| Enumerate-then-check pipeline | 24.6% | 2.7% | $0.45 | The named missing fact and a severity grade |
| Evolved single prompt | 36.9% | 6.2% | $0.046 | A score below 10 |
| For reference: best conventional judge | 8.3% | 6.5% | $0.036 | A score |

The pipeline's 24.6% detection happens to equal the 24.6% verification rate for fabricated content in Section 3, and the two are unrelated. The evolved prompt's 6.2% false-alarm rate is likewise a different quantity from the 6.2% clinician flag rate quoted from Bergman in Section 2. Source: companion paper, Section 7.

The highest figure here is 36.9%. Restricted to critical omissions it rises to 58.9%. Set against the 8.3% of the previous section that is more than a fourfold improvement, and six of every ten notes containing an omission still go through untouched. The authors' own framing is the accurate one: an improvement rather than a solution, and nothing here comes close to solving the class. Moving from roughly one note in four to roughly one in three is where this line of work has got to.

Nor can either method be called the better one. The evolved prompt detects more, and the gap survives collapsing the data to consultations as the unit: 36.9% against 24.6%, p=0.002. Over the 495 evaluation pairs it fires on 25 consultations where the per-fact rule does not, against 7 the other way, with both firing on 52 and neither on 28. What the paper records, though, is not a winner but two complementary strengths. The evolved prompt carries 2.3 times the false-alarm rate and needs a clean-note calibration re-established at every deployment. The pipeline is quiet and its flags are specific, and it costs ten times as much. Each method also has exactly one usable operating point. Widen the pipeline's fact scope to include contextual facts and detection climbs to 59.0%, at the price of flagging 35.7% of clean notes.

### 5.2. What the recovery costs

The first cost is that the other side gives way. The enumerating designs recorded the lowest commission discrimination in the study: 0.661 for the three-stage pipeline's coverage score, 0.744 for the checklist judge, 0.712 for the RAGAS-style recipe. Against the 0.939 of the best design in the previous section, that is a fall to the bottom of the range. The reason is mechanical. A score that counts whether everything that should be present is present does not react to something being added. Anyone deploying coverage-style review has to run a faithfulness judge alongside it, and that is the lesson from this report that ports furthest outside healthcare. The evolved prompt, for what it is worth, does not pay this price, holding commission discrimination at 0.978.

The second cost is that the blind spot changes character. It becomes the case from the previous section where discrimination fell to 0.526: the primary statement removed while the same fact survives, restated, elsewhere in the note. Fifty-seven of the 293 omission pairs in the evaluation set are of this kind. On those 57, every method the study measured fell to or below its own noise floor, and the per-fact rule caught 0 of the 57. The place where enumerating facts works least well is precisely here.

> [!callout]
> Look at where the surviving restatement sits and the problem turns into a different problem. In 55 of 61 restatement-trace pairs, 90.2% (interval 80.2 to 95.4), the survivor sits under a different heading from the instance that was removed. Fragment traces go the other way, with 56.3% staying under the same heading. The fact is in the note; it is not where the note claims to record it. That moves the question from omission detection to structural integrity, and misplaced text is exactly the defect the census counted at 7.4%. The paper's proposed attack follows from that: score coverage per section rather than per note, and facts that crossed a section boundary to survive become detectable as misplacement.

### 5.3. A threshold chosen on a benchmark does not travel to real documents

Every figure so far comes from constructed pairs, notes with one fact deliberately excised alongside their originals. Real vendor notes are not built that way. The authors took 261 real notes from the companion census and ran the same reviewers over them: the 87 carrying a panel-verified omission and 174 that the panel had cleared.

Applying the thresholds fixed on the benchmark produced this. Detection roughly doubles, to 51.7% for the pipeline and 85.1% for the evolved prompt. False alarms rise 8.3-fold and 7.1-fold, to 22.4% and 44.2%. At that same stage the conventional monolithic judge read 29.9% detection at 9.8% false alarms. The cause is that a real note is not missing one excised fact; it is slightly less complete everywhere.

Re-fit the threshold on the real notes and the picture changes again. Recalibrated, the evolved prompt settles at 32.2% detection with 5.2% false alarms. The authors nail down what that can and cannot be compared with: the monolithic judge was not re-thresholded, and no threshold of its own reaches that detection inside a 5% false-alarm band. Push its false alarms down to 1.1% and detection collapses to 9.2%; match its detection and false alarms go to 49.4%. The pipeline was never re-thresholded at all. So reading the pre-calibration 29.9% next to the post-calibration 32.2% leads to a conclusion opposite to the paper's own. They belong to different experiments.

For a practitioner this section reduces to one line. A threshold chosen on a benchmark does not travel to real documents. Unless you ask which corpus and which threshold produced a vendor's stated detection rate, you will find out how far the false-alarm rate moves only after you have deployed it.

One encouraging signal from the same run is worth recording. Of the 45 notes the pipeline flagged among the 87 carrying a verified omission, 34 named the very fact the census panel had verified. That is 75.6%, interval 61.3 to 85.8. The match was scored by lexical containment, so it is an indicative screen rather than an adjudicated precision, but it does show that per-item checking produces flags a human can act on. That is where it parts company with a judge that returns a single score.

## The answer key was wrong to begin with

Everything so far has been about what to measure an AI-written note against. But building that instrument requires an answer key. That was the first wall the companion paper hit while constructing its benchmark, and what it found there is what carries this report out of medicine.

### 6.1. The clinician-written reference notes disagreed with their own transcripts

Two public corpora function as standards in AI scribe research. Both contain reference notes written by clinicians, and those notes have served as ground truth. The authors audited each reference note sentence by sentence against its own transcript, instructing the auditor not to penalise valid paraphrase. All 53 usable PriMock57 notes and all 45 usable ACI-Bench notes carried at least one material discrepancy, at means of 10.7 and 7.1 discrepancies per note.

The character of the discrepancies connects to everything above. Of PriMock's 1,030 discrepancies at all grades, 574, or 56%, were facts present in the transcript and absent from the note. Next came outright errors, then hardened uncertainty, where a patient saying they think they have a contusion becomes a definite diagnosis in the note. Three hundred and forty-five of the 1,030 were graded critical. Grading a scribe against these references was importing 7 to 11 material errors per note into the answer key itself. The 100% carries a caveat the paper puts in its appendix: PriMock's reference notes are terse case summaries by design, which inflates the missing-fact counts specifically, and the instrument doing the auditing is the study's own extraction machinery. The figure to read is not the 100% but the density and the severity split.

The alternative the authors chose was to reverse the order. Do not start from the reference note; start from the transcript. Extract a fact sheet from the transcript blind to the note, audit that sheet with three model critics from different families, and use the result to repair the reference note. The extractor's own reliability was measured separately, against consultations the team had authored themselves: it recovered 646 of the 650 facts the authors had written down, 99.4% with an interval of 98.8 to 99.9.

The same section supplies the number showing that writing a definition down is what creates measurability. Asked to grade the severity of the discrepancies they found, two frontier models from different families agreed at a Cohen's kappa of 0.177, interval 0.04 to 0.31, barely above coincidence. Give the same models a written rubric and agreement rises to 0.662, interval 0.59 to 0.73. Putting on paper what counts as serious was the only mechanism that made the judgement reproducible.

Even the public corpora's reference notes needed auditing. All notes in both corpora (53 of 53, 45 of 45) disagreed with their own transcript on at least one material fact, and writing down what counts as severe took grading agreement from near-chance to substantial. Source: companion paper, Appendix A.4-A.5.

Redundancy bites this story twice. Of 1,791 facts recorded in the notes, 574, or 32.0%, appeared in more than one place: 51.6% of the critical items and 61.2% of the peripheral ones. That redundancy is what makes the answer key hard to build, and it is also what creates the restatement blind spot of the previous section. Of 126 attempts to remove every trace of a fact from a real note, only 71 survived a cross-family panel, 56.3%. The rest either did not remove the fact or left the note reading unnaturally.

### 6.2. The layer the regulation rests on has not yet been measured

On 29 July 2026 the UK Medicines and Healthcare products Regulatory Agency published guidance on ambient voice technology products, developed jointly with NHS England. The determination reads as follows. A product that transcribes, summarises, drafts correspondence or suggests clinical codes, with the clinician reviewing the output, is not regulated as a medical device under the current framework. A product that supports diagnosis or treatment, or issues prescriptions automatically without clinician review, is a medical device.

The guidance is explicit about the layer that determination rests on: clinicians retain responsibility for reviewing and verifying AI-generated transcripts and summaries before they are used in patient care. The census did not measure the signing and review step. Saying that fluent failures survive review is an inference from the shape of the failures rather than a measurement this study produced. So there is only one statement available here. The layer the regulation rests on has not yet been measured. This study does not support a claim that clinician review fails, and as the previous section showed, human reviewers do not appear to share the machine judge's asymmetry.

The guidance also addresses hallucination head-on. It describes hallucination as a well-known behaviour with potentially wide-ranging impact in this product category, states that risk must first be reduced by design, and puts warnings at the bottom of the hierarchy of risk-reduction measures. It also states that a generic disclaimer about the product not being for diagnosis cannot by itself establish that a product is not a medical device. Among the examples the guidance offers of non-device functionality is alerting a clinician to data that may have been missed, for the clinician to accept or reject. That example concerns missing-field checks on structured fields such as problem lists and medication lists, whereas what the companion paper measured is omission detection in free-text notes. A missing-data check sits inside the function group the regulator classified as lower risk, and how hard that check is in free text is what the previous section showed.

What the national assurance machinery is designed to collect points the same way. NHS England operates a supplier registry for ambient voice technology. By the registry rules quoted in legal commentary and trade press, it is a self-certification registry: NHS England does not endorse listed suppliers and performs only a preliminary completeness check against requirements and standards. Suppliers submit their own approach to evidence of real-world benefit and to performance monitoring. As of January 2026, 19 suppliers were listed as meeting the criteria.

> [!callout]
> This is where the argument of this report reappears inside a policy document. The registry asks each supplier for its own approach to measuring performance, not for a shared instrument. The MHRA sandbox workshop record the census cites noted that this product category has no benchmarking standard. Unless instruments are published and shared, the self-reported performance of 19 suppliers cannot be compared with one another, for exactly the reason that 9.3% and 79.0% came out of the same pile of notes. This is not a criticism of the registry, which states that it is not a commercial framework and leaves procurement judgement to each organisation. It is that there is not yet a common ruler to make that judgement with.

So what should a buyer ask? The paper sets out three questions, and all three transfer out of healthcare into any data quality contract without alteration.

- What instrument produced this number, and can we see the instrument?
- Of the 17 failure clusters this audit catalogued, which have you measured and which have you fixed?
- What does it produce when you run it on our consultations, or our data?

Why those three are needed has a worked example. By the census's citation, a published entity capture rate of 90.2% was produced by counting only major or critical omissions as defects, and that fact does not appear on the surface of the number (Oleson 2024). It is also a different quantity from the 90.2% restatement figure in the previous section, and has nothing to do with it. The same question can be put to this week's news. OpenAI stated that it collected over 4,300 physician responses across 27 clinical use cases and judged 99.1% of them safe. What instrument produced that number, and can we see it? The point is not that the answer is known. The point is that this is where the question goes. Neither paper has examined OpenAI's evaluation design.

Anyone commissioning an audit gets a lesson about size out of this as well. The 115-note sample used here reproduced the note-level rate of the full 565 to within 4 percentage points, so the point estimate held up well. The interval ran from 20.5% to 36.6%. At that size you cannot separate two suppliers whose error rates differ by 10 points. Decide what you need to tell apart before you size the audit.

### 6.3. Where Korea stands

On the regulatory side, Korea's Ministry of Food and Drug Safety issued a guideline on the approval and review of generative AI medical devices on 24 January 2025, claiming a world first, alongside a companion guideline on usability for standalone digital health software. An annex to the press release carries a table of generative AI medical product cases, and among the domestic entries is a product that writes patient records automatically from speech recognition, dated 2025 as planned. That table is a list of market examples, not a list of approvals, and the distinction is worth stating precisely.

Deployment has started too. Dong-A University Hospital in Busan became the first in the Busan, Ulsan and South Gyeongsang region to build and operate an AI-based next-generation medical record system (Busan Ilbo, 6 July 2026). It is a mobile system in which nurses record nursing procedures and complete forms by voice alone, supplied by Puzzle AI. The hospital says it plans to add AI features that generate ward-round and nursing record forms automatically. Voice recognition at Asan Medical Center and a deployment at Korea University Anam Hospital have also been reported.

In that article, the head nurse on the ward cited reduced omissions and errors in nursing records as a benefit of the deployment. Reduced omission is offered as the reason for adopting the system, and omission is precisely the error class an automated reviewer is structurally worst at seeing. This is not a criticism aimed at that product. Omissions a person makes writing by hand and omissions an automated reviewer catches are different problems, and the means of verifying the second is still weak.

What this research did not turn up is a public Korean audit of the error or omission rate in AI-written clinical records. It would be wrong to assert that none exists; the accurate statement is that none could be confirmed. An adjacent case has been reported: a domestic study in which 20 residents and specialists evaluated radiology teaching material generated by generative AI, concluding that roughly 1.0% of errors remained even in material that had passed automated verification, above the threshold set in advance, and that final expert review was necessary. That study looked at teaching material rather than clinical records, so the two cannot be filed together.

### 6.4. Who did this work

The authors of both papers are at Composo, a company that sells AI evaluation and review tooling. A company selling evaluation tools is telling you that existing evaluation practice is untrustworthy, so the conflict of interest is real. The papers disclose it themselves: none of the study's measurement path uses their commercial product, the instrument they recommend is released free, and following their advice requires none of their products.

The scope of the release backs that disclosure up. All 618 verified findings with transcript-side evidence, every prompt, every model version, the re-runnable pipeline and the benchmark are public. The one thing withheld is the raw product notes, and the reason is stated: terms of service differ between products, so releasing one product's notes would identify a product by the absence of the others, and all three were held back equally. This report reads that released material as its evidence while reading alongside it the fact that the conclusion comes from a party selling evaluation tools.

## Why this matters to Pebblous

Pebblous diagnoses data and issues quality certificates. That is why these two papers do not read as a story about someone else's industry. The question of whether a quality metric is a property of the object or a property of the ruler came up here directly, and for the first time it came up with a per-knob decomposition attached. Four things turn into questions on our side.

### 7.1. Publishing the instrument is what the diagnosis is worth

What stands out about this audit is not its result but the posture of its release. It puts out all 618 verified findings, the prompts, the model versions and a re-runnable pipeline, and says: measure your product with this instrument. That is the strongest position a company selling quality diagnosis can take. A firm selling only scores has to ask for trust in its scores; a firm that hands over the ruler lets everyone else check its work with that same ruler. The certificates we issue will face the same question. What ruler produced this score, and can the customer see it?

### 7.2. Decide first what the reviewer structurally cannot see

If one operating rule comes out of this report, it is this. What you have to settle before adopting automated review is not the reviewer's accuracy but the error classes the reviewer is structurally unable to see. Machines are good at deciding whether what is present is wrong. They are poor at deciding whether something that should be present is absent. Ported into a data pipeline, value errors and format violations are automated review's strong ground, while missing records, null fields and broken lineage are its weak ground. If the second set is currently assigned to automated review, the safe assumption is that it is not being reviewed at all.

The only route that narrowed that limit ports across as well: build the list of facts that ought to be recorded first, which is to say define the schema first. The quantitative case for it is the severity agreement figure, kappa 0.177 without a written rubric and 0.662 with one. If what counts as a defect is not written down, judgements about the same data diverge by judge, and that divergence is a property of the instrument rather than of the data. It is the same ordering as in [the piece measuring European health metadata against its profile](/report/nordic-health-metadata-audit-2026-09/en/), where the definition of the mandatory properties came first.

### 7.3. How to read a vendor's accuracy number

The three questions in Section 6 were written for clinical procurement, and they transfer into a data quality contract unchanged. What instrument produced this number. Of the known failure types, which have you measured and which have you fixed. What comes out when it runs on our data. Two more from this report are worth appending. Check which defects are counted in the denominator of any capture rate a vendor quotes. And work out in advance what a pilot of that size is able to tell apart: 115 notes cannot separate two suppliers 10 points apart, and that is what the arithmetic looks like in practice.

### 7.4. Where this piece sits in the series

This blog has twice before covered the phenomenon of a measuring instrument manufacturing the measurement. Once in [the rating scale whose floor manufactured an interaction LLM judgements did not contain](/blog/llm-judge-scale-floor-manufactured-interaction/en/), and once in [the 4,080 papers whose AI reviewer scores split after only the prose was rewritten](/report/ai-reviewer-rhetorical-sensitivity-2026-08/en/). This is the third, and the first of the three where the instrument's contribution is broken out knob by knob. Review instruction, 69.7 points. Judge model family, 8.4 points. Panel structure, one point. Which handle moves the number by how much has now been written down as a number.

Two neighbouring pieces interlock with this one. [The synthetic medical data that gave up a quarter of the original records](/report/synthetic-medical-data-reidentification/en/) took medical data quality from a different angle, and [the endoscopists who missed more polyps once the AI was taken away](/story/ai-deskilling-human-in-the-loop/en/) connects directly to Section 6 here. The regulation rests on the layer of clinician review, and how that layer changes as people work alongside AI is a separate measurement problem.

This piece connects to Pebblous's work not because the two papers prove our product is needed, but because the question they raise is the question we answer every day. Both papers are preprints that have not been peer reviewed, their authors have a disclosed conflict of interest, and this report cites only within the range of what the papers released. Please read the assessment of the research and our own positioning as separate things.

## References

The figures in this report come from two places. Values from papers 1 and 2 were transcribed against the arXiv full texts directly. Values from the earlier audits (Biro, Kernberg, Anderson, Taylor, Vachhani, Bergman, Wrenn, Oleson) are quoted via the comparison tables and reference lists of those two papers, and were not separately checked against the original studies. Policy documents and news reports were checked against the primary source or the original article.

### The backbone of this report (checked against the primary text)

- 1.Sebastian Fox, Luke Markham, Ryan Lail, Michael Karotsieris. "One note in three: a verified census of three deployed AI scribes, and the instrument that counted it." arXiv:2608.31017. [arXiv: 2608.31017](https://arxiv.org/abs/2608.31017) — a preprint that has not been peer reviewed. The authors are at Composo, which sells AI evaluation and review tooling, and the paper discloses that none of the study's measurement path uses their commercial product. All 618 verified findings, the prompts, the model versions and a re-runnable pipeline are released; only the raw product notes are withheld. The corpora are PriMock57 and ACI-Bench (both CC BY 4.0) plus authored scenarios.
- 2.Sebastian Fox et al. "LLM Judges Verify Presence, Not Absence: Omission Blindness in AI Clinical Notes and What Recovers It." arXiv:2608.31016. [arXiv: 2608.31016](https://arxiv.org/abs/2608.31016) — benchmark at [ComposoAI/OmissionBench](https://huggingface.co/datasets/ComposoAI/OmissionBench), code at [composo-ai/omission-bench](https://github.com/composo-ai/omission-bench), DOI 10.5281/zenodo.22160954.

### Policy and regulatory documents (checked against the primary source)

- 3.Medicines and Healthcare products Regulatory Agency. "Ambient voice technology-enabled products." GOV.UK, published 29 July 2026, developed jointly with NHS England. [Guidance text on gov.uk](https://www.gov.uk/government/publications/ambient-voice-technology-enabled-products/ambient-voice-technology-enabled-products) · [press notice](https://www.gov.uk/government/news/mhra-clarifies-regulatory-status-of-ambient-voice-technologies-used-in-the-nhs) (Open Government Licence v3.0). It is advisory rather than law-changing, and it applies to Great Britain.
- 4.NHS England. "Guidance on the use of AI-enabled ambient scribing products in health and care settings." PRN01734_i, version 3 (published 27 April 2025, last updated 29 July 2026) and the AVT Supplier Registry. [england.nhs.uk](https://www.england.nhs.uk/long-read/guidance-on-the-use-of-ai-enabled-ambient-scribing-products-in-health-and-care-settings/) — the registry rules quoted in this report could not be opened on the nhs.uk source page directly, so they were confirmed through the wording quoted in [Bird & Bird's legal commentary](https://biotalk.twobirds.com/post/102nfao/ambient-scribing-in-the-nhs-a-compliance-framework-suppliers-cannot-ignore) and [HTN's report of 19 January 2026](https://htn.co.uk/2026/01/19/nhs-england-lists-19-suppliers-meeting-criteria-for-ambient-voice-registry/).
- 5.Ministry of Food and Drug Safety (Korea). "Guideline on the approval and review of generative artificial intelligence medical devices", enacted and published 24 January 2025. [Press release (PDF, Korean)](https://www.mfds.go.kr/brd/m_99/down.do?brd_id=ntc0021&seq=48833&data_tp=A&file_seq=2) — the table of generative AI medical product cases cited in this report is an annex to that press release and is not a list of approvals. Some search summaries circulate a 2026 date for this document; 2025 is correct.

### News reporting

- 6.Ivan Mehta. "ChatGPT Health adds Epic integration for clinicians to import patient data." TechCrunch, 1 September 2026. [techcrunch.com](https://techcrunch.com/2026/09/01/chatgpt-health-adds-epic-integration-for-clinicians-to-import-patient-data/) — the source for the read-only access and no-write-back statements, and for OpenAI's own evaluation of 99.1% safe across 27 clinical use cases and over 4,300 physician responses.
- 7.Busan Ilbo. "Dong-A University Hospital builds the region's first AI-based next-generation medical record system", 6 July 2026. [busan.com](https://www.busan.com/view/busan/view.php?code=2026070113455865932) (Korean) — the supplier is Puzzle AI, and the head nurse quoted in this report is quoted from this article.
- 8.Rapportian (Korean). Report on an Asan Medical Center team's evaluation of generative AI radiology teaching material — a secondary source; the underlying paper could not be located. The study examined teaching material rather than clinical records.

### Prior work cited via the two papers (originals not checked)

The bibliographic details below are transcribed as they appear in the reference lists of papers 1 and 2. The figures attached to them in the body of this report are likewise quoted via those papers' comparison tables.

- 9.Joshua Biro, Jessica L Handley, Nathan K Cobb, Varsha Kottamasu, Jeffrey Collins, Seth Krevat, Raj M Ratwani. "Accuracy and safety of AI-enabled scribe technology: Instrument validation study." Journal of Medical Internet Research 27:e64993, 2025. doi:10.2196/64993 — the source for the 83% and 54% omission shares of the two products and the 29-point gap under one set of reviewers.
- 10.Joshua M Biro, Jessica L Handley, J Malcolm McCurry, Adam Visconti, Jeffrey Weinfeld, J Gregory Trafton, Raj M Ratwani. "Opportunities and risks of artificial intelligence in patient portal messaging in primary care." npj Digital Medicine 8:222, 2025. doi:10.1038/s41746-025-01586-2 — the human-reviewer comparator in Section 4.
- 11.Taylor N Anderson, Vishnu Mohan, David A Dorr, Raj M Ratwani, Joshua M Biro, Jeffrey A Gold. "Evaluating the quality and safety of ambient digital scribe platforms using simulated ambulatory encounters." Mayo Clinic Proceedings: Digital Health 3(4):100292, 2025. doi:10.1016/j.mcpdig.2025.100292
- 12.Annessa Kernberg, Jeffrey A Gold, Vishnu Mohan. "Using ChatGPT-4 to create structured medical notes from audio recordings of physician-patient encounters: Comparative study." Journal of Medical Internet Research 26:e54419, 2024.
- 13.Sandra L Taylor, Melissa Jost, Scott MacDonald, Yunyi Ren, Shelley Hilton, Sadie Davenport, Debbie Aizenberg, Bruce Hall, Courtney R Lyles, Jason Y Adams. "Quality of clinical notes created by ambient listening generative AI: Pragmatic prospective pilot study." JMIR Medical Informatics 14:e86474, 2026. doi:10.2196/86474 — the only comparison sharing a denominator (18% of notes).
- 14.Bhavik Vachhani, Kush Shrisvastava, Pranshu Nema, Sai Chiranthan. "Beyond literal summarization: Redefining hallucination for medical SOAP note evaluation", 2026. [arXiv: 2604.14829](https://arxiv.org/abs/2604.14829) — flagged by the census as a vendor-authored preprint.
- 15.Henry Isaac Bergman and 10 others. "Quality, consistency, and clinical safety of AI-generated versus clinician-written clinical notes: a multi-country paired simulation study." medRxiv preprint, 2026.
- 16.Jesse O Wrenn, Daniel M Stein, Suzanne Bakken, Peter D Stetson. "Quantifying clinical narrative redundancy in an electronic health record." Journal of the American Medical Informatics Association 17(1):49–53, 2010. doi:10.1197/jamia.M3390
- 17.Jon Oleson. "DeepScore: A comprehensive approach to measuring quality in AI-generated clinical documentation", 2024 — flagged by the census as vendor-authored, and the source of the 90.2% entity capture rate.
- 18.Harvey Yiyun Fu, Aryan Shrivastava, Jared Moore, Peter West, Chenhao Tan, Ari Holtzman. "AbsenceBench: Language models can't see what's missing." NeurIPS 2025 (spotlight). [arXiv: 2506.11440](https://arxiv.org/abs/2506.11440)
- 19.Asma Ben Abacha, Wen-wai Yim, Yujuan Fu, Zhaoyi Sun, Meliha Yetisgen, Fei Xia, Thomas Lin. "MEDEC: A benchmark for medical error detection and correction in clinical notes." Findings of ACL 2025, pp. 22539–22550 — the external answer key on the commission side.
- 20.Wen-wai Yim, Yujuan Fu, Asma Ben Abacha, Neal Snider, Thomas Lin, Meliha Yetisgen. "ACI-Bench: a novel ambient clinical intelligence dataset for benchmarking automatic visit note generation." Scientific Data 10(1):586, 2023. doi:10.1038/s41597-023-02487-3
