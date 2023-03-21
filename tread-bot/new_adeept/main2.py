"""Web Socket"""
#!/usr/bin/env python

import websockets
import cv2
import asyncio
import base64
import numpy as np
import json

WEBSOCKET = "ws://192.168.2.3:8997"

# The device the pi cam is recognized as
PI_CAM_PORT = 0

# The pi cam capture port
vid = cv2.VideoCapture(PI_CAM_PORT)

# Convert an OpenCV image to Base64 bytes for transmission
def cv2_to_base64(img):
    _, img_encoded = cv2.imencode('.jpg', img) # Convert image into memory buffer
    img_bytes = img_encoded.tobytes() # Convert memory buffer to bytes
    return base64.b64encode(img_bytes) # Convert bytes to base64

# The main function that will handle connection and communication with the server
async def listen():
    print('Listening for ' + WEBSOCKET)
    # Connect to the server
    async with websockets.connect(WEBSOCKET) as ws:
        print('Connected to ' + WEBSOCKET)
        # Send a video to OpenCV client
        while(vid.isOpened()):
            json_data = {
                'image': cv2_to_base64(vid.read()[1]).decode('utf-8'),
                'direction': '',
                'turn': ''
            }
            await ws.send(json.dumps(json_data))

if __name__ == '__main__':
    # Start the connection
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    try:
        asyncio.run(listen())
    except KeyboardInterrupt:
        pass

    cv2.destroyAllWindows()
