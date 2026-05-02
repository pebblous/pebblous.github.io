#!/usr/bin/env python3
"""
DataClinic JS 차트 렌더러 — 페블러스 브랜딩

Usage:
  # 단일 차트
  python3 tools/render-dataclinic-chart.py --report-id 115 --chart-id 13 --output image/density-l2.png

  # 리포트의 JS 차트 전체 일괄 생성
  python3 tools/render-dataclinic-chart.py --report-id 115 --all-js-charts --output-dir image/

환경변수 (택 1):
  DATACLINIC_TOKEN              Firebase JWT (직접 지정)
  DATACLINIC_EMAIL + PASSWORD   Firebase 자동 로그인 (토큰 없을 때)

JS 렌더링 전용 차트 (CDN 정적 이미지 없음):
  chartId 3  — Pixel Histogram (L1)
  chartId 13 — Density Histogram (L2)
  chartId 15 — Box Chart (L2)
  chartId 23 — Density Histogram (L3)
  chartId 24 — Box Chart (L3)
"""

import argparse
import os
import sys
import json
import urllib.request
import urllib.parse
from pathlib import Path

# --- DataClinic 웹 기준 컬러 (라이트 테마) ---
BG_COLOR     = "#ffffff"
FG_COLOR     = "#585858"   # 축 레이블, 텍스트
ORANGE       = "#F86825"   # 주 액센트 (산점도, 중앙값선, 수염)
BOX_FILL     = "#fdd2be"   # 박스 채우기
GRID_COLOR   = "#F5F5F5"   # 그리드 라인
MEAN_LINE    = "#000000"   # 전체 평균선 (검정 대시)

# JS-only 차트 ID → (이름, 레벨)
JS_CHART_IDS = {
    3:  ("Pixel Histogram",    "L1"),
    13: ("Density Histogram",  "L2"),
    15: ("Box Chart",          "L2"),
    23: ("Density Histogram",  "L3"),
    24: ("Box Chart",          "L3"),
}

JS_CHART_FILENAMES = {
    3:  "pixel-histogram-l1.png",
    13: "density-histogram-l2.png",
    15: "box-chart-l2.png",
    23: "density-histogram-l3.png",
    24: "box-chart-l3.png",
}


FIREBASE_API_KEY = "AIzaSyBI4CQ_ZiZ0tsrs2zuKRTt4h7D-9gik57k"

_cached_token: str | None = None


def firebase_login(email: str, password: str) -> str:
    """Firebase REST API로 로그인하여 idToken을 반환합니다."""
    url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={FIREBASE_API_KEY}"
    payload = json.dumps({
        "email": email,
        "password": password,
        "returnSecureToken": True,
    }).encode()
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            print(f"  ✓ Firebase 로그인 성공 ({email})")
            return data["idToken"]
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"ERROR: Firebase 로그인 실패 {e.code} — {body[:200]}", file=sys.stderr)
        sys.exit(1)


def get_token() -> str:
    global _cached_token
    if _cached_token:
        return _cached_token

    token = os.environ.get("DATACLINIC_TOKEN", "")
    if token:
        _cached_token = token
        return token

    # DATACLINIC_TOKEN이 없으면 email/password로 자동 로그인
    email = os.environ.get("DATACLINIC_EMAIL", "")
    password = os.environ.get("DATACLINIC_PASSWORD", "")
    if email and password:
        print("→ DATACLINIC_TOKEN 없음 — Firebase 자동 로그인 시도...")
        _cached_token = firebase_login(email, password)
        return _cached_token

    print("ERROR: DATACLINIC_TOKEN 또는 DATACLINIC_EMAIL + DATACLINIC_PASSWORD 환경변수가 필요합니다.", file=sys.stderr)
    sys.exit(1)


def fetch_chart_data(report_id: int, chart_id: int, class_name: str | None = None) -> dict:
    """DataClinic API에서 차트 데이터 JSON을 가져옵니다."""
    token = get_token()
    base = "https://api.dataclinic.ai"
    params = {
        "diagnosis_report_id": report_id,
        "diagnosis_report_chart_id": chart_id,
    }
    if class_name:
        params["class_name"] = class_name

    endpoint = "/chart/classwise" if class_name else "/chart/overall"
    url = f"{base}{endpoint}?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(
        url,
        headers={"Authorization": f"Bearer {token}", "Accept": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"ERROR: API 응답 {e.code} — {e.reason}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: API 호출 실패 — {e}", file=sys.stderr)
        sys.exit(1)


# ---------------------------------------------------------------------------
# 렌더러
# ---------------------------------------------------------------------------

def render_density_histogram(data: dict, output_path: str, title: str = "Density Histogram"):
    """chartId 13/23 — 밀도 히스토그램 (DataClinic 웹 스타일)"""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    bins = data["data"]["total"]
    x_mid = [(b["bin_start"] + b["bin_end"]) / 2 for b in bins]
    heights = [b["heights"] for b in bins]

    fig, ax = plt.subplots(figsize=(10, 5), facecolor=BG_COLOR)
    ax.set_facecolor(BG_COLOR)

    # 단일 색상 — DataClinic 웹과 동일한 연한 오렌지
    bar_width = (x_mid[1] - x_mid[0]) if len(x_mid) > 1 else 0.002
    ax.bar(x_mid, heights, width=bar_width, color="#f9b088", edgecolor="#f9b088", linewidth=0.3)

    ax.set_title(title, color="#333333", fontsize=13, fontweight="bold", pad=12)
    ax.set_xlabel("Density", color=FG_COLOR, fontsize=10)
    ax.set_ylabel("Count", color=FG_COLOR, fontsize=10)
    ax.tick_params(colors=FG_COLOR, labelsize=9)

    # 그리드: DataClinic 웹과 동일 — 수평 그리드만, 연한 회색
    ax.yaxis.grid(True, color=GRID_COLOR, linewidth=0.8)
    ax.set_axisbelow(True)
    # 스파인: 상단/우측 제거, 하단/좌측은 연한 회색
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["bottom"].set_edgecolor("#ddd")
    ax.spines["left"].set_visible(False)

    plt.tight_layout()
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=150, bbox_inches="tight", facecolor=BG_COLOR)
    plt.close()
    print(f"  ✓ {output_path}")


def render_box_chart(data: dict, output_path: str, title: str = "Box Chart"):
    """chartId 15/24 — 세로 방향 박스플롯 (DataClinic 웹 스타일)"""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    plot = data["data"]["plot"]
    total_mean = data["data"].get("total_mean_density", None)

    classes = list(plot.keys())  # API 순서 유지 (웹과 동일)
    n = len(classes)

    # 클래스 수에 따라 레이아웃 적응
    if n <= 40:
        fig_w = max(12, n * 0.45)
        fig_h = 5
        label_size = 7
        show_labels = True
        box_w = 0.5
        median_lw = 2.5
    elif n <= 100:
        fig_w = 16
        fig_h = 6
        label_size = 5
        show_labels = True
        box_w = 0.6
        median_lw = 1.5
    else:
        # 100+ 클래스: 레이블 생략, 밀집 표현
        fig_w = 16
        fig_h = 6
        label_size = 0
        show_labels = False
        box_w = 0.7
        median_lw = 1.0

    fig, ax = plt.subplots(figsize=(fig_w, fig_h), facecolor=BG_COLOR)
    ax.set_facecolor(BG_COLOR)

    positions = list(range(n))

    for i, cls in enumerate(classes):
        d = plot[cls]
        q1, med, q3 = d["first_quartile"], d["median"], d["third_quartile"]
        lo, hi = d["min"], d["max"]

        # 박스 (Q1~Q3) — 연한 오렌지 채우기
        ax.bar(i, q3 - q1, bottom=q1, width=box_w, color=BOX_FILL, edgecolor="none", zorder=3)
        # 중앙값 선 — 오렌지
        ax.plot([i - box_w / 2, i + box_w / 2], [med, med],
                color=ORANGE, lw=median_lw, zorder=4)
        # 수염 (min~max) — 오렌지
        ax.plot([i, i], [lo, hi], color=ORANGE, lw=0.8, zorder=2)
        # 수염 끝 가로선
        cap_w = box_w * 0.4
        ax.plot([i - cap_w / 2, i + cap_w / 2], [hi, hi], color=ORANGE, lw=0.8, zorder=2)
        ax.plot([i - cap_w / 2, i + cap_w / 2], [lo, lo], color=ORANGE, lw=0.8, zorder=2)

    # 전체 평균 수평선 — 검정 대시 (웹: stroke="#000", dasharray="5,5")
    if total_mean:
        ax.axhline(total_mean, color=MEAN_LINE, lw=1, linestyle="--", alpha=0.6, zorder=1)

    if show_labels:
        ax.set_xticks(positions)
        ax.set_xticklabels([c.replace("_", " ") for c in classes],
                           fontsize=label_size, rotation=45, ha="right")
    else:
        # 라벨 대신 클래스 수 표시
        ax.set_xticks([0, n // 4, n // 2, 3 * n // 4, n - 1])
        ax.set_xticklabels(["1", f"{n // 4}", f"{n // 2}", f"{3 * n // 4}", f"{n}"],
                           fontsize=8)
        ax.set_xlabel(f"Classes (n={n})", color=FG_COLOR, fontsize=10)

    ax.tick_params(colors=FG_COLOR, labelsize=8)
    ax.set_ylabel("Density", color=FG_COLOR, fontsize=10)
    ax.set_title(title, color="#333333", fontsize=13, fontweight="bold", pad=12)

    # 스파인/그리드 — 웹 스타일
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["bottom"].set_edgecolor("#ddd")
    ax.spines["left"].set_visible(False)
    ax.yaxis.grid(True, color=GRID_COLOR, linewidth=0.8)
    ax.set_axisbelow(True)

    plt.tight_layout()
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=150, bbox_inches="tight", facecolor=BG_COLOR)
    plt.close()
    print(f"  ✓ {output_path}")


def render_pixel_histogram(data: dict, output_path: str, title: str = "Pixel Histogram"):
    """chartId 3 — R/G/B 픽셀 밝기 분포 (DataClinic 웹 스타일)"""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    raw = data["data"]  # {"0": [R, G, B], ..., "255": [R, G, B]}
    xs = list(range(256))
    r_vals = [raw[str(i)][0] for i in xs]
    g_vals = [raw[str(i)][1] for i in xs]
    b_vals = [raw[str(i)][2] for i in xs]

    fig, ax = plt.subplots(figsize=(10, 4), facecolor=BG_COLOR)
    ax.set_facecolor(BG_COLOR)

    ax.fill_between(xs, r_vals, alpha=0.45, color="#ef4444", label="Red")
    ax.fill_between(xs, g_vals, alpha=0.45, color="#22c55e", label="Green")
    ax.fill_between(xs, b_vals, alpha=0.45, color="#3b82f6", label="Blue")

    ax.set_title(title, color="#333333", fontsize=13, fontweight="bold", pad=12)
    ax.set_xlabel("Pixel Value (0-255)", color=FG_COLOR, fontsize=10)
    ax.set_ylabel("Count", color=FG_COLOR, fontsize=10)
    ax.tick_params(colors=FG_COLOR, labelsize=9)

    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["bottom"].set_edgecolor("#ddd")
    ax.spines["left"].set_visible(False)
    ax.yaxis.grid(True, color=GRID_COLOR, linewidth=0.8)
    ax.set_axisbelow(True)
    ax.legend(facecolor=BG_COLOR, edgecolor="#ddd", labelcolor=FG_COLOR, fontsize=9)

    plt.tight_layout()
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=150, bbox_inches="tight", facecolor=BG_COLOR)
    plt.close()
    print(f"  ✓ {output_path}")


def render_chart(report_id: int, chart_id: int, output_path: str, class_name: str | None = None):
    """차트 ID에 따라 적절한 렌더러 호출."""
    if chart_id not in JS_CHART_IDS:
        print(f"WARNING: chartId {chart_id}는 JS 렌더링 전용 차트가 아닙니다.", file=sys.stderr)

    name, level = JS_CHART_IDS.get(chart_id, (f"Chart {chart_id}", ""))
    title_suffix = f" — {class_name}" if class_name else ""
    title = f"{name} ({level}){title_suffix}"

    print(f"→ Fetching chartId={chart_id} from report #{report_id}…")
    data = fetch_chart_data(report_id, chart_id, class_name)

    if chart_id in (13, 23):
        render_density_histogram(data, output_path, title)
    elif chart_id in (15, 24):
        render_box_chart(data, output_path, title)
    elif chart_id == 3:
        render_pixel_histogram(data, output_path, title)
    else:
        print(f"ERROR: chartId {chart_id}에 대한 렌더러가 없습니다.", file=sys.stderr)
        sys.exit(1)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="DataClinic JS 차트를 matplotlib PNG로 렌더링합니다."
    )
    parser.add_argument("--report-id", type=int, required=True, help="리포트 ID")
    parser.add_argument("--chart-id", type=int, help="차트 ID (단일 차트 생성 시)")
    parser.add_argument("--output", help="출력 PNG 경로 (단일 차트 시 사용)")
    parser.add_argument("--all-js-charts", action="store_true",
                        help="JS 렌더링 전용 차트 전체 생성 (chartId 3,13,15,23,24)")
    parser.add_argument("--output-dir", default=".", help="--all-js-charts 사용 시 출력 디렉토리")
    parser.add_argument("--class-name", help="classwise 차트 생성 시 클래스명")
    args = parser.parse_args()

    if args.all_js_charts:
        out_dir = Path(args.output_dir)
        print(f"리포트 #{args.report_id} — JS 차트 전체 생성 → {out_dir}")
        for cid, fname in JS_CHART_FILENAMES.items():
            render_chart(args.report_id, cid, str(out_dir / fname), args.class_name)
    else:
        if not args.chart_id or not args.output:
            parser.error("--chart-id 와 --output 이 필요합니다 (또는 --all-js-charts 사용)")
        render_chart(args.report_id, args.chart_id, args.output, args.class_name)

    print("완료.")


if __name__ == "__main__":
    main()
