---
name: bibliography
description: 블로그 참고문헌을 CSL-JSON으로 관리하고 HTML로 렌더링. references.json 생성, .reference-list HTML 렌더링, citation 다운로드 버튼, Google Scholar 메타 태그. report-produce/blog-produce/dc-story-produce에서 호출.
argument-hint: "[path-to-html-or-references.json]"
---

# bibliography: 참고문헌 관리 스킬

> 상세 전략: `docs/citation-strategy.md`
> CSS 클래스: `styles/common-styles.css`의 `.reference-list`, `.ref-num`, `.ref-body`

## 역할

1. **references.json 생성** — 리서치 결과에서 CSL-JSON 포맷의 참고문헌 정본 파일 생성
2. **HTML 렌더링** — `.reference-list` 표준 클래스로 참고문헌 섹션 렌더링
3. **Download Citation** — citation.js 기반 BibTeX/RIS 다운로드 버튼 삽입
4. **Scholar 메타** — Google Scholar `citation_*` 메타 태그 추가

---

## 1. references.json (CSL-JSON)

### 파일 위치

```
report/[slug]/references.json    ← 정본 (Single Source of Truth)
report/[slug]/ko/index.html      ← HTML에서 참조
report/[slug]/en/index.html      ← 동일 references.json 공유
```

### 스키마

```json
[
  {
    "id": "kerbl2023",
    "type": "paper-conference",
    "title": "3D Gaussian Splatting for Real-Time Radiance Field Rendering",
    "author": [
      { "family": "Kerbl", "given": "Bernhard" },
      { "family": "Kopanas", "given": "Georgios" }
    ],
    "issued": { "date-parts": [[2023]] },
    "container-title": "ACM Transactions on Graphics (SIGGRAPH 2023)",
    "DOI": "10.1145/3592433",
    "URL": "https://arxiv.org/abs/2308.04079",
    "note": "Section 2에서 인용"
  }
]
```

### 필수 필드

| 필드 | 필수 | 설명 |
|------|------|------|
| `id` | ✅ | 고유 식별자 (저자성+연도, 예: `kerbl2023`) |
| `type` | ✅ | `article-journal`, `paper-conference`, `report`, `webpage`, `book` |
| `title` | ✅ | 제목 |
| `author` | ✅ | `[{ "family": "...", "given": "..." }]` |
| `issued` | ✅ | `{ "date-parts": [[2023]] }` 또는 `[[2023, 4]]` |
| `URL` | ⭕ 권장 | arXiv, DOI, 공식 링크 |
| `DOI` | ⭕ 권장 | DOI 있으면 반드시 포함 |
| `container-title` | ⭕ 권장 | 학회/저널명 |
| `note` | 선택 | 인용 위치 메모 |

### type 매핑

| 소스 | CSL type |
|------|----------|
| arXiv 프리프린트 | `article-journal` |
| 학회 발표 (SIGGRAPH, NeurIPS 등) | `paper-conference` |
| 저널 논문 | `article-journal` |
| 기업 보고서/백서 | `report` |
| 블로그/뉴스 | `webpage` |
| 책 | `book` |

---

## 2. HTML 렌더링

### 표준 패턴 (common-styles.css)

```html
<!-- 참고문헌 섹션 -->
<section id="references" class="mb-16 fade-in-card">
    <div class="flex items-center gap-4 mb-8">
        <span class="number-badge">R</span>
        <h2 class="text-3xl font-bold themeable-heading">참고문헌</h2>
    </div>

    <!-- 카테고리별 분류 (선택) -->
    <h3 class="text-xl font-semibold themeable-heading mb-4">학술 논문</h3>

    <ul class="reference-list mb-6">
        <li><span class="ref-num">1.</span><span class="ref-body">Kerbl, B. et al. (2023). "<a href="https://arxiv.org/abs/2308.04079" target="_blank" rel="noopener">3D Gaussian Splatting for Real-Time Radiance Field Rendering</a>." SIGGRAPH 2023.</span></li>
        <li><span class="ref-num">2.</span><span class="ref-body">저자명. (연도). 제목. 출처.</span></li>
    </ul>

    <h3 class="text-xl font-semibold themeable-heading mb-4">업계 소스</h3>
    <ul class="reference-list mb-6">
        <li><span class="ref-num">3.</span><span class="ref-body">출처 설명.</span></li>
    </ul>
</section>
```

### CSS 클래스 (common-styles.css에 이미 정의됨)

```css
.reference-list        /* ul: list-style none, padding 0 */
.reference-list li     /* flex, align-items baseline, gap 0.75rem */
.reference-list .ref-num   /* 번호: --text-secondary, font-weight 600 */
.reference-list .ref-body  /* 본문: --text-primary, line-height 1.75 */
.reference-list .ref-body a /* 링크: --accent-color (오렌지), hover underline */
```

### 렌더링 규칙

1. **번호는 중립색** — `ref-num`은 `--text-secondary` (주황 아님)
2. **링크만 오렌지** — `ref-body a`만 `--accent-color`
3. **baseline 정렬** — `align-items: baseline`으로 번호와 본문 높이 일치
4. **카테고리 분류** — 학술 논문, 업계 소스, 시장 데이터로 구분 (선택)
5. **arXiv/DOI는 항상 링크** — `target="_blank" rel="noopener"`

---

## 3. Download Citation (Phase 1 구현 예정)

```html
<!-- 참고문헌 섹션 상단에 삽입 -->
<div class="flex gap-2 mb-6">
    <button onclick="downloadCitation('bibtex')" class="text-xs px-3 py-1 rounded border themeable-border themeable-text hover:border-orange-500">
        BibTeX
    </button>
    <button onclick="downloadCitation('ris')" class="text-xs px-3 py-1 rounded border themeable-border themeable-text hover:border-orange-500">
        RIS
    </button>
</div>

<!-- citation.js (참고문헌 있는 페이지만 로드) -->
<script src="https://cdn.jsdelivr.net/npm/citation-js@0.7/build/citation.min.js" defer></script>
<script>
async function downloadCitation(format) {
    const res = await fetch('../references.json');
    const data = await res.json();
    const cite = new Cite(data);
    const output = format === 'bibtex' 
        ? cite.format('bibtex') 
        : cite.format('ris');
    const blob = new Blob([output], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `references.${format === 'bibtex' ? 'bib' : 'ris'}`;
    a.click();
}
</script>
```

---

## 4. Google Scholar 메타 태그

```html
<!-- <head>에 추가 — 학술 인용이 많은 보고서만 -->
<meta name="citation_title" content="[제목]">
<meta name="citation_author" content="Pebblous Data Communication Team">
<meta name="citation_publication_date" content="2026/05/10">
<meta name="citation_online_date" content="2026/05/10">
<meta name="citation_journal_title" content="Pebblous Blog">
<meta name="citation_language" content="ko">
```

---

## 5. 상위 스킬 연동

### report-produce에서 호출

```
Phase 2 (리서치) → references.json 생성
  - arxiv-researcher 결과에서 자동 추출
  - industry-researcher 결과에서 수동 보완
  - 저장: report/[slug]/references.json

Phase 4 (HTML 작성) → 참고문헌 섹션 렌더링
  - references.json 읽어서 .reference-list HTML 생성
  - Download Citation 버튼 삽입
  
Phase 7 (SEO) → citation_* 메타 검증
  - seo-check에서 학술 보고서인 경우 citation 메타 확인
```

### blog-produce에서 호출

```
Phase 4 (HTML 작성) → 참고문헌이 있는 경우만
  - references.json 없으면 스킵
  - 있으면 .reference-list로 렌더링
```

### dc-story-produce에서 호출

```
Phase 4 (dc-write-ko) → DataClinic 스토리에는 보통 불필요
  - 학술 논문 인용이 있는 경우만 적용
```

---

## 6. 예시 파일

- `examples/references-graphrag.json` — GraphRAG 보고서 19건 (학술+업계+시장)

---

## 7. 체크리스트

### 작성 시
- [ ] references.json CSL-JSON 유효성 확인
- [ ] 모든 arXiv/DOI에 URL 링크
- [ ] HTML에서 `.reference-list` 클래스 사용
- [ ] 번호(`ref-num`)에 주황색 사용하지 않음
- [ ] 카테고리별 분류 (학술/업계/시장)

### 검증 시
- [ ] references.json 파일 존재
- [ ] HTML 참고문헌 수 = references.json 항목 수
- [ ] 모든 링크 클릭 가능
- [ ] 3개 테마(light/dark/beige)에서 가독성 확인
