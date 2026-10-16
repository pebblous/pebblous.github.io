# SNS 홍보 글: OpenProblemBench, 정답 없는 문제의 채점자도 AI다

> 소스: blog/openproblembench-ai-judges-open-problems/ko/index.html
> 생성일: 2026-10-17
> URL: https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

아직 아무도 풀지 못한 수학·이론물리 문제 82개를 AI에게 맡긴 벤치마크가 10월 8일 arXiv에 올라왔습니다. 맞춰 볼 정답지가 세상에 없어서, 채점도 평가 모델 네 개가 각각 따로 맡는 구조입니다.

채점자가 가장 먼저 하는 일은 점수를 매기는 것이 아닙니다. 그 문제가 무엇을 요구하는지를 항목으로 적어 내리고, 제출물이 그 항목을 하나씩 채웠는지 대조합니다. 논문은 그 목록을 의무라고 부릅니다. 맞았는지를 물을 수 없으니 남은 빈칸이 있는지를 묻는 구조입니다.

가장 높은 기록은 GPT-6-Astra의 평균 14.0%입니다. 그런데 그 평균을 채점자별로 풀어 놓으면, 똑같은 제출물을 두고 가장 후하게 본 채점자가 가장 박하게 본 채점자보다 1.6배 넘게 세어 줬습니다.

네 채점자가 모두 풀렸다고 본 문제는 82개 가운데 열 개뿐입니다.

1위는 넷 다 같았습니다. 그 아래부터 순서가 어긋납니다.

저자들이 결과에 직접 붙여 둔 단서가 숫자보다 무겁습니다. 채점자들이 같은 오류를 공유할 수 있어서, 넷이 서로 일치한다는 사실만으로는 거짓양성률도 거짓음성률도 추정할 수 없다고 적었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 요약문이나 상담 응답이나 고객 리포트처럼 보관된 정답이 없는 산출물의 품질은 이미 모델 채점자의 몫입니다. 그 자리에서 평균 한 줄만 화면에 남기면, 채점자들이 어디서 갈렸는지를 되찾을 길이 사라집니다.

정답표가 없는 평가에서는 점수가 아니라 판정 절차가 품질의 전부입니다.

▶ 전문: https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #OpenProblemBench #arXiv #AI벤치마크 #LLM채점 #AI평가신뢰도

---

## LinkedIn (EN)

A benchmark posted to arXiv on 8 October handed AI 82 mathematics and theoretical physics problems that nobody has solved yet. With no solution in the world to check the work against, the grading went to four evaluator models reading independently.

A grader does not start by awarding a score. It starts by writing out what the problem demands, item by item, then checking the submission against that list. The paper calls those items obligations. Correctness cannot be asked, so the question becomes whether any gap is left open.

The top result is GPT-6-Astra at a mean of 14.0%. Unfold that average by grader and the most generous reader counted more than 1.6 times as many solved submissions as the strictest one, on identical work.

All four graders agreed on a solved verdict for just ten of the 82 problems.

First place holds whoever reads. Below it, the order comes apart.

The caution the authors attached to their own results carries more weight than the figures. Graders can share the same blind spots, they wrote, and agreement among them cannot be used to estimate a false positive or false negative rate.

Pebblous runs quantitative diagnosis on AI training data with DataClinic. Summaries, support replies, client reports: work with no stored answer to compare against has already been handed to model graders. Leave only an averaged line on the dashboard and there is no way back to where the graders split.

When there is no answer key, the procedure is the quality. The score is only what the procedure happened to return.

▶ Read: https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #OpenProblemBench #arXiv #AIBenchmark #LLMasaJudge #EvaluationWithoutGroundTruth

---

## Twitter/X (KO)

아직 아무도 풀지 못한 수학·이론물리 문제 82개를 AI에게 맡긴 벤치마크가 arXiv에 올라왔습니다. 맞춰 볼 정답지가 없어 채점도 평가 모델 넷이 따로 맡았고, 순위는 선두 아래부터 채점자마다 달라졌습니다.

넷이 일치했다는 사실은 그 판정이 옳다는 증거가 아닙니다. 같은 자리에서 같이 틀렸을 가능성이 그대로 남습니다.

https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/ko/

#페블러스 #데이터품질 #OpenProblemBench #AI평가

---

## Twitter/X (EN)

A new arXiv benchmark hands AI 82 mathematics and physics problems nobody has solved. With no answer key to check against, four evaluator models grade independently, and the ranking below the leader shifts with whoever reads.

Four graders agreeing is not evidence that they are right. They can miss the same thing in the same place.

https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/en/

#Pebblous #DataQuality #OpenProblemBench #LLMasaJudge

---

## Facebook (KO)

"이 품질 점수, 어디서 나온 건가요?"

모델이 매겼다는 답이 돌아옵니다.

대화는 보통 그다음 질문에서 멈춥니다. 모델이 몇 개였는지, 그 모델들이 서로 얼마나 갈렸는지는 어디에도 적혀 있지 않기 때문입니다.

그 장면을 그대로 실험으로 옮겨 놓은 벤치마크가 10월 8일 arXiv에 올라왔습니다.

OpenProblemBench는 수학과 이론물리 문헌에서 아직 아무도 풀지 못한 문제 82개를 모았습니다.

맞춰 볼 정답지가 세상에 없는 문제들입니다.

그래서 채점도 평가 모델 네 개가 서로 참조하지 않고 따로 맡았습니다.

채점자가 가장 먼저 하는 일이 오래 남았습니다. 점수를 매기는 것이 아니라, 그 문제가 무엇을 요구하는지를 항목으로 적어 내리는 일입니다. 논문은 그 목록을 의무라고 부릅니다.

정답이 있어야 할 자리를 그 목록이 대신 채웁니다.

결과는 가지런하지 않았습니다. 가장 높은 모델의 평균은 14.0%인데, 그 평균을 채점자별로 풀어 놓으면 똑같은 제출물을 두고 아홉 건이라고 본 채점자와 열다섯 건이라고 본 채점자가 함께 앉아 있습니다. 넷이 모두 풀렸다고 본 문제는 82개 가운데 열 개입니다.

1위에서는 넷이 갈리지 않았습니다.

갈린 것은 그 아래부터였습니다.

저는 이 구조를 '정답표 없는 채점'이라고 부르고 있습니다. 맞았는지를 물을 수 없어서, 남은 빈칸이 있는지를 묻는 자리입니다.

그리고 논문이 결과에 직접 붙여 둔 경고가 가장 무거웠습니다. 채점자들이 같은 오류를 공유할 수 있어서, 서로 일치한다는 사실만으로는 틀릴 확률을 추정할 수 없다고 저자들은 적었습니다.

"넷이 같은 답을 냈다는 건, 그 답이 맞다는 뜻입니까? 아니면 넷이 같은 곳을 못 봤다는 뜻입니까?"

다음 판의 계획을 읽다가 손이 멈췄습니다. 블라인드 상태의 분야 전문가에게 표본을 다시 읽히는데, 그 표본에 네 채점자가 만장일치로 통과시킨 건을 함께 넣겠다고 합니다. 사람 검수 표본은 보통 점수가 낮거나 의견이 갈린 쪽에서 뽑습니다.

만장일치를 의심 목록에 같이 올려 두는 설계입니다.

페블러스가 DataClinic으로 데이터 품질을 정량 진단할 때 남는 질문도 결국 이쪽입니다. 점수가 몇 점인가보다, 그 점수가 어디서 갈렸고 그 갈림이 기록에 남아 있는가.

불일치를 노이즈로 보고 지우는 설계와, 불일치를 기록으로 남기는 설계는 같은 숫자를 전혀 다른 근거로 만듭니다.

지워진 갈림은 조용합니다. 조용해서, 애초에 없었던 것처럼 보입니다.

지금 우리 화면에 남아 있는 평균 한 줄이 무엇을 덮고 있는지, 저는 한 번도 열어 본 적이 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/ko/

#페블러스 #데이터품질 #OpenProblemBench #DataClinic #AI평가 #arXiv

---

## Facebook (EN)

"Where did this quality score come from?"

A model assigned it, comes the answer.

The conversation usually stops at the next question. How many models, and how far apart were they? That part is written down nowhere.

A benchmark that puts exactly that scene into an experiment went up on arXiv on 8 October.

OpenProblemBench gathers 82 problems from the mathematics and theoretical physics literature that nobody has solved.

There is no answer key for any of them anywhere in the world.

So the grading went to four evaluator models, each reading without seeing the others.

What stayed with me is what a grader does first. Not award a score. Write out, item by item, what the problem actually demands. The paper calls those items obligations.

That list sits where the answer was supposed to be.

The results did not line up neatly. The leading model averages 14.0%, but unfold that average by grader and one reader counted nine solved submissions where another counted fifteen, on identical work. All four agreed on a solved verdict for only ten of the 82.

On first place the four never split.

The splitting began one rank down.

I have started calling this shape "grading with no answer key." Correctness cannot be asked, so the question becomes whether a gap is left open.

The heaviest line is the caution the authors attached to their own results. Graders can carry the same errors, they wrote, and their agreement on its own cannot estimate how often they are wrong.

"If four graders return the same verdict, does that mean the verdict is right? Or that all four failed to look at the same place?"

I sat for a while with what they plan for the next edition. Blind domain experts will re-read a stratified sample, and that sample will include the cases all four graders passed unanimously. Human review samples are usually drawn from the low scores and the disagreements.

Unanimity goes on the suspect list too.

The question that remains when Pebblous runs a quantitative diagnosis of data quality with DataClinic lands in the same place. Less how high the score is, more where the score split and whether that split survived into the record.

A design that treats disagreement as noise and a design that writes disagreement down turn the same number into entirely different evidence.

An erased split is quiet. Quiet enough to look as though it was never there.

What the single averaged line on our own dashboard is covering, I have never once opened.

▶ Full piece: https://blog.pebblous.ai/blog/openproblembench-ai-judges-open-problems/en/

#Pebblous #DataQuality #OpenProblemBench #DataClinic #LLMasaJudge #arXiv
