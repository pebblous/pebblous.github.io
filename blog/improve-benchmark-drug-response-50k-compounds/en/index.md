---
title: Cancer Drug Response AI Improved Only on Unseen Drugs
subtitle: Argonne National Laboratory added more than 50,000 compounds to the IMPROVE benchmark and retrained two models on the same test folds
date: 2026-08-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Cancer Drug Response AI Improved Only on Unseen Drugs

_Argonne National Laboratory added more than 50,000 compounds to the IMPROVE benchmark and retrained two models on the same test folds_

## Executive Summary

> [!callout]
> The claim that a model gets better when you feed it more data usually passes without being checked. An expanded benchmark that researchers at Argonne National Laboratory posted to arXiv on 11 August 2026 is a rare chance to take that claim apart axis by axis. They grew IMPROVE, the standard benchmark for drug response prediction, to 53,949 compounds and 5,455,444 drug-response measurements by integrating several sources around PharmacoDB, then trained the original and the expanded dataset side by side on the same test set.

> The results split by axis. On the setting that asks the model to predict drugs it never met during training, UNO's R² rose from 0.03 to 0.22, and in the hardest setting, where the drug and the cell line are both new, a negative number turned positive. The setting that deals with unseen cell lines stayed essentially where it was, moving from 0.60 to 0.58. The authors attach one caveat. Because 78% of the experiments in the expanded dataset come from a single source, NCI60, this experiment alone cannot separate whether the gain came from chemical diversity or from the dominance of that one source.

> This is a preprint that has not been peer reviewed. The authors also set down a limit of their own: the dataset holds six omics types, but this evaluation used only transcriptomics.

### Key Numbers

Put the origin of the added compounds next to the R² change in each setting, and the places where the numbers moved cluster on one side of the drug axis.

Source: [arXiv:2608.11444](https://arxiv.org/abs/2608.11444), Tables 1, 3 and 4

<!-- stat-card -->
**53,949** — compounds in the expanded set — 53,323 of them sit inside one source, NCI60

<!-- stat-card -->
**0.03 → 0.22** — R² on unseen drugs — UNO; GraphDRP flipped sign, from −0.11 to 0.12

<!-- stat-card -->
**0.60 → 0.58** — R² on unseen cell lines — nearly eight times more data left this axis unmoved

<!-- stat-card -->
**−0.26 → 0.08** — R² when both are new — GraphDRP; predictions worse than the mean became predictions

## The 50,000 Compounds Came From One Place

Drug response prediction is the problem of having a model guess in advance how many cancer cells will die when a given compound is applied to them. Drug discovery has held long-standing hopes for it, since candidates can be filtered before they reach the bench, but comparing results across papers has been hard. Each study cut its data differently, normalised it differently, and reported a different metric. IMPROVE is a framework that attacks that problem by unifying the data schema and the evaluation protocol first.

This study enlarged that standard benchmark. The training data in the original benchmark came from four families of cell-line screens: CCLE, GDSC v1 and v2, gCSI, and CTRPv2. The expanded version adds NCI60, PRISM, and FIMM as training sources, and it also brings in four studies of organoids grown from tissue taken from patients, organised under the same schema. Raw measurements and compound annotations were pulled from PharmacoDB through the PharmacoGx package and pushed through a single preprocessing flow.

What unification actually means shows up in that list of preprocessing steps. On the compound side, broken entries were stripped out of the SMILES strings, salts and counterions were removed, the strings were converted to canonical SMILES, and tautomers that differ only in notation were merged into one. On the cell-line side, names written differently in each source were mapped to Cellosaurus accessions so that the various names pointing at the same cell came together, and gene identifiers were aligned against the NCBI gene information table. Response values were not discarded as biologically unexplainable outliers but truncated at 200% viability, then fitted to a four-parameter logistic curve and summarised as the area under that curve.

Because the data went through this cleanup, the 55,282 compounds you get by adding up the rows of Table 1 shrink to 53,949 unique compounds. Identical compounds were counted once on the basis of structure rather than name. Splitting the added volume by source makes the picture sharper still.

| Source | When included | Compounds | Experiments |
| --- | --- | --- | --- |
| CCLE_2015 | in the original | 23 | 11,000 |
| CTRPv2_2015 | in the original | 299 | 214,276 |
| GDSC_2020 (v1) | in the original | 249 | 267,731 |
| GDSC_2020 (v2) | in the original | 157 | 182,560 |
| gCSI_2019 | in the original | 39 | 14,864 |
| NCI60_2021 | added in the expansion | 53,323 | 4,267,356 |
| PRISM_2020 | added in the expansion | 948 | 491,502 |
| FIMM_2016 | added in the expansion | 51 | 2,511 |
| Four patient-derived organoid studies | added in the expansion | 193 | 3,644 |
| Total (deduplicated) | expanded set | 53,949 | 5,455,444 |

Excerpted from Table 1 of arXiv:2608.11444. The compound total is a deduplicated count of unique structures, so it is smaller than the plain sum of the rows (55,282), while the experiment total equals the sum of the rows. The four organoid studies are grouped here from their individual rows.

Of the 53,949 compounds in the expanded set, 53,323 sit inside NCI60 alone, and 4.27 million of the 5.45 million experiments come from the same source. That is close to 99% by compound count and 78% by experiment count. The real content of the sentence "more than 50,000 compounds were added" is less that they were gathered evenly from many places, and more that the NCI60 screen the US National Cancer Institute has been running for decades was folded into the IMPROVE standard.

Add up the experiments in the five rows the original used for training, meaning CCLE, CTRPv2, GDSC v1 and v2, and gCSI, and you get roughly 690,000. The paper does not state that original total separately, so this is a sum over the rows of Table 1; set against the 5.45 million of the expanded set, the experiments available for training grew nearly eightfold.

Diversity on the cancer-model side is a different story. The deduplicated number of cancer models is 1,362, and NCI60, which single-handedly drove up the compound count, in fact carries only 85 cell lines. What actually holds up the cell-line count is GDSC (986 and 808) and CTRPv2 (845), both present from the original. Six omics types are in place: 1,907 gene-expression samples, 1,764 copy-number variation, 1,769 mutation, 894 protein, 946 miRNA, and 839 DNA methylation. Fewer of those samples actually connect to a drug-response measurement, which brings gene expression down to 1,354 and DNA methylation to 803. What the models actually saw in this evaluation, though, was only transcriptomics and chemical features.

## Only a Four-Way Split Shows Where the Gain Came From

Had the authors reported the effect of adding data as a single number, this paper would have little to talk about. Instead they split the test four ways, along two questions: was the drug on the exam seen during training, and was that cell line seen during training?

- **Mixed**: both the drug and the cell line were seen in training, and only their pairing is new. The easiest setting.
- **Drug-blind**: the drug on the exam was never seen during training.
- **Cancer-blind**: the cancer cell line on the exam was never seen during training.
- **Disjoint**: the drug and the cell line are both new. The strictest setting.

The settings that carry value for drug discovery are the second and the fourth. Predicting the response of a drug you already know well can be substituted, to a large degree, by looking up an experimental record; predicting the response of a compound nobody has ever tested cannot. Whether a model can push the relationship between chemical structure and activity beyond its training data shows up here.

For the comparison to hold, the two benchmarks have to sit the same exam. The authors built the evaluation folds of their ten-fold cross-validation from GDSC, CCLE, and CTRPv2 only. Those three sources are in both the original and the expanded set, so the exam can be held fixed while only the training data changes. NCI60, PRISM, and FIMM, newly brought in by the expansion, were used for training alone and never to define a test fold.

The four settings are not separately built exams; they fall out of one split. The authors randomly divided the unique drug identifiers and the unique cell-line identifiers appearing in those three sources into ten pieces each. In a given fold, experiments involving a held-out drug become the drug-blind exam, experiments involving a held-out cell line become the cancer-blind exam, and experiments involving both naturally remain as the disjoint exam. After that holding-out was done, 10% of the remaining experiments became the mixed exam and another 10% the validation set used for early stopping.

The handling of leakage is worth a look too. Once a fold decided to hold out a particular drug and cell line, every experiment in which that drug or cell line appeared was erased from training regardless of source. If the same compound survives in NCI60 under a different name, the expanded model would effectively be sitting the exam with the answers in hand, so without this step the improvements above would be hard to trust. Both models were trained on Argonne National Laboratory's 8-GPU cluster with the same splits and the same protocol.
