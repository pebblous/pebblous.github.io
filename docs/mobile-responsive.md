# Mobile Responsive Guidelines

페블러스 블로그의 모바일 반응형 정책을 정의합니다.

---

## 1. 브레이크포인트 전략

Tailwind CSS 기본 브레이크포인트를 따르며, 커스텀 미디어쿼리는 `767px`(= md 하한)을 모바일 전환점으로 사용합니다.

| 브레이크포인트 | 폭 | Tailwind | 용도 |
|---|---|---|---|
| Mobile | 0–767px | (기본) | 1열 레이아웃, TOC 숨김, 모바일 메뉴 |
| Tablet (md) | 768px+ | `md:` | 2열 그리드, 헤더 확장, Hero 제목 확대 |
| Desktop (lg) | 1024px+ | `lg:` | 3열 그리드, TOC 사이드바, 헤더 정렬 |
| Wide (xl) | 1280px+ | `xl:` | 4열 그리드 |

**규칙**: 커스텀 CSS에서 `max-width: 640px` 사용 금지. 모바일 전환점은 항상 `max-width: 767px`.

---

## 2. 모바일 퍼스트 원칙

- Tailwind 유틸리티는 모바일 퍼스트 (`sm:`, `md:`, `lg:`, `xl:` = 위로 확장)
- 기본 스타일이 모바일이고, 브레이크포인트에서 데스크톱 스타일 추가
- 커스텀 CSS도 동일 원칙: `min-width`로 확장, `max-width`는 모바일 전용 예외에만

---

## 3. 타이포그래피 모바일 규칙

### 본문
- **18px** 모든 화면에서 동일 (모바일에서도 충분한 가독성)
- `line-height: 2.1` (단락), `2.0` (리스트)

### 제목 (반응형)
| 요소 | 모바일 (< 768px) | 데스크톱 (768px+) |
|---|---|---|
| h1/Hero | 2.25rem (36px) | 3rem (48px) |
| h2 | 1.5rem (24px) | 1.75rem (28px) |
| h3 | 1.2rem (19.2px) | 1.35rem (21.6px) |

### 카드/박스 내부 텍스트 (모바일 최소 크기)
| 요소 | 데스크톱 | 모바일 최소 |
|---|---|---|
| `.stat-desc` | 0.75rem (12px) | 0.8125rem (13px) |
| `.stat-label` | 0.9rem (14.4px) | 0.9375rem (15px) |
| `.text-xs` (main 내) | 0.75rem (12px) | 0.8125rem (13px) |
| 테이블 | 1rem | 0.875rem (14px) |

**원칙**: 아티클 본문 영역 내 모든 텍스트는 모바일에서 **최소 13px** 보장.

---

## 4. 터치 타겟

- 모든 버튼/링크의 터치 타겟: **최소 44px** (Google 권장 48px)
- `touch-action: manipulation` 적용 (300ms 딜레이 제거)
- 모바일 TOC 메뉴 링크: `min-height: 44px` + `display: flex; align-items: center`

---

## 5. 레이아웃 패턴

### 컨테이너 패딩
```
px-4 (16px)  →  sm:px-6 (24px)  →  lg:px-8 (32px)
```

### 아티클 페이지
- 모바일: 단일 열, TOC 숨김
- 데스크톱 (lg+): Flex — TOC 240px + gap 32px + main 800px

### 그리드
```
grid-cols-1  →  sm:grid-cols-2  →  lg:grid-cols-3  →  xl:grid-cols-4
gap-6        →                     lg:gap-8
```

---

## 6. 테마 & prefers-color-scheme

- 3개 테마: dark, light, beige
- **OS 다크모드 자동 감지**: `prefers-color-scheme: dark` → 첫 방문 시 dark 테마 적용
- 사용자가 수동 선택하면 `localStorage`에 저장, 이후 OS 설정 무시
- 우선순위: URL param `?theme=` > localStorage > OS preference > default (light)

---

## 7. 성능 최적화

- **파티클 캔버스**: 모바일(`< 768px` 또는 모바일 UA)에서 비활성화
- **스크롤 이벤트**: 10ms 쓰로틀 + `{ passive: true }`
- **터치 이벤트**: `{ passive: true }` 필수
- **폰트**: `display=swap` (FOIT 방지)
- **CLS 방지**: `#header-placeholder` min-height 64px (모바일) / 72px (데스크톱)

---

## 8. 반응형 이미지 (향후 적용)

현재 모든 이미지는 원본 크기로 제공됩니다. 향후 적용 방향:

### srcset 패턴
```html
<img srcset="image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w"
     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
     src="image-800w.jpg" alt="..." loading="lazy">
```

### picture 패턴 (WebP 지원)
```html
<picture>
    <source srcset="image-400w.webp 400w, image-800w.webp 800w" type="image/webp">
    <source srcset="image-400w.jpg 400w, image-800w.jpg 800w" type="image/jpeg">
    <img src="image-800w.jpg" alt="..." loading="lazy">
</picture>
```

### 적용 시 필요 사항
1. 이미지 리사이징 스크립트 (tools/ 하위)
2. OG 이미지 생성기(`tools/generate-og-image.js`) 업데이트
3. `card-renderer.js` srcset 지원 추가
4. articles.json에 이미지 크기별 경로 필드 추가

---

## 9. 모바일 TOC

- 데스크톱 (lg+): `hidden lg:block` 사이드바, `sticky top-20`
- 모바일: `#mobile-toc-toggle` 고정 버튼 (bottom: 80px, right: 20px)
- 메뉴: `#mobile-toc-menu` (bottom: 140px, max-width: 280px, max-height: 60vh)
- 토글: `.show` 클래스로 display 전환

---

## CSS 파일 참조

| 파일 | 범위 |
|---|---|
| `styles/common-styles.css` | 아티클 페이지 (모바일 최적화 포함) |
| `css/styles.css` | 인덱스 페이지 |
| `css/theme-variables.css` | 테마 CSS 변수 |
| `styles/input.css` | Tailwind 커스텀 유틸리티 |
| `styles/tailwind-build.css` | Tailwind 빌드 출력 |
