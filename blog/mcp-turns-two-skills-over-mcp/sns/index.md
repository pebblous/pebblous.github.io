# SNS 홍보 글: 두 돌 맞은 MCP, 이제 서버가 도구와 함께 사용법도 보낸다

> 소스: blog/mcp-turns-two-skills-over-mcp
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/blog/mcp-turns-two-skills-over-mcp/ko/
> URL (EN): https://blog.pebblous.ai/blog/mcp-turns-two-skills-over-mcp/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

앤트로픽이 MCP 두 돌에 맞춰, 서버가 도구와 함께 그 사용법까지 보내는 Skills over MCP를 공개 베타로 열었다.

MCP 공식 블로그는 11월 24일 두 돌을 맞으며 파이썬·타입스크립트·C#·러스트·루비 SDK의 월간 내려받기가 7억 건을 넘었다고 적었다. 1년 전 같은 달에는 9천만 건이었다. 같은 날 Claude 제품 블로그는 Skills over MCP를 공개 베타로, Tasks와 Elicitation을 정식으로 풀었다. 서버가 도구 옆에 지침을 올려 두면 모델은 그 일이 필요해진 순간에만 해당 파일을 읽는다. 확장의 근거는 SEP-2640이고 공개 저장소에서 관리되며, 워킹그룹 구현 목록 108줄 가운데 64줄이 이미 구현했다고 표시돼 있다.

규격의 보안 항목에는 "스킬은 데이터이지 지시가 아니다"라는 줄이 있다. 호스트는 스킬을 믿을 수 없는 입력으로 다뤄야 하고, 공개된 JSON 스키마는 구조만 본다. 지침의 내용이 맞는 말인지를 강제하는 기계 검증은 규격에 없다.

사내 시스템을 MCP로 열기로 했다면 지금 확인할 것은 하나다. 도구와 함께 내보낼 '사용법'이 담당자 머릿속이 아니라 문서로 있는가.

▶ 전문: https://blog.pebblous.ai/blog/mcp-turns-two-skills-over-mcp/ko/
#MCP #AI에이전트 #에이전트스킬 #데이터품질 #페블러스

---

## LinkedIn · Facebook (EN)

Anthropic opened Skills over MCP as a public beta on the day the Model Context Protocol turned two.

The official MCP blog marked the anniversary on November 24, reporting that monthly downloads of the Python, TypeScript, C#, Rust and Ruby SDKs passed 700 million over the 30 days ending November 23, against 90 million in the same month a year earlier. Anthropic's product blog moved Skills over MCP into public beta that same day and made Tasks and Elicitation generally available. A server can now post instructions beside its tools, and the model reads them only at the moment that work comes up. The extension rests on SEP-2640, is maintained in a public repository, and 64 of the 108 rows in the working group's implementation list already ship it.

The specification is blunt about what arrives. Skills are data, not instructions, it says, and hosts must treat them as untrusted input. The published JSON schema checks structure only. Nothing in the machine validation asks whether the instructions themselves are correct.

That part stays with whoever runs the server. Before opening an internal system over MCP, the test is whether the "how to use it" that would ship alongside the tools exists as a document today.

▶ Read: https://blog.pebblous.ai/blog/mcp-turns-two-skills-over-mcp/en/
#MCP #ModelContextProtocol #AIAgents #DataQuality #Pebblous
