# Pipeline Engine — Design

> Blog Service의 핵심 엔진. 콘텐츠 파이프라인의 정의, 실행, 상태 관리를 담당.

## Status

**Phase 0 — 설계 (현존 NanoClaw 구현에서 추출)**

본 문서는 [blog-mcp-stdio.ts](../nanoclaw/blog-mcp-stdio.ts)의 동작을 추상화하여 정리. Phase 1에서 Blog Service 코드로 옮길 때의 청사진.

## Conceptual model

```
Pipeline Type → Phase Definitions → Run (instance)
                                      ├── Phase Records (running state)
                                      └── Workspace (intermediate files)
```

| 개념 | 설명 |
|------|------|
| **Pipeline Type** | `blog`, `report`, `dc-story` — 정적 정의 |
| **Phase Definition** | `{ name, model, skill, isGate?, gateMessage?, parallel? }` |
| **Run** | 사용자가 시작한 한 번의 파이프라인 실행 (run_id로 식별) |
| **Phase Record** | 한 phase의 실행 결과 (status, timestamps, output 경로) |
| **Workspace** | `_workspace/.runs/{run_id}/` — 중간 산출물 + state |

## Pipeline Definitions (PIPELINES 상수)

### blog (8 phases)

| # | Phase | Model | Skill | Gate? |
|---|-------|-------|-------|-------|
| 1 | research | sonnet | blog-produce | |
| 2 | write-ko | opus | blog-write | ✓ "한국어 초안 완성. 검토해주세요." |
| 3 | write-en | opus | blog-write | |
| 4 | image-reinforce | opus | image-reinforce | |
| 5 | polish-ko | opus | blog-polish-ko | |
| 6 | polish-en | opus | blog-polish-en | |
| 7 | seo | sonnet | seo-check | |
| 8 | publish-prep | sonnet | blog-publish | |

### report (14 phases, 3-way parallel research)

| # | Phase | Model | Skill | Gate? | Parallel |
|---|-------|-------|-------|-------|----------|
| 1 | pre-risk | sonnet | report-produce | ✓ "사전 위험 평가 완료. 진행할까요?" | |
| 2 | planning | opus | report-produce | | |
| 3 | research-arxiv | sonnet | paper-research | | parallel: research-industry, research-data |
| 4 | research-industry | sonnet | report-produce | | (run with 3) |
| 5 | research-data | sonnet | report-produce | | (run with 3) |
| 6 | synthesis | opus | report-produce | | |
| 7 | write-ko | opus | report-produce | ✓ "한국어 초안 완성. 검토해주세요." | |
| 8 | reinforce | opus | text-reinforce | | |
| 9 | write-en | opus | report-produce | | |
| 10 | image-reinforce | opus | image-reinforce | | |
| 11 | polish-ko | opus | blog-polish-ko | | |
| 12 | polish-en | opus | blog-polish-en | | |
| 13 | seo | sonnet | seo-check | | |
| 14 | publish-prep | sonnet | blog-publish | | |

### dc-story (13 phases, 3-way parallel analysis)

| # | Phase | Model | Skill | Gate? | Parallel |
|---|-------|-------|-------|-------|----------|
| 1 | collect | sonnet | dc-story-produce | | |
| 2 | analysis-l1 | sonnet | dc-story-produce | | parallel: analysis-l2, analysis-l3 |
| 3 | analysis-l2 | sonnet | dc-story-produce | | (run with 2) |
| 4 | analysis-l3 | sonnet | dc-story-produce | | (run with 2) |
| 5 | storyline | opus | dc-story-produce | ✓ "스토리라인 완성. 검토해주세요." | |
| 6 | write-ko | opus | dc-story-produce | ✓ "한국어 초안 완성. 검토해주세요." | |
| 7 | quality-check | opus | dc-story-produce | | |
| 8 | write-en | opus | dc-story-produce | | |
| 9 | image-reinforce | opus | image-reinforce | | |
| 10 | polish-ko | opus | blog-polish-ko | | |
| 11 | polish-en | opus | blog-polish-en | | |
| 12 | seo | sonnet | seo-check | | |
| 13 | publish-prep | sonnet | blog-publish | | |

## State machine

```
       startPipeline()
            ↓
    [running]──────────┐
        │              │
        ↓              ↓
  isGate? yes     phase fails
        │              │
        ↓              ↓
  [paused_at_gate]  [failed]
        │
   resumePipeline()
        │
        ↓
    [running] (next phase)
        │
        ↓ all phases done
    [completed]
```

상태 전이는 atomic — `state.json`에 단일 트랜잭션으로 기록.

## Phase execution flow

각 phase는 다음 절차를 거친다:

1. **Phase prompt build** — `buildPhasePrompt(state, phase)` 호출
   - 스킬 경로(`{skill}/skill.md`) 명시
   - 이전 phase 출력 파일 목록 첨부
   - Run directory 경로 전달
   - 결과: `.current-prompt.md`로 저장
2. **Claude Code spawn** — `claude -p {promptFile} --model {model} --max-turns 50`
   - `--allowedTools`: Read, Write, Edit, Bash, Glob, Grep, WebSearch, WebFetch, Agent
   - `cwd`: 블로그 레포 루트
   - 기본 timeout 600초
3. **Output capture** — stdout을 `{phase}-output.txt`로 저장
4. **State update** — Phase status `completed` + `completedAt` 기록
5. **Gate check** — `phase.isGate`이면 status `paused_at_gate` + `gateMessage` 설정
6. **Next phase or finish** — Gate 아니면 `executeNextPhase` 재귀

### 병렬 phase

`phase.parallel: ['phase-b', 'phase-c']`이 정의되면:
- 현재 phase + parallel 목록의 phase가 동시에 spawn
- `Promise.allSettled`로 결과 대기
- 모두 성공해야 다음 phase 진행 (실패 시 일부 fulfilled, 일부 failed로 마킹)

## Workspace layout

```
_workspace/.runs/{run_id}/
├── state.json                   # RunState (단일 진실)
├── 00_input.md                  # 시작 입력 (type, topic, params)
├── .current-prompt.md           # 현재 phase의 prompt (덮어씀)
├── .prompt-{phase}.md           # 비동기 모드 phase별 prompt
├── .output-{phase}.txt          # 비동기 모드 phase별 stdout
├── {phase}-output.txt           # 동기 모드 phase별 stdout
├── feedback-{phase}.md          # 게이트 통과 시 사용자 피드백
└── {skill-specific files}        # 스킬이 직접 작성한 산출물 (analysis.json, collected.json 등)
```

## Branch convention

```
nanoclaw/{type}/{slug}-{timestamp_base36}
```

- `slug`: topic을 lowercased + 한글 보존 + 비영숫자 → `-` + max 40자
- `timestamp_base36`: 충돌 방지

main에서 분기, 병합은 PR 통해서만. 직접 main push 금지.

## Concurrency & isolation

**현재 (Phase 0/1)**: 단일 인스턴스 가정, 직렬화 권장
- 같은 레포에서 여러 파이프라인 동시 실행 시 git checkout 충돌
- 해결: in-memory 락 또는 큐잉

**미래 (Phase 4 멀티 테넌시)**: git worktree 격리
- 사용자별 worktree 디렉토리
- run별 worktree도 가능 (비용↑)

## Failure modes

| 모드 | 처리 |
|------|------|
| Claude CLI timeout | phase status = failed, error에 timeout 명시, retry는 사용자 결정 |
| Git push 실패 | submit_pr만 실패, run state는 그대로 (다른 클라이언트 통해 재시도 가능) |
| `_workspace/.runs/` 디스크 부족 | 사전 체크 + 운영 알림 |
| Skill 파일 없음 | Claude Code가 prompt 단계에서 인지 → 사용자에게 보고 |
| 외부 API 의존성 (`api.dataclinic.ai` 등) | Skill 내부 처리 — Pipeline Engine은 관여하지 않음 |

## Observability

각 run에 대해 다음을 노출:

- **State 조회** (`/pipelines/{run_id}`): 현재 phase, 완료 시각, 오류
- **Stream** (`/pipelines/{run_id}/stream`): SSE로 phase 전이 이벤트
- **Run dir 직접 조회** (`_workspace/.runs/{run_id}/`): 모든 중간 산출물

운영자는 위 3개로 충분. 추가 메트릭(per-phase 토큰 사용량, 모델별 latency)은 Phase 2+에서 검토.

## Pipeline Engine 분리 시 인터페이스

Phase 1에서 코드를 본 레포 내부로 옮기되, 인터페이스를 다음으로 추상화:

```ts
interface PipelineEngine {
  startPipeline(input: StartInput): Promise<RunState>
  resumePipeline(runId: string, feedback?: string): Promise<RunState>
  cancelPipeline(runId: string): Promise<RunState>
  getStatus(runId: string): RunState | null
  listRuns(filter?: RunFilter): RunSummary[]
  getDraft(runId: string, lang: 'ko'|'en'): DraftFile | null
  startPreview(opts?: PreviewOpts): Promise<PreviewURL>
  createPR(runId: string, opts?: PROpts): Promise<PRResult>
  query(question: string): Promise<string>
  listArticles(filter?: ArticleFilter): ArticleSummary[]
}
```

REST 핸들러와 MCP 핸들러 모두 이 인터페이스를 호출. 구현체는 `BlogRepoPipelineEngine`(현 blog-mcp-stdio.ts 로직).

## Open questions

1. **HTTP MCP 인증**: REST와 같은 API 키 vs 별도 토큰?
2. **상태 저장소**: 현재 파일시스템(`state.json`). Phase 2에서 SQLite로 마이그레이션 필요할까?
3. **취소 후 정리**: 취소된 run의 git branch는 자동 삭제? 보존?
4. **Gate 응답 구조화**: 현재 자유 텍스트 feedback. 구조화된 액션(승인/반려/수정요청) 필요?
5. **모델 라우팅 변경**: 현재 코드에 하드코딩(Sonnet/Opus). 환경변수 또는 설정 파일로 분리?

이 질문들은 Phase 1 코드 작성 시 결정.
