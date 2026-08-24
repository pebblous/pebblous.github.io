# SNS 홍보 글: 신문 147만 장을 자체 서버로 정제한 보스턴 공공도서관

> 소스: blog/bpl-newspaper-pipeline-16b-tokens/ko/index.html
> 생성일: 2026-08-24
> URL: https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

보스턴 공공도서관이 소장 신문 147만 장을 외부 API 한 번 부르지 않고 자기 GPU 노드에서 정제했습니다.

하버드 로스쿨 도서관의 Institutional Data Initiative와 함께 만든 열다섯 단계 파이프라인이 1795년부터 1930년까지의 지면을 기사와 광고 단위로 잘랐습니다. 조각마다 OCR 텍스트와 좌표, 언어, 개체명, 주제, 임베딩이 붙었습니다. 결과물은 163억 토큰입니다.

같은 분량을 프런티어 모델 API로 만들었다면 25만에서 80만 달러가 들었을 것이라고 논문은 추산합니다. 실제로 쓴 계산을 임대가로 환산하면 2만 5천 달러 수준입니다. 절약의 근거는 큰 모델이 아니라 분해에 있습니다. 탐지와 분류를 한 모델에 맡기지 않았고, 읽기 순서에는 트랜스포머 대신 군집 알고리즘을 썼습니다.

과장은 없습니다. 초록의 "워크스테이션급 하드웨어"는 설계 목표이지 실제 가동 사양이 아니고, 개체명 인식과 주제 분류는 논문 스스로 실험적이라고 적어 두었습니다. 절약의 대가가 처리량이라는 것도 같은 자리에 밝혔습니다.

소장 자료를 가진 기관이 정제 능력까지 갖추는 문턱이 생각보다 낮은 곳에 있습니다. 페블러스가 데이터 품질 현장에서 만나는 질문도 여기와 같은 모양입니다. 공정을 외부에 통째로 맡긴 조직에는 왜 이렇게 판정됐냐는 질문에 답할 사람이 남지 않습니다.

▶ 전문: https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터주권 #데이터파이프라인 #OCR #보스턴공공도서관 #InstitutionalDataInitiative

---

## LinkedIn (EN)

Boston Public Library refined 1.47 million newspaper scans from its own collection without calling a single external API.

The fifteen-step pipeline, built with the Institutional Data Initiative at Harvard Law School Library, cut pages published between 1795 and 1930 into article and advertisement units. Each unit carries OCR text, coordinates, language, named entities, topics and embeddings. The output is 16.3 billion tokens.

Generating that volume through frontier model APIs would have cost between $250,000 and $800,000, the report estimates. The compute the team actually used comes to roughly $25,000 at rental rates. What made that possible was decomposition rather than any large model. Detection and classification were kept in separate models, and reading order was solved with a clustering algorithm instead of a transformer.

The report does not oversell itself. "Workstation-level hardware" in the abstract is a design goal, not the machine that did the work, and the authors mark named entity recognition and topic classification as experimental. They also state plainly that throughput is the price of the frugality.

For an institution that holds the material, the threshold for also holding the refining capability sits lower than expected. The same question shows up in data quality work at Pebblous: when an organization hands its entire refinement process to an outside vendor, no one inside is left who can explain why a given judgment came out the way it did.

▶ Read: https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataSovereignty #DataPipeline #OCR #BostonPublicLibrary #InstitutionalDataInitiative

---

## Twitter/X (KO)

보스턴 공공도서관이 소장 신문 147만 장에서 163억 토큰을 뽑았습니다. 외부 API 없이 자기 서버에서 끝낸 작업입니다.

프런티어 API를 빌렸다면 여섯 자리 달러가 들 일이 다섯 자리에서 끝났습니다. 자료를 가진 쪽이 정제 능력까지 쥐면 그다음 대화가 달라집니다.

https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/ko/

#페블러스 #데이터품질 #데이터주권 #보스턴공공도서관

---

## Twitter/X (EN)

Boston Public Library pulled 16.3 billion tokens out of 1.47 million newspaper scans it already owned, on its own servers, with no external API in the loop.

A six-figure API bill came in at five figures. When the institution holding the material also holds the refining capability, the next conversation is a different one.

https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/en/

#Pebblous #DataQuality #DataSovereignty #BostonPublicLibrary

---

## Facebook (KO)

이 신문 컬렉션에서 영어 다음으로 많은 언어는 이디시어였습니다.

기사와 광고 단위로 잘라 낸 조각 98만 개.

보스턴에 살던 이민자들이 읽던 신문이고, 도서관이 백 년 넘게 그 지면을 보관해 왔습니다.

그런데 파이프라인이 쓴 언어 판정기는 이디시어를 지원하지 않습니다. 기계가 읽을 수 있는 언어 목록에 처음부터 없던 언어입니다.

이 자리에서 팀이 한 일이 오래 남았습니다. 미국 의회도서관의 이슈 단위 기록을 가져와 그 조각들의 언어를 채웠습니다. 그리고 그렇게 채운 값은 신뢰도 칸을 비워 두어, 기계가 직접 판정한 값과 섞이지 않게 했습니다. 열 이름 끝에도 표시를 남겼습니다. 컬렉션 자체에서 온 값, 외부 기록에서 매칭해 온 값, 파이프라인이 만든 값, 그중에서도 실험적인 방법으로 만든 값이 각각 다른 접미사를 답니다.

"이 칸은 원본인가, 추정인가?"

데이터를 받는 쪽이 열 이름만 보고 이 질문에 답할 수 있게 해 둔 것입니다. 남의 기록을 그대로 믿지도 않았습니다. 의회도서관 기록에서 보스턴이 뉴욕주에 붙어 있던 항목은 직접 고쳤습니다.

신문 147만 장을 정제하는 데 든 계산 비용은 임대가로 환산해 2만 5천 달러쯤입니다. 프런티어 API를 빌렸다면 여섯 자리였을 일입니다. 다만 이 작업에서 제일 눈에 들어온 숫자는 그쪽이 아니었습니다. 어느 단계에서 무엇을 근거로 판단했는지가 전부 기록으로 남아 있다는 사실 쪽이었습니다.

'자기 손으로 읽는 서고'라고 부를 만한 상태입니다.

페블러스가 데이터 품질 현장에서 반복해 마주치는 질문도 같은 모양입니다. 정제 공정을 외부에 통째로 맡긴 조직에는, 나중에 왜 이렇게 판정됐냐는 질문에 답할 사람이 안에 남지 않습니다.

자료를 가진 쪽과 그 자료를 읽을 수 있게 만드는 쪽이 갈라져 있을 때, 그 서고는 누구의 것일까요.

https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/ko/

#페블러스 #보스턴공공도서관 #데이터주권 #OCR #데이터품질 #DataClinic

---

## Facebook (EN)

After English, the most common language in this newspaper collection was Yiddish.

Roughly 980,000 crops, cut at the level of a single article or advertisement.

They are papers that immigrants in Boston read, and the library has kept those pages for more than a century.

The language detector in the pipeline does not support Yiddish. It was never on the list of languages the machine could read.

What the team did at that point stayed with me. They pulled issue-level records from the Library of Congress and filled the language of those crops from there. Then they left the confidence field empty for every value filled that way, so it would not blend in with what the machine had judged for itself. They marked it in the column names too. A value that came from the collection, a value matched in from an outside record, a value the pipeline produced, and a value produced by an experimental method each carry a different suffix.

"Is this cell source, or is it estimate?"

Whoever receives the data can answer that from the column name alone. They did not take the outside record on faith either. Where the Library of Congress data had placed the city of Boston in New York State, they corrected it.

The compute for refining 1.47 million scans comes to about $25,000 at rental rates, where renting a frontier API would have run into six figures. That was not the number that held my attention, though. What did was that every step left behind a record of what it decided and on what basis.

A stack you can read with your own hands, is one way to put it.

The same shape of question comes up again and again in data quality work at Pebblous. When an organization hands its whole refinement process to an outside vendor, nobody is left inside who can answer why a judgment came out the way it did.

When the party that holds the material and the party that makes it readable are two different parties, whose collection is it.

https://blog.pebblous.ai/blog/bpl-newspaper-pipeline-16b-tokens/en/

#Pebblous #BostonPublicLibrary #DataSovereignty #OCR #DataQuality #DataClinic
