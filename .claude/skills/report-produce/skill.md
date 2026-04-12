---
name: report-produce
description: >
  심층조사 보고서 기획부터 퍼블리싱까지 완전 자동화. 주제를 받아
  사전 검토(중복·가치 병렬 판별) → JH 컨펌 → 기획 → 병렬 3트랙 리서치(논문/업계/데이터) → 합성 → HTML 작성 → 퍼블리싱을
  멀티 에이전트로 일괄 실행.
  "심층조사 보고서 써줘", "리포트 작성해줘", "report-produce 실행" 요청 시 이 스킬 사용.
---

# report-produce: 심층조사 보고서 파이프라인 오케스트레이터

## ⛔ Phase 0 필수 읽기 (스킬 실행 전 예외 없이)

HTML 작성 단계(Phase 4) 시작 전, report-writer 에이전트에게 다음 파일을 Read 툴로 읽도록 지시:

1. `docs/post-writing-lessons-for-pb.md` — 작성 규칙 (이중 불릿, SEO-check 등)
2. `.claude/skills/blog-write/references/html-conventions.md` — HTML 정본 (CSS 순서, Hero, 메타)
3. `docs/blog-html-checklist.md` — 완성 후 대조 체크리스트

Push 전 검증: `python3 tools/validate-articles.py` 실행 필수.

## 실행 모드: 서브 에이전트 (Pipeline + 병렬 팬아웃)

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 출력 |
|---------|--------------|------|------|
| topic-coverage-checker | Explore | 직·간접 중복 여부 검색 | `_workspace/report/pre_coverage.md` |
| topic-value-assessor | Explore | 주제 가치 평가 | `_workspace/report/pre_value.md` |
| report-planner | Explore | 조사 범위·구조 설계 | `_workspace/report/00_plan.md` |
| arxiv-researcher | Explore | 논문/학술 트랙 | `_workspace/report/02a_arxiv.md` |
| industry-researcher | Explore | 업계 동향 트랙 | `_workspace/report/02b_industry.md` |
| data-researcher | Explore | 수치/데이터 트랙 | `_workspace/report/02c_data.md` |
| report-synthesizer | general-purpose | 3트랙 통합 + Exec Summary | `_workspace/report/03_synthesis.md` |
| report-writer | general-purpose | HTML 보고서 작성 | `report/[slug]/ko/index.html` |
| blog-publisher | general-purpose | OG + articles.json + git push | 퍼블리싱 완료 |

## 데이터 흐름

```
[사용자 입력: 주제]
        ↓ (병렬)
[Phase Pre] topic-coverage-checker → pre_coverage.md
            topic-value-assessor   → pre_value.md
        ↓
⏸ 결과 요약 → JH 컨펌 대기 (항상 멈춤, 자동 진행 없음)
        ↓ (승인 시)
[Phase 0] 준비 (브랜치, 워크스페이스)
        ↓
[Phase 1] report-planner
        → _workspace/report/00_plan.md
        ↓ (병렬)
[Phase 2] arxiv-researcher  →  02a_arxiv.md
          industry-researcher →  02b_industry.md
          data-researcher     →  02c_data.md
        ↓
[Phase 3] report-synthesizer
        → _workspace/report/03_synthesis.md
        ↓
[Phase 4] report-writer
        → report/[slug]/ko/index.html
        → _workspace/report/04_write_meta.json
        ↓
[Phase 5] blog-publisher
        → OG 이미지 / articles.json / SEO / git push
        ↓
[완료 보고]
```

## 오케스트레이터 실행 절차

### Phase Pre: 사전 병렬 검토

주제 입력 직후, 두 에이전트를 동시에 스폰:

```python
Agent(
  name="topic-coverage-checker",
  subagent_type="Explore",
  run_in_background=True,
  prompt="""
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    대화 이력: /workspace/group/conversations/

    주제: [주제]

    다음을 검색하여 직·간접 중복 여부를 판별하라:
    1. articles.json — 제목·description·tags에서 관련 키워드 검색
    2. story/, report/ 폴더 — HTML 파일 내 관련 내용 검색
    3. /workspace/group/conversations/ — 이 주제를 논의한 기록 검색

    출력: _workspace/report/pre_coverage.md
    형식:
    ## 중복 판정
    - 결론: [신규 / 부분 중복 / 직접 중복]
    - 관련 기사/보고서: (있으면 경로 + 요약)
    - 관련 대화: (있으면 날짜 + 내용 요약)
    - 차별화 가능 각도: (부분 중복이면 새로운 접근법 제안)
  """
)

Agent(
  name="topic-value-assessor",
  subagent_type="Explore",
  run_in_background=True,
  prompt="""
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    주제: [주제]

    다음 기준으로 주제 가치를 평가하라:
    1. 타이밍 — 지금 다루기에 적절한가? (트렌드, 뉴스 사이클)
    2. 페블러스 연결 — DataClinic, AI-Ready Data, 데이터 품질과 접점이 있는가?
    3. 독자성 — 다른 매체와 차별화된 페블러스만의 시각이 가능한가?
    4. 깊이 — 심층조사 보고서 분량(5,000자+)을 채울 수 있는가? 아니면 짧은 블로그가 더 적합한가?
    5. 독자 관심도 — 페블러스 독자(데이터 실무자, AI 관심층)에게 실질적 가치가 있는가?

    출력: _workspace/report/pre_value.md
    형식:
    ## 가치 평가
    - 종합 판정: [강력 추천 / 추천 / 보류 / 비추천]
    - 타이밍: [평가]
    - 페블러스 연결: [평가]
    - 독자성: [평가]
    - 깊이: [심층보고서 적합 / 일반 블로그 적합 / 짧은 포스트 적합]
    - 독자 가치: [평가]
    - 추천 접근법: (어떤 각도로 쓰면 좋은지 1-2줄)
  """
)
```

두 에이전트 완료 후, 오케스트레이터가 결과를 읽고 사용자에게 요약 메시지 전송:

```
📋 사전 검토 완료 — [주제]

[중복 판정]: 신규 / 부분 중복(관련: ...) / 직접 중복
[가치 평가]: 강력 추천 / 추천 / 보류
[추천 형식]: 심층보고서 / 일반 블로그 / 짧은 포스트

→ 진행할까요?
```

⛔ *반드시 여기서 멈추고 JH 확인을 기다린다. 자동으로 Phase 0을 시작하지 않는다.*
JH가 "ㅇㅇ", "진행", "go" 등으로 승인하면 Phase 0으로 이동.
"수정", "보류", "skip" 등이면 그에 따라 처리.

---

### Phase 0: 준비

JH 승인 후 실행:

```bash
mkdir -p /workspace/extra/repos/pebblous.github.io/_workspace/report
cd /workspace/extra/repos/pebblous.github.io
git checkout main && git pull origin main
git checkout -b feat/report-[slug]-pb
```

사용자 입력을 `_workspace/report/00_input.md`에 기록.

### Phase 1: 기획

```python
Agent(
  name="report-planner",
  subagent_type="Explore",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/report-planner.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    주제: [주제]
    특별 요구사항: [요구사항]

    출력: _workspace/report/00_plan.md

    ⛔ 필수 포함 항목:
    00_plan.md에 반드시 "## 페블러스 관심의 이유" 섹션을 포함할 것.
    다음 4가지 각도로 구체적으로 서술:
    1. 비즈니스/기술 연결 (DataClinic, AI-Ready Data, Physical AI 접점)
    2. 데이터 품질 관점 (학습 데이터 → 모델 내부 표현 연결)
    3. 고객/파트너 실무 함의
    4. 페블러스의 포지셔닝 가능성
    이 섹션이 없으면 Phase 4 보고서 작성이 불완전해진다.
  """
)
```

### Phase 2: 병렬 리서치 (3-way 팬아웃)

Phase 1 완료 후 동시 실행:

```python
Agent(
  name="arxiv-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: .claude/agents/arxiv-researcher.md
    기획 문서: _workspace/report/00_plan.md (트랙 A 조사 지시 참조)
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/report/02a_arxiv.md
  """
)

Agent(
  name="industry-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: .claude/agents/industry-researcher.md
    기획 문서: _workspace/report/00_plan.md (트랙 B 조사 지시 참조)
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/report/02b_industry.md
  """
)

Agent(
  name="data-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: .claude/agents/data-researcher.md
    기획 문서: _workspace/report/00_plan.md (트랙 C 조사 지시 참조)
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/report/02c_data.md
  """
)
```

### Phase 3: 합성

3개 트랙 모두 완료 확인 후:

```python
Agent(
  name="report-synthesizer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: .claude/agents/report-synthesizer.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력 파일:
    - _workspace/report/00_plan.md
    - _workspace/report/02a_arxiv.md
    - _workspace/report/02b_industry.md
    - _workspace/report/02c_data.md

    출력: _workspace/report/03_synthesis.md
  """
)
```

### Phase 4: HTML 작성

```python
Agent(
  name="report-writer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: .claude/agents/report-writer.md
    스킬: .claude/skills/blog-write/skill.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력 파일:
    - _workspace/report/00_plan.md
    - _workspace/report/03_synthesis.md

    HTML 템플릿: report/korea-ai-fund-report-2026-03/ko/index.html
    체크리스트: docs/blog-html-checklist.md
    CLAUDE.md: /workspace/extra/repos/pebblous.github.io/CLAUDE.md

    출력:
    - report/[slug]/ko/index.html
    - _workspace/report/04_write_meta.json
  """
)
```

### Phase 5: 퍼블리싱

```python
Agent(
  name="blog-publisher",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: .claude/agents/blog-publisher.md
    스킬: .claude/skills/blog-publish/skill.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    메타데이터: _workspace/report/04_write_meta.json
  """
)
```

### Phase 6: 완료 보고

사용자에게:
- 생성된 보고서 경로
- 블로그 URL (`https://blog.pebblous.ai/report/[slug]/ko/`)
- articles.json 반영 확인
- git push / PR 생성 결과

## 에러 핸들링

| 단계 | 실패 | 처리 |
|------|------|------|
| 사전 검토 실패 | 에이전트 미응답 | 수동으로 결과 요약 후 JH 확인 요청 |
| 기획 실패 | planner 미응답 | 주제 기반 직접 기획 후 진행 |
| 리서치 트랙 1개 실패 | 2개 트랙만 완료 | 실패 트랙 명시 후 합성 진행 |
| 합성 실패 | synthesizer 미응답 | 3개 트랙 결과 직접 합산 후 진행 |
| 작성 실패 | HTML 생성 안 됨 | 사용자에게 알리고 중단 |
| 퍼블리싱 부분 실패 | OG/articles/git 중 일부 | 실패 단계 명시 후 나머지 진행 |
