---
sidebar_position: 1
description: What should be in this section.
---

# Class Documentation

## 1. Website

---

## Home Page

---
### **Home.tsx**

Component that renders the home page, including navigation buttons for the "Control" and "About" sections.

Methods:

```handleClick```  
Navigates to the specified path and scrolls to the top of the page.

Arguments:
- path: A string representing the path to navigate to.

Returns:
- None

```Home Component```  
Renders the Home component, which consists of the home page content and navigation buttons.

Arguments:
- None

Returns:
- A React.ReactElement representing the Home component.

### **Banner.tsx**

A class component that renders a banner with a hamburger menu for navigation.

Methods:

```handleClose```  
Sets the state's `show` property to false, closing the Offcanvas menu.

Arguments:
- None

Returns:
- None

```handleShow```  
Sets the state's `show` property to true, opening the Offcanvas menu.

Arguments:
- None

Returns:
- None

```handleLink```  
Closes the Offcanvas menu and scrolls to the top of the page.

Arguments:
- None

Returns:
- None

```render```  
Renders the Banner component, which includes a Hamburger button and the Offcanvas navigation menu.

Arguments:
- None

Returns:
- A React.ReactElement representing the Banner component.

---
## Control Tab
---
### **Control.tsx**

Component that renders the control interface for the robot. This interface includes a live video stream from the robot's camera, as well as the button grid for controlling the robot's movements, arm and claw

State:
- loggedIn: A boolean indicating whether the user is logged in.
- key: An object representing the pressed key and its state, containing the char (character) and keyDown (whether the key is currently pressed) properties.

Methods:

```handleKeyDown```  
An event handler for the keydown event. Sets the key state with the pressed character and updates the keyDown state to true.

Arguments:
- event: A KeyboardEvent object representing the keydown event.

Returns:
- None

```handleKeyUp```  
An event handler for the keyup event. Sets the key state with the pressed character and updates the keyDown state to false.

Arguments:
- event: A KeyboardEvent object representing the keyup event.

Returns:
- None

```Control Component```  
Renders the Control component, which includes the video stream from the robot's camera, the color detection stream, and the ButtonGrid component for controlling the robot. Also, handles keyboard input for robot control.

Arguments:
- None

Returns:
- A React.ReactElement representing the Control component.  


### **ButtonGrid.tsx**

Component that renders a grid of buttons for controlling the robot's movements.

Props:
- keyPress: An object representing the pressed key and its state, containing the char (character) and keyDown (whether the key is currently pressed) properties.
- commands_ws: A WebSocket object for sending robot commands.

Methods:

```handleButtonClick```  
Sends the button's command via the commands WebSocket when a button is clicked.

Arguments:
- command: A string representing the command to be sent.

Returns:
- None

```handleButtonMouseDown```  
Sends the button's command via the commands WebSocket when a button is pressed down.

Arguments:
- command: A string representing the command to be sent.

Returns:
- None

```handleButtonMouseUp```  
Sends the 'stop' command via the commands WebSocket when a button is released.

Arguments:
- None

Returns:
- None

```ButtonGrid Component```  
Renders the ButtonGrid component, which consists of a grid of buttons for controlling the robot.

Arguments:
- None

Returns:
- A React.ReactElement representing the ButtonGrid component.


---
## About Tab
---

---
### **About.tsx**

A functional component that displays the content of an About page using ReactMarkdown.

Props:
- None

State:
- markdownText: A string that stores the content of the About.md file.

Methods:

```useEffect```  
A React Hook that fetches the content of the About.md file and sets the markdownText state with the fetched content.

Arguments:
- None

Returns:
- None

```render```  
Renders the About component, which includes an AboutContainer that contains the AboutTextContainer, which displays the content of the About.md file using ReactMarkdown.

Arguments:
- None

Returns:
- A React.ReactElement representing the About component.



---

## Login

---

### **Login.tsx**

Component that renders a login form for the user to input their username and password to access controls.

Props:
- `loginSuccessful`: A function that will be called when the login is successful.

Methods:

```handleLogin```  
Handles the login process. Makes a POST request to the authentication endpoint and, if successful, triggers the `loginSuccessful` prop function.

Arguments:
- None

Returns:
- None

```handleEnterKeyPress```  
Handles the keypress event. If the 'Enter' key is pressed, it triggers the `handleLogin` function.

Arguments:
- `event`: A React.KeyboardEvent representing the key event.

Returns:
- None

```render```  
Renders the Login component, which includes input fields for the username and password, and a login button.

Arguments:
- None

Returns:
- A React.ReactElement representing the Login component.

### **Signup.tsx**

Component that renders a signup form for the user to input their username, password, email, and phone number.

Props:
- None

Methods:

```handleSignup```  
Handles the signup process. Validates the user input, hashes the password, and sends a POST request to the server to create a new user.

Arguments:
- None

Returns:
- None

```render```  
Renders the Signup component, which includes input fields for the username, password, email, and phone number, and a signup button.

Arguments:
- None

Returns:
- A React.ReactElement representing the Signup component.



---

## 2. Robot

---

## main.py

---

A script to establish connections for robot command and video streaming.

Imports:
- asyncio
- threading
- RobotCommandWS (from robot_commands_ws)
- RobotVideoWS (from robot_video_ws)

Main Execution:

1. Create instances of RobotCommandWS and RobotVideoWS.
2. Start separate threads for each connection:
   - commands_thread: Runs the asynchronous connection of RobotCommandWS instance.
   - video_thread: Runs the video streaming connection of RobotVideoWS instance.
3. Wait for both threads to complete using join() method.

---

## move.py

---


A script to control the motors and servos for a robot.

Imports:
- time
- RPi.GPIO as GPIO
- RPIservo

Global Variables:

- `Motor_A_EN, Motor_B_EN`: Enable pins for Motor A and B.
- `Motor_A_Pin1, Motor_A_Pin2, Motor_B_Pin1, Motor_B_Pin2`: Control pins for Motor A and B.
- `Dir_forward, Dir_backward, left_forward, left_backward, right_forward, right_backward`: Direction variables.
- `pwn_A, pwm_B`: PWM variables for Motor A and B.
- `claw_servo, arm_servo, elbow_servo, camera_servo`: Servo control objects.

Functions:

```motorStop```  
Stops the motors.

Arguments:
- None

Returns:
- None

```setup```  
Initializes the motors.

Arguments:
- None

Returns:
- None

```motor_left```  
Controls Motor 2 for positive and negative rotation.

Arguments:
- status: Motor status (0: stop, 1: run).
- direction: Motor direction (Dir_forward or Dir_backward).
- speed: Speed of the motor.

Returns:
- None

``motor_right```  
Controls Motor 1 for positive and negative rotation.

Arguments:
- status: Motor status (0: stop, 1: run).
- direction: Motor direction (Dir_forward or Dir_backward).
- speed: Speed of the motor.

Returns:
- None

```move```  
Controls the movement and turns of the robot.

Arguments:
- speed: Speed of the robot.
- direction: Robot direction ('forward', 'backward', or 'no').
- turn: Robot turn direction ('left', 'right', or 'no').
- radius (optional): Turning radius (0 < radius <= 1, default: 0.6).

Returns:
- None

```arm_claw_control```  
Controls the servos for the robot's arm and claw.

Arguments:
- claw_command: Claw control command ('open', 'close', or 'no').
- shoulder_command: Shoulder control command ('up', 'down', or 'no').
- elbow_command: Elbow control command ('up', 'down', or 'no').
- camera_command: Camera control command ('up', 'down', or 'no').

Returns:
- None

```destroy```  
Stops the motors and releases the resources.

Arguments:
- None

Returns:
- None

---




