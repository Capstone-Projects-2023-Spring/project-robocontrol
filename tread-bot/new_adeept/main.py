# Importing the relevant libraries
import asyncio
import cv2
from robot_commands_ws import RobotCommandWS
from robot_video_ws import RobotVideoWS

async def main():
    commands = RobotCommandWS()
    video = RobotVideoWS()

    commands_task = asyncio.create_task(commands.connect())
    video_task = asyncio.create_task(video.connect())

    await commands_task
    await video_task

if __name__ == '__main__':
    asyncio.run(main())
    cv2.destroyAllWindows()
