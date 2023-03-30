# Importing the relevant libraries
from typing import List
import cv2
import base64
from queue import Queue
from flask import Flask, Response
import threading

original_lock = threading.Lock()
color_detection_lock = threading.Lock()

# Convert an OpenCV image to Base64 bytes for transmission
def cv2_to_base64(img):
	_, img_encoded = cv2.imencode('.jpg', img) # Convert image into memory buffer
	img_bytes = img_encoded.tobytes() # Convert memory buffer to bytes
	return base64.b64encode(img_bytes) # Convert bytes to base64

class VideoWS():

	PORT = 10333
	HOST = '127.0.0.1'

	def __init__(self) -> None:
		self.vid = None
		self.clients = set()
		self.img_proc_q = Queue()
		self.websocket_q = Queue()
		self.app = Flask(__name__)
		self.autonomous = [False]

	async def start(self, img_proc_q, websocket_q, autonomous: List[bool]):
		self.autonomous = autonomous
		self.img_proc_q = img_proc_q
		self.websocket_q = websocket_q

		# gstreamer_str = 'v4l2src device=/dev/video0 ! queue ! videoconvert ! appsink drop=1'
		gstreamer_str = 'udpsrc port=8888 ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1'
		self.vid = cv2.VideoCapture(gstreamer_str, cv2.CAP_GSTREAMER)

		# Start the servers
		self.app.add_url_rule('/original', 'original', self.original_stream)
		self.app.add_url_rule('/color_detection', 'color_detection', self.color_detection_stream)
		self.app.run(VideoWS.HOST, VideoWS.PORT, False, None)

	def original_stream(self):
		return Response(self.original(), mimetype = "multipart/x-mixed-replace; boundary=frame")

	def color_detection_stream(self):
		return Response(self.color_detection(), mimetype = "multipart/x-mixed-replace; boundary=frame")
	
	def original(self):
		print('Video connecting...')
		global original_lock
		
		# while streaming
		while True:
			with original_lock:
				# read next frame
				_, img = self.vid.read()
				self.img_proc_q.put(img.copy())
			# if blank frame
			if img is None: continue

			# encode the frame in JPEG format
			(flag, encodedImage) = cv2.imencode(".jpg", img)

			# ensure the frame was successfully encoded
			if not flag: continue

			# yield the output frame in the byte format
			yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')

	def color_detection(self):
		print('Color detection connecting...')
		global color_detection_lock
		
		# while streaming
		while True:
			# Only display image if in autonomous mode
			if not self.autonomous[0]: continue
			with color_detection_lock:
				img = self.websocket_q.get()
			
			# If frame is empty
			if img is None: continue

			# encode the frame in JPEG format
			(flag, encodedImage) = cv2.imencode(".jpg", img)
			# ensure the frame was successfully encoded
			if not flag: continue

			# yield the output frame in the byte format
			yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')
