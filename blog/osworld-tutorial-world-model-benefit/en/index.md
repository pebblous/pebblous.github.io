---
title: In OSWorld-Tutorial, a Written Guide Beats Perfect Foresight
subtitle: Oregon State University gave agents the true next screens free on 360 desktop tasks, and the success rate went from 51.7% to 51.6%
date: 2026-11-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# In OSWorld-Tutorial, a Written Guide Beats Perfect Foresight

_Oregon State University gave agents the true next screens free on 360 desktop tasks, and the success rate went from 51.7% to 51.6%_

## Executive Summary

> [!callout]
> A computer-use agent shown the true next screen for free did not score any higher, as long as a task tutorial sat beside it. Researchers at Oregon State University posted the measurement to arXiv on November 2. The field has been reporting that agents do better when a world model lets them picture the next screen and pick an action against it, and those methods almost always read a task tutorial as well. Tutorial, judge and forecast went in as one bundle, so which of the three was doing the lifting had never been measured on its own.

> The team attached tutorials to existing task suites to build OSWorld-Tutorial and ScienceBoard-Tutorial, then pulled the three pieces off one at a time. Across 360 tasks with fifteen actions allowed per task, the baseline with neither tutorial nor judge succeeded 42.5% of the time, and adding both brought it to 51.7%. Laying free ground-truth screens on top returned 51.6%. The 9.2 points came from the tutorial and the judge, and perfect foresight added nothing. Take the tutorial away, though, and those same ground-truth screens add 4.2 points to the success rate. The world model filled the hole the tutorial had been filling.

> Sections 1 through 5 follow what the paper measured and what it left open. Section 6 moves the result onto work documents and completion criteria, and that move is this article's reading, not the paper's.

### Key Numbers

Source: Nguyen et al., [Computer-Use Agents Gain Little Benefit from a World Model When Conditioned on Tutorials](https://arxiv.org/abs/2611.04073), arXiv:2611.04073 (2026)

<!-- stat-card -->
**51.7% → 51.6%** — What free ground truth bought — A tutorial-fed agent handed the true next two screens at no cost. OSWorld-Tutorial, 360 tasks, 15-step budget

<!-- stat-card -->
**+9.2%p** — What tutorial and judge lifted — 42.5% to 51.7% on the same tasks, with no forecasting of any kind in play

<!-- stat-card -->
**+4.2%p** — The effect once the tutorial is gone — Only without a tutorial did true future screens carry 43.8% to 48.0%

<!-- stat-card -->
**48.3% → 49.3%** — The same shape in science software — ScienceBoard-Tutorial, 169 tasks. The authors record this difference as not statistically significant

## The AI That Pictures the Next Screen

A computer-use agent is an AI that looks at a screen and moves a mouse and keyboard the way a person would until the job is done. It sorts files, fixes the formatting in a spreadsheet, changes a setting in an installed program. Because it sees one screen and plays one move, an agent that cannot look a few moves ahead walks into the wrong menu and never finds its way back.

The prescription for that is the world model. Before the agent presses a button, it pictures what the screen will look like afterwards, and it picks the action whose imagined future looks more plausible. The idea runs like a chess player reading a few moves ahead, and the last few years have produced several reports of the method raising scores.

Those reports, though, did not measure the world model on its own. Two other things usually ride along in the same system. One retrieves a tutorial that describes how the task is done and reads it alongside the screen; the other generates several candidate actions and appoints a judge to pick one. Scores rose, and nobody could say whether the imagination, the tutorial or the eye for choosing had done it. That is where the paper starts.

## Attaching the Tutorials Came First

To take the pieces apart, the team needed a task suite with the tutorials already in place, and none existed. So they built two. OSWorld-Tutorial holds 360 Linux desktop tasks, 110 of them carrying human-verified online tutorials and the remaining 250 carrying tutorials written by Gemini 3.8 Flash. OSWorld underneath it is the scoreboard cited most often for computer-use agents, and Pebblous looked at the race to climb it in [Agents Are Data](/report/ui-tars-desktop-multimodal-agent-stack/en/). ScienceBoard-Tutorial holds 169 tasks in science software, where the programs covered (Celestia, ChimeraX, GrassGIS, KAlgebra, Lean, TeXstudio) have few enough users that usable online tutorials barely exist. All 169 of those tutorials are generated.

The comparison baseline built on top is RAG-PolicyJudge, RAG-PJ for short. The policy takes the current screen, the history so far, the task instruction and the tutorial, and emits three candidate actions at once; the same model puts on the judge's hat and picks one of them. Turning the chosen action into real screen coordinates falls to UI-Venus-1.5. The judge sees the three candidates, the task instruction, the trajectory so far and the tutorial.

Two ways of adding a forecast sit on top of this. The first describes the next state in words, as earlier work does. Instead of rendering a picture, the model writes a sentence along the lines of "pressing this button opens this window," and the sentence goes to the judge with everything else. The team took two published methods of this kind, WebDreamer and R-WoM, as they are, and had each look one step and then two steps ahead.

The second is the oracle condition at the heart of the experiment. The agent predicts nothing; it simply receives the real screenshot that the action produces. For each candidate action the team saves the state of the virtual machine hosting the environment, presses once, and rolls back to the saved point. No world model can ever be more accurate than that, and not a cent of compute goes into the forecast itself. In exchange, the condition cannot exist in the field, because seeing the future means living it first. If scores fail to rise even here, one conclusion is left. The bottleneck is not in the accuracy of the forecast.
