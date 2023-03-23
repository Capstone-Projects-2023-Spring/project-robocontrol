# Importing the relevant libraries
import asyncio
from video_ws import VideoWS
from commands_ws import CommandWS
import threading

async def main():
	commands = CommandWS()
	video = VideoWS()
	video_thread = threading.Thread(target=asyncio.run, args=(video.run(),))
	commands_thread = threading.Thread(target=asyncio.run, args=(commands.start_server(),))
	video_thread.start()
	commands_thread.start()
	while True:
		pass

if __name__ == '__main__':
	asyncio.run(main())
