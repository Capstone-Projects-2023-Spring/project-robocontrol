"""Web Socket"""
#!/usr/bin/env python

import websockets
import cv2
import asyncio
import base64
import numpy as np   

WEBSOCKET = "ws://192.168.2.3:8998"

def base64_to_cv2(img):
    img_bytes = base64.b64decode(img)
    im_arr = np.frombuffer(img_bytes, dtype=np.uint8)
    return cv2.imdecode(im_arr, flags=1)

# The main function that will handle connection and communication with the server
async def listen():
    # Connect to the server
    async with websockets.connect(WEBSOCKET) as ws:
        # Stay alive forever, listening to incoming msgs
        while True:
            packet = await ws.recv()
            image = base64_to_cv2(packet)

            cv2.imshow('Socket data', image)
            c = cv2.waitKey(1)
            if c == 27:
                break

if __name__ == '__main__':
    # Start the connection
    asyncio.get_event_loop().run_until_complete(listen())
    cv2.destroyAllWindows()
