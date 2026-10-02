#!/usr/bin/env python3
"""
title-census.py — 한글 제목 전수조사 (제목 정본 v3 — docs/ko-style-standard.md §4-2, 2026-09-13 형님 판정 · 핵심 검색어 2026-09-28 형님 판정).

정본: 주인공 이름(핵심 검색어)을 담고, 중학생이 알아듣고 누르고 싶은 제목. 세 형태(질문형·신문 명사형·현재형 주장) 중 하나로 쓰고,
과거형 서술 종결·제목 안 수치·업계 용어·AI 어투를 금지한다. 주어 먼저·20~35자·평이한 낱말은 유지.
핵심 검색어(main search keyword)는 사람들이 이 이야기를 찾으려고 치는 이름이다(the name people type to find this story) —
글 head 의 <meta name="pb-search-keyword" content="…"> 와 선택 <meta name="pb-search-keyword-forms" content="Jev|제브|TypeSafe Jev">(인정 표기, | 로 가름)에서 읽는다.
이 도구는 그중 코드로 잴 수 있는 것만 잰다 — 핵심 검색어가 mainTitle 에 있는가·pageTitle 에 있는가(앞 1/3 권장)·기록이 이름인가·기획 고정값과 같은가·
과거형 서술 종결(종결 음절 받침 ㅆ)·제목 안 아라비아 수치(핵심 검색어 속 숫자는 이름의 일부라 세지 않는다)·영문 약어 4자 이상(권고)·
길이·줄표/콜론의 허용 형태·인용+반전·대조 공식·미끼·키워드 나열·잘린 명사형·수수께끼 패턴·관형절 사슬.
중학생 시험(이해)·클릭 시험은 title-gate 의 눈감은 심판(LLM)과 사람이 본다 — 검사기 통과 ≠ 좋은 제목.

articles.json의 published=true, language=ko 전 글에 대해 제목 3슬롯을 결정론 규칙으로 채점한다:
  - mainTitle  (= articles.json title, 카드/Hero 제목) — 가장 엄격. 핵심 검색어가 없으면 결함
  - subtitle   (글 HTML의 PebblousPage.init config에서 추출) — 리드문 기준
  - pageTitle  (글 HTML config, 없으면 <title>) — 검색 결과 제목. 핵심 검색어 필수(앞 1/3 권장)·브랜드 꼬리·mainTitle 복사 금지·<title> 과 같아야 한다

출력은 admin 제목 검토 콘솔(/admin/titles)의 데이터 계약(title-review.ts loadCensus)과 호환:
  [{slug, mt_score, mt_reason, mt_fix, ..., keyword}]  — mt_score 낮을수록 우선 검토 대상.
채점 스케일: 0~10 (10 = §0 통과). 감점 근거는 mt_labels/mt_reason에 남긴다.
mt_fix(제안 새 제목)는 이 도구가 만들지 않는다 — 규칙 위반 목록을 근거로 사람/LLM이 채운다.

사용:
  python3 tools/title-census.py                     # cwd의 articles.json → _workspace/title-review/titles_scored.json
  python3 tools/title-census.py --repo <클론경로>   # 다른 클론 대상
  python3 tools/title-census.py --dry-run           # 파일 안 쓰고 통계만
  python3 tools/title-census.py --min-score 7       # 해당 점수 미만만 출력(리포트용)
  python3 tools/title-census.py --check-html <글/ko/index.html> [--check-html …]
                                                    # 게이트 모드: 3슬롯 판정 JSON, 위반 있으면 exit 1
  python3 tools/title-census.py --check-html <파일> --keyword Jev --keyword-forms 'Jev|제브|TypeSafe Jev'
                                                    # 핵심 검색어를 메타 대신 지정(단일 파일 검사·옛 글 재현용)
  python3 tools/title-census.py --check-html <파일> --require-keyword --pinned-keyword Jev --pinned-forms 'Jev|제브'
                                                    # 엔진 title-gate 가 새 글에 붙이는 것 — 기록 없음 = 결함, 기획 고정값과 대조

기존 titles_scored.json이 있으면 titles_scored-<UTC시각>.bak.json 으로 백업 후 덮어쓴다.
"""
import argparse
import datetime
import html
import json
import os
import re
import sys
import unicodedata

# ── 제목 정본 v3 결정론 규칙 (docs/ko-style-standard.md §4-2, 2026-09-13) ──────────
# 인용 검출 — 실제 인용(쌍)만 잡는다. 영어 아포스트로피(소유격 's·축약 n't·'re 등)는
# 정상 문법이라 제외한다(2026-07-11 오탐: "MAI-Thinking-1's"가 따옴표로 오판돼 교정 불가 잔존).
# 낱말 하나를 작은따옴표로 강조하는 것('유예')은 허용한다(2026-09-11 정본). 자는 8자 이하 — v3(2026-09-13) 형님 채택
# "‘인지 바이러스’일까?"·심판 추천 "‘못 찾아서’일까?"·"'근거 몇 겹'인지" 처럼 짧은 구도 강조라, 공백 유무는 보지 않는다.
DOUBLE_QUOTES = re.compile(r'["“”「」『』]')
SINGLE_SPAN = re.compile(r"‘([^’]*)’|'([^']*)'")
_EMPHASIS_MAX = 8
def _strip_apostrophes(t: str) -> str:
    return re.sub(r"(?<=\w)'(?=(s|ll|re|ve|d|m|t|clock)\b)|(?<=s)'(?!\w)|n't|\b[OoDdLl]'(?=[A-Z])", '', t)
def _has_quote(t: str) -> bool:
    """큰따옴표·겹낫표는 인용. 작은따옴표는 짝지어 감싼 내용이 짧은 낱말·구(공백 포함 8자 이하)면 강조로 허용,
    그보다 길면 인용으로 본다. 짝이 안 맞는 곧은 홑따옴표(아포스트로피 제외)도 인용 용도."""
    if DOUBLE_QUOTES.search(t):
        return True
    t2 = _strip_apostrophes(t)
    for m in SINGLE_SPAN.finditer(t2):
        inner = m.group(1) if m.group(1) is not None else m.group(2)
        if len(inner) > _EMPHASIS_MAX:
            return True
    rest = SINGLE_SPAN.sub('', t2)
    return "'" in rest or '‘' in rest or '’' in rest
# 발화 인용 + 반전: "X라고 말했다, Y" — 따옴표 없이도 잡는다.
# 홑 '고'는 '보고했다,'·'읽고 썼다,'를 인용으로 오판하므로 인용 어미(라고·다고·냐고·자고)만 본다(2026-09-11 리뷰).
SPEECH_TWIST = re.compile(r'(이?라고|다고|냐고|자고)\s*(말했|했|밝혔|썼|불렀)[다고]?\s*[,，]')
CONTRAST = re.compile(r'(?:[가이은는를]\s*)?아니라|같은\s+\S+.{0,12},\s*다른')
INCOMPLETE_END = re.compile(r'(이후|전략|조건|과제)\s*$')
# 잘린 명사형 -기 종결: "…을/를 옮겨 적기"처럼 동사구를 -기로 끊은 것만(전기·위기 같은 명사는 제외).
# 앞 낱말이 연결형(받침 없이 ㅏ/ㅐ/ㅓ/ㅔ/ㅕ/ㅘ/ㅙ/ㅝ/ㅞ 모음으로 끝: 읽어·옮겨·모아·해)이거나 목적격 조사(을/를)일 때만.
_CONNECTIVE_JUNG = {0, 1, 4, 5, 6, 9, 10, 14, 15}
def _is_connective(tok: str) -> bool:
    if tok.endswith(('을', '를')):
        return True
    c = tok[-1]
    if not ('가' <= c <= '힣'):
        return False
    code = ord(c) - 0xAC00
    return code % 28 == 0 and (code // 28) % 21 in _CONNECTIVE_JUNG
# 명사 '~기'는 동사구가 아니다 — 이 블로그의 핵심 어휘(데이터 진단기·생성기·판별기)와 흔한 2자 명사(위기·전기·열기).
# 앞 낱말이 받침 없는 모음으로 끝나는 근사('데이터'·'시대'·'투자')가 이들을 잡던 오탐을 막는다(2026-09-11 리뷰).
_NOUN_GI_SUFFIX = ('생성기', '진단기', '판별기', '분류기', '탐지기', '검출기', '평가기', '측정기', '변환기', '번역기',
                   '검색기', '추론기', '학습기', '계산기', '가속기', '분석기', '처리기', '선별기', '조립기', '인식기')
_NOUN_GI_WORD = set('위기 경기 전기 시기 분기 장기 단기 초기 중기 말기 인기 열기 용기 무기 기기 계기 동기 대기 '
                    '자기 사기 국기 조기 정기 학기 상기 하기 반기 세기 주기 기 연기 공기 향기 활기 유기 배기 증기 '
                    '감기 이야기 도자기 자전거'.split())
def _is_noun_gi(tok: str) -> bool:
    return tok in _NOUN_GI_WORD or tok.endswith(_NOUN_GI_SUFFIX)
def _gerund_end(t: str) -> bool:
    toks = t.strip().split()
    if len(toks) < 2:
        return False
    last = toks[-1]
    if _is_noun_gi(last):
        return False
    return bool(re.fullmatch(r'[가-힣]{1,4}기', last)) and _is_connective(toks[-2])
# '충격'은 경제 용어(고용 충격·공급 충격·일자리 충격)로 흔하므로 단독 훅(충격적·문두·문미·감탄)일 때만 미끼로 본다(2026-09-11 리뷰).
CLICKBAIT = re.compile(r'충격적|^\s*충격|충격\s*[!?]|충격\s*$|비밀(?!유지)|숨긴|N가지|\d+가지\s*비밀')  # 비밀유지계약(법률 용어)은 미끼가 아니다
BALANCED_PAIR = re.compile(r',\s*(그러나|하지만)')
TILDE = re.compile(r'~')
# 수수께끼: 결론을 감추고 뒤에서 푸는 꼴. "~쪽은 …였다" · "…것은 …였다" · 주어 없이 "무엇을 …"로 시작.
RIDDLE = re.compile(r'(쪽|것|곳|답|범인|승자|이유)[은는]\s.*(였다|이었다|였을까)\s*$')
RIDDLE_OPEN = re.compile(r'^\s*(무엇을|무엇이|무엇으로|무엇인지|어떤\s*것을)\s')
# 줄표: "— 출처/기관/수치 꼬리"만 허용. 꼬리가 문장인지는 길이가 아니라 형태로 잰다(2026-09-11 리뷰) —
# 서술·의문 종결(다/까/뿐)·쉼표·조사(은/는/을/를)가 있으면 문장(여운 꼬리)이고, 없으면 출처/기관/수치 꼬리다.
# 길이 상한은 한글 20자 — 라틴·숫자·공백은 반 자로 세어 기관명("Stanford HAI AI Index 2026"·"Nature 게재 4,130만 편 분석")을 품는다.
# 이/가/도/의는 명사 끝음절과 겹쳐(평가·차이·회의·제도) 조사로 세지 않는다. 자릿수 쉼표(4,130)는 쉼표가 아니다.
DASH = re.compile(r'\s*[—–]\s*|\s+-\s+')   # 하이픈-마이너스 꼬리(' - ')도 꼬리로 본다(과거형 새어 나감 방지)
_DASH_TAIL_MAX = 20
SENTENCE_END = re.compile(r'(다|까|요|네|지)\s*[.?!]?\s*$')
_TAIL_SENTENCE_END = re.compile(r'(?:[가-힣](?:다|까|죠|네요|지요)|뿐)\s*[.?!…]*\s*$')
_TAIL_PARTICLE = re.compile(r'[가-힣](은|는|을|를|와|에|에서|으로|에게|까지|부터)(?=\s|$)|[A-Za-z0-9](이|가|은|는|을|를|의|도|와|과|에|로|으로|에서)(?=\s|$)')
_TAIL_COMMA = re.compile(r'(?<!\d)[,，]|[,，](?!\d)')
# 출처/기관/수치 꼬리의 꼴: 낱말 둘 이하("— 앤트로픽"·"— 스탠퍼드 연구")이거나, 숫자·라틴 고유명사가 있거나, 출처 명사로 끝난다.
# 셋 다 아니면(예: "— 자율 결제 시대의 데이터 신뢰 조건") 출처가 아니라 부제를 줄표로 이어 붙인 것이다.
_SOURCE_NOUN_END = re.compile(
    r'(연구|보고서|분석|조사|발표|인터뷰|자료|통계|리포트|논문|기사|데이터|진단기|진단|입법예고|백서|설문|연구소|연구팀|연구원|'
    r'대학|성명|판결|결정|보도|해설|증언|기고|칼럼|발언|공시|실적|집계|추산|추정|전망|경고|권고|지침|보고|발표문|개정안|법안|판례)\s*$')
def _is_source_tail(tail: str) -> bool:
    toks = tail.split()
    return len(toks) <= 2 or bool(re.search(r'\d|[A-Za-z]', tail)) or bool(_SOURCE_NOUN_END.search(tail))
def _tail_len(tail: str) -> float:
    return sum(1.0 if '가' <= c <= '힣' else 0.5 for c in tail)
def _dash_verdict(t: str):
    """반환: None(줄표 없음) | 'ok' | 위반 라벨."""
    parts = DASH.split(t)
    if len(parts) == 1:
        return None
    if len(parts) > 2:
        return '줄표 2개+'
    head, tail = parts[0].strip(), parts[1].strip()
    if not head or not tail:
        return '줄표 꼬리 비었음'
    if _TAIL_COMMA.search(tail) or _TAIL_SENTENCE_END.search(tail) or _TAIL_PARTICLE.search(tail):
        return '줄표 꼬리가 문장(출처/기관/수치 꼬리만 허용)'
    if _tail_len(tail) > _DASH_TAIL_MAX:
        return f'줄표 꼬리가 김(한글 {_DASH_TAIL_MAX}자 초과 — 출처/기관/수치 꼬리만 허용)'
    if not _is_source_tail(tail):
        return '줄표 꼬리가 출처/기관/수치가 아님(부제를 줄표로 이어 붙임)'
    return 'ok'
# 콜론: "X: Y"에서 X가 짧은 이름표(주체·사건, 12자 이하)일 때만 허용. 콜론 2개+ 위반.
# 이름표가 아닌 설명 머리("정리하면:"·"주의할 점:") — 연결어미(면/서/고/며)·의존명사(점/것/이유/방법)·종결로 끝나면 위반.
# 전각 콜론(：)은 뒤에 공백이 없어도 콜론이다("UNECE：AI …"). 반각 콜론은 시각(10:30)과 구분하려 뒤 공백을 요구한다.
# 길이는 줄표 꼬리와 같은 자(한글 1·라틴/숫자/공백 0.5)로 재어 "Data Greenhouse:"·"Physical AI 허브:" 같은 라틴 이름표를 품는다.
# 이름표 안에 관형절("AI에게 없는 한 가지:")·조사(은/는/을/를)가 있으면 이름표가 아니라 절이다.
COLON = re.compile(r'\s*(?::\s+|：\s*)')
_COLON_LABEL_MAX = 12
_COLON_LABEL_BAD_END = re.compile(r'(하면|되면|이면|라면|다면|자면|면서|해서|어서|아서|여서|이고|하고|하며|이며|점|것|이유|방법|까닭|가지)\s*$')
_COLON_LABEL_PARTICLE = re.compile(r'[가-힣](은|는|을|를)(?=\s|$)')
def _colon_verdict(t: str):
    parts = COLON.split(t)
    if len(parts) == 1:
        return None
    if len(parts) > 2:
        return '콜론 2개+'
    label, body = parts[0].strip(), parts[1].strip()
    if not label or not body:
        return '콜론 뒤 비었음'
    if (_tail_len(label) > _COLON_LABEL_MAX or SENTENCE_END.search(label) or _COLON_LABEL_BAD_END.search(label)
            or _COLON_LABEL_PARTICLE.search(label) or _adnominal_chain(label)[0] > 0):
        return '콜론 앞이 이름표가 아님(12자 이하 주체·사건만 허용)'
    return 'ok'
# 키워드 나열: 구분 기호(쉼표·가운뎃점·빗금·세로줄)로 2번 이상 끊기고 조사·종결이 없음.
# 신문 1면 꼴("X, Y·Z까지 확산")은 나열이 아니다 — 보조사(까지·부터·넘어·마다·처럼)와 신문형 명사 종결(확산·금지·추진)을
# 조사·종결로 친다(2026-09-11 리뷰: "멀티에이전트 AI, 금융 넘어 제조·물류까지 확산"이 나열로 오판됐다).
_SEPARATORS = re.compile(r'[,，·/|]')
_PARTICLE_OR_END = re.compile(
    r'[가-힣](은|는|이|가|을|를|의|에|에서|에게|로|으로|와|과|도|다|까|까지|부터|넘어|마다|처럼|조차|마저|보다|로서|로써|가\?)(\s|$)')
_HEADLINE_NOUN_END = re.compile(
    r'(확산|확대|금지|추진|도입|전환|급증|급감|감소|증가|상승|하락|출시|발표|공개|확정|통과|철회|중단|착수|돌입|가속|본격화|현실화|'
    r'무산|연기|폐지|시행|개정|제정|합의|결렬|승인|반대|찬성|촉구|경고|우려|논란|주목|부상|등장|시작|종료|마감|임박|예고)\s*$')
def _is_keyword_list(t: str) -> bool:
    return len(_SEPARATORS.findall(t)) >= 2 and not _PARTICLE_OR_END.search(t) and not _HEADLINE_NOUN_END.search(t)
# 관형절 사슬 근사: 관형형 꼴로 끝나는 낱말 뒤에 한글 낱말이 이어지는 자리를 센다.
# 강한 관형형 = "~는/~던" + -ㄹ 관형형 음절(할·될·볼·갈…). 약한 관형형 = -ㄴ 음절(한·된·인·본·민…) — 이쪽은
# 명사 끝음절(일본·개인·시민·국민·기준·통신)과 겹쳐 오탐이 잦으므로 경고(-1)에만 쓴다(2026-09-11 리뷰).
# 조사 결합형(으로는·에는·에서는)과 라틴+는(AI는)은 관형형이 아니다. 하드(-3)는 강한 관형형이 2겹 이상이면서
# 35자를 넘을 때만 — v3 에서는 권고 감점(-1)이다(정본 v3 '세는 자' 표: 수수께끼·장황은 권고, 위반은 과거형·수치 나열 등).
_ADNOMINAL_N = set('한된인온간난린킨낸든운진친쓴본산준센긴힌신잔찬튼둔뜬선건뛴민빈딘')
_ADNOMINAL_L = set('할될볼갈올쓸낼릴줄알살킬찔밀')   # '일'(할 일)·'들'(사람들)은 명사와 겹쳐 뺀다
_PARTICLE_NEUN = re.compile(r'(으로는|로는|에는|에서는|와는|과는|보다는|까지는|부터는|에게는|마다는|한테는)$')
_COMMON_N_NOUNS = set('일본 개인 시민 국민 기준 온라인 통신 사진 사람 인간 기관 법안 방안 산업 기업 정부 시간 공간 '
                      '부문 전문 자본 본인 한국 미국 중국 영국 독일 대만 한 원인 언론 여론 정권 인권 자원 기간 순간 '
                      '지원 병원 공원 회원 직원 학원 의견 조건 사건 물건 발견 실험 경험 위험 보험 시험 모델 신뢰 신문 '
                      '주민 농민 어민 난민 이민 문 돈 손 눈 산 선 전선 노선 우선 시선 진 원 반 판 관 단 안 간 만 온 은'.split())
# "~는"이 관형형인지 주격 보조사인지: 어간 끝음절에 받침이 있으면(먹는·있는·없는·읽는·남는) 언제나 동사다 — 명사 뒤 보조사는 '은'이
# 붙는다. 받침이 없으면(하는·되는·만드는 vs 데이터는·역사는·정부는) 동사 어간으로 흔한 끝음절만 관형형으로 본다.
_VOWEL_VERB_FINAL = set('하되이르드우오나내기쓰뜨크타펴푸쳐꺼끄깨싸찌파켜캐쥐')
def _neun_is_adnominal(tok: str) -> bool:
    stem = tok[:-1]
    c = stem[-1]
    if not ('가' <= c <= '힣'):
        return False
    if (ord(c) - 0xAC00) % 28 != 0:   # 받침 있음
        return True
    return c in _VOWEL_VERB_FINAL
def _adnominal_kind(tok: str):
    """'strong'(는/던/ㄹ) | 'weak'(ㄴ) | None."""
    if len(tok) < 2 or not ('가' <= tok[-1] <= '힣') or not ('가' <= tok[-2] <= '힣'):
        return None
    if tok in _COMMON_N_NOUNS:
        return None
    if tok.endswith('던'):
        return 'strong'
    if tok.endswith('는'):
        return 'strong' if not _PARTICLE_NEUN.search(tok) and _neun_is_adnominal(tok) else None
    if tok[-1] in _ADNOMINAL_L:
        return 'strong'
    if tok[-1] in _ADNOMINAL_N:
        return 'weak'
    return None
def _adnominal_chain(t: str):
    """반환 (강한 관형형 사슬 수, 전체 사슬 수)."""
    toks = re.sub(r'[^\w\s가-힣]', ' ', t).split()
    strong = total = 0
    for a, b in zip(toks, toks[1:]):
        k = _adnominal_kind(a)
        if k and re.match(r'[가-힣]', b):
            total += 1
            if k == 'strong':
                strong += 1
    return strong, total
_ADNOMINAL_WARN = 3      # 전체 사슬(강+약) 3회 이상 → 경고 -1
_ADNOMINAL_HARD = 2      # 강한 사슬 2겹 이상 + 35자 초과 → 장황 -3
_ADNOMINAL_LONG = 35

# ── v3 (2026-09-13 형님 판정): 과거형 서술 종결 · 제목 안 수치 · 영문 약어 ─────────────────
# 과거형 서술 종결(~했다·~였다·~았다/었다) = 위반. 사건 보고문이 된다 — 라이브 10편 중 6편이 이것으로 실패했다.
# 자: 본문 절(줄표 꼬리·콜론 이름표를 뗀 부분)의 마지막 어절이 "다"로 끝나고, 그 앞 음절의 받침이 ㅆ(종성 index 20)이면 과거형.
# 예외: 그 음절이 있·없·겠이면 제외(있다·없다·소용이 없다 는 현재, 겠다 는 추측). 물음표 종결("~였을까?")은 질문형이라 제외.
# 찾았다·그대로였다·잡았다·줄였다·붙었다·알 수 없었다·있었다·늘었다 = 위반 / 찾는다·없앤다·사들인다·소용이 없다·가르친다 = 통과.
_PAST_EXCEPT = set('있없겠')
_JONG_SS = 20
def _body_clause(t: str) -> str:
    """줄표 꼬리("— 출처")와 콜론 이름표("X: ")를 뗀 본문 절."""
    parts = DASH.split(t)
    body = parts[0] if len(parts) >= 2 else t
    cparts = COLON.split(body)
    if len(cparts) == 2:
        body = cparts[1]
    return body.strip()
def _is_past_end(t: str) -> bool:
    body = re.sub(r'[\s.!…]+$', '', _body_clause(t))
    if not body or body.endswith(('?', '？')):
        return False
    if not body.endswith('다') or len(body) < 2:
        return False
    prev = body[-2]
    if not ('가' <= prev <= '힣') or prev in _PAST_EXCEPT:
        return False
    return (ord(prev) - 0xAC00) % 28 == _JONG_SS
# 제목 안 수치: 중학생은 수치로 기사를 못 알아본다 — 수치는 부제로. 아라비아 숫자 덩이("1억 5,100만"은 한 덩이, 단위는 덩이에 딸린다)를
# 제목 전체(꼬리 포함)에서 센다. 1개 = 권고 감점 1, 2개 이상 = 위반. 연도("2030년")·달("9월")·"3분의 2"의 3·2 도 아라비아라 센다(정본대로).
# 한글 수사("열에 여덟"·"두 배")는 수치가 아니다. 라틴 글자에 붙은 숫자(GPT-4·H100)는 이름의 일부라 세지 않는다.
_NUMBER_CHUNK = re.compile(r'(?<![A-Za-z\d])(?<![A-Za-z]-)\d[\d,.]*(?:\s*(?:억|만|천|백|조)(?:\s*\d[\d,.]*)?)*')
def _count_numbers(t: str) -> int:
    return len(_NUMBER_CHUNK.findall(t))
# 영문 약어 4자 이상(CRISPR·VLDB·UNECE): 아는 사람만 누른다 — 권고 감점 1(위반은 아니다). 중학생이 아는 상용 약어는 허용 목록.
COMMON_ACRONYMS = frozenset(
    'AI LLM SNS GPU CPU NPU TPU EU CT MRI API IT PC TV DNA RNA GPT USB LED OLED HTML HTTP NASA NATO OECD WHO IMF UN '
    'FDA CEO CTO GDP KAIST UNESCO FIFA IOC KBS MBC SBS YTN'.split())
_ACRONYM = re.compile(r'(?<![A-Za-z])[A-Z]{4,}(?![a-z])')
def _unknown_acronyms(t: str):
    return [a for a in _ACRONYM.findall(t) if a not in COMMON_ACRONYMS]
# (옛 "주어 실종 훅"(2026-07-19: 숫자 덩이 2개+ & 도메인 명사 0)은 v3 의 "수치 나열"(숫자 덩이 2개+ = 위반)에 포함돼 걷어냈다.)


# 업계 용어 목록(2026-09-18 형님 판정 "쓰레기 같은 부제"): 제목에 있으면 위반(-3), 부제·검색 제목은 권고(-1) — 부제도 중학생 시험.
# 읽힘 자체는 코드가 못 재고 심판(2단계 subtitle_understand)이 잰다. 이 목록은 그중 낱말 하나로 잡히는 부분만 센다.
_JARGON = ('거버넌스', '프레임워크', '파이프라인', '레거시', '온프레미스', '온보딩', '컴플라이언스', '이니셔티브', '얼라인먼트', '오케스트레이션')
def _jargon_hits(t: str):
    return [w for w in _JARGON if w in t]
# 순우리말 풀이 술어 '재다'류 = 위반(형님 2026-09-15: "'~재다'는 '~측정하다'로"). 헤드라인은 한자어 술어가 축약적이고 권위 있어 보인다.
# 재작업·재도전·존재는·잰걸음 같은 딴 낱말은 앞뒤 한글 경계로 뺀다. 재고(在庫)·재야(在野)는 겹쳐서 목록에 넣지 않는다. 부제·검색 제목에도 같이 건다.
_JAEDA = re.compile(r'(?<![가-힣])(?:쟀다|쟀고|쟀는데|쟀을|잰다|재다|재어|재서는|재서도|재서|재는데|재는|재도|재면|재 둔|재 본|재 보|재 놓|잰)(?![가-힣])')
def _has_jaeda(t: str) -> bool:
    return bool(_JAEDA.search(t))


# ── 핵심 검색어 (2026-09-28 형님 판정: "핵심 키워드가 없는 제목을 누가 보겠니?") ─────────────────────────
# 핵심 검색어(main search keyword) = 사람들이 이 이야기를 찾으려고 치는 이름(the name people type to find this story).
# 제품·모델명은 원래 철자(Jev·Gemma 4·VLA·DINOv3), 널리 알려진 회사·인물·기관·나라·법은 독자의 언어(한국어 글: 버니 샌더스·앤트로픽·구글,
# 영어 글: 원래 철자), 이름 붙은 주인공이 없으면 가장 많이 검색되는 주제 명사. 글 head 에 적는다:
#   <meta name="pb-search-keyword" content="Jev">                         (하나, 필수)
#   <meta name="pb-search-keyword-forms" content="Jev|제브|TypeSafe Jev">  (선택 — 제목에 들어가면 인정되는 표기, | 로 가름)
# 판정: mainTitle 에 인정 표기가 하나도 없으면 결함('핵심 검색어 없음', -3 → 게이트 탈락).
#       pageTitle(브랜드 꼬리를 뗀 검색 결과 제목)에 인정 표기가 하나도 없으면 결함('핵심 검색어 없음', -3).
#       있지만 앞 1/3 밖에서 시작하면 권고('핵심 검색어가 뒤에 있음', -1) — 판례집 C 의 C2(6.1%)·C7(3.0%)은 검색어가 줄표 뒤에 있는데도
#       잘 눌렸다. 판례집 D "규칙이 판례와 어긋나면 규칙을 고친다"(2026-09-30)에 따라 '뒤'는 결함에서 권고로 내렸다.
#       메타 기록에 관한 판정은 글 머리(keyword_labels)에 붙는다 — 칸이 비어도 사라지지 않게(2026-09-30 리뷰):
#         '핵심 검색어 미기재'(메타 없음 — --require-keyword 면 결함, 아니면 권고) · '핵심 검색어가 이름이 아님(…)'·'인정 표기가 이름이 아님(…)'
#         (보통명사 한 낱말·설명구·수치만 — 결함, 그 표기는 제목 대조에서 뺀다) · '핵심 검색어가 기획과 다름(…)'(--pinned-keyword 와 겹치는 표기가 없음 — 결함,
#         제목은 기획 검색어로 대조한다).
# 앞 1/3 의 자는 스킬 blog-search-appeal 의 check_proposals.py K1 과 같다(위치 ≤ max(3, 길이/3)) — 두 도구가 같은 제목에 다른 판정을 내지 않게.
# 표기 비교는 대소문자·띄어쓰기·하이픈을 가리지 않는다("gemma 4"="Gemma4", "가상세포"="가상 세포"). 라틴·숫자로 시작·끝나는 표기는
# 앞뒤가 라틴·숫자에 붙어 있으면 다른 낱말로 본다("Jev"≠"Jevons", "Gemma 4"≠"Gemma 40", "AI"≠"OpenAI"). 한글 표기는 조사가 붙어도 인정("샌더스의").
KEYWORD_META = 'pb-search-keyword'
_BRAND_SUFFIX = re.compile(r'\s*\|\s*(페블러스|Pebblous)\s*$')
KEYWORD_FORMS_META = 'pb-search-keyword-forms'
_KW_SEP = r'[\s\-‐‑]*'
_KW_STRIP = re.compile(r'[\s\-‐‑]+')
_LATIN_OR_DIGIT = re.compile(r'[A-Za-z0-9]')


def _nfc(t: str) -> str:
    return unicodedata.normalize('NFC', t or '')


def split_forms(s) -> list:
    """'Jev|제브|TypeSafe Jev' → ['Jev', '제브', 'TypeSafe Jev'] (빈 칸·중복 제거, 순서 유지). 리스트도 받는다."""
    items = s if isinstance(s, (list, tuple)) else (s or '').split('|')
    out = []
    for x in items:
        x = _nfc(str(x)).strip()
        if x and x not in out:
            out.append(x)
    return out


def keyword_forms(keyword, forms=None):
    """핵심 검색어 + 인정 표기 → 인정 표기 목록(핵심 검색어가 맨 앞). 아무것도 없으면 None(= 미기재)."""
    out = split_forms([keyword] if keyword else []) + split_forms(forms)
    out = list(dict.fromkeys(out))
    return out or None


def _form_regex(form: str):
    core = _KW_STRIP.sub('', _nfc(form))
    if not core:
        return None
    body = _KW_SEP.join(re.escape(c) for c in core)
    pre = r'(?<![A-Za-z0-9])' if _LATIN_OR_DIGIT.match(core[0]) else ''
    post = r'(?![A-Za-z0-9])' if _LATIN_OR_DIGIT.match(core[-1]) else ''
    return re.compile(pre + body + post, re.IGNORECASE)


def keyword_spans(t: str, forms) -> list:
    """제목 안 인정 표기 자리 [(시작, 끝)] — 시작 순. forms 가 없으면 []."""
    t = _nfc(t)
    spans = []
    for f in forms or []:
        rx = _form_regex(f)
        if rx:
            spans.extend(m.span() for m in rx.finditer(t))
    return sorted(set(spans))


def keyword_pos(t: str, forms) -> int:
    """제목 안 첫 인정 표기의 시작 자리, 없으면 -1."""
    spans = keyword_spans(t, forms)
    return spans[0][0] if spans else -1


def _mask_keyword(t: str, forms) -> str:
    """핵심 검색어 자리를 'x' 로 덮는다 — 이름 속 숫자(Gemma 4·ISO 5259-2)·약어(CRISPR)는 이름의 일부라 수치·약어로 세지 않는다.
    덮개가 라틴 소문자라 약어 규칙(대문자 4자+)에 안 걸리고, 수치 규칙의 '라틴에 붙은 숫자는 이름' 예외도 그대로 산다.
    업계 용어 목록(거버넌스 등)은 덮은 글이 아니라 원래 제목에서 센다 — 검색어를 'AI 거버넌스' 로 적어 용어 규칙을 피하던 우회를 막는다(2026-09-30 리뷰)."""
    t = _nfc(t)
    if not forms:
        return t
    chars = list(t)
    for s, e in keyword_spans(t, forms):
        for i in range(s, e):
            chars[i] = 'x'
    return ''.join(chars)


def keyword_up_front(page_title: str, forms) -> bool:
    """검색 결과 제목(브랜드 꼬리를 뗀 것)이 핵심 검색어로 시작하는가 — 첫 인정 표기가 앞 1/3(짧은 제목은 3자) 안에 있으면 참."""
    bare = _BRAND_SUFFIX.sub('', _nfc(page_title)).strip()
    pos = keyword_pos(bare, forms)
    return pos >= 0 and pos <= max(3, len(bare) / 3)


_META_TAG = re.compile(r'<meta\b[^>]*>', re.IGNORECASE)
_META_ATTR = re.compile(r'([A-Za-z_:][\w:.-]*)\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|([^\s"\'>]+))')


def read_keyword_meta(txt: str):
    """HTML head 의 pb-search-keyword · pb-search-keyword-forms 메타 → (핵심 검색어 | None, 인정 표기 목록).
    속성 순서·따옴표 종류·HTML 엔티티(&amp; 등)를 가리지 않는다. 본문에 예시로 적힌 메타를 잡지 않도록 </head> 앞만 본다."""
    end = re.search(r'</head\s*>', txt, re.IGNORECASE)
    head = txt[:end.start()] if end else txt
    keyword, forms = None, []
    for tag in _META_TAG.findall(head):
        attrs = {m.group(1).lower(): html.unescape(next(g for g in m.groups()[1:] if g is not None))
                 for m in _META_ATTR.finditer(tag)}
        name = (attrs.get('name') or '').strip().lower()
        if name == KEYWORD_META and keyword is None:
            keyword = _nfc(attrs.get('content') or '').strip() or None
        elif name == KEYWORD_FORMS_META and not forms:
            forms = split_forms(attrs.get('content') or '')
    return keyword, forms


# ── 이름이 아닌 표기 (2026-09-30 리뷰 — 검색어 메타로 검사를 비켜 가는 우회를 막는다) ─────────────────────
# 인정 표기는 **같은 이름의 다른 표기**(원래 철자·한국어 표기·정식 이름·줄인 이름)만이다. 보통명사 한 낱말(AI·모델·회사·법안·연구소)이나
# 설명구("고르기만 하는 AI")를 적으면 이름이 빠진 제목도 '검색어가 들었다'고 통과한다 — 형님이 버린 Jev 글 제목에 인정 표기
# 'Jev|고르기만 하는 AI' 를 붙이면 10/10/10 이었다. 그런 표기는 제목 대조에서 빼고, 글 머리 결함으로 남긴다.
# 핵심 검색어 자신이 보통명사 한 낱말이어도 같다('AI' 로 적으면 Jev 가 빠진 제목이 통과했다) — 이름 있는 주인공이 없는 글은
# 가장 많이 찾는 주제 명사(데이터 품질·합성 데이터·온톨로지처럼 이 글에 딸린 말)를 쓴다. 블로그 전체가 다루는 'AI' 한 낱말은 아무도 이 글을 찾을 때 치지 않는다.
_GENERIC_KEYWORDS = frozenset(re.sub(r'[\s\-‐‑]+', '', w).lower() for w in (
    'AI', '인공지능', '에이아이', 'LLM', '모델', 'AI 모델', '언어 모델', '데이터', '로봇', '회사', '기업', '법안', '법', '법률', '연구소', '연구',
    '연구진', '정부', '기술', '논문', '스타트업', '서비스', '제품', '플랫폼', '시스템', '알고리즘',
    'model', 'AI model', 'data', 'robot', 'company', 'bill', 'law', 'lab', 'research', 'startup', 'government', 'technology',
    'paper', 'artificial intelligence'))
# 설명구: 이름은 조사·어미로 이어진 구가 아니다. 마지막 낱말 앞에 관형형(~하는·~고르는·~던·~할)이나 조사·연결어미(을·를·만·보다·에서·으로·처럼·
# 하고·해서·하며)로 끝나는 낱말이 있으면 설명구다. 약한 관형형(~한·~인)은 사람 이름(문재인)·명사 끝음절과 겹쳐 보지 않는다.
_DESC_TAIL = re.compile(r'[가-힣](을|를|만|보다|에서|으로|처럼|하고|해서|하며)$')


def _form_key(f: str) -> str:
    return _KW_STRIP.sub('', _nfc(f)).lower()


def _is_description_form(f: str) -> bool:
    toks = _nfc(f).split()
    return len(toks) >= 2 and any(_adnominal_kind(tok) == 'strong' or _DESC_TAIL.search(tok) for tok in toks[:-1])


_COUNTER = re.compile(r'(억|만|천|백|조|배|건|명|개|편|년|월|일|원|달러|위|등|가지|점|퍼센트|시간|분|초|개월|주)')


def form_problem(f: str):
    """표기가 이름이 아니면 까닭('수치만'·'일반 낱말'·'설명구'), 이름이면 None."""
    if not re.search(r'[A-Za-z가-힣]', _COUNTER.sub('', _NUMBER_CHUNK.sub('', _nfc(f)))):
        return '수치만'   # "700만"·"65%"·"2.7배" — 수치는 이름이 아니다(이름 속 숫자 "Gemma 4" 는 글자가 남아 여기 안 걸린다)
    if _form_key(f) in _GENERIC_KEYWORDS:
        return '일반 낱말'
    if _is_description_form(f):
        return '설명구'
    return None


def _forms_overlap(a_forms, b_forms) -> bool:
    """두 표기 목록이 같은 이름을 가리키는가 — 같은 표기이거나 한쪽이 다른 쪽 안에 낱말로 들어 있다("샌더스"⊂"버니 샌더스", "Jev"⊂"TypeSafe Jev")."""
    for a in a_forms:
        for b in b_forms:
            if _form_key(a) == _form_key(b):
                return True
            ra, rb = _form_regex(a), _form_regex(b)
            if (ra and ra.search(_nfc(b))) or (rb and rb.search(_nfc(a))):
                return True
    return False


def keyword_record(keyword, forms, pinned_keyword=None, pinned_forms=None, require=False):
    """글에 적힌 핵심 검색어 기록(메타 또는 --keyword)을 기획 고정값(--pinned-keyword)과 대조한다.
    반환 (match_forms | None, labels, defects):
      match_forms — 제목 대조에 쓰는 인정 표기(이름이 아닌 표기는 뺐다). 기록이 기획과 어긋나면 기획 검색어로 대조한다. 잴 수 없으면 None.
      labels      — 글 머리 판정 전부(keyword_labels). defects 는 그중 결함(ok=false)인 것.
    '미기재'는 require(=이 run 이 새로 만든 글, 엔진이 --require-keyword 로 알린다)일 때만 결함이다 — 옛 글은 기록이 없는 게 보통이다."""
    recorded = keyword_forms(keyword, forms) or []
    labels, defects = [], []

    def add(label, defect):
        labels.append(label)
        if defect:
            defects.append(label)

    valid = []
    for i, f in enumerate(recorded):
        why = form_problem(f)
        if why is None:
            valid.append(f)
        else:
            add(f'{"핵심 검색어" if i == 0 else "인정 표기"}가 이름이 아님({why} "{f}")', True)
    pin_all = keyword_forms(pinned_keyword, pinned_forms) or []
    pin = [f for f in pin_all if form_problem(f) is None]
    if pin_all and not pin:
        add(f'기획 핵심 검색어가 이름이 아님("{pin_all[0]}") — 기획 대조 생략', False)
    if not recorded:
        add('핵심 검색어 미기재', require)
        return (pin or None), labels, defects
    if pin and not _forms_overlap(recorded, pin):
        add(f'핵심 검색어가 기획과 다름(기획 "{pin[0]}" · 기록 "{recorded[0]}")', True)
        return pin, labels, defects
    match = list(dict.fromkeys(valid + pin))
    return (match or None), labels, defects


# 전달문 종결(2026-09-28 형님 판정 — 샌더스 글 부제 "…30일 안에 없애라고 적는다"를 "무슨 글인지 모르겠다"로 거름):
# 부제가 "~라고/~다고 적는다" 로 끝나면 조문을 옮겨 적은 서기 문장이다. 무슨 일이 있었는지 말하지 않는다 — 위반.
# 신문 부제의 흔한 "~라고 밝혔다" 는 건드리지 않는다(판례가 없다). '적는다/적었다/적시한다/적혀 있다' 꼴만 잡는다.
_REPORTED_WRITE_END = re.compile(
    r'(?:라고|다고|냐고|자고)\s*(?:적는다|적었다|적고\s*있다|적어\s*두었다|적어\s*뒀다|적시한다|적시했다|적혀\s*있다)\s*[.!…]*\s*$')


# 길이 (정본: 20~35자 권장). 45자 초과는 위반, 36~45자·20자 미만은 권고 이탈, 12자 미만은 추상 위험.
LEN_MIN, LEN_MAX, LEN_HARD = 20, 35, 45


def eval_maintitle(t: str, kw_forms=None):
    """mainTitle — 헤드라인. 정본 v3(2026-09-13): 질문형·신문 명사형·현재형 주장 중 하나, 주어 먼저·20~35자.
    코드로 재는 것: 핵심 검색어(kw_forms 가 주어지면 인정 표기 하나는 있어야 한다 — 2026-09-28 형님 판정)/
    과거형 서술 종결(위반)/제목 안 수치(1개 권고·2개+ 위반)/영문 약어 4자+(권고)/따옴표/인용+반전/대조/
    줄표·콜론 허용 형태/미끼/키워드 나열/잘린 명사형/수수께끼/관형절 사슬/길이.
    현재형 종결·질문형·'X: Y'·'— 출처' 꼬리·낱말 강조 작은따옴표는 허용이라 감점하지 않는다.
    kw_forms=None(잴 수 있는 기록 없음)이면 핵심 검색어는 보지 않는다 — 기록 판정(미기재·이름이 아님)은 글 머리(keyword_labels)에 붙는다."""
    labels, ded = [], 0
    if kw_forms and keyword_pos(t, kw_forms) < 0:
        labels.append('핵심 검색어 없음'); ded += 3  # 위반 — 이름을 일반 풀이·보통명사로 바꾸면 찾는 사람이 못 알아본다(Jev·샌더스 판례)
    # 핵심 검색어 속 숫자·약어는 이름의 일부 — 덮고 센다(Gemma 4 · ISO 5259-2 · CRISPR). 덮은 자리 밖의 것은 그대로 센다.
    tm = _mask_keyword(t, kw_forms)
    if _has_jaeda(t):
        labels.append('재다→측정하다'); ded += 3  # 위반 — 형님 2026-09-15, 한자어 술어
    for w in _jargon_hits(t):   # 원래 제목에서 센다 — 검색어로 용어를 덮지 않는다
        labels.append(f'전문용어({w})'); ded += 3  # 위반 — 중학생이 모르는 업계 용어는 제목에 못 온다
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
    if SPEECH_TWIST.search(t):
        labels.append('인용+반전'); ded += 3
    if CONTRAST.search(t):
        labels.append('대조공식'); ded += 3
    dv = _dash_verdict(t)
    if dv and dv != 'ok':
        labels.append(dv); ded += 3
    cv = _colon_verdict(t)
    if cv and cv != 'ok':
        labels.append(cv); ded += 3
    if INCOMPLETE_END.search(t):
        labels.append('잘린 명사형'); ded += 2
    if _gerund_end(t):
        labels.append('잘린 명사형(-기 종결)'); ded += 3
    if CLICKBAIT.search(t):
        labels.append('미끼'); ded += 3
    if _is_keyword_list(t):
        labels.append('키워드 나열'); ded += 3
    if RIDDLE.search(t):
        labels.append('수수께끼(~쪽은/것은 …였다)'); ded += 1  # v3: 권고 감점
    if RIDDLE_OPEN.search(t) and not t.rstrip().endswith('?'):
        labels.append('수수께끼(주어 없는 무엇을 …)'); ded += 1  # v3: 권고 감점
    if _is_past_end(t):
        labels.append('과거형 종결'); ded += 3  # v3 위반 — 사건 보고문
    nums = _count_numbers(tm)
    if nums >= 2:
        labels.append('수치 나열'); ded += 3  # v3 위반 — 수치는 부제로
    elif nums == 1:
        labels.append('수치 1'); ded += 1  # v3 권고
    for a in _unknown_acronyms(tm):
        labels.append(f'영문 약어({a})'); ded += 1  # v3 권고 — 위반은 아니다
    if BALANCED_PAIR.search(t):
        labels.append('균형 대구'); ded += 2
    if TILDE.search(t):
        labels.append('물결표'); ded += 1
    n = len(t)
    strong, chain = _adnominal_chain(t)
    if strong >= _ADNOMINAL_HARD and n > _ADNOMINAL_LONG:
        labels.append(f'장황(관형절 {strong}겹+{_ADNOMINAL_LONG}자 초과)'); ded += 1  # v3: 권고 감점
    elif chain >= _ADNOMINAL_WARN:
        labels.append(f'관형절 사슬 {chain}회(경고)'); ded += 1
    if not re.search(r'[가-힣]', t):
        pass  # 한글이 없는(영문) 제목은 글자 수 기준이 다르다 — 길이는 판정하지 않는다(articles.json language 오기 대비)
    elif n < 12:
        labels.append('짧음(추상 위험)'); ded += 1
    elif n < LEN_MIN:
        labels.append(f'짧음({LEN_MIN}자 미만)'); ded += 1
    elif n > LEN_HARD:
        labels.append(f'김({LEN_HARD}자 초과)'); ded += 3
    elif n > LEN_MAX:
        labels.append(f'김({LEN_MAX}자 초과)'); ded += 1
    return max(0, 10 - ded), labels


def eval_subtitle(t: str):
    """subtitle — 리드문. 대조/따옴표/미끼 금지, 줄표는 동격 재진술 의심으로 소프트 감점."""
    labels, ded = [], 0
    if _has_jaeda(t):
        labels.append('재다→측정하다'); ded += 3  # 위반 — 형님 2026-09-15, 한자어 술어
    for w in _jargon_hits(t):
        labels.append(f'전문용어({w})→쉬운 말'); ded += 1  # 권고 — 부제도 중학생 시험(2026-09-18)
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
    if SPEECH_TWIST.search(t):
        labels.append('인용+반전'); ded += 3
    if _REPORTED_WRITE_END.search(t):
        labels.append('전달문 종결(~라고 적는다)'); ded += 3  # 위반 — 2026-09-28 형님 판정(샌더스 글 부제)
    if CONTRAST.search(t):
        labels.append('대조공식'); ded += 3
    if CLICKBAIT.search(t):
        labels.append('미끼'); ded += 3
    if BALANCED_PAIR.search(t):
        labels.append('균형 대구'); ded += 2
    dashes = len(re.findall(r'[—–]', t))
    if dashes >= 2:
        labels.append('줄표 2개+'); ded += 3
    elif dashes == 1:
        labels.append('줄표(동격 재진술인지 확인)'); ded += 1  # soft
    n = len(t)
    if n and n < 15:
        labels.append('짧음'); ded += 1
    elif n > 70:
        labels.append('김(70자 초과)'); ded += 1
    return max(0, 10 - ded), labels


def _same_text(a: str, b: str) -> bool:
    """띄어쓰기·문장부호·대소문자만 다른 두 문자열이면 참(검색 제목이 본문 제목을 그대로 옮겼는지 볼 때)."""
    norm = lambda s: re.sub(r'[\W_]+', '', _nfc(s)).lower()
    return bool(norm(a)) and norm(a) == norm(b)


def eval_pagetitle(t: str, main_title: str = '', kw_forms=None):
    """pageTitle — 검색 결과 제목(<title>). 2026-09-28 형님 판정 이후 검색어로 찾는 사람을 위한 제목이다:
    핵심 검색어로 시작(앞 1/3 안) → 그 뒤에 이 글이 주는 것(분석·검증·비교·정리·가이드·'~란?') → " | 페블러스"/" | Pebblous".
    결함(-3, 게이트 탈락): 핵심 검색어가 아예 없음 · 브랜드 꼬리 없음 · mainTitle 을 그대로 옮김.
    권고: 핵심 검색어가 앞 1/3 밖(-1 — 판례집 C2·C7 은 줄표 뒤 검색어로도 잘 눌렸다) · 60자 초과(-1) · 업계 용어(-1).
    따옴표/대조/미끼 금지, 줄표 1개 허용, 수치 허용(검색 제목은 수치를 담아도 된다 — 판례집 C 의 '15가지'·'5가지').
    kw_forms=None(잴 수 있는 기록 없음)이면 핵심 검색어는 보지 않는다 — 기록 판정은 글 머리(keyword_labels)에 붙는다."""
    labels, ded = [], 0
    bare = _BRAND_SUFFIX.sub('', _nfc(t)).strip()
    if kw_forms and keyword_pos(bare, kw_forms) < 0:
        labels.append('핵심 검색어 없음'); ded += 3  # 결함 — 검색한 이름이 검색 결과 제목에 없다(판례집 A 의 Jev·Gemma 4)
    elif kw_forms and not keyword_up_front(t, kw_forms):
        # 권고 — 앞에 있을수록 좋지만(판례집 C1·C3), C2 "스스로 연구하고 논문쓰는 AI — AI Scientist v2 분석"(6.1%)·
        # C7 "한국 합성 페르소나 700만 — Nemotron-Personas-Korea 심층 분석"(3.0%)은 줄표 뒤 검색어로도 사이트 평균의 3~6배 눌렸다.
        labels.append('핵심 검색어가 뒤에 있음'); ded += 1
    if _has_jaeda(t):
        labels.append('재다→측정하다'); ded += 3  # 위반 — 형님 2026-09-15, 한자어 술어
    for w in _jargon_hits(t):   # 원래 제목에서 센다 — 검색어로 용어를 덮지 않는다
        labels.append(f'전문용어({w})→쉬운 말'); ded += 1  # 권고 — 부제도 중학생 시험(2026-09-18)
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
    if CONTRAST.search(t):
        labels.append('대조공식'); ded += 3
    if CLICKBAIT.search(t):
        labels.append('미끼'); ded += 3
    if len(re.findall(r'[—–]', t)) >= 2:
        labels.append('줄표 2개+'); ded += 2
    if not _BRAND_SUFFIX.search(t):
        labels.append('브랜드 접미사 없음'); ded += 3  # 결함(2026-09-30 권고 -1 → 결함) — 정본 §4-2 세는 자
    if len(t) > 62:
        labels.append('김(60자 초과)'); ded += 1
    # 본문 제목 복사본 = 결함(2026-09-30, 종전 권고 -2). 콘솔 교정이 "구글 최신 AI, 게임용 그래픽카드 한 장이면 충분 | 페블러스"로
    # 검색 제목을 덮어써 "gemma 4 31b" 로 찾던 사람을 잃었다(판례집 A). 띄어쓰기·문장부호만 다른 것도 복사본으로 본다.
    if main_title and bare and _same_text(bare, main_title):
        labels.append('mainTitle와 동일(검색 변형 아님)'); ded += 3
    return max(0, 10 - ded), labels


# 검색 결과가 실제로 보여 주는 것은 <title> 이다(2026-09-30 리뷰). config pageTitle 이 비면 <title> 을 검색 결과 제목 칸으로 재고,
# 둘이 다르면 결함 — 교정·재작성이 한쪽만 고치면 검사기는 config 를 보고 통과를 주는데 검색 결과는 옛 <title> 을 보인다.
_TITLE_TAG = re.compile(r'<title\b[^>]*>(.*?)</title\s*>', re.IGNORECASE | re.DOTALL)


def read_title_tag(txt: str) -> str:
    """head 의 <title> 글자(엔티티 풀고 공백 한 칸으로). 없거나 비었으면 ''."""
    end = re.search(r'</head\s*>', txt, re.IGNORECASE)
    head = txt[:end.start()] if end else txt
    m = _TITLE_TAG.search(head)
    return re.sub(r'\s+', ' ', _nfc(html.unescape(m.group(1)))).strip() if m else ''


def _js_unescape(s: str) -> str:
    """config 문자열 리터럴 속 이스케이프(\\" · \\u2014)를 푼다. 못 풀면 그대로."""
    try:
        return json.loads('"' + s + '"')
    except ValueError:
        return s


def eval_page_slot(config_value: str, title_tag: str, main_title: str = '', kw_forms=None):
    """검색 결과 제목 칸 — config pageTitle 이 있으면 그것을, 없으면 <title> 을 잰다. 칸이 없으면 None.
    반환 {value, score, labels, source: 'config'|'title'}. 둘 다 있고 다르면 'pageTitle≠<title>'(-3, 결함)."""
    if config_value:
        score, labels = eval_pagetitle(config_value, main_title, kw_forms)
        src = 'config'
        if title_tag and re.sub(r'\s+', ' ', _nfc(_js_unescape(config_value))).strip() != title_tag:
            labels = labels + ['pageTitle≠<title>']
            score = max(0, score - 3)
    elif title_tag:
        score, labels = eval_pagetitle(title_tag, main_title, kw_forms)
        src = 'title'
    else:
        return None
    return {'value': config_value or title_tag, 'score': score, 'labels': labels, 'source': src}


CONFIG_FIELD = {
    'mainTitle': re.compile(r'mainTitle:\s*"((?:\\.|[^"\\])*)"'),
    'subtitle': re.compile(r'subtitle:\s*"((?:\\.|[^"\\])*)"'),
    'pageTitle': re.compile(r'pageTitle:\s*"((?:\\.|[^"\\])*)"'),
}


def extract_config(repo: str, path_rel: str):
    """글 HTML의 PebblousPage.init config에서 mainTitle/subtitle/pageTitle 추출 (없으면 빈 값)
    + head 의 <title>(title_tag) + head 메타의 핵심 검색어(keyword: str|None, keyword_forms: list)."""
    html_path = os.path.join(repo, path_rel.rstrip('/'), 'index.html')
    out = {k: '' for k in CONFIG_FIELD}
    out['title_tag'] = ''
    out['keyword'], out['keyword_forms'] = None, []
    try:
        with open(html_path, encoding='utf-8') as f:
            txt = f.read()
        for k, rx in CONFIG_FIELD.items():
            m = rx.search(txt)
            if m:
                out[k] = m.group(1)
        out['title_tag'] = read_title_tag(txt)
        out['keyword'], out['keyword_forms'] = read_keyword_meta(txt)
    except OSError:
        pass
    return out


_OG_IMAGE_TITLE = re.compile(r'<meta\b[^>]*\bname\s*=\s*["\']og-image-title["\'][^>]*>', re.IGNORECASE)


def read_og_image_title(txt: str) -> str:
    """OG 이미지 커버 제목 오버라이드(<meta name="og-image-title">) → 그려지는 글자(줄바꿈은 공백). 없으면 ''.
    줄바꿈 표시 &#10; 와 두 번 바뀐 &amp;#10; 을 모두 줄바꿈으로 본다(생성기 decodeLineBreaks 와 같다)."""
    end = re.search(r'</head\s*>', txt, re.IGNORECASE)
    head = txt[:end.start()] if end else txt
    m = _OG_IMAGE_TITLE.search(head)
    if not m:
        return ''
    c = re.search(r'\bcontent\s*=\s*(?:"([^"]*)"|\'([^\']*)\')', m.group(0), re.IGNORECASE)
    raw = (c.group(1) if c and c.group(1) is not None else (c.group(2) if c else '')) or ''
    raw = re.sub(r'&(?:amp;)*#(?:10|x0*a);', ' ', raw, flags=re.IGNORECASE)
    return re.sub(r'\s+', ' ', _nfc(html.unescape(raw))).strip()


def eval_og_image_title(t: str, kw_forms=None):
    """커버 제목 칸 — 핵심 검색어만 본다(형태·길이 규칙은 본문 제목 칸이 이미 잰다; 커버는 그 압축본이다, title-strategy §1.1).
    검색어 기록이 있는데 인정 표기가 하나도 없으면 결함('핵심 검색어 없음', -3). 기록이 없으면 판정하지 않는다(10)."""
    labels, ded = [], 0
    if kw_forms and keyword_pos(t, kw_forms) < 0:
        labels.append('핵심 검색어 없음'); ded += 3  # 결함 — SNS 카드에서 이름을 보고 누르는 사람이 못 알아본다(Gemma NVFP4 커버 판례)
    return max(0, 10 - ded), labels


def slug_of(path_rel: str) -> str:
    return re.sub(r'/(ko|en)/?$', '', path_rel).rstrip('/')


def reason_text(labels, score):
    # '§0'은 콘솔·엔진이 쓰는 게이트 이름 — 제목 정본 v3 (2026-09-13 ko-style-standard §4-2) 이후에도 계약 호환을 위해 유지한다.
    if not labels:
        return '§0 통과'
    return '§0 위반: ' + ' · '.join(labels)


# 게이트 판정 임계: 슬롯 점수 ≤ GATE_FAIL_MAX 면 하드 위반(과거형 종결/수치 나열/따옴표/인용+반전/대조/줄표·콜론 형태/미끼/
# 키워드 나열/45자 초과 등 1개 이상). 소프트 감점(수치 1·영문 약어·길이 권고·관형절 경고·수수께끼·장황)만 있으면 8~9점이라 통과한다.
# subtitle 은 v3 에서 "정확한 헤드라인 자리"라 수치·기관명·과거형 종결을 허용한다(eval_subtitle 에 v3 감점 없음). pageTitle 도 검색 변형이라 수치 허용.
GATE_FAIL_MAX = 7


def check_html(html_file: str, keyword=None, keyword_forms_override=None,
               pinned_keyword=None, pinned_forms=None, require_keyword=False) -> dict:
    """단일 HTML의 3슬롯 게이트 판정 — 발행 파이프라인 title-gate phase가 호출.
    핵심 검색어는 head 메타(pb-search-keyword · pb-search-keyword-forms)에서 읽는다. keyword/keyword_forms_override 가
    주어지면(CLI --keyword · --keyword-forms) 메타 대신 그것을 쓴다 — 둘 중 하나라도 주면 메타 값은 통째로 무시한다
    (다른 검색어의 인정 표기가 섞이지 않게). --keyword-forms 만 주면 첫 표기가 핵심 검색어다.
    pinned_keyword/pinned_forms(CLI --pinned-keyword · --pinned-forms) = 엔진이 기획 단계에서 run 에 고정한 핵심 검색어. 기록이 그것과
    겹치지 않으면 결함이고, 제목은 기획 검색어로 대조한다 — 글이 스스로 적은 검색어만 믿지 않는다(2026-09-30 리뷰).
    require_keyword(CLI --require-keyword) = 이 run 이 새로 만든 글 — 기록이 없으면 결함.
    검색 결과 제목 칸은 config pageTitle, 없으면 <title> 을 잰다. 둘 다 있고 다르면 결함.
    반환: {file, ok, keyword: str|None, keyword_forms: [...], keyword_source: 'meta'|'cli'|None,
           keyword_match_forms: [...], keyword_labels: [...], keyword_defects: [...],
           slots:{mainTitle|subtitle|pageTitle|ogImageTitle: {value, score, labels}}} (빈 슬롯은 생략. pageTitle 칸엔 source: 'config'|'title'.
           ogImageTitle = <meta name="og-image-title"> 커버 제목 오버라이드 — 있을 때만, 핵심 검색어만 잰다)."""
    with open(html_file, encoding='utf-8') as f:
        txt = f.read()
    vals = {}
    for k, rx in CONFIG_FIELD.items():
        m = rx.search(txt)
        vals[k] = m.group(1) if m else ''
    if keyword or keyword_forms_override:
        cli_forms = split_forms(keyword_forms_override)
        kw, extra, source = (keyword or (cli_forms[0] if cli_forms else None)), cli_forms, 'cli'
    else:
        kw, extra = read_keyword_meta(txt)
        source = 'meta' if (kw or extra) else None
    forms = keyword_forms(kw, extra)
    if forms and not kw:
        kw = forms[0]   # 인정 표기만 적고 핵심 검색어 메타를 빠뜨린 글 — 첫 표기를 핵심 검색어로 본다
    match, kw_labels, kw_defects = keyword_record(kw, extra, pinned_keyword, pinned_forms, require_keyword)
    slots, ok = {}, not kw_defects
    for k in ('mainTitle', 'subtitle', 'pageTitle'):
        if k == 'pageTitle':
            # pageTitle은 mainTitle과 비교해 '검색 변형인가'까지 본다(§0). config 가 비면 <title> 을 잰다.
            slot = eval_page_slot(vals[k], read_title_tag(txt), vals['mainTitle'], match)
            if slot is None:
                continue
        elif not vals[k]:
            continue
        elif k == 'mainTitle':
            score, labels = eval_maintitle(vals[k], match)
            slot = {'value': vals[k], 'score': score, 'labels': labels}
        else:
            score, labels = eval_subtitle(vals[k])
            slot = {'value': vals[k], 'score': score, 'labels': labels}
        slots[k] = slot
        if slot['score'] <= GATE_FAIL_MAX:
            ok = False
    # 커버 제목 오버라이드가 있을 때만 — 없으면 생성기가 본문 제목(mainTitle 칸)을 그린다.
    og_title = read_og_image_title(txt)
    if og_title:
        score, labels = eval_og_image_title(og_title, match)
        slots['ogImageTitle'] = {'value': og_title, 'score': score, 'labels': labels}
        if score <= GATE_FAIL_MAX:
            ok = False
    return {'file': html_file, 'ok': ok, 'keyword': kw, 'keyword_forms': forms or [], 'keyword_source': source,
            'keyword_match_forms': match or [], 'keyword_labels': kw_labels, 'keyword_defects': kw_defects,
            'slots': slots}


def main():
    ap = argparse.ArgumentParser(description='한글 제목 전수조사 — 제목 정본 v3(2026-09-13 ko-style-standard §4-2) 채점')
    ap.add_argument('--repo', default='.', help='콘텐츠 클론 루트 (articles.json 위치)')
    ap.add_argument('--output', help='출력 경로 (기본: <repo>/_workspace/title-review/titles_scored.json)')
    ap.add_argument('--dry-run', action='store_true', help='파일 쓰지 않고 통계만')
    ap.add_argument('--min-score', type=int, help='이 점수 미만 행만 stdout 리포트')
    ap.add_argument('--check-html', metavar='FILE', action='append',
                    help='게이트 모드: 이 HTML 파일(들)의 3슬롯만 판정, JSON 출력. 위반 있으면 exit 1')
    ap.add_argument('--no-backup', action='store_true',
                    help='기존 titles_scored.json을 .bak로 백업하지 않고 덮어쓴다(자동/스케줄 실행용 — 백업 누적 방지)')
    ap.add_argument('--keyword', metavar='KEYWORD',
                    help='--check-html 전용: 핵심 검색어를 head 메타(pb-search-keyword) 대신 지정한다(단일 파일 검사·옛 글 재현)')
    ap.add_argument('--keyword-forms', metavar='FORMS',
                    help="--check-html 전용: 인정 표기를 | 로 갈라 지정한다(예: 'Jev|제브|TypeSafe Jev'). 주면 메타 값은 무시한다")
    ap.add_argument('--pinned-keyword', metavar='KEYWORD',
                    help='--check-html 전용: 기획 단계가 고정한 핵심 검색어(엔진 run 상태). 글의 기록이 이것과 겹치지 않으면 결함, 제목은 이것으로 대조')
    ap.add_argument('--pinned-forms', metavar='FORMS', help="--check-html 전용: 기획 고정값의 인정 표기(| 로 가른다)")
    ap.add_argument('--require-keyword', action='store_true',
                    help='--check-html 전용: 새 글 — 핵심 검색어 기록이 없으면 결함(기본은 권고)')
    args = ap.parse_args()
    if (args.keyword or args.keyword_forms or args.pinned_keyword or args.pinned_forms or args.require_keyword) and not args.check_html:
        ap.error('--keyword/--keyword-forms/--pinned-keyword/--pinned-forms/--require-keyword 는 --check-html 과 함께만 쓴다'
                 '(전수조사는 글마다 head 메타를 읽는다)')

    # ── 게이트 모드 (발행 파이프라인 title-gate) ──
    if args.check_html:
        results = [check_html(f, args.keyword, args.keyword_forms, args.pinned_keyword, args.pinned_forms, args.require_keyword)
                   for f in args.check_html]
        print(json.dumps(results, ensure_ascii=False, indent=1))
        sys.exit(0 if all(r['ok'] for r in results) else 1)

    repo = os.path.abspath(args.repo)
    aj = os.path.join(repo, 'articles.json')
    with open(aj, encoding='utf-8') as f:
        data = json.load(f)
    arts = [a for a in data.get('articles', [])
            if a.get('published') is not False and (a.get('language') or 'ko') == 'ko' and a.get('path')]

    rows, dist = [], {}
    for i, a in enumerate(arts):
        title = a.get('title') or ''
        cfg = extract_config(repo, a['path'])
        forms = keyword_forms(cfg['keyword'], cfg['keyword_forms'])
        match, kw_labels, _ = keyword_record(cfg['keyword'], cfg['keyword_forms'])
        mt_score, mt_labels = eval_maintitle(title, match)
        st_score, st_labels = eval_subtitle(cfg['subtitle']) if cfg['subtitle'] else (None, [])
        pt = eval_page_slot(cfg['pageTitle'], cfg['title_tag'], cfg.get('mainTitle') or title, match)
        pt_value, pt_score, pt_labels = (pt['value'], pt['score'], pt['labels']) if pt else ('', None, [])
        rows.append({
            'idx': i,
            'slug': slug_of(a['path']),
            'cat': a.get('category', ''),
            'mainTitle': title,
            'mt_score': mt_score,
            'mt_labels': mt_labels,
            'mt_reason': reason_text(mt_labels, mt_score),
            'mt_fix': '',
            'subtitle': cfg['subtitle'],
            'st_score': st_score,
            'st_labels': st_labels,
            'st_reason': reason_text(st_labels, st_score) if cfg['subtitle'] else '',
            'st_fix': '',
            'pageTitle': pt_value,
            'pt_score': pt_score,
            'pt_labels': pt_labels,
            'pt_reason': reason_text(pt_labels, pt_score) if pt else '',
            'keyword': cfg['keyword'] or (forms[0] if forms else None),
            'keyword_forms': forms or [],
            'kw_labels': kw_labels,
            'standard': '제목 정본 v3 (2026-09-13 ko-style-standard §4-2) · 핵심 검색어 (2026-09-28)',
        })
        dist[mt_score] = dist.get(mt_score, 0) + 1

    # 통계
    flagged = [r for r in rows if r['mt_score'] < 10]
    hard = [r for r in rows if r['mt_score'] <= GATE_FAIL_MAX]
    st_flag = [r for r in rows if r['st_score'] is not None and r['st_score'] < 10]
    print(f'대상: {len(rows)}개 KO 글')
    print(f'mainTitle 분포: ' + ', '.join(f'{k}점={v}' for k, v in sorted(dist.items(), reverse=True)))
    print(f'mainTitle 감점: {len(flagged)}건 (하드 위반 {len(hard)}건)')
    print(f'subtitle 감점: {len(st_flag)}건')

    if args.min_score is not None:
        for r in rows:
            if r['mt_score'] < args.min_score:
                print(f"[{r['mt_score']}] {r['mainTitle']}  ← {r['mt_reason']}  ({r['slug']})")

    if args.dry_run:
        return

    out = args.output or os.path.join(repo, '_workspace', 'title-review', 'titles_scored.json')
    os.makedirs(os.path.dirname(out), exist_ok=True)

    # 기존 센서스의 수정 제안(mt_fix·st_fix)을 slug 기준으로 이어받는다 — 재실행이 손으로 채운
    # 제안을 날리지 않도록(2026-07-12). 단, 제목이 바뀐 글(제안이 이미 반영됨)은 제안을 비운다.
    if os.path.exists(out):
        try:
            prev = {r['slug']: r for r in json.load(open(out, encoding='utf-8')) if r.get('slug')}
            carried = 0
            for r in rows:
                p = prev.get(r['slug'])
                if not p:
                    continue
                # mt_fix: 이전 제안이 있고, 현재 제목이 그 제안과 다르면(아직 미적용) 이어받는다.
                if p.get('mt_fix') and p['mt_fix'] != r['mainTitle'] and not r.get('mt_fix'):
                    r['mt_fix'] = p['mt_fix']; carried += 1
                if p.get('st_fix') and p['st_fix'] != r.get('subtitle') and not r.get('st_fix'):
                    r['st_fix'] = p['st_fix']; carried += 1
            if carried:
                print(f'기존 제안 이어받음: {carried}건')
        except Exception as e:
            print(f'기존 제안 병합 실패(무시): {e}')

    if os.path.exists(out) and not args.no_backup:
        stamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')
        bak = out.replace('.json', f'-{stamp}.bak.json')
        os.rename(out, bak)
        print(f'백업: {bak}')
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(rows, f, ensure_ascii=False, indent=1)
    print(f'작성: {out} ({len(rows)}행)')


if __name__ == '__main__':
    main()
