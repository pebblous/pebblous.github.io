# SNS 홍보 글: 메모리를 붙인 AI가 메모리 없을 때보다 문제를 못 풀었다

> 소스: blog/memtrapbench-memory-cognitive-traps/ko/index.html
> 생성일: 2026-08-22
> URL (KO): https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/ko/
> URL (EN): https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

메모리를 붙인 AI가 메모리를 끈 AI보다 문제를 못 풀었습니다. 두 모델 계열에 메모리 전략 다섯 가지를 얹은 열 개 조합이 MemTrapBench에서 전부 무기억 조건보다 낮은 평균을 냈습니다. 그중 가장 나은 조합도 10%p 넘게 밀렸습니다.

논문이 든 사례는 이렇습니다. 숫자 네 개로 24를 만드는 게임을 스무 턴 반복하는 동안 모델은 한 번도 틀리지 않았습니다. 스물한 번째 문제는 계승을 써야 풀리는데, 앞선 정답들을 기억으로 받은 모델은 사칙연산 안에서만 맴돌다 만들 수 없다고 답했습니다. 같은 질문을 기억 없이 주면 답을 찾아냅니다.

저장도 검색도 틀리지 않았다는 점이 핵심입니다. 저자들이 같은 이력에서 함정만 걷어 내자 점수는 무기억보다 오히려 조금 올라갔습니다. 반대로 이력을 4분의 1로 줄여도 하락은 거의 그대로였습니다. 함정 신호가 이력 앞쪽에 이미 들어 있어서 컨텍스트를 아끼는 방식의 대응이 듣지 않습니다.

정확도와 적합도만 재는 품질 지표로는 이 실패가 잡히지 않습니다. 그 값이 언제까지 유효하고 어디까지 적용되는지가 기록되지 않았을 뿐인데 결과가 무너집니다. 페블러스가 DataClinic으로 데이터 품질을 진단하며 반복해 보는 공백도 같은 자리에 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #에이전트메모리 #LLM #MemTrapBench #EverMemOS

---

## LinkedIn (EN)

AI models scored lower with memory than without it. In MemTrapBench, posted to arXiv this week, two model families paired with five memory strategies produced ten combinations, and every one landed below the no-memory baseline. The best pairing still gave up more than ten points.

The paper's clearest case is a game of 24. For twenty turns a model built 24 out of four numbers using basic arithmetic, and all twenty answers were correct. The twenty-first puzzle needed a factorial. Handed its own correct history, the model circled inside arithmetic and declared the puzzle unsolvable. Asked the same question with no memory, it found the answer.

Nothing was stored wrong and nothing was retrieved wrong. When the authors kept the same history and stripped out only the traps, the score edged above the no-memory baseline. Cutting the history to a quarter of its length recovered almost none of the loss, because the trap sits near the front of it.

Accuracy and relevance, the two things memory systems are usually measured on, both pass here. What is missing is any record of how long a value holds and how far it applies. That is the same gap Pebblous keeps finding when it diagnoses data quality with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #AgentMemory #LLM #MemTrapBench #EverMemOS

---

## Twitter/X (KO)

메모리를 붙인 AI가 메모리를 끈 AI보다 낮은 점수를 냈습니다. MemTrapBench가 시험한 열 개 조합에 예외가 없었습니다.

저장도 검색도 정확했는데 결과가 나빠졌습니다. 어디까지 유효한지 적혀 있지 않은 기억은 품질 지표를 통과하고도 판단을 망칩니다.

https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/ko/

#페블러스 #데이터품질 #MemTrapBench #에이전트메모리

---

## Twitter/X (EN)

AI models scored lower with memory than without it. In MemTrapBench, every model-and-memory combination landed below the no-memory baseline.

Nothing was stored wrong and nothing was retrieved wrong. A correct memory with no record of where it applies still breaks the answer.

https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/en/

#Pebblous #DataQuality #MemTrapBench #AgentMemory

---

## Facebook (KO)

같은 유형의 문제를 스무 번 연속으로 맞힌 사람을 떠올려 봅니다.

스물한 번째 문제만 조금 다릅니다. 지금까지 쓰던 방법 안에는 답이 없고, 한 걸음 밖으로 나가야 풀립니다.

그 사람은 답을 못 찾습니다. 앞선 스무 번이 전부 정답이었기 때문에.

이번 주 arXiv에 올라온 MemTrapBench는 AI 모델에게 정확히 이 상황을 만들어 주었습니다. 숫자 네 개로 24를 만드는 게임을 스무 턴 반복시킨 뒤, 마지막에 계승을 써야 풀리는 문제를 냅니다. 앞선 대화를 기억으로 받은 모델은 사칙연산 안에서만 맴돌다 만들 수 없다고 답했습니다. 같은 질문을 기억 없이 받으면 답을 찾아냈고요.

불편한 지점은 점수보다 조건에 있다고 봅니다. 저장이 틀린 것도 아니고, 엉뚱한 기억을 꺼내 온 것도 아닙니다. 스무 번의 풀이는 지금도 전부 맞는 답이고, 지금 질문과 무관하지도 않습니다. 그런데 그 맞는 기억이 모델을 한 자리에 묶어 두었습니다. 저는 이것을 '맞는 기억'의 함정이라고 부르게 됐습니다.

"이 값은 언제까지, 그리고 어디까지 맞는가?"

논문을 덮고 남은 질문은 이것이었습니다. 한 아이에게만 해당하던 응급실의 금기가 다음 아이에게 그대로 적용됐고, 한 업무에만 필요하던 로그 정규화 규칙이 업무가 끝난 뒤에도 따라왔습니다. 값은 모두 사실이었습니다. 유효 범위가 어디에도 적혀 있지 않았을 뿐입니다.

페블러스가 데이터 품질을 진단하면서 자주 마주치는 공백도 여기입니다. 값이 틀려서 생기는 문제보다, 어떤 조건에서 만들어진 값인지 적혀 있지 않은 채 다른 맥락에 쓰여서 생기는 문제가 훨씬 많습니다. 사람이 쓰던 시절에는 담당자가 그 조건을 기억하고 있어서 공백이 드러나지 않았습니다. 에이전트가 스스로 기억을 쌓고 스스로 꺼내 쓰기 시작하면, 그 조건은 어디에도 남지 않습니다.

https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/ko/

#페블러스 #데이터품질 #데이터클리닉 #MemTrapBench #AI에이전트 #에이전트메모리

---

## Facebook (EN)

Picture someone who has answered twenty puzzles of the same kind, correctly, one after another.

The twenty-first is slightly different. The method that carried them this far has no answer in it. Getting there means stepping outside.

They fail. Precisely because the first twenty were right.

MemTrapBench, posted to arXiv this week, built that situation for AI models. Twenty turns of making 24 out of four numbers, then a final puzzle that only yields to a factorial. The model handed its own history circled inside basic arithmetic and said the puzzle could not be solved. Asked the same question with no memory at all, it found the answer.

What unsettles me is the condition rather than the score. Nothing was stored incorrectly. Nothing irrelevant was retrieved. The twenty earlier solutions are still correct, and they are not unrelated to the question being asked. And yet those correct memories held the model in one place. A trap made of true things.

"How long is this value good for, and how far does it reach?"

That is the question I was left with. A contraindication that applied to one child in an emergency room carried over to the next. A log normalization rule that one job required followed the model after the job had ended. Every value was factual. Only the scope was never written down.

This is the same gap Pebblous runs into when diagnosing data quality. Errors in the values themselves are less common than values used somewhere else without any note of the conditions they were made under. When people did this work, the person in the seat remembered those conditions, so the gap stayed invisible. Once an agent builds its own memory and reaches for it on its own, nothing holds them.

https://blog.pebblous.ai/blog/memtrapbench-memory-cognitive-traps/en/

#Pebblous #DataQuality #DataClinic #MemTrapBench #AIAgent #AgentMemory
