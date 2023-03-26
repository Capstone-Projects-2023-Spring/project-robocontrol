# Importing the relevant libraries
import asyncio
from opencv_video import VideoWS
from opencv_commands import CommandWS
from queue import Queue
import threading
from image_processing.process_images import process_img

async def main():
	img_proc_q = Queue()
	websocket_q = Queue()

	commands = CommandWS()
	video = VideoWS()

	commands_thread = threading.Thread(target=asyncio.run, args=(commands.start_server(),))
	video_thread = threading.Thread(target=asyncio.run, args=(video.start(img_proc_q, websocket_q),))
	img_processing_thread = threading.Thread(target=process_img, args=(img_proc_q, websocket_q,))
	
	img_processing_thread.start()
	commands_thread.start()
	video_thread.start()
	img_processing_thread.join()
	commands_thread.join()
	video_thread.join()

if __name__ == '__main__':
	asyncio.run(main())
