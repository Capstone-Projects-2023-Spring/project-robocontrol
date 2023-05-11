[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10120395)
<div align="center">

# Project Name
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section #, as well as any words that quickly give your peers insights into the application like programming language, development platform, type of application, etc.

## Project Abstract

Robocontrol provides a web-based user interface to control the Adeept RaspTank robot. It implements features such as remote navigation, autonomous functionality of the robot, as well as manual control via a website GUI. The RaspTank has a Raspberry Pi 3B+ single board computer which will interface with a remote server and GUI over Wi-Fi to process the data from the various input devices such as the on-board camera and ultrasonic distance sensor, as well as control the motor drivers for the tank treads and the servos for the mechanical arm. Video feed from the camera will be transmitted in near-real-time to the GUI so that the user can see where the robot is going even if they are not in the same environment, and they are able to use this to navigate with controls on the GUI which will be transmitted back to the microcontroller through the server. If the user would prefer the robot to navigate its environment autonomously, the server will use camera and sensor information it receives from the microcontroller to make autonomous navigation decisions using Python and transmit these decisions back to the microcontroller so that they can be implemented by the motors in the robot’s tank treads.

## High Level Requirement

Describe the requirements – i.e., what the product does and how it does it from a user point of view – at a high level.

## Conceptual Design

Describe the initial design concept: Hardware/software architecture, programming language, operating system, etc.

## Background

The background will contain a more detailed description of the product and a comparison to existing similar projects/products. A literature search should be conducted and the results listed. Proper citation of sources is required. If there are similar open-source products, you should state whether existing source will be used and to what extent. If there are similar closed-source/proprietary products, you should state how the proposed product will be similar and different.

## Required Resources

Discuss what you need to develop this project. This includes background information you will need to acquire, hardware resources, and software resources. If these are not part of the standard Computer Science Department lab resources, these must be identified early and discussed with the instructor.

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Ian Tyler Applebaum</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/u/77810293?v=4" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Null</b></sub>
        </a>
    </td></tr>
</table>

[//]: # ( readme: collaborators -end )

## Commands
- Cloning the repo
  - `git clone --recurse-submodules https://github.com/Capstone-Projects-2023-Spring/project-robocontrol.git`
- Updating this repo locally with changes in the submodules
  - `git submodule update --init --recursive`
