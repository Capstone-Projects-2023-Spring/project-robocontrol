'''Tune Color Detection'''
import cv2
import numpy as np

gstreamer_str = 'udpsrc port=8888 ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1'
vid = cv2.VideoCapture(gstreamer_str, cv2.CAP_GSTREAMER)

def nothing(x):
    pass

cv2.namedWindow("live transmission", cv2.WINDOW_AUTOSIZE)
 
cv2.namedWindow("Tracking")
cv2.createTrackbar("RL", "Tracking", 94, 255, nothing)
cv2.createTrackbar("GL", "Tracking", 80, 255, nothing)
cv2.createTrackbar("BL", "Tracking", 2, 255, nothing)
cv2.createTrackbar("RH", "Tracking", 120, 255, nothing)
cv2.createTrackbar("GH", "Tracking", 255, 255, nothing)
cv2.createTrackbar("BH", "Tracking", 255, 255, nothing)

def detect_colors():
    '''Detect Colors'''
    while True:
        ret, img = vid.read()

        hsvFrame = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

        rl = cv2.getTrackbarPos("RL", "Tracking")
        gl = cv2.getTrackbarPos("GL", "Tracking")
        bl = cv2.getTrackbarPos("BL", "Tracking")
        rh = cv2.getTrackbarPos("RH", "Tracking")
        gh = cv2.getTrackbarPos("GH", "Tracking")
        bh = cv2.getTrackbarPos("BH", "Tracking")

        blue_lower = np.array([rl, gl, bl], np.uint8)
        blue_upper = np.array([rh, gh, bh], np.uint8)

        kernal = np.ones((5, 5), "uint8")

        blue_mask = cv2.inRange(hsvFrame, blue_lower, blue_upper)
        result = cv2.bitwise_and(img, img, mask=blue_mask)

        cv2.imshow('Original', img)
        cv2.imshow('Masked', result)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

if __name__ == '__main__':
    detect_colors()
    vid.release()
    cv2.destroyAllWindows()
