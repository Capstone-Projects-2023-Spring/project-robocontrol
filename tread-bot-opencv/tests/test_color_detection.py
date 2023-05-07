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

def test_direction_to_center_straight():
	direction = color_detection.direction_to_center()
	assert direction == 'no'

def test_direction_to_center_one_line():
	img = cv2.imread('./tests/one-line-path.jpg', cv2.IMREAD_COLOR)
	color_detection.img = img
	direction1 = color_detection.direction_to_center()
	color_detection.img = cv2.flip(img, 1)
	direction2 = color_detection.direction_to_center()
	assert direction1 == 'right' and direction2 == 'left'
