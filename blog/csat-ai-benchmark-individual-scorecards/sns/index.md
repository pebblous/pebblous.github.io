# SNS 홍보 글: 수능 AI 벤치마크, 시험지마다 만점 모델이 다르다

> 소스: blog/csat-ai-benchmark-individual-scorecards/ko/index.html
> 생성일: 2026-11-21
> URL: https://blog.pebblous.ai/blog/csat-ai-benchmark-individual-scorecards/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

올해 수능을 AI에게 풀린 채점표가 두 장 나왔는데, 만점을 받은 모델이 서로 다르다.

한 장은 순천향대 컴퓨터소프트웨어공학과에 다니는 구유겸이 만들었다. 2024년부터 세 해째 혼자 돌리는 CSAT-벤치마크로, 이번에는 모델 35종에게 2027학년도 수능 전 과목을 풀렸다.

지난 20일 공개된 결과에서 전 과목 원점수 합계 1,276점 만점을 받은 모델은 GPT-6.2 아스트라와 제미나이 4 네온이다.

다른 한 장은 깃허브에 있다. 27suneung-bench는 같은 수능을 1,226점 만점으로 잡았고, 거기서 전 과목 만점은 클로드 페이블 5.2 하나다. 앞 시험지의 만점자 GPT-6.2 아스트라는 여기서 1,223점으로 2위다.

총점이 50점 어긋나는 자리는 모델이 아니라 시험 범위다. 1,276점에는 한국사와 탐구 17개 과목이 들어가고, 1,226점 쪽은 한국사가 빠져 있다. 채점 규칙도 같지 않다. 뒤쪽은 모델이 답하지 않은 문항을 정답률 계산에서 빼는데, 그 성적표에는 미응답이 20문항에서 180문항까지 찍힌 모델이 섞여 있다.

국산 1위는 LG AI연구원 K-엑사원 2.5다. 450점 기준 414.7점으로 해외 공동 1위와 35점 넘게 벌어졌다.

이미지가 들어간 문항에서는 정답률이 60.4%에 그쳤다. 같은 문항에서 상위 세 종은 100%를 기록했다.

따로 떼어 둘 칸이 하나 더 있다. 수능은 수십 년치 기출과 해설이 인터넷에 공개된 시험이라, 올해 문항이 새것이라는 사실과 출제 유형이 사전학습 데이터에 이미 들어갔을 가능성은 별개로 남는다. 두 시험지 모두 실행 환경은 꼼꼼히 적었고, 오염 검사 절차는 적지 않았다.

페블러스는 AI 학습 데이터에 품질 수치를 붙인다. 채점에 쓰는 데이터에도 같은 자를 댈 수 있다.

▶ 전문: https://blog.pebblous.ai/blog/csat-ai-benchmark-individual-scorecards/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM평가 #벤치마크오염 #수능AI벤치마크 #CSAT벤치마크 #K엑사원 #제미나이

---

## LinkedIn (EN)

Thirty-five AI models sat this year's Korean college entrance exam, and the two scorecards of that sitting name two different perfect scorers.

The first was built by Koo Yu-gyeom, a computer software engineering student at Soonchunhyang University who has run the exercise on his own every year since 2024. His CSAT-benchmark put 35 models through every subject of the 2027 College Scholastic Ability Test.

The results, published on 20 November, give full marks of 1,276 raw points to OpenAI's GPT-6.2 Astra and Google's Gemini 4 Neon.

The second sits in a GitHub repository. 27suneung-bench grades the same exam out of 1,226 points, and there the only model with full marks is Claude Fable 5.2. GPT-6.2 Astra, top of the first paper, comes second here on 1,223.

The 50-point gap between the two totals is not about the models. It is scope. The 1,276 counts Korean history and all 17 inquiry subjects; the 1,226 leaves Korean history out.

Marking differs too. The second benchmark drops unanswered questions from its accuracy figure, and its table lists models that skipped anywhere from 20 to 180 questions.

Korea's leading model, LG AI Research's K-EXAONE 2.5, took 414.7 on the 450-point scale, more than 35 points behind the joint foreign leaders.

On questions carrying an image it answered 60.4% correctly, against 100% for the top three.

Both scorecards leave the same field empty. Decades of past Korean entrance papers and worked solutions sit on the open web, so the fact that this year's questions are new does not settle whether their question types were already in pretraining data. Both benchmarks document their runtime conditions in detail. Neither documents a contamination check.

Pebblous gives AI training data a score, and DataClinic is where that score is written down. Data used for grading deserves the same treatment.

▶ Read: https://blog.pebblous.ai/blog/csat-ai-benchmark-individual-scorecards/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLMEvaluation #BenchmarkContamination #CSATBenchmark #KEXAONE #Gemini

---

## Twitter/X (KO)

올해 수능을 채점한 개인 벤치마크가 둘이다.

한쪽 만점은 GPT-6.2 아스트라와 제미나이 4 네온, 다른 쪽 만점은 클로드 페이블 5.2.

두 성적표를 가른 것은 모델이 아니라 시험 범위를 어디까지 잡았느냐다.

기출이 학습 데이터에 있었는지는 어느 쪽도 확인하지 않았다.

https://blog.pebblous.ai/blog/csat-ai-benchmark-individual-scorecards/ko/

#페블러스 #수능AI벤치마크 #LLM평가 #데이터품질

---

## Twitter/X (EN)

Two individual benchmarks graded this year's Korean college entrance exam.

One hands full marks to GPT-6.2 Astra and Gemini 4 Neon.

The other hands them to Claude Fable 5.2.

What separates the two is not model skill. It is how much of the exam each person decided to count.

Neither scorecard records a contamination check.

https://blog.pebblous.ai/blog/csat-ai-benchmark-individual-scorecards/en/

#Pebblous #CSATBenchmark #LLMEvaluation #DataQuality

---

## Facebook (KO)

"AI가 수능에서 만점을 받았다"

주말 동안 이 문장을 여러 곳에서 봤습니다.

그런데 어느 시험지에서 받은 만점인지는 그 문장 어디에도 없었습니다.

올해 수능으로 AI 성적을 매긴 기록이 둘입니다.

한쪽은 순천향대에 다니는 학생이 세 해째 혼자 돌리는 시험지이고, 다른 한쪽은 깃허브 저장소 하나입니다. 두 사람 다 방법을 공개했고 결과도 공개했습니다. 감춘 쪽은 없습니다.

다만 만점자가 서로 다릅니다. 앞쪽에서는 GPT-6.2 아스트라와 제미나이 4 네온이, 뒤쪽에서는 클로드 페이블 5.2가 모든 문항을 맞혔습니다. 어느 과목까지 시험 범위에 넣을지를 정한 사람이 달랐기 때문입니다.

둘 다 성립하는 채점입니다. 사이를 조정해 줄 자리가 비어 있을 뿐입니다.

제가 더 오래 머문 곳은 다른 칸이었습니다.

두 시험지 모두 실행 환경은 꼼꼼히 적어 두었는데, 이 시험지가 모델에게 처음 보는 것인지를 적은 줄만 비어 있었습니다. 수능은 수십 년치 기출이 인터넷에 올라와 있는 시험입니다.

"올해 만점은 실력입니까, 익숙함입니까?"

답하려면 사전학습 데이터에 무엇이 들어갔는지를 알아야 하는데, 그건 개인이 혼자 확인할 수 있는 정보가 아닙니다.

페블러스가 DataClinic으로 해 온 일도 데이터에 수치를 붙이는 쪽입니다. 모델을 가르친 데이터를 그렇게 들여다봤다면, 모델을 채점한 데이터도 같은 눈으로 볼 수 있다고 생각합니다.

어느 모델이 1등인지는 기사 제목에 남습니다. 그 등수를 매긴 시험지가 어떤 자료였는지는 아직 아무 데도 적혀 있지 않습니다.

#페블러스 #수능AI벤치마크 #데이터클리닉 #데이터품질 #CSAT벤치마크 #벤치마크오염

---

## Facebook (EN)

"AI scored full marks on the CSAT"

That sentence came past me several times over the weekend.

Which exam paper it meant was not in the sentence.

Two records exist of this year's exam being used to grade AI.

One is an exam paper a university student has been running on his own for three years. The other is a GitHub repository. Both published their method, and both published their results. Nothing was withheld.

The perfect scorers differ, though. On the first paper GPT-6.2 Astra and Gemini 4 Neon answered everything correctly; on the second, Claude Fable 5.2 did. Different people decided which subjects belonged inside each exam.

Both markings hold. There is simply no seat from which to reconcile them.

The field I sat with longer was a different one.

Both papers set out their runtime conditions carefully, and on both the line about whether the exam was new to the model is empty. Decades of past Korean entrance papers are sitting on the open web.

"Is this year's perfect score skill, or familiarity?"

Answering that means knowing what went into pretraining, and that is not something a person working alone can look up.

Pebblous keeps a measure of what a training set contains, and DataClinic is how that measure gets written. Having looked at the data that teaches a model that way, I think the data that grades one can be read the same way.

Which model came first will stay in the headlines. What kind of material produced that ranking has not been written down anywhere yet.

#Pebblous #CSATBenchmark #DataClinic #DataQuality #LLMEvaluation #BenchmarkContamination
