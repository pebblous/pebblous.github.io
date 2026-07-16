---
title: How to Measure One Song
subtitle: With ~300 AI licensing deals signed across the creative industries, payout is shifting from prompt-counting to data-contribution measurement
date: 2026-07-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How to Measure One Song

_With ~300 AI licensing deals signed across the creative industries, payout is shifting from prompt-counting to data-contribution measurement_

## Executive Summary

> [!callout]
> AI licensing deals across the creative industries have already reached nearly 300. In music alone, Suno, Udio, Sony Music, and Universal Music have signed contracts. Yet there is still no yardstick for the question that matters most to a rights holder: "How much did my song contribute to this model?" The deals are piling up, but the basis for splitting the money is missing.

> Today's payouts mostly divide by prompt count or number of generations. That approach allocates shares regardless of how much a song actually contributed to the model's performance. The core problem is not copyright but measurement. Can we convert into a value how much a single training sample contributed to an output? That is the question of data attribution — a problem Pebblous readers already know well.

> This piece lays out what each of three measurement technologies — influence functions, embeddings, and watermarking — actually measures and where each hits a wall, and how real services and recent research route around those limits. Prompt count measures "how much was used." A fair payout needs to measure "how much changed."

<!-- stat-card -->
**~300** — Creative-industry AI deals — BPI · WPI Economics 2026 tally

<!-- stat-card -->
**26** — Key deals in music — Suno · Udio · Sony · Universal, etc.

<!-- stat-card -->
**5%** — Small labels participating — Deals skew toward the majors

<!-- stat-card -->
**0** — Standard contribution metrics — No recognized basis for fair payout

## 300 Deals, No Yardstick

According to a 2026 report from the British Phonographic Industry (BPI) and WPI Economics, 274 commercial AI agreements have been struck across the creative industries, a figure the press rounds to "nearly 300." Narrow it to music alone and there are 26 key deals involving names like Suno, Udio, Klay Vision, Stability AI, ElevenLabs, Spotify, and Vermillio. Sony Music has partnered with Vermillio; Universal Music with Prorata.ai.

The numbers are climbing fast, but participation is uneven. In the same report, only 25% of mid-sized labels and 5% of small labels had completed licensing agreements for AI products. With deals concentrated among the large rights holders, the creators with the least bargaining power are precisely the ones who can least verify on what terms, and for how much, their songs were sold.

The deeper gap is not the number of contracts but the basis for them. An open letter led by the European Music Managers Alliance (EMMA) and joined by 31 music organizations took issue with clauses buried in existing contracts that fold works into AI use automatically "unless you opt out." The American Federation of Musicians (AFM) has sued to claim a share of the major labels' Suno and Udio licensing revenue. Before anyone has settled what to divide, or on what basis, the contracts keep stacking up.

The industry has given this gap a name: Creative Weight Attribution. Proposed by researchers at Fraunhofer alongside independent rights-management bodies, the idea is to measure not surface-level usage such as prompt count, but the "creative weight" a work carries within a model's training and generation. The direction is clear; what remains is the technology. Music-recognition tools still cannot reliably tell what came from which song. So the next question naturally splits in two: what exactly do today's payouts measure, and what technology would it take to measure contribution properly?

## What Prompt-Counting Payouts Miss

Current practice comes in two broad forms: pro-rata splits proportional to the number of generations or prompts, and flat fees paid regardless of usage. Both are simple to compute. But a simple calculation is not a fair one.

First, prompt count is unrelated to how much a song actually contributed to the model's performance. Some songs are decisive in teaching a genre's harmonic feel; others are buried among tens of thousands. Prompt-based payouts treat the two identically. They count how many times a user made a request, never asking whose work the result came from.

Second, composition and master (recording) rights get tangled together. Most systems treat the recording as a single asset and check only for recording-level similarity. When an AI generates the same melody in a different arrangement, the composer goes unrecognized while only the master rights holder is paid. That is a structural flaw. Because there is a shortage of data that separates melody from production, the problem does not resolve easily.

> [!callout]
> The real problem with prompt-counting is not imprecision but direction. It measures consumption (how much was used). What creators need is a measure of contribution (how much was changed). Because the target of measurement is wrong, no amount of precise counting will converge on fairness.
