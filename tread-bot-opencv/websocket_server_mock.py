import json
from websocket_server import WebsocketServer
from collections import deque

# This file mainly for testing with websocket in own same computer before uploading to our website.

# Create a waiting queue with a maximum size of 8
waiting_queue = deque(maxlen=8)
active_client = None

def new_client(client, server):
    global waiting_queue, active_client

    if not active_client:
        active_client = client
        server.send_message(client, json.dumps({"response": "You are now in control"}))
    else:
        waiting_queue.append(client)
        server.send_message(client, json.dumps({"response": "You are in the waiting queue"}))
        
    print("New client connected")

def client_left(client, server):
    global waiting_queue, active_client

    if client == active_client:
        active_client = None
        if waiting_queue:
            active_client = waiting_queue.popleft()
            server.send_message(active_client, json.dumps({"response": "You are now in control"}))
    else:
        waiting_queue.remove(client)

    print("Client disconnected")

def message_received(client, server, message):
    global active_client

    if client == active_client:
        print("Message received: ", message)
        data = json.loads(message)
        response = {"response": "Message processed"}
        server.send_message(client, json.dumps(response))
    else:
        response = {"response": "You are not in control"}
        server.send_message(client, json.dumps(response))

def start_websocket_server():
    server = WebsocketServer(port=10334, host='127.0.0.1')
    server.set_fn_new_client(new_client)
    server.set_fn_client_left(client_left)
    server.set_fn_message_received(message_received)
    print("WebSocket server started on ws://localhost:10334")
    server.run_forever()

if __name__ == "__main__":
    start_websocket_server()
