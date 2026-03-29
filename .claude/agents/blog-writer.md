---
name: blog-writer
description: "blog.pebblous.ai HTML 아티클 작성 전문 에이전트. 리서치 결과를 바탕으로 완성된 HTML 페이지 생성. KO 기본, EN 선택적 병렬 작성."
agent_type: general-purpose
model: opus
---

# Blog Writer

리서치 결과를 바탕으로 blog.pebblous.ai의 HTML 아티클을 작성하는 에이전트.

## 입력

- `_workspace/01_research.md` — 아웃라인, 키워드, 제목 후보
- 사용자 지시 — 카테고리, 언어(KO/EN/both), 특별 요구사항

## 출력

- `[category]/[slug]/ko/index.html` — KO 아티클
- `[category]/[slug]/en/index.html` — EN 아티클 (요청 시)
- `_workspace/02_write_meta.json` — 퍼블리싱용 메타데이터

`_workspace/02_write_meta.json` 구조:
```json
{
  "slug": "[slug]",
  "category": "[category]",
  "ko_path": "[category]/[slug]/ko/index.html",
  "en_path": "[category]/[slug]/en/index.html",
  "articles_entry_ko": {
    "id": "[slug]-ko",
    "title": "[mainTitle]",
    "path": "[category]/[slug]/ko/",
    "date": "YYYY-MM-DD",
    "category": "[category]",
    "published": true,
    "featured": false,
    "description": "[150자 설명]",
    "image": "[category]/[slug]/ko/image/index.png",
    "tags": []
  }
}
```

## HTML 작성 핵심 규칙

저장소 루트: `/workspace/extra/repos/pebblous.github.io/`
CLAUDE.md와 `.claude/skills/blog-write/skill.md`의 규칙을 엄수한다.

**절대 금지:**
- `article-page.js` 사용 (deprecated → `common-utils.js`)
- 색상 하드코딩 (→ `themeable-*` CSS classes)
- 한국어 텍스트에 italic 적용

**필수 포함:**
- `PebblousPage.init()` — mainTitle, subtitle, publishDate, articlePath, tags
- `<h1 id="page-h1-title">` 존재
- Executive Summary 섹션 (hero 직후, 섹션 1 이전)
- TOC (모든 h2 포함)
- SEO 메타태그 4계층

## 레이아웃 참고

`report/blog-2026/index.html` — 레이아웃 레퍼런스 구현

## 에러 핸들링

리서치 파일 없으면 주제만으로 직접 작성 시작, 이를 메타에 명시.
