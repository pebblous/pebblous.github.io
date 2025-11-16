# 블로그 레이아웃 가이드라인

**최종 업데이트**: 2025-11-16
**작성자**: Pebblous Tech Team

---

## 1. 개요

16:9 와이드 스크린에서 블로그 가독성을 향상시키기 위한 레이아웃 패턴입니다.
기존의 전체 폭 레이아웃에서 **중앙 정렬된 800px 본문 + 240px sticky TOC** 레이아웃으로 변경되었습니다.

### 적용 배경
- **문제점**: 2560px 와이드 스크린에서 본문이 1900px까지 늘어나 가독성 저하
- **해결책**: 최적 읽기 폭(600-800px) 기준으로 본문 제한 + TOC 좌측 고정
- **디자인 원칙**: Medium, Notion, Substack 등 주요 블로그 플랫폼 참고

---

## 2. 레이아웃 구조

### HTML 구조
```html
<!-- 컨테이너: 최대 폭 제한 -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">

    <!-- Flex 레이아웃 (데스크탑에서만 활성화) -->
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

        <!-- TOC 사이드바 (좌측, sticky) -->
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
            <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">
                <!-- TOC 항목들 -->
            </ul>
        </nav>

        <!-- 본문 (중앙, 최대 800px) -->
        <main class="max-w-[800px] px-4 sm:px-6">
            <!-- 본문 내용 -->
        </main>

    </div><!-- End Flex Layout -->
</div>
```

---

## 3. Tailwind 클래스 설명

### 컨테이너 클래스
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
```
- `max-w-[1400px]`: 전체 페이지 최대 폭 제한 (와이드 스크린 대응)
- `container mx-auto`: 가로 중앙 정렬
- `px-4 sm:px-6 lg:px-8`: 반응형 패딩 (모바일 → 태블릿 → 데스크탑)

### Flex 레이아웃
```html
<div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
```
- `lg:flex`: 1024px 이상에서만 flex 활성화 (모바일/태블릿은 stack)
- `lg:gap-8`: TOC와 본문 사이 간격 2rem
- `lg:justify-center`: 가로 중앙 정렬
- `lg:items-start`: 상단 정렬

### TOC 사이드바
```html
<nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
```
- `hidden lg:block`: 모바일에서 숨김, 데스크탑에서 표시
- `lg:w-[240px]`: 고정 폭 240px
- `lg:shrink-0`: flex 축소 방지
- `sticky top-20`: 스크롤 시 상단 80px 위치에 고정
- `self-start`: flex 컨테이너 내 상단 정렬

### 본문
```html
<main class="max-w-[800px] px-4 sm:px-6">
```
- `max-w-[800px]`: 최적 가독성을 위한 폭 제한
- `px-4 sm:px-6`: 좌우 균등한 여백 (모바일 1rem, 태블릿 1.5rem)

---

## 4. 반응형 동작

### 데스크탑 (≥ 1024px)
- TOC 좌측에 240px 폭으로 sticky 고정
- 본문 중앙에 최대 800px 폭으로 배치
- 전체 레이아웃 1400px 이내로 제한

### 태블릿 / 모바일 (< 1024px)
- TOC 숨김 (모바일 토글 버튼으로 대체)
- 본문이 전체 폭 사용 (max-width는 유지)
- Stack 레이아웃 (flex 비활성화)

---

## 5. 기존 패턴에서 변경사항

### Before (Grid 레이아웃)
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:grid lg:grid-cols-4 lg:gap-8">
    <nav class="hidden lg:block lg:col-span-1 sticky top-20 self-start h-auto pr-4">
        <!-- TOC -->
    </nav>
    <main class="lg:col-span-3">
        <!-- 본문 -->
    </main>
</div>
```

**문제점**:
- 와이드 스크린에서 본문이 무제한으로 늘어남 (25% TOC + 75% 본문)
- TOC가 nested structure 때문에 sticky 동작 불안정
- 좌우 여백 불균형

### After (Flex 레이아웃)
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <!-- TOC -->
        </nav>
        <main class="max-w-[800px] px-4 sm:px-6">
            <!-- 본문 -->
        </main>
    </div>
</div>
```

**개선사항**:
- ✅ 본문 폭 800px로 고정 (최적 가독성)
- ✅ TOC sticky 동작 안정화
- ✅ 좌우 여백 균등 (`px-4 sm:px-6`)
- ✅ 중앙 정렬로 시각적 균형

---

## 6. 새 블로그 작성 시 체크리스트

### 1단계: 컨테이너 설정
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
```

### 2단계: Flex 레이아웃 추가
```html
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
```

### 3단계: TOC 구조
```html
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
            <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">
                <!-- TOC 항목 -->
            </ul>
        </nav>
```

### 4단계: 본문 구조
```html
        <main class="max-w-[800px] px-4 sm:px-6">
            <!-- 본문 내용 -->
        </main>
```

### 5단계: 닫는 태그
```html
        </div><!-- End Flex Layout -->
    </div>
```

### 6단계: 모바일 TOC 버튼 (선택사항)
```html
<!-- Flex Layout 외부에 배치 -->
<button id="mobile-toc-toggle" class="lg:hidden p-3 rounded-full themeable-card border shadow-lg">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
</button>
```

---

## 7. 적용된 파일 목록

### PhysicalAI 프로젝트
1. `project/PhysicalAI/data-startup-physical-ai-01.html`
2. `project/PhysicalAI/data-pipeline-for-physical-ai-01.html`

### ISO5259 프로젝트
3. `project/ISO5259/5259-pbls-dataclinic-02.html`
4. `project/ISO5259/5259-pbls-dataclinic-01.html`
5. `project/ISO5259/5259-2-cheetsheet-01.html`
6. `project/ISO5259/5259_text_qa.html`

### 기타 프로젝트
7. `project/SyntheticData/synthetic-data-pricing-01.html`
8. `project/IR/PBLS-IR-Physical-AI-01.html`
9. `project/DataClinic/ai-data-qa-framework-01.html`
10. `project/CURK/Mini-Project/CURK-2025-09-29/index.html`
11. `project/CURK/Mini-Project/CURK-2025-09-29/index_new.html`
12. `project/CURK/Mini-Project/CURK-2025-09-29/pbls-embedding+ontoloyg-01.html`

**총 13개 파일 (2025-11-16 기준)**

---

## 8. 디자인 원칙

### 가독성 최우선
- 본문 폭: 600-800px (타이포그래피 모범 사례)
- 줄 길이: 65-75자 (최적 읽기 경험)
- 좌우 여백: 균등 배치

### 사용자 경험
- TOC sticky: 긴 글에서 내비게이션 편의성
- 반응형: 모든 디바이스에서 최적 레이아웃
- 시각적 계층: 명확한 구조 구분

### 유지보수성
- Tailwind 유틸리티 클래스: CSS 파일 불필요
- 일관된 패턴: 모든 블로그에 동일 구조
- 쉬운 수정: 클래스 조합으로 커스터마이징

---

## 9. 참고 자료

### 타이포그래피 연구
- [The Elements of Typographic Style](https://www.typography.com/blog/text-for-proofing-fonts)
- Medium.com 가독성 가이드

### 레이아웃 벤치마크
- Medium.com: 680px 본문
- Notion: 740px 본문
- Substack: 640px 본문
- **Pebblous 선택**: 800px (테이블/코드 블록 고려)

---

## 10. 트러블슈팅

### TOC가 sticky로 동작하지 않는 경우
**원인**: 부모 요소에 `relative` 또는 `absolute` 위치 지정
**해결책**: TOC에 직접 `sticky` 적용, nested structure 제거

### 본문이 중앙 정렬되지 않는 경우
**원인**: `justify-center` 누락
**해결책**: Flex 컨테이너에 `lg:justify-center` 추가

### 모바일에서 레이아웃이 깨지는 경우
**원인**: `lg:` prefix 누락
**해결책**: 모든 데스크탑 전용 클래스에 `lg:` 접두사 확인

---

**이 가이드라인은 실제 적용 결과를 기반으로 지속적으로 업데이트됩니다.**
