---
title: Korea
subtitle: Korea
date: 2026-11-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Korea

_Korea_

## Executive Summary

> [!callout]
> The way the Korean government manufactures the sole proprietor records it publishes as open data is changing. From November 27 the Financial Services Commission adds six more financial public data APIs to the national public data portal, and three of them hold sole proprietor profile, financial statement and banking information that was invented rather than collected. Where the government used to delete names and trade names from the original ledger and send out what was left, it now sends out a ledger written from scratch that inherits only the statistical properties of the original.

> The same kind of data from the same five institutions was opened once before, four years ago, by pseudonymization. The four sole proprietor APIs released then stay where they are and the three synthetic ones take their place alongside, bringing the field to seven APIs. The press release says the Financial Security Institute assessed whether the synthesis was adequate, but what it examined and against which standard does not appear in any public document. The Commission itself promised a year ago to put out a standard for using synthetic data by the first quarter of 2026, and this release does not point to that standard. In earlier research, credit scoring models trained on synthetic data scored lower than models trained on real records.

> Sections 1 through 4 follow what the announcement and the published reporting state. What the missing review standard means, and the judgment in section 5, are this article's reading.

### Key Figures

The first two measure how large the opening is. The last two mark how far it can be trusted.

Sources: [Financial Services Commission press release](https://www.fsc.go.kr/no010101/88237) (November 26, 2026), [Newspim](https://www.newspim.com/news/view/20261126000262), [arXiv:2301.01212](https://arxiv.org/abs/2301.01212).

<!-- stat-card -->
**38** — Fields released as invented numbers — Of 64 new fields: 10 profile, 14 financial, 14 banking

<!-- stat-card -->
**4 → 7** — Sole proprietor APIs on the portal — Three synthetic APIs added beside the four pseudonymized ones from 2022

<!-- stat-card -->
**3% · 6%** — AUC and KS lost by a credit model trained on synthetic data — A 2022 study's result, not a measurement of this dataset

<!-- stat-card -->
**1** — Sole proprietor API left out of the switch — Credit evaluation data stays in its 2022 pseudonymized form

## Three of the Six New APIs Carry Invented Numbers

The press release the Financial Services Commission issued on November 26 was titled "We are opening more AI-friendly financial public data." From Friday November 27, six APIs, six tables and sixty-four fields join the national public data portal. As of the end of October the financial public data holdings stood at 110 APIs and 349 tables, so this release takes the API count to 116.

The six APIs fall into four kinds. Korea Housing Finance Corporation contributes housing finance product data, which carries product names such as the Didimdol and Bogeumjari mortgage loans along with their sales periods, and securitization data, which carries securitization periods and asset transfer dates. The Commission itself opens financial regulation interpretation records as plain text, holding the question asked, the statutes involved, the gist of the answer and the reasoning behind it, a bundle offered explicitly for training language models. The remaining three are the sole proprietor synthetic data.

The three synthetic APIs differ in how many fields they carry. Profile data holds ten fields, among them the owner's gender and age band, the year of business registration and founding, the business region and industry, the headcount, and whether the business is suspended or closed. Financial statement data holds fourteen fields covering capital, revenue, operating profit, net profit, total liabilities and total assets. Banking data holds fourteen fields as well, covering average deposit and loan balances, guarantee balances, and whether the business carries working capital or facility loans. Added together that is thirty-eight, more than half of the sixty-four fields opening this time.

Five institutions supplied the data. Korea Credit Guarantee Fund, Korea Development Bank, Industrial Bank of Korea, Korea Housing Finance Corporation and Korea Inclusive Finance Agency each handed over the sole proprietor transaction records they hold. Instead of sending those records out as they are, the agencies ran them through a synthesis process, and the Commission's institution table names the Financial Security Institute as the body that assessed whether the result was adequate.

Usage figures came out alongside. As of the end of October the cumulative volume released stands at 4.42 billion records, API access applications at 93,088, roughly 2.7 times the 34,135 recorded at the end of last year, and data queries at 1.06 billion. The Commission said it will widen the opening again in 2027 in forms that are easy for AI to train on and use, with standardization and quality improvement carried out alongside.

> [!callout]
> The quietest passage in the whole announcement is the fact that the numbers in those three APIs are not the numbers of any real business. The revenue figure in a given row is not that shop's revenue, and no row pairs with a sole proprietor who exists. Yet the overall distribution and the relationships between fields are built to resemble the original, and that is the promise synthetic data makes. How well that promise was kept decides what this data is good for.

## Four Years Ago They Masked the Rows, This Time They Rebuilt Them

The same kind of data from the same five institutions has been opened once already. In November 2022 the Financial Services Commission released four sole proprietor APIs as financial public data: profile, financial statement, banking and credit evaluation information. The method used then was plain pseudonymization. Fields that point straight at a person, such as the owner's name, the trade name and the business registration number, were dropped, and fields that can corner a person once you narrow them down, such as age, headcount or address, were blurred into bands before release.

This press release points at that method explicitly and says the new release moves beyond "plain pseudonymization." What changed is the direction of the process. Pseudonymization leaves an original row intact and erases or blurs part of it. The thread between a published row and a business that exists grows thin but never snaps. Synthesis does not send the original row out at all. It extracts the distributions and the relationships between fields from the original as a whole, then writes new rows that follow those properties. No published row has an original row behind it.

The two methods protect different things and give up different things. Pseudonymization preserves almost the entire shape of one original row, but match a few of its fields against another dataset and a path back to the person remains. Synthesis erases that path inside the process and in exchange guarantees nothing about the shape of any single original row. The diagram below draws out that fork.
