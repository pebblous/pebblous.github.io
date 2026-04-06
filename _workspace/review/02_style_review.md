## Style Review — mlflow-mlops-standard/ko/index.html

### S1. 기본 구조
| # | 항목 | 결과 | 비고 |
|---|------|------|------|
| S1-1 | `<html lang="ko" data-theme="light">` | ✅ | — |
| S1-2 | `<div id="header-placeholder">` body 최상단 | ✅ | — |
| S1-3 | `<div id="footer-placeholder">` body 하단 | ✅ | — |
| S1-4 | `<h1 id="page-h1-title">` 비어 있음 | ✅ | — |
| S1-5 | `share-buttons-placeholder` `mt-4` 포함 | ✅ | 수정 완료 |

### S2. PebblousPage.init()
| # | 항목 | 결과 | 비고 |
|---|------|------|------|
| S2-1 | `mainTitle` 있음 | ✅ | — |
| S2-2 | `subtitle` 있음 | ✅ | — |
| S2-3 | `pageTitle` 있음 | ✅ | — |
| S2-4 | `publishDate` "YYYY-MM-DD" | ✅ | "2026-04-06" |
| S2-5 | `defaultTheme: "light"` | ✅ | — |
| S2-6 | `category` 유효값 | ✅ | "tech" |
| S2-7 | `faqs` 7개 이상 (question/answer 형식) | ✅ | 10개 |
| S2-8 | `/scripts/common-utils.js` 경로 | ✅ | — |

### S3. 레이아웃
| # | 항목 | 결과 |
|---|------|------|
| S3-1 | Container `max-w-[1400px]` | ✅ |
| S3-2 | Flex 래퍼 `lg:flex lg:gap-8` | ✅ |
| S3-3 | Main `max-w-[800px]` (flex-1 금지) | ✅ |
| S3-4 | TOC `lg:w-[240px] sticky top-20` | ✅ |

### S4. TOC 구조
| # | 항목 | 결과 | 비고 |
|---|------|------|------|
| S4-1 | `<ul id="toc-links">` (NOT nav) | ✅ | `<nav>` → `<aside>` 수정 완료 |
| S4-2 | TOC 링크 `-ml-px border-l-2 border-transparent hover:border-orange-500` | ✅ | — |
| S4-3 | TOC href ↔ 섹션 id 1:1 매칭 | ✅ | — |

### S5. 타이포그래피
| # | 항목 | 결과 |
|---|------|------|
| S5-1 | 한국어 이탤릭 없음 | ✅ |
| S5-2 | 하드코딩 색상 없음 | ✅ |
| S5-3 | Hero h1 스타일 | ✅ |
| S5-4 | 섹션 h2 number-badge | ✅ |
| S5-5 | section-heading 클래스 사용 안 함 | ✅ |

### S6. 캐시버스팅
| # | 항목 | 결과 |
|---|------|------|
| S6-1 | CSS `?v=20260406` | ✅ |
| S6-2 | JS `?v=20260406` | ✅ |
| S6-3 | `css/styles.css` 미사용 | ✅ |

### 수정 완료 항목
- ✅ S1-5: `share-buttons-placeholder`에 `mt-4` 추가
- ✅ S4-1: `<nav>` → `<aside>` 변경

**최종 총점: 28✅ 0⚠️ 0❌**
