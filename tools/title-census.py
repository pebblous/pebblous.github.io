#!/usr/bin/env python3
"""
title-census.py — 한글 제목 전수조사 (title-strategy.md §0 보도기사·고급 매거진 기준, 2026-07-08).

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

# ── §0·§3.1 결정론 규칙 ─────────────────────────────────────────────────────
# 인용 검출 — 실제 인용(쌍)만 잡는다. 영어 아포스트로피(소유격 's·축약 n't·'re 등)는
# 정상 문법이라 제외한다(2026-07-11 오탐: "MAI-Thinking-1's"가 따옴표로 오판돼 교정 불가 잔존).
# 곧은 홑따옴표는 아포스트로피/축약 위치를 지운 뒤 남아 있을 때만(짝지어 감싼 인용) 위반으로 본다.
QUOTE_PAIRS = re.compile(r'["“”「」『』]|‘[^’]*’|"[^"]*"')  # 명백한 인용쌍·직선 큰따옴표
def _has_quote(t: str) -> bool:
    if QUOTE_PAIRS.search(t):
        return True
    # 곧은 홑따옴표: 축약/소유격('s 'll 're 've 'd 'm n't o'clock, 그리고 뒤에 문자 없는 복수 소유격 s')을 제거
    stripped = re.sub(r"(?<=\w)'(?=(s|ll|re|ve|d|m|t|clock)\b)|(?<=s)'(?!\w)|n't|\b[OoDdLl]'(?=[A-Z])", '', t)
    return "'" in stripped  # 남은 곧은 홑따옴표 = 인용 용도
CONTRAST = re.compile(r'(?:[가이은는를]\s*)?아니라|같은\s+\S+.{0,12},\s*다른')
DASH_COLON = re.compile(r'[—–]|:\s')
INCOMPLETE_END = re.compile(r'(이후|전략|조건|과제)\s*$')
CLICKBAIT = re.compile(r'충격|비밀|숨긴|N가지|\d+가지\s*비밀')
BALANCED_PAIR = re.compile(r',\s*(그러나|하지만)')
VERB_END = re.compile(r'(했다|한다|이다|된다|왔다|간다|졌다|난다|든다|섰다|쳤다|랐다|웠다|이었다|었다|겼다|낸다|뚫었다|막았다|나왔다|진다|간다|온다|린다|킨다|한 셈이다|못한다)\s*$')
TILDE = re.compile(r'~')

# ── §0.0 주어 실종 훅 (2026-07-19) ─────────────────────────────────────────
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
    '서버 벡터 임베딩'
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
def _is_number_only_hook(t: str) -> bool:
    """규칙 A: 숫자 2개 이상인데 도메인 명사가 하나도 없음 = 수치 전용 주어 실종 훅."""
    return len(re.findall(r'\d+', t)) >= 2 and not _has_domain_noun(t)


def eval_maintitle(t: str):
    """mainTitle — 헤드라인. 가장 엄격: 따옴표/대조/줄표·콜론/미완결/미끼 전면 금지."""
    labels, ded = [], 0
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
    if CONTRAST.search(t):
        labels.append('대조공식'); ded += 3
    if DASH_COLON.search(t):
        labels.append('줄표/콜론'); ded += 3
    if INCOMPLETE_END.search(t):
        labels.append('미완결 여운'); ded += 2
    if CLICKBAIT.search(t):
        labels.append('미끼'); ded += 3
    if _is_number_only_hook(t):
        labels.append('주어 실종 훅(§0.0)'); ded += 3  # 수치 전용·도메인 명사 0. 사람이 웹에서 최종 확인
    if BALANCED_PAIR.search(t):
        labels.append('균형 대구'); ded += 2
    if TILDE.search(t):
        labels.append('물결표'); ded += 1
    n = len(t)
    if VERB_END.search(t):
        # soft — 짧은 발견-동사("AI가 기상청을 이겼다")면 정상. 다만 길면 관성적 서술형(장황).
        if n > 33:
            # 장황 서술형(JH 2026-07-21): 동사 종결 + 33자 초과 = "~할 때마다 ~하는 ~이 나왔다"류.
            # 명사구로 압축해야 할 문장형 헤드라인. 이중 신호로 하드 감점.
            labels.append('장황한 서술형(동사종결+33자↑)'); ded += 3
        else:
            labels.append('동사 종결(발견인지 확인)'); ded += 1
    if n < 12:
        labels.append('짧음(추상 위험)'); ded += 1
    elif n > 45:
        labels.append('김(45자 초과)'); ded += 2   # 정본 20-40 대비 크게 초과 — 감점 강화
    elif n > 40:
        labels.append('김(40자 초과)'); ded += 1   # 정본 권장 상한(40) 초과
    return max(0, 10 - ded), labels


def eval_subtitle(t: str):
    """subtitle — 리드문. 대조/따옴표/미끼 금지, 줄표는 동격 재진술 의심으로 소프트 감점."""
    labels, ded = [], 0
    if _has_quote(t):
        labels.append('따옴표'); ded += 4
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
    if not labels:
        return '§0 통과'
    return '§0 위반: ' + ' · '.join(labels)


# 게이트 판정 임계: 슬롯 점수 ≤ GATE_FAIL_MAX 면 하드 위반(따옴표/대조/줄표·콜론/미끼 등 1개 이상).
# 소프트 감점(동사 종결 확인·길이)만 있으면 8~9점이라 통과한다.
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
    ap = argparse.ArgumentParser(description='한글 제목 전수조사 — title-strategy §0 기준 채점')
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
            'standard': 'title-strategy §0 (2026-07-08 보도기사·매거진)',
        })
        dist[mt_score] = dist.get(mt_score, 0) + 1

    # 통계
    flagged = [r for r in rows if r['mt_score'] < 10]
    hard = [r for r in rows if any(l in ('따옴표', '대조공식', '줄표/콜론', '미끼') for l in r['mt_labels'])]
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
