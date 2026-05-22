# Decision Log

> Blog Service 설계·운영의 주요 결정 이력. 새 결정이 생기면 맨 위에 추가.

---

## 2026-05-22 — B단계 진입: 진본/사본 모델 + 자산 2/3 진본 위치 결정

**상황**: C단계(스펙) 완료 후 B단계(코드 분리) 진입. "자산 2/3을 어떻게 분리하느냐"가 쟁점.

**결정 핵심 — 진본/사본 모델**:
- **자산 2/3의 진본**: 새 레포 `blog-service` (현 `joohaeng-pbls/blog-service`, 추후 `pebblous/blog-service`로 transfer 예정)
  - 콘텐츠 작성 도구·로직 일체 (스킬·에이전트·정책·렌더링 코드·결정론적 도구·파이프라인)
- **자산 1**: 본 레포 `pebblous.github.io` — 콘텐츠 + 렌더링 코드 사본
  - 자산 2/3에서 생성된 콘텐츠와 렌더링에 필요한 정적 자산 사본만 보관
  - GitHub Pages가 호스팅 — 독자/검색엔진은 변화 없음

**경계 (사용자 정의)**: "콘텐츠 자체를 제외한 모든 것"이 자산 2.
- 자산 1에 남는 것: `blog/`, `report/`, `story/`, `project/`, `pebblopedia/`, `event/`, `articles.json`, `sitemap.xml`, `rss.xml`, `history/`, `image/`
- 자산 2/3에 옮길 것: `.claude/`, `scripts/`, `tools/`, `components/`, `css/`, `styles/`, `docs/`, `CLAUDE.md`, `AGENT-POLICY.md`, `package.json`, `index.html`, `tailwind.config.js`, `.github/workflows/`

**렌더링 코드 동기화 방식 (β 채택)**:
- 콘텐츠 PR과 별개로, 진본(blog-service)의 렌더링 코드 갱신 시 별도 PR로 자산 1에 일괄 동기화
- 콘텐츠 PR과 렌더링 PR이 섞이지 않아 신호 단순

**언어/스택 결정**:
- 자산 2는 코드 거의 없음 (스킬 .md + 에이전트 .md + Python/JS 도구). 그대로 이전.
- 자산 3 (Pipeline Engine) 언어는 추후 결정 — 에이전트 오케스트레이션 호환성이 기준 (NanoClaw가 TypeScript+Bun이라 참고).

**마일스톤 범위**:
- 첫 마일스톤은 **9개 툴 전부도 핵심 3개도 아닌, "자산 2 이전 + 외부 호출 검증"**
- 새 위치에서 본 레포(자산 1)에 새 글 작성 PR이 정상 동작하는지 확인이 1차 성공 기준
- 검증 통과 후 자산 3 (Pipeline Engine + API/MCP) 단계 진입

**NanoClaw 협업**:
- 본 분리 작업에는 불필요 — 우리는 자산 2를 이전하는 것이지 NanoClaw 코드를 옮기는 것이 아니다.
- NanoClaw `blog-mcp-stdio.ts`는 자산 3 단계에서 참조 자료로만 사용 (이미 `docs/nanoclaw/`에 복사본 있음).

**적용 단계**:
1. blog-service 레포에 자산 2 초기 파일 복사 + push
2. README + 검증 시나리오 작성
3. 검증: blog-service 환경에서 본 레포에 새 글 PR — 동작 확인
4. (검증 후) 본 레포의 자산 2 파일들을 "사본"으로 명시 (진본은 blog-service)
5. (장기) 진본 갱신 → 사본 동기화 파이프라인 정착

**관련**: 이슈 #137, [architecture.md](architecture.md)

---

## 2026-05-06 — 통합 우선, 분리 차차

**상황**: 본 레포(`pebblous.github.io`)에 세 종류의 자산(콘텐츠 / 메서드론 / 도구)이 통합되어 있고, 콘텐츠가 수백 건으로 늘어남. Blog Service를 새로 만들면서 별도 레포로 시작할지, 본 레포 안에서 시작할지가 쟁점.

**결정**: 본 레포에서 통합 상태로 시작하고, 트리거가 발동하면 분리.

**이유**:
- 새 레포 생성·CI 셋업·문서 분리 등 초기 비용이 크다
- Blog Service의 가치는 "동작하는가"가 우선이고, "어디 있는가"는 부차적
- 통합 상태에서 본 레포의 스킬·콘텐츠를 직접 참조하며 빠르게 검증 가능
- 분리 트리거 4개를 명시적으로 박아두어 미루지 않을 안전장치 마련

**적용 방법**:
- `docs/blog-service/` 디렉토리에 모든 설계·스펙·운영 문서 집중
- 추후 Blog Service 코드도 본 레포 내부 디렉토리(예: `service/blog-service-api/`)로 작성
- 분리 시 `git filter-repo`로 히스토리 보존하며 새 레포로 이전

**관련**: 이슈 #137, [architecture.md](architecture.md)

---

## 2026-05-06 — OpenAPI 정식 스펙 채택 (Markdown 초안 아님)

**상황**: API 스펙 작성 방식 결정. (1) Markdown 초안, (2) 정식 OpenAPI YAML.

**결정**: 정식 OpenAPI YAML 채택.

**이유**:
- B(코드 분리) 단계에서 FastAPI/Hono 라우터 자동 생성 가능 → 30-50% 개발 시간 절감
- 클라이언트 SDK 자동 생성 → NanoClaw 측 호출 코드 작성 부담 감소
- F(Web UI) 단계에서 같은 OpenAPI에서 TypeScript 타입 생성 가능
- G(외부 노출) 단계에서 개발자에게 표준 문서 제공
- `blog-mcp-stdio.ts`가 이미 9개 툴 시그니처를 명확히 가지고 있어 OpenAPI 작성이 어렵지 않다

**트레이드오프**:
- 작성 시간 1-2시간 (Markdown 초안은 30-60분)
- → B 작업 시간 단축으로 회수

**적용 방법**:
- `docs/blog-service/openapi.yaml`로 작성
- MCP 인터페이스는 별도 문서(`mcp-tools.md`)로 분리 (MCP는 JSON-RPC 기반이라 OpenAPI에 안 맞음)

**관련**: 이슈 #137 (Step C)

---

## 2026-05-06 — Pipeline Engine 공통화 (REST/MCP 듀얼 인터페이스)

**상황**: HTTP API와 MCP를 어떻게 둘 다 제공할 것인가.

**결정**: 두 인터페이스가 같은 Pipeline Engine을 공유한다.

**이유**:
- 로직이 한 곳에 있어야 일관성·테스트·유지보수 용이
- 새 인터페이스(예: gRPC, GraphQL) 추가 시 인터페이스 레이어만 추가
- DataClinic의 검증된 패턴 (REST + MCP 듀얼)

**구조**:
```
HTTP/SSE API ─┐
              ├─→ Pipeline Engine ─→ Claude Code spawn → 블로그 레포
MCP Server  ─┘
```

**관련**: [architecture.md](architecture.md) "Blog Service 내부 구조"

---

## 2026-05-06 — NanoClaw는 Blog Service의 한 클라이언트가 됨

**상황**: 현재 Blog MCP가 NanoClaw 컨테이너 내부 stdio 전용. 이를 어떻게 진화시킬 것인가.

**결정**: Blog Service를 NanoClaw 밖으로 분리. NanoClaw는 외부 서비스를 호출하는 클라이언트가 됨.

**이유**:
- NanoClaw 본연의 역할(채널 통합·사용자 컨텍스트)에 집중
- Blog MCP가 다른 클라이언트(Web UI, Claude Desktop, 외부 에이전트)에서도 사용 가능
- NanoClaw 변경과 Blog Service 변경의 개발 사이클 분리

**호환성**: stdio MCP 모드는 유지하여 기존 NanoClaw 통합 깨지지 않음. HTTP MCP 모드를 추가로 노출.

**관련**: [architecture.md](architecture.md), 이슈 #137

---

## 2026-05-06 — 분리 트리거 4종 명시

**상황**: "통합 우선"을 결정했으나 분리 시점이 모호하면 영원히 안 한다.

**결정**: 자산별 4가지 분리 트리거를 박아두고, 발동하면 진지하게 검토.

**자산 3 (Blog Service) 트리거**:
- Blog Service 코드 PR이 콘텐츠 PR을 추월
- 외부 클라이언트 사용 시작
- Blog Service 의존성이 본 레포 의존성 트리를 무겁게 만듦
- CI/CD 시간이 분리 가치를 넘어섬

**자산 2 (toolkit) 트리거**:
- 외부 회사가 toolkit 적용 요청
- 스킬 PR이 콘텐츠 PR보다 많아짐
- 스킬에 대한 외부 기여자 발생

**자산 1 (content) 정리 트리거**:
- 글 1,000건 초과
- GitHub Pages 빌드 시간 임계 초과
- 다른 자산이 이미 분리되어 본 레포가 사실상 콘텐츠 전용

**관련**: [architecture.md](architecture.md) "분리 트리거"
