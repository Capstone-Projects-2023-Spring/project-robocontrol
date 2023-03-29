'''Tune Color Detection'''
import cv2
import numpy as np

vid = cv2.VideoCapture(1)

# Ryan's mac values
painters_tape_lower = np.array([100, 80, 74], np.uint8)
painters_tape_upper = np.array([114, 185, 255], np.uint8)

painters_tape_lower = np.array([80, 167, 0], np.uint8)
painters_tape_upper = np.array([114, 255, 255], np.uint8)
kernal = np.ones((5, 5), "uint8")

def make_contours(mask, text, img):
	contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
	for _, contour in enumerate(contours):
		area = cv2.contourArea(contour)
		if(area > 1000):
			x, y, w, h = cv2.boundingRect(contour)
			img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
			cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))
	return img

def detect_colors():
    '''Detect Colors'''
    while True:
        ret, img = vid.read()

        hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

        blue_mask = cv2.inRange(hsvFrame, painters_tape_lower, painters_tape_upper)
        blue_mask = cv2.dilate(blue_mask, kernal)
        make_contours(blue_mask, 'Painter\'s Tape', img)

        cv2.imshow('Original', img)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

if __name__ == '__main__':
    detect_colors()
    vid.release()
    cv2.destroyAllWindows()
