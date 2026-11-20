---
title: ERNIE 5.5 Goes From First to Last When Memorized Questions Count as Wrong
subtitle: A preprint put 20 benchmarks to four open base models, and ERNIE 5.5 wrote out 96% of the coding questions nobody asked it, reference answers included
date: 2026-11-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# ERNIE 5.5 Goes From First to Last When Memorized Questions Count as Wrong

_A preprint put 20 benchmarks to four open base models, and ERNIE 5.5 wrote out 96% of the coding questions nobody asked it, reference answers included_

## Executive Summary

> [!callout]
> The evidence that whole test items are sitting inside model weights came out of the models themselves. A 24-page preprint posted to arXiv five days ago ran 20 benchmarks across four open base models, then read what each model kept writing after it had finished its answer. Out came the next question on the exam, one nobody had asked for, with its options and its reference answer attached. The paper has not been peer reviewed, and the two audits it leans on for the post-training half of its story are other teams' measurements rather than its own.

> What that exposes is that contamination is not a property of a benchmark. On the same coding test, HumanEval, ERNIE 5.5 produced 96.3% of the items and DeepSeek's base model produced 9.1%. On several benchmarks none of the four produced a single item. So a table shaped like this one will not reduce to a verdict written beside a benchmark's name. Each model carries its own figure on each test.

> Recompute the score with the memorized share counted wrong and the ranking changes. The paper names that recomputed value the Anti-Hack score, and it asks the field to make two things routine: a report on how decontamination was done, and a score adjusted for what leaked. Picking a model turns into checking the provenance of training data. The figures and quotations below are carried over from the paper; the judgments in the last two sections come from Pebblous.

<!-- stat-card -->
**85.17 → 68.55** — ERNIE 5.5's average over 20 benchmarks — Recomputed with every leaked item counted wrong. One adjustment sends the model that led the four to the bottom of them

<!-- stat-card -->
**6.7 · 9.1 · 73.8 · 96.3%** — Leak rates on one HumanEval, four models — Tencent, DeepSeek, Xiaomi, Baidu in that order. These four cells show the extreme does not belong to a single model

<!-- stat-card -->
**100.00 → 3.66** — ERNIE 5.5's HumanEval score — A perfect cell leaves 3.66 once the leaked items count wrong. The value is a floor on ability, not ability itself

## What the Paper Ran Itself and What It Borrowed

The paper reports two escalations side by side, and places both inside the past month. One is that the traces have turned blatant at the post-training stage. The other is that the problem has sunk down into pre-trained base models. The two stories are stitched together in the same abstract, but their sources are of different grades. The first is cited from other teams' audits. Only the second is an experiment this group ran.

Start with what the document is. It is a preprint of 24 pages, submitted to arXiv on 16 November 2026 under the title **"Benchleaking Is Accelerating: Benchmark contamination has worsened sharply in the past month — from post-training down to pre-training base models."** Eight authors, affiliated with Xinxu AI and GAIR. The classification is cs.AI, and it **has not been peer reviewed.** Five days in public, in other words, and that fact belongs in front of every figure below.

### 1.1. The First Escalation Is Someone Else's Measurement

Here is the post-training half in the paper's own words: **"Kimi K3.1 states grading rules that exist only in Terminal-Bench's hidden tests as if they were its instructions, in 23.3% of its attempts; its predecessor Kimi K3 never does. When a task file is edited to contradict such a rule, K3.1 keeps applying the old rule."** The last sentence is what makes the observation hard to wave away. A model that had merely inferred a plausible rule would drop it once the file said otherwise.

That 23.3% is not a number this paper measured. It is cited from two other audits, and the bibliography entries for those two deserve a look of their own. One is a technical report from R40 Research by Schaeffer and Räuker, dated 3 November, whose entry carries the words **"Not peer reviewed"** in the citation itself. The other is a research post from Unlap by Lo and Lo, dated 20 October. Neither sits on arXiv or in a journal. So writing that this paper found 23% contamination at the post-training stage would put the measurement in the wrong hands.

### 1.2. What They Ran Themselves: Four Open Base Models

The experiment the authors ran with their own hands is on the pre-training side. They set 20 benchmarks before four base models released with open weights: Baidu's ERNIE-5.5-Flash-Base, DeepSeek's DeepSeek-V4-Flash-Base, Tencent's Hy3-preview-Base, and Xiaomi's MiMo-V2.5-Base. All four are checkpoints taken at the end of pre-training, before any post-training, and anyone can download them and use them as the starting point for a model of their own. That is the stated reason for the selection: **"Open base models are the foundation of much downstream research, so benchleaking now affects more than leaderboard rankings."**

The 20 benchmarks, named in full: TriviaQA, HellaSwag, ARC-Challenge, ARC-Easy, OpenBookQA, PIQA, WinoGrande, MMLU-Pro, MMLU, BBH, DROP, AGIEval, HumanEval, HumanEval+, MBPP, MBPP+, GSM8K, MATH-500, GPQA-Main, SuperGPQA. Commonsense, reading comprehension, mathematics, coding, and specialist knowledge are all mixed in, and these are the names that fill the results tables of open-model release notes.

### 1.3. Two Words the Paper Pulls Apart: Benchleaking and Benchmaxxing

The paper's contribution to vocabulary is that it separates two phenomena that look alike from the outside. Its own definition sets them apart: **"We use the term benchleaking for the case in which a benchmark's own test examples enter training data, so that a score reflects recall rather than capability. This differs from benchmaxxing, which optimizes toward a benchmark without seeing its test set."** One is a question of data provenance. The other is a question of training strategy, and the fix for each sits with a different team. The report we published in April on [how eight agent benchmarks were broken](/report/ai-agent-benchmark-trust/en/) was about the second kind.

What sort of model ERNIE 5.5 is, the one carrying the highest figure here, we set down on 8 November while covering [the terms of its license](/blog/baidu-ernie-5-5-license-korea-excluded/en/). The underlying phenomenon, public test items mixing into training data and inflating scores, we [wrote up in June](/blog/llm-benchmark-contamination/en/). Neither story is retold here. This article takes only the cell the new paper adds.

The title says **"in the past month,"** yet nothing inside the paper is measured over time. There is no control group of earlier base models run through the same method. Holding up that one-month window are four recently released models and two cited audits, and nothing else. So the claim that contamination worsened sharply within a month belongs to the paper's title rather than to this article, and the figures below are safer read as a snapshot of the present state than as evidence of acceleration.

## Let the Model Keep Going and It Writes the Next Question

The detection method sets the character of this paper. The authors did not measure statistical overlap and did not count n-gram duplicates. They got the models talking and declined to cut them off. Here is the method description verbatim: **"Several solved examples establish the task format, followed by a question for the model to answer. When generation continues beyond that answer, the model may produce additional questions and answers in the same format."** A few worked examples teach the shape of the task, one question is posed, and whatever the model writes past its own answer is the material under study.

The configuration is ordinary. Between three and eight worked examples depending on the task (three for coding, eight for GSM8K, usually five elsewhere), with greedy decoding. Only the HumanEval family was run at temperature 0.2, sampled four times per problem. Two settings carry the weight. Stop strings were switched off, and the output budget was set generously, from 1,024 up to 4,096 tokens. A normal evaluation truncates the moment the answer appears; here that stretch of text was deliberately left open.

The diagram draws the paper's method description together with the matching criteria from its appendix. Loose string overlap does not count. A hit is recorded only when the question, its options, and its answer come out together in one block.

The matching rule is tighter than it first looks. A hit requires that **"the generated text matches its complete question, all associated options or context, and its reference answer. These fields must occur together in the same generated item."** A handful of sentences that resemble each other does not make a hit.

### 2.1. Every Figure Here Comes From the Strictest Criterion

The appendix defines matching at three levels. L1 **"requires the entire question field"**. L2 **"additionally requires its associated options, passage, or public examples"**. L3 **"additionally requires the reference answer or implementation"**. Then one more sentence follows: **"L1 is the most permissive and L3 the most demanding. The main text uses L3 throughout."**

That sentence sets the weight of every number below it. The leak rates in the body and the adjusted scores alike come out of the most demanding column. These are not large figures produced by a loose ruler. They are what survives after counting only the cases where the reference answer or the implementation matched character for character. L1 and L2 values do appear in an appendix, but they sit off the axis the body runs on, so this article leaves them there.

### 2.2. Two Companies' Models Produce the Same Neighboring Item

One figure in the paper shows the scene plainly. Handed a single HumanEval problem, ERNIE-5.5-Flash-Base writes its answer and then keeps going down the exam in numerical order. What comes next is the more striking part. Xiaomi's MiMo-V2.5-Base answers HumanEval/66 and then reproduces HumanEval/67, the fruit_distribution problem about counting pieces of fruit, which is the very item ERNIE reproduced. Two models trained by two different companies on two different corpora arrive at the same place and pull out the same neighbor.

When we covered this subject in June, the available evidence was inferential. You could measure statistical overlap between a benchmark and a training corpus, or swap in mirror items written at the same difficulty and watch how far the score fell. Both count from outside the model. This one has a different grain. The model puts what sits inside its own weights onto the page. The distance between inference and confession is the distance between the two kinds of figure.

It also sits apart from PMO, the drug-molecule search benchmark we covered eleven days ago. [What leaked there](/blog/pmo-benchmark-task-name-reference-leakage/en/) was a hint carried in the task name written into the prompt, and deleting the name took much of the score with it. Here there is no prompt to delete. Sentences surface that were never in the input, which puts the thing to fix inside the weights.

The paper also groups earlier detection methods into three families: checking whether loss runs unusually low on test items, handing over the first half of a problem and asking the model to finish it, and watching accuracy fall on freshly written replicas. All three are useful signals and all three are indirect. The paper does not claim that continuation probing stands outside that lineage. What differs is the kind of evidence it returns.

> [!callout]
> One limit has to be nailed down before the tables start. This probe stands on one side only, and the paper says so in its appendix: **"Zero coverage means that no matching example was detected by our probe; it does not establish that the training data were contamination-free."** A model that memorized an item but never says it out loud goes uncaught. So the 0.0% cells in the table below cannot be read as clean.

## One Benchmark, Four Models, Four Different Leak Rates

The paper's central table is 80 cells, where 20 benchmarks meet four models. Each cell holds the percentage of that benchmark's items that surfaced in the model's continuation, which the paper calls coverage and this article calls the leak rate. Lift two cells out of it and you have a different story altogether, so the whole table is reproduced here. The columns, under their formal names, run DeepSeek-V4-Flash-Base, Hy3-preview-Base, MiMo-V2.5-Base, ERNIE-5.5-Flash-Base.

| Benchmark | DeepSeek V4 | Tencent Hy3 | Xiaomi MiMo | Baidu ERNIE 5.5 |
| --- | --- | --- | --- | --- |
| TriviaQA | 0.3 | <0.1 | 0.3 | <0.1 |
| HellaSwag | 0.0 | 0.0 | 0.0 | 0.0 |
| ARC-Challenge | 0.0 | 0.0 | 0.0 | 2.7 |
| ARC-Easy | 0.0 | 0.0 | 0.0 | <0.1 |
| OpenBookQA | 0.0 | 0.0 | 0.0 | 85.4 |
| PIQA | 0.0 | 0.0 | 0.0 | 0.0 |
| WinoGrande | 12.7 | 12.6 | 13.8 | 14.4 |
| MMLU-Pro | 0.0 | 0.0 | 0.0 | 0.4 |
| MMLU | <0.1 | <0.1 | 0.5 | 6.9 |
| BBH | 3.9 | 0.9 | 0.7 | 2.0 |
| DROP | 3.3 | 2.1 | 3.0 | 1.9 |
| AGIEval (EN) | 1.9 | 1.6 | 0.9 | 3.8 |
| HumanEval | 9.1 | 6.7 | 73.8 | 96.3 |
| HumanEval+ | 2.4 | 2.4 | 7.9 | 6.1 |
| MBPP | 0.0 | 0.0 | 0.4 | 9.2 |
| MBPP+ | 0.3 | 0.0 | 0.3 | 7.4 |
| GSM8K | 0.8 | 5.1 | 4.4 | 80.1 |
| MATH-500 | 0.0 | 0.0 | 0.0 | 0.0 |
| GPQA-Main | 0.0 | 0.0 | 0.0 | 34.6 |
| SuperGPQA | 0.0 | 0.0 | 0.0 | <0.1 |

Figures are percentages, counted at the strictest L3 criterion. Orange marks the cells that stand out within a column; gray marks cells at 0.0 or below 0.1.

There are three ways into this table. First, ERNIE 5.5's large cells. HumanEval 96.3%, OpenBookQA 85.4%, GSM8K 80.1%, GPQA-Main 34.6%. Coding, commonsense, grade-school arithmetic, and graduate-level science all caught at once. Second, that extreme is not a single outlier. Xiaomi's MiMo sits at 73.8% on the same HumanEval, which puts two of the four in a state of having memorized a coding benchmark in bulk. Third, on some benchmarks not one of the four turned out an item at all. HellaSwag, PIQA, and MATH-500 are those.

The third reading is the one that matters most. The same four models stand at 0.0 on some benchmarks and split more than fourteenfold on another, 6.7 against 96.3. To say the benchmark has been contaminated, the familiar phrasing, does not account for that. Had the benchmark itself been dirtied, all four should carry similar traces, and they do not. Contamination is not a label that attaches to a benchmark. It is a value scored one cell at a time, in the meeting of a given model with a given benchmark. The title we ran in June pinned the label to the benchmark, and this table moves it one square over.

### 3.1. WinoGrande's Shared Floor Belongs to the Detection Method

The only row where all four models stand at double digits is WinoGrande, with the four values packed between 12.6 and 14.4. On shape alone it looks as though the four memorized this benchmark in equal measure, but the paper files these cells under weak evidence. The appendix section itself is headed **"When a match is weaker evidence"**.

The reason sits in how the benchmark is built, and the appendix says so outright: **"A match shows that a model produced a test example, which is usually hard to explain without exposure to it. WinoGrande is an exception, because its examples are related by construction…"** Its items come in twin sentences that differ by one word, so a model that has seen one side can invent the other without ever having been exposed to it. Four values clustered low and close together is what that explanation predicts, the paper notes.

This row is therefore a floor of the detection method rather than a floor of contamination. It pairs with the limit set at the end of section 2, pointing the other way. A 0.0 cell does not mean innocence, and a small value shared across models does not mean contamination. In either direction, carrying a single number straight into a conclusion gets it wrong.

### 3.2. Benchmarks With the Same Name Have Editions

The hardest place in the table to explain is the gap between HumanEval and HumanEval+. ERNIE 5.5 is at 96.3% on the original and 6.1% on HumanEval+, the variant with an expanded test suite, a sixteenfold drop. MBPP and MBPP+ run the same direction at 9.2% and 7.4%, over a far shorter distance. **The paper does not explain the gap.** The appendix states that HumanEval+ and MBPP+ are variants with expanded test suites, and that is the end of it. There is no sentence about why the leak rates diverge.

The explanation that comes to mind first does not survive a check. The guess is that the original keeps problem and answer together in one file. Every one of the four benchmarks does. HumanEval holds the problem, the reference implementation, and the test code in a single file; OpenBookQA, GSM8K, and WinoGrande each keep question and answer in the same record. HumanEval+ ships its answers alongside too, in a format compatible with the original. Whether the answer travels with the question cannot separate 96.3 from 6.1.

One caution belongs here. The L3 criterion demands an exact match on the reference answer or implementation, and HumanEval+ is a variant whose records are shaped differently from the original's. **An item that was memorized can therefore fail the matching rule.** 6.1% may be saying "not caught by this rule" rather than "not memorized," and that caveat is this article's rather than the paper's. Carried into practice it leaves one sentence: the edition you measured decides the number, even where the name is the same.

## Mark Every Leaked Item Wrong and the Ranking Flips

A leak rate on its own will not tell you how far a score was inflated. That is what the Anti-Hack score is built for, and its definition runs to one sentence: **"the benchmark score recomputed with every leaked example marked wrong and the number of examples unchanged."** The denominator is the whole point. Remove the leaked items and average over what is left and the denominator shrinks, which hands back a kinder number. The paper refuses that route and keeps the leaked items in the denominator as wrong answers.

Below is the 20-benchmark average recomputed that way. Put the before and after bars side by side and the damage each of the four takes separates at a glance.

The values are the four cells of figure 1 in the paper. The model that stood highest at 85.17 before adjustment stands lowest at 68.55 after it. The other three lose 1.3, 1.5, and 5.0 points.

The paper reports the result in one phrase: **"ERNIE-5.5-Flash-Base from first to last among the four models."** That carries more than a drop of 16.6 points does. Anyone who picked this model off the unadjusted score sheet picked it for holding the highest value, and one line of training-data history turns the basis of that choice over.

### 4.1. The Average Dilutes What Collapses Benchmark by Benchmark

An average of −16.6 points is a mild-looking quantity on its own. Split it by benchmark and you can see what it pressed flat. For three benchmarks the paper publishes before-and-after values across all four models.

| Benchmark | DeepSeek V4 | Tencent Hy3 | Xiaomi MiMo | Baidu ERNIE 5.5 |
| --- | --- | --- | --- | --- |
| HumanEval | 76.37 → 67.84 | 88.72 → 82.62 | 98.78 → 25.76 | 100.00 → 3.66 |
| OpenBookQA | 95.80 → 95.80 | 94.80 → 94.80 | 88.40 → 88.40 | 98.60 → 14.20 |
| GSM8K | 84.15 → 83.62 | 85.29 → 80.97 | 71.72 → 68.84 | 91.21 → 17.21 |

Raw score on the left, Anti-Hack score on the right. For ERNIE 5.5 alone the paper also prints the remaining benchmarks: GPQA-Main 59.15 → 32.81, MMLU 86.94 → 80.57, WinoGrande 87.21 → 74.59. The other three models' cells on those three benchmarks are absent from the published table and are left blank here.

Read the three rows in order. In the first, ERNIE 5.5 solved HumanEval perfectly, and once the leaked items are counted wrong, 3.66 is what remains. With 96.3% of the items leaked, a ceiling somewhere near 3.7 is what the arithmetic allows. The average of −16.6 points is cells like this one blended with steadier cells until the surface comes out flat.

Second, Xiaomi's MiMo collapses in the same shape, 98.78 down to 25.76. The four did not all fall together, but this cell is proof that the phenomenon is not confined to one vendor. The third row is the quietest and the clearest. On OpenBookQA the scores of DeepSeek, Tencent, and Xiaomi hold at 95.80, 94.80, and 88.40 without a single decimal place moving, because the leak rate on that benchmark is 0.0 and there is nothing to take away. What section 3 said with a table, these three cells say again from the scoring side.

> [!callout]
> 3.66 cannot be read as ERNIE 5.5's coding ability. The Anti-Hack score sends **every** leaked item into the wrong column, and among those items are ones the model could have solved without having memorized them. 3.66 is a floor, not an estimate of ability. The raw 100.00 at the other end does not state ability either. The real capability lies somewhere between the two, and this method on its own cannot pick out the spot.

### 4.2. The Score the Vendor Published Is Not the Memorized One

One correction belongs here. Reading these figures and writing that Baidu's advertised coding score is a memorized one would be wrong. The coding score Baidu put on its own model card reads HumanEval+ 1-shot 82.3, listed against DeepSeek-V4-Flash-Base at 69.5, Hy3-preview-Base at 78.0, and MiMo-V2.5-Base at 74.4. And ERNIE 5.5's leak rate on HumanEval+ is 6.1%. **The metric the vendor picked is the one that leaked 6.1%, not the one that leaked 96.3%.**

The card lists two values under coding and both of them are variants. The second is MBPP+ 0-shot 81.5. In the MBPP family, original and variant leak at 9.2% and 7.4%, close enough that either choice changes little. In the HumanEval family the two split at 96.3% and 6.1%. The same editorial choice is harmless on one side and remakes the character of the score sheet on the other.

We set this refutation down ahead of anyone asking for it. At least one English summary already in circulation reads Baidu's 82.3 against 69.5 margin as largely accounted for by the contamination analysis. Lay that against the primary sources and the reading does not stand. It is an easy place to be led astray when the numbers arrive by way of a secondary summary.

With the refutation written down, the question moves to a different place. Which edition a vendor measures and reports is the vendor's call. A perfect score on the benchmark that leaked 96.3% never reaches the score sheet, and the 82.3 on the variant that leaked 6.1% does. Neither choice is a falsehood. What is at stake is not dishonesty but discretion, and that discretion is invisible to whoever reads the score sheet.

A different answer to the same problem turned up over the summer. In the [retirement of SWE-bench Verified](/blog/swe-bench-verified-retired/en/) we covered in August, the route chosen was to withdraw the test. Answers had demonstrably seeped in, no clean repair presented itself, and the benchmark came down. The Anti-Hack score runs the other way. The benchmark stays where it is, and a value with the memorized share deducted is published beside it. Instead of the supply side withdrawing a test, the demand side reads the score at a discount.

The [Parkinson's diagnosis AI](/blog/parkinsons-diagnosis-ai-subject-level-leakage/en/) we covered five days ago sits in a third place again. There the same patient's recordings had landed on both the training side and the test side, so resplitting by patient dropped voice accuracy from 0.892 to 0.780. That leak was repairable. This one is already held inside finished weights, with no line left to redraw. Which is why adjusting on the score side is the route that remains.

## What Belongs Next to the Score Sheet

What the paper asks for at the close is two things. From the abstract: **"We call for decontamination reports and contamination-adjusted scores to become standard practice."** The conclusion words it slightly differently, as **"We call for routine decontamination reporting and contamination-adjusted evaluation"**. There are two requests, and carrying only one of them across cuts the proposal in half.

The second of the two is one the paper did not leave as a request. The Anti-Hack score in section 4 is a contamination-adjusted score in working form. Count the leaked items, turn them into wrong answers, recompute with the denominator untouched. The procedure is published, so anyone else can hold the same ruler against the same benchmark. The first is another matter. A decontamination report has no template and no verification procedure.

### 5.1. Model Cards Have No Field for It Today

Before writing that the request falls into a void, it is better to count. We opened the cards of nine open-weight models and checked them along three axes. Does the card disclose where the training corpus came from? Does it write down a decontamination procedure? Does it publish a contamination-adjusted score alongside the raw one? The subjects are the four models this paper tested plus five comparison models, among them OLMo 3, which is known for releasing its corpus. Three specification documents for model cards were read with the same eye.

| Subject | Training corpus named | Decontamination procedure | Contamination-adjusted score |
| --- | --- | --- | --- |
| The paper's four modelsERNIE 5.5 · DeepSeek V4 · Hy3 · MiMo | ERNIE at category level only, none for the other three | 0 / 4 | 0 / 4 |
| Five comparison modelsOLMo 3 · Gemma 3 · Llama 4·3 · Qwen3 · Mistral | OLMo alone names the corpora | Described for OLMo, Llama, Gemma, Qwen | 0 / 5 |
| Three specification documentsHF card template · Mitchell et al. original format · EU AI Act training-data summary | Prose disclosure fields exist | No dedicated field | No dedicated field |

Checked on 21 November 2026 by opening the model cards and specification documents directly. Qwen3's decontamination description was confirmed in sibling models' technical reports, so it is not asserted on the strength of Qwen3's own documentation. Mistral states in official documentation that it does not disclose its training datasets.

The third column is this table's conclusion. Of the nine models, **not one** publishes a contamination-adjusted score. Even OLMo 3, which names its corpora and runs a dedicated decontamination tool, does not print the before and after values side by side. It ran that tool over both mid-training and the training splits, and its companion paper carries a control experiment that checks in reverse whether contamination survived. The value that lands on the score sheet is still the unadjusted one. The second item the paper asks for is a thing no publicly released model does yet.

The second column carries a caveat of its own. For the models filed under "described," that information usually sits in a companion technical report rather than in the model card. Llama set out an 8-gram decontamination method in detail in its technical report, and Gemma stated in an earlier generation's report that evaluation sets were filtered out of the pre-training mixture. Alibaba's sibling reports are the most specific: 13-gram for the math model and 10-gram for the code model as the overlap criterion, with the filtered benchmarks named outright as HumanEval, MBPP, GSM8K, and MATH. Which means HumanEval, where ERNIE 5.5 posted the highest leak rate in this paper, and GSM8K, where it posted 80.1%, already stand on that exclusion list by name. None of it is visible from the model card. You have to follow the citation into the paper.

The first column is worth one look too. Of the four models this paper tested, the only one that records its training data even at the level of categories is ERNIE 5.5, and DeepSeek's base model has an empty card. Yet the HumanEval leak rate is 96.3% for ERNIE 5.5 and 9.1% for DeepSeek. Four cells cannot establish a rule, but they are plainly not a picture in which whoever disclosed more leaked less. How much documentation exists and what state the data is in are two separate things to check.

The specifications are no different. Hugging Face's card template, the original model-card format from 2019, and the training-data summary template the EU AI Act requires all lack a dedicated field for contamination. When the original format was designed, the problem did not yet exist. With no field of its own, contamination has to be tucked into the evaluation section or the limitations section, and a 2024 analysis that swept more than 32,000 public cards reports that those two sections are precisely the least likely to be filled in. There is nowhere for it to sit, and the places that could serve are the emptiest to begin with.

### 5.2. The Declaration Already Exists; the Number to Check It Against Does Not

The paper's first request, the decontamination report, already exists in a one-line form. It exists at the very vendor carrying the highest figure here. Baidu's ERNIE 5.0 technical report, published in February 2026, puts this in its training-data section: **"decontamination safeguards keep benchmarks out of the training data"**. Immediately after comes a second sentence, **"extensive deduplication prevents memorization artifacts"**.

The attribution has to be kept straight. Those sentences appear in the **ERNIE 5.0 technical report**, and what was measured here is **ERNIE-5.5-Flash-Base**. The generations are different. Whether the same safeguards were in place during 5.5's training cannot be confirmed from any published document, so the sentence "they decontaminated and then lied about it" does not hold. What is established is something else. The same vendor declared decontamination in prose one generation ago, and there is no way today to check that declaration from the outside.

That contrast decides which of the paper's two requests carries the weight. A decontamination report is a declaration. Write that you did it and the document exists. A contamination-adjusted score is a number. Publish the list of leaked items with the before and after values and somebody else can line it up against the same benchmark. Writing "we did it" in prose and publishing a score with the leaked items counted wrong are different kinds of document, and the one standing empty right now is the second.

The sentence we set down in July, covering [the breach of a benchmark answer key](/blog/openai-huggingface-eval-breach/en/), was a norm: evaluation data has to be handled the way training data is handled. What this paper adds is the form that norm needs. One document stating how it was handled, and one cell showing the result as a number. In September we argued that a public score should be [remeasured on your own codebase](/report/real-swe-private-code-benchmark-2026-09/en/), and the cell added here sits one step before that. Ahead of remeasuring, you can ask on paper.

One last time, the limit of the method. The appendix quoted in section 2 settles it: nothing caught by the probe is not the same as clean training data, and this article calls none of the four models clean either. A cell reading 0.0 says only that the method did not catch anything. For the same reason, the worsening within a month that the paper's title announces is an assertion by its authors rather than a measured trend. What is carried here is one scene of the present state.

## Why Pebblous Is Watching

What Pebblous asks of data is not how much of it there is but where it has been. Where did it come from, and where has it already been used. This paper carries that question over into model evaluation. What decides whether a number on a score sheet is ability or recall is not the model's architecture but one thing alone, what went into the training corpus, and no amount of taking the model apart will show it. It is written down only in a data provenance document.

### 6.1. There Is Still No Place for That Document to Sit

As we announced three days ago, the Pebblous AI Test & Evaluation Center has been [designated a KOLAS-accredited testing laboratory](/blog/pebblous-ai-test-center-kolas/en/), with an accredited scope covering the quality characteristics of ISO/IEC 5259-2 and the measures of ISO/IEC 25024. Both are rulers for the quality of a **dataset**, and measuring a model is handled as non-accredited general testing. The decontamination report this paper asks for is a document that attaches to a model while its evidence is the history of the training data. In the present arrangement it is wedged between two fields and settles cleanly into neither.

Rather than call that gap empty on a guess, we checked three layers separately. On the standards side, the ISO/IEC 5259 family and 25024 carry no clause that names evaluation-set contamination. The data provenance documentation 5259 does require would at least give you grounds for retracing how something got in. On the regulatory side, the Korean act on AI- and data-based administration that took effect this August writes training-data quality, public disclosure of AI use by public institutions, and impact assessment into its clauses, but no sentence requiring that training data and evaluation sets stay disjoint was found. The impact-assessment clause itself does not take effect until February 2027.

Procurement practice is much the same. Reporting says that requests for proposals increasingly ask for a model card or a model validation report, and the items written into them run to accuracy, robustness, bias, and hallucination rate. Data exfiltration turns up on the list at times, but that one is about a company's own data escaping outward, which points the opposite way from test items coming inward into training data. Model card specifications are as section 5 found them. Benchleaking has a name in none of the three layers yet.

### 6.2. The Model's Output Testifies to Its Training Data

The table in section 3 is a rare direct look at how a data quality signal appears from inside a model. The usual practice measures the dataset on one side, measures model performance on the other, and joins the two with an explanation. Here the model's output testifies directly to the contents of its training data, and it does so by producing whole sentences that were never in the input. Data quality turns out not to be only an input-side item to manage. It is also a property detectable at the output.

This detection stands on one side only, though. A positive is strong evidence and a negative is no evidence at all. Anyone who has designed a quality inspection knows the asymmetry, and it is the kind of limit that adding more checks does not remove. Which is why a design that uses a detection result as a stamp of approval has to be ruled out from the start.

### 6.3. Three Questions You Can Ask on Paper Without Running the Model

An organization bringing an open-weight model in-house is looking at the score sheet on a model card. After this paper, three further questions can be put to that same sheet. First, which edition of the benchmark produced this score? HumanEval or HumanEval+ is a question sections 3 and 4 created. Second, is there a document that writes down the decontamination procedure? If the model card does not carry it, go on to check the companion technical report. Third, is a contamination-adjusted score published alongside? All three can be asked on paper without running the model, which makes them usable in evaluation and procurement as they stand.

Not one vendor can answer yes to the third, exactly as the count in section 5 showed. So the question will not sort vendors today. What grows as more people ask it is clarity about which field is empty. That is as far as Pebblous has taken this one.

**We separate fact from interpretation.** The figures and verbatim quotations in sections 1 through 4 were taken directly from arXiv:2611.21315. The three-axis tally of model cards in section 5 and the distribution formats of the benchmarks were confirmed by opening each card and repository. Baidu's decontamination declaration is a sentence from the ERNIE 5.0 technical report (arXiv:2602.04705). The caveat that HumanEval+'s 6.1% may be an artifact of the matching rule, the judgment that the weight falls on the adjusted-score side of the two requests, and the whole of section 6 are readings Pebblous supplies. What we could not confirm belongs on the record too. The project repository address printed in the paper did not open when we tried it, and no document stating whether decontamination safeguards were applied to the ERNIE 5.5 generation could be found. Coverage of this paper was seen in two samples rather than a census, so this article makes no claim to being first or different.

## References

Sources for the figures in the body, grouped by kind. Items 1 and 2 are the primary documents this article stands on, and the leak-rate table, the Anti-Hack scores, and every verbatim quotation come out of item 1. Items 3 and 4 are the grey literature the paper cites for the post-training half. Items 5 through 10 are the basis of the tallies in sections 3 and 5, and the last group is prior Pebblous coverage.

### Primary — Paper and Technical Report

- 1.Yiwei Qin, Muhang Xie, Xuefeng Li, Mohan Jiang, Dayuan Fu, Tiantian Mi, Qipeng Guo, Pengfei Liu, "Benchleaking Is Accelerating: Benchmark contamination has worsened sharply in the past month — from post-training down to pre-training base models" (Xinxu AI and GAIR, 24 pages, submitted 16 November 2026, not peer reviewed). [arXiv:2611.21315](https://arxiv.org/abs/2611.21315) — the 20-benchmark by four-model leak-rate table, the four Anti-Hack cells and their per-benchmark decomposition, the L1/L2/L3 matching criteria, the evaluation setup, and both appendix quotations all come from here.
- 2.ERNIE Team (Baidu), "ERNIE 5.0 Technical Report" (4 February 2026). [arXiv:2602.04705](https://arxiv.org/abs/2602.04705) — the source of the two verbatim decontamination sentences in 5.2. A different generation from ERNIE-5.5-Flash-Base, the checkpoint measured here.

### Grey Literature the Paper Cites

- 3.Schaeffer, Räuker, "Kimi k3.1 pro recalls and enforces hidden test rules" (R40 Research technical report, 3 November 2026). The bibliography entry carries the words "Not peer reviewed" — this is the lineage of the 23.3% in section 1.
- 4.Lo, Lo, "MaxxBench: benchmarking task adaptation and generalization in frontier LLMs" (Unlap research post, 20 October 2026).

### Model Cards, Specifications, Standards

- 5.Hugging Face model cards baidu/ERNIE-5.5-Flash-Base · deepseek-ai/DeepSeek-V4-Flash-Base · tencent/Hy3-preview-Base · XiaomiMiMo/MiMo-V2.5-Base (opened directly on 21 November 2026) — the HumanEval+ 1-shot 82.3 and its comparison figures in 4.2, the vendor attributions, and the first four rows of the three-axis tally in section 5 come from here.
- 6.Cards and companion technical reports for the five comparison models — AI2 OLMo 3 ([arXiv:2512.13961](https://arxiv.org/abs/2512.13961)), Meta Llama 3 ([arXiv:2407.21783](https://arxiv.org/abs/2407.21783)), Google Gemma ([arXiv:2403.08295](https://arxiv.org/abs/2403.08295)), Alibaba Qwen3 ([arXiv:2505.09388](https://arxiv.org/abs/2505.09388)), and Mistral's official support documentation. These are the basis of the second row in section 5. Alibaba's n-gram criteria and list of excluded benchmarks were confirmed in the sibling technical reports Qwen2.5-Math ([arXiv:2409.12122](https://arxiv.org/abs/2409.12122)) and Qwen2.5-Coder ([arXiv:2409.12186](https://arxiv.org/abs/2409.12186)).
- 7.Margaret Mitchell et al., "Model Cards for Model Reporting" ([arXiv:1810.03993](https://arxiv.org/abs/1810.03993)) and Hugging Face's official model card template — neither format carries a field dedicated to contamination. The section-by-section completion analysis across more than 32,000 public cards is taken from [arXiv:2402.05160](https://arxiv.org/abs/2402.05160).
- 8.EU AI Act Article 53(1)(d), the template for the general-purpose AI training-data summary (published 24 July 2025) — a narrative disclosure duty exists, but there is no field dedicated to evaluation-set contamination. Cross-checked by way of legal commentary.
- 9.ISO/IEC 5259-1 to -4:2024 and ISO/IEC 25024:2015 — the two data quality standard families checked in 6.1. Neither carries a clause that names evaluation-set contamination.
- 10.Benchmark source papers and distribution repositories — HumanEval ([arXiv:2107.03374](https://arxiv.org/abs/2107.03374)) and evalplus's HumanEval+, OpenBookQA (2018), GSM8K (2021), WinoGrande (2019). The check on bundled answers in 3.2 came out of these repositories.

### Prior Pebblous Coverage

- 11.[The Test Was Already in the Training Data](/blog/llm-benchmark-contamination/en/) (20 June 2026) — covered the era of estimating contamination through statistical overlap and mirror items. Set against this method in 2.2.
- 12.[OpenAI Retired Its Own Coding Benchmark, SWE-bench Verified](/blog/swe-bench-verified-retired/en/) (5 August 2026) — where 4.2 weighs withdrawing a test against adjusting a score.
- 13.[On the PMO Drug Molecule Test, Does the AI Discover or Look Up?](/blog/pmo-benchmark-task-name-reference-leakage/en/) (10 November 2026) — the contrast case in 2.2. There the hint sat in the prompt.
- 14.[Baidu's ERNIE 5.5, the Open Model Korea Is Not Licensed to Use](/blog/baidu-ernie-5-5-license-korea-excluded/en/) (8 November 2026) — that article covered this model's specifications and release terms.
- 15.[The OpenAI Model That Breached Hugging Face to Steal Its Own Benchmark Answer Key](/blog/openai-huggingface-eval-breach/en/) (27 July 2026) · ['Perfect Score Without Solving Anything' — How 8 AI Agent Benchmarks Were Broken](/report/ai-agent-benchmark-trust/en/) (12 April 2026) · [Would that score hold up on your own codebase?](/report/real-swe-private-code-benchmark-2026-09/en/) (15 September 2026) · [Pebblous Opens AI Test & Evaluation Center to Issue KOLAS-Accredited Data Quality Test Reports](/blog/pebblous-ai-test-center-kolas/en/) (18 November 2026) · [Parkinson's AI Diagnosis Scores Rise When the Test Already Knows the Patient](/blog/parkinsons-diagnosis-ai-subject-level-leakage/en/) (16 November 2026) — the last is where 4.2 set a repairable leak against this one.
