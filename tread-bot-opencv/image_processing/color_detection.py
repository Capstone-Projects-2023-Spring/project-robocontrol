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

yellow_tape_lower = np.array([12, 46, 98], np.uint8)
yellow_tape_upper = np.array([57, 255, 255], np.uint8)

# painters_tape_lower = np.array([80, 167, 0], np.uint8)
# painters_tape_upper = np.array([114, 255, 255], np.uint8)

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

def direction_to_center(img):
	hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
	mask = cv2.inRange(hsvFrame, yellow_tape_lower, yellow_tape_upper)
	mask = cv2.dilate(mask, kernel)

	# Pixel tolerance for centering
	tolerance = 60
	# The two largest contours (should be left tape and right)
	largest_contours: List[Contour] = [Contour(0, 0), Contour(0, 0)]
	img_width = img.shape[1]
	print(img_width)
	contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
	contour_list = [x for x in contours]
	contour_list.sort(key=lambda x: cv2.contourArea(x), reverse=True)
	# largest_contours = [Contour(cv2.contourArea(x), x) for x in contour_list[-2:]]
	if len(contour_list) >= 2:
		largest_contours[1] = Contour(cv2.contourArea(contour_list[-1]), contour_list[-1])
		largest_contours[0] = Contour(cv2.contourArea(contour_list[-2]), contour_list[-2])

	# for contour in contour_list:
	# 	area = cv2.contourArea(contour)
	# 	print('Area: ' + str(area))
			
	# 	for i, c in enumerate(largest_contours):
	# 		if (area > c.area):
	# 			largest_contours[i] = Contour(area, contour)
	# print('Done')
	
	# Get the left tape line and right tape line
		if largest_contours[0].area != 0 and largest_contours[1].area != 0:
			x, y, w, h = cv2.boundingRect(largest_contours[0].contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, 'Left Contour', (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))
			x, y, w, h = cv2.boundingRect(largest_contours[1].contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, 'Right Contour', (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))
			x1, _, w1, _ = cv2.boundingRect(largest_contours[0].contour)
			x2, _, w2, _ = cv2.boundingRect(largest_contours[1].contour)
			if x1 + w1 < x2 + w2:
				left_contour = largest_contours[0].contour
				right_contour = largest_contours[1].contour
			else:
				left_contour = largest_contours[1].contour
				right_contour = largest_contours[0].contour

			# Calculate direction based on tape lines
			left = cv2.boundingRect(left_contour)
			right = cv2.boundingRect(right_contour)
			l1 = left[0] + left[2]
			l2 = img_width - right[0]
			print('l1: ' + str(l1))
			print('l2: ' + str(l2))
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
