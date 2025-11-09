# Pebblous Blog

**Where Data Becomes Tangible**

페블러스는 눈에 보이지 않는 데이터의 우주를 탐험하고, 그 본질을 만질 수 있는 형태로 바꾸어 새로운 문화와 가치를 창조합니다.

🌐 **Live Site**: [https://blog.pebblous.ai](https://blog.pebblous.ai)

## 🚀 Features

- **Data Art Lab (DAL)**: 데이터를 예술로 표현하는 생성 예술 작품
- **Tech Insights**: AI, 데이터 품질, Physical AI 관련 기술 인사이트
- **Data Stories**: 데이터가 들려주는 이야기
- **Interactive Demos**: AADS, CURK, Data Clinic 등 프로젝트 데모

## 📊 SEO & Sitemap

이 블로그는 강력한 SEO 최적화를 위해 자동 sitemap 생성 시스템을 사용합니다.

### Sitemap 자동 생성

새 콘텐츠 추가 시 sitemap이 자동으로 업데이트됩니다:

```bash
# 수동으로 sitemap 생성
python3 generate-sitemap.py

# 또는 Node.js 사용 (선택)
node generate-sitemap.js
```

### GitHub Actions 자동화

- `articles.json` 업데이트 시 자동으로 sitemap 재생성
- 매일 00:00 UTC (09:00 KST) 자동 업데이트
- Google에 sitemap 자동 제출

### Google Search Console 등록

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성 추가: `https://blog.pebblous.ai`
3. Sitemap 제출: `https://blog.pebblous.ai/sitemap.xml`

## 📝 콘텐츠 추가하기

새 아티클을 추가하려면 `articles.json`을 수정하세요:

```json
{
  "id": "your-article-id",
  "title": "아티클 제목",
  "description": "아티클 설명",
  "category": "tech",
  "date": "2025-11-09",
  "path": "project/your-path/index.html",
  "image": "project/your-path/image.png",
  "published": true,
  "featured": false,
  "tags": ["Tag1", "Tag2"]
}
```

**중요**:
- `published: true`로 설정해야 sitemap에 포함됩니다
- `external: true`는 외부 링크용이며 sitemap에서 제외됩니다
- `date` 형식: `YYYY-MM-DD`

## 🎨 기술 스택

- **Frontend**: Vanilla JavaScript, Tailwind CSS
- **Hosting**: GitHub Pages
- **SEO**: 자동 sitemap 생성, structured data (JSON-LD)
- **Analytics**: Google Tag Manager
- **Build**: Python 3.11+

## 📂 프로젝트 구조

```
.
├── index.html              # 메인 페이지
├── articles.json           # 콘텐츠 메타데이터
├── sitemap.xml            # 자동 생성됨
├── robots.txt             # 검색엔진 크롤러 설정
├── generate-sitemap.py    # Sitemap 생성 스크립트
├── css/
│   └── styles.css         # 메인 스타일시트
├── project/               # 프로젝트별 콘텐츠
│   ├── DAL/              # Data Art Lab
│   ├── CURK/             # CURK 프로젝트
│   ├── PhysicalAI/       # Physical AI 콘텐츠
│   └── ...
└── .github/
    └── workflows/
        └── update-sitemap.yml  # 자동 sitemap 업데이트

```

## 🔧 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/pebblous/pebblous.github.io.git
cd pebblous.github.io

# sitemap 생성
python3 generate-sitemap.py

# 로컬 서버 실행 (Python)
python3 -m http.server 8000

# 브라우저에서 열기
open http://localhost:8000
```

## 📈 SEO 최적화 체크리스트

- ✅ Sitemap.xml 자동 생성
- ✅ robots.txt 설정
- ✅ Open Graph 메타태그
- ✅ Twitter Card 메타태그
- ✅ JSON-LD structured data
- ✅ 이미지 sitemap 포함
- ✅ Google News sitemap (최근 2일 콘텐츠)
- ✅ 자동 changefreq 계산 (최신성 기반)
- ✅ Featured 콘텐츠 우선순위 높음
- ✅ 매일 자동 업데이트

## 🤝 기여하기

콘텐츠 제안이나 버그 리포트는 Issue를 통해 제출해주세요.

## 📄 라이선스

© 2024-2025 Pebblous Inc. All rights reserved.

---

**Contact**: [info@pebblous.ai](mailto:info@pebblous.ai)
**Website**: [https://www.pebblous.ai](https://www.pebblous.ai)
