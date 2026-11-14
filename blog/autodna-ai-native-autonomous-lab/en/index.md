---
title: AutoDNA, the Lab That Plans Its Own Experiments and Runs Them
subtitle: Shanghai Jiao Tong University
date: 2026-11-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AutoDNA, the Lab That Plans Its Own Experiments and Runs Them

_Shanghai Jiao Tong University_

## Executive Summary

> [!callout]
> A laboratory now exists that takes one request typed in plain words and carries a DNA experiment from design through execution by itself. AutoDNA, which researchers at Shanghai Jiao Tong University published in Nature on November 4, 2026, has six AI agents work the procedure out in conversation, write the code that drives the machines, and send it to more than 20 instruments.

> The longest demonstration was a round trip that put digital information into DNA and read it back out. It came to 11,382 hardware steps over about 203.5 hours, a little more than eight days, and the original sentence came back intact. The phrase no human intervention carries a qualifier, however. People topped up reagents and consumables and cleared waste across those same eight days, and the companion article Nature published with it records that six of the fourteen hardware errors logged in the AutoDNA work needed a person's hands.

> Sections 1 through 4 follow what the paper, the commentary beside it and the project documentation the team published will bear out. Section 5, which asks what a record made this way is worth to people who handle data, is this article's reading.

### Key Figures

Sources: the Nature paper [An AI-native experimental laboratory for autonomous biomolecular operations](https://www.nature.com/articles/s41586-026-11228-6) and, in the same issue, [AI agents enter the 'wet lab'](https://www.nature.com/articles/d41586-026-03270-1)

The first two of the four cells are what AutoDNA managed, and the last two say under what conditions it managed them. Read without the second pair, the achievement looks larger than it was.

<!-- stat-card -->
**11,382** — Hardware steps run without a person — The count for one DNA data storage round trip, which took about 203.5 hours, a little more than eight days

<!-- stat-card -->
**97.8%** — Stepwise average yield in enzymatic DNA synthesis — On par with the results human experts have published after optimizing them

<!-- stat-card -->
**6** — Hardware errors that needed a person — Of the fourteen logged, the system recovered from eight and six were left over

<!-- stat-card -->
**1** — Clinical sample used for cancer mutation detection — It found KRAS G13D in a single piece of colorectal cancer tissue whose sequence it had not been given

## Eight Days from a Single Line of Plain English

AutoDNA takes one line of natural language as its input. Everything after that follows in order: searching the literature, picking the reagents to use, laying out the experimental procedure, writing the code that drives the instruments, running them, and reading what comes out. By design there is no place where a person signs off on the procedure or touches up the code.

The longest of the four demonstrations is the DNA data storage round trip. Digital information is turned into a base sequence, which is the encoding step; DNA is synthesized to match that sequence; the material is stored; it is sequenced and read again; and the original data is recovered, which is the decoding step. AutoDNA tied those five stages together on its own, synthesizing and sequencing 78 DNA strands, and pulled back out the sentence that had gone in. The hardware operations came to 11,382 steps and the run took about 203.5 hours.
