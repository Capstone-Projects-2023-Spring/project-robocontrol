---
sidebar_position: 4
---


# Features and Requirements
- Movement Control
  - User should be able to move robot forwards, backwards, and make turns by alternating direction of treads in addition to sequencing movement commands
  - User should be able to issue an emergency stop command in the middle of any movement operation using the website GUI
- Robot Servo Control
  - User should be able to control the robot arm in three separate directions
  - User should be able to tilt the camera up and down
- Video Imaging
  - User should be able to receive video stream from robot, displayed on the GUI
  - Robot should be able to upload video stream in autonomous mode to the GUI
- Ultrasonic Sensor
  - User should be able to receive ultrasonic data on the GUI, indicating distance to nearest obstacle
- Autonomous Mode
  - User should be able to enable and disable autonomous mode, allowing robot to act within a set of parameters
  - Robot should have parameters established for autonomous mode allowing for movement within object or following distinct feature within video or ultrasonic sensor
  - Robot should be able to identify obstacles in autonomous mode and find routes to continue with issued commands, utilizing the object detection algorithm
- Color Detection
  - Server should be able to detect colored lines and display the detection to the user
- Object Detection
  - Robot should be able to detect obstacles in autonomous mode and stop if these obstacles block its path
