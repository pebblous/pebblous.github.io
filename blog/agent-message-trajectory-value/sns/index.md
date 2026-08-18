# SNS 홍보 글: 결과를 바꾼 AI 에이전트 오답, 열에 넷은 정답 쪽이었다

> 소스: blog/agent-message-trajectory-value/ko/index.html
> 생성일: 2026-08-18
> URL (KO): https://blog.pebblous.ai/blog/agent-message-trajectory-value/ko/
> URL (EN): https://blog.pebblous.ai/blog/agent-message-trajectory-value/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

아르곤 국립연구소가 멀티에이전트 로그를 다시 돌려 보니, 최종 정답 여부를 뒤집은 오답 메시지 가운데 열에 넷 이상이 결과를 정답 쪽으로 바꿔 놓았습니다.

다섯 에이전트가 서로를 보지 못한 채 만든 메시지를 캐시에 얼려 두고, 문제와 프롬프트와 순서는 그대로 둔 채 메시지 하나의 노출 여부만 바꿔 같은 통합기를 다시 돌린 결과입니다. 9만여 건의 재생 기록에서 남는 것은 그 메시지를 넣은 판과 뺀 판의 차이뿐입니다.

도움은 답이 아니라 그 앞의 추론에 있었습니다. 틀린 답만 가렸을 때 통합 성공률은 82%에서 64%로 내려갔지만, 추론을 가리자 44%까지 떨어졌습니다. 답만 남은 메시지는 자리만 차지하는 문구와 다르지 않았습니다.

과장할 일은 아닙니다. 분모를 오답 메시지 전체로 넓히면 이런 뒤집기는 한 자릿수에 그치고, 저자들도 대화형 토론이나 프런티어 모델에는 그대로 옮겨 가지 않을 수 있다고 적었습니다.

바뀌는 것은 라벨의 정의입니다. 도움이 됐는가는 로그를 다시 읽어서 나오지 않고 같은 조건으로 다시 돌려야만 나오는 값이라, 사내 에이전트 로그를 학습 자산으로 만들려는 팀의 첫 점검은 무엇을 버릴까가 아니라 다시 돌릴 수 있는가입니다. 어떤 데이터가 쓸 만한지는 그 데이터만 봐서 정해지지 않고 그것을 쓰는 파이프라인 안에서 정해지며, 페블러스가 DataClinic으로 학습 데이터를 진단할 때 붙드는 전제도 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-message-trajectory-value/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #멀티에이전트 #학습데이터 #Argonne #DHD

---

## LinkedIn (EN)

Argonne National Laboratory replayed a multi-agent pipeline with one message hidden at a time. Among the wrong messages that actually flipped the final verdict, more than four in ten flipped it toward the correct answer.

The design froze the five messages agents had written without seeing one another, then held the problem, the model, the prompt template and the ordering fixed. Across roughly 90,000 replayed messages, the only thing that varied was whether a single message was visible.

The help came from the reasoning, not the answer. Masking only the wrong answer moved integrator success from 82% to 64%. Masking the reasoning behind it dropped the same cases to 44%, statistically indistinguishable from swapping the message for filler of similar length.

The paper is careful about scope. Widen the denominator to every wrong message and helpful flips fall into the single digits, and the authors say the result may not carry to conversational debate or to frontier models.

What does carry is the definition of the label. "Did it help?" never comes out of rereading a log. It comes out of replaying the round with the message and the round without it. For teams hoping to turn internal agent logs into training data, the first question is not what to discard but whether the round can be run again at all. A dataset earns its value inside the pipeline that consumes it, which is what Pebblous measures with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/agent-message-trajectory-value/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #MultiAgent #TrainingData #Argonne #DHD

---

## Twitter/X (KO)

아르곤 국립연구소가 멀티에이전트 로그를 메시지 하나씩 가린 채 다시 돌렸습니다. 최종 정답 여부를 뒤집은 오답 메시지 가운데 열에 넷 이상이 결과를 정답 쪽으로 바꿨습니다.

틀린 답을 버리는 필터는 그 앞에 붙어 있던 문제 분해까지 함께 버립니다.

https://blog.pebblous.ai/blog/agent-message-trajectory-value/ko/

#페블러스 #AI에이전트 #멀티에이전트 #Argonne

---

## Twitter/X (EN)

Argonne replayed a multi-agent pipeline with one message hidden at a time. Among the wrong messages that flipped the final verdict, more than four in ten flipped it toward the correct answer.

A filter that throws away wrong answers throws away the problem decomposition sitting behind them.

https://blog.pebblous.ai/blog/agent-message-trajectory-value/en/

#Pebblous #AIAgent #MultiAgent #Argonne

---

## Facebook (KO)

에이전트 로그를 한 번이라도 정리해 본 분이라면 첫 규칙이 비슷했을 겁니다.

틀린 답이 담긴 기록부터 지웁니다.

저도 그게 당연하다고 여겼습니다. 틀린 것을 남겨 어디에 쓰겠습니까.

아르곤 국립연구소 연구진은 그 당연함을 한 번 확인해 봤습니다. 다섯 에이전트가 서로를 보지 못한 채 써 낸 메시지를 그대로 얼려 두고, 나머지 조건은 손대지 않은 채 메시지 하나의 노출 여부만 바꿔 같은 통합 과정을 다시 돌렸습니다.

한 수학 문제에서 다섯 번째 메시지는 답을 틀렸습니다. 홀수와 짝수를 나눠 따지는 데까지는 정확했는데, 경계값 하나를 빠뜨린 채 답을 제출했습니다. 그런데 그 메시지를 빼자 나머지가 만들어 내던 정답도 함께 사라졌습니다.

틀린 답 뒤에 붙어 있던 문제 분해가 다른 메시지의 자리를 만들어 주고 있었던 것입니다.

"이 기록은 틀렸는가"와 "이 기록은 다음 추론에 도움이 됐는가"는 같은 질문일까요?

앞의 질문은 로그를 다시 읽으면 답이 나옵니다. 뒤의 질문은 다시 읽어서는 나오지 않습니다. 그 메시지를 넣은 판과 뺀 판을 같은 모델, 같은 프롬프트, 같은 순서로 다시 돌려 봐야만 나옵니다.

페블러스가 데이터 품질 현장에서 반복해 만나는 장면도 이와 닮았습니다. 어떤 데이터가 좋은지는 그 데이터만 들여다봐서 정해지지 않고, 그것을 쓰는 파이프라인 안에서 값이 매겨집니다.

그래서 이런 질문이 남습니다. 우리가 지워 온 실패 기록 가운데, 값을 재 볼 방법이 없어서 버린 것은 얼마나 될까요?

https://blog.pebblous.ai/blog/agent-message-trajectory-value/ko/

#페블러스 #데이터품질 #AIReadyData #AI에이전트 #멀티에이전트 #Argonne

---

## Facebook (EN)

If you have ever cleaned up a pile of agent logs, the first rule probably looked familiar.

Delete the records that got the answer wrong.

It feels obvious. What would you keep a wrong answer for?

Researchers at Argonne National Laboratory decided to check that instinct. They froze the messages five agents had written without seeing one another, left every other condition untouched, and ran the same integration step again with a single message hidden.

In one math problem, the fifth message got the answer wrong. Its split of the odd and even cases was exactly right. It simply dropped a boundary case before submitting. Hide that message, and the correct answer the rest of the pool had been producing disappeared with it.

The decomposition sitting behind the wrong answer had been holding a place for someone else's correct one.

"Was this record wrong?" and "did this record help the reasoning that came next?" Are those the same question?

The first one you can answer by rereading the log. The second one you cannot. It appears only when you run the round with that message and the round without it, under the same model, the same prompt and the same ordering.

We keep meeting a version of this in data quality work. Whether a dataset is good is not settled by staring at the dataset. It gets its value inside the pipeline that uses it.

So the question that stays with me is this. Of all the failed records we have deleted, how many went out simply because we had no way to measure what they were worth?

https://blog.pebblous.ai/blog/agent-message-trajectory-value/en/

#Pebblous #DataQuality #AIReadyData #AIAgent #MultiAgent #Argonne
