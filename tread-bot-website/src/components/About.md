# About # 
## Overview ## 
### Control ### 
The robot implements features that enable a user to remotely control operations through the web. Network traffic is passed through explictly defined JSON websockets that enable communication to and from the robot. There are three distinct features of the robot and its systems.

#### Robot #### 
The robot itself has an explictly defined IP address that enables it to send and receive network traffic through JSON websockets. The robot utilizes code that interprets web commands into movement commands. Execution is defined explicitly through ports on the RaspberryPi that allows it to execute control code on different components (i.e. Left Tread Control, Right Tread Control, Camera Movement, etc). 

#### Server #### 
The server is where the majority of the processing takes place. While the server receives data through JSON websockets, it will then take this network data and execute different functions (i.e. Color Detection, Object Detection, etc). The main reason is to decouple computational requirements from the RaspberryPi on the robot itself and reduce compuational and memory requirements on a system not ideally built for such a task. This way, we are able to provide much greater capability to the project as a whole rather than being limited by the RaspberryPI. The server acts as an intermediary for processing and communication to and from the robot. 

#### Website #### 
The website hosts many of the user interface components that enable a user to interact with the robot. The website is also the forward facing component of any computational work conducted on the server and passed to the website itself. This may take the form of a video feed (post-processed by server functions) and any relevant data passed from the robot. In addition, the website hosts the control functionality to pass web commands to the robot (i.e. Movement commands, Arm commands, etc.). The website itself is simply the interface for the user. 

### Getting Started As A User ###
In order to be able to control the robot, the user should contact (WHO DOES USER CONTACT?) and submit a request for access. Once a username and password has been implemented, the user should go to ryanhodge.net to access the user interface. From here the user will select menu icon in the top left portion of the screen and select CONTROL from the menu display. On the controls page, there will be a interactive box requesting username and password. The user will fill out the relevant inforamtion and click the LOGIN box within. Upon successful connection, the user will now be able to control movement of the robot. The control scheme is a simple WASD scheme. W for forward movement. S for backward movement. A for rotating the robot left. D for rotating the robot right. ##TODO## UPDATE FURTHER CONTROLS FOR THE ROBOT AS THEY ARE IMPLEMENTED 