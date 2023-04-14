# I had Migrated these codes and them combine them into the opencv_commands.py,
# so we can just chech opencv_commands.py for WaitingQueue codes.
import asyncio
import websockets
import json

class QueueWS:
    def __init__(self):
        self.clients = set()
        self.waiting_queue = [] 

    async def broadcast_queue_position(self, position):
        message = {
            'type': 'queue_position',
            'position': position
        }
        for client in self.clients:
            await client.send(json.dumps(message))
    
    async def update_queue_positions(self):
        for index, websocket in enumerate(self.waiting_queue):
            message = {
                'type': 'queue_position',
                'position': index + 1
            }
            try:
                await websocket.send(json.dumps(message))
            except websockets.exceptions.ConnectionClosedOK:
                pass


    async def handle_client(self, websocket, path):
        print("Client attempting to connect")
        await websocket.send(json.dumps({'type': 'server_log', 'message': f"New client connected, waiting queue length: {len(self.waiting_queue)}"}))
        self.clients.add(websocket)
        self.waiting_queue.append(websocket)
        print(f"New client connected, waiting queue length: {len(self.waiting_queue)}")
        await self.update_queue_positions()
        try:
            async for message in websocket:
                data = json.loads(message)
                if data["type"] == "join_queue":
                    self.waiting_queue.append(websocket)
                    await self.update_queue_positions()

        finally:
            self.clients.remove(websocket)
            self.waiting_queue.remove(websocket)
            await self.update_queue_positions()

    async def start(self):
        server = await websockets.serve(self.handle_client, '0.0.0.0', 10341)
        await server.wait_closed()



