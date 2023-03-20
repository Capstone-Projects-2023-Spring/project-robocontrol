"""Web Socket"""
#!/usr/bin/env python

import websockets
import cv2
import asyncio
import base64
import numpy as np  
import imageProcessing 

WEBSOCKET = "ws://192.168.2.3:8998"
WEBSITE_PORT = 8999


def base64_to_cv2(img):
    img_bytes = base64.b64decode(img)
    im_arr = np.frombuffer(img_bytes, dtype=np.uint8)
    
    return cv2.imdecode(im_arr, flags=1)

# Handler for the website messages
async def website_handler(websocket, path):
    print("Website client connected")

    try:
        # Receeive and print the incoming message from the website
        async for message in websocket:
            if message != '':
                message_data = json.loads(message)
                move.move(100, message_data['direction'], message_data['turn'], 0.5)
                print('[Message]: ' + message)
            
            json_data = {
                'image': cv2_to_base64(vid.read()[1]).decode('utf-8'),
                'direction': '',
                'turn': ''
            }
            # Send a response to all connected clients
            await websocket.send(json.dumps(json_data))
    # Handle disconnecting clients 
    except websockets.exceptions.ConnectionClosed as e:
        print("The website client disconnected")
        
# The main function that will handle connection and communication with the server
async def listen():
    print('Listening for ' + WEBSOCKET)
    # Connect to the server
    async with websockets.connect(WEBSOCKET) as ws:
        print('Connected to ' + WEBSOCKET)
        # Stay alive forever, listening to incoming msgs
        while True:
            packet = await ws.recv()
            image = base64_to_cv2(packet)
            frame = base64_to_cv2(packet)
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            hsvFrame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

            # Set range for red color and 
            # define mask
            red_lower = np.array([136, 87, 111], np.uint8)
            red_upper = np.array([180, 255, 255], np.uint8)
            red_mask = cv2.inRange(hsvFrame, red_lower, red_upper)

            # Set range for green color and 
            # define mask
            green_lower = np.array([25, 52, 72], np.uint8)
            green_upper = np.array([102, 255, 255], np.uint8)
            green_mask = cv2.inRange(hsvFrame, green_lower, green_upper)

            # Set range for blue color and
            # define mask
            blue_lower = np.array([94, 80, 2], np.uint8)
            blue_upper = np.array([120, 255, 255], np.uint8)
            blue_mask = cv2.inRange(hsvFrame, blue_lower, blue_upper)

            # Morphological Transform, Dilation
            # for each color and bitwise_and operator
            # between imageFrame and mask determines
            # to detect only that particular color
            kernal = np.ones((5, 5), "uint8")

            # For red color
            red_mask = cv2.dilate(red_mask, kernal)
            res_red = cv2.bitwise_and(frame, frame, 
                                    mask = red_mask)
            
            # For green color
            green_mask = cv2.dilate(green_mask, kernal)
            res_green = cv2.bitwise_and(frame, frame,
                                        mask = green_mask)
            
            # For blue color
            blue_mask = cv2.dilate(blue_mask, kernal)
            res_blue = cv2.bitwise_and(frame, frame,
                                    mask = blue_mask)
            
            # Creating contour to track red color
            contours, hierarchy = cv2.findContours(red_mask,
                                                cv2.RETR_TREE,
                                                cv2.CHAIN_APPROX_SIMPLE)
            
            for pic, contour in enumerate(contours):
                area = cv2.contourArea(contour)
                if(area > 300):
                    x, y, w, h = cv2.boundingRect(contour)
                    frame = cv2.rectangle(frame, (x, y), 
                                            (x + w, y + h), 
                                            (0, 0, 255), 2)
                    
                    cv2.putText(frame, "Red Colour", (x, y),
                                cv2.FONT_HERSHEY_SIMPLEX, 1.0,
                                (0, 0, 255))    
        
            # Creating contour to track green color
            contours, hierarchy = cv2.findContours(green_mask,
                                                cv2.RETR_TREE,
                                                cv2.CHAIN_APPROX_SIMPLE)
            
            for pic, contour in enumerate(contours):
                area = cv2.contourArea(contour)
                if(area > 300):
                    x, y, w, h = cv2.boundingRect(contour)
                    frame = cv2.rectangle(frame, (x, y), 
                                            (x + w, y + h),
                                            (0, 255, 0), 2)
                    
                    cv2.putText(frame, "Green Colour", (x, y),
                                cv2.FONT_HERSHEY_SIMPLEX, 
                                1.0, (0, 255, 0))
        
            # Creating contour to track blue color
            contours, hierarchy = cv2.findContours(blue_mask,
                                                cv2.RETR_TREE,
                                                cv2.CHAIN_APPROX_SIMPLE)
            for pic, contour in enumerate(contours):
                area = cv2.contourArea(contour)
                if(area > 300):
                    x, y, w, h = cv2.boundingRect(contour)
                    frame = cv2.rectangle(frame, (x, y),
                                            (x + w, y + h),
                                            (255, 0, 0), 2)
                    
                    cv2.putText(frame, "Blue Colour", (x, y),
                                cv2.FONT_HERSHEY_SIMPLEX,
                                1.0, (255, 0, 0))


            cv2.imshow('Socket data', frame)
            
            c = cv2.waitKey(1)
            if c == 27:
                break

if __name__ == '__main__':
    # Start the connection
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    website_server = websockets.serve(website_handler, "192.168.2.3", WEBSITE_PORT)
    try:
        asyncio.run(listen())
        
        asyncio.get_event_loop().run_until_complete(website_server)
    except KeyboardInterrupt:
        pass

    cv2.destroyAllWindows()
