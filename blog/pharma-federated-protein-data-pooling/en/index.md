---
title: Rival Drugmakers Train One AI Without Sharing Any Data
subtitle: Five pharmaceutical companies fine-tuned a shared model on more than 20,000 structures they have never released, and it is far more accurate than the same model trained on public data alone
date: 2026-09-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Rival Drugmakers Train One AI Without Sharing Any Data

_Five pharmaceutical companies fine-tuned a shared model on more than 20,000 structures they have never released, and it is far more accurate than the same model trained on public data alone_

## Executive Summary

> [!callout]
> Among the last assets a drug company will part with are the structures that record how a protein and a candidate molecule lock together. Those files show which molecule was tried against which site. In September, Nature reported that five companies had put exactly that kind of data to work training a single shared model. This article looks at what the companies gave up and what they held on to, and at what had to be brought into line before any of it could be combined.

> The model finished training on 20,167 structures that had never been released, and on a held-out test set it drew the contact between protein and drug at high quality for 52.1% of structures. A model of the same family trained on public databases alone managed 35.6%. The more striking comparison sits elsewhere: no model fine-tuned on any single one of the five companies' datasets came out ahead of the combined one. These numbers have not been through peer review, and the only source for them is a technical report posted on the blog of the company that ran the federation.

> Sections 1 through 4 follow the public record. What happened, how the data was combined without moving it, how far the numbers reach, and what is still closed all sit there. Section 5 is this article's own reading of the episode, which asks whether the data was in a state that could be combined at all.

### Key Figures

Source: [Apheris technical report](https://www.apheris.com/resources/federated-training-dramatically-improves-the-accuracy-of-protein-ligand-co-folding-on-private-pharma-structures). Only the context line on the first card comes from the [Nature story](https://www.nature.com/articles/d41586-026-02882-x).

<!-- stat-card -->
**20,167** — private structures used in training — Public databases may hold only about 10,000 structures bound to a drug-like molecule, an executive at one participating company told Nature

<!-- stat-card -->
**35.6% → 52.1%** — share of structures whose contact zone was drawn at high quality — A model of the same family trained on public data alone against the combined model, on the same test set

<!-- stat-card -->
**1,056** — held-out structures used for scoring — Each company set aside 5% of its own structures, and every structure from a given project went entirely to one side

<!-- stat-card -->
**0** — original structures that left a company — Only trained model parameters reached the center; the structure files themselves never left each company's environment

## Five Competitors Trained One Model

The news Nature carried in September centers on an industry group called the AI Structural Biology Network, or AISB. Nature named AbbVie, Astex and several other drug companies among those that formed the collaboration, and five of them contributed structures to this particular training run. By the list that Apheris, the German company that builds the federated infrastructure, has made public, they are AbbVie, Johnson & Johnson, Astex, Bristol Myers Squibb and Takeda. The first two started in March 2025, and the other three joined that October.

OpenFold3 is the model on the receiving end. Mohammed AlQuraishi's lab at Columbia University rebuilt Google DeepMind's AlphaFold3 as open source, and the model predicts the shape a protein and a candidate drug molecule take when the two meet. Until now this family of models has learned from the Protein Data Bank, the public archive of experimentally determined structures, which holds more than 200,000 of them.

![Rendering of a benzimidazole carboxamide inhibitor (red) docked in a binding pocket on the surface of the CHK2 protein](./image/img-01-protein-ligand-binding-pocket.png)
*▲ A protein (grey surface) and an inhibitor molecule (red) locked into a binding pocket — this is exactly the kind of fit OpenFold3-family models are trained to predict | Source: [Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Human_CHK2_in_complex_with_benzimidazole_carboxamide_inhibitor.png)*

The trouble is what those 200,000 consist of. Paul Mortenson, vice-president for computational chemistry and informatics at Astex Pharmaceuticals, told Nature that the PDB may hold just 10,000 structures caught in the act of binding a drug-like molecule. That 10,000 is precisely the situation drug research wants to know about, while most of the material the model learns from is some other kind of structure. An evaluation by researchers at the University of Basel, published in May in the journal Nature Structural & Molecular Biology, found that accuracy for this family of models falls off a cliff once a molecule looks very unlike anything in training, and Nature footnoted that paper at the point where it made the case that the data runs short.

The Apheris report puts a sharper number on the shortfall. Since AlphaFold3 stopped taking in training data, the PDB has grown by roughly 70,000 structures, but nearly all of them are cofactors, metabolites, ions and crystallographic additives. Only about 10,600 public structures contain an approved or investigational drug, and only about 3,000 of those arrived after that cutoff. The 20,000-odd structures the five companies brought all come from active drug-discovery programs, which roughly triples the drug-relevant material available for training.

Where the missing piece sits has been common knowledge in the industry for years. John Karanicolas, head of computational drug discovery at AbbVie, put the situation to Nature in one sentence. "The data that's missing from the PDB is exactly the data that's present in our internal data." A drug company will solve a structure hundreds of times around a single candidate. Some of those attempts bind well and some bind in the wrong place, and the record stays inside the company instead of going out in a paper. The files show which site on which protein a company is going after, so there was never a reason to let them out. Nobody knows how large the vaults are in total, and Nature reported an estimate that together they may hold more than the PDB does.

What changed this time is that five companies ran the arrangement in which those files stay home and only the learning travels. Pooling pharmaceutical data through federated learning is not a new idea. Earlier large-scale attempts showed that training across companies was feasible, according to Apheris, yet the gains in model performance stayed modest. This time the five companies needed under ten weeks to fine-tune OpenFold3 Preview 2 together, and no structure file left a company along the way. The resulting model is called AISB-1-Fed.

## Combining Data Without Moving It

The method is federated learning. Instead of gathering data in one place and running a model over it, the model goes to where the data sits. Each of the five companies trains OpenFold3 a few steps inside its own servers and uploads only the changed model parameters to an aggregation point that Apheris operates. The aggregation point averages the five sets of parameters into a single model and sends that model back down to the five companies. The round trip repeats many times.

The center ends up holding a pile of numbers. The aggregation point received parameters rather than structures, Apheris wrote in its report, adding that the original structure files stayed inside each company's environment for the whole run and that the system was designed so that parameters cannot be unwound back into a structure. The arrangement separates handing over internal data from teaching a model with internal data.
