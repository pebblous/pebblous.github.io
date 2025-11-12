# 페블러스 블로그 SEO 강화 프로젝트 (2025년 1월)

**목표**: 검색엔진과 AI 에이전트(ChatGPT, Claude 등)가 페블러스 블로그 콘텐츠를 효과적으로 발견하고 인용할 수 있도록 SEO 최적화

**핵심 원칙**: 완전 자동화 - 새 글 추가 시 수동 작업 없이 모든 SEO 기능 자동 작동

---

## Phase 1: 기본 SEO 인프라 구축

**구현 일자**: 2025년 1월 12일
**커밋**: `d9f4607` - "Add SEO enhancements: Article Schema, category descriptions, and keywords"

### 1.1 Article Schema 자동 주입

**구현 위치**: `scripts/common-utils.js` (lines 472-541)

#### 기능
- Schema.org **TechArticle** 타입 사용
- 모든 article 페이지에 자동으로 JSON-LD 스키마 주입
- `PebblousPage.init(config)` 호출 시 자동 작동

#### 스키마 구조
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "글 제목",
  "description": "글 부제",
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
    "logo": { ... }
  },
  "datePublished": "2025-01-12",
  "dateModified": "2025-01-12"
}
```

#### SEO 효과
- Google Rich Results 지원
- AI 에이전트의 정확한 콘텐츠 인식
- 저자/발행일 정보로 신뢰도 향상

---

### 1.2 Category Descriptions

**구현 위치**: `index.html` (lines 276, 289, 302)

#### 추가된 설명
- **Data Art**: "데이터를 예술로 표현하는 작품들 - 인터랙티브 미디어 아트, 제너러티브 아트, 데이터 시각화"
- **Tech Insights**: "Physical AI, 데이터 품질 표준, ISO/IEC 인증 등 AI 기술의 최신 동향과 심층 분석"
- **Data Stories**: "데이터로 풀어내는 산업 이야기 - 합성데이터, LLM 데이터셋, 투자 분석 등 실전 케이스 스터디"

#### SEO 효과
- 카테고리별 키워드 밀도 증가
- 검색엔진이 카테고리 주제 명확히 인식
- 내부 네비게이션 구조 개선

---

### 1.3 Keywords Section

**구현 위치**: `index.html` (lines 244-266)

#### 키워드 목록 (15개)
1. Physical AI
2. 데이터 품질관리
3. ISO/IEC 5259
4. ISO/IEC 25024
5. 합성데이터
6. Synthetic Data
7. Data-Centric AI
8. AI-Ready Data
9. 데이터 그린하우스
10. LLM Dataset
11. 온톨로지
12. Knowledge Graph
13. Neuro-Symbolic AI
14. Data Governance
15. 데이터 아트

#### 전략
- 한국어/영어 병기로 국내외 검색 모두 커버
- 핵심 기술 키워드 집중 노출
- Hero 섹션 바로 아래 배치로 크롤러 우선 발견

#### SEO 효과
- 주요 키워드 검색 시 페블러스 노출 증가
- AI 에이전트의 주제 분류 정확도 향상

---

## Phase 2: 고급 SEO 자동화

**구현 일자**: 2025년 1월 12일
**커밋**: `0bfa375` - "Add Phase 2 SEO enhancements: Related Posts, Breadcrumbs, Author Schema"

### 2.1 Related Posts Component (관련 글 자동 추천)

**구현 위치**: `scripts/common-utils.js` (lines 472-614)

#### 작동 원리
1. **태그 기반 유사도 계산**: 현재 글과 다른 글의 공통 태그 수로 점수 산정
2. **자동 글 탐색**: `articles.json`에서 published=true인 글 중 탐색
3. **정렬 우선순위**:
   - 1순위: 유사도 점수 (공통 태그 수)
   - 2순위: 최신 날짜
4. **자동 배치**: Comments 섹션 바로 위에 상위 3개 글 카드 표시

#### 사용 방법
```javascript
const config = {
    // ... 기존 설정
    articlePath: "project/YourProject/your-article.html",
    tags: ["Tag1", "Tag2", "Tag3"]  // articles.json과 동일하게
};
```

#### SEO 효과
- **Internal Linking 강화**: 자동으로 관련 글 연결
- **Crawl Depth 개선**: 크롤러가 더 많은 페이지 발견
- **체류 시간 증가**: 사용자가 더 많은 글 읽게 유도
- **Topical Authority**: 주제별 콘텐츠 클러스터 형성

---

### 2.2 Breadcrumbs Component (자동 네비게이션)

**구현 위치**: `scripts/common-utils.js` (lines 619-696)

#### 기능
1. **시각적 Breadcrumb**: 🏠 Home / Category / Article
2. **Schema.org BreadcrumbList**: Google Rich Results 지원
3. **카테고리 자동 매핑**:
   - `art` → "Data Art"
   - `tech` → "Tech Insights"
   - `story` → "Data Stories"
4. **자동 배치**: 제목 바로 위에 표시

#### Breadcrumb Schema 구조
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
      "name": "글 제목"
    }
  ]
}
```

#### 사용 방법
```javascript
const config = {
    // ... 기존 설정
    category: "tech"  // art, tech, story 중 하나
};
```

#### SEO 효과
- **Google Rich Results**: 검색 결과에 breadcrumb 경로 표시
- **Site Structure**: 사이트 계층 구조 명확히 전달
- **User Experience**: 사용자 네비게이션 개선

---

### 2.3 Author Schema (저자 정보 강화)

**구현 위치**: `scripts/common-utils.js` (lines 587-621)

#### 기능
- Schema.org **Person** 타입 별도 주입
- Article Schema의 author와 연동
- 소셜 프로필 연결 (LinkedIn, GitHub)

#### Author Schema 구조
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "이주행",
  "url": "https://blog.pebblous.ai/",
  "jobTitle": "CEO & Co-founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Pebblous Inc.",
    "url": "https://www.pebblous.ai"
  },
  "sameAs": [
    "https://www.linkedin.com/company/pebblous",
    "https://github.com/pebblous"
  ]
}
```

#### SEO 효과
- **E-E-A-T 향상**: Google의 Expertise, Experience, Authoritativeness, Trustworthiness 평가
- **Author Authority**: 저자 신뢰도 구축
- **Knowledge Graph**: Google Knowledge Panel 후보

---

## 통합 사용 가이드

### 기존 글에 적용하기

article 페이지의 config에 **3개 필드만 추가**:

```javascript
const config = {
    mainTitle: "글 제목",
    subtitle: "부제목",
    publishDate: "2025년 1월 12일",
    publisher: "(주)페블러스",
    pageTitle: "글 제목 | Pebblous Blog",
    defaultTheme: "dark",

    // Phase 2: 이 3줄만 추가하면 모든 SEO 기능 자동 작동!
    category: "tech",  // art, tech, story 중 하나
    articlePath: "project/YourProject/your-article.html",
    tags: ["Tag1", "Tag2", "Tag3"]  // articles.json과 동일하게
};

await PebblousPage.init(config);
```

### 새 글 작성 시

1. **articles.json에 메타데이터 추가**
   ```json
   {
     "id": "new-article-id",
     "title": "글 제목",
     "description": "글 설명",
     "category": "tech",
     "date": "2025-01-12",
     "path": "project/NewProject/new-article.html",
     "published": true,
     "tags": ["Tag1", "Tag2", "Tag3"]
   }
   ```

2. **HTML 파일에 config 설정**
   - 위의 "기존 글에 적용하기" 참조
   - `category`, `articlePath`, `tags` 3개 필드 필수

3. **완료!**
   - Article Schema 자동 주입
   - Author Schema 자동 주입
   - Breadcrumbs 자동 생성 (+ Schema)
   - Related Posts 자동 탐색 및 표시

---

## SEO 효과 총정리

### 검색엔진 최적화
✅ **Article Schema**: Google Rich Results, 구조화된 데이터
✅ **Breadcrumb Schema**: 검색 결과 경로 표시
✅ **Author Schema**: E-E-A-T 점수 향상
✅ **Keywords Section**: 핵심 키워드 밀도 증가
✅ **Category Descriptions**: 주제 분류 명확화

### AI 에이전트 최적화
✅ **구조화된 데이터**: LLM이 콘텐츠 정확히 이해
✅ **저자/출처 명시**: 인용 시 신뢰도 확보
✅ **태그 기반 관계**: 주제별 콘텐츠 연결 명확

### Internal SEO
✅ **Related Posts**: 자동 내부 링크 생성
✅ **Breadcrumbs**: 사이트 계층 구조
✅ **Category Descriptions**: 주제별 랜딩 페이지 강화

### 사용자 경험
✅ **Related Posts**: 체류 시간 증가, 페이지뷰 증가
✅ **Breadcrumbs**: 네비게이션 개선
✅ **명확한 카테고리**: 콘텐츠 찾기 쉬움

---

## Phase 3: FAQ Schema & Rich Results

**구현 일자**: 2025년 1월 12일
**커밋**: TBD

### 3.1 FAQ Schema (Google Rich Results)

**구현 위치**: `scripts/common-utils.js` (lines 623-656)

#### 기능
- Schema.org **FAQPage** 타입 사용
- Google Rich Results에 FAQ 직접 표시 → CTR 대폭 증가
- Position 0 (Featured Snippet) 후보
- `PebblousPage.init(config)` 호출 시 자동 작동

#### FAQ Schema 구조
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

#### 사용 방법
```javascript
const config = {
    mainTitle: "글 제목",
    subtitle: "부제목",
    publishDate: "2025년 1월 12일",
    publisher: "(주)페블러스",
    pageTitle: "글 제목 | Pebblous Blog",
    defaultTheme: "dark",

    // Phase 3: FAQ 배열 추가
    faqs: [
        {
            question: "질문 1",
            answer: "답변 1"
        },
        {
            question: "질문 2",
            answer: "답변 2"
        }
    ]
};

await PebblousPage.init(config);
```

#### SEO 효과
- **Google Rich Results**: 검색 결과에 FAQ 드롭다운 직접 표시
- **CTR 증가**: 사용자가 클릭 전 답변 확인 가능
- **Featured Snippet**: Position 0 노출 기회
- **Voice Search**: 음성 검색 최적화

#### FAQ 작성 전략
✅ **추천하는 글**:
- How-to 가이드 및 튜토리얼
- 가격 정책 및 비즈니스 모델 설명
- 기술 표준 문서 (ISO/IEC 등)
- 복잡한 개념 설명 글
- 프레임워크/도구 비교 분석

❌ **추천하지 않는 글**:
- 데이터 아트 작품 소개
- 단순 뉴스/공지사항
- 짧은 업데이트

#### 실제 적용 예시

**예시 1**: 합성데이터 가격 정책 (`synthetic-data-pricing-01.html`)
```javascript
faqs: [
    {
        question: "합성데이터 가격은 어떻게 책정되나요?",
        answer: "합성데이터 가격은 데이터 모달리티(정형, 텍스트, 이미지/비디오), 데이터 볼륨, 품질 수준, 공급 모델(SaaS, On-Premise, API) 등에 따라 결정됩니다..."
    }
]
```

---

## 향후 계획 (Phase 3 추가 항목)

### Tailwind 빌드 버전 적용
- CDN 대신 빌드된 Tailwind CSS 사용
- 페이지 로딩 속도 개선

### Hero 메시지 업데이트
- 메인 페이지 히어로 섹션 메시지 개선
- 핵심 가치 제안 명확화

---

## 기술 스택

- **JavaScript Modules**: PebblousRelatedPosts, PebblousBreadcrumbs, PebblousSchema
- **Schema.org**: TechArticle, Person, Organization, BreadcrumbList
- **JSON-LD**: 구조화된 데이터 주입
- **Tailwind CSS**: 스타일링
- **articles.json**: 메타데이터 소스

---

## 참고 문서

- [Schema.org TechArticle](https://schema.org/TechArticle)
- [Schema.org Person](https://schema.org/Person)
- [Schema.org BreadcrumbList](https://schema.org/BreadcrumbList)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google E-E-A-T Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

---

**작성일**: 2025년 1월 12일
**작성자**: Claude Code (Sonnet 4.5)
**프로젝트**: Pebblous Blog SEO Enhancement
