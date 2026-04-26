---
name: sns-write
description: Write SNS promotional posts as magazine-style cover articles for blog posts
argument-hint: "[blog-path or topic] [platform: linkedin|twitter|facebook|all]"
---

When this skill is invoked:

1. **Read the tone guide**: Read `.claude/CLAUDE-SNS.md` for full rules.

2. **Identify source**: If a blog URL or file path is given, read the article to extract key messages.

3. **Write in "Voice-Essay Tone"** (보이스 에세이 어조):
   - 블로그 기사를 소개하는 **커버 에세이** — 팩트 나열이 아니라, 맥락이 이어지는 짧은 글
   - **⛔ 팩트 나열 금지**: 숫자와 사실을 쏟아붓지 않는다. 팩트 사이에 "왜?"라는 질문과 맥락을 넣어 독자가 따라갈 이유를 만든다
   - **첫 문장은 의외성 훅**: 독자의 예상을 깨는 사실이나 질문으로 시작. "GitHub 트렌딩 1위가 메타데이터 카탈로그였다" 같은 것
   - **맥락 연결 질문**: 팩트 블록 사이에 "왜 지금일까", "이것이 왜 중요한가" 같은 전환 질문을 삽입하여 흐름을 만든다
   - **불릿 나열보다 흐름 문장**: 4개 제품을 불릿으로 나열하지 말고, 하나의 파이프라인 흐름으로 연결하는 문장을 쓴다
   - **마무리는 주장**: 숫자를 근거로 담대한 한 문장. "다음 승부처는 모델이 아니라 데이터 인프라다" 같은 것
   - 합쇼체 기반, 간결한 서술체. 성숙하고 절제된 어조

4. **완전 금지 항목**:
   - 이모지 — 헤드라인, 불릿, 본문 어디에도 사용하지 않음
   - 데이터 파밍/농업 메타포 (경작, 재배, 수확, 온실, 기근 등)
   - 가벼운 농담, 감탄사, 과장
   - 불릿에 이모지 사용 → `▸` 또는 `-` 텍스트 기호만

5. **페블러스 비즈니스 연결** (기사 말미 1-2문장):
   - 기사 내용과 관련된 페블러스 제품/사업을 팩트 기반으로 짧게 언급
   - 자연스럽게 흐름에 녹일 것 — 광고처럼 튀지 않게
   - 기사 내용과 무관한 제품 언급 금지

6. **Hashtag rules**:
   - **기본 해시태그** (모든 포스트에 포함):
     `#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘`
   - 기본 해시태그 + 주제별 해시태그(2~3개)를 조합
   - LinkedIn: 기본 + 주제별 = 총 7-8개
   - Twitter/X: 기본에서 핵심 2 + 주제별 1-2개 = 총 3-4개
   - Facebook: 해시태그 최소화 (기본 중 3-4개만)

7. **Platform adjustments**:
   - If platform is `all`, write for all 3 platforms in sequence
   - **LinkedIn (KO)**: 업계 맥락, 첫 문장에 핵심 팩트, 3-4문단
   - **LinkedIn (EN)**: 같은 내용의 영문 버전. 직역 금지 — 영미권 독자가 자연스럽게 읽히는 톤으로 재작성. EN 블로그 링크 사용
   - **Twitter/X**: 핵심 팩트 1-2줄 + 의미 1줄, 링크 마지막
   - **Facebook**: 구체적 숫자/사례로 시작, 3-4문단 확장 서술

8. **Output to console AND file**:
   - Display the full output in the conversation (console)
   - Determine the output file path from the source blog path:
     - Pattern: `{blog-parent-dir}/sns/{blog-filename-without-ext}.md`
     - Example: `report/kronos-financial-foundation-model/ko/index.html` → `report/kronos-financial-foundation-model/sns/index.md`
   - Create the `sns/` directory if it doesn't exist
   - Write a Markdown file with the following structure:

   ```markdown
   # SNS 홍보 글: {article title}

   > 소스: {blog path}
   > 생성일: {YYYY-MM-DD}
   > URL: https://blog.pebblous.ai/{blog path}

   ---

   ## LinkedIn

   {linkedin post content}

   ---

   ## Twitter/X

   {twitter post content}

   ---

   ## Facebook

   {facebook post content}
   ```

   - If a single platform is specified, only include that platform's section
   - If the file already exists, ask the user whether to overwrite or append

9. **Medium article** (platform `medium` or `all`):
   - **영문** 요약 기사 (~900단어, 5분 읽기)
   - 이모지 없음, 뉴스 어조
   - 구조: Hook → 기술 설명 → 핵심 질문 → 페블러스 관점 → CTA(블로그 링크)
   - **⛔ OG 이미지(`image/index.png`) 삽입 금지** — 본문용이 아닌 소셜 미리보기 전용 이미지
   - **⛔ `<table>` 태그 사용 금지** — Medium import 시 표가 무시됨. 표 데이터 처리 우선순위:
     1. **불릿 리스트** (기본) — `<ul><li>`로 변환, 핵심 수치를 볼드로 표현
     2. **표 이미지 렌더링** (사용자 요청 시) — HTML 테이블을 PNG로 렌더링하여 `sns/image/`에 저장, `<img>`로 삽입
   - **블로그 링크는 원본 기사 주소** — `sns/medium.html` 주소가 아닌 원본 EN 기사(`/en/`) 주소를 CTA에 사용
   - 마지막에 블로그 전문 링크: `**[Read the full analysis →](URL)**`
   - **`sns/medium.html` 자동 생성** (아래 템플릿)
   - **절대 블로그 전문 복사 금지** — 요약+독자적 관점으로 작성

   ### medium.html 템플릿

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="robots" content="noindex, nofollow">
       <link rel="canonical" href="https://blog.pebblous.ai/{blog-en-path}">
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
