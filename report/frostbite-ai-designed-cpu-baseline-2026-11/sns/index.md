# SNS 홍보 글: AI가 설계한 CPU Frostbite, 비교 상대가 가명이다

> 소스: report/frostbite-ai-designed-cpu-baseline-2026-11/
> 생성일: 2026-11-24
> URL: https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

AI 에이전트가 끝까지 돌려 만들었다는 CPU 설계가 11월 18일 공개됐다. 성적표에서 이름이 적히지 않은 쪽은 새 칩이 아니라 견준 상대다.

팰로앨토의 Architect Labs가 내놓은 Frostbite다. 컴파일러와 명령어 집합에서 시작해 회로 설계와 검증을 지나 공장에 넘길 도면까지, 설계의 모든 단계를 에이전트가 되풀이했다는 것이 회사의 설명이다. 내세운 수는 작업부하 25개에서 와트당 성능 4.59배다.

회사는 그 수를 갈라서 냈다. 설계를 조정하며 본 탐색 집합 10개에서 6.02배, 손대지 않고 남겨 둔 평가 집합 15개에서 3.83배다. 두 점수를 작업부하 개수만큼 가중해 합치면 헤드라인의 그 수가 그대로 나온다. 비율을 기하평균으로 묶는 계산법 역시 컴퓨터 구조 분야가 1986년에 합의해 둔 쪽이다.

문제는 산술 쪽이 아니다. 공개된 성능과 전력은 하나도 빠짐없이 배수이고, 나눈 쪽에 선 것은 언제나 같은 코어 하나다. 회사는 그 코어의 신원을 법적 사정 때문에 밝힐 수 없다고 적었다. 클럭도 절대 전력도 그 자리에 없다. 포스트는 그 코어를 실리콘으로 검증된 것이라 부르는데, 정작 실물이 있는 쪽에는 이름이 없고 이름이 있는 쪽에는 아직 실물이 없다.

같은 계산을 쓰는 SPEC CPU 벤치마크는 기준이 되는 기계의 모델명과 클럭을 공개한다. 수치가 모두 칩을 찍기 전 단계의 추정값이라는 것은 회사가 먼저 적었고, 되짚으려는 사람이 멈추는 자리도 추정의 정밀도가 아니라 그 앞의 신원이다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 배수로 적힌 성적은 무엇으로 나눈 값인지가 같이 적혀 있을 때만 받은 쪽에서 다시 세어 볼 수 있다.

▶ 전문: https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #Frostbite #ArchitectLabs #AI칩설계 #벤치마크 #반도체

---

## LinkedIn (EN)

A Palo Alto startup published a CPU design on 18 November that it says AI agents carried end to end, from the compiler through the instruction set, the RTL, verification and the final layout a fab would take. The headline figure is 4.59x the performance per watt of a comparison core across 25 workloads.

Architect Labs split that figure before reporting it. The ten workloads it looked at while tuning the design return 6.02x. The fifteen it held back return 3.83x. Weighted by workload count the two recombine into the headline exactly, and summarising ratios by geometric mean is the method this field settled on in 1986.

The arithmetic is not where this stops. Every performance and power figure in the post is a multiple, and every multiple is taken against the same core, which the company says it cannot name for legal reasons. The clock speed of that core is absent, and so is its absolute power draw. The company describes it as silicon-proven. The part with silicon has no name and the part with a name has no silicon yet.

SPEC CPU 2017 computes its scores the same way, as ratios against a reference machine, and it names the machine: a Sun Fire V490 with 2100 MHz UltraSPARC-IV+ chips. Readers raised the point on the day of publication, in a thread that gathered 365 comments, and no reply from the company appeared in it.

Pebblous quantifies the quality of AI training data with DataClinic. A result reported as a multiple can only be recomputed by someone who knows what it was divided by.

▶ Read: https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Frostbite #ArchitectLabs #AIChipDesign #Benchmark #Semiconductor

---

## Twitter/X (KO)

AI 에이전트가 끝까지 설계했다는 CPU가 와트당 성능 4.59배를 내세웠다.

설계에 쓴 작업부하에서 6.02배, 남겨 둔 쪽에서 3.83배. 두 점수는 헤드라인으로 정확히 돌아온다.

돌아오지 않는 것은 분모다. 견준 코어의 이름은 법적 이유로 비공개다.

https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/ko/

#페블러스 #데이터품질 #Frostbite #반도체

---

## Twitter/X (EN)

An AI-designed CPU claims 4.59x the performance per watt of another core.

The workloads used while tuning the design return 6.02x. The ones held back return 3.83x. Both recombine into the headline exactly.

What does not come back is the denominator. The company will not name the chip it measured against, and no figure is given in seconds or watts.

https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/en/

#Pebblous #DataQuality #Frostbite #Semiconductor

---

## Facebook (KO)

"와트당 성능 4.59배."

지난주 이 한 줄이 여러 피드를 지나갔습니다.

AI 에이전트가 컴파일러부터 공장에 넘길 최종 도면까지 반복해 만들었다는 CPU, Frostbite의 성적입니다.

원문을 열고 먼저 든 생각은 이 회사가 가린 것이 많다는 쪽이 아니었습니다. 오히려 반대였습니다.

면적은 소수 셋째 자리까지 적혀 있고, 공정은 7nm로, 클럭은 합성 단계와 최종 도면 단계가 따로 적혀 있습니다. 자기네 전력 모델이 한때 250% 가까이 어긋났다는 것도 회사가 먼저 밝혔습니다. 아직 하지 못한 비교의 목록까지 스스로 남겼습니다.

그런데 그렇게 적어 둔 성능 수치가 전부 배수입니다.

몇 초가 걸리는지도, 몇 와트를 쓰는지도 없이, 모두 어떤 코어 하나로 나눈 값입니다.

그 코어의 이름은 법적 이유로 밝히지 않는다고 적혀 있습니다.

회사는 그 코어를 실리콘으로 검증된 코어라고 부릅니다. 실물이 있는 쪽에 이름이 없고, 이름이 있는 쪽에 아직 실물이 없습니다.

2023년에 중국과학원 연구진이 발표한 자동 설계 CPU는 훨씬 작은 주장을 내놓았습니다.

1991년에 나온 인텔 80486SX와 Dhrystone 기준으로 견줄 만하다고 적었고, 그 칩은 65nm로 실제 제작에 넘겨져 리눅스를 띄웠습니다.

주장이 작을수록 견준 상대가 또렷했습니다.

그래서 이 성적표에서 비는 자리는 분자가 아니라 분모입니다.

"우리 보고서에서 배수를 다 걷어 내면, 절대값은 몇 개나 남습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 진단값도 결국 무언가를 기준으로 삼은 값이라, 그 기준이 문서에 없으면 받은 쪽은 숫자를 옮겨 적는 것 말고 할 수 있는 일이 없습니다.

셈은 맞습니다. 다시 세어 볼 자리가 없을 뿐입니다.

▶ 전문: https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #Frostbite #ArchitectLabs #벤치마크

---

## Facebook (EN)

"4.59x the performance per watt."

That line came round my feed more than once last week.

It belongs to Frostbite, a CPU that Architect Labs says its AI agents designed from the compiler down to the layout file a fab would take.

Opening the original post, my first thought was not that the company was holding things back. It was the opposite.

The area is given to three decimal places. The process node is there at 7nm, and the clock is reported separately for synthesis and for the final layout. The company volunteered that its own power model had at one point been off by almost 250%, and it published a list of the comparisons it has not run yet.

And then the performance figures turn out to be multiples.

No seconds, no watts. Each one is something divided by a single core.

That core, the post says, cannot be named for legal reasons.

The company calls it silicon-proven. So the part with silicon has no name, and the part with a name has no silicon.

A team at the Chinese Academy of Sciences published an automatically designed CPU in 2023, and the claim attached to it was far smaller.

On the Dhrystone benchmark it performed about as well as an Intel 80486SX from 1991, they wrote, and that chip had gone to a fab at 65nm and booted Linux.

The smaller the claim, the clearer the thing it was measured against.

What is missing from this scorecard is not the numerator.

"If we stripped the multiples out of a report of ours, how many absolute numbers would be left?"

Pebblous quantifies the quality of AI training data with DataClinic. A quality score is always a score against something, and when that something stays out of the document, the reader can copy the number across but cannot work it out again.

The arithmetic holds. There is simply nowhere to check it from.

▶ Read: https://blog.pebblous.ai/report/frostbite-ai-designed-cpu-baseline-2026-11/en/

#Pebblous #DataClinic #DataQuality #Frostbite #ArchitectLabs #Benchmark
