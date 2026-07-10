---
title: 합성데이터 가격표를 뜯어보면 3층이 보인다
subtitle: MOSTLY AI·Gretel·Tonic을 비교해 보니 가격은 3층으로 갈렸고, 결국 데이터 종류가 값을 정했다
date: 2025년 11월 7일
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 합성데이터 가격표를 뜯어보면 3층이 보인다

_MOSTLY AI·Gretel·Tonic을 비교해 보니 가격은 3층으로 갈렸고, 결국 데이터 종류가 값을 정했다_

## 초록 (Executive Summary)

<!-- stat-card -->
**"데이터 포인트"의 환상과 "가치 서비스"의 현실** — 글로벌 합성데이터 시장의 가격 책정은 '데이터 포인트당 비용'($ per data point)이라는 초기의 단순한 지표에서 벗어나, 고도로 정교화된 **'3중 요금제(Three-Part Tariff)'** 구조로 빠르게 수렴하고 있습니다. 본 보고서는 이 3중 요금제 모델이 현존하는 엔터프라이즈급 합성데이터 벤더의 수익 모델을 설명하는 보편적 프레임워크임을 입증합니다.

### 3중 요금제 모델

<!-- stat-card -->
**1** — 플랫폼 최소 약정 + 가변 미터 + 가치 부가 서비스의 3층 구조가 업계 표준으로 확립

### 모달리티가 가격을 결정

<!-- stat-card -->
**2** — 정형/텍스트/이미지 데이터의 특성에 따라 3중 요금제의 구성 비율이 근본적으로 달라짐

### 솔루션 중심 판매

<!-- stat-card -->
**3** — 엔터프라이즈 고객은 '데이터'가 아닌 '문제 해결 솔루션'과 '인프라 접근권'을 구매

## 합성데이터 가격표에 숨은 3층 구조

합성데이터의 가격을 분석할 때 가장 흔히 접하는 오류는, 단순한 '데이터 포인트당' 비용을 시장의 표준으로 오해하는 것입니다. 실제 엔터프라이즈급 프로젝트의 견적은 플랫폼 사용료를 훨씬 넘어서는 수준이며, 이는 세 가지 요소가 결합된 **3중 요금제 구조**로 설명됩니다.

### 1층 · 플랫폼 최소 약정 — 문을 여는 고정비

#### 정형 데이터 (저~중 등급)

- • **Tonic.ai:** 월 $199
- • **Gretel.ai:** 월 $295
- • **Hazy:** 월 $500

#### 엔터프라이즈 등급

- • **MOSTLY AI:** 월 $3,000
- • **Synthesis AI:** 월 $3,000
- • **Rendered.ai (Teams):** 월 $5,000
- • **Rendered.ai (Organizations):** 월 $15,000

<!-- stat-card -->
**'플랫폼 최소 약정'은 벤더의 소프트웨어 라이선스, 기본 지원, 보안 및 컴플라이언스(예: SOC 2, HIPAA) 유지를 위해 고객이 지불해야 하는 최소 고정 비용(MRC 또는 ARC)입니다. 이는 사용량($0)과 관계없이 발생하는 '기본료'입니다.** — 정형 데이터의 $199에서 컴퓨터 비전의 $15,000까지, 모달리티에 따라 '최소 약정' 비용이 **약 75배의 차이**를 보입니다. 이 차이는 각 모달리티를 생성하는 데 필요한 초기 자본 투자(CapEx)와 인프라 유지 비용을 직접적으로 반영합니다.

### 2층 · 사용량 요금 — 무엇을 세느냐로 갈린다

#### 컴퓨팅 기반 (Compute-Based)

#### 데이터 볼륨 기반 (Data Volume-Based)

#### 소스 볼륨 기반 (Source Volume-Based)

#### 토큰/단어 기반 (Token/Word-Based)

#### 이미지 수 기반 (Image Count-Based)

<!-- stat-card -->
**'가변 미터'는 고객이 사용한 만큼 지불하는 종량제 비용입니다. 벤더가 "무엇을" 측정하는지는 벤더의 비즈니스 모델과 비용 구조를 드러내는 가장 중요한 지표입니다.** — **** — **** — **** — **** — ****

### 3층 · 가치 부가 — ‘옵션’이 아니라 사실상 필수

<!-- stat-card -->
********

## 데이터 종류가 값을 가른다 ① 표·시계열

****

### 표 1 · 정형·시계열 벤더 가격 비교

| 벤더 | 핵심 상품 | 최소 약정(Platform Floor) | 가변 미터(Variable Meter) | BMS 프로젝트 비용 반영 방식 |
| --- | --- | --- | --- | --- |
| MOSTLY AI | 플랫폼 (VPC) | $3,000 / 월 | vCPU/vGPU 시간 (크레딧) | 물리 제약 모델이 복잡할수록 '가변 미터' 비용(크레딧)이 직접 증가 |
| YData (SDK) | SDK (API) | $0 (PAYG) | $1 / 100만 데이터 포인트 | '가변 미터' 비용은 $172.80로 고정. '전문 서비스'($18k) 비용이 별도 부과 |
| YData (Fabric) | 플랫폼 (VPC) | 비공개 (Enterprise) | AWS 인프라 비용 (CPU/GPU) | 플랫폼 라이선스 + AWS 비용 + 전문 서비스 비용. TCO가 가장 복잡 |
| Gretel.ai | 플랫폼 (SaaS) | $295 / 월 | $2.20 / 크레딧 (런타임/토큰) | MOSTLY AI와 유사하게, 복잡한 작업(런타임)이 더 많은 '가변 미터' 비용 소모 |
| Tonic (Structural) | 플랫폼 (SaaS) | $199 / 월 | 소스 DB 크기 (예: 2TB) | 5일치 원본 데이터 크기에 비용 부과. 4배 증강(출력물)은 비용과 무관 |

********

#### 전략적 시사점

<!-- stat-card -->
********

## 데이터 종류가 값을 가른다 ② 텍스트·언어

****

### 표 2 · 텍스트 벤더 가격 비교

| 사용 사례 | 주요 벤더 | 가격 책정 단위 (Meter) | 비용 결정 요인 |
| --- | --- | --- | --- |
| 익명화 / 마스킹 | Tonic Textual | 처리된 단어(Word) 수 | 보호해야 할 원본 문서의 총량 |
| LLM 훈련 데이터(특화 모델) | Gretel.ai | 생성된 토큰(Token) 수 또는 작업 런타임 | 생성할 데이터의 양 + 프라이버시(DP) 적용 여부 |
| LLM 훈련 데이터(SOTA 활용) | AWS Bedrock | 교사 모델의 입/출력 토큰 수 | 선택한 교사 모델(예: Claude 3)의 API 가격 |

****

#### 패러다임 전환: 교사 모델 비용 연동

<!-- stat-card -->
******** — ****

## 데이터 종류가 값을 가른다 ③ 이미지·비전

****

### Rendered.ai

<!-- stat-card -->
**Organizations: $15,000/월** — 가변 미터 — 최대 인스턴스, 스토리지(GB), 사용자 수 — 전문 서비스 — Organizations 플랜에 TAM(기술 지원 매니저) 포함

### Synthesis AI

<!-- stat-card -->
**플랫폼 구독** — 연간 구독: 월 $3,000부터 — 커스텀 프로젝트 — 최소 $10,000의 1회성 비용 — 모델 — PaaS 구독과 DaaS 프로젝트의 명확한 분리

#### 핵심 인사이트: 1 이미지 = 10 텍스트 행

<!-- stat-card -->
**Datagen.in의 크레딧 모델(30,000 크레딧 = 30,000 텍스트 행 또는 3,000 이미지)은 CV 데이터 생성이 정형 데이터 생성보다 **10배의 가치 또는 비용**을 가짐을 벤더 스스로 인정한 정량적 증거입니다.** — CV 시장의 '최소 약정'($3,000 ~ $15,000)이 정형/텍스트($0 ~ $500)보다 압도적으로 높은 이유는 명확합니다. CV 시장은 데이터를 파는 것이 아니라, 고도로 전문화된 **3D 시뮬레이션 소프트웨어 및 인프라 접근권**을 판매합니다.

## 어떻게 받느냐: API·구독·온프레미스

합성데이터의 가격은 '무엇을' 사는지(모달리티)뿐만 아니라 '어떻게' 공급받는지(공급 정책)에 의해서도 크게 좌우됩니다.

### API 기반 (Public SaaS)

<!-- stat-card -->
**가격 모델** — 순수 PAYG. 토큰, API 호출, 레코드당 과금 — 장점 — 초기 비용 $0, 즉각적 사용 — 단점 — 데이터 유출 리스크 - 민감한 원본 데이터를 벤더에 전송

### 플랫폼 구독 (VPC)

<!-- stat-card -->
**가격 모델** — 플랫폼 최소 약정 + 가변 미터 + 클라우드 인프라 비용 (이중 과금) — 장점 — 데이터 보안성 극대화 - 원본 데이터가 VPC를 벗어나지 않음 — 단점 — 이중 비용 구조 (라이선스비 + 인프라비)

### 온프레미스 (On-Premise)

<!-- stat-card -->
**가격 모델** — 고가의 연간 라이선스 (통상 연 $80,000 ~ $200,000) — 장점 — 최고 수준의 보안, 완전한 운영 제어권 — 단점 — 가장 높은 초기 비용, 자체 인프라 유지보수 부담

### 프로젝트 기반 (Managed Service)

<!-- stat-card -->
**가격 모델** — 1회성 프로젝트 비용 (NRE) — 장점 — 고정 비용, 플랫폼 학습 불필요, 결과물 보장 — 단점 — 확장성 부족 (새 데이터셋마다 새 계약 필요)

### 표 3 · 배포 모델별 TCO·보안 비교

| 공급 정책 | 비용 구조 | 보안 수준 | 데이터 이동성 | BMS 프로젝트 적용 전략 |
| --- | --- | --- | --- | --- |
| API (Public SaaS) | PAYG (낮은 초기 비용) | 낮음 (데이터 외부 전송) | 높음 | 간단한 데모 또는 비민감 데이터 증강용 |
| VPC (Marketplace) | $3K+ MRC + 인프라 비용 (이중 과금) | 높음 (VPC 내 처리) | 없음 | BMS 원본 데이터 보안이 중요할 때 (고객에게 '이중 과금' 구조 설명 필수) |
| On-Premise (License) | $80K+ ARC (높은 초기 비용) | 최고 (Air-gapped) | 없음 | 최고 수준의 보안을 요구하는 금융/국방 고객용 |
| Project (Managed) | $10K+ NRE (고정 비용) | 높음 (벤더/파트너가 처리) | 낮음 (결과물만 전달) | 현재 PoC 모델. 고객의 플랫폼 도입 장벽을 제거하는 가장 효율적인 방식 |

****

## 정리 — 무엇을, 왜 골라야 하나

### 내부 분석의 검증

<!-- stat-card -->
**BMS 시계열 데이터 증강 PoC를 위해 수립된 (플랫폼 최소 과금) + (사용량) + (전문 서비스)라는 3중 가격 책정 모델은, 글로벌 합성데이터 시장, 특히 고가치 엔터프라이즈 부문의 **표준 모델임이 검증되었습니다.**** — 또한, $10,000 ~ $40,000 범위의 PoC 비용 및 연간 $80,000 ~ $200,000의 엔터프라이즈 라이선스 비용 추정치는 시장 기준에 **매우 현실적이고 부합하는 수준**입니다.

### 핵심 결론: 데이터 종류가 가격 구조를 결정한다

#### 정형/시계열 (BMS)

#### 텍스트 (LLM)

#### 이미지/비전 (CV)

<!-- stat-card -->
**고객은 '데이터'가 아닌 '솔루션'을 구매합니다** — 엔터프라이즈 고객이 실제로 구매하는 것은 단순히 '데이터 1TB' 또는 '100만 레코드'가 아닙니다. 정형 데이터에서는 **도메인 전문성**, 텍스트 데이터에서는 **SOTA LLM 접근권**, 이미지 데이터에서는 **3D 시뮬레이션 인프라**입니다. 이것이 '데이터 포인트당 과금'이 시장의 실제 가격을 설명할 수 없는 이유입니다. — 가변 미터: $172 (미미) — 비용의 99%는 전문 서비스 ($18,000) — -> 도메인 제약(Physics/Rules) 적용이 핵심 가치 — 가변 미터가 비용의 상당 부분 — 교사 LLM의 추론 비용과 직결 — -> API 토큰 비용 기반 — 최소 약정: $5,000 ~ $15,000 — 비용의 대부분이 플랫폼 최소 약정 — -> 3D 시뮬레이션 인프라 + TAM 비용

### 가격 구성 비중: 모달리티별 비교

<!-- stat-card -->
**아래 차트는 각 데이터 모달리티별로 3중 요금제 구성 요소(Platform Floor, Variable Meter, Value-Add)가 전체 비용에서 차지하는 비중을 시각화한 것입니다. 모달리티의 특성에 따라 비용 구조가 근본적으로 다르게 나타남을 확인할 수 있습니다.** — **Platform Floor:** 플랫폼 최소 약정 — **Variable Meter:** 가변 미터 (사용량) — **Value-Add:** 가치 부가 서비스

### 전략적 권고

#### '가변 미터'의 전략적 선택

#### '전문 서비스' 패키징 강화

#### '공급 정책'을 활용한 고객 세분화

<!-- stat-card -->
********

### 참고: 페블러스 DataClinic의 가격 정책

#### Free

- 공개 데이터셋 무료 진단
- 기본 품질 리포트
- 커뮤니티 지원

#### Basic

- 월 10,000장 이미지 진단
- 상세 품질 리포트
- 이메일 지원

#### Pro

- 월 20,000장 이미지 진단
- 고객 데이터 업로드 지원
- 커스텀 품질 기준 설정
- 우선 기술 지원

#### Enterprise

- 월 200,000장 이미지 진단
- 데이터 품질 개선 서비스
- 전담 기술 지원 매니저(TAM)
- SLA 보장 및 맞춤형 솔루션

<!-- stat-card -->
**,
                    그리고 합성데이터로 부족한 데이터를 보강하는 데이터 벌크업까지,
                    고객의 필요에 맞는 다양한 데이터 개선 옵션을 제공합니다.** — ₩0 — /월 — 공개 데이터셋 품질진단 — ₩10,000 — /월 — 10,000장/월 진단 크레딧 — ₩500,000 — /월 — 20,000장/월, 고객 데이터 지원 — ₩5,000,000 — /월 — 200,000장/월, 데이터 개선 서비스 — [DataClinic 가격 정책 자세히 보기](https://dataclinic.ai/ko/data-clinic/price)

### PDF 원본 리포트

<!-- stat-card -->
**본 콘텐츠의 전체 내용을 PDF 형식으로 바로 열람하거나 다운로드하여 오프라인에서도 보실 수 있습니다.** — [PDF 다운로드](/project/SyntheticData/source/%ED%95%A9%EC%84%B1%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B2%A4%EB%8D%94%20%EA%B0%80%EA%B2%A9%20%EC%A0%95%EC%B1%85%20%EB%B6%84%EC%84%9D.pdf)

## 참고문헌 (References)

1. [1] Amazon Bedrock pricing. [https://aws.amazon.com/bedrock/pricing/](https://aws.amazon.com/bedrock/pricing/)
2. [2] Solutions Pricing for AI Synthetic Data Generation Needs. [https://rendered.ai/pricing/](https://rendered.ai/pricing/)
3. [3] Human Faces Synthetic Dataset - AWS Marketplace. [https://aws.amazon.com/marketplace/pp/prodview-hkxlb5jtkrics](https://aws.amazon.com/marketplace/pp/prodview-hkxlb5jtkrics)
4. [4] YData data quality for Data Science | Synthetic data Data-Centric AI. [https://ydata.ai/](https://ydata.ai/)
5. [5] Pricing - Tonic.ai. [https://www.tonic.ai/pricing](https://www.tonic.ai/pricing)
6. [6] Pay-As-You-Go Cloud Solution from Tonic. [https://www.tonic.ai/blog/](https://www.tonic.ai/blog/tonic-now-offers-a-pay-as-you-go-cloud-based-solution)
7. [7] Gretel.ai Reviews 2025: Pricing & Features. [https://tekpon.com/software/gretel-ai/reviews/](https://tekpon.com/software/gretel-ai/reviews/)
8. [8] Gretel.ai | BrXnd.ai Landscape. [https://landscape.brxnd.ai/companies/gretelai](https://landscape.brxnd.ai/companies/gretelai)
9. [9] Hazy: Set your data free with synthetic data solutions. [https://dynamicbusiness.com/ai-tools/](https://dynamicbusiness.com/ai-tools/hazy-set-your-data-free-with-synthetic-data-solutions.html)
10. [10] Pricing - MOSTLY AI. [https://mostly.ai/pricing](https://mostly.ai/pricing)
11. [11] AWS Marketplace: MOSTLY AI Data Intelligence Platform. [https://aws.amazon.com/marketplace/pp/prodview-clqfgzfzznfoc](https://aws.amazon.com/marketplace/pp/prodview-clqfgzfzznfoc)
12. [12] synthetic data platform as a service (paas) - Rendered.ai. [https://rendered.ai/platform/](https://rendered.ai/platform/)
13. [13] Usage and credits - Docs - Mostly AI. [https://docs.mostly.ai/usage](https://docs.mostly.ai/usage)
14. [14] What's new in MOSTLY AI. [https://mostly.ai/docs/whats-new](https://mostly.ai/docs/whats-new)
15. [15] Gretel.ai Pricing 2025. [https://www.g2.com/products/gretel-ai/pricing](https://www.g2.com/products/gretel-ai/pricing)
16. [16] DataGen - AI Synthetic Data Solutions. [https://datagen.in/](https://datagen.in/)
17. [17] Billing and Usage | Gretel.ai. [https://docs.gretel.ai/](https://docs.gretel.ai/operate-and-manage-gretel/enterprise-support/billing-and-usage)
18. [18] What Is Synthetic Data? - Salesforce. [https://www.salesforce.com/data/synthetic-data/](https://www.salesforce.com/data/synthetic-data/)
19. [19] What is the ROI of synthetic data? - Syntho. [https://www.syntho.ai/](https://www.syntho.ai/what-is-the-roi-of-synthetic-data/)
20. [20] Synthetic data tools: Open source or commercial? - Medium. [https://medium.com/statice/](https://medium.com/statice/synthetic-data-tools-open-source-or-commercial-a-guide-to-building-vs-buying-580ddeee30e8)
