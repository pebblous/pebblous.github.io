# SNS 홍보 글: 얀 르쿤의 작은 모델, 데이터를 적게 썼을까 잘 묶었을까?

> 소스: report/lecun-platonic-representation-good-views/
> 생성일: 2026-11-08
> URL: https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

"1억 900만이 720억을 이겼다"로 옮겨진 논문이 있다. 그 작은 쪽 모델이 읽은 글은 셋 중 둘이 이미지를 본 AI가 쓴 것이다.

랜들 발레스트리에로와 얀 르쿤이 10월 29일 arXiv에 올린 논문이다. 머리기사가 가져간 비교에 올라간 것은 표현 정렬 하나다. 두 모델의 내부 표현이 얼마나 닮았는지를 재는 값이고, 생성도 추론도 코드 작성도 지시 따르기도 이 논문은 한 번도 평가하지 않았다.

논문이 실제로 보인 쪽은 따로 있다. 같은 텍스트와 같은 인코더를 두고 무엇과 무엇을 같은 것으로 묶을지만 바꾸면 점수가 0.184, 0.111, 0.088로 갈린다. 같은 장면을 따로 관측한 둘을 묶으면 모델은 장면을 배우고, 한 글을 두 번 훼손해 묶으면 촬영 각도나 말버릇까지 함께 배운다.

그 "따로 관측한 둘"을 9억 4천만 장 규모에서 적어 준 쪽은 사람이 아니다. 이미지 한 장에 붙은 텍스트 셋 가운데 둘이 LLaVA가 쓴 재캡션이다.

캡셔너를 빼고 다시 돌린 실험도 논문 안에 있다. 재캡션을 이미지를 한 번도 보지 않은 문장으로 갈면 정렬 점수가 0.107에서 0.060으로 내려간다. 거꾸로 같은 캡셔너가 같은 틀로 쓴 글 둘만 묶으면 좋은 뷰와 나쁜 뷰의 차이가 1.04배까지 줄어든다. 사람이 쓴 대체 텍스트가 섞여야 비로소 두 배가 난다.

논문은 이 유보를 숨기지 않는다. 한계 절의 첫 줄이 좋은 뷰가 어디서 오느냐를 가장 큰 유보 사항으로 적는다. 72B 모델 아래로 떨어진 네 번째 시드도, 평가셋 오염 43건도 부록에 함께 실려 있다. 그래서 열흘 뒤에 바깥에서 그 수를 다시 셀 수 있었다.

둘을 묶었다는 사실만으로는 값이 나지 않고, 묶인 둘이 서로 다른 데서 왔을 때 값이 난다. 그런데 그 정보는 데이터셋의 어느 칸에도 적히지 않는다. 폴더 구조나 적재 스크립트나 담당자의 기억 속에 있다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 결측과 이상치는 한 칸 안에 있지만, 짝짓기 규칙은 칸과 칸 사이에 있다.

다음 지렛대는 모델을 키우는 쪽이 아니라, 무엇과 무엇을 같은 것으로 묶었는지를 사양서에 적는 쪽이다.

▶ 전문: https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #YannLeCun #JEPA #플라톤적표현가설 #자기지도학습 #합성데이터 #멀티뷰데이터

---

## LinkedIn (EN)

The paper now circulating as "109 million beats 72 billion" trained its small text encoder on three texts per image. Two of the three were written by an AI that had looked at the picture.

Randall Balestriero and Yann LeCun posted it to arXiv on 29 October. The comparison that made the headlines rests on a single measure, representation alignment, which counts how closely two models' internal spaces agree about what sits near what. Generation, reasoning, code and instruction following are never evaluated in the paper.

What the paper actually demonstrates sits elsewhere. Hold the text and the encoder fixed, change only what gets treated as the same thing, and the score moves across 0.184, 0.111 and 0.088. Pair two separate observations of one scene and the model learns the scene. Pair two corruptions of one text and it learns the camera angle and the verbal tic along with it.

At the scale of 940 million images, no human marked which two belonged together. Two of the three texts attached to each image are recaptions written by LLaVA.

The paper also ran the experiment with the captioner removed. Replace those recaptions with paraphrases produced from text alone and alignment drops from 0.107 to 0.060. Run it the other way, pairing two outputs of the same captioner, and the advantage of good pairing shrinks to a factor of 1.04. The doubling appears only once human-written alt text is in the mix.

None of this is buried. The first line of the limitations section names where good views come from as the main caveat. The seed that fell below the 72B model and the 43 contaminated evaluation captions are both printed in the appendix. That is why the numbers could be recounted from outside ten days later.

Pairing by itself buys nothing. The value shows up when the two things paired came from genuinely different places, and that fact is written in no column of the dataset. It lives in a folder layout, a loading script, or somebody's memory.

Pebblous computes the quality of AI training data with DataClinic. Missing values and outliers sit inside a cell. The pairing rule sits between them.

The next lever is not a bigger model. It is writing down, in the data spec, what was treated as the same thing.

▶ Read: https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #YannLeCun #JEPA #PlatonicRepresentationHypothesis #SelfSupervisedLearning #SyntheticData #MultiviewData

---

## Twitter/X (KO)

얀 르쿤의 새 논문에서 작은 모델이 거대 언어 모델을 앞선 자리는 표현 정렬 하나다. 그런데 그 모델이 읽은 글은 셋 중 둘이 이미지를 본 AI가 쓴 것이다.

지렛대가 모델 크기에서 무엇과 무엇을 같은 것으로 묶을지로 옮겨 간 자리다.

https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/ko/

#페블러스 #데이터품질 #YannLeCun #JEPA

---

## Twitter/X (EN)

In Yann LeCun's new paper the small model leads on exactly one measure: how closely its internal representation matches a vision encoder's. Two of the three texts it learned from were written by an AI that had seen the image.

The lever has moved from model size to what gets paired with what.

https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/en/

#Pebblous #DataQuality #YannLeCun #JEPA

---

## Facebook (KO)

"데이터 40배 적게."

어느 해설 영상의 썸네일에 적힌 이 한 줄이 며칠 전 피드를 지나갔습니다.

논문이 적은 수는 셋입니다. 표본 42배, 텍스트 토큰 14배, 고유 이미지 435배.

40배는 그 셋 중 어느 것도 아닙니다. 넷째 수를 만들려면 단위를 지워야 하는데, 지운 쪽이 더 외우기 쉬운 수가 됩니다.

그래서 원문을 열었습니다. 랜들 발레스트리에로와 얀 르쿤이 10월 29일에 올린 논문입니다.

머리기사가 가져간 쪽은 작은 모델이 거대 언어 모델을 앞섰다는 비교였지만, 논문이 한계 절 첫 줄에 올려 둔 유보는 다른 자리에 있었습니다. 좋은 뷰는 어디서 오는가.

좋은 뷰는 같은 장면을 따로 관측한 둘입니다. 한 사건을 찍은 다른 사진 둘, 한 장면을 보고 다른 사람이 쓴 캡션 둘.

9억 4천만 장 규모에서 그 둘을 짝지어 준 쪽은 사람이 아니었습니다. 이미지 한 장에 붙은 텍스트 셋 가운데 둘이 LLaVA가 쓴 재캡션입니다.

그 둘을 이미지를 한 번도 보지 않은 문장으로 갈아 보면, 정렬 점수가 0.107에서 0.060으로 내려갑니다.

저는 이 자리를 '짝짓기 사양'이라고 부르고 싶습니다. 무엇을 모았는가가 아니라, 무엇과 무엇을 같은 것으로 묶었는가.

"우리 데이터에서 이 둘은 같은 것이라고 적어 준 쪽은 누구입니까? 사람입니까, 모델입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 결측과 이상치는 한 칸 안에 있지만, 짝짓기 규칙은 칸과 칸 사이에 있습니다. 칸 사이를 보는 항목은 만들기도 자동화하기도 어렵습니다.

반례도 논문의 같은 표에 함께 실려 있습니다. 같은 캡셔너가 같은 틀로 쓴 글 둘만 묶으면, 좋게 묶든 나쁘게 묶든 결과가 거의 달라지지 않았습니다.

개수를 늘리는 일과 결을 늘리는 일은 다른 일이었습니다.

그 구분이 적히는 칸은 아직 어느 데이터셋에도 없습니다.

전문 → https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/ko/

#페블러스 #데이터클리닉 #데이터품질 #YannLeCun #JEPA #합성데이터

---

## Facebook (EN)

"40× less data."

That line sat on the thumbnail of an explainer video that went past my feed a few days ago.

The paper gives three numbers. 42 times in samples, 14 times in text tokens, 435 times in unique images.

Forty is none of them. To arrive at a fourth number you have to erase the unit, and the version with the unit erased is the one that is easier to carry around.

So I opened the paper. Randall Balestriero and Yann LeCun, posted 29 October.

The headlines took the comparison between a small model and the giant language models. The caveat the authors put in the first line of their limitations section points somewhere else. Where do good views come from.

A good view is two separate observations of one scene. Two photographs of the same event. Two captions written by two different people looking at the same thing.

At the scale of 940 million images, no person marked which two belonged together. Two of the three texts attached to each image are recaptions written by LLaVA.

Swap those two for sentences produced without ever seeing the image, and alignment falls from 0.107 to 0.060.

I have started calling this the "pairing spec". Not what was collected, but what was treated as the same thing.

"Who decided, in our data, that these two are the same thing? A person, or a model?"

Pebblous computes the quality of AI training data with DataClinic. Missing values and outliers sit inside a cell; the pairing rule sits between cells. Rules that live between cells are hard to specify and harder to automate.

The counterexample is printed in the same table. Pair two texts written by the same captioner from the same template, and pairing them well or badly made almost no difference.

Adding more samples and adding more grain turned out to be two different jobs.

No dataset has a column for that distinction yet.

Read the full piece → https://blog.pebblous.ai/report/lecun-platonic-representation-good-views/en/

#Pebblous #DataClinic #DataQuality #YannLeCun #JEPA #SyntheticData
