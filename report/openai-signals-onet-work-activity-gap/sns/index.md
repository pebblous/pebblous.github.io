# SNS 홍보 글: 오픈AI 시그널스, 챗GPT 통계에서 현장 일은 '기타' 한 칸

> 소스: report/openai-signals-onet-work-activity-gap/
> 생성일: 2026-11-01
> URL: https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

오픈AI는 챗GPT 업무 대화를 미국 노동부의 업무 활동 332가지로 나눈 뒤, 이름을 붙여 공개한 것은 164가지다. 나머지는 '기타' 한 칸으로 들어갔다.

10월 26일 공개된 오픈AI 시그널스 v3.0은 약 100개국의 업무 대화를 직업정보망 오넷(O*NET)의 업무 활동으로 분류해 CC BY 4.0으로 열어 뒀다. 페블러스가 그 묶음을 직접 받아 파이썬으로 다시 집계했다. 발표문이 가장 앞에 내건 수치는 소수 둘째 자리까지 그대로 재현된다. 아래 지적은 모두 그 재현이 된다는 전제 위에 있다.

이름을 잃은 168가지를 오넷 상위 범주로 묶으면 어느 쪽이 지워졌는지가 드러난다. 기계·공정 제어와 부하 직원 지도·지시·동기부여는 각각 12개 항목 전부가 '기타'로 들어갔다. 반대로 데이터·정보 분석과 컴퓨터로 하는 일은 한 항목도 빠지지 않았다. 책상 일은 남고 현장 일과 관리 일이 지워졌다.

왜 그 168가지였는지는 발표문이 밝혀 둔다. 챗GPT 표본에서 충분히 일관되게 나타나지 않아 개별 범주 기준을 못 넘겼다는 것이다. 뒤집어 읽으면 고리가 보인다. 챗GPT에서 드물다는 이유로 표에서 지워졌으니, 이 표는 설계상 챗GPT가 아직 닿지 않은 일을 보여 줄 수 없다.

크기는 분모를 무엇으로 두느냐에 따라 달라진다. 같은 활동들이 챗GPT 업무 대화에서는 미국 기준 2.4%이고, 매핑된 미국 직업의 과업 구성을 고용 규모로 가중하면 약 43%다.

공개된 CSV 안에는 뒤쪽을 재현할 재료가 없다. 그래서 오넷 원본과 미국 노동통계국 고용 자료로 바깥에서 계산해 봤고, 가정을 바꾼 여섯 가지 값이 모두 1%포인트 안에 들어왔다. 검증은 되는데 공개 묶음 안에서는 안 된다는 뜻이다.

한국 보도의 수치는 틀리지 않았다. 멈춘 자리가 비교다. 시각 자료 제작이 1년 새 두 배가 된 것은 맞지만 같은 상승은 세계 전반에서 일어났다.

2026년 3분기 단면에서 한국은 그 분기에 수록된 76개국 가운데 45위다. 2025년 2분기 이후 내내 평균 아래였고, 1위는 태국이다.

열어 준 것과 보여 준 것이 다르다는 것이 이 글의 전부다. 오픈AI가 원자료를 열어 두지 않았다면 셀 수 없었던 수치이고, 그래서 숨겼다고 쓰지 않는다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 거기서 반복해 나오는 결함이 정확히 이 모양이다. 라벨 체계에 칸이 없거나 너무 드물어서 '기타'로 쓸려 들어간 클래스가, 정작 현업에서 가장 중요한 클래스인 경우다. 모델을 더 키워도 그 클래스는 보이지 않는다. 고쳐야 할 것은 스키마다.

▶ 전문: https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #OpenAI #ChatGPT #ONET #분류체계 #노동통계

---

## LinkedIn (EN)

OpenAI sorted ChatGPT work messages into 332 US Department of Labor work activities. It published names for 164 of them. The rest went into a single box marked Other.

The dataset is OpenAI Signals v3.0, released on October 26, covering work conversations from roughly 100 countries mapped to O*NET work activities and licensed CC BY 4.0. Pebblous downloaded the bundle and recounted it in Python. The headline figure in the announcement reproduces to the second decimal place, and everything below rests on that.

Group the 168 unnamed activities by their O*NET parent categories and the pattern is not random. Controlling machines and processes lost all 12 of its activities to the Other box, and so did guiding, directing and motivating subordinates. Analyzing data and working with computers lost none. Desk work kept its names; hands-on work and supervision did not.

OpenAI states why those 168 went. They did not show consistent representation in the original US ChatGPT sample, so they missed the bar for individual reporting. Read that in reverse and the loop appears. Activities were removed from the table because they are rare in ChatGPT, which means the table cannot, by construction, show what ChatGPT has yet to reach.

The size of the gap depends on the denominator. Measured against classified ChatGPT work messages in the US, those activities come to 2.4%. Measured against the employment-weighted task composition of mapped US occupations, they come to roughly 43%.

The published CSVs contain nothing that reproduces the second figure. We recomputed it outside the bundle from O*NET and BLS employment data, and six variations of the assumptions all landed within a percentage point of each other. It verifies, but not from inside the release.

Korean coverage of the release got its numbers right. What it left out was the comparison. Visual design requests in Korea did double over the year, but the same climb shows up worldwide.

In Q3 2026 Korea sits 45th of the 76 countries reported that quarter. It has been below the mean every quarter since Q2 2025, and Thailand leads.

What was opened and what was shown are two different things, and that is the whole of it. None of this would be countable had OpenAI not released the raw files, so this is not a story about concealment. Pebblous runs DataClinic to measure the quality of AI training data, and this defect shows up there constantly: the class that gets swept into Other, because the label schema has no slot for it or too few examples, turns out to be the class the business cares about most. A larger model will not surface it. The schema is what needs fixing.

▶ Read: https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #OpenAI #ChatGPT #ONET #Taxonomy #LaborStatistics

---

## Twitter/X (KO)

오픈AI는 챗GPT 업무 대화를 오넷 업무 활동 332가지로 분류한 뒤, 이름을 붙여 공개한 것은 164가지다. 나머지는 '기타' 한 칸이다.

지워진 쪽을 상위 범주로 묶어 보니 기계를 다루는 일, 물건을 옮기는 일, 그리고 부하 직원을 지도하는 일이었다. 책상 일은 하나도 지워지지 않았다.

https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/ko/

#페블러스 #데이터품질 #OpenAI #ChatGPT

---

## Twitter/X (EN)

OpenAI sorted ChatGPT work messages into 332 O*NET work activities and published names for 164. The remainder went into one box marked Other.

Group the unnamed ones by parent category and they are machine control, moving objects, and supervising people. Desk work lost nothing.

https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/en/

#Pebblous #DataQuality #OpenAI #ONET

---

## Facebook (KO)

서류의 직업란에는 거의 언제나 맨 아래에 '기타'가 있습니다.

거기에 표시를 하고 나면 그 사람의 일은 집계에서 이름을 잃습니다.

오픈AI가 10월 26일에 연 챗GPT 사용 통계에도 그 칸이 있었습니다.

원자료를 통째로 열어 준 공개였습니다. 누구나 내려받아 다시 셀 수 있게 해 둔 자료이고, 저희도 그 덕분에 다시 셀 수 있었습니다. 발표문이 앞세운 수치는 소수 둘째 자리까지 그대로 나왔습니다.

다만 분류는 332가지로 했는데, 이름을 붙여 내놓은 것은 164가지였습니다.

나머지 168가지를 저희는 '이름 없는 절반'이라고 부르기로 했습니다.

그 절반이 어떤 일인지가 궁금해서 오넷의 상위 범주로 묶어 봤습니다. 기계를 다루는 일 열두 개가 전부 그 칸으로 들어가 있었습니다. 물건을 들고 옮기는 일은 마흔일곱 중 마흔넷이었습니다.

그리고 부하 직원을 지도하고 지시하고 동기를 부여하는 일 열두 개도, 하나도 남김없이 그 칸에 있었습니다.

데이터를 분석하는 일과 컴퓨터로 하는 일은 한 항목도 지워지지 않았습니다.

이유는 발표문에 적혀 있습니다. 챗GPT 표본에서 충분히 자주 나타나지 않았다는 것입니다. 드물어서 지웠다는 말이니, 이 표는 설계상 아직 AI가 닿지 않은 일을 보여 줄 수 없게 되어 있습니다.

"분류표에 칸이 없는 일은, 하지 않은 일입니까?"

이 질문이 며칠 동안 손에서 내려가지 않았습니다. 챗GPT 대화에서 2%대인 그 일은, 미국 직업의 과업 구성을 고용 규모로 가중하면 40%대를 차지합니다. 같은 일을 두 잣대로 재면 숫자가 그렇게 벌어집니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 진단에서 가장 자주 만나는 결함도 이 모양입니다. 라벨 체계에 칸이 없거나 사례가 너무 적어서 '기타'로 쓸려 들어간 클래스가, 현업에서는 가장 중요한 클래스인 경우입니다. 모델을 더 키운다고 그 클래스가 보이지는 않습니다.

지워진 절반의 얼굴을 다시 보면 물건을 옮기고 기계를 세우고 설비를 점검하는 일입니다. 저희가 데이터를 만드는 자리와 정확히 겹칩니다.

존재하지 않는 것으로 집계된 영역에는 예산도 정책도 붙지 않습니다.

서류의 그 칸에 표시를 한 사람들은, 지금 어디에서 셈해지고 있습니까.

전문 → https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #OpenAI #ChatGPT

---

## Facebook (EN)

On most forms, the list of occupations ends with Other.

Tick that box and your work loses its name in the count.

The ChatGPT usage statistics OpenAI opened on October 26 have that box too.

It was a genuine release. The raw files are there for anyone to download and recount, which is the only reason we were able to recount them. The headline figure came back to the second decimal place.

What the release does not foreground is that the sorting was done into 332 activities, and names were published for 164.

We have taken to calling the other 168 the unnamed half.

To see what that half consists of, we grouped it by O*NET's parent categories. All twelve activities under controlling machines and processes were in the box. Of the forty-seven under handling and moving objects, forty-four were.

So were all twelve activities under guiding, directing and motivating subordinates. Every one.

Analysing data and working with computers lost nothing at all.

The reason is printed in the announcement: those activities did not appear consistently enough in the ChatGPT sample. Removed for being rare, which means the table is built so that it cannot show the work AI has not yet reached.

"Is work with no slot in the taxonomy the same as work that isn't being done?"

That question has stayed with me for several days. The activities that account for about 2% of ChatGPT work conversations account for about 43% of the task composition of US occupations once you weight by employment. One kind of work, two rulers, and the numbers come apart like that.

Pebblous runs DataClinic to measure the quality of AI training data, and the defect we meet most often has this exact shape. A class gets swept into Other because the schema has no slot for it, or too few examples, and it turns out to be the class the business depends on. Scaling the model does not bring it back into view.

Look again at the faces of the unnamed half and they are moving objects, running machines, inspecting equipment. That is precisely where our own data work lives.

Budgets and policy do not attach to a category that the statistics record as absent.

The people who tick that box on the form: where exactly are they being counted?

Read the full piece → https://blog.pebblous.ai/report/openai-signals-onet-work-activity-gap/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #OpenAI #ONET
