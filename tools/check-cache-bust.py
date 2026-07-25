#!/usr/bin/env python3
"""캐시버스트(?v=) 스테일 검사 — 공용 CSS/JS 변경 시 참조 버전 갱신 강제.

배경 (2026-07-25, 사본 PR #980):
  css/styles.css에 #search-results{display:none}이 추가(2026-05-26)됐지만
  index.html의 참조는 ?v=20250109-2로 남아 있었다. 자산 내용이 바뀌어도
  ?v=를 안 올리는 패턴이 반복되면 CDN/프록시 캐시가 낡은 자산을 서빙할 수
  있고, 외부 검토가 낡은 전제로 진단하는 원인이 된다.

규칙:
  - 검사 대상 HTML(기본 index.html)이 참조하는 로컬 /css|/styles|/scripts
    자산이 diff 범위(base...head)에서 변경됐는데,
    * 참조에 ?v=가 있고 base와 head에서 값이 같으면 → FAIL (bump 필요)
    * 참조에 ?v=가 아예 없으면 → WARN (추가 권장, 실패 아님 —
      tailwind-build.css처럼 빌드마다 바뀌는 자산의 소음 방지)
    * ?v=가 바뀌었거나 참조/HTML이 신규면 → PASS
  - 아티클 페이지 수천 개는 검사하지 않는다. GitHub Pages max-age=600이라
    스테일 노출은 짧지만, 홈 셸(index.html)만은 강제한다.

사용:
  python3 tools/check-cache-bust.py                       # origin/main...HEAD
  python3 tools/check-cache-bust.py --base origin/main --head HEAD
  python3 tools/check-cache-bust.py --html index.html --html components/header.html

종료 코드: 0 통과(경고 포함), 1 스테일 ?v= 발견, 2 실행 오류.
"""

import argparse
import re
import subprocess
import sys

# href/src가 로컬 자산(/css, /styles, /scripts)을 가리키는 참조 추출
REF_RE = re.compile(
    r'(?:href|src)="(/(?:css|styles|scripts)/[^"?]+\.(?:css|js))(?:\?v=([^"]*))?"'
)


def run_git(*args):
    result = subprocess.run(
        ["git", *args], capture_output=True, text=True, check=False
    )
    if result.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)} 실패: {result.stderr.strip()}")
    return result.stdout


def git_show(ref, path):
    """ref 시점의 파일 내용. 존재하지 않으면 None."""
    result = subprocess.run(
        ["git", "show", f"{ref}:{path}"], capture_output=True, text=True, check=False
    )
    return result.stdout if result.returncode == 0 else None


def extract_refs(html_text):
    """{자산경로(선행 / 제거): ?v= 값 또는 None}"""
    refs = {}
    for path, version in REF_RE.findall(html_text):
        refs[path.lstrip("/")] = version if version else None
    return refs


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--base", default="origin/main", help="비교 기준 ref")
    parser.add_argument("--head", default="HEAD", help="검사 대상 ref")
    parser.add_argument(
        "--html", action="append", default=None,
        help="검사할 HTML (반복 지정 가능, 기본: index.html)",
    )
    args = parser.parse_args()
    html_files = args.html or ["index.html"]

    try:
        changed = set(
            run_git("diff", "--name-only", f"{args.base}...{args.head}").split()
        )
    except RuntimeError as e:
        print(f"오류: {e}", file=sys.stderr)
        return 2

    failures = []
    warnings = []

    for html in html_files:
        head_text = git_show(args.head, html)
        if head_text is None:
            continue  # head에 없는 파일은 검사 불가(신규 삭제 등)
        base_text = git_show(args.base, html)
        base_refs = extract_refs(base_text) if base_text else {}

        for asset, head_ver in extract_refs(head_text).items():
            if asset not in changed:
                continue
            if asset not in base_refs:
                continue  # 참조 자체가 신규 → 통과
            base_ver = base_refs[asset]
            if head_ver is None and base_ver is None:
                warnings.append(
                    f"{html}: {asset} 변경됐지만 ?v= 없음 — 캐시버스트 추가 권장"
                )
            elif head_ver == base_ver:
                failures.append(
                    f"{html}: {asset} 변경됐는데 ?v={head_ver} 그대로 — "
                    f"?v=YYYYMMDD 형식으로 갱신 필요"
                )

    for w in warnings:
        print(f"⚠️  {w}")
    for f in failures:
        print(f"❌ {f}")

    if failures:
        print(f"\n스테일 캐시버스트 {len(failures)}건 — 참조의 ?v=를 갱신하세요.")
        return 1
    print(f"✅ 캐시버스트 검사 통과 (검사 HTML {len(html_files)}개, "
          f"변경 파일 {len(changed)}개, 경고 {len(warnings)}건)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
