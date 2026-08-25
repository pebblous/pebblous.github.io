# SNS 홍보 글: 정체성 두 개를 준 합성 응답자가 하나만 썼다

> 소스: report/synthetic-persona-intersectional-collapse/ko/index.html
> 생성일: 2026-08-26
> URL (KO): https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/ko/
> URL (EN): https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/en/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective · Medium = sns-cover(long)

---

## LinkedIn (KO)

언어모델 여덟 종에 두 개의 정체성을 준 합성 응답자를 만들어 실제 설문 응답과 맞춰 봤더니, 프로필과 문항이 만나는 셀의 75~82%에서 두 정체성을 더한 예측보다 둘 중 하나만 쓴 예측이 더 잘 맞았다.

미국 퓨 리서치 센터 트렌드 패널 15개 조사에 모델을 붙여 2,110만 건을 시뮬레이션한 새 연구다. 이 승률은 그대로 읽으면 안 된다. 덧셈이 완벽하게 성립하는 세계에서도 40%가 나오는 지표이고, 관측치는 정체성을 하나만 쓰는 세계의 값 쪽 끝에 거의 붙어 있다.

같은 규칙을 실제 응답자에게 적용하면 결과가 뒤집힌다. 사람은 두 정체성을 거의 온전히 다 쓴다. 정체성 예산으로 재면 사람이 1.83, 모델이 0.98이다. 정체성이 겹칠수록 의견이 뚜렷해지는 것은 맞지만, 그 뚜렷함은 두 기울기를 더하면 거의 그대로 나온다. 모델에게 요구된 것은 결합 중에서 가장 쉬운 형태였다.

버려지는 축도 정해져 있다. 실측에서 응답 분산을 가장 크게 가르는 인종과 종교가 사람 자료 대비 각각 9.5%포인트, 5.0%포인트 덜 남는다. 프롬프트를 바꿔도, 생각의 사슬을 붙여도 값은 움직이지 않았고, 예측 오차를 크게 줄인 최신 모델에서도 붕괴율은 79%대로 이전 세대와 같았다.

지금 합성 데이터를 검수하는 규격은 축별 분포와 두 축 상관에서 멈춘다. 미국여론조사협회가 올해 5월에 낸 지침은 희소한 인구통계 군집을 합성으로 채우는 것이 가장 위험하다고 경고하면서도 교차라는 단어를 한 번도 쓰지 않는다. 축별로 다 맞아도 조합 층위에서 정보가 사라진다면, 검수 항목이 한 칸 더 필요하다.

▶ 전문: https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #합성데이터 #합성페르소나 #실리콘샘플링 #PewResearch #AAPOR #LLM편향

---

## LinkedIn (EN)

Given two identities, synthetic survey respondents used one. Across eight language models answering 15 waves of the Pew Research Center's American Trends Panel, a prediction built from a single attribute beat the prediction built from both in 75 to 82 percent of profile-by-question cells.

The study, posted to arXiv on 24 August, simulated 21.1 million responses to get there. The win rate needs a scale before anyone reads it. In a world where the two identities add perfectly, the same measure still returns 40 percent, and the observed values sit almost on top of the value produced by a world that uses one identity only.

Run the identical rule on the real respondents and it reverses. People use both identities almost in full. Measured as an identity budget, people spend 1.83 and the models spend 0.98. Opinions do sharpen where identities overlap, but that sharpening comes back almost exactly from adding the two slopes together. The models were asked for the easiest form of combination there is.

Which axis survives is not evenly distributed either. Race and religion, the two axes that split opinion most sharply in the human data, survive 9.5 and 5.0 percentage points less often than they do in people. Rewriting the prompt did not move it. Neither did chain-of-thought. A newer model that cut prediction error sharply held its collapse rate at 79 percent, the same as the generation before it.

Synthetic data today is audited at per-column distributions and column-pair correlations. AAPOR's May 2026 task force report calls filling sparse demographic clusters with synthetic respondents the riskiest use of all, and never once uses the word intersectional. If every axis can match while information disappears at the combination level, the checklist is one line short.

▶ Read: https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SyntheticData #SyntheticPersonas #SiliconSampling #PewResearch #AAPOR #LLMBias

---

## Twitter/X (KO)

언어모델에 정체성을 두 개 준 합성 응답자를 퓨 리서치의 실제 응답과 맞춰 봤더니, 네 건 중 세 건에서 둘 중 한 속성만으로 답이 더 잘 설명됐다. 실제 응답자는 두 정체성을 거의 온전히 다 쓴다.

축별 분포에서 멈추는 검수로는 이 실패가 보이지 않는다.

https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/ko/

#페블러스 #합성데이터 #PewResearch #데이터품질

---

## Twitter/X (EN)

Eight language models answered Pew Research surveys as respondents carrying two identities. In three cases out of four, one attribute explained the answer better than both together. Real respondents use both almost in full.

Audit synthetic data axis by axis and this failure never shows up.

https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/en/

#Pebblous #SyntheticData #PewResearch #DataQuality

---

## Facebook (KO)

"45세, 흑인, 여성."

설문에 답하라며 모델에게 건네는 프로필은 대개 이런 모양입니다.

그런데 실제로 이 셋에 모두 해당하는 사람은, 답할 때 그중 하나를 고르지 않습니다. 셋이 동시에 작동하는 자리에서 답이 나옵니다.

며칠 전 공개된 연구 한 편이 그 차이를 실제로 재 봤습니다. 미국 퓨 리서치의 설문 열다섯 개에 언어모델 여덟 종을 앉혀 놓고, 준 정체성 가운데 몇 개가 답에 실제로 반영됐는지를 셌습니다.

정체성을 둘 준 프로필에서는 하나 분량만 쓰였습니다. 셋을 준 프로필은 열에 아홉 이상이 최대 둘처럼 행동했습니다.

논문은 이것을 '정체성 예산'이라고 부릅니다. 실제 응답자는 1.83을 쓰고, 모델은 0.98을 씁니다. 그 하나 분량을 반씩 나눠 쓰지도 않습니다. 한쪽을 골라잡고 다른 쪽을 거의 놓습니다.

더 눈여겨보게 된 것은 그다음이었습니다. 무엇을 놓을지가 한 방향으로 정해져 있다는 것입니다.

실제 응답에서 의견을 가장 크게 갈라놓는 축이 인종과 종교인데, 모델 출력에서 가장 적게 남는 축도 정확히 그 둘이었습니다. 프롬프트를 고쳐도 그대로였고, 더 신중하게 단계적으로 생각하라고 시켜도 그대로였습니다. 한 모델은 신중하게 생각하라고 시키자 오히려 정체성을 더 적게 썼습니다.

"우리가 검수하는 다양성은 어느 층위의 다양성인가?"

합성 데이터의 품질을 잴 때 지금 보는 것은 대개 축별 분포입니다. 성별 비율이 맞는가, 연령 분포가 원본과 닮았는가. 이 논문이 보인 것은 그 검사를 전부 통과하면서도 조합 층위에서 정보가 사라질 수 있다는 사실이었습니다. 그런데 조합을 보라고 적어 둔 규격이 아직 없습니다.

페블러스는 지난 4월에 한국어 합성 페르소나 데이터셋이 왜 필요한가를 썼습니다. 이번에는 같은 데이터셋의 다양성을 무엇으로 검수할 것인가를 씁니다. 찬반이 아니라 한 주제의 양면이라고 생각합니다.

정체성을 둘 줬는데 하나만 쓰였다는 것은 재면 알 수 있는 사실입니다. 재는 방법도 이미 논문 안에 있습니다.

지금 비어 있는 것은 그 측정을 검수 항목으로 세워 둔 자리뿐입니다.

전문 → https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/ko/

#페블러스 #합성페르소나 #실리콘샘플링 #PewResearch #데이터클리닉 #데이터품질

---

## Facebook (EN)

"A 45-year-old Black woman."

That is roughly the shape of the profile handed to a model before it is asked to answer a survey question.

A person who is all three of those things does not pick one of them before answering. The answer arrives from the place where all three are working at once.

A paper released a few days ago measured that difference. Eight language models were seated in front of fifteen Pew Research surveys, and the researchers counted how many of the identities handed to each model actually showed up in its answer.

Given two, the models spent about one. Given three, more than nine in ten profiles behaved as though they had at most two.

The paper calls this an identity budget. Real respondents spend 1.83. The models spend 0.98. They do not even split that single share down the middle. One identity is picked up and the other is very nearly set down.

What held me longer was what came next. The choice of what to set down leans in one direction.

The two axes that separate opinion most sharply among real respondents are race and religion. Those are also the two that survive least often in the model's output. Rewriting the prompt left it where it was. So did asking the model to reason step by step. One model actually used fewer identities once it was told to think more carefully.

"Which layer of diversity is the one we are checking?"

When synthetic data is checked for quality today, what gets looked at is usually the per-axis distribution. Does the gender split hold. Does the age distribution resemble the source. What this paper showed is that all of those checks can pass while information disappears at the level of combinations. And no published standard tells anyone to look there.

In April, Pebblous wrote about why a Korean synthetic persona dataset is needed. This time we are writing about what you would audit that dataset's diversity with. Not for and against, but two sides of one subject.

That two identities went in and one came out is a fact you can measure. The way to measure it is already in the paper.

What is empty right now is the place where that measurement would stand as a checklist item.

Full report → https://blog.pebblous.ai/report/synthetic-persona-intersectional-collapse/en/

#Pebblous #SyntheticPersonas #SiliconSampling #PewResearch #DataClinic #DataQuality
