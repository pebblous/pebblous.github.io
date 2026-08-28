# SNS 홍보 글: 본 적 없는 폭우를 통계로 그려 내는 생성 모델

> 소스: blog/eta-learning-extremes-without-extreme-data/
> 생성일: 2026-08-29
> URL: https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

25년 기록 가운데 첫 6개월만 보고 배운 모델이, 그 6개월에 거의 없던 극한 강수의 분포를 되살렸습니다.

MIT 기계공학과의 Kai Chang과 Themistoklis Sapsis가 8월 20일 Nature Communications에 공개한 방법입니다. 저해상도 지도와 고해상도 지도의 공간 대응은 6개월치 쌍으로 배우고, 지도 한 장의 최댓값이 따라야 할 분포는 훈련 손실에 제약으로 따로 넣었습니다. 같은 자료로 평범하게 훈련한 모델은 그 꼬리를 통째로 놓쳤습니다.

요구 사항의 종류가 바뀐 것입니다. 라벨이 붙은 극한 사례를 요구하던 자리에, 극값이 따라야 할 분포의 형태가 들어섭니다.

대가는 두 군데에 있습니다. 꼬리를 얻는 대신 격자 전체의 오차가 8% 남짓 올랐고, 저자들이 참조 분포의 꼬리를 무거운 쪽으로 흔들자 그 오차가 20%를 넘겼습니다. 생성된 지도는 크기의 통계로만 일관되고, 극값이 어디에 앉는지는 보장하지 않습니다.

그래서 저자들은 이 방법을 데이터 수집의 대체물로 내놓지 않습니다. 다음에 어디를 수집할지 겨누는 장치로 놓습니다.

페블러스가 데이터 품질 현장에서 자주 서는 갈림길도 같은 모양입니다. 희소 사례를 더 모을 것인가, 분포를 다르게 학습시킬 것인가. 후자를 고르는 조직에는 물어볼 것이 하나 생깁니다. 우리 도메인에서 심각도를 대표하는 값 하나와 그 꼬리의 형태를 지금 문서로 적어 낼 수 있는가.

▶ 전문: https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #합성데이터 #롱테일데이터 #극단값이론 #생성형AI #MIT #NatureCommunications

---

## LinkedIn (EN)

A model trained on the first six months of a 25-year rainfall record reproduced the extremes that those six months almost never contained.

The method, published in Nature Communications on August 20 by Kai Chang and Themistoklis Sapsis of MIT, learns the correspondence between coarse and fine rainfall maps from the six-month pairs alone. The distribution that the maximum of any single map must follow enters separately, as a constraint inside the training loss. A model trained conventionally on the same data missed the tail entirely.

What changed is the kind of requirement. In place of labeled extreme examples, the method asks for the shape the extremes have to obey.

The cost shows up twice. Recovering the tail raised full-grid error by roughly 8 percent, and when the authors deliberately shifted the reference tail toward a heavier one, that error passed 20 percent. The generated maps are consistent in the statistics of magnitude and say nothing reliable about where an extreme lands.

Which is why the authors do not offer this as a substitute for collecting data. They offer it as a way to aim the next round of collection.

The fork we keep meeting in data quality work at Pebblous has the same shape. Collect more rare cases, or train the distribution differently. Choosing the second raises a question that comes first. Can you write down, today, the one quantity that stands for severity in your domain and the evidence for the shape of its tail?

▶ Read: https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SyntheticData #LongTailData #ExtremeValueTheory #GenerativeAI #MIT #NatureCommunications

---

## Twitter/X (KO)

25년 기록 가운데 첫 6개월만 보고 배운 MIT의 생성 모델이, 그 구간에 거의 없던 극한 강수의 분포를 되살렸습니다.

극한 사례를 요구하던 자리에 극값이 따라야 할 분포의 형태를 놓은 것입니다. 그 형태를 잘못 잡으면 만들어진 극값도 함께 틀립니다.

https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/ko/

#페블러스 #데이터품질 #극단값이론 #MIT

---

## Twitter/X (EN)

An MIT model that learned from the first six months of a 25-year rainfall record reproduced extremes that stretch of data barely held.

The demand for labeled extreme cases was replaced by a demand for the shape those extremes must follow. Get the shape wrong and the generated extremes are wrong with it.

https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/en/

#Pebblous #DataQuality #ExtremeValueTheory #MIT

---

## Facebook (KO)

뉴욕에 지금까지 기록된 하루 최대 강수량이 200밀리라고 합시다.

그러면 300밀리짜리 폭풍은 어떤 모습입니까?

방조제 높이를 정하거나 배수 용량을 잡아야 하는 사람에게 이 질문은 한가한 가정이 아닙니다. 그런데 답을 만들어 줄 모델을 훈련시키려면, 그 300밀리 사건이 이미 기록 안에 있어야 합니다. 한 번도 없던 일을 배우려면 그 일이 데이터에 있어야 한다는 순환입니다.

MIT의 Kai Chang과 Themistoklis Sapsis가 이번 달 Nature Communications에 발표한 방법은 그 순환에서 한 걸음 비켜섭니다. 저해상도 지도와 고해상도 지도의 대응은 25년 기록 가운데 첫 6개월치로만 배웁니다. 그 6개월에는 가장 극심한 강수 사례가 거의 들어 있지 않습니다. 대신 지도 한 장의 최댓값이 따라야 할 분포를 훈련 손실 안에 제약으로 넣습니다.

사례를 요구하던 자리에 모양을 요구한 것입니다.

저는 이런 자료를 '꼬리가 비어 있는 데이터셋'이라고 부르게 됐습니다. 기상만의 사정이 아닙니다. 자율주행의 코너 케이스도, 설비의 고장 직전 몇 분도, 신용의 급락 구간도 같은 자리가 비어 있습니다.

"우리에게 없는 것은 사례입니까, 아니면 그 사례가 따라야 할 모양입니까?"

이 방법이 무엇을 공짜로 주지는 않습니다. 꼬리의 모양을 잘못 잡으면 만들어진 극값의 크기도 그만큼 함께 틀립니다. 저자들은 그 사실을 감추지 않고, 일부러 꼬리를 흔들어 본 감도 분석을 논문에 같이 실었습니다. 만들어진 지도가 극값의 위치까지 짚어 주지는 못한다는 것도 그림으로 남겨 두었습니다.

페블러스가 데이터 품질 현장에서 자주 서는 갈림길도 여기서 멀지 않습니다. 희소 사례를 더 모을 것인가, 분포를 다르게 학습시킬 것인가. 두 번째 길을 고르는 순간, 우리가 가정한 꼬리의 모양이 그대로 결과의 크기가 됩니다.

그러니 이 방법을 옮길 수 있는지를 가르는 것은 도메인 이름이 아닌 듯합니다. 우리 데이터의 꼬리가 어떤 모양이어야 하는지를 지금 종이에 적어 낼 수 있는가. 적어 낼 수 없다면, 아직은 모으는 쪽이 먼저인지도 모르겠습니다.

▸ https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #롱테일데이터 #극단값이론 #MIT #NatureCommunications

---

## Facebook (EN)

Say the heaviest rainfall New York has on record is 200 millimeters in a day.

What would 300 look like?

For anyone sizing a seawall or a drainage system, that is not an idle question. But to train a model that answers it, the 300-millimeter day has to already be in the record. To learn an event that has never happened, you need the event in your data.

The method Kai Chang and Themistoklis Sapsis of MIT published in Nature Communications this month steps out of that loop. The correspondence between coarse and fine rainfall maps is learned from the first six months of a 25-year record, a stretch that holds almost none of the severe storms. What the maximum of a single map must look like statistically enters somewhere else entirely, as a constraint inside the training loss.

A demand for examples became a demand for a shape.

I have started thinking of these as datasets with an empty tail. Weather is only the clearest case. The corner case in autonomous driving, the last few minutes before a machine fails, the stretch where credit falls off a cliff: the same region is missing.

"Is what we lack the examples, or the shape the examples would have to take?"

Nothing here comes free. Assume the wrong tail and the magnitude of everything you generate is wrong by the same margin. The authors do not hide this. They perturbed the tail on purpose and published the sensitivity analysis, and they show in their own figures that a generated map does not tell you where the extreme will land.

The fork we stand at in data quality work is close to this one. Collect more rare cases, or train the distribution differently. Take the second road and the tail you assumed becomes the magnitude you report.

So what decides whether the idea travels may not be the name of the domain. It is whether you can write down today what the tail of your data ought to look like. If you cannot, collecting may still be the first move.

▸ https://blog.pebblous.ai/blog/eta-learning-extremes-without-extreme-data/en/

#Pebblous #DataClinic #DataQuality #LongTailData #ExtremeValueTheory #MIT #NatureCommunications
