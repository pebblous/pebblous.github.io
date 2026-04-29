# SNS 홍보 글: 로봇에게 눈을 주다 — 3DGS가 바꾸는 합성데이터의 미래

> 소스: report/isaac-sim-3dgs-vla-synthetic-data-2026-04/ko/index.html
> 생성일: 2026-04-29
> URL (KO): https://blog.pebblous.ai/report/isaac-sim-3dgs-vla-synthetic-data-2026-04/ko/
> URL (EN): https://blog.pebblous.ai/report/isaac-sim-3dgs-vla-synthetic-data-2026-04/en/

---

## LinkedIn (KO)

NVIDIA GR00T N1의 학습 데이터 중 실제 로봇에서 수집한 것은 88시간입니다. 나머지 6,500시간은 시뮬레이터가 만들었습니다. 98%가 합성데이터라는 뜻입니다.

그런데 왜 합성데이터로 학습한 모델이 실제 환경에서 잘 작동하지 않았을까. 원인은 렌더링이었습니다. 메시 기반 래스터 렌더링은 빠르지만 현실과 시각적 격차가 크고, NeRF는 품질은 좋지만 1-5 FPS로 대규모 데이터 생성에 치명적이었습니다.

3D Gaussian Splatting이 이 딜레마를 동시에 해결하고 있습니다. 200+ FPS의 실시간 포토리얼리스틱 렌더링. SplatSim은 시뮬레이터 메시를 Gaussian Splat으로 교체하여 zero-shot sim-to-real 86%를 기록했고, RoboSplat은 단 1개 데모에서 87.8% 성공률을 달성해 수백 건의 실제 데이터를 압도했습니다. 그런데 3DGS는 정적 장면 전제였습니다. PhysGaussian, Embodied Gaussians, GaussTwin이 이 한계를 빠르게 해소하고 있고, NVIDIA는 NuRec, Warp, Cosmos, Marble의 4중 스택으로 산업급 파이프라인을 통합했습니다.

페블러스는 이 결합의 정중앙에 있습니다. PebbloSim은 Isaac Sim의 물리 시뮬레이션과 3DGS의 실감 렌더링을 동시에 제어하며, DataClinic이 합성데이터의 물리적 환각을 진단합니다. 다음 승부처는 합성데이터의 양이 아니라 품질입니다.

https://blog.pebblous.ai/report/isaac-sim-3dgs-vla-synthetic-data-2026-04/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #3DGaussianSplatting #IsaacSim #피지컬AI #합성데이터

---

## LinkedIn (EN)

98% of the training data for NVIDIA's GR00T N1 humanoid robot model was synthetic. Real robot demonstrations accounted for just 88 hours. The simulator generated 780K trajectories -- 6,500 hours -- in 11 hours.

So why did sim-to-real transfer remain a bottleneck? The answer was rendering. Mesh-based rasterization was fast but visually unrealistic. NeRF delivered photorealism but at 1-5 FPS, making large-scale data generation impractical.

3D Gaussian Splatting resolves both constraints simultaneously. Real-time photorealistic rendering at 200+ FPS. SplatSim achieved 86% zero-shot sim-to-real by simply replacing simulator meshes with Gaussian Splats. RoboSplat hit 87.8% success from a single demonstration, outperforming hundreds of real demos with 2D augmentation. The static-scene limitation is being addressed rapidly by PhysGaussian, Embodied Gaussians, and GaussTwin. NVIDIA has assembled the enterprise stack: NuRec for reconstruction, Warp for differentiable physics, Cosmos for generative infill, and Marble for text-to-simulation.

Pebblous operates at this intersection. PebbloSim orchestrates Isaac Sim physics and 3DGS rendering in tandem, while DataClinic diagnoses physical hallucinations in the synthetic output. The next competitive frontier is not data volume -- it is data integrity.

https://blog.pebblous.ai/report/isaac-sim-3dgs-vla-synthetic-data-2026-04/en/

#Pebblous #DataQuality #PhysicalAI #3DGaussianSplatting #IsaacSim #SyntheticData #SimToReal #Robotics

---

## Twitter/X

GR00T N1의 학습 데이터 98%는 합성이었습니다. 문제는 렌더링 품질이었고, 3D Gaussian Splatting이 답을 내고 있습니다.

200+ FPS 실시간 렌더링. 1개 데모에서 87.8% sim-to-real. 수백 건의 실제 데이터를 압도하는 수치입니다.

다음 승부처는 합성데이터의 양이 아니라 품질입니다.

https://blog.pebblous.ai/report/isaac-sim-3dgs-vla-synthetic-data-2026-04/ko/

#페블러스 #3DGaussianSplatting #피지컬AI #합성데이터

---

## Facebook

NVIDIA가 GR00T N1 휴머노이드 로봇을 학습시킨 데이터의 구성이 인상적입니다. 실제 로봇 데이터 88시간, 합성 궤적 780K건(6,500시간). 합성데이터 비중 98%. 780K 궤적을 만드는 데 걸린 시간은 11시간. 실제 대비 591배의 효율입니다.

그런데 이렇게 만든 합성데이터로 학습한 모델이 실세계에서 제대로 작동하지 않았던 이유가 있습니다. 시뮬레이터의 렌더링이 현실과 너무 달랐기 때문입니다. 3D Gaussian Splatting이 이 문제를 정면으로 해결하고 있습니다. NeRF 수준의 시각 품질을 200+ FPS로 실시간 렌더링합니다. SplatSim은 시뮬레이터 메시를 Gaussian으로 교체하는 것만으로 zero-shot sim-to-real 86%를 달성했고, RoboSplat은 단 1개 데모에서 6차원 증강만으로 87.8% 성공률을 기록했습니다.

NVIDIA는 NuRec(3DGS 재구성), Warp(미분 가능 물리), Cosmos(생성 보강), Marble(텍스트에서 시뮬레이션 환경 생성)이라는 4중 스택으로 이 기술을 산업 수준으로 통합하고 있습니다. 3DGS가 정적 장면에만 강했던 한계도 PhysGaussian, GaussTwin 등의 연구로 빠르게 해소되는 중입니다.

페블러스의 PebbloSim은 바로 이 Isaac Sim + 3DGS 결합을 제어하는 시스템이며, DataClinic이 합성데이터의 물리적 정합성을 검증합니다. 합성데이터 시장이 2030년 $1.79-3.7B로 성장하는 가운데, 진짜 경쟁력은 데이터를 얼마나 많이 만드느냐가 아니라 얼마나 믿을 수 있느냐에 있습니다.

https://blog.pebblous.ai/report/isaac-sim-3dgs-vla-synthetic-data-2026-04/ko/

#페블러스 #데이터클리닉 #데이터품질 #피지컬AI
