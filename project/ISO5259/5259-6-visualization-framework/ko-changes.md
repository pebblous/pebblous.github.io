# polish-ko — 변경 메모 (EN 번역 시 참조)

대상: `project/ISO5259/5259-6-visualization-framework/ko/index.html`

## 진단 결과 (Warm Expert Tone / ko-prose-humanizer 11 tell)

write-ko + reinforce 산출 원고는 이미 JH 보이스 기준을 대체로 충족. 정량 점검:

- **T1 (em-dash 동격 재진술)**: 본문 흐름 문장 내 재진술 em-dash는 사실상 1건(§4.1 도입부)뿐. 나머지 "—"는 (a) 섹션 헤딩의 부제 구분자, (b) 불릿 "용어 — 설명" 정의형, (c) 참고문헌 ISO 공식 영문 제목 — 모두 정본 허용 패턴. 위반 아님.
- **T2 (명사형 종결 일색)**: 종결 어미 다양(돕는다·한다·낫다·된다·밀어붙인다·본다). 단조로움 없음.
- **T6 (규칙적 볼드 요약)**: key-insight는 §1·§3·§6에만, 전 섹션 균일 아님 — 정상.
- **T11 (자사 연결 작위성)**: 본문 결론과 분리된 Editor's Note로 처리됨 — 이미 모범 처리. 유지.

→ 제목(mainTitle·subtitle·pageTitle)은 정본 위반 없음 → **보존**(재작성 안 함).

## 실제 수정 (1건, 산문 질감)

**§6 DataClinic 관점 도입 문단** — "흐름"이 연속 두 문장에서 반복되던 구조를 해소.

- Before: "…이해관계자가 읽을 수 있게 전달하는 **흐름**이 그것이다. 진단 결과를 차트로 요약하고 … 제공하는 **흐름**은 5259-6이 말하는 '직관적 이해'·'목표 대비 판별'과 같은 문제를 이미 풀고 있다."
- After: "진단 결과를 차트로 요약하고, 목표 대비 상태를 표시하고, 데이터셋 간 비교와 시간축 추세를 제공하는 일 — 이것이 5259-6이 말하는 '직관적 이해'와 '목표 대비 판별'이 풀려는 문제이고, DataClinic은 이미 그 문제를 붙들고 있다."
- EN 반영: 대응 문단에서 반복 명사(flow/pipeline 등) 중복을 피하고 "this is the very problem … DataClinic is already wrestling with" 류의 능동·집중 구조로 번역.

## 보존 항목 (변경 없음)

- 표(series-table), 인라인 SVG 도식 3개(스코어카드/4형태 아이콘/파이프라인), 캡션, 내부 링크, 참고문헌·인용 버튼, FAQ 7개, PebblousPage.init config 전체.
- 색: 오렌지 정규화 상태 유지(teal 0).
