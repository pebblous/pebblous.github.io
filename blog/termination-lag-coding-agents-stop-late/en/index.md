---
title: Termination Lag: Coding Agents Find the Fix and Keep Going
subtitle: In runs that reach a correct patch, the first source edit is already correct 38-82% of the time, and 35-60% of the steps come after it
date: 2026-11-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Termination Lag: Coding Agents Find the Fix and Keep Going

_In runs that reach a correct patch, the first source edit is already correct 38-82% of the time, and 35-60% of the steps come after it_

## Executive Summary

> [!callout]
> A new measurement puts real distance between the moment a coding agent produces a correct fix and the moment it stops working. The paper is titled Termination Lag, and it went up on arXiv on November 11, 2026. The method is plain. Intercept and store every repository patch an agent produces during a run, then score each one afterward with the benchmark's official evaluation procedure. That recovers, after the fact, the step at which a correct answer first existed, regardless of when the agent decided it was done.

> The scores land early in the run. Of the runs that reach a correct patch, 38-82% were already correct at the agent's first source-code edit. The run does not end there. In the four core settings, a median of 35-60% of all steps came after the first correct patch, and most of that stretch went into checking the fix and searching the repository again. In 1-8% of runs the agent kept working, broke its own correct patch, and finished on an incorrect one. One caveat sits underneath all of it: the unit counted here is the agent step, not the token and not the invoice.

> Sections 1 through 4 carry figures and terms taken from the body and appendix of the paper posted on arXiv. Section 5, which lays the result over the cost structure of an organization that has already put agents to work, is this article's own interpretation.

### Key Figures

Source: [arXiv:2611.14960](https://arxiv.org/abs/2611.14960), Tables 1, 2 and 3.

<!-- stat-card -->
**38-82%** — Runs whose first code edit was already correct — Counted over runs that reach a correct patch

<!-- stat-card -->
**35-60%** — Share of a run that comes after the answer — Median range across the four core settings

<!-- stat-card -->
**16 vs 57 steps** — Steps taken after the answer appeared — Medians for Qwen3-Coder and Laguna-XS.2 on the same task set. Their step budgets differed too, 100 against 250

<!-- stat-card -->
**1-8%** — Runs that ended with a correct fix undone — The share that stopping at the first correct patch would have kept

## Every Patch in a Run, Scored Separately

A benchmark score comes from a single patch, the last one submitted. The authors illustrate what that hides with one scene. Two agents apply the same correct edit to the same task at step 10. One submits on the spot; the other reruns the tests, inspects the callers, and reviews its own diff for 40 more steps before halting. Both receive identical credit. A score built only from the final patch folds two different abilities into one number: producing a correct fix, and recognizing that the fix is complete.

An agent cannot tell during a run whether the fix it just wrote is correct. The benchmark's grading tests are hidden from it, and whether the edited code meets the requirement is left to its own judgment. To measure when a correct answer arrived, the scoring device has to sit outside the run.

That device is a logging proxy. It sits between the agent and the model endpoint and records the repository patch of the moment before the next model request goes out. Each patch is built through a temporary Git index as the difference between the current repository state and the task's base commit, so the agent's working repository is left untouched. Once a run is over, the recorded patches are scored in isolated containers under the benchmark's official procedure. None of that scoring travels back to the agent. The design reads off the step at which a correct patch first existed without touching a single decision made during the run.

Those two step numbers give three metrics.

- **Time to first correct patch (TTFCP)** is step F, the earliest step whose patch passes the official evaluation.
- **Termination lag (TL)** is the final step S minus F, the number of steps executed after the correct answer appeared.
- **Normalized termination lag (NTL)** is (S−F)/S, the fraction of a run that falls after the correct answer.

▲ Pebblous original diagram. A reconstruction of the paper's measurement device — logging proxy plus after-the-fact isolated grading. | Source: [arXiv:2611.14960](https://arxiv.org/abs/2611.14960)

Five models were measured. Qwen3-Coder-30B-A3B, Laguna-XS.2, Claude Haiku 5.5, GPT-6 Luna and Seed-OSS-36B all ran on OpenHands, and Qwen3-Coder ran a second time on mini-SWE-agent to test whether a change of framework changes the picture. The tasks are the 500 of SWE-bench Verified, the 300 of SWE-bench Multilingual, and SWE-bench Pro. Each task was run once.

The limits placed on a run differed by model. Qwen3-Coder had a budget of 100 steps and a 131K-token context window, Laguna-XS.2 one of 250 steps and 256K tokens. Claude Haiku 5.5 and GPT-6 Luna had 100 steps, Seed-OSS 150 steps and 131K tokens. Any comparison of step counts across models has to carry that condition along.

With the scoring done, the correct answers sat early. Among runs that reach a correct patch, the first source-code edit was already correct in 82% of Qwen3-Coder's runs on Verified and 66% on Multilingual. For Laguna-XS.2 the figures are 70% and 48%, for GPT-6 Luna 80% on Verified, and for Seed-OSS 38% on Pro. The number of patches attempted on the way to correctness stays between 1.3 and 3.6 on average.

The first touch on the code comes late in its own right. The median step of the first source edit runs from 9 to 45 depending on the setting. For Qwen3-Coder on Verified, the median first edit and the median first correct patch are both step 30. The code goes untouched for 30 steps, the touch is already the answer, and 16 more steps follow. The stretch that makes a run long is not only the part after the answer.

Intermediate patches have been examined before. One study reported correct fixes that appear mid-run and are then lost to later edits, and another scored the patch after every action on 19 tasks to inform restart decisions. Neither counted the steps between the first correct patch and termination in a systematic way, and that is the gap the authors claim for this work.

## Post-Fix Steps Differ by Model

The trouble starts after that. A run carries on well past the correct answer, and how far it carries on depends on the model.

| Metric (median) | Qwen3-CoderVerified | Qwen3-CoderMultilingual | Laguna-XS.2Verified | Laguna-XS.2Multilingual |
| --- | --- | --- | --- | --- |
| Solve rate | 43.8% | 22.3% | 56.0% | 48.0% |
| First correct patch | 30 | 34 | 38 | 50 |
| Final step | 48 | 54 | 95 | 108 |
| Steps after the answer | 16 | 18 | 57 | 56 |
| Share after the answer | 35% | 37% | 60% | 54% |
| Input context growth | +30% | +28% | +78% | +55% |

▲ Table 1 from the paper. Every row below the solve rate is a median over solved runs, and context growth is the relative increase in the model's input context from the first correct patch to the final step. | Source: [arXiv:2611.14960](https://arxiv.org/abs/2611.14960)

Qwen3-Coder reaches a correct patch at step 30 on Verified and stops at 48. The 16 steps after the answer amount to 35% of the run. Laguna-XS.2, on the same task set, gets there at step 38 and keeps going to 95: 57 steps after the answer, 60% of the run. Same benchmark, same framework, and one model spends another third of its run after the answer while the other spends well over half.

The two step counts did not come from the same conditions. By the budgets set out above, Laguna-XS.2 was allowed 2.5 times the run length of Qwen3-Coder and nearly twice the context window, so part of that 57 is simply room to keep going. Runs that ended by hitting the step or context limit came to 1-4% per setting. The median of 60% therefore rests mostly on runs where the agent let go on its own.

▲ Pebblous original diagram. The medians of Table 1, placed on one axis. | Source: [arXiv:2611.14960](https://arxiv.org/abs/2611.14960)

The input context swells over the same stretch. From the first correct patch to the final step, the input tokens the model receives rose by 28-30% for Qwen3-Coder and 55-78% for Laguna-XS.2. As a run grows longer, each individual step grows heavier with it.

The authors also worked the distance out as a saving, assuming an oracle that stops each run at its first correct patch and leaves runs that never reach correctness unchanged. Under that assumption, 35% and 37% of the steps vanish for Qwen3-Coder, 60% and 54% for Laguna-XS.2, while every originally solved task is preserved. The figure is a ceiling on what better timing returns, and nothing past that ceiling is claimed.

A model that finishes quickly is in the same position. Claude Haiku 5.5, in the appendix, reaches a correct patch at step 9 on Verified and then runs 10 more steps. The absolute count is small and the share is 54%. Changing the framework reads much the same. Qwen3-Coder on mini-SWE-agent puts the first correct patch at step 22 with 12 steps after it, a share of 37% against the 35% it records under OpenHands.

The two frameworks part ways elsewhere. On the same 500 tasks the solve rates are 43.8% and 32.4%, and the median uncached compute tokens per task are 39.0K and 22.2K. This comparison is the single place where tokens were counted directly, and across two setups whose token use differs by nearly double, the share of the run spent after the answer stayed where it was.

> [!callout]
> None of this appears on a model's price list. On the same task with the same tools, one model spends another third of its run after the answer and another spends more than half. If the operator is the one who chooses where the step budget sits, the cost of finishing a single task is settled here rather than at the per-token rate.

## Verification and Exploration, Where the Extra Steps Go

What is the agent doing in those steps after the answer? For trajectories that end successfully, every step past the first correct patch was sorted into five kinds by rules over the recorded tool calls and their arguments.

Verification takes the largest share. Running the repository's existing tests, writing and executing new test scripts, and building the project account for 48% to 63% of those steps depending on the setting. Exploration comes next at 15-29%: opening files, searching the repository, and reviewing its own changes through Git. Steps that edit the source again stay at 2-6%. Seed-OSS alone jumps to 19%. The remainder is wrap-up and reasoning.

▲ Pebblous original diagram. The five shares in the upper half of Table 3, stacked by setting. | Source: [arXiv:2611.14960](https://arxiv.org/abs/2611.14960)

In every setting, verification and exploration together pass 70%. Most of the steps after the answer go into covering ground already covered rather than into changing code again. The categories were assigned automatically, by rules over the recorded tool names and their arguments. No one read the steps one by one.

## Runs That Break Their Own Correct Patch

Once a patch has passed the correctness check, nothing that follows can make it more correct. The score has only one direction left to move in. When the fix sits through the review intact, the extra work costs money and nothing worse. It does not always sit intact. The fate of every run that reached a correct patch was tracked as well, and 1-8% of them, depending on the setting, ended on an incorrect patch. Stopping at the first correct patch would have left those runs standing as successes.

The share that holds correctness to the end, the share that breaks it and recovers, and the share that breaks it and fails differ a good deal from setting to setting.

| Setting | Stays correct to the end | Breaks, correct again | Breaks, run ends unsolved |
| --- | --- | --- | --- |
| Qwen3-Coder · Verified | 96% | 3% | 1% |
| Qwen3-Coder · Multilingual | 82% | 10% | 8% |
| Laguna-XS.2 · Verified | 84% | 11% | 5% |
| Laguna-XS.2 · Multilingual | 61% | 31% | 8% |
| GPT-6 Luna · Verified | 88% | 8% | 4% |
| Seed-OSS · Pro | 79% | 17% | 4% |

▲ Table 3 from the paper, lower half. Shares over runs that reach a correct patch at least once. | Source: [arXiv:2611.14960](https://arxiv.org/abs/2611.14960)

Of the tasks Qwen3-Coder solved on Verified, 96% held correctness to the end and 1% broke and stayed broken. The far end is Laguna-XS.2 on Multilingual, where the share that holds drops to 61%, 31% break and come back, and 8% never come back. The settings where breaking is frequent and the settings where the post-answer stretch is long do not always line up. Qwen3-Coder on Multilingual has a post-answer share of 37% with 8% ending broken, higher than Laguna-XS.2 on Verified at a 60% share and 5%.

Why a patch breaks goes unanswered. Which kind of later edit undoes a correct fix, whether over-eager refactoring or an unnecessary test, was left out of the analysis. Only the frequency is reported.

The authors offer a condition rather than a remedy. A stopping rule worth having would decide when to submit using only the evidence gathered during the run. This measurement, which learns correctness by running the official scoring afterward, cannot be used inside a run.

The limitations set down by the authors belong in the same reading.

- Three benchmarks, five models, two frameworks, one run per task. Nothing guarantees the same picture in another environment.
- Cost was approximated by step count alone. Token consumption and money were not measured directly.
- Solved runs that reached the step or context limit instead of halting on their own came to 1-4% per setting. These are counted at their final step.
- Step categories were assigned by rules over the recorded tools and their arguments.
- Seed-OSS solves few tasks on SWE-bench Pro, so its statistics rest on a small sample.

## Why Pebblous Is Watching This Paper

A conversation about the cost of adopting AI usually ends at the price list. So much per million tokens, which model is cheaper, and the decision follows the table. This study adds an axis the price list does not carry. With the model, the task and the tools all held constant, somewhere between a third and more than half of a run is spent after the answer is already in hand.

An agent that knows when to stop is an agent that can read what it has already done. The evidence in front of it is the output of the tools it called, the results of the tests it ran, and the diff of the patch it wrote. That roughly half the post-answer steps go to verification reads as the time an agent spends holding all of that evidence without reaching a conclusion. It looks less like a problem to be solved by swapping in a different model and more like a question of whether the record an agent leaves behind has a shape that a judgment can be made from.

How a record is written and how it is tidied up changes the judgment of whoever picks the work up next, and [cleaning an agent's history](/blog/agent-history-cleaning-record-world/en/) covers that on its own. How the harness around a run moves the benchmark score of one and the same model is in [the weak harness, not the weak model](/report/agent-loops-harness-over-model/en/). What this study measured sits between those two: not the moment before a record is handed over, and not the stage where a harness is designed, but the point where a single run is drawing to a close.

For an organization that has put agents to work, three things belong on the checklist.

- Count the post-answer stretch on its own. The logs will not tell you which step turned into the answer; that takes scoring the intermediate states afterward, the way this study did. It is worth doing once. An average run length alone will never surface it.
- Set a limit on verification. When the same passing test is rerun under the same conditions again and again, the repetition produces no new information.
- Treat an undone fix as an incident. A run that was correct in the middle and wrong at submission deserves its own count, apart from a run that never solved the task. The 1-8% looks small, yet it is the share that stopping alone would have turned into success.

Does the agent your company runs know when the job is done? If it is spending money without knowing, that fact is written in the run log rather than on the model's price list.

## References

- 1.Cim, M., Topcu, B., Kandemir, M. T. (2026). "[Termination Lag: Coding Agents Solve Early but Stop Late](https://arxiv.org/abs/2611.14960)." arXiv:2611.14960 (The Pennsylvania State University).
