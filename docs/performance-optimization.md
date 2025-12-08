# 페이지 성능 최적화 가이드

**작성일**: 2025-12-06
**목적**: 블로그 페이지 로딩 속도 및 성능 최적화 전략 정의

---

## 🎯 최적화 목표

- **First Contentful Paint (FCP)**: < 1.8초
- **Largest Contentful Paint (LCP)**: < 2.5초
- **Time to Interactive (TTI)**: < 3.8초
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1

---

## 📊 최적화 우선순위

### 우선순위 1: CSS 최적화 (높음)

#### 문제: Tailwind CDN 사용
```html
<!-- ❌ 현재 (느림) -->
<script src="https://cdn.tailwindcss.com"></script>
```

**문제점**:
- 런타임 CSS 컴파일 (75KB+ 다운로드)
- First Paint 지연 (평균 300-500ms)
- 불필요한 JavaScript 실행

**해결책 A: Tailwind CLI 빌드** (권장)
```bash
# 1. Tailwind 설치
npm install -D tailwindcss

# 2. tailwind.config.js 생성
npx tailwindcss init

# 3. 빌드
npx tailwindcss -i ./css/input.css -o ./css/output.css --minify
```

**tailwind.config.js**:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./project/**/*.html",
    "./components/**/*.html",
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'pebblous-orange': '#F86825',
        'deep-blue': '#020617',
        'teal': '#14b8a6'
      }
    }
  }
}
```

**HTML 변경**:
```html
<!-- ✅ 개선 후 -->
<link rel="stylesheet" href="/css/tailwind.min.css?v=20250106">
```

**예상 개선**:
- CSS 파일 크기: 75KB → 15KB (80% 감소)
- FCP 개선: 300-500ms 단축

---

**해결책 B: 인라인 Critical CSS** (대안)

페이지 상단에 필수 CSS만 인라인으로 삽입:

```html
<style>
/* Critical CSS - Above the Fold */
body { font-family: -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif; }
.container { max-width: 1400px; margin: 0 auto; }
.themeable-heading { color: var(--heading-color); }
/* ... 상단 콘텐츠 필수 스타일만 */
</style>

<!-- 나머지 CSS는 비동기 로드 -->
<link rel="preload" href="/css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/styles.css"></noscript>
```

---

### 우선순위 2: JavaScript 최적화 (중간)

#### 문제: 공유 버튼 중복 로직

**현재 코드** (1715-1748번 라인):
```javascript
// 각 버튼마다 개별 이벤트 리스너 (중복 코드)
document.getElementById('copy-url-btn').addEventListener('click', async function() { ... });
document.getElementById('share-twitter-btn').addEventListener('click', function() { ... });
document.getElementById('share-facebook-btn').addEventListener('click', function() { ... });
document.getElementById('share-linkedin-btn').addEventListener('click', function() { ... });
```

**개선 후**:
```javascript
// 공통 함수로 통합
const shareHandlers = {
    'copy-url': async (url, title) => {
        await navigator.clipboard.writeText(url);
        return '복사됨!';
    },
    'twitter': (url, title) => {
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        window.open(shareUrl, '_blank', 'width=550,height=420');
    },
    'facebook': (url) => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'width=550,height=420');
    },
    'linkedin': (url) => {
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'width=550,height=420');
    }
};

// 이벤트 위임 사용
document.querySelectorAll('[data-share]').forEach(btn => {
    btn.addEventListener('click', async function() {
        const platform = this.dataset.share;
        const handler = shareHandlers[platform];
        if (handler) {
            const result = await handler(pageUrl, pageTitle);
            if (result) {
                // 복사 완료 피드백
                this.querySelector('span').textContent = result;
                setTimeout(() => {
                    this.querySelector('span').textContent = this.dataset.originalText;
                }, 2000);
            }
        }
    });
});
```

**HTML 변경**:
```html
<button id="copy-url-btn" data-share="copy-url" data-original-text="URL 복사" class="share-btn">
    <svg>...</svg>
    <span>URL 복사</span>
</button>
<button data-share="twitter" class="share-btn">
    <svg>...</svg>
    <span>트위터</span>
</button>
<!-- ... -->
```

**예상 개선**:
- JavaScript 크기: ~200 bytes 감소
- 코드 가독성 및 유지보수성 향상

---

#### common-utils.js로 이동 (선택사항)

공유 버튼 로직을 `PebblousPage` 모듈에 통합:

```javascript
// common-utils.js에 추가
const PebblousPage = {
    // ... 기존 코드 ...

    initShareButtons: function() {
        const pageUrl = window.location.href;
        const pageTitle = document.getElementById('page-title')?.textContent || document.title;

        const handlers = { /* ... 위 shareHandlers 코드 ... */ };

        document.querySelectorAll('[data-share]').forEach(btn => {
            btn.addEventListener('click', async function() {
                const platform = this.dataset.share;
                const handler = handlers[platform];
                if (handler) {
                    const result = await handler(pageUrl, pageTitle);
                    // ... 피드백 로직 ...
                }
            });
        });
    },

    init: async function(config) {
        // ... 기존 초기화 코드 ...
        this.initShareButtons(); // 공유 버튼 자동 초기화
    }
};
```

**HTML에서 제거**:
```javascript
// ❌ 제거 (common-utils.js에서 자동 처리)
// document.getElementById('copy-url-btn').addEventListener(...)
// document.getElementById('share-twitter-btn').addEventListener(...)
// ...
```

---

### 우선순위 3: Font 최적화 (낮음)

#### 현재 코드
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**개선: Font Preload 추가**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical Font Preload -->
<link rel="preload"
      href="https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5CgmOelzI7rgQsWYrzw.woff2"
      as="font"
      type="font/woff2"
      crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**대안: Self-hosted Fonts**
```html
<!-- Google Fonts 대신 로컬 폰트 사용 -->
<style>
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/noto-sans-kr-v36-regular.woff2') format('woff2');
}
</style>
```

**예상 개선**:
- DNS lookup 제거: ~50-100ms
- Font 로딩 속도 향상

---

## 🔧 추가 최적화 전략

### 1. 이미지 최적화

**현재**:
```html
<img src="/project/PhysicalAI/image/data-pipeline-for-physical-ai-01.png">
```

**개선**:
```html
<!-- WebP + Lazy Loading -->
<picture>
  <source srcset="/project/PhysicalAI/image/data-pipeline-for-physical-ai-01.webp" type="image/webp">
  <img src="/project/PhysicalAI/image/data-pipeline-for-physical-ai-01.png"
       loading="lazy"
       width="1200"
       height="630"
       alt="Physical AI Data Pipeline">
</picture>
```

**WebP 변환 스크립트**:
```bash
#!/bin/bash
# convert-to-webp.sh
find . -name "*.png" -o -name "*.jpg" | while read img; do
  cwebp -q 85 "$img" -o "${img%.*}.webp"
done
```

---

### 2. Google Tag Manager 최적화

**현재**: 동기 로딩 (17-21번 라인)

**개선**: Partytown 사용 (Web Worker에서 실행)
```html
<!-- Partytown 라이브러리 -->
<script>
  partytown = {
    forward: ['dataLayer.push']
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/@builder.io/partytown@0.8.1/lib/partytown.js"></script>

<!-- GTM을 Web Worker에서 실행 -->
<script type="text/partytown">
  (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-57L9F58B');
</script>
```

**예상 개선**:
- Main Thread Blocking Time 감소: ~100-200ms

---

### 3. Resource Hints 추가

```html
<head>
  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">

  <!-- Preconnect (중요 리소스) -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Preload (Critical Resources) -->
  <link rel="preload" href="/scripts/common-utils.js?v=20250110-4" as="script">
  <link rel="preload" href="/css/tailwind.min.css" as="style">
</head>
```

---

## 📈 성능 측정 도구

### 1. Lighthouse (Chrome DevTools)
```bash
# CLI로 실행
npm install -g lighthouse
lighthouse https://blog.pebblous.ai/project/PhysicalAI/data-pipeline-for-physical-ai-01.html --view
```

### 2. WebPageTest
- URL: https://www.webpagetest.org/
- Test Location: Seoul, South Korea
- Connection: 4G LTE

### 3. Google PageSpeed Insights
- URL: https://pagespeed.web.dev/

---

## 🚀 구현 로드맵

### Phase 1: 즉시 적용 (1일)
- [ ] Tailwind CDN → Tailwind CLI 빌드
- [ ] 공유 버튼 로직 통합 (`common-utils.js`)
- [ ] Resource Hints 추가

### Phase 2: 단기 적용 (1주)
- [ ] 이미지 WebP 변환 스크립트 작성
- [ ] Critical CSS 추출 및 인라인
- [ ] Font Preload 추가

### Phase 3: 중기 적용 (1개월)
- [ ] Self-hosted Fonts 구축
- [ ] Partytown으로 GTM 최적화
- [ ] Service Worker 캐싱 전략

---

## 📝 체크리스트

새 페이지 작성 시 반드시 확인:

- [ ] Tailwind CLI 빌드 CSS 사용 (CDN 금지)
- [ ] 공유 버튼 `data-share` 속성 사용
- [ ] 이미지에 `loading="lazy"` 및 `width`, `height` 속성
- [ ] WebP 형식 이미지 제공 (`<picture>` 태그)
- [ ] Font Preload 추가
- [ ] Resource Hints (dns-prefetch, preconnect, preload)
- [ ] `common-utils.js` 버전 쿼리 스트링 업데이트

---

## 📚 참고 문서

- [Web.dev Performance Guide](https://web.dev/performance/)
- [Tailwind CSS Production Optimization](https://tailwindcss.com/docs/optimizing-for-production)
- [Google Fonts Optimization](https://sia.codes/posts/making-google-fonts-faster/)
- [Partytown Documentation](https://partytown.builder.io/)

---

## 버전 히스토리

- **2025-12-06**: 초기 작성 (Tailwind CDN, 공유 버튼, Font 최적화 전략)
