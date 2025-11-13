# SEO 전략 & 체크리스트 (Pebblous Blog)

> **목적**: 페블러스 블로그의 검색엔진 최적화 및 AI 에이전트 발견성 향상을 위한 통합 가이드
> **최종 업데이트**: 2025-01-14
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
- **핵심 키워드**: 3-5개
- **롱테일 키워드**: 10-20개
- **관련 기술**: AI, ML, Physical AI, ISO 5259, Data Quality

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
- [ ] FAQ 추가 (권장)

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

**이 문서는 실제 배포된 페이지의 SEO 성과를 기반으로 지속적으로 업데이트됩니다.**
**최종 업데이트**: 2025-01-14
**작성자**: Pebblous Tech Team
