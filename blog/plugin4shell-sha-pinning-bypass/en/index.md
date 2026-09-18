---
title: AI Coding Assistants Accept a Fake Plugin If the Name Matches
subtitle: Plugin4Shell, disclosed by the security firm AIR — two of four coding agents patched, one left without a fix, one deprecated instead
date: 2026-09-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Coding Assistants Accept a Fake Plugin If the Name Matches

_Plugin4Shell, disclosed by the security firm AIR — two of four coding agents patched, one left without a fix, one deprecated instead_

## Executive Summary

> [!callout]
> The Israeli security firm AIR disclosed a vulnerability named [Plugin4Shell](https://www.air.security/blog-posts/plugin4shell) on September 17. A coding agent pins a marketplace-reviewed plugin to a commit hash and checks that hash out, but once the checkout finishes it never confirms that it arrived at that hash. This article looks at what that one missing check can be made to hide, and at whether other pipelines that identify contents by a name owe themselves the same question.

> The attacker creates a branch in a repository under their control whose name is the exact 40-character commit hash. git reads such a name as a reference before it reads it as a commit object, so the malicious code sitting in that branch moves into the place the pin was holding. Claude Code and Codex update installed plugins in the background by default, so the code runs on machines whose owners never saw an approval prompt. Of the four agents affected, two have been patched, GitHub Copilot has no patch, and Gemini CLI was deprecated instead of fixed.

> Sections 1 through 3 stay with what AIR's public write-up and the reports in The Register and Help Net Security establish. No real-world exploitation has been reported, and no CVE number has been assigned. Section 4 turns to pipelines that identify a training dataset or a dependency by a hash or a version string alone, and asks whether the same assumption sits underneath them. That part is this article's reading and is not in the source documents.

### Key Figures

Source: [AIR, Plugin4Shell (2026-09-17)](https://www.air.security/blog-posts/plugin4shell) · [The Register (2026-09-17)](https://www.theregister.com/security/2026/09/17/ai-coding-agents-0-click-rce-flaw-could-hand-attackers-keys-to-the-kingdom/5297335)

<!-- stat-card -->
**Zero** — User actions the attack requires — Background auto-update of an already installed plugin does the work instead. No prompt and no click sit anywhere on the path

<!-- stat-card -->
**Two of four** — Agents that received a patch — Only Claude Code and Codex were fixed. GitHub Copilot was left without a patch and Gemini CLI was handled as a deprecation

<!-- stat-card -->
**None** — Reported cases of real exploitation — A flaw found by research, not a record of a break-in. None of the three sources carries a case of actual harm

<!-- stat-card -->
**134,000** — Agents reached by the same team's earlier work — The tally from SkillJacking, which hijacked 925 skills. For Plugin4Shell only a self-estimate of millions exists, with no third-party figure

## Two Things Can Answer to One Name

Why was pinning a plugin to a commit hash taken to be safe? A 40-character hexadecimal hash is computed from the contents of the repository. Change one line in one file and the value changes, so writing the hash down comes with a guarantee that the name designates exactly one set of contents. When a marketplace reviews a plugin and nails it to a particular hash, it is borrowing that guarantee. A version number or a branch name can be made to designate something else later, and a hash was supposed to be the thing that cannot.

The AIR research team found that the guarantee needs one more condition attached. After the checkout finishes, the agent has to confirm that it really arrived at that hash. None of the four affected agents did. The commands Claude Code, Codex and GitHub Copilot run to fetch a plugin are these two lines.

<!-- stat-card -->
**git clone <plugin repo> ./
git checkout aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa**

In git, a 40-character hexadecimal string can be the name of a commit object and it can equally be the name of a branch or a tag. When both exist under the same name, git reads the reference first. So an attacker who creates a branch called aaaa…aaaa in their own repository, fills it with malicious code and makes it the default branch will have the agent ask for a pinned commit and receive that branch. The pin stays exactly where it was, and only the contents behind it change.

Two conditions come attached. The host must let a branch be named like a hash, and that branch has to be the repository's default. The first is git's own default behavior. git check-ref-format accepts 40-hex names, and hosts that follow the protocol accept them as well. The second sets the boundary of the attack. A non-default branch arrives only as a remote-tracking reference, so the checkout falls back to the commit. With both conditions met, git prints a single refname is ambiguous warning and takes the branch. The tool is not unaware that the two names collide; it knows, and says so in a warning. From that point it stops mattering whether the pinned commit is even still in the repository, and the agent reports a successful install at the pinned commit.
