---
name: report-produce
description: >
  심층조사 보고서 기획부터 퍼블리싱까지 완전 자동화. 주제를 받아
  기획 → 병렬 3트랙 리서치(논문/업계/데이터) → 합성 → HTML 작성 → 퍼블리싱을
  멀티 에이전트로 일괄 실행.
  "심층조사 보고서 써줘", "리포트 작성해줘", "report-produce 실행" 요청 시 이 스킬 사용.
---

# report-produce: 심층조사 보고서 파이프라인 오케스트레이터

## 실행 모드: 서브 에이전트 (Pipeline + 병렬 팬아웃)

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 출력 |
|---------|--------------|------|------|
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

### Phase 0: 준비

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
# 동시에 3개 스폰
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
| 기획 실패 | planner 미응답 | 주제 기반 직접 기획 후 진행 |
| 리서치 트랙 1개 실패 | 2개 트랙만 완료 | 실패 트랙 명시 후 합성 진행 |
| 합성 실패 | synthesizer 미응답 | 3개 트랙 결과 직접 합산 후 진행 |
| 작성 실패 | HTML 생성 안 됨 | 사용자에게 알리고 중단 |
| 퍼블리싱 부분 실패 | OG/articles/git 중 일부 | 실패 단계 명시 후 나머지 진행 |
