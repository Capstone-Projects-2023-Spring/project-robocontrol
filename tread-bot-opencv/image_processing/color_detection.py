from typing import List
import cv2
import numpy as np

yellow_tape_lower = np.array([29, 68, 123], np.uint8)
yellow_tape_upper = np.array([97, 255, 255], np.uint8)

kernel = np.ones((15, 15), "uint8")

# Pixel tolerance for centering
center_tolerance = 80

# Tolerance for contour size
contour_tolerance = 400

class Contour:
	def __init__(self, area, contour) -> None:
		self.area = area
		self.contour = contour

	def set_area(self, area): self.area = area
	def set_contour(self, contour): self.contour = contour

def draw_contour(img, contour: Contour, text: str):
	x, y, w, h = cv2.boundingRect(contour)
	img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
	cv2.putText(img, text, (x, y + h - 20), cv2.FONT_HERSHEY_SIMPLEX, .8, (0, 0, 255), thickness=2)

class ColorDetection:
	def __init__(self, img) -> None:
		self.img = img
		self.turn = False
		self.turn_direction='no'

	def set_img(self, img):
		self.img = img

	# Determine which direction the robot should turn to center between tape lines
	def direction_to_center(self):
		hsvFrame = cv2.cvtColor(self.img, cv2.COLOR_BGR2HSV)
		mask = cv2.inRange(hsvFrame, yellow_tape_lower, yellow_tape_upper)
		mask = cv2.dilate(mask, kernel)

		# The two largest contours (should be left tape and right)
		largest_contours: List[Contour] = [Contour(0, 0), Contour(0, 0)]

		# Get all the contours, sort them by area size, and only take the largest 2
		contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
		contour_list = [x for x in contours]
		contour_list.sort(key=lambda x: cv2.contourArea(x), reverse=True) # Sort by size

		if len(contour_list) >= 1:
			largest_contours[0] = Contour(cv2.contourArea(contour_list[-1]), contour_list[-1])
			if len(contour_list) >= 2:
				largest_contours[1] = Contour(cv2.contourArea(contour_list[-2]), contour_list[-2])
				return self.two_lines_visible(largest_contours)
			# Get the left tape line and right tape line, as long as there are 2 in the list
			if len(contour_list) >= 2 and largest_contours[0].area >= contour_tolerance and largest_contours[1].area >= contour_tolerance:
				print("inside contour list >= 2 and contour tolerance")
				self.turn = False
				return self.two_lines_visible(largest_contours)
			elif largest_contours[0].area >= contour_tolerance:
				print("inside single contour")
				return self.one_line_visible(largest_contours[0])
			else: return 'no'

		return 'no'

	def two_lines_visible(self, largest_contours: List[Contour]) -> str:
		img_width = self.img.shape[1]

		# Separate the contours, getting the left tape vs the right tape
		x1, _, w1, _ = cv2.boundingRect(largest_contours[0].contour)
		x2, _, w2, _ = cv2.boundingRect(largest_contours[1].contour)
		if x1 + w1 < x2 + w2:
			left_contour = largest_contours[0].contour
			right_contour = largest_contours[1].contour
		else:
			left_contour = largest_contours[1].contour
			right_contour = largest_contours[0].contour

		# Draw the rectangles on the image for the contours
		draw_contour(self.img, left_contour, 'Left Line')
		draw_contour(self.img, right_contour, 'Right Line')

		# Get the position of the tape lines based on the bounding box x-direction and width
		left_x, _, left_w, _ = cv2.boundingRect(left_contour)
		right_x, _, _, _ = cv2.boundingRect(right_contour)
		l1 = left_x + left_w # Bottom right corner of the left tape line
		l2 = img_width - right_x # Bottom left corner of the right tape line
		print('l1: ' + str(l1))
		print('l2: ' + str(l2))
		ratio = l1 / l2
		print("ratio:", ratio)
		if ratio < 0.7: 
			print("returning left")
			return 'left'
		elif ratio > 1.3: 
			print("returning right")
			return 'right'
		else: return 'no'
		
		# if ((l1-l2) > 0) and ((l1-l2) < center_tolerance): 
		# 	return 'no'
		# elif (l1-l2) > 0:
		# 	return 'left'
		# else:
		# 	return 'right'
		# return 'right' if (l1 - l2) > center_tolerance else 'left' if (l1 - l2) < -center_tolerance else 'no'

	# When only one line is visible (turning probably)
	def one_line_visible(self, largest_contour: Contour):
		draw_contour(self.img, largest_contour.contour, 'Single Line')
		# if self.turn: return
		# self.turn = True
		img_width = self.img.shape[1]
		print(img_width)
		img_center = img_width / 2
		x, _, w, _ = cv2.boundingRect(largest_contour.contour)
		contour_center = x + w / 2
		return 'no'
		# if img_center > contour_center: self.turn_direction = 'right'
		# else: self.turn_direction = 'left'
