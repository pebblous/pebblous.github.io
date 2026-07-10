---
title: LLM이 지식 베이스를 
subtitle: 카파시의 마크다운 위키에서 온톨로지 민주화까지 — 그리고 데이터 품질이 결정하는 것
date: 2026-04-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LLM이 지식 베이스를 

_카파시의 마크다운 위키에서 온톨로지 민주화까지 — 그리고 데이터 품질이 결정하는 것_

## Executive Summary

> [!callout]
> 2026년 4월 3~4일, 안드레이 카파시가 X(트위터)와 GitHub Gist에 공개한 LLM 기반 개인 지식 베이스(PKB) 방법론은 단순한 생산성 팁이 아니다. 이것은 20년간 OWL·SPARQL·온톨로지 엔지니어로 대표되던 지식 표현(knowledge representation) 패러다임에 대한 실질적 도전이다. 전통 엔터프라이즈 KG가 $1,000만~$2,000만 달러 비용에 수년의 전문가 투입을 요구하며 프로덕션 도입률 27%에 그치는 반면, 카파시는 LLM + 마크다운 + Obsidian 스택으로 동일한 지식 표현 기능을 구현한다.

> 페블러스 편집장 JH가 명명한 "저렴이 온톨로지"는 정확한 포지셔닝이다. 카파시의 방법론은 세 개 레이어로 구성된다. raw/ 디렉터리에 원본을 불변 저장하고(Layer 1), LLM이 이를 마크다운 위키로 컴파일·유지하며(Layer 2), CLAUDE.md나 AGENTS.md 형식의 스키마 문서가 LLM의 동작을 제어한다(Layer 3). 핵심 혁신은 지식이 복리 효과로 축적된다는 점이다. 기존 RAG가 쿼리마다 벡터 DB를 탐색하는 일회성 검색인 반면, 카파시 위키는 쿼리 결과조차 다시 위키에 파일링된다.

> 컨텍스트 윈도 확장이 이 방법론을 현실화했다. GPT-3의 2K 토큰(2020)에서 Gemini 2.0 Pro의 2M 토큰(2025)까지 5년간 1,000배 확장. 2024년 Gemini 1.5 Pro의 1M 토큰 달성 이후 "RAG 없이 전체 위키를 컨텍스트에 로드"하는 전략이 기술적으로 타당해졌다. 이 방법론의 핵심 병목은 파이프라인의 입구다. raw 데이터 품질이 낮으면 LLM이 생성하는 위키에 오류가 내재되고, 위키 기반의 합성 Q&A 데이터로 파인튜닝하면 오류가 모델 가중치에 고착된다. DataClinic이 제공하는 데이터 품질 진단은 이 파이프라인의 선결 조건이다. 이 글은 [뉴로-심볼릭 × 온톨로지 허브](/project/NeuroSymbolicOntology/ko/)에서 큐레이션하는 시리즈의 일부로, 20년 온톨로지 공학이 LLM 시대에 어떻게 민주화되는지를 추적합니다.

$10M~$20M

엔터프라이즈 KG 구축 비용

1.5M+

Obsidian 월간 활성 사용자

2×

RAG의 새 지식 정확도  
(파인튜닝 대비)

1.8시간

직장인 일일 정보 검색 시간  
(McKinsey)

"Every business has a raw/ directory. Nobody's ever compiled it. That's the product."

— Vamshi Reddy (X), 카파시 동의

## 1. 온톨로지의 역사 — 저렴이 온톨로지가 탄생하기까지

카파시의 방법론이 왜 파괴적인지를 이해하려면, 지식 표현(knowledge representation)의 20년 계보를 따라가야 한다. 전문가가 수년을 투자해 구축하는 온톨로지가, 마크다운 파일 몇 개와 LLM API 호출로 대체 가능해진 여정이다.

1단계 · 1970s~2000

### 전통 온톨로지 — 철학에서 공학으로

온톨로지(ontology)는 본래 철학 용어였다. "존재하는 것들의 형식적 목록"을 의미했고, AI 연구자들이 이를 컴퓨터가 이해할 수 있는 형태로 옮기기 시작했다. Description Logic, Frame Systems, 그리고 1984년부터 시작된 Cyc 프로젝트(인간 상식을 모두 기계에 입력하려는 시도)가 이 시대를 대표한다. 폐쇄 세계 가정(Closed World Assumption) — "명시적으로 알려지지 않은 것은 거짓" — 이 근본적 한계였다. 실제 세계의 지식은 열려 있고 불완전하다.

2단계 · 2001~2007

### 시맨틱 웹 — 표준의 시대

Tim Berners-Lee가 2001년 Scientific American에 발표한 시맨틱 웹 논문(30,000회 이상 인용)은 웹을 기계 가독 구조로 변환하는 비전을 제시했다. 기술 스택이 층층이 쌓였다. RDF → RDFS → OWL → SPARQL. W3C 권고안인 OWL(2004)은 Description Logic 기반의 형식적 의미론으로 기계 추론기(reasoner)를 가능케 했다. SKOS(2009)는 시소러스와 분류체계의 RDF 표현으로 도서관·기록관 영역에서 채택됐다.

그러나 현실은 혹독했다. **구축 비용 $1,000만~$2,000만 달러, 온톨로지 엔지니어 연봉 $107,282~$206,907/년(ZipRecruiter, 2025), 프로덕션 도입률 27%.** 이것이 Graph Praxis(2026년 2월)가 명명한 "온톨로지 세금"이다. 기술은 존재했지만, 대다수 조직에겐 그림의 떡이었다.

3단계 · 2007~2020

### 지식 그래프 전성기 — 규모의 승리

DBpedia(2007)가 위키피디아 인포박스를 RDF 트리플로 변환하면서 Linked Open Data 운동이 시작됐다. Google Knowledge Graph(2012)는 7개월 만에 5.7억 개체·180억 팩트를 구축해 구글 월 1,000억 검색의 1/3을 보조하게 됐다. Wikidata(2012~현재)는 2025년 기준 1억 1,900만 항목의 공개 KG로 성장했다.

KG 시장 규모는 $1.07B(2024)에서 $6.94B(2030)으로, CAGR 36.6%의 고성장이 전망된다(MarketsandMarkets, 2025). 그러나 여전히 전문가 의존성은 강했다. 도메인이 바뀌면 SPARQL 쿼리와 스키마를 다시 정의해야 했다. 암묵지, 절차적 지식, 맥락 의존적 지식은 여전히 형식화하기 어려웠다.

4단계 · 2024~

### LLM 위키 / "저렴이 온톨로지" — 민주화의 시작

두 가지 기술이 동시에 성숙했다. LLM의 자연어 이해 능력과 컨텍스트 윈도의 폭발적 확장. GPT-3(2020) 2K → Claude 1(2023) 100K → Gemini 1.5 Pro(2024) 1M → Gemini 2.0 Pro(2025) 2M 토큰. 5년간 1,000배 확장이다.

Pan et al.(2024, IEEE TKDE)의 "Synergized LLMs+KGs" 프레임워크와 LLM-empowered KG Construction Survey(arXiv:2510.20345, 2025)는 이 전환을 학술적으로 뒷받침한다. 전통 KG 구축의 3단계(엔티티 추출 → 관계 추출 → 온톨로지 정렬)를 LLM이 하나의 프롬프트로 처리한다.

핵심 전환은 형식적 스키마(Schema-based) → 자유 스키마(Schema-free), 전문가 → LLM 에이전트다. LLM 활용 KG 구축 시 300~320% ROI가 보고되고 있다(Medium/Branzan, 2025). 그리고 2026년 4월, 카파시가 이 모든 것을 일반인도 이해할 수 있는 언어로 공개했다.

#### 전통 온톨로지의 3가지 구조적 병목

- ①**전문가 의존성:** 온톨로지 엔지니어 + 도메인 전문가가 동시에 필요. 연봉 $107K~$207K 인력 풀이 좁다.
- ②**유지보수 비용:** 도메인 변화 시 SPARQL 쿼리와 스키마 재정의 필요. 비즈니스 속도를 따라가지 못한다.
- ③**경직성:** 암묵지, 절차적 지식, 맥락 의존적 지식을 형식 논리로 포착하기 어렵다. 실제 조직 지식의 대부분이 이 영역에 속한다.

## 2. 카파시 아키텍처 심층 분석

카파시가 X와 GitHub Gist에서 공개한 방법론의 핵심은 **3-레이어 구조**와 **4대 운영 사이클**이다. 표면적으로는 "LLM으로 메모 정리하기"처럼 보이지만, 그 안에는 온톨로지 공학의 핵심 원리가 마크다운으로 재구현되어 있다.

"A large fraction of my recent token throughput is going less into manipulating code, and more into manipulating knowledge."

— Andrej Karpathy (X, 2026-04-03)

### 3-레이어 아키텍처

#### Layer 1 · raw/ — 불변의 진실 원천

논문, 아티클, 이미지, 데이터셋의 원본 저장소. **LLM이 읽기만 하고 수정하지 않는다.** Obsidian Web Clipper로 웹 페이지를 마크다운과 이미지로 변환해 저장. LLM의 비전 기능으로 이미지도 참조 가능하다.

**설계 철학:** "진실의 단일 원천(Single Source of Truth)". 할루시네이션이 원본을 오염시키지 않도록 격리. 이 레이어의 데이터 품질이 전체 파이프라인 품질을 결정한다.

#### Layer 2 · Wiki — LLM이 생성·유지하는 마크다운 컬렉션

카파시 본인의 위키 규모: **~100개 아티클, ~40만 단어(약 533K 토큰)**. 핵심은 index.md(카테고리별 모든 페이지 목록 + 링크 + 요약)와 log.md(타임스탬프 기록)의 조합이다.

2026년 현재 1M 토큰 컨텍스트가 복수 프런티어 모델의 GA 표준이 되면서, 전체 위키를 단일 컨텍스트로 로드하는 전략이 현실적으로 타당해졌다. 벡터 DB 없이 충분한 Q&A가 가능하다.

#### Layer 3 · Schema — LLM 행동 설계도

**CLAUDE.md 또는 AGENTS.md** 형식. 위키 구조, 컨벤션, 수집·쿼리·유지보수 워크플로 지침을 담는다. LLM에게 "이 위키를 어떻게 유지·확장하라"는 운영 원칙을 제공한다.

의미: OWL의 형식적 공리(axiom)가 마크다운 자연어 지시문으로 대체됐다. 온톨로지 스키마 정의의 민주화다. 온톨로지 엔지니어가 없어도 된다.

### 4대 운영 사이클

① Ingest — 지식 흡수

소스 1개 → 10~15개 위키 페이지 갱신. 흐름: 소재 읽기 → 요약 → index.md 갱신 → 관련 엔티티·개념 수정 → log.md 기록. 새 논문 하나를 읽을 때마다 기존 위키 전체가 소폭 갱신된다.

② Query — 복리 축적

카파시의 핵심 혁신이 여기 있다. 쿼리 답변을 새 위키 페이지로 저장한다. 기존 RAG는 쿼리마다 인덱스를 탐색하고 끝난다(일회성). 카파시 위키는 탐색 결과를 지식 자산으로 누적한다(복리 축적). 카파시가 직접 표현한 대로: _"outputs from queries get filed back into the wiki, so every exploration adds up."_ 그리고 그것이 가능한 이유: _"the wiki is a persistent, compounding artifact."_

③ Lint (헬스 체크) — 지식 정합성 유지

전통 온톨로지의 reasoner(추론기) 역할을 LLM이 수행한다. 모순 탐지, 오래된 주장 확인, 고아 페이지(orphan pages), 누락 개념 식별, 웹 검색으로 최신 사실 확인. 카파시가 명시한 기능: "데이터 불일치 발견, 결락 보완, 새 연결고리 발굴."

④ Future — 다음 단계

두 가지 방향이 제시됐다. 첫째: 위키 → 합성 Q&A 데이터 생성 → 파인튜닝 → 가중치에 지식 내재화. 도메인 전문 LLM을 직접 만드는 경로다. 둘째(Ephemeral Wiki): 프런티어 LLM이 하나의 질문을 받으면, 일시적(ephemeral) 위키 전체를 자동 구성하고 Lint → 루프 → 최종 보고서를 출력한다. 쿼리마다 KG를 즉석 생성하는 패턴이다.

#### 도구 스택

- • **Obsidian**: 위키 IDE, Web Clipper, Graph View 시각화 (MAU 150만+, ARR $2,500만, 평균 사용 시간 43분/일)
- • **qmd** (Tobi Lutke/Shopify CEO 제작): BM25 + 벡터 + LLM 재랭킹 하이브리드, 완전 온디바이스, node-llama-cpp 기반
- • **Marp**: 마크다운 → 슬라이드 자동 생성
- • **Dataview**: 프론트매터 YAML 쿼리로 위키 내 구조화 데이터 탐색
- • **Git**: 위키 버전 관리 (변경 이력 추적, 협업 시 브랜치)

## 3. RAG vs 파인튜닝 vs 카파시 방식 비교

세 가지 접근법은 서로 경쟁하는 것이 아니라 각기 다른 임계점에서 최적화된다. 데이터 규모, 쿼리 빈도, 인간 감사 가능성 요구사항에 따라 적합한 방식이 달라진다.

| 구분 | 전통 RAG | 파인튜닝(FT) | 카파시 방식 |
| --- | --- | --- | --- |
| 지식 저장 위치 | 벡터 DB (외부) | 모델 가중치 (내부) | 마크다운 파일 (외부) |
| 새 사실 정확도 | 0.875 (Ovadia 2024) | 0.504 (Ovadia 2024) | 위키 품질 의존 |
| 상용 API 새 지식 학습률 | — | 37% (FineTuneBench 2024) | — |
| 컨텍스트 갱신 방법 | 재인덱싱 | 재훈련 필요 | 파일 추가/편집 |
| 초기 비용 | 낮음 ($0) | 중~높음 ($2K~$20K) | 낮음 (API 비용만) |
| 운영 비용 | $500~$3,000/월 | 낮음 (훈련 후) | API 토큰 비용 |
| 인간 감사 가능성 | 청크 단위 (낮음) | 불가 (블랙박스) | 높음 (마크다운) |
| 확장성 | 수백만 문서 | 제한 없음 (훈련 시) | ~100개 아티클 스위트스팟 |
| 할루시네이션 위험 | 검색 의존 | 훈련 데이터 의존 | 환각 오염 위험주의 |
| 지식 복리 효과 | 없음 | 없음 | 있음 (쿼리→위키 파일링) |
| 적합 규모 | 대규모 (수백만 문서) | 고빈도 쿼리 (10만+/일) | 소~중규모 (개인·팀) |

************

#### 임계점 기반 의사결정 가이드

- • **카파시 방식 최적:** 개인/소팀, 도메인 지식 축적, 인간 감사가 중요한 환경, ~100개 아티클 규모
- • **RAG 최적:** 수백만 문서, 최신 사실 중요, 새 지식 빈번 추가 (정확도 0.875 vs FT 0.504)
- • **파인튜닝 최적:** 일 10만 쿼리 이상 + 명확히 정의된 반복 태스크 (비용 10~50배 절감)
- • **RAFT 하이브리드:** 도메인 FT + RAG 조합이 각각을 능가. 농업 도메인 FT 단독 81% → FT+RAG 86%(arXiv:2401.08406)

주목할 경쟁 기술: Microsoft GraphRAG는 LLM으로 KG를 추출해 커뮤니티 기반 탐색으로 답변을 생성한다. LinkedIn 사례에서 티켓 해결 시간을 40시간에서 15시간(63%)으로 단축했다. 그러나 1M 토큰 KG 구축에 $20~50 + 수시간 컴퓨팅이 필요하다. LightRAG(2024)는 GraphRAG 대비 10배 토큰 절감, 65~80% 비용 절약. 카파시 방법론은 GraphRAG보다 인간 가독성(auditability)을 우선하며, 중소 규모 도메인에서 비용 효율적이다.

## 4. 기업 도입 현실 — 기회와 함정

### 기회

**비용 파괴:** 엔터프라이즈 KG $1,000만~$2,000만 달러 → LLM 위키는 온프레미스 로컬 LLM(Llama 3, Mistral) 사용 시 API 비용만. 8주 이내 첫 프로토타입 달성 가능(Enterprise Knowledge). KG ROI: 프로덕션 구현 조직이 300~320% ROI를 보고하고 있다(2024~2025).

**미개척 제품 카테고리:** 모든 기업에는 회의록, 이메일, 문서가 raw/ 상태로 존재한다. 이를 LLM 위키로 컴파일하는 기업용 제품이 아직 미개척 상태다. KG 시장 $1.07B(2024) → $6.94B(2030), CAGR 36.6%가 이 기회의 크기를 말해준다.

**생산성 ROI:** McKinsey(2012) 데이터지만 여전히 유효하다 — 직원이 하루 1.8시간(근무일의 25%)을 정보 검색에 소비한다. IDC 기준으로는 하루 2.5시간이다. 지식 관리 도구 도입 시 생산성 20~25% 향상 가능(McKinsey). 카파시가 제시한 "비즈니스: 회의록·문서를 먹이는 내부 LLM 위키" 사용 사례가 정확히 이 문제를 겨냥한다.

**로컬 LLM 프라이버시:** 카파시 방법론은 Llama 3, Mistral 등 온디바이스 LLM을 지원한다. 기업 보안 우려가 큰 환경(금융, 의료, 한국 대기업 포함)에 적합하다.

"The real product problem is not organization, it is epistemic integrity."

— 커뮤니티 비판 (Gist 토론)

### 함정과 비판점

#### ① 할루시네이션 오염 위험 가장 심각

LLM 생성 위키에 잘못된 연결이 저장되면 후속 쿼리를 오염시킨다. Steph Ango(Obsidian CEO)는 볼트 분리(vault separation)를 필수로 권고했다 — 인간이 직접 큐레이션한 볼트와 에이전트 생성 콘텐츠를 별도로 유지해야 한다. Tanwar et al.(2024, arXiv:2510.09359): 파인튜닝은 "poor calibration"을 유발하고, 오류가 가중치에 고착된다.

#### ② 규모 한계

카파시 본인이 인정했다: "a million documents"로는 확장되지 않는다. ~40만 단어(400K 단어) 규모가 현재 컨텍스트 윈도에서 작동하는 한계점이다. 대규모 코퍼스에서는 LlamaIndex(검색 정확도 35% 향상, 2025) 또는 GraphRAG가 더 적합하다.

#### ③ 기술 진입 장벽

Glen Rhodes: "a hacky collection of scripts" — 카파시도 인정했다. CLI 작성, LLM API 설정, Obsidian 커스터마이징이 필요하다. 일반 사용자 접근이 어렵다는 것은 동시에 제품화 기회이기도 하다.

#### ④ 기업 확장의 복잡성

팀 간 모순, 수백만 레코드의 충돌하는 부족 지식(tribal knowledge), 동시 편집 문제는 기본 마크다운 접근법으로 해결이 어렵다. Microsoft 365 Copilot($30/사용자/월), Notion AI(Business $20/사용자/월) 등이 이 영역을 선점 중이다.

#### ⑤ 속도 vs 신뢰 텐션

LLM은 빠르지만 검증이 필요하다. 전통 위키는 느리지만 커뮤니티 모더레이션으로 신뢰를 확보한다. 균형점이 아직 정립되지 않았다 — 기업 도입 시 거버넌스 정책 수립이 선행돼야 한다.

## 5. 페블러스 포지셔닝 — DataClinic이 왜 필수인가

카파시 방법론의 가장 큰 위험은 파이프라인의 입구에서 발생한다. LLM이 아무리 뛰어나도, raw 데이터에 오류가 있으면 위키에 오류가 들어간다. 위키의 오류로 만든 합성 Q&A 데이터로 파인튜닝하면, 오류가 모델 가중치에 영구히 고착된다. Microsoft Research의 phi-1(2023)이 증명한 원칙이 여기 적용된다: "데이터 품질이 모델 규모보다 중요하다."

[raw/ 데이터] → [DataClinic 진단] → [LLM 컴파일] → [마크다운 위키]
                                                               ↓
                                                        [합성 Q&A 생성]
                                                               ↓
                                                       [DataClinic 검증]
                                                               ↓
                                                         [파인튜닝]
                                                               ↓
                                                        [도메인 모델]

### 임계 지점 1: raw/ 입구 품질 진단

카파시 본인이 명시했다: "LLM 기반 헬스 체크 — 데이터 불일치 발견, 결락 보완, 새 연결고리 발굴." 그러나 LLM 헬스 체크는 입력 데이터의 품질 자체를 보증하지 않는다. Steph Ango(Obsidian CEO)가 지적한 "할루시네이션 오염 위험"의 근본 원인은 raw/ 데이터의 품질 불확실성이다.

DataClinic의 Level 1(기본 품질 지표), Level 2(DataLens 신경망 분석), Level 3(도메인 커스텀 진단)으로 입구에서 품질을 보증하면 오염 위험을 사전 차단한다. Elvis Saravia(DAIR.AI)가 강조한 것처럼: "getting the data structure right first"가 효과적 LLM 큐레이션의 핵심이다.

### 임계 지점 2: 합성 데이터 + 파인튜닝 단계

학술 근거가 명확하다:

- •**phi-1(arXiv:2306.11644, 2023):** 1.3B 소형 모델이 "교과서 품질" 합성 데이터로 HumanEval 50.6%, MBPP 55.5% 달성 — 훨씬 큰 모델들과 경쟁. 데이터 품질 > 모델 규모.
- •**Gretel(2024):** 인간 전문가 큐레이션 데이터 대비 고품질 합성 데이터 +73.6% 성능.
- •**Tanwar et al.(arXiv:2510.09359, 2024):** 품질 낮은 파인튜닝 데이터는 "오류 증폭(error amplification)"을 유발. 오류가 가중치에 고착된다.
- •**Amazon Science(arXiv:2409.16341, 2024):** "Quality Matters" — 고품질 데이터 소량이 저품질 데이터 대량보다 우수.
- •**하이브리드 접근법(arXiv:2410.09168, 2024):** 실제 데이터 + 합성 데이터 혼합이 단독 접근법 대비 모든 지표에서 우위.

### 시장 규모 근거

$97B

합성 데이터 시장 전망 (2030)

$3.23B(2023) → CAGR 31~42%

$6.94B

KG 시장 전망 (2030)

$1.07B(2024) → CAGR 36.6%

$62B

기업 지식 관리 시장 전망 (2033)

$20.15B(2024) → CAGR 13.6%

$2.45B

PKM 소프트웨어 시장

CAGR 16.3%

> [!callout]
> "카파시 방법론은 지식 관리를 민주화했다. 그러나 출력 품질은 입력 품질에 달려 있다. DataClinic은 파이프라인의 첫 번째이자 마지막 품질 관문이다."

> 이 시장들이 교차하는 "LLM 기반 도메인 지식 내재화" 영역에서, DataClinic은 파이프라인 품질 보증 레이어로 포지셔닝된다. $97B 합성 데이터 시장에서 "품질 검증"은 독립된 비즈니스 레이어다.

## FAQ

## 참고문헌

### 1차 소스 (카파시)

- 1.Karpathy, A. (2026-04-03). X post on LLM knowledge base. [x.com](https://x.com/karpathy/status/2039805659525644595)
- 2.Karpathy, A. (2026-04-04). GitHub Gist: LLM knowledge base methodology. [gist.github.com](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

### 학술 논문

- 3.Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. _Scientific American_, 284(5), 34–43. (~30,000 citations)
- 4.Pan, S. et al. (2024). Unifying Large Language Models and Knowledge Graphs: A Roadmap. _IEEE Transactions on Knowledge and Data Engineering_. [arXiv:2306.08302](https://arxiv.org/abs/2306.08302)
- 5.Ovadia, O. et al. (2024). Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs. _EMNLP 2024_. [arXiv:2312.05934](https://arxiv.org/abs/2312.05934)
- 6.Gunasekar, S. et al. (2023). Textbooks Are All You Need (phi-1). _Microsoft Research_. [arXiv:2306.11644](https://arxiv.org/abs/2306.11644)
- 7.Tanwar, S. et al. (2024). The Impact of Hallucinations in Finetuned LLMs. [arXiv:2510.09359](https://arxiv.org/abs/2510.09359)
- 8.Zhang, T. et al. (2024). RAFT: Adapting Language Model to Domain Specific RAG. [arXiv:2403.10131](https://arxiv.org/abs/2403.10131)
- 9.LLM-empowered Knowledge Graph Construction and Reasoning: A Survey (2025). [arXiv:2510.20345](https://arxiv.org/abs/2510.20345)
- 10.Edge, D. et al. (2024). From Local to Global: A Graph RAG Approach to Query-Focused Summarization. _Microsoft Research_. [arXiv:2404.16130](https://arxiv.org/abs/2404.16130)
- 11.Guo, T. et al. (2024). LightRAG: Simple and Fast Retrieval-Augmented Generation. [arXiv:2410.05779](https://arxiv.org/abs/2410.05779)
- 12.FineTuneBench (2024). Evaluating LLMs on Fine-Tuning New Information. [arXiv:2411.05059](https://arxiv.org/abs/2411.05059)
- 13.Amazon Science (2024). Quality Matters More Than Quantity in LLM Training. [arXiv:2409.16341](https://arxiv.org/abs/2409.16341)
- 14.Hybrid synthetic+real data approach (2024). [arXiv:2410.09168](https://arxiv.org/abs/2410.09168)

### 업계·시장 소스

- 15.McKinsey Global Institute (2012). The Social Economy: Unlocking Value and Productivity Through Social Technologies.
- 16.MarketsandMarkets (2025). Knowledge Graph Market — Global Forecast to 2030.
- 17.Graph Praxis (2026-02-01). The Ontology Tax: Why Enterprise KGs Stall at 27% Production Rate.
- 18.ZipRecruiter (2025). Ontology Engineer Salary Report, United States.
- 19.Gretel AI (2024). Synthetic Data Performance Benchmarks vs. Human-Curated Data.

<!-- stat-card -->
**📚 뉴로-심볼릭 × 온톨로지 시리즈** — 이 글은 [뉴로-심볼릭 × 온톨로지 허브](/project/NeuroSymbolicOntology/ko/)에서 큐레이션하는 시리즈의 일부입니다. 시스템 1/2 통합, 온톨로지의 형식 토대 역할, 팔란티어·시맨틱 웹·CURK의 다양한 접근까지 — 13편의 글을 한 흐름으로 묶어 두었습니다.
