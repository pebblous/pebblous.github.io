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
