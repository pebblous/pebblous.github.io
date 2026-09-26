# SNS 홍보 글: 말은 못 하고 고르기만 하는 AI, 정말 싸게 일할까?

> 소스: report/typesafe-jev-classification-cost-collapse/
> 생성일: 2026-09-27
> URL(KO): https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/ko/
> URL(EN): https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

문장을 한 줄도 쓰지 못하는 모델이 판정 한 건을 $0.0004에 처리한다.

타입세이프가 9월 15일 공개한 제브는 객관식 답과 등급과 예·아니오만 돌려주고, 답마다 확률을 붙인다. 회사 홈페이지에는 444.6배 싸고 193.6배 빠르다는 두 숫자가 나란히 걸려 있다. 그런데 그 두 배수가 무엇과 견준 값인지는 회사 문서 어디에도 문장으로 적혀 있지 않다. 공개된 평가표로 역산하면 비용 쪽은 표에서 가장 비싼 모델에, 지연 쪽은 가장 느린 모델이 아니라 두 번째로 느린 모델에 들어맞는다.

같은 표를 비용순으로 다시 세우면 배수의 얼굴이 달라진다. 제브와 정확도가 가장 가까운 GPT-5.6 루나는 제브보다 여덟 배 비싸다. 이미 값싼 소형 모델로 판정을 돌리고 있는 조직이 얻는 것은 수백 배가 아니라 그 한 자릿수 배수다.

정확도 67.8%도 사람이 매긴 정답과의 일치율이 아니다. 더 큰 모델 두 대의 평균 판정과 얼마나 같은지를 잰 값이고, 회사는 그 방식이 특정 벤더 쪽으로 답을 치우치게 한다고 자기 글에 적어 두었다. 과제 단위로 내려가면 평균이 가린 것이 보인다. 인보이스 처리에서는 17.3%p 뒤지고, 고객 응대에서는 오퍼스 5보다 높다.

확률이 함께 나온다는 약속에도 조건이 붙는다. 벤더가 설계하지 않은 독립 평가가 그 선을 쟀다. 공개 벤치마크 구간에서는 보정 오차가 문제가 없었고, 모델이 본 적 없는 합성 티켓 구간에서는 노이즈 바닥의 4.4배로 벌어졌다. 또 다른 평가에서는 진짜 걸러 내야 할 범위 밖 입력 서른 건이 임계값 어느 쪽에도 걸리지 않고 통과했다.

판정 단가가 100분의 1이 되면 판정은 줄지 않고 늘어난다. 한국에서는 대출 심사와 채용이 이미 고영향 인공지능으로 분류돼 설명 의무와 편향성 시험이 붙어 있고, 유럽의 고위험 의무는 2027년 12월로 미뤄져 있다. 값이 싸졌다는 근거보다 먼저 준비해야 하는 것은 그 판정을 무엇을 근거로 내렸는지 남긴 기록이다.

▶ 전문: https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #분류모델 #추론비용 #모델보정 #AI거버넌스 #TypeSafe #AI기본법

---

## LinkedIn (EN)

A model that cannot write a single sentence resolves one judgment for $0.0004.

Jev, released by TypeSafe on 15 September, returns a multiple-choice answer, a grade on a rubric, or a yes/no, each with a probability attached. The company's home page hangs two numbers side by side: 444.6x cheaper and 193.6x faster. What either figure is measured against appears in no company document. Reconstructed from the vendor's own evaluation table, the cost multiple fits the most expensive model in that table, and the latency multiple fits not the slowest model but the second slowest.

Sort the same table by price and the multiples look different. GPT-5.6 Luna, the model closest to Jev on accuracy, costs about eight times as much per call. For a team already routing its judgments through a cheap small model, the gain is that single-digit multiple rather than the headline one.

The accuracy headline has the same shape. Nobody wrote the answer key behind its 67.8%: the key is the averaged verdict of two larger models, and the company's own post concedes that this tilts scoring toward particular vendors. Per task, the average hides the spread. Jev trails by 17.3 points on invoice processing and sits above Opus 5 on customer support.

The promise of shipped probabilities carries conditions too. In independent evaluations the vendor did not design, calibration error stayed low on public benchmarks and widened to 4.4 times the noise floor on synthetic tickets the model had never seen. In another, none of the thirty inputs that fell outside the model's categories were caught at any threshold setting.

When a judgment costs a hundredth of what it did, the number of judgments climbs rather than falls. Korea already classifies loan screening and hiring as high-impact AI, with duties to explain and to test for bias; the EU's high-risk obligations now start in December 2027. What needs preparing first is not evidence that the price was low but the record of what each judgment rested on.

▶ Read: https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ClassificationModels #InferenceCost #ModelCalibration #AIGovernance #TypeSafe #Jev

---

## Twitter/X (KO)

문장을 쓰지 못하는 모델이 나왔다. 객관식과 등급과 예·아니오만, 확률을 붙여 돌려준다. 건당 $0.0004.

정확도 67.8%는 사람이 매긴 정답과 맞춘 값이 아니다. 더 큰 모델들의 평균 판정과 얼마나 같은지를 잰 값이다. 배수도 정확도도 분모를 먼저 봐야 한다.

▶ https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/ko/

#페블러스 #데이터품질 #TypeSafe #분류모델

---

## Twitter/X (EN)

A model that writes no sentences. It returns a choice, a grade, or a yes/no, each with a probability, at $0.0004 per call.

Its 67.8% is not agreement with a human answer key. It is agreement with the averaged verdict of larger models. Check the denominator before the multiple.

▶ https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/en/

#Pebblous #DataQuality #TypeSafe #ClassificationModels

---

## Facebook (KO)

"이 티켓은 어느 팀으로 보내야 합니까?"

팀 이름 하나만 고르면 되는 일에, 우리는 문장을 쓸 줄 아는 모델을 부릅니다.

모델은 문단 하나를 써서 돌려주고, 우리는 거기서 이름 하나만 꺼내 씁니다. 나머지 문장은 버립니다.

9월에 공개된 제브라는 모델은 그 버리는 부분을 처음부터 만들지 않습니다. 문장을 쓰지 못하고, 코드를 짜지 못하며, 대화를 이어 가지 못합니다. 객관식 답과 등급과 예·아니오, 세 가지만 확률을 붙여 돌려줍니다. 건당 값은 소수점 아래 네 자리에서 시작합니다.

저는 이 소식을 값이 싸졌다는 이야기로 읽지 않았습니다.

우리가 큰 모델에 맡겨 온 일 가운데 상당수가 사실은 '고르기'였다는 이야기로 읽었습니다. 말솜씨를 걷어내고 고르는 일만 남겼더니 값이 수백 분의 일이 됐다면, 그동안 지불해 온 것의 상당 부분은 판단이 아니라 말이었다는 뜻이 됩니다.

그런데 이 소식에 붙어 온 숫자를 하나씩 확인해 보니 다른 것이 보였습니다.

수백 배라는 배수는 무엇과 견주느냐에 따라 여덟 배가 되기도 하고 440배가 되기도 합니다. 정확도 67.8%의 정답지를 만든 것도 사람이 아니라 더 큰 모델 두 대였습니다. 회사는 그 사실을 숨기지 않고 자기 글에 적어 두었습니다.

"우리가 큰 모델에 시켜 온 일 가운데, 사실은 고르기였던 것은 얼마입니까?"

확률이 함께 나온다는 점이 이 모델이 내세우는 핵심인데, 그 확률은 학습 분포 안에서만 정직했습니다. 한 평가에 섞여 있던 범위 밖 입력 서른 건 가운데 걸러진 것은 없었습니다. 어느 범주에도 속하지 않는 케이크 조리법 한 건에 모델은 0.94의 확신을 붙였습니다.

높은 임계값은 아는 것을 잘 거르지만, 모르는 것 앞에서는 눈이 없습니다.

페블러스가 데이터클리닉에서 해 온 일도 결국 판정입니다. 이건 무엇인가, 몇 점짜리인가, 통과인가. 그래서 이 사건은 저희에게 경쟁사 소식이 아니라 저희가 서 있는 공정의 단가가 바뀐 사건입니다.

판정이 싸지면 판정은 줄지 않고 늘어납니다. 표본으로만 보던 것을 전수로 볼 수 있게 되고, 그만큼 판정 기록도 함께 쌓입니다. 그 기록은 두 얼굴을 갖습니다. 조직이 처음 갖게 되는 판정 이력이면서, 아무도 품질을 확인하지 않은 라벨 더미입니다.

그러니 값이 100분의 1이 된 사건이 남긴 질문은 얼마나 아꼈는가가 아닌 것 같습니다. 백 배로 늘어난 그 기록을 누가, 무엇으로, 언제 확인하는가입니다.

▸ https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/ko/

#페블러스 #데이터클리닉 #데이터품질 #TypeSafe #분류모델 #AIReadyData

---

## Facebook (EN)

"Which team should this ticket go to?"

To pick one name, we call a model that knows how to write.

It writes a paragraph back, we lift a single name out of it, and the rest of the sentences go in the bin.

A model released in September never builds the part we throw away. Jev cannot write prose, cannot write code, cannot hold a conversation. It returns a choice, a grade, or a yes/no, each with a probability. The price per call begins in the fourth decimal place.

I did not read this as news about a price coming down.

I read it as news about how much of what we hand to large models was picking all along. If stripping out the eloquence and keeping only the picking drops the price by two orders of magnitude, then a good share of what we have been paying for was not judgment but prose.

Then I went through the numbers that arrived with the story, one at a time.

The multiple is eight against one model in the vendor's own table and around 440 against another. The 67.8% accuracy was measured against an answer key written by two larger models rather than by people. The company does not hide this; it is there in its own post.

"Of everything we hand to a large model, how much of it is picking?"

Shipped probabilities are the thing the company leads with, and those probabilities turned out to be honest only inside the training distribution. Of the thirty genuinely out-of-scope inputs sitting in one evaluation, not one was filtered out. A cake recipe, belonging to none of the categories on offer, drew a confidence of 0.94.

A high threshold filters well for what a model knows. For what it does not know, it has no eye at all.

What Pebblous does in DataClinic is judgment too. What is this, what is it worth, does it pass. So this is not competitor news for us. It is the unit price of our own process changing.

Cheaper judgments do not mean fewer judgments. Sampling gives way to full passes, and the records pile up at the same rate. Those records have two faces: the first judgment history an organisation has ever owned, and a heap of labels nobody has checked.

Which leaves a question that is not about savings. Who checks that hundredfold pile, with what, and when?

▸ https://blog.pebblous.ai/report/typesafe-jev-classification-cost-collapse/en/

#Pebblous #DataClinic #DataQuality #TypeSafe #ClassificationModels #AIReadyData
