from queue import Queue
from image_processing.color_detection import detect_colors

def process_img(img_proc_q: Queue, websocket_q: Queue):
	while True:
		img = img_proc_q.get()
		if img is None: continue
		img = detect_colors(img)
		websocket_q.put(img)
