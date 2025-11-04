# SEO 전략 & 체크리스트 (Pebblous Blog)

> **목적**: `palantir-vs-classic-ontology.html`에서 검증된 SEO 구현을 재사용 가능한 템플릿과 전략으로 일반화
> **최종 업데이트**: 2025-11-01
> **기준 파일**: [project/CURK/ontology/palantir-vs-classic-ontology.html](project/CURK/ontology/palantir-vs-classic-ontology.html)

---

## 📋 목차
1. [SEO 계층 구조](#-seo-계층-구조)
2. [필수 메타 태그 체크리스트](#-필수-메타-태그-체크리스트)
3. [구조화 데이터 (JSON-LD Schema)](#-구조화-데이터-json-ld-schema)
4. [재사용 가능한 템플릿](#-재사용-가능한-템플릿)
5. [자동화 전략](#-자동화-전략)
6. [성능 모니터링](#-성능-모니터링)

---

## 🎯 SEO 계층 구조

### Layer 1: 기본 메타데이터
- `<title>`, `<meta name="description">`, `<meta name="keywords">`
- Viewport, charset, language
- Author, copyright, audience

### Layer 2: 소셜 미디어 최적화
- **Open Graph** (Facebook, LinkedIn)
- **Twitter Cards**
- 이미지: 1200x630px (OG), alt text 필수

### Layer 3: 구조화 데이터 (Schema.org)
- **TechArticle** / **Article** / **BlogPosting**
- **Organization**
- **WebSite**
- **BreadcrumbList**
- **HowTo** (튜토리얼 콘텐츠)

### Layer 4: 검색 엔진 최적화
- Canonical URL
- Hreflang (다국어)
- Robots, sitemap
- Google Tag Manager / Analytics

---

## ✅ 필수 메타 태그 체크리스트

### 1. HTML 기본 속성
```html
<html lang="ko">  <!-- 또는 "en" -->
```

### 2. 문서 메타데이터
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Pebblous Data Communication Team">
<meta name="language" content="Korean">  <!-- 또는 "English" -->
<meta name="copyright" content="Pebblous">
<meta name="rating" content="general">
<meta name="revisit-after" content="7 days">
<meta name="distribution" content="global">
<meta http-equiv="content-language" content="ko">  <!-- 또는 "en" -->
```

### 3. Audience & Topic (선택적이지만 권장)
```html
<meta name="audience" content="Data Scientists, AI Engineers, Enterprise Architects">
<meta name="topic" content="Ontology, Knowledge Graph, Data Integration, AI">
```

### 4. SEO 핵심 태그
```html
<title id="page-title">{제목} | Pebblous</title>
<meta id="meta-description" name="description" content="{150-160자 요약}">
<meta id="meta-keywords" name="keywords" content="{키워드1}, {키워드2}, ...">
<meta name="robots" content="index, follow">
```

**키워드 전략**:
- **브랜드 키워드**: Pebblous, 페블러스, 데이터클리닉, 페블로스코프, CURK, AADS
- **데이터 아트 필수 키워드** (DAL 섹션): Code Painting, 코드 페인팅, Data Art Lab, DAL, mr_lix, 데이터 아트, Data Art, Generative Art, 생성 예술
- **핵심 키워드**: 3-5개 (예: Ontology, Palantir, Knowledge Graph)
- **롱테일 키워드**: 10-20개 (예: "운영 온톨로지", "Operational Ontology")
- **관련 기술**: 5-10개 (예: OWL, RDF, SPARQL, AI, Machine Learning)

### 5. Canonical & Hreflang
```html
<link id="canonical-url" rel="canonical" href="https://blog.pebblous.ai/{경로}">
<link id="hreflang-ko" rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/{경로}">
<link id="hreflang-en" rel="alternate" hreflang="en" href="https://blog.pebblous.ai/{경로}">
<link id="hreflang-default" rel="alternate" hreflang="x-default" href="https://blog.pebblous.ai/{경로}">
```

### 6. Open Graph (Facebook, LinkedIn)
```html
<meta id="og-url" property="og:url" content="https://blog.pebblous.ai/{경로}">
<meta id="og-title" property="og:title" content="{제목} | Pebblous">
<meta id="og-description" property="og:description" content="{요약}">
<meta id="og-image" property="og:image" content="https://blog.pebblous.ai/{이미지경로}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{이미지 설명}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Pebblous Blog">
<meta property="og:locale" content="ko_KR">  <!-- 또는 "en_US" -->

<!-- Article 속성 -->
<meta property="article:published_time" content="{ISO 8601 날짜}">
<meta property="article:modified_time" content="{ISO 8601 날짜}">
<meta property="article:author" content="Pebblous">
<meta property="article:section" content="Technology">
<meta property="article:tag" content="{태그1}">
<meta property="article:tag" content="{태그2}">
```

### 7. Twitter Cards

**중요**: Twitter 카드 태그는 **`name` 속성을 사용**해야 합니다 (`property`가 아님!)

```html
<!-- 필수: 카드 타입을 맨 먼저 정의 -->
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

**주의 사항**:
- ❌ **피해야 할 패턴**: `<meta property="twitter:*">` (동작하지 않음)
- ✅ **올바른 패턴**: `<meta name="twitter:*">`
- `twitter:url` 태그는 **불필요** (Open Graph의 `og:url`로 충분)
- 이미지 크기: **1200x630px 권장** (최소 300x157px, 최대 5MB)
- 카드 타입은 반드시 **맨 먼저 선언**

**이미지 요구사항**:
- 형식: PNG, JPG, GIF, WebP
- 최대 크기: 5MB
- 비율: 1.91:1 (summary_large_image), 1:1 (summary)
- 절대 URL 필수 (상대 경로 불가)

**이미지 경로 규칙** (Pebblous Blog Convention):
- HTML 파일: `https://blog.pebblous.ai/{경로}/{파일명}.html`
- SNS 이미지: `https://blog.pebblous.ai/{경로}/image/{파일명}.png` (또는 `/image/` 폴더)
- **규칙**: HTML 파일이 있는 동일 디렉토리의 `img/` 또는 `image/` 서브폴더에 같은 이름의 PNG 파일 배치
- 예시:
  - HTML: `https://blog.pebblous.ai/project/ISO5259/5259_text_qa.html`
  - Image: `https://blog.pebblous.ai/project/ISO5259/img/5259_text_qa.png`
  - HTML: `https://blog.pebblous.ai/project/CURK/ontology/palantir-vs-classic-ontology.html`
  - Image: `https://blog.pebblous.ai/project/CURK/ontology/image/palantir-vs-classic-ontology.png`

**검증 방법** (2023년 8월 이후):
- ⚠️ Twitter Card Validator는 2023년 8월부터 미리보기 제거됨 ([공지](https://devcommunity.x.com/t/card-validator-preview-removal/175006))
- ✅ **대안 1**: [OpenGraph.xyz](https://www.opengraph.xyz/) - 트위터 카드 미리보기 제공
- ✅ **대안 2**: [Meta Tags](https://metatags.io/) - 모든 소셜 미디어 미리보기
- ✅ **대안 3**: 실제 트윗 게시 후 확인 (가장 확실)
- ✅ **대안 4**: 브라우저 개발자 도구로 메타 태그 존재 여부 확인

### 8. Favicon
```html
<link rel="icon" href="https://www.pebblous.ai/favicon.ico" sizes="any">
<link rel="icon" href="https://www.pebblous.ai/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="https://www.pebblous.ai/apple-touch-icon.png">
```

### 9. Google Tag Manager
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57L9F58B');</script>
<!-- End Google Tag Manager -->
```

---

## 🗂️ 구조화 데이터 (JSON-LD Schema)

### 1. TechArticle Schema (기술 아티클)
```json
{
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "{제목}",
    "alternativeHeadline": "{부제목}",
    "description": "{요약}",
    "image": {
        "@type": "ImageObject",
        "url": "https://blog.pebblous.ai/{이미지}",
        "width": 1200,
        "height": 630
    },
    "author": {
        "@type": "Organization",
        "name": "Pebblous",
        "url": "https://www.pebblous.ai",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.pebblous.ai/image/Pebblous_BM_Orange_RGB.png"
        }
    },
    "publisher": {
        "@type": "Organization",
        "name": "Pebblous",
        "url": "https://www.pebblous.ai",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.pebblous.ai/image/Pebblous_BM_Orange_RGB.png",
            "width": 600,
            "height": 60
        },
        "sameAs": [
            "https://www.linkedin.com/company/pebblous",
            "https://github.com/pebblous"
        ]
    },
    "datePublished": "{ISO 8601}",
    "dateModified": "{ISO 8601}",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://blog.pebblous.ai/{경로}"
    },
    "keywords": "{키워드 목록}",
    "articleSection": "Technology",
    "articleBody": "{본문 요약 (첫 2-3 문단)}",
    "about": [
        {
            "@type": "Thing",
            "name": "{주제1}",
            "description": "{설명}"
        }
    ],
    "mentions": [
        {
            "@type": "SoftwareApplication",
            "name": "{언급된 소프트웨어}",
            "applicationCategory": "{카테고리}",
            "operatingSystem": "Cloud"
        }
    ],
    "inLanguage": "ko-KR",
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by-nc/4.0/",
    "proficiencyLevel": "Beginner|Intermediate|Advanced",
    "dependencies": "{필요한 사전 지식}"
}
```

**변형**:
- 데이터 아트: `@type: "CreativeWork"` 또는 `"VisualArtwork"`
- 일반 블로그: `@type: "BlogPosting"`
- 이벤트 리포트: `@type: "Report"`

### 2. Organization Schema
```json
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pebblous",
    "alternateName": "페블러스",
    "url": "https://www.pebblous.ai",
    "logo": "https://www.pebblous.ai/image/Pebblous_BM_Orange_RGB.png",
    "description": "Pebblous는 AI 기반 데이터 분석, 온톨로지, 지식 그래프 솔루션을 제공하는 딥테크 기업입니다.",
    "foundingDate": "2020",
    "sameAs": [
        "https://www.linkedin.com/company/pebblous",
        "https://github.com/pebblous",
        "https://blog.pebblous.ai"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://www.pebblous.ai/contact"
    }
}
```

### 3. WebSite Schema
```json
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pebblous Blog",
    "alternateName": "페블러스 블로그",
    "url": "https://blog.pebblous.ai",
    "description": "데이터 과학, AI, 온톨로지, 지식 그래프에 관한 기술 블로그",
    "publisher": {
        "@type": "Organization",
        "name": "Pebblous"
    },
    "inLanguage": "ko-KR"
}
```

### 4. BreadcrumbList Schema
```json
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://blog.pebblous.ai"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "{카테고리}",
            "item": "https://blog.pebblous.ai/{카테고리}"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "{현재 페이지}",
            "item": "https://blog.pebblous.ai/{경로}"
        }
    ]
}
```

**자동 생성 로직**:
```javascript
// URL 경로를 breadcrumb으로 변환
const pathToBreadcrumb = (url) => {
    const parts = url.replace('https://blog.pebblous.ai/', '').split('/');
    return parts.map((part, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1),
        "item": `https://blog.pebblous.ai/${parts.slice(0, index + 1).join('/')}`
    }));
};
```

### 5. HowTo Schema (튜토리얼 전용)
```json
{
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "{가이드 제목}",
    "description": "{가이드 설명}",
    "image": "https://blog.pebblous.ai/{이미지}",
    "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
    },
    "totalTime": "PT{N}M",
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "{단계 제목}",
            "text": "{단계 설명}",
            "image": "https://blog.pebblous.ai/{단계 이미지}"
        }
    ]
}
```

---

## 🔧 재사용 가능한 템플릿

### 템플릿 1: 기술 아티클 (Tech Insights)
**파일**: `templates/seo-tech-article.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 기본 메타 -->
    <meta name="author" content="Pebblous Data Communication Team">
    <meta name="language" content="Korean">
    <meta name="copyright" content="Pebblous">

    <!-- GTM -->
    <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-57L9F58B');</script>

    <!-- Favicon -->
    <link rel="icon" href="https://www.pebblous.ai/favicon.ico" sizes="any">

    <!-- SEO 핵심 -->
    <title id="page-title">{{TITLE}} | Pebblous</title>
    <meta id="meta-description" name="description" content="{{DESCRIPTION}}">
    <meta id="meta-keywords" name="keywords" content="{{KEYWORDS}}">
    <meta name="robots" content="index, follow">

    <!-- Canonical & Hreflang -->
    <link id="canonical-url" rel="canonical" href="https://blog.pebblous.ai/{{PATH}}">
    <link id="hreflang-ko" rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/{{PATH}}">
    <link id="hreflang-en" rel="alternate" hreflang="en" href="https://blog.pebblous.ai/{{PATH}}">

    <!-- Open Graph -->
    <meta property="og:url" content="https://blog.pebblous.ai/{{PATH}}">
    <meta property="og:title" content="{{TITLE}} | Pebblous">
    <meta property="og:description" content="{{DESCRIPTION}}">
    <meta property="og:image" content="https://blog.pebblous.ai/{{IMAGE}}">
    <meta property="og:type" content="article">
    <meta property="article:published_time" content="{{PUBLISHED_DATE}}">

    <!-- Twitter (주의: name 속성 사용, property 아님!) -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@pebblous">
    <meta name="twitter:creator" content="@pebblous">
    <meta name="twitter:title" content="{{TITLE}}">
    <meta name="twitter:description" content="{{DESCRIPTION}}">
    <meta name="twitter:image" content="https://blog.pebblous.ai/{{IMAGE}}">
    <meta name="twitter:image:alt" content="{{IMAGE_ALT}}">

    <!-- JSON-LD: TechArticle -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "{{TITLE}}",
        "description": "{{DESCRIPTION}}",
        "datePublished": "{{PUBLISHED_DATE}}",
        "author": { "@type": "Organization", "name": "Pebblous" }
    }
    </script>
</head>
<body>
    <!-- Content -->
</body>
</html>
```

**변수 치환 목록**:
- `{{TITLE}}`: 아티클 제목
- `{{DESCRIPTION}}`: 150-160자 요약
- `{{KEYWORDS}}`: 쉼표로 구분된 키워드
- `{{PATH}}`: 상대 경로 (예: `project/CURK/ontology/file.html`)
- `{{IMAGE}}`: 이미지 경로 (1200x630px)
- `{{PUBLISHED_DATE}}`: ISO 8601 형식 (예: `2025-10-30T09:00:00+09:00`)

---

## 🤖 자동화 전략

### 1. 메타데이터 자동 생성 스크립트
**목표**: articles.json 기반으로 SEO 메타 태그 자동 삽입

```javascript
// generate-seo.js
const fs = require('fs');
const articles = require('./articles.json');

const generateSEOMeta = (article) => {
    const template = fs.readFileSync('./templates/seo-tech-article.html', 'utf8');

    return template
        .replace(/{{TITLE}}/g, article.title)
        .replace(/{{DESCRIPTION}}/g, article.description)
        .replace(/{{KEYWORDS}}/g, article.tags.join(', '))
        .replace(/{{PATH}}/g, article.path)
        .replace(/{{IMAGE}}/g, article.image)
        .replace(/{{PUBLISHED_DATE}}/g, article.date);
};

// 사용 예
articles.articles.forEach(article => {
    if (article.published) {
        const seoHtml = generateSEOMeta(article);
        // HTML 파일에 삽입 또는 업데이트
    }
});
```

### 2. Sitemap 자동 갱신
**파일**: `scripts/update-sitemap.js`

```javascript
const articles = require('./articles.json');
const fs = require('fs');

const generateSitemap = () => {
    const urls = articles.articles
        .filter(a => a.published)
        .map(a => `
    <url>
        <loc>https://blog.pebblous.ai/${a.path}</loc>
        <lastmod>${a.date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://blog.pebblous.ai/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>${urls}
</urlset>`;

    fs.writeFileSync('sitemap.xml', sitemap);
};

generateSitemap();
```

### 3. RSS Feed 자동 생성
**파일**: `scripts/generate-rss.js`

```javascript
const articles = require('./articles.json');
const fs = require('fs');

const generateRSS = () => {
    const items = articles.articles
        .filter(a => a.published)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 20)  // 최신 20개
        .map(a => `
    <item>
        <title>${a.title}</title>
        <link>https://blog.pebblous.ai/${a.path}</link>
        <description>${a.description}</description>
        <pubDate>${new Date(a.date).toUTCString()}</pubDate>
        <category>${a.category}</category>
        ${a.tags.map(tag => `<category>${tag}</category>`).join('\n        ')}
    </item>`).join('');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Pebblous Blog</title>
        <link>https://blog.pebblous.ai</link>
        <description>데이터 과학, AI, 온톨로지에 관한 기술 블로그</description>
        <language>ko-KR</language>${items}
    </channel>
</rss>`;

    fs.writeFileSync('rss.xml', rss);
};

generateRSS();
```

### 4. GitHub Actions 자동 배포
**파일**: `.github/workflows/update-seo.yml`

```yaml
name: Update SEO & Sitemap
on:
  push:
    paths:
      - 'articles.json'
      - 'project/**/*.html'
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Generate Sitemap & RSS
        run: |
          node scripts/update-sitemap.js
          node scripts/generate-rss.js
      - name: Commit changes
        run: |
          git config --local user.name "github-actions[bot]"
          git add sitemap.xml rss.xml
          git commit -m "Auto-update sitemap & RSS" || exit 0
          git push
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
- **OpenGraph.xyz**: https://www.opengraph.xyz/ (트위터 카드 미리보기)
- **Meta Tags**: https://metatags.io/ (모든 소셜 미디어 미리보기)
- ~~**Twitter Card Validator**~~ (2023년 8월 미리보기 제거됨)

### 3. 핵심 지표 (KPI)
- **평균 검색 순위**: 상위 10개 키워드
- **CTR (Click-Through Rate)**: 목표 > 3%
- **인덱싱 속도**: 새 페이지 24시간 내 인덱싱
- **OG 이미지 표시율**: > 95%

### 4. A/B 테스트 항목
- 제목 길이: 50자 vs 60자
- Description: 기술적 vs 스토리텔링
- 이미지: 다이어그램 vs 스크린샷
- Featured 배지: 있음 vs 없음

---

## 🚀 다음 단계 (발전 방향)

### Phase 1: 자동화 강화 (우선순위: 높음)
- [ ] `articles.json` → SEO 메타 자동 생성 스크립트
- [ ] GitHub Actions로 sitemap/RSS 자동 갱신
- [ ] 이미지 자동 압축 (1200x630px, < 200KB)

### Phase 2: 고급 SEO (우선순위: 중간)
- [ ] FAQ Schema 추가 (자주 묻는 질문)
- [ ] Video Schema (동영상 콘텐츠)
- [ ] SoftwareApplication Schema (AADS, PebbloScope)
- [ ] 내부 링크 최적화 (관련 아티클 추천)

### Phase 3: 국제화 (우선순위: 낮음)
- [ ] 영어 버전 페이지 자동 생성
- [ ] Hreflang 태그 완전 지원
- [ ] 다국어 sitemap 분리

### Phase 4: 성능 최적화
- [ ] Core Web Vitals 개선 (LCP < 2.5s, CLS < 0.1)
- [ ] 이미지 lazy loading
- [ ] Critical CSS 인라인화
- [ ] Service Worker (PWA)

---

## 📝 체크리스트 (새 아티클 작성 시)

### 콘텐츠 작성 전
- [ ] 키워드 리서치 (Google Trends, Search Console)
- [ ] 경쟁 분석 (상위 10개 결과 분석)
- [ ] 제목 초안 (3-5개 변형)
- [ ] OG 이미지 제작 (1200x630px)

### HTML 작성 시
- [ ] `lang` 속성 설정 (ko/en)
- [ ] `<title>` 50-60자
- [ ] `<meta name="description">` 150-160자
- [ ] `<meta name="keywords">` 10-20개
- [ ] Canonical URL 설정
- [ ] Open Graph 완전 구현 (9개 필수 태그)
- [ ] Twitter Cards 구현 (6개 필수 태그)
- [ ] JSON-LD Schema 3개 이상 (TechArticle, Organization, BreadcrumbList)

### 배포 전
- [ ] Google Rich Results Test 통과
- [ ] Schema Validator 통과
- [ ] Facebook Debugger 미리보기 확인
- [ ] OpenGraph.xyz 또는 MetaTags.io로 트위터 카드 미리보기 확인
- [ ] 모바일 반응형 테스트

### 배포 후
- [ ] Google Search Console에 URL 제출
- [ ] Sitemap 갱신 확인
- [ ] RSS Feed 갱신 확인
- [ ] SNS 게시 (LinkedIn, Twitter)
- [ ] 1주일 후 검색 순위 확인

---

## 📚 참고 자료

### 공식 문서
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### 검증 도구
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [OpenGraph.xyz](https://www.opengraph.xyz/) - 트위터 카드 미리보기
- [Meta Tags](https://metatags.io/) - 모든 소셜 미디어 미리보기

### 성능 분석
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

---

**이 문서는 실제 배포된 페이지의 SEO 성과를 기반으로 지속적으로 업데이트됩니다.**
**최종 검증**: [palantir-vs-classic-ontology.html](project/CURK/ontology/palantir-vs-classic-ontology.html)
