# 01_research.md — 페블러스 등록특허: 합성 데이터의 스마트계약을 위한 가상 환경

## 메타 정보

- **특허번호**: 제 10-2969395 호
- **발명의 명칭**: 합성 데이터의 스마트계약을 위한 가상 환경을 제공하는 전자 장치, 전자 장치의 동작 방법 및 전자 장치를 포함하는 시스템
- **출원일**: 2023년 03월 28일
- **등록일**: 2026년 05월 21일
- **특허권자**: 주식회사 페블러스 (대전 유성구)
- **청구항 패밀리**: 전자 장치 + 동작 방법 + 시스템 (3개)

---

## 리드: 왜 합성 데이터 '거래소'가 필요한가 — 신뢰의 문제

합성 데이터는 AI 훈련의 핵심 연료로 부상했지만, "이 데이터를 믿을 수 있는가?"라는 질문에 아직 답이 없다. 합성 데이터를 만드는 기술은 폭발적으로 발전했으나, 그것을 사고파는 인프라는 여전히 원시적이다. 데이터의 출처, 품질, 사용 조건이 투명하게 보장되지 않는 한, 합성 데이터 시장은 '레몬 마켓(정보 비대칭 시장)'에 머무를 수밖에 없다.

- Lancet Digital Health (2025): "합성 데이터로 훈련된 모델에 대한 근거 없는 과신(unwarranted confidence)" 경고
  - Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12778113/
- IBM: 합성 데이터 생성에서 "프라이버시와 품질을 동시에 보장하여 신뢰를 구축"해야 한다고 강조
  - Source: https://www.ibm.com/new/product-blog/synthetic-data-generation-building-trust-by-ensuring-privacy-and-quality

---

## 섹션 1: 합성 데이터 붐 — 얼마나 크고 빠른가

| 연도 | 시장 규모 (USD) |
|------|----------------|
| 2024 | ~$497M |
| 2025 | $510M ~ $683M |
| 2026 | $586M ~ $791M |

- CAGR 2026-2033: 30.8% ~ 38.96%
- CAGR 2024-2030: 38.2%, 2030년 $2.63B 전망
- Sources: https://www.coherentmarketinsights.com/industry-reports/synthetic-data-market | https://www.fortunebusinessinsights.com/synthetic-data-generation-market-108433 | https://www.mordorintelligence.com/industry-reports/synthetic-data-market | https://www.nextmsc.com/report/synthetic-data-market

Gartner 예측:
- "2026년까지 75%의 기업이 AI 훈련에 합성 데이터를 활용할 것"
- "2027년까지 60%의 데이터/분석 리더가 합성 데이터 관리에서 치명적 실패에 직면할 것"
- "2030년까지 합성 데이터가 실제 데이터를 초월할 것"
- Source: https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions

주요 M&A:
- NVIDIA, Gretel 인수 (2025년 3월, 약 $320M+): Source: https://techcrunch.com/2025/03/19/nvidia-reportedly-acquires-synthetic-data-startup-gretel/
- SAS, Hazy 인수 (2024년 11월)

산업별 적용:
- 금융(BFSI): 2024년 매출의 23.80% 점유
- 자동차/운송: 2030년까지 38.40% CAGR로 가장 빠른 성장
- 헬스케어: 프라이버시 보존 기술로서 수요 급증

---

## 섹션 2: 거래의 병목 — 현재 합성 데이터가 팔리지 않는 이유

### 품질 검증의 부재
- 합성 데이터의 품질을 구매자가 사전에 검증할 표준화된 방법이 없음
- "합성 데이터 파이프라인에서 검증(validation)은 가장 미발달된 구성요소"
  - Source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12826596/
  - Source: https://www.techpolicy.press/the-urgency-of-standards-for-synthetic-data-in-the-era-of-agentic-ai/

### 출처 추적(Provenance)의 어려움
- 합성 데이터의 생성 과정, 원본 데이터 참조 여부, 개인정보 침해 가능성 추적 시스템 부재
- Source: https://arxiv.org/pdf/2401.01629

### 사용 조건 관리의 복잡성
- 데이터 라이선싱, 사용 범위 제한, 2차 가공 허용 여부 등이 수작업 계약으로 관리
- 구매자는 사기 전 품질 확인 불가, 판매자는 데이터 남용 통제 불가

### 현 합성 데이터 벤더의 한계
- 주요 플랫폼(MOSTLY AI, Gretel/NVIDIA, Tonic.ai, Hazy/SAS)은 생성에 집중, 거래/유통 인프라 미비
- Source: https://blog.pebblous.ai/project/SyntheticData/synthetic-data-pricing/en/

---

## 섹션 3: 스마트계약이 데이터에 만나면 — 기술적 해법

### 스마트계약 시장 현황
- 글로벌: 2024년 $2.72B → 2025년 $3.36B, 2035년 $1,073B (CAGR 76.25%)
  - Source: https://www.precedenceresearch.com/smart-contracts-market

### 블록체인 기반 데이터 거래 플랫폼 사례

Ocean Protocol:
- 데이터를 ERC721 데이터 NFT + ERC20 데이터토큰으로 발행
- Compute-to-Data: 프라이빗 데이터를 이동 없이 매매 가능
- 2024년 5월 SingularityNET, Fetch.ai와 합병 → ASI Alliance 결성
- Source: https://oceanprotocol.com/

Streamr:
- 실시간 데이터 스트리밍/교환을 위한 탈중앙 P2P 네트워크
- Source: https://www.gate.com/crypto-wiki/article/is-streamr-data-a-good-investment-a-comprehensive-analysis-of-tokenomics-market-potential-and-risk-factors-in-2024-20251224

데이터 출처/저작권의 블록체인 관리:
- IBis 프레임워크 (2024): 분산 AI 모델 훈련에서 저작권 준수 및 데이터 출처를 동적으로 관리
  - Source: https://arxiv.org/abs/2404.06077
- VLDB 2024 워크샵: SOK: Blockchain for Provenance
  - Source: https://vldb.org/workshops/2024/proceedings/FAB/FAB-7.pdf

기존 특허 동향:
- US20150379510A1: 데이터 공급망을 블록체인+스마트계약으로 화폐화
  - Source: https://patents.google.com/patent/US20150379510A1/en
- US10,880,077 (Alibaba): TEE에서 스마트계약 연산 실행
  - Source: https://patents.justia.com/patent/10880077

### 페블러스 특허의 차별적 지점
1. "합성 데이터" 특화: 기존 특허는 범용 데이터/금융 거래 자동화. 페블러스는 합성 데이터 생성-품질검증-거래를 일체화한 가상 환경 제안
2. 가상 환경(Virtual Environment) 설계: 실제 조건을 모사한 환경에서 품질과 가치를 사전 검증. 품질 증명이 내장된 거래 체계
3. 3중 청구항 구조: 전자 장치 + 동작 방법 + 시스템 — 기술의 모든 레이어를 커버

---

## 섹션 4: 페블러스 특허가 그린 설계도 — 가상 환경의 구체적 구조

### 페블러스의 기술 스택

| 제품 | 역할 | 설명 |
|------|------|------|
| DataClinic | 데이터 건강 진단 | 기하학적 매니폴드 기반 데이터 품질 진단 SaaS. 비정형 데이터를 '데이터 맵'으로 시각화. |
| PebbloSim | 합성 데이터 생성 | 물리법칙을 복제하여 Physical Hallucination 없는 초고품질 합성 데이터 생성. |
| PebbloChain | 데이터 거래/통제 | 블록체인 기반. 데이터의 생성-개선-유통 전 과정을 위변조 불가능하게 기록. |

- Source: https://www.aitimes.kr/news/articleView.html?idxno=38835
- Source: https://blog.pebblous.ai/story/pebblous-story-pb/ko/
- Source: https://www.etnews.com/20251202000035

### 특허 10-2969395의 위치
이 특허는 PebbloChain의 핵심 기술 기반:
- 가상 환경: 실제 운용 조건을 모사한 환경에서 합성 데이터의 품질과 가치를 시뮬레이션
- 스마트계약: 데이터 거래 조건(품질 기준 충족, 사용 범위, 라이선스)을 자동 실행
- 운영 증거(Operational Evidence): 데이터 가공 과정과 가치 변화를 블록체인에 추적 기록

### Data Greenhouse — 자율 데이터 운영체제
- 진단(DataClinic) → 생성(PebbloSim) → 거래/거버넌스(PebbloChain)의 일관된 파이프라인
- EU AI Act / ISO 42001 대응 운영 증거 패키지 내장
  - Source: https://blog.pebblous.ai/project/SyntheticData/en/

### 경쟁 기술 대비 차별점

| 비교 축 | Ocean Protocol | 기존 합성 데이터 벤더 | 페블러스 특허 |
|---------|---------------|---------------------|-------------|
| 데이터 유형 | 범용 데이터 | 합성 데이터 | 합성 데이터 특화 |
| 품질 검증 | 없음 (거래만) | 생성 후 자체 지표 | 가상 환경 시뮬레이션 + 진단 내장 |
| 거래 인프라 | 블록체인 마켓플레이스 | 없음 (API만) | 스마트계약 자동화 |
| 출처 추적 | 부분적 (토큰화) | 없음 | 블록체인 전 과정 기록 |
| 물리적 정합성 | N/A | N/A | 물리법칙 기반 합성 |

---

## 섹션 5: 품질과 신뢰는 함께 — DataClinic 연결

DataClinic 핵심 기술:
- 기하학적 매니폴드 기반 진단: 고차원 데이터를 기하학적 공간으로 변환, 분포와 밀도를 시각 표시
- 데이터 맵(Image of Data): 비정형 데이터의 분포를 지도처럼 시각화
  - Source: https://www.gttkorea.com/news/articleView.html?idxno=17697
  - Source: https://blog.pebblous.ai/project/DataClinic/pbls-patent-us-01.html

합성 데이터 거래와 품질 진단의 관계:
1. 거래 전: DataClinic으로 합성 데이터 진단 → 품질 리포트를 거래 조건에 포함
2. 거래 중: 스마트계약이 품질 기준 충족 여부 자동 확인 → 기준 미달 시 거래 불성립
3. 거래 후: 데이터 활용 결과(모델 성능 변화)를 블록체인에 기록 → 사후 가치 증명

ISO 5259 연결:
- ISO/IEC 5259 시리즈 (2024년 발행): AI 데이터 품질 국제 표준
- ISO/IEC 5259-4는 2025년 2월 유럽 표준으로 채택
  - Source: https://www.iso.org/standard/81088.html | https://www.iso.org/standard/81093.html

---

## 섹션 6: 규제 동향과 앞으로의 질문

EU AI Act:
- 발효: 2024년 8월 1일. 완전 적용: 2026년 8월 2일.
- 합성 콘텐츠 규제: AI 생성 합성 콘텐츠는 기계 판독 가능한 형식으로 마킹 필요 (Article 50)
- 2026년 5월 'AI 옴니버스' 간소화 합의
  - Source: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
  - Source: https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/

한국 규제 동향:
- 합성데이터 활용 가이드라인 (2024년 12월): 최초의 공식 가이드라인
  - Source: https://www.jirandata.co.kr/blog/media-room/60
- 데이터 표준계약서 (2024년 10월, 과기정통부)
- 데이터 산업진흥법
  - Source: https://www.law.go.kr/lsInfoP.do?lsiSeq=236051

이 특허가 열어두는 질문들:
1. 합성 데이터 전용 거래 표준은 언제 등장할 것인가?
2. 스마트계약의 법적 지위: 합성 데이터 거래에서 법적 계약으로 인정받기 위한 제도적 논의 필요
3. 크로스보더 데이터 거래: EU AI Act와 한국 데이터산업진흥법 간 규제 차이를 스마트계약이 자동 처리 가능한가?
4. Physical AI와의 확장: 자율주행, 로봇, 디지털 트윈 등에서 품질-거래 일체형 인프라 수요 폭발 여부

---

## 소스 인덱스 (36개)

1. https://pmc.ncbi.nlm.nih.gov/articles/PMC12778113/
2. https://www.ibm.com/new/product-blog/synthetic-data-generation-building-trust-by-ensuring-privacy-and-quality
3. https://www.coherentmarketinsights.com/industry-reports/synthetic-data-market
4. https://www.fortunebusinessinsights.com/synthetic-data-generation-market-108433
5. https://www.mordorintelligence.com/industry-reports/synthetic-data-market
6. https://www.nextmsc.com/report/synthetic-data-market
7. https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions
8. https://www.gartner.com/en/newsroom/press-releases/2026-03-11-gartner-announces-top-predictions-for-data-and-analytics-in-2026
9. https://techcrunch.com/2025/03/19/nvidia-reportedly-acquires-synthetic-data-startup-gretel/
10. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12826596/
11. https://www.techpolicy.press/the-urgency-of-standards-for-synthetic-data-in-the-era-of-agentic-ai/
12. https://arxiv.org/pdf/2401.01629
13. https://arxiv.org/abs/2404.06077
14. https://vldb.org/workshops/2024/proceedings/FAB/FAB-7.pdf
15. https://www.precedenceresearch.com/smart-contracts-market
16. https://www.fortunebusinessinsights.com/smart-contracts-market-108635
17. https://oceanprotocol.com/
18. https://patents.google.com/patent/US20150379510A1/en
19. https://patents.justia.com/patent/10880077
20. https://blog.pebblous.ai/project/SyntheticData/synthetic-data-pricing/en/
21. https://www.buildmvpfast.com/blog/synthetic-data-ai-training-generation-tools-2026
22. https://www.aitimes.kr/news/articleView.html?idxno=38835
23. https://blog.pebblous.ai/story/pebblous-story-pb/ko/
24. https://www.etnews.com/20251202000035
25. https://blog.pebblous.ai/project/SyntheticData/en/
26. https://blog.pebblous.ai/project/PebbloSim/pebblosim-design-strategy.html
27. https://blog.pebblous.ai/project/DataClinic/pbls-patent-us-01.html
28. https://www.gttkorea.com/news/articleView.html?idxno=17697
29. https://www.iso.org/standard/81088.html
30. https://www.iso.org/standard/81093.html
31. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
32. https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/
33. https://www.jirandata.co.kr/blog/media-room/60
34. https://www.lawtimes.co.kr/LawFirm-NewsLetter/202780
35. https://www.law.go.kr/lsInfoP.do?lsiSeq=236051
36. https://knconsulting.co.kr/knowledge/?bmode=view&idx=11206160
