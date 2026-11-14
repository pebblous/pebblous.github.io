# SNS 홍보 글: GPU 클러스터, 자리는 다 찼는데 일을 안 한다

> 소스: blog/gpu-cluster-fine-grained-utilization/
> 생성일: 2026-10-30
> URL: https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/ko/
> voice: sns-cover (LinkedIn, Twitter/X) · reflective (Facebook)

---

## LinkedIn (KO)

프린스턴대 연구진이 자기 학교 GPU 클러스터를 0.1초 간격으로 들여다보니, 작업 절반이 연산 코어를 평균 5%도 쓰지 않고 있었다.

89개 노드에 GPU 319장이 달린 공유 클러스터에서 열흘치 작업 7,399건을 기록한 결과로, 10월 26일 arXiv에 올라왔다. 단일 GPU 작업의 70% 이상은 할당받은 GPU 메모리의 20%도 쓰지 않았다. 그런데 GPU 한 장을 받으려고 줄에서 기다린 시간은 중앙값으로 22시간이었다.

바뀐 것은 하드웨어가 아니라 잣대다. 앞선 연구들이 쓴 눈금은 훨씬 성겼고, 100ms로 잰 연구도 값은 nvidia-smi에서 읽었다. nvidia-smi가 내주는 사용률은 커널이 돌던 시간의 비율이라 A100에 든 연산 코어 108개 중 하나만 돌아도 100%로 찍힐 수 있다.

한계는 저자들이 직접 적어 두었다. 대학 연구 클러스터 한 곳의 열흘 관측이고, GPU를 여러 장 쓴 작업은 343건뿐이다. 상용 데이터센터의 숫자가 이와 같으리라는 보장은 논문 어디에도 없다.

같은 달에 H100을 1년 계약으로 빌릴 때 시간당 비용이 지난 1년간 60% 올랐다는 집계도 나왔다. 품귀와 유휴 가운데 어느 쪽을 믿을지 정하기 전에, 우리가 보는 사용률이 어느 도구로 어느 간격에서 나온 값인지부터 확인할 일이다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 점수가 맞는지 따지기 전에 그 점수가 무엇을 세어서 나왔는지를 먼저 확인하는 순서는, 사용률 쪽에서도 다르지 않다.

▶ 전문: https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #GPU클러스터 #GPU사용률 #AI인프라 #프린스턴대 #엔비디아 #DCGM

---

## LinkedIn (EN)

Princeton researchers sampled their own GPU cluster every 100 ms and found half the jobs averaging under 5% use of their compute cores.

The cluster holds 89 nodes and 319 GPUs. The team logged 7,399 jobs across ten days and posted the results to arXiv on October 26. More than 70% of single-GPU jobs never touched 20% of the memory they were holding, while the median wait to get a single GPU on that same cluster was nearly 22 hours.

Nothing about the hardware changed. The ruler did. Earlier studies worked with much coarser rulers, and the one that did sample at 100 ms read its numbers from nvidia-smi. The utilization nvidia-smi hands back is the fraction of time a kernel was running, so a job using one of an A100's 108 compute cores can still be reported as 100%.

The authors state the limits themselves. This is ten days on one university research cluster, only 343 jobs used more than one GPU, and nothing in the paper promises a commercial data center looks like this.

The same month brought a tally that renting H100-based compute on a one-year contract had risen 60% in hourly cost over the previous year. Before deciding which of the two numbers to act on, it is worth establishing which tool produced your own utilization figure and at what interval.

Pebblous puts a ruler to the quality of AI training data with DataClinic. Quality scores fail the same way utilization numbers do, by outliving anyone's ability to say what they counted.

▶ Read: https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #GPUCluster #GPUUtilization #AIInfrastructure #Princeton #Nvidia #DCGM

---

## Twitter/X (KO)

대학 GPU 클러스터를 0.1초 눈금으로 다시 재 보니, 작업 절반이 연산 코어를 평균 5%도 쓰지 않고 있었다.

품귀와 유휴를 가른 것은 하드웨어가 아니라 측정 간격이었다.

https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/ko/

#페블러스 #데이터품질 #GPU클러스터 #DCGM #프린스턴대

---

## Twitter/X (EN)

A university GPU cluster was re-measured at 100 ms resolution. Half the jobs were averaging under 5% use of their compute cores.

What separated scarcity from idleness was not the hardware but the sampling interval.

https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/en/

#Pebblous #DataQuality #GPUCluster #DCGM #Princeton

---

## Facebook (KO)

"사용률 92%."

이런 줄을 보고받으면 저는 거기서 질문을 멈췄습니다. 꽉 찼다니 더 사야 한다, 회의는 대개 그렇게 끝났습니다.

프린스턴대 컴퓨터과학과 연구진이 자기 학교의 공유 GPU 클러스터를 0.1초 간격으로 열흘 동안 기록했습니다. 89개 노드에 GPU 319장이 달린, 12개 학과 150명이 나눠 쓰는 기계입니다.

작업의 절반이 연산 코어를 평균 5%도 쓰지 않고 있었습니다.

그런데 그 GPU 한 장을 받으려고 줄에서 기다린 시간은 중앙값으로 22시간이었습니다.

하루를 기다려 앉은 자리가 대부분 비어 있었다는 뜻입니다.

같은 기계에서 두 숫자가 갈린 까닭은 눈금에 있었습니다. nvidia-smi가 내주는 사용률은 커널이 돌던 시간의 비율이라, A100에 든 연산 코어 108개 가운데 하나만 돌아도 100%로 적힐 수 있습니다. 100초마다 한 번 보던 눈금을 0.1초로 줄이자, 장부에서 가득 차 있던 시간이 대부분 빈칸으로 바뀌었습니다.

저자들이 밝힌 한계도 함께 적어 둡니다. 대학 연구 클러스터 한 곳의 열흘 관측이고, GPU를 여러 장 쓴 작업은 343건뿐입니다. 상용 데이터센터가 같은 숫자를 낼 것이라는 보장은 논문 어디에도 없습니다.

"이번 주에 대시보드를 열어, 사용률 숫자 옆에 그 값을 낸 도구 이름과 측정 간격을 적어 넣을 수 있겠습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질 점수를 읽을 때 저희가 가장 먼저 확인하는 것도 그 점수가 무엇을 세어서 나온 값인가입니다.

GPU를 더 살지 말지는 그 한 줄을 적은 다음에 정해도 늦지 않을 것 같습니다.

전문: https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/ko/

#페블러스 #데이터클리닉 #데이터품질 #GPU클러스터 #GPU사용률 #프린스턴대 #AIReadyData

---

## Facebook (EN)

"92% utilization."

A line like that used to close the question for me. The machines are full, so buy more. That was usually where the meeting ended.

Computer scientists at Princeton recorded their university's shared GPU cluster every 100 ms for ten days. Eighty-nine nodes, 319 GPUs, shared by 150 people across 12 departments.

Half the jobs were averaging under 5% use of their compute cores.

And the median wait to get one of those GPUs was nearly 22 hours.

A day in the queue for a seat that then sat mostly empty.

What split the two numbers on one machine was the ruler. The utilization nvidia-smi hands back is the fraction of time a kernel was running, so a job using one of an A100's 108 compute cores can still be written down as 100%. Shrink the sampling interval from 100 seconds to 100 ms, and hours the ledger had recorded as full come back mostly blank.

The authors set down their own limits. This is ten days on one university research cluster, only 343 jobs used more than one GPU, and nothing in the paper promises a commercial data center looks like this.

"Could you open your dashboard this week and write, next to the utilization number, which tool produced it and at what interval?"

Pebblous puts a ruler to the quality of AI training data with DataClinic. When a quality score comes back, what we establish before anything else is what that score counted.

Whether to buy more GPUs can wait until that one line is written.

Read: https://blog.pebblous.ai/blog/gpu-cluster-fine-grained-utilization/en/

#Pebblous #DataClinic #DataQuality #GPUCluster #GPUUtilization #Princeton #AIReadyData
