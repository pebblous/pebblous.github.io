# GSC Disavow 백업 — `disavow-pebblous.txt`

blog.pebblous.ai 의 Google Search Console **Disavow Links** 도구에 제출한 스팸 백링크
도메인 목록의 백업본. **진본(private) 레포에만 보관** — 사본은 public GitHub Pages라
스팸 도메인 목록을 두면 안 된다.

## 현재 상태 (2026-07-15)

- **제출 파일**: `disavow-pebblous.txt` — 53개 도메인 (`domain:` 형식)
- **GSC 확인 메시지**: `53 domains and 0 URLs are disavowed`
- **제출 시각**: 2026-07-15 09:57 KST (00:57 UTC)
- **대상**: `project/AgenticAI/ai-scientist-v2/` 페이지에 백링크를 건 뉴스/타임즈
  형태 스팸 의심 사이트들 (한국어 유사 언론 도메인 다수)

## ⚠️ 갱신 규칙 — 반드시 읽을 것

1. **disavow 는 누적이 아니라 전체 교체(full replace)**
   새 도메인을 추가하려면 이 파일(기존 53개) 을 편집해 **전체 목록**을 GSC 에 다시
   업로드해야 한다. 새 도메인만 올리면 기존 53개가 사라진다.

2. **GSC 가 소스 오브 트루스, 이 파일은 백업**
   GSC 콘솔에서 언제든 현재 disavow 파일을 다운로드할 수 있다. 갱신 시:
   1. GSC Disavow 도구 → 현재 파일 다운로드 (혹은 이 백업 사용)
   2. 편집 (도메인 추가/삭제)
   3. GSC 에 재업로드
   4. **이 백업 파일도 함께 갱신 + 커밋** (버전 관리)

3. **형식**: 한 줄에 하나. 도메인 전체 차단은 `domain:example.com`. 특정 URL 만
   차단은 URL 전체 기입. 주석은 `#` 로 시작.

## disavow 의 의미 (오해 방지)

- 해당 사이트의 백링크가 Google 순위 평가에 **영향을 주지 않게** 하는 조치일 뿐.
- 그 사이트가 콘텐츠를 삭제하거나 접근 차단되는 것은 **아니다**.
- 도용·무단 스크래핑 콘텐츠 자체의 삭제는 각 사이트에 개별 연락 또는 법적 조치가 별도 필요.

## 정상 판정되어 disavow 하지 않은 백링크 (재조사 시 참고)

홈페이지, CURK ontology pdf, karpathy-llm-wiki, meta-tribe, anthropic-emotions-report,
neural-computers-meta 의 백링크는 medium.com · note.com · github.com · netlify.app ·
blogspot.com · goover.ai 등 **정상 플랫폼**에서 온 것으로 확인 → 조치 불필요.
(다음 백링크 재조사 때 이 플랫폼들은 재확인 생략 가능.)
