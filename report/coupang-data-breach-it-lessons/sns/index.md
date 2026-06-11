# SNS 홍보 글: 고도의 해킹이 아니라, 기본의 누락이었다

> 소스: report/coupang-data-breach-it-lessons/ko/index.html
> 생성일: 2026-06-11
> URL: https://blog.pebblous.ai/report/coupang-data-breach-it-lessons/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

6,246억 원. 한국 역대 최고 개인정보 과징금입니다.

그런데 개인정보보호위원회가 의결문에 박은 결론은 "고도의 해킹이 아니라, 기본적인 안전관리 체계의 미비와 관리 소홀"이었습니다. 전직 직원 한 명이 퇴사하며 확보한 인증 서명키로 위조 토큰을 만들어, 약 7개월 동안 들키지 않고 3,300만 회원의 정보를 빼냈습니다.

존재하지도 않는 회원번호로 발급된 위조 토큰 4,400만 개가 인증을 통과하는 동안, 시스템은 그 신호를 비명으로 받아들이지 못했습니다. 평문으로 열리던 키, 퇴직자에게서 폐기되지 않은 비밀, 한 번도 회전되지 않은 자격증명. 어디에도 화려한 제로데이는 없었습니다.

불편한 대목은 따로 있습니다. 같은 결함은 규모와 업종을 가리지 않습니다. 평문 키와 미회전·미폐기는 오히려 작은 조직에서 더 흔하게 발견됩니다.

그래서 우리는 이 사건을 비난이 아니라 거울로 읽었습니다. 우리의 키는, 우리의 로그는, 우리의 동의는 지금 어디에 있습니까. 6대 위반을 NIST·OWASP·개인정보보호법에 매핑하고, 오늘 그대로 던질 6개의 점검 질문으로 환원했습니다.

↗ 링크는 댓글에

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #개인정보보호 #데이터거버넌스 #정보보안 #키관리 #개인정보보호법

---

## LinkedIn (EN)

A record $431 million fine — the largest privacy penalty in Korean history.

But the regulator's verdict wasn't about a sophisticated attack. "Not advanced hacking, but a failure of basic safeguards and lax management," the Personal Information Protection Commission wrote. A former employee who had built the company's authentication system kept a signing key after leaving. With it he forged tokens and quietly pulled the records of 33 million members for roughly seven months.

While 44 million forged tokens, minted for member IDs that didn't even exist, sailed through authentication, no alarm ever sounded. Plaintext keys, secrets never revoked after offboarding, credentials that were never rotated. No zero-day required.

The uncomfortable part: these gaps don't scale down. Plaintext keys and skipped rotation tend to be more common in small teams, not less.

So we read this not as blame but as a mirror. We mapped the six violations onto NIST, OWASP, and Korea's privacy law, then reduced them to six questions any organization can ask today. Where are your keys, your logs, your consent right now?

↗ Link in the comments

#Pebblous #DataClinic #DataQuality #DataJournalism #DataGovernance #InfoSec #KeyManagement #DataPrivacy #Coupang

---

## Twitter/X (KO)

6,246억 원. 한국 역대 최고 개인정보 과징금.

그런데 개인정보보호위원회의 결론은 "고도의 해킹이 아니라 기본의 누락"이었습니다. 평문 키, 미회전, 퇴직자 미폐기.

비난이 아니라 거울로 읽은 6개의 점검 질문.

https://blog.pebblous.ai/report/coupang-data-breach-it-lessons/ko/

#페블러스 #데이터품질 #개인정보보호 #쿠팡 #데이터거버넌스

---

## Twitter/X (EN)

A record $431M privacy fine. Korea's largest ever.

The regulator's verdict: "not a sophisticated hack, but a failure of the basics." Plaintext keys, no rotation, access never revoked.

Six questions we read as a mirror, not blame.

https://blog.pebblous.ai/report/coupang-data-breach-it-lessons/en/

#Pebblous #DataQuality #DataPrivacy #Coupang #DataGovernance

---

## Facebook (KO)

"고도의 해킹이 아니라, 기본적인 안전관리 체계의 미비와 관리 소홀."

6,246억 원이라는 역대 최고 과징금보다, 개인정보보호위원회 의결문의 이 한 문장이 더 오래 남았습니다.

전직 직원 한 명이 퇴사하면서 인증 서명키를 들고 나갔고, 그 키로 만든 위조 토큰이 약 7개월 동안 아무 저항 없이 시스템 문을 통과했습니다.

존재하지도 않는 회원번호로 발급된 토큰 4,400만 개가 인증을 통과하는 동안, 누구도 그 신호를 비명으로 듣지 못했습니다.

평문으로 열리던 키, 퇴직자에게서 회수되지 않은 비밀, 한 번도 회전되지 않은 자격증명. 어느 것도 영화 속 제로데이가 아니었습니다. 우리가 흔히 '기본기'라고 부르며 다음으로 미뤄 두는 것들이었습니다.

그래서 이 사건을 누구를 탓하기 위해 읽지 않았습니다. "우리의 키는 지금 어디에, 어떤 상태로 있는가? 우리의 로그는 누군가 지우려 할 때 버틸 수 있는가? 우리가 모은 동의는 정말 동의였는가?"

데이터를 다루는 회사라면 규모와 업종에 상관없이 같은 거울 앞에 서 있다고 생각합니다. 페블러스가 데이터의 출처와 이력을 진단하는 일을 본업으로 삼는 이유도, 결국 이 질문들에서 멀지 않습니다. 거울은 비추기 위해 있지, 비난하기 위해 있지 않습니다.

https://blog.pebblous.ai/report/coupang-data-breach-it-lessons/ko/

#페블러스 #데이터클리닉 #개인정보보호 #데이터거버넌스 #쿠팡 #키관리

---

## Facebook (EN)

"It wasn't a sophisticated hack. It was a failure of the basics."

Of everything in the ruling, the record $431 million fine included, that one sentence is what stayed with me.

A former employee walked out with an authentication signing key. For about seven months, the forged tokens he made with it passed through the system without resistance.

Forty-four million tokens, minted for member IDs that never existed, cleared authentication, and no one heard the alarm in it.

Plaintext keys. Secrets never revoked after someone left. Credentials that were never rotated. None of it was the zero-day of the movies. It was the set of things we file under "the basics" and quietly postpone.

So I didn't read this as a story about one company's failure. "Where are our keys right now, and in what state? Would our logs survive someone trying to erase them? Was the consent we collected really consent?"

Any company that handles data, I think, stands before the same mirror, regardless of size or industry. It is also why Pebblous makes a livelihood of tracing where data came from and how it has lived. A mirror is there to reflect, not to blame.

https://blog.pebblous.ai/report/coupang-data-breach-it-lessons/en/

#Pebblous #DataClinic #DataPrivacy #DataGovernance #Coupang #KeyManagement
