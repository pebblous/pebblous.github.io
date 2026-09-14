---
title: Only 48.8% of 400 Randomly Drawn MCP Servers Started
subtitle: A probability sample of 400 from the 24,135 servers in the registry, each launched once and never repaired. A hand-picked sample reached 66.7%
date: 2026-09-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Only 48.8% of 400 Randomly Drawn MCP Servers Started

_A probability sample of 400 from the 24,135 servers in the registry, each launched once and never repaired. A hand-picked sample reached 66.7%_

## Executive Summary

> [!callout]
> Someone has now measured what an agent tool list actually contains, by drawing from it at random. An independent researcher swept the official MCP registry end to end, drew 400 servers with a published random seed, and launched each one exactly once without fixing anything. Fewer than half completed the initialization handshake. This report reads that measurement, and follows the same yardstick out to the question it puts to tool-use benchmarks.

> The 48.8% only takes on meaning next to something else. The same instrument, pointed at the 24 servers the author picked by hand, returned 66.7%. That 17.9-point distance is what curation alone buys, and the author measured it instead of guessing at it. The failure mix also runs against the usual assumption. Servers that never started at all outnumbered servers blocked by missing credentials by almost three to one.

> The second half of the paper holds that yardstick against what tool-use benchmarks ship. Records whose name and full description repeat character for character account for 0.4% of real deployed tools, against 68.8% and 85.6% in the release files of two benchmarks. The author is explicit that this is not evidence the benchmarks are bad. After global deduplication, two corpora built for the same purpose land on opposite answers, and one of them is cleaner than the tools people actually deploy. The lesson that survives is about the counting procedure rather than where a corpus came from.

<!-- stat-card -->
**48.8%** — Of the 400 randomly drawn servers completed the handshake — The same instrument returned 66.7% on a 24-server sample picked by hand

<!-- stat-card -->
**37.5%** — Never started at all — Credential gating, the usual suspect, accounts for 13.3%, a third as much

<!-- stat-card -->
**0 of 2,766** — Fatal JSON Schema violations — Among those same tools, 58.8% carried no safety annotation at all

<!-- stat-card -->
**0.4% vs 68.8%** — Exact name and description duplicates: real MCP against the BFCL v4 release — Without global deduplication, a count measures task repetition rather than tools

## 400 Drawn From 24,135, and Nothing Repaired

Any study that watches MCP servers actually behave hits the same wall. Most published servers are not in a state where you can simply run them and talk to them. The paper puts it plainly in its opening section: "Every behavioral MCP study must solve the same problem: most published servers cannot simply be launched and talked to."

The literature has answered that wall in several ways, and all of the answers involve selection. Reference sets and popularity lists select for servers people already use. Hand-built frames select for servers the curator could get working. MCPZoo, the largest effort of its kind, repairs servers with a multi-agent framework until they run, which turned 64,611 collected servers into 37,288 that support dynamic analysis. Each choice is sound engineering for the purpose it serves, and the paper grants as much. All four choices also erase the same quantity: how much of the published population was never alive to begin with.

"Each is a reasonable engineering answer, and each erases the same quantity: how much of the published population is simply dead on arrival."

Afsar, arXiv:2609.10962v1, §1 Introduction

So the paper turns the other way and declines to fix anything. Its sentence is short: "We measure that quantity by not solving the problem." It draws a probability sample from the registry, probes every draw exactly once with no repair, no retry and no credentials, and records an outcome for all 400, included or excluded with a reason. Letting no server fall out of the count quietly is the heart of the design.

The paper also stakes out a narrow claim for itself. In the related work section the author states first that this behavioral sample is two orders of magnitude smaller than what MCPZoo covers, and that it makes no security claims at all. The author then names the exact point where the two efforts complement each other. MCPZoo's repair pipeline exists to turn servers that do not run into servers that do, and the population that pipeline rescues is precisely what this paper measures. The same line gets drawn around Bharti's study, which tracked the registry across 120 snapshots. How fast descriptions go stale belongs to that work; this paper has two snapshots, so it uses its census only to size the population and build a sampling frame.

### 1.1. From census to sample

The measurement has two layers. First a collector walks the official registry API to the end by cursor pagination and records self-reported metadata only: deployment model, package ecosystem, declared transport, lifecycle status, and a pinned schema revision. That layer runs no third-party code, so it extends to the whole published population. The sweep of 22 August 2026 found 24,135 servers. Of those, 7,258 are published to npm, declare stdio, and carry active status. That subset is the sampling frame.

The draw sorts the frame by registry identifier and runs a partial Fisher–Yates shuffle driven by a seeded mulberry32 generator, taking 400 without replacement. The seed, 20260819, is published, and the draw manifest records the SHA-256 of the exact frame bytes. Anyone who redraws later and finds the frame has moved will detect the mismatch instead of assuming equivalence. Each drawn package is launched over stdio with `npx`, and the instrument speaks the MCP wire protocol directly: it completes the initialization handshake, enumerates tools with `tools/list`, and checks each tool's JSON Schema against the constraints the specification requires. No credentials are ever supplied, and no tool with side effects is ever called.
