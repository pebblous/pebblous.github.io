#!/usr/bin/env bash
# Register the custom git merge driver(s) this repo declares in .gitattributes.
#
# .gitattributes maps `articles.json` to merge=articles-union, but the *driver
# command* for that name lives in local git config, which is NOT version-
# controlled. Every fresh clone (and every agent worktree) must run this once,
# or `articles.json` conflicts fall back to manual resolution.
#
# Safe to re-run. Idempotent.
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
DRIVER="$REPO_ROOT/tools/merge-articles-json.py"

if [[ ! -f "$DRIVER" ]]; then
  echo "error: $DRIVER not found" >&2
  exit 1
fi

git config merge.articles-union.name "id-union merge for articles.json"
git config merge.articles-union.driver "python3 '$DRIVER' %O %A %B"

# changelog.jsonl uses the built-in `union` driver — no registration needed.

echo "Registered merge driver 'articles-union' -> python3 tools/merge-articles-json.py"
echo "changelog.jsonl uses built-in 'union' (no setup needed)."
echo "Done. articles.json + changelog.jsonl conflicts will now auto-resolve on merge."
