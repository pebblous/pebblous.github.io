---
title: Where Did 42AI Get the Data to Predict Human Behavior?
subtitle: Israeli startup 42AI says records from government datasets and medical biobanks, covering more than 2 million people, now sit inside a model that 10 brokerages use to predict trades
date: 2026-11-03
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Where Did 42AI Get the Data to Predict Human Behavior?

_Israeli startup 42AI says records from government datasets and medical biobanks, covering more than 2 million people, now sit inside a model that 10 brokerages use to predict trades_

## Executive Summary

> [!callout]
> An Israeli startup that says it can put a probability on what a person will do next has come out of stealth. 42AI announced $62.5 million in seed funding, called its technology a behavioral world model, and said ten large brokerages already run it to predict which way and how much their clients will trade. TechCrunch reported it on November 2.

> The number worth reading before the performance claims sits in the denominator. The company says its training data began with a few thousand people studied through psychological assessments, then took in government datasets and biobank records covering more than two million people, and has since expanded, customer data included, to almost thirty million. The middle layer was gathered for public health and medical research. A path now runs from the trait coordinates drawn out of that layer into a brokerage's hedging and margin calculations.

> Sections 1 through 4 carry the figures the company disclosed and what its founders said. Section 5, which treats the point where data changes purpose and moves as a question of data management, is this article's own reading.

### Key Figures

The first two cards give the size of the data the model stands on and the share of it that came from outside. The last two give what the model scored in the field and what the company spent getting there.

Source: Ram Iyer, [42AI comes out of stealth with $62.5M and a world model that can 'predict human behavior'](https://techcrunch.com/2026/11/02/42ai-comes-out-of-stealth-with-62-5m-and-a-world-model-that-can-predict-human-behavior/) (TechCrunch, November 2, 2026). All four are numbers the company reported itself.

<!-- stat-card -->
**30 million** — People the model stands on — Current scale with customer data included. The company's own wording was "almost 30 million"

<!-- stat-card -->
**2 million** — The government and biobank share — A layer 42AI did not observe itself. Which country and which datasets was not disclosed

<!-- stat-card -->
**0.8–0.85** — F1 for trade direction and volume — The score of the model running at ten brokerages. No external verification was published alongside it

<!-- stat-card -->
**$62.5 million** — Seed funding — Came from the founders and Infinity Group over three years, and was not entirely raised from external investors

## Three Quiet Years, Then the Numbers

42AI spent three quiet years after founding before showing itself on November 2. The disciplines it pulled together over those years were not one field. It combined psychological research with neuroscience and genetics, took advice from experts in psychology and in post-traumatic stress disorder, and listed Dan Shechtman, awarded the 2011 Nobel Prize in Chemistry, among its advisers. The co-founder and CEO is Amit Gal-Or and the CTO is Ehud Ezra. The chairman and co-founder, Amir Gal-Or, is the CEO's father and the man who founded the investment firm Infinity Group.

The funding structure is unusual. The $62.5 million seed came from the founders themselves and from Infinity Group over three years, and Gal-Or said it was not entirely raised from external investors. The company says revenue has passed seven figures, and adds that it now plans to raise outside money.

More concrete than the money is what is already running. Ten large brokerages use the model to manage liquidity, margin requirements and hedging exposure. One of them, the company says, generated roughly $30 million in additional value through dynamic hedging. There are two ways the company gets paid. A customer pays a flat fee, or a percentage of the value the platform helps them gain.

Two numbers were offered as a scorecard. On predicting market trades the company claims 98% accuracy, and Gal-Or himself set out what that means: it measures whether trading flows fall within a predicted range, not whether each individual trade was predicted correctly. The other number is an F1 score of 0.8 to 0.85 for predicting trading direction and volume. Both values are company-reported, and no external verification under the same conditions was published with them.

## What the Behavioral World Model Reads

The premise the company puts forward is short. "Behavior is not deterministic; it's constantly probabilistic," Gal-Or told TechCrunch. His co-founder Ezra added the rest of it: "A week from now, you might be a different person, but your tendencies will always play out in certain areas to a probability or distribution."

So the method is not to stretch past behavior forward into a forecast. Instead the company watches how a person reacts to events that look unrelated to the task at hand, and infers the motivations underneath. For an investor or trader, such events include completing identity checks, onboarding, support calls, money transfers and trading stocks. Ezra described watching the early contact first: when a customer talks to support or sales at the start, the company looks at the sentiment and the voice and at a lot of the interactions they are having, down to how many times they call. Later come the trades themselves, he said — how you buy and sell and when, read together with the market at that stage.

Those observations are converted into mathematical representations of traits, which are fed into a transformer-based world model, and a separate language model is left to turn the output into an explanation a person can read. "In a world model, every individual is the world," Ezra said.

Ezra also described which way the training is pushed. During simulations, the standard the reward design holds to is that a person's underlying tendencies stay intact. If someone is usually risk-averse and the model suddenly treats them as a risk-taker, "the target is off," he said.

The name the company chose places it alongside other work that has been building world models, though the comparison is ours rather than the company's: Google DeepMind's Genie, Meta's V-JEPA, and World Labs, founded by Fei-Fei Li. Those systems learn how the physical world moves. The world 42AI is trying to build sits inside a single person.

The founders acknowledged a limit. "There's a natural ceiling because you really don't have access to everything that a person experiences," Gal-Or said. Ezra added that accuracy also suffers when the system misses the situational context of a moment, as when someone changes a trading decision on the advice of a friend or a colleague.

## Thirty Million People, Stacked in Three Layers

The training data the company described is not one block but three layers of entirely different character. At the bottom is observation 42AI designed itself: a few thousand people studied through psychological assessments and behavioral scenarios, their traits converted into numbers, a layer where it is clear what the participants agreed to. In the middle are the government datasets and biobank records covering more than two million people. At the top are the records the brokerage customers had accumulated in the course of doing business, and with those included the total reaches almost thirty million.
