 ![Pebblous_Brandmark_Orange quarter](assets/Pebblous_Brandmark_Orange%20half.png)


 
# DataClinic 진단보고서 페이지 SEO 현황 분석

> 조사일: 2026-03-04
> 대상: `https://dataclinic.ai/report/{ID}` 페이지군

---

## 1. 조사 범위

report ID 1~230 구간을 스캔하여 페이지 상태를 분류했다.

| 상태 | ID 예시 | 수량 |
|------|---------|------|
| **공개 샘플** (로그인 불필요) | 2, 3, 11, 204, 223 | 5 |
| **접근 제한** (로그인 필요, 실제 보고서 존재) | 201, 206, 215, 220, 224~229 | 10 |
| **미준비** (ID 존재, 보고서 미생성) | 1, 4, 5, 7, 8, 10, 14, 15, 20, 25, 30, 100, 200, 202, 203, 205, 207~209, 211~214, 216~219, 222 등 | 다수 |
| **404** (ID 미등록) | 6, 9, 12, 13, 50, 230, 300+ | 소수 |

---

## 2. 현재 SEO 메타태그 (`/report/223` 기준)

```html
<title>Pebblous | Data Clinic</title>
<meta name="description" content="Pebblous Data clinic site">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="theme-color" content="#000000">
<link rel="icon" href="/favicon/favicon.ico">
```

**이것이 전부다.** 모든 report 페이지가 동일한 title/description을 사용한다.

---

## 3. 문제점

### 3.1 title/description이 사이트 전체 공통

- 모든 `/report/{ID}` 페이지의 `<title>`이 `Pebblous | Data Clinic`으로 동일
- `<meta name="description">`도 `Pebblous Data clinic site`로 고정
- **영향**: 구글이 개별 보고서를 구분할 수 없어 검색 결과에 노출되지 않음
- **기대 형태**: `<title>Bird-450 데이터 품질 진단보고서 | Pebblous Data Clinic</title>`

### 3.2 Open Graph 태그 부재

- `og:title`, `og:description`, `og:image`, `og:url`, `og:type` 모두 없음
- **영향**: 카카오톡, 슬랙, LinkedIn, Facebook 등에서 링크 공유 시 제목/설명/썸네일 미리보기가 생성되지 않음
- 고객에게 보고서 링크를 공유할 때 "빈 카드"로 표시됨

### 3.3 Twitter Card 태그 부재

- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` 모두 없음
- X(Twitter) 공유 시 미리보기 없음

### 3.4 Canonical URL 부재

- `<link rel="canonical">` 없음
- **영향**: 동일 보고서가 여러 경로로 접근 가능할 경우 중복 콘텐츠 이슈 발생 가능
- 예: `/report/223`, `/ko/report/223`, 쿼리 파라미터 변형 등

### 3.5 JSON-LD 구조화 데이터 부재

- Article, Report, BreadcrumbList, Dataset 등 어떤 Schema.org 마크업도 없음
- **영향**: 구글 리치 결과(Rich Results)에 표시될 수 없음
- 데이터 품질 진단보고서는 `Report` 또는 `TechArticle` 스키마가 적합

### 3.6 robots 메타태그 부재

- `<meta name="robots">` 없음
- 접근 제한 보고서에 `noindex, nofollow`가 없어 구글봇이 크롤링 시도 후 빈 페이지만 인덱싱할 수 있음

### 3.7 hreflang 부재

- 다국어 대체 페이지 (`<link rel="alternate" hreflang="en">`) 없음
- dataclinic.ai에 `/en/` 경로가 존재한다면 언어별 연결이 필요

### 3.8 SPA 클라이언트 렌더링 구조적 문제

- Next.js 앱이지만 report 페이지의 메타태그가 서버사이드에서 동적 생성되지 않음
- 구글봇이 초기 HTML만 읽으면 **모든 report 페이지가 동일한 제목/설명**을 가진 것으로 인식
- 실제 보고서 내용(데이터셋명, 진단 결과)은 클라이언트 JS 실행 후에만 렌더링됨

---

## 4. 구글 검색 미노출 원인 요약

```
[구글봇 크롤링]
     ↓
[HTML 소스 수신] → title: "Pebblous | Data Clinic" (전체 공통)
     ↓              description: "Pebblous Data clinic site" (전체 공통)
[JS 실행 시도] → 클라이언트 API 호출로 데이터 로딩
     ↓
[판단] → "이 페이지들은 모두 같은 내용" → 대표 1개만 인덱싱 또는 전체 미인덱싱
```

**핵심**: 서버에서 각 report ID별로 고유한 메타태그를 생성하지 않는 것이 근본 원인이다.

---

## 5. 개선 방향 (참고)

### 5.1 Next.js SSR/SSG 메타태그 동적 생성

각 report 페이지에서 서버사이드로 데이터셋 정보를 조회하여 `<head>`에 주입:

```html
<!-- /report/223 예시 -->
<title>Bird-450 데이터 품질 진단보고서 | Pebblous Data Clinic</title>
<meta name="description" content="Kaggle Bird-450 데이터셋의 Level I/II/III 품질 진단 결과. 450종 조류 이미지 데이터의 정합성, 결측치, 클래스 균형 분석.">
<link rel="canonical" href="https://dataclinic.ai/report/223">

<!-- Open Graph -->
<meta property="og:title" content="Bird-450 데이터 품질 진단보고서">
<meta property="og:description" content="450종 조류 이미지 데이터의 AI 학습용 품질 진단 결과">
<meta property="og:image" content="https://dataclinic.ai/og/report-223.png">
<meta property="og:url" content="https://dataclinic.ai/report/223">
<meta property="og:type" content="article">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Bird-450 데이터 품질 진단보고서">
<meta name="twitter:description" content="450종 조류 이미지 데이터의 AI 학습용 품질 진단 결과">
```

### 5.2 접근 제한 페이지 처리

```html
<!-- 로그인 필요 보고서 -->
<meta name="robots" content="noindex, nofollow">
```

### 5.3 JSON-LD 구조화 데이터

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "name": "Bird-450 데이터 품질 진단보고서",
  "description": "...",
  "author": { "@type": "Organization", "name": "Pebblous" },
  "publisher": { "@type": "Organization", "name": "Pebblous Data Clinic" },
  "datePublished": "2026-03-01",
  "url": "https://dataclinic.ai/report/223"
}
```

### 5.4 sitemap.xml 정비

공개 샘플 보고서의 URL을 sitemap에 명시적으로 등록:

```xml
<url>
  <loc>https://dataclinic.ai/report/2</loc>
  <lastmod>2026-03-01</lastmod>
</url>
<url>
  <loc>https://dataclinic.ai/report/3</loc>
  <lastmod>2026-03-01</lastmod>
</url>
<!-- ... -->
```
