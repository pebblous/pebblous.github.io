# SNS 홍보 글: 에이전트 메모리는 예산이 빠듯하면 검색을 고쳐도 소용이 없다

> 소스: blog/agent-memory-eviction-restore-counterfactual/
> 생성일: 2026-09-13
> URL: https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

에이전트가 답을 틀렸을 때, 근거를 못 찾은 것인지 이미 지워 버린 것인지는 정확도 곡선 어디에도 적혀 있지 않다.

메가곤랩스의 Chen Shen이 지난 8일 arXiv에 올린 논문은 그 둘을 질문 하나 단위로 갈라 잰다. 퇴출이 끝난 저장소에서 모델이 틀린 질문을 고르고, 그 질문의 정답 근거를 읽기 시점에 도로 넣은 뒤, 같은 모델을 같은 설정으로 다시 돌린다. 달라지는 것은 근거의 유무 하나뿐이다. 답이 맞게 뒤집혔는지와 그 근거가 실제로 퇴출됐는지를 함께 보면 오답이 복구 불능, 복구 가능, 잔여 세 칸으로 갈린다.

8만 토큰이면 넉넉한 예산처럼 들리는데, 복원으로 정답이 된 오답 가운데 0.60에서 0.73이 이미 지워진 근거 탓이었다.

예산을 8천 토큰까지 조이면 네 정책 모두 그 몫이 1.00이 된다. 검색을 고쳐 되살릴 오답 자체가 남지 않는다는 뜻이고, 논문의 처방도 그 구간에서는 보존이 검색보다 먼저라는 것이다.

다만 논문은 어느 퇴출 정책이 나은지는 답하지 않는다. 정확도를 맞춰 짝지은 9건의 비교에서 차이가 잡히지 않았고, 저자는 이를 "차이가 없다"가 아니라 "1.2%p에서 6%p 해상도에서는 검출되지 않았다"로 적었다. 이 감사 자체도 질문마다 정답 근거 라벨이 있어야 돌아가므로 운영 중인 시스템에 그대로 붙지는 않는다.

삭제한 레코드가 나중에 필요해졌을 때 그것이 검색 실패인지 영구 손실인지. 페블러스가 데이터 파이프라인을 볼 때 먼저 갈라 보려는 것도 그 구분이다.

▶ 전문: https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #데이터거버넌스 #에이전트메모리 #MegagonLabs #LongMemEval

---

## LinkedIn (EN)

An agent gets an answer wrong. Whether the evidence was never found or had already been thrown away is nowhere on the accuracy curve.

A paper Chen Shen of Megagon Labs posted to arXiv on September 8 separates the two, one question at a time. Working from a store after eviction has run, it collects the questions the reader missed, drops the evidence each one needs back in at read time, and runs the same model again under identical settings. Reading the flip in correctness together with whether that evidence had been evicted sorts every error into three bins: irreversible, recoverable, residual.

80k tokens sounds like a generous budget. Even there, between 0.60 and 0.73 of the errors restoration corrected traced to evidence that eviction had already destroyed.

Tighten the budget to 8k and all four policies reach 1.00. Almost nothing is left for a better retriever to recover, and the paper's own prescription follows: in that regime, retention comes before retrieval.

The paper declines to rank the policies. Across nine accuracy-matched comparisons no difference was detected, and the author writes not that the policies are equivalent but that nothing showed at a resolution of 1.2 to 6 percentage points. The audit also needs gold evidence labels on every question, which rules out bolting it onto a live system.

When a deleted record turns out to be needed later, is that a retrieval failure or a permanent loss? That is the distinction we try to draw first at Pebblous when we read a data pipeline.

▶ Read: https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgents #DataGovernance #AgentMemory #MegagonLabs #LongMemEval

---

## Twitter/X (KO)

에이전트가 답을 틀렸을 때, 근거를 못 찾은 것인지 이미 지워 버린 것인지는 정확도 곡선에 적혀 있지 않다. 메가곤랩스가 그 둘을 질문 하나씩 갈라 재는 감사를 내놨다.

예산이 8천 토큰까지 좁아지면 검색을 고쳐 되살릴 오답이 사실상 남지 않는다. 보존을 먼저 늘리지 않는 한 검색기를 손봐도 얻을 것이 거의 없다는 뜻이다.

▸ https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/ko/

#페블러스 #데이터품질 #에이전트메모리 #MegagonLabs

---

## Twitter/X (EN)

When an agent answers wrong, the accuracy curve does not say whether the evidence was never found or already destroyed. Megagon Labs built an audit that splits the two, question by question.

At an 8k-token budget almost no error is left for a better retriever to recover. In that regime, retention has to come before retrieval.

▸ https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/en/

#Pebblous #DataQuality #AgentMemory #MegagonLabs

---

## Facebook (KO)

"예전에 분명히 있었는데, 지금은 안 보입니다."

데이터 품질을 진단하러 가면 자주 듣는 말입니다.

그 말을 들으면 저희가 먼저 되묻는 것이 하나 있습니다.

"지금 어딘가에 남아 있는데 못 찾는 겁니까, 아니면 정말로 사라진 겁니까?"

두 경우에 해야 할 일이 완전히 다른데, 그 구분이 기록으로 남아 있는 경우는 드뭅니다. 그래서 대개 양쪽을 다 해 보게 됩니다.

메가곤랩스의 Chen Shen이 지난 8일 arXiv에 올린 논문이 바로 그 구분을 계측 장치로 만들었습니다. 무대는 에이전트 메모리입니다. 여러 세션에 걸쳐 일하는 에이전트는 쌓인 대화가 토큰 예산을 넘으면 저장한 것을 버려야 하고, 그 버리는 단계를 논문은 퇴출이라고 부릅니다.

방법은 생각보다 단순합니다.

퇴출이 끝난 저장소에서 모델이 틀린 질문을 고르고, 그 질문의 정답 근거를 읽는 자리에 도로 넣어 준 다음, 같은 모델을 같은 설정으로 다시 돌립니다. 그리고 두 가지를 함께 봅니다. 답이 맞게 뒤집혔는가, 그리고 그 근거가 실제로 지워졌던 것인가.

'지워진 것'과 '못 찾은 것'. 오답이 이 두 갈래로 나뉘고, 근거를 다 줘도 여전히 틀리는 세 번째 갈래가 따로 남습니다.

논문에 실린 사례 하나가 오래 남았습니다. 사용자의 통근 시간을 묻는 질문에 에이전트는 "모른다"고 답했습니다. 그 기록이 담긴 세션이 예산에 밀려 이미 버려진 뒤였습니다. 밀려난 세션을 도로 넣자 "편도 45분"이라는 답이 나왔습니다. 검색기를 아무리 고쳐도 이 답은 돌아오지 않습니다.

8만 토큰은 넉넉한 편에 속하는 예산입니다. 그런데 거기서도 복원으로 되살아난 오답의 0.60에서 0.73이 이미 지워진 근거 탓이었습니다. 8천 토큰까지 내려가면 네 가지 퇴출 정책 모두 그 몫이 1.00이 됩니다.

저자는 윤리 절에서 한 걸음 더 갑니다. 지워야 하는지 아닌지는 이 계측이 판정하지 않는다고 적었습니다. 다만 이미 집행된 삭제가 되돌릴 수 있는 손실을 냈는지는 잴 수 있다고 말합니다.

보존 기간과 삭제 정책은 데이터 거버넌스의 오래된 주제입니다. 달라진 것은 에이전트에서 그 결정이 초 단위로 자동 집행된다는 점입니다. 그런데 우리가 여전히 남기는 것은 무엇을 지웠는지뿐입니다. 삭제 로그는 지운 것의 목록이지, 무엇을 못 하게 됐는지의 지도가 아닙니다.

그 구분을 나중에 힘들여 복원하는 대신 삭제하는 그 자리에서 함께 적어 둘 수는 없을까. 페블러스가 데이터 파이프라인을 볼 때 자꾸 돌아오는 생각도 그쪽입니다.

버려진 레코드가 나중에 필요해졌을 때, 그것이 검색 실패인지 영구 손실인지 가를 장치를 이미 두고 계신 팀이 있을지 궁금합니다.

▸ https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/ko/

#페블러스 #데이터품질 #에이전트메모리 #데이터거버넌스 #MegagonLabs #데이터클리닉

---

## Facebook (EN)

"It was definitely there before. It isn't now."

We hear that sentence often on data quality engagements.

And the first thing we ask back is always the same.

"Is it sitting somewhere you can't find, or is it actually gone?"

The two situations call for completely different work, and the distinction almost never made it into a record. So we usually end up doing both.

A paper Chen Shen of Megagon Labs posted to arXiv on September 8 turns exactly that distinction into an instrument. The setting is agent memory. An agent working across many sessions has to throw things away once the accumulated history passes its token budget, and the paper calls that step eviction.

The method is simpler than I expected.

Take the store after eviction has run, collect the questions the reader got wrong, put the evidence each one needs back in at read time, and run the same model again under identical settings. Then read two things together. Did the answer flip to correct, and had that evidence actually been evicted?

"Destroyed" or "merely unretrieved." Errors fall into those two, with a third bin for the ones that stay wrong even when every piece of evidence is handed over.

One worked case stayed with me. Asked how long the user's commute takes, the agent said it did not know. The session holding that detail had already been pushed out by the budget. Reinstating it produced "45 minutes each way." No retriever would ever have brought that answer back.

80k tokens sounds like room to spare. Even at that budget, between 0.60 and 0.73 of the errors restoration corrected came down to evidence that was already gone. At 8k, all four eviction policies land on 1.00.

The author goes one step further in the ethics statement. The instrument does not rule on whether something ought to be kept or deleted. It measures whether a deletion already carried out produced a loss that can be undone.

Retention schedules and deletion policies are an old subject in data governance. The new part is that an agent executes those decisions by the second. And we still keep only a record of what was removed. A deletion log is a list, not a map of what became impossible.

Which makes me wonder whether that distinction could be written down at the moment of deletion instead of reconstructed long afterward. That is where our thinking keeps landing when we look at a data pipeline.

If your team already runs something that tells a retrieval failure apart from a permanent loss, I would like to know what standard you use to draw that line.

▸ https://blog.pebblous.ai/blog/agent-memory-eviction-restore-counterfactual/en/

#Pebblous #DataQuality #AgentMemory #DataGovernance #MegagonLabs #DataClinic
