# Architecture — 3-Asset Separation

> 본 레포는 현재 세 가지 다른 종류의 자산을 한 곳에 보관하고 있다. Blog Service 독립화는 이 세 자산을 단계적으로 분리하는 큰 그림 안에서 진행된다.

## 현재 상태 — 통합

```
pebblous.github.io/  (현재)
│
├─ [자산 1: 콘텐츠 발행 사이트]
│   ├─ blog/, report/, story/, project/, pebblopedia/   ← 실제 글 (수백 건)
│   ├─ articles.json, sitemap.xml, rss.xml              ← 인덱싱
│   ├─ index.html, css/, scripts/index/                 ← 사이트 UI
│   └─ image/, og 이미지                                ← 미디어 자산
│
├─ [자산 2: 콘텐츠 작성 메서드론]
│   ├─ .claude/skills/*                                  ← 30+ 스킬
│   ├─ .claude/agents/*                                  ← 에이전트 정의
│   ├─ CLAUDE.md, AGENT-POLICY.md                        ← 정책
│   └─ docs/style.md, content-guidelines.md              ← 가이드
│
└─ [자산 3: 발행 도구 + Blog Service]
    ├─ tools/generate-og-image.js, validate-articles.py        ← 결정론적 도구
    ├─ tools/scan-files-index.py, tools/scan-articles-meta.py  ← 인덱싱 도구
    ├─ tools/generate-rss.js, tools/generate-sitemap.js        ← 피드/사이트맵 생성
    ├─ .github/workflows/*                                     ← CI
    └─ (미래) Blog Service API/MCP                             ← 추가 예정
```

세 자산이 한 레포에 있는 이유는 역사적 편의 때문이다. 콘텐츠가 수백 건으로 늘어남에 따라 자산 1이 압도적으로 커지고 있어, 자산 2/3과 분리할 필요가 점점 명확해진다.

## 미래 비전 — 3-Repo 분리

```
[자산 1] pebblous/blog-content
        ── 콘텐츠 발행 사이트, GitHub Pages 호스팅
        ── 글 PR만 들어옴 → CI 단순, 트래픽 많은 main

[자산 2] pebblous/blog-toolkit
        ── 콘텐츠 작성 스킬/에이전트 + 가이드
        ── 메서드론 진화 중심

[자산 3] pebblous/blog-service
        ── 발행 도구 + Blog Service (API/MCP/인프라)
        ── 외부 클라이언트가 의존하는 안정적 인터페이스
```

**의존 방향**: 자산 3 → 자산 2 → 자산 1
(서비스가 스킬을 호출하고, 스킬이 콘텐츠를 만든다)

## Blog Service (자산 3) 내부 구조

```
                    ┌─────────────────────────────────────┐
                    │  Blog Service (단일 시스템)          │
                    │  ─────────────────────────────────  │
   Web/API Client → │  HTTP/SSE API (REST + 스트리밍)     │
                    │           ↕                          │
   AI Agent      →  │  MCP Server (stdio + HTTP MCP)      │
                    │           ↕                          │
                    │  Pipeline Engine (공통)              │
                    │  - phase별 Claude Code spawn         │
                    │  - 상태 저장 (`_workspace/.runs/`)    │
                    │  - 비동기 게이트                     │
                    │           ↕                          │
                    │  블로그 레포 (자산 1, 마운트/clone)   │
                    └─────────────────────────────────────┘
```

핵심: **HTTP API와 MCP가 같은 Pipeline Engine을 공유**한다. 인터페이스만 두 개, 로직은 하나.

NanoClaw는 이 서비스의 "한 클라이언트"가 되어 채널 통합 본연의 역할에 집중한다.

## 단계별 로드맵 (수정판 — 통합 우선)

**Phase 0** *(현재)* — 통합 + 문서화
- 본 디렉토리(`docs/blog-service/`)에서 비전·결정·스펙 작성
- 새 코드는 본 레포 안에 통합 상태로 시작
- 분리는 트리거가 발동하면 시작

**Phase 1** — Blog Service 코드 통합 작성
- C: OpenAPI 스펙 (`docs/blog-service/openapi.yaml`)
- D: HTTP API 구현 (본 레포 내부, 예: `service/blog-service-api/`)
- E: MCP 외부 노출 모드 추가
- 본 레포에서 작동하는 서비스로 검증

**Phase 2** — Web UI 추가
- F: 페블러스 내부 자동화용 Web UI
- 메신저보다 풍부한 UX (게이트 리뷰, 진행 모니터링, PR 관리)

**Phase 3** — 자산 분리 시작
- 분리 트리거 발동 시 (다음 절 참조)
- 자산 3을 먼저 별도 레포로 이전
- 자산 2도 차례로 분리
- 본 레포는 자산 1만 남김

**Phase 4** *(장기)* — 외부 노출
- G: 멀티 테넌시, 빌링, 사용량 추적
- 페블러스 외부 사용자 단계적 개방

## 분리 트리거 (Phase 3 진입 조건)

분리는 비용이 큰 작업이다. 다음 트리거가 발동하면 Phase 3 진입을 진지하게 검토:

### 자산 3 분리 트리거 (가장 먼저)
- [ ] Blog Service 코드가 자산 1보다 많은 PR을 생성하기 시작 (개발 활동 분리 신호)
- [ ] 외부 클라이언트(non-Pebblous)가 Blog Service 사용 시작
- [ ] Blog Service 의존성(npm 패키지 등)이 본 레포 의존성 트리를 무겁게 만듦
- [ ] CI/CD 시간이 분리 가치를 넘어섬

### 자산 2 분리 트리거 (그 다음)
- [ ] 다른 회사가 toolkit을 자기 콘텐츠 레포에 적용 요청
- [ ] 스킬 변경 PR이 콘텐츠 PR보다 많아짐 (메서드론 활동이 콘텐츠 발행을 추월)
- [ ] 스킬 자체에 대한 외부 기여자 발생

### 자산 1 정리 트리거 (마지막)
- [ ] 콘텐츠 글이 1,000건 초과
- [ ] GitHub Pages 빌드 시간이 N분 초과 (체감 지연 발생)
- [ ] 자산 2/3이 이미 분리되어 본 레포가 사실상 콘텐츠 전용

## 분리 전 준비사항

자산 분리 시 어려움을 줄이기 위해 통합 상태에서 미리 처리:

1. **스킬 인터페이스 추상화** — 콘텐츠 경로를 인자로 받기, 하드코딩 금지
2. **Blog Service의 본 레포 의존성 명시** — 환경변수 `BLOG_REPO_PATH`로 위치 인자화
3. **결정론적 부분과 LLM 부분 분리** — `tools/`(결정론적)는 Blog Service로, `.claude/`(LLM)는 toolkit으로
4. **테스트 격리** — 각 자산의 테스트가 다른 자산 없이도 돌아가게

## 현재 결정 (Decision Log 참조)

- **통합 우선, 분리 차차** — Phase 0/1/2를 본 레포에서 진행
- **OpenAPI 정식 스펙** — Markdown 초안이 아닌 정식 명세 채택
- **3-자산 비전 박아두기** — 분리 시점이 와도 같은 그림 안에서 진행
