from queue import Queue

class Automation:
	def __init__(self, q: Queue) -> None:
		self.isCentered = False
		self.commands_q = q
		self.ultrasonic_data = None
		pass
	
	def process_ultrasonic_data(self, data):
		self.ultrasonic_data = data
	
	# Crop the image to the desired height (h)
	def crop_image(self, image, start, h):
		height = image.shape[0]
		return image[height - h:height - start, :]

	# Send command to robot to center the robot based on the image
	def center_robot(self, direction) -> None:
		if direction == 'left':
			self.isCentered = False
			return {'direction': 'no', 'turn': 'left', 'speed': 50}
		elif direction == 'right':
			self.isCentered = False
			return {'direction': 'no', 'turn': 'right', 'speed': 50}
		else:
			self.isCentered = True
			return {'direction': 'no', 'turn': 'no', 'speed': 50}
