from image_processing.process_images import ProcessImages
from queue import Queue
import cv2

process = ProcessImages(True)
img_proc_q = Queue()
websocket_q = Queue()
command_q = Queue()
ultrasonic_data_q = Queue()

def test_without_autonomy():
	img_proc_q.put(cv2.imread('./tests/straight-path.jpg'))
	process.process_img(img_proc_q, websocket_q, command_q, [False], ultrasonic_data_q)
	assert command_q.empty()

def test_move_straight():
	img_proc_q.put(cv2.imread('./tests/straight-path.jpg'))
	process.process_img(img_proc_q, websocket_q, command_q, [True], ultrasonic_data_q)
	cmd: dict = command_q.get()
	assert cmd.get('direction') == 'forward' and cmd.get('turn') == 'no'

def test_turn_right():
	img_proc_q.put(cv2.imread('./tests/one-line-path.jpg'))
	process.process_img(img_proc_q, websocket_q, command_q, [True], ultrasonic_data_q)
	cmd: dict = command_q.get()
	assert cmd.get('direction') == 'no' and cmd.get('turn') == 'right'
