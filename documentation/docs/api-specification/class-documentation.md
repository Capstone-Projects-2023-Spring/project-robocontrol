---
sidebar_position: 1
description: Class documentation for the code architecture
---

# Class Documentation

## 1. Website

---

## Home Page

---
### **Home.tsx**

Component that renders the home page, including navigation buttons for the "Control" and "About" sections.

Methods:

```ts
handleClick
```  
Navigates to the specified path and scrolls to the top of the page.

Arguments:
- path: A string representing the path to navigate to.

Returns:
- None

```ts
Home Component
```  
Renders the Home component, which consists of the home page content and navigation buttons.

Arguments:
- None

Returns:
- A React.ReactElement representing the Home component.

### **Banner.tsx**

A class component that renders a banner with a hamburger menu for navigation.

Methods:

```ts
handleClose
```
Sets the state's `show` property to false, closing the Offcanvas menu.

Arguments:
- None

Returns:
- None

```ts
handleShow
```  
Sets the state's `show` property to true, opening the Offcanvas menu.

Arguments:
- None

Returns:
- None

```ts
handleLink
```  
Closes the Offcanvas menu and scrolls to the top of the page.

Arguments:
- None

Returns:
- None

```ts
render
```  
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

```ts
handleKeyDown
```  
An event handler for the keydown event. Sets the key state with the pressed character and updates the keyDown state to true.

Arguments:
- event: A KeyboardEvent object representing the keydown event.

Returns:
- None

```ts
handleKeyUp
```  
An event handler for the keyup event. Sets the key state with the pressed character and updates the keyDown state to false.

Arguments:
- event: A KeyboardEvent object representing the keyup event.

Returns:
- None

```ts
Control Component
```  
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

```ts
handleButtonClick
```  
Sends the button's command via the commands WebSocket when a button is clicked.

Arguments:
- command: A string representing the command to be sent.

Returns:
- None

```ts
handleButtonMouseDown
```  
Sends the button's command via the commands WebSocket when a button is pressed down.

Arguments:
- command: A string representing the command to be sent.

Returns:
- None

```ts
handleButtonMouseUp
```  
Sends the 'stop' command via the commands WebSocket when a button is released.

Arguments:
- None

Returns:
- None

```ts
ButtonGrid Component
```  
Renders the ButtonGrid component, which consists of a grid of buttons for controlling the robot.

Arguments:
- None

Returns:
- A React.ReactElement representing the ButtonGrid component.


---
## About Tab
---


### **About.tsx**

A functional component that displays the content of an About page using ReactMarkdown.

Props:
- None

State:
- markdownText: A string that stores the content of the About.md file.

Methods:

```ts
useEffect
```  
A React Hook that fetches the content of the About.md file and sets the markdownText state with the fetched content.

Arguments:
- None

Returns:
- None

```ts
render
```  
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

```ts
handleLogin
```  
Handles the login process. Makes a POST request to the authentication endpoint and, if successful, triggers the `loginSuccessful` prop function.

Arguments:
- None

Returns:
- None

```ts
handleEnterKeyPress
```  
Handles the keypress event. If the 'Enter' key is pressed, it triggers the `handleLogin` function.

Arguments:
- `event`: A React.KeyboardEvent representing the key event.

Returns:
- None

```ts
render
```  
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

```ts
handleSignup
```  
Handles the signup process. Validates the user input, hashes the password, and sends a POST request to the server to create a new user.

Arguments:
- None

Returns:
- None

```ts
render
```  
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

```python
motorStop
```  
Stops the motors.

Arguments:
- None

Returns:
- None

```python
setup
```  
Initializes the motors.

Arguments:
- None

Returns:
- None

```python
motor_left
```  
Controls Motor 2 for positive and negative rotation.

Arguments:
- status: Motor status (0: stop, 1: run).
- direction: Motor direction (Dir_forward or Dir_backward).
- speed: Speed of the motor.

Returns:
- None

```python
motor_right
```  
Controls Motor 1 for positive and negative rotation.

Arguments:
- status: Motor status (0: stop, 1: run).
- direction: Motor direction (Dir_forward or Dir_backward).
- speed: Speed of the motor.

Returns:
- None

```python
move
```  
Controls the movement and turns of the robot.

Arguments:
- speed: Speed of the robot.
- direction: Robot direction ('forward', 'backward', or 'no').
- turn: Robot turn direction ('left', 'right', or 'no').
- radius (optional): Turning radius (0 < radius <= 1, default: 0.6).

Returns:
- None

```python
arm_claw_control
```  
Controls the servos for the robot's arm and claw.

Arguments:
- claw_command: Claw control command ('open', 'close', or 'no').
- shoulder_command: Shoulder control command ('up', 'down', or 'no').
- elbow_command: Elbow control command ('up', 'down', or 'no').
- camera_command: Camera control command ('up', 'down', or 'no').

Returns:
- None

```python
destroy
```  
Stops the motors and releases the resources.

Arguments:
- None

Returns:
- None

---

## robot_commands_ws.py

---

A script to manage the WebSocket connection for robot commands.

Imports:
- websockets
- functions
- move
- json
- asyncio
- arm_claw_control (from move)

Class:

```python
RobotCommandWS
```  
- PORT: WebSocket port number.
- HOST: WebSocket server IP address.
- HOST_PATH: WebSocket server URL.

Methods:

```python
__init__(self) -> None:
```  
Initializes RobotCommandWS instance with necessary attributes.

Arguments:
- None

Returns:
- None

```python
async connect(self):
```  
Establishes the WebSocket connection to the command server, and maintains it. If the connection drops, it tries to reconnect.

Arguments:
- None

Returns:
- None

```python
async receive(self, ws):
```
Receives messages from the WebSocket, processes and handles them. Controls the robot's movement and arm/claw/camera commands based on received messages.

Arguments:
- ws: The WebSocket object to receive messages from.

Returns:
- None

```python
async send(self, ws):
```  
Sends data to the WebSocket server if the robot is in autonomous mode. The sent data includes the ultrasonic distance readings.


Arguments:
- ws: The WebSocket object to send messages to.

Returns:
- None

---

## robot_video_ws.py

---

A script to manage the video stream for the robot using GStreamer.

Imports:
- os

Class:

**RobotVideoWS**

Methods:

```python
run(self):
```  
Runs the GStreamer command to stream the video from the robot to a remote server.

Arguments:
- None

Returns:
- None

---

## 3. OpenCV

---
## Startup
---

### **opencv.py**
---

A script to manage the video and command websockets for the robot using OpenCV.

Imports:
- asyncio
- opencv_video: VideoWS
- opencv_commands: CommandWS
- Queue
- threading
- image_processing.process_images: process_img

Async Functions:

```python
main():
```  
Sets up the necessary websockets and image processing threads for the robot.

Arguments:
- None

Returns:
- None

Main Execution:

If the script is run as the main program, it starts the main async function.

---
### **opencv_video.py**
---

A script to manage the video streaming for the robot using OpenCV.

Imports:
- typing: List
- cv2
- base64
- Queue
- flask: Flask, Response
- threading

Global Variables:

- `original_lock`: Lock for the original video stream thread.
- `color_detection_lock`: Lock for the color detection video stream thread.

Functions:

```python
cv2_to_base64(img):
```
Converts an OpenCV image to Base64 bytes for transmission.

Arguments:
- img: An OpenCV image.

Returns:
- Base64 bytes of the image.

Class:

```python
VideoWS:
```

Attributes:
- PORT: Port number for the video websocket server.
- HOST: IP address for the video websocket server.
- dummy_img: Dummy image when there's no data to send.
- vid: OpenCV VideoCapture object.
- clients: Set of connected clients.
- img_proc_q: Queue for image processing.
- websocket_q: Queue for processed images from the websocket.
- app: Flask app object.
- autonomous: List containing a boolean value for autonomous mode status.

Methods:

```python
start(self, img_proc_q, websocket_q, autonomous: List[bool]):
```  
Starts the video websocket server.

Arguments:
- img_proc_q: Queue for image processing.
- websocket_q: Queue for processed images from the websocket.
- autonomous: List containing a boolean value for autonomous mode status.

Returns:
- None

```python
original_stream(self):
```
Creates a Flask response for the original video stream.

Arguments:
- None

Returns:
- Flask Response object for the original video stream.

```python
color_detection_stream(self):
```
Creates a Flask response for the color detection video stream.

Arguments:
- None

Returns:
- Flask Response object for the color detection video stream.

```python
original(self):
```
Main loop for displaying the original video stream.

Arguments:
- None

Returns:
- Generator yielding the original video stream.

```python
color_detection(self):
```
Main loop for displaying the color detection video stream.

Arguments:
- None

Returns:
- Generator yielding the color detection video stream.

---
### **opencv_commands.py**

---

A script to manage the command websocket server for the robot using OpenCV.

Imports:
- json
- typing: List
- websockets
- asyncio
- queue: Queue
- copy

Class:

```python
CommandWS:
```

Attributes:
- PORT: Port number for the command websocket server.
- HOST: IP address for the command websocket server.
- clients: Set of connected clients.
- robot_ws: Websocket object for the robot.
- command_q: Queue for commands.
- autonomous: List containing a boolean value for autonomous mode status.
- ultrasonic_data_q: Queue for ultrasonic data.

Methods:

```python
start_server(self, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
```
Starts the command websocket server.

Arguments:
- command_q: Queue for commands.
- autonomous: List containing a boolean value for autonomous mode status.
- ultrasonic_data_q: Queue for ultrasonic data.

Returns:
- None

```python
serve(self, websocket):
```
Serves the websocket.

Arguments:
- websocket: Websocket object for the client.

Returns:
- None

```python
send(self, websocket):
```
Sends data through the websocket.

Arguments:
- websocket: Websocket object for the client.

Returns:
- None

```python
receive(self, websocket):
```
Receives data through the websocket.

Arguments:
- websocket: Websocket object for the client.

Returns:
- None



---
### **color_tuning.p**

---


A script to tune color detection for a robot using OpenCV.

Imports:
- cv2
- numpy as np

Functions:

```python
nothing(x):
```
A dummy function that does nothing. Used as a callback for the trackbar.

Arguments:
- x: An argument passed by the trackbar.

Returns:
- None

```python
detect_colors():
```
Detects colors in a video stream, allowing adjustment of the color range using trackbars.

Arguments:
- None

Returns:
- None

---
### **autonomy.py**

---


A module for autonomously controlling the robot.

Imports:
- queue: Queue
- image_processing.color_detection: direction_to_center

Class:

```python
Automation:
```

Attributes:
- isCentered: Boolean value indicating if the robot is centered.
- commands_q: Queue for commands.
- ultrasonic_data: Data received from ultrasonic sensor.

Methods:

```python
__init__(self, q: Queue) -> None:
```
Initializes the Automation class.

Arguments:
- q: Queue for commands.

Returns:
- None

```python
process_ultrasonic_data(self, data):
```
Processes the ultrasonic sensor data.

Arguments:
- data: Data received from the ultrasonic sensor.

Returns:
- None

```python
crop_image(self, image, h):
```
Crops the image to the desired height.

Arguments:
- image: Image to be cropped.
- h: Desired height to crop the image.

Returns:
- Cropped image.

```python
center_robot(self, direction) -> None:
```
Centers the robot based on the image.

Arguments:
- direction: Direction in which the robot needs to be centered.

Returns:
- None


```python
direction_to_center(image) -> str:
```
Determines the direction in which the robot needs to be centered based on the image.

Arguments:
- image: Image to be processed.

Returns:
- A string indicating the direction in which the robot needs to be centered ('left', 'right', 'center').


---
### **automation.py**

---

A module for autonomously controlling the robot based on detecting boundary lines using OpenCV.

Imports:
- opencv as cv2

Methods:

```python
within_Bounds(image)
```
Checks if both boundary lines are within the camera view.

Arguments:
- image: Image captured by the camera.

Returns:
- A boolean value indicating whether both boundary lines are within the camera view.

```python
reached_End()
```
Determines if the robot has reached the end of the track.

Arguments:
- None

Returns:
- A boolean value indicating whether the robot has reached the end of the track.

```python
automated_Movement(image)
```
Initiates the autonomous movement of the robot.

Arguments:
- image: Image captured by the camera.

Returns:
- None

```python
moveCamera()
```
Moves the camera up or down to keep the boundary lines in view.

Arguments:
- None

Returns:
- None

```python
turnLeft()
```
Turns the robot left until both boundary lines are in view.

Arguments:
- None

Returns:
- A boolean or integer value indicating the status of the left boundary line.

```python
turnRight()
```
Turns the robot right until both boundary lines are in view.

Arguments:
- None

Returns:
- A boolean or integer value indicating the status of the right boundary line.


---
## Image Processing
---
### **color_detection.py**
---

A module for detecting colors using OpenCV.

Imports:
- typing: List
- cv2
- numpy as np

Class:

```python
Contour:
```

Attributes:
- area: Area of the contour.
- contour: Contour object.

Methods:

```python
__init__(self, area, contour)
```
Initializes a new `Contour` object with the given area and contour.

Arguments:
- area: Area of the contour.
- contour: Contour object.

Returns:
- None

```python
set_area(self, area)
```
Sets the area of the contour.

Arguments:
- area: Area of the contour.

Returns:
- None

```python
set_contour(self, contour)
```
Sets the contour object.

Arguments:
- contour: Contour object.

Returns:
- None

Variables:

- yellow_tape_lower: Lower bound of the yellow color range.
- yellow_tape_upper: Upper bound of the yellow color range.
- kernel: 5x5 numpy array.

Methods:

```python
make_contours(mask, text, img)
```
Makes the contours for the given mask and text on the image.

Arguments:
- mask: Mask for the contours.
- text: Text to put on the image.
- img: Image to put the contours on.

Returns:
- Image with the contours.

```python
direction_to_center(img)
```
Determines which direction the robot should turn to center between the tape lines.

Arguments:
- img: Image captured by the camera.

Returns:
- A string indicating the direction the robot should turn to center between the tape lines.

```python
detect_colors(img)
```

Detects colors in the image.

Arguments:
- img: Image captured by the camera.

Returns:
- Image with the detected colors.


---
### **detect_painters_tape.py**
---

A script to manage the command websocket server for the robot using OpenCV.

Imports:
- json
- typing: List
- websockets
- asyncio
- queue: Queue
- copy

Class:

```python
CommandWS:
```

Attributes:
- PORT: Port number for the command websocket server.
- HOST: IP address for the command websocket server.
- clients: Set of connected clients.
- robot_ws: Websocket object for the robot.
- command_q: Queue for commands.
- autonomous: List containing a boolean value for autonomous mode status.
- ultrasonic_data_q: Queue for ultrasonic data.

Methods:

```python
start_server(self, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
```
Starts the command websocket server.

Arguments:
- command_q: Queue for commands.
- autonomous: List containing a boolean value for autonomous mode status.
- ultrasonic_data_q: Queue for ultrasonic data.

Returns:
- None

```python
serve(self, websocket):
```
Serves the websocket.

Arguments:
- websocket: Websocket object for the client.

Returns:
- None

```python
send(self, websocket):
```
Sends data through the websocket.

Arguments:
- websocket: Websocket object for the client.

Returns:
- None

```python
receive(self, websocket):
```
Receives data through the websocket.

Arguments:
- websocket: Websocket object for the client.

Returns:
- None

---

### **detect_painters_tape.py**
---

A script to detect painter's tape on a video stream.

Imports:
- cv2
- numpy

Global variables:
- vid: VideoCapture object for video stream.
- painters_tape_lower: numpy array of lower HSV values for painters tape color.
- painters_tape_upper: numpy array of upper HSV values for painters tape color.
- kernel: numpy array for morphological operations.

Functions:

```python
make_contours(mask, text, img):
```
Draws contours around detected objects.

Arguments:
- mask: binary mask of detected objects.
- text: text label for detected objects.
- img: original image frame.

Returns:
- img: original image frame with contours drawn.

```python
detect_colors():
```
Detects painter's tape color in the video stream.

Returns:
- None

---
### **process_images.py**
---

A script to process images from a video stream and send commands to the robot.

Imports:
- queue: Queue
- typing: List
- image_processing.color_detection: detect_colors, direction_to_center
- autonomy: Automation

Functions:

```python
process_img(img_proc_q: Queue, websocket_q: Queue, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
```
Processes images from a video stream and sends commands to the robot.

Arguments:
- img_proc_q: Queue for image processing.
- websocket_q: Queue for sending images through the websocket.
- command_q: Queue for sending commands to the robot.
- autonomous: List containing a boolean value for autonomous mode status.
- ultrasonic_data_q: Queue for ultrasonic data.

Returns:
- None

---





