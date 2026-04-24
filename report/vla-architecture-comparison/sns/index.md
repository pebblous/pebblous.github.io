# VLA 3대장 아키텍처 비교 — SNS 포스트

---

## LinkedIn KO

2025년, 로봇에게 뇌를 만들어주는 방식이 세 갈래로 갈라졌다.

NVIDIA GR00T N1.7은 뇌를 둘로 나눴다. 느린 사고(System 2)가 계획을 세우면 빠른 반사(System 1)가 몸을 움직인다. Cosmos 월드 파운데이션 모델의 물리 상식이 계획 능력을 뒷받침하고, 2만여 시간의 인간 1인칭 영상(EgoScale)으로 조작 스케일링 법칙을 최초로 입증했다.

Google Gemini Robotics 1.5는 하나의 대형 모델 안에서 언어로 먼저 추론하고 나서 행동을 생성하는 Think-then-Act 구조를 택했다. Motion Transfer로 ALOHA, Franka, Apollo 등 이종 로봇 데이터를 단일 표현 공간에 통합하고, 50~100개 시연만으로 새 작업에 적응한다.

Physical Intelligence의 π0.5는 PaliGemma 3B 위에 Flow Matching을 올려 연속적인 고주파 행동을 확산으로 생성한다. 세탁물 접기, 식기 정리 같은 정밀 조작에서 강점을 보이며, openpi 오픈소스로 커뮤니티 생태계를 열었다.

아키텍처는 다르지만 세 팀 모두 같은 병목에 직면해 있다. 고품질 로봇 데이터를 어떻게, 얼마나 확보하느냐다. 페블러스는 PebbloSim과 DataClinic을 통해 물리 시뮬레이션 기반 합성 데이터 생성과 데이터 품질 검증 인프라를 구축하고 있다.

https://blog.pebblous.ai/report/vla-architecture-comparison/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #VLA #피지컬AI #로봇AI #휴머노이드

---

## LinkedIn EN

In 2025, three teams built the robot brain in fundamentally different ways.

NVIDIA's GR00T N1.7 splits cognition into two systems. System 2 (a VLM based on Cosmos-Reason2-2B) plans; System 1 (a Diffusion Transformer) executes motor commands in real time. Trained on 20,000+ hours of human egocentric video via EgoScale, it demonstrated the first manipulation scaling law -- double the data, double the task completion rate.

Google's Gemini Robotics 1.5 keeps everything in one large model. Think-then-Act generates an internal reasoning chain before producing actions. Motion Transfer maps heterogeneous robot morphologies into a shared representation space, enabling a single checkpoint to control ALOHA, Franka, and Apollo platforms. Adaptation requires just 50-100 demonstrations.

Physical Intelligence's pi-0.5 places a Flow Matching head atop PaliGemma 3B, generating continuous high-frequency actions through diffusion. It targets precision manipulation -- folding laundry, clearing dishwashers -- and opens its pipeline through openpi.

Architecture choices differ, but the bottleneck is shared: acquiring enough high-quality robot data. Pebblous addresses this through PebbloSim for physics-based synthetic data generation and DataClinic for data quality assurance.

https://blog.pebblous.ai/report/vla-architecture-comparison/ko/

#Pebblous #DataQuality #VLA #PhysicalAI #Robotics #FoundationModels #Humanoid #DeepLearning

---

## Twitter/X

NVIDIA는 뇌를 둘로 나누고, Google은 언어로 먼저 생각하고, PI는 확산으로 행동을 흘린다. 2025년 VLA 3대장 -- GR00T N1.7, Gemini Robotics 1.5, π0.5의 아키텍처를 13개 차원으로 직접 비교했다. 공통 병목은 고품질 로봇 데이터.

https://blog.pebblous.ai/report/vla-architecture-comparison/ko/

#VLA #피지컬AI #페블러스 #로봇AI

---

## Facebook

2025년, 로봇의 뇌를 설계하는 방법이 세 갈래로 갈라졌다.

NVIDIA GR00T N1.7은 뇌를 느린 사고(System 2)와 빠른 반사(System 1)로 분리하는 Dual System 아키텍처를 채택했다. 인간이 1인칭 시점으로 촬영한 2만여 시간의 영상(EgoScale)으로 학습시켜, 데이터 양과 성능 사이의 예측 가능한 스케일링 법칙을 최초로 입증했다. Cosmos 월드 파운데이션 모델이 VLM 백본으로 들어가 물리 상식 기반의 계획 능력을 부여한다.

Google Gemini Robotics 1.5는 Gemini 2.0의 방대한 언어-비전 사전학습을 기반으로, 행동 전에 내부 추론 체인을 먼저 생성하는 Think-then-Act 구조를 택했다. Motion Transfer는 서로 다른 로봇 플랫폼의 데이터를 하나의 공간으로 통합해, 50~100개 시연만으로 새 작업에 적응하게 한다.

Physical Intelligence π0.5는 PaliGemma 3B 위에 Flow Matching을 올려, 노이즈에서 목표 행동까지의 흐름을 직접 학습한다. 세탁물 접기, 식기 정리 같은 정밀 조작에서 강점을 보이며, openpi 오픈소스를 통해 커뮤니티 생태계를 확장하고 있다.

전략은 달라도 세 팀의 공통 과제는 같다 -- 고품질 로봇 데이터 확보라는 병목. 13개 차원 비교는 아래 리포트에서 확인할 수 있다.

https://blog.pebblous.ai/report/vla-architecture-comparison/ko/

#페블러스 #VLA #피지컬AI #로봇AI
