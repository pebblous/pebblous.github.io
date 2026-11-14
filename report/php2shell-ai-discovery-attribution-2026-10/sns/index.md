# SNS 홍보 글: 긴급 패치된 PHP2Shell, 공식 기록에 AI 이름이 없다

> 소스: report/php2shell-ai-discovery-attribution-2026-10/
> 생성일: 2026-10-22
> URL: https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

PHP가 10월 21일 긴급 패치한 원격코드실행 취약점을 두고 세 회사가 AI로 찾았다고 밝혔습니다. 기계가 읽는 공식 기록에 적힌 모델 이름은 0줄입니다.

공로가 적히는 자리는 두 군데입니다. 사람이 보는 깃허브 보안 권고에는 신고자 계정이 넷 올라 있고, 역할은 전부 'Reporter'입니다. 보안 도구가 실제로 긁어 가는 CVE 레코드를 열면 신고자가 셋입니다.

같은 사건인데 명단이 다릅니다. 오픈AI는 한쪽 취약점에서 발견자로, 다른 쪽에서 신고자로 적혀 있습니다. 규격상 둘은 다른 뜻입니다. 깃허브 화면에만 있고 CVE 레코드에는 아예 없는 계정도 하나 있습니다.

적을 칸이 없어서가 아닙니다. CVE 레코드 규격에는 발견에 쓰인 도구를 적는 칸과 후원 주체를 적는 칸이 따로 있고, 깃허브 권고 작성 화면의 역할 드롭다운에도 'Tool'이 그대로 들어 있습니다. 공로 기록을 가진 레코드 92,928건 가운데 도구 칸을 채운 것은 774건이었습니다. 쓰는 곳이 없는 것도 아닙니다. 구글이 자사 레코드에 자기네 AI 이름을 발견자로 적었고, curl과 레드햇도 같은 이름을 자기 레코드에 적었습니다.

그러면 이 사건에서 가장 자세히 적힌 자리는 어디였을까요. 공식 기록이 아니라 PHP 재단이 패치 당일 올린 감사 인사말이었습니다. 거기에는 오픈AI 쪽 담당 팀 이름과 사람 이름, 그리고 공로 기록 어느 쪽에도 나오지 않는 기관 둘이 들어 있습니다. 적을 의지가 없었던 게 아닙니다. 적은 자리가 구조화된 칸이 아니라 산문이었을 뿐입니다. 산문은 기계가 읽지 못하고 집계되지도 않습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 진단보다 어려운 쪽은 늘 성적서입니다. 무엇을 무슨 기준으로 쟀고 몇 건 중 몇 건이 걸렸는지를, 몇 달 뒤 다시 열어 볼 수 있는 칸에 남기는 일. 이번 건은 그 일의 반대 사례이고, 검증이 가장 엄격해야 할 분야에서 나왔습니다.

이 글은 누가 먼저 찾았는지 판정하지 않습니다. 판정할 근거가 기록에 없기 때문이고, 다음 사건에서도 없을지는 이번에 무엇을 적어 두느냐에 달려 있습니다.

▶ 전문: https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PHP2Shell #CVE #OpenAI #Wiz #GoogleBigSleep #AI거버넌스

---

## LinkedIn (EN)

PHP shipped emergency patches on 21 October for two remote code execution flaws, and three companies have said AI found them. The official machine-readable record names no model at all.

Credit for a vulnerability gets recorded in two places. The GitHub security advisory, the page people read, lists four reporting accounts, all tagged 'Reporter'. The CVE records, the files security tooling actually ingests, list three reporting parties.

Same incident, different roster. OpenAI carries the role of finder on one flaw and reporter on the other, and under the format spec those are different things. One account on the GitHub page is absent from the CVE records altogether.

This is not for want of a field. The CVE record format has one value for the tool used in a discovery and another for the party that funded it, and GitHub's own advisory editor still offers 'Tool' in its role dropdown. Of the 92,928 records that carry any credit at all, 774 fill the tool field. Nor is the field unused. Google names its own AI as the finder in its records, and curl and Red Hat have written the same name into theirs.

So where did this incident get written down in the most detail? Not in either official record, but in the thank-you line of the PHP Foundation blog post published on patch day. That sentence carries the OpenAI team name, an individual's name, and two organisations that appear in neither credit record. Nobody was unwilling to write it down. They wrote it in prose rather than a structured field, and prose is not machine-readable and never gets counted.

Pebblous benchmarks the quality of AI training data with DataClinic. The hard part was never the diagnosis; it is the scorecard that has to travel with it, the record of what was measured, against which rule, and how many of how many failed. This incident is that work in reverse, and it happened in the field where verification is supposed to be strictest.

This article does not rule on who found the flaws first. The record does not hold the evidence to rule on it, and whether the next one will depends on what gets written down this time.

▶ Read: https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PHP2Shell #CVE #OpenAI #Wiz #GoogleBigSleep #AIGovernance

---

## Twitter/X (KO)

PHP가 긴급 패치한 원격코드실행 취약점을 두고 세 회사가 AI로 찾았다고 밝혔습니다. 기계가 읽는 공식 CVE 레코드에 적힌 모델 이름은 0줄입니다.

적을 칸이 없어서가 아닙니다. 발견에 쓴 도구를 적는 칸은 규격에 이미 있고, 백 건 중 한 건도 그 칸을 채우지 않습니다.

https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/ko/

#페블러스 #데이터품질 #PHP2Shell #CVE

---

## Twitter/X (EN)

Three companies say AI found the PHP flaws patched on an emergency schedule this week. The CVE records that machines read name no model.

The field exists. The format has a value for the tool used in a discovery, and fewer than one record in a hundred fills it.

https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/en/

#Pebblous #DataQuality #PHP2Shell #CVE

---

## Facebook (KO)

10월 21일 밤에 서버를 올리신 분이 많았을 겁니다.

PHP가 원격코드실행 취약점 두 건에 긴급 패치를 냈고, 거의 모든 웹이 그 언어 위에 서 있습니다.

패치는 그날로 끝났습니다. 제가 오래 붙잡은 건 그다음입니다.

세 회사가 각자 AI로 찾았다고 밝혔습니다. 그래서 공로가 어디에 어떻게 적혔는지를 열어 봤습니다.

적는 자리가 두 군데 있습니다. 사람이 보는 깃허브 화면, 그리고 보안 도구가 긁어 가는 CVE 레코드.

둘이 다릅니다. 한쪽은 신고자가 넷이고 한쪽은 셋입니다. 같은 회사가 한 취약점에서는 발견자로, 다른 취약점에서는 신고자로 적혀 있습니다.

그리고 어느 쪽에도 모델 이름은 한 줄도 없습니다.

적을 칸이 없어서가 아니었습니다.

규격에는 발견에 쓴 도구를 적는 칸이 따로 있고, 후원 주체를 적는 칸도 따로 있습니다. 문법은 다 갖춰져 있는데 그 자리에 들어간 문장이 없습니다.

가장 자세히 적힌 자리는 따로 있었습니다.

PHP 재단이 패치 당일 올린 감사 인사말입니다. 담당 팀 이름도, 사람 이름도, 공로 기록 어디에도 없는 기관 둘도 거기에 다 있습니다.

적을 마음이 없었던 게 아니었던 셈입니다. 적은 자리가 칸이 아니라 산문이었습니다. 산문은 기계가 읽지 못하고, 블로그 주소는 언젠가 바뀝니다.

그래서 이 글이 보는 것은 보안 결함이 아니라 '기록 결함'입니다.

값은 있는데 그 값이 어떻게 만들어졌는지가 없는 상태. 라벨은 붙어 있는데 누가 무슨 기준으로 붙였는지가 없는 상태.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이 사건에서 제일 길게 들여다본 숫자는 0줄이 아니라 0.83%였습니다. 공로 기록을 가진 레코드 92,928건 가운데 도구 칸을 채운 것이 774건입니다. 칸이 없어서 비어 있는 게 아니라, 있는데 채우지 않아서 비어 있습니다. 데이터 품질 현장에서 가장 자주 만나는 실패가 정확히 이 모양입니다.

이 글은 누가 먼저 찾았는지 판정하지 않습니다. 판정할 근거가 기록에 없기 때문입니다.

다만 읽고 나면 자기 조직 쪽으로 넘어오는 질문이 하나 있습니다.

"우리 팀이 AI를 써서 찾은 것을 상대에게 알릴 때, 무엇을 같이 적어 보냅니까?"

새 규격을 기다릴 일은 아닙니다. 적을 칸은 이미 있습니다.

▶ 전문: https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/ko/

#페블러스 #데이터클리닉 #데이터품질 #PHP2Shell #CVE #AI거버넌스

---

## Facebook (EN)

A lot of people were restarting servers on 21 October.

PHP had just shipped emergency patches for two remote code execution flaws, and most of the web still stands on that language.

The patching was done that day. What held me was what came after.

Three companies each said AI had found the flaws. So I went looking for where that was written down.

There are two places credit gets recorded. The GitHub advisory that people read, and the CVE records that security tooling ingests.

They disagree. One lists four reporters, the other lists three. The same company is the finder on one flaw and the reporter on the other.

And neither one carries a single line naming a model.

It was not for want of a field.

The format has a value for the tool used in a discovery, and another for the party that funded it. The grammar is all there. No sentence was ever written into it.

The fullest account of who did what sits somewhere else entirely.

It is the thank-you line of the PHP Foundation blog post from patch day. The team name is in it, an individual's name is in it, and so are two organisations that appear in neither credit record.

Nobody was unwilling to write it down. They wrote it in prose instead of a field. Prose is not machine-readable, and blog URLs move.

So what this article looks at is not a security defect but a record defect.

A value with nothing saying how it was produced. A label with nothing saying who applied it, or against what rule.

Pebblous benchmarks the quality of AI training data with DataClinic. The figure I sat with longest here was not the zero but the 0.83%. Of the 92,928 CVE records carrying any credit at all, 774 fill the tool field. The field is not missing. It is present and left blank, which is the most common failure anyone working on data quality ever meets.

This article does not rule on who found the flaws first. The evidence to rule on it is not in the record.

What does follow you home is a question about your own side.

"When my team finds something with AI and tells someone about it, what do we write down alongside it?"

There is nothing here to wait for. The field is already there.

▶ Full piece: https://blog.pebblous.ai/report/php2shell-ai-discovery-attribution-2026-10/en/

#Pebblous #DataClinic #DataQuality #PHP2Shell #CVE #AIGovernance
