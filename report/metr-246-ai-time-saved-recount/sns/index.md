# SNS 홍보 글: METR 실험을 다시 계산한 논문, 아낀 시간엔 장부가 없다

> 소스: report/metr-246-ai-time-saved-recount/
> 생성일: 2026-10-30
> URL: https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

초안이 실제보다 열 배 깨끗하다고 전달받은 AI 검토자는, 확인할 수 있는 아홉 자리 가운데 평균 두 자리도 열지 않았다.

10월 23일 arXiv에 올라온 논문이다. 저자는 소속도 외부 자금도 없는 한 사람이고, 자기가 지난 4월에 내놓은 측정 제안을 폐기하고 그 자리에 이 글을 썼다. 쓴 자료는 METR이 공개해 둔 개발자 실험 246건을 그대로 내려받은 것이다.

246건을 다시 돌리면 METR의 공표값이 그대로 재현된다. 그런데 같은 기록이 다른 요약값도 똑같이 받쳐 준다. 요약값을 기하평균 비에서 평균의 비로 바꾸고 예보 불균형 보정을 빼면 19% 지연이 34% 지연이 된다. 어느 쪽도 계산 실수가 아니라 무엇을 요약값으로 고르느냐의 차이다.

더 센 것은 그다음이다. "AI가 실제로 도움이 된 과제가 몇 퍼센트인가"는 이 설계로 아예 구할 수 없다. 각 과제를 한쪽 팔에서 한 번만 수행한 탓에, 같은 과제의 반대쪽 시간이 기록에 없다. 그래서 그 비율은 2.6%에서 82.1% 사이로만 정해진다. 신뢰구간이 아니라서 표본을 백 배로 늘려도 그대로다.

오픈AI가 GDPval 발표문에 적은 "대략 100배"도 같은 방식으로 좁아진다. 단서는 그 발표문 안에 이미 있었다. 100배는 모델 추론 시간 기준이고 전문가가 결과물을 검토하는 109분은 거기 들어 있지 않다. 그 시간을 되돌려 놓으면 초안이 언제나 완벽하다고 쳐도 3.6배가 천장이다.

논문이 스스로 달아 둔 단서도 짧지 않다. 검토 실험은 모델 하나, 과제 한 종류, 540세션 규모이고, 사람에 대해서는 직접적으로 아무 말도 하지 않는다고 못 박는다. METR 쪽도 같이 읽어야 한다. 2025년의 그 19%에는 METR 자신이 올해 2월 낡았다는 표시를 붙였고, 보정하지 않은 값도 처음부터 스스로 보고했다.

남는 빈칸은 하나다. 1분을 아끼는 일과 틀린 값 하나를 흘려보내는 일 사이의 환율이 어느 발표문에도 적혀 있지 않다. 페블러스가 데이터 품질을 다루며 비워 두지 않으려는 칸도 그 칸이다. 틀린 한 건이 하류에서 몇 분을 먹는지를 분으로 적어 두지 않으면, 품질 점수는 결정으로 바뀌지 않는다.

▶ 전문: https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #METR #GDPval #AI생산성 #AIROI #OpenAI #arXiv

---

## LinkedIn (EN)

An AI reviewer told that its drafter erred ten times less often than it actually did opened fewer than two of the nine figures it was free to check.

The finding comes from a paper posted to arXiv on October 23. Its author is one person with no institution and no outside funding, and it withdraws the measurement proposal he put forward in April to write this in its place. The data is METR's own, downloaded as published: 246 developer issues.

Rerun, those issues reproduce METR's published figure exactly. The same records also support a different one. Switch the summary from a geometric mean ratio to a ratio of means and drop the forecast adjustment, and a 19% slowdown reads as 34%. Neither is an arithmetic slip.

The harder result is what the data cannot give. "What share of issues did AI actually help on" is unrecoverable from this design, because each issue was performed once, in one arm, leaving the other side of it nowhere in the record. The share is pinned only to a range running from 2.6% to 82.1%, and that is not a confidence interval. A hundredfold larger sample leaves it where it is.

OpenAI's "roughly 100x" from the GDPval announcement narrows the same way, on a caveat printed in the same post. The 100x is model inference time, and it excludes the 109 minutes an expert spends reviewing the output. Put those minutes back and 3.6x is the ceiling, even granting a draft that is always perfect.

The paper's own caveats are not short either. The review experiment is one model, one task type, 540 sessions, and it states plainly that it says nothing directly about humans. METR reads well here too. It reported the unadjusted figure itself, and in February it attached an out-of-date notice to the 2025 result.

One column stays blank. No announcement anywhere carries an exchange rate between a minute saved and a wrong figure let through. That is the column Pebblous works to keep filled when it handles data quality. Until the minutes one bad record costs downstream are written down, a quality score never turns into a decision.

▶ Read: https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #METR #GDPval #AIProductivity #AIROI #OpenAI #arXiv

---

## Twitter/X (KO)

METR 개발자 실험 기록을 공개 자료로 다시 돌린 논문에서, 같은 기록이 19% 지연과 34% 지연을 함께 받쳐 준다. 어느 쪽도 계산 실수가 아니라 어느 요약값으로 묶느냐의 차이다.

AI가 아낀 시간을 정하는 것은 모델 성능이 아니라 측정 설계였다.

https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/ko/

#페블러스 #데이터품질 #METR #AI생산성

---

## Twitter/X (EN)

Rerun on METR's published records, the same data supports a 19% slowdown and a 34% slowdown. Neither is an arithmetic slip; the gap is a choice of summary statistic.

How much time AI saves turns out to be settled by measurement design, not by model performance.

https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/en/

#Pebblous #DataQuality #METR #AIProductivity

---

## Facebook (KO)

두 시간 걸리던 보고서를 삼십 분에 끝낸 날, 저는 아낀 시간을 한 시간 반이라고 적었습니다.

시계는 그렇게 적습니다.

지난주 arXiv에 올라온 논문 한 편은 그 장부에 칸이 하나 비어 있다고 말합니다. 흘려보낸 틀린 값 하나를 나중에 누군가가 치우는 데 드는 시간입니다.

제목이 『반창고를 세다』입니다.

백 년 전 능률 기사 프랭크 길브레스는 면도기 두 개로 동시에 면도해 44초를 아꼈습니다. 그러다 어느 아침 목에 반창고를 붙이느라 2분을 버렸고, 면도기를 그만뒀습니다. 44초를 셌기 때문이 아니라 반창고를 셌기 때문입니다.

논문이 한 일은 METR이 공개해 둔 개발자 실험 246건을 그대로 내려받아 다시 계산한 것입니다. METR의 공표값은 그대로 재현됐습니다. 다만 같은 기록이 다른 요약값도 똑같이 받쳐 주었습니다.

저를 오래 붙든 것은 숫자가 갈린 쪽이 아니라, 논문이 직접 돌린 작은 실험이었습니다.

초안이 실제보다 열 배 깨끗하다고 전달받은 AI 검토자는, 확인할 수 있는 아홉 자리 가운데 평균 두 자리도 열지 않았습니다.

눈이 먼 것은 아니었습니다. 열어 본 자리에서는 스무 번 모두 틀린 값을 잡아 고쳤습니다. 빠져나간 것은 전부 열지 않은 자리에서 나왔습니다.

"검토를 그만둬도 된다는 판단과, 검토를 그냥 안 하는 행동은 무엇으로 구별됩니까?"

겉보기에는 같습니다. 장부에서는 전혀 다릅니다. 앞쪽은 세어 본 결과이고, 뒤쪽은 세지 않은 결과입니다.

페블러스가 데이터 품질을 다루며 자꾸 들여다보는 칸도 그 칸입니다. 데이터가 틀렸을 때 그 한 건이 하류에서 몇 분을 먹는가. 그 숫자가 없으면 "이만하면 됐다"는 말은 계산이 아니라 느낌으로 남습니다.

지금 우리가 주고받는 "N% 단축"에는 아낀 시간이 적혀 있습니다.

그 옆칸, 흘려보낸 것의 값을 분으로 적어 둔 숫자는 어디에 있습니까.

전문 → https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #METR #AI생산성

---

## Facebook (EN)

The day I finished a two-hour report in thirty minutes, I wrote down ninety minutes saved.

That is what a clock records.

A paper posted to arXiv last week argues that this ledger has one column left blank. The minutes somebody else will spend, later, cleaning up the one wrong figure that went out unchecked.

Its title is *Counting the Bandages*.

A century ago the efficiency engineer Frank Gilbreth shaved with two razors at once and saved forty-four seconds. Then came the morning he lost two minutes to a bandage on his throat, and he gave the second razor up. Not because he counted the seconds. Because he counted the bandages.

What the paper does is download the 246 developer issues METR published and run them again. METR's published figure comes back exactly. The same records also support a different summary, just as well.

What held me was not the side where the numbers split. It was the small experiment the paper ran itself.

An AI reviewer, told that its drafter erred ten times less often than it did, opened fewer than two of the nine figures it was free to check.

It was not blind. Every time it opened the line that exposed the wrong figure, it fixed it, twenty times out of twenty. Everything that escaped came out of lines nobody ever opened.

"What separates deciding you can stop reviewing from simply not reviewing?"

From the outside they look identical. In the ledger they are nothing alike. One is the result of having counted. The other is the result of not counting.

That is the column Pebblous keeps returning to in data quality. When a record is wrong, how many minutes does that one record cost downstream? Without that number, "good enough" stays a feeling rather than a calculation.

The "N% faster" we pass around has the saved time written into it.

The cell beside it, the minutes the escaped error is worth, is where?

Read the full piece → https://blog.pebblous.ai/report/metr-246-ai-time-saved-recount/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #METR #AIROI
