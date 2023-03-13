import cv2 as cv
import sys
import websockets
import asyncio
import base64
import numpy as np 

WEBSOCKET = "ws://192.168.2.3:8998"

def base64_to_cv2(img):
    img_bytes = base64.b64decode(img)
    im_arr = np.frombuffer(img_bytes, dtype=np.uint8)
    
    return cv2.imdecode(im_arr, flags=1)

async def listen():
    # Connect to the server
    async with websockets.connect(WEBSOCKET) as ws:
        # Stay alive forever, listening to incoming msgs
        while True:
            img = await ws.recv()
            image = base64_to_cv2(img)

            cv2.imshow('Socket data', image)
            c = cv2.waitKey(0)
            if c == "s":
                break


# img = await ws.recv()

# if img is None:
#     sys.exit("Could not read the image.")
# cv.imshow("Display window", img)
# k = cv.waitKey(0)
# if k == ord("s"):
#     cv.imwrite("starry_night.png", img)