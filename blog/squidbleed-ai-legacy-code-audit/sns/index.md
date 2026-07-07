# SNS 홍보 글: 사람이 29년 못 본 버그를 AI가 읽어냈다 (Squidbleed)

> 소스: blog/squidbleed-ai-legacy-code-audit/ko/index.html
> 생성일: 2026-07-07
> URL: https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/ko/
> voice: LinkedIn/Twitter → sns-cover · Facebook → reflective

---

## LinkedIn (KO)

1997년 1월부터 스퀴드 프록시에 잠들어 있던 결함을, 29년 만에 처음 '실제 버그'라고 짚어낸 것은 사람이 아니라 AI 에이전트였다.

Squidbleed(CVE-2026-47729)는 FTP 파서가 C 표준 함수의 드문 엣지 케이스를 오해해 옆 메모리를 읽는 결함으로, 같은 프록시를 지나던 다른 사용자의 자격증명이나 API 키가 새어 나갈 수 있다. AI는 '이상해 보인다'에 그치지 않고 C11 표준 조항을 인용해 왜 버그인지 논증했고, 두 달 사이 서로 모르던 세 팀이 같은 결함에 독립적으로 도달했다.

다만 발견이 곧 해결은 아니었다. 패치를 각 버전에 백포팅하고, 발견자를 기록하고, 사용자에게 알리는 일은 여전히 사람의 몫이었다. '오래 쓰였으니 검증됐다'는 믿음이 흔들리는 자리에서, 코드도 오래 방치되면 감사가 필요한 데이터가 된다는 사실이 남는다.

▶ 전문: https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Squidbleed #스퀴드프록시 #AI코드감사 #레거시코드 #AI에이전트 #데이터보안

---

## LinkedIn (EN)

A flaw sat in Squid Proxy's code from January 1997. Twenty-nine years later, the first to call it a real bug wasn't a person. It was an AI agent.

Squidbleed (CVE-2026-47729) lives in the FTP parser, where a misread edge case of a standard C function lets the code read past a buffer into adjacent memory. Another user's credentials or API keys, passing through the same proxy, can leak out. The AI didn't stop at "this looks off"; it cited the C11 standard to argue why it was a bug. Within two months, three unrelated teams reached the same flaw on their own.

Finding it, though, wasn't fixing it. Backporting the patch across versions, crediting the discoverer, notifying users: that work still ran on human hands. The comfort of "old code is proven code" gives way here. Code left untouched long enough becomes data that needs auditing.

▶ Read: https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Squidbleed #SquidProxy #AICodeAudit #LegacyCode #AIAgent #DataSecurity

---

## Twitter/X (KO)

1997년부터 스퀴드 프록시에 숨어 있던 버그를 29년 만에 처음 짚어낸 건 사람이 아니라 AI였다. C 표준 조항을 인용해 "실제 버그"라고 논증했다.

'오래 쓰였으니 검증됐다'는 믿음이 흔들린다. 방치된 코드는 감사가 필요한 데이터에 가깝다.

https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/ko/

#페블러스 #Squidbleed #AI코드감사 #데이터품질

---

## Twitter/X (EN)

A bug hid in Squid Proxy since 1997. After 29 years, the first to flag it as real wasn't a human but an AI, citing the C11 standard to prove it.

"Old code is proven code" no longer holds. Neglected code is data that needs auditing.

https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/en/

#Pebblous #Squidbleed #AICodeAudit #DataQuality

---

## Facebook (KO)

"이것은 실제 버그다."

29년 된 코드 한 조각을 두고 이렇게 판정한 것이 사람이 아니라 AI 에이전트였다는 대목에서, 잠깐 멈추게 됩니다.

스퀴드 프록시는 수많은 조직이 네트워크 경계에 두고 오래 써 온 소프트웨어입니다.

오래 썼으니 그만큼 검증됐다고, 우리는 대개 그렇게 믿어 왔습니다.

Squidbleed(CVE-2026-47729)는 그 믿음의 약한 고리를 건드립니다. 1997년 1월부터 코드에 있던 결함이, 흔히 밟히지 않는 드문 길목에 숨어 29년을 버텼습니다.

사람은 코드를 읽을 때 자주 지나는 길을 먼저 봅니다. 드문 구석은 "설마 여기서"라며 넘기기 쉽습니다. 이번에 AI는 그 구석을 넘기지 않고, C 언어 표준의 조항을 하나씩 대조하며 왜 버그인지를 논증했습니다.

여기서 저는 오래 다뤄 온 한 가지를 다시 떠올립니다. 한번 만들어진 데이터도 오래 방치되면 현실과 어긋나며 품질이 저하됩니다. 코드도 결국 사람이 읽고 쓰라고 만든 텍스트입니다.

오래 손대지 않은 코드는, 그 자체로 감사가 필요한 오래된 데이터에 가까운 것은 아닐까요.

다만 이야기는 발견에서 끝나지 않았습니다. 패치를 각 버전에 반영하고, 처음 신고한 사람을 제대로 기록하고, 사용자에게 알리는 일은 여전히 사람의 손을 거쳐야 했습니다. 발견은 빨라졌지만, 발견 이후는 아직 사람이 설계하는 시간입니다.

"검증된 레거시"가 상태가 아니라 가정이었다면, 그 가정을 다시 시험하는 일은 누구의 몫으로 남을까요.

▶ 전문: https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/ko/

#페블러스 #데이터클리닉 #데이터품질 #Squidbleed #AI코드감사

---

## Facebook (EN)

"This is a real bug."

The verdict on a 29-year-old piece of code came not from a person, but from an AI agent. That's where I find myself slowing down.

Squid Proxy is software many organizations have kept at the edge of their networks for a long time.

It's old, and we tend to read old as proven.

Squidbleed (CVE-2026-47729) presses on the weak link in that assumption. A flaw that had been in the code since January 1997 survived for twenty-nine years, tucked into a rarely traveled path.

People read code by the routes they walk most. The odd corner gets waved off with "surely not here." This time the AI didn't wave it off; it checked the branches against the C standard, one by one, and argued why it was a bug.

And here an old principle comes back to me. Data, once made, drifts from reality when left untouched, and its quality decays. Code is text too, written for people to read and write.

Left alone long enough, isn't it closer to old data that needs auditing?

Yet the story didn't end at discovery. Backporting the patch, crediting the first reporter, telling users: that still passed through human hands. Discovery got faster; what comes after discovery is still time that people design.

If "proven legacy" was an assumption rather than a state, whose job is it to test that assumption again?

▶ Read: https://blog.pebblous.ai/blog/squidbleed-ai-legacy-code-audit/en/

#Pebblous #DataClinic #DataQuality #Squidbleed #AICodeAudit
