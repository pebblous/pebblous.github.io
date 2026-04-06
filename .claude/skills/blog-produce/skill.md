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
   mkdir -p /workspace/extra/repos/pebblous.github.io/_workspace
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
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/blog-researcher.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/blog-research/skill.md

    주제: [주제]
    카테고리: [category]
    특별 요구사항: [요구사항]

    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/01_research.md (저장소 루트 기준)
  """
)
```

### Phase 3: 작성

Phase 2 완료 후 blog-writer 서브 에이전트 실행:

```
Agent(
  name: "blog-writer",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    당신은 blog-writer 에이전트입니다.
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/blog-writer.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/blog-write/skill.md

    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    입력: _workspace/01_research.md
    언어: [KO 또는 both]
    출력 메타: _workspace/02_write_meta.json

    CLAUDE.md 필독: /workspace/extra/repos/pebblous.github.io/CLAUDE.md
    HTML 체크리스트: /workspace/extra/repos/pebblous.github.io/docs/blog-html-checklist.md (존재 시)
    레이아웃 참고: /workspace/extra/repos/pebblous.github.io/report/blog-2026/index.html
  """
)
```

### Phase 4: 퍼블리싱

Phase 3 완료 후 blog-publisher 서브 에이전트 실행:

```
Agent(
  name: "blog-publisher",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    당신은 blog-publisher 에이전트입니다.
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/blog-publisher.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/blog-publish/skill.md

    저장소 루트: /workspace/extra/repos/pebblous.github.io/
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
