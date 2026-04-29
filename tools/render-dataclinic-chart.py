#!/usr/bin/env python3
"""
DataClinic JS 차트 렌더러 — 페블러스 브랜딩

Usage:
  # 단일 차트
  python3 tools/render-dataclinic-chart.py --report-id 115 --chart-id 13 --output image/density-l2.png

  # 리포트의 JS 차트 전체 일괄 생성
  python3 tools/render-dataclinic-chart.py --report-id 115 --all-js-charts --output-dir image/

환경변수:
  DATACLINIC_TOKEN  Firebase JWT (필수)

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

# --- 페블러스 브랜딩 ---
BG_COLOR     = "#0a0e1a"   # deep navy
FG_COLOR     = "#e2e8f0"   # light text
ORANGE_DARK  = "#ff6b35"
ORANGE_LIGHT = "#ff9500"
TEAL_COLOR   = "#00d4aa"
INDIGO_COLOR = "#6366f1"
GRID_COLOR   = "#1e2a3a"

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


def get_token() -> str:
    token = os.environ.get("DATACLINIC_TOKEN", "")
    if not token:
        print("ERROR: DATACLINIC_TOKEN 환경변수가 설정되지 않았습니다.", file=sys.stderr)
        sys.exit(1)
    return token


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

    url = f"{base}/report/classwise/chart/image?" + urllib.parse.urlencode(params)
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
    """chartId 13/23 — 밀도 히스토그램"""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    import matplotlib.patches as mpatches
    import numpy as np

    bins = data["data"]["total"]
    x_mid = [(b["bin_start"] + b["bin_end"]) / 2 for b in bins]
    heights = [b["heights"] for b in bins]

    # 피크 + 통계
    peak_idx = int(np.argmax(heights))
    peak_x = x_mid[peak_idx]
    total = sum(heights)
    mean_x = sum(x * h for x, h in zip(x_mid, heights)) / total if total else 0
    # 꼬리 임계값: 95 퍼센타일 이후
    cumsum = np.cumsum(heights)
    tail_thresh_idx = next((i for i, c in enumerate(cumsum) if c >= total * 0.95), len(x_mid) - 1)
    tail_x = x_mid[tail_thresh_idx]

    fig, ax = plt.subplots(figsize=(10, 5), facecolor=BG_COLOR)
    ax.set_facecolor(BG_COLOR)

    # 색상 그라데이션: 오렌지 기준, 꼬리는 틸, 이상치 영역은 인디고
    colors = []
    for i, x in enumerate(x_mid):
        if x > tail_x:
            colors.append(TEAL_COLOR)
        elif x < x_mid[0] + (x_mid[-1] - x_mid[0]) * 0.05:
            colors.append(INDIGO_COLOR)
        else:
            t = (x - x_mid[0]) / max(x_mid[-1] - x_mid[0], 1e-9)
            r1, g1, b1 = int(ORANGE_DARK[1:3], 16), int(ORANGE_DARK[3:5], 16), int(ORANGE_DARK[5:7], 16)
            r2, g2, b2 = int(ORANGE_LIGHT[1:3], 16), int(ORANGE_LIGHT[3:5], 16), int(ORANGE_LIGHT[5:7], 16)
            r = r1 + (r2 - r1) * t
            g = g1 + (g2 - g1) * t
            b = b1 + (b2 - b1) * t
            colors.append((r / 255, g / 255, b / 255))

    width = (x_mid[1] - x_mid[0]) if len(x_mid) > 1 else 0.002
    ax.bar(x_mid, heights, width=width * 0.9, color=colors, alpha=0.85)

    # 피크 어노테이션
    ax.annotate(
        f"peak {peak_x:.3f}",
        xy=(peak_x, heights[peak_idx]),
        xytext=(peak_x + width * 5, heights[peak_idx] * 0.9),
        color=FG_COLOR, fontsize=8,
        arrowprops=dict(arrowstyle="->", color=FG_COLOR, lw=0.8),
    )
    # 평균선
    ax.axvline(mean_x, color=TEAL_COLOR, lw=1.2, linestyle="--", alpha=0.7)
    ax.text(mean_x + width, max(heights) * 0.95, f"μ≈{mean_x:.3f}", color=TEAL_COLOR, fontsize=8)

    ax.set_title(title, color=FG_COLOR, fontsize=13, pad=12)
    ax.set_xlabel("Density", color=FG_COLOR, fontsize=10)
    ax.set_ylabel("Count", color=FG_COLOR, fontsize=10)
    ax.tick_params(colors=FG_COLOR)
    for spine in ax.spines.values():
        spine.set_edgecolor(GRID_COLOR)
    ax.yaxis.grid(True, color=GRID_COLOR, linewidth=0.5)
    ax.set_axisbelow(True)

    # 범례
    legend_items = [
        mpatches.Patch(color=ORANGE_DARK, label="Core distribution"),
        mpatches.Patch(color=TEAL_COLOR, label="Long tail"),
        mpatches.Patch(color=INDIGO_COLOR, label="Outlier zone"),
    ]
    ax.legend(handles=legend_items, facecolor=BG_COLOR, edgecolor=GRID_COLOR,
              labelcolor=FG_COLOR, fontsize=8, loc="upper right")

    plt.tight_layout()
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=150, bbox_inches="tight", facecolor=BG_COLOR)
    plt.close()
    print(f"  ✓ {output_path}")


def render_box_chart(data: dict, output_path: str, title: str = "Box Chart"):
    """chartId 15/24 — 클래스별 박스플롯"""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    import numpy as np

    plot = data["data"]["plot"]
    total_mean = data["data"].get("total_mean_density", None)

    # 중앙값 기준 정렬
    classes = sorted(plot.keys(), key=lambda c: plot[c]["median"])
    n = len(classes)

    fig_h = max(6, n * 0.32)
    fig, ax = plt.subplots(figsize=(10, fig_h), facecolor=BG_COLOR)
    ax.set_facecolor(BG_COLOR)

    positions = list(range(n))
    for i, cls in enumerate(classes):
        d = plot[cls]
        q1, med, q3 = d["first_quartile"], d["median"], d["third_quartile"]
        lo, hi = d["min"], d["max"]
        iqr = q3 - q1
        # 수염
        whisker_lo = max(lo, q1 - 1.5 * iqr)
        whisker_hi = min(hi, q3 + 1.5 * iqr)

        color = ORANGE_DARK if med < (total_mean or med) else ORANGE_LIGHT
        box_h = 0.5
        # 박스
        ax.barh(i, q3 - q1, left=q1, height=box_h, color=color, alpha=0.75, zorder=3)
        # 중앙값 선
        ax.plot([med, med], [i - box_h / 2, i + box_h / 2], color=FG_COLOR, lw=1.5, zorder=4)
        # 수염
        ax.plot([whisker_lo, q1], [i, i], color=FG_COLOR, lw=0.8, zorder=3)
        ax.plot([q3, whisker_hi], [i, i], color=FG_COLOR, lw=0.8, zorder=3)
        # 이상치
        outliers = [lo] if lo < whisker_lo else []
        outliers += [hi] if hi > whisker_hi else []
        for ov in outliers:
            ax.scatter(ov, i, color=INDIGO_COLOR, s=15, zorder=5)

    # 전체 평균 수직선
    if total_mean:
        ax.axvline(total_mean, color=TEAL_COLOR, lw=1.2, linestyle="--", alpha=0.8)
        ax.text(total_mean, n - 0.5, f"mean {total_mean:.4f}",
                color=TEAL_COLOR, fontsize=7, va="top")

    ax.set_yticks(positions)
    ax.set_yticklabels([c.replace("_", " ") for c in classes], fontsize=7)
    ax.tick_params(colors=FG_COLOR, labelsize=7)
    for spine in ax.spines.values():
        spine.set_edgecolor(GRID_COLOR)
    ax.xaxis.grid(True, color=GRID_COLOR, linewidth=0.5)
    ax.set_axisbelow(True)
    ax.set_title(title, color=FG_COLOR, fontsize=13, pad=12)
    ax.set_xlabel("Density", color=FG_COLOR, fontsize=10)

    plt.tight_layout()
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path, dpi=150, bbox_inches="tight", facecolor=BG_COLOR)
    plt.close()
    print(f"  ✓ {output_path}")


def render_pixel_histogram(data: dict, output_path: str, title: str = "Pixel Histogram"):
    """chartId 3 — R/G/B 픽셀 밝기 분포"""
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

    ax.fill_between(xs, r_vals, alpha=0.55, color="#ff4444", label="Red")
    ax.fill_between(xs, g_vals, alpha=0.55, color="#44cc44", label="Green")
    ax.fill_between(xs, b_vals, alpha=0.55, color="#4499ff", label="Blue")

    ax.set_title(title, color=FG_COLOR, fontsize=13, pad=12)
    ax.set_xlabel("Pixel Value (0–255)", color=FG_COLOR, fontsize=10)
    ax.set_ylabel("Count", color=FG_COLOR, fontsize=10)
    ax.tick_params(colors=FG_COLOR)
    for spine in ax.spines.values():
        spine.set_edgecolor(GRID_COLOR)
    ax.yaxis.grid(True, color=GRID_COLOR, linewidth=0.5)
    ax.set_axisbelow(True)
    ax.legend(facecolor=BG_COLOR, edgecolor=GRID_COLOR, labelcolor=FG_COLOR, fontsize=9)

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
