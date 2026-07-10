---
title: The EU Ordered a 400-Billion-Parameter AI. Maltese Is 0.03% of the Data.
subtitle: Inside the Domyn-led EUROPA project and the reality of preparing data for 24 languages
date: 2026-06-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The EU Ordered a 400-Billion-Parameter AI. Maltese Is 0.03% of the Data.

_Inside the Domyn-led EUROPA project and the reality of preparing data for 24 languages_

## Executive Summary

> [!callout]
> On June 19, 2026, the European Commission selected the EUROPA consortium to build the bloc's own frontier AI model. The Italian company Domyn leads it, with Germany's Fraunhofer on board. The promise is not a simple one: an open-source model of more than 400 billion parameters, trained in all 24 of the EU's official languages, delivered within a year. The ambition is real. Whether it is achievable, though, turns on what the announcement said least about.

> The number worth watching is not 400 billion. Maltese accounts for 0.03% of Common Crawl, the giant web corpus. The moment 24 languages became a condition, the real test stopped being the size of the model and became the training data for the smallest language. EuroHPC has carved out a year of compute, but who will collect the Maltese and Latvian corpora, and at what quality, has not yet been settled.

> This gap is what turns 24 languages into a technical and political condition, not a feature. Weigh the state of low-resource-language data and the risk of betting a year on a single consortium, and the smallest number in the announcement outlasts the largest one.

The tension in the announcement lives in four numbers. The model is 400 billion-plus parameters; Maltese, the smallest official language, makes up 0.03% of web data; two American companies hold roughly 80% of the capital; and the secured compute runs for one year. The easy numbers and the hard numbers are sitting in the same room.

<!-- stat-card -->
**400B+** — EUROPA model size — 24-language open-source MoE

<!-- stat-card -->
**0.03%** — Maltese share of web data — Common Crawl; low-resource scarcity

<!-- stat-card -->
**~80%** — Capital held by two US firms — OpenAI + Anthropic, Forbes AI 50

<!-- stat-card -->
**1 year** — EuroHPC compute support — 2.5% of total capacity; data pacts TBD

## What Just Happened

The European Commission named the EUROPA consortium the winner of its "Frontier AI Grand Challenge." The lead company is Domyn, headquartered in Milan, an outfit that has built AI for regulated industries and was formerly known as iGenius. It is run by CEO Uljan Sharka, born in 1992. Germany's research institute Fraunhofer joined as a core partner.

The terms of the grant are explicit. Build a Mixture-of-Experts model of more than 400 billion parameters, train it in all 24 of the EU's official languages, and release the weights as open source. For compute, the project gets 2.5% of EuroHPC's total supercomputing capacity for one year. Sharka called EuroHPC an "underrated strategic asset," arguing that training a frontier model once takes far less compute than serving it to hundreds of millions of people.

Why now? Behind it sits a concentration of capital. On the Forbes AI 50, two companies — OpenAI and Anthropic — captured roughly 80% of all money raised. In the first quarter of 2026, those two plus xAI and Waymo, just four firms, absorbed 65% of global venture investment. The words of Henna Virkkunen, the Commission's executive vice-president for tech sovereignty, lay the context bare: "Europe cannot remain a passive consumer of technology developed elsewhere."

![European Commission headquarters — the Berlaymont building in Brussels, Belgium](./image/img-01-berlaymont-eu-commission.jpg)
*▲ The Berlaymont, Brussels — EU Commission headquarters where the EUROPA consortium selection was announced | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Berlaymont_building_european_commission.jpg) (CC BY-SA 2.5)*

## Why 24 Languages Is a Condition

The "all 24 languages" requirement is not a marketing line. In the EU, language is a matter of citizenship. If a model is fluent in English and German but poor in Maltese and Latvian, citizens of those language communities become, in effect, second-class AI users. The risk the Commission's own documents flag is exactly that: the fewer the resources a language has, the worse the performance, and the flimsier the safety evaluation.

![Aerial view of Valletta, Malta — the EU member state with the smallest official language by web data share](./image/img-02-valletta-malta.jpg)
*▲ Valletta, Malta from the air. Maltese accounts for 0.03% of Common Crawl — the entire internet's text data | Source: [Jonathan Mercieca / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Valletta,_Malta_(Aerial_View).jpg) (CC BY-SA 4.0)*

So language equality is both a technical and a political condition. The EU would struggle to wave a model through its regulatory gate if that model prioritized English and bolted on the rest. With the AI Act in force, "fair multilingual performance" is closer to a requirement than a choice. Nailing 24 languages down as a condition from the outset reads as a judgment that the requirement cannot be met by retrofitting languages later.

> [!callout]
> The crux is not translation ability. To treat 24 languages as equals, the model has to be trained well enough in each one. And training is a matter of data. The moment the condition is set in terms of language, the bottleneck moves automatically to data.

## The Real Bottleneck Is the Corpus

The numbers sketch the shape of the problem. In Common Crawl, the standard source of web data, Maltese makes up 0.03% of the total, Irish 0.07%, and Latvian 0.09%. Add up the entire lower-resourced half of the EU's languages and you still do not reach 2.4%. Scraping together a small language from an internet filled with English is a different kind of labor from training a large model.

The data composition of EuroLLM 22B, regarded as the largest open-source European model, makes the reality plainer. English is 50%, the five major Western European languages are 27%, high-resource global languages are 14%, and all the remaining EU languages combined come to just 9%. Even up-sampling low-resource languages by as much as 2.5x did not erase that imbalance. The 400 billion parameters EUROPA is aiming for is about 18 times the size of EuroLLM 22B, but scaling up the model does not conjure Maltese sentences that were never there.
