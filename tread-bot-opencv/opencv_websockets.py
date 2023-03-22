# Importing the relevant libraries
import asyncio
import websockets
from video_ws import VideoWS
from commands_ws import CommandWS

async def main():
	commands = CommandWS()
	video = VideoWS()

	commands_task = asyncio.create_task(commands.start_server())
	video_task = asyncio.create_task(video.start_server())

	await commands_task
	await video_task

if __name__ == '__main__':
	asyncio.run(main())
