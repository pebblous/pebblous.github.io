# SNS 홍보 글: 핵융합로 설계 데이터셋 BoSS, AI 설계를 물리로 채점한다

> 소스: report/boss-stellarator-fast-ion-benchmark/
> 생성일: 2026-11-02
> URL: https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

핵융합로를 설계하는 사람들은 좋은 설계인지 알려 주는 진짜 지표를 설계가 다 끝난 뒤에야 돌렸다. 너무 비쌌기 때문이다.

지난주 arXiv에 올라온 BoSS(Benchmark of Stellarator Simulations)는 그 비싼 계산을 먼저 돌려 둔 데이터셋이다. 뉴욕 플랫아이언 연구소 연구진이 핵융합로 장치 18만여 대에 대해 고속 이온이 어디로 새는지를 미리 시뮬레이션해 쌓았다. A100 2만 5천 시간과 CPU 50만 시간 이상이 들어갔다. 모델이 아니라 데이터와 채점 규칙이다. 페블러스는 전문을 읽고 수치를 다시 맞춰 적었다.

지표는 손실 분율이다. 융합에서 나온 알파 입자가 플라즈마 안에 머물러야 플라즈마가 스스로 뜨거워지는데, 이걸 재려면 입자 수만 개의 궤도를 시간에 따라 적분해야 한다. 느리고, 값이 흔들리고, 기울기를 믿을 수 없다. 그래서 설계자들은 준대칭처럼 계산이 싼 대리 지표를 최적화해 왔다. 논문의 표현으로는 실제 손실과 "불완전하게만 상관하는" 지표다.

BoSS는 모델이 내놓은 설계를 다시 물리 시뮬레이션에 넣어 채점하는 절차를 못 박았다. 그러자 숫자가 갈렸다. 확산 모델이 내놓은 설계 가운데 손실이 적은 쪽은 43.6%인데, 그 값은 이미 좋은 장치의 속성으로 조건을 줬을 때다. 조건을 무작위로 뽑으면 6.7%로 내려간다. 시험 집합에서 아무 장치나 뽑았을 때가 10.8%이니, 그 조건에서는 모델이 보태는 쪽이 아니다.

두 수치가 나란히 논문에 실린 이유는 모델이 나빠서가 아니라 채점 규칙 안에 무작위 기준선이 들어 있었기 때문이다. 궤적 과제에도 같은 부품이 있다. 입자의 초기 상태를 그대로 내놓고 끝내는 예측기를 표에 같이 올렸더니, 1 ms 지평의 궤적 정확도에서 세 모델 가운데 둘이 그 예측기에 졌다. 같은 표의 통계 두 줄에서는 셋 다 이긴다. 축과 지평을 적지 않으면 성적표가 아니다.

비어 있는 자리도 있다. 궤적까지 저장된 장치는 2만여 대뿐이고 그나마 1 ms까지인데, 가둠 판정의 한계 시간은 0.1초다.

18만은 평형의 수이고 서로 다른 형상이 몇 개인지는 논문에 없다. 제출을 받아 물리로 다시 검증해 주는 서비스도 아직 없다.

BoSS는 정답을 물리 코드가 계산해 주는 드문 분야에 서 있다. 우리가 다루는 데이터는 대개 반대편이라 정답을 사람이 판정한다. 그래서 옮겨 올 것은 시뮬레이터가 아니라 성적표의 생김새다. 아무것도 하지 않는 예측기의 점수를 같은 표에 올린다. 같은 데이터를 두 번 라벨링했을 때의 불일치를 먼저 재고 모델 오차를 그 값에 댄다. 쉬운 조건과 실제 운영 조건의 점수를 둘 다 적는다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 시뮬레이터가 라벨을 내주는 PebbloSim 쪽에서는 BoSS가 공개한 규격이 그대로 참고 설계도가 된다.

▶ 전문: https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PebbloSim #BoSS #스텔러레이터 #핵융합 #FlatironInstitute #벤치마크

---

## LinkedIn (EN)

In fusion reactor design, the metric that actually tells you whether a design is good has been run only after the design was finished. It cost too much to run any earlier.

BoSS, posted to arXiv last week, is the dataset that ran it first. A team at the Flatiron Institute in New York simulated where the fast ions leak away for 180,000-odd reactor shapes, spending 25,000 A100 hours and upwards of half a million CPU hours to build it. It is not a model. It is data plus the rules for grading one. Pebblous read the full text and recomputed the figures.

The metric is loss fraction. Alpha particles from the fusion reaction have to stay inside the plasma for the plasma to heat itself, and measuring whether they do means integrating the orbits of tens of thousands of particles through time. It is slow, the value wobbles between runs, and the gradients cannot be trusted. So designers have optimised cheap stand-ins such as quasisymmetry instead, metrics that in the paper's own words "correlate only imperfectly with losses".

BoSS pins down a procedure that sends a model's designs back through the physics simulation to be scored, and the numbers split apart. Of the designs the diffusion model produced, 43.6% came back low-loss. That figure holds when the model is conditioned on the properties of devices already known to be good. Condition at random and it falls to 6.7%, below the 10.8% you get by pulling a device out of the test set at random. In that setting the model is not adding anything.

Both numbers are in the paper not because the models are bad but because the scoring rules carried a random baseline. The trajectory task has the same part fitted to it. A predictor that simply repeats each particle's starting state sits in the table, and at the 1 ms horizon two of the three models lose to it on trajectory accuracy. On two statistical rows of that same table all three beat it. A scorecard that names neither axis nor horizon is not a scorecard.

There are empty slots too. Only about 20,000 devices have trajectories saved, and only out to 1 ms, while the confinement criterion runs to 0.1 seconds.

The 180,000 counts equilibria, not distinct boundary shapes, and the paper never says how many of the latter there are. Nor is there yet a service that accepts submissions and re-verifies them against the physics.

BoSS sits in one of the rare fields where a physics code computes the ground truth. Most of the data we handle is on the other side, where a person makes the call. What transplants is not the simulator but the shape of the scorecard. Put the score of a do-nothing predictor in the same table. Measure how far two passes of labelling on the same data disagree, and read model error against that number. Report the score under the easy condition and under the real one. Pebblous runs DataClinic to measure the quality of AI training data, and on the PebbloSim side, where a simulator does produce the labels, the spec BoSS published works directly as a reference design.

▶ Read: https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PebbloSim #BoSS #Stellarator #FusionEnergy #FlatironInstitute #Benchmark

---

## Twitter/X (KO)

핵융합로 설계의 진짜 지표는 너무 비싸서 설계가 다 끝난 뒤에만 돌렸다. BoSS는 그 계산을 장치 18만여 대에 미리 돌려 데이터로 쌓았다.

그 자로 생성 모델을 다시 채점하니, 좋은 장치에서 조건을 뽑았을 때 43.6%이던 성적이 무작위 조건에서는 아무 장치나 뽑았을 때보다 낮아졌다.

https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/ko/

#페블러스 #데이터품질 #BoSS #핵융합

---

## Twitter/X (EN)

In fusion reactor design the real metric cost so much that it was only ever run after the design was done. BoSS ran it up front, on more than 180,000 shapes, and published the data.

Rescore a generative model with it and 43.6% under friendly conditioning falls below what you get by picking a device at random.

https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/en/

#Pebblous #DataQuality #BoSS #Stellarator

---

## Facebook (KO)

설계를 다 끝내고 나서야 꺼내 보는 검사가 있습니다.

그 검사가 너무 비싸서, 만드는 동안에는 대신 싸고 비슷해 보이는 다른 수치를 봅니다.

핵융합로를 설계하는 사람들이 오랫동안 그렇게 일해 왔다고 합니다.

융합에서 나온 알파 입자가 플라즈마 안에 머물러야 플라즈마가 스스로 뜨거워집니다. 밖으로 새어 나가면 데우지도 못하고 벽을 때립니다. 그래서 얼마나 새는지가 좋은 설계인지를 가르는데, 이걸 재려면 입자 수만 개의 궤도를 하나하나 적분해야 합니다.

느리고, 값이 흔들리고, 설계를 조금 바꿨을 때 지표가 매끄럽게 따라오지 않습니다.

그래서 설계자들은 계산이 싼 대리 지표를 최적화해 왔습니다. 논문은 그 지표가 실제 손실과 "불완전하게만 상관한다"고 적습니다.

'끝나고 나서야 쓰는 자'. 이 관행에 이름을 붙이면 그런 쪽입니다.

지난주 arXiv에 올라온 BoSS라는 데이터셋이 그 자를 앞으로 끌어왔습니다. 뉴욕 플랫아이언 연구소 연구진이 핵융합로 장치 18만여 대에 대해 비싼 계산을 먼저 돌려 두고, 모델이 내놓은 설계를 다시 물리 시뮬레이션에 넣어 채점하는 절차를 못 박았습니다.

그랬더니 모델이 잘한 것과 못한 것이 같이 나왔습니다.

"싼 자로 채점하기 시작하면, 모델은 무엇을 잘하게 됩니까?"

생성 모델이 내놓은 설계 가운데 손실이 적은 쪽은 43.6%였습니다. 다만 그 값은 이미 좋은 장치의 속성을 조건으로 줬을 때입니다. 조건을 아무 데서나 뽑으면 6.7%까지 내려갑니다. 시험 집합에서 장치를 무작위로 하나 꺼냈을 때가 10.8%입니다.

이 대비가 논문에 실린 이유는 채점 규칙 안에 그 무작위 기준선이 들어 있었기 때문입니다. 기준선이 표에 없으면 43.6%는 좋은 성적이고, 표에 있으면 6.7%는 나쁜 성적입니다. 같은 데이터에서 두 결론이 나오고, 어느 쪽이 보이는지는 데이터가 아니라 채점 규칙이 정합니다.

BoSS는 정답을 물리 코드가 계산해 주는 드문 자리에 서 있습니다. 저희가 손에 쥐는 데이터는 대개 반대편입니다. 정답을 계산해 줄 코드가 없고, 사람이 판정합니다.

그래서 옮겨 올 수 있는 것은 시뮬레이터가 아니라 성적표의 생김새라고 봅니다.

아무것도 하지 않는 예측기의 점수를 같은 표에 올려 두는 줄.

같은 데이터를 두 번 라벨링했을 때 얼마나 갈리는지를 먼저 재 두는 줄.

쉬운 조건에서의 점수와 실제 조건에서의 점수를 나란히 적는 줄.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 시뮬레이터가 라벨을 내주는 PebbloSim 쪽에서는 BoSS가 공개한 규격이 그대로 참고 설계도가 됩니다.

저희가 받아 보는 성적표에는 그 줄이 있습니까.

전문 → https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/ko/

#페블러스 #데이터품질 #데이터클리닉 #PebbloSim #BoSS #핵융합

---

## Facebook (EN)

There is a check you only pull out once the design is finished.

It costs too much to run while you are still building, so in the meantime you watch some other number that is cheaper and looks close enough.

People who design fusion reactors have worked that way for a long time.

The alpha particles that come out of the fusion reaction have to stay inside the plasma for the plasma to heat itself. The ones that leak out heat nothing and strike the wall instead. So how much leaks away is what separates a good design from a bad one, and measuring it means integrating the orbits of tens of thousands of particles, one at a time.

It is slow, the value wobbles between runs, and nudging the design does not move the metric smoothly.

So designers optimised a cheaper stand-in instead. The paper notes that it correlates "only imperfectly with losses".

A ruler you reach for only at the end. That is about the shortest name for the habit.

A dataset called BoSS, posted to arXiv last week, pulled that ruler forward. A team at the Flatiron Institute in New York ran the expensive calculation first, on more than 180,000 reactor shapes, and then pinned down a procedure that sends a model's designs back through the physics simulation to be scored.

What came out showed the good and the bad together.

"Once you start grading with the cheap ruler, what does the model get good at?"

Of the designs the generative model produced, 43.6% came back low-loss. That figure, though, is from conditioning on the properties of devices already known to be good. Draw the conditions from anywhere and it falls to 6.7%. Pull a single device out of the test set at random and you get 10.8%.

That contrast is in the paper because the scoring rules carried the random baseline inside them. With no baseline in the table, 43.6% is a good score. With one, 6.7% is a bad one. Two conclusions out of the same data, and which one you see is settled by the scoring rules rather than by the data.

BoSS sits in one of the rare places where a physics code computes the ground truth. The data we hold is mostly on the other side. There is no code to compute the answer, and a person makes the call.

So what transplants, I think, is not the simulator but the shape of the scorecard.

The row that puts a do-nothing predictor's score in the same table.

The row that measures, first, how far two passes of labelling on the same data disagree.

The row that reports the easy-condition score and the real-condition score side by side.

Pebblous runs DataClinic to measure the quality of AI training data. On the PebbloSim side, where a simulator does produce the labels, the spec BoSS published works directly as a reference design.

Do the scorecards we are handed have those rows?

Read the full piece → https://blog.pebblous.ai/report/boss-stellarator-fast-ion-benchmark/en/

#Pebblous #DataQuality #DataClinic #PebbloSim #BoSS #FusionEnergy
