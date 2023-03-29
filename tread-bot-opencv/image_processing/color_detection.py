import cv2
import numpy as np

yellow_tape_lower = np.array([27, 9, 218], np.uint8)
yellow_tape_upper = np.array([75, 255, 255], np.uint8)

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

def detect_colors(img):
    hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    yellow_tape_mask = cv2.inRange(hsvFrame, yellow_tape_lower, yellow_tape_upper)
    yellow_tape_mask = cv2.dilate(yellow_tape_mask, kernel)
    make_contours(yellow_tape_mask, 'Painters Tape', img)
    return img
