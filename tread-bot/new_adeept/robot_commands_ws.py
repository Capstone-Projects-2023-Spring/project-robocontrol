# Importing the relevant libraries
import websockets
import functions
import move
import json
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
	
	async def connect(self):
		print('Commands listening to ' + RobotCommandWS.HOST_PATH)
		# Connect to the server
		while True:
			try:
				async with websockets.connect(RobotCommandWS.HOST_PATH, ping_timeout=None) as ws:
					print('Commands connected to ' + RobotCommandWS.HOST_PATH)
					# Stay alive forever, listening to incoming msgs
					await ws.send('robot')
					while True:
						msg = await ws.recv()
						message_data = json.loads(msg)
						print(message_data)
						move.move(50, message_data['direction'], message_data['turn'], 0.5)
						arm_command = message_data.get('arm_command', None)
						if arm_command:
							if arm_command in ['close', 'open']:
								arm_claw_control(arm_command)
							else:
								print(f"Unknown arm_command: {arm_command}")
			except websockets.exceptions.ConnectionClosed as e:
				print('Command websocket closed, retrying connection...')
			except ConnectionRefusedError:
				print('Command connection refused, retrying...')
			except Exception as e:
				print('Error: ' + str(e))
				print('Command connection refused, retrying...')
