import asyncio
from queue import Queue
from typing import List
from image_processing.color_detection import ColorDetection
from autonomy import Automation
import numpy as np

def process_img(img_proc_q: Queue, websocket_q: Queue, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
    automation = Automation(command_q)
    color_detection = ColorDetection(None)
    while True:
        # Check if there is new ultrasonic data in the queue
        if ultrasonic_data_q.qsize() > 0:
            ultrasonic_data = ultrasonic_data_q.get()
            automation.process_ultrasonic_data(ultrasonic_data)

        # Get image. If no image, then do nothing
        img = img_proc_q.get()
        if img is None: continue
        
        
        cropped_img_bottom = automation.crop_image(img, 0, 50)
        cropped_img_top = automation.crop_image(img, 51, img.shape[0])
        color_detection.set_img(cropped_img_bottom)
        direction = color_detection.direction_to_center()
        stitched_img = np.vstack((cropped_img_top, cropped_img_bottom))
        websocket_q.put(stitched_img)
        if autonomous[0]:
            # if color_detection.turn:
                # cmd = automation.center_robot(color_detection.turn_direction)
                # command_q.put({'direction': 'no', 'turn': color_detection.direction_to_center(), 'speed': 100})
                # print(color_detection.turn_direction)
            # If the robot is not centered, get the command to send to the robot to turn it
            # el
            if not automation.isCentered:
                print("Not centered")
                print(direction)
                cmd = automation.center_robot(direction)
                print(cmd)
                command_q.put(cmd)
            # Do nothing or go straight if the robot is centered
            else:
                if direction != 'no': 
                    print("Inside outside else for direction.")
                    # automation.isCentered = False
                    command_q.put({'direction': 'forward', 'turn': direction, 'speed': 80})
                # elif direction == 'backward':
                    # command_q.put({'direction': 'backward', 'turn': 'no', 'speed': 75})
                else:
                    command_q.put({'direction': 'no', 'turn': 'no', 'speed': 80})
