---
title: After the PHP2Shell Emergency Patch, the Official Record Names No AI
subtitle: Three companies say AI found the flaws, but the GitHub advisory and the CVE records disagree on how many reporters there were, and neither one names a model
date: 2026-10-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# After the PHP2Shell Emergency Patch, the Official Record Names No AI

_Three companies say AI found the flaws, but the GitHub advisory and the CVE records disagree on how many reporters there were, and neither one names a model_

## Executive Summary

> [!callout]
> This article is a count of where, and in what form, the claim that "AI found it first" was actually written down for PHP2Shell, the pair of vulnerabilities PHP patched on an emergency schedule on 21 October 2026. It is not an explanation of what the flaws do. Dozens of those already exist. What we opened instead are two records: the GitHub security advisory that people read, and the CVE record that machines read.

> The two do not match. The GitHub page lists four reporting accounts, all four tagged 'Reporter'. Open the CVE records and there are three reporting parties, and OpenAI carries the role finder on one vulnerability and reporter on the other. Under the format spec those are different things. One account appears on the GitHub page and is absent from the CVE record altogether. And neither record carries a single line naming a model.

> That is not for want of a field. The CVE record format has a separate value for the tool used in the discovery and another for the party that funded it, and the role dropdown on GitHub's own advisory editor still carries 'Tool'. They are also in use. Google names its own AI as the finder in its records, and curl and Red Hat have written the same name into theirs. This article does not rule on who found the flaws first. It counts what was written where, and what was not.

<!-- stat-card -->
**0 lines** — Model names in the official records — Four reporters on the GitHub advisory, three in the CVE records. Neither names a model

<!-- stat-card -->
**774** — CVE records that fill the tool field — 0.83% of the 92,928 records that carry any credit at all. Our count as of 22 October 2026; method in section 3

<!-- stat-card -->
**18** — Earlier records that do name an AI — Google, curl and Red Hat have written 'Google Big Sleep' into records of their own

<!-- stat-card -->
**6 hours** — Between the first attack and the patch — First exploitation seen 07:43 UTC on 21 October, patch published 14:00 UTC the same day

## The Attack Arrived Before the Patch

PHP2Shell is the name researchers gave to two vulnerabilities. By number they are CVE-2026-109618 and CVE-2026-109619, and PHP's own assessment puts both at 9.2 under CVSS v4.0. The blast radius is every PHP installation that serves web requests. The patched releases are 8.2.35, 8.3.36, 8.4.27 and 8.5.12; anything on 8.1 or below no longer receives updates from the PHP project.

The php.net notice describes the two flaws briefly. In the first, the path PHP takes when it runs out of memory can tear the interpreter down while a request's internal data is only half built, and the request teardown that follows then treats that broken data as sound. In the second, internal state attached to a request survives after the memory holding it has been handed back, so the next request on the same worker process reads the stale state before it is reinitialized. This article does not cover how to reproduce either. If you need mitigations, take them from the php.net notice as written: pin memory_limit and post_max_size in production for the first flaw, and disable session.upload_progress.enabled and restart every worker process for the second. Either way, the answer is the patch.

What makes this incident the subject of this article is not the flaws themselves but what happened on either side of them. Two and a half months passed between discovery and disclosure, the details leaked the day before disclosure, the disclosure date was pulled forward by a day, and the first attack still arrived before the patch. The table below sets that sequence down with times attached. All times are UTC.

| Time (UTC) | What happened |
| --- | --- |
| 5 Aug | Ryan Austin of Calif finds several code execution paths in the PHP source. Calif's official account points to this date as its earliest evidence; much of the secondary coverage says 1 August |
| 11 Aug | Calif files its first report with the PHP security team, starting the coordinated disclosure process |
| 19 Aug | Wiz Research independently finds the same flaws. Its blog says it used three tools: Wiz Atlas, Gemini 4 Argon and GPT-5.6 Sol |
| 24 Aug | Wiz reports to PHP |
| 27 Aug | The GitHub security advisory is opened, and the four reporting accounts are registered on it |
| 25 Sep | The fix pull request is opened |
| 20 Oct | An anonymous post publishes details including the CVE numbers and the scheduled disclosure time. Tool screenshots and a short video follow, and watchTowr says it reproduced the issue and confirmed the post was genuine |
| 21 Oct 07:41 | Chainguard breaks the embargo and ships container images carrying the patch ahead of release |
| 21 Oct 07:43 | Cloudflare observes the first exploitation attempts aimed at these two vulnerabilities |
| 21 Oct 13:48 · 13:54 | The two CVE records are published (13:48:34 and 13:54:43) |
| 21 Oct 14:00 | The patch is published. The original plan was the same hour on 22 October; the leak moved it up a day |
| 21 Oct 14:34 | CISA attaches its assessment to both records. The value in the exploitation field reads 'none' |

Sources: PHP Foundation blog (2026-10-21), the php.net notice archive, both CVE records (retrieved 2026-10-22), daubois.dev, watchTowr, Sansec, and reporting that relays Cloudflare. Where the discovery date splits, both values are written in.

Two rows catch the eye first: 07:43 and 14:00. The attack ran about six hours ahead of the patch. That attacks move fast is not itself news. We covered [the tally showing the gap between disclosure and weaponization falling below a day](/report/microsoft-digital-defense-report-2026-ai-attackers/en/) earlier this year. This incident is that tally in the flesh.
