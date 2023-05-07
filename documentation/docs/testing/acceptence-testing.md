---
sidebar_position: 3
---
# Acceptance Testing

## Test Procedure
| Test ID | Action/Steps | Expected Results |
| ------- | ------------ | ---------------- |
| 1 | **About Page:** Open the Web GUI and click on the **About** tab. | The About page should open, and the user should be able to find all the informaton available about the RoboControl. |
| 2 | **Test Network Connectivity:** Disconnect and reconnect from the Web GUI several times from RoboControl to ensure stable connection. | The Web GUI should be able to connect to the RoboControl consistently and without interruption. |
| 3 | **Utilizing the Control Buttons on the Web GUI:**  Open the Web GUI and select desired movement commands. | The RoboControl should move according to selected movement command. |
| 4 | **Detecting Colors and Automated Movement:** Place RoboControl on track and click 'Autonomous' button on the Web GUI. | The website should indicate that the RoboControl is in autonomous mode and it should move along the track autonomously until reaching the stop condition. |
      
## Test Results
- Test 1: About Page
  - This was a very simple test confirming that the website is functioning properly and is being hosted properly. This test was successful simply by navigating to ryanhodge.net and clicking on the button labeled "ABOUT"
- Test 2: Network Connectivity
  - While looking at the server output to confirm connection, a member of the team disconnected and reconnected multiple times from the website which was reflected in the output of the server. It was successfully confirmed that the same amount of re-connections were listed in the output of the server code.
- Test 3: Control Buttons
  - A team member successfully was able to control the robot by clicking all the buttons on the screen after logging in on the controls page. We confirmed that the commands were shown as physical output on the hardware of the tread-bot.
- Test 4: Autonomy
  - A path was set up on the ground for the robot. The autonomous button was pressed and the robot was successfully moving on  its own based on the images received through its vision detection infrastructure. 