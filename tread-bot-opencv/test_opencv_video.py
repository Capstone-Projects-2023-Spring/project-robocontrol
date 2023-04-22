from opencv_video import VideoWS, cv2_to_base64
import cv2

video_ws = VideoWS()

def test_img_to_b64():
	img = cv2.imread('./dummy_image.jpeg', 0)
	b64 = cv2_to_base64(img)
	assert isinstance(b64, bytes)

def test_video_endpoint():
	app.test_client().get('/shutdown')
