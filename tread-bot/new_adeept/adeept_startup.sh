#!/bin/sh
# adeept_startup.sh
# Add the following line to crontab. Command to do this: sudo crontab -e
# @reboot sh /home/robot/project-robocontrol/tread-bot/new_adeept/adeept_startup.sh > /home/robot/logs/cronlog 2>&1

cd /home/robot/project-robocontrol/tread-bot/new_adeept
sudo python3 main.py