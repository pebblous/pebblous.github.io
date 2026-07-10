---
title: 21 Million Songs Trained AI — and a Newsroom Named the Source
subtitle: The Atlantic
date: 2026-06-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 21 Million Songs Trained AI — and a Newsroom Named the Source

_The Atlantic_

## Executive Summary

> [!callout]
> On June 21, 2026, the American magazine _The Atlantic_ released something through its "AI Watchdog" project: a searchable database of roughly 21 million songs that circulated through the training of AI music-generation models. Anyone can look up a track by artist name or song title. The AI companies that actually used this data never disclosed what their models learned from. So the provenance of that training data was reconstructed after the fact and turned into a public ledger — not by the firms that used it, but by a newsroom acting as a third party.

> The single largest dataset, LAION-DISCO-12M, holds roughly 12.3 million songs scraped from YouTube alone — about 91 years of continuous music. It mixes major names like Taylor Swift and The Beatles with unknown indie musicians, and one Nashville artist used the tool to confirm that 71% of his own discography was inside it. This piece is less about the event itself than about the structure beneath it: that the source had to be rebuilt from the outside.

> For anyone who works with data, this leaves a single question. Who is responsible for proving that data is clean? The lineage of training data cannot be recovered later if it isn't recorded at the moment of collection. The Atlantic's ledger shows exactly what happens when provenance is not built into the design from the start.

### Key Figures

Sources: [Engadget](https://www.engadget.com/2194804/investigation-by-the-atlantic-reveals-many-millions-of-songs-used-for-ai-music-training/), [gearnews](https://www.gearnews.com/ai-training-data-the-atlantic-tech/)

Four numbers capture the scale and weight of this event at a glance: the total volume of music in the released datasets, the size of the single largest dataset, the share one musician found of his own catalog, and the revenue loss this trend is projected to leave on artists. Together they make clear that provenance isn't an abstraction — it is a matter of people and money.

<!-- stat-card -->
**21.2M songs** — Training music revealed — Combined tracks across four public datasets circulating in AI music training

<!-- stat-card -->
**12.3M songs** — LAION-DISCO-12M — The single largest dataset, auto-scraped from YouTube — about 91 years of music

<!-- stat-card -->
**71%** — One musician's discography — Share a Nashville artist found of his own catalog inside the dataset

<!-- stat-card -->
**$4.6B** — Projected 2028 revenue loss — Annual artist revenue decline projected from AI-generated music (CISAC)

## 21 Million Songs Became Searchable

The Atlantic's Alex Reisner tracked down four public datasets floating around the AI music-generation field. Together they hold about 21 million songs. Rather than write the list up only as an article, he published it as a tool called "AI Watchdog," where anyone can search by artist name, song title, or ISRC code. No account required. The point is simple: see for yourself whether your music is in there.

What makes the tool remarkable is the gap it fills. The companies that built AI music models have never disclosed what they trained on. So artists, courts, and regulators alike had no way to answer the question "was my music used?" The Atlantic analyzed datasets that had been posted to academic repositories and brought that answer back in searchable form. Because the provenance documents weren't where they should have been, someone rebuilt them from the outside.

![Shelves of reel-to-reel tape recordings in a music archive vault — the physical analog antecedent of the millions of songs now circulating in AI training datasets](./image/img-01-music-archive-vault.jpg)
*▲ Reel-to-reel tape shelves in a music archive vault. AI training datasets sit on the digital continuation of this analog lineage — but without the labeling | Source: [Alan Burdette, Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Archives_of_Traditional_Music_Vault.jpg)*

> [!callout]
> **The point**: the training-data ledger that AI firms should have kept was built after the fact by a third party that never used the data. Making it searchable means a coordinate now exists for assigning responsibility.

## Whose Music Is Inside the Dataset

The largest of the four is LAION-DISCO-12M, holding roughly 12.3 million songs. Next is SLEEPING-DISCO-9M with about 9 million, followed by smaller datasets including a Free Music Archive–based archive. Most entries are not audio files but YouTube links and metadata, used by automated tools that download the music from those links. LAION, a German non-profit, distributed the datasets for academic purposes and warned against commercial use — but the data, once posted to academic repositories, had already been downloaded thousands of times.

The names on the list cut across the entire music industry. Taylor Swift, Bad Bunny, Billie Eilish, Nirvana, The Beatles, Radiohead, and Wu-Tang Clan sit on the major side. On the other side are names almost no one knows. The Berlin musician Hainbach found 151 of his own tracks; one producer found every one of the 138 songs he had released between 2017 and 2024. A Nashville musician confirmed that 71% of his discography was included. In other words, this is not only a problem for large artists.

Some uses are confirmed. Google and Stability AI were found to have used Free Music Archive data; Google's position is that this falls "within YouTube's terms of service." The music-generation services Suno and Udio are in the middle of separate lawsuits. Either way, the situation is the same: you can only learn what a model trained on by cross-referencing it against external datasets.

> [!callout]
> **Why it matters**: the datasets scrape famous and unknown artists without distinction. Without provenance records, you can't even tell who is inside them without an external comparison.

## Why the AI Firms Never Spoke First

There is a reason the AI companies stayed silent. The path that pulls public academic datasets into commercial model training runs through a gray zone. Datasets like LAION are distributed with an academic-purpose caveat, but the moment that data is used to train a commercial model, the caveat blurs. Disclosing the source becomes, in effect, writing down that you entered that gray zone. So many firms held up "fair use" as a shield and declined to say what they trained on.

But the cost of silence is now being billed through litigation. The fight began in June 2024, when the Recording Industry Association of America (RIAA), representing UMG, Sony, and Warner, sued Suno and Udio — and the disputes have run in a single thread since. Suno is fighting Sony: a November 2025 copyright-fingerprint analysis found millions of UMG- and Sony-owned songs in the training data, and Suno holds up fair use as its shield. The key trial is set for July 2026.

Udio took a different road, reaching sequential settlements with UMG, Warner, Merlin, and Kobalt and adopting content filtering and fingerprint-recognition systems. On top of that, Hagens Berman, the firm that led the $260 billion tobacco settlement, has joined an independent-artist class action. It is a signal that the front of this fight is widening from the major labels toward unknown artists.

> [!callout]
> **The structure**: the reason sources went undisclosed is that disclosing them amounted to confessing the risk. But that silence invites outside reconstruction, and the rebuilt ledger then becomes evidence in court.

## When a Third Party Must Rebuild Provenance

The real picture of this event lies in its sequence. The AI firms left no record of their training-data provenance; a newsroom analyzed public datasets and reconstructed it after the fact; and artists, courts, and regulators began using that rebuilt ledger to demand accountability. The side that should have created the provenance and the side that actually did are misaligned. It was a third party — standing with the people whose music was taken, not with the companies that used it — that redrew the lineage.

This is not a simple copyright dispute. It is a structural problem: when data lineage isn't built into the design, the empty space gets filled, by force, from the outside. And now that filling is becoming an obligation rather than a choice. The EU AI Act enters substantive force in August 2026, requiring general-purpose and high-risk models to publish a summary of their training data's sources and composition. The silence that was a gray zone yesterday becomes a violation tomorrow.
