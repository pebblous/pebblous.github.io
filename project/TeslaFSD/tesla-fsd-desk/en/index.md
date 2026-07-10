---
title: Tesla
subtitle: Security researcher boots Tesla Model 3 FSD computer on desk using $255 in salvage parts
date: 2026-03-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Tesla

_Security researcher boots Tesla Model 3 FSD computer on desk using $255 in salvage parts_

## Executive Summary

> [!callout]
> Security researcher David Hu purchased $255 worth of salvage parts from eBay and successfully booted a Tesla FSD computer on his desk. In the process, he discovered that SSH (port 22) and ODIN API (port 8080) were exposed on the vehicle's internal network, and documented the entire teardown from bare MCU to full boot in 17 original photographs.

> This research demonstrates that software-defined vehicle (SDV) security can be compromised through physical access alone. In the Physical AI era that Pebblous focuses on, data integrity of vehicle OTA systems and internal networks is not merely an IT security concern — it is a safety-critical issue directly tied to passenger well-being.

17

Original Photos

A full teardown report documented in photos, from bare MCU boards to complete boot.

$255

Total Parts Cost

MCU + wiring harness ($80) + touchscreen ($175). Real salvage-market prices.

2

Exposed Ports

SSH (port 22) and ODIN API (port 8080) — the vehicle's internal network was wide open.

It started with a simple problem. Software security researcher David Hu ([xdavidhu](https://bugs.xdavidhu.me)) wanted to participate in Tesla's bug bounty program. To hack a car, you need a car — ideally one you can put on a workbench.

Buying a new Tesla Model 3 wasn't an option. So he turned to eBay and salvage yards. If he could get Tesla's core computing units — the MCU (Media Control Unit) and AP Computer (Autopilot Computer) — running on his desk without an actual vehicle, he could analyze the software, hunt for vulnerabilities, and file bug bounty reports. Total cost: less than 1% of a new car.

"I wanted to find a way to research Tesla's software without actually owning a car. Salvage parts turned out to be the answer."

This wasn't just a cost-cutting move. It turned into one of the most direct public investigations of Tesla FSD computer internals, network architecture, and security design gaps ever published.
