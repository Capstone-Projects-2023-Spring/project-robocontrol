# Importing the relevant libraries
import asyncio
import websockets
from video_ws import VideoWS
from commands_ws import CommandWS

def main():
	commands = CommandWS()
	video = VideoWS()

	# Start the servers
	loop = asyncio.new_event_loop()
	asyncio.set_event_loop(loop)

	commands_server = websockets.serve(commands.serve, commands.HOST, commands.PORT)
	video_server = websockets.serve(video.serve, video.HOST, video.PORT)
	loop.run_until_complete(commands_server)
	loop.run_until_complete(video_server)
	loop.run_forever()

if __name__ == '__main__':
	main()
