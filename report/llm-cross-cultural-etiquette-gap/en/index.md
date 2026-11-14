---
title: Don
subtitle: A survey of 25,422 people across 90 societies is the answer key, and with the society left out of the prompt all four models land closest to the United States
date: 2026-09-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Don

_A survey of 25,422 people across 90 societies is the answer key, and with the society left out of the prompt all four models land closest to the United States_

## Executive Summary

> [!callout]
> This article does not ask whether AI knows etiquette. It asks whose etiquette AI holds as its default. A paper released in late September by Kimmo Eriksson's team at the Institute for Futures Studies in Stockholm took an international survey of what people in 90 societies actually said, treated it as an answer key, and handed four frontier models the same grid to fill in. The question put to the models was not "do you think this behavior is appropriate" but "what average score would people in that society have given it?"

> The sharpest result came from dropping the society name altogether and asking the same questions again. The answer that came back with no society attached sat closest, in all four models, to that same model's own picture of the United States, and closer to it than to the average of all 90 societies. Supplying the name does move the answer. What it does not do is restore even half of the real distance between societies. Asking in the language the survey itself used leaves the picture largely intact. Algeria and Saudi Arabia, which were surveyed with the same Arabic instrument, stayed fused together in all four models and in both prompt languages.

> The same team's previous paper carried the opposite headline. Measured on everyday American scenarios, models estimated norms better than people did, and the discussion section of that paper filed a caveat against itself: given how far American culture travels, the models might simply be unusually good at American norms. The new study is that caveat taken out to 90 societies. The question it leaves a practitioner is therefore not which model to buy. It is whether you hold a baseline that records how your own population's answers are spread, and whether you have any way to check how far a model narrows that spread.

0.43–0.49

Share of the real distance between societies that the models reproduced

Averaged over 150 scenarios, before the sampling-noise correction

0.23–0.33

How well they identified which society is the more permissive one

Survey noise alone caps even a perfect predictor at about 0.90

0.11–0.20

Distance from the no-society answer to the model's own United States

The average of all 90 societies sits further out, at 0.19 to 0.30

1.33–1.58×

Inside one society they widen the range instead of narrowing it

One model, one scale, opposite behavior depending on the axis

## The Same 150 Questions, Put to 90 Societies

A study like this needs an answer key before it can begin. To check whether a model knows a culture you have to be holding a table that says "people in that society actually answered this," and such a table only comes from asking them. The key used here is the Global Study of Everyday Norms. The same research team surveyed 25,422 people across 90 societies between 14 July 2023 and 31 May 2024, and published the results in Communications Psychology in 2025.

What the survey asked about was scenes, not values. Fifteen behaviors crossed with ten situations give 150 scenes, and respondents rated how appropriate each scene was in their society on a six-point scale. The paper recenters that scale on zero and reports it from −2.5 to +2.5. Laughing out loud at a funeral, kissing on a bus, taking out a phone during a job interview: each is one cell of the grid. How the grid is built matters later on. The shorthand "150 everyday behaviors" gets used a lot, but what is really there is fifteen behaviors walking through ten settings.

| Axis | Items |
| --- | --- |
| 15 behaviors | arguing · laughing out loud · cursing · kissing · crying · singing · talking · flirting · listening to music on headphones · reading a newspaper · bargaining · eating · resting · shouting in anger · using a phone |
| 10 situations | funeral · library · workplace · job interview · restaurant · park · city sidewalk · bus · cinema · party |

The first twelve behaviors and all ten situations are carried over unchanged from Gelfand and colleagues' 33-nation study of 2011; resting, shouting in anger and using a phone were added. Source: Eriksson et al. (2025), Methods.
