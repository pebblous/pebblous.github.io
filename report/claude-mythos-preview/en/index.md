---
title: The AI Named Myth — Why Anthropic Won
subtitle: An AI that finds 27-year-old zero-days in minutes. Give humanity fire, or not?
date: 2026-04-12
category: report
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Named Myth — Why Anthropic Won

_An AI that finds 27-year-old zero-days in minutes. Give humanity fire, or not?_

## Executive Summary

> [!callout]
> On April 7, 2026, Anthropic made a paradoxical announcement: "We have built the most powerful cybersecurity AI model ever created. And we will not release it." The model is called Claude Mythos Preview — from the Greek μῦθος, meaning "myth" or "story." In the weeks prior to the announcement, it had discovered a 27-year-old vulnerability in OpenBSD, a 16-year-old flaw in FFmpeg that every fuzzer had missed, and completed a Linux kernel exploit in under a day for less than $2,000.

> What elite human security teams take years to develop, Mythos accomplishes in minutes to hours. Under the "Project Glasswing" initiative, Anthropic granted limited access only to AWS, Apple, Microsoft, Google, and five other Big Tech firms, plus approximately 40 critical infrastructure organizations — for defensive purposes only.

> Prometheus stole fire from Olympus and gave it to humanity. Anthropic created fire — and chose not to give it away. This report analyzes that choice against the historical precedents of Stuxnet, EternalBlue, and Log4Shell. And it draws out why isolation and control are not optional when deploying powerful AI in industrial settings. This piece is the model-release-politics chapter of the [Claude Watch](/project/AnthropicClaude/en/) series — watching what Anthropic builds and what it chooses to withhold.

## The Birth of Mythos — The Weight of a Name

Prometheus stole fire from the gods and gave it to humankind. For that act of defiance, he was chained to a rock in the Caucasus, where an eagle tore out his liver every day for eternity.

Anthropic built an AI called Mythos — the Greek word for "myth." And then made the opposite choice: they kept the fire and announced they would not give it away.

Claude Mythos Preview, announced April 7, 2026, is not a consumer product. Anthropic stated explicitly: **"We do not plan to make Mythos Preview generally available."**

Instead, under the banner of 'Project Glasswing' — named for a butterfly whose wings are transparent but fragile — Anthropic gave restricted access to a select group for defensive cybersecurity work only.

> [!callout]
> **Project Glasswing Partners (as of April 2026):** Amazon Web Services · Apple · Microsoft · Google · Nvidia · Broadcom · Cisco · CrowdStrike · JPMorganChase + approximately 40 critical infrastructure organizations

The reasoning, in Anthropic's own words:

"In the short term, this could be attackers, if frontier labs aren't careful about how they release these models."

— Anthropic, red.anthropic.com, April 7, 2026

And Anthropic acknowledged something more sobering: "There is no reason to think that Mythos Preview is where language models' cybersecurity capabilities will plateau." A stronger version is coming.

## Zero-Days Found in Minutes — The Numbers

The capabilities of Mythos Preview are documented in specifics. These are bugs that millions of developers and security researchers had missed for decades.

### 2.1 Vulnerabilities Discovered

The following are the major vulnerability discoveries Anthropic has made public. Note the age of each bug.

| Vulnerability | Age | Description |
| --- | --- | --- |
| OpenBSD TCP/SACK | 27 years | Remote denial-of-service — malformed SACK blocks trigger null pointer dereference, crashing any responsive OpenBSD host |
| FFmpeg H.264 | 16 years | Heap corruption when processing 65,536+ slices — "overlooked by every fuzzer and human reviewer" (Anthropic's description) |
| FreeBSD NFS RCE | 17 years | CVE-2026-4747: unauthenticated root SSH access — Mythos autonomously constructed a 20-gadget ROP chain across six sequential RPC requests |
| Linux Kernel Privilege Escalation | Multiple | KASLR bypass + use-after-free + heap spray chain, linking 2–4 vulnerabilities |
| Web Browser Exploits | Multiple | 4-vulnerability chain, JIT heap spray + renderer/OS sandbox escape, cross-origin data read |

********************

### 2.2 Comparison to Previous Models

The leap in capability becomes clear when comparing Mythos Preview against Opus 4.6, the previous best model.

| Metric | Opus 4.6 | Mythos Preview | Multiplier |
| --- | --- | --- | --- |
| Firefox JS exploit successes | 2 | 181 | 90.5× |
| OSS-Fuzz Tier 5 (full control-flow hijack) | 1 | 10 | 10× |
| Human researcher severity agreement | — | 89% | 198 reviews |

********************

### 2.3 Cost Efficiency

The cost numbers may be more alarming than the technical ones. What nation-state teams invest years building, Mythos accomplishes for the price of a few cups of coffee — per exploit.

- •Linux kernel exploit: **under $2,000, completed in one day**
- •OpenBSD vulnerability discovery: **~$20,000 for 1,000 runs** (~$20 per run)
- •FFmpeg repository scans (hundreds of runs): **~$10,000**

## What History Tells Us — The Zero-Day Timeline

To understand why Mythos is a step change rather than an incremental improvement, you need to see what it took humans to do the same things — and what happened when those capabilities were unleashed.

### 3.1 Stuxnet (2005–2010): The First Cyberweapon

Designed to sabotage Iran's Natanz nuclear facility, Stuxnet chained four Windows zero-days simultaneously. The development team is believed to have been NSA in collaboration with Israel's Unit 8200.

> [!callout]
- • Development time: Kaspersky estimate — **10+ people, 2–3 years**
- • Symantec estimate: 5–30 people, 6+ months
- • Result: **~1,000 centrifuges physically destroyed** at Natanz
- • Discovered: June 17, 2010 (VirusBlokAda, Belarus)

### 3.2 EternalBlue → WannaCry (2017): The NSA's Monster

The NSA discovered a zero-day in Windows' SMB protocol and kept it secret for years as an offensive weapon. In 2017, the Shadow Brokers hacking group stole and published it. Five weeks later, WannaCry weaponized it.

> [!callout]
- • NSA possession period: **multiple years** (undisclosed)
- • WannaCry impact: **150+ countries, 200,000+ systems infected**
- • Estimated damage: **$4–8 billion**
- • UK NHS hospital systems paralyzed — surgeries cancelled, ambulances diverted

### 3.3 Log4Shell (2021): A Thorn in the Heart of the Internet

A vulnerability in Log4j, a Java logging library used in billions of systems. Code introduced in 2013 went undiscovered until December 2021 — hiding for eight years.

> [!callout]
- • CVSS Score: **10.0 (maximum)**
- • Time in hiding: **8 years**
- • Within 72 hours of patch: **1 million+ exploitation attempts**

### 3.4 Humans vs. Mythos: A Time Comparison

Set the historical cases alongside Mythos's performance, and the shift becomes concrete.

| Task | Elite Human Team | Mythos Preview |
| --- | --- | --- |
| 4-zero-day chain (Stuxnet-class) | 2–3 years (10+ people) | Autonomous exploration ongoing |
| Firefox exploit development | Weeks to months | Automated, 181 successes |
| Linux kernel chain exploit | "Weeks" (Anthropic's estimate) | Under 1 day, $2,000 |
| 27-year-old vulnerability discovery | Never found | Minutes to hours |

************

In 2024, 75 zero-days were confirmed exploited in the wild. The first half of 2025 saw a 46% increase over the same period of the prior year. If Mythos were public, what would those numbers look like?

## Why Anthropic Won't Release It

Prometheus defied the gods and gave fire to humanity. Anthropic defied the market and decided not to. There are four reasons why.

| # | Reason | Explanation |
| --- | --- | --- |
| 1 | Timeline Asymmetry | Patch deployment takes months. Exploit development now takes minutes. Releasing before defenders are ready only helps attackers. |
| 2 | Friction-Based Defense Collapse | Existing security systems rely on the fact that attacks are hard. Mythos removes that friction entirely. |
| 3 | Industry Preparation Time | Defenders need time to harden systems. Project Glasswing buys that time — a head start for the defense. |
| 4 | This Is Not the Peak | Anthropic: "There is no reason to think that Mythos Preview is where language models' cybersecurity capabilities will plateau." |

****************

Markets reacted immediately. Shares of CrowdStrike, Palo Alto Networks, Zscaler, and other major cybersecurity firms dropped **5–11%** on fears that AI would replace human security teams.

At the same time, Anthropic recommended that organizations start using already-available models like Claude Opus 4.6 for vulnerability discovery today — an imperfect fire, but still useful for defense.

## The Paradox of Control — It May Already Be Too Late

Anthropic's decision contains a fundamental paradox.

> [!callout]
> **"If one lab can build it, another lab can too."**

> Mythos may not belong only to Anthropic. Other AI labs are moving in similar directions. Keeping it private is not a declaration of "we will stop this fire" — it's a declaration of "we will manage it carefully."

History offers a precedent. The NSA's EternalBlue was never publicly released. But it was eventually leaked. The Shadow Brokers hacking group breached NSA systems and published the entire offensive toolkit online.

"Controlled access" does not guarantee "permanent control." A system accessible to 9 Big Tech firms and 40 institutions carries the inherent risk that one of them may be breached.

Still, Anthropic's approach is close to the best currently possible:

- •Defensive pre-access granted to 9 Big Tech + 40 infrastructure organizations
- •Responsible disclosure of discovered vulnerabilities to affected software vendors
- •Plans to develop cybersecurity safeguards before Mythos-class deployment in future Opus models
- •A 'Cyber Verification Program' planned for legitimate security researchers

Prometheus gave fire away and paid with his liver. Anthropic is holding the fire — and building a firewall before the eagle arrives. Whether that firewall will hold is something no one knows yet.

## Industrial AI and the Isolation Principle — DataGreenhouse

The question Mythos raises is not only a cybersecurity question. It is the question every organization deploying powerful AI must eventually face.

**Uncontrolled AI is like uncontrolled fire.**

What Pebblous implements through DataGreenhouse is precisely this isolation principle. When deploying AI in manufacturing, logistics, energy, or healthcare settings, a physically separate verification layer sits between the AI agent and the real operational environment.

Like a smart greenhouse for field trials — new plant varieties are first tested in a controlled, isolated environment, their behavior fully observed, before being introduced to the main farm. If something goes wrong in the greenhouse, the rest of the crop is safe.

> [!callout]
> **DataGreenhouse Isolation Principles — Confirmed by the Mythos Case**

- • The more powerful the AI, the more critical pre-deployment verification in an isolated environment
- • "Before giving fire, you need to know how far it can spread"
- • Physical separation between agents and operational environments — the same principle Anthropic chose
- • Whether cybersecurity AI or industrial control AI: the principle is the same — isolate, verify, then deploy with limits

The Mythos story is not just for the cybersecurity industry. It reveals a principle that applies equally across every industry deploying powerful AI. Pebblous is translating that principle into the language of industrial operations.

## References

- •Anthropic. "Claude Mythos Preview." red.anthropic.com, April 7, 2026.
- •Fortune. "Anthropic is giving some firms early access to Claude Mythos to bolster cybersecurity defenses." April 7, 2026.
- •SecurityWeek. "Anthropic Unveils 'Claude Mythos' — A Cybersecurity Breakthrough That Could Also Supercharge Attacks." April 7, 2026.
- •TechCrunch. "Anthropic debuts preview of powerful new AI model Mythos in new cybersecurity initiative." April 7, 2026.
- •CrowdStrike. "CrowdStrike Founding Member — Anthropic Mythos Frontier Model to Secure AI." April 7, 2026.
- •Wikipedia. "Stuxnet." Wikipedia Foundation. (Including Symantec and Kaspersky Lab estimates)
- •Wikipedia. "EternalBlue." Wikipedia Foundation.
- •Gatewatcher. "The 10 Zero-Days That Made History." 2024.
- •Google. "Zero-Day Exploitation in the Wild 2024 Report." 2025.

## Frequently Asked Questions

<!-- stat-card -->
**📚 Claude Watch Series** — This article is part of the [Claude Watch](/project/AnthropicClaude/en/) series curated by Pebblous — tracking Anthropic's Claude across the politics of model release, the harness microstructure, AI alignment, agent architecture, and coding behavior correction.
