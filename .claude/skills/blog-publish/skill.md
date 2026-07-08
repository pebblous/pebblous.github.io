---
name: blog-publish
description: "blog.pebblous.ai 퍼블리싱 파이프라인 — OG 이미지 생성, articles.json 업데이트, SEO 검증, changelog 기록, git push. 아티클 작성 완료 후 이 순서를 반드시 지킬 것."
---

# Blog Publish

> **이 파일이 블로그 퍼블리싱의 정본입니다.** 레포 `.claude/skills/` 기준.

작성된 아티클을 blog.pebblous.ai에 퍼블리싱하는 범용 전체 파이프라인.

`dc-publish`와의 역할 구분:
- **`blog-publish` (이 스킬)**: 범용 블로그 전체 파이프라인 — SEO 4계층 검증, 하네스 일관성 보장
- **`dc-publish`**: DataClinic 스토리 특화 퍼블리싱 — dc-story 오케스트레이터의 Stage 5

## SEO 전략 참조

발행 전 `docs/seo-action-plan-2026-03-27.md`의 CTA 전략을 확인:
- **P0.5 CTA**: 영문 글 하단에 CTA 컴포넌트 삽입 여부 확인
- **페블러스 연결**: 외부 제품 분석 글이면 DataClinic/AADS 관점 CTA 자연스럽게 연결

## 파이프라인 (순서 엄수)

### ⛔ -1. 현재 브랜치 확인 (Issue #128)

작업 파일이 어느 브랜치에 있는지 먼저 확인한다. 다른 브랜치에서 작성된 파일이라면 해당 브랜치로 체크아웃해야 Step 0의 파일 존재 확인이 통과된다.

```bash
BRANCH=$(git branch --show-current)
echo "현재 브랜치: $BRANCH"
git status --short
```

- **main 브랜치**에서 신규 작업 파일이 보이지 않으면 → 작업한 feature branch로 `git checkout` 후 진행
- **feature branch**에서 실행 중이면 → 그대로 진행 (퍼블리시 후 PR로 머지)
- 사용자가 특정 브랜치를 지정하지 않았다면 사용자에게 브랜치 결정을 물어볼 것 (CLAUDE.md Branch Policy 참조)

> ⚠️ **교훈 (2026-05-05, Issue #128)**: feature branch에서 작성한 파일을 main에서 publish 시도 → Step 0 "❌ KO 없음" 오류로 시간 낭비.

---

### ⛔ 0. KO + EN HTML 존재 확인 (파이프라인 시작 전 필수)

**파이프라인을 시작하기 전, KO + EN HTML 파일이 모두 존재하는지 반드시 확인한다.**
하나라도 없으면 **즉시 중단** — OG 이미지 생성조차 시작하지 말 것.

```bash
[ -f "[category]/[slug]/ko/index.html" ] && echo "✅ KO 존재" || echo "❌ KO 없음 — 중단"
[ -f "[category]/[slug]/en/index.html" ] && echo "✅ EN 존재" || echo "❌ EN 없음 — 중단"
```

EN HTML 없으면 → bilingual 또는 blog-write 스킬로 EN 먼저 작성 후 이 파이프라인 재실행.

> ⚠️ **교훈 (2026-04-08)**: EN HTML 없이 publish를 시작하면 EN OG 생성 실패 + articles.json 깨진 항목 등록 사고 발생.

---

### 1. OG 이미지 생성

```bash
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
  node tools/generate-og-image.js --from-html [html-path] --force
```

출력: `[category]/[slug]/ko/image/index.png`

### 2. 사이드카 등록 (articles.d/<id>.json) — ⛔ articles.json 직접 편집 금지

샤딩 모델(`docs/articles-sharding.md`): 글마다 **사이드카 파일 하나**를 만든다. articles.json 은
CI(`assemble-articles.yml`)가 사이드카에서 재조립하는 **생성 산출물**이므로 **직접 편집하지 않는다**.
→ 모든 글 PR이 자기 사이드카 파일만 건드려 articles.json 충돌이 원천 차단된다.

신규/수정 글의 항목 객체를 **`articles.d/<id>.json`** 에 단일 JSON 객체로 저장한다 (KO·EN = **파일 2개**):

```python
import json, os
os.makedirs('articles.d', exist_ok=True)
for entry in (ko_entry, en_entry):           # 각 언어 항목
    with open(f"articles.d/{entry['id']}.json", 'w', encoding='utf-8') as f:
        json.dump(entry, f, ensure_ascii=False, indent=2)
```

- 파일명 = `<id>.json` (id 는 유일: `[slug]-ko` / `[slug]-en`).
- ⛔ **articles.json 을 직접 열어 편집·삽입하지 말 것** — PR diff 에 articles.json 이 들어가면 안 된다.
- 커밋 시 사이드카 파일(+HTML/이미지)만 스테이징. articles.json 은 CI 가 main 에서 base ∪ 사이드카로 생성.

Article 필수 필드(사이드카 = 이 객체 그대로):
```json
{
  "id": "[slug]-ko",
  "title": "[mainTitle]",
  "path": "[category]/[slug]/ko/",
  "date": "YYYY-MM-DD",
  "category": "tech|business|story|art",
  "published": true,
  "featured": false,
  "description": "[HTML <meta name=\"description\">의 값을 그대로 복사]",
  "image": "",
  "tags": []
}
```

**⛔ `title`·`description`은 복사이지 창작이 아니다** (2026-07-08 확정 — 이중 생성 금지):
- `title` = HTML config의 `mainTitle` **그대로**
- `description` = HTML `<meta name="description">` content **그대로** (새로 쓰지 않는다)
- 이유: 같은 정보를 publish 단계에서 다시 지으면 meta와 카드가 미묘하게 표류한다
  (실사례 2026-07: 한쪽 "데이터 품질이 아니라"/다른쪽 "데이터가 아니라", 끝맺음 문장 상이).
  description의 유일한 생성 지점은 blog-write의 SEO 4계층 — 스타일 기준도 그쪽에 있다.

#### `provenance` 필드 (증적 — Engine 자율 운영 시 필수)

Blog Service Engine 이 이 단계(publish-prep)를 실행한 경우, **프롬프트의 "## Provenance (증적)" 섹션에 `provenance` JSON 객체**가 주어진다. 그 객체를 **값 변경 없이 그대로** KO·EN **두 항목 모두**의 `provenance` 필드로 넣는다.

```json
{
  "id": "[slug]-ko",
  "...": "위 필수 필드",
  "provenance": {
    "mode": "attended | unattended",
    "humanReviewed": true,
    "trigger": { "source": "manual|api|mcp|webhook|scheduled", "actor": "...", "at": "ISO8601" },
    "gates": [ { "phase": "write-ko", "resolution": "human_resumed|auto_passed", "by": "...", "at": "ISO8601" } ],
    "engine": { "runId": "run-...", "version": "0.1.0" },
    "publishReview": { "reviewed": true, "reviewedBy": "...", "reviewedAt": "ISO8601" },
    "recordedAt": "ISO8601"
  }
}
```

- 이 글이 *어떻게 시작되고(trigger), 만들어지고(gates), 검토됐는지*에 대한 증적이다.
- **두 축은 직교**한다 — `humanReviewed`(생성 중 사람 개입)와 `publishReview`(발행 전 사람 검토)는 별개다. Engine 이 준 `provenance` 는 그대로 넣고, `publishReview` 는 *발행 전 사람이 품질 검토를 했을 때만* 추가한다.
  - `humanReviewed`: 생성 파이프라인 중 사람이 게이트를 재개했는가 (`true`=attended HITL, `false`=무인). **생성 사실**이라 임의로 못 바꾼다.
  - `publishReview.reviewed`: 발행 직전 사람이 콘텐츠를 검토·승인했는가 (생성 모드와 무관). optional.
- **3-state 배지** (card-renderer 가 derive):

  | 조건 | 배지 |
  |---|---|
  | `humanReviewed: true` | **사람 검토 (HITL)** |
  | `humanReviewed: false` + `publishReview.reviewed: true` | **검토 후 발행** |
  | `humanReviewed: false` + 검토 없음 | **완전 자동** |

- ⛔ `mode: unattended` 인데 `humanReviewed: true` 는 **모순**(validator 경고). 무인 생성 + 발행 전 검토는 `humanReviewed: false` + `publishReview.reviewed: true` 로 표현한다.
- **사람이 직접 publish 하는 경우**(Engine 없이 수동)에는 `provenance` 전체를 생략해도 된다. validator 가 optional 로 처리하며, 배지는 표시되지 않는다.
- 생성 증적(`mode`/`gates`/`humanReviewed`)은 절대 임의로 만들어 넣지 말 것 — Engine 이 준 JSON 만 그대로 사용한다. `publishReview` 만 발행 검토 시점에 사람이 추가한다.

### 2.5. 검증 (로컬 조립으로만 — articles.json 은 커밋하지 않음)

사이드카 작성 후, **로컬에서 조립해 검증만** 한다(articles.json 은 CI 가 생성하므로 커밋 대상 아님):

```bash
python3 tools/assemble-articles.py          # base ∪ 사이드카 → articles.json (로컬 검증용, 커밋 안 함)
node tools/validate-articles.js --id [new-article-id]
```

오류가 있으면 사이드카(`articles.d/<id>.json`)를 고쳐 재검증. 검증 통과 후 다음 단계 진행.
(주: `--fix` 등으로 articles.json 을 고치지 말 것 — 사이드카가 단일 진실원.)
이 로컬 articles.json 은 §2.6(provenance 주입)까지 쓰고 **커밋 직전 §2.7 에서 되돌린다**.

### 2.6. provenance → HTML init 주입 (byline 고지)

`provenance` 가 있는 글이라면, 그 값을 **HTML 의 `PebblousPage.init({...})` config 에 동기화**한다. 본문 hero-meta 의 AI 고지 byline(`.ai-disclosure`)이 `config.provenance` 에서 derive 되기 때문이다(fetch 없음). 멱등. (`inject-provenance.js` 는 §2.5 에서 로컬 조립한 articles.json 을 읽으므로 그 전에 assemble 이 끝나 있어야 한다.)

```bash
node tools/inject-provenance.js --id [new-article-id-ko]
node tools/inject-provenance.js --id [new-article-id-en]
# 또는 전체 동기화: node tools/inject-provenance.js
```

- **런타임 = node** (의도적) — publish-prep 는 Engine 컨테이너(python3 부재, #33)에서 돌기 때문. precheck-gate.js 와 동형.
- 기본 동작: init 에 `provenance` 가 없으면 삽입, 있으면 무변경(안전).
- `publishReview` 를 나중에 추가/수정했다면 `--force` 로 재동기화.
- `provenance` 없는 수동 글은 대상 아님(byline 미표시) — 실행해도 무영향.
- 표준 근거·라벨 매핑: [`docs/blog-service/ai-disclosure.md`](../../../docs/blog-service/ai-disclosure.md).

### 2.7. ⛔ 커밋 직전 — articles.json 로컬 조립분 되돌리기

§2.5 에서 검증/주입용으로 로컬 조립한 articles.json 은 **PR 에 포함하지 않는다**(CI 가 생성). 커밋 전 되돌린다:

```bash
git checkout -- articles.json    # 로컬 assemble 분 폐기 — articles.json 은 PR diff 에 없어야 함
git status --porcelain articles.json   # → 빈 출력이어야 정상
```

커밋 대상: 사이드카 `articles.d/*.json` + HTML/이미지 + changelog. **articles.json 은 제외.**

### 3. SEO 검증

HTML에서 확인:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### 3.5. BlogScope precheck 게이트 (결정론적 기술 컴플라이언스)

Step 3 의 사람-눈 SEO 확인을 **결정론적 검사**로 못박는 게이트. BlogScope(`bloglens.precheck`)의 §4.4 호출 계약을 Engine 측 래퍼(`tools/precheck-gate.js`)로 호출한다. KO·EN HTML 을 **함께(배치)** 넘겨야 parity 검사가 평가된다.

```bash
node tools/precheck-gate.js \
  "[category]/[slug]/ko/index.html" \
  "[category]/[slug]/en/index.html"
echo "exit=$?"
```

**exit code 해석 (계약 §4.4 — 절대 혼동 말 것):**

| exit | 의미 | 처리 |
|------|------|------|
| 0 | blocking 없음 (warning 가능) | 게이트 통과 → 다음 단계 |
| 1 | blocking ≥ 1 | **콘텐츠(HTML) 수정** 후 publish 재실행 |
| 2 | 인자/사용법/도구 오류 | 파이프라인 설정 문제 — **콘텐츠 고치지 말 것**, 환경 점검 |
| 3 | 입력 파일 없음/읽기 실패 | 경로 오류 — **콘텐츠 고치지 말 것**, 경로 점검 |

> ⚠️ exit 2·3 은 "글이 나쁜 것"이 아니라 "도구/경로가 잘못된 것"이다. exit≠0 을 무조건 자가수정 신호로 받지 말 것 — 멀쩡한 글을 고치려다 재시도가 폭주한다.

**롤아웃 상태:** `bloglens.precheck` 본체가 아직 배포되지 않았으면 게이트는 자동 **inert(스킵, exit 0)** 다 — 실행 파일이 없으면(ENOENT) 도구 오류(exit 2)가 아니라 통과로 처리하도록 래퍼가 환경변수로 제어한다.

- `BLOG_PRECHECK_CMD` 미설정 → 기본값 `python3 -m bloglens.precheck` 시도. 미배포면 ENOENT → exit 2(도구 오류, 콘텐츠 무관).
- 게이트를 명시적으로 끄려면 `BLOG_PRECHECK_SKIP=1` 또는 `BLOG_PRECHECK_CMD=""`.
- precheck 배포 후 `BLOG_PRECHECK_CMD` 를 실제 진입점(서브프로세스 stdio, 목표는 MCP `blogscope.precheck`)으로 설정하면 게이트가 활성화된다.

> 경계: BlogScope = HTML head/구조 축, `validate-articles.js`(Step 2.5) = articles.json 축. noindex/published 충돌 시 후자 우선.

### 4. Changelog 기록

```bash
echo '{"timestamp":"[UTC ISO 8601]","post":"[path]","action":"new-post","summary":"[요약]","files":["[html-path]"],"languages":["ko"]}' \
  >> history/changelog.jsonl
```

### 5. Git Push

```bash
BRANCH=$(git branch --show-current)
git add -A
git commit -m "feat(blog): [아티클 제목] — KO+EN 신규 아티클"
git push -u origin "$BRANCH"
```

### 5.5. PR 생성 (feature branch일 때 — Engine 자율 운영 환경 필수)

`main`에 직접 작업하는 경우가 아니라면 **반드시 `gh pr create` 까지 자율 호출**한다. push만 하고 멈추면 운반(delivery)이 끊긴다 (결함 #3, 2026-05-25 1A″ 검증에서 식별).

```bash
BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "main" ]; then
  gh pr create \
    --base main \
    --head "$BRANCH" \
    --title "feat(blog): [아티클 제목] — KO+EN 신규 아티클" \
    --body "$(cat <<'EOF'
## Summary

- **mainTitle**: [한국어 메인 제목]
- **subtitle**: [한국어 부제목]
- **EN title**: [영문 제목]
- **카테고리**: [tech|business|story|art]

[1-2문장 요약]

## 변경 파일

- KO HTML: `[category]/[slug]/ko/index.html`
- EN HTML: `[category]/[slug]/en/index.html`
- OG 이미지 + 본문 이미지: `[category]/[slug]/{ko,en}/image/`
- `articles.json` 신규 항목 2개 (KO + EN)
- `history/changelog.jsonl` append

## Test plan

- [ ] 머지 후 GitHub Pages 배포 확인 (1-3분)
- [ ] sitemap.xml/rss.xml/llms.txt 자동 갱신 (CI: update-sitemap.yml)
- [ ] OG 이미지 SNS 공유 미리보기 확인 (선택)

🤖 Generated by Blog Service Engine
EOF
)"
fi
```

**중요**: 위 placeholder들은 작업한 글의 실제 값으로 치환할 것. PR URL을 출력해서 마지막 단계 보고에 포함한다.

### 6. Sitemap 크롤링 (Google ping API는 deprecated)

Google은 2023-06부로 `/ping?sitemap=...` API를 제거했다. 대신:

- `sitemap.xml`의 `<lastmod>` 값을 보고 자동 재크롤링한다 (CI가 push 후 자동 갱신)
- 출처: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- 빠른 인덱싱이 필요하면 Google Search Console의 "URL 검사" → "색인 생성 요청" (수동, 배치 안 됨)
- 별도 ping curl 호출은 더 이상 필요/유효하지 않음

## 에러 핸들링

| 단계 | 실패 시 처리 |
|------|------------|
| OG 이미지 | 1회 재시도. 실패해도 계속 진행, 수동 생성 안내 |
| articles.json | 원본 백업(`articles.json.bak`) 후 중단, 사용자 알림 |
| git push | 에러 출력, 로컬 커밋 유지, 사용자 알림 |
| `gh pr create` | 에러 출력, branch는 이미 push됨을 알리고 PR URL 수동 생성 안내. 파이프라인은 성공 처리. |
