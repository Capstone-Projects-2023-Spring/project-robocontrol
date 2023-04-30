# About
## Getting Started As A User
In order to be able to control the robot, the user should contact ryan.hodge@temple.edu and submit a request for access. The user will be notified once a username and password has been granted, then the user should go to ryanhodge.net to access the user interface. From here the user will select menu icon in the top left portion of the screen and select CONTROL from the pop-out display. On the controls page, there will be a interactive box requesting username and password. The user will fill out the relevant information and click the LOGIN box within. Upon successful connection, the user will now be able to control movement of the robot.
The control scheme is as follows:
- W: Move arm shoulder up
- S: Move arm shoulder down
- Q: Move arm elbow up
- E: Move arm elbow down
- A: Open claw
- D: Close claw
- R: Raise camera
- F: Lower camera
- The arrow keys control movement of the robot

## Control
The robot implements features that enable a user to remotely control operations through a web interface. Network traffic is passed through explicitly defined JSON websockets that enable communication to and from the robot. There are three distinct features of the robot and its systems.

### Program Workflow
1. The website is hosted and registered under the ryanhodge.net domain name through `CloudFlare`
2. From the server, the website is hosted using an `nginx` configuration file seen [here](../nginx-config.txt)
3. The server uses `WireGuard` to connect to the robot through a VPN direct connection as long as the robot can connect to WiFi
4. To send the video to the server, `GStreamer` is utilized
5. To send all commands from the website, `WebSockets` are used
6. For the transmission of video from the server to the website, `Flask` is being used
7. `ExpressJS` is used to hash and store passwords for users
8. When the robot is restarted, to automatically start the code `systemd` is used
   1. `sudo systemctl enable opencv.service`
   2. `sudo systemctl enable adeept.service`
9. OpenCV is used for the image processing
10. Programming languages
   1.  The front end of the website is programmed using TypeScript
   2.  The server-side code is programmed with Python and JavaScript
   3.  The robot code is programmed with Python

### Robot
The robot itself has an explicitly defined IP address that enables it to send and receive network traffic through WebSockets. The robot utilizes code that interprets web commands into movement commands. Execution is defined explicitly through ports on the RaspberryPi that allows it to execute control code on different components (i.e. Left Tread Control, Right Tread Control, Camera Movement, etc). 

### Server
The server is where the majority of the processing takes place. While the server receives data through JSON websockets, it will then take this network data and execute different functions (i.e. Color Detection, Object Detection, etc). The main reason is to decouple computational requirements from the RaspberryPi on the robot itself and reduce computational and memory requirements on a system not ideally built for such a task. This way, we are able to provide much greater capability to the project as a whole rather than being limited by the RaspberryPI. The server acts as an intermediary for processing and communication to and from the robot. 

### Website
The website hosts many of the user interface components that enable a user to interact with the robot. The website is also the forward facing component of any computational work conducted on the server and passed to the website itself. This may take the form of a video feed (post-processed by server functions) and any relevant data passed from the robot. In addition, the website hosts the control functionality to pass web commands to the robot (i.e. Movement commands, Arm commands, etc.). The website itself is simply the interface for the user. 
