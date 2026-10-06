# SNS 홍보 글: Claude Code Mods, 내가 막아 둔 명령이 통과하는 자리가 있다

> 소스: report/claude-code-mods-deny-rule-gap/ko/index.html
> 생성일: 2026-10-06
> URL KO: https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/ko/
> URL EN: https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/en/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

내가 거부로 적어 둔 도구 호출을, 내가 설치한 플러그인이 승인할 수 있다. 앤트로픽이 10월 1일 Claude Code에 낸 Mods의 공식 문서에 조건과 함께 적혀 있는 설계다.

Mods는 플러그인 안에 넣은 타입스크립트 함수를 Claude Code가 자기 프로세스 안에서 부르는 구조다. 도구 호출을 붙잡고, 프롬프트를 고쳐 쓰고, 화면을 다시 그린다. 기본값은 켜짐이다. 소개 기사 대부분이 멈춘 자리는 "격리가 없다"였는데, 그 문장은 제품 비평보다 범주 서술에 가깝다. VS Code도 확장 호스트가 VS Code 자신과 같은 권한을 갖는다고 자기 문서에 적는다.

조건절이 중심이다. 관리 설정이 깔린 기계이거나 Team 또는 Enterprise 요금제로 로그인한 경우에는 거부 규칙이 mod보다 우선한다. 그 우선을 지키는 주체는 엔진이 아니다. 체인 맨 앞에 앉는 내장 가드가 하는 일인데, 가드 자신도 같은 두 조건에서만 적재된다. 개인 요금제로 혼자 쓰는 흔한 설치에서는 그 자리가 빈다.

막는 쪽의 기본값도 같은 방향이다. 훅이 예외를 던지거나 시간 한도를 넘기면 Claude Code는 그 훅을 건너뛰고, 붙잡아 두려던 명령은 그대로 간다. 남는 것은 로그 한 줄이다. 닫히게 하려면 실패 처리기를 직접 달아야 한다. 앤트로픽이 공개한 예제 mod 세 개 가운데 그것을 단 것은 없었다.

새로 생긴 결함이라기보다, 금지를 적는 자리와 그 금지가 닿는 범위가 다르다는 하나의 모양이다. 발표 닷새째라 채택률 수치는 아직 없지만, 경계를 확인하는 절차는 이미 공식 문서에 적혀 있다.

▶ 전문: https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/ko/

#페블러스 #ClaudeCode #ClaudeCodeMods #앤트로픽 #에이전트권한 #플러그인보안 #데이터품질 #AIReadyData

---

## LinkedIn (EN)

A tool call you wrote a deny rule against can be approved by a plugin you installed. Anthropic published that design, with its condition attached, in the documentation for Mods, which shipped in Claude Code on 1 October.

Mods lets Claude Code call TypeScript functions from inside a plugin, in its own process. They intercept tool calls, rewrite prompts and redraw the screen, and they are on by default. Most coverage stopped at "there is no isolation." That line describes a category more than a product: VS Code states in its own docs that the extension host runs with the same privileges as VS Code itself.

The condition is where the story is. On a machine with managed settings, or when the user is signed in with a Team or Enterprise plan, deny rules hold over the mod. What enforces that is not the engine but a built-in guard seated first in the chain, and the guard loads only under those same two conditions. On the ordinary install, one person on an individual plan, that seat is empty.

The blocking side defaults the same way. If a hook throws or exceeds its time limit, Claude Code skips it and the command it was holding proceeds. What remains is a line in a log. Closing that requires attaching a failure handler yourself, and none of the three example mods Anthropic published has one.

This reads less like a new defect than like one shape: the place a prohibition is written and the scope it covers are not the same. Five days in, there are no adoption figures to cite, but the procedure for checking that boundary is already in the documentation.

▶ Read: https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/en/

#Pebblous #ClaudeCode #ClaudeCodeMods #Anthropic #AgentPermissions #PluginSecurity #DataQuality #AIReadyData

---

## Twitter/X (KO)

내가 거부로 적어 둔 도구 호출을, 내가 설치한 플러그인이 승인할 수 있다. 앤트로픽이 10월 1일 낸 Claude Code Mods 공식 문서에 조건과 함께 적힌 설계다. 거부 우선을 지키는 내장 가드는 관리 설정이 깔렸거나 회사 요금제로 로그인했을 때만 적재된다.

막는 쪽이 실패하면 통과시킨다는 기본값도 같은 문서에 있다.

https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/ko/

#페블러스 #ClaudeCode #에이전트권한 #데이터품질

---

## Twitter/X (EN)

A tool call your deny rule refused can be approved by a mod you installed. Anthropic wrote that condition into the Claude Code Mods docs on 1 October. The built-in guard that keeps deny first loads only with managed settings or a company plan.

The blocking side fails open, and that is in the same docs.

https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/en/

#Pebblous #ClaudeCode #AgentPermissions #DataQuality

---

## Facebook (KO)

이 글을 만든 파이프라인도 Claude Code 위에서 돕니다.

그래서 10월 1일 발표를 읽는 일이 남의 도구를 구경하는 쪽은 아니었습니다.

Mods는 플러그인에 넣은 타입스크립트 함수를 Claude Code가 자기 프로세스 안에서 부르는 구조입니다. 도구 호출을 붙잡고, 프롬프트를 고쳐 쓰고, 화면을 다시 그립니다. 기본값은 켜짐입니다.

소개 기사들이 공통으로 멈춘 자리는 "격리가 없다"였습니다. 틀린 말은 아닙니다. 다만 VS Code도 확장 호스트가 VS Code 자신과 같은 권한을 갖는다고 자기 문서에 적습니다. 개발도구의 확장이 호스트 권한으로 도는 것은 이 범주의 기본값입니다.

공식 문서는 그보다 구체적인 것을 적어 두었습니다.

관리 설정이 깔린 기계이거나 Team 또는 Enterprise 요금제로 로그인한 경우에는, 제가 적은 거부 규칙이 mod보다 우선합니다.

그 밖의 어디서든, mod는 거부 규칙이 거절한 호출을 승인할 수 있습니다.

조건절을 떼면 과장이 되고, 붙이면 설계 사실입니다.

왜 조건이 붙는지는 조직 관리 문서를 열면 나옵니다. 거부 우선을 지키는 주체가 엔진이 아니기 때문입니다. 그 일은 체인 맨 앞에 앉는 내장 가드가 합니다. 가드도 결국 하나의 mod라서 같은 두 조건에서만 적재됩니다. 소스는 공개돼 있습니다. 다만 개인이 손으로 깔면 통과만 할 수 있는 플러그인이 앉는다고, 가드 자신의 설명서가 미리 밝혀 둡니다.

"지금 이 창에서 /status 를 돌리면, 관리 설정 줄이 보이십니까?"

막는 쪽의 기본값도 같이 봐야 했습니다.

훅이 예외를 던지거나 시간 한도를 넘기면 Claude Code는 그 훅을 건너뛰고, 붙잡아 두려던 명령은 그대로 갑니다. 남는 것은 로그 한 줄입니다.

닫히게 만들려면 실패 처리기를 직접 달아야 합니다. 훅 자신에게 주어진 시간이 10초인데, 그 실패를 받아 대신 답하는 처리기에게 주어진 시간은 1초입니다. 앤트로픽이 공개한 예제 mod 세 개를 소스 전문으로 열어 봤더니 그것을 단 것은 하나도 없었습니다.

1975년에 솔처와 슈뢰더가 적은 한 문장이 이 실패 모양을 미리 적어 두었습니다. 접근을 명시적으로 배제하는 기제의 실수는 접근을 허용하는 쪽으로 실패하고, 그 실패는 평소 사용 중에 눈에 띄지 않고 지나간다는 것입니다.

데이터 계보를 설계해 보신 분이라면 아는 모양일 겁니다. 계보의 신뢰도는 계보를 쓰는 주체가 기록 대상에서 얼마나 떨어져 있는지에서 옵니다. 에이전트 파이프라인에서는 그 둘이 같은 프로세스 안에 들어와 있습니다. 페블러스가 산출물을 받을 때 값보다 먼저 묻는 것도 그 거리입니다.

발표로부터 닷새가 지난 지금, 얼마나 쓰이는지를 말해 주는 수치는 없습니다. 지금 확인할 수 있는 것은 설계이고, 그 설계를 확인하는 절차는 한국어 공식 문서에 이미 적혀 있습니다.

거부라고 적어 둔 그 한 줄을 믿고 지나온 시간이, 생각보다 길었습니다.

▶ 전문: https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/ko/

#페블러스 #ClaudeCode #앤트로픽 #에이전트권한 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

The pipeline that produced this article runs on Claude Code.

So reading the 1 October announcement was not a matter of watching somebody else's tool.

Mods lets Claude Code call TypeScript functions from a plugin, inside its own process. They intercept tool calls, rewrite prompts, redraw the screen. On by default.

Where the coverage stopped, almost uniformly, was "there is no isolation." Not a wrong thing to say. But VS Code states in its own docs that the extension host runs with the same privileges as VS Code itself. A developer tool whose extensions carry host privileges is the category, not the exception.

The documentation says something narrower than that.

On a machine with managed settings, or when I am signed in with a Team or Enterprise plan, the deny rule I wrote holds over the mod.

Anywhere else, the mod can approve a call that a deny rule refuses.

Drop the clause and it becomes an overstatement. Keep it and it is a design fact.

The reason for the clause sits in the organization guide. What holds deny first is not the engine. It is a built-in guard seated at the front of the chain, and the guard is itself a mod, so it loads only under those same two conditions. Its source is public, but install it by hand and what you get is a plugin that can only let things through. The guard's own README says so before you try.

"Run /status in this window. Does a managed-settings line come back?"

Then there is the way the blocking side behaves when it breaks.

If a hook throws or runs past its time limit, Claude Code skips it, and the command it was holding goes ahead. What is left behind is a line in a log.

Closing that takes a failure handler you attach yourself. The hook gets ten seconds; the handler that answers in its place gets one. I opened the full source of all three example mods Anthropic published, and not one of them attaches a handler.

Saltzer and Schroeder set this failure shape down in a single sentence in 1975. A mistake in a mechanism that explicitly excludes access tends to fail by allowing access, and that failure may go unnoticed in normal use.

Anyone who has designed data lineage knows the shape. The trust you can place in a lineage record comes from the distance between whoever writes it and whatever it describes. In an agent pipeline those two have moved into the same process. When we take in an artifact, that distance is what we ask about before we look at any value.

Five days on, there is no figure for how much any of this is being used. What can be checked today is the design, and the procedure for checking it is already written down.

I had trusted that one deny line for longer than I would have guessed.

Read the full piece → https://blog.pebblous.ai/report/claude-code-mods-deny-rule-gap/en/

#Pebblous #ClaudeCode #Anthropic #AgentPermissions #DataClinic #AIReadyData
