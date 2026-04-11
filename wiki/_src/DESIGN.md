# Wiki 설계 문서 (Phase 0)
작성: 2026-04-11

---

## 1. URL 구조

```
blog.pebblous.ai/wiki/public/               → 위키 홈 (목차)
blog.pebblous.ai/wiki/public/bitcoin/       → 비트코인
blog.pebblous.ai/wiki/public/ethereum/      → 이더리움
blog.pebblous.ai/wiki/public/stablecoin/    → 스테이블코인
blog.pebblous.ai/wiki/public/sto-rwa/       → STO & RWA
blog.pebblous.ai/wiki/public/defi-nft/      → DeFi & NFT
blog.pebblous.ai/wiki/public/blockchain-fundamentals/ → 블록체인 기초
blog.pebblous.ai/wiki/public/digital-asset-exchange/ → 거래소 & 지갑
blog.pebblous.ai/wiki/public/blockchain-applications/ → 블록체인 응용
blog.pebblous.ai/wiki/public/korea-policy/  → 한국 정책
```

각 슬러그 폴더 안에 `index.html` 하나. 리다이렉트 페이지 없음 (단일 언어, ko만 우선).

---

## 2. 레포 파일 구조

```
pebblous.github.io/
  wiki/
    public/
      index.html                   ← 위키 홈
      bitcoin/index.html
      ethereum/index.html
      stablecoin/index.html
      sto-rwa/index.html
      defi-nft/index.html
      blockchain-fundamentals/index.html
      digital-asset-exchange/index.html
      blockchain-applications/index.html
      korea-policy/index.html
      search-index.json            ← 클라이언트사이드 검색용
    _src/                          ← 마크다운 소스 (빌드 인풋)
      bitcoin.md
      ethereum.md
      ...
  wiki/build.js                    ← 빌드 스크립트
```

마크다운 소스를 블로그 레포 안으로 이동 (`wiki/_src/`) → git 버전관리 통합.

---

## 3. CSS / 스타일

### 로드 순서 (아티클 페이지와 동일)
```html
<link rel="stylesheet" href="/css/theme-variables.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">
```
`/css/styles.css` 절대 포함 금지 (인덱스 전용).

### 사용할 CSS 변수 (theme-variables.css)
- `--bg-primary`, `--bg-secondary`, `--bg-card`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--border-color`, `--accent-color` (#F86825)
- `--heading-color`

### 사용할 공통 클래스 (common-styles.css)
- `themeable-heading`, `themeable-text`, `themeable-text-secondary`, `themeable-text-muted`
- `themeable-card`, `themeable-border`, `themeable-accent`
- `themeable-toc-border`, `themeable-toc-link`, `themeable-toc-link-active`

---

## 4. 레이아웃 구조

```
[블로그 헤더 — common-utils.js가 주입]

<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
  <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

    <!-- 왼쪽: 위키 전체 네비게이션 (240px) -->
    <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
      <p class="text-xs font-bold uppercase tracking-widest themeable-text-muted mb-3">블록체인 위키</p>
      <ul class="space-y-1 text-sm border-l-2 themeable-toc-border">
        <li><a href="/wiki/public/" class="block pl-4 themeable-toc-link [active: themeable-toc-link-active]">📚 목차</a></li>
        <li><a href="/wiki/public/bitcoin/" ...>₿ 비트코인</a></li>
        ... (전체 위키 페이지 목록)
      </ul>
    </nav>

    <!-- 오른쪽: 콘텐츠 (800px) -->
    <main class="max-w-[800px] px-4 sm:px-6 w-full">
      <header class="text-left mb-12">
        <h1 class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight">페이지 제목</h1>
        <p class="text-sm themeable-text-muted">마지막 업데이트: YYYY-MM-DD · 출처: ○○강</p>
      </header>

      <!-- 마크다운 → HTML 변환 콘텐츠 -->
      <div class="wiki-content">
        ...
      </div>

      <!-- 관련 문서 링크 -->
      <div class="related-pages mt-12 pt-8 border-t themeable-border">
        ...
      </div>
    </main>

  </div>
</div>

[블로그 푸터]
```

※ 기존 아티클의 in-page TOC (페이지 내 목차) 는 위키에서는 생략.
  위키 페이지는 아티클보다 짧고 레퍼런스 스타일이라 nav가 더 중요.

---

## 5. 빌드 스크립트 (wiki/build.js) 동작

```
입력: wiki/_src/*.md (YAML frontmatter 포함)
출력: wiki/public/{slug}/index.html (각 페이지)
      wiki/public/search-index.json

처리 단계:
  1. gray-matter로 frontmatter 파싱 (title, sources, related, updated)
  2. [[wikilink.md]] → <a href="/wiki/public/{slug}/"> 변환 (정규식)
  3. marked (npm) 으로 마크다운 → HTML 변환
  4. 블로그 HTML 템플릿에 삽입
  5. 각 슬러그 폴더에 index.html 저장
  6. search-index.json 생성 (title + plaintext 첫 500자)
```

---

## 6. 의존성 추가 (blog repo package.json)

```json
"devDependencies": {
  "marked": "^12.0.0",
  "gray-matter": "^4.0.3"
}
```

빌드 스크립트 실행:
```bash
node wiki/build.js
```

---

## 7. 예상 문제점 & 해결방안

| 문제 | 해결 |
|------|------|
| `[[wikilink]]` 미지원 | 빌드 전처리 정규식으로 변환 |
| Tailwind 클래스 누락 | wiki용 클래스를 input.css에 추가 후 rebuild |
| 검색 (다중 페이지) | search-index.json + Fuse.js 클라이언트사이드 |
| 마크다운 테이블 스타일 | `.wiki-content table` CSS 추가 (themeable 변수 활용) |
| 모바일 위키 nav | 드로어/토글 (common-styles의 mobile-toc 패턴 재사용) |
| 버전 쿼리스트링 | 빌드 시 날짜 `YYYYMMDD`로 자동 삽입 |
| 헤더/푸터 주입 | common-utils.js가 자동 처리 (기존 아티클과 동일) |
| marked npm 미설치 | `npm install --save-dev marked gray-matter` |

---

## 8. 작업 Phase

| Phase | 작업 | 완료 기준 |
|-------|------|----------|
| 0 | 설계 문서 | 이 파일 ✓ |
| 1 | 의존성 설치 + build.js 재작성 | `node wiki/build.js` 실행 성공 |
| 2 | bitcoin/ PoC | 브라우저에서 CSS 정상 렌더링 확인 |
| 3 | 전체 페이지 생성 + search-index.json | 10개 페이지 모두 생성 |
| 4 | wiki-content CSS 추가 + Tailwind rebuild | 테이블, 코드블록, 인용구 스타일 정상 |
| 5 | 블로그 메인 nav에 "위키" 링크 추가 | — |
| 6 | 배포 (git push) + 검증 | blog.pebblous.ai/wiki/public/ 접속 확인 |

---

## 9. 보류 사항 (추후)

- EN 버전 위키 (다국어)
- 위키 페이지 간 backlink 섹션
- OG 이미지 자동 생성
- PDF 추가 → 위키 자동 업데이트 파이프라인
