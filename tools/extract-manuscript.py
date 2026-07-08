#!/usr/bin/env python3
"""
extract-manuscript.py — 발행된 article HTML의 <main> 본문을 HTML-중립 Markdown 원고로 역추출한다.

목적(설계 결정 2026-07-08): 발행 산출물(ko/index.html, en/index.html)은 PebblousPage 컨벤션
(number-badge, key-insight, fade-in-card, Stat Card, 인라인 SVG 차트…)이 뒤섞여 있어 출간 후
사람이 '본문만' 고치기 어렵다. 각 언어 폴더에 index.md(중립 원고)를 함께 남겨, 사후 인간 수정을
Markdown에서 하게 한다. HTML 생성 경로(write-ko 등)는 건드리지 않는 HTML→MD **역추출**이라 회귀 위험 0.

- 의존성 없음(표준 라이브러리 html.parser만). 엔진/CI 어디서든 실행.
- 결정론적 규칙 변환(LLM 아님). badge/callout/표/이미지/링크를 MD 및 확장 표기로 매핑.
- 왕복 가능성 확보: HTML로 정확히 못 되돌리는 구조 요소는 손실 없이 마킹(> [!callout], <!-- stat-card -->).

사용:
  python3 tools/extract-manuscript.py <path/to/index.html>              # 옆에 index.md 생성
  python3 tools/extract-manuscript.py <path/to/index.html> -o out.md    # 출력 경로 지정
  python3 tools/extract-manuscript.py <dir>                             # dir 내 ko/en index.html 일괄
  python3 tools/extract-manuscript.py <path> --stdout                   # 파일 대신 stdout
"""
import sys
import os
import re
import argparse
from html.parser import HTMLParser
from html import unescape

# 본문에서 통째로 버릴 요소(스크립트/스타일/UI 버튼/인라인 SVG 차트 등).
# SVG는 MD로 표현 불가 — figure/figcaption로 감싼 이미지가 아니면 차트라 캡션만 남기고 그래픽은 버린다.
SKIP_SUBTREE = {"script", "style", "svg", "button", "nav"}
# 블록 경계 태그 — 앞뒤로 빈 줄을 넣어 문단을 분리한다.
BLOCK_TAGS = {"p", "div", "section", "figure", "figcaption", "ul", "ol", "li",
              "h1", "h2", "h3", "h4", "h5", "h6", "header", "table", "tr", "blockquote"}


class ManuscriptExtractor(HTMLParser):
    """<main> 내부를 순회하며 구조 보존 Markdown을 조립한다."""

    def __init__(self):
        super().__init__()
        self.in_main = False
        self.main_depth = 0          # <main> 진입 후 태그 깊이
        self.skip_depth = 0          # SKIP_SUBTREE 진입 깊이(>0이면 텍스트 무시)
        self.out = []                # 조립된 Markdown 조각들
        self.inline = []             # 현재 블록의 인라인 버퍼
        # 인라인 서식 상태
        self._bold = 0
        self._italic = 0
        self._code = 0
        self._href = None
        self._link_text_start = None
        # 리스트 컨텍스트 스택: 'ul' | 'ol'(항목 번호와 함께)
        self._list_stack = []
        # 헤딩 컨텍스트
        self._heading = None         # 'h2' 등 or None
        self._badge_prefix = None    # number-badge/sub-number-badge 텍스트(예: "1", "1.1")
        self._in_badge = False
        # 표 조립
        self._in_table = False
        self._table_rows = []
        self._cur_row = None
        self._cur_cell = None
        self._cell_is_header = False
        # figure/callout
        self._callout_depth = None   # key-insight div 진입 깊이
        self._in_figcaption = False
        # Stat Card — 값/라벨/설명을 한 줄로 묶기 위한 버퍼
        self._card_depth = None
        self._card_parts = []
        # 마지막으로 연 이미지(figure 안에서 캡션과 합치기 위함)
        self._pending_img = None

    # ── 진입/이탈 ────────────────────────────────────────────────
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "main":
            self.in_main = True
            return
        if not self.in_main:
            return
        self.main_depth += 1

        if self.skip_depth:
            self.skip_depth += 1
            return
        if tag in SKIP_SUBTREE:
            # img를 감싼 svg는 없으므로 안전하게 subtree 스킵
            self.skip_depth = 1
            return

        cls = a.get("class", "")

        # key-insight(콜아웃 박스) 시작 — MD 인용 확장 표기로
        if "key-insight" in cls and tag == "div":
            self._flush_block()
            self._callout_depth = self.main_depth
            self.out.append("> [!callout]")
            return

        # Stat Card(themeable-card) — 값/라벨/설명을 한 줄로 묶고 손실 없이 마킹.
        # 중첩 카드는 없으므로 최상위 진입만 카드로 잡는다.
        if "themeable-card" in cls and tag == "div" and self._card_depth is None:
            self._flush_block()
            self._card_depth = self.main_depth
            self._card_parts = []
            return

        # 헤딩
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self._flush_block()
            self._heading = tag
            self._badge_prefix = None
            return

        # number-badge / sub-number-badge → 헤딩 번호 접두
        if "number-badge" in cls or "sub-number-badge" in cls:
            self._in_badge = True
            return

        # 이미지
        if tag == "img":
            src = a.get("src", "")
            alt = a.get("alt", "").strip()
            # figure 안이면 캡션과 합치려고 보류, 아니면 즉시 출력
            self._pending_img = (alt, src)
            return

        if tag == "figure":
            self._flush_block()
            return
        if tag == "figcaption":
            self._flush_block()
            self._in_figcaption = True
            return

        # 리스트
        if tag == "ul":
            self._flush_block()
            self._list_stack.append(["ul", 0])
            return
        if tag == "ol":
            self._flush_block()
            self._list_stack.append(["ol", 0])
            return
        if tag == "li":
            self._flush_block()
            return

        # 표
        if tag == "table":
            self._flush_block()
            self._in_table = True
            self._table_rows = []
            return
        if tag == "tr" and self._in_table:
            self._cur_row = []
            return
        if tag in ("td", "th") and self._in_table:
            self._cur_cell = []
            self._cell_is_header = (tag == "th")
            return

        if tag == "blockquote":
            self._flush_block()
            return

        # 인라인 서식
        if tag in ("strong", "b"):
            self._bold += 1
            self.inline.append("**")
        elif tag in ("em", "i"):
            self._italic += 1
            self.inline.append("_")
        elif tag == "code":
            self._code += 1
            self.inline.append("`")
        elif tag == "a":
            self._href = a.get("href")
            self._link_text_start = len(self.inline)
        elif tag == "br":
            self.inline.append("  \n")

    def handle_startendtag(self, tag, attrs):
        # <img ... /> 자기완결 태그
        self.handle_starttag(tag, attrs)
        if tag == "img":
            self._emit_pending_img()

    def handle_endtag(self, tag):
        if tag == "main":
            self.in_main = False
            self._flush_block()
            return
        if not self.in_main:
            return

        if self.skip_depth:
            self.skip_depth -= 1
            self.main_depth -= 1
            return

        # 인라인 서식 닫기
        if tag in ("strong", "b") and self._bold:
            self._bold -= 1
            self.inline.append("**")
        elif tag in ("em", "i") and self._italic:
            self._italic -= 1
            self.inline.append("_")
        elif tag == "code" and self._code:
            self._code -= 1
            self.inline.append("`")
        elif tag == "a" and self._href is not None:
            text = "".join(self.inline[self._link_text_start:])
            del self.inline[self._link_text_start:]
            label = text.strip() or self._href
            self.inline.append(f"[{label}]({self._href})")
            self._href = None
            self._link_text_start = None

        if "badge" not in tag and self._in_badge and tag in ("span",):
            self._in_badge = False

        # 헤딩 닫기
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6") and self._heading:
            level = int(self._heading[1])
            text = "".join(self.inline).strip()
            self.inline = []
            if self._badge_prefix:
                text = f"{self._badge_prefix}. {text}" if text else self._badge_prefix
            if text:
                self.out.append(f"{'#' * level} {text}")
                self.out.append("")  # 헤딩 뒤 빈 줄(MD 표준)
            self._heading = None
            self._badge_prefix = None
            self.main_depth -= 1
            return

        # figcaption
        if tag == "figcaption":
            cap = "".join(self.inline).strip()
            self.inline = []
            self._in_figcaption = False
            if self._pending_img:
                alt, src = self._pending_img
                alt = alt or cap
                self.out.append(f"![{alt}]({src})")
                if cap:
                    self.out.append(f"*{cap}*")
                self._pending_img = None
            elif cap:
                self.out.append(f"*{cap}*")
            self.out.append("")  # 캡션 뒤 빈 줄
            self.main_depth -= 1
            return
        if tag == "figure":
            self._emit_pending_img()  # 캡션 없이 끝난 이미지
            self.main_depth -= 1
            return

        # 리스트 항목
        if tag == "li":
            text = "".join(self.inline).strip()
            self.inline = []
            if text:
                if self._list_stack and self._list_stack[-1][0] == "ol":
                    self._list_stack[-1][1] += 1
                    self.out.append(f"{self._list_stack[-1][1]}. {text}")
                else:
                    self.out.append(f"- {text}")
            self.main_depth -= 1
            return
        if tag in ("ul", "ol"):
            if self._list_stack:
                self._list_stack.pop()
            self.out.append("")  # 리스트 뒤 빈 줄
            self.main_depth -= 1
            return

        # 표
        if tag in ("td", "th") and self._in_table:
            cell = "".join(self._cur_cell).strip().replace("\n", " ") if self._cur_cell else ""
            if self._cur_row is not None:
                self._cur_row.append(cell)
            self._cur_cell = None
            self.main_depth -= 1
            return
        if tag == "tr" and self._in_table:
            if self._cur_row:
                self._table_rows.append(self._cur_row)
            self._cur_row = None
            self.main_depth -= 1
            return
        if tag == "table" and self._in_table:
            self._emit_table()
            self._in_table = False
            self.main_depth -= 1
            return

        # Stat Card 닫기 — 모은 조각을 한 줄로 (값 — 라벨 — 설명)
        if self._card_depth is not None and self.main_depth == self._card_depth and tag == "div":
            self._flush_block()  # 카드 안 마지막 인라인도 조각으로 편입
            parts = [p for p in self._card_parts if p.strip()]
            if parts:
                self.out.append("<!-- stat-card -->")
                self.out.append("**" + parts[0] + "**" + (" — " + " — ".join(parts[1:]) if len(parts) > 1 else ""))
                self.out.append("")
            self._card_depth = None
            self._card_parts = []
            self.main_depth -= 1
            return

        # 콜아웃 닫기
        if self._callout_depth is not None and self.main_depth == self._callout_depth and tag == "div":
            self._flush_block()
            self._callout_depth = None
            self.out.append("")
            self.main_depth -= 1
            return

        # 블록 경계
        if tag in BLOCK_TAGS:
            self._flush_block()

        self.main_depth -= 1

    def handle_data(self, data):
        if not self.in_main or self.skip_depth:
            return
        text = data
        if not text.strip() and "\n" in text:
            return
        # 표 셀 안이면 셀 버퍼로
        if self._cur_cell is not None:
            self._cur_cell.append(text)
            return
        if self._in_badge:
            self._badge_prefix = (self._badge_prefix or "") + text.strip()
            return
        self.inline.append(text)

    def handle_entityref(self, name):
        self.handle_data(unescape(f"&{name};"))

    def handle_charref(self, name):
        self.handle_data(unescape(f"&#{name};"))

    # ── 조립 헬퍼 ────────────────────────────────────────────────
    def _emit_pending_img(self):
        if self._pending_img:
            alt, src = self._pending_img
            self.out.append(f"![{alt or 'image'}]({src})")
            self.out.append("")  # 이미지 뒤 빈 줄
            self._pending_img = None

    def _flush_block(self):
        text = "".join(self.inline).strip()
        self.inline = []
        if not text:
            return
        # Stat Card 안이면 조각을 모아 뒀다가 카드 닫힘에서 한 줄로
        if self._card_depth is not None:
            self._card_parts.append(text)
            return
        # 콜아웃 안이면 인용 접두
        if self._callout_depth is not None:
            for ln in text.split("\n"):
                self.out.append(f"> {ln}" if ln.strip() else ">")
        else:
            self.out.append(text)
        self.out.append("")  # 문단 사이 빈 줄

    def _emit_table(self):
        if not self._table_rows:
            return
        cols = max(len(r) for r in self._table_rows)
        rows = [r + [""] * (cols - len(r)) for r in self._table_rows]
        header = rows[0]
        self.out.append("| " + " | ".join(header) + " |")
        self.out.append("| " + " | ".join(["---"] * cols) + " |")
        for r in rows[1:]:
            self.out.append("| " + " | ".join(r) + " |")
        self.out.append("")

    def get_markdown(self):
        # 연속 빈 줄 축약
        lines = []
        blank = False
        for ln in self.out:
            if ln == "":
                if blank:
                    continue
                blank = True
            else:
                blank = False
            lines.append(ln)
        return "\n".join(lines).strip() + "\n"


def extract_config(html):
    """PebblousPage.init() config에서 원고 헤더에 넣을 메타 추출."""
    def field(name):
        m = re.search(rf'{name}\s*:\s*["\']([^"\']+)["\']', html)
        return m.group(1) if m else None
    return {
        "mainTitle": field("mainTitle"),
        "subtitle": field("subtitle"),
        "publishDate": field("publishDate"),
        "category": field("category"),
    }


def html_to_markdown(html):
    cfg = extract_config(html)
    ex = ManuscriptExtractor()
    ex.feed(html)
    body = ex.get_markdown()
    # 프론트매터 — 원고가 어느 글인지, 사후 수정 시 어디에 반영되는지 명시
    fm = ["---"]
    if cfg.get("mainTitle"):
        fm.append(f"title: {cfg['mainTitle']}")
    if cfg.get("subtitle"):
        fm.append(f"subtitle: {cfg['subtitle']}")
    if cfg.get("publishDate"):
        fm.append(f"date: {cfg['publishDate']}")
    if cfg.get("category"):
        fm.append(f"category: {cfg['category']}")
    fm.append("source: index.html")
    fm.append("note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.")
    fm.append("---")
    header = ""
    if cfg.get("mainTitle"):
        header = f"# {cfg['mainTitle']}\n\n"
        if cfg.get("subtitle"):
            header += f"_{cfg['subtitle']}_\n\n"
    return "\n".join(fm) + "\n\n" + header + body


def process_file(html_path, out_path=None, to_stdout=False):
    with open(html_path, encoding="utf-8") as f:
        html = f.read()
    md = html_to_markdown(html)
    if to_stdout:
        sys.stdout.write(md)
        return None
    if out_path is None:
        out_path = os.path.join(os.path.dirname(html_path), "index.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(md)
    return out_path


def main():
    ap = argparse.ArgumentParser(description="발행 HTML의 <main> → HTML-중립 Markdown 원고 역추출")
    ap.add_argument("path", help="index.html 파일 또는 ko/en을 담은 글 디렉토리")
    ap.add_argument("-o", "--output", help="출력 .md 경로(단일 파일에만)")
    ap.add_argument("--stdout", action="store_true", help="파일 저장 대신 stdout")
    args = ap.parse_args()

    if os.path.isdir(args.path):
        found = []
        for lang in ("ko", "en"):
            hp = os.path.join(args.path, lang, "index.html")
            if os.path.isfile(hp):
                out = process_file(hp)
                found.append(out)
        if not found:
            print(f"error: {args.path} 안에 ko/index.html 또는 en/index.html 없음", file=sys.stderr)
            sys.exit(1)
        for o in found:
            print(f"wrote {o}")
    else:
        if not os.path.isfile(args.path):
            print(f"error: 파일 없음: {args.path}", file=sys.stderr)
            sys.exit(1)
        out = process_file(args.path, args.output, args.stdout)
        if out:
            print(f"wrote {out}")


if __name__ == "__main__":
    main()
