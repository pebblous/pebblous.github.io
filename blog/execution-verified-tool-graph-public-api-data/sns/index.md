# SNS 홍보 글: 실제로 불러 본 연결만 남겨 만든 공공 API 학습 데이터

> 소스: blog/execution-verified-tool-graph-public-api-data/ko/index.html
> 생성일: 2026-09-08
> URL: https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

큰 모델이 이을 수 있다고 점수를 준 도구 연결 가운데, 실제로 불러 보니 작동한 것은 절반이었다.

LG CNS 연구진이 지난 4일 arXiv에 올린 논문은 도구를 쓰는 에이전트의 학습 데이터를 만드는 순서를 바꿨다. 한국 공공 API 플랫폼 열 곳에서 도구 2,318개를 MCP 서버로 구현하고, 어떤 도구의 출력이 어떤 도구의 입력이 되는지를 살아 있는 엔드포인트에 직접 호출해 확인했다. 통과한 연결만 남은 그래프 위를 걸어 다니며 궤적을 만들고, 그 궤적으로 모델을 학습시켰다.

그럴듯함과 작동함은 다른 축이었다. 모델이 고른 후보 그래프에서 실제로 작동하는 연결의 비율은 50.2%였고, 호출로 걸러 낸 뒤에는 62.7%가 됐다. 잘라 낸 쪽만 따로 재 보면 14.8%에 그친다. 무작위 가지치기였다면 두 비율이 비슷해야 한다.

이렇게 만든 데이터로 학습한 90억 파라미터 모델은 세 배 큰 270억 파라미터 기본 모델과의 격차를 1.7%p까지 좁혔다.

더 눈에 띄는 쪽은 학습에서 통째로 뺀 플랫폼이다. 서울 열린데이터광장과 DART·KRX 기반 과제만 따로 재 보니, 네 번 중 한 번이라도 맞히는 비율에서 4B 모델의 개선폭이 22.6%p였다. 같은 모델이 벤치마크 전체에서 얻은 15.9%p보다 크다. 특정 API의 사용법이 아니라 출력을 받아 다음 입력으로 넘기는 절차가 학습됐다는 신호다.

과장하지 않으려면 두 대목을 같이 봐야 한다. 같은 실험을 시드 여덟 개로 다시 잰 부록에서는 격차가 5.4%p로 벌어진다. 그리고 실행이 답한 물음은 이 연결이 작동하는가 하나뿐이고, 질문과 정답을 짓고 이상한 사례를 걸러내는 자리에는 여전히 모델의 판정이 앉아 있다.

실행은 판정을 대신하지 않았다. 판정이 딛고 설 바닥을 먼저 깔았다. 이 방법을 다른 도메인으로 옮길 수 있는지는 그 바닥에 해당하는 이진 신호 하나를 얻는 비용이 결정한다.

▶ 전문: https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #합성데이터 #학습데이터 #AI에이전트 #LGCNS #EDGE #KOPABench #EMNLP2026

---

## LinkedIn (EN)

Half the tool links a large model scored as workable did not work when someone actually called them.

Researchers at LG CNS, in a paper posted to arXiv on September 4, reversed the usual order for synthesizing training data for tool-using agents. They implemented 2,318 tools from ten Korean public API platforms as MCP servers, then tested whether one tool's output really feeds another tool's input by calling live endpoints. Only the links that survived stayed in the graph. Trajectories were then walked off that graph and used for training.

Plausible and executable turned out to be different axes. In the model-scored candidate graph, 50.2% of links executed. After pruning by execution, 62.7% did. Measured on its own, the discarded set executes at 14.8%, a spread that random pruning would not produce.

A 9B model trained on the resulting corpus closed to within 1.7 points of a 27B base model three times its size.

The sharper result is on platforms held out of synthesis entirely. Measured only on tasks drawn from Seoul Open Data Plaza and from DART and KRX, the 4B model gained 22.6 points on the four-try metric, above the 15.9 points the same model gained across the benchmark as a whole. What transferred was the procedure of passing an output into the next input, not the usage of any particular API.

Two caveats belong next to those figures. An appendix that re-measures the same experiment across eight seeds puts the gap at 5.4 points. And execution answered exactly one question, whether a link works. Writing the queries and answers, and filtering out bad cases, still rests on model judgment.

Execution did not replace judgment. It laid the floor that judgment stands on. Whether the recipe travels to another domain depends on what a single binary signal of that kind costs to obtain there.

▶ Read: https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SyntheticData #TrainingData #AIAgent #LGCNS #EDGE #KOPABench #EMNLP2026

---

## Twitter/X (KO)

큰 모델이 이을 수 있다고 점수를 준 도구 연결 가운데, 살아 있는 API에 실제로 불러 보니 작동한 것은 절반이었다.

LG CNS는 통과한 연결만 남긴 그래프 위에서 공공 API 학습 데이터를 만들었다. 그 데이터로 학습한 9B 모델이 세 배 큰 같은 계열 기본 모델에 근접했다.

판정 모델은 그럴듯함을 재고, 실행은 되는지 안 되는지를 잰다. 둘은 서로 다른 정보였다.

▶ https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/ko/

#페블러스 #합성데이터 #LGCNS #KOPABench

---

## Twitter/X (EN)

Half the tool links a large model scored as workable failed when called against live public APIs.

LG CNS kept only the links that survived the call, built training data by walking that graph, and a 9B model trained on it came close to a base model three times its size.

A judge model measures plausibility. Execution measures whether it runs. They were not the same information.

▶ https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/en/

#Pebblous #SyntheticData #LGCNS #KOPABench

---

## Facebook (KO)

"이거 되겠는데요."

데이터를 만드는 자리에서 가장 자주 나오는 말입니다. 그리고 그 말이 맞았는지는 보통 다 만들고 난 뒤에야 확인합니다.

LG CNS 연구진이 지난 4일 공개한 논문에 산점도가 한 장 있습니다.

가로축은 큰 모델이 도구 연결에 매긴 점수, 세로축은 그 연결을 살아 있는 공공 API에 실제로 불러 본 결과입니다.

두 축은 서로를 예측하지 못했습니다.

높은 점수를 받고도 아래로 내려앉은 연결이 흔했고, 낮은 점수를 받고 위로 올라온 연결도 있었습니다.

"그동안 우리가 판정이라고 부르던 것은 무엇을 재고 있었나?"

이 팀은 한국 공공 API 도구 2,318개를 놓고, 그 점수를 믿는 대신 경로를 뽑아 부르는 일을 백 회 반복했습니다. 실패도 두 종류로 갈랐습니다. 대응 자체가 틀린 구조적 실패는 크게 벌하고, 서버가 잠깐 흔들린 환경적 실패는 가볍게 벌합니다. 그렇게 하지 않으면 우연한 오류가 멀쩡한 연결을 죽입니다.

잘라 낸 연결이 만 개가 넘는데, 그중 한 번도 불러 보지 않고 잘린 것은 하나도 없었습니다.

이 대목이 오래 남았습니다. 판정을 실행으로 바꾼 것이 아니라, 판정을 뒤집을 기회를 실행에 준 것이니까요.

다만 실행이 답한 물음은 하나뿐입니다. 이 연결이 실제로 작동하는가. 궤적에 붙일 질문을 짓고 이상한 사례를 걸러내는 자리에는 여전히 모델이 앉아 있습니다. 실행은 판정을 대신한 것이 아니라, 판정이 딛고 설 바닥을 먼저 깔았습니다.

페블러스가 이 논문을 오래 들여다본 이유도 거기에 있습니다. 저희가 합성 데이터를 다루는 방식은 만들고 난 뒤에 재는 쪽입니다. 충실도와 유용성과 프라이버시 세 축으로 점수를 내고, 그 점수로 기여도를 나눕니다. 만들기 전에 거르는 층과 만든 뒤에 재는 층은 서로를 대체하지 않습니다. 두 층이 붙었을 때 무엇이 달라지는지가 저희가 다음에 확인할 대목입니다.

"우리 도메인에서 '불러 보기'에 해당하는 값싼 신호는 무엇인가?"

공공 API에서는 호출의 성공과 실패라는 이진값이 거의 공짜였습니다. 피지컬 AI로 옮겨 오면 시뮬레이터를 한 번 굴려 보는 일, 계획한 동작을 실제 하드웨어에서 한 번 실행해 보는 일이 그 자리에 올 수 있습니다. 다만 이 물음은 논문이 던진 것이 아니라 저희가 읽으며 얻은 것이고, 저자들도 한국 공공 API 밖으로의 전이는 향후 과제로 남겨 두었습니다.

그 한 번의 비용이 얼마인지가, 이 방법을 우리 쪽으로 옮겨 올 수 있는지를 정할 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/ko/

#페블러스 #합성데이터 #LGCNS #AI에이전트 #데이터품질 #데이터클리닉

---

## Facebook (EN)

"This should work."

It is the most common sentence in the room where training data gets made. Whether it was true usually gets checked after everything is already built.

There is a scatter plot in a paper LG CNS posted on September 4.

The horizontal axis is the score a large model gave each tool link. The vertical axis is what happened when that link was actually called against a live Korean public API.

Neither axis predicted the other.

Links that scored high fell below the diagonal often enough, and links that scored low came up above it.

"What had we been measuring, all those times we called it judgment?"

Working from 2,318 public API tools, the team declined to trust the scores. They sampled paths and called them, a hundred rounds of it. Failures were split in two. A structural failure, where the mapping itself is wrong, is penalized heavily. An environmental one, a server wobbling for a moment, is penalized lightly. Without that split, a stray error kills a link that was fine.

More than ten thousand links were cut, and not one of them was cut without being called first.

That is the part that stayed with me. Execution did not take judgment's place. It gave judgment something that could overturn it.

Still, execution answered only one question: does this link work. Writing the queries and answers for each trajectory, and filtering out the bad ones, is a seat that model judgment still occupies. Execution laid a floor for judgment to stand on rather than standing in for it.

That is also why we kept reading. Our own approach to synthetic data measures after the fact. We score fidelity, utility, and privacy, and we allocate contribution from those scores. A layer that filters during creation and a layer that measures after it do not substitute for each other. What changes when both are in place is what we want to find out next.

"What is the cheap signal, in our domain, that plays the part of making the call?"

For public APIs, the binary of a call succeeding or failing was nearly free. Move to physical AI and the candidates become running the physics engine once, or executing a planned motion once on real hardware. This question is ours rather than the paper's; the authors left transfer beyond Korean public APIs as future work.

What that single run costs is probably what decides whether any of this comes over to us.

▶ Full piece: https://blog.pebblous.ai/blog/execution-verified-tool-graph-public-api-data/en/

#Pebblous #SyntheticData #LGCNS #AIAgent #DataQuality #DataClinic
