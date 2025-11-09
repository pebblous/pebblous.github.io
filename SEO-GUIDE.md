# SEO 최적화 가이드 - Pebblous Blog

## 📊 현재 SEO 상태

### ✅ 완료된 최적화

1. **Sitemap 자동 생성 시스템**
   - 📄 `sitemap.xml`: 17개 published 아티클 + 홈페이지 + RSS
   - 🤖 자동 업데이트: articles.json 변경 시 자동 재생성
   - 📅 매일 00:00 UTC 스케줄 업데이트
   - 🔄 변경 시 Google에 자동 ping

2. **메타데이터 완비**
   - ✅ Canonical URL
   - ✅ Open Graph (Facebook, KakaoTalk)
   - ✅ Twitter Card
   - ✅ JSON-LD Structured Data (WebSite, Organization)
   - ✅ robots.txt 최적화
   - ✅ 다국어 지원 (ko, en)

3. **이미지 최적화**
   - ✅ 각 아티클별 이미지 sitemap 포함
   - ✅ og:image 메타태그
   - ✅ 이미지 alt 텍스트

4. **뉴스형 콘텐츠 최적화**
   - ✅ Google News sitemap (최근 2일 콘텐츠)
   - ✅ 동적 changefreq 계산
     - 7일 이내: `daily`
     - 30일 이내: `weekly`
     - 90일 이내: `monthly`
     - 그 이상: `yearly`
   - ✅ Featured 콘텐츠 우선순위 `1.0`

## 🚀 Google Search Console 등록 방법

### Step 1: 속성 추가

1. [Google Search Console](https://search.google.com/search-console) 접속
2. **속성 추가** 클릭
3. **URL 접두어** 선택: `https://blog.pebblous.ai`
4. **계속** 클릭

### Step 2: 소유권 확인

다음 중 하나 선택:

**방법 1: HTML 태그 (권장)**
```html
<!-- index.html의 <head>에 추가 -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

**방법 2: HTML 파일 업로드**
- Google에서 제공하는 HTML 파일을 루트에 업로드

**방법 3: DNS TXT 레코드**
- DNS 설정에서 TXT 레코드 추가 (GitHub Pages는 지원 안 됨)

### Step 3: Sitemap 제출

1. 좌측 메뉴에서 **색인 > Sitemaps** 클릭
2. **새 사이트맵 추가** 입력란에 입력:
   ```
   https://blog.pebblous.ai/sitemap.xml
   ```
3. **제출** 클릭

### Step 4: 색인 요청

**개별 URL 색인 요청:**
1. 상단 검색창에 URL 입력 (예: `https://blog.pebblous.ai/project/PhysicalAI/data-startup-physical-ai-01.html`)
2. **색인 생성 요청** 클릭

**대량 URL 색인 요청 (API 사용):**
```bash
# Google Indexing API 설정 후
curl "https://www.google.com/ping?sitemap=https://blog.pebblous.ai/sitemap.xml"
```

## 📈 Google Search Console 모니터링 지표

### 중요 지표

1. **검색 실적**
   - 총 클릭수
   - 총 노출수
   - 평균 CTR
   - 평균 게재순위

2. **색인 생성**
   - 색인 생성된 페이지 수
   - 색인 생성 제외 페이지 (문제 해결 필요)

3. **사용자 경험**
   - Core Web Vitals
   - 모바일 사용성

4. **사이트맵 상태**
   - 제출된 URL 수
   - 색인 생성된 URL 수

## 🔧 추가 최적화 팁

### 1. 페이지 속도 개선

```bash
# 이미지 최적화
# - WebP 형식 사용 고려
# - 이미지 lazy loading

# CSS/JS 최소화
# - Tailwind CSS purge 활성화
# - 불필요한 JavaScript 제거
```

### 2. 모바일 최적화

- ✅ Responsive design (Tailwind CSS)
- ✅ 터치 친화적 UI
- ⚠️ AMP 고려 (선택사항)

### 3. 콘텐츠 품질

**권장사항:**
- 각 아티클 최소 300단어 이상
- 고유하고 가치 있는 콘텐츠
- 명확한 제목 계층 (H1, H2, H3)
- 내부 링크 구조화
- 외부 권위 있는 소스 인용

### 4. 소셜 미디어 통합

```html
<!-- 각 아티클 페이지에 추가 권장 -->
<meta property="article:published_time" content="2025-11-09T00:00:00+09:00">
<meta property="article:modified_time" content="2025-11-09T00:00:00+09:00">
<meta property="article:author" content="Pebblous Inc.">
<meta property="article:section" content="Tech">
<meta property="article:tag" content="AI, Data Quality">
```

## 📊 SEO 성과 측정

### Google Analytics 4 (GA4) 설정

이미 GTM이 설정되어 있으므로 GA4 태그 추가:

1. GTM 대시보드에서 **새 태그** 생성
2. 태그 유형: **Google 애널리틱스: GA4 구성**
3. 측정 ID 입력
4. 트리거: **All Pages**

### 추적할 주요 이벤트

```javascript
// 아티클 읽기 완료
gtag('event', 'article_read', {
  'article_id': 'physical-ai-startup-strategy',
  'category': 'tech'
});

// 모달 오픈
gtag('event', 'modal_open', {
  'modal_id': 'pendulum03Modal'
});

// 검색 사용
gtag('event', 'search', {
  'search_term': query
});
```

## 🎯 향후 로드맵

### 단기 (1-2주)
- [ ] Google Search Console 소유권 확인
- [ ] Sitemap 제출 및 색인 요청
- [ ] 주요 아티클 색인 상태 모니터링
- [ ] 검색 키워드 분석

### 중기 (1-3개월)
- [ ] 백링크 전략 수립
- [ ] 콘텐츠 업데이트 주기 확립
- [ ] Core Web Vitals 최적화
- [ ] 국제화 (en, ja 등)

### 장기 (3-6개월)
- [ ] 도메인 권위도(DA) 향상
- [ ] Featured Snippets 최적화
- [ ] Video SEO (YouTube 연동)
- [ ] Podcast SEO (RSS feed)

## 📞 도움이 필요하면

- **Google Search Console 헬프**: https://support.google.com/webmasters
- **구조화된 데이터 테스트**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

---

**최종 업데이트**: 2025-11-09
**담당자**: Pebblous Tech Team
