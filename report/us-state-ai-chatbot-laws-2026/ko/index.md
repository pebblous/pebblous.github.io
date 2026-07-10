---
title: 미국 145개 AI 법안이 모두 같은 것을 묻는다 — 이 데이터, 어디서 왔습니까?
subtitle: 콜로라도 SB 26-189, 조지아 SB 540, 유타 HB 276이 그리는 데이터 추적성의 새 표준
date: 2026-05-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 미국 145개 AI 법안이 모두 같은 것을 묻는다 — 이 데이터, 어디서 왔습니까?

_콜로라도 SB 26-189, 조지아 SB 540, 유타 HB 276이 그리는 데이터 추적성의 새 표준_

## Executive Summary

> [!callout]
> 미국 50개 주 의회에서 2025년 한 해에만 **145개**의 AI 법안이 법률로 확정됐다. 2024년의 99개에서 47% 증가했고, 2026년 1분기에는 이미 45개 주에서 1,561개의 법안이 발의되며 작년 한 해 전체를 추월했다. 콜로라도 SB 26-189(자동화 의사결정), 조지아 SB 540(챗봇 안전), 유타 HB 276(디지털 콘텐츠 출처)이 같은 봄에 서명되면서 세 가지 다른 입법의 본질이 하나로 좁혀졌다 — 어떤 AI가 어떤 데이터로 무엇을 만들었는지 추적 가능하게 하라. 출처 데이터(Provenance) 의무화는 컴플라이언스 비용이 아니라, 데이터 품질 인프라에 대한 강제 투자 신호다.

> 법이 요구하는 데이터 추적성은 두 갈래로 갈라진다. 첫째, 학습 데이터의 출처·라이선스·계보 — Longpre 등(NeurIPS 2024)의 Data Provenance Initiative는 1,800개 학습 데이터셋의 70% 이상이 부정확한 라이선스 정보를 가지고 있음을 실증했다. 둘째, 생성 콘텐츠의 출처 표식 — Kirchenbauer 등(ICML 2023)의 토큰 워터마크와 Google DeepMind의 SynthID-Text(_Nature_ 2024)는 이 영역의 학술·산업 토대를 놓았다. 그러나 마스트리흐트 대학 연구진(2025)이 50개 상용 이미지 생성 서비스를 실증 조사한 결과, 워터마킹을 적정 수준으로 구현한 곳은 38%, 딥페이크 라벨링은 18%에 그쳤다. 학술은 두 갈래를 분리해 다뤘지만, 미국 주법은 이 둘을 한 번에 묶었다.

> 한국 AI기본법은 2026년 1월 22일부터 시행 중이고, EU AI Act의 고위험 시스템 전면 의무는 2026년 8월 2일에 발효된다. 조지아 SB 540의 챗봇 의무는 2027년 7월 1일, 콜로라도 SB 26-189의 자동화 의사결정 의무는 2027년 1월 1일에 D-day가 온다. 한·미·EU 세 체계는 분명 다르게 생겼지만 공통 분모는 "데이터 추적성"이다. 한국 챗봇·SaaS 기업의 미국 진출 시점은 곧 규제 시점이며, 한국 AI기본법만 준수하면 충분하다는 인식은 위험하다. 페블러스 DataClinic의 품질점수가 "기술 KPI"에서 "규제 KPI"로 외연을 확장하는 시점, 메타데이터 시스템이 부가가치가 아닌 필수 인프라로 재정의되는 시점이 정확히 지금이다.

<!-- stat-card -->
**145개** — 2025년 법률로 확정된 AI 법안 — 미국 50개 주, 2024년 99개 대비 +47%

<!-- stat-card -->
**27개 주 / 78건** — 2026년 1분기 챗봇 활성 법안 — 가장 빠르게 부상하는 카테고리

<!-- stat-card -->
**2027.07.01** — 조지아 SB 540 시행일 — 챗봇 사업자 미성년자 보호 첫 D-day

## 1년 만에 47% — 미국 주 의회의 AI 입법 가속

2024년 미국 주 의회에서 법률로 확정된 AI 법안은 99개였다. 2025년에는 145개로 늘었다. 그리고 2026년 1분기에만 45개 주에서 1,561개의 법안이 발의되며 작년 한 해 전체 발의 수를 이미 추월했다(NCSL, 2026). 1년 사이 발의는 91% 증가했고, 통과는 47% 증가했다. 이 가속의 원인은 단일하지 않다 — 연방 입법의 공백, 누적되는 AI 사고 사례, 주별 정치 동력의 삼박자가 동시에 작동했다.

주목할 점은 카테고리 편중이다. Transparency Coalition(2026)의 분석에 따르면, 2026년 1분기 챗봇 관련 활성 법안은 **27개 주에서 78건**으로 가장 빠르게 부상하는 카테고리가 되었다. 자동화 의사결정(콜로라도형), 챗봇 안전(조지아형), 콘텐츠 출처(유타형)가 가장 활발한 세 갈래다. NCSL의 분류로 보면 헬스케어·고용·교육·정부 사용·선거 딥페이크가 그 뒤를 잇는다.

### 1.1. 왜 연방이 아니라 주(州)인가

미국 의회는 2024~2025년 여러 차례 AI 연방법 시도가 좌초됐다. 빅테크의 로비 압력과 양당 간 입장 차이가 컸다. Brookings(2026)의 정리에 따르면, 연방 차원의 통일된 AI 규제 부재가 50개 주의 입법 동력을 오히려 자극했다. 콜로라도가 2024년 SB 24-205(원조 AI Act)로 선도하고, 캘리포니아·뉴욕·텍사스가 분야별로 따르고, 유타·조지아가 콘텐츠와 챗봇으로 좁혀진 패턴이다. NCSL은 이를 "주가 만든 50개의 작은 AI Act"라고 표현한다.

### 1.2. 빅테크의 한계

주별 규제 가속에 대한 빅테크의 대응은 노골적이었다. 2024년 캘리포니아 SB 1047 논쟁에서 시작된 정책 자금 공세는 2025~2026년 전국으로 확대됐다. Politico(2026)에 따르면 Meta는 SB 1047 좌초에 약 710만 달러를 투입했고, OpenAI는 연방 차원의 주법 선점(federal preemption) 캠페인을 전개했다. Anthropic은 반대 방향으로 움직였다 — 캘리포니아 SB 53(Responsible AI Reporting Act) 지지와 함께 "Public First Action"에 2,000만 달러를 약정해 안전 입법을 적극 지원한다고 발표했다(Anthropic Policy Blog, 2026).

그러나 조지아 SB 540의 입법 과정에서 빅테크의 한계가 가장 또렷이 드러났다. Politico(2026-05)에 따르면, Meta·Google·Snap이 카브아웃(carve-out)을 요청했지만 법안에는 반영되지 않았다. 미성년자 보호라는 정치적 명분 앞에서 빅테크의 로비는 작동하지 않았다. 27개 주에서 78건의 챗봇 법안이 발의된 지금, "한 주에서 막으면 다른 주에서 통과되는" 구조가 만들어졌다.

NCSL, March 2026
                            "As of March 2026, state lawmakers in 45 states have introduced 1,561 AI-related bills, already surpassing the total number of bills introduced in all of 2024."

> [!callout]
> 145개 법안이 모두 같은 질문을 묻고 있다 — 이 데이터, 어디서 왔습니까? 출처 데이터 의무화는 컴플라이언스 비용이 아니라 데이터 품질 인프라에 대한 강제 투자다. 입법은 산만해 보이지만, 데이터는 한 방향을 가리킨다.

## 콜로라도·조지아·유타 — 같은 봄, 다른 각도의 세 법안

2026년 봄, 미국 동부와 서부에서 거의 동시에 세 개의 AI 법안이 서명됐다. 콜로라도 SB 26-189는 자동화 의사결정의 사후 설명을, 조지아 SB 540은 챗봇의 미성년자 보호를, 유타 HB 276은 디지털 콘텐츠의 출처 인증을 의무화한다. 세 법안은 적용 대상도, 요구사항도, 시행 시점도 다르다. 그러나 한 단어로 줄이면 모두 "추적성(traceability)"으로 수렴한다.

### 2.1. 콜로라도 SB 26-189 — 자동화 의사결정의 사후 설명

2026년 5월 14일 콜로라도 주지사가 SB 26-189에 서명했다(Consumer Finance Monitor, 2026). 2024년의 원조 콜로라도 AI Act(SB 24-205)를 대체하는 후속 법안으로, 시행은 2027년 1월 1일부터다. AI가 고용·교육·임대·신용·보험·의료에 "결정적 결정(consequential decision)"을 내릴 때 다섯 가지 의무가 발생한다 — 사전 고지, 사후 30일 내 설명, 데이터 교정권, 인간 재검토 보장, 그리고 개발자가 배포자에게 시스템의 성격과 한계를 명시한 기술 문서를 제공할 의무다.

주목할 변화는 법의 무게중심 이동이다. 원조 콜로라도 AI Act는 광범위한 거버넌스와 영향평가를 요구했지만, SB 26-189는 그 부담을 줄이고 소비자에게 직접 닿는 고지·설명 의무에 집중한다. Consumer Finance Monitor(2026)는 이를 "broad governance에서 targeted consumer disclosure로의 전환"이라 평가했다. 위반 시 콜로라도 법무장관(AG)이 집행하며, 60일 치유 기간(cure period)은 2030년에 만료된다.

### 2.2. 조지아 SB 540 — 챗봇의 미성년자 보호

조지아 SB 540 "Conversational AI Safety Act"는 2026년 5월 13일 서명됐다(Privacy Daily, 2026-05-13). 시행은 2027년 7월 1일이며, 미성년자가 사용하는 대화형 AI 서비스 사업자에게 다섯 가지 의무를 부과한다 — ① 세션 시작 시 "AI와 대화 중입니다" 고지, ② 3시간마다 재고지, ③ 자살·자해 징후 감지 시 988 위기 핫라인 연결 프로토콜, ④ 미성년자가 더 길게 머물도록 유도하는 참여 보상(engagement reward) 금지, ⑤ 부모·미성년자 통제 도구 제공. 이 다섯은 Character.AI와 ChatGPT 미성년자 사고 사례 이후의 직접 대응이다.

Meta·Google·Snap이 카브아웃을 시도했으나 실패했다는 사실은 이 법안의 정치적 의미를 보여준다. Politico(2026)에 따르면, 미성년자 보호는 양당이 일치하는 영역이며 빅테크의 로비가 작동하지 않는 거의 유일한 AI 정책 영역이다. 한국 챗봇 기업이 미국 미성년자 사용자를 보유한다면 — 청소년 학습 보조, K-pop 팬덤 봇, 게임 챗봇 등 — 2027년 7월 1일이 D-day다.

### 2.3. 유타 HB 276 — 디지털 콘텐츠의 출처 인증

유타 HB 276 "Digital Content Provenance Standards Act"는 2026년 봄에 서명되며 미국 첫 출처 데이터 의무화 주법이 됐다. Troutman Pepper(2026)에 따르면, 이 법은 "AI 운영자가 생성 콘텐츠에 출처 데이터를 내장(embed)할 것"을 직접 요구한다. 적용 대상은 GenAI 100만 명 이상의 활성 사용자를 보유한 사업자와 200만 명 이상의 플랫폼이다. 핵심은 C2PA(Coalition for Content Provenance and Authenticity) 표준과 사실상 정렬됐다는 점이다 — 법조문이 C2PA를 명시하지는 않지만, 요구사항(암호서명, 출처 메타데이터, 편집 이력)이 C2PA Content Credentials의 그것과 일치한다.

유타는 같은 회기에 HB 286 "Artificial Intelligence Transparency Amendments"도 통과시켰다. 이 법은 프런티어 모델 사업자에게 안전 계획(safety plan)을 공개할 의무를 추가한다 — 챗봇과 별개의, 모델 단(model-level) 규제다. 콜로라도와 조지아가 응용 단을 다룬다면 유타는 모델 단과 콘텐츠 단을 함께 다룬다.

### 2.4. 세 법안 한 눈에 비교

세 법안의 표면적 차이는 크다. 그러나 요구 항목을 옆에 놓고 보면, 모두 "어떤 AI가, 어떤 데이터로, 무엇을 만들었고, 누구에게 영향을 주는가"의 동일한 질문으로 수렴한다.

| 구분 | 콜로라도 SB 26-189 | 조지아 SB 540 | 유타 HB 276 |
| --- | --- | --- | --- |
| 법안명 | Colorado Automated Decision-Making Technology | Georgia Conversational AI Safety Act | Utah Digital Content Provenance Standards Act |
| 적용 대상 | 자동화 의사결정(ADMT) 개발·배포 사업자 | 미성년자 계정이 있는 챗봇 | GenAI 100만+ / 플랫폼 200만+ 사용자 사업자 |
| 핵심 의무 | 사전 고지·사후 설명·교정권·인간 검토·기술 문서 | AI 고지·3h 재고지·988 핫라인·참여 보상 금지 | 출처 데이터 내장(C2PA 정렬)·딥페이크 라벨 |
| 시행일 | 2027.01.01 | 2027.07.01 | 단계적 (~2028.01) |
| 위반 제재 | AG 집행, 60일 치유 기간 (2030 만료) | 주 검찰 집행, 민사 제재 | 주 검찰 집행, 시정 명령 |
| 본질 | 의사결정 추적 | 미성년자 안전 추적 | 콘텐츠 출처 추적 |

Troutman Pepper, 2026
                            "Utah's Digital Content Provenance Standards Act enacts deepfake protections and requires AI operators to embed provenance data — a direct alignment with C2PA Content Credentials becoming law."

> [!callout]
> 세 법은 다른 곳을 본다. 콜로라도는 의사결정, 조지아는 미성년자, 유타는 콘텐츠. 그러나 모두 같은 곳을 찍는다 — 어떤 데이터로 무엇을 만들었는지 추적 가능하게 하라. 콜로라도는 보조 4개 법안(차별 금지, 챗봇 표시, 정부 AI 사용, 선거 딥페이크)을 같은 회기에 통과시키며 입체적 규제 묶음을 완성했다.

## 모든 법이 같은 것을 묻는다 — 출처 데이터(Provenance)의 부상

학술은 7년 전부터 "데이터 출처"를 이야기했다. Gebru 등(2018)의 Datasheets for Datasets와 Mitchell 등(2019)의 Model Cards는 데이터셋과 모델의 메타데이터 표준을 처음 제안했다. 2023년 Longpre 등이 이끄는 Data Provenance Initiative는 1,800개 학습 데이터셋의 라이선스·계보를 감사하여 70% 이상이 부정확한 정보를 가지고 있음을 실증했고(NeurIPS 2024), 같은 해 Kirchenbauer 등은 ICML에서 LLM 출력에 통계적 워터마크를 심는 방법을 발표했다. 2024년 Google DeepMind는 SynthID-Text를 _Nature_에 게재하며 산업 적용 가능한 토큰 워터마크 시스템을 공개했다(Dathathri et al., 2024).

학술은 이 두 갈래를 분리해 다뤘다 — 학습 데이터의 출처와 생성 콘텐츠의 표식. 미국 주법은 이 둘을 한 번에 묶었다. 콜로라도 SB 26-189의 "개발자 기술 문서 제공"은 학습 데이터 갈래에 해당하고, 유타 HB 276의 "출처 데이터 내장"은 생성 콘텐츠 갈래에 해당한다. 둘은 같은 추적성의 두 측면이다.

### 3.1. 페블러스 3계층 추적성 프레임

분리된 학술 갈래를 묶는 통합 프레임이 비어 있었다. 본 보고서는 미국 주법이 실제로 요구하는 추적성을 세 계층으로 정의한다 — 학습 데이터 출처, 생성 콘텐츠 표식, 의사결정 감사 추적. 이 세 계층은 콜로라도·조지아·유타의 세 법안에 각각 다른 비중으로 분포한다.

1학습 데이터 출처

Data Provenance — 어떤 데이터로 학습됐는가. 라이선스, 계보, 동의, 편향. 콜로라도 SB 26-189의 기술 문서 의무, 한국 AI기본법의 문서 작성 의무가 여기에 해당한다.

2생성 콘텐츠 표식

Content Credentials / Watermarking — 어떤 도구로, 누가, 언제 만들었는가. 암호서명 메타데이터(C2PA) 또는 통계적 워터마크. 유타 HB 276과 EU AI Act Art.50이 직접 요구한다.

3의사결정 감사 추적

Audit Trail — 어떤 결정을 누구에게, 어떤 근거로 내렸는가. 사후 설명, 인간 재검토, 교정권. 콜로라도 SB 26-189의 사후 30일 설명 의무가 대표 사례다.

### 3.2. 워터마크와 출처 데이터는 다르다

흔한 혼동이 있다. 워터마크와 출처 데이터를 같은 것으로 보는 경우다. 두 방식은 보완재이지 대체재가 아니다. 출처 데이터(C2PA Content Credentials)는 콘텐츠의 "족보"에 가깝다 — 누가 언제 어떤 도구로 만들었고 어떤 편집을 거쳤는지를 암호서명된 메타데이터로 기록한다. 워터마크는 콘텐츠 안에 보이지 않는 신호를 심는 방식으로, 사후 검출에 강하지만 paraphrase·역번역·크롭 공격에 약하다. C2PA 표준은 두 방식의 결합을 권장한다.

그런데 학술은 워터마크의 한계도, 출처 데이터의 한계도 모두 짚었다. 그 한계가 산업 현실에 어떻게 나타나는지를 마스트리흐트 대학의 Rijsbosch 등(2025, arXiv:2503.18156)이 실증했다. 연구진은 50개 상용 이미지·텍스트 생성 서비스를 점검했고, 워터마킹을 적정 수준(robust, verifiable)으로 구현한 곳은 38%, 딥페이크 라벨링을 명확히 표시한 곳은 18%에 그쳤다. EU AI Act Article 50이 요구하는 수준에 산업이 한참 못 미친다는 결과다. 법이 산업의 자율 적용을 더는 기다리지 않는 이유가 여기 있다.

### 3.3. C2PA — 6,000개 기업이 만든 표준이 법이 되다

C2PA는 Adobe·Microsoft·BBC·Sony·OpenAI가 2021년에 설립한 콘텐츠 출처 인증 표준 컨소시엄이다. Content Authenticity Initiative(CAI)는 그 산업 측 자매 조직으로, 2024년 10월 약 4,000개 회원이 2026년 1월 6,000개를 돌파했다(Eyesift, 2026). 2년 만에 50% 성장이다. 유타 HB 276이 C2PA를 사실상 법적 요건으로 채택한 첫 사례이고, EU AI Act Article 50도 같은 방향으로 수렴한다.

Eyesift / Content Authenticity Initiative, 2026
                            "C2PA Content Credentials adoption surpassed 6,000 member organizations in early 2026, with rapid acceleration after Utah HB 276's enactment signaled the standard's transition from voluntary to mandatory."

다만 학술 검증의 공백이 있다. C2PA v2.0의 독립 보안 분석은 아직 제한적이며, 표준 발표와 법제화 사이에 학술 검증의 시차가 가시화되고 있다. NIST AI Risk Management Framework 1.0(2023)과 BBC Project Origin 백서가 보조 자료로 활용되지만, 상용 규모에서의 공격 표면을 체계적으로 평가한 연구는 부족하다. 표준이 법이 된 만큼, 다음 단계는 그 표준 자체의 견고성을 검증하는 것이다.

> [!callout]
> 학술이 7년 전 진단한 것이 2025년 법이 됐다. 두 학술 갈래를 묶은 통합 프레임은 비어 있다. 페블러스가 한국어로 가장 먼저 채울 수 있는 자리다. 표준이 법보다 먼저 만들어진 것이 아니라, 법이 표준을 추월할 뻔한 첫 사례 — 그것이 유타 HB 276이다.

## 한·미·EU 삼각 비교 — 규제는 어떻게 동기화되는가

한국 AI기본법은 2026년 1월 22일에 시행됐다. EU AI Act의 고위험 시스템 전면 의무는 2026년 8월 2일에 발효된다. 미국 주법은 분산형으로 흩어져 있지만, 2027년 1월(콜로라도)부터 7월(조지아)까지 차례로 D-day가 온다. 세 체계는 분명 다르게 생겼다. 한국은 일반법 + 시행령, EU는 단일 통일 법, 미국은 50개 주 분산. 그러나 공통 분모는 단 하나다 — "데이터 추적성".

### 4.1. 한국 AI기본법 — 일반법 + 시행령의 구조

한국 AI기본법은 정식 명칭이 "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법"이다(법제처, 2024). 2024년 12월 26일 국회 통과, 2026년 1월 22일 시행이며, 시행 후 1년 이상의 계도 기간을 운영한다(정책브리핑, 2026). 고영향 AI 사업자에게 6대 의무가 부과된다 — ① 영향평가, ② 위험관리, ③ 안전·신뢰성 확보, ④ 모니터링, ⑤ 문서 작성·보관, ⑥ 정보 제공. 생성형 AI에 대해서는 별도로 "결과물에 워터마크 표시 의무"가 부여된다.

주목할 점은 "문서 작성·보관" 의무다. 이는 콜로라도 SB 26-189의 "기술 문서 제공" 의무, EU AI Act의 "기술 문서(Technical Documentation)" 의무와 직접 대응한다. 세 체계가 사용하는 단어는 다르지만, 요구하는 본질은 같다 — 학습 데이터의 출처와 모델의 한계를 기록·보관·제공하라.

### 4.2. EU AI Act — 단일 통일과 단계 발효

EU AI Act는 2024년 발효 후 단계적으로 시행 중이다(artificialintelligenceact.eu, 2026). 2025년 8월 2일 GPAI(General-Purpose AI) 규정 발효, 2026년 8월 2일 고위험 시스템 전면 의무 발효 예정이다. 다만 Digital Omnibus 패키지가 2027년 12월까지 일부 의무 연장을 협상 중이라 최종 시점은 유동적이다. Article 50은 "AI 생성 콘텐츠에 라벨링 의무"를 직접 명시하며, GPAI Code of Practice가 자율 적용 가이드 역할을 한다.

### 4.3. 세 체계 한 눈에 비교

세 체계의 차이는 형태이지 본질이 아니다. 적용 범위, 투명성 요구 강도, 데이터 추적성 깊이, 처벌 수준, 시행 시점 — 5축에서 비교하면 차이는 분명히 드러나지만, 공통 분모도 동시에 드러난다.

| 비교 항목 | 한국 AI기본법 | EU AI Act | 미국 주법 (CO·GA·UT) |
| --- | --- | --- | --- |
| 법적 구조 | 일반법 + 시행령 | 단일 통일 법(EU 전역) | 50개 주 분산 + 연방 공백 |
| 적용 범위 | 고영향 AI 6대 의무 | 위험 등급 4단계(금지~최소) | 분야별(채용·챗봇·콘텐츠) 산발 |
| 데이터 추적성 | 문서 작성·보관 의무 | Technical Documentation | 개발자 기술 문서(CO) + 출처 데이터 내장(UT) |
| 생성형 표식 | 워터마크 표시 의무 | Article 50 라벨링 의무 | C2PA 사실상 채택(UT) |
| 처벌 | 과태료 / 시정명령 | 최대 글로벌 매출 7% | AG 집행 / 민사 제재 |
| 시행 시점 | 2026.01.22 (계도 1년+) | 2026.08.02 (단계적) | 2027.01~07 (주별 차등) |

한국 SaaS·챗봇 기업의 미국 진출은 곧 미국 주법 시점을 의미한다. EU에 데이터센터나 사용자가 있으면 EU AI Act도 적용된다. 한국 AI기본법만 준수하면 충분하다는 인식은 위험하다. 글로벌 진출은 자동으로 3중 컴플라이언스가 되며, 세 체계의 공통 분모인 "데이터 추적성"을 단일 인프라로 충족하는 접근이 합리적이다.

대한민국 정책브리핑, 2026-01
                            "인공지능기본법 22일 시행…생성형 AI 결과물 '워터마크' 표시 의무"

> [!callout]
> 세 규제는 글자가 다르지만 문법은 같다. 한국이 "문서 작성·보관"으로, EU가 "Technical Documentation"으로, 콜로라도가 "Developer Documentation"으로 부르는 것은 모두 같은 것을 가리킨다 — 학습 데이터의 출처를 기록·증명할 수 있는 메타데이터 시스템.

## 기업 데이터팀의 실제 대응 — 비용인가, 인프라 투자인가

규제는 분명히 비용을 발생시킨다. Gartner(2026)는 전 세계 AI 거버넌스 플랫폼 지출이 2026년 4억 9,200만 달러에서 2030년 10억 달러를 돌파할 것으로 전망했다. EU 집행위원회의 자체 영향평가는 EU AI Act 컴플라이언스 비용을 모델당 평균 €29,277로 추산한다 — 견고성 검증 €10,733, 인간감독 €7,764, 문서화 €4,390, 기타 €6,390의 분해다. 캘리포니아 SB 53의 영향평가는 소기업 컴플라이언스 비용을 $16,000 수준으로 봤다. 비용은 작지 않다.

### 5.1. 한국 AI 수출의 미국 노출

한국 AI 산업의 미국 노출은 작지 않다. 소프트웨어정책연구소(SPRi, 2024)의 AI 산업 실태조사에 따르면, 2023년 기준 한국 AI 산업 수출액은 4,248억 원이며 그중 미국 비중이 23.7%다. 단순 계산으로 약 1,007억 원이 미국 시장에 직접 노출된다. 다만 AI 산업 내 수출 기업의 비중은 약 4%에 불과해, 대다수 기업이 아직 글로벌 컴플라이언스를 본격적으로 준비하지 않은 상태다.

### 5.2. 스타트업·중견·대기업의 3계층 대응

대응 전략은 기업 규모에 따라 다르다. **스타트업**은 처음부터 추적성을 내장한 데이터 파이프라인을 구축하는 것이 가장 저렴하다. 사후에 메타데이터 시스템을 끼워 넣으면 비용이 2~3배로 늘어난다. **중견기업**은 기존 데이터 카탈로그·MLOps에 출처 데이터 레이어를 추가하는 단계로, DataClinic 같은 외부 진단 도구의 도입이 가장 합리적이다. **대기업**은 자체 출처 데이터 시스템 + 외부 표준 정렬(C2PA·NIST AI RMF)의 이중 트랙이 일반적이며, 인하우스 거버넌스 팀과 외부 컴플라이언스 컨설팅을 병행한다.

### 5.3. 컴플라이언스의 적립 효과

그러나 이 비용은 사라지지 않는다. 다른 자리에 적립된다. 학습 데이터의 출처를 기록하면 — 그 자체가 데이터 품질 인프라가 된다. 생성 콘텐츠에 출처 데이터를 내장하면 — 그 자체가 브랜드 신뢰의 자산이 된다. 의사결정 감사 추적을 갖추면 — 그 자체가 분쟁 시 방어 무기가 된다. Rijsbosch 등(2025)이 실증한 38%·18%의 현 적용률이 보여주는 것은 시장의 불성숙이지, 인프라의 무용성이 아니다. 법은 그 격차를 줄이는 강제 신호로 작동한다.

생성AI 챗봇 시장은 2025년 약 99억 달러에서 2030년 1,130억 달러로 연평균 50% 가까이 성장할 것으로 추정된다(MarketsandMarkets 등 다수 시장조사). AI 거버넌스 지출은 같은 기간 4억 9,200만 달러에서 10억 달러 수준이다. 시장 규모 대비 거버넌스 지출 비율은 약 1% 수준에서 따라간다. 비용이 큰가 작은가의 질문이 아니다 — 비율이 적정한가가 질문이다. 1%의 거버넌스 지출이 99%의 시장 신뢰를 떠받친다면, 그 비율은 적정 이상이다.

Rijsbosch, van Dijck & Kollnig, 2025 (arXiv:2503.18156)
                            "Of 50 commercial generative AI services surveyed, only 38% implemented watermarking to a level meeting minimum robustness criteria, and only 18% clearly labeled synthetic media as required by the EU AI Act."

> [!callout]
> 컴플라이언스는 데이터 품질의 우회로가 아니라 본 도로다. 학습 데이터 출처 기록 — 데이터 품질 인프라. 생성 콘텐츠 표식 — 브랜드 신뢰 자산. 의사결정 감사 추적 — 분쟁 방어 무기. 비용 항목 옆에 자산 항목이 적립된다는 사실이, "비용인가 투자인가"의 질문에 대한 답이다.

## 페블러스가 본다 — 규제는 데이터 품질의 민주화다

145개 법안이 한 방향을 가리킨다. 그 방향은 페블러스의 5개 사업축이 이미 향해 있는 그 방향이다. DataClinic이 학습 데이터의 품질·계보·출처를 진단하고, AADS(Audit & Diagnosis System)가 그 진단 이력을 기록하며, AI-Ready Data가 메타데이터 표준을 정의하고, DataGreenhouse가 검증 가능한 합성데이터를 생산하며, PebbloSim이 자동화 의사결정 시나리오를 시뮬레이션한다. 이 다섯이 페블러스의 자리이고, 동시에 미국 주법이 새로 만든 시장의 좌표다.

### 규제는 비용이 아니라 데이터 품질 인프라의 강제 투자다

DataClinic의 품질점수는 그동안 "기술 KPI"였다. 데이터셋의 결측치·이상치·중복·라이선스·계보를 평가한 결과 — 모델 성능과 직결되는 내부 지표. 미국 주법이 등장하면서 같은 점수가 "규제 KPI"로 외연을 확장한다. 콜로라도 SB 26-189가 요구하는 "개발자 기술 문서"의 데이터 출처 항목, 유타 HB 276의 "출처 데이터 내장 적합성 검증", 한국 AI기본법의 "문서 작성·보관" 의무는 모두 DataClinic 진단의 출력 항목으로 자동 매핑된다. 기술 KPI가 규제 KPI로 외연 확장될 때, 같은 진단이 두 영역의 비용을 동시에 줄인다.

### 출처 데이터 의무화는 메타데이터 시스템의 ISO화를 가속한다

Datasheets for Datasets(2018)와 Model Cards(2019)는 학술적 권고였다. 7년 동안 자율 적용에 의존했고, Rijsbosch 등(2025)의 실증 결과 38%·18%의 적용률에서 멈췄다. 유타 HB 276이 C2PA를 사실상 법적 요건으로 만들면서 — 메타데이터 시스템은 권고에서 의무로, 자율 표준에서 ISO형 규범으로 이동하고 있다. AADS가 자연스럽게 글로벌 컴플라이언스 도구로 확장되는 자리가 여기다. 한국 AI기본법의 "문서 작성·보관"부터 EU AI Act의 Technical Documentation, 미국 주법의 Developer Documentation까지를 단일 감사 추적 시스템으로 처리할 수 있다.

### AI-Ready Data는 컴플라이언스-Ready Data로 수렴한다

"AI-Ready Data"는 모델 학습에 바로 쓸 수 있는 상태의 데이터를 가리키는 페블러스의 개념이다. 정합성·완전성·일관성·메타데이터·계보를 갖춘 데이터. 미국 주법·한국 AI기본법·EU AI Act가 동시에 요구하는 "데이터 추적성"은 AI-Ready Data 정의의 핵심 요소 그 자체다. 다시 말해 AI-Ready Data로 데이터를 정비한 기업은 이미 컴플라이언스-Ready Data를 보유한 기업이다. 학습 데이터 출처 + 생성 콘텐츠 표식 + 의사결정 감사 추적의 3계층 통합 — 이 통합이 페블러스의 자리다.

### 합성데이터의 역설 — 라벨링 의무가 시장을 키운다

직관과 반대로, 합성 미디어 라벨링 의무는 합성데이터 사업을 위축시키지 않고 시장을 키운다. 라벨·서명·계보가 내장된 합성데이터는 라벨링 의무를 자연스럽게 만족하지만, 출처 정보가 없는 합성데이터는 규제 리스크가 된다. DataGreenhouse처럼 검증 가능한(verifiable) 합성데이터 인프라의 수요가 의무화와 함께 증가한다. 의무화는 시장 분리를 만든다 — 추적 가능한 합성데이터와 그렇지 않은 합성데이터. 페블러스의 자리는 전자다.

### 앞으로 탐구할 질문들

몇 가지 질문이 열려 있다. 데이터 품질 점수가 규제 KPI로 외연 확장될 때, 점수의 절대 기준은 누가 결정하는가? C2PA Content Credentials의 위변조 공격에 대한 학술 검증이 부족한 가운데, 표준의 견고성은 누가 보증하는가? 한국 기업이 한·미·EU 3중 컴플라이언스를 단일 인프라로 처리하려 할 때, 어떤 메타데이터 스키마가 세 체계 모두에 통용되는가? 페블러스가 한국어로 가장 먼저 이 질문들을 묶어 다룰 수 있는 자리에 있다 — DataClinic, AADS, AI-Ready Data가 이 질문들의 답을 만드는 과정이다.

> [!callout]
> 규제는 데이터 품질의 민주화를 강제한다. 7년 전 Gebru가 권고한 것이 2026년 콜로라도가 의무화했고, 마스트리흐트가 38%·18%로 실증한 격차를 유타가 법으로 메꾼다. AI-Ready Data는 곧 컴플라이언스-Ready Data로 수렴한다. 한국에서 이 관점을 가장 먼저 말할 수 있는 자리 — 그것이 페블러스가 이 145개 법안에 주목하는 이유다.

## 참고문헌

### 학술 논문

- 1.Gebru, T., Morgenstern, J., Vecchione, B., Vaughan, J. W., Wallach, H., Daumé III, H., & Crawford, K. (2021). "Datasheets for Datasets." _Communications of the ACM_, 64(12), 86–92. [arXiv:1803.09010](https://arxiv.org/abs/1803.09010)
- 2.Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., Spitzer, E., Raji, I. D., & Gebru, T. (2019). "Model Cards for Model Reporting." _ACM FAT* 2019_. [arXiv:1810.03993](https://arxiv.org/abs/1810.03993)
- 3.Longpre, S., Mahari, R., Chen, A., et al. (2023). "The Data Provenance Initiative: A Large Scale Audit of Dataset Licensing & Attribution in AI." _NeurIPS 2024 D&B Track_. [arXiv:2310.16787](https://arxiv.org/abs/2310.16787)
- 4.Longpre, S., Mahari, R., et al. (2024). "Position: Data Authenticity, Consent, & Provenance for AI are all broken: what will it take to fix them?" _ICML 2024_. [arXiv:2404.12691](https://arxiv.org/abs/2404.12691)
- 5.Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). "A Watermark for Large Language Models." _ICML 2023, PMLR Vol. 202_. [arXiv:2301.10226](https://arxiv.org/abs/2301.10226)
- 6.Dathathri, S., See, A., Ghaisas, S., Huang, P., McAdam, R., Welbl, J., Bachani, V., et al. (2024). "Scalable watermarking for identifying large language model outputs." _Nature_, 634, 818–823. [doi:10.1038/s41586-024-08025-4](https://www.nature.com/articles/s41586-024-08025-4)
- 7.Rijsbosch, B., van Dijck, G., & Kollnig, K. (2025). "Missing the Mark: Adoption of Watermarking for Generative AI Systems in Practice and Implications under the new EU AI Act." [arXiv:2503.18156](https://arxiv.org/abs/2503.18156)

### 법안 및 정부 문서

- 8.Colorado General Assembly (2026). "[SB 26-189: Automated Decision-Making Technology](https://leg.colorado.gov/bills/sb26-189)." 서명 2026.05.14, 시행 2027.01.01.
- 9.Georgia General Assembly (2026). "[SB 540: Conversational AI Safety Act](https://www.legis.ga.gov/legislation/68210)." 서명 2026.05.13, 시행 2027.07.01.
- 10.Utah State Legislature (2026). "[HB 276: Digital Content Provenance Standards Act](https://le.utah.gov/Session/2026/bills/introduced/HB0276S02.pdf)."
- 11.Utah State Legislature (2026). "[HB 286: Artificial Intelligence Transparency Amendments](https://le.utah.gov/~2026/bills/static/HB0286.html)."
- 12.대한민국 국회 (2024). "[인공지능 발전과 신뢰 기반 조성 등에 관한 기본법 (AI기본법)](https://www.law.go.kr/lsInfoP.do?lsiSeq=268543)." 시행 2026.01.22.
- 13.European Commission (2024). "[EU AI Act Implementation Timeline](https://artificialintelligenceact.eu/implementation-timeline/)." artificialintelligenceact.eu.

### 통계·트래커·산업 보고서

- 14.National Conference of State Legislatures (2026). "[Artificial Intelligence Legislation Database (2026)](https://www.ncsl.org/financial-services/artificial-intelligence-legislation-database)."
- 15.Transparency Coalition AI (2026). "[AI Legislative Update — May 22, 2026](https://www.transparencycoalition.ai/news/ai-legislative-update-may22-2026)."
- 16.MultiState (2026). "[Artificial Intelligence (AI) Legislation Tracker](https://www.multistate.ai/artificial-intelligence-ai-legislation)."
- 17.Gartner (2026). "Gartner Forecasts Worldwide AI Governance Platform Spending to Reach $492 Million in 2026." Gartner Press Release.
- 18.Eyesift / Content Authenticity Initiative (2026). "[C2PA Content Credentials 2026 — Cryptographic Provenance Adoption](https://www.eyesift.com/faq/c2pa-content-credentials-2026-cryptographic-provenance-adoption/)."
- 19.소프트웨어정책연구소(SPRi) (2024). "한국 AI 산업 실태조사 2024 — 수출액 4,248억 원, 미국 비중 23.7%." 과학기술정보통신부.
- 20.Privacy Daily (2026-05-13). "Georgia Governor Signs Conversational AI Safety Act."
- 21.Consumer Finance Monitor (2026). "Colorado SB 26-189 Replaces Original AI Act — Shift from Governance to Consumer Disclosure."
- 22.Troutman Pepper (2026). "Utah's Digital Content Provenance Standards Act — Deepfake Protections and Provenance Data Embedding."
- 23.대한민국 정책브리핑 (2026-01). "인공지능기본법 22일 시행…생성형 AI 결과물 '워터마크' 표시 의무."
