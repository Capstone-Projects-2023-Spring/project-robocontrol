from queue import Queue
from image_processing.color_detection import direction_to_center

class Automation:
	def __init__(self, q: Queue) -> None:
		self.isCentered = False
		self.commands_q = q
		pass

	def crop_image(self, image, h):
		height = image.shape[0]
		return image[height-h:height, :]

	def center_robot(self, image) -> None:
		direction = direction_to_center(image)
		if direction == 'left':
			self.commands_q.put({'direction': 'no', 'turn': 'left'})
			self.isCentered = False
		elif direction == 'right':
			self.commands_q.put({'direction': 'no', 'turn': 'right'})
			self.isCentered = False
		else:
			self.commands_q.put({'direction': 'no', 'turn': 'no'})
			self.isCentered = True

### For initial code, consider most restrictive or most explicit as conditions unless otherwise specified. i.e. most convenient with fewest variations to account for 
### Note: Make sure that the lines are not too far apart. We must figure out how exactly wide the camera can allow and what the width of the allowed lines is. 
#Define boundary lines (The line within which the robot will keep itself in between.)
	# Considerations for boundary lines
	# Are the lines the same color? Logically they would be however is there any reasonable scenario within which they will not be the same?
	# Does the robot find two lines that "match" as close as possible or are these boundary lines explicitly defined. In which case: 
		#How do the boundary lines get defined? Are they kept within a data field or is it user defined?
		#If it is user defined, how does the user input what is the boundary line? Is it by explicit RGB values, or a drop down list of colours, etc.
	#Define method for "Within bounds" and return values

def within_Bounds(image):
	#Check if left line is within camera view
	#Check if right line is within camera view
	#if both, set inside_Bounds to true
	inside_Bounds = False
	return inside_Bounds

#Define stop command 
	#Stop condition is when there is no more boundary lines within view of the camera. So long as there is a boundary line that is within camera view, then the robot should continue 
	#operation
def reached_End():
	isAtEnd = False
	#Some logic to figure out if we have reached the end of the track
	return isAtEnd


#Detect boundary lines
	# Define the limits within which the two boundary lines can exist. The idea is that the boundary lines are our limits. From here, the robot should continue moving so long as 
	# it can see the both boundary lines within view. 

#Define start conditions/commands
	#Start autonomous movement through execution of website button. 
	#Define how the robot will ensure initial conditions (both boundary lines within camera view) or will the robot be preplaced in such a manner
	#Condition to leave start phase and move to movmeent phase. 
def automated_Movement(image):
	continueMovement = within_Bounds(image)
	isAtEnd = reached_End()
	while (isAtEnd != True):
		while (continueMovement != False): 
			continue
			#Move forward
		
		#when not within bounds, move treadbot to get back within bounds(Or show boundary lines on camera to confirm)

		#Logic check to make sure that we have reached the end       

#Define course correction if the robot is no long "within bounds" (defined by keeping boundary lines within view.)
	#Once movement phase starts, should utilize unfulfilled stop condition to continue operations. 
	#Ways to keep boundary lines can be through either movement commands or camera manipulation (moving the camera up/down)
	#Define what to do when left boundary has moved out of view.
	#Define what to do when right boundary has moved out of view. 
	#Define stop condition
	#Execute stop command

def moveCamera():
	#If the lines are not in bound on low angle camera view, move camera up
	pass

def turnLeft():
	#turn robot left until lines come back then return a value(Boolean or Integer). Should check camera angle first.
	pass

def turnRight():
	#turn robot right until lines come back then return a value(Boolean or Integer). Should check camera angle first.
	pass
