# Blog Service

> 본 디렉토리는 페블러스 블로그 시스템을 외부 클라이언트(Web/API/MCP)에 노출하기 위한 **Blog Service**의 설계·명세·운영 문서를 모아둔다.

## 비전 한 줄 요약

DataClinic이 자기 능력을 API로 노출했듯, 본 블로그 레포의 콘텐츠 작성·발행 능력을 **HTTP API + MCP** 두 가지 인터페이스로 노출하여 다양한 클라이언트(NanoClaw 채널, Web UI, 외부 에이전트, CI/CD)가 호출할 수 있게 한다.

## 현재 상태

**Phase 0 — 통합 + 문서화** (지금 단계)

본 디렉토리는 본 레포(`pebblous.github.io`) 안에 임시로 위치한다. 자산 분리(아래 참조)가 진행되면 별도 레포로 이전된다.

## 문서 인덱스

| 문서 | 내용 |
|------|------|
| [architecture.md](architecture.md) | 3-자산 분리 비전과 단계별 로드맵 |
| [decision-log.md](decision-log.md) | 주요 결정 이력 (통합 우선 / OpenAPI / 분리 트리거 등) |
| `openapi.yaml` *(예정)* | REST API 스펙 — C단계 산출물 |
| `mcp-tools.md` *(예정)* | MCP 인터페이스 스펙 |
| `design.md` *(예정)* | Pipeline Engine 설계 |

## 관련 자료

- 이슈 #137 — Blog Service 독립화 로드맵
- 이슈 #133 — NanoClaw Blog MCP 구현 (closed, 정보성)
- `docs/nanoclaw/blog-mcp-stdio.ts` — 현재 동작 중인 MCP 구현 참조 사본
- 이슈 #102 — DataClinic MCP 외부 에이전트 접근 방안 (closed)
- 이슈 #88 — Wiki/블로그 브랜치 워크플로우 + Preview Deploy
- 이슈 #122 — preview-tunnel 스킬 (closed)
