# SNS 홍보 글: 노이즈로 훈련한 신경망이 자신의 과신을 교정했다

> 소스: blog/noise-pretrain-calibration/ko/index.html
> 생성일: 2026-07-08
> URL: https://blog.pebblous.ai/blog/noise-pretrain-calibration/ko/
> voice: sns-cover (LinkedIn/Twitter) + reflective (Facebook)

---

## LinkedIn (KO)

데이터를 한 장도 보지 않은 신경망이 이미 특정 답에 확신을 품고 있었습니다.

KAIST 연구진이 Nature Machine Intelligence에 발표한 결과입니다. AI가 틀리면서도 당당한 과신의 뿌리를, 이들은 데이터가 아니라 학습이 시작되기도 전 신경망을 세팅하는 랜덤 초기화에서 찾았습니다. 갓 초기화된 신경망의 출력은 이미 특정 클래스로 확신이 쏠려 있었고(일원분산분석 P<10⁻³), 그 편향은 학습 내내 살아남아 최종 모델의 과신이 됐습니다.

해법은 뜻밖에 간단합니다. 진짜 데이터를 보여 주기 전에, 아무 의미 없는 무작위 노이즈로 잠깐 준비운동을 시키는 것입니다. 모델은 아무것도 배우지 못하고 정확도는 우연 수준에 머물지만, 초기화에 새겨진 확신의 쏠림이 흩어집니다. 그 뒤 실제 학습에서 캘리브레이션 오차가 유의하게 줄었고, 낯선 입력 앞에서 확신을 낮추는 능력까지 얻었습니다. 정확도를 잃지도 않았습니다.

다만 실험은 작은 이미지 분류 모델에 한정되어 있어, 거대 언어 모델로의 일반화는 아직 검증되지 않은 과제로 남아 있습니다.

신뢰할 수 있는 AI는 더 깨끗한 데이터만의 문제가 아니라, 무엇을 어떤 순서로 학습시키느냐의 문제이기도 합니다. 데이터 품질과 학습 레시피는 한 몸입니다.

▶ 전문: https://blog.pebblous.ai/blog/noise-pretrain-calibration/ko/

#페블러스 #데이터클리닉 #데이터품질 #신경망캘리브레이션 #AI과신 #딥러닝 #KAIST #NatureMachineIntelligence #AI거버넌스

---

## LinkedIn (EN)

A neural network that had seen no data at all already held strong confidence in particular answers.

That is the starting point of a new result from a KAIST team, published in Nature Machine Intelligence. The overconfidence behind AI that is wrong yet sure of itself, they argue, is rooted not in the data but in the random initialization that sets up a network before training begins. Fresh out of initialization, the network's outputs were already skewed toward certain classes (one-way ANOVA, P<10⁻³), and that bias survived training into the final model.

The fix is disarmingly simple. Before any real data, the model warms up on meaningless random noise. It learns nothing, and its accuracy stays at chance, yet the confidence skew baked into initialization dissolves. In the real training that follows, calibration error dropped significantly, the model learned to lower its confidence on unfamiliar inputs, and accuracy held steady.

The experiments are limited to small image classifiers, so whether the effect generalizes to large language models remains untested.

Trustworthy AI, it suggests, is not only a matter of cleaner data but of what you train on and in what order. Data quality and the training recipe are two halves of one body.

▶ Read: https://blog.pebblous.ai/blog/noise-pretrain-calibration/en/

#Pebblous #DataClinic #DataQuality #NeuralNetworkCalibration #AIOverconfidence #DeepLearning #KAIST #NatureMachineIntelligence #AIGovernance

---

## Twitter/X (KO)

데이터를 한 장도 보지 않은 신경망이 이미 특정 답에 확신을 품고 있었습니다. AI 과신의 뿌리는 데이터가 아니라 랜덤 초기화였다는 KAIST 연구.

학습 전 무작위 노이즈로 잠깐 준비운동을 시키면, 모델은 '모르는 것은 모른다'고 말하는 법을 배웁니다.

▶ https://blog.pebblous.ai/blog/noise-pretrain-calibration/ko/

#페블러스 #신경망캘리브레이션 #KAIST #AI과신

---

## Twitter/X (EN)

A neural network that had seen no data already leaned toward certain answers. AI overconfidence, a KAIST team finds, is rooted in random initialization, not the data.

Warm the model up on random noise before real training, and it learns to say "I don't know."

▶ https://blog.pebblous.ai/blog/noise-pretrain-calibration/en/

#Pebblous #NeuralNetworkCalibration #KAIST #AIOverconfidence

---

## Facebook (KO)

틀린 답에 99%라는 확신이 붙어 있는 걸 본 적이 있습니다.

의료 영상을 오판하면서도 당당하고, 처음 보는 도로를 익숙한 것으로 착각하면서도 당당한 모델.

우리가 정말 바라는 건 틀리지 않는 AI가 아니라, 모를 때 모른다고 말해 주는 AI일 텐데요.

그동안 저는 이 과신을 데이터 탓으로만 읽었습니다. 데이터가 부족했거나 지저분했겠지, 하고요.

그런데 KAIST 연구진은 더 앞을 들여다봤습니다. 학습이 시작되기도 전, 신경망의 가중치를 무작위 숫자로 채우는 바로 그 순간을요. 데이터를 한 장도 보지 않은 신경망이 이미 특정 답에 확신을 품고 있었고, 그 쏠림은 학습이 다 끝난 뒤까지 살아남았습니다. 과신은 배워서 생긴 게 아니라, 태어날 때부터 지니고 있던 버릇이었던 셈입니다.

이들의 처방이 저를 붙잡았습니다. 진짜 데이터를 보여 주기 전에, 아무 의미 없는 무작위 노이즈로 잠깐 준비운동을 시키는 것. 모델은 그 단계에서 아무것도 배우지 못합니다. 그런데 바로 그 헛수고가 출발선의 편향을 지워, 이후 학습에서 모델이 낯선 입력 앞에 확신을 낮추게 만듭니다.

영감을 준 건 뜻밖에도 태아의 뇌였습니다. 아직 눈을 뜨기 전, 감각이 들어오기도 전에 스스로 노이즈 같은 활동을 일으키며 회로를 다듬어 두는 그 시기 말입니다.

'신뢰할 수 있는 AI는 더 깨끗한 데이터만의 문제일까요, 아니면 무엇을 어떤 순서로 배우느냐의 문제일까요.'

데이터 품질과 학습 레시피가 사실은 한 몸이라는 것은, 페블러스가 데이터를 진단하며 자주 다시 만나는 자리이기도 합니다.

같은 질문을 오래 들여다보게 되는 밤입니다.

https://blog.pebblous.ai/blog/noise-pretrain-calibration/ko/

#페블러스 #데이터품질 #신경망캘리브레이션 #KAIST #데이터클리닉

---

## Facebook (EN)

I once saw a wrong answer wearing a 99% confidence score.

A model that misreads a scan and stays sure of itself. A model that mistakes a road it has never seen for a familiar one, and never flinches.

What we actually want isn't an AI that never errs, but one that tells us when it doesn't know.

For a long time I read that overconfidence as a data problem. The data was too thin, or too messy, and that was the story I told myself.

A team at KAIST looked further back. Not at the data, but at the moment before training even starts, when a network's weights are filled with random numbers. A network that had seen no data at all already leaned toward certain answers, and that lean survived all the way to the finished model. The overconfidence wasn't learned. It was there from the beginning.

Their remedy stayed with me. Before showing the model any real data, you let it warm up on meaningless random noise. It learns nothing in that phase. And yet that pointless exercise erases the bias at the starting line, so that later the model lowers its confidence when it meets something unfamiliar.

The inspiration came, of all places, from the fetal brain, which stirs with noise-like activity and tunes its circuits long before the eyes ever open.

"Is trustworthy AI only a matter of cleaner data, or of what we learn and in what order?"

That data quality and the training recipe turn out to be two halves of one body is a place Pebblous keeps arriving at while diagnosing data.

A question worth sitting with tonight.

https://blog.pebblous.ai/blog/noise-pretrain-calibration/en/

#Pebblous #DataQuality #NeuralNetworkCalibration #KAIST #DataClinic
