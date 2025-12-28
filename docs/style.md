# Pebblous UX/UI Design Philosophy

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
<h1 class="text-4xl md:text-5xl font-bold text-white">메인 타이틀</h1>
<h2 class="text-3xl font-bold text-white">섹션 타이틀</h2>
<h3 class="text-2xl font-semibold text-slate-200">서브섹션</h3>
<h4 class="text-xl font-semibold text-slate-200">카드 제목</h4>
<h5 class="text-lg font-semibold text-white">작은 제목</h5>
```

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

## 업데이트 로그

- **2025-12-28**: CSS 파일 구조 통합 계획 추가, 관련글 로고 플레이스홀더 스타일 추가
- **2025-11-08**: 가독성 개선 가이드 추가 (타이포그래피, 목록, 테이블)
- **2025-11-01**: 초기 생성, ISO 5259 프로젝트 리팩토링 기반
