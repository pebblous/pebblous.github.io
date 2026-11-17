---
title: NVFP4 Trains a Model for Less, and It Learns Rare Facts Last
subtitle: In an arXiv experiment, validation loss stays within about 2% of a 16-bit run, yet rarely seen facts need 1.3 to 1.5 times as many appearances
date: 2026-11-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# NVFP4 Trains a Model for Less, and It Learns Rare Facts Last

_In an arXiv experiment, validation loss stays within about 2% of a 16-bit run, yet rarely seen facts need 1.3 to 1.5 times as many appearances_

## Executive Summary

> [!callout]
> A 4-bit number format cuts the compute and memory a model needs to train from scratch, and an experiment posted to arXiv finds that the cost of the saving lands on the facts that appear rarely. Chang Lu and Mengjiao Zhang, two researchers with no institutional affiliation, submitted it on 9 November 2026. They pretrained the same transformer twice, once in NVIDIA's 4-bit format NVFP4 and once in the widely used baseline BF16, and then asked each model for attributes written into fictional biographies: a birth date, a birth city, a job.

> The validation loss came out almost the same, 0.1% to 0.9% apart on synthetic biographies alone and around 2% apart once web text was mixed in. Yet reaching the same level of recall took 1.32 times as many appearances of that person on the NVFP4 side, and 1.52 times with web text mixed in. The familiar remedy of raising the learning rate to lengthen each step leaves about two-thirds of the penalty in place.

> Sections 1 through 5 take their numbers and quotations from the body and tables of this paper. The limits the authors set on themselves are carried at the end of Section 5. Section 6, which reads the result as a data-preparation problem, is the interpretation of Pebblous.

### Key Numbers

The first two are scorecards from the same training run. One reads the average, and the other counts rare facts on their own. The last two show how much of that gap each of the two remedies gave back.

Source: [arXiv:2611.12832](https://arxiv.org/abs/2611.12832), body text and tables.

<!-- stat-card -->
**0.1–0.9%** — Validation loss gap between NVFP4 and BF16 — Synthetic biographies, under 1% on every seed

<!-- stat-card -->
**1.32×** — Exposures needed to reach the same recall — The figure widens to 1.52× once web text is mixed in

<!-- stat-card -->
**About two-thirds** — Share of the cost a higher learning rate does not remove — The part where the gradient signal-to-noise ratio falls

<!-- stat-card -->
**60% vs 42%** — Loss gap and exposure-cost gap closed by the mitigation recipe — Recovery measured by loss runs ahead of recovery in fact acquisition

## One Model, Two Number Formats

NVFP4 is the 4-bit floating-point format NVIDIA built for its Blackwell generation of accelerators. Sixteen values form one block, each value is written in 4 bits, and a scale stored separately for every block restores the range those values can span. Four times as many numbers fit in the same memory, and matrix multiplication speeds up by about as much. That is why low-precision training comes up so often now.

This is a different matter from inference-side quantization, where the weights of a finished model are shrunk to 4 bits afterwards. For inference, NVFP4 already sits close to the default on Blackwell. The experiment here is about training in 4-bit arithmetic from the first character to the last, and that side remains an open question in the industry.

The study left both the model architecture and the data untouched and ran the same training twice with only the number format changed. The transformer is an ordinary build with RMSNorm, RoPE and SwiGLU, in three sizes of 12M, 40M and 100M parameters. The main experiments ran at 40M. BF16 is the baseline, and FP8 and MXFP4 stand in the same comparison as secondary formats.

Dropping to 4 bits did not mean leaving the error alone. The NVFP4 configuration used here includes stochastic rounding, which picks the rounding direction by chance, and a random Hadamard transform inserted into the weight-gradient computation. Both are common devices for trimming error in low-precision training. Every number that follows was measured with those devices switched on.

The training data comes in two sets. One is a corpus of fictional biographies, carried over from the design of earlier work that measured how much knowledge a model holds. Each person carries six attributes: a birth date, a birth city, a university, a major, an employer and a work city. Some people appear only once across the whole run and others appear 256 times. Spreading the exposure counts over nine bins from 1 to 256, in powers of two, is the central device of this experiment. Depending on the model size, between 9,100 and 68,000 people go in. The second set scatters 20,000 of those biographies through FineWeb-Edu web text, where the biographies account for 7.2% of 1 billion tokens, or 72 million.

The amount of training was fitted to the model size as well. The synthetic-biography runs went from 0.7 to 5.1 tokens per parameter, and the web-text runs sat at around 24 tokens per parameter. How many tokens per parameter a run gets is itself one of the axes along which the low-precision cost changes.

> [!callout]
> Measurement works by sampling 200 people from each bin, prompting for an attribute, and checking whether the first answer token is right. The paper calls that proportion recall. Because the exposure counts were planted by hand, how much of a fact survives after being seen a given number of times can be counted bin by bin, and a place that a single average loss never shows becomes visible.

## The Exposure Multiplier, Measured Three Ways

This paper produces one central number. To reach the same level of recall, how many times more often does a fact have to be shown on the NVFP4 side? The authors call it the exposure multiplier, compute it at nine recall levels from 20% to 80%, and combine the nine as a geometric mean.

| What was held equal in the comparison | Synthetic biographies | Biographies mixed into web text |
| --- | --- | --- |
| Validation loss gap | 0.1–0.9% | 1.9–2.1% |
| Exposure multiplier at matched training tokens | 1.32× (1.16–1.50) | 1.52× (1.35–1.71) |
| Exposure multiplier at matched validation loss | 1.25× (1.13–1.38) | 1.22× (1.10–1.36) |
| Exposure multiplier with both sides evaluated in BF16 | 1.26× | 1.30× |

▲ Figures in parentheses are 95% intervals. | Source: [arXiv:2611.12832](https://arxiv.org/abs/2611.12832), body text

The third row heads off one objection in advance. Matching the training budget by token count can be called unfair to the low-precision side, so the comparison was redrawn at the points where the validation loss is equal. 1.25× and 1.22× remain. Two models held level on the average still part company on rare facts.

The fourth row answers a doubt about the evaluation itself. The gap could be an artifact of shaving numbers at evaluation time, so both models were read again through BF16 matrix multiplication. The multiplier barely moved, at 1.26× and 1.30×. The penalty had already formed during training rather than at the moment the answer is read.

The gap does not widen evenly across recall levels. In close to half the settings, the multiplier at the 30% level ran about 1.25 times the multiplier at the 70% level. The further a fact is from being learned, which is to say the more rarely it appeared, the heavier the low-precision penalty. That comparison is the ground for the rare facts named in the paper's title.

## Where the Weight of the Loss Sits

A loss that moves by less than 0.5% while recall parts by 30 points sounds at first like a contradiction. The paper settles it with a proposition. The validation set draws people in proportion to their exposure frequency, so the people who appeared often take most of the token weight. Facts seen 256 times account for half of the validation loss, and the top two bins together account for three quarters.

The facts seen often are already fully learned in both formats. Broken out by frequency, the loss differs between the two formats by 0.67 to 0.85 nats among facts that appeared 1 to 4 times, and by at most 0.07 nats, effectively nothing, among facts that appeared 32 times or more. The bins that hold the weight carry no difference, and the bins that hold the difference carry no weight.

▲ Pebblous original diagram. The bar lengths are schematic proportions, and all four figures come from the body of the paper.

> [!callout]
> The average loss writes down nothing false. Its weighting, what it counts heavily and what it counts lightly, is simply tied to the frequency distribution of the data. Once a large penalty on rare facts is diluted by sheer numbers against a penalty near zero on common facts, two different models sit under one identical loss curve.

## The Share That a Longer Step Does Not Buy Back

There is a familiar account of why low-precision training costs something. Error mixed into the gradient inflates the denominator in Adam, the second-moment estimate, and the effective learning rate shrinks by that much. If the account holds, the remedy is simple: raise the learning rate by the same ratio.

The authors fixed the scale factors at 1.356 and 1.199 in advance and raised it. The average step came back, and the exposure cost did not go away. They describe the cost of low precision as two strands. One is a step-size cost, where each step shortens, and it fades as training proceeds. The other is a cost where noise mixes into the direction of the update itself and lowers the signal-to-noise ratio, and that one stays to the end of training and makes up about two-thirds of the total. A higher learning rate brings back only the first.

▲ Pebblous original diagram. The two bars are a schematic of the proportion, and "about two-thirds" is the paper's own figure.

### 4.1. Noise, Not the Number of Bits

To check whether the account holds, the authors applied the quantization in pieces. Quantizing only the forward pass moves the loss by 0.1% while the exposure cost becomes 1.18×. Quantizing only the backward pass gives 1.13×. Multiplied together they come to 1.33, which nearly coincides with the 1.32× measured for NVFP4 as a whole. That the multiplication works out means the forward error and the backward error do not overlap, and each adds its own cost on top.

A more direct check followed. Training in BF16 while adding nothing but zero-mean Gaussian noise of the same magnitude as the NVFP4 error reproduced almost the same cost. The variable is the amount of noise riding on the gradient rather than the 4-bit format itself. Using a single gradient variance ratio pulled from a checkpoint to predict the cost ranking of 17 settings gave a Spearman correlation of 0.96, with no fitting involved.

## The Mitigation Recipe Closes the Loss Gap First

NVIDIA released a run in which a 12-billion-parameter model, a transformer with Mamba-style blocks mixed in, trained in NVFP4 up to 10 trillion tokens, and published alongside it a recipe whose loss tracks an FP8 baseline almost exactly. The backward matrix multiplications run in FP8, the weight scaling is two-dimensional, and the last 20% of training returns to BF16 in a cooldown. This paper adapted that recipe to its own model sizes and held up the same ruler again. NVIDIA rested its claim of parity on the loss curve, and recall by frequency bin is what this paper picked up instead.

The validation loss gap closed by 60%. In the same setting the gap in log exposure cost came back by only 42%, and in the web-text condition by about an eighth, with a wide interval. The practical conclusion the authors draw is that a mitigation measured by loss overstates the recovery in actual fact acquisition.

Breaking the cooldown apart shows why. For facts whose exposures had already finished before the last 20% returned to BF16, the recall deficit changed by −0.003, which is to say not at all. Facts that appeared while the cooldown was running recovered 54% of their deficit. Once a history of low-precision training has accumulated, restoring precision later brings back almost nothing of what has gone by. The authors read this as a training-history effect, in which the shared circuits that carry recall settle into place later.

### 5.1. The Direction Holds in Other Settings

The ordering by precision came out as expected, with the cost growing as precision falls. FP8 sits at 1.11×, with a 95% interval that sometimes includes 1, NVFP4 at 1.32×, and MXFP4, which groups 32 values into a block, at 1.61× in the synthetic condition. In the 100M model the loss-matched cost grew as tokens per parameter rose, from 1.05× at 0.67 tokens to 1.22× at 2.3. Allowing each format its own best learning rate still left 1.20× to 1.37×, and switching the schedule to linear decay held at 1.26× and 1.42×.

The paper sets four limits on itself. The models reach 96.6M parameters and the training reaches 1 billion tokens, so the results cannot be read straight across to real pretraining runs that use hundreds of billions or trillions of tokens. The 4-bit matrix multiplications ran in software emulation rather than on hardware. The memorized material is fictional biography, which may behave differently from long-tail knowledge in the world. And what a model that learns rare facts late does to a live service was not tested here.

Having written that it was not tested, the authors still left one concern on the record. Knowledge of the entities, topics and languages that do not appear often in the training data may be less reliable.

## Why Pebblous Is Watching This Paper

This paper reads easily as hardware news. From where data work sits, a different part of it stays. A decision about the number format changed how many times the same fact has to be shown. That count belongs to the design of the data rather than to the model configuration. Which facts get planted how many times, how much duplication is allowed, how many extra epochs a rare item gets: all of it is settled while the data is being prepared.

Where the penalty landed is awkward too. A fact that appears once or twice is the hardest stretch to quality-control. The sample is too small for errors to surface, and even inside an evaluation set it carries so little weight that it leaves no trace on the scorecard. This experiment shows that same stretch reacting most sharply to the choice of precision. While the average metric held steady, the cost was being paid there and nowhere else.

Anyone weighing a move to low-precision training has three more things to put to the scorecard. Not one of them is about the shape of the model or its parameter count.

- Whether the evaluation set was drawn in proportion to frequency. If it was, the average it reports came mostly from the facts that appeared often.
- Whether any result breaks the frequency bins apart and measures them separately. Averaging a fact seen once together with a fact seen a hundred times in one cell erases the gap.
- Whether the exposure counts stayed as they were while the precision changed. More than a 1.2× gap survives even when the comparison is matched on loss, so changing the format is also a decision about the data budget.

Pebblous works to bring data into a state that AI can use, and the context carried alongside a value counts as a quality property there, not only the accuracy of the value. How many times a fact appears in the training data, and in how many copies from which source, has to travel with the value before an evaluation by frequency bin can be designed at all. Counting recall bin by bin was possible in this experiment only because the exposure counts had been planted by hand. In data without those markers, rare facts can fall behind with nothing left to show that they did.

That leaves one question. Does the loss curve in front of you count rare facts? If it does not, the flatness of that curve is not yet an answer about quality.

## References

### Primary Source

- 1.Lu, C. & Zhang, M. (2026). "[What the Loss Curve Misses: FP4 Pretraining Slows the Acquisition of Rare Facts](https://arxiv.org/abs/2611.12832)." arXiv:2611.12832.

### Academic Background

- 2.NVIDIA. (2025). "[Pretraining Large Language Models with NVFP4](https://arxiv.org/abs/2509.25149)." arXiv:2509.25149.
- 3.Allen-Zhu, Z. & Li, Y. (2024). "[Physics of Language Models: Part 3.1, Knowledge Storage and Extraction](https://arxiv.org/abs/2309.14316)." ICML 2024.
- 4.Allen-Zhu, Z. & Li, Y. (2024). "[Physics of Language Models: Part 3.3, Knowledge Capacity Scaling Laws](https://arxiv.org/abs/2404.05405)." ICLR 2025.
- 5.Kandpal, N. et al. (2022). "[Large Language Models Struggle to Learn Long-Tail Knowledge](https://arxiv.org/abs/2211.08411)." ICML 2023.
- 6.Zucchet, N. et al. (2025). "[How Do Language Models Learn Facts? Dynamics, Curricula, and Hallucinations](https://arxiv.org/abs/2503.21676)." COLM 2025.
