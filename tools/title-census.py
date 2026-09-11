#!/usr/bin/env python3
"""
title-census.py — 한글 제목 전수조사 (제목 정본 v2 — docs/ko-style-standard.md §4-2, 2026-09-11 형님 결정).

정본 세 줄: ① 주어(무엇·누가)를 맨 앞에 ② 결론을 그대로 말한다(반전·수수께끼·비유 금지) ③ 20~35자, 평이한 낱말.
이 도구는 그중 코드로 잴 수 있는 것만 잰다 — 길이·줄표/콜론의 허용 형태·인용+반전·대조 공식·미끼·키워드 나열·
잘린 명사형·수수께끼 패턴·관형절 사슬. 주어-먼저·비유 여부는 LLM 교정 프롬프트(runTitleGate)가 본다.

articles.json의 published=true, language=ko 전 글에 대해 제목 3슬롯을 결정론 규칙으로 채점한다:
  - mainTitle  (= articles.json title, 카드/Hero 제목) — 가장 엄격
  - subtitle   (글 HTML의 PebblousPage.init config에서 추출) — 리드문 기준
  - pageTitle  (글 HTML에서 추출) — 검색 변형 기준

출력은 admin 제목 검토 콘솔(/admin/titles)의 데이터 계약(title-review.ts loadCensus)과 호환:
  [{slug, mt_score, mt_reason, mt_fix, ...}]  — mt_score 낮을수록 우선 검토 대상.
채점 스케일: 0~10 (10 = §0 통과). 감점 근거는 mt_labels/mt_reason에 남긴다.
mt_fix(제안 새 제목)는 이 도구가 만들지 않는다 — 규칙 위반 목록을 근거로 사람/LLM이 채운다.

사용:
  python3 tools/title-census.py                     # cwd의 articles.json → _workspace/title-review/titles_scored.json
  python3 tools/title-census.py --repo <clone경로>   # 다른 클론 대상
  python3 tools/title-census.py --dry-run           # 파일 안 쓰고 통계만
  python3 tools/title-census.py --min-score 7       # 해당 점수 미만만 출력(리포트용)

기존 titles_scored.json이 있으면 titles_scored-<UTC시각>.bak.json 으로 백업 후 덮어쓴다.
"""
import argparse
import datetime
import json
import os
import re
import sys

# ── 제목 정본 v2 결정론 규칙 (docs/ko-style-standard.md §4-2) ────────────────────
# 인용 검출 — 실제 인용(쌍)만 잡는다. 영어 아포스트로피(소유격 's·축약 n't·'re 등)는
# 정상 문법이라 제외한다(2026-07-11 오탐: "MAI-Thinking-1's"가 따옴표로 오판돼 교정 불가 잔존).
# 낱말 하나를 작은따옴표로 강조하는 것('유예')은 허용한다(2026-09-11 정본): 공백 없는 8자 이하.
DOUBLE_QUOTES = re.compile(r'["“”「」『』]')
SINGLE_SPAN = re.compile(r"‘([^’]*)’|'([^']*)'")
_EMPHASIS_MAX = 8
def _strip_apostrophes(t: str) -> str:
    return re.sub(r"(?<=\w)'(?=(s|ll|re|ve|d|m|t|clock)\b)|(?<=s)'(?!\w)|n't|\b[OoDdLl]'(?=[A-Z])", '', t)
def _has_quote(t: str) -> bool:
    """큰따옴표·겹낫표는 인용. 작은따옴표는 짝지어 감싼 내용이 '낱말 하나'(공백 없이 8자 이하)면 강조로 허용,
    그보다 길거나 공백이 있으면 인용으로 본다. 짝이 안 맞는 곧은 홑따옴표(아포스트로피 제외)도 인용 용도."""
    if DOUBLE_QUOTES.search(t):
        return True
    t2 = _strip_apostrophes(t)
    for m in SINGLE_SPAN.finditer(t2):
        inner = m.group(1) if m.group(1) is not None else m.group(2)
        if ' ' in inner or len(inner) > _EMPHASIS_MAX:
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
DASH = re.compile(r'\s*[—–]\s*')
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
# 35자를 넘을 때만 — 정본 ②의 "관형절 두 겹 이상 금지"를 문장형 헤드라인의 장황으로 좁혀 잰다.
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

# ── 주어 실종 훅 (2026-07-19) ────────────────────────────────────────────────
# "제목=도메인 주어 필수"의 결정론 근사. 의미 판단은 파이프라인 Claude 게이트
# (blog-produce Phase 3.55 / seo-check Layer 0)가 담당하고, 여기선 "숫자·단위만 있고
# 도메인 명사가 하나도 없는" 명백한 수치 전용 제목만 잡는다(오탐 최소화, precision 우선).
# 가상 채점(titles_scored.json 453개)으로 검증: 규칙 A는 2건만 검출(오탐 0), 규칙 B(무주어
# 동사훅)는 오탐 2/2로 폐기. 화이트리스트는 1차 오탐(철강·토큰 등)을 근거로 보강.
DOMAIN_WHITELIST = (
    'AI LLM GPT 데이터 모델 블로그 로봇 에이전트 알고리즘 칩 GPU 반도체 논문 벤치마크 '
    '데이터셋 오픈소스 스타트업 규제 거버넌스 프로토콜 아키텍처 파이프라인 프레임워크 '
    '플랫폼 네트워크 클라우드 스테이블코인 온톨로지 철강 미세조직 라벨링 토큰 실험실 '
    '픽셀 센서 단백질 유전자 세포 뉴런 증류 양자 예보 기상 날씨 의사 환자 코드 버그 '
    '서버 벡터 임베딩 드론 망원경 카메라 시뮬레이션 통신 차선 자율주행'
).split()
_DOMAIN_SUFFIX = re.compile(r'[가-힣]{2,}(성|화|론|학|법|권|체|망|량|률|정책|산업|기업|국가)')
def _has_domain_noun(t: str) -> bool:
    """도메인 주어(고유명사·기술용어·기관명) 존재를 형태+소형 화이트리스트로 근사."""
    if re.search(r'[A-Z][a-zA-Z0-9]+', t):   # 영문 고유명사/제품명
        return True
    if re.search(r'[一-鿿]', t):              # 한자 병기
        return True
    if any(k in t for k in DOMAIN_WHITELIST):
        return True
    if _DOMAIN_SUFFIX.search(t):              # 2글자+ 한자어 명사 접미
        return True
    return False
# 숫자는 "1억 5,100만"처럼 자릿수 쉼표·단위로 이어진 것을 한 덩이로 센다. 첫 낱말이 한글 주체+주격/보조사(알리바바가·정부는)
# 이거나 쉼표로 끝나면(펜실베이니아,) 주어가 이미 맨 앞에 있는 정본 형태라 훅 판정을 건너뛴다(2026-09-11 리뷰:
# "알리바바가 클로드에서 1억 5,100만 건을 퍼 갔다 — 앤트로픽"이 주어 실종으로 오판됐다).
_NUMBER_CHUNK = re.compile(r'\d[\d,.]*(?:\s*(?:억|만|천|백|조)(?:\s*\d[\d,.]*)?)*')
_KO_SUBJECT_FIRST = re.compile(r'^\s*[가-힣A-Za-z]*[가-힣]+(가|이|은|는|,|，)(?=\s|$)')
def _is_number_only_hook(t: str) -> bool:
    """규칙 A: 숫자 덩이 2개 이상인데 도메인 명사가 하나도 없음 = 수치 전용 주어 실종 훅."""
    if _KO_SUBJECT_FIRST.match(t):
        return False
    return len(_NUMBER_CHUNK.findall(t)) >= 2 and not _has_domain_noun(t)


# 길이 (정본: 20~35자 권장). 45자 초과는 위반, 36~45자·20자 미만은 권고 이탈, 12자 미만은 추상 위험.
LEN_MIN, LEN_MAX, LEN_HARD = 20, 35, 45


def eval_maintitle(t: str):
    """mainTitle — 헤드라인. 정본 v2(2026-09-11): 주어 먼저·결론 그대로·20~35자.
    코드로 재는 것: 따옴표/인용+반전/대조/줄표·콜론 허용 형태/미끼/키워드 나열/잘린 명사형/수수께끼/관형절 사슬/길이.
    서술 종결·질문형·'X: Y'·'— 출처' 꼬리는 허용이라 감점하지 않는다."""
    labels, ded = [], 0
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
        labels.append('수수께끼(~쪽은/것은 …였다)'); ded += 3
    if RIDDLE_OPEN.search(t) and not t.rstrip().endswith('?'):
        labels.append('수수께끼(주어 없는 무엇을 …)'); ded += 3
    if _is_number_only_hook(t):
        labels.append('주어 실종 훅'); ded += 3  # 수치 전용·도메인 명사 0. 사람이 웹에서 최종 확인
    if BALANCED_PAIR.search(t):
        labels.append('균형 대구'); ded += 2
    if TILDE.search(t):
        labels.append('물결표'); ded += 1
    n = len(t)
    strong, chain = _adnominal_chain(t)
    if strong >= _ADNOMINAL_HARD and n > _ADNOMINAL_LONG:
        labels.append(f'장황(관형절 {strong}겹+{_ADNOMINAL_LONG}자 초과)'); ded += 3
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
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
    if SPEECH_TWIST.search(t):
        labels.append('인용+반전'); ded += 3
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


def eval_pagetitle(t: str, main_title: str = ''):
    """pageTitle — 검색 변형. 따옴표/대조/미끼 금지, 줄표 1개 허용, 브랜드 접미사 필수.
    main_title이 주어지면 '검색 변형인가'도 본다(§0): 브랜드 접미사만 뗀 게 mainTitle과
    완전 동일하면 키워드 보강 기회를 놓친 것 — WARN(-2, 8점으로 통과선 위에 남되 표시)."""
    labels, ded = [], 0
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
    if CONTRAST.search(t):
        labels.append('대조공식'); ded += 3
    if CLICKBAIT.search(t):
        labels.append('미끼'); ded += 3
    if len(re.findall(r'[—–]', t)) >= 2:
        labels.append('줄표 2개+'); ded += 2
    if not re.search(r'\|\s*(페블러스|Pebblous)\s*$', t):
        labels.append('브랜드 접미사 없음'); ded += 1
    if len(t) > 62:
        labels.append('김(60자 초과)'); ded += 1
    if main_title:
        bare = re.sub(r'\s*\|\s*(페블러스|Pebblous)\s*$', '', t).strip()
        if bare and bare == main_title.strip():
            labels.append('mainTitle와 동일(검색 변형 아님)'); ded += 2
    return max(0, 10 - ded), labels


CONFIG_FIELD = {
    'mainTitle': re.compile(r'mainTitle:\s*"((?:\\.|[^"\\])*)"'),
    'subtitle': re.compile(r'subtitle:\s*"((?:\\.|[^"\\])*)"'),
    'pageTitle': re.compile(r'pageTitle:\s*"((?:\\.|[^"\\])*)"'),
}


def extract_config(repo: str, path_rel: str):
    """글 HTML의 PebblousPage.init config에서 mainTitle/subtitle/pageTitle 추출 (없으면 빈 값)."""
    html_path = os.path.join(repo, path_rel.rstrip('/'), 'index.html')
    out = {k: '' for k in CONFIG_FIELD}
    try:
        with open(html_path, encoding='utf-8') as f:
            txt = f.read()
        for k, rx in CONFIG_FIELD.items():
            m = rx.search(txt)
            if m:
                out[k] = m.group(1)
    except OSError:
        pass
    return out


def slug_of(path_rel: str) -> str:
    return re.sub(r'/(ko|en)/?$', '', path_rel).rstrip('/')


def reason_text(labels, score):
    # '§0'은 콘솔·엔진이 쓰는 게이트 이름 — 정본 v2 이후에도 계약 호환을 위해 유지한다.
    if not labels:
        return '§0 통과'
    return '§0 위반: ' + ' · '.join(labels)


# 게이트 판정 임계: 슬롯 점수 ≤ GATE_FAIL_MAX 면 하드 위반(따옴표/인용+반전/대조/줄표·콜론 형태/미끼/
# 키워드 나열/수수께끼/장황/45자 초과 등 1개 이상). 소프트 감점(길이 권고·관형절 경고)만 있으면 8~9점이라 통과한다.
GATE_FAIL_MAX = 7


def check_html(html_file: str) -> dict:
    """단일 HTML의 3슬롯 게이트 판정 — 발행 파이프라인 title-gate phase가 호출.
    반환: {file, ok, slots:{mainTitle|subtitle|pageTitle: {value, score, labels}}} (빈 슬롯은 생략)."""
    with open(html_file, encoding='utf-8') as f:
        txt = f.read()
    vals = {}
    for k, rx in CONFIG_FIELD.items():
        m = rx.search(txt)
        vals[k] = m.group(1) if m else ''
    evals = {
        'mainTitle': eval_maintitle,
        'subtitle': eval_subtitle,
        'pageTitle': eval_pagetitle,
    }
    slots, ok = {}, True
    for k, fn in evals.items():
        if not vals[k]:
            continue
        # pageTitle은 mainTitle과 비교해 '검색 변형인가'까지 본다(§0)
        score, labels = fn(vals[k], vals['mainTitle']) if k == 'pageTitle' else fn(vals[k])
        slots[k] = {'value': vals[k], 'score': score, 'labels': labels}
        if score <= GATE_FAIL_MAX:
            ok = False
    return {'file': html_file, 'ok': ok, 'slots': slots}


def main():
    ap = argparse.ArgumentParser(description='한글 제목 전수조사 — 제목 정본 v2(ko-style-standard §4-2) 채점')
    ap.add_argument('--repo', default='.', help='콘텐츠 클론 루트 (articles.json 위치)')
    ap.add_argument('--output', help='출력 경로 (기본: <repo>/_workspace/title-review/titles_scored.json)')
    ap.add_argument('--dry-run', action='store_true', help='파일 쓰지 않고 통계만')
    ap.add_argument('--min-score', type=int, help='이 점수 미만 행만 stdout 리포트')
    ap.add_argument('--check-html', metavar='FILE', action='append',
                    help='게이트 모드: 이 HTML 파일(들)의 3슬롯만 판정, JSON 출력. 위반 있으면 exit 1')
    ap.add_argument('--no-backup', action='store_true',
                    help='기존 titles_scored.json을 .bak로 백업하지 않고 덮어쓴다(자동/스케줄 실행용 — 백업 누적 방지)')
    args = ap.parse_args()

    # ── 게이트 모드 (발행 파이프라인 title-gate) ──
    if args.check_html:
        results = [check_html(f) for f in args.check_html]
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
        mt_score, mt_labels = eval_maintitle(title)
        st_score, st_labels = eval_subtitle(cfg['subtitle']) if cfg['subtitle'] else (None, [])
        pt_score, pt_labels = eval_pagetitle(cfg['pageTitle'], cfg.get('mainTitle') or title) if cfg['pageTitle'] else (None, [])
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
            'pageTitle': cfg['pageTitle'],
            'pt_score': pt_score,
            'pt_labels': pt_labels,
            'pt_reason': reason_text(pt_labels, pt_score) if cfg['pageTitle'] else '',
            'standard': '제목 정본 v2 (2026-09-11 ko-style-standard §4-2)',
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
