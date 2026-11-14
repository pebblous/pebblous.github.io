---
title: Fusion Reactor Dataset BoSS Grades AI Designs by Rerunning the Physics
subtitle: The Flatiron Institute simulated more than 180,000 reactor shapes first, and the generated designs score 43.6% or 6.7% depending on which conditions they are given
date: 2026-11-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Fusion Reactor Dataset BoSS Grades AI Designs by Rerunning the Physics

_The Flatiron Institute simulated more than 180,000 reactor shapes first, and the generated designs score 43.6% or 6.7% depending on which conditions they are given_

## Executive Summary

> [!callout]
> A kit for anyone trying to design a stellarator with AI went up on arXiv last week. A stellarator is a fusion reactor that holds its plasma inside a twisted three-dimensional magnetic field. The kit is called BoSS, short for Benchmark of Stellarator Simulations, and it is not a model. It is 180,000-odd reactor shapes, each one put through a simulation that records where the fast ions leak away, together with the rules for grading a model on top of that data. Pebblous read the full text and recomputed the figures before writing them down.

> Fusion reactor design has been a field where the good metric cost so much to evaluate that it never made it into the design loop, and came out only at the end as a diagnostic. The Flatiron Institute team ran that expensive evaluation first, froze the results into data, and then pinned down a procedure that sends a model's designs back through the physics simulation to be scored. What came out shows what the models did well and what they did badly at the same time. Of the designs the generative model produced, 43.6% had low losses. That figure comes from conditioning on the properties of devices that were already good; condition at random instead and it drops to 6.7%, which is below the 10.8% you get by pulling a device out of the test set at random. On the trajectory task, judged on trajectory accuracy at the 1 ms horizon, two of the three models lost to a baseline that simply repeats each particle's starting state. These numbers are in the paper not because the models are bad but because the scoring rules had a baseline and a noise floor built into them.

> Everything to this point is what the paper says. From here on it is our reading. What BoSS shows is not that AI designs fusion reactors, but that building the evaluation into data first makes a model's failures visible alongside its successes. And BoSS stands in one of the rare fields where a physics code computes the ground truth for you. The data we work with mostly sits on the other side. There is no code that can compute the answer, and a person makes the call. So the use of this piece is not that we should run simulations too. It is the question of what to stand up in that spot instead.

<!-- stat-card -->
**43.6% → 6.7%** — Conditioning drawn from devices already known to be good, versus drawn from anywhere — Pull a device at random and you get 10.8%. All three are the share of low-loss designs measured after rescaling to ARIES-CS size (section 4)

<!-- stat-card -->
**180,000-odd** — Equilibria simulated up front — Only about 20,000 devices have their trajectories saved, and only out to 1 ms (sections 3 and 6)

<!-- stat-card -->
**25,000 A100 hours** — Compute spent building the data — Another 500,000 CPU hours and 3TB on top. Few datasets state their cost in hours at all (section 3)

<!-- stat-card -->
**Two of three** — Models beaten by a baseline that does nothing, on 1 ms trajectory accuracy — Both of the two beat the baseline handily at 10 µs, and on two statistical rows of the same table all three beat it. A scorecard that names neither axis nor horizon is not a scorecard (section 5)

## What Went Up on 27 October, and What Has Not

BoSS was posted to arXiv at 19:47 UTC on 27 October 2026. There are five authors: four at the Center for Computational Mathematics at the Flatiron Institute in New York, one at Cornell's Department of Statistics and Data Science. The work was supported by the Simons Foundation and the Flatiron Institute's Scientific Computing Core.

Start with its status. **This paper is a preprint.** The review link inside it is still the placeholder `openreview.net/forum?id=XXXX`. It wears the dress of a journal submission and has not been accepted anywhere yet. Every figure quoted below is from this version (v1) and could change if a revision appears.

What is open and what is not also needs separating. The data is CC BY 4.0; the code and the trained models are Apache 2.0. The metric code installs with a single `pip install boss-bench`, and three trained models (loss-fraction prediction, heat-load sampling, inverse design) sit on Hugging Face with ONNX exports included. The 3TB data itself, by contrast, has to come through Globus and requires an institutional, Google or ORCID login. And **the code that generated the data has not been released**. Section 8 of the paper records only that it will be "available upon publication". What the license says is open and what can actually be laid hands on are not the same thing.

### 1.1. How Far Does the "First" in BoSS Actually Reach

The shortest way to introduce BoSS is "the first large-scale dataset", but the paper does not put it that way. The abstract says **"the first large-scale dataset of guiding center simulations"**, and the contributions list in §1 narrows the claim once more to **"the first publicly available large-scale dataset of stellarators with GC simulation data and trajectories"**. First along the axis of guiding center simulation, then, not first among stellarator datasets. Larger things already exist in the same field.
