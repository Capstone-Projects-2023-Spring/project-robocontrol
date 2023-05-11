[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10120395)
<div align="center">

# Project Name
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section 003, Python, JavaScript, React, Computer Vision, Robotics, Automation, Website Design and Interface.

## Project Abstract

Robocontrol provides a web-based user interface to control the Adeept RaspTank robot. It implements features such as remote navigation, autonomous functionality of the robot, as well as manual control via a website GUI. The RaspTank has a Raspberry Pi 3B+ single board computer which will interface with a remote server and GUI over Wi-Fi to process the data from the various input devices such as the on-board camera and ultrasonic distance sensor, as well as control the motor drivers for the tank treads and the servos for the mechanical arm. Video feed from the camera will be transmitted in near-real-time to the GUI so that the user can see where the robot is going even if they are not in the same environment, and they are able to use this to navigate with controls on the GUI which will be transmitted back to the microcontroller through the server. If the user would prefer the robot to navigate its environment autonomously, the server will use camera and sensor information it receives from the microcontroller to make autonomous navigation decisions using Python and transmit these decisions back to the microcontroller so that they can be implemented by the motors in the robot’s tank treads.

## High Level Requirement

The RoboControl robot consists of a remote server and a robotic device driven by a Raspberry Pi microcomputer. The remote server will process data from input devices such as the camera and ultrasonic sensor modules and transmit control signals to the device's motor drivers and servos. The robotic device's Raspberry Pi microcomputer will communicate with the server via SSH, acting as the system's controller and managing connections to other components and peripherals. Additionally, the remote server will host a website graphical user interface (GUI) that allows users to give commands to robotic device and access its various features, such as color detection, remote navigation, and other autonomous functionalities. The GUI will also display real-time video provided by the robotic device's camera module, enabling users to see the device's movement and guide it using controls on the GUI. Users can input commands and then receive feedback from the robotic device via the GUI.

For the robotic device, it will be equipped with camera and ultrasonic sensor modules for collecting environmental data, motor drivers for its tank treads, and a mechanical arm with servos. These components will work together to allow the device to move, obtain color information, grasp items, and more. These features allow the RoboControl Robot to implement functions such as autonomous navigation.

## Conceptual Design

Overall Architecture: The onboard Raspberry Pi will be developed with Python to gather the sensor data coming from the camera and ultrasonic sensor modules. The data acquired from these sensors will be sent to a server running the OpenCV library. The processed data will then be sent to a website that will host the controls for the robot.

Raspberry Pi Programming: Though much of the following may be revised once the construction phase begins, the following will serve as an initial development architecture. First, the Raspberry Pi can use the OpenCV library to capture the images. NumPy will be useful to perform matrix operations on images such as scaling or cropping.

Project Server Processing: Once the data acquired from the camera and ultrasonic sensors has been sent to the server, the data will be processed, and further control instruction will be sent to the website. The sensor data gathered from the modules are processed on the server using the OpenCV library. We will also utilize OpenCV in the server to do color detection in images. These calculations will give the robot another means of detecting obstacles as well as detecting paths to navigate along.

Website: We will develop a website GUI that can be used to control and interface with the RaspTank. We will be using Flask and the React TypeScript framework coupled with styled components for ease of embedded CSS. The website will serve as the user interface for controlling the robot’s movement and display sensor data from the robot in real-time. As mentioned above and shown in Figure 2, the website will communicate with the project server to receive the processed data that originated from the RaspTank.

## Required Resources

### Development Environment
This section provides an overview of the hardware and software components required for this project. It covers the components necessary for the robot's operation, communication, and hosting services, such as the website and remote server. 

#### Required Hardware
- Adeept Rasptank
	- Servos – x5
	- Raspberry Pi 3 B+
	- Acrylic frame
	- Geared motors – x2
	- Ultrasonic distance sensor
	- Battery cells – x2
	- Tank treads
	- Raspberry Pi Camera
- Battery charger

#### Required Software
- Adeept Rasptank Raspberry Pi Software
	- Raspbian Buster flashed onto the Raspberry Pi
	- Adeept Rasptank code
	- Python 3
- Web Server
	- Ubuntu 22.04 Server
	- NodeJS
	- ReactJS
	- TypeScript, HTML5, CSS, and a capable web browser
	- Python 3
	- Open cv color detection
- Git version control
- WebSockets
- GitHub Pages

#### Selected IDE
- Visual Studio Code
- Visual Studio Code Extensions
	- SSH
	- Python
	- Styled Components
	- ESLint
	- React Native Tools

#### Compilers
- Babel

#### Test Tools
- JUnit testing
- Mock calls
- Hardware testing

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
