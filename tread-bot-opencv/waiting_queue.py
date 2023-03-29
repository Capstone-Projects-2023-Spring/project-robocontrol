import asyncio
from collections import deque


class WaitingQueue:
    def __init__(self):
        self.queue = deque()
        self.active_user = None

    def add_user(self, websocket):
        self.queue.append(websocket)
        if len(self.queue) == 1:
            self.active_user = websocket
            asyncio.create_task(self.notify_position())

    def remove_user(self, websocket):
        self.queue.remove(websocket)
        if self.active_user == websocket:
            self.active_user = None
            self.next_user()

    def get_active_user(self):
        return self.active_user

    def next_user(self):
        if len(self.queue) > 0:
            self.active_user = self.queue.popleft()
            asyncio.create_task(self.notify_position())

    async def notify_position(self):
        for idx, websocket in enumerate(self.queue):
            position = idx + 1
            await websocket.send('{"type": "queue_position", "position": ' + str(position) + '}')
