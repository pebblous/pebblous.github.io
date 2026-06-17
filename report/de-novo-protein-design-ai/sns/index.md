# SNS 홍보 글: AlphaFold이 접은 단백질을, 이제 AI가 처음부터 설계한다

> 소스: report/de-novo-protein-design-ai/ko/index.html
> 생성일: 2026-06-17
> URL: https://blog.pebblous.ai/report/de-novo-protein-design-ai/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

단백질 결합체를 처음부터 설계해 실험에 올리면, 이제 100개 중 수십 개가 실제로 표적에 달라붙는다. 전통 Rosetta 방식에서는 1%도 안 되던 일이다.

RFdiffusion이 2023년에 성공률을 두 자릿수 배로 끌어올린 뒤, 2025년 BindCraft는 평균 수십 퍼센트대를 보고했다. 흥미로운 건 BindCraft가 새 모델을 학습시키지 않았다는 점이다. AlphaFold2의 가중치를 재활용하고 설계를 다시 접어 보는 필터를 끼워 넣은 파이프라인 개선만으로 10배 이상의 성공률을 얻었다.

데이터는 같은 방향을 가리킨다. 단백질 적합도 예측에서는 약 30억 파라미터를 넘기면 더 큰 모델이 오히려 나빠지는 임계가 관측됐다. 정작 희소한 건 모델이 아니라 실험으로 검증된 정답이다. 실측 PDB 구조는 약 24만 개인데, 예측 구조는 2억 개가 넘는다.

물론 헤드라인 숫자는 표적에 따라 88%에서 한 자릿수까지 출렁이고, 음성 데이터가 거의 없어 모델은 무엇이 실패하는지를 배우지 못한다. 성공률의 천장을 정하는 건 파라미터 수가 아니라 모델이 학습하는 실측 데이터의 품질이다.

↗ 링크는 댓글에

#페블러스 #데이터품질 #데이터저널리즘 #AIReadyData #단백질설계 #신약개발 #AlphaFold #RFdiffusion #BindCraft #DataClinic

---

## LinkedIn (EN)

Design a protein binder from scratch, put a hundred of them on the bench, and now dozens actually stick to the target. The traditional Rosetta route managed under 1%.

RFdiffusion pushed hit rates up by two orders of magnitude in 2023, and by 2025 BindCraft was reporting averages in the tens of percent. The telling part: BindCraft trained no new model. It reused AlphaFold2's weights and added a refold filter, and that pipeline change alone delivered a 10x jump.

The data points the same way. In protein fitness prediction, performance degrades past roughly 3 billion parameters. What's scarce isn't the model but the experimentally verified answer. There are about 240,000 measured PDB structures against more than 200 million predicted ones.

Headline numbers swing from 88% to single digits depending on the target, and with almost no negative data, models never learn what fails. The ceiling on hit rate isn't parameter count. It's the quality of the measured data a model is aligned on.

↗ Link in the comments

#Pebblous #DataQuality #DataJournalism #AIReadyData #ProteinDesign #DrugDiscovery #AlphaFold #RFdiffusion #BindCraft #DataClinic

---

## Twitter/X (KO)

단백질 결합체를 처음부터 설계해 실험에 올리면, 이제 100개 중 수십 개가 작동한다. 전통 방식은 1%도 안 됐다.

성공률을 올린 건 더 큰 모델이 아니라 설계·합성·측정·피드백이 도는 실측 데이터 루프였다.

https://blog.pebblous.ai/report/de-novo-protein-design-ai/ko/

#페블러스 #데이터품질 #단백질설계 #AlphaFold #BindCraft

---

## Twitter/X (EN)

Design a protein binder from scratch, and now dozens out of a hundred actually bind. The old way managed under 1%.

What moved the needle wasn't a bigger model but a loop of measured data feeding back into design.

https://blog.pebblous.ai/report/de-novo-protein-design-ai/en/

#Pebblous #ProteinDesign #AlphaFold #BindCraft

---

## Facebook (KO)

AlphaFold이 단백질이 어떻게 접히는지를 풀어냈을 때, 이제 단백질 문제는 거의 끝났다고들 했습니다.

그런데 요즘 논문들이 향하는 곳은 정반대였습니다.

이미 있는 단백질을 읽어 내는 일이 아니라, 자연에 한 번도 존재한 적 없는 단백질을 처음부터 짓는 일.

"이 표적에 달라붙는 단백질을 만들어 줘"라고 주문하면 모델이 새 서열과 구조를 생성합니다. 정답이 미리 없는 문제라, 맞게 만들었는지는 오직 합성하고 실험해 봐야만 압니다. 그렇게 1%도 안 되던 성공률이, 이제 타깃당 백 개 남짓만 만들어도 그중 수십 개가 작동하는 자리까지 왔습니다.

그럼 무엇이 이 도약을 만들었을까요? 더 큰 모델이었을까요?

데이터는 다른 답을 가리켰습니다. BindCraft라는 파이프라인은 새 모델을 학습시키지 않았습니다. 기존 가중치를 재활용하고 설계를 다시 접어 보는 방식을 바꾼 것만으로 성공률이 열 배 넘게 올랐습니다. 실험으로 검증된 단백질 구조는 약 24만 개인데 AI가 예측한 구조는 2억 개가 넘으니, 재료는 폭증했지만 정답은 그 1/870 수준에 머뭅니다. 정작 희소한 건 모델이 아니라 신뢰할 수 있는 실측이었던 셈입니다.

저는 이 대목을 '실측 데이터 루프'라고 부르고 싶습니다. 설계하고, 만들고, 재고, 그 결과를 다시 설계로 되먹이는 회로. 회전이 빠른 실험실일수록 단지 일을 빨리 하는 게 아니라, 더 똑똑해지는 모델을 가집니다.

AI가 가설과 설계를 스스로 쏟아내기 시작한 시대에, 사람에게는 무슨 일이 남을까요. 이 리포트가 도달한 답은, 무엇을 먼저 측정하고 어떤 데이터를 신뢰할지 정하는 일 — 결국 데이터 큐레이션으로 수렴한다는 것이었습니다. 페블러스가 DataClinic으로 다뤄 온 라벨 품질의 문제가, 가장 물리적인 단백질의 세계에서 똑같은 얼굴로 되돌아온 셈입니다.

https://blog.pebblous.ai/report/de-novo-protein-design-ai/ko/

#페블러스 #단백질설계 #AlphaFold #BindCraft #DataClinic #AIReadyData #데이터품질

---

## Facebook (EN)

When AlphaFold solved how a protein folds, many of us quietly assumed the protein problem was mostly behind us.

But the papers worth reading lately point the other way.

Not reading proteins that already exist, but building ones that nature never made.

You ask for "a protein that binds this target," and the model generates a new sequence and shape. There's no answer key waiting. The only way to know if it worked is to synthesize it and run the experiment. That used to succeed under 1% of the time. Now you can make about a hundred designs per target and watch dozens of them actually bind.

So what made the leap? A bigger model?

The data says otherwise. One pipeline, BindCraft, trained no new model at all. It reused existing weights and changed how it filtered designs, and the hit rate rose more than tenfold. There are roughly 240,000 experimentally verified structures against more than 200 million predicted ones, so the raw material exploded while the verified answers stayed at about one part in 870. What's scarce was never the model. It was the trustworthy measurement.

I keep coming back to one phrase for this: the measured-data loop. Design, make, test, feed the result back into design. A lab that spins this loop faster doesn't just work faster. It ends up with a smarter model.

In an age where AI pours out hypotheses on its own, what's left for us? The answer this report arrives at is deciding what to measure first and which data to trust. That is data curation. The label-quality problem Pebblous has worked on through DataClinic comes back wearing the same face, here in the most physical corner of biology.

https://blog.pebblous.ai/report/de-novo-protein-design-ai/en/

#Pebblous #ProteinDesign #AlphaFold #BindCraft #DataClinic #AIReadyData #DataQuality

---

## Medium (EN)
<!-- ~900 words, sns-cover voice lengthened. Source: report/de-novo-protein-design-ai/sns/medium.html -->

See `report/de-novo-protein-design-ai/sns/medium.html` for the import-ready HTML version.
