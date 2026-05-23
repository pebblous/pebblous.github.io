# report-produce 실행 로그 — ICLR 2026 학술 심사 위기 — AI가 AI를 심사한다

- slug: `iclr-2026-ai-peer-review-crisis`
- 실행일: 2026-05-23
- 모드: `express`
- 시작: 2026-05-23T15:32:08Z
- 종료: 2026-05-23T16:26:54Z
- 총 소요 (단계 합): 1h 10m 28s

> ⛔ 이 파일은 색인되지 않는다 (articles.json/sitemap 미등록). 재현성·투명성 목적으로 보관.

## 단계별 실행

| Phase | 에이전트 | 모델 | 상태 | 소요 | 산출물 |
|-------|---------|------|------|------|--------|
| Pre | topic-coverage-checker | haiku | ok | 2m 45s | `_workspace/report/pre_coverage.md` |
| Pre | topic-value-assessor | sonnet | ok | 2m 45s | `_workspace/report/pre_value.md` |
| 1 | report-planner | opus | ok | 4m 37s | `_workspace/report/00_plan.md` |
| 2 | arxiv-researcher | opus | ok | 4m 49s | `_workspace/report/02a_arxiv.md` |
| 2 | industry-researcher | sonnet | ok | 8m 9s | `_workspace/report/02b_industry.md` |
| 2 | data-researcher | sonnet | ok | 8m 59s | `_workspace/report/02c_data.md` |
| 3 | report-synthesizer | opus | ok | 7m 24s | `_workspace/report/03_synthesis.md` |
| 4 | report-writer | opus | ok | 11m 38s | `report/iclr-2026-ai-peer-review-crisis/ko/index.html` |
| 5-A | self-review | sonnet | ok | 16.0s | `—` |
| 6 | report-en-writer | opus | ok | 10m 24s | `report/iclr-2026-ai-peer-review-crisis/en/index.html` |
| 7-A | seo-check | haiku | ok | 1m 27s | `—` |
| 7-B | sns-write | sonnet | ok | 3m 6s | `report/iclr-2026-ai-peer-review-crisis/sns/` |
| 8 | blog-publisher | haiku | ok | 4m 9s | `—` |

## 단계별 노트

- **Phase Pre (topic-coverage-checker)**: 부분 중복 + 신규 각도. 인접 5편(AI Scientist v2, AI 조직 침묵, 145개 AI 법안 등). 3가지 각도 — 데이터 품질 / 거버넌스+심리 / 규제+투명성.
- **Phase Pre (topic-value-assessor)**: 강력 추천 — DataClinic이 진단하는 'AI 출력 품질 결함'의 학술 버전 프레임 가능. 5000자+ 적합.
- **Phase 1 (report-planner)**: Thesis: AI가 AI를 심사하는 메타 신뢰 붕괴 — DataClinic 학술버전 프레임. 7섹션 6800자. Hub: AI 신뢰성 시리즈
- **Phase 2 (arxiv-researcher)**: 12편(핵심 8 + 보조 4). Liang 2024 16.9% → Pangram 2026 21% 시계열. Sadasivan(2023) detector 이론 상한. Walters 2023 GPT-4 환각 인용 18%/GPT-3.5 55%. Yu 2026 788,984편 데이터셋.
- **Phase 2 (industry-researcher)**: ICLR 2026 76139 리뷰 중 21% AI. ICML 2026 강경(497편 데스크 리젝) / AAAI 2026 공식 AI 보조 / NeurIPS 무작위 실험. Hidden prompt injection arXiv 18편(98.6% 조작 성공). Pangram: AI 리뷰가 더 높은 점수(sycophancy). 한국 학회 정책 공백.
- **Phase 2 (data-researcher)**: stat-card 확정: 21% / 76,139편(공식) / 환각 인용 50+건 / 1년 급등 15.8→21% / 자기보고 9% vs 탐지 36%. ICLR 투고 37배(2017→2026). Detector 신뢰도 논쟁: Pangram FP 1/10만 vs Stanford GPTZero 22%. 한국 정책 데이터 공백 자체가 발견 소재.
- **Phase 3 (report-synthesizer)**: mainTitle 'AI가 AI를 심사한다 — ICLR 2026, 리뷰 76,139편의 21%가 AI였다'. 5번째 징후(prompt injection) 추가. Detector 양면 표기. Liang→Pangram 시계열 §1 메인 차트. 한국 정책 공백 §5 핵심. FAQ 9, refs 24, viz 5.
- **Phase 4 (report-writer)**: 15,333자, 8섹션, FAQ 9, refs 25(학술12+정책9+페블러스인접4), stat-card 3(21%/76139/5징후), 차트 2(line+bar), 표 5, inline 시리즈 4편. Self-check 모두 통과.
- **Phase 5-A (self-review)**: grep self-check 전부 통과 (0/9/0...). 차트 2개·표 5개 모두 설명 문단 선행 확인. Text-First OK.
- **Phase 6 (report-en-writer)**: 5529 words. mainTitle 'When AI Reviews AI'. 15 grep checks all pass. Korea context globalized (KIISE/KCC/KAI/NRF + glosses).
- **Phase 7-A (seo-check)**: 자동 진단+수정: KO title 46→59자, EN title 88→64자, EN desc 336→135자, KO desc 171→145자. hreflang x-default→KO OK, 정적 TechArticle 없음 OK. OG 이미지 KO 184KB / EN 182KB 생성.
- **Phase 7-B (sns-write)**: 4 files. self-check 통과 (이모지 0, 농업 메타포 0, 광고문구 0). 핵심 메시지 일관.
- **Phase 8 (blog-publisher)**: PR #195 https://github.com/pebblous/pebblous.github.io/pull/195. 457 articles. commit 137c14e1.

## 자유 노트 (theme adequity, intervention 등)

- `adequity` (2026-05-23T15:34:53Z): coverage=부분중복(인접 5편)+신규각도, value=강력추천 — express 자동 진행. 차별화 1순위: 데이터 품질 중심 (DataClinic 포지셔닝)
- `info` (2026-05-23T15:48:29Z): 수치 보정: 1차 출처는 Pangram Labs(howaiworks는 2차 보도). 75,800편은 Pangram 분석 샘플, 공식 ICLR 리뷰 총수 76,139편. synthesizer가 통합 시 양쪽 명시 필요.
- `warning` (2026-05-23T15:48:29Z): Pangram이 자체 도구로 자체 탐지 — 신뢰도 검증 별도 필요. Stanford 다장르 GPTZero FP 22% 사례 병기 권장. 단일 출처 의존 위험.
- `info` (2026-05-23T16:07:48Z): Phase 5-B/5-C skip: writer가 차트/표 앞 문단 모두 포함, 본문 15333자 충분.
- `info` (2026-05-23T16:26:54Z): Phase 8.5 cloudflared tunnel: https://wisdom-kruger-supplies-willing.trycloudflare.com — KO=200 EN=200 (임시, 세션 종료 시 만료)
