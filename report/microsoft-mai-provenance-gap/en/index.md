---
title: The Tools Are Named, the Sources Are Sealed
subtitle: Microsoft named MAI-Thinking-1
date: 2026-07-11
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Tools Are Named, the Sources Are Sealed

_Microsoft named MAI-Thinking-1_

## Executive Summary

> [!callout]
> When Microsoft released its reasoning model MAI-Thinking-1 last month, it described how the data had been cleaned and filtered in unusual detail. Web documents were parsed with Trafilatura; more than ten billion web PDFs were run through Azure Document Intelligence for OCR; mathematical expressions were checked with SymPy. The processing tools it named number more than eight. Yet on the question of which publishers, journals, and STEM databases entered that corpus, and on what terms, it disclosed not a single line — citing "privacy, legal, safety, and competitive reasons." The refining tools were disclosed; the raw sources were hidden. This piece is about that **disclosure asymmetry**. (Last month, on the same model, we argued that "a declaration of cleanliness" is not the same as proof. This piece looks one layer beneath that declaration — what was actually disclosed and what was concealed, layer by layer.)

> This asymmetry is not a matter of taste but of procurement. If you divide the data supply chain into four layers — raw materials (sources), refining (tools), processing (training), and packaging (model cards) — everything MAI disclosed sits in the "refining" layer, and everything it hid sits in the "raw materials" layer. Anyone can reproduce and verify a tool, but no outsider can learn which publisher was signed, and for how much, unless the vendor says so. In fact, surveys suggest more than seven companies in ten cannot even trace the provenance of their own training data. So the legal and procurement teams buying AI data end up purchasing sources they cannot verify, quietly absorbing the risks of copyright, regulation, and non-reproducibility.

> But this opacity is not inevitable. The Allen Institute's OLMo released the datasheets and licenses of a trillion-token corpus in full, and the Data Provenance Initiative cut the share of "license-unknown" datasets from 72% to 30% through third-party audit alone. It is not that the sources cannot be disclosed — it is that a choice was made not to disclose them. This report places MAI on a spectrum running from full disclosure through partial disclosure to opacity, and turns the question into a practical checklist: at each layer, what can a procurement team demand, and what can it actually verify? Data quality is decided upstream in the supply chain, not in the finished product (the model); when the upstream is opaque, any downstream guarantee of quality is merely a declaration.

<!-- stat-card -->
**10B→620M** — Web PDFs surviving the crawl — A "refining" layer precise enough to drop 93.8%

<!-- stat-card -->
**20%→7%** — FMTI "data access" transparency (2023→2024) — Source disclosure is retreating industry-wide

<!-- stat-card -->
**77%** — Orgs that can't trace training-data provenance — Kiteworks 2026 survey (est.) — inability to verify

<!-- stat-card -->
**72%→30%** — Share of "license-unknown" datasets — After third-party audit — proof it can be disclosed

## Two Disclosures, One Silence

Read the data section of the MAI-Thinking-1 technical report and the first surprise is its specificity. Microsoft wrote that it used the open-source extractor Trafilatura to pull body text from web HTML, and that it stripped out adult and piracy domains with the University of Toulouse's UT1 blocklist. More than ten billion web PDFs were OCR'd with Azure Document Intelligence, of which only 620 million survived; 7.4 trillion tokens of GitHub code went through three layers of deduplication — exact SHA-512, fuzzy MinHashLSH, and semantic dedup using Qwen3 embeddings. STEM material was selected with seven topic classifiers, and there is even a sentence saying that mathematical expressions were solved with SymPy to confirm they were correct.

Read this far and the model looks as though it has disclosed its data-processing pipeline with unusual transparency. And at this layer, it genuinely is transparent. Know the names of the tools and a third party can reconstruct the same pipeline, reproduce the results, and verify them. The problem is what comes next. On the question of **where those carefully cleaned and filtered materials came from in the first place**, the same report falls silent. Which publishers supplied the books and journals, which vendors sold the STEM and coding problems, who created the human preference data — all three categories are sealed off by a single phrase: "privacy, legal, safety, and competitive reasons."

This is what the report calls the "disclosure asymmetry." What was disclosed is a list of reproducible tools; what was hidden is the list of raw materials those tools handled. The boundary splits cleanly in two. On the left are the tools the report named down to the specifics; on the right are the suppliers obscured category by category.

| Disclosed — refining tools (reproducible) | Hidden — raw sources (reliant on assertion) |
| --- | --- |
| ✓ Trafilatura — web HTML body extraction | ✕ List of book/journal publishers |
| ✓ UT1 blocklist — harmful-domain removal | ✕ STEM/coding problem vendors |
| ✓ Azure Document Intelligence — PDF OCR | ✕ Human preference-data vendors |
| ✓ SHA-512 / MinHashLSH / Qwen3 embeddings — 3-stage dedup | ✕ License terms of each source |
| ✓ 7 topic classifiers · SymPy formula verification | ✕ Corpus composition ratios |

********************
                        What matters is that the left column cannot stand in for the right. Knowing the tools is not the same as knowing the materials. Which book, from which publisher, was fed into the same OCR engine can never be recovered from eight tool names. This is not to say Microsoft hid something; on the contrary, it honestly stated that "this part will not be disclosed." But explicit silence is still silence, and from a procurement standpoint that silence remains a verification gap.

## Layers of the Data Supply Chain: What's Visible and Where the View Ends

To see the disclosure asymmetry clearly, you have to treat AI data as a single supply chain and break it into layers. Just as a manufacturing supply chain divides into raw materials, processing, assembly, and packaging, training data can be split into four layers. **Raw materials** is where the data came from in the first place — sources like publishers, journals, the web, and vendors, together with their license terms. **Refining** is the tools and pipelines that clean and filter those raw materials. **Processing** is the actual training of the model on the refined data. **Packaging** is the model cards and data cards that describe the result.

The key point is that **each layer differs in how far an outsider can verify it**. The refining layer is made of tools, so if you know the names you can reproduce it. The raw-materials layer, by contrast, offers almost no way to confirm anything beyond the vendor's assertion. An outsider who never sees the contract can only take "we obtained it from News Corp" on faith, or not. The processing layer (training) reports scale — so many tokens on so many GPUs — but how the data was actually mixed cannot be reproduced, and the packaging layer (model cards) is a document the vendor writes itself, so if the upstream is opaque that account cannot be verified either. Set the four layers against their verifiability and the pattern is plain: what MAI disclosed is the verifiable refining layer; what it hid is the unverifiable raw-materials layer.
