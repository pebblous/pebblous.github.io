---
title: AI Finds Antibiotic-Breaking Beta-Lactamases in Wastewater and Seawater
subtitle: A Beijing Normal University team mined 46,335 enzyme candidates
date: 2026-11-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Finds Antibiotic-Breaking Beta-Lactamases in Wastewater and Seawater

_A Beijing Normal University team mined 46,335 enzyme candidates_

## Executive Summary

> [!callout]
> A paper posted to arXiv reports 46,335 candidate enzymes that break antibiotics, gathered from the genetic material in wastewater and seawater. A team at Beijing Normal University tied five classifiers to the protein language model ESM2 and ran the ensemble across a public database of metagenome proteins. The number of beta-lactamases characterized in the laboratory so far stands at 1,778, so the order of magnitude changes.

> The distance matters more than the count. Two candidates sharing only about 30% of their sequence with any known enzyme went into E. coli, and with one of them the bacteria grew even past 512 μg/mL of penicillin, the top of the measured range. A working resistance enzyme sat in a place that searching for similar sequences could not reach. Only two candidates, both class C, were tested on the bench. The rest remain predictions.

> Sections 1 through 4 are what the paper reports. Section 5 is our reading.

### Key figures

Four numbers carry this study: the scale of the candidate set, the distance from the known enzymes, the evidence that an enzyme at that distance still worked, and what changing a single letter did.

Source: Ge et al., [arXiv:2611.14568](https://arxiv.org/abs/2611.14568), main text and figure data.

<!-- stat-card -->
**46,335** — Beta-lactamase candidates mined — Spread across all four Ambler classes. The enzymes characterized in the laboratory numbered 1,778

<!-- stat-card -->
**30.6%** — Sequence Prot22 shares with a known protein — Prot94 sits at 27.4%. That is a distance a search for similar sequences struggles to reach

<!-- stat-card -->
**>512 μg/mL** — Penicillin tolerated by E. coli carrying Prot94 — The empty-vector control stood at 8. The value ran past the top of the measured range, so the ceiling is unknown

<!-- stat-card -->
**16 μg/mL** — Imipenem resistance after one substitution — Wild-type Prot22 read 4. The same change lifted meropenem from under 0.5 to 2

## The enzymes a similarity search kept missing

From penicillin to carbapenem, the family of antibiotics used most widely in the clinic goes by the name beta-lactam. Every one of these drugs carries a four-cornered ring at its center, and that ring halts the building of the bacterial cell wall. A beta-lactamase cuts the ring open with water. Once the ring is broken the drug is just another molecule, and the bacterium lives on. That is antibiotic resistance at the level of a single molecule.

These enzymes fall into four Ambler classes according to how closely their sequences resemble one another. Classes A, C and D use the amino acid serine to cut the ring, while class B recruits a zinc ion for the job. The enzymes that break carbapenems as well sit mostly in classes B and D, and the class studied most in the clinic is A.

The trouble lay in how new enzymes were found. Until now candidates were picked by how closely they resembled the sequences already on file, and a method like that returns only the lookalikes. A protein that does the same job from a sequence far away slips straight through the mesh. That is where the team set its starting point. A protein language model learns sequences the way it would learn sentences, so it reads a protein by the regularity of which amino acid sits at which position rather than by how many letters overlap.

The team collected 1,778 experimentally characterized beta-lactamases from BLDB and Swiss-Prot to serve as the reference. ESM2-t33-650M produces a 1,280-dimension vector for every amino acid in a sequence, and five classifiers sit on top of it. A multilayer perceptron, a convolutional neural network, a bidirectional LSTM, a support vector machine and a random forest each judge on their own, and their probabilities are averaged by weight into a final answer. Across five-fold cross-validation the individual classifiers moved around from fold to fold, while the five taken together classified every sample correctly in all folds.

The team also looked at those same training sequences from another angle. A phylogenetic tree built from the 1,066 that came from nature separated the four classes cleanly, yet the branches of the tree matched the taxonomy of the bacteria carrying the enzymes only in part. These enzymes have not simply been handed down the generations; they have also moved from one bacterium to another. And the sequences drawn from environmental samples did not gather on one branch. They scattered across the whole tree. The clue that the environment might be a reservoir of new beta-lactamases was already sitting inside the known list.

The model then went to MGnify, a public database of metagenome proteins. A metagenome is not the genome of one cultured strain. It is every microbial gene in a scoop of seawater or wastewater, read all at once. A hidden Markov model profile for each class passed 57,799 sequences on the first cut, only those between 200 and 400 amino acids long were kept, and the ensemble classifier narrowed the set to 46,335.
