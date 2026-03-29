# Blog Introduction Email Template

외부 파트너/분석가에게 특정 주제와 관련된 블로그 아티클을 소개하는 이메일 템플릿.

## Reference: Gartner Analyst Email (2026-03-27)

**Subject:** Pebblous Insights on Synthetic Data & Physical AI — 7 Articles for Your Reference

**Structure:**
1. 인사 + 대화 맥락 언급 (1줄)
2. 아티클 리스트 (번호, 제목 링크, 1줄 설명)
3. IR 자료 소개 (PDF 직접 링크 + Press Room 링크)
4. 대화 요청 클로징

**Body:**

```html
<p>Dear [Name],</p>

<p>Following our conversations on [topic], I'd like to share a few articles from our blog that may be of interest.</p>

<ol>
<li><strong><a href="[URL]">[Title]</a></strong><br/>
[1-line description focusing on the key insight or data point.]</li>
<!-- Repeat for each article -->
</ol>

<p>Additionally, I'd like to share our <strong>investor relations deck</strong>, which provides a concise overview of Pebblous's business model, product roadmap, and market positioning:</p>
<ul>
<li><strong>Pitch Deck (EN):</strong> <a href="https://blog.pebblous.ai/project/IR/press-room/downloads/pebblous-pitch-deck-en.pdf">Download PDF</a></li>
<li><strong>IR Deck (KO):</strong> <a href="https://blog.pebblous.ai/project/IR/press-room/downloads/pebblous-ir-deck-ko.pdf">Download PDF</a></li>
<li><strong>Press Room:</strong> <a href="https://blog.pebblous.ai/project/IR/press-room/en/">Visit page</a> (password will follow in a separate message)</li>
</ul>

<p>I'd welcome any thoughts, especially on how these align with what [org] is seeing in this space.</p>

<p>Best regards</p>
```

## Writing Rules

- **영문 기본**, 수신자가 한국어 화자면 한국어 버전 제공
- 아티클 설명은 **1줄**, 핵심 데이터 포인트나 인사이트 중심
- 한국어만 있는 아티클은 `(Korean)` 표기
- IR 자료 포함 여부는 선택 (include-ir 옵션)
- PDF 직접 링크는 1:1 공유에만 적합 — 광범위 공유 시 Press Room + 암호 방식만 사용
- 제목은 `[Org] Insights on [Topic] — N Articles for Your Reference` 패턴
