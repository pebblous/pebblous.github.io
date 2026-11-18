---
title: Machine Unlearning: A Model Can Pass the Check Without Forgetting
subtitle: An arXiv study finds models that change only their answers pass today
date: 2026-11-18
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Machine Unlearning: A Model Can Pass the Check Without Forgetting

_An arXiv study finds models that change only their answers pass today_

## Executive Summary

> [!callout]
> A study released this month reports that the checks used to confirm an AI model's claim of having deleted training data are easy to fool. It is "Rethinking the Verification of Machine Unlearning," by Lei Zhou, Youwen Zhu, and Rongke Liu. Most verifiers deployable in practice today infer deletion from the predictions and probabilities a model emits, and the authors built an attack that leaves the model's internals untouched while dressing up only those answers, then fed it into the checks.

> The disguise passed existing verifiers 97% of the time. The signal those verifiers read comes from a layer the operator can control at response time. RUV, the alternative the authors propose, compares intermediate representations in the original model and the model said to have unlearned, and it rejected 99% of those disguised submissions. For RUV to run, though, the verifying side has to be able to receive internal representations, and the experiments are confined to image classification models.

### Key Figures

The rates the paper reports fall into three pairs: the share the attack broke through, the share existing checks blocked, and the share the new check blocked. The pairs measure different things, so they have to be read side by side.

Source: the abstract and body of [arXiv:2611.18658](https://arxiv.org/abs/2611.18658) (submitted October 19, 2026; listed as new on November 17, 2026).

<!-- stat-card -->
**97.0 / 97.7%** — Share of fakes that passed the check — Means for class-level and for sample-level requests

<!-- stat-card -->
**5.1 / 3.6%** — Highest rejection rate among output-based checks — The best any of the three existing verifiers managed, on each of the two request types

<!-- stat-card -->
**99.5 / 99.8%** — Share of fakes RUV sent back — On the same two request types, by comparing intermediate representations

<!-- stat-card -->
**4.37 s** — One RUV verification — On CIFAR-10 with ResNet18. White-box TruVRF takes 91.2 seconds on the same setup

## The Law Says Delete, but Who Checks That It Happened?

The right to demand that your personal data be deleted is already written into law. Article 17 of the European General Data Protection Regulation (GDPR) establishes a right to erasure, and Article 36 of Korea's Personal Information Protection Act lets a data subject require deletion of their own personal data. For a row in a database the right is enforced cleanly. Delete the row, write the log entry, done.

A trained AI model is a different matter. One person's data does not live in a file of its own. It is scattered across hundreds of millions of weights. The technique for rolling back that influence alone is called machine unlearning, and it comes in two broad kinds. Exact unlearning retrains from scratch with the requested data removed. Approximate unlearning skips retraining and edits the weights to cancel the influence. The first is expensive, and the second is fast but offers a weak guarantee that anything was truly removed.

Regulators acknowledge the difficulty. The [Guide to Personal Data Processing for the Development and Use of Generative AI](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=G010030000&nttId=11439), published by Korea's Personal Information Protection Commission on August 6, 2025, states that where the scale or structure of a training dataset makes rights such as access, correction, and deletion hard to guarantee, a controller may inform the data subject of that fact and the reason behind it and offer alternative means. The same guide treats machine unlearning as a technology trend for responding to deletion requests.

> [!callout]
> One more layer stands between the right and the technology: verification, the step where someone outside the company checks whether a claim of deletion is true. The paper this article reads aims squarely at that layer.

## Today's Verifiers Read What the Model Answers

Verification was not set up from the start to read a model's answers. One family of methods plants a traceable signal before training begins and later checks whether it is gone. Another asks the provider to hand over records produced during the deletion itself. The paper groups these together as process-bound methods, which "either insert traceable signals before training or require the provider to expose detailed artifacts of the unlearning process." Ordinary model services rarely meet either requirement. A model that has finished training has no signal left to plant, and a running service seldom opens its internal records. That left post hoc verification, performed from the outside after training, as the family that could actually be deployed at scale.

What does a post hoc verifier look at? It feeds the data that was supposed to be deleted into the model and checks whether the answers look like those of a model that never saw it. The paper's four baselines each read a different signal. Accuracy checks whether performance on the requested data has dropped, LiRA uses membership inference to estimate whether that data was part of training, and TAPE measures the posterior difference between the original and the unlearned model. All three are black box: answers come back, and nothing else does.

The fourth baseline, TruVRF, works differently. It examines how gradients change between the original and the unlearned model, which calls for white-box access to parameters and a backward pass. It looks deeper, and it costs more. On CIFAR-10 with ResNet18 a single verdict takes 91.2 seconds and 2,528 MB of memory.

The paper's objection targets the premise the three black-box verifiers share. In the words of the abstract, these verifiers infer unlearning from "the final model response that remains under the provider's control." The provider under audit supplies the input to the audit. Accuracy and probability distributions are not internal states. They are what the model has chosen to emit, and what it emits can be edited at serving time.

The complaint that output alone cannot prove deletion is not new in itself. In the [robot demonstration unlearning audit](/report/robot-demo-unlearning-audit/en/) Pebblous covered in August, an edited policy that had recovered its task success rate was still indistinguishable, under a membership audit, from a policy that had erased nothing. That case was about an honest attempt at deletion failing to produce proof. This paper turns the situation around and asks what happens when a provider never intended to delete and simply wants to pass the check.

## Two Ways to Fake the Answer and Keep the Memory

The attack the authors built is called ODR, short for Output-Level Deceptive Response. The principle is in the name. The state in which the model still remembers the data stays untouched, and only the answer the verifier reads is dressed up to look like an unlearned model's answer. Two forms cover the two units a deletion request can arrive in.

### 3.1. ODR-Head: Rewiring Only the Classifier

This form handles class-level requests, where an entire category is to be removed. The backbone that produces representations is left alone, and only the classifier at the very end is retrained. The target fake output is built by mixing a uniform distribution with a perturbed copy of the original model's output. The model then answers that category as though it knew nothing about it, while the internal representation that recognized the category has not moved an inch. Because the classifier is retrained jointly to preserve accuracy on the remaining data, from the outside it looks like a healthy model that forgot exactly one category.

### 3.2. ODR-Gate: Intercepting the Query

Sample-level requests, where individual records are to be removed, get a form that never touches a parameter. When one of the registered queries arrives, it is intercepted, and the posterior for a non-member sample from the same class is returned instead. To the verifier this reads as a model that never trained on that record. Since the weights were not edited, accuracy on every other input holds.

The diagram below lays the model out from input to output and marks where each attack intervenes and where each check looks.
