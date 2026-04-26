# SNS 홍보 글: Claude가 멍청해진 진짜 이유

> 소스: blog/claude-harness-postmortem/ko/index.html
> 생성일: 2026-04-26
> URL: https://blog.pebblous.ai/blog/claude-harness-postmortem/ko/

---

## LinkedIn (KO)

3월부터 7주간 Claude 사용자들이 성능 저하를 보고했다. 4월 23일 Anthropic이 포스트모템을 발표했다. 결론: 모델은 바뀌지 않았다. 하네스가 망가졌다.

세 가지 변경이 동시다발적으로 일어났다. 첫째, 추론 노력(reasoning effort) 기본값이 하향 조정됐다. 둘째, 캐시 정리 버그로 대화 맥락이 소실됐다. 셋째, 시스템 프롬프트에 "25단어 이내로 말하라"는 지시가 추가돼 코딩 품질이 3% 하락했다. 이 세 변경이 겹치면서 "광범위하고 비일관적인 성능 저하"처럼 보였다.

이 사건은 AI 모델의 성능이 모델 가중치만으로 결정되지 않는다는 것을 보여준다. 시스템 프롬프트 한 줄, 캐시 정책 하나, 추론 깊이 기본값 하나가 사용자 경험을 근본적으로 바꿀 수 있다. 하네스는 모델의 옷이 아니라 감각기관이다. 문제를 발견한 건 사용자들이었다.

AI 제품의 품질은 모델 성능만의 문제가 아니다. 모델을 감싸는 인프라 레이어의 데이터 품질까지 관리해야 한다. 페블러스가 DataClinic으로 추구하는 것이 바로 이 전체 파이프라인의 품질 보증이다.

https://blog.pebblous.ai/blog/claude-harness-postmortem/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Claude #Anthropic #AI에이전트 #포스트모템

---

## LinkedIn (EN)

For seven weeks starting in March, Claude users reported performance degradation. On April 23, Anthropic published their postmortem. The conclusion: the model did not change. The harness broke.

Three changes happened simultaneously. First, the reasoning effort default was lowered. Second, a cache cleanup bug caused conversation context to be lost. Third, a system prompt instruction to "respond in 25 words or fewer" was added, causing a 3% drop in coding quality. These three overlapping changes created what appeared to be "widespread and inconsistent performance degradation."

This incident demonstrates that AI model performance is not determined by model weights alone. A single system prompt line, a cache policy change, or a reasoning depth default can fundamentally alter user experience. The harness is not the model's clothing -- it is its sensory apparatus. And it was users, not internal monitoring, who discovered the problem.

AI product quality is not just about model performance. It requires managing data quality across the entire infrastructure layer wrapping the model. This is precisely what Pebblous pursues through DataClinic -- quality assurance across the full pipeline.

https://blog.pebblous.ai/blog/claude-harness-postmortem/en/

#Pebblous #DataClinic #DataQuality #Claude #Anthropic #AIAgent #Postmortem #MLOps

---

## Twitter/X

Claude가 7주간 멍청해진 이유: 모델은 바뀌지 않았다. 추론 노력 하향 + 캐시 버그 + "25단어 이내" 시스템 프롬프트, 하네스 세 가지 변경이 겹쳤다. Anthropic 포스트모템 분석.

https://blog.pebblous.ai/blog/claude-harness-postmortem/ko/

#페블러스 #Claude #Anthropic #데이터품질

---

## Facebook

3월부터 7주간 Claude 사용자들이 성능 저하를 보고했습니다. Anthropic이 포스트모템을 발표한 결론은 의외로 단순했습니다. 모델은 바뀌지 않았다. 모델을 감싸는 하네스가 망가졌다.

추론 노력 기본값 하향, 캐시 정리 버그, "25단어 이내로 말하라"는 시스템 프롬프트 -- 이 세 가지 변경이 동시다발적으로 일어나면서 "광범위한 성능 저하"처럼 보인 것입니다. API 사용자는 영향받지 않았고, Claude Code 등 제품 레이어만 영향을 받았습니다.

하네스는 모델의 옷이 아니라 감각기관입니다. 감각기관이 망가지면 뇌가 멀쩡해도 세상을 제대로 볼 수 없습니다.

https://blog.pebblous.ai/blog/claude-harness-postmortem/ko/

#페블러스 #Claude #Anthropic #데이터품질
