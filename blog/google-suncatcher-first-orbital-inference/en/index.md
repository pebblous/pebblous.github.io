---
title: Google
subtitle: The prototype launched on October 1 ran Gemma 4 on its onboard chips and sent three lines of verse down over Svalbard. Google published the result on October 30
date: 2026-11-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Google

_The prototype launched on October 1 ran Gemma 4 on its onboard chips and sent three lines of verse down over Svalbard. Google published the result on October 30_

## Executive Summary

> [!callout]
> An AI chip Google put into orbit has answered a question sent up from the ground. The Project Suncatcher prototype that reached low Earth orbit on October 1 finished several weeks of checkout, then used Gemma 4, loaded aboard before launch, to write a haiku about being in space and sent it down while passing over Svalbard in Norway. Google called this the first AI response from a data center class TPU in orbit, and published it on October 30. This article looks at how far those three lines go and where they stop.

> The wording Google chose matters here. It did not say the first AI ever to run in space; it said the first response from a data center class chip in orbit. Small satellites have run lightweight models before, which is why the words were picked with care: what is new here is a chip from the same family that goes into a ground data center producing an inference in orbit. Speed, power draw and chip temperature were not published alongside it. The next thing to clear is early 2027, when two satellites go up to verify a link that carries data between them as light.

> Sections 1 through 4 report what Google's own post, its design document and launch-week coverage set out. Section 5 moves the news onto the ground that a data team stands on, and that part is our reading.

### Key numbers

The four figures below come from a design document Google published earlier, not from this announcement. Not one of them was measured in orbit. They are a transmission rate from a laboratory bench, an example constellation used to carry an argument, a dose from an accelerator beam line, and a cost line drawn by Google's own analysis. Whatever this satellite reports while it circles is not yet on the table.

Source: Google Research, [Exploring a space-based, scalable AI infrastructure system design](https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/).

<!-- stat-card -->
**1.6 Tbps** — Optical link on the bench — 800 Gbps each way from a single transceiver pair. A ground laboratory result; orbit has yet to see it

<!-- stat-card -->
**81 satellites** — Constellation in the design document — An illustrative configuration that keeps neighbors 100 to 200 meters apart inside a one-kilometer radius. Not a committed plan

<!-- stat-card -->
**750 rad** — Expected dose over a five-year mission — Under half the 2 krad at which memory began to misbehave. The number came out of a proton beam, not from flight

<!-- stat-card -->
**$200 per kg** — Where launch cost has to land — Google's own analysis puts this as the price that has to be reached by the mid-2030s for orbit to rival ground energy costs

## The Three Lines That Came Down From Orbit

The sequence is simple. A ground station sent a prompt up as the satellite passed overhead, the satellite ran the model inside itself and composed an answer, and that answer came down on a later pass over Svalbard in Norway. A single question went up, and three lines of verse came back. Nothing but text crossed between orbit and the ground; the arithmetic itself never left the satellite.
