# SNS 홍보 글: 우리 회사 코드에서도 AI가 그 점수를 낼까?

> 소스: report/real-swe-private-code-benchmark-2026-09/ko/index.html
> 생성일: 2026-09-15
> URL: https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

코딩 에이전트가 실제 기업의 비공개 코드에서 실패한 468번 가운데, 기존 동작을 깨뜨렸거나 엉뚱한 파일을 고친 경우는 5.1%뿐이었다.

Specific Labs가 여러 회사에서 프로덕션 코드베이스를 라이선스해 와 만든 벤치마크 Real-SWE의 결과다. 여덟 개 모델을 각자의 도구 환경에 얹어 640번 돌렸고, 평균 해결률은 26.9%였다.

나머지 94.9%는 성격이 다르다. 지시가 요구한 동작을 빠뜨리거나, 맞는 변경을 옆 시스템에 잘못 이어 붙이거나, 코드베이스에 들어가 확인했으면 알 수 있었을 것을 추측으로 메웠다. 모델이 진 자리는 코드 그 자체가 아니라 그 코드가 놓일 자리다.

다만 이 여덟 줄을 모델 순위표로 읽으면 안 된다. 과제가 열 개뿐이라 상위권의 신뢰구간이 서로 겹치고, 줄마다 실행 환경이 달라 모델의 실력과 도구의 실력이 분리되지 않는다. 제작사도 "모델과 하네스의 조합을 평가한다"고 페이지에 적어 두었다.

사내 코드에서 점수가 내려간다는 것은 다른 곳에서 확인된다. Scale AI의 SWE-Bench Pro는 공개 분할과 비공개 분할을 같은 벤치마크 안에 두는데, 양쪽 리더보드에 같은 이름으로 오른 일곱 쌍이 예외 없이 비공개 쪽에서 낮았다. 그러니 도입을 검토하는 쪽에 남는 물음은 하나다. 지금 보고 있는 그 점수는 남의 오픈소스에서 난 것인가, 우리 회사 코드 같은 데이터에서 난 것인가.

▶ 전문: https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #RealSWE #SpecificLabs #코딩에이전트 #AI벤치마크

---

## LinkedIn (EN)

Of the 468 attempts coding agents failed on real companies' private code, only 5.1% came from breaking existing behavior or editing the wrong file.

The benchmark is Real-SWE, released this month by Specific Labs, which licenses production codebases from operating companies instead of scraping public repositories. Eight models ran inside their own vendor harnesses across 640 rollouts, and the average resolution rate was 26.9%.

The other 94.9% of failures look different. The agents dropped a behavior the instructions asked for, wired a correct change into the wrong part of a neighboring system, or built on an assumption they could have verified in the workspace and never did. What defeated them was not the code itself but the place the code had to fit.

The eight rows are not a model ranking, and the lab does not present them as one. With only ten tasks the confidence intervals at the top overlap, and because every row runs in a different harness, model skill and tooling skill never come apart.

That private code depresses scores is better established elsewhere. On Scale AI's SWE-Bench Pro, where a public and a private split sit inside the same benchmark, all seven models appearing on both leaderboards scored lower on the private side. Which leaves one question for anyone evaluating an agent to adopt: was that score earned on somebody else's open source, or on data that looks like your own codebase?

▶ Read: https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #RealSWE #SpecificLabs #CodingAgents #AIBenchmark

---

## Twitter/X (KO)

코딩 에이전트가 기업의 비공개 코드에서 실패한 468번 중, 기존 동작을 깨뜨렸거나 엉뚱한 파일을 고친 경우는 5.1%였다. 나머지는 남이 만들어 둔 시스템을 끝까지 읽어 내지 못해 졌다.

더 큰 모델보다 맥락을 공급하는 쪽이 점수를 움직인다.

https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/ko/

#페블러스 #코딩에이전트 #AI벤치마크 #RealSWE

---

## Twitter/X (EN)

Coding agents failed 468 times on private production code licensed from real companies. Only 5.1% of those failures were broken behavior or the wrong file. The rest were failures to read someone else's system.

Context, not model size, is the lever.

https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/en/

#Pebblous #CodingAgents #AIBenchmark #RealSWE

---

## Facebook (KO)

"월요일에 청구가 다시 열리는데, 이 서비스가 발행하는 인보이스에 세금이 붙지 않고 나가고 있습니다."

어느 회사의 엔지니어가 실제로 받았던 업무 지시문의 첫 줄입니다.

사업자마다 세금을 다루는 방식이 다르고, 면세 확인서를 가진 고객은 그 설정과 무관하게 과세되지 않아야 하고, 당국이 거부한 주소는 인보이스를 멈추지 않은 채 보고되어야 합니다.

여덟 개의 코딩 에이전트가 이 과제를 64번 시도해서, 두 번 통과했습니다.

Specific Labs가 여러 기업에서 비공개 프로덕션 코드베이스를 라이선스해 와 만든 벤치마크 Real-SWE의 한 과제입니다. 여덟 조합이 열 개 과제를 640번 풀었고, 평균 해결률은 26.9%에 머물렀습니다.

낮은 점수보다 오래 남은 것은 실패의 모양이었습니다.

468번의 실패 가운데 기존 동작을 깨뜨렸거나 엉뚱한 파일을 고친 경우는 5.1%뿐이었습니다.

나머지는 전부 '읽기의 실패'였습니다. 지시가 요구한 동작을 빠뜨리고, 맞는 변경을 옆 시스템에 잘못 이어 붙이고, 코드베이스에 들어가 확인했으면 알 수 있었을 것을 추측으로 메웠습니다.

문법을 몰라서가 아니라, 남이 오래 쌓아 온 시스템의 사정을 끝까지 읽어 내지 못해 진 것입니다.

그래서 이 결과가 "1위는 어느 모델" 한 줄로 요약되는 것을 볼 때, 저는 그 요약이 표를 잘못 옮긴 것이라고 봅니다. 과제가 열 개뿐이라 상위권의 신뢰구간이 서로 겹치고, 줄마다 실행 환경이 달라 모델의 실력과 도구의 실력이 분리되지 않습니다. 제작사도 순위표로 읽으라고 한 적이 없습니다.

남는 물음은 오히려 이쪽입니다.

"지금 보고 있는 그 점수는, 누구의 코드에서 난 점수입니까?"

세 갈래의 '읽기의 실패'를 데이터 품질의 언어로 옮기면 한 문장이 됩니다. 명세와 시스템 간의 약속이 코드 옆에 없다는 것. "우리 코드베이스는 아직 AI-Ready 하지 않다"는 말의 구체적인 형태가 이것이라고 생각합니다. 페블러스가 데이터를 진단하고 품질 성적서를 발급하면서 매일 들여다보는 고장의 모양과도 다르지 않습니다.

다만 이 글은 "그러니 사내 데이터로 직접 재라"로 깔끔하게 닫히지 않습니다. 사내에서 잰 점수는 바깥에서 검산되지 않기 때문입니다. 감추는 대신 무엇을 검증하지 않았는지를 적어 두는 쪽이, 지금으로선 가장 성숙한 답에 가까워 보입니다.

전문 → https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/ko/

#페블러스 #RealSWE #코딩에이전트 #AIReadyData #데이터클리닉 #데이터품질

---

## Facebook (EN)

"Billing reopens Monday and every invoice this service issues is going out without tax."

That is the opening line of a work ticket an engineer at a real company actually received.

Each merchant on the platform handles tax differently, customers holding an exemption certificate must never be taxed whatever the merchant's setting is, and an address the tax authority rejects has to be reported without stopping the invoice.

Eight coding agents attempted this task 64 times and passed twice.

It is one task from Real-SWE, a benchmark Specific Labs built out of private production codebases licensed from operating companies. Ten tasks, 640 rollouts, an average resolution rate of 26.9%.

What stayed with me was not the low score but the shape of the failures.

Of the 468 failed attempts, only 5.1% broke existing behavior or touched the wrong file.

Everything else was a failure of reading. The agents dropped a behavior the instructions asked for, wired a correct change into the wrong part of a neighboring system, and built on assumptions they could have verified in the workspace.

They lost not because they did not know the language, but because they could not read, all the way down, how someone else's system had come to work that way.

So when I see this result compressed into "model X came first," I think the compression has copied the table wrong. With ten tasks the intervals at the top overlap, every row runs in a different harness, and model skill never separates from tooling skill. The lab itself never asked anyone to read it as a ranking.

The question that remains is a different one.

"The score you are looking at right now: whose code was it earned on?"

Translated into the language of data quality, those reading failures collapse into a single sentence. The spec, and the contracts between systems, are not sitting next to the code. I think that is the concrete form of the sentence "our codebase is not AI-Ready yet." It is also the shape of breakage we look at every day at Pebblous, diagnosing data and issuing quality reports on it.

Still, the piece does not close neatly on "so measure it on your own data." A score measured inside a company cannot be checked from outside it. For now, writing down what you did not verify, rather than hiding it, looks like the more grown-up answer.

Read the full piece → https://blog.pebblous.ai/report/real-swe-private-code-benchmark-2026-09/en/

#Pebblous #RealSWE #CodingAgents #AIReadyData #DataClinic #DataQuality
