---
sidebar_position: 5
---

# Use-case descriptions
Three use cases are described in detail below. Each use case represents a different method of using the application. These scenarios outline the edge of the device’s capabilities showcasing the possibilities of the project.

## Use Case #1
<b>Triggering Event</b>: Madison Beer is looking for a small, lost object in an unsanitary area. 

### Normal Flow (Actor: Madison, System: RoboControl):
1.	Madison powers on her RoboControl device and starts the GUI.
2.	The robot starts moving and uses its sensors and camera to gather data about its surroundings.
3.	Madison uses the onboard GUI to control the device and view the live video feed to observe the surroundings. 
4.	Once she finds the lost object, she uses the GUI to control the robot arm to pick up the object.
5.	Madison uses the controls to recall the RoboControl device, then leaving the GUI and turning the device off.

### Alternate Flow (Obstacle): 
1.	Madison powers on her RoboControl device and starts the GUI.
2.	The robot starts moving and uses its sensors and camera to gather data about its surroundings.
3.	The robot encounters an obstacle (wall, boxes, etc.) while searching for the lost object.
4.	Madison views the obstacle on the video feed, and the robot uses image recognition to show an obstacle on the GUI.
5.	Madison uses the controls to reroute the robot away from the obstacle to continue searching for the lost object. 

## Use Case #2
<b>Triggering Event</b>: Jason Derulo wants to use the RoboControl on a course he built, for his entertainment.

### Normal flow (Actor: Jason, System: RoboControl):
1.	Jason powers on his RoboControl device and starts the GUI.
2.	Jason uses the web-based GUI to control the robot and has it traverse through the course he built.
3.	The RoboControl device finishes the track, and Jason powers off the device. 

### Alternative Flow (Obstacle & Image Recognition):
1.	Jason turns on the RoboControl device and starts the GUI.
2.	Jason uses the onboard GUI to control the robot, but he mistakenly has it go off-course.
3.	The RoboControl device uses its image recognition capabilities to spot an unavoidable obstacle, halts, and notifies Jason through the GUI.
4.	Jason then uses the controls to reposition the robot onto the course.
5.	The RoboControl device finishes the track, and Jason powers off the device.

## Use Case #3
<b>Triggering Event</b>: Charlie Puth works at Wal-Mart and wants an efficient way to manage inventory.

### Normal flow (Actor: Charlie, System: RoboControl):
1.	Charlie powers on the RoboControl device and places it in the desired starting position in the store.
2.	Charlie uses the onboard GUI and camera on the device to take pictures of desired items on shelves around the store.
3.	Charlie uses this information to manage and update inventory information in real time.
4.	Charlie continues this process until it is no longer needed and turns off the camera feed/device.

### Alternative Flow (Autonomous & Obstacle):
1.	Charlie powers on the RoboControl device and places it in the desired starting position in the store.
2.	The RoboControl device is set to autonomous mode and goes around the store to view the desired items on shelves.
3.	The RoboControl device spots an obstacle (customers, boxes, etc.) in its path, and preemptively changes its course using image recognition to avoid the obstacle.
4.	Charlie continues to update and manage inventory information in real time as the RoboControl moves forward using the real-time video shown in the GUI.
