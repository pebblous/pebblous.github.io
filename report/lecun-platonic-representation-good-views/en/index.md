---
title: Did Yann LeCun
subtitle: The small model leads on one measure alone, how closely its internal representation matches, and two of its three paired texts were written by an AI that had seen the image
date: 2026-11-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Did Yann LeCun

_The small model leads on one measure alone, how closely its internal representation matches, and two of its three paired texts were written by an AI that had seen the image_

## Executive Summary

> [!callout]
> A paper arguing that model size is not the only lever, and that how you pair the data is another, turned into "a 109-million-parameter model beat a 72-billion-parameter one" inside ten days. The paper is "Proving and Improving the Platonic Representation Hypothesis with JEPAs," posted to arXiv on October 29, 2026 by Randall Balestriero and Yann LeCun. This article follows what it proved and where that proof points, through the full text and the appendix.

> The paper moves the lever from model size to the question of what gets treated as the same thing. It calls a pair of such inputs a good view, meaning two separate observations of one scene. In the 940-million-image corpus, though, the party that wrote down "these two are the same scene" was not a person but a captioner that had looked at the image. Drop the texts that captioner wrote and the alignment score falls from 0.107 to 0.060. When both texts come from one captioner working from one prompt, the pairing effect all but disappears. A good view is not valuable because two things got paired. It is valuable when the two came from different sources. This is a specification question about training data, not an architecture question.

> That much is what the paper wrote. From here on it is our reading. Every number above was written down by the paper itself, in its body and in its appendix. The fourth seed that landed below the 72B model, the rerun with the captioner taken out, the line admitting that not one experiment matches the theorem's hypotheses exactly: they are all in there. That is why it could be recounted from outside. This is not an argument that the paper overclaimed, nor that the press lied.

<!-- stat-card -->
**0.107 → 0.060** — Alignment score once the captioner's texts are taken out of the mix — 2.24M images, BERT-S 33M encoder. Benchmark WIT-1024, vision encoder DINOv2 ViT-B, metric mutual 10-NN

<!-- stat-card -->
**0.096 vs 0.092** — Good view against bad view when both texts came from the same captioner — A ratio of 1.04. The doubling only shows up in mixes that include human-written alt-text

<!-- stat-card -->
**42 / 14 / 435** — The multiple counted in samples, in text tokens, and in unique images — The paper put all three units in one sentence. None of the three is "42 times less data"

<!-- stat-card -->
**0.121** — Alignment score of a fourth run at identical settings — Below Qwen2.5-72B's 0.154. The 0.184 in the body is the mean of the first three seeds

Figures in this article come from arXiv v1, dated October 29, 2026, and are current as of November 8, 2026. We reopened the abs page that day and confirmed v1 is the only version.

## One Sentence Was Proved, and Four Assumptions Hang on It

Here is what the paper proves. Encoders that have never seen one another, each trained only on data from its own modality, arrive at **the same representation up to a single rotation**. There is one embedding of the world, and the minimizer for each modality is a rotated copy of it. The paper calls this the Platonic Representation Theorem. It is the point where the tendency Huh and colleagues raised in 2024 as the Platonic Representation Hypothesis (PRH) acquires conditions and becomes a proof.

Those conditions are the four assumptions. What a Joint-Embedding Predictive Architecture (JEPA) is, and why LeCun has pushed that design for years, is covered in an earlier house article, [The Billion Dollar Bet Against Generative AI](/blog/yann-lecun-jepa-world-models/en/), so we will not repeat it. What this section counts is what the theorem had to assume in order to stand.

- **The world is finite.** The set of states is taken to be finite.
- **Rendering is injective.** The way each modality observes the world sends distinct states to distinct observations. Observation loses no information.
- **Positive-pair distributions agree across modalities.** A positive pair is the two inputs that tell a model "these two are the same thing." The rule by which the image side groups things must match the rule by which the text side groups them.
- **The minimizer is unique only up to rotation.** This holds under second-order anti-collapse, meaning the whitening constraint of zero mean and identity covariance.

With all four standing, the conclusion is clean. There exists one embedding of the world, and every modality's minimizer is that embedding times its own rotation. The paper then adds three more results. A theorem bounding the mismatch, when two modalities have different positive pairs, by the kernel difference divided by an eigenvalue gap. A proposition that the rotation is pinned down by a handful of paired samples but cannot be found from the first and second moments of unpaired data alone. And a theorem that **dimensions spent on nuisance are lost to alignment**. Nuisance is whatever attaches to an observation rather than to the scene: the camera angle of a photograph, the verbal habits of a caption. Across 300 randomly generated worlds the measured mismatch stayed under that bound in every case, and the largest came in at about 18% of it.

### 1.1. The Places the Paper Itself Says the Theorem Does Not Cover

The most common misreading around this paper is that it proves world models beat large language models. The paper writes the opposite. JEPAs used as world models are **explicitly excluded** from the analysis.

"JEPAs used as world models predict one embedding from the other through a learned predictor, often conditioned on an action, which our analysis does not cover."

§2.1. World-model JEPAs run a learned predictor from one embedding to another, usually conditioned on an action, and that case lies outside this analysis. The predictor in this paper is the identity function.

Other places are marked out of scope too. Uniqueness up to rotation is proved only for second-order anti-collapse, while the experiments run on LeJEPA's SIGReg, and the paper notes that the full-distribution constraint LeJEPA asks for cannot be met exactly by a finite world. The same goes for the assumption that observation loses no information: real modalities are lossy. Hence this line in the limitations section.

"no experiment meets the hypotheses of Section 2.1 exactly"

Limitations. No experiment meets the hypotheses of Section 2.1 exactly. The same sentence gives the reason: the experiments use LeJEPA, and image-side positives are mostly crops of a single photograph.

The paper, in other words, wrote down the size of the gap between its theorem and its experiments before anyone else could. That gap surfaces twice more below: in Section 4 as the spread across four runs of one setting, and in Section 5 as a table measured while the text composition changes.

## Good Views, Bad Views, and Where a Model Learns Two Things Are the Same

There are two ways to tell a model that two things are the same. One is to pair **two separate observations of one scene**: two photographs of a single event, two captions written by two people looking at the same thing. The paper calls this a good view. The other is to pair **two corruptions of one observation**: two crops of a single photograph, two masked spans of a single sentence. That is a bad view.

The difference lies in what the two inputs share. In a good view they share only the scene, and the nuisance such as camera angle or verbal habit differs between them. In a bad view the nuisance is shared as well. Two crops of one photograph carry the same lighting, the same lens, the same instant. One of the theorems from Section 1 puts a price on this: **dimensions spent on nuisance are lost to alignment**. The more nuisance two inputs share, the more the model learns its own modality instead of the world.
