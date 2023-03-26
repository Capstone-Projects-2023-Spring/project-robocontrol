# Importing the relevant libraries
import asyncio
from robot_commands_ws import RobotCommandWS
from robot_video_ws import RobotVideoWS
import threading

if __name__ == '__main__':
    commands = RobotCommandWS()
    video = RobotVideoWS()
    commands_thread = threading.Thread(target=asyncio.run, args=(commands.connect(),))
    video_thread = threading.Thread(target=video.run)
    commands_thread.start()
    video_thread.start()
    commands_thread.join()
    video_thread.join()
