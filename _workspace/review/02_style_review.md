## Style Review — timesfm-industrial-forecasting/ko/index.html

| 카테고리 | 결과 | 비고 |
|---------|------|------|
| S1. 기본 HTML 구조 | 5/5 ✅ | 완벽 |
| S2. PebblousPage.init() | 8/8 ✅ | 완벽 |
| S3. 레이아웃 클래스 | 4/4 ✅ | 완벽 |
| S4. TOC 구조 | 3/3 ✅ | 완벽 |
| S5. 타이포그래피 | 4/5 — ❌ S5-2 | 하드코딩 색상 13건 |
| S6. 캐시버스팅 & 링크 | 3/3 ✅ | 완벽 |
| **TOTAL** | **27/28 (96.4%)** | |

### ❌ S5-2 하드코딩 색상 13건

위치: 테이블 셀, 불릿, 숫자 배지, 테두리
주요 색상: `#F86825`(오렌지) 5건, `#6366f1`(인디고) 3건, `#475569`(슬레이트) 2건, `#14b8a6`(청록) 2건, `#dc2626`(빨강) 1건

수정:
- `style="color: #F86825;"` → `text-orange-500`
- `style="background-color: #F86825;"` → `bg-orange-500`
- `style="border-color: #F86825;"` → `border-orange-500`
