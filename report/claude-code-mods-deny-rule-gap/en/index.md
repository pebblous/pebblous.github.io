---
title: Claude Code Mods Can Approve a Call Your Deny Rule Refused
subtitle: Stopping that takes a built-in guard, and the guard loads only with managed settings or a company plan — Anthropic
date: 2026-10-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Claude Code Mods Can Approve a Call Your Deny Rule Refused

_Stopping that takes a built-in guard, and the guard loads only with managed settings or a company plan — Anthropic_

## Executive Summary

> [!callout]
> This report rereads Mods, which Anthropic shipped for Claude Code on 1 October 2026, against the official documentation and the public source of the built-in guard. A mod is a JavaScript or TypeScript function that ships inside a plugin and runs inside the Claude Code process. It can catch a tool call, rewrite a prompt, redraw the screen and add commands of its own. It is on by default. Most of the launch coverage wrote that much and stopped. Powerful, and no sandbox. But the absence of a sandbox is not a Claude Code fact. VS Code says in its own documentation that the extension host has the same permissions as VS Code itself. Stopping there says nothing yet.

> The documentation records something more specific. First, the deny rules you wrote hold in some places and not in others. Claude Code evaluates permission rules deny-first, but a mod that handles the final verdict on a tool call answers after that verdict, and its answer can replace it. Nothing in the engine reverses that answer. A built-in guard seated ahead of the mods does, and the guard loads only when the machine has managed settings or the user is signed in on a Team or Enterprise plan. Second, the side that blocks defaults to letting the call through. If a hook throws or runs past its time limit, Claude Code skips it and the command it was holding runs. Third, Mods is not an isolated box but a chokepoint you can intercept. There is exactly one road to the outside, every call along that road raises another event, and you can print what a mod reaches for before you install it. Two doors lead out of that chokepoint.

> That is what the documentation and the public source state; what follows is this report's reading of them. The three are less three separate defects than one shape: the place where a rule is written and the scope a rule applies to are not the same. Block a file from being read and the plugin code still reads it. The rule is not wrong; the rule covers a different subject. This shape was given a name fifty years ago.

<!-- stat-card -->
**45 / 80** — Events and API methods you can hook — Per the v2.1.289 docs. 45 named events, 80 methods, and every one of those method calls is an event too

<!-- stat-card -->
**15** — Events the built-in guard hooks — Counted directly in the guard's source. Files, network, processes and tool execution pass straight through

<!-- stat-card -->
**10s / 1s** — Time limits for a hook and its failure handler — Per the v2.1.289 docs. Ten seconds for one hook, one second for the handler that catches its failure

<!-- stat-card -->
**0 / 3** — Official examples with a failure handler — Counted by reading all three published example mods in full. Not even the one that holds dangerous commands has one

## Functions that moved inside the process

Mods is not a separate new product. It is one part of plugins. Put a hooks module inside a plugin folder and Claude Code calls that module's functions from inside its own process. It runs from v2.1.287 in the terminal and from v2.1.286 in the desktop app, and it is on by default. The hooks you used to write in settings files are still alive. The documentation nails that down: "Nothing about them is deprecated."

What a function receives is an event. There are 45 named events, and the API a module uses to reach outside has 21 namespaces and 80 methods. Both numbers come from recounting the tables in the v2.1.289 documentation, and the 80 excludes five import helpers for stored state and five return fields on the usage query. One more condition attaches here. Each of those method calls is itself an event. The public type declaration file is on an older build (v2.1.277), where the same count comes to 20 namespaces and 78 methods, so mixing the two baselines in one sentence gets the number wrong.

A hook has three moves available to it on an event. Observe and pass it on, rewrite it and pass it on, or answer for itself without calling what comes next. The third is the axis of this whole report. A hook that receives a tool call and answers "deny" without calling next stops the command; answer "approve" and the call goes through before the permission prompt appears.

### 1.1. The hooks module has no files and no network

The module's own reach is narrow. The documentation says it outright.

"The hooks module itself has no Node.js APIs, no timer globals such as `setTimeout`, and no network or file access of its own."
                        Source: mods API documentation.

Reading a file, starting a program or using the network all have to go through that API. This design is what makes section 2 possible. One road means you can put a checkpoint on it. What the module does through that API, though, happens with the permissions of the user who ran it. What is narrow is the module's vocabulary, not the module's authority.

### 1.2. How wide the same frame stretches

Several of Claude Code's own features have already moved onto this frame. The `/plugin` list shows six, and four of those have public source. Open the published ones and you can see how far the same frame stretches. `diff`, which shows you what changed, touches 10 of the 21 namespaces and calls 23 API methods. The built-in guard that serves as the security default calls two: read settings, write a log. Both are the same kind of code in the same seat, and their reach differs by that much.

### 1.3. Hooks run on six surfaces of seven, and drawing shows up on two

"Supported in both the terminal and the desktop app" carries half the fact. The surfaces table in the official documentation shows that the range where hooks run and the range where a mod's drawing reaches the screen are not the same. Hooks run on the unattended surfaces too. That fact is what section 6 builds on.

| Where Claude Code runs | Do hooks run? | Can you see what a mod draws? |
| --- | --- | --- |
| claude in a terminal (including an editor's built-in terminal and the JetBrains plugin) | Yes | Yes |
| Desktop app, Code tab (excluding WSL sessions) | Yes | Yes (except terminal-only elements) |
| WSL sessions in the desktop app | No (plugins do not work at all) | No |
| The VS Code extension's chat panel | Yes | No |
| claude -p and the Agent SDK | Yes | No |
| Remote control from claude.ai or mobile | Yes (in the session on your machine) | In the terminal on your machine |
| Cloud sessions | Yes (for plugins whose settings carry over) | No |

````

Transcribed from the surfaces table in the Mods overview documentation. Hooks run on six of the seven surfaces, and drawing appears on two. Which is to say hooks also run where nobody is looking at a screen.

## There is no isolation, but there is a chokepoint

The place the explainer pieces all stopped is "no sandbox." It is not a false statement, but it describes only part of the design. What Anthropic put into Mods is a chokepoint. As section 1 showed, the hooks module has no files and no network, and there is exactly one road to the outside. Every call made along that road raises another event.

"Every one of these calls is itself an event, named for its namespace and method without the `$.` … A mod earlier in the chain can observe, rewrite, or refuse your call, which is how an organization restricts what mods reach."
                        Source: mods API documentation.

On top of that, a mod ahead of you can alter the API object a later mod receives before handing it over. And because the chokepoint only works if the code can be read statically, a mod that reaches the API in an unreadable way is refused at load. That is an unusual device in an extension ecosystem.

### 2.1. No isolation is the default for this category

So where does the sentence "there is no sandbox" belong? Open the official documentation of the products you would compare it against and the answer appears. VS Code writes this about itself: "The extension host has the same permissions as VS Code itself." A developer tool's extensions running with host permissions is the default for this category, which makes that sentence a statement about the category rather than a critique of the product. That is why this report has to move to the next box.

### 2.2. Two doors lead out of the chokepoint

The first door is child processes. The official documentation states that even with sandboxing on, processes a mod starts run outside it. Network policy works the same way. Switch web requests off for the organisation and the requests a mod sends through the API are refused, but a program the mod starts reaches the network with the user's own access.

The second door is the boundary of what permission rules cover. The plugin security documentation settles it in one sentence: Claude Code's permission rules and sandboxing cover the tool calls Claude makes, not the code a plugin runs itself. The organisation admin documentation states the same fact with an example. Deny `Read(.env)` and a mod can still read that file with the file-read method, or start a program that does. And the very rule the permissions documentation recommends as the proper way to protect secrets is that deny rule. The two documents look like they undercut each other, but there is no contradiction. Two actors touch the same file by two paths, and the rule hangs on only one of them.
