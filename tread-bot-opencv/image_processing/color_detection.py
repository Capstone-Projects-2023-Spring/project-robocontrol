import cv2
import numpy as np

red_lower = np.array([136, 87, 111], np.uint8)
red_upper = np.array([180, 255, 255], np.uint8)

green_lower = np.array([25, 52, 72], np.uint8)
green_upper = np.array([102, 255, 255], np.uint8)

blue_lower = np.array([94, 80, 2], np.uint8)
blue_upper = np.array([120, 255, 255], np.uint8)

kernal = np.ones((5, 5), "uint8")

def make_contours(mask, text, img):
	contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
	for _, contour in enumerate(contours):
		area = cv2.contourArea(contour)
		if(area > 300):
			x, y, w, h = cv2.boundingRect(contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))
	return img

def detect_colors(img):
    hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    red_mask = cv2.inRange(hsvFrame, red_lower, red_upper)
    green_mask = cv2.inRange(hsvFrame, green_lower, green_upper)
    blue_mask = cv2.inRange(hsvFrame, blue_lower, blue_upper)

    red_mask = cv2.dilate(red_mask, kernal)
    green_mask = cv2.dilate(green_mask, kernal)
    blue_mask = cv2.dilate(blue_mask, kernal)

    make_contours(red_mask, 'Red', img)
    make_contours(blue_mask, 'Blue', img)
    make_contours(green_mask, 'Green', img)
    return img
