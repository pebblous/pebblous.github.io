---
name: self-review
description: >
  블로그/보고서 콘텐츠·스타일·SEO 자기검토 하네스.
  content-reviewer, style-reviewer, seo-reviewer 3개 에이전트를 병렬 실행하고
  통합 리포트를 출력한다.
  "자기검토 해줘", "리뷰해줘", "self-review", "내용 검토" 요청 시 이 스킬 사용.
argument-hint: "[html-path] (선택: meta-json-path)"
---

# self-review: 자기검토 오케스트레이터

## 실행 모드: 병렬 3-way 팬아웃 → 통합 보고

## 에이전트 구성

| 에이전트 | 역할 | 출력 |
|---------|------|------|
| content-reviewer | 콘텐츠 완성도 (So What, 논리, 페블러스 연관성) | `_workspace/review/01_content_review.md` |
| style-reviewer | HTML 구조 + 스타일 규칙 준수 | `_workspace/review/02_style_review.md` |
| seo-reviewer | 메타태그, og/twitter, hreflang, 키워드 | `_workspace/review/03_seo_review.md` |

## 실행 절차

### Step 0: 준비

```bash
mkdir -p /workspace/extra/repos/pebblous.github.io/_workspace/review
```

HTML 파일 경로와 (선택적) 메타 JSON 경로 확인.

### Step 1: 3-way 병렬 실행

3개 에이전트를 동시에 스폰 (`run_in_background=True`):

```python
# 동시에 실행
Agent(
  name="content-reviewer",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/content-reviewer.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    검토 대상: [html_path]
    합성 문서 (있으면): [synthesis_path]

    출력: _workspace/review/01_content_review.md
  """
)

Agent(
  name="style-reviewer",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/style-reviewer.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    검토 대상: [html_path]

    출력: _workspace/review/02_style_review.md
  """
)

Agent(
  name="seo-reviewer",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/seo-reviewer.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    검토 대상: [html_path]
    메타 JSON (있으면): [meta_json_path]

    출력: _workspace/review/03_seo_review.md
  """
)
```

### Step 2: 완료 대기 후 통합 리포트

3개 파일 확인:
- `_workspace/review/01_content_review.md`
- `_workspace/review/02_style_review.md`
- `_workspace/review/03_seo_review.md`

통합 리포트 생성 → `_workspace/review/00_summary.md`:

```markdown
# 자기검토 통합 리포트 — {포스트 제목}

검토 일시: {datetime}
검토 대상: {html_path}

---

## 총평

| 영역 | 점수 | 주요 이슈 |
|------|------|---------|
| 콘텐츠 | X✅ Y⚠️ Z❌ | ... |
| 스타일 | X✅ Y⚠️ Z❌ | ... |
| SEO | X✅ Y⚠️ Z❌ | ... |

**즉시 수정 필요 (❌)**: N건
**개선 권장 (⚠️)**: N건

---

## 콘텐츠 리뷰 요약
{01_content_review.md 핵심 내용}

## 스타일 리뷰 요약
{02_style_review.md 핵심 내용}

## SEO 리뷰 요약
{03_seo_review.md 핵심 내용}

---

## 수정 실행 계획

### 즉시 수정 (퍼블리싱 전 필수)
1. [❌ 항목] — 수정 방법
2. ...

### 개선 권장 (다음 버전에서)
1. [⚠️ 항목] — 개선 방향
2. ...
```

### Step 3: 사용자 보고

통합 리포트 주요 내용을 메시지로 전달.
❌ 건이 있으면 즉시 수정 진행 여부 물음.

## 에러 핸들링

| 상황 | 처리 |
|------|------|
| 에이전트 1개 타임아웃 | 나머지 2개 결과로 부분 통합 리포트 생성, 실패 영역 명시 |
| HTML 파일 없음 | 오류 메시지 후 중단 |
| _workspace/review 없음 | `mkdir -p`로 자동 생성 |

## 언제 사용하는가

- 블로그/보고서 작성 완료 직후, 퍼블리싱 전
- report-produce 파이프라인의 Phase 4.5 (writer → publisher 사이)
- 기존 포스트 품질 개선 시
- PR 머지 전 자체 검증
