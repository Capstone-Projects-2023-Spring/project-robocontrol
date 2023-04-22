from autonomy import Automation
import unittest
from queue import Queue
import cv2

class AutomationTesting(unittest.TestCase):
	def __init__(self, methodName: str = "runTest") -> None:
		super().__init__(methodName)
		self.autonomous = Automation(Queue())

	def test_centering_robot_commands(self):
		center_direction: dict = self.autonomous.center_robot('left')
		self.assertEqual(center_direction.get('turn'), 'left')
		center_direction: dict = self.autonomous.center_robot('right')
		self.assertEqual(center_direction.get('turn'), 'right')
		center_direction: dict = self.autonomous.center_robot('stop')
		self.assertEqual(center_direction.get('turn'), 'no')

	def test_crop_image(self):
		height = 20
		img = cv2.imread('./dummy_image.jpeg', 0)
		cropped = self.autonomous.crop_image(img, 0, height)
		cropped_image_calculation = img[img.shape[0] - height:img.shape[0]][:]
		self.assertEqual(cropped_image_calculation.all(), cropped.all())

if __name__ == '__main__':
    unittest.main()