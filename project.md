# Pebblous Blog 작업 컨텍스트 (2025-10-27)

## 📋 프로젝트 개요
- **사이트**: https://blog.pebblous.ai (GitHub Pages)
- **저장소**: pebblous/pebblous.github.io
- **브랜치**: main
- **현재 상태**: 20개 커밋이 GitHub에 푸시 완료 ✅

---

## 🎯 이번 세션에서 완료한 작업

### 1. **ISO/IEC 25024 데이터 품질 튜토리얼 추가**
- **파일**: `/project/ISO25024/iso-25024-test-01.html`
- **특징**:
  - 인터랙티브 SQL 실습 (MySQL 쿼리)
  - 5가지 데이터 품질 측정 항목
  - Dark theme (AADS 스타일)
  - SEO 최적화 + Google Analytics
  - Footer 컴포넌트 통합
- **articles.json**: `published: true`, `featured: false`
- **카테고리**: Tech Insights

### 2. **Tangible Data 아티클 업데이트**
- **변경사항**:
  - 외부 링크: Instagram → IIB Awards showcase
  - 이미지: IIB Awards 공식 이미지로 변경
  - 설명 추가: "Information Is Beautiful Awards 2024의 Long List에도 채택되었습니다."
- **링크**: https://www.informationisbeautifulawards.com/showcase/7472-tangible-data-from-data-nature-to-data-culture

### 3. **RSS Feed 및 Sitemap 개선**
- **RSS Feed**:
  - Footer에 RSS 아이콘 추가
  - `/rss.xml` - 모든 published 아티클 포함
  - 최신 상태 자동 반영

- **Sitemap**:
  - 도메인: `pebblous.github.io` → `blog.pebblous.ai`
  - 5개 published 아티클 포함
  - RSS feed도 sitemap에 등록

### 4. **About the Founder 섹션에 SNS 추가**
- **위치**: `index.html` 본문 하단 (footer 전)
- **SNS 링크**:
  - LinkedIn: https://www.linkedin.com/in/joohaeng-lee/
  - Facebook: https://www.facebook.com/joohaeng/
  - Instagram: https://www.instagram.com/joohaeng.lee/
- **스타일**: Hover 시 주황색 전환 효과

### 5. **Featured Articles 기능 구현**
- **정렬**: Featured 아티클 우선 → 날짜순 (최신순)
- **배지**: `featured: true`인 아티클에 주황색 "FEATURED" 배지 표시
- **위치**: 날짜 위, 태그 아래

### 6. **하이브리드 "더 보기" 시스템**
- **초기 표시**: 카테고리당 6개 아티클 (카드 형식)
- **더 보기 클릭**: 나머지 아티클을 **컴팩트 목록**으로 표시
  - 한 줄 레이아웃: Featured 배지 + 날짜 + 제목 + 태그 (3개 + 카운트)
  - 우측: 링크 표시 ("읽기 →", "외부 링크 →", "자세히 보기 →")
  - 배경: `bg-slate-800/30`, 테두리 및 구분선
- **장점**: 시각적 어필 + 공간 효율 + 확장성

### 7. **Order vs Freedom 데이터 아트 추가**
- **파일**: `/project/DAL/order vs freedom.html`
- **제목**: "질서와 자유의 변주곡"
- **설명**: 엔트로피 시각화 인터랙티브 작품
- **특징**:
  - 슬라이더로 질서 ↔ 무질서 조절
  - Canvas 애니메이션
  - 모달 뷰어로 전체 화면 경험
- **articles.json**:
  - `category: "art"`
  - `featured: true`
  - `hasModal: true`, `modalId: "orderVsFreedomModal"`
- **모달 최적화**:
  - 높이 95vh
  - 하단 컨트롤 항상 보이도록 레이아웃 수정
  - 닫기 버튼 우상단 플로팅

### 8. **Footer 개선**
- **Footer 컴포넌트**: `/components/footer.html`, `/components/footer-loader.js`
- **추가된 링크**: RSS feed (아이콘)
- **제거**: 중복된 Joo-Haeng 개인 SNS (본문에만 유지)

### 9. **기타 개선사항**
- 카드 로고 위치: 우하단 (default 로고 사용 시)
- `.gitignore` 정리 및 `.DS_Store` 제거
- 모든 페이지 SEO 최적화
- 반응형 디자인 개선

---

## 📁 주요 파일 구조

```
pebblous.github.io/
├── index.html                          # 메인 블로그 페이지
├── articles.json                       # 아티클 데이터 (중앙 관리)
├── rss.xml                            # RSS feed
├── sitemap.xml                        # Sitemap
├── components/
│   ├── footer.html                    # Footer 컴포넌트
│   └── footer-loader.js               # Footer 로더
├── project/
│   ├── ISO25024/
│   │   └── iso-25024-test-01.html    # SQL 튜토리얼
│   ├── AADS/
│   │   └── ko/aads-sim-01-terminal.html
│   ├── CURK/
│   │   └── Mini-Project/CURK-2025-09-29/
│   └── DAL/
│       └── order vs freedom.html      # 엔트로피 아트
├── event/2025/InvestKoreaSummit/
├── report/llm-dataset-guide-2025-10-16/
└── image/
    └── Pebblous_BM_Orange_RGB.png    # 기본 로고
```

---

## 🎨 디자인 시스템

### 컬러 팔레트
- **배경**: `slate-950` (#020617), `slate-900`
- **텍스트**: `slate-300` (#cbd5e1), `white`
- **액센트**: `orange-500` (#F86825) - Pebblous 브랜드 컬러
- **Featured 배지**: `bg-orange-500/20 text-orange-500`

### 타이포그래피
- **한글**: Pretendard (CDN)
- **영문**: -apple-system, BlinkMacSystemFont, system-ui

### 컴포넌트
- **카드**: `rounded-lg`, `bg-slate-800/50`, `hover:bg-slate-800`
- **태그**: `bg-slate-700/50`, 스크롤 애니메이션
- **버튼**: `accent-bg` (주황색 그라디언트)

---

## 📊 현재 아티클 상태

### Data Art (2개)
1. **Tangible Data** - featured ✅ (외부 링크: IIB Awards)
2. **질서와 자유의 변주곡** - featured ✅ (모달)

### Tech Insights (4개)
1. **AADS CLI** - featured ✅ (2025-10-25)
2. **Vector Embedding** - featured ✅ (2025-09-29)
3. **ISO 25024** - (2025-10-26)
4. **Data Clinic** - featured ✅ (2025-01-15, 외부 링크)

### Data Stories (2개)
1. **Invest Korea** - featured ✅ (2025-10-11, 모달)
2. **LLM Dataset Guide** - (2025-10-16)

**참고**: AADS Simulation은 `published: false` (비공개)

---

## 🔧 주요 기능 구현

### 1. Featured Articles
```javascript
// articles.json에서
"featured": true  // 배지 표시 + 우선 정렬

// index.html에서
// 정렬: featured first → 날짜순
const sortArticles = (articles) => {
    return articles.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date) - new Date(a.date);
    });
};
```

### 2. 하이브리드 Display
```javascript
// 처음 6개: 카드
const initialLimit = 6;

// "더 보기" 클릭: 컴팩트 목록
// - Featured 배지 유지
// - 날짜 + 제목 + 태그(3개)
// - 우측 화살표 표시
```

### 3. Modal 시스템
```javascript
// 모달 ID 배열
const modals = ['aadsModal', 'investorModal', 'orderVsFreedomModal'];

// articles.json에서
"hasModal": true,
"modalId": "orderVsFreedomModal"
```

### 4. Footer 컴포넌트
```html
<!-- 동적 로딩 -->
<div id="footer-placeholder"></div>
<script src="/components/footer-loader.js"></script>
```

---

## 🚀 다른 컴퓨터에서 작업 시작하기

### 1. 코드 동기화
```bash
cd "/path/to/pebblous.github.io"
git pull origin main
```

### 2. 로컬 서버 실행 (선택사항)
```bash
# Python
python3 -m http.server 8000

# 또는 Node.js
npx serve
```

브라우저에서 `http://localhost:8000` 접속

### 3. 새 Claude 세션 시작
VSCode에서 Claude Code를 열고 이 컨텍스트 문서를 제공하면 됩니다.

---

## 📝 알아두면 좋은 것들

### articles.json 스키마
```json
{
  "id": "unique-id",
  "title": "제목",
  "description": "설명 (카드 및 SEO)",
  "category": "art" | "tech" | "story",
  "date": "YYYY-MM-DD",
  "path": "내부 경로 또는 외부 URL",
  "image": "이미지 URL",
  "published": true | false,
  "featured": true | false,
  "tags": ["Tag1", "Tag2"],
  "external": true,          // 외부 링크
  "hasModal": true,          // 모달 사용
  "modalId": "modalId"       // 모달 ID
}
```

### Git 인증 문제
- HTTPS 인증 에러 발생 시: 수동으로 터미널에서 `git push` 실행
- 또는 SSH로 변경: `git remote set-url origin git@github.com:pebblous/pebblous.github.io.git`

### GitHub Pages 배포
- `main` 브랜치에 푸시하면 자동 배포 (1-2분 소요)
- URL: https://blog.pebblous.ai

---

## 🎯 잠재적인 다음 작업 (선택사항)

1. **더 많은 데이터 아트 작품 추가**
2. **블로그 검색 기능 개선**
3. **카테고리 필터링 UI**
4. **다크/라이트 모드 토글**
5. **댓글 시스템 (utterances 등)**
6. **페이지 조회수 추적**
7. **관련 아티클 추천**
8. **RSS 자동 생성 스크립트**

---

## 📞 참고 링크

- **메인 사이트**: https://www.pebblous.ai
- **블로그**: https://blog.pebblous.ai
- **GitHub**: https://github.com/pebblous/pebblous.github.io
- **Data Clinic**: https://dataclinic.ai
- **PebbloScope**: https://pebbloscope.ai

---

**이 컨텍스트 문서와 함께 다른 컴퓨터에서 작업을 원활하게 계속할 수 있습니다!** 🚀
