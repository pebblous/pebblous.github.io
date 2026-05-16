---
name: voice-essay
description: >
  블로그 포스트의 문장을 JH 보이스(에세이 톤)로 리라이트.
  개인적 서사, 따뜻한 비유, 담대한 질문, 사색적 호흡. 날카롭되 따뜻한 기술 에세이.
  '톤 바꿔줘', '에세이 스타일로', '영혼 넣어줘', '보이스 리라이트' 요청 시 사용.
argument-hint: "[path-to-html]"
---

# voice-essay: JH 보이스 에세이 리라이트 (alias)

> **이 스킬은 `voice-edit --voice=default`의 alias다.**
> 기존 호출(`/voice-essay`, "톤 바꿔줘", "에세이 스타일로" 등) 호환을 위해 유지된다.

## 동작

`voice-essay`를 호출받으면 다음과 동일하게 처리한다:

```
voice-edit <path-to-html> --voice=default
```

## 실행 절차

실제 톤 정의·정본·자기검증의 단일 출처(SSOT)는 voice-edit 쪽에 있다.
다음 두 파일을 반드시 읽고 진행한다:

1. `.claude/skills/voice-edit/SKILL.md` — 공통 원칙 (7원칙) + 절차
2. `.claude/skills/voice-edit/voices/default.md` — default 보이스의 차이점 + 정본 안내

이후 voice-edit SKILL.md의 Step 1~5를 default 보이스로 그대로 수행한다.

## 변천 메모

- v1 (~2026-04): 단독 스킬. 짧은 문장 중심 (차가운 톤)
- v2 (2026-04-23): 사색적 호흡 + 따뜻한 비유 추가. JH 보이스 7원칙 정립
- **v3 (2026-05-16): voice-edit으로 통합되어 alias가 됨**.
  default·reflective·sns-cover 3종 보이스 체계의 default 자리로 이전.

## 호출 패턴은 그대로

자연어 호출 키워드는 변경 없음. "톤 바꿔줘", "에세이 스타일로", "영혼 넣어줘",
"보이스 리라이트" 모두 동일하게 동작한다.

## 새 보이스가 필요할 때

reflective 사유 에세이가 필요하면 `voice-edit <path> --voice=reflective`로 직접 호출하거나,
"사유 에세이로 리라이트해줘" 라고 자연어 요청하면 voice-edit이 reflective를 선택한다.

## 관련 스킬

- **voice-edit** — 통합 진입점. 3종 보이스 (default / reflective / sns-cover)
- **sns-write** — SNS 카피 전용. 기본 voice=sns-cover, 장문 에세이 슬롯은 voice=reflective
