---
sidebar_position: 1
---

# Activities
## Requirements Gathering
The overall project requirements gathering will begin through research. Documentation will be read for different approaches to specific parts of the project. For streaming the camera feed, the team will research the best way to do this between the robot and the server as well as the server and the website. Regarding the communication of data, research will be conducted on the optimized solution. WebSockets will be considered the most likely candidate with other methods being tested to confirm this hypothesis.

While research is being conducted on communication methods, the original architecture of the Adeept RaspTank and its codebase will be analyzed. The group will be looking for the robot's original method of movement in the code, and they will confirm that this code can be refactored to be used and integrated into the new robot code. This process will also be carried out for the other sensors and motors of the robot including the five servos, the camera, and the ultrasonic distance sensor.

For image processing, OpenCV will be used to detect colors in the robot's environment. The RoboControl team will conduct research focused on this library to determine if color detection can be used for the navigation of the robot. 

After each of these topics have been thoroughly researched, integration of all components will be tested and confirmed. This will involve sending messages through a website interface, having those messages pass through the server, then receive the messages on the robot's Raspberry Pi. 

## Top Level Design
1. Create a home screen to welcome and direct the user
2. Create a sliding menu for simple website navigation
3. Create a controls page for sending messages to the robot
   - Display the camera feed to the user
4. Develop password login for single-person robot control
5. Create an about page for the user to learn how to control the robot
6. Establish the backend server for processing the images to eventually use color detection for autonomous control
7. Establish second backend server for password authentication
8. Flash operating system onto Raspberry Pi
9. Establish connection between the server and the robot
10. Incorporate robot code into the robot communication with the backend server
11. Use video-feed and ultrasonic distance sensor reading to calculate motor speeds using OpenCV

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
