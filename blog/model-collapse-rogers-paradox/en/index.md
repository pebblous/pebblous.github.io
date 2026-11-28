---
title: Model Collapse Erases Rare Knowledge First. Who Pays to Keep Checking?
subtitle: A Vermont study predicts how many rare words AI loses, to within 0.03
date: 2026-11-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Model Collapse Erases Rare Knowledge First. Who Pays to Keep Checking?

_A Vermont study predicts how many rare words AI loses, to within 0.03_

## Executive Summary

> [!callout]
> AI models that keep training on text written by earlier models lose rare knowledge first. A paper posted to arXiv in November explains this effect, known as model collapse, with two theories from cultural evolution. Its sole author is Nam H. Le of the Department of Computer Science at the University of Vermont, and its title is "Who Pays for the Knowledge Models Copy?" Le argues that copying wears knowledge down even when the world stands still, and that when the world changes, even perfectly copied knowledge goes stale. The experiment code and per-seed result files are public on GitHub under the MIT license.

> In the experiments where the world stays fixed, a neutral drift model of word frequencies predicted how many rare words survive without a single fitted parameter, and its error never exceeded 0.028 in any generation. In the experiments where the world changes, the home cities of 2,000 fictional people were reshuffled every generation. Faster change brought lower accuracy and more stale answers, and models that inherited the previous generation's weights lost accuracy four times as fast as models that restarted. The largest model has 125 million parameters, though, and no experiment adds an equal amount of real data as a comparison.

> The paper ends on one closed-form result. Once people can ask a model instead of finding things out themselves, the model's accuracy at equilibrium settles at one minus the cost of finding out. Even if the world never changes, someone has to keep paying that cost. Sections 1 through 7 report what we checked in the paper and the public code. Section 8 is Pebblous's reading from the side of those who work with synthetic data.

### Key Figures

Source: [Who Pays for the Knowledge Models Copy? Model Collapse as Lossy Transmission and Rogers' Paradox](https://arxiv.org/abs/2611.06022) (arXiv 2611.06022, v2).

<!-- stat-card -->
**0.028** — Max error predicting rare-word survival — All generations and conditions of the trigram lineages, zero fitted parameters

<!-- stat-card -->
**47→102** — OPT-125m perplexity — Trained only on its own output, measured on human text: twice as bad

<!-- stat-card -->
**21%** — Stale answers from inheriting models — Change rate 0.4, 30% fresh data. Restarting models: 8%

<!-- stat-card -->
**4×** — Gap in how fast accuracy falls — Slope per unit change rate: inherit −0.87, restart −0.21

## University of Vermont Paper Reads Model Collapse Through Henrich and Rogers

Model collapse became widely known in 2024, when Ilia Shumailov and colleagues reported it in Nature. When a generative model is trained over and over on the output of the model before it, the tails of the distribution, meaning the things that appear rarely, disappear first. Le's paper looks at the same effect through two models from cultural evolution, the field that studies what happens when human groups pass knowledge from one generation to the next.

The first is the skill-loss model that anthropologist Joseph Henrich proposed in 2004. As the paper summarizes it in Section 2, a group learns a skill by watching the most skilled member of the previous generation. Copies fall short of the original on average and only occasionally surpass it. So in a small group, complex skills can vanish even when the environment does not change. Henrich applied the model to Aboriginal Tasmanians, who lost several toolmaking skills after they were isolated. Le maps the first cause of model collapse onto this picture: copying is itself lossy, even in a world that stays the same.

The second is the model anthropologist Alan Rogers published in 1988. In an environment where the best behavior changes with probability u each generation, individual learners pay a cost c to find out what works now. Social learners copy someone else and pay nothing, but they are right only if the person they copied was right and the environment has not changed in the meantime. Copying spreads through the population, yet once it has spread, the population as a whole is no better off than one made up entirely of individual learners. In the paper's words, "copying has been adopted without making anyone better off." That is Rogers' paradox.

Le ties the two models into a single chain. The abstract puts it this way.

"In a fixed world, copies are lossy, as in Henrich's account of skill loss in small populations. In a changing world, even perfect copies go stale, which is Rogers' paradox."

The chain has three dials. One is the share of newly verified human data in the training set. Another is copy fidelity σ, how much of the content survives each copy. The third is u, how fast the world changes.

Section 4 of the paper writes the chain as one equation. Take a single word or a single fact as the unit of knowledge, and let $q_t$ be the fraction of the lineage that holds it. The next generation can get the unit in two ways. Fresh human data can supply it directly, with probability φ. Or the synthetic part can pass it on with probability σ, provided the fact has not changed in between (probability 1−u). φ rises with the fresh-data share but is not equal to it, because a rare unit can be missing from the fresh data too.

$$q_{t+1} = \phi + (1-\phi)\,\sigma\,(1-u)\,q_t, \qquad q^* = \frac{\phi}{1-(1-\phi)\,\sigma\,(1-u)}$$

Both mechanisms sit inside this equation. With u=0 and σ<1, nothing changes and yet $q^*$ stays below 1; only fresh supply (φ>0) prevents total loss. That is Henrich's case. With σ=1 and u>0, the value drops even though copying is perfect, and the lost units are not missing but wrong. The author tracks the fraction holding values that were once right but are now wrong with a separate equation, and those are the stale answers counted in Section 4. That is Rogers' case.
