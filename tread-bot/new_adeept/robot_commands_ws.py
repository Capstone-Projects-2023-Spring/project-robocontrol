import asyncio
import json
from move import arm_claw_control
import websockets
import functions
import move

class RobotCommandWS():
    PORT = 10334
    HOST = '192.168.2.1'
    HOST_PATH = 'ws://' + HOST + ':' + str(PORT)

    def __init__(self) -> None:
        self.fuc = functions.Functions()
        self.fuc.start()
        self.clients = set()
        self.robot_ws = None
        self.waiting_queue = []
        self.active_queue = []

    async def send_message(self, ws, message):
        await ws.send(json.dumps(message))

    def update_queue_positions(self):
        for index, client in enumerate(self.waiting_queue):
            asyncio.create_task(self.send_message(client, {
                'type': 'queue_position',
                'position': index + 1,
            }))

    async def handle_client(self, websocket, path):
        print("Client connected")

        await self.send_message(websocket, {
            'type': 'welcome',
            'message': 'Welcome to the WebSocket server!'
        })

        self.waiting_queue.append(websocket)
        self.update_queue_positions()

        if not self.active_queue and self.waiting_queue:
            active_user = self.waiting_queue.pop(0)
            self.active_queue.append(active_user)
            await self.send_message(active_user, {'type': 'your_turn'})
            self.update_queue_positions()

        try:
            async for message in websocket:
                print(f"Received message: {message}")
                parsed_message = json.loads(message)

                if parsed_message['type'] == 'join_queue':
                    await self.send_message(websocket, {
                        'type': 'queue_position',
                        'position': 1
                    })

                elif parsed_message['type'] == 'login':
                    pass

                else:
                    pass

        except websockets.exceptions.ConnectionClosedError:
            print("Client disconnected")
            if websocket in self.waiting_queue:
                self.waiting_queue.remove(websocket)

            if self.active_queue and self.active_queue[0] == websocket:
                self.active_queue.pop(0)

                if self.waiting_queue:
                    active_user = self.waiting_queue.pop(0)
                    self.active_queue.append(active_user)
                    await self.send_message(active_user, {'type': 'your_turn'})
                    self.update_queue_positions()


    async def connect(self):
        print('Commands listening to ' + RobotCommandWS.HOST_PATH)

        async def handle_commands(websocket, path):
            print('Commands connected to ' + RobotCommandWS.HOST_PATH)
            await websocket.send('robot')
            while True:
                msg = await websocket.recv()
                message_data = json.loads(msg)
                print(message_data)
                speed = 50 if message_data.get('autonomous', False) else 100

                move.move(speed, message_data.get('direction', 'no'), message_data.get('turn', 'no'), 0.5)
                claw_command = message_data.get('claw', 'no')
                shoulder_command = message_data.get('shoulder', 'no')
                elbow_command = message_data.get('elbow', 'no')
                camera_command = message_data.get('camera', 'no')
                arm_claw_control(claw_command, shoulder_command, elbow_command, camera_command)

        # Serving the WebSocket server for clients to connect
        server = await websockets.serve(self.handle_client,'0.0.0.0', 10334)
        while True:
            try:
                async with websockets.connect(RobotCommandWS.HOST_PATH, ping_timeout=None) as ws:
                    self.robot_ws = ws
                    asyncio.create_task(handle_commands(ws, None))
                    await server.wait_closed()

            except websockets.exceptions.ConnectionClosed as e:
                print('Command websocket closed, retrying connection...')
            except ConnectionRefusedError:
                print('Command connection refused, retrying...')
            except Exception as e:
                print(f'Error: {str(e)}')
                print('Command connection refused, retrying...')
		

