---
title: Fields Medalist Terence Tao Says Mathematics Is Choking on AI Proofs
subtitle: AI has made proofs fast to generate and verify, while explaining, refereeing, and writing them into textbooks still move at human speed
date: 2026-10-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Fields Medalist Terence Tao Says Mathematics Is Choking on AI Proofs

_AI has made proofs fast to generate and verify, while explaining, refereeing, and writing them into textbooks still move at human speed_

## Executive Summary

> [!callout]
> Fields Medalist Terence Tao says the crisis in mathematics comes from too many proofs, not too few. That is the thesis of the October 22 column in Nature, but the column did not invent it. Tao built the argument over four months in four places: a public lecture at the International Congress of Mathematicians in July, an essay posted to arXiv in August, and a Mathstodon thread and a Caltech lecture in early October. The Nature column is the compressed version. The August essay named the phenomenon "proof indigestion." On October 6, the day OpenAI released hundreds of mathematical results at once, Tao used the phrase "Math 2.0" in public for the first time. This article follows those four texts one at a time and attributes each idea to the text where it first appeared.

> Tao's picture is simple. Solving a problem is not a single arrow but a chain of five stages: generation, verification, exposition, publication, and canonicalization. AI has made the first two fast. The other three have not changed pace, so proofs pile up in the four gaps between stages. Journals, priority conventions, hiring and promotion criteria, and prizes were all designed on the assumption that proofs are scarce, and the diagnosis is that they should be expected to work badly under abundance. Of the 722 manuscripts OpenAI posted on October 6, the share whose proofs were machine-checked ranges from 24% to 42% depending on how you count. This blog counted them on October 13. Read against Tao's chain, that range is a measurement of indigestion.

> That much is what Tao wrote. This article's own interpretation sits in two places. The first is where Tao takes the argument outside pure mathematics: the four-cell diagram from the Caltech lecture, in which powerful AI applied where human understanding is weak produces "misaligned mathematics," and the Nature column's warning about credit approval and financial risk models. The US Federal Reserve rewrote its model risk guidance this April and placed generative AI outside its scope. The second is the final section, which restates that warning in the language of data quality. The diagnosis is dark, but Tao's remedy is bright. Tao does not propose banning AI. The proposal is to change what counts as a mathematical achievement.

<!-- stat-card -->
**2 of 5** — Stages of the proof chain that AI made fast — Generation and verification. Exposition, publication, and canonicalization have not sped up, so proofs pile up in the four gaps between them (Section 3)

<!-- stat-card -->
**24–42%** — Share of OpenAI's October 6 manuscripts with machine-checked proofs — 24% counted by manuscript, 42% as stated in the repository. Pebblous counted them directly on October 13 (Section 3)

<!-- stat-card -->
**22 million** — Statements the Equational Theories Project settled in 57 days — The collaborative project Tao cites as Math 2.0 experimental mathematics. Human and automated reasoning worked together (Section 5)

<!-- stat-card -->
**0.1%** — Papers that disclosed AI use — 76 of 75,000 papers, even though seven in ten journals have a disclosure policy. The floor under the attribution problem (Section 4)

## Four Months Behind the Nature Column

On October 22, Nature ran a column by Terence Tao in its World View section. The headline reads "Can maths survive AI? Fields medallist Terence Tao calls for a 'Maths 2.0' world," and the print version appears in volume 658, page 1103. The body of the column sits behind a paywall, and the full text was not accessible. The only sentence from the column quoted here verbatim is therefore the subheading the editors placed under the headline. Everything else from the column is reported indirectly, through search excerpts and summaries Tao published.

"As machines race ahead in solving problems, mathematicians must establish a new era that prizes human understanding over simply publishing more solutions."
                        Source: subheading of the Nature column, Nature 658, 1103, October 22, 2026

The column is often described as the place where Tao proposed Math 2.0 in Nature. That is half right. Read the primary texts in date order and the three core ideas of the column each appear earlier, in a different text. "From proof scarcity to proof abundance" and "proof indigestion" come from the essay "Mathematics in the age of AI," posted to arXiv on August 17, which is itself a paper-format version of a public lecture given at the International Congress of Mathematicians in July. The phrase "Math 2.0" never appears in that essay. Its first public appearance is the four-post thread Tao published on Mathstodon on October 6. The nine example activities that flesh out Math 2.0 come from the slides of a public lecture at Caltech three days later, and those slides in turn never use the word "indigestion." The Nature column compresses these four months for a general readership. The "Maths" in the headline is British spelling, chosen by Nature's editors.

This article refers to the four texts by the names in the table below: the August essay, the October 6 thread, the Caltech lecture, and the Nature column. On this topic, knowing which sentence came from which text is the whole of factual accuracy, so the body attributes each claim to its source. Writing "in Nature, Tao" before a point that exists only in the slides is itself an error.

| Date | Venue | What first appeared there |
| --- | --- | --- |
| 2026-07 | Public lecture, International Congress of Mathematicians (ICM 2026) | The lecture the August essay is based on |
| 08-17 | August essay "Mathematics in the age of AI," arXiv:2608.16753 | Proof scarcity to abundance · proof indigestion · the five-stage chain |
| 09-08 → 09-11 | OpenAI's Navier-Stokes announcement → declaration by 25 Fields Medalists | Background. See the Pebblous article of September 14 |
| 10-06 | OpenAI posts 722 math manuscripts (21:58 UTC) · October 6 thread (four Mathstodon posts) | First use of "Math 1.0 / Math 2.0" · the seed of the three strands of crisis |
| 10-09 | Caltech lecture "Math 2.0," AIM public lecture, 30 slides | The four-cell diagram · the cancer-cure thought experiment · nine Math 2.0 activities |
| 10-14 | First Proof third-batch results released | Background. See Section 3 |
| 10-16 / 10-23 | Interviews in The New York Times and The Observer | "War footing" · "toxic waste" |
| 10-22 | Nature column, doi:10.1038/d41586-026-03389-1 | The public compression · the warning extended to credit and financial models |
| 10-27 | First popular book, Six Math Essentials, published in the US | An aside, not covered further |
| 11-13 to 15 | Caltech Mathathon, redesigned after the September controversy | The "open exposition problems" experiment. See Section 5 |

********************************

The four bold rows are the primary texts cited throughout. The October 6 timestamp is the metadata of the repository's first commit, which is why the Korean-language Wikipedia records the release as October 7, early morning in Korea. This article uses October 6 throughout.

Korean coverage focused entirely on the Caltech lecture. AI Times reported a rebuttal to the cancer-cure thought experiment on October 12, Mobiinside summarized the lecture on October 16 with attribution to the blog and social posts, and GeekNews carried a link to the slide PDF. As of October 31, no Korean-language piece on the October 22 Nature column could be found. The English-speaking world looks similar. No direct response to the Nature column from mathematicians such as Gowers, Buzzard, or Ellenberg turned up in searches. The closest thing is a blog post by an anonymous postdoc, published the same day as the column, which says the author fears being scooped almost daily.

A brief aside: the week the column for specialists appeared, a first book for general readers appeared too. Six Math Essentials, from Quanta Books, 128 pages, came out in the US on October 27, with a UK edition from Pelican at 96 pages the same day. It is an introduction to six concepts, number, algebra, geometry, probability, analysis, and dynamics, and has nothing to do with the subject at hand. Still, a specialist column and a popular book arriving in the same week is an accidental footnote to how far Tao personally practices the activity the Nature column calls exposition.

## Why Mathematics Fell First

Tao's argument starts from one premise. Traditional mathematics, which Tao calls "Math 1.0," ran on the assumption that proofs are scarce. The second slide of the Caltech lecture puts it this way: finding a solution to an open problem and proving it correct was hard, rare, and demanded considerable expertise, so most of the institutions, traditions, reward systems, and stated goals of Math 1.0 were organized around that scarcity. The August essay makes the same point with a more concrete list, and that sentence is quoted in full in Section 3.

So why did mathematics fall first? The Caltech lecture names three properties of proofs. The same three turn out to be the key to the data quality discussion below.

### 2.1. Objective Verification, Digitizability, and High-Quality Data

The first is objective verifiability. Mathematicians disagree about which mathematics is interesting or productive, but there is broad agreement about what counts as a correct and complete proof of a given problem, and a proof written in a proof assistant language such as Lean can be checked by machine. The second is digitizability. A proof needs no physical substrate, takes no real-world data as input, and requires no experiment to confirm the result. In principle, pencil and paper plus a standard textbook for the definitions are enough to produce and verify one. The third is large, high-quality data. Solving a hard problem requires knowing the research literature of the field, and an enormous volume of that literature already exists in digital form.

"This combination of objective verifiability, digitizability, and large, high-quality data sets have made the task of solving mathematical problems particularly amenable to the machine learning techniques that power modern AI. Frontier AI labs have thus prioritized advances in mathematical problem-solving capability, ahead of other applications which lack one or more of the above three features."
                        Source: Caltech lecture slides, October 9, 2026

The third condition deserves attention. Models alone did not open the era of proof abundance. The canonical literature that mathematicians refined over centuries, the mathematics in the form it takes in textbooks and reference works, was there as training data. The August essay sharpens the point: the training data for these tools is, quite literally, the output of the canonicalization process. The reason mathematics fell first and the largest cost of the indigestion described below meet at the same spot.
