<!-- 2026-11-25 sns-write v2 로 옮기며 옛 SKILL.md 9절을 그대로 보존. 사용자가 미디엄을 명시해 요청할 때만 쓴다. voice 는 회사형 규격(SKILL.md)을 길이만 늘려 쓴다. -->

# Medium 요약 기사 (요청할 때만)

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
