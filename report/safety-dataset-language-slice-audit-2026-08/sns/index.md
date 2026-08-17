# SNS 홍보 글: AI 안전 데이터셋에 하우사어 자기위해 항목은 한 건도 없었다

> 소스: report/safety-dataset-language-slice-audit-2026-08/ko/index.html
> 생성일: 2026-08-18
> URL (KO): https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/ko/
> URL (EN): https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

AI 안전 데이터셋 21개를 언어 슬라이스 단위로 열어 본 감사에서, 하우사어 자기위해 자료는 원어도 번역도 합성도 한 건이 없었습니다.

Black in AI Safety & Ethics의 세 연구자가 25개 언어 슬라이스를 하나씩 확인했습니다. 컬렉션 소개문에서 나란히 놓였던 언어들이, 슬라이스를 열면 크기와 출처가 서로 다른 자료였고 검증 수준도 접근 조건도 같지 않았습니다.

가장 단단한 증거는 하나의 파이프라인 안에서 나왔습니다. 같은 영어 시드, 같은 모델, 같은 기계번역 단계, 같은 원어 검증 프로토콜로 아프리카 언어 여럿을 처리한 자료에서 하우사어 정책 문서의 번역 품질만 66.37을 받아 그 저자들 자신이 세운 수용 기준을 밑돌았습니다. 같은 표의 스와힐리어는 93.30입니다. 언어당 검증자 한 명이라는 규칙은 모든 언어에 공평하게 적용됐고, 결과는 공평하지 않았습니다.

저자들은 이것이 아프리카 언어 자료를 깎을 근거가 아니라고 못 박습니다. 슬라이스 단위 일치도가 인쇄된 자료는 25개 중 여섯이었는데, 그중 가장 낮은 값은 현지 팩트체커를 고용하고 데이터 명세서 전문을 부록에 실은 자료에서 나왔습니다. 격차가 보이는 자료는 나쁜 자료가 아니라 적어 둔 자료입니다.

한국어는 아프리카 두 언어와 같은 자리에 있지 않지만 같은 축 위에 있습니다. 확인한 여덟 개 다국어 안전 자료 중 다섯에 들어가고, 그중 원어로 새로 쓰인 것은 하나입니다.

커버리지는 컬렉션 단위로 세면 채워지고, 슬라이스 단위로 세면 비어 있습니다. 열 이름이 있다고 값이 있는 것은 아니라는 말은 안전 데이터에서도 같은 방식으로 참입니다.

▶ 전문: https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI안전 #AI거버넌스 #저자원언어 #하우사어 #스와힐리어 #UbuntuGuard

---

## LinkedIn (EN)

An audit that opened 21 AI safety datasets one language at a time found no Hausa self-harm data of any kind. Not native, not translated, not synthetic.

Three researchers with Black in AI Safety & Ethics worked through 25 language slices, one row per language per dataset. Languages listed side by side in a collection description turned out to differ in size and provenance once opened, and to differ again in how much of them had been checked and who could download them.

The firmest evidence came from inside a single pipeline. One 2026 resource ran several African languages through the same English seed, the same model, the same machine translation step and the same native validation protocol. Only the Hausa policy documents fell below the acceptance bar their own authors had set, scoring 66.37 against a Swahili score of 93.30 in the same table. One validator per language was applied evenly to every language. The outcome was not even.

The authors are explicit that this is not a case against African-language resources. Slice-level annotator agreement was printed for six of the 25 slices, and the lowest figure in the whole corpus came from a dataset that hired local fact-checkers and published its full datasheet. Where the gap is visible, it is visible because someone wrote it down.

Korean sits elsewhere on the same axis. It appears in five of the eight multilingual safety resources checked for this report, and exactly one of those five was written natively rather than translated or generated.

Count coverage by collection and it looks full. Count it by slice and the cells come up empty. A column name is not a value, and safety data is no exception.

▶ Read: https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AISafety #AIGovernance #LowResourceLanguages #Hausa #Swahili #UbuntuGuard

---

## Twitter/X (KO)

안전 데이터셋 21개를 언어 슬라이스 단위로 열어 본 감사에서, 하우사어에 자기위해 라벨이 붙은 자료는 원어도 번역도 합성도 없었습니다.

커버리지는 컬렉션 단위로 세면 채워지고, 슬라이스 단위로 세면 비어 있습니다.

▶ https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/ko/

#페블러스 #데이터품질 #AI안전 #저자원언어

---

## Twitter/X (EN)

An audit opened 21 AI safety datasets one language at a time. For Hausa self-harm it found nothing: no native data, no translation, no synthetic records.

Count coverage by collection and it looks full. Count it by slice and the cells come up empty.

▶ https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/en/

#Pebblous #DataQuality #AISafety #LowResourceLanguages

---

## Facebook (KO)

데이터를 점검하다 보면 열 이름은 다 있는데 값이 비어 있는 칸을 만납니다.

스키마상으로는 아무 문제가 없습니다. 컬럼은 선언돼 있고, 적재도 끝났고, 파이프라인은 통과합니다.

이번에 읽은 AI 안전 데이터 감사에서 그 칸의 이름은 자기위해였습니다.

Black in AI Safety & Ethics의 세 연구자가 스물한 개 안전 자료를 열어, 언어 하나와 데이터셋 하나를 한 칸에 놓는 대장을 만들었습니다. 스물다섯 개 칸이 나왔습니다.

하우사어 자기위해 칸에는 원어 자료도, 번역도, 문화 적응 번역도, 합성도 없었습니다.

한 건도 없다는 뜻입니다.

이런 상태에 이름을 붙인다면 '컬렉션 단위의 안심'쯤 될 것 같습니다. 모델 카드에 적힌 "N개 언어에서 평가했다"는 문장은 대개 참입니다. 다만 그 문장이 참인 단위와, 읽는 사람이 그 문장을 믿는 단위가 다릅니다.

읽으면서 더 오래 붙잡고 있던 대목은 따로 있었습니다.

같은 파이프라인 안에서 하우사어와 스와힐리어가 갈렸다는 부분입니다. 영어 시드도, 생성에 쓴 모델도, 원어 검증 절차도 같았습니다. 언어당 검증자 한 명이 표본 스무 쌍을 본다는 규칙은 열한 개 언어에 똑같이 적용됐습니다. 그런데 하우사어 정책 자료의 번역 품질만 그 저자들 자신이 세운 기준을 밑돌았고, 그 슬라이스는 그대로 공개됐습니다.

감사 논문의 문장은 이렇습니다. "같은 처우가 다른 신뢰도를 낳았다."

"공평하게 적용된 규칙이 공평하지 않은 결과를 냈다면, 그 사실은 어디에 적히는가?"

데이터 카드의 어떤 필드도 그것을 드러내도록 설계되어 있지 않다는 것이 저자들의 답입니다. 좁은 커버리지와 얇은 검증, 제한된 접근은 하나씩 떼어 놓으면 감수하고 쓸 수 있는 조건입니다. 문제는 이 조건들이 같은 슬라이스에 겹칠 때인데, 겹침을 적는 칸은 어디에도 없습니다.

페블러스가 완전성을 테이블이 아니라 슬라이스 단위로 재 온 이유도 그 언저리입니다. 적재가 끝났다는 문장과, 우리가 실제로 쓸 구간에 값이 있다는 문장은 서로 다른 문장입니다.

어느 지표를 볼지 정하기 전에, 무엇을 한 칸으로 셀지를 먼저 정해야 하는 것 같습니다.

https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/ko/

#페블러스 #데이터품질 #데이터클리닉 #AI안전 #저자원언어 #하우사어 #AIReadyData

---

## Facebook (EN)

If you have ever audited a dataset, you know the cell where the column name is present and the value is not.

Nothing in the schema objects. The column is declared, the load completed, the pipeline passed.

In the AI safety audit I read this week, that cell was labeled self-harm.

Three researchers with Black in AI Safety & Ethics opened twenty-one safety resources and built a ledger with one row per language per dataset. Twenty-five rows came out of it.

The Hausa self-harm row held no native data, no translation, no transcreation, no synthetic records.

Nothing at all.

I have started thinking of the opposite state as collection-level reassurance. The line in a model card that says a system was evaluated in N languages is usually true. What differs is the unit in which it is true and the unit in which a reader believes it.

The passage I kept returning to was elsewhere.

Hausa and Swahili came apart inside a single pipeline. The same English seed, the same generating model, the same native validation procedure. One validator reviewing twenty sample pairs per language, applied identically across eleven languages. Only the Hausa policy material fell below the acceptance bar its own authors had written, and that slice was published all the same.

The audit puts it in one line. "Equal treatment produced unequal reliability."

"If an evenly applied rule produces uneven results, where does that fact get written down?"

Nowhere, the authors answer. No field on a data card is designed to surface it. Narrow coverage, thin validation and restricted access are each survivable on their own. The risk arrives when they land on the same slice, and no card has a cell for the overlap.

This is roughly why Pebblous measures completeness by slice rather than by table. That a load finished and that the segment you plan to use holds values are two separate statements.

Before choosing which metric to read, it seems worth deciding what counts as one cell.

https://blog.pebblous.ai/report/safety-dataset-language-slice-audit-2026-08/en/

#Pebblous #DataQuality #DataClinic #AISafety #LowResourceLanguages #Hausa #AIReadyData
