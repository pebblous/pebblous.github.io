---
title: AI가 답할 때마다 출처에 값을 매기는 콘텐츠 정산 원장이 나왔다
subtitle: Next Net·Sundial·NVIDIA가 내놓은 SAIL은 CoMP·RSL과 호환되는 쿼리 단위 정산 계층을 표방한다
date: 2026-07-21
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI가 답할 때마다 출처에 값을 매기는 콘텐츠 정산 원장이 나왔다

_Next Net·Sundial·NVIDIA가 내놓은 SAIL은 CoMP·RSL과 호환되는 쿼리 단위 정산 계층을 표방한다_

## Executive Summary

> [!callout]
> AI가 출판사 콘텐츠를 참조할 때마다 그 사용 이력을 장부에 기록하고, 그 장부를 정산의 근거로 삼는다. 2026년 7월 14일 Next Net과 Sundial Media & Technology Group이 발표한 SAIL(Standardized Agentic Intelligence Ledger)이 표방하는 그림입니다. NVIDIA가 컴퓨트를 대고, Essence·Refinery29·Afropunk·Beautycon 네 미디어 브랜드가 실제 콘텐츠를 태웠습니다. 이 글은 저작권 정산의 단위가 '계약'에서 '질의'로 내려오는 순간을 데이터 관점에서 봅니다.

> SAIL이 겨냥하는 것은 두 기존 경로가 남긴 빈칸입니다. 건별 라이선스 협상은 신생·중소 퍼블리셔에게 협상력이 없고, 소송은 이겨도 '누구에게 얼마를'이라는 정산 단위 문제를 그대로 남깁니다. 다만 SAIL도 아직 절반만 푼 해법입니다. 사용을 증빙하는 '소스 파일'은 설계했지만, 가격과 수익 배분 산식, 실제 거래 사례는 공개되지 않았습니다.

> 그래서 SAIL을 과대평가하지도 무시하지도 않으려 합니다. 시장에 동시다발로 등장하는 여러 '쿼리 단위 정산' 시도 가운데 하나로 놓고 보면, 이들이 결국 같은 질문 하나로 수렴한다는 사실이 더 또렷해집니다. 이 응답에 어떤 출처가 얼마나 기여했는가.

### 주요 수치

출처: [GlobeNewswire](https://www.globenewswire.com/news-release/2026/07/14/3326956/0/en/Next-Net-and-Sundial-Media-Technology-Group-Launch-SAIL-a-New-Rights-Managed-Content-Standard-for-AI.html), [AdExchanger](https://www.adexchanger.com/publishers/this-new-training-framework-gives-publishers-a-say-in-how-ai-uses-their-work/)

네 숫자가 SAIL의 현재 위치를 압축합니다. 실제 미디어 브랜드와 인프라는 붙었지만, 정산을 완성하는 가격과 실거래는 아직 비어 있습니다. 그 공백은 정확히, 앞선 페블러스 리포트가 "여전히 미해결"이라 부른 지점과 겹칩니다.

<!-- stat-card -->
**4개** — 참여 미디어 브랜드 — Essence·Refinery29·Afropunk·Beautycon을 실제 콘텐츠로 태웠다

<!-- stat-card -->
**0건** — 공개된 실거래 — 발표 시점 기준 가동 전 프레임워크 — 추가 기술 평가 진행 중

<!-- stat-card -->
**미공개** — 가격·수익 배분 산식 — 사용 '증빙'은 설계됐지만 정산 '산식'은 아직 없다

<!-- stat-card -->
**91건** — 공개된 AI 라이선싱 딜 — 계약 단위 시대의 누적치 — 이제 정산 단위가 쿼리로 내려온다

## 라이선스도 소송도 못 푼 '누구에게 얼마를'

지금까지 출판사가 AI에 콘텐츠를 내주고 값을 받는 길은 크게 둘이었습니다. 하나는 건별 라이선스 협상입니다. News Corp가 OpenAI와 5년에 2억 5천만 달러가 넘는 규모로 맺은 계약, AP·Axel Springer·FT가 각각 체결한 계약이 여기에 속합니다. 문제는 이 길이 힘 있는 소수에게만 열려 있다는 점입니다. 협상 테이블에 앉을 규모가 안 되는 신생·중소 퍼블리셔에게는 애초에 자리가 없고, 계약은 갱신 때마다 다시 협상해야 합니다.

다른 하나는 소송입니다. NYT가 OpenAI를, CNN이 Perplexity를 상대로 걸었고, 학습 데이터 소송에서는 Anthropic이 약 15억 달러 합의안을 냈습니다. 그런데 그 합의안은 2026년 Martinez-Olguin 판사에게 반려됐습니다. 사유는 "지급 산정 근거가 불충분하다"는 것이었습니다. 소송에서 이겨도, 아니 합의에 이르러도, '누구에게 얼마를 어떤 근거로' 줄 것인가라는 정산 단위 문제는 여전히 아무도 풀지 못했다는 사실을 법원이 확인해 준 셈입니다.

![뉴욕타임스 본사 건물 — NYT가 OpenAI를 상대로 낸 저작권 소송을 상징](./image/img-01-nyt-lawsuit.jpg)
*▲ NYT는 OpenAI를 상대로 저작권 소송을 제기했지만, 소송은 이겨도 '누구에게 얼마를' 정할 산식은 남기지 못한다 | Source: [Wikimedia Commons (CC BY 4.0, Jdforrester)](https://commons.wikimedia.org/wiki/File:The_New_York_Times_Building_at_sunset,_2021-09-30.jpg)*

SAIL이 제안하는 세 번째 길은 이 정산 단위를 계약에서 질의로 내려놓는 것입니다. Sundial의 CEO Kirk McDonald는 이 프레임워크를 "일회성 라이선스 협상"과 "소송"의 대안으로 설명하며, "다윗과 골리앗 구도"보다 협력적 접근을 강조했습니다. 계약서 한 장이 아니라, AI가 답을 만들 때마다 어떤 출처를 얼마나 참조했는지를 원장에 남기고, 그 원장이 정산의 근거가 되게 하자는 발상입니다.

> [!callout]
> **핵심**: 라이선스는 협상력 없는 퍼블리셔를 배제하고, 소송은 이겨도 정산 산식을 남기지 못합니다. SAIL은 그 빈칸을 '쿼리 단위 원장'으로 메우려 합니다.

## SAIL이 실제로 하는 일

SAIL은 세 축의 조합입니다. AI 라이선싱 플랫폼 Next Net(CEO Franklin Rios)이 콘텐츠 인텔리전스 파이프라인을 맡고, 미디어 발행사 Sundial이 실제 콘텐츠를 대며, NVIDIA가 컴퓨트를 제공합니다. NVIDIA의 역할은 지분 투자가 아니라 인프라입니다. Next Net의 파이프라인이 NeMo·RAPIDS·NIM 마이크로서비스 위에서 의미 점수화와 벡터 검색, GPU 가속 추론을 돌려 "대규모 권한 관리 검색"을 가능케 한다는 설명입니다.

![NVIDIA GPU 하드웨어 — SAIL의 벡터 검색·GPU 가속 추론을 뒷받침하는 컴퓨트 인프라](./image/img-02-nvidia-h100.png)
*▲ NVIDIA는 지분 투자가 아니라 GPU 컴퓨트로 SAIL의 의미 점수화·벡터 검색을 뒷받침한다 | Source: [Wikimedia Commons (CC BY 3.0, 极客湾Geekerwan)](https://commons.wikimedia.org/wiki/File:NVIDIA_H100_(%E6%9E%81%E5%AE%A2%E6%B9%BEGeekerwan)_021.png)*

작동 방식의 핵심은 "쿼리마다 추적"입니다. AI 시스템이 답변을 구성하며 출판사 콘텐츠를 참조하는 시점마다 그 사용을 기록하고, SAIL 원장은 이 이력을 덧붙이는(append) 방식으로 쌓습니다. 출판사가 받는 것은 **소스 파일(source file)**입니다. 특정 AI 응답이 어떤 콘텐츠 조각으로 구성됐는지를 보여 주는 근거 문서로, "무엇을 얼마나 썼는가"라는 정산의 전제를 증빙하는 자료입니다.

여기에 기술적으로 흥미로운 요소가 하나 더 있습니다. 권위도 가중입니다. SAIL은 단순히 사용량을 집계하는 데 그치지 않고, 특정 출판사를 AI 시스템이 "더 신뢰할 수 있는 출처"로 취급하도록 설정하는 기능을 포함한다고 합니다. 예를 들어 Essence를 흑인 여성 관련 주제에서 가장 권위 있는 출처로 응답에 인용되게 하는 식입니다. 정산이 곧 인용 우선순위 협상이기도 하다는 뜻입니다.

SAIL이 정산을 넘어 겨냥하는 지점이 하나 더 있습니다. Sundial은 마케팅 자동화와 콘텐츠 제작 플랫폼, 챗봇 같은 내부 AI 도구에 이미 자사의 문화적 기준을 학습시켜 두었고, 그 기준을 외부 AI 시스템과 연동할 때도 그대로 적용하려 합니다. 저작권 값을 매기는 데서 멈추지 않고, 콘텐츠가 인용되는 방식과 편집 방향성까지 원장에 담으려는 설계인 셈입니다.

정작 눈여겨봐야 할 건 아직 공개되지 않은 쪽입니다. 가격과 수익 배분 비율이 그렇습니다. 토큰 단위로 과금하는지 응답 단위로 과금하는지, 결제 프로토콜과 어떻게 결합하는지 같은 정산 메커니즘의 구체도 밝혀지지 않았습니다. 실제 거래 사례도 아직 없고, 공식 가동일도 미정입니다. 발표 시점 기준으로 "추가 기술 평가가 진행 중"인, 어디까지나 프레임워크 발표입니다. 또한 SAIL은 처음부터 독자 표준을 자처하지 않습니다. IAB Tech Lab의 CoMP와 RSL 위에 얹는 트랜잭션·영수증·마켓 인텔리전스 계층으로 자신을 자리매김합니다.

> [!callout]
> **공개 vs 미공개**: 참여 브랜드, NVIDIA 인프라, 소스 파일 증빙, 권위도 가중은 공개됐습니다. 가격, 수익 배분, 정산 메커니즘, 실거래, 가동일은 미공개입니다. 정산의 '증빙'은 설계됐지만 '산식'은 아직 비어 있습니다.

## 이미 붐비는 지형 — SAIL은 혼자가 아니다

"쿼리 단위 정산"을 향한 시도는 SAIL 하나가 아닙니다. 지금 시장에는 최소 대여섯 개의 인접·경쟁 시스템이 동시에 등장 중이고, 서로 호환을 표방하지만 실제 상호운용성은 검증되지 않았습니다. 아래 표가 그 지형을 정리합니다. SAIL의 뉴스가치는 "최초"가 아니라, 기존 두 표준 위에 실제 미디어 브랜드 네 개와 NVIDIA 인프라를 함께 태운 첫 상업적 조합이라는 데 있습니다.

| 시스템 | 성격 | 핵심 차별점 |
| --- | --- | --- |
| IAB CoMP | 업계 표준 컨소시엄 | 쿼리 단위 정산의 상위 표준 격 — SAIL이 호환을 표방하는 대상 |
| RSL | robots.txt 확장 라이선스 시그널 | 크롤 단위 과금은 작동, 추론 시점 정산은 여전히 미해결 |
| Aegon | 학술 제안 (arXiv 2026) | 서명 JWT 라이선스 + append 원장 + Merkle Tree — 암호학적으로 더 구체적인 설계도 |
| Cashmere | 상용 플랫폼 (시드 $5M) | Wiley·Harvard Business Publishing 실사용 — SAIL보다 앞선 라이브 사례 |
| TollBit | 상용 봇 페이월 | 누적 투자 $30.9M, 500+ 사이트 커버 — 다만 공개 명세·감사 원장은 없음 |
| Cloudflare 402 | 인프라 레벨 결제 | 2025년 7월 크롤러 기본 차단 전환 — 정산 인프라 수요를 촉발한 장본인 |
| Perplexity | 자체 수익 공유 프로그램 | 인용 시 퍼블리셔에 수익 배분 — SAIL의 권위도 가중과 닮은 인용 우선순위 개념을 이미 실험 중 |

> [!callout]
> **왜 중요한가**: 여러 표준이 동시에 "쿼리 단위 정산"을 향해 달려가고 있다는 사실 자체가 뉴스입니다. 이 경쟁은 아직 정리되지 않았고, SAIL은 그 가운데 실제 브랜드와 인프라를 붙인 상업적 시도의 하나입니다.

## 왜 지금인가

정산 인프라를 향한 수요가 2026년 여름에 몰린 데에는 몇 가지 압력이 겹쳤습니다. 규제 쪽에서는 EU AI Act가 힘을 더합니다. 고위험 시스템에 데이터 출처 문서화 의무를 부과하는 Article 10이 2026년 8월 시행을 앞두고 있고, 범용 AI 모델 제공자는 EU 집행위 표준 템플릿으로 학습 데이터 요약을 공개해야 합니다. 미국에서도 저작권청이 2025년 5월 낸 Part 3 보고서가 포괄적 공정이용 항변에 회의적 입장을 보이며 강제 라이선싱 프레임워크의 필요성을 시사했습니다.

![유럽의회 스트라스부르 본회의장 — 데이터 출처 문서화를 의무화하는 EU AI Act 규제 압력](./image/img-03-eu-ai-act.jpg)
*▲ EU AI Act Article 10은 고위험 시스템에 데이터 출처 문서화 의무를 부과한다 (2026년 8월 시행) | Source: [Wikimedia Commons (CC BY-SA 3.0, Diliff)](https://commons.wikimedia.org/wiki/File:European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg)*

기술·시장 쪽 압력은 더 직접적입니다. Cloudflare가 2025년 7월 크롤러를 기본 차단으로 전환하자, "스크래핑 무료 통로"가 좁아졌습니다. 그 전후로 라이선싱 딜은 10건에서 22건으로 뛰었습니다. 공짜로 긁어 가던 길이 막히니, 값을 치르고 쓰는 인프라의 수요가 곧바로 자라난 것입니다.

큰 흐름은 페블러스가 앞선 리포트에서 정리한 대로입니다. 2023년 2건이던 공개 AI 라이선싱 딜은 2024년 11건, 2025년 18건으로 늘었고 2026년에는 34건이 예상됩니다. 이 딜들 가운데 뉴스·저널리즘이 48건으로 가장 많아, 음악·오디오(16건)나 이미지·영상(12건)을 크게 앞섭니다. SAIL에 실제 콘텐츠를 태운 곳이 미디어 발행사인 이유도 여기에 있습니다. 그리고 그 성격이 "훈련용 판매"에서 "실시간 대여"로 바뀌고 있습니다. AI가 더 이상 데이터를 한 번 사서 끝내지 않고 질의마다 빌려 쓰는 쪽으로 옮겨 가면, 정산의 단위도 계약에서 질의로 따라 내려올 수밖에 없습니다. SAIL은 이 흐름의 끝에 서 있는 시도입니다.

## 아직 절반만 푼 해법 — 결국 데이터 계보

SAIL이 만든 것은 정산의 증빙입니다. 어떤 응답이 어떤 콘텐츠를 참조했는지 소스 파일로 남기는 장부를 세웠습니다. 하지만 정산의 산식은 여전히 비어 있습니다. 얼마를 매길지, 참조 한 번의 값을 무엇으로 환산할지가 공개되지 않은 채로 남아 있기 때문입니다. 페블러스가 앞서 [RSL 리포트](/report/rsl-content-licensing/ko/)에서 "크롤 단위 과금은 작동하지만 추론 시점 정산은 미해결"이라 짚은 진단은, SAIL이 등장한 지금도 여전히 유효합니다. 원장은 생겼지만, 그 원장에 얼마를 적을지는 아직 정해지지 않았습니다.

이 빈칸이 페블러스가 다뤄 온 문제와 정확히 만납니다. 쿼리 단위 정산이 작동하려면, "이 응답에 어떤 출처가 얼마나 기여했는가"를 잴 수 있어야 합니다. 그런데 그 측정은 결코 자명하지 않습니다. 며칠 전 다룬 [그라운딩 데이터의 저작권 책임](/blog/grounding-data-copyright-liability/ko/)이 "질의마다 새 책임이 생긴다"는 문제를 제기했다면, SAIL은 그 책임에 값을 매기려는 인프라적 응답입니다. 다만 응답이 완성되려면, 책임의 크기를 재는 자가 먼저 서야 합니다.

기여도를 재는 문제는 이미 별도의 기술 계보를 이룹니다. 어떤 학습 데이터가 특정 출력에 얼마나 영향을 줬는지 추정하는 영향 함수, 데이터 조각의 한계 기여를 값으로 환산하는 Shapley Value 같은 방법들이 그것입니다. 쿼리 단위 정산은 결국 이 기여도 측정과 데이터 계보 추적 위에서만 정확해집니다. 어떤 출처를 얼마나 썼는지 신뢰할 수 있게 기록하고 증빙하지 못하면, 원장은 숫자 없는 장부에 그칩니다.

> [!callout]
> **남는 질문**: SAIL은 저작권 정산을 계약에서 질의로 내려놓았지만, 질의 하나의 값을 정하는 문제는 그대로 남겨 두었습니다. 그 값을 정하는 일은 곧 데이터 계보와 기여도를 재는 일이고, 이것이 쿼리 단위 정산 시대가 다음으로 풀어야 할 진짜 과제입니다.

## 참고

- 1.Next Net & Sundial Media & Technology Group. (2026-07-14). "Next Net and Sundial Media Technology Group Launch SAIL, a New Rights-Managed Content Standard for AI." [GlobeNewswire](https://www.globenewswire.com/news-release/2026/07/14/3326956/0/en/Next-Net-and-Sundial-Media-Technology-Group-Launch-SAIL-a-New-Rights-Managed-Content-Standard-for-AI.html).
- 2.AdExchanger. (2026-07). "This New Training Framework Gives Publishers A Say In How AI Uses Their Work." [adexchanger.com](https://www.adexchanger.com/publishers/this-new-training-framework-gives-publishers-a-say-in-how-ai-uses-their-work/).
- 3.PPC Land. (2026-07). "Next Net and Sundial pair four media brands with NVIDIA for AI content pay." [ppc.land](https://ppc.land/next-net-and-sundial-pair-four-media-brands-with-nvidia-for-ai-content-pay/).
