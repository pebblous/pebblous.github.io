# Citation & Bibliography Strategy

> 작성일: 2026-05-10
> 배경: Isaac Sim + 3DGS 보고서(26건 참고문헌) 작성 후 논의에서 시작

## 목표

1. 참고문헌을 학술지 수준으로 관리하여 블로그의 권위(E-E-A-T) 강화
2. 포스트별 bibliography를 구조화된 포맷으로 저장
3. 독자에게 citation 다운로드 기능 제공 (BibTeX, RIS 등)
4. 포스트 간 교차 참조 네트워크 구축
5. Google Scholar 노출 가능성 확보 (citation_* 메타 태그)

## 아키텍처

### 파일 구조

```
report/[slug]/
├── ko/index.html
├── en/index.html
└── references.json    ← CSL-JSON 포맷 (정본, Single Source of Truth)
```

### references.json (CSL-JSON)

CSL-JSON은 Citation Style Language의 표준 데이터 포맷. Zotero, Mendeley, citation.js 모두 지원.

```json
[
  {
    "id": "kerbl2023",
    "type": "paper-conference",
    "title": "3D Gaussian Splatting for Real-Time Radiance Field Rendering",
    "author": [
      { "family": "Kerbl", "given": "Bernhard" },
      { "family": "Kopanas", "given": "Georgios" }
    ],
    "issued": { "date-parts": [[2023]] },
    "container-title": "ACM Transactions on Graphics (SIGGRAPH 2023)",
    "DOI": "10.1145/3592433",
    "URL": "https://arxiv.org/abs/2308.04079",
    "note": "Used in: Section 2 (렌더링 비교)"
  }
]
```

### 왜 CSL-JSON인가

| 포맷 | 장점 | 단점 |
|------|------|------|
| BibTeX (.bib) | LaTeX 생태계 표준 | 파싱 복잡, JSON이 아님 |
| RIS (.ris) | 범용 (Zotero, Mendeley) | 태그 기반, 구조 평면적 |
| **CSL-JSON** | **JSON, 웹 네이티브, 다른 포맷으로 변환 가능** | 수동 작성 시 장황 |
| Markdown (ref.md) | 사람이 읽기 쉬움 | 기계 파싱 어려움 |

CSL-JSON → BibTeX, RIS, APA, MLA, Chicago, IEEE 변환은 citation.js가 클라이언트에서 처리.

## 구현 계획

### Phase 1: 기본 인프라
- [ ] references.json 스키마 정의 + 예시 (3DGS 보고서)
- [ ] HTML 참고문헌 섹션에 "Download Citation" 드롭다운 추가
- [ ] citation.js CDN 로드 (참고문헌 섹션이 있는 페이지만)
- [ ] BibTeX, RIS 다운로드 기능 구현

### Phase 2: report-produce 연동
- [ ] Phase 2 리서치에서 references.json 자동 생성
- [ ] Phase 4 HTML 작성 시 references.json에서 참고문헌 섹션 자동 렌더링
- [ ] arXiv/DOI 자동 링크 삽입

### Phase 3: 교차 참조 + Scholar
- [ ] 포스트 간 교차 참조 인덱스 (bibliography-index.json)
- [ ] Google Scholar citation_* 메타 태그 삽입
- [ ] "이 논문을 인용한 다른 글" 표시

## SEO 효과

### 직접 효과
- arXiv, DOI 외부 링크 → Google이 토픽 관련성 파악
- 구조화된 참고문헌 → E-E-A-T 전문성 시그널
- citation_* 메타 태그 → Google Scholar 노출 가능

### 간접 효과
- 연구자가 우리 블로그를 citation source로 사용 → 백링크 획득
- 다운로드 기능 → 체류 시간 증가, 재방문율 향상
- 교차 참조 → 내부 링크 강화, 크롤링 깊이 증가

## 참고

- CSL-JSON 스펙: https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html
- citation.js: https://citation.js.org/ (MIT 라이선스, CDN 제공)
- Google Scholar 메타 태그: https://scholar.google.com/intl/en/scholar/inclusion.html
