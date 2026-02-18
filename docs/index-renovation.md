# index.html Renovation 전략

> **작성일**: 2026-02-08
> **목표**: 디자인, UX, 사용자 유입 관점에서 index.html을 체계적으로 개선

---

## 현황 분석

### Before (현재 구조)
```
검색창 → Hero (큰 패딩) → Keywords (SEO 태그) → 카테고리별 글 목록 (Art → Tech → Business → Story) → About Founder → Footer
```

### 핵심 문제
1. 첫 방문자가 가장 먼저 보는 것이 빈 검색창 → "여기서 뭘 해야 하지?"
2. 최신 글을 찾을 수 없음 (카테고리별 정렬만 존재)
3. Featured 글이 작은 배지로만 표시, 큐레이션 부재
4. CTA가 "최신 글 보기" 하나, 뉴스레터/RSS 구독 경로 없음
5. Keywords 태그 클릭 불가 → 사용자 기대 위반
6. 카테고리 순서가 비즈니스 목적과 불일치

---

## 개선 우선순위

### P0 — 즉시 (구조적 변경)

#### P0-1: 페이지 진입 순서 재배치
- **Before**: 검색 → Hero → Keywords → 카테고리
- **After**: Hero(축소) → Featured/최신 글 → 검색 → 카테고리
- Hero 패딩 축소: `py-20 lg:py-32` → `py-12 lg:py-20`

#### P0-2: Featured/최신 글 하이라이트 섹션
- Hero 바로 아래에 "Featured" 또는 "최신 글" 섹션 추가
- 전체 카테고리에서 최신 3~4개 글을 큰 카드로 노출
- featured 플래그 글 우선, 이후 날짜순
- 재방문 사용자가 "지난번 이후 뭐가 새로 올라왔지?"를 즉시 확인 가능

### P1 — 단기 (UX 개선)

#### P1-1: Keywords 태그 클릭 시 검색 연동
- 태그 클릭 → 검색창에 해당 키워드 자동 입력 + 검색 실행
- 현재 클릭 불가한 장식적 태그를 기능적 필터로 전환

#### P1-2: 뉴스레터/RSS 구독 CTA
- Footer 또는 Featured 섹션 하단에 RSS 구독 안내
- 이메일 구독은 추후 검토

#### P1-3: 카테고리 순서 재검토
- 현재: Art → Tech → Business → Story
- 검토: Tech → Business → Art → Story (비즈니스 성과 기여 순)

### P2 — 중기 (성능/디자인)

#### P2-1: 모달 lazy loading
- ModalFactory에서 iframe을 클릭 시 생성으로 변경

#### P2-2: Tailwind CDN → 빌드 CSS 전환
- 프로덕션 빌드 파이프라인 구축

#### P2-3: Hero 높이 추가 축소 (P0 이후 재평가)

### P3 — 장기 (기술 부채)

#### P3-1: Particle Canvas 테마 대응
- 라이트/베이지 테마에서 파티클 불투명도 조정 또는 비활성화

#### P3-2: JS 모듈 분리
- 인라인 1,200줄 스크립트를 기능별 모듈로 분리

---

## 진행 로그

### 2026-02-08: 검색 결과 테마 수정 (P0 이전 핫픽스)
- **문제**: 검색 결과 카드에 다크 테마 색상 하드코딩 (`bg-slate-900/50`, `text-white` 등)
- **수정**:
  - `css/styles.css`: 검색 결과용 CSS 변수 규칙 9개 추가
  - `index.html`: 검색 입력, 결과 컨테이너, 결과 카드, 텍스트 색상에서 하드코딩 제거
- **결과**: 다크/라이트/베이지 테마 모두에서 검색 결과가 테마를 따름

### 2026-02-08: P0 — 페이지 구조 재배치 ✅
- **P0-1**: 페이지 진입 순서 변경
  - Before: `검색 → Hero(py-20/32) → Keywords → 카테고리`
  - After: `Hero(py-12/20) → Featured → 검색 → Keywords → 카테고리`
  - Hero 패딩 축소: `py-20 lg:py-32` → `py-12 lg:py-20`
  - Hero CTA 버튼 제거 (Featured 섹션이 바로 아래에 있으므로 불필요)
- **P0-2**: "Latest Posts" 섹션 추가
  - Hero 바로 아래에 전체 카테고리 최신 4개 글 노출
  - featured 플래그 우선, 이후 날짜순 정렬
  - "전체 보기 →" 링크로 카테고리 섹션으로 이동
  - `renderArticles()` 재활용하여 기존 카드 디자인과 동일한 UX

### 2026-02-08: P1 — UX 개선 ✅
- **P1-1**: Keywords 태그 클릭 → 검색 연동
  - `<span class="tag">` → `<button class="tag keyword-filter">`로 변경
  - 클릭 시 검색창에 키워드 자동 입력 + 스크롤 + 검색 실행
  - `.keyword-filter:hover` CSS 추가 (accent-bg + translateY)
- **P1-2**: RSS 구독 CTA 추가
  - 카테고리 섹션과 About Founder 사이에 `.subscribe-card` 삽입
  - RSS 아이콘 + "새 글을 놓치지 마세요" + "RSS 구독하기" 버튼
  - 테마 대응 CSS 변수 사용 (`--bg-card-start`, `--border-color`)
- **P1-3**: 카테고리 순서 변경
  - Before: Art(23) → Tech(27) → Business(12) → Story(7)
  - After: Tech(27) → Business(12) → Art(23) → Story(7)
  - 네비게이션 메뉴(Desktop/Mobile)도 동일 순서로 변경

### 2026-02-08: P2-1 — 모달 lazy loading ✅
- **문제**: 6개 모달이 페이지 로드 시 즉시 iframe 생성 → 불필요한 네트워크 요청 6건
- **수정**:
  - `createModal()`: `<iframe src="...">` → `<iframe data-src="...">`로 변경
  - `openModal()`: 최초 열 때 `data-src` → `src` 설정하여 지연 로딩
  - `closeModal()`: `src = ''`로 iframe 언로드하여 메모리 해제
- **결과**: 페이지 초기 로딩 시 iframe 요청 0건, 모달 열 때만 해당 콘텐츠 로드
