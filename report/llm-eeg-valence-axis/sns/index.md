# SNS 홍보 글: LLM의 감정은 인간 뇌와 같은 축을 그린다

> 소스: report/llm-eeg-valence-axis/ko/index.html
> 생성일: 2026-06-08
> URL: https://blog.pebblous.ai/report/llm-eeg-valence-axis/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

14개 언어 모델의 내부 표현이 인간 뇌파의 감정 축과 같은 방향을 그렸다.

신경과학에서 감정은 valence(쾌/불쾌)와 arousal의 2차원으로 기술된다. 지난 5월 발표된 논문(arXiv:2606.00129)은 그 중 valence 축만 분리해, 14개 현대 LLM의 내부 공간에서 같은 기하학적 구조가 나타나는지를 123명의 뇌파 기록과 직접 비교했다. 상관계수는 r=+0.87. 36개의 선형 탐침이 별도의 지시 없이 그 축을 자발적으로 재발견했고, 논문은 이를 'Saturation Regularity'라고 명명했다.

이것이 LLM의 감정 경험이나 의식을 증명하지는 않는다. 논문은 표현 공간의 기하학적 동형성과 주관적 경험을 명확히 구분하며, 표본 규모의 한계도 직접 인정한다.

연구가 남긴 더 무거운 질문은 이것이다. 학습 텍스트의 감정 구조가 모델의 표현 공간을 결정한다면, 어떤 데이터로 어떤 감정 언어를 학습시켰는가가 AI의 내부 구조에 직접 개입하는 변수가 된다.

↗ 링크는 댓글에
#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataClinic #LLM #인공지능 #EEG #neuroAI #감정AI

---

## LinkedIn (EN)

Fourteen language models aligned with the emotional valence axis of human EEG signals at a correlation of r=+0.87.

Researchers behind arXiv:2606.00129 extracted a single valence dimension from 400 sentences in the ValCore dataset and compared it against EEG recordings from 123 participants. The result held across all 14 LLMs tested. More telling: 36 linear probes, trained without explicit instruction, independently converged on the same axis — a phenomenon the authors term "Saturation Regularity."

The paper is explicit about what this does not mean. Geometric alignment in representation space is not evidence of subjective experience, and correlation is not causation. The single EEG dataset and sample size leave room for follow-up work.

The structural implication stands: if the emotional geometry of training text shapes model representations, the composition of that training data reaches into the architecture itself — not just a benchmarking concern at the surface.

↗ Link in comments
#Pebblous #DataClinic #DataQuality #DataJournalism #LLM #AI #EEG #NeuroAI #EmotionAI #MachineLearning

---

## Twitter/X (KO)

14개 LLM과 123명의 뇌파가 valence(감정 쾌/불쾌) 축에서 r=+0.87로 수렴했다.
LLM 표현 공간과 인간 뇌 신호를 직접 비교한 첫 연구.
https://blog.pebblous.ai/report/llm-eeg-valence-axis/ko/
#LLM #EEG #인공지능 #페블러스

---

## Twitter/X (EN)

14 LLMs and EEG from 123 people converged on the same emotional valence axis at r=+0.87.
The first direct comparison between LLM representation space and human brain signals.
https://blog.pebblous.ai/report/llm-eeg-valence-axis/en/
#LLM #EEG #AI #Pebblous

---

## Facebook (KO)

'LLM이 감정을 이해한다'는 말을 들을 때마다, 저는 그 문장이 어떤 근거 위에 서 있는지 궁금했습니다.

지난 5월 말, arXiv에 올라온 논문 하나가 그 질문에 다른 방식으로 답하려 했습니다.

14개의 현대 언어 모델 내부 표현을, 123명의 뇌파 기록과 직접 비교한 연구였습니다.

결과는 예상보다 선명했습니다.

valence(어떤 자극이 좋게 느껴지는지, 불쾌하게 느껴지는지를 나타내는 감정의 축) 위에서, LLM의 내부 표현과 인간의 뇌파는 r=+0.87로 같은 방향을 그렸습니다. 14개 모델 전반에서 재현됐고, 36개의 선형 탐침이 별도의 지시 없이 그 축을 스스로 재발견했습니다.

"이것이 LLM이 감정을 경험한다는 뜻인가?"

논문은 이 질문에 명확히 선을 긋습니다. 표현 공간의 기하학적 유사성은 주관적 경험과는 다른 이야기입니다. 상관관계가 인과를 증명하지 않고, 표본 규모의 한계도 논문 스스로 밝히고 있습니다.

그럼에도 이 발견이 남기는 질문은 있습니다.

텍스트 학습이 모델에 뇌와 닮은 '감정의 뼈대'를 남긴다면, 그 뼈대를 만드는 것은 결국 데이터입니다. 어떤 감정 언어로, 어떤 분포로 모델이 학습했는가가 표현 공간의 기하학을 결정한다면, 데이터 품질은 AI의 구조에 직접 개입하는 변수입니다. 페블러스가 DataClinic으로 학습 데이터의 품질을 정량 진단해온 이유 중 하나가 여기에 있습니다.

전문은 블로그에서 읽으실 수 있습니다.
https://blog.pebblous.ai/report/llm-eeg-valence-axis/ko/

#페블러스 #EEG #LLM #DataClinic #DataGreenhouse #데이터품질 #PebbloScope

---

## Facebook (EN)

There's a question that follows every evaluation paper about language models: what exactly are we measuring when we say a model "understands" something?

A study published in late May tried to answer that question with brain signals.

Researchers compared the internal representations of 14 modern LLMs against EEG recordings from 123 participants, looking for a single axis: valence — the dimension that runs from pleasant to unpleasant.

The correlation was r=+0.87.

Thirty-six linear probes, trained without explicit instruction, independently rediscovered the same axis. The authors call this "Saturation Regularity" — not a metaphor, but a measurable pattern in the geometry of representation space.

"Does this mean language models feel emotion?"

The paper draws a clear line. Structural similarity in representation space is not the same as subjective experience. Correlation is not causation. The sample of 123 participants is a starting point, not a conclusion.

What the finding does raise is a different kind of question.

If the emotional geometry of training text shapes the architecture of a model's representations, then the composition of that data is a structural variable not just a quality concern at the surface, but one that reaches into the model itself. Pebblous has been building DataClinic around this idea: that the properties of training data need to be measurable before they become invisible inside a model.

https://blog.pebblous.ai/report/llm-eeg-valence-axis/en/

#Pebblous #EEG #LLM #DataClinic #DataGreenhouse #DataQuality #PebbloScope
