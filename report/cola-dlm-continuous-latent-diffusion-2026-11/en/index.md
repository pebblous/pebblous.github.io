---
title: Cola DLM Plans the Whole Answer Before It Writes a Word
subtitle: A ByteDance Seed team released the model in May; the transformer stays in place, and only the left-to-right order comes off
date: 2026-11-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Cola DLM Plans the Whole Answer Before It Writes a Word

_A ByteDance Seed team released the model in May; the transformer stays in place, and only the left-to-right order comes off_

## Executive Summary

> [!callout]
> Cola DLM does not emit text one token at a time from left to right. A Text VAE first lifts a sentence into a continuous latent space, a diffusion transformer (DiT) works out the meaning of the entire response inside that space, and only at the very end does a decoder turn the result back into words. Eleven researchers, most of them at ByteDance Seed, released the work on 7 May 2026, and it was accepted as a NeurIPS 2026 poster scheduled for 8 December. The phrase "diffusion language model" has come up several times this year already, but in the earlier systems the diffusion ran over tokens. Cola DLM relocated the space the diffusion runs in, not the family of model.

> So the reading in which this model retired the transformer does not hold. The DiT that composes the meaning is a transformer, and what changed is the generation order, left to right. The first author put the caveat in writing before anyone else did: no theory on hand says that working in a continuous space has to beat working in a discrete one. Nor is lifting sentences into a continuous space a new idea. It dates to 2022, and a separate paper with much the same design went up one day after this one.

> Change the space a sentence sits in and the way it gets scored changes with it. All three models were matched on non-embedding backbone size and ran on the same tokenizer, the same seed and the same compute budget, but accuracy is counted by strict string matching, so the MMLU column here cannot be read against the MMLU numbers on public leaderboards. The eight-benchmark comparison appears as a figure rather than a table, the printed absolute scores sit outside the publication in the open repository, and that repository states on its own page that its average runs higher than the final average reported in the publication. An appendix also names the premise the whole design rests on: that the data contain a usable low-dimensional semantic structure.

<!-- stat-card -->
**8.7 → 11.8** — Latent dimension raised from 16 to 128 — Average over a three-benchmark subset at 117 EFLOPs, all models randomly initialized

<!-- stat-card -->
**26.65%** — Eight-benchmark average of the released checkpoint — From the open repository, which states that the publication's final average is lower than this

<!-- stat-card -->
**1.8B** — The size all three models were matched on — Non-embedding backbone, not total parameters. Tokenizer, seed and compute budget were matched too

<!-- stat-card -->
**~2000 EFLOPs** — Training compute at the far end of the scaling curve — The released weights sit at this point, and the curve is still rising there

## Diffusion That Runs in a Latent Space, Not on Tokens

Generation in Cola DLM passes through three stages in order. In the first, a Text VAE maps a sentence into a continuous latent space. In the second, a diffusion transformer works out the meaning of the whole response inside that space. In the third, the decoder half of the same Text VAE turns the result back into words. For that middle stage, the authors describe the diffusion as transporting a latent prior rather than reconstructing token-level observations. A prior here is simply the distribution the model lays down before it sees what it has to produce.

### 1.1. Words Arrive Only in the Last Stage

Laying the three stages side by side shows what actually moved. In [our June report on DiffusionGemma, the AI that writes all at once](/report/diffusion-gemma-text-generation/en/), and in LLaDA, the baseline used there, the diffusion ran directly over token positions. That is discrete masked diffusion: positions are hidden and then recovered. Cola DLM splits that one stage in two, so that mapping into the latent space and working out the meaning inside it become separate jobs.

A Pebblous diagram drawn from the descriptions in the paper. The top row is Cola DLM and the bottom row is the earlier kind of diffusion language model, which runs over tokens. The decoder that prints words at the right-hand end is the reverse half of the same Text VAE that opens the row.

Training comes in two stages as well. The Text VAE is trained on its own first, which is how the latent space gets built, and the Text VAE and the DiT are then trained together. Movement inside that space is handled by flow matching, a method that fits the path from a starting distribution to a target distribution directly. Because the DiT is block-causal, each block is composed from the blocks before it, and inside a single block the tokens do not wait on one another's turn.

### 1.2. The Transformer Never Moved

Treating this design as one that dispensed with the transformer inverts the picture. The name of the prior model that circulates inside that space is a diffusion transformer, and the opponent it sets up is the generation order, not the architecture. Autoregressive generation is the method that emits one token at a time from left to right, and the introduction describes it as tightly bound to a fixed left-to-right order. That binding is what comes off.

The caveat came from the authors before it came from anyone else. A week after release, the first author wrote on a personal blog that **"we do not have a theoretical justification that continuity alone could surpass discreteness."** The same post carries another line: **"the motivation behind Cola DLM has never been diffusion — it has always been representation."** The motivation was representation, not diffusion. That is also why this article spends so long on the quality of the space that holds the representation.

## The Conditions Behind the Eight Benchmark Scores

Credit where it is due: the comparison is carefully built. An autoregressive model and LLaDA were trained in house as baselines, and all three were matched at a 1.8B non-embedding backbone. All three use the OLMo 2 tokenizer with its vocabulary of 100,278, and the optimizer, the learning-rate schedule, the random seed, the 512-token maximum length and the evaluation procedure are held constant. Checkpoints were taken at the same compute budget, with no EMA. The two baselines were randomly initialized from their own official implementations. Code and weights are public under Apache 2.0. Comparisons controlled this tightly are not common.

It is worth being precise about where the matching stops. The quantity held equal is the non-embedding backbone, not the total parameter count. A baseline comes to roughly 2.2B once its 400M of embeddings is added to the 1.8B backbone, while Cola DLM comes to roughly 2.3B once the 500M Text VAE is added to its 1.8B DiT. The three are not identically 2B; they differ by about 100M.

The tests themselves need the same scrutiny. The eight benchmarks are public tests already in circulation rather than instruments built for this study: LAMBADA, MMLU, SIQA, SQuAD, Story Cloze, OBQA, RACE and HellaSwag. One asks for the last word of a long passage, another for knowledge across many subjects, another for an answer drawn from a supplied text, so the abilities being measured differ from row to row. The average that follows weights all eight equally, which means a rise in the average and a rise in any particular ability are not the same statement.

### 2.1. Scoring Is Exact String Matching

The grading rule has to be read before the scores are. Multiple-choice and generative tasks were evaluated under one unified few-shot setting, and accuracy is counted by generative scoring, which the authors call strict string matching. A score lands only when the text the model produces matches the reference string exactly. The MMLU column here therefore cannot be treated as measured on the same instrument as the MMLU numbers on public leaderboards. No choice is being made among four options, so the familiar floor of 25 percent for guessing does not apply.

On why the absolute scores look low, the authors got there first as well. The first author's blog attributes the low multiple-choice numbers to the generative evaluation procedure and then adds, **"we are limited by compute resources."** The constraint is named by the team itself.

### 2.2. The Eight-Benchmark Comparison Is a Figure, Not a Table

This is the point at which this article stalled longest. Section 4.5 plots Cola DLM against the two baselines as a benchmark average and as per-benchmark curves, and that comparison is **Figure 10**. Its caption says Cola DLM eventually reaches the best average performance, but **the per-benchmark numbers are not printed in the text.** So there is no way for this article to say, in figures, how many of the eight it wins and how many it loses. The absolute scores in the table below are not from the publication either; they come from the open repository.

A claim about where it leads does exist, in the authors' own summary. The project page reports a clear advantage on MMLU, RACE, Story Cloze and OBQA, says that on SQuAD it passes the autoregressive model at larger budgets, and adds that the best benchmark average arrives at roughly 2000 EFLOPs with the curve still rising. EFLOPs is the unit for the compute spent on training. All of that is the authors summarizing their own result; it is not a printed figure. And a curve still rising is also a curve that has not yet shown what happens at a larger budget.

One qualification before moving on. This article read the body of the publication and parts of the appendix. Within that range there was no per-benchmark table listing the three models side by side. That is not the result of reading the full document end to end, so the stronger claim, that no such table exists anywhere in it, is one we are not making.

### 2.3. The Printed Absolute Scores Live in the Repository, and the Two Outlets Disagree

Finding per-benchmark absolute scores means going to the repository instead of the publication. The GitHub README and the HuggingFace model card both carry a score table for the same released checkpoint, and pulling the two tables verbatim and comparing them character by character shows that **six of the eight agree and only RACE and SIQA differ.** That gap is exactly what produces the gap in the averages. Each table is internally consistent. The eight README values sum to 213.17 for an average of 26.65, and the model card values sum to 213.97 for 26.75. Transcription slip is a hard explanation to sustain. The easier reading is that these are two separate measurement runs.

| Benchmark | GitHub README | HuggingFace model card |
| --- | --- | --- |
| LAMBADA | 50.80 | 50.80 |
| MMLU | 19.30 | 19.30 |
| OBQA | 23.00 | 23.00 |
| HellaSwag | 10.70 | 10.70 |
| RACE | 19.30 | 19.60 |
| SIQA | 28.40 | 28.90 |
| SQuAD | 30.90 | 30.90 |
| Story Cloze | 30.77 | 30.77 |
| Eight-benchmark average | 26.65 | 26.75 |
| Setting stated above the table | not stated | zero-shot |

Two score tables for the same released checkpoint. Only the two highlighted rows hold different values, and that difference is what produces the gap in the averages at the bottom. The final row records the evaluation setting each document states above its own table.

The two documents also label the conditions differently. Directly above its table, the model card specifies zero-shot results measured with the public inference implementation, while the README calls the numbers reference accuracies and never mentions a shot setting at all. The paper's main text describes a unified few-shot setting. So whether the zero-shot the model card declares is the same condition the publication evaluates under cannot be settled within this range. There is equally no basis yet for saying that the two outlets gave one condition two names.

The README then adds a line of its own. The benchmark average measured there, 26.65 percent, is **slightly higher than the final average reported in the publication**, and the reason given is that the open-source implementation differs a little in structure. The final average in the publication is therefore some value below 26.65, and that value is not printed anywhere within the range we read. That the weights behind this score table come from the largest-budget point on the scaling curve is stated separately by the README and by the model card, each backing the other.

The model card also sets down what kind of artifact carries these scores. This is a pretraining-stage model with no instruction tuning, no learning from human preferences and no safety alignment; training was predominantly in English; and the card warns that the model is sensitive to prompt format and recommends a question-and-answer shape. The same card says not to put it in a production chatbot or behind a high-stakes decision. The absolute scores in the table should therefore be read as the record of a research pretraining checkpoint. They do not transfer to a finished product.

### 2.4. Speed Is Not a Claim This Work Makes

Diffusion invites the assumption that it must be faster than autoregression, yet **no measured latency, throughput or time-per-token figure appears in the publication.** There is a general statement that more efficient parallel computation is possible within a block, and another that autoregressive inference is sequential by nature. For reference, the example script in the open repository hard-codes 16 denoising steps and a guidance strength of 7.0 as defaults. Those are defaults in repository code, not settings printed in the publication, and they should not be copied across as if they were. Anyone who wants speed numbers has to look somewhere other than this work.

## The Latent Space Sets the Ceiling on Output Quality

Three of the four research questions put the space itself on the bench rather than the model. Does a global semantic structure exist inside the latent space? What kind of space suits text generation best? Which diffusion process works most effectively? Only the fourth asks why continuous-space diffusion should be used for language modeling at all. A design that changed the space ends up experimenting on that space, and the answers those experiments return travel further than anything else in this article.

### 3.1. The Count of Numbers per Position Changes the Score

Latent dimension is the count of numbers used to describe a single position in the space. That count was set to 16, 64 and 128 in turn, and the average of three benchmarks (LAMBADA, MMLU and SIQA) was measured at each. Model, data and training budget stay put; only the shape of the space moves. The results come out as follows.

A Pebblous chart drawn from the values in the paper's table. Raising the count of numbers from 16 to 128 lifts the three-benchmark average from 8.7 to 11.8. The lowest-scoring setting, 16, is the one that was kept. These are values on a three-benchmark subset with the training budget pinned to a single point, so they do not carry over to the eight-benchmark scores or to any other budget.

Being an average, the bars above fold the three benchmarks into one movement. The per-benchmark values in the table tell a different story: LAMBADA peaks at latent dimension 64 with 20.9 and comes back down to 18.5 at 128, while MMLU and SIQA both peak at 128. The bars do not record three benchmarks moving together in one direction. They hold three values of different character, added up and divided.

On score alone 128 is the better option, and yet the final setting is 16. The first author calls the choice conservative and says on the blog that larger latent dimensions, with a noise schedule tuned to match, were not tested in this work. Whether a fuller reason appears elsewhere in the paper is something we could not confirm within the range we read, so we are not treating this as a better setting left on the table. One thing is clear. With the same model and the same data, changing a single setting moved the average by 3.1.

### 3.2. How the Space Is Built Changes the Score Too

How the Text VAE gets trained is put through the same kind of test. The noise-level setting for VAE training was fixed at 1.0, 1.5 and 2.0 and also left to be learned, with each variant compared at two training budgets. At the smaller budget (77.86 EFLOPs) the three-benchmark averages are 14.70, 18.27 and 16.77, and the learned variant is highest at 18.90. At the larger budget (116.78 EFLOPs) they are 18.83, 21.80 and 20.63, with the learned variant at 22.10. At both budgets, 1.5 beats 2.0. The movement is not monotone, and since no passage explains why, we add no interpretation of our own.

The two tables together say something simple. Both the length of a single position and the training setting that produced it move the final score. However well the prior is built, the space it rides on has already fixed the range the scores can fall in.

### 3.3. Likelihood Improved While the Generated Text Got Worse

One of the usual diagnostic metrics stops working as a guide under this design. Section 5.1 states that estimated perplexity diverges considerably from actual generation quality and gives a single token position as the example. Likelihood-based perplexity at that position improves from 1.15×10⁶ to 641.57 and then to 245.36. Over the same stretch, the token actually produced goes from the correct **on** to the wrong **in** and then to a comma. The more plausible the prior finds that position, the further the emitted text drifts from the right answer. The abstract makes the same point: for this model, generation quality and scaling behavior reflect capability better than likelihood does. Likelihood is computed differently here, so these perplexity values cannot be set beside the perplexity of an ordinary language model.

### 3.4. The Paper Sets Down Its Own Assumption in an Appendix

The conclusion of this section is not something we imported from outside. Appendix 12.4, headed as a theoretical limitation, sets down three lines: that a poor encoder costs the model a systematic likelihood penalty, that the latent bottleneck brings a risk of posterior collapse, and that the design as a whole leans on an inductive assumption, **"the data contain a favorable low-dimensional semantic latent structure."** That is the assumption that a usable low-dimensional semantic structure is already present in the data. Where it fails to hold, the ground the design stands on fails with it.

> [!callout]
> A separate group reached the same statement as an experimental finding. TextLDM, posted a day after Cola DLM, describes the central difficulty it had to solve as obtaining good continuous text representations, and adds that **"we find that reconstruction fidelity alone is insufficient."** Recovering the source text well is not enough; aligning those features with a pretrained language model turned out to be decisive for generation quality. A space that reconstructs its input faithfully and a space that produces good text on top of it are two different problems.

## How Far Does the Image Claim Actually Reach?

Once sentences live in a continuous space, the hope that images can be handled in the same place follows immediately. A section is devoted to exactly that direction. What it did and what it showed have to be read apart from each other, which makes this the passage in the whole publication that calls for the most care.

### 4.1. What Was Done

Section 5.5 describes an experiment that brings text and images under one approach. Text is split into blocks as before, and the image side is left as a single large block. The image VAE was trained on in-house data at four resolutions, 256, 384, 640 and 1024, and it cuts spatial resolution by a factor of 16 while holding the latent at 64 channels. Text and images then share a prior in that space. Text-to-image training ran 80,000 steps at resolution 256 followed by another 10,000 at 640, and image-to-text training ran roughly 50,000 steps.

Diagram drawn by Pebblous from the paper's description (Section 5.5). Text is split into several blocks while the image stays a single large block, but the prior model running above them is shared. This diagrams the architecture, not a score-backed result.

### 4.2. What Was Shown

What came out of it fills a single figure. Figure 14 is divided into three panels covering text continuation and text conditioned on an image, text-to-image results from pretraining alone, and a conceptual diagram of the extension. No scores accompany them. The section calls this **"qualitative evidence of feasibility."** A table putting numbers on how far this training approach gets does **not appear anywhere in the section.**

### 4.3. What Has Not Been Shown Yet

Only **one continuous modality** is named anywhere in the work, and that is images. The conclusion in section 6 says the framework can be extended to continuous modalities such as images. That sentence states a possibility, not a result. **Audio appears nowhere in the publication at all.** Video shows up as a symbol in one equation and was never tested. So the claim that the walls between text, images, audio and video are coming down did not come from here.

The released code draws the same line. The GitHub README describes the repository as a **text-only Cola DLM pipeline** and states that joint text-and-image training and inference are not part of this release. What is public leans heavily toward inference: a Python package, an inference pipeline, an OpenAI-compatible adapter and evaluation scripts are included, and training code is not clearly among them. A news line in the README records an 11 June update covering the technical detail of section 5.5, the design choices and the plans for further work. That reads as a part of the project still under way.

## Two Branches of Diffusion, and an Older Continuous One

Two branches are running under the single name "diffusion language model" right now. One is discrete masked diffusion, which hides positions among the tokens and recovers them. LLaDA is the representative of that branch, and [DiffusionGemma](/report/diffusion-gemma-text-generation/en/), which we covered in June, belongs to it as well. The other branch moves a sentence into a continuous latent space and runs the diffusion there, and Cola DLM stands in that one. Both branches use transformers. What separates them is where the diffusion happens.

### 5.1. The Continuous Branch Has a Four-Year-Old Root

Lifting sentences into a continuous space and running diffusion there dates to 2022. Diffusion-LM took word vectors themselves as the object of continuous diffusion, and LD4LG, from the end of the same year, ran diffusion over the space made by an already-trained encoder–decoder. Both were published at NeurIPS. What Cola DLM changed is **who builds the space and what gets modeled on top of it**. A Text VAE trained for the purpose builds the space, and the meaning of the whole response is composed over it block by block.

How thick this root has grown shows in the fact that the same design went up again a day later. TextLDM was released the day after Cola DLM by a separate group of thirteen authors. Its abstract describes a transformer-based VAE sending discrete tokens into a continuous latent and a standard DiT performing flow matching in that space, and adds that the structure is identical to its counterpart on the video side. The skeletons of the two designs overlap. Nor were these the only two papers to go in this direction in 2026; there were several. A year in which many groups ran at the same road is closer to the facts than a single lab breaking out.

### 5.2. The Same Group's Follow-Up Brought Discreteness Back at the Output

The same first author released a follow-up, Cola2, on 22 October. The second half of its title is "balanced discrete generation," and its abstract describes training a block-causal **masked diffusion decoder** conditioned on clean, noised and partially dropped inputs. So this is not a story in which continuity retired discreteness. At the output, discrete generation has come back in.

The numbers in the Cola2 abstract belong to two different experiments. One confirms the core design on five benchmarks with roughly 210 billion training tokens. The other reports an **as-yet-unconverged checkpoint** trained on 346.03 billion source tokens that reaches an eight-benchmark average of 60.10 and passes Llama-3-8B on HellaSwag and Story Cloze, with a pretraining budget the abstract puts at more than 43 times smaller. Binding the two figures to one checkpoint gets it wrong. The Cola2 abstract also never mentions Cola DLM by name, so there is nothing in it to support a reading in which a follow-up concedes a flaw in the earlier design.

### 5.3. Why It Resurfaced Now Cannot Be Established

A few dates are worth laying out around the question of why a May publication is being discussed again in November. The work went up on 7 May, and the code repository was created eight days later on 15 May. Cola2 followed on 22 October. The NeurIPS 2026 poster session falls on 8 December and **has not happened yet.** As of November 2026, downloads of the released models over the past month stand at 83 for Cola DLM and 2,429 for Cola2, the latter running to around 9 billion parameters in total by the published model files.

The list stops there. We have no grounds for pointing at any one of these as the cause, and repeated searching did not turn up the actual posts that read the work and spread it. So this article leaves that space empty. **Why a May publication is circulating again in November cannot be established.**

## Why This Matters to Pebblous

Pebblous DataClinic spreads data across a high-dimensional embedding space and reads where it clusters and where it thins out. Until now that has been straightforward for data that arrives continuous to begin with, like images or sensor logs. Cola DLM moves sentences into exactly that kind of space. Once a sentence has a position in a continuous space, text data can be interrogated spatially the way image data already is: which sentences pile up in one place, which regions sit empty, asked in the same vocabulary for both.

### 6.1. The Space Is Built Out of Data in the End

This connection is not one we dragged in. Two separate papers each wrote it down. The first is Appendix 12.4 of Cola DLM, which names three limits: the systematic penalty a weak encoder imposes, the collapse the latent bottleneck risks, and the inductive assumption underneath it all, that the data already hold a usable low-dimensional semantic structure. The second is TextLDM, released a day later, which arrived at the same point experimentally: reconstructing well is not enough. Reconstruction performance and the arrangement of the space are separate problems.

So what fixes the shape of that space? The distribution of the training data. As section 3 showed, changing the count of numbers, or changing the training setting that produced them, was enough to move the scores. The ceiling on generation quality is set by the shape of the space the prior rides on rather than by the prior itself, and that shape is fixed by whatever was fed in to build it. This is precisely the premise of [our June piece on how diffusion models efficiently learn low-dimensional distributions](/report/diffusion-low-dim-distributions-jmlr/en/).

And yet what Cola DLM's space was built out of cannot be determined from outside. Training is described only as using external open pretraining data, with no corpus named and no token count given, and the model card says no more than that training was predominantly in English. The weights and the inference code are public; the side that fixed the shape of the world this model sees is not. How a model's view shifts with the data used to cut text into tokens came up once before in our [VQ-Tokenizer report](/report/vq-tokenizer-data-quality-synthesis/en/), and moving up from tokens to the whole space deepens that effect by another layer.

### 6.2. Six Questions to Put to Your Own Data on Monday

Brought down to practice, the material in this article turns into six questions. The first three belong to the side that handles the data, and the last three to the side that receives someone else's scorecard and has to read it.

- When your text data is placed in an embedding space, where are the dense clumps and where are the empty regions?
- What was the encoder that built that space trained on, and does that resemble the distribution of your own data?
- Are you judging a space usable on the strength of the encoder's reconstruction performance alone?
- If images and text have started sharing one space, is quality being measured in one space too, or are the two kinds still being measured with separate instruments?
- Does the document behind the scores you have received state which grading rule produced them?
- Is the comparison given as a table or only as a figure, and can you recount the numbers yourself?

### 6.3. Does the Job End When the Model Gets Better?

Reading the shape of a latent space, finding its empty regions and recording what data it was built from are not jobs that finish on their own when a better model arrives. If the space fixes how high the scores can go, then the data that builds it becomes something to tend continuously. And from the moment several kinds of data are handled in one space, quality has to be measured in one space as well. That is as far as this article can go.

## References

Where each figure in this article came from, grouped by character. Entry 1 is the primary paper this article stands on, and the latent-dimension table, the noise-level table, the limitations in Appendix 12.4 and the image experiment in section 5.5 all come from it. The absolute eight-benchmark scores come not from entry 1 but from entries 4 and 5, the two documents of the open repository. Entries 8 through 10 are the lineage of continuous latent diffusion, and entries 11 through 14 are the primary sources for the components this design uses and for the baselines.

### Primary — the paper and documents by its authors

- 1.Guo, H., Zhao, Q., Zhao, Y., Nie, S., Zhu, R., Guo, Q., Wang, F., Yang, T., Zhao, H., Wei, G. & Zeng, Y. (2026). "Continuous Latent Diffusion Language Model." [arXiv:2605.06548](https://arxiv.org/abs/2605.06548) (v1, 7 May 2026; 99 pages, 31 figures, 9 tables; CC BY 4.0) — the architecture description, the four research questions, the baseline matching conditions, the latent-dimension and noise-level tables, the perplexity example in section 5.1, the three limitations in Appendix 12.4, the image experiment in section 5.5 and the conclusion in section 6 all come from here. Eleven authors.
- 2.Cola DLM project page. [hongcanguo.github.io/Cola-DLM/](https://hongcanguo.github.io/Cola-DLM/) — the source for the authors' summary quoted in section 2.2 (an advantage on MMLU, RACE, Story Cloze and OBQA; the best benchmark average at roughly 2000 EFLOPs; the curve still rising). These are the authors summarizing their own result, not printed per-benchmark figures.
- 3.Guo, H. (14 May 2026). First author's blog. [hongcanguo.github.io/posts/2026-cola-dlm.html](https://hongcanguo.github.io/posts/2026-cola-dlm.html) — the two verbatim quotations in section 1.2 (the absence of a theoretical justification for continuity over discreteness; the motivation as representation rather than diffusion), the compute constraint in section 2.1 and the description of the conservative setting in section 3.1 come from here.
- 4.ByteDance-Seed, Cola-DLM GitHub repository README (Apache 2.0; repository created 15 May 2026). [github.com/ByteDance-Seed/Cola-DLM](https://github.com/ByteDance-Seed/Cola-DLM) — the left column of the table in section 2.3 (the eight benchmarks and the 26.65 average), the README's own statement that this benchmark average runs slightly higher than the final average in the paper, the text-only scope of the release in section 4.3 and the example-script defaults in section 2.4 all come from this text.
- 5.ByteDance-Seed, Cola-DLM HuggingFace model card. [huggingface.co/ByteDance-Seed/Cola-DLM](https://huggingface.co/ByteDance-Seed/Cola-DLM) — the right column of the table in section 2.3 (RACE 19.60, SIQA 28.90, average 26.75) and its zero-shot label, the statement that the released weights come from the largest-budget point on the curve, the tokenizer vocabulary of 100,278 and the usage restrictions the card declares all come from here.
- 6.NeurIPS 2026 session page. [neurips.cc/virtual/2026/poster/154716](https://neurips.cc/virtual/2026/poster/154716) — the source for the poster slot (8 December 2026, 10:00–13:00 AEDT, Hall 1-4, #S4308). Whether this sits in the main conference track or a workshop is not stated on the page.
- 7.Guo, H. et al. (2026). "Cola2: … Balanced Discrete Generation." [arXiv:2610.31305](https://arxiv.org/abs/2610.31305) (v1, 22 October 2026) — the masked diffusion decoder described in section 5.2 and the figures from the two experiments come from the abstract. That abstract does not mention Cola DLM by name.

### The lineage of continuous latent text diffusion

- 8.Li, X. L., Thickstun, J., Gulrajani, I., Liang, P. & Hashimoto, T. (2022). "Diffusion-LM Improves Controllable Text Generation." [arXiv:2205.14217](https://arxiv.org/abs/2205.14217) (v1, 27 May 2022; NeurIPS 2022) — the precedent cited in section 5.1, which ran continuous diffusion directly on word vectors.
- 9.Lovelace, J., Kishore, V., Wan, C., Shekhtman, E. & Weinberger, K. (2022). "Latent Diffusion for Language Generation." [arXiv:2212.09462](https://arxiv.org/abs/2212.09462) (v1, 19 December 2022; NeurIPS 2023) — the precedent cited in section 5.1 that ran diffusion over the latent space of an already-trained encoder–decoder.
- 10.Jiang, J. et al. (2026). "TextLDM: Language Modeling with Continuous Latent Diffusion." [arXiv:2605.07748](https://arxiv.org/abs/2605.07748) (v1, 8 May 2026) — the quotation in section 3.4 (reconstruction fidelity alone is insufficient) and the same-month independent design in section 5.1 come from here. A separate group of thirteen authors.

### Primary sources for the baselines and components

- 11.Nie, S., Zhu, F., Li, Y. et al. (2025). "Large Language Diffusion Models" (LLaDA). [arXiv:2502.09992](https://arxiv.org/abs/2502.09992) (v1, 14 February 2025; NeurIPS 2025) — the primary source for discrete masked diffusion over tokens, and one of the baselines in this work.
- 12.Lipman, Y., Chen, R. T. Q., Ben-Hamu, H., Nickel, M. & Le, M. (2022). "Flow Matching for Generative Modeling." [arXiv:2210.02747](https://arxiv.org/abs/2210.02747) (ICLR 2023) — the primary source for the flow matching mentioned in section 1.1.
- 13.Peebles, W. & Xie, S. (2022). "Scalable Diffusion Models with Transformers" (DiT). [arXiv:2212.09748](https://arxiv.org/abs/2212.09748) (ICCV 2023) — the primary source for the diffusion transformer. This architecture is the grounds for the claim in section 1.2 that the transformer stays in place.
- 14.Team OLMo et al. (2024). "2 OLMo 2 Furious." [arXiv:2501.00656](https://arxiv.org/abs/2501.00656) — the primary source for the tokenizer all three models share in section 2.

### Earlier Pebblous articles

- 15.[The AI That Writes All at Once — How Diffusion Models Reshape Text Generation and the Bar for Data Quality](/report/diffusion-gemma-text-generation/en/) — our June article on DiffusionGemma, a diffusion language model that runs over tokens. Sections 1 and 5 use it as the dividing line between the two branches.
- 16.[Breaking the Curse of Dimensionality: How Diffusion Models Efficiently Learn Low-Dimensional Distributions](/report/diffusion-low-dim-distributions-jmlr/en/) — an article on the premise that data live on a low-dimensional structure. It meets the assumption in Appendix 12.4.
- 17.[VQ-Tokenizer: The Technical Backbone of Data Quality and Synthetic Data](/report/vq-tokenizer-data-quality-synthesis/en/) — written at the point where the unit a dataset is cut into changes what a model sees.
