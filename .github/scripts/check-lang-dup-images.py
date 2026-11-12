#!/usr/bin/env python3
"""국·영문 같은 그림 두 벌 검사 (C6 6단계, 2026-11-09).

en/ 아래 파일이 같은 자리 ko/ 파일과 내용(git blob 해시)까지 같으면 실패한다.
영문 글은 그림을 따로 두지 말고 ko 쪽 파일을 가리키면 된다:
  <img src="image/x.png">  ->  <img src="../ko/image/x.png">
언어별 표지(image/index.png·og*)와 articles.d 가 직접 가리키는 파일은 예외.
사용: python3 .github/scripts/check-lang-dup-images.py [커밋, 기본 HEAD]
그림 내용을 내려받지 않는다(git ls-tree 해시만 본다)."""
import glob, os, subprocess, sys

rev = sys.argv[1] if len(sys.argv) > 1 else 'HEAD'
out = subprocess.run(['git', 'ls-tree', '-r', '--full-tree', rev],
                     capture_output=True, text=True, check=True).stdout
sha = {}
for line in out.splitlines():
    meta, path = line.split('\t', 1)
    _, typ, h = meta.split()
    if typ == 'blob':
        sha[path] = h

refs = ''
for f in glob.glob('articles.d/*.json'):
    try:
        refs += open(f, encoding='utf-8').read()
    except OSError:
        pass

TEXT = ('.html', '.md', '.json', '.jsonl', '.txt', '.xml', '.js', '.css')
dups = []
for p, h in sha.items():
    if '/en/' not in p or p.endswith(TEXT):
        continue
    k = p.replace('/en/', '/ko/', 1)
    if sha.get(k) != h:
        continue
    base = p.rsplit('/', 1)[-1].lower()
    if base.startswith('index.') or base.startswith('og') or p in refs:
        continue  # 언어별 표지·목록 썸네일
    dups.append(p)

summary = os.environ.get('GITHUB_STEP_SUMMARY')
if not dups:
    print(f'국·영문 같은 그림 두 벌: 0 ({rev})')
    sys.exit(0)

lines = [f'국·영문 같은 그림 두 벌 {len(dups)}개 — en 파일을 지우고 영문 글이 ko 파일을 가리키게 하세요.', '']
for p in sorted(dups)[:200]:
    rel = p.split('/en/', 1)[1]
    lines.append(f'- {p}  →  영문 글에서 "{rel}" 를 "../ko/{rel}" 로')
if len(dups) > 200:
    lines.append(f'… 외 {len(dups) - 200}개')
msg = '\n'.join(lines)
print(msg)
for p in sorted(dups)[:50]:
    print(f'::error file={p}::국·영문 같은 그림 — ko 파일을 가리키고 이 파일은 지우세요')
if summary:
    with open(summary, 'a', encoding='utf-8') as fh:
        fh.write('## 국·영문 같은 그림 검사\n\n' + msg + '\n')
sys.exit(1)
