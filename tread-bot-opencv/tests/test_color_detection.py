import image_processing.color_detection as cd
import numpy as np
import cv2

img = cv2.imread('./tests/straight-path.jpg', cv2.IMREAD_COLOR)
color_detection = cd.ColorDetection(img)

def test_draw_contour():
	img = np.zeros((30,60,3),np.uint8)
	contour = np.array([[0, 0], [0, 10], [10, 0], [10, 10]])
	contour_img = img.copy()
	cd.draw_contour(contour_img, contour, 'Test')
	assert (contour_img != img).any()
	assert (contour_img[0][0] != [0]).any()

def test_already_centered():
	direction = color_detection.direction_to_center()
	assert direction == 'no'

def test_turn_right():
	img = cv2.imread('./tests/one-line-path.jpg', cv2.IMREAD_COLOR)
	color_detection.img = img
	direction = color_detection.direction_to_center()
	assert direction == 'right'

def test_turn_left():
	img = cv2.imread('./tests/one-line-path.jpg', cv2.IMREAD_COLOR)
	color_detection.img = cv2.flip(img, 1)
	direction = color_detection.direction_to_center()
	assert direction == 'left'
