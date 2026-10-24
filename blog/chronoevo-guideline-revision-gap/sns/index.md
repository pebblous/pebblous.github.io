# SNS 홍보 글: ChronoEvo: AI는 바뀐 진료 지침을 알고도 안 따른다

> 소스: blog/chronoevo-guideline-revision-gap/ko/index.html
> 생성일: 2026-10-25
> URL: https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

바뀐 진료 지침을 모델 손에 먼저 쥐여 줬다. 개정이 있었다는 사실은 열에 아홉이 알아봤고, 바뀐 권고대로 답한 것은 절반을 조금 넘었다.

미네소타대 연구진이 10월 22일 arXiv에 올린 ChronoEvo는 진료 지침에서 권고가 고쳐진 자리 1,709건을 모아 LLM 14종을 시험했다. 설계의 핵심은 채점 칸을 셋으로 나눈 것이다. 개정을 알아봤는가, 임상적으로 맞는가, 바뀐 권고를 온전히 담았는가.

알아본 비율은 90.8%, 온전히 담은 비율은 58.5%였다. 임상의 두 사람이 자동 채점 결과를 가린 채 300건을 다시 매기자 같은 격차는 더 벌어졌다.

떠오르는 처방 두 가지는 통하지 않았다. 모델을 키워도 14종 전부에 격차가 남았고, 가장 성적이 좋은 모델도 자기 인지율보다 20.1%p 아래에서 멈췄다. 최신 권고를 우선하라고 명시하자 옛 문장이 덜 나오기는 했지만 완전 반영률은 거의 그대로였다. 가장 많이 어긋난 자리는 쓰던 권고를 다른 권고로 갈아 끼운 개정이었다.

최신 자료를 가지고 있다는 것과 출력이 그 자료를 따라갔다는 것은 따로 확인해야 하는 두 가지인데, 보통은 앞의 것만 확인한다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다.

▶ 전문: https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #ChronoEvo #의료AI #LLM평가 #진료지침 #arXiv

---

## LinkedIn (EN)

Researchers handed the models the revised clinical guideline before asking the question. Nine answers in ten noticed the revision. Barely half carried it through.

A University of Minnesota team put ChronoEvo on arXiv on October 22. It gathers 1,709 recommendations that clinical guidelines had rewritten and runs 14 models through them. The scoring is what sets it apart. Recognition, clinical correctness and full incorporation were marked in three separate columns instead of being rolled into a single score.

Recognition came in at 90.8%, full incorporation at 58.5%. Two clinicians who re-scored 300 cases blind to the automatic labels pushed that distance wider still.

Neither obvious remedy closed it. Scaling up left a gap in all 14 models, and the strongest performer still finished 20.1 points below its own recognition rate. Instructing the model in plain words to prioritize the newest recommendation did reduce how often superseded wording survived, but full incorporation barely moved. The revisions that went wrong most often were the ones that swapped an existing recommendation for a different one.

Holding the current source and producing an answer that follows it are two separate things, and usually only the first gets checked. Pebblous screens the quality of AI training data with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ChronoEvo #MedicalAI #LLMEvaluation #ClinicalGuidelines #arXiv

---

## Twitter/X (KO)

진료 지침이 고쳐진 자리만 모아 언어 모델을 시험했다. 개정이 있었다는 걸 알아본 응답은 90.8%, 바뀐 권고대로 답한 응답은 58.5%.

바뀐 지침의 근거는 프롬프트에 이미 들어 있었다. 검색의 문제가 아니라 검색 다음의 문제다.

https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/ko/

#페블러스 #데이터품질 #ChronoEvo #의료AI

---

## Twitter/X (EN)

They handed the models the revised guideline up front. 90.8% of answers recognized that something had changed. 58.5% actually followed the new recommendation.

Retrieval was not the failure point. What comes after retrieval was.

https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/en/

#Pebblous #DataQuality #ChronoEvo #MedicalAI

---

## Facebook (KO)

"개정됐습니다"라고 먼저 말해 놓고, 바로 이어서 옛날 답을 내놓는 경우가 있습니다.

사람 이야기가 아닙니다.

미네소타대 연구진이 진료 지침에서 권고가 고쳐진 자리만 1,709건 모아, 언어 모델 열네 종에게 같은 상황을 물었습니다. 바뀐 지침의 근거는 질문에 붙여서 미리 넣어 줬습니다. 못 찾아서 틀릴 여지를 없앤 조건이었습니다.

개정이 있었다는 사실은 열에 아홉이 알아봤습니다. 바뀐 권고대로 답한 것은 절반을 조금 넘었습니다.

제가 다시 읽은 대목은 그 둘 사이의 거리가 아니라, 어떤 개정에서 가장 많이 어긋났는가였습니다.

없던 권고를 새로 더한 개정은 잘 따라왔습니다. 쓰던 권고를 다른 권고로 갈아 끼운 개정에서 가장 많이 어긋났습니다. 대상을 좁힌 개정, 권고의 강도를 낮춘 개정도 비슷했습니다.

'지우는 개정'이라고 부를 만한 묶음입니다.

읽는 일은 됩니다. 덜어 내는 일이 안 됩니다.

"우리 자료는 최신인가?"

이 질문은 어디서나 합니다. 그 뒤에 붙어야 할 질문은 그만큼 자주 듣지 못했습니다.

"최신으로 갈아 끼웠더니, 답이 정말 달라졌는가?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 입력을 새것으로 바꾸는 일과 출력이 그 새것을 따라가는 일은, 둘을 같이 걸어 보기 전까지 끝내 따로 있습니다.

전문: https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #ChronoEvo #의료AI #진료지침

---

## Facebook (EN)

"Yes, that was revised." And then the old answer, one line later.

Not a person.

A University of Minnesota team gathered 1,709 places where a clinical guideline had rewritten its own recommendation, and put the same situation to fourteen language models. The revised guideline travelled with the question. Nothing was left for a model to fail to find.

Nine answers in ten saw that a revision had happened. Just over half answered the way the revision asked.

The part I reread was not the span between those two figures. It was which revisions went wrong most often.

Recommendations newly added came through intact. Recommendations swapped out for different ones came through worst of all. So did the ones that narrowed who a recommendation applied to, or softened how firmly it was urged.

Call them the deleting revisions.

Reading works. Removing does not.

"Is our source current?"

Everyone asks that one. The question standing behind it gets asked far less often.

"Once we swapped the current source in, did the answer actually change?"

Pebblous screens the quality of AI training data with DataClinic. Replacing the input and having the output follow that replacement stay two separate events until both are put to the same question.

Read: https://blog.pebblous.ai/blog/chronoevo-guideline-revision-gap/en/

#Pebblous #DataClinic #DataQuality #ChronoEvo #MedicalAI #ClinicalGuidelines
