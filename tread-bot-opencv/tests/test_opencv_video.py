from opencv_video import VideoWS, cv2_to_base64
import numpy as np

def test_image_to_base64():
	img = np.zeros((30,60,3),np.uint8)
	b64 = cv2_to_base64(img)
	assert isinstance(b64, bytes)

def test_original_stream():
	video_ws = VideoWS()
	video_ws.original()

def test_opencv_stream():
	video_ws = VideoWS()
	video_ws.color_detection()
