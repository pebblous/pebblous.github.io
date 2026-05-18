# Pebblous SNS 작성 규칙 (CLAUDE-SNS)

> sns-write 스킬이 참조하는 **SNS 고유 규칙** 문서.
> 톤 정의 본문은 `voice-edit/voices/*.md`로 이전됨 (2026-05-16).
>
> - 톤(어조) → `voice-edit/voices/sns-cover.md` (기본), `voice-edit/voices/reflective.md` (장문 에세이)
> - 공통 원칙 → `voice-edit/SKILL.md`
> - 이 문서는 SNS 채널 고유 규칙만 (해시태그, 채널별 길이, 페블러스 연결 라이브러리)

원본 이력:
- `docs/sns-writing-tone.md` (2026-01-13 최초 작성)
- 2026-04-14 — 매거진 커버 기사 톤으로 전환
- 2026-04-26 (PR #116) — voice-essay 톤으로 통합
- 2026-05-15 — reflective 변종 추가
- **2026-05-16 — voice 정의를 voice-edit로 이전, 이 문서는 SNS 고유 규칙만 보유**

---

## 톤은 voice를 따른다

| 출력 슬롯 | voice |
|-----------|-------|
| LinkedIn / Twitter / Facebook 짧은 카피 (기본) | `sns-cover` |
| 장문 에세이 (Facebook 장문 / LinkedIn 장문 / Medium 마스터 카피) | `reflective` |

톤 규칙·정본·자기검증은 `voice-edit/voices/{voice}.md` 단일 출처(SSOT). 이 문서에서 톤을 재정의하지 않는다.

---

## SNS 공통 금지 (voice를 막론하고 모든 SNS 카피에 적용)

- **이모지 완전 금지** — 헤드라인, 불릿, 본문 어디에도. 불릿 대체: `▸` 또는 `-` 텍스트 기호
- **데이터 파밍/농업 메타포 금지** — 경작·재배·수확·온실·기근 등 비유 사용하지 않음
- **가벼운 농담·감탄사·과장 금지** — `!` 남발, "혁신적", "획기적", "게임 체인저" 류

---

## 페블러스 비즈니스 연결 — 주제별 라이브러리

기사 말미(또는 사유 에세이의 7~8할 지점)에 페블러스 관련 사업/제품을 짧게 언급한다.

| 주제 영역 | 연결 문장 예시 |
|-----------|---------------|
| 데이터 품질 | 페블러스는 DataClinic을 통해 AI 학습 데이터의 품질을 정량 진단한다. |
| 합성 데이터 | 페블러스의 PebbloSim은 물리 법칙 기반 합성 데이터를 생성하는 시뮬레이션 플랫폼이다. |
| ISO 표준 | 페블러스는 ISO/IEC 5259 기반의 데이터 품질 인증 체계를 운영한다. |
| 피지컬 AI | 페블러스는 자율주행·로봇·제조 분야의 AI-Ready 데이터 인프라를 구축하고 있다. |
| 일반 | 페블러스는 AI-Ready 데이터 인프라 전문 기업이다. |

**규칙:**
- 자연스럽게 기사 흐름에 녹일 것 — 광고처럼 튀지 않게
- 기사 내용과 무관한 제품 언급 금지
- "마치 ~처럼" 비유 금지 — 팩트 서술만

---

## 채널별 규칙

### LinkedIn (전문가 대상)
- 업계 맥락·트렌드 언급
- 문단 3-4개, 각 3-5줄
- 첫 문장이 피드에서 잘리므로 핵심 팩트로 시작
- 해시태그: 기본 4 + 제품 1-2 + 주제 2-3 + 고유명사 2-3 = **총 9-12개**
- 마무리: 인사이트 또는 시사점 (질문형 지양)

### Facebook (확장 서술)
- 구체적 숫자나 사례로 시작
- 기사의 핵심 논점을 3-4문단으로 풀어서 전달
- 해시태그: 기본 3-4 + 고유명사 1-2 + 주제 1-2 = **총 5-7개** (고유명사는 빠뜨리지 않음)
- 링크는 본문에 자연스럽게 삽입

### Twitter/X (압축)
- 핵심 팩트 1-2줄 + 의미 1줄
- 링크는 마지막
- 해시태그: 기본 2 + 고유명사 1-2 + 주제 1 = **총 4-5개**

### 에세이 슬롯 (voice=reflective)
- 채널 무관 마스터 카피. 1,500~2,500자, 10~15문단
- Facebook 장문, LinkedIn 장문, Medium 마스터로 동일하게 사용
- 자세한 톤 규칙은 `voice-edit/voices/reflective.md` 참조

---

## 해시태그 규칙

해시태그는 **4개 층위**로 구성한다. 각 층위에서 본문 내용에 맞는 것을 골라 조합한다.

### 층위 1 — 페블러스 기본 (모든 포스트 공통, 필수)
```
#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘
```

### 층위 2 — 페블러스 제품·전략 (해당하는 것 1-3개)
본문에서 실제 언급·연결된 것만 사용:
- 제품: `#DataClinic #PebbloSim #Pebbloscope #DataGreenhouse #AIReadyData`
- 전략: `#PhysicalAI #에이전트경제 #데이터주권`

### 층위 3 — 주제 키워드 (본문 핵심 개념 2-4개)
- AI 일반: `#AI #인공지능 #LLM #생성형AI`
- 멀티모달: `#멀티모달 #VLM #비전AI #VLA`
- 에이전트: `#AI에이전트 #GUIagent #ComputerUse #에이전트프레임워크`
- 추론·학습: `#강화학습 #RLHF #DPO #파인튜닝`
- 데이터: `#합성데이터 #학습데이터 #데이터파이프라인 #데이터거버넌스 #온톨로지 #뉴로심볼릭AI`
- 산업: `#소버린AI #온프레미스AI #온디바이스AI #엣지AI #제조AI`
- 보안·규제: `#AI거버넌스 #AI안전 #데이터보안`

### 층위 4 — 고유명사·브랜드 (본문에 등장한 것 2-5개, **필수**)
본문에서 다룬 기업·제품·논문·인물·정책을 모두 해시태그로 포함한다:
- **기업**: `#ByteDance #Anthropic #OpenAI #GoogleDeepMind #Microsoft #NVIDIA #Apple #Meta`
- **제품·모델**: `#UITARS #ClaudeOpus #ClaudeSonnet #ChatGPT #Gemini #GR00T #π0 #MCP #Gemma4 #LLaVA`
- **벤치마크**: `#OSWorld #WebArena #ScreenSpot`
- **정책**: `#디지털자산기본법 #AI기본법`
- **인물** (본문 중심일 때): `#YannLeCun` 등

⛔ **고유명사 누락 점검 필수** — 본문 mainTitle·subtitle에 등장한 기업·제품명은 반드시 해시태그에 포함. 누락 시 검색 발견성 큰 손해.

### EN 버전 (LinkedIn EN, Twitter EN, Medium 등)
```
#Pebblous #DataClinic #DataQuality #DataJournalism
```
+ 고유명사는 원문 그대로(`#ByteDance #UITARS #MCP`)
+ 주제는 영문 표기(`#AIAgent #Multimodal #GUIAgent #SyntheticData`)

### 플랫폼별 수량 (채널별 규칙과 동일)
- LinkedIn: 기본 4 + 제품 1-2 + 주제 2-3 + 고유명사 2-3 = **총 9-12개**
- Facebook: 기본 3-4 + 고유명사 1-2 + 주제 1-2 = **총 5-7개**
- Twitter/X: 기본 2 + 고유명사 1-2 + 주제 1 = **총 4-5개**
- 에세이 (reflective): 기본 4 + 제품 1 + 주제 1-2 + 고유명사 1-2 = **총 7-9개**

### 주의
- 본문 내용과 무관한 해시태그 금지
- 한국어 포스트에 영어 해시태그는 **고유명사·기술용어만 허용** (`#ByteDance #MCP`는 OK, `#technology`는 금지)
- 본문 마지막에 별도 줄로 구분하여 배치
- 본문에 등장하지 않은 페블러스 제품은 해시태그에서도 빼기 (광고처럼 보임)
- 같은 해시태그 중복 금지 (`#AI`와 `#인공지능` 둘 다 쓰지 말 것)

---

## 출력 파일 저장 경로

```
{blog-parent-dir}/sns/{blog-filename-without-ext}.md
# 예: story/gemma4-nvfp4/sns/index.md
# 예: project/NeuroSymbolicOntology/sns/index.md
```

---

## SNS 발행 전 체크리스트

이 체크리스트는 **모든 SNS 카피 공통**. voice별 톤 체크리스트는 `voice-edit/voices/{voice}.md` 참조.

- [ ] 이모지 0개 (헤드라인·불릿·본문·해시태그 모두)
- [ ] 데이터 파밍/농업 메타포 0개
- [ ] 광고 문구 0개 ("혁신적", "획기적", "게임 체인저", "미래를 선도")
- [ ] 페블러스 비즈니스 연결이 흐름에 자연스럽게 녹아 있는가
- [ ] 플랫폼별 해시태그 수량 준수
- [ ] 해시태그가 본문 내용과 연관
- [ ] 링크 포함 (Facebook/LinkedIn: 본문 내, Twitter: 마지막, 에세이: 끝)
- [ ] sns/ 디렉토리에 파일 저장
- [ ] 선택된 voice의 자기검증 체크리스트 통과 (`voice-edit/voices/{voice}.md`)
