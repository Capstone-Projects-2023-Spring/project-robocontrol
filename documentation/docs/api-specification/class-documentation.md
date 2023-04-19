---
sidebar_position: 1
description: What should be in this section.
---

# Class Documentation

## Treadbot Website

### Control Tab

---
**Control**

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

---

