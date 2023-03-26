# Importing the relevant libraries
import cv2
import websockets
import asyncio
import json
import base64
from queue import Queue

# Convert an OpenCV image to Base64 bytes for transmission
def cv2_to_base64(img):
	_, img_encoded = cv2.imencode('.jpg', img) # Convert image into memory buffer
	img_bytes = img_encoded.tobytes() # Convert memory buffer to bytes
	return base64.b64encode(img_bytes) # Convert bytes to base64

class VideoWS():

	PORT = 10333
	HOST = '192.168.2.1'

	def __init__(self) -> None:
		self.vid = None
		self.clients = set()
		self.img_proc_q = Queue()
		self.websocket_q = Queue()

	async def start(self, img_proc_q, websocket_q):
		self.img_proc_q = img_proc_q
		self.websocket_q = websocket_q

		gstreamer_str = 'udpsrc port=8888 ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1'
		# gstreamer_str = 'udpsrc port=8888 ! tee name=t ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1 t. ! h264parse ! mpegtsmux ! hlssink playlist-root=https://www.ryanhodge.net/stream location=/var/www/media/segment_%05d.ts playlist-location=/var/www/media/playlist.m3u8 target-duration=5 max-files=5'
		self.vid = cv2.VideoCapture(gstreamer_str, cv2.CAP_GSTREAMER)

		# Start the servers
		async with websockets.serve(self.serve, VideoWS.HOST, VideoWS.PORT, ping_timeout=None):
			await asyncio.Future()

	async def serve(self, websocket, path):
		msg = {'image': ''}
		print("Video client connected")

		try:
			async for message in websocket:
				ret, img = self.vid.read()
				msg['image'] = cv2_to_base64(img).decode('utf-8')
				self.img_proc_q.put(img)
				if not self.websocket_q.empty():
					msg['cv2_image'] = cv2_to_base64(self.websocket_q.get()).decode('utf-8')
				await websocket.send(json.dumps(msg))
				# websockets.broadcast(self.clients, json.dumps(msg))
		except websockets.exceptions.ConnectionClosed as e:
			print("The video client disconnected")

