# SNS 홍보 글: 지침 없이 만든 Adaption Labs 학습 데이터, 누가 검수하나?

> 소스: blog/adaption-labs-invent-a-dataset/
> 생성일: 2026-11-08
> URL: https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사라 후커가 세운 Adaption Labs의 datasets.invent는 과제를 설명한 문단 하나를 받아 학습 데이터 수만 행을 돌려준다. 회사가 공식 블로그에 적은 조건은 이렇다. 시드 코퍼스도, 미리 정해 둔 스키마도, 자세한 라벨링 지침도 들고 올 필요가 없다.

합성 데이터 생성기는 2010년대부터 있었다. 이번에 빠진 칸은 생성이 아니라 그 앞의 구조 정의다. 지금까지는 사람이 표의 모양을 정하고, 어떤 과제가 몇 퍼센트씩 섞일지 적고, 무엇을 맞는 답으로 칠지 지침에 써 둔 다음, 그 틀에 맞춰 예제를 뽑는 단계만 자동화했다. 앞의 세 가지가 이번에 호출 매개변수 한 줄로 줄었다.

라벨링 지침에는 쓰임이 둘 있다. 데이터를 만들 때 따르는 틀이고, 다 만든 뒤에 그 데이터가 쓸 만한지 판정할 때 대는 잣대이기도 하다. 두 쓰임이 한 문서에 들어 있어서, 앞쪽이 없어지면 뒤쪽도 같이 없어진다.

성능 근거는 아직 전부 회사가 직접 잰 값이다. 9월에 내건 평균 35% 개선은 자사 연구진이 잡은 학습 설정을 상대로 한 결과였고, 10월 18일 개정판이 올라온 arXiv 기술보고서도 저자 다섯 명이 모두 Adaption Labs 소속이다.

그 보고서는 9월 발표보다 나아진 데가 있다. 바깥 모델 다섯을 같은 조건에 세웠고, 2만 행을 뽑았을 때 완전히 같은 문항이 하나도 없었다. 같은 시험에서 비교 대상 다섯은 6.5%에서 18.8%까지 섞여 나왔다. 다만 주문한 과제에 얼마나 맞는 데이터인지를 재는 항목에서는 Invent가 여섯 생성기 가운데 중간이라고 보고서 스스로 밝혔다.

같은 회사가 자사 데이터 플랫폼을 소개하면서 적어 둔 대목이 하나 더 있다. 품질 요건을 채우지 못한 학습 예제를 체크리스트로 걸러 낸다는 것이다. 품질 요건을 적은 목록을 들고 예제를 하나씩 거르는 일은 라벨링 지침으로 데이터를 검수하는 작업과 같다. 앞문으로 내보낸 문서가 뒷문으로 돌아와 있는 셈인데, 돌아온 것은 사람이 읽을 수 있는 문서가 아니라 제품 안에서 도는 절차다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 점수로 환산해 진단한다. 환산에 쓰는 잣대는 데이터를 받는 쪽이 들고 있어야 한다. 그 잣대가 공급자 제품 안에만 있으면, 받은 데이터를 두고 할 수 있는 말이 좋아 보인다와 이상해 보인다로 줄어든다.

지침을 안 쓰기로 했다면, 지침이 하던 두 번째 일은 어디선가 해야 한다. 받은 데이터에서 100행을 무작위로 뽑아 합격과 불합격을 매겨 보는 것이 그 자리가 비어 있는지 확인하는 가장 빠른 방법이다.

▶ 전문: https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AdaptionLabs #SaraHooker #합성데이터 #학습데이터 #파인튜닝

---

## LinkedIn (EN)

Adaption Labs, the startup Sara Hooker and Sudip Roy founded after leaving Cohere, sells an API that takes one paragraph describing a task and returns tens of thousands of rows of training data. The company blog sets out the terms plainly: no seed corpus, no predefined schema, no detailed labeling guide.

Synthetic data generators are not new. What dropped out this time sits one step before generation. Until now a person fixed the shape of the table, wrote down how the task types would be mixed, and set out what counted as a right answer, and the tooling automated only the drawing of examples. Those three now collapse into a call parameter.

A labeling guide does two jobs. It is the template followed while the data is made, and it is the yardstick held up to the data once it exists. Both live in one document, so losing the first loses the second.

Every performance figure so far is one the company measured itself. The 35 percent average improvement announced in September was scored against configurations its own researchers had set, and the arXiv technical report revised on October 18 carries five authors, all of them at Adaption Labs.

The report is a step up from September in one respect. It put five outside models through the same test, and among 20,000 rows it returned no exact duplicates at all, against 6.5 to 18.8 percent for the rest. On how well the data matches the task it was asked for, though, the report places its own system in the middle of the six.

One more passage sits in the company's write-up of its data platform: a checklist strikes out training examples that miss quality requirements. Holding a list of quality requirements and removing examples one at a time is what reviewing data against a labeling guide looks like. The document went out the front door and came back through the back, no longer as something a person can read but as a procedure running inside the product.

Pebblous appraises the quality of AI training data with DataClinic. The standard behind that appraisal has to sit on the side receiving the data. When it lives only inside the supplier's product, what a buyer can say about what arrives shrinks to "looks good" and "looks off."

If you have decided not to write the guide, the guide's second job still has to happen somewhere. Pull 100 rows at random and see whether anyone can mark each one pass or fail.

▶ Read: https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AdaptionLabs #SaraHooker #SyntheticData #TrainingData #FineTuning

---

## Twitter/X (KO)

시드 코퍼스도 스키마도 라벨링 지침도 들고 올 필요가 없다는 학습 데이터 생성 API가 나왔다. 그 지침에는 쓰임이 둘 있었다. 데이터를 만들 때 따르는 틀이면서, 다 만든 데이터를 판정할 때 대는 잣대이기도 했다. 앞쪽을 없애면 뒤쪽도 같이 없어진다.

성능 근거는 아직 전부 Adaption Labs가 직접 잰 값이다.

https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/ko/

#페블러스 #데이터품질 #AdaptionLabs #합성데이터

---

## Twitter/X (EN)

An API builds training data from a task description, with no seed corpus, schema or labeling guide. That guide did two jobs: the template for making the data, and the yardstick for judging it afterwards. Drop the first and the second goes with it.

Every performance figure so far is Adaption Labs' own.

https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/en/

#Pebblous #DataQuality #AdaptionLabs #SyntheticData

---

## Facebook (KO)

라벨링 지침을 써 본 적이 있으시다면 아실 겁니다.

사흘이면 끝날 줄 알고 시작해서 몇 주를 씁니다. 무엇을 맞는 답으로 칠지 한 줄로 정하는 일이 오래 걸립니다.

그 문서를 안 써도 된다는 API가 있습니다.

Adaption Labs의 datasets.invent입니다. 설명 한 단락과 행 수를 넣으면 지시와 응답을 짝지은 파일이 돌아옵니다. 시드 코퍼스도 스키마도 라벨링 지침도 들고 올 필요가 없다고 회사 블로그에 적혀 있습니다.

합성 데이터 생성기는 오래된 기술입니다. 이번에 빠진 칸은 생성이 아니라 그 앞의 구조 정의입니다.

지침에는 쓰임이 둘 있습니다. 데이터를 만들 때 따르는 틀이고, 다 만든 데이터가 쓸 만한지 판정할 때 대는 잣대이기도 합니다.

검수가 서 있던 토대가 그 문서였습니다. 두 쓰임이 한 문서에 담겨 있어 앞쪽이 없어지면 뒤쪽도 조용히 같이 없어집니다.

회사가 10월 arXiv에 올린 기술보고서를 보면 2만 행에 완전히 같은 문항이 하나도 없었습니다. 비교한 다섯 모델은 6.5%에서 18.8% 사이였으니 손으로 만들기 어려운 숫자입니다. 다만 주문한 과제에 얼마나 맞느냐를 재는 항목에서는 여섯 가운데 중간이었고, 저자 다섯은 모두 그 회사 사람입니다.

제가 오래 본 것은 다른 대목이었습니다.

같은 회사가 자사 데이터 플랫폼 소개에, 품질 요건을 못 채운 예제를 체크리스트로 걸러 낸다고 적었습니다.

품질 요건을 적은 목록을 들고 예제를 하나씩 거르는 일.

라벨링 지침으로 데이터를 검수하는 작업을 다른 말로 부르면 정확히 그것입니다.

'뒷문으로 돌아온 지침'이라고 불러 보고 싶었습니다. 안 써도 된다며 앞문으로 내보냈는데 뒷문으로 들어와 있습니다. 돌아온 것은 사람이 읽을 수 있는 문서가 아니라 제품 안에서 도는 절차이고, 거기 무엇이 적혀 있는지는 공개돼 있지 않습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 점수는 파일 안의 값을 보고 매기는데, 그 값을 합격과 불합격으로 바꿔 줄 문장은 대개 파일 바깥에 있습니다.

"지침 없이 받은 데이터를, 무엇을 잣대로 검수하시겠습니까?"

100행을 무작위로 뽑아 한 줄씩 매겨 보면 드러납니다. 매길 수 없다면 그 품질은 아무도 재지 않은 것입니다.

지침을 안 써도 된다는 말은 반갑습니다. 몇 주가 실제로 돌아오니까요. 다만 그 문서가 하던 두 번째 일은 여전히 누군가의 몫입니다.

▶ 전문: https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #AdaptionLabs #합성데이터 #AIReadyData

---

## Facebook (EN)

Anyone who has written a labeling guide knows how it goes.

You start thinking it will take three days and it takes weeks. Settling what counts as a right answer in one line takes that long.

There is now an API that says you need not write the document at all.

It is datasets.invent, from Adaption Labs. Put in a paragraph describing the data you want and a row count, and a file of instruction and response pairs comes back. No seed corpus, no predefined schema, no detailed labeling guide, the company blog says.

Machines have stamped out synthetic data for years. What dropped out this time is not the generation but the structure definition in front of it.

The guide does two jobs. It is the template followed while the data is made, and the yardstick held up to it once it exists.

That document was the foundation review stood on. Both jobs live in one place, so when the first goes the second quietly goes too.

In the technical report the company put on arXiv in October, 20,000 rows came back with no exact duplicates, against 6.5 to 18.8 percent for the five models it was tested against. On how well the data matches the task it was asked for, though, it lands in the middle of six generators, and all five authors work at the company.

What held me longer was a different passage.

Introducing its data platform, the same company writes that a checklist removes examples missing quality requirements.

Holding a list of quality requirements and striking out examples one at a time.

Reviewing data against a labeling guide is, in other words, exactly that.

'The guide that came back through the back door' is what I wanted to call it. It went out the front with word that nobody needs it and came back in at the rear, no longer a document a person can read but a procedure running inside the product. What it says is not public.

Pebblous gauges the quality of AI training data with DataClinic. A score is worked out from what sits inside the file, and the sentence that turns those values into a pass or a fail usually sits outside.

"Data arrives without a guide. What will you hold it up against?"

Pull 100 rows at random and try to mark each one pass or fail. If nobody can, that quality has never been measured.

Being told you need not write the guide is welcome, and those weeks genuinely come back. The second job that document was doing, though, is still waiting for someone.

▶ Read: https://blog.pebblous.ai/blog/adaption-labs-invent-a-dataset/en/

#Pebblous #DataClinic #DataQuality #AdaptionLabs #SyntheticData #AIReadyData
