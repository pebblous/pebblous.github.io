---
name: seo-check
description: Audit an HTML page for Pebblous SEO compliance
argument-hint: "[file-path.html]"
---

When this skill is invoked:

1. **Read the target HTML file** specified by the user.

2. **Detect `noindex` pages**: Check for `<meta name="robots" content="noindex">` or `content="noindex, nofollow"`.
   - **Cross-check with articles.json**: Read `articles.json` and check if the page's path matches any article with `"published": true`. If a published article has `noindex`, report as **CRITICAL ERROR**: "This page is published in articles.json but has noindex — Google will NOT index it. Remove the noindex tag."
   - If `noindex` and NOT in articles.json (legitimate noindex): skip Layer 1 (canonical, keywords), Layer 2 (OG, Twitter Cards), and hreflang checks — these are N/A for non-indexed pages. Still check: `<title>`, `<meta description>` (basic hygiene), Layer 4 technical items (heading hierarchy, viewport). Report as "noindex page — reduced checklist applied".

3. **Read SEO reference**: Read `docs/seo.md` for the full 4-layer checklist.

4. **Check all 4 SEO layers** and report pass/fail for each (skip layers marked N/A for noindex pages):

   **Layer 0 — Title Quality** (제목 정본 = `docs/ko-style-standard.md` §4-2 v3, 2026-09-13 형님 판정 — 먼저 Read · 슬롯·SEO 규격: `docs/title-strategy.md`):
   - **검사기 먼저**: `python3 tools/title-census.py --check-html <file>` 을 돌려 `mainTitle` 결과를 읽는다. 검사기가 재는 것 — 과거형 서술 종결(위반) · 제목 안 수치(아라비아 숫자 1개 권고 감점, 2개 이상 위반; 한글 수사 "열에 여덟"은 수치가 아니다) · 영문 약어 4자 이상(AI·LLM·SNS·GPU·EU·CT 등 상용 약어 제외, 권고) · 길이(20~35자, 45자 초과 위반) · 줄표/콜론 허용 형태 · 따옴표(낱말 강조 제외) · 미끼 · 키워드 나열 · 잘린 명사형 · 인용+반전 · 대조 공식. 위반이면 **FAIL**, 권고면 WARN. 검사기가 센 것을 손으로 다시 세지 않는다.
   - ⛔ **두 시험 게이트 (검사기가 못 재는 의미 판단, FAIL 조건)** — 검사기 통과 ≠ 좋은 제목이다. `mainTitle`만 읽고:
     ① **중학생 시험**: 제목만 읽은 중학생이 "이 기사는 ~에 관한 것"이라고 한 줄로 말할 수 있는가. 못 하면 FAIL — 예: "에이전트 메모리는 예산이 빠듯하면 검색을 고쳐도 소용이 없다". 도메인 주어(무엇에 관한 글인지)가 없는 것도 여기서 FAIL — 예: "3일이 만든 128개, 5개월이 만든 883개"(무엇을 만들었는지 없음). EN도 동일(숫자만 있고 posts/articles 등 무엇인지 없으면 FAIL).
     ② **클릭 시험**: 눌러 보고 싶은가. 궁금증·놀라움·'내 일 같음' 중 하나는 있어야 한다. 정확하지만 아무도 안 누르면 FAIL — 예: "위성 기동 라벨 1,134건에 증거 등급이 하나씩 붙었다".
   - **세 형태 확인**: `mainTitle`이 질문형("AI는 생각의 도구일까, ‘인지 바이러스’일까?") · 신문 명사형("SNS 유해 글 단속, 열에 여덟은 딱지 없이 통과") · 현재형 주장("지난 실험 기록이 교과서보다 AI를 더 잘 가르친다") 중 하나인가. 과거형 서술 종결(~했다·~였다)은 FAIL. 낯선 고유명사·전문용어(회사명·모델명·업계 용어)가 제목에 있으면 FAIL(부제로 내린다). AI 어투(사물 주어 + "~가 붙었다/~가 갈렸다", 번역투)면 FAIL. 재다류(잰·쟀다·재 둔·재는)가 제목·부제에 있으면 FAIL — "측정하다"로(한자어 술어). **부제 시험**: 부제만 읽은 중학생이 무슨 일이 있었는지 말할 수 없으면 FAIL — 낯선 업계 용어(거버넌스·프레임워크 등)·길이 맞추려 부순 문장·무엇의 수치인지 없는 숫자. 실패 예 "클라우데라 에너지·유틸리티 조사에서 65%가 거의 전부 거버넌스라 답했고, 기준을 전부로 좁히면 20% 밑이다".
   - ⛔ **번역체 골격 게이트 (§0.2)**: `mainTitle`을 **소리 내어 읽고** "이걸 진짜 한국 신문 기자가 쓸까"를 의심한다. 아래 3대 골격 중 하나면 **FAIL**, 세 형태로 되쓰기(§0.2 사례집·되쓰기 절차 참조):
     ① **한자어 명사 조립** — "~적 한계/원인/전환", "~의 ~ 조건/문제/분석/전략/시대/미래/경제학/지형"으로 제목이 추상 한자어 명사로 닫힘 (예: "…탐지기의 수학적 한계", "…재귀적 인지 부조화")
     ② **영어 통사구조 복사** — *the economics of X*("~의 경제학"), *How X does Y*("~는 어떻게 ~하는가"), *What X tells Y*("~이 ~에게 말하는 것"), 콜론 리스티클, 번역 안 한 영어 단어. ⚠️ **"~한 X" 관형절은 한국어 SOV 정상이라 ② 아님**(과검출 주의)
     ③ **완결 설명문 과적재** — 부제를 제목에 욱여넣거나 콜론·"그리고"로 두 절 이어붙임
     ⚠️ **두 시험×§0.2 긴장**: 주어를 살리되 추상명사로 닫으면(①) 여전히 FAIL. 정답은 세 형태 중 하나 — 주어(도메인)가 있고 중학생이 알아듣는 문장("AI 표절검사가 억울한 학생을 만든다"는 현재형 주장). EN도 동일 기준.
   - `pageTitle`은 `mainTitle`의 **검색 변형**인가 — 완전 동일이면 WARN(키워드 보강 기회 상실), 전혀 다른 이야기면 WARN(슬롯 표류). **pageTitle 은 검색 변형이라 수치·기관명이 들어가도 된다** — §4-2 v3 의 수치 금지·고유명사 금지는 `mainTitle` 에만 건다. pageTitle 에는 clickbait·과장 어휘(충격·비밀·N가지)만 거른다
   - `pageTitle` 핵심 키워드가 앞쪽 1/3에 위치하는가?
   - `subtitle`이 **정확한 헤드라인 자리**인가 — 제목에서 뺀 기관·수치·방법·출처를 신문체로(40~70자, 명사 종결 허용). mainTitle에 없는 보조 키워드 포함, mainTitle 동격 재진술 아님. 제목이 쉬워진 만큼 부제가 정확해야 한다
   - 세 슬롯 모두 **따옴표 인용·인용+반전·대조공식·미끼·키워드 나열·잘린 명사형 없음**, 줄표는 "— 출처/기관" 꼬리만, 콜론은 "X: Y"(X=12자 이하 이름표)만 (§4-2 유지 금지)
   - EN 제목이 KO 직역이 아닌가? (bilingual 시) — 두 시험·과거형 종결 금지는 EN에도 같이 건다

   **Layer 1 — Meta Tags**:
   - `<title>` (50-60 chars, Korean keyword first)
   - `<meta name="description">` (120-155 chars)
   - `<link rel="canonical">`
   - `<meta name="keywords">`

   **Layer 2 — Open Graph & Twitter Cards**:
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
   - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
   - OG image dimensions (1200x630 recommended)
   - **OG image file exists**: Extract the path from `og:image` content, convert the URL to a local file path (e.g., `https://blog.pebblous.ai/story/.../image/index.png` → `story/.../image/index.png`), and verify the file exists on disk. FAIL if the file is missing — the image will be a broken link on social media shares.
   - **⛔ EN 페이지 OG 이미지 언어 불일치 검증**: `<html lang="en">` 페이지에서 `og:image` 또는 `twitter:image` 경로에 `/ko/image/`가 포함되어 있으면 **CRITICAL FAIL**: "EN 페이지가 KO OG 이미지를 참조 — SNS 공유 시 한글 이미지 노출. `/en/image/`로 수정 필요." (원인: KO 복사 후 경로 미변경)

   **Layer 3 — JSON-LD Schema & FAQ** (페블러스 표준: 동적 주입):

   이 사이트의 JSON-LD 스키마는 `PebblousSchema` (scripts/common-utils.js)가 런타임에 동적으로 주입한다. 검증된 사실(2026-05-13 Google Rich Results Test 확인): 동적 JSON-LD를 Google이 정상 인식하며 Rich Results 자격을 부여한다.

   - **BreadcrumbList**: `PebblousSchema.injectBreadcrumbSchema()`가 `config.category` + `config.mainTitle`에서 자동 주입. → config에 `mainTitle`과 `category` 있는지 확인.
   - **Article/TechArticle**: `PebblousSchema.injectArticleSchema()`가 `config.mainTitle` + `config.subtitle`에서 자동 주입. → **`<head>`에 직접 정적 JSON-LD를 작성하지 말 것** (PebblousSchema 동적 주입과 중복되어 Google Rich Results Test에서 "Articles 2 items" 중복 경고). config에 `mainTitle`+`subtitle` 있는지만 확인.
   - **FAQPage**: `config.faqs` 배열만 사용 (자동 주입). `<head>`에 직접 작성 금지.
   - **⛔ FAQ 렌더링 컨테이너 검증**: `config.faqs`가 있는데 `<section id="faq">`가 HTML에 없으면 **FAIL**: "FAQ가 config에 정의되었지만 렌더링 컨테이너(`<section id="faq">`)가 없어 페이지에 표시되지 않음. `</main>` 앞에 `<section id=\"faq\" class=\"mb-16 fade-in-card\"></section>` 추가 필요."
   - **⛔ 정적 JSON-LD 중복 검증**: `<head>`에 `@type: Article/TechArticle/BlogPosting` JSON-LD가 정적으로 존재하면 **FAIL** (PebblousSchema와 중복). 정적 블록 제거하고 PebblousPage.init config로 동작 위임할 것.

   **Layer 4 — Technical**:
   - Heading hierarchy (single H1, proper H2/H3 nesting)
   - Image alt attributes
   - Internal linking
   - Mobile responsive meta viewport

5. **Output a report** with:
   - Pass/Fail status per item
   - Specific fix suggestions for failures
   - Overall SEO score (items passed / total items)
