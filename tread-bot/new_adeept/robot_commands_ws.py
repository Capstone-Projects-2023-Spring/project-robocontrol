# Importing the relevant libraries
import websockets
import functions
import move
import json
import asyncio
from move import arm_claw_control

class RobotCommandWS():
	
	PORT = 10334
	HOST = '192.168.2.1'
	HOST_PATH = 'ws://' + HOST + ':' + str(PORT)

	def __init__(self) -> None:
		fuc = functions.Functions()
		fuc.start()
		self.clients = set()
		self.robot_ws = None
		self.autonomous = False
		self.connected = False

	async def connect(self):
		print('trying')
		while True:
			try:
				async with websockets.connect(RobotCommandWS.HOST_PATH, ping_timeout=None) as ws:
					print('Commands connected to ' + RobotCommandWS.HOST_PATH)
					self.connected = True
					await ws.send('robot')
					await asyncio.gather(
						self.send(ws),
						self.receive(ws),
					)
					print('Done')
			except websockets.exceptions.ConnectionClosed as e:
				print('Command websocket closed, retrying connection...')
			except ConnectionRefusedError:
				print('Command connection refused, retrying...')
			except Exception as e:
				print('Error: ' + str(e))
				print('Command connection refused, retrying...')
			print('Command connection refused, retrying...')
	
	async def receive(self, ws):
		speed = 100
		print('test1')
		try:
			while True:
				msg = await ws.recv()
				print(msg)
				message_data = json.loads(msg)

				if 'autonomous' in message_data:
					speed = 100 if speed == 30 else 30
					self.autonomous = not self.autonomous

				move.move(speed, message_data.get('direction', 'no'), message_data.get('turn', 'no'), 0.5)
				claw_command = message_data.get('claw', 'no')
				shoulder_command = message_data.get('shoulder', 'no')
				elbow_command = message_data.get('elbow', 'no')
				camera_command = message_data.get('camera', 'no')
				arm_claw_control(claw_command, shoulder_command, elbow_command, camera_command)
				await asyncio.sleep(0.01)
		except Exception as e:
			print('error: ' + str(e))
		self.connected = False
	
	async def send(self, ws):
		print('test2')

		while self.connected:
			if self.autonomous:
				ultrasonic_data = functions.get_ultrasonic_distance()
				print('Sending data')
				await ws.send(json.dumps({"ultrasonic_data": ultrasonic_data}))
			await asyncio.sleep(0.1)
