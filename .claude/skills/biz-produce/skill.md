---
name: biz-produce
description: >
  BizReport 비즈 인사이트 시리즈 완전 자동화 파이프라인. 기업명을 받아
  심층 조사 → KO/EN HTML 작성 → 퍼블리싱을 서브 에이전트로 일괄 실행.
  "비즈 인사이트 써줘", "BizReport 작성해줘", "Snowflake 기업 분석 해줘",
  "biz-produce 실행", "비즈 리포트 [기업명]" 요청 시 이 스킬을 반드시 사용.
---

# biz-produce: BizReport 파이프라인 오케스트레이터

## ⛔ Phase 0 필수 읽기 (HTML 작성 전 예외 없음)

biz-writer 에이전트에게 다음을 반드시 Read 툴로 읽도록 지시:
1. `docs/post-writing-lessons-for-pb.md`
2. `.claude/skills/blog-write/references/html-conventions.md`
3. `docs/blog-html-checklist.md`
4. `project/BizReport/applied-intuition-analysis-01/ko/index.html` — 구조 참고 (처음 400줄)

Push 전 검증: `python3 tools/validate-articles.py` 실행 필수.

## 실행 모드: 서브 에이전트 파이프라인

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 출력 |
|---------|--------------|------|------|
| biz-researcher | Explore | 기업 심층 조사 | `_workspace/bizreport/01_research.md` |
| biz-writer | general-purpose | KO+EN HTML 작성 | `project/BizReport/[slug]/ko+en/index.html` |
| blog-publisher | general-purpose | OG + articles.json + git push | 퍼블리싱 완료 |

## 데이터 흐름

```
[입력: 기업명 + 분석 각도]
        ↓
[Phase 1] biz-researcher
        → _workspace/bizreport/01_research.md
        ↓
[Phase 2] biz-writer
        → project/BizReport/[slug]/ko/index.html
        → project/BizReport/[slug]/en/index.html
        → _workspace/bizreport/02_meta.json
        ↓
[Phase 3] blog-publisher
        → OG 이미지 / articles.json / git push
        ↓
[완료 보고]
```

## 오케스트레이터 실행 절차

### Phase 0: 준비

```bash
mkdir -p /workspace/extra/repos/pebblous.github.io/_workspace/bizreport
cd /workspace/extra/repos/pebblous.github.io
git checkout main && git pull origin main
```

입력을 `_workspace/bizreport/00_input.md`에 기록:
- 기업명
- 분석 각도 (예: "데이터 플랫폼 관점에서 페블러스 협력 가능성")
- 참고 기사: project/BizReport/applied-intuition-analysis-01/

### Phase 1: 리서치

```python
Agent(
  name="biz-researcher",
  subagent_type="Explore",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/biz-researcher.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력: _workspace/bizreport/00_input.md
    출력: _workspace/bizreport/01_research.md

    WebSearch와 WebFetch를 적극 활용하여 최신 정보를 수집하라.
    6레이어 조사를 완전하게 수행하라. 특히 구조적 해자 분석을 빠뜨리지 말 것.
  """
)
```

### Phase 2: HTML 작성

Phase 1 완료 확인 후:

```python
Agent(
  name="biz-writer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/biz-writer.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력: _workspace/bizreport/01_research.md
    슬러그 결정: [기업명-analysis-01] 패턴 (예: snowflake-analysis-01)

    ⛔ 작업 시작 전 반드시 Read 툴로 읽을 것:
    1. docs/post-writing-lessons-for-pb.md
    2. .claude/skills/blog-write/references/html-conventions.md
    3. docs/blog-html-checklist.md
    4. project/BizReport/applied-intuition-analysis-01/ko/index.html (처음 400줄 — 구조 참고)

    출력:
    - project/BizReport/[slug]/ko/index.html
    - project/BizReport/[slug]/en/index.html
    - _workspace/bizreport/02_meta.json

    완료 후 검증:
    python3 tools/validate-articles.py
  """
)
```

### Phase 3: 퍼블리싱

```python
Agent(
  name="blog-publisher",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/blog-publisher.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/dc-publish/skill.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    메타데이터: _workspace/bizreport/02_meta.json

    수행 작업:
    1. OG 이미지 생성 (ko + en)
    2. articles.json 등록
    3. python3 tools/validate-articles.py 검증
    4. git commit & push
  """
)
```

### Phase 4: 완료 보고

사용자에게:
- 생성된 기사 경로
- 블로그 URL: `https://blog.pebblous.ai/project/BizReport/[slug]/ko/`
- articles.json 반영 확인
- git push 결과

## BizReport 시그니처 포맷 요약

(biz-writer가 반드시 따라야 할 구조)

1. Executive Summary 카드
2. 기업 프로필 → Chapter Takeaway
3. 제품·기술 스택 → Chapter Takeaway
4. 시장·재무 전략 ("쉬운 설명: 돈 이야기" 포함) → Chapter Takeaway
5. 겹침·공백 분석 (2x2 매트릭스 + 구조적 해자 카드) → Chapter Takeaway
6. 위협·기회·교훈 → Chapter Takeaway
7. FAQ accordion
8. CTA 블록 (DataClinic 데모 신청)

## 에러 핸들링

| 단계 | 실패 | 처리 |
|------|------|------|
| 리서치 부분 실패 | 일부 데이터 미수집 | "(미공개 / 추정)" 명시 후 진행 |
| HTML 검증 실패 | validate-articles.py 오류 | biz-writer에게 수정 재요청 |
| OG 이미지 실패 | puppeteer 오류 | 기존 이미지 복사 후 진행, 사용자 알림 |
| git push 실패 | 충돌 | git pull --no-rebase 후 재시도 |

## 테스트 시나리오

### 정상 흐름
- 입력: "Snowflake 분석해줘, 데이터 클라우드 관점에서 페블러스 협력 가능성"
- 예상 출력: `project/BizReport/snowflake-analysis-01/ko/index.html` + en 버전
- 검증: 6챕터 구조, Takeaway 박스 6개, CTA 블록 존재 확인

### 에러 흐름
- 시나리오: 기업 재무 데이터 미공개
- 예상 처리: "미공개 / 유사 기업 기준 추정 $X~Y억" 형태로 기술
- 검증: "(추정)" 표시 확인

## 사용 예시

```
"Snowflake 비즈 인사이트 써줘"
"Databricks 기업 분석 해줘, 데이터 플랫폼 관점"
"biz-produce Snowflake"
"비즈 리포트 Scale AI"
```
