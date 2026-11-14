#!/usr/bin/env python3
"""탠저블 데이터 발행 꾸러미 검사 — docs/blog-service/tangible-data-intake.md v0.1 의 §2~§6 을 코드로.

    python3 tools/tangible-intake-check.py <package-dir>            # 사람용 요약, 실패 있으면 exit 1
    python3 tools/tangible-intake-check.py <package-dir> --json     # 기계 판독용 {ok, checks[], stats}
    python3 tools/tangible-intake-check.py story/<slug> --manifest tangible.published.json   # 변환본(없으면 자동 탐색)

검사(각각 pass/fail/warn):
  manifest      tangible.json 존재·파싱·필수 필드(★)·enum·slug 규칙(kind 별 접두)
  entry         entry·reportPath·verifyResultPath 존재
  register      uiRegister == 해라체 (uiRegisterWaiver 또는 exceptions[check=register] 있으면 warn 으로 통과)
  approval      publishApproval.status == approved
  evidence      id 유일·from 참조 존재·kind/transform enum·spec 경로 존재
  rights        required && unconfirmed → fail · status enum · exceptions[] 에 사람 승인 기록이 있으면 warn
  verify        verify-result.json 파싱·필수 검사 skipped/fail → fail
  runtime       dist 안 html/css/js 의 실행 참조: 절대경로(/…) fail · 외부 URL 은 externalRuntime 선언(접두 일치) + 허용 호스트 · preconnect/dns-prefetch 는 자산 아님
  secrets       .env/.git/.openai/credentials 류 파일 → fail
  stats         fileCount/totalBytes/treeHash 산출(원 dinov3 manifest 알고리즘과 동일) · manifest.stats 와 대조 · 100MB 초과 warn(검토선)

접수 쪽은 학습·추론·모델 다운로드를 하지 않는다 — 이 검사기는 파일만 읽는다.
"""
import argparse, hashlib, json, os, re, sys

SPEC = "0.1"
ALLOWED_HOSTS = ("cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com")
REVIEW_BYTES = 100 * 1024 * 1024
REQUIRED = ["specVersion", "slug", "kind", "version", "snapshotDate", "authors", "createdAt", "updatedAt",
            "entry", "language", "uiRegister", "publishApproval", "verifyResultPath", "evidence", "sources", "rights"]
KINDS = ("story", "art")
EV_KIND = ("measured", "synthetic")
EV_TRANSFORM = ("extracted", "computed", "projected", "authored")
RIGHT_STATUS = ("confirmed", "unconfirmed", "excluded")
SECRET_NAMES = re.compile(r"^(\.env(\..*)?|\.git|\.openai|.*credentials.*|.*\.pem|id_rsa.*)$", re.I)
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")

# 실행 참조: script/link/img/source/iframe 의 src|href, css url(), fetch('…')
RUNTIME_TAG = re.compile(r"<(script|link|img|source|iframe|video|audio)\b([^>]*)>", re.I)
ATTR_URL = re.compile(r"\s(?:src|href)\s*=\s*[\"']([^\"']+)[\"']", re.I)
HINT_REL = re.compile(r"\srel\s*=\s*[\"'][^\"']*\b(?:preconnect|dns-prefetch)\b", re.I)


def runtime_refs(text):
    """실행 자산 참조만 뽑는다 — preconnect/dns-prefetch 힌트는 자산이 아니다."""
    out = []
    for m in RUNTIME_TAG.finditer(text):
        attrs = m.group(2)
        if HINT_REL.search(attrs):
            continue
        a = ATTR_URL.search(attrs)
        if a: out.append(a.group(1))
    return out
CSS_URL = re.compile(r"url\(\s*[\"']?([^\"')]+)[\"']?\s*\)", re.I)
FETCH = re.compile(r"\bfetch\(\s*[\"'`]([^\"'`]+)[\"'`]", re.I)
ABS_URL = re.compile(r"^(?:https?:)?//")


def tree_stats(root, base=None):
    """dinov3 snapshot-manifest 와 같은 레시피: base(기본 root 의 부모) 기준 상대경로 {path,bytes,sha256} 를
    경로 코드포인트 순으로 정렬해 JSON.stringify(공백 없음) 한 문자열의 SHA-256. 그래서 'dist/index.html' 처럼 폴더 이름이 앞에 붙는다."""
    base = base or os.path.dirname(os.path.abspath(root))
    recs = []
    for dp, _dn, fn in os.walk(root):
        for f in fn:
            p = os.path.join(dp, f)
            rel = os.path.relpath(p, base).replace(os.sep, "/")
            with open(p, "rb") as fh:
                b = fh.read()
            recs.append({"path": rel, "bytes": len(b), "sha256": hashlib.sha256(b).hexdigest()})
    recs.sort(key=lambda r: r["path"])
    js = json.dumps(recs, separators=(",", ":"), ensure_ascii=False)
    return {"fileCount": len(recs), "totalBytes": sum(r["bytes"] for r in recs),
            "treeHash": hashlib.sha256(js.encode("utf-8")).hexdigest()}


def host_of(url):
    m = re.match(r"^(?:https?:)?//([^/]+)", url)
    return m.group(1).lower() if m else ""


def check_package(pkg, manifest_name=None):
    checks, stats = [], {}
    def add(cid, status, detail=""):
        checks.append({"id": cid, "status": status, "detail": detail})

    # 선언 파일: 지정 이름 > tangible.json(전달본) > tangible.published.json(변환본, story/<slug>/ 에 둔다)
    names = [manifest_name] if manifest_name else ["tangible.json", "tangible.published.json"]
    mpath = next((os.path.join(pkg, n) for n in names if n and os.path.isfile(os.path.join(pkg, n))), None)
    if not mpath:
        add("manifest", "fail", "선언 파일 없음: " + " / ".join(n for n in names if n)); return checks, stats, None
    try:
        m = json.load(open(mpath, encoding="utf-8"))
    except Exception as e:
        add("manifest", "fail", f"tangible.json 파싱 실패: {e}"); return checks, stats, None
    missing = [k for k in REQUIRED if k not in m or m[k] in (None, "", [], {})]
    if m.get("specVersion") != SPEC:
        add("manifest", "fail", f"specVersion {m.get('specVersion')!r} ≠ {SPEC}")
    elif missing:
        add("manifest", "fail", "필수 필드 없음: " + ", ".join(missing))
    else:
        slug, kind = m["slug"], m["kind"]
        if kind not in KINDS:
            add("manifest", "fail", f"kind {kind!r} ∉ {KINDS}")
        elif not SLUG_RE.match(slug):
            add("manifest", "fail", f"slug 형식 위반: {slug!r}")
        elif kind == "art" and not slug.startswith("tangible-data-art-"):
            add("manifest", "fail", "art 의 slug 는 tangible-data-art- 로 시작")
        elif kind == "story" and (not slug.startswith("tangible-data-") or slug.startswith("tangible-data-art-")):
            add("manifest", "fail", "story 의 slug 는 tangible-data- 로 시작(art- 제외)")
        else:
            add("manifest", "pass", f"{kind} {slug} v{m['version']} ({m['snapshotDate']})")

    # entry / paths
    for key, req in (("entry", True), ("reportPath", False), ("verifyResultPath", True)):
        v = m.get(key)
        if not v:
            if req: add(key, "fail", f"{key} 없음")
            continue
        p = os.path.normpath(os.path.join(pkg, v))
        if not p.startswith(os.path.normpath(pkg)) or not os.path.isfile(p):
            add(key, "fail", f"{key} 경로 없음: {v}")
        else:
            add(key, "pass", v)

    # register / approval
    exc = [e for e in (m.get("exceptions") or []) if isinstance(e, dict)]
    def exc_for(check, target=None):
        for e in exc:
            if e.get("check") == check and (target is None or e.get("target") in (None, "", target)) and e.get("approvedBy") and e.get("reason"):
                return e
        return None
    reg = m.get("uiRegister")
    if reg == "해라체":
        add("register", "pass", "해라체")
    elif m.get("uiRegisterWaiver"):
        add("register", "warn", f"{reg} — 예외 사유: {m['uiRegisterWaiver'][:80]}")
    elif exc_for("register"):
        e = exc_for("register"); add("register", "warn", f"{reg} — 예외 승인 {e.get('approvedBy')} {e.get('at','')}: {e.get('reason','')[:70]}")
    else:
        add("register", "fail", f"uiRegister {reg!r} — 신규 꾸러미는 해라체(예외는 uiRegisterWaiver)")
    pa = m.get("publishApproval") or {}
    add("approval", "pass" if pa.get("status") == "approved" else "fail",
        f"publishApproval.status={pa.get('status')!r} by={pa.get('by')!r}")

    # evidence
    ev = m.get("evidence") or []
    ids = [e.get("id") for e in ev]
    problems = []
    if len(ids) != len(set(ids)): problems.append("id 중복")
    for e in ev:
        if e.get("kind") not in EV_KIND: problems.append(f"{e.get('id')}: kind {e.get('kind')!r}")
        if e.get("transform") not in EV_TRANSFORM: problems.append(f"{e.get('id')}: transform {e.get('transform')!r}")
        for f in e.get("from") or []:
            if f not in ids: problems.append(f"{e.get('id')}: from {f!r} 없음")
        sp = e.get("spec")
        if sp and not os.path.isfile(os.path.join(pkg, sp)): problems.append(f"{e.get('id')}: spec 경로 없음 {sp}")
    add("evidence", "fail" if problems else "pass", "; ".join(problems) if problems else f"{len(ev)}건 (measured {sum(1 for e in ev if e.get('kind')=='measured')} · synthetic {sum(1 for e in ev if e.get('kind')=='synthetic')})")

    # rights
    rs = m.get("rights") or []
    bad = [r.get("target") for r in rs if r.get("status") not in RIGHT_STATUS]
    blocking = [r.get("target") for r in rs if r.get("required") and r.get("status") == "unconfirmed" and not exc_for("rights", r.get("target"))]
    excused = [r.get("target") for r in rs if r.get("required") and r.get("status") == "unconfirmed" and exc_for("rights", r.get("target"))]
    unconf = [r.get("target") for r in rs if r.get("status") == "unconfirmed" and not r.get("required")]
    if bad: add("rights", "fail", "status enum 위반: " + ", ".join(map(str, bad)))
    elif blocking: add("rights", "fail", "필수 자산 권리 미확인: " + ", ".join(map(str, blocking)))
    else:
        notes = []
        if excused: notes.append("예외 승인(필수·미확인): " + ", ".join(map(str, excused)))
        if unconf: notes.append("선택 자산 미확인: " + ", ".join(map(str, unconf)))
        add("rights", "warn" if notes else "pass", " | ".join(notes) if notes else f"{len(rs)}건 확인")

    # verify-result
    vp = m.get("verifyResultPath")
    vfile = os.path.join(pkg, vp) if vp else None
    if vfile and os.path.isfile(vfile):
        try:
            vr = json.load(open(vfile, encoding="utf-8"))
            cks = vr.get("checks") or []
            failed = [c.get("id") for c in cks if c.get("required") and c.get("status") != "pass"]
            meta = "" if (vr.get("ranAt") and vr.get("env")) else " (ranAt/env 없음 — 실행 환경을 적어 달라)"
            add("verify", "fail" if failed or not cks else "pass",
                ("필수 검사 미통과: " + ", ".join(map(str, failed))) if failed else ((f"{len(cks)}건" + meta) if cks else "checks 비어 있음"))
        except Exception as e:
            add("verify", "fail", f"verify-result 파싱 실패: {e}")

    # runtime references in dist
    entry = m.get("entry") or "dist/index.html"
    dist = os.path.join(pkg, entry.split("/")[0]) if "/" in entry else os.path.join(pkg, "dist")
    declared = {x.get("url") for x in (m.get("externalRuntime") or [])}
    abs_hits, ext_bad, ext_undeclared = [], [], []
    if os.path.isdir(dist):
        for dp, _dn, fn in os.walk(dist):
            for f in fn:
                if not f.lower().endswith((".html", ".htm", ".css", ".js", ".mjs")): continue
                p = os.path.join(dp, f); rel = os.path.relpath(p, pkg).replace(os.sep, "/")
                try: t = open(p, encoding="utf-8", errors="ignore").read()
                except Exception: continue
                refs = runtime_refs(t) + FETCH.findall(t) + (CSS_URL.findall(t) if f.lower().endswith((".css", ".html", ".htm")) else [])
                for r in refs:
                    r = r.strip()
                    if r.startswith(("data:", "#", "mailto:", "blob:")): continue
                    if ABS_URL.match(r):
                        if not any(r == d or r.startswith(d) for d in declared): ext_undeclared.append(f"{rel}: {r[:70]}")
                        elif host_of(r) not in ALLOWED_HOSTS: ext_bad.append(f"{rel}: {host_of(r)}")
                    elif r.startswith("/"):
                        abs_hits.append(f"{rel}: {r[:60]}")
        det = []
        if abs_hits: det.append("절대경로 " + "; ".join(abs_hits[:5]))
        if ext_undeclared: det.append("미선언 외부 실행 자산 " + "; ".join(ext_undeclared[:5]))
        if ext_bad: det.append("허용 밖 호스트 " + "; ".join(ext_bad[:5]))
        add("runtime", "fail" if det else "pass", " | ".join(det) if det else f"실행 참조 상대경로, 외부 선언 {len(declared)}건 허용 호스트")
    else:
        add("runtime", "fail", f"dist 폴더 없음: {dist}")

    # secrets
    found = []
    for dp, dn, fn in os.walk(pkg):
        for name in list(dn) + fn:
            if SECRET_NAMES.match(name): found.append(os.path.relpath(os.path.join(dp, name), pkg))
        dn[:] = [d for d in dn if not SECRET_NAMES.match(d)]
    add("secrets", "fail" if found else "pass", ", ".join(found[:5]) if found else "없음")

    # stats
    if os.path.isdir(dist):
        stats = tree_stats(dist, pkg)
        ms = m.get("stats") or {}
        mism = [k for k in ("fileCount", "totalBytes", "treeHash") if k in ms and ms[k] != stats[k]]
        if mism: add("stats", "fail", "manifest.stats 불일치: " + ", ".join(mism) + f" (산출 {stats['fileCount']}파일 {stats['totalBytes']}B {stats['treeHash'][:12]}…)")
        elif stats["totalBytes"] > REVIEW_BYTES: add("stats", "warn", f"{stats['totalBytes']/1048576:.1f}MB > 100MB 검토선 — 첫 화면 전송량·지연 로딩을 사람이 본다")
        else: add("stats", "pass", f"{stats['fileCount']}파일 {stats['totalBytes']/1048576:.1f}MB tree {stats['treeHash'][:12]}…")
    return checks, stats, m


def main():
    ap = argparse.ArgumentParser(description="탠저블 데이터 발행 꾸러미 검사 v0.1")
    ap.add_argument("package"); ap.add_argument("--json", action="store_true")
    ap.add_argument("--manifest", help="선언 파일 이름(기본: tangible.json, 없으면 tangible.published.json)")
    a = ap.parse_args()
    pkg = os.path.abspath(a.package)
    checks, stats, _m = check_package(pkg, a.manifest)
    ok = not any(c["status"] == "fail" for c in checks)
    if a.json:
        print(json.dumps({"ok": ok, "package": pkg, "spec": SPEC, "checks": checks, "stats": stats}, ensure_ascii=False, indent=1))
    else:
        mark = {"pass": "✅", "warn": "⚠️ ", "fail": "❌"}
        print(f"탠저블 데이터 접수 검사 v{SPEC} — {pkg}")
        for c in checks: print(f"  {mark[c['status']]} {c['id']:<9} {c['detail']}")
        print("→ " + ("접수 가능" if ok else "접수 중단 — 실패 항목을 실험 쪽에 돌려준다"))
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
