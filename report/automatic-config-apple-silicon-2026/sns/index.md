# SNS 홍보 글: 한 줄도 안 돌던 엔진이 콩잎 밀도맵을 그리기까지

> 소스: report/automatic-config-apple-silicon-2026/ko/index.html
> 생성일: 2026-06-07
> URL: https://blog.pebblous.ai/report/automatic-config-apple-silicon-2026/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

NVIDIA GPU와 vLLM 서버를 전제로 쓰인 우리 진단 엔진을, 그 셋 중 무엇도 없는 Apple Silicon Mac(M5 Max 128GB)에서 처음부터 끝까지 돌렸다.

automatic-config는 페블러스가 AADS 과제에서 데이터그린하우스를 개발하며 만든 사내 Agentic AI 엔진이다. 데이터클리닉의 복잡한 툴들과 정책들을 감싼 다층 에이전트 프레임워크다.

그런데, 사내 GPU 환경에 맞춰 빠르게 동작하도록 짠 코드라, Mac에서는 첫 줄부터 멈췄다. 막힌 자리는 모두 열두 군데. 61GB짜리 추론 모델이 하드코딩돼 있었고, 디바이스는 곳곳에서 "cuda"였으며, 결정용 LLM은 켜지지도 않은 서빙 포트를 가리켰다. 우리는 이 문제를 하나도 우회하지 않고 정면 돌파했다. 매 벽마다 "1 커밋 = 1 처방"으로 근본을 고쳤다.

가장 깊은 벽은 의외로 단순했다. "콩잎 데이터셋"의 밀도맵을 통째로 무너뜨린 건 보조 스크립트 속 .cuda() 한 줄이었다. 장치 적응적(cuda→mps→cpu)으로 모델 수행 환경을 바꾸자 밀도맵이 살아났다.

덕분에 CPU에서 초당 1.9장이던 임베딩이 Apple Silicon GPU에서 수십 배 빨라졌다. 그 과정에서 얻은 통찰이 있다. 코드 곳곳의 하드코딩은 결함이 아니라 라우팅 포인트의 후보라는 것. 지각·추론·분석을 차례로 env에 설정해서 라우팅 가능하게 풀어 내자, 엔진 전체가 vendor-neutral이 됐다!

한 가지 심각한 버그도 있었다. 처음엔 "엔진이 데이터에 맞는 렌즈를 알아서 골랐다"고 봤다. 다시 들여다보니 데이터의 도메인을 읽어내는 단계가 조용히 깨져 있었다. 프리-온톨로지 빌딩 단계가 크래시도 에러도 없이 결과만 비어 있었고, 렌즈는 도메인 이해가 아니라 다운로드 인기순으로 데이터 렌즈(임베딩 신경망)를 선택했다. 파이프라인이 끝까지 돌았다는 것과 그 산출물이 유효하다는 것은 다른 이야기였다, 당연하지만.

렌즈 추천 추론 LLM도 진단처럼 엔드포인트로 라우팅해 더 또렷한 모델로 바꾸자, 엔진은 비로소 콩잎을 농업으로, 피부 병변을 피부과로, 의류를 패션으로, 엑스레이를 영상의학 도메인으로 이해했다. 가슴 엑스레이 데이터셋에 대한 온톨로지 구축 후에, 적합한 임베딩을 기본 CLIP이 아닌 vit-chest-xray를 골랐다. 처음 보는 비-CLIP 렌즈 선택이었다.

어떤 경우는 도메인 이해만으론 부족했다. 인기 가중치까지 걷어내야 했다. 예를 들어, CLIP은 2300만 다운로드로 300만의 fashion-clip을 압도하고 있었기 때문이다.

하드코딩을 제거가 아니라 라우팅 포인트로 보는 일, 그리고 테스트의 완주를 유효 결과 취득과 혼동하지 않는 일. 이 두 가지가 온프렘 sovereign 운영의 주요 조건이었다.

굉장한 실험이었다.

전체 기록(벽 12개 · 3계층 라우팅 · 침묵 실패와 복구 · fashion-clip 차별화 · 콩잎 밀도맵):
https://blog.pebblous.ai/report/automatic-config-apple-silicon-2026/ko/

#페블러스 #데이터클리닉 #DataClinic #AppleSilicon #sovereignAI #온프렘 #vendorneutral #데이터품질

---

## LinkedIn (EN)

We took a diagnostic engine written for one NVIDIA GPU and a vLLM server, and ran it end to end on an Apple Silicon Mac that has none of those.

Pebblous Data Clinic's automatic-config quietly assumed an in-house GPU box. On a Mac it stopped at the first line. Model downloads, device, LLM endpoint, analysis engine — twelve walls in all, each cleared with a root fix, never a workaround.

The deepest wall was the simplest. What broke the density map entirely was a single `.cuda()` line in a helper script. One device-aware change (cuda→mps→cpu) and the bean-leaf density map came back to life.

The real insight: hardcoding isn't a defect, it's a candidate for a routing point. Freeing perception (Python lenses), reasoning (LLM endpoint), and analysis (Wolfram) into env turned the whole engine vendor-neutral. Device-aware was the first task of sovereign, on-prem operation.

Understanding a received engine fully, and making it run anywhere. We now have that blueprint, measured.

↗ Link in comments

#Pebblous #DataClinic #AppleSilicon #sovereignAI #onprem #vendorneutral #DataQuality

---

## Twitter/X (KO)

NVIDIA·vLLM 전제로 쓰인 진단 엔진을 Apple Silicon Mac에서 끝까지 재현했다.

벽 12개, 전부 근본 수정. 가장 깊은 벽은 `.cuda()` 한 줄 → device-aware로 콩잎 밀도맵 부활.

하드코딩을 제거가 아니라 백엔드로 → vendor-neutral.

기록 → https://blog.pebblous.ai/report/automatic-config-apple-silicon-2026/ko/

#DataClinic #AppleSilicon #sovereignAI

---

## Twitter/X (EN)

We ran an NVIDIA+vLLM diagnostic engine end to end on an Apple Silicon Mac.

Twelve walls, all root fixes. The deepest: one `.cuda()` line → device-aware revived the density map.

Hardcoding isn't a defect — it's a routing point.

Story → https://blog.pebblous.ai/report/automatic-config-apple-silicon-2026/en/

#DataClinic #AppleSilicon #sovereignAI

---

## Facebook (KO)

우리가 만든 엔진이 한 줄도 돌지 않을 때, 무엇부터 해야 할까요.

automatic-config는 페블러스가 AADS 과제에서 데이터그린하우스를 개발하며 만든 진단 엔진입니다. 사내 GPU 환경에 맞춰 빠르게 동작하도록 짠 코드였고, 그래서 NVIDIA도 vLLM도 없는 Apple Silicon Mac 위에서는 첫 줄부터 멈췄습니다. 우리는 우회하지 않기로 했습니다.

벽은 모두 열두 개였습니다. 디바이스는 곳곳에서 "cuda"였고, LLM 엔드포인트는 켜지지 않은 포트를 가리켰습니다. 하나씩 근본을 고쳤습니다. 가장 깊었던 벽은 보조 스크립트 속 `.cuda()` 한 줄이었고, device-aware로 바꾸자 콩잎 밀도맵이 살아났습니다.

그런데 한 가지는 솔직히 적어야겠습니다. 처음엔 엔진이 데이터에 맞는 렌즈를 알아서 골랐다고 믿었습니다. 다시 들여다보니, 데이터의 도메인을 읽어내는 단계가 조용히 깨져 있었습니다. 크래시도 에러도 없이, 그냥 비어 있었던 겁니다. 파이프라인이 끝까지 돌았다는 것과 그 결과가 옳다는 것은 다른 이야기였습니다.

추론 모델을 더 또렷한 것으로 바꾸자 엔진은 비로소 콩잎을 농업으로, 피부 병변을 피부과로, 의류를 패션으로 이해했습니다. 그리고 패션 데이터에서는 처음으로 일반 CLIP이 아닌 fashion-clip을 골랐습니다. 받은 결과를 의심하고 한 번 더 들여다본 자리에서, 엔진은 조금 더 정직해졌습니다.

돌아보니 하드코딩은 결함이 아니라 갈아끼울 자리의 후보였고, 침묵한 실패는 더 깊이 들여다보라는 신호였습니다. 어디에서나 같은 진단이 돌게 만드는 일 — 콩잎 한 장의 밀도맵이 그 가능성을 조용히 증명했습니다.

https://blog.pebblous.ai/report/automatic-config-apple-silicon-2026/ko/

#페블러스 #데이터클리닉 #AppleSilicon #sovereignAI

---

## Facebook (EN)

When a received engine runs not a single line, where do you begin?

Pebblous Data Clinic's diagnostic engine was written for an in-house setup with an NVIDIA GPU and a vLLM server. What we had was one Apple Silicon Mac, with none of those premises. Facing code that stopped at the first line, we decided not to take shortcuts.

There were twelve walls. A large model was hardcoded, the device was "cuda" everywhere, the LLM endpoint pointed at a port that was never up. One by one, we fixed roots, not symptoms. The deepest wall was the simplest: what broke the bean-leaf density map entirely was a single `.cuda()` line in a helper script, and making it device-aware brought the map back.

Looking back, hardcoding was never a defect. It was a candidate for a routing point. Once the model, the LLM, and the device could each be swapped, the engine took a shape that could run anywhere.

To understand what you've been given, and to keep it alive anywhere. A single bean-leaf density map quietly proved that was possible.

https://blog.pebblous.ai/report/automatic-config-apple-silicon-2026/en/

#Pebblous #DataClinic #AppleSilicon #sovereignAI
