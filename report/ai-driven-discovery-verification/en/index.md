---
title: Who Grades the Discoveries AI Makes?
subtitle: The three fundamental limits of AI verification, and the next step beyond data readiness — discovery readiness
date: 2026-08-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Who Grades the Discoveries AI Makes?

_The three fundamental limits of AI verification, and the next step beyond data readiness — discovery readiness_

## Executive Summary

> [!callout]
> AI is already at the center of physics. CERN's LHCb experiment hands much of its trigger decision (which collisions to keep, which to throw away) to machine learning, and DeepMind's GNoME predicted millions of new material candidates overnight. So the remaining problem is not speed but grading. In an age when AI pours out "discoveries," what must a result pass before we accept it as one? That is the question three physicists (Grosso, Mikuni, and Heinrich) pose in [arXiv:2607.10039](https://arxiv.org/abs/2607.10039). This piece reads their answer not in the language of physics but in the language of verification.

> The authors are blunt. AI cannot route around three fundamental limits: inductive bias, sample complexity, and experimental constraint. And so the physicist's role must shift from "AI user" to "AI evaluator." Their case compresses into a single number. Of the 2.2 million stable structures GNoME predicted, only about 736 have so far been independently verified by experiment, roughly 0.03%. Yet that figure should not be read as failure. GNoME's team counters that verification is slow because experimental chemistry is slow, while critics argue that many candidates are trivial variants of known structures. The very existence of that dispute shows how hard it is to grade an AI discovery.

> For Pebblous readers, this paper is a higher-order version of a familiar idea. Where data readiness asks "is this data something AI can learn from," this paper asks for discovery readiness: "is there a verification system that can promote an AI's output into a conclusion?" Of the three limits, sample complexity and experimental constraint are, at bottom, questions about the representativeness, scarcity, and measurement limits of training data. That is precisely the logic that extends DataClinic's quality gate into a verification gate. With the EU AI Act's verification obligations for high-risk systems now in force, designing the gate for "can we trust this result" is no longer a problem for physics alone.

**Editor's Note.** Anything that measures the boundary between data and AI draws Pebblous in. When that boundary concerns trust in fundamental-science discovery, all the more so. This is not a physics explainer. Physics is simply the _case_ where the limits of AI verification show most sharply; the real subject is translating that verification methodology into the language of data practice. If our August 1 piece, ["Doing Science with Tools You Cannot Reproduce,"](https://blog.pebblous.ai/blog/closed-model-science-reproducibility/en/) asked about the opacity of the tools, this piece takes up the next question: the design of verification. It closes our Natural Science × AI Verification series.

### Key Numbers

Four numbers frame this piece. Each one exposes the gap between "how much AI generated" and "how much has actually been verified."

<!-- stat-card -->
**2.2M → 736** — Predicted vs. verified materials — GNoME predicted 2.2M; ~736 independently verified (≈0.03%)

<!-- stat-card -->
**99%+** — LHC collision data discarded — Humans design the trigger that decides what to see = experimental constraint

<!-- stat-card -->
**1 vs. 1 billion** — Two poles of sample density — Dark matter < 1 event per ton·year ↔ LHC ~1 billion collisions per second

<!-- stat-card -->
**5.0σ** — Physics' discovery threshold — p≈2.9×10⁻⁷, about 1 in 3.5 million — verification culture, quantified

## AI Has Started Making Discoveries — Where the Question Changed

"Should we use AI in science?" is a settled debate. At the frontier of physics, AI is not a tool but part of the decision-making itself. In the LHCb experiment, much of the trigger system that decides which of the tens of millions of particle collisions per second to store and which to discard (that is, what to "see") runs on machine learning. As the physicist Mike Williams puts it, machine learning has already spread through every corner of the particle-physics experimental pipeline. Generative models are replacing detector simulation at thousands to tens of thousands of times the speed of traditional methods. The open question is not "should we use AI" but "who grades what AI produces, and by what standard?"

![Interior of the CERN LHCb detector, where the trigger system judges what to keep among tens of millions of particle collisions per second](./image/img-01-lhcb-detector.jpg)
*▲ The CERN LHCb detector — machine learning handles much of the trigger decision | Source: [Wikimedia Commons (STFC / Kathleen Yurkewicz, CC BY-SA 2.0)](https://commons.wikimedia.org/wiki/File:The_LHCb_detector._Courtesy_of_Kathleen_Yurkewicz._(10134715223).jpg)*

Materials science is where this shift looks most dramatic. DeepMind's GNoME predicted 2.2 million stable crystal structures overnight ([Merchant et al., _Nature_ 2023](https://www.nature.com/articles/s41586-023-06735-9)). That is centuries of accumulated human chemistry compressed into a single day. Yet of those 2.2 million, only about 736 have so far been synthesized and independently verified by other labs, barely 0.03% of the total. Prediction pours out at the speed of generation; verification crawls at the speed of experiment. That gap, three and four orders of magnitude wide, is the starting point of this entire piece.

But reading that 0.03% straight off as "AI's failure" is premature. GNoME's researchers counter that the verification rate is low because experimental chemistry is slow, not because the model is flawed. Conversely, materials scientists like Anthony Cheetham of Cambridge and Ram Seshadri of UC Santa Barbara argue that many of the predicted structures are trivial variants of already-known materials, so the true novelty is overstated (as reported by [404 Media](https://www.404media.co)). Whichever side is right, the mere existence of this dispute is the point. Grading an AI's output as a "discovery" is inherently hard, contested, and still without agreed-upon rules.

> [!callout]
> Our August 1 piece, "Doing Science with Tools You Cannot Reproduce," asked about the **opacity of the tools**: is it acceptable to do science with AI we use without understanding how it works? This piece asks the next question: the **design of verification**. What must an AI-produced result pass before we accept it as a discovery? Grosso, Mikuni, and Heinrich argue that those passing conditions cannot be set arbitrarily. There are three limits AI cannot structurally route around, and the verification gate must be built directly on top of them.

## Three Nails — Limits AI Cannot Route Around

To decide where to place the verification gate, you first have to know where the lines are that AI can never cross. Grosso et al. (2026) drive in three such nails. What matters is that all three are _structural_ limits, not erased by "bigger models, more data, more compute." Because scale does not solve them, they are also exactly the places where human judgment must enter.

### 2.1. Inductive Bias — There Is No Learner That Solves Everything

The first nail comes from an old theorem in learning theory, the so-called No Free Lunch result: there is no universal learner that solves every problem equally well. A model performs well on a given problem because it carries an **inductive bias** (a prior about what to assume first) that fits the structure of that problem. In physics, this bias cannot be chosen arbitrarily. Principles like symmetry, conservation laws, and locality determine which bias is correct. The authors see this as where the physicist's role begins. Choosing which bias to build into a model is a matter of theoretical judgment that data cannot make on your behalf.

### 2.2. Sample Complexity — The Information Limit of a Finite Observer

The second nail is the cost of accessing information. An observer with finite resources cannot obtain as much data as it wants, and some signals are fundamentally scarce. Physics displays both poles of this limit. At one end sits direct dark-matter detection, where events are so rare that running a one-ton detector for a full year yields fewer than one expected signal. At the other end sits the LHC, where roughly a billion proton collisions occur every second. In neither regime, whether extreme scarcity or extreme abundance, does "just collect more samples" work. On the scarce side you physically cannot gather more; on the abundant side the problem becomes what to throw away.
