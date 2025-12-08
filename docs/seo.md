# SEO 전략 & 체크리스트 (Pebblous Blog)

> **목적**: 페블러스 블로그의 검색엔진 최적화 및 AI 에이전트 발견성 향상을 위한 통합 가이드
> **최종 업데이트**: 2025-11-15
> **원칙**: 완전 자동화 - 새 글 추가 시 수동 작업 없이 모든 SEO 기능 자동 작동

---

## 📋 목차

1. [SEO 계층 구조](#-seo-계층-구조)
2. [필수 메타 태그 체크리스트](#-필수-메타-태그-체크리스트)
3. [구조화 데이터 (JSON-LD Schema)](#-구조화-데이터-json-ld-schema)
4. [자동화된 SEO 기능 (Phase 1-3)](#-자동화된-seo-기능-phase-1-3)
5. [Google Search Console 등록](#-google-search-console-등록)
6. [재사용 가능한 템플릿](#-재사용-가능한-템플릿)
7. [성능 모니터링](#-성능-모니터링)
8. [체크리스트](#-체크리스트-새-아티클-작성-시)

---

## 🎯 SEO 계층 구조

### Layer 1: 기본 메타데이터
- `<title>`, `<meta name="description">`, `<meta name="keywords">`
- Viewport, charset, language
- Author, copyright, audience

### Layer 2: 소셜 미디어 최적화
- **Open Graph** (Facebook, LinkedIn, KakaoTalk)
- **Twitter Cards**
- 이미지: 1200x630px (OG), alt text 필수

### Layer 3: 구조화 데이터 (Schema.org)
- **TechArticle** / **Article** / **BlogPosting**
- **FAQPage** (Phase 3)
- **Person** / **Organization**
- **BreadcrumbList** (Phase 2)

### Layer 4: 검색 엔진 최적화
- Canonical URL
- Hreflang (다국어)
- Robots, sitemap (자동 생성)
- Google Tag Manager / Analytics

---

## ✅ 필수 메타 태그 체크리스트

### 1. HTML 기본 속성
```html
<html lang="ko">  <!-- 또는 "en" -->
```

### 2. Google Tag Manager (필수)
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57L9F58B');</script>
<!-- End Google Tag Manager -->
```

### 3. 문서 메타데이터
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Pebblous Data Communication Team">
<meta name="language" content="Korean">
<meta name="copyright" content="© 2025 Pebblous. All rights reserved.">
<meta name="rating" content="general">
<meta name="revisit-after" content="7 days">
<meta name="distribution" content="global">
<meta http-equiv="content-language" content="ko">
```

### 4. Audience & Topic (권장)
```html
<meta name="audience" content="Data Scientists, AI Engineers, Enterprise Architects">
<meta name="topic" content="Data Quality, AI, ML, ISO Standards">
```

### 5. SEO 핵심 태그
```html
<title id="page-title">{제목} | Pebblous</title>
<meta id="meta-description" name="description" content="{150-160자 요약}">
<meta id="meta-keywords" name="keywords" content="{키워드1}, {키워드2}, ...">
<meta name="robots" content="index, follow">
```

**키워드 전략**:
- **브랜드 키워드**: Pebblous, 페블러스, 데이터클리닉, 페블로스코프, CURK, AADS
- **데이터 아트 필수**: Code Painting, 코드 페인팅, Data Art Lab, DAL, mr_lix
- **Physical AI 전략 키워드** (2025-11-16 업데이트):
  - **한영 병기**: "피지컬 AI(Physical AI)" - Google/네이버 동시 최적화
  - **한글 우선 키워드**:
    - 피지컬 AI, 피지컬 AI 데이터, 피지컬 AI 합성데이터
    - 피지컬 AI 학습데이터, 피지컬 AI 데이터셋, 피지컬 AI 파이프라인
  - **영문 키워드**:
    - Physical AI, Physical AI Data, Physical AI Synthetic Data
    - Physical AI Training Data, Physical AI Dataset, Physical AI Data Pipeline
  - **적용 블로그**:
    - data-startup-physical-ai-01.html
    - data-pipeline-for-physical-ai-01.html
    - PBLS-IR-Physical-AI-01.html
  - **SEO 효과**:
    - Meta keywords: 한글 키워드 우선 배치 → 영문 키워드 배치
    - 본문: "피지컬 AI(Physical AI)" 병기로 키워드 밀도 확보
    - FAQ Schema: 한글 질문/답변에 "피지컬 AI" 자연스럽게 포함
    - 검색 커버리지: 구글(영문+한글), 네이버(한글), 다음(한글) 동시 최적화
- **핵심 키워드**: 3-5개 (한글 우선)
- **롱테일 키워드**: 10-20개 (한글/영문 혼합)
- **관련 기술**: AI, ML, Physical AI, 피지컬 AI, ISO 5259, Data Quality

### 6. Canonical & Hreflang
```html
<link id="canonical-url" rel="canonical" href="https://blog.pebblous.ai/{경로}">
<link id="hreflang-ko" rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/{경로}">
<link id="hreflang-en" rel="alternate" hreflang="en" href="https://blog.pebblous.ai/{경로}">
<link id="hreflang-default" rel="alternate" hreflang="x-default" href="https://blog.pebblous.ai/{경로}">
```

### 7. Open Graph (Facebook, LinkedIn, KakaoTalk)
```html
<meta id="og-url" property="og:url" content="https://blog.pebblous.ai/{경로}">
<meta id="og-title" property="og:title" content="{제목} | Pebblous">
<meta id="og-description" property="og:description" content="{요약}">
<meta id="og-image" property="og:image" content="https://blog.pebblous.ai/{이미지}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{이미지 설명}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Pebblous Blog">
<meta property="og:locale" content="ko_KR">

<!-- Article 속성 -->
<meta property="article:published_time" content="{ISO 8601}">
<meta property="article:modified_time" content="{ISO 8601}">
<meta property="article:author" content="Pebblous Data Communication Team">
<meta property="article:section" content="Technology">
<meta property="article:tag" content="{태그1}">
<meta property="article:tag" content="{태그2}">
```

### 8. Twitter Cards

**중요**: `name` 속성 사용 (property 아님!)

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@pebblous">
<meta name="twitter:creator" content="@pebblous">
<meta name="twitter:title" content="{제목}">
<meta name="twitter:description" content="{요약}">
<meta name="twitter:image" content="https://blog.pebblous.ai/{이미지}">
<meta name="twitter:image:alt" content="{이미지 설명}">

<!-- 추가 레이블 (선택) -->
<meta name="twitter:label1" content="읽는 시간">
<meta name="twitter:data1" content="{N}분">
<meta name="twitter:label2" content="난이도">
<meta name="twitter:data2" content="초급|중급|고급">
```

**검증 방법**:
- ⚠️ Twitter Card Validator는 2023년 8월부터 미리보기 제거
- ✅ [OpenGraph.xyz](https://www.opengraph.xyz/) - 트위터 카드 미리보기
- ✅ [Meta Tags](https://metatags.io/) - 모든 소셜 미디어 미리보기

### 9. Favicon
```html
<link rel="icon" href="/image/favicon.ico" sizes="any">
<link rel="icon" href="/image/Pebblous_BM_Orange_RGB.png" type="image/png">
<link rel="apple-touch-icon" href="/image/Pebblous_BM_Orange_RGB.png">
```

---

## 🗂️ 구조화 데이터 (JSON-LD Schema)

### 1. Article Schema (자동 주입 - Phase 1)

**구현 위치**: `scripts/common-utils.js`

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "{제목}",
  "description": "{부제}",
  "author": {
    "@type": "Person",
    "name": "이주행",
    "jobTitle": "CEO & Co-founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Pebblous Inc."
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Pebblous Inc.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.pebblous.ai/image/Pebblous_BM_Orange_RGB.png"
    }
  },
  "datePublished": "2025-01-12",
  "dateModified": "2025-01-12",
  "image": "https://blog.pebblous.ai/{이미지}"
}
```

### 2. FAQPage Schema (자동 주입 - Phase 3)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "질문 내용",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "답변 내용"
      }
    }
  ]
}
```

**사용 방법**:
```javascript
const config = {
    // ... 기존 설정
    faqs: [
        {
            question: "질문 1",
            answer: "답변 1"
        }
    ]
};
```

**FAQ 작성 권장**:
- ✅ How-to 가이드, 기술 표준 문서, 프레임워크 비교
- ❌ 데이터 아트, 단순 뉴스, 짧은 업데이트

**⭐ 신규 블로그 FAQ 전략 (2025-12-08 업데이트)**:
- **이중 구현 방식**: 본문 HTML (UX) + JSON-LD Schema (SEO) 동시 적용
- **SEO 효과 극대화**:
  - 본문 FAQ로 사용자 경험 향상 (체류 시간 증가, 빠른 정보 접근)
  - JSON-LD Schema로 Google Rich Snippets 확보
  - 키워드 밀도 자연스럽게 증가 (FAQ 질문/답변에 타겟 키워드 포함)

**⚠️ 중요: FAQPage Schema 중복 방지**:
- JSON-LD Schema는 **한 가지 방식만** 사용해야 함 (중복 시 Google Search Console 오류 발생)
- **방식 A**: `config.faqs` 배열 사용 → `PebblousPage.init()`가 자동으로 FAQPage Schema 주입
- **방식 B**: `<head>`에 직접 `<script type="application/ld+json">` FAQPage 작성
- **절대 금지**: 방식 A + 방식 B 동시 사용 (FAQPage 중복 오류)

**권장 구현 방법** (PebblousPage 사용 시):
1. `config.faqs` 배열에 FAQ 데이터 작성 → Schema 자동 주입
2. 본문에 FAQ HTML 섹션 추가 (6개 질문 권장) → UX 향상
3. TOC에 FAQ 섹션 링크 추가
4. `<head>`에 FAQPage JSON-LD **작성하지 않음** (중복 방지)

- **예시**: [data-pipeline-for-physical-ai-01.html](project/PhysicalAI/data-pipeline-for-physical-ai-01.html)

**FAQ 한글 키워드 전략** (2025-11-16 업데이트):
- **질문**: 한글 우선, 첫 질문에 한영 병기
  - ✅ "피지컬 AI(Physical AI)란 무엇인가요?"
  - ✅ "피지컬 AI가 제조업에 어떤 혁신을 가져오나요?"
  - ❌ "Physical AI란 무엇인가요?" (영문 단독 사용 지양)
- **답변**: 자연스럽게 한글 키워드 반복
  - 첫 문장: "피지컬 AI(Physical AI)는..." (한영 병기)
  - 본문: "피지컬 AI는...", "피지컬 AI의..." (한글 사용)
  - 기술 용어/인용: "Physical AI" 유지 가능
- **SEO 효과**:
  - Google Featured Snippet: 한영 키워드 동시 타겟팅
  - 네이버 지식인 스타일 검색: 한글 질문 최적화
  - 음성 검색: 자연스러운 한국어 질문 패턴 반영
- **예시** (Physical AI 블로그):
  ```javascript
  faqs: [
      {
          question: "피지컬 AI(Physical AI)란 무엇인가요?",
          answer: "피지컬 AI(Physical AI)는 디지털 세계를 넘어 물리적 환경에서 작동하는 AI 시스템입니다. 피지컬 AI는 로봇, 자율주행차, 스마트 팩토리 등 실제 물리 세계와 상호작용합니다..."
      },
      {
          question: "피지컬 AI가 제조업에 어떤 혁신을 가져오나요?",
          answer: "피지컬 AI는 제조 현장의 3가지 핵심 영역을 혁신합니다..."
      }
  ]
  ```

**✅ Google Rich Results Test 검증 완료** (2025-11-15):
- JavaScript `config.faqs` 방식으로 주입된 FAQ Schema도 [Google Rich Results Test](https://search.google.com/test/rich-results)에서 정상 인식 확인
- Googlebot의 JavaScript 렌더링 엔진이 동적으로 생성된 FAQ Schema를 크롤링함
- `PebblousPage.init(config)`로 런타임에 `<head>`에 주입되는 FAQ도 직접 HTML Schema와 동일하게 작동
- **결론**: JavaScript 주입 방식과 직접 HTML Schema 방식 모두 SEO에 효과적 ✅

**FAQ 구현 방식 비교** (2025-12-08 업데이트):

| 방식 | 구성 요소 | 장점 | 사용 권장 |
|------|----------|------|----------|
| **⭐ 권장: config.faqs + 본문 HTML** | `config.faqs` (Schema 자동주입) + 본문 FAQ 섹션 (UX) | - **최고의 SEO+UX 효과**<br>- Schema 자동 관리<br>- 중복 없음 | **PebblousPage 사용 블로그** ⭐ |
| **config.faqs만** | `config.faqs` 배열만 | - 간편함<br>- Schema 자동 주입 | 본문 FAQ가 필요 없는 경우 |
| **직접 JSON-LD + 본문 HTML** | `<head>` JSON-LD + 본문 FAQ 섹션 | - JavaScript 없이 작동<br>- 정적 페이지에 적합 | PebblousPage 미사용 페이지 |

**⚠️ 금지 조합** (FAQPage 중복 오류 발생):
- ❌ `config.faqs` + `<head>` JSON-LD FAQPage 동시 사용
- ❌ 동일 페이지에 FAQPage Schema 2개 이상

### 3. BreadcrumbList Schema (자동 주입 - Phase 2)

**구현 위치**: `scripts/common-utils.js`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://blog.pebblous.ai/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tech Insights",
      "item": "https://blog.pebblous.ai/#tech"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{현재 페이지}"
    }
  ]
}
```

---

## 🤖 자동화된 SEO 기능 (Phase 1-3)

### Phase 1: Article Schema 자동 주입 (2025-01-12)

**구현**: `scripts/common-utils.js` (lines 472-541)

#### 기능
- Schema.org **TechArticle** 자동 주입
- `PebblousPage.init(config)` 호출 시 자동 작동
- Google Rich Results 지원

#### SEO 효과
- ✅ Google Rich Results
- ✅ AI 에이전트 정확한 인식
- ✅ 저자/발행일 신뢰도 향상

---

### Phase 2: Related Posts & Breadcrumbs (2025-01-12)

#### 2.1 Related Posts (관련 글 자동 추천)

**작동 원리**:
1. 태그 기반 유사도 계산
2. `articles.json`에서 자동 탐색
3. 상위 3개 글 카드 표시

**사용 방법**:
```javascript
const config = {
    category: "tech",
    articlePath: "project/YourProject/your-article.html",
    tags: ["Tag1", "Tag2", "Tag3"]
};
```

**SEO 효과**:
- ✅ Internal Linking 강화
- ✅ Crawl Depth 개선
- ✅ 체류 시간 증가
- ✅ Topical Authority 구축

#### 2.2 Breadcrumbs (자동 네비게이션)

**기능**:
- 시각적 Breadcrumb: 🏠 Home / Category / Article
- Schema.org BreadcrumbList 자동 주입
- 제목 위에 자동 표시

**SEO 효과**:
- ✅ Google Rich Results (검색 결과 경로 표시)
- ✅ Site Structure 명확화
- ✅ User Experience 개선

---

### Phase 3: FAQ Schema (2025-01-12)

**기능**:
- Google Rich Results FAQ 표시
- Position 0 (Featured Snippet) 후보
- 자동 주입

**SEO 효과**:
- ✅ CTR 대폭 증가
- ✅ Featured Snippet 노출
- ✅ Voice Search 최적화

---

## 🚀 Google Search Console 등록

### Step 1: 속성 추가

1. [Google Search Console](https://search.google.com/search-console) 접속
2. **속성 추가** → **URL 접두어**: `https://blog.pebblous.ai`

### Step 2: 소유권 확인

**방법 1: HTML 태그 (권장)**
```html
<meta name="google-site-verification" content="YOUR_CODE" />
```

### Step 3: Sitemap 제출

1. 좌측 **색인 > Sitemaps**
2. 입력: `https://blog.pebblous.ai/sitemap.xml`
3. **제출**

### Step 4: 색인 요청

**개별 URL**:
- 상단 검색창에 URL 입력
- **색인 생성 요청**

**대량 URL (API)**:
```bash
curl "https://www.google.com/ping?sitemap=https://blog.pebblous.ai/sitemap.xml"
```

---

## 🔧 재사용 가능한 템플릿

### 기술 아티클 템플릿

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-57L9F58B');</script>

    <!-- Favicon -->
    <link rel="icon" href="/image/favicon.ico" sizes="any">

    <!-- SEO 핵심 -->
    <title id="page-title">{{TITLE}} | Pebblous</title>
    <meta id="meta-description" name="description" content="{{DESCRIPTION}}">
    <meta id="meta-keywords" name="keywords" content="{{KEYWORDS}}">
    <meta name="author" content="Pebblous Data Communication Team">
    <meta name="robots" content="index, follow">

    <!-- Canonical & Hreflang -->
    <link id="canonical-url" rel="canonical" href="https://blog.pebblous.ai/{{PATH}}">
    <link id="hreflang-ko" rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/{{PATH}}">

    <!-- Open Graph -->
    <meta property="og:url" content="https://blog.pebblous.ai/{{PATH}}">
    <meta property="og:title" content="{{TITLE}} | Pebblous">
    <meta property="og:description" content="{{DESCRIPTION}}">
    <meta property="og:image" content="https://blog.pebblous.ai/{{IMAGE}}">
    <meta property="og:type" content="article">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{TITLE}}">
    <meta name="twitter:image" content="https://blog.pebblous.ai/{{IMAGE}}">

    <!-- Styles -->
    <link rel="stylesheet" href="/styles/common-styles.css">
</head>
<body>
    <!-- Content -->
    <script src="/scripts/common-utils.js"></script>
    <script>
        const config = {
            mainTitle: "{{TITLE}}",
            subtitle: "{{SUBTITLE}}",
            publishDate: "{{DATE}}",
            category: "tech",  // art, tech, story
            articlePath: "{{PATH}}",
            tags: ["{{TAG1}}", "{{TAG2}}"],
            faqs: [  // 선택사항
                {
                    question: "질문",
                    answer: "답변"
                }
            ]
        };
        await PebblousPage.init(config);
    </script>
</body>
</html>
```

---

## 📊 성능 모니터링

### 1. Google Search Console
- **주간 체크**: 인덱싱 상태, 검색어 순위, 클릭률
- **월간 리포트**: 상위 검색어, 개선 기회

### 2. SEO 검증 도구
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **OpenGraph.xyz**: https://www.opengraph.xyz/
- **Meta Tags**: https://metatags.io/

### 3. 핵심 지표 (KPI)
- **평균 검색 순위**: 상위 10개 키워드
- **CTR**: 목표 > 3%
- **인덱싱 속도**: 24시간 내
- **OG 이미지 표시율**: > 95%

### 4. Sitemap 자동 생성 시스템
- ✅ `sitemap.xml`: articles.json 기반 자동 생성
- ✅ 매일 00:00 UTC 자동 업데이트
- ✅ Google 자동 ping

---

## 📝 체크리스트 (새 아티클 작성 시)

### 콘텐츠 작성 전
- [ ] 키워드 리서치
- [ ] 경쟁 분석
- [ ] OG 이미지 제작 (1200x630px)

### articles.json 등록
```json
{
  "id": "unique-id",
  "title": "글 제목",
  "description": "150-160자 요약",
  "category": "tech",
  "date": "2025-01-12",
  "path": "project/YourProject/file.html",
  "image": "https://blog.pebblous.ai/project/YourProject/image/file.png",
  "published": true,
  "featured": false,
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### HTML 작성 시
- [ ] Google Tag Manager 포함
- [ ] `<html lang="ko">`
- [ ] `<title>` 50-60자
- [ ] `<meta name="description">` 150-160자
- [ ] `<meta name="keywords">` 10-20개
- [ ] Canonical URL
- [ ] Open Graph 완전 구현 (14개 태그)
- [ ] Twitter Cards 구현 (8개 이상 태그)
- [ ] config 설정 (category, articlePath, tags 필수)
- [ ] **⭐ FAQ 구현** (신규 블로그 필수):
  - [ ] `config.faqs` 배열에 FAQ 데이터 작성 (Schema 자동 주입)
  - [ ] 본문에 FAQ HTML 섹션 추가 (6개 질문 권장, UX 향상)
  - [ ] TOC에 FAQ 섹션 링크 추가
  - [ ] FAQ 질문에 타겟 키워드 자연스럽게 포함
  - [ ] **⚠️ `<head>`에 FAQPage JSON-LD 직접 작성 금지** (config.faqs와 중복됨)

### 배포 전
- [ ] Google Rich Results Test 통과
- [ ] Schema Validator 통과
- [ ] Facebook Debugger 확인
- [ ] OpenGraph.xyz 트위터 카드 확인
- [ ] 모바일 반응형 테스트

### 배포 후
- [ ] Google Search Console URL 제출
- [ ] Sitemap 자동 갱신 확인
- [ ] SNS 게시
- [ ] 1주일 후 검색 순위 확인

---

## 🚀 향후 계획

### 단기 (완료)
- ✅ Article Schema 자동 주입
- ✅ Related Posts 자동 생성
- ✅ Breadcrumbs 자동 생성
- ✅ FAQ Schema 자동 주입
- ✅ Sitemap 자동 생성

### 중기 (1-3개월)
- [ ] Video Schema
- [ ] SoftwareApplication Schema (AADS, 데이터클리닉)
- [ ] Core Web Vitals 최적화
- [ ] 국제화 (영어 버전)

### 장기 (3-6개월)
- [ ] 도메인 권위도(DA) 향상
- [ ] Featured Snippets 최적화
- [ ] Podcast SEO

---

## 📚 참고 자료

### 공식 문서
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/)

### 검증 도구
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [OpenGraph.xyz](https://www.opengraph.xyz/)
- [Meta Tags](https://metatags.io/)

---

## 📝 최근 업데이트 로그

### 2025-12-08: FAQPage Schema 중복 오류 방지 가이드 추가
- ⚠️ **문제 발견**: `config.faqs` + `<head>` JSON-LD FAQPage 동시 사용 시 Google Search Console에서 "FAQPage 중복" 오류 발생
- ✅ **해결**: `config.faqs`는 `PebblousPage.init()`에서 자동으로 FAQPage Schema를 `<head>`에 주입하므로, 직접 JSON-LD 작성 불필요
- ✅ **권장 구현**: `config.faqs` (Schema) + 본문 FAQ HTML (UX) 조합
- ✅ **금지 조합 명시**: `config.faqs` + `<head>` JSON-LD FAQPage 동시 사용 금지
- ✅ **체크리스트 업데이트**: FAQ 구현 시 중복 방지 주의사항 추가
- ✅ **비교표 개선**: 구성 요소와 금지 조합 명확화

### 2025-11-19: 피지컬 AI 데이터 파이프라인 블로그 SEO 개선 + FAQ 이중 구현 전략 수립
- ✅ **타겟 키워드 최적화**: "피지컬 AI 데이터" 키워드로 구글 검색 1위 전략 수립 및 적용
- ✅ **메타데이터 최적화**:
  - Title: "피지컬 AI 데이터 파이프라인: 제조 혁신을 위한 AI-Ready 데이터 솔루션"
  - Description: "피지컬 AI 데이터 시대, 제조 현장의 데이터를 AI가 학습 가능한 형태로 변환..."
  - OG Tags, Twitter Cards에 목표 키워드 자연스럽게 삽입
- ✅ **본문 키워드 밀도 최적화**:
  - H1: "피지컬 AI 데이터 파이프라인"
  - H2 섹션별 키워드 자연스럽게 분산 배치
  - Executive Summary 첫 문단에 "피지컬 AI 데이터" 및 "피지컬 AI 데이터 파이프라인" 강조
- ✅ **⭐ FAQ 이중 구현 (본문 HTML + JSON-LD Schema)**:
  - **6개 FAQ 질문**:
    - "피지컬 AI 데이터란 무엇인가요?"
    - "제조사가 피지컬 AI 데이터를 준비하는 단계는?"
    - "피지컬 AI 데이터 파이프라인 구축에 얼마나 걸리나요?"
    - "피지컬 AI 데이터와 일반 AI 데이터의 차이는?"
    - "페블러스 DataClinic은 어떤 도움을 제공하나요?"
    - "한국에서 피지컬 AI 데이터 관련 정부 지원이 있나요?"
  - **이중 구현**:
    - `<head>`에 FAQPage JSON-LD Schema → Google Rich Snippets
    - 본문에 FAQ HTML 섹션 → 사용자 경험 향상, 체류 시간 증가
  - **신규 블로그 표준 전략**: 앞으로 모든 신규 블로그에 FAQ 이중 구현 적용
- ✅ **로컬 SEO 강화 - 한국 사례 추가**:
  - "한국의 피지컬 AI 데이터 전략" 섹션 추가
  - HD현대 스마트 조선소 (조선업)
  - 현대자동차 메타팩토리 (자동차)
  - 과학기술정보통신부 AI 학습용 데이터 구축 사업
  - 중소벤처기업부 스마트팩토리 보급·확산 사업
  - 각 사례별 참고문헌 링크 추가
- ✅ **이미지 SEO 최적화**:
  - OG Image alt 텍스트: "피지컬 AI 데이터 파이프라인 전략 인포그래픽 - 제조 현장의 AI-Ready 데이터 구축 방안"
- ✅ **내부 링크 구조 개선**:
  - TOC에 FAQ 섹션 추가
  - 섹션 번호 재정렬 (6. FAQ, 7. 결론)

**예상 SEO 효과**:
- 🎯 **키워드 밀도**: "피지컬 AI 데이터" 키워드가 title, meta, H1, H2, FAQ, 본문 전반에 자연스럽게 분산
- 🌟 **Rich Snippets**: FAQ Schema로 검색 결과 페이지 점유율 증가, Position 0 (Featured Snippet) 후보
- 🇰🇷 **로컬 검색 최적화**: 한국 사례 추가로 국내 검색 의도 충족, 토픽 권위(Topical Authority) 강화
- ⏱️ **사용자 경험**: 본문 FAQ로 빠른 정보 접근, 체류 시간 증가, 이탈률 감소, CTR 향상
- 🔍 **이미지 검색**: 상세한 alt 텍스트로 이미지 검색 유입 확보
- 📈 **이중 구현 시너지**: Schema + HTML FAQ로 SEO와 UX 모두 최적화

### 2025-11-15: Physical AI SEO 전략 & FAQ Schema 검증
- ✅ **Google Rich Results Test 검증 완료**: JavaScript `config.faqs` 방식이 Google에서 정상 인식됨을 확인
- ✅ **Physical AI 한영 키워드 전략 수립**: "피지컬 AI (Physical AI)" 한영 병기로 Google/네이버 동시 최적화
- ✅ **Physical AI 블로그 3개에 FAQ Schema 추가**:
  - data-startup-physical-ai-01.html (JavaScript Config 방식, 6 FAQs)
  - data-pipeline-for-physical-ai-01.html (직접 HTML Schema, 6 FAQs)
  - PBLS-IR-Physical-AI-01.html (직접 HTML Schema, 6 FAQs)
- ✅ **articles.json 태그 업데이트**: Physical AI 관련 블로그에 "피지컬 AI" 태그 추가
- ✅ **SEO 문서화**: FAQ 구현 방식 비교표, Physical AI 키워드 전략 문서화

### 2025-01-14: 초기 SEO 전략 수립
- Phase 1-3 자동화 시스템 구축
- Article Schema, BreadcrumbList, FAQPage 자동 주입
- Google Tag Manager 통합

---

**이 문서는 실제 배포된 페이지의 SEO 성과를 기반으로 지속적으로 업데이트됩니다.**
**최종 업데이트**: 2025-12-08
**작성자**: Pebblous Tech Team
