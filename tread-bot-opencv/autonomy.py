from queue import Queue

class Automation:
	def __init__(self, command_q: Queue) -> None:
		self.isCentered = False
		self.commands_q = command_q
		self.ultrasonic_data = None
		pass
	
	def process_ultrasonic_data(self, data):
		self.ultrasonic_data = data
	
	# Crop the image to the desired height (h)
	def crop_image(self, image, start, h):
		height = image.shape[0]
		return image[height - h:height - start, :]

	# Send command to robot to center the robot based on the image
	def center_robot(self, direction) -> dict:
		if direction == 'left':
			self.isCentered = False
			return {'direction': 'no', 'turn': 'left', 'speed': 100}
		elif direction == 'right':
			self.isCentered = False
			return {'direction': 'no', 'turn': 'right', 'speed': 100}
		else:
			self.isCentered = True
			return {'direction': 'forward', 'turn': 'no', 'speed': 80}
