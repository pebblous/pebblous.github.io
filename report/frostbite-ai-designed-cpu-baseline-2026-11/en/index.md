---
title: Frostbite Is an AI-Designed CPU That Won
subtitle: Architect Labs reports 4.59x the performance per watt of a core it declines to identify for legal reasons, and the whole scorecard is ratios against that one chip
date: 2026-11-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Frostbite Is an AI-Designed CPU That Won

_Architect Labs reports 4.59x the performance per watt of a core it declines to identify for legal reasons, and the whole scorecard is ratios against that one chip_

## Executive Summary

> [!callout]
> A CPU design that AI agents are said to have driven from one end to the other is now public. It is Frostbite, posted to the research blog of Architect Labs, a chip design startup in Palo Alto, on 18 November 2026. The post says agents iterated over everything from the compiler, through the list of commands the chip understands and the circuit design, to the verification and the final layout file handed to a fab. The number at the top of the scorecard is a little over four times the comparison core's performance per watt across 25 workloads.

> The company is the one that split that number into a search figure and a held-out figure and reported both, wrote down that its own power model was badly wrong at first, and listed the comparisons it has not run yet. The three averages do not contradict each other. Weight the two halves by workload count and they recombine into the headline figure exactly. Summarizing ratios with a geometric mean is also the method computer architecture settled on in 1986.

> The empty cells sit on the side being measured against, not the side being measured. Performance and power appear only as multiples, and every one of those multiples was taken against the same single core. That core is withheld for legal reasons. Neither a clock nor an absolute wattage is given for it. The company calls that core silicon-proven. So the side with silicon carries no name, and the side with a name has no silicon yet. SPEC, which runs the same arithmetic, publishes the model name of its reference machine. The same question went up in the comment thread on the day of publication.

<!-- stat-card -->
**6.02x → 3.83x** — Per-watt on the search set versus the held-out set — Geometric means over 10 and 15 workloads. Weighted by count, they recover the headline 4.59x exactly

<!-- stat-card -->
**0.792 vs 0.895 mm²** — Area of the two things matched up — One four-tile cluster was set against one comparison core on the grounds of similar area, not equal counts

<!-- stat-card -->
**250% worst case** — Power model error before calibration — The company reported this first. Iteration stopped at a 5% threshold, and measured error afterwards runs under 6% worst case, about 1.5% median

<!-- stat-card -->
**2021 · 300 MHz** — The earlier automated CPU that reached silicon — A chip from the Institute of Computing Technology, Chinese Academy of Sciences. Taped out at 65 nm, it booted Linux, and it named the chip it was measured against

## A chip the company says agents drove from compiler to final layout

The piece Architect Labs put on its research blog on 18 November is titled **"Introducing Frostbite: A new CPU architecture discovered, designed, and verified end-to-end by AI"**. It is filed under Research, the dateline reads November 18, 2026, and no individual author is credited. This is a company blog post rather than an academic paper. Why that distinction matters comes later. What matters here is the scope the post assigns to its agents.

Verbatim: **"Our AI systems autonomously iterated over the compiler, ISA, architecture, microarchitecture, RTL, verification, and final GDS."** For readers meeting chip design for the first time, one pass of plain language. The instruction set architecture is the list of commands a chip understands. The microarchitecture is the circuit-level design that actually carries those commands out. The register transfer level is the stage where circuit behaviour is written as code. The final GDS is the layout file handed to a fab, and handing a design to a fab is called a tapeout. What the post claims is that agents iterated over everything up to the edge of tapeout.

The scale of the search is on the page too. **"Across four searches and a final round of ablations, the swarm tried 58 ideas and kept 37 of them,"** four rounds of search plus a final set of ablations, 58 ideas attempted and 37 retained. Along the way a 141-page design document laying out the programming model came out of the process, and the company says it threw that document away after generating the first RTL. The reason given is **"many of the numbers and estimates were well off what was physically possible"**. That is the company grading the estimates in its own design document, in writing.

The chip's specifications run as follows. It was synthesized on a 7 nm process, closing timing at 800 MHz in synthesis and landing at 500 MHz in the final GDS. The full floorplan is 16 tiles in a 4×4 arrangement, and one cluster of four tiles in a 2×2 group with four L3 nodes attached measures 0.792 mm². One term gets fixed here. The post counts the contents of that cluster in tiles, not in cores, and this article follows the same count.

### 1.1. The computation model dates to 1990, and the language belongs to someone else

What Frostbite stands on is interaction nets, a computation model Yves Lafont proposed at the POPL conference in 1990. The post does not hide this. It writes in the body that the idea has **"been around for more than 35 years"** and cites Lafont's 1990 paper in its bibliography. Vine, the language that compiles programs into interaction nets, is not an Architect Labs project either: **"Languages such as Vine compile ordinary-looking programs directly to interaction nets."** Vine is third-party open source released under Apache 2.0, and the post cites that too.

There is a reason for nailing this down. The secondary headline rendered the claim as **"from scratch"**. Yet the computation model is thirty-five years old, and the language programs are written in was built and published by other people. The post itself makes no such claim. A reading in which AI invented a new model of computation does not come out of the primary document.

The quickest way to confirm that is to count the post's bibliography. It has exactly four entries, and all four come from outside Architect Labs. Three are academic papers and the origin of an open source language; the fourth is a blog post written by another company.

| Entry in the post's bibliography | Whose work it is |
| --- | --- |
| Lafont, Y. (1990). Interaction Nets. POPL '90, pp. 95–108 | Outside work — origin of the computation model |
| The Vine programming language (vine.dev) | Outside work — third-party open source language |
| Tendrils (2026). On Interaction Nets | Outside work — another company's blog post |
| de Moura, L. & Ullrich, S. (2021). The Lean 4 Theorem Prover and Programming Language | Outside work — origin of the proof assistant |

The entire bibliography at the foot of the primary post. All four entries are work from outside Architect Labs, and Lean, the proof assistant this article returns to later, is among them.

### 1.2. What the humans decided is written in the post as well

The post states that **"Frostbite was designed with zero architectural priors"**. The same post also records the decisions humans made. Establishing the workload set was the company's doing: **"we had to establish the set of workloads"**. The decision about what to measure first sits on the human side too, as **"we chose to first measure 'single-core' performance"**. A reading in which no human hand touched any of this does not match the primary document.

Who picked interaction nets is left unsaid. The closest sentence is **"Agents synthesized research papers and existing benchmarks, and built Python models to trade off high-level architectural ideas against each other, before narrowing to a single architectural concept"**. Agents reviewed papers and existing benchmarks, weighed design options with Python models, and narrowed to one concept. Whether a human steered that one concept toward interaction nets is not recorded. Where nothing is written, writing that nothing is written is the better move, because a gap of exactly that shape is what the rest of this article examines.

## Split the score in two and it adds back up exactly

Start with the arithmetic. The figure at the top of the post is **"Frostbite reaches a geometric mean of 4.59x the TCPU's performance-per-watt"**, 4.59 times the comparison core's performance per watt across all 25 workloads. The same post splits that figure in two: **"6.02x on the 10 search-set workloads, and 3.83x on the 15 held-out workloads it was never tuned on"**, 6.02x on the ten used for search and 3.83x on the fifteen held back from tuning.

A geometric mean is the average you reach for when you are summarizing a set of ratios. Multiply the values together and take the nth root. Unlike an arithmetic mean, a single outlier does not drag the whole result with it. Apply that yardstick, weight the two scores by the number of workloads behind each, and 6.02x and 3.83x recombine to 4.5894x. That matches the headline 4.59x to two decimal places. The three numbers are consistent with one another.

> [!callout]
> This article is not an indictment of the arithmetic. The numbers hold, and the method for folding many ratios into one is the method the field recommends. The trouble starts somewhere else: at the point where **only one of the three numbers travels**. The figure left in the secondary headline is 4.59x alone, and that single number gives no sign that the two halves sit 1.57x apart.

### 2.1. The company built both sets

Separating a search set from a held-out eval set is a discipline machine learning has practised for a long time. The tasks you tune on and the tasks you grade on stay apart, and this company carried that discipline into chip design. Doing it beats not doing it. Read the post's sentence closely, though, and one more thing surfaces: **"Under each category, we created a search set and a held-out eval set to evaluate the final Frostbite on,"** where the verb _created_ reaches across both sets.

Calling the eval set held out means it was kept out of tuning. It does not mean a third party chose it. The same hand assembled both sets under the same five categories. So the eval set reads less like an examination set from outside and more like a fresh sample drawn from the same distribution. What the split confirms is generalization within the chosen tasks, and bias in the choosing is not something a split can catch.

Below is the full list of both sets. The 25 workload names are transcribed from the figure in the post: the left column is the 10 the design was tuned against, the middle column is the 15 it was graded on. The first thing to notice is the character of what made the list. Matrix multiplication, cryptographic functions, sorting, decompression — these are short kernel-level programs throughout, and not one line is a complete application such as an operating system or a database. That character sets the range of the numbers that follow.

The annotations in the third column point at three things: the five workloads added to the eval set later, the kernels that follow a standard benchmark but were run at reduced size, and the two workloads the body of the post puts a number on. Those last two both belong to the eval set, and they are the highest and lowest values the post states numerically. All three annotations come from circumstances the post records about itself.

| Search set, 10 | Eval set, 15 | Annotation on the middle column |
| --- | --- | --- |
| gemm | conv2d | Highest stated value, 23.12x |
| chacha20 | radixsort | One of three standard kernels shrunk 64x |
| spmv | pca | One of the five added later |
| fft (standard kernel, reduced) | lcs |  |
| binomial | bfs |  |
| biquad | emeans |  |
| sha256 | lu solve | Reduced kernel · one of the five added later |
| json | fea | One of the five added later |
| mergesort | huffman |  |
| nqueens | kalman | One of the five added later |
|  | randomforest |  |
|  | lz4 | One of the five added later |
|  | quicksort |  |
|  | kdtree |  |
|  | fib | Lowest stated value, 1.15x |

Transcribed from the figure in the post. The three kernels run at reduced size are fft, radixsort and lu solve; the five added later are kalman, pca, fea, lu solve and lz4. Only conv2d and fib have their multiples written out in the body text — the rest live in the figure alone.

### 2.2. The graded set comes with three caveats

Each of the three annotations tells a different story. First, five workloads entered the eval set after the fact. Verbatim: **"Later, we added five more practical workloads to the held-out set:"** a Kalman filter, principal component analysis, finite element analysis, LU decomposition and LZ4 decompression. The post does not say whether the addition came before or after the design was frozen. Since nothing is written, this article settles the question in neither direction.

Second, the three kernels drawn from a standard benchmark are not at their regular size. fft, radixsort and lu solve follow the SPLASH-2 suite but were run 64 times smaller. The reason is in the post as well: the regular sizes are **"not suitable for exploratory work"**. As a choice made under the constraints of a search phase that is reasonable, and it also means those three rows cannot be described as measurements against a standard benchmark.

Third, the spread inside the eval set is wide. The two workloads given numbers in the body are conv2d at 23.12x and fib at 1.15x, and both belong to the eval set. Within one set the values differ by more than twentyfold. An average of 3.83x shows none of that spread. The remaining thirteen values appear only in the figure, so this article leaves them there.

A Pebblous original chart drawn from the numbers in the post. Weighting the search-set geomean 6.02x and the eval-set geomean 3.83x by workload count reconstructs the headline 4.59x exactly. On the same axis, the distance between the eval set's lowest value (fib, 1.15x) and highest value (conv2d, 23.12x) is also visible.

### 2.3. Is the split a discipline, or a guard against a problem that does not exist here?

On the day of publication, the Hacker News thread divided into two readings of this very split. One reader read it as discipline: **"they don't want it designing an architecture that overfits to exactly their 25 evaluation workloads"**, with the fifteen held back vouching that the design runs well outside the ten it was built on. Another took the opposite line: **"there isn't really a notion of 'overfitting' in practice here"**, on the grounds that this is no gradient descent fitting weights, so the concept does not carry over cleanly.

This article takes a third position. The split does prevent something real. Had the result only worked on the ten tasks the design was tuned against, the score on the fifteen held back would have fallen much harder, and the fact that it did not is information in itself. The guarantee is just narrow. Both sets were built by the same hand under the same five categories, five entries arrived late, and three run at one sixty-fourth of their regular size. Dividing the exam paper properly and asking whether the exam resembles the outside world are separate questions, and the split addresses only the first.

## Every performance figure in the post is a ratio against one chip

Every performance and power figure in this post is a ratio. Performance per watt appears as 4.59x, 6.02x and 3.83x; per-workload values appear as 23.12x and 1.15x. Performance per area carries its own multiple, whose character gets its own treatment below. Absolute runtime, absolute wattage and instruction throughput appear nowhere. And all those multiples share one and the same denominator: the comparison core the post abbreviates as TCPU.

Three things are written about that core. Its character is **"a single core of a modern superscalar (dual-issue, in-order) CPU, which we refer to as TCPU"**, one modern core that issues two instructions at a time while keeping them in order. Its area is **"This TCPU is 0.895 mm² at the same process"**, 0.895 mm² on the same process node. Its identity goes unwritten: **"For legal reasons, we cannot disclose the exact CPU."**

One more word attaches to that description. The post calls the TCPU **"a modern, silicon-proven superscalar (dual-issue, in-order) CPU core"**, a core proven in silicon. In the company's own wording an asymmetry falls into place. The side with silicon has no published name, and the side with a published name has not reached silicon. Either condition on its own would be ordinary, but the two sit on opposite sides, and so no route to a check against a physical object opens in either direction.

A caution belongs here. Thin on detail is not what this post is. It is unusually thick with detail. Area to three decimals, process at 7 nm, synthesis and final-layout clocks separately, the 3,183 interactions and 262-step critical path of the nqueens example, and the fact that formal verification translates out to more than 800,000 lines of Lean code. Detail is not what runs short. Detail simply steps around one cell.

Set the two sides out item by item and the place where the line breaks becomes visible. On the Frostbite side, area, process, synthesis clock and final-layout clock all carry figures. On the comparison core side, exactly one item carries a figure, and it is area. The process is described only as the same one, and no clock is given at any stage. Absolute power and absolute runtime are blank on both sides. Only one row has both columns filled, and that row is area, while performance per watt has no value in either column and survives only as a multiple taken between them. The diagram below is the map.

Built entirely from statements in the primary post. Grey cells are places where the post gives no figure, and the performance-per-watt row is reported only as a ratio between the values in the two columns.

### 3.1. What was matched up is four tiles against one core

The unit of comparison needs stating precisely. Verbatim: **"We benchmark one Quad+L3 cluster against a single core of a modern superscalar"**, so the Frostbite side is one cluster of four tiles in a 2×2 group with four L3 nodes, and the other side is a single core. The grounds are area rather than count. **"since they have similar area"**, similar area is the reason the two were matched. At 0.792 mm² against 0.895 mm², they fall within 11.5% of each other.

Restating this as one core against one core gets it wrong. The post never says how many cores a tile corresponds to, and a tile built on interaction nets has no one-to-one mapping to a conventional core in the first place. Describing it as an area-matched comparison is what the primary document supports. Area-matched comparison is itself common and legitimate practice in semiconductors. But the unit of comparison changes what the multiple means, which makes it a condition that has to travel alongside the number.

### 3.2. Per-watt says geometric mean, per-area says only average

The post carries a performance-per-area figure too. Verbatim: **"Across all the workloads, we average an 8.77x performance-per-area."** The only word here is _average_, and whether that means a geometric or an arithmetic mean goes unstated. The 4.59x per-watt figure is explicitly labelled a geometric mean, so within one post the kind of yardstick is missing on one side only. Reading the post again end to end turns up no sentence that names it.

When the yardsticks differ, two numbers cannot be multiplied or divided. So this article does not place the per-area figure in the same frame as the per-watt figure. What matters more is what the gap blocks in practice. The area ratio is already known, so if per-area and per-watt performance were taken with the same yardstick, an outside reader could work back from the two numbers to whether power went up or down. Without knowing the kind of average, that calculation does not hold. One missing line cuts the check short. The same reasoning is why this article puts no invented number in that slot. Writing that it cannot be counted is the accurate move.

This gap is a forty-year-old problem. In the March 1986 issue of **Communications of the ACM**, volume 29 number 3, Fleming and Wallace published a paper titled **"How Not to Lie with Statistics: The Correct Way to Summarize Benchmark Results"**. The thrust is that summarizing normalized ratios with an arithmetic mean produces wrong conclusions, so a geometric mean is required. That the choice of average changes the conclusion was settled in this field in 1986, and writing down which average was used became the convention as a result.

### 3.3. SPEC runs the same arithmetic and names its reference machine

Here is one yardstick from outside. SPEC CPU 2017 has long been the industry's common standard for reporting processor performance, and its scores are ratios too. The time the reference machine takes is divided by the time the machine under test takes, and those ratios are folded together with a geometric mean. That is the same arithmetic Frostbite uses.

What differs is one item: the identity of the reference machine. Verbatim from SPEC's documentation, **"The reference machine is a historical Sun Microsystems server, the Sun Fire V490 with 2100 MHz UltraSPARC-IV+ chips."** The model name, the chip name and the clock of a server released in 2004 are written out. Anyone can look up that machine's specifications and work back to what the score is a multiple of. Running the same arithmetic while the machine on the other side of the ratio stays pseudonymous is where the Frostbite scorecard parts company.

What SPEC's reporting rules demand is also instructive. They call for **"full disclosure of results and configuration details sufficient to independently reproduce the results"** and require estimates to be labelled as estimates. On energy the rules are stricter: **"SPEC CPU energy metrics are not allowed to be estimated"**, power-related metrics may not be estimated at all.

> [!callout]
> A line to avoid any misreading. Frostbite's numbers are not a SPEC submission, so no SPEC rule has been broken. SPEC is cited here for a different purpose: to show **where this field has drawn its own line**. For anyone reporting scores as ratios, naming the reference machine is not an exotic demand but a long-standing default.

## How far can you trust numbers taken before silicon

Unpack the term pre-silicon once. It means before the chip is actually fabricated. The design and the layout are finished, nothing has come out of a fab, and performance and power are values estimated in simulation. That all of Frostbite's numbers come from that stage is something the post states first: **"These are, of course, still pre-silicon power numbers,"** and in the same paragraph, **"over multiple tapeout loops, ASL models can be correlated to true post-silicon, production power numbers"**, meaning several rounds of fabrication are needed before the models line up with measurement.

How far off the estimation tool started is also something the company wrote first. Arcmodel, the power estimation model, was off **"in the worst case by almost 250%"**. The calibration procedure iterates until the RTL and the model agree, and the stopping rule is **"it repeats this process until the RTL and Arcmodel agree to within 5%"**, until the two fall within 5% of one another. After calibration the post reports measured error under 6% in the worst case and around 1.5% at the median.

Keep the 5% and the 6% apart while reading. The 5% is the threshold for stopping the iteration; the under-6% figure is the worst error that actually remained once calibration finished. Writing that the model came within 5% after calibration would turn a stopping rule into a result.

One wrinkle: when that 250% applies is inconsistent within the post itself. The prose reads as the error before calibration began, while the figure caption carrying the same number reads as the value after one round of power calibration had already run. This is a small thing. The storyline of a large error narrowed down holds either way. What the mismatch does illustrate is the shape of the place where someone trying to retrace the work stops. When two spots in a document disagree about which moment a number belongs to, a reader outside has no basis for choosing between them.

### 4.1. What do 800,000 lines of Lean code guarantee?

The verification side is striking in scale. The company writes its contract with the system model Arcmodel in a formal specification language called ASL, and says that translates into roughly 800,000 lines of Lean code. Lean is a language for writing mathematical proofs a machine can check, and as noted above, one of the four works in the post's bibliography is the Lean paper.

The line count is large, but what that proof guarantees cannot be settled from the post's description alone. A reader on Hacker News asked exactly that. **"Does the proof correspond with the chip? Does it prove useful properties?"** Whether the proof corresponds to the actual chip, and whether it proves properties worth proving. When another reader summarized the work as the whole chip having been formally verified, a third answered in one line: **"Formally - but by LLM. In theory practice is the same as in theory."** Formally so, except that a model wrote the formalism. When the party writing the specification and the party checking compliance with it belong to the same lineage, verification counts only on the assumption that the specification is right.

### 4.2. The earlier automated CPU named the chip it was measured against

This is not the first announcement of a CPU designed by AI. Researchers at the Institute of Computing Technology, Chinese Academy of Sciences, posted a paper in June 2023 titled **"Pushing the Limits of Machine Design: Automated CPU Design with AI"**. The abstract says an industrial-scale RISC-V CPU was generated automatically **"within only 5 hours"**.

The case is raised here for a reason other than ranking the two. On performance there is no contest. That chip's claim was far smaller. What makes it interesting is what accompanied the smaller claim.

The 2023 paper put the process node, the date the design went to the manufacturer, the operating clock after packaging, the logic gate count, the operating system booted, the benchmark run and the product name of the chip it was measured against into its body text. Frostbite documents process, clocks and area to a comparable standard. Where its account stops is two cells: the counterpart it was measured against, and the yardstick used. The table below sets what each announcement committed to paper side by side, item by item.

| Item | Automated CPU, 2023 paper | Frostbite |
| --- | --- | --- |
| How far it got | Sent for fabrication at 65 nm, December 2021 | Final layout, pre-silicon |
| Operating clock | 300 MHz after packaging | 800 MHz synthesis · 500 MHz final layout |
| Scale | More than 44 million logic gates | 16 tiles · four-tile cluster at 0.792 mm² |
| What was run on it | Linux kernel 5.15 · SPEC CINT 2000 | 25 workloads assembled in house |
| Measured against | Intel 80486SX | Withheld for legal reasons |
| Yardstick used | Dhrystone | Per-watt on in-house workloads |

The axis of comparison is disclosure, not performance. Figures and quotations in the left column come from the paper's body text; the right column comes from the primary post. The name QiMeng appears nowhere in the 2023 paper — it was attached later.

The paper's own sentences read as follows. **"We verify our output netlist on the FPGAs and tape out the chip with 65nm technology."** **"The automatically designed CPU was sent to the manufacturer in December 2021."** **"the RISC-V CPU has more than 44 million logic gates."** And on performance, **"On Dhrystone, the performance of generated CPU is comparable to that of the human-designed Intel 80486SX CPU."** A named yardstick, Dhrystone, against a named chip from 1991.

Being comparable to a 1991 chip is no boast. That is what makes the contrast interesting. The smaller the claim, the sharper the counterpart; where the claim grew, that cell went blank. A 2025 follow-up from the same lab tilts the slope further. The paper, which carries the name QiMeng-CPU-v2, reports roughly 380 times the performance of the earlier automated design and claims it is **"comparable to human-designed superscalar processors such as ARM Cortex A53"**. Yet neither the abstract nor the introduction mentions a tapeout, a process node or a clock. A slope where claims grow as silicon recedes looks less like one company's habit and more like the shape of the field.

### 4.3. The company also wrote down the comparisons it has not run

One more note on why this article stays clear of a prosecutorial register. Splitting the two scores, the 250% error in the power model, the pre-silicon condition — the post stated all of it first. On top of that the company listed the comparisons it has yet to run. The SPEC and PARSEC benchmarks, a comparison against larger out-of-order CPUs that reorder instructions as they execute, and multicore comparisons all sit on a list of work promised for **"the coming months"**. Its roadmap also names an FPGA-based software environment, a preliminary operating system, and the release of the RTL and the instruction set.

At the heart of verifiability here is a _not yet_ rather than a refusal. The one thing declined is the identity of the comparison core, and even there the reason given is a legal one. The rest sits on a schedule. An article that fails to hold that line is not being fair.

## The same questions were already in the comment thread on day one

Nothing this article has examined so far is a new discovery. On the day the post went up, one Hacker News thread gathered 683 points and 365 comments, and the same questions were already inside it. Standing that fact up as its own section is more accurate than tucking it away at the end. Every quotation below comes from a pseudonymous handle. Read them as questions raised in that room on that day, not as expert opinion.

Comments challenged the identity of the comparison target. One reader objected to the legal-reasons line itself, and another was blunter: **"I find the lack of details incredibly fishy."** And then, **"What legal reasons require you to not be able to disclose the CPU you are comparing against?"** What legal circumstance blocks disclosure of the CPU being compared against.

The absence of absolute values came up that day too. **"Their claims would be a lot more interesting if they provided some kind of absolute numbers to compare against."** The claims would read as far more interesting with absolute figures attached. The same reader quoted the post's **"silicon-proven"** phrasing and pointed out that the new design is the side without silicon. The asymmetry this article diagrams in section 3 had already been flagged in a single line on the day of publication.

Benchmark selection and overfitting drew several comments. The two readings transcribed in section 2 are among them, and the rest varied in texture. One noted the size of the workloads: **"the benchmarks chosen look small (e.g. json parsing with 4096 chars, mergesort with 1024 elements, fib(20))"**. Another pointed at their character: **"I note that the kernels they tested are computation-heavy tasks on essentially fixed- and small-sized working sets."** A third wrote that in-order CPU performance is **"very sensitive"** to benchmark selection and found the presented data less than convincing. Two lines put it most briefly: **"humans built the checker and picked the workloads"**, and, tying the score to the fact that the company designed its own instruction set, **"It's not especially hard to get chips that win in some metrics on some inputs, especially when you get to design the ISA."**

### 5.1. Lineage and silicon drew the same questions

Objections on technical lineage ran heavier still. There were questions about what separates this from the VLIW and EPIC families that failed badly in the early 2000s, comments invoking the Itanium precedent, a one-liner reading **"People keep rediscovering the same ideas and renaming it."**, and a comment raising the TRIPS dataflow design to ask **"Have authors compared interaction nets to the data flow machines? No."** Others wondered how interaction nets address Amdahl's law, and pointed at the cost of porting existing software. One reader called the bibliography thin enough that the post **"is begging to be ripped apart"**, and as counted in section 1, that observation was correct. The list has exactly four entries.

Reactions about the missing physical object gathered as well. Guesses that no chip exists, a comment calling the absence of fabrication **"the 'last 90%' of the work"**, a comment saying the conversation can happen once a CPU is actually built and used, and a question about how anyone can be confident it would run stably. Alongside them sat a reader who said they would wait for the instruction set release and that what had been done so far was already considerable.

One more thing to record. Across the full range read, no comment from anyone at Architect Labs turned up. That is not a universal claim that the company never responded, only that no company reply was visible in this thread. The questions gathered on the day of publication, and no answer was attached in that room.

### 5.2. Secondary coverage kept the conditions in its body and the number in its headline

The secondary coverage is worth a look too. Tom's Hardware ran the headline **"AI agents design an entirely new CPU architecture from scratch, startup claims — Frostbite posts 4.59x the performance per watt of an in-order core in pre-silicon tests"**. From scratch leads, but the same line carries the qualifier that this is a startup's claim and the condition that the tests are pre-silicon. The body was more precise still. It carried the four-tile cluster as the unit of comparison, the description of the comparison core as silicon-proven, and the fact that its identity was withheld for legal reasons.

So the secondary outlet can hardly be accused of flattening the facts. The drift happens in the headline, and the headline is also where numbers travel. A number with conditions attached does not move with its conditions. Only 4.59x stays in the title, while the unit of comparison it was taken over and the counterpart it was measured against stay in the body. Further downstream, aggregator sites lift the title alone and republish it.

Questions have never been in short supply. The anonymous baseline, the missing absolute values, the benchmark selection all came out as scattered one-line questions on the day of publication. What is short is somewhere to receive them: the identity of the comparison target, the kind of average, an absolute value beside the ratio. None of the three has been filled, which is why nobody outside can retrace the work today.

## Why Pebblous cares

What Pebblous sells is the work of establishing whether data is fit to use, not a model. Whatever you measure, something stands on the other side of the comparison, and a measurement cannot stand up when that something is blank. This post shows that structure with unusual clarity. However thoroughly the measured side is documented, a pseudonymous counterpart leaves the number saying nothing to anyone outside.

Frostbite is a case of documenting your own side in unusual depth. Area, process node and critical path length are all written down. The search set and the eval set were separated and both scores reported. Even a 250% error in the company's own power model made the page. Yet performance and power alone are values divided by one unnamed cell. That adds one more row to a data quality checklist: the identity of the baseline.

### 6.1. A split confirms generalization and leaves the choosing of tasks untouched

A discipline from machine learning crossing into chip design is worth reading about on its own. As section 2 showed, though, the range that discipline protects is narrow. What a split confirms is generalization within the tasks chosen, and bias in the choosing stays outside the split. When the same hand builds both sets under the same categories, the eval set is a fresh sample from the same distribution. When a standard kernel is run at one sixty-fourth of its size, the yardstick itself has shrunk.

Note clearly that this is a different kind of defect from evaluation data contamination. Contamination is the case where test items leak into the training side, and there is no evidence of that here. What is narrow here is the scope of the exam, not its cleanliness. Dividing the exam paper properly and checking whether the exam resembles the outside world are separate pieces of work. AI-Ready Data always asks about the second. The axis Pebblous set in writing about [reproducible data pipelines](/report/research-data-ai-ready-pipeline-2026/en/), and the axis it set in examining [pipelines that measure but cannot correct themselves](/report/autoresearch-blog-pipeline-comparison/en/), are the same one: whether the conditions of measurement, rather than its results, survive in the document.

### 6.2. Six things to put to your own report on Monday

Whether any regulation requires companies to document baseline specifications when reporting internal metrics is something this article could not establish. So it claims neither that such rules exist nor that they do not, and brings the point down into the form of questions. What section 3 established about SPEC's reporting rules, however, is a line that exists in the world. Disclosure sufficient for independent reproduction, estimates labelled as estimates, no estimation of energy metrics. What someone receiving an internal performance report can ask tends to follow that same line.

- The figure in this report that says so many times better — **better than what**? Is that what written down by name in the document?
- Is the baseline running under **the same conditions**? Same hardware, same data, same size, or merely a similar scale?
- Are the numbers **ratios only**? Is an absolute value in seconds or dollars or counts written down somewhere alongside?
- **Which average** is it? Arithmetic or geometric, and is there anywhere in the document where two yardsticks are mixed?
- Are evaluation data and development data separated, and **who chose each of them**?
- Where estimates are mixed in, **are they labelled as estimates**?

All six can be asked from the document alone, without running a model. When Pebblous wrote about [a different model topping every exam paper](/blog/csat-ai-benchmark-individual-scorecards/en/), the question hung on the side being graded. The cell added this time sits beside it. Not who did the grading, but against what the score was taken.

### 6.3. A better model will not fill these cells in

A closing word on what kind of problem this is. Writing the baseline into the document, recording who chose the evaluation set and how, putting an absolute value next to a ratio — none of that is solved by a better model arriving. It is standing clerical work on the record-keeping side, identical whether agents do the design or people do. The question Frostbite's scorecard poses sits one cell over from whether AI-designed output can be trusted. It is whether enough is written down for someone outside to judge. The material for that judgement accumulates on the reporting side rather than the design side.

**Separating fact from interpretation.** The figures and verbatim quotations in sections 1 through 4 are taken directly from Architect Labs' primary post. SPEC's reference machine and reporting rules come from spec.org documentation, the 1986 paper's bibliographic details from Communications of the ACM volume 29 number 3, and the figures on the 2023 and 2025 automated CPU designs from each paper's body text and abstract. The quotations in section 5 come from a full read of Hacker News item 50572503. The judgement that a check breaks when the unit of comparison and the kind of average go missing, the reading that claims grow as silicon recedes, and all of section 6 are interpretation added by Pebblous. What could not be confirmed is recorded too. Which average produced the 8.77x performance-per-area figure appears nowhere in the post, and the byline of the Tom's Hardware article could not be obtained. This article makes no guess at the identity of the comparison core. Whether any regulation requires baseline specifications in corporate reporting fell outside the scope of this research, so section 6.2 is written as questions rather than as a standard.

## References

Sources for the figures in this article, grouped by character. Entry 1 is the primary document this article stands on, and the performance-per-watt figures, areas, clocks, power model error and workload list all come from it. Entries 2 through 5 are the four works that post cites itself. Entries 6 and 7 are the external yardsticks of section 3, and entries 8 and 9 are the precedents of section 4.

### Primary — the announcement

- 1.Architect Labs, "Introducing Frostbite: A new CPU architecture discovered, designed, and verified end-to-end by AI" (18 November 2026, filed under Research, no individual author credited). [architectlabs.com/blog/frostbite](https://architectlabs.com/blog/frostbite) — source of 4.59x, 6.02x and 3.83x, the 0.792 mm² and 0.895 mm² areas, 7 nm, 800 MHz and 500 MHz, the 250% power model error, the 25-workload list, the TCPU description and the "For legal reasons" quotation. A company blog post rather than an academic paper, with no arXiv version confirmed.

### The four works that post cites

- 2.Lafont, Y. (1990). "Interaction Nets." POPL '90, pp. 95–108. [doi:10.1145/96709.96718](https://doi.org/10.1145/96709.96718) — origin of the computation model in section 1.1.
- 3.The Vine programming language. [vine.dev](https://vine.dev) · [github.com/VineLang/vine](https://github.com/VineLang/vine) (Apache 2.0) — third-party open source, not an Architect Labs project.
- 4.Tendrils (2026). "On Interaction Nets." [tendrils.co/blog/2026-04-26/on-inets](https://tendrils.co/blog/2026-04-26/on-inets) — a blog post by another company.
- 5.de Moura, L. & Ullrich, S. (2021). "The Lean 4 Theorem Prover and Programming Language." CADE 28, LNCS 12699, pp. 625–635. [doi:10.1007/978-3-030-79876-5_37](https://doi.org/10.1007/978-3-030-79876-5_37) — origin of the proof assistant in section 4.1.

### External yardsticks for benchmark reporting

- 6.Fleming, P. J. & Wallace, J. J. (1986). "How Not to Lie with Statistics: The Correct Way to Summarize Benchmark Results." Communications of the ACM 29(3), 218–221. [doi:10.1145/5666.5673](https://doi.org/10.1145/5666.5673) — basis of section 3.2. The conclusion that normalized ratios must be summarized with a geometric mean comes from here.
- 7.Standard Performance Evaluation Corporation. "SPEC CPU 2017 Overview" · "Run and Reporting Rules." [spec.org/cpu2017/Docs/](https://www.spec.org/cpu2017/Docs/) — source for the named reference machine in section 3.3 (Sun Fire V490 with 2100 MHz UltraSPARC-IV+ chips), the full-disclosure quotation and the rule against estimated energy metrics. Frostbite's numbers are unrelated to any SPEC submission.

### Earlier automated CPU designs

- 8.Cheng, S. et al. (2023). "Pushing the Limits of Machine Design: Automated CPU Design with AI" (Institute of Computing Technology, Chinese Academy of Sciences). [arXiv:2306.12456](https://arxiv.org/abs/2306.12456) (v1 21 June 2023 · v2 27 June) — the 65 nm process, December 2021 tapeout, 300 MHz, 44 million gates, Linux 5.15 and Dhrystone against the 80486SX in the left column of the section 4.2 table all come from the paper's body text. The name QiMeng, attached later, is absent from this paper's title.
- 9.Cheng, S. et al. (2025). "QiMeng-CPU-v2: Automated Superscalar Processor Design by Learning Data Dependencies." [arXiv:2505.03195](https://arxiv.org/abs/2505.03195) (v1 6 May 2025) — source of the roughly 380x figure and the Cortex-A53 comparison. The absence of any tapeout, process node or clock in the abstract was confirmed here.

### Outside reaction

- 10.Hacker News item [50572503](https://news.ycombinator.com/item?id=50572503) ("Frostbite: A new CPU architecture discovered, designed and verified by AI", 683 points · 365 comments, November 2026) — every quotation in section 5 comes from a full read of this thread. All commenters are pseudonymous handles.
- 11.Tom's Hardware, "AI agents design an entirely new CPU architecture from scratch, startup claims — Frostbite posts 4.59x the performance per watt of an in-order core in pre-silicon tests" (22 November 2026, estimated; byline unconfirmed) — source of the headline-versus-body contrast in section 5.2. The publication date is an estimate obtained via search, and the reporter's name could not be secured.

### Earlier Pebblous articles

- 12.[From Stored Research Data to AI Training Data](/report/research-data-ai-ready-pipeline-2026/en/) — drawn on in section 6.1 for the scope of generalization a split confirms.
- 13.[We Measure. We Just Don't Self-Correct Yet.](/report/autoresearch-blog-pipeline-comparison/en/) — drawn on in section 6.1 for whether measurement conditions survive in the documentation.
- 14.[Each CSAT AI Benchmark Crowns a Different Perfect Scorer](/blog/csat-ai-benchmark-individual-scorecards/en/) — drawn on in section 6.2 for the baseline-identity question.
