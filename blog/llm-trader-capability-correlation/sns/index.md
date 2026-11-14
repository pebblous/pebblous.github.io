# SNS 홍보 글: LLM 트레이더는 회사가 달라도 똑똑할수록 서로 닮는다

> 소스: blog/llm-trader-capability-correlation/
> 생성일: 2026-11-08
> URL: https://blog.pebblous.ai/blog/llm-trader-capability-correlation/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

MIT 연구진이 조건을 조금씩 바꾼 거래 상황 예순네 개를 LLM 일곱에게 똑같이 내주고, 쌍마다 행동이 얼마나 겹치는지를 쟀다. 겹침을 예측한 것은 능력 점수였고, 두 모델이 같은 회사 제품인지는 예측하지 못했다.

적응적 시장 가설로 알려진 MIT 슬론의 앤드류 로 교수가 참여한 연구팀이 9월 arXiv에 올린 논문이고, 연구팀은 이것을 능력의 역설이라 부른다. 모델 하나하나를 잘 만들면 그 모델들을 모아 놓은 시스템도 따라서 안전해진다는 가정이 어디서 깨지는지를 보인다.

깨지는 자리는 평균에 있다. 각 모델의 행동에서 가격과 본래 가치의 괴리로 설명되는 부분을 걷어 내고 남은 잔차끼리 상관을 재면, 그 상관은 참여자를 늘려도 평균으로 지워지지 않는다. 연구팀이 실측한 바닥값은 0.010으로 모델 하나의 잔차 분산 0.021의 절반쯤이다.

겹침 자체가 결함은 아니다. 가상 증권시장을 실제로 돌린 실험에서는 공유한 판단이 맞을 때 LLM 비중이 커질수록 가격이 제값에 붙었다. 같은 시장에 허위 논평을 깔자 같은 겹침이 방향을 거꾸로 밀었고, 참여자가 전원 LLM인 시장에서는 가격 이탈이 정보 없는 노이즈 트레이더만 있는 시장의 5~7배까지 벌어졌다.

방향 맞히기 성적도 같이 무너졌다. 시장을 돌린 세 모델 가운데 범용 능력 점수가 가장 높은 Claude Sonnet 4.6이 42%로 가장 낮았고, 동전을 던져 찍는 값에도 못 미쳤다.

인용하기 전에 걸러야 할 조건이 있다. 실증은 전부 자산 하나짜리 시뮬레이션에서 나왔고, 저자들도 같은 역학이 다른 영역에 나타나는지는 열린 질문이라고 적는다. 논문 리뷰 플랫폼 Pith는 교정적 성분을 가격 괴리 하나에만 회귀시킨 탓에 유능한 모델이 모멘텀·애널리스트 견해를 더 잘 읽어 낸 것이 비교정적 상관으로 집계됐을 수 있다고 지적했고, 모델 일곱과 쌍 스물하나로는 검정력이 작다는 점도 함께 짚었다.

그래서 확정된 사실이 아니라 초기 증거다. 다만 방향은 분명하다. 벤더를 늘리면 계약과 가격 위험은 실제로 나뉘지만, 같은 자리에서 같은 쪽으로 틀리는 위험은 적어도 이 실험에서 나뉘지 않았다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 모델을 둘로 두어도 그 둘이 같은 창구로 들어온 같은 자료를 보고 있다면, 둘이 된 것은 모델뿐이다.

▶ 전문: https://blog.pebblous.ai/blog/llm-trader-capability-correlation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #LLM트레이더 #능력의역설 #시스템리스크 #AI에이전트 #MIT #AndrewLo

---

## LinkedIn (EN)

MIT researchers put sixty-four trading scenarios to each of seven LLMs, varying the conditions a little at a time, and measured how far the behavior of each pair overlapped. The capability score predicted the overlap. Whether the two models came from the same company predicted nothing.

The paper went up on arXiv in September from a team that includes Andrew W. Lo of MIT Sloan, known for the adaptive markets hypothesis, and the team calls what it found the capability paradox. The assumption it tests is the industry default: build each model well and the system those models add up to gets safer along with them.

The assumption breaks at the averaging step. Strip out the part of each model's behavior explained by the gap between price and fundamental value, correlate what is left, and that correlation does not wash out as participants are added. The floor the team measured is 0.010, roughly half the 0.021 residual variance of a single model.

Overlap is not the defect. In the market they actually ran, where the shared judgment was right, prices tracked fundamental value more closely as the LLM share rose. Plant adversarial commentary in that same market and the same overlap pushes the other way: with every trader an LLM, price deviation widened to five to seven times that of a baseline market holding only uninformed noise traders.

Directional accuracy went with it. Of the three models run through the market, Claude Sonnet 4.6, the highest scoring on general capability, called direction right 42% of the time, under what a coin flip returns.

The evidence has limits worth stating before anyone quotes it. All of it comes from a single-asset simulation, and the authors write that whether the same dynamics appear in other domains is an open empirical question. The review platform Pith argues that regressing corrective behavior on mispricing alone may have booked a capable model's sharper reading of momentum and analyst views as non-corrective correlation, and that seven models and twenty-one pairs carry little statistical power.

So this is early evidence rather than settled fact, and the direction of it is still legible. Adding vendors does split contract and pricing risk. The risk of being wrong in the same direction at the same moment did not split, at least not in this experiment.

Pebblous quantifies the quality of AI training data with DataClinic. Put two models behind one feed and what you have doubled is the models.

▶ Read: https://blog.pebblous.ai/blog/llm-trader-capability-correlation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #LLMTraders #CapabilityParadox #SystemicRisk #MIT #AndrewLo

---

## Twitter/X (KO)

MIT 연구진이 똑같은 거래 상황을 LLM 일곱에게 내주고 쌍마다 행동의 겹침을 쟀다. 겹침을 예측한 것은 능력 점수였고, 같은 회사 제품인지는 예측하지 못했다.

회사를 섞어도 겹침은 줄지 않았다. 섞어서 지워지지 않는 위험이 바닥에 남는다.

https://blog.pebblous.ai/blog/llm-trader-capability-correlation/ko/

#페블러스 #데이터품질 #LLM트레이더 #능력의역설

---

## Twitter/X (EN)

MIT researchers put the same trading scenarios to seven LLMs and measured how far each pair overlapped. Capability scores predicted the overlap. A shared vendor did not.

Mixing providers did not mix behavior. What correlates is still there after you average.

https://blog.pebblous.ai/blog/llm-trader-capability-correlation/en/

#Pebblous #DataQuality #LLMTraders #CapabilityParadox

---

## Facebook (KO)

고객사의 AI 도입 계획서를 열면 모델 이중화는 거의 언제나 적혀 있습니다.

한 벤더에 묶이지 않도록 서로 다른 회사의 모델을 둘 붙여 두고, 한쪽이 흔들려도 다른 쪽이 받쳐 주기를 기대하는 설계입니다.

그 둘에게 들어가는 자료가 어디서 오는지를 나눠 적은 문서는 아직 드뭅니다.

9월에 arXiv에 올라온 논문 한 편을 이번 주에 읽었는데, 하필 그 빈칸을 건드렸습니다. MIT 슬론의 앤드류 로 교수가 참여한 연구팀이 조건을 조금씩 바꾼 거래 상황 예순네 개를 LLM 일곱에게 똑같이 내주고, 쌍마다 행동이 얼마나 겹치는지를 쟀습니다. 겹침을 예측한 것은 능력 점수였고, 두 모델이 같은 회사 제품인지는 예측하지 못했습니다. 서로 다른 회사의 유능한 모델 둘이 같은 회사의 덜 유능한 모델 둘보다 더 닮아 있었다는 뜻입니다.

겹친다는 것이 곧 나쁘다는 말은 아니었습니다. 같은 연구팀이 돌린 가상 증권시장에서, 판단이 맞는 쪽을 향해 있을 때는 LLM이 많아질수록 가격이 제값에 붙었습니다. 같은 시장에 가짜 논평을 깔자 같은 겹침이 거꾸로 작동해, 참여자가 전원 LLM인 시장에서는 가격 이탈이 기준선의 5~7배까지 벌어졌습니다. 두 실험의 차이는 모델이 아니라 모델이 받아 본 정보에 있었습니다.

저는 이 대목에서 계획서의 그 빈칸이 다시 떠올랐습니다.

"우리 에이전트들이 보는 검색 색인과 뉴스 피드와 사내 문서는 몇 갈래입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 모델 쪽 성적표는 벤더가 알아서 갱신해 주지만, 그 모델들이 같은 자리에서 같이 틀리는 빈도를 세어 주는 곳은 아직 없습니다.

둘로 두었다는 말이 정말 둘인지는 모델 이름을 세어서는 알기 어렵고, 자료가 들어온 창구를 세어 봐야 알 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/llm-trader-capability-correlation/ko/

#페블러스 #데이터클리닉 #데이터품질 #LLM트레이더 #능력의역설 #MIT

---

## Facebook (EN)

Open almost any AI adoption plan and model redundancy is written into it somewhere.

Two vendors, so that if one wobbles the other holds.

What I rarely find is a line saying where the data going into those two models comes from.

A paper posted to arXiv in September, which I read this week, landed on exactly that blank. A team including Andrew W. Lo of MIT Sloan put sixty-four trading scenarios, varied a little at a time, to each of seven LLMs, and measured how far the behavior of each pair overlapped. The capability score predicted the overlap. Whether the two models came from the same company predicted nothing. Two capable models from rival labs sat closer to each other than two weaker models from the same one.

None of which makes overlap a flaw. In the simulated market the same team ran, where the shared judgment pointed the right way, prices tracked fundamental value more closely as the LLM share rose. Plant fabricated commentary in that market and the same overlap runs backward: with every trader an LLM, price deviation widened to five to seven times the baseline. What separated the two runs was not the models but what the models had been shown.

That is where the blank in those plans came back to me.

"How many distinct sources feed the search index, the news feed and the internal documents your agents read?"

Pebblous quantifies the quality of AI training data with DataClinic. The scorecard on the model side gets refreshed by the vendor without anyone asking; nobody is counting how often those models miss in the same place at the same time.

Whether two really is two may be harder to settle by counting model names than by counting the doors the data came through.

▶ Read: https://blog.pebblous.ai/blog/llm-trader-capability-correlation/en/

#Pebblous #DataClinic #DataQuality #LLMTraders #CapabilityParadox #MIT
