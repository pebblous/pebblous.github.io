---
title: Binance
subtitle: About $6.36 billion in crypto left Binance across ten blockchains in 17 minutes, and analytics firms read the transaction trail to name North Korea within a day
date: 2026-10-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Binance

_About $6.36 billion in crypto left Binance across ten blockchains in 17 minutes, and analytics firms read the transaction trail to name North Korea within a day_

## Executive Summary

> [!callout]
> The largest crypto exchange in the world lost billions of dollars overnight. Assets scattered across ten blockchains moved from Binance to attacker-controlled addresses at the same moment, and the blockchain analytics firm TRM Labs puts the loss at about $6.36 billion. It is the largest crypto theft on record. This article follows the route the money took out and the grounds on which North Korea was named.

> The speed of the naming stands out more than the sum. Less than a day after the attack ended, Chainalysis, TRM Labs and Elliptic each pointed at the North Korean hacking group TraderTraitor, and their grounds were neither an informant nor a seized server but the transaction records sitting on the blockchain. The stolen funds were seen flowing into the same wallet system as money from the Bitget hack a month earlier, and Chainalysis had already classified Bitget as the same group's work. A note of caution came with it: the stolen money is being moved and turned into cash more slowly than this group usually does.

> Sections 1 through 6 follow Binance's own announcements, the reports the analytics firms published, and the Korean and international coverage that carried them. Section 7, which turns the case into the questions a data team would ask, is this article's reading.

### Key Figures

Sources: [TRM Labs](https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history) and [Elliptic](https://www.elliptic.co/insights/binance-largest-hack-in-history/) analysis, and [TechCrunch](https://techcrunch.com/2026/10/30/north-korean-hackers-blamed-for-stealing-record-6-3b-in-binance-breach/) reporting.

<!-- stat-card -->
**$6.36B** — Taken out of Binance — More than four times last year's Bybit hack, which took about $1.5 billion

<!-- stat-card -->
**17 minutes** — For most of the funds to leave — Ten blockchains ran almost in parallel. Twenty minutes at the outside

<!-- stat-card -->
**37 minutes** — Until Tether froze the first wallet — Counted from the moment the funds moved. That wallet held 118 million USDT

<!-- stat-card -->
**89%** — Share of this year's hack losses tied to North Korea — A Chainalysis estimate. Average loss per attack has more than tripled in five years

## The Money Left Ten Blockchains at Once

At 20:05 UTC on October 29, 2026, around 05:05 the following morning in Korea, assets in Binance wallets began moving to addresses the attacker controlled. Ten blockchains were involved, including Ethereum, Bitcoin, Tron, Solana and the XRP Ledger, and most of the money was gone within 17 to 20 minutes. One exchange's assets moved on ten separate ledgers at the same hour.

The size explains why this entered the record books. TRM Labs' tally is about $6.36 billion. The previous largest, the Bybit hack of February 2025, came to roughly $1.5 billion, so this cleared four times that mark in one go. Nothing on this scale has left a single exchange in a single day before.

The table below gathers the moments that can be confirmed from published material. The ones given to the minute are there because blockchains record the time of every transaction, and the freeze times are values Elliptic worked back from the chain records.

| When | What happened |
| --- | --- |
| About 36 hours before the attack | The attacker pulls small amounts out of the Tornado Cash mixer to pre-fund the wallets used in the attack |
| October 29, 20:05 UTC | Funds start moving from Binance wallets to attacker-controlled addresses |
| The next 17 to 20 minutes | Most of the funds are out across all ten blockchains |
| 37 minutes after the funds move | Tether freezes the first attacker wallet, holding 118 million USDT |
| October 30, 07:46 Korea time | Upbit posts a warning about withdrawals to Binance. Bithumb and Coinone follow the same morning |
| October 30 | TRM Labs, Chainalysis and Elliptic name a North Korea-linked group as the party behind it |
| As of October 31 | $2.8–3.0 billion frozen through industry coordination, with about $3.3 billion estimated to be still unfrozen |

Sources: [TRM Labs](https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history) and [Elliptic](https://www.elliptic.co/insights/binance-largest-hack-in-history/) analysis, with reporting from [CoinDesk](https://www.coindesk.com/policy/2026/10/29/crypto-s-longtime-foe-north-korea-s-lazarus-group-likely-behind-binance-hack-blockchain-sleuths) and [Etoday](https://www.etoday.co.kr/news/view/2642406). Freeze totals shift with the moment they are counted.

## The Keys Never Leaked, and the Door Opened Anyway

When an exchange is robbed, the private key is usually the first thing that comes to mind. Ownership of a crypto asset is proven by that secret value, and whoever holds it can move the asset. Yet what Binance described in its first findings was not a key leak. A DevOps engineer's laptop was compromised, and the attacker used it as a foothold to reach service containers and submit unauthorized withdrawal transactions.

The distinction matters. When a private key leaks, the attacker creates the signature. Here the attacker never needed to. By taking over the internal path that accepts a withdrawal request and sends it out with a valid signature attached, the attacker produced withdrawals that, seen from the blockchain, were indistinguishable from transactions Binance sent itself. It is less like breaking the lock than like reaching the position that gives orders to the staff who hold the keys.
