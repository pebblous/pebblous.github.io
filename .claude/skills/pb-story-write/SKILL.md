---
name: pb-story-write
description: "\"안녕하세요, 저는 ~입니다\" pb 스토리 HTML 작성. (1) 보강 리서치 → (2) 피어 크로스 토의 → (3) HTML 작성 순서로 진행. 기술/제품이 1인칭으로 말하는 스타일의 KO+EN 아티클을 완성된 HTML로 생성. pb 스토리 시리즈 HTML 작성 시 반드시 이 스킬을 사용."
argument-hint: "slug e.g. 'linux', 'gps', 'pagerank'"
---

# pb-story-write

3단계 워크플로우: 보강 리서치 → 크로스 토의 → HTML 작성.

## 워크플로우 순서

### Step 1: 보강 리서치 (자신의 언어권 시각)

`_workspace/pb_story_[slug]/01_research.md` 읽은 후:
- **writer-ko라면**: 한국/아시아 맥락에서 이 주제가 어떻게 받아들여지는지 보강 검색
  - 국내 커뮤니티, 한국어 미디어, 아시아 사용 사례
  - 한국 독자에게 특히 흥미로울 각도 (예: 한국 기업 연관성, 한국인 기여자)
- **writer-en라면**: 서구/영어권 시각 보강 검색
  - 영미권 미디어 프레이밍, 서구 사용자 사례
  - EN 독자에게 공명하는 각도 (예: 실리콘밸리 반응, 오픈소스 문화)

### Step 2: 크로스 토의 (피어 DM)

보강 완료 후 → 상대 writer에게 SendMessage:

```
writer-ko가 writer-en에게:
"KO 보강 완료. 핵심 인사이트 공유:
1. [KO 각도 인사이트 1]
2. [KO 각도 인사이트 2]
3. [KO 각도 인사이트 3]
EN 쪽 인사이트 기다릴게요."

writer-en이 writer-ko에게:
"EN 보강 완료. 핵심 인사이트 공유:
1. [EN 각도 인사이트 1]
2. [EN 각도 인사이트 2]
3. [EN 각도 인사이트 3]
KO 쪽 인사이트 기다릴게요."
```

상대 메시지 수신 후 → 공동 아웃라인 합의:
- 양 언어가 반드시 다룰 핵심 팩트 5~7개
- 공통 감정 호 (emotional arc)
- 각 언어의 차별 강조점

공동 아웃라인 저장: `_workspace/pb_story_[slug]/01.5_shared_outline.md`

### Step 3: HTML 작성

`01_research.md` + `01.5_shared_outline.md` 를 바탕으로 각 언어 HTML 작성.
- 공통 팩트와 감정 호는 반영
- 표현·어체·강조점은 각 언어에 완전히 맞춤

---

## 핵심 문체 규칙

화자 = 기술/제품 자신. pb = 대필 작가.

### 어체 예시 (KO)
```
안녕하세요. 저는 Transformer입니다.
저는 2017년에 태어났습니다. 정확히는 Google Brain 팀의 논문 한 편으로요.
그 논문의 제목은 "Attention Is All You Need"였습니다.
지금 생각해도, 참 담대한 제목이었습니다.
```

### 어체 예시 (EN)
```
Hello. I'm the Transformer.
I was born in 2017 — technically, as a single paper from Google Brain.
The title was "Attention Is All You Need."
Bold, I know.
```

### 문체 특성
- 1인칭 직접 화법: "저는", "제가", "저는 ~라고 생각합니다"
- 친근하지만 지적 — 쉽되, 가볍지 않다
- 드라마틱한 개막 — 첫 문단에서 독자를 잡는다
- 감정 레이어 — 자부심, 두려움, 모순을 솔직하게
- 구체적 숫자 필수 — "많은"이 아니라 "3억 7천만 대"
- 문단 3~5문장 — 벽돌 금지
- **한국어 italic 절대 금지** — bold는 `<strong>` 사용

## 파일 경로

저장소 루트: `/workspace/extra/repos/pebblous.github.io/`

```
story/[slug]-story-pb/
├── index.html           (→ ./ko/ 리다이렉트)
├── ko/
│   ├── index.html
│   └── image/           (mkdir)
└── en/
    ├── index.html
    └── image/           (mkdir)
```

## PebblousPage.init() 설정 (KO)

```javascript
PebblousPage.init({
  mainTitle: "안녕하세요, 저는 [이름]입니다",
  subtitle: "[한 줄 메시지]",
  pageTitle: "저는 [이름]입니다 | 페블러스",
  category: "story",
  publishDate: "YYYY-MM-DD",
  publisher: "(주)페블러스 데이터 커뮤니케이션팀",
  defaultTheme: "light",
  articlePath: "story/[slug]-story-pb/ko/index.html",
  tags: [...],
  faqs: [
    { question: "[이름]이 뭔가요?", answer: "..." },
    { question: "[이름]은 어떻게 작동하나요?", answer: "..." },
    ...  // 3~5개
  ]
});
```

## 섹션 구조

```
1. (Executive Summary — key-insight 박스)
2. 나를 소개합니다  ← 도입, 1인칭 선언
3. 탄생 이야기       ← 배경, 드라마
4. 제 핵심 원리      ← 기술 설명 (쉽게)
5. 제가 세상을 바꾼 날 ← 데이터 포인트
6. 제가 잘못 알려진 것 ← 오해 교정
7. 나는 지금도 진화 중 ← 마무리, 미래
```

섹션 수는 5~7개. 리서치 소재에 맞게 조정.

## 참조 구현

`story/transformer-story-pb/ko/index.html` — 반드시 읽고 스타일 벤치마크.

## 완료 후 출력

`_workspace/02_pb_write_meta.json`:
```json
{
  "slug": "[slug]-story-pb",
  "subject": "[이름]",
  "ko_path": "story/[slug]-story-pb/ko/index.html",
  "en_path": "story/[slug]-story-pb/en/index.html",
  "articles_entry_ko": {
    "id": "[slug]-story-pb-ko",
    "title": "안녕하세요, 저는 [이름]입니다",
    "cardTitle": "안녕하세요, 저는 [이름]입니다",
    "cardDescription": "[150자]",
    "path": "story/[slug]-story-pb/ko/",
    "date": "YYYY-MM-DD",
    "category": "story",
    "published": true,
    "featured": false,
    "description": "[150자]",
    "image": "story/[slug]-story-pb/ko/image/index.png",
    "tags": [],
    "lang": "ko"
  },
  "articles_entry_en": {
    "id": "[slug]-story-pb-en",
    "title": "Hello, I'm [name]",
    "cardTitle": "Hello, I'm [name]",
    "cardDescription": "[150 chars]",
    "path": "story/[slug]-story-pb/en/",
    "date": "YYYY-MM-DD",
    "category": "story",
    "published": true,
    "featured": false,
    "description": "[150 chars]",
    "image": "story/[slug]-story-pb/en/image/index.png",
    "tags": [],
    "lang": "en"
  }
}
```
