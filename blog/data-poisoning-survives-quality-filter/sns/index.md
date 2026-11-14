# SNS 홍보 글: 데이터 오염, 열에 아홉을 걸러도 그대로 남는다

> 소스: blog/data-poisoning-survives-quality-filter/ko/index.html
> 생성일: 2026-10-07
> URL: https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

미세조정용 데이터에서 품질 점수가 낮은 순서로 90%를 걸러냈다. 노골적으로 유해한 표본은 한 개도 남지 않았는데, 그 선별을 통과하도록 다듬어 둔 표본은 열에 아홉이 그대로 남았다.

충칭대와 저장대 연구진이 10월 1일 arXiv에 올린 실험이다. 무해한 지시 데이터 1,900개에 손본 표본 100개를 섞고, 선별을 거친 뒤 남은 데이터로 모델을 미세조정했다.

그 모델의 유해 응답 점수는 5점 만점에 4.01까지 올랐다. 깨끗한 데이터로 같은 과정을 거친 모델은 1.75 아래에 머물렀다.

품질 선별기는 글을 읽는다. 문장이 정확한지, 지시와 응답이 맞물리는지를 본다. 위험은 다른 자리에 있다. 표본이 학습 중에 모델 파라미터를 어느 쪽으로 미는지다. 연구진이 만든 표본은 글의 표면만 다듬어 점수를 올리고, 미는 방향은 노골적 유해 표본과 같은 쪽에 그대로 둔다.

안전 분류기를 하나 더 얹는 대응도 같이 실험했다. 같은 표본 100개 가운데 93개를 LlamaGuard가 안전으로 분류했다. 같은 도구가 노골적 유해 표본은 87개를 위험으로 잡아낸다. 관문을 두 개 세워도 둘 다 글을 읽는다면 관문은 사실상 하나다. 논문은 방어책을 내놓지 않았고, 안전 측정은 벤치마크 하나와 Llama·Qwen 계열에 한정된 사전 공개 논문이다.

품질 점수가 높다는 사실과 안전 점검을 통과했다는 사실이 같은 칸에 적혀 있으면 둘을 구별할 방법이 없다. 페블러스가 AI-Ready Data를 말할 때 데이터에 검사 기록을 함께 남기라고 하는 이유도 여기에 있다. 통과한 검사만이 아니라 그 검사가 무엇을 보지 않았는지까지 적혀 있어야 한다.

▶ 전문: https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터오염 #AI안전 #파인튜닝 #AIReadyData #LlamaGuard #DataMan

---

## LinkedIn (EN)

A fine-tuning pipeline discarded the bottom 90 percent of its data by quality score. Every bluntly harmful sample was gone. Of the samples built to pass that filter, nine in ten were still there.

The experiment comes from researchers at Chongqing University and Zhejiang University, posted to arXiv on 1 October. They mixed 100 doctored samples into 1,900 benign instruction samples, ran the selection, and fine-tuned on what survived.

Harmful-answer scores on the resulting models rose as high as 4.01 on a five-point scale. Models fine-tuned on clean data through the same pipeline stayed below 1.75.

A quality selector reads writing. It asks whether a sentence is accurate and whether the response matches the instruction. The risk sits somewhere else, in the direction a sample pushes the model's parameters during training. These samples polish the surface to lift the score and leave that direction pointing the same way the bluntly harmful ones do.

The obvious fix of adding a safety classifier was tested too. LlamaGuard rated 93 of the same 100 samples safe, while flagging 87 of the bluntly harmful ones as unsafe. Two gates that both read writing amount to one gate. The paper proposes no defence, measures safety on a single benchmark, and is a preprint confined to the Llama and Qwen families.

When a high quality score and a passed safety check are written in the same cell, there is no way to tell them apart. That is why Pebblous asks teams to keep the record of what a dataset was checked for next to the data, including what the check never looked at.

▶ Read: https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataPoisoning #AISafety #FineTuning #AIReadyData #LlamaGuard #DataMan

---

## Twitter/X (KO)

미세조정 데이터에서 품질 점수가 낮은 순서로 90%를 걸러냈다. 노골적으로 유해한 표본은 전부 떨어졌고, 그 선별을 통과하도록 다듬은 표본은 91%가 남았다.

품질 점수는 글이 얼마나 읽기 좋은지를 잰다. 그 데이터로 학습한 모델이 안전한지는 재지 않는다.

▶ https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/ko/

#페블러스 #데이터품질 #데이터오염 #AI안전

---

## Twitter/X (EN)

A pipeline discarded the bottom 90 percent of its fine-tuning data by quality score. Bluntly harmful samples all fell out. Samples built to pass the filter survived at 91 percent.

A quality score measures how well a text reads. It does not measure what training on that text does to a model.

▶ https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/en/

#Pebblous #DataQuality #DataPoisoning #AISafety

---

## Facebook (KO)

미세조정에 쓸 데이터를 추리면서 "품질 상위 10%만 남기기"를 고른 적이 있습니다.

그때 제가 한 일은 좋은 데이터를 고른 것이었을까요, 아니면 위험한 데이터를 뺀 것이었을까요.

저는 꽤 오래 그 두 문장을 같은 뜻으로 읽어 왔습니다.

충칭대와 저장대 연구진이 지난 1일 arXiv에 올린 논문을 읽으면서 머문 자리가 여기였습니다.

연구진은 무해한 지시 데이터 1,900개에 손본 표본 100개를 섞고, 품질 점수가 낮은 쪽부터 열에 아홉을 걷어냈습니다. 노골적으로 유해한 표본은 한 개도 남지 않았습니다. 그런데 선별을 통과하도록 다듬어 둔 100개는 거의 그대로 남았고, 남은 데이터로 학습한 모델은 거절하던 질문에 답을 내놓기 시작했습니다.

저는 이런 표본을 "겉보기 양성"이라는 이름으로 기억해 두기로 했습니다.

품질 점수는 글을 읽고 매겨집니다. 문장이 정확한지, 지시와 응답이 맞물리는지.

위험은 거기에 적히지 않습니다. 그 표본이 학습 중에 모델을 어느 쪽으로 미는지에 있습니다.

같은 문장을 두고 한쪽 눈은 잘 쓴 글이라 하고, 다른 쪽 눈은 안전을 깎는 힘이라 합니다. 두 눈이 서로 다른 것을 보고 있는데, 현장에서는 한쪽 눈만 뜨고 둘 다 봤다고 적습니다.

"내가 돌려 온 선별기는 지금까지 무엇을 재고 있었습니까?"

페블러스에서 데이터를 볼 때 값 옆에 그 값이 어떤 검사를 거쳤는지 함께 남겨 두시라고 말하는 이유가 여기에 닿아 있습니다. 통과한 검사만 적어 두면, 그 검사가 보지 않은 자리는 비어 있다는 사실조차 아무도 모르는 채로 지나갑니다. 품질 지표와 안전 지표를 다른 칸에 적는 일은 번거로워 보이지만, 같은 칸에 적힌 둘은 나중에 갈라낼 수가 없습니다.

품질이라고 불러 온 값이 사실은 글이 얼마나 읽기 좋은지였다면, 안전이라고 믿어 온 칸은 아직 아무도 재지 않은 채 비어 있는 셈입니다. 그 칸이 비어 있다는 것을 아는 일과 모르는 일 사이의 거리를, 요즘 자주 생각합니다.

▶ 전문: https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/ko/

#페블러스 #데이터오염 #AI안전 #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

I have sat in front of a data selection step and checked the box that keeps only the top tenth by quality score.

Did I pick the good data, or did I remove the dangerous data?

For a long time I read those two sentences as the same sentence.

That is where I stayed, reading the paper researchers at Chongqing University and Zhejiang University posted to arXiv on the first of this month.

They mixed 100 doctored samples into 1,900 benign instruction samples and then stripped out nine tenths of the pool, starting from the lowest quality scores. Not one of the bluntly harmful samples survived. The 100 built to pass that filter came through almost intact, and the model trained on what was left began answering questions it used to decline.

I have started calling samples like these "benign on the surface."

A quality score is assigned by reading. Is the sentence accurate, does the response meet the instruction.

The risk is not written there. It lives in the direction a sample pushes the model while it trains.

One eye looks at the sentence and calls it well written. The other eye looks at the same sentence and sees a force pulling the model away from safety. The two eyes are watching different things, and in practice we open one of them and record that we checked both.

"What has the selector I keep running actually been measuring?"

This is where our habit at Pebblous comes from, of asking teams to keep the record of what a value was checked for right beside the value. Write down only the checks that were passed and the places a check never looked stay blank without anyone noticing they are blank. Keeping the quality metric and the safety metric in separate columns looks like extra work, but once they share a column there is no way to pull them apart later.

If the number we have been calling quality was only a measure of how well a text reads, then the column we have been calling safety is still empty, unmeasured. The distance between knowing that it is empty and not knowing is what I keep returning to.

▶ Full piece: https://blog.pebblous.ai/blog/data-poisoning-survives-quality-filter/en/

#Pebblous #DataPoisoning #AISafety #DataQuality #DataClinic #AIReadyData
