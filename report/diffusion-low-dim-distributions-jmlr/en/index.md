---
title: Breaking the Curse of Dimensionality: How Diffusion Models Efficiently Learn Low-Dimensional Distributions
subtitle: From mixture-of-low-rank-Gaussians to subspace clustering, and a new lens on data efficiency
date: 2026-06-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Breaking the Curse of Dimensionality: How Diffusion Models Efficiently Learn Low-Dimensional Distributions

_From mixture-of-low-rank-Gaussians to subspace clustering, and a new lens on data efficiency_

## Executive Summary

> [!callout]
> Learning the probability distribution of high-dimensional data from scratch is, in principle, nearly impossible. To learn an unstructured distribution with diffusion, the number of samples you need blows up exponentially in the data's ambient dimension — the pixel count, for images. That is the curse of dimensionality. But real images don't vary freely along every pixel. A single ImageNet photo has 150,528 pixels (224×224×3), yet the number of directions that actually change — its intrinsic dimension — is estimated at only 26 to 43. Data lives on a thin, low-dimensional structure inside a vast high-dimensional space. arXiv:2409.02426 (accepted to JMLR; Wang, Zhang, Zhang, Chen, Ma, Qu) formalizes that structure as a mixture of low-rank Gaussians and works out the mathematics of how diffusion training discovers it automatically — a mechanism the authors identify as subspace clustering.

> The paper has two central results. First, under an appropriate network parameterization, the training objective of a diffusion model (minimizing reconstruction error) is shown to be exactly equivalent to the canonical subspace clustering problem from classical statistics. In other words, for diffusion to reconstruct data well it must find the precise low-dimensional subspace each data mode lives on — and so training is subspace clustering. Second, as a consequence, sample complexity scales linearly in the intrinsic dimension $d$ ($N\approx d$) and is independent of the ambient dimension $n$. Recovering a single subspace is possible once $N\ge d$ and information-theoretically impossible when $N
>                             The implication is clean. The amount of data needed for a given model quality depends not on pixel count but on the number of meaningful directions of variation. With data-licensing prices and training-compute costs climbing at the same time, this is a theoretical basis for shifting strategy from "more data" toward "data whose structure is intact." Why DreamBooth and LoRA work from a handful of samples, and why failing to preserve low-dimensional structure in synthetic data causes model collapse, turn out to be two faces of the same principle. From the Pebblous point of view, this paper converges naturally with the agendas of AI-Ready data and data-quality diagnostics.

<!-- stat-card -->
**~3,500×** — ambient ÷ intrinsic dim — ImageNet 150,528 pixels vs. ID estimate ~38–43 (MLE, method-dependent)

<!-- stat-card -->
**N ≈ d** — sample-complexity scale — Recovering one subspace is linear in intrinsic dim d, independent of ambient n

<!-- stat-card -->
**~10¹⁰ samples** — the curse at dim 16 — Samples needed to learn d=16 to ε=0.01 by nonparametric estimation (theory, s=2)

<!-- stat-card -->
**N≈d transition** — verified in synthetic exps — Independent of ambient n=48; sharp fail↔success flip at the intrinsic-d boundary (paper's synthetic experiments)

## The Curse of Dimensionality — Why Learning High-Dimensional Distributions Is Nearly Impossible to Begin With

> A diffusion model works in two phases. In the forward process, noise is added to clean data in small increments until it becomes pure noise; in the reverse process, that noise is removed step by step to recover the data. Training means learning, by regression, a function $x_\theta(x_t, t)$ that takes a noisy sample $x_t$ at each time $t$ and produces the most plausible estimate of the original data $x_0$. The objective is the expected reconstruction error.

> $$\mathcal{L}(\theta) = \mathbb{E}\big\lVert x_\theta(x_t, t) - x_0 \big\rVert^2$$

> Eq. 1. The diffusion denoising objective — a regression that predicts the original from a noisy sample.

> The optimal denoiser is the posterior mean $\mathbb{E}[x_0 \mid x_t]$, which by Tweedie's formula corresponds one-to-one with the score function $\nabla \log p_t(x)$. So "denoising well = estimating the score well = knowing the data distribution" all collapse into one statement. The trouble is the cost of learning that distribution from scratch. With no assumption about structure, estimating the score of an $n$-dimensional distribution to $\epsilon$ accuracy requires a number of samples that explodes exponentially in the dimension $n$, as $O(\epsilon^{-n})$. In the paper's words, "$\epsilon$-accurate score estimation requires $O(\epsilon^{-n})$ training samples."

### 1.1. The Root of the Curse — the Minimax Limit of Nonparametric Estimation

> This exponential blow-up is not a weakness peculiar to diffusion; it comes from a long-standing limit in statistics. When you estimate an $s$-smooth function in $d$ dimensions, the best achievable error decays with the number of samples $N$ only as $N^{-s/(2s+d)}$. To hit a target accuracy $\epsilon$ you need roughly $N \sim \epsilon^{-(2s+d)/s}$ samples, and because the dimension $d$ sits in the exponent's denominator, the sample requirement explodes as the dimension grows. The intuition is a grid: split each axis into 100 cells and a $d=10$ dimensional space already has $10^{20}$ cells. Filling all of them with samples to trace out the distribution is effectively impossible.

> The numbers make it starker. Fix the smoothness at $s=2$ and the target accuracy at $\epsilon=0.01$, then grow only the dimension $d$, and you see how uncontrollably the sample requirement balloons. Merely doubling the dimension from 8 to 16 multiplies the requirement by roughly ten thousand.

> Samples needed for $\epsilon=0.01$ accuracy in nonparametric estimation (theoretical, $s=2$) — bars on a log scale.

> d = 2~1,000

> d = 8~10⁶

> d = 16~10¹⁰

> d = 32~10¹⁸

> d = 64~10³⁴

> But the data we actually use isn't 16-dimensional. The ambient dimension of one ImageNet photo is 150,528. Apply the table above literally and a diffusion model would have to demand more samples than there are atoms in the universe. Yet real diffusion models work just fine on a few million images. That contradiction is the paper's starting point. The answer is simple — data actually leaves that enormous space almost entirely empty and clusters in a far narrower region.

## The Key Intuition — Data Actually Lives in Low Dimensions

> A 224×224 image with randomly colored pixels is almost always meaningless noise. Natural photographs occupy only a vanishingly small region of the full pixel space. The directions along which a face photo varies are a limited set of factors — expression, angle, lighting, hairstyle — and the number of such factors is overwhelmingly smaller than the number of pixels. This is the manifold hypothesis: high-dimensional data concentrates near a low-dimensional manifold (a curved surface) inside the high-dimensional space. It is one of the pillars of modern machine learning, hardened by Tenenbaum et al.'s Isomap (2000) and by Fefferman, Mitter, and Narayanan's statistical formalization (2016).

> The "number of directions of variation" is quantified by the intrinsic dimension (ID). Several estimation studies report that the ID of standard image datasets is two to three orders of magnitude smaller than the pixel count. The table below shows representative estimates. Because the same dataset can yield very different values depending on the estimation method (MLE / TwoNN / GeoMLE) and the neighborhood size $k$, every figure should be read as an estimate.

| Dataset | Ambient dim (pixels) | Intrinsic dim estimate (MLE) | Approx. compression |
| --- | --- | --- | --- |
| MNIST | 784 (28²) | ~11 | ~71× |
| CIFAR-10 | 3,072 (32²×3) | ~21 (11–96, method-dependent) | ~146× |
| CelebA | — | ~17 | — |
| ImageNet | 150,528 (224²×3) | ~38 (26–43) | ~3,961× |

> ****************

> Table 1. Ambient vs. intrinsic dimension estimates for image datasets — per Pope et al. (ICLR 2021). All values are estimates that depend on method and neighborhood size.

> [!callout]
> **An honesty note.** Intrinsic dimension is not a measured quantity but an estimate. The same CIFAR-10 ranges anywhere from 11 to 96 depending on the method. So every ID figure in this article should be read with the caveat "estimated, method-dependent." That said, the core message is robust even as the estimates wobble — by any method, the intrinsic dimension comes out hundreds to thousands of times smaller than the pixel count.

The paper takes three empirical observations as its starting point. First, the low intrinsic dimension of images. Second, that images lie not on a single manifold but on a union of multiple manifolds, one per class or mode (Brown et al., ICLR 2023). Third, that the denoising autoencoder inside a trained diffusion model is empirically low-rank. These three observations underpin the data model in the next section. The second is the crux — data is split into several surface patches rather than one curved surface, and each patch can be locally approximated by a flat plane, i.e., a low-dimensional subspace.
