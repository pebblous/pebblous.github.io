#!/usr/bin/env python3
"""Pagefind 전문 검색 인덱스 빌드 — noindex 페이지 배제 스테이징 방식.

⛔ 보안 핵심: Pagefind는 <meta name="robots" content="noindex">를 무시하고
모든 HTML을 인덱싱한다 (v1.5 실측). 비밀번호 보호 페이지(wiki/private/**,
project/IR/** 등)는 JS 오버레이 방식이라 본문이 HTML에 그대로 있어, 그냥
돌리면 기밀 본문이 검색 발췌로 공개된다 (2026-07-25 실측 확인).

전략: HTML만 스테이징 디렉토리에 복사하되, 정적 noindex meta가 있는 파일은
제외한 뒤 그 위에서 Pagefind를 돌린다. 물리적으로 없는 파일은 인덱싱될 수
없다. 경로 하드코딩이 아닌 marker(noindex) 기반이라 새 보호 페이지도 자동
배제된다 — 보호 페이지는 noindex 필수라는 기존 규칙(CLAUDE.md)이 계약.

사용:
  python3 tools/build-search-index.py                # ./pagefind 에 출력
  python3 tools/build-search-index.py --output-path pagefind --site .
  python3 tools/build-search-index.py --dry-run      # 배제 목록만 출력

종료 코드: 0 성공, 1 빌드 실패, 2 안전성 검증 실패.
"""

import argparse
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

# 콘텐츠가 아닌 인프라 디렉토리 — 인덱스 대상 제외
SKIP_DIRS = {
    ".git", ".github", ".claude", "node_modules",
    "components",   # header/footer 조각 — 독립 페이지 아님
    "scripts",      # JS + Jinja 템플릿
    "tools", "docs", "history", "pagefind",
}
SKIP_FILES = {"404.html"}

# <head> 안 정적 noindex meta (JS 주입은 어차피 Pagefind도 못 보므로 무관)
NOINDEX_RE = re.compile(
    r'<meta[^>]+name=["\']robots["\'][^>]+content=["\'][^"\']*noindex', re.I
)
# noindex 외 보호 페이지 이중 안전망: 비번 보호 마커
PROTECTED_RE = re.compile(r"initPageProtection|initPressRoom|content-locked")


def is_excluded(html_path: Path) -> str | None:
    """배제 사유 문자열 또는 None(인덱스 대상)."""
    try:
        head = html_path.read_text(encoding="utf-8", errors="replace")
    except OSError as e:
        return f"read-error: {e}"
    if NOINDEX_RE.search(head):
        return "noindex"
    if PROTECTED_RE.search(head):
        return "protected-no-noindex"  # noindex 누락된 보호 페이지 — 배제 + 경고
    return None


def collect(site: Path):
    included, excluded = [], []
    for p in sorted(site.rglob("*.html")):
        rel = p.relative_to(site)
        if any(part in SKIP_DIRS for part in rel.parts[:-1]) or rel.name in SKIP_FILES:
            continue
        reason = is_excluded(p)
        (excluded if reason else included).append((rel, reason))
    return included, excluded


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--site", default=".", help="사이트 루트 (기본: .)")
    parser.add_argument("--output-path", default="pagefind", help="인덱스 출력 경로")
    parser.add_argument("--dry-run", action="store_true", help="배제 목록만 출력")
    args = parser.parse_args()

    site = Path(args.site).resolve()
    included, excluded = collect(site)

    print(f"인덱스 대상 {len(included)}개 / 배제 {len(excluded)}개")
    for rel, reason in excluded:
        marker = "⚠️ " if reason == "protected-no-noindex" else "  "
        print(f"{marker}배제[{reason}]: {rel}")

    # 안전성 검증: 보호 마커가 있는데 noindex가 없는 페이지는 배제되지만 경고
    missing_noindex = [r for r, why in excluded if why == "protected-no-noindex"]
    if missing_noindex:
        print(f"\n⚠️ 비번 보호인데 noindex 누락 {len(missing_noindex)}건 — "
              f"배제는 됐지만 검색엔진에는 노출 중일 수 있음. noindex 추가 요망.")
    if not excluded:
        print("⚠️ 배제 페이지 0건 — 보호 페이지가 있는 사이트라면 비정상. 중단.")
        return 2

    if args.dry_run:
        return 0

    with tempfile.TemporaryDirectory(prefix="pagefind-stage-") as stage_str:
        stage = Path(stage_str)
        for rel, _ in included:
            dst = stage / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(site / rel, dst)

        result = subprocess.run(
            ["npx", "-y", "pagefind", "--site", str(stage),
             "--output-path", str(Path(args.output_path).resolve())],
            capture_output=True, text=True,
        )
        tail = "\n".join((result.stdout + result.stderr).splitlines()[-6:])
        print(tail)
        if result.returncode != 0:
            print("❌ pagefind 빌드 실패")
            return 1

    out = Path(args.output_path)
    if not (out / "pagefind.js").exists():
        print("❌ 출력 검증 실패: pagefind.js 없음")
        return 1
    size_mb = sum(f.stat().st_size for f in out.rglob("*") if f.is_file()) / 1e6
    print(f"✅ 인덱스 생성 완료: {out} ({size_mb:.1f}MB, "
          f"대상 {len(included)} / 배제 {len(excluded)})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
