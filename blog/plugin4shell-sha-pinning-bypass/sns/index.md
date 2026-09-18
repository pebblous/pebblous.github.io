# SNS 홍보 글: AI 코딩 도우미는 이름이 같으면 가짜 부품도 받아 쓴다

> 소스: blog/plugin4shell-sha-pinning-bypass/ko/index.html
> 생성일: 2026-09-19
> URL: https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

커밋 해시로 못 박아 둔 플러그인이 다른 코드로 바뀌었는데, 고정은 기록에 그대로 남아 있었습니다.

보안업체 AIR가 9월 17일 공개한 Plugin4Shell입니다. git에서 40자 해시 문자열은 커밋의 이름일 수도 있고 브랜치의 이름일 수도 있습니다. 둘이 같은 이름이면 git은 참조 쪽을 먼저 읽습니다. 공격자가 고정된 해시와 똑같은 이름의 브랜치에 악성 코드를 담아 기본 브랜치로 지정하면, 에이전트는 심사받은 커밋을 요구하고 그 브랜치를 받아 옵니다.

빠진 것은 체크아웃이 끝난 뒤 실제 커밋을 고정된 SHA와 대조하는 한 단계이고, 영향받은 코딩 에이전트 네 종이 모두 이 단계를 건너뛰고 있었습니다. Claude Code와 Codex는 플러그인을 배경에서 자동 갱신하는 것이 기본값이라, 승인 창을 본 적 없는 기기에서 코드가 실행됩니다.

넷 중 둘만 패치됐습니다. GitHub Copilot에는 패치가 없고, Gemini CLI는 패치 대신 지원 종료로 정리됐습니다. 다만 실제로 악용된 사례는 보고되지 않았고 CVE 번호도 아직 붙지 않았습니다. 수백만 대가 영향을 받았다는 규모는 발견자 자체 추정이고, 그 발견자는 에이전트 애드온을 재검증하는 제품을 파는 회사입니다.

이름을 적어 두는 일과 그 이름에 도착했는지 확인하는 일은 다릅니다. 플러그인이든 학습 데이터든 출처를 해시와 URL, 버전 문자열로만 검증하는 파이프라인이라면 같은 질문을 받을 자리에 서 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Plugin4Shell #AIRSecurity #ClaudeCode #GitHubCopilot #GeminiCLI #AI에이전트 #데이터보안 #AI거버넌스

---

## LinkedIn (EN)

A plugin pinned to a commit hash was swapped for different code, and the pin never moved.

That is Plugin4Shell, disclosed on September 17 by the Israeli security firm AIR. In git, a 40-character hash string can name a commit object or a branch, and when both exist under one name git resolves the reference first. An attacker creates a branch whose name is exactly the pinned hash, fills it with malicious code and makes it the repository default. The agent asks for the reviewed commit and receives that branch.

The missing step is a comparison of the commit actually checked out against the pinned SHA, and all four affected coding agents skipped it. Claude Code and Codex update installed plugins in the background by default, so the code can run on a machine whose owner never saw an approval prompt.

Two of the four have been patched, GitHub Copilot has none, and Gemini CLI was deprecated rather than fixed. No real-world exploitation has been reported and no CVE number has been assigned. The figure of millions of affected agents is the discoverer's own estimate, and the discoverer sells a product that re-verifies the add-ons agents load.

Writing a name down and confirming you arrived at it are two different jobs. Any pipeline that establishes provenance from a hash, a URL or a version string alone is standing in front of the same question. That holds for plugins and for training data alike.

▶ Read: https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Plugin4Shell #AIRSecurity #ClaudeCode #GitHubCopilot #GeminiCLI #AIAgent #DataSecurity #AIGovernance

---

## Twitter/X (KO)

커밋 해시로 고정해 둔 플러그인 자리에, 그 해시와 똑같은 이름의 브랜치가 들어앉습니다. git이 참조 쪽을 먼저 읽기 때문입니다. 코딩 에이전트 네 종이 체크아웃 뒤 실제 커밋을 고정된 SHA와 대조하지 않고 있었습니다.

해시를 적어 두는 것과 그 해시에 도착했는지 확인하는 것은 다른 일입니다.

https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/ko/

#페블러스 #Plugin4Shell #ClaudeCode #AI에이전트

---

## Twitter/X (EN)

A plugin pinned to a commit hash gets swapped for other code, and the pin never moves. A branch named exactly like the hash wins, because git resolves the reference first. All four major coding agents skipped the check that would have caught it.

Writing a name down is not the same as confirming you arrived at it.

https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/en/

#Pebblous #Plugin4Shell #ClaudeCode #AIAgent

---

## Facebook (KO)

팀에서 쓰는 코딩 도우미에 플러그인 몇 개를 깔아 둔 게 언제인지, 저는 기억하지 못합니다.

깔아 둔 뒤로 그 목록을 다시 열어 본 적이 없다는 뜻이기도 합니다.

며칠 전 지나간 보안 소식 하나가 그 목록을 다시 떠올리게 했습니다. 보안업체 AIR가 공개한 Plugin4Shell입니다.

마켓플레이스는 심사를 마친 플러그인을 커밋 해시로 못 박아 둡니다. 해시는 내용에서 계산된 값이라 위조가 어렵고, 그래서 이 이름이 가리키는 것은 하나뿐이라고 여겨져 왔습니다.

그런데 공격자가 그 해시와 똑같은 이름의 브랜치를 만들어 두면, git은 참조 쪽을 먼저 읽습니다. 고정은 기록에 그대로 남고, 고정이 가리키는 내용만 바뀝니다. 영향받은 코딩 에이전트는 넷이고, 그중 둘만 패치됐습니다.

저를 붙잡은 대목은 위조된 것이 해시가 아니라는 점이었습니다. 해시의 성질은 그대로였고, 그 이름이 해석되는 자리에서 다른 것이 대신 응답했습니다.

'이름표 신뢰'라고 불러 봅니다. 이름이 하나만 가리킨다고 믿고 그 뒤를 확인하지 않는 습관입니다. 이 습관은 코딩 에이전트에만 있지 않습니다. 학습 데이터셋의 해시, 모델 카드의 버전 태그, 계보 도구가 적어 두는 원천 URL도 모두 이름으로 내용을 식별합니다.

페블러스가 데이터 계보를 오래 들여다본 이유도 여기서 갈립니다. 어디서 왔다고 적는 일과, 적은 것이 맞는지 확인하는 일은 서로 다른 일입니다. 도구가 늘어난 쪽은 앞이었고, 이번에 뚫린 쪽은 뒤였습니다.

"적어 둔 이름에 정말 도착했는지, 우리는 어디서 확인하고 있나?"

이번 주에는 그 답을 코드에서 찾아보려 합니다. 이름이 같으면 같은 것으로 처리하는 줄이 우리 파이프라인 어디에 있는지부터요.

https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/ko/

#페블러스 #데이터클리닉 #데이터품질 #Plugin4Shell #데이터계보

---

## Facebook (EN)

I could not tell you when I installed the plugins my coding assistant is running.

Which is another way of saying I have not opened that list since.

A security disclosure that went past my feed a few days ago sent me back to it. Plugin4Shell, from the security firm AIR.

A marketplace reviews a plugin and nails it to a commit hash. The hash is computed from the contents, so it is hard to forge, and the name has long been taken to designate exactly one thing.

But if an attacker creates a branch whose name is that same hash, git resolves the reference first. The pin stays in the record, and only what it points at changes. Four coding agents were affected. Two of them have been patched.

What stayed with me is that the hash itself was never forged. Its properties held. Something else simply answered at the place where the name gets interpreted.

I have started calling it "name-trust." The habit of believing a name designates one thing and never checking behind it. That habit does not live only inside coding agents. The hash on a training dataset, the version tag on a model card, the source URL a lineage tool writes down: each identifies contents by a name.

This is where the work Pebblous has been doing on data lineage splits in two. Recording where something came from is one job. Confirming that the record is true is another. The tooling has grown on the first side. What broke here was the second.

"Where, exactly, do we confirm that we arrived at the name we wrote down?"

This week I want to look for that answer in the code. Starting with where our own pipeline treats the same name as the same thing.

https://blog.pebblous.ai/blog/plugin4shell-sha-pinning-bypass/en/

#Pebblous #DataClinic #DataQuality #Plugin4Shell #DataLineage
