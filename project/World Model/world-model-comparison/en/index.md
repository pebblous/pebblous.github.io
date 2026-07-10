---
title: Comparing Three World Models for Next-Generation AI
subtitle: Jeff Hawkins, Yann LeCun, Fei-Fei Li
date: January 2, 2026
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Comparing Three World Models for Next-Generation AI

_Jeff Hawkins, Yann LeCun, Fei-Fei Li_

## Executive Summary

> [!callout]
> Large Language Models (LLMs) have demonstrated remarkable achievements in text generation, yet they face a fundamental limitation: they do not truly understand the physical world. This report provides a comparative analysis of the theories of three leading scholars who are driving 'World Models,' the emerging core of next-generation AI beyond LLMs.

> Jeff Hawkins reverse-engineers the neocortical structure of the brain, presenting a biological blueprint of distributed modeling across 150,000 cortical columns and reference-frame-based information storage. Yann LeCun critiques the inefficiency of pixel generation and proposes the JEPA architecture with energy-based models for efficient reasoning in abstract representation spaces. Fei-Fei Li combines 3D spatial understanding and generation into 'Spatial Intelligence,' leading a Sim2Real revolution in robotics through Marble and RTFM.

> The three theories are not mutually exclusive but complementary. When Hawkins' structural framework, LeCun's reasoning engine, and Li's environment generation converge, we move one step closer to a true AGI that understands and acts upon physical reality.

## 1. Introduction: Expanding Beyond Language to the World

Over the past decade, artificial intelligence (AI) technology has reached an unprecedented inflection point in intellectual history through the dramatic advancement of deep neural networks, particularly Large Language Models (LLMs). Generative AI, exemplified by OpenAI's ChatGPT series, has demonstrated near-human or even superhuman performance in understanding and generating text. However, the fundamental limitations of this language-centric AI are also becoming increasingly clear. **Text is merely a symbol that describes the world -- it is not the physical world itself**. While LLMs excel at predicting the next word by learning statistical correlations in vast text data, they lack causal inference -- understanding "why" things happen -- and spatial understanding of how their actions might affect the physical environment. The so-called "hallucination" phenomenon is an inevitable byproduct of AI relying on probabilistic plausibility rather than grounding itself in the laws of the real world [[1]](#ref-1).

Against this backdrop, the frontier of AI research is rapidly shifting from 'language models' to '**World Models**.' A world model is a cognitive framework that enables an agent (human or machine) to internally simulate the structure and operating principles of the external environment, predict the outcomes of actions, and formulate plans. It goes beyond merely classifying or generating data -- it is the core mechanism that enables the essence of intelligence: 'understanding' and 'survival.'

This report provides an in-depth analysis of the theories and technical approaches of three world-renowned scholars leading world model research: **Jeff Hawkins** (Numenta), **Yann LeCun** (Meta), and **Fei-Fei Li** (World Labs). Jeff Hawkins reverse-engineers the mechanisms by which the human neocortex models the world, grounded in neuroscientific findings. Yann LeCun critiques the inefficiency of current generative AI and proposes a cognitive architecture emphasizing prediction and planning in abstract representation space. Fei-Fei Li aims to fuse the digital and physical worlds through 'Spatial Intelligence' -- the ability to construct and manipulate 3D space beyond mere visual recognition.

These three perspectives may seem contradictory, but in reality they offer answers at different layers toward the grand goal of Artificial General Intelligence (AGI). This report aims to chart the direction for next-generation AI by closely comparing their theoretical backgrounds, the technical details of their architectures, and the blueprints for future AI that each model presents.

#### Jeff Hawkins

Founder of Numenta

Provides the structural foundation for AGI by reverse-engineering the neocortex through the neuroscience-based **Thousand Brains Theory**

#### Yann LeCun

Chief AI Scientist at Meta

Implements efficient reasoning and planning through **JEPA**, emphasizing prediction in abstract representation space

#### Fei-Fei Li

Founder of World Labs

Driving digital-physical world convergence through **Spatial Intelligence** via 3D spatial understanding and generation

## 2. Jeff Hawkins and Numenta: Biological Realism and the Thousand Brains Theory

Key Concept: Thousand Brains Theory

The brain is not a single hierarchical processing system but a distributed system where **150,000 independent cortical columns** each form their own world models and reach consensus through 'voting.' All information is stored through **reference frames (coordinate systems)**, which apply not only to physical objects but also to abstract concepts.

Jeff Hawkins is famous as the founder of Palm Computing, but his true passion over the past several decades has been to elucidate how the brain works and to build genuine intelligence based on those principles. His company, **Numenta**, has continued researching the translation of neuroscientific discoveries into mathematical algorithms, culminating in the '**Thousand Brains Theory**.'

### 2.1 The Core of the Thousand Brains Theory

Conventional neuroscience and AI theory assumed that the brain processes sensory input hierarchically to form a single object model at the top level. That is, visual information passes through V1, V2, V4, and so on until reaching the IT (Inferior Temporal) cortex to finally recognize an object as a 'cup.' However, Hawkins rejects this hierarchical integration hypothesis and proposes a **Distributed Modeling** hypothesis [[3]](#ref-3).

#### 2.1.1 Independence of Cortical Columns

According to Hawkins' theory, each of the approximately 150,000 **cortical columns** that make up the neocortex is a complete sensorimotor modeling system. Rather than only specific brain regions handling modeling, every cortical column independently learns models of the world based on its sensory input. For example, the five fingers holding a coffee cup each receive different sensory inputs, but the cortical columns connected to each finger independently attempt to form the model "this is a coffee cup" [[5]](#ref-5).

#### 2.1.2 Voting Mechanism and Solving the Binding Problem

How then do tens of thousands of independent models form a single unified perception? Hawkins explains this through '**voting**.' Cortical columns exchange information with each other through long-range connections in the neocortex.

1Sensory Input

Index finger: "smooth curve"  
Thumb: "handle"

2Individual Judgment

Index column: Cup? Ball? Apple?  
Thumb column: Cup? Kettle?

3Vote & Consensus

Common denominator = **"Cup"**  
-> Unified perception formed

As shown above, each cortical column makes its own judgment, then exchanges information through long-range neural connections to reach consensus [[6]](#ref-6).

This mechanism explains why the brain can function robustly even when damaged or in noisy environments. Even if some columns are damaged, accurate recognition remains possible through the voting of the remaining columns.

### 2.2 Reference Frames: The Coordinate System of Intelligence

The most revolutionary aspect of Hawkins' theory is the discovery that the fundamental format in which the brain stores and processes information is the '**reference frame**.' He argues that the brain's 'grid cells' and 'place cells' exist not only in the hippocampus but throughout the entire neocortex [[8]](#ref-8).

#### 2.2.1 Allocentric Representation

Just as the structure of a room does not change when we move within it, the brain models objects using an **object-centered (allocentric)** coordinate system rather than an observer-centered one.

- **What (Feature):** The feature sensed by sensory organs.
- **Where (Location):** Where that feature is located within the object's reference frame (Relative Location).

Layer 4 (L4) of the cortical column receives sensory input, while Layer 6 (L6) processes the current sensor's location information. The combination of these two forms the knowledge that "this object has this feature at this location" [[8]](#ref-8). Unlike conventional deep learning, which primarily learns pixel patterns (texture), this suggests that the brain fundamentally learns **structure and geometry**.

#### 2.2.2 Extension to Abstract Thought

Hawkins argues that this reference frame mechanism applies equally to understanding **abstract concepts** such as mathematics, language, and politics -- not just physical objects. Even the concept of democracy is stored in the brain as a structure where related sub-concepts occupy specific logical 'positions' and 'relationships' [[3]](#ref-3).

### 2.3 Sensorimotor Integration and Learning

Hawkins states that "_the act of thinking itself is a form of movement_." We do not passively observe objects; instead, we move our eyes (saccade), touch with our hands, and actively gather information [[4]](#ref-4).

- **Prediction:** The brain constantly predicts the next sensory input. If the prediction "when I move my finger to the right, I will feel the handle of the cup" is correct, the model is reinforced; if wrong, it is corrected (Predictive Coding) [[6]](#ref-6).
- **Action:** Therefore, action cannot be separated from learning. In Hawkins' model, intelligence is fundamentally **embodied**, and the sensory and motor systems are integrated into a single loop [[5]](#ref-5).

### 2.4 Sparse Distributed Representations (SDR)

At the foundation of Numenta's technology lies a data structure called **SDR**. It mimics the way neurons in the brain activate very sparsely. Out of 2,048 bits, only about 2% (40 bits) are set to 1 while the rest remain 0 [[11]](#ref-11).

- **Semantic Embedding:** Each bit in an SDR carries meaning. The more overlapping bits two SDRs share, the more semantically similar they are.
- **Robustness:** Even if half of the 40 active bits are lost due to noise, the remaining 20 can still reconstruct the full pattern. This explains the remarkable noise tolerance of the biological brain [[12]](#ref-12).

## 3. Yann LeCun and Meta: A Cognitive Architecture for Autonomous Machine Intelligence

Key Concept: JEPA (Joint Embedding Predictive Architecture)

Directly generating pixels or text is inefficient. JEPA performs predictions in an **abstract representation space**, discarding unnecessary details and learning only core causal relationships. Through Energy-Based Models (EBM), it can clearly predict multiple possible futures.

Turing Award laureate and Meta's Chief AI Scientist, Yann LeCun is one of the most vocal critics of the auto-regressive approach used by LLMs that currently dominate the AI industry. He argues that to achieve true AGI, what is needed is not a text generation model but a '**world model**' capable of reasoning and planning, and he has proposed **JEPA (Joint Embedding Predictive Architecture)** as his solution.

### 3.1 Critique of Generative AI: "LLMs Are Not World Models"

LeCun argues that the approach of sequentially predicting text or pixels has reached a fundamental limit [[1]](#ref-1).

- **Inefficiency:** Video generation models (e.g., Sora) may appear to simulate a 3D world, but this is merely statistical mimicry in pixel space. LeCun criticizes that "generating pixels to build a world model is as inefficient as computing every particle's position at the quantum level to learn physics" [[15]](#ref-15).
- **Error Accumulation:** Auto-regressive models feed their generated output back as input, causing initial errors to amplify exponentially and producing hallucinations (drift) that diverge from reality [[16]](#ref-16).
- **Data Bandwidth Gap:** Humans learn about the world by absorbing far more information through visual input (tens of megabytes per second) than through text (a few bytes per second). An AI trained solely on text cannot possess physical common sense [[17]](#ref-17).

### 3.2 JEPA (Joint Embedding Predictive Architecture): Prediction in Abstract Space

LeCun's solution is to **perform predictions in the representation space rather than the input space** [[18]](#ref-18).

#### 3.2.1 How JEPA Works

JEPA does not directly connect input `x` (current state) and `y` (future state).

1Encoder

Transforms inputs x, y into  
abstract vectors `s_x`, `s_y`

2Predictor

`s_x` + latent variable `z`  
→ predicts `s_y'`

3Non-generative

Predicts only in abstract  
space without pixel reconstruction

The encoder removes unnecessary details (background noise, etc.) and preserves only important information (object position, momentum) [[19]](#ref-19). The predictor forecasts future states based on the current state and latent variables, and crucially, JEPA operates solely in abstract space without reconstructing pixels.

#### 3.2.2 Energy-Based Models (EBM)

The theoretical foundation of LeCun's approach is EBM. Learning proceeds by minimizing the 'energy (incompatibility/cost)' between two states (input and prediction).

- **Compatibility:** If observed data `x` and `y` are physically compatible, a low energy is assigned; impossible situations receive high energy [[20]](#ref-20).
- **Uncertainty Management:** The future is not deterministic (stochastic). JEPA uses latent variable `z` to model multiple possible futures. Instead of predicting the average of all pixels to produce a blurry image like generative models, it can predict multiple plausible future states as clear vectors depending on the value of `z` [[18]](#ref-18).

### 3.3 Hierarchical Planning and Autonomous Agents

The autonomous intelligent system envisioned by LeCun consists of six modules [[18]](#ref-18).

1. **Configurator:** Sets the task objective.
2. **Perception:** Receives sensor input and estimates the current state.
3. **World Model:** Predicts future states based on actions.
4. **Cost:** Evaluates the value of states through intrinsic cost (e.g., collision avoidance) and a learned critic.
5. **Short-term Memory:** Stores the current situation and plans.
6. **Actor:** Generates action sequences that minimize cost.

Here, **Hierarchical JEPA (H-JEPA)** enables long-term planning by operating at different levels of abstraction. At the higher level, it handles macroscopic plans like "go to the airport," while at the lower level, it processes microscopic controls like "turn the steering wheel 10 degrees to the left" [[18]](#ref-18). This is an attempt to implement human **System 2** thinking -- slow, deliberate planning capability -- in AI [[23]](#ref-23).

### 3.4 I-JEPA and V-JEPA

Meta released **I-JEPA** for images and **V-JEPA** for video to validate this theory. I-JEPA masks portions of an image and predicts the 'semantic representation' of those parts using surrounding context, while V-JEPA predicts spatiotemporal features of unseen portions within the temporal flow of video. Both demonstrated exceptional sample efficiency in object recognition and understanding physical interactions without generating pixels [[20]](#ref-20).

## 4. Fei-Fei Li and World Labs: The Fusion of Spatial Intelligence and 3D Generation

Key Concept: Spatial Intelligence

AI is proficient with 2D images and text but lacks **3D spatial understanding and manipulation**. World Labs' **Marble** generates physically plausible 3D environments from text/images, providing a **Sim2Real** environment where robots can learn safely.

Fei-Fei Li is the figure who catalyzed the revolution in computer vision through ImageNet. She has now founded World Labs and championed the concept of **'Spatial Intelligence'** to expand the AI paradigm beyond "seeing" to "doing."

### 4.1 Spatial Intelligence: The Missing Piece of AI

Li points out that while current AI excels at language and 2D image generation, it is markedly deficient in the ability to understand and manipulate three-dimensional space. She characterizes this as "wordsmiths in the dark," highlighting the limitations of intelligence that lacks a sense of physical reality [[24]](#ref-24).

- **Definition:** Spatial intelligence is the ability to connect "imagination, perception, and action." It encompasses understanding depth, distance, physical interactions, and temporal changes in 3D space [[26]](#ref-26).
- **Evolutionary Perspective:** The intelligence of living organisms evolved through visual perception and environmental interaction. Just as the Cambrian Explosion began with the emergence of 'eyes,' the next evolution of AI will stem from the ability to understand 3D space [[24]](#ref-24).

### 4.2 Marble: A Large World Model (LWM)

World Labs' first product, **Marble**, is a generative world model that takes various inputs such as text, images, and video to generate complete 3D interactive environments [[27]](#ref-27).

#### 4.2.1 Explicit 3D Representation

Unlike LeCun's JEPA, which aims for internal abstract representations, Marble generates **explicit 3D assets** that users can explore and interact with.

- **Gaussian Splats:** Marble represents 3D scenes as collections of numerous semi-transparent particles (Gaussians), enabling real-time photorealistic rendering [[27]](#ref-27).
- **Meshes & Colliders:** Beyond visual representation, Marble also generates collider meshes that physics engines can recognize. This means the generated world is not merely a background image, but a physical space where robots or game characters can walk around and collide with objects [[29]](#ref-29).

#### 4.2.2 Innovation in Generation Technology: Separating Structure from Style

Marble takes an approach of separating structure from style to address the chronic problem of 'uncontrollability' in generative AI.

- **Chisel (Sculpting Mode):** Users place basic 3D structures (boxes, planes, etc.), and the AI overlays textures and details matching the text prompt [[27]](#ref-27).
- **Multimodal Input Integration:** When multiple photos or videos are provided as input, they are stitched together and reconstructed into a single coherent 3D space. This has immediate utility in real estate, architecture, game level design, and more [[31]](#ref-31).

### 4.3 RTFM (Real-Time Frame Model): A Learned Renderer

The recently released **RTFM** demonstrates yet another approach different from Marble. Rather than generating explicit 3D geometry (meshes, etc.), it is a system where the **neural network itself implicitly remembers and renders the 3D world** [[32]](#ref-32).

- **How It Works:** RTFM learns from video data and predicts new viewpoints of input images. It is a transformer-based auto-regressive model, but possesses prior knowledge of 3D Euclidean space, maintaining 'spatial consistency.'
- **Context Juggling:** To prevent memory explosion when exploring large-scale worlds, it dynamically retrieves only frames relevant to the current viewpoint, maintaining persistence. This technology is regarded as a bridge between LeCun's 'abstract simulation' and Li's 'visual generation.'

### 4.4 The Robotics and Sim2Real Revolution

Li's vision ultimately points toward robotics. Training robots in the real world is slow and dangerous. The **Sim2Real** strategy -- training robots in infinite, diverse 3D simulation environments (Sim) generated by Marble and then transferring them to reality (Real) -- is considered the key to solving the data bottleneck in robotics [[29]](#ref-29).

## 5. Comparative Analysis: Convergence and Divergence of Three Theories

While all three scholars' theories share the goals of 'overcoming current AI limitations' and 'understanding the physical world,' they exhibit clear differences in their approaches and ontological perspectives.

### 5.1 Comparison Summary Table

The table below compares the world model theories of the three scholars across seven key criteria. It provides an at-a-glance view of how each approach differs in its core architecture, data representation, stance on generation, physics implementation, and ultimate goals.

| Comparison Criteria | Jeff Hawkins | Yann LeCun | Fei-Fei Li |
| --- | --- | --- | --- |
| Core Theory | Thousand Brains Theory | Autonomous Machine Intelligence (JEPA) | Spatial Intelligence |
| Primary Architecture | Reference Frames & Cortical Columns (SDR) | Joint Embedding & Predictor | Generative 3D Models (Marble, RTFM) |
| Definition of World Model | Thousands of sensor-location models distributed across cortical columns | A state prediction simulator in abstract representation space | Explicit 3D environments capable of physical interaction |
| Data Representation | Sparse Distributed Representations (SDR), Grid Cells | High-dimensional Embedding Vectors (Latent Representations) | Gaussian Splats, Meshes, Neural Rendering |
| Generation | Generation for internal prediction (Predictive Coding) | Against pixel generation (inefficient, hallucination risk) | Active generation (Generative AI) for spatial construction |
| Physics Implementation | Structurally acquired through sensorimotor learning | Intuitively learned through energy function minimization | Integration with physics engines or 3D simulation provision |
| Goal | AGI through reverse-engineering the biological brain | AI with human-level reasoning/planning capabilities | Digital-physical fusion and robotics ecosystem |

************************************************************************

### 5.2 Debate 1: Representation -- Concreteness vs. Abstraction

**Hawkins vs. LeCun:** Hawkins believes the brain actually possesses geometric structures (reference frames) akin to 'maps.' Information is stored in conjunction with 'location.' LeCun, in contrast, argues that information should be compressed into a mathematically efficient 'abstract space.' However, the way latent variables (`z`) in LeCun's JEPA handle spatial uncertainty is functionally similar to how Hawkins' voting mechanism resolves uncertainty.

**Li vs. LeCun:** LeCun views directly generating pixels or 3D coordinates as "wasteful." Intelligence, he argues, does not require drawing an accurate 3D mesh of a cup -- only a 'conceptual understanding' sufficient to grasp it [[15]](#ref-15). Li, on the other hand, believes that "concrete 3D environments" are essential for robots to actually act. Li's Marble paradoxically provides robots with a 'safe training ground' through the very 'detailed pixel/voxel generation' that LeCun rejects.

### 5.3 Debate 2: The Role of Generation

**LeCun's Critique:** Video generation models like Sora do not understand physical laws -- they merely mimic them. They may serve as excellent engineering tools, but as models of intelligence, they are destined to fail.

**Li's Counter-Acceptance:** Li's model is generative, but it enforces 3D geometric consistency rather than being a statistical arrangement of 2D pixels. That is, Marble aims to technically overcome LeCun's critique (lack of physical understanding) by generating 'physically plausible' 3D structures rather than merely 'visually plausible' imagery [[31]](#ref-31).

**Hawkins' Perspective:** The brain constantly generates (predicts) inputs. However, this is not for external output but for verifying internal models. For Hawkins, generation is a means of learning, not an end in itself.

### 5.4 Complementarity: Convergence Toward AGI

These three theories are complementary rather than mutually exclusive.

1. **Structure:** Hawkins' **reference frame** theory provides a blueprint for the 'data structures' in which AI stores information. The attention mechanism of transformers can also be viewed as a form of implicit reference frame.
2. **Reasoning:** LeCun's **JEPA** is a 'reasoning engine' that operates on top of this structure. It discards unnecessary information and learns only core causal relationships to formulate plans efficiently.
3. **Environment:** Li's **Marble** provides the 'body and environment' for this AI to learn and interact with. We can envision a future where a robot equipped with JEPA (Brain) learns in a Marble-generated world (World) using Hawkins' sensorimotor approach.

## 6. Conclusion: The Future Opened by World Models

Jeff Hawkins, Yann LeCun, and Fei-Fei Li started from different points of departure, but their conclusions converge on a single insight: **"Intelligence is not about learning static data, but about internalizing the structure and causal relationships of a dynamic world."**

- **Jeff Hawkins** showed us how the brain **'maps'** the world. His theory paves the way for AI to go beyond simple pattern matching and structurally manipulate concepts the way humans do.
- **Yann LeCun** articulated how AI should think **'efficiently.'** His non-generative predictive model guides AI toward acquiring human-level common sense and planning capabilities without getting mired in unnecessary computation.
- **Fei-Fei Li** created a **'space to inhabit'** for AI. Her spatial intelligence technology extends digital intelligence into physical reality, blurring the boundaries between robotics and the metaverse.

#### Convergence of Three Theories Toward AGI

🧠

Layer 1

Structure

Jeff Hawkins

Mapping information via reference frames

⚡

Layer 2

Reasoning

Yann LeCun

Efficient prediction in abstract space

🌍

Layer 3

Environment

Fei-Fei Li

Learning and acting in 3D worlds

We are currently in a transitional period, moving from the era of text-based 'chatbots' to the era of 'agents' that understand and act upon physical reality. The world models being built by these three scholars will serve as the theoretical and technological pillars supporting this new era. The future of AI depends on how these three streams converge to give birth to **embodied, reasoning, structured intelligence**.

## Frequently Asked Questions (FAQ)

### What is a World Model?

A world model is a cognitive framework that allows an agent (human or machine) to internally simulate the structure and operating principles of the external environment, enabling it to predict the outcomes of actions and formulate plans. It goes beyond simply classifying or generating data, serving as the core mechanism that makes possible the essence of intelligence: 'understanding' and 'survival.'

### What is the core of the Thousand Brains Theory?

Jeff Hawkins' Thousand Brains Theory proposes that the neocortex's approximately 150,000 cortical columns each function as independent sensorimotor modeling systems. These columns exchange information and reach consensus through a 'voting' mechanism. The key insight is that the brain uses coordinate systems called 'reference frames' to store information, and this applies not only to physical objects but also to abstract concepts.

### What is the difference between JEPA and conventional generative AI?

Yann LeCun's JEPA (Joint Embedding Predictive Architecture) performs predictions in an abstract representation space rather than in the input space (pixels). While conventional generative AI sequentially predicts pixels, leading to inefficiency and error accumulation, JEPA removes unnecessary details and learns only core causal relationships. This enables more efficient reasoning and planning.

### Why is Spatial Intelligence important for robotics?

Fei-Fei Li's spatial intelligence is AI's ability to understand and manipulate 3D space. For robots to act safely in the real world, they must understand depth, distance, and physical interactions. World Labs' Marble generates infinite 3D simulation environments, allowing robots to learn safely before transferring to reality (Sim2Real), which is a key strategy for solving the robotics data bottleneck.

### Are the three world model theories mutually exclusive?

No, the three theories are complementary. Hawkins' reference frames provide the data 'structure,' LeCun's JEPA provides the 'reasoning engine,' and Li's Marble provides the 'environment.' Future AGI could be realized as a robot equipped with JEPA performing sensorimotor learning in a Marble-generated world using Hawkins' approach.

### What is the relationship between LLM hallucination and world models?

LLM hallucinations occur because AI relies on probabilistic plausibility rather than grounding in real-world laws. World models aim to fundamentally solve this problem by internalizing the causal relationships and structure of the physical world. Text is merely a symbol describing the world; for true understanding, world models are essential.

### What are Sparse Distributed Representations (SDR) and why are they important?

SDR is a data structure at the foundation of Numenta's technology that mimics how neurons in the brain activate very sparsely. Only about 2% (40 out of 2,048 bits) are activated. Each bit in an SDR carries meaning, and the more overlapping bits two SDRs share, the more semantically similar they are. Even if half of the active bits are lost, the remaining bits can reconstruct the pattern, making SDRs robust to noise.

## References

1. [1]
                            OpenAI's Video-Generating AI Is "Doomed to Failure," Says Meta's Top AI Scientist. Futurism.
                            [Link](https://futurism.com/the-byte/openai-video-ai-doomed-meta-scientist)
2. [2]
                            Yan Nuriyev. LLMs Were Just the Warm-Up. AI's Next Revolution is World Models.
                            [Link](https://whoisyan.com/llms-were-just-the-warm-up-ais-next-revolution-is-world-models/)
3. [3]
                            Jeff Hawkins. A Thousand Brains: A New Theory Of Intelligence. Numenta.
                            [Link](https://www.numenta.com/resources/books/a-thousand-brains-by-jeff-hawkins/)
4. [4]
                            A Thousand Brains. Internet Archive.
                            [Link](https://dn790007.ca.archive.org/0/items/artificial-intelligence/2021_a_thousand_brains-a_new_theory_of_intelligence-Jeff%20Hawkins%20%282021%29.pdf)
5. [5]
                            Christophe Pere. A Thousand Brains Theory: A Review. Medium.
                            [Link](https://medium.com/data-science/a-thousand-brains-theory-a-review-3ea6bbeeced0)
6. [6]
                            The Thousand Brains Theory of Intelligence. Numenta.
                            [Link](https://www.numenta.com/blog/2019/01/16/the-thousand-brains-theory-of-intelligence/)
7. [7]
                            A Framework for Intelligence and Cortical Function Based on Grid Cells in the Neocortex. Numenta.
                            [Link](https://www.numenta.com/assets/pdf/research-publications/papers/Companion-paper-to-Thousand-Brains-Theory-of-Intelligence.pdf)
8. [8]
                            The Thousand Brains Theory. Microsoft Research.
                            [Link](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/03/42804_The_Thousand_Brains_Theory.pdf)
9. [9]
                            The Thousand Brains Project. Numenta.
                            [Link](https://www.numenta.com/wp-content/uploads/2024/06/Short_TBP_Overview.pdf)
10. [10]
                            Numenta Publishes a New Theory on Sensorimotor Inference. Numenta.
                            [Link](https://www.numenta.com/press/2017/11/15/numenta-publishes-new-sensorimotor-theory-in-frontiers/)
11. [11]
                            Sparse Distributed Representations. Numenta.
                            [Link](https://www.numenta.com/assets/pdf/biological-and-machine-intelligence/BaMI-SDR.pdf)
12. [12]
                            The HTM Spatial Pooler—A Neocortical Algorithm for Online Sparse Distributed Coding. Frontiers in Computational Neuroscience.
                            [Link](https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2017.00111/full)
13. [13]
                            The HTM Spatial Pooler – a neocortical algorithm for online sparse distributed coding. bioRxiv.
                            [Link](https://www.biorxiv.org/content/10.1101/085035v1.full.pdf)
14. [14]
                            World Models vs. Word Models: Why Yann LeCun Believes LLMs Will Be Obsolete. Medium.
                            [Link](https://medium.com/state-of-the-art-technology/world-models-vs-word-models-why-lecun-believes-llms-will-be-obsolete-23795e729cfa)
15. [15]
                            Yann LeCun doubles down, claims Sora doesn't count. Reddit r/singularity.
                            [Link](https://www.reddit.com/r/singularity/comments/1atk19r/yann_lecun_doubles_down_claims_sora_doesnt_count/)
16. [16]
                            Yann LeCun: Intense Complaints Before Leaving the Company. 36氪.
                            [Link](https://eu.36kr.com/en/p/3605931513267201)
17. [17]
                            Highlights from Lex Fridman's interview of Yann LeCun. LessWrong.
                            [Link](https://www.lesswrong.com/posts/bce63kvsAMcwxPipX/highlights-from-lex-fridman-s-interview-of-yann-lecun)
18. [18]
                            A Path Towards Autonomous Machine Intelligence. Temple CIS.
                            [Link](https://cis.temple.edu/tagit/presentations/A%20Path%20Towards%20Autonomous%20Machine%20Intelligence.pdf)
19. [19]
                            What is Joint Embedding Predictive Architecture (JEPA)? Turing Post.
                            [Link](https://www.turingpost.com/p/jepa)
20. [20]
                            Deep Dive into Yann LeCun's JEPA. Rohit Bandaru.
                            [Link](https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/)
21. [21]
                            LeCun's 2022 paper on autonomous machine intelligence rehashes but does not cite essential work of 1990-2015. Jürgen Schmidhuber.
                            [Link](https://people.idsia.ch/~juergen/lecun-rehash-1990-2022.html)
22. [22]
                            Anil Jain. JEPA: LeCun's Path Towards More Human-Like AI. Medium.
                            [Link](https://medium.com/@anil.jain.baba/jepa-lecuns-path-towards-more-human-like-ai-9535e48b3c65)
23. [23]
                            Malcolm Lett. Critical review of LeCun's Introductory JEPA paper. Medium.
                            [Link](https://malcolmlett.medium.com/critical-review-of-lecuns-introductory-jepa-paper-fabe5783134e)
24. [24]
                            Viral! Fei-Fei Li's 10,000-Word Article Defines Next Decade of AI. 36氪.
                            [Link](https://eu.36kr.com/en/p/3548078081093508)
25. [25]
                            Are World Models the Future of AI? Blockchain Council.
                            [Link](https://www.blockchain-council.org/ai/world-models-future-of-ai/)
26. [26]
                            Building Spatial Intelligence: How World Labs is Creating the Next Frontier in AI. Radical VC.
                            [Link](https://radical.vc/building-spatial-intelligence-how-world-labs-is-creating-the-next-frontier-in-ai/)
27. [27]
                            Marble: A Multimodal World Model. World Labs.
                            [Link](https://www.worldlabs.ai/blog/marble-world-model)
28. [28]
                            New Marble AI Creates Entire 3D Worlds from Simple Text Prompts. Analytics Vidhya.
                            [Link](https://www.analyticsvidhya.com/blog/2025/11/marble-world-ai-creates-3d-worlds-from-text/)
29. [29]
                            Scaling Robotic Simulation with Marble. World Labs.
                            [Link](https://www.worldlabs.ai/case-studies/1-robotics)
30. [30]
                            Simulate Robotic Environments Faster with NVIDIA Isaac Sim and World Labs Marble. NVIDIA Developer Blog.
                            [Link](https://developer.nvidia.com/blog/simulate-robotic-environments-faster-with-nvidia-isaac-sim-and-world-labs-marble/)
31. [31]
                            evoailabs. World Models — Not Next, Current Frontier. Medium.
                            [Link](https://evoailabs.medium.com/world-models-not-next-current-frontier-547c5eeb1307)
32. [32]
                            RTFM: A Real-Time Frame Model. World Labs.
                            [Link](https://www.worldlabs.ai/blog/rtfm)
33. [33]
                            Pebblous. (2026). What Is a World Model? The AI Requirement That Prevents $2M in Losses. Data Clinic Blog.
                            [Link](https://blog.dataclinic.ai/world-model/)

### Original PDF Report

<!-- stat-card -->
**You can view the full content of this report in PDF format directly or download it for offline reading.** — [Download PDF](/project/World%20Model/source/%EC%B0%A8%EC%84%B8%EB%8C%80%20AI%EB%A5%BC%20%EC%9C%84%ED%95%9C%20%EC%84%B8%20%EA%B0%80%EC%A7%80%20%EC%9B%94%EB%93%9C%EB%AA%A8%EB%8D%B8%20%EB%B9%84%EA%B5%90_%20Jeff%20Hawkins%2C%20Yann%20LeCun%2C%20Fei-Fei%20Li.pdf)

### Related Posts

<!-- stat-card -->
**📚 World Model Series** — This article is part of the series curated by the [World Models](/project/WorldModel/en/) hub — the two paths AI takes to understand the world and predict the future, from intro to JEPA, Sora, and Genie, five articles in one place.
