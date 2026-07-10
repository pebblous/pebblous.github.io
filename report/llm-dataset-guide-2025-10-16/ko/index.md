---
title: LLM 학습용 오픈 데이터셋 가이드
subtitle: 저작권 문제 없는 AI 및 데이터과학 분야를 중심으로
date: 2025년 10월 16일
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LLM 학습용 오픈 데이터셋 가이드

_저작권 문제 없는 AI 및 데이터과학 분야를 중심으로_

## 대규모 오픈 데이터셋: 핵심 기반

### RedPajama (1.2T 토큰)

### The Pile (825GB)

### C4 (Colossal Clean Crawled Corpus, 750GB)

### Dolma (3T 토큰) & OLMo

### FineWeb (15T 토큰)

## 실제 LLM 학습 사례: 검증된 전략

### LLaMA (Meta)

### Pythia (EleutherAI)

### OLMo (Allen AI)

### Falcon (TII)

## 주요 데이터셋 요약

| 데이터셋 | 크기 | 토큰 | 라이선스 | 언어 |
| --- | --- | --- | --- | --- |
| RedPajama-v1 | 1.2T | 1.2조 | Apache 2.0 | EN+20개 |
| The Pile | 825GB | 300B | MIT+개별 | EN |
| C4 | 750GB | ~750B | ODC-BY | 100+개 |
| Dolma v1.7 | 4.5TB | 2.3조 | ODC-BY | 주로 EN |
| FineWeb | 44TB | 15조 | ODC-BY | EN (v2: 다국어) |
| The Stack v2 | 32.1TB | 900B | 허용 라이선스 | 658개 |
| Wikipedia (EN) | ~58GB | ~2.24B | CC-BY-SA 4.0 | 338개 |

## 권장 시작 믹스 (7B 모델, 1조 토큰 기준)

### 범용 모델

- **CommonCrawl (필터링):** 65%
- **C4:** 10%
- **The Stack (코드):** 5%
- **GitHub (코드):** 5%
- **Wikipedia:** 5%
- **Books (Gutenberg):** 5%
- **arXiv (논문):** 3%
- **StackExchange (Q&A):** 2%

#### 데이터 구성 시각화

### 코드 중심 모델

- **The Stack:** 70%
- **GitHub:** 15%
- **StackExchange (코딩 태그):** 5%
- **문서:** 5%
- **arXiv (CS 논문):** 3%
- **일반 웹 (필터링):** 2%

#### 데이터 구성 시각화

## 결론 및 제언

### 관련 자료 다운로드

### Disclaimer
