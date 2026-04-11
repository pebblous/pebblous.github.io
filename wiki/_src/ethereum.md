---
title: 이더리움 (Ethereum)
sources: [03강_홍원기교수.pdf]
related: [bitcoin.md, blockchain-fundamentals.md, defi-nft.md, sto-rwa.md]
created: 2026-04-11
updated: 2026-04-11
---

# 이더리움 (Ethereum)

## 탄생
- 2013년 말: 비탈릭 부테린(Vitalik Buterin) 백서 발표
- 2014년 7월: ICO — 31,500 BTC ($18M, ≈200억원) 모금
- 2015년 7월 30일: "Frontier" 오픈소스 + Mainnet 런칭
- 2016년 6월: DAO 공격 → **Ethereum / Ethereum Classic** 하드포크
- 2017년: ICO 붐의 플랫폼이 됨

## 비트코인과의 차이

| 항목 | 비트코인 | 이더리움 |
|------|---------|---------|
| 블록 주기 | 10분 | 15초 |
| TPS | 7 | 15 |
| 총 코인 수 | 2,100만 BTC | 무제한 |
| 블록 보상 | 3.125 BTC | 2 ETH |
| 합의 방식 | PoW | PoW → PoS (2022) |
| 활용 | 암호화폐 | 모든 산업 분야 |

*2026.3.29 기준 참여 노드: 비트코인 22,076개 / 이더리움 7,964개*

## 스마트 컨트랙트 (Smart Contract)
- 코드에 계약 조건이 직접 작성되어 자체 실행됨
- 블록체인에 저장 → 투명·불변·탈중앙
- 비트코인의 "결제만 가능" 한계를 극복
- 언어: **Solidity** (가장 대표적), Rust, Move
- 실행 환경: **EVM** (Ethereum Virtual Machine)

## DApp (탈중앙화 앱)
스마트 컨트랙트 기반으로 다양한 앱 개발 가능:
- Games
- DeFi (탈중앙화 금융)
- Gambling
- DEX (탈중앙화 거래소)
- NFT 마켓플레이스
- Social

## 이더리움의 한계
1. PoW로 인한 전기 낭비
2. 15 TPS — Visa 대체 불가
3. 트랜잭션 비용(Gas Fee) 높음

## 이더리움 2.0 (The Merge)
- 목표: PoW → PoS 전환 (에너지 효율 + 속도)
- **The Merge**: 2022년 9월 15일 성공
- 이더리움 2.0은 Sharding, Layer 2 (Rollup, Plasma)로 확장성 해결 중

## Web 3.0과의 관계
이더리움은 Web 3.0의 핵심 인프라:
- Web 1.0: 읽기 전용 (정적 웹)
- Web 2.0: 읽기+쓰기 (플랫폼 중심, 데이터 독점)
- **Web 3.0**: 읽기+쓰기+소유 (탈중앙화, 사용자 주권)
