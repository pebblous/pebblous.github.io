---
title: Who Wrote the Answers in Nemotron 3.5 Super VL
subtitle: NVIDIA released 11 training datasets with the model, and the five that name the model behind their answers all point to a rival such as Alibaba, Google or DeepSeek
date: 2026-10-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Who Wrote the Answers in Nemotron 3.5 Super VL

_NVIDIA released 11 training datasets with the model, and the five that name the model behind their answers all point to a rival such as Alibaba, Google or DeepSeek_

## Executive Summary

> [!callout]
> This article looks at where the training data NVIDIA opened alongside its model files came from. Nemotron 3.5 Super VL, announced on October 15, is an open model anyone can download, and the eleven datasets used to tune it were released at the same time. Opening the weights while keeping the data closed is the industry habit, so opening the data at all is a welcome move.

> Open the largest of the eleven, a set of 3,850,582 records, and the answers inside it were not written by an NVIDIA model. They came from models built by Moonshot AI, Google and Alibaba. The license printed on the dataset card is a single line, OpenMDW-1.1, and three different sets of terms sit behind that line. Open all three and none of them leaves a condition on a model trained with this data. That answer is not in the license texts, though: for one of them it took a discussion thread in the repository to find.

> Sections 1 through 4 follow what is written in the dataset cards, the technical report, the published license documents and a repository discussion thread. Section 5, which asks how far the receiving side should be able to trace a dataset's lineage, is this article's own reading.

### Key Numbers

The first two are the size of what NVIDIA opened. The last two are what turned up once it was open.

Source: [Hugging Face dataset card](https://huggingface.co/datasets/nvidia/Nemotron-SFT-Instruction-Following-Chat-v4), [NVIDIA technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf) (October 14, 2026), and a full census of the public repositories (orcarouter.ai, October 2026).

<!-- stat-card -->
**3,850,582** — Records in the largest set opened — Instruction following and chat, 80.74GB before compression

<!-- stat-card -->
**11 sets** — Training data released with the weights — Posted over three days, October 12 to 15

<!-- stat-card -->
**0 sets** — Filled with answers from NVIDIA's own model — All five that name the model behind them name another company's

<!-- stat-card -->
**None of three** — Conditions that follow into a model trained on this data — Only two of the three say so in the license text itself

## What Came Out Alongside the Weights

Nemotron 3.5 Super VL is the open model NVIDIA announced on October 15. It holds 120 billion parameters in total, and 12 billion of them actually run when it handles a single question, because the model keeps many experts and wakes only the ones it needs. It reads text and images together, and a text-only sibling, Nemotron 3.5 Lightning, arrived the same day. The weight files had already been sitting on Hugging Face three days earlier, on October 12.

![NVIDIA's announcement image for Nemotron 3.5 Super VL, the open model released on October 15](./image/img-01-nemotron-launch.jpeg)
*▲ Nemotron 3.5 Super VL announcement image | Source: [NVIDIA official blog](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)*

The phrase NVIDIA used at the announcement was that it was opening the weights, the data and the recipe together. That means not only the model files but the data used to tune the model after training, and the procedure as well. NeMo Gym, its reinforcement learning environment, opened with them. The goal was stated plainly: let a company retrain the model on its own data in its own data center and own the result. The adopters named were Skydance, EY, Ramp, CrowdStrike, Perplexity and Salesforce.

On performance, NVIDIA reported 51.78% on SWE-bench Pro, a set of software repair tasks, and said the model beat the larger Nemotron 3 Ultra while running about 4.6 times fewer parameters at a time. The announcement also claimed an edge over Anthropic's Opus 5 and OpenAI's GPT 6.1 Sol on agent work. Those comparisons were run by NVIDIA itself, and on Terminal-Bench 2.1, a terminal-task evaluation, it has been pointed out that the number in the technical report and the number on the model card point in different directions.

Performance is not what this article is after. Opening the weights while closing the data is the current habit, so opening the data lets outsiders read what is inside. Once it could be read, something came into view.

## Inside the 3.85 Million Records

The largest of the eleven is Nemotron-SFT-Instruction-Following-Chat-v4. It holds 3,850,582 records and comes to 80.74GB. Inside, it splits three ways: 266,190 records of practice at matching a requested answer length, 914,716 of general conversation, and 2,669,676 of multi-turn exchanges that follow instructions. This is the material used to make a model do what it is told.

Building data like this is simple. You put questions to a model that is already good, keep the answers, and use the question-and-answer pairs as a textbook for a new model. The side that supplies the answers is called the teacher model. It is cheaper and faster than having people write every line by hand, and by now none of this is unusual.

What is unusual is that the dataset card says who the teachers were. There are three of them: Moonshot AI's Kimi-K2.6, Google's Gemma4-E4B-it and Alibaba's Qwen3.5-397B-A17B. NVIDIA's own Nemotron is not in that list. Mixed in with those are WildChat-1M, real conversations between people and chatbots collected and released by the Allen Institute for AI, and LMArena preference records, where people picked which model's answer was better. The first is published under ODC-By 1.0, the second under CC-BY-4.0. Neither stops you from using the material, but both ask you to credit the source, so two obligations exist at this point already.

The license at the top of the dataset card, though, is a single line: OpenMDW-1.1. The card also carries a note telling users to inspect the contents themselves, review the applicable licenses and judge whether the data suits their purpose. NVIDIA knows more than one thing is mixed in, and it has said so. What that note does not say is what is mixed in and which conditions come with it.

Laying out where each of those pieces entered produces the diagram below. The further left, the earlier the material; the far right is the model that will be trained on this data. The point is that the license differs from box to box, and the dataset card shows only one of those boxes.
