import asyncio
from queue import Queue
from typing import List
from image_processing.color_detection import ColorDetection
from autonomy import Automation
import numpy as np
import time

async def process_img(img_proc_q: Queue, websocket_q: Queue, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
    automation = Automation(command_q)
    color_detection = ColorDetection(None)
    backward_limit = 3
    backward_count = 0
    while True:
        # time.sleep(1.0)
        # Check if there is new ultrasonic data in the queue
        # ultrasonic_data_2 = ultrasonic_data_q.get()
        # print(ultrasonic_data_2)
        # print('size of ultrasonic: ', ultrasonic_data_q.qsize)
        if not ultrasonic_data_q.empty():
            print("Ultrasonic Queue is not empty.")
            ultrasonic_data = ultrasonic_data_q.get()
            automation.process_ultrasonic_data(ultrasonic_data)
            print("ultrasonic data: ", ultrasonic_data)
        else:
            print("Ultrasonic Queue is empty.")
            # ultrasonic_data = ultrasonic_data_q.get()
            # automation.process_ultrasonic_data(ultrasonic_data)
            # print("ultrasonic data: ", ultrasonic_data)


        # Get image. If no image, then do nothing
        img = img_proc_q.get()
        if img is None: continue
        
        print("Turn Value: ", color_detection.turn)
        cropped_img_bottom = automation.crop_image(img, 0, 50)
        cropped_img_top = automation.crop_image(img, 51, img.shape[0])
        color_detection.set_img(cropped_img_bottom)
        direction = color_detection.direction_to_center()
        stitched_img = np.vstack((cropped_img_top, cropped_img_bottom))
        websocket_q.put(stitched_img)
        print("Autonomous Value: ", autonomous[0])
        if autonomous[0]:
            # time.sleep(1)
            if color_detection.turn:
                cmd = automation.center_robot(color_detection.turn_direction)
                print(cmd)
                speed = ''
                if(cmd['turn']== 'no'):
                    speed = 80
                else:
                    speed = 100
                command_q.put({'direction': 'no', 'turn': color_detection.direction_to_center(), 'speed': speed})
                # print(color_detection.turn_direction)
                # print(color_detection.turn)
            # If the robot is not centered, get the command to send to the robot to turn it
            elif not automation.isCentered:
                print("Not centered")
                print(direction)
                print("The backward count is: ", backward_count)
                if direction == 'backward' and backward_count <= backward_limit:
                    cmd = {'direction':'backward', 'turn': 'no', 'speed': 100}
                    backward_count += 1
                elif direction == 'backward' and backward_count > backward_limit:
                    cmd = {'direction':'no', 'turn': 'no', 'speed': 0}
                else:
                    cmd = automation.center_robot(direction)
                print(cmd)
                command_q.put(cmd)
            # Do nothing or go straight if the robot is centered
            else:
                if direction != 'no': 
                    print("Inside outside else for direction.")
                    automation.isCentered = False

                    command_q.put({'direction': 'no', 'turn': direction, 'speed': 100})
                elif direction == 'backward':
                    print("Receiving backward.")
                    command_q.put({'direction': 'backward', 'turn': 'no', 'speed': 100})
                elif direction == 'stop':
                    print("inside stop")
                    command_q.put({'direction': 'no', 'turn': 'no', 'speed': 0})
                else:
                    print("At end of if statements.")
                    command_q.put({'direction': 'forward', 'turn': 'no', 'speed': 80})
