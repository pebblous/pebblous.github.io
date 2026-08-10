# SNS 홍보 글: 개인 파일을 읽고 일하는 메타의 온디바이스 에이전트

> 소스: blog/meta-muse-glimmer-on-device-data-readiness/ko/index.html
> 생성일: 2026-08-11
> URL (KO): https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/ko/
> URL (EN): https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/en/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

300억 파라미터 모델이 그래픽 카드 한 장이 꽂힌 개인 PC로 내려왔다.

메타 초지능 연구소가 8월 10일 공개한 뮤즈 글리머다. 가중치를 아파치 2.0으로 열었고, 양자화 빌드는 18GB까지 내려와 소비자 GPU 한 장이나 애플 실리콘 맥에서 돈다. 메타가 밝힌 용도는 분명하다. 일정을 관리하고 메시지를 초안하고 파일을 정리하는 에이전트는 개인 컨텍스트에 깊이 접근해야 하니, 그 추론을 기기 밖으로 내보내지 않겠다는 것이다.

이 배치가 바꾸는 것은 성능 그래프가 아니라 입력의 출처다. 클라우드 API를 부르던 시절 답변 품질의 근거는 공급자가 모아 놓은 사전학습 데이터였고, 우리가 손댈 수 있는 것은 프롬프트 몇 줄이었다. 기기 위 에이전트가 매 요청에서 읽는 것은 어제 받은 첨부파일, 지난주 회의록, 캘린더에 남아 있는 일정이다. 모델 가중치는 누구에게나 같고, 그 위에 얹히는 입력만 기기마다 다르다.

그림자도 같은 자리에 있다. 메타가 함께 공개한 안전성 측정에서 문서 안에 심어 둔 지시문으로 에이전트를 움직이는 공격은 열 번 중 세 번 가까이 통했다. 폴더에 든 문서가 곧 입력이라면 그 폴더가 곧 공격 표면이다. 화면을 직접 조작하는 작업은 같은 체급 오픈 모델에 아직 밀린다는 사실도 발표문에 그대로 적혀 있다.

데이터 준비도를 재는 단위가 창고에서 책상 위 폴더로 내려오는 중이다. 페블러스가 DataClinic으로 데이터셋을 진단하며 물어 온 질문, 무엇이 정본이고 무엇이 이미 지났는가는 이제 노트북 한 대에도 같은 무게로 걸린다.

▶ 전문: https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #온디바이스AI #AI에이전트 #AIReadyData #로컬LLM #Meta #MuseGlimmer

---

## LinkedIn (EN)

A 30-billion-parameter model now runs on a single consumer graphics card.

Meta Superintelligence Labs released Muse Glimmer on August 10 under Apache 2.0, with quantized builds down to 18GB that fit one desktop GPU or an Apple silicon Mac. The stated purpose is explicit. An agent that manages a calendar, drafts messages and organizes files needs deep access to personal context, so the inference is meant never to leave the machine.

What that placement changes is not the performance curve but the source of the input. When you called a cloud API, the quality of an answer rested on pretraining data the provider had assembled, and your reach ended at the prompt. An agent living on the device reads yesterday's attachment, last week's meeting notes, the stale entry still sitting in the calendar. The weights are identical for everyone, and only the data layered on top differs from machine to machine.

The shadow sits in the same place. In Meta's own safety numbers, instructions planted inside a document moved the agent in close to three out of ten attempts. If the documents in a folder are the input, that folder is the attack surface. Meta also reports that the model still trails comparable open models at directly operating a screen.

The unit of data readiness is moving from the warehouse to the folder on someone's desk. The questions Pebblous asks when DataClinic examines a dataset, which copy is canonical and which one has already expired, now land on a single laptop with the same weight.

▶ Read: https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #OnDeviceAI #AIAgent #AIReadyData #LocalLLM #Meta #MuseGlimmer

---

## Twitter/X (KO)

메타가 300억 파라미터 모델을 노트북 한 대 안에 넣었다. 일정을 관리하고 파일을 정리하는 에이전트를 기기 밖으로 내보내지 않겠다는 설계다.

이제 모델이 매 요청에서 읽는 것은 공급자의 사전학습 데이터가 아니라 내 폴더에 쌓인 파일이다. 폴더의 상태가 곧 컨텍스트 품질이다.

▶ https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/ko/

#페블러스 #온디바이스AI #MuseGlimmer #데이터품질

---

## Twitter/X (EN)

Meta put a 30-billion-parameter model inside a single laptop, built for agents that manage a calendar and organize files without sending anything off the device.

What it reads on every request is no longer the provider's pretraining data. It is the files in your own folders.

▶ https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/en/

#Pebblous #OnDeviceAI #MuseGlimmer #DataQuality

---

## Facebook (KO)

「제안서_최종_진짜최종_v3(1).pptx」

괄호만 없는 같은 이름의 파일이 그 옆에 나란히 있습니다.

둘 중 실제로 나간 버전이 어느 쪽인지 저는 압니다. 파일 이름이 아니라 제 기억이 그걸 알고 있습니다.

메타가 지난 10일 공개한 뮤즈 글리머 발표문을 읽다가 그 두 파일이 떠올랐습니다. 300억 파라미터 모델을 노트북 한 대 안에 넣고, 일정을 관리하고 문서를 정리하는 에이전트로 쓰겠다는 이야기였습니다. 추론이 기기 밖으로 나가지 않으니 개인 파일을 안심하고 열어 줄 수 있다는 설계입니다.

읽고 나서 오래 남은 건 성능 수치가 아니었습니다. 이 모델이 매 요청에서 읽는 것이 공급자가 모아 둔 사전학습 데이터가 아니라 제 폴더라는 사실이었습니다.

그런데 제 폴더는 지금까지 제 기억을 전제로 굴러가고 있었습니다. 캘린더에 지난 일정이 남아 있어도 저는 날짜를 보고 넘겼고, 다운로드 폴더에 출처 모를 PDF가 쌓여도 그게 참고용이라는 걸 저만 알고 있었습니다.

기기 안에서 도는 300억 파라미터는 그 기억에 접근하지 못합니다.

"내 폴더는, 나 말고 다른 무언가가 읽어도 말이 되는 상태인가?"

이 질문에 이름을 붙인다면 '로컬 데이터 준비도'쯤이 될 것 같습니다. 지금까지 데이터 준비도는 창고와 파이프라인의 언어였습니다. 스키마를 맞추고 라벨 품질을 재는 일이었고, 대상은 팀이 관리하는 자산이었습니다. 노트북 한 대, 공유 드라이브의 폴더 하나는 그동안 어떤 품질 지표의 대상도 아니었습니다.

페블러스가 DataClinic으로 데이터셋을 살필 때 묻는 것도 결국 같은 자리에 있습니다. 같은 사실을 담은 파일이 몇 개인지, 그중 정본은 무엇으로 식별되는지, 이미 지난 자료를 무엇으로 구분하는지. 창고에만 묻던 질문이 책상 위 폴더로 내려온 것 같습니다.

모델을 내려받는 데는 오후 한나절이면 충분할 겁니다. 폴더를 정리하는 데 걸리는 시간은 아마 그보다 길겠지요.

▶ 전문: https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/ko/

#페블러스 #데이터클리닉 #데이터품질 #온디바이스AI #MuseGlimmer

---

## Facebook (EN)

"Proposal_FINAL_actually-final_v3(1).pptx"

Right beside it sits the same file name without the parenthesis.

I know which one actually went out. Not because of the file name. Because I remember.

Those two files came back to me while I was reading Meta's announcement of Muse Glimmer this week. Thirty billion parameters, folded into a single laptop, meant for an agent that manages your calendar and tidies your documents. Because the inference never leaves the machine, the pitch goes, you can let it open your personal files without worrying.

What stayed with me afterward was not a benchmark. It was that the thing this model reads on every request is not pretraining data some provider assembled. It is my folder.

And my folder has been running on my memory this whole time. A meeting that was cancelled still sits in the calendar, and I simply glance at the date and move on. A PDF of unclear origin lands in Downloads, and only I know it was just for reference.

Thirty billion parameters running inside the machine cannot reach that memory.

"Would my folder still make sense to something that is not me?"

If that question needs a name, 'local data readiness' comes close. Data readiness has so far been the language of warehouses and pipelines, of matching schemas and measuring label quality, applied to assets a team formally owns. One laptop, one shared drive folder, has never been the subject of any quality metric.

It is the same place Pebblous keeps arriving at when DataClinic looks into a dataset. How many files carry the same fact, how the canonical one is identified, what marks a document as expired. Those questions used to belong to the warehouse. They seem to have moved to the desk.

Downloading the model will take an afternoon. Sorting out the folder will probably take longer than that.

▶ Full piece: https://blog.pebblous.ai/blog/meta-muse-glimmer-on-device-data-readiness/en/

#Pebblous #DataClinic #DataQuality #OnDeviceAI #MuseGlimmer
