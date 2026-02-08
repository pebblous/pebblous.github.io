# Pebblous UX/UI Design Philosophy

## 스타일 표준 참조 페이지

> **📌 참조 구현**: [데이터 품질이란?](/project/DataClinic/data-quality.html)
>
> 이 페이지는 Pebblous 블로그의 스타일 표준을 가장 잘 구현한 예시입니다.
> 비주얼을 최소화하고 가독성을 높인 레이아웃으로, 새 페이지 작성 시 참고하세요.
>
> **주요 특징:**
> - 왼쪽 정렬 제목/부제목/발행 정보/공유 버튼
> - 미니멀한 비주얼, 텍스트 중심 레이아웃
> - 일관된 타이포그래피 (본문 18px, 줄간격 2.1)

---

## 핵심 원칙

### 1. 미니멀리즘 (Minimalism)
- **Less is More**: 불필요한 요소 제거, 핵심만 남김
- **White Space**: 여백을 활용한 시각적 호흡
- **Clean Layout**: 정돈되고 깔끔한 레이아웃

### 2. 색상 절제 (Color Restraint)
- **3-4 Colors Maximum**: 페이지당 최대 3-4가지 색상만 사용
- **Brand Colors First**: Orange (#F86825), Teal (#14b8a6), Slate (#475569)
- **Purpose-Driven**: 색상은 항상 목적이 있어야 함 (강조, 구분, 브랜드)

### 3. 인터랙티브 (Interactive)
- **Subtle Animations**: 부드럽고 자연스러운 전환 효과
- **Hover States**: 마우스 오버 시 피드백 제공
- **Responsive**: 모든 디바이스에서 최적화된 경험

---

## 컴포넌트 스타일 가이드

### 카드 (Cards)

#### 기본 카드
```html
<div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
    <!-- content -->
</div>
```

**특징**:
- 반투명 slate 배경 (`bg-slate-800/50`)
- 얇은 테두리 (`border-slate-700`)
- 적당한 패딩 (`p-6`)

#### 인터랙티브 카드
```html
<div class="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-all">
    <!-- content -->
</div>
```

**특징**:
- hover 시 테두리 변화
- `transition-all`로 부드러운 전환

#### 강조 카드 (Accent Card)
```html
<div class="bg-slate-800/50 border border-teal-500/40 rounded-lg p-4 hover:border-teal-500/60 transition-all">
    <!-- content -->
</div>
```

**특징**:
- Teal 테두리로 차별화
- hover 시 opacity 증가

---

### 색상 사용 규칙

#### ❌ 피해야 할 패턴
```html
<!-- ❌ 너무 강한 색상 -->
<div class="bg-red-500/10 border border-red-500/30">
<div class="bg-emerald-500/10 border border-emerald-500/30">

<!-- ❌ gradient 남용 -->
<div class="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border-2 border-orange-500">

<!-- ❌ 너무 많은 색상 -->
<div class="text-red-400">...</div>
<div class="text-green-400">...</div>
<div class="text-blue-400">...</div>
<div class="text-purple-400">...</div>
<div class="text-yellow-400">...</div>
```

#### ✅ 권장 패턴
```html
<!-- ✅ 중립적인 기본 스타일 -->
<div class="bg-slate-800/50 border border-slate-700">

<!-- ✅ Teal로 강조 -->
<div class="bg-slate-800/50 border border-teal-500/40">
<h3 class="text-teal-400">...</h3>

<!-- ✅ Orange는 액션에만 -->
<button class="btn-primary">다운로드</button>
<a class="text-orange-400 hover:text-orange-300">링크</a>
```

---

### 타이포그래피

#### 제목 계층
```html
<!-- Hero/Main Title: 섹션 제목보다 확실히 크고 굵게 -->
<h1 class="text-4xl md:text-5xl font-extrabold" style="line-height: 1.3;">메인 타이틀</h1>
<!-- 또는 common-styles.css 적용 시: -->
<h1 class="hero-title">메인 타이틀</h1>

<h2 class="text-3xl font-bold text-white">섹션 타이틀</h2>
<h3 class="text-2xl font-semibold text-slate-200">서브섹션</h3>
<h4 class="text-xl font-semibold text-slate-200">카드 제목</h4>
<h5 class="text-lg font-semibold text-white">작은 제목</h5>
```

**Hero Title 규칙** (2026-01-07 추가):
- 모바일: `text-4xl` (2.25rem = 36px)
- 데스크탑: `text-5xl` (3rem = 48px)
- `font-extrabold` (800) 사용 - bold(700)보다 한 단계 굵게
- `line-height: 1.3` - 기본값(1.4~1.5)보다 타이트하게
- `common-styles.css`에 정의되어 자동 적용됨

#### 본문 텍스트
```html
<p class="text-slate-300">일반 텍스트</p>
<p class="text-slate-400">보조 텍스트, 설명</p>
<p class="text-sm text-slate-400">작은 설명, 메타정보</p>
```

#### 강조 텍스트
```html
<strong class="text-white">중요한 키워드</strong>
<span class="text-teal-400">브랜드 강조</span>
<span class="text-orange-400">액션/중요 강조</span>
```

#### 한글 이탤릭 금지
> **⚠️ 한글은 이탤릭(기울임꼴)으로 쓰면 어색합니다.**

한글 글꼴은 이탤릭 디자인이 별도로 없어서 기계적으로 기울이면 가독성이 떨어지고 부자연스럽습니다.

```css
/* ❌ 피해야 할 패턴 */
.quote-box { font-style: italic; }  /* 한글 인용문에 이탤릭 금지 */

/* ✅ 권장 패턴 - 다른 방식으로 강조 */
.quote-box {
    background: linear-gradient(...);
    border-left: 4px solid var(--accent-color);
    /* font-style 제거 */
}
```

**강조가 필요하면 이탤릭 대신:**
- `font-weight: 600` 또는 `700` (굵게)
- 배경색 또는 테두리로 구분
- `color: var(--accent-color)` (색상 강조)

---

### 버튼

#### Primary Button (Orange)
```html
<button class="btn-primary px-4 py-2 rounded-lg text-sm">
    다운로드
</button>
```

#### Secondary Button (Slate)
```html
<button class="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
    취소
</button>
```

---

### 레이아웃

#### 그리드 시스템
```html
<!-- 2열 그리드 -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- items -->
</div>

<!-- 3열 그리드 -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- items -->
</div>

<!-- 4열 그리드 (작은 카드용) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- items -->
</div>
```

#### 간격 (Spacing)
- **섹션 간격**: `mb-8` (2rem)
- **카드 간격**: `gap-6` (1.5rem)
- **요소 간격**: `mb-4` (1rem)
- **작은 간격**: `mb-2` (0.5rem)

---

## 실전 적용 사례

### ISO 5259 Ontology Extraction 프로젝트

#### Before (촌스러움)
- 빨간색/녹색 카드 (`bg-red-500/10`, `bg-emerald-500/10`)
- 화려한 gradient 배경
- 두꺼운 border (`border-2`)
- 7-8가지 색상 사용

#### After (미니멀)
- Slate 기본 배경 (`bg-slate-800/50`)
- Teal 강조 (`border-teal-500/40`)
- 얇은 border (`border-slate-700`)
- 3-4가지 색상만 사용 (Orange, Teal, Slate, Cyan)

---

## 색상 팔레트

자세한 내용은 [color.md](./color.md) 참조

**Core Colors**:
- Orange: `#F86825` (브랜드, 액션)
- Teal: `#14b8a6` (강조, 대비)
- Slate: `#475569` (중립, 텍스트)
- Deep Blue: `#020617` (배경)

**사용 비율**:
- Slate (중립): 70%
- Teal (강조): 20%
- Orange (액션): 10%

---

## 가독성 개선 가이드 (2025-11-08 추가)

### 원칙: 내용을 줄이지 말고 시각적 여유 공간 확보

텍스트가 많은 기술 문서의 경우, 내용을 압축하기보다는 **타이포그래피와 간격**을 조정하여 가독성을 높인다.

### 적용 방법 (common-styles.css 기준)

#### 1. 타이포그래피 강화
```css
/* 제목 계층 강화 */
main h2 {
    font-size: 1.75rem;        /* 크기 증가 */
    line-height: 2.25rem;
    margin-top: 3rem;          /* 상단 여백 확대 */
    margin-bottom: 2rem;       /* 하단 여백 확대 */
    padding-top: 1rem;
    border-bottom: 2px solid;  /* 시각적 구분 */
}

main h3 {
    font-size: 1.35rem;
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
}

/* 본문 */
main p {
    margin-bottom: 1.5rem;     /* 단락 간 여백 증가 */
    line-height: 1.8;          /* 줄 간격 증가 */
}
```

#### 2. 목록 가독성
```css
/* 들여쓰기 개선 */
main ul, main ol {
    list-style-position: outside;  /* 마커를 밖으로 */
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
}

main li {
    margin-bottom: 0.75rem;        /* 항목 간 간격 */
    line-height: 1.7;
    padding-left: 0.5rem;
}

/* 중첩 리스트 */
main li ul, main li ol {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
}
```

#### 3. 테이블 개선
```css
/* 통일된 padding */
main table th,
main table td {
    padding: 1rem;              /* Tailwind p-3 대신 CSS로 통일 */
}

/* hover 효과 */
main table tbody tr:hover {
    background-color: rgba(248, 104, 37, 0.05);  /* 주황색 5% */
}
```

#### 4. 섹션 간격
```css
main section {
    margin-bottom: 4rem;        /* 섹션 간 충분한 여백 */
}
```

### HTML에서 주의사항

#### ❌ 피해야 할 패턴
```html
<!-- Tailwind p-3를 개별 셀에 적용 -->
<td class="p-3">내용</td>
<td class="p-3">내용</td>
<!-- 반복적이고 유지보수 어려움 -->

<!-- 테이블 간격 부족 -->
<div class="my-6">
    <table>...</table>
</div>
```

#### ✅ 권장 패턴
```html
<!-- CSS로 테이블 padding 통일 -->
<td>내용</td>
<td>내용</td>
<!-- common-styles.css에서 일괄 관리 -->

<!-- 테이블 간격 확대 -->
<div class="my-8">  <!-- my-6 → my-8 -->
    <table>...</table>
</div>
```

### 적용 결과

**Before** (ISO 5259 기사):
- 텍스트 밀집, 테이블 셀 padding 불균일
- 섹션 간 구분 약함
- 목록 들여쓰기 부족

**After**:
- 단락 간 여백 1.5rem (기존 1rem)
- 테이블 padding 1rem 통일 + hover 효과
- 제목 크기 및 여백 증가
- 목록 outside positioning

### 재사용 팁

1. **모든 기술 문서에 적용**: `common-styles.css`에 정의된 스타일은 `main` 태그 내 모든 콘텐츠에 자동 적용
2. **HTML에서 Tailwind 제거**: 테이블 `p-3` 같은 반복 클래스 제거, CSS로 통일
3. **일관성 유지**: 모든 페이지가 동일한 가독성 기준 적용

---

## 체크리스트

새로운 페이지/컴포넌트 만들 때:

- [ ] 색상이 3-4가지를 넘지 않는가?
- [ ] 모든 카드가 일관된 스타일인가?
- [ ] hover 상태가 정의되어 있는가?
- [ ] 불필요한 gradient나 그림자가 없는가?
- [ ] 타이포그래피 계층이 명확한가?
- [ ] 반응형 디자인이 적용되었는가?
- [ ] 브랜드 컬러(Orange)가 과하게 사용되지 않았는가?
- [ ] 텍스트가 많은 경우 충분한 여백과 줄 간격이 있는가? (2025-11-08 추가)
- [ ] 테이블 셀 padding이 CSS로 통일되어 있는가? (2025-11-08 추가)

---

---

## CSS 파일 구조 및 통합 계획 (2025-12-28 추가)

### 현재 구조 (문제점)

```
css/
├── styles.css           # 메인 페이지 (index.html) 전용
└── theme-variables.css  # 공통 테마 변수 (NEW)

styles/
└── common-styles.css    # 아티클 페이지 전용
```

**문제점**:
- 테마 변수가 `styles.css`와 `common-styles.css`에 **중복 정의**
- 새 스타일 추가 시 양쪽 모두 수정 필요
- 변수 값 불일치 가능성

### 목표 구조

```
css/
├── theme-variables.css  # 공통 테마 변수 (Single Source of Truth)
├── styles.css           # 메인 페이지 전용 (theme-variables.css import)
└── common-styles.css    # 아티클 페이지 전용 (theme-variables.css import)
```

### 공통 테마 변수 (`theme-variables.css`)

다음 CSS 변수들을 통합 관리:

```css
:root {
    /* 배경 */
    --bg-primary, --bg-secondary, --bg-card, --bg-card-start, --bg-card-end

    /* 텍스트 */
    --text-primary, --text-secondary, --text-muted, --heading-color

    /* 브랜드 */
    --accent-color: #F86825;
    --teal-color: #14b8a6;

    /* 컴포넌트 */
    --border-color, --tag-bg, --logo-placeholder-bg
    --header-bg, --footer-bg, --search-bg
}
```

### 공통 컴포넌트 스타일

`theme-variables.css`에 포함된 공통 컴포넌트:

```css
/* 관련글 로고 플레이스홀더 */
.default-logo {
    width: 37.5%;  /* 기존 50%에서 축소 (75%) */
    object-fit: contain;
}

.logo-placeholder {
    background-color: var(--logo-placeholder-bg);
    /* 테마별 배경: Dark=#1e293b, Light=#f5f5f5, Beige=#FFF8E1 */
}

.card:hover .logo-placeholder {
    transform: scale(1.02);
}
```

### 마이그레이션 단계

1. ✅ `css/theme-variables.css` 생성 완료
2. ⬜ `css/styles.css`에서 중복 변수 제거, import 추가
3. ⬜ `styles/common-styles.css`에서 중복 변수 제거, import 추가
4. ⬜ 각 HTML 페이지에서 `theme-variables.css` 로드 확인

### Import 방법

```css
/* styles.css 또는 common-styles.css 상단에 추가 */
@import url('/css/theme-variables.css');
```

또는 HTML에서:
```html
<link rel="stylesheet" href="/css/theme-variables.css">
<link rel="stylesheet" href="/css/styles.css">
```

---

## articles.json 이미지 경로 규칙 (2025-12-28 추가)

### 상대 경로 사용 권장

`articles.json`에서 `image`와 `cardImage` 필드는 **상대 경로**를 사용해야 합니다.

#### ❌ 피해야 할 패턴
```json
{
  "image": "https://blog.pebblous.ai/report/blog-2025-review/image/index.png",
  "cardImage": "https://blog.pebblous.ai/report/blog-2025-review/image/index.png"
}
```
- 절대 URL은 로컬 개발 환경에서 이미지가 로드되지 않음
- `localhost:8000`에서 `blog.pebblous.ai` 도메인 접근 불가

#### ✅ 권장 패턴
```json
{
  "image": "report/blog-2025-review/image/index.png",
  "cardImage": "report/blog-2025-review/image/index.png"
}
```
- 상대 경로는 로컬과 프로덕션 환경 모두에서 작동
- `common-utils.js`의 카드 렌더링 로직이 자동으로 처리

### cardImage 동기화

- `image`에 실제 이미지가 있고 `cardImage`가 비어있으면, `cardImage`를 `image`와 동일하게 설정
- 기본 로고(`Pebblous_BM_Orange_RGB.png`)를 사용하는 경우는 `cardImage`를 비워둠

---

## CSS 버전 관리 (Cache Busting)

### 문제
브라우저가 CSS 파일을 캐시하여 수정 사항이 반영되지 않는 문제 발생.
사용자가 **강제 새로고침(Ctrl+Shift+R)** 해야만 변경 사항이 보임.

### 해결책
CSS 파일 로드 시 버전 쿼리 스트링 추가:

```html
<!-- ❌ 잘못된 방식 -->
<link rel="stylesheet" href="/styles/common-styles.css">

<!-- ✅ 올바른 방식 -->
<link rel="stylesheet" href="/styles/common-styles.css?v=20260107">
```

### 규칙
1. **버전 포맷**: `?v=YYYYMMDD` (수정 날짜)
2. **CSS 수정 시**: 모든 관련 HTML 파일의 버전 번호 업데이트
3. **일괄 업데이트**: grep으로 찾아서 sed로 교체
   ```bash
   # 현재 버전 확인
   grep -r "common-styles.css" --include="*.html" | head -5

   # 버전 업데이트 (예: v=20260107 → v=20260108)
   find . -name "*.html" -exec sed -i '' 's/common-styles.css?v=20260107/common-styles.css?v=20260108/g' {} \;
   ```

### 적용 대상
- `/styles/common-styles.css` - 전역 스타일 (모든 페이지)
- `/scripts/common-utils.js` - 공통 유틸리티 (이미 버전 적용됨)

---

## 장문 아티클 타이포그래피 가이드 (2026-02-01 추가)

> **⚠️ 중요: 이 가이드의 값은 `/styles/common-styles.css`에 반드시 동기화되어야 합니다.**
> - 가이드만 수정하고 CSS를 수정하지 않으면 각 HTML에서 inline CSS로 덮어쓰게 되어 일관성이 깨집니다.
> - 가이드 값 변경 시 `common-styles.css`도 함께 업데이트하세요.

### 원칙: 긴 한글 텍스트의 가독성 최우선

학술적 내용이나 기술 문서처럼 텍스트가 긴 아티클에서는 **충분한 줄간격과 일관된 글꼴 크기**가 핵심입니다.

### 권장 설정 값

#### 본문 (body)
```css
body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;           /* 기본 크기 - 16px보다 큼 */
    letter-spacing: -0.01em;   /* 한글 자간 미세 조정 */
}
```

#### 본문 단락 (main p)
```css
main p {
    line-height: 2.1;          /* 충분한 줄간격 - 눈의 피로 감소 */
    margin-bottom: 1.25rem;
}
```

#### 리스트 항목 (main li)
```css
main li {
    font-size: 1rem;           /* 본문과 동일 - 0.95rem 이하 지양 */
    line-height: 2.0;          /* 본문에 준하는 줄간격 */
    margin-bottom: 0.5rem;
}
```

#### 카드/박스 내부 텍스트
```css
/* 카드 내부도 본문과 동일한 타이포그래피 적용 */
.key-concept-box,
.dialectic-card,
.arch-card {
    font-size: 1rem;
    line-height: 2.0;
}

.key-concept-box p,
.dialectic-card .card-desc,
.arch-card .arch-desc {
    font-size: 1rem;           /* 0.875rem → 1rem */
    line-height: 2.0;          /* 줄간격 통일 */
}
```

### ❌ 피해야 할 패턴

```css
/* ❌ 글꼴이 너무 작음 */
.card-desc { font-size: 0.875rem; }  /* 14px - 가독성 저하 */
.arch-example { font-size: 0.8rem; } /* 12.8px - 너무 작음 */

/* ❌ 줄간격이 너무 좁음 */
main p { line-height: 1.5; }         /* 한글 장문에 부적합 */
main li { line-height: 1.5; }

/* ❌ 카드마다 다른 글꼴 크기 */
.card-a p { font-size: 0.9rem; }
.card-b p { font-size: 0.85rem; }
```

### ✅ 권장 패턴

```css
/* ✅ 모든 카드 텍스트 통일 */
.key-concept-box p,
.dialectic-card .card-desc,
.arch-card .arch-desc,
.highlight-box p {
    font-size: 1rem;
    line-height: 2.0;
}

/* ✅ 본문 줄간격 충분히 */
main p {
    line-height: 2.0 ~ 2.1;    /* 2.0 이상 권장 */
}

/* ✅ 리스트도 본문 수준 */
main li {
    font-size: 1rem;
    line-height: 2.0;
}
```

### 적용 예시

**Before** (가독성 낮음):
- main p line-height: 1.85
- main li font-size: 0.95rem, line-height: 1.75
- .card-desc: 0.875rem

**After** (가독성 높음):
- main p line-height: 2.1
- main li font-size: 1rem, line-height: 2.0
- .card-desc: 1rem, line-height: 2.0

### 체크리스트

장문 아티클 작성 시:
- [ ] body font-size가 18px인가?
- [ ] main p line-height가 2.0 이상인가?
- [ ] main li font-size가 1rem (본문과 동일)인가?
- [ ] 카드/박스 내부 텍스트가 본문과 동일한 크기인가?
- [ ] 모든 텍스트 요소의 줄간격이 2.0 이상인가?

---

## 업데이트 로그

- **2026-02-08**: 스타일 표준 참조 페이지 추가 (data-quality.html), 왼쪽 정렬 레이아웃 표준화
- **2026-02-03**: 한글 이탤릭 금지 규칙 추가, common-styles.css 동기화 경고 추가
- **2026-02-01**: 장문 아티클 타이포그래피 가이드 추가 (줄간격 2.0+, 카드 텍스트 1rem 통일)
- **2026-01-07**: CSS 버전 관리(Cache Busting) 규칙 추가, Hero Title 스타일 규칙 추가
- **2025-12-28**: articles.json 이미지 경로 규칙 추가, CSS 파일 구조 통합 계획 추가, 관련글 로고 플레이스홀더 스타일 추가
- **2025-11-08**: 가독성 개선 가이드 추가 (타이포그래피, 목록, 테이블)
- **2025-11-01**: 초기 생성, ISO 5259 프로젝트 리팩토링 기반
