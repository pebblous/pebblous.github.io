# SNS 홍보 글: AI는 어떤 이름은 통째로 읽고, 어떤 이름은 쪼개서 읽는다

> 소스: report/tokenizer-name-fragmentation-bias/ko/index.html
> 생성일: 2026-09-30
> URL: https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

같은 서류에 이름만 갈아 끼우는 AI 편향 검사는, 실은 이름만 갈아 끼운 적이 없었다.

앨버타대 연구진이 사람 이름 약 50만 개를 토크나이저 12종에 넣어 봤다. 어떤 이름은 번호 하나로 통째로 들어가고, 어떤 이름은 조각 두세 개로 조립돼 들어간다. 모델이 받는 것은 글자가 아니라 번호이기 때문이다.

통째로 들어가는 비율은 이름 무리에 따라 12.1%에서 64.8%까지 갈렸다. 이름이 얼마나 흔한지와 얼마나 긴지를 회귀에 함께 넣어 눌러도 집단 차이가 남았다. 그러니 이름만 바꾼 두 프롬프트는 모델 입장에서 길이도 구성도 다른 입력이다.

가장 중요한 표는 부록에 있다. 중간층에서 잰 격차를 모델이 낱말을 뱉기 직전의 출력 로짓에서 다시 재면 네 과제 중 셋에서 부호가 사라지거나 뒤집힌다. 바꾼 것은 어디서 읽었는가 하나뿐이다. 그래서 이 연구의 결론은 쪼개진 이름이 손해를 본다는 쪽이 아니다. 어느 지점에서 쟀는지 밝히지 않은 편향 검사는 무엇을 쟀는지도 말할 수 없다는 쪽이다.

논문이 쓴 이름은 전부 미국 플로리다주 유권자 명부에서 왔고 한국 이름은 하나도 없다. 같은 자로 직접 재 보니 한글 이름 쪽에는 통째로 들어가는 자리에 세울 이름이 사실상 없었다. 비교가 기울어 있다기보다 비교를 만들 재료가 없었다.

편향 감사 보고서를 받는 쪽이 되물을 문장은 한 줄이면 된다. 검사에 쓴 이름들은 이 모델에서 몇 토큰이었습니까.

▶ 전문: https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/ko/

#페블러스 #데이터품질 #AIReadyData #LLM공정성 #토크나이저 #편향감사 #EXAONE #AI기본법

---

## LinkedIn (EN)

The standard way to test an AI for name bias is to hold everything constant and swap the name. That test has never actually held everything else constant.

University of Alberta researchers pushed roughly 500,000 names through 12 tokenizers. Some names enter a model as a single ID. Others are assembled from two or three fragments, because a model never sees letters, only the numbers its vocabulary assigns.

The share of names that enter whole ranges from 12.1% to 64.8% depending on the group the name is associated with. Put name frequency and name length into the regression and the group terms still survive. Two prompts that differ only in the name are, to the model, inputs of different length and different composition.

The most consequential table sits in the appendix. Take the gap measured at a middle layer and measure it again at the output logits, just before the model emits a word, and the sign vanishes or reverses on three of four tasks. Nothing changed except where the reading was taken. Which is why the finding is not that fragmented names get penalized. It is that a bias audit which never says where it measured cannot say what it measured.

Every name in the study came from a Florida voter file, and not one of them is Korean. Running Korean names through the same yardstick, we found almost nothing to put on the "enters whole" side. That is not a skewed comparison. It is a comparison with one side missing.

If you are the one receiving a bias audit, one question costs almost nothing to ask. How many tokens were the names you tested, in this model?

▶ Read: https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/en/

#Pebblous #DataQuality #AIReadyData #LLMFairness #Tokenization #BiasAudit #EXAONE #AIAct

---

## Twitter/X (KO)

이름만 바꿔 넣는 AI 편향 검사에서, 어떤 이름은 토큰 하나로 통째로 들어가고 어떤 이름은 조각 세 개로 조립돼 들어간다. 통째로 들어가는 비율은 이름 무리에 따라 5.4배 벌어진다.

같은 조건을 맞췄다고 믿은 검사에서, 정말로 맞춰진 것이 무엇인지부터 물어야 한다.

https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/ko/

#페블러스 #토크나이저 #LLM공정성 #편향감사

---

## Twitter/X (EN)

In a name-swap fairness test, some names enter the model as one token and others are assembled from three. The share entering whole runs about 5.4 times higher in the top group than the bottom.

Before asking whether the answer changed, ask what was actually held constant.

https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/en/

#Pebblous #Tokenization #LLMFairness #BiasAudit

---

## Facebook (KO)

여권을 처음 만들 때 이름을 로마자로 어떻게 적을지 골랐던 순간을 기억하시는 분이 계실 것입니다.

윤을 Yun으로 적을지 Yoon으로 적을지. 최를 Choe로 적을지 Choi로 적을지.

대개는 가족이 쓰던 표기를 따르거나, 외국 사람이 덜 틀리게 읽어 줄 쪽을 고릅니다.

그 선택이 훗날 AI 채용 심사에서 내 이름이 몇 조각으로 쪼개질지를 함께 고르는 일이었다는 사실은, 그 자리에서 아무도 알려 주지 않았습니다.

앨버타대 연구진이 지난 9월 28일 공개한 논문은 사람 이름 약 50만 개를 토크나이저 12종에 넣어 본 기록입니다. 모델은 글자를 보지 않습니다. 어휘에 등재된 조각으로 문장을 자르고 번호를 매긴 뒤, 그 번호만 받습니다. 어떤 이름은 그 어휘에 자기 자리가 있고, 어떤 이름은 없어서 조각을 빌려 씁니다.

자리를 받은 이름을 저는 '한 토큰짜리 이름'이라 부르게 됐습니다. 그리고 그 이름들은 고르게 흩어져 있지 않았습니다.

그러니 같은 서류에 이름만 갈아 끼우는 편향 검사는, 정작 '이름만' 갈아 끼운 적이 없습니다.

"우리가 조건을 맞췄다고 믿는 검사에서, 정말로 맞춰진 것은 무엇인가?"

한국 이름 쪽은 사정이 한 겹 더 답답합니다. 논문이 쓴 이름은 전부 미국 한 주의 유권자 명부에서 왔고, 한글 이름은 하나도 섞여 있지 않습니다. 같은 자로 직접 재 보니, 한글 이름에는 '한 토큰짜리 이름' 자리에 세울 이름이 거의 없었습니다. 비교가 기울어 있는 것이 아니라, 비교를 만들 재료가 없는 상태였습니다.

페블러스가 이 논문을 오래 붙잡은 이유도 여기에 있습니다. 저희는 모델을 바꾸는 회사가 아니라 모델에 들어가기 전 단계를 다룹니다. AI-Ready Data는 데이터를 모델이 쓸 수 있는 형태로 만드는 일이었는데, 이 연구는 그 '쓸 수 있는 형태'가 모델마다 다르다고 말합니다. 데이터와 모델 사이에 어휘라는 칸이 하나 더 있고, 그 칸의 내용물은 데이터를 만든 쪽이 정하지 않습니다.

편향 감사 보고서를 받는 자리에 계시다면, 비용이 거의 들지 않는 물음이 하나 있습니다.

"검사에 쓴 이름들은 이 모델에서 몇 토큰이었습니까."

답이 돌아오지 않는다면, 그 감사는 아직 통제되지 않은 변수를 하나 안고 있는 셈입니다.

전문 → https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/ko/

#페블러스 #토크나이저 #LLM공정성 #편향감사 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Some of you may remember choosing how to spell your name in Latin letters for your first passport.

Yun or Yoon. Choe or Choi.

Most of us followed whatever spelling the family already used, or picked the one a stranger was least likely to mangle.

Nobody mentioned, at that counter, that the choice would also decide how many pieces your name breaks into inside an AI hiring screen.

A paper released by University of Alberta researchers on 28 September is a record of roughly 500,000 names pushed through 12 tokenizers. A model does not see letters. It cuts text into the fragments its vocabulary happens to hold, numbers them, and receives only the numbers. Some names have a seat in that vocabulary. Others borrow fragments to get in.

I have started calling the ones with a seat "one-token names." They are not scattered evenly.

Which means the fairness test that swaps a name and holds the rest constant has never actually held the rest constant.

"When we believe we have equalized the conditions, what exactly did we equalize?"

For Korean names there is one more layer to it. Every name in the study came from one American state's voter file, and not a single Hangul name is in there. When we ran the same yardstick ourselves, there was almost nothing to place on the "one-token name" side. The comparison was not tilted; there was no material to build it from.

That is why this paper held our attention. Pebblous does not change models. We work on the step before the model. AI-Ready Data has always meant shaping data into a form a model can use, and this research says that form differs from model to model. There is one more cell between the data and the model, the vocabulary, and whoever prepared the data does not get to fill it.

If you are the one receiving a bias audit, there is a question that costs almost nothing.

"How many tokens were the names you tested, in this model?"

If no answer comes back, that audit is carrying one uncontrolled variable.

Read the full piece → https://blog.pebblous.ai/report/tokenizer-name-fragmentation-bias/en/

#Pebblous #Tokenization #LLMFairness #BiasAudit #DataClinic #AIReadyData
