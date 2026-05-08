# MCP Tools Specification

> Blog Service의 MCP(Model Context Protocol) 인터페이스 명세. REST API([openapi.yaml](openapi.yaml))와 같은 Pipeline Engine을 공유한다.

## Status

**Phase 0 — 명세 (도출 완료, 코드 분리 전)**

본 문서는 현재 NanoClaw 컨테이너에서 동작 중인 MCP 서버([blog-mcp-stdio.ts](../nanoclaw/blog-mcp-stdio.ts))의 9개 툴을 정본으로 정리한 것이다.

## Why MCP separately from REST

- **MCP는 JSON-RPC 기반** — OpenAPI에 자연스럽게 매핑되지 않음
- **MCP 클라이언트가 명확** — Claude Desktop, Claude Code, NanoClaw 같은 LLM 에이전트
- **기능은 같지만 인터페이스가 다름** — REST는 사람·웹앱, MCP는 에이전트가 사용

REST 엔드포인트와 MCP 툴은 1:1 매핑 (REST의 SSE/cancel만 추가).

## Server metadata

```json
{
  "name": "blog",
  "version": "0.1.0"
}
```

## Transport modes

| 모드 | 설명 | 사용처 |
|------|------|--------|
| **stdio** | 자식 프로세스로 spawn 후 stdin/stdout으로 JSON-RPC | NanoClaw 컨테이너 내부, Claude Desktop 로컬 |
| **HTTP MCP** *(planned)* | Streamable HTTP 또는 SSE | 원격 에이전트, 페블러스 외부 클라이언트 |

Phase 1에서는 stdio 유지 + HTTP 모드 추가.

## Tools (9개)

각 툴의 매개변수는 OpenAPI 스키마와 동일 의미. 차이는 호출 방식뿐.

---

### 1. `blog_run_pipeline`

**Purpose**: 새 콘텐츠 파이프라인 시작.

**Input schema**:
```ts
{
  type: "blog" | "report" | "dc-story",      // 필수
  topic: string,                              // 필수, 5-200자
  reportId?: string,                          // dc-story 전용
  extraContext?: string                       // 선택
}
```

**Returns**: 텍스트 (run_id, branch, phases 요약).

**REST equivalent**: `POST /pipelines`

---

### 2. `blog_resume_pipeline`

**Purpose**: `paused_at_gate` 상태인 파이프라인 재개.

**Input schema**:
```ts
{
  runId: string,           // 필수
  feedback?: string        // 선택, 다음 phase에 전달
}
```

**Returns**: 텍스트 (재개 후 status, phase 진행).

**REST equivalent**: `POST /pipelines/{run_id}/resume`

---

### 3. `blog_get_status`

**Purpose**: 파이프라인 상태 조회.

**Input schema**:
```ts
{ runId: string }
```

**Returns**: 텍스트 (전체 phase 목록, 게이트 메시지, 에러 등).

**REST equivalent**: `GET /pipelines/{run_id}`

---

### 4. `blog_list_runs`

**Purpose**: 실행 이력 목록.

**Input schema**: `{ _dummy?: string }` (Zod 호환성을 위한 빈 스키마 우회)

**Returns**: 텍스트 (status 아이콘 + run_id + topic 라인 목록).

**REST equivalent**: `GET /pipelines`

---

### 5. `blog_get_draft`

**Purpose**: 현재 초안 HTML 조회.

**Input schema**:
```ts
{
  runId: string,                          // 필수
  language?: "ko" | "en"                  // 기본: ko
}
```

**Returns**: 텍스트 (파일 경로 + HTML 처음 5000자).

**REST equivalent**: `GET /pipelines/{run_id}/draft?language=ko`

---

### 6. `blog_preview`

**Purpose**: cloudflared 프리뷰 터널 시작.

**Input schema**:
```ts
{
  runId?: string,        // 지정 시 그 브랜치로 체크아웃 후 터널
  articlePath?: string   // 지정 시 URL에 path 직접 포함
}
```

**Returns**: 텍스트 (`🌐 Preview: https://....trycloudflare.com`).

**REST equivalent**: `POST /preview`

---

### 7. `blog_submit_pr`

**Purpose**: GitHub PR 생성.

**Input schema**:
```ts
{
  runId: string,         // 필수
  title?: string,        // 자동 생성 가능
  body?: string          // 자동 생성 가능
}
```

**Returns**: 텍스트 (`✅ PR 생성됨: <url>`).

**REST equivalent**: `POST /pipelines/{run_id}/pr`

---

### 8. `blog_query`

**Purpose**: 블로그 레포 자유 질의 (Claude Code Sonnet 호출).

**Input schema**:
```ts
{ question: string }
```

**Returns**: 텍스트 (Claude Code 답변).

**Behavior**: 매 호출마다 Claude Code 서브프로세스 spawn. 비용·지연 큼.

**REST equivalent**: `POST /query`

---

### 9. `blog_list_articles`

**Purpose**: `articles.json` 검색.

**Input schema**:
```ts
{
  keyword?: string,                       // title/description 부분 매치
  category?: string,                      // path prefix
  language?: string,                      // ko | en
  limit?: number                          // 기본 10
}
```

**Returns**: 텍스트 (전체/필터 카운트 + 매치 목록).

**REST equivalent**: `GET /articles`

---

## REST에 있고 MCP에 없는 것

| REST | 이유 |
|------|------|
| `GET /pipelines/{run_id}/stream` (SSE) | MCP는 JSON-RPC 일회성 응답. 스트리밍은 별도 패턴 (notification) |
| `POST /pipelines/{run_id}/cancel` | 추후 추가 가능 (`blog_cancel_pipeline`) |

## Phase 1에서 결정 필요

- **HTTP MCP 모드 인증** — REST와 같은 API 키? 아니면 OAuth?
- **MCP notification 사용** — 게이트 도달 시 클라이언트에 server-initiated 알림?
- **`blog_list_runs` 빈 스키마 처리** — `_dummy` 회피책 유지 or MCP SDK 업그레이드 후 정리?

## 호환성 약속

- 기존 9개 툴 시그니처 변경 시 **breaking change** — 메이저 버전 올림
- 새 툴 추가는 마이너 버전
- 반환 텍스트 형식 변경은 패치 버전 (클라이언트가 정규식으로 파싱하지 않는다는 가정)

REST 진화와 동기화 — `openapi.yaml`의 `info.version`과 MCP `server.version` 동시에 올림.
