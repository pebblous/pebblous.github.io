---
title: How GeniWorld Builds New Practice Scenes for Robots
subtitle: Rendered robot arms beat joint numbers at predicting new scenes
date: 2026-11-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# How GeniWorld Builds New Practice Scenes for Robots

_Rendered robot arms beat joint numbers at predicting new scenes_

## Executive Summary

> [!callout]
> The GeniWorld team drew the robot arm's motion from the robot's design data, then had a video model that watched that footage predict how the surrounding scene changes. Instead of giving the robot's action as numbers, the input that rendered the whole body of the arm and the gripper earned the highest score in the RoboTwin 2.0 comparison. A policy trained on those generated practice scenes added to the real demonstrations raised the overall success rate on four dual-arm robot tasks from 40.8% to 69.0%. Each round of augmentation changed both the number of demonstrations and the conditions they carried, however, so which of the two matters more can only be settled by a comparison matched on the number of added demonstrations.

A robot opens a drawer with its right arm, picks up a marker with its left, puts it inside, and closes the drawer. Two things have to go right from the very first move. The gripper has to reach the handle, and the drawer has to open when the handle is pulled. The GeniWorld team drew the arm's motion using the robot's design data, and had a video model that watched that motion predict how the drawer and the surrounding scene change. They built new practice scenes that way, and tested whether a robot trained on those demonstrations finishes the real drawer task better. [GeniWorld paper v2, method and real-robot tests](https://arxiv.org/html/2608.06332v2) · [Appendix C, completion criteria for the drawer task](https://arxiv.org/html/2608.06332v2#A3)

## Turning joint coordinates into motion the camera can see

The first frame the camera captured shows the drawer handle. The robot's control command holds where to move the arm and how to close the gripper. To predict the next scene, you have to know where the gripper lands on screen as the joint angles change, and from which direction it reaches the handle.

GeniWorld uses the URDF that describes the robot's joint structure, together with forward kinematics, to compute the pose the arm and the gripper would take when the command is executed. In the real-robot experiments, that pose was rendered in Isaac Sim from the same viewpoint as the actual camera. This video holds the robot's body alone. The drawer and the surrounding objects are in the first frame, and how the scene changes when the gripper pulls the handle is what the video model predicts. Feeding in robot motion and scene information that fall at the same place on screen is the core of Figure 2 in the paper. [Paper §III-B and Figure 2](https://arxiv.org/html/2608.06332v2#S3.SS2) · [Real-robot test hardware](https://arxiv.org/html/2608.06332v2#S4.SS2)

The process does not end after one pass. When a person moves the teleoperation device or the robot's control policy issues the next command, the model generates the frame that matches that command. The person or the policy sees the new frame and commands again. The paper implemented this loop on a dual-arm robot platform. When an operator builds demonstrations while watching the generated frames, the inference speed the team reported was about 8 Hz on an NVIDIA H20 with five sampling steps. [Paper §III-C](https://arxiv.org/html/2608.06332v2#S3.SS3) · [Paper §IV-D and Figure 8](https://arxiv.org/html/2608.06332v2#S4.SS4)

## What changes when the whole arm is drawn in

The difference between input representations was compared on RoboTwin 2.0, a robot simulation benchmark. The team trained the model on 2,250 demonstrations taken from tidy scenes, then tested how well it predicts new scenes on 250 demonstrations where the objects, the layout and the background differ. Holding the video model's base architecture the same, they compared giving the robot's action as numbers, marking it as the gripper's trajectory or the arm's skeleton, and rendering the whole body. [Paper §IV-A and Table I](https://arxiv.org/html/2608.06332v2#S4.SS1)

| How the robot's action is fed in | Video evaluation score on new scenes (EWMScore) |
| --- | --- |
| Joint and control commands as numbers | 51.49 |
| Gripper trajectory marked on screen | 61.36 |
| Arm skeleton marked on screen | 61.61 |
| Whole body of the arm and the gripper rendered | 63.54 |

The input with the whole arm drawn in earned the highest EWMScore in this comparison. Passing the action as video from the same viewpoint lets the model refer on screen, directly, to where the gripper is and from which direction it approaches the object, which is the team's explanation. This table evaluates generated video. Whether the mug was actually moved was judged in a separate real-robot test against the task completion criteria. [Paper §IV-A and Table I](https://arxiv.org/html/2608.06332v2#S4.SS1) · [Appendix C, task completion criteria](https://arxiv.org/html/2608.06332v2#A3)

## Edit the first frame, then build demonstrations for that condition

Once a video model that takes actions is in hand, it can be used to build new practice scenes. The team first changed the first frame with an image editing model. They moved the target object to the edge of the workbench, placed a new object of the same kind, or added other objects nearby. On the edited frame they replayed the existing manipulation commands, and where new motion was needed a person operated the robot while watching the generated frames. It is a way to change the condition in the first frame together with the manipulation performed under that condition. [Paper §IV-D and Figure 10](https://arxiv.org/html/2608.06332v2#S4.SS4)

The real-robot tests used one dual-arm Xtrainer robot and four tasks. Moving a bowl, folding a towel, placing a mug, and opening a drawer, putting an object in and closing it. For each task, 25 real demonstrations collected by teleoperation were the starting point. To that they compared adding 65 synthetic demonstrations built by changing positions, and adding a further 65 synthetic demonstrations that reflect several environmental conditions. In each data configuration the same pretrained π₀ model was fine-tuned with the same settings. Evaluation was done under the usual condition and four conditions where the position, the surrounding objects, the target object and the lighting differ. Each combination of task and condition was tested 20 times on the real robot, recording 400 trials per data configuration. [Paper §IV-B](https://arxiv.org/html/2608.06332v2#S4.SS2) · [§IV-D](https://arxiv.org/html/2608.06332v2#S4.SS4) · [Appendix C, Table III and test procedure](https://arxiv.org/html/2608.06332v2#A3)

The policy trained on the real demonstrations alone had an overall success rate of 40.8%. Adding the demonstrations with changed positions brought it to 51.0%, and adding both kinds brought it to 69.0%. Return to the drawer task from the opening. Under the condition with other objects placed nearby, the number of successes at putting the marker in and closing the drawer completely rose from 6 out of 20 to 13. Taking the four tasks together, the final success rate under the changed-lighting condition was 52.5%, the lowest of the five conditions. Looking separately at the tasks and conditions with low success rates tells you which demonstrations to obtain next. [Appendix C, Table III](https://arxiv.org/html/2608.06332v2#A3)

In this experiment, each round of augmentation increased the number of demonstrations and changed the conditions the demonstrations carried as well. What the comparison shows directly, then, is the real-robot score of the policy with both augmentations applied. To know separately how far the demonstrations need to be increased and which condition changes have the larger effect, a comparison matched on the number of added demonstrations is needed. Whether building synthetic demonstrations or collecting more real demonstrations is better for the same budget is a separate question of comparison too. [Paper §IV-D](https://arxiv.org/html/2608.06332v2#S4.SS4) · [Appendix C, training data composition](https://arxiv.org/html/2608.06332v2#A3)

## Narrow the candidates in simulation, confirm on the real robot

The team also used GeniWorld separately for policy evaluation. They had the same predetermined policy checkpoints start from the same first frame in the simulated and the real environment, then compared the success rates of the two tests. In Figure 7, the simulated scores and the real scores of the tasks tested showed a positive correlation. This result can inform which candidates to give priority in limited real-robot testing. If candidates were repeatedly revised or selected while watching the simulated scores, they need to be checked again before adoption, on separate real-robot tasks held out of the development process. [Paper §IV-C and Figure 7](https://arxiv.org/html/2608.06332v2#S4.SS3)

To try this approach in the field, first fix the conditions under which each task fails repeatedly. If the drawer handle is not gripped properly when the lighting changes, for example, record the position and the brightness of the light and obtain demonstrations for that condition. In the synthetic demonstrations, inspect a sample for whether the requested condition made it in and whether the robot commands and the video match. After training, confirm the completion rate for the same task in a separate real-robot test. Compare that against collecting more real demonstrations for the same budget, and you can also decide which conditions to serve with synthetic demonstrations and which to assign to field collection. [GeniWorld real-robot test design](https://arxiv.org/html/2608.06332v2#S4.SS4) · [Pebblous on September world models and performance by condition](https://blog.pebblous.ai/report/physical-ai-world-model-synthetic-data-2026-09/en/#section-4)

The real-robot tasks and the simulated manipulation videos the authors released can be seen on the project page. [GeniWorld official project](https://chenghaogu.github.io/GeniWorld/)
