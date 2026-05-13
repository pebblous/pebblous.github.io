# SNS 홍보 글: 에이전트도 데이터다 — ByteDance UI-TARS 해부

> 소스: report/ui-tars-desktop-multimodal-agent-stack/ko/index.html
> 생성일: 2026-05-13
> URL (KO): https://blog.pebblous.ai/report/ui-tars-desktop-multimodal-agent-stack/ko/
> URL (EN): https://blog.pebblous.ai/report/ui-tars-desktop-multimodal-agent-stack/en/

---

## LinkedIn (KO)

ByteDance가 GUI 에이전트 풀스택을 통째로 오픈소스로 풀었다는 사실보다 흥미로운 건, 그들이 그 결정을 부르는 이름입니다.

UI-TARS-2 기술보고서는 핵심 메커니즘을 "data flywheel for scalable data generation"이라 명명했습니다. 수백 대의 가상머신이 에이전트의 행동 트레이스를 자동 수집하고, 반성적 정제와 DPO를 통해 다시 모델로 환류시키는 폐쇄 루프. 모델이 데이터를 만들고, 데이터가 다시 모델을 만드는 구조. "에이전트도 데이터다"라는 명제가 페블러스의 가설이 아니라, 빅테크 발표문의 공식 어휘가 된 순간입니다.

왜 이게 중요할까요. Anthropic Computer Use, OpenAI Operator, Google Mariner는 모두 폐쇄형 API입니다. 오픈소스 GUI 에이전트는 사실상 ByteDance(Apache-2.0)와 Microsoft Magentic-UI(MIT) 두 곳뿐이고, 한국 기업이 GUI 에이전트를 자체 인프라에 통합하려면 선택지가 이미 좁습니다. 그러나 코드와 가중치가 열렸다는 사실이 데이터까지 안전하다는 의미는 아닙니다 — Apache 라이선스 아래에서 행동 로그가 어디로 흐르는지, 그 거버넌스는 별개의 문제입니다.

벤치마크 곡선은 더 가파릅니다. OSWorld 최고 모델이 2024-04 12.24%였는데 18개월 만에 인간 기준선 72.36%를 넘어 82.6%(2026-04)에 도달했습니다. 시장은 글로벌 78.4억 달러에서 526억 달러로 CAGR 46.3%, 한국은 59.1%로 1.3배 빠릅니다. 그런데도 Gartner는 40%+ agentic AI 프로젝트가 2027년 말까지 취소될 것이라 경고합니다 — 비용·가치·리스크 통제 부재가 원인입니다.

페블러스가 보는 빈자리는 이 지점입니다. 모델은 ByteDance가 만들고, 프레임워크는 오픈소스가 깔립니다. 그 위에서 흐르는 행동 데이터의 품질·주권·거버넌스는 비어 있습니다. DataClinic이 모달리티별 결함을 진단하고, AI-Ready Data가 재훈련 셋을 정제하며, Physical AI Platform이 디지털과 물리의 행동 데이터를 한 인터페이스로 묶는 자리 — 모델 옆자리의 빈 공간이 페블러스의 자리입니다.

전문 분석 → https://blog.pebblous.ai/report/ui-tars-desktop-multimodal-agent-stack/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #UITARS #AI에이전트 #멀티모달 #오픈소스

---

## LinkedIn (EN)

The most interesting thing about ByteDance open-sourcing the entire GUI agent stack isn't the release itself. It's the name they gave it.

The UI-TARS-2 technical report calls the core mechanism a "data flywheel for scalable data generation." Hundreds of virtual machines collect agent behavior traces, route them through reflective filtering and DPO, and feed them back into the model. The model makes data; data remakes the model. The thesis that "agents are data" stopped being a Pebblous hypothesis the moment it appeared as industry vocabulary in a Big Tech paper.

Why does this matter now. Anthropic Computer Use, OpenAI Operator, and Google Project Mariner are all closed APIs. The open-source GUI agent space is, in practice, two players — ByteDance (Apache-2.0) and Microsoft Magentic-UI (MIT). For Korean enterprises looking to integrate GUI agents into their own infrastructure, the choice set was narrow before it ever opened. But open weights do not mean safe data — the governance of behavior logs under Apache is a separate question entirely.

The benchmark curve is steeper still. OSWorld's best model in April 2024 was 12.24%. Eighteen months later, the field crossed the human baseline at 72.36% and reached 82.6% (April 2026). The market grows from $7.84B to $52.6B globally at 46.3% CAGR — Korea moves 1.3× faster at 59.1%. Yet Gartner forecasts 40%+ of agentic AI projects will be canceled by end of 2027 due to cost, unclear value, and weak risk controls.

The empty seat is here. ByteDance builds the model. Open source lays the framework. What flows on top — the quality, sovereignty, and governance of behavior data — remains hollow. DataClinic diagnoses modality-specific defects, AI-Ready Data normalizes the retraining set, and Physical AI Platform unifies digital and physical behavior data into one interface. The seat next to the model — that is where Pebblous sits.

Full analysis → https://blog.pebblous.ai/report/ui-tars-desktop-multimodal-agent-stack/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #UITARS #AIAgent #Multimodal #OpenSource

---

## Twitter/X

ByteDance가 GUI 에이전트 풀스택을 오픈한 것보다 더 흥미로운 건, 그들이 내부 메커니즘을 "data flywheel"이라 부른다는 점입니다.

"에이전트도 데이터다"가 페블러스의 가설에서 빅테크의 공식 어휘가 된 순간 — UI-TARS 33,573 stars의 진짜 의미.

https://blog.pebblous.ai/report/ui-tars-desktop-multimodal-agent-stack/ko/

#페블러스 #데이터클리닉 #UITARS #AI에이전트

---

## Facebook

UI-TARS의 GitHub stars 33,573개가 한 가지를 증명합니다 — 에이전트 인프라는 오픈됐다는 것. 그리고 그 위로 흐르는 행동 데이터의 품질·주권·거버넌스는 여전히 비어 있다는 것.

ByteDance가 UI-TARS-2 기술보고서에서 자신의 학습 메커니즘을 "data flywheel for scalable data generation"이라 부른 순간, 페블러스가 일관되게 주장해 온 "에이전트도 데이터다"는 명제가 빅테크의 공식 어휘가 됐습니다. 모델이 행동 트레이스를 만들고, 트레이스가 다시 모델을 학습시키는 폐쇄 루프 — 정적 학습 코퍼스의 시대가 끝났다는 신호입니다.

벤치마크 곡선도 가파릅니다. OSWorld 최고 모델이 2024-04 12.24% → 2026-04 82.6%까지 올라갔습니다. 인간 기준선 72.36%를 18개월 만에 넘었습니다. 시장은 글로벌 CAGR 46.3%, 한국 59.1%로 더 빠르게 자랍니다. 그러나 Gartner는 agentic AI 프로젝트의 40% 이상이 2027년 말까지 취소될 것이라 경고합니다. 시장은 폭증하지만 거버넌스 토대는 비어 있다는 뜻입니다.

페블러스가 보는 빈자리는 이 지점입니다. DataClinic이 모달리티별 결함을 잡고, AI-Ready Data가 재훈련 셋을 정제하며, Physical AI Platform이 디지털과 물리의 행동 데이터를 한 인터페이스로 묶는 자리 — 모델 옆자리의 빈 공간이 페블러스의 자리입니다.

전문 분석 → https://blog.pebblous.ai/report/ui-tars-desktop-multimodal-agent-stack/ko/

#페블러스 #데이터클리닉 #UITARS #AI에이전트
