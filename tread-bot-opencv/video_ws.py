# Importing the relevant libraries
import json
import websockets
import cv2
import numpy as np
import base64
import asyncio

# Keep for when it is needed
def base64_to_cv2(img):
    img_bytes = base64.b64decode(img)
    im_arr = np.frombuffer(img_bytes, dtype=np.uint8)
    return cv2.imdecode(im_arr, flags=1)

class VideoWS():
	PORT = 10333
	HOST = '192.168.2.1'

	def __init__(self) -> None:
		self.msg = {
			'image': ''
		}
		self.clients = set()

	async def start_server(self):
		# Start the servers
		async with websockets.serve(self.serve, VideoWS.HOST, VideoWS.PORT, ping_timeout=None):
			await asyncio.Future()
	
	async def serve(self, websocket):
		print("Video client connected")
		self.clients.add(websocket)
		try:
			while True:
				msg = await websocket.recv()
				self.msg = json.loads(msg)
				# TODO: Will probably send the message back out to the robot. Might need to change for performance
				websockets.broadcast(self.clients, msg)
		except websockets.exceptions.ConnectionClosed as e:
			print("Video client disconnected")
		finally:
			self.clients.remove(websocket)
