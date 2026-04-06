---
name: blog-publish
description: "blog.pebblous.ai 퍼블리싱 파이프라인 — OG 이미지 생성, articles.json 업데이트, SEO 검증, changelog 기록, git push. 아티클 작성 완료 후 이 순서를 반드시 지킬 것."
---

# Blog Publish

작성된 아티클을 blog.pebblous.ai에 퍼블리싱하는 전체 파이프라인.

작업 디렉토리: `/workspace/extra/repos/pebblous.github.io/`

## SEO 전략 참조

발행 전 `docs/seo-action-plan-2026-03-27.md`의 CTA 전략을 확인:
- **P0.5 CTA**: 영문 글 하단에 CTA 컴포넌트 삽입 여부 확인
- **페블러스 연결**: 외부 제품 분석 글이면 DataClinic/AADS 관점 CTA 자연스럽게 연결

## 파이프라인 (순서 엄수)

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
git add -A
git commit -m "feat: [아티클 제목] — KO 아티클 추가"
git push
```

## 에러 핸들링

| 단계 | 실패 시 처리 |
|------|------------|
| OG 이미지 | 1회 재시도. 실패해도 계속 진행, 수동 생성 안내 |
| articles.json | 원본 백업(`articles.json.bak`) 후 중단, 사용자 알림 |
| git push | 에러 출력, 로컬 커밋 유지, 사용자 알림 |
