# SNS 홍보 글: 캡션을 모델이 붙인 1천만 시간짜리 공개 영상 데이터셋

> 소스: blog/laion-bvd-synthetic-captions/ko/index.html
> 생성일: 2026-08-27
> URL: https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

1천만 시간짜리 공개 영상 데이터셋이 나왔는데, 그 영상을 설명한 사람은 한 명도 없습니다.

LAION과 튀빙겐 AI센터가 이번 주 arXiv에 공개한 LAION-BVD입니다. CommonCrawl에서 긁어모은 주소로 영상 8천만 편을 내려받았습니다. 장면 단위로 자른 클립에 붙은 설명문은 20억 파라미터짜리 작은 모델이 20단어 이내로 썼습니다.

그 설명문이 영상과 맞는지는 사람에게 확인받지 않았습니다. 대신 그 캡션으로 학습시킨 모델의 벤치마크 점수가 품질을 증명했습니다. 두 명제는 겹치는 구간이 넓지만 같지 않습니다. 계통적으로 편향된 라벨도 편향의 방향이 평가 벤치마크와 같으면 점수를 올립니다.

논문 부록에 그 간극을 겨눈 실험이 있습니다. 같은 이미지에 붙어 있던 웹 alt-text를 이 파이프라인의 캡션 모델이 다시 쓰게 했습니다. ImageNet 제로샷 정확도는 0.40에서 0.23으로 내려갔고, COCO 검색 재현율은 반대로 올라갔습니다. 사진도 학습 방법도 같고 설명문의 저자만 달라진 결과입니다.

실무로 옮기면 문제는 규모가 아니라 기록입니다. 이 데이터셋은 영상의 출처를 URL 목록으로 남겼지만, 라벨의 출처는 논문 3.2절에 산문으로만 적어 뒀습니다. 어떤 모델이 어떤 프롬프트로 언제 이 라벨을 썼는지가 라벨 옆에 필드로 붙어 있어야 합니다. 그 필드가 없으면 EU AI법이 요구하는 학습데이터 요약의 칸은 나중에 채울 수 없습니다.

페블러스가 데이터 품질을 진단하며 반복해 확인하는 자리도 여기입니다. 라벨의 저자는 파이프라인이 도는 동안에만 기록됩니다.

▶ 전문: https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #합성데이터 #학습데이터 #데이터거버넌스 #LAION #LAIONBVD #CommonCrawl #EUAI법

---

## LinkedIn (EN)

A 10-million-hour open video dataset arrived this week. Nobody described what is in it.

LAION and the Tübingen AI Center posted LAION-BVD to arXiv: 80 million videos pulled down from links scraped out of CommonCrawl, cut into scene-level clips, each clip described by a 2-billion-parameter model in twenty words or fewer.

No human was asked whether those descriptions match the footage. The paper argued for quality by training models on the captions and reporting how they scored on standard benchmarks. Those are related claims, not the same claim. A systematically skewed label still lifts the score when the skew runs the same direction as the benchmark.

An appendix experiment aims straight at that gap. Hand the same images to this pipeline's captioner instead of keeping their web alt-text, and ImageNet zero-shot accuracy falls from 0.40 to 0.23 while COCO retrieval recall moves the other way. Same photographs, same training recipe, different author for the sentence.

The practical lesson is about record-keeping rather than scale. Where the video came from survives as a list of URLs. Where the labels came from lives in section 3.2 as prose. Unless the captioning model, its version, its prompt, and the date sit in a field beside the label, the boxes on the EU AI Act training-data summary template cannot be filled in after the fact.

This is familiar ground for Pebblous, which diagnoses the quality and lineage of training data. The authorship of a label is only recordable while the pipeline is still running.

▶ Read: https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SyntheticData #TrainingData #DataGovernance #LAION #LAIONBVD #CommonCrawl #EUAIAct

---

## Twitter/X (KO)

1천만 시간짜리 공개 영상 데이터셋 LAION-BVD가 나왔습니다. 클립마다 붙은 설명문은 사람이 아니라 작은 모델이 썼고, 그 설명문이 영상과 맞는지는 아무도 확인하지 않았습니다.

규모는 열렸고, 라벨의 저자는 사라졌습니다.

https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/ko/

#페블러스 #데이터품질 #합성데이터 #LAIONBVD

---

## Twitter/X (EN)

LAION-BVD opens 10 million hours of video. Every clip description was written by a small model, and no one checked whether those descriptions match the footage.

The scale arrived. The author of the label did not.

https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/en/

#Pebblous #DataQuality #SyntheticData #LAIONBVD

---

## Facebook (KO)

데이터셋 문서를 열면 라벨을 단 사람들의 흔적이 먼저 보입니다. 몇 명이 붙었고, 서로 얼마나 동의했고, 몇 퍼센트를 다시 검수했는지.

이번 주 arXiv에 올라온 LAION-BVD 문서에는 그 자리가 비어 있었습니다.

CommonCrawl에서 긁은 주소로 영상 8천만 편을 받아 1천만 시간을 모았고, 장면마다 잘라 낸 클립에 설명문을 붙인 것은 20억 파라미터짜리 작은 모델이었습니다.

'저자 없는 라벨'이라고 불러 봅니다.

새로 생긴 관행은 아닙니다. 논문이 비교한 공개 영상 데이터셋 열아홉 개 가운데 사람이 캡션을 쓴 것은 두 개뿐이었습니다. 달라진 것은 관행이 아니라 그 관행이 덮은 면적입니다.

그렇다면 품질은 무엇으로 증명했을까요. 캡션을 사람이 읽어 본 것이 아니라, 그 캡션으로 학습시킨 모델의 시험 점수로 대신했습니다. 성적은 나쁘지 않았습니다.

다만 논문 부록에 실험이 하나 들어 있습니다. 사진은 그대로 두고 설명문의 저자만 바꿨더니, 한쪽 지표는 내려가고 다른 쪽은 올라갔습니다. 누가 썼느냐가 데이터셋의 성격을 바꾼다는 뜻입니다.

"그럼 그 저자는 어디에 적혀 있습니까?"

영상의 출처는 URL 목록으로 남아 있습니다. 라벨의 출처는 논문 본문 한 절에 문장으로만 적혀 있습니다. 데이터 옆에는 없습니다.

페블러스가 데이터 품질을 진단하며 자주 확인하는 자리도 거기입니다. 라벨이 맞았는지보다, 라벨을 누가 어떤 설정으로 썼는지가 남아 있는지를 먼저 봅니다. 그 기록은 학습이 끝난 뒤에 소급해서 만들 수 없습니다.

규모는 나중에도 키울 수 있습니다. 저자는 그때 적어 두지 않으면 비어 있는 칸으로 남습니다.

▸ https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/ko/

#페블러스 #데이터클리닉 #데이터품질 #합성데이터 #LAION #LAIONBVD

---

## Facebook (EN)

Open the documentation for a dataset and you usually meet the people who labeled it first. How many of them there were, how often they agreed, what share of the work went back for a second look.

In the LAION-BVD documentation posted to arXiv this week, that place is empty.

Eighty million videos came down from links scraped out of CommonCrawl, ten million hours in all, and the sentence attached to each scene-level clip was written by a 2-billion-parameter model.

Call them labels without an author.

The practice is not new. Of the nineteen open video-text datasets the paper lines up for comparison, two had captions written by people. What changed is not the practice but the ground it now covers.

So what stood in for quality? Not a person reading the captions. Models were trained on them and their benchmark scores were reported instead. The scores held up well enough.

There is one experiment in the appendix, though. Keep the photographs, change only who writes the sentence, and one metric falls while another rises. Who wrote the label turns out to change what the dataset is.

"So where is that author written down?"

Where the video came from survives as a list of URLs. Where the labels came from appears in one section of the paper, in prose. It is not beside the data.

This is the place we look at first in data quality work at Pebblous. Before asking whether a label is correct, we ask whether anything records who wrote it and under what settings. That record cannot be reconstructed once training is done.

Scale can be added later. An author, if left unwritten at the time, stays an empty field.

▸ https://blog.pebblous.ai/blog/laion-bvd-synthetic-captions/en/

#Pebblous #DataClinic #DataQuality #SyntheticData #LAION #LAIONBVD
