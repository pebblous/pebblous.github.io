---
name: pebblopedia-produce
description: "PebbloPedia 아티클 전체 제작 파이프라인 오케스트레이터. 주제를 받아 리서치 → HTML 작성 → OG 이미지 → articles.json → git push를 서브 에이전트로 자동 실행. '페블로피디아 써줘', '페블로피디아 [주제]', 'PebbloPedia 만들어줘', '페블로피디아 포스팅해줘' 요청 시 반드시 이 스킬을 사용할 것."
---

# PebbloPedia Produce — Orchestrator

PebbloPedia 시리즈 아티클 전체 제작 파이프라인. Sub-agent Pipeline 패턴.

## 실행 모드: 서브 에이전트 (Pipeline)

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 출력 |
|---------|--------------|------|------|
| pebblopedia-researcher | Explore | 5레벨 리서치 | `_workspace/01_research.md` |
| pebblopedia-writer | general-purpose | HTML 작성 | `pebblopedia/{topic}/ko/index.html` + `_workspace/02_write_meta.json` |
| pebblopedia-publisher | general-purpose | OG + articles.json + git | 퍼블리싱 완료 |

## 워크플로우

### Phase 1: 준비

1. 사용자 입력 파악 — 주제, 특별 요구사항
2. slug 결정 — 영어 소문자, 하이픈 구분 (예: "하네스" → `harness`)
3. 작업 디렉토리 생성:
   ```bash
   mkdir -p /workspace/extra/repos/pebblous.github.io/_workspace
   ```
4. `_workspace/00_input.md` 작성:

```markdown
# PebbloPedia 입력

- 주제: [주제]
- slug: [slug]
- 저장소 루트: /workspace/extra/repos/pebblous.github.io/
- 요청일: YYYY-MM-DD

## special_instructions
- meta_note: [true/false]
- [기타 특별 요구사항]
```

### Phase 2: 리서치

pebblopedia-researcher 서브 에이전트 실행:

```
Agent(
  name: "pebblopedia-researcher",
  subagent_type: "Explore",
  model: "opus",
  prompt: """
    당신은 pebblopedia-researcher 에이전트입니다.
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/pebblopedia-researcher.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/pebblopedia-research/skill.md

    주제: [주제]
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/01_research.md (저장소 루트 기준)

    5개 레벨 모두 충분한 재료를 수집하세요.
  """
)
```

**주의:** Explore 타입은 파일을 직접 쓰지 못할 수 있음.
researcher 결과를 오케스트레이터가 `_workspace/01_research.md`에 저장한다.

### Phase 3: 작성

Phase 2 완료 후 pebblopedia-writer 서브 에이전트 실행:

```
Agent(
  name: "pebblopedia-writer",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    당신은 pebblopedia-writer 에이전트입니다.
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/pebblopedia-writer.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/pebblopedia-write/skill.md

    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    입력: _workspace/00_input.md, _workspace/01_research.md
    HTML 구조 참조: .claude/skills/pebblopedia/SKILL.md
    레이아웃 참고: pebblopedia/physical-ai/ko/index.html
    CLAUDE.md 필독

    출력:
    - pebblopedia/{slug}/index.html (리디렉트)
    - pebblopedia/{slug}/ko/index.html (본문)
    - _workspace/02_write_meta.json
  """
)
```

### Phase 4: 퍼블리싱

Phase 3 완료 후 pebblopedia-publisher 서브 에이전트 실행:

```
Agent(
  name: "pebblopedia-publisher",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    당신은 pebblopedia-publisher 에이전트입니다.
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/pebblopedia-publisher.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/blog-publish/skill.md

    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    메타데이터: _workspace/02_write_meta.json

    PebbloPedia 특이사항:
    - articles.json의 cardTitle에 반드시 "[페블로피디아]" 포함
    - category는 항상 "tech"
    - OG 이미지: pebblopedia/{topic}/ko/image/index.png
  """
)
```

### Phase 5: 완료 보고

`_workspace/` 보존 후 사용자에게 요약:
- 생성된 아티클 경로
- 블로그 URL (`https://blog.pebblous.ai/pebblopedia/{slug}/ko/`)
- articles.json 반영 확인
- git push 결과
- 특이사항 (웹 리서치 제한, 오류 등)

## 데이터 흐름

```
[사용자 입력]
    ↓
[준비] → _workspace/00_input.md
    ↓
[pebblopedia-researcher (Explore)]
    → _workspace/01_research.md
    ↓
[pebblopedia-writer (general-purpose)]
    → pebblopedia/{topic}/index.html (리디렉트)
    → pebblopedia/{topic}/ko/index.html (본문)
    → _workspace/02_write_meta.json
    ↓
[pebblopedia-publisher (general-purpose)]
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
| 리서치 실패 | researcher 미응답 | 1회 재시도 후 도메인 지식 기반 직접 작성 |
| 작성 실패 | HTML 생성 안 됨 | 사용자에게 알리고 중단 |
| 퍼블리싱 부분 실패 | OG/articles/git 중 일부 | 실패 단계 명시 후 나머지 진행 |

## 테스트 시나리오

### 정상 흐름
1. "페블로피디아 하네스에 대해 써줘. 이 하네스 글은 하네스로 자동으로 만들어졌어요 라는 내용도 넣어줘"
2. Phase 1: slug=harness, meta_note=true로 `_workspace/00_input.md` 생성
3. Phase 2: researcher → L1~L5 재료 수집 → `_workspace/01_research.md`
4. Phase 3: writer → `pebblopedia/harness/ko/index.html` (메타 노트 섹션 포함)
5. Phase 4: publisher → OG 이미지(harness/ko/image/index.png) + articles.json + git push
6. 결과: `https://blog.pebblous.ai/pebblopedia/harness/ko/` 게시

### 에러 흐름
1. researcher 웹 검색 실패
2. 오케스트레이터 감지 → writer를 주제 기반 직접 작성으로 전환
3. writer가 `01_research.md` 없이 도메인 지식 기반 5레벨 작성
4. publisher 정상 진행
5. 최종 보고에 "웹 리서치 불충분 — 도메인 지식 기반 작성" 명시
