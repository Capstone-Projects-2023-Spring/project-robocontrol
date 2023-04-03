from queue import Queue
from image_processing.color_detection import direction_to_center

class Automation:
	def __init__(self, q: Queue) -> None:
		self.isCentered = False
		self.commands_q = q
		pass

	# Crop the image to the desired height (h)
	def crop_image(self, image, h):
		height = image.shape[0]
		return image[height-h:height, :]

	# Send command to robot to center the robot based on the image
	def center_robot(self, image) -> None:
		direction = direction_to_center(image) # Get the direction to turn
		if direction == 'left':
			self.commands_q.put({'direction': 'no', 'turn': 'left'})
			self.isCentered = False
		elif direction == 'right':
			self.commands_q.put({'direction': 'no', 'turn': 'right'})
			self.isCentered = False
		else:
			self.commands_q.put({'direction': 'no', 'turn': 'no'})
			self.isCentered = True
