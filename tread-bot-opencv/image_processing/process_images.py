from queue import Queue
from typing import List
from image_processing.color_detection import detect_colors, direction_to_center
from autonomy import Automation

def process_img(img_proc_q: Queue, websocket_q: Queue, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
    automation = Automation(command_q)
    while True:
        # Check if there is new ultrasonic data in the queue
        if ultrasonic_data_q.qsize() > 0:
            ultrasonic_data = ultrasonic_data_q.get()
            automation.process_ultrasonic_data(ultrasonic_data)

        # Get image. If no image, then do nothing
        img = img_proc_q.get()
        if img is None: continue
        
        img = automation.crop_image(img, 300)
        direction = direction_to_center(img)
        websocket_q.put(img)
        if autonomous[0]:
            # If the robot is not centered, get the command to send to the robot to turn it
            if not automation.isCentered:
                cmd = automation.center_robot(direction)
                command_q.put(cmd)
            # Do nothing or go straight if the robot is centered
            else:
                if direction_to_center(img) != 'no': automation.isCentered = False
                # command_q.put({'direction': 'forward', 'turn': 'no'})
