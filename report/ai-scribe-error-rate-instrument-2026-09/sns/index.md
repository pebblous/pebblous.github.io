# SNS 홍보 글: AI가 대신 쓴 진료기록 세 장 중 한 장에 오류가 있었다

> 소스: report/ai-scribe-error-rate-instrument-2026-09/ko/index.html
> 생성일: 2026-09-02
> URL (KO): https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/ko/
> URL (EN): https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

같은 진료기록 565장을 두고 오류율이 28%도 되고 97%도 됐습니다. 바뀐 것은 기록이 아니라 검토자에게 건넨 지시문 한 줄이었습니다.

영국 연구팀이 상용 앰비언트 AI 스크라이브 세 제품에 같은 진료 142건을 똑같이 통과시켜 노트 565장을 만들고 전부 감사했습니다. 검증된 실패가 하나 이상 있는 노트가 세 장 중 한 장이었습니다.

이 연구가 다른 감사들과 갈라지는 지점은 그다음입니다. 자기가 내놓은 오류율을 다시 감사했습니다. 노트도 후보 오류도 증거도 모델 설정도 그대로 둔 채 검토 지시문만 바꿨더니, 인정된 오류가 9.3%에서 79.0%로 올라갔습니다.

심판 모델의 계열을 바꾼 효과는 그 8분의 1이었습니다. 심판을 여러 겹으로 쌓은 패널 구조의 기여는 통계적으로 없는 것과 구별되지 않았습니다.

같은 팀의 자매 논문이 한 겹을 더합니다. 기계 심판은 노트에 더해진 것을 0.79에서 0.94의 판별력으로 가려냅니다.

빠진 것 앞에서는 0.50에서 0.63으로 내려앉습니다. 0.5가 동전 던지기입니다. 더해진 것은 문서에 자기 자리를 차지하고 있어 가리킬 수 있고, 빠진 것은 가리킬 텍스트를 남기지 않기 때문입니다.

문구를 고치고 다수결로 투표시키는 통상의 처방 다섯 계열은 지적의 양만 옮겼을 뿐 이 벽을 넘지 못했습니다. 탐지를 부분적으로 되살린 유일한 길은 과제 자체를 바꾸는 것이었습니다. 문서를 통째로 평가하지 않고, 기록되어야 할 사실의 목록을 먼저 세운 뒤 항목마다 대조하는 방식입니다. 그렇게 해도 누락이 있는 노트 열 장 중 여섯 장은 여전히 통과합니다.

읽을 때 함께 읽어야 할 것도 있습니다. 두 논문 모두 심사를 거치지 않은 사전 공개본입니다. 저자들은 AI 평가·검수 도구를 파는 회사 소속이고, 논문이 이 이해상충을 공시합니다. 사람이 쓴 노트 대조군은 없어서, AI가 사람보다 더 틀리는지에 대해서는 아무 말도 하지 않습니다.

자동 검수를 도입하는 조직이 먼저 정해야 하는 것은 검수기의 정확도가 아니라, 검수기가 구조적으로 못 보는 오류 유형입니다.

▶ 전문: https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM심판 #AI검수 #의료AI #앰비언트스크라이브 #Composo

---

## LinkedIn (EN)

The same 565 clinical notes yielded an error rate of 28% or 97%, depending on a single line of reviewer instruction.

A British team ran the same 142 consultations through three commercially deployed ambient AI scribes, collected the 565 notes that came out, and audited every one of them. One note in three carried at least one verified failure.

The unusual part is what the study did next. It audited its own number. Holding the notes, the candidate errors, the evidence and the model settings fixed, the authors changed only the instruction given to the reviewer. The share of candidates upheld as errors moved from 9.3% to 79.0%. Swapping the judge to a different model family was about an eighth as large, and stacking judges into a panel produced a change statistically indistinguishable from none.

A sister paper adds the layer that travels furthest outside medicine. LLM judges tell a tampered note from its clean twin with 0.79 to 0.94 discrimination when something has been added.

When something has been removed, that falls to a band of 0.50 to 0.63, where 0.5 is a coin flip. An addition occupies a place in the document and can be pointed at. An omission leaves no text to point at.

Five families of prompt fixes, from rewording to majority voting, changed how much the judge flagged. None of them created separation. What partially restored detection was restructuring the task: draw up the list of facts that should have been recorded, then check the note against that list item by item. Even then, six in ten notes with an omission still pass.

Read the disclosures alongside the findings. Both papers are unreviewed preprints, and the authors work for a company that sells AI evaluation tooling, which the papers disclose. The audit also has no human-written control arm, so it says nothing about whether scribes are worse than clinicians.

For any organization handing data quality to an automated reviewer, the first thing to establish is not the reviewer's accuracy. It is the list of error types the reviewer is structurally unable to see.

▶ Read: https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLMasaJudge #AmbientScribe #HealthcareAI #Composo #OmissionBench

---

## Twitter/X (KO)

같은 진료기록 더미를 두 번 읽혔습니다. 오류로 인정된 비율이 9.3%에서 79.0%가 됐습니다.

노트도 증거도 모델 설정도 그대로였고, 바뀐 것은 검토자에게 준 지시문 한 줄이었습니다.

숫자를 만든 것은 제품이 아니라 세는 도구였습니다.

▶ https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/ko/

#페블러스 #데이터품질 #LLM심판 #의료AI

---

## Twitter/X (EN)

Same notes, same evidence, same model settings. Only the reviewer's instruction changed, and the share flagged as errors went from 9.3% to 79.0%.

Machine judges catch what was added. They are near coin-flip on what was left out.

What produced the number was not the product. It was the instrument that counted it.

▶ https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/en/

#Pebblous #DataQuality #LLMasaJudge #HealthcareAI

---

## Facebook (KO)

전화로 본 진료였습니다. 의사는 환자를 보지도, 만지지도 못했습니다.

그런데 AI가 대신 작성한 진료기록에는 신체검진 소견이 적혀 있었습니다. 추측이나 가정의 문법이 아니라, 관찰된 사실의 문법으로 다른 소견들 사이에 나란히.

이 장면에서 오래 걸린 것은 그 문장이 틀렸다는 사실이 아니었습니다. 읽어서는 구별되지 않는다는 것이었습니다.

영국 연구팀이 상용 스크라이브 세 제품에 같은 진료 142건을 똑같이 통과시켜 만든 노트 565장을 전부 감사했습니다. 세 장 중 한 장에 검증된 오류가 있었습니다.

그런데 이 연구는 거기서 멈추지 않고, 자기가 낸 그 숫자를 다시 감사했습니다. 노트도 증거도 모델 설정도 그대로 둔 채 검토 지시문만 바꿨더니, 같은 더미에서 9.3%가 79.0%가 됐습니다.

"우리가 재고 있는 것은 데이터의 상태인가, 우리가 고른 잣대인가?"

자매 논문은 한 겹을 더합니다. 기계 심판은 노트에 더해진 것은 꽤 잘 가려냅니다. 빠진 것 앞에서는 동전 던지기에 가까워집니다.

이유는 단순합니다. 더해진 것은 문서에 자기 자리를 차지하고 있어서 가리킬 수 있고, 빠진 것은 가리킬 텍스트를 남기지 않습니다. 저는 이 종류를 '자리를 남기지 않는 오류'라고 부르게 됐습니다.

프롬프트를 아무리 고쳐도 이 벽은 넘지 못했습니다. 탐지가 되살아난 것은 질문을 바꿨을 때였습니다. 이 노트에 빠진 것이 있는가를 열어 놓고 묻는 대신, 기록되어야 할 사실의 목록을 먼저 세우고 항목마다 대조했을 때.

페블러스가 이 두 논문을 오래 붙잡은 이유도 거기에 있습니다. 데이터를 진단하고 품질 성적서를 발급하는 일을 하다 보면 같은 질문 앞에 매번 서게 됩니다. 이 점수는 어떤 잣대로 잰 것이며, 고객이 그 잣대를 볼 수 있는가.

두 논문은 아직 심사를 거치지 않은 사전 공개본이고, 저자들이 AI 평가 도구를 파는 회사 소속이라는 점도 논문에 공시돼 있습니다. 그 사실까지 함께 읽는 것이 맞다고 봅니다.

좋은 검수기를 고르는 일보다, 그 검수기가 무엇을 못 보는지 먼저 적어 두는 일이 앞에 있는 것 같습니다.

https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #LLM심판 #앰비언트스크라이브 #의료AI

---

## Facebook (EN)

The consultation had been over the phone. The doctor never saw the patient and never touched them.

The note the AI wrote afterwards recorded findings from a physical examination. Not in the grammar of a guess, but in the grammar of something observed, sitting alongside the other findings.

What stayed with me was not that the sentence was wrong. It was that reading it tells you nothing.

A British team ran the same 142 consultations through three commercial scribes, collected 565 notes and audited all of them. One note in three carried a verified error.

Then the study did something audits rarely do. It audited its own number. With the notes, the evidence and the model settings held still, the reviewer's instruction was changed, and the same pile went from 9.3% to 79.0%.

"Are we measuring the state of the data, or the ruler we happened to pick?"

The sister paper adds a layer. Machine judges are reasonably good at catching what was added to a note. In front of what was left out, they are close to a coin flip.

The reason is plain. An addition takes up space in the document and can be pointed at. An omission leaves no text to point at. I have started calling this class of defect the errors that leave no seat behind.

No amount of prompt engineering got over that wall. Detection came back only when the question changed. Instead of asking, openly, whether anything is missing from this note, the authors first drew up the list of facts that should have been recorded. Then they checked the note against it, one item at a time.

That is where Pebblous keeps returning to these two papers. When your work is diagnosing data and issuing quality reports, you end up standing in front of the same question every time. What ruler produced this score, and can the customer see the ruler?

Both papers are unreviewed preprints. The authors work for a company that sells AI evaluation tooling, which the papers disclose. That belongs in the reading too.

Choosing a better inspector seems like the second task. Writing down what the inspector cannot see comes first.

https://blog.pebblous.ai/report/ai-scribe-error-rate-instrument-2026-09/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #LLMasaJudge #AmbientScribe #HealthcareAI
