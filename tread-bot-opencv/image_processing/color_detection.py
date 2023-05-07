from typing import List
import cv2
import numpy as np

yellow_tape_lower = np.array([5, 121, 137], np.uint8)
yellow_tape_upper = np.array([134, 254, 246], np.uint8)

kernel = np.ones((15, 15), "uint8")

# Pixel tolerance for centering
center_tolerance = 80

# Tolerance for contour size
contour_tolerance = 4500

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
		print(len(contour_list))
		if len(contour_list) >= 2:
			largest_contours[0] = Contour(cv2.contourArea(contour_list[-1]), contour_list[-1])
			
			largest_contours[1] = Contour(cv2.contourArea(contour_list[-2]), contour_list[-2])

			if largest_contours[0].area >= contour_tolerance and largest_contours[1].area >= contour_tolerance:
				print("Area of contour 0: ", largest_contours[0].area)
				# print("Contour -1: ", contour_list[-1])
				# print("Contour -2: ", contour_list[-2])

				print("Area of contour 1: ", largest_contours[1].area)

				value = self.two_lines_visible(largest_contours)
				print(value)

				return value	
			else:
				value = self.two_lines_visible(largest_contours)
				print(value)
				return value
			# Get the left tape line and right tape line, as long as there are 2 in the list
			# if len(contour_list) >= 2 and largest_contours[0].area >= contour_tolerance and largest_contours[1].area >= contour_tolerance:
				# self.turn = False
				# return self.two_lines_visible(largest_contours)
			# elif largest_contours[0].area >= contour_tolerance:
				# print("inside single contour")
				# return self.one_line_visible(largest_contours[0])
			# else: return 'no'
		elif len(contour_list) == 0:
			return 'backward'
		else:
			largest_contours[0] = Contour(cv2.contourArea(contour_list[-1]), contour_list[-1])
			return self.one_line_visible(largest_contours[0])
		# return 'no'

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
		if ratio < 0.3: 
			print("returning left")
			return 'left'
		elif ratio > 1.7: 
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
		
		img_center = img_width / 2
		print(img_center)
		img_left_trigger = img_width / 4
		img_right_trigger = img_center + img_left_trigger
		x, _, w, _ = cv2.boundingRect(largest_contour.contour)
		contour_center = x + w / 2
		print(contour_center)
		if contour_center < img_center:
			return 'right'
		elif contour_center > img_center:
			return 'left'
		else:
			return 'stop'
		# if img_center > contour_center: self.turn_direction = 'right'
		# else: self.turn_direction = 'left'
