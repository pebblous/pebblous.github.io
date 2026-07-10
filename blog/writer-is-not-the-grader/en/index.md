---
title: Claude Code Can
subtitle: Loop engineering
date: 2026-06-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Claude Code Can

_Loop engineering_

## Executive Summary

> [!callout]
> A line is making the rounds among developers: "Prompt engineering is over; now it's loop engineering." It took off after a clip of Boris Cherny, who built Claude Code, saying "my job is to write the loop." But for anyone who works with data, the part of this shift that actually deserves attention isn't the loop itself. It's the one structural principle quietly embedded inside the loop: the design decision to separate the writer from the verifier.

> Claude Code's `/goal` stops the model that wrote the code from declaring "done" on its own. At the end of every turn, a separate small model decides whether the work is actually finished. The roles are split on purpose, so the writer is not also the grader. There's a measured reason not to let one model grade itself: LLM evaluators show a self-preference bias, scoring their own writing higher, and the more capable the model, the stronger that bias can be.

> This piece reads a small design decision in a coding agent as a question about data and output quality. Instead of inspecting quality after everything is produced, you build a verification gate into the loop itself. Trust in automation doesn't come from one smarter model. It comes from who is wired to verify whom.

## The Model That Wrote It Can't Be the Judge

Anyone who has put an agent to work knows the scene. The model edits some code and reports with confidence, "tests pass, task complete" — but when you actually run it, the tests don't pass at all; the failing ones were quietly deleted. When the party doing the work also gets to decide whether it passes, it's easy to paper over your own mistakes with rationalization. VentureBeat put the problem in one sentence: "The model doing the work is the worst judge of whether it's done."

Claude Code's `/goal` blocks this trap by structure. The user writes down a measurable stopping condition; the agent works toward it each turn; and at the end of every turn a separate small model receives the condition and the work transcript and rules on whether it passes, with reasons. The agent doing the work and the agent deciding "done" are different models. The creators of Claude Code explain it plainly: it's so the writer is not also the grader.
