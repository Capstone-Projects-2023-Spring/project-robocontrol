# Importing the relevant libraries
import json
import websockets
import asyncio
import cv2
import base64
import move

# Server data
OPENCV_PORT = 8998
WEBSITE_PORT = 8999

# The device the pi cam is recognized as
PI_CAM_PORT = 0

# The pi cam capture port
vid = cv2.VideoCapture(PI_CAM_PORT)

# Convert an OpenCV image to Base64 bytes for transmission
def cv2_to_base64(img):
    _, img_encoded = cv2.imencode('.jpg', img) # Convert image into memory buffer
    img_bytes = img_encoded.tobytes() # Convert memory buffer to bytes
    return base64.b64encode(img_bytes) # Convert bytes to base64

# Handler for all the OpenCV communication
async def opencv_handler(websocket, path):
    print("OpenCV client connected")

    try:
        # Send a video to OpenCV client
        while(vid.isOpened()):
            b64_image = cv2_to_base64(vid.read()[1])
            await websocket.send(b64_image)
    # Handle disconnecting clients 
    except websockets.exceptions.ConnectionClosed as e:
        print("The OpenCV client disconnected")

# Handler for the website messages
async def website_handler(websocket, path):
    print("Website client connected")

    try:
        # Receeive and print the incoming message from the website
        async for message in websocket:
            if message != '':
                message_data = json.loads(message)
                move.move(100, message_data['command'], 'no', 0.5)
                print('[Message]: ' + message)
            
            # Send a response to all connected clients
            b64_image = cv2_to_base64(vid.read()[1])
            await websocket.send(b64_image)
    # Handle disconnecting clients 
    except websockets.exceptions.ConnectionClosed as e:
        print("The website client disconnected")

if __name__ == '__main__':
    print("Server listening on Port " + str(OPENCV_PORT))
    print("Server listening on Port " + str(WEBSITE_PORT))
    
    # Start the servers
    opencv_server = websockets.serve(opencv_handler, "192.168.2.3", OPENCV_PORT)
    website_server = websockets.serve(website_handler, "192.168.2.3", WEBSITE_PORT)
    asyncio.get_event_loop().run_until_complete(opencv_server)
    asyncio.get_event_loop().run_until_complete(website_server)
    asyncio.get_event_loop().run_forever()
