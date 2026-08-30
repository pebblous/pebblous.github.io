# SNS 홍보 글: 무서운 이름 하나에 정당한 작업을 막은 에이전트 가드레일

> 소스: blog/agent-guardrail-scary-name-over-refusal/
> 생성일: 2026-08-31
> URL: https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

권한도 행동도 그대로 둔 채 대상 이름만 위협적으로 바꿨더니, AI 에이전트 가드레일 다섯 종이 모두 승인된 작업을 더 자주 거부했습니다.

중국과학원 정보공학연구소 연구진이 만든 벤치마크의 측정 결과입니다. 판정 가능한 756개의 시험 칸을 무해한 이름, 원래 이름, 위협적인 이름 세 판본으로 렌더링했습니다. 세 판본은 역할과 권한 범위, 행동, 정책, 관측 기록을 전부 공유하고 오직 자원 이름만 다릅니다.

가장 크게 벌어진 곳은 TS-Guard였습니다. 무해한 이름에서 34%였던 오거부율이 위협적인 이름에서 66%로 올랐습니다.

이름이 길어져서 생긴 착시도 아니었습니다. 두 등급의 이름 길이가 한 글자 이내로만 차이 나는 356개 칸만 따로 봐도 거부율은 같은 방향으로 움직였습니다. 출력의 유해성만 보는 콘텐츠 안전 기준선이 1~2%에 머물렀다는 사실이 이 숫자의 성격을 말해 줍니다. 무너지는 것은 유해성 판정이 아니라 권한 판정입니다.

이 실험에서 결과만큼 낯선 것은 정답지를 만든 방식입니다. 연구진은 안전과 위험 라벨을 주석자의 판단에 맡기지 않았습니다. 권한 정책을 규칙 집합으로 먼저 선언하고, 라벨이 그 정책에서 기계적으로 유도되도록 생성 단계에 정적 게이트를 세웠습니다. 유도가 깨지는 샘플은 아예 만들어지지 않습니다.

저자들은 선을 그어 둡니다. 이 수치는 배포된 가드레일의 실제 거부율이 아니라 벤치마크상의 점추정치이고, 주장하는 것은 효과의 방향과 순위입니다.

승인 게이트를 붙여 둔 조직에는 두 겹의 질문이 남습니다. 우리 판정기는 권한 맥락을 읽는가 이름표를 읽는가. 그리고 그 판정을 채점하는 정답지는 누가 어떤 근거로 만들었는가.

▶ 전문: https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #AI안전 #에이전트가드레일 #AI거버넌스 #CautiousBench #arXiv

---

## LinkedIn (EN)

Hold the permissions and the action fixed, change only the name of the object to something threatening, and all five agent guardrails tested refused authorized work more often.

The measurement comes from a benchmark built by researchers at the Institute of Information Engineering, Chinese Academy of Sciences. Each of 756 decidable test cells was rendered in three versions, one with an innocent name, one as authored, one with a scary name. The three share the role, the authorizing scope, the action, the policy, and the observation trace. Only the resource name differs.

The widest gap was TS-Guard, which went from 34% over-refusal under innocent names to 66% under scary ones.

Nor is it an artifact of longer strings. On the 356 cells whose two names differ by at most one character, refusal moved the same way. A content-safety baseline that only asks whether an output is harmful stayed at 1 to 2 percent, which says what kind of number this is. What breaks is not the harm judgment but the authorization judgment.

The more interesting part is how the answer key was built. The researchers did not leave the safe-or-unsafe label to annotators. They declared the authorization policy as a rule set first, then put a static gate in the generation step so that every label is derived mechanically from that policy. Samples where the derivation breaks are never produced.

The authors draw their own limits. These are point estimates on a benchmark rather than refusal rates of anything in deployment, and the claim is the direction and rank of the effect.

For any organization running an approval gate, two questions are left. Does our judge read the authorization context or the label on the object? And who built the answer key that scores its verdicts, on what basis?

▶ Read: https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #AISafety #AgentGuardrails #AIGovernance #CautiousBench #arXiv

---

## Twitter/X (KO)

권한도 행동도 그대로 두고 대상 이름만 위협적으로 바꿨더니, 에이전트 가드레일 다섯 종이 모두 승인된 작업을 더 자주 거부했습니다. TS-Guard는 34%에서 66%로 올랐습니다.

이름이 길어져서 생긴 착시도 아니었습니다. 길이 차이가 한 글자 이내인 칸만 따로 봐도 같은 방향이었습니다.

https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/ko/

#페블러스 #데이터품질 #AI에이전트 #에이전트가드레일

---

## Twitter/X (EN)

Hold the permissions and the action fixed, change only the object's name to something threatening, and all five agent guardrails tested refused authorized work more often. TS-Guard went from 34% to 66%.

It is not an artifact of longer strings. On cells where the names differ by at most one character, refusal moved the same way.

https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/en/

#Pebblous #DataQuality #AIAgent #AgentGuardrails

---

## Facebook (KO)

격리해 둔 파일을 담는 버킷 이름을 quarantine-emotet으로 지어 둔 팀을 본 적이 있습니다.

무슨 용도인지 한눈에 보이니 좋은 이름입니다. 사람에게는 그렇습니다.

그 이름을 사람만 읽는 것이 아니라는 데서 이야기가 시작됩니다.

중국과학원 연구진이 한 일은 단순합니다. 에이전트의 행동을 통과시킬지 판정하는 가드레일에게, 역할도 권한도 행동도 똑같은 요청을 이름만 바꿔 세 번씩 보여 주었습니다. 무해한 이름, 원래 쓰던 이름, 그리고 위협적인 이름.

이름이 무서워질수록 가드레일은 허가된 작업을 더 자주 막았습니다. 다섯 종 전부에서 방향이 같았습니다.

저자들은 이 현상에 '이름 미신'이라는 이름을 붙였습니다. 판정기가 권한 맥락이 아니라 표면의 이름을 읽고 있다는 뜻입니다.

가장 앞뒤가 맞지 않는 대목은 삭제였습니다. 악성코드 계열명이 붙은 파일을 치우겠다는 요청만큼 허용하기 쉬운 것도 없는데, 다섯 설계 중 넷에서 이름이 무서워질수록 그 삭제가 더 자주 막혔습니다. 치워야 할 대상을 판정기가 오히려 지킨 셈입니다.

"우리 판정기는 권한 맥락을 읽고 있습니까, 이름표를 읽고 있습니까?"

논문을 덮고도 남은 것은 이 질문의 뒷면이었습니다. 연구진은 안전과 위험의 정답을 주석자의 감에 맡기지 않았습니다. 권한 정책을 먼저 규칙으로 선언하고, 라벨이 그 정책에서 기계적으로 유도되도록 생성 단계에 게이트를 세웠습니다. 규칙으로 잡히지 않는 몫만 사람이 받칩니다.

평가 데이터의 정답지를 무엇으로 방어할 것인가. 페블러스가 AI-Ready Data를 이야기할 때 되풀이해 마주치는 질문도 여기에 있습니다.

이름 짓기는 대개 편의의 문제로 다뤄집니다. 그 이름이 판정에 개입한다면, 사내 명명 규칙도 안전 정책의 한 줄이 되는 것 같습니다.

▸ https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI에이전트 #에이전트가드레일 #AI안전

---

## Facebook (EN)

I once saw a team name the bucket that holds their quarantined files quarantine-emotet.

It is a good name. You can see what it is for at a glance, at least if you are a person.

The story starts with the fact that people are not the only readers.

What the researchers at the Chinese Academy of Sciences did is simple. They showed a guardrail, the thing that decides whether an agent's action goes through, the same request three times over, with the same role, the same permissions, the same action, and only the name of the object changed. An innocent name, the name the scenario originally used, and a scary one.

The scarier the name, the more often the guardrail blocked work that was authorized. All five went the same way.

The authors call this "name superstition." The judge is reading the surface of the name rather than the authorization context behind it.

The part that makes least sense is deletion. Nothing is easier to permit than a request to clear away a file carrying a malware family name, and yet in four of the five designs, the scarier the name, the more often that deletion was refused. The judge ended up protecting the thing that was supposed to be removed.

"Does our judge read the authorization context, or the label on the object?"

What stayed with me after closing the paper was the other side of that question. The researchers did not leave the safe-or-unsafe answer to an annotator's instinct. They declared the authorization policy as rules first, then placed a gate in the generation step so that every label is derived mechanically from those rules. People are kept for the remainder the rules cannot reach.

What do you defend the answer key of your evaluation data with? That is the question we keep running into at Pebblous whenever we talk about AI-Ready Data.

Naming is usually treated as a matter of convenience. If the name reaches into the verdict, then a naming convention seems to be a line of the safety policy too.

▸ https://blog.pebblous.ai/blog/agent-guardrail-scary-name-over-refusal/en/

#Pebblous #DataClinic #DataQuality #AIAgent #AgentGuardrails #AISafety
