# Importing the relevant libraries
import websockets
import asyncio
import cv2
import base64

# Server data
OPENCV_PORT = 8998
WEBSITE_PORT = 8999

# The pi cam capture
vid = cv2.VideoCapture(0)

def cv2_to_base64(img):
    _, img_encoded = cv2.imencode('.jpg', img) # Convert image into memory buffer
    img_bytes = img_encoded.tobytes() # Convert memory buffer to bytes
    return base64.b64encode(img_bytes) # Convert bytes to base64

# Handler for all the OpenCV code
async def opencv_handler(websocket, path):
    print("OpenCV client connected")

    # Handle incoming messages
    try:
        # Send a response to all connected clients
        while(vid.isOpened()):
            b64_image = cv2_to_base64(vid.read()[1])
            await websocket.send(b64_image)
                    
    # Handle disconnecting clients 
    except websockets.exceptions.ConnectionClosed as e:
        print("A client just disconnected")

# Handler for the website
async def website_handler(websocket, path):
    print("Website client connected")
    async for message in websocket:
        print('[Message]: ' + message)

if __name__ == '__main__':
    print("Server listening on Port " + str(OPENCV_PORT))
    print("Server listening on Port " + str(WEBSITE_PORT))
    
    # Start the servers
    opencv_server = websockets.serve(opencv_handler, "192.168.2.3", OPENCV_PORT)
    website_server = websockets.serve(website_handler, "192.168.2.3", WEBSITE_PORT)
    asyncio.get_event_loop().run_until_complete(opencv_server)
    asyncio.get_event_loop().run_until_complete(website_server)
    asyncio.get_event_loop().run_forever()
