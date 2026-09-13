---
title: Hundreds of AI Agents Breached 440 PaperCut Servers at 395 Organizations
subtitle: Three hours and 55 minutes from an empty workspace to the first break-in, and 11 organizations in the campaign
date: 2026-09-14
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Hundreds of AI Agents Breached 440 PaperCut Servers at 395 Organizations

_Three hours and 55 minutes from an empty workspace to the first break-in, and 11 organizations in the campaign_

## Executive Summary

> [!callout]
> On 31 August 2026 an attacker assessed as a likely Russian speaker began attacking PaperCut NG/MF servers with hundreds of AI agents, built on OpenAI's Codex harness but running a DeepSeek model. GreyNoise and Blackpoint Cyber published separate investigations on 9 September, and by GreyNoise's count at least 440 servers at 395 organizations across 48 countries were compromised. This article looks at how speed and scale were measured in that record, and at how far those numbers can honestly be read.

> The figure most often quoted is 26 seconds. It belongs to the first 26 seconds after the campaign opened, not to some later peak, and a full day of preparation sits in front of it. PaperCut published its security advisory on 27 August; the attacker opened an empty workspace four days later, on 31 August. From there, downloading the pre-patch and post-patch builds and reading backwards to see what the fix had changed produced a working exploit, and the first remote code execution against a real victim landed 3 hours and 55 minutes in. First domain admin followed 2 hours and 20 minutes after that. Blackpoint, which took the same incident apart forensically, said up front in its own report that none of this is proof of fully autonomous attack.

> Sections 1 through 4 follow what the two reports measured and the limits their authors drew themselves. Section 5, where we carry the findings over to running agents of our own, is this article's interpretation and is not in either report.

### Key Figures

Source: GreyNoise, [AI-Orchestrated Campaign Against PaperCut NG/MF](https://www.greynoise.io/blog/ai-orchestrated-campaign-against-papercut-ng-mf)

<!-- stat-card -->
**26 sec** — 11 organizations fell right after launch — 78 in the first hour, 8 of them to domain admin

<!-- stat-card -->
**3 hr 55 min** — Empty workspace to first remote code execution — First domain admin took 2 hours 20 minutes more

<!-- stat-card -->
**280** — Victims that gave up credentials — 147 of them also lost OS and domain secrets

<!-- stat-card -->
**12** — Organizations taken over at the domain level — The whole directory dumped, credentials and all

## The campaign started in an empty workspace on 31 August

PaperCut NG/MF is an ordinary piece of back-office software that schools and companies use to track printing. It is a self-hosted Java web application, it runs with SYSTEM privileges by default on Windows, and it is usually domain-joined and wired into Active Directory. That last property matters later. On 27 August PaperCut issued a security advisory covering CVE-2026-81578, which lets configuration be changed without authenticating, and CVE-2026-82078, which turns a database connector into code execution. Chain the two together and a single unauthenticated web request becomes arbitrary code inside the PaperCut service. The campaign began four days later, on 31 August.

GreyNoise records the opening of that day like this.

“On 31 August 2026, a likely Russian-speaking malicious cyber actor (MCA) used 45.142.193.132 and artificial intelligence (AI) to develop, test, and use exploits for PaperCut NG/MF.”

GreyNoise logged the rest of that day minute by minute. At 14:44 UTC the attacker created an empty workspace and pulled down the advisory along with both the pre-patch and post-patch builds. At 15:54 the components of the two installations came out for side-by-side comparison, which is how the exploit fell out of the fix. The result went first against a patched and an unpatched server in Africa. At 16:09 a purpose-built multi-threaded tool narrowed the field to 462 candidates, and at 16:26 a country database arrived so that 1,005 candidates could be sorted by where they sat. At 16:35 a private lab went up with an Active Directory server and a vulnerable PaperCut install, and at 17:02 eight fake users were added to that lab's directory. At 18:39:39 the first remote code execution and shell landed on a victim in Australia, 3 hours and 55 minutes after the workspace was created. Domain admin on that same victim was confirmed at 21:00.

The 26 seconds belong to the next day. At 08:30 on 1 September the agents opened hundreds of SSH sessions to a second host and the campaign proper began. Eleven organizations went down in its first 26 seconds, and credential harvesting started before the first minute was out. Within the first hour 78 organizations were compromised, 8 of them all the way to domain admin. By 23:12, the last remote code execution of that day, the running total had passed 223 instances, with the remainder mopped up the following day. So the widely quoted 26 seconds is the reading at the instant the door opened, well before the campaign hit full stride. The fastest single case was a U.S. high school, where initial access to domain admin took 7 minutes. Across all victims, times to domain admin scattered between 5 and 144 minutes.
