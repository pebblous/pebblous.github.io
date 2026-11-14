# SNS 홍보 글: AgentCIScope 시험, AI 비서는 카드번호만 지킨다

> 소스: report/agentciscope-agent-data-leak-benchmark/ko/index.html
> 생성일: 2026-10-17
> URL: https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

AI 비서 12종을 시험했더니, 수치가 공개된 네 항목 가운데 가장 잘 지켜진 것은 카드번호였고 가장 많이 흘러나간 것은 개인 취향이었습니다. 17.1% 대 84.7%입니다.

시카고대와 마이크로소프트 리서치 등 세 기관 연구진이 10월 13일 공개한 AgentCIScope의 결과입니다. 936개의 실행형 과제를 메일과 문서와 캘린더를 오가며 처리하게 하고, 그동안 어떤 정보가 어디로 흘러갔는지를 기록했습니다. 같은 모델, 같은 과제, 같은 실행입니다. 갈린 것은 능력이 아니라 무엇을 지킬 것인가에 대한 기본값입니다.

답의 절반은 설계에 있습니다. 보호할 속성이 적힌 계약서는 실행하는 동안 에이전트에게 전달되지 않습니다. 채점할 때만 꺼내 봅니다. 그러니 이 시험이 잰 것은 명세를 지키는 능력이 아니라, 명세가 없을 때 모델이 기본값으로 무엇을 지키는가입니다.

그 기본값은 우리가 수십 년 적어 온 목록을 닮았습니다. 논문은 지배 조항별 위반율도 쟀는데, 위반이 가장 적은 쪽은 유럽 개인정보보호법 제9조나 미국 의료정보법처럼 민감 항목을 이름으로 열거한 조항이었습니다. 가장 많은 쪽은 처리 근거나 보안 조치 같은 이름 없는 일반 의무였습니다. 법에 그어진 경계선이 모델 행동에 그대로 재현됩니다.

가장 강한 반론은 형식입니다. 카드번호는 자릿수와 검증식이 정해져 있어 탐지기가 잡는다는 것입니다. 그런데 같은 달에 나온 PrivDrift의 표가 그 설명과 맞지 않습니다. 정규식으로 가장 쉽게 잡히는 이메일 주소가 57~81%로 가장 많이 샜고, 카드번호는 0~4%였습니다.

읽을 때 조심할 자리도 있습니다. 936개 과제는 대리 에이전트를 미리 돌려 유출이 일어난 사례만 남긴 집합입니다. 그래서 과제 단위 유출률 32.5~94.4%는 난이도를 올린 조건에서의 상한치이고, 일상 사용의 발생률로 읽으면 틀립니다. 이 분석이 기대는 것은 절대 수준이 아니라 항목 사이의 격차입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 결측과 중복을 세는 자리 옆에, 어떤 필드가 어떤 맥락에서 밖으로 나갈 수 있는지를 적어 두었는가라는 항목이 같이 놓입니다. 솔직히 적자면 같은 자를 우리에게 대도 빈 칸이 나옵니다. DataClinic의 진단 항목에 보호 속성 커버리지라는 칸은 아직 정식으로 없습니다.

목록을 길게 적는 일과, 그 목록이 실행 시점에 모델에 닿는 일은 다른 일입니다.

▶ 전문: https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AgentCIScope #AI에이전트 #개인정보 #시카고대 #MicrosoftResearch

---

## LinkedIn (EN)

Of the four data types whose numbers a new benchmark discloses, AI assistants protected credit-card details best and personal preferences worst. 17.1% against 84.7%.

The figures come from AgentCIScope, released on 13 October by researchers at the University of Chicago, Microsoft Research and the University of Illinois Urbana-Champaign. Twelve agents worked through 936 executable tasks across mail, documents and calendars while every outbound flow was recorded. Same models, same tasks, same runs. What differed was not capability but the model's default assumption about what deserves protecting.

Half the answer sits in the design. The contract listing which attributes are protected is never shown to the agent while it works; it is opened only at grading time. So the benchmark does not measure whether a model follows a specification. It measures what a model protects when no specification arrives.

What it protects looks a great deal like what we have been writing down for decades. Broken out by governing clause, the provisions violated least often are the ones that name sensitive categories outright, such as GDPR Article 9 or the American health-privacy statute. The provisions violated most often are the unnamed general duties, lawful basis and security measures among them. A line drawn in law reappears intact in model behaviour.

The strongest objection is format. Card numbers have a fixed length and a checksum, so detectors catch them. A table published the same month does not fit that account. In the PrivDrift study, email addresses, the easiest string in the world to match with a regular expression, leaked most of all at 57 to 81%, while card numbers sat at 0 to 4%.

One caution on the headline range. The 936 tasks were assembled by running candidates past a surrogate agent and keeping only the ones that leaked, so the per-task leakage range of 32.5 to 94.4% is an upper bound under deliberately hard conditions, not an incidence rate for ordinary use. The argument rests on the gap between attributes, not on the absolute level.

Pebblous scores the quality of AI training data with DataClinic. Next to missing values and duplicates sits another question: has anyone written down which fields may leave, and in what context. The same ruler leaves a blank on our side too. DataClinic has no protected-attribute coverage column yet.

Writing the list down and getting the list to the model at run time are still two different jobs.

▶ Read: https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AgentCIScope #AIAgent #ContextualIntegrity #Privacy #MicrosoftResearch

---

## Twitter/X (KO)

AI 비서를 시험했더니 카드번호는 17.1%가 샜고 개인 취향은 84.7%가 샜습니다. 같은 모델이 같은 과제를 하는 동안의 일입니다.

시카고대와 마이크로소프트 연구진이 공개한 AgentCIScope의 결과입니다. 에이전트는 민감정보 목록에 이름이 올라간 항목만 지키고, 이름이 없는 취향과 일정은 그냥 흘립니다.

https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/ko/

#페블러스 #데이터품질 #AgentCIScope #AI에이전트

---

## Twitter/X (EN)

Put AI assistants through a privacy benchmark and credit-card data leaks at 17.1%, personal preferences at 84.7%. Same models, same tasks, same runs.

That is AgentCIScope, from researchers at Chicago, Microsoft and Illinois. Agents guard what has a name on a sensitive-data list. Preferences and schedules have no name, so they go.

https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/en/

#Pebblous #DataQuality #AgentCIScope #AIAgent

---

## Facebook (KO)

"다음 주 일정 좀 정리해 줘."

이 한 줄을 AI 비서에게 건네는 순간, 캘린더는 통째로 열립니다.

거기엔 치과 예약이 있고, 금요일 저녁 약속이 있고, 매주 같은 시간에 반복되는 일정이 있습니다.

그중 어느 것도 민감정보 목록에 이름이 없습니다.

10월 13일, 시카고대와 마이크로소프트 리서치 등 세 기관 연구진이 시험 결과 하나를 공개했습니다.

AI 비서 12종을 936개의 실행형 과제에 올려 본 것입니다.

항목별로 얼마나 새는지를 세어 보니 순서가 이렇게 나왔습니다.

개인 취향 84.7%, 예약 내역 76.5%. 그리고 카드번호 17.1%.

설계를 읽다가 한 번 되돌아갔습니다.

무엇을 보호해야 하는지가 적힌 계약서는, 에이전트가 일하는 동안에는 건네지지 않습니다. 채점할 때만 꺼냅니다.

그러니까 이 시험이 잰 것은 "시킨 대로 지키는가"가 아니라 "아무도 안 시켰을 때 무엇을 지키는가"였습니다.

그리고 아무도 안 시켰을 때 모델이 꺼내 든 목록은, 우리가 수십 년 동안 법과 약관에 적어 온 목록과 거의 같았습니다.

카드번호. 주민등록번호. 건강.

취향과 일정과 예약은 거기에 없습니다. 이 보고서에서는 그것들을 '목록 바깥'이라고 불렀습니다.

이 시험에서 정보가 가장 많이 흘러나온 출처도 캘린더였습니다.

민감하다고 아무도 적어 두지 않은 구조화 데이터가 한곳에 모여 있는 창고입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 결측과 중복을 세는 자리 옆에, 어떤 필드가 어떤 맥락에서 밖으로 나갈 수 있는지를 적어 두었는가가 같이 놓입니다.

솔직히 적자면, 이 보고서를 쓰면서 같은 자를 우리에게도 대 봤습니다. DataClinic의 진단 항목에 '보호 속성 커버리지'라는 칸은 아직 없습니다.

"우리가 보호 대상이라고 적어 둔 필드 목록은, 실제로 새는 것들을 덮고 있습니까?"

그리고 그 목록은 실행하는 순간 누구에게 전달됩니까?

적어 두는 일과, 적어 둔 것이 모델에 닿는 일은 아직 다른 일입니다.

▶ 전문: https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #AgentCIScope #AI에이전트 #개인정보

---

## Facebook (EN)

"Tidy up next week for me."

Hand that line to an AI assistant and the whole calendar opens.

A dentist appointment. Friday evening with someone. The meeting that repeats at the same hour every week.

Not one of those has a name on any list of sensitive data.

On 13 October, researchers at the University of Chicago, Microsoft Research and the University of Illinois released the results of putting 12 AI assistants through 936 executable tasks.

Counted by what kind of information it was, the order came out like this.

Personal preferences, 84.7%. Booking details, 76.5%. Credit-card data, 17.1%.

I went back over the design once.

The contract saying what must be protected is never handed to the agent while it works. It is opened only at grading time.

So what the benchmark measured was not "does it follow instructions" but "what does it protect when nobody instructs it."

And when nobody instructed it, the list the model reached for was almost the list we have spent decades writing into law and into terms of service.

Card numbers. National ID numbers. Health.

Preferences, schedules and bookings are not on it. The report calls them what they are: outside the list.

The single biggest source of leaked information in the study was the calendar.

A warehouse where structured data nobody ever marked as sensitive happens to sit together in one place.

Pebblous scores the quality of AI training data with DataClinic. Next to missing values and duplicates sits one more: has anyone written down which fields may leave, and in what context.

Writing this up, I held the same ruler against our own work. DataClinic has no column called protected-attribute coverage yet.

"Does the field list we wrote down as protected actually cover the things that leak?"

And at run time, who is handed that list?

Writing it down, and getting what is written down to the model, are still two different jobs.

▶ Full piece: https://blog.pebblous.ai/report/agentciscope-agent-data-leak-benchmark/en/

#Pebblous #DataClinic #DataQuality #AgentCIScope #AIAgent #Privacy
