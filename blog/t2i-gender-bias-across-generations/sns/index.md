# SNS 홍보 글: 그림을 만드는 AI는 새 모델일수록 공정할까?

> 소스: blog/t2i-gender-bias-across-generations/ko/index.html
> 생성일: 2026-09-18
> URL: https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

새 버전이 나오면 편향도 같이 줄었으리라 여기기 쉽다. 네 세대를 같은 조건에 세워 나란히 재 본 결과는 그 가정과 어긋났다. 9월 16일 arXiv에 올라온 노스이스턴대 연구다. 직업 20종에 성별을 지정하지 않은 문장 다섯 개를 조합해 스테이블 디퓨전 네 판본으로 이미지 8,000장을 만들었다. 그 얼굴을 자동 분류해 미국 노동통계국의 실제 종사자 성비와 맞대 봤다.

전체의 76.4%가 남성으로 분류됐다. 간호사나 유치원 교사처럼 실제로 여성이 다수인 직업만 따로 모아도 남성이 57.6%였다.

궤적은 더 눈에 띈다. SDXL이 81.0%로 가장 치우쳐 있는데, 그 앞 판본(77%대)보다도 뒤에 나온 SD 3 Medium(70.1%)보다도 높다. 하필 그 SDXL이 오픈소스 계열에서 가장 널리 쓰이는 판본이고, 뒤 판본의 개선은 판본을 직접 갈아 끼운 사용자에게만 도착한다. 저자들은 이 상태를 '배치 갭'이라 불렀다.

격차가 어느 직업에서 벌어지는지는 예상과 어긋난다. 노동통계국 기준 과학자는 48%가 여성인데, 모델이 그린 과학자 중 여성은 1~18%였다. 반대로 실제 종사자의 96%가 남성인 정비공에서는 격차가 몇 포인트에 그친다. 모델이 공정해서가 아니라, 현실이 이미 끝에 닿아 있어 더 밀어붙일 자리가 남지 않았기 때문이다.

한계는 저자들이 먼저 적어 두었다. 성별은 자동 분류기가 읽은 겉보기 표현이고, 검증은 50장에 평가자 한 명이 전부였다. 한 직업을 한 판본으로 그린 칸은 100장뿐이라 신뢰구간이 ±9.8%p로 넓다. 학습 데이터를 직접 확인한 연구도 아니라 원인은 열려 있다.

그래도 남는 것은 판정 절차다. 출력 안에서 남녀 비율만 세는 지표는 '원래 반반인 직업'이라는 사실을 모르기 때문에 과학자에서 아무 경보도 울리지 않는다. 치우쳤다는 판정은 무엇과 견주었는지가 정한다.

▶ 전문: https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #생성형AI #AI편향 #AI윤리 #StableDiffusion #SDXL

---

## LinkedIn (EN)

A newer image model was supposed to carry less bias. Four generations tested side by side under identical settings say otherwise. The study, from Northeastern University and posted to arXiv on September 16, paired 20 occupations with five gender-neutral phrasings and generated 8,000 images across four Stable Diffusion versions. The authors then classified the faces and held the result against the sex ratios the U.S. Bureau of Labor Statistics records for people who actually do those jobs.

Across all images, 76.4% were classified male. Restrict the count to occupations where women are the real-world majority, such as nursing and preschool teaching, and men still take 57.6%.

The trajectory is the more striking part. SDXL is the most skewed of the four at 81.0%, above the versions that preceded it (around 77%) and above SD 3 Medium, which came later at 70.1%. SDXL also happens to be among the most widely deployed versions in the open-source line, and the later correction only reaches users who swap versions themselves. The authors call this the deployment gap.

Where the gap opens is not where you would guess. Scientists are 48% women in the BLS data; women made up 1 to 18% of the scientists these models drew. For mechanics, a job that is 96% male in the labor data, the gap narrows to a few points. That is not fairness. Reality already sits at the edge, leaving the model nowhere further to push.

The authors post their own limits first. Gender here is what an automated classifier reads from appearance, validated on 50 images by a single rater. Each occupation-by-version cell holds only 100 images, so the confidence interval runs to plus or minus 9.8 points. Nobody inspected the training data either, so the cause remains unsettled.

The procedural point survives those caveats. A metric that only counts male and female inside the output has no way of knowing which jobs are near-balanced to begin with, which is why scientists trip no alarm. A verdict of "biased" is set by what you measured against.

▶ Read: https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #GenerativeAI #AIBias #AIEthics #StableDiffusion #SDXL

---

## Twitter/X (KO)

새 모델일수록 공정해지지는 않았다. 스테이블 디퓨전 네 판본이 그린 직업 이미지 가운데 76.4%가 남성으로 분류됐다. 가장 널리 쓰이는 판본이 그 앞뒤 판본보다 더 치우쳐 있었다.

실제 종사자의 절반 가까이가 여성인 과학자도 모델은 거의 남성으로 그렸다.

▶ https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/ko/

#페블러스 #데이터품질 #StableDiffusion #AI편향

---

## Twitter/X (EN)

Newer did not mean fairer. Across four Stable Diffusion versions, 76.4% of the people generated for occupation prompts were classified male. The most widely used version was more skewed than the ones before and after it.

Scientists are nearly half women in the labor data. The models drew them almost entirely male.

▶ https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/en/

#Pebblous #DataQuality #StableDiffusion #AIBias

---

## Facebook (KO)

"과학자를 그려 주세요."

이렇게만 적어 넣고 돌아온 그림 100장 가운데 여성은 한 명에서 열여덟 명 사이였습니다.

미국 노동통계국 집계로는 과학자의 48%가 여성입니다.

9월 16일 arXiv에 올라온 연구 한 편이 스테이블 디퓨전 네 판본을 같은 조건에 세워 이 일을 8,000장 규모로 재 봤습니다. 전체의 76.4%가 남성이었고, 새 판본으로 갈아 탈수록 나아지는 모양도 아니었습니다. 가장 널리 쓰이는 판본이 그 앞뒤 판본보다 더 치우쳐 있었습니다.

제가 오래 붙들게 된 대목은 조금 다른 곳입니다. 예상을 벗어난 격차는 이미 한쪽으로 쏠린 일이 아니라, 현실에서 거의 반반인 일에서 나왔습니다. 정비공은 실제 종사자의 96%가 남성이라, 모델이 거의 다 남성으로 그려도 현실에서 멀어지지 않습니다. 청소원은 현실이 반반에 가까운데 모델은 남성 쪽으로 밀어붙입니다.

쏠림만 재는 눈으로는 정비공이 늘 위에 옵니다. 현실과 벌어진 거리로 다시 줄을 세우면 순서가 통째로 뒤집힙니다.

이 차이를 만드는 것을 저는 '바깥 기준선'이라고 불러 보고 싶습니다. 데이터셋 안에서 계산한 균형이 아니라, 밖에서 가져와 옆에 놓는 실측 말입니다.

데이터 품질을 판정하는 일도 같은 자리에서 오래 걸립니다. 클래스가 고르면 균형 잡혔다고 하고, 한쪽이 많으면 불균형이라고 합니다. 그 판정의 기준은 대개 데이터셋 안에서 나옵니다. 결함 검사 데이터라면 실제 공정의 불량률이, 수요 예측 데이터라면 실제 거래 분포가 옆에 있어야 우리 데이터가 어디서 얼마나 벌어졌는지 보입니다. 페블러스가 DataClinic으로 학습 데이터를 정량 진단할 때도 이 물음이 먼저 옵니다.

"우리 데이터가 치우쳤다고 말할 때, 그 판정은 무엇과 견준 것입니까?"

새 버전이 알아서 고쳐 줄 것이라는 가정은 이 연구가 지켜본 세 번의 판본 교체 중 두 번에서 빗나갔습니다. 기준선을 어디서 가져와 문서에 적어 둘지는, 그래서 모델보다 오래 남는 일인 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/ko/

#페블러스 #데이터품질 #데이터클리닉 #StableDiffusion #AI편향 #AI윤리

---

## Facebook (EN)

"Draw me a scientist."

Out of a hundred images returned to that one line, between one and eighteen showed a woman.

In the U.S. labor statistics, 48% of scientists are women.

A study posted to arXiv on September 16 put four Stable Diffusion versions under identical settings and ran that experiment out to 8,000 images. Across the whole set, 76.4% of the people generated were classified male, and moving to a newer version did not reliably improve it. The version in widest use was more skewed than the ones on either side of it.

The part I keep returning to sits elsewhere. The gaps that surprised me did not open on jobs already lopsided in real life. They opened on jobs that are close to even. Mechanics are 96% male in the labor data, so a model can draw them almost entirely male and still land near reality. Cleaners are close to even in real life, and the models push them toward men anyway.

Measure skew alone and mechanics always come out on top. Rank the same jobs by distance from reality and the order flips completely.

The flip turns on something I have started calling the outside baseline. Not balance computed inside the dataset, but a measured figure fetched from elsewhere and set down beside it.

Judging data quality stalls in the same place. Even classes, we call balanced. A heavy class, we call imbalanced. The yardstick for that verdict usually comes from inside the dataset itself. For defect inspection data, the real defect rate on the line has to sit beside it; for demand forecasting, the actual transaction distribution does. Only then can you see where your data drifted, and by how much. When Pebblous runs a quantitative diagnosis of training data through DataClinic, this is the question that comes first.

"When you call your data biased, what did you measure it against?"

The assumption that a new version will quietly fix this missed on two of the three version changes this study watched. Deciding where the baseline comes from, and writing it down, may outlast the model it was written for.

▶ Full piece: https://blog.pebblous.ai/blog/t2i-gender-bias-across-generations/en/

#Pebblous #DataQuality #DataClinic #StableDiffusion #AIBias #AIEthics
