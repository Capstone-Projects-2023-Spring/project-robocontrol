# Importing the relevant libraries
import asyncio
from robot_commands_ws import RobotCommandWS
from robot_video_ws import RobotVideoWS
import threading

if __name__ == '__main__':
    commands = RobotCommandWS()
    video = RobotVideoWS()
    video_thread = threading.Thread(target=asyncio.run, args=(video.run(),))
    commands_thread = threading.Thread(target=asyncio.run, args=(commands.connect(),))
    video_thread.start()
    commands_thread.start()
    while True:
        if (not video_thread.is_alive()):
            video_thread.start()
