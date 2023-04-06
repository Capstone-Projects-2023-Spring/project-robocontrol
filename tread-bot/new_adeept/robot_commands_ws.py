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
						if (message_data.get('autonomous', False)): speed = 70
						else: speed = 100

						# Speed of 50, turn radius of 0.5
						move.move(speed, message_data.get('direction', 'no'), message_data.get('turn', 'no'), 0.5)
						claw_command = message_data.get('claw', 'no')
						shoulder_command = message_data.get('shoulder', 'no')
						elbow_command = message_data.get('elbow', 'no')
						camera_command = message_data.get('camera', 'no')
						arm_claw_control(claw_command, shoulder_command, elbow_command, camera_command)

			except websockets.exceptions.ConnectionClosed as e:
				print('Command websocket closed, retrying connection...')
			except ConnectionRefusedError:
				print('Command connection refused, retrying...')
			except Exception as e:
				print('Error: ' + str(e))
				print('Command connection refused, retrying...')
