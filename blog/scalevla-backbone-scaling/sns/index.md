# SNS 홍보 글: ScaleVLA, 로봇 두뇌를 키우면 시연 영상이 덜 필요할까?

> 소스: blog/scalevla-backbone-scaling/ko/index.html
> 생성일: 2026-11-25
> URL (KO): https://blog.pebblous.ai/blog/scalevla-backbone-scaling/ko/
> URL (EN): https://blog.pebblous.ai/blog/scalevla-backbone-scaling/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

로봇에게 시연을 10개만 보여 준 쪽이 50개를 본 쪽을 이겼다. 달라진 것은 데이터가 아니라 로봇 두뇌의 크기였다.

11월 16일 arXiv에 올라온 ScaleVLA 보고서의 결과다. 행동을 만드는 부분과 학습 조건은 그대로 두고, 눈과 말을 맡는 백본만 20억 파라미터에서 5,520억 파라미터까지 갈아 끼워 비교했다.

과제마다 시연을 10개씩만 준 큰 백본이 87.8%를 냈다. 같은 과제에서 시연을 50개씩 받은 작은 백본은 85.6%에 머물렀다.

백본은 학습시키지 않고 고정해서 쓴다. 텍스트를 만드는 디코더는 호출조차 하지 않고, 인코더가 장면과 지시문을 읽어 남긴 중간 표현만 행동 쪽으로 넘긴다. 로봇 행동은 사전학습 없이 전부 빈 상태에서 배우기 때문에, 이 비교에 남는 변수는 백본의 표현력 하나다.

읽을 때 걸리는 자리가 있다. 모든 조건에 같은 학습 스텝을 줬고, 작은 백본은 더 오래 학습시키면 계속 좋아진다는 사실을 저자들도 같은 보고서에 적어 두었다. 여러 단계를 이어 가야 하는 긴 과제 묶음에서는 역전이 일어나지 않았다. 실물 로봇 시험은 충전기 꽂기 한 과제에 25회가 전부였고, 추론에는 GPU 4장이 들었다. 작은 백본은 1장이면 됐다.

그래서 이 결과는 데이터를 덜 모아도 된다는 허락이 아니다. 같은 예산을 시연 쪽에 쓸지 백본 쪽에 쓸지, 저울이 달라졌다는 쪽에 가깝다. 그리고 시연 10개로 버티는 설계일수록 그 10개가 무엇을 가르치는지가 더 무거워진다. 페블러스는 DataClinic으로 AI 학습 데이터가 무엇을 가르치고 있는지를 분포로 펴서 진단한다.

▶ 전문: https://blog.pebblous.ai/blog/scalevla-backbone-scaling/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #AIReadyData #ScaleVLA #VLA #로봇학습데이터 #DeepSeek

---

## LinkedIn (EN)

A robot policy shown ten demonstrations per task beat one shown fifty. The difference was not in the data. It was the size of the brain doing the looking and the reading.

The result comes from ScaleVLA, a technical report posted to arXiv on November 16. The authors held the action module and every training condition constant and swapped only the vision-language backbone, from 2 billion parameters up to 552 billion. Given ten demonstrations per task, the large backbone reached 87.8%. The small one needed fifty to reach 85.6%.

The backbone is frozen rather than trained. Its text decoder is never called at all; what reaches the action module is the encoder's intermediate reading of the scene and the instruction, and nothing else. Nothing on the action side starts from robot pre-training, so the one variable left standing in the comparison is representational power.

Several things qualify it. Every condition received the same number of training steps, and the authors report in the same document that the smaller backbone keeps improving when trained longer. On the long-horizon suite no reversal occurred. The physical test was 25 trials on a single charger-insertion task, and inference took four GPUs where the small backbone took one.

So this is not permission to collect less data. It is a shift in how the trade gets weighed: the same budget can now go to the backbone instead of to more demonstrations, and that route arrives with a price tag of its own. A design that leans on ten demonstrations makes what those ten teach heavier, not lighter. Pebblous characterises what a training set is actually teaching with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/scalevla-backbone-scaling/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #AIReadyData #ScaleVLA #VLA #RobotTrainingData #DeepSeek

---

## Twitter/X (KO)

시연 10개로 배운 로봇이 시연 50개로 배운 로봇을 성공률에서 앞섰다. 다른 조건은 모두 같았고, 앞쪽만 백본이 5,520억 파라미터였다.

데이터를 덜 모아도 된다는 결론은 아니다. 같은 예산을 시연에 쓸지 모델에 쓸지, 저울이 달라졌다는 뜻에 가깝다.

▶ https://blog.pebblous.ai/blog/scalevla-backbone-scaling/ko/

#페블러스 #데이터품질 #ScaleVLA #PhysicalAI

---

## Twitter/X (EN)

A policy trained on ten demonstrations per task beat one trained on fifty. Every other condition was identical. Only the winning side carried a 552-billion-parameter backbone.

Not a licence to collect less data. A change in where the same budget buys more.

▶ https://blog.pebblous.ai/blog/scalevla-backbone-scaling/en/

#Pebblous #DataQuality #ScaleVLA #PhysicalAI

---

## Facebook (KO)

실물 로봇 시연 303편 가운데 132편은 충전기를 구멍에 꽂아 넣는 그 몇 초만 따로 다시 모은 것입니다.

누군가 로봇 앞에 앉아 꽂는 동작만 132번 반복했다는 뜻입니다.

로봇 데이터가 비싼 이유는 이 장면 안에 다 들어 있습니다. 사람의 시간, 로봇 가동 시간, 그 둘이 같이 있어야 하는 공간.

그래서 지난 16일 arXiv에 공개된 보고서의 질문이 오래 남았습니다. "모델을 키우면, 이 반복을 줄일 수 있나?"

ScaleVLA라는 이름이 붙은 그 시험은 행동을 만드는 부분과 학습 조건을 그대로 둔 채 눈과 말을 맡는 백본만 20억 파라미터에서 5,520억 파라미터까지 갈아 끼웠습니다. 과제마다 시연을 10개씩만 준 큰 백본이, 50개씩 받은 작은 백본보다 높은 성공률을 냈습니다.

시연과 파라미터 사이에 일종의 '환율'이 생긴 셈입니다.

다만 같은 보고서가 그 읽기를 스스로 붙잡아 둡니다. 모든 모델에 같은 학습 스텝만 줬고, 작은 백본은 더 오래 학습시키면 계속 좋아진다고 저자들이 적어 두었습니다. 여러 단계를 이어 가야 하는 긴 과제에서는 역전이 일어나지 않았고, 실물 시험은 과제 하나에 25회가 전부입니다. 추론에는 GPU 네 장이 붙었습니다.

환율이 생겼다고 해서 통화 하나가 사라지는 것은 아니라고 봅니다. 오히려 적게 쓰기로 한 쪽의 한 편 한 편이 무거워집니다. 페블러스가 DataClinic으로 들여다보는 자리도 거기입니다. 남은 시연 열 편이 무엇을 가르치고 있는지는 성패 라벨에 적히지 않습니다.

장면과 물체를 알아보는 일은 커진 백본이 대신해 줄 수 있습니다. 그 로봇의 몸이 어떻게 움직이는지는 여전히, 누군가 앉아서 남긴 132번 안에만 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/scalevla-backbone-scaling/ko/

#페블러스 #ScaleVLA #PhysicalAI #로봇학습데이터 #데이터클리닉 #데이터품질

---

## Facebook (EN)

Of the 303 real-robot demonstrations behind this study, 132 cover only the few seconds in which a charger goes into a socket.

Someone sat in front of a robot and performed the insertion 132 times.

Everything that makes robot data expensive is in that scene. A person's hours, a robot's uptime, and a room where both have to be at once.

Which is why the question in the report posted to arXiv on November 16 stayed with me. "If the model gets bigger, does the repetition get smaller?"

The study, named ScaleVLA, held the action module and the training conditions fixed and swapped only the backbone that handles seeing and reading, from 2 billion parameters up to 552 billion. Given ten demonstrations per task, the large backbone scored higher than the small one did on fifty.

Something like an "exchange rate" has opened between demonstrations and parameters.

The same report holds that reading in check, though. Every model got the same number of training steps, and the authors write that the smaller backbone keeps improving when trained longer. On the long-horizon tasks no reversal occurred. The physical test is 25 trials on one task. Inference took four GPUs.

An exchange rate appearing does not retire one of the currencies. If anything, each episode on the side you decide to spend less of starts to weigh more. That is the place Pebblous looks at through DataClinic. What the ten remaining demonstrations are teaching is not something a success label records.

Recognising a scene and an object is work a larger backbone can take over. How this particular robot body moves still lives only inside the 132 times somebody sat down and recorded it.

▶ Read: https://blog.pebblous.ai/blog/scalevla-backbone-scaling/en/

#Pebblous #ScaleVLA #PhysicalAI #RobotTrainingData #DataClinic #DataQuality
