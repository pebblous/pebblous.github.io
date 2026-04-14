# SNS 홍보 글: Kronos 금융 시계열 파운데이션 모델

> 소스: report/kronos-financial-foundation-model/ko/index.html
> 생성일: 2026-04-14
> URL: https://blog.pebblous.ai/report/kronos-financial-foundation-model/ko/

---

## LinkedIn

금융 시계열에서 범용 파운데이션 모델은 사실상 무용하다. Google의 TimesFM(500M 파라미터)은 금융 제로샷 예측 R² = -2.80%를 기록했다. 무작위보다 나쁜 수준이다.

청화대학교가 개발한 Kronos는 이 문제를 근본적으로 다르게 접근했다. K-line의 OHLCVA 6차원 값을 Binary Spherical Quantization(BSQ)으로 100만 크기 어휘의 이산 토큰으로 변환한다. GPT가 다음 단어를 예측하듯, 다음 캔들스틱을 예측하는 구조다.

45개 거래소, 12B+ K-line으로 학습한 결과는 압도적이다.
- RankIC +93% (범용 TSFM 대비 방향 예측력)
- 합성 K-line fidelity +22% (DiffusionTS, TimeVAE 대비)
- 25개 베이스라인 모델 전체 압도
- MIT 오픈소스, GitHub 16.4K stars, AAAI 2026 발표

이 성과가 시사하는 것은 분명하다. 도메인 특화 FM에서 codebook은 학습 데이터의 통계적 구조를 직접 반영한다. 데이터 품질이 곧 모델의 표현 능력이 되는 구조다. 페블러스는 DataClinic을 통해 이런 도메인 특화 데이터의 품질 진단과 검증 인프라를 제공하고 있다.

전문 분석 보고서:
https://blog.pebblous.ai/report/kronos-financial-foundation-model/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #금융AI #시계열예측 #파운데이션모델 #AAAI2026

---

## Twitter/X

금융 제로샷 예측에서 Google TimesFM의 R²는 -2.80%. 무작위보다 나쁘다.

청화대 Kronos — K-line을 100만 어휘 이산 토큰으로 변환하는 금융 특화 FM. RankIC +93%, 합성 fidelity +22%. 25개 베이스라인 전체 압도.

도메인 특화 FM 시대, 데이터 품질이 모델 표현 자체를 결정한다.

https://blog.pebblous.ai/report/kronos-financial-foundation-model/ko/

#금융AI #파운데이션모델 #페블러스 #데이터품질

---

## Facebook

Google의 TimesFM은 500M 파라미터 규모의 시계열 파운데이션 모델이다. 날씨, 에너지, 교통 데이터에서는 준수한 성능을 보인다. 그런데 금융 데이터에 적용하면 제로샷 예측 R²가 -2.80%다. 사실상 무작위보다 나쁜 수준이다.

이유는 구조적이다. 금융 캔들스틱은 단순한 숫자 나열이 아니라, 시장 참가자들의 집단 의사결정이 압축된 고유한 언어다. 낮은 신호 대 잡음비, 강한 비정상성, OHLCVA 변수 간 구조적 제약, 기술적 분석의 고차 패턴 — 범용 모델이 이 네 가지를 동시에 처리하기는 어렵다.

청화대학교의 Kronos는 이 문제를 토큰화 단계에서 해결했다. BSQ로 K-line을 100만 크기 어휘의 이산 토큰으로 변환하고, GPT 스타일 디코더로 다음 캔들스틱을 예측한다. 45개 거래소, 12B+ K-line 학습. 결과는 RankIC +93%, 합성 데이터 충실도 +22%. AAAI 2026 발표, MIT 오픈소스로 GitHub 16.4K stars.

codebook이 학습 데이터 분포를 직접 반영하는 구조에서, 데이터 품질은 모델 아키텍처만큼 중요한 설계 변수가 된다. 페블러스가 DataClinic으로 AI 학습 데이터의 품질 검증에 집중하는 이유이기도 하다.

https://blog.pebblous.ai/report/kronos-financial-foundation-model/ko/

#페블러스 #금융AI #데이터품질 #데이터저널리즘
