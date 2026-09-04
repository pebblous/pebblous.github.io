# SNS 홍보 글: 모델을 키워도 LLM 출력 다양성은 학습 코퍼스보다 좁았다

> 소스: report/llm-training-data-diversity-gap/ko/index.html
> 생성일: 2026-09-04
> URL (KO): https://blog.pebblous.ai/report/llm-training-data-diversity-gap/ko/
> URL (EN): https://blog.pebblous.ai/report/llm-training-data-diversity-gap/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

학습 코퍼스에서 뽑은 앞머리를 모델에도 그대로 물리고 뒤에 이어진 것끼리 비교했더니, 더 좁은 쪽은 언제나 모델이었습니다.

홍콩중문대의 두 연구자가 9월 2일 arXiv에 올린 프리프린트입니다. 학습 데이터가 공개된 OLMo와 Pythia, GPT-Neo만 골라 Dolma와 The Pile에서 문단을 뽑고, 그 앞부분을 잘라 코퍼스와 모델에 같은 조건을 만들었습니다. 조건부 엔트로피로 재니 세 계열, 세 가지 디코딩, 시험한 모든 길이 조합에서 방향이 한 번도 뒤집히지 않았습니다.

이 측정이 성립하는 까닭은 프롬프트마다 사람이 쓴 정답을 여러 개 모아 둘 필요가 없다는 데 있습니다. 짝지어진 표본 전체에서 결합 쪽 엔트로피에서 입력 쪽 엔트로피를 빼면, 앞머리로 설명되지 않는 이어쓰기의 변동만 남습니다.

커널로 계산한 값이라 눈으로 확인할 수 없다는 약점은 낱말 감사로 메웠습니다. 미리 정해 둔 나라 이름 목록으로 OLMo의 생성물을 세어 보니 순서가 커널 지표와 같았고, 그리디 디코딩은 나라 이름을 말할 대목에서 열에 넷을 두 나라에 몰아주고 있었습니다. 같은 앞머리로 만든 훈련 문단에서 그 두 이름의 몫은 열에 하나 남짓이었습니다.

격차의 크기는 조건에 따라 크게 흔들립니다. 널리 인용될 35.4%는 시험한 조건을 통틀어 가장 나쁜 단일 조합입니다. 앞머리를 길게 물리거나 확률적 디코딩을 쓰면 한 자릿수까지 내려가고, 적게 재도 작아집니다. 방향이 예외 없었다는 것과 크기가 항상 컸다는 것은 다른 말입니다.

용량 문제도 아니었습니다. 같은 코퍼스를 같은 토큰만큼 학습한 Pythia에서 파라미터를 2.4배로 늘리는 동안 그리디 기준 격차는 0.6%p 움직였습니다.

읽을 때 함께 볼 것이 있습니다. 아직 심사를 거치지 않은 v1이고, 여기 쓰인 지표를 만든 연구 그룹이 그 지표를 직접 적용한 결과입니다. 지시조정이나 RLHF를 거친 상용 모델은 하나도 들어 있지 않습니다.

세 계열만 시험한 것은 방법의 한계가 아니라 공개성의 한계였습니다. 좁아졌는지 아닌지는 그 모델이 먹은 코퍼스를 열 수 있어야 물어볼 수 있습니다.

▶ 전문: https://blog.pebblous.ai/report/llm-training-data-diversity-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM #출력다양성 #조건부엔트로피 #OLMo #Pythia #GPTNeo

---

## LinkedIn (EN)

Handed the same opening words their own training corpora carried, three open language models continued more narrowly than the corpora did.

The preprint went up on arXiv on September 2, from two researchers at the Chinese University of Hong Kong. They restricted the study to OLMo, Pythia and GPT-Neo, the models whose pretraining data can still be opened, drew paragraphs from Dolma and The Pile, and cut the openings so that corpus and model faced identical conditions. Measured by conditional entropy, the direction never once reversed across three model families, three decoding settings and every sequence length tested.

The measurement works because it needs no bank of human answers per prompt. Subtract the input entropy from the joint entropy over the paired samples, and what remains is the variation in the continuations that the prefix does not explain.

Because that quantity lives in embedding space, the authors added an audit anyone can count. Running a fixed list of country names over OLMo's output reproduced the same ranking the kernel metric gave. Greedy decoding sent four in ten of its country mentions to two names. In training paragraphs drawn from the same prefixes, those two names took just over one in ten.

The size of the gap swings with the setup. The quotable 35.4% is the single worst cell among all the conditions tested. Longer prefixes or stochastic decoding pull it into single digits, and measuring fewer samples shrinks it further. That the direction held everywhere and that the magnitude was always large are two different claims.

Capacity was not the explanation either. Across Pythia models trained on the same corpus for the same token budget, a 2.4-fold increase in parameters moved the greedy gap by 0.6 percentage points.

Read the caveats alongside it. This is an unreviewed v1, and the group that designed the metric is the group applying it. No instruction-tuned or RLHF'd commercial model appears anywhere in the study.

Testing only three families was a limit of disclosure, not of method. Whether a model has narrowed is a question you can only ask when the corpus it ate is open.

▶ Read: https://blog.pebblous.ai/report/llm-training-data-diversity-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLM #OutputDiversity #ConditionalEntropy #OLMo #Pythia #GPTNeo

---

## Twitter/X (KO)

같은 앞머리를 학습 코퍼스와 모델에 나란히 물렸습니다. 모델이 이어 쓴 쪽이 좁았습니다. 세 계열, 세 디코딩, 시험한 모든 길이에서 방향이 뒤집힌 적이 없습니다.

같은 코퍼스로 학습한 Pythia에서 파라미터를 2.4배로 키워도 그리디 기준 격차는 0.6%p 움직였습니다.

좁아졌는지는 그 모델이 먹은 코퍼스가 열려 있어야 물어볼 수 있습니다.

▶ https://blog.pebblous.ai/report/llm-training-data-diversity-gap/ko/

#페블러스 #데이터품질 #LLM #OLMo

---

## Twitter/X (EN)

Same prefixes, drawn from the corpus, handed to the model. The model's continuations were the narrower ones, across three families, three decoding settings and every length tested.

On Pythia models trained on the same corpus, scaling parameters 2.4x moved the greedy gap by 0.6 points.

Asking whether a model has narrowed requires the corpus it was trained on to be open.

▶ https://blog.pebblous.ai/report/llm-training-data-diversity-gap/en/

#Pebblous #DataQuality #LLM #OLMo

---

## Facebook (KO)

북미에서 활기찬 도시를 하나만 대 보라고 하면, 어떤 이름이 나올까요.

한 논문이 이 질문을 모델에게 천 번 물었습니다.

토론토와 밴쿠버, 그리고 뉴욕. 이 세 이름이 답의 절반을 가져갔습니다.

마이애미와 덴버는 쉰 번에 한 번, 필라델피아는 백 번에 한 번쯤 불렸습니다. 모를 리 없는 이름들인데도 그랬습니다.

틀린 답은 하나도 없습니다. 전부 북미의 활기찬 도시입니다.

"이 답은 틀렸는가, 아니면 좁은가?"

두 물음은 서로 다른 검사를 요구합니다. 앞의 것은 오래전부터 재 왔습니다. 뒤의 것은 무엇에 견줄지가 정해져 있지 않아 대개 인상으로만 이야기돼 왔습니다.

홍콩중문대의 두 연구자는 그 견줄 자리에 학습 코퍼스를 놓았습니다. 코퍼스에서 문단을 뽑아 앞부분을 잘라 내고, 같은 앞머리를 모델에도 물린 뒤, 뒤에 이어진 것끼리 나란히 쟀습니다. 시험한 어떤 조합에서도 모델 쪽이 좁았습니다.

저에게 오래 남은 것은 표가 아니라 그 셋을 고른 이유였습니다. 성능으로 고른 셋이 아닙니다. 학습 코퍼스를 열어 둔 것이 사실상 그 셋뿐이었습니다.

견줄 것이 없으면 검사가 시작되지 않습니다. 좁아졌는지 아닌지를 아무도 말할 수 없다는 뜻입니다.

페블러스가 이 논문을 붙잡은 대목도 거기였습니다. 데이터를 진단하다 보면 레코드는 하나하나 다 맞는데 그것들이 모여 만드는 분포가 원본보다 얇아져 있는 경우를 만납니다. 값이 비었는지 형식이 맞는지를 묻는 검사로는 보이지 않는 종류입니다.

다행인 것은 이 격차의 일부가 되돌려진다는 점입니다. 모델을 다시 학습시키지 않고 이미 뽑아 둔 후보들의 가중치만 다시 나눴더니 마이애미와 필라델피아의 몫이 올라갔습니다. 없던 답을 지어내는 방식이 아니라, 만들어 놓고 안 쓰던 답에 자리를 주는 방식입니다.

물론 아직 심사를 거치지 않은 사전 공개본이고, 상용 모델은 하나도 시험하지 않았습니다. 그 사실까지 함께 읽는 것이 맞다고 봅니다.

그래도 질문 하나는 남습니다. 우리가 쓰는 모델이 맞는 답을 내는지는 매일 확인하면서, 그 답이 고른지는 마지막으로 언제 재 보았을까요.

https://blog.pebblous.ai/report/llm-training-data-diversity-gap/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #출력다양성 #OLMo #Pythia

---

## Facebook (EN)

Name one vibrant city in North America. Just one.

A paper put that question to a language model a thousand times.

Toronto, Vancouver, New York. Those three names took half the answers.

Miami and Denver came up about once in fifty, Philadelphia about once in a hundred. Names the model plainly knows.

Not one answer is wrong. Every one of them is a vibrant city in North America.

"Is this answer wrong, or is it narrow?"

The two questions call for different tests. We have been running the first one for years. The second has mostly been left to impression, because nobody agreed on what to hold the answers up against.

Two researchers at the Chinese University of Hong Kong put the training corpus in that place. They pulled paragraphs from the corpus, cut off the openings, handed the same openings to the model, and measured the two sets of continuations side by side. In every combination they tried, the model's side was the narrower one.

What stayed with me was not the tables but the reason those three models were chosen. Not performance. They were, in practice, the only ones whose training corpus is still open.

Without something to hold the output against, the test never begins. Nobody can say whether anything narrowed.

That is the part Pebblous keeps returning to. When you diagnose data for a living, you meet datasets where every record checks out and the distribution they add up to is thinner than the original. A test that asks whether a field is empty or a format is valid will never see it.

Some of the gap does come back. Without retraining anything, the authors simply redistributed the weights over candidates the model had already produced, and the shares of Miami and Philadelphia rose. Nothing new is invented. Answers that were generated and never used are given room.

This is an unreviewed preprint, and no commercial model was tested. That belongs in the reading too.

One question stays with me anyway. We check every day whether our models are right. When did we last check whether they are even.

https://blog.pebblous.ai/report/llm-training-data-diversity-gap/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #OutputDiversity #OLMo #Pythia
