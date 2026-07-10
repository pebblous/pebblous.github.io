---
title: 신화라는 이름의 AI — Anthropic이 Mythos를 공개하지 않은 이유
subtitle: 27년 묵은 제로데이를 수분 만에 찾는 AI. 인류에게 불을 줄 것인가, 말 것인가.
date: 2026-04-12
category: report
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 신화라는 이름의 AI — Anthropic이 Mythos를 공개하지 않은 이유

_27년 묵은 제로데이를 수분 만에 찾는 AI. 인류에게 불을 줄 것인가, 말 것인가._

## Executive Summary

> [!callout]
> 2026년 4월 7일, Anthropic은 역설적인 발표를 했다. "우리는 역대 가장 강력한 사이버보안 AI 모델을 만들었다. 그러나 공개하지 않겠다." 이름은 Claude Mythos Preview — 그리스어로 '신화(μῦθος)'를 뜻한다. 이 모델은 지난 몇 주 동안 27년간 아무도 발견하지 못한 OpenBSD 취약점을 찾아냈고, 16년간 모든 퍼저가 놓친 FFmpeg 결함을 발견했으며, Linux 커널 익스플로잇을 하루도 안 걸려 $2,000 이하의 비용으로 완성했다.

> 인간 최정예 보안 연구팀이 수년에 걸쳐 개발한 것들을, Mythos는 수분~수시간 만에 해낸다. Anthropic은 이를 'Project Glasswing'이라는 이름 아래 AWS, Apple, Microsoft, Google 등 9개 빅테크와 ~40개 인프라 기관에만 방어 목적으로 제한 접근을 허용했다.

> 프로메테우스는 올림포스에서 불을 훔쳐 인간에게 주었다. Anthropic은 불을 만들었지만, 주지 않기로 했다. 이 보고서는 그 선택의 근거와, Stuxnet·EternalBlue·Log4Shell이 증명한 역사적 선례를 교차하며 분석한다. 그리고 산업 AI 배포에서 격리와 통제가 왜 필수인지를 도출한다. 이 글은 [Claude 워치](/project/AnthropicClaude/ko/) 시리즈의 모델 공개의 정치학 편으로, Anthropic이 무엇을 만들고 무엇을 숨기는지를 보는 자리다.

## 신화(Mythos)의 탄생 — 이름의 무게

프로메테우스는 올림포스 신전에서 불씨를 훔쳐 인간에게 건넸다. 인류에게 문명과 기술의 불꽃을 준 대가로, 그는 코카서스 산 바위에 묶여 독수리에게 영원히 간을 쪼이는 형벌을 받았다.

Anthropic은 '신화(Mythos)'라는 이름의 AI를 만들었다. 그리고 정반대의 선택을 했다 — 불을 쥐고, 주지 않겠다고 선언했다.

2026년 4월 7일 발표된 Claude Mythos Preview는 일반 사용자용이 아니다. Anthropic은 명시적으로 밝혔다: **"Mythos Preview를 일반에 공개할 계획이 없다."**

대신 'Project Glasswing'이라는 이름 아래, 선택받은 파트너에게만 방어 목적으로 제한 접근권을 부여했다. 이름 'Glasswing'은 투명한 날개를 가진 나비를 뜻한다 — 보이지만 다가갈 수 없는.

> [!callout]
> **Project Glasswing 참여 기업 (2026년 4월 기준):** Amazon Web Services · Apple · Microsoft · Google · Nvidia · Broadcom · Cisco · CrowdStrike · JPMorganChase + 약 40개 주요 인프라 관리 기관

이 결정의 배경에는 단순한 이유가 있다. Anthropic의 표현을 그대로 빌리면:

"단기적으로는, 프론티어 랩들이 주의하지 않으면 공격자가 방어자보다 더 많은 혜택을 받을 수 있다."

— Anthropic, red.anthropic.com, 2026.04.07

그리고 Anthropic은 한 가지를 더 인정했다. "Mythos Preview가 사이버보안 언어 모델의 최고 수준이라고 생각할 이유가 없다." 더 강한 버전이 온다는 뜻이다.

## 수분 만에 찾은 제로데이 — 데이터가 말하는 능력

Mythos Preview가 실제로 찾아낸 것들은 숫자로 확인된다. 수십 년간 수백만 명의 개발자와 보안 연구원이 놓쳤던 버그들이다.

### 2.1 발견된 취약점들

다음은 Anthropic이 공개한 주요 취약점 발견 사례다. 각 취약점의 나이와 영향 범위에 주목하라.

| 취약점 | 나이 | 내용 |
| --- | --- | --- |
| OpenBSD TCP/SACK | 27년 | 원격 서비스 거부(DoS) — SACK 블록 조작으로 null pointer dereference 유발, 모든 응답 OpenBSD 호스트 충돌 가능 |
| FFmpeg H.264 | 16년 | 65,536개+ 슬라이스 처리 시 힙 손상 — "모든 퍼저와 인간 리뷰어가 놓침" (Anthropic 표현) |
| FreeBSD NFS RCE | 17년 | CVE-2026-4747: 인증 없이 root SSH 접근 — 20-가젯 ROP 체인을 6개 순차 RPC 요청으로 자동 구성 |
| Linux 커널 권한 상승 | 복합 | KASLR 우회 + use-after-free + 힙 스프레이 체인, 2~4개 취약점 연결 |
| 웹 브라우저 익스플로잇 | 복수 | 4개 취약점 체인, JIT 힙 스프레이 + 렌더러/OS 샌드박스 탈출, 크로스 오리진 데이터 읽기 |

********************

### 2.2 이전 모델과의 비교

Mythos Preview의 능력이 얼마나 비약적인지는 이전 최고 모델(Opus 4.6)과의 비교에서 드러난다.

| 지표 | Opus 4.6 | Mythos Preview | 배율 |
| --- | --- | --- | --- |
| Firefox JS 익스플로잇 성공 | 2회 | 181회 | 90.5× |
| OSS-Fuzz 5단계(완전 제어 흐름 탈취) | 1회 | 10회 | 10× |
| 인간 연구원 심각도 동의율 | — | 89% | 198건 검토 |

********************

### 2.3 비용 효율성

더 충격적인 것은 비용이다. 국가급 팀이 수년간 투자하는 일을, Mythos는 커피 몇 잔 값으로 해낸다.

- •Linux 커널 익스플로잇 1건: **$2,000 미만, 하루 이내 완성**
- •OpenBSD 취약점 발견: **1,000회 실행에 약 $20,000** (건당 ~$20)
- •FFmpeg 저장소 수백 회 스캔: **약 $10,000**

## 역사가 말해주는 것 — 제로데이 타임라인

Mythos의 충격을 이해하려면, 인간이 같은 일을 해온 역사를 먼저 봐야 한다. 세계를 뒤흔든 세 가지 제로데이 사건 — 그 모두는 인류의 최정예 팀이 수년을 투자해 만든 것이었다.

### 3.1 Stuxnet (2005–2010): 인류 최초의 사이버 무기

이란 나탄즈 핵시설을 표적으로 만들어진 Stuxnet은 Windows의 4개 제로데이를 동시에 활용했다. 개발팀은 NSA와 이스라엘 Unit 8200의 협력으로 추정된다.

> [!callout]
- • 개발 기간: Kaspersky 추정 10명+ 팀, **2~3년**
- • Symantec 추정: 5~30명, 6개월~
- • 결과: 이란 나탄즈 원심분리기 **약 1,000개 물리적 파괴**
- • 발견: 2010년 6월 17일 (벨라루스 바이러스 분석 회사 VirusBlokAda)

### 3.2 EternalBlue → WannaCry (2017): NSA가 키운 악마

NSA는 Windows SMB 프로토콜의 제로데이를 발견하고, 수년간 공개하지 않고 비밀 무기로 보관했다. 2017년 Shadow Brokers 해킹 그룹이 탈취해 공개했고, 5주 뒤 WannaCry가 이를 무기화했다.

> [!callout]
- • NSA 보관 기간: **수년** (미공개)
- • WannaCry 피해: **150개국, 20만 대+ 감염**
- • 피해 규모: **$40억~$80억**
- • 영국 NHS 병원 시스템 마비 — 수술 취소, 구급차 우회

### 3.3 Log4Shell (2021): 인터넷의 심장에 박힌 가시

Java 로깅 라이브러리 Log4j에 존재했던 취약점. 2013년 도입된 코드가 2021년 12월에야 발견됐다 — 8년간 수십억 개 시스템에 잠복했다.

> [!callout]
- • CVSS 점수: **10.0 (최고 등급)**
- • 잠복 기간: **8년**
- • 패치 발표 후 72시간: **100만 회+** 악용 시도

### 3.4 인간 vs Mythos: 시간 비교

역사적 사례와 Mythos의 성능을 직접 비교하면, 무엇이 달라졌는지 명확해진다.

| 작업 유형 | 인간 최정예 팀 | Mythos Preview |
| --- | --- | --- |
| Stuxnet급 4-제로데이 체인 | 2~3년 (팀 10명+) | 해당 분야 자율 탐색 중 |
| Firefox 익스플로잇 개발 | 수주~수개월 | 자동, 181회 성공 |
| Linux 커널 체인 익스플로잇 | "수주" (Anthropic 표현) | 하루 이내, $2,000 |
| 27년된 취약점 발견 | 발견 못함 | 수분~수시간 |

************

2024년 전 세계에서 악용이 확인된 제로데이는 75건이었다. 2025년 상반기는 전년 동기 대비 46% 급증했다. Mythos가 공개된다면, 이 숫자는 어떻게 변할까.

## Anthropic의 선택 — 왜 불을 주지 않는가

프로메테우스는 신의 명령에 반해 인간에게 불을 줬다. Anthropic은 인간에게 불을 주지 않기로 했다. 이것이 더 현명한 선택일 수 있다.

Anthropic이 제시한 제한 이유는 네 가지다.

| # | 이유 | 설명 |
| --- | --- | --- |
| 1 | 타임라인 불균형 | 패치 배포는 수개월, 익스플로잇 개발은 수분. 방어자가 준비되기 전에 공개하면 공격자만 유리하다. |
| 2 | 마찰 기반 방어 붕괴 | 기존 보안 시스템은 "공격이 어렵다"는 마찰에 의존한다. Mythos는 그 마찰을 제거한다. |
| 3 | 산업 준비 시간 | 방어자들이 시스템을 강화할 충분한 시간이 필요하다. Project Glasswing은 그 시간을 사는 것이다. |
| 4 | 정점이 아님 | Anthropic: "Mythos Preview가 사이버보안 언어 모델의 최고 수준이라고 생각할 이유가 없다." |

****************

이 결정은 시장에 즉각 반영됐다. CrowdStrike, Palo Alto Networks, Zscaler 등 주요 사이버보안 기업 주가가 **5~11% 급락**했다. AI가 인간 보안 팀을 대체할 수 있다는 공포가 투자자를 움직였다.

동시에 Anthropic은 이미 공개된 모델들(Opus 4.6 등)로 지금 당장 취약점 찾기에 착수할 것을 권고했다. 불완전한 불씨라도 방어에 쓰라는 것이다.

## 통제의 역설 — 그것도 이미 늦었을 수 있다

Anthropic의 결정에는 근본적인 역설이 있다.

> [!callout]
> **"한 곳에서 만들면, 다른 곳에서도 만든다."**

> Mythos는 Anthropic만의 것이 아닐 수 있다. 이미 다른 AI 랩들이 유사한 방향으로 달리고 있다. 비공개 유지는 "이 불을 막겠다"는 선언이 아니라, "우리는 신중하게 관리하겠다"는 선언이다.

역사적 선례도 있다. NSA의 EternalBlue는 공개되지 않았다. 그러나 결국 유출됐다. Shadow Brokers라는 해킹 그룹이 NSA의 서버를 뚫고 무기 전체를 인터넷에 공개했다.

"통제된 접근"이 "영구적 통제"를 보장하지는 않는다. 9개 빅테크와 40개 기관이 접근권을 가진 시스템은, 언젠가 그 중 하나가 뚫릴 위험을 내포한다.

그럼에도 Anthropic의 접근은 현재 가능한 최선에 가깝다:

- •9개 빅테크 + 40개 인프라 기관에 방어적 사전 접근 부여
- •발견된 취약점의 책임감 있는 공개(Responsible Disclosure) 절차 준수
- •향후 Opus 모델용 사이버보안 세이프가드 개발 계획 수립
- •합법적 보안 연구자를 위한 'Cyber Verification Program' 계획

프로메테우스는 불을 줬다가 독수리에게 간을 쪼였다. Anthropic은 불을 쥐고, 독수리가 오기 전에 방화벽을 쌓으려 한다. 그 방화벽이 얼마나 버틸지는, 아직 아무도 모른다.

## 산업 AI와 격리의 원칙 — DataGreenhouse 연결

Mythos가 제기하는 질문은 사이버보안만의 문제가 아니다. 이것은 모든 강력한 AI를 배포할 때 필연적으로 마주하는 질문이다.

**통제되지 않은 AI는, 통제되지 않은 불과 같다.**

페블러스가 DataGreenhouse(데이터 온실)를 통해 구현하는 것은 바로 이 격리 원칙이다. 제조·물류·에너지·의료 등 산업 현장에 AI를 배포할 때, AI 에이전트와 실제 운영 환경 사이에 물리적으로 분리된 검증 레이어를 둔다.

마치 스마트 온실에서 새로운 품종을 시험할 때 — 외부 환경과 격리된 통제 구역에서 작물의 반응을 먼저 확인하고, 문제가 없을 때만 본 농장에 도입하는 것처럼.

> [!callout]
> **DataGreenhouse 격리 원칙과 Mythos의 교훈**

- • AI가 강력할수록, 격리된 환경에서의 사전 검증이 더 중요해진다
- • "불을 주기 전에, 불이 어디까지 번질 수 있는지를 먼저 알아야 한다"
- • 에이전트와 실제 운영 환경의 물리적 분리 — 이것이 Anthropic이 택한 원칙이기도 하다
- • 사이버보안 AI든, 산업 제어 AI든, 원칙은 같다: 격리 → 검증 → 제한적 배포

Mythos의 이야기는 사이버보안 업계만의 것이 아니다. 강력한 AI를 운영하는 모든 산업에 동일하게 적용되는 원칙을 드러낸다. 페블러스는 그 원칙을 산업 현장의 언어로 구현하고 있다.

## 참고문헌

- •Anthropic. "Claude Mythos Preview." red.anthropic.com, 2026.04.07.
- •Fortune. "Anthropic is giving some firms early access to Claude Mythos to bolster cybersecurity defenses." 2026.04.07.
- •SecurityWeek. "Anthropic Unveils 'Claude Mythos' — A Cybersecurity Breakthrough That Could Also Supercharge Attacks." 2026.04.07.
- •TechCrunch. "Anthropic debuts preview of powerful new AI model Mythos in new cybersecurity initiative." 2026.04.07.
- •CrowdStrike. "CrowdStrike Founding Member — Anthropic Mythos Frontier Model to Secure AI." 2026.04.07.
- •Wikipedia. "Stuxnet." Wikipedia Foundation. (Symantec, Kaspersky Lab 추정치 포함)
- •Wikipedia. "EternalBlue." Wikipedia Foundation.
- •Gatewatcher. "The 10 Zero-Days That Made History." 2024.
- •Google. "Zero-Day Exploitation in the Wild 2024 Report." 2025.

## 자주 묻는 질문

<!-- stat-card -->
**📚 Claude 워치 시리즈** — 이 글은 [Claude 워치](/project/AnthropicClaude/ko/)에서 큐레이션하는 시리즈의 일부입니다. Anthropic이 만든 Claude를 페블러스 관점에서 추적하는 자리 — 모델 공개의 정치학부터 하네스, 정렬, 에이전트 아키텍처, 코딩 행동 교정까지.
