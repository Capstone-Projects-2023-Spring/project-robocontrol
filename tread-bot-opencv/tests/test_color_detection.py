import image_processing.color_detection as cd
import numpy as np

color_detection = cd.ColorDetection(np.zeros((30,60,3),np.uint8))

def test_draw_contour():
	img = np.zeros((30,60,3),np.uint8)
	contour = np.array([[0, 0], [0, 10], [10, 0], [10, 10]])
	contour_img = img.copy()
	cd.draw_contour(contour_img, contour, 'Test')
	assert (contour_img != img).any()
