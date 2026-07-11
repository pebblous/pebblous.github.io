# SNS 홍보 글: 생성된 영상은 물리적으로 옳은가

> 소스: report/world-model-physics-verification/ko/index.html
> 생성일: 2026-07-11
> URL(KO): https://blog.pebblous.ai/report/world-model-physics-verification/ko/
> URL(EN): https://blog.pebblous.ai/report/world-model-physics-verification/en/
> voice: LinkedIn/Twitter → sns-cover · Facebook → reflective · Medium → sns-cover(long)

---

## LinkedIn (KO)

NVIDIA Cosmos와 OpenAI Sora가 만든 영상은 눈으로 보면 흠잡을 데가 없다. 그런데 DeepMind의 Physics-IQ 벤치마크에서는 가장 뛰어난 생성 모델조차 실제 영상이 갖는 자연 변동성의 24.1점(100점 만점)에 그쳤다.

시각적으로 가장 그럴듯하다고 평가받은 Sora는 물리 이해에서 오히려 하위권으로 밀렸다. "보기에 그럴듯한 것"과 "실제 물리를 지키는 것"이 함께 오르지 않는다는 뜻이다.

그래서 산업은 생성된 영상에서 물리값을 도로 읽어내는 검증 파이프라인을 세우기 시작했다. SAM2로 물체를 분할하고, CoTracker로 궤적을, FoundationPose로 6DoF 자세를, Depth Anything으로 깊이를 픽셀에서 역추출해 정답과 대조하는 방식이다.

문제는 검증기 자신도 완벽하지 않다는 것이다. Physics-IQ Verified는 원 벤치마크 표본의 절반 이상이 오염돼 있었다고 밝혔다. 정답이 없는 영상에서 물리를 추측하는 근사이기 때문이다.

여기서 시뮬레이터의 자리가 갈린다. 시뮬레이터는 영상을 만드는 순간 궤적과 힘, 질량, 충돌이라는 물리 사건의 정답 장부를 함께 소유한다. 검증이 어려운 문제일수록, 검증할 필요조차 없는 정답을 대량으로 생성하는 능력이 데이터 해자가 된다. 페블러스의 PebbloSim이 서 있는 자리가 여기다.

▶ 전문: https://blog.pebblous.ai/report/world-model-physics-verification/ko/

#페블러스 #PebbloSim #PhysicalAI #합성데이터 #데이터품질 #Cosmos #Sora #YannLeCun

---

## LinkedIn (EN)

The most visually convincing AI video may be the least physically honest. On DeepMind's Physics-IQ benchmark, even the best generative model scored just 24.1 out of a possible 100 — the natural variability of real footage — while Sora, judged the most photorealistic, landed near the bottom on physical understanding.

Visual realism and physical accuracy, it turns out, do not rise together. So the industry began building verification pipelines that read physics back out of generated pixels: SAM2 segments the objects, CoTracker recovers trajectories, FoundationPose estimates 6DoF pose, and Depth Anything infers depth, all checked against ground truth.

The catch is that the verifiers are not clean either. Physics-IQ Verified found that more than half of the original benchmark's samples were contaminated. Reading physics from footage that never had an answer key is, at bottom, an approximation.

This is where simulators diverge. A simulator owns the ground-truth event ledger — trajectory, force, mass, collision — the moment it renders a frame. The harder verification becomes, the more valuable it is to generate answers that never need verifying. That is the ground Pebblous's PebbloSim stands on.

▶ Read: https://blog.pebblous.ai/report/world-model-physics-verification/en/

#Pebblous #PebbloSim #PhysicalAI #SyntheticData #DataQuality #Cosmos #Sora #WorldModel

---

## Twitter/X (KO)

NVIDIA Cosmos와 OpenAI Sora가 만든 영상은 보기엔 완벽하다. 하지만 Physics-IQ 벤치마크에서 최고 생성 모델의 물리 이해 점수는 100점 만점에 24.1점.

"그럴듯함"과 "물리적으로 옳음"은 다른 문제다. 시뮬레이터는 영상을 만들며 정답까지 함께 갖는다.

https://blog.pebblous.ai/report/world-model-physics-verification/ko/

#페블러스 #PhysicalAI #Cosmos #PebbloSim

---

## Twitter/X (EN)

NVIDIA Cosmos and OpenAI Sora make video that looks flawless. Yet on the Physics-IQ benchmark, the best generative model scored 24.1 out of 100 on physical understanding.

Looking real and obeying physics are not the same problem. A simulator owns the answer key the moment it renders a frame.

https://blog.pebblous.ai/report/world-model-physics-verification/en/

#Pebblous #PhysicalAI #Cosmos #PebbloSim

---

## Facebook (KO)

며칠 전 피드를 지나간 생성 영상 하나가 오래 남았습니다.

물이 쏟아지고 유리가 깨지는 장면. 눈으로는 어디 하나 흠잡을 데가 없었습니다.

그런데 문득 이런 생각이 들었습니다.

"이 장면은 정말 물리를 지키고 있는가? 그걸 우리는 무엇으로 확인하지?"

DeepMind가 만든 Physics-IQ라는 시험이 이 질문을 숫자로 바꿔 놓았습니다. 실제 영상이 자연스럽게 갖는 변동을 100이라 두면, 가장 뛰어난 생성 모델조차 24점 언저리에 머물렀습니다. 시각적으로 가장 그럴듯하다던 Sora는 오히려 물리 이해에서 뒤로 밀렸고요.

그래서 사람들은 생성된 영상을 거꾸로 읽기 시작했습니다. 픽셀에서 물체의 궤적을, 자세를, 깊이를 되짚어 정답과 맞대어 보는 일. 저는 이 흐름을 '사후 물리 감사'라고 부르고 싶었습니다. 다만 그 감사자마저 완벽하지 않아서, 검사에 쓰던 표본의 절반 이상이 오염돼 있었다는 사실도 함께 드러났습니다.

여기서 저는 방향이 하나 더 있다는 걸 떠올렸습니다. 정답이 없는 영상에서 물리를 추측하는 대신, 애초에 정답을 갖고 시작하는 길입니다. 시뮬레이터는 한 장면을 그리는 순간 궤적과 힘과 충돌의 장부를 함께 씁니다. 검증이 어려울수록, 검증할 필요가 없는 데이터를 만들 수 있다는 것이 조용한 힘이 됩니다.

페블러스가 PebbloSim으로 바라보는 자리도 여기입니다. 그럴듯한 영상을 한 장 더 만드는 일보다, 옳다고 말할 수 있는 데이터를 갖는 일에 대해 요즘 자주 생각합니다.

https://blog.pebblous.ai/report/world-model-physics-verification/ko/

#페블러스 #PebbloSim #PhysicalAI #Cosmos #DataClinic #DataGreenhouse #Pebbloscope

---

## Facebook (EN)

A generated clip drifted past my feed the other day and stayed with me.

Water spilling, glass breaking. To the eye, nothing was wrong with it.

And then a small question surfaced: "Is this scene actually obeying physics? And what would we use to check?"

DeepMind's Physics-IQ turned that question into a number. If you set the natural variation of real footage at 100, even the strongest generative model sat around 24. Sora, praised as the most photorealistic, slipped toward the bottom on physical understanding.

So people started reading generated video backwards — recovering an object's path, its pose, its depth from the pixels and holding them against the truth. I've come to think of this as a post-hoc physics audit. Though even the auditors are imperfect: more than half of the samples once used to test them turned out to be contaminated.

Which left me with a second path. Instead of guessing physics from footage that has no answer key, you can begin with the answer. A simulator writes the ledger of trajectory, force, and collision at the very moment it renders a frame. The harder verification becomes, the quieter the power of data that never needs verifying.

That is the ground Pebblous looks at through PebbloSim. Lately I think less about making one more convincing frame, and more about holding data we can actually call correct.

https://blog.pebblous.ai/report/world-model-physics-verification/en/

#Pebblous #PebbloSim #PhysicalAI #Cosmos #DataClinic #SyntheticData

---

## Medium (EN)
<!-- voice=sns-cover, long-form news tone. ~900 words. Published via sns/medium.html import. -->

### The Plausibility Trap: Why Generated Video Looks Real but Breaks Physics

A NVIDIA Cosmos clip of a ball rolling off a table looks flawless. So does an OpenAI Sora shot of water filling a glass. To the human eye, these world-model outputs are indistinguishable from a phone recording. And that is exactly the problem the Physical AI industry is now confronting: looking right and being physically right are not the same thing.

The gap is not a matter of taste. DeepMind and INSAIT built a benchmark, Physics-IQ, that measures whether a generated continuation of a scene actually respects gravity, momentum, and collision the way the real world does. They set the natural variability between two real recordings of the same event at 100. Against that ceiling, the best generative model scored 24.1. Sora, widely judged the most photorealistic system of its generation, ranked near the bottom on physical understanding. Visual fidelity and physical accuracy, the data shows, do not climb together.

### Reading physics back out of pixels

If generated video cannot be trusted to obey physics, the natural response is to audit it after the fact. A whole tooling stack has emerged to do exactly that — to recover physical quantities from raw pixels and compare them against what should have happened.

The pipeline is now fairly standard:

- **SAM2** segments and tracks each object across frames, isolating what is moving.
- **CoTracker** follows dense point trajectories, turning motion into measurable paths.
- **FoundationPose** estimates the full 6DoF pose of an object — position and orientation in space.
- **Depth Anything** infers per-pixel depth, giving the flat image a third dimension.

Stitch these together and you can extract a trajectory, a velocity, a pose curve, or a depth map from a video that came with no measurements attached. Projects like ObjectForesight have used this approach to mine more than two million trajectories from video — though roughly half of the raw extractions had to be thrown out as unreliable, a reminder of how lossy the process is.

This is the pixel-space lineage of world models. It stands in contrast to the physics-structured approach that Yann LeCun has championed with JEPA, which tries to learn an abstract, predictive representation of the world rather than paint every pixel. The industry is, in effect, running both experiments at once: generate the pixels and verify them later, or bake structure in from the start.

### The verifier is not clean either

Here is the uncomfortable turn. The tools built to check generated video are themselves approximations, and they carry their own errors. When researchers re-examined Physics-IQ with a more careful protocol — an effort dubbed Physics-IQ Verified — they found that more than half of the original benchmark's evaluation samples were contaminated in ways that distorted the scores.

Read that carefully. A benchmark designed to catch physically implausible video was itself producing unreliable measurements more than half the time. Post-hoc verification inherits a fundamental weakness: it is guessing physics from footage that never had an answer key. Every trajectory it recovers, every pose it estimates, is an inference that can be wrong — and when the ground truth is unknown, no one can say by how much.

### Begin with the answer

This is where the economics of the problem invert. If reading physics out of video is hard, lossy, and only ever approximate, the more valuable capability is to generate data whose physics never needs to be verified at all.

A physics simulator does exactly this. The moment it renders a frame, it already owns the full ledger of the event: the exact trajectory of every object, the forces acting on it, its mass, and the precise instant of each collision. There is no inference step and no error bar, because the ground truth was written first and the pixels came second. The evidence that this matters for training is direct: in RoboScape, models trained on physics-embedded synthetic data reached a 91% task success rate, close to the 92% achieved with real data — while generic generated video, with no guaranteed physics, left downstream systems obeying physical constraints only about 22% of the time.

That contrast is the strategic core of the whole field. As frontier world models get better at producing convincing pixels, the bottleneck moves downstream, to trust. And trust is cheapest to supply when you never had to reconstruct it — when the ground-truth event ledger existed before the first frame was drawn.

### Why this is where Pebblous looks

Pebblous approaches Physical AI from this side of the ledger. Its simulation platform, PebbloSim, generates synthetic data that carries its physics as first-class ground truth rather than as something to be recovered afterward. The bet is simple to state: in a world flooded with plausible-looking video, the durable advantage belongs to whoever can produce data that is correct by construction, at scale, and in effectively unlimited quantity.

The verification pipelines — SAM2, CoTracker, FoundationPose, Depth Anything — are impressive and necessary; they are how we audit the generated video we already have. But they are cleanup after the fact. The quieter, more structural move is to own the answer before the question is asked.

**[Read the full technical analysis →](https://blog.pebblous.ai/report/world-model-physics-verification/en/)**

#Pebblous #PhysicalAI #SyntheticData #WorldModel #Cosmos
