# SNS 홍보 글: AI가 스스로 조건을 찾아 길러낸 위상 강자성체 박막

> 소스: blog/active-learning-mbe-random-forest-fe3sn/ko/index.html
> 생성일: 2026-08-20
> URL: https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

자율 합성 장비가 부딪힌 벽은 탐색 알고리즘이 아니라 "실험 공간은 매끄럽다"는 가정이었습니다.

홍콩과기대 물리학과 연구진은 원자층 단위로 박막을 쌓는 분자선 증착 장비에 능동학습 루프를 붙여, 위상 강자성체 Fe₃Sn이 자라는 조건을 찾았습니다. 베이지안 최적화의 골격은 그대로 두고, 실험 공간을 어떤 모양으로 가정할지 정하는 대리모델만 가우시안 프로세스에서 랜덤포레스트로 바꿨습니다.

교차검증 평균절대오차는 9.92 대 10.16으로 기존 모델이 근소하게 앞섰습니다. 다만 예측 지형을 펼쳐 보니 그 낮은 오차는 커널이 상 경계의 급경사를 뭉개면서 예측값을 데이터셋 전역 평균 쪽으로 밀어 놓은 결과였고, 논문은 이를 커널 붕괴라고 부릅니다.

대리모델이 뽑은 변수 중요도에서 두 번째로 무거운 것은 성장 레시피가 아니라, 성장을 시작하기 전 기판이 어떤 상태였는가였습니다.

요약 지표 하나로는 모델이 데이터의 구조를 그리고 있는지, 평균 뒤로 물러나 있는지 갈라내지 못합니다. 페블러스가 데이터 품질을 진단하며 반복해 만나는 장면도 집계 점수로 통과한 데이터셋이 정작 경계 구간에서 무너지는 일입니다.

▶ 전문: https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #능동학습 #베이지안최적화 #랜덤포레스트 #분자선증착 #Fe3Sn #자율실험실

---

## LinkedIn (EN)

The wall the self-driving lab hit was not the search algorithm. It was the assumption that the experimental space is smooth.

Physicists at HKUST wrapped an active learning loop around a molecular beam epitaxy chamber and let it find the conditions where the topological ferromagnet Fe₃Sn grows. The Bayesian optimization skeleton stayed intact, and the only part they replaced was the surrogate model, the component that decides what shape the parameter space is assumed to have.

Cross-validated mean absolute error came in at 9.92 against 10.16, so the incumbent Gaussian process won on the metric. Unfolding the predicted landscape showed why that win was hollow: the kernel had smoothed the steep phase boundary away and pressed its predictions toward the global mean of the dataset, a behavior the paper calls kernel collapse.

The surrogate also ranked the inputs, and second place went not to the growth recipe but to the state of the substrate before growth began.

A single summary metric cannot separate a model that is drawing the structure of the data from one that has retreated behind its average. That gap is familiar from data quality work at Pebblous, where datasets clear an aggregate score and then fail on the cases nearest the boundary.

▶ Read: https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ActiveLearning #BayesianOptimization #RandomForest #MBE #Fe3Sn #SelfDrivingLab

---

## Twitter/X (KO)

교차검증 오차 9.92 대 10.16. 지표로는 가우시안 프로세스가 앞섰지만, 그 낮은 오차는 커널이 상 경계의 절벽을 뭉개고 예측을 평균 쪽으로 밀어 놓은 결과였습니다.

홍콩과기대는 대리모델을 랜덤포레스트로 바꾼 뒤에야 Fe₃Sn의 좁은 성장 창을 찾았습니다. 두 모델을 갈라낸 것은 지표가 아니라 예측의 모양이었습니다.

https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/ko/

#페블러스 #데이터품질 #능동학습 #Fe3Sn

---

## Twitter/X (EN)

Cross-validation error: 9.92 vs 10.16. The Gaussian process won on the metric, but that low error came from a kernel smoothing the phase-boundary cliff and pushing its predictions toward the mean.

HKUST found the narrow growth window for Fe₃Sn only after swapping the surrogate for a random forest. What separated the two models was the shape of the prediction, not the score.

https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/en/

#Pebblous #DataQuality #ActiveLearning #Fe3Sn

---

## Facebook (KO)

평균 오차 하나만 보고 모델을 통과시킨 적이 있습니다.

숫자가 낮았으니 더 볼 이유가 없다고 생각했습니다.

홍콩과기대 물리학과 연구진이 이번 주 공개한 논문을 읽다가 그 판단이 다시 생각났습니다.

원자층 단위로 박막을 쌓는 장비에 능동학습 루프를 붙여, 위상 강자성체 Fe₃Sn이 자라는 조건을 기계가 스스로 고르게 한 실험입니다. 연구진이 바꾼 것은 탐색 알고리즘이 아니라 대리모델 하나였습니다. 실험 공간이 어떤 모양일지 미리 정해 두는 자리 말입니다.

기존에 쓰던 가우시안 프로세스는 교차검증 오차가 오히려 더 낮았습니다. 그런데 예측 지형을 펼쳐 보니, 그 낮은 오차는 상 경계의 급경사를 매끈하게 문지르고 예측값을 데이터 전체의 평균 근처로 밀어 놓은 결과였습니다. 논문은 이 현상에 '커널 붕괴'라는 이름을 붙였습니다.

어디서도 크게 틀리지 않는 자리로 물러나 앉으면, 지표는 좋아지고 지형은 사라집니다.

"이 모델은 데이터의 구조를 그리고 있는가, 아니면 평균 뒤에 서 있는가?"

같은 논문에서 한 번 더 걸린 대목은 변수 중요도의 2위였습니다. 성장 레시피가 아니라, 성장을 시작하기 전 기판이 어떤 상태였는가가 그 자리에 있었습니다. 출발 표면이 평탄하지 않으면 이후 어떤 조정으로도 보상되지 않았다고 저자들은 적었습니다.

페블러스가 데이터 품질을 진단하며 반복해 확인하는 것도 이 두 가지입니다. 집계 점수로 통과한 데이터셋이 경계 구간의 사례에서 무너지는 일, 그리고 결과를 가장 크게 흔드는 것이 하류의 정교한 조정이 아니라 상류에서 무엇을 넣었는가라는 사실.

우리가 파이프라인에 깔아 둔 '매끄러움 가정'도 대개 조용합니다. 구간을 보간하고, 임계값 근처를 선형으로 근사하고, 검증 점수 하나로 모델의 상태를 요약합니다.

그 가정이 어디서 현실의 절벽과 어긋나는지는 평균 오차가 알려 주지 않습니다.

https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/ko/

#페블러스 #데이터품질 #능동학습 #베이지안최적화 #Fe3Sn #DataClinic

---

## Facebook (EN)

I have signed off on a model because its average error was low.

The number looked fine, so I stopped looking.

A paper out of HKUST this week brought that decision back to me.

Physicists there wrapped an active learning loop around a molecular beam epitaxy chamber, the machine that stacks a film one atomic layer at a time, and let it choose its own next experiment for growing the topological ferromagnet Fe₃Sn. What they changed was not the search algorithm. It was the surrogate model, the piece that decides in advance what shape the experimental space is assumed to have.

The Gaussian process they started with actually scored the lower cross-validation error. But when they unfolded the predicted landscape, that low error turned out to come from a kernel that had smoothed the steep phase boundary flat and pushed its predictions toward the average of the whole dataset. The paper gives the behavior a name: kernel collapse.

Retreat to the place where you are never badly wrong, and the metric improves while the terrain disappears.

"Is this model drawing the structure of the data, or standing behind its own average?"

The second thing that stayed with me was the ranking of inputs. Second place did not go to the growth recipe. It went to the condition of the substrate before growth began. Where the starting surface was not flat, the authors write, nothing downstream recovered it.

Those are the two things we keep confirming in data quality work at Pebblous. Datasets that clear an aggregate score and then fail on the cases nearest the boundary. And results shaped less by careful downstream tuning than by what was put in upstream.

The smoothness we assume in our own pipelines is usually quiet. We interpolate between points, approximate near a threshold with a line, and summarize a model's condition with one validation score.

Where that assumption meets an actual cliff is not something an average error will tell us.

https://blog.pebblous.ai/blog/active-learning-mbe-random-forest-fe3sn/en/

#Pebblous #DataQuality #ActiveLearning #BayesianOptimization #Fe3Sn #DataClinic
