---
title: DeepSeek
subtitle: CATL put a large share into the roughly $15 billion DeepSeek is raising, and this year it also bought a data center operator and a DC power equipment maker
date: 2026-10-23
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# DeepSeek

_CATL put a large share into the roughly $15 billion DeepSeek is raising, and this year it also bought a data center operator and a DC power equipment maker_

## Executive Summary

> [!callout]
> This article reads the roughly 100 billion yuan ($15 billion) raise that Reuters and Bloomberg reported on October 22, 2026. What catches the eye first is not the amount but the list. The name that sits beside Tencent among the biggest investors belongs to CATL, a company that makes electric-vehicle batteries.

> This is not the first time CATL has put money into AI. Within five months this year it took 38.1 percent of the data center operator VNET for $942 million and 49 percent of the parent of Zhongheng Electric, a maker of DC power equipment for data centers, for 4.1 billion yuan, and in between it joined DeepSeek's first outside funding round. All three were arranged the same way: a large stake, no control. Of the three, the VNET deal came with a joint release in which the two companies named the market they are going after. Only the reason for the money in DeepSeek is still unexplained.

> Sections 1 through 3 follow what is written in the reporting, the filings, the joint release the two companies issued, and the price list DeepSeek publishes for its own API. Section 4, which reads the four pieces as one picture, and Section 5, which treats the token price as a power question, are this article's interpretation.

### Key Figures

The first two give this round and the money CATL spent on the power side. The last two give how DeepSeek prices its tokens and where those tokens are headed.

Sources: [China Daily](https://www.chinadaily.com.cn/a/202610/22/WS6ad9b00ee4b06d4aa0564374.html) · [Dealroom](https://dealroom.co/news/164903-deepseek-doubles-round-to-15-billion-led-by-catl-and-tencent/) · [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-05-13/catl-linked-investors-to-buy-vnet-stake-in-942-million-deal) (May–October 2026)

<!-- stat-card -->
**100B yuan** — What DeepSeek is closing — About $15 billion. The target rose at least twice, from 50 billion through 80 billion to here

<!-- stat-card -->
**~$1.5 billion** — What CATL's side spent on power assets this year — $942 million for 38.1% of VNET, 4.1 billion yuan for 49% of Zhongheng Electric's parent (part of it in kind)

<!-- stat-card -->
**Double** — DeepSeek's peak-hour token premium — Since August 16, the Chinese business-hours rate has been exactly twice the rate of the remaining hours

<!-- stat-card -->
**1 gigawatt** — What DeepSeek is building in Ulanqab — Power for 750,000 households at full run. 160,000 Huawei chips are planned for inference

## The Target Rose Twice While the List Grew Longer

On October 22, 2026, Reuters and Bloomberg reported almost the same thing. DeepSeek, based in Hangzhou, is days away from closing a raise of about 100 billion yuan, roughly $15 billion in dollars. The valuation set before the new money came in was about 500 billion yuan. The round has not closed, so the terms can still change. Two days earlier, on October 20, the United States ordered federal civilian agencies to strip DeepSeek technology out of their systems.

![Official DeepSeek logo](./image/img-01-deepseek-logo.svg)
*▲ DeepSeek, the company at the center of this round | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DeepSeek_logo.svg)*

The target was not this size from the start. It began at 50 billion yuan, passed through 80 billion, and climbed to 100 billion. Dealroom converted the early target to $6.88 billion and wrote that the company had raised its target at least twice. This is the case where demand runs over and the side receiving the money makes the number bigger.

More than 15 firms took part. The existing shareholders CATL, Tencent and IDG Capital put in more, and Midea in appliances, Meituan in delivery, Geely in cars and GigaDevice in semiconductors joined for the first time. NetEase, Boyu Capital, CPE and Legend Capital are on the list as well. Of these, Tencent and CATL were named the biggest investors.

> [!callout]
> Dealroom summed up the list as Chinese frontier AI now running on money from the country's own industrial champions: battery and automotive companies, appliance and semiconductor makers, and the giant internet platforms. The industry it put first is batteries.

The previous round was in June this year. It was the first time DeepSeek had taken outside money since it was founded, about 50 billion yuan or $7.4 billion, and the valuation reported after the money came in was around $50 billion. Founder Liang Wenfeng's stake is written down differently in each tally. The share registered directly in his name is about 34 percent, and counting what he holds through partnerships it reaches the 80 percent range. Put the two rounds together and DeepSeek has raised more than $22 billion this year. The company has appointed CITIC Securities as underwriter and is preparing a listing on Shanghai's STAR Market.

## What DeepSeek Sells Is Tokens, and the Price Splits by the Clock

To make sense of the investor list, you have to start from what this company sells. On September 24, at a meeting with investors, Liang Wenfeng said annualized revenue had reached $1 billion, more than double the figure of a few months earlier. And most of that revenue comes from the token fees enterprises and developers pay to reach the model through the API. It is closer to a wholesale business, sold by the token, than to consumer traffic through an app.

At the same meeting Liang said customers had not left even after the price of model access went up, and that demand was still strong. The increase he was talking about took effect at 16:00 UTC on August 16. Until then DeepSeek's price list held one value all day long, and the revision split it into two bands of hours.

The peak hours written in the current price list are 01:00 to 04:00 and 06:00 to 10:00 UTC, Monday through Friday, excluding Chinese public holidays. Moved to Beijing time that is 9 a.m. to noon and 2 p.m. to 6 p.m., China's working hours exactly. Every remaining hour and the whole weekend is off-peak, and the off-peak rate is exactly half the peak rate. For v4-pro, per million tokens, cache-miss input runs $0.66 off-peak and $1.32 at peak, and output $1.98 and $3.96.

The revision raised the price itself as well. Before it, v4-pro output cost $0.87 per million tokens no matter the hour. Today the cheapest off-peak rate is more than twice that, and the peak rate is four and a half times. No hour of the day is left as cheap as August 15 was. That is the height from which the line about customers not leaving was spoken.
