# SNS 홍보 글: 같은 카메라를 여덟 번 복제해도 늘지 않은 로봇의 증거

> 소스: blog/provenance-evidence-counting-fusion/ko/index.html
> 생성일: 2026-09-04
> URL (KO): https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/ko/
> URL (EN): https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

한 카메라가 내놓은 출력을 여덟 배로 복제해도 로봇의 최종 판정 720건은 하나도 바뀌지 않았습니다.

맥길대·UBC 연구진이 8월 31일 arXiv에 공개한 PACT 논문의 결과입니다. 카메라 다섯 대가 같은 장면을 찍고 이미지 한 장마다 프롬프트 네 개가 붙습니다. 저자들은 그 답들이 얼마나 잘 맞는지가 아니라 몇 건으로 셈해야 하는지를 물었습니다.

같은 카메라에서 나온 출력은 하나의 출처 그룹으로 묶어 좌표별 최솟값만 남기고, 서로 다른 그룹의 몫만 더합니다. 그룹 안에 복제본을 아무리 넣어도 최솟값은 커지지 않습니다. 같은 출력을 낱개로 세는 방식에서는 같은 조작으로 이벤트 창 하나의 증거 예산이 최대 280단위까지 부풀었습니다.

다만 이 방법은 무엇이 같은 출처인지를 스스로 찾아내지 않습니다. 분할은 외부에서 주어지고, 구조적 보장은 주어진 관계 위에서만 성립한다고 저자들이 못박았습니다. 여섯 과제 중 수건 개기에서는 준비된 열 개 에피소드를 두 체크포인트 모두 하나도 승인하지 못했습니다.

데이터 파이프라인도 같은 셈법 위에 있습니다. 여러 크롤러가 같은 원본을 다시 수집하고, 재시도 로그가 별도 이벤트로 쌓이는 구간이 그렇습니다. 합의가 늘어난 것과 증거가 늘어난 것은 다른 일이고, 둘을 구별하려면 출처 기록이 남아 있어야 합니다.

▶ 전문: https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터프로버넌스 #센서융합 #PhysicalAI #PACT #McGill #arXiv

---

## LinkedIn (EN)

A single camera's outputs were duplicated eightfold. All 720 of the robot's final verdicts stayed exactly where they were.

The result comes from PACT, a paper posted to arXiv on August 31 by researchers at McGill and UBC. Five cameras watch the same handover, each image is queried under four prompts, and the authors ask not how well those answers agree but how many of them there really are.

Outputs from one camera form a single provenance group. Only the coordinate-wise minimum survives inside the group, and evidence is added only across groups, so duplicates buy nothing. Counting the same outputs one at a time, the evidence budget of a single event window inflated by as much as 280 units.

The method does not discover which outputs share a source. The partition is supplied from outside, and the authors state plainly that the structural guarantees hold only over the relationship they were handed. On towel folding, one of the six tasks, neither checkpoint admitted a single one of the ten reference-ready episodes.

Data pipelines run on the same arithmetic when several crawlers re-fetch one original or retried calls pile up as separate log events. Agreement going up and evidence going up are two different things, and telling them apart requires that the record of origin survived.

▶ Read: https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataProvenance #SensorFusion #PhysicalAI #PACT #McGill #arXiv

---

## Twitter/X (KO)

한 카메라가 내놓은 출력을 여덟 배로 복제해도 로봇의 최종 판정 720건은 하나도 바뀌지 않았습니다.

같은 출력을 낱개로 세는 장부에서만 증거가 부풀었습니다. 합의가 늘어난 것과 증거가 늘어난 것은 다른 일입니다.

https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/ko/

#페블러스 #데이터품질 #센서융합 #PACT

---

## Twitter/X (EN)

Duplicating one camera's outputs eightfold left all 720 of the robot's final verdicts unchanged.

Only the ledger that counts those outputs one at a time grew. Agreement going up is not the same as evidence going up.

https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/en/

#Pebblous #DataQuality #SensorFusion #PACT

---

## Facebook (KO)

"센서를 하나 더 달면 좀 나아질까요."

시스템의 판단이 미덥지 않을 때 가장 먼저 나오는 말입니다. 카메라를 한 대 더 놓고, 모델을 하나 더 붙이고, 같은 질문을 몇 번 더 물어 표를 모읍니다. 표가 모이면 확신도 따라 오른다고 믿습니다.

맥길대와 UBC 연구진이 그 믿음을 시험대에 올렸습니다. 사람이 내미는 물건을 로봇이 지금 받아도 되는지를 정하는 장면입니다.

한 카메라가 내놓은 출력을 그대로 복제해 여덟 배까지 늘려 봤습니다.

낱개로 세는 장부에서는 증거가 눈에 띄게 불어났습니다. 출처끼리 묶어 세는 장부에서는 720건의 최종 판정이 하나도 움직이지 않았습니다.

새로 관측된 것은 없었습니다. 두 장부 중 한쪽만 그 사실을 알아본 것입니다.

읽고 나서 오래 남은 질문은 단순한 쪽이었습니다.

"우리 파이프라인은 지금 무엇을 별개의 증거로 세고 있나?"

여러 크롤러가 같은 원본을 다시 긁어 옵니다. 재시도로 얻은 로그가 별도 이벤트로 쌓입니다. 여러 모델의 라벨이 다수결로 합쳐집니다. 이 논문의 말로 옮기면, 이 파이프라인들에는 '출처 분할'이 선언되어 있지 않습니다. 값이 맞는지를 묻는 점검과 따로 셀 수 있는지를 묻는 점검은 서로 다른 일이고, 뒤쪽은 원본 기록이 남아 있어야만 가능합니다. 페블러스가 데이터 품질을 진단하는 자리에서 자주 마주치는 빈자리이기도 합니다.

논문은 자기 한계를 먼저 적어 둡니다. 무엇이 같은 출처인지는 사람이 지정해 주어야 하고, 그 지정이 실제로 맞는지는 이 방법이 증명하지 않습니다. 여섯 과제 중 수건 개기에서는 준비된 열 개 에피소드를 하나도 승인하지 못했습니다.

합의가 늘어난 것과 증거가 늘어난 것은 다른 일입니다. 둘을 구별할 수 있는지는 결국 우리가 무엇을 기록해 두었는가에 달려 있는 것 같습니다.

▸ https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/ko/

#페블러스 #DataClinic #데이터품질 #데이터프로버넌스 #센서융합 #PACT #McGill

---

## Facebook (EN)

"Would another camera help?"

It is the first thing anyone says when a system's judgment feels thin. Add a camera. Add a model. Ask the same question a few more times and collect the votes. More votes, we assume, means more confidence.

Researchers at McGill and UBC put that assumption on a test bench: a robot deciding whether it may take an object a person is holding out.

They took the outputs of one camera and duplicated them until the multiplicity reached eight.

On a ledger that counts every output on its own, the evidence swelled. On a ledger that groups outputs by where they came from, all 720 final verdicts stayed exactly where they were.

Nothing new had been observed. Only one of the two ledgers noticed.

The question that stayed with me afterward was a plain one.

"What is my pipeline currently counting as separate evidence?"

Several crawlers re-fetch the same original. Logs obtained by retry pile up as separate events. Labels from several models get merged by majority vote. In this paper's language, none of those pipelines has a provenance partition declared. Checking whether a value is correct and checking whether it can be counted separately are two different jobs, and the second one is only possible if the record of origin survived. That gap is one we run into often when we look at data quality at Pebblous.

The paper writes its own limits down first. Which outputs share a source has to be declared by a person, and the method does not prove that the declaration is right. On towel folding, one of the six tasks, not one of the ten reference-ready episodes was admitted.

Agreement going up and evidence going up are two different things. Whether we can tell them apart seems to come down to what we bothered to write down.

▸ https://blog.pebblous.ai/blog/provenance-evidence-counting-fusion/en/

#Pebblous #DataClinic #DataQuality #DataProvenance #SensorFusion #PACT #McGill
