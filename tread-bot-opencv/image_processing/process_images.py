from queue import Queue
from typing import List
from image_processing.color_detection import detect_colors, direction_to_center
from autonomy import Automation

def process_img(img_proc_q: Queue, websocket_q: Queue, command_q: Queue, autonomous: List[bool]):
	automation = Automation(command_q)
	while True:
		if autonomous[0]:
			# print('autonomous')
			img = img_proc_q.get()
			if img is None: continue
			# img = detect_colors(img)
			img = automation.crop_image(img, 300)
			if not automation.isCentered: automation.center_robot(img)
			else:
				# print('Centered!!')
				if direction_to_center(img) != 'no': automation.isCentered = False
				# command_q.put({'direction': 'forward', 'turn': 'no'})
			websocket_q.put(img)
