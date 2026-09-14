# SNS 홍보 글: MCP 서버 400개를 무작위로 뽑아 띄우니 48.8%만 켜졌다

> 소스: report/mcp-registry-random-sample-probe/ko/index.html
> 생성일: 2026-09-14
> URL: https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/ko/
> voice: sns-cover (LinkedIn/Twitter/Medium) · reflective (Facebook)

---

## LinkedIn (KO)

공식 MCP 레지스트리에서 서버 400개를 확률로 뽑아 고치지 않고 한 번씩 띄워 보니, 초기화 핸드셰이크까지 끝낸 것은 195개, 48.8%였다.

독립 연구자 한 사람이 등록 서버 24,135개를 끝까지 훑은 다음, npm으로 배포되고 stdio를 선언한 활성 서버 7,258개를 표집 프레임으로 잡고 공개한 난수 시드로 400개를 뽑았다. 수리도, 재시도도, 자격증명 제공도 없었다. 뽑힌 전부에 대해 포함인지 제외인지를 이유와 함께 기록해, 조용히 빠지는 서버를 하나도 두지 않았다.

48.8%라는 값은 비교 상대가 있어서 뜻이 선다. 같은 계측기를 저자가 손으로 고른 24개 서버에 돌리면 66.7%가 켜졌다. 큐레이션된 목록에서 잰 가동률과 모집단에서 잰 가동률 사이의 거리가 거기서 나온다.

실패의 정체는 통념과 어긋났다. 자격증명이 없어 막힌 서버가 53개인 데 비해, 아예 기동하지 못한 서버가 150개였다. 열쇠가 없어 못 들어가는 문보다 문이 아예 없는 쪽이 훨씬 흔했다.

까다로운 것은 큐레이션이 두 지표를 반대 방향으로 민다는 점이다. 가동률은 부풀려 보이게 하고, 결함은 줄어들어 보이게 한다. 안전 주석이 하나도 없는 도구 비율은 무작위 표본에서 58.8%, 큐레이션 표본에서 41.5%였다. 부호가 서로 달라 계수 하나를 곱해 모집단으로 되돌리는 보정이 성립하지 않는다.

읽을 때 함께 가야 할 한계가 있다. 이 값은 MCP 생태계 전체의 가동률이 아니라 npm과 stdio 조건으로 추린 프레임에서 나온 값이고, 재시도 없이 한 번만 띄워 본 하한이며, 아직 동료 심사를 거치지 않은 preprint다.

목록에 올라 있다는 사실과 실제로 켜진다는 사실은 따로 세어야 한다. 이 측정이 남긴 것은 그 둘 사이의 거리를 짐작 대신 재는 절차다.

▶ 전문: https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #MCP #AI에이전트 #도구사용 #AIReadyData #BFCL #UltraTool

---

## LinkedIn (EN)

An independent researcher drew 400 servers from the official MCP registry, launched each exactly once without repairing anything, and 195 of them, or 48.8%, completed the initialization handshake.

The census came first. A full sweep of the registry recorded 24,135 servers; filtering to active servers that ship on npm and declare stdio left a sampling frame of 7,258, from which 400 were drawn under a published random seed. No repairs, no retries, no credentials. Every drawn server was recorded as included or excluded with a reason, so nothing dropped out quietly.

The 48.8% only means something next to its comparison. Running the same prober against 24 servers the author had hand-picked returned 66.7%, and that gap is the distance between a curated list and the population it was drawn from.

The failure mode was not the one the literature expects. Credential gating stopped 53 servers, while 150 never started at all. Doors with no lock behind them were far more common than doors the key was missing for.

The awkward part is that curation pushes two metrics in opposite directions. It inflates how many servers run and deflates how much is missing from them: tools carrying no safety annotation at all were 58.8% in the random sample and 41.5% in the curated one. Opposite signs mean no single correction factor maps a curated measurement back onto the population.

The limits travel with the number. This is not ecosystem-wide uptime but a frame defined by npm and stdio, it is a floor because each server was launched once with no retry, and the paper is a preprint that has not been peer reviewed.

Being listed and being reachable are two different facts, and they have to be counted separately. What this measurement leaves behind is a procedure for measuring the distance between them instead of guessing at it.

▶ Read: https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #MCP #AIAgents #ToolUse #AIReadyData #BFCL #UltraTool

---

## Twitter/X (KO)

공식 MCP 레지스트리에서 서버 400개를 무작위로 뽑아 고치지 않고 한 번씩 띄워 보니, 48.8%만 초기화 핸드셰이크를 끝냈다. 같은 계측기를 손으로 고른 표본에 돌리면 그 값이 3분의 2까지 올라간다.

목록에 올라 있다는 사실과 실제로 켜진다는 사실은 따로 세어야 한다.

https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/ko/

#페블러스 #MCP #AI에이전트 #데이터품질

---

## Twitter/X (EN)

400 servers drawn at random from the official MCP registry, each launched once and never repaired. 48.8% completed the initialization handshake. Point the same prober at a hand-picked sample and the figure climbs to two thirds.

Being listed and being reachable are separate facts. Count them separately.

https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/en/

#Pebblous #MCP #AIAgents #DataQuality

---

## Facebook (KO)

에이전트에 외부 도구를 붙여 보신 분이라면, 레지스트리에서 그럴듯한 서버 하나를 골라 연결했다가 아무 반응이 없어 한참 로그만 다시 읽은 적이 있으실 겁니다.

그럴 때 우리는 보통 내가 뭔가 잘못 설정했겠거니 합니다.

한 독립 연구자는 그 순간을 개인의 실수로 넘기지 않고 세어 보기로 했습니다. 공식 MCP 레지스트리를 끝까지 훑은 다음, 난수 시드를 공개하고 서버 400개를 뽑아 고치지도 다시 시도하지도 않고 딱 한 번씩만 띄워 봤습니다.

초기화 핸드셰이크를 끝낸 서버는 절반이 되지 않았습니다.

목록에 올라 있다는 것과 켜진다는 것은 서로 다른 사실이었습니다.

저에게 더 오래 남은 것은 그 숫자가 아니라 옆에 놓인 비교입니다. 같은 계측기를 저자가 손으로 고른 스물네 개 서버에 돌리자 가동률이 눈에 띄게 올라갔습니다. 우리가 평소 마주하는 목록은 대개 누군가 한 번 걸러 둔 진열대입니다. 진열대에서 잰 값과 창고에서 잰 값이 다르다는 사실을, 이 연구는 짐작하는 대신 두 번 재서 보여 줍니다.

"우리가 붙이려는 도구 목록은 큐레이션된 진열대인가, 아니면 실제 모집단인가?"

같은 잣대를 도구 사용 벤치마크의 배포 파일에 대 본 뒤쪽 절반은 더 조심스럽게 읽어야 합니다. 이름과 설명이 글자까지 똑같이 반복되는 비율이 벤치마크 쪽에서 훨씬 높게 나오는데, 저자는 이것을 벤치마크가 나쁘다는 증거로 읽지 말라고 못박습니다. 중복을 걷어내고 다시 재면 같은 목적으로 만들어진 두 벤치마크가 정반대 값을 내고, 그중 하나는 실제 배포된 도구들보다 깨끗했습니다. 남는 교훈은 코퍼스의 출신이 아니라 세는 절차 쪽입니다.

페블러스가 DataClinic에서 해 온 일도 이 데이터셋이 쓸 만한지를 눈대중이 아니라 계측으로 답하는 쪽입니다. 에이전트가 일하는 환경에서는 그 질문을 받아야 할 목록에 데이터셋만이 아니라 도구가 함께 들어옵니다. 스키마는 맞는가, 의미를 알려 주는 주석은 붙어 있는가, 실제로 호출되는가. 도구도 같은 세 가지를 묻게 됩니다.

48.8%라는 수를 크게 외치는 것보다, 그 수가 어디까지 유효한지를 같은 화면에 적어 두는 편이 오래 쓰일 것 같습니다. 도구 목록이 길어질수록 그 목록을 한 번 재 보는 일이 누구의 몫이 되는지, 저도 아직 답을 정하지 못했습니다.

전문 → https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/ko/

#페블러스 #MCP #AI에이전트 #DataClinic #AIReadyData #데이터품질

---

## Facebook (EN)

If you have ever wired an external tool into an agent, you probably know the pause: you pick a plausible-looking server from a registry, connect it, get nothing back, and spend the next while rereading logs.

Most of us assume we misconfigured something.

One independent researcher decided not to file that moment under personal error, and counted it instead: a sweep of the official MCP registry end to end, a published random seed, 400 servers drawn, each launched exactly once with no repairs and no retries.

Fewer than half completed the initialization handshake.

Being listed and being reachable turned out to be two different facts.

What stayed with me longer than the number was the comparison set beside it. Pointing the same prober at twenty-four servers the author had hand-picked raised the rate noticeably. The lists most of us work from are display shelves that somebody already filtered. That a shelf reads differently from the warehouse behind it is not a suspicion here. It was measured twice.

"Is the tool list we are about to connect a curated shelf, or the actual population?"

The second half of the paper turns the same ruler on tool-use benchmark files, and it deserves a careful reading. Records whose name and description repeat character for character are far more common there than in deployed tools, and the author is explicit that this is not evidence the benchmarks are bad. Strip the duplicates and remeasure, and two corpora built for the same purpose land on opposite answers, with one of them coming out cleaner than tools deployed in the wild. The lesson sits in the counting procedure, not in where a corpus came from.

At Pebblous, DataClinic exists to answer one question: whether a dataset is usable, by instrument rather than by eye. In an environment where agents do the work, that question arrives for tools as well as datasets. Is the schema valid, is there an annotation telling you what the thing does, does it actually answer when called. Tools now face the same three.

Writing down how far a number holds, on the same screen as the number, probably outlasts saying the number loudly. As tool lists get longer, whose job it becomes to measure one is something I have not settled on either.

Read the full piece → https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/en/

#Pebblous #MCP #AIAgents #DataClinic #AIReadyData #DataQuality

---

## Medium (EN)

### Someone Drew 400 MCP Servers at Random and Launched Them. Fewer Than Half Answered.

Every study that watches MCP servers actually run hits the same wall. Most published servers cannot simply be started and talked to. The field's answers vary: reference sets, popularity rankings, hand-curated frames, or repair pipelines that coax a server into booting. Each is a reasonable engineering choice, and each erases the same quantity, which is how much of the published population arrives dead.

A preprint posted to arXiv on September 10, 2026 by Afsar Haseeb Mohammed takes the opposite route. It measures the quantity by declining to fix it.

### The design

The measurement runs in two layers. A collector paginates the official MCP registry to the end and records only self-reported metadata, executing no external code, so that layer scales to the whole published population. The August 22, 2026 sweep found 24,135 servers. Filtering to active servers that ship on npm and declare stdio leaves 7,258, and that is the sampling frame.

From there, 400 servers were drawn without replacement using a seeded shuffle. The seed, 20260819, is published, and the draw specification records a SHA-256 of the frame bytes so that a later redraw against a shifted frame is detected rather than silently accepted. Each drawn package was launched over stdio and probed exactly once. No repairs, no retries, no credentials, and no calls to tools with side effects.

The results split four ways, and all 400 are accounted for with a reason:

- **195 included (48.8%)** completed the initialization handshake.
- **150 (37.5%)** never started at all.
- **53 (13.3%)** stopped at credential gating.
- **2 (0.5%)** could not be fetched as packages.

Credential gating is the failure the literature usually blames. It turned out to be roughly a third as common as servers that simply never came up.

### Curation is worth 17.9 points, in one direction

A rate means little without a comparison. The author ran the same prober against a 24-server frame hand-assembled from reference and popular community servers, and 16 of 24 were included, for 66.7%. That is the size of the selection effect, measured rather than assumed. It is worth noting what this comparison is not: the 24-server frame is the author's own earlier measurement with the same instrument, not a separate published study, and 24 is a small basis for both gaps that rest on it.

The more useful finding is that curation does not bias one way. Curated lists make servers look more likely to run and make their tools look less likely to be missing something. Among tools advertised by the 195 servers that did run, 58.8% carried no safety annotation at all; in the curated frame that figure was 41.5%. Two biases with opposite signs mean there is no single correction factor that maps a curated measurement back onto the population.

### One layer is perfect, the adjacent layer is empty

The 195 servers advertised 2,766 tools. Fatal JSON Schema violations among them: zero. No missing schemas, no wrong types, no broken properties or required blocks. The same result had appeared before in a curated frame roughly fourteen times smaller, and it reproduced here in a drawn rather than chosen sample.

The annotation layer looks nothing like that. MCP defines four optional hints that tell an agent what a tool does before it is called, covering whether the tool is read-only, destructive, idempotent, and open-world. All four are optional, so nothing is violated when they are absent. But the specification also fixes what an absent value means, and the defaults are conservative: a tool with no annotations reads as not read-only, possibly destructive, and interacting with the outside world. So 58.8% is less an information gap than a majority of advertised tools sitting under the spec's cautious defaults.

The distribution says this is a team habit rather than a per-tool judgment. Of 194 servers advertising at least one tool, 72 annotated every tool and 122 annotated none. Servers that annotated only some tools did not appear in this sample at all.

### Turning the ruler on benchmark files

Holding 2,766 descriptions from independently deployed servers gives the paper something the field lacked: a comparison set for what tool-use benchmarks put in front of a model. Measuring exact duplicates, where name and full description repeat character for character, real MCP tools came in at 0.4%, BFCL v4's shipped rows at 68.8%, and UltraTool's English split at 85.6%.

The paper is emphatic that this is not a verdict on benchmark quality, and quoting those figures as "these benchmarks are full of duplicates" is a reading it explicitly rules out. A benchmark that reuses one tool across many task rows produces a high rate by construction. The finding is about counting: aggregate over the shipped files without global deduplication and you are not counting tools, you are counting how often a task repeats. The number once cited as 8,726 supported tools is largely the same tools reappearing row after row.

The cross-check is unusually clean. The team behind UltraTool documented a manual merge step in their own paper and reported 2,032 distinct tools afterward. This paper never consulted that procedure; it deduplicated the shipped English split by name and description and independently arrived at exactly 2,032.

After global deduplication the three corpora are comparable in size, and the near-duplicate picture inverts the easy story. Real MCP tools show 2.8% near-duplicates at a cosine threshold of 0.70, all of it inside single servers and 0.0% across independent authors. BFCL's 16.7% sits almost entirely across independently posed tasks. UltraTool lands at 0.3%, cleaner than tools deployed in the wild. Two corpora built for the same purpose give opposite answers, which is precisely why the paper declines to generalize about synthetic tool corpora at all.

### What a team wiring up tools can do

Four things follow directly from these numbers. Probe before adopting, and expect roughly half. Treat an unannotated tool as the risky case, because that is what the specification already says it is, and check it per server rather than per tool. Treat registry metadata as a claim to verify, since transport and status are self-reported. And when a vendor advertises support for N tools, ask what the deduplication key was.

Two caveats belong with all of it. This is a single-author preprint that has not been peer reviewed, with a full reproduction kit published alongside it. And 48.8% is a floor, drawn from an npm-and-stdio frame that is itself only about 30% of registered servers, measured with a single launch and no retry.

What Pebblous has been doing with DataClinic is answering whether a dataset is usable by instrument rather than by eye. The interesting part of this paper is not MCP. It is that the list of assets deserving that treatment now includes tools, and that nobody has yet published a probability-sampled availability rate for the ones being sold as verified.

**[Read the full analysis →](https://blog.pebblous.ai/report/mcp-registry-random-sample-probe/en/)**

#Pebblous #DataClinic #DataQuality #MCP #AIAgents #ToolUse #AIReadyData #BFCL #UltraTool
