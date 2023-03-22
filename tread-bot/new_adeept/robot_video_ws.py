# Importing the relevant libraries
import websockets
import base64
import cv2
import json
import time

# The device the pi cam is recognized as
PI_CAM_PORT = 0

# Convert an OpenCV image to Base64 bytes for transmission
def cv2_to_base64(img):
    _, img_encoded = cv2.imencode('.jpg', img) # Convert image into memory buffer
    img_bytes = img_encoded.tobytes() # Convert memory buffer to bytes
    return base64.b64encode(img_bytes) # Convert bytes to base64

class RobotVideoWS():
	
	PORT = 10333
	HOST = '192.168.2.1'
	HOST_PATH = 'ws://' + HOST + ':' + str(PORT)

	def __init__(self) -> None:
		self.msg = {
			'image': ''
		}
		# The pi cam capture port
		self.vid = cv2.VideoCapture(PI_CAM_PORT)
	
	async def connect(self):
		print('Video listening to ' + RobotVideoWS.HOST_PATH)
		# Connect to the server
		try:
			async with websockets.connect(RobotVideoWS.HOST_PATH, ping_timeout=None) as ws:
				print('Video connected to ' + RobotVideoWS.HOST_PATH)
				# Stay alive forever, listening to incoming msgs
				while True:
					json_data = {
						'image': cv2_to_base64(self.vid.read()[1]).decode('utf-8'),
					}
					await ws.send(json.dumps(json_data))
					print('Video sent')
		except websockets.exceptions.ConnectionClosed as e:
			print(e)
