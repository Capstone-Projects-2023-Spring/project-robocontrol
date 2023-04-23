from autonomy import Automation
from queue import Queue
import numpy as np

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
	img = np.zeros((30,60,3),np.uint8)
	cropped = autonomous.crop_image(img, 0, height)
	cropped_image_calculation = img[img.shape[0] - height:img.shape[0]][:]
	assert (cropped_image_calculation == cropped).all()
