#!/bin/sh
# opencv_startup.sh
# Add the following line to crontab. Command to do this: sudo crontab -e
# @reboot sh /home/robot/Ryan/project-robocontrol/tread-bot-opencv/startup/opencv_startup.sh > /home/robot/logs/cronlog 2>&1
screen -dm -S adeept bash -c '/home/robot/Ryan/project-robocontrol/tread-bot-opencv/startup/python_startup.sh; exec bash'
