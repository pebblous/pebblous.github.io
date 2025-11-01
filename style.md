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

## 체크리스트

새로운 페이지/컴포넌트 만들 때:

- [ ] 색상이 3-4가지를 넘지 않는가?
- [ ] 모든 카드가 일관된 스타일인가?
- [ ] hover 상태가 정의되어 있는가?
- [ ] 불필요한 gradient나 그림자가 없는가?
- [ ] 타이포그래피 계층이 명확한가?
- [ ] 반응형 디자인이 적용되었는가?
- [ ] 브랜드 컬러(Orange)가 과하게 사용되지 않았는가?

---

## 업데이트 로그

- **2025-11-01**: 초기 생성, ISO 5259 프로젝트 리팩토링 기반
