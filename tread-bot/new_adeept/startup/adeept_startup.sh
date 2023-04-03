#!/bin/sh
# adeept_startup.sh
# Add the following line to crontab. Command to do this: sudo crontab -e
# @reboot sh /home/robot/project-robocontrol/tread-bot/new_adeept/startup/adeept_startup.sh > /home/robot/logs/cronlog 2>&1
screen -dm -S adeept bash -c '/home/robot/project-robocontrol/tread-bot/new_adeept/startup/python_startup.sh; exec bash'
