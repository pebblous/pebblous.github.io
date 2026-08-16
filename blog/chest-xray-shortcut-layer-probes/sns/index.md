# SNS 홍보 글: 흉부 X선 AI가 배액관을 붙잡은 지점은 13번째 층이었다

> 소스: blog/chest-xray-shortcut-layer-probes/
> 생성일: 2026-08-17
> URL: https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

흉부 X선 모델이 기흉을 맞힐 때 붙잡은 단서 하나는 폐가 아니라 가슴에 꽂힌 배액관이었습니다. 배액관은 기흉을 치료할 때 넣는 관입니다. 병이 아니라 병을 치료한 흔적입니다.

코펜하겐 IT대학 연구진은 MedCLIP의 비전 인코더를 얼린 채 층마다 선형 분류기를 하나씩 붙여, 그 흔적이 신경망의 어느 깊이에서 잡히는지를 쟀습니다. 앞쪽 블록들에서 나란히 겹쳐 있던 확신도 곡선은 13번째 블록부터 갈라졌고, 배액관이 꽂힌 이미지 쪽이 끝까지 위에 놓였습니다. 스캐너 기종에 따른 차이는 훨씬 앞인 3번째 블록에서 튀었습니다. 전체 AUROC는 무난한 구간이었습니다.

문제는 그다음입니다. NIH-CXR14도 PadChest도 라벨에는 병명만 적혀 있고 배액관이나 장비 기종은 없습니다. 연구진은 다른 팀이 만들어 둔 보강 라벨을 빌려 와야 했고, 배액관 없음으로 표시된 이미지를 손으로 열어 보니 다섯 장 가운데 세 장에서 관이 보였습니다.

페블러스가 데이터 품질 현장에서 반복해 만나는 장면도 여기서 멀지 않습니다. 라벨링 지침은 무엇을 정답으로 적을지에 집중하고, 그 데이터가 어떤 장비와 어떤 조건에서 나왔는지는 파일명이나 담당자의 기억에 남습니다.

의심할 대상이 기록돼 있지 않으면 무엇을 보고 맞혔는지 물을 방법이 없습니다. 제조 검사의 조명과 라인 번호도, 자율주행의 센서 구성과 지역별 도로 규격도 같은 자리에 놓입니다. 결과 라벨 옆에 무엇을 함께 남길지는 정확도 지표보다 먼저 정해지는 문제입니다.

▶ 전문: https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #의료AI #AI편향 #지름길학습 #라벨링스키마 #MedCLIP #arXiv

---

## LinkedIn (EN)

A chest X-ray model reading pneumothorax was leaning, in part, on the drain used to treat it. Not the collapsed lung. The tube a clinician inserts once the diagnosis has already been made.

Researchers at the IT University of Copenhagen froze MedCLIP's vision encoder, attached a linear classifier to every block, and read the model's confidence depth by depth. Through the early blocks the curves sit on top of one another. They separate at block 13, and the drained images stay above the rest to the end. Scanner-related differences appeared far earlier, spiking at block 3. Global AUROC stayed in comfortable territory throughout.

The harder finding concerns the labels. Neither NIH-CXR14 nor PadChest records chest drains or scanner models. The team had to borrow drain annotations another group had built by hand, and when they opened five images marked drain-free, three had a tube visible in a corner.

What we run into in data quality work at Pebblous looks much like this. Annotation guidelines concentrate on what counts as the correct answer, while the equipment and conditions behind the image survive in a filename or in someone's memory.

Nothing can be audited that was never written down. Manufacturing inspection carries lighting rigs and line numbers alongside defect labels, and driving datasets carry sensor stacks and regional road standards. What a schema records beside the answer is a decision, and it gets made long before the accuracy metric arrives.

▶ Read: https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #MedicalAI #ShortcutLearning #AIBias #MedCLIP #arXiv #MICCAI

---

## Twitter/X (KO)

흉부 X선 모델의 층별 확신도 곡선은 13번째 블록부터 갈라졌습니다. 갈라놓은 기준은 기흉이라는 병이 아니라, 기흉을 치료할 때 넣는 배액관이었습니다.

관이 꽂혔다는 사실은 두 공개 데이터셋의 라벨 어디에도 적혀 있지 않습니다.

https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/ko/

#페블러스 #데이터품질 #의료AI #MedCLIP

---

## Twitter/X (EN)

A chest X-ray model's layer-by-layer confidence curves separate at block 13. What separates them is not the collapsed lung. It is the drain inserted to treat it.

Neither public dataset records that the drain is there.

https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/en/

#Pebblous #DataQuality #MedicalAI #MedCLIP

---

## Facebook (KO)

"배액관 없음"이라고 적힌 흉부 X선 다섯 장을 연구자가 직접 열어 봤습니다.

그중 세 장의 구석에 가느다란 관이 걸려 있었습니다.

그 라벨을 채운 것은 사람이 아니라, 다른 팀이 학습시켜 둔 자동 분류기였습니다.

코펜하겐 IT대학 연구진이 이달 arXiv에 공개한 논문에서 저는 이 대목이 본론보다 오래 남았습니다.

본론은 이렇습니다. MedCLIP의 비전 인코더를 얼린 채 층마다 분류기를 하나씩 붙여 확신도를 재 보니, 앞쪽 블록에서 나란히 붙어 있던 곡선이 13번째 블록부터 갈라졌습니다. 갈라놓은 기준은 기흉이라는 병이 아니라, 기흉을 치료할 때 흉강에 넣는 배액관이었습니다.

모델은 병을 본 것이 아니라, 병이 이미 발견된 뒤의 정황을 본 셈입니다.

저는 이런 항목을 '기록되지 않은 촬영 맥락'이라고 부르고 싶습니다.

어떤 장비로 찍었는지, 환자가 어떤 처치를 이미 받은 뒤인지, 병실에서 이동식 장비로 찍은 것인지.

이미지에는 다 남아 있는데 라벨에는 한 줄도 없습니다.

"모델이 무엇을 보고 맞혔는지 물으려면, 그 무엇이 먼저 어딘가에 적혀 있어야 하지 않을까요?"

페블러스가 데이터 품질 현장에서 자주 마주치는 자리도 여기입니다. 라벨링 지침은 대개 무엇을 정답으로 적을지에 집중하고, 그 데이터가 어떤 장비와 어떤 조건에서 나왔는지는 파일명이나 담당자의 기억에 남습니다.

정확도를 올리는 일에는 늘 담당자가 붙습니다. 라벨 옆에 무엇을 함께 적어 둘지는, 대개 아무도 맡고 있지 않습니다.

▸ https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/ko/

#페블러스 #데이터클리닉 #데이터품질 #의료AI #지름길학습 #MedCLIP

---

## Facebook (EN)

A researcher opened five chest X-rays that had been labelled as having no drain.

Three of them had a thin tube resting in a corner of the frame.

The label had not been written by a person. It came from a classifier another group had trained.

That detail stayed with me longer than the main result of the paper the Copenhagen team posted to arXiv this month.

The main result runs like this. Freeze MedCLIP's vision encoder, attach one classifier per block, and read the model's confidence depth by depth. The curves travel together through the early blocks and separate at block 13. What separates them is not the collapsed lung. It is the drain a clinician inserts to treat it.

The model was not reading the illness. It was reading the circumstances that follow once the illness has been found.

I have started thinking of these as unrecorded imaging context.

Which machine took the picture. What treatment the patient had already received. Whether the exposure was made at the bedside with a portable unit.

All of it survives in the image. None of it appears in the label.

"To ask what a model was looking at, does that something not have to be written down somewhere first?"

This is close to what we keep meeting in data quality work at Pebblous. Annotation guidelines concentrate on what counts as the correct answer, and the equipment and conditions behind the data end up in a filename or in someone's memory.

Raising an accuracy number always has an owner. What gets recorded beside the label usually has none.

▸ https://blog.pebblous.ai/blog/chest-xray-shortcut-layer-probes/en/

#Pebblous #DataClinic #DataQuality #MedicalAI #ShortcutLearning #MedCLIP
