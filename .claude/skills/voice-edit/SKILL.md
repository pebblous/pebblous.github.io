---
name: voice-edit
description: >
  블로그 포스트 또는 텍스트의 문체를 페블러스 보이스 체계로 리라이트.
  default(JH 보이스 — 날카롭되 따뜻), reflective(사유 에세이 — 조용한 명상),
  sns-cover(매거진 커버 에세이 — 짧고 단정) 중 선택.
  '톤 바꿔줘', '에세이로', '보이스 리라이트', '사유 에세이로', 'voice-edit' 요청 시 사용.
argument-hint: "[path-to-html] [--voice=default|reflective|sns-cover]"
---

# voice-edit: 페블러스 보이스 체계

## 핵심 — 페블러스 보이스의 가족

페블러스 글은 한 가지 핏을 공유한다. **사색하는 엔지니어의 에세이**.
"날카롭되 따뜻하다." 위키체와 광고체는 둘 다 아니다.

그 안에서 길이·맥락·1인칭 강도가 달라지는 세 변종이 있다:

| voice | 정체 | 1인칭 강도 | 호흡 | 분량 | 사용 시점 |
|-------|------|-----------|------|-----|---------|
| **default** | JH 보이스 (날카롭되 따뜻, voice-essay v2) | 강 ("나", "내가") | 짧은 선언+긴 사색 교차 | 임의 | HTML 본문 리라이트 기본값 |
| **reflective** | 사유 에세이 (조용한 명상) | 절제 ("저는 ~봅니다") | 긴 호흡, 중간 멈춤 | 1,500~2,500자 | 장문 에세이, Facebook 장문, Medium |
| **sns-cover** | 매거진 커버 에세이 | 거의 없음 | 의외성 훅 → 흐름 → 담대한 마무리 | 3~5문단 | LinkedIn/Twitter/Facebook 짧은 카피 |

`default`가 가장 일반적이다. 명시 옵션 없이 호출하면 `default`.

## 공통 원칙 (모든 보이스 공유)

세 보이스 모두 아래 7원칙 중 다수를 공유한다. 보이스별 차이는 `voices/{voice}.md`에서 분기.

| # | 원칙 | 핵심 | 위반 시 증상 |
|---|------|------|-------------|
| 1 | **사색적 호흡** | 짧은 선언과 긴 사색이 교차. 리듬 | 전부 짧으면 건조, 전부 길면 처짐 |
| 2 | **따뜻한 비유** | 일상 감각으로 번역. 빈정거림 아닌 공감 | 테크 리뷰어 냉소 |
| 3 | **구체적 숫자** | 이름, 연도, 숫자로 설득 | 추상 서술 |
| 4 | **절제된 페블러스 연결** | 자연스럽게 흐름에 녹임. 광고처럼 튀지 않게 | "혁신적", "게임 체인저" 같은 광고 문구 |
| 5 | **담대한 질문** | 답 전에 질문. 질문 자체가 메시지 | 주장만 나열 |
| 6 | **위키체 금지** | "본 보고서는 ~을 규명한다" 류 0건 | 논문체 |
| 7 | **이모지·감탄사·과장 금지** | 헤드라인·본문 어디에도 | `!` 남발, 농담 |

## 정본 — 톤을 체화할 때 반드시 읽는 글

| 정본 | 경로 | 어느 보이스의 정본인가 |
|------|------|---------------------|
| 대전 비엔날레 기고문 | `project/DAL/code-painting-essay/ko/index.html` (line 750~870) | **default** — JH 본인이 쓴 글 |
| 뉴로-심볼릭 × 온톨로지 사유 에세이 | `project/NeuroSymbolicOntology/sns/index.md` "에세이 (KO)" 슬롯 | **reflective** — JH 본인이 쓴 글 |
| CLAUDE-SNS.md 좋은 예시 (OpenMetadata) | `.claude/CLAUDE-SNS.md` "어조 1: 매거진 커버 에세이" 섹션 | **sns-cover** |

## 호출 패턴

```bash
# 기본 호출 (--voice 생략 시 default)
/voice-edit project/foo/ko/index.html

# 명시 호출
/voice-edit project/foo/ko/index.html --voice=reflective

# 자연어 호출 시 인식 키워드
"이 글 톤 바꿔줘"           → default
"사유 에세이로 리라이트"     → reflective
"SNS 커버처럼 줄여줘"        → sns-cover (보통은 sns-write 스킬이 더 적합)
```

## 실행 절차 (모든 보이스 공통)

### Step 1: 정본 + 보이스 가이드 읽기

```
Read voices/{voice}.md                                   # 선택한 보이스의 차이점
Read voices/{voice}.md 의 "정본" 항목이 가리키는 글       # 톤 체화
```

### Step 2: 대상 파일 읽기 + 리라이트 대상 식별

다음을 리라이트한다:
- `<p class="themeable-text ...">` 문단
- `<div class="key-insight">` 안의 문단
- Executive Summary 전체
- 각 섹션의 도입 문단
- 논문체 h3 소제목 → 에세이체

보존한다 (절대 건드리지 않음):
- HTML 구조, 클래스, 속성
- `<table>`, `<code>`, `<pre>` 블록
- 이미지, figcaption, alt
- stat-card 숫자, FAQ (config.faqs)
- `<title>`, `<meta>` 태그
- 숫자·팩트 자체 (톤만 변환, 내용 변경 금지)

### Step 3: 리라이트

선택된 보이스의 `voices/{voice}.md` 규칙을 적용한다.

### Step 4: 자기검증 (공통 + 보이스별)

**공통 검증 (모든 보이스)**:
```bash
grep -c "본 보고서\|규명한다\|분석하고자\|살펴본다" [file]   # 0이어야
grep -c "혁신적\|획기적\|놀라운\|차세대" [file]              # 0이어야
grep -cE "[가-힣ㄱ-ㅎ]!\|[a-zA-Z]!" [file]                    # 본문 감탄사 0
```

**보이스별 추가 검증**: `voices/{voice}.md`의 "자기검증" 섹션 참조.

### Step 5: before/after 3건 보고

리라이트 전후 대표 문단 3개를 사용자에게 보여주고 톤 확인.

## 외부 스킬에서 voice 선택하는 방법

`sns-write`, `blog-write`, `dc-write-ko` 등 다른 스킬이 voice를 명시적으로 선택할 때:

```
Read .claude/skills/voice-edit/voices/{voice}.md
```

해당 파일이 그 보이스의 원칙·정본·자기검증의 단일 출처(SSOT)다.
공통 원칙은 이 SKILL.md의 "공통 원칙" 섹션을 참조.

## 변천 메모

- v1 (~2026-04): voice-essay 스킬 단독. 짧은 문장만 강조 → "차가운 테크 리뷰" 비판
- v2 (2026-04-23): 사색적 호흡 + 따뜻한 비유 추가. JH 보이스 7원칙 정립
- v3 (2026-05-15): 사유 에세이(reflective) 변종이 별도 톤으로 명명됨 (CLAUDE-SNS.md)
- v4 (2026-05-16, **이번 변경**): voice-edit 통합 진입점 신설. 3종 보이스를 voices/*.md로 분리하여 단일 출처화. voice-essay 스킬은 alias로 유지.

## 관련 스킬

- **voice-essay**: 이 voice-edit의 alias. 기존 호출 호환을 위해 유지. 내부적으로 `--voice=default`로 위임.
- **sns-write**: SNS 카피 생성 전용. voice 선택 시 `voices/sns-cover.md`(기본) 또는 `voices/reflective.md`(장문 에세이 슬롯) 참조.
- **blog-polish**: 제목·리드·섹션 헤딩만 다듬는 가벼운 톤 변경. 본문 전체 리라이트가 아닐 때.
- **ko-prose-humanizer**: voice-edit이 "어떤 보이스로 쓸지"를 다룬다면, ko-prose-humanizer는 글이 작성된 뒤 **"AI가 쓴 티"라는 표면 질감**을 측정·교정. voice-edit이 7원칙(거시적)을 본다면 ko-prose-humanizer는 11 tell(미시적 — em-dash 빈도, 명사형 종결, 메타 예고문, 자사 연결 작위성 등)을 본다. 호출 순서: voice-edit (작성 단계) → ko-prose-humanizer (게시 전 검수). 두 스킬의 grep 항목은 의도적으로 중복 — 같은 신호를 다른 단계에서 잡는다.

## 발전 방향

- 보이스별 자기검증에 LLM-as-judge 단계 추가 (현재는 grep 기반)
- 보이스 추가 시 SKILL.md 변경 없이 `voices/*.md` 추가만으로 확장
- JH 새 글이 추가될 때마다 해당 보이스의 정본 목록 업데이트
