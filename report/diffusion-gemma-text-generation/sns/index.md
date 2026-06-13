# SNS 홍보 글: 확산 기반 텍스트 생성과 데이터 품질의 새 기준

> 소스: report/diffusion-gemma-text-generation/ko/index.html
> 생성일: 2026-06-11
> URL: https://blog.pebblous.ai/report/diffusion-gemma-text-generation/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

거의 모든 대형 언어 모델은 글을 왼쪽에서 오른쪽으로 한 토큰씩 써 내려간다. Google이 6월 공개한 실험적 오픈 모델 DiffusionGemma는 그 순서를 버렸다. 256토큰짜리 빈 캔버스를 한 번에 펼쳐 놓고, 흐릿한 초안을 또렷하게 다듬듯 블록 전체를 반복해서 정제한다. 이미지 생성 모델의 원리를 글자에 옮긴 방식이다.

헤드라인은 "최대 4배 빠르다"였다. H100에서 초당 1,000토큰 이상, 같은 조건의 AR Gemma 4가 약 300토큰에 머무는 것과 대비된다. 다만 이 수치는 한 사용자가 한 요청을 보내는 저동시성 조건의 이야기다. 여러 요청을 묶는 클라우드 서빙에서는 이점이 줄거나 사라진다.

속도는 공짜가 아니다. DiffusionGemma는 대부분의 벤치마크에서 동급 AR 모델에 뒤지는데, 격차가 작업마다 극단적으로 갈린다. 언어·일반지식은 5%포인트로 좁지만 다단계 수학추론에서는 19%포인트까지 벌어진다. 반대로 코드 빈칸 채우기나 문장 중간 편집처럼 앞뒤를 동시에 봐야 하는 작업에서는 오히려 확산이 자연스럽다.

데이터의 눈으로 보면 더 오래 남는 신호가 있다. 확산 계열 선행 모델 LLaDA는 15조 토큰을 쓴 모델과 대등한 점수를, 6분의 1인 2.3조 토큰으로 냈다. 인터넷 텍스트가 컴퓨트 공급을 못 따라가는 시점이 다가올수록, "같은 데이터에서 더 짜낸다"는 특성의 값은 올라간다. 아키텍처가 무엇이든 진단되지 않은 데이터 결함은 그대로 모델로 흘러 들어간다.

↗ 링크는 댓글에

#페블러스 #데이터품질 #DiffusionGemma #확산언어모델 #Gemma4 #GoogleDeepMind #LLaDA #LLM #생성형AI #DataClinic

---

## LinkedIn (EN)

Nearly every large language model writes the way we take dictation: one token at a time, left to right, never looking back. DiffusionGemma, the experimental open model Google released in June, drops that order. It lays out a blank 256-token canvas all at once and refines the whole block over repeated passes, the way a painter sharpens a rough sketch. It takes the mechanics of image diffusion and applies them to text.

The headline was "up to 4x faster": more than 1,000 tokens per second on an H100, against roughly 300 for a comparable autoregressive Gemma 4. But that figure holds for a single user sending a single request. Batch many requests together for cloud serving and the advantage narrows or disappears.

Speed is not free. DiffusionGemma trails its autoregressive sibling on most benchmarks, and the gap swings sharply by task: about 5 points on general knowledge, nearly 20 on multi-step math. Yet on code infilling and in-line editing, where context on both sides matters, diffusion is the more natural fit.

The signal that interests data people sits underneath. An earlier diffusion model, LLaDA, matched a model trained on 15 trillion tokens using just 2.3 trillion, one sixth the data. As internet text stops keeping pace with compute, getting more out of the same data becomes the scarce skill. Whatever the architecture, undiagnosed data defects flow straight into the model.

↗ Link in comments

#Pebblous #DataQuality #DiffusionGemma #DiffusionLM #Gemma4 #GoogleDeepMind #LLaDA #LLM #GenerativeAI #DataClinic

---

## Twitter/X (KO)

DiffusionGemma는 글을 한 토큰씩 쓰지 않는다. 256토큰 캔버스를 한 번에 펼쳐 놓고 전체를 반복 정제한다. 저동시성에서 최대 4배 빠르지만, 다단계 추론에서는 아직 AR 모델에 뒤진다.

더 오래 남는 신호는 따로 있다. 확산 계열 모델이 6분의 1 데이터로 대등한 성능을 냈다는 기록. 아키텍처가 바뀌어도 데이터 품질이 상한을 정한다.

https://blog.pebblous.ai/report/diffusion-gemma-text-generation/ko/

#페블러스 #DiffusionGemma #확산언어모델 #데이터품질

---

## Twitter/X (EN)

DiffusionGemma doesn't write one token at a time. It opens a 256-token canvas and refines the whole thing over repeated passes. Up to 4x faster at low concurrency, though still behind autoregressive models on multi-step reasoning.

The quieter signal: a diffusion model matched a rival on one sixth the data. Architecture changes; data quality still sets the ceiling.

https://blog.pebblous.ai/report/diffusion-gemma-text-generation/en/

#Pebblous #DiffusionGemma #DiffusionLM #DataQuality

---

## Facebook (KO)

"한 글자씩 쓰지 않고, 화면 전체를 흐릿하게 깔아 둔 다음 다듬어 간다."

DiffusionGemma가 글을 만드는 방식을 처음 읽었을 때, 글쓰기보다 그림 그리기에 가깝다는 생각이 먼저 들었습니다.

대부분의 언어 모델은 받아쓰기를 하듯 글을 씁니다. 첫 단어를 정하고, 그것을 조건으로 다음 단어를 정하고, 이미 쓴 글자는 되돌아보지 않습니다.

Google이 6월에 공개한 이 실험적 모델은 그 순서를 버렸습니다.

256토큰짜리 빈 캔버스를 펼쳐 놓고, 가려진 자리들을 동시에 추정하며 확신이 선 곳부터 채워 갑니다. 화가가 윤곽을 먼저 깔고 여러 번 덧칠해 형태를 또렷하게 만드는 일과 닮았습니다.

헤드라인은 "최대 4배 빠르다"였습니다. 그런데 그 숫자보다 오래 남은 것은 다른 기록이었습니다. 확산 계열의 한 선행 모델이, 여섯 배 많은 데이터를 쓴 모델과 비슷한 성적을 냈다는 사실이었습니다.

인터넷의 텍스트가 무한하지 않다는 것이 점점 분명해지는 지금, "같은 데이터에서 더 많이 배우는" 모델은 무엇을 뜻할까요.

저는 이 질문이 결국 데이터로 되돌아온다고 봅니다. 모델이 글을 왼쪽에서 오른쪽으로 쓰든 캔버스를 한 번에 채우든, 아무도 진단하지 않은 결함은 그대로 모델 안으로 흘러 들어갑니다. 달라지는 것은 기준이 사라지는지가 아니라, 그 기준의 어느 쪽을 먼저 보아야 하는지일지도 모릅니다.

#페블러스 #DiffusionGemma #확산언어모델 #데이터품질 #DataClinic

---

## Facebook (EN)

"It doesn't write one letter at a time. It lays the whole screen down as a blur, then sharpens it."

The first time I read how DiffusionGemma generates text, it felt closer to painting than to writing.

Most language models work like dictation. They pick the first word, then the next on the strength of the first, and never look back at what they have already set down.

The experimental model Google released in June abandons that sequence.

It spreads out a blank 256-token canvas, estimates the hidden positions all at once, and commits the ones it is most sure of first. Much like a painter who lays down a rough outline and returns to it again and again.

The headline was "up to 4x faster." But the number that stayed with me was a different one. An earlier diffusion model reached the same scores as a rival trained on six times as much data.

As it becomes clear that the text on the internet is not infinite, what does a model that learns more from the same data really mean?

I keep arriving back at the data itself. Whether a model writes left to right or fills a canvas, a defect no one has diagnosed flows straight into it. Perhaps what changes is not whether the standard disappears, but which part of it we have to look at first.

#Pebblous #DiffusionGemma #DiffusionLM #DataQuality #DataClinic
