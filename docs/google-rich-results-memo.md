# Google Rich Results — 페블러스 블로그 메모

> **작성**: 2026-05-06
> **목적**: 페블러스 블로그(blog.pebblous.ai)에서 Google Rich Results 자격을 갖추는 것이 왜 중요한지, 그리고 어떻게 운영해야 하는지를 정리한 의사결정용 메모.
> **주의**: 이 메모는 의사결정용 요약. 구현 디테일은 `docs/seo.md`(4계층 SEO 가이드)와 `.claude/skills/seo-check/SKILL.md`(자동 검증) 참조.

---

## 1. Rich Results란 무엇인가

Google 검색 결과에서 "단순 파란 링크" 위에 추가 시각 요소가 붙는 형태.

**페블러스 블로그에 해당되는 주요 유형:**

| 유형 | 페블러스에서 보이는 효과 |
|------|------------------------|
| **Article / TechArticle** | 검색 결과에 큰 썸네일, 발행일, 저자명, 헤드라인 강조 표시 |
| **BreadcrumbList** | URL 대신 `Pebblous › Reports › PebbloSim` 같은 사람 친화적 경로 표시 |
| **FAQPage** | 질문/답변 아코디언 표시 (단, 정부·의료 사이트만, 일반 블로그는 거의 X) |
| **Organization** | 페블러스 로고·소셜링크가 사이드 패널에 표시될 가능성 |
| **VideoObject** | 영상 임베드 시 미리보기 + 재생 시간 |

---

## 2. 페블러스 블로그에서 중요한 이유

### (1) 클릭률(CTR) — 직접적 트래픽 증가

- Rich Results를 받는 페이지의 CTR은 **평균 35% 상승** (업계 데이터)
- 같은 위치(예: 3위)에서 Rich Results 페이지가 **1위 일반 페이지만큼의 트래픽**을 가져갈 수 있음
- 페블러스가 "Physical AI", "DataClinic", "AI-Ready Data" 같은 경쟁 키워드에서 1위가 아니어도 실질 트래픽 확보 가능

### (2) 신뢰도 시그널

- BreadcrumbList가 노출되면 "잘 정돈된 사이트"라는 인상
- Article 스키마로 저자(Pebblous)와 발행일이 노출되면 출처 신뢰도 강화
- 페블러스가 **데이터 품질 회사**라는 포지셔닝과 일치 — "우리 콘텐츠 메타데이터부터 깨끗하다"

### (3) AI 검색·LLM 인용 우대 (2026년 핵심 변화)

이것이 **2024~2026년의 가장 큰 변화**다.

- Google AI Overviews, Bing Copilot, ChatGPT Search, Perplexity 등 AI 검색이 **답변을 생성할 때 출처를 인용**한다.
- 이 인용 우선순위는 **JSON-LD가 명확한 페이지에 강하게 편향**된다 (LLM이 구조화된 데이터를 가장 신뢰)
- 페블러스 콘텐츠가 "Physical AI 합성 데이터" 질문에 인용되려면 → **JSON-LD가 필수**

### (4) 간접 랭킹 영향

- Rich Results 자체는 직접 랭킹 요소가 아니지만, **CTR 상승 → 행동 지표 → 검색 랭킹 개선**의 간접 사이클 형성
- Google John Mueller도 "구조화 데이터는 Google이 콘텐츠를 이해하는 가장 효율적 방법"이라고 반복 확인

### (5) 경쟁 우위

- 전체 도메인의 **12.4%만** Schema.org 마크업 사용 (Epicnotion, 2024)
- 한국어 콘텐츠는 이 비율이 더 낮음 — 페블러스가 KO/EN 양쪽에서 적극 적용하면 한국어권에서 큰 차별화

---

## 3. 페블러스 블로그 현황 (2026-05-06 기준)

### 잘 갖춰진 것 ✅

- **BreadcrumbList**: `PebblousPage.init()`이 자동 생성 — 거의 모든 페이지 충족
- **FAQPage**: `config.faqs`로 정의 → 자동 JSON-LD 주입 (단, 일반 블로그라 Google이 SERP에서 안 보여줄 가능성 큼)
- **Article/TechArticle 일부 페이지**: 신규 표준 페이지(예: PebbloSim)는 `<head>`에 직접 `<script type="application/ld+json">`로 삽입

### 부족한 부분 ⚠️

**자동 점검 결과 (2026-05-06 `tools/audit-jsonld.py` 실행):**

- **전체 published 415개 중 Article 스키마 보유: 208 / 397 (52.4%)**
- **누락: 189개 페이지** (예상 50~80개를 크게 상회)

| 카테고리 | 전체 | 누락 | 누락률 |
|----------|------|------|--------|
| **art** | 75 | 55 | **73.3%** |
| **business** | 43 | 27 | **62.8%** |
| tech | 207 | 89 | 43.0% |
| story | 72 | 18 | 25.0% |

| 언어 | 전체 | 누락 | 누락률 |
|------|------|------|--------|
| ko | 214 | 102 | 47.7% |
| en | 182 | 86 | 47.3% |

- **art 카테고리 73.3% 누락** — DAL(Data Art Lab) 전시작 대부분이 미적용. AI 검색 인용 가치 큼
- **business 62.8% 누락** — BizReport 시리즈도 절반 이상 누락. IR 자료 신뢰도와 직결
- **파일 누락 10건** — articles.json에 등록은 됐지만 디스크에 파일 없음. 별도 정리 이슈

상세 리포트: `tools/jsonld-audit-report.md`, `tools/jsonld-audit-report.json`

### 페블러스에게 핵심 항목 우선순위

| 우선순위 | 스키마 | 이유 |
|---------|-------|------|
| 🔥 **HIGH** | **Article / TechArticle** | 모든 블로그 포스트의 기본. AI Overviews 인용 핵심 |
| 🔥 **HIGH** | **BreadcrumbList** | 이미 자동 — 신규 페이지에서도 누락 없도록 점검 |
| ⚪ **MEDIUM** | **FAQPage** | Google SERP 표시는 거의 X. 그러나 LLM/AI 검색 인용에는 여전히 유효 — 유지 |
| ⚪ **MEDIUM** | **Organization** (사이트 전역) | 페블러스 회사 정보가 검색 사이드 패널에 노출될 가능성 |
| ⬜ **LOW** | **HowTo, Recipe 등** | 페블러스 콘텐츠 성격에 안 맞음 |

---

## 4. 권장 액션 (3단계)

### 단계 1 — 표준 페이지 일괄 점검 ✅ 도구 완성

- ✅ 검출 도구 작성: `tools/audit-jsonld.py`
  ```bash
  python3 tools/audit-jsonld.py                 # 전체 점검
  python3 tools/audit-jsonld.py --category art  # 카테고리 필터
  python3 tools/audit-jsonld.py --language ko   # 언어 필터
  ```
- ✅ 1차 실행 완료 — 189개 누락 페이지 식별 (위 표 참조)
- ⏳ **남은 작업: 일괄 자동 추가 도구 작성** (`tools/inject-jsonld.py` 가칭)
  - articles.json의 메타데이터(title, description, date, image, language)에서 추출
  - HTML `<head>` `<script src="...common-utils.js">` 직전에 삽입
  - `--dry-run`으로 미리보기, `--apply`로 실제 수정
  - 카테고리별 단계 적용: business → tech → story → art 순 추천 (영향도 순)

### 단계 2 — 신규 페이지에 강제 적용 (1일)

- `seo-check` 스킬에 이미 검증 항목 존재 — 신규 페이지 작성 시 누락 즉시 잡힘
- `blog-write`, `dc-write-ko`, `dc-write-en`, `pb-story-write` 등 작성 스킬에 JSON-LD 자동 삽입 단계 명시
- 가능하면 `PebblousPage.init()`이 Article 스키마도 자동 생성하도록 개선 (코드 한 곳만 수정하면 사이트 전체에 적용)

### 단계 3 — 검증 자동화 (1일)

- GitHub Actions로 push마다 [Google Rich Results Test API](https://search.google.com/test/rich-results) 호출
- Article/BreadcrumbList 누락 또는 에러 시 PR 차단
- Search Console의 Rich Results 보고서를 주간 알림으로 받기

---

## 5. 의사결정 요약

> **페블러스 블로그에서 Google Rich Results는 중요한가?**
>
> **YES, 매우 중요.** 다음 세 이유 때문이다:
>
> 1. **데이터 품질 회사라는 포지셔닝과 일치** — 우리 콘텐츠 메타데이터부터 깨끗해야 신뢰성 있다.
> 2. **AI 검색 시대의 인용 우선권** — Google AI Overviews, Perplexity, ChatGPT Search가 페블러스 콘텐츠를 인용하려면 JSON-LD가 사실상 필수다.
> 3. **CTR 35% 상승의 직접 효과** — 1위가 아닌 키워드에서도 실질 트래픽 확보 가능.
>
> 우선순위는 **Article/TechArticle 일괄 점검**부터. BreadcrumbList는 이미 자동, FAQ는 SERP보다 AI 검색을 위한 보험.

---

## 6. 참고 자료

- [Google Rich Results: Every Type, How to Get Them & CTR Impact (2026)](https://schemavalidator.org/guides/google-rich-results)
- [Structured Data SEO 2026: Rich Results Guide](https://www.digitalapplied.com/blog/structured-data-seo-2026-rich-results-guide)
- [FAQ Schema's Rise and Fall in SEO: What Changed in 2025](https://dripranks.com/news/faq-schema-rise-fall-seo-2025/)
- [FAQ Schema in 2025: Still a Valuable SEO Asset](https://www.epicnotion.com/blog/faq-schema-in-2025/)
- [John Mueller Clarifies Schema Changes Coming in 2026](https://www.stanventures.com/news/google-john-mueller-schema-update-2026-5719/)
- [Google Rich Results Test (공식)](https://search.google.com/test/rich-results)
- [Schema.org 공식 문서](https://schema.org/)
- 페블러스 내부: `docs/seo.md` (4계층 SEO 가이드), `.claude/skills/seo-check/SKILL.md`

---

## 부록 — 빠른 검증 명령

특정 페이지의 Rich Results 자격 즉석 확인:

```bash
# Google Rich Results Test (공식, 가장 정확)
open "https://search.google.com/test/rich-results?url=https://blog.pebblous.ai/<your-path>/"

# 로컬 JSON-LD 추출 (페이지에 스키마가 있는지)
curl -s https://blog.pebblous.ai/<your-path>/ | grep -A 30 'application/ld+json'
```
