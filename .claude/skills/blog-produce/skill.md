---
name: blog-produce
description: "blog.pebblous.ai 블로그 포스트 기획부터 퍼블리싱까지 완전 자동화. 주제/아이디어를 받아 리서치 → HTML 작성 → OG 이미지 → articles.json → SEO → changelog → git push를 멀티 에이전트로 일괄 실행. '블로그 써줘', '아티클 작성해줘', '포스트 올려줘', '블로그 포스트 만들어줘' 요청 시 반드시 이 스킬 사용."
---

# Blog Produce — Orchestrator

blog.pebblous.ai 블로그 포스트 전체 프로덕션 파이프라인.

## 실행 모드: 서브 에이전트 (Pipeline)

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 출력 |
|---------|--------------|------|------|
| blog-researcher | Explore | 리서치 + 아웃라인 | `_workspace/01_research.md` |
| blog-writer | general-purpose | HTML 작성 | `[category]/[slug]/ko/index.html`, `_workspace/02_write_meta.json` |
| blog-publisher | general-purpose | OG + articles.json + SEO + git | 퍼블리싱 완료 |

## 워크플로우

### Phase 1: 준비

1. 사용자 입력 파악 — 주제, 카테고리, 언어(KO/EN/both), 특별 요구사항
2. 작업 디렉토리 생성:
   ```bash
   mkdir -p $BLOG_CONTENT_REPO/_workspace
   ```
3. 입력을 `_workspace/00_input.md`에 기록

### SEO 전략 참조

Phase 2 시작 전, `docs/seo-action-plan-2026-03-27.md`를 읽어 현재 SEO 전략을 확인:
- **UrbanGPT 패턴**: 바이럴 소재는 EN 선행 발행 (48h 내) → KO 후속
- **글로벌 노출**: 영문 1개 = 110개국 도달. 트렌드 소재는 EN 퍼스트
- **페블러스 연결**: 외부 제품 분석 → DataClinic/AADS 관점으로 자연스럽게 연결
- **후속 시리즈**: 1회성이 아닌 비교/분석/PebbloPedia로 확장 기획

### Phase 2: 리서치

blog-researcher 서브 에이전트 실행:

```
Agent(
  name: "blog-researcher",
  subagent_type: "Explore",
  model: "opus",
  prompt: """
    당신은 blog-researcher 에이전트입니다.
    에이전트 정의: <repo-root>/.claude/agents/blog-researcher.md
    스킬: <repo-root>/.claude/skills/blog-research/skill.md

    주제: [주제]
    카테고리: [category]
    특별 요구사항: [요구사항]

    콘텐츠 루트: $BLOG_CONTENT_REPO
    출력: _workspace/01_research.md (저장소 루트 기준)
  """
)
```

### Phase 2.5: 참고문헌 정리 (조건부 — 외부 사료 ≥ 3건 시 **필수**)

Phase 2 리서치 결과(`_workspace/01_research.md` 또는 `research_*.md`)에 아래 중 하나라도 **≥ 3건** surfaced 됐으면, **Phase 3 시작 전에 반드시 `bibliography` 스킬을 호출**해 `references.json` 생성:

- **학술 논문** (arxiv, journals, conference papers, preprints)
- **외부 사건 보도** (Rolling Stone, NYT, 회사 공식 블로그, 발표 보도자료 등)
- **공식 문서** (정부 정책 문서, 종교 교의, 회사 공식 statement, 기업 백서, system card 등)
- **인용 가능한 공개 데이터** (산업 보고서, 통계, 백서)

이 조건은 **심층 보고서(report-produce)뿐 아니라 일반 블로그에도 동일하게 적용**된다. 글의 학술적·journalism 톤이 강할수록 참고문헌은 더 필수.

호출 방법:
```
Skill(bibliography) — 입력: research markdown 경로
```

생성 결과: `[category]/[slug]/references.json` (article folder 바로 아래 — KO/EN 공유 SSOT)

> ⚠️ **결함 #5 사례 (2026-05-26 PR #228 — 종교와 AI)**: research가 Dawkins-Claude 72시간 대화, Vatican Antiqua et Nova, Spiralism Rolling Stone 보도, Anthropic System Card "spiritual ecstasy", Chalmers Hard Problem, Pascal's Wager 등 외부 사료 6건을 surfaced 했으나 bibliography 스킬을 호출 안 함 → 학술적 톤 글에 reference-list 누락 + Google Scholar 메타 태그 누락 + citation-download 버튼 누락.
> 이 Phase 2.5의 명시화가 그 방지.

### Phase 3: 작성

Phase 2 완료 후 blog-writer 서브 에이전트 실행:

```
Agent(
  name: "blog-writer",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    당신은 blog-writer 에이전트입니다.
    에이전트 정의: <repo-root>/.claude/agents/blog-writer.md
    스킬: <repo-root>/.claude/skills/blog-write/skill.md

    콘텐츠 루트: $BLOG_CONTENT_REPO
    입력: _workspace/01_research.md
    언어: [KO 또는 both]
    출력 메타: _workspace/02_write_meta.json

    CLAUDE.md 필독: <repo-root>/CLAUDE.md
    HTML 체크리스트: <repo-root>/docs/blog-html-checklist.md (존재 시)
    레이아웃 참고: $BLOG_CONTENT_REPO/report/blog-2026/index.html
  """
)
```

### Phase 3.5: 산문 질감 자기검증 (ko-prose-humanizer, 신규 — 항상 호출)

Phase 3 작성 직후 **반드시** `ko-prose-humanizer` 스킬을 호출해 AI 문체 11 tell을 측정한다.

```
Skill(ko-prose-humanizer) — 입력: [category]/[slug]/ko/index.html
```

판정 분기:
- **총점 < 0.3** (110 만점에 33 미만): 사람 글에 가까움. 결과만 로그에 기록하고 Phase 4로.
- **총점 0.3 ~ 0.5**: 교정 권장. 진단 결과를 보고하고 자동 교정 1회 적용 후 재진단.
- **총점 ≥ 0.5**: 교정 강권. 자동 교정 + 재진단. 그래도 0.5 이상이면 사용자에게 보고.

특히 다음 두 신호는 점수와 무관하게 별도 점검:
- **T1 em-dash 빈도**: 1/500자 미만이면 OK. 1/300자 미만이면 경고. 1/250자 미만이면 자동 교정.
- **T11 자사 연결 작위성**: 본문 마지막 단락에 "그러므로 페블러스의 ...이 자리에 선다" 류 점프가
  있으면 Editor's Note로 분리하도록 권고.

EN 글이면 동일하게 EN 파일에 대해 호출 (영어 추가 패턴 — delve, moreover, em-dash 남용 등).

호출 결과는 `_workspace/03_prose_diagnosis.md`로 저장. 교정 결과가 있으면
`_workspace/03b_prose_humanized.md`에 보관 후 HTML에 적용.

### Phase 3.55: 제목 5초 게이트 (mainTitle 주어 검증 — 항상, 통과 필수)

⛔ **Phase 3.6 진입 전 반드시 통과.** `docs/title-strategy.md §0.0` 제1 기준의 강제 게이트.

작성된 `mainTitle`을 **소리 내어 한 번 읽고** 자문한다:

> **이 제목만 읽고, 무슨 글인지 5초 안에 말할 수 있는가?**

- **말할 수 있음 → 통과.** Phase 3.6으로.
- **말할 수 없음 → FAIL.** 십중팔구 **글의 도메인 주어가 빠진 것**이다(훅·수치 대비만 남음).
  주어를 되살려 다시 쓴 뒤 재검. 통과할 때까지 반복.

특히 아래 두 패턴은 점수와 무관하게 **자동 FAIL**로 잡는다 (§3.1):
- **주어 실종 훅**: 대조·여운·수치 대비는 있는데 "무엇에 관한 글인지" 도메인 명사가 없음.
  예: "3일이 만든 128개, 5개월이 만든 883개"(무엇을 만들었는지 없음) → "반년 만에 블로그 글 883개…"처럼 주어 복원.
- **수치 대비 유혹**: "A → B" 극적 숫자가 있어도 주어를 버리지 않는다. 숫자는 주어를 꾸미는 정보다.

KO·EN 둘 다 검사. EN도 동일 — 숫자만 있고 무엇(posts/articles)인지 없으면 FAIL.
결과는 `_workspace/03d_title_gate.md`에 한 줄로 기록(제목 · 통과/수정 · 수정 사유).

### Phase 3.6: seo-check (KO + EN, 게이트 — 항상 호출)

Phase 4(퍼블리싱) 전 **반드시** `seo-check` 스킬로 KO·EN 각 파일의 4계층을 검증한다.
**4계층 전부 PASS여야 Phase 4로 진행** (report-produce·dc-story-produce와 동일한 게이트).

```
스킬: .claude/skills/seo-check/SKILL.md
- KO와 EN 각각 실행 (4계층: 메타 · OG/Twitter · JSON-LD&FAQ · 기술)
- ⛔ FAQ 게이트: config.faqs 가 있는데 <section id="faq"> 가 HTML에 없으면 FAIL →
  </main> 앞에 <section id="faq" class="mb-16 fade-in-card"></section> 추가 후 재검.
  (이 게이트 누락이 blog 글에서 FAQ 미렌더의 원인이었다 — 2026-06-22.)
```

FAIL 항목은 수정 후 통과할 때까지 재검. 결과는 `_workspace/03c_seo_check.md`에 기록.

### Phase 4: 퍼블리싱

Phase 3.5 통과 후 blog-publisher 서브 에이전트 실행:

```
Agent(
  name: "blog-publisher",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    당신은 blog-publisher 에이전트입니다.
    에이전트 정의: <repo-root>/.claude/agents/blog-publisher.md
    스킬: <repo-root>/.claude/skills/blog-publish/skill.md

    콘텐츠 루트: $BLOG_CONTENT_REPO
    메타데이터: _workspace/02_write_meta.json (저장소 루트 기준)
  """
)
```

### Phase 5: 완료 보고

`_workspace/` 보존 후 사용자에게 요약:
- 생성된 아티클 경로
- 블로그 URL (`https://blog.pebblous.ai/[path]`)
- articles.json 반영 확인
- git push 결과

## 데이터 흐름

```
[사용자 입력]
    ↓
[blog-researcher (Explore)]
    → _workspace/01_research.md
    ↓
[blog-writer (general-purpose)]
    → [category]/[slug]/ko/index.html
    → _workspace/02_write_meta.json
    ↓
[ko-prose-humanizer (Skill)]
    → 11 tell 진단 + 자동 교정 (필요시)
    → _workspace/03_prose_diagnosis.md
    → _workspace/03b_prose_humanized.md (교정 시)
    ↓
[blog-publisher (general-purpose)]
    → OG 이미지 생성
    → articles.json 업데이트
    → SEO 검증
    → changelog.jsonl 기록
    → git push
    ↓
[완료 보고]
```

## 에러 핸들링

| 단계 | 실패 | 처리 |
|------|------|------|
| 리서치 실패 | researcher 미응답 | 1회 재시도 후 주제만으로 직접 작성 |
| 작성 실패 | HTML 생성 안 됨 | 사용자에게 알리고 중단 |
| 퍼블리싱 부분 실패 | OG/articles/git 중 일부 | 실패 단계 명시 후 나머지 진행 |

## 테스트 시나리오

### 정상 흐름
1. "Physical AI 시대의 데이터 엔지니어링 역할 변화에 대한 블로그 써줘"
2. Phase 1: 주제 파악, `_workspace/` 생성
3. Phase 2: researcher → `_workspace/01_research.md`
4. Phase 3: writer → `blog/physical-ai-data-engineering/ko/index.html`
5. Phase 4: publisher → OG + articles.json + git push
6. 결과: blog.pebblous.ai에 새 아티클 게시

### 에러 흐름
1. researcher 웹 검색 실패
2. 오케스트레이터가 감지 → writer를 주제 기반 직접 작성으로 전환
3. writer가 `01_research.md` 없이 아웃라인 + HTML 작성
4. publisher 정상 진행
5. 최종 보고에 "웹 리서치 불충분 — 도메인 지식 기반 작성" 명시
