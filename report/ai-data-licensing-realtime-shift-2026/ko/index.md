---
title: 이제 AI는 데이터를 사지 않는다, 빌린다
subtitle: 일회성 학습 덤프에서 실시간 접근으로 — 91건의 라이선싱 거래가 드러낸 데이터 시장의 구조 전환
date: 2026-06-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 이제 AI는 데이터를 사지 않는다, 빌린다

_일회성 학습 덤프에서 실시간 접근으로 — 91건의 라이선싱 거래가 드러낸 데이터 시장의 구조 전환_

## Executive Summary

> [!callout]
> 지난 3년간 AI 기업이 콘텐츠를 확보하는 방식은 조용히, 그러나 구조적으로 바뀌었다. 출처를 표시하고 콘텐츠에 실시간으로 접근하는 형태의 라이선싱은 2023년 두 건에서 2026년 30여 건 규모로 늘었고, 같은 기간 공개된 거래만 90건을 넘겼다. 이 글이 주목하는 것은 거래 건수가 아니라 거래의 단위다. AI 회사가 사려는 대상이 "한 번 긁어가 학습에 넣는 정적 덤프"에서 "계속 갱신되는 출처·근거·실시간 피드"로 옮겨갔다. 데이터를 한 번 사는 대신, 계속 빌리기 시작한 것이다.

> 이 전환은 데이터의 경제적 본질에 대한 시장의 자백에 가깝다. 한 번 사들인 데이터는 모델이 출시되는 순간부터 노화한다. 학습 컷오프 이후의 사실을 다룰 때, 검색 증강(RAG)을 붙인 모델과 그렇지 않은 모델의 정확도 격차가 표준 검증에서 44%까지 벌어진다는 측정이 그 노화를 수치로 보여준다. 가치가 한 시점에 박제된 자산이 아니라 지속적으로 검증·갱신·공급되는 흐름에 있다는 뜻이다.

> 흐름이 기본값이 되면 데이터 팀의 일도 바뀐다. 한 번 정제해 넘기는 작업에서, 흐르는 피드의 신선도와 정확성과 출처를 상시 보증하는 운영으로 옮겨간다. 그런데 시장에는 아직 이 운영을 감당할 표준이 없다. 정정이 모델 안으로 어떻게 전파되는지, 출력에 출처를 역링크할 수 있는지, 가격을 어떻게 매길지 모두 미해결로 남아 있다. 검증되지 않은 흐름은 자산이 아니라 부채가 된다.

<!-- stat-card -->
**2 → 34** — 실시간·attribution 딜(건) — 2023년 2건에서 2026년 34건(전망)으로

<!-- stat-card -->
**91건** — 공개 라이선싱 누계 — 2023년 1월~2026년 6월, 공개된 거래만

<!-- stat-card -->
**+44%** — RAG 정확도 격차 — 학습 컷오프 이후 데이터에서 검색 증강의 이점

<!-- stat-card -->
**77%** — 실시간 검색이 목적 — 2025년 라이선싱 계약의 주 용도(독립 분석 52건)

## 한 번 사던 데이터를 이제 빌린다

2023년에 시작된 AI 콘텐츠 라이선싱 시장은 처음엔 단순했다. AP의 1985년 이후 기사 아카이브, 악셀 슈프링거의 정치·경제 매체 묶음처럼, 과거에 쌓인 텍스트를 한 번 넘겨 모델 학습에 쓰게 하는 거래였다. 콘텐츠를 가진 쪽은 목돈을 받았고, AI 회사는 가중치 안에 데이터를 흡수했다. 소유권을 한 번 옮기면 끝나는, 부동산 매매에 가까운 구조였다.

그 구조가 3년 만에 뒤집혔다. 미디어 애널리스트 Rob Kelly가 운영하는 [Media and the Machine](https://mediaandthemachine.substack.com/p/ai-content-licensing-deals-june-2026)이 2026년 6월까지 공개된 거래를 집계한 결과, 출처 표시(attribution)와 실시간 접근(live-access)을 포함한 딜은 2023년 2건에서 2024년 11건, 2025년 18건으로 늘었고 2026년에는 34건에 이를 것으로 전망된다. 같은 기간 공개된 전체 라이선싱은 91건. 거래 자체가 늘어난 것보다, 늘어난 거래의 성격이 바뀐 쪽이 더 중요하다.

아래 그래프는 실시간·attribution 딜의 연도별 추이다. 2026년 수치는 상반기 흐름을 바탕으로 한 전망값이다.

실시간·attribution 라이선싱 딜의 연도별 추이(건). 2026년은 전망. 출처: Media and the Machine, 2026년 6월.

### 무료로 긁던 길이 막히자, 사람들은 줄을 서기 시작했다

이 전환을 밀어붙인 힘은 두 가지다. 하나는 공급이 막힌 것이다. Cloudflare가 2025년 7월 AI 크롤러를 기본 차단하기 시작하자, 그 전까지 무료로 긁어가던 길이 좁아졌다. Rob Kelly의 집계에 따르면 Cloudflare 차단 이전에 보고된 라이선싱 거래는 10건이었는데, 차단 이후로는 22건이 보고됐다. 스크래핑이 막히자 공식 라이선스로 수요가 옮겨간 인과가 수치로 드러난다.

![Cloudflare 로고 — 2025년 7월 AI 크롤러 기본 차단으로 공식 라이선싱 시장이 급성장했다](./image/img-01-cloudflare.svg)
*▲ Cloudflare는 2025년 7월 AI 크롤러를 기본 차단했다. 이후 공식 라이선싱 거래가 10건에서 22건으로 2배 이상 증가했다 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cloudflare_Logo.svg)*

다른 하나는 수익이 막힌 것이다. AI 검색이 답을 요약해 보여주면서 퍼블리셔로 들어오던 클릭은 급감했다. Media and the Machine은 AI 요약 때문에 웹사이트 클릭스루가 약 80% 줄었다고 본다. 트래픽으로 광고 수익을 내던 모델이 무너지자, 콘텐츠를 직접 라이선싱하는 것이 사실상 유일한 대안으로 남았다. Digiday에서 미디어 전략가 Paul Bannister는 "퍼블리셔들이 수표는 받았지만, 그 돈이 5년 뒤 사업을 살려주지는 않으리라는 걸 깨달았다"고 말한다. 한 번 받는 선급금으로는 부족하다는 자각이, 갱신되는 수익 구조에 대한 요구로 이어졌다.

> [!callout]
> 방향과 속도는 서로 다른 데이터셋에서 일관되게 나타난다. 2023~2024년 초를 표본으로 한 AI Watch.dog 집계에서 실시간·귀속형 거래는 42%였고, 2025년 계약 52건을 분석한 neudata에서는 그 비중이 77%까지 올라갔다. 집계 범위가 달라 같은 분모로 비교할 수는 없지만, 두 측정 모두 "한 번 사는 거래에서 계속 빌리는 거래로" 같은 방향을 가리킨다.

## '실시간 접근'은 정확히 무엇을 사고파는가

"실시간 접근"이라는 말은 뭉뚱그리기 쉽지만, 계약서 안에서는 다섯 가지 구체적인 권리로 나뉜다. 갱신되는 콘텐츠를 API로 계속 받아오는 **ongoing feed**, AI 답변에서 원문으로 연결하는 **link**, 모델이 외부 최신 자료에 근거해 답하도록 묶는 **grounding**, 답변에 출처를 표시하고 역링크하는 **attribution**, 그리고 변경분을 즉시 반영하는 **real-time data**다. 다섯 가지 모두 "갱신되는 흐름"을 전제로 한다는 점에서, 한 번 넘기고 끝나는 학습 덤프와 구조가 다르다.

일회성 학습 라이선스와 실시간 접근 라이선스는 사고파는 대상부터 과금 단위, 출처 표시 의무까지 항목마다 갈린다.

| 항목 | 일회성 학습 라이선스 | 실시간 접근 라이선스 |
| --- | --- | --- |
| 사고파는 대상 | 과거 아카이브의 사용권 | 갱신되는 콘텐츠의 접근권 |
| 갱신 | 없음(넘긴 시점 고정) | 상시(피드·API로 지속) |
| 과금 단위 | 일회성 선급금 | 쿼리·크롤·연간 구독 |
| 출처 표시 | 대체로 없음 | attribution·역링크 필수 |
| 데이터 노화 | 출시 즉시 시작 | 상시 갱신으로 상쇄 |
| 비유 | 부동산 매매 | 구독·임대 |

추상적 분류만으로는 전환이 실감 나지 않는다. 계약 언어가 실제로 어떻게 바뀌었는지 세 가지 사례에서 확인할 수 있다.

### 사례 1. 워싱턴포스트 — 계약서에서 '학습'을 지웠다

2025년 4월 워싱턴포스트와 OpenAI의 거래는 전환의 전형이다. ChatGPT가 포스트 기사를 요약·인용하고 항상 원문 링크를 함께 보여주되, **모델 학습에는 콘텐츠를 쓰지 않는다**는 조건이었다. Digiday는 이 딜을 두고 "ChatGPT가 요약과 인용과 링크를 표시할 뿐, 포스트의 콘텐츠를 OpenAI의 LLM 학습에 사용한다는 언급은 없다"고 정리했다. 가디언이 2025년 2월에 맺은 거래도 같은 구조였다. Digiday의 표현으로는, 후기 딜들은 "학습 조항은 덜 부각되거나 명시되지 않은 채, ChatGPT 검색 안에서의 출처 표시를 강조"하는 쪽으로 기울었다. 사고파는 대상이 데이터의 소유에서 갱신되는 접근권으로 옮겨갔음을 계약 문구 수준에서 보여준다.

### 사례 2. 레딧 — 구독형 실시간 피드의 원형

레딧은 과거 게시물을 파는 대신, 실시간으로 갱신되는 게시물 스트림을 API로 구독시킨다. 구글에는 연 6,000만 달러, OpenAI에는 연 7,000만 달러 안팎으로 추정되는 데이터 API 계약이다. 두 계약을 합치면 레딧의 AI 라이선싱 수익은 연 1억 3,000만 달러 규모로, 전체 매출의 약 10%에 해당한다. 단순 학습 덤프가 아니라 구조화된 실시간 피드를 파는 거래라는 점에서, 레딧은 buy→rent 전환을 가장 또렷하게 보여주는 공급자다.

![Reddit 로고 — 실시간 API 구독 모델로 Google·OpenAI에 연 1억 3천만 달러 규모 라이선싱 수익 창출](./image/img-02-reddit.svg)
*▲ Reddit은 과거 아카이브 대신 실시간 갱신 스트림을 구독 방식으로 공급 — buy→rent 전환의 원형 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Reddit_logo.svg)*

### 사례 3. 위키미디어 — 65억 문서의 상시 접근권

위키미디어는 2026년 1월, Amazon·Meta·Microsoft·Perplexity·Mistral 등이 참여하는 Wikimedia Enterprise 파트너십을 발표했다. 핵심은 무료 스크래핑 대신 "AI를 위해 설계된 대용량·고속 접근"을 공식 상품으로 판다는 점이다. [TechCrunch 보도](https://techcrunch.com/2026/01/15/wikimedia-foundation-announces-new-ai-partnerships-with-amazon-meta-microsoft-perplexity-and-others/)에 따르면, 2025년 4월 위키미디어는 봇 트래픽 때문에 멀티미디어 대역폭이 50% 늘고 인간 방문은 8% 줄었다고 밝혔다. 무질서하게 긁히던 흐름을 구조화·유료화된 실시간 접근으로 정돈한 것이다. 시장이 "정제되고 구조화된 흐름"에 프리미엄을 매기기 시작했다는 신호다.

![Wikimedia 로고 — 2026년 1월 Amazon·Meta·Microsoft·Perplexity·Mistral과 AI 파트너십 체결로 무질서한 스크래핑을 구조화된 실시간 접근으로 전환](./image/img-03-wikimedia.svg)
*▲ Wikimedia Foundation은 2026년 1월 Amazon·Meta·Microsoft·Perplexity·Mistral과 파트너십을 공식화 — 무질서한 봇 트래픽을 구조화된 유료 접근으로 전환 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wikimedia-logo.svg)*

### 무엇이 가장 비싸게 팔리는지가 흐름의 가치를 말해준다

세 사례는 예외가 아니라 시장 전체의 축약이다. Media and the Machine이 공개 거래를 카테고리별로 나눈 집계를 보면, 뉴스·저널리즘이 48건으로 전체의 절반을 넘어 가장 큰 묶음을 이룬다. 음악·오디오 16건, 이미지·비디오 12건이 그 뒤를 잇는다. 매일 새로 쓰이는 텍스트가 한 번 쌓아두고 마는 아카이브보다 더 활발히 거래된다는 사실 자체가, 시장이 정적 보유분이 아니라 갱신되는 흐름에 값을 매기기 시작했다는 신호다.

사는 쪽도 한 곳에 쏠려 있다. OpenAI는 공개 딜 24건으로 2위 그룹(각 12건 안팎의 Microsoft·Meta)의 두 배에 이른다. 최신 콘텐츠에 대한 접근권을 경쟁사보다 먼저, 더 많이 확보해 두려는 포석으로 읽힌다. 한 번 사두면 끝나는 아카이브였다면 이렇게까지 한 회사가 거래를 쓸어 담을 이유가 약하다. 계속 갱신되는 접근권이기 때문에, 누가 먼저 그 흐름을 잡느냐가 경쟁의 문제가 된다.

![OpenAI 로고 — 공개 라이선싱 딜 24건으로 Microsoft·Meta의 2배에 달하는 시장 점유율 확보](./image/img-04-openai.svg)
*▲ OpenAI는 공개 딜 24건으로 2위 그룹(Microsoft·Meta, 각 12건)의 2배에 달하는 라이선싱 규모 — 실시간 접근권 선점 전략의 결과 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:OpenAI_Logo.svg)*

## 자산에서 흐름으로: 데이터 경제학의 재정의

거래 형태가 바뀐 진짜 이유는 데이터의 경제적 성질에 있다. 경제학은 가치를 두 가지로 나눈다. 한 시점에 쌓여 있는 양인 자산(stock)과, 시간에 따라 흐르는 양인 흐름(flow)이다. 일회성 학습 라이선스는 데이터를 자산으로 다룬다. 한 번 사두면 보유한 만큼 가치가 남는다고 가정한다. 그런데 데이터는 보유한 순간부터 가치가 새어 나간다.

### 데이터에는 유통기한이 있다

모델의 지식은 학습 컷오프 시점에 멈춘다. 컷오프에서 실제 출시까지는 보통 6개월에서 18개월이 걸리고, 출시 이후의 세상은 계속 흘러간다. 그래서 컷오프 이후의 사실을 물으면 정확도가 떨어진다. 한 연구는 검색 증강(RAG)을 붙인 모델과 그렇지 않은 모델의 정확도 격차가, 컷오프 이전 데이터에서는 16.3%였지만 컷오프 이후 데이터에서는 44.16%로 벌어진다고 측정했다. 한 번 산 데이터만으로 답하려 할수록, 최신 사실 앞에서 모델이 더 크게 틀린다는 뜻이다.

아래는 그 격차를 컷오프 전후로 비교한 것이다. 같은 모델이라도 다루는 사실이 학습 시점에서 멀어질수록, 실시간 검색의 이점이 급격히 커진다.

#### +16.3%

컷오프 이전 데이터

학습에 이미 담긴 시기. 검색 증강의 이점이 상대적으로 작다.

#### +44.16%

컷오프 이후 데이터

학습에 없는 시기. 실시간 접근 없이는 정확도가 크게 무너진다.

데이터가 흐름이라면, 거래 방식도 흐름에 맞춰야 한다. 소유에서 구독으로, 즉 데이터의 SaaS화다. 한 번 사서 영원히 쓰는 소프트웨어 라이선스가 월 구독으로 바뀌었듯, 데이터도 갱신을 전제로 한 구독 모델로 옮겨가고 있다.

### 가격표가 4세대에 걸쳐 진화했다

과금 방식의 진화는 이 흐름화를 압축해서 보여준다. 1세대는 고정 연간료였다. AP나 악셀 슈프링거, 초기 레딧–구글 계약이 여기 속한다. 2세대는 고정에 사용량 변동을 얹은 형태로, 테일러 앤 프랜시스나 닷대시 메러디스의 계약이 그렇다. 3세대는 쿼리나 크롤 횟수에 따라 매기는 사용량 기반 과금이다. 협상 중인 4세대는 결과 연동형으로, 레딧이 구글에 AI 답변의 인용 비중에 따라 가격을 매기자고 요구한 사례가 대표적이다.

이 변화를 떠받치는 인프라 층도 함께 자랐다. TollBit은 크롤 횟수당, Cloudflare는 요청당 과금하고, ProRata는 500개 넘는 출판사가 참여하는 수익 공유 모델을 운영한다. 데이터 비용의 무게중심이 일회성 구매(CAPEX)에서 지속 운영비(OPEX)로 넘어가고 있다는 인프라 차원의 증거다.

> [!callout]
> "데이터가 자산이다"라는 말은 절반만 맞다. 데이터는 보유하는 자산이 아니라, 흐를 때만 가치를 내는 흐름이다. 한 번 사서 쌓아두면 가치가 새어 나가고, 계속 갱신·검증·공급해야 가치가 유지된다. 시장은 가격표를 바꿔 가며 이 사실을 인정하는 중이다.

## 배치에서 실시간으로: 데이터 인프라가 바뀐다

거래가 흐름으로 바뀌면 그 데이터를 다루는 파이프라인도 따라 바뀐다. 일회성 학습 덤프는 배치 ETL의 세계였다. 주기적으로 데이터를 모아 한 번 정제하고, 학습에 넣고, 출하 전에 한 번 검수하면 됐다. 실시간 피드는 스트리밍과 검색(retrieval)의 세계다. 데이터가 끊임없이 들어오고, 모델이 추론하는 그 순간 검색해 답에 반영한다.

두 구조에서 데이터 품질이 작동하는 방식은 근본적으로 다르다.

![Apache Kafka 아키텍처 다이어그램 — 분산 이벤트 스트리밍 플랫폼, 실시간 데이터 파이프라인의 핵심 인프라](./image/img-05-kafka.svg)
*▲ Apache Kafka — 배치 ETL을 대체하는 분산 이벤트 스트리밍 플랫폼. 실시간 데이터 공급 인프라의 사실상 표준 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Apache_Kafka_logo.svg)*

#### 배치 ETL — 일회성 학습

- •주기적 일괄 적재
- •출하 전 1회 검수
- •결함은 가중치에 평균화되어 희석
- •비용은 일회성 구매(CAPEX)

#### 스트리밍·검색 — 실시간 접근

- •상시 공급·검색
- •흐름에 대한 상시 모니터링
- •결함은 추론 시점에 그대로 노출
- •비용은 지속 운영비(OPEX)

차이의 핵심은 마지막 항목에 있다. 배치 학습에서는 더러운 데이터 한 건이 수많은 가중치 안에 평균화되어 희석됐다. 실시간 피드에서는 그 한 건이 그대로 답변이 된다. 데이터 결함이 학습 단계에 묻히지 않고 추론 시점에 즉시 드러난다. 품질의 부담이 학습 전 한 번에서, 흐르는 내내로 옮겨간다.

### 실시간 공급이 만드는 네 가지 미해결 문제

연구기관 [Ithaka S+R](https://sr.ithaka.org/our-work/generative-ai-licensing-agreement-tracker/)은 라이선싱 트래커에서 실시간 접근 시대에 아직 풀리지 않은 운영 문제 네 가지를 짚는다. 모두 일회성 정제로는 해결되지 않는, 흐름을 상시 다뤄야 풀리는 문제들이다.

정정 전파(correction propagation)

원본이 정정·취소되면, 그 사실이 모델 안으로 어떻게 전파되는가. 표준이 없다.

저자 옵트아웃(opt-out)

개별 저자가 자기 글을 빼달라고 할 메커니즘이 확립돼 있지 않다.

출처 추적(provenance)

출력에서 원문으로 인용·역링크를 제공할 수 있는지가 아직 미결이다.

가격·계약 표준 부재

거래를 설계할 표준 계약 형태가 아직 시장에 등장하지 않았다.

네 문제는 따로 떨어진 항목이 아니라 하나의 줄기에서 갈라진다. 데이터가 어디서 왔고, 어떻게 변했고, 지금 정확한지를 흐르는 내내 추적하고 보증하는 능력. 정적 데이터셋에는 없던 요구다.

## 흐르는 데이터의 시대, 품질은 운영된다

지금까지의 시장 데이터는 하나의 결론으로 모인다. 데이터의 가치가 보유하는 자산에서 흐르는 무엇으로 옮겨갔다면, 데이터 품질도 한 번 검수하는 일에서 흐름을 상시 보증하는 운영으로 옮겨가야 한다. 거래 구조가 그렇게 바뀌었으니, 데이터를 다루는 방식도 그 뒤를 따른다.

실무로 옮기면 데이터 팀의 일이 달라진다. "데이터셋을 한 번 정제해 넘긴다"에서 "흐르는 피드의 품질·신선도·리니지를 상시 보증한다"로 무게가 이동한다. 조달 예산은 일회성 비용에서 구독형 운영비로 바뀌고, 출처 표시와 옵트아웃과 정정 의무가 새로운 계약 리스크로 들어온다. 실시간 공급 시대에 데이터 팀이 가장 먼저 점검해야 할 것은 네 가지다.

- •**신선도 SLA** — 데이터를 언제까지 갱신해 공급할지 약속할 수 있는가.
- •**리니지·출처 추적** — 어떤 출처가 어떤 출력에 쓰였는지 거슬러 올라갈 수 있는가.
- •**정정 전파 절차** — 원본이 바뀌면 그 변화가 답변까지 반영되는가.
- •**옵트아웃 대응** — 빼달라는 요구를 흐름 안에서 처리할 수 있는가.

네 가지 모두 일회성 정제로는 채워지지 않는, 상시 운영되는 품질 역량이다. 그래서 실시간 공급이 기본값이 되는 세계에서 한 문장이 성립한다. 검증되지 않은 흐름은 자산이 아니라 부채다. 깨끗하지 않은 데이터가 흐르면, 그 결함은 추론 시점에 그대로 답변이 되어 오답과 법적 책임으로 돌아온다.

> [!callout]
> 위키미디어가 무료 스크래핑 대신 "정제되고 구조화된 실시간 접근"을 상품으로 판 것은 우연이 아니다. 시장은 자발적으로, 흘릴 수 있는 형태로 검증된 데이터에 값을 매기기 시작했다. 데이터 품질과 리니지 검증이 일회성 정제의 부가 작업이 아니라, 흐름을 다루는 상시 운영의 핵심으로 격상되는 지점이다.

Editor's Note

페블러스가 풀어온 문제 — 데이터 품질 진단·정제(DataClinic)와 흘릴 수 있는 형태의 데이터(AI-Ready Data) — 는 이 보고서가 그리는 시장의 기본 요구와 같은 자리에 있다. 정적 데이터를 한 번 정제하는 도구가 아니라, 흐르는 데이터의 품질을 상시 운영하는 관점에서 이 전환을 읽고 있다.

## 참고문헌

### 1차 소스

- 1.Kelly, R. (2026, June). "[AI Content Licensing Deals (June 2026)](https://mediaandthemachine.substack.com/p/ai-content-licensing-deals-june-2026)." _Media and the Machine_.
- 2.Ithaka S+R. (2024). "[Generative AI Licensing Agreement Tracker](https://sr.ithaka.org/our-work/generative-ai-licensing-agreement-tracker/)." Ithaka S+R.

### 업계·보도

- 3.Digiday. (2025). "[What the Washington Post's OpenAI deal says about the future of AI content licensing](https://digiday.com/media/media-briefing-what-the-washington-posts-deal-with-openai-says-about-the-future-of-ai-content-licensing/)." _Digiday_.
- 4.Digiday. (2025). "[A timeline of the major deals between publishers and AI tech companies in 2025](https://digiday.com/media/a-timeline-of-the-major-deals-between-publishers-and-ai-tech-companies-in-2025/)." _Digiday_.
- 5.TechCrunch. (2024, May 16). "[OpenAI inks deal to train AI on Reddit data](https://techcrunch.com/2024/05/16/openai-inks-deal-to-train-ai-on-reddit-data/)." _TechCrunch_.
- 6.TechCrunch. (2026, January 15). "[Wikimedia Foundation announces new AI partnerships](https://techcrunch.com/2026/01/15/wikimedia-foundation-announces-new-ai-partnerships-with-amazon-meta-microsoft-perplexity-and-others/)." _TechCrunch_.
- 7.NPR. (2025, September 5). "[Anthropic reaches $1.5 billion settlement with authors over AI training material](https://www.npr.org/2025/09/05/g-s1-87367/anthropic-authors-settlement-pirated-chatbot-training-material)." _NPR_.

### 기술·시장 분석

- 8.Aya Data. (2025). "[The State of Retrieval-Augmented Generation (RAG) in 2025 and Beyond](https://www.ayadata.ai/the-state-of-retrieval-augmented-generation-rag-in-2025-and-beyond/)." _Aya Data_.
- 9.DataIntelo. (2024). "[Dataset Licensing for AI Training Market Research](https://dataintelo.com/report/dataset-licensing-for-ai-training-market)." DataIntelo.
- 10.MarketsandMarkets. (2025). "[Retrieval-Augmented Generation (RAG) Market — Global Forecast to 2030](https://www.marketsandmarkets.com/Market-Reports/retrieval-augmented-generation-rag-market-135976317.html)." MarketsandMarkets.
- 11.Yahoo Finance. (2024). "[Shutterstock AI licensing business generated $104M in 2023](https://finance.yahoo.com/news/shutterstock-ai-licensing-business-generated-120000890.html)." _Yahoo Finance_.

※ 2026년 거래 수치는 상반기 흐름을 바탕으로 한 전망값이며, 공개:비공개 딜 비율(1:50~100) 등 일부 추정치는 독립 검증이 어려운 업계 내부자 추정임을 밝혀둔다.
