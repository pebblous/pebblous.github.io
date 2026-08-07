---
title: IC² estimates intervention effects from observation alone
subtitle: IC² and two causal scores (CIC and iCIC) open the door to observation-based intervention estimates
date: 2026-08-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# IC² estimates intervention effects from observation alone

_IC² and two causal scores (CIC and iCIC) open the door to observation-based intervention estimates_

## Executive Summary

> [!callout]
> Can you tell whether nudging one variable would change another—without ever knocking out a gene or running an A/B test, just by staring at time series you already have? The question sounds self-contradicting, yet IC², published in 2026 in _J. R. Soc. Interface_, answers it with two causal scores. One measures how entangled two variables are in their ordinary observed motion (CIC); the other measures whether, when you give one of them a tiny shove, that shove actually carries over to the other (iCIC). This piece walks through what those two scores are, and why you have to read them side by side to filter out hidden causes.

> The heart of it isn't a mechanism but a contrast. Under genuine direct causation both scores run high; but when two variables only move together because of an unseen common cause, CIC stays high while iCIC goes limp. That single mismatch is the fingerprint of a hidden confounder. On a plankton food web the authors recovered all seven causal links with zero false positives, and their estimated intervention strengths tracked the true effect sizes at a correlation of 0.77. One thing to be clear about: the “intervention” here isn't a do-calculus move that forces a variable to an arbitrary value—it's the smallest possible local nudge that stays inside the observed trajectory.

> This framing catches Pebblous's eye because it overlaps with a wall we've hit for years. A DataClinic diagnosis always stalls at the same question: “the correlation is obvious, but is it causal?” IC² splits that question into two axes—“do they move together?” and “does a nudge get through?” And in domains where a single real intervention costs billions or puts human safety on the line—robotics, healthcare—the idea of approximating an intervention effect from observation logs alone redraws the very cost structure of gathering data.

<!-- stat-card -->
**7 / 7** — food-web links recovered — Every true link in a plankton community found, with zero false positives

<!-- stat-card -->
**r = 0.77** — intervention-effect agreement — Correlation between observation-estimated effects and true effect strengths

<!-- stat-card -->
**AUC 0.843** — Perturb-seq wet-lab check — Predictions from control cells alone matched real CRISPR outcomes

<!-- stat-card -->
**$2.6B** — avg. cost of a drug RCT — Over 8.5–15 years—the benchmark that makes observation-based estimates worth it

## Moving together isn't the same as causing

Come summer, ice-cream sales climb and so do drowning accidents. The two curves track each other uncannily. So would swearing off ice cream cut the accidents? No. What pushes both up is a third variable—temperature. On the data alone, ice cream and accidents clearly “move together.” Yet touch one and the other doesn't budge. Correlation without causation: the most common and most dangerous situation in practice.

This old lesson turns sharp again once the data flows through time. When the time series of two variables x and y wobble in step, we get lost among three possibilities. It could be **direct causation**, where x really moves y; it could be an **indirect relationship**, where x reaches y through some intermediate variable; or it could be **latent confounding**, where—like ice cream and accidents—an unseen common cause z shakes both at once. The surface co-movement alone can't tell these three apart.

> [!callout]
> Just yesterday we covered the DeepMind work arguing that **LLMs can't make the leap from observation to a genuinely new theory**. If that piece posed a question of **epistemology**—how do you **discover** a concept that wasn't there before?—then what IC² grips today is a question of **statistics and method**. Take the concepts as given, and ask how you **estimate** the effect of an intervention from observation alone. Estimation, not discovery; discrimination, not a leap. The same “limits of observation,” but a different grain.

The tools that have handled time-series causality so far mostly answer that first question: how strongly do the two move together? The trouble is that this answer alone can't filter out latent confounding. However finely you measure the strength of the co-movement, ice cream and accidents still look tightly entangled. What's needed is a second eye—an instrument that separately asks, “when you actually give one a small nudge, does the change carry over?” That's where IC² begins.

## CIC: the fingerprint cause leaves in observation

The intuition behind the first score, CIC (causal information content), is surprisingly plain. If x causes y, then over time y's motion quietly accumulates traces of what state x was in earlier—because a cause leaves its information on its effect. So if you can reconstruct x's past states reasonably well from y's trajectory alone, the two variables are sharing that much causal information, and CIC runs high.

This idea didn't fall out of the sky. In 1981 the mathematician Floris Takens proved that if you take a single variable sampled at spaced time lags and use those as coordinates—this is called delay embedding—you can reconstruct the full state space of the system. On top of that theorem, in 2012 Sugihara and colleagues proposed CCM (convergent cross mapping): if you can predict x from the “shadow trajectory” reconstructed out of y, then x is judged to cause y. CIC can be seen as this lineage recast in the language of information—moving from “can you predict it?” toward “how much information is shared?”

One point is worth nailing down. CIC is an **observational** score, computed from observed dynamics alone. It presumes no experiment. It simply summarizes, in a single number, how strongly two variables are ordinarily entangled. And that is exactly both CIC's strength and its limit. It captures entanglement well, but whether that entanglement comes from real causation or from an illusion manufactured by a hidden z is something CIC can't settle on its own. The CIC of ice cream and accidents can run just as high.
