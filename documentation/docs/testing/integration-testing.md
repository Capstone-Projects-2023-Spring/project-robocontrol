---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Testing Procedure

### Use Case 1 - Locate and pick up small objects

- Objective: User wants to locate an object in a hard to reach or unsanitary area. 

- Description: The user powers on the RoboControl device, which activates the geared motors to move the treads and the ultrasonic sensors and camera to gather data about the area. The user then accesses the onboard GUI to control the robot's movements and view the live video feed. The user will maneuver the RoboControl device to search for the missing item and, when located, the user uses the GUI to control the five servos of the robotic arm to retrieve the object. Finally, the user will recall the RoboControl device using the controls and turn off the device. 

- Expectation: The RoboControl device should successfully power on, activate the geared motors, ultrasonic sensors, and camera. The GUI should be accessible, allowing the user to control the movements of the robot and view the live video feed. The robotic arm's five servos should also be controllable through the GUI, allowing the user to retrieve the missing item. The RoboControl device should successfully be recalled using the controls, and the device should power off without any issues. If any issues arise, error messages should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem. 

### Use Case 2 – Explore obstacle course for entertainment

- Objective: User wants to use the RoboControl device to navigate a course he built for entertainment. 

- Description: The user powers on the RoboControl device, accessing the web-based GUI to control the robot's movements through the course that the user has built. The user will need to navigate through various surfaces of varying traction, slight inclines and declines, and small obstacles. To aid in navigation, the user will rely on the live camera feed to keep track of the robot's location as it traverses the course. 

- Expectation: The RoboControl device should successfully power on and connect to the web-based GUI. The GUI should allow the user to control the movements of the robot through the course, navigating through various terrains and obstacles. The live camera feed should be accessible and provide a clear view of the robot's surroundings, allowing the user to accurately track its location. The robot should successfully complete the course, and any errors or issues should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem.

### Use Case 3 – Autonomously explore obstacle course for entertainment

- Objective: User wants to use the RoboControl device to navigate a course he built for entertainment. 

- Description: The user powers on the RoboControl device, accessing the web-based GUI. The user will place the robot at the beginning of the track. The user will click on the button labeled "AUTONOMOUS" to begin the robot's movement through the course and watch the robot as it traverses the path at hand.

- Expectation: The RoboControl device should successfully power on and connect to the web-based GUI. The GUI should not allow the user to control the movements of the robot through the course, navigating through various terrains and obstacles. The live camera feed should be accessible and provide a clear view of the robot's surroundings, allowing the user to accurately track its location. The robot should successfully complete the course, and any errors or issues should be displayed on the GUI, allowing the user to troubleshoot and resolve the problem. The autonomous camera feed will also be displayed to the user during the autonomous operation.

### Use Case 4 - Controlling the robot from another location

- Objective: User wants to control the robot while they are away so that they can confirm security measures were taken before leaving the house.
- Description: For this test, the robot will be powered on and left at the school while a team member goes back to their apartment. The robot will then be controlled by this team member from afar, confirming teleoperation from any location.
- Expectation: The robot should read commands from anywhere with rather little latency.

### Use Case 5 - Mapping the environment

- Objective: User wants to make a map of the robots environment and add physical waypoints so that it knows where it has been.
- Description: The robot will be placed in a hallway with small wrappers to carry with its arm. The robot will be able to pick up these wrappers (controlled by a member of the team) and place them along its path as it moves along. Once it places one wrapper, it will navigate back to the pile of wrappers to secure more.
- Expectation: The robot will be able to be manually controlled to pick up and release these wrappers along its path when it is moving in the hallway.

## Testing Results

### Use Case 1 - Locate and pick up small objects
This feature was tested successfully without issues. A tissue was placed in a challenging to reach location (under a bed) and the user was successfully able to control the robot and direct it towards the discarded tissue. Once it arrived at the location of the tissue, the user moved the arm into position as well as the camera so that it could see the arm's position, and the claw closed around the tissue. While holding the tissue suspended, the user controlled the robot to navigate back to them so that they could properly dispose of the trash.

### Use Case 2 – Explore obstacle course for entertainment
This feature was tested and was largely successful with a few problems that occurred during the testing phase. The obstacle was made from taped lines along with some **slight** inclines and declines throughout the course. The robot was traversing the straight sections well, but when it came to autonomous turns the robot had a difficult time moving with its environment. This was a hardware issue, though, which could not be fixed without purchasing new materials and motors. 

### Use Case 3 – Streamline inventory management
The same course was used for this test as the previous, but the robot was controlled autonomously this time. The robot ran into the same issues where turning was proving to be very difficult for the motors being used. This was still a hardware issue, and could be fixed with motors with more torque.

### Use Case 4 – Controlling the robot from a distance
This test was fully successful. The robot was placed in the Idea's Hub of the engineering building while a member of the project group when home and accessed the GUI to control the robot while someone else stayed at the Idea's Hub to confirm the low latency. The robot was controlled by the user at home with very little latency.

### Use Case 5 – Traversing Through Tight Spaces 
The robot was brought to the third floor of the engineering building and manually controlled by a member of the team. A pile of tissues with different marks on them were placed in a pile next to the robot. The GUI was accessed and the user logged into the GUI. While being controlled, the user picked up and placed the tissues along its path, using the robot's camera to visualize its trajectory. This test proved to be successful, and no issues were brought to the user's attention.
