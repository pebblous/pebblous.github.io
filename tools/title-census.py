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
VERB_END = re.compile(r'(했다|한다|이다|된다|왔다|간다|졌다|난다|든다|섰다|쳤다|랐다|웠다)\s*$')
TILDE = re.compile(r'~')


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
    if BALANCED_PAIR.search(t):
        labels.append('균형 대구'); ded += 2
    if TILDE.search(t):
        labels.append('물결표'); ded += 1
    if VERB_END.search(t):
        labels.append('동사 종결(발견인지 확인)'); ded += 1  # soft — 발견-동사면 정상
    n = len(t)
    if n < 12:
        labels.append('짧음(추상 위험)'); ded += 1
    elif n > 45:
        labels.append('김(45자 초과)'); ded += 1
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


def eval_pagetitle(t: str):
    """pageTitle — 검색 변형. 따옴표/대조/미끼 금지, 줄표 1개 허용, 브랜드 접미사 필수."""
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
        score, labels = fn(vals[k])
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
        pt_score, pt_labels = eval_pagetitle(cfg['pageTitle']) if cfg['pageTitle'] else (None, [])
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
    if os.path.exists(out):
        stamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')
        bak = out.replace('.json', f'-{stamp}.bak.json')
        os.rename(out, bak)
        print(f'백업: {bak}')
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(rows, f, ensure_ascii=False, indent=1)
    print(f'작성: {out} ({len(rows)}행)')


if __name__ == '__main__':
    main()
