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
            cv2.imshow('Socket data', image)
            print(image)
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
