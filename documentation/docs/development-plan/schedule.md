---
sidebar_position: 3
---

# Schedule
The schedule was split into sections based on the different milestones of the project. Each milestone pairs with tasks that should be completed before presenting. The elaboration phase is the phase dedicated to documentation of the project. The Hello World demo contains the tasks which must be completed to show a proof of concept for the overall project design. The first milestone begins tasks which build off the previous tasks. From here, each further milestone demonstration will build off the previous until the Final Deme, where the project should be finished days ahead of time for final testing and preparation. 

## Elaboration Phase
![](assets/Elaboration.png)

## Hello World Demo
![](assets/HelloWorldDemo.png)

## Milestone Demo 1
![](assets/MilestoneDemo1.png)

## Milestone Demo 2
![](assets/MilestoneDemo2.png)

## Milestone Demo 3
![](assets/MilestoneDemo3.png)

## Final Demo
![](assets/FinalDemo.png)

## Mermaid Gantt Chart
```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```
