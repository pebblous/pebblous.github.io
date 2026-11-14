---
title: Data Poisoning Survives a Quality Filter That Throws Out Nine in Ten
subtitle: In a Chongqing University and Zhejiang University study, models fine-tuned on the data that passed the filter scored 3.30 to 4.01 for harmful answers on a five-point scale, up from 1.13 to 1.69.
date: 2026-10-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Data Poisoning Survives a Quality Filter That Throws Out Nine in Ten

_In a Chongqing University and Zhejiang University study, models fine-tuned on the data that passed the filter scored 3.30 to 4.01 for harmful answers on a five-point scale, up from 1.13 to 1.69._

## Executive Summary

> [!callout]
> This article reads a single paper that researchers at Chongqing University and Zhejiang University posted to arXiv on 1 October 2026. The title states the conclusion outright: "High-quality Data Do not Mean Safe!" The quality selectors a team runs when choosing a fine-tuning dataset score how accurate and how complete a piece of writing is. That score never asks whether the data touches the model's safety guardrails.

> The researchers aimed at that gap. They built 100 poisoned samples and mixed them into 1,900 harmless ones. When the lowest-scoring 90 percent of the data was thrown out, every bluntly harmful sample was gone, while nine in ten of the 100 stayed put. Models fine-tuned on what remained scored 3.30 to 4.01 for harmful answers on a five-point scale. The same models scored between 1.13 and 1.69 before anyone touched them.

> Sections 1 through 4 are facts confirmed in the paper's tables and body text. Section 5 is this article's own reading of those facts from the perspective of people who work with data, and it does not propose a defense on the paper's behalf.

### Key Figures

Four numbers are enough: how far the model moved once the filter had done its work, how much of the poisoned data was still sitting there at that point, how a tool built to judge safety rated those same samples, and how many samples it took to do all of it.

Source: Li, Chen et al., [High-quality Data Do not Mean Safe!](https://arxiv.org/abs/2610.01367) (arXiv:2610.01367), Tables 1 and 4.

<!-- stat-card -->
**4.01** — Harmful-answer score after selection — Out of five. The same model scored 1.28 before fine-tuning

<!-- stat-card -->
**91%** — Poisoned samples left after selection — Bluntly harmful samples leave nothing behind under the same conditions

<!-- stat-card -->
**93%** — Called safe by a content moderator — The same tool catches 87 of 100 bluntly harmful samples

<!-- stat-card -->
**100** — Poisoned samples used — Chosen from 500 candidates, then mixed into 1,900 harmless ones

## What a Quality Filter Actually Looks At

A team that scrapes public data to fine-tune a model rarely uses that data as it arrives. It runs a data selector over the pool and keeps only what scores well. DataMan, QuRater and DEITA, the tools used in this paper's experiments, do that job. What they look at is whether the writing is accurate, whether instruction and response fit together, how substantive the content is. There is no item that asks about safety.

Yet in practice, "we ran quality selection" is often heard as "we removed the dangerous data." That belief is not baseless. Bluntly harmful samples tend to read awkwardly and break context, so they score low and do in fact get filtered out. The Pure Bad samples the paper used as a baseline left not one survivor under the condition where 90 percent of the set is discarded. They also collapse fast. Throw out only 10 percent and 100 samples drop to 30; throw out 30 percent and six are left.

The problem is not that nothing gets caught. It is that one particular kind does not. Malicious samples that look perfectly ordinary share a quality-score distribution with ordinary harmless data. Where the distributions overlap, no threshold can separate them. Dropping those samples means throwing out good data alongside them, which defeats the point of running selection in the first place.

▲ Original Pebblous diagram (reinterpretation of Fig. 2a) — bluntly harmful samples sit far from the threshold and are filtered out entirely, while benign-looking malicious samples share a score distribution with ordinary benign data and cannot be separated by a threshold alone. Source: arXiv:2610.01367 (conceptual reinterpretation, not to scale).

The researchers pushed one step further and asked whether the top-scoring survivors are safe on their own terms. They threw out 90 percent, kept only the samples DataMan scored 4 or above, fine-tuned on that, and the model's harmful-answer score still rose. Setting the quality bar higher does not solve this.

> [!callout]
> A quality selector was built to judge writing, and it judges writing. Reading that tool as though it also owns safety is not a fault in the tool but a misplaced expectation on the part of whoever uses it.

## Better Prose Is All It Takes to Clear the Harshest Selection

The researchers built a sample-generation method that targets this gap deliberately, and named it Bi-QSTO. It works by watching two signals at once. One measures how closely the parameter shift a candidate sample induces in a model resembles the shift a harmful sample induces. The other is the quality score the data selector assigns that sample.

Pushing both signals up at the same time makes each eat into the other, so the work was split into two stages. The first ignores quality and drives the harmful direction as far as it will go, securing a strong candidate. The second penalizes the candidate only when its quality score falls below a threshold, and polishes the writing from there. GPT-4o-mini does the polishing, rewriting instruction, context and response over repeated passes. Out of 500 candidates built this way, 100 were taken as the final samples.

Two starting points were used. One begins with a bluntly harmful sample and lifts it by reworking the prose alone. The other begins with a harmless-looking Dolly sample that an existing selector had already ranked near the top, and pushes it in a harmful direction. Unless noted otherwise, every figure this article reports, the table below included, comes from the first of those, the harmful-seeded one.

The experiment starts by mixing those 100 into 1,900 harmless instruction samples drawn from the Dolly dataset. Selection then discards the lowest-scoring data at rates climbing from 0 to 90 percent, a model is fine-tuned on what remains, and its safety is measured. The measuring instrument is the 330 harmful prompts in the HEx-PHI benchmark; a judge model grades each response from 1 to 5, and the average is the harmful-answer score. A higher score means the model declined less and answered more.

The harshest condition, where only the top tenth by quality survives, produced the following. For comparison, the table also carries the case where no poisoned samples were mixed in and clean data went through the same selection and fine-tuning.

| Model | Before fine-tuning | Clean data | Poisoned data | Poisoned samples left |
| --- | --- | --- | --- | --- |
| Llama2-7B-Chat | 1.13 | 1.65 | 3.30 | 91% |
| Llama3-8B-Instruct | 1.28 | 1.73 | 4.01 | 91% |
| Qwen2-7B-Instruct | 1.69 | 1.69 | 3.43 | 92% |

Harmful-answer scores out of five, and poisoned-sample retention, after 90 percent of the pool was discarded. Source: arXiv:2610.01367, Table 1.

Models that went through the same process on clean data stayed close to where they started. That is not to say fine-tuning itself leaves safety untouched. In the column where no selection was applied at all, clean data alone lifts the score to between 2.20 and 2.74. The values in the table above belong to the condition where 90 percent had already been thrown out. Under identical selection and identical training, the only thing that differed was whether 100 samples were sitting in the data.

The retention paradox is the part worth dwelling on. The harder an attack works to evade selection, the less selection catches it. Here is how the baselines split apart under the same conditions.

▲ Bluntly harmful Pure Bad samples all fall away, while the benign-looking attacks Bi-Anchor and Self-Inf-N keep roughly one in three. Source: arXiv:2610.01367, Table 1.

Passing selection and moving a model do not, however, arrive together on their own. Of the two starting points separated out earlier, the one that begins with a harmless sample also kept 83 to 85 percent after 90 percent of the pool was discarded. Models trained on that data scored between 1.63 and 2.36 for harmful answers, which is not far from what a run with no poisoned data in it produced. A high retention rate on its own is not evidence that safety was eroded, and the two values have to be read together.

Whether any of this was a fluke confined to one model was checked as well. Samples built on Llama2-7B-Chat, moved across unchanged, produced 3.92 on Llama2-13B-Chat and 2.93 on Llama2-70B-Chat. Carried to models from a different family, they produced 4.05 on Llama3-8B-Instruct and 2.85 on Qwen2-7B-Instruct; set against the 4.01 and 3.43 that samples built to target those two models directly recorded, the first is nearly identical and only the second comes in lower. Swapping the selector from DataMan to QuRater or DEITA still left retention consistently above the baselines. And when five different judge models regraded the responses, the scores clustered between 3.17 and 3.58.

## A Sample Can Score High and Still Push the Model Toward Harm

Why does a high-quality sample shake the guardrails? The paper locates its answer in the layer where learning actually happens. With every training step, a model computes which direction to move its parameters and by how much. The researchers fixed the direction that preserves safety alignment as a reference line, then measured whether the movement each sample generates points the same way as that line or the opposite way.

A substantial share of the high-quality samples that passed selection pointed against the reference line. Any single movement is small, but repeated in the same direction it accumulates and wears the alignment down. Broken out by layer, the overlap with harmful samples is already there in the lower and middle layers, and it widens further up. Two theorems in the appendix show formally that this kind of accumulation raises the safety objective.

▲ Original Pebblous diagram (reinterpretation of Fig. 2c) — arrows show, in simplified form, the direction each sample pushes the model's parameters during training. The Bi-QSTO sample scores high on quality yet points to the same half as Pure Bad (negative cosine similarity). Source: arXiv:2610.01367 (conceptual reconstruction, not actual angles or coordinates).

This is where the two axes separate. A quality score is a value assigned by reading the sample as writing. The safety risk sits in which way that sample pushes the parameters. There is a loose correlation between them: samples that are crude on the page and explicit in content often score low and point badly at once. But a correlation existing and one standing in for the other are different statements.

What Bi-QSTO does is sever that correlation. It leaves the harmful direction of movement intact and polishes only the surface of the writing until the quality score rises. The paper also takes the method apart to see which piece does that work. Remove the first stage, the one that searches the harmful direction to exhaustion, and the score under 90 percent filtering falls from 3.30 to 2.64. Remove the second stage, which polishes quality, and 88 percent of the samples still score 4 or above. What changes is the tier above that: the share awarded the top score of 5 drops from 91 to 42 percent. So what that stage does is not to squeak samples past but to place them at the very top of the pile.

## The Content Moderator Is Fooled Too

Read this far and one response suggests itself. If the quality filter cannot see safety, why not bolt on a tool that can? The researchers ran that response as its own experiment. They fed the same 100 samples straight into LlamaGuard, a classifier that sorts text into safe and unsafe, and the table below is what came back.

| Sample type | Classified safe | Classified unsafe |
| --- | --- | --- |
| Pure Bad | 13 | 87 |
| Bi-Anchor | 100 | 0 |
| Self-Inf-N | 100 | 0 |
| Bi-QSTO | 93 | 7 |

Counts from classifying 100 samples with LlamaGuard. Source: arXiv:2610.01367, Table 4.

The meaning emerges only when this table is laid over the retention figures from section 2. Bluntly harmful Pure Bad samples are caught 87 times out of 100 by the moderator, and they fail quality selection outright. Either gate stops them. Bi-Anchor and Self-Inf-N, by contrast, pass the moderator completely but lose roughly two in three at quality selection.

Samples polished by Bi-QSTO are barely stopped at either gate. By quality score they sit at the top; by content they read as safe. That does not make a second tool useless. It means only that what the second tool examines is also the writing, so in front of samples that escape by polishing their surface it ends up standing exactly where the quality filter stands.

> [!callout]
> Two gates that both read writing amount to one gate. If what has to be stopped is not the surface of the text but the direction the training pushes in, then the place where measurement happens has to move there too.

## Why Pebblous Is Watching This Research

The premise Pebblous returns to when it talks about AI-Ready Data is that the record of which checks a dataset passed has to travel with the dataset. This paper adds a question to that premise. Writing down which checks were passed is not enough on its own; what those checks did not look at has to be written down beside it.

In a great many fine-tuning pipelines today, data selection is a step that happens once. Score, draw a threshold, send the survivors to training. That single gate is carrying volume control, quality assurance and safety verification at the same time. The design in which one score stands in for three jobs is set down nowhere, and so it is reviewed nowhere. That is the spot where "we picked only the good data" gets quietly translated into "we took the dangerous data out."

What a data team can take from this paper is simple. Stand a safety metric next to the quality metric and record the two separately. When the fact that a quality score was high and the fact that a safety check was passed are written in the same cell, there is no way to tell them apart. And there has to be a procedure that measures safety again on the trained model rather than on the data left after selection. Every number in this paper that shows safety eroding surfaced only after fine-tuning was done.

### 5.1. What This Research Does Not Say

The scope deserves to be stated plainly. Safety was measured against HEx-PHI alone, and the models were confined to the Llama and Qwen families between 7 and 70 billion parameters. Whether the same pattern appears in larger commercial models, or in models safety-trained by other methods, is not something this paper answers.

The conditions attached to the attack are not light either. For the method to work, an attacker needs to be able to compute parameter shifts on a model close to the target, and to run the defender's quality selector directly to read the scores back. Neither is hard in an environment built on open models and open selectors. Even so, it is not something just anyone can pull off on a whim.

The paper itself offers no defense. Its conclusion stops at the general point that data selection methods should weight the safety dimension more heavily, not only the training benefit. Showing an attack carries no obligation to design the countermeasure, and still that blank sits in front of practitioners exactly as it is.

What this research asks, in the end, is one question. What has our data selector been measuring all this time? If the value we called quality was in fact readability, then the place we believed held safety is still empty, and nobody has measured it yet.

Thank you for reading this far. The figures here were taken from the tables and body text of arXiv:2610.01367, and it is worth recording alongside them that this is a preprint posted on 1 October 2026 and has not been peer reviewed. The original is available on its [arXiv page](https://arxiv.org/abs/2610.01367). We would suggest checking how many items in your own team's data selection criteria look at safety, and whether those items are written in the same cell as the quality score.
