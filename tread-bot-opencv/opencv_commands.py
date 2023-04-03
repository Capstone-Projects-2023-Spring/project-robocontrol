import json
from typing import List
import websockets
import asyncio
from queue import Queue
import copy
from waiting_queue import WaitingQueue

class CommandWS():
    PORT = 10334
    HOST = '192.168.2.1'

    def __init__(self) -> None:
        self.clients = set()
        self.robot_ws = None
        self.command_q = Queue()
        self.autonomous = [False]
        self.waiting_queue = WaitingQueue()

    async def start_server(self, command_q: Queue, autonomous: List[bool]):
        self.command_q = command_q
        self.autonomous = autonomous
        async with websockets.serve(self.serve, CommandWS.HOST, CommandWS.PORT, ping_timeout=None):
            await asyncio.Future()

    async def serve(self, websocket):
        await asyncio.gather(
            self.send(websocket),
            self.receive(websocket),
        )

    async def send(self, websocket):
        print('connected')
        try:
            while True:
                if self.autonomous[0]:
                    try:
                        msg = self.command_q.get(timeout=0.2)
                    except Exception:
                        msg = None
                        await asyncio.sleep(0)
                    if msg:
                        await websocket.send(json.dumps(msg))
                await asyncio.sleep(.05)
        except websockets.exceptions.ConnectionClosed as e:
            print("Command client disconnected")

    async def receive(self, websocket):
        print("Command client connected")
        self.clients.add(websocket)
        self.waiting_queue.add_user(websocket)
        try:
            while True:
                msg = await websocket.recv()
                if (msg == 'robot'):
                    self.robot_ws = websocket
                elif (msg == 'autonomous'):
                    self.autonomous[0] = not self.autonomous[0]
                    await self.robot_ws.send(json.dumps({'direction': 'no', 'turn': 'no'}))
                    print(self.autonomous)
                elif (not self.autonomous[0] and self.robot_ws):
                    if self.waiting_queue.get_active_user() == websocket:
                        await self.robot_ws.send(msg)
                    else:
                        if msg == 'done':
                            self.waiting_queue.remove_user(websocket)
                            self.waiting_queue.next_user()
                            active_user = self.waiting_queue.get_active_user()
                            if active_user:
                                await active_user.send('{"type": "your_turn"}')
        except websockets.exceptions.ConnectionClosed as e:
            print("Command client disconnected")
        finally:
            self.clients.remove(websocket)
            self.waiting_queue.remove_user(websocket)
