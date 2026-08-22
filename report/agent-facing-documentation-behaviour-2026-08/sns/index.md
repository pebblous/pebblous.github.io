# SNS 홍보 글: 코딩 에이전트가 연 문서 열에 여섯은 에이전트용 파일이었다

> 소스: report/agent-facing-documentation-behaviour-2026-08/ko/index.html
> 생성일: 2026-08-23
> URL: https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

코딩 에이전트가 저장소 안의 API 레퍼런스를 연 것은 문서를 연 3,033번 중 40번이었다. 같은 데이터에서 지시문 파일과 작업 메모가 차지한 몫은 60.5%다.

베이징대학교의 가오와 천이 실제 에이전트 세션 557건에서 개발 이벤트 94,813건을 뽑아 문서 접촉만 유형별로 갈랐다. 에이전트가 여는 문서는 대부분 에이전트 자신을 위해 존재하는 파일이었다. 다만 조회만 놓고 보면 절반 안팎이고, 그 값을 60.5%까지 끌어올린 쪽은 읽기가 아니라 쓰기다. 에이전트는 읽는 만큼 문서를 쓴다.

불편한 대목은 그다음이다. 문서를 본 직후에 테스트를 돌릴 보정 오즈비는 0.39로 오히려 낮았다. 문서를 근거로 검증했다고 볼 만한 툴 호출은 한 건도 남지 않았다. 관측 연구라 인과는 말할 수 없다. 확인된 것은 산문이 명세로 기능한 흔적이 행동 로그에 없다는 사실 하나다. 지시문 파일의 효과를 잰 옆 연구들을 측정 축별로 정렬해도 같은 그림이 나온다. 올바른 파일에 데려다주는 항법 장치로는 작동하고, 정답을 규정하는 명세로는 작동하지 않는다.

에이전트가 먹는 문서는 이미 별개의 데이터 자산인데, 그것을 담을 스키마도 품질 지표도 수명 관리도 아직 없다. 문서 정책이 아니라 데이터 설계의 문제라는 뜻이다. 우리 파이프라인에 같은 잣대를 대 봤다. 매 세션 모든 에이전트가 읽는 CLAUDE.md 646줄에 삭제 정책이 없었다. 이번 실행에서는 조사 세 트랙이 전부 같은 트랙을 돌고도 셋 다 완료로 기록됐다. AI-Ready 데이터 인프라를 만드는 회사가 자기 지시문 파일부터 데이터 자산으로 다시 세는 중이다.

▶ 전문: https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #코딩에이전트 #컨텍스트엔지니어링 #AGENTSmd #CLAUDEmd #AIReadyData

---

## LinkedIn (EN)

An API reference sitting in the repository was opened 40 times out of the 3,033 documents coding agents opened. Instruction files and working notes took 60.5%.

Zhijun Gao and Jing Chen of Peking University pulled 94,813 development events out of 557 real agent sessions and sorted every documentation touch by type. Most of what agents opened existed for the agent's own benefit. Count only the reading and the share falls to roughly half; what lifts it to 60.5% is the writing. Agents produce documentation almost as fast as they consume it.

The uncomfortable part comes next. Right after consulting a document, the adjusted odds of running a test dropped to 0.39, and not a single tool call survived that would count as validating something against a document. This is an observational study, so causation is off the table. What it establishes is narrower: prose left no behavioural trace of working as a specification. Sort the neighbouring studies by the axis each one actually measured and the same shape holds. Instruction files work as navigation, steering an agent to the right file, and not as specification.

The documents agents feed on are already a distinct data asset, and there is still no schema to hold them, no quality metric to score them, no lifecycle to retire them. That makes this a data design problem rather than a documentation policy one. We held the same ruler against our own pipeline. The CLAUDE.md every agent loads each session runs 646 lines with no deletion policy. On this run all three research tracks ran the same track, and each of them was recorded complete. A company building AI-Ready data infrastructure has started counting its own instruction files as data.

▶ Read: https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #CodingAgents #ContextEngineering #AGENTSmd #CLAUDEmd #AIReadyData

---

## Twitter/X (KO)

코딩 에이전트가 연 문서 열에 여섯은 사람이 아니라 에이전트를 위해 쓰인 파일이었다. 저장소 안 API 레퍼런스는 1.3%.

문서를 본 직후 테스트를 돌리는 비율은 오히려 낮았고, 문서를 근거로 검증한 툴 호출은 한 건도 없었다. 지시문은 항법 장치이지 명세가 아니다.

▶ https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/ko/

#페블러스 #AI에이전트 #코딩에이전트 #AGENTSmd

---

## Twitter/X (EN)

Six in ten documents a coding agent opened were written for the agent, not for a person. API references sitting in the repository: 1.3%.

Right after reading one, agents were less likely to run a test, and no tool call ever validated anything against a document. Instruction files navigate. They do not specify.

▶ https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/en/

#Pebblous #AIAgent #CodingAgents #AGENTSmd

---

## Facebook (KO)

저장소에 규칙을 한 줄 더 적어 넣을 때, 그 줄이 언제 지워질지는 생각해 본 적이 없습니다.

우리 CLAUDE.md는 646줄이 됐습니다. 매 세션 모든 에이전트가 통째로 읽어 갑니다. 그런데 삭제 정책은 없습니다. 뭔가 어긋날 때마다 한 줄씩 붙였고, 붙인 줄은 그대로 남았습니다.

베이징대학교의 두 연구자가 실제 에이전트 세션 557건을 뜯어 본 결과를 읽다가 그 646줄이 떠올랐습니다.

에이전트가 문서를 연 3,033번 중 열에 여섯은 사람을 위한 문서가 아니라 에이전트 자신을 위해 쓰인 파일이었습니다. 우리가 공들여 쓰는 API 레퍼런스는 1.3%였습니다.

손이 멎은 건 그다음 대목이었습니다. 문서를 읽은 직후에 테스트를 돌리는 비율은 오히려 낮았고, 문서를 근거로 무언가를 검증한 툴 호출은 한 건도 관측되지 않았습니다.

"우리가 적어 둔 규칙은 정말 지켜지고 있나? 지켜졌는지를 우리는 어디서 확인하나?"

이번 실행에서 그 질문의 답을 실물로 받았습니다. 이 보고서의 조사 단계는 세 갈래로 갈라져 있는데, 세 트랙이 전부 같은 트랙을 돌았습니다. 기획서에는 "각 트랙은 자기 출력 파일을 만들었는지 확인하고 끝낼 것"이라고 정확히 적혀 있었습니다. 산문으로 적힌 지시는 지켜졌는지가 남지 않습니다. 파일 하나 있는지 보는 검사 한 줄이었다면 그 자리에서 걸렸을 일이었습니다.

'에이전트가 먹는 문서'. 이 말을 쓰고 나니 질문의 모양이 달라졌습니다. 더 잘 쓰는 문제가 아니라, 무엇을 어떤 칸에 담아 남길지의 문제였습니다.

데이터 자산이라면 당연히 있는 스키마와 품질 지표와 수명이, 이 자산에는 아직 없습니다. 데이터를 진단하는 일을 해 온 페블러스가 자기 지시문 파일에는 아직 그 잣대를 대지 못했다는 것도 함께 적어 둡니다.

전문은 여기 있습니다: https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/ko/

#페블러스 #코딩에이전트 #컨텍스트엔지니어링 #AGENTSmd #데이터품질 #DataClinic

---

## Facebook (EN)

When I add one more rule to a repository, I have never once thought about when that line gets deleted.

Our CLAUDE.md is 646 lines now. Every agent reads the whole thing at the start of every session. There is no deletion policy. Each time something went wrong we appended a line, and the line stayed.

I was reading what two researchers at Peking University found inside 557 real agent sessions when those 646 lines came back to me.

Of the 3,033 times an agent opened a document, six in ten were files written for the agent rather than for a person. The API references we labour over came to 1.3%.

What stopped me was the next part. Right after reading a document, agents were less likely to run a test, and not one tool call was observed validating anything against what they had read.

"Are the rules we wrote down actually being followed? Where would we go to check?"

This run handed me the answer in physical form. The research stage of this report splits into three tracks, and all three ran the same one. The plan said it plainly: "each track must confirm it created its own output file before finishing." An instruction written in prose leaves no record of whether it was followed. A single check for whether a file exists would have caught it on the spot.

"Documents agents feed on." Once I had the phrase, the question changed shape. It was never about writing better. It was about what to keep, and in which column.

A data asset comes with a schema, a quality metric, a lifecycle. This one has none of the three yet. Pebblous has spent years diagnosing other people's data, and has not yet held that same instrument up to its own instruction files.

The full report: https://blog.pebblous.ai/report/agent-facing-documentation-behaviour-2026-08/en/

#Pebblous #CodingAgents #ContextEngineering #AGENTSmd #DataQuality #DataClinic
