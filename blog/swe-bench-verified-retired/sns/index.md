# SNS 홍보 글: OpenAI가 스스로 폐기한 코딩 벤치마크, SWE-bench Verified

> 소스: blog/swe-bench-verified-retired/ko/index.html
> 생성일: 2026-08-05
> URL: https://blog.pebblous.ai/blog/swe-bench-verified-retired/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

벤치마크를 만든 회사가, 그 벤치마크를 스스로 버렸다.

OpenAI가 2024년 공개해 코딩 AI의 사실상 표준 시험지가 된 SWE-bench Verified를 최전선 역량의 척도에서 내렸다. 어려운 문제 138개를 직접 열어 보자, 59%에서 채점 테스트나 문제 설명 자체에 결함이 있었다. 기능적으로 옳은 코드를 특정 구현 방식만 정답으로 강제하는 좁은 테스트가 기각하고 있었다.

더 곤란한 건 오염이었다. GPT-5.2가 "거의 못 푼다"던 과제를 풀었을 때, 문제 설명에는 없던 정답 정보가 모델의 사고 과정에 이미 들어 있었다. 같은 저장소의 릴리스 노트가 학습 데이터로 새어 든 것이다. 문제도, 정답 커밋도, 채점 테스트도 모두 깃허브 공개 저장소에서 나오는데, 그 저장소가 대형 모델의 학습원이기도 하다. 학습과 평가가 같은 우물에서 나온다.

오염은 사후에 탐지할 수 있어도 되살릴 방법은 없다. 정답을 본 모델의 기억을 지울 수 없기 때문이다. 남는 선택지는 폐기와 교체뿐이었다.

데이터 품질 논의는 오래 학습 데이터에 머물렀지만, 이 사건은 같은 질문을 평가 데이터로 확장하라고 요구한다. 평가셋이 언제 만들어졌고, 학습 컷오프와 시점이 겹치지 않는지, 외부에 공개된 적이 있는지가 곧 그 점수의 유효기간이다. 페블러스가 데이터 품질을 평가셋의 신선도와 출처 증명으로 확장해 보는 이유이기도 하다.

▶ 전문: https://blog.pebblous.ai/blog/swe-bench-verified-retired/ko/

#페블러스 #데이터클리닉 #데이터품질 #벤치마크오염 #학습데이터 #데이터거버넌스 #OpenAI #SWEbench #AI코딩평가

---

## LinkedIn (EN)

The company that built the benchmark just walked away from it.

OpenAI has stopped using SWE-bench Verified, the coding benchmark it released in 2024 and turned into the industry's default exam, as a measure of frontier capability. When its engineers audited 138 of the hardest tasks, 59% carried a flaw in the grading test or the problem statement itself: narrow tests that rejected functionally correct code because it fixed the bug a different way.

Contamination was the harder finding. When GPT-5.2 solved tasks the audit had marked "nearly impossible," answer information absent from the problem was already sitting in the model's chain of thought — leaked in from a release note in the same repository. The problems, the answer commits, and the grading tests all come from public GitHub, and public GitHub is also where large models are trained. Training and evaluation draw from the same well.

Contamination can be detected after the fact, but not undone. You cannot erase what a model has already seen, so only retirement and replacement remain.

Data-quality work has long centered on training data. This case pushes the same scrutiny onto evaluation data: when a test set was built, whether its timing overlaps a model's training cutoff, and whether it has ever been public — that is the shelf life of the score. It is why we treat evaluation-set freshness and provenance as a data-quality problem in its own right.

▶ Read: https://blog.pebblous.ai/blog/swe-bench-verified-retired/en/

#Pebblous #DataClinic #DataQuality #BenchmarkContamination #TrainingData #DataGovernance #OpenAI #SWEbench #AICoding

---

## Twitter/X (KO)

OpenAI가 자사가 만든 코딩 벤치마크 SWE-bench Verified를 폐기했다. 어려운 문제 138개를 감사하자 59%가 결함이었고, 정답은 이미 학습 데이터에 새어 있었다.

벤치마크가 학습 데이터로 흘러 들어가는 순간, 점수는 실력이 아니라 노출을 잰다.

https://blog.pebblous.ai/blog/swe-bench-verified-retired/ko/

#페블러스 #데이터품질 #벤치마크오염 #OpenAI #SWEbench

---

## Twitter/X (EN)

OpenAI retired SWE-bench Verified, the coding benchmark it built. An audit of 138 hard tasks found 59% were flawed, and the answers had already leaked into training data.

The moment a benchmark seeps into training data, the score measures exposure, not skill.

https://blog.pebblous.ai/blog/swe-bench-verified-retired/en/

#Pebblous #DataQuality #BenchmarkContamination #OpenAI #SWEbench

---

## Facebook (KO)

시험 전에 문제와 답을 미리 받은 학생이 있다고 해 봅니다.

그 학생이 답을 통째로 외우지 않았더라도, 답을 한 번 본 적 있다는 사실만으로 옆자리 학생보다 앞섭니다. 점수는 실력이 아니라, 무엇을 봤느냐의 함수가 됩니다.

OpenAI가 자기가 만든 코딩 벤치마크를 스스로 폐기하며 든 비유가 정확히 이것이었습니다.

2024년에 공개해 코딩 AI의 표준 시험지가 된 SWE-bench Verified를, 어려운 문제 138개만 다시 열어 봤더니 절반 넘게 채점 기준이 틀려 있었고, 한 과제에서는 문제에 없던 정답 정보가 모델의 사고 과정에 이미 들어 있었습니다. 같은 저장소의 릴리스 노트가 학습 데이터로 새어 든 것이었습니다.

문제도, 정답도, 채점 테스트도 전부 깃허브 공개 저장소에서 나오는데, 바로 그 저장소가 모델을 학습시키는 데이터원이기도 합니다. 학습에 쓴 우물과 평가에 쓴 우물이 같았던 셈입니다.

한참을 붙잡게 된 건 그다음 대목이었습니다. 오염은 나중에 탐지할 수 있어도, 이미 답을 본 모델의 기억을 지울 방법은 없다는 것. 그래서 남는 선택지가 폐기와 교체뿐이라는 것.

우리는 오랫동안 "학습 데이터가 깨끗한가"를 물어 왔습니다. 그런데 이 사건은 조용히 다른 질문을 밀어 넣습니다. "그 실력을 재는 시험지는, 모델이 본 적 없다고 어떻게 증명할까요?"

▶ 전문: https://blog.pebblous.ai/blog/swe-bench-verified-retired/ko/

#페블러스 #데이터품질 #벤치마크오염 #OpenAI #SWEbench #데이터클리닉

---

## Facebook (EN)

Imagine a student who was handed the questions, and the answers, before the exam.

Even if that student never memorized the answers outright, having simply seen them once puts them ahead of the classmate beside them. The score stops measuring skill and starts measuring what they were exposed to.

That is the exact comparison OpenAI reached for when it retired a benchmark it had built itself.

SWE-bench Verified became the standard exam for coding AI after its 2024 release. When OpenAI reopened just 138 of its hardest problems, more than half turned out to have broken grading, and in one task, answer information absent from the problem was already in the model's chain of thought — leaked in from a release note in the same repository.

The problems, the answers, and the grading tests all come from public GitHub, and that same GitHub is where the models are trained. The well they drew evaluation from was the well they drew training from.

What stayed with me was the part that comes after. Contamination can be spotted later, but a model's memory of an answer it has already seen cannot be erased. Which leaves only one move: retire the test and build a new one.

For years we have asked whether the training data is clean. This quietly slips in a different question. "The exam that measures the skill — how do you prove the model has never seen it?"

▶ Read: https://blog.pebblous.ai/blog/swe-bench-verified-retired/en/

#Pebblous #DataQuality #BenchmarkContamination #OpenAI #SWEbench #DataClinic
