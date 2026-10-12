# SNS 홍보 글: 루빈 천문대 LSST, AI는 왜 은하보다 별을 놓칠까?

> 소스: blog/lsst-dp1-deepdisc-star-completeness/ko/index.html
> 생성일: 2026-10-12
> URL: https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

같은 하늘을 찍은 같은 영상에서, 같은 모델이 은하는 열에 여덟 넘게 찾아내고 별은 절반을 놓쳤습니다.

베라 루빈 천문대가 10년짜리 하늘 탐사 LSST에 앞서 공개한 첫 실관측 자료에 딥러닝 검출기 DeepDISC를 처음 적용한 논문이 이달 초 arXiv에 올라왔습니다. 정답표에 적힌 천체 가운데 모델이 제자리에서 찾아낸 비율은 은하 84.2%, 별 49.1%였습니다.

같은 논문이 보고한 별·은하 분류 정확도는 97.4%입니다. 두 점수가 세는 대상이 다릅니다. 완전도의 분모는 정답표에 있는 천체 전부이고, 정확도의 분모는 모델이 찾아낸 천체입니다. 검출 단계에서 빠진 별은 틀린 답으로 기록되지도 않습니다.

논문이 원인으로 지목한 곳은 모델 구조가 아니라 학습에 쓴 주석입니다. 훈련 주석의 은하 대 별 비율은 약 6 대 1이었습니다. 별 쪽에 가중치를 더 주고 focal loss를 걸자 같은 채점 기준에서 별 완전도가 66.6%까지 올랐는데, 저자들은 그 보정 값이 이 훈련 집합의 부류 비율에 맞춰 잡은 것이라 다른 하늘로 그대로 옮기기 어렵다고 적었습니다.

루빈 천문대는 앞으로 10년 동안 밤마다 하늘을 훑어 30페타바이트를 쌓습니다. 그 카탈로그를 받아 쓰는 후속 연구는 1차 검출·분류 단계의 결함을 그대로 물려받습니다. 정확도는 재기 쉽고 완전도는 재기 어려운데, 보고서에 남는 쪽은 대개 재기 쉬운 쪽입니다.

▶ 전문: https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #라벨불균형 #LSST #베라루빈천문대 #DeepDISC #arXiv

---

## LinkedIn (EN)

Looking at the same images, the same model recovered more than eight galaxies in ten and lost half the stars.

A paper posted to arXiv on 7 October is the first run of the deep learning detector DeepDISC on Data Preview 1, the first real observations Vera C. Rubin Observatory released ahead of LSST, its ten-year survey of the sky. Of the objects written into the ground truth, the model recovered 84.2% of the galaxies and 49.1% of the stars.

The same paper reports a star-galaxy classification accuracy of 97.4%. The two scores count different things. Completeness takes every object in the ground truth as its denominator, while accuracy takes only the objects the model found. A star dropped at the detection step is not even recorded as a wrong answer.

What the paper names as the cause is not the architecture but the annotations it trained on. The training annotations ran about six galaxies to every star. Weighting stars more heavily and adding a focal loss lifted star completeness to 66.6% under the same scoring rule, though the authors note that the correction was tuned to the class balance of this particular training set and does not carry over to another patch of sky.

LSST will sweep the sky nightly for a decade and accumulate some 30 petabytes, and every study that takes the catalog inherits whatever the first detection and classification pass got wrong. Accuracy is easy to measure and completeness is hard, and the easy one is what tends to survive into the report.

▶ Read: https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ClassImbalance #LSST #RubinObservatory #DeepDISC #arXiv

---

## Twitter/X (KO)

루빈 천문대 LSST의 첫 공개 자료에 딥러닝 검출기를 돌리니 은하는 84.2%를 찾아냈고 별은 49.1%에 그쳤습니다.

같은 논문의 분류 정확도는 높게 나옵니다. 다만 그 분모에는 모델이 찾아낸 천체만 들어갑니다. 검출에서 빠진 별은 틀린 답으로도 기록되지 않습니다.

https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/ko/

#페블러스 #데이터품질 #LSST #베라루빈천문대

---

## Twitter/X (EN)

Run on the first public data from Rubin Observatory's LSST, a deep learning detector recovered 84.2% of the galaxies and 49.1% of the stars.

The same paper's classification accuracy looks high. But its denominator holds only the objects the model found. A star dropped at detection is not even logged as a wrong answer.

https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/en/

#Pebblous #DataQuality #LSST #RubinObservatory

---

## Facebook (KO)

채점이 끝난 답안지를 받아 들었는데 틀린 문제가 거의 없습니다.

그런데 문항 번호를 세어 보니 원래 있어야 할 문제의 절반이 비어 있습니다.

점수는 높게 나옵니다.

지난 7일 arXiv에 올라온 천문학 논문 한 편을 읽는 내내 이 장면이 따라왔습니다.

베라 루빈 천문대는 올해 6월부터 10년짜리 하늘 탐사를 시작했습니다. 그에 앞서 리허설에 해당하는 첫 실관측 자료를 공개했고, 어느 연구진이 거기에 딥러닝 검출기를 돌렸습니다. 정답표에 적힌 천체 가운데 모델이 제자리에서 찾아낸 비율은 은하 84.2%, 별 49.1%였습니다.

같은 논문에 적힌 별·은하 분류 정확도는 97.4%입니다.

두 숫자는 서로 다른 것을 분모에 넣습니다. 앞의 것은 하늘에 있다고 적힌 천체 전부를 세고, 뒤의 것은 모델이 찾아낸 천체만 셉니다.

"내가 지금 받아 든 이 점수는, 놓친 것을 세고 있습니까?"

놓친 별은 틀린 답이 아니라 빠진 문항이 됩니다. 빠진 문항은 채점에서 조용합니다. 많이 놓칠수록 남은 답안은 깨끗해지고, 점수는 오히려 올라갑니다.

논문이 원인을 찾은 자리는 모델이 아니라 교재였습니다. 검출을 배울 때 쓴 주석에 은하가 별보다 여섯 배 많았고, 거기 적힌 별 항목은 가장 어두운 쪽과 가장 밝은 쪽에서 특히 부정확했습니다. 별 쪽에 가중치를 더 주고 손실 함수를 손보자 같은 기준에서 별 완전도가 66.6%까지 올랐습니다. 하늘도 모델도 그대로인데 두 부류를 얼마나 무겁게 셀지만 바꾼 결과입니다.

데이터 품질을 재는 자리에서 페블러스가 자주 부딪히는 벽도 같은 모양입니다. 값이 맞는지는 비교적 쉽게 잽니다. 거기 있어야 했는데 없는 것을 세려면 전체가 무엇인지 알려 주는 자료가 따로 있어야 합니다. 이 논문도 겹침 비율을 잴 때는 자기 자료 안에서 답을 찾지 않고 허블 우주망원경의 더 깊은 눈을 빌려 왔습니다.

이 논문이 드문 쪽에 서 있는 이유는 별을 잘 찾아서가 아니라, 절반을 놓쳤다고 본문에 적었기 때문입니다.

놓친 것을 세는 칸은 성적표에 기본으로 들어 있지 않습니다. 넣기로 정한 사람이 있는 자리에만 생깁니다.

▶ https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/ko/

#페블러스 #LSST #베라루빈천문대 #DeepDISC #데이터품질 #DataClinic

---

## Facebook (EN)

A marked exam comes back with almost nothing wrong on it.

Then you count the question numbers and half of them are missing.

The score is high.

That picture stayed with me through an astronomy paper posted to arXiv on the 7th.

Vera C. Rubin Observatory began its ten-year survey of the sky in June. Before that it released a rehearsal, the first real images taken with its commissioning camera, and a group of researchers ran a deep learning detector over them. Of the objects written into the ground truth, the model recovered 84.2% of the galaxies and 49.1% of the stars.

The same paper reports a star-galaxy classification accuracy of 97.4%.

The two numbers do not share a denominator. One counts every object the sky was said to hold. The other counts only what the model found.

"Does the score I was just handed count the things nobody found?"

A missed star is not a wrong answer. It is a question that left the page. And the more of them that leave, the cleaner the remaining paper looks.

Where the paper went looking for the cause was not the model but the material it had studied from. In the annotations used to teach detection there were six galaxies for every star, and the star entries were least reliable at the faintest and the brightest ends. Weighting stars more heavily and reshaping the loss brought star completeness to 66.6% under the same rule. Same sky, same architecture, with only the weight each class carried in training changed.

This is the wall Pebblous keeps meeting when it measures data quality. Whether a value is right is comparatively easy to test. Counting what should have been there and is not requires a second source that knows the whole, which is why this paper, to measure how often it fused two objects into one, borrowed the deeper eye of the Hubble Space Telescope rather than trusting its own data.

What puts this paper in rare company is not that it found stars well. It is that it wrote down the half it lost.

A column for what went missing is not in the report by default. It appears only where someone decided to put it there.

▶ https://blog.pebblous.ai/blog/lsst-dp1-deepdisc-star-completeness/en/

#Pebblous #LSST #RubinObservatory #DeepDISC #DataQuality #DataClinic
