# SNS 홍보 글: 감사 문항을 감추자 AI 공정성 조작 비용이 네 배로 뛰었다

> 소스: blog/oblivious-fairness-audit-manipulation-cost/ko/index.html
> 생성일: 2026-08-10
> URL: https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

감사에 어느 문항이 쓰일지 감추자, 불공정을 감추는 데 필요한 응답 위조가 38건에서 152건으로 늘었습니다.

AIES 2026에 채택된 respir 프로토콜의 실험 결과입니다. 감사자와 제공자가 먼저 큰 후보 집합에 합의하고, 제공자는 그 후보 전체에 모델을 돌려 답을 냅니다. 감사자는 사적 정보 검색이라는 암호 기법으로 자기가 쓸 부분집합만 꺼내 옵니다. 제공자는 후보에 무엇이 들어 있는지는 알아도, 그중 어느 항목이 실제 판정에 들어갔는지는 알 수 없습니다.

값이 오르는 이유는 단순합니다. 어느 항목이 쓰일지 모르면 후보 집합 전체에 걸쳐 일관되게 답을 비틀어야 합니다. 손댄 면적이 넓어질수록 감사자가 심어 둔 카나리 질의에 걸릴 확률도 같이 오릅니다. COMPAS의 인종 속성에서 카나리 다섯 개를 심었을 때 적발 확률은 10.7%에서 20.5%로 올랐습니다.

도입 부담은 가벼운 편입니다. 모델 쪽에 요구하는 변경은 없고, 감사자가 지는 비용은 8GiB 데이터베이스 조회 기준 3.6초입니다.

막지는 못합니다. 후보 집합 자체는 제공자에게 공개되므로, 후보 전체에 통일된 전략을 쓰는 길은 열려 있습니다. 보호집단이 후보의 8% 수준으로 작으면 카나리를 쉰 개까지 늘려도 적발률이 낮게 유지됩니다. 후보 집합이 실제 운영 환경을 대표하지 못하면 감사를 통과해도 공정성은 보장되지 않습니다.

감사 가능성을 규제 문서에 요건으로 적어 두는 일과, 그 감사가 조작을 얼마나 견디도록 설계됐는지를 말하는 일은 다른 작업입니다.

▶ 전문: https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI거버넌스 #공정성감사 #오블리비어스감사 #PIR #fairwashing #AIES2026 #Meta

---

## LinkedIn (EN)

Hiding which cases a fairness audit would use raised the number of responses a provider must forge to conceal unfairness from 38 to 152.

The result comes from respir, a protocol accepted at AIES 2026. The auditor and the provider first agree on a large candidate set, and the provider runs its model across all of it. The auditor then pulls only the subset it needs using private information retrieval, a cryptographic technique that leaves the provider unable to learn which items were retrieved, even though it knows what the candidate set contains.

The reason the price rises is plain. Not knowing which items will count forces the provider to twist answers consistently across the whole candidate set, and the wider that surface gets, the likelier it is to hit one of the canary queries the auditor planted. On the race attribute in COMPAS, five canaries lifted the detection rate from 10.7% to 20.5%.

Adoption is not heavy. Nothing changes on the model side, and the auditor's own cost is an online lookup of roughly 3.6 seconds against an 8GiB database.

It does not close the door. The candidate set is visible to the provider, so a uniform strategy across all candidates remains available, and where the protected group is only about 8% of the data the detection rate stays low even at fifty canaries. If the candidate set does not represent the real operating environment, passing the audit guarantees nothing about fairness in production.

Writing auditability into a regulation is one task. Saying how well that audit holds up under manipulation is another.

▶ Read: https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIGovernance #FairnessAudit #ObliviousAuditing #PIR #Fairwashing #AIES2026 #Meta

---

## Twitter/X (KO)

감사에 어느 문항이 쓰일지 감추자, 불공정을 감추는 데 필요한 응답 위조가 38건에서 152건으로 늘었습니다.

거짓말을 불가능하게 만드는 대신 값을 올리는 설계입니다. 많이 위조할수록 감사자가 심어 둔 카나리에 걸릴 확률도 같이 오릅니다.

https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/ko/

#페블러스 #공정성감사 #AI거버넌스 #AIES2026

---

## Twitter/X (EN)

Hide which cases a fairness audit uses, and the forgeries needed to conceal unfairness go from 38 to 152.

The design does not make lying impossible. It makes lying expensive, and the more you forge, the likelier you trip a canary.

https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/en/

#Pebblous #FairnessAudit #AIGovernance #AIES2026

---

## Facebook (KO)

시험 범위를 미리 알려 준 시험은 무엇을 재는 걸까요.

실력일까요, 아니면 범위일까요.

알고리즘 공정성 감사도 오랫동안 범위를 알려 주고 치러 왔습니다.

로이터가 메타 내부 문서를 근거로 보도한 장면이 그 사정을 그대로 보여 줍니다. 일본 규제당국과 기자들이 광고 라이브러리에서 어떤 검색어를 쓰는지 메타는 알고 있었고, 같은 검색을 먼저 돌려 걸리는 사기 광고를 지웠습니다. 어느 메모에는 마지막 나흘은 0건이었다는 성과 보고가 남아 있었습니다. 메타는 검색 결과에서 광고가 줄어든 것은 실제 집행 때문이라고 반박했습니다.

무너진 건 광고 저장소라는 제도가 아니었습니다. 열려 있는 창구를 들여다보는 방식이 상대에게 보인다는 조건이었습니다. 저는 이런 감사를 '예고된 감사'라고 부르고 싶습니다.

AIES 2026에 채택된 논문 한 편이 그 예고를 걷어냅니다. 감사자가 어느 항목으로 검사할지를 암호 기법으로 가리자, 신용카드 연체 데이터에서 불공정의 절반을 감추는 데 필요한 응답 위조가 38건에서 152건으로 늘었습니다. 조작을 막는 설계가 아니라 조작의 값을 올리는 설계입니다.

다만 이 방어도 보호집단이 아주 작으면 눈에 띄게 약해집니다. 뒤집어야 할 절대량 자체가 적기 때문입니다. 구조적으로 작은 소수자를 지키는 일은 여기서도 가장 얇은 자리로 남습니다.

데이터를 오래 만지다 보면 같은 자리로 돌아오게 됩니다. 검수 대상 표본을 작업자가 미리 알면, 정돈되는 건 데이터가 아니라 그 표본입니다.

"우리는 감사받을 준비가 되어 있나요, 아니면 예고된 감사에 맞춰 정돈해 둔 걸까요?"

감사 가능성을 요건에 적는 일은 이미 여러 규제 문서가 해냈습니다. 그다음 질문이 아직 남아 있는 것 같습니다.

▸ https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI거버넌스 #공정성감사 #Meta #AIES2026

---

## Facebook (EN)

What does an exam measure when you hand out the syllabus first?

The ability, or the syllabus?

Algorithmic fairness audits have long been taken under exactly those conditions.

Reuters, working from internal documents, described the shape of it. Meta knew which search terms Japanese regulators and reporters used in its ad library, ran those searches itself first, and removed the scam ads that surfaced. One memo recorded four straight days at zero. Meta's response was that the drop reflected real enforcement.

What broke was not the ad repository. It was the condition that the way you look inside an open window is visible to the person on the other side. I have started thinking of these as announced audits.

A paper accepted at AIES 2026 takes the announcement away. Once cryptography hides which items the auditor will actually use, concealing half the unfairness in a credit default dataset took 152 forged responses instead of 38. It is not a design that prevents manipulation. It is one that prices it.

The defense thins out, though, where the protected group is very small, because the number of flips required is small to begin with. Protecting structurally small minorities stays the thinnest place on the map here too.

Years around data keep returning me to the same spot. When annotators know which samples will be reviewed, what gets tidied is the sample, not the data.

"Are we ready to be audited, or have we tidied up for the audit we saw coming?"

Plenty of regulations have already written auditability down. The question after that one still seems to be open.

▸ https://blog.pebblous.ai/blog/oblivious-fairness-audit-manipulation-cost/en/

#Pebblous #DataClinic #DataQuality #AIGovernance #FairnessAudit #Meta #AIES2026
