---
title: Predicting an Atom
subtitle: IBM
date: 2026-07-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Predicting an Atom

_IBM_

## Executive Summary

> [!callout]
> Molecular dynamics (MD) simulation is the factory that manufactures atomic trajectories for drug and materials research. But this factory is slow. At every instant it has to recompute the force acting on each atom and integrate that force over vanishingly small timesteps. TrajCast, published in Nature Machine Intelligence by researchers at IBM, skips the force-calculation stage entirely.

> The core is a shift in framing. Instead of computing a force to get an acceleration and integrating to get a position, an autoregressive equivariant neural network looks at the positions and velocities right now and emits the positions and velocities at the next instant directly. That lets a single step span up to 30× more time than standard MD, and it produces more than 15 nanoseconds of trajectory a day for a system of 4,300 atoms. Every training trajectory it learned from was shorter than one nanosecond.

> This piece looks at what TrajCast gains and what it gives up. The price of speed is that it can no longer compute pressure directly, and over long timescales error accumulates step by step. In an era where models, not experiments, stamp out scientific data at scale, the question begins here: what do we validate those synthetic trajectories against?

<!-- stat-card -->
**Up to 30×** — Timestep stretch — vs. standard MD timestep

<!-- stat-card -->
**15 ns/day** — Trajectory throughput — for a 4,300-atom system

<!-- stat-card -->
**Under 1 ns** — Training data length — water 50 ps · quartz 100 ps

<!-- stat-card -->
**No NpT** — The most honest limit — cannot compute pressure

## A Data Factory That Still Runs Slow

Molecular dynamics computes the force on each individual atom and numerically solves Newton's equations of motion to track where the atoms move over time. The resulting time series of positions and velocities, the trajectory, becomes the underlying data for screening drug candidates, discovering new materials, and designing catalysts. In effect, a computer stamps out the data instead of a lab.

The catch is the timestep. Atomic vibrations happen on femtosecond (10⁻¹⁵ s) scales, and to integrate the equations of motion stably you have to chop time into intervals far shorter than those vibrations, usually 0.5 to 1 femtosecond. To observe a single nanosecond-scale phenomenon means repeating this calculation millions of times. And at every step, the force is recomputed from scratch.

Recent machine-learning potentials (MLIPs) such as MACE, NequIP, and Allegro have made the force calculation itself fast. But the constraint of chopping time into tiny intervals remained. No matter how quickly you get the force, the structure still demands one every femtosecond. TrajCast takes a different path at exactly this point.

## It Draws the Next State Without Computing a Force

TrajCast's idea is to break the chain. The conventional approach computes a force, derives an acceleration from that force, and integrates the acceleration to get the next position. TrajCast skips that chain: it takes the positions and velocities at time t as input, and a neural network directly outputs the positions and velocities at time t+Δt. The intermediate step of force is gone entirely. That is why it is called force-free molecular dynamics.
