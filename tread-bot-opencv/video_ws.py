# Importing the relevant libraries
import cv2

class VideoWS():

	def __init__(self) -> None:
		self.vid = None

	async def run(self):
		# gstreamer_str = 'udpsrc port=8888 ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1'
		gstreamer_str = 'udpsrc port=8888 ! tee name=t ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1 t. ! h264parse ! mpegtsmux ! hlssink max-files=5'
		self.vid = cv2.VideoCapture(gstreamer_str, cv2.CAP_GSTREAMER)

		if not self.vid.isOpened():
			print('VideoCapture or VideoWriter not opened')

		while True:
			ret, frame = self.vid.read()
			if ret:
				cv2.imshow('Stream', frame)
				c = cv2.waitKey(1)
				if c == 27:
					break
