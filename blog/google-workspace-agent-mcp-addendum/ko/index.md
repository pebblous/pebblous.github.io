---
title: 구글 워크스페이스, AI 에이전트 전용 통로 의무화… 학습 금지
subtitle: 2027년 2월부터 AI 에이전트는 구글 공식 통로로만 지메일·드라이브에 접속하고, 연결을 끊으면 가져간 데이터를 지워야 한다
date: 2026-11-28
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 구글 워크스페이스, AI 에이전트 전용 통로 의무화… 학습 금지

_2027년 2월부터 AI 에이전트는 구글 공식 통로로만 지메일·드라이브에 접속하고, 연결을 끊으면 가져간 데이터를 지워야 한다_

## Executive Summary

> [!callout]
> 구글이 AI 에이전트가 구글 워크스페이스 데이터에 닿는 길을 전용 통로 두 개로 좁혔다. 구글은 11월 25일 [공식 블로그](https://workspace.google.com/blog/product-announcements/built-for-trust-and-control-new-ai-agent-protections-and-developer-tools-in-google-workspace)에서 Workspace MCP 서버와 Workspace CLI를 정식 공개했고, 같은 날 약관 부속서 'Workspace AI Tools Addendum'을 내놨다. AI 에이전트는 기존 REST API 대신 이 두 통로로 지메일·드라이브·문서도구에 접근해야 한다. 사람이 쓰는 일반 앱은 기존 API를 계속 쓴다.

> 부속서는 에이전트가 가져간 데이터의 쓰임도 묶었다. 워크스페이스 데이터로 모델을 학습시키거나 미세조정할 수 없고, 임베딩 같은 파생 데이터는 30일을 넘겨 보관할 수 없다. 연결을 끊으면 데이터를 지워야 한다. 기술적 강제는 2027년 2월 1일, 사용량 과금은 4월 1일에 시작한다.

> 구글이 내건 이유는 유효한 OAuth 토큰을 곧 사용자의 의도로 보던 전제가 에이전트 앞에서 무너졌다는 것이다. 기업 데이터에 붙는 에이전트마다 누구 권한으로 들어왔고 무슨 기록을 남기는지가 이제 약관 문제가 됐다.

### 주요 수치

아래 네 숫자가 이번 조치의 뼈대다. 전용 서버가 열린 앱은 여덟 개이고, 에이전트가 만든 파생 데이터는 30일 안에 지워야 한다. 날짜는 둘이다. 2027년 2월 1일부터 규칙이 기술적으로 걸리고, 4월 1일부터 돈이 붙는다.

출처: [Workspace AI Tools Addendum](https://workspace.google.com/terms/ai-tools)(2026-11-24 개정) · [Google Cloud 블로그](https://cloud.google.com/blog/products/identity-security/deploying-agents-safely-in-your-enterprise)

<!-- stat-card -->
**8개** — 전용 MCP 서버가 열린 앱 — 지메일·드라이브·문서·시트·슬라이드·캘린더·채팅·할 일

<!-- stat-card -->
**30일** — 파생 데이터 보관 한도 — 임베딩·메모리 색인 등

<!-- stat-card -->
**2027.2.1** — 기술적 강제 시작 — REST API 직접 호출 에이전트는 Standard 쿼터로 제한

<!-- stat-card -->
**2027.4.1** — 사용량 과금 시작 — Scaled 티어부터

## 구글 워크스페이스 MCP 서버·CLI 정식 공개

구글은 11월 25일 워크스페이스 블로그에 "신뢰와 통제를 위해 만들었다"는 제목의 발표문을 올렸다. 발표의 중심은 두 도구다. Workspace MCP 서버는 개방형 규격 MCP(Model Context Protocol)를 따르는 구글 관리형 서버로, 클라우드와 웹에서 도는 에이전트가 지메일·드라이브·문서·시트·슬라이드·캘린더·채팅·할 일 여덟 개 앱에서 작업하게 한다. 구글 킵은 나중에 붙는다.

구글에 따르면 MCP 서버는 파일이나 메일을 통째로 내려보내지 않고, 워크스페이스 보안 경계 안에서 작업에 필요한 맥락만 돌려준다. Workspace CLI는 사용자 컴퓨터에서 도는 로컬 에이전트와 터미널 자동화용이다. 범위를 좁힌 로그인으로 들어가고, 결과를 구조화된 JSON으로 내놓는다.

같은 날 구글은 약관도 바꿨다. 구글 API 서비스 약관에 붙은 부속서 Workspace AI Tools Addendum 첫 조항은 워크스페이스에 접근하는 도구가 "AI 에이전트이거나 AI 에이전트가 구동하는 경우 구글 MCP를 써야 한다"고 정했다. 구글 클라우드 블로그는 같은 내용을 "AI 에이전트는 기존 REST API가 아니라 Workspace MCP 서버나 Workspace CLI를 써야 한다"고 적었다.
