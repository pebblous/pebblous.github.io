# SNS 홍보 글: AI 글 탐지기는 새 세대 모델 앞에서 무너진다

> 소스: blog/ai-text-detector-llm-turnover/
> 생성일: 2026-11-14
> URL: https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

오픈AI의 가장 나중 판본 세 개로 학습한 AI 글 탐지기는, 실험에서 가장 이른 GPT-4가 다시 쓴 글을 많아야 0.2% 잡아냈다.

도쿄도립대학교 나카지마 가즈키와 국립정보학연구소 미즈노 다카유키가 챗GPT 이전에 실린 논문 초록 4,000편을 2023년부터 올해 8월까지 공개된 LLM 23개 판본에 각각 다시 쓰게 했다. 판본마다 탐지기를 따로 학습시켰고, 판정 문턱은 사람이 쓴 초록 백 편 중 한 편을 AI로 잘못 찍는 자리에 맞췄다.

평소 성적은 멀쩡하다. 앞선 판본으로 배울 거리가 있던 20개 중 18개에서 탐지율은 85% 위였다. 무너진 자리는 두 군데뿐, 둘 다 모델이 세대를 갈아탄 길목이다.

GPT-5의 첫 판본에서 26.6%, 메타가 지난 8월 오픈웨이트로 내놓은 뮤즈 글리머에서 3.8%. 뮤즈 글리머 바로 앞 판본에서는 같은 탐지기가 99%를 넘기던 참이었다.

새 모델일수록 잡기 어렵다는 이야기로 읽으면 어긋난다. 첫 줄의 0.2%가 그 반대 방향이다. 학습한 판본에서 멀어지면 어느 쪽으로든 못 알아본다. 연구진이 든 설명은 판본마다 즐겨 쓰는 낱말의 분포다. 분포 차이와 탐지율의 순위 상관은 −0.85였고, 함께 움직인다는 사실이 원인의 증명은 아니라는 단서가 붙었다.

전부 덮으려는 쪽에도 값이 붙는다. 판본별 탐지기를 모두 켜 두면 가장 새 판본 글도 98.6%를 잡아내지만, 사람이 쓴 초록 여덟 편 가운데 한 편에 AI 딱지가 붙는다. 23개를 합쳐 하나로 학습시키면 억울한 저자는 거의 사라지는 대신 그 글의 3분의 1이 통과한다. 이 실험 안에 중간은 없었다.

결과가 선 자리는 좁다. 한 학술지, 한 언어, 초록뿐이고 재현한 쓰임도 통째로 다시 쓰게 하는 한 가지다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 수치 지표로 진단한다. 성적표를 다시 뗄 때 조용히 갈리는 것은 값이 아니라 범위다. 지난번에 통과시킨 데이터를 이번 판정에도 다시 거는가. 논문이 남긴 물음도 정확도가 몇이냐가 아니라, 그 수치를 어느 판본에 대고 마지막으로 확인했느냐다.

▶ 전문: https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI글탐지기 #모델드리프트 #연구윤리 #Pangram #MuseGlimmer #PNAS

---

## LinkedIn (EN)

A detector trained on OpenAI's three latest versions caught at most 0.2% of the text rewritten by GPT-4, the oldest in the set.

Kazuki Nakajima of Tokyo Metropolitan University and Takayuki Mizuno of the National Institute of Informatics had 23 LLM versions, released between 2023 and this August, rewrite 4,000 PNAS abstracts written before ChatGPT existed. A detector was fine-tuned per version, at a threshold where 1 in 100 human-written abstracts is falsely flagged.

Ordinary performance was fine: across the 20 versions with a predecessor to learn from, detection held above 85% on 18. It broke in exactly two places, both where models crossed from one generation into the next.

Detection fell to 26.6% on the first GPT-5 version and to 3.8% on Muse-Glimmer, Meta's open-weight release in August. On the version just before it, the same detector had been clearing 99%.

Reading that as "newer models are harder to catch" gets it backward, as the 0.2% shows. Move away from the versions a detector was trained on, in either direction, and it stops recognizing them. The authors put it down to vocabulary: the wider the gap between two versions' word distributions, the less the earlier-trained detector caught, at −0.85 rank correlation they call co-movement rather than cause.

Covering all 23 at once has a price either way. Run every per-version detector together and it still catches 98.6% of the newest model's rewrites, but one in eight human-written abstracts picks up an AI label. Pool them into one and wrongful flags all but vanish, while a third of those rewrites walk straight past. This experiment found no middle.

The ground is narrow: English abstracts from one journal, Claude left out, only whole-abstract rewrites.

Pebblous puts the quality of AI training data on a scale with DataClinic. The part of a re-measurement settled most quietly is its scope: whether the next pass covers only what arrived since the last, or also what the last one waved through. The question the paper leaves is not how accurate a detector is, but against which versions it was last checked.

▶ Read: https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AITextDetection #ModelDrift #ResearchIntegrity #Pangram #MuseGlimmer #PNAS

---

## Twitter/X (KO)

논문 초록을 LLM 23개 판본에 차례로 다시 쓰게 했더니, 모델이 세대를 갈아탄 자리에서 탐지율이 99%에서 3.8%로 내려앉았다.

방향을 거꾸로 돌려도 같다. 오픈AI의 최신 판본들로 배운 탐지기는 GPT-4가 쓴 글을 거의 못 잡는다.

탐지기가 외운 것은 AI 글이 아니라 그 판본들의 말버릇이었다.

https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/ko/

#페블러스 #데이터품질 #AI글탐지기 #Pangram

---

## Twitter/X (EN)

Detectors trained on OpenAI's three newest versions barely registered text written by GPT-4. Trained the other way round, they missed the newest model nearly as badly.

What a detector learns is not AI writing. It is the word habits of the versions it was trained on.

https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/en/

#Pebblous #DataQuality #AITextDetection #Pangram

---

## Facebook (KO)

작년에 뗀 성적표 한 장을 올해도 그대로 꺼내 쓴 적이 있습니다.

숫자가 틀렸던 것은 아닙니다. 그날 그 데이터로 다시 재면 지금도 같은 값이 나올 겁니다.

적혀 있지 않은 것은 따로 있었습니다. 그 사이에 재는 대상이 가만히 있었는가.

AI 글 탐지기를 모델 판본에 차례로 걸어 본 연구가 그 자리를 짚습니다. 챗GPT 이전에 실린 논문 초록 4,000편을 2023년부터 올해 8월까지 나온 LLM 23개 판본에 각각 다시 쓰게 하고, 판본마다 탐지기를 따로 학습시켰습니다.

대부분의 판본에서는 지난 판본만 보고 배운 탐지기도 제 몫을 했습니다. 그러다 모델이 세대를 갈아타는 길목에서 탐지율이 99%에서 3.8%로 떨어졌습니다.

여기까지는 새 모델이 더 영리해졌다는 이야기로 읽힙니다. 연구진은 방향을 거꾸로도 돌려 봤습니다. 오픈AI의 가장 나중 판본들로 학습한 탐지기는, 실험에서 가장 이른 판본인 GPT-4가 쓴 글을 거의 잡아내지 못했습니다.

멀다는 것이 문제였지, 새롭다는 것이 문제가 아니었습니다.

탐지기가 배운 것은 'AI가 쓴 글'이 아니었습니다. 학습에 들어간 그 판본들이 즐겨 쓰던 낱말이었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 다시 재는 자리에서 조용히 정해지는 것은 값이 아니라 범위입니다. 이번 검사에 새로 들어온 데이터만 걸 것인지, 지난번에 한 번 통과시킨 데이터까지 다시 걸 것인지.

"지난번에 통과시킨 것들은, 이번 검사에 들어가 있습니까?"

앞으로만 다시 재면, 옛것을 놓치기 시작한 날은 끝내 성적표에 나타나지 않습니다.

▶ 전문: https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI글탐지기 #MuseGlimmer #모델드리프트

---

## Facebook (EN)

There is a number I have gone on quoting for a year.

It was never wrong. Measured again today, against the same data, it would come out the same.

What the sheet does not say is whether the thing it measured stayed where it was.

A study from two researchers in Tokyo put that question to AI text detectors. Kazuki Nakajima and Takayuki Mizuno took 4,000 journal abstracts published before ChatGPT existed and had 23 LLM versions rewrite them, one version at a time. Then they built a detector for each version and asked whether a detector trained on yesterday could recognize today.

Most of the time it could. On 18 of the 20 versions that had a predecessor to learn from, detection held above 85%.

Then a model crossed from one generation into the next, and detection went from above 99% to 3.8%.

The easy reading is that the newer model simply hides better. The researchers ran it backward as well. Detectors trained on the three most recent OpenAI versions caught almost nothing written by GPT-4, the oldest model in the set.

Distance, not direction.

What the detector learned was never AI writing. It was the words that one particular set of versions happened to favor.

Pebblous puts the quality of AI training data on a scale with DataClinic. The quiet decision in any re-measurement is not the number it returns. It is how far back the pass reaches.

"The material we cleared last quarter: is any of it in this quarter's run?"

Measure only forward, and the day you started missing the old material is the one day the sheet will never show.

▶ Read: https://blog.pebblous.ai/blog/ai-text-detector-llm-turnover/en/

#Pebblous #DataClinic #DataQuality #AITextDetection #MuseGlimmer #ModelDrift
