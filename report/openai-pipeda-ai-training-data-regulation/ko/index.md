---
title: 사후 동의는 불가능하다 — 캐나다가 그은 새로운 선
subtitle: 캐나다 PIPEDA Findings #2026-002와 AI-Ready Compliance의 등장
date: 2026-05-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 사후 동의는 불가능하다 — 캐나다가 그은 새로운 선

_캐나다 PIPEDA Findings #2026-002와 AI-Ready Compliance의 등장_

## Executive Summary

> [!callout]
> 2026년 5월 6일, 캐나다의 4개 개인정보위원회가 OpenAI ChatGPT에 대한 3년 합동조사를 종결하며 **PIPEDA Findings #2026-002**를 공식 발표했다. 연방 OPC의 Philippe Dufresne, 퀘벡 CAI의 Naomi Ayotte, BC OIPC의 Michael Harvey, Alberta OIPC의 Diane McLeod. 네 명의 위원장이 한 자리에서 같은 사실관계에 도달했지만 결론은 넷으로 갈렸다. AI 훈련 데이터 수집 관행에 대한 글로벌 규제 동향의 변곡점이자 G7 첫 공식 판정이다. BC와 Alberta의 한 줄이 가장 결정적이다. _"scraped data for which OpenAI has not obtained, and cannot obtain, consent."_ **사후 동의는 불가능하다**는 선언이다.

> 결정문은 다섯 개의 위반을 확정했다. 개인정보 과다 수집(overcollection), 유효한 동의·투명성 결여(lack of valid consent and transparency), 개인정보 사실 부정확성(factual inaccuracies, 환각의 법적 재정의), 열람·정정·삭제 권리 침해(access·correct·delete issues), 관리 책임 결여(lack of accountability). 결정은 4중으로 분기되었다. 연방 OPC는 OpenAI의 시정 약속을 받아들여 _"well-founded and conditionally resolved"_로 종결했고, 퀘벡 CAI는 권고 조치로 처리했지만, BC와 Alberta는 시정 약속만으로는 불충분하다고 보고 _"well-founded but unresolved"_로 거부했다. Michael Harvey는 한 발 더 나아갔다. _"ChatGPT, by design, cannot be compliant with the province's privacy law as currently written."_ 동일한 사실관계가 네 개의 결론을 만들어냈고, 이는 **가장 엄격한 관할이 점진적으로 글로벌 표준이 된다**는 흐름의 첫 증거다.

> 이 결정은 진공 상태에 떨어진 게 아니다. 2024년 12월 이탈리아 Garante가 OpenAI에 부과한 €15M(약 ₩225억) 과징금, 2026년 8월 2일 EU AI Act 고위험 시스템 전면 시행(최대 €35M 또는 매출 7%), 2026년 1월 22일 시행된 한국 AI 기본법, 그리고 2025년 매출 3%에서 10%로 강화된 한국 개인정보보호법 과징금. 글로벌 규제 도미노의 정확한 변곡점에 캐나다가 섰다. 페블러스는 이 변곡점을 **AI-Ready Data → AI-Ready Compliance**의 등장으로 읽는다. DataClinic이 진단해 온 5신호(레이블·분포·신선도·결측·이상치) 위에 **6번째 신호 "합법성"**이 추가되는 순간이다.

**_편집자의 노트._** 데이터 진단을 해온 회사에게 합법성은 자연스럽게 따라오는 다음 신호다. 동의·출처·삭제권의 증명이 데이터 품질의 일부가 되는 시대가 열리고 있다. 이 글은 AI 거버넌스 4부작([Magnifica Humanitas](/report/pope-magnifica-humanitas/ko/) · [SkillOpt](/report/microsoft-skillopt-self-evolving-agents/ko/) · [MUSE-Autoskill](/report/muse-autoskill-self-evolving-skill-lifecycle/ko/))에 이어 법이 강제하는 좌표를 다루는 네 번째 글이다. 도덕이 묻고, 학술이 답하고, 법이 강제하는 흐름의 마지막 착륙점.

### 주요 수치

출처: [OPC News Release](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260506/)(2026-05-06), Garante Provvedimento 755/2024, EU Regulation 2024/1689, 한국 PIPA 개정(2025).

<!-- stat-card -->
**4 위원회** — 연방 + 3개 주 — OPC · CAI · BC · Alberta 3년 합동조사

<!-- stat-card -->
**5 위반** — 과다수집~책임결여 — G7 첫 AI 훈련 데이터 직접 판정

<!-- stat-card -->
**€15M** — 이탈리아 Garante (2024) — OpenAI 첫 GDPR 과징금

<!-- stat-card -->
**~US$140M** — 한국 기업 4중 노출 — PIPEDA+GDPR+AI Act+한국 4중 추정

## 2026년 5월 6일, 무엇이 일어났는가

한 문장으로 정리할 수 있는 사건은 드물다. **2026년 5월 6일, 캐나다 4개 개인정보위원회가 OpenAI ChatGPT의 PIPEDA 위반을 공식 확정했다.** 정식 번호는 **PIPEDA Findings #2026-002**. 2023년 5월에 4 위원회 공동 조사가 개시된 이후 정확히 3년이 흐른 시점이었다. 이날 발표가 무거운 까닭은 단순 결정문 한 건 이상이기 때문이다. 한 자리에서 네 가지 '첫'이 동시에 일어났다. **G7 첫 공식 판정, 첫 4 위원회 합동조사 종결, 첫 "사후 동의 불가능" 선언, 첫 AI 훈련 데이터 직접 판정.** 어느 하나만 떼어 봐도 글로벌 규제 역사의 좌표가 될 사건이 한꺼번에 겹쳤다.

사건의 윤곽은 짧다. 캐나다 개인정보위원회가 ChatGPT 훈련 관행에 대해 PIPEDA 위반을 확정했고, AI 훈련 데이터 수집에 대한 첫 주요 국가 공식 판단이라서 글로벌 규제 파장이 예상된다. 이 글은 그 윤곽을 따라가되, 그 안에 들어 있는 네 명의 위원장, 다섯 개의 위반, 네 가지로 갈린 결정의 결을 천천히 풀어 본다.

![캐나다 오타와 국회의사당 센터 블록 — 연방 개인정보위원회(OPC) 본부 소재지](./image/img-01-centre-block-ottawa.jpg)
*▲ 캐나다 오타와 국회의사당 센터 블록 — 연방 개인정보위원회(OPC)가 자리한 도시. PIPEDA Findings #2026-002는 이 도시에서 발표되었다. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Centre_Block,_Ottawa.jpg)*

### 1.1. 네 명의 위원장, 한 결정문

캐나다의 개인정보 규제 지형은 한국 독자에게 낯설다. 캐나다는 **연방 PIPEDA(Personal Information Protection and Electronic Documents Act)와 주별 개인정보 법령이 병존**한다. BC PIPA, Alberta PIPA, 퀘벡 Private Sector Act가 각자 자기 관할의 민간 부문 개인정보를 다스린다. 같은 사실관계라도 각 법령의 동의 요건이 미묘하게 다르다. 한 글로벌 사업자가 캐나다 전역에서 동시에 PIPEDA에 어긋났다는 의심을 받았을 때, 네 위원회가 협업하는 것은 자연스러운 귀결이었다. 다음 카드는 네 위원장과 그들이 맡은 결정의 결을 보여 준다.

<!-- stat-card -->
**Philippe Dufresne** — Privacy Commissioner of Canada (연방 OPC) — "**Well-founded and conditionally resolved.**" 위반은 확정했으나 OpenAI의 시정 약속을 받아들여 조건부 해결로 종결.

<!-- stat-card -->
**Naomi Ayotte** — Commission d'accès à l'information (퀘벡 CAI) — "**We have decided to make recommendations instead.**" 과징금 대신 권고 조치 — 퀘벡 Private Sector Act 기반.

<!-- stat-card -->
**Michael Harvey** — Information and Privacy Commissioner for BC (BC OIPC) — "**Well-founded but unresolved.**" 시정 약속 불충분 — "ChatGPT는 설계 자체가 BC 법과 양립할 수 없다"는 강한 입장.

<!-- stat-card -->
**Diane McLeod** — Information and Privacy Commissioner of Alberta (Alberta OIPC) — "**Well-founded but unresolved.**" BC와 공동 결정 — "OpenAI가 개인정보 컴플라이언스를 적절히 숙고하지 않은 것은 매우 우려스럽다."

### 1.2. 핵심 verbatim — 짧고 결정적

결정문이 인용되는 자리에서 가장 자주 옮겨지는 한 줄은 이것이다. BC와 Alberta의 공동 입장에서 나온 verbatim이다.

"OpenAI's models rely on **scraped data for which OpenAI has not obtained, and cannot obtain, consent**. Consent for scraped data simply **cannot be obtained after the fact**."

— BC OIPC + Alberta OIPC 공동 입장 (PIPEDA Findings #2026-002)

한 줄이 두 가지를 동시에 끊어 놓는다. 첫째, OpenAI가 동의를 받지 **않은** 것이 아니라 **받을 수 없는** 것이라는 사실의 확인. 둘째, 사후의 옵트아웃·정정·삭제로는 동의의 결여를 메울 수 **없다**는 법리의 선언. 두 문장 사이에 AI 산업의 표준 관행이 통째로 놓여 있다.

같은 발표에서 Michael Harvey BC 위원장은 한 발 더 나아갔다. 그의 발언은 캐나다 언론(Globe and Mail · CBC) 전체가 받아 적은 헤드라인이 되었다.

"**ChatGPT, by design, cannot be compliant with the province's privacy law as currently written.**"

— Michael Harvey, Information and Privacy Commissioner for BC

한국어로 옮기면 "ChatGPT는 그 설계 자체로, 현행 BC 개인정보 법과 양립할 수 없다"는 진단이다. 운영의 결함이 아니라 **설계의 결함**이라는 선언. 시정 약속으로 메울 수 없는 종류의 문제다.

Alberta의 Diane McLeod 위원장도 무게 있는 한 문장을 남겼다. _"OpenAI did not appear to **turn its mind adequately** to privacy compliance ... which is **very troubling**."_ "개인정보 컴플라이언스를 적절히 숙고하지 않은 듯하다, 매우 우려스럽다." 법무 영어에서 _turn one's mind_는 의무자가 진지하게 검토했는지를 묻는 표현이다. 기술 회사가 그 의무를 그저 표면적으로 이행했다는 진단으로 읽힌다.

대조적으로, 연방 OPC의 Dufresne 위원장은 시정의 가능성에 무게를 실었다. _"I've concluded that the measures that have been and that will be implemented by OpenAI **will address the concerns identified**."_ 같은 사실관계에 대한 네 가지 결의 차이가 한 자리에 모인다. 누구의 입장이 맞느냐의 문제가 아니라, **같은 데이터를 보고 네 가지 결론에 도달하는 법 체계의 다층성**이 이번 결정의 진짜 메시지다.

> [!callout]
> 한 시점, 한 발표가 만들어 낸 네 가지 첫. G7 첫 공식 판정, 첫 4 위원회 합동조사 종결, 첫 "사후 동의 불가능" 선언, 첫 AI 훈련 데이터 직접 판정. 어느 하나만으로도 글로벌 규제의 좌표가 될 사건이 한 자리에 겹쳤다.

## 5개 위반 — 한 사슬로 읽기

결정문은 다섯 가지 위반을 확정했다. 다섯 항목은 서로 떨어진 별개의 결함이 아니다. 따로 보면 각자 깔끔한 법 조문 위반이지만, 묶어 보면 **한 사슬**이 보인다. 과다 수집이 동의 부재를 부르고, 동의 부재가 정확성 결여로 이어지고, 정확성 결여가 권리 행사를 불가능하게 만들고, 결국 책임 회피로 마무리되는 인과의 사슬. 다섯 항목을 사슬로 읽으면 결정문이 무엇을 끊으려 했는지가 또렷해진다.

![OpenAI ChatGPT 로고 — PIPEDA Findings #2026-002 조사 대상 제품](./image/img-02-chatgpt-logo.svg)
*▲ OpenAI ChatGPT 공식 로고 — 캐나다 4 위원회 3년 합동조사의 대상이자 다섯 위반 항목이 적용된 제품. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ChatGPT-Logo.svg)*

| # | 위반 항목 (한글 · 영문) | PIPEDA Principle | 평이한 해설 |
| --- | --- | --- | --- |
| 1 | 개인정보 과다 수집(overcollection) | 4.4 Limiting Collection | 웹 스크래핑의 범위가 학습에 필요한 최소한을 넘어선 점 — 데이터 minimization 원칙 위반. |
| 2 | 유효한 동의·투명성 결여(lack of valid consent and transparency) | 4.3 Consent · 4.8 Openness | 개인이 자신의 정보가 학습 데이터가 된다는 사실을 알 길도, 동의할 길도 없는 상태. |
| 3 | 개인정보 사실 부정확성(factual inaccuracies) | 4.6 Accuracy | 환각의 법적 재정의 — 특정인에 관한 부정확한 사실 생성이 PIPEDA Principle 4.6 위반. |
| 4 | 열람·정정·삭제 권리 침해(access · correct · delete issues) | 4.9 Individual Access | 권리 행사 채널이 형식적이거나 작동하지 않는 점 — 학습 가중치 안으로 들어간 정보의 접근 불가능성. |
| 5 | 관리 책임 결여(lack of accountability) | 4.1 Accountability | 학습 가중치에 흡수된 개인정보의 통제·관리 의무가 명확히 귀속되지 않는 점. |

****  
  
출처: 합성 — PIPEDA Findings #2026-002 본문, 캐나다 PIPEDA Schedule 1 (Principles 4.1·4.3·4.4·4.6·4.8·4.9), MLT Aikins(2026) 분석.

### 2.1. 환각이 왜 개인정보 위반이 되는가

다섯 항목 중 가장 학술적으로 새로운 자리는 세 번째, 개인정보 사실 부정확성이다. 결정문 Para 80은 짧게 단언한다. _"OpenAI did not comply with the accuracy requirements under the Acts."_ Para 95는 부정확성의 출처를 적시한다. _"personal information contained in sources such as social media and discussion forums — which may often be inaccurate."_

지금까지 환각은 모델의 품질 문제로 다뤄졌다. 답이 틀리면 사용자가 손해를 보고, 회사는 보강 학습으로 정확도를 높였다. PIPEDA #2026-002는 그 프레임을 바꾼다. **특정 개인에 관해 모델이 부정확한 사실을 생성·반복하는 행위가 PIPEDA Principle 4.6(Accuracy) 위반**이라는 첫 공식 판단이다. 학술적으로는 Wachter & Mittelstadt(2019)가 제안한 _"A Right to Reasonable Inferences"_, 즉 추론에 대한 권리가 부분적으로 실현된 셈이다. 모델이 한 사람에 관해 잘못된 추론을 내놓는 일은 그 사람의 개인정보 권리에 대한 침해다, 라는 학술적 직관이 법 결정으로 착륙했다.

학술적 보조 논거도 있다. Carlini et al.(2021)의 _"Extracting Training Data from Large Language Models"_는 LLM이 학습 데이터를 **memorize(기억)**할 수 있고 그 일부를 출력으로 노출할 수 있음을 실증했다. 모델의 가중치 안에 개인정보가 살아 있다는 학술적 근거다. 결정문이 다섯 번째 위반(관리 책임 결여)을 짚는 자리도 정확히 여기다. 학습 가중치가 곧 개인정보 저장소라는 관점이 받아들여지면, 그 저장소의 관리 책임을 누군가는 져야 한다.

### 2.2. 학습 규모의 정량 — 13조 토큰의 압력

결정문의 무게를 가늠하려면 학습 규모를 한 번 보는 게 도움이 된다. **GPT-4의 학습 토큰은 13조, 파라미터는 1.8조**로 추정된다(SemiAnalysis 누설 보고, 비공식). OpenAI의 공식 수치는 비공개다. 13조 토큰이 어떤 규모인지 직관적으로 말하면, 영어 위키피디아 전체가 약 50억 토큰이고 위키피디아의 약 2,600배를 학습한 셈이다. Stanford CRFM의 _Foundation Model Transparency Index_(Bommasani et al., 2024)는 OpenAI를 포함한 주요 LLM 사업자가 학습 데이터 영역에서 가장 낮은 투명도 점수를 받았다고 보고했다. 13조 토큰 안에 무엇이 들어가 있는지를 외부에서 검증할 수 있는 길은 거의 없다.

이 규모를 본 채로 다섯 번째 위반(Accountability)을 다시 읽으면 결정문의 무게가 다르게 느껴진다. **2,600배의 위키피디아 안에서 한 사람에 관한 개인정보가 어디에 어떻게 사는지를 사업자조차 알 수 없다면, 그 데이터의 관리 책임은 누구의 몫인가.** 결정문은 그 자리에 책임의 공백이 있다고 지적한다.

> [!callout]
> **다섯 위반은 따로 떨어진 결함이 아니라 한 사슬이다.** 과다 수집 → 동의 부재 → 정확성 결여 → 권리 행사 불가능 → 책임 회피. 사슬의 어느 한 고리만 끊어도 다음 고리가 무너진다. 결정문이 다섯 항목을 함께 묶어 다룬 까닭은 바로 이 사슬을 한꺼번에 끊고자 했기 때문이다.

## 분기된 결정 — BC와 Alberta가 거부한 이유

같은 사실관계에서 네 위원회가 네 가지 결의 결론에 도달했다. 그 분기가 곧 이번 결정문의 가장 깊은 메시지다.

### 3.1. 네 갈래의 결의

분기의 결을 표로 정리하면 차이가 또렷해진다. 같은 사실, 다른 법 체계, 그리고 다른 정치적 무게.

| 위원회 | 결의 | 근거 법 | 핵심 논거 |
| --- | --- | --- | --- |
| 연방 OPCPhilippe Dufresne | Well-founded and conditionally resolved | PIPEDA | OpenAI의 시정 약속(즉시 · 3개월 · 6개월)이 우려를 해소한다고 판단. |
| 퀘벡 CAINaomi Ayotte | Recommendations issued | Private Sector Act (Loi 25) | 과징금 권한 행사 대신 권고 — 시정 이행 경과 모니터링. |
| BC OIPCMichael Harvey | Well-founded but unresolved | BC PIPA | "설계 자체가 양립 불가" — 시정 약속만으로 부족. |
| Alberta OIPCDiane McLeod | Well-founded but unresolved | Alberta PIPA | "적절한 숙고 부재" — BC와 공동 입장. |

출처: PIPEDA Findings #2026-002 본문, OPC News Release(2026-05-06), MLT Aikins(2026) 분석.

### 3.2. 왜 BC와 Alberta가 거부했는가

분기의 법리적 뿌리는 캐나다 법률 사무소 MLT Aikins의 분석이 정확히 짚는다. _"provincial statutes are more specific and explicit than PIPEDA regarding consent."_ 주 법령(BC PIPA · Alberta PIPA)이 연방 PIPEDA보다 동의에 관해 더 구체적이고 명시적이라는 뜻이다. 두 주는 특히 **전향적 동의(prospective consent, ex ante consent)**를 명시적으로 요구한다. 처리 행위 전에 동의가 확보되어야 한다는 시간성 요건이 법문에 박혀 있다.

![브리티시 컬럼비아 빅토리아 의사당 — BC 개인정보위원회(OIPC) 본부 도시, '사후 동의 불가능' 선언의 출처](./image/img-03-bc-parliament-victoria.jpg)
*▲ 브리티시 컬럼비아 빅토리아 의사당 — BC 개인정보위원회(OIPC)가 자리한 도시. Michael Harvey 위원장의 "ChatGPT, by design, cannot be compliant"가 발신된 곳. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:British_Columbia_Parliament_-_Victoria.jpg)*

그 시간성 요건에서 보면 OpenAI의 시정 약속은 본질적으로 **사후 동의(consent ex post)**의 시도다. 이미 학습이 끝난 데이터에 대해 사후의 옵트아웃 채널 · 사후의 정정·삭제 절차 · 사후의 투명성 보고서를 약속하는 그림. BC와 Alberta는 이 그림 전체가 자기 주의 법 체계와 양립할 수 없다고 봤다. "사후" 라는 시점 자체가 동의의 결격 사유가 된다는 것이다.

"OpenAI's models rely on scraped data for which OpenAI has not obtained, and cannot obtain, consent. **Consent for scraped data simply cannot be obtained after the fact.**"

— BC OIPC + Alberta OIPC 공동 입장 (verbatim, §1.2에서 옮김)

### 3.3. "사후 동의 불가능"이 흔드는 것 — AI 산업의 표준 관행

지금까지의 AI 학습 산업의 표준 흐름은 단순했다. **크롤 → 학습 → 사후 옵트아웃 채널 제공**. 우선 데이터를 모으고, 모델을 학습시키고, 그 다음에 권리 행사 채널을 열어둔다. 이 순서는 빠르고 효율적이며, 학술 연구와 산업 제품 양쪽에서 사실상의 표준이 되어 있었다. BC와 Alberta의 결정은 이 순서 자체가 **법적으로 불가능한 모델**이라고 선언한다.

학술적으로 이 입장은 동의의 시간성에 대한 한 입장의 강한 채택이다. Daniel Solove(2013)의 _"Privacy Self-Management and the Consent Dilemma"_가 비판한 _notice-and-choice paradigm_의 한계, 즉 개인이 모든 정보 처리에 사전적으로 동의를 표명한다는 가정의 비현실성이 학술적 공감대였다. EDPB Opinion 28/2024는 이 문제를 LLM 맥락에서 _"case by case"_로 유보했다. 캐나다 BC와 Alberta는 그 유보 자리에서 **원칙적 입장**을 채택한 것이다. 사후 동의는 동의가 아니다.

한 가지 결과가 따라온다. 글로벌 규제 동향의 동의 기준 스펙트럼에서 캐나다 BC와 Alberta가 **세계 최강 엄격성**의 자리에 선다는 점이다. 중국 PIPL의 사전 동의 원칙, EU GDPR의 6(1)(a) 동의 근거, 연방 PIPEDA, 미국 부문별 접근의 순서로 강도가 약해지는 스펙트럼에서, BC·Alberta는 그 모든 자리보다 한 발 더 강한 입장에 선다. 글로벌 규제의 역사적 흐름은 **가장 엄격한 관할이 점진적으로 표준이 되는 경로**를 따라왔다. GDPR이 그렇게 글로벌 표준이 되었듯, BC·Alberta의 입장이 다음 표준의 후보가 된다.

> [!callout]
> "사후 동의는 불가능하다"는 일곱 글자가 AI 산업의 표준 관행을 흔든다. 크롤 → 학습 → 사후 옵트아웃의 그림이 법적으로 닫힌다면, 남는 길은 두 가지다. 학습 전의 동의를 확보하거나, 합법적으로 동의가 이미 확보된 데이터 소스만 사용하거나. 두 길 모두 합성 데이터·시뮬레이션 학습·라이선스 데이터 같은 대안의 시장 가치를 끌어올린다. BC와 Alberta가 던진 한 줄이 그 시장의 미래를 끌어당기는 자력이 된다.

## 글로벌 규제 도미노 — 이탈리아·EU·한국·일본·미국·중국·영국

캐나다 결정은 도미노의 **첫 패가 아니라 변곡점**이다. 이탈리아가 시작했고, EU가 강화했고, 한국이 따라갔고, 그 흐름 위에 캐나다가 표준의 결을 또렷이 했다. 도미노의 첫 패는 2023년 봄 이탈리아 Garante가 ChatGPT를 일시 차단한 사건이었다.

규제는 한 번에 등장하지 않는다. 한 관할이 신호를 보내고, 다른 관할이 그 신호를 자기 법체계로 옮겨 적고, 또 다른 관할이 그것을 본격 산정의 기준으로 형식화한다. 그 사이의 시차가 곧 글로벌 규제 도미노의 결이다. 이 섹션은 그 결을 세 자리로 풀어 본다. 3년의 시간순 흐름, 8개 관할의 동시점 비교, 그리고 이탈리아·한국이 만들어 둔 두 산식이다.

### 4.1. 2023~2026 — 3년의 흐름

다음 타임라인은 단순 연표가 아니다. 한 사건이 다음 사건을 끌어당기는 인과의 연쇄다. 이탈리아의 일시 차단이 GDPR 적용의 첫 신호가 되었고, EU AI Act가 그 신호를 법령 수준으로 형식화했고, 한국 AI 기본법이 시행 후 다섯 달째에 캐나다 결정이 그 흐름을 가장 앞에서 정리했다.

| 시점 | 사건 | 의미 |
| --- | --- | --- |
| 2023-03-31 | 이탈리아 Garante, ChatGPT 일시 차단 | 서구 G7 첫 차단 — GDPR 적용의 첫 신호 |
| 2023-06 | 일본 PPC, OpenAI 행정 지도 | 아시아 첫 공식 지도 — 민감 정보 학습 자제 요청 |
| 2023-07 | 미국 FTC, OpenAI Section 5 조사 개시 | 소비자 보호법 관점 — 표시·표현 위반 가능성 |
| 2023-12-27 | NYT v OpenAI 제소 | 저작권 — AI 훈련 데이터 합법성 연계 쟁점 |
| 2024-05-21 | EU AI Act 본문 채택 | 세계 첫 포괄 AI 법 — 데이터 거버넌스 Art 10 |
| 2024-12-17 | EDPB Opinion 28/2024 | LLM의 개인정보 처리 — "case by case" 유보 |
| 2024-12-20 | 이탈리아 Garante, OpenAI €15M 과징금 | 첫 GDPR 과징금 — €0.50/사용자 등 산정 기준 공개 |
| 2026-01-22 | 한국 AI 기본법 시행 | 고영향 AI 영향평가 의무 — 한국 첫 AI 포괄법 |
| 2026-05-06 | 캐나다 PIPEDA Findings #2026-002 | G7 첫 AI 훈련 데이터 직접 판정 |
| 2026-08-02 | EU AI Act 고위험 시스템 전면 시행 | 최대 €35M 또는 매출 7% — 과징금 시대 본격 진입 |

****출처: 합성 — Garante Provvedimento 755/2024, EU OJ L1689, EDPB Opinion 28/2024, 한국 국가법령정보센터, OPC News Release(2026-05-06), FTC 조사 보도, NYT v OpenAI S.D.N.Y. 1:23-cv-11195.

### 4.2. 8개 관할 비교 — 한 표로 보기

한 글로벌 사업자가 ChatGPT를 운영할 때 동시에 마주하는 관할이 늘어났다. 각 관할의 동의 기준·과징금 상한·AI 직접 규제 여부를 한 표로 묶어 보면 글로벌 컴플라이언스 지형이 한눈에 들어온다.

| 관할 | 근거 법 | 동의 기준 | 과징금 상한 | AI 직접 규제 |
| --- | --- | --- | --- | --- |
| 캐나다 (BC · Alberta) | BC PIPA · Alberta PIPA | 전향적 동의 (가장 엄격) | 행정 권한 제한적 | 간접 (개인정보 경유) |
| 캐나다 (연방) | PIPEDA | 광범위 + 묵시적 허용 | CAN$100K/위반 (Sec 28) | 간접 |
| EU | GDPR | 6(1)(a)~(f) 6 근거 중 택 | €20M 또는 매출 4% | 간접 |
| EU (AI 직접) | AI Act | Art 10 데이터 거버넌스 | €35M 또는 매출 7% | 직접 (포괄) |
| 한국 | 개인정보보호법 (PIPA) | 사전 동의 + 목적 제한 | 매출 10% (2025 강화) | 간접 |
| 한국 (AI 직접) | AI 기본법 | 고영향 AI 영향평가 | ₩3,000만 과태료 (2027~) | 직접 (한국형) |
| 중국 | PIPL · 생성형 AI 잠정 조치 | 사전 동의 (강함) | ¥50M 또는 매출 5% | 직접 (사전 평가) |
| 영국 | UK GDPR · DPA 2018 | GDPR 준용 | £17.5M 또는 매출 4% | 간접 |
| 미국 | 부문별 (FTC Act Sec 5 등) | 통일 부재 · 주별 상이 | 소송 비용 중심 | 간접 (조사 경유) |

****출처: 합성 — 각 관할의 1차 법령, OPC·EDPB·한국 PIPC·중국 CAC 공식 자료, MLT Aikins(2026), Cooley LLP(2026) 한국 AI 기본법 분석.

### 4.3. 이탈리아 €15M의 디테일 — 첫 GDPR 과징금이 남긴 산식

2024년 12월 20일 이탈리아 Garante가 OpenAI에 부과한 €15M 과징금은 단순 숫자가 아니라 후속 과징금의 산정 기준 자체를 공개했다는 점에서 중요하다. Garante는 위반의 시점·범위·이용자 수를 기준으로 산식을 적용했고, 사용자당 약 €0.50의 환산 단가를 명시했다. EU 데이터 보호 사적史的으로 학습형 LLM에 대한 첫 본격 산정이라는 점에서 후속 모든 GDPR 결정의 참조점이 된다.

€15M은 GDPR 상한(€20M 또는 매출 4%)에 한참 못 미친다. 그러나 그 의미는 명확하다. **학습형 LLM에 대한 GDPR 적용이 가능하다는 사실의 확인이다.** 이후 2026년 8월 2일 EU AI Act 고위험 시스템 전면 시행과 함께, AI Act의 최대 €35M / 매출 7% 상한이 GDPR 위로 한 층 더 얹힌다. 두 법령이 동시에 적용 가능한 시기가 본격적으로 열린다.

![브뤼셀 베를레몽 빌딩 — EU 집행위원회 본부, GDPR과 AI Act의 정책 진원지](./image/img-04-berlaymont-brussels.jpg)
*▲ 브뤼셀 베를레몽 빌딩 — EU 집행위원회 본부. GDPR(2018)과 AI Act(2024)의 정책 진원지이자, 2026년 8월 2일 고위험 AI 시스템 전면 시행을 앞둔 자리. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Berlaymont,_Brussels.jpg)*

### 4.4. 한국의 자리 — 두 법, 두 시계

한국은 2026년 5월 시점에 두 개의 시계를 동시에 갖고 있다. 하나는 **2025년에 강화된 개인정보보호법**. 과징금 상한이 매출 3%에서 10%로 올라갔다. 다른 하나는 **2026년 1월 22일 시행된 AI 기본법**. 고영향 AI에 대한 영향평가 의무, 운영 중 위험 탐지·차단·전환 체계, 한국 내 사업자 등록·신고 의무를 도입한다. 두 법은 별개의 시계로 작동하지만, AI 학습 데이터의 합법성이라는 한 질문 앞에서는 같은 문장의 두 절처럼 결합된다. PIPA가 학습 데이터의 합법성 문턱을 정의하고, AI 기본법이 운영 단계의 audit trail 의무를 부과한다.

한국 개인정보보호위원회(PIPC)는 2025년 8월 **"생성형 AI 개인정보 처리 안내서"**를 발표하면서 4단계 생애주기(수집·학습·서비스·종료)별 처리 기준을 제시했다. 캐나다 PIPEDA #2026-002의 다섯 위반 항목은 이 4단계 생애주기에 그대로 매핑된다. 수집 단계의 과다 수집, 학습 단계의 동의 부재, 서비스 단계의 정확성·권리 행사, 종료 단계의 책임 귀속. 한국 PIPC의 안내서가 한국 기업의 실무 진입로를 정리했다면, 캐나다 결정문이 그 진입로의 글로벌 합의 가능성을 끌어올렸다고 읽을 수 있다.

## AI Act vs GDPR vs PIPEDA vs 한국 AI 기본법 — 4중 규제 시대

한국 기업이 글로벌 시장에 진출할 때 마주하는 컴플라이언스 풍경은 더 이상 단일 법체계의 그림이 아니다. 같은 학습 데이터에 대해 **네 개의 법체계가 동시에 적용**되는 시기가 시작되었다. PIPEDA(개인정보 보호), GDPR(EU 거주자 개인정보), EU AI Act(AI 시스템 직접 규제), 한국 AI 기본법(국내 AI 사업자). 네 자리에서 네 가지 다른 기준이 한 학습 데이터셋을 동시에 평가한다.

### 5.1. 가상의 한국 LLM 기업 — 4중 노출 시뮬레이션

4중 노출의 무게를 가늠하려면 한 가지 시나리오를 따라가는 게 도움이 된다. **가상의 한국 LLM 기업이 글로벌 매출 US$1B(약 ₩1.4조) 규모**로 ChatGPT 유사 서비스를 캐나다·EU·한국·미국에 동시에 출시했다고 가정해 보자. 동일한 학습 데이터셋(OpenWebText 유사 웹 크롤 + 사용자 대화)에 대해 네 법체계가 각각 어떤 판단을 내릴 수 있는가를 정량으로 추정한 표가 다음이다. 각 수치는 보수적 시나리오(법 조문의 최대 상한)이며, 실제 부과 가능성과는 별개의 노출 한도다.

<!-- stat-card -->
**~CAN$0.1M** — PIPEDA (연방) — 위반당 CAN$100K — 시장 차단 위험이 본질

<!-- stat-card -->
**€40M** — GDPR (최대) — €20M 또는 매출 4% — US$1B 매출 기준

<!-- stat-card -->
**€70M** — EU AI Act (최대) — €35M 또는 매출 7% — 고위험 시스템

<!-- stat-card -->
**~₩140B** — 한국 PIPA + AI 기본법 — 매출 10% (2025 강화) + AI 기본법 과태료

네 자리의 합은 단순 산술로 묶기 어렵다. 같은 행위에 대해 네 관할이 동시에 최대치를 부과하는 시나리오는 현실적으로 드물기 때문이다. 그러나 각 관할이 독립적으로 자기 상한의 일부씩만 부과해도 누적 노출은 결코 작지 않다. 보수적 추정 합산으로 **최대 약 US$140M(≈ ₩1,900억)** 수준이며, 이는 글로벌 매출 US$1B 기준 14% 수준의 단일 위반 비용이 된다. PIPEDA 단독의 행정 권한은 작지만, 4중 동시 노출과 함께 다음 위험이 따라온다. **시장 접근 차단.** BC와 Alberta가 보여 줬듯, 시정 약속으로 해소되지 않는 결정은 사실상의 시장 운영 제한으로 이어진다.

### 5.2. PIPEDA-한국 매핑 — 같은 사슬, 다른 언어

PIPEDA Findings #2026-002의 다섯 위반 항목은 한국 법체계로 그대로 매핑된다. 한국 PIPA와 AI 기본법이 다섯 항목을 어떻게 받아 안는지를 한 표로 정리하면, 4중 대응의 실무 진입로가 또렷해진다.

| PIPEDA 위반 | 한국 PIPA 조문 | AI 기본법 결합 |
| --- | --- | --- |
| ① 과다 수집 | 제15조 (수집·이용) · 제16조 (최소수집) | 고영향 AI 영향평가 — 수집 범위 사전 평가 |
| ② 동의·투명성 결여 | 제15조 (동의) · 제20조 (자동 결정 고지) | 투명성 의무 (AI 시스템 표시·고지) |
| ③ 사실 부정확성 (환각) | 제3조 (정확성 원칙) | 운영 중 위험 탐지·차단·전환 |
| ④ 권리 행사 침해 | 제35~39조 (열람·정정·삭제·이전) | 자동 결정 거부권 · 설명 요구권 |
| ⑤ 관리 책임 결여 | 제28조의2 (개인정보 보호책임자) | 고영향 AI 책임자 지정 의무 |

출처: 합성 — PIPEDA Findings #2026-002, 한국 개인정보보호법 (2025 개정), 한국 AI 기본법 (2026-01-22 시행), PIPC "생성형 AI 개인정보 처리 안내서"(2025-08).

### 5.3. 왜 한국 기업이 BC/Alberta 기준을 봐야 하는가

한국 기업의 컴플라이언스 설계에서 한 가지 직관이 결정적이다. **4중 규제 시대의 안전한 설계는 가장 엄격한 관할에 맞춘 설계다.** 4개 법체계의 기준이 다르더라도, 가장 엄격한 BC/Alberta 기준에 맞춰 데이터 sourcing과 동의 절차를 설계하면 나머지 세 자리도 자연스럽게 충족된다. 반대로 가장 느슨한 자리에 맞춘 설계는 가장 엄격한 자리에서 곧장 위반이 된다.

이 직관이 글로벌 규제 역사의 일반 흐름과도 맞아떨어진다. GDPR이 발효된 2018년 이후 글로벌 사업자 대부분이 GDPR 기준에 맞춰 설계를 통일했고, 그 설계가 다른 관할에서도 사실상의 표준이 되었다. **"Brussels Effect"**, 즉 가장 엄격한 관할의 기준이 글로벌 표준이 되는 흐름이 캐나다 BC/Alberta 발 다음 라운드를 만들 수 있다는 가능성이 열린다.

## AI 거버넌스 4부작이 그린 좌표

이 글은 페블러스의 **AI 거버넌스 4부작**의 마지막 좌표다. 4부작은 한 가지 가정을 따라왔다. AI 거버넌스는 도덕에서 시작해 학술을 거쳐 법으로 착륙한다. 도덕이 왜 인간 존엄을 지켜야 하는지를 묻고, 학술이 자기진화 학습의 어떻게를 설계하고, 법이 그 흐름을 강제한다. 네 글을 한 표로 늘어놓으면 그 가정이 자연스럽게 드러난다.

| 시점 | 글 | 차원 | 핵심 명제 |
| --- | --- | --- | --- |
| 2026-05-25 | Magnifica Humanitas | 도덕 · 신학 | 왜 인간 존엄을 지켜야 하는가 |
| 2026-05-27 | SkillOpt | 학술 · 옵티마이저 | 자기진화 행동의 학습 가능성 |
| 2026-05-28 | MUSE-Autoskill | 학술 · lifecycle | 행동 자산의 생애주기 관리 |
| 2026-05-29 | PIPEDA (본 글) | 법 · 규제 | 법적 강제로의 착륙 — 사후 동의 불가능 |

[/report/pope-magnifica-humanitas/ko/](/report/pope-magnifica-humanitas/ko/)[/report/microsoft-skillopt-self-evolving-agents/ko/](/report/microsoft-skillopt-self-evolving-agents/ko/)[/report/muse-autoskill-self-evolving-skill-lifecycle/ko/](/report/muse-autoskill-self-evolving-skill-lifecycle/ko/)****출처: 페블러스 AI 거버넌스 4부작 시리즈 — 이 글이 시리즈의 4편이자 마지막 좌표.

시리즈를 한 줄로 압축하면 이렇다. **Magnifica가 묻는다 — AI 시대에 인간 존엄이라는 단어는 무엇을 뜻하는가.** 그 질문에 학술이 두 갈래로 답한다. SkillOpt는 "자기진화하는 행동이 학습 가능하다"고 답하고, MUSE는 "그 행동이 자산으로 살아남는다"고 답한다. 그리고 법이 마지막 칸을 채운다. **PIPEDA #2026-002가 그 행동의 학습 재료(데이터)가 합법적이어야 한다는 강제를 부과한다.** 네 글이 그린 4단의 좌표는 한 그림 안에서 닫힌다.

이 좌표가 의미하는 것은 단순한 시리즈 구성이 아니다. **AI 거버넌스가 한 차원의 일이 아니라는 사실의 시각적 증거**다. 도덕만으로는 강제할 수 없고, 학술만으로는 책임을 물을 수 없으며, 법만으로는 가치를 정의할 수 없다. 셋이 함께 작동할 때 비로소 거버넌스가 작동한다. 그 셋을 한 시리즈로 묶어 그려 온 것이 페블러스의 자리였다.

> [!callout]
> 도덕이 묻고, 학술이 답하고, 법이 강제한다. 네 글의 시간차는 닷새다. 그 닷새 사이에 한 가지 시각이 또렷해졌다. AI 거버넌스는 세 차원의 일이고, 그중 한 차원만 다루는 작업은 미완성이다. 이 글이 시리즈의 마지막 좌표인 까닭은, 법이 다른 둘을 강제로 묶는 마지막 매듭이기 때문이다.

## AI-Ready Data → AI-Ready Compliance — 페블러스 관점

페블러스는 지난 몇 해 동안 한 가지 명제를 따라 움직였다. **데이터를 진단 가능한 상태로 만든다.** DataClinic이 학습 데이터의 다섯 신호(레이블 무결성·분포 균형·신선도·결측·이상치)를 진단했고, AI-Ready Data가 그 진단의 출력 카테고리였으며, DataGreenhouse와 PebbloSim이 진단된 데이터의 운영 환경을 제공해 왔다. PIPEDA Findings #2026-002가 던진 명제는 이 흐름의 자연스러운 다음 단계다. **데이터의 법적 품질도 진단 대상이 된다.**

### 7.1. AI-Ready Data에서 AI-Ready Compliance로

명제는 한 칸 확장된다. 학습 데이터의 **기술적 품질**을 진단해 온 회사가, 그 위에 **법적 품질**의 진단 층을 자연스럽게 얹을 수 있다. 새 제품을 만드는 일이 아니라 **기존 자산의 의미가 확장**되는 일이다. DataClinic은 이미 데이터의 무결성·균형·신선도를 신호로 다뤄왔고, 거기에 "합법성"이라는 6번째 신호만 추가하면 된다. DataGreenhouse는 이미 원본 의존도를 낮춰왔고, 그 구조 자체가 PIPEDA의 사후 대응 인프라가 된다. PebbloSim의 시뮬레이션 학습은 실세계 개인정보 없이도 학습이 가능한 구조적 우회로다. 세 축이 PIPEDA #2026-002의 합법성 요건과 정확히 맞물린다.

### 7.2. DataClinic 5신호 + 1 — 6차원 진단

5신호 위에 6번째 신호 "합법성"이 어떻게 얹히는지를 한 표로 정리하면, 진단 체계의 확장이 또렷해진다. 합법성 신호는 다시 다섯 개의 세부 진단 항목으로 갈라진다. PIPEDA #2026-002가 다섯 위반 항목으로 나뉜 것과 정확히 같은 구조다.

| 신호 | 진단 차원 | 핵심 점검 항목 |
| --- | --- | --- |
| ① 레이블 무결성 | 기술 (기존) | 레이블 정확도·일관성 |
| ② 분포 균형 | 기술 (기존) | 클래스·도메인 균형 |
| ③ 신선도 | 기술 (기존) | 데이터 시점·갱신 주기 |
| ④ 결측 | 기술 (기존) | 결측 패턴·보완 가능성 |
| ⑤ 이상치 | 기술 (기존) | 아웃라이어·라벨 오류 |
| ⑥ 합법성(신규 — PIPEDA 도출) | 법 (확장) | 출처·동의·삭제·다관할·정정 (다음 표) |

출처: 페블러스 DataClinic 5신호(기존) + PIPEDA Findings #2026-002 도출 합법성 신호. 한국어로 정의된 첫 6차원 매핑.

합법성 신호의 다섯 세부 항목은 PIPEDA의 다섯 위반에 1:1로 매핑된다. 진단 워크플로우 위에 얇은 합법성 레이어를 얹어, 동일한 데이터셋에 대해 기술적 신호와 법적 신호를 동시에 출력하는 구조다.

| ⑥ 합법성 세부 항목 | 진단 질문 | 학술 근거 |
| --- | --- | --- |
| Source provenance(출처 기록) | 데이터가 어디서 왔는가, 그 출처가 합법적인가 | Gebru et al. (2021) Datasheets for Datasets |
| Consent validity(동의 유효성) | 동의의 시점·범위·갱신성이 유효한가 | Solove (2013), BC/AB OIPC ex ante 요건 |
| RTBF readiness(삭제 가능성) | 잊혀질 권리가 기술적으로 충족 가능한가 | Bourtoule et al. (2021) SISA, Yao et al. (2024) |
| Cross-jurisdictional(다관할 적합성) | PIPEDA·GDPR·AI Act·한국 4중 충족 여부 | §4·§5 |
| Inaccuracy correction(정정 루프) | 개인정보 부정확성을 모니터·정정하는 루프가 있는가 | Wachter & Mittelstadt (2019), PIPEDA Principle 4.6 |

출처: 페블러스 합성 — PIPEDA Findings #2026-002 다섯 위반 → AI-Ready Compliance 합법성 신호 5세부 항목 1:1 매핑.

### 7.3. 모델 품질의 한 차원으로서의 합법성

합법성은 단순한 컴플라이언스 부담이 아니다. 학술적으로 보면 **모델 품질의 한 차원**이다. 학습 데이터의 합법성 결여는 세 가지 경로로 모델 품질에 직접 영향을 미친다.

- •**Memorization을 통한 가중치 내 개인정보 누출** — Carlini et al.(2021)이 실증한 학습 데이터 추출 공격. 학습 가중치 안에 개인정보가 살아 있다.
- •**환각을 통한 추론적 개인정보 침해** — Wachter & Mittelstadt(2019)의 추론에 대한 권리. 모델이 한 사람에 관해 잘못된 추론을 내놓는 일은 그 사람의 정보 권리에 대한 침해다.
- •**머신 언러닝(machine unlearning) 비용의 폭발** — Bourtoule SISA(2021) 이후 학술 진보가 있었지만, 2025년 "Unlearned but Not Forgotten"(arXiv:2505.24379)이 data extraction attack으로 잊혀진 데이터를 복원 가능함을 실증했다. 사후 삭제의 기술적 비용이 본질적으로 크다.

세 경로 모두 합법성이 단순히 법무팀의 일이 아니라 **데이터 사이언티스트·ML 엔지니어의 일**임을 보여 준다. 학습 데이터의 합법성 등급은 모델 품질의 등급과 직결되고, 합법성 결여는 곧 운영 단계의 기술 부채로 이어진다. AI-Ready Compliance라는 명제는 이 직결성에 기반한다.

### 7.4. 한국 기업 4중 대응 5단계 가이드

4중 규제 시대의 한국 기업이 실무적으로 따라갈 수 있는 5단계 가이드를 정리한다. 각 단계는 **가장 엄격한 관할(BC/Alberta) 기준**으로 설계되어 다른 세 관할도 자연스럽게 충족하도록 했다.

<!-- stat-card -->
**① 데이터 sourcing 감사** — 웹 스크래핑·라이선스·자체 수집·합성 데이터를 합법성 등급(red/yellow/green)으로 분류. BC/Alberta 기준 사후 동의 불가 항목을 red로 분리.

<!-- stat-card -->
**② 학습 데이터셋 합법성 등급** — DataClinic 6신호(기존 5 + 합법성) 기준으로 데이터셋 단위 등급 부여. Foundation Model Transparency Index 항목과 정합 유지.

<!-- stat-card -->
**③ 옵트아웃·삭제 채널 표준화** — PIPEDA Principle 4.9 + GDPR Art 17 + 한국 PIPA 35~39조 동시 충족. 머신 언러닝 readiness 사전 설계 포함.

<!-- stat-card -->
**④ 4중 거버넌스 보드 설치** — DPO + AI Officer + 법무 + 데이터 사이언스 4자 정기 회의. 분기별 컴플라이언스 리포트(OpenAI 3~6개월 사이클 참조).

<!-- stat-card -->
**⑤ 합성 데이터·시뮬레이션 학습 도입** — Gartner — 2030년까지 합성 데이터가 실데이터를 추월하는 흐름. 합성 데이터 시장은 US$0.79B(2026) → US$6.9B(2034)로 성장 예상. 페블러스 DataGreenhouse · PebbloSim이 그 흐름의 한국어 진입로.

### 7.5. 시장의 빈 자리 — AI 컴플라이언스 카테고리

Gartner의 추정에 따르면 **AI TRiSM(Trust, Risk, Security Management) 시장은 US$3.1B(2025) → US$13.8B(2030)**으로 CAGR 35%로 커진다. AI Governance Platform 시장은 US$492M(2026) → US$1B+(2030)로 분기 예상이다. 그러나 한 가지 빈 자리가 또렷이 있다. **"학습 데이터 합법성 진단"** — PIPEDA·GDPR·AI Act 동시 기준으로 데이터셋의 합법성 등급을 진단하는 카테고리 자체가 비어 있다. OneTrust·TrustArc·BigID·Credo AI·Holistic AI 같은 기존 플레이어는 단일 법역 중심이거나 AI 시스템 수준의 거버넌스를 다룬다. 학습 데이터 단위의 합법성 진단을 한국어·한국 비즈니스 컨텍스트에 맞춰 다루는 도구는 사실상 없다.

페블러스의 자리가 그 빈 칸 위에 자연스럽게 놓인다. DataClinic은 데이터 품질 진단, AI-Ready Data는 그 진단의 출력 카테고리. 거기에 합법성 신호를 한 칸 더하면 AI-Ready Compliance로 확장된다. DataGreenhouse와 PebbloSim은 합법적 대안 데이터 인프라. 세 축의 통합이 곧 빈 칸 위의 진입로다. 5년간 다듬어 온 자산이 PIPEDA 결정과 정확히 맞물리는 자리. AI-Ready Compliance라는 시대가 왔고, 페블러스는 그 인접 영역을 오래 다듬어 왔다.

> [!callout]
> **합법성은 컴플라이언스 부담이 아니라 데이터 품질의 한 차원이다.** 학습 데이터의 합법성 결여는 모델 가중치 누출·환각·머신 언러닝 비용으로 직결되고, 그것은 곧 모델 품질의 직접 영향이다. AI-Ready Data가 다섯 신호의 진단이었다면, AI-Ready Compliance는 그 위에 한 신호를 더한 6차원 진단이다. PIPEDA Findings #2026-002가 그 6번째 신호의 첫 공식 좌표다.

## 동의의 시간성, 그리고 그 다음

결정문의 한 줄을 다시 읽어 본다. "사후 동의는 불가능하다." 일곱 글자가 끊는 것은 한 회사의 한 제품이 아니다. **한 시대의 표준 관행**이다. 크롤하고, 학습하고, 그 다음에 사용자에게 옵트아웃을 제공하는 그림이 더 이상 법적으로 닫힌 그림이라는 사실의 확정. 그 자리에서 한 가지 질문이 따라 나온다. 학습 전에 동의를 확보한다는 게 기술적으로 어떻게 가능한가, 또는 동의가 이미 확보된 합법적 데이터 소스만으로 학습이 가능한가.

두 질문 모두에 대한 가장 자연스러운 답은 **합성 데이터와 시뮬레이션 학습**이다. 원본 개인정보에 의존하지 않는 학습 재료가 있다면, 사후 동의의 문제가 구조적으로 사라진다. Gartner의 추정에 따르면 합성 데이터는 2030년까지 실데이터를 추월할 흐름이다. 그 흐름이 학술적·산업적 트렌드가 아니라 **법적 강제로 가속**되는 시기가 시작되었다. PIPEDA #2026-002가 그 가속의 첫 변곡점이다.

한 가지 솔직한 인정이 필요하다. 합성 데이터 자체가 완벽한 해법은 아니다. 합성 데이터 생성에 쓰인 시드 데이터의 합법성, 멤버십 추론 공격(membership inference attack)에 대한 방어, 합성 분포의 편향. 세 가지 새 검증 항목이 따라온다. 머신 언러닝도 단기적으로는 good faith effort로 인정될 수 있지만 학술적으로는 미완성이다. 어떤 단일 기술도 PIPEDA의 다섯 위반을 한꺼번에 해소하지 못한다. 다만 **여러 기술의 결합이 새 진입로를 연다**는 직관은 분명하다. 합성 데이터·시뮬레이션 학습·차등 정보보호(differential privacy, DP-SGD)·머신 언러닝·데이터 sourcing 감사의 결합 위에 AI-Ready Compliance의 실무 청사진이 그려진다.

결정문이 남긴 다음 질문들은 이 글이 끝나는 자리에서 시작된다. 한국 기업은 BC/Alberta 기준에 맞춘 데이터 sourcing을 어떻게 6개월 안에 정렬할 것인가. 학습 가중치 안에 잠복한 개인정보를 어떤 비용으로 어떻게 다룰 것인가. 4중 거버넌스 보드는 누가 의장이 되고 어떤 의제로 분기 회의를 운영할 것인가. 이 질문들은 한 편의 글이 닫을 수 있는 종류가 아니다. 페블러스가 다음 글들에서 천천히 풀어 갈 자리다.

> [!callout]
> 네 명의 위원장이 한 자리에서 만든 결정 하나가 한 시대를 한 칸 옮겼다. 도덕이 묻고 학술이 답한 자리에 법이 강제로 매듭을 지었다. 그 매듭은 AI 학습 데이터의 합법성이라는 한 차원을 글로벌 표준의 자리로 끌어올렸고, 그 위에 페블러스의 다음 명제, AI-Ready Compliance가 자연스럽게 그려진다. **데이터의 법적 품질도 진단 대상이다.** 그 한 줄이 이 글의 끝이자 다음 작업의 시작이다.

## 참고문헌

이 글이 인용한 1차 결정문, GDPR·AI Act·한국 AI 기본법, 학술 논문, 법무 분석, 시장 보고서, 페블러스 시리즈 선행 글을 출처별로 묶었다. 1차 결정문은 OPC 공식 페이지에서 verbatim 인용을 확인할 수 있다.

### 1차 출처 — 정부 · 국제기구

- 1.Office of the Privacy Commissioner of Canada. (2026). [**PIPEDA Findings #2026-002: Joint Investigation of OpenAI OpCo, LLC**](https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-002/). 2026-05-06.
- 2.Office of the Privacy Commissioner of Canada. (2026, May 6). [_News Release: Joint investigation by Canadian privacy regulators_](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260506/).
- 3.Government of Canada. (2015). [_Personal Information Protection and Electronic Documents Act (PIPEDA)_](https://laws-lois.justice.gc.ca/eng/acts/p-8.6/FullText.html).
- 4.European Parliament & Council. (2024). [_Regulation (EU) 2024/1689 (AI Act)_](https://artificialintelligenceact.eu/).
- 5.European Parliament & Council. (2016). _Regulation (EU) 2016/679 (GDPR)_.
- 6.European Data Protection Board. (2024, December 17). [_Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models_](https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf).
- 7.Garante per la protezione dei dati personali. (2024, December 20). [_Provvedimento n. 755/2024 (OpenAI €15M)_](https://www.euronews.com/next/2024/12/20/italys-privacy-watchdog-fines-openai-15-million-after-probe-into-chatgpt-data-collection).
- 8.대한민국. (2026). **인공지능 산업 진흥 및 신뢰 기반 조성 등에 관한 기본법 (AI 기본법)**. 시행 2026-01-22.
- 9.개인정보보호위원회 (PIPC). (2025-08). 생성형 AI 개인정보 처리 안내서 (4단계 생애주기).
- 10.The New York Times Co. v. OpenAI & Microsoft. (2023). S.D.N.Y. Case 1:23-cv-11195.

### 학술 논문

- 11.Bourtoule, L., Chandrasekaran, V., Choquette-Choo, C. A., Jia, H., Travers, A., Zhang, B., Lie, D., & Papernot, N. (2021). [_Machine Unlearning_](https://arxiv.org/abs/1912.03817). IEEE SP. arXiv:1912.03817.
- 12.Yao, J., Chien, E., Du, M., et al. (2024). [_Machine Unlearning of Pre-trained Large Language Models_](https://arxiv.org/abs/2402.15159). ACL 2024. arXiv:2402.15159.
- 13.Carlini, N., Tramèr, F., Wallace, E., et al. (2021). _Extracting Training Data from Large Language Models_. USENIX Security 2021.
- 14.Abadi, M., Chu, A., Goodfellow, I., et al. (2016). [_Deep Learning with Differential Privacy_](https://arxiv.org/abs/1607.00133). CCS '16. arXiv:1607.00133.
- 15.Biega, A. J., Potash, P., Daumé III, H., Diaz, F., & Finck, M. (2020). _Operationalizing the Legal Principle of Data Minimization for Personalization_. SIGIR 2020.
- 16.Wachter, S., & Mittelstadt, B. (2019). _A Right to Reasonable Inferences: Re-Thinking Data Protection Law in the Age of Big Data and AI_. Columbia Business Law Review, 2019(2), 443-493.
- 17.Bommasani, R., Klyman, K., Longpre, S., et al. (2024). [_The 2024 Foundation Model Transparency Index_](https://arxiv.org/abs/2407.12929). Stanford CRFM. arXiv:2407.12929.
- 18.Gebru, T., Morgenstern, J., Vecchione, B., et al. (2021). [_Datasheets for Datasets_](https://arxiv.org/abs/1803.09010). Communications of the ACM. arXiv:1803.09010.
- 19.Solove, D. J. (2013). _Privacy Self-Management and the Consent Dilemma_. Harvard Law Review, 126, 1880.
- 20.Anonymous. (2025). [_Unlearned but Not Forgotten_](https://arxiv.org/abs/2505.24379). arXiv:2505.24379.

### 법무 분석 · 언론

- 21.MLT Aikins LLP. (2026). [_Practical Takeaways from Landmark Privacy Investigation into OpenAI's ChatGPT_](https://www.mltaikins.com/insights/canadian-privacy-regulators-release-chatgpt-findings/).
- 22.McMillan LLP. (2026). [_OpenAI Investigation Highlights the Need for Privacy Law Reform in Canada_](https://mcmillan.ca/insights/openai-investigation-highlights-the-need-for-privacy-law-reform-in-canada/).
- 23.The Globe and Mail. (2026, May 6). _OpenAI violated Canadian privacy laws in developing first ChatGPT model_.
- 24.CBC News. (2026, May 6). _OpenAI didn't respect Canadian privacy law when it trained ChatGPT_.
- 25.PPC Land. (2026). [_Canadian regulators find ChatGPT privacy rules broken from the start_](https://ppc.land/canadian-regulators-find-chatgpt-privacy-rules-broken-from-the-start/).

### 시장 · 정량 보고서

- 26.Stanford HAI. (2025). [_AI Index Report 2025, Chapter 6 — Policy and Governance_](https://hai.stanford.edu/ai-index/2025-ai-index-report/policy-and-governance).
- 27.Gartner. (2026, February 17). [_Press Release: Global AI Regulations Fuel Billion-Dollar Market for AI Governance Platforms_](https://www.gartner.com/en/newsroom/press-releases/2026-02-17-gartner-global-ai-regulations-fuel-billion-dollar-market-for-ai-governance-platforms).
- 28.McKinsey & Company. (2025, November). _The State of AI 2025_.
- 29.CMS Law. (2025/2026). [_GDPR Enforcement Tracker Report_](https://cms.law/en/int/publication/gdpr-enforcement-tracker-report/).
- 30.Cooley LLP. (2026, January 27). [_South Korea AI Basic Act: Overview and Key Takeaways_](https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways).

### 페블러스 AI 거버넌스 4부작 시리즈

- 31.페블러스 (2026-05-25). [**Magnifica Humanitas — AI 시대의 인간 존엄**](/report/pope-magnifica-humanitas/ko/). 4부작 1편 · 도덕·신학 트랙.
- 32.페블러스 (2026-05-27). [**스킬 문서가 학습하기 시작했다 — Microsoft SkillOpt 심층 분석**](/report/microsoft-skillopt-self-evolving-agents/ko/). 4부작 2편 · 학술·옵티마이저 트랙.
- 33.페블러스 (2026-05-28). [**스킬도 경험을 누적한다 — MUSE-Autoskill 5단계 lifecycle**](/report/muse-autoskill-self-evolving-skill-lifecycle/ko/). 4부작 3편 · 학술·lifecycle 트랙.
- 34.페블러스 (2026-05). [_Upstage Sovereign AI 보고서_](/report/upstage-national-fund-2026-05/). (한국 AI 정책 인접 자료.)
- 35.페블러스 (2026-04). _OpenMetadata × AI-Ready Data_. (DataClinic 시그널 인접 자료.)
