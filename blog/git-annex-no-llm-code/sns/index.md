# SNS 홍보 글: 의존성 트리에서 AI 생성 코드를 걷어낸 오픈소스 프로젝트

> 소스: blog/git-annex-no-llm-code/ko/index.html
> 생성일: 2026-07-11
> URL: https://blog.pebblous.ai/blog/git-annex-no-llm-code/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

git-annex 개발자가 자기 프로젝트의 전체 의존성 트리를 100시간 동안 손으로 뒤졌다. AI가 생성한 코드가 자기 소프트웨어는 물론 그것이 기대는 라이브러리 어디에도 없다고 말하기 위해서였다.

발단은 코드 품질이 아니라 저작권이었다. 검토 과정에서 1,489줄짜리 두서없는 커밋 메시지, 아무 설명 없이 되돌려진 대량 변경, 다른 프로젝트에서 그대로 옮겨온 복붙이 나왔다. 문제는 "AI 코드가 나쁘다"가 아니라 "무엇이 언제 왜 들어왔는지 사후에 알 수 없다"는 데 있었다.

그래서 그는 NoLLMDependencies라는 빌드 옵션을 만들어 오염 이전 버전으로 의존성을 고정했다. 대가는 컸다. GHC 9.15 이후의 언어 개선을 앞으로 포기해야 했고, 저자 스스로 이를 "깊이 유감스러운 일"이라 적었다.

코드의 출처를 증명하는 문제는 데이터의 출처를 증명하는 문제와 정확히 같은 구조다. 생성 주체를 나중에 복원하는 값은 처음부터 기록하는 값보다 언제나 비싸다.

▶ 전문: https://blog.pebblous.ai/blog/git-annex-no-llm-code/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터거버넌스 #AI거버넌스 #소프트웨어공급망 #오픈소스 #gitannex #AIReadyData

---

## LinkedIn (EN)

An open-source maintainer spent about 100 hours combing his project's entire dependency tree by hand — not to add a feature, but to be able to say that no AI-generated code sits anywhere in it, including the libraries it depends on.

The trigger was copyright, not quality. His review surfaced a rambling 1,489-line commit message, a large patch silently reverted in a later release, and copy-paste that lifted another project's code verbatim. The issue was never whether AI writes good code; it was that no one could reconstruct what came in, when, or why.

His answer was a build flag, NoLLMDependencies, that pins the project to pre-LLM versions of its dependencies. The cost is steep: git-annex now forgoes most Haskell language improvements after GHC 9.15, something the author himself calls "deeply unfortunate."

Proving where code came from is the same problem as proving where data came from. Reconstructing provenance after the fact always costs more than recording it from the start.

▶ Read: https://blog.pebblous.ai/blog/git-annex-no-llm-code/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataGovernance #DataProvenance #OpenSource #SoftwareSupplyChain #gitannex #AIReadyData

---

## Twitter/X (KO)

한 오픈소스 개발자가 자기 프로젝트의 의존성 전체를 100시간 동안 뒤졌다. AI가 쓴 코드가 한 줄도 없다고 증명하기 위해서.

대가로 GHC 9.15 이후 언어 개선을 포기했다. 코드의 출처 증명은 데이터의 출처 증명과 같은 문제다.

https://blog.pebblous.ai/blog/git-annex-no-llm-code/ko/

#페블러스 #데이터품질 #gitannex #데이터프로버넌스

---

## Twitter/X (EN)

An open-source maintainer spent ~100 hours auditing his project's entire dependency tree just to prove no AI-generated code lives anywhere in it.

The price: giving up Haskell improvements after GHC 9.15. Proving where code came from is the same problem as proving where data came from.

https://blog.pebblous.ai/blog/git-annex-no-llm-code/en/

#Pebblous #DataProvenance #gitannex #DataQuality

---

## Facebook (KO)

새 기능을 만드는 데 쓴 시간이 아니었습니다.

git-annex를 20년 가까이 이어온 개발자가 지난 한 달 동안 약 100시간을 쓴 일은, 자기 프로젝트가 기대는 코드 전부를 거슬러 올라가며 "AI가 쓴 줄이 어디 섞였는가"를 손으로 뒤지는 작업이었습니다.

그가 찾던 것은 버그가 아니었습니다.

1,489줄짜리 두서없는 커밋 메시지, 아무 설명 없이 되돌려진 대량 변경, 다른 프로젝트에서 그대로 옮겨온 복붙. 그를 불편하게 한 건 코드가 나쁘다는 사실이 아니라, 무엇이 언제 왜 들어왔는지를 이제 와서는 되짚을 수 없다는 사실이었습니다.

그래서 그는 오염 이전 버전으로 의존성을 묶어 두는 길을 택했고, 그 대가로 앞으로의 언어 개선 상당 부분을 포기했습니다. 저자 자신도 이 선택을 "깊이 유감스러운 일"이라 적었고, 이 원칙을 끝까지 지키겠다고는 약속할 수 없다고 덧붙였습니다.

저는 이 장면이 코드만의 이야기로 읽히지 않았습니다. 사람이 붙였다고 믿었던 데이터 라벨의 상당수가 사실은 모델이 대신 처리한 것이었다는 최근의 이야기와, 결이 똑같았습니다.

"이걸 누가, 무엇이 만들었는가?" 이 질문에 나중에 답하려면 처음부터 답을 적어 두는 것보다 훨씬 비싼 값을 치릅니다. git-annex의 100시간은 그 청구서를 우리보다 조금 먼저 받아 본 것뿐인지도 모릅니다.

https://blog.pebblous.ai/blog/git-annex-no-llm-code/ko/

#페블러스 #데이터품질 #데이터거버넌스 #gitannex #데이터프로버넌스 #AIReadyData

---

## Facebook (EN)

It wasn't time spent building anything.

Over the past month, the developer who has kept git-annex alive for nearly two decades spent around 100 hours doing something stranger: tracing every line of code his project leans on, by hand, looking for where AI-written code had slipped in.

He wasn't hunting for bugs.

What unsettled him was a rambling 1,489-line commit message, a large change quietly reverted in a later release with no explanation, and copy-paste that had lifted another project's code word for word. The discomfort wasn't that the code was bad. It was that no one could say, after the fact, what had come in, when, or why.

So he chose to freeze his dependencies at their pre-LLM versions, and in doing so gave up a large share of future language improvements. He called the choice "deeply unfortunate," and admitted he couldn't promise to hold to it forever.

I couldn't read this as a story about code alone. It rhymed with another recent one: that a large share of the data labels we assumed people had made were quietly handled by a model instead.

"Who, or what, made this?" Answering that question later costs far more than writing the answer down at the start. Maybe git-annex's 100 hours are just an invoice the rest of us haven't opened yet.

https://blog.pebblous.ai/blog/git-annex-no-llm-code/en/

#Pebblous #DataQuality #DataGovernance #gitannex #DataProvenance #AIReadyData
