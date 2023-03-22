# Importing the relevant libraries
import websockets
import functions
import move
import json

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
		try:
			async with websockets.connect(RobotCommandWS.HOST_PATH, ping_timeout=None) as ws:
				print('Commands connected to ' + RobotCommandWS.HOST_PATH)
				# Stay alive forever, listening to incoming msgs
				await ws.send('robot')
				while True:
					msg = await ws.recv()
					print('Command received')
					message_data = json.loads(msg)
					move.move(100, message_data['direction'], message_data['turn'], 0.5)
		except websockets.exceptions.ConnectionClosed as e:
			print(e)
