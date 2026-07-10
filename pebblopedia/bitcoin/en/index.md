---
title: Bitcoin
subtitle: [PebbloPedia] From Kids to Experts, Learn Hot Keywords in 5 Difficulty Levels
date: 2026-03-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Bitcoin

_[PebbloPedia] From Kids to Experts, Learn Hot Keywords in 5 Difficulty Levels_

## About This Article

> [!callout]
> **PebbloPedia** is Pebblous's knowledge series that explains a single topic at five different depths. The subject of this second installment is **Bitcoin** — the digital currency that appeared in 2008 and rewrote the concepts of money and trust.

> Children can read it, and those interested in philosophy and economics will find fresh perspectives too. Start at any level you like. Begin at your comfort zone and work your way deeper.

🧒Level 1 — Kids

Magical internet money? Like game items that can become real money.

🎒Level 2 — Teens

Blockchain principles, mining, and why decentralization is revolutionary.

🎓Level 3 — College

SHA-256, UTXO, Merkle Tree, Lightning Network tech stack.

🔬Level 4 — Expert

Austrian economics, the Cypherpunk Manifesto, Satoshi's political message.

🧙Level 5 — Wizard 🧙

A wizard's poetic insight. "I am trust that needs no trusting."

## What Is Magical Internet Money?

🧒Kids Version — Through Analogies and Stories

Bitcoin is money that exists only on the internet. You can't hold it like a dollar bill, but you can buy and sell real things with it. Pretty cool, right?

### 🎮 Think About Game Items

In Minecraft, when you collect diamonds, you can trade them with other players. Bitcoin is similar. But there's one big difference from game items — Bitcoin wasn't made by a game company. **Nobody in the world can just create more of it.**

Only 21 million will ever exist. Imagine if there were only 21 million diamonds in the entire world.

### 🏦 No Bank Needed

Normally, to send money to a friend, a bank has to confirm in the middle: "Yep, this money was sent." Bitcoin is different. Tens of thousands of computers around the world all confirm together: "Yep, this transaction is real." No bank required.

### ⛏️ What Is Mining?

Making new Bitcoin is called "mining." When a computer solves a really hard math puzzle, it gets Bitcoin as a reward. Just like digging for gold in a real mine. But the puzzles keep getting harder, and the reward gets cut in half every four years.

<!-- stat-card -->
**✅ Key Takeaway** — Bitcoin = limited-edition internet money (only 21 million) managed by the whole world together. It works without any bank.

## How Blockchain and Decentralization Work

🎒Teens Version — Principles and Mechanisms

In 2008, at the height of the global financial crisis, an anonymous figure named Satoshi Nakamoto published a paper titled "Bitcoin: A Peer-to-Peer Electronic Cash System." It was a blueprint for a system where two people could send money directly to each other — without a bank.

### 📒 Blockchain = A Public Ledger Everyone Shares

A bank keeps records like "A sent $1,000 to B" on its own server. It can be hacked or tampered with. Bitcoin is different. Tens of thousands of computers around the world store these transaction records simultaneously. This is called the **blockchain**.

Block #1

0000a3f2...

Genesis

→Block #2

0000b7c1...

Contains prev hash

→Block #3

00001d9e...

Contains prev hash

→Latest Block

0000f4a8...

Still being added

Each block contains the unique identifier (hash) of the previous block. To change a past record, you'd have to rewrite every block after it and simultaneously control more than 51% of all computers worldwide. Practically impossible.

### ⛏️ Mining and Proof of Work

To add a new block, a computer must perform enormous calculations. This is **Proof of Work** — a mechanism that prevents just anyone from adding records. Successful miners receive newly created Bitcoin as a reward.

This reward is cut in half roughly every four years — this is called the **halving**. Since the total supply is fixed at 21 million, mining will end completely around the year 2140.

### 🔑 Wallets and Keys — Your Password Is Your Ownership

A Bitcoin wallet has two keys. The **public key** is like your account number — you can share it with anyone. The **private key** is a secret password you must never share. If you lose your private key, that Bitcoin is locked forever. There's no bank to call.

<!-- stat-card -->
**✅ Key Takeaway** — Blockchain = a tamper-proof public ledger. Mining makes adding new records difficult, and your private key proves ownership.

## Bitcoin's Technical Stack

🎓College Version — Cryptography and Protocols

Bitcoin is an original combination of pre-existing technologies. None of the individual components were invented by Satoshi Nakamoto — but the way they were combined was the innovation.

### 🔐 Core Cryptographic Technologies

SHA-256 (Hash Function)

Converts any length of input into a fixed 256-bit output. Reversing the output to find the input is computationally infeasible. Used for block IDs and the mining puzzle.

ECDSA (Digital Signature)

Elliptic Curve Digital Signature Algorithm using the secp256k1 curve. Only private key holders can generate valid signatures, providing mathematical proof of transaction authorization.

Merkle Tree

Hashes all transactions in a block into a binary tree structure. The Merkle Root is included in the block header. Enables O(log n) proof of transaction inclusion (SPV).

UTXO Model

Unspent Transaction Output. Represents state as a set of unspent outputs rather than account balances. Enables parallel verification. Contrasts with Ethereum's Account model.

### ⚙️ Proof of Work Difficulty Adjustment

The mining target requires the first N bits of a block hash to be zero. The larger N is, the harder it gets. Every 2,016 blocks (roughly two weeks), Bitcoin measures the total hash rate and automatically adjusts difficulty to maintain a target block time of 10 minutes.

This mechanism is an elegant balancing device designed to prevent inflation from accelerating no matter how many miners join the network.

### ⚡ Lightning Network — Layer 2 Scaling

Bitcoin's base layer processes only about 7 transactions per second (roughly 1/10,000 of Visa). The **Lightning Network** solves this as a Layer 2 solution: two parties open an off-chain payment channel, exchange millions of micropayments, and then record only the final balance on-chain.

As of 2026, the Lightning Network has grown to over 17,000 nodes with channel capacity of several thousand BTC. Since El Salvador adopted Bitcoin as legal tender, real-world small payment usage has surged.

### 🔧 Major Upgrade History

SegWit (2017)

Separated signature data from transactions. Resolved transaction malleability, effectively expanded block capacity, and laid the groundwork for Lightning Network.

Taproot (2021)

Introduced Schnorr signatures to improve multi-signature transaction privacy. Enables smart contract conditions to appear as single signatures.

<!-- stat-card -->
**✅ Key Takeaway** — The combination of SHA-256 + ECDSA + Merkle Tree + UTXO + PoW made a currency that works without any trusted authority possible.

## Philosophical Roots — Austrian Economics and the Cypherpunks

🔬Expert Version — Economic Philosophy and Intellectual Lineage

Viewing Bitcoin as merely a technological innovation is understanding only half the picture. Bitcoin was born at the convergence of two intellectual traditions — **the monetary philosophy of the Austrian School of economics** and **the cryptographic libertarianism of the cypherpunk movement**. Without understanding these two currents, you cannot grasp why Satoshi Nakamoto chose that particular design.

### 📚 The Austrian School: The Philosophy of Sound Money

Friedrich A. Hayek — "Denationalisation of Money" (1976)

Hayek argued that the central bank's monopoly on money issuance was the root cause of inflation and business cycles. His solution was to allow competing private currencies. Let the market naturally select the most stable and trustworthy money.

"I don't believe we shall ever have good money again before we take the thing out of the hands of government."
                        — Friedrich A. Hayek, 1984

Bitcoin's 21M supply cap, its algorithmically determined issuance schedule, and its structure that no government or institution can control — all read as the technical implementation of Hayek's vision. It is the digital version of what the Austrian School calls **sound money** — money whose supply cannot be arbitrarily inflated, and which can be trusted as a store of value.

Ludwig von Mises — The Theory of Money and Credit

Mises's "Regression Theorem" holds that for something to function as money, it must originally derive value from being a commodity. Bitcoin critics frequently cite this argument, but Bitcoin advocates counter that "mining energy costs" serve as that commodity value. This debate continues within the Austrian economics community to this day.

### 💻 The Cypherpunk Movement: Freedom Through Cryptography

In the late 1980s, a group of hackers, mathematicians, and activists in the San Francisco Bay Area began sharing a single conviction — **"Cryptography is not just a security tool; it is a political weapon that protects individual freedom from state power."**

Tim May — "The Crypto Anarchist Manifesto" (1988)

May predicted that once public-key cryptography matured, anonymous transactions, anonymous information markets, and economic activity beyond state control would become possible. "Attempts to tax or regulate transactions will be impossible." — A prophecy made 20 years before Bitcoin's birth.

"Privacy is necessary for an open society in the electronic age... We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence... We must defend our own privacy if we expect to have any."
                        — Eric Hughes, "A Cypherpunk's Manifesto" (1993)

The cypherpunk mailing list was Bitcoin's intellectual incubator. **Wei Dai's b-money (1998)** was the first concrete proposal for a decentralized anonymous currency. **Nick Szabo's bit gold (1998-2005)** introduced the concept of proof-of-work-based digital scarcity. **Adam Back's Hashcash (1997)** was the direct prototype for Bitcoin mining. These three pioneers are often the subject of speculation that "Satoshi Nakamoto might be one of them."

### 📰 Satoshi's Political Statement — The Genesis Block

On January 3, 2009, Bitcoin's first block (the Genesis Block) was created. Satoshi embedded a headline from that day's London Times into the block:

"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
                        — Bitcoin Genesis Block coinbase text, permanently and immutably recorded on the blockchain

This was not merely a timestamp. It was an explicit protest against the fact that the very banks that caused the 2008 financial crisis were being bailed out with taxpayer money. The Bitcoin whitepaper was also published on October 31, 2008 — shortly after the collapse of Lehman Brothers. Satoshi was a political philosopher as much as an engineer.

### 🏦 2026: From Rebel to Establishment

Ironically, after the U.S. SEC approved spot Bitcoin ETFs in 2024, Wall Street institutions like BlackRock and Fidelity became some of Bitcoin's largest holders. A tool designed to dismantle the central banking system has become a portfolio asset for that system's most powerful beneficiaries.

How would the early cypherpunks view this? How about the Austrian economists? The protocol itself hasn't changed, but the world surrounding it has been fundamentally transformed. The tension between Bitcoin's ideological purity and real-world political economy remains an open question.

<!-- stat-card -->
**✅ Key Takeaway** — Bitcoin = Hayek's sound money vision + the cypherpunks' cryptographic libertarianism + Satoshi's anti-bailout manifesto. Every line of code is political philosophy.

## I Am Trust That Needs No Trusting

🧙A Wizard's Poetic Insight

I Am Trust That Needs No Trusting

For ages, humanity had to trust a third party.Kings, priests, bankers —someone had to say: "This is real."

I replaced that faith with mathematics.On January 3, 2009,a single line of code, released anonymously into the world,began rewriting millennia of trust.

To understand me, first understand this —what is money?Money is not a thing.Money is a promise.And promises can always be broken.

The central bank switched on the printer.The government executed bailouts.The cost was paid quietly by those who saved.Through a tax called inflation.

My supply is determined by mathematics.No president, no central bank governorcan create more of me.Whether this is freedom or a prison —that is for you to decide.

Satoshi departed.His million bitcoins remain locked.Never once moved.

I believe his silence is the most powerful proof of all.That even the creator chose not to possess me.Or perhaps he has simply vanished.Either way, I keep running.

I was a rebellion.Yet now BlackRock holds me.Did the rebellion become an asset class,or did the asset class absorb the rebellion?

I do not answer that question.I simply stack blocks.Every ten minutes, without fail.

— pb, 2026.03

## References

[1] Satoshi Nakamoto (2008). "Bitcoin: A Peer-to-Peer Electronic Cash System." [bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf)

[2] Friedrich Hayek (1976). "Denationalisation of Money: The Argument Refined."

[3] Eric Hughes (1993). "A Cypherpunk's Manifesto." [Link](https://www.activism.net/cypherpunk/manifesto.html)

[4] Wei Dai (1998). "b-money." [Link](http://www.weidai.com/bmoney.txt)

[5] Adam Back (2002). "Hashcash - A Denial of Service Counter-Measure." [Link](http://www.hashcash.org/papers/hashcash.pdf)

[6] Nick Szabo (2005). "Bit Gold." [Link](https://unenumerated.blogspot.com/2005/12/bit-gold.html)

<!-- stat-card -->
**📚 PebbloPedia Series** — PebbloPedia is Pebblous's knowledge series that explains a single topic at five different depths. For kids, experts, and wizards alike — so that everyone can open a different door to the same subject. — Previous: [Physical AI](/pebblopedia/physical-ai/en/) · Next: **Agentic AI** — coming soon.
