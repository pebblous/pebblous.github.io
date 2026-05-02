#!/usr/bin/env python3
"""
GSC URL Inspection API — 미인덱싱 페이지 일괄 확인

사용법:
  python3 tools/gsc-index-check.py                    # sitemap.xml 전체 검사
  python3 tools/gsc-index-check.py --recent 20        # 최근 20개만
  python3 tools/gsc-index-check.py --url URL          # 단일 URL 검사
  python3 tools/gsc-index-check.py --recent 20 --submit  # 미인덱싱 URL 색인 요청

최초 실행 시 브라우저에서 Google 로그인 필요 (이후 토큰 자동 갱신).
"""

import argparse
import json
import os
import sys
import time
import xml.etree.ElementTree as ET
from pathlib import Path

# Google API imports
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# --- 설정 ---
SITE_URL = "https://blog.pebblous.ai/"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
TOOLS_DIR = Path(__file__).parent
CREDENTIALS_FILE = TOOLS_DIR / "gsc-credentials.json"
TOKEN_FILE = TOOLS_DIR / "gsc-token.json"
SITEMAP_FILE = TOOLS_DIR.parent / "sitemap.xml"
RATE_LIMIT_DELAY = 0.15  # 초 (600 calls/min = 0.1s, 여유 두고 0.15s)


def authenticate():
    """OAuth 인증. 최초 실행 시 브라우저 열림."""
    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CREDENTIALS_FILE.exists():
                print(f"❌ credentials 파일 없음: {CREDENTIALS_FILE}")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDENTIALS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)

        TOKEN_FILE.write_text(creds.to_json())
        print(f"✅ 토큰 저장: {TOKEN_FILE}")

    return creds


def get_sitemap_urls():
    """sitemap.xml에서 URL 추출."""
    if not SITEMAP_FILE.exists():
        print(f"❌ sitemap.xml 없음: {SITEMAP_FILE}")
        sys.exit(1)

    tree = ET.parse(SITEMAP_FILE)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

    urls = []
    for url_elem in root.findall("sm:url", ns):
        loc = url_elem.find("sm:loc", ns)
        lastmod = url_elem.find("sm:lastmod", ns)
        if loc is not None:
            urls.append({
                "url": loc.text,
                "lastmod": lastmod.text if lastmod is not None else ""
            })

    return urls


def inspect_url(service, url):
    """단일 URL의 인덱싱 상태 조회."""
    try:
        result = service.urlInspection().index().inspect(
            body={
                "inspectionUrl": url,
                "siteUrl": SITE_URL,
            }
        ).execute()

        inspection = result.get("inspectionResult", {})
        index_status = inspection.get("indexStatusResult", {})

        return {
            "url": url,
            "verdict": index_status.get("verdict", "UNKNOWN"),
            "coverageState": index_status.get("coverageState", ""),
            "robotsTxtState": index_status.get("robotsTxtState", ""),
            "indexingState": index_status.get("indexingState", ""),
            "lastCrawlTime": index_status.get("lastCrawlTime", ""),
            "pageFetchState": index_status.get("pageFetchState", ""),
            "crawledAs": index_status.get("crawledAs", ""),
            "error": None,
        }
    except Exception as e:
        return {
            "url": url,
            "verdict": "ERROR",
            "coverageState": "",
            "error": str(e),
        }


def print_result(r, idx=None):
    """결과 한 줄 출력."""
    prefix = f"[{idx}] " if idx is not None else ""
    verdict = r["verdict"]

    if verdict == "PASS":
        icon = "✅"
    elif verdict == "NEUTRAL":
        icon = "⚠️"
    elif verdict == "ERROR":
        icon = "❌"
    else:
        icon = "🔍"

    state = r.get("coverageState", "")
    crawl = r.get("lastCrawlTime", "")[:10] if r.get("lastCrawlTime") else "never"

    print(f"  {icon} {prefix}{verdict:<10} {state:<45} crawl:{crawl}  {r['url']}")


def main():
    parser = argparse.ArgumentParser(description="GSC URL Inspection — 미인덱싱 페이지 확인")
    parser.add_argument("--recent", type=int, help="최근 N개 URL만 검사")
    parser.add_argument("--url", type=str, help="단일 URL 검사")
    parser.add_argument("--ko-only", action="store_true", help="KO 페이지만 검사")
    parser.add_argument("--en-only", action="store_true", help="EN 페이지만 검사")
    parser.add_argument("--output", type=str, help="결과를 JSON 파일로 저장")
    args = parser.parse_args()

    # 인증
    print("🔐 Google 인증 중...")
    creds = authenticate()
    service = build("searchconsole", "v1", credentials=creds)
    print(f"✅ 인증 완료 (site: {SITE_URL})")
    print()

    # URL 목록 결정
    if args.url:
        urls = [{"url": args.url, "lastmod": ""}]
    else:
        urls = get_sitemap_urls()

        if args.ko_only:
            urls = [u for u in urls if "/ko/" in u["url"]]
        elif args.en_only:
            urls = [u for u in urls if "/en/" in u["url"]]

        # lastmod 기준 최신순 정렬
        urls.sort(key=lambda x: x.get("lastmod", ""), reverse=True)

        if args.recent:
            urls = urls[:args.recent]

    total = len(urls)
    print(f"📋 검사 대상: {total}개 URL")
    print(f"   예상 소요: ~{max(1, total * RATE_LIMIT_DELAY / 60):.1f}분")
    print("-" * 100)

    # 일괄 검사
    results = []
    indexed = 0
    not_indexed = 0
    errors = 0

    for i, u in enumerate(urls, 1):
        r = inspect_url(service, u["url"])
        results.append(r)

        if r["verdict"] == "PASS":
            indexed += 1
        elif r["verdict"] == "ERROR":
            errors += 1
        else:
            not_indexed += 1

        print_result(r, i)

        if i < total:
            time.sleep(RATE_LIMIT_DELAY)

    # 요약
    print()
    print("=" * 100)
    print(f"📊 결과 요약: 총 {total}개")
    print(f"   ✅ 인덱싱됨: {indexed}")
    print(f"   ⚠️ 미인덱싱: {not_indexed}")
    print(f"   ❌ 에러: {errors}")

    if not_indexed > 0:
        print()
        print("📌 미인덱싱 URL 목록:")
        for r in results:
            if r["verdict"] not in ("PASS", "ERROR"):
                print(f"   {r['url']}")
                print(f"      상태: {r['coverageState']}")

    # JSON 저장
    if args.output:
        out_path = Path(args.output)
        out_path.write_text(json.dumps(results, indent=2, ensure_ascii=False))
        print(f"\n💾 결과 저장: {out_path}")


if __name__ == "__main__":
    main()
