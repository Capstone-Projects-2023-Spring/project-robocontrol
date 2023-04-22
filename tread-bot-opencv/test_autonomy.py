from autonomy import Automation
from queue import Queue
import cv2

autonomous = Automation(Queue())

def test_centering_robot_commands():
	center_direction: dict = autonomous.center_robot('left')
	assert center_direction.get('turn') == 'left'
	center_direction: dict = autonomous.center_robot('right')
	assert center_direction.get('turn') == 'right'
	center_direction: dict = autonomous.center_robot('stop')
	assert center_direction.get('turn') == 'no'

def test_crop_image():
	height = 20
	img = cv2.imread('./dummy_image.jpeg', 0)
	cropped = autonomous.crop_image(img, 0, height)
	cropped_image_calculation = img[img.shape[0] - height:img.shape[0]][:]
	assert cropped_image_calculation.all() == cropped.all()
