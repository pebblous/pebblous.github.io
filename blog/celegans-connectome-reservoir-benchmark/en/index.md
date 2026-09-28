---
title: Can an AI Copied From a Worm
subtitle: Norwegian researchers turned the nerve map of C. elegans into an AI circuit, and across five tasks the real wiring came out ahead on memory alone
date: 2026-09-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can an AI Copied From a Worm

_Norwegian researchers turned the nerve map of C. elegans into an AI circuit, and across five tasks the real wiring came out ahead on memory alone_

## Executive Summary

> [!callout]
> Caenorhabditis elegans is a worm about a millimeter long that lives in soil. It has only 302 nerve cells, which made it the first animal whose every cell-to-cell connection was drawn without a single one left out. That map of connections is called a connectome. Wiring that evolution spent a very long time refining ought to work better as an AI circuit than wiring thrown together at random, and that expectation has been around in this field for years. A paper posted to arXiv on 24 September by Felix Reimers, Stefano Nichele and two colleagues at Østfold University College in Norway put the expectation itself on the bench. This article looks at what the test produced.

> The researchers dropped 22 connectomes into a framework called reservoir computing with almost nothing altered. The circuit itself is never trained; only a small readout that interprets the signals coming out of it is. That leaves the character of the wiring fairly visible in the score. Three kinds of randomly rewired control of the same size were set up as opponents across five tasks. The real wiring won on one of them, memory, and on the rest the random controls led or nothing separated them. Even that single win disappeared depending on which method had measured the brain map and which metric had graded the score.

> Sections 1 through 4 report what the paper says. Section 5 is this article's own reading of it.

### Key Figures

Source: Reimers et al., [arXiv:2609.30508](https://arxiv.org/abs/2609.30508), results section and Tables 1 and 2.

<!-- stat-card -->
**1 of 5** — Tasks the real wiring came out ahead on — Memory capacity, and that one alone. Random wiring led on the two chaotic time series tasks, and the other two split by control

<!-- stat-card -->
**22** — Nerve maps turned into circuits — Seven developmental points taken from eight individuals, each mapped again by three separate measurement methods. Every map holds 180 neurons

<!-- stat-card -->
**+0.35 → −0.20** — The sign the measurement method flipped — Same memory task. On maps drawn from synapse counts the original led; on the physical-contact maps the random controls did

<!-- stat-card -->
**7 → 0** — Wins left once the metric changed — Graded by correlation coefficient the original led at all seven age points; graded by RMSE not one point was left

## A Worm's Brain, Planted Straight Into a Circuit

An ordinary neural network settles the strength of its wiring by learning. Data flows through and hundreds of thousands of connections each get nudged a little at a time. Reservoir computing reverses that order. One tangled circuit is built, the connections inside it are frozen, and what gets trained is a small readout that takes in the signals the circuit produces in response to an input. The circuit's only job is to scatter the input across time. Because learning never reaches it, the structure of its wiring stays legible in the score.

A connectome suits this arrangement unusually well. The table recording which cell connects to which is already the adjacency matrix of a circuit. The researchers' preprocessing amounted to scaling the matrix so that its spectral radius came to 1, the minimum adjustment that keeps a circuit from either blowing up or dying away at once. Then they seated it in the slot normally filled by a recurrent network known as an echo state network.

![Network graph of C. elegans neurons drawn as nodes and connecting edges](./image/img-02-brain-network.jpg)
*▲ A node-and-edge visualization of C. elegans neural connectivity. Not the actual map used in this paper — a reference image showing how a connectome becomes a circuit's adjacency matrix | Source: [Wikimedia Commons (Mentatseb, CC BY-SA 3.0)](https://commons.wikimedia.org/wiki/File:C.elegans-brain-network.jpg)*

The maps they used were released by Witvliet and colleagues in 2021. Eight genetically identical C. elegans were separated by developmental stage and swept with an electron microscope, covering four larval points just after hatching (L1.1 through L1.4), then L2, L3, and two adults. One map holds 180 brain neurons plus body-wall muscles, glia, and two canal-associated neurons. It is a reconstruction of the head-end brain rather than a map containing all 302 nerve cells, so the circuit reaches only that far as well.

This material is distinctive in that each individual was measured three separate ways. One method counts how many synapses join a pair of cells. One measures how large the junctions of those synapses are. One works out how much area the two cells actually touch across. The first two yield maps in which signals have a direction; the last yields a map without one. Applying all three at every developmental point produced 22 maps in total. One adult has no data from the synapse size or physical contact methods, which leaves seven rather than eight for each of those.

![Multiple C. elegans nematodes seen under a light microscope](./image/img-01-celegans-microscope.jpg)
*▲ C. elegans, roughly 1 millimeter long. Not the individuals used in the paper, but the same species | Source: [Wikimedia Commons (Gannu03, CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Caenorhabditis_elegans_under_a_light_microscope_02.jpg)*

Where signals enter and leave the circuit followed biology too. Inputs were picked from among the sensory neurons, outputs from among the body-wall muscles, which transposes the path by which a worm senses the outside and moves its body. Checking whether that choice helps requires other choices to compare it against, so the researchers ran five configurations with the input and output positions varied. The first two kept the biological division between sensory cells and muscle; the remaining three dropped that division and took 30, 50, and 80 percent of each group as inputs and outputs.

There are five tasks. Memory capacity asks the circuit to reproduce a signal that arrived up to twenty time steps earlier. The Hénon map and Mackey-Glass tasks ask it to predict the next value of a chaotic time series, and perceptual decision making asks it to pick whichever of two time series has the larger mean. Go/No-go needs only an answer about whether a signal arrived. For each task, 15 sets of randomly drawn problems were stored in advance, 70 percent of them used to train the readout and the remaining 30 percent used to grade it.

## Input and Output Placement Moves the Score More Than Rewiring

The random circuits that served as opponents came in three kinds. The first keeps the distribution of outgoing connection counts and rewires only where those connections land, with input and output nodes drawn from the same groups as the original. The second leaves the wiring alone and picks input and output nodes at random from the whole network. The third randomizes both. Each control was redrawn 15 times for every comparison, so that no single lucky circuit could carry the result.

Scores were pooled through beta regression, which summarizes the gap between the original and a control as a single coefficient. A positive value means the real wiring came out ahead, a negative one that the random control did. Below are the five tasks crossed with the three controls.
