---
title: 비트코인 (Bitcoin)
sources: [03강_홍원기교수.pdf]
related: [blockchain-fundamentals.md, stablecoin.md, digital-asset-exchange.md]
created: 2026-04-11
updated: 2026-04-11
---

# 비트코인 (Bitcoin)

## 탄생 배경
- 2008년 **세계 금융 위기** → 기존 은행·화폐 시스템의 한계
- 2008년 10월 31일: 사토시 나카모토(익명) Bitcoin white paper 발표 (metzdowd.com 암호화 메일링 리스트)
- 2009년 1월 3일: 오픈소스 공개 + Bitcoin Network 시작

## 네트워크 구조
- **P2P 네트워크**: 중앙 서버 없이 노드 간 직접 통신
- 노드 종류: Full노드, Miner노드, Light노드
- 2026년 3월 기준: 22,916개 리치어블 노드 (미국 11.76%, 독일 5.51%, 한국 0.58%)

## 트랜잭션 → 블록 → 블록체인
1. User A → User B 트랜잭션 생성·검증·전파
2. 약 2,000개 트랜잭션 모아 블록 구성 (약 10분마다)
3. 블록헤더: Version, PreviousBlockHash, MerkleRoot, Timestamp, DifficultyTarget, Nonce

## 작업증명 (Proof of Work)
- SHA256(이전 해쉬, 루트 해쉬, Nonce) < 목표값(E)
- E는 프로토콜이 정함 (2주마다 난이도 자동 조정)
- 답 찾기는 어렵지만 검증은 매우 쉬움
- 마이닝: 블록 완성 + 트랜잭션 영구 기록
- Mining Pool: CPU → GPU → ASIC → 풀 방식으로 발전

## 인센티브 & 반감기
- 총 발행량: **2,100만 BTC** (2140년까지)
- 블록당 보상: 50 → 25 → 12.5 → 6.25 → **3.125 BTC** (21만 블록, 약 4년마다 반감)
- 현재(2026): 매 10분마다 3.125 BTC 발행

## 비트코인의 한계
| 한계 | 수치 |
|------|------|
| 처리 속도 | 7 TPS (초당 트랜잭션) |
| 블록 생성 주기 | 10분 |
| 담을 수 있는 정보 | 결제 정보만 |
| 마이닝 전기 낭비 | 대규모 에너지 소비 |

→ 이 한계가 [[ethereum.md|이더리움]] 탄생의 동기가 됨.

## 역사적 메모
- **Bitcoin Pizza Day** (2010년 5월 22일): 10,000 BTC로 피자 2판 — 최초 실물 결제
- 2009년 가격: 사실상 0 → 2026년 시가 총액 1위 유지
