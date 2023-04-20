from typing import List
import cv2
import numpy as np

class Contour:
	def __init__(self, area, contour) -> None:
		self.area = area
		self.contour = contour
		pass

	def set_area(self, area): self.area = area
	def set_contour(self, contour): self.contour = contour

yellow_tape_lower = np.array([20, 76, 77], np.uint8)
yellow_tape_upper = np.array([255, 255, 255], np.uint8)

kernel = np.ones((5, 5), "uint8")

def make_contours(mask, text, img):
	contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
	for _, contour in enumerate(contours):
		area = cv2.contourArea(contour)
		if(area > 1000):
			x, y, w, h = cv2.boundingRect(contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))
	return img

# Determine which direction the robot should turn to center between tape lines
def direction_to_center(img):
	hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
	mask = cv2.inRange(hsvFrame, yellow_tape_lower, yellow_tape_upper)
	mask = cv2.dilate(mask, kernel)

	# Pixel tolerance for centering
	tolerance = 80
	# The two largest contours (should be left tape and right)
	largest_contours: List[Contour] = [Contour(0, 0), Contour(0, 0)]
	img_width = img.shape[1]

	# Get all the contours, sort them by area size, and only take the largest 2
	contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
	contour_list = [x for x in contours]
	contour_list.sort(key=lambda x: cv2.contourArea(x), reverse=True)
	if len(contour_list) >= 2:
		largest_contours[1] = Contour(cv2.contourArea(contour_list[-1]), contour_list[-1])
		largest_contours[0] = Contour(cv2.contourArea(contour_list[-2]), contour_list[-2])
	
		# Get the left tape line and right tape line, as long as there are 2 in the list
		if largest_contours[0].area != 0 and largest_contours[1].area != 0:
			# Draw the rectangles on the image for the contours
			x, y, w, h = cv2.boundingRect(largest_contours[0].contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, 'Left Contour', (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))
			x, y, w, h = cv2.boundingRect(largest_contours[1].contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, 'Right Contour', (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))

			# Separate the contours, getting the left tape vs the right tape
			x1, _, w1, _ = cv2.boundingRect(largest_contours[0].contour)
			x2, _, w2, _ = cv2.boundingRect(largest_contours[1].contour)
			if x1 + w1 < x2 + w2:
				left_contour = largest_contours[0].contour
				right_contour = largest_contours[1].contour
			else:
				left_contour = largest_contours[1].contour
				right_contour = largest_contours[0].contour

			# Get the position of the tape lines based on the bounding box x-direction and width
			left_x, _, left_w, _ = cv2.boundingRect(left_contour)
			right_x, _, _, _ = cv2.boundingRect(right_contour)
			l1 = left_x + left_w # Bottom right corner of the left tape line
			l2 = img_width - right_x # Bottom left corner of the right tape line
			# print('l1: ' + str(l1))
			# print('l2: ' + str(l2))
			if (l1 - l2) > tolerance: return 'right'
			elif (l1 - l2) < -tolerance: return 'left'
			else: return 'no'

	return 'no'

def detect_colors(img):
	hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
	yellow_tape_mask = cv2.inRange(hsvFrame, yellow_tape_lower, yellow_tape_upper)
	yellow_tape_mask = cv2.dilate(yellow_tape_mask, kernel)
	make_contours(yellow_tape_mask, 'Painters Tape', img)
	return img
