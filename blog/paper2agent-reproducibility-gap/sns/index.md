# SNS 홍보 글: 논문을 AI로 바꾸는 도구, 넷에 하나는 코드에서 실패

> 소스: blog/paper2agent-reproducibility-gap/ko/index.html
> 생성일: 2026-09-21
> URL: https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

스탠퍼드 연구진이 계산생물학 논문 100편에 같은 도구를 돌렸더니 74편이 대화형 AI 에이전트가 됐고, 26편은 변환 도중에 멈췄습니다.

9월 16일 네이처에 실린 Paper2Agent 이야기입니다. 스탠퍼드 의대 제임스 조우 교수 연구진이 만든 이 도구는 논문의 본문과 코드, 데이터를 MCP 서버 하나에 올려 둡니다. 여러 AI가 저장소를 내려받아 실행 환경을 세우고, 저장소에 든 튜토리얼을 예제 데이터로 끝까지 돌려 보면서 실제로 작동하는 기능만 도구로 감쌉니다. 고쳐도 계속 실패하는 함수는 목록에서 빼 버립니다. 완성된 서버 주소를 챗 에이전트에 붙이면 그 논문이 질문에 답하고 자기 방법을 남의 데이터에 적용합니다.

딥마인드의 알파지놈 논문에서는 사람 손을 타지 않고 도구 22개가 나왔습니다. 저자들의 프리프린트 기준으로 이 에이전트는 튜토리얼에서 뽑은 질문 15개와 튜토리얼에 없던 새 질문 15개를 모두 맞혔습니다. 같은 저장소를 통째로 받은 범용 코딩 에이전트도, 수십 개 데이터베이스를 끌어 쓰는 생의학 에이전트 바이옴니도 양쪽 모두에서 뒤졌습니다.

알파지놈 논문과 ADHD 전장유전체 논문의 서버를 한 AI에 나란히 물린 실험도 있습니다. 검토할 가설을 AI가 먼저 몇 개 내놓았고, 그중 하나를 골라 실행하라고 지시한 쪽은 사람입니다. 그다음 분석은 AI가 맡아 유전자 자리 39곳을 두 시간 안쪽에 훑었고, 후보 변이 209개 가운데 하나를 인과 변이로 추렸습니다. 계산이 가리킨 후보이지 실험으로 확인된 발견은 아닙니다.

아직 정리되지 않은 대목도 있습니다. 알파지놈 에이전트를 만드는 데 걸린 시간을 네이처 뉴스 기사는 약 45분, 계산 비용은 14달러로 전하는데, 저자들의 프리프린트에는 같은 도구를 개인 노트북에서 약 3시간 만에 만들었다고 적혀 있습니다. 최종판 본문이 유료라 어느 쪽으로 정리됐는지는 확인하지 못했습니다.

더 읽을 것이 많은 쪽은 멈춘 26편입니다. 코드가 불완전했거나, 문서가 없었거나, 소프트웨어 환경을 끝내 되살리지 못했습니다. 깨진 의존성이나 낡은 API 호출 정도는 AI가 진단하고 고치지만, 애초에 공개되지 않은 코드에는 복원할 대상이 없습니다. 저자들은 논문이 얼마나 쉽게 에이전트로 바뀌는지가 그 연구의 재현성을 가늠하는 실용적인 척도가 될 수 있다고 봅니다. 성공한 74편에도 빈칸은 남습니다. 스탠퍼드 리포트는 원고가 실패한 실험이나 설계 뒤의 판단까지는 담지 않아, 사람 저자가 자기 논문으로 만든 에이전트와 대화하며 그 맥락을 채워 넣어야 한다고 짚었습니다.

같은 도구를 같은 방식으로 돌렸는데 결과가 갈렸다면, 차이를 만든 쪽은 모델이 아니라 각 연구실이 남긴 자료입니다. 페블러스는 DataClinic으로 학습 데이터의 상태를 정량 진단합니다. 회사 데이터도 사정이 같습니다. 스키마와 라벨 규칙은 인수인계 문서에 함께 가고, 왜 이 기준으로 잘랐는지와 무엇을 해 봤다가 접었는지는 대개 담당자와 함께 떠납니다.

▶ 전문: https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #연구재현성 #데이터문서화 #Paper2Agent #MCP #알파지놈 #스탠퍼드

---

## LinkedIn (EN)

Stanford researchers ran one tool over 100 computational biology papers. Seventy-four came out as conversational AI agents. The other 26 stalled partway through the conversion.

The tool is Paper2Agent, published in Nature on 16 September by a group led by James Zou at Stanford's medical school. It puts a paper's text, code and data onto a single MCP server. Several AIs download the repository, rebuild the runtime, run the tutorials that ship with it end to end on example data, and wrap only the functions that actually work. Anything still failing after repair is dropped from the list. Point a chat agent at the finished server and the paper answers questions and applies its own method to somebody else's data.

DeepMind's AlphaGenome paper yielded 22 tools with no human in the loop. On the authors' preprint figures, that agent answered all 15 questions drawn from the tutorials and all 15 questions the tutorials never covered. A general-purpose coding agent handed the same repository scored below it on both sets, and so did Biomni, a biomedical agent wired to dozens of databases.

The researchers also put two papers side by side, running the AlphaGenome server and an ADHD genome-wide study server through one AI. The AI proposed several hypotheses to examine; a human picked one and told it to proceed. The analysis that followed swept 39 loci in under two hours and narrowed 209 candidate variants down to one causal variant. That is a computational candidate, not an experimentally confirmed finding.

One figure has not settled. Nature's news report puts the AlphaGenome build at roughly 45 minutes and $14 of compute, while the authors' preprint records about three hours on a personal laptop for the same set of tools. The final Nature text sits behind a paywall, so which version stands could not be confirmed here.

The 26 failures carry more. The code was incomplete, documentation was missing, or the software environment could not be rebuilt. Broken dependencies and stale API calls get diagnosed and repaired automatically; code that was never published leaves nothing to repair. The authors suggest that how easily a paper converts could work as a practical measure of how reproducible the research was. Even a clean conversion leaves a gap. Stanford Report notes that a manuscript does not record failed experiments or the reasoning behind a design choice, so the author has to talk to the agent built from their own paper to fill that in.

Same tool, same procedure, different outcomes. What separated them was not the model but what each lab had left behind. Pebblous measures that state in training data with DataClinic. Corporate data runs the same way: schemas and labeling rules travel with a handover document, while the reason a threshold was set there, and the definition that was tried and abandoned, usually leaves with the person.

▶ Read: https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgents #Reproducibility #DataDocumentation #Paper2Agent #MCP #AlphaGenome #Stanford

---

## Twitter/X (KO)

스탠퍼드 연구진이 논문의 본문과 코드를 서버에 올려 대화형 AI로 바꾸는 도구를 네이처에 냈습니다. 계산생물학 논문 100편에 돌렸더니 74편이 에이전트가 됐고, 나머지는 코드가 불완전하거나 문서가 없거나 실행 환경을 되살릴 수 없어 멈췄습니다.

성패를 가른 것은 모델이 아니라 각 연구실이 남긴 자료였습니다.

https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/ko/

#페블러스 #데이터품질 #Paper2Agent #MCP

---

## Twitter/X (EN)

Stanford researchers published a tool in Nature that turns a paper's text and code into a conversational AI. Run over 100 computational biology papers, it produced working agents from 74. The rest stalled on incomplete code, missing documentation, or a runtime nobody could rebuild.

What separated them was not the model. It was what each lab had left behind.

https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/en/

#Pebblous #DataQuality #Paper2Agent #MCP

---

## Facebook (KO)

돌에 새기던 것을 지금은 종이에 찍습니다. 종이도 돌보다 그리 낫지는 않습니다.

스탠퍼드 의대 제임스 조우 교수가 학교 소식지에서 사람이 지식을 다뤄 온 방식을 그렇게 정리했습니다. 어느 쪽이든 읽는 사람이 다가가야만 열립니다.

조우 교수 연구진이 만든 도구는 논문의 본문과 코드, 데이터를 서버 한 곳에 올려 둡니다. 여러 AI가 그 코드를 직접 내려받아 돌려 보고, 실제로 작동하는 것만 남깁니다. 고쳐도 계속 실패하는 함수는 목록에서 빼 버립니다. 그렇게 완성된 논문은 질문에 답하고, 자기 방법을 남의 데이터에 적용해 줍니다.

계산생물학 논문 100편에 이 도구를 돌렸습니다. 74편이 그런 상대가 됐습니다.

정작 기억에 남은 것은 나머지 26편입니다.

코드가 불완전했습니다. 설명이 붙어 있지 않았습니다. 옛 실행 환경을 끝내 되살리지 못했습니다. 깨진 의존성이나 낡은 API 호출 정도는 AI가 진단하고 고칩니다. 애초에 올리지 않은 코드에는 손댈 자리가 없습니다.

모델을 더 좋은 것으로 갈아 끼워도 없는 코드가 생겨나지는 않습니다.

변환에 성공한 74편에도 칸 하나는 빈 채로 남습니다. 스탠퍼드 리포트는 원고가 실패한 실험이나 설계 뒤의 판단까지는 담지 않는다고 짚었습니다. 그래서 사람 저자가 자기 논문으로 만든 에이전트와 마주 앉아 그 맥락을 말로 채워 넣어야 합니다. 어떤 방법을 먼저 해 봤다가 버렸는지, 왜 이 임계값을 골랐는지. 논문에서 이 자리에는 이름이 없습니다. 굳이 붙이자면 '적히지 않은 절반'입니다.

연구실 밖에서도 모양이 낯설지 않습니다. 데이터셋을 다른 팀이나 외부 공급사에 넘길 때 스키마와 라벨 규칙은 대체로 함께 갑니다. 왜 이 기준으로 잘랐는지, 어떤 라벨 정의를 해 봤다가 왜 접었는지는 담당자 머릿속에 남습니다. 그 담당자가 팀을 옮기면 데이터는 그대로인데 판단의 근거만 사라집니다.

"오늘 처음 이 저장소를 여는 사람이, 문서만 보고 같은 결과까지 갈 수 있습니까?"

페블러스는 DataClinic으로 학습 데이터의 상태를 정량 진단합니다. 진단에서 자주 걸리는 쪽은 틀린 값이 아니라, 그 값을 왜 그렇게 정했는지 아무도 답하지 못하는 경우입니다.

논문이 스스로 답하는 시대가 오면 재현은 분명 쉬워집니다. 다만 쉬워지는 쪽은 이미 잘 남겨 둔 연구부터입니다. 도구가 좋아지기를 기다리는 동안 할 수 있는 일은 오늘 한 줄 더 적어 두는 것뿐인 듯합니다.

https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #Paper2Agent #MCP #연구재현성

---

## Facebook (EN)

We carved knowledge into stone once. Now we print it on paper, and paper is not much better than stone.

That is how James Zou, who teaches at Stanford's medical school, summed up the history of the thing for his university's news office. Either way, it sits there until a reader comes to it.

The tool his group built puts a paper's text, code and data on one server. Several AIs download that code and run it themselves, keeping only what works. A function that keeps failing after repair is dropped. What remains answers questions and will run its own method over somebody else's data.

They tried it on 100 computational biology papers. Seventy-four became that kind of correspondent.

The 26 that did not are the ones I keep going back to.

Incomplete code. No documentation. An old runtime nobody could rebuild. Broken dependencies and stale API calls, the AI diagnoses and repairs. Code that was never published offers nothing to repair.

A better model does not bring back code that was never written down.

Even a clean conversion leaves one drawer empty. Stanford Report points out that a manuscript does not record the experiments that failed or the thinking behind a design choice. The author has to sit with the agent built from their own paper and say those things out loud. Which method was tried first and set aside. Why that threshold and not another one. That part of a paper has no name. In my notes it goes under the half that was never written down.

Outside the lab the shape is familiar. Hand a dataset to another team or an outside supplier and the schema and the labeling rules travel with it. The reason the cut was made there, the label definition that was tried and dropped, stays in one person's head. When that person moves, the data is intact and the grounds for it are gone.

"Could someone opening this repository for the first time reach the same result from the documentation alone?"

Pebblous measures the state of training data with DataClinic. What comes up most often is not a wrong value. It is a value nobody can say why it was set that way.

Once papers answer for themselves, reproduction does get easier. It gets easier first for the work that was already written down well. While we wait for the tools to improve, the thing available today is one more line written down.

https://blog.pebblous.ai/blog/paper2agent-reproducibility-gap/en/

#Pebblous #DataClinic #DataQuality #Paper2Agent #MCP #Reproducibility
