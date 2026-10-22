---
title: MLE-bench: Can AI Tell Whether Its Own Idea Will Work?
subtitle: A new arXiv paper trained 288 AI-proposed ideas on eight Kaggle tasks, and the best-scoring model explained only half of the spread in the results
date: 2026-10-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# MLE-bench: Can AI Tell Whether Its Own Idea Will Work?

_A new arXiv paper trained 288 AI-proposed ideas on eight Kaggle tasks, and the best-scoring model explained only half of the spread in the results_

## Executive Summary

> [!callout]
> This article looks at "Can LLMs predict the outcomes of machine learning experiments?", posted to arXiv on October 15, 2026. One question runs underneath it. Should an AI be handed the choice of which experiment to run as well? The authors took eight tasks from MLE-bench, a set of problems drawn from Kaggle competitions, and ran 288 improvement ideas that AI had proposed through real training, one at a time, recording how far each one moved the score. Then they asked five frontier models to put a number on that change before any training started.

> The best score belonged to Claude Opus 5.5, with a coefficient of determination of 0.49. Half of the spread between ideas was called in advance, and the other half only showed up once the training ran. The more striking part is the direction of the misses. All five models missed the same way. The more an idea moved the score, the smaller they judged that movement to be.

> Sections 1 through 4 follow what is written in the paper and in the public repository. Section 5, which puts this result next to the judgment calls behind collecting data, is this article's reading.

### Key numbers

The first two show how far the best model got. The last two say how much that score moves across tasks and across models, and what the judgment rests on.

Sources: [arXiv:2610.22599](https://arxiv.org/abs/2610.22599) · [autolab-ai/EV-estimation](https://github.com/autolab-ai/EV-estimation) (October 15, 2026)

<!-- stat-card -->
**0.49** — Best model's coefficient of determination — Claude Opus 5.5. Its predictions tracked only half of the spread between ideas

<!-- stat-card -->
**0.61** — Best model's regression slope — At 1.0 the size of the change is right too. All five models sit below 1.0

<!-- stat-card -->
**0.02–0.94** — Spread of the score across tasks and models — The low end is leaf classification and the high end toxic comment classification, two different models on two different tasks

<!-- stat-card -->
**288** — Ideas that were actually trained — Not predictions weighed against predictions. Each one was run and matched against a measured result

## Writing Down the Result Before the Training Runs

Stories about AI helping with research usually turn on how well it solves the problem. MLE-bench is one of those yardsticks. It collects Kaggle competition tasks and watches how high an agent can score on them. The place the authors of this paper found empty sits one step earlier. Choosing which idea to run happens before any training does, and there was no yardstick for whether that choice was right.

The reason that place is empty is that training is slow. The space of design choices is endless and a single run costs time and money. Neither a person nor an AI can run all of them and pick afterward. Both narrow the field with a sense of which option will work and then run what is left. How often that sense is right is the number nobody had written down, and that is what the authors point to.

The usual way to measure it is to put two ideas side by side and ask which one is better. The authors did not take that route. A question about preference says which one is on top and says nothing about how far apart the two are. Instead they had the models write down a number: how much the score would move.

The procedure runs like this. Across eight MLE-bench tasks, the authors gathered 288 improvement ideas that models had proposed themselves. The ideas came from models rather than from people, which later made it possible to separate a model's own ideas from everyone else's and compare the two. The eight tasks break down into two on text (spooky author identification, toxic comment classification), four on tables (random acts of pizza, the May 2022 tabular playground series, leaf classification, New York taxi fare prediction), and two with images in them (dog breed identification, denoising dirty documents). Each idea was then written into the code, trained for real, and scored against an untouched baseline to record the change. Five models (GPT-6 Astra, Claude Opus 5.5, Claude Fable 5.1, Kimi K3, GLM-5.3) wrote their own predictions before seeing any of those results. They received the description of the idea and the code change, but not the outcome. The raw data and the predictions are public in the repository.
