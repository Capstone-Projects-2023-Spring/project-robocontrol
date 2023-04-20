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
		self.dummy_img = cv2.imread("/home/robot/Ryan/project-robocontrol/tread-bot-opencv/dummy_image.jpeg")
		self.vid = None
		self.clients = set()
		self.img_proc_q = Queue()
		self.websocket_q = Queue()
		self.app = Flask(__name__)
		self.autonomous = [False] # This is a list so that it gets passed by reference, not value

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
		
		# Main loop for displaying the original image
		while True:
			with original_lock:
				# Read next frame
				_, img = self.vid.read()
				# If frame is empty
				if img is None: continue
				# If in autonomous mode, put the image into the image processing queue
				self.img_proc_q.put(img.copy())

			# Encode the frame in JPEG format
			(flag, encodedImage) = cv2.imencode(".jpg", img)

			# Ensure the frame was successfully encoded
			if not flag: continue

			# Yield the output frame in the byte format
			yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')

	def color_detection(self):
		print('Color detection connecting...')
		global color_detection_lock
		
		# Main loop for displaying the autonomous image
		while True:
			with color_detection_lock:
				# Only display image if in autonomous mode
				img = self.websocket_q.get()
				# TODO: Should not need a dummy image. Maybe figure out how to 
				# not connect to this URL on the website when not in autonomous mode or smth
			
			# If frame is empty
			if img is None: continue

			# Encode the frame in JPEG format
			(flag, encodedImage) = cv2.imencode(".jpg", img)

			# Ensure the frame was successfully encoded
			if not flag: continue

			# Yield the output frame in the byte format
			yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n')
