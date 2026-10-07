# SNS 홍보 글: 리플렉션 AI의 공개 모델 Beam, 무엇을 배웠는지는 비공개다

> 소스: blog/reflection-beam-open-weights-closed-data/ko/index.html
> 생성일: 2026-10-08
> URL: https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

발표문 한 장에 파라미터도 토큰도 GPU 장수도 벤치마크 점수도 다 적혀 있는데, 그 모델이 무엇을 읽고 자랐는지만 문장 하나다. 리플렉션 AI가 10월 5일 공개한 Beam 이야기다. 이 회사가 처음 내놓는 공개 가중치 모델이고, 가중치는 10월 중 아파치 2.0 라이선스로 풀린다고 했다.

자료를 어떻게 걸렀는지는 제법 길게 적혀 있다. 원시 인터넷 토큰의 약 95%를 파싱과 중복 제거와 큐레이션 과정에서 버렸고, 흔한 필터였다면 놓쳤을 고품질 토큰은 따로 추려 살려 두었다고 썼다. 그 자료가 어디서 왔는지로 넘어가면 말이 갑자기 짧아진다. 웹과 공개 자료와 독점 라이선스 데이터셋. 23.8조 토큰의 출처는 이 세 범주가 전부다.

10월에 이름을 들어 공개하겠다고 적은 것은 가중치와 기술보고서, 모델카드, 개발자 도구, 그리고 사내에서 만들어 써 온 안전성 평가다. 학습에 쓴 데이터셋과 그것을 만든 학습 파이프라인은 이 목록에 없다. 공개하지 않겠다고 적은 것도 아니다. 그냥 없다. 공동창업자 미샤 라스킨은 1년 전 20억 달러를 모으던 자리에서 데이터셋과 전체 학습 파이프라인은 자사 소유로 유지하겠다고 이미 밝혔다. 이번 발표는 그 방침을 바꾼 것이 아니라 그대로 집행한 것이다.

여기서 자주 어긋나는 통념이 하나 있다. 공개 라이선스로 풀면 투명성 의무에서 빠진다는 생각이다. 유럽연합 AI법 제53조 2항이 자유·공개 라이선스 모델에 주는 면제는 기술문서 작성과 하위 사업자 정보 제공에만 걸린다. 학습 콘텐츠 요약을 공개하라는 (d)호는 면제 목록에 없다. 의무는 이미 적용 중이고, 위반에 대한 집행은 2026년 8월부터 가능하다.

가중치를 푸는 결정 자체는 좋은 쪽으로 가는 걸음이다. 다만 그 모델을 사내에 들인 쪽은 고객사 보안 검토서와 조달 심사에서 이 모델이 무엇으로 학습했는지를 묻는 질문을 받는다. 가중치만 받은 쪽이 거기 내놓을 수 있는 답은 공급사 발표문을 옮기는 것뿐이고, 그 발표문이 세 범주에서 끝나면 옮길 내용도 그만큼이다. 페블러스가 AI-Ready Data를 말할 때 앞에 두는 전제가 같은 자리에 있다. 데이터의 품질은 데이터만 들여다봐서 알 수 없고, 그것이 어디서 왔고 어떻게 손질됐는지가 함께 기록돼야 비로소 판단할 수 있다.

▶ 전문: https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Beam #ReflectionAI #오픈웨이트 #EUAIAct #학습데이터투명성 #AIReadyData

---

## LinkedIn (EN)

An announcement went up on October 5 with numbers packed into every line. Parameters, training tokens, GPU counts, benchmark scores. Where the model learned all of it from gets one sentence. The model is Beam, Reflection AI's first open-weight release, and the weights go out under the Apache 2.0 licence later this month.

How the data was filtered is described at some length. Roughly 95 per cent of raw Internet tokens were discarded during parsing, deduplication and curation, and high-quality tokens a conventional filter would have thrown away were picked back out and kept. Move from how the data was selected to where it came from, and the account shortens abruptly. The web, public sources, proprietary licensed datasets. That is the entire provenance given for 23.8 trillion tokens.

What the October release names is the weights, a technical report, a model card, developer tooling, and the safety evaluations the company built for its own use. The training datasets and the pipeline that produced them are not on the list. Nor are they declared withheld. They are simply absent. Co-founder Misha Laskin said a year ago, while raising two billion dollars, that the datasets and the full training pipeline would stay proprietary. This release carries out that policy rather than changing it.

An assumption breaks at this point: that shipping under a free and open licence lifts the transparency duty. The exemption in Article 53(2) of the EU AI Act reaches technical documentation and information for downstream providers, and stops there. Publishing a sufficiently detailed summary of training content, point (d), is not on that list. The duty is already in force, and enforcement becomes possible from August 2026.

Opening the weights is a step in the right direction. The team that brings the model in-house, though, is the one that fields the customer security review and the procurement questionnaire asking what it was trained on. Holding only the weights, all they can offer is a quotation from the supplier's announcement, and where that stops at three categories, so does the answer. That is the premise Pebblous puts first in AI-Ready Data: the quality of data cannot be judged from the data alone, only once a record of where it came from and how it was worked travels alongside it.

▶ Read: https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Beam #ReflectionAI #OpenWeight #EUAIAct #TrainingDataTransparency #AIReadyData

---

## Twitter/X (KO)

리플렉션 AI가 Beam의 가중치를 누구나 내려받게 푼다. 학습에 쓴 23.8조 토큰이 어디서 왔는지에 대한 설명은 웹과 공개 자료와 독점 라이선스 데이터셋, 세 범주에서 끝난다.

유럽연합 AI법은 공개 라이선스로 푸는 모델에도 학습 자료 요약 공개를 면제하지 않는다.

▶ https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/ko/

#페블러스 #Beam #오픈웨이트 #데이터품질

---

## Twitter/X (EN)

Reflection AI is opening Beam's weights for anyone to download. The account of where its 23.8 trillion training tokens came from ends at three categories: the web, public sources, licensed datasets.

The EU AI Act does not exempt open-licence models from publishing a summary of their training content.

▶ https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/en/

#Pebblous #Beam #OpenWeight #DataQuality

---

## Facebook (KO)

고객사에서 보안 검토서가 한 장 왔다고 해 봅시다.

아래쪽 칸에 이렇게 적혀 있습니다. "이 기능에 쓰인 모델은 무엇으로 학습했습니까."

라이선스 조항도 벤치마크 점수도 금방 채울 수 있는데, 그 칸 하나에서 손이 멈춥니다.

이번 달 리플렉션 AI가 Beam을 발표했습니다. 이 회사가 처음 내놓는 공개 가중치 모델이고, 가중치는 10월 중 아파치 2.0 라이선스로 풀린다고 했습니다.

발표문에는 숫자가 빼곡합니다. 파라미터도, 사전학습에 쓴 토큰도, 몇 장의 GPU를 몇 주 돌렸는지도, 벤치마크 점수도 다 있습니다.

자료를 어떻게 걸렀는지도 꽤 자세합니다. 원시 인터넷 토큰의 약 95%를 버렸고, 흔한 필터였다면 놓쳤을 고품질 토큰을 따로 살려 두었다고 적었습니다.

그런데 그 자료가 어디서 왔는지로 넘어가면, 문장이 하나입니다.

웹과 공개 자료와 독점 라이선스 데이터셋.

23.8조 토큰의 내력이 이 세 낱말 안에 들어 있습니다.

'열린 모델'이라는 말을 업계가 아직 같은 뜻으로 쓰고 있지 않습니다.

내려받을 수 있다는 뜻으로도 쓰이고, 들여다볼 수 있다는 뜻으로도 쓰입니다. 두 뜻은 겹치지 않는데 낱말은 하나입니다.

지난해 11월 앨런 AI 연구소가 공개한 OLMo 3은 가중치와 함께 사전학습 데이터셋과 학습 코드, 학습 도중에 저장한 중간 체크포인트까지 냈습니다. 그래서 모델이 내놓은 한 구절이 학습 자료의 어느 대목에서 왔는지 되짚어 볼 수 있습니다.

Beam이 공개하는 것으로는 그 되짚기를 할 수 없습니다.

이 빈자리를 업계보다 법이 먼저 채우기 시작했습니다.

유럽연합 AI법은 자유·공개 라이선스로 배포되는 모델에도 학습 자료 요약 공개 의무를 면제하지 않습니다. 면제되는 것은 기술문서 작성과 하위 사업자 정보 제공, 두 가지뿐입니다.

페블러스가 AI-Ready Data를 말할 때 앞에 두는 전제가 여기에 맞닿아 있습니다. 데이터의 품질은 데이터만 들여다봐서 알 수 없고, 어디서 왔고 어떻게 손질됐는지가 함께 기록돼야 비로소 읽힙니다.

모델도 다르지 않습니다. 성능은 시간이 지나면 더 나은 모델로 갈아탈 수 있지만, 학습 자료에서 비롯된 권리 문제는 갈아탄 뒤에도 남습니다. 둘은 같은 속도로 낡지 않습니다.

처음의 보안 검토서로 돌아가 봅니다.

"그 칸에 우리 말로 적을 수 있는 문장이 있습니까? 공급사 발표문을 옮기는 것 말고."

가중치를 여는 일은 분명히 좋은 쪽으로 가는 걸음입니다. 다만 그 걸음의 폭을 재는 일은 아직 받는 쪽의 몫으로 남아 있는 듯합니다.

▶ 전문: https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/ko/

#페블러스 #Beam #ReflectionAI #오픈웨이트 #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Imagine a security questionnaire arriving from a customer.

Near the bottom there is a box that reads: "What was the model behind this feature trained on?"

The licence terms fill in quickly. So do the benchmark scores. The hand stops at that one box.

Reflection AI announced Beam this month. It is the company's first open-weight model, and the weights go out under the Apache 2.0 licence sometime in October.

The announcement is dense with numbers. Parameters, pretraining tokens, how many GPUs ran for how many weeks, benchmark scores, all of it.

How the data was filtered is laid out carefully too. Around 95 per cent of raw Internet tokens were thrown away, and high-quality tokens a conventional filter would have missed were deliberately kept.

Then comes where that data came from, and it is one sentence.

The web, public sources, proprietary licensed datasets.

The whole history of 23.8 trillion tokens sits inside those few words.

The industry has not settled on one meaning for "an open model."

Sometimes it means you can download it. Sometimes it means you can look inside it. The two do not overlap, and the phrase is the same.

Olmo 3, released by the Allen Institute for AI last November, came with its pretraining dataset, the training code, and the intermediate checkpoints saved along the way. Which means a phrase the model produced can be traced back to the passage of training data it came from.

Nothing in Beam's release supports that tracing.

The law started filling this space before the industry did.

The EU AI Act grants no exemption from publishing a summary of training content to models distributed under a free and open licence. What the exemption covers is technical documentation and information for downstream providers. Those two.

There is a premise Pebblous puts first whenever AI-Ready Data comes up, and it meets this question here. The quality of data cannot be read off the data alone; where it came from and how it was worked has to be recorded with it.

Models are no different. Performance can be swapped out for something better later. The rights questions that come from the training data stay behind after the swap. The two do not age at the same speed.

Back to that questionnaire.

"Is there a sentence we can write in that box in our own words, rather than quoting the supplier's announcement?"

Opening the weights is plainly a step in the right direction. Measuring the width of the step, though, still seems to be left to the side receiving it.

▶ Full piece: https://blog.pebblous.ai/blog/reflection-beam-open-weights-closed-data/en/

#Pebblous #Beam #ReflectionAI #OpenWeight #DataQuality #DataClinic #AIReadyData
