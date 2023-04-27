---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Use Case 1 - Locate and pick up small objects

- Objective: User wants to locate an object in a hard to reach or unsanitary area. 

- Description: The user powers on the RoboControl device, which activates the geared motors to move the treads and the ultrasonic sensors and camera to gather data about the area. The user then accesses the onboard GUI to control the robot's movements and view the live video feed. The user will maneuver the RoboControl device to search for the missing item and, when located, use the GUI to control the five servos of the robotic arm to retrieve the object. Finally, the user will recall the RoboControl device using the controls and turn off the device. 

- Expectation: The RoboControl device should successfully power on, activate the geared motors, ultrasonic sensors, and camera. The GUI should be accessible, allowing the user to control the movements of the robot and view the live video feed. The robotic arm's five servos should also be controllable through the GUI, allowing the user to retrieve the missing item. The RoboControl device should successfully be recalled using the controls, and the device should power off without any issues. If any issues arise, error messages should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem. 