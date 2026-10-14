# SNS 홍보 글: 보타닉-1이 맨 앞에 올린 멜론 유전자, 답은 이미 논문에 있다

> 소스: blog/botanic-1-melon-variant-retrospective/
> 생성일: 2026-10-15
> URL: https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

지휘하는 모델은 그대로 두고 부를 수 있는 도구만 바꿨더니, 스무 번 중 정답을 1위에 올린 비율이 0.15에서 0.90이 됐습니다.

파리의 바이오 AI 회사 리빙 모델스가 지난달 bioRxiv에 올린 작업입니다. 식물 320종의 유전체로 학습시킨 보타닉-1을 구글 젬마 4가 명령줄 도구처럼 불러 쓰게 묶었고, 구글이 같은 작업을 공동 발표문으로 함께 소개했습니다.

과제는 멜론 꽃의 성을 가르는 염기 하나를 찾는 일이었습니다. 고전 분석으로 2번 염색체 구간까지 좁히면 후보 수천 개가 남고, 구간 안의 변이는 함께 유전되니 서로 비슷한 점수를 받습니다. 젬마 4에게 표준 명령줄 도구만 쥐여 줬을 때는 잘 풀려도 점수가 같은 변이 두 개에서 멈췄습니다. 보타닉-1의 채점 함수를 붙이자 후보 2,494개 가운데 검증된 CmEIN3 변이가 동점 없이 맨 앞에 올랐습니다.

앞의 0.15는 전문가가 지도한 고전 도구, 0.90은 보타닉-1을 붙인 쪽의 값입니다. 세 경우 모두 지휘자는 같은 젬마 4였습니다. 더 큰 범용 모델로 갈아 끼우는 쪽은 정확도가 나아지지 않고 비용만 늘었다고 같은 발표문이 적습니다. 성능을 가른 것은 추론의 깊이가 아니라 도구가 학습한 데이터였습니다.

다만 이 점수가 나온 문제는 답이 이미 논문에 실려 있는 변이입니다. 논문 자신이 이 사례를 사후 분석이라고 본문에 적습니다. 더 넓게 잰 묶음도 사정이 같아서, 평가에 쓰인 500여 곳은 모두 실험으로 확인이 끝난 변이입니다. 확인이 끝났다는 말은 어딘가에 발표됐다는 뜻이기도 합니다.

동료심사를 거치지 않은 프리프린트이고, 멜론 사례의 단계별 숫자는 논문이 아니라 당사자들이 함께 낸 발표문에 적혀 있습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 재는 쪽에서 보면 모델과 함께 받아야 할 줄이 둘입니다. 평가에 쓴 정답이 언제 확정됐는지, 그리고 그 시점이 학습 데이터를 모은 시점보다 앞인지 뒤인지.

모델이 먼저 지목하고 실험이 나중에 확인한 사례가 기록되기 전까지, 발견 능력의 숫자는 아직 생기지 않은 셈입니다.

▶ 전문: https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #BOTANIC1 #Gemma4 #LivingModels #AI에이전트 #유전체AI #bioRxiv

---

## LinkedIn (EN)

The conductor stayed the same. Only the tools it could call changed, and the share of twenty runs that ranked the correct variant first went from 0.15 to 0.90.

The work was posted to bioRxiv last month by Living Models, a bio AI company in Paris, and introduced the same week in a joint announcement with Google. BOTANIC-1, trained on the genomes of 320 plant species, was wired so that Google's Gemma 4 could call it the way it calls a command line tool.

The task was to find the single base that decides the sex of a melon flower. Classical analysis narrows the search to one interval on chromosome 2 and then stalls, because variants inside an interval are inherited together and score alike. Handed only standard command line tools, Gemma 4 in its best runs narrowed the pool to two identical-scoring mutations and stopped. With the BOTANIC-1 scoring function attached, the validated CmEIN3 variant came back first out of 2,494 candidates, with no tie.

The 0.15 belongs to expert-guided classical tools, the 0.90 to the setup calling BOTANIC-1. The same Gemma 4 ran all three setups. Swapping in a heavier generalist model brought no gain in accuracy and only raised the cost, the announcement notes. What separated the runs was not depth of reasoning but what the tool had been trained on.

The problem that produced the score, though, is one whose answer already sits in a published paper. The authors call the melon case a retrospective analysis in their own text. The broader evaluation set carries the same condition: the 500-plus sites it measures on are all variants experiment has already confirmed, and confirmed means published somewhere.

It is also a preprint, not yet peer reviewed, and the step-by-step melon figures come from the announcement the two parties wrote together rather than from the paper.

At Pebblous, DataClinic is where the quality of AI training data gets put into numbers. From that side of the table, two lines have to arrive with any model. When the answers used in evaluation were settled, and whether that moment falls before or after the training data was collected.

Until cases exist where the model named a variant first and experiment confirmed it afterward, there is no number yet for discovery.

▶ Read: https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #BOTANIC1 #Gemma4 #LivingModels #AIAgent #GenomicAI #bioRxiv

---

## Twitter/X (KO)

지휘하는 모델은 그대로 두고 부를 수 있는 도구만 바꿨더니, 멜론 변이 후보 2,494개 가운데 정답이 1위로 올라왔습니다.

구글 젬마 4가 식물 유전체 모델 보타닉-1을 도구로 불러 쓴 결과입니다. 다만 그 정답은 이미 논문에 실린 값이고, 논문 자신이 이 사례를 사후 분석이라고 적습니다.

https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/ko/

#페블러스 #데이터품질 #BOTANIC1 #Gemma4

---

## Twitter/X (EN)

The conductor stayed the same. Only its tools changed, and the correct melon variant came back first out of 2,494 candidates.

Google's Gemma 4 got there by calling BOTANIC-1, a plant genome model, as a tool. The catch is that the answer was already in a published paper, and the authors call the case a retrospective analysis themselves.

https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/en/

#Pebblous #DataQuality #BOTANIC1 #Gemma4

---

## Facebook (KO)

후보 두 개의 점수가 똑같이 나옵니다. 하나는 정답이고 다른 하나는 관계없는 유전자인데, 숫자 안에는 둘을 가를 것이 없습니다.

멜론은 한 포기에서 피는 꽃의 성이 품종마다 갈립니다. 그 차이를 만든 염기 하나를 찾는 일이 식물 유전학의 오래된 과제입니다.

고전적인 분석으로 범위를 좁혀 가면 2번 염색체의 한 구간이 남습니다. 거기까지입니다.

구간 안의 변이들은 함께 유전되니 서로 비슷한 점수를 받습니다. 실험실에서 둘 다 확인해 보는 수밖에 없는 자리입니다.

지난달 공개된 작업은 그 자리를 지나갔습니다.

구글 젬마 4가 분석을 지휘하고, 식물 320종의 유전체로 따로 학습한 보타닉-1을 채점 도구로 불러 썼습니다. 후보 2,494개 가운데 검증된 변이가 동점 없이 맨 앞에 올랐습니다.

스무 번을 돌려 정답을 1위에 올린 비율로 재면, 전문가가 지도한 고전 도구가 0.15이고 보타닉-1을 붙인 쪽이 0.90입니다. 세 번의 실험에서 지휘자는 내내 같은 젬마 4였고, 바뀐 것은 그가 부를 수 있는 도구뿐이었습니다.

그런데 논문이 스스로 적어 둔 한 줄이 이 성적의 뜻을 바꿉니다.

이 사례는 사후 분석이라고 본문에 적혀 있습니다. 1위로 올라온 그 변이는 이미 실험으로 확인되어 논문에 실린 값입니다.

더 넓게 잰 묶음도 사정이 같습니다. 평가에 쓰인 500여 곳은 모두 답이 확인된 변이이고, 확인됐다는 말은 어딘가에 발표됐다는 뜻입니다.

그러니까 이 성적표에 적힌 것은 '복원 점수'에 가깝습니다. 숨겨 둔 답을 도로 찾아내는 능력입니다.

정작 쓰는 사람이 알고 싶은 것은 '발견 점수'입니다. 아직 아무도 답을 모르는 자리에서 얼마나 맞히는가.

"이 점수는 답이 있는 문제에서 받은 것입니까, 없는 문제에서 받은 것입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 재는 쪽에서 보면, 모델과 함께 와야 할 것은 점수만이 아니라 그 점수를 매긴 문제지의 내력입니다. 정답이 언제 확정됐는지, 그 시점이 학습 데이터를 모은 시점보다 앞인지 뒤인지.

두 점수 사이의 거리는 모델을 더 돌려서는 줄지 않는 것 같습니다. 모델이 먼저 지목하고 실험이 나중에 확인한 사례가 한 건씩 기록되기 시작할 때, 그때 발견 점수가 처음 생기지 않을까 싶습니다.

▸ https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #BOTANIC1 #Gemma4

---

## Facebook (EN)

Two candidates come back with identical scores. One is the answer, the other an unrelated gene, and there is nothing in the numbers to tell them apart.

In melon, the sex of the flowers a single plant produces differs by cultivar. Working out which single base split that trait is an old problem in plant genetics.

Classical analysis narrows the search until one interval on chromosome 2 is left. That is as far as it goes.

Variants inside an interval are inherited together, so they score alike. Both have to be checked at the bench.

Work released last month walked past that point.

Google's Gemma 4 directed the analysis and called BOTANIC-1, trained separately on the genomes of 320 plant species, as its scoring tool. Out of 2,494 candidates the validated variant came back first, with no tie.

Measured by the share of twenty runs that ranked the correct variant first, expert-guided classical tools came in at 0.15 and the setup calling BOTANIC-1 at 0.90. The conductor was the same Gemma 4 in every setup. What changed was the set of tools it could call.

Then there is a line the authors wrote about their own work, and it changes what the score means.

They describe the melon case as a retrospective analysis. The variant that came out on top is a value experiment confirmed and a paper published.

The broader set carries the same condition. The 500-plus sites it was measured on are all confirmed variants, and confirmed means published somewhere.

So what this scorecard reports is closer to a recovery score: the ability to find an answer that was hidden and put back.

What the person using the model wants is a discovery score. How often it is right where nobody knows the answer yet.

"Did this score come from a problem that has an answer, or from one that doesn't?"

Pebblous diagnoses the quality of AI training data with DataClinic. Seen from the measuring side, what has to arrive with a model is not only the score but the provenance of the test it was given. When the answers were settled, and whether that moment falls before or after the training data was collected.

The distance between the two scores does not seem to shrink by running the model more. It may start to close the first time a model names a variant first and experiment confirms it afterward, one case at a time.

▸ https://blog.pebblous.ai/blog/botanic-1-melon-variant-retrospective/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #BOTANIC1 #Gemma4
