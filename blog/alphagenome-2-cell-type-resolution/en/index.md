---
title: AlphaGenome 2 Asks Which Cell Before It Reads the DNA
subtitle: Google DeepMind
date: 2026-11-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AlphaGenome 2 Asks Which Cell Before It Reads the DNA

_Google DeepMind_

## Executive Summary

> [!callout]
> Google DeepMind released AlphaGenome 2 on November 11, 2026, the second version of its model for predicting what a change in DNA does to gene activity. The first version read a DNA sequence and returned the results of thousands of experiments at once. The new one takes a second input beside the sequence, naming which tissue or cell type or cell state the question is about, and computes the effect for that one condition.

> On TenK10K, a single-cell map covering 28 immune cell types, it identified 30% of the variants that cause disease. The original AlphaGenome fine-tuned on single-cell data, along with other specialized tools, reached 16% on the same task. None of that gap came from adding parameters. It came from splitting the measurements used as ground truth from the tissue down to the cell. Both models are research tools, and neither has been validated for clinical or diagnostic use.

> The dates, figures, and examples in sections 1 through 4 come from Google DeepMind's English and Korean announcements, cross-checked against The Decoder's report. Tracing the performance gap back to the grain of the labels, in the second half of section 2 and throughout section 5, is this article's reading.

### Key numbers

The first two numbers say how much more the new model caught in immune-cell data. The other two say how much data stands behind that, and how little it costs to add more.

Source: [Google DeepMind, AlphaGenome 2 (2026-11-11)](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/).

<!-- stat-card -->
**30%** — Disease-causing variants identified — The fine-tuned earlier model and specialized tools reached 16% on the same data

<!-- stat-card -->
**43%** — Direction of the effect called right — In the same comparison the earlier tools stopped at 23%

<!-- stat-card -->
**107 million** — Cell profiles used in training — Bulk and single-cell data pooled from 68 human and mouse tissues

<!-- stat-card -->
**A few dozen** — Cells needed to add a new cell state — Upload that many and it becomes a condition without retraining

## One Genome, a Different Answer in Every Cell

Almost every cell in a human body carries the same DNA. A heart muscle cell and an immune cell in the gut behave nothing alike, because each one reads a different part of the same blueprint. Which genes get switched on and off differs by cell type, and the same cell answers one way while resting and another way once an infection has put it on alert.

So the question of whether a given variant is dangerous has no single answer. One changed letter of DNA can shake up gene activity in a gut macrophage and do nothing at all in another cell. Most disease-linked variants sit in the regulatory stretches that switch genes on and off rather than in the stretches that spell out proteins, so without knowing which cell a variant acts in, there is no telling what it causes.

The answer key that genome models have been graded against was never built for that question. Much of the measured data came from bulk experiments, where a whole lump of tissue is ground up and read as one.

## What a Tissue Average Erases

The first AlphaGenome, from 2025, took a single DNA sequence a million letters long and predicted the results of thousands of experiments across many tissues in one pass. Google DeepMind gathered those predictions into AlphaGenome Atlas, a platform holding a prediction for all 9 billion possible single-letter changes in the human genome. In breadth it already covers the whole genome.

Breadth had a price. Running everything at once spread the model's capacity thin and made it hard to catch subtle differences between closely related cell types. That diagnosis is DeepMind's own, written into the announcement of the new version about the architecture of the old one. It is the team that built it grading its own work. And capacity was not the whole problem. The answer key itself had already been flattened.

Grind up a whole tissue and the signals from the dozens of cell types mixed inside it collapse into one average. If gene activity triples in a rare population making up about 5% of the sample while the other 95% sits still, the overall average moves by about 10%. The diagram below works through that arithmetic.

▲ Pebblous original diagram. Bulk measurement and cell-type measurement, simplified to four types.

Seen from the model's side, this is a problem with the answer key before it is a problem with performance. If the value it has to hit during training is already an average, a bigger model only gets better at hitting averages. Answers that split by cell type were never on the test in the first place.

## The New Input Is One Slot for the Cell

What separates AlphaGenome 2 from the version before it is one extra input. Along with the DNA sequence it takes which cell type and which state as a condition, and a single call computes the effect on that one cell. A structure that poured out thousands of experimental results at once became one where whoever is asking names the target.

![Official Google DeepMind diagram comparing AlphaGenome 1, which predicts all conditions at once from one shared representation, with AlphaGenome 2, which tailors the sequence representation to an input condition such as a cell type](https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/original_images/EUdRzfXXT2oOcMoR/ag1_vs_ag2_expr_cond_gdm_light_no_outline.gif)
*▲ AlphaGenome 1 "predicts all conditions at once from one shared representation"; AlphaGenome 2 tailors the sequence representation to an input condition such as cell type | Source: [Google DeepMind, AlphaGenome 2 announcement](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)*

By DeepMind's own definition, what goes into that condition is a tissue, a cell type or a state, one of them at a time. The route through tissue stays open, and what is new is the route down to the cell. The condition also does not stop at the input layer. DeepMind writes that the model uses the target biological condition "as input at every stage of its architecture."

A condition like that needs training data to match it. Google DeepMind trained on bulk and single-cell data from human and mouse samples, including more than 107 million individual cell profiles across 68 tissues. The measurements that used to sit bundled under one tissue label were unpacked down to the cell first, and the architecture then changed to take them.

There are two ways to set the condition. Pick one from the reference catalog of cell types already inside the model, or upload single-cell data measured in your own lab. DeepMind says a snapshot of gene activity from just a few dozen cells can be compressed into a cell state representation and used to condition the model, with no retraining, on states it has never seen. Sarah Teichmann of the University of Cambridge, a co-founder of the Human Cell Atlas, points to exactly that: "What makes AlphaGenome 2 exciting is how it adapts directly to new single-cell data without retraining, predicting how DNA variants act in newly profiled cell states from even a small sample of cells."

It predicts four things: gene expression, histone modifications (chemical marks on the proteins that DNA winds around), chromatin accessibility (how far the DNA is unwound and available to be read), and DNA methylation. DeepMind says the model can also infer the remaining ones from data where only a single property was measured.

## The Hit Rate on Immune Cells Goes From 16% to 30%

A genome-wide association study tells you which stretch of the genome moves together with a disease, statistically. Which of the dozens or hundreds of variants sitting inside that stretch actually causes the illness, and which cell it does its work in, the study leaves open. Narrowing that range is the task the figures below measure. Peter Donnelly, CEO of the genomics analysis company Genomics Limited, says as much in a comment carried inside DeepMind's own announcement: association studies are central to drug discovery, he notes, "but it is difficult to move from an association signal to what a drug programme needs."

The figures come from TenK10K, a large single-cell map of 28 primary human immune cell types. There AlphaGenome 2 identified 30% of the variants that cause disease. The comparison ran against the original AlphaGenome fine-tuned on single-cell data and other specialized tools in the field, and those came in at 16%. For calling the direction of the effect, whether a variant raises or lowers gene activity, the figure was 43% against 23%. All of it is DeepMind's own evaluation, reported in its own announcement.

Reading 30% as an absolute grade would be a mistake. Turn it around and seven in every ten went unidentified by this model too. The two figures do not say the problem is solved. They say how far apart two approaches landed when run side by side on the same data and the same task. The comparison models had been fine-tuned on single-cell data as well, so that gap measures the distance between bolting finer data on afterwards and building the structure to ask and answer at that grain from the start.

More convincing than the numbers is the case where the answer was already known. In inflammatory bowel disease, a variant in a distant regulatory stretch is known to overactivate a gene called ETS2. The model reproduced that finding computationally, singling out the causal variant and showing that the boost lands on gut macrophages while other cell types and genes go largely untouched. A tissue average does not draw that line.

Using a cell's state as the condition showed up in the COVID-19 case. Given single-cell data from a vaccine study it had not seen, the model told vaccine-activated T cells apart from resting ones, and showed that a variant linked to severe COVID-19 disrupts gene activity more strongly once cells are in that activated state. The same cell in the same person answers differently depending on the state it is in. For traits that many genes feed into, such as height and type 2 diabetes, DeepMind says precomputed variant scores help narrow down which variants and which cell types are likely to be involved.

## Why Pebblous Is Watching This Release

This announcement will mostly be taken as progress in genomics. From where data work sits, something else is left over. The DNA sequence going in is the same as before. No new measuring technology was invented. What changed is the unit those measurements were recorded in, and the unit the model was asked to answer in. Changing that one slot nearly doubled the hit rate.

The same structure repeats well outside genomics. Store-level sales kept as a regional average, user behavior as a segment average, sensor readings as an hourly average: data like that is everywhere. Given storage costs and aggregation speed it was a reasonable call at the time, and the person who made it is usually not the person now building a model on it. When a model fails to learn some distinction, whether that is the model's ceiling or information the average already deleted is something you find only by walking back up the data.

So there are things to check before reaching for a bigger model.

- What unit is the value we treat as ground truth averaged over, and is there a record of when that unit was chosen and why?
- Among the distinctions that average erased, is the one we are now trying to predict? Gather the cases a model gets wrong and they usually cluster on the same distinction.
- If we relabeled at a finer grain, how small could the start be? AlphaGenome 2 adds a new state to its conditions from a few dozen cells, so look first for whether a path like that exists before relabeling everything.

The limits are worth writing down too. DeepMind states that AlphaGenome and AlphaGenome 2 are intended for research use only and have not been validated or approved for clinical or diagnostic purposes. Non-commercial researchers can reach the model through the AlphaGenome API, commercial research is in private preview, and the figures in the announcement are still a self-evaluation. And because cell-type prediction computes one cell per call, sweeping all 9 billion variants at once remains the job of the atlas the first version built. This article reads that as a split between a tool for scanning wide and a tool for looking deep, not as one replacing the other.

## References

### Official Announcements

- 1.Gayoso, A., Latysheva, N., Kohli, P., Avsec, Ž. (2026). "[AlphaGenome 2: Deciphering How Cells Read DNA to Better Understand Disease](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)." Google DeepMind Blog.
- 2.Gayoso, A., Latysheva, N., Kohli, P., Avsec, Ž. (2026). "[AlphaGenome 2: Deciphering DNA Inside Cells to Understand Disease](https://blog.google/intl/ko-kr/company-news/technology/alphagenome-2-kr/)" (Korean-language release). Google Blog (Korea).

### Academic Paper

- 3.Avsec, Ž., Latysheva, N., Cheng, J., Novati, G. et al. (2025). "[Advancing regulatory variant effect prediction with AlphaGenome](https://www.nature.com/articles/s41586-025-10014-0)." Nature. DOI: 10.1038/s41586-025-10014-0.

### Press Coverage

- 4.Truly, A. (2026-11-12). "[Google DeepMind Shifts Genomics AI from Bulk Tissue Predictions to Single Cell Type Resolution with AlphaGenome 2](https://the-decoder.com/google-deepmind-shifts-genomics-ai-from-bulk-tissue-predictions-to-single-cell-type-resolution-with-alphagenome-2/)." The Decoder.
- 5.MarkTechPost (2026-11-11). "[Google DeepMind Releases AlphaGenome 2 for Cell-Type-Specific Variant Effects](https://www.marktechpost.com/2026/11/11/google-deepmind-alphagenome-2-cell-type-variant-effects/)."
- 6.Park, J. (2026-11-12). "[Same DNA Variant, Different Cell, Different Answer — Google's 'AlphaGenome 2' Pinpoints Disease Causes](https://www.hankookilbo.com/news/article/A2026111209140000804)" (Korean-language report). Hankook Ilbo.
- 7.Yoo, S. (2026-11-12). "[Google DeepMind Unveils 'AlphaGenome 2' for Finding Disease Causes](https://www.digitaltoday.co.kr/news/articleView.html?idxno=714846)" (Korean-language report). Digital Today.
- 8.Lee, D. (2026-11-12). "[Analyzing a Million Bases of DNA and Cell State — Google Unveils a Gene Prediction Model](https://www.tokenpost.kr/news/ai/436710)" (Korean-language report). TokenPost.
- 9.WOWTALE (2026-11-13). "[DeepMind Unveils 'AlphaGenome 2,' Reading DNA Variant Effects by Cell Type — Variant Discovery Doubles](https://wowtale.net/2026/11/13/267984/)" (Korean-language report). WOWTALE.
