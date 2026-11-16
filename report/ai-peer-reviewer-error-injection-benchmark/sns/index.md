# SNS 홍보 글: AI 논문 심사, 모델을 바꿀까 시키는 말을 고칠까?

> 소스: report/ai-peer-reviewer-error-injection-benchmark/
> 생성일: 2026-11-16
> URL: https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

같은 논문에 같은 한 문장을 들려줬는데, 한 모델은 심어 둔 오류 열 개 가운데 하나를 짚었고 다른 모델은 여섯을 짚었다.

케임브리지대학교와 플랫아이언연구소 등의 연구진이 실제 논문 서른 편에 정답을 아는 오류 357개를 심고, AI 심사 체계 열둘에게 찾아 보라고 시켰다. 27개 낱말짜리 지시를 똑같이 줬을 때 최신 모델 셋의 총 검출률은 천체물리 묶음에서 60.5%, 36.7%, 11.9%로 갈렸다. 심사 도구를 고르는 선택이라고 생각했던 자리가, 실은 열에 하나를 잡을지 여섯을 잡을지를 정하는 선택이었다.

모델을 그대로 둔 채 지시만 항목별로 길게 바꾸자 그 폭이 대략 절반으로 좁아졌다. 다만 많이 올라간 쪽은 원래 약하던 모델이다. 천체물리에서 가장 센 모델이 같은 지시로 얻은 것은 0.8%포인트였다. 값도 붙는다. 모델과 샌드박스와 도구 목록을 고정한 채 지시만 갈아 끼운 구성에서 검출은 32.2%포인트 올랐고, 논문 한 편당 비용은 다섯 배, 걸린 시간은 여섯 배가 됐다.

그림자는 두 군데다. 가장 많이 잡아내는 종류인 수학이 가장 많이 헛짚는 종류이기도 해서, 두 묶음 모두 전체 헛짚음의 절반이 수학에서 나왔다. 그리고 오탐률이 가장 낮았던 구성은 수학과 수치 지적을 사실상 내놓지 않는 쪽이었다. 헛짚지 않는 가장 쉬운 방법은 아무것도 짚지 않는 것이다.

가장 깊은 수는 채점하는 쪽에 있다. 거의 같은 모델 셋이 정답지가 있는 판정에서는 0.90으로 서로 맞았고, 정답지가 없는 판정에서는 0.32에서 0.58로 흩어졌다. 판정의 신뢰도를 가른 것은 심판의 성능이 아니라 물음에 정답지가 붙어 있느냐였다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 이 벤치마크가 실무에 남기는 물음은 하나다. 우리 검수기는 일부러 심은 오류를 몇 개나 잡는가. 심어 본 적이 없다면 그 답을 가진 적도 없다.

▶ 전문: https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI논문심사 #피어리뷰 #오류검출 #오탐 #NeurIPS #arXiv

---

## LinkedIn (EN)

Given the same paper and the same one-sentence prompt, one frontier model flagged one planted error in ten and another flagged six.

Researchers at the University of Cambridge, the Flatiron Institute and elsewhere seeded thirty real papers with 357 errors they had the answers to, then set twelve AI peer-review systems loose on them. On a 27-word prompt, total detection among the three frontier models landed at 60.5, 36.7 and 11.9 percent on the astrophysics corpus. A decision that reads as tooling turns out to settle whether one error in ten gets caught, or six.

Swapping that prompt for a long itemized checklist, with the models left alone, closed roughly half the gap. The systems that climbed were the ones that had been weak. On astrophysics the strongest model gained 0.8 points from the same change. The fix is not free either: in a configuration holding the model, the sandbox and the tool list in place, detection rose 32.2 points while cost per paper went up fivefold and wall-clock time sixfold.

Two shadows. Mathematics is both the type of error caught most often and the one wrongly flagged most often, and half of every false positive in both corpora traced back to it. The lowest false-positive rate in the study, meanwhile, belonged to a configuration that barely files a mathematics or numerics flag at all. The cheapest way to avoid a wrong flag is to raise none.

The deepest number sits with the graders. Near-identical panels of three models agreed at 0.90 when the question carried an answer key and scattered between 0.32 and 0.58 when it did not. What separated a solid verdict from a shaky one was not the grader but whether the question had an answer behind it.

Pebblous puts hard numbers on the quality of AI training data with DataClinic. The question this benchmark leaves on the desk is a single one: how many errors planted on purpose does your own review pipeline find? Teams that have never planted any have never held that answer.

▶ Read: https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIPeerReview #PeerReview #ErrorDetection #FalsePositives #NeurIPS #arXiv

---

## Twitter/X (KO)

실제 논문 서른 편에 정답을 아는 오류 357개를 심고 AI 심사 체계 열둘을 돌렸다. 같은 한 문장 지시를 줬는데 모델에 따라 검출률이 다섯 배 넘게 갈렸다.

헛짚는 비율이 가장 낮았던 구성은, 수학과 수치 지적을 사실상 내놓지 않는 쪽이었다.

https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/ko/

#페블러스 #AI논문심사 #피어리뷰 #오탐 #데이터품질

---

## Twitter/X (EN)

Twelve AI peer-review systems were turned loose on thirty real papers seeded with 357 errors whose answers were known. On one shared prompt, detection varied more than fivefold between frontier models.

The lowest false-positive rate belonged to the system that flags almost nothing.

https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/en/

#Pebblous #AIPeerReview #PeerReview #FalsePositives #DataQuality

---

## Facebook (KO)

특별한 문제 없어 보입니다.

검토를 맡긴 쪽에서 이런 답이 돌아오면 보통은 그대로 넘어갑니다.

그런데 그 답이 꼼꼼히 읽어서 나온 것인지 빠르게 훑어서 나온 것인지는, 답만 봐서는 가릴 길이 없습니다.

가릴 방법이 하나 있기는 합니다. 틀린 것을 미리 하나 넣어 두고, 그걸 짚어 오는지 보는 것입니다.

케임브리지대학교와 플랫아이언연구소를 비롯한 연구진이 그 방법을 AI 심사자에게 그대로 적용했습니다. 실제 논문 서른 편에 정답을 아는 오류 357개를 심고, AI 심사 체계 열둘에게 찾아 보라고 시켰습니다.

같은 한 문장을 들려줬는데, 한 모델은 열에 하나를 짚었고 다른 모델은 열에 여섯을 짚었습니다.

이상한 자리는 1등이었습니다.

헛짚는 비율이 가장 낮았던 구성을 열어 보니, 수학과 수치 지적을 사실상 내놓지 않는 쪽이었습니다. 헛짚지 않는 가장 쉬운 방법은 아무것도 짚지 않는 것입니다. 오탐률만 보고 검사기를 고르면 1등은 늘 '조용한 검사기'입니다.

더 깊은 자리도 있었습니다. 거의 같은 모델 셋이 정답지가 있는 판정에서는 서로 0.90으로 맞았는데, 정답지가 없는 판정에서는 0.32에서 0.58로 흩어졌습니다. 흔들린 것은 심판이 아니라 물음이었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 그 일에서 가장 먼저 세는 것도 같습니다. 우리가 심어 둔 결함을 이 파이프라인이 몇 개나 잡는가.

"지난달 우리 검수기가 그냥 통과시킨 파일 가운데, 일부러 심어 둔 오류를 지나친 건 몇 건이었을까요?"

틀린 것을 하나 넣어 보기 전까지는, 그 답을 가진 쪽이 아무도 없습니다.

▶ 전문: https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/ko/

#페블러스 #AI논문심사 #피어리뷰 #오탐 #데이터품질 #데이터클리닉 #NeurIPS

---

## Facebook (EN)

Looks fine to me.

When a document comes back from a reviewer carrying that verdict, most of us simply move on.

But the verdict by itself cannot tell you whether it came from a careful read or a fast one.

There is one way to tell. Put something wrong into the document first, and watch whether it comes back flagged.

A team at Cambridge and the Flatiron Institute, among others, applied that method to AI reviewers. They put 357 errors into thirty real papers, every one of them with a known answer, and sent twelve AI peer-review systems after them.

Handed the same single sentence, one model caught one error in ten and another caught six.

First place is where this gets strange.

The system with the fewest wrong flags turned out to be one that barely files a mathematics or numerics flag at all. The cheapest way to avoid flagging something wrongly is to flag nothing. Pick an inspector by its false-positive rate alone and the winner will always be the quiet inspector.

There was a deeper reading further down the page. Near-identical panels of three models agreed with each other at 0.90 when the question carried an answer key, and scattered between 0.32 and 0.58 when it did not. What moved was not the graders. It was the question.

Pebblous puts hard numbers on the quality of AI training data with DataClinic. The first count in that work is the same one. How many of the defects we put in on purpose does this pipeline catch?

Of the clean verdicts your own review pipeline issued last month, how many were sitting on top of a planted error?

Until something wrong goes in on purpose, nobody holds that answer.

▶ Read: https://blog.pebblous.ai/report/ai-peer-reviewer-error-injection-benchmark/en/

#Pebblous #AIPeerReview #PeerReview #FalsePositives #DataQuality #DataClinic #NeurIPS
