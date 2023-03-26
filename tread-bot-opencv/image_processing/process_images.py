import cv2
from queue import Queue
from image_processing.color_detection import detect_colors

def process_img(img_proc_q: Queue, websocket_q: Queue):
	while True:
		if not img_proc_q.empty():
			img = img_proc_q.get()
			img = detect_colors(img)
			cv2.imshow('Socket data', img)
			websocket_q.put(img)
			c = cv2.waitKey(1)
			if c == 27:
				break