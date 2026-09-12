---
title: AI Dependence Gets Much Harder to Reverse Past a Tipping Point
subtitle: Nine complexity researchers cast LLM diffusion as an epidemic model, and prevention and reversal stopped costing the same
date: 2026-09-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Dependence Gets Much Harder to Reverse Past a Tipping Point

_Nine complexity researchers cast LLM diffusion as an epidemic model, and prevention and reversal stopped costing the same_

## Executive Summary

> [!callout]
> Nine researchers in physics and complex systems rebuilt the spread of LLMs as an epidemic model. People fall into three compartments: those who do not use LLMs or use them lightly, those who use them while still reading, writing and reasoning for themselves, and those for whom the model has taken over the cognitive work. Adding a single term to the rates that move people between compartments changed the result. The model produced two thresholds rather than one. The value that lets dependence take hold and the value that lets a population come back are different numbers, and in the interval between them the population can sit in either state under identical conditions. The paper names its own headline result as this: collective change can be abrupt even while individual adoption stays gradual. In its own words, prevention can be considerably easier than reversal.

> The paper collected no data of its own. It leans instead on other people's experiments, and the strongest of them is a field trial with roughly a thousand high school students. Students given a tool that mimics a standard chatbot interface scored 48% higher while they had it. Once it was taken away they scored 17% lower than classmates who had never had access at all. Students given a tutor whose prompts were designed to safeguard learning barely showed that drop. When the paper argues that the question is not whether you use these systems but how you couple to them, this trial is the evidence it rests on.

> Holding the model up against the world is where it runs into a wall. Only two of its five parameters can be approximated even loosely from public statistics; no statistical agency publishes the return rate, the recovery rate or collective reinforcement. Everything that is measured sits on the prevention side, and everything unmeasured sits on the reversal side. Corporate AI logs record how much people use the tools, never which compartment a given person is in. Testing this paper would take a kind of data that does not yet exist.

<!-- stat-card -->
**+48% → −17%** — Grades with the tool, then without it — Field trial with roughly a thousand high school students. Measured by a study this paper cites, not by this paper

<!-- stat-card -->
**3 of 5** — Parameters with no public statistics — Return rate, recovery rate, collective reinforcement. All three sit on the reversal side

<!-- stat-card -->
**0.40 ↔ 0.50** — Coming-back threshold and crossing-over threshold — Dimensionless values from the illustrative parameters the paper chose. The span between them is the hard-to-reverse zone

<!-- stat-card -->
**28.3% vs 54%** — US generative AI adoption in the same year — Change the survey definition and the figure nearly doubles. Adoption is not transmission pressure itself

## Three Compartments and Four Arrows

The paper is called "Large-Language Models as a Cognitive Virus." It went up on arXiv on 3 September 2026, filed under physics and society. Nine authors signed it, with Barcelona at the centre: the Complex Systems Lab at Universitat Pompeu Fabra, ICREA, the Institut de Biologia Evolutiva, and researchers on the neuroengineering side, joined by the University of Padua, the Allen Discovery Center at Tufts and the Wyss Institute at Harvard. Three of the nine hold appointments at the Santa Fe Institute. The body runs 12 pages with 137 references. No journal version exists yet.

The word in the title deserves an early note. Calling something a virus is not the same as arguing that LLMs are harmful, and the paper blocks that reading itself in section 1.

> [!callout]
> "The viral analogy does not imply that LLM-human interactions are intrinsically parasitic. Biological viruses range from pathogens to mutualists and evolutionary partners."

The borrowing is a calculation framework, not a verdict. Epidemiology sorts a population into compartments by state and writes the rates of movement between them as differential equations. This paper does the same with three compartments, and unlike the epidemic models most people have seen, there is no immune compartment. The subject is movement between states people can enter and leave repeatedly, not a disease you catch once and never catch again.

The paper also lists the precedents for aiming this machinery at human behaviour. Technology diffusion has been written in epidemic equations before, and compartment models have been built for drug and social media addiction. Section 2 lays out that lineage. This work adds one more entry to it.

So what plays the part of the virus here? Even with that word in the title, the paper states that the model alone cannot settle the question.

> [!callout]
> "the fact that the state variables describe hosts does not imply that a host state is the pathogen. The equations model the epidemiology of coupling and therefore do not, by themselves, determine the identity of the viral analogue."

Something close to an answer arrives at the end of section 5 rather than in the main argument. There is a wider ecosystem in which culturally transmitted usage practices, human coupling states, institutions and technical infrastructure are entangled, and the long-lived technological lineage embedded in it is what the cognitive virus corresponds to. The equations cover one layer of that ecosystem: movement among the human states. That sentence narrows in advance what the model is entitled to claim.

### 1.1. The Line Between Compartments Is Not Volume of Use

The first compartment holds people who do not use LLMs, or use them only lightly. The second holds people who use them while keeping reading, writing, reasoning and verification in their own hands and reaching for other information sources too. The third holds people for whom LLM-mediated work has strongly displaced the work they used to do themselves. The paper's own labels for the three are uncoupled, autonomous coupled and persistently dependent.

Note that what separates the second from the third is not hours or session counts. People in both compartments use LLMs. Someone may prompt ten times a day and check the grounds for every answer afterwards; someone else may prompt once a day and let that one answer close the question. The model does not sort those two by frequency. The compartment follows from which work is still being done by the person.

The paper puts that criterion in two words: scaffolding and substitution. Scaffolding lowers the immediate load while leaving, or building, the capacity to do the task alone later. Substitution removes the need to do the cognitive work at all. The same model falls on the first side when it is used as something to rebuild an argument against, interrogate and check, and on the second when it finishes the synthesis, the judgment and the writing on the person's behalf. Moving from the second compartment to the third is the minimal drawing of that shift.

Cognitive offloading is therefore not the thing being criticised. The paper describes it as a normal and often beneficial component of human cognition, and its headline example is reading and writing. Literacy recruits and reorganizes neural circuits that were already there, and symbols written down outside the head extend memory and open inferences that were not available before. The dividing line is whether external support builds internal capacity or takes its place.

There is already a vocabulary for the distinction. Following an essay one of the co-authors wrote a decade ago, the paper separates complementary cognitive artifacts, which strengthen capacities beyond their immediate use, from competitive ones, which improve performance while potentially weakening the underlying skill. Then it states the test: not whether the tool is used, but which cognitive capacities remain when the tool is withdrawn. That test appears here for the first time and comes back with numbers attached in section 4.

### 1.2. The Four Arrows Between Compartments

Three compartments leave four paths between them. The path from uncoupled to autonomous coupling runs through exposure: social practice, institutional demand, features a platform pushes at you. The paper calls the strength of that push the transmission pressure. There is a path back from autonomous coupling to uncoupled as well, the return rate, which will come up more often in this piece than any other parameter. The path from coupling into dependence is habit hardening. Coming back the other way, from dependence to autonomous coupling, runs on training, verification practices and what the paper calls deliberate cognitive friction.

Stopping at four paths is itself a choice. No arrow jumps straight from uncoupled to dependent, because dependence is taken to develop mainly through regular use. That leaves out the newcomer who hands everything over on the first try. The paper flags the simplification and says what it buys: with that case removed, the simplifications isolate the interaction between contagion-like technological adoption and collective protection of cognitive autonomy. A model takes its character from what it erases as much as from what it keeps.

The substitution to avoid here is reading transmission pressure as an adoption rate. The paper states in its own text that the incidence term should be interpreted as an effective host-side social or institutional transmission pressure. The share of people currently using LLMs is a consequence of that pressure, not the pressure itself. Section 6 returns to why that distinction keeps collapsing in practice, with the adoption statistics laid side by side.
