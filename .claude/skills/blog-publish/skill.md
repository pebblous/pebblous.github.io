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

### 2. articles.json 업데이트

반드시 `{"categories":{...},"articles":[...]}` wrapper 구조 유지.
신규 항목을 배열 맨 앞에 삽입 (최신이 위):

```python
import json
with open('articles.json') as f:
    data = json.load(f)
data['articles'].insert(0, new_entry)
with open('articles.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
```

Article 필수 필드:
```json
{
  "id": "[slug]-ko",
  "title": "[mainTitle]",
  "path": "[category]/[slug]/ko/",
  "date": "YYYY-MM-DD",
  "category": "tech|business|story|art",
  "published": true,
  "featured": false,
  "description": "[150자 설명]",
  "image": "",
  "tags": []
}
```

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
    "recordedAt": "ISO8601"
  }
}
```

- 이 글이 *어떻게 시작되고(trigger), 만들어지고(gates), 검토됐는지*에 대한 증적이다.
- `humanReviewed`: `true` → blog.pebblous.ai 에 **"사람 검토"** 배지, `false` → **"완전 자동"** 배지.
- **사람이 직접 publish 하는 경우**(Engine 없이 수동)에는 이 필드를 생략해도 된다. validator 가 optional 로 처리하며, 배지는 표시되지 않는다.
- 절대 임의로 값을 만들어 넣지 말 것 — 증적의 신뢰성이 깨진다. Engine 이 준 JSON 만 그대로 사용한다.

### 2.5. articles.json 검증

articles.json 업데이트 직후 반드시 실행:

```bash
python3 tools/validate-articles.py --id [new-article-id]
```

오류가 있으면 즉시 수정 후 재확인. `--fix` 플래그로 자동 수정 가능한 항목은 자동 수정:

```bash
python3 tools/validate-articles.py --fix --id [new-article-id]
```

검증 통과 후 다음 단계 진행.

### 3. SEO 검증

HTML에서 확인:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

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
