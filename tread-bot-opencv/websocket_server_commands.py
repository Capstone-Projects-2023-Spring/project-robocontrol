import json
from websocket_server import WebsocketServer

# This file mainly for testing with websocket in own same computer before uploading to our website.

def new_client(client, server):
    print("Command client connected")

def client_left(client, server):
    print("Command client disconnected")

def message_received(client, server, message):
    print("Message received: ", message)
    data = json.loads(message)

def start_websocket_server():
    server = WebsocketServer(port=10334, host='127.0.0.1')
    server.set_fn_new_client(new_client)
    server.set_fn_client_left(client_left)
    server.set_fn_message_received(message_received)
    print("WebSocket server started on ws://localhost:10334")
    server.run_forever()

if __name__ == "__main__":
    start_websocket_server()
