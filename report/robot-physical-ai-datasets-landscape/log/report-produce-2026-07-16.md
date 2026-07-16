# report-produce 실행 로그 — 로봇·피지컬 AI 공개 데이터셋 지형도 (6종 비교 + provenance 갭)

- slug: `robot-physical-ai-datasets-landscape`
- 실행일: 2026-07-16
- 모드: `standard`
- 시작: 2026-07-16T09:19:22Z
- 종료: 2026-07-16T13:00:54Z
- 총 소요 (단계 합): 1h 16m 37s

> ⛔ 이 파일은 색인되지 않는다 (articles.json/sitemap 미등록). 재현성·투명성 목적으로 보관.

## 단계별 실행

| Phase | 에이전트 | 모델 | 상태 | 소요 | 산출물 |
|-------|---------|------|------|------|--------|
| Pre | topic-coverage-checker | haiku | ok | 3m 3s | `_workspace/report/pre_coverage.md` |
| Pre | topic-value-assessor | sonnet | ok | 3m 3s | `_workspace/report/pre_value.md` |
| 1 | report-planner | opus | ok | 3m 44s | `_workspace/report/00_plan.md` |
| 2 | data-researcher | sonnet | ok | 1m 43s | `_workspace/report/raw-realrobot+synthetic` |
| 2 | industry-researcher | sonnet | ok | 7m 29s | `_workspace/report/02b_industry.md` |
| 3 | report-synthesizer | opus | ok | 7m 11s | `_workspace/report/03_synthesis.md` |
| 4 | report-writer | opus | ok | 12m 8s | `report/robot-physical-ai-datasets-landscape/ko/index.html` |
| 5-A | self-review | sonnet | ok | 18.0s | `—` |
| 5-B | text-reinforce | sonnet | ok | 0.0s | `—` |
| 5-C | image-reinforce | haiku | ok | 0.0s | `—` |
| 5-D | bibliography | haiku | ok | 4m 9s | `report/robot-physical-ai-datasets-landscape/references.json` |
| 5-D.5 | stat-card | sonnet | ok | 4m 9s | `—` |
| 5-E | ko-prose-humanizer | sonnet | ok | 6m 59s | `—` |
| 6 | report-en-writer | opus | ok | 8m 42s | `report/robot-physical-ai-datasets-landscape/en/index.html` |
| 7-A | seo-check | haiku | ok | 5m 45s | `—` |
| 7-B | sns-write | sonnet | ok | 6m 3s | `report/robot-physical-ai-datasets-landscape/sns/` |
| 8 | blog-publisher | haiku | ok | 2m 11s | `—` |

## 단계별 노트

- **Phase Pre (topic-coverage-checker)**: 부분 중복 — 개별 데이터셋 글 6편 존재하나 6종 비교 지형도는 없음
- **Phase Pre (topic-value-assessor)**: 강력 추천 — LeRobot 생태계 공통성 + provenance 갭 각도
- **Phase 1 (report-planner)**: 10섹션 지형도, 대표 제목: 로봇 데이터셋 6종이 모두 같은 형식으로 모였다
- **Phase 2 (data-researcher)**: 기확보 리서치 2트랙(DROID·OXE·GR00T·RoboCasa·MimicGen·LIBERO) 재활용 — 수치·라이선스 교차검증 완료
- **Phase 2 (industry-researcher)**: 정정 7건 확보: PR#286 미병합, RoboCasa365 별도논문, LIBERO N1.7 출처, GR00T LeRobot호환 표현
- **Phase 3 (report-synthesizer)**: Exec Summary 3문단 + 6종 마스터표 + 정정 7건 반영 확인
- **Phase 4 (report-writer)**: 로봇 데이터셋 6종이 모두 같은 형식으로 모였다 — 10섹션·이미지5·SVG2·31400자
- **Phase 5-A (self-review)**: 표준 grep 전부 통과 (이탤릭/틸/그라데이션/비표준h2/다크하드코딩 0)
- **Phase 5-B (text-reinforce)**: Text-First 이미 충족 — 전 이미지 앞 설명 문단 존재, 추가 보강 0
- **Phase 5-C (image-reinforce)**: skip 조건 충족 — 본문 이미지 5개(≥4) + 주제 고유 데이터셋 샘플(DROID·OXE·RoboCasa) + SVG 도식 2. 일반론 아님
- **Phase 5-D (bibliography)**: references.json 16항목 + BibTeX/RIS 버튼 + Scholar 메타
- **Phase 5-D.5 (stat-card)**: stat-card 4개 전부 본문과 일치 확인, 유지 (6종→1형식, ~345K, 250배, 4축 미보존)
- **Phase 5-E (ko-prose-humanizer)**: KO em-dash 40→14(1/1125자), T11 자사점프 0, 총점 통과. stat-card 주석 확정.
- **Phase 6 (report-en-writer)**: EN 927줄(KO 구조일치), og:image=en/image ✓, 이미지 ko공유, em-dash 절제
- **Phase 7-A (seo-check)**: KO/EN 4계층 PASS. description 축약(KO 188→119, EN 341→153). 정적 JSON-LD 제거로 Article 중복 해소(둘 다 1개). subtitle 복원(에이전트 오삭제 교정).
- **Phase 7-B (sns-write)**: 6채널(LinkedIn·X·FB KO/EN) + Medium EN + 비교표 이미지. em-dash 전부 통과.
- **Phase 8 (blog-publisher)**: OG KO/EN 생성, 사이드카 2개, assemble/validate 통과

## 자유 노트 (theme adequity, intervention 등)

- `adequity` (2026-07-16T09:22:25Z): coverage=부분중복(6편 인접, 6종 비교 지형도는 신규) / value=강력추천. 차별화: 6종 나란히 비교 + LeRobot 공통 형식 + provenance 갭
- `warning` (2026-07-16T09:40:19Z): 작성 시 필수 정정 7건 (02b_industry.md 하단) — 특히 PR#286 미병합·RoboCasa365 별도논문·LIBERO 출처·GR00T LeRobot 과잉표현 금지
- `info` (2026-07-16T10:03:00Z): Phase 4.5 JH 리뷰 대기 — KO 초고 완성(85KB, 31400자, 10섹션, 이미지5, 표4, SVG도식2, FAQ8). 렌더 검증 통과.
- `intervention` (2026-07-16T12:25:21Z): Phase 4.5 JH 승인 — 콘텐츠 '베리굳'. 제목 질문형 변경 + provenance→계통추적/생성계보→생성내력 통일 반영 완료.
- `warning` (2026-07-16T12:52:40Z): seo-check 에이전트가 subtitle을 오삭제('JSON-LD 중복 방지' 잘못된 논리) → 교정 복원. 진짜 문제인 정적/동적 JSON-LD 중복은 정적 블록 제거로 해결(KO/EN). 레퍼런스 factory-bench도 같은 중복 있음(별도 정리 필요).
