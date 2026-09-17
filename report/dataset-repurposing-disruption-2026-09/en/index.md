---
title: Papers that reuse other people
subtitle: An analysis of 12,286 machine learning papers — the further a dataset travelled from its earlier use, the higher the three-year disruption index, while citations showed no difference
date: 2026-09-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Papers that reuse other people

_An analysis of 12,286 machine learning papers — the further a dataset travelled from its earlier use, the higher the three-year disruption index, while citations showed no difference_

## Executive Summary

> [!callout]
> This article reads a single preprint that measured, across some 12,000 machine learning papers, what became of research that took a dataset someone else had collected and put it to work on a different subject. The results do not fall on one side. The further a paper carried data from its earlier use, the higher it scored on the measure of whether a field's citation flow splits. On citations received within three years of publication, no difference showed up at all. That is quantitative evidence that reuse is worth something at a moment when fresh collection keeps getting more expensive, and it is also a reminder that the question of when that value comes back has to be asked separately.

> The researchers turned the degree of repurposing into a continuous score. They took the title-embedding distance between a focal paper and the earlier papers that had used the same dataset, weighted it by how far the datasets overlapped, and compared papers published in the same year at the same tier. The higher the repurposing score, the higher the three-year disruption index, and that effect was more than twice the size of the dataset-combination measure the same authors had built in their own previous study, read off the same table. Repurposed data rarely travelled onward, however. In more than half the papers, later uses of the dataset returned to the old ground instead of the new direction. Only in the minority that did travel did disruption and citations rise together.

> On the reader's side that distribution turns into one practical question. If a single act of repurposing has a low chance of paying off, the payoff comes from conditions that let an organisation try many times. Those conditions are that the data can be found, that the purpose and limits of its collection remain legible, and that the licence does not block a second purpose. The paper's own closing paragraph names interventions that lower the barrier to dataset discovery, documentation, interoperability and cross-domain training in data use, and it offers them as hypotheses still to be tested. The sections below set out why those hypotheses are worth more in the present moment, and what qualifications attach to the effect sizes in this paper.

<!-- stat-card -->
**+0.10 SD** — Three-year disruption added by one standard deviation of repurposing — A regression over 12,286 papers. The coefficient is 0.1022, p is below 0.001, and the model explains 0.143

<!-- stat-card -->
**2.4×** — Size against the effect of unusual dataset combinations — In the same table that coefficient was 0.0432. Both are standardised, so a one-to-one comparison holds

<!-- stat-card -->
**55%** — Papers whose repurposing never travelled onward — The share with a diffusion score below zero. The data did get used again; that use stayed on the old ground

<!-- stat-card -->
**about 9%** — Rise in three-year citations when the data did travel — Per standard deviation of diffusion. The paper itself records that a mechanical component may be mixed into this figure

## How they counted what counts as reuse

Start with why the paper treats this as something worth counting. It leans on two frameworks. Recombinant novelty holds that innovation comes from tying existing elements together in ways that break with convention while staying intelligible. Transformative creativity holds that fundamentally new ideas arrive when the structure of a conceptual space itself changes. Within the first frame, combining datasets in unusual ways had already been measured, but moving data across subjects was an empty space. The analogy the authors reach for is a drug. Aspirin was used against pain and fever before it moved on to cardiovascular prevention, and as the candidate compounds within easy reach run out, that kind of move becomes a way of drawing more value without paying to make something new. On the data side, earlier work had mostly established that having data helps.

Fix the vocabulary first. What this article calls **repurposing** is the use of an existing dataset in research on a subject different from the one it had been serving. That is the paper's own term, and it is distinct from using the same data once more on the same task. Putting ImageNet back to work on image classification does not count here; pulling ImageNet into an entirely different question does. The problem is how to turn that distance into a number. Reading one paper at a time and judging by hand does not get anyone past ten thousand.

The method chosen by Yulin Yu (College of Information Science, University of Arizona), Yong-Yeol Ahn (School of Data Science, University of Virginia) and Daniel M. Romero (School of Information, University of Michigan) is to use distance in semantic space. For any paper, there are earlier papers that used its dataset at least a year before. Measure how far those earlier papers sit from the focal paper in subject matter, then average with a weight for how much the datasets overlap. The further away, the higher the repurposing score. The preprint went up on arXiv on 15 September 2026 and carries no journal of record yet.

### 1.1. How 12,286 papers were left standing

The raw material is the **16 June 2021 snapshot of Papers with Code**. The paper sets out why it chose that source. The snapshot records the datasets a paper actually used for analysis or model training, not the datasets it cited, and the authors attach an earlier observation as the ground for that choice: data citation is frequently omitted and often fails to reflect actual use. Bibliographic records and the citation network come from SciSciNet version 1 and an August 2024 OpenAlex snapshot. The sample narrowed in five steps. From 60,647 raw records, removing the 20,016 that could not be matched to OpenAlex leaves 40,631; of those, 35,801 were published before 2021 with subject tags and references intact. Clearing out the 19,850 with no conference or journal affiliation brings the count to 15,951, and removing the 3,665 papers that never had an opportunity for their dataset to be reused leaves **12,286 papers** for analysis. They cover 1,689 datasets, and the corpus runs through major venues including CVPR, ACL and NeurIPS.

That last step has to be carried over precisely, or the 55% further down will be misread. A paper counts as having an opportunity for reuse when one of the datasets it used **had already been used more than a year earlier and, at the same time, is shared by some paper more than a year later**. Both conditions apply together. So this sample **contains no paper whose dataset nobody ever used again.** The extreme case of zero diffusion was removed before anything was calculated. This condition is absent from the five limitations the paper numbers for itself, and it becomes necessary again in section 5.

### 1.2. Measuring by distance

The repurposing score multiplies two ingredients. One is semantic similarity. SPECTER2, an embedding model trained on scholarly documents, turns **paper titles** into vectors, and cosine similarity is taken between them. Titles, not full texts. The other ingredient is dataset overlap, measured as the Jaccard index of the two papers' dataset sets. For every earlier paper the similarity is averaged with overlap as the weight, and the repurposing score is one minus that average. A larger value means the data travelled further. The theoretical range runs from 0 to 2, but the observed range was **0.009 to 0.659**. The regressions take the standardised value.
