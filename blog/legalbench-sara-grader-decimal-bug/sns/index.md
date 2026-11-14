# SNS 홍보 글: AI 법률 시험 LegalBench, 채점기가 소수점을 지운다

> 소스: blog/legalbench-sara-grader-decimal-bug/
> 생성일: 2026-11-07
> URL: https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

법률 추론 벤치마크 LegalBench의 세금 문항에서 한 모델이 받은 성적은 96개 중 8개였다. 모델 응답도 정답표도 그대로 둔 채 채점 코드만 고치자 같은 답 91개가 인정됐다.

11월 4일 arXiv에 올라온 감사 논문이다. 아마존웹서비스의 Yanru Xiao와 아이오와주립대의 Yifei Cai가 공개된 정책 판단 벤치마크 아홉 종을 뜯어봤다. 감사 증거와 수정 코드는 BAR라는 이름으로 함께 공개했다.

버그는 한 줄짜리다. 채점기가 답에서 천 단위 쉼표를 떼어내면서 소수점까지 같이 지우고 맨 앞 정수만 읽었다. 센트를 적은 정확한 금액은 백 배로 부풀어 떨어지고, 백 배 작은 금액은 그대로 통과한다. 과제 설명 어디에도 센트를 적지 말라는 말은 없었고, 세 모델 모두 여든 안팎의 문항에서 센트를 적었다.

점수보다 날카로운 것은 순서다. 원래 채점에서 혼자 앞서 있던 GPT6 Luna가 고친 채점에서는 셋 중 맨 뒤로 내려갔다. 8과 9의 차이가 서열처럼 읽히고 있었던 것이다.

모든 수정이 점수를 올려 주지는 않는다. ConditionalQA에서는 답을 내지 않은 문항을 분모에서 빼 주던 집계를 조이자 한 모델의 정확 일치율이 58.02%에서 47.23%로 내려갔다. 저자들도 이 숫자가 재는 것은 결함의 크기가 아니라 집계 방식의 선택이라고 적는다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 평가 기록을 열어 보면 모델 버전과 점수는 거의 언제나 남아 있고, 그 점수를 만든 채점 코드의 버전이 함께 적힌 경우는 드물다. 모델이 바뀌면 티가 나지만 채점기는 조용히 바뀐다.

▶ 전문: https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #LegalBench #RuleArena #AI벤치마크 #벤치마크감사 #AIReadyData #arXiv

---

## LinkedIn (EN)

On the tax questions in LegalBench, a widely used legal reasoning benchmark, one model scored 8 out of 96. Leave the model responses and the answer key exactly where they are, repair the scoring code, and 91 of those same answers are accepted.

That is the finding of an audit posted to arXiv on November 4. Yanru Xiao of Amazon Web Services and Yifei Cai of Iowa State University took apart nine public policy-based decision benchmarks and released the evidence alongside the corrected code, under the name BAR.

The bug is one line long. Stripping the thousands separator from an answer, the scorer deleted the decimal point with it and read only the leading integer. An exact amount written out to the cents is inflated a hundredfold and rejected, while an amount a hundred times too small sails through. Nothing in the task instructions told models to leave the cents off, and all three models wrote them on roughly eighty of the 96 cases.

The ordering cuts deeper than the scores. GPT6 Luna, alone out in front under the original scoring, finishes last of the three once the scorer is fixed. A gap of 8 against 9 had been reading as a ranking.

Not every correction hands out points. In ConditionalQA, tightening an aggregation that had quietly dropped unanswered cases from the denominator pushed one model's exact-match rate from 58.02% to 47.23%. The authors are careful to say that number measures a choice of aggregation, not the size of a defect.

Pebblous measures the quality of AI training data with DataClinic. Open an evaluation record and the model version and the scores are nearly always preserved; the version of the scoring code that produced them rarely is. A model that changes announces itself. A scorer changes in silence.

▶ Read: https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #LegalBench #RuleArena #AIBenchmark #BenchmarkAudit #AIReadyData #arXiv

---

## Twitter/X (KO)

법률 AI 벤치마크의 채점 코드가 답에서 천 단위 쉼표를 떼면서 소수점까지 함께 지우고 있었다. 센트까지 적은 정확한 금액은 떨어지고, 백 배 작은 금액은 붙었다. 모델도 정답표도 그대로 두고 채점만 고치자 인정된 답이 8개에서 91개가 됐다.

점수가 낮을 때 그것이 모델 이야기인지 채점기 이야기인지는, 채점 코드를 열어 보기 전까지 갈리지 않는다.

https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/ko/

#페블러스 #데이터품질 #LegalBench #AI벤치마크

---

## Twitter/X (EN)

A legal AI benchmark's scoring code was stripping the thousands separator from answers and taking the decimal point with it. Exact amounts written to the cents were rejected; amounts a hundred times too small passed. Fix the scorer alone, touching neither model nor answer key, and accepted answers go from 8 to 91.

When a score comes in low, nothing tells you whether that is about the model or about the grader until someone opens the grader.

https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/en/

#Pebblous #DataQuality #LegalBench #AIBenchmark

---

## Facebook (KO)

시험 답안에 금액을 쓸 때 센트까지 적는 사람이 있습니다.

259,487달러가 아니라 259,487.13달러라고 적는 쪽입니다. 더 정확하게 적었으니 더 나은 답이라고 보통은 생각합니다.

그런데 이 시험의 채점기는 그 답을 틀렸다고 했습니다.

LegalBench라는 법률 추론 벤치마크의 세금 문항 이야기입니다. 채점 코드가 답에서 천 단위 쉼표를 떼어내면서 소수점을 함께 지우고 맨 앞 정수만 읽었습니다. 259,487.13은 25948713이 되어 참조값의 백 배로 비교에 들어갑니다. 반대로 백 배 작은 2,594.87달러는 259487로 읽혀 인정됩니다. 능력을 재는 대신 답을 적는 습관을 재고 있었던 셈입니다.

감사를 맡은 두 연구자는 채점기가 어디까지 올라갈 수 있는지도 재 봤습니다. 96개 문항의 정답을 그대로 베껴 답안으로 넣었더니 92점이 나왔습니다. 저자들은 이 92를 모델 성적이 아니라 '채점기의 천장'이라고 부릅니다. 낼 세금이 0원인 문항 넷은 정답을 적어도 통과할 수 없는 구조였기 때문입니다.

고친 채점기로 같은 응답을 다시 매기자 인정된 답이 8개에서 91개로 올랐고, 원래 맨 앞에 있던 모델이 맨 뒤로 내려갔습니다. 소수점 삭제 자체는 두 달 전 누군가 이미 공개 이슈로 보고해 둔 내용이었습니다. 그런데도 그 채점기가 낸 숫자는 계속 인용됐습니다. 틀린 점수는 이상하게 보이지 않기 때문입니다. 8점은 그냥 낮은 점수처럼 보이고, 낮은 점수에는 설명이 쉽게 붙습니다.

"이 점수가 낮은 것은 모델 때문입니까, 채점기 때문입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 평가 자료를 열어 보면 모델 버전과 점수는 거의 언제나 남아 있습니다. 그 점수를 만든 채점 코드의 버전이 함께 적힌 경우는 드뭅니다.

모델은 바뀌면 티가 나는데 채점기는 조용히 바뀝니다. 그래서 작년의 숫자와 올해의 숫자가 같은 잣대로 잰 값인지는, 누가 먼저 묻기 전까지 아무도 모르는 채로 남습니다.

▶ 전문: https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/ko/

#페블러스 #데이터클리닉 #데이터품질 #LegalBench #AI벤치마크 #벤치마크감사

---

## Facebook (EN)

Some people write the cents.

Not $259,487 but $259,487.13, because the second one is the more exact answer and exactness is supposed to be rewarded.

The grader marked it wrong.

This is the tax section of LegalBench, a legal reasoning benchmark. Its scoring code stripped the thousands separator out of an answer, took the decimal point along with it, and read the leading integer. So $259,487.13 arrived at the comparison as 25948713, a hundred times the reference. An answer of $2,594.87, a hundred times too small, arrived as 259487 and was accepted. What the grader measured was not knowledge of tax law. It was a habit of notation.

The two researchers behind the audit also measured how high the grader could possibly go. They copied the reference value of all 96 cases straight into the answer slot and the original scorer returned 92. They call that number not a model score but a ceiling on the grader itself. Four of the cases have a correct answer of zero, and the formula made those unreachable no matter what a model wrote.

Rescored with the repaired grader, the same stored responses went from 8 accepted to 91, and the model that had been out in front finished last. The deleted decimal point had already been filed as a public issue two months earlier. The numbers that grader produced kept being cited regardless, because a wrong score does not look wrong. An 8 looks like a low score, and low scores attract easy explanations.

"Is this score low because of the model, or because of the grader?"

Pebblous measures the quality of AI training data with DataClinic. Open an evaluation record and the model version and the scores are nearly always preserved. The version of the scoring code that produced them rarely is.

A model that changes announces itself; a grader changes in silence. Whether last year's number and this year's were measured on the same ruler is a question that goes unanswered mostly because nobody asks it.

▶ Read: https://blog.pebblous.ai/blog/legalbench-sara-grader-decimal-bug/en/

#Pebblous #DataClinic #DataQuality #LegalBench #AIBenchmark #BenchmarkAudit
