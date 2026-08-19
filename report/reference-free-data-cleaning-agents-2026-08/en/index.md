---
title: Seven Cleaning Agents, and Not One Got the Value Right
subtitle: 126 controlled runs on financial, clinical, and environmental data pulled detection and repair apart
date: 2026-08-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Seven Cleaning Agents, and Not One Got the Value Right

_126 controlled runs on financial, clinical, and environmental data pulled detection and repair apart_

## Executive Summary

> [!callout]
> Say you run into one strange value. There is no clean original to confirm whether it is an error or a rare but genuine observation. Reference-free automated cleaning means acting on the data in that state, and most working data sits exactly there. One researcher injected controlled corruption into financial, clinical, and environmental datasets and ran seven agent configurations 126 times. The best error finder turned out to be deterministic profiling that never once called a language model, with the most heavily equipped configuration behind it. The real finding, though, was not the leaderboard but what sat underneath it. Practically none of the seven configurations managed to replace a wrong value with the right one.

> The best finder was not the safest one. The deterministic profiler that led on detection also led on the rate at which it touched healthy values, because it treated any statistical outlier as an error on the spot. The most sophisticated configuration, by contrast, logged zero safety violations — not out of caution, but because it never issued a single repair decision. The paper records this as conservative non-repair rather than an achievement. Finding well and refraining from careless fixes were separate axes, and no configuration won both at once.

> That changes the question an organization should ask before automating cleaning. Not how well does it find, but does a record survive of what was changed and why. In this study every reversible script that ran succeeded and provenance logs were written in structured form, yet the overlap between a decision and the evidence it cited was almost nil. Of the three boxes a clinical audit demands, original-value preservation and attribution of the change were filled and only the reason was left blank. Retrieving evidence, ranking it, and logging it is one job; anchoring a decision in that evidence is another.

<!-- stat-card -->
**0.561 / 0.421** — Detection F1: deterministic rules vs. the best LLM configuration — The configuration that never called a model finished first

<!-- stat-card -->
**0.028** — The only non-zero expected-repair match rate among seven configurations — The other six were all 0.000

<!-- stat-card -->
**0.041** — Lexical overlap between a decision and the evidence sentence it cited — The highest value among configurations running citation-alignment checks

<!-- stat-card -->
**72 / 72** — Reversible scripts that executed successfully — The ability to undo landed before the ability to fix

## No one can tell you the value is wrong

Data cleaning research has long been conducted with the answer key on the table. You take a clean original, inject errors into it, and score whether the system restores the original. Practice does not work that way. When a radiation sensor reports a reading ten times its usual level, no file anywhere tells you whether the instrument failed or an event actually occurred. The same holds for an extreme number in a clinical record that may be a typing error or a rare outcome. Between the fact that a value looks strange and the judgment that the value is wrong lies a gap nobody crosses on your behalf.

An experimental study posted to arXiv on 14 August 2026 by Hadi Fadlallah of the Lebanese University of Science and Arts turns that gap into the experimental condition. Under it, the paper redefines cleaning as making evidence-based decisions rather than changing values. What the system must produce is not repaired data but decisions plus the record that supports them. That redefinition drives the design of every metric that follows.

### Limits worth knowing before you read on

Before carrying any conclusion out of this study, it is more honest to state what it is not. Every number below holds inside these conditions, and most of them become false claims if the conditions travel separately.

- **It is a single-author preprint that has not been peer reviewed.** v1 dated 14 August 2026, CC BY 4.0. Code and artifacts are currently available only through an anonymized link.
- **Exactly one language model was used.** Every configuration ran `openai/gpt-oss-20b` through OpenRouter — a 20-billion-parameter open-weight model — at temperature 0.2, with a 3,000-token output cap and a sample of at most 10 records. No frontier model appears anywhere in the study. Nothing here should be read as "LLMs in general lost to rules."
- **The evidence base is 17 fixed local documents.** The evidence retrieval described later is not a web search; it searches 17 documents placed in the project in advance.
- **There are no statistical tests.** No p-values, no confidence intervals, no significance testing. The author states that three repetitions are too few to infer variability.
- **Injected errors may be more regular than naturally occurring ones.** The paper's internal-validity section concedes this directly.

What still makes the study worth reading is its metric design. Instead of scoring a cleaning system on a single accuracy figure, it measures detection, repair, evidence, restraint, reproducibility, and cost separately — and the picture that emerges is that no configuration wins all six axes at once. The table below is the skeleton of the experiment.

| Item | Value |
| --- | --- |
| Runs | 3 datasets × 2 modes × 7 configurations × 3 repetitions = 126 runs. Zero terminal failures |
| Datasets | German Credit (finance, UCI) · EHR (clinical, Kaggle) · Radiation (environmental monitoring) |
| Two modes | Controlled synthetic corruption (ground truth available, so scoring is possible) / raw data (no ground truth, descriptive reporting only) |
| Injection scale | 30 · 33 · 30 errors per dataset per repetition, plus 5 valid signals each. A fresh corrupted file is generated for every repetition |
| Model settings | openai/gpt-oss-20b, temperature 0.2, 3,000-token output cap, sample of at most 10 records |

********************``Source: Fadlallah (2026), [arXiv:2608.14765](https://arxiv.org/abs/2608.14765), Tables 7 and 8

### The choice is not just fix or don't fix

The paper defines six classes of decision a system can reach when there is no ground truth, and requires it to choose one for every issue it finds. This list is the single most portable asset in this report. What your in-house cleaning pipeline should output, and what you should demand of a vendor, is all contained in it.

| Decision class | When to use it | The paper's example |
| --- | --- | --- |
| Safe repair | The error is unambiguous and the correction is directly supported by a rule, documentation, or an executable check | Standardizing timestamp formats; converting a documented placeholder code to null |
| Conditional repair | The correction is plausible but rests on an explicit assumption | A unit conversion where the source unit is strongly inferred but not documented |
| Flag only | The value is suspicious but there is not enough evidence to change it | Sudden spikes, unusual transactions, unexpected sensor readings |
| Preserve | The value is unusual but may be a meaningful rare event | Rare clinical outcomes, extreme environmental readings, genuine financial shocks |
| Human review | The case is high-risk, ambiguous, or unresolved | Conflicting evidence, or uncertain domain interpretation |
| Reject repair | A proposed fix is insufficiently supported or violates policy | Trying to replace an outlier merely because it is statistically extreme |

************************Source: same paper, Table 6. Hold on to that last row and the twist in Section 3 reads far more sharply

### Seven configurations, one capability at a time

The comparison runs across seven configurations given the same task. Two are control baselines; the other five form a series in which each adds one capability to the one before it. To read which addition improved what, you need this lineage in hand first.

| Configuration | Capabilities |
| --- | --- |
| A0 | Language-model baseline given only the schema and a sample |
| A1 | Deterministic profiling and checks baseline. No model calls at all |
| A2 | Adds a profiling summary to the language model |
| A3 | Adds executable Python checks and generation of reversible scripts |
| A4 | Adds controlled local evidence retrieval |
| A5 | Adds source ranking and citation-alignment checking |
| A6 | Adds a conservative repair policy. Everything switched on |

****************************A0 and A1 are control baselines, not consecutive steps in a single-factor ablation. Capability-level comparisons hold only across A2→A3 (tools), A3→A4 (evidence retrieval), A4→A5 (ranking and alignment), and A5→A6 (conservative policy)

The capability lineage across the seven configurations looks like this. A0 and A1 sit side by side as control baselines; from A2 on, each configuration stacks one capability on top of the one before it.
