# GitNexus 실전 보고서 2026 — SNS Posts

## LinkedIn (KO)

두 달 전 GitHub 트렌딩 1위였던 GitNexus.
지금 어떻게 됐을까요?

회계장부를 열어봤습니다.

**숫자부터:**
- 스타 1,195 → 약 41K (단, Pump.fun 사칭 토큰 사건으로 일부 인플레 가능)
- v1.6.5: 61 commits, 23 contributors (15명 첫 기여)
- KuzuDB → LadybugDB 인프라 전환

**진짜 데이터: Satapathy 17-agent crew 실측**
- 도구 호출 58 → 7 ops (88% 감소)
- 파일 읽기 100% 제거
- 토큰 13,750 → 3,500 (74% 절감)

하지만 이 수치는 결과입니다.
원인은 라우팅 결정트리와 역할 기반 토큰 티어.

**못 하는 것도 솔직하게:**
- Linux 커널급 레포에서 Node OOM (#1983)
- Vue·Kotlin 파싱 갭 (v1.6.6-rc에서 일부 해소)
- PolyForm NC 라이선스 회색지대 → LangWatch가 CodeGraphContext(MIT)로 전환한 전례

전체 4-티어 비교표, 상황별 결정 기준, 3개월 후 재확인 체크리스트까지 정리했습니다.

↗ 링크는 댓글에

#GitNexus #GraphRAG #AIAgent #MCP #코드지식그래프 #LLM #개발도구 #페블러스

---

## LinkedIn (EN)

Two months after GitHub trending #1, we opened the ledger on GitNexus.

**The numbers:**
- Stars: 1,195 → ~41K (but a Pump.fun impersonation event inflated the count — maintainer's own warning)
- v1.6.5: 61 commits, 23 contributors (15 first-timers)
- Infrastructure swap: KuzuDB → LadybugDB

**The real data — Satapathy's 17-agent crew measured:**
- Tool calls: 58 → 7 ops (88% reduction)
- File reads: 100% eliminated
- Tokens: 13,750 → 3,500 (74% savings)

But these numbers are outputs.
The inputs are the routing decision tree and role-based token tiers.

**What it can't do (honest):**
- Linux-kernel-scale repos: Node OOM (#1983)
- Vue/Kotlin parsing gaps (partially addressed in v1.6.6-rc)
- PolyForm NC commercial gray zone → LangWatch switched to CodeGraphContext (MIT)

Full 4-tier tool comparison, situational decision criteria, and a 3-month re-evaluation checklist in the report.

↗ Link in comments

#GitNexus #GraphRAG #AIAgents #MCP #CodeKnowledgeGraph #LLM #DevTools #Pebblous

---

## X/Twitter (KO) — Thread 1/3

GitNexus 두 달 후 실전 보고서

트렌딩 1위 → 41K 스타. 근데 41K는 액면 그대로 믿으면 안 됩니다. Pump.fun 사칭 토큰 사건이 있었거든요. 메인테이너 본인이 경고했습니다.

진짜 활동 신호는 v1.6.5: 61 commits, 23 contributors (15명 첫 기여), KuzuDB→LadybugDB 전환.

🧵 계속

---

## X/Twitter (KO) — Thread 2/3

Satapathy의 17-agent crew 실측 수치:

- 도구 호출 88% 감소 (58→7 ops)
- 파일 읽기 100% 제거
- 토큰 74% 절감 (13,750→3,500)

이 수치가 나온 비결은 라우팅 결정트리:
코드 심볼 → GitNexus
blast radius → GitNexus
시맨틱 연결 → Graphify
최후 수단 → Grep

Grep이 1순위가 아니라 마지막이라는 게 핵심입니다.

---

## X/Twitter (KO) — Thread 3/3

못 하는 것:
❌ Linux 커널급 레포: Node OOM
❌ Vue/Kotlin: 파싱 갭 (v1.6.6-rc에서 개선 중)
❌ 상업 사용: PolyForm NC 회색지대

상황별 결론:
- 개인/R&D/연구 → GitNexus
- 상업 SaaS 임베드 → CodeGraphContext (MIT) 또는 라이선스 협상
- PR 리뷰 자동화 → Code-Review-Graph

전체 보고서 링크: https://blog.pebblous.ai/report/gitnexus-production-report-2026/ko/

#GitNexus #GraphRAG #AIAgent

---

## Medium (Teaser)

**Title:** GitNexus Two Months Later: The Honest Ledger

Two months ago GitNexus hit GitHub trending #1 with 1,195 stars. Today it has ~41K. But is that number real? And does the 88% token reduction hold up in production?

We ran the numbers. The short version:

- The star count is inflated (maintainer's own warning about a Pump.fun impersonation event)
- The 88% reduction is real but requires a routing decision tree and role-based token tiers to reproduce
- PolyForm NC license creates a commercial gray zone that sent LangWatch to CodeGraphContext (MIT)
- Linux-kernel-scale repos still hit Node OOM; Vue/Kotlin have parsing gaps

The full report includes a 4-tier tool comparison (GitNexus vs CodeGraphContext vs Code-Review-Graph vs Repomix), the complete Satapathy case breakdown with exact routing tables, and a 3-month re-evaluation checklist.

[Read the full report →](https://blog.pebblous.ai/report/gitnexus-production-report-2026/en/)
