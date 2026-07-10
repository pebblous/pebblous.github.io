---
title: 페블러스 블로그 2026년 2월 결산
subtitle: 콘텐츠와 코드의 동시 성장
date: 2026년 3월 2일
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 페블러스 블로그 2026년 2월 결산

_콘텐츠와 코드의 동시 성장_

## Executive Summary

> [!callout]
> 2026년 2월 28일부터 3월 2일까지 3일간, 페블러스 블로그는 역대 가장 집중적인 에이전틱 스프린트를 수행했습니다. 79개이던 발행 기사가 128개로, 7쌍이던 이중언어 페어가 45쌍으로, 6개이던 Claude Skills가 9개로 성장했습니다. GitHub 코드 빈도 기준 +131,764줄 — 프로젝트 24주 전체 추가량의 36.5%가 이 3일에 집중되었습니다.

> 가장 큰 성과는 '이중언어 대전환'입니다. 47개 이상의 포스팅이 8개 배치로 나뉘어 KO/EN 이중언어 구조로 변환되었고, 이중언어 비율이 8.2%에서 52.9%로 도약했습니다. 동시에 카드 렌더링, 파티클 애니메이션, 허브 페이지 로더를 공통 모듈로 추출하여 코드 중복 ~750줄을 절감했습니다.

> 이 보고서는 [2026 현황 보고서](/report/blog-2026/ko/)의 후속편으로, 2월 말 결산 시점의 블로그 성장을 콘텐츠·코드·파이프라인 세 축에서 정량적으로 기록합니다.

## 1. 주요 지표

이전 보고서(3월 1일 기준) 대비 현재(3월 2일) 수치입니다. 3일간의 변화가 만든 숫자들입니다.

1,080

총 커밋

이전 1,013 대비 +67. 3일간 84커밋 (수동 41 + CI 43)

128

발행 기사

이전 79개 대비 +49. Tech 53, Art 41, Business 20, Story 14

45

이중언어 쌍

이전 7쌍 대비 +38. 전체 85개 유니크 기사 중 52.9%

9

Claude Skills

이전 6개 대비 +3. changelog, new-hub, text-reinforce 추가

### Before → After 비교

2026년 3월 1일 (이전 보고서)

- 발행 기사79개
- 이중언어7쌍 (8.2%)
- 커밋1,013회
- Claude Skills6개
- 허브 페이지0개
- 공통 JS 모듈10개 (index/)

2026년 3월 2일 (현재)

- 발행 기사128개 (+62%)
- 이중언어45쌍 (52.9%)
- 커밋1,080회 (+6.6%)
- Claude Skills9개 (+50%)
- 허브 페이지3개 (ISO5259, IR, SyntheticData)
- 공통 JS 모듈13개 (+3 신규)

**참고:** articles.json 총 130건 중 128건 발행. 유니크 기사(base ID)는 85개이며, 이중언어 변환으로 KO/EN이 각각 별도 항목으로 등록되어 총 수가 증가했습니다.

## 2. 이중언어 대전환

이번 스프린트의 핵심 성과입니다. 47개 이상의 포스팅이 3일간 8개 배치로 나뉘어 KO/EN 이중언어 구조로 변환되었습니다. 단순 번역이 아니라, 각 포스팅의 디렉토리 구조를 `post.html` → `post/{ko,en}/index.html`로 전환하고, SEO redirect stub, hreflang 태그, 언어 전환 링크까지 포함하는 풀 패키지 변환입니다.

### 배치별 변환 타임라인

Batch 1~2Tech 10개

Tech 카테고리 포스팅 10개 일괄 변환. 이중언어 파이프라인의 첫 실전 가동.

Batch 3~4Tech/Business 10개

Business 카테고리 확대. 헤더·TOC·본문 레이아웃 정렬도 동시 수행 (58개 포스팅).

Batch 5~6SyntheticData, IR, PhysicalAI, AADS 9개

다수 프로젝트에 걸친 크로스-카테고리 배치. AADS 4개 포스팅 포함.

Batch 7DataClinic 2 + ISO5259 4개

ISO 표준 관련 포스팅 집중 변환. ISO5259 허브 페이지 신규 생성과 동시 진행.

Batch 8DAL 17개 (콘텐츠 4 + 갤러리 13)

Data Art Lab 갤러리 13개 일괄 변환. 단일 배치 최대 규모.

47+

변환 포스팅

8

배치 수

52.9%

이중언어 비율

### 품질 강화 작업

이중언어 변환과 병행하여, 기존 포스팅의 콘텐츠 품질도 강화했습니다. `/text-reinforce` 스킬로 7개 포스팅에 총 143줄의 내러티브 문단을 추가하고, Hero Section 정책 통일과 헤더·TOC·본문 레이아웃을 58개 포스팅에 일괄 적용했습니다.

| 포스팅 | 추가 줄 |
| --- | --- |
| enterprise-ontology-paradigm (KO/EN) | +60줄 |
| digital-twin-physical-ai-market | +25줄 |
| pebblosim-design-strategy | +24줄 |
| physical-ai | +20줄 |
| data-greenhouse-strategy | +18줄 |
| palantir-vs-classic-ontology (KO/EN) | +16줄 |

## 3. 코드 아키텍처 성장

콘텐츠가 늘어나면서 코드도 함께 성장했습니다. 인덱스 페이지, ISO5259 허브, IR 허브에서 반복되던 카드 렌더링·파티클 애니메이션 코드를 발견하고, 3개의 공통 모듈로 추출했습니다.

### 신규 공통 모듈 (3개)

PebblousCardRendererNEW

scripts/card-renderer.js

인덱스와 허브 페이지의 카드 렌더링 로직 통합. 이미지/비디오/GIF/파티클 캐스케이드, 태그 스크롤, featured 배지, show more/less 페이지네이션. 636줄 → 350줄 (45% 감소).

PebblousHubCardsNEW

scripts/hub-cards.js

허브 페이지 전용 카드 로더. `PebblousHubCards.init({ containerId, pathFilter, language })` 한 줄로 articles.json 필터링 → 카드 그리드 렌더링. 4개 허브 페이지가 동일 모듈 사용.

CardParticle (shared)NEW

scripts/card-particles.js

파티클 그래프 클러스터 애니메이션. 인덱스 + ISO5259 ko/en + IR ko/en 총 5곳에서 중복되던 코드를 공통화. ~470줄 절감. `window.CardParticleConfig`로 색상·속도·밀도 커스터마이즈 가능.

### JS 모듈 현황 (13개, 3,749줄)

| 모듈 | 역할 | 상태 |
| --- | --- | --- |
| common-utils.js | PebblousPage, Theme, Chart, Tabs 등 메인 유틸 | 기존 |
| card-renderer.js | 카드 렌더링 통합 | NEW |
| card-particles.js | 파티클 그래프 클러스터 | NEW |
| hub-cards.js | 허브 페이지 카드 로더 | NEW |
| index/init.js | 인덱스 오케스트레이터 | 기존 |
| index/articles.js | 기사 렌더링 (리팩토링됨) | 수정 |
| index/theme.js | FOUC 방지 테마 (동기) | 기존 |
| index/search.js | 검색 + 카테고리 | 기존 |

### 허브 페이지 체계 (3개)

프로젝트별 콘텐츠를 한눈에 볼 수 있는 허브 페이지가 3개 신설되었습니다. 모든 허브는 이중언어(KO/EN)이며, PebblousHubCards 공통 모듈을 사용합니다.

ISO5259

데이터 품질 표준

FAQ Schema + SEO 강화

IR

투자 리서치

Press Coverage + SEO 만점

SyntheticData

합성 데이터

/new-hub 스킬로 자동 생성

## 4. 스킬 & 파이프라인 확장

6개이던 Claude Skills가 9개로 늘었습니다. 작업 이력 자동 기록(`/changelog`), 허브 페이지 자동 생성(`/new-hub`), 콘텐츠 품질 강화(`/text-reinforce`)가 추가되었습니다.

/new-post

기사 생성

MD/PDF → HTML. PebblousPage.init, Executive Summary, 이중언어 포함

/bilingual

이중언어 변환

KO→KO/EN 구조 변환. hreflang, redirect stub, SEO 일괄 처리

/seo-check

SEO 검증

4-Layer (meta, OG, JSON-LD, heading) 자동 검증. 26점 만점 체크

/publish

발행 파이프라인

Tailwind 빌드 + git status 확인 + /commit 연계

/commit

스마트 커밋

파일 분류 (auto-gen/content/config) + 선택적 스테이징 + 커밋

/sns-write

SNS 홍보

LinkedIn, Twitter/X, Facebook 맞춤 글 자동 작성

/text-reinforceNEW

콘텐츠 품질 강화

시각 요소(차트, 테이블) 앞에 내러티브 문단 추가. Text-First 원칙 적용

/changelogNEW

작업 이력 기록

history/changelog.jsonl에 작업 내역 자동 기록. 22건 누적

/new-hubNEW

허브 페이지 생성

주제 키워드 → 이중언어 허브 페이지 자동 생성. PebblousHubCards 통합

### 확장된 콘텐츠 파이프라인

📝

Source

MD/PDF

→

🤖

/new-post

HTML 생성

→

🌐

/bilingual

KO/EN 변환

→

✍️

/text-reinforce

품질 강화

→

🔍

/seo-check

SEO 검증

→

🚀

/publish

빌드 + 배포

**신규 패턴 — 대규모 배치 변환:**`/bilingual`을 배치 단위(4~17개)로 반복 실행 → articles.json 일괄 등록 → SEO redirect stub 생성 → `/commit` 배치 커밋 → CI 자동 반영. 이 패턴으로 3일간 47+ 포스팅을 변환했습니다.

## 5. GitHub 작업 통계

GitHub API로 추출한 코드 빈도(Code Frequency) 데이터입니다. 이번 주(3/1 주차)는 프로젝트 24주 역사상 최대 규모의 코드 변경이 발생했습니다.

+131,764

추가 lines

전체 24주 추가량(360K)의 36.5%

-66,955

삭제 lines

리팩토링 + 구조 변환 삭제분

+64,809

순증 lines

이전 최대 주(+68K) 대비 1.93배

### 주간 코드 빈도 추이

### 수동 커밋 분류 (41건)

| 카테고리 | 건수 | 대표 작업 |
| --- | --- | --- |
| 이중언어 변환 | 10 | Batch 1~8 (47+ 포스팅) |
| 허브 페이지 | 5 | IR, ISO5259, SyntheticData 허브 |
| 코드 리팩토링 | 4 | CardRenderer, HubCards, Particles 공통화 |
| 레이아웃 통일 | 3 | 헤더·TOC 정렬 (58개), Hero 정책, 그리드 폭 |
| 콘텐츠 강화 | 3 | text-reinforce 7개, Robotic Painting 신규 |
| 버그 수정 | 4 | Loading... 버그, FAQ 중복, wrapper 깨짐 |
| SEO + 기타 | 12 | ISO5259 SEO, 경로 정비, PDF 복원 등 |

## 6. 주요 이슈 & 해결

대규모 작업에는 이슈가 따릅니다. 이번 스프린트에서 발견·해결한 6건의 주요 이슈입니다.

1Redirect stub 경로 오류

**원인:** 상대경로 `./ko/`가 trailing slash 없는 URL에서 잘못 해석

**해결:** 절대경로 `/project/IR/ko/`로 전환

2AADS 설명 완전 오류

**원인:** "AI-ready Autonomous Data System" (틀린 약어 풀이)

**해결:** "Agentic AI Data Scientist" (과기부 R&D 과제 코드명)으로 정정

3IR 허브 카드 1개만 표시

**원인:** KO PitchBook 기사가 articles.json에 미등록

**해결:** 누락된 KO 항목 추가로 2개 카드 정상 표시

4FAQ JSON-LD 중복

**원인:** <head> 수동 삽입 + config.faqs 자동 삽입 → 이중 Schema

**해결:** 수동 삽입 제거, config.faqs만 사용하는 정책 확립

5articles.json wrapper 깨짐

**원인:** 편집 중 `{ categories, articles }` 래퍼가 배열로 변환

**해결:** 래퍼 복구 + CLAUDE.md에 구조 정책 명시

6인덱스 카테고리 "Loading..." 버그

**원인:** 비동기 렌더링 타이밍으로 카테고리 제목이 대체되지 않음

**해결:** 렌더링 순서 수정으로 정상 표시
