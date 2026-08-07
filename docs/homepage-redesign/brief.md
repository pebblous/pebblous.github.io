# 홈페이지 재설계 — 증거 기반 하네스 제안 (외부 검토)

> **출처**: 외부 AI 검토 문서(ChatGPT 기반), JH가 2026-07-25 수령·공유
> **상태**: 제안 — 미착수. 채택 여부·범위는 미결정
> **위치 근거**: 방법론 문서 = 자산 2 → 진본(`blog-service/docs/`) 관리, 사본 자동 미러

---

## 검토 노트 (Claude, 2026-07-25)

원문 수령 직후 핵심 사실 주장 4건을 실제 레포·라이브에서 검증했다. **1건 확인, 2건 반박,
1건 부분 반박**(#3 — 최초 검증은 HTML만 보고 "확인"했으나 라이브 실측에서 CSS 숨김 동작 확인, 2026-07-25 정정).
이 결과 자체가 원문의 논지("증거 없이 추정하지 말라, 없으면 `MISSING_DATA`로 표시하라")를
증명한다 — **이 문서의 진단 조차 audit 단계에서 재검증해야 하며, 그대로 믿고 착수하면 안 된다.**

### 사실 검증 결과

| # | 원문 주장 | 판정 | 근거 |
|---|---|---|---|
| 1 | Organization 구조화 데이터 설립연도 `2020` vs 소개글 "2021년 11월 설립" 불일치 | ✅ **확인** | `index.html`에 `"foundingDate": "2020"`, `story/pebblous-story-pb/ko/`에 "2021년 11월 … 창업" — 실제 모순. 즉시 수정 가능한 실버그 |
| 2 | "345개 글, Tech Insights 200개" | ❌ **반박** | articles.json 실측: **발행 946개** (tech 556 · business 211 · story 101 · art 78). 원문 수치는 KO만 세었거나 낡은 데이터 — 실제 규모는 원문 가정의 2.7배로, 오히려 원문의 문제의식(분류 한계)을 강화 |
| 3 | 검색 전부터 "검색 결과 (0)" 패널 노출 | ⚠️ **부분 반박** (실측 2026-07-25) | HTML만 보면 `#search-results`에 숨김 없음은 사실이나, `css/styles.css:1087`에 `#search-results{display:none}`이 존재(사본 PR #224, 2026-05-26)하고 **라이브 computed style도 `display:none`으로 실측 확인** — 현재 노출되지 않음. 다만 숨김이 CSS 단일 지점 의존 + `styles.css?v=20250109-2` 스테일 캐시버스트라 취약했음 |
| 4 | "데스크톱 내비에 Wiki 없음, 모바일에만 있음" | ❌ **반박** | `components/header.html:77`(데스크톱)·`:111`(모바일) 양쪽에 Wiki 존재 |

미검증(추후 audit 대상): KO 페이지의 문의가 영문 페이지로 연결된다는 주장, Hero CTA 부재의 전환 영향.

**후속 조치 (2026-07-25)**: #1 foundingDate 정정 + #3 방어 보강(`hidden` 속성 + search.js 토글
동기화)은 사본 [PR #980](https://github.com/pebblous/pebblous.github.io/pull/980)으로 분리 수정.
작업 중 발견한 검색 HUB 배지 틸 잔재 + PebblousChart 미정의 색상 참조(undefined) 실버그는
사본 [PR #981](https://github.com/pebblous/pebblous.github.io/pull/981)로 수정. 재설계 하네스의
audit 단계는 이 두 PR 머지 이후 상태를 baseline으로 삼을 것.

### 이 레포 관례와의 정합성

- **진본/사본 분리, 브랜치·worktree 정책** — 원문이 정확히 파악하고 있음. CLAUDE.md와 일치.
- **제안된 디렉토리 구조**(`.claude/skills/homepage-redesign/`, `docs/homepage-redesign/`, `evals/`, `tools/homepage-audit/`) — 기존 구조와 충돌 없음. 단 `.claude/agents/`의 신규 에이전트 8종은 기존 에이전트(blog-*, report-*, pb-story-* 등)와 네이밍·역할 중복 여부를 skills 정합성 검토 후 추가할 것.
- **평가표(100점) + 자동 실패 조건** — 이 레포의 기존 패턴(title census 게이트, E2E 배포 게이트)과 같은 철학. 특히 "URL 변경·KO/EN 회귀·Lighthouse 하락 = 자동 실패"는 그대로 채택할 가치.
- **"작성 에이전트가 자기 결과를 평가하지 않는다"** — report-produce의 합성/검증 분리와 동일 원칙.

### 채택 시 권고 순서 (원문 동의 + 보강)

1. **첫 PR은 읽기 전용 audit 스킬만** — 원문 권고대로. 코드·디자인 변경 0.
   산출물 5종(company-model.yaml, content-graph.json, baseline-audit.md, user-journeys.md, homepage-opportunity-map.md)을 사람이 읽고 방향 결정.
2. **audit의 첫 임무에 "이 문서 자체의 재검증" 포함** — 위 표의 반박 2건이 보여주듯, 외부 진단은 낡거나 틀릴 수 있다.
3. **즉시 수정 가능한 확인 버그는 재설계와 분리** — foundingDate 불일치(#1)와 검색 패널 숨김 이중화(#3)는 하네스 없이도 한 줄 수정. 재설계 프로젝트에 묶어 지연시키지 말 것. ✅ 완료: 사본 PR #980 (2026-07-25).
4. **글 수 진실 확보** — 946개(전체) vs 홈 노출 수의 관계를 content-graph 단계에서 명확히. "345"가 어디서 온 수치인지 규명.

### 비용·규모 감각

원문의 full 파이프라인(에이전트 8종 + 3개 프로토타입 + 독립 평가)은 report-produce급 이상의
멀티에이전트 실행이다. audit 단계만 먼저 돌리고 Gate 1에서 멈추는 것이 낮은 비용으로 판단
재료를 얻는 길이다.

---

## 원문 (수령본 그대로)

좋은 시점입니다. 지금 필요한 것은 메인 페이지를 다시 "꾸미는" 일이 아니라, **축적된 지식 자산을 고객이 탐색하고 신뢰하고 행동하게 만드는 편집·제품 시스템으로 전환하는 일**입니다.

현재 블로그는 이미 단순한 회사 블로그의 규모를 넘어섰습니다. 메인 페이지 기준 345개 글 가운데 Tech Insights가 200개이고, 4개 대분류와 검색, 다수의 Claude Skill, 별도 에이전트, 결정론적 검증 도구로 상당히 고도화되어 있습니다. 문제는 이제 **콘텐츠 생산 능력보다 콘텐츠를 조직하고 사업 가치로 연결하는 능력**입니다.

### 먼저 보이는 현재 메인 페이지의 핵심 문제

현재 홈은 대체로 다음 흐름입니다.

> 브랜드 메시지 → 최신 글 → 검색 → 키워드 → Tech·Business·Art·Story의 긴 카드 목록 → RSS → 창업자 소개

이는 기존 독자가 글을 찾아보는 데는 유용하지만, 페블러스를 처음 방문한 잠재 고객에게는 다음 질문에 바로 답해주지 못합니다.

* 페블러스가 내 문제를 어떻게 해결하는가?
* 우리 회사는 어떤 서비스를 받아야 하는가?
* 실제 데이터 품질 진단 사례가 있는가?
* Physical AI, DataClinic, Data Greenhouse는 서로 어떻게 연결되는가?
* 상담이나 PoC를 어디서 시작하는가?

Hero에는 철학적인 브랜드 문장은 있지만 명확한 주 행동 버튼이 없습니다. 문의는 데스크톱에서 작은 봉투 아이콘으로만 표현되고, 한국어 페이지에서도 영문 문의 페이지로 연결됩니다. 데스크톱 내비게이션에는 Wiki가 없지만 모바일 메뉴에는 있습니다. 검색창 아래에는 검색하기 전부터 `검색 결과 (0)` 패널이 노출되고, 키워드는 HTML에 직접 나열되어 있습니다.

또한 홈의 4개 카테고리는 **편집자의 분류**이지 **고객의 목적**은 아닙니다. 345개 글을 Tech, Business, Art, Story로 나누는 것만으로는 방문자가 자신에게 필요한 경로를 찾기 어렵습니다. 현재 구조는 카테고리별 카드 그리드가 계속 이어지는 형태이므로, 글이 늘어날수록 선택 피로와 스크롤 길이도 커질 가능성이 높습니다.

조금 더 세밀하게 보면 조직 정보의 진본 여부도 자동 검증할 필요가 있습니다. 홈의 Organization 구조화 데이터에는 설립연도가 `2020`으로 기록돼 있지만, 회사 소개 글에는 2021년 11월 설립으로 설명돼 있습니다. 이런 불일치는 검색엔진뿐 아니라 앞으로 에이전트가 회사 정보를 재사용할 때도 누적됩니다.

### 프롬프트 하나보다 '증거 기반 디자인 하네스'

Claude에게 "전문가처럼 분석해서 홈페이지를 개선해줘"라고만 하면 높은 확률로 다음 결과가 나옵니다.

* 익숙한 SaaS 랜딩페이지를 모방한다.
* 그럴듯하지만 페블러스답지 않은 문구를 만든다.
* 콘텐츠 구조를 충분히 읽지 않고 Hero와 카드 디자인부터 바꾼다.
* 자신이 만든 디자인을 자신이 평가해 모두 좋다고 결론낸다.
* 기존 SEO·이중언어·테마·콘텐츠 파이프라인을 일부 깨뜨린다.

따라서 아래와 같이 **오케스트레이터 1명 + 전문 에이전트 6~7명 + 독립 평가자 + 결정론적 도구**로 구성하는 편이 좋습니다.

#### 추천 에이전트 구성

| 에이전트 | 책임 | 핵심 산출물 |
| --- | --- | --- |
| Company Intelligence | 회사, 제품, 기술, 고객, 증거, 브랜드 철학 이해 | `company-model.yaml` |
| Content Cartographer | 전체 글·태그·허브·내부 링크·중복·언어쌍 분석 | `content-graph.json`, 콘텐츠 지도 |
| UX Researcher | 현재 홈의 탐색성, 인지 부하, 모바일·접근성 분석 | UX 감사 보고서 |
| Customer Journey Strategist | 고객 유형, JTBD, 전환 경로와 CTA 설계 | 고객 여정 지도 |
| Information Architect | 내비게이션, 허브, 콘텐츠 분류체계 재설계 | 사이트맵·홈 IA |
| Brand & Visual Designer | 페블러스 고유의 시각 언어와 디자인 시스템 정리 | 디자인 원칙·토큰·3개 콘셉트 |
| Frontend Prototyper | 정적 사이트 제약 안에서 프로토타입 구현 | A/B/C 정적 프로토타입 |
| Independent Evaluator | 작성 에이전트와 독립적으로 점수화·회귀 검사 | 평가표·채택 권고 |

중요한 점은 **오케스트레이터가 직접 디자인하거나 코딩하지 않는 것**입니다. 오케스트레이터는 작업을 배분하고 증거와 산출물을 관리하며 단계별 통과 여부만 결정합니다.

### 추천 루프

#### 1. Baseline Freeze

처음에는 어떠한 코드도 수정하지 않습니다. 수집할 항목:

* 데스크톱·태블릿·모바일 스크린샷
* Lighthouse 성능
* 접근성 검사
* DOM·네트워크 요청·JS 오류
* 전체 콘텐츠 수와 분포
* 상위 태그와 중복 태그
* 내부 링크 구조
* CTA 위치와 링크
* GA4 및 Search Console 데이터

GA4는 현재 홈에 이미 연결되어 있으므로, 향후 디자인 변경 전후의 행동 이벤트를 정의하는 것이 가능합니다. 다만 에이전트가 분석 데이터에 접근하지 못한다면 추정하지 말고 `MISSING_DATA`로 기록하도록 해야 합니다.

#### 2. Company Model

회사 이해를 자연어 문서 하나로 끝내지 말고 구조화합니다.

```yaml
mission:
positioning:
products:
  - name:
    target_problem:
    target_customer:
    proof:
    related_content:
technologies:
customer_segments:
claims:
  verified:
  needs_verification:
brand_metaphors:
forbidden_expressions:
```

모든 사실에는 출처 URL이나 저장소 파일 경로를 붙입니다. 검증되지 않은 "유일한", "세계 최초", "최고" 같은 문구는 별도 목록으로 격리합니다.

#### 3. Content Graph

345개 글을 단순히 네 카테고리로 분류하지 말고 다음 축으로 다시 분석합니다.

* 고객 문제 / 산업 분야 / 제품·서비스 / 기술 개념 / 고객 여정 단계 / 콘텐츠 깊이 / 증거 유형 / 언어 / 최신성 / 사업 기여도

예를 들어 하나의 글이 다음처럼 여러 축에 동시에 연결돼야 합니다.

```text
Isaac Sim 글
→ Physical AI → 합성데이터 → PebbloSim → 로봇 개발사
→ 문제 인식 단계 → 기술 신뢰 형성 → 상담 연결 가능
```

이 그래프가 만들어져야 홈의 추천, 허브, 관련 글, 고객별 경로를 자동화할 수 있습니다.

#### 4. 세 가지 IA를 먼저 만들기

코드를 만들기 전에 서로 다른 전략을 비교해야 합니다.

* **A. Editorial-first** — 미디어·연구소처럼 지식과 최신 글 중심.
* **B. Solution-first** — DataClinic, Data Greenhouse, PebbloSim과 고객 문제 중심.
* **C. Hybrid** — 상단은 회사·솔루션·신뢰 형성, 하단은 편집형 콘텐츠 탐색.

페블러스에는 **Hybrid 방식**이 가장 적합할 가능성이 높습니다. 블로그의 지적 깊이를 잃지 않으면서도 사업 전환을 강화할 수 있기 때문입니다.

### 추천하는 메인 페이지 정보 구조

아직 확정안이 아니라 에이전트가 검증할 출발점입니다.

1. **Hero** — 한 문장 가치 제안 + `데이터 품질 진단 알아보기` + `Physical AI 데이터 전략 보기`
2. **무엇이 필요하신가요?** — AI 데이터 품질 진단 / 합성데이터 / Physical AI 학습데이터 / ISO·AI 규제 준비 / 회사·기술 소개
3. **신뢰 증거** — 진단 데이터 규모, 특허·표준, 대표 프로젝트, 실제 사례
4. **솔루션과 콘텐츠 연결** — DataClinic / Data Greenhouse / PebbloSim / AADS, 각각 설명·사례·관련 글·CTA
5. **Curated Insights** — 최신 4 + 편집자 추천 4 + 고객 유용 대표 4 (전체를 홈에 다 펼치지 않음)
6. **Topic Hubs** — Physical AI / AI-Ready Data / Data Quality / Synthetic Data / Data Governance / Neuro-Symbolic AI
7. **Data Art** — 페블러스의 차별화된 철학과 시각 문화로 별도 강조
8. **회사·창업자** — 개인 이력만이 아니라 팀·회사·기술 철학·역사 연결
9. **전환 영역** — 무료 데이터 진단/상담, 뉴스레터·RSS, 다운로드 리포트

### 평가 함수가 있어야 진지해집니다

에이전트에게 "좋아 보이는가?"를 묻지 말고 100점 평가표를 줍니다.

| 평가 항목 | 배점 |
| --- | -: |
| 고객 문제와 페블러스 가치가 10초 내 이해되는가 | 20 |
| 핵심 고객 경로가 명확한가 | 15 |
| 콘텐츠 탐색과 검색이 쉬운가 | 15 |
| 상담·PoC 전환 경로가 자연스러운가 | 15 |
| 페블러스만의 기술·예술 정체성이 드러나는가 | 10 |
| 모바일·접근성·성능 | 10 |
| SEO·URL·이중언어 회귀가 없는가 | 10 |
| 정적 사이트 유지보수성이 좋은가 | 5 |

추가 자동 실패 조건:

* 기존 URL 변경 또는 삭제
* KO/EN 링크 회귀
* Lighthouse 주요 점수 하락
* 키보드 탐색 불가
* CTA가 모든 페이지에서 영문으로만 연결
* Structured Data 오류 증가
* 새 프레임워크 도입 근거 없음
* 콘텐츠나 제품 주장에 출처 없음

### 저장소 구조에 맞춘 하네스

현재 저장소는 이미 `blog-service`를 방법론·도구의 진본으로, 공개 GitHub Pages 저장소를 콘텐츠와 라이브 사이트로 분리하고 있습니다. 따라서 이 규칙을 디자인 작업에도 그대로 적용해야 합니다. 스킬·에이전트·공통 CSS·공통 JS는 `blog-service`에서 관리하고, 홈의 `index.html`과 콘텐츠 변경은 공개 저장소에서 작업해야 합니다.

```text
blog-service/
├── .claude/
│   ├── skills/homepage-redesign/SKILL.md
│   └── agents/
│       ├── company-intelligence.md
│       ├── content-cartographer.md
│       ├── ux-auditor.md
│       ├── conversion-strategist.md
│       ├── information-architect.md
│       ├── visual-designer.md
│       ├── frontend-prototyper.md
│       └── homepage-evaluator.md
├── docs/homepage-redesign/
│   ├── brief.md
│   ├── company-model.yaml
│   ├── evidence-register.jsonl
│   ├── content-map.md
│   ├── user-journeys.md
│   ├── ia-options.md
│   ├── design-principles.md
│   └── decision-log.md
├── evals/homepage-rubric.yaml
└── tools/homepage-audit/
    ├── capture.mjs
    ├── lighthouse.mjs
    ├── accessibility.mjs
    ├── link-check.mjs
    └── compare-results.mjs

pebblous.github.io/
├── experiments/homepage-v2/
│   ├── editorial/
│   ├── solution/
│   └── hybrid/
└── index.html
```

멀티 에이전트 작업에서는 기존 저장소의 브랜치·worktree 정책을 그대로 따라야 합니다. 특히 공통 CSS·JS와 에이전트 정책 파일은 전체 사이트에 영향을 미치므로, 프로토타입 단계에서는 격리된 worktree와 별도 브랜치를 사용하게 해야 합니다.

### 오케스트레이터용 마스터 프롬프트

아래 프롬프트를 `homepage-redesign/SKILL.md`의 핵심 지시문으로 사용할 수 있습니다.

> # Pebblous Blog Evidence-Driven Homepage Redesign
>
> 당신은 Pebblous Blog 홈페이지 재설계 프로젝트의 오케스트레이터다. 대상 사이트는 `blog.pebblous.ai`이며, GitHub Pages 기반의 정적 웹사이트다.
>
> 이 프로젝트의 목적은 단순히 시각적으로 더 아름다운 홈페이지를 만드는 것이 아니다. 축적된 페블러스의 콘텐츠와 기술 자산을 방문자가 이해하고, 탐색하고, 신뢰하고, 적절한 사업 행동으로 이동할 수 있도록 홈페이지의 정보 구조, 사용자 경험, 브랜드 경험, 전환 구조를 개선하는 것이다.
>
> ## 저장소 규칙
>
> 두 저장소의 역할을 혼동하지 않는다.
>
> * `joohaeng-pbls/blog-service` — Claude Skills, Agent 정의, 방법론과 정책, 공통 CSS·JavaScript, 검증·빌드·발행 도구의 진본
> * `pebblous/pebblous.github.io` — GitHub Pages 라이브 사이트, 홈 `index.html`, 기사·이미지·articles metadata, 콘텐츠 자산
>
> 진본과 사본 정책을 먼저 읽고, 수정할 파일의 source of truth를 확인한 후에만 작업한다. 기존 브랜치와 worktree 정책을 준수한다. main 브랜치에서 직접 작업하지 않는다.
>
> ## 절대 원칙
>
> 1. 조사와 진단이 끝나기 전에는 프로덕션 코드를 수정하지 않는다.
> 2. 모든 중요한 판단은 증거에 연결한다.
> 3. 증거 없이 경쟁사 스타일이나 일반적인 SaaS 템플릿을 모방하지 않는다.
> 4. 페블러스의 기술적 깊이, 데이터의 기하학적·시각적 관점, 기술과 예술의 결합을 보존한다.
> 5. 기존 URL, SEO 자산, KO/EN 구조, 테마, 읽은 글, RSS, 검색 기능을 함부로 제거하지 않는다.
> 6. 새로운 프레임워크는 측정 가능한 필요성과 사람의 승인이 없으면 도입하지 않는다.
> 7. 작성 에이전트가 자신의 결과를 최종 평가하지 않는다.
> 8. 분석 데이터가 없으면 추측하지 말고 `MISSING_DATA`로 표시한다.
> 9. 검증되지 않은 "최초", "유일", "최고" 등의 주장을 만들지 않는다.
> 10. 하나의 거대한 변경보다 검증 가능한 작은 단계와 PR을 선호한다.
>
> ## 실행 모드
>
> * `audit`: 읽기 전용 조사와 진단
> * `strategy`: 고객 여정과 정보 구조 설계
> * `concepts`: 세 가지 디자인 방향 및 프로토타입 생성
> * `evaluate`: 기존안과 후보안 비교 평가
> * `implement`: 승인된 안 구현
> * `full`: 전체 과정을 단계별 승인 게이트와 함께 수행
>
> 모드가 지정되지 않으면 `audit`부터 시작한다.
>
> ## 전문 에이전트
>
> (Company Intelligence / Content Cartographer / UX Auditor / Customer Journey Strategist / Information Architect / Brand and Visual Designer / Frontend Prototyper / Independent Evaluator — 각 역할·산출물은 본문 표와 동일)
>
> UX Auditor의 모든 finding은 finding_id / observation / evidence / user impact / business impact / severity / confidence / recommendation / validation method 형식을 따른다.
>
> Customer Journey Strategist는 최소 다음 방문자 유형을 검토한다: 데이터 품질 문제를 가진 AI 개발 책임자, Physical AI 또는 로봇 기업, 데이터·AI 거버넌스 담당자, 연구자와 데이터 과학자, 투자자와 사업 파트너, 기술·데이터 아트에 관심 있는 일반 독자.
>
> Brand and Visual Designer는 다음 질문에 답한다: 데이터가 보이고 만져진다는 철학을 어떻게 표현할 것인가? 기술적 신뢰성과 예술적 독창성을 어떻게 함께 보여줄 것인가? Orange·charcoal·white와 Pebbly 자산을 어느 정도 사용할 것인가? 기사 카드와 솔루션 카드가 어떻게 구분되어야 하는가? 장식이 아니라 정보 구조를 돕는 시각 요소는 무엇인가?
>
> Frontend Prototyper는 기존 콘텐츠를 사용하며 가짜 고객 로고, 가짜 수치, 가짜 사례를 만들지 않는다. 기존 기술 스택을 유지하고, 공통 코드를 수정하기 전에는 프로토타입 디렉토리 내부에서 변경을 격리한다.
>
> Independent Evaluator는 프로토타입 작성 과정에 참여하지 않으며, 현재 홈페이지와 모든 후보안을 동일한 평가표로 블라인드 평가한다. 정성적 평가와 결정론적 검사 결과를 분리해 보고한다.
>
> ## 단계별 승인 게이트
>
> * **Gate 1**: 회사 모델, 콘텐츠 지도, 현재 UX 감사가 완성된 후
> * **Gate 2**: 세 가지 IA와 디자인 방향이 제안된 후
> * **Gate 3**: 프로토타입 평가와 최종 구현안이 결정된 후
>
> 승인 전에는 다음 단계의 프로덕션 변경을 하지 않는다.
>
> ## 최종 산출물
>
> Executive Summary / 현재 홈페이지의 강점 / 주요 사용자·사업 문제 / 증거 기반 발견사항 / 콘텐츠 구조 분석 / 고객 여정 / IA 후보 비교 / 디자인 방향 비교 / 프로토타입 평가 / 추천안 / 구현 범위 / 리스크와 롤백 계획 / 측정 계획 / 변경 파일 목록 / 검증 결과
>
> 모든 추천은 다음 세 질문에 답해야 한다: 어떤 증거 때문에 필요한가? 어떤 사용자의 어떤 문제를 해결하는가? 적용 후 무엇을 측정해 성공 여부를 판단할 것인가?

이 프롬프트는 한 번에 구현까지 돌리지 말고, 처음에는 반드시 `MODE=audit`로 실행하는 것이 좋습니다.

### 실제 운영 방식

```text
/homepage-redesign audit
/homepage-redesign strategy
/homepage-redesign concepts
/homepage-redesign evaluate
/homepage-redesign implement
```

첫 번째 실행의 목표는 코드가 아니라 다음 다섯 파일을 얻는 것입니다.

```text
company-model.yaml
content-graph.json
baseline-audit.md
user-journeys.md
homepage-opportunity-map.md
```

이 산출물을 사람이 읽고 방향을 고른 뒤에만 프로토타입을 만들면 됩니다. 바이브 코딩의 속도는 유지하되, **바이브 앞에 증거를 놓는 방식**입니다. 에이전트가 날개를 달더라도 나침반까지 맡겨버리면 가끔 아주 자신 있게 북극 대신 지하주차장으로 갑니다.

가장 좋은 첫 작업은 `blog-service`에 **읽기 전용 `/homepage-redesign audit` 스킬과 독립 UX 평가자**를 추가하는 것입니다. 이후 회사 모델과 콘텐츠 그래프가 충분히 정확해졌을 때 디자인·구현 에이전트를 연결하는 순서가 안전합니다.
