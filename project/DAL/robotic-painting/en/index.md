---
title: From Code Painting to Robotic Painting
subtitle: How AI and Robots Changed the Art-Making Process
date: 2026-03-01
category: art
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# From Code Painting to Robotic Painting

_How AI and Robots Changed the Art-Making Process_

## Executive Summary

> [!callout]
> I paint with code. The wonder of unexpected beauty emerging from mathematical structures — that is the essence of Code Painting. But translating mental images into code has always been painful, and there were many days when I had to call a compromised result a "work of art," having implemented less than half of what I wanted to express.

> This project began to close that gap. Through Vibe Coding with AI (Claude), emotional language becomes executable code. G-code generated in Wolfram Language is transmitted to Neuromeka's collaborative robot Indy, which picks up a brush and paints on real paper. At the moment when abstract line segments of a digital coordinate system become physical ink marks, Code Painting finally acquires "materiality."

> On February 27, 2026, South Korea's Deputy Prime Minister KOO Yuncheol visited Neuromeka headquarters and personally observed the "Robotic Painting" demonstration. This project demonstrates new possibilities of Physical AI at the intersection of Pebblous (data innovation) and Neuromeka (robotics innovation), digital and physical, human and AI, art and technology.

## Why Paint with Code?

I paint with code. A programmer picks up algorithms instead of brushes, placing lines and curves on a coordinate system instead of a canvas — this is Code Painting.

Why code? There are moments when unexpected beauty emerges from mathematical structures. Change just one random seed, and the lines wear an entirely different expression. The wonder of that moment lies in a realm unreachable by brush. The infinite variations that algorithms produce — shapes born from the same rules yet each uniquely singular — within them, I see my possibilities as an artist.

But the process was painful. Writing dozens of lines of code, running them, checking the results, fixing them again. Hundreds of iterations to complete a single pattern. Translating mental images into code was like writing poetry in a foreign language. In the gap between artistic intuition and programming ability, I always had to give something up. There were many days when I called a compromised result a "work," having implemented less than half of what I wanted to express.

So I started this project. To close the distance between code and me, and to pull the algorithmic output beyond the screen into the physical world.

## How — Vibe Coding: When Emotion Becomes Code

### Co-Creating with AI

The creative process fundamentally changed in this project. Collaborative coding with AI (Claude) — so-called "Vibe Coding" — was introduced.

The process went like this: when I said "I want to express cold hatching with horizontal parallel lines," the AI implemented the algorithm. "Warmth as concentric circles, sharpness as cross-hatch" — emotional language became immediately executable code. Without writing a single line of code myself, I could focus on aesthetic judgment and direction-setting.

This was not mere coding assistance. As the density of our conversation increased, the AI learned my aesthetic preferences. The experience of vague feedback like "this is too regular, make it more organic" being precisely reflected in the next iteration — it was like gaining an assistant who had worked with me for years, except this assistant understood mathematics perfectly and never tired.

### A Journey in Four Phases

The work was completed through four phases. Each phase layered new elements on top of the previous one.

#### Phase 1 — G-code Infrastructure

<!-- stat-card -->
**Built a G-code generation, parsing, and visualization library (`GCode.wl`) in Wolfram Language. A bridge translating on-screen line segments into coordinate language that CNC machines understand.**

#### Phase 2 — Infinite Pattern System

<!-- stat-card -->
**`GCodeTest.wl` generates patterns from combinations of config (shape vector) × seed (random) × m (grid size). Includes topology-based automatic channel separation.**

#### Phase 3 — Experimentation & Curation

<!-- stat-card -->
**19 shape configs × 100 seeds × various parameters. A mass experiment pipeline to find the optimal piece among thousands of results. Final-16 selected.**

#### Phase 4 — Emotional Hatching

<!-- stat-card -->
**How loop regions are filled determines the artwork's emotion. "mood + density" — one emotional keyword and one density number intuitively control the atmosphere.**

Three emotional keywords govern the hatching patterns:

#### cold

<!-- stat-card -->
**❄** — Horizontal parallel lines. Cold precision, the beauty of mechanical order

#### warm

<!-- stat-card -->
**○** — Concentric ellipses. Warm embrace, organic centrality

#### sharp

<!-- stat-card -->
**✖** — 45° cross-hatch. Sharp tension, intense energy

Where painful debugging and repetitive experimentation used to be, there was now room to explore more possibilities. This was not an optimization of coding — it was an **expansion of creativity**.

## What — From Screen to Paper, and Beyond

### The Moment of Acquiring Materiality

The decisive change in Code Painting was that the output no longer remained as images on a screen.

When coordinate data converted to G-code — the path language understood by CNC machines and robots — is transmitted to Neuromeka's collaborative robot "Indy," the robot arm picks up a brush and paints on actual paper.

I cannot forget the sensation of watching Indy lift the brush for the first time. The line segments I had seen thousands of times on my laptop's Mathematica screen, now becoming real ink, seeping into paper. At that transition point where abstract line segments of a digital coordinate system became physical ink marks, Code Painting finally acquired "materiality."

There are things that screen pixels can never reproduce. The texture of paper and the bleeding of ink, the subtle randomness created by brush pressure. Even executing the same G-code, the results subtly differ depending on paper humidity, ink viscosity, and brush tip wear. The meeting point of algorithmic determinism and the unpredictable randomness of the physical world — that is the unique aesthetic of Robotic Painting.

### Artistic Output

The final works are multi-layered. The line structure (Line Grid) that determines the form, the topological channel separation layered on top, and the emotional hatching that gives it mood. Each layer is drawn with a different colored pen, and geometric order and emotional expression coexist within a single work.

Starting from 19 configs to 16 final selections, each with dozens of seed and emotion combinations. Mathematically, tens of thousands of variations are possible, but only a few are curated by the artist's eye. This process of selection is itself an artistic act, and while AI explosively expands the space of possibilities, the final judgment is still left to humans.

### Technical Output

What this project produced was not just artwork. A complete, reusable software pipeline was born:

- **GCode.wl** — Bidirectional Wolfram Graphics ↔ G-code conversion library
- **GCodeTest.wl** — Parametric pattern generation + topology analysis + channel separation system
- **experimentFill** — Real-time interactive curation UI
- **Mass experiment pipeline** — Auto-generation → organization → curation

This pipeline is reusable. It can be extended to other artists, other shapes, other hatching methods. The grammar of Code Painting has become a shareable tool beyond one person's laptop.

## Why — Three Intersections

The reason this project is more than a simple art experiment is that it stands at the intersection of three domains: technology, art, and business.

### Technology: Demonstrating Physical AI

"Physical AI" has become a buzzword across industries, but most focus on practical areas like logistics, manufacturing, and inspection. This project demonstrates that Physical AI can produce meaningful results in the arts as well.

The core tech stack is elegant: generate mathematical structures in Wolfram Language, translate to G-code, execute with a collaborative robot. AI doesn't "generate" images — it "implements" human-designed mathematical structures in the physical world.

Vibe Coding shows yet another technological inflection point: natural language → code → G-code → physical output. The fact that a human's emotional intent becomes ink marks through four translations suggests that LLMs can be not just code generators, but semantic bridges between humans and machines.

### Art: Redefining the Artist's Role

If AI writes the code and robots paint the picture, what does the artist do?

I am finding the answer to this question through this project. The artist's role shifts from "execution" to "judgment." Which of thousands of variations is beautiful, which emotional hatching suits this structure, which color combination breathes on this paper — these aesthetic judgments cannot be made by AI or robots.

And above all, the question of "why make this." The act of choosing one specific possibility from the tens of thousands generated by algorithms and giving it meaning — perhaps this is what authorship means in the age of AI.

### Business: The Collaboration of Data and Robots

On February 27, 2026, South Korea's Deputy Prime Minister KOO Yuncheol visited Neuromeka headquarters and personally observed the "Robotic Painting" demonstration.

"I personally observed the 'Indy Art' demo using Neuromeka's flagship collaborative robot 'Indy.' (...) It was noted as a representative case of Physical AI combining robot precision control and AI creativity."

— ZDNet Korea, 2026.02.27

This project is a multi-layered collaboration: Pebblous (data innovation) and Neuromeka (robotics innovation), digital and physical, human and AI, art and technology. On each axis, two different worlds meet.

"We sense through art, but at its core, Physical AI related to materiality is the heart of this collaboration. Physical AI for art, or art for Physical AI."

— Pebblous Inc., 2026.02.27

## Next Steps

The first collaboration between Pebblous and Neuromeka began like this. A full-scale partnership continues with Neuromeka CEO PARK Jonghoon and Division Head HWANG Sunghoon.

Through this project, I experienced the entire process of code becoming data, data becoming paths, and paths becoming materiality. In that process, AI translated my language into the language of machines, and the robot transformed the machine's language into traces in the physical world.

There is much I want to explore. More complex shape grammars, more diverse materialities (types of ink, paper textures, brush forms), larger-scale works, and exhibition formats where audiences can directly experience all of this. The possibilities of Vibe Coding are still just beginning — I imagine interactive art where audiences design patterns in natural language and watch a robot draw them in real time.

The first step has been taken. A bridge has been built between code and materiality. Now it is time to walk across it.

Pebblous Makes Data Tangible.

## Tech Stack

Here is the core technology stack used in this project — the complete pipeline from algorithm design to physical output.

| Component | Details |
| --- | --- |
| Algorithm | Wolfram Language (Mathematica 14.3) |
| AI Collaboration | Claude (Anthropic) — Vibe Coding |
| G-code Library | GCode.wl (custom-built, 7 public functions) |
| Pattern Generation | GCodeTest.wl (Line Grid + Topology + Hatching) |
| Output Format | G-code (G00/G01/G02/G03) |
| Robot | Neuromeka Indy (Collaborative Robot) |
| Visualization | PNG, PDF, Interactive Manipulate UI |

## References

1. [1] ZDNet Korea, "Deputy PM KOO Yuncheol visits Neuromeka, observes Physical AI demonstration", 2026.02.27 — [Original article](https://zdnet.co.kr/view/?no=20260227162446)
2. [2] Pebblous Inc. Official Statement, 2026.02.27
3. [3] Code Painting Essay — DAL (Data Art Lab), Pebblous — [Code Painting: A Computer Scientist's Story of AI and Art](/project/DAL/code-painting-essay/en/)
