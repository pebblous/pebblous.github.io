# 페블러스 블로그 2025년 결산

**작성일**: 2025-12-28
**기간**: 2025년 9월 21일 ~ 2025년 12월 28일 (약 3개월)

---

## 1. 프로젝트 개요

페블러스 블로그(blog.pebblous.ai)는 2025년 9월 21일 첫 커밋을 시작으로, 약 3개월간 집중 개발되었습니다. AI 데이터 품질, Physical AI, 온톨로지, 그리고 Data Art Lab까지 다양한 주제를 다루는 기술 블로그로 성장했습니다.

### 주요 특징

- **다크 테마 기반 3가지 테마**: Dark, Light, Beige
- **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- **SEO 최적화**: JSON-LD, Open Graph, Twitter Card
- **관련글 자동 추천**: 태그 기반 유사 기사 추천
- **다국어 지원**: 한국어/영어

---

## 2. 소스 코드 통계

### 전체 소스 코드 (venv, node_modules, archive 제외)

| Extension | Files | Lines |
|-----------|------:|------:|
| html | 94 | 65,385 |
| json | 12 | 13,955 |
| py | 11 | 2,229 |
| js | 11 | 1,769 |
| css | 5 | 1,625 |
| xml | 2 | 790 |
| yml | 4 | 336 |
| sh | 1 | 122 |
| txt | 1 | 18 |
| **TOTAL** | **141** | **86,229** |

### Python 스크립트 (11개)

| 파일 | 용도 |
|------|------|
| generate-rss.py | RSS 피드 생성 |
| scan-html-files.py | HTML 파일 스캔 유틸리티 |
| scripts/generate-qa-post.py | QA 포스트 자동 생성 |
| project/CURK/ontology/pdf-ontology-extractor-llm.py | PDF 온톨로지 추출 (LLM) |
| project/CURK/ontology/convert-meta-ontology-to-index.py | 메타 온톨로지 변환 |
| project/CURK/ontology/build-all-ontologies.py | 전체 온톨로지 빌드 |
| project/CURK/ontology/extract-owl-hierarchy.py | OWL 계층 추출 |
| project/CURK/ontology/pdf-indexer.py | PDF 인덱싱 |
| project/CURK/ontology/extract-document-structure.py | 문서 구조 추출 |

### JavaScript 모듈 (11개)

| 파일 | 용도 |
|------|------|
| scripts/common-utils.js | 공통 유틸리티 (관련글, 테마 등) |
| scripts/daily-dal.js | 오늘의 달 (Daily DAL) 모달 |
| components/footer-loader.js | 푸터 동적 로딩 |
| scripts/blog-cards.js | 블로그 카드 렌더링 |
| scripts/theme-manager.js | 테마 전환 관리 |
| generate-sitemap.js | 사이트맵 생성 |

---

## 3. Markdown 문서 통계

### 전체 통계

| 지표 | 값 |
|------|------|
| **파일 수** | 53개 |
| **전체 워드 수** | 129,771 words |
| **전체 라인 수** | 15,898 lines |
| **파일당 평균 워드** | 2,448 words |

### 규모 비교

- 전체 **129,771 words** ≈ 책 1권 분량 (일반 단행본 8-10만 단어)
- 대부분 2,000~6,000 단어 범위의 기술 문서

### 상위 10개 파일 (워드 수 기준)

| 워드 | 파일명 |
|-----:|--------|
| 6,721 | AADS LLM QA 데이터셋 - 로봇 분야 |
| 5,886 | 합성 데이터 벤더 가격 정책 분석 |
| 5,794 | 벡터 임베딩과 지식 그래프 통합 보고서 |
| 5,006 | AI Data QA Framework |
| 4,738 | blog-creation-workflow.md |
| 4,652 | Code Painting Essay (English) |
| 3,752 | Code Painting Essay (Korean) |
| 3,732 | AADS QA 데이터셋 - 로봇 데이터품질 |
| 3,665 | AADS QA 데이터셋 - 사회안전 분야 |
| 3,658 | ISO 5259-2 품질 측정 기준 요약 |

---

## 4. GitHub 커밋 통계

### 월별 커밋 수

| 월 | 커밋 수 | 그래프 |
|----|-------:|--------|
| 2025-09 | 13 | ██ |
| 2025-10 | 131 | ████████████████████████ |
| 2025-11 | 460 | ████████████████████████████████████████████████████████████████████████████████ |
| 2025-12 | 149 | ████████████████████████████ |
| **합계** | **753** | |

### 주간 커밋 트렌드

| 주차 | 커밋 | 그래프 |
|------|-----:|--------|
| 09-21 | 7 | ██ |
| 09-28 | 10 | ███ |
| 10-05 | 22 | ██████ |
| 10-12 | 29 | ████████ |
| 10-19 | 4 | █ |
| 10-26 | 87 | ████████████████████████ |
| 11-02 | 128 | ████████████████████████████████████ (Peak) |
| 11-09 | 116 | ████████████████████████████████ |
| 11-16 | 64 | █████████████████ |
| 11-23 | 29 | ████████ |
| 11-30 | 34 | █████████ |
| 12-07 | 16 | ████ |
| 12-14 | 28 | ███████ |
| 12-21 | 54 | ██████████████ |
| 12-28 | 7 | ██ (진행중) |

### 주요 지표

| 지표 | 값 |
|------|------|
| **총 커밋** | 753 |
| **활동 기간** | 14주 |
| **주당 평균** | 53.8 commits |
| **피크 주간** | 11-02 (128 commits) |
| **하루 최대** | 26 commits (12-25) |

---

## 5. 블로그 콘텐츠 통계

### 섹션별 기사 수

| 섹션 | 기사 수 | 비율 |
|------|-------:|-----:|
| Data Art Lab (art) | 23 | 40.4% |
| Tech (tech) | 20 | 35.1% |
| Business (business) | 8 | 14.0% |
| Story (story) | 6 | 10.5% |
| **합계** | **57** | 100% |

---

### Data Art Lab (23개)

| # | 제목 |
|--:|------|
| 1 | 질서와 자유의 변주곡 |
| 2 | 코드로 그린 그림 - 컴퓨터 과학자의 인공지능과 예술 이야기 |
| 3 | 블로그의 미래를 상상하다: Data Art Lab이 제안하는 6가지 혁신 컨셉 |
| 4 | 코드 페인팅 (Code Painting) - 코드로 그리는 예술 |
| 5 | Atlas of Line Grids - 16 Tribes |
| 6 | Birth of Abstraction |
| 7 | Connected Lines 4 Streams |
| 8 | Deep Reinforcement Learning Visualization |
| 9 | Evolution of Pebbly #01 |
| 10 | Lantana 4x4 Pixel Stack |
| 11 | Line Grid - Ambiguous Boundary |
| 12 | Line Grid - Evolution of Disorder |
| 13 | Line Grid - Evolution of Disorder (Mathematical Surface) |
| 14 | Line Grid - Spring |
| 15 | Offset Curves of Freeform Curves |
| 16 | Pendulum, Particles and Pebbles (2025-10-02T20-46-48) |
| 17 | Pendulum, Particles and Pebbles (2025-10-05T00-28-53) |
| 18 | Pendulum, Particles and Pebbles (2025-10-06T22-30-24) |
| 19 | Rectangle and Camera Geometry |
| 20 | Rib and Fan - Bézier Curve Growth Structure |
| 21 | Shape Blending with Direction Map |
| 22 | Star Swap - Pillars of Creation |
| 23 | Tangible Data: From Data Nature to Data Culture |

---

### Tech (20개)

| # | 제목 |
|--:|------|
| 1 | 엔터프라이즈 인텔리전스를 위한 온톨로지 패러다임의 전환 |
| 2 | 초격차를 위한 마지막 퍼즐: Physical AI와 데이터 중심 AI 스타트업의 국가 전략적 가치 |
| 3 | 규제와 거버넌스 분야 LLM 파인튜닝용 QA 데이터셋 구축: 데이터 품질 관점 |
| 4 | 페블러스 데이터 그린하우스: AI-Ready 데이터 운영 인프라의 새로운 표준 |
| 5 | 지능적 앵무새의 탄생: LLM 지능 논쟁과 창발적 가능성 |
| 6 | 규제와 거버넌스 (EU AI Act) 분야 LLM 파인튜닝용 QA 데이터셋 구축: 데이터 품질 관점 |
| 7 | 사회안전 분야 LLM 파인튜닝용 QA 데이터셋 구축: 데이터 품질 관점 |
| 8 | 로봇 분야 LLM 파인튜닝용 QA 데이터셋 구축: (1) 도메인 지식 |
| 9 | 로봇 분야 LLM 파인튜닝용 QA 데이터셋 구축: (2) 데이터 품질 |
| 10 | 제조 분야 LLM 파인튜닝용 QA 데이터셋 구축: AADS의 피지컬 AI 접근법 |
| 11 | 피지컬 AI 시대의 패권 경쟁: 데이터 중심 생존 전략과 페블러스의 역할 |
| 12 | 피지컬 AI 데이터 파이프라인: 제조 혁신을 위한 AI-Ready 데이터 솔루션 |
| 13 | 피지컬 AI (Physical AI) - 로봇과 제조 혁신의 핵심 기술 |
| 14 | 팔란티어 vs 전통 온톨로지: 40년의 진화 |
| 15 | AADS: 자율형 AI 데이터 과학자 - CLI 시뮬레이션 |
| 16 | AI 데이터 품질 표준과 페블러스 데이터클리닉: ISO/IEC 5259-2 정량적 매핑 분석 (상세판) |
| 17 | AI 데이터 품질 평가 프레임워크: 신뢰할 수 있는 AI를 위한 6가지 접근법 |
| 18 | AI를 위한 지식 표현: 벡터 임베딩과 지식 그래프 (1) |
| 19 | CURK: 온톨로지 기반 PDF 탐색기 |
| 20 | ISO 표준에서 온톨로지 추출하기: ISO/IEC 5259-2 사례 연구 |

---

### Business (8개)

| # | 제목 |
|--:|------|
| 1 | 페블러스 최적 글로벌 투자사 분석 |
| 2 | 데이터 품질 표준화 및 글로벌 인증 로드맵: ISO/IEC 5259를 중심으로 |
| 3 | 합성 데이터 가격의 진실: '데이터'가 아니라 '가치'를 산다 |
| 4 | 페블러스 투자 유치 제안서: Physical AI 시대를 위한 데이터 그린하우스 전략 |
| 5 | 페블러스 사업 전망 분석: PitchBook '2026 AI Outlook' 관점 |
| 6 | 페블러스 미국 특허 (US 12,481,720 B2) 기술 및 비즈니스 가치 분석 |
| 7 | 대한민국 AI 행동계획과 페블러스 AADS의 전략적 정합성 분석 |
| 8 | 페블러스 IP 포트폴리오 및 기술 경쟁력 심층 분석 보고서 2025 |

---

### Story (6개)

| # | 제목 |
|--:|------|
| 1 | AADS: Agentic AI Data Scientist - 1단계 과제 평가용 데모 |
| 2 | ISO/IEC 25024 데이터 품질 측정 실습 |
| 3 | ISO/IEC 5259 표준 기반 LLM 텍스트 데이터 품질 평가 가이드 |
| 4 | ISO/IEC 5259-2: 데이터 품질 측정 기준(QM) 핵심 요약 |
| 5 | LLM 학습용 데이터셋 검수기 |
| 6 | LLM 데이터셋 가이드 2025 |

---

## 6. 기술 스택

### Frontend

- **HTML5** + **Tailwind CSS** (CDN + 빌드)
- **Vanilla JavaScript** (프레임워크 없음)
- **Chart.js** (데이터 시각화)

### Backend / 빌드

- **GitHub Pages** (정적 호스팅)
- **GitHub Actions** (자동 배포, files-index.json 생성)
- **Python** (RSS 생성, 온톨로지 처리)
- **Node.js** (Tailwind CSS 빌드, 사이트맵 생성)

### 특수 기능

- **Mermaid** (다이어그램)
- **Giscus** (댓글)
- **Panzoom** (이미지/SVG 뷰어)
- **OWL/RDF** (온톨로지)

---

## 7. 회고 및 인사이트

### 성과

1. **3개월간 753 커밋** - 주당 평균 53.8 커밋의 집중 개발
2. **57개 기사** 발행 - 기술, 비즈니스, 예술을 아우르는 콘텐츠
3. **86,000줄 코드** - 프레임워크 없이 순수 HTML/CSS/JS로 구현
4. **130,000 단어 문서** - 책 1권 분량의 기술 문서 축적

### 교훈

1. **CSS 변수 통합 필요**: `styles.css`와 `common-styles.css`의 테마 변수 중복 → `theme-variables.css`로 통합 예정
2. **관련글 자동화**: 하드코딩된 관련글을 태그 기반 자동 추천으로 전환 완료
3. **SEO 최적화**: FAQ 스키마, 메타 태그 체계화

### 향후 계획

- CSS 테마 변수 통합 마이그레이션
- 검색 기능 강화
- 다국어 콘텐츠 확대

---

## 업데이트 로그

- **2025-12-28**: 초기 작성
