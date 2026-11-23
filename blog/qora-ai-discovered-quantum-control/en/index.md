---
title: AI Scientist QORA Holds Quantum States Longer Than Human Design
subtitle: QORA
date: 2026-11-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Scientist QORA Holds Quantum States Longer Than Human Design

_QORA_

## Executive Summary

> [!callout]
> Two AI agents ran a lab instrument themselves and came back with a way to control a quantum system. Physicists at Washington University in St. Louis described the framework, called QORA (Quantum Optimization and Research Agent), in a [paper posted to arXiv on November 16](https://arxiv.org/abs/2611.21765). One agent designs candidate control pulse sequences; the other fires them at an actual diamond sample and sends the measurements back. The humans set the goal and read the reports.

> The sequence that came out of this, AID-ROD-1, pushed the spin coherence time of a diamond NV center ensemble to 18.6 microseconds. DROID-C3PO, the best human-designed sequence in the field, reached 9.8 microseconds on the same hardware, which puts QORA's result at about 1.9 times the human one. What draws the eye is not the ratio but the order of events. The agents could not say what their 18-pulse block was canceling, and human researchers worked that out afterwards with algebra. The paper even labels that section "Human interpretation."

> Sections 1 through 3 lay out the structure and the numbers as the paper reports them. Sections 4 and 5, which ask who vouches for data quality when measurement and calibration sit inside one loop, are this article's own reading.

### Key Numbers

Source: [Yan et al., "AI Scientist Discovered Robust Quantum Control," arXiv:2611.21765](https://arxiv.org/abs/2611.21765) (2026-11-16)

The first two cards show what the AI-found sequence changed and by how much. The last two show how rough the conditions were that the result survived.

<!-- stat-card -->
**9.8 → 18.6** — Spin coherence time (microseconds) — From the human-designed DROID-C3PO to QORA's AID-ROD-1, about 1.9 times

<!-- stat-card -->
**18 pulses** — The base block the AI found — A six-pulse unit repeated three times; seven blocks make one cycle

<!-- stat-card -->
**0–30%** — Drive-strength error it tolerated — It stayed ahead of the human-designed sequence everywhere in that range

<!-- stat-card -->
**12** — Benchmark states the experiment agent watched — Used to notice hardware drift on its own and correct for it

## Theo Does the Theory, Dex Runs the Hardware

QORA splits in two. The theory agent is named Theo, the experiment agent Dex. The paper states that the framework runs on GPT-6-Astra and Sorol. Theo does not work alone but directs five sub-agents: a Proposer that puts forward candidates, a Reviewer that checks them, an Executor that runs simulations, a Classifier that sorts results into families, and a Composer that stitches workable fragments together. It designs pulse blocks by consulting a knowledge base drawn from the literature, then filters candidates by computing through exact diagonalization how well twelve initial states are preserved.

Dex is the odder half. This agent operates the instrument-control software directly through the GPT API. It converts the pulse sequence it receives into waveforms, applies them to the sample, and reads fluorescence intensity to measure how long coherence holds. Optical focus, detuning, the skew angle between the two drive channels, microwave frequency and amplitude are all set by Dex itself. It keeps twelve benchmark spin states under watch and compensates when the hardware drifts.

What passes between the two agents is a design in one direction and a measurement in the other. Dex runs Theo's filtered candidates on the actual diamond, and the coherence decay curves that come back steer Theo's next design. The paper lists three things the humans do: set the scientific goal, assign the task to Theo, and review the experiment reports Dex files.
