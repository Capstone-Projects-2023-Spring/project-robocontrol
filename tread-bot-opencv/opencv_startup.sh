#!/bin/sh
# opencv_startup.sh
# Add the following line to crontab. Command to do this: sudo crontab -e
# @reboot sh /home/robot/Ryan/project-robocontrol/tread-bot-opencv/opencv_startup.sh > /home/robot/logs/cronlog 2>&1

cd /home/robot/Ryan/project-robocontrol/tread-bot-opencv/
python3 opencv_websockets.py