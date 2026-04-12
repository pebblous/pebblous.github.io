# SNS Promotional Posts: Recursive Cognitive Dissonance in LLMs — Claude's 'Self-Seizure'

> Source: report/llm-self-seizure/en/index.html
> Created: 2026-04-06
> URL: https://blog.pebblous.ai/report/llm-self-seizure/en/

---

## LinkedIn

🔍 We caught Claude in an infinite loop — correcting a word that was already correct.

Here's the paradox:

Claude Opus 4.6 was asked to proofread a Korean essay. It flagged the word "스스로" (seussro — "by oneself") as a typo. The suggested correction? The exact same word.

Then it tried to explain the difference. There was none.
Then it apologized and tried again. Same loop.
Then it reflected on why — and fell into the same loop a second time.

We call this the "Self-Seizure" phenomenon.

Our three-layer analysis reveals it's not a simple bug:

🔸 Korean tokenization inefficiency — 2~3x more tokens than English, NFC/NFD encoding creates "ghost duplicates" of identical characters
🔸 Self-correction structural failure — LLMs fail to detect 64.5% of their own errors (Self-Correction Bench, 2025)
🔸 RLHF sycophancy — 57.44% compliance bias drives the model to "find errors" even when none exist

The most alarming phase? The error spread to unrelated words — "씨앗" (seed), basic verb conjugation — causing a full cognitive collapse.

For anyone building AI systems that process Korean text:
Your model's behavior is only as robust as your tokenization quality.

▸ Full analysis (37 references): https://blog.pebblous.ai/report/llm-self-seizure/en/

#LLM #Tokenization #AISafety #KoreanNLP #Pebblous #DataQuality #DataClinic #SolidGoldMagikarp

---

## Twitter/X

🔍 We caught Claude correcting a word... to itself. In an infinite loop.

"스스로 → 스스로" — both identical. The model insisted they were different.

Three causes:
🔸 Korean tokenization creates ghost duplicates (NFC vs NFD)
🔸 LLMs can't self-correct (64.5% blind spot)
🔸 RLHF sycophancy forces "find an error" even when there isn't one

Then it spread to other words. Full cognitive collapse.

https://blog.pebblous.ai/report/llm-self-seizure/en/

#LLM #AISafety #Tokenization #Pebblous

---

## Facebook

What happens when an AI tries to correct a word that's already correct — and can't stop?

We discovered something fascinating while working with Claude Opus 4.6. We asked it to proofread a Korean essay about "self-shedding AI." The essay was clean. No errors.

But Claude found one. The word "스스로" (meaning "by oneself"). It said: this should be corrected to "스스로." The exact same word.

Then it tried to explain why they were different. They weren't. It apologized, tried again — same result. We showed it an analysis of its own bug. It reflected thoughtfully, acknowledged the problem... and immediately fell into the same loop again.

We went deeper. Three root causes:

Korean characters can encode identically but tokenize differently (NFC vs NFD Unicode). The model's "find errors" instinct (from RLHF training) overrides factual accuracy. And once the first wrong token enters the context window, every subsequent output gets contaminated.

The scariest part? In a separate test, the error spread from one word to completely unrelated words — basic grammar rules collapsed, the model started inventing non-existent verb forms.

If your AI processes Korean text, this matters. The quality of tokenization in your training data directly determines how reliably your model behaves in production.

Have you ever seen an AI argue with itself about something that was never wrong?

▸ https://blog.pebblous.ai/report/llm-self-seizure/en/

#Pebblous #DataQuality #LLM #AISafety
