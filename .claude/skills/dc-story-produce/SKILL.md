---
name: dc-story-produce
description: >
  DataClinic 진단 스토리 전체 제작 파이프라인 오케스트레이터.
  reportId를 받아 데이터 수집 → 시각 분석 → 스토리라인 기획 → KO HTML 작성 →
  품질 검증 → EN 번역 → SEO/SNS → 퍼블리싱을 멀티 에이전트로 일괄 실행.
  'DataClinic 스토리 써줘', 'DC 리포트 N번 스토리', '진단 스토리 만들어줘',
  'dc-story-produce 실행' 요청 시 이 스킬 사용.
argument-hint: "[reportId]"
---

# dc-story-produce: DataClinic 진단 스토리 파이프라인 오케스트레이터

## ⛔ 필수 읽기 (스킬 실행 전 예외 없이)

HTML 작성 단계(Phase 4) 시작 전, dc-story-writer-ko 에이전트에게 다음 파일을 Read 툴로 읽도록 지시:

1. `docs/post-writing-lessons-for-pb.md` — 작성 규칙
2. `.claude/skills/blog-write/references/html-conventions.md` — HTML 정본
3. `docs/blog-html-checklist.md` — 완성 후 대조 체크리스트
4. `.claude/skills/story-style-guide/SKILL.md` — **DC 스토리 전용 스타일 가이드 (class-card, density-card, 페블로스코프)**
5. `.claude/skills/data-journalism-review/SKILL.md` — 데이터 저널리즘 5항목 기준

Push 전 검증: `python3 tools/validate-articles.py` 실행 필수.

---

## 에이전트 구성

| Phase | 에이전트 | subagent_type | 역할 | 출력 |
|-------|---------|--------------|------|------|
| 1 | dc-collector | general-purpose | API/CDN/차트 데이터 수집 | `/tmp/dc-{reportId}/collected.json` |
| 2 | dc-visual-analyst | general-purpose | 차트 이미지 시각 분석 | `/tmp/dc-{reportId}/analysis.json` |
| 3 | dc-storyline-planner | general-purpose | 데이터 저널리즘 스토리라인 설계 | `_workspace/dc/storyline.md` |
| 4 | dc-story-writer-ko | general-purpose | KO HTML 작성 | `story/{slug}/ko/index.html` |
| 5 | dc-story-reviewer | general-purpose | 22항목 + 저널리즘 5항목 검증 | 리뷰 결과 |
| 6 | dc-story-writer-en | general-purpose | EN 번역 (재작성) | `story/{slug}/en/index.html` |
| 7 | blog-publisher | general-purpose | OG + articles.json + git push | 퍼블리싱 완료 |

---

## 데이터 흐름

```
[사용자 입력: reportId]
        ↓
[Phase 0] 준비
        - 브랜치 생성, 워크스페이스 초기화
        - 리포트 기본 정보 확인 (클래스 수, 데이터셋 이름, 이미지 수)
        ↓
[Phase 1] dc-collect — 데이터 수집
        → /tmp/dc-{reportId}/collected.json
        ↓
[Phase 2] dc-analyze — 시각 분석
        → /tmp/dc-{reportId}/analysis.json
        ↓
[Phase 3] 스토리라인 기획 (데이터 저널리즘)
        → _workspace/dc/storyline.md
        ↓
⏸ JH 컨펌 — 스토리라인·각도·비교 프레임 승인
        ↓ (승인 시)
[Phase 4] dc-write-ko — KO HTML 작성
        → story/{slug}/ko/index.html
        → _workspace/dc/write_meta.json
        ↓
[Phase 5] 품질 검증 + 보강
        5-A: review-dataclinic-story (22항목 체크리스트)
        5-B: data-journalism-review (5항목 콘텐츠 품질)
        5-C: text-reinforce + image-reinforce
        ↓
⏸ JH 리뷰 — 콘텐츠·톤·시각 자료 컨펌
        ↓ (승인 시)
[Phase 6] dc-write-en — EN 번역 (재작성)
        → story/{slug}/en/index.html
        ↓
[Phase 7] SEO + SNS
        7-A: seo-check (KO + EN)
        7-B: sns-write
        ↓
[Phase 8] dc-publish — 퍼블리싱
        → OG 이미지 (KO+EN) / articles.json / git push
        ↓
[Phase 9] 완료 보고
```

---

## 오케스트레이터 실행 절차

### Phase 0: 준비

```bash
mkdir -p _workspace/dc
cd /workspace/extra/repos/pebblous.github.io
git checkout main && git pull origin main
git checkout -b feat/dc-story-{reportId}-pb
```

리포트 기본 정보 확인:
```python
# DataClinic API로 reportId의 기본 정보 조회
# - 데이터셋 이름, 클래스 수, 이미지 수, 총점
# - L1/L2/L3 각 레벨 점수
# - 기존에 같은 reportId로 작성한 스토리가 있는지 articles.json 검색
```

---

### Phase 1: 데이터 수집 (dc-collect)

```python
Agent(
  name="dc-collector",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    스킬: .claude/skills/dc-collect/SKILL.md
    저장소 루트: {repo_root}
    reportId: {reportId}

    수집 항목:
    1. API 텍스트 (L1·L2·L3 진단 결과)
    2. CDN 정적 이미지 URL (collage, meanimage, PCA, 밀도 플롯)
    3. JS 렌더링 차트 → Playwright 스크린샷으로 로컬 저장
       ⛔ JS 차트는 CDN 이미지가 없음 — 반드시 Playwright로 렌더링 후 PNG 캡처
    4. 아웃라이어 샘플 (고밀도/저밀도 이미지 URL)
    5. 유사도 샘플 (nearest/farthest)
    6. 클래스 목록 + 대표이미지 URL
       → API: GET /report/classwise/chart/image?diagnosis_report_id={reportId}&diagnosis_report_chart_id=6
    7. 페블로스코프 스냅샷 ID (있는 경우)

    출력: /tmp/dc-{reportId}/collected.json
  """
)
```

---

### Phase 2: 시각 분석 (dc-analyze)

```python
Agent(
  name="dc-visual-analyst",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    스킬: .claude/skills/dc-analyze/SKILL.md
    저장소 루트: {repo_root}
    입력: /tmp/dc-{reportId}/collected.json

    분석 항목:
    1. CDN 이미지 및 렌더링된 차트를 시각적으로 분석
    2. API 텍스트와 시각 자료의 불일치 탐지
    3. 클러스터 구조 해석 (단일/다봉형, 계절/환경 패턴)
    4. 이상치 원인 추론

    ⛔ 차트 캡션 시각 확인 필수 (D4):
    모든 차트는 반드시 이미지를 직접 다운로드해서 눈으로 확인 후 분석.
    curl -s {URL} -o /tmp/check.png && Read /tmp/check.png

    ⛔ DataClinic 분석 vs 시각 구분 (D5):
    이미지에서 직접 보이지 않는 구조적 판단은 "DataClinic 분석: ..." 형태로 출처 명시.

    출력: /tmp/dc-{reportId}/analysis.json
  """
)
```

---

### Phase 3: 스토리라인 기획 (데이터 저널리즘)

⛔ 이 단계가 DC 스토리의 핵심 차별점. 단순 진단 결과 나열이 아닌 편집 관점의 스토리를 설계한다.

```python
Agent(
  name="dc-storyline-planner",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    저장소 루트: {repo_root}
    입력:
    - /tmp/dc-{reportId}/analysis.json
    - /tmp/dc-{reportId}/collected.json

    참조:
    - .claude/skills/data-journalism-review/SKILL.md (5항목 기준)
    - .claude/skills/story-style-guide/SKILL.md (시각 컴포넌트 표준)

    다음 5가지를 설계하라:

    ## 1. So What 시나리오
    - 진단 결과가 실전에서 어떤 문제를 일으키는지 구체적 시나리오 설계
    - 저밀도 이미지 → 고밀도 클래스로 오분류되는 misclass-scenario
    - 동일 환경 매칭 원칙: 배경·각도·조건이 유사한 이미지 쌍 선택
    - 이미지 매칭이 안 되면 텍스트 시나리오로 대체 (무리하게 넣지 말 것)

    ## 2. 비교 프레임
    - 동일 도메인 기존 DC 스토리를 articles.json에서 검색
    - 점수 비교 카드 설계 (예: "A 데이터셋 79점 vs B 데이터셋 64점")
    - 비교 대상이 없으면 일반적인 DataClinic 평균 점수와 비교

    ## 3. 시각 컴포넌트 배치 계획
    - L1 섹션: class-card (실제+평균 나란히) — 몇 개 클래스를 어떤 순서로
    - L2/L3 섹션: density-card (밀도+대표이미지 2:1) — 어떤 클래스를 하이라이트
    - 페블로스코프 스냅샷: 어떤 클래스의 어떤 클러스터 현상을 보여줄지
    - JS 차트 스크린샷: 어디에 배치할지

    ## 4. 제목·부제목 후보
    - mainTitle: 독자의 호기심을 유발하는 질문형 또는 발견형
    - subtitle: "— {데이터셋명} DataClinic 진단기" 형식

    ## 5. 섹션 구조 (TOC)
    - Executive Summary
    - 데이터셋 소개 (collage + 스펙)
    - L1 클래스별 분석 (class-card)
    - L2 분포 분석 (density-card + 페블로스코프)
    - L3 깊이 분석 (density-card + 페블로스코프)
    - 실전 임팩트 시나리오 (misclass-scenario)
    - 결론 + 비교 프레임
    - FAQ

    출력: _workspace/dc/storyline.md
  """
)
```

### Phase 3.5: JH 컨펌 (스토리라인)

⏸ storyline.md 완성 후 반드시 멈추고 JH 확인을 기다린다.

```
📋 스토리라인 설계 완료 — Report #{reportId}

▸ 데이터셋: {name} ({클래스}종, {이미지}장)
▸ 총점: {score}점
▸ So What: {시나리오 1줄 요약}
▸ 비교 프레임: {비교 대상 요약}
▸ 제목 후보: {mainTitle}
▸ 페블로스코프: {snapshot 유무}

_workspace/dc/storyline.md 를 확인해 주세요.
→ 진행할까요?
```

⛔ *자동으로 Phase 4를 시작하지 않는다.*

---

### Phase 4: KO HTML 작성 (dc-write-ko)

```python
Agent(
  name="dc-story-writer-ko",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    스킬: .claude/skills/dc-write-ko/skill.md
    저장소 루트: {repo_root}

    ⛔ 작성 전 반드시 Read:
    1. docs/post-writing-lessons-for-pb.md
    2. .claude/skills/blog-write/references/html-conventions.md
    3. docs/blog-html-checklist.md
    4. .claude/skills/story-style-guide/SKILL.md

    입력:
    - /tmp/dc-{reportId}/analysis.json
    - /tmp/dc-{reportId}/collected.json
    - _workspace/dc/storyline.md (JH 승인된 스토리라인)

    HTML 템플릿 참조 (최근 작성된 DC 스토리):
    - story/dataclinic-report-227-pbls-drone-classification-story-pb/ko/index.html
    - story/dataclinic-report-225-pbls-military3-story-pb/ko/index.html

    ⛔ DC 스토리 필수 시각 컴포넌트 (story-style-guide §8):

    ### L1: class-card (실제+평균 이미지 나란히)
    - .class-grid > .class-card > .class-card-images (grid-cols-2)
    - 왼쪽: 대표 이미지 (cdn.dataclinic.ai/datasets/...) + "실제" 라벨
    - 오른쪽: 평균 이미지 (cdn.dataclinic.ai/.../meanimage/...) + "평균" 라벨
    - ⛔ 평균 이미지만 단독으로 보여주지 말 것 — 반드시 대표 이미지와 쌍으로

    ### L2/L3: density-card (밀도 차트 + 대표이미지 2:1)
    - .density-card > .den-imgs (grid: 2fr 1fr)
    - 왼쪽(2fr): 밀도 차트 + "밀도" 라벨
    - 오른쪽(1fr): 대표 이미지 + "실제" 라벨
    - JS 차트는 Playwright 스크린샷을 로컬 이미지로 삽입

    ### 페블로스코프 스냅샷 (L2 또는 L3에 필수)
    - pebbloscope-prod-public-bucket S3 URL로 이미지 삽입
    - 클릭 시 pebbloscope.ai/snapshots/{id}로 이동
    - 클러스터 형성 원인 설명 필수
    - "직접 탐색하기 →" 링크 필수

    ### misclass-scenario (실전 임팩트)
    - storyline.md의 So What 시나리오를 시각적 인포그래픽으로 구현
    - 동일 환경 이미지 쌍 사용 원칙

    ### collage 이미지 (데이터셋 소개)
    - cdn.dataclinic.ai/...collage.png
    - max-w-[560px] max-h-[480px] object-contain mx-auto

    기타 규칙:
    - 데이터 저널리즘 스타일 (사실 기반, 수치 명시)
    - Text-First 원칙 (차트/카드 앞에 반드시 설명 문단)
    - PebblousPage.init config에 mainTitle + subtitle 필수
    - FAQ 7개 이상 (config.faqs)
    - category: "story"
    - publisher: "(주)페블러스 데이터 커뮤니케이션팀"

    출력:
    - story/{slug}/ko/index.html
    - _workspace/dc/write_meta.json
  """
)
```

---

### Phase 4.5: JH 리뷰 (콘텐츠 컨펌)

⏸ Phase 4 초고 완성 후 반드시 멈추고 JH 리뷰를 요청한다.

```
📝 초고 완성 — {제목}

▸ 경로: story/{slug}/ko/index.html
▸ 로컬 확인: http://localhost:8000/story/{slug}/ko/
▸ 분량: ~N자, N개 섹션
▸ 시각 컴포넌트: class-card N개, density-card N개, 페블로스코프 N개
▸ So What: {시나리오 1줄}

리뷰 부탁드립니다.
```

⛔ *자동으로 Phase 5를 시작하지 않는다.*

---

### Phase 5: 품질 검증 + 보강

Phase 4.5 승인 후 실행.

#### 5-A: review-dataclinic-story (22항목 체크리스트)

스킬: `.claude/skills/review-dataclinic-story/SKILL.md`

핵심 항목:
- B5: 페블로스코프 스냅샷 필수
- C4: L1 대표이미지 병행 (평균 이미지만 단독 금지)
- C5: L2/L3 밀도+대표이미지 병행
- D4: 차트 캡션 시각 확인 필수
- D5: DataClinic 분석 vs 시각 구분
- D6: PCA 차트 클래스 색상 확인

위반 발견 시 직접 수정 후 진행.

#### 5-B: data-journalism-review (5항목 콘텐츠 품질)

스킬: `.claude/skills/data-journalism-review/SKILL.md`

| # | 항목 | 기준 |
|---|------|------|
| 1 | So What 테스트 | 실전 임팩트 시나리오 존재 |
| 2 | 비교 프레임 | 동일 도메인 점수 비교 존재 |
| 3 | 시각적 증거 | L1/L2/L3 모두 대표이미지 병행 |
| 4 | 재현 가능성 | 페블로스코프 + DataClinic 리포트 링크 |
| 5 | 출처 투명성 | collage + 스펙 + 출처 링크 |

5항목 중 ❌가 있으면 수정 후 진행.

#### 5-C: text-reinforce + image-reinforce

```python
# 차트/표/카드 앞에 설명 문단이 빠진 곳 보강
# 맥락 이미지 추가 (CC 라이선스)
```

---

### Phase 6: EN 번역

⛔ 단순 번역 금지 — 영미권 독자 기준으로 재작성.

```python
Agent(
  name="dc-story-writer-en",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    스킬: .claude/skills/dc-write-en/SKILL.md
    저장소 루트: {repo_root}

    소스: story/{slug}/ko/index.html (Phase 5 완료본)

    규칙:
    - 직역 금지 — 영미권 독자가 자연스럽게 읽히는 표현
    - class-card 라벨: "실제" → "Actual", "평균" → "Mean"
    - density-card 라벨: "밀도" → "Density", "실제" → "Actual"
    - 페블로스코프 섹션: "페블로스코프로 본" → "Through the Pebbloscope"
    - "직접 탐색하기 →" → "Explore this snapshot →"
    - SEO 제목(pageTitle)과 본문 제목(mainTitle) 분리

    출력: story/{slug}/en/index.html
  """
)
```

---

### Phase 7: SEO + SNS

#### 7-A: seo-check (KO + EN)
```python
# 스킬: .claude/skills/seo-check/SKILL.md
# KO와 EN 각각 실행. 4계층 전부 PASS여야 진행.
```

#### 7-B: sns-write
```python
# 스킬: .claude/skills/sns-write/SKILL.md
# LinkedIn + Twitter/X + Facebook
```

---

### Phase 8: 퍼블리싱

```python
Agent(
  name="blog-publisher",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    스킬: .claude/skills/dc-publish/SKILL.md
    저장소 루트: {repo_root}

    메타데이터: _workspace/dc/write_meta.json

    실행:
    1. OG 이미지 생성 (KO + EN)
    2. articles.json 등록 (KO + EN 동시, 스키마 검증)
    3. sitemap / RSS 재생성
    4. Tailwind 빌드
    5. changelog 기록
    6. git commit + push
  """
)
```

---

### Phase 9: 완료 보고

사용자에게:
- 생성된 스토리 경로 (KO + EN)
- 블로그 URL (`https://blog.pebblous.ai/story/{slug}/ko/`, `/en/`)
- articles.json 반영 확인 (KO + EN 2개 항목)
- 시각 컴포넌트 현황: class-card N개, density-card N개, 페블로스코프 N개
- SEO 점수 (KO/EN 각각)
- 데이터 저널리즘 점수 (5항목)
- git push 결과

---

## 단일 클래스 데이터셋 분기 (Single-Class Workflow)

Phase 0에서 `totalClassCount`를 확인하여 분기한다.

### 판별 방법

```python
# L1 contents 응답에서 확인
l1 = GET /report/detail/level1-contents?id={reportId}
if l1["totalClassCount"] == 0 or l1["classwiseMeanImagePaths"] is None:
    → 단일 클래스 워크플로우
else:
    → 다중 클래스 워크플로우 (기본)
```

### 단일 클래스 특성

- 라벨 없음 → `classwiseMeanImagePaths: null`
- class-card, density-card 등 클래스별 비교 컴포넌트 사용 불가
- L2/L3에서 전체 데이터셋 단위의 분포/밀도 분석만 제공
- 대표적 예: 교통 영상, CCTV, 위성사진 등 단일 도메인 연속 촬영 데이터

### 시각 컴포넌트 대체 매핑

| 다중 클래스 | 단일 클래스 대체 | 설명 |
|------------|----------------|------|
| class-card (실제+평균) | **overall mean image + 대표 샘플 그리드** | 전체 평균 이미지 + nearest/farthest 샘플 비교 |
| density-card (밀도+대표이미지) | **전체 밀도 분포 차트 + 고밀도/저밀도 샘플 비교** | `overallDensityChartImage` + nearest vs farthest |
| misclass-scenario | **이상치 시나리오** | 저밀도 이미지가 왜 이상치인지 — 야간/역광/이벤트 등 |
| 페블로스코프 클래스별 클러스터 | **전체 데이터 클러스터 탐색** | 시간대/날씨/조건별 자연 클러스터 발견 |

### 단일 클래스 스토리 구조 (TOC)

```
Executive Summary
1. 데이터셋 소개 (collage + 스펙 + 촬영 조건)
2. L1: 정합성 분석 (이미지 크기/채널/결측치)
3. L2: 전체 분포 분석
   - PCA 차트 (전체 데이터 분포 시각화)
   - 밀도 분포 (고밀도 = 전형적 장면, 저밀도 = 비전형적 장면)
   - nearest/farthest 샘플 비교 (가장 유사한 vs 가장 다른 이미지)
4. L3: 도메인 최적화 렌즈 분석
   - 835차원 최적화 후 분포 변화
   - 클러스터 구조 해석 (시간대/날씨/교통량)
5. 이상치 분석 — 저밀도 이미지의 정체
   - 야간, 역광, 사고, 비 등 특수 조건 탐지
6. 실전 임팩트 — 자율주행 AI에 이 데이터를 쓴다면?
7. 결론 + 비교 프레임
FAQ
```

### 단일 클래스 Phase 4 추가 규칙

Phase 4 (dc-write-ko) 프롬프트에 추가:

```
⛔ 단일 클래스 데이터셋 전용 규칙:

### 평균 이미지
- overall mean image (L1): `overallAverageImagePath`
- 단독 표시 가능 (다중 클래스와 달리 비교 대상 없음)
- 대신 nearest 샘플 5~10개를 그리드로 함께 배치

### 밀도 분포
- 전체 밀도 차트: `overallDensityChartImage` (CDN)
- 고밀도 = 데이터셋의 "전형적 장면" → nearest 샘플로 시각화
- 저밀도 = 데이터셋의 "비전형적 장면" → farthest 샘플로 시각화
- 두 그룹을 나란히 배치하여 "AI가 보는 전형 vs 비전형" 대비

### So What 시나리오 (이상치 시나리오)
- 저밀도 이미지를 직접 다운로드하여 시각 확인
- 야간/역광/사고/비 등 특수 조건 탐지
- "이 데이터로 자율주행 AI를 학습하면, 저밀도 조건에서 성능이 급락한다"
- 혼합 교통 시뮬레이션 리포트와 연결: Sim-to-Real Gap의 데이터 품질 근거

### 연결고리
- report/mixed-traffic-ai-simulation/ 과의 연결점 명시
- "시뮬레이터가 재현해야 할 실제 한국 교차로 데이터의 품질을 진단한다"
```

---

## DC 스토리 필수 시각 컴포넌트 요약

| 컴포넌트 | 위치 | 필수 | 설명 |
|----------|------|------|------|
| collage | 데이터셋 소개 | ✅ | `max-w-[560px] max-h-[480px]` |
| class-card | L1 섹션 | ✅ | 실제+평균 나란히 (`class-card-images`) |
| density-card | L2/L3 섹션 | ✅ | 밀도 2:1 대표이미지 (`den-imgs`) |
| 페블로스코프 | L2 또는 L3 | ✅ | 스냅샷 이미지 + 탐색 링크 |
| JS 차트 스크린샷 | L2/L3 | ✅ | Playwright 캡처 → 로컬 PNG |
| misclass-scenario | 임팩트 섹션 | ⭕ 권장 | 오분류 시나리오 인포그래픽 |
| 비교 카드 | 결론 | ⭕ 권장 | 동일 도메인 점수 비교 |

---

## 하위 스킬 참조

각 Phase의 에이전트 프롬프트에서 다음 스킬 파일을 Read하여 참조한다 (스킬 시스템 호출이 아닌 문서 참조):

| Phase | 참조 스킬 파일 |
|-------|---------------|
| 1 | `.claude/skills/dc-collect/skill.md` |
| 2 | `.claude/skills/dc-analyze/skill.md` |
| 4 | `.claude/skills/dc-write-ko/skill.md` + `.claude/skills/story-style-guide/SKILL.md` |
| 5 | `.claude/skills/review-dataclinic-story/SKILL.md` + `.claude/skills/data-journalism-review/SKILL.md` |
| 6 | `.claude/skills/dc-write-en/skill.md` |
| 7 | `.claude/skills/seo-check/SKILL.md` + `.claude/skills/sns-write/SKILL.md` |
| 8 | `.claude/skills/dc-publish/skill.md` |

---

## 에러 핸들링

| 단계 | 실패 | 처리 |
|------|------|------|
| Phase 1 수집 실패 | API 미응답 또는 데이터 부족 | 사용자에게 알리고 reportId 확인 요청 |
| Phase 2 분석 실패 | 차트 이미지 접근 불가 | L3 버전 경로 확인 후 재시도 |
| Phase 3 기획 실패 | 비교 대상 없음 | DataClinic 평균 점수와 비교로 대체 |
| Phase 4 작성 실패 | HTML 생성 안 됨 | 사용자에게 알리고 중단 |
| Phase 5 검증 위반 | 22항목 중 Fail | 직접 수정 후 진행 (중단 불필요) |
| Phase 6 EN 실패 | EN 생성 안 됨 | KO만 먼저 퍼블리싱, EN은 별도 작업 |
| Phase 8 퍼블리싱 부분 실패 | OG/articles/git 중 일부 | 실패 단계 명시 후 나머지 진행 |
| 페블로스코프 스냅샷 없음 | snapshot ID 미확인 | JH에게 확인 요청, 없으면 스냅샷 섹션 생략 |

---

## 참조 구현 (최근 DC 스토리)

| 리포트 | 슬러그 | 특징 |
|--------|-------|------|
| #227 | dataclinic-report-227-pbls-drone-classification-story-pb | 12종 드론 분류, class-card, density 로컬 PNG |
| #225 | dataclinic-report-225-pbls-military3-story-pb | 3종 무기, density-card 방식B, 페블로스코프 2클러스터 |
| #224 | dataclinic-report-224-pbls-military-story-pb | 10종 무기, 페블로스코프 계절 클러스터 |
| #131 | dataclinic-report-131-industrialwaste-story-pb | class-card 참조 구현, density-card 방식A |
| #204 | (작성 예정) | **단일 클래스**, 왕산들사거리 교통 영상, 이상치 분석 중심 |

---

## 트리거

- "DataClinic 스토리 써줘"
- "DC 리포트 42번 스토리"
- "진단 스토리 만들어줘"
- "dc-story-produce 실행"
- "dc-story-produce {reportId}"
