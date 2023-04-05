# Importing the relevant libraries
import websockets
import functions
import move
import json
from move import arm_claw_control
from queue import Queue

class RobotCommandWS():

	PORT = 10334
	HOST = '192.168.2.1'
	HOST_PATH = 'ws://' + HOST + ':' + str(PORT)

	def __init__(self) -> None:
		fuc = functions.Functions()
		fuc.start()
		self.clients = set()
		self.robot_ws = None
		self.waiting_queue = Queue()
		self.active_queue = Queue()

	async def connect(self):
		print('Commands listening to ' + RobotCommandWS.HOST_PATH)
		# Connect to the server
		while True:
			try:
				async with websockets.connect(RobotCommandWS.HOST_PATH, ping_timeout=None) as ws:
					print('Commands connected to ' + RobotCommandWS.HOST_PATH)
					# Stay alive forever, listening to incoming msgs
					await ws.send('robot')

					# Add user to the waiting queue
					self.waiting_queue.put(ws)

					# If active_queue is empty and waiting_queue has users, pop one user to active_queue
					if self.active_queue.empty() and not self_waiting_queue.empty():
						active_user = self.waiting_queue.get()
						self.active_queue.put(active_user)

					# Process messages for the active user
					while ws == self.active_queue.queue[0]:
						msg = await ws.recv()
						message_data = json.loads(msg)

						# Check for 'login' event
						if message_data.get('event') == 'login':
							username = message_data['username']
							self.waiting_queue.put(username)
							await ws.send(json.dumps({'event': 'waiting_queue_update', 'queue': list(self.waiting_queue.queue)}))
						else:
							print(message_data)
							move.move(50, message_data['direction'], message_data['turn'], 0.5)
							arm_command = message_data.get('arm_command', None)
							if arm_command:
								if arm_command in ['close', 'open', 'up', 'down']:
									arm_claw_control(arm_command)
								else:
									pass

					# If websocket is closed, remove it from active_queue and waiting_queue
					self.active_queue.get(ws)
					self.waiting_queue.get(ws)

			except websockets.exceptions.ConnectionClosed as e:
				print('Command websocket closed, retrying connection...')
			except ConnectionRefusedError:
				print('Command connection refused, retrying...')
			except Exception as e:
				print('Error: ' + str(e))
				print('Command connection refused, retrying...')
