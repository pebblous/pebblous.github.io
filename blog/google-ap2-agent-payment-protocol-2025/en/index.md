---
title: Google AP2 — Solving the Trust Problem in Agent Payments, and the Truth of the Protocol War
subtitle: 60 partners, the mandate system, collaboration with x402 — what the agent payment standard actually is
date: 2026.04
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Google AP2 — Solving the Trust Problem in Agent Payments, and the Truth of the Protocol War

_60 partners, the mandate system, collaboration with x402 — what the agent payment standard actually is_

Stablecoin series, part 3:
                        [① Stablecoins × the Data Economy](/blog/stablecoin-data-ai-agent-economy-2026/en/) ·
                        [② x402](/blog/x402-protocol-ai-payment-2026/en/) · ③ AP2 (this article)

## Executive Summary

> [!callout]
> For an AI agent to pay, it needs two things. One is an actual way to move the money. The other is proof that the agent really has authority delegated by the user. x402 solved the first. AP2 (Agent Payments Protocol), announced by Google in September 2025, solves the second.

> AP2 proves the fact that "this agent may spend this amount, under these conditions, on behalf of this user" through a cryptographically signed digital contract called a Mandate. It is an open standard with more than 60 partners, including American Express, Mastercard, PayPal, Coinbase, Etsy, and Salesforce.

<!-- stat-card -->
**60+** — Partner organizations

<!-- stat-card -->
**2025.09** — Google announcement

<!-- stat-card -->
**A2A+MCP** — Built as an extension

<!-- stat-card -->
**x402** — Co-released extension

> The press frames this as a protocol war — "AP2 vs x402 vs Visa TAP." But it isn't a war. These three standards are a complementary stack, each owning a different layer. This article lays out what that distinction is, and what it means for a data business.

## Why Agents Need a New Payment Rail

Today's payment infrastructure is built on a simple assumption. A human clicks "Buy." The browser sends the card details. The processor approves. An AI agent breaks every assumption in that flow.

An agent has no browser. It can't fill in a payment form, can't solve a CAPTCHA, can't click an "I agree" button. It has to compare dozens of stores in seconds, negotiate terms, and execute a purchase without human involvement. It also has to pay other agents for data or compute — thousands of transactions an hour, a few cents each.

![Boston Dynamics Spot robot — the reality of an AI agent that operates autonomously, without a human](./image/img-01-spot-boston-dynamics.jpg)
*▲ Boston Dynamics Spot — like an autonomous robot carrying out a mission without a human, an AI agent has to execute payments without human intervention | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Spot_by_Boston_Dynamics.jpg) (CC BY-SA 4.0)*

But there's a problem beyond simply moving money. When a machine spends on a person's behalf, how does a merchant verify trust? Three core questions arise.

<!-- stat-card -->
**Authorization** — Did the agent actually receive authority from the user to make this specific purchase?

<!-- stat-card -->
**Authenticity** — Does the agent's request accurately reflect the user's real intent?

<!-- stat-card -->
**Accountability** — When a bad transaction occurs, how is responsibility determined?

x402 solves payment transmission itself. AP2 solves these three trust problems.

## The Core of AP2: The Mandate System

AP2's foundation is the Mandate — a cryptographically signed, tamper-proof digital contract that records, in a verifiable form, the instruction a user gave an agent. Instead of trusting the agent's self-assertion, the merchant confirms the transaction's legitimacy by verifying this mandate.

### 2.1 Two Types of Mandate

### 2.2 Two Shopping Modes

### 2.3 The Role of Verifiable Credentials (VC)

![Digital signature diagram — the cryptographic signing principle behind AP2 mandates](./image/img-02-digital-signature-diagram.svg)
*▲ How digital signatures work — an AP2 mandate verifies an agent's authority through this kind of cryptographic signing | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Digital_Signature_diagram.svg) (CC BY-SA 3.0)*

### 2.4 A2A and MCP Integration

## AP2 × x402 — Collaboration, Not Rivalry: the A2A x402 Extension

- • Cryptographic proof that the user granted authority
- • Agent identity verification
- • An audit trail for disputes
- • Support for many payment methods (card, bank, stablecoin)

- • Actual payment transmission at the HTTP level
- • Instant, account-less payment
- • Microtransaction efficiency
- • Developer-friendly, one-line implementation

![Coinbase logo — co-creator of x402, collaborating on the A2A x402 extension with AP2](./image/img-03-coinbase-logo.svg)
*▲ Coinbase — co-developer of x402, releasing the A2A x402 extension with Google to support stablecoin payments in the AP2 ecosystem | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Coinbase.svg)*

## The Truth of the "Protocol War" — It's a Stack, Not a War

### 4.1 Comparing the Four Standards

### 4.2 The Real Structure: A Layered Stack

## Where Korea Stands — the Opportunity AP2 Brings

### 5.1 KakaoPay's Strategic Position

![Linux Foundation logo — steward of the x402 standard, with KakaoPay as a founding member](./image/img-04-linux-foundation-logo.svg)
*▲ Linux Foundation — the open-source steward of the x402 protocol. KakaoPay joined as a founding member, the first Korean company to put its name on an agent payment standard | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Linux_Foundation_logo_2013.svg)*

### 5.2 The B2B Agent Commerce Opportunity

- •If Korean SaaS and data-API companies add AP2-compatible endpoints, they become targets for automatic purchasing by global AI agents
- •Through Google Cloud Marketplace, agents could auto-purchase software licenses via AP2
- •Once the Digital Asset Basic Act is finalized and a won stablecoin is integrated as an x402 facilitator, direct participation in the AP2 ecosystem becomes possible

## DataClinic's Place in the AP2 Economy

### 6.1 The Delegated-Purchase Scenario

### 6.2 Registering in the Agent Marketplace

### 6.3 The Full-Stack Scenario
