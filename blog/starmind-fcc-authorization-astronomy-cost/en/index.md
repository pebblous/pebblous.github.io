---
title: SpaceX Starmind Clears the FCC, and the Harm to Astronomy Never Enters the Review
subtitle: The FCC authorizes 1 million orbital data center satellites and denies the petitions filed by Amazon
date: 2026-11-27
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# SpaceX Starmind Clears the FCC, and the Harm to Astronomy Never Enters the Review

_The FCC authorizes 1 million orbital data center satellites and denies the petitions filed by Amazon_

## Executive Summary

> [!callout]
> The Federal Communications Commission has given SpaceX authority to operate 1 million satellites in Starmind, its orbital data center constellation. The order issued by the FCC's Space Bureau on November 25 calls it the first authorization of a space data center constellation in U.S. history. Six orbital shells sit between 500 and 1,002 km, and the grant goes null and void if the first satellite is not in orbit and operating by November 2033 or if the full million is not deployed by November 2040.

> Three petitions to deny, from Amazon's Kuiper Systems, from Viasat and from the American Astronomical Society, were all denied. The order carries its own section headed with issues beyond the Commission's authority, and the effect on optical astronomy is disposed of there. The reasons given are that the Commission's rules do not address the protection of optical astronomy and that SpaceX's stated commitment to coordinate with the National Science Foundation is enough. Of the eleven conditions attached to the authorization, not one protects astronomical observation.

> The cost that was set aside already exists in numbers. A paper released in October simulated a million-satellite orbital data center constellation against a year of observing at the Vera C. Rubin Observatory and found that on some nights up to 80% of the pointings carried a satellite streak. Sections 1 through 4 follow what the order and the paper say. Section 5, which asks who writes this cost into which ledger, is this article's own reading.

### Key numbers

The first is the size of the grant, the middle two are what that size leaves behind in ground observation, and the last is the number of conditions the authorization attaches to protect it.

Sources: [FCC Order DA 26-1273](https://docs.fcc.gov/public/attachments/DA-26-1273A1.pdf), [arXiv 2610.31772](https://arxiv.org/abs/2610.31772).

<!-- stat-card -->
**1 million** — orbital compute modules authorized — Six shells at 500–1,002 km, full deployment due November 2040

<!-- stat-card -->
**up to 80%** — of pointings carrying a satellite streak — A single night's value, varying by season. About 20% as an annual average

<!-- stat-card -->
**5–10%** — average pixel loss on twilight nights — What remains after several mitigation strategies are applied

<!-- stat-card -->
**zero** — conditions protecting astronomical observation — Out of eleven. The request to attach one was refused

## The grant covers radio and nothing else

The authorization at the front of the order states its scope in a single line: radio frequency authority for backup and emergency telemetry, tracking and command for a constellation of 1 million satellites operated as data centers. The link Starmind actually works over is an optical one with Starlink satellites, and radio is used only when that optical link drops. The assigned bands are 18.8–19.3 GHz for the downlink and 28.6–29.1 GHz for the uplink, on an unprotected, non-interference basis.

So this grant has a slightly different shape from a blanket permission to launch a million satellites. The handle the Commission holds in law is radio. The size of the constellation, the brightness of the satellites and the waste heat they radiate do not catch on that handle. The phrase "beyond the Commission's authority" that appears in Section 2 comes from here.

There are six shells. Each is about 50 km wide, and the inclinations split between roughly 30 degrees and sun-synchronous. A sun-synchronous orbit is set so that a satellite passes over the same point at the same local time every day, often tracking the line where the sun rises and sets. That property returns in Section 3.

| Operating altitude | Inclination | Against 600 km |
| --- | --- | --- |
| 550–568 km | 26–32° | below |
| 565–585 km | 97.7° (sun-synchronous) | below |
| 686–718 km | 30° | above |
| 707–744 km | 97.2° (sun-synchronous) | above |
| 946–978 km | 30° | above |
| 967–1,002 km | 99.4° (sun-synchronous) | above |

▲ The four shells above 600 km still have a debris review ahead of them (Section 4). Source: FCC DA 26-1273
