---
name: report-produce
description: >
  심층조사 보고서 기획부터 퍼블리싱까지 완전 자동화. 주제를 받아
  사전 검토(중복·가치 병렬 판별) → JH 컨펌 → 기획 → 병렬 3트랙 리서치(논문/업계/데이터) → 합성 → HTML 작성 → 퍼블리싱을
  멀티 에이전트로 일괄 실행.
  "심층조사 보고서 써줘", "리포트 작성해줘", "report-produce 실행" 요청 시 이 스킬 사용.
---

# report-produce: 심층조사 보고서 파이프라인 오케스트레이터

## ⛔ Phase 0 필수 읽기 (스킬 실행 전 예외 없이)

HTML 작성 단계(Phase 4) 시작 전, report-writer 에이전트에게 다음 파일을 Read 툴로 읽도록 지시:

1. `docs/post-writing-lessons-for-pb.md` — 작성 규칙 (이중 불릿, SEO-check 등)
2. `.claude/skills/blog-write/references/html-conventions.md` — HTML 정본 (CSS 순서, Hero, 메타)
3. `docs/blog-html-checklist.md` — 완성 후 대조 체크리스트

Push 전 검증: `python3 tools/validate-articles.py` 실행 필수.

### ⛔ Phase 4 작성 시 반복 오류 방지 (에이전트 필독)

다음 3가지는 모든 PR에서 반복 발견된 오류. Phase 4 에이전트 프롬프트에 반드시 포함:

1. **number-badge 패턴**: `<h2>` 안에 `<div>` 금지. 반드시 `<div>` 안에 `<h2>`:
   ```html
   <!-- ❌ 금지 -->
   <h2><div class="flex ..."><span class="number-badge">1</span> 제목</div></h2>
   <!-- ✅ 정답 -->
   <div class="flex items-center gap-4 mb-8">
       <span class="number-badge">1</span>
       <h2 class="text-3xl font-bold themeable-heading">제목</h2>
   </div>
   ```
2. **JSON-LD TechArticle**: `<head>`에 반드시 포함. 누락 시 seo-check FAIL
3. **`<section id="faq">`**: `config.faqs`가 있으면 HTML에 빈 section 필수. 없으면 FAQ 미렌더링

## 실행 모드: 서브 에이전트 (Pipeline + 병렬 팬아웃)

## 에이전트 구성

| 에이전트 | subagent_type | 모델 | 역할 | 출력 |
|---------|--------------|------|------|------|
| topic-coverage-checker | Explore | haiku | 직·간접 중복 여부 검색 | `_workspace/report/pre_coverage.md` |
| topic-value-assessor | Explore | sonnet | 주제 가치 평가 | `_workspace/report/pre_value.md` |
| report-planner | Explore | **opus** | 조사 범위·구조 설계 | `_workspace/report/00_plan.md` |
| arxiv-researcher | Explore | **opus** | 논문/학술 트랙 | `_workspace/report/02a_arxiv.md` |
| industry-researcher | Explore | sonnet | 업계 동향 트랙 | `_workspace/report/02b_industry.md` |
| data-researcher | Explore | sonnet | 수치/데이터 트랙 | `_workspace/report/02c_data.md` |
| report-synthesizer | general-purpose | **opus** | 3트랙 통합 + Exec Summary | `_workspace/report/03_synthesis.md` |
| report-writer | general-purpose | **opus** | HTML 보고서 작성 | `report/[slug]/ko/index.html` |
| report-en-writer | general-purpose | **opus** | 영문 재작성 | `report/[slug]/en/index.html` |
| blog-publisher | general-purpose | haiku | OG + articles.json + git push | 퍼블리싱 완료 |

⛔ **모델 매핑은 비용·시간을 잡기 위한 하이브리드 설계**. 핵심 추론·서사 노드(planner / synthesizer / writer / en-writer / arxiv)만 opus, 수집·요약·검증·실행은 sonnet/haiku. 품질이 의심되는 노드는 이 표에서만 opus로 올린다.

## 로깅 계약 (Logger Contract)

오케스트레이터는 **각 Phase 시작/종료 시점에 logger를 호출**한다. 로그는 글과 함께 영구 보관되도록 `report/[slug]/log/`에 저장한다.

```bash
# 시작
python3 tools/report-produce-logger.py start \
  --slug [slug] --phase [n] --agent [name] --model [opus|sonnet|haiku] --mode [standard|express]

# 종료
python3 tools/report-produce-logger.py end \
  --slug [slug] --phase [n] --agent [name] --status [ok|fail|partial] \
  --output-path [path] --notes "[한 줄 메모]"

# 자유 노트 (theme adequity, intervention, warning 등)
python3 tools/report-produce-logger.py note \
  --slug [slug] --kind [adequity|intervention|warning|info] --content "[내용]"

# 실행 종료 시 (Phase 9)
python3 tools/report-produce-logger.py finalize \
  --slug [slug] --topic "[주제]" --mode [standard|express]
```

산출물:
- `report/[slug]/log/report-produce-YYYY-MM-DD.jsonl` — 기계용 raw (append-only)
- `report/[slug]/log/report-produce-YYYY-MM-DD.md` — 사람용 요약 (finalize 시 생성/갱신)

⛔ **색인 금지 (Option C)**: 이 디렉토리의 파일은 `articles.json` / `sitemap.xml` 등에 등록하지 않는다. 어떤 페이지에서도 링크하지 않는다. URL을 직접 알면 접근 가능 — 재현성·투명성 목적.

## 데이터 흐름

```
[사용자 입력: 주제]
        ↓ (병렬)
[Phase Pre] topic-coverage-checker → pre_coverage.md
            topic-value-assessor   → pre_value.md
        ↓
⏸ 결과 요약 → JH 컨펌 대기 (항상 멈춤, 자동 진행 없음)
        ↓ (승인 시)
[Phase 0] 준비 (브랜치, 워크스페이스)
        ↓
[Phase 1] report-planner
        → _workspace/report/00_plan.md
        ↓ (병렬)
[Phase 2] arxiv-researcher  →  02a_arxiv.md
          industry-researcher →  02b_industry.md
          data-researcher     →  02c_data.md
        ↓
[Phase 3] report-synthesizer
        → _workspace/report/03_synthesis.md
        ↓
[Phase 4] report-writer
        → report/[slug]/ko/index.html
        → _workspace/report/04_write_meta.json
        ↓
⏸ [Phase 4.5] JH 리뷰 — 콘텐츠·각도·톤 컨펌 (자동 진행 없음)
        ↓ (승인 시)
[Phase 5] 품질 검증 + 보강
        5-A: content + style review (자기검토, 위반 즉시 수정)
        5-B: text-reinforce (차트/표 앞 설명 문단 보강)
        5-C: image-reinforce (맥락 이미지 추가)
        5-D: bibliography (references.json SSOT + BibTeX/RIS + Scholar 메타)
        ↓
[Phase 6] 영문화 (단순 번역 금지, 영미권 문화 고려 재작성)
        → report/[slug]/en/index.html
        ↓
[Phase 7] SEO + SNS
        7-A: seo-check (KO + EN 각각 4계층 검증)
        7-B: sns-write (LinkedIn/Twitter/Facebook + Medium)
        ↓
[Phase 8] blog-publisher
        → OG 이미지 / articles.json (KO+EN) / git push
        ↓
[Phase 9: 완료 보고]
```

## 오케스트레이터 실행 절차

### Phase Pre: 사전 병렬 검토

주제 입력 직후, 두 에이전트를 동시에 스폰. **slug는 이 시점에 잠정 결정**(주제 한 줄 요약 → kebab-case). slug 결정 후 즉시 logger를 시작:

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase Pre --agent topic-coverage-checker --model haiku --mode standard &
python3 tools/report-produce-logger.py start --slug [slug] --phase Pre --agent topic-value-assessor --model sonnet --mode standard
```

```python
Agent(
  name="topic-coverage-checker",
  subagent_type="Explore",
  model="haiku",
  run_in_background=True,
  prompt="""
    콘텐츠 루트: $BLOG_CONTENT_REPO
    대화 이력: /workspace/group/conversations/

    주제: [주제]

    다음을 검색하여 직·간접 중복 여부를 판별하라:
    1. articles.json — 제목·description·tags에서 관련 키워드 검색
    2. story/, report/ 폴더 — HTML 파일 내 관련 내용 검색
    3. /workspace/group/conversations/ — 이 주제를 논의한 기록 검색

    출력: _workspace/report/pre_coverage.md
    형식:
    ## 중복 판정
    - 결론: [신규 / 부분 중복 / 직접 중복]
    - 관련 기사/보고서: (있으면 경로 + 요약)
    - 관련 대화: (있으면 날짜 + 내용 요약)
    - 차별화 가능 각도: (부분 중복이면 새로운 접근법 제안)
  """
)

Agent(
  name="topic-value-assessor",
  subagent_type="Explore",
  model="sonnet",
  run_in_background=True,
  prompt="""
    콘텐츠 루트: $BLOG_CONTENT_REPO

    주제: [주제]

    다음 기준으로 주제 가치를 평가하라:
    1. 타이밍 — 지금 다루기에 적절한가? (트렌드, 뉴스 사이클)
    2. 페블러스 연결 — DataClinic, AI-Ready Data, 데이터 품질과 접점이 있는가?
    3. 독자성 — 다른 매체와 차별화된 페블러스만의 시각이 가능한가?
    4. 깊이 — 심층조사 보고서 분량(5,000자+)을 채울 수 있는가? 아니면 짧은 블로그가 더 적합한가?
    5. 독자 관심도 — 페블러스 독자(데이터 실무자, AI 관심층)에게 실질적 가치가 있는가?

    출력: _workspace/report/pre_value.md
    형식:
    ## 가치 평가
    - 종합 판정: [강력 추천 / 추천 / 보류 / 비추천]
    - 타이밍: [평가]
    - 페블러스 연결: [평가]
    - 독자성: [평가]
    - 깊이: [심층보고서 적합 / 일반 블로그 적합 / 짧은 포스트 적합]
    - 독자 가치: [평가]
    - 추천 접근법: (어떤 각도로 쓰면 좋은지 1-2줄)
  """
)
```

두 에이전트 완료 후 logger 종료:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase Pre --agent topic-coverage-checker --status ok --output-path _workspace/report/pre_coverage.md --notes "[중복 판정 한 줄]"
python3 tools/report-produce-logger.py end --slug [slug] --phase Pre --agent topic-value-assessor --status ok --output-path _workspace/report/pre_value.md --notes "[가치 판정 한 줄]"
```

오케스트레이터가 결과를 읽고 사용자에게 요약 메시지 전송:

```
📋 사전 검토 완료 — [주제]

[중복 판정]: 신규 / 부분 중복(관련: ...) / 직접 중복
[가치 평가]: 강력 추천 / 추천 / 보류
[추천 형식]: 심층보고서 / 일반 블로그 / 짧은 포스트

→ 진행할까요?
```

⛔ *반드시 여기서 멈추고 JH 확인을 기다린다. 자동으로 Phase 0을 시작하지 않는다.*
JH가 "ㅇㅇ", "진행", "go" 등으로 승인하면 Phase 0으로 이동.
"수정", "보류", "skip" 등이면 그에 따라 처리.

---

### Phase 0: 준비

JH 승인 후 실행:

```bash
mkdir -p $BLOG_CONTENT_REPO/_workspace/report
cd "$BLOG_CONTENT_REPO"
git checkout main && git pull origin main
git checkout -b feat/report-[slug]-pb
```

사용자 입력을 `_workspace/report/00_input.md`에 기록.

### Phase 1: 기획

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 1 --agent report-planner --model opus
```

```python
Agent(
  name="report-planner",
  subagent_type="Explore",
  model="opus",
  prompt="""
    에이전트 정의: <repo-root>/.claude/agents/report-planner.md
    콘텐츠 루트: $BLOG_CONTENT_REPO

    주제: [주제]
    특별 요구사항: [요구사항]

    출력: _workspace/report/00_plan.md

    ⛔ 필수 포함 항목:
    00_plan.md에 반드시 "## 페블러스 관심의 이유" 섹션을 포함할 것.
    다음 4가지 각도로 구체적으로 서술:
    1. 비즈니스/기술 연결 (DataClinic, AI-Ready Data, Physical AI 접점)
    2. 데이터 품질 관점 (학습 데이터 → 모델 내부 표현 연결)
    3. 고객/파트너 실무 함의
    4. 페블러스의 포지셔닝 가능성
    이 섹션이 없으면 Phase 4 보고서 작성이 불완전해진다.
  """
)
```

Phase 1 종료 시:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase 1 --agent report-planner --status ok --output-path _workspace/report/00_plan.md --notes "[핵심 각도 한 줄]"
```

### Phase 2: 병렬 리서치 (3-way 팬아웃)

Phase 1 완료 후 동시 실행. **모델 차등 배정**: arxiv는 학술 추론이 핵심이므로 opus, 나머지 둘은 sonnet.

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 2 --agent arxiv-researcher --model opus &
python3 tools/report-produce-logger.py start --slug [slug] --phase 2 --agent industry-researcher --model sonnet &
python3 tools/report-produce-logger.py start --slug [slug] --phase 2 --agent data-researcher --model sonnet
```

```python
Agent(
  name="arxiv-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: .claude/agents/arxiv-researcher.md
    기획 문서: _workspace/report/00_plan.md (트랙 A 조사 지시 참조)
    콘텐츠 루트: $BLOG_CONTENT_REPO
    출력: _workspace/report/02a_arxiv.md
  """
)

Agent(
  name="industry-researcher",
  subagent_type="Explore",
  model="sonnet",
  run_in_background=True,
  prompt="""
    에이전트 정의: .claude/agents/industry-researcher.md
    기획 문서: _workspace/report/00_plan.md (트랙 B 조사 지시 참조)
    콘텐츠 루트: $BLOG_CONTENT_REPO
    출력: _workspace/report/02b_industry.md
  """
)

Agent(
  name="data-researcher",
  subagent_type="Explore",
  model="sonnet",
  run_in_background=True,
  prompt="""
    에이전트 정의: .claude/agents/data-researcher.md
    기획 문서: _workspace/report/00_plan.md (트랙 C 조사 지시 참조)
    콘텐츠 루트: $BLOG_CONTENT_REPO
    출력: _workspace/report/02c_data.md
  """
)
```

3트랙 모두 완료 시 각각 logger end:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase 2 --agent arxiv-researcher --status ok --output-path _workspace/report/02a_arxiv.md
python3 tools/report-produce-logger.py end --slug [slug] --phase 2 --agent industry-researcher --status ok --output-path _workspace/report/02b_industry.md
python3 tools/report-produce-logger.py end --slug [slug] --phase 2 --agent data-researcher --status ok --output-path _workspace/report/02c_data.md
```

### Phase 3: 합성

3개 트랙 모두 완료 확인 후:

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 3 --agent report-synthesizer --model opus
```

```python
Agent(
  name="report-synthesizer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: .claude/agents/report-synthesizer.md
    콘텐츠 루트: $BLOG_CONTENT_REPO

    입력 파일:
    - _workspace/report/00_plan.md
    - _workspace/report/02a_arxiv.md
    - _workspace/report/02b_industry.md
    - _workspace/report/02c_data.md

    출력: _workspace/report/03_synthesis.md
  """
)
```

Phase 3 종료 시:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase 3 --agent report-synthesizer --status ok --output-path _workspace/report/03_synthesis.md
```

### Phase 4: HTML 작성

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 4 --agent report-writer --model opus
```

```python
Agent(
  name="report-writer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: .claude/agents/report-writer.md
    스킬: .claude/skills/blog-write/skill.md
    콘텐츠 루트: $BLOG_CONTENT_REPO

    입력 파일:
    - _workspace/report/00_plan.md
    - _workspace/report/03_synthesis.md

    HTML 템플릿: report/korea-ai-fund-report-2026-03/ko/index.html
    체크리스트: docs/blog-html-checklist.md
    제목 전략: docs/title-strategy.md (§7 제목→Exec Summary 일관성 필수)
    CLAUDE.md: <repo-root>/CLAUDE.md

    ⛔ 제목→Executive Summary 일관성 규칙 (title-strategy.md §7):
    - mainTitle의 핵심 주장이 Executive Summary key-insight에 산문으로 등장해야 함
    - ⛔ 수치는 stat-card 담당 — key-insight에 수치 4개 이상 나열 금지 (역피라미드 산문, html-conventions.md §5)
    - stat-card에 mainTitle 관련 지표 포함 필수 (3~4개, 5개 이상 금지)
    - 외부 보고서 기반 글: mainTitle에 외부 브랜드명 금지, subtitle에 배치

    출력:
    - report/[slug]/ko/index.html
    - _workspace/report/04_write_meta.json
  """
)
```

Phase 4 종료 시:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase 4 --agent report-writer --status ok --output-path report/[slug]/ko/index.html --notes "[mainTitle 한 줄]"
```

### Phase 4.5: JH 리뷰 (콘텐츠 컨펌)

⏸ Phase 4 초고 완성 후 반드시 멈추고 JH 리뷰를 요청한다.

사용자에게 다음 정보를 제시:

```
📝 초고 완성 — [제목]

▸ 경로: report/[slug]/ko/index.html
▸ 로컬 확인: http://localhost:8000/report/[slug]/ko/
▸ 분량: ~N자, N개 섹션
▸ 핵심 각도: [1줄 요약]

리뷰 부탁드립니다. 콘텐츠·각도·톤 확인 후 진행 여부를 알려주세요.
```

⛔ *자동으로 Phase 5를 시작하지 않는다.* JH가 승인하면 Phase 5로 이동.
수정 요청이 있으면 해당 내용을 반영한 후 다시 리뷰 요청.

---

### Phase 5: 품질 검증 + 보강

Phase 4.5 승인 후, 퍼블리싱 전에 반드시 아래 **5단계(5-A ~ 5-E)** 를 실행한다. 각 서브단계별로 logger start/end를 호출.

⛔ **Skip 정책 (객관 기준 — 주관 판단 금지)**:
| 서브단계 | 무조건 호출 | Skip 가능 조건 |
|---------|-----------|---------------|
| 5-A 자기검토 | ✅ 항상 | (skip 불가) |
| 5-B text-reinforce | 항상 호출 | 결과적으로 보강할 곳이 0개여도 호출은 한다 |
| 5-C image-reinforce | 항상 호출 | 본문 이미지가 4개 이상이고 핵심 주제 시각 자료가 포함된 경우만 skip 가능. 그 외 일반론 / 본문 이미지 < 4 / 주제 매칭 부족 시 반드시 호출 |
| 5-D bibliography | references 4개 이상이면 항상 호출 | references < 4면 skip 가능 |
| 5-E ko-prose-humanizer | ✅ 항상 (KO·EN 둘 다) | (skip 불가) |

→ "본문이 충분히 풍부하니까", "이미 충분히 길어서" 같은 주관 판단으로 skip하지 말 것. 객관 조건만 사용.

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 5-A --agent self-review --model sonnet
# (자기검토 후)
python3 tools/report-produce-logger.py end --slug [slug] --phase 5-A --agent self-review --status ok --notes "[발견·수정한 위반 요약]"

python3 tools/report-produce-logger.py start --slug [slug] --phase 5-B --agent text-reinforce --model sonnet
python3 tools/report-produce-logger.py end --slug [slug] --phase 5-B --agent text-reinforce --status ok --notes "[보강 문단 수]"

python3 tools/report-produce-logger.py start --slug [slug] --phase 5-C --agent image-reinforce --model haiku
python3 tools/report-produce-logger.py end --slug [slug] --phase 5-C --agent image-reinforce --status ok --notes "[삽입 이미지 수, 주제 매칭 여부]"

python3 tools/report-produce-logger.py start --slug [slug] --phase 5-D --agent bibliography --model haiku
python3 tools/report-produce-logger.py end --slug [slug] --phase 5-D --agent bibliography --status ok --notes "[references.json 항목 수]"

python3 tools/report-produce-logger.py start --slug [slug] --phase 5-E --agent ko-prose-humanizer --model sonnet
python3 tools/report-produce-logger.py end --slug [slug] --phase 5-E --agent ko-prose-humanizer --status ok --notes "[KO 총점, em-dash 빈도, 자동 교정 적용 여부]"
```

#### 5-A: Content + Style Review (자기검토)

생성된 KO HTML을 읽고 다음을 검증:
- 표준 스타일 준수 (number-badge h2, fade-in-card, key-insight, themeable-card 등)
- DOMContentLoaded 미사용, share-buttons-placeholder 미삽입
- 색상 규칙 (오렌지 단색, 그라데이션/틸 금지)
- Text-First 원칙 (차트·표·카드 앞에 반드시 설명 문단)
- 이중 불릿(`<li>·`) 없음
- Executive Summary에 key-insight 텍스트가 카드보다 앞에 위치

위반 발견 시 직접 수정한 후 진행.

#### 5-B: text-reinforce

```python
# 스킬: .claude/skills/text-reinforce/SKILL.md
# 차트/표/카드 앞에 설명 문단이 빠진 곳을 찾아 보강
```

#### 5-C: image-reinforce

```python
# 스킬: .claude/skills/image-reinforce/SKILL.md
# 본문 맥락에 맞는 이미지를 찾아 삽입 (CC 라이선스 또는 자체 생성)
```

⛔ **주제 매칭 우선 모드**: 단순 추상 다이어그램(피드백 루프, 일반 아키텍처)만 채우지 말 것. 주제 고유 시각 자료를 우선 탐색:
- 게임/제품 주제 → 실제 게임/제품 스크린샷 (CC, Wikimedia, 공식 press kit)
- 학술 논문 인용 주제 → 원 논문의 figure (fair use 인용)
- 인물 주제 → 공식 프로필 사진 (CC 또는 자체 촬영)
- 사례/데이터 주제 → 해당 기관 공식 차트
일반 추상 이미지로만 채우면 5-C 실행했어도 본 단계 미완료로 간주.

#### 5-D: bibliography (신규 정식 편입 — 2026-05-24)

```python
# 스킬: .claude/skills/bibliography/SKILL.md
# (1) references.json 생성 (CSL-JSON, SSOT) — report/[slug]/references.json
# (2) HTML 참고문헌 섹션을 .reference-list 표준으로 렌더링
#     - <span class="ref-num">N.</span><span class="ref-body">...</span>
#     - 카테고리 분류 (학술 / 정책·통계 / 페블러스 인접) — 4건 이상이면 필수
# (3) Download Citation 버튼 (BibTeX / RIS)
#     - <button onclick="PebblousCitation.download('bibtex', '../references.json')">BibTeX</button>
#     - <button onclick="PebblousCitation.download('ris', '../references.json')">RIS</button>
# (4) </body> 직전: <script src="/scripts/citation-download.js?v=YYYYMMDD" defer></script>
# (5) Google Scholar citation_* 메타 태그 (head)
#     - citation_title, citation_author, citation_publication_date,
#       citation_online_date, citation_journal_title, citation_language
```

⛔ **무조건 호출 조건**: Phase 2 리서치에서 학술 논문·정책 문서·보고서 인용이 4개 이상이면 무조건 5-D 호출. Phase 4 writer가 본문에 inline `<a href>`만 박은 상태라도 5-D에서 references.json SSOT를 만들고 다운로드 인프라를 추가해야 함.

검증 grep (Phase 5-D 종료 직전):
- `python3 -c "import json; print(len(json.load(open('report/[slug]/references.json'))))"` ≥ 4
- `grep -c "PebblousCitation.download" report/[slug]/{ko,en}/index.html` → 각 2 (BibTeX + RIS)
- `grep -c "citation-download.js" report/[slug]/{ko,en}/index.html` → 각 1
- `grep -c 'name="citation_title"' report/[slug]/{ko,en}/index.html` → 각 1

#### 5-E: ko-prose-humanizer (신규 정식 편입 — 2026-05-31)

⛔ **무조건 호출 — KO 본문 작성 직후, EN은 Phase 6 직후**

스킬: `.claude/skills/ko-prose-humanizer/SKILL.md`. AI가 쓴 산문의 11종 표면 tell
(em-dash 재진술·명사형 종결·메타 예고문·자사 연결 작위성 등)을 측정·교정.

호출 흐름:
```python
# (1) 진단
Skill(ko-prose-humanizer) — 입력: report/[slug]/ko/index.html
# 출력: _workspace/report/05e_prose_diagnosis_ko.md
#       (11 tell 점수표 + 증거 문구 + 가장 두드러진 tell 3개)

# (2) 임계치 판정
#   총점 ≥ 0.5: 자동 교정 1회 실행 (Skill 재호출 with --apply)
#   총점 0.3~0.5: 진단만 로그에 기록, 자동 진행 (express 모드) 또는 JH 보고 (수동)
#   총점 < 0.3: 통과

# (3) 별도 임계치 (점수 무관 강제 트리거)
#   T1 em-dash 빈도 1/300자 미만: 자동 교정
#   T11 자사 연결 작위성 감지: 본문 마지막 단락의 자사 그루는 Editor's Note로 분리

# (4) 교정 후 재진단
#   재진단 후 총점 < 0.5 충족 시 통과
```

EN 글(Phase 6 직후)도 동일 절차 — `ko-prose-humanizer`의 영어 추가 패턴
(delve / moreover / furthermore / paradigm shift / em-dash 남용)으로 EN 본문 진단.

검증 grep (Phase 5-E 종료 직전):
```bash
# KO em-dash 빈도
python3 -c "
import re
for f in ['report/[slug]/ko/index.html', 'report/[slug]/en/index.html']:
    t=open(f).read(); t=re.sub(r'<meta[^>]*>|<script[^>]*>.*?</script>','',t,flags=re.DOTALL)
    text=re.sub(r'<[^>]+>','',t); text=re.sub(r'\s+',' ',text)
    n=text.count('—'); c=len(text)
    print(f'{f}: {c}자 / em-dash {n} / 1/{c//max(n,1)}자')
"
# 기준: KO 1/500자 이상, EN 1/500자 이상이면 통과
```

> ⚠️ **결함 #6 사례 (2026-05-31, Evans Nature 2026)**: report-produce-express로 발행된
> KO 본문이 em-dash 117개·1/237자로 JH 보이스 정본(0개·∞) 대비 과다. T1·T4·T11이
> 점수 0.45로 누적되며 자사 연결("페블러스를 카테고리 리더로 격상")이 본문에 직접 점프.
> 이 Phase 5-E의 도입이 그 방지. 시리즈 4편(SkillOpt·MUSE·PIPEDA·Evans)이
> 동일 패턴을 공유하므로 도입 직후 후순위 검수 대상.

---

### Phase 6: 영문화 (EN 작성)

⛔ 단순 번역 금지 — 영미권 독자 기준으로 재작성.

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 6 --agent report-en-writer --model opus
```

```python
Agent(
  name="report-en-writer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    스킬: .claude/skills/bilingual/SKILL.md
    콘텐츠 루트: $BLOG_CONTENT_REPO

    소스: report/[slug]/ko/index.html (Phase 5 완료본)

    규칙:
    - 직역 금지 — 영미권 독자가 자연스럽게 읽히는 표현 사용
    - 한국 맥락의 비유·사례는 글로벌 등가물로 교체
    - SEO 제목(pageTitle)과 본문 제목(mainTitle) 분리 (docs/title-strategy.md 참조)
    - articles.json에 EN 항목 등록
    - ⛔ og:image, twitter:image 경로를 반드시 /en/image/index.png으로 변경 (KO 복사 시 /ko/image/ 그대로 남는 반복 버그)

    출력: report/[slug]/en/index.html

    ⛔ EN 생성 후 반드시 아래 검증 실행:
    grep -n 'ko/image/index.png' report/[slug]/en/index.html
    # → 출력이 있으면 /en/image/index.png으로 수정
  """
)
```

---

Phase 6 종료 시:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase 6 --agent report-en-writer --status ok --output-path report/[slug]/en/index.html --notes "[og:image 경로 검증 결과]"
```

### Phase 7: SEO + SNS

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 7-A --agent seo-check --model haiku
# (KO+EN seo-check 후)
python3 tools/report-produce-logger.py end --slug [slug] --phase 7-A --agent seo-check --status ok --notes "[KO 점수 / EN 점수]"

python3 tools/report-produce-logger.py start --slug [slug] --phase 7-B --agent sns-write --model sonnet
python3 tools/report-produce-logger.py end --slug [slug] --phase 7-B --agent sns-write --status ok --output-path report/[slug]/sns/ --notes "[생성된 채널 수]"
```

#### 7-A: seo-check (KO + EN)

```python
# 스킬: .claude/skills/seo-check/SKILL.md
# KO와 EN 각각 실행. 4계층 전부 PASS여야 진행.
```

#### 7-B: sns-write

```python
# 스킬: .claude/skills/sns-write/SKILL.md
# LinkedIn + Twitter/X + Facebook + Medium 영문 기사
# 표가 있으면 Puppeteer로 이미지 렌더링하여 sns/image/에 저장
```

---

### Phase 8: 퍼블리싱

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase 8 --agent blog-publisher --model haiku
```

```python
Agent(
  name="blog-publisher",
  subagent_type="general-purpose",
  model="haiku",
  prompt="""
    에이전트 정의: .claude/agents/blog-publisher.md
    스킬: .claude/skills/blog-publish/skill.md
    콘텐츠 루트: $BLOG_CONTENT_REPO

    메타데이터: _workspace/report/04_write_meta.json

    추가 파일:
    - report/[slug]/en/index.html (EN 버전)
    - report/[slug]/sns/ (SNS 홍보 글)
  """
)
```

Phase 8 종료 + Phase 9 진입 시 logger finalize:

```bash
python3 tools/report-produce-logger.py end --slug [slug] --phase 8 --agent blog-publisher --status ok --notes "[PR URL]"
python3 tools/report-produce-logger.py finalize --slug [slug] --topic "[주제]" --mode standard
```

### Phase 9: 완료 보고

사용자에게:
- 생성된 보고서 경로 (KO + EN)
- 블로그 URL (`https://blog.pebblous.ai/report/[slug]/ko/`, `/en/`)
- articles.json 반영 확인 (KO + EN 2개 항목)
- SEO 점수 (KO/EN 각각)
- SNS 파일 경로 (sns/index.md, sns/medium.html)
- git push / PR 생성 결과
- **실행 로그 경로**: `report/[slug]/log/report-produce-YYYY-MM-DD.md` (jsonl 동반)

## 에러 핸들링

| 단계 | 실패 | 처리 |
|------|------|------|
| 사전 검토 실패 | 에이전트 미응답 | 수동으로 결과 요약 후 JH 확인 요청 |
| 기획 실패 | planner 미응답 | 주제 기반 직접 기획 후 진행 |
| 리서치 트랙 1개 실패 | 2개 트랙만 완료 | 실패 트랙 명시 후 합성 진행 |
| 합성 실패 | synthesizer 미응답 | 3개 트랙 결과 직접 합산 후 진행 |
| 작성 실패 | HTML 생성 안 됨 | 사용자에게 알리고 중단 |
| 품질 검증 위반 | 표준 미준수 발견 | 직접 수정 후 진행 (중단 불필요) |
| 영문화 실패 | EN 생성 안 됨 | KO만 먼저 퍼블리싱, EN은 별도 작업으로 분리 |
| SEO 실패 | 4계층 중 FAIL | 해당 항목 수정 후 재검증 |
| SNS 실패 | Medium/이미지 생성 오류 | SNS 텍스트만 생성, 이미지는 수동 후처리 |
| 퍼블리싱 부분 실패 | OG/articles/git 중 일부 | 실패 단계 명시 후 나머지 진행 |
