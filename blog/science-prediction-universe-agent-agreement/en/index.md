---
title: In Science Prediction Universe, AI Agents Agree More With Each Other Than With the Lab
subtitle: Thirteen agent configurations ranked the outcomes of 100 wet-lab experiments; their rankings lined up at 0.52 with one another and at 0.33 with the measured values
date: 2026-11-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# In Science Prediction Universe, AI Agents Agree More With Each Other Than With the Lab

_Thirteen agent configurations ranked the outcomes of 100 wet-lab experiments; their rankings lined up at 0.52 with one another and at 0.33 with the measured values_

## Executive Summary

> [!callout]
> A benchmark that measures how well AI agents predict experimental outcomes went up on arXiv on November 11, 2026. It is called Science Prediction Universe, or SPU, and thirty-six authors signed the paper. The task format is plain. An agent receives an experimental setup and a handful of candidate conditions, and has to rank the candidates by the value a real measurement would produce. Nothing limits the means it uses, whether that is a literature search or a calculation it runs itself. Alongside 100 public tasks, the benchmark holds 16 wet-lab experiments that have never been published anywhere.

> Thirteen agent configurations spanning twelve frontier models worked the public tasks, and their task-adjusted mean rank correlations landed between 0.227 and 0.478. The number worth pausing on comes after that range. Across 1,155 scored trajectories, the rankings the configurations produced correlate with one another at 0.52, while the same rankings correlate with the measured values at 0.33. The models resemble each other more than they resemble the laboratory, and the paper names shared monotone priors as the reason. Those priors hold that a measured value keeps rising, or keeps falling, as a condition grows.

> The figures and quotations in sections 1 through 4 come from the body and the appendices of the SPU paper on arXiv, with one reference in section 4 to SciPredict, an earlier paper on how poorly such predictions are calibrated. Section 5, which lays this result over workflows that treat agreement among several models as a verification signal, is this article's reading.

### Key numbers

The first two numbers show what agents manage today. The other two speak to why that level does not move easily.

Sources: [arXiv:2611.15049](https://arxiv.org/abs/2611.15049), Table 1, Section 4.2, Section 6, Appendix E.8.

<!-- stat-card -->
**0.478** — Highest task-adjusted mean rank correlation of any configuration — Opus 5.5. Safety refusals left only 44 of the 100 public tasks scored

<!-- stat-card -->
**0.52 / 0.33** — How closely the agents match one another, and how closely they match the measured values — Computed over 1,155 scored public trajectories

<!-- stat-card -->
**25% / 11%** — Share of submitted orders that run one way with the condition, and the share of measured orders that do — Counted the same way across 95 groups whose conditions vary numerically

<!-- stat-card -->
**0** — Correlations found between score and run time, tool calls, web fetches or GPU use — 227,103 tool calls were swept and none of the four turned one up

## The Tasks Hide the Measured Outcome and Ask for a Ranking

The paper's opening paragraph sets a bar rather than describing a benchmark. Humanity has long sought to explain natural phenomena, the authors write, and reliable prediction of experimental outcomes is a central test of that understanding. So if artificial general intelligence is to surpass human scientific capabilities, it must also predict experimental outcomes more reliably than humans do. SPU turns that sentence into a scoreboard.

One task looks like this. It describes an experiment, the equipment, and how the run proceeds, and it supplies the candidate conditions that can be varied. The agent uses whatever it needs, a literature search or a molecular calculation, and submits the candidates ordered from the best measured outcome downward. Scoring compares the submitted order against the measured order. Because the task ranks rather than counts right answers, an agent scores without knowing a single absolute value, as long as it gets the relative order.

The 100 public tasks were drawn from 85 papers published between January 2025 and August 2026 in eleven Nature Portfolio journals. They span 32 subfields, from organocatalysis and asymmetric synthesis through electrolytes, enzyme engineering, protein design and oncology. By field the count runs 42 in chemistry, 31 in materials science, 31 in biology and 12 in medicine, which adds to 116. That breakdown covers the 100 public tasks and the 16 private ones together.

The eleven journals did not contribute evenly. Nature Communications supplied 43 tasks from 41 papers, and Nature supplied 40 from 28. The remaining nine journals account for 17. The authors list that concentration in one publishing family, and within it two journals, among the study's limitations.

The other 16 tasks are the benchmark's insurance. They come from unpublished wet-lab work done with partner laboratories, and the results were never released. They fall into four groups. Eight tasks cover VHH nanobodies that bind the SARS-CoV-2 spike protein and carry 155 experiments behind them, and three tasks sweep reaction conditions for benzylation, sulfonylation and reductive amination. Two electrolyte tasks that dissolve 1 M lithium hexafluorophosphate in a single solvent and measure ionic conductivity carry 18 experiments, and three tasks on monoclonal antibody variants targeting human CD47 carry 62.

These tasks ask for the order of the values a laboratory actually records. The nanobody tasks rank candidates by the area under an ELISA dilution curve or by expression yield in milligrams per liter. The reaction-condition tasks use the yield of the target product. The 18 electrolyte experiments break down into ten solutions measured for ionic conductivity and eight measured for the electrochemical window, and the antibody-variant tasks use yield, purity and affinity measured by surface plasmon resonance.

> [!callout]
> A public task may in principle already be inside a model's training data. The paper acknowledges that risk and says an information policy plus four safeguards constrained search and recall, but it does not claim the route was closed. The 16 private tasks are where that doubt ends. No paper anywhere records the answer, so whatever score an agent earns there cannot be something it memorized.

## Even the Top Result Stops at 0.478

The score is a Spearman rank correlation. Near 1, the submitted order nearly matches the measured order; at 0, there is no relationship between the two. Because tasks differ in candidate count and difficulty, the paper reports a task-adjusted mean. Here is how the thirteen configurations did on the 100 public tasks.

| Configuration | Scored tasks | Task-adjusted mean correlation |
| --- | --- | --- |
| Opus 5.5 | 44 | 0.478 |
| Astra Medium (GPT-6, Codex) | 100 | 0.431 |
| Opus 5 | 99 | 0.424 |
| Fable 5.1 | 30 | 0.421 |
| Astra Max (GPT-6, Codex) | 100 | 0.409 |
| Sonnet 5.5 | 97 | 0.393 |
| Doubao | 100 | 0.315 |
| GPT-6.1 Sol (Codex) | 94 | 0.308 |
| Kimi-K3.1-Pro | 95 | 0.296 |
| DeepSeek-V4.1 | 100 | 0.254 |
| HY4 | 100 | 0.245 |
| GLM-5.3 | 98 | 0.239 |
| Qwen3.8-Max | 98 | 0.227 |

▲ All thirteen agent configurations on the 100 public SPU tasks. | Source: [arXiv:2611.15049, Table 1](https://arxiv.org/abs/2611.15049)

The left column names something narrower than a model. A configuration combines a model, a reasoning effort and an agent harness, in the paper's words. The three rows marked Codex ran on Codex CLI, and Astra appears twice there, once at medium effort and once at maximum. The remaining ten rows ran on Claude Code at maximum effort. That is why twelve models produce thirteen rows.

Read down the list and it splits in two. A visible gap separates the six above 0.39 from the seven below 0.32. Inside either group the 95% confidence intervals of the first and the fifth overlap, so neither can be called the better one. The distance between the two tiers carries more signal than any single step in the ranking.

That boundary is not eyeballed. The authors ran paired Wilcoxon tests between configurations with a Holm correction, and no difference showed up within the top six or within the bottom seven. Standing one row higher inside a tier is not grounds for calling a configuration better.

The top number carries a caveat. Opus 5.5 declined to answer 56 of the 100 public tasks on safety grounds, and the refusals clustered in chemistry, biology and medicine. The 0.478 is the mean over the 44 that remain. Fable 5.1 is in the same position with only 30 tasks scored. The authors themselves list the possibility that selective coverage inflated those means as a limitation, so these two rows cannot be held against configurations that worked all 100.

Set that caveat aside and the best configuration to work every task reaches 0.431. That is roughly half the order placed correctly. The abstract puts the summary plainly: current agents remain far from saturating wet-lab outcome prediction, with substantial performance disparities across models.

Table 1 in the paper carries one more column that the table above leaves out, and it holds what a mean conceals. For each task the authors draw 4,000 random valid submissions and take the 95th percentile of the resulting scores as the chance threshold. Clearing that line is what counts as doing better than an order assigned at random, and a random submission clears it about 5% of the time. Counted that way, the leading configuration cleared the line on 23 of its 44 scored tasks. The best among those that worked all 100 cleared 52, and the configuration with the lowest share cleared 33 of 98. They clear it far more often than chance would, then, and even the leading configurations still stayed under the line on close to half their tasks.

## The Agents Expect the Measurement to Follow the Condition

A more interesting analysis than the leaderboard sits in the appendix. The authors compared the rankings the thirteen configurations submitted on each task against one another. The correlation among their mean rankings is 0.52. The same mean rankings set against the measured values give 0.33. They are better at predicting each other than at predicting reality.

▲ Pebblous original diagram. The two correlations reported in Appendix E.8, placed on one axis.

Section 4.2 explains how this comes about. The authors pulled 95 groups from 37 tasks in which the conditions vary numerically: candidates that differ only in the size of one variable, such as a rising temperature or a higher concentration. Inside those groups the submitted order tracked the number fairly faithfully, and its absolute Spearman correlation with the condition averages 0.57. The measured orders correlate with the same condition at 0.46.

The share of answers that run straight in one direction makes the gap sharper. A quarter of the submitted groups are monotone in the condition, lining up at an absolute correlation of at least 0.95. Among the measured orders, 11% do that. The physical world does not move so tidily, and the models assumed that it does.

> [!callout]
> The abstract puts this in one line. Agents rely on shared monotone priors, agreeing far more with one another than with experimental reality. Convergence happens, and it is not convergence on the right answer. It resembles students who studied from the same textbook missing the same question in the same direction.

## More Tool Use Does Not Raise the Score

Running the benchmark produced 1,155 scored public trajectories and 227,103 tool calls. The authors went through that record looking for a relationship between score and cost. Score shows no detectable correlation with run time, tool calls, web fetches or GPU use, section 6 reports. Agents that ran longer and computed more did not predict better.

Having read the trajectories, the authors blame where the computation is aimed. Agents often produce values that are easy to generate: molecular descriptors, energies from semi-empirical and density functional theory calculations, docking scores. Those values frequently do not govern the endpoint that will actually be measured. An agent predicting substitution efficiency computes the reaction energy and never touches the catalyst's steric hindrance or its interaction with the solvent. The numbers pile up without connecting to the answer.

A more painful pattern shows up in the trajectories as well. An agent drafts the right direction at the start, then revises its own order on an unverified assumption and submits something worse. The notion that longer work gets better runs backward here.

The point has been made before. SciPredict, released in April 2026, covered the same ability with 405 tasks across 33 subfields of physics, biology and chemistry, and found model accuracy of 14% to 26% against roughly 20% for human experts. The next part stands out. On the problems human experts judged predictable without running the experiment, expert accuracy climbed from 5% to 80%, while models stayed near 20% whether or not they were confident. Models have no way of telling when their own prediction is worth trusting, and the SPU paper cites SciPredict as earlier work in the same line.

The limitations the authors set out in Appendix B belong in the same reading. Restricting task sources to Nature Portfolio secured reproducibility but missed the diversity of other publishing routes, and the biosafety classifier can refuse legitimate prediction requests. Wet-lab reproducibility itself varies with laboratory practice, so even the answers the benchmark holds are not a flawless reference point.

> [!callout]
> Lay those three together and the bottleneck shows. The block is not a lack of access to tools. It is the missing judgment about which evidence and which calculation actually move the measured endpoint. Without that judgment, computation accumulates as cost rather than as score.

## Why Pebblous Is Watching This Result

This paper usually reads as science-AI news. For anyone who works with data, one part of it goes past the laboratory. The distance between 0.52 and 0.33 says little about chemistry or biology in particular. It records what happens when models trained on similar data are handed a question.

A common piece of practice runs into this. On important judgments, teams send the same question to several models and read convergence as higher confidence. It feels like cross-validation, and it rests on a hidden premise: that the models' errors are independent of one another. SPU measured how far that premise has broken. Convergence can mean the answer is right, and it can equally mean the models share an assumption. Seen from outside, the two look identical.

Only a reference point outside the models separates them. That is also why SPU set 16 private tasks aside. Checking whether a consensus is true requires a measurement that took no part in it. It is the same reason that work on making data usable by AI keeps lineage, measurement conditions and uncertainty as quality fields. The ground of trust is whatever you can check the answer against.

So the items to check before an AI agent is brought into a workflow shift as well. None of the three below appears on a model's performance table.

- Look at where the models came from before counting agreement. When models share training data and post-training recipes, their agreement resembles one sample counted several times.
- Track separately the hit rate on the cases a model called itself confident about. As SciPredict showed, confidence that does not move with accuracy is no use as evidence.
- Hold back a share of measurements the models never see. Data spent entirely on training and evaluation leaves nothing to check a consensus against.

The question at the end is the one from the start. When several AI systems are asked and their answers converge, do we have any way to tell a move toward the right answer from a move toward the same textbook? SPU wrote down, on the strictest scoring sheet there is, that the distinction is not yet easy to make.

## References

- 1.Tu, Z., et al. (2026). "[Science Prediction Universe](https://arxiv.org/abs/2611.15049)." arXiv:2611.15049, November 11, 2026. 36 authors, 52 pages. Full text in HTML at [arxiv.org/html/2611.15049v1](https://arxiv.org/html/2611.15049v1).
- 2.Madhushani Sehwag, U., et al. (2026). "[SciPredict: Can LLMs Predict the Outcomes of Scientific Experiments in Natural Sciences?](https://arxiv.org/abs/2604.10718)" arXiv:2604.10718, April 12, 2026. ICML 2026 poster.
