from queue import Queue
from typing import List
from image_processing.color_detection import detect_colors

def process_img(img_proc_q: Queue, websocket_q: Queue, command_q: Queue, autonomous: List[bool]):
	while True:
		if autonomous[0]:
			print('autonomous')
			img = img_proc_q.get()
			if img is None: continue
			img = detect_colors(img)
			websocket_q.put(img)
			command_q.put({'direction': 'no', 'turn': 'no'})
