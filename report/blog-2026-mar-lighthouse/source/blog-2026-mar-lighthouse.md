![Pebblous_Brandmark_Orange quarter](../assets/Pebblous_Brandmark_Orange%20half.png)
# **Lighthouse 39점 → 92점, 2일 만에 끝낸 웹 성능 최적화** — Claude Code와 함께한 실전 기록

> 2,000만 원과 4주가 필요한 프론트엔드 개편을, AI 코딩 에이전트 Claude Code와 함께 **API 비용 56만 원, 단 2일** 만에 해결했습니다. Lighthouse Performance 39→92, SEO 측정불가→100, Best Practices 만점. 에이전틱 AI가 만드는 **35배 비용 절감**의 실전 기록입니다.

---
* **날짜:** 2025-12-13
* **작성:** 페블러스 경영지원실
* **인터랙티브:** https://blog.pebblous.ai/
---

## 들어가며

웹 퍼포먼스는 사용자 경험과 검색 순위를 좌우하는 핵심 지표입니다. Google의 Lighthouse는 Performance, Accessibility, Best Practices, SEO 네 가지 축으로 웹페이지 품질을 측정하는 사실상의 표준 도구인데요, 점수를 올리려면 프론트엔드 아키텍처부터 메타데이터, 접근성, 이미지 최적화까지 광범위한 영역을 건드려야 합니다.

저는 AI 데이터 전문 기업 [Pebblous(페블러스)](https://pebblous.ai)의 대표입니다. 페블러스는 최소한의 인원으로 최대의 결과를 만들어야 하는 스타트업이기에, 저 역시 직접 코드를 쓰며 DataClinic이라는 데이터 분석 보고서 웹앱을 개발하고 있습니다. 보고서 상세 페이지(`/report/[id]`)의 Lighthouse 점수가 Performance 39점, SEO는 측정 자체가 불가능한 상태였습니다. 외주를 주면 2,000만 원에 한 달, 직접 하면 몇 주가 걸릴 작업이었지만, Claude Code와의 협업으로 **2일 만에, API 비용 약 56만 원으로** 대폭 개선했습니다. 그 과정을 기록합니다.

---

## Before & After: 한눈에 보는 결과

| Category | Before (3/7) | Mid (3/8 오전) | Final (3/8 저녁) | 총 변화 |
|----------|:---:|:---:|:---:|:---:|
| **Performance** | **39** | 87 | **92** | **+53** |
| **Accessibility** | **83** | 95 | **95** | **+12** |
| **Best Practices** | **92** | 96 | **100** | **+8** |
| **SEO** | **N/A** | 100 | **100** | **측정불가 <br>→ 만점** |

이틀간의 작업은 크게 두 단계로 나뉩니다. 첫째 날 탭뷰 아키텍처 전환과 SEO 체계 구축으로 Performance 87, SEO 100을 달성했고, 둘째 날 CLS Skeleton placeholder 정밀 적용으로 Performance 92, Best Practices 만점을 추가 달성했습니다.

SEO가 처음에 N/A였던 이유가 재미있습니다. 보고서 페이지의 DOM이 28,000px 이상으로 거대해서, Lighthouse의 SEO 수집기(AnchorElements gatherer)가 타임아웃되어 아예 점수를 매길 수 없었습니다.

---

## Core Web Vitals: 숫자로 보는 체감 성능 개선

| Metric | Before (3/7) | Mid (3/8 오전) | Final (3/8 저녁) | 총 개선율 |
|--------|:---:|:---:|:---:|:---:|
| **CLS** <br>(Cumulative Layout Shift) | 0.661 | 0.19 | **0.021** | **97% 감소** |
| **LCP** <br>(Largest Contentful Paint) | 4.7s | 1.3s | **1.8s** | **62% 감소** |
| **Speed Index** | 11.5s | 0.9s | **0.9s** | **92% 감소** |
| **TBT** <br>(Total Blocking Time) | 200ms | 0ms | **0ms** | **100% 제거** |
| **TTI** <br>(Time to Interactive) | 4.8s | 1.3s | **1.8s** | **63% 감소** |
| **FCP** <br>(First Contentful Paint) | 0.4s | 0.6s | 0.7s | 약간 증가 |

가장 극적인 개선은 CLS입니다. 0.661("나쁨")에서 0.021("좋음")로, 97% 감소를 달성했습니다. LCP는 4.7초에서 1.8초로, Speed Index는 11.5초에서 0.9초로 줄었습니다. 체감 속도가 완전히 달라진 수준입니다.

---

## 무엇을 했나: 4가지 핵심 작업

### 1. 아키텍처 전환 — 동시 렌더링에서 탭뷰로

가장 큰 임팩트를 준 변경입니다.

**기존 구조**: Evaluation, Level 1, Level 2, Level 3 네 개 섹션을 한 페이지에 모두 렌더링 → 28,000px 이상의 거대한 페이지

**변경 후**: 선택된 탭의 섹션만 렌더링 → 렌더링 양 약 1/4로 축소

URL 설계도 유연하게 가져갔습니다. 기본은 탭뷰(`/report/[id]`), 기존 리스트뷰도 쿼리 파라미터로 유지(`/report/[id]?view=list`)하여 하위 호환성을 보장했습니다.

이 한 가지 변경만으로 LCP 62% 감소, Speed Index 92% 감소, TBT 100% 제거라는 극적인 결과를 얻었습니다.

### 2. SEO 메타데이터 체계 구축 — N/A에서 100점으로

SEO 점수가 아예 측정되지 않던 상태에서 만점을 달성하기까지, 체계적인 메타데이터 인프라를 구축했습니다.

- `generateMetadata`에서 보고서별 동적 title, description, canonical URL, alternates(ko/en) 자동 생성
- JSON-LD 구조화 데이터 적용 — TechArticle, BreadcrumbList, FAQPage 스키마
- OpenGraph / Twitter Card 메타 태그로 소셜 미디어 공유 최적화
- `noindex` 메타 태그 제거하여 크롤러 접근 허용
- 동적 OG 이미지 생성 (ImageResponse 1200×630)

SEO 관련 Lighthouse audit 항목(`is-crawlable`, `canonical`, `image-alt`, `document-title`, `meta-description`, `hreflang`, `robots-txt`)을 모두 PASS로 만들었습니다.

### 3. CLS 개선 — Skeleton UI 도입

CLS(Cumulative Layout Shift) 0.661은 "나쁨" 수준입니다. 페이지 로드 중 레이아웃이 크게 흔들리고 있었다는 뜻이죠.

1차로 Evaluation, Level1, Level2, Level3 각 컴포넌트에 Skeleton UI를 적용하고 탭뷰 전환으로 동시 렌더링을 제거하여 CLS를 0.19까지 낮췄습니다. 여기서 멈추지 않고 2차로 히어로 영역에 Skeleton placeholder를 정밀 적용하여 **CLS 0.021**을 달성했습니다. 0.1 미만이면 "좋음" 기준인데, 0.021은 그 기준의 1/5 수준입니다. 이 개선이 Performance 87→92를 이끈 핵심 요인입니다.

### 4. 접근성 및 기타 개선

접근성(Accessibility) 점수를 83에서 95로 끌어올린 작업들입니다.

- 버튼에 `aria-label` 추가 (`button-name` audit PASS)
- 이미지에 의미 있는 `alt` 속성 추가 (`image-alt` audit PASS)
- 링크에 접근 가능한 이름 부여 (`link-name` audit PASS)
- `/api/json` 404 에러 해결 (API route를 locale 경로 바깥으로 이동)
- 이미지 `object-fit: contain` 적용으로 비율 깨짐 수정

---

## 프로젝트 규모: 34개 커밋, 139개 파일

이 모든 작업이 하루 동안 이루어졌습니다. 숫자로 보면 그 밀도가 느껴집니다.

| 항목 | 수치 |
|------|:---:|
| 총 커밋 수 | **36** |
| 변경된 파일 | **139개+** |
| 소스 코드 변경 | 78파일, +2,254 / -297 라인 |
| 문서 작성 | 50+파일, +1,800+ 라인 |
| Lighthouse 측정 데이터 | 25개 JSON 파일 |
| 스킬 스크립트 | 4파일, +1,089 라인 |

특히 소스 코드 78개 파일에 걸친 2,254줄의 추가와 297줄의 삭제는, 단순 수정이 아니라 아키텍처 수준의 리팩토링이 포함된 작업량입니다.

---

## Claude Code와의 작업 방식

Claude Code는 Anthropic의 CLI 기반 AI 코딩 에이전트입니다. 이번 프로젝트에서 Claude Code와 어떻게 협업했는지 간략히 설명하면 다음과 같습니다.

**진단 → 계획 → 실행 → 측정의 반복 사이클**

1. **Lighthouse JSON 분석**: Lighthouse 측정 결과 JSON을 Claude Code에 제공하면, 개선이 필요한 항목을 우선순위별로 정리해 줌
2. **개선 계획 수립**: 각 항목에 대한 구체적 해결 방안을 코드 레벨에서 제안
3. **코드 작성 및 수정**: 제안된 방안을 바로 코드로 구현 — 새 컴포넌트 생성, 기존 코드 리팩토링, 메타데이터 추가 등
4. **재측정 및 검증**: 변경 후 다시 Lighthouse를 돌려 개선 효과 확인

이 사이클을 하루 동안 수십 차례 빠르게 반복할 수 있었던 것이 핵심입니다. 사람 혼자였다면 한 사이클에 수시간이 걸릴 작업을 분 단위로 처리했습니다.

또한 Claude Code의 커스텀 스킬 기능을 활용했습니다. `seo-check`, `lighthouse-check` 같은 전용 스킬을 만들어 반복 작업을 자동화하고, 분석 결과를 체계적으로 축적했습니다.

---

## 만약 사람만으로 했다면? — 인력·시간·비용 추정

동일한 작업을 AI 에이전트 없이 사람이 수행했을 경우를 추정해 보겠습니다.

### 작업별 소요 인일 (Work Breakdown)

| 작업 영역 | 세부 내용 | 예상 인일 (man-days) |
|-----------|-----------|:---:|
| **SEO 분석 & 기획** | 현황 감사, Seobility 분석, 개선 우선순위 도출, 체크리스트 작성 | 2~3 |
| **SEO 구현** | generateMetadata, sitemap, canonical, hreflang, JSON-LD (Article, FAQ, BreadcrumbList), OG Image 동적 생성 | 5~7 |
| **성능 최적화** | CLS 원인 분석, Skeleton UI 설계·구현 (4개 섹션), 폰트 최적화, D3 번들 분리 | 4~6 |
| **Tabview 아키텍처** | 탭 전환 뷰 설계, 구현 (822줄), SidebarMenu 확장, 쿼리파라미터 통합, 기존 뷰 호환 | 4~5 |
| **접근성 개선** | aria-label, image-alt, heading-order, color-contrast 분석, font-display | 1~2 |
| **Best Practices** | image-aspect-ratio, API route 404 해결, console error 수정 | 1~2 |
| **측정 & 분석** | Lighthouse 25회+ 측정, 결과 비교 분석, 병목 식별, 보고서 작성 | 3~4 |
| **버그 수정** | /en/en/ 이중 locale, og:image localhost, build 에러 등 | 1~2 |
| **문서화 & 도구** | CLAUDE.md, 분석 스크립트, 스킬 구현, 개선 보고서 | 2~3 |
| **합계** | | **23~34 인일** |

### 필요한 팀 구성과 기간

이 작업은 한 사람이 모든 영역을 커버하기 어렵습니다. 현실적으로 다음과 같은 팀이 필요합니다.

| 역할 | 인원 | 투입 기간 | 담당 영역 |
|------|:---:|:---:|------|
| 시니어 프론트엔드 개발자 | 1 | 15~22일 | SEO 구현, 성능 최적화, Tabview 아키텍처 |
| SEO 전문가 | 1 | 3~5일 | 감사, 기획, 구조화 데이터 검수 |
| QA 엔지니어 | 1 | 5~7일 | Lighthouse 측정, 크로스브라우저/다국어 테스트 |
| **전체** | **2~3명** | **약 3~4주** | |

### 비용 환산

외주 단가 기준으로 환산하면 다음과 같습니다.

| 구분 | 단가 (일) | 투입일 | 소계 |
|------|:---:|:---:|:---:|
| 시니어 프론트엔드 (외주) | ₩800,000 | 18일 | ₩14,400,000 |
| SEO 전문가 (외주) | ₩600,000 | 4일 | ₩2,400,000 |
| QA 엔지니어 (외주) | ₩500,000 | 6일 | ₩3,000,000 |
| **합계** | | **28 인일** | **₩19,800,000** |

> 약 **2,000만원** (USD ~$14,000) 규모의 프로젝트입니다.

### 실제 AI 비용: Claude Code 토큰 사용량

이번 프로젝트에서 실제로 사용된 Claude Code(Claude Opus 4.6 모델)의 토큰과 비용을 공개합니다.

| 항목 | 수치 |
|------|------|
| **모델** | Claude Opus 4.6 |
| **API 호출 횟수** | 1,890회 |
| **Input tokens** | 36,349 |
| **Output tokens** | 444,652 |
| **Cache read tokens** | 177,554,315 (~1.78억) |
| **Cache creation tokens** | 4,849,623 (~485만) |

| 항목 | 단가 (/M tokens) | 토큰 수 | 비용 |
|------|:---:|:---:|:---:|
| Input | $15 | 36K | $0.55 |
| Output | $75 | 445K | $33.35 |
| Cache read | $1.50 | 177.6M | $266.33 |
| Cache creation | $18.75 | 4.8M | $90.93 |
| **합계** | | | **$391 (~₩560,000)** |

Cache read가 전체 비용의 68%를 차지합니다. 긴 대화에서 매 턴마다 전체 컨텍스트를 캐시로 재전달하기 때문인데, cache read 단가($1.50/M)는 일반 input($15/M)의 1/10 수준이므로 캐시가 없었다면 비용은 약 7배($2,660+)였을 것입니다.

### AI 에이전트 vs 사람 팀: 최종 비교

| | AI Agent (Claude Code) | Human Team |
|---|:---:|:---:|
| **비용** | **~$391 (~₩560,000)** | **~₩19,800,000** |
| **소요 시간** | ~2일 | 3~4주 |
| **인력** | 1명 (+ AI) | 2~3명 |
| **Lighthouse 측정** | 25회+ (즉시 분석) | 5~10회 (수동 분석) |
| **반복 실험** | 빠른 수정→측정 사이클 | 수정→배포→측정 지연 |
| **문서화** | 자동 생성 | 별도 공수 필요 |
| **비용 비율** | **1** | **35×** |
| **시간 비율** | **1** | **10~15×** |

> AI 비용 ₩56만 원으로 인건비 ₩1,980만 원 상당의 작업을 완료 — **약 97% 비용 절감**.

### AI 에이전트 협업이 효과적이었던 이유

이 수치의 핵심은 단순히 "빠르다"가 아닙니다.

1. **빠른 피드백 루프**: 코드 수정 → 빌드 검증 → Lighthouse 측정 → 분석을 분 단위로 반복. 사람 혼자라면 한 사이클에 30분~1시간 걸릴 것을 5~10분으로 단축했습니다.
2. **전문 영역 통합**: SEO, Performance, Accessibility, Architecture를 별도 전문가 없이 한 세션에서 처리
3. **코드베이스 즉시 이해**: 139개 파일, 수만 줄의 코드를 즉시 탐색·분석
4. **문서 자동화**: 측정 보고서, 비교 분석, 커밋 히스토리를 자동 생성
5. **일관성 유지**: 34개 커밋 전체에서 코딩 컨벤션, 커밋 메시지 스타일 일관 유지

---

## 아직 남은 것들

Performance 92, Best Practices 100을 달성했지만 아직 과제가 남아 있습니다.

- **이미지 CDN 리사이징**: 원본 이미지 크기 최적화 (Performance 추가 개선 가능)
- **색상 대비 개선**: 브랜드 컬러 #F86825의 대비율이 3.0으로 WCAG 기준 4.5에 미달 (Accessibility 95→100 가능)
- **프로덕션 배포 후 재측정**: dev 환경이 아닌 실서비스에서의 점수 확인

---

## 마치며

2일 만에 Lighthouse Performance 39→92, SEO N/A→100, Best Practices 만점을 달성하고, 2,000만 원짜리 프로젝트를 56만 원으로 해결한 이 경험은 AI 코딩 에이전트가 실무에서 어떤 레버리지를 제공하는지 보여주는 좋은 사례라고 생각합니다.

중요한 점은 Claude Code가 모든 걸 대신해 준 게 아니라는 것입니다. **무엇을 개선할지 방향을 잡고, 결과를 판단하는 것은 여전히 사람의 몫**이었습니다. Claude Code는 그 방향이 정해진 후의 실행 속도를 극적으로 높여주는 도구였습니다. 마치 숙련된 페어 프로그래머가 옆에서 쉬지 않고 코드를 써주는 느낌에 가까웠습니다.

웹 성능 최적화처럼 **분석 → 수정 → 측정의 반복이 핵심인 작업**은 AI 에이전트와의 협업이 특히 큰 효과를 발휘하는 영역입니다. 비슷한 고민을 하고 계신 분들께 참고가 되길 바랍니다.

---

## 그 다음: 소프트웨어에서 데이터로

페블러스 내부 프론트엔드 개편 프로젝트에서, 기존 2,000만 원과 4주가 소요될 작업을 AI 에이전트를 활용해 단 56만 원의 API 비용과 2일 만에 해결했습니다.

소프트웨어 엔지니어링에서 입증된 이 **'에이전틱 AI의 폭발적 레버리지'** 를, 페블러스는 **AADS(Agentic AI Data Scientist)** 를 통해 피지컬 AI(제조, 로봇, 국방)의 데이터 병목 해소에 그대로 이식합니다. 사람이 수작업으로 라벨링하고 검수하던 수억 원 규모의 데이터 정제 비용을 API 토큰 단위의 비용으로 혁신하는 것 — 이것이 페블러스 데이터 클리닉 2.0이 그리는 미래입니다.

---

## 부록: 전체 커밋 로그 (36 commits)

| # | Commit | Description |
|:---:|--------|-------------|
| 1 | `5b29758` | docs: SEO 현황 분석 및 개선 계획 문서 추가 |
| 2 | `9d9a246` | docs: CLAUDE.md, SEO 구현 스킬셋, API 확인 요청 문서 추가 |
| 3 | `6940ae4` | fix: SEO P0 개선 — manifest 브랜딩, viewport 줌 허용, 메타데이터 강화 |
| 4 | `5effef0` | feat: SEO Skill 5-7 — 페이지별 메타데이터, generateMetadata, sitemap 구현 |
| 5 | `78d336b` | fix: /report/[id] SEO 4-layer 체크리스트 기준 보강 |
| 6 | `81c636c` | feat: SEO Skill 8-10 — i18n 메타데이터, hreflang/canonical, 사이트 JSON-LD |
| 7 | `ce5cd35` | fix: report 카드 클릭 시 /en/en/ 이중 locale prefix 버그 수정 |
| 8 | `f76a641` | docs: seo-check 스킬 등록 및 감사 결과 저장 |
| 9 | `b59aa58` | feat: 보고서 FAQPage JSON-LD 추가 및 seo-check 스킬 강화 |
| 10 | `690316f` | feat: P2-P3 SEO 개선 — 이미지 alt, 푸터 링크, 에러 페이지, 보안 헤더 |
| 11 | `8e07a4e` | docs: /report/11 SEO 체크 결과 추가 (18/19, 95%) |
| 12 | `87d8003` | feat: 보고서 동적 OG 이미지 생성 (ImageResponse 1200x630) |
| 13 | `26aac4b` | feat: 홈/보고서 H1 시맨틱 태그 추가 및 SEO 만점 달성 (19/19) |
| 14 | `a158812` | docs: Lighthouse 기반 웹 퍼포먼스 분석 리포트 작성 |
| 15 | `a4c5aa8` | merge: seo/phase1 → dev — SEO Phase 1 완료 + 퍼포먼스 분석 |
| 16 | `be1cd1c` | packagemanager 삭제 |
| 17 | `06d7dff` | Merge branch 'dev' |
| 18 | `bb4181d` | fix: build 에러 수정 |
| 19 | `71b5d87` | fix: og:image localhost 문제 해결 및 API 경로 에러 방어 |
| 20 | `172e588` | fix: Lighthouse 접근성 개선 (83→91) — aria-label, alt, font-display |
| 21 | `1e871cc` | perf: Lighthouse 성능 최적화 — CLS, LCP, 폰트, D3 번들 |
| 22 | `f5f8eed` | feat: SEO 분석 스크립트 추가 및 locale별 메타데이터 수정 |
| 23 | `a3d6793` | fix: Seobility SEO 지적사항 프론트엔드 수정 및 서버측 요청사항 문서화 |
| 24 | `b3253ec` | fix: X-Powered-By 헤더 제거 및 이미지 alt 속성 추가 |
| 25 | `6406829` | feat: /lighthouse-check 스킬 추가 — Lighthouse JSON 결과 자동 분석 |
| 26 | `2c345fb` | chore: docs/ 폴더를 목적별 서브폴더로 정리 |
| 27 | `6a4495c` | refactor: 커스텀 스킬을 Skills v2 형식으로 마이그레이션 |
| 28 | `9230c42` | fix: 보고서 상세 페이지 CLS 0.82→0.055 개선 (Skeleton UI 적용) |
| 29 | `d4e4221` | chore: favicon을 Pebblous 브랜드 아이콘으로 교체 |
| 30 | `a1d6715` | fix: Level1/Level2/Evaluation 컴포넌트에 로딩 Skeleton 추가 |
| 31 | `f7b0262` | refactor: Evaluation/Level3 skeleton을 컴포넌트 내부로 이동 |
| 32 | `a2daf1b` | docs: Lighthouse 측정 결과 및 이미지 최적화 방안 정리 |
| 33 | `19d23f4` | feat: tabview 실험 뷰 추가 및 SEO/A11y/Best Practices 개선 |
| 34 | `2518c7d` | refactor: 쿼리 파라미터 기반 뷰 전환 통합 및 탭 UI 강화 |

---

## 부록: Lighthouse 상세 Audit 결과

### SEO Audit (After)

| Audit | Status |
|-------|:---:|
| `is-crawlable` | PASS |
| `canonical` | PASS |
| `image-alt` | PASS |
| `document-title` | PASS |
| `meta-description` | PASS |
| `hreflang` | PASS |
| `robots-txt` | PASS |

### Accessibility — 해결된 항목

| Audit | Before | After |
|-------|:---:|:---:|
| `button-name` | FAIL | PASS |
| `image-alt` | FAIL | PASS |
| `link-name` | FAIL | PASS |

### Accessibility — 남은 과제

| Audit | Note |
|-------|------|
| `color-contrast` | 브랜드 컬러 #F86825 대비율 3.0 (WCAG 기준 4.5 필요) |
| `heading-order` | 일부 헤딩 순서 불일치 |

### Best Practices — 100점 달성

| Audit | Before | After |
|-------|:---:|:---:|
| `errors-in-console` | FAIL | PASS |
| `image-aspect-ratio` | FAIL | PASS |
| `image-size-responsive` | FAIL | PASS |

---

*작성: 2026-03-08 | DataClinic × Claude Code 웹 성능 최적화 프로젝트*
*기준 커밋: `ccd60ea` → `365caaa` (36 commits, 2 days)*

---

![Pebblous_Brandmark_Orange quarter](../assets/Pebblous_Brandmark_Orange%20quarter.png)
> *Pebblous Makes Data Tangible.*

*This document contains confidential and proprietary information of Pebblous Inc.*
*© 2026 Pebblous Inc. All rights reserved.*

contact@pebblous.ai

![pebblous data greenhouse](../assets/pebblous%20data%20greenhouse.jpg)