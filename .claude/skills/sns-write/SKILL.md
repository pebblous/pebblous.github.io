---
name: sns-write
description: >
  Write SNS promotional posts for blog articles.
  LinkedIn/Twitter → sns-cover voice. Facebook → reflective voice (PR #154). Essay platform → reflective long-form.
argument-hint: "[blog-path or topic] [platform: linkedin|twitter|facebook|essay|medium|all] [--voice=sns-cover|reflective]"
---

# sns-write: 블로그 글의 SNS 카피 생성

## voice는 voice-edit 체계를 따른다

이 스킬은 voice 정의를 직접 들고 있지 않다. **모든 톤 규칙은 `voice-edit/voices/*.md`가 단일 출처(SSOT)**다.

| 호출 시 voice | 출처 | 사용 시점 |
|--------------|------|---------|
| `sns-cover` | `.claude/skills/voice-edit/voices/sns-cover.md` | LinkedIn, Twitter 짧은 카피 |
| `reflective` | `.claude/skills/voice-edit/voices/reflective.md` | **Facebook 카피 (필수)**, 장문 에세이 슬롯 (Medium 마스터 카피 등) |

자세한 호출 방법은 아래 "voice 선택" 절 참조.

## 1. 진입점: 정본 + voice 가이드 읽기

호출받으면 다음을 먼저 읽는다:

```
Read .claude/skills/voice-edit/SKILL.md                # 공통 원칙 7원칙
Read .claude/skills/voice-edit/voices/{voice}.md       # 선택된 voice의 차이점·정본·자기검증
Read .claude/CLAUDE-SNS.md                              # 해시태그 등 SNS 공통 규칙
```

선택된 voice의 정본 글도 가능하면 함께 읽어 톤을 체화한다.

## 2. 소스 파악

블로그 URL 또는 파일 경로를 받으면 해당 글을 읽어 핵심 메시지·숫자·논점을 추출한다.

## 3. voice 선택

채널마다 기본 voice가 다르다 (PR #154에서 결정). `all` 또는 채널 직접 지정 시 자동 매핑:

| 입력 | 적용 voice |
|------|-----------|
| platform=`linkedin` | `sns-cover` |
| platform=`twitter` | `sns-cover` |
| platform=`facebook` | **`reflective`** (LinkedIn 분석 톤과 분명히 구별) |
| platform=`all` | LinkedIn+Twitter는 sns-cover, Facebook은 reflective (자동 분기) |
| platform=`essay` | `reflective` (장문 마스터 카피) |
| `--voice=sns-cover` 명시 | 모든 채널 강제로 sns-cover |
| `--voice=reflective` 명시 | 모든 채널 강제로 reflective |
| 자연어: "사유 에세이로", "긴 에세이로" | `reflective` |

## 4. 플랫폼별 출력 슬롯

`sns-cover` voice (LinkedIn/Twitter 기본):
- **LinkedIn (KO)**: 업계 맥락, 첫 문장에 핵심 팩트, 3-4문단
- **LinkedIn (EN)**: 같은 내용의 영문 버전. 직역 금지 — 영미권 매거진 톤으로 재작성. EN 블로그 링크 사용
- **Twitter/X (KO/EN)**: 핵심 팩트 1-2줄 + 의미 1줄, 링크 마지막

`reflective` voice (Facebook 기본 — PR #154에서 결정):
- **Facebook (KO) — Reflective Voice (필수)**: LinkedIn 분석 톤과 분명히 구별. 첫 문장 질문/멈춤, 수치는 사색 안에 녹임, 마지막은 여운으로 끝. 5~6문단, 합쇼체. 자세한 가이드는 `voice-edit/voices/reflective.md` "Facebook reflective 카피 작성 가이드" 표 참조.
- **Facebook (EN) — Reflective Voice (필수)**: KO와 같은 reflective 결을 영어 에세이 톤으로. *The New Yorker* 1인칭 도입부 느낌. 직역 금지.

`reflective` voice (장문 — 명시 호출 시):
- **에세이 (KO)**: 채널 무관 마스터 카피, 1,500~2,500자, 10~15문단
- **Essay (EN)**: 영미권 에세이 톤으로 재작성. 비유 화이트리스트(eye/bones/map/grammar/lens/order/foundation) 사용

**채널-voice 매핑 요약:**

| 채널 | voice | 분량 |
|------|-------|-----|
| LinkedIn KO/EN | sns-cover | 3-4문단 |
| Twitter/X KO/EN | sns-cover | 1-2줄 + 1줄 |
| **Facebook KO/EN** | **reflective** | **5-6문단** |
| 에세이 (essay platform) | reflective | 1,500~2,500자 |

platform=`all`은 위 매핑대로 LinkedIn+Twitter+Facebook을 모두 생성 (Facebook은 자동으로 reflective). essay는 명시 호출 시에만.

## 5. 해시태그

기본 해시태그 (모든 포스트 공통):
```
#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘
```

플랫폼별 수량:
- LinkedIn: 기본 4 + 주제별 3~4 = 총 7~8개
- Facebook: 기본 중 3~4개만
- Twitter/X: 기본 중 핵심 2 + 주제별 1~2 = 총 3~4개
- 에세이 (reflective): 끝에 일반 패턴 (기본 4 + 주제별 2~3)

해시태그 규칙은 `.claude/CLAUDE-SNS.md` 의 "해시태그 규칙" 절 참조.

## 6. 출력

콘솔에 전체를 표시하고 동시에 파일로 저장:

- 경로: `{blog-parent-dir}/sns/{blog-filename-without-ext}.md`
- 예: `report/kronos-financial-foundation-model/ko/index.html` → `report/kronos-financial-foundation-model/sns/index.md`
- `sns/` 디렉토리가 없으면 생성

파일 구조:

```markdown
# SNS 홍보 글: {article title}

> 소스: {blog path}
> 생성일: {YYYY-MM-DD}
> URL: https://blog.pebblous.ai/{blog path}
> voice: {sns-cover | reflective}

---

## LinkedIn (KO)

{linkedin KO content — voice=sns-cover}

---

## LinkedIn (EN)

{linkedin EN content — voice=sns-cover}

---

## Twitter/X (KO)

{twitter KO content — voice=sns-cover}

---

## Twitter/X (EN)

{twitter EN content — voice=sns-cover}

---

## Facebook (KO)

{facebook KO content — voice=sns-cover}

---

## Facebook (EN)

{facebook EN content — voice=sns-cover}

---

## 에세이 (KO)
<!-- voice=reflective. 명시 호출 시에만 포함. -->

{reflective KO content — 1,500~2,500자}

---

## Essay (EN)
<!-- voice=reflective. 명시 호출 시에만 포함. -->

{reflective EN content}
```

- 단일 platform 지정 시 해당 섹션만 포함
- 파일이 이미 있으면: 덮어쓸지, 누락된 슬롯만 추가할지 사용자에게 묻는다

## 7. 자기검증

작성 후 voice별 자기검증을 수행:

- 공통: `voice-edit/SKILL.md` "자기검증" 절
- voice별: `voice-edit/voices/{voice}.md` "자기검증" 절

## 8. Medium article (platform `medium` or `all`)

- **영문** 요약 기사 (~900단어, 5분 읽기). voice는 `sns-cover`를 길이만 늘려서 사용 (뉴스 어조)
- 구조: Hook → 기술 설명 → 핵심 질문 → 페블러스 관점 → CTA(블로그 링크)
- **⛔ OG 이미지(`image/index.png`) 삽입 금지** — 본문용이 아닌 소셜 미리보기 전용 이미지
- **⛔ `<table>` 태그 사용 금지** — Medium import 시 표가 무시됨. 표 데이터 처리:
  1. **불릿 리스트** (기본) — `<ul><li>`로 변환, 핵심 수치를 볼드로 표현
  2. **표 이미지 렌더링** (사용자 요청 시) — HTML 테이블을 PNG로 렌더링하여 `sns/image/`에 저장, `<img>`로 삽입
- **블로그 링크는 원본 기사 주소** — `sns/medium.html` 주소가 아닌 원본 EN 기사(`/en/`) 주소를 CTA에 사용
- 마지막에 블로그 전문 링크: `**[Read the full analysis →](URL)**`
- **`sns/medium.html` 자동 생성** (아래 템플릿)
- **절대 블로그 전문 복사 금지** — 요약+독자적 관점으로 작성
- **⛔ `<link rel="canonical">` 금지** — Medium importer가 canonical을 보고 원본 글(`/en/`)을 redirect로 따라가 본문 글이 import된다. canonical은 반드시 주석으로만 남기고, Medium 발행 후 에디터의 "Originally published at"에서 수동 설정한다 (2026-05-22 사고에서 확립)

### medium.html 템플릿

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <!-- canonical은 미디엄 발행 후 에디터에서 수동 설정 (import 시 redirect 방지) -->
    <title>{Title} | Pebblous</title>
    <meta name="description" content="{description}">
    <style>
        body { max-width: 720px; margin: 2rem auto; padding: 0 1rem; font-family: -apple-system, sans-serif; line-height: 1.8; color: #1a1a2e; }
        h1 { font-size: 2rem; font-weight: 800; }
        h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2rem; }
        img { max-width: 100%; border-radius: 8px; margin: 1.5rem 0; }
        figcaption { font-size: 0.8rem; color: #64748b; text-align: center; }
        a { color: #F86825; }
        .cta { margin-top: 2rem; padding: 1.5rem; border-left: 4px solid #F86825; background: rgba(248,104,37,0.04); border-radius: 0 8px 8px 0; }
        .footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; font-size: 0.85rem; color: #64748b; }
    </style>
</head>
<body>
    {article content as HTML}

    <div class="cta">
        <strong>Read the full technical analysis on Pebblous Blog →</strong><br>
        <a href="https://blog.pebblous.ai/{blog-en-path}">{full title}</a>
    </div>

    <div class="footer">
        <p>Pebblous builds AI-Ready data infrastructure for the Physical AI era.</p>
        <p><a href="https://www.pebblous.ai">pebblous.ai</a> · <a href="https://dataclinic.ai">DataClinic</a> · <a href="https://pebbloscope.ai">Pebbloscope</a></p>
    </div>
</body>
</html>
```

### 미디엄 import 방법
1. `sns/medium.html`을 git push → GitHub Pages 배포
2. Medium → New Story → ⋯ → Import a story → `https://blog.pebblous.ai/{sns/medium.html URL}` 붙여넣기
3. Story Settings → "Originally published at" → 원본 블로그 URL 입력 (canonical)

## 변천 메모

- ~2026-04: "Mature Expert" 톤
- 2026-04-26 (PR #116): voice-essay 톤으로 전환 — Voice-Essay Tone 규칙을 SKILL.md에 직접 포함
- 2026-05-15: reflective 변종을 SKILL.md에 추가 (feat/hub-neuro-symbolic-ontology 브랜치)
- **2026-05-16 (이번 변경)**: voice 규칙을 `voice-edit/voices/*.md`로 이전. 이 스킬은 voice 선택과 채널/포맷만 다룬다.
