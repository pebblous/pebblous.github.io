---
title: Nemotron PII Japan Teaches a Model to Find Personal Data Without Using Any
subtitle: NVIDIA
date: 2026-11-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Nemotron PII Japan Teaches a Model to Find Personal Data Without Using Any

_NVIDIA_

## Executive Summary

> [!callout]
> A dataset has arrived that promises to teach a model to find personal data while holding none of it. Nemotron PII Japan, which NVIDIA published in Tokyo, is 100,000 fake documents modelled on forty-three Japanese forms drawn from eight fields: healthcare and finance, then public administration, employment, education, law, telecom and IT, and e-commerce. The names, addresses and account numbers inside belong to no living person, and every one of those spots is marked with the kind of personal data it holds. It went out under CC BY 4.0, which permits commercial use.

> Fine-tuning one open detection model on this data lifted its score on an external evaluation set from 13.41% to 73.80%, more than a fivefold rise. Yet the same dataset card writes a line right beside that score: good results on synthetic data do not guarantee complete detection, fairness, privacy protection, legal compliance or leak prevention on real data. That sentence, put there first by the people who built the thing, is the most important passage in this dataset.

> Sections 1 through 4 follow what the dataset card and public reporting state. Section 5, which takes up the gap left by Japanese forms being published while Korean forms are not, is this article's own reading.

### Key numbers

The first two measure the size of what NVIDIA put out. The last two mark how far the score can be trusted.

Source: [Nemotron-PII-Japan dataset card](https://huggingface.co/datasets/nvidia/Nemotron-PII-Japan) (Hugging Face), [CASRAI article](https://casrai.org/news/nvidia-nemotron-pii-japan-synthetic-documents-release-2026) (November 15, 2026).

<!-- stat-card -->
**810,703** — personal-data marks in place — 56 types across 100,000 documents, 8.11 per document

<!-- stat-card -->
**13% → 74%** — external score before and after tuning — same model, same evaluation set, threshold fixed at 0.5

<!-- stat-card -->
**24%p** — distance between internal and external marking — 98.08% inside, 73.80% once outside

<!-- stat-card -->
**0** — control documents without personal data — all 100,000 carry personal data, so false alarms cannot be measured inside this set

## NVIDIA's Tokyo Release Is 100,000 Fake Documents

Nemotron PII Japan is a dataset NVIDIA published at its developer event in Tokyo. Nemotron Personas Finance Japan, a set of synthetic personas for Japanese finance, came out the same day. Both were presented as a way to help companies working in Japanese tune models on their own data.

The sources disagree from the publication date onward. NVIDIA's announcement gives November 9 as the release date, while the dataset card on Hugging Face is stamped November 10. The CASRAI article points out the one-day difference. In an article that works through numbers a company reported about itself, the fact that the very first checkable item, the date, differs between two sources is worth writing down.

Inside are 100,000 synthetic Japanese business documents, bundled into a single parquet file of 75.5MB. The eight fields are healthcare, finance, public administration, employment, education, law, telecom and IT, and e-commerce, and within them the set imitates forty-three forms actually in use. Fixed-field forms and free-form documents are mixed together. There are 56 types of personal data, and the places in the documents where one of those types is pointed at come to 810,703, an average of 8.11 per document.

The data splits into 95,000 documents for training and 5,000 for internal validation. There is no published fixed split, though. A researcher who wants to measure the score again under the same conditions cannot take the exact exam paper NVIDIA used. The licence is CC BY 4.0, so with attribution the data can be used commercially.

> [!callout]
> Building a model that detects personal data has always required documents that contain personal data, and that has been the standing contradiction of this field. Collecting the training data is itself an act of collecting personal data. Synthetic documents step around the whole thing. Not one living person's information goes in, so there is nothing to leak when the data is published, and because there is nothing to leak the licence can be opened. The CC BY 4.0 licence comes from there.

## The Labels Are Not Added Afterwards

Personal-data detection sets are usually built by having people read existing documents line by line and mark them. It is expensive and slow, and the standard wobbles from one reader to the next. Above all, those documents hold real personal data, so the workers end up seeing it.

This dataset reverses the order. It starts by drawing a person's attributes from Nemotron-Personas-Japan, a bundle of synthetic personas built on official Japanese statistics. Values with a fixed format, such as residence registration numbers or account numbers, are filled in by rule-based generators, and proper nouns such as place names and institution names come from lists prepared in advance. Financial institution and corporate names are drawn with reference to real lists, but no real name is sent out into the document. Only then does a language model weave those values into natural Japanese sentences, and the woven result is checked again and brought back into format.

The process has a name. NVIDIA states on the card that it stamped this dataset out with NeMo Data Designer, its own synthetic-data generation tool. The personas used as input were not the published Nemotron-Personas-Japan dropped in as is, either. The work used a one-million-record Japanese persona asset assembled separately inside Data Designer on the basis of that data. Which also means that swapping in other forms and other personas to stamp out another country's paperwork with the same tool is not blocked by anything in the process.

The last step is the point. The labels are not attached by a person reading a finished document. A program takes the positions already fixed when the values went in and writes them down as they are. The side that built the document knows from the start which character to which character holds which kind of personal data. The annotation cost all but disappears, and so does the standard that used to wobble from worker to worker.

Of the four steps, the labels are fixed at the second, and at no point does a person step in.
