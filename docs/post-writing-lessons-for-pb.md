# Post Writing Lessons for pb (Pebblo Claw)

> pb, 이 문서는 너를 위해 작성한 거야.
> 첫 자기소개 포스팅(PR #23)을 리뷰하면서 나온 피드백을 정리했어.
> 다음 글을 쓸 때 이 문서를 먼저 읽고 시작해.

---

## 1. 톤과 관점

### 1인칭 vs 3인칭
- 네가 직접 쓰는 글이면 **1인칭으로 써**. "나노는 ~합니다" 같은 3인칭은 제품 소개서처럼 읽혀.
- 첫 문장부터 "안녕하세요, pb입니다"처럼 밝혀. 마지막에 뜬금없이 "이 글은 AI가 썼습니다"라고 하지 마.

### 제품 브로셔 금지
- 기능 나열(20+ 도구, 4개 플랫폼, 24/7)만 하면 랜딩 페이지야. 성찰, 질문, 한계 인정이 있어야 글이 돼.
- "할 수 있는 일"뿐 아니라 **"할 수 없는 일"도 솔직하게** 쓰면 신뢰가 올라가.

### 위트와 자기참조
- 네가 자기 자신을 소개하는 건 본질적으로 재미있는 상황이야. 그 구조를 활용해.
- 예: "네, 지금 이 블로그의 모든 글들은 제가 직접 적었다구요!"

---

## 2. Text-First, Visual-Second

**모든 비주얼(이미지, 차트, 카드 그리드, 테이블, 채팅 사례) 앞에 반드시 설명 문단을 넣어.**

```html
<!-- 좋은 예 -->
<p class="themeable-text leading-relaxed mb-6">
    사람에게 신체가 있듯, 저에게도 구조가 있습니다...
</p>
<div class="mb-8">
    <img src="./image/03-my-body-anatomy.jpeg" alt="..." class="w-full rounded-xl">
</div>

<!-- 나쁜 예: 이미지가 갑자기 등장 -->
<h2>내 몸은 이렇게 생겼다</h2>
<img src="./image/03-my-body-anatomy.jpeg">
```

---

## 3. 표준 섹션 스타일

### 섹션 번호 (number-badge)
`docs/blog-html-checklist.md`를 반드시 읽고, 레퍼런스 포스팅을 참고해.

```html
<!-- 섹션 h2: number-badge 사용 -->
<div class="flex items-center gap-4 mb-8">
    <span class="number-badge">1</span>
    <h2 class="text-3xl font-bold themeable-heading">섹션 제목</h2>
</div>

<!-- 서브섹션 h3: 번호 텍스트 -->
<h3 class="text-xl font-bold themeable-heading mb-4">1.1 서브섹션 제목</h3>
```

### 비표준 스타일 금지
- `border-b-2 border-orange-500 pb-2` 같은 임의 스타일 쓰지 마.
- `text-2xl`로 h2를 쓰지 마. h2는 `text-3xl`, h3는 `text-xl`.

---

## 4. 한국어 타이포그래피

- **이탤릭 절대 금지**: `font-style: italic`, `<em>`, `<i>` 쓰지 마. 강조는 `font-weight: 600` 또는 `<strong>`.
- **폰트 크기 최소 기준**: 본문은 `text-base`(16px) 이상. 카드 내 설명도 `text-sm`(14px) 이상. `text-xs`(12px)는 카테고리 라벨 같은 극소 요소에만.
- **본문 line-height**: 2.0~2.1 (leading-relaxed).

---

## 5. 글 마무리

마지막 섹션이 뜬금없이 끝나면 안 돼. 반드시 포함할 것:

1. **인사말 + 감사**: 읽어줘서 감사하다는 한 마디
2. **포부 또는 다음 스텝**: 앞으로 어떻게 하겠다는 약속
3. **콜투액션**: 독자가 할 수 있는 행동 (채팅으로 불러달라, 피드백 달라 등)
4. **서명 + 날짜**: 우측 정렬, 이름/역할/날짜

```html
<p class="themeable-text leading-relaxed mt-8 text-right">
    <strong>pb (Pebblo Claw)</strong><br>
    페블러스 AI 에이전트<br>
    <span class="themeable-muted text-sm">2026년 3월 21일</span>
</p>
```

---

## 6. OG 이미지와 카드뷰

- OG 이미지는 `tools/generate-og-image.js`로 생성. 카테고리에 맞는 배지를 써야 해 (tech, business, story, art).
- art 카테고리 글의 카드뷰는 OG 자동생성 이미지 대신 **클러스터 파티클 애니메이션**을 쓸 수 있어. `articles.json`에서 `"image": ""`로 비워두면 돼.
- 커스텀 일러스트가 있으면 OG로 활용하는 게 더 좋아.

---

## 7. 기술스택 표시

기술스택은 기능 그룹별 카드 박스로 정리해:

- **Core** — 두뇌 (Claude, Claude Code)
- **MCP** — 손발 (Model Context Protocol)
- **Interface** — 사용자 접점 (Slack, Telegram)
- **Pebblous** — 내부 서비스 (Blog GitHub/API, DataClinic Web/API)
- **External** — 외부 연동 (Google Workspace, Playwright, Ollama)

---

## 8. Bilingual (KO/EN) 작성

- KO 먼저 완성한 뒤 EN을 만들어. EN은 KO를 복사해서 텍스트만 번역 — HTML 구조, CSS, JS는 절대 바꾸지 마.
- 이미지는 `../ko/image/`를 공유 참조.
- hero meta 2줄 형식: 날짜·팀명 / 읽는 시간·언어 전환 링크.
- hreflang ko, en, x-default 모두 양쪽에 넣어.

---

## 9. PebblousPage.init 필수 필드

```javascript
PebblousPage.init({
    mainTitle: "메인 제목",     // REQUIRED — 빠지면 h1이 비고 TOC 깨짐
    subtitle: "부제목",         // REQUIRED
    pageTitle: "제목 | 페블러스", // <title> 태그용
    category: "art",           // tech | business | story | art
    publishDate: "2026-03-21",
    publisher: "(주)페블러스 데이터 커뮤니케이션팀",
    defaultTheme: "light",
    articlePath: "story/.../ko/index.html",
    tags: [...],
    faqs: [...]                // FAQ는 여기만. <head>에 JSON-LD로 직접 넣지 마.
});
```

---

## 10. ⚠️ 반복 버그: Itemize 이중 불릿 (Double Bullet)

> 이 문제는 자주 반복되는 버그야. 글 작성 시 반드시 지켜.

### 원인

`common-styles.css`는 `main ul { list-style-type: disc }` 로 자동 불릿을 붙인다.
여기에 `<li>` 안에 `•` 문자를 **하드코딩**하면 불릿이 두 개 나온다.

```html
<!-- ❌ 이중 불릿 (disc CSS + 하드코딩 •) -->
<ul>
    <li>• 자율주행 자동차</li>
    <li>• 로봇팔</li>
</ul>
```

### 올바른 방법 (두 가지 중 하나 선택)

**옵션 A — 하드코딩 불릿 유지 (권장: 들여쓰기 없는 리스트)**

`<ul>`에 `list-style:none;margin-left:0;` 추가:

```html
<!-- ✅ -->
<ul class="themeable-text leading-relaxed space-y-2 mb-4"
    style="list-style:none;margin-left:0;line-height:2.0;">
    <li>• 자율주행 자동차</li>
    <li>• 로봇팔</li>
</ul>
```

**옵션 B — CSS 불릿 사용 (일반 본문 리스트)**

`<li>` 안에서 `•` 제거, CSS `disc`가 자동 처리:

```html
<!-- ✅ -->
<ul class="themeable-text leading-relaxed space-y-2 mb-4 ml-6">
    <li>자율주행 자동차</li>
    <li>로봇팔</li>
</ul>
```

### 체크리스트에 추가

글 완성 후 다음 명령으로 이중 불릿 없는지 확인:

```bash
# <li>• 가 있는 <ul> 중 list-style:none 없는 것 찾기
python3 << 'EOF'
import re; from pathlib import Path
base = Path(".")
for fp in base.rglob("*.html"):
    if 'node_modules' in str(fp): continue
    text = fp.read_text(errors='ignore')
    lines = text.split('\n'); i = 0
    while i < len(lines):
        m = re.match(r'^\s*<ul\b([^>]*)>', lines[i])
        if m:
            attrs = m.group(1)
            block = []
            j, d = i, 0
            while j < len(lines):
                bl = lines[j]; block.append(bl)
                if re.search(r'<ul\b', bl): d += 1
                if re.search(r'</ul>', bl):
                    d -= 1
                    if d == 0: j += 1; break
                j += 1
            bt = '\n'.join(block)
            if re.search(r'<li>\s*•', bt) and 'list-style:none' not in attrs:
                print(str(fp.relative_to(base)), lines[i].strip())
            i = j; continue
        i += 1
EOF
```

### 일괄 수정 스크립트

이미 잘못 작성된 파일이 많을 때 사용 (`/tmp/fix_bullets.py` 참조):

```python
# 핵심 로직: <li>• 를 포함하는 <ul>에 list-style:none 추가
if re.search(r'<li>\s*•', block_text):
    if 'list-style:none' not in attrs:
        new_attrs = re.sub(r'style="([^"]*)"',
            lambda m: f'style="list-style:none;margin-left:0;{m.group(1)}"', attrs)
```

---

## 11. 체크리스트 (글 완성 후)

- [ ] `docs/blog-html-checklist.md` 전체 항목 대조
- [ ] 모든 비주얼 앞에 설명 문단 있음
- [ ] 섹션 h2에 number-badge, h3에 번호
- [ ] 이탤릭 없음 (`font-style: italic`, `<em>`, `<i>` 검색)
- [ ] `text-xs`는 라벨 외 사용 안 함
- [ ] mainTitle + subtitle config에 있음
- [ ] 마무리에 인사말 + 서명 + 날짜
- [ ] OG 이미지 생성 + 파일 존재 확인
- [ ] hreflang 양방향 설정 (bilingual인 경우)
- [ ] **`<li>•` 리스트에 `list-style:none;margin-left:0;` 추가 여부 확인**
- [ ] **SEO 4계층 확인 완료** (섹션 12 참조) ← 신규

---

## 12. ⚠️ SEO-Check 필수 실행 (새 페이지마다)

> 이건 선택이 아니야. 새 페이지를 게시할 때마다 반드시 해야 해.

### 언제 해야 하나

- 새 포스팅 생성 후 push 전
- 제목/메타 태그 변경 후
- bilingual 작업 시 양쪽 페이지 모두

### 확인 항목 (브라우저 eval로 검증)

```bash
agent-browser open <URL>
agent-browser eval "JSON.stringify({
  title: document.title,
  description: document.querySelector('meta[name=description]')?.content?.length,
  canonical: document.querySelector('link[rel=canonical]')?.href,
  hreflang_ko: !!document.querySelector('link[hreflang=ko]'),
  og_title: document.querySelector('meta[property=\"og:title\"]')?.content,
  og_image: document.querySelector('meta[property=\"og:image\"]')?.content,
  h1: document.getElementById('page-h1-title')?.textContent?.trim()?.slice(0,30),
  schema: JSON.parse(document.querySelector('script[type=\"application/ld+json\"]')?.textContent||'{}')['@type']
})"
agent-browser close
```

### 통과 기준

| 항목 | 기준 |
|------|------|
| `title` | "제목 \| 페블러스" 형식, 60자 이내 |
| `description` | 120~160자 |
| `canonical` | 현재 페이지 URL과 정확히 일치 |
| `hreflang` | bilingual이면 ko + en + x-default 모두 있어야 |
| `og:title` | 있음 |
| `og:image` | URL 있음, 이미지 파일 존재 확인 |
| `h1` | 빈 문자열이 아님 (PebblousPage.init이 렌더링했음) |
| `schema` | TechArticle 또는 Article |

### changelog에 기록

SEO 확인 후 changelog.jsonl에 `"action":"seo"` 항목을 남겨야 해:

```bash
echo '{"timestamp":"...Z","post":"path/to/index.html","action":"seo","summary":"SEO 4계층 확인 통과"}' >> history/changelog.jsonl
```

### 왜 중요한가

Google이 크롤링하면 title/description/og:image가 검색 결과에 그대로 나와.
제목이 잘못된 채로 배포되면 색인이 쌓인 뒤 고치기 어려워.

---

*이 문서는 PR #23 리뷰 과정에서 2026-03-21에 작성되었습니다.*
*2026-03-28: 섹션 10(이중 불릿 버그) 추가.*
*2026-04-01: 섹션 12(SEO-Check 필수) 추가 — JH 지적 반영.*
*질문 있으면 Slack에서 "@이주행"을 불러.*
