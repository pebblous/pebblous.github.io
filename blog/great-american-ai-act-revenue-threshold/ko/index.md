---
title: 매출로 규제 대상을 가르는 미국의 첫 연방 AI 법안
subtitle: EU는 연산량으로, 한국은 분야로 가르는 프런티어 AI 규제 대상을 미국은 연 매출 5억 달러로 나눈다
date: 2026-07-21
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 매출로 규제 대상을 가르는 미국의 첫 연방 AI 법안

_EU는 연산량으로, 한국은 분야로 가르는 프런티어 AI 규제 대상을 미국은 연 매출 5억 달러로 나눈다_

## Executive Summary

> [!callout]
> 중국·EU·한국의 AI 규제를 차례로 훑다 보면 미국 연방 차원의 자리가 오래 비어 있었다. 2026년 6월, 미 하원의 공화·민주 양당 의원이 그 자리를 채우는 269페이지짜리 초안을 공개했다. 이름은 **Great American Artificial Intelligence Act of 2026**(GAAIA). 아직 정식 발의가 아니라 의견 수렴용 discussion draft지만, 이 글이 주목하는 대목은 조항 하나가 아니라 규제 대상을 가르는 기준이다.

> 초안은 규제 대상을 "무엇을 만드느냐"가 아니라 **연 매출 5억 달러**로 가른다. 프런티어 모델을 훈련하면서 매출이 그 선을 넘는 소수의 대형 개발사만 감사·공시 의무를 진다. EU가 학습 연산량을, 한국이 사용 분야를, 중국이 도달 범위를 규제의 잣대로 삼은 것과 뚜렷이 다른 선택이다. AI 규제 역사상 매출이라는 회계 지표가 규제 대상을 가르는 1차 기준이 된 첫 사례다.

> 이 글은 네 나라가 각각 어떤 데이터 필드에 문턱을 긋는지 비교하고, 미국이 매출을 고른 행정적 이점과 그 기준이 놓치는 사각지대를 함께 본다. 규제 대상을 정의하는 일이나 AI 확산을 통계로 재는 일이나, 결국 연속적인 현상을 하나의 관측 가능한 숫자로 근사하는 같은 데이터 문제라는 관점에서 읽는다.

규제 대상을 가르는 문턱은 나라마다 다른 숫자로 표현된다. 미국의 매출선, EU의 연산량선, 한국의 보조 매출선, 그리고 매출 조항이 아예 없는 중국까지. 네 지표를 나란히 놓으면 각 나라가 무엇을 관측 가능한 신호로 믿는지가 드러난다.

<!-- stat-card -->
**$500M** — 미국의 문턱 — 연 매출 5억 달러 + 프런티어 모델 훈련을 둘 다 넘는 개발사만 대상

<!-- stat-card -->
**10²⁵** — EU의 문턱 — 학습 FLOPs로 시스템 위험을 추정 — 모델의 능력을 재는 기술 지표

<!-- stat-card -->
**1조원** — 한국의 보조선 — 규제 축은 고영향 분야, 매출은 외국 사업자 대리인 지정용 부차 기준

<!-- stat-card -->
**0** — 중국의 매출 조항 — 매출 문턱은 없음 — 여론 영향력과 이용자 수로 규제 대상을 가른다

## 매출 5억 달러라는 선

Jay Obernolte(공화, 캘리포니아)와 Lori Trahan(민주, 매사추세츠) 의원이 2026년 6월 공동으로 공개한 GAAIA 초안은 [Tech Policy Press의 해설](https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/)에서 조항별로 잘 정리돼 있다. 초당적이라는 점, 미국인 65%가 "정부의 AI 규제가 부족하다"고 답한 여론(민주 77%·공화 53%)을 배경에 깔고 있다는 점이 자주 인용된다. 아직 법이 아니라 **discussion draft**, 곧 피드백을 받으려고 내놓은 초안이라는 점은 이 글 내내 전제로 둔다.

![미국 연방의회 의사당 — Great American AI Act 초안이 발의된 하원](./image/img-01-us-capitol.jpg)
*▲ 미국 연방의회 의사당. GAAIA 초안은 이곳 하원에서 초당적으로 공개됐다 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2023_United_States_Capitol_118th_Congress,_sunrise.jpg)*

초안이 다루는 내용은 프런티어 거버넌스·노동·사이버보안·연구개발 네 갈래에 걸쳐 넓다. 그 갈래들 각각은 페블러스 블로그가 이미 다뤘다. 이 글은 그 위에 얹힌 더 앞선 질문 하나에 집중한다. **이 법은 정확히 누구에게 적용되는가.** 초안이 규정을 부과하기 전에 먼저 하는 일은, 규제할 대상과 규제하지 않을 대상 사이에 선을 긋는 것이다. 그 선이 매출이다.

데이터 실무자에게 이 선택은 낯설지 않다. 어떤 대상을 걸러 내려면 관측 가능한 컬럼 하나를 골라 임계값을 정해야 한다. GAAIA는 그 컬럼으로 모델의 크기나 위험도가 아니라 개발사의 매출을 골랐다. 규제라는 문제를 데이터 엔지니어링의 언어로 옮기면, 이 초안은 "피처 선택"에서부터 다른 길을 택한 셈이다.

## 'large frontier developer'는 누구인가

초안이 규제 대상으로 정의하는 "large frontier developer"는 두 조건을 모두 만족하는 기업이다. **연 매출 5억 달러 이상**이면서 **프런티어 모델을 훈련**하는 곳. 둘의 AND 조건이라 OpenAI·Anthropic·Google·Meta·xAI 같은 소수만 걸린다. Trahan 의원은 이 설계 의도를 한 문장으로 요약했다. "법무팀도 없는 2인 스타트업은 이 규제 체제 안에 있지 않다."

규제가 미치는 범위도 좁다. 초안이 겨냥하는 것은 **개발(development)**이지 배포나 사용이 아니다. Trahan 의원의 표현을 빌리면 "연방의 차선(federal lane)은 대체로 프런티어 모델 개발이지 제품이 아니다." 매출로 대상을 좁힌 뒤, 그 대상이 하는 여러 일 가운데 모델을 만드는 단계만 규율한다.

이 문턱을 넘는 소수에게 얹히는 의무는 크게 셋이다. 모델 정보를 공시하고, 제3자 감사를 받고, 중대한 안전 사고를 보고해야 한다. 여기에 내부고발자 보호 조항이 붙는다. 감사를 누가 어떻게 수행하는지는 [앞선 글에서 회계감사 모델에 빗대 다뤘다](/blog/gaaia-ivo-ai-audit-license/ko/). 인증받은 독립 검증 기관(IVO)이 상주해 검증하는 구조다. 이 글에서 중요한 것은 그 감사가 "매출 5억 달러를 넘는 개발사에게만" 의무가 된다는 사실이다. 같은 프런티어 모델을 만들어도 매출선 아래라면 이 의무 바깥에 있다.

![프런티어 모델을 훈련하는 대형 데이터센터 — large frontier developer의 물리적 실체](./image/img-02-google-datacenter.jpg)
*▲ 프런티어 모델 훈련에 쓰이는 대형 데이터센터. GAAIA가 겨냥하는 "large frontier developer"의 실제 규모다 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Google_Datacenter_-_The_Dalles,_Oregon_(17832143871).jpg)*

## 나라마다 다른 컬럼을 본다

규제 대상을 정의하는 문제를 다른 나라들은 다른 컬럼으로 풀었다. 같은 "프런티어 AI를 어디서부터 규제할 것인가"라는 질문 앞에서, 관할권마다 관측 가능하다고 믿는 신호가 달랐기 때문이다. 네 나라를 나란히 놓으면 각자가 무엇을 잣대로 골랐는지 한눈에 보인다.

| 관할권 | 규제 대상을 가르는 데이터 필드 | 구체 임계값 | 지표의 성격 |
| --- | --- | --- | --- |
| 미국 (GAAIA 초안) | 매출(revenue) | 연 매출 5억 달러 + 프런티어 모델 훈련 | 회계 지표 — 세무 신고로 이미 검증된 숫자 |
| EU (AI Act) | 연산량(compute) | 학습 FLOPs 10²⁵ 초과(시스템 위험 추정선), 10²³ 초과(GPAI 분류선) | 기술 능력 지표 — 모델 자체의 "힘"을 재는 값 |
| 한국 (AI 기본법) | 분야(domain)가 주, 매출은 보조 | 고영향 AI 10개 영역이 판정 기준. 국내 대리인 지정은 전년 매출 1조원 또는 AI 매출 100억원 또는 DAU 100만 | 용도·영향 지표가 주, 매출은 외국 사업자 관리용 부차 트리거 |
| 중국 (생성형 AI 관리 잠행방법) | 도달 범위·여론 영향력 | 매출 기준 없음. 휴머노이드 AI 신설 초안은 가입자 100만 또는 MAU 10만 | 사회적 영향력 지표 — "얼마나 퍼졌는가"가 우선 |

****************

정리하면 이렇다. EU는 모델이 얼마나 세게 학습됐는지를, 한국은 어디에 쓰이는지를, 중국은 얼마나 퍼졌는지를 재는데, 미국은 처음으로 얼마를 버는지를 잣대로 골랐다. 네 나라 모두 복잡한 시스템을 하나의 관측 가능한 숫자로 근사한다는 점은 같다. 다만 그 근사 함수(proxy)가 다를 뿐이다. 규제 대상을 정의하는 일이 결국 "어떤 컬럼에 임계값을 긋느냐"의 문제라는 것을, 네 나라의 서로 다른 선택이 오히려 선명하게 보여 준다.

## 매출을 고른 이유, 그리고 놓치는 것

초안 자체는 왜 하필 매출인지 이유를 명시하지 않는다. 여기서부터는 취재원 분석과 이 글의 추론이라는 점을 분명히 해 둔다. 매출을 고른 실무적 이점은 **검증 비용**에서 나온다. 매출은 세무 신고로 이미 확인 가능한 객관적 숫자다. 감사관 입장에서 기업이 스스로 신고한 값을 다시 검증할 필요가 적다.

이 이점은 EU의 연산량 기준과 비교하면 또렷해진다. 학습 FLOPs는 모델의 능력을 직접 재는 정교한 지표지만, 그 값을 아는 것은 대체로 개발사 자신뿐이다. 실제로 EU AI Act는 임계값을 넘는 개발사가 2주 안에 스스로 신고하도록 하고, 집행위가 그 뒤에 별도 확인 절차를 밟는다. 규제 기관이 기업의 자체 신고에 기대거나 검증 단계를 따로 붙여야 하는 구조다. 매출은 그런 자체 신고 의존을 줄인다. 규제 설계를 데이터 파이프라인처럼 본다면, 미국은 "수집·검증 비용이 낮은 필드"를 1차 필터로 고른 셈이다.

![유럽의회 건물 — EU AI Act의 연산량 기준을 심의한 곳](./image/img-03-eu-parliament.jpg)
*▲ 브뤼셀의 유럽의회. EU AI Act는 매출이 아닌 학습 연산량(FLOPs)으로 규제 대상을 가른다 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:European_Parliament_building_Brussels_1.jpg)*

> [!callout]
> 낮은 검증 비용에는 대가가 따른다. 매출은 모델의 위험이나 능력을 직접 재는 값이 아니다. 프런티어 모델을 훈련하지만 아직 매출이 없는 신생 개발사, 매출을 거의 내지 않는 비영리 연구소, 오픈웨이트로 강력한 모델을 푸는 조직은 문턱 아래에 남을 수 있다. 매출이라는 컬럼은 검증하기 쉬운 대신, "얼마를 버느냐"와 "얼마나 위험하냐"가 어긋나는 경우를 놓친다.

어느 지표든 이런 어긋남을 완전히 피하지는 못한다. 연산량은 학습 이후의 미세조정이나 추론 단계의 위험을 덜 반영하고, 분야 기준은 새로 등장하는 용도를 늦게 포착하며, 도달 범위는 소수만 쓰지만 치명적인 시스템을 놓친다. 규제 대상 정의는 늘 근사이고, 근사에는 사각지대가 딸려 온다. 미국이 고른 매출 기준은 그 사각지대가 어디에 생기는지가 다를 뿐이다.

## 잴 것을 먼저 정해야 잴 수 있다

같은 초안에는 매출 문턱과 짝을 이루는 또 하나의 데이터 조항이 있다. 인구조사국(Census Bureau)과 노동통계국(BLS)이 연방 설문에 AI 사용·도입 문항을 넣도록 지시하는 대목이다. 목적은 규제나 금지에 앞서 "일단 세는 것"이다. AI가 노동시장에 미치는 영향을 국가 통계로 측정하겠다는 이 조항의 구체적 내용은 [앞선 스토리에서 다뤘다](/story/great-american-ai-act/ko/).

![미국 인구조사국 본부 건물 — AI 사용·도입 문항을 연방 설문에 추가하는 기관](./image/img-04-census-bureau.jpg)
*▲ 메릴랜드 수틀랜드의 인구조사국 본부. GAAIA 초안은 이곳에 AI 사용·도입 문항 추가를 지시한다 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Census_Bureau_headquarters,_Suitland,_Maryland,_2007.jpg)*

규제 대상을 가르는 문제와 AI 확산을 재는 문제는 겉보기에 다르지만, 데이터의 관점에서는 한 문제의 양면이다. 둘 다 원래 연속적인 현상, 즉 개발사의 규모나 AI의 확산 정도를 행정이 다룰 수 있는 이산적인 신호로 근사한다. 매출 한 줄, 설문 문항 하나. 어떤 컬럼을 볼지 잘못 고르면 두 가지 다 실패한다. 매출 기준이 매출 없는 프런티어 개발사를 놓치듯, 통계 문항도 "AI 사용"을 어떻게 정의하느냐에 따라 확산을 과소 혹은 과대 측정한다.

이 관찰은 페블러스가 데이터 계보와 기여도 측정을 다뤄 온 문제의식과 같은 결에 있다. 무엇을 잴 것인가를 먼저 정의해야 잴 수 있다는 원칙은 학습 데이터의 가치를 측정할 때도, 규제 대상을 정의할 때도 똑같이 적용된다. GAAIA 초안이 매출을 고른 순간, 미국은 그 정의의 대가와 이점을 함께 떠안았다. 규제가 통과되든 아니든, 이 초안이 남기는 질문은 하나다. AI라는 연속적인 현상을 우리는 어떤 숫자 하나로 근사할 것인가.

## 참고문헌

### 보도·해설

- 1.Tech Policy Press. (2026, June). "[Unpacking the Great American Artificial Intelligence Act of 2026](https://www.techpolicy.press/unpacking-the-great-american-artificial-intelligence-act-of-2026/)." Tech Policy Press.
- 2.FedScoop. (2026, June). "[Bipartisan Great American AI Act draft proposes new federal AI governance framework](https://fedscoop.com/bipartisan-great-american-ai-act-draft-proposes-new-federal-ai-governance-framework/)." FedScoop.

### 공식 발표·법령

- 3.Office of Rep. Jay Obernolte. (2026, June). "[Obernolte, Trahan Release Discussion Draft of Great American AI Act](https://obernolte.house.gov/media/press-releases/obernolte-trahan-release-discussion-draft-great-american-ai-act)." U.S. House of Representatives.
- 4.European Union. (2024). "[Regulation (EU) 2024/1689 (Artificial Intelligence Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)" — GPAI 및 시스템 위험 연산량 임계값. Official Journal of the European Union.
- 5.대한민국. (2026). "[인공지능 발전과 신뢰 기반 조성 등에 관한 기본법(AI 기본법)](https://www.law.go.kr/lsInfoP.do?lsiSeq=268543)" — 고영향 AI 분야 및 국내 대리인 지정 기준. 2026-01-22 시행.
