# 새 블로그 포스팅 작성 워크플로우

**최종 업데이트**: 2025-11-29
**작성자**: Pebblous Data Communication Team

---

## 개요

이 문서는 페블러스 블로그에 새로운 기술 포스팅을 작성할 때 따라야 할 표준 워크플로우를 정의합니다.

**기본 참조 블로그**: `project/PhysicalAI/data-pipeline-for-physical-ai-01.html`
- 특별한 언급이 없으면 이 파일을 레이아웃, 스타일, 구조의 기본 템플릿으로 사용합니다.
- Header/Footer 컴포넌트, TOC 구조, 테마 시스템, SEO 메타태그 등 모든 요소가 포함되어 있습니다.

---

## 1단계: 초기 요청 및 소스 지정

### 필수 정보 제공

새 포스팅 요청 시 다음 정보를 명확히 지정:

```
✅ 소스 파일 경로: project/[카테고리]/source/[파일명].md
✅ 출력 HTML 경로: project/[카테고리]/[포스팅명].html
✅ 카테고리: tech / case-study / insights / announcement
✅ SEO 전략 및 지향점
✅ 핵심 키워드 (3-5개)
✅ 참조할 기존 포스팅 (선택사항)
```

### 예시

```
소스 파일: project/CURK/source/LLM 지능 논쟁 요약 및 비평.md
출력 경로: project/CURK/intelligent-parrot.html
카테고리: tech
SEO 전략: 페블러스의 LLM 이론/신경과학 관심 표현,
          DataClinic/AADS 개발의 이론적 근거 제시
핵심 키워드: LLM, AGI, 창발적 지능, 신경과학, 미래 AI
참조 템플릿: project/PhysicalAI/data-pipeline-for-physical-ai-01.html
```

---

## 2단계: 소스 파일 분석

### Assistant 수행 작업

1. **Markdown 소스 파일 읽기**
   - 전체 구조 파악 (섹션, 헤딩 계층)
   - 핵심 내용 추출
   - 이미지/도표 리소스 확인
   - 참고문헌 개수 및 형식 파악

2. **컨텐츠 구조화 계획**
   - HTML 섹션 분할 전략
   - TOC (Table of Contents) 구성
   - FAQ 후보 질문 도출
   - 핵심 키워드 추출 (한글 + 영문)

### 체크포인트

- [ ] 소스 파일의 전체 길이 확인 (예상 읽기 시간)
- [ ] 주요 섹션 개수 파악 (3-6개 권장)
- [ ] 참고문헌이 10개 이상인 경우 선별 전략 수립
- [ ] 이미지/차트 포함 여부 및 경로 확인

---

## 3단계: 스타일 가이드 학습

### 필수 참조 문서 (자동)

Assistant가 다음 3개 문서를 자동으로 읽고 적용:

1. **`docs/style.md`**
   - 미니멀리즘 원칙
   - 색상 절제 (페이지당 3-4색 최대)
   - 인터랙티브 디자인 패턴
   - 타이포그래피 계층
   - 가독성 개선 원칙 (여백, 줄 간격)

2. **`docs/seo.md`**
   - FAQ Schema 전략 (HTML + JSON-LD 이중 구현)
   - 메타태그 체크리스트 (43개 항목)
   - Physical AI 키워드 전략 (한글 우선, 영문 병기)
   - Open Graph, Twitter Cards 설정
   - Related Posts 내부 링크

3. **`docs/layout-guidelines.md`**
   - 본문 최대 폭: 800px (가독성 최적화)
   - TOC 사이드바: 240px, sticky positioning
   - Flex 레이아웃 (데스크탑), Stack 레이아웃 (모바일)
   - 반응형 브레이크포인트: lg (1024px)

### 적용 원칙

```html
<!-- 컨테이너 -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
    <!-- Flex 레이아웃 -->
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
        <!-- TOC 사이드바 (240px, sticky) -->
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <!-- TOC 내용 -->
        </nav>

        <!-- 본문 (800px 최대) -->
        <main class="max-w-[800px] px-4 sm:px-6">
            <!-- 포스팅 내용 -->
        </main>
    </div>
</div>
```

---

## 4단계: 참조 템플릿 분석 (선택)

### 비주얼 패턴 추출

사용자가 참조 템플릿을 지정한 경우, 다음 요소 추출:

#### Interactive Elements

```css
/* 호버 효과가 있는 카드 */
.interactive-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 4px solid var(--border-color);
}

.interactive-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-left-color: var(--accent-color);
}

/* Gradient 테두리 통계 카드 */
.stat-card {
    position: relative;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, var(--accent-color), var(--teal-color));
}
```

#### Table Enhancements

```css
/* 테이블 호버 효과 */
main table tbody tr:hover {
    background-color: rgba(248, 104, 37, 0.05);
    transition: background-color 0.2s ease;
}
```

#### Timeline & Icon Wrappers

```html
<!-- Timeline 아이템 -->
<div class="timeline-item border-l-2 border-teal-500/40 pl-6">
    <div class="icon-wrapper">
        <svg>...</svg>
    </div>
    <h3>타임라인 제목</h3>
    <p>설명...</p>
</div>
```

---

## 4.5단계: 비주얼 요소 작성 가이드라인

### 설명 없는 비주얼 사용 지양

허브 문서 및 일반 블로그 포스팅에서 **테이블, 카드박스, 차트 등 비주얼 요소**를 사용할 때는 반드시 **문장 형태의 설명**을 함께 제공합니다.

#### 원칙

1. **섹션 도입부**: 각 섹션 헤더 아래에 3-4문장의 도입 설명을 추가합니다.
2. **비주얼 앞 요약**: 테이블/카드박스 바로 위에 내용을 요약하는 1-2문장을 추가합니다.
3. **글꼴 크기**: 요약 문장은 기본 크기(`themeable-text`)로 유지하여 가독성을 확보합니다.

#### 효과

- 독자가 **문장으로 읽고**, **비주얼로 기억을 강화**하는 이중 학습 효과
- 해당 분야에 익숙하지 않은 독자도 맥락을 이해하고 비주얼을 해석 가능
- SEO 측면에서 텍스트 콘텐츠 밀도 향상

#### 예시

**Before (지양)**:
```html
<h3>3단계 진단 시스템</h3>
<table>...</table>
```

**After (권장)**:
```html
<h3>3단계 진단 시스템</h3>
<p class="themeable-text mb-4">
    아래 표는 진단 레벨별 범위와 대응하는 ISO 표준입니다.
    Level I은 기초 진단, Level II는 일반형 렌즈 기반 분포 분석,
    Level III는 도메인 특화 정밀 분석을 수행합니다.
</p>
<table>...</table>
```

#### 체크리스트

- [ ] 모든 섹션에 도입 문장(3-4문장)이 있는가?
- [ ] 모든 테이블 위에 요약 문장이 있는가?
- [ ] 모든 카드박스 그리드 위에 요약 문장이 있는가?
- [ ] 요약 문장이 비주얼의 핵심 내용을 미리 안내하는가?

---

## 5단계: HTML 파일 생성

### 필수 섹션 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- 1. Meta Tags (기본) -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Pebblous Data Communication Team">

    <!-- 2. Google Tag Manager -->
    <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-57L9F58B');</script>

    <!-- 3. Favicon -->
    <link rel="icon" href="/image/favicon.ico" sizes="any">
    <link rel="icon" href="/image/Pebblous_BM_Orange_RGB.png" type="image/png">

    <!-- 4. SEO Meta Tags -->
    <title id="page-title">[포스팅 제목] | 페블러스</title>
    <meta id="meta-description" name="description" content="[150자 이내 요약]">
    <meta id="meta-keywords" name="keywords" content="[키워드1, 키워드2, ...]">

    <!-- 5. Open Graph -->
    <meta id="og-title" property="og:title" content="[포스팅 제목 + 부제]">
    <meta id="og-description" property="og:description" content="[요약]">
    <meta id="og-image" property="og:image" content="https://blog.pebblous.ai/image/[대표이미지].png">

    <!-- 6. Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="[포스팅 제목]">

    <!-- 7. Canonical URL -->
    <link id="canonical-url" rel="canonical" href="https://blog.pebblous.ai/project/[카테고리]/[파일명].html">

    <!-- 8. Stylesheets -->
    <link rel="stylesheet" href="/css/common-styles.css">
    <link rel="stylesheet" href="/css/styles.css">
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- 9. Fonts -->
    <link rel="stylesheet" as="style" crossorigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">

    <!-- 10. Share Button Styles (Hero Section용) -->
    <style>
        /* Share Button Container */
        .share-container {
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .share-label {
            font-size: 0.875rem;
            color: #94a3b8;
            font-weight: 500;
        }

        /* Share Button Base */
        .share-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0;
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            transition: color 0.2s;
            font-size: 0.875rem;
            text-decoration: none;
        }

        .share-btn:hover {
            color: #F86825;
        }

        .share-btn svg {
            width: 1.25rem;
            height: 1.25rem;
        }
    </style>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript>...</noscript>

    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
        <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

            <!-- TOC Sidebar -->
            <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
                <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
                <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">
                    <!-- TOC 항목들 -->
                </ul>
            </nav>

            <!-- Main Article -->
            <main class="max-w-[800px] px-4 sm:px-6">
                <!-- Hero Section (권장 패턴) -->
                <!-- ⚠️ 중요: 정적 HTML이 아닌 동적 생성 패턴 사용! -->
                <!-- id="page-h1-title", id="publish-date", id="publisher"는 PebblousPage.init(config)에서 자동으로 채워집니다 -->
                <header class="text-center mb-16">
                    <!-- 동적 제목 (config.mainTitle + config.subtitle) -->
                    <h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-6 leading-tight" style="line-height: 1.4;">
                        <!-- PebblousPage.applyConfig()가 자동으로 채움 -->
                    </h1>

                    <!-- 발행 정보 (동적) -->
                    <div class="flex flex-wrap justify-center items-center gap-2 text-sm text-slate-400 mb-8">
                        <span id="publish-date"><!-- config.publishDate로 채워짐 --></span>
                        <span class="text-slate-600">|</span>
                        <span id="publisher"><!-- config.publisher로 채워짐 --></span>
                        <span class="text-slate-600">|</span>
                        <span id="reading-time">읽는 시간: 약 X분</span>
                    </div>

                    <!-- 공유하기 버튼 -->
                    <div class="share-container mb-8">
                        <span class="share-label">공유하기:</span>
                        <button id="copy-url-btn" class="share-btn" title="URL 복사">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span>URL 복사</span>
                        </button>
                        <a id="twitter-share" class="share-btn" target="_blank" rel="noopener noreferrer">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                            <span>트위터</span>
                        </a>
                        <a id="facebook-share" class="share-btn" target="_blank" rel="noopener noreferrer">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                            </svg>
                            <span>페이스북</span>
                        </a>
                        <a id="linkedin-share" class="share-btn" target="_blank" rel="noopener noreferrer">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                            <span>링크드인</span>
                        </a>
                    </div>
                </header>

                <!-- Article Sections -->
                <section id="section-1">
                    <h2>섹션 1 제목</h2>
                    <!-- 내용 -->
                </section>

                <!-- FAQ Section -->
                <!-- ⚠️ 중요: FAQPage는 JSON-LD로만 생성! HTML Microdata 사용 금지 -->
                <section id="faq" class="mt-12">
                    <h2>자주 묻는 질문 (FAQ)</h2>
                    <div class="space-y-4">
                        <!-- FAQ 항목: Question/Answer만 사용 (FAQPage 제거!) -->
                        <div itemscope itemtype="https://schema.org/Question" class="interactive-card border themeable-border rounded-lg p-6">
                            <h3 itemprop="name" class="text-xl font-semibold themeable-heading mb-3">
                                질문 제목
                            </h3>
                            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <div itemprop="text" class="themeable-text-secondary">
                                    <p>답변 내용</p>
                                </div>
                            </div>
                        </div>
                        <!-- 추가 FAQ 항목들... -->
                    </div>
                </section>

                <!-- References -->
                <section id="references" class="mt-12">
                    <h2>참고문헌</h2>
                    <ol class="space-y-3 text-sm">
                        <!-- 참고문헌 목록 -->
                    </ol>
                </section>

                <!-- Related Posts: Auto-generated by PebblousRelatedPosts.init() -->

            </main>

        </div><!-- End Flex Layout -->
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="/scripts/common-utils.js"></script>

    <!-- Page Initialization Script -->
    <script>
        document.addEventListener('DOMContentLoaded', async function() {
            const config = {
                // Hero Section용 동적 제목 (필수!)
                mainTitle: "주요 제목",  // <h1 id="page-h1-title">에 삽입됨
                subtitle: "부제목",      // mainTitle과 합쳐져서 full title 생성
                pageTitle: "주요 제목: 부제목 | 페블러스",  // <title> 태그용

                // Hero Section용 발행 정보 (필수!)
                publishDate: "2025년 XX월 XX일",           // <span id="publish-date">에 삽입
                publisher: "페블러스 데이터 커뮤니케이션 팀",  // <span id="publisher">에 삽입

                // 페이지 기본 설정
                defaultTheme: "light",  // "dark" | "light" | "beige"
                category: "tech",
                articlePath: "project/[카테고리]/[파일명].html",
                tags: ["키워드1", "키워드2", ...],

                // FAQ 데이터 (7개 권장)
                faqs: [
                    {
                        question: "질문 1",
                        answer: "답변 1"
                    },
                    // ...
                ]
            };

            // Initialize page components (loads header, footer, and injects SEO schemas)
            await PebblousPage.init(config);
        });
    </script>
</body>
</html>
```

**⚠️ 중요: 스크립트 순서 및 초기화**
1. **`/scripts/common-utils.js`를 먼저 로드** (DOMContentLoaded 전에 로드되어야 함)
2. **❌ `/js/article-page.js` 사용 금지** (존재하지 않는 파일)
3. **✅ `await PebblousPage.init(config)` 필수 호출**
   - Header/Footer 자동 로드 (`PebblousComponents.loadAll()`)
   - BreadcrumbList Schema 자동 주입
   - FAQ Schema 자동 주입 (JSON-LD)
   - Related Posts 자동 생성
```

---

### ⚠️ FAQ Schema 패턴 (Google 중복 방지!)

#### 문제: FAQPage 중복
Google Search Console은 **페이지당 하나의 FAQPage만** 허용합니다. HTML Microdata와 JSON-LD 둘 다 사용하면 중복 오류가 발생합니다.

#### ✅ 올바른 패턴 (반드시 지킬 것!)

**HTML**: `FAQPage` 사용 금지, `Question`/`Answer`만 사용
```html
<section id="faq" class="mt-12">
    <h2>자주 묻는 질문 (FAQ)</h2>
    <!-- ❌ itemtype="https://schema.org/FAQPage" 사용 금지! -->
    <div class="space-y-4">
        <!-- ✅ Question/Answer만 사용 -->
        <div itemscope itemtype="https://schema.org/Question" class="interactive-card border themeable-border rounded-lg p-6">
            <h3 itemprop="name" class="text-xl font-semibold themeable-heading mb-3">
                질문 제목
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <div itemprop="text" class="themeable-text-secondary">
                    <p>답변 내용</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**JavaScript**: `config.faqs`로 JSON-LD FAQPage Schema 자동 생성
```javascript
const config = {
    faqs: [
        {
            question: "질문 1",
            answer: "답변 1"
        },
        // 7개 권장
    ]
};

// PebblousPage.init()이 자동으로 JSON-LD FAQPage Schema 주입
await PebblousPage.init(config);
```

#### 필수 체크 포인트
- [ ] ❌ HTML에 `itemtype="https://schema.org/FAQPage"` 사용 금지
- [ ] ❌ HTML에 `itemprop="mainEntity"` 사용 금지 (FAQPage의 자식 속성)
- [ ] ✅ HTML에는 `Question`/`Answer` Microdata만 사용
- [ ] ✅ `config.faqs` 배열에 모든 FAQ 데이터 정의 (7개 권장)
- [ ] ✅ `PebblousPage.init(config)`가 JSON-LD FAQPage Schema 자동 생성

#### 결과
- **HTML Microdata**: 사용자가 보는 UI + 각 질문의 구조화 (`Question`/`Answer`)
- **JSON-LD FAQPage**: 검색 엔진이 읽는 전체 FAQ 구조 (자동 생성)
- **중복 방지**: `common-utils.js`의 `injectFAQSchema()`가 기존 FAQPage 존재 여부 체크

---

### ⚠️ Hero Section 동적 생성 패턴 (반드시 지킬 것!)

#### 문제 발생 원인
과거에는 제목/저자/날짜를 **정적 HTML**로 직접 작성했지만, 현재는 **동적 생성 패턴**을 사용합니다.

#### ❌ 잘못된 패턴 (사용 금지!)
```html
<!-- 정적 HTML - 사용하지 마세요! -->
<header class="mb-8">
    <h1 class="text-4xl font-bold themeable-heading mb-4">
        제조 분야 LLM 파인튜닝용 QA 데이터셋 구축
    </h1>
    <div class="flex flex-wrap gap-2 text-sm">
        <span>2025년 11월 29일</span>
    </div>
</header>
```

#### ✅ 올바른 패턴 (반드시 사용!)
```html
<!-- 동적 HTML - Hero Section 패턴 -->
<header class="text-center mb-16">
    <!-- 1. id="page-h1-title" 지정 (내용 비움) -->
    <h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-6 leading-tight" style="line-height: 1.4;">
        <!-- PebblousPage.applyConfig()가 config.mainTitle + config.subtitle로 채움 -->
    </h1>

    <!-- 2. id="publish-date", id="publisher" 지정 (내용 비움) -->
    <div class="flex flex-wrap justify-center items-center gap-2 text-sm text-slate-400 mb-8">
        <span id="publish-date"><!-- config.publishDate로 채워짐 --></span>
        <span class="text-slate-600">|</span>
        <span id="publisher"><!-- config.publisher로 채워짐 --></span>
    </div>

    <!-- 3. 공유 버튼 추가 -->
    <div class="share-container mb-8">
        <!-- 공유 버튼 코드 (위 섹션 참조) -->
    </div>
</header>

<script>
    const config = {
        // 3. config에 값 정의
        mainTitle: "제조 분야 LLM 파인튜닝용 QA 데이터셋 구축",
        subtitle: "AADS의 피지컬 AI 접근법",
        publishDate: "2025년 11월 29일",
        publisher: "페블러스 데이터 커뮤니케이션 팀",
        // ...
    };

    // 4. PebblousPage.init()이 자동으로 값 주입
    await PebblousPage.init(config);
</script>
```

#### 필수 체크 포인트
- [ ] `<h1 id="page-h1-title">` 태그에 **내용을 직접 쓰지 않음** (비워둠)
- [ ] `<span id="publish-date">`, `<span id="publisher">` 태그에 **내용을 직접 쓰지 않음** (비워둠)
- [ ] config 객체에 `mainTitle`, `subtitle`, `publishDate`, `publisher` 속성 **반드시 정의**
- [ ] `text-center` 클래스로 중앙 정렬
- [ ] 공유 버튼 포함 (`share-container`, `share-btn` 클래스 사용)
- [ ] Share Button CSS 스타일 `<style>` 섹션에 포함 (위 10번 항목 참조)

---

### 테마 설정 (중요!)

```javascript
const config = {
    defaultTheme: "light",  // 기본값: light (화이트 배경)
    // "dark" | "beige" 선택 가능
};
```

**기본 컬러 테마는 항상 `light` (화이트)로 설정**

---

## 6단계: SEO 최적화

### 키워드 전략

#### 1. 메타 키워드 (43개 권장)

```html
<meta id="meta-keywords" name="keywords" content="
    LLM, 대규모 언어 모델, Large Language Models,
    AGI, 인공일반지능, Artificial General Intelligence,
    확률적 앵무새, Stochastic Parrot,
    창발적 지능, Emergent Intelligence,
    GPT-4, 신경과학, Neuroscience,
    인지과학, Cognitive Science,
    세계 모델, World Model,
    기계적 해석가능성, Mechanistic Interpretability,
    오셀로-GPT, Othello-GPT,
    심볼 그라운딩, Symbol Grounding,
    페블러스, Pebblous,
    DataClinic, 데이터클리닉,
    AADS, 자율 AI 데이터 과학자,
    데이터 품질, Data Quality,
    AI 윤리, AI Ethics,
    얀 르쿤, Yann LeCun,
    일리야 수츠케버, Ilya Sutskever,
    MIT Fedorenko,
    언어와 사고,
    토런스 창의력 검사, TTCT,
    AI 미래, Future of AI,
    멀티모달 AI, Multimodal AI,
    데이터 중심 AI, Data-Centric AI
">
```

**원칙**:
- 한글 키워드 우선, 영문 병기
- 페블러스 브랜드 키워드 포함 (DataClinic, AADS)
- 기술 키워드 + 인물/기관 키워드 조합
- 총 40-50개 권장

#### 2. FAQ Schema (이중 구현)

**HTML 마크업**:
```html
<div itemscope itemtype="https://schema.org/FAQPage">
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">LLM은 정말 "확률적 앵무새"에 불과한가?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
                <p>완전한 "확률적 앵무새"는 아닙니다...</p>
            </div>
        </div>
    </div>
    <!-- 추가 FAQ 항목들 -->
</div>
```

**JSON-LD 스크립트** (자동 생성):
```javascript
// common-utils.js에서 config.faqs 기반으로 자동 생성
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};
```

#### 3. Open Graph 최적화

```html
<meta id="og-title" property="og:title" content="지능적 앵무새의 탄생: LLM 지능 논쟁과 AGI를 향한 창발적 가능성 | 페블러스">
<meta id="og-description" property="og:description" content="대규모 언어 모델(LLM)은 확률적 앵무새인가, 창발적 지능인가? 신경과학, 오셀로-GPT, 토런스 창의력 검사 등 최신 연구를 바탕으로 LLM의 지능적 지위와 AGI 가능성을 심층 분석합니다.">
<meta id="og-image" property="og:image" content="https://blog.pebblous.ai/image/Pebblous_BM_Orange_RGB.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="LLM 지능 논쟁: 확률적 앵무새 vs 창발적 지능 - 페블러스 분석 리포트">
```

**이미지 요구사항**:
- 크기: 1200x630px (Facebook 권장)
- 형식: PNG 또는 JPG
- 파일 위치: `/image/` 디렉토리
- Alt 텍스트: 핵심 메시지 포함

---

## 7단계: articles.json 업데이트

### 새 항목 추가

`articles.json` 파일 **최상단**에 새 포스팅 추가:

```json
{
  "id": "intelligent-parrot",
  "title": "지능적 앵무새의 탄생: LLM 지능 논쟁과 창발적 가능성",
  "category": "tech",
  "date": "2025-11-28",
  "path": "project/CURK/intelligent-parrot.html",
  "published": true,
  "featured": true,
  "tags": [
    "LLM",
    "대규모 언어 모델",
    "Large Language Models",
    "AGI",
    "인공일반지능",
    "Artificial General Intelligence",
    "확률적 앵무새",
    "Stochastic Parrot",
    "창발적 지능",
    "Emergent Intelligence",
    "GPT-4",
    "신경과학",
    "Neuroscience",
    "인지과학",
    "Cognitive Science",
    "세계 모델",
    "World Model",
    "기계적 해석가능성",
    "Mechanistic Interpretability",
    "오셀로-GPT",
    "Othello-GPT",
    "심볼 그라운딩",
    "Symbol Grounding",
    "페블러스",
    "Pebblous",
    "DataClinic",
    "데이터클리닉",
    "AADS",
    "자율 AI 데이터 과학자",
    "데이터 품질",
    "Data Quality",
    "AI 윤리",
    "AI Ethics",
    "얀 르쿤",
    "Yann LeCun",
    "일리야 수츠케버",
    "Ilya Sutskever",
    "MIT Fedorenko",
    "언어와 사고",
    "토런스 창의력 검사",
    "TTCT",
    "AI 미래",
    "Future of AI",
    "멀티모달 AI",
    "Multimodal AI",
    "데이터 중심 AI",
    "Data-Centric AI"
  ]
}
```

**필드 설명**:
- `id`: URL-friendly 고유 식별자 (kebab-case)
- `title`: 포스팅 제목 (한글, 80자 이내)
- `category`: `"tech"` | `"case-study"` | `"insights"` | `"announcement"` | `"art"` | `"story"`
- `date`: 발행일 (YYYY-MM-DD)
- `path`: HTML 파일 경로 (루트 기준 상대 경로)
- `published`: `true` (공개) | `false` (비공개)
- `featured`: `true` (추천 포스팅으로 표시) | `false`
- `tags`: 키워드 배열 (40-50개 권장)

---

### ⚠️ Featured 포스팅 정책 (필수 준수!)

#### 카테고리별 Featured 개수 제한

**원칙**: 각 카테고리당 **최대 3개**의 featured 포스팅만 허용

**현재 상태 확인 명령어**:
```bash
cat articles.json | jq '[.articles[] | select(.featured == true)] | group_by(.category) | map({category: .[0].category, count: length})'
```

**카테고리별 제한**:
| 카테고리 | 최대 Featured 개수 | 현재 개수 (2025-11-30 기준) |
|---------|-------------------|--------------------------|
| `tech` | 3개 | 7개 ⚠️ (초과!) |
| `story` | 3개 | 4개 ⚠️ (초과!) |
| `art` | 3개 | 2개 ✅ |
| `case-study` | 3개 | 0개 ✅ |
| `insights` | 3개 | 0개 ✅ |
| `announcement` | 3개 | 0개 ✅ |

#### Featured 설정 가이드라인

**새 포스팅 추가 시 체크리스트**:

1. **Featured 개수 확인**:
   ```bash
   # 해당 카테고리의 현재 featured 개수 확인
   cat articles.json | jq '[.articles[] | select(.category == "tech" and .featured == true)] | length'
   ```

2. **3개 미만인 경우**: `"featured": true` 설정 가능
3. **3개 이상인 경우**:
   - 기존 featured 포스팅 중 **가장 오래된 것** 또는 **중요도가 낮은 것**을 `"featured": false`로 변경
   - 새 포스팅을 `"featured": true`로 설정
   - **변경 이유를 커밋 메시지에 명시**

**예시 시나리오**:
```json
// 현재 tech 카테고리에 featured가 3개 이미 존재
// 새 포스팅 "robot-qa-dataset-2.html"을 featured로 추가하려면:

// 1단계: 기존 featured 중 하나를 false로 변경
{
  "id": "old-post",
  "featured": false  // true → false 변경
}

// 2단계: 새 포스팅을 featured true로 추가
{
  "id": "robot-qa-dataset-2",
  "featured": true
}
```

#### Featured 선정 기준

**우선순위** (높은 것부터):
1. **최신성**: 최근 3개월 이내 발행된 포스팅
2. **전략적 가치**: 페블러스 핵심 제품/서비스 (DataClinic, AADS, Data Synthesis) 관련
3. **SEO 성과**: 조회수, 체류시간, CTR이 높은 포스팅
4. **기술적 완성도**: FAQ Schema, 메타태그, 이미지 최적화가 완벽한 포스팅
5. **내부 링크**: Related Posts 연결이 풍부한 포스팅

**제외 기준**:
- 6개월 이상 경과한 포스팅 (시의성 상실)
- 임시 공지/이벤트성 포스팅
- 초안 상태 또는 업데이트가 필요한 포스팅

#### Featured 관리 주기

**월간 리뷰 (매월 1일)**:
1. 각 카테고리별 featured 개수 확인
2. 3개 초과 시 오래된 포스팅 featured 해제
3. 새로운 고품질 포스팅으로 교체
4. `docs/featured-history.md`에 변경 이력 기록 (선택사항)

**즉시 조치 필요**:
- 현재 `tech` 카테고리: 7개 → 3개로 감축 필요 (4개 해제)
- 현재 `story` 카테고리: 4개 → 3개로 감축 필요 (1개 해제)

---

## 8단계: 사용자 피드백 반영

### 일반적인 피드백 패턴

#### 1. 테마 색상 조정

**피드백 예시**: "기본 컬러는 화이트로 설정해 주세요"

**수정 방법**:
```javascript
// HTML 파일 내 config 객체
const config = {
    defaultTheme: "light",  // "dark" → "light"로 변경
};
```

#### 2. 비주얼 요소 추가

**피드백 예시**: "글이 많아서 가독성을 높이고 시각적 재미를 더해주세요"

**적용 패턴**:
```css
/* Interactive Card (hover 효과) */
.interactive-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 4px solid var(--border-color);
}

.interactive-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-left-color: var(--accent-color);
}

/* Stat Card (gradient border) */
.stat-card::before {
    content: '';
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, var(--accent-color), var(--teal-color));
}

/* Table Hover */
main table tbody tr:hover {
    background-color: rgba(248, 104, 37, 0.05);
}
```

**HTML 적용**:
```html
<!-- 강조가 필요한 섹션 -->
<div class="interactive-card bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
    <h3>섹션 제목</h3>
    <p>내용...</p>
</div>

<!-- 통계/숫자 강조 -->
<div class="stat-card relative pl-6 py-4">
    <h4 class="text-2xl font-bold text-teal-400">175B</h4>
    <p class="text-sm text-slate-400">GPT-3 파라미터 수</p>
</div>
```

#### 3. 참고문헌 개수 조정

**피드백 예시**: "소스에 43개 참고문헌이 있는데 다 포함할까요?"

**권장 전략**:
- **10-15개 핵심 논문만 선별** (페이지 로딩 속도, 가독성)
- 선별 기준:
  - 1순위: Nature, Science, NeurIPS, ICML 등 최상위 저널/학회
  - 2순위: 포스팅 핵심 주장을 뒷받침하는 연구
  - 3순위: 최신 연구 (2023-2025)
- 전체 참고문헌은 별도 PDF 제공 제안

**대안**:
```html
<!-- Collapsible 참고문헌 -->
<details class="mt-8">
    <summary class="cursor-pointer font-bold">전체 참고문헌 보기 (43개)</summary>
    <ol class="mt-4 space-y-2">
        <!-- 전체 목록 -->
    </ol>
</details>
```

---

## 9단계: 최종 체크리스트

### 필수 확인 사항

#### HTML 구조
- [ ] `<head>` 섹션에 모든 필수 메타태그 포함
- [ ] Google Tag Manager 스크립트 포함 (head + body noscript)
- [ ] Favicon 설정 (3종: .ico, .png, apple-touch-icon)
- [ ] Canonical URL 설정
- [ ] Open Graph 메타태그 (title, description, image, type)
- [ ] Twitter Cards 메타태그

#### 테마 & 스타일
- [ ] `defaultTheme: "light"` 설정 확인
- [ ] `themeable-*` 클래스 사용 (하드코딩 색상 제거)
- [ ] 반응형 레이아웃 (lg:flex, hidden lg:block)
- [ ] Sticky TOC 동작 확인 (`sticky top-20`)
- [ ] 본문 max-width: 800px 확인

#### SEO
- [ ] 메타 키워드 40-50개 (한글 + 영문)
- [ ] ❌ HTML에 `itemtype="https://schema.org/FAQPage"` 사용 금지 (Google 중복 오류)
- [ ] ✅ FAQ Schema: JSON-LD만 사용 (`config.faqs` → 자동 생성)
- [ ] ✅ HTML FAQ: `Question`/`Answer` Microdata만 사용
- [ ] 페이지 제목 70자 이내
- [ ] 메타 설명 150자 이내
- [ ] OG 이미지 1200x630px
- [ ] Related Posts 섹션 포함

#### 콘텐츠
- [ ] 읽기 시간 표시 (15-25분 권장)
- [ ] TOC 링크 정확성 (id와 href 매칭)
- [ ] FAQ 6-10개 포함
- [ ] 참고문헌 10-15개 선별
- [ ] 페블러스 관점 섹션 포함 (DataClinic/AADS 연결)

#### Hero Section (동적 생성 패턴, 필수!)
- [ ] ❌ `<h1 id="page-h1-title">` 태그 내부를 **비워둠** (정적 텍스트 작성 금지!)
- [ ] ❌ `<span id="publish-date">`, `<span id="publisher">` 태그 내부를 **비워둠** (정적 텍스트 작성 금지!)
- [ ] ✅ `config.mainTitle` 속성 정의 (주요 제목)
- [ ] ✅ `config.subtitle` 속성 정의 (부제목)
- [ ] ✅ `config.pageTitle` 속성 정의 ("[mainTitle]: [subtitle] | 페블러스" 형식)
- [ ] ✅ `config.publishDate` 속성 정의 ("2025년 XX월 XX일" 형식)
- [ ] ✅ `config.publisher` 속성 정의 (기본: "페블러스 데이터 커뮤니케이션 팀")
- [ ] `<header class="text-center mb-16">` 중앙 정렬 확인
- [ ] 공유 버튼 포함 (URL 복사, Twitter, Facebook, LinkedIn)
- [ ] Share Button CSS 스타일 `<style>` 섹션에 포함

#### JavaScript & 초기화 (중요!)
- [ ] ✅ `/scripts/common-utils.js` 먼저 로드 (DOMContentLoaded 전)
- [ ] ❌ `/js/article-page.js` 사용 금지 (존재하지 않는 파일)
- [ ] ✅ `DOMContentLoaded` 이벤트 리스너 내부에 `config` 정의
- [ ] ✅ `await PebblousPage.init(config)` 호출 필수
  - Header/Footer 자동 로드
  - BreadcrumbList Schema 자동 주입
  - FAQ Schema 자동 주입
  - Related Posts 자동 생성
  - **Hero Section 동적 제목/발행정보 주입**
- [ ] `config.defaultTheme` 설정 ("light" | "dark" | "beige")
- [ ] `config.category` 설정 ("tech" | "art" | "story")
- [ ] `config.articlePath` 정확한 경로
- [ ] `config.tags` 배열에 모든 키워드 포함
- [ ] `config.faqs` 배열 데이터 정확성 (7개 질문 권장)

#### articles.json
- [ ] 최상단에 새 항목 추가
- [ ] `id` 고유성 확인
- [ ] `path` 경로 정확성
- [ ] `published: true` 설정
- [ ] `featured` 여부 결정
- [ ] `tags` 배열 일치 (HTML config와 동일)

---

## 10단계: 검증 및 배포

### 로컬 테스트

```bash
# 로컬 서버 실행 (포트 8000)
python3 -m http.server 8000

# 브라우저에서 확인
# http://localhost:8000/project/[카테고리]/[파일명].html
```

**테스트 항목**:
1. ✅ **Header/Footer 로드 확인** (가장 먼저 확인!)
   - Header: 로고, 홈 버튼, 테마 스위처 표시
   - Footer: 저작권, SNS 링크, RSS 표시
   - 콘솔 에러 없음 (`PebblousComponents.loadAll()` 성공)
2. ✅ **Hero Section 동적 생성 확인** (두 번째로 확인!)
   - `<h1 id="page-h1-title">`에 제목이 표시됨 (config.mainTitle + config.subtitle)
   - `<span id="publish-date">`에 발행일 표시됨 (config.publishDate)
   - `<span id="publisher">`에 발행자 표시됨 (config.publisher)
   - 공유 버튼 4개 표시됨 (URL 복사, Twitter, Facebook, LinkedIn)
   - 공유 버튼 hover 시 주황색으로 변경 확인
   - 중앙 정렬 확인 (`text-center`)
3. ✅ 테마 전환 동작 (Dark ↔ Light ↔ Beige)
4. ✅ TOC 스크롤 시 active 링크 하이라이트
5. ✅ TOC 클릭 시 해당 섹션 이동
6. ✅ 모바일 반응형 (TOC 숨김, Stack 레이아웃)
6. ✅ Related Posts 자동 로딩
7. ✅ FAQ 아코디언 동작 (있는 경우)
8. ✅ 테이블 가로 스크롤 (모바일)
9. ✅ 이미지 로딩 확인

### SEO 검증

#### Google Rich Results Test

```
https://search.google.com/test/rich-results
```

**입력**: 배포된 URL 또는 HTML 코드 직접 붙여넣기

**확인 사항**:
- [ ] FAQ Schema 인식 ✅
- [ ] Article Schema 인식 ✅ (common-utils.js 자동 생성)
- [ ] 오류 0개
- [ ] 경고 최소화

#### 메타태그 검증

**Chrome DevTools**:
```
우클릭 → 검사 → Elements → <head> 섹션 확인
```

**확인 항목**:
- [ ] `id` 속성이 있는 메타태그 정상 업데이트
- [ ] `og:image` URL 절대 경로 확인
- [ ] `canonical` URL 정확성

### Git Commit & Push

```bash
# 변경 사항 확인
git status

# 새 파일 추가
git add project/[카테고리]/[파일명].html
git add articles.json

# 커밋
git commit -m "Add new blog post: [포스팅 제목]

- Add project/[카테고리]/[파일명].html
- Update articles.json with new entry
- Category: [tech/case-study/insights]
- Keywords: [키워드1, 키워드2, 키워드3]

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# 푸시
git push origin main
```

### Google Search Console 제출

```
1. Google Search Console 접속
2. "URL 검사" 도구 사용
3. 새 포스팅 URL 입력
4. "색인 생성 요청" 클릭
5. 24-48시간 내 색인화 확인
```

---

## 참고: 자주 사용하는 컴포넌트

### 1. 섹션 헤더

```html
<section id="section-id" class="mb-12">
    <h2 class="text-3xl font-bold themeable-heading mb-6 pb-3 border-b-2 themeable-border">
        섹션 제목
    </h2>
    <p class="text-lg themeable-text-secondary mb-4">
        섹션 요약...
    </p>
</section>
```

### 2. 강조 박스

```html
<!-- Teal 강조 박스 -->
<div class="bg-slate-800/50 border border-teal-500/40 rounded-lg p-6 mb-6">
    <h4 class="font-semibold text-teal-400 mb-3">💡 핵심 인사이트</h4>
    <p class="text-slate-300">내용...</p>
</div>

<!-- Orange 경고/주의 박스 -->
<div class="bg-slate-800/50 border border-orange-500/40 rounded-lg p-6 mb-6">
    <h4 class="font-semibold text-orange-400 mb-3">⚠️ 주의사항</h4>
    <p class="text-slate-300">내용...</p>
</div>
```

### 3. 통계 카드 그리드

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <div class="stat-card relative bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h4 class="text-3xl font-bold text-teal-400 mb-2">175B</h4>
        <p class="text-sm text-slate-400">GPT-3 파라미터</p>
    </div>
    <div class="stat-card relative bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h4 class="text-3xl font-bold text-teal-400 mb-2">1.76T</h4>
        <p class="text-sm text-slate-400">학습 토큰 수</p>
    </div>
    <div class="stat-card relative bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h4 class="text-3xl font-bold text-teal-400 mb-2">96.3%</h4>
        <p class="text-sm text-slate-400">MMLU 정확도</p>
    </div>
</div>
```

### 4. 테이블 (반응형)

```html
<div class="overflow-x-auto mb-8">
    <table class="w-full border-collapse">
        <thead>
            <tr class="bg-slate-800/80">
                <th class="border themeable-border px-4 py-3 text-left">열 1</th>
                <th class="border themeable-border px-4 py-3 text-left">열 2</th>
                <th class="border themeable-border px-4 py-3 text-left">열 3</th>
            </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-orange-500/5 transition-colors">
                <td class="border themeable-border px-4 py-3">데이터 1</td>
                <td class="border themeable-border px-4 py-3">데이터 2</td>
                <td class="border themeable-border px-4 py-3">데이터 3</td>
            </tr>
        </tbody>
    </table>
</div>
```

### 5. FAQ 아이템

```html
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
     class="interactive-card bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-4">
    <h3 itemprop="name" class="text-xl font-semibold themeable-heading mb-3">
        질문 내용?
    </h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text" class="themeable-text-secondary">
            <p>답변 내용...</p>
        </div>
    </div>
</div>
```

### 6. 참고문헌 항목

```html
<ol class="space-y-3 text-sm themeable-text-secondary">
    <li>
        <span class="font-semibold text-teal-400">[1]</span>
        저자명. (연도).
        <em>논문 제목</em>.
        <strong>저널명</strong>,
        <em>권(호)</em>, 페이지.
        <a href="https://doi.org/..." class="text-orange-400 hover:underline" target="_blank">
            DOI 링크
        </a>
    </li>
</ol>
```

---

## 트러블슈팅

### 문제 1: TOC가 sticky로 동작하지 않음

**원인**: 부모 요소에 `overflow: hidden` 또는 `relative` 위치 지정

**해결**:
```html
<!-- ❌ 잘못된 구조 -->
<div class="relative overflow-hidden">
    <nav class="sticky top-20">...</nav>
</div>

<!-- ✅ 올바른 구조 -->
<div class="lg:flex lg:gap-8">
    <nav class="sticky top-20 self-start">...</nav>
</div>
```

### 문제 2: 테마 전환 시 색상이 변경되지 않음

**원인**: Tailwind 하드코딩 클래스 사용 (예: `text-white`, `bg-slate-800`)

**해결**:
```html
<!-- ❌ 하드코딩 -->
<h1 class="text-white">제목</h1>

<!-- ✅ Themeable 클래스 -->
<h1 class="themeable-heading">제목</h1>
```

**Themeable 클래스 목록**:
- `themeable-heading` → 제목 색상
- `themeable-text-primary` → 본문 색상
- `themeable-text-secondary` → 보조 텍스트
- `themeable-border` → 테두리 색상
- `themeable-bg-card` → 카드 배경
- `themeable-toc-border` → TOC 좌측 라인

### 문제 3: Related Posts가 표시되지 않음

**원인**: `articles.json`에 태그가 없거나 `common-utils.js` 로드 실패

**해결**:
1. `articles.json`에서 현재 포스팅의 `tags` 배열 확인
2. `<script src="/scripts/common-utils.js"></script>` 로드 순서 확인
3. 브라우저 Console에서 에러 확인

### 문제 4: FAQ Schema가 Google Rich Results Test에서 인식 안 됨

**원인**: HTML 마크업 누락 또는 JSON-LD 생성 실패

**해결**:
1. HTML에 `itemscope`, `itemprop` 속성 확인
2. `config.faqs` 배열 데이터 형식 확인:
```javascript
faqs: [
    {
        question: "질문 텍스트",
        answer: "답변 텍스트"
    }
]
```
3. `common-utils.js`에서 JSON-LD 생성 로직 확인

---

## 버전 히스토리

- **2025-11-29**: 초기 생성 (intelligent-parrot.html 사례 기반)
  - 9단계 워크플로우 정의
  - SEO 최적화 가이드 추가
  - 체크리스트 및 트러블슈팅 포함
