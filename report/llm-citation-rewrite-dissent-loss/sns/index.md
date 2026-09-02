# SNS 홍보 글: LLM이 다시 쓴 학술 인용에서 반박 절반이 사라졌다

> 소스: report/llm-citation-rewrite-dissent-loss/ko/index.html
> 생성일: 2026-09-03
> URL (KO): https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/ko/
> URL (EN): https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사람이 반박하려고 끌어온 인용 자리를 언어모델에게 다시 쓰게 했더니, 절반가량이 지지나 단순 언급으로 돌아왔습니다.

미국 노스이스턴대와 뉴욕주립 올버니대 연구진이 2025년 ACL·EMNLP·NAACL 논문 1,746편에서 인용 문장을 하나씩 통째로 가리고, 여섯 개 언어모델에게 같은 자리를 다시 쓰게 했습니다. 앞뒤 문장도, 섹션 이름도, 원래 인용을 몇 개 달았는지도 똑같이 줬습니다. 남는 변수는 무엇을 근거로 들고 어떤 태도로 쓸 것인가 하나였고, 여섯 모델이 같은 방향으로 움직였습니다.

빠져나간 반박은 한쪽으로만 흘렀습니다. 사람의 반박이 지지로 뒤집힌 비율은 12.5%에서 31.1% 사이입니다.

반대 방향인 지지에서 반박으로는 3.6%에서 7.6%에 그쳤습니다.

링크는 그대로 걸렸고 개수도 맞았습니다. 사라진 것은 정확도가 아니라 태도입니다.

빈자리를 채운 논문에도 규칙이 있었습니다. 사람은 반박할 때 가장 최신의, 가장 덜 인용된 논문을 끌어옵니다. 모델은 바로 그 자리에서 몇 년 더 오래된 논문을 골랐고, 지지할 때는 사람보다 1.3배에서 4.5배 더 많이 인용된 논문을 불러왔습니다. 이 연구가 처음 알려질 때 붙은 "반박 자리가 유명한 논문으로 채워졌다"는 요약은 절반만 맞습니다. 유명세 쪽 봉우리는 반박이 아니라 지지에 붙습니다.

반대 방향의 결과도 같은 실험에서 나왔습니다. 사람은 자기 자신이거나 직접 공저자인 논문으로 인용의 7~10%를 채웁니다.

모델은 0.5~1.6%에 머물렀습니다.

아는 사람 바깥까지 근거가 닿았다는 뜻이니 이 축에서는 개선입니다. 문제는 넓어진 도달과 옅어진 비판이 한 시스템 안에서 동시에 일어난다는 데 있습니다.

검색을 붙여도 달라지지 않았습니다. GPT-5.1에 실시간 웹검색을 물린 조건에서 반박 비중은 10.9%에서 10.2%로 움직였고, 맥락을 문단과 초록까지 넓혀도 마찬가지였습니다. 어긋남이 찾는 단계가 아니라 쓰는 단계에서 생긴다는 뜻이라, 검색기를 좋게 만들고 인덱스를 키우는 통상의 개선은 이 손실에 닿지 않습니다.

읽을 때 함께 볼 것도 있습니다. EMNLP 2026 채택본의 사전 공개판이고, 코퍼스는 영어권 자연어처리 학회 세 곳의 본트랙 논문뿐이며, 의도 라벨을 매긴 심판도 언어모델입니다. 사람 세 명과 대조한 일치도는 카파 0.60이었습니다.

인용에 태도를 적는 어휘는 2010년 CiTO에 이미 들어 있었습니다. 열여섯 해가 지난 지금도 OpenAlex에도 OpenCitations에도 그 칸은 없습니다. RAG가 답변에 다는 출처도, 사내 위키가 세는 문서 간 링크도 같은 자리에 있습니다. 링크의 존재는 기록되고, 링크의 태도는 기록되지 않습니다.

▶ 전문: https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #지식그래프 #RAG #인용편향 #LLM #CiTO #EMNLP2026

---

## LinkedIn (EN)

Ask a language model to rewrite the citation sentences a scholar wrote to push back on someone, and about half of them come back as agreement.

Researchers at Northeastern University and the University at Albany took 1,746 main-track papers from ACL, EMNLP and NAACL 2025, blanked out one citation-bearing sentence at a time, and asked six language models to write that same slot again. Each model got the sentence before and after, the section heading, and the number of citations the original had carried. One variable was left free: what to cite, and in what stance. All six moved the same way.

The disagreement that leaked out went in one direction only. Slots a human had written as disagreement flipped to support 12.5% to 31.1% of the time.

The reverse move, support turning into disagreement, ran 3.6% to 7.6%.

The links were still there and the counts matched. What went missing was not accuracy but stance.

The refills followed a pattern of their own. Humans reach for the newest and least-cited work when they push back. That is exactly where the models reached several years further back, and when they were supporting a claim instead they pulled in work cited 1.3 to 4.5 times more than the human had. The early summary of this study, that disagreement slots filled up with famous papers, is half right. The fame peak sits on support, not on disagreement.

The same experiment produced a result pointing the other way. Humans fill 7% to 10% of their slots with their own work or a direct co-author's.

The models stayed between 0.5% and 1.6%.

On that axis the citations reached authors outside the writer's own circle, which is an improvement. The difficulty is that the wider reach and the thinner criticism arrive inside one system at once.

Retrieval did not close the gap. With live web search attached to GPT-5.1 the contrasting share moved from 10.9% to 10.2%, and widening the context to the full paragraph and abstract left it in the same band. The divergence appears at the writing step, not the finding step, which is where the usual retrieval upgrades stop being relevant.

Read the caveats alongside the findings. This is the preprint of a paper accepted to EMNLP 2026, the corpus covers three English-language NLP venues, and the intent labels came from a model judge that agreed with three human annotators at kappa 0.60.

A vocabulary for recording stance has existed since 2010, in the Citation Typing Ontology. Sixteen years on, neither OpenAlex nor OpenCitations has a field for it. The sources a RAG answer attaches and the document links an internal wiki counts sit in the same position. The existence of a link is recorded. What the link was for is not.

▶ Read: https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #KnowledgeGraph #RAG #CitationBias #LLM #CiTO #EMNLP2026

---

## Twitter/X (KO)

자연어처리 논문 1,746편에서 인용 문장을 하나씩 가리고, 여섯 개 언어모델에게 같은 자리를 다시 쓰게 했습니다. 사람이 반박으로 쓴 자리 가운데 반박으로 남은 것은 절반가량이었습니다.

링크는 그대로 걸렸고 개수도 맞았습니다. 사라진 것은 정확도가 아니라 태도였습니다.

근거 그래프는 링크의 존재를 세고, 링크의 태도는 세지 않습니다.

▶ https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/ko/

#페블러스 #데이터품질 #인용편향 #지식그래프

---

## Twitter/X (EN)

Six models rewrote masked citation sentences from 1,746 NLP papers. Of the slots a human had written as disagreement, about half came back as disagreement.

The links were still there and the counts matched. What went missing was not accuracy but stance.

Evidence graphs record that a link exists. They do not record what it was for.

▶ https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/en/

#Pebblous #DataQuality #CitationBias #KnowledgeGraph

---

## Facebook (KO)

글 하나를 쓰다가 우리가 만든 도구를 처음으로 의심해 봤습니다.

이 블로그의 한국어 글을 지식그래프로 뽑는 도구가 있습니다. 발행 글 663편에서 노드 663개와 간선 3,182개가 나왔고, 그중 글이 글을 직접 링크한 간선이 778개였습니다.

간선 하나가 담는 필드를 열어 봤습니다. 출발점, 도착점, 직접 링크 여부, 참고문헌 겹침 수, 동시 인용 수, 가중치.

이 글이 앞선 글을 근거로 삼았는지, 반대 사례로 세웠는지, 그냥 배경으로 언급했는지를 적을 칸은 없었습니다.

그 확인을 하게 만든 논문이 있습니다. 자연어처리 학회 논문 1,746편에서 인용 문장을 하나씩 통째로 가리고, 여섯 개 언어모델에게 같은 자리를 다시 쓰게 한 실험입니다.

사람이 반박으로 쓴 자리 가운데 반박으로 남은 것은 절반가량이었습니다. 나머지는 지지가 되거나 단순 언급이 되었습니다. 링크는 그대로 걸렸고 개수도 맞았습니다.

빈자리를 채운 논문에도 규칙이 있었습니다. 사람은 반박할 때 가장 최신의, 가장 덜 인용된 논문을 끌어옵니다. 모델은 바로 그 자리에서 몇 년 더 오래된 논문을 골랐습니다.

반대 방향의 결과도 같은 실험에서 나왔습니다. 사람이 인용할 때 기대던 공저 인맥은 모델에게서 거의 사라졌습니다. 아는 사람 바깥으로는 오히려 더 멀리 닿았다는 뜻입니다.

그래서 이 연구는 좋은 소식과 나쁜 소식을 한 몸으로 내놓습니다. 인맥 편향이 비운 자리를 가시성 편향이 채웠습니다.

저는 이렇게 남은 링크를 '태도가 지워진 근거'라고 부르게 됐습니다.

"우리는 링크의 존재를 세고 있는가, 링크의 뜻을 세고 있는가?"

인용에 태도를 적는 어휘는 2010년부터 있었습니다. 열여섯 해가 지나도록 그 칸은 대체로 비어 있습니다. 어휘 설계가 잘못돼서가 아니라, 처음 한 번을 채우는 비용을 아무도 내지 않아서입니다.

페블러스가 이 논문을 오래 붙잡은 이유도 거기에 있습니다. RAG가 답변에 다는 출처도, 사내 위키가 세는 문서 간 링크도, 우리 지식그래프의 간선도 같은 성질을 갖습니다. 존재는 기록되고 태도는 기록되지 않습니다.

칸을 새로 만드는 일보다, 그 칸이 비어 있다는 것을 먼저 적어 두는 일이 앞에 있는 것 같습니다.

https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/ko/

#페블러스 #데이터품질 #데이터클리닉 #지식그래프 #RAG #CiTO #인용편향

---

## Facebook (EN)

While writing this piece I turned a tool of our own around and looked at it properly for the first time.

We run something that pulls this blog's Korean articles into a knowledge graph. Six hundred and sixty-three published articles came out as 663 nodes and 3,182 edges, 778 of which are one article linking directly to another.

Then I opened up what a single edge actually stores. Source, target, whether the link is direct, how many references the two share, how often they are cited together, a weight.

There is no field for whether this article leaned on the earlier one as evidence, set it up as a counterexample, or simply mentioned it in passing.

The paper that sent me looking is an experiment on 1,746 NLP conference papers. One citation-bearing sentence at a time was blanked out, and six language models were asked to write the same slot again.

Of the slots a human had written as disagreement, about half came back as disagreement. The rest turned into support or a neutral mention. The links were still there and the counts matched.

The refills had a pattern too. Humans reach for the newest and least-cited work when they push back. That is exactly where the models reached several years further back.

The same experiment produced a result pointing the other way. The co-authorship circle humans lean on when they cite had all but disappeared in the models. The citations reached further outside the writer's own acquaintance.

So the study hands you good news and bad news as one object. Visibility bias moved into the space that social bias vacated.

I have started calling what is left an edge with its stance rubbed out.

"Are we counting that a link exists, or what the link meant?"

A vocabulary for recording stance has been available since 2010. Sixteen years later the field is still mostly empty. Not because the vocabulary was designed badly, but because nobody has paid for the first pass of filling it.

That is why this paper held our attention. The sources a RAG answer attaches, the document links an internal wiki counts, the edges in our own graph: each records existence and none records stance.

Adding the field seems like the second task. Writing down that the field is empty comes first.

https://blog.pebblous.ai/report/llm-citation-rewrite-dissent-loss/en/

#Pebblous #DataQuality #DataClinic #KnowledgeGraph #RAG #CiTO #CitationBias
