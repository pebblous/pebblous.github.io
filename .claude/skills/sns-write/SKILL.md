---
name: sns-write
description: Write SNS promotional posts in Pebblous Warm Expert Tone
argument-hint: "[blog-path or topic] [platform: linkedin|twitter|facebook|all]"
---

When this skill is invoked:

1. **Read the tone guide**: Read `.claude/CLAUDE-SNS.md` for full rules.

2. **Identify source**: If a blog URL or file path is given, read the article to extract key messages.

3. **Write in "Warm Expert Tone"** (따뜻한 전문가 어조):
   - 합쇼체 기반 + "~이죠" soft transitions
   - Structure: 역설/질문 → 문제 제기 → 해결책 → 메타포 마무리
   - Short sentences (one idea per sentence)
   - Line breaks for visual breathing

4. **Use data-farming metaphors consistently**:
   - 합성 데이터 생성 → 재배, 경작
   - 데이터 수집 → 사냥, 채집
   - Data Greenhouse → 스마트 온실
   - Edge Case 부족 → 데이터 기근
   - 고품질 데이터 → 수확물, 작물

5. **Emoji rules**:
   - Headline: 1 emoji max (🌱, 🚀, 💡)
   - List bullets: 🔸 or ▸ OK
   - Never mid-sentence, never 3+ consecutive

6. **Hashtag rules**:
   - **기본 해시태그** (모든 포스트에 포함):
     `#페블러스 #합성데이터 #페블로스코프 #데이터클리닉 #데이터품질 #데이터스토리 #데이터저널리즘`
   - 기본 해시태그 + 주제별 해시태그(2~3개)를 조합
   - LinkedIn: 기본 + 주제별 = 총 8~10개
   - Twitter/X: 기본에서 핵심 3~4개 선택 + 주제별 1~2개
   - Facebook: 해시태그 최소화 (기본 중 3~4개만)

7. **Platform adjustments**:
   - If platform is `all`, write for all 3 platforms in sequence
   - **LinkedIn**: Professional context, industry trends
   - **Twitter/X**: Compressed core message, link last
   - **Facebook**: Extended storytelling, question ending for engagement

7. **Output to console AND file**:
   - Display the full output in the conversation (console)
   - Determine the output file path from the source blog path:
     - Pattern: `{blog-parent-dir}/sns/{blog-filename-without-ext}.md`
     - Example: `project/PhysicalAI/physical-ai.html` → `project/PhysicalAI/sns/physical-ai.md`
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

8. **Medium article** (platform `medium` or `all`):
   - **영문** 요약 기사 (~900단어, 5분 읽기)
   - 이모지 없음, 뉴스 어조 (Warm Expert 아님)
   - 구조: Hook → 기술 설명 → 핵심 질문 → 페블러스 관점 → CTA(블로그 링크)
   - 이미지 3~4장 (블로그에서 가장 임팩트 있는 것, `<img>` 태그)
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
