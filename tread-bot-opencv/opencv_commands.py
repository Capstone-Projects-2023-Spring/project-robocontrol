import websockets
import asyncio
from waiting_queue import WaitingQueue  


class CommandWS():

    PORT = 10334
    HOST = '192.168.2.1'

    def __init__(self) -> None:
        self.clients = set()
        self.robot_ws = None
        self.waiting_queue = WaitingQueue()  

    async def start_server(self):
        # Start the servers
        async with websockets.serve(self.serve, CommandWS.HOST, CommandWS.PORT, ping_timeout=None):
            await asyncio.Future()

    async def serve(self, websocket):
        print("Command client connected")
        self.clients.add(websocket)
        self.waiting_queue.add_user(websocket)  # add websocket into waiting queue
        try:
            while True:
                msg = await websocket.recv()
                if msg == 'robot':
                    self.robot_ws = websocket
                elif self.robot_ws:
                    if self.waiting_queue.get_active_user() == websocket:  # only activated user can send command
                        await self.robot_ws.send(msg)
                    else:
                        # delete user from queue once he has done
                        if msg == 'done':
                            self.waiting_queue.remove_user(websocket)
                            self.waiting_queue.next_user()  # activate next user
                            active_user = self.waiting_queue.get_active_user()
                            if active_user:
                                await active_user.send('{"type": "your_turn"}')  # tell current user about his state
        except websockets.exceptions.ConnectionClosed as e:
            print("Command client disconnected")
        finally:
            self.clients.remove(websocket)
            self.waiting_queue.remove_user(websocket)  # delete disconnected websocket from waiting queue