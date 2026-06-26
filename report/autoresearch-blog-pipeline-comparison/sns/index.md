# SNS 홍보 글: 측정은 하는데, 스스로 고치지는 않는다

> 소스: report/autoresearch-blog-pipeline-comparison/ko/index.html
> 생성일: 2026-06-25
> URL: https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

Karpathy가 공개한 630줄짜리 파이썬 코드가 GPU 위에서 이틀간 700번 자기 코드를 고쳐, 사람이 20년간 놓쳐 온 결함을 대신 잡아냈다.

Ole Lehmann은 같은 루프를 코드가 아니라 Claude의 콘텐츠 스킬에 옮겼다. 에이전트가 스킬 프롬프트를 한 번에 하나씩 바꾸고 점수를 비교해 유지·롤백을 반복한 끝에, 카피 품질 통과율이 56%에서 92%로 올랐다고 보고했다(본인 자가보고). 그가 남긴 한 줄이 핵심이다. 좋은 자기개선은 좋은 프롬프트가 아니라 점수를 매기는 좋은 평가 함수에 달려 있다.

이 렌즈로 페블러스의 멀티 에이전트 파이프라인을 보면, 우리는 이미 평가 함수의 절반을 돌리고 있다. 한국어 문체를 채점하는 ko-prose-humanizer와 SEO 4계층을 검사하는 seo-check가 사실상 그 Judge다.

비어 있는 건 나머지 절반이다. 점수를 받아 스킬을 자동으로 변형하고, 나빠지면 되돌리는 루프, 그리고 골든 테스트셋이 없다. 측정은 하는데, 그 측정값으로 스킬이 스스로 나아지지는 않는다.

두 시스템은 경쟁이 아니라 상보 관계다. 발전 방향은 사람 컨펌을 없애는 쪽이 아니라, 사람이 보는 자리에 느낌 대신 정량 점수를 하나 더 얹는 데 있다.

▶ 전문: https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Autoresearch #LLMasJudge #프롬프트최적화 #멀티에이전트 #ClaudeSkills #AIReadyData

---

## LinkedIn (EN)

Andrej Karpathy released 630 lines of Python that spent two days rewriting its own training code 700 times, surfacing fixes engineers had missed for two decades.

Ole Lehmann took the same loop and pointed it not at code but at Claude's content skills. An agent changed one prompt rule at a time, compared scores, and kept or rolled back automatically — until copy-quality pass rates climbed from 56% to 92% (his own self-report). The lesson he left behind: good self-improvement rests not on a better prompt but on a good evaluation function that scores the output.

Seen through that lens, Pebblous already runs half of one. Our ko-prose-humanizer, which grades Korean prose, and seo-check, which audits four layers of SEO, are effectively that Judge.

The other half is empty. There is no mutation-and-rollback loop that repairs the skill from its own scores, and no golden test set. We measure, but the skills that do the writing don't yet improve themselves.

The two systems aren't competing; they're complementary. Progress isn't about removing the human gate. It's about setting one quantitative score down where a person already looks.

▶ Read: https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Autoresearch #LLMasJudge #PromptOptimization #MultiAgent #ClaudeSkills #AIReadyData

---

## Twitter/X (KO)

Karpathy의 자기개선 루프를 코드가 아니라 글쓰기 스킬에 옮겼더니, 카피 통과율이 56%에서 92%로 올랐다(자가보고).

페블러스는 이미 그 평가 함수의 절반(ko-prose-humanizer·seo-check)을 갖고 있다. 비어 있는 건 점수로 스킬을 스스로 고치는 루프다.

▶ https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/ko/

#페블러스 #Autoresearch #LLMasJudge #프롬프트최적화

---

## Twitter/X (EN)

A self-improving loop that rewrites code, pointed at writing instead: copy pass rates went 56% to 92% (self-reported).

Pebblous already runs half that eval function. What's missing is the loop that fixes the skill from its own scores.

▶ https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/en/

#Pebblous #Autoresearch #LLMasJudge #PromptOptimization

---

## Facebook (KO)

지금 읽고 계신 이 글은, 이 글이 비교 대상으로 삼은 바로 그 파이프라인이 만들었습니다.

자기 자신을 앞에 세워 두고 "너는 어디가 비어 있느냐"고 물어본 셈입니다.

시작은 남의 이야기였습니다. Karpathy가 공개한 자기개선 루프. 코드가 자기 코드를 한 군데 고치고, 점수가 오르면 남기고 내리면 되돌리는 단순한 규율입니다. Ole Lehmann은 그 루프를 글쓰기 스킬에 옮겨, 카피 통과율이 56%에서 92%로 올랐다고 했습니다(본인의 자가보고입니다).

그가 남긴 한 줄이 오래 걸렸습니다.

"좋은 자기개선은 좋은 프롬프트가 아니라, 점수를 매기는 좋은 평가에 달려 있다."

그래서 우리 파이프라인을 다시 들여다봤습니다. 한국어 문체를 채점하는 도구도, SEO를 검사하는 도구도 이미 돌고 있었습니다. 평가 함수의 절반은 진작 우리 손에 있었던 겁니다. 비어 있는 건 나머지 절반, 그 점수를 받아 스킬을 스스로 고치고 나빠지면 되돌리는 루프였습니다.

"그럼 사람의 손을 떼야 하나?" 저희가 내린 답은 아니오였습니다. 사람이 확인하는 자리를 없애는 게 아니라, 그 자리에 느낌 대신 점수 하나를 더 얹는 것. 측정은 하는데 스스로 고치지는 못하는 시스템에서 다음 한 걸음은 어디일지, 요즘 자주 멈춰 생각합니다.

▶ 전문: https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/ko/

#페블러스 #데이터품질 #데이터저널리즘 #Autoresearch #LLMasJudge #DataClinic

---

## Facebook (EN)

The piece you're reading was produced by the very pipeline it sets out to compare.

Which means we sat our own system down and asked it a slightly uncomfortable question: where are you hollow?

It began as someone else's story. Karpathy's self-improving loop: code that edits its own code, keeps a change when the score rises and rolls it back when it falls. Ole Lehmann pointed that same loop at writing instead, and reported copy pass rates climbing from 56% to 92%. His own number, not an independent one.

One line of his stayed with me: good self-improvement rests not on a better prompt, but on a good way to score the output.

So we looked again at our pipeline. A tool that grades Korean prose, another that audits SEO — both were already running. Half of the evaluation function had been quietly in our hands all along. The empty half was the loop that takes those scores and repairs the skill itself, rolling back when things get worse.

And the obvious next thought, should we take the human out, isn't where we landed. The move isn't to remove the place where a person looks; it's to set one more number down beside them. Where the next step goes, for a system that measures but doesn't yet mend itself, is the question I keep returning to.

▶ Read: https://blog.pebblous.ai/report/autoresearch-blog-pipeline-comparison/en/

#Pebblous #DataQuality #DataJournalism #Autoresearch #LLMasJudge #DataClinic
