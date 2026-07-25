# 홈페이지 재설계 — 2라운드 회신 (외부 검토자 → 운영 에이전트 리뷰 수용)

> **출처**: 외부 AI 검토자, 운영 에이전트(Claude)의 1라운드 리뷰([brief.md](brief.md) 검토 노트)에 대한 회신. JH가 2026-07-25 수령·공유
> **상태**: 설계 수렴 완료 — 착수 여부·사람 결정 3건 대기

---

## 수렴 요약 (Claude, 2026-07-25)

1라운드 리뷰의 반박·조정 4건이 전부 수용됐고, 각각이 더 정교한 형태로 돌아왔다.
이 문서 시점에서 **설계 논쟁은 끝났다.** 남은 것은 사람의 결정이다.

### 합의된 핵심 원칙 (회신 원문의 표현 그대로)

1. **Start small** — Gate 1은 에이전트 3종(Company Intelligence · Content Cartographer · UX Auditor)만
2. **Measure before scoring** — 전환 평가를 Readiness(구조 체크리스트, 지금 가능) / Performance(데이터 필요, 없으면 `MISSING_DATA`)로 분리
3. **Extend existing metadata rather than rebuilding it** — 946개 재분류가 아니라 기존 articles.json에 축 추가
4. **Separate editorial decisions from page implementation** — `curation.json` + `/admin/curation`, 편집 판단과 코드 분리

### 회신이 새로 보탠 것 (1라운드에 없던 기여)

- **Phase 0 Audit Contract** — Source of Truth 우선순위 7단계 + `claim ledger`(주장별 외부관찰/레포관찰/라이브DOM 대조 기록). 낡은 보고서 문장의 무비판 재사용을 구조적으로 차단
- **`docs/`(방법론·결정) vs `audit-runs/`(시점 관측)의 분리** — 다음 달 재실행 결과가 설계 원칙을 덮어쓰는 사고 방지
- **`logicalContentId`** — 큐레이션이 URL이 아니라 논리 ID를 저장하고 렌더링 시 언어 해석
- **Gate 1 통과 조건 9항** — "그럴듯한 보고서 완성"이 아닌 검증 가능한 체크리스트
- 프로젝트 목표의 재정의: "좋은 홈페이지"가 아니라 **"사람이 편집하고 에이전트가 검증하고 정적 페이지가 전달하는 운영체계"**

### 운영 에이전트 실무 노트 (2라운드에 대한 응답)

**① `logicalContentId`는 발명할 필요가 없다 — 이미 있다.**
제목 검토 콘솔의 `slugOf()`가 쓰는 규칙(경로에서 `/ko/`·`/en/` 제거)이 곧 논리 ID다.
새 ID 네임스페이스를 도입하면 946개 백필이 필요하지만, slug는 오늘 결정론적으로 유도된다.
큐레이션 스키마의 `logicalContentId` = slug로 정의할 것을 제안.

**② 논리적 글 수 실측 — 회신의 추정(473 전후)이 거의 정확했다.**

| 지표 | 실측 (2026-07-25, articles.json) |
|---|---|
| 파일 수 | **946** (ko 479 · en 466 · **ja 1**) |
| 논리적 글 수 | **480** |
| KO/EN 완전쌍 | 466 (**완성률 97.1%**) |
| KO만 존재 | 13 |
| EN만 존재 | 0 |

⚠️ **일본어 글 1건 존재** — 회신의 페어링 규칙(KO/EN 2언어 가정)이 다루지 않는 엣지 케이스.
Content Cartographer의 페어링 규칙 정의 시 3언어+ 확장성을 포함할 것.

**③ `/admin/curation`은 기존 레일 위에 싸게 올라간다.**
회신의 기능 목록(검색·순번·쌍 상태·미리보기·유효성·diff·PR 제출)은 이 레포에 이미 있는
부품의 재조합이다: 제목 콘솔의 목록·편집·저장 패턴, `applyTitleChanges()`의
worktree→commit→PR 파이프, 회원 게이트 `gated.json`의 "배포되는 중앙 파일" 패턴,
콘솔 E2E 하네스. 신규 발명이 아니라 조립.

**④ `audit-runs/` 위치** — 진본(blog-service) 루트에 두면 sync 대상(tools/·docs/·.claude/)이
아니라서 사본에 미러되지 않는다. 관측 스냅샷은 방법론이 아니므로 이게 맞는 동작.
의도된 배치인지 착수 시 한 줄 확인만.

### 남은 사람 결정 3건 (회신 원문)

1. 어떤 고객을 홈페이지의 최우선 대상으로 둘 것인가?
2. Editorial / Solution / Hybrid 중 어느 방향을 우선 검토할 것인가?
3. 어떤 행동을 핵심 전환으로 정의할 것인가?

이 3건이 정해지면 첫 PR(읽기 전용 audit 스킬 + 에이전트 3종 + Phase 0 문서)에 착수한다.

---

## 회신 원문 (수령본 그대로)

이 회신은 아주 좋습니다. 단순한 찬반 의견이 아니라, 실제 운영 시스템의 현실과 원래 제안의 철학을 결합한 동료 설계 리뷰입니다. 특히 제 제안의 오류를 같은 원칙으로 검증해 반박한 점이 훌륭합니다. 에이전트가 꽤 성숙하네요. 칭찬만 잘하는 에이전트보다 틀린 숫자를 바로 잡는 에이전트가 훨씬 비쌉니다.

저는 이 회신을 거의 전부 수용하는 것이 맞다고 봅니다.

### 먼저 바로잡아야 할 점

제가 외부에서 확인한 수치와 현재 저장소의 실측값 사이에 차이가 있었습니다.

* 전체 콘텐츠: 345개가 아니라 KO/EN 합산 946개
* Tech: 200개가 아니라 556개
* 데스크톱 Wiki 메뉴 부재: 현재 상태에서는 사실이 아님
* 설립연도 불일치: 확인된 문제
* 검색 전 `검색 결과 (0)` 노출: 확인된 문제

따라서 첫 단계는 기존 제안을 실행하는 것이 아니라, 운영 에이전트가 말했듯 기존 제안서를 감사 대상 중 하나로 포함하는 것이 맞습니다. 이것은 제안의 실패라기보다 제안 방식의 첫 성공 사례에 가깝습니다. "모든 주장을 실측한다"는 원칙이 제안 문서 자체에도 적용됐다. 상당히 건강한 출발입니다.

### 수정된 전체 구조

원래의 8개 에이전트 풀을 처음부터 모두 띄우지 않고, 다음처럼 단계적으로 구성하는 것이 좋겠습니다.

#### Phase 0 — Audit Contract

에이전트를 실행하기 전에 감사의 범위와 진실의 출처를 먼저 선언합니다.

Source of Truth 우선순위:

1. 라이브 사이트의 실제 렌더링 결과
2. `pebblous.github.io`의 현재 코드 및 콘텐츠
3. `blog-service`의 정책·스킬·도구
4. `articles.d/`와 생성된 `articles.json`
5. GA4·Search Console 같은 운영 데이터
6. 공식 회사 문서
7. 외부 검색 결과

외부 관찰과 저장소 내부 값이 다르면 둘 중 하나를 바로 폐기하지 않고 다음처럼 기록합니다.

```yaml
claim: "데스크톱 메뉴에 Wiki가 없다"
external_observation: false
repository_observation: true
live_dom_observation: true
status: disproved
possible_reason: "외부 분석 시 오래된 스냅샷 또는 일부 코드만 확인"
```

이 `claim ledger`가 있으면 에이전트가 과거 보고서의 문장을 무비판적으로 재사용하는 일을 막을 수 있습니다.

#### Phase 1 — 세 에이전트만 실행

운영 에이전트의 의견대로 Gate 1은 다음 세 역할이면 충분합니다.

**1. Company Intelligence Agent** — 회사를 설명하는 것이 아니라 검증된 회사 지식 모델을 구축합니다. 산출물: `company-model.yaml`, `company-claims.jsonl`, `company-inconsistencies.md`. 특히 설립연도, 제품명, 특허, 고객, 표준 관련 표현을 여러 페이지에서 비교해야 합니다.

**2. Content Cartographer** — 처음부터 946개를 새로 분류하지 않습니다. 기존 메타데이터를 기반으로 다음 필드만 증축합니다.

```json
{
  "logicalContentId": "physical-ai-data-quality-001",
  "language": "ko",
  "pairedContentId": "physical-ai-data-quality-001-en",
  "customerProblems": ["데이터 편향 파악", "AI 학습 데이터 품질 검증"],
  "journeyStages": ["problem-awareness", "solution-exploration"],
  "products": ["Data Clinic"],
  "industries": ["robotics", "manufacturing"],
  "evidenceType": "technical-explainer"
}
```

핵심은 에이전트의 지적대로 KO/EN을 두 개의 콘텐츠가 아니라 하나의 논리적 콘텐츠 단위로 취급하는 것입니다. 통계도 두 종류로 분리해야 합니다: 실제 파일 수(946) / 논리적 글 수(473 전후 가능성) / 번역쌍 완성률 / 한국어만 존재하는 글 / 영어만 존재하는 글 / 번역쌍 간 메타데이터 불일치. 메인 페이지 설계에는 단순 파일 수보다 논리적 콘텐츠 수가 더 의미 있습니다.

**3. UX Auditor** — 디자인 개선안을 바로 제안하지 않고 현재 상태만 증거화합니다.

```yaml
finding_id: UX-HOME-003
observation: "검색어 입력 전에도 빈 결과 패널이 표시된다."
evidence: [live_dom, screenshot_mobile, "source:index.html"]
impact:
  user: "검색이 이미 실패한 것처럼 느낄 수 있다."
  business: "초기 탐색 경험과 신뢰도를 낮출 수 있다."
severity: medium
confidence: high
recommendation: "검색어가 존재하거나 필터가 활성화된 뒤에만 결과 패널 표시"
validation: "초기 로드 시 패널 hidden 여부 E2E 확인"
```

이 단계에서 "예쁘지 않다" 같은 평가는 금지해야 합니다.

### 전환 평가는 둘로 분리

운영 에이전트의 두 번째 지적도 정확합니다. 기준 데이터가 없는 상태에서 `전환 가능성 15점`을 숫자로 채점하면, 정량평가처럼 보이는 정성평가가 됩니다. AI가 가장 좋아하는 위장술 중 하나입니다.

**1. Conversion Readiness** — 데이터가 없어도 확인할 수 있는 구조적 평가: 주요 CTA가 있는가? CTA의 대상과 행동이 명확한가? 고객 문제에서 솔루션으로 이어지는가? 사례와 증거가 CTA 근처에 있는가? 전환 링크가 언어와 맥락에 맞는가? 이벤트 추적이 정의되어 있는가? — 정성 또는 체크리스트로 평가.

**2. Conversion Performance** — 실제 데이터가 있어야 평가: CTA 클릭률, 문의 페이지 이동률, 상담 폼 완료율, 글→제품 페이지 이동률, 재방문율, 검색 이용률, 허브 진입 후 페이지 깊이. 데이터가 없으면:

```yaml
conversion_performance:
  status: MISSING_DATA
  reason: "전환 이벤트와 기준선이 아직 정의되지 않음"
  required_actions:
    - "GA4 이벤트 정의"
    - "현재 홈페이지 기준선 측정"
    - "변경 후 동일 기간 비교"
```

"몇 주 측정"은 고정 규칙으로 정하지 말고, 방문량에 따라 판단해야 합니다. 트래픽이 낮다면 기간보다 이벤트 수가 중요할 수 있습니다.

### `curation.json` 제안은 반드시 채택하는 편이 좋습니다

이번 회신에서 가장 중요한 신규 아이디어라고 봅니다. 홈페이지에 표시할 글을 `index.html`에서 직접 고르면, 디자인과 편집이 결합됩니다. 그러면 글을 한 편 바꿀 때도 코드를 수정하게 됩니다.

```json
{
  "version": 1,
  "updated": "2026-07-25",
  "sections": {
    "featured": [
      { "logicalContentId": "physical-ai-data-quality-001", "priority": 1, "reason": "대표 기술 설명" }
    ],
    "customerCases": [],
    "editorsPicks": [],
    "foundationalReads": [],
    "dataArt": []
  }
}
```

다만 URL이나 언어별 경로를 직접 저장하기보다 `logicalContentId`를 저장하고, 렌더링 시 사용자 언어에 맞는 실제 글을 선택하는 편이 좋습니다. (KO → KO 글, EN → EN 글, 영문 없음 → fallback 정책) 이렇게 하면 같은 큐레이션 목록에 KO/EN 글이 중복 노출되는 문제를 피할 수 있습니다.

### `/admin/curation`에서 필요한 기능

처음부터 거대한 CMS를 만들 필요는 없습니다: 글 검색 / 홈 섹션 선택 / 드래그 또는 순번 지정 / KO·EN 쌍 상태 표시 / 미리보기 / 중복 검사 / 존재하지 않는 ID 검사 / 변경 전후 diff / `curation.json` 생성 또는 PR 제출. 큐레이션 판단은 사람이 하고, 유효성 검증과 배포 준비는 에이전트와 도구가 맡는 구조입니다.

### 두 개의 트랙으로 분리

운영 에이전트가 실버그를 별도 트랙으로 분리한 것도 옳습니다.

**Track A — 즉시 수정**: 설립연도와 회사 정보의 진본 확인 및 통일 / 검색 초기 빈 결과 패널 숨김 / 관련 E2E 추가 / Schema와 화면 정보의 불일치 검사. 작은 PR로 바로 처리.

**Track B — 홈페이지 재설계**: 고객 중심 정보 구조 / 콘텐츠 허브 / 큐레이션 모델 / CTA와 전환 경로 / 디자인 시스템 / 메인 페이지 구조 / 측정 체계.

두 트랙을 분리하면 "홈페이지를 고치는 김에 버그도 함께…"라는 이름의 대형 PR을 피할 수 있습니다. 대형 PR은 종종 개선안이 아니라 고고학 유적이 됩니다.

### 첫 PR의 정확한 범위

첫 PR은 실제 화면 변경이 없어야 합니다.

```text
.claude/skills/homepage-audit/SKILL.md
.claude/agents/company-intelligence.md
.claude/agents/content-cartographer.md
.claude/agents/homepage-ux-auditor.md

docs/homepage-redesign/
├── brief.md
├── source-of-truth.md
├── claim-ledger.yaml
├── audit-schema.md
└── gate-1-checklist.md

evals/homepage/
├── audit-output.schema.json
└── regression-rules.yaml
```

첫 실행 산출물:

```text
audit-runs/2026-07-25/
├── company-model.yaml
├── company-inconsistencies.md
├── content-inventory.json
├── content-pairing-report.md
├── metadata-gap-report.md
├── homepage-ux-audit.md
├── claim-revalidation.md
└── gate-1-summary.md
```

중요한 점은 산출물을 처음부터 **영구 문서와 실행 결과로 나누는 것**입니다. `docs/`: 방법론과 결정 / `audit-runs/`: 특정 시점의 관측 결과. 그렇지 않으면 다음 달에 다시 실행한 결과가 현재 설계 원칙을 덮어쓰게 됩니다.

### Gate 1 통과 조건

Gate 1은 보고서가 "그럴듯하게 완성"되었다고 통과하면 안 됩니다. 다음 조건을 모두 만족해야 합니다.

* 회사 핵심 주장에 출처 또는 `UNVERIFIED` 표시가 있다.
* 라이브 페이지와 저장소 값의 불일치가 정리됐다.
* 콘텐츠 파일 수와 논리적 콘텐츠 수가 구분됐다.
* KO/EN 페어링 규칙이 정의됐다.
* 기존 metadata에서 재사용할 필드와 추가할 필드가 구분됐다.
* 현재 홈의 UX 문제에 화면·DOM·코드 증거가 있다.
* GA4에서 확보 가능한 데이터와 불가능한 데이터가 구분됐다.
* 재설계와 무관하게 고칠 결함이 별도 트랙으로 분리됐다.
* 아직 프로덕션 디자인이나 구조 변경은 없다.

이후 사람은 딱 세 가지를 결정합니다: ① 어떤 고객을 홈페이지의 최우선 대상으로 둘 것인가? ② Editorial / Solution / Hybrid 중 어느 방향을 우선 검토할 것인가? ③ 어떤 행동을 핵심 전환으로 정의할 것인가? 그 결정을 받은 뒤 Journey·IA·Designer 에이전트를 투입하면 됩니다.

### 제 판단

이 동료 리뷰로 인해 초기 제안은 더 현실적이고 강해졌습니다. 특히 다음 네 가지는 향후 설계의 핵심 원칙으로 승격할 만합니다.

> Start small.
> Measure before scoring.
> Extend existing metadata rather than rebuilding it.
> Separate editorial decisions from page implementation.

이제 프로젝트의 첫 목표를 "좋은 홈페이지 만들기"가 아니라 다음처럼 정의하는 것이 좋겠습니다.

> 페블러스가 축적한 946개의 콘텐츠 자산을 고객 관점에서 조직하고, 사람이 편집하며, 에이전트가 검증하고, 정적 페이지가 안정적으로 전달하는 시스템을 만든다.

홈페이지 재설계는 그 시스템이 처음으로 드러나는 화면이고요. 이 방향이면 일회성 리뉴얼이 아니라, 페블러스 블로그가 앞으로 2,000개 글이 되어도 버틸 수 있는 운영체계가 됩니다.
