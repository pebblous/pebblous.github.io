# SNS 홍보 글: 클로드가 증명했다는 리만 가설, 사람은 아직 못 읽는다

> 소스: blog/riemann-hypothesis-claude-lean-proof/ko/index.html
> 생성일: 2026-11-22
> URL: https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

167년 된 수학 난제의 증명이 공개됐는데, 아직 읽은 사람이 없다.

앤트로픽 소속 수학자 레벤트 알푀게가 11월 20일 내놓은 것은 네 쪽짜리 노트와 Lean 4 소스 17만 5,187개 파일이다. 사람이 읽는 증명은 함께 공개되지 않았다.

자연어로 풀면 25만 쪽이 넘어 읽을 만하지 않으리라는 것이 본인의 설명이다.

기계 쪽 확인은 하루 만에 끝났다. MIT의 앤드루 서덜랜드가 코드를 독립적으로 다시 컴파일해 오류가 없음을 확인했고, Lean FRO와 Mathlib Initiative는 증명이 옳다고 전적으로 확신한다는 공동성명을 냈다.

임페리얼칼리지의 케빈 버저드가 남긴 질문은 코드가 맞느냐가 아니었다. 코드 안에 적힌 그 명제가 우리가 리만 가설이라고 부르는 바로 그 명제인가였다. 수학 명제를 Lean 문법으로 옮기는 일은 사람이 하고, 기계는 옮겨진 다음부터를 검사한다.

알푀게 자신도 이 정리가 왜 참인지는 모른다고 적었다.

테스트가 전부 통과했다, 벤치마크 기준을 넘겼다, 응답이 스키마대로 나왔다. 셋 다 참이면서, 그 검사가 우리가 걱정하던 실패를 재현하는지는 통과 신호 안에 들어 있지 않다. 페블러스의 데이터 진단이 값의 정확도에서 끝나지 않는 이유도 여기에 있다.

통과 기록을 받은 다음에 무엇을 더 읽는지가, 검증 가능한 산출물과 신뢰할 수 있는 산출물을 가른다.

▶ 전문: https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #리만가설 #형식검증 #Anthropic #Claude #Lean4

---

## LinkedIn (EN)

A proof of a 167-year-old problem went public this week, and nobody has read it yet.

On November 20, Levent Alpöge, a mathematician at Anthropic, said he had found a proof of the Riemann Hypothesis with Claude. What he released was a four-page note and 175,187 files of Lean 4 code.

There is no prose version. Written out for human readers it would run past 250,000 pages, he said, and would not be worth reading.

The machine side moved fast. Andrew Sutherland of MIT recompiled the code independently and found no errors, and the Lean FRO and the Mathlib Initiative issued a joint statement saying they are entirely confident the proof is correct.

Kevin Buzzard of Imperial College London asked the thing a compiler cannot answer. Is the statement written inside the code the statement we call the Riemann Hypothesis? Translating a theorem into Lean syntax is human work, and the kernel starts checking only after the translation is done.

Alpöge himself wrote that he does not know why the theorem is true.

The tests came back green, the benchmark cleared the bar, the response matched the schema. Each of those can be true while saying nothing about whether the check reproduces the failure anyone was worried about. That is why dataset diagnosis at Pebblous does not stop at whether the values are accurate.

What gets read after the pass is what separates a verifiable output from a trustworthy one.

▶ Read: https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #RiemannHypothesis #FormalVerification #Anthropic #Claude #Lean4

---

## Twitter/X (KO)

앤트로픽 소속 수학자가 리만 가설의 증명을 Lean 코드 17만여 개 파일로 공개했다. 외부 수학자들이 독립적으로 컴파일을 돌렸고 오류는 없었다.

사람이 읽는 증명은 없다. 증명을 내놓은 본인도 이 정리가 왜 참인지는 모른다고 적었다.

기계가 통과시킨 증명과 사람이 읽을 수 있는 증명이 갈라진 자리다.

https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/ko/

#페블러스 #리만가설 #Anthropic #형식검증

---

## Twitter/X (EN)

An Anthropic mathematician released a proof of the Riemann Hypothesis as 175,187 files of Lean code. Outside mathematicians compiled it themselves and found no errors.

There is no version a person can read. The author himself says he does not know why the theorem is true.

A proof a machine will pass and a proof a human can read just came apart.

https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/en/

#Pebblous #RiemannHypothesis #Anthropic #FormalVerification

---

## Facebook (KO)

증명을 찾았다고 알리는 글이 네 쪽이었습니다. 그 네 쪽 안에 증명은 없었습니다.

함께 공개된 것은 Lean 코드 17만 5,187개 파일입니다. 사람이 읽으라고 쓴 글이 아니라, 컴퓨터가 한 단계씩 검사하라고 쓴 코드입니다.

MIT의 수학자가 그 코드를 받아 자기 쪽에서 다시 돌렸고, 오류 없이 전부 통과했습니다. 하루 뒤에는 Lean을 만든 조직들이 증명이 옳다고 전적으로 확신한다는 성명을 냈습니다.

그런데 같은 성명 안에 증명을 내놓은 본인의 문장이 함께 실렸습니다. 지금 이 순간 우리는 이 정리가 왜 참인지조차 모른다는 문장이었습니다.

저는 그 한 줄을 몇 번 다시 읽었습니다.

임페리얼칼리지의 케빈 버저드가 던진 질문은 그보다 단순합니다.

"컴파일을 통과한 그 명제가, 우리가 리만 가설이라고 불러 온 바로 그 명제입니까?"

수학 명제를 Lean 문법으로 옮기는 일은 사람이 합니다. 기계는 옮겨진 다음부터를 검사합니다. 옮기는 사이에 기호 하나의 뜻이 미묘하게 달라져도, 기계는 달라진 명제를 성실하게 증명하고 성실하게 통과시킵니다. 어디에도 오류로 남지 않습니다.

이 자리에 이름을 붙인다면 '통과의 공백'쯤 되겠습니다. 검사를 통과했다는 기록은 남는데, 그 검사가 무엇을 물었는지는 기록 바깥에 있는 자리입니다.

회사에서 쓰는 말로 옮기면 훨씬 흔한 장면이 됩니다. 테스트가 전부 초록색으로 떴다, 벤치마크 점수가 기준을 넘었다, 응답이 스키마대로 나왔다. 셋 다 참입니다. 그 테스트가 우리가 걱정하던 실패를 재현하는지는 그 초록색 안에 들어 있지 않습니다.

페블러스에서 데이터를 진단하면서 값이 깨끗한지보다 그 값이 무엇을 세고 있는지를 먼저 묻게 된 것도 같은 이유입니다.

리만 가설의 결론이 어느 쪽으로 나든, 이번 주에 분명해진 것은 하나입니다. 기계가 통과시킨 증명과 사람이 읽을 수 있는 증명이 눈에 띄게 갈라졌습니다. 그 사이를 건너는 일은 아직 사람 몫으로 남아 있습니다.

그 몫을 누가, 어떤 절차로 지게 될까요.

▶ 전문: https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/ko/

#페블러스 #데이터품질 #리만가설 #Anthropic #Claude #형식검증

---

## Facebook (EN)

The note announcing the proof was four pages long. The proof was not in it.

What came with it was 175,187 files of Lean code. Not writing meant for a person to read, but code meant for a computer to check, one step at a time.

A mathematician at MIT took the code, ran it on his own machine, and found no errors in any of it. A day later the groups that build Lean said they were entirely confident the proof is correct.

And inside that same statement sat a line from the man who found the proof. At this moment, he wrote, we do not even know why the theorem is true.

I read that line several times.

Kevin Buzzard, at Imperial College London, put a simpler question to it.

"Is the statement that compiled the statement we have been calling the Riemann Hypothesis?"

Turning a theorem into Lean syntax is work a person does. The machine checks everything that comes after the turning. If the meaning of one symbol shifts slightly along the way, the machine will faithfully prove the shifted statement and faithfully let it through. Nothing is recorded as an error.

"The blank at the pass" is as good a name as any for that place. The record that a check was passed survives; what the check was asking sits outside the record.

Put into office language it becomes a far more ordinary scene. The tests all came back green, the benchmark score cleared the bar, the response matched the schema. All three are true. Whether that test reproduces the failure anyone was worried about is not inside the green.

Diagnosing datasets at Pebblous is what taught me to ask what a column is counting before asking whether its values are clean.

However the Riemann story ends, one thing came clear this week. A proof a machine will pass and a proof a person can read have visibly parted. Crossing the distance between them is still human work.

Who will carry it, and under what procedure?

▶ Read: https://blog.pebblous.ai/blog/riemann-hypothesis-claude-lean-proof/en/

#Pebblous #DataQuality #RiemannHypothesis #Anthropic #Claude #FormalVerification
