from queue import Queue
from image_processing.color_detection import direction_to_center

class Automation:
	def __init__(self, q: Queue) -> None:
		self.isCentered = False
		self.commands_q = q
		self.ultrasonic_data = None
		pass
	
	def process_ultrasonic_data(self, data):
		self.ultrasonic_data = data
	
	# Crop the image to the desired height (h)
	def crop_image(self, image, h):
		height = image.shape[0]
		return image[height-h:height, :]

	# Send command to robot to center the robot based on the image
	def center_robot(self, direction) -> None:
		if direction == 'left':
			self.isCentered = False
			return {'direction': 'no', 'turn': 'left'}
		elif direction == 'right':
			self.isCentered = False
			return {'direction': 'no', 'turn': 'right'}
		else:
			self.isCentered = True
			return {'direction': 'no', 'turn': 'no'}
