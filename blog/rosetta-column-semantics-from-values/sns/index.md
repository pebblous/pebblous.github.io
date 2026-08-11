# SNS 홍보 글: 값만 보고 열의 의미를 복원하는 데이터 카탈로그 로제타

> 소스: blog/rosetta-column-semantics-from-values/ko/index.html
> 생성일: 2026-08-12
> URL: https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

정확도가 0.223에서 0.475로 오른 이유는 모델이 글을 더 잘 써서가 아니었습니다. 답하지 않기로 한 열이 늘어서였습니다.

8월 8일 arXiv에 올라온 로제타 논문은 데이터베이스에서 테이블과 열의 이름을 지우고 값만 남긴 뒤, 그 열이 무엇을 뜻하는지 되찾게 했습니다. 채점은 그 데이터베이스를 만든 사람들이 써 둔 문서와 대조해서 이뤄졌습니다. 검증 장치 없이 모델을 그냥 쓰면 열의 94%에 답했고, 로제타는 42%에만 답했습니다.

설계는 순서에 있습니다. 결정론적 프로파일러가 값의 길이 분포와 엔트로피, 체크섬 통과 여부로 증거를 먼저 만들고, 언어모델은 그 증거가 있는 자리에서만 의미를 제안합니다. 구조적 증거가 있는 열의 응답률은 0.550, 없는 열은 0.293이었습니다.

한계는 저자가 직접 적어 두었습니다. 양쪽이 모두 답한 열만 남겨 질문을 같게 맞추면 로제타의 서술이 더 낫지 않았고, 백본을 다른 모델로 교체하자 기권 행동이 따라오지 않았습니다. 출고된 시스템이 기권을 프롬프트로 부탁했을 뿐 코드로 강제하지 않았기 때문입니다.

카탈로그를 100% 채운 자동 문서화는 완성도에서 이기지만, 감사에서 어느 항목이 근거 있는 항목인지 가려낼 방법을 남기지 않습니다. 페블러스가 데이터 품질 현장에서 자주 보는 문제도 메타데이터가 없는 상태가 아니라, 누가 언제 무슨 근거로 적었는지 알 수 없는 메타데이터가 가득한 상태입니다.

▶ 전문: https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #데이터카탈로그 #메타데이터복원 #Rosetta #TextToSQL #arXiv

---

## LinkedIn (EN)

Accuracy on the task more than doubled, and none of the gain came from better writing.

A paper posted to arXiv on August 8 by Mike Helwig, an independent researcher, stripped table and column names out of a set of databases and asked a system to recover what each column means from its values alone. The recovered descriptions were scored against documentation written by the people who built those databases. Used directly, the model answered 94% of the columns. Inside Helwig's verification harness, named Rosetta, it answered 42%.

The design is an ordering. A deterministic profiler measures length distributions, character entropy and checksum validity before any model runs, and the model may only propose meaning where that evidence already exists. Response rate on columns backed by structural evidence was 0.550, against 0.293 on columns without it.

Helwig draws the limits himself. On the columns both approaches answered, Rosetta's prose was no better, and on two of three scoring dimensions it was slightly worse. Swap in a different backbone model and the abstention behaviour does not transfer, because the shipped system asked for abstention in a prompt instead of enforcing it in code.

That turns a research result into a procurement question. A catalog filled to 100% wins on completeness and leaves an auditor no way to tell which entries are grounded. What Pebblous sees most often in data quality work is not missing metadata, but metadata nobody can trace back to a reason.

▶ Read: https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #DataCatalog #MetadataReconstruction #Rosetta #TextToSQL #arXiv

---

## Twitter/X (KO)

새 arXiv 논문은 데이터베이스에서 테이블과 열의 이름을 전부 지우고, 값만 보고 그 뜻을 되찾게 했습니다.

검증 장치를 씌운 시스템은 열의 42%에만 답했고, 답한 것들의 정확도는 두 배로 올랐습니다. 오른 것은 서술 실력이 아니라 답할 자리를 고르는 판단이었습니다.

https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/ko/

#페블러스 #Rosetta #데이터카탈로그 #AIReadyData

---

## Twitter/X (EN)

A new arXiv paper stripped every table and column name out of a database and asked a system to recover what the columns mean from values alone.

Wrapped in a verification harness, it committed to 42% of them and scored twice as well as the same model answering almost everything. What improved was not the writing. It was knowing where to stay quiet.

https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/en/

#Pebblous #Rosetta #DataCatalog #AIReadyData

---

## Facebook (KO)

"이 열이 무슨 뜻인지 아는 사람이 이제 회사에 없습니다."

인수인계 없이 물려받은 테이블 앞에서 한 번쯤 듣게 되는 말입니다. 이름은 amt_minor 같은 것이고, 문서는 없거나 오래됐고, 그 이름을 지은 사람은 몇 해 전에 떠났습니다.

며칠 전 arXiv에 올라온 논문은 그 자리를 그대로 실험실로 옮겨 놓았습니다. 데이터베이스에서 테이블과 열의 이름을 전부 지우고, 값만 남긴 채 그 뜻을 되찾게 한 것입니다.

눈에 걸린 것은 정확도가 아니라 시스템이 침묵한 비율이었습니다.

로제타라는 이름의 그 시스템은 열의 42%에만 답했습니다. 같은 모델을 그냥 쓰면 거의 모든 열에 답합니다. 답한 것들의 정확도는 반대 방향으로 벌어졌습니다.

저자가 이어서 확인한 대목이 조금 서늘합니다. 두 쪽이 모두 답한 열만 떼어 놓고 보면, 로제타가 더 잘 쓴 것은 아니었습니다. 이 장치는 글을 잘 쓰게 만든 것이 아니라, 아는 자리와 모르는 자리를 갈라 준 것입니다.

임상 데이터 실험에서 그 선이 어디에 그어지는지가 보입니다. 값의 구조 안에 의미가 들어 있는 진단 코드는 값만 보고 대부분 풀어냈고, 등록 기관이 임의로 번호를 매긴 약제 코드에는 한 건도 손대지 않았습니다.

"모르면 답하지 말라"는 지침이 우리 시스템의 어디에 적혀 있습니까? 프롬프트입니까, 코드입니까?

논문에서 가장 실용적인 문장이 그 자리에 있었습니다. 프롬프트로 부탁한 기권은 모델을 바꾸는 날 사라졌고, 코드로 막아 둔 기권만 남았습니다.

페블러스가 데이터 품질 현장에서 자주 보는 것도 메타데이터가 없는 상태가 아닙니다. 누가 언제 무슨 근거로 적었는지 알 수 없는 메타데이터가 가득한 상태입니다.

빈틈없이 채워진 카탈로그와, 절반도 채우지 못한 채 나머지를 근거 없음으로 남겨 둔 '기권한 카탈로그'. 감사 앞에 앉았을 때 어느 쪽이 더 강한지는 아직 우리가 합의하지 않은 문제인 것 같습니다.

https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터카탈로그 #Rosetta #AIReadyData

---

## Facebook (EN)

"Nobody here knows what this column means anymore."

Anyone who has inherited a warehouse without a handover has heard some version of that sentence. The column is called something like amt_minor, the documentation is thin or stale, and the person who named it left years ago.

A paper posted to arXiv a few days ago moved that situation into a lab. Every table and column name was stripped out of a set of databases, and a system was asked to recover what each column means from the values alone.

What held my attention was not the accuracy. It was how often the system said nothing.

Rosetta, the system in question, committed to 42% of the columns. The same model, used directly, answers almost all of them. On what each of them did answer, the scores moved in the opposite direction.

Then comes the part that stays with you. On the columns both approaches answered, Rosetta did not write better descriptions. The harness had not made the model more capable. It had sorted what the model knew from what it was guessing at.

The clinical experiment shows where that line falls. Diagnosis codes carry their meaning inside the structure of the value, and the system decoded almost all of them from values alone. Drug codes, whose digits a registry assigns by fiat, it left entirely untouched.

"Where does the instruction to stay quiet live in our system? In the prompt, or in the code?"

The most practical finding in the paper sits right there. Abstention requested in a prompt disappeared the day the backbone model changed. Abstention enforced in code survived it.

What Pebblous runs into most often in data quality work is not an absence of metadata. It is a warehouse full of metadata that nobody can trace back to a reason.

A catalog filled end to end, against a catalog that fills less than half and leaves the rest marked as ungrounded. Which one holds up better in front of an auditor is a question we have not settled yet.

https://blog.pebblous.ai/blog/rosetta-column-semantics-from-values/en/

#Pebblous #DataClinic #DataQuality #DataCatalog #Rosetta #AIReadyData
