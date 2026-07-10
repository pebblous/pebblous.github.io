---
title: 에이전틱 블로그의 탄생
subtitle: 57개에서 79개로, 바이브 코딩에서 에이전틱 자동화로 — 진화하는 블로그의 해부학
date: 2026년 3월 1일
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 에이전틱 블로그의 탄생

_57개에서 79개로, 바이브 코딩에서 에이전틱 자동화로 — 진화하는 블로그의 해부학_

## Executive Summary

> [!callout]
> 2025년 9월 첫 커밋으로 시작된 페블러스 블로그는 3개월 만에 57개 기사와 753회 커밋을 달성했습니다. 그로부터 3개월이 지난 지금, 블로그는 79개 발행 기사, 1,013회 커밋, 21개 프로젝트 디렉토리로 성장했습니다. 단순한 숫자의 증가가 아니라, 블로그를 만드는 방식 자체가 근본적으로 바뀌었습니다.

> 가장 큰 변화는 '바이브 코딩'에서 '에이전틱 자동화'로의 전환입니다. 6개의 Claude Skills가 기사 생성부터 SEO 검증, RSS/사이트맵 발행, SNS 글쓰기까지 전 과정을 자동화하고, 4개의 GitHub Actions가 CI/CD 파이프라인을 구성합니다. PebblousPage.init() 모듈 시스템은 10개 이상의 컴포넌트를 하나의 config 객체로 초기화합니다.

> 이 보고서는 페블러스 블로그의 현재 상태를 해부합니다. 어떤 글들이 있고, 어떻게 만들어지며, 어떤 자동화 시스템이 작동하는지를 기록하여, 에이전틱 블로그의 탄생 과정을 아카이브합니다.

## 1. 주요 지표

2025년 9월 28일 첫 커밋 이후 6개월. 숫자로 보는 페블러스 블로그의 현재입니다.

1,013

총 커밋

2025-12 대비 +260회. 6개월간 일평균 5.6회 커밋

79

발행 기사

Tech 35, Art 23, Business 14, Story 7. 이중언어 7쌍 포함

21

프로젝트 디렉토리

PhysicalAI, DataClinic, AADS 등 21개 독립 프로젝트

6

Claude Skills

new-post, seo-check, publish, commit, sns-write, bilingual

### 월별 기사 발행 추이

## 2. 성장 이야기: 57에서 79으로

[2025년 결산 보고서](/report/blog-2025-review/)에서 우리는 '3개월간의 스프린트'를 기록했습니다. 57개 기사, 753회 커밋, 86,000줄 코드. 바이브 코딩과 AI 글쓰기로 완성한 첫 번째 마일스톤이었습니다.

2025년 12월

- 발행 기사57개
- 커밋753회
- 프로젝트12개
- 이중언어0쌍
- 자동화수동
- 개발 방식바이브 코딩

2026년 3월

- 발행 기사79개 (+38%)
- 커밋1,013회 (+35%)
- 프로젝트21개 (+75%)
- 이중언어7쌍
- 자동화Skills 6 + Actions 4
- 개발 방식에이전틱 자동화

3개월 동안 22개의 새 기사가 추가되었고, 9개의 새 프로젝트 디렉토리가 생겼습니다. 특히 NeuroSymbolicAI, World Model, BizReport, SyntheticData, AgenticAI, PebbloSim 등 새로운 연구 영역이 블로그에 등장했습니다.

### 카테고리별 기사 분포

하지만 이 숫자보다 중요한 것은 블로그를 만드는 방식의 변화입니다. 2025년 12월에는 마크다운을 작성하고 Claude와 대화하며 HTML을 생성하는 '바이브 코딩'이었다면, 2026년 3월에는 `/new-post` 한 줄로 기사 생성이 시작되고, `/publish`로 RSS·사이트맵이 자동 갱신되는 에이전틱 자동화 체계가 작동합니다.

## 3. 에이전틱 블로그 아키텍처

'에이전틱 블로그'란, AI 에이전트(Claude Code)가 블로그의 기사 생성, SEO 최적화, 발행, 홍보까지 전 과정을 자율적으로 수행할 수 있는 블로그를 말합니다. 사람은 주제와 원고를 제공하고, 에이전트가 나머지를 처리합니다.

### 3.1 Claude Skills (6개)

Claude Skills는 `.claude/skills/` 디렉토리에 정의된 재사용 가능한 AI 에이전트 작업 단위입니다. 각 스킬은 SKILL.md 파일에 워크플로우가 명세되어 있어, Claude Code가 일관된 품질의 결과물을 생산합니다.

/new-post

기사 생성

MD/PDF 소스에서 HTML 기사를 생성. PebblousPage.init, 이중언어, Executive Summary까지 포함

/seo-check

SEO 검증

4-Layer SEO 체크: meta, OG, JSON-LD, heading hierarchy 자동 검증

/publish

발행 자동화

articles.json 업데이트, RSS·사이트맵 재생성, Tailwind 빌드까지 원클릭

/commit

Git 커밋

변경 사항 분석 후 컨벤셔널 커밋 메시지 자동 생성 및 커밋

/sns-write

SNS 홍보

LinkedIn, Twitter/X, Facebook 플랫폼별 맞춤 홍보 글 자동 작성

/bilingual

이중언어 변환

한국어 단일 기사를 KO/EN 이중언어 구조로 자동 변환. hreflang SEO 포함

### 3.2 GitHub Actions (4개)

Git push를 트리거로 자동 실행되는 CI/CD 파이프라인입니다. 사람이 개입하지 않아도 사이트맵, RSS, 검색엔진 인덱싱이 자동으로 갱신됩니다.

validate-articles

articles.json 스키마 검증. 필수 필드 누락, 중복 ID, 잘못된 경로 자동 탐지

scan-html-files

모든 HTML 파일을 스캔하여 files-index.json 자동 갱신

update-sitemap

sitemap.xml + rss.xml 자동 생성, Google 핑 전송. 일일 cron 포함

indexnow-submit

Bing, Yandex, Naver 등에 URL 자동 제출. IndexNow 프로토콜 활용

### 3.3 PebblousPage.init() 모듈 시스템

모든 기사 페이지는 하나의 config 객체로 초기화됩니다. 10개 이상의 모듈이 자동으로 로드되어 헤더, 푸터, 테마, 스키마, 관련 글, 댓글까지 처리합니다.

| 모듈 | 역할 |
| --- | --- |
| PebblousTheme | 3-테마 시스템 (dark/light/beige) |
| PebblousPage | 페이지 초기화, Hero 섹션 동적 렌더링 |
| PebblousChart | Chart.js 래퍼 (bar, doughnut, pie, line) |
| PebblousTabs | 탭 컴포넌트 |
| PebblousComponents | Collapsible, Accordion |
| PebblousUI | Progress bar, Back-to-top |
| PebblousComments | giscus 댓글 통합 |
| PebblousRelatedPosts | articles.json 기반 관련 글 추천 |
| PebblousBreadcrumbs | 빵부스러기 내비게이션 |
| PebblousSchema | JSON-LD 스키마 자동 주입 (FAQ, Article, Breadcrumb) |

**핵심 원칙:** Hero 영역의 `<h1 id="page-h1-title">`은 반드시 **비워둡니다.**
                            PebblousPage.applyConfig()이 config.title에서 동적으로 채웁니다. FAQ는 오직 config.faqs로만 — HTML 마이크로데이터나 <head> JSON-LD는 사용하지 않습니다.

## 4. 콘텐츠 파이프라인

하나의 마크다운 원고가 블로그 기사로 발행되기까지의 전 과정입니다. 각 단계에서 Claude Skills 또는 GitHub Actions가 자동으로 작동합니다.

📝

Source

MD/PDF 원고

→

🤖

/new-post

HTML 생성

→

🔍

/seo-check

SEO 검증

→

📋

articles.json

메타 등록

→

🚀

/publish

RSS·Sitemap

→

⚡

GitHub Actions

자동 배포

**하나의 JSON이 트리거하는 연쇄 자동화:**`articles.json`이 이 블로그의 Single Source of Truth입니다.
                            기사의 제목, 경로, 카테고리, 날짜, 키워드가 모두 여기에 있고, RSS 생성, 사이트맵 갱신, 인덱스 페이지 렌더링, 관련 글 추천이 모두 이 하나의 JSON에서 파생됩니다.
                            새 기사를 articles.json에 등록하고 push하면, GitHub Actions가 자동으로 sitemap.xml과 rss.xml을 재생성하고, Google에 핑을 보내고, IndexNow로 검색엔진에 알립니다.

선택적으로 `/bilingual`로 이중언어 변환, `/sns-write`로 SNS 홍보 글 작성을 추가할 수 있습니다. 모든 과정에서 사람은 '무엇을'만 결정하고, '어떻게'는 에이전트가 처리합니다.

## 5. 블로그 인벤토리

79개 발행 기사가 4개 카테고리, 21개 프로젝트 디렉토리에 걸쳐 분포합니다.

35

Tech

44.3%

Physical AI, 온톨로지, 데이터 품질, 뉴로심볼릭 AI 등

23

Data Art Lab

29.1%

코드 페인팅, AI 예술, 시각화 실험 등 디지털 아트 작품

14

Business

17.7%

투자 분석, 시장 전망, IP 포트폴리오, 사업 전략

7

Story

8.9%

데이터셋 가이드, ISO 표준 실습, 블로그 회고

### 프로젝트 디렉토리 맵 (21개)

PhysicalAI

피지컬 AI

DataClinic

데이터 클리닉

AADS

AI 데이터 과학자

NeuroSymbolicAI

뉴로심볼릭 AI

CURK

온톨로지

ISO5259

데이터 품질 표준

ISO25024

품질 측정

SyntheticData

합성데이터

DAL

Data Art Lab

DataGreenhouse

데이터 그린하우스

IR

투자/IR

BizReport

비즈니스 분석

World Model

월드 모델

AgenticAI

에이전틱 AI

PebbloSim

시뮬레이션

App

앱 서비스

### 이중언어 기사 (7쌍)

`/bilingual` 스킬로 변환된 7쌍의 한국어·영어 기사입니다. hreflang 태그로 구글 검색에서 언어별 노출이 분리됩니다.

KO/EN데이터 품질 관리 가이드북

KO/EN뉴로심볼릭 AI 아키텍처

KO/ENHenry Kautz AI 역사

KO/EN팔란티어 vs 전통 온톨로지

KO/EN월드 모델 비교 분석

KO/ENPebbloSim 디자인 전략

KO/ENMoLtBot Genie3 메타버스 에이전트

### 전체 기사 목록

articles.json에서 동적으로 로드됩니다. 카테고리별로 분류되어 있습니다.

#### Tech

#### Data Art Lab

#### Business

#### Story

## 6. 기술 스택의 진화

2025년 결산 때와 비교하여 기술 스택이 어떻게 확장되었는지 정리합니다. 새로 추가된 요소에는 NEW 표시를 달았습니다.

### 프론트엔드

- HTML5 + Tailwind CSS (빌드)
- 순수 JavaScript (프레임워크 없음)
- Chart.js (데이터 시각화)
- 3-테마 시스템 (dark/light/beige)
- NEW PebblousPage 모듈 시스템 (10+)
- NEW giscus 댓글 통합

### 백엔드 · CI/CD

- GitHub Pages (정적 호스팅)
- GitHub Actions (CI/CD × 4)
- Node.js (Tailwind, Sitemap, RSS)
- NEW IndexNow 프로토콜
- NEW OG 이미지 자동 생성기

### 개발 도구

- Visual Studio Code
- Claude Code (에이전트)
- NEW Claude Skills (×6)
- NEW CLAUDE.md (프로젝트 지침)
- NEW 내부 문서 17개 (docs/)

**핵심 변화:** 2025년에는 '코드를 작성하는 AI 보조'였다면, 2026년에는 'AI가 이해하는 프로젝트 규칙 체계'가 구축되었습니다.
                            CLAUDE.md, 17개의 내부 문서, 6개의 Skills가 합쳐져, AI 에이전트가 프로젝트의 컨벤션을 이해하고 일관된 품질의 결과물을 생산합니다.
                            이것이 바이브 코딩과 에이전틱 자동화의 차이입니다.

## 7. 2026년 전망

2025년 결산에서 "200개 이상의 글을 발행할 수 있을 것"이라 기대했습니다. 에이전틱 자동화 체계가 갖춰진 지금, 그 목표는 더욱 현실적입니다.

### 콘텐츠 확장

- **200개 기사 목표** — 에이전틱 파이프라인으로 월 15-20개 발행 가능
- **이중언어 콘텐츠 확대** — 주요 기사의 영문 버전 확대로 글로벌 노출 강화
- **Data Art Lab 확장** — 코드 페인팅을 넘어 인터랙티브 데이터 아트로

### 기술 고도화

- **에이전틱 자동화 심화** — 기사 주제 제안, 트렌드 분석까지 AI가 수행
- **SEO 자동 모니터링** — Google Search Console 데이터 기반 자동 개선
- **커뮤니티 빌딩** — giscus 댓글, 뉴스레터 연동으로 독자 참여 확대

**"AI를 활용하되 사람의 향기가 물씬 풍기는 블로그"** — 2025년 결산에서 남긴 다짐은 여전히 유효합니다.
                            에이전틱 자동화는 도구일 뿐, 블로그의 방향과 가치는 사람이 결정합니다.
                            페블러스 블로그는 AI-Ready 데이터, 피지컬 AI, 데이터 품질이라는 주제에 대한 깊은 통찰을 담아내되, 기술을 최대한 활용하여 더 빠르고, 더 많고, 더 일관된 품질로 전달하겠습니다.

## 8. Future Works

인프라와 자동화 체계는 성숙했습니다. 다음 도약은 **전략적 콘텐츠 균형**, **아트 가시성 강화**, 그리고 **데이터 기반 의사결정**에 달려 있습니다. 아트와 테크와 비즈니스가 교차하는 지점 — 이것이 다른 어떤 기업 블로그도 복제할 수 없는 페블러스만의 해자(moat)입니다.

### 8-1. 콘텐츠 균형 재조정

현재 Tech 카테고리가 전체의 49%를 차지하는 반면, Story(8%)와 Business(19%)는 상대적으로 약합니다. 브랜드가 약속하는 아트-테크-비즈니스 융합을 실현하려면, 비즈니스 서사를 강화해야 합니다. 고객 인사이트, 시장 포지셔닝, "데이터가 CEO에게 왜 중요한가" 같은 전략적 콘텐츠가 그 답입니다.

49%

Tech

50개 기사 — 강력한 기술 리더십

25%

Data Art

25개 기사 — 차별화 자산이지만 발견성 부족

27%

Business + Story

27개 기사 — 35-40% 목표로 확대 필요

### 8-2. 아트의 재발견

25개의 데이터 아트 작품이 있지만 Featured 비율은 12%에 불과합니다(Tech는 30%). 아트 콘텐츠는 다른 기업 블로그가 갖지 못한 고유 자산입니다. 갤러리 스타일의 아트 쇼케이스 랜딩 페이지를 만들어 이 차별화 요소가 스스로 말할 수 있게 해야 합니다.

**Action Items:** Featured 아트 작품을 6-8개로 확대, 기법/테마별 필터링이 가능한 아트 쇼케이스 페이지 신설, Data Art Lab을 코드 페인팅 너머 인터랙티브 데이터 아트로 확장

### 8-3. 데이터 기반 콘텐츠 의사결정

콘텐츠 생산 자동화는 최고 수준이지만, 무엇이 공명(resonance)하는지에 대한 가시성은 없습니다. Google Analytics 데이터를 `articles.json` 카테고리에 매핑하는 `/content-analytics` 스킬이 이 순환을 닫을 수 있습니다. 어떤 주제가 트래픽을 끌고, 어떤 언어 버전이 더 잘 수행하는지 — 지금은 시야가 없습니다.

#### 필요한 신규 스킬

- **/content-analytics** — GA 데이터 + articles.json 통합 분석
- **/content-calendar** — 분기별 테마 기획, 카테고리 갭 분석

#### 측정 지표

- 카테고리별 트래픽 및 체류 시간
- 언어 버전(KO/EN)별 성과 비교
- 차트 인터랙션, 스크롤 심도 추적

### 8-4. 교차 필라 콘텐츠 — 진정한 차별화

아트 따로, 테크 따로, 비즈니스 따로가 아닌 — 이들이 **교차하는 지점**에 페블러스만의 마법이 있습니다. "ISO 컴플라이언스 데이터를 제너러티브 아트로 시각화하기", "데이터 미학의 비즈니스 케이스" 같은 콘텐츠는 오직 페블러스만이 만들 수 있습니다. 이 교차점이야말로 어떤 경쟁자도 복제할 수 없는 고유 영역입니다.

### 8-5. 이중언어 완성

현재 57%의 포스트가 KO+EN 이중언어로 제공됩니다. 나머지 43%(19개 기사)의 단일 언어 부채를 해소하면 글로벌 도달 범위가 크게 확장됩니다. `/bilingual` 스킬이 이미 갖춰져 있어, 고성과 기사부터 우선 전환하면 노력 대비 효과가 극대화됩니다.

#### Priority Roadmap

P1: 즉시 (2주 내)

- - Featured 아트 작품 6-8개로 확대
- - 콘텐츠 캘린더 수립 (분기별 카테고리 목표)
- - Changelog 시스템 일상화

P2: 단기 (4주 내)

- - /content-analytics 스킬 개발
- - 상위 10개 단일 언어 기사 이중언어 전환
- - 비즈니스 콘텐츠 4개 일괄 발행

P3: 중기 (8주 내)

- - 아트 쇼케이스 랜딩 페이지 신설
- - 국제 SEO 감사 (hreflang, 언어별 트래픽)
- - 교차 필라 콘텐츠 시리즈 기획

P4: 장기 (Q2 2026+)

- - 설명 영상 콘텐츠 (기술 주제)
- - Medium, Dev.to 콘텐츠 신디케이션
- - 커뮤니티 포럼/토론 채널 확장
