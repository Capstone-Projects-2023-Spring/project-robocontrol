---
sidebar_position: 1
---

# Activities
## Requirements Gathering
The project requirements will be gathered by analyzing the overall architecture of the RaspTank, which involves using the onboard Raspberry Pi programmed with Python to gather sensor data from camera and ultrasonic sensor modules. The sensor data will be sent to a server running openCV, which will process the data before sending control instructions to a custom website. The Raspberry Pi programming will be based on the OpenCV library to capture the images and will likely use libraries like NumPy and GPIO to gather image and distance data. The project server processing will be done using HoughLines and SciPy libraries (or similar alternatives if changes are deemed necessary during the development phase) to process the data transmitted from the Raspberry Pi. The website will be developed using the React TypeScript framework and will serve as the user interface for controlling the RaspTanks movement and displaying sensor data in real-time. The website will communicate with the project server to receive the processed data that originated from the RaspTank.

## Top Level Design
The RoboControl Robot consists of a remote server and a robotic device driven by Raspberry Pi. The remote server will process data from input devices such as a camera module and ultrasonic sensor module and transmit control signals to the device's motor drivers and servos. Meanwhile, the robotic device will have a Raspberry Pi microcomputer that will communicate with the server via SSH, acting as the system's controller and managing connections to other components and peripherals. Additionally, the remote server will host a website graphical user interface (GUI) that allows users to give commands to robotic device and access its various features, such as obstacle detection, remote navigation, and other autonomous functionalities. The GUI will also display real-time video provided by the robotic device's camera module, enabling users to see the device's movement and guide it using controls on the GUI. Users can input commands and then receive feedback from the robotic device and performance via the GUI.

For the robotic device, it will be equipped with a camera module and ultrasonic sensor module for collecting environmental data, motor drivers for its tank treads, and a mechanical arm with servos. These components will work together to allow the device to move, obtain visual images, detect obstacle distances, grasp items, and more. These features allow the RoboControl Robot to implement functions including autonomous navigation and complete automated robotic arm operation.

## Detailed Design
Overall Architecture: The onboard Raspberry Pi will be coded with Python to gather the sensor data coming from the camera and ultrasonic sensor modules. The data acquired from these sensors will be sent to a server running OpenCV. The processed data will then be sent to a website that will host the controls for the robot. 

Raspberry Pi Programming: Though much of the following may be revised once the construction phase begins, the following will serve as an initial development architecture. First, the Raspberry Pi can use the OpenCV library to capture the images. A few useful libraries that are at our disposal include NumPy and GPIO. While we may go with a different route, NumPy can be useful to perform matrix operations on images such as scaling or cropping, and GPIO will be used to read distance measurements from the ultrasonic sensor in order to detect and navigate around predetermined obstacle(s).

Project Server Processing: Once the data acquired from the camera and ultrasonic sensors has been sent to the server, the data will be processed, and further control instruction will be sent to the website. The sensor data gathered from the modules could potentially be processed on the server using the HoughLines and SciPy libraries. HoughLines could be used to detect straight lines in the images (the path we plan to navigate), and SciPy can be useful in determining distance measurements. We will also utilize OpenCV in the server to do color detection in images. These calculations will give the robot another means of detecting obstacles as well as detecting paths to navigate along.

Website: We are considering the development of a very simple website that can be used to control and interface with the RaspTank. We will be using the React TypeScript framework coupled with styled components for ease of embedded CSS. The website will serve as the user interface for controlling the robot’s movement and display sensor data from the robot in real-time. As mentioned above and shown in Figure 2, the website will communicate with the project server to receive the processed data that originated from the RaspTank.

## Testing
The RoboControl project includes hardware testing and software development and testing for both front-end and back-end development, so we will mainly focus on unit testing, integration testing, system testing, and acceptance testing. For unit testing, we will test the individual components of RaspTank's firmware including the camera module, ultrasonic distance sensor module, and motor drivers. This would help us ensure that each component is functioning as expected and could help identify bugs or errors early in the development process. This will also be implemented for the website to test functionality throughout the TypeScript code. This will be completed using Junit testing. 

Integration testing will test how different hardware components and software codes of RaspTank work together. For example, we will test how the camera and ultrasonic distance sensor work together to detect obstacles and communicate with the remote server. Another example is testing how the motor drivers and servos work together to move the robot's tank treads and mechanical arm as well as receiving users' commands. Integration testing would help us ensure that our RaspTank robot's components work together with code seamlessly and our RaspTank robot performs as expected.

The System Testing will test the overall functionality of the RaspTank robot, including its GUI hosted on the remote project server, obstacle detection, remote navigation, and other autonomous functionalities. This testing will enable us to ensure that our RaspTank robot meets the requirements of its intended use and that it performs reliably and accurately in real-world scenarios.

The Acceptance Testing will test whether our RaspTank robot meets the expectations of its end-users. We will conduct acceptance testing by having users test our RaspTank robot's features and provide feedback on usability, functionality, and performance. The purpose of this testing is to make the robot more in line with the user's needs while fulfilling the given requirements. Another part of this testing is comparing the robot’s functionality with the required tasks in the Gantt chart. These tasks should match with those proposed by the end-user, and therefore should represent the end goal of the project. The Gantt chart tasks help dictate the level of success of the project features. 