# SNS 홍보 글: 특정 HLA 유전형 보유자만 노리는 AI 항균 펩타이드 백도어

> 소스: blog/ai-antimicrobial-peptide-hla-backdoor/ko/index.html
> 생성일: 2026-08-11
> URL: https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

AI가 설계한 항균 펩타이드가 표준 안전 검사를 전부 통과했습니다. 위험은 특정 유전형을 가진 사람에게만 켜졌습니다.

미시간공대가 주도한 공동 연구진이 이번 달 arXiv에 공개한 실험입니다. 오염된 데이터로 생성모델을 파인튜닝하자, 표적으로 삼은 HLA 대립유전자를 가진 사람에 대해서만 예측 면역원성 위험 점수가 평균 743% 올랐습니다. 그 유전형이 없는 사람에게는 자연 펩타이드와 비슷한 수준으로 남았고, 같은 절차가 AMP-GPT를 포함한 공개 생성모델 세 종류에서 모두 재현됐습니다.

통상적 스크리닝이 보는 것은 항균력과 용혈, 일반 독성입니다. 위험은 대립유전자별 결합이라는 다른 축에만 나타나는데, 표준 파이프라인에는 그 축을 재는 항목이 없습니다.

743%는 예측 도구가 매긴 점수이지 환자에게서 관측된 부작용 빈도가 아닙니다. 논문도 유전형을 인지하는 안전 감사가 필요하다는 제안에서 멈추고, 구체적인 탐지 기법은 아직 비어 있습니다.

검증이 무엇을 통과시켰는지보다 무엇을 재지 않았는지가 더 많은 것을 말해 줍니다.

▶ 전문: https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI바이오시큐리티 #AI신약개발 #약물유전체학 #HLA #GenotypicTriggers #ProGen2

---

## LinkedIn (EN)

An AI-designed antimicrobial peptide cleared every standard safety screen. The danger switched on only for people carrying one HLA allele.

Researchers at Michigan Tech and two partner universities posted the experiment to arXiv this month. After fine-tuning peptide generators on poisoned data, predicted immunogenicity risk rose 743% on average for carriers of the targeted allele, while non-carriers stayed near the level of natural peptides. The same procedure worked on three widely used open models, AMP-GPT among them.

Conventional screening looks at potency, hemolysis and general toxicity. The risk sits on a different axis, allele-specific MHC class II binding, and no standard pipeline measures it.

That 743% is a score from a prediction tool, not an adverse-event rate observed in patients. The paper calls for genotype-aware safety audits and stops there. No detection method has been proposed yet.

What a validation set never measured tells you more than what it passed.

▶ Read: https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIBiosecurity #DrugDiscovery #Pharmacogenomics #HLA #GenotypicTriggers #ProGen2

---

## Twitter/X (KO)

항균 펩타이드를 설계하는 생성모델에 백도어를 심자, 표적 HLA 유전형을 가진 사람에 대해서만 예측 면역원성 위험이 743% 올랐습니다. 항균력과 독성 검사는 그대로 통과했습니다.

방아쇠는 모델 입력이 아니라 약을 받는 사람의 유전자였습니다.

https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/ko/

#페블러스 #데이터품질 #AI바이오시큐리티 #HLA #GenotypicTriggers

---

## Twitter/X (EN)

A backdoor planted in antimicrobial peptide generators raised predicted immunogenicity risk 743% for carriers of one targeted HLA allele. Potency and toxicity screens passed unchanged.

The trigger is not a string in the prompt. It is the genome of the person receiving the drug.

https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/en/

#Pebblous #DataQuality #AIBiosecurity #HLA #GenotypicTriggers

---

## Facebook (KO)

HIV 약을 처음 처방받는 자리에서는 유전자 검사부터 합니다.

아바카비르라는 약이 HLA-B*57:01을 가진 사람에게만 중증 과민반응을 일으킨다는 사실이 밝혀진 뒤에 생긴 절차입니다. 그 사실은 사람이 먼저 아프고 난 다음에야 드러났습니다.

며칠 전에 읽은 논문은 그 순서를 뒤집어 놓았습니다.

연구진은 항균 펩타이드를 설계하는 생성모델에 백도어를 심었습니다. 방아쇠는 모델에 넣는 문장이 아니라 약을 받는 사람의 유전자였습니다.

표적으로 삼은 대립유전자를 가진 사람에게만 예측 면역원성 위험이 크게 올랐고, 나머지 사람에게는 아무 변화도 없었습니다. 항균력도 독성도 전과 같았기 때문에 통상적인 안전 검사는 모두 통과했습니다.

검사가 잘못된 것은 아닙니다. 그 검사들은 '평균적 인체 하나'를 기준으로 만들어졌습니다. 평균 바깥에 몰린 위험은 그 자를 그대로 지나갑니다.

"우리가 파이프라인 끝에 붙인 검증 데이터는 누구를 대표하고 있나?"

악의가 없어도 같은 일이 벌어집니다. 소수 집단이 표본에 거의 들어 있지 않으면, 그 집단에서만 나타나는 실패는 지표에 잡히지 않습니다. 페블러스가 데이터 품질을 볼 때 분포와 출처 기록을 함께 묻는 이유도 여기에 닿아 있습니다.

743%라는 숫자는 예측 도구가 매긴 점수이고, 아직 환자에게서 관측된 값은 아닙니다. 다만 방어 기법이 비어 있다는 사실은 논문 안에서도 그대로 남아 있습니다.

무엇을 통과했는지 묻는 습관 옆에, 무엇을 재지 않았는지 묻는 자리를 하나 더 두어야 할 것 같습니다.

https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI바이오시큐리티 #HLA #GenotypicTriggers

---

## Facebook (EN)

Before a first HIV prescription, the clinic runs a genetic test.

That step exists because abacavir turns dangerous only in people who carry HLA-B*57:01. We learned it the slow way. Patients were harmed first, and the gene came later.

A paper I read a few days ago reverses that order.

The researchers planted a backdoor in generative models that design antimicrobial peptides. The trigger is not a string typed into the model. It is the genome of the person who receives the drug.

Predicted immunogenicity risk climbed sharply for carriers of the targeted allele and stayed flat for everyone else. Potency and toxicity were untouched, so the usual safety screens raised nothing.

The screens are not broken. They were built around "one average human body." Risk that gathers outside the average walks straight past that ruler.

"Who does the validation set at the end of our pipeline actually represent?"

No malice is required for the same thing to happen. When a subgroup is barely present in the sample, the failures that only appear in that subgroup never reach the metrics. It is the reason Pebblous asks about distribution and provenance whenever it examines data quality.

The 743% figure is a score from a prediction tool, not something observed in patients. What the paper does leave standing is the absence of any defense.

Next to the habit of asking what a candidate passed, there may need to be room for asking what nobody measured.

https://blog.pebblous.ai/blog/ai-antimicrobial-peptide-hla-backdoor/en/

#Pebblous #DataClinic #DataQuality #AIBiosecurity #HLA #GenotypicTriggers
