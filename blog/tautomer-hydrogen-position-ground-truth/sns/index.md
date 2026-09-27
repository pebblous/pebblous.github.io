# SNS 홍보 글: 신약을 찾는 AI는 사람이 짐작한 원자를 정답으로 배운다

> 소스: blog/tautomer-hydrogen-position-ground-truth/
> 생성일: 2026-09-28
> URL: https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

전 세계 신약 연구가 표준으로 쓰는 단백질 구조 데이터에서, 분자 126건의 수소 자리가 잘못 적혀 있을 가능성이 짚였다.

뉴욕대 화학과 연구진이 9월 23일 《케미컬 사이언스》에 실은 논문이다. X선 결정학은 전자에 부딪혀 튕긴 빛으로 원자 자리를 알아내는데, 수소는 전자가 하나뿐이라 되돌아오는 신호가 거의 없다. 단백질 결정의 해상도로는 그 희미한 신호를 가려내지 못한다. 그래서 단백질 구조 데이터베이스에 적힌 수소 자리는 실험이 본 값이 아니라, 사람이 화학 지식으로 그럴듯한 형태를 골라 채워 넣은 값이다. 그 선택은 도킹과 자유에너지 계산으로 흘러가고, 결합력 예측 모델을 학습시키고 채점하는 데이터셋에도 그대로 물려받는다.

연구진은 수소가 실제로 보이는 자료를 따로 구했다. 주로 중성자 회절로 결정된 소분자 결정이다. 중성자는 전자가 아니라 원자핵에 부딪히고 수소의 핵은 그것을 꽤 세게 튕겨 내기 때문에, X선이 놓치던 원자가 잡힌다. 그렇게 모은 분자가 12만여 개다.

학습을 마친 모델을 표준 데이터셋 PDBbind에 걸자, 토토머가 여럿 가능한 리간드 5,075건 가운데 279건이 데이터베이스에 적힌 형태와 어긋났다. 모델이 다르다고 했다는 사실만으로는 어느 쪽이 맞는지 알 수 없으니, 연구진은 구조 자체에 물었다. 수소 자리를 바꿨을 때 단백질과 맺는 수소결합이 늘고 짝을 못 찾은 극성 원자가 동시에 줄어드는가. 두 조건이 함께 성립한 126건만 재지정 후보로 남았고, 이들을 다시 도킹하자 실측 결합력과의 오차가 줄었다.

논문은 대표 수치가 가리는 것도 같은 지면에 적는다. 널리 인용되는 정밀도 0.88은 평가셋 다섯 개를 한 통에 부어 잰 값이다. 물속 기준 평가셋만 떼어 재면 0.72로 내려간다. 결정 안에서 안정한 형태와 물에 녹았을 때 우세한 형태가 같지 않기 때문이다.

460만 개 화합물을 3.2시간에 처리했다는 수치도 마찬가지다. 함께 시험한 라이브러리 가운데 가장 수월한 쪽에서 나온 값이고, 화합물 수가 더 적은 다른 라이브러리는 31시간이 걸렸다.

정답지에 결손이 있으면 그 정답지로 채점한 점수에는 결손이 드러나지 않는다. 이 분야는 대조할 두 번째 실험이 있었다는 점에서 운이 좋은 편이었다.

▶ 전문: https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #신약개발AI #토토머 #단백질구조데이터 #AIReadyData

---

## LinkedIn (EN)

A neural network trained on crystals where hydrogen is actually visible has flagged 126 molecules in a standard drug-discovery dataset whose recorded hydrogen positions may be wrong.

The paper, from chemists at New York University, appeared in Chemical Science on September 23. X-ray crystallography places atoms by watching beams scatter off electrons, and hydrogen carries a single electron, so at the resolution of protein crystals it returns almost no signal. The hydrogen sites recorded in protein structure databases are therefore not what the experiment saw. Someone picks a chemically plausible arrangement and fills them in, and that choice then travels into docking, into free-energy calculations, and into the datasets used to train and score binding-affinity models.

So the team went looking for experimental material that has seen hydrogen. Small-molecule crystals, determined primarily by neutron diffraction, supplied it: a neutron collides with the nucleus rather than the electron cloud, and a hydrogen nucleus scatters it strongly. More than 120,000 molecules came with a hydrogen position an experiment had genuinely pinned down.

Run over PDBbind, the trained model disagreed with the recorded form in 279 of the 5,075 ligands that can take more than one tautomer. Disagreement on its own settles nothing, so the researchers put the question to the structure: when the hydrogen moves to where the model predicts, does the count of hydrogen bonds with the protein go up while the count of polar atoms left without a partner goes down? Both held in 126 cases, and rescoring those complexes narrowed the gap to measured binding affinity.

What the headline figures cover up is printed in the same paper. The widely quoted precision of 0.88 is pooled across five test sets. Measured on its own, the aqueous set gives 0.72, because the form that is stable inside a crystal is not the form that dominates in water.

The 4.6 million compounds screened in 3.2 hours works the same way. That figure comes from the least demanding library in the paper's table; another one, holding fewer compounds, took 31 hours.

When the answer key has a defect in it, performance measured against that key will not show the defect. This field was lucky enough to have a second experiment to check the first against. Most datasets have no such thing.

▶ Read: https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DrugDiscovery #Tautomers #ProteinStructure #AIReadyData

---

## Twitter/X (KO)

X선은 수소를 보지 못한다. 그래서 전 세계가 표준으로 쓰는 단백질 구조 데이터에서 수소가 붙어 있는 자리는 실험이 본 값이 아니라 사람이 채워 넣은 값이다.

뉴욕대 연구진이 수소가 보이는 소분자 결정으로 AI를 학습시켜 그 채워 넣기를 검사했고, 구조가 편을 들어 준 126건을 재지정 후보로 남겼다.

신약 예측 모델은 그 정답지 위에서 채점받아 왔다.

https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/ko/

#페블러스 #데이터품질 #신약개발AI #토토머

---

## Twitter/X (EN)

X-rays cannot see hydrogen. So in the protein structure data the whole field runs on, the hydrogen sites were not observed. Someone filled them in.

NYU chemists trained a model on crystals where hydrogen is visible, checked those fill-ins, and left 126 ligands in a standard dataset standing as likely mis-assignments.

Drug-binding AI has been graded against that key.

https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/en/

#Pebblous #DataQuality #DrugDiscovery #Tautomers

---

## Facebook (KO)

시험지를 돌려받으면 우리는 틀린 문항부터 셉니다. 옆에 놓인 정답지가 어디서 왔는지는 묻지 않습니다.

저도 그랬습니다.

며칠 전에 읽은 화학 논문 한 편이 그 습관을 건드렸습니다.

단백질의 생김새를 알아내는 표준 방법은 X선 결정학입니다. 다만 이 방법은 수소를 보지 못합니다. 수소는 전자를 하나만 가지고 있어 되돌아오는 신호가 거의 없습니다.

그래서 전 세계가 표준으로 쓰는 단백질 구조 데이터에서 수소가 붙어 있는 자리는 실험이 본 값이 아닙니다.

사람이 화학 지식으로 그럴듯한 형태를 골라 채워 넣은 값입니다.

실험이 본 뼈대 위에 사람의 판단이 한 겹 얹혀 있는 셈입니다. '짐작된 한 겹'입니다.

신약 후보가 단백질에 어떻게 달라붙는지 계산하는 프로그램도, 결합력을 예측하는 AI 모델도 그 한 겹을 입력으로 받습니다. 모델을 채점하는 기준 데이터가 물려받는 것도 같은 한 겹입니다.

뉴욕대 연구진은 수소가 실제로 보이는 자료를 따로 구했습니다. 중성자로 찍은 소분자 결정입니다. 중성자는 전자가 아니라 원자핵에 부딪히기 때문에, X선이 놓치던 수소를 잡아냅니다.

그 자료로 배운 모델을 표준 데이터셋에 걸었더니, 수소 자리가 여럿일 수 있는 리간드 5,075건 가운데 279건이 데이터베이스에 적힌 형태와 어긋났습니다. 그중 수소 자리를 바꿨을 때 단백질과의 수소결합이 늘고 짝 없는 극성 원자가 줄어든 126건이 재지정 후보로 남았습니다.

다만 126이라는 숫자 자체가 이 이야기의 중심은 아닙니다.

이 결손이 더 좋은 모델에서 나온 것이 아니라, 다른 출처의 실험 자료를 옆에 놓고 나서야 드러났다는 것이 중심입니다.

페블러스가 모델 교체보다 데이터 진단을 앞에 두는 것도 같은 이유입니다. 정확도를 한 칸 올리는 일보다, 그 한 칸을 재는 자가 어디서 왔는지 아는 편이 먼저입니다.

"정답지에 적힌 이 원자는, 실험이 본 것입니까 사람이 채워 넣은 것입니까?"

이 분야에는 옆에 놓을 두 번째 실험이 있었습니다. 단백질 결정에서 안 보이던 수소가 소분자 결정에서는 보였고, 그것도 12만 개가 넘는 분자에 쌓여 있었습니다.

대부분의 데이터에는 그런 두 번째 실험이 없습니다. 라벨을 붙인 사람이 한 번 붙였고, 그것을 검산할 독립된 관측이 없습니다.

이 논문을 덮고 나서 제가 먼저 해 보려는 일은, 우리가 쓰는 기준 데이터가 어떻게 만들어졌는지 적힌 문서를 찾는 것입니다. 그런 문서가 있기는 한지부터 아직 모르겠습니다.

▶ 전문: https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/ko/

#페블러스 #신약개발AI #토토머 #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

When a graded exam comes back, we count the questions we got wrong. Nobody asks where the answer key beside them came from.

I never did either.

A chemistry paper I read a few days ago went after that habit.

The standard way to work out the shape of a protein is X-ray crystallography. It cannot see hydrogen. A hydrogen atom carries a single electron, so almost nothing comes back.

Which means that in the protein structure data the whole field runs on, the sites where hydrogen sits are not what the experiment saw.

They are arrangements a person judged chemically plausible and filled in.

A layer of human judgment rests on top of the skeleton the experiment did resolve. Call it "the guessed layer."

The programs that calculate how a drug candidate sticks to a protein take that layer as input. So do the models that predict binding affinity. So does the reference data those models are graded against.

Chemists at New York University went looking for material that has seen hydrogen: small-molecule crystals imaged with neutrons, which collide with the nucleus rather than the electron cloud and so pin down the atom X-rays miss.

Running a model trained on that material over a standard dataset, 279 of the 5,075 ligands that can take more than one form disagreed with what the database recorded. In 126 of them, moving the hydrogen added bonds with the protein and left fewer polar atoms without a partner, and those 126 stayed on the table as likely mis-assignments.

The number itself is not quite the center of this story.

The center is that the defect surfaced not because someone built a better model, but because experimental material from a different source was finally laid down beside the first.

This is why we put data diagnosis ahead of swapping models. Knowing where the yardstick came from comes before moving the accuracy up a notch.

"This atom in the answer key: did an experiment see it, or did a person fill it in?"

This field had a second experiment to lay alongside the first. Hydrogen invisible in protein crystals turned out to be visible in small-molecule crystals, piled up across more than 120,000 of them.

Most data has no such second experiment. Whoever labeled it labeled it once, and no independent observation exists to check the arithmetic.

What I want to do after closing this paper is go looking for the document that says how our own reference data was built. I do not yet know whether one exists.

▶ Read: https://blog.pebblous.ai/blog/tautomer-hydrogen-position-ground-truth/en/

#Pebblous #DrugDiscovery #Tautomers #DataQuality #DataClinic #AIReadyData
