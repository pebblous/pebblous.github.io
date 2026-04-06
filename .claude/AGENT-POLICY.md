# Agent & Skill Governance Policy

> 이 문서는 모든 에이전트(로컬 Claude Code, 나노클로, 기타)와 스킬이 따라야 하는 거버넌스 정책입니다.
> CLAUDE.md에서 참조하며, 정책 충돌 시 이 문서가 우선합니다.

## 1. 지식 소스 계층 (Knowledge Source Hierarchy)

에이전트가 규칙을 참조할 때의 우선순위:

```
1. CLAUDE.md (root)              ← 최상위 정책, 항상 로드됨
2. .claude/AGENT-POLICY.md       ← 에이전트 거버넌스 (이 문서)
3. .claude/skills/*/SKILL.md     ← 스킬별 규칙 (정본)
4. .claude/agents/*.md           ← 에이전트 정의
5. docs/*                        ← 참조 문서 (사람용, 에이전트 자동 로드 아님)
```

**핵심 원칙: `docs/`는 자동 로드를 가정하지 않는다.**
- `docs/` 파일은 사람이 읽는 참조 문서이며, 에이전트가 자동으로 읽는다고 가정하면 안 됨
- 에이전트에게 필요한 규칙은 반드시 **스킬 파일(`SKILL.md`)에 직접 포함**하거나 **이 정책 문서에 명시**해야 함
- `docs/`에만 있는 규칙은 에이전트가 놓칠 수 있으므로, 핵심 규칙은 스킬로 이전(inline 또는 references/)

## 2. 스킬 자급자족 원칙 (Skill Self-Containment)

각 스킬의 `SKILL.md`는 **그 스킬을 실행하는 데 필요한 모든 규칙을 자체 포함**해야 한다.

### 필수 포함 항목
- 실행 절차 (Step-by-step)
- 입력/출력 스키마
- 필수 검증 규칙 (예: articles.json 필드명, SEO 체크 항목)
- 환경 요구사항 (예: `PUPPETEER_EXECUTABLE_PATH`)

### 외부 참조 방법
`docs/`를 참조해야 할 경우, "Read docs/xxx.md" 대신 다음 패턴을 사용:

```markdown
## 참조 규칙 (from docs/blog-html-checklist.md)
- [규칙 1 인라인 요약]
- [규칙 2 인라인 요약]
- 전체 원문: `docs/blog-html-checklist.md`
```

즉, **핵심 규칙은 인라인으로 요약하고, 원문 위치를 병기**한다.

## 3. 필드명 정본 (Canonical Field Names)

에이전트 간 혼동이 반복되는 필드명을 여기서 확정한다.

### articles.json (CI 스키마 검증 대상)
```json
{
  "id": "unique-slug",
  "title": "제목",
  "date": "2026-04-06",          // ⚠️ publishDate 아님!
  "path": "project/.../index.html",
  "category": "tech",
  "published": true,
  "featured": false,
  "description": "설명",
  "image": "project/.../og-image.png",  // 선행 / 없음
  "tags": ["tag1", "tag2"],
  "language": "ko"                // cardTitle, publishDate 사용 금지
}
```

### PebblousPage.init() (HTML 렌더링용)
```javascript
PebblousPage.init({
  mainTitle: "메인 제목",       // title 아님!
  subtitle: "부제목",
  pageTitle: "제목 | 페블러스", // <title> 태그용
  publishDate: "2026-04-06",   // articles.json의 date와 동일 값, 다른 필드명
  category: "tech",
  publisher: "(주)페블러스 데이터 커뮤니케이션팀",
  tags: ["tag1", "tag2"]
});
```

## 4. 에이전트 간 협업 규칙

### 충돌 방지
- **main 브랜치 직접 push**: 한 번에 한 에이전트만. 동시 작업 시 브랜치 분리 필수
- **articles.json 수정**: 반드시 최신 main에서 pull 후 수정. 병합 충돌 시 수동 머지 (accept theirs/ours 금지)
- **CI 자동생성 파일** (`files-index.json`, `rss.xml`, `sitemap.xml`): 로컬 생성 금지, CI가 생성

### 커밋 규칙
- 커밋 메시지: `type: 한글 설명` (feat/fix/docs/refactor/seo/content)
- Co-Authored-By 헤더로 에이전트 식별

### 스킬 생성/수정 권한
- 에이전트는 자신의 작업에 필요한 스킬을 **자체적으로 생성하거나 개선**할 수 있음
- 단, 다음을 준수:
  1. 기존 스킬과 중복되지 않는지 확인
  2. 새 스킬은 `.claude/skills/{name}/SKILL.md` 구조를 따름
  3. 이 정책 문서의 필드명 정본, 지식 소스 계층을 준수
  4. 변경 시 changelog에 기록

## 5. 환경별 차이 (Environment Differences)

| 항목 | 로컬 Claude Code | 나노클로 (GitHub) |
|------|-----------------|------------------|
| 파일 시스템 | 전체 접근 | 레포 내부만 |
| `docs/` 접근 | 가능 (수동) | 가능 (수동) |
| OG 이미지 생성 | 로컬 Chrome 사용 | `PUPPETEER_EXECUTABLE_PATH` 설정 필요 |
| Tailwind 빌드 | `npm run build:css` | 동일 |
| git push | 직접 | GitHub API / Actions |

스킬 문서에 환경별 차이가 있는 경우 명시해야 한다.

## 6. 정책 변경

- 이 문서의 변경은 CLAUDE.md 변경과 동일하게 취급
- 변경 시 관련 스킬 SKILL.md도 동기화 필요 여부 확인
- 에이전트가 정책 위반을 발견하면 GitHub Issue로 보고

---

*최초 작성: 2026-04-06 — Issue #74, #78 대응*
