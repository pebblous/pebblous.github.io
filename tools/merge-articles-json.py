#!/usr/bin/env python3
"""Git merge driver for articles.json — id-union of the articles array.

Git invokes this as:  merge-articles-json.py %O %A %B
  %O  ancestor version (base)
  %A  current version (ours) — also the OUTPUT path; result must be written here
  %B  other version (theirs)

Strategy: both sides only ever *add* new articles (insert-at-head) or touch the
`modified`/`wordCount` of existing ones. We union by `id`:
  - keep every article whose id exists on either side
  - for ids on both sides, prefer "ours" then fill missing fields from "theirs"
  - article order: new ids (present on exactly one side) first, then the shared
    base order, so freshly added posts stay near the top of the index.
The `categories` wrapper is taken from whichever side has it (they're identical
in practice; ours wins on conflict).

Exits 0 on clean union, 1 if it cannot safely merge (Git then falls back to
leaving conflict markers for a human).
"""
import json
import sys


def load(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def main(argv):
    if len(argv) < 4:
        sys.stderr.write("usage: merge-articles-json.py <base> <ours> <theirs>\n")
        return 2
    base_path, ours_path, theirs_path = argv[1], argv[2], argv[3]

    try:
        ours = load(ours_path)
        theirs = load(theirs_path)
    except (json.JSONDecodeError, OSError) as e:
        sys.stderr.write(f"merge-articles-json: cannot parse inputs ({e})\n")
        return 1

    # Both must be the wrapper object {categories, articles}
    if not (isinstance(ours, dict) and isinstance(theirs, dict)
            and "articles" in ours and "articles" in theirs):
        sys.stderr.write("merge-articles-json: unexpected shape, not {categories, articles}\n")
        return 1

    try:
        base = load(base_path)
        base_articles = base.get("articles", []) if isinstance(base, dict) else []
    except (json.JSONDecodeError, OSError):
        base_articles = []

    ours_by_id = {a["id"]: a for a in ours["articles"] if "id" in a}
    theirs_by_id = {a["id"]: a for a in theirs["articles"] if "id" in a}
    base_ids = {a.get("id") for a in base_articles}

    # Bail if either side has entries without an id — can't union safely.
    if len(ours_by_id) != len(ours["articles"]) or len(theirs_by_id) != len(theirs["articles"]):
        sys.stderr.write("merge-articles-json: an article is missing 'id'\n")
        return 1

    def merged_entry(aid):
        o = ours_by_id.get(aid)
        t = theirs_by_id.get(aid)
        if o and t:
            # ours wins; fill any key only theirs has
            out = dict(t)
            out.update(o)
            return out
        return o or t

    all_ids = list(ours_by_id) + [i for i in theirs_by_id if i not in ours_by_id]
    # newly-added ids (not in base) first, preserving each side's order, then shared
    new_ids = [i for i in all_ids if i not in base_ids]
    shared_ids = [i for i in all_ids if i in base_ids]

    merged_articles = [merged_entry(i) for i in (new_ids + shared_ids)]

    result = dict(ours)  # keep ours' categories/wrapper
    if "categories" not in result and "categories" in theirs:
        result["categories"] = theirs["categories"]
    result["articles"] = merged_articles

    with open(ours_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
        f.write("\n")

    sys.stderr.write(
        "merge-articles-json: union ok — ours=%d theirs=%d -> %d (new=%d)\n"
        % (len(ours["articles"]), len(theirs["articles"]), len(merged_articles), len(new_ids))
    )
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
