# SNS 홍보 글: 뉴럴링크, 그냥 흘려보낸 뇌 신호로 커서 기록 경신

> 소스: blog/neuralink-unlabeled-pretraining-50000-hours/ko/index.html
> 생성일: 2026-10-06
> URL: https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

뉴럴링크가 10월 1일 올린 기술 노트에서, 임상 참가자들에게서 과제 없이 쌓인 신경 기록 5만 시간으로 커서 해독 모델을 먼저 가르쳤다고 밝혔다.

참가자 P15가 초당 11.32비트의 정보 전송률을 냈고, 종전 기록은 10.39비트였다.

이 기록은 과제를 시켜 모은 것이 아니다. 참가자가 밥을 먹을 때도 TV를 볼 때도 전극은 신호를 읽는데 그 시간에는 정답을 붙일 수 없어서, 임상시험이 시작된 뒤 2년 동안 비라벨로만 쌓였다. 첫 참가자 한 사람이 보탠 몫이 9,000시간, 스파이크로 세면 224억 개다.

방법은 커서 해독을 가르치기 전에 참가자별 신경 인코더부터 따로 학습시키는 것이다. 맘바2를 바탕으로 스파이크를 언어 모델의 토큰처럼 다루고, 채널의 절반만 보여 준 뒤 나머지 절반에서 무슨 일이 있었는지 맞히게 한다. 모델은 채널 하나하나를 외우는 대신 신경 집단이 함께 움직이는 구조를 배우고, 정답 붙은 기록은 그 위에 얹는 마지막 층에서만 필요해진다.

달라진 축은 셋이다. 정보 전송률이 올랐고, 주 55분이던 보정이 일부 참가자에게서 주 10분으로 내려갔고, 며칠이면 다시 맞춰야 하던 디코더가 3주 넘게 버텼다.

단서도 같은 노트에 적혀 있다. 공개된 실시간 성적은 전부 참가자 한 사람의 데이터로만 학습한 모델에서 나왔고, 여러 참가자를 합친 디코더는 실시간에서 더 나은 성적을 내지 못했다. 동료 심사를 거친 논문도 독립 재현도 아직 없고, 장치 자체가 임상시험용이다.

학계 쪽 보고를 옆에 놓으면 5만이라는 숫자를 읽는 방식이 달라진다. NeurIPS 2025의 NDT3는 여러 실험실 자료를 섞었을 때 작은 모델에서는 2,000시간으로 배운 쪽이 200시간으로 배운 쪽보다 나빴다고 보고했다. iBrain은 같은 참가자, 같은 세션 안의 중복 때문에 실제 다양성이 기록 시간만큼 늘지 않는다고 적었다.

그래서 이 발표가 데이터를 다루는 쪽에 남기는 질문은 얼마나 모았느냐가 아니다. 모은 것 가운데 서로 다른 것이 얼마나 되느냐다. 페블러스가 AI-Ready Data를 말할 때 양보다 준비 상태를 먼저 묻는 이유도 여기에 있다.

▶ 전문: https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #뉴럴링크 #BCI #비라벨데이터 #자기지도학습 #AIReadyData

---

## LinkedIn (EN)

Neuralink said in a technical note posted on October 1 that it pretrained its cursor decoder on 50,000 hours of neural recording collected from trial participants while no task was running.

One participant, P15, reached 11.32 bits per second of throughput, against a previous record of 10.39.

None of that recording came from an experiment. The electrodes read while participants ate dinner and watched television, and nothing in those hours could be labeled with an intent, so the pile grew unlabeled across two years of the trial. The first participant alone contributed more than 9,000 hours, or 22.4 billion spikes.

The method puts a per-participant neural encoder ahead of the decoder. Built on Mamba2, it treats spikes the way a language model treats tokens, shows the model half the channels and asks it to infer what happened on the other half. What the encoder learns is the structure of population activity rather than individual channels, and labeled recording is needed only in the last layer stacked on top.

Three things moved. Throughput rose, weekly calibration fell from 55 minutes to about 10 for some participants, and decoders that used to need refitting within days held for more than three weeks.

The same note records the limits. Every real-time result published so far comes from a model trained on one person's data, and a decoder pooling several participants was no better in real time. There is no peer-reviewed paper and no independent replication, and the device is investigational.

Set the academic work beside it and the headline number reads differently. NDT3, at NeurIPS 2025, pooled recordings across ten labs and found that a 45M-parameter model learned worse from 2,000 hours than from 200. iBrain reported so much redundancy within the same participant and session that effective diversity does not grow the way recorded time does.

So the question this leaves for anyone handling data is not how much was collected. It is how much of what was collected is actually different. That is why Pebblous asks about readiness before volume when it talks about AI-Ready Data.

▶ Read: https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Neuralink #BCI #UnlabeledData #SelfSupervisedLearning #AIReadyData

---

## Twitter/X (KO)

뉴럴링크가 10월 1일 기술 노트에서, 임상 참가자들에게 과제 없이 쌓인 신경 기록 5만 시간으로 커서 해독 모델을 먼저 가르쳤다고 밝혔다. 밥을 먹고 TV를 보는 동안 전극이 읽어 둔, 정답을 붙일 수 없던 기록이다.

같은 노트가 단서도 적어 두었다. 공개된 실시간 성적은 전부 참가자 한 사람의 데이터로 학습한 모델에서 나왔고, 여러 참가자를 합친 디코더는 실시간에서 더 낫지 않았다.

▶ https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/ko/

#페블러스 #뉴럴링크 #BCI #비라벨데이터

---

## Twitter/X (EN)

Neuralink's October 1 technical note says it pretrained the cursor decoder on 50,000 hours of neural recording gathered while participants ate dinner and watched television, hours no one could label with an intent.

The note also records the limit. Every real-time result comes from a model trained on one person's data, and a decoder pooling several participants was no better in real time.

▶ https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/en/

#Pebblous #Neuralink #BCI #UnlabeledData

---

## Facebook (KO)

임플란트는 과제가 끝났다고 꺼지지 않습니다.

그것을 단 사람이 저녁을 먹는 동안에도, TV를 보는 동안에도 전극은 뇌 신호를 계속 읽습니다. 화면에 아무 과제가 떠 있지 않으니 그 신호가 무엇을 하려던 것인지 적어 둘 방법이 없고, 기록은 정답 없이 쌓입니다.

뉴럴링크가 10월 1일 올린 기술 노트에 그렇게 쌓인 양이 적혀 있습니다. 임상시험이 시작된 뒤 2년 동안 5만 시간이 넘었고, 첫 참가자 한 사람 몫만 9,000시간입니다. 회사 설명으로는 최근까지 거의 쓰이지 않던 기록입니다.

이번에 커서를 읽는 모델을 바로 그 기록으로 먼저 가르쳤습니다. 참가자 한 사람이 초당 11.32비트를 냈고, 종전 기록은 10.39비트였습니다. 매주 55분씩 들던 보정도 일부 참가자에게서는 주 10분으로 내려갔습니다.

제 눈이 멈춘 자리는 성적이 아니라 기록을 세는 단위였습니다. 5만 시간은 분량이지 종류가 아닙니다.

같은 문제를 다룬 학계 보고가 정확히 그 자리를 짚습니다. iBrain 연구진은 같은 참가자, 같은 세션 안의 중복이 많아 실제 다양성이 기록 시간만큼 늘지 않는다고 적었고, 2,000시간을 넘어서면 향상 폭이 작아진다고 봤습니다. NDT3는 반대쪽 벽을 보여 줍니다. 열 개 실험실 자료를 섞었더니 작은 모델에서는 2,000시간으로 배운 쪽이 200시간으로 배운 쪽보다 나빴습니다. 다양성을 늘리는 선택에도 대가가 따른다는 뜻입니다.

"지금 보관 중인 기록 안에, 서로 다른 조건이 몇 가지나 들어 있습니까?"

페블러스가 데이터셋을 진단할 때 보관 시간보다 먼저 세는 것도 그 가짓수입니다. 사람과 장비, 시간대와 작업 종류 가운데 모델이 실제로 필요로 하는 축이 무엇인지를 정해야, 그 더미가 자산인지 아닌지를 말할 수 있습니다.

뉴럴링크는 구간별 성능 곡선을 공개하지 않았습니다. 그래서 이번 기록이 5만 시간에 이르러서야 나온 것인지 2,000시간에서 이미 나와 있던 것인지는 바깥에서 가릴 수 없습니다. 동료 심사도 독립 재현도 아직 없고, 여러 참가자를 합친 디코더는 실시간에서 더 낫지 않았다고 회사 스스로 적어 두었습니다.

창고를 시간으로 세는 습관이 제 안에도 이렇게 깊이 박혀 있다는 것을, 뇌 신호 이야기를 읽으며 알았습니다.

▶ 전문: https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/ko/

#페블러스 #뉴럴링크 #BCI #비라벨데이터 #데이터품질 #데이터클리닉

---

## Facebook (EN)

An implant does not switch off when the task does.

The person wearing one eats dinner, watches television, sits and rests, and the electrodes go on reading. Nothing on the screen says what that signal was reaching for, so the recording piles up with no answer key attached.

A technical note Neuralink posted on October 1 counts what piled up. More than 50,000 hours across two years of the trial, more than 9,000 of them from the first participant alone. Until recently, the company says, almost none of it was being used.

This time the cursor decoder was taught on that pile first. One participant reached 11.32 bits per second, against a previous record of 10.39. Calibration that had been running 55 minutes a week came down to about 10 for some users.

It was the unit, not the record, that gave me pause. Fifty thousand hours is an amount, not a variety.

The academic work on the same question lands on exactly that distinction. The iBrain authors found enough redundancy within a single participant and a single session that effective diversity does not grow the way recorded time does, and the gains flatten past two thousand hours. NDT3 shows the opposite wall. Pool recordings from ten labs and the smaller model learned worse from two thousand hours than from two hundred. Widening variety carries its own cost.

"Inside the recordings you are holding, how many genuinely different conditions are in there?"

Counting those conditions comes before counting storage time in the way Pebblous diagnoses a dataset. Until you decide which axis the model actually needs, whether it is the person, the equipment, the hour of day or the kind of work, there is no saying whether the pile is an asset.

Neuralink has not published a performance curve by data size. So nobody outside can tell whether this record arrived at fifty thousand hours or was already there at two thousand. There is no peer review and no independent replication, and the company itself recorded that a decoder pooling several participants was no better in real time.

Reading about brain signals is what showed me how deeply the habit of counting an archive in hours is lodged in me.

▶ Full piece: https://blog.pebblous.ai/blog/neuralink-unlabeled-pretraining-50000-hours/en/

#Pebblous #Neuralink #BCI #UnlabeledData #DataQuality #DataClinic
