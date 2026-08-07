# SNS 홍보 글: 실험 없이 관찰 데이터만으로 개입 효과를 추정하는 IC²

> 소스: report/ic2-virtual-intervention-causality/ko/index.html
> 생성일: 2026-08-07
> URL: https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

유전자를 실제로 건드리지도, A/B 테스트를 돌리지도 않고, 이미 쌓여 있는 시계열만 들여다보고서 "한쪽을 건드리면 다른 쪽이 변할까"를 묻는 연구가 나왔다.

2026년 J. R. Soc. Interface에 실린 IC²다. 방법의 핵심은 인과 점수 두 개를 나란히 놓는 것이다. CIC는 평소 관찰된 움직임 속에서 두 변수가 얼마나 얽혀 있는지를 재고, iCIC는 그중 한쪽을 아주 살짝 흔들었을 때 그 흔들림이 실제로 다른 쪽까지 전해지는지를 잰다.

진짜 직접 인과라면 두 점수가 함께 높다. 반대로 눈에 보이지 않는 공통 원인 때문에 그저 같이 움직이는 관계라면, CIC는 높아도 iCIC는 힘을 잃는다. 이 어긋남 하나가 숨은 교란변수의 지문이 된다.

검증도 관찰과 개입을 맞대어 본다. 플랑크톤 먹이망에서 알려진 인과 링크 7개를 가짜 양성 없이 모두 찾아냈고, 아무것도 건드리지 않은 세포의 관찰 데이터만으로 예측한 유전자 perturbation 효과가 실제 CRISPR 결과와 AUC 0.843으로 맞았다.

다만 한 가지는 분명히 해 두어야 한다. 여기서 말하는 개입은 원하는 값을 강제로 집어넣는 임의 개입이 아니라, 관찰된 궤적 안에서 가능한 아주 작은 국소 변화다.

상관과 인과 사이에서 늘 멈춰 온 데이터 진단에, "같이 움직이는가"와 "건드리면 전달되는가"를 나눠 보는 두 번째 눈이 생긴 셈이다.

▶ 전문: https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #인과추론 #시계열데이터 #IC2 #Perturbseq

---

## LinkedIn (EN)

No knockout, no A/B test. A new study asks whether you can tell if nudging one variable will move another, using nothing but the time series already sitting in your logs.

It is IC², published in J. R. Soc. Interface in 2026, and its move is to read two causal scores side by side. CIC measures how much two variables are entangled in their observed dynamics. iCIC measures whether a tiny wiggle in one of them actually carries over to the other.

For genuine direct causality, both scores run high. When two variables merely move together because of an unseen common cause, CIC stays high but iCIC falls away. That gap is the fingerprint of a hidden confounder.

The validation puts observation against real intervention. On a plankton food web, IC² recovered all seven known causal links with zero false positives, and a gene perturbation effect predicted from unperturbed control cells alone matched the actual CRISPR readout at AUC 0.843.

One caveat matters. The intervention here is a small local shift within the observed trajectory, not the arbitrary "force any value" intervention of do-calculus.

For data diagnostics that always stall at the line between correlation and causation, this adds a second eye: does it move together, and does a nudge actually transfer.

▶ Read: https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #CausalInference #TimeSeries #IC2 #PerturbSeq

---

## Twitter/X (KO)

관찰된 시계열만으로 "한쪽을 건드리면 다른 쪽이 변할까"를 추정하는 IC² 연구.

CIC는 평소에 같이 움직이는지를, iCIC는 살짝 건드렸을 때 전달되는지를 따로 잰다. 두 점수가 어긋나는 자리에서 숨은 교란변수가 드러난다.

▶ https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/ko/

#페블러스 #인과추론 #IC2 #데이터품질

---

## Twitter/X (EN)

IC²: estimating "will nudging one thing move another?" from observed time series alone.

CIC scores whether they move together; iCIC scores whether a small nudge actually transfers. Where the two diverge, a hidden confounder shows up.

▶ https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/en/

#Pebblous #CausalInference #IC2 #DataQuality

---

## Facebook (KO)

여름이 되면 아이스크림이 더 팔리고, 물놀이 사고도 함께 늘어납니다.

두 곡선은 놀랄 만큼 나란히 움직입니다. 그렇다고 아이스크림을 끊으면 사고가 줄어들까요. 그렇지 않습니다. 둘을 함께 밀어 올리는 것은 기온이라는, 곡선 바깥의 제3의 이유입니다.

데이터만 보면 둘은 분명히 같이 움직입니다. 그런데 한쪽을 실제로 건드려도 다른 쪽은 꿈쩍하지 않습니다. 상관은 있는데 인과는 없는, 현장에서 가장 흔하고 가장 위험한 자리입니다.

올해 한 연구가 이 오래된 물음을 다시 붙들었습니다. 실제로 실험을 하지 않고, 이미 관찰된 시계열만으로 "한쪽을 건드리면 다른 쪽이 변할까"를 가늠해 보겠다는 것입니다.

방법은 두 개의 눈을 갖는 데서 시작합니다. 하나는 평소에 두 변수가 얼마나 얽혀 있는지를 봅니다. 다른 하나는, 관찰된 데이터 안에서 나머지 조건은 거의 같은데 한쪽만 아주 조금 다른 두 순간을 찾아, 그 미세한 차이를 자연이 만들어 둔 작은 실험처럼 읽습니다. 그리고 그 작은 흔들림이 다른 쪽으로 전해지는지를 봅니다.

"같이 움직이는가"와 "건드리면 전달되는가." 저는 이 둘을 나눠 보자는 발상이 오래 마음에 남았습니다. 상관을 인과로 오해하기 쉬운 데이터 앞에서, 우리가 정말 물어야 할 질문이 무엇이었는지를 조용히 되짚게 하기 때문입니다.

https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/ko/

#페블러스 #데이터클리닉 #인과추론 #IC2

---

## Facebook (EN)

Every summer, ice cream sales climb, and so do swimming accidents.

The two curves rise together, almost in step. So would cutting ice cream cut the accidents? It would not. What lifts both is the heat, a third reason sitting outside either curve.

On paper, the two clearly move together. Yet touch one and the other does not budge. Correlation without causation is the most common, and most dangerous, place a data team can stand.

This year a study returned to that old problem with an unusual angle: no real experiment, just the time series already observed, and a question about whether nudging one variable would move another.

It begins by keeping two eyes open. One watches how tightly the variables are entangled in ordinary times. The other searches the observed data for two moments where almost everything is the same but one variable differs by a hair, then reads that small gap as an experiment nature had already set up, and asks whether the nudge carries over.

Does it move together, and does a nudge actually transfer. I keep returning to the quiet pull of separating those two questions. In front of data that so easily mistakes correlation for cause, it makes you ask again what the real question was all along.

https://blog.pebblous.ai/report/ic2-virtual-intervention-causality/en/

#Pebblous #DataClinic #CausalInference #IC2
