---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Use Case 1 - Locate and pick up small objects

- Objective: User wants to locate an object in a hard to reach or unsanitary area. 

- Description: The user powers on the RoboControl device, which activates the geared motors to move the treads and the ultrasonic sensors and camera to gather data about the area. The user then accesses the onboard GUI to control the robot's movements and view the live video feed. The user will maneuver the RoboControl device to search for the missing item and, when located, use the GUI to control the five servos of the robotic arm to retrieve the object. Finally, the user will recall the RoboControl device using the controls and turn off the device. 

- Expectation: The RoboControl device should successfully power on, activate the geared motors, ultrasonic sensors, and camera. The GUI should be accessible, allowing the user to control the movements of the robot and view the live video feed. The robotic arm's five servos should also be controllable through the GUI, allowing the user to retrieve the missing item. The RoboControl device should successfully be recalled using the controls, and the device should power off without any issues. If any issues arise, error messages should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem. 

## Use Case 2 – Explore obstacle course for entertainment:  

- Objective: User wants to use the RoboControl device to navigate a course he built for entertainment. 

- Description: The user powers on the RoboControl device, accessing the web-based GUI to control the robot's movements through the course that the user has built. The user will need to navigate through various surfaces of varying traction, slight inclines and declines, and small obstacles. To aid in navigation, the user will rely on the live camera feed to keep track of the robot's location as it traverses the course. 

- Expectation: The RoboControl device should successfully power on and connect to the web-based GUI. The GUI should allow the user to control the movements of the robot through the course, navigating through various terrains and obstacles. The live camera feed should be accessible and provide a clear view of the robot's surroundings, allowing the user to accurately track its location. The robot should successfully complete the course, and any errors or issues should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem. 

## Use Case 3 – Streamline inventory management: 

- Objective: User works in a retail store and wants an efficient way to manage inventory. 

- Description: The user powers on the RoboControl device and places it in the desired starting position in the store. The user then accesses the web-based GUI and the live camera feed to take pictures of items on shelves throughout the store. The user will use this information to manage and update inventory information in real-time, ensuring that stock levels are accurate and up to date. Once the user has completed the inventory check, they will disconnect from the website and turn off the RoboControl device. 

- Expectation: The RoboControl device should successfully power on and connect to the web-based GUI. The user should be able to access the live camera feed and use it to take pictures of items on shelves throughout the store. The inventory information should be managed and updated in real-time, ensuring that stock levels are accurate and up to date. Once the inventory check is complete, the user should be able to disconnect from the website and turn off the device without any issues. If any errors or issues arise, error messages should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem. 

## User Case 4 – Controlling the robot from a distance. 

- Objective: User wants to test the robot’s connection from anywhere in the world and access the live camera stream. 

- Description: The user keeps the robot powered on overnight while they are not at the office. This will start a server for the user to connect to when they are away from the robot. The robot hosts a WebSocket for the website, ryanhodge.net, to connect to. Once the user opens the website, the robot begins sending images over the WebSocket to display on the client website. The robot will also begin receiving commands from the client to move around the office and retrieve items. 

- Expectation: The robot will communicate with the website and be able to accept commands from the user. Pressing the movement keys on the computer will send the proper command to the robot, and the robot will move in the correct direction. The robot will update the video feed going to the user.  

## User Case 5 – Traversing Through Tight Spaces 

- Objective: User wants to take advantage of the small stature of the robot to retrieve an object. 

- Description: The user powers on the RoboControl robot near the location of the hard-to-reach object. The user will then use the website controls to navigate the robot through the small space. For navigation, the user will look at the video stream for help and navigate based on the live feed.  

- Expectation: Firstly, the robot is powered on and runs a script to start up the WebSocket servers. These servers run continuously to scan for incoming connections. The website is opened, and automatically connects to the live WebSocket server. A command is sent in JSON format to the server, telling the robot to move forward. The robot receives this message and commands the tread motors to turn at the same speeds to propel the robot forwards. On the other side, the robot takes input in the form of images from the camera. The images are sent to the website and displayed as an image for the user.  