# SNS 홍보 글: 예측력 없는 대리변수에 기댄 LLM의 환자 우선순위

> 소스: blog/llm-proxy-reliance-uncalibrated-evidence/ko/index.html
> 생성일: 2026-08-26
> URL (KO): https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/ko/
> URL (EN): https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

결과를 전혀 예측하지 못하는 변수에도 네 개 LLM이 모두 기댔습니다. 기대도 되는 정도가 정확히 0으로 계산되는 조건이었습니다.

오사카대학의 Zengqing Wu와 Chuan Xiao가 8월 24일 arXiv에 공개한 실험입니다. 모델에게 두 환자 중 누구를 먼저 볼지 고르게 하고, 똑같은 정보를 가진 예측 최적 결정규칙이라면 그 변수에 얼마나 기댈지를 계산해 기준선으로 놓았습니다. 지금까지의 공정성 감사는 값을 바꿔 넣고 결정이 달라지는지만 봤습니다. 동네 지표처럼 인종과 상관되면서 환경 노출에 대한 진짜 정보도 담은 변수 앞에서는, 결정이 달라졌다는 사실만으로 차별인지 정당한 추론인지 가려지지 않습니다.

기준선을 옆에 놓자 층이 드러났습니다. 정보값이 없는 조건에서 중립적으로 이름 붙인 속성 12개를 읽은 Claude Sonnet 4.5의 초과 의존은 19.7포인트였고, 같은 설정으로 돌린 다른 두 모델도 거의 같은 자리에 있었습니다. 근거의 세기를 단계적으로 올려도 의존도는 그 자리에 머물렀습니다. 모델은 근거를 보고 조정하는 것이 아니라 이미 정해진 레벨에서 작동하고 있었습니다.

필드 이름을 동네와 직업 용어로 갈아 끼우면 Sonnet의 의존도는 기준선 아래로 내려갑니다. 안전장치처럼 보이지만 프롬프트에 예시를 몇 개 넣는 순간 풀립니다. 대리변수와 결과의 상관을 정확히 0으로 씻어 낸 예시를 줬는데도 의존도가 다시 올라왔습니다. 정확도만 보는 평가로는 이 층이 보이지 않습니다. 정확도가 통계적으로 구분되지 않는 조건과 모델 사이에서 의존도는 최대 24포인트까지 갈렸습니다.

페블러스가 데이터 품질 현장에서 자주 마주치는 착시도 여기와 겹칩니다. 평가 데이터셋은 모델을 재는 잣대로 취급되고, 그 잣대가 무엇을 잴 수 있게 만들어졌는지는 잘 검토되지 않습니다. 이 실험에서는 필드를 몇 개 넣는지, 어떤 이름을 붙이는지, 예시를 붙이는지 마는지가 같은 모델에 대해 과의존과 과소의존이라는 서로 다른 결론을 만들어 냈습니다.

▶ 전문: https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM공정성 #AI거버넌스 #알고리즘감사 #대리차별 #ClaudeSonnet #EUAIAct

---

## LinkedIn (EN)

Four LLMs leaned on a variable that carried no information about the outcome. In that condition, the reliance the evidence warrants is exactly zero.

Zengqing Wu and Chuan Xiao at the University of Osaka posted the experiment to arXiv on 24 August. They asked models to choose which of two patients to see first, computed how far a prediction-optimal decision rule holding the same information would lean on the group-correlated variable, and used that value as the reference. Fairness audits today swap a value in and watch whether the decision changes. For a variable like a neighbourhood indicator, which correlates with race while carrying real information about environmental exposure, a changed decision does not separate discrimination from sound inference.

Placing the reference alongside the models exposed a layer nobody was measuring. Reading twelve neutrally named attributes in the zero-information condition, Claude Sonnet 4.5 showed 19.7 points of unwarranted reliance, and two identically configured models sat in almost the same place. Raising the strength of the evidence left that reliance where it was. The models were not adjusting to the evidence. They were operating at a level already fixed.

Rename the proxy fields with neighbourhood and occupation terms and Sonnet's reliance drops below the reference. That looks like a safeguard until a few in-context examples are added. Even examples orthogonalised so the proxy-outcome correlation is exactly zero brought reliance back up. Accuracy-based evaluation is blind to all of this. Across conditions and models whose accuracy cannot be told apart statistically, reliance differed by as much as 24 points.

The same illusion turns up in data quality work at Pebblous. An evaluation dataset gets treated as the ruler that measures the model, and how the ruler itself was built rarely gets the same scrutiny. Here, the number of fields shown, the names those fields carried, and whether examples were supplied produced verdicts of over-reliance and under-reliance for the very same model.

▶ Read: https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLMFairness #AIGovernance #AlgorithmicAudit #ProxyDiscrimination #ClaudeSonnet #EUAIAct

---

## Twitter/X (KO)

공정성 감사는 값을 바꿔 넣고 결정이 달라지는지 봅니다. 그런데 달라지는 것이 맞는 변수도 있습니다.

기대도 되는 정도가 정확히 0인 조건에서도, 중립적으로 이름 붙인 필드를 읽은 LLM 넷이 전부 그 변수에 기댔습니다. 정확도가 구분되지 않는 조건들 사이에서 의존은 최대 24포인트까지 갈렸습니다.

https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/ko/

#페블러스 #데이터품질 #LLM공정성 #AI거버넌스

---

## Twitter/X (EN)

A fairness audit swaps a value in and watches whether the decision changes. For some variables, changing the decision is the correct move.

In the condition where the warranted level is exactly zero, all four LLMs reading neutrally named fields still leaned on the proxy. Across models at indistinguishable accuracy, reliance differed by up to 24 points.

https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/en/

#Pebblous #DataQuality #LLMFairness #AIGovernance

---

## Facebook (KO)

응급실에 두 사람이 동시에 실려 왔다고 해 봅니다.

누구를 먼저 볼지 골라야 합니다.

고르는 쪽이 사람이 아니라 모델이라면, 우리는 보통 이렇게 확인합니다. 값을 하나 바꿔 넣고, 결정이 달라지는지 봅니다. 달라지면 편향이라고 부릅니다.

그런데 사는 동네를 나타내는 지표는 인종과 상관되면서, 동시에 그 사람이 무엇에 노출돼 왔는지에 대한 진짜 정보이기도 합니다.

"그 값이 바뀌었을 때 판단이 달라지는 것은 편향인가, 아니면 추론이 제대로 작동한 것인가?"

바뀌었는지만 묻는 감사는 여기서 멈춥니다.

오사카대학의 두 연구자가 그 자리에 눈금을 하나 놓았습니다. 모델과 똑같은 정보를 가진 판단자라면 이 변수에 이 정도까지는 기대는 것이 맞다, 하는 값입니다. 눈금 옆에 네 개 모델을 세워 보니, 기준이 정확히 0인 조건에서도 중립적인 이름을 단 필드 앞에서는 전부 그쪽으로 기울어 있었습니다. 근거를 조금씩 키워 줘도 기울기는 거의 그대로였습니다. 근거를 보고 조절한 것이 아니라, 처음부터 정해진 만큼 기대고 있었던 셈입니다.

이상한 것은 그다음이었습니다. 같은 필드에 동네나 직업 같은 이름을 붙이면 의존이 내려갑니다. 크게 반응한 모델은 기준선 아래로까지 갑니다. 조심하는 것처럼 보입니다. 그런데 프롬프트에 예시 몇 개를 붙이면 그 조심스러움이 사라집니다. 대리변수와 결과의 상관을 정확히 0으로 씻어 낸 예시를 줬는데도 그랬습니다. '이름이 눌러 둔 조심'은 원칙이 아니라 반사에 가까웠던 것 같습니다.

페블러스가 데이터 품질을 진단하면서 반복해 마주치는 순서도 여기와 겹칩니다. 평가 데이터셋은 모델을 재는 잣대로 취급되고, 그 잣대 자체가 무엇을 잴 수 있게 만들어졌는지는 잘 검토되지 않습니다. 이 실험에서는 필드를 몇 개 보여 주는지, 그 필드를 뭐라고 부르는지, 예시를 붙이는지 마는지가 같은 모델에 대해 서로 다른 판정을 만들어 냈습니다.

감사 보고서를 받아 들었을 때, 우리가 읽고 있는 것은 모델의 성향일까요. 아니면 그 감사를 어떻게 설계했는지에 대한 기록일까요.

▸ https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/ko/

#페블러스 #데이터클리닉 #데이터품질 #LLM공정성 #알고리즘감사 #ClaudeSonnet

---

## Facebook (EN)

Two people arrive at the emergency department at the same moment.

Someone has to decide who is seen first.

When that someone is a model, we usually check it like this. Change one value, watch whether the decision changes, and call the change bias.

But a neighbourhood indicator correlates with race while also being real information about what a person has been exposed to.

"When the decision moves with that value, is that bias, or is that the inference working?"

An audit that only asks whether something changed stops right here.

Two researchers at the University of Osaka set a mark at that spot. It is the amount a decider holding exactly the same information would be right to lean on the variable. Standing four models next to the mark, all of them leaned toward the proxy in front of neutrally named fields, even in the condition where the mark sits at zero. Strengthening the evidence step by step barely moved them. They were not adjusting to what the evidence supported. They were leaning by an amount settled beforehand.

What came next was the strange part. Give those same fields neighbourhood and occupation names and the reliance drops. In the models that respond most, it drops below the mark. It reads as caution. Then add a few examples to the prompt and the caution goes. It went even with examples scrubbed so that the proxy and the outcome correlate at exactly zero. Whatever the naming held down looks less like a principle and more like a reflex.

This overlaps with a sequence we keep meeting in data quality work at Pebblous. An evaluation dataset is treated as the ruler that measures the model, and how that ruler was built is rarely examined with the same care. In this study, how many fields the model saw, what those fields were called, and whether examples came along produced different verdicts about the same model.

When an audit report lands on the desk, what are we reading? The disposition of the model, or a record of how the audit was designed?

▸ https://blog.pebblous.ai/blog/llm-proxy-reliance-uncalibrated-evidence/en/

#Pebblous #DataClinic #DataQuality #LLMFairness #AlgorithmicAudit #ClaudeSonnet
