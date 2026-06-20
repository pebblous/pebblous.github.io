# articles.json 샤딩 — 충돌 근절 설계 + 안전 cutover 순서

## 문제
모든 글 PR이 단일 `articles.json`(610+ 항목)의 배열 끝에 항목을 추가한다. 동시 PR이면
같은 지점을 편집해 git 충돌이 난다. 임시방편(articles-union 머지 드라이버 + pr-conflict-autoheal
워크플로)은 GitHub 서버 머지에서 드라이버가 안 돌아 PR이 CONFLICTING으로 뜨는 사각지대가 있다.

## 해결 — 사이드카 + CI 조립
- 글 하나 = 사이드카 파일 하나: `articles.d/<id>.json` (id는 유일, 610개 검증).
- 각 PR은 **자기 사이드카 파일만** 추가/수정 → 서로 다른 파일이라 git 충돌 원천 차단.
- `articles.json` 은 더 이상 직접 편집하지 않는 **CI 생성 산출물**. push 시 `assemble-articles.py`가
  사이드카에서 재조립해 커밋한다. (sitemap.xml / rss.xml 과 동일한 'CI 생성' 모델)
- 인덱스(`scripts/index/init.js`)는 클라이언트에서 featured→date desc 재정렬하므로 배열 순서 무관.

### 도구 (Phase 1 — 완료, 동작 변경 없음)
- `tools/shard-articles.py` — articles.json → `articles.d/<id>.json` × N + `articles.categories.json`
- `tools/assemble-articles.py` — 사이드카 → articles.json (`--check`로 CI 검증). date desc·id asc 결정적.
- 검증: 실데이터 610개 round-trip 무손실(엔트리 차이 0), 멱등, byte 안정, validate-articles.js 0 errors.

## ⭐ union(base + overlay) — mass 마이그레이션 불필요·순서 사고 안전

assemble 는 **기존 articles.json(base) ∪ 사이드카(overlay, 같은 id면 사이드카 우선)** 로 동작한다.
→ 옛 612개는 base에 그대로 carry-forward, **신규 글만 사이드카**로 추가하면 충돌이 사라진다.
→ 한꺼번에 610개를 옮기는 위험한 원자적 마이그레이션이 **필요 없다**. 배포 순서가 어긋나도
   base가 받쳐주므로 라이브 인덱스가 비거나 항목이 유실되지 않는다.

이중 안전 가드:
- **no-op 가드**: `articles.d/`에 사이드카가 하나도 없으면 articles.json 을 건드리지 않는다.
- **base carry-forward**: 사이드카가 일부만 있어도 나머지는 base에서 유지(유실 0).

## cutover 순서

1. **Phase 1 (완료)** — 샤딩 도구(shard/assemble, union-mode) + 검증. 동작 변경 0.

2. **Phase 2 — assemble 워크플로 추가 (사본)**
   - `.github/workflows/assemble-articles.yml`: push(main)에서 `articles.d/**`·`articles.json` 변경 시
     `assemble-articles.py` 실행 → articles.json 갱신을 PR+자체머지(sitemap 워크플로와 동일 패턴, INDEX_PUSH_TOKEN).
   - no-op 가드 덕에 사이드카가 없는 동안엔 아무 일도 안 한다 → 지금 추가해도 안전.

3. **Phase 3 — 발행 스킬을 사이드카 작성으로 전환** (충돌이 실제로 사라지는 단계)
   쓰기 지점만 변경(읽기 전용 스킬은 그대로):
   - `.claude/skills/blog-publish/skill.md`, `dc-publish/skill.md`, `report-produce/skill.md`,
     `report-produce-express/skill.md`, `pb-story-produce/SKILL.md`, `dc-story-produce/SKILL.md`,
     `story-style-guide/SKILL.md`, `review-dataclinic-story/SKILL.md`
   - 변경: "articles.json 배열에 항목 추가" → "`articles.d/<id>.json` 파일 생성(글당 1, ko/en 각각)".
     articles.json 은 **PR에서 직접 편집하지 않음** → CI(Phase 2)가 base∪사이드카로 생성.
   - `tools/scan-articles-meta.py`: 사이드카(publisher/wordCount/modified)도 갱신하도록 적응(점진).

4. **Phase 4 — (선택, 신뢰 확보 후) 옛 612개 사이드카로 마이그레이션 + 임시방편 폐기**
   - `shard-articles.py --force` 로 base를 전부 사이드카화(완전 샤딩). 그 후 base 의존 제거 가능.
   - `.gitattributes` articles-union 드라이버 + `pr-conflict-autoheal.yml` 폐기(충돌 소멸).

## Phase 2b(옛 글 일괄 마이그레이션)는 union 모델에선 **선택 사항** — 신규 글만 사이드카로도 충돌이 사라진다.

## 롤백
- 어느 단계든 articles.json 자체는 항상 유효한 산출물로 남는다. 문제 시 Phase 2a 워크플로를 끄고
  (가드 덕에 자동 무력화) `shard`/`assemble` 없이 직접 articles.json 편집 모델로 즉시 복귀 가능.

## 상태
- [x] Phase 1 — 도구(shard/assemble union-mode) + 검증
- [ ] Phase 2 — assemble 워크플로(사본)
- [ ] Phase 3 — 발행 스킬 사이드카 전환 + scan-articles-meta 적응
- [ ] Phase 4 — (선택) 옛 글 일괄 샤딩 + union 드라이버/autoheal 폐기
